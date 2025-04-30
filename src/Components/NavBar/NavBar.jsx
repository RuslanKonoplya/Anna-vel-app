import './NavBar.scss'


export function NavBar({ styles }) {

  return (
    <nav className="navi">
  <a href="/">
    <img src="/Images/ANNA VEL-Logo.png" alt="Logo" className="navi__logo" width="80" height="80"/>
  </a>

  <a href="#form__contact-us" className="navi__button">
    <span>📩</span> Зворотній зв'язок
  </a>
</nav>
  )
};

export default NavBar;