import React from 'react'

const Features = () => {
  return (
    <div className='flex items-center gap-3 space-x-4' >
      <div className="flex items-center space-x-4">
        <img src="/images/skills_Icons/figma_logo.png" alt="Figma" className="ml-3 w-8 h-8" />
        <span className="font-nanum text-[37.5px] font-bold">Figma</span>
      </div>
      <img src="/images/decoresImg/shining_star.png" alt="Star" className="w-6 h-6" />
      <div className="flex items-center space-x-4">
        <img src="/images/skills_Icons/xd_logo.png" alt="Adobe XD" className="w-8 h-8" />
        <span className="font-nanum text-[37.5px] font-bold">Adobe XD</span>
      </div>
      <img src="/images/decoresImg/shining_star.png" alt="Star" className="w-6 h-6" />
      <div className="flex items-center space-x-4">
        <img src="/images/skills_Icons/adove_logo.png" alt="Illustrator" className="w-8 h-8" />
        <span className="font-nanum text-[37.5px] font-bold">Adobe Illustrator</span>
      </div>
    </div>
  )
}

export default Features