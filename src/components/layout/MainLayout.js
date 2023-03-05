import React from 'react'
import Header from './Header'

export const MainLayout = ({user, children}) => {
  return (
    <div className='tw-bg-primary tw-min-h-screen tw-text-grey-100'>
        <Header user={user} />
        <div>
        {children}
        </div>
    </div>
  )
}
