import Head from 'next/head'
import { Fragment } from 'react';
import styles from '../styles/Signup.module.css'
const Login = () => {
	return (
		<Fragment>
			<Head>
				<title>Login</title>
			</Head>

			<div className='container'>
				<div className={`form-body row`}>
					<div className='col-10 col-md-8 col-offset-md-4 col-lg-5 col-offset-2 col-offset-lg-7 mx-auto card p-5 box'>
						<div className="title">
							<div className="main-title">
								<h2>
									<span className="theme-color">L</span>ogin</h2>
							</div>
							<hr />

						</div>
						<form>
							<div className="mb-3">
								<label htmlFor="phoneNo" className="form-label">Phone/Email</label>
								<input type="text" className="form-control" id="phoneNo" />
							</div>


							<div className="mb-3">
								<label htmlFor="password" className="form-label">Password</label>
								<input type="password" className="form-control" id="password" />
							</div>



							{/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div> */}

							<button type="submit" className="btn btn-block text-white">Login</button>
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Login;