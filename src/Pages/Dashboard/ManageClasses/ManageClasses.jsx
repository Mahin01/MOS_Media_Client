import { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [allClasses, setAllClasses] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/classes")
        .then((res) => res.json())
        .then((data) => setAllClasses(data))
        .catch((error) => console.log(error));
    }, []);
  
    const handleDeleteClass = (id) => {
        console.log(id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete Class!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/classes/${id}`, {
            method: "DELETE",
          })
            .then(res => res.json())
            .then((data) => {
              if(data.deletedCount > 0){
                  Swal.fire(
                      'Deleted!',
                      'Class has been deleted.',
                      'success'
                  )
              }
          });
        }
      });
    };

    const handleApproveClass = (id) => {
      fetch(`http://localhost:5000/classes/admin/approve/${id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: "The Class Has been Approved!",
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
      })
    }

    const handleDenyClass = (id) => {
      fetch(`http://localhost:5000/classes/admin/deny/${id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: "The Class Has been Denied!",
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
      })
    }
    return (
      <div className="w-full px-10">
        <h2 className='text-3xl my-5'>Manage All Classes</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Total Enrolled</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allClasses.map((singleClass, index) => (
                <tr key={singleClass._id}>
                  <th>{index + 1}</th>
                  <td>{singleClass.ClassName}</td>
                  <td>{singleClass.InstructorName}</td>
                  <td> {singleClass.StudentEnrolled} </td>
                  <td> {singleClass.AvailableSeats} </td>
                  <td> ${singleClass.Price} </td>
                  <td>
                    { singleClass.status === "approved" && (

                      <p className='text-green-600 text-lg'>Approved</p>
                    )}
                    {
                       singleClass.status === "denied" &&
                      <p className='text-red-600 text-lg'>Denied</p>
                    }
                    {
                      singleClass.status !== "approved" && singleClass.status !== "denied" &&
                      <div>
                        <button onClick={() => handleApproveClass(singleClass?._id)} className='btn my-2 bg-green-600 text-white'>Approve</button>
                        <button onClick={() => handleDenyClass(singleClass?._id)} className='btn text-white bg-red-600'>Deny</button>
                      </div>
                    }
                    </td>
                    <td>
                    <button
                      onClick={() => handleDeleteClass(singleClass?._id)}
                      className="btn bg-red-600 text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageClasses;