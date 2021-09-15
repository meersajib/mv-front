import Image from 'next/image';
import Link from 'next/link';
import styles from './OrderSidebar.module.css';

export default function OrderSidebar() {
    return(
        <div style={{boxShadow: "var(--dk-box-shadow)", padding:'20px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h5>Your Orders</h5>
                <div style={{display:'flex'}}>
                    <h6>All</h6>
                    <h6>.</h6>
                </div>
            </div>
            <hr />
            <div className={styles.menu__list}>
                <ul>
                    <li>
                       {/* <Image src='/assets/images/icons/list.svg' height={16} width={16} alt='List' />  */}
                       <Link href="/user/profile"><a>orderId</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}