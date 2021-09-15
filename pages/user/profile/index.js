import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../../../containers/common/header'
import FooterSection from '../../layouts/sections/modern-sass/footer'
// import Copyright from './sections/modern-sass/copyright'
import BasicInfo from '../../../components/UserDashboard/MenuDetails/BasicInfo';
import Sidebar from '../../../components/UserDashboard/Sidebar/Sidebar';
import { Container, Row, Col } from 'reactstrap'
import styles from '../../../styles/Profile.module.css';



export default function Profile() {

    useEffect(() => {
        document.body.style.setProperty('--primary', '#fb3b64')
        document.body.style.setProperty('--secondary', '#071828')
        document.body.style.setProperty('--light', '#071828')
        document.body.style.setProperty('--dark', '#fb3b64')
    })



    return (
        <div>
            <Head>
                <title>User Profile</title>
            </Head>
            <Header className="saas1" />

            <Container style={{ paddingTop: '170px', paddingBottom: '100px' }}>
                <Row>
                    <Col xs={12} md={2}>
                        <Sidebar />
                    </Col>
                    <Col xs={12} md={10}>
                        <BasicInfo />
                    </Col>
                </Row>
            </Container>
            <FooterSection />
        </div>
    )
}


export async function getServerSideProps(ctx) {


    return {
        props: {

        }
    }
}