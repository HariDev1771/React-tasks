import React from 'react'
import Heading from './Heading'
import Para from './Para'
import Image from './Image'

const Block = () => {
  return (
    <div className='flex flex-col gap-5'>
        <Heading head="React heading"/>
        <Para paragraph="This is the paragraph that is added 2 using prop"/> 
        <Image pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbK28OUrr0P4u9gEvtysKnpWE8F5z4pJrFw&s'/>
    </div>
  )
}

export default Block