import React, { useEffect, useState } from 'react';
import JobCards from './JobCards';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [])

    return (
        <div className='mt-5'>
                              <p className='text-center font-bold text-3xl'>HOT JOBS</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <JobCards key={job._id} job={job}></JobCards>)
                }
            </div>
        </div>
    );
};

export default HotJobs;