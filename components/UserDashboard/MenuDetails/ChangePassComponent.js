import { useForm } from "react-hook-form";
import { changePassword } from '../../../services/auth.service';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { toast } from 'react-toastify';
import styles from '../../../styles/Signup.module.css';

export default function ChangePassComponent() {

	const schema = Joi.object({
		currentPassword: Joi.string().required().messages({
			'string.empty': 'current password cannot be empty'
		}),
		password: Joi.string().min(4).max(50).required().messages({
			'string.empty': 'new password cannot be empty',
			'string.min': 'new password must be at 4 charecters long'
		}),
		confirmPassword: Joi.any().valid(Joi.ref('password')).required()
	});


	const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
		resolver: joiResolver(schema)
	});

	const onSubmit = async data => {
		const toast_id = toast.loading("Please wait...", { autoClose: 2000 })
		try {
			const result = await changePassword(data);
			toast.update(toast_id, { render: "successfully update!", type: "success", isLoading: false, pauseOnHover: false, autoClose: 2000 });
		} catch (error) {
			toast.update(toast_id, { render: error?.message || "Something went wrong!", type: "error", isLoading: false, pauseOnHover: false, autoClose: 1000 });
		}
	}

	return (
		<>
			<h3>Change Password</h3>
			<hr />
			<div className={`container`}>
				<div className='col-sm-12 col-md-12 col-lg-6 card p-5 box'>
					<form onSubmit={handleSubmit(onSubmit)}>

						<div className="mb-3">
							<label htmlFor="name" className="form-label">Current password<span className="text-danger">*</span> </label>
							<input className="form-control" placeholder="Enter your current password"  {...register("currentPassword")} />
							<p className="text-danger pt-2">{errors.currentPassword?.message}</p>
						</div>

						<div className="mb-3">
							<label htmlFor="name" className="form-label">New password<span className="text-danger">*</span> </label>
							<input className="form-control" placeholder="Enter new password"  {...register("password")} />
							<p className="text-danger pt-2">{errors.password?.message}</p>
						</div>

						<div className="mb-3">
							<label htmlFor="name" className="form-label">Confirm password<span className="text-danger">*</span> </label>
							<input className="form-control" placeholder="Confirm your password"  {...register("confirmPassword")} />
							{errors?.confirmPassword && <p className="text-danger pt-2">Passwords do not match</p>}
						</div>

						<button type="submit" className="btn btn-block text-white me-2">Submit</button>

					</form>
				</div>
			</div>
		</>
	)
}