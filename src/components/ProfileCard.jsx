import { useEffect, useState } from 'react'
import '../styles/ProfileCard.css'

import myData from '../firebase_setup/data'

function ProfileCard() {
    const [basicData, setBasicData] = useState("")
    const [socialData, setSocialData] = useState("")

    useEffect(() => {
        const data = new myData()
        data.getBasicData().then((data) => {
            setBasicData(data)
        })

        data.getSocialData().then((data) => {
            setSocialData(data)
        })
    }, [])

    return (
        <div className='profileCard'>
            <div className='avatar'>
                <img src={basicData.avatar} alt="My Avatar" />
            </div>

            <div className='info'>
                <h5 className='noSelect myMajor'>{basicData.major}</h5>
                <h2 className='noSelect myName'>{basicData.name}</h2>
            </div>

            <div className='contact'>
                <a href={socialData.facebook} className='contactMethod' target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href={socialData.github} className='contactMethod' target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href={socialData.tiktok} className='contactMethod' target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
            </div>
        </div>
    )
}

export default ProfileCard