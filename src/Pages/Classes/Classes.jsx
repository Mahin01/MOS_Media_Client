import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import './Classes.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

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

      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-3 my-10">
        {filteredData.map((item) => (
         <div key={item.ID} className="card-compact">
          <figure>
            <img src={item.ImageName} alt="Class Cover" className="h-32 w-full" />
          </figure>
          <div>
            <p className="text-lg font-bold text-slate-800">{item.ClassName}</p>
            <small><p className="text-xsm text-gray-400"> 
              <Link>{item.InstructorName}</Link></p></small>
            <div className="rating">
              <Rating className="star" style={{ maxWidth: 80 }} value={rating} onChange={setRating} />
              <p className="text-gray-400 review">
                ({item.StudentEnrolled} Enrolled)
              </p>
            </div>
            <p className="text-black font-bold"><FontAwesomeIcon icon={faDollarSign} />{item.Price}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;