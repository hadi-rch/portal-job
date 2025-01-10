import React from "react";
import shoppe from '../assets/shoppe.png';
import yamaha from '../assets/yamaha.jpg';
import astra from '../assets/astra.jpg';
import gojek from '../assets/gojek.jpg';
import toyota from '../assets/toyota.png';
import voc from '../assets/voc.png';
import suzuki from '../assets/suzuki.png';
import grab from '../assets/grab.png';
import tokopedia from '../assets/tokopedia.jpg';

const Home = () => {
	
  return (
  <>
    <div className=" w-full h-screen home bg-no-repeat bg-cover bg-left md:bg-center flex  items-center px-5 lg:px-[72px] ">
      <div className="max-w-[450px] md:max-w-[500px] lg:max-w-[600px] flex flex-col gap-7">
        <h1 className="font-bold text-[16px] lg:text-[20px] text-orange">
          GET A DREAM JOB
        </h1>
        <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold">
          Let's Find a Best Job 
        </h1>
        <p className="text-text text-[14px] lg:text-[18px]">
          DreamJob is the worldwide leader on insights about jobs and companies. 
          Search millions of jobs and get the inside scoop on companies with employee reviews, 
          personalized salary tools, and more. Hiring? Post a job for free
        </p>
      </div>
    </div>

    <div className="w-3/6 justify-center m-auto pt-10">
    <form className="flex items-center ">   
        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
            </svg>
          </div>
          <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
        </div>
        <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-black bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span className="sr-only">Search</span>
        </button>
    </form>
    </div>

    <section>
		<div class="row justify-content-center mx-56 mt-10">
			<div class="col-xl-6 col-lg-7 col-md-10 text-center">
				<div class="sec-heading center">
					<h2 className="font-bold text-[16px] lg:text-[20px] text-orange">Fitur &amp; Layanan</h2>
					<p>Job Sekeer menyediakan fitur dan layanan terlengkap. Sebuah Aplikasi recruitment end to end
						(Mulai dari perencanaan, posting lowongan, profiling, psikotes, interview hingga offering calon
						karyawan)</p>
				</div>
			</div>
		</div>

		<div className="flex flex-col mx-20 mb-20"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-20">
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center bg-blue-50 h-12 w-12 rounded-full border border-blue-100">
				<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Portal Lowongan Kerja</title><path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/></svg>
				</div>
				<div className="ml-4 mt-4">
					<h2 className="font-semibold">Portal Lowongan Kerja</h2>
				</div>
				</div>
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center bg-orange-50 h-12 w-12 rounded-full border border-orange-100">
				<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Profiling Kandidat</title><path d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/></svg>
				</div>
				<div className="ml-4 mt-4">
					<h2 className="font-semibold">Profiling Kandidat</h2>
				</div>
				</div>
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center bg-white-50 h-12 w-12 ">
				<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Psikotes Online</title><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"/></svg>
				</div>
				<div className="ml-4 mt-4">
					<h2 className="font-semibold">Psikotes Online</h2>
				</div>
				</div>
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center bg-indigo-50 h-12 w-12 rounded-full border border-indigo-100">
				<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Scoring & Test Interpretation</title><path d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"/></svg>
				</div>
				<div className="ml-4">
					<h2 className="font-semibold">Scoring & Test Interpretation</h2>
				</div>
				</div>
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center h-12 w-12">
				<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Interview</title><path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z"/></svg>
				</div>
				<div className="ml-4 mt-4">
					<h2 className="font-semibold">Interview</h2>
				</div>
				</div>
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center bg-orange-50 h-12 w-12 rounded-full border border-orange-100">
				<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Recruitment Status</title><path d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"/></svg>
				</div>			
				<div className="ml-4 mt-4">
					<h2 className="font-semibold">Recruitment Status</h2>
				</div>
				</div>
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center bg-red-50 h-12 w-12 rounded-full border border-red-100">
				<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Recruitment Database</title>
				<path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
					<path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
					<path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
					<path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
				</svg>
				</div>
				<div className="ml-4 mt-4">
					<h2 className="font-semibold">Recruitment Database</h2>
				</div>
				</div>
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center bg-indigo-50 h-12 w-12 rounded-full border border-indigo-100">
				<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Laporan</title><path d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z" /></svg>
				</div>
				<div className="ml-4 mt-4">
					<h2 className="font-semibold">Laporan</h2>
				</div>
				</div>
			</div>
			</div>	
		
	</section>

    <section>
		<div class="row justify-content-center mx-56 mt-10">
			<div class="col-xl-6 col-lg-7 col-md-10 text-center">
				<div class="sec-heading center">
					<h2 className="font-bold text-[16px] lg:text-[20px] text-orange">Popular Companies</h2>
				</div>
			</div>
		</div>

		<div className="flex flex-col mx-20 mb-20">
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-2">
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center bg-blue-50 h-12 w-12 rounded-full border border-blue-100">
				<img src={shoppe} alt="shoppe"></img>
				</div>
				<div className="ml-4 mt-4">
					<h2 className="font-semibold">PT. SHOPPE</h2>
				</div>
				</div>
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center bg-orange-50 h-12 w-12 rounded-full border border-orange-100">
				<img src={yamaha} alt="yamaha"></img>
				</div>
				<div className="ml-4 mt-4">
					<h2 className="font-semibold">PT. YMMI</h2>
				</div>
				</div>
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center bg-white-50 h-12 w-12 ">
				<img src={astra} alt="astra"></img>
				</div>
				<div className="ml-4 mt-4">
					<h2 className="font-semibold">PT. ASTRA INTERNATIONAL</h2>
				</div>
				</div>
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center bg-indigo-50 h-12 w-12 rounded-full border border-indigo-100">
				<img src={tokopedia} alt="tokopedia"></img>
				</div>
				<div className="ml-4 mt-4">
					<h2 className="font-semibold">PT. TOKOPEDIA</h2>
				</div>
				</div>
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center h-12 w-12">
				<img src={voc} alt="voc"></img>
				</div>
				<div className="ml-4 mt-4">
					<h2 className="font-semibold">PT. VOC</h2>
				</div>
				</div>
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center bg-orange-50 h-12 w-12 rounded-full border border-orange-100">
				<img src={toyota} alt="toyota"></img>
				</div>			
				<div className="ml-4 mt-4">
					<h2 className="font-semibold">PT. TMMIN</h2>
				</div>
				</div>
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center bg-red-50 h-12 w-12 rounded-full border border-red-100">
				<img src={grab} alt="grab"></img>
				</div>
				<div className="ml-4 mt-4">
					<h2 className="font-semibold">PT. GRAB</h2>
				</div>
				</div>
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center bg-indigo-50 h-12 w-12 rounded-full border border-indigo-100">
				<img src={suzuki} alt="suzuki"></img>
				</div>
				<div className="ml-4 mt-4">
					<h2 className="font-semibold">PT. SUZUKI</h2>
				</div>
				</div>
				<div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
				<div className="flex items-center justify-center bg-indigo-50 h-12 w-12 rounded-full border border-indigo-100">
				<img src={gojek} alt="gojek"></img>
				</div>
				<div className="ml-4 mt-4">
					<h2 className="font-semibold">PT. GOJEK</h2>
				</div>
				</div>
			</div>
			</div>	
		
	</section>



    </>
  );
};

export default Home;
