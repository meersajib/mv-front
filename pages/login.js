import Head from 'next/head'
import { Fragment } from 'react';
import styles from '../styles/Signup.module.css'


const Login = () => {
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
                                    <span class="theme-color">L</span>ogin</h2>
                            </div>
                            <hr />

                        </div>
                        <form>
                            <div class="mb-3">
                                <label for="phoneNo" class="form-label">Phone/Email</label>
                                <input type="text" class="form-control" id="phoneNo" />
                            </div>


                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" />
                            </div>



                            {/* <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}

                            <button type="submit" class="btn btn-block text-white">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;