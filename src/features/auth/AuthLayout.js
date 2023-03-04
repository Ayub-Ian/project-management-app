import React from 'react'
import logo from '../../assets/turbo.svg'
import logoIcon from '../../assets/turbo-icon.svg'

export const AuthLayout = ({ children }) => {
  return (
    <div className='tw-min-h-screen tw-bg-primary'>
        <div className=' tw-flex tw-justify-center tw-pt-16'>
            <img src={logo} alt="Turbo logo" />
        </div>

        <div className='center tw-bg-secondary tw-rounded-lg'>
            <div className='tw-flex tw-flex-col tw-items-center tw-py-6 tw-px-40 tw-gap-5'>
                <img src={logoIcon} alt="tachometer icon" />
                {children}
            </div> 
        </div>
        
    </div>
  )
}
