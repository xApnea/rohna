import bandLadder from '../assets/bandLadder.jpg';
import crowd from '../assets/crowd.jpg';
import Performances from '../components/performances.jsx';
import YoutubeEmbed from '../components/youtubeEmbed.jsx';
import { Icon } from '#app/components/ui/icon.js';


export default function PressKit() {
  return (
    <div id="epk" className="">
      <h1 className="text-center py-8 lg:py-16 text-5xl lg:text-7xl lg:text-left lg:ml-8 font-extrabold uppercase">Press Kit</h1>
      <section id="bio" className='flex flex-col xl:flex-row items-center justify-center text-left pt-8 pb-16'>
        <img src={bandLadder} className="rounded-2xl w-3/4 xl:w-1/2 xl:mx-8 md:w-5/8"></img>
        <div className="text-base font-normal m-8 xl:my-0 xl:w-1/2 md:w-5/8">
          <h2 className="text-left pb-8 text-4xl font-bold">Bio</h2>
          <p>Rohna is an Alternative Indie Rock band from sunny Tampa, FL.</p>
          <br />
          <p>Forming in 2019 and armed with an electric stage presence and a fan base of dedicated music lovers, Rohna takes listeners on a journey. Their distinctive sound lives on a spectrum, ranging from Alternative Indie Rock to Psychedelic Punk Rock and beyond, and has launched them to success on some of Florida&apos;s most iconic stages.</p>
          <br />
          <p>The long-time best friends have opened for national and international bands such as The Black Keys, Lovejoy, Mister Wives, Last Dinosaurs, Black Pumas, Grouplove, The Aces, Palace, Oso Oso, The Hails, flipturn, Lunar Vacation, Little Image, The Moss and more.</p>
          <br />
          <p>Since the release of their debut album in January 2020, they have gone on to share several diverse singles, and two heartrendingly beautiful EPs, and tour the United States East Coast three times, lighting up venues across multiple states. With the release of their second, highly-anticipated EP, Rohna broke into the Florida festival circuit with Okeechobee Fest, Playground Fest, Gasparilla Music Fest, 97X Next Big Thing, and Jacksonville&apos;s Taco and Tequila Fest.</p>
          <br />
          <p>After releasing newest single “Don’t Come Down” in February, the band gears up for consistent single releases culminating in a full length dropping late summer of 2025. A planned east coast tour and regional dates throughout the south-east US are on the books, with the band poised to take the indie community by storm.</p>
          <br />
          <p>Fans from all over have come together and built one of the most tightly-knit communities in today&apos;s indie music scene, connecting with Rohna&apos;s emotional, honest lyrics, layered sounds, and magnetic persona.</p>
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
          <img src={crowd} className="rounded-2xl"></img>
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
          <a className="block text-lg md:text-xl font-semibold underline cursor-pointer hover:scale-105" href="mailto:rohna.music@gmail.com">rohna.music@gmail.com</a>
        </div>
      </section>
    </div>
  );
}