import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Kodego Logo" />
        <span>Kodeshop</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: 5</span>
      </Link>
    </header>
  );
};
