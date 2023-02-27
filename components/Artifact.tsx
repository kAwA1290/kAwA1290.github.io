import React from 'react'

const Artifact = ({ link, imagePath, title, detail }) => {
   return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="border-2 border-stone-700 overflow-hidden w-full rounded-md">
         <img src={imagePath} className="w-full h-36 md:h-48 object-cover cursor-pointer"/>
         <div className="w-full p-4">
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">{title}</h3>
			<p className="text-sm max-w-xl">{detail}</p>
         </div>
      </a>
   )
}
export default Artifact;