import React from 'react'
import { Link } from 'react-router-dom'
import menu_icon from '../../../assets/menu-icon.svg'
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';



const ProjectCard = ({id, category, name, description, priority, handleDelete }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const popId = open ? 'simple-popover' : undefined;


  return (
    <div className=' tw-p-5 tw-rounded-lg tw-bg-secondary'>
        <div className=' tw-flex tw-flex-col tw-gap-3'>
            <div className='tw-flex tw-justify-between tw-items-center'>
                <p className=' tw-uppercase tw-text-sm'>{category}</p>
                <div>
                <Button aria-describedby={popId} onClick={handleClick}>
                <img src={menu_icon} alt="menu icon" />
                </Button>
                <Popover
                    id={popId}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                >
                    <Button sx={{ p: 1, color: '#f44336'}} onClick={() => handleDelete(id)}>Delete</Button>
                </Popover>
                    
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