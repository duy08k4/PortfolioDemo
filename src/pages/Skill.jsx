import '../styles/Skill.css'

import myData from '../firebase_setup/data';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Skill() {
    const [skillsName, setSkillsName] = useState([])
    const [skillsImg, setSkillsImg] = useState([])

    useEffect(() => {
        let getSkillName = (new myData()).getNameSkill()
        let getSkillImg = (new myData()).getImgSkill()

        getSkillName.then((data) => setSkillsName(data))
        getSkillImg.then((data) => setSkillsImg(data))
    }, [])

    return (
        <div className='skill'>
            <div className='noSelect skillHeader'>
                <h3 className='skillHeader_content'>
                    <i className="fas fa-layer-group"></i>
                    technical skills
                </h3>
            </div>

            <motion.div 
                className='listTech'
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.8 }}
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
                {
                    skillsName && skillsName.length > 0
                    ? 
                        skillsName.map((name, index) => {
                            return  <div key={index} className='noSelect aTech'>
                                        <img src={skillsImg[index]} alt="Avatar for skill" loading='lazy' />
                                        <h4 className='aTechName'>{name}</h4>
                                    </div>
                        }) 
                    : ""
                }
            </motion.div>
        </div>
    )
}

export default Skill;