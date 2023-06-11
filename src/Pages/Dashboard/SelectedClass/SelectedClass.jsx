import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const SelectedClass = () => {
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allSelectedClasses.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td> {item.enrolled} </td>
                <td> {item.seats_available} </td>
                <td>{item.price}</td>
                <td>
                  <button className="btn btn-primary mx-2">Make Payment</button>
                  <button
                    onClick={() => handleDeleteClass(item?._id)}
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

export default SelectedClass;
