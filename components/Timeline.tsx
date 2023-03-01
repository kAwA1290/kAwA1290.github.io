import React from 'react'

const Timeline = ({ time, title, belong, belongColor, detail}) => {
	const belongClass = `inline-block px-2 py-1 font-bold text-stone-900 rounded-md max-w-max ${belongColor}`
	return (
		<ol className="flex flex-col relative border-l border-stone-700 justify-center items-left">
			<li className="mb-10 ml-4">
				<div className="absolute w-3 h-3 bg-stone-600 rounded-full mt-1.5 -left-1.5 border border-stone-800" />
					<div className="flex flex-wrap flex-col md:flex-row gap-4 items-left test-xs">
						<span className="inline-block px-2 py-1 font-bold text-stone-900 bg-stone-300 rounded-md max-w-max">{time}</span>
						<h3 className="inline-block text-lg font-semibold text-stone-150">{title}</h3>
						<span className={belongClass}>{belong}</span>
					</div>
				<p className="my-2 text-base text-stone-150">{detail}</p>
			</li>
		</ol>
	)
}

export default Timeline;
