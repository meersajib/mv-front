import Head from 'next/head'
import { useForm } from "react-hook-form";
import { resetOtpSend, resetOtpVerify } from '../services/auth.service';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Signup.module.css'
import { GlobalUpdateContext } from '../contexts/globalContext';
import { useContext, useState } from 'react';
import ModernSassLayout from '../components/Layouts/modern-sass';

const ResetPassword = () => {
	const [showOtp, setShowOtp] = useState(false)

	const router = useRouter();
	const { setIsLoggedIn, setUserInfo } = useContext(GlobalUpdateContext)

	const schema = Joi.object({
		emailOrPhone: Joi.string().required().messages({
			'string.empty': 'email/phone cannot be empty'
		}),
		code: Joi.string().required().messages({
			'string.empty': 'password cannot be empty',
		})
	});

	const { register, handleSubmit,watch, formState: { errors } } = useForm({
		resolver: joiResolver(schema)
	});
	const emailOrPhone = watch("emailOrPhone");

	const otpSubmit = async (e) => {
		if (emailOrPhone) {
			e.preventDefault()
			const toast_id = toast.loading("Please wait...")
			try {
				await resetOtpSend(emailOrPhone);
				setShowOtp(true)
				toast.update(toast_id, { render: "OTP has been sent!", type: "success", isLoading: false, autoClose: 2000, pauseOnHover:false });
			} catch (error) {
				toast.update(toast_id, { render: error?.message || "Something went wrong!", type: "error", isLoading: false, autoClose: 2000,pauseOnHover:false });
			}
		}
	}

	const onSubmit = async data => {
		toast.dismiss()
		try {
			const response = await resetOtpVerify(data);
			toast.success('Password successfully reset', { autoClose: 2000 });
			router.push('/login')
		} catch (error) {
			toast.error(error?.message || "Something went wrong!", { autoClose: 2000 });
		}
	}

	return (
		<ModernSassLayout title="reset">

			<div className='container'>
				<div className={`form-body row`}>
					<div className='col-10 col-md-8 col-offset-md-4 col-lg-4 col-offset-2 col-offset-lg-7 mx-auto card p-5 box'>
						<div className="text-center">
							<div className="main-title">
								<h2>
									<span className="theme-color">P</span>assword <span className="theme-color">R</span>eset
								</h2>
							</div>
							<hr />
						</div>

						<form onSubmit={handleSubmit(onSubmit)}>

							<div className="mb-3">
								<label htmlFor="emailOrPhone" className="form-label">Email / Phone<span className="text-danger">*</span></label>
								<div className='input-group'>
									<input className="form-control" id="emailOrPhone" placeholder="Phone / Email" {...register("emailOrPhone")} />
									<button type="button" onClick={(e) => otpSubmit(e)} className="btn input-group-text">Get OTP</button>
								</div>
								<p className="text-danger pt-2">{errors.emailOrPhone?.message}</p>
							</div>

							{
								showOtp &&
								<div className="mb-3">
									<label htmlFor="code" className="form-label">OTP Code<span className="text-danger">*</span></label>
									<input type="code" className="form-control" id="code"  {...register("code")} />
									<p className="text-danger pt-2">{errors.code?.message}</p>
								</div>
							}
							<div className="d-grid gap-2">
								<button type="submit" className="btn text-white">Reset</button>
							</div>

						</form>

						<p className="text-center pt-4">Don't have an account? &nbsp;<Link href="/signup"><a style={{ color: '#fb3b64' }}>Sign up</a></Link></p>
					</div>
				</div>
			</div>
		</ModernSassLayout>
	);
};

export default ResetPassword;