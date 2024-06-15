import { Link } from "react-router-dom";
import "./Instructors.css";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
const Instructor = () => {
    const [instructors, setInstructors] = useState([]);
    const [disabledClassIds, setDisabledClassIds] = useState([]);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        fetch('https://mos-media-server.vercel.app/users')
        .then(res => res.json())
        .then(data => {setInstructors(data);
        })    
        .catch(error => console.error(error))
    }, []);

    const filteredData = instructors.filter(item => item.role === "instructor");
    const isButtonDisabledForItem = (ID) => disabledClassIds.includes(ID);

    return (
        <div>
            <div className="hero min-h-6" style={{backgroundImage: "url('cover.jpg')"}}>
            <div className="hero-overlay"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-xl">
                    <h1 className="mb-5 text-3xl font-bold">Meet Our Awesome Instructors</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 px-10 my-10">
        {filteredData.map((item) => (
          <div key={item.ID} className="card-compact w-80 mb-5">
            <figure className="mb-3">
              <img src={item.photoUrl} alt="Class Cover" className="rounded-xl h-40 w-full" />
            </figure>
            <div>
              <h6 className="card-title text-slate-800">{item.ClassName}</h6>
              <small><p className="text-xsm text-slate-600"> 
               <Link>{item.InstructorName}</Link></p></small>
              <div className="rating">
                <Rating className="star" style={{ maxWidth: 120 }} value={rating} onChange={setRating} />
                <p className="text-slate-700">
                  <small> ({item.total_students} Enrolled)</small>
                </p>
              </div>
              <div className="card-actions">
                  <Link>
                    <button style={{ padding: "5px 30px" }} className="btn text-white bg-primary">
                      View Classes
                    </button>
                  </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default Instructor;