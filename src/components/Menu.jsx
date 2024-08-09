import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        {currentPath !== '/employee-list' && (
          <li>
            <Link to={'/employee-list'}>Current Employees</Link>
          </li>
        )}
        {currentPath !== '/create-employee' && (
          <li>
            <Link to={'/create-employee'}>Create Employee</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
