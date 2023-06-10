import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Classes = () => {
    const [allClasses, setAllClasses] = useState([]);
    useEffect(() => {
        fetch('fakeData/classes.json')
        .then(res => res.json())
        .then(data => {setAllClasses(data);
        })    
        .catch(error => console.error(error))
    }, []);
    return (
        <div>
            <div className="hero min-h-6" style={{backgroundImage: "url('cover.jpg')"}}>
            <div className="hero-overlay"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-xl">
                    <h1 className="mb-5 text-3xl font-bold">Explore Our Professional Classes</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 px-10 my-10">
            {allClasses.map((item) => (
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
                                <button style={{background:"#562EFF", padding:"5px 30px"}} className="btn text-white">Enroll</button>
                            </Link>
                        </div>
                    </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Classes;