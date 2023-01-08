import React from 'react'
import Header from '../components/Header'

function index({children}) {
  return (
    <div>
      <Header/>
        {children}
    </div>
  )
}

export default index