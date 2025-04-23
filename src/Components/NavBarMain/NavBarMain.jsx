import React, { useState } from 'react';
import './NavBarMain.scss';

const NavBarMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="nav">
        <a href="/">
          <img src="/Images/ANNA VEL-Logo.png" alt="Logo" className="nav__logo" />
        </a>

        <button className="burger" onClick={toggleMenu}>
          <span className="burger__line" />
          <span className="burger__line" />
          <span className="burger__line" />
        </button>

        <div className="nav__links">
          <a href="#about-us" className="nav__link">Про Нас</a>
          <a href="#servises" className="nav__link">Послуги</a>
          <a href="#houses" className="nav__link">Об'єкти</a>
          <a href="#ourteam" className="nav__link">Наша Команда</a>
          <a href="#form__contact-us" className="nav__link">Контакти</a>
        </div>
      </nav>

      <aside className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <button className="mobile-menu__close" onClick={toggleMenu}>✕</button>
        <a href="#about-us" className="mobile-menu__link" onClick={toggleMenu}>Про Нас</a>
        <a href="#servises" className="mobile-menu__link" onClick={toggleMenu}>Послуги</a>
        <a href="#houses" className="mobile-menu__link" onClick={toggleMenu}>Об'єкти</a>
        <a href="#ourteam" className="mobile-menu__link" onClick={toggleMenu}>Наша Команда</a>
        <a href="#form__contact-us" className="mobile-menu__link" onClick={toggleMenu}>Контакти</a>
      </aside>
    </>
  );
};

export default NavBarMain;



