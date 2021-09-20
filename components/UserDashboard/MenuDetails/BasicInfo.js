import { useState } from 'react'
import { useForm } from "react-hook-form";
import { sendOtp, signup } from '../../../services/auth.service';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link'
import styles from '../../../styles/Signup.module.css'

export default function BasicInfo() {
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


    const [showForm, setShowForm] = useState(false)
    const editUserInfo = async () => {
        setShowForm(!showForm)
    }
    return (
        <div>
            {!showForm ? <>
                <h3>Basic Information</h3>
                <hr />
                <h5>Personal Information <img onClick={() => editUserInfo()} style={{ marginLeft: '40px', cursor: 'pointer' }} src='/icons/edit.svg' height='20px' width='20px' alt='Edit Icon' /></h5>
                <hr />
                <div>
                    <p>Name:</p>
                    <p>Contact Number: </p>
                    <p>Email Address: </p>
                    <p>Address: </p>
                </div>
            </> :
                <div className={`row`}>
                    <div className='col-12 card p-5 box'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Full Name<span className="text-danger">*</span> </label>
                                <input className="form-control" placeholder="Enter your name"  {...register("name")} />
                                <p className="text-danger pt-2">{errors.name?.message}</p>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone<span className="text-danger">*</span></label>
                                <div className='input-group'>
                                    <input className="form-control" id="phone" placeholder="Phone" {...register("phone")} />
                                </div>
                                <p className="text-danger pt-2">{errors.phone?.message}</p>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email<span className="text-danger">*</span></label>
                                <div className='input-group'>
                                    <input className="form-control" id="email" placeholder="Email" {...register("email")} />
                                </div>
                                <p className="text-danger pt-2">{errors.email?.message}</p>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address<span className="text-danger">*</span></label>
                                <textarea className="form-control" placeholder="Enter address" id="address" rows="3" {...register("address")}></textarea>
                                <p className="text-danger pt-2">{errors.address?.message}</p>
                            </div>
                            <button type="submit" className="btn btn-block text-white">Update Profile</button>
                        </form>

                    </div>

                </div>
            }


        </div>
    )
}