import React, { Fragment, useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link';
import { useContext } from 'react';
import { GlobalContext,GlobalUpdateContext } from '../contexts/globalContext';
import request from '../utils/request';
import { toast } from 'react-toastify';

const Header = () => {

	const [navbar, setNavbar] = useState(false);
	const { userName, isLoggedIn } = useContext(GlobalContext)
	const {setUserName, setIsLoggedIn} = useContext(GlobalUpdateContext)
	const toggleNav = () => {
		setNavbar(!navbar)
	}

	const logout= async (e)=>{
		e.preventDefault();
		try {
			const response = await request('/user/logout',{method:'POST'});
			if(response){
				setIsLoggedIn(false)
				setUserName('')
				toast.success('Logged out!', {autoClose:1000,pauseOnHover: false,});
			}
		} catch (error) {
			toast.error('Something went wrong',{autoClose:1000})
		}
	}
	return (

		<Fragment>
			<header>
				<Container fluid={true}>
					<Row>
						<Col>
							<div className="top-header">
								<div className="logo">
									<a className="navbar-brand" href="#"><img src="assets/images/landing/logo.png"
										alt="logo" /></a>
								</div>
								<div className="main-menu m-x-auto" id="nav">
									<nav id="navbar-example2" className="navbar navbar-expand-lg navbar-light">
										<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#scroll-spy"
											aria-controls="scroll-spy" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNav}>
											<span className="navbar-toggler-icon"></span>
										</button>
										<div className={`collapse navbar-collapse ${navbar === true ? 'show' : ''}`} id="scroll-spy">
											<ul className="navbar-nav mx-auto nav">
												<li className="nav-item">
													<a className="nav-link active" href="#home">Home</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="#pages">pages</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="#portfolio">portfolio</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="#feature">features</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="https://pixelstrap.freshdesk.com">support</a>
												</li>
												{!isLoggedIn ?
													<>
														<li className="nav-item">
															<Link href='/login'>
																<a className="nav-link">login</a>
															</Link>
														</li>
														<li className="nav-item">
															<Link href='/signup'>
																<a className="nav-link">signup</a>
															</Link>
														</li>
													</>
													:
													<li className="nav-item">
														<a className="nav-link" onClick={(e)=>logout(e)}>logout</a>
												</li>
												}
											</ul>
										</div>
									</nav>
								</div>

								<div className="purchase-block">
									<span className="purchase-btn">{userName}</span>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</header>

		</Fragment>
	)
}

export default Header;