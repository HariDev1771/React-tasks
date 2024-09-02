import React from 'react'

const Heading = (props) => {
  return (
    <div>
        <h1 className='text-6xl font-bold'>{props.head}</h1>
    </div>
  )
}

export default Heading