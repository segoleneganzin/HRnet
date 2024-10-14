import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.webp';

const Header = () => (
  <header className='header'>
    <Link to={'/'} className='header__content'>
      <img src={logo} alt='Logo Wealth Health' className='header__img' />
      <div className='header__titles'>
        <h1 className='title'>WEALTH HEALTH</h1>
        <h2 className='title'>HRnet</h2>
      </div>
    </Link>
  </header>
);

export default Header;
