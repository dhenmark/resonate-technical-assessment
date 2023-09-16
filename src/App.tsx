import React from 'react';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ContactsRoute from './Page/Contacts';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path ="/" element={<ContactsRoute/>}/>
    )
  )

  return (
    <div style={{ backgroundColor: "#E8EDF1", height: '100vh' }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
