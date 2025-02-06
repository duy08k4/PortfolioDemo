import '../styles/Content.css'

import { useState, useEffect } from 'react';

import About from '../pages/About';
import Skill from '../pages/Skill';
import Project from '../pages/Project';

import myData from '../firebase_setup/data';

function Content() {
    const [basicData, setBasicData] = useState("")

    useEffect(() => {
        const data = new myData()
        data.getBasicData().then((data) => {
            setBasicData(data)
        })
    }, [])

    return (
        <div className="content">
            <About basicData={basicData} />
            <Skill />
            <Project />
        </div>
    )
}

export default Content;