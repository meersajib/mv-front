import Head from 'next/head'
import { useForm } from "react-hook-form";
import { sendOtp, signup } from '../services/auth.service';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import styles from '../styles/Signup.module.css'
import { useState } from 'react';
import Link from 'next/link'
const Signup = () => {
	const router = useRouter();
	const [showOtp, setShowOtp] = useState(false)
	const schema = Joi.object({
		name: Joi.string().min(3).max(50).trim().required()
			.messages({
				'string.empty': `name cannot be empty`,
				'string.min': `name should have a minimum length of 3`,
				'any.required': `name is a required field`
			}),
		emailOrPhone: Joi.string().required().messages({
			'string.empty': 'email/phone cannot be empty'
		}),
		otp: Joi.string().required().messages({
			'string.empty': 'OTP is cannot be empty',
		}),
		password: Joi.string().min(4).max(50).required().messages({
			'string.empty': 'password cannot be empty',
			'string.min': 'password must be at 4 charecters long'
		}),
		confirmPassword: Joi.any().valid(Joi.ref('password')).required(),//.messages({'any.error':'Passwords do not match'}),//.options({ messages: {'any.error':'Passwords do not match'} }),
		address: Joi.string().required().messages({ 'string.empty': 'address cannot be empty' }),
	});



	const { register, handleSubmit, watch, formState: { errors } } = useForm({
		resolver: joiResolver(schema)
	});

	const onSubmit = async data => {
		const toast_id = toast.loading("Please wait...", { autoClose: 5000 })
		try {
			await signup(data);
			toast.update(toast_id, { render: "sign up successfully", type: "success", isLoading: false, autoClose: 3000 });
			router.push('/login')
		} catch (error) {
			toast.update(toast_id, { render: error?.message || "Something went wrong!", type: "error", isLoading: false, autoClose: 3000 });
		}
	}

	const emailOrPhone = watch("emailOrPhone");

	const otpSubmit = async (e) => {
		if (emailOrPhone) {
			e.preventDefault()
			const toast_id = toast.loading("Please wait...")
			try {
				await sendOtp(emailOrPhone);
				setShowOtp(true)
				toast.update(toast_id, { render: "OTP has been sent!", type: "success", isLoading: false, autoClose: 3000 });
			} catch (error) {
				toast.update(toast_id, { render: error?.message || "Something went wrong!", type: "error", isLoading: false, autoClose: 3000 });
			}
		}
	}

	return (
		<>
			<Head>
				<title>Sign Up</title>
			</Head>
			<div className='container'>
				<div className={`form-body row`}>
					<div className='col-10 col-md-8 col-offset-md-4 col-lg-5 col-offset-2 col-offset-lg-7 mx-auto card p-5 box'>
						<div className="text-center">
							<div className="main-title">
								<h2>
									<span className="theme-color">S</span>ign <span className="theme-color">U</span>p</h2>
							</div>
							<hr />
						</div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="mb-3">
								<label htmlFor="name" className="form-label">Full Name<span className="text-danger">*</span> </label>
								<input className="form-control" placeholder="Enter your name"  {...register("name")} />
								<p className="text-danger pt-2">{errors.name?.message}</p>
							</div>

							<div className="mb-3">
								<label htmlFor="emailOrPhone" className="form-label">Email / Phone<span className="text-danger">*</span></label>
								<div className='input-group'>
									<input className="form-control" id="emailOrPhone" placeholder="Phone / Email" {...register("emailOrPhone")} />
									<button type="button" onClick={(e) => otpSubmit(e)} className="btn input-group-text">Get OTP</button>
								</div>
								<p className="text-danger pt-2">{errors.emailOrPhone?.message}</p>
							</div>

							{showOtp &&
								<div className="mb-3">
									<label htmlFor="otp" className="form-label" >OTP<span className="text-danger">*</span></label>
									<input type="number" placeholder="Enter OTP" className="form-control" id="otp" {...register("otp")} />
									<p className="text-danger pt-2">{errors.otp?.message}</p>
								</div>}

							<div className="mb-3">
								<label htmlFor="password" className="form-label">Password<span className="text-danger">*</span></label>
								<input type="password" className="form-control" id="password" {...register("password")} />
								<p className="text-danger pt-2">{errors.password?.message}</p>
							</div>

							<div className="mb-3">
								<label htmlFor="confirmPassword" className="form-label">Confirm Password<span className="text-danger">*</span></label>
								<input type="password" className="form-control" id="confirmPassword" {...register("confirmPassword")} />
								{errors?.confirmPassword && <p className="text-danger pt-2">Passwords do not match</p>}
							</div>

							<div className="mb-3">
								<label htmlFor="address" className="form-label">Address<span className="text-danger">*</span></label>
								<textarea className="form-control" placeholder="Enter address" id="address" rows="3" {...register("address")}></textarea>
								<p className="text-danger pt-2">{errors.address?.message}</p>
							</div>
							<button type="submit" className="btn btn-block text-white">Sign Up</button>
						</form>

						
							<p className="text-center pt-4">Already have an account? &nbsp;<Link href="/login"><a style={{color:'#fb3b64'}}>Login</a></Link></p>
						
					</div>

				</div>
			</div>
		</>
	);
};

export default Signup;