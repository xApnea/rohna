import {
	data,
	Link,
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
      <svg id="rohnaEmblem" className="size-16 animate-pulse" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 764.61 669.9">
        <g id="Layer_1-2" data-name="Layer 1">
          <path fill="#f9f5e6"  d="M210,641.26c5.07-12.64,63.48-65.32,67.82-79.42,4.74-15.39-5.12-21.6,11.34-36.67,14.24-13.04,21.65-9.45,15.85-36.59-25.11-4.31-54.73-36.49-24.87-55.86,18.06-11.72,35.08-6.46,52.95,1.73-10.62-18.97,1.87-17.3,10.46-26.05,6-6.11,22.52-28.34,24.57-35.98s.81-14.47,4.27-22.86c3.3-8.02,10.88-13.63,13.96-21.51,8.09-20.73-12.79-57.25,10.05-71.35,17.06-10.53,45.79-12.18,53.72-36.09-8.45-2.37-34.75,21.44-37.59,6.27-5.46-29.16,17.29-26.17,36.92-38.24,32.27-19.85,2.58-41.03,18.52-64.96,1.9-2.86,33.42-28.24,37.9-31.02,14.41-8.95,25.91-7.03,37.77-12.37,8.58-3.87,10.78-13.75,24.57-15.16,27.36-2.78,44.5,28.21,22.58,33.01s-36.75.53-56.3,19.95h-.04c-2.13,2.12-10.67,13.08-10.84,15.27l8.03,21.57c54.63-11.85,113.26-18.9,164.84,7.55,14.06,7.21,20.44,16.45,30.81,23.49,7.82,5.31,17.63,4.7,25.86,13.83,9.41,10.44,13.94,36.65,10.06,49.64-2.17,7.28-15.13,6.95-16.28,11.01,13.7,24.25-9.09,30.96-23.07,45.68-3.56,3.75-9.38,10.59-12.45,14.69-10.24,13.69-18.64,40.11-35.43,43.92-7.17,1.62-14.15-.08-21.19,1.8-3.17,18.7-8.01,24.62-26.06,30.27,3.29,11.75-3.39,17.25-11.99,23.55-12.18,8.92-81.31,43.37-94.75,45.2-18.45,2.51-22.09,4.43-37.88,8.09-9.22,2.13-29.45.49-35.98,5.81-2.35,1.91-3.4,5.71-6.45,8.16-10.97,8.82-27.24,4.04-40.43,5.54-2.16.25-11.56,1.08-9.63,4.94,1.44,2.9,34.81,21.38,40.74,26.11,17.82,14.2,26.94,34.78,50.85,47.29,7.95,4.16,19.31,3.25,25.33,8.09,6.55,5.25,9.32,20.72,14.02,23.55,11.12,6.69,34.3-3.31,44.68,9.65,3.3,4.12,2.93,12.3,6.21,14.66,7.64,5.53,40.82,3.19,50.63.49,12.84-3.53,23.76-28.23,36.61-4.35-16.14,41.42-64.04,51.63-104.4,43.94-29.08-5.54-88.09-37.48-107.04-60.06-9.4-11.21-16.82-26.19-27.32-37.4-12.62-13.48-30.68-24.52-42.83-38.62-5.26-6.11-21.62-37.04-25.88-36.31-11.4,1.96-13.64,33.6-16.44,42.13-4.93,14.99-29.94,60.83-41.27,71.46-12.96,12.16-17.13,8.33-30.47,13.39-21.51,8.16-6.88,19.5-26.29,27.67M681.54,195.14c-4.27-4.19-50.96-16.14-59.25-17.01-19.45-2.04-55.37-1.89-75.06-.33-16.74,1.32-42.89,10.65-55.38,21.91-9.8,8.84-8.97,25.27-17,37.27-3.06,4.58-13.14,12.13-13.97,15.38-1.11,4.34,3.92,10.63,3.93,16.26,0,24.17-31.85,45.11-38.15,66.29-1.99,6.71-.96,12.12-2.59,18.28-2.05,7.77-9.88,11.8-12.09,17.14s-1.02,10.5-3.14,15.64c-2.46,5.97-13.19,11.53-14.73,16.61-2.18,7.19,2.3,13.07.8,19.37-3.17,13.3-29.74,27.03-26.29,45.9,30.9-6.89,61.37-19.28,93.03-22.9,7.85-.9,17.77,1.33,25.01-.07,4.51-.87,7.4-5.91,13.46-7.42,7.85-1.96,35.89-1.93,39.39-5.54,6.1-9.94,12.69-36.2,22.97-40.7,4.41-1.93,13.41-1.44,16.18-4.72,2.94-3.49,7.33-24.11,10.69-31.06,22.84-47.26,61.66-21.11,88.65-47.11,10-9.63,26.12-40.47,25.15-54.27-.77-10.91-12.4-15.89-15.44-26.47-2.75-9.58.87-25.54-6.17-32.44h0ZM326.79,469.95c4.17-9.02-17.13-16.53-16.66-9.39.23,3.5,13.18,8.08,16.66,9.39ZM243.3,0s-19.12,3.48-8.69,20.85-10.43,53.87-10.43,53.87l-27.81,22.59-15.64,46.68-39.97,83.66v39.97l-17.38,53.87h0c-16.12,0-31,8.64-39,22.63l-7.92,13.86-17.38,93.84-50.4,90.37-8.69,38.23,10.43,46.92,38.23-69.51,12.16-59.09,36.49-63.53h0c2.25-32.04,15.08-62.44,36.46-86.41h0c15.88-17.8,26.04-39.96,29.16-63.61l7.37-55.81,36.49-78.2,36.49-71.25,19.12-60.82"/>
          <path fill="#f9f5e6" d="M209.01,139.93l-.77,3.93c-.8,4.06,1.83,8.01,5.88,8.85l29.02,6.02c.51.1,1.02.16,1.54.16h55.23c2.19,0,4.27.95,5.71,2.61l9.81,11.31c2,2.31,5.19,3.18,8.09,2.22l44.22-14.68c.38-.13.78-.22,1.18-.29l23.31-3.76c2.2-.36,4.45.28,6.14,1.74l9.12,7.87c1.37,1.19,3.13,1.84,4.94,1.84h26.48c3.57,0,6.66,2.5,7.4,5.99h0c1.29,6.12,9.03,8.11,13.12,3.38l18.27-21.15c2.35-2.72,2.46-6.71.27-9.55l-6.62-8.61c-1.43-1.86-3.64-2.95-5.99-2.95h-70.01c-.6,0-1.2-.07-1.78-.21l-24.37-5.9c-.58-.14-1.18-.21-1.78-.21h-21.29c-1.22,0-2.42.3-3.5.86l-12.74,6.66c-1.64.86-3.54,1.08-5.34.63h0c-21.63-5.42-43.85-8.16-66.15-8.16h-12.55c-.45,0-.9.04-1.34.12l-29.41,5.29c-3.07.55-5.48,2.93-6.08,5.99Z"/>
          <path fill="#f9f5e6" d="M423.69,278.01l1.29-3.79c1.33-3.92-.74-8.18-4.65-9.56l-27.95-9.84c-.49-.17-.99-.29-1.5-.36l-23.05-3.1-31.69-4.26c-2.17-.29-4.11-1.51-5.31-3.34l-8.21-12.51c-1.68-2.55-4.72-3.85-7.72-3.28l-45.78,8.65c-.4.08-.8.12-1.2.13l-23.61.62c-2.23.06-4.38-.87-5.86-2.54l-7.99-9.02c-1.2-1.36-2.85-2.24-4.65-2.48l-26.25-3.53c-3.54-.48-6.26-3.36-6.53-6.93h0c-.47-6.23-7.87-9.24-12.55-5.1l-20.93,18.53c-2.69,2.38-3.33,6.32-1.54,9.43l5.42,9.42c1.17,2.03,3.22,3.41,5.54,3.72l26.4,3.55,42.99,5.78c.59.08,1.18.23,1.73.45l23.37,9.1c.56.22,1.14.37,1.73.45l21.1,2.84c1.21.16,2.44.03,3.59-.39l13.51-4.9c1.74-.63,3.65-.6,5.38.08h0c20.72,8.25,42.37,13.93,64.47,16.9l12.44,1.67c.44.06.89.08,1.34.06l29.85-1.32c3.11-.14,5.82-2.17,6.82-5.12Z"/>
          <path fill="#f9f5e6" d="M114.44,355.46l-.77,3.93c-.8,4.06,1.83,8.01,5.88,8.85l29.02,6.02c.51.1,1.02.16,1.54.16h55.23c2.19,0,4.27.95,5.71,2.61l9.81,11.31c2,2.31,5.19,3.18,8.09,2.22l44.22-14.68c.38-.13.78-.22,1.18-.29l23.31-3.76c2.2-.36,4.45.28,6.14,1.74l9.12,7.87c1.37,1.19,3.13,1.84,4.94,1.84h26.48c3.57,0,6.66,2.5,7.4,5.99h0c1.29,6.12,9.03,8.11,13.12,3.38l18.27-21.15c2.35-2.72,2.46-6.71.27-9.55l-6.62-8.61c-1.43-1.86-3.64-2.95-5.99-2.95h-70.01c-.6,0-1.2-.07-1.78-.21l-24.37-5.9c-.58-.14-1.18-.21-1.78-.21h-21.29c-1.22,0-2.42.3-3.5.86l-12.74,6.66c-1.64.86-3.54,1.08-5.34.63h0c-21.63-5.42-43.85-8.16-66.15-8.16h-12.55c-.45,0-.9.04-1.34.12l-29.41,5.29c-3.07.55-5.48,2.93-6.08,5.99Z"/>
          <path fill="#f9f5e6" d="M329.12,493.55l1.29-3.79c1.33-3.92-.74-8.18-4.65-9.56l-27.95-9.84c-.49-.17-.99-.29-1.5-.36l-23.05-3.1-31.69-4.26c-2.17-.29-4.11-1.51-5.31-3.34l-8.21-12.51c-1.68-2.55-4.72-3.85-7.72-3.28l-45.78,8.65c-.4.08-.8.12-1.2.13l-23.61.62c-2.23.06-4.38-.87-5.86-2.54l-7.99-9.02c-1.2-1.36-2.85-2.24-4.65-2.48l-26.25-3.53c-3.54-.48-6.26-3.36-6.53-6.93h0c-.47-6.23-7.87-9.24-12.55-5.1l-20.93,18.53c-2.69,2.38-3.33,6.32-1.54,9.43l5.42,9.42c1.17,2.03,3.22,3.41,5.54,3.72l26.4,3.55,42.99,5.78c.59.08,1.18.23,1.73.45l23.37,9.1c.56.22,1.14.37,1.73.45l21.1,2.84c1.21.16,2.44.03,3.59-.39l13.51-4.9c1.74-.63,3.65-.6,5.38.08h0c20.72,8.25,42.37,13.93,64.47,16.9l12.44,1.67c.44.06.89.08,1.34.06l29.85-1.32c3.11-.14,5.82-2.17,6.82-5.12Z"/>
          <path fill="#f9f5e6" d="M35.86,540.33l-1.44,3.74c-1.49,3.86.4,8.21,4.25,9.74l27.53,10.98c.48.19.98.33,1.49.42l22.9,4.05,31.48,5.56c2.16.38,4.04,1.68,5.17,3.56l7.69,12.84c1.57,2.62,4.56,4.04,7.58,3.59l46.1-6.76c.4-.06.8-.09,1.21-.08l23.61.35c2.23.03,4.34,1.05,5.75,2.78l7.61,9.34c1.15,1.41,2.76,2.35,4.54,2.67l26.08,4.61c3.52.62,6.12,3.62,6.24,7.19h0c.21,6.25,7.48,9.55,12.33,5.61l21.67-17.65c2.78-2.27,3.59-6.18,1.93-9.36l-5.02-9.63c-1.09-2.08-3.08-3.54-5.39-3.95l-26.23-4.63-42.71-7.55c-.59-.1-1.17-.28-1.71-.52l-22.97-10.05c-.55-.24-1.12-.41-1.71-.52l-20.96-3.7c-1.2-.21-2.44-.13-3.6.24l-13.7,4.34c-1.77.56-3.68.45-5.37-.3h0c-20.36-9.1-41.76-15.66-63.72-19.54l-12.36-2.18c-.44-.08-.89-.12-1.34-.12l-29.88.09c-3.12,0-5.91,1.93-7.03,4.84Z"/>
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
			<body className="">
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
