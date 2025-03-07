//Integrate the JobList component into the App component.

import React from 'react';
import JobList from './components/JobList';

const App: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f0f4f8',
            padding: '20px',
            boxSizing: 'border-box'
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                color: '#333',
                marginBottom: '20px',
                textAlign: 'center'
            }}>Job Listings</h1>

            <div style=  {{
                width: '100%',
                maxWidth: '800px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(99, 59, 59, 0.1)',
                padding: '20px'
            }}>
                <JobList />
            </div>
        </div>
    );
};

export default App;



// import React from 'react';
// import JobList from './components/JobList';

// const App: React.FC = () => {
//     return (
//         <div>
//             <h1>Job Listings</h1>
//             <JobList />
//         </div>
//     );
// };

// export default App;













// import './App.css'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import Home from './pages/Home'
// // import About from './pages/About'



// function App() {

//   return (
//     <>
//       <Router>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//              <li>
//               <Link to="/about">About</Link>
//             </li>
//           </ul>
//         </nav>
        

//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/about" element={<About />} /> */}
//         </Routes>

//       </Router>
//     </>
//   )
// }


// export default App
















//COMPLETE JOBLIST CODE


// import { useState } from "react";

// // Sample job data
// const jobs = [
//   { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote", salary: "₦400,000" },
//   { id: 2, title: "Backend Engineer", company: "Dev Solutions", location: "Enugu", salary: "₦300,000" },
//   { id: 3, title: "UI/UX Designer", company: "Creative Minds", location: "Lagos", salary: "₦350,000" },
//   { id: 4, title: "Fullstack Developer", company: "Innovate Inc.", location: "Abuja", salary: "₦450,000" },
//   { id: 5, title: "Data Scientist", company: "AI Labs", location: "Remote", salary: "₦500,000" },
//   { id: 6, title: "Project Manager", company: "Tech Solutions", location: "Port Harcourt", salary: "₦380,000" },
//   { id: 7, title: "QA Engineer", company: "Quality Assurance Ltd", location: "Ibadan", salary: "₦320,000" },
//   { id: 8, title: "Cybersecurity Analyst", company: "SecureNet", location: "Remote", salary: "₦480,000" },
//   { id: 9, title: "DevOps Engineer", company: "Cloud Systems", location: "Remote", salary: "₦420,000" },
//   { id: 10, title: "Product Manager", company: "TechHub", location: "Lagos", salary: "₦550,000" }
// ];

// interface JobProps {
//   id: number;
//   title: string;
//   company: string;
//   location: string;
//   salary: string;
// }

// const JobCard: React.FC<{ job: JobProps }> = ({ job }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   return (
//     <div className="border p-4 rounded shadow-md bg-white mb-4">
//       <h3 className="text-lg font-bold">{job.title}</h3>
//       <p className="text-gray-700">{job.company}</p>
//       <p className="text-gray-500">{job.location}</p>
//       {showDetails && <p className="text-green-600 font-semibold">Salary: {job.salary}</p>}
//       <button
//         className="mt-2 p-2 bg-blue-500 text-white rounded"
//         onClick={() => setShowDetails(!showDetails)}
//       >
//         {showDetails ? "Hide Details" : "Show Details"}
//       </button>
//     </div>
//   );
// };

// const JobList: React.FC = () => {
//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
//       {jobs.length > 0 ? (
//         jobs.map((job) => <JobCard key={job.id} job={job} />)
//       ) : (
//         <p className="text-gray-600">No jobs available at the moment.</p>
//       )}
//     </div>
//   );
// };

// export default JobList;


