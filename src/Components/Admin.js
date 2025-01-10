import React from "react";
import SideBar from "../Dashboard/Sidebar";

const Admin = () => {
    return(
<>
<SideBar/>

<section className="bg-white lg:ml-52 text-black">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="bg-gradient-to-r from-red-300 via-orange-500 to-pink-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        Welcome to
        <span className="sm:block"> Dashboard </span>
      </h1>
      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        You can Create Data, Update Data,and Change Password
      </p>
    </div>
  </div>
</section>    
</>
    )
}

export default Admin;