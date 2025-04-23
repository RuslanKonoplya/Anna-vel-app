import './NavBar.scss'


export function NavBar({ styles }) {

  return (
    <nav className="nav">
  <a href="/">
    <img src="/Images/ANNA VEL-Logo.png" alt="Logo" className="nav__logo" width="80" height="80"/>
  </a>

  <a href="#form__contact-us" className="nav__button">
    <span>📩</span> Зворотній зв'язок
  </a>
</nav>
  )
};

export default NavBar;