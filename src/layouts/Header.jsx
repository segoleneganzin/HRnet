import Menu from '../components/Menu';

const Header = () => {
  return (
    <header>
      <h1>HRnet</h1>
      {document.title !== 'HRnet' && <Menu />}
    </header>
  );
};

export default Header;
