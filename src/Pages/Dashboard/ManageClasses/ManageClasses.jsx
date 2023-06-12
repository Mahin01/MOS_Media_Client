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
    return (
      <div className="w-full px-10">
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
                    <button className='btn text-orange-400 mr-2'><FaEdit></FaEdit></button>
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