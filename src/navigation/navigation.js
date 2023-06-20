import { lazy } from 'react';
import Protected from './protected';

const Navbar = lazy(() => import('../components/Navbar'));
const Footer = lazy(() => import('../components/Footer'));
const Landing = lazy(() => import('../screens/Landing'));
const Login = lazy(() => import('../screens/Login'));
const PageNotFound = lazy(() => import('../screens/PageNotFound'));
const Dashboard = lazy(() => import('../screens/Admin/Dashboard'));

const getElement = (element, withNavbar, withFooter, isAdminPage) => (
  <>
    {withNavbar && <Navbar isAdminPage={isAdminPage} />}
    {element}
    {withFooter && <Footer />}
  </>
);

const getProtectedElement = (element, permission) => (
  <Protected permission={permission}>{element}</Protected>
);

const landing = [
  {
    path: '/',
    element: getElement(<Landing />, true, true)
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];

const cms = [
  {
    path: '/admin/login',
    element: getElement(<Login />)
  },
  {
    path: '/admin/dashboard',
    element: getProtectedElement(getElement(<Dashboard />, true, false, true), 'admin')
  }
];

export { landing, cms };
