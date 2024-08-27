import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
// import EmployeeList from './pages/EmployeeList';
// import Home from './pages/Home';
import Loader from './components/Loader';
const Home = React.lazy(() => import('./pages/Home'));
const EmployeeList = React.lazy(() => import('./pages/EmployeeList'));

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/create-employee' element={<CreateEmployee />} />
        <Route path='/employee-list' element={<EmployeeList />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
