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
      <nav className='flex flex-row justify-between items-center font-bold text-lg px-8 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white'>
        <Link className='' to={'/'}>
          <Logo sizes="w-[75px] h-[22px] md:w-[150px] md:h-[44px] lg:w-[187px] lg:h-[55px]"/>
        </Link>
        <NavLink
          className={({ isActive, isPending }) => isActive ? "active hidden lg:block transition-all duration-150 ease-in-out hover:scale-105" : isPending ? "pending hidden lg:block transition-all duration-150 ease-in-out hover:scale-105" : "hidden lg:block transition-all duration-150 ease-in-out hover:scale-105"}
          to={'tour'}
        >TOUR</NavLink>
        <Link className='hidden lg:block transition-all duration-150 ease-in-out hover:scale-105'
          to={'https://rohna-online-store.myshopify.com/'}
        >MERCH</Link>
        <NavLink
          className={({ isActive, isPending }) => isActive ? "active hidden lg:block transition-all duration-150 ease-in-out hover:scale-105" : isPending ? "pending hidden lg:block transition-all duration-150 ease-in-out hover:scale-105" : "hidden lg:block transition-all duration-150 ease-in-out hover:scale-105"}
          to={'presskit'}
        >PRESS KIT</NavLink>
        <NavLink
          className={({ isActive, isPending }) => isActive ? "active hidden lg:block transition-all duration-150 ease-in-out hover:scale-105" : isPending ? "pending hidden lg:block transition-all duration-150 ease-in-out hover:scale-105" : "hidden lg:block transition-all duration-150 ease-in-out hover:scale-105"}
          to={'about'}
        >ABOUT</NavLink>
        <NavLink
          className={({ isActive, isPending }) => isActive ? "active hidden lg:block transition-all duration-150 ease-in-out hover:scale-105" : isPending ? "pending hidden lg:block transition-all duration-150 ease-in-out hover:scale-105" : "hidden lg:block transition-all duration-150 ease-in-out hover:scale-105"}
          to={'contact'}
        >CONTACT</NavLink>
        <button className={`size-6 md:size-8 lg:hidden cursor-pointer ease-in-out hover:scale-105 ${effect && 'animate-[halfSpin_.1s;]'}`} onClick={() => handleClick()} onAnimationEnd={() => setEffect(false)}>
          {isMenuOpen
            ? <Icon name="x" size="xl" title="Close Menu" />
            : <Icon name="menu" size="xl" title="Menu" />
          }
        </button>

        <div className={`text-2xl sm:text-3xl absolute w-full z-20 lg:hidden top-[55px] md:top-[107px] left-0 h-svh py-4 md:py-8 bg-gradient-to-b from-green to-green/95 flex-col items-center gap-6 md:gap-8 ${isMenuOpen ? 'flex origin-top animate-[grow_.3s;]' : 'hidden'}`}
        onClick={() => setIsMenuOpen(false)}>
          <NavLink
            className="lg:hidden transition-all duration-150 ease-in-out hover:scale-105"
            to={'tour'}
            onClick={() => setIsMenuOpen(false)}
          >TOUR</NavLink>
          <Link
            className="lg:hidden transition-all duration-150 ease-in-out hover:scale-105"
            to={'https://rohna-online-store.myshopify.com/'}
            onClick={() => setIsMenuOpen(false)}
          >MERCH</Link>
          <NavLink
            className="lg:hidden transition-all duration-150 ease-in-out hover:scale-105"
            to={'presskit'}
            onClick={() => setIsMenuOpen(false)}
          >PRESS KIT</NavLink>
          <NavLink
            className="lg:hidden transition-all duration-150 ease-in-out hover:scale-105"
            to={'about'}
            onClick={() => setIsMenuOpen(false)}
          >ABOUT</NavLink>
          <NavLink
            className="lg:hidden transition-all duration-150 ease-in-out hover:scale-105"
            to={'contact'}
            onClick={() => setIsMenuOpen(false)}
          >CONTACT</NavLink>
        </div>
      </nav>
    </header>
  )
};
