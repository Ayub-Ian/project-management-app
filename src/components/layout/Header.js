import React from 'react'
import logo from '../../assets/turbo.svg'

export default function Header() {
  return (
    <header className=' tw-border-b tw-border-grey-100'>
        <div className=' tw-mx-8 tw-py-5 tw-flex tw-items-center tw-justify-between'>
            <div className='tw-flex tw-gap-x-32'>
                <img src={logo} alt="turbo logo" />
                <ul className='tw-flex tw-gap-x-8'>
                    <li>Home</li>
                    <li>Projects</li>
                </ul>
            </div>
            <div className=' tw-border-l tw-border-grey-100 tw-px-2'>
                <h3>Jane Doe</h3>
            </div>
        </div>
</header>
  )
}
