import React from 'react'

const Card = ({props}) => {
  const {titulo, imagen, precio} = props;

  return (
    <div className='shadow-2xl border border-black p-2 rounded-lg'>
      <img src={imagen} className='rounded-lg w-72' alt="" />
      <h3 className='font-bold'>{titulo}</h3>
      <h5>${precio}</h5>
    </div>
  )
}

export default Card
