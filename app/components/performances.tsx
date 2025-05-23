import { Fragment, useState } from 'react'

interface Performance {
  date: string,
  location: string,
  description: string,
  tags: {
    isFestival: boolean,
    isTour: boolean
  }
};

const performances: Performance[] = [
  { date: '05/25', location: 'St. Petersburg, FL', description: 'Sold out Bayboro Brewing headliner', tags: { isFestival: false, isTour: false } },
  { date: '04/25', location: 'St. Augustine, FL', description: 'Sold out Indie night at Cafe Eleven', tags: { isFestival: false, isTour: false } },
  { date: '03/25', location: 'Florida', description: 'Tour with The Stews', tags: { isFestival: false, isTour: true } },
  { date: '02/25', location: 'Florida', description: 'Tour with Ax & the Hatchetmen', tags: { isFestival: false, isTour: true } },
  { date: '12/24', location: 'Tampa, FL', description: 'Sold out Crowbar headliner', tags: { isFestival: false, isTour: false } },
  { date: '09/24', location: 'Gainesville, FL', description: 'Sold out Indie night at The Wooly​', tags: { isFestival: false, isTour: false } },
  { date: '07/24', location: 'Florida', description: 'Tour with The Moss and Dogpark', tags: { isFestival: false, isTour: true } },
  { date: '06/24', location: 'St. Petersburg, FL', description: 'Sold out Indie night with Mustard Service at Floridian Social', tags: { isFestival: false, isTour: false } },
  { date: '05/24', location: 'Orlando, FL', description: 'Indie night with Mustard Service at The Beacham', tags: { isFestival: false, isTour: false } },
  { date: '05/24', location: 'Miami, FL', description: 'Sold out indie night at Gramps', tags: { isFestival: false, isTour: false } },
  { date: '12/23', location: 'Tampa, FL', description: ' 97X Next Big Thing Festival with The Black Keys, Bleachers, Misterwives, and more', tags: { isFestival: true, isTour: false } },
  { date: '11/23', location: 'Tampa, FL', description: 'Sold out headliner at Crowbar', tags: { isFestival: false, isTour: false } },
  { date: '9/23', location: 'Jacksonville, FL', description: 'Taco and Tequila Fest with Lupe Fiasco, Iration, and more', tags: { isFestival: true, isTour: false } },
  { date: '07/23-08/23', location: 'East Coast US', description: 'The Daybreak Tour Part II (Headliner)', tags: { isFestival: false, isTour: true } },
  { date: '07/23', location: 'Orlando, FL', description: 'Sold out with Flipturn at House of Blues', tags: { isFestival: false, isTour: false } },
  { date: '03/23', location: 'S. Florida', description: 'Okeechobee Fest with Odesza, Turnstile, Hippo Campus, Inner Wave, Flipturn, Local Natives', tags: { isFestival: true, isTour: false } },
  { date: '11/22-12/22', location: 'East Coast US', description: 'The Daybreak Tour Part I (Headliner)', tags: { isFestival: false, isTour: true } },
  { date: '08/22', location: 'Florida', description: 'Tour with Hotel Fiction', tags: { isFestival: false, isTour: true } },
  { date: '08/22', location: 'Gainesville, FL', description: 'Playground Fest with Flipturn, Lunar Vacation, and more', tags: { isFestival: true, isTour: false } },
  { date: '07/22', location: 'Tampa, FL', description: 'Sold out with Flipturn at Crowbar', tags: { isFestival: false, isTour: false } },
  { date: '04/22', location: 'Orlando, FL', description: 'Sold out with Palace at The Social', tags: { isFestival: false, isTour: false } },
  { date: '02/22', location: 'Tampa, FL', description: 'Gasparilla Music Festival with Black Pumas, The Aces, Grouplove, and more', tags: { isFestival: true, isTour: false } },
  { date: '10/21', location: 'Tampa, FL', description: 'The Hails and The Polar Boys at Crowbar', tags: { isFestival: false, isTour: false } },
  { date: '02/20', location: 'Orlando, FL', description: 'Have Mercy, Fredo Disco, Selfish Things, Young Culture at Soundbar', tags: { isFestival: false, isTour: false } },
  { date: '01/20', location: 'East Coast US', description: 'The Beautiful Ordinary Tour (Headliner)', tags: { isFestival: false, isTour: true } },
]

function filterByTour(performance: Performance) {
  if (performance.tags.isTour) return true;
};

function filterByFestival (performance: Performance) {
  if (performance.tags.isFestival) return true;
};

export default function Performances() {
  const [filter, setFilter] = useState('all'); // 'all', 'festivals', 'tours'
  let displayPeformances;
  if (filter === 'tours') {
    displayPeformances = performances.filter(filterByTour);
  } else if (filter === 'festivals') {
    displayPeformances = performances.filter(filterByFestival);
  } else {
    displayPeformances = performances;
  }


  return (
    <>
      <div className="flex justify-center xl:justify-start gap-4 pb-4">
        <button className={`${filter === 'tours' ? 'border-white bg-brown' : 'border-transparent bg-white/10'} text-white text-center font-semibold text-lg w-36 md:w-48 px-2 py-1 md:py-2 md:text-2xl border-transparent border-2 rounded-2xl hover:border-white`} onClick={() => filter === 'tours' ? setFilter('all') : setFilter('tours')}>Tours</button>
        <button
          className={`${filter === 'festivals' ? 'border-white bg-brown' : 'border-transparent bg-white/10'} text-white text-center font-semibold text-lg w-36 md:w-48 px-2 py-1 md:py-2 md:text-2xl border-2 rounded-2xl hover:border-white`}
          onClick={() => filter === 'festivals' ? setFilter('all') : setFilter('festivals')}>Festivals</button>
      </div>
      <div role="table" id="performancesTable" className="w-full py-2 md:py-4 text-white text-xs sm:text-sm grid grid-cols-8 lg:grid-cols-7 gap-4 md:gap-1 items-start">
        {displayPeformances.map((performance, index) => {
          return (
            <Fragment key={index}>
              <div className="justify-self-start text-left font-bold col-span-1">{performance.date}</div>
              <div className="justify-self-start text-left font-normal italic col-span-2 lg:col-span-1">{performance.location}</div>
              <div className="justify-self-end text-right xl:justify-self-start xl:text-left font-normal col-span-5 lg:col-span-5">{performance.description}</div>
            </Fragment>
          );
        })}
      </div>
    </>
  )
};