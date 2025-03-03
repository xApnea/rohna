import { promises as fs, constants } from 'node:fs'
import { getImgResponse, type GetImgSourceArgs, type ImgSource } from "openimg/node";
import  { type Route } from "./+types/images";

let cacheDir: string | null = null

async function getCacheDir() {
	if (cacheDir) return cacheDir

	let dir = './data/images'
	if (process.env.NODE_ENV === 'production') {
		const isAccessible = await fs
			.access('/data', constants.W_OK)
			.then(() => true)
			.catch(() => false)

		if (isAccessible) {
			dir = '/data/images'
		}
	}

	return (cacheDir = dir)
}

function getImgSource({ request }: GetImgSourceArgs): ImgSource | Response {
  const src = new URL(request.url).searchParams.get("src");
  if (!src) {
    return new Response(null, {
      status: 400,
      statusText: 'Search param "src" must be set',
    });
  }
  // Retrieve image from filesystem (public folder)
  if (src.startsWith('/assets')) {
    // Files managed by Vite
    return {
      type: 'fs',
      path: '.' + src,
    }
  }
  // Fallback to files in public folder
  return {
    type: 'fs',
    path: './public' + src,
  }
}

export async function loader({ request }: Route.LoaderArgs) {
  const headers = new Headers();
  headers.set("Cache-Control", "public, max-age=31536000, immutable");

  return getImgResponse(request, { headers, cacheFolder: await getCacheDir(), getImgSource });
}
