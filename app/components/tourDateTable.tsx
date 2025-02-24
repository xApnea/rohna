import { DateTime } from 'luxon';
import { Fragment } from 'react'

interface Params {
  events?: [any] | []
} // TODO: fix the events types

export default function TourDateTable({ events = [] }: Params) {
  return (
    <div role="table" id="tourDatesTable" className="w-11/12 lg:w-7/8 2xl:w-[1500px] py-4 px-3 md:p-8 text-white text-xs sm:text-sm md:text-lg border-solid border-2 border-white/15 rounded-xl bg-white/10 backdrop-blur-sm grid grid-cols-3 gap-3 md:gap-4 items-center">
      {
        events.map((event, index) => {
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
  )
};