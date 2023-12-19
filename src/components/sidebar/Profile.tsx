import React from 'react';
import { Link } from 'react-router-dom';



const Profile: React.FC = () => {
  return (
    <div className='text-center'>
      <img className='w-[150px] md:w-[200px] rounded-full mx-auto' src="https://img.freepik.com/free-photo/fashion-little-boy_71767-95.jpg?size=626&ext=jpg&ga=GA1.2.1672022254.1678286335&semt=sph" alt="" />

        <h1 className='text-[20px]'>JohnDoe</h1>
     
    </div>
  );
};

export default Profile;