import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';

// Reducing the initial load time by loading components only when they are needed
const Home = lazy(() => import('./pages/Home'));
const EmployeeList = lazy(() => import('./pages/EmployeeList'));
const CreateEmployee = lazy(() => import('./pages/CreateEmployee'));

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
