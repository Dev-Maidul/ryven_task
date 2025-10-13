import Image from 'next/image'
import React from 'react'
import google from '../../../public/Google.svg'
import aws from '../../../public/Frame (1).svg'
import Harvard from '../../../public/Frame (2).svg'
import Frame from '../../../public/Frame (3).svg'
import cisco from '../../../public/Frame.svg'
import globe from '../../../public/globe.svg'
import linkdin from '../../../public/Harvard.svg'

function Certification() {
  const certifications = [
    { id: 1, name: 'Google', icon: google },
    { id: 2, name: 'AWS', icon: aws },
    { id: 3, name: 'Harvard', icon: Harvard },
    { id: 4, name: 'Cisco', icon: cisco },
    { id: 5, name: 'Linux', icon: Frame },
  ]

  return (
    <div className='w-[1062px] mx-auto border-l border-r border-dashed border-gray-600 p-8'>
        <div className="w-[720px] mx-auto px-4  text-center ">
      {/* Introduction Text */}
      <p className="text-white text-[20px] leading-relaxed mb-8">
        Frontend Developer with several years of experience as a <br /> Freelancer. 
        Multiple certifications. Passionate about traveling and <br /> naturally curious. 
        Currently, I am focused on becoming a great <br /> leader and continuing to share.
      </p>
      
      {/* Certifications Section */}
      <div className="rounded-lg p-6">
        <h3 className="text-white font-bold text-[20px] uppercase tracking-wider mb-8 text-center">
          Certifications
        </h3>
        
        {/* Certifications Icons Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {certifications.map((cert) => (
            <div key={cert.id} className="relative group flex flex-col items-center">
              {/* Certification Icon */}
              <div className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <Image 
                  src={cert.icon} 
                  alt={`${cert.name} certification`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              
              {/* Tooltip */}
              <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="  text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                  {cert.name}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Buttons Section */}
        <div className="flex justify-center items-center flex-wrap gap-6">
          <button className="bg-[#FFFFFF] text-black px-6 py-2 rounded-lg hover:bg-[#ff512f] hover:text-white transition-colors duration-300 flex items-center gap-2 cursor-pointer">
            See on LinkedIn
          </button>
          
          <button className=" text-gray-200 px-6 py-2 rounded-lg hover:bg-[#ff512f] hover:text-white transition-colors duration-300 flex items-center gap-2 cursor-pointer">

            GitHub
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Certification
