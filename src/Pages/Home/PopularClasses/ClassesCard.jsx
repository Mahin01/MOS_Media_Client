import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ClassesCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
const ClassesCard = ({data}) => {
    const [rating, setRating] = useState(0);
    const [disabledClassIds, setDisabledClassIds] = useState([]);

    // Sort the classes array based on the number of students enrolled
    const sortedClasses = data?.sort((a, b) => b.StudentEnrolled - a.StudentEnrolled);

    // Get the top 6 classes with the highest number of students
    const topClasses = sortedClasses?.slice(0, 10);
    
    return (
      <div className="classes-card grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
        {topClasses?.map((item) => (
          <div key={item.ID} className="card-compact">
          <a href="/">
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
          </a>
        </div>
        ))}
      </div>
    );
};

export default ClassesCard;