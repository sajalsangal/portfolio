import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id = "Projects" className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>  
        <div className='py-12 px-8 flex flex-wrap gap-28'>
            <ProjectCard 
                title="Blogging Website" 
                main="This is a blogging website created in nextjs" 
            /> 
            <ProjectCard 
                title="Youtube Clone" 
                main="This is a blogging website created in nextjs" 
            /> 
            <ProjectCard 
                title="Netflix Clone" 
                main="This is a blogging website created in nextjs" 
            /> 
        </div>  
    </div>
  )
}

export default Projects
