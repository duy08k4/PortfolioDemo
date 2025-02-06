import { useEffect, useState } from 'react'
import '../styles/ProjectCard.css'

import { motion } from 'framer-motion'
import React from 'react'

function ProjectCard(props) {
    const [cardData, setCardData] = useState({})

    useEffect(() => {
        if(props.projectData) {
            setCardData(props.projectData)
        }
    }, [props.projectData])

    return (
        <React.Fragment>
            {
                Object.keys(cardData).length > 0 ? 
                <motion.div 
                    className='projectCard'
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ amount: 1 }}
                    variants={{
                        offscreen: {
                            opacity: 0.2,
                        },
                        onscreen: {
                            opacity: 1,
                            transition: {
                                duration: 0.5
                            }
                        }
                    }}
                >
                    <div className='noSelect projectCard__imgBox'>
                        <img src={cardData.avatar} alt="Project Avatar" loading='lazy' />
                    </div>
        
                    <div className='projectCard__infoBox'>
                        <div className='projectCard__infoBox--info projectCard__infoBox--name'>
                            <h3 className='noSelect projectCard__infoBox--name--content'>{cardData.name}</h3>
                        </div>
        
                        <div className='noSelect projectCard__infoBox--info projectCard__infoBox--tech'>
                            {(cardData.tech).map((tech, index) => <p key={index}>{tech}</p>)}
                            {/* <p>HTML</p>
                            <p>CSS</p>
                            <p>JAVASCRIPT</p>
                            <p>PYTHON</p>
                            <p>FIREBASE</p> */}
                        </div>
                    </div>
                    
                    <div className='projectCard__funcBox'>
                        <a href={cardData.demo} className='livedemo' target='_blank' rel='noopener noreferrer'>
                            <i className="fas fa-globe"></i>
                            Live demo
                        </a>
                        <a href={cardData.github} className='viewSource' target='_blank' rel='noopener noreferrer'>View</a>
                    </div>
                </motion.div>
                : ""
            }
        </React.Fragment>
    )
}

export default ProjectCard