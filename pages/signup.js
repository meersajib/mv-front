import Head from 'next/head'
import { Fragment } from 'react';
import styles from '../styles/Signup.module.css'
import { useForm } from "react-hook-form";
 
const Signup = () => {
    return (
        <Fragment>
            <Head>
                <title>Sign Up</title>
            </Head>
            <div className='container'>
                <div className={`form-body row`}>
                    <div className='col-10 col-md-8 col-offset-md-4 col-lg-5 col-offset-2 col-offset-lg-7 mx-auto card p-5 box'>
                        <div className="title">
                            <div className="main-title">
                                <h2>
                                    <span className="theme-color">S</span>ign <span className="theme-color">U</span>p</h2>
                            </div>
                            <hr />

                        </div>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="fullName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneNo" className="form-label">Phone No</label>
                                <input type="text" className="form-control" id="phoneNo" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phoneNo" className="form-label">Email / Phone</label>
                                <div className='input-group'>
                                    <input type="text" className="form-control" placeholder="Phone / Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <button className="input-group-text" id="basic-addon2">Get OTP</button>
                                </div>
                            </div>


                            <div className="mb-3">
                                <label htmlFor="otp" className="form-label">OTP</label>
                                <input type="number" className="form-control" id="otp" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="cPassword" className="form-label">Confirm Password</label>
                                <input type="cPassword" className="form-control" id="cPassword" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <textarea className="form-control" id="address" rows="3"></textarea>
                            </div>


                            {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div> */}

                            <button type="submit" className="btn btn-block text-white">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Signup;