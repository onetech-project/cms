import { lazy } from 'react';

const Navbar = lazy(() => import('../components/Navbar'));
const Footer = lazy(() => import('../components/Footer'));
const Landing = lazy(() => import('../screens/Landing'));
const Login = lazy(() => import('../screens/Login'));
const PageNotFound = lazy(() => import('../screens/PageNotFound'));

const getElement = (element) => (
  <>
    <Navbar />
    {element}
    <Footer />
  </>
);

const landing = [
  {
    path: '/',
    element: getElement(<Landing />)
  },
  {
    path: 'login',
    element: getElement(<Login />)
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];

const cms = [];

export { landing, cms };
