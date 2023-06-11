
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProvider';

const AddClass = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    return (
        <div className='w-full'>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col
                lg:flex-row-reverse w-full mx-0 justify-center">
                    <div className="text-center lg:text-left content-start">
                    <h2 className='text-2xl font-bold'>Welcome Back! <span className='brand-text'>Awesome Instructor</span></h2>
                    <h2 className="text-5xl font-bold">Add a class now!</h2>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form>
                            <div className="card-body">
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text" placeholder="Enter Class Name" {...register("name", { required: true })} name='name' className="input input-bordered"/>
                                {errors.name && <span className='text-red-500'>Class name is required</span>}
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input type="text" placeholder={user?.displayName} {...register("instructor-name", { required: true })} value={user?.displayName}  className="input input-bordered"/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total Seats</span>
                                </label>
                                <input type="text" placeholder="Enter Total Seats" {...register("total-seats")} name='total-seats' className="input input-bordered"/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text"  {...register("price", { required: true })}  placeholder="Enter Fee of Your Classes" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Enter Class Cover Photo URL" {...register("photoURL", { required: true })}  name='photoURL' className="input input-bordered"/>
                                </div>
                                <div className="form-control mt-6">
                                <input type='submit' className="btn text-white login-btn" value="Add Class"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default AddClass;