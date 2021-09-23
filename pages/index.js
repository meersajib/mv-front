import React, { useEffect } from 'react'

// import Custom Components
import BannerSection from './layouts/sections/modern-sass/banner'
import FeatureSection from './layouts/sections/modern-sass/feature'
import BuildSection from './layouts/sections/modern-sass/build'
import WorkSection from './layouts/sections/modern-sass/work'
import PriceSection from './layouts/sections/modern-sass/price'

import TestimonialSection from './layouts/sections/modern-sass/testimonial'
import SubscribeSection from './layouts/sections/modern-sass/subscribe'
import FaqSection from './layouts/sections/modern-sass/faq'
import ClientSection from './layouts/sections/modern-sass/client'
import ModernSassLayout from '../components/Layouts/modern-sass'

const Home = () => {

	useEffect(() => {
		document.body.style.setProperty('--primary', '#fb3b64')
		document.body.style.setProperty('--secondary', '#071828')
		document.body.style.setProperty('--light', '#071828')
		document.body.style.setProperty('--dark', '#fb3b64')
	})

	return (
		<ModernSassLayout >
			<BannerSection />

			<FeatureSection />

			<BuildSection />

			<WorkSection />

			<PriceSection />

			<TestimonialSection />

			<SubscribeSection />

			<FaqSection />

			<ClientSection />
		</ModernSassLayout>
	)
}

export default Home;