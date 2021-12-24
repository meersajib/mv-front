import React, { useState, useEffect , useContext} from 'react';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import getConfig from 'next/config'
import { ToastContainer } from 'react-toastify';

import 'bootstrap-scss';
import '../public/assets/scss/flaticon.scss';
import '../public/assets/scss/font-awesome.scss';
import "../public/assets/scss/color-1.scss"
import '../public/assets/scss/themify.scss';
import "../public/assets/scss/slick.scss";
import "../public/assets/scss/slick-theme.scss";
import Customizer from '../containers/customizer';
import 'react-toastify/dist/ReactToastify.css';
import GlobalContextProvider from '../contexts/globalContext';

import { parseCookies } from 'nookies';
import axios from 'axios';
import { GlobalUpdateContext } from '../contexts/globalContext';
import request from '../utils/request';

const { publicRuntimeConfig = {} } = getConfig() || {};

NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

Router.onRouteChangeStart = () => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

function MyFunctionComponent({ children }) {
	const [loader, setLoader] = useState(true)
	const [goingUp, setGoingUp] = useState(false)

	const {setUserInfo, setIsLoggedIn} = useContext(GlobalUpdateContext)

	useEffect(() => {
		async function fetchProfile() {
      let user = await request('/user/profile');
			console.log('user found in appjs ',user);
			if(user){
				setUserInfo(user)
				setIsLoggedIn(true)
			}
    }
    fetchProfile()
	}, [])

	useEffect(() => {
		// Page Loader
		setTimeout(() => {
			setLoader(false)
		}, 1500)

		// Tap to Top Scroll 
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > 500)
				setGoingUp(true);
			else
				setGoingUp(false);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, [goingUp]);

	const tapToTop = () => {
		window.scrollTo({
			behavior: "smooth",
			top: 0
		});
	}

	return (
		<>
			<Head>
				<title>Unice</title>
			</Head>
			{loader &&
				<div className="loader-wrapper">
					<div className="loader">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>}
			<>{children}</>
			<div className="tap-top" style={goingUp ? { display: 'block' } : { display: 'none' }} onClick={tapToTop}>
				<div><i className="fa fa-angle-double-up"></i></div>
			</div>
		</>
	)
}

export default function MyApp({ Component, pageProps, graphql }) {
	const cookies = parseCookies(null);
	cookies?.PILOT_AUTH && (axios.defaults.headers.common['Authorization'] = `Bearer ${cookies?.PILOT_AUTH}`);

	return (
		<div>
			<GlobalContextProvider>
				<MyFunctionComponent>
					<Component {...pageProps} />
					{/* <Customizer /> */}
				</MyFunctionComponent>
				<ToastContainer />
			</GlobalContextProvider>
		</div>
	)
}