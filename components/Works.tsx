import React from 'react'
import Artifact from './Artifact'
import picture from '../assets/images/code.png'

const Works = () => {
	return (
		<div className="flex flex-col items-center my-5">
			<p className="text-3xl text-stone-150 font-semibold mb-5">Works</p>
			<div className="flex flex-row items-left space-x-4 w-1/2">
				<Artifact link="https://github.com/kAwA1290/AirMouse" imagePath={picture.src} title="AirMouse" detail="Mediapipeを用いて、あなたの手をマウスとしてコンピュータを操作します。"/>
				<Artifact link="google.com" imagePath={picture.src} title="hello" detail="none"/>
				<Artifact link="google.com" imagePath={picture.src} title="hello" detail="none"/>
			</div>
		</div>
	)
}

export default Works;
