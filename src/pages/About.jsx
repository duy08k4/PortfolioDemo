import '../styles/About.css'

import { motion } from 'framer-motion';

function About(props) {

    return (
        <motion.div 
            className='about'
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.3 }}
        >
            <motion.div 
                className='infomationBox'
                variants={{
                    offscreen: {
                        opacity: 0.2,
                        transition: {
                            duration: 0.5
                        }
                    },
                    onscreen: {
                        opacity: 1,
                        transition: {
                            duration: 0.5
                        }
                    },
                }}
            >
                <h4 className='noSelect greeting'>Hi, I'm <p>{props.basicData.major}</p></h4>
                <h1 className='noSelect levelMajor'>{props.basicData.level}</h1>
                <p className='noSelect introduce'>{props.basicData.myIntro}</p>

                <div className='direct'>
                    <a href={props.basicData.mycv} className='directButton directCV' target='_blank' rel='noopener noreferrer'><i className="far fa-share-square"></i> my cv</a>
                    <a href="#project" className='directButton directProject'>my projects</a>
                </div>
            </motion.div>

            <motion.div 
                className='noSelect imgBox'
                variants={{
                    offscreen: {
                        opacity: 0.2,
                        transition: {
                            duration: 0.5
                        }
                    },
                    onscreen: {
                        opacity: 1,
                        transition: {
                            duration: 0.5
                        }
                    },
                }}
            >
                <img src={require("../assets/about_img.png")} alt="" />
            </motion.div>
        </motion.div>
    )
}

export default About;