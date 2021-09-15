import Head from 'next/head';
import Order from '../../../components/UserDashboard/MenuDetails/Order';
import Sidebar from '../../../components/UserDashboard/Sidebar/Sidebar';
import nookies from 'nookies'
import jwt_decode from "jwt-decode";
import styles from '../../../styles/Profile.module.css';

// Service file calling
import useSWR from 'swr'
import request from '../../../lib/request'

export default function Orders({userId,orders}) {

    const { data , error } = useSWR(`order/view/customer/${userId}`, { initialData: orders }, {refreshInterval: 1000});
    if(error){
        alert('Something went wrong!!!')
    }
    const orderList = data?.data;

    return (
        <div>
            <Head>
                <title>Orders</title>
            </Head>
            <div className={styles.gridContainer}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.main}>
                <Order orders={orderList} userId={userId} />
            </div>
        </div>
        </div>
    )
}

export async function getServerSideProps(ctx){
    const cookies = nookies.get(ctx)
    let token = jwt_decode(cookies?.token)
    // let token = jwt_decode(cookies?.token)
    const userId = token?.data?._id;
    const orders = await request(`order/view/customer/${userId}`,cookies?.token);

    return {
      props: {
        orders,
        userId,
      }
    }
  }