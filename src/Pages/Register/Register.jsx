import React from 'react';

const Register = () => {
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
                        <form>
                            <div className="card-body">
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your Name" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <select className="select select-bordered">
                                    <option disabled selected>Pick one</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" placeholder="Enter your phone number" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Type your password" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Re-type your password" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="Enter your Address" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Enter your Photo URL" className="input input-bordered" required/>
                                </div>
                                <div className="form-control mt-6">
                                <button className="btn text-white login-btn">Register</button>
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