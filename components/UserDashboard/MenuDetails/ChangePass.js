import { useState } from 'react'
import { useForm } from "react-hook-form";
import { parseCookies } from 'nookies';
import jwt_decode from "jwt-decode";
import styles from '../../../styles/ChangePass.module.css';


// Service file calling
import postRequest from '../../../lib/postRequest';


export default function ChangePass(props) {
    const { userId, token } = props

    const [errMsg,setErrMsg] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        if(data?.newPassword != data?.newConfirmPassword){
            setErrMsg('Confirm password doesn\'t match!')
        }else if(data?.newPassword == data?.newConfirmPassword){
            const res = await postRequest(`customer/password/update/${userId}`,{
                oldPassword: data?.oldPassword,
                newPassword: data?.newPassword,
                newConfirmPassword: data?.newConfirmPassword,
            },token)
            if(res?.success){
                alert(res?.message)
                router.back()
            }else{
                alert(res?.message)
            }
            

            console.log('passsssssssss',res)
        }
        console.log(data)
    }

    return ( 
        <div style={{padding: '0px 30px'}}>
            <h2 style={{ color: '#F17921', marginBottom:'15px'}}>Change Password</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="oldPassword">Old Password</label>
                    <input className={styles.password} {...register("oldPassword", { required: true })} type="password" />
                    {errors.oldPassword && errors.oldPassword.required && <span>This field is required!</span>}


                    <label htmlFor="newPassword">New Password</label>
                    <input className={styles.password} {...register("newPassword", { required: true })} type="password" />
                    {errors.newPassword && errors.newPassword.required && <span>This field is required!</span>}


                    <label htmlFor="confirm">Confirm New Password</label>
                    <input className={styles.password} {...register("newConfirmPassword", { required: true })} type="password" />
                    {errors.newConfirmPassword && errors.newConfirmPassword.required && <span>This field is required!</span>}
                    <span>{errMsg}</span>

                    
                    <input className={styles.submit} type="submit" value="Submit" />
                </form>
        </div>
    )
}