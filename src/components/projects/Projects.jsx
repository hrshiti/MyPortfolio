import React from 'react'

import "./Projects.css"
import Demo_project from './demo_project/Demo_project'
import Navbar from '../navbar/Navbar'
const Projects = () => {
    return (
        <>
    
        <section className='project_section'>
            <h1 className='project_heading'>Projects</h1>
            {/* <div className='project_main_div'> */}
             <Demo_project />
             <Demo_project />
                {/* <div className='project_clumn_div'>
                <Demo_project />
                </div> */}
                {/* <div className='project_clumn_div'>
                <Demo_project />
                </div> */}
                {/* <div className='project_clumn_div'>
                <Demo_project />
                </div>
                <div className='project_clumn_div'>
                <Demo_project />
                </div> */}
            {/* </div> */}
        </section>
        </>
    )
}

export default Projects
