// JobCard component that takes in job details as props and renders them
import React, { useState } from 'react';

interface JobCardProps {
    title: string;
    company: string;
    location: string;
    salary: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, company, location, salary }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', textAlign: 'center' }}>
            <h3>{title}</h3>
            <p><strong>Company:</strong> {company}</p>
            <p><strong>Location:</strong> {location}</p>
            
            <button onClick={toggleDetails}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {showDetails && <p><strong>Salary:</strong> {salary}</p>}
        </div>
    );
};

export default JobCard;