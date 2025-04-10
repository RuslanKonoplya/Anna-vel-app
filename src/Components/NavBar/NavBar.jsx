import './NavBar.scss'


export function NavBar({ styles }) {

  return (
    <nav className="nav" style={styles}>
      <a href="/">
        <img src="/Images/ANNA VEL-Logo.png" alt="Logo" className="nav__logo" width="80px" height="80px"/>
      </a>
      
      <p className="nav__p">
        <a href="tel:+380634050861" className="nav__link nav__link--phone">0634050861</a>| 
        <a href="viber://add?number=%2B380634050861" className="nav__link">Viber</a> | 
        <a href="https://t.me/+380634050861" className="nav__link">Telegram</a>
      </p>


      <a href="#form__contact-us" className='nav__button'>Зворотній зв'язок</a>
      

      
    </nav>
  );
};

export default NavBar;