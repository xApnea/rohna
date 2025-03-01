import { Img } from 'openimg/react';
import { Icon } from '#app/components/ui/icon.js';
import Performances from '../components/performances.jsx';
import YoutubeEmbed from '../components/youtubeEmbed.jsx';

export function meta() {
  return [
    { title: "Rohna | Press kit" },
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

export default function PressKit() {
  return (
    <div id="epk" className="">
      <h1 className="text-center py-8 lg:py-16 text-5xl lg:text-7xl lg:text-left lg:ml-8 font-extrabold uppercase">Press Kit</h1>
      <section id="bio" className='flex flex-col xl:flex-row items-center justify-center text-left mx-4 xl:mx-0 pt-8 pb-16'>
        <div className="xl:mx-8 w-full xl:w-1/2">
          <Img
            width="3059"
            height="2367"
            fit="contain"
            src="/bandLadder.jpg"
            alt="Band grouped together around a wooden ladder, some members on the steps others are leaning against it."
            className="rounded-2xl"
          />
        </div>
        <div className="text-base font-normal m-8 xl:my-0 w-full xl:w-1/2">
          <h2 className="text-left pb-8 text-4xl font-bold">Bio</h2>
            <p>
            With an unmistakable sound and an electrifying stage presence, Rohna has solidified themselves as one of the most exciting bands to emerge from Florida&apos;s indie-rock scene. Since forming in 2019, the five-piece—Andres Hernandez (bass and vocals), Austin Burdi (guitar), John Bruno (guitar, keys, and vocals), Luca Canalungo (drums and vocals) and Nick Rovello (guitar and vocals)—have taken their genre-blending mix of Alternative Indie Rock and Psychedelic Punk Rock to stages across the East Coast, captivating audiences with their raw energy and immersive performances.
            </p>
            <br />
            <p>Along the way, they&apos;ve shared the stage with nationally and internationally recognized acts like <strong>The Black Keys, Lovejoy, MisterWives, Last Dinosaurs, Black Pumas, Grouplove, The Aces, Palace, flipturn, The Moss,</strong> and more. Their rise has seen them light up festival circuits, landing spots at <strong>Okeechobee Festival, Playground Festival, Gasparilla Music Festival, 97X Next Big Thing, and Jacksonville's Taco and Tequila Festival.</strong> With a dedicated fan base that stretches far beyond their home state, Rohna has built one of the most tightly knit communities in today&apos;s indie music scene—one that connects deeply with their emotional lyricism, layered instrumentation, and undeniable chemistry.</p>
            <br />
            <p>Since the release of their debut album in 2020, Rohna has continuously evolved, dropping a series of dynamic singles and two genre-defying EPs. Now, they&apos;re gearing up for their most ambitious chapter yet—the release of their highly anticipated sophomore album in August 2025. Fueled by a relentless passion for creating and performing, the band is set to embark on a nationwide tour, bringing their high-energy sound to fans across the country. Whether on record or on stage, Rohna isn&apos;t just making music—they&apos;re making moments that last.
            </p>
        </div>
      </section>
      <section id="stats" className="mx-8 py-16">
        <div className="">
          <h2 className="text-left pb-4 text-4xl font-bold">Stats</h2>

          <div className="flex flex-col gap-4 xl:grid xl:grid-cols-5 xl:gap-6">
            <div id="spotifyCard" className="col-span-1 row-span-2 p-4 bg-white/10 rounded-xl">
              <h3 className="sr-only">Spotify</h3>
              <div className="h-full flex flex-col justify-between gap-8 xl:gap-0">
                <a href="https://open.spotify.com/artist/7yH9wdVRj7Po5vpa19yNC2?si=HIud4zziRW2rtxDE0Wz2BA">
                  <Icon name="spotify" title="Spotify" size="xl" className="hover:scale-105"></Icon>
                </a>
                <div className="flex flex-col justify-end h-full gap-1">
                  <h4 className="font-normal text-base">Followers</h4>
                  <p className="font-bold text-5xl">5k+</p>
                  <h4 className="font-normal text-base">“Nowhere Else to Go”</h4>
                  <p className="font-bold text-5xl">690k+</p>
                  <h4 className="font-normal text-base">“Blood Moon”</h4>
                  <p className="font-bold text-5xl">145k+</p>
                </div>
              </div>
            </div>

            <div id="instagramCard" className="col-span-1 col-start-2 p-4 bg-white/10 rounded-xl">
              <div className="h-full flex flex-col justify-between gap-8 xl:gap-0">
                <a href="https://www.instagram.com/rohnamusic">
                  <Icon name="instagram" title="Instagram" size="xl" className="hover:scale-105"></Icon>
                </a>
                <div className="flex flex-col justify-end h-full gap-1">
                  <h3 className="sr-only">Instagram</h3>
                    <h4 className="font-normal text-base">Followers</h4>
                    <p className="font-bold text-5xl">7800+</p>
                </div>
              </div>
            </div>

            <div id="tiktokCard" className="col-span-1 col-start-2 row-start-2 p-4 bg-white/10 rounded-xl">
              <div className="h-full flex flex-col justify-between gap-8 xl:gap-0">
                <a href="https://www.tiktok.com/@rohnamusic">
                  <Icon name="tiktok" title="TikTok" size="xl" className="hover:scale-105"></Icon>
                </a>
                <div className="flex flex-col justify-end h-full gap-1">
                  <h3 className="sr-only">TikTok</h3>
                    <h4 className="font-light text-base">Followers</h4>
                    <p className="font-bold text-5xl">9800+</p>
                    <h4 className="font-normal text-base">Likes</h4>
                    <p className="font-bold text-5xl">575k+</p>
                </div>
              </div>
            </div>

            <div id="spotifyPlayer" className="col-span-3 row-span-2">
              <h2 className="hidden">Spotify</h2>
              <iframe className="" src="https://open.spotify.com/embed/artist/7yH9wdVRj7Po5vpa19yNC2?utm_source=generator&theme=0" width="100%" height="400"></iframe>
            </div>

          </div>
        </div>
      </section>
      <section id="performances" className="py-16 mx-2 md:mx-8 flex flex-col xl:flex-row justify-evenly items-center">
        <div className="hidden xl:block xl:w-1/4">
          <Img
            width="3605"
            height="5199"
            fit="cover"
            src="/crowd.jpg"
            alt="Band performing in front of a large crowd at the House of Blues in Orlando, FL."
            className="rounded-2xl"
          >
          </Img>
        </div>
        <div className="text-base font-normal w-full pl-0 xl:pl-8 xl:py-4 xl:w-2/3">
          <h2 className="text-left pb-4 text-4xl font-bold">Notable Performances</h2>
          <Performances />
        </div>
      </section>
      <section id="videos" className="py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-center lg:justify-around items-center">
          <div>
            <h2 className="text-left pb-4 text-4xl font-bold">Live</h2>
            <YoutubeEmbed url={'IkcOi_yBnRA?si=gQoXooiTOoKU8Lyh'}/>
          </div>
          <div>
            <h2 className="text-left pb-4 text-4xl font-bold">Latest Music Video</h2>
            <YoutubeEmbed url={'M-ZrIAOr4Tw?si=Xh4lIM_j_d4rHrN0'}/>
          </div>
        </div>
      </section>
      <section id="contact" className='flex flex-col items-center justify-center text-center gap-16 py-24 bg-brown rounded-t-xl'>
        <div className="text-base text-center font-normal m-8 lg:my-0 lg:w-1/2 md:5/8">
          <h2 className="pb-8 text-4xl font-bold">Contact Us</h2>
          <p className="italic">For all inquiries, email us at:</p>
          <a className="block text-lg md:text-2xl font-semibold cursor-pointer transition-all hover:scale-105" href="mailto:rohna.music@gmail.com">rohna.music@gmail.com</a>
        </div>
      </section>
    </div>
  );
}