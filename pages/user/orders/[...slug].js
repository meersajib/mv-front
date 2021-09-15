import React, { useEffect } from 'react';
import nookies from 'nookies';
import styles from '../../../styles/OrderDetails.module.css';
import Sidebar from '../../../components/UserDashboard/Sidebar/Sidebar';

import { useRouter } from 'next/router';
import Head from 'next/head';

// Service file calling
import useSWR from 'swr'
import request from '../../../lib/request'


const OrderDetails = ({OrderDetails}) => {
    const router = useRouter()

    const { data , error } = useSWR(`order/view/customer/${router?.query?.slug[0]}/${router?.query?.slug[1]}`, { initialData: OrderDetails }, {refreshInterval: 1000});
    if(error){
        alert('Something went wrong!!!')
    }
    const order = data?.data;

    console.log('order',order)

    return (
        <div>
          <Head>
            <title>Dukaan | Order</title>
          </Head>
          <div className={styles.orderDetailsGrid}>
            <div className={styles.orderDetailsGridItem}>
              <div className={styles.box_shadow} style={{ padding: '30px'}}>
                <Sidebar />
              </div>
            </div>
            <div className={styles.orderDetailsGridItem}>
              <div className={styles.grid__container1}>
                <div className={styles.grid__item}>
                  <h5>Invoice: {order?.orderId}</h5>
                  <p>{order?.createdAt}</p>
                </div>
              </div>
              <div className={styles.grid__container2}>
                <div className={styles.box_shadow}>
                  <div className={styles.grid__item}>
                    <h6>Ordered From</h6>
                    <p>{order?.products[0].vendor.name}</p>
                  </div>
                </div>
                <div className={styles.box_shadow}>
                  <div className={styles.grid__item}>
                    <h6>Bills to</h6>
                    <div className={styles.display_flex}>
                      <p>image</p>
                      <div>
                        <p>{order?.customer._id}</p>
                        <p>{order?.customer.address}</p>
                        <p>{order?.customer.phone}</p>
                      </div>
                    </div>
                    <div className={styles.topMargin}>
                      <button className={styles.button_margin}>Cancel Order</button>
                      <button className={styles.button_margin}>Pay Now</button>
                    </div>
                  </div>  
                </div>
              </div>
              <div className={styles.grid__container1}>
                <div className={styles.grid__item}>
                  <h4>Product Description</h4>
                </div>
              </div>
              <div className={styles.box_shadow}>
              <div className={styles.grid__container3}>
                <div className={styles.grid__item}>
                  <p>Description</p>
                  <div className={styles.grid__container5}>
                    <div className={styles.grid__item}>
                      <p>image</p>
                    </div>
                    <div className={styles.grid__item}>
                      <p>description</p>
                    </div>
                  </div>
                </div>
                <div className={styles.grid__item}>
                  <p>Quantity</p>
                  <p>price X Q</p>
                </div>  
                <div className={styles.grid__item}>
                  <p>Amount</p>
                  <p>total</p>
                </div>
                <div className={styles.grid__item}>
                  <p>Status</p>
                  <p>Pending</p>
                </div>  
              </div>
            </div>
              <div className={styles.grid__container1}>
                <div className={styles.grid__item}>
                  <h4>Timeline</h4>
                </div>
                <div className={styles.box_shadow}>
                <div className={styles.grid__container4}>
                <div className={styles.grid__item}>
                  <p>Description</p>
                  <p>image</p>
                </div>
              </div>
              </div></div>
          </div>
          </div>
          </div>

    );
};

export default OrderDetails;

export async function getServerSideProps(ctx){
    const id = ctx.query;
    console.log('did',ctx?.query)
    const cookies = nookies.get(ctx)
    const OrderDetails = await request(`order/view/customer/${id[0]}/${id[1]}`,cookies?.token);

    return {
      props: {
        OrderDetails,
      }
    }
  }