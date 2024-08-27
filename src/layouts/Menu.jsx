import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Menu component renders a navigation menu with a responsive hamburger menu.
 * The menu is not displayed on the home page.
 * Menu item to display depends of the current page (the current page doesn't appear on menu)
 *
 * @returns {JSX.Element}
 */
const Menu = () => {
  const location = useLocation();
  const checkBurger = useRef();
  const currentPath = location.pathname;
  const isHomePage = currentPath === '/'; // Boolean to determine if on the home page
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleResponsiveMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  /**
   * Synchronizes the checkbox state with the hamburgerOpen state.
   * Unchecked checkbox if the menu is closed.
   */
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
        <label
          className='menu__burger'
          htmlFor='burger'
          aria-label={hamburgerOpen ? 'close menu' : 'open menu'}
        >
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
