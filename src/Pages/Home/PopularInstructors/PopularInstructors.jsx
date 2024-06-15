import { useEffect } from 'react';
import { useState } from 'react';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://mos-media-server.vercel.app/users')
        .then(res => res.json())
        .then(data => {setInstructors(data);
        })    
        .catch(error => console.error(error))
    }, []);
    const filteredData = instructors.filter(item => item.role === "instructor");
    const sortedInstructors = filteredData.sort((a, b) => b.total_students - a.total_students);
    

    // Get the top 3 Instructors with the highest number of students
    const topInstructors = sortedInstructors.slice(0, 3);    
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center my-10'>Popular Instructors</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 px-20 gap-4">
                {topInstructors.map(item => (
                    <div key={item.id}>
                        <img className="h-40 w-full rounded-lg" src={item.photoUrl} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularInstructors;