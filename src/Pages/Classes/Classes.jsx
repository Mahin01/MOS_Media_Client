import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import './Classes.css';

const Classes = () => {
  const { user } = useContext(AuthContext);
  const [allClasses, setAllClasses] = useState([]);
  const [disabledClassIds, setDisabledClassIds] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetch("https://mos-media-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setAllClasses(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const filteredData = allClasses.filter((item) => item.status === "approved");

  const handleAddToSelectedClass = (item) => {
    const { ID, ClassName, InstructorName, StudentEnrolled, AvailableSeats, Price } = item;
    if (user && user.email) {
      const saveSelectedClass = {
        selectedClassId: ID,
        addedBy: user.email,
        className: ClassName,
        instructorName: InstructorName,
        enrolled: StudentEnrolled,
        seats_Available: AvailableSeats,
        price: Price,
        payment_status: false,
      };
      fetch("http://localhost:5173/student/selected-classes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveSelectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setDisabledClassIds((prevIds) => [...prevIds, ID]);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added to my selected classes. Check dashboard for more.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  const isButtonDisabledForItem = (ID) => disabledClassIds.includes(ID);

  return (
    <div>
      <div className="hero min-h-6" style={{ backgroundImage: "url('cover.jpg')" }}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl">
            <h1 className="mb-5 text-3xl font-bold">Explore Our Professional Classes</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
              In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 px-10 my-10">
        {filteredData.map((item) => (
          <div key={item.ID} className="card-compact w-80 mb-5">
            <figure className="mb-3">
              <img src={item.ImageName} alt="Class Cover" className="rounded-xl h-40 w-full" />
            </figure>
            <div>
              <h6 className="card-title text-slate-800">{item.ClassName}</h6>
              <small><p className="text-xsm text-slate-600"> 
               <Link>{item.InstructorName}</Link></p></small>
              <div className="rating">
                <Rating className="star" style={{ maxWidth: 120 }} value={rating} onChange={setRating} />
                <p className="text-slate-700">
                  <small> ({item.StudentEnrolled} Enrolled)</small>
                </p>
              </div>
              <p className="text-slate-700 font-bold">${item.Price}</p>
              <div className="card-actions">
                {item.AvailableSeats === 0 ? (
                  <Link>
                    <button style={{ padding: "5px 30px" }} className="btn text-white bg-red-600" disabled={true}>
                      Select Class
                    </button>
                  </Link>
                ) : (
                  <Link>
                    <button
                      onClick={() => handleAddToSelectedClass(item)}
                      style={{ background: "#562EFF", padding: "5px 30px" }}
                      className={isButtonDisabledForItem(item.ID) ? "btn text-white bg-red-600" : "btn text-white"}
                      disabled={isButtonDisabledForItem(item.ID)}
                    >
                      Select Class
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;