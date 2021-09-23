import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../../../containers/common/header'
import FooterSection from '../../layouts/sections/modern-sass/footer'
// import Copyright from './sections/modern-sass/copyright'
import BasicInfo from '../../../components/UserDashboard/MenuDetails/BasicInfo';
import Sidebar from '../../../components/UserDashboard/Sidebar/Sidebar';
import { Container, Row, Col } from 'reactstrap'
import styles from '../../../styles/Profile.module.css';
import request from '../../../utils/request';
import { getProfile } from '../../../services/auth.service';
import CustomerLayout from '../../../components/UserDashboard/CustomerLayout';


export default function Profile() {
	return (
		<CustomerLayout title="User Profile">
			<BasicInfo />
		</CustomerLayout>
	)
}


export async function getServerSideProps(context) {
	let user = {}
	try {
		user = await getProfile(context);
	} catch (error) {
		console.log('user not found');
	}

	return {
		props: {
			user: user || {}
		}
	}
}