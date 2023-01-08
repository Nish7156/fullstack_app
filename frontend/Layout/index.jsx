import React from 'react'
import DynamicFooter from '../components/DynamicFooter'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Layout({children}) {
  return (
    <>
    <div className='flex flex-col min-h-screen transition-colors duration-150 bg-gray-100'>
    <Header/>
    {children}
    <DynamicFooter/>
    <Footer/>
    </div>
    </>
  )
}

export default Layout