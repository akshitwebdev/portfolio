import React from 'react'
import {projects} from '../../constants'

function Work() {
  return (

<section
id='work'
className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'
>
  {/* section title */}

  <div className='text-center mb-16'>
    <h2 className='text-4xl font-bold text-white'>
       PROJECTS
    </h2>
    <div className='w-32 h-1 bg-purple-500 mx-auto mt-4' ></div>
    <p className='text-gray-400 mt-4 text-lg font-semibold'>
      A showcase of the projects I have worked on, hightlighting my skills and experience in various technologies 
    </p>
  </div>



{/* projects grid */}

<div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

{projects.map((project)=>(
  <div
  key={project.id}
  className='border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:translate-y-2 transtion-transform duration-300'
  >

    <div>
      <img src={project.image} alt={project.title}  className='w-full h-48 object-cover rounded-xl'/>
    </div>

    <div className='p-6'>
<h3 className='text-2xl font-bold text-white mb-2'>
  {project.title}
</h3>
<p className='text-gray-500 mb-4 pt-5 line-clamp-3'>
  {project.description}
</p>
    </div>

  </div>
))}
</div>


</section>

     )
}

export default Work
