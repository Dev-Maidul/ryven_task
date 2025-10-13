import Image from 'next/image'
import React from 'react'
import google from '../../../public/Google.svg'
import aws from '../../../public/Frame (1).svg'
import Harvard from '../../../public/Frame (2).svg'
import Frame from '../../../public/Frame (3).svg'
import cisco from '../../../public/Frame.svg'

function Certification() {
  const certifications = [
    { id: 1, name: 'Google', icon: google },
    { id: 2, name: 'AWS', icon: aws },
    { id: 3, name: 'Harvard', icon: Harvard },
    { id: 4, name: 'Cisco', icon: cisco },
    { id: 5, name: 'Linux', icon: Frame },
  ]

  return (
    <section className="w-full max-w-[1062px] mx-auto border-l border-r border-dashed border-gray-600 px-4 sm:px-6 md:px-8 py-8">
      <div className="max-w-[720px] mx-auto text-center">
        {/* Introduction Text */}
        <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed mb-8">
          Frontend Developer with several years of experience as a <br className="hidden sm:block" />
          Freelancer. Multiple certifications. Passionate about traveling and <br className="hidden sm:block" />
          naturally curious. Currently, I am focused on becoming a great <br className="hidden sm:block" />
          leader and continuing to share.
        </p>

        {/* Certifications Section */}
        <div className="rounded-lg p-4 sm:p-6">
          <h3 className="text-white font-bold text-[18px] sm:text-[20px] uppercase tracking-wider mb-8 text-center">
            Certifications
          </h3>

          {/* Certifications Icons Grid */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-12">
            {certifications.map((cert) => (
              <div key={cert.id} className="relative group flex flex-col items-center">
                {/* Certification Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/5 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <Image
                    src={cert.icon}
                    alt={`${cert.name} certification`}
                    width={40}
                    height={40}
                    className="object-contain cursor-pointer" // Added cursor-pointer
                  />
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-8 sm:-bottom-9 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none">
                  <div className="text-white text-xs py-1 px-2 rounded bg-[#ff512f]/80 whitespace-nowrap">
                    {cert.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons Section */}
          <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-6">
            <button className="bg-[#FFFFFF] text-black px-5 sm:px-6 py-2 rounded-lg hover:bg-[#ff512f] hover:text-white transition-colors duration-300 flex items-center gap-2 cursor-pointer">
              See on LinkedIn
            </button>

            <button className="text-gray-200 px-5 sm:px-6 py-2 rounded-lg hover:bg-[#ff512f] hover:text-white transition-colors duration-300 flex items-center gap-2 cursor-pointer">
              GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certification