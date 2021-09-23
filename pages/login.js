import Head from 'next/head'
import { useForm } from "react-hook-form";
import { signin } from '../services/auth.service';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Signup.module.css'
import { GlobalUpdateContext } from '../contexts/globalContext';
import { useContext } from 'react';
import ModernSassLayout from '../components/Layouts/modern-sass';

const Login = () => {
	const router = useRouter();
	const { setIsLoggedIn, setUserInfo } = useContext(GlobalUpdateContext)

	const schema = Joi.object({
		emailOrPhone: Joi.string().required().messages({
			'string.empty': 'email/phone cannot be empty'
		}),
		password: Joi.string().required().messages({
			'string.empty': 'password cannot be empty',
		})
	});

	const { register, handleSubmit, watch, formState: { errors } } = useForm({
		resolver: joiResolver(schema)
	});

	const onSubmit = async data => {
		toast.dismiss()
		try {
			const response = await signin(data);
			console.log('response in login ',response);
			if (response?.user) {
				setIsLoggedIn(true)
				setUserInfo(response?.user)
			}
			toast.success('Logged in',{autoClose: 1000});
			router.push('/')
		} catch (error) {
			toast.error(error?.message || "Something went wrong!",{autoClose:1000});
		}
	}

	return (
		<ModernSassLayout title="login">

			<div className='container'>
				<div className={`form-body row`}>
					<div className='col-10 col-md-8 col-offset-md-4 col-lg-4 col-offset-2 col-offset-lg-7 mx-auto card p-5 box'>
						<div className="text-center">
							<div className="main-title">
								<h2>
									<span className="theme-color">L</span>ogin</h2>
							</div>
							<hr />
						</div>

						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="mb-3">
								<label htmlFor="emailOrPhone" className="form-label">Phone/Email<span className="text-danger">*</span></label>
								<input className="form-control" id="emailOrPhone"  {...register("emailOrPhone")} />
								<p className="text-danger pt-2">{errors.emailOrPhone?.message}</p>
							</div>
							<div className="mb-3">
								<label htmlFor="password" className="form-label">Password<span className="text-danger">*</span></label>
								<input type="password" className="form-control" id="password"  {...register("password")} />
								<p className="text-danger pt-2">{errors.password?.message}</p>
							</div>
							<div className="d-grid gap-2">
								<button type="submit" className="btn text-white">Login</button>
							</div>
						
						</form>

						<p className="text-center pt-4">Don't have an account? &nbsp;<Link href="/signup"><a style={{ color: '#fb3b64' }}>Sign up</a></Link></p>
					</div>
				</div>
			</div>
		</ModernSassLayout>
	);
};

export default Login;