import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ContactsRoute from './Page/Contacts';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path ="/" element={<ContactsRoute/>}/>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
