import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

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
        console.log(email, password);
        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
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
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse lg:w-9/12 justify-content-center">
                    <div class="text-center lg:text-left">
                        <h2 class="text-2xl font-bold">It's so good to have you back!</h2>
                        <h2 class="text-5xl font-bold">Login now!</h2>
                        <p class="pt-6 pb-3">Don't have an account yet?
                            <a class="link register-link" href="/register">Register Here</a>
                        </p>
                        <p>Join us today &amp; Learn the Art of photography on the go!</p>
                    </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <form onSubmit={handleUserSignIn}>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="Enter your email" name="email" class="input input-bordered" required />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Password</span>
                                        </label>      
                                        <input type="password" placeholder="Enter your password" name="pwd" class="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div class="form-control mt-4">
                                        <button type="submit" class="btn text-white login-btn">Login</button>
                                    </div>
                                </form>
                                    <div class="form-control">
                                        <button class="btn google-login-btn hover">Login With Google</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
    );
};

export default Login;