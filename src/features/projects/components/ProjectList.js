import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectList = ({ projects }) => {
  return (
    <div className=' tw-mt-8 tw-grid tw-grid-cols-3 tw-gap-6'>
        {/* project card  */}
        {projects.map(project => {
            const { id, category, name, priority, description } = project
            return (
                <ProjectCard key={id} category={category} name={name} priority={priority} description={description} />
            )
        })}

    </div>
  )
}

export default ProjectList