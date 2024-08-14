import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='header'>
      <Link to={'/'}>
        <img src={logo} alt='logo' className='header__img' />
      </Link>
      <div className='header__titles'>
        <h1 className='title'>WEALTH HEALTH</h1>
        <h2 className='title'>HRnet</h2>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
