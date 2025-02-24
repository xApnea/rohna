import SocialIcons from "../ui/socials";

export default function Footer() {
  return (
    <footer className="pt-4 pb-1 md:pb-4 px-2 md:px-8 text-white/70 bg-brown">
      {/* <div className="flex md:hidden flex-row flex-wrap justify-evenly sm:justify-center gap-2 md:gap-4">
        <SocialIcons />
      </div> */}
      <div className="grid grid-cols-3 items-center text-[10px] md:text-xs pt-4 md:pt-0">
        <p className="text-left">
          All Rights Reserved
        </p>
        <div className="hidden md:flex flex-row justify-center items-center gap-4">
          <SocialIcons />
        </div>
        <p className="text-right">
          &copy; 2025 Rohna Music LLC
        </p>
      </div>
    </footer>
  );
}