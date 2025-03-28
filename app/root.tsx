import {
	data,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from 'react-router'
import { HoneypotProvider } from 'remix-utils/honeypot/react'
import { type Route } from './+types/root.ts'
import appleTouchIconAssetUrl from './assets/favicons/apple-touch-icon.png'
import faviconAssetUrl from './assets/favicons/favicon.svg'
import { GeneralErrorBoundary } from './components/error-boundary.tsx'
import { href as iconsHref } from './components/ui/icon.tsx'
import fontStyleSheetUrl from './styles/archivo.css?url'
import tailwindStyleSheetUrl from './styles/tailwind.css?url'
import { ClientHintCheck, getHints } from './utils/client-hints.tsx'
import { getEnv } from './utils/env.server.ts'
import { pipeHeaders } from './utils/headers.server.ts'
import { honeypot } from './utils/honeypot.server.ts'
import { combineHeaders, getDomainUrl } from './utils/misc.tsx'
import { useNonce } from './utils/nonce-provider.ts'
import { makeTimings } from './utils/timing.server.ts'

export const links: Route.LinksFunction = () => {
	return [
		// Preload svg sprite as a resource to avoid render blocking
		{ rel: 'preload', href: iconsHref, as: 'image' },
		{ rel: 'preload', href: fontStyleSheetUrl, as: 'style' },
		{ rel: 'stylesheet', href: fontStyleSheetUrl },
		{
			rel: 'icon',
			href: '/favicon.ico',
			sizes: '48x48',
		},
		{ rel: 'icon', type: 'image/svg+xml', href: faviconAssetUrl },
		{ rel: 'apple-touch-icon', href: appleTouchIconAssetUrl },
		{
			rel: 'manifest',
			href: '/site.webmanifest',
			crossOrigin: 'use-credentials',
		} as const, // necessary to make typescript happy
		{ rel: 'stylesheet', href: tailwindStyleSheetUrl },
	].filter(Boolean)
}

export const meta: Route.MetaFunction = ({ data }) => {
	return [
		{ title: data ? 'Rohna' : 'Error | Rohna' },
		{ name: 'description', content: `Tampa Indie Band Rohna` },
	]
}

export async function loader({ request }: Route.LoaderArgs) {
	const timings = makeTimings('root loader')

	const honeyProps = await honeypot.getInputProps()

	return data(
		{
			requestInfo: {
				hints: getHints(request),
				origin: getDomainUrl(request),
				path: new URL(request.url).pathname,
			},
			ENV: getEnv(),
			honeyProps,
		},
		{
			headers: combineHeaders(
				{ 'Server-Timing': timings.toString() },
			),
		},
	)
}

export function HydrateFallback() {
  return (
    <div id="loading" className="flex flex-col w-full h-svh justify-center items-center gap-2">
      <svg id="rohnaEmblem" className="size-16 animate-pulse" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" fill="#f9f5e6" stroke-color="#f9f5e6" viewBox="0 0 507.86 470.46">
			<g id="Layer_1-2" data-name="Layer 1">
				<path fill="#f9f5e6" d="M182.93,470.46c-.38-2.44-1.22-2.98-3.13-3.3-16.41-2.75-39.39,2.91-55.76.1-2.47-.43-2.95-2.76-5.16-3.24-6.26-1.35-16.53,1.24-21.35-.28-1.99-.63-3.7-4.19-6.25-4.73,1.64-4.55,1.86-12.45,4.1-16.35.96-1.66,5.15-4.88,6.83-6.85,1.23-1.44,1.89-3.4,3.56-5.26,2.97-3.31,10.21-7.62,12.07-10.21,1.83-2.54,1.38-4.79,2.39-7.07.95-2.14,2.99-2.17,3.86-3.43,1.46-2.11,4.33-15.14,4.49-17.91.17-3.06-2.45-3.93-2.51-6.2-.15-5.83,4.42-17.02,4.74-23.25.11-2.14-1.42-2.72-1.31-4.85.37-6.91,2.66-9.5,5.09-14.68,3.36-7.17-.24-6.97-.25-8.24,0-1.08,1.95-9.72,2.39-10.32.31-.42,1.51-.51,1.95-1.1.83-1.1,5.77-23.52,5.88-25.92.09-1.94-1.24-2.48-1.31-3.78-.12-2.49,5.68-29.57,6.85-33.12.93-2.84,2.62-3.04,3.55-5.87,2.98-9.09,6.23-38.22,9.55-43.6.73-1.18,2.81-2.06,3.53-3.23,1.29-2.09,6.72-29.06,6.08-30.48-.76-1.68-2.38-.21-1.89-4.58.8-7.14,5.05-28.09,7.31-34.73,1.21-3.55,3.41-2.81,4.29-4.46.77-1.45,2.06-8.2,1.45-9.42-.37-.74-1.79-1.03-2.06-1.78-.56-1.55.82-3.77.79-5.27-.02-.74-1.48-.69-1.6-1.68-.5-4.32,4.37-16.47,4.52-21.79.06-1.91-1.66-2.32-1.74-3.65-.08-1.41.77-2.92.47-4.36-.18-.86-1.55-1.39-1.64-2.57-.13-1.83,1.16-4.13,1.02-5.9-.12-1.54-2.03-1.52-2.03-2.33,0-1.41.93-3.02.62-4.79-.14-.82-2.4-2.34-3.09-3.54-.57-.99-.47-2.34-.94-3.06-3.94-6.02-8.84-7.96-11.96-15.05-.46-1.04-2.4-2.58-1.99-3.6,1.78-.59,4.14-4.63,4.41-4.82.53-.36,1.86.11,2.7-.2,2.02-.76,6.76-3.28,8.74-3.62,13.16-2.25,32.39,2.24,46.16.63,2.36-.28,3.11-2.01,5.05-2.41,4.34-.9,10.31.8,14.57.05,1.53-.27,2-1.64,4.15-1.9,2.78-.33,12.71-.2,15.28.27,1.73.32,2.23,1.7,4.14,1.98,2.26.33,15.27.47,16.94-.15,1.67-.61,4.81-4.07,6.39-4.44l2.64,1.73c4.43-3.08,2.52-.86,5.08.61.49.28,5.11,2.48,5.42,2.58,2.06.68,5.22-.31,7.33.36,1.17.37,1.74,2.37,3.69,2.5,1.86.12,3.1-2.22,5.98-2.52,6.66-.69,36.8-.6,42.49.6,1.7.36,1.88,2.08,3.07,2.47,1.65.53,3.81-.21,5.43.33,2.46.81,4.57,1.29,6.81,2.02.82.27,1.18,1.43,2.01,1.71,2.56.86,7.01-.37,9.86.42,1.76.49,3.06,2.96,4.4,3.71,5.36,2.99,12.05,3.41,17.92,5.02,1.99.55,3.39,3.44,4.72,4.14,12.77,6.69,17.03,16.5,24.32,28.44,1.43,2.35,5.7,4.34,6.59,5.91.97,1.7,2.32,6.42,3.32,7.97.76,1.19,4.11,2.72,4.8,4.54.63,1.66-.06,3.08.18,4.4.14.77,1.69.49,1.94,2.24.58,3.96-1.63,16.1.04,18.61.44.67,1.86.72,2.02,1.53,1.09,5.37-2.13,5.75-2.8,7.95-.59,1.93.12,4.3-.47,6.29-1.34,4.56-7.11,8.02-7.98,10.08-1.57,3.71-4.45,10.48-5.52,13.99-.46,1.49.03,3.14-.68,4.78-.83,1.94-4.43,3.3-5.42,4.89-.72,1.16-.45,2.51-1.26,3.56-1.45,1.88-26.15,23.33-28.08,24.33-1.23.63-2.85.21-3.97,1.14-.99.83-1.07,3.09-1.91,3.68-.85.6-2.41.21-3.58.78-1.62.78-6.13,6.76-8.11,7.4s-4.22-.36-6.14.28c-3.39,1.13-16.95,10.76-19.47,14.01-.24.31-3.92,6.35-4.06,6.73-.43,1.23-1.23,9.29-1.08,10.53.12.93,1.64.97,2.09,1.78.34.61,2.89,5.79,2.97,6.15.28,1.39-.4,3.26-.15,4.81s2.08,2.23,2.33,3.78c.28,1.7-.45,3.56.08,5.41.96,3.34,10.55,10.17,12.57,13.6.84,1.43.44,3.1,1.13,4.43.6,1.15,15.95,17.07,17.36,18,1.85,1.22,4,1.02,5.31,2.48,1.43,1.59.88,3.83,1.88,5.5.66,1.11,4.4,3.53,4.8,4.4.49,1.07-.05,2.61,1.03,4.41,2.07,3.46,11.96,10.37,13.24,13.15,1.95,4.27,3.74,9.28,6.46,13.39,5.99,9.07,11.72,10.13,17.69,22.03.88,1.75,3.12,2.44,3.85,3.78.89,1.63.44,3.8,1.69,5.48,1.53,2.05,4.26,1.43,4.9,2.11.28.31.34,2.49,1.18,3.77,6.17,9.34,23.15,18.68,26.28,24.96,3.78,7.6,6.7,8.22,9.12,12.59,2.23,4.04,4.83,9.47,6.75,13.9,1.32,3.05,3.22,2.38,2.81,7.91-.3,4.06-2.6,4.17-3.14,6.49-.92,4,1.34,10.04-2.66,12.47-2.09,1.27-5.28.1-6.49,3.8h-39.97c-1.4-5.18-5.49-2.3-8.31-3.43-2.28-.91-8.76-6.45-10.67-7.04-3.76-1.15-8.73.83-12.45-.7-2.2-.9-3.13-4.38-4.62-5.31-2.57-1.61-8.21-2.78-10.72-4.74-2.39-1.87-2.27-6.67-4.44-8.33-2.32-1.78-9.79-3.73-11.68-6.29-1.01-1.37-1-3.69-2-5.27-4.04-6.36-14.85-18.84-16.03-26.1-.37-2.29.6-4.13-.4-6.84-.77-2.09-3.73-3.38-4.46-4.85-2.23-4.53-4.35-9.88-7.03-14.35-.98-1.64-4.05-4.16-4.3-4.85-.53-1.46.12-3.34-.41-4.8s-4.24-3.25-4.95-4.91c-2.47-5.75-5.03-17.36-7.64-22.28-3.3-6.21-10.79-16.66-12.62-23.55-.51-1.91.35-3.89-.49-5.95-1.02-2.49-3.59-1.91-5.45-3.06-2.34-1.45-4.89-3.63-7.69-5.43-5.45-3.51-9.4-13.56-11.85-19.7-2.91-7.3-6.74-14.13-10.78-20.84-3.88-6.44-7.9-6.85-11.3-15.23-.65-1.6-3.92-5.07-5.34-5.59-2.47-.9-20.35-1.06-23.56-.5-2.33.4-3.82,2.62-5.76,3.09-6.66,1.63-7.97,2.76-14.21,5.61-3.8,1.74-2.85,3.4-4.65,5.89-1.34,1.85-4.91,2.83-5.91,5.21-2.88,6.83-2.51,21.56-5.1,29.4-.78,2.37-2.53,2.67-3.28,4.01-1.16,2.06-8.35,44.43-7.89,46.61.3,1.42,1.99,1.76,1.96,4.28-.09,8.7-5.16,22.73-5.28,31.66-.04,2.68,1.99,3.22,2.13,5.13.19,2.65-1.4,6.17-1.14,8.54.18,1.65,2.21,1.63,2.39,3.3.3,2.66-1.65,7.02-1.35,9.71.18,1.63,2.25,1.73,2.42,3.34.21,2.01-1.06,4.75-.86,6.82.13,1.35,1.63,1.35,1.94,2.37.88,2.79,1.27,8.5,2.19,11.13,1.44,4.12,7.5,9.84,10.43,16.67.87,2.03,2.93,1.95,2.72,4.16-1.3,5.47-.28,12.28-5.36,15.33-1.95,1.17-3.36.78-4.87,1.48-1.46.67-2.23,2.51-3.98,2.94-4.67,1.15-11.47-2.87-15.01,3.26h-14.94ZM381.72,88c-.17-.16-2.31-.16-3.51-.76-3.72-1.85-8.76-9.55-12.58-11.8-4.58-2.7-10.65-6.18-15.65-7.44-1.57-.39-3.31.09-4.87-.35-1.79-.5-3.17-3.36-4.41-3.77-2.21-.74-5.45.32-7.94-.53-1.91-.65-2.82-3.49-4.02-4.06-1.12-.53-2.48-.15-3.34-.53-5.83-2.61-7.78-5.19-15.74-3.99-1.75.26-2.71,1.61-4.19,1.87-3.98.7-9.42-.65-13.55-.18-1.98.23-2.79,1.51-4.26,1.83-4.15.9-4.49-.16-9.56,1.63-4.97,1.76-12.58,4.03-16.61,8.14-5.57,5.68-3.76,8.92-5.99,13.75-.51,1.1-4.82,5.36-5.61,6.39-3.42,4.48.58,5.78.61,8.22.03,1.99-3.4,21.19-4.09,22.27-.6.95-2.22,1.38-3.1,2.1l-.47,1.05c3.81,2.93,2.15,11.12.66,16.14-.76,2.56-1.68,2.71-3.82,3.97l-.48,1.08c5.19,4.17.46,11.2.49,17.29.01,2.15,2.03,2.54,1.99,4.63-.08,4.85-5.47,6.18-4.82,12.83.12,1.21,1.53,2.1,1.74,3.63.77,5.66,1.86,9.72,3.11,15.01.35,1.5-.38,3.22-.05,4.75.31,1.43,3.13,3.64,3.82,5.21.53,1.21,0,2.61.32,3.43.29.77,12.43,7.37,13.33,7.58,6.13,1.4,24.57.56,30.76-2.59,1.06-.54,1.77-2.22,3.01-2.61,1.98-.62,4.21.36,6.17-.27,1.07-.34,1.7-1.89,3.29-2.22,2.96-.62,6.98.67,9.94.06,1.58-.33,2.21-1.88,3.26-2.21,1.7-.54,3.55.19,5.41-.3,2.26-.6,4.63-4.28,6.72-4.99,2.99-1.01,6.73.55,9.3-.69,1.74-.84,6.07-6.04,7.53-6.49,2.14-.66,4.41.52,6.58-.51.3-.14,4.97-4.18,5.16-4.48,2.5-3.82,3.62-6.63,8.07-9.41,1.54-.97,3.74-.99,4.12-1.32s.56-2.69,2.15-3.73,3.1-.38,4.64-1.06c.78-.35,7.56-6.86,7.95-7.89.55-1.48.33-3.27,1.01-4.58.72-1.39,4.61-2.69,5.39-4.99.99-2.88.18-7.27.92-10.26.52-2.08,2.5-2.36,3.02-4.43.59-2.36,1.31-14.26.44-15.96-.41-.8-1.71-.96-1.83-1.66-.33-2.05,1.04-5.23.23-7.37-.59-1.54-4.22-2.54-4.59-4.08-.66-2.72,1.18-7.63.45-10.84-.74-3.23-4.64-8.73-6.15-12.04-.32-.71-.16-2.26-.38-2.46Z"/>
				<g id="DvnwFQ">
					<path fill="#f9f5e6" d="M138.95,459.69l-8.35,4.4c-2.2.05-9.38-.81-9.85-2.02l4.84-32.73-.89-1.89-101.75-17.78c-1.5.18-.76.29-.85.82-1.53,9.41-2.05,18.79-4.03,28.22l-8.87,4.48-9.21-1.69L59.39,40.11l4.24-28.63,8.61-4.29,8.98,1.68-5.02,38.29,101.77,17.8,1.39-1.34,3.06-21.14c6.1-4.59,14.85,2.42,21.05,5.42l-64.51,411.77ZM172.83,108.94l4.81-35.23-102.82-18.22-8.57,26.73,106.58,26.73ZM167.28,144.51l3.65-26.51-103.18-18.17-4.19,31.31,103.72,13.38ZM164.29,161.9l-103.2-17.39-4.83,35.23,101.73,17.79,2.02-.18,4.28-35.45ZM149.17,238.81l8.9-32.43-101.8-8.85-6.2,26.7,99.1,14.58ZM146.61,286.3l4.76-35.62-103.1-17.77-5.02,35.64,103.36,17.74ZM41.53,277.19l-4.06,35.48,102.07,17.97,5.09-35.69-103.1-17.76ZM133.79,374.71l4.77-35.63-98.62-12.59-9.24,30.46,103.1,17.75ZM127.05,418.98l4.77-35.62-103.1-17.76,1.59,36.76,96.74,16.63Z"/>
				</g>
				<polygon fill="#f9f5e6" points="57.98 41.3 79.61 11.11 52.89 0 53.94 15.94 54.8 28.92 57.98 41.3"/>
			</g>
      </svg>
      <p>Loading, please wait...</p>
    </div>
  );
}

export const headers: Route.HeadersFunction = pipeHeaders

function Document({
	children,
	nonce,
	env = {},
}: {
	children: React.ReactNode
	nonce: string
	env?: Record<string, string | undefined>
}) {
	const allowIndexing = ENV.ALLOW_INDEXING !== 'false'
	return (
		<html lang="en">
			<head>
				<ClientHintCheck nonce={nonce} />
				<Meta />
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				{allowIndexing ? null : (
					<meta name="robots" content="noindex, nofollow" />
				)}
				<Links />
			</head>
			<body>
				{children}
				<script
					nonce={nonce}
					dangerouslySetInnerHTML={{
						__html: `window.ENV = ${JSON.stringify(env)}`,
					}}
				/>
				<ScrollRestoration nonce={nonce} />
				<Scripts nonce={nonce} />
			</body>
		</html>
	)
}

export function Layout({ children }: { children: React.ReactNode }) {
	// if there was an error running the loader, data could be missing
	const data = useLoaderData<typeof loader | null>()
	const nonce = useNonce()
	return (
		<Document nonce={nonce} env={data?.ENV}>
			{children}
		</Document>
	)
}

function App() {
	return (
		<>
			<Outlet />
		</>
	)
}

function AppWithProviders() {
	const data = useLoaderData<typeof loader>()
	return (
		<HoneypotProvider {...data.honeyProps}>
			<App />
		</HoneypotProvider>
	)
}

export default AppWithProviders

// this is a last resort error boundary. There's not much useful information we
// can offer at this level.
export const ErrorBoundary = GeneralErrorBoundary
