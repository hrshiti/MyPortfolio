import React from 'react'
import "./Demo_project.css"
import My_Info from '../../MyInfo/My_Info'
const Demo_project = () => {
    return (
        <>
            <div className='project_clumn_div'>
                <div className="project_row_div">
                    <My_Info
                        heading="Menu Bar"
                        small_heading="Calculator"
                        paragrph="this is my portfolio website htails about me"
                        paragrph2="this is my portfolio website having details about me"
                        paragrph3="#html  #css #javascript  #react"
                    />

                </div>
                <div className="project_row_div">
                    <img className='menu_image' src='/menu_bar.png' alt='project_image' />
                </div>
            </div>
            <div className='project_clumn_div'>
                <div className="project_row_div">
                    <img className='calculator_img' src='/calculator.jpg' alt='project_image' />

                </div>
                <div className="project_row_div">
                    <My_Info
                        heading="Calculate Me"
                        small_heading="Calculator"
                        paragrph="this is my portfolio website htails about me"
                        paragrph2="this is my portfolio website having details about me"
                        paragrph3="#html  #css #javascript  #react"
                    />

                </div>
            </div>
        </>
    )
}

export default Demo_project
