import React from 'react'

const UserProfile = () => {
  return (
    <div className='flex justify-between mb-4' style={{minHeight:'77vh'}} >
      <ul className='lg:block hidden'>
        <li className='mb-1 p-2 px-11 hover:bg-teal-400 rounded-md'>DashBoard</li>
        <li className='mb-1 p-2 px-11 hover:bg-teal-400 rounded-md whitespace-nowrap'>Complate Kyc</li>
        <li className='mb-1 p-2 px-11 hover:bg-teal-400 rounded-md whitespace-nowrap'>Account Setting</li>
        <li className='mb-1 p-2 px-11 hover:bg-teal-400 rounded-md'>Logout</li>
      </ul>
      <div className='w-full bg-gray-500/25 rounded-xl mr-10'>
        <div></div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile