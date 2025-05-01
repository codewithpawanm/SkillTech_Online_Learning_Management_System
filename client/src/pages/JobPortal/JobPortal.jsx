// // JobPortal.jsx

// import React from 'react';

// // import Job from './Job';
// import SearchBar from './SearchBar';
// import Header from './Header';
// import Job from './Job';
// import JobCard from './JobCard';

// const JobPortal = () => {
//   return (
//     <div className="job-portal-container">
    
//       <Header/>
//       <SearchBar/>
//       <JobCard/>
    

      
//     </div>
//   );
// };

// export default JobPortal;



//Firebase setup


// import React, { useState } from 'react';
// import SearchBar from './SearchBar';
// import Header from './Header';
// import JobCard from './JobCard';
// import Job from './Job';

// const JobPortal = () => {
//   const [jobList, setJobList] = useState([]);

//   // Function to fetch job details based on search criteria from SearchBar
//   const fetchJobsCustom = async (criteria) => {
//     // Example of fetching jobs based on search criteria
//     // You can replace this with actual API call logic
//     const response = await fetch(`/api/jobs?title=${criteria.title}&location=${criteria.location}&experience=${criteria.experience}&type=${criteria.type}`);
//     const data = await response.json();
//     setJobList(data);  // Assuming the response contains an array of job listings
//   };

//   return (
//     <div className="job-portal-container">
//       <Header />
//       <SearchBar fetchJobsCustom={fetchJobsCustom} />
      
//       {/* Map over jobList to render JobCard for each job */}
//       {jobList.length > 0 ? (
//         jobList.map((job, index) => (
//           <JobCard
//             key={index}
//             title={job.title}
//             company={job.company}
//             type={job.type}
//             location={job.location}
//             experience={job.experience}
//             skills={job.skills}
//             postedOn={job.postedOn}
//             job_link={job.job_link}
//           />
//         ))
//       ) : (
//         <p>No jobs available</p>
//       )}
//     </div>
//   );
// };

// export default JobPortal;


//dummy data setup


// JobPortal/JobPortal.jsx
// import React, { useEffect, useState } from 'react';
// import Header from './Header';
// import SearchBar from './SearchBar';
// import JobCard from './JobCard';
// import jobData from './dummy';  // Import dummy data

// const JobPortal = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     setJobs(jobData);  // Load dummy data on component mount
//   }, []);

//   return (
//     <div className="job-portal-container">
//       <Header />
//       <SearchBar />
//       {jobs.map((job) => (
//         <JobCard key={job.id} {...job} />
//       ))}
//     </div>
//   );
// };

// export default JobPortal;




// JobPortal/JobPortal.jsx
import React, { useEffect, useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import JobCard from './JobCard';
import jobData from './dummy';  // Import the dummy data

const JobPortal = () => {
  const [jobs, setJobs] = useState(jobData);  // Initialize with dummy data
  const [filteredJobs, setFilteredJobs] = useState(jobData);  // This will hold the filtered jobs
  
  // Function to filter jobs based on search criteria
  const fetchJobsCustom = (criteria) => {
    const filtered = jobs.filter(job => {
      return (
        (criteria.title ? job.title.toLowerCase().includes(criteria.title.toLowerCase()) : true) &&
        (criteria.location ? job.location.toLowerCase().includes(criteria.location.toLowerCase()) : true) &&
        (criteria.experience ? job.experience.toLowerCase().includes(criteria.experience.toLowerCase()) : true) &&
        (criteria.type ? job.type.toLowerCase().includes(criteria.type.toLowerCase()) : true)
      );
    });
    setFilteredJobs(filtered);
  };

  useEffect(() => {
    setJobs(jobData);  // On mount, set the initial job list
  }, []);
  
  return (
    <div className="job-portal-container">
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />  {/* Pass the filtering function to SearchBar */}
      {filteredJobs.length === 0 ? (
        <p>No jobs found matching the criteria</p>
      ) : (
        filteredJobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))
      )}
    </div>
  );
};

export default JobPortal;

