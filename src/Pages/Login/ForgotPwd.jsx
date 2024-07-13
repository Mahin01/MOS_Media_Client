import { faArrowsSpin, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const ForgotPwd = () => {

    return (
        <div>
            <Helmet>
                <title>MOS Media | Reset Password</title>
            </Helmet>
            
            <div className="hero bg-base-200 min-h-screen">
                <div className="lg:w-9/12 justify-content-center">
                    <div>
                    <h2 className="text-2xl font-bold my-2">Reset Your Password</h2>
                    <p className='text-sm mb-5'>To reset your password, enter your email below and submit. An email will be sent to you with instructions about how to complete the process.</p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <form className="card-body w-full">
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
                                    <input type="email" name="email" id="default-search" className="block max-w-full mt-5 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="form-control">
                            <button type="submit" className="btn btn-primary login-btn"><FontAwesomeIcon icon={faArrowsSpin} />Reset Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPwd;