import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAuth from "../../../hooks/useAuth";

const EnrolledClass = () => {
  const { user } = useAuth();
  const [allSelectedClasses, setAllSelectedClasses] = useState([]);
  const url = `https://mos-media-server.vercel.app/student/selected-classes?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllSelectedClasses(data))
      .catch((error) => console.log(error));
  }, [url]);

  const filteredSelectedClasses = allSelectedClasses.filter(selectedClass => selectedClass.payment_status === true);
  return (
    <div className="w-full px-10">
      <h2 className="text-3xl my-5 font-bold">My Enrolled Classes</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredSelectedClasses.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClass;