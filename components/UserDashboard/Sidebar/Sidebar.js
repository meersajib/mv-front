import Link from 'next/link';
import styles from './Sidebar.module.css';
import { GlobalContext } from '../../../contexts/globalContext'
import { useContext } from 'react';
import {useRouter} from 'next/router';
export default function Sidebar() {
	const router = useRouter();
	const {pathname} = router;

	const { userInfo } = useContext(GlobalContext)

	const links = [
		{ href: '/user/profile', title: 'Basic Information' },
		{ href: '/user/change-password', title: 'Change Password' },
		{ href: '/user/address', title: 'Addresses' },
		{ href: '/user/orders', title: 'Orders' },
		{ href: '/user/unconfirmed', title: 'Unconfirmed Orders' },
		{ href: '/user/reviews', title: 'Reviews' },
		{ href: '/user/refund', title: 'Refund Settlements' },
		{ href: '/user/appointment', title: 'Appointment' },
		{ href: '/user/transactions', title: 'Transactions' },
	]
	return (
		<div>
			<div className='text-center'>
			<img src="/assets/images/user-dashboard/user.png" height="100px" width="100px" alt='User Profile' />
			<h4>{userInfo?.name || userInfo?.email || userInfo?.phone || 'Hello'}</h4>
			</div>
			<hr />
			<div className={styles.menu__list}>
				<ul className={`list-unstyled list-group`}>
					{
						links?.map((link, index) => (
							<li key={index} className={`mb-2`}>
								<Link href={link?.href}><a className={`text-uppercase text-decoration-none ${pathname==link?.href ? 'text-primary' : ''}`}>{link?.title}</a></Link>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	)
}