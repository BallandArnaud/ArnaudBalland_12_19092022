import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/svg/logo.svg'
import './index.css'

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo sportsee" />
      </Link>
      <nav className="header__navbar">
        <ul className="header__nav">
          <li className="header__navItem">
            <NavLink className="header__navLink" to="/">
              Accueil
            </NavLink>
          </li>
          <li className="header__navItem">
            <NavLink className="header__navLink" to="/profil">
              Profil
            </NavLink>
          </li>
          <li className="header__navItem">
            <NavLink className="header__navLink" to="/setting">
              Réglage
            </NavLink>
          </li>
          <li className="header__navItem">
            <NavLink className="header__navLink" to="/community">
              Communauté
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Header
