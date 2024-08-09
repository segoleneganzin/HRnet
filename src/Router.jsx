import { Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import Home from './pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/create-employee' element={<CreateEmployee />} />
      <Route path='/employee-list' element={<EmployeeList />} />
    </Routes>
  );
};

export default Router;
