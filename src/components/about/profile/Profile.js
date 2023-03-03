import React from 'react'
import './profile.css'

const Profile = ({profile}) => {
  return (
    <div className='profileMain'>
        <div className='profileTitle'>
            <h1>{profile?.title}</h1>
        </div>
        <div className='profileImageDiv'>
            <img className='profileImg' src={profile?.image} alt='' />
        </div>
        <div className='profileDescription'>
            <div><h1>{profile?.name}</h1></div>
            <div><h5>{profile?.description}</h5></div>
            
            
        </div>
    </div>
  )
}

export default Profile