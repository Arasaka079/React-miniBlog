import React from 'react';
import routes from './Routes.jsx';
import NavBar from './components/NavBar.jsx';
import { useRoutes } from 'react-router-dom';

export default function App() {
  let router = useRoutes(routes);

  return (
    <>
      <NavBar />
      {router}
    </>
  );
}
