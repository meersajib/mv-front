import styles from '../../../styles/Table.module.css';

export default function Addresses() {
    return (
        <div>
            <h5 style={{ marginBottom: '15px'}}>Addresses</h5>
            <table className={styles.customers}>
                <tr>
                    <th>Full Name</th>
                    <th>Address</th>
                    <th>Region</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                    <th>Primary</th>
                </tr>
                <tr>
                    <td>Md. Shahid-ul Islam</td>
                    <td>Uttar Khan, Dhaka-1230.</td>
                    <td>Dhaka-North</td>
                    <td>+8801872118669</td>
                    <td>...</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>Md. Shahid-ul Islam</td>
                    <td>Uttar Khan, Dhaka-1230.</td>
                    <td>Dhaka-North</td>
                    <td>+8801872118669</td>
                    <td>...</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>Md. Shahid-ul Islam</td>
                    <td>Uttar Khan, Dhaka-1230.</td>
                    <td>Dhaka-North</td>
                    <td>+8801872118669</td>
                    <td>...</td>
                    <td>...</td>
                </tr>
            </table>
        </div>
    )
}