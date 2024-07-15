import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import "./Register.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMarsAndVenus, faPhone, faUpload, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    const {createUser, updateUserProfile, emailVerify, updateNumber} = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigateUser = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                updateUserProfile(data.name, data.photoURL)
                .then(result => {
                    const saveUserToDb = {name: data.name, email:data.email, gender: data.gender, phoneNumber: data.phoneNum, address: data.address, photoUrl:data.photoURL, role : "student"};
                    fetch('https://mos-media-server.vercel.app/users', {
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
                                emailVerify()
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
                    lg:flex-row-reverse lg:w-9/12 justify-center">
                        <div className="text-center lg:text-left content-start">
                        <h2 className='text-2xl font-bold'>Welcome to <span className='brand-text'>MOS Media</span></h2>
                        <h2 className="text-5xl font-bold pt-2">Register now!</h2>
                        <p className="pt-3 text-gray-400">Already have an account? <a href="/login" className='link register-link'>Login Here</a></p>
                        </div>
                        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className='card-body w-full'>
                            <div className="form-control">
                                <div className="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-4 w-4 opacity-70">
                                            <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                        </svg>
                                    </div>
                                    <input type="text" placeholder="Enter your Name" {...register("name", { required: true })} name='name' className="block max-w-full mt-5 p-4 ps-10 text-sm input input-bordered"/>
                                    {errors.name && <span className='text-red-500'>Name is required</span>}
                                </div>
                            </div>
                            <div className="form-control">
                                <div className="relative">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                className="h-4 w-4 opacity-70">
                                                <path
                                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                                <path
                                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                            </svg>
                                        </div>
                                    <input type="email" placeholder="Enter your email" {...register("email", { required: true })} name='email' className="block max-w-full mt-5 p-4 ps-10 text-sm input input-bordered"/>
                                    {errors.email && <span className='text-red-500'>Email is required</span>}
                                </div>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <div className="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-600">
                                        <FontAwesomeIcon icon={faMarsAndVenus} />
                                    </div>
                                <select className="block max-w-full mt-5 p-4 ps-10 text-sm select select-bordered text-gray-400" {...register("gender")}>
                                    <option disabled selected>Pick Your Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-control">
                                <div className="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-600">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                        <input type='number' min={11} placeholder="Enter your phone number" {...register("phoneNum")} name='phoneNum' className="block max-w-full mt-5 p-4 ps-10 text-sm input input-bordered"/>
                                </div>
                            </div>
                            <div className="form-control">
                                <div className="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-4 w-4 opacity-70">
                                            <path
                                            fillRule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clipRule="evenodd" />
                                        </svg> 
                                    </div>
                                        <input type="password" placeholder="Type your password" name='pwd' {...register("password", {
                                        required: true, 
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                        })}
                                        className="block max-w-full mt-5 p-4 ps-10 text-sm input input-bordered"/>
                                        {errors.password?.type === "required" && <p className='text-red-500'>Password is required</p>}
                                        {errors.password?.type === 'minLength' && <p className='text-red-500'>Password should be at least 6 characters</p>}
                                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password should be a combination of uppercase, lowercase, number & special character.</p>}
                                </div>
                            </div>
                            <div className="form-control">
                                <div className="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-4 w-4 opacity-70">
                                            <path
                                            fillRule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clipRule="evenodd" />
                                        </svg> 
                                    </div>
                                        <input type="password" placeholder="Re-type your password" {...register("confirmPwd", { required: true })}  className="block max-w-full mt-5 p-4 ps-10 text-sm input input-bordered"/>
                                </div>
                            </div>
                            <div className="form-control">
                                <div className="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-600">
                                        <FontAwesomeIcon className='h-4 w-4 opacity-70 ' icon={faLocationDot} />
                                    </div>
                                        <input type="text" {...register("address")}  placeholder="Enter your Address" className="block max-w-full mt-5 p-4 ps-10 text-sm input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <div className="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-600">
                                        <FontAwesomeIcon className='h-4 w-4 opacity-70 ' icon={faUpload} />
                                    </div>
                                    <input type="text" placeholder="Enter your Photo URL" {...register("photoURL", { required: true })}  name='photoURL' className="block max-w-full mt-5 p-4 ps-10 text-sm input input-bordered"/>
                                </div>
                            </div>
                                
                            <div className="form-control">
                                <button type='submit' className="btn text-white login-btn"><FontAwesomeIcon icon={faUserPlus} /> Register</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div> 
            </>
    );
};

export default Register;