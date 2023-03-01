import React from 'react'
import Intro from '../components/Introduction'
import Career from '../components/Career'
import Works from '../components/Works'
import Footer from '../components/Footer'

const IndexPage = () => (
	<div className="bg-stone-900 text-stone-300 h-full min-h-screen">
		<div className="max-w-7xl mx-auto">
			<Intro />
			<Career />
			<Works />
		</div>
		<Footer />
	</div>
)

export default IndexPage
