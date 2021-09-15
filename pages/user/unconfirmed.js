import Head from 'next/head';
import UnconfirmedOrders from '../../components/UserDashboard/MenuDetails/UnconfirmedOrders';
import Sidebar from '../../components/UserDashboard/Sidebar/Sidebar';
import styles from '../../styles/Profile.module.css';

export default function Unconfirmed() {
    return (
        <div>
            <Head>
                <title>Unconfirmed Orders</title>
            </Head>
            <div className={styles.gridContainer}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.main}>
                <UnconfirmedOrders />
            </div>
        </div>
        </div>
    )
}
