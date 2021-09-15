import Head from 'next/head';
import Review from '../../components/UserDashboard/MenuDetails/Review';
import Sidebar from '../../components/UserDashboard/Sidebar/Sidebar';
import styles from '../../styles/Profile.module.css';

export default function Reviews() {
    return (
        <div>
            <Head>
                <title>Reviews</title>
            </Head>
            <div className={styles.gridContainer}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.main}>
                <Review />
            </div>
        </div>
        </div>
    )
}
