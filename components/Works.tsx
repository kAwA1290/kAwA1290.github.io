import React from 'react'
import Artifact from './Artifact'
import picture from '../assets/images/code.png'

const Works = () => {
	return (
		<div className="flex flex-col items-center my-5">
			<p className="text-3xl text-stone-150 font-semibold mb-5">Works</p>
			<div className="flex flex-col md:flex-row items-left space-x-1 w-1/2">
				<Artifact link="https://github.com/kAwA1290/AirMouse" imagePath={picture.src} title="AirMouse" detail="非接触で未来的なマウスはあなたの手です。"/>
				<Artifact link="https://github.com/kAwA1290/myclib" imagePath={picture.src} title="myclib" detail="BSD Manualに準拠しています。(一部を除く)"/>
			</div>
		</div>
	)
}

export default Works;

//<Artifact link="google.com" imagePath={picture.src} title="hello" detail="none"/>
