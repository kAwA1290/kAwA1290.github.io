import React from 'react'
import github_picture from '../assets/images/github.png'

const Footer = () => {
	return (
		<div className="flex flex-col items-center bg-stone-800 mt-10">
			<a href="https://github.com/kAwA1290" target="_blank" rel="noopener noreferrer" className="overflow-hidden w-10 shadow-lg">
				<img src={github_picture.src} className="w-full w-10 cursor-pointer"/>
			</a>
		</div>
	)
}

export default Footer;

/*<img src={github_picture.src} className="w-full h-36 md:h-48 object-cover cursor-pointer"/>*/
