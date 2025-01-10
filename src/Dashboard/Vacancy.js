import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingPage from '../Components/LoadingPage';


const Vacancy = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [filter, setFilter] = useState({
    title: "",
    company_name: "",
    company_city: "",
  });
  const [filterBy, setFilterBy] = useState("title");
  
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleChangeFilter = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };
 
  const handleFilter = (event) => {
    event.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    try {
      const result = await axios.get(
        'https://dev-example.sanbercloud.com/api/job-vacancy'
      );
      const data = result.data.data;
      const filterData = data.filter((res) => {
        return (
          res.title.toLowerCase().includes(filter.title.toLowerCase()) &&
          res.company_name
            .toLowerCase()
            .includes(filter.company_name.toLowerCase()) &&
          res.company_city
            .toLowerCase()
            .includes(filter.company_city.toLowerCase())
        );
      });
      if (filterData.length === 0) {
        setData([]);
        console.log("Sorry, no data");
      } else {
        setData(filterData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    axios
      .get('https://dev-example.sanbercloud.com/api/job-vacancy')
      .then((response) => {
        setData(response.data.data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  }, []);

  const handleFilterBy = (event, value) => {
    event.preventDefault();
    setFilterBy(value);
    setFilter({ ...filter, title: "", company_name: "", company_city: "" }); // Reset semua nilai filter saat mengubah filterBy
  };

  if (loading) {
    return <LoadingPage/> 
  }

  const formatRupiah = (angka) => {
    const formattedRupiah = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0, 
    }).format(angka);

    return formattedRupiah;
  };
  

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
    }


  return (
<>
{/* <Link className='flex' to={'/home'}>
<button className="border-solid bg-blue-700 py-2 px-4 rounded-md m-4 text-white">
  Back
  </button>
</Link> */}
<div className='text-center pt-32'>
  <h1 className=' text-5xl font-bold'>
    Search Your Future
  </h1><br/>
  <p className=' text-xl text-gray-400'>Explore the job that suits to you</p>
</div>
<div className='m-10'>
  <div className="flex justify-center items-center h-screen -mt-60 -mb-48">
  <form onSubmit={handleFilter} className="w-1/2 flex items-center mr-72 md:ml-40 lg:mr-20">
  <label htmlFor="default-search" className="text-lg text-gray-900 font-bold mb-3">
  </label>
  <div className="relative flex items-center">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    {filterBy === "title" && (
        <input
          type="text"
          name="title"
          value={filter.title}
          onChange={handleChangeFilter}
          id="default-search"
          className="block md:w-96 lg:w-96 sm:w-96 w-96 p-4 pl-10 text-sm border rounded-lg bg-white border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search job here..."
          required
        />
      )}
      {filterBy === "company_name" && (
        <input
          type="text"
          name="company_name"
          value={filter.company_name}
          onChange={handleChangeFilter}
          id="default-search"
          className="block md:w-96 lg:w-96 sm:w-96 w-96 p-4 pl-10 text-sm border rounded-lg bg-white border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search company name here..."
          required
        />
      )}
      {filterBy === "company_city" && (
        <input
          type="text"
          name="company_city"
          value={filter.company_city}
          onChange={handleChangeFilter}
          id="default-search"
          className="block md:w-96 lg:w-96 sm:w-96 w-96 p-4 pl-10 text-sm border rounded-lg bg-white border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search company city here..."
          required
        />
      )}
    <button
      type="submit"
      className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
    >
      Search
    </button>
  </div>
  <div className="relative ml-2">
    <button
      onClick={toggleDropdown}
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      type="button"
    >
      Filter By     
      <svg
        className="w-2.5 h-2.5 ml-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
      </svg>
    </button>
    {isDropdownOpen && (
        <div
          className={`z-10 bg-white divide-y  divide-gray-100 rounded-lg shadow absolute mt-2 transition-all ${
            isDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95'
          }`}
        >
          <ul className="bg-white shadow border text-white rounded-lg p-3">
            <li className="border rounded-lg text-center m-2">
            <button
                  onClick={(event) => handleFilterBy(event, "title")}
                  className={`${
                    filterBy === "title" ? "bg-blue-700" : "bg-blue-600"
                  } w-full hover:bg-blue-700 rounded-lg px-3 `}
                >
                  Title
                </button>
            </li>
            <li className="border rounded-lg text-center m-2">
            <button
                  onClick={(event) => handleFilterBy(event, "company_name")}
                  className={`${
                    filterBy === "company_name" ? "bg-blue-700" : "bg-blue-600"
                  } w-full hover:bg-blue-700 rounded-lg px-3`}
                >
                  Company Name
                </button>
            </li>
            <li className="border rounded-lg text-center m-2">
            <button
                  onClick={(event) => handleFilterBy(event, "company_city")}
                  className={`${
                    filterBy === "company_city" ? "bg-blue-700" : "bg-blue-600"
                  } w-full hover:bg-blue-700 rounded-lg px-3`}
                >
                  Company City
                </button>
            </li>
          </ul>
        </div>
      )}
  </div>
</form>

    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-6 mb-80 mt-20">
        {data.map((res, index) => (
            <div key={res.id} className="max-w-sm shadow-2xl border-2 rounded-md bg-yellow-100 border-gray-100 my-4">
                <Link to={`/vacancy/job-detail/${res.id}`} >
                  <div className='bg-white overflow-hidden'>
                    <img className="rounded-t-lg w-full h-56  object-contain" src={res.company_image_url} alt="" />
                  </div>  
                </Link>
                <div className="p-5">
                    <Link to={`/vacancy/job-detail/${res.id}`} >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight  hover:underline text-red-950">{res.title}</h5>
                    </Link>
                    <p className="mb-3 font-normal text-lime-950">
                       {res.company_name}, {res.job_type}
                    </p>
                    <p className="mb-3 font-normal text-green-950">
                       {truncateText(res.job_qualification,50)}
                    </p>
                    <h1 className="text-cyan-950 font-bold text-xl">
                    {res.salary_min || res.salary_max
                      ? `${formatRupiah(res.salary_min)} s.d ${formatRupiah(res.salary_max)}`
                      : 'Rp. 0'}
                    </h1><br></br>
                    <Link to={`/vacancy/job/${res.id}`} >
                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                        Detail job
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                    </Link>
                </div>
            </div>
        ))}
    </div>
</div>
</>
  );
};

export default Vacancy;
