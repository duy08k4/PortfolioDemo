import '../styles/ContainerProfile.css'
import '../index.css'

import React from 'react'

// import Navbar from './Navbar'
import ProfileCard from './ProfileCard'

function ContainerProfile() {
    return (
        <div className='containerProfile'>
            {/* <Navbar /> */}
            <ProfileCard />
        </div>
    )
}

export default ContainerProfile;