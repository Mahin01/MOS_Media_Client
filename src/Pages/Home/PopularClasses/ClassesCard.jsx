import { Link } from "react-router-dom";

const ClassesCard = ({data}) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <div>No data available.</div>;
    }
    // Sort the classes array based on the number of students enrolled
    const sortedClasses = data.sort((a, b) => b.StudentEnrolled - a.StudentEnrolled);

    // Get the top 6 classes with the highest number of students
    const topClasses = sortedClasses.slice(0, 6);    
    console.log(topClasses);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 px-10">
            {topClasses.map((item) => (
                <div key={item.ID} className="card w-80 bg-base-100 shadow-xl">
                    <figure className="pt-10">
                        <img src={item.ImageName} alt="Class Cover" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-slate-800">{item.ClassName}</h2>
                        <p className="text-xl text-slate-600">By {item.InstructorName}</p>
                        <p className="text-slate-700"><small>{item.StudentEnrolled} Enrolled</small></p>
                        <p className="text-slate-700">Price: ${item.Price}</p>
                        <div className="card-actions">
                            <Link>
                                <button style={{background:"#562EFF"}} className="btn text-white">Explore Class</button>
                            </Link>
                        </div>
                    </div>
            </div>
            ))}
        </div>
    );
};

export default ClassesCard;