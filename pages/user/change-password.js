import Head from 'next/head'
import { useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers/joi';
import { Container, Row, Col } from 'reactstrap'
import Joi from 'joi';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import styles from '../../styles/Signup.module.css'
import { useState } from 'react';
import Link from 'next/link'
import Header from '../../containers/common/header'
import Sidebar from '../../components/UserDashboard/Sidebar/Sidebar'
import FooterSection from '../layouts/sections/modern-sass/footer'


const ChangePassword = () => {
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


  return (
    <>
      <Head>
        <title>User Profile</title>
      </Head>
      <Header className="saas1" />

      <Container style={{ paddingTop: '170px', paddingBottom: '100px' }}>
        <Row>
          <Col xs={12} md={2}>
            <Sidebar />
          </Col>
          <Col xs={12} md={10}>
            <div className='container'>
              <div className={`row`}>
                <div className='col-12 p-5 box'>
                  <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-3">
                      <label htmlFor="oldPassword" className="form-label">Old Password<span className="text-danger">*</span></label>
                      <input type="oldPassword" className="form-control" id="oldPassword" {...register("oldPassword")} />
                      <p className="text-danger pt-2">{errors.oldPassword?.message}</p>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">New Password<span className="text-danger">*</span></label>
                      <input type="password" className="form-control" id="password" {...register("password")} />
                      <p className="text-danger pt-2">{errors.password?.message}</p>
                    </div>


                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password<span className="text-danger">*</span></label>
                      <input type="password" className="form-control" id="confirmPassword" {...register("confirmPassword")} />
                      {errors?.confirmPassword && <p className="text-danger pt-2">Passwords do not match</p>}
                    </div>

                    <button type="submit" className="btn btn-block text-white">Change Password</button>
                  </form>


                </div>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <FooterSection />
    </>
  );
};

export default ChangePassword;