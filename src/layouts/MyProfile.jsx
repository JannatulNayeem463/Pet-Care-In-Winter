import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';




const MyProfile = () => {
  return (
    <div >
      <header>
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      
    </div>
  );
};

export default MyProfile;