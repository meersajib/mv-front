import Head from 'next/head';
import Transaction from '../../components/UserDashboard/MenuDetails/Transaction';
import Sidebar from '../../components/UserDashboard/Sidebar/Sidebar';
import nookies from 'nookies'
import jwt_decode from "jwt-decode";
import styles from '../../styles/Profile.module.css';


import useSWR from 'swr'
import request from '../../lib/request'

export default function Transactions({userId,transaction}) {
    // console.log('transaction',transaction.data);
    return (
        <div>
            <Head>
                <title>Dukaan | Online Shopping Mall | User&apos;s transactions</title>
            </Head>
            <div className={styles.gridContainer}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.main}>
                <Transaction data={transaction.data} />
            </div>
        </div>
        </div>
    )
}

export async function getServerSideProps(ctx){
    const cookies = nookies.get(ctx)
    let token = jwt_decode(cookies?.token)
    const userId = token?.data?._id;
    const transaction = await request(`order/transaction/${userId}`)

    return {
      props: {
        userId,
        transaction,
        
      }
    }
  }
