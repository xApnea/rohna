import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../logo.tsx';
import { Icon } from '../ui/icon.tsx';

export default function Header({ onHomePage = false}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [effect, setEffect] = useState(false);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
    setEffect(true);
  }

  return(
    <header id="header" className={`py-4 md:py-8 ${onHomePage ? 'absolute top-0 inset-x-0 z-10' : 'bg-green'} ${onHomePage && isMenuOpen && 'bg-green'}`}>
      <nav className='flex flex-row justify-between items-center font-bold text-lg px-4 sm:px-8 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white'>
        <Link className='transition-all duration-150 ease-in-out hover:scale-105' to='/' viewTransition>
          <Logo sizes="w-[75px] h-[22px] md:w-[150px] md:h-[44px] lg:w-[187px] lg:h-[55px]"/>
        </Link>
        <NavLink
          className={({ isActive, isPending }) => isActive ? "active hidden lg:block transition-all duration-150 ease-in-out hover:scale-105" : isPending ? "pending hidden lg:block transition-all duration-150 ease-in-out hover:scale-105" : "hidden lg:block transition-all duration-150 ease-in-out hover:scale-105"}
          to='shows'
        >SHOWS</NavLink>
        <Link className='hidden lg:block transition-all duration-150 ease-in-out hover:scale-105'
          to={'https://shop.rohnamusic.com/'} viewTransition
        >MERCH</Link>
        <NavLink
          className={({ isActive, isPending }) => isActive ? "active hidden lg:block transition-all duration-150 ease-in-out hover:scale-105" : isPending ? "pending hidden lg:block transition-all duration-150 ease-in-out hover:scale-105" : "hidden lg:block transition-all duration-150 ease-in-out hover:scale-105"}
          to='about' viewTransition
        >ABOUT</NavLink>
        <NavLink
          className={({ isActive, isPending }) => isActive ? "active hidden lg:block transition-all duration-150 ease-in-out hover:scale-105" : isPending ? "pending hidden lg:block transition-all duration-150 ease-in-out hover:scale-105" : "hidden lg:block transition-all duration-150 ease-in-out hover:scale-105"}
          to='contact' viewTransition
        >CONTACT</NavLink>
        <NavLink
          className={({ isActive, isPending }) => isActive ? "active hidden lg:block transition-all duration-150 ease-in-out hover:scale-105" : isPending ? "pending hidden lg:block transition-all duration-150 ease-in-out hover:scale-105" : "hidden lg:block transition-all duration-150 ease-in-out hover:scale-105"}
          to='epk' viewTransition
        >PRESS KIT</NavLink>
        <button className="flex items-center gap-2 sm:gap-3 lg:hidden cursor-pointer ease-in-out hover:scale-105" onClick={() => handleClick()}>
          {isMenuOpen ? '' : 'MENU'}
          {isMenuOpen
            ? <Icon className={`${effect && 'animate-[halfSpin_.1s;]'}`} onAnimationEnd={() => setEffect(false)} name="x" size="lg" title="Close Menu"></Icon>
            : <Icon className={`${effect && 'animate-[halfSpin_.1s;]'}`} onAnimationEnd={() => setEffect(false)} name="menu" size="lg" title="Open Menu"></Icon>
          }
        </button>

        <div className={`text-2xl sm:text-3xl absolute w-full z-20 lg:hidden top-[55px] md:top-[107px] left-0 h-svh py-4 md:py-8 bg-linear-to-b from-green to-green/95 flex-col items-center gap-6 md:gap-8 ${isMenuOpen ? 'flex origin-top animate-[grow_.3s;]' : 'hidden'}`}
        onClick={() => setIsMenuOpen(false)}>
          <NavLink
            className="lg:hidden transition-all duration-150 ease-in-out hover:scale-105"
            to='shows'
            viewTransition
            onClick={() => setIsMenuOpen(false)}
          >SHOWS</NavLink>
          <Link
            className="lg:hidden transition-all duration-150 ease-in-out hover:scale-105"
            to='https://shop.rohnamusic.com'
            viewTransition
            onClick={() => setIsMenuOpen(false)}
          >MERCH</Link>
          <NavLink
            className="lg:hidden transition-all duration-150 ease-in-out hover:scale-105"
            to='about'
            viewTransition
            onClick={() => setIsMenuOpen(false)}
          >ABOUT</NavLink>
          <NavLink
            className="lg:hidden transition-all duration-150 ease-in-out hover:scale-105"
            to='contact'
            viewTransition
            onClick={() => setIsMenuOpen(false)}
          >CONTACT</NavLink>
          <NavLink
            className="lg:hidden transition-all duration-150 ease-in-out hover:scale-105"
            to='epk'
            viewTransition
            onClick={() => setIsMenuOpen(false)}
          >PRESS KIT</NavLink>
        </div>
      </nav>
    </header>
  )
};
