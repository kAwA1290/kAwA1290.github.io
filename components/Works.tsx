import React from 'react'
import Artifact from './Artifact'
import demo_gif from '../assets/images/demo.gif'
import nengajo_picture from '../assets/images/nengajo.png'
import clib_picture from '../assets/images/clib.png'

const Works = () => {
	return (
		<div className="flex flex-auto flex-col items-center my-5">
			<p className="text-3xl text-stone-150 font-semibold mb-5">Works</p>
			<div className="flex flex-col md:flex-row items-stretch w-1/2">
				<Artifact link="https://github.com/kAwA1290/AirMouse" imagePath={demo_gif.src} title="AirMouse" detail="非接触で未来的なマウスはあなたの手です。"/>
				<Artifact link="https://github.com/kAwA1290/myclib" imagePath={clib_picture.src} title="Myclib" detail="BSD Manualに準拠しています。(一部を除く)"/>

				<Artifact link="https://github.com/kAwA1290/nengajo" imagePath={nengajo_picture.src} title="Nengajo" detail="Esolangで年賀状を書く。"/>
			</div>
		</div>
	)
}

export default Works;
