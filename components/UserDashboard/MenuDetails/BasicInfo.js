import { useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { userUpdate } from '../../../services/auth.service';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link'
import styles from '../../../styles/Signup.module.css'
import { GlobalContext, GlobalUpdateContext } from '../../../contexts/globalContext'

export default function BasicInfo() {
	const { userInfo } = useContext(GlobalContext)
	const { setUserInfo } = useContext(GlobalUpdateContext)

	const [editMode, setEditMode] = useState(false)

	const schema = Joi.object({
		name: Joi.string().min(3).max(50).trim().required()
			.messages({
				'string.empty': `name cannot be empty`,
				'string.min': `name should have a minimum length of 3`,
				'any.required': `name is a required field`
			}),
		phone: Joi.string().required().messages({
			'string.empty': 'phone cannot be empty'
		}),
		email: Joi.optional(),
		address: Joi.string().required().messages({ 'string.empty': 'address cannot be empty' }),
	});


	const { register, handleSubmit, formState: { errors }, reset } = useForm({
		resolver: joiResolver(schema)});

	useEffect(() => {
		reset({
			name: userInfo?.name,
			phone: userInfo?.phone,
			email: userInfo?.email,
			address: userInfo?.address
		})
	}, [reset, userInfo])

	const onSubmit = async data => {
		const toast_id = toast.loading("Please wait...", { autoClose: 2000 })
		try {
			const result = await userUpdate(data);
			setUserInfo(result)
			setEditMode(false)
			toast.update(toast_id, { render: "successfully update!", type: "success", isLoading: false, pauseOnHover: false, autoClose: 2000 });
		} catch (error) {
			toast.update(toast_id, { render: error?.message || "Something went wrong!", type: "error", isLoading: false, pauseOnHover: false, autoClose: 1000 });
		}
	}

	const onCancel = () => {
		setEditMode(false);
		reset({
			name: userInfo?.name,
			phone: userInfo?.phone,
			email: userInfo?.email,
			address: userInfo?.address
		})
	}
	return (
		<>
			<h3>My Profile</h3>
			<hr />
			<div className={`container`}>
				<div className='col-sm-12 col-md-12 col-lg-6 card p-5 box'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-3">
							<label htmlFor="name" className="form-label">Full Name<span className="text-danger">*</span> </label>
							<input disabled={!editMode} defaultValue={userInfo?.name} className="form-control" placeholder="Enter your name"  {...register("name")} />
							<p className="text-danger pt-2">{errors.name?.message}</p>
						</div>

						<div className="mb-3">
							<label htmlFor="phone" className="form-label">Phone</label>
							<div className="input-group">
								<input disabled={userInfo?.isPhoneVerified || !editMode} defaultValue={userInfo?.phone} className="form-control" id="phone" placeholder="Phone" {...register("phone")} />
								{userInfo?.isPhoneVerified &&
									<span className="input-group-text bg-success border-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified">
										<i className="fa fa-check-circle"></i>
									</span>
								}
							</div>
							<p className="text-danger pt-2">{errors.phone?.message}</p>
						</div>

						<div className="mb-3">
							<label htmlFor="email" className="form-label">Email</label>
							<div className="input-group">
								<input disabled={userInfo?.isEmailVerified || !editMode} defaultValue={userInfo?.email} className="form-control" id="email" placeholder="Email" {...register("email")} />
								{userInfo?.isEmailVerified &&
									<span className="input-group-text bg-success border-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified">
										<i className="fa fa-check-circle"></i>
									</span>
								}
							</div>
							<p className="text-danger pt-2">{errors.email?.message}</p>
						</div>

						<div className="mb-3">
							<label htmlFor="address" className="form-label">Address<span className="text-danger">*</span></label>
							<textarea disabled={!editMode} className="form-control" defaultValue={userInfo?.address} placeholder="Enter address" id="address" rows="3" {...register("address")}></textarea>
							<p className="text-danger pt-2">{errors.address?.message}</p>
						</div>
						{!editMode && <button type="button" className="btn btn-block text-white" onClick={() => setEditMode(true)}>Edit Profile</button>}

						{
							editMode &&
							<>
								<button type="submit" className="btn btn-block text-white me-2">Update Profile</button>
								<button type="button" className="btn btn-block text-white" onClick={() => onCancel()}>Cancel</button>
							</>
						}
					</form>

				</div>

			</div>
		</>
	)
}