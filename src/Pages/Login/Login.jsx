import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col
                lg:flex-row-reverse lg:w-9/12 justify-content-center">
                    <div className="text-center lg:text-left">
                    <h2 className='text-5xl font-bold'>Already a User?</h2>
                    <h2 className="text-5xl font-bold">Login now!</h2>
                    <p className="pt-6 pb-3">Don't Have an Account? <a className='link'>Register Here</a></p>
                    <p>Join us today & Learn the Art of photography on the go!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form>
                            <div className="card-body">
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your password" className="input input-bordered" required/>
                                </div>
                                <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="google-login-btn form-control mt-6">
                                <button className="btn btn-primary">Login With Google</button>
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