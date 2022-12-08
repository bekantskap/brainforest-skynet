import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-screen h-fit lg:min-h-[90vh] flex flex-col items-center">
        {children}
      </main>
      ;
    </>
  );
};

export default Layout;
