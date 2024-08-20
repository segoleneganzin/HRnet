import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Menu = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isHomePage = currentPath === '/'; // to not display menu on homePage
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const openResponsiveMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    !isHomePage && (
      <>
        <nav className={hamburgerOpen ? 'menu--responsive' : 'menu'}>
          <ul className='menu__list' role='menu'>
            <li className='menu__item' role='menuitem'>
              <Link to={'/'} className='menu__item-link'>
                Home
              </Link>
            </li>
            {currentPath !== '/employee-list' && (
              <li className='menu__item' role='menuitem'>
                <Link to={'/employee-list'} className='menu__item-link'>
                  Current Employees
                </Link>
              </li>
            )}
            {currentPath !== '/create-employee' && (
              <li className='menu__item' role='menuitem'>
                <Link to={'/create-employee'} className='menu__item-link'>
                  Create Employee
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <label className='menu__burger' htmlFor='burger'>
          <input
            type='checkbox'
            id='burger'
            onClick={openResponsiveMenu}
            aria-haspopup='true'
            aria-controls='toggleNavbar'
            aria-expanded={hamburgerOpen}
            aria-label='Open menu'
          />
          <span className='visually-hidden'>
            {hamburgerOpen ? 'Close menu' : 'Open menu'}
          </span>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </>
    )
  );
};

export default Menu;
