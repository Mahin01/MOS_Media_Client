import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { Link } from "react-router-dom";

const ClassesCard = ({data}) => {
    console.log(data);
    const [rating, setRating] = useState(0);
    const [disabledClassIds, setDisabledClassIds] = useState([]);
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <div>No data available.</div>;
    }
    // Sort the classes array based on the number of students enrolled
    const sortedClasses = data.sort((a, b) => b.StudentEnrolled - a.StudentEnrolled);

    // Get the top 6 classes with the highest number of students
    const topClasses = sortedClasses.slice(0, 6);    
    console.log(topClasses);

    const isButtonDisabledForItem = (ID) => disabledClassIds.includes(ID);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 px-10 my-10">
        {topClasses.map((item) => (
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
    );
};

export default ClassesCard;