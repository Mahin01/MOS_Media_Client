import React, { useContext, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import { AuthContext } from '../../Providers/AuthProvider';

const Profile = () => {
    const [userData , setUserData] = useState([]);
    const auth = useContext(AuthContext);
    const {user} = auth;

    useEffect(() => {
        fetch('https://mos-media-server.vercel.app/users')
        .then(res => res.json())
        .then(data => {setUserData(data);
        })    
        .catch(error => console.error(error))
    }, []);

    const mailFilterData = userData.filter(item => item.email === user?.email);
    
    return (
        <div>
            <section class="py-10 my-auto dark:bg-gray-900">
                <div class="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
                    <div
                        class="lg:w-[80%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-5 rounded-xl h-fit self-center dark:bg-gray-800/40">
            
                        <div class="">
                            <h1
                                className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white text-center">
                                Public Profile
                            </h1>
                            <h2 className="text-grey text-center text-sm mb-4 dark:text-gray-400">Edit Profile Info</h2>
                            {mailFilterData.map((item )=> (
                            <form>
                                <div className='mx-auto justify-content-center'>
                                    <img src={item.photoUrl} alt="Profile Photo" className="mx-auto w-[141px] h-[141px] rounded-full" />    
                                </div>
                                <h2 class="text-center mt-1 font-semibold dark:text-gray-300">Upload Profile Image
                                </h2>
                                <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                    <div class="w-full mb-4 mt-6">
                                        <label for="" class="mb-2 dark:text-gray-300">Full Name</label>
                                        <input type="text" className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                        placeholder="Full Name" value={user?.displayName ? user.displayName : 'Back'} />
                                    </div>
                                    <div class="w-full mb-4 lg:mt-6">
                                        <label for="" class="mb-2 dark:text-gray-300">Phone Number</label>
                                        <input type="text"
                                                class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                                placeholder="Phone Number" value={item.phoneNumber}/>
                                    </div>
                                </div>

                                <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                    <div class="w-full">
                                        <h3 class="dark:text-gray-300 mb-2">Sex</h3>
                                        <select disabled
                                                class="w-full text-grey border-2 rounded-lg p-4 pl-2 pr-2 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800">
                                                <option disabled value="">Select Sex</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                    </div>
                                    <div class="w-full">
                                        <h3 class="dark:text-gray-300 mb-2">Date Of Birth</h3>
                                        <input type="date"
                                                class="text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800" />
                                    </div>
                                </div>
                                <div class="w-full rounded-lg mt-4 text-white text-lg font-semibold">
                                    <button type="submit" class="w-full">Save</button>
                                </div>
                            </form>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;