import Head from 'next/head';
import Refunds from '../../components/UserDashboard/MenuDetails/Refunds';
import Sidebar from '../../components/UserDashboard/Sidebar/Sidebar';
import styles from '../../styles/Profile.module.css';

export default function Refund() {
    return (
        <div>
            <Head>
                <title>Refund Statement</title>
            </Head>
            <div className={styles.gridContainer}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.main}>
                <Refunds />
            </div>
        </div>
        </div>
    )
}
