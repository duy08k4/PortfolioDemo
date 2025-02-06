import '../styles/Project.css'

import { motion } from 'framer-motion';

import ProjectCard from '../components/ProjectCard';
import { useEffect, useState } from 'react';

import myData from '../firebase_setup/data';

function Project() {
    const [project, setProject] = useState([])

    useEffect(() => {
        ((new myData).getProject()).then(data => setProject(data))
    }, [])

    return (
        <div id='project' className='project'>
            <motion.div 
                className='projectHeader'
                variants={{
                    offscreen: {

                    },
                    onscreen: {

                    }
                }}
            >
                <h3 className='projectHeader_content'>
                    <i className="fas fa-folder-open"></i>
                    Projects Showcase
                </h3>
            </motion.div>

            <motion.div 
                className='projectList'
                variants={{
                    offscreen: {
                        opacity: 0,
                        scale: 0
                    },
                    onscreen: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.5
                        }
                    }
                }}
            >
                {
                    project && project.length > 0
                    ? 
                        project.map((projectData, index) => {
                            return <ProjectCard key={index} projectData={projectData} />
                        })
                    : ""
                }
                {/* <ProjectCard />
                <ProjectCard />
                <button onClick={doS}>abc</button> */}
            </motion.div>
        </div>
    )
}

export default Project;