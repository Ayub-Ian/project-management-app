import React from 'react'
import Header from './Header'

export const MainLayout = ({ children}) => {
  return (
    <div className='tw-bg-primary tw-min-h-screen tw-text-grey-100'>
        <div>
        {children}
        </div>
    </div>
  )
}
