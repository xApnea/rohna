import axios from "axios";
import { Img } from "openimg/react";

import MailingListForm from "#app/components/mailingListForm.tsx";
import Footer from "#app/components/navs/footer.tsx";
import Header from "#app/components/navs/header.tsx";
import TourDateTable from "#app/components/tourDateTable.tsx";
import SocialIcons from "#app/components/ui/socials.tsx";
import YoutubeEmbed from "#app/components/youtubeEmbed.tsx";

import { type Route } from './+types/home.ts'


export function meta() {
  return [
    { title: "Rohna | Tampa Florida Indie Rock Band" },
    {
      name: "description",
      content: "Discover Rohna - Tampa, Florida's rising Indie Alternative Rock band! Catch them live at a venue or festival near you as they take on some of the most iconic stages across the country. Stream and download their music on all platforms!",
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

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();
  const email = formData.get('email');
  const name = formData.get('name');

  try {
    await axios.post('api/signup', { email, name })
    return { email }
  } catch(err: any) {
    const { message } = err.response.data;
    return { email, message }
  }
}


export default function Home({ loaderData, actionData }: Route.ComponentProps) {
  const { events } = loaderData;

  return (
    <>
      <Header onHomePage={true}/>
      <h1 className="sr-only">Home</h1>
      <section className="bg-[url('/img/bandPrism.jpg')] bg-cover bg-top bg-no-repeat md:bg-center animate-[fadeIn_2s;]">
        <div id="hero" className="mx-auto pt-48 md:pt-80 bg-gradient-to-b from-green/60 via-transparent to-green to-95%">
          <div className="flex flex-col gap-6 justify-end items-center mt-36 mx-auto md:mt-80 2xl:mt-96">
            <h2 className="text-white md:text-2xl">New single &quot;Don&apos;t Come Down&quot; available now</h2>
            <span className="relative inline-flex">
              <button className="text-white text-center uppercase font-bold text-xl px-24 py-4 md:text-3xl md:py-4 md:px-36 rounded-2xl bg-orange transition-all duration-300 ease-in-out shadow-none hover:shadow-orange/50  hover:shadow-lg hover:scale-105" type="submit" onClick={() => { location.href = 'https://rohnamusic.tunelink.to/dont-come-down'; }}>Listen Here</button>
            </span>
            <div className="flex flex-row justify-center items-center gap-4"><SocialIcons size="xl"/></div>
          </div>
        </div>
      </section>
      <section id="newRelease" className="bg-green flex flex-col items-center py-8 md:py-10 animate-[fadeIn_2s;]">
        <h2 className="text-white text-center py-10 text-5xl font-bold uppercase">New Release</h2>
        <YoutubeEmbed url={'M-ZrIAOr4Tw?si=Xh4lIM_j_d4rHrN0'}/>
      </section>
      <section id="tour" className="bg-green flex flex-col items-center py-8 md:py-10 animate-[fadeIn_2s;]">
        <h2 className="text-white text-center pb-10 text-5xl font-bold uppercase">Tour Dates</h2>
        <TourDateTable events={events}/>
      </section>
      <section id="gallery" className="bg-[url('/img/albumArtBackground.png')] bg-cover bg-center bg-no-repeat py-8 md:py-10 px-4 md:px-24">
        <div className="flex flex-col justify-center gap-8 sm:grid sm:grid-cols-4 sm:justify-items-center sm:place-content-center">
          <div className="sm:col-span-2 sm:mb-8 lg:w-2/3">
            <Img width="1440" height="1440" fit="contain" src="/huddle.png" className="rounded-2xl" alt="The band huddled around the drumkit right before a performance."></Img>
          </div>
          <div className="sm:col-span-2 sm:mt-8 lg:w-2/3 rounded-2xl">
            <Img width="775" height="550" fit="contain" src="/crowbar.jpg" className="rounded-2xl" alt="Shot from behind the stage of the band performing."></Img>
          </div>
          <div className="sm:col-span-4 sm:mx-12 lg:w-1/2 rounded-2xl">
            <Img width="4000" height="3000" fit="cover" src="/stage.png" className="rounded-2xl" alt="The band in front of a crowd performing, bass player Andres is headbanging."></Img>
          </div>
        </div>
      </section>
      <section id="mailingListForm" className="flex flex-col items-center py-8 md:py-10">
        <h2 className="text-white text-center my-6 text-5xl font-bold uppercase">Subscribe</h2>
        <h3 className="mb-6 mx-1 md:mx-0 text-center text-sm md:text-med">Sign up for announcements, early merch drops and discounts, and other exclusive content.</h3>
        <MailingListForm actionData={actionData}/>
      </section>
      <Footer />
    </>
  )
}