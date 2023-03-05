
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/turbo.svg'
import { API_URL } from '../../config'

export default function Header({ loggedIn, setLoggedIn }) {

    const navigate = useNavigate()
    function logoutUser(){
        localStorage.clear()
        setLoggedIn(false)
        navigate('/login')

        fetch(`${API_URL}/logout`, {method: 'DELETE'})
        .then(res => {
            if(!res.ok){
                res.json().then(error => console.warn(error))
            }
        })
    }

  return (
    <header className=' tw-bg-primary tw-border-b tw-border-grey-100'>
        <div className=' tw-mx-8 tw-py-5 tw-flex tw-items-center tw-justify-between'>
            <div className='tw-flex tw-gap-x-32'>
                <img src={logo} alt="turbo logo" />
                {loggedIn ? 
                <ul className='tw-flex tw-gap-x-8 tw-text-grey-100'>
                    <li>Home</li>
                    <Link to='/projects'>Projects</Link>
                </ul>
                :null}
            </div>
            <div className=' tw-border-l tw-border-grey-100 tw-px-2'>
                {/* <h3>{user.name}</h3> */}
                {loggedIn ? 
                <button className=" tw-bg-white tw-px-3 tw-py-1 hover:tw-bg-red-600 hover:tw-text-white tw-duration-300 tw-rounded-md"
                                        onClick={logoutUser}>
                                        Logout
                </button> : null
                }
            </div>
        </div>
</header>
  )
}
