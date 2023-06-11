import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const SelectedClass = () => {
    const {user} = useContext(AuthContext);
    const [allSelectedClass, setAllSelectedClasses] = useState();
    const url = `http://localhost:5000/selected-classes?${user?.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [url]);
    return (
        <div className='w-full px-10'>
           <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Student Enrolled</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div> 
        </div>
    );
};

export default SelectedClass;