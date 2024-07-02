import { useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';

const PopularClasses = () => {
    const [classesData, setClassesData] = useState();

    useEffect(() => {
        fetch("https://mos-media-server.vercel.app/classes")
        .then(res => res.json())
        .then(data => {setClassesData(data);
        })    
        .catch(error => console.error(error))
    }, []);

    return (
        <div>
            <h1 className='text-3xl font-bold my-5'>Popular classes</h1>
            {
                <ClassesCard data={classesData}></ClassesCard>
            }
        </div>
    );
};

export default PopularClasses;