import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loader } from '../components';
import { i18n } from '../i18n';
import { landing, cms } from './navigation';

const Navigation = () => {
  const general = useSelector((state) => state.generalReducer);
  useEffect(() => {
    i18n.changeLanguage(general.language.code);
  }, [general.language]);
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {[...landing, ...cms].map((x) => (
            <Route key={x.path} path={x.path} element={x.element} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Navigation;
