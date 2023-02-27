import React from 'react'
import Intro from '../components/Introduction'
import Career from '../components/Career'
import Works from '../components/Works'
import Footer from '../components/Footer'

const IndexPage = () => (
	<div className='bg-stone-900 text-stone-300 h-full font-inter'>
		<Intro />
		<Career />
		<Works />
		<Footer />
	</div>
)

export default IndexPage
