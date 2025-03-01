import { getImgResponse, type GetImgSourceArgs, type ImgSource } from "openimg/node";
import  { type Route } from "./+types/img";

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
    path: './public/img' + src,
  }
}

export function loader({ request }: Route.LoaderArgs) {
  const headers = new Headers();
  headers.set("Cache-Control", "public, max-age=31536000, immutable");
  return getImgResponse(request, { headers, getImgSource });
}
