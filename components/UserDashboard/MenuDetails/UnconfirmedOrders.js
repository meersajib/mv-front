import styles from '../../../styles/Table.module.css';

export default function UnconfirmedOrders() {
    return (
        <div>
            <h5 style={{ marginBottom: '15px'}}>Unconfirmed Orders</h5>
            <table className={styles.customers}>
                <tr>
                    <th>Order</th>
                    <th>Order Date</th>
                    <th>Amount</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th>  </th>
                </tr>
                <tr>
                    <td>DKN1234567</td>
                    <td>01 Apr, 2021</td>
                    <td>BDT 1550.05</td>
                    <td>Paid</td>
                    <td>Delievered</td>
                    <td>..</td>
                </tr>
                <tr>
                    <td>DKN1234477</td>
                    <td>01 Apr, 2021</td>
                    <td>BDT 1320</td>
                    <td>Paid</td>
                    <td>Delivered</td>
                    <td>..</td>
                </tr>
                <tr>
                    <td>DKN1237557</td>
                    <td>01 Apr, 2021</td>
                    <td>BDT 1100</td>
                    <td>Paid</td>
                    <td>Delievered</td>
                    <td>..</td>
                </tr>
            </table>
        </div>
    )
}