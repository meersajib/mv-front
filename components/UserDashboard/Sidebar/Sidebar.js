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
		{ href: '/user/profile', title: 'My Profile' },
		{ href: '/user/change-password', title: 'Change Password' },
		{ href: '#', title: 'My Affiliated Product' },
		{ href: '#', title: 'My Orders' },
		{ href: '#', title: 'My Points' }
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