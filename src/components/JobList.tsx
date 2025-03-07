// JobList component that renders a list of JobCard components
import React from 'react';
import JobCard from './JobCard';
import { jobs } from '../data/jobs';

const JobList: React.FC = () => {
    return (
        <div>
            {jobs.length > 0 ? (
                jobs.map(job => (
                    <JobCard
                        key={job.id}
                        title={job.title}
                        company={job.company}
                        location={job.location}
                        salary={job.salary}
                    />
                ))
            ) : (
                <p>No jobs available at the moment.</p>
            )}
        </div>
    );
};

export default JobList;