import { DateTime } from 'luxon';
import { Fragment } from 'react'

type Event = {
  id?: string,
  url: string,
  datetime: string,
  title: string,
  description: string,
  venue: {
    location?: string,
    name: string,
    latitude?: string,
    longitude?: string,
    street_address?: string,
    postal_code?: string,
    city?: string,
    country?: string,
    region?: string
  },
  lineup?: [ string ],
  offers: [ {
    url: string
  } ] | [],
  free?: boolean,
  artist_id: string,
  on_sale_datetime?: string,
  festival_start_date?: string,
  festival_end_date?: string,
  festival_datetime_display_rule?: string,
  starts_at?: string,
  ends_at?: string,
  datetime_display_rule?: string,
  bandsintown_plus?: boolean,
  presale?: string,
  sold_out?: boolean
}

interface Params {
  events: [Event] | []
}

export default function TourDateTable({ events = [] }: Params) {
  return (
    <div role="table" id="tourDatesTable" className="w-11/12 lg:w-7/8 2xl:w-[1500px] py-4 px-3 md:p-8 text-white text-xs sm:text-sm md:text-lg border-solid border-2 border-white/15 rounded-xl bg-white/10 backdrop-blur-sm grid grid-cols-3 gap-3 md:gap-4 items-center">
      {
        events.map((event: Event, index: number) => {
          const dt = DateTime.fromISO(event.datetime);
          const date = dt.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);

          let callToAction;
          if (event.offers.length) {
            callToAction = <button className="text-white font-bold uppercase py-1 px-2 md:text-base sm:px-4 md:px-8 bg-orange rounded-xl transition-all duration-300 ease-in-out shadow-none hover:shadow-orange/20 hover:shadow-md hover:scale-105" type="submit" onClick={() => { location.href = event.offers[0]?.url || '' }}>Tickets</button>;
          } else {
            callToAction = <button className="text-white font-bold uppercase py-1 px-2 md:text-base sm:px-4 md:px-8 justify-self-end bg-orange rounded-xl transition-all duration-300 ease-in-out shadow-none hover:shadow-orange/20 hover:shadow-md hover:scale-105" type="submit" onClick={() => { location.href = `${event.url}&trigger=notify_me`; }}>Notify</button>;
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
  )
};