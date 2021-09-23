import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../../containers/common/header'
import FooterSection from '../../pages/layouts/sections/modern-sass/footer'
import Sidebar from '../UserDashboard/Sidebar/Sidebar';



const CustomerLayout = ({ title, children }) => {
	useEffect(() => {
		document.body.style.setProperty('--primary', '#fb3b64')
		document.body.style.setProperty('--secondary', '#071828')
		document.body.style.setProperty('--light', '#071828')
		document.body.style.setProperty('--dark', '#fb3b64')
	})

	return (
		<div>
			<Head>
				<title>{title || 'User Profile'}</title>
			</Head>
			<Header className="saas1" />

			<div className={`container mx-auto row`} style={{ paddingTop: '170px', paddingBottom: '100px' }}>
				<div className='col-md-2 col-xm-12'>
					<Sidebar />
				</div>
				<div className='col-md-10 col-xm-12'>
					{children}
				</div>
			</div>
			<FooterSection />
		</div>
	)
}

export default CustomerLayout;

