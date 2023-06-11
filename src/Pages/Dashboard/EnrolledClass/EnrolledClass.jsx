import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';

const EnrolledClass = () => {
    const { user } = useContext(AuthContext);
  const [allSelectedClasses, setAllSelectedClasses] = useState([]);
  const url = `http://localhost:5000/selected-classes?${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllSelectedClasses(data))
      .catch((error) => console.log(error));
  }, [url]);

  const handleDeleteClass = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selected-class/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then((data) => {
            if(data.deletedCount > 0){
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        });
      }
    });
  };
  const filteredSelectedClasses = allSelectedClasses.filter(item => item.payment_status === true);
  return (
    <div className="w-full px-10">
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
            </tr>
          </thead>
          <tbody>
            {filteredSelectedClasses.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td> {item.enrolled} </td>
                <td> {item.seats_Available} </td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClass;