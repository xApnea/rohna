import { Img, OpenImgContextProvider } from "openimg/react";
import { useState } from 'react';

export default function About() {
  const [isNickHover, setNickHover] = useState(false);
  const [isLucaHover, setLucaHover] = useState(false);
  const [isAndresHover, setAndresHover] = useState(false);
  const [isBurdHover, setBurdHover] = useState(false);
  const [isJohnHover, setJohnHover] = useState(false);

  const bandMembersInfo = [
    { name: "Nick Rovello", position: "Guitar/Vocals", imgSrc: "/images/nick.jpg", blurb: "Instagram brain rot connoisseur", enterHandler: () => setNickHover(true), leaveHandler: () => setNickHover(false), showBlurb: () => isNickHover ? 'block' : 'hidden'},
    { name: "Luca Canalungo", position: "Drums/Vocals", imgSrc: "/images/luca.jpg", blurb: "2% blood olive oil content", enterHandler: () => setLucaHover(true), leaveHandler: () => setLucaHover(false), showBlurb: () => isLucaHover ? 'block' : 'hidden'},
    { name: "Andres Hernandez", position: "Bass/Vocals", imgSrc: "/images/andres.jpg", blurb: "Indie king pin", enterHandler: () => setAndresHover(true), leaveHandler: () => setAndresHover(false), showBlurb: () => isAndresHover ? 'block' : 'hidden'},
    { name: "Austin Burdi", position: "Guitar", imgSrc: "/images/burd.jpg", blurb: "Lifetime sportsbook winnings: $3.45", enterHandler: () => setBurdHover(true), leaveHandler: () => setBurdHover(false), showBlurb: () => isBurdHover ? 'block' : 'hidden'},
    { name: "John Bruno", position: "Guitar/Vocals/Keys", imgSrc: "/images/john.jpg", blurb: "Reigning 80's glam rock trivia champion", enterHandler: () => setJohnHover(true), leaveHandler: () => setJohnHover(false), showBlurb: () => isJohnHover ? 'block' : 'hidden'},
  ]

  return (
    <div id="about" className="min-h-[calc(100svh-131px)] md:min-h-[calc(100svh-172px)] lg:min-h-[calc(100svh-183px)] bg-[url('/resources/images?src=/images/albumArtEclipse.jpg&w=4000&h=4000&fit=cover&format=avif')] bg-cover bg-center">
      <h1 className="text-center py-8 md:py-16 text-5xl md:text-7xl md:text-left md:pl-8 font-extrabold uppercase bg-gradient-to-b from-green via-green/50">About Us</h1>
      <div className="flex flex-col justify-center md:flex-row md:justify-between md:items-center">
        <div className="w-full p-8 md:my-0">
          <OpenImgContextProvider optimizerEndpoint="/resources/images">
          <Img width="2238" height="2238" fit="contain" src="/images/mustang.jpg" className="rounded-2xl w-full" alt="The band packed into a classic car."></Img>
          </OpenImgContextProvider>
        </div>
        <div className="w-full px-8">
          <h2 className="text-4xl font-semibold">Bio</h2>
            <br/>
            <p>
            With an unmistakable sound and an electrifying stage presence, Rohna has solidified themselves as one of the most exciting bands to emerge from Florida&apos;s indie-rock scene. Since forming in 2019, the five-piece—Andres Hernandez (bass and vocals), Austin Burdi (guitar), John Bruno (guitar, keys, and vocals), Luca Canalungo (drums and vocals) and Nick Rovello (guitar and vocals)—have taken their genre-blending mix of Alternative Indie Rock and Psychedelic Punk Rock to stages across the East Coast, captivating audiences with their raw energy and immersive performances.
            </p>
            <br />
            <p>Along the way, they&apos;ve shared the stage with nationally and internationally recognized acts like The Black Keys, Lovejoy, MisterWives, Last Dinosaurs, Black Pumas, Grouplove, The Aces, Palace, flipturn, The Moss, and more. Their rise has seen them light up festival circuits, landing spots at Okeechobee Festival, Playground Festival, Gasparilla Music Festival, 97X Next Big Thing, and Jacksonville's Taco and Tequila Festival. With a dedicated fan base that stretches far beyond their home state, Rohna has built one of the most tightly knit communities in today&apos;s indie music scene—one that connects deeply with their emotional lyricism, layered instrumentation, and undeniable chemistry.</p>
            <br />
            <p>Since the release of their debut album in 2020, Rohna has continuously evolved, dropping a series of dynamic singles and two genre-defying EPs. Now, they&apos;re gearing up for their most ambitious chapter yet—the release of their highly anticipated sophomore album in August 2025. Fueled by a relentless passion for creating and performing, the band is set to embark on a nationwide tour, bringing their high-energy sound to fans across the country. Whether on record or on stage, Rohna isn&apos;t just making music—they&apos;re making moments that last.
            </p>
        </div>
      </div>
      <div className="text-left text-pretty py-16 px-8 md:px-12 md:pt-20">
        <h2 className="block md:hidden text-3xl font-semibold">Members</h2>
        <ul className="flex justify-evenly flex-wrap gap-4 text-white">
          {bandMembersInfo.map((member, index) => {
              return (
                <li key={index} className="flex flex-col items-left mt-8 md:mt-0 p-4 bg-brown rounded-xl">
                  <p className="font-semibold text-xl">{member.name}</p>
                  <p className="font-normal text-base mb-4">{member.position}</p>
                  <OpenImgContextProvider optimizerEndpoint="/resources/images">
                    <Img
                      width="2525"
                      height="2865"
                      fit="cover"
                      src={member.imgSrc}
                      alt={`Photo of Rohna member ${member.name}`}
                      className="relative max-w-64 xl:max-w-48 2xl:max-w-80 rounded-xl object-contain"
                      onMouseEnter={() => member.enterHandler()}
                      onMouseLeave={() => member.leaveHandler()}
                    >
                    </Img>
                  </OpenImgContextProvider>
                  {/* <p className={`font-normal absolute z-10 mt-2 max-w-60 lg:max-w-72 ${member.showBlurb()}`}>{member.blurb}</p> */}
                </li>)
            })
          }
        </ul>
      </div>
    </div>
  );
}