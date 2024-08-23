import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();
  const checkBurger = useRef();
  const currentPath = location.pathname;
  const isHomePage = currentPath === '/'; // to not display menu on homePage
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleResponsiveMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  useEffect(() => {
    if (checkBurger.current && !hamburgerOpen) {
      checkBurger.current.checked = false;
    }
  }, [hamburgerOpen]);

  return (
    !isHomePage && (
      <>
        <nav className={hamburgerOpen ? 'menu--responsive' : 'menu'}>
          <ul className='menu__list' role='menu'>
            <li className='menu__item' role='menuitem'>
              <Link
                to={'/'}
                className='menu__item-link'
                onClick={hamburgerOpen ? toggleResponsiveMenu : null}
              >
                Home
              </Link>
            </li>
            {currentPath !== '/employee-list' && (
              <li className='menu__item' role='menuitem'>
                <Link
                  to={'/employee-list'}
                  className='menu__item-link'
                  onClick={hamburgerOpen ? toggleResponsiveMenu : null}
                >
                  Current Employees
                </Link>
              </li>
            )}
            {currentPath !== '/create-employee' && (
              <li className='menu__item' role='menuitem'>
                <Link
                  to={'/create-employee'}
                  className='menu__item-link'
                  onClick={hamburgerOpen ? toggleResponsiveMenu : null}
                >
                  Create Employee
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <label className='menu__burger' htmlFor='burger'>
          <input
            ref={checkBurger}
            type='checkbox'
            id='burger'
            onClick={toggleResponsiveMenu}
            aria-haspopup='true'
            aria-controls='toggleResponsiveMenu'
            aria-expanded={hamburgerOpen}
            aria-label={hamburgerOpen ? 'Close menu' : 'Open menu'}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </>
    )
  );
};

export default Menu;
