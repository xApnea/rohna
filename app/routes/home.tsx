import axios from "axios";
import { DateTime } from 'luxon';
import { Fragment } from 'react'

import MailingListForm from "#app/components/mailingListForm.tsx";
import Footer from "#app/components/navs/footer.tsx";
import Header from "#app/components/navs/header.tsx";
import SocialIcons from "#app/components/ui/socials.tsx";
import YoutubeEmbed from "#app/components/youtubeEmbed.tsx";

import crowbar from '../assets/crowbar.jpg';
import huddle from '../assets/huddle.png';
import stage from '../assets/stage.png';

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
      <section className="bg-[url('../assets/bandPrism.jpg')] bg-cover bg-top bg-no-repeat md:bg-center animate-[fadeIn_2s;]">
        <div id="hero" className="mx-auto pt-48 md:pt-80 bg-gradient-to-b from-green/60 via-transparent to-green to-95%">
          <div className="flex flex-col gap-6 justify-end items-center mt-36 mx-auto md:mt-80 2xl:mt-96">
            <h1 className="text-white md:text-2xl">New single &quot;Don&apos;t Come Down&quot; available now</h1>
            <span className="relative inline-flex">
              <button className="text-white text-center uppercase font-bold text-xl px-24 py-4 md:text-3xl md:py-4 md:px-36 rounded-2xl bg-orange transition-all duration-300 ease-in-out shadow-none hover:shadow-orange/50  hover:shadow-lg hover:scale-105" type="submit" onClick={() => { location.href = 'https://rohnamusic.tunelink.to/dont-come-down'; }}>Listen Here</button>
            </span>
            <div className="flex flex-row justify-center items-center gap-4"><SocialIcons /></div>
          </div>
        </div>
      </section>
      <section id="newRelease" className="bg-green flex flex-col items-center py-8 md:py-12 animate-[fadeIn_2s;]">
        <h2 className="text-white text-center py-12 text-5xl font-bold uppercase">New Release</h2>
        <YoutubeEmbed url={'M-ZrIAOr4Tw?si=Xh4lIM_j_d4rHrN0'}/>
      </section>
      <section id="tour" className="bg-green flex flex-col items-center py-8 md:py-12 animate-[fadeIn_2s;]">
        <h2 className="text-white text-center py-12 text-5xl font-bold uppercase">Tour Dates</h2>
        <div role="table" id="tourDatesTable" className="w-11/12 lg:w-7/8 2xl:w-[1500px] py-4 px-3 md:p-8 text-white text-xs sm:text-sm md:text-lg border-solid border-2 border-white/15 rounded-xl bg-white/10 backdrop-blur-sm grid grid-cols-3 gap-3 md:gap-4 items-center">
          {
            events.map((event: any, index: number) => {
              const dt = DateTime.fromISO(event.datetime);
              const date = dt.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);

              let callToAction;
              if (event.offers.length === 0) {
                callToAction = <button className="text-white font-bold uppercase py-1 px-2 md:text-base sm:px-4 md:px-8 justify-self-end bg-orange rounded-xl transition-all duration-300 ease-in-out shadow-none hover:shadow-orange/20 hover:shadow-md hover:scale-105" type="submit" onClick={() => { location.href = `${event.url}&trigger=notify_me`; }}>Notify</button>;
              } else {
                callToAction = <button className="text-white font-bold uppercase py-1 px-2 md:text-base sm:px-4 md:px-8 bg-orange rounded-xl transition-all duration-300 ease-in-out shadow-none hover:shadow-orange/20 hover:shadow-md hover:scale-105" type="submit" onClick={() => { location.href = event.offers[0].url; }}>Tickets</button>;
              }

              return (
                <Fragment key={index}>
                  <div className="justify-self-start text-left font-bold">{date}</div>
                  <div className="justify-self-start text-left font-semibold">
                    <p>{event.venue.location}</p>
                    <p className="font-normal italic md:text-sm hidden md:inline">{event.venue.name}</p>
                  </div>
                  <div className="justify-self-center lg:justify-self-end text-center w-full md:w-1/2">
                    {callToAction}
                  </div>
                </Fragment>
              );
            })
          }
            </div>
      </section>
      <section id="gallery" className="bg-[url('../assets/albumArtBackground.png')] bg-cover bg-center bg-no-repeat py-12 px-4 md:px-24">
        <div className="flex flex-col justify-center gap-8 sm:grid sm:grid-cols-4 sm:justify-items-center sm:place-content-center">
          <div className="sm:col-span-2 sm:mb-8 lg:w-2/3">
            <img className="object-contain border-solid border-l-8 rounded-2xl border-green" src={huddle}></img>
          </div>
          <div className="sm:col-span-2 sm:mt-8 lg:w-2/3">
            <img className="object-contain border-solid border-t-8 rounded-2xl border-green" src={crowbar}></img>
          </div>
          <div className="sm:col-span-4 sm:mx-12 lg:w-1/2">
            <img className="object-contain border-solid border-r-8 rounded-2xl border-green" src={stage}></img>
          </div>
        </div>
      </section>
      <section id="mailingListForm" className="flex flex-col items-center py-12">
        <h2 className="text-white text-center my-6 text-5xl font-bold uppercase">Subscribe</h2>
        <h3 className="mb-6 mx-1 md:mx-0 text-center text-sm md:text-med">Sign up for announcements, early merch drops and discounts, and other exclusive content.</h3>
        <MailingListForm actionData={actionData}/>
      </section>
      <Footer />
    </>
  )
}