import React from 'react'
import award from '../../../public/Awards.png'
import award1 from '../../../public/Awards (1).png'
import award2 from '../../../public/Awards (2).png'
import Image from 'next/image'

function Awards() {
  return (
    <div className="max-w-[1062px] mx-auto border-l border-r border-dashed border-gray-600 p-6 sm:p-8">
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 w-full mx-auto mt-4">
        <div className="w-24 sm:w-28 md:w-32 lg:w-40">
          <Image
            src={award}
            alt="award"
            className="object-contain w-full h-auto"
            priority
          />
        </div>
        <div className="w-24 sm:w-28 md:w-32 lg:w-40">
          <Image
            src={award1}
            alt="award"
            className="object-contain w-full h-auto"
            priority
          />
        </div>
        <div className="w-24 sm:w-28 md:w-32 lg:w-40">
          <Image
            src={award2}
            alt="award"
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Awards
