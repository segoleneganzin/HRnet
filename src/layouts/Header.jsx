import Menu from './Menu';
import logo from '../assets/img/logo.webp';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='' className='header__img' height={50} width={50} />
      <div className='header__titles'>
        <h1 className='title'>WEALTH HEALTH</h1>
        <h2 className='title'>HRnet</h2>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
