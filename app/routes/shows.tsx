import axios from 'axios';
import TourDateTable from '../components/tourDateTable.jsx';

import { type Route } from './+types/shows.ts'

export function meta() {
  return [
    { title: "Rohna Tour Dates | Concert Tickets | Indie Rock Band" },
    {
      name: "description",
      content: "Get the latest Rohna tour dates and concert tickets! Don't miss this Indie Alternative Rock band live on stage. Find shows near you and experience their electrifying performances!",
    },
    {
      property: "og:title",
      content: "Rohna",
    },
    {
      property: "og:site_name",
      content: "Rohna",
    },
    {
      property: "og:description",
      content: "Discover Rohna - Tampa, Florida's rising Indie Alternative Rock band! Catch them live at a venue or festival near you as they take on some of the most iconic stages across the country. Stream and download their music on all platforms!",
    },
  ];
}

export async function clientLoader() {
  const res = await axios.get('/api/events');
  return { events: res.data };
}

export default function Tour({ loaderData }: Route.ComponentProps) {
  const { events } = loaderData;

  return (
    <section className="bg-[url('../assets/images/crowbar03.jpg')] bg-cover bg-center bg-no-repeat min-h-[calc(100svh-131px)] md:min-h-[calc(100svh-166px)] lg:min-h-[calc(100svh-177px)]">
      <div className="flex flex-col items-center bg-linear-to-b from-green via-green/50">
        <h1 className="text-center py-8 md:py-16 text-5xl md:text-7xl font-extrabold uppercase">Tour Dates</h1>
        <h2 className="pb-4">our upcoming shows</h2>
        <TourDateTable events={events} />
      </div>
    </section>
  )
}