import { Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import CurrentEmployees from './pages/CurrentEmployees';
import Home from './pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/create-employee' element={<CreateEmployee />} />
      <Route path='/current-employees' element={<CurrentEmployees />} />
    </Routes>
  );
};

export default Router;
