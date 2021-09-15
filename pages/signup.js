import Head from 'next/head'
import { Fragment } from 'react';
import styles from '../styles/Signup.module.css'


const Signup = () => {
    return (
        <Fragment>
            <Head>
                <title>Sign Up</title>
            </Head>
            <div className='container'>
                <div className={`form-body row`}>
                    <div className='col-10 col-md-8 col-offset-md-4 col-lg-5 col-offset-2 col-offset-lg-7 mx-auto card p-5 box'>
                        <div class="title">
                            <div class="main-title">
                                <h2>
                                    <span class="theme-color">S</span>ign <span class="theme-color">U</span>p</h2>
                            </div>
                            <hr />

                        </div>
                        <form>
                            <div class="mb-3">
                                <label for="fullName" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="fullName" />
                            </div>
                            <div class="mb-3">
                                <label for="phoneNo" class="form-label">Phone No</label>
                                <input type="text" class="form-control" id="phoneNo" />
                            </div>

                            <div class="mb-3">
                                <label for="phoneNo" class="form-label">Email / Phone</label>
                                <div className='input-group'>
                                    <input type="text" class="form-control" placeholder="Phone / Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span class="input-group-text" id="basic-addon2">Get OTP</span>
                                </div>
                            </div>


                            <div class="mb-3">
                                <label for="otp" class="form-label">OTP</label>
                                <input type="number" class="form-control" id="otp" />
                            </div>

                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" />
                            </div>

                            <div class="mb-3">
                                <label for="cPassword" class="form-label">Confirm Password</label>
                                <input type="cPassword" class="form-control" id="cPassword" />
                            </div>

                            <div class="mb-3">
                                <label for="address" class="form-label">Address</label>
                                <textarea class="form-control" id="address" rows="3"></textarea>
                            </div>


                            {/* <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}

                            <button type="submit" class="btn btn-block text-white">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Signup;