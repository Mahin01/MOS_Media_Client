import { useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';

const PopularClasses = () => {
    const [classesData, setClassesData] = useState();

    useEffect(() => {
        fetch('fakeData/popularClasses.json')
        .then(res => res.json())
        .then(data => {setClassesData(data);
        })    
        .catch(error => console.error(error))
    }, []);

    return (
        <div>
            <h1 className='text-4xl font-bold my-10 text-center'>Popular Classes</h1>
            {
                <ClassesCard data={classesData}></ClassesCard>
            }
        </div>
    );
};

export default PopularClasses;