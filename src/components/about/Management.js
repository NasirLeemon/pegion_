import React from 'react'
import Profile from './profile/Profile'
import './profile/profile.css'

const Management = () => {
  const profileData = [
    { 
      id: 1,
      title: 'Chairman',
      image: '/images/profile/chairman1.avif',
      name: 'Name of The Chairman',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor olor sit amet consectetur adipisicing elit mollitia, Lorem ipsum dolor sit'
    },
    {
      id: 2,
      title: 'CEO',
      image: '/images/profile/chairman2.avif',
      name: 'Name of The Chairman',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor olor sit amet consectetur adipisicing elit mollitia, Lorem ipsum dolor sit'
    },
    {
      id: 3,
      title: 'Director',
      image: '/images/profile/istockphoto-1407714040-170667a.jpg',
      name: 'Name of The Chairman',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor olor sit amet consectetur adipisicing elit mollitia, Lorem ipsum dolor sit'
    }]
  return (
    <div className='managementMain'>
      {
        profileData.map(profile => <Profile key={profile?.id} profile={profile} />)
      }
    </div>
  )
}

export default Management