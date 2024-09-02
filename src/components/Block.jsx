import React from 'react'
import Heading from './Heading'
import Para from './Para'
import Image from './Image'

const Block = () => {
  return (
    <div className='flex flex-col gap-5'>
        <Heading/>
        <Para/>
        <Image/>
    </div>
  )
}

export default Block