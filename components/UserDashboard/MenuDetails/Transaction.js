import styles from '../../../styles/Transactions.module.css';
import nookies from 'nookies';
import jwt_decode from "jwt-decode";

import useSWR from 'swr';
import request from '../../../lib/request';

export default function Transaction({data}) {
    console.log(data);
    return (
        <div>
            <div style={{display:"flex", justifyContent: "space-around"}}>
                <div className={styles.card}>
                    <div className={styles.container}>
                        <p>Account</p> 
                        <h4>৳ 100.00</h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.container}>
                        <p>Holding Balance</p> 
                        <h4>৳ 100.00</h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.container}>
                        <p>Giftcard Balance</p> 
                        <h4>৳ 100.00</h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.container}>
                        <p>Cashback Balance</p> 
                        <h4>৳ 100.00</h4>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'left', marginTop: '30px'}}>
                <h5>Transaction History</h5>
                <div style={{padding: '10px'}}>
                    <div className={styles.card}>
                        <div className={styles.container} style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{ display: 'flex' }}>
                                <p>Image</p>
                                <div>
                                    <h6>product description</h6>
                                    <p>product purchase time</p>
                                </div>
                            </div>
                            <div>
                                <h5>Price</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}