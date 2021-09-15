import Link from 'next/link'
import NotFound from '../../NotFound/ItemNotFound'
import styles from '../../../styles/Table.module.css'

export default function Order(props) {

    const { orders, userId } = props;

    return (
        <div>
            <h5 style={{ marginBottom: '15px'}}>Orders</h5>
            {orders?.length ? <table className={styles.customers}>
                <tr>
                    <th>Order</th>
                    <th>Order Date</th>
                    <th>Amount</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th>  </th>
                </tr>
                {orders?.map((order) => 
                <tr key={order?.orderId}>
                    <td>
                        <Link href={`/user/orders/${userId}/${order?.orderId}`}>
                        <a>
                        {order?.orderId}
                        </a>
                        </Link>
                    </td>
                    <td>{order?.createdAt}</td>
                    <td>BDT {order?.totalBill}</td>
                    <td>{order?.paymentStatus == 0 ? `pending` : order?.paymentStatus == 1 ? `paid` : order?.paymentStatus == 2 ? `refund` : `cancelled`}</td>
                    <td>{order?.state == 0 ? `Pending` :
                        order?.state == 1 ? `Processing` : 
                        order?.state == 2 ? `Send for delivery` :
                        order?.state == 3 ? `Delivered` :
                        order?.state == 4 ? `Returned` :
                        order?.state == 5 ? `Sold from physical store` :
                        `Cancelled`
                    }</td>
                    <td>..</td>
                </tr>
                ) 

                }
            </table> :
            <NotFound message='No Orders Found!!!' />
            }
        </div>
    )
}