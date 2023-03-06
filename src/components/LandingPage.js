import React from 'react'
import { Link } from 'react-router-dom'
import multitask_img from '../assets/multitask.svg'
const LandingPage = () => {
  return (
    <div className='tw-bg-primary tw-h-screen'>
        <div className='center tw-flex tw-items-center tw-flex-col'>
            <h1 className=' tw-mb-2 tw-uppercase tw-text-2xl tw-text-white tw-text-center'>Let turbo sort out your projects</h1>
            <h1 className=' tw-uppercase tw-text-2xl tw-text-white tw-text-center tw-mb-8'>so you can focus on other things</h1>
            <img src={multitask_img} alt="multitasking person" className=' tw-h-96' />
            <Link to="/login" className=" tw-mt-8 tw-w-fit tw-bg-white tw-px-3 tw-py-1 hover:tw-bg-red-600 hover:tw-text-white tw-duration-300 tw-rounded-md"
                                        >
                                        Get started
                </Link>
        </div>
    </div>
  )
}

export default LandingPage