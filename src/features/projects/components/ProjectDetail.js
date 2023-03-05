import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MainLayout } from '../../../components/layout/MainLayout'
import { API_URL } from '../../../config'

const ProjectDetail = () => {

    let { id } = useParams()
  
    
    const [project, setProject] = useState(null)

    useEffect(() => {
        fetch(`${API_URL}/project/${id}`)
        .then(res => res.json())
        .then(data => setProject(data)) 
    }, [])


  
    const convertDate = (date) => new Date(date).toDateString()
  
    if (!project) {
        return (
            <div className=' tw-bg-primary'>
                <h1>Loading ...</h1>
        </div>
        )
    }
    

  return (
    <MainLayout >
        <div className=' tw-mx-8'>
            <div className='tw-flex tw-flex-col tw-gap-3 tw-mt-12'>
                <h1 className='tw-text-white tw-text-3xl tw-font-medium'>{project.name}</h1>
                <span className='tw-mt-3 tw-flex tw-items-center tw-gap-x-14'>
                    <p>Priority:</p>
                    <p>{!project.priority ? "Normal" : project.priority}</p>
                </span>
                <span className='tw-mt-3 tw-flex tw-items-center tw-gap-x-10'>
                    <p>Members:</p>
                    <div className='tw-flex tw-items-center tw-gap-x-3'>
                        <span className=' tw-text-sm tw-bg-secondary tw-px-1.5 tw-py-1 tw-rounded-lg'>Ahsan Tapadar</span>
                        <div className=' tw-h-6 tw-w-6 tw-border-2 tw-rounded-full tw-border-dashed border tw-flex tw-justify-center tw-items-center tw-border-grey-100'>
                            <button className='tw-text-white tw-text-lg tw-mb-0.5'>+</button>
                        </div>
                    </div> 
                </span>
                <span className='tw-mt-3 tw-flex tw-items-center tw-gap-x-10'>
                    <p>Deadline:</p>
                    <p>{!project.due_date ? "Open" : convertDate(project.due_date)}</p>
                </span>
                <span className='tw-mt-3 tw-flex tw-items-center tw-gap-x-10'>
                    <p>Category:</p>
                    <p>{project.category}</p>
                </span>
            </div>

            <div className=' tw-mt-10'>
                <p className='tw-text-white tw-text-lg'>Activity</p>
            </div>
        </div>
    </MainLayout>
  )
}

export default ProjectDetail