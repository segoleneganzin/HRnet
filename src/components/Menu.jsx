import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/current-employees'}>Current Employees</Link>
        </li>
        <li>
          <Link to={'/create-employee'}>Create Employee</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
