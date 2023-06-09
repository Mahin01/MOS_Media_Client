import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigateUser = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                updateUserProfile(data.name, data.photoUrl)
                .then(result => {
                    const saveUserToDb = {name: data.name, email:data.email, gender: data.gender, phoneNumber: data.phone_no, address: data.address};
                    fetch('http://localhost:5000/users', {
                        method: 'POST', 
                        headers: {
                            'content-type': 'application/json'
                        }, 
                        body: JSON.stringify(saveUserToDb)
                    })
                    .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                reset();
                    Swal.fire({
                    title: 'User Registration Successful. Please Log in to Learn the art of Photography',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'  
                    }
                    });
                    navigateUser('/');
                }
            })
        })
        .catch(error => console.log(error))
    })
}
    return (
        <>
           <div className="hero bg-base-200">
                <div className="hero-content flex-col
                lg:flex-row-reverse lg:w-10/12 justify-center">
                    <div className="text-center lg:text-left content-start">
                    <h2 className='text-2xl font-bold'>Welcome to <span className='brand-text'>MOS Media</span></h2>
                    <h2 className="text-5xl font-bold">Register now!</h2>
                    <p className="pt-6 pb-3">Already have an account? <a className='link register-link'>Login Here</a></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body">
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your Name" {...register("name", { required: true })} name='name' className="input input-bordered"/>
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" {...register("email", { required: true })} name='email' className="input input-bordered"/>
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <select className="select select-bordered" {...register("gender")}>
                                    <option disabled selected>Pick one</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" placeholder="Enter your phone number" {...register("phone_no")} name='phone_no' className="input input-bordered"/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Type your password" name='pwd' {...register("password", {
                                    required: true, 
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                 })}
                                className="input input-bordered"/>
                                {errors.password?.type === "required" && <p className='text-red-500'>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500'>Password should be at least 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password should be a combination of uppercase, lowercase, number & special character.</p>}
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Re-type your password" {...register("confirmPwd", { required: true })}  className="input input-bordered"/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" {...register("address")}  placeholder="Enter your Address" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Enter your Photo URL" {...register("photoURL", { required: true })}  name='photoURL' className="input input-bordered"/>
                                </div>
                                <div className="form-control mt-6">
                                <input type='submit' className="btn text-white login-btn" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default Register;