import Head from 'next/head'
import { useForm } from "react-hook-form";
import { signin } from '../services/auth.service';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Signup.module.css'


const Login = () => {
	const router = useRouter();

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
		const toast_id = toast.loading("Please wait...", { autoClose: 2000 })
		try {
			const response = await signin(data);
			console.log('respoin', response);
			toast.update(toast_id, { render: "sign in successfully", type: "success", isLoading: false, autoClose: 2000 });
			router.push('/')
		} catch (error) {
			toast.update(toast_id, { render: error?.message || "Something went wrong!", type: "error", isLoading: false, autoClose: 2000 });
		}
	}

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>

			<div className='container'>
				<div className={`form-body row`}>
					<div className='col-10 col-md-8 col-offset-md-4 col-lg-5 col-offset-2 col-offset-lg-7 mx-auto card p-5 box'>
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
							<button type="submit" className="btn btn-block text-white">Login</button>
						</form>

						<p className="text-center pt-4">Don't have an account? &nbsp;<Link href="/signup"><a style={{color:'#fb3b64'}}>Sign up</a></Link></p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;