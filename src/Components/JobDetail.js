import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));


  useEffect(() => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
      .then((response) => {
        console.log(response.data);
        setJob(response.data);
      })
      .catch((error) => {
        console.error('Error fetching job data:', error);
      });
  }, [id]);
  console.log(id)
  console.log(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`);

  const handleStatus = (params) => {
    if(params === 1){
      return (<span className="text-green-500 font-bold">Open Hiring</span>)
    }else if(params === 0){
      return (<span className="text-red-500 font-bold">Closed Hiring</span>)
    }
  }
  
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
    }

    const formatRupiah = (angka) => {
      const formattedRupiah = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0, 
      }).format(angka);
  
      return formattedRupiah;
    };


  if (!job) {
    return <LoadingPage/>
  }
    return(    
<>
  <section className="text-gray-700 body-font overflow-hidden bg-white">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex overflow-hidden flex-wrap">
        <img
          className="lg:w-1/2 w-full object-contain object-center rounded border border-gray-200"
          src={job.company_image_url} alt=""
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            Status: {handleStatus(job.job_status)}
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {job.title}
          </h1>
          <div className="flex mb-4">
            <span className="flex items-center">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-gray-600 ml-3">4 Reviews</span>
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
              <Link className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </Link>
              <Link className="ml-2 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </Link>
              <Link className="ml-2 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </Link>
            </span>
          </div>
          <p className="leading-relaxed">
            {job.company_name},{job.company_city}
          </p><br/>
          <p className="leading-relaxed">
            Job Type : {job.job_type}
          </p>
          <p className="leading-relaxed">
            Contract Type : {job.job_tenure}
          </p>
          <p className="leading-relaxed">
            Job Qualification : {truncateText(job.job_qualification,200)}
          </p><br/>
          <p>Description : {truncateText(job.job_description ,200)}</p><br/>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">
              {formatRupiah(job.salary_min)} s.d <br/>{formatRupiah(job.salary_max)}
            </span>
            <button className="inline-flex ml-auto text-white bg-red-500 border-0 py-4 px-8 focus:outline-none hover:bg-red-600 rounded">
              Apply Now 
              <svg className="w-3.5 h-3.5 ml-2 mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
    )
}

export default JobDetail