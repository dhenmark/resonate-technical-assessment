import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Contacts from './Page/Contacts';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path ="/" element={<Contacts/>}/>
    )
  )

  return (
    <div style={{ backgroundColor: "#E8EDF1", height: '100vh' }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
