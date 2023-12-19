import React from 'react'

const Personal = ({ username, profilePicture, languageProficiency, bio }) => {
  return (
   
   <div className="block p-8">
      <div className="flex items-center mb-8">
        <img
          src={profilePicture}
          alt={`${username}'s profile`}
          className="w-24 h-24 rounded mr-8 object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{username}</h1>
          <p className="text-gray-600">Language Proficiency: {languageProficiency}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed mb-6">{bio}</p>
      <div className=" pt-4 mb-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">Achievements</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Completed Beginner Level in Spanish</li>
          <li>Aced the Pronunciation Challenge</li>
          <li>Consistently in the Top 10% of Quizzes</li>
        </ul>
      </div>
      <div  className=" pt-4 mb-6">
      <h2 className="text-xl font-bold mb-2 text-gray-800">Results</h2>
      </div>
    </div>
  
  )
}

export default Personal