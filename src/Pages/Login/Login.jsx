import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const {userSignIn} = useContext(AuthContext);
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
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col
                lg:flex-row-reverse lg:w-9/12 justify-content-center">
                    <div className="text-center lg:text-left">
                    <h2 className='text-2xl font-bold'>It's so good to have you back!</h2>
                    <h2 className="text-5xl font-bold">Login now!</h2>
                    <p className="pt-6 pb-3">Don't have an account yet? <Link to="/register" className='link register-link'>Register Here</Link></p>
                    <p>Join us today & Learn the Art of photography on the go!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleUserSignIn}>
                            <div className="card-body">
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" name="email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your password" name="pwd" className="input input-bordered" required/>
                                </div>
                                <div className="form-control mt-6">
                                <button className="btn text-white login-btn">Login</button>
                                </div>
                                <div className="form-control mt-6">
                                <button className="btn google-login-btn hover">Login With Google</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;