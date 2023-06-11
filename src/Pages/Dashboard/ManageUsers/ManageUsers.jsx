import { useContext, useEffect, useState } from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete user!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then((data) => {
            if(data.deletedCount > 0){
                Swal.fire(
                    'Deleted!',
                    'User has been deleted.',
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
              <th>User Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td> {user.gender} </td>
                <td> {user.phoneNumber} </td>
                <td><button className='btn text-2xl text-orange-400'><FaUserShield></FaUserShield></button></td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user?._id)}
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

export default ManageUsers;