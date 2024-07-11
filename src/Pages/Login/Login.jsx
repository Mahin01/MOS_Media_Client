import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const {userSignIn, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleUserSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.pwd.value;
        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, { replace: true });
        })
    }
    return (
        <>
            <Helmet>
                <title>MOS Media | Login</title>
            </Helmet>
            
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content lg:w-9/12 flex-col lg:flex-row-reverse justify-content-center">
                    <div className="text-center lg:text-left">
                    <h2 className="text-2xl font-bold">It's so good to have you back!</h2>
                    <h1 className="text-4xl font-bold">Login now!</h1>
                    <p className="pt-3 pb-2 text-gray-600">Don't have an account yet? <a className="link register-link" href="/register">Register Here</a></p>
                    <p className="text-gray-600">Join us today &amp; Learn the Art of photography on the go!</p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm flex-shrink-0 shadow-2xl">
                    <form onSubmit={handleUserSignIn} className="card-body w-full">
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
                                    <input type="password" name="pwd" id="default-search" className="block max-w-full mt-5 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
                                </div>
                            <label className="label">
                                <a href="#" className="label-text-alt text-gray-500 link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control">
                            <button type="submit" className="btn btn-primary login-btn"><FontAwesomeIcon icon={faRightToBracket} />Login</button>
                            </div>
                        <div className="form-control">
                            <button className="btn google-login-btn hover">Login With Google</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;