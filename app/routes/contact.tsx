import duotone from '../assets/duotoneFull.png'

export default function Contact() {
  return (
    <section id="contactUs" className="min-h-[calc(100svh-131px)] md:min-h-[calc(100svh-166px)] lg:min-h-[calc(100svh-177px)] bg-green text-white">
      <h1 className="text-center md:text-left md:ml-8 py-8 md:py-16 text-5xl md:text-7xl font-extrabold uppercase">Contact Us</h1>
      <div className='flex flex-col justify-center items-center md:flex-row-reverse md:px-8 pb-8 md:pb-16'>
        <div className="text-center mb-4 mx-8 md:w-2/5 md:text-left">
          <h2>For all business inquiries, email us at:</h2>
          <a className="text-2xl font-bold hover:scale-105 transform transition-all cursor-pointer" href="mailto:rohna.music@gmail.com">rohna.music@gmail.com</a>
          <h2 className="mt-6">Text us at:</h2>
          <a className="text-2xl font-bold hover:scale-105 transform transition-all cursor-pointer" href="sms:8136693877">813-669-3877</a>
        </div>
        <img className="overflow-hidden rounded-2xl my-4 w-11/12 md:my-0 md:w-3/5 lg:w-1/2" src={duotone}></img>
      </div>
    </section>
  );
}