import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import './NavBarMain.scss';

const NavBarMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }


  
  return (
    <>
      <nav className="nav">
        <Link to="/"><img src="/Images/ANNA VEL-Logo.png" alt="Logo" className="nav__logo" /></Link>
        <button className="burger" onClick={toggleMenu}>
          <span className="burger__line" /><span className="burger__line" /><span className="burger__line" />
        </button>
        <div className="nav__links">
        <Link to="/about-us" className="nav__link">Про Нас</Link>
          <Link to= "/services" className="nav__link">Послуги</Link>
          <Link to="/objects" className="nav__link">Об'єкти</Link>
          <a href="#form__contact-us" className="nav__link">Контакти</a>
        </div>
      </nav>

      <aside className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <button className="mobile-menu__close" onClick={toggleMenu}>✕</button>
        <Link to="/about-us" className="mobile-menu__link" onClick={toggleMenu}>Про Нас</Link>
        <Link to="/services" className="mobile-menu__link" onClick={toggleMenu}>Послуги</Link>
        <Link to="/objects" className="mobile-menu__link" onClick={toggleMenu}>Об'єкти</Link>
        <a href="#form__contact-us" className="mobile-menu__link" onClick={toggleMenu}>Контакти</a>
      </aside>
    </>
  );
};

export default NavBarMain;
