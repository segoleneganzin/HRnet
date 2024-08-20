import Menu from '../components/Menu';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='' className='header__img' />
      <div className='header__titles'>
        <h1 className='title'>WEALTH HEALTH</h1>
        <h2 className='title'>HRnet</h2>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
