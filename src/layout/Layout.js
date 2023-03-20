import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden' >
    <Header/> 
    <Outlet/> 
    </div>
  )
}

export default Layout;