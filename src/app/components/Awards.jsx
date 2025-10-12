import React from 'react'
import award from '../../../public/Awards.png'
import award1 from '../../../public/Awards (1).png'
import award2 from '../../../public/Awards (2).png'
import Image from 'next/image'
function Awards() {
  return (
    <div className='w-[1062px] mx-auto border-l border-r border-dashed border-gray-600 p-8'>
        <div className='flex gap-4 w-[861px] mx-auto px-4 mt-4 h-[106px] '>
        <Image src={award} alt="award"></Image>
        <Image src={award1} alt="award"></Image>
        <Image src={award2} alt="award"></Image>
    </div>
    </div>
  )
}

export default Awards