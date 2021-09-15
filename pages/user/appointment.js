import Head from 'next/head';
import Appointments from '../../components/UserDashboard/MenuDetails/Appointments';
import Sidebar from '../../components/UserDashboard/Sidebar/Sidebar';
import styles from '../../styles/Profile.module.css';

export default function Appointment() {
    return (
        <div>
            <Head>
                <title>User&apos;s Appointment</title>
            </Head>
            <div className={styles.gridContainer}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.main}>
                <Appointments />
            </div>
        </div>
        </div>
    )
}
