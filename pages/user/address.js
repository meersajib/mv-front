import Head from 'next/head';
import Addresses from '../../components/UserDashboard/MenuDetails/Addresses';
import Sidebar from '../../components/UserDashboard/Sidebar/Sidebar';
import styles from '../../styles/Profile.module.css';

export default function Address() {
    return (
        <div>
            <Head>
                <title>User&apos;s Address</title>
            </Head>
            <div className={styles.gridContainer}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.main}>
                <Addresses />
            </div>
        </div>
        </div>
    )
}
