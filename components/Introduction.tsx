import React from 'react';

const Intro = () => {
	return (
		<div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
			<h1 className="text-5xl md:text-7xl text-stone-150 font-bold mb-1 decoration-dashed">KAWAI Shozo</h1>
			<p className="text-base md:text-1xl text-stone-150 font-bold mb-10">Student of Kosen AND 42Tokyo.</p>
			<p className="text-3xl text-stone-150 font-semibold mb-3">Whoami</p>
			<div className="text-base text-stone-150 w-2/3 md:w-2/5">
				<p>高専と42Tokyo Cursusに在学し、情報技術を学んでいます。</p>
				<p>低レイヤーとセキュリティに興味があります。</p>
			</div>
			<p className="text-sm max-w-xl">
				
			</p>
		</div>
	)
}

export default Intro;
