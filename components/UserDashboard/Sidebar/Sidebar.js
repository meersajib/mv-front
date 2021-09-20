// import Image from 'next/image';
import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <div>
            <img src="/assets/images/user-dashboard/user.png" height="100px" width="100px" alt='User Profile' />
            <h3>User name</h3>
            {/* <h6>Mobile Number</h6> */}
            {/* <button className={styles.accButton}>Check Account</button> */}
            <hr />
            <div className={styles.menu__list}>
                <ul>
                    <li>
                        {/* <Image src='/assets/images/icons/list.svg' height={16} width={16} alt='List' />  */}
                        <Link href="/user/profile"><a>Basic Information</a></Link>
                    </li>
                    <li>
                        <Link href="/user/address"><a>Addresses</a></Link>
                    </li>
                    <li>
                        <Link href="/user/orders"><a>Orders</a></Link>
                    </li>
                    <li>
                        <Link href="/user/unconfirmed"><a>Unconfirmed Orders</a></Link>
                    </li>
                    <li>
                        <Link href="/user/reviews"><a>Reviews</a></Link>
                    </li>
                    <li>
                        <Link href="/user/refund"><a>Refund Settlements</a></Link>
                    </li>
                    <li>
                        <Link href="/user/changepassword"><a>Change Password</a></Link>
                    </li>
                    <li>
                        <Link href="/user/appointment"><a>Appointment</a></Link>
                    </li>
                    <li>
                        <Link href="/user/transactions"><a>Transactions</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}