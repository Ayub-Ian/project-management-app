import React, { useEffect, useState } from 'react'
import { MainLayout } from '../../../components/layout/MainLayout'
import CreateProject from './CreateProject';
import { API_URL } from '../../../config'
import ProjectList from './ProjectList';
import { useNavigate } from 'react-router-dom';


const Projects = ({user}) => {

  
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        if (!user) {
            navigate('/login')
          }
    }, [])


    useEffect(() => {
        fetch(`${API_URL}/projects`)
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])



    
  return (
    <MainLayout user={user}>
    <div className='tw-flex tw-justify-end tw-h-full' >
        <main className='content'>
            <div>
        {/* project header  */}
        <div className=' tw-mt-10 tw-border-b tw-border-b-grey-100 tw-pb-6'>
            <div className='tw-mx-8 tw-flex tw-items-start tw-justify-between'>
                <div>
                    <h2 className=' tw-text-white tw-text-2xl tw-mb-1'>All projects</h2>
                    <p>Create and view all projects from here.
                    </p>
                </div>

                <div>
                    <button type='button' onClick={() => setShowModal(true)} className=' tw-bg-accent-100 tw-text-dark tw-px-3 tw-py-1.5 tw-rounded-lg tw-font-medium hover:tw-shadow-lg tw-outline-none focus:tw-outline-none'>Create project</button>
                    <CreateProject showModal={showModal} setShowModal={setShowModal} />
                </div>
            </div>
        </div>

        <div className='tw-mx-8' >
            {/* project search */}
            <div className=' tw-mt-4 tw-flex tw-items-end tw-justify-between tw-border-b tw-border-b-grey-100 tw-pb-4'>
                <input type="search" placeholder='Search by project name' className=' tw-border-none tw-outline-none tw-bg-secondary tw-pl-8 tw-py-1.5 tw-w-72 tw-rounded-lg placeholder:tw-text-sm' />
            </div>
            {/* project cards container  */}
            <ProjectList projects={projects} />

        </div>
        </div>
        </main>

{/*            
                <aside className='sidebar detail-active tw-hidden md:tw-block'>
                    <div className=" tw-border-l tw-border-grey-100 tw-bg-transparent tw-p-10 tw-pl-20 tw-text-white tw-h-full ">
                        <h2 className="tw-mt-20 tw-text-4xl tw-font-semibold tw-text-white">I am a sidebar</h2>
                    </div>
                </aside> 
        
   */}


    </div>
    </MainLayout>
  )
}

export default Projects