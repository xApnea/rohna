import { Fragment } from 'react'

const performances = [
  { date: '02/25', location: 'Florida', description: 'Ax & the Hatchetmen support shows' },
  { date: '12/25', location: 'Tampa, FL', description: 'sold out Crowbar headliner' },
  { date: '09/24', location: 'Gainesville, FL', description: 'sold out Indie night at The Wooly​' },
  { date: '07/24', location: 'Florida', description: 'tour with The Moss and Dogpark' },
  { date: '06/24', location: 'St. Petersburg, FL', description: 'sold out Indie night with Mustard Service at Floridian Social' },
  { date: '05/24', location: 'Orlando, FL', description: 'Indie night with Mustard Service at The Beacham' },
  { date: '05/24', location: 'Miami, FL', description: 'sold out indie night at Gramps' },
  { date: '12/23', location: 'Tampa, FL', description: ' 97X Next Big Thing Festival with The Black Keys, Bleachers, Misterwives, and more' },
  { date: '11/23', location: 'Tampa, FL', description: 'sold out Rohna headliner at Crowbar' },
  { date: '9/23', location: 'Jacksonville, FL', description: 'Taco and Tequila Fest with Lupe Fiasco, Iration, and more' },
  { date: '07/23-08/23', location: 'East Coast US', description: 'The Daybreak Tour Part II' },
  { date: '07/23', location: 'Orlando, FL', description: 'sold out Flipturn and Rohna at House of Blues' },
  { date: '03/23', location: 'S. Florida', description: 'Okeechobee Fest with Odesza, Turnstile, Hippo Campus, Inner Wave, Flipturn, Local Natives' },
  { date: '11/22-12/22', location: 'East Coast US', description: 'The Daybreak Tour Part One' },
  { date: '08/22', location: 'Florida', description: 'tour with Hotel Fiction' },
  { date: '08/22', location: 'Gainesville, FL', description: 'Playground Fest with Flipturn, Lunar Vacation, and more' },
  { date: '07/22', location: 'Tampa, FL', description: 'sold out Flipturn and Rohna at Crowbar' },
  { date: '04/22', location: 'Orlando, FL', description: 'sold out Palace and Rohna at The Social' },
  { date: '02/22', location: 'Tampa, FL', description: 'Gasparilla Music Festival with Black Pumas, The Aces, Grouplove, and more' },
  { date: '10/21', location: 'Tampa, FL', description: 'The Hails, The Polar Boys, and Rohna at Crowbar' },
  { date: '02/20', location: 'Orlando, FL', description: 'Have Mercy, Fredo Disco, Selfish Things, Young Culture, and Rohna at Soundbar' },
  { date: '01/20', location: 'East Coast US', description: 'The Beautiful Ordinary Tour' }
]

export default function Performances() {
  return (
    <div role="table" id="performancesTable" className="w-full py-2 md:py-4 text-white text-xs sm:text-sm grid grid-cols-8 lg:grid-cols-7 gap-2 md:gap-1 items-start">
      {performances.map((event, index) => {
        return (
          <Fragment key={index}>
            <div className="justify-self-start text-left font-bold col-span-1">{event.date}</div>
            <div className="justify-self-start text-left font-normal italic col-span-2 lg:col-span-1">{event.location}</div>
            <div className="justify-self-start text-left font-normal col-span-5 lg:col-span-5">{event.description}</div>
          </Fragment>
        );
      })}
    </div>
  )
};