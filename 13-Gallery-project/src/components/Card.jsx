import React from 'react'

const Card = ({ elem }) => {
  return (
    <a href={elem.url} target='_blank' rel='noopener noreferrer'>
      <div className="m-2">
        <img
          src={elem.download_url}
          alt={elem.author}
          className="w-40 h-40 object-cover rounded"
        />
        <h2 className='text-gray-400'>{elem.author}</h2>
      </div>
    </a>
  )
}

export default Card
