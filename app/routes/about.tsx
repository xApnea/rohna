import { useState } from 'react';

import andres from '../assets/andres.jpg';
import burd from '../assets/burd.jpg';
import john from '../assets/john.jpg';
import luca from '../assets/luca.jpg';
import mustang from '../assets/mustang.jpg';
import nick from '../assets/nick.jpg';


export default function About() {
  const [isNickHover, setNickHover] = useState(false);
  const [isLucaHover, setLucaHover] = useState(false);
  const [isAndresHover, setAndresHover] = useState(false);
  const [isBurdHover, setBurdHover] = useState(false);
  const [isJohnHover, setJohnHover] = useState(false);

  const bandMembersInfo = [
    { name: "Nick Rovello", position: "Guitar/Vocals", img: nick, blurb: "Instagram brain rot connoisseur", enterHandler: () => setNickHover(true), leaveHandler: () => setNickHover(false), showBlurb: () => isNickHover ? 'block' : 'hidden'},
    { name: "Luca Canalungo", position: "Drums/Vocals", img: luca, blurb: "2% blood olive oil content", enterHandler: () => setLucaHover(true), leaveHandler: () => setLucaHover(false), showBlurb: () => isLucaHover ? 'block' : 'hidden'},
    { name: "Andres Hernandez", position: "Bass/Vocals", img: andres, blurb: "Indie king pin", enterHandler: () => setAndresHover(true), leaveHandler: () => setAndresHover(false), showBlurb: () => isAndresHover ? 'block' : 'hidden'},
    { name: "Austin Burdi", position: "Guitar", img: burd, blurb: "Lifetime sportsbook winnings: $3.45", enterHandler: () => setBurdHover(true), leaveHandler: () => setBurdHover(false), showBlurb: () => isBurdHover ? 'block' : 'hidden'},
    { name: "John Bruno", position: "Guitar/Vocals/Keys", img: john, blurb: "Reigning 80's glam rock trivia champion", enterHandler: () => setJohnHover(true), leaveHandler: () => setJohnHover(false), showBlurb: () => isJohnHover ? 'block' : 'hidden'},
  ]

  return (
    <div id="about" className="min-h-[calc(100svh-131px)] md:min-h-[calc(100svh-172px)] lg:min-h-[calc(100svh-183px)] bg-[url('../assets/eclipse.png')] bg-cover bg-center">
      <h1 className="text-center py-8 md:py-16 text-5xl md:text-7xl md:text-left md:pl-8 font-extrabold uppercase bg-gradient-to-b from-green via-green/50">About Us</h1>
      <div className="flex flex-col justify-center md:flex-row md:justify-between md:items-center">
        <div className="w-full p-8 md:my-0">
          <img src={mustang} className="rounded-2xl w-full"></img>
        </div>
        <div className="w-full px-8">
          <h2 className="text-4xl font-semibold">Bio</h2>
            <br/>
            <p>
            Formed in 2019, Rohna is an Alternative Indie Rock band from sunny Tampa, FL. With an electric stage presence and a fan base of dedicated music lovers, Rohna takes listeners on a journey. Their distinctive sound lives on a spectrum, ranging from Alternative Indie Rock to Psychedelic Punk Rock and beyond, and has launched them to success on some of Florida&apos;s most iconic stages.
            </p>
            <br />
            <p>The long-time best friends have opened for national and international bands such as The Black Keys, Lovejoy, Mister Wives, Last Dinosaurs, Black Pumas, Grouplove, The Aces, Palace, Oso Oso, The Hails, flipturn, Lunar Vacation, Little Image, The Moss and more. Since the release of their debut album in January 2020, they have gone on to share several diverse singles and two heartbreakingly beautiful EPs. They have toured the United States East Coast three times, lighting up venues all across Florida, Georgia, South Carolina, North Carolina, Maryland, DC, New York, Massachusets, Rhode Island, Pennsylvania, and more. With the release of their second, highly-anticipated EP, Rohna broke into the Florida festival circuit with Okeechobee Fest, Playground Fest, Gasparilla Music Fest, 97X Next Big Thing, and Jacksonville&apos;s Taco and Tequila Fest. Now they are planning to release their second album at the beginning of 2025 and begin a new journey with shows across the country.</p>
            <br />
            <p>Fans from all over have come together and built one of the most tightly-knit communities in today&apos;s indie music scene, connecting with Rohna&apos;s emotional, honest lyrics, layered sounds, and magnetic persona.
            </p>
        </div>
      </div>
      <div className="text-left text-pretty py-16 px-8 md:px-12 md:pt-20">
        <h2 className="block md:hidden text-3xl font-semibold">Members</h2>
        <ul className="flex justify-evenly flex-wrap gap-4 md:m-8 text-white">
          {bandMembersInfo.map((member, index) => {
              return (
                <li key={index} className="flex flex-col items-left mt-8 md:mt-0 p-4 bg-brown rounded-xl">
                  <p className="font-semibold text-xl">{member.name}</p>
                  <p className="font-normal text-base mb-4">{member.position}</p>
                  <img
                    src={member.img}
                    alt={`Photo of Rohna member ${member.name}`}
                    className="relative max-h-64 lg:max-h-80 object-contain rounded-xl"
                    onMouseEnter={() => member.enterHandler()}
                    onMouseLeave={() => member.leaveHandler()}
                  >
                  </img>
                  {/* <p className={`font-normal absolute z-10 mt-2 max-w-60 lg:max-w-72 ${member.showBlurb()}`}>{member.blurb}</p> */}
                </li>)
            })
          }
        </ul>
      </div>
    </div>
  );
}