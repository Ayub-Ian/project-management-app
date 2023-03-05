import React from 'react'
import { Link } from 'react-router-dom'
import menu_icon from '../../../assets/menu-icon.svg'

const ProjectCard = ({id, category, name, description, priority }) => {
  return (
    <div className=' tw-p-5 tw-rounded-lg tw-bg-secondary'>
        <div className=' tw-flex tw-flex-col tw-gap-3'>
            <div className='tw-flex tw-justify-between tw-items-center'>
                <p className=' tw-uppercase tw-text-sm'>{category}</p>
                <div>
                    <img src={menu_icon} alt="menu icon" />
                </div>
            </div>
            <Link to={`/project/details/${id}`} className="hover:tw-underline tw-underline-offset-4 tw-text-white">
            <h2 className=' tw-text-lg tw-text-white'>{name}</h2> </Link>
            <p>{description}</p>
            <span className='tw-border tw-border-accent-100 tw-w-fit tw-py-1 tw-text-accent-100 tw-px-2 tw-rounded-lg tw-text-xs'>{priority}</span>
        </div>
    </div>
  )
}

export default ProjectCard