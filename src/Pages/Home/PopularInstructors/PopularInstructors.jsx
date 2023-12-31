import { useEffect } from 'react';
import { useState } from 'react';

const PopularInstructors = () => {
    const [instructorsData, setInstructorsData] = useState([]);
    useEffect(() => {
        fetch("fakeData/instructors.json")
        .then(res => res.json())
        .then(data=> setInstructorsData(data))
        .catch(error=> console.log(error))
    }, [])
    const sortedInstructors = instructorsData.sort((a, b) => b.total_students - a.total_students);

    // Get the top 6 Instructors with the highest number of students
    const topInstructors = sortedInstructors.slice(0, 6);    
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center my-10'>Popular Instructors</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 px-20 gap-4">
                {topInstructors.map(item => (
                    <div key={item.id}>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularInstructors;