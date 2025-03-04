import bandLampsDuotone from '../assets/images/bandLampsDuotone.jpg'

export default function Contact() {
  return (
    <section id="contactUs" className="min-h-[calc(100svh-131px)] md:min-h-[calc(100svh-166px)] lg:min-h-[calc(100svh-177px)] bg-green text-white">
      <h1 className="text-center md:text-left md:ml-8 py-8 md:py-16 text-5xl md:text-7xl font-extrabold uppercase">Contact Us</h1>
      <div className='flex flex-col justify-center items-center md:flex-row-reverse px-4 md:px-8 pb-8 md:pb-16'>
        <div className="flex flex-col gap-8 mb-4 md:mb-0 mx-8 md:w-2/5 text-center md:text-left">
          <div>
            <h2>For all business inquiries, email us at:</h2>
            <a className="inline-block w-fit text-2xl font-bold hover:scale-105 transform transition-all cursor-pointer" href="mailto:rohna.music@gmail.com">rohna.music@gmail.com</a>
          </div>
          <div>
            <h2>Text us at:</h2>
            <a className="inline-block w-fit text-2xl font-bold hover:scale-105 transform transition-all cursor-pointer" href="sms:8136693877">813-669-3877</a>
          </div>
        </div>
        <img
          className="rounded-2xl my-4 md:my-0 max-w-3/4 md:max-w-3/5 lg:max-w-1/2"
          src={bandLampsDuotone}
          alt="Band grouped together surrounded by lamps, shot from above">
        </img>
      </div>
    </section>
  );
}