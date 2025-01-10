import React, { useState } from "react"
import Swal from 'sweetalert2'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
      name: "",
      email: "",
      password: "",
      image_url: "",
    });
  
    const handleInput = (event) => {
      const { name, value } = event.target;
      setInput({ ...input, [name]: value });
    };
  
    const handleRegister = (event) => {
      event.preventDefault();
  
      const { name, email, password, image_url } = input;
  
      axios
        .post("https://dev-example.sanbercloud.com/api/register", {
          name,
          email,
          password,
          image_url,
        })
        .then((res) => {
          console.log("Response:", res);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'          
            });          
        });
  };

    return (
        <>
            <form onSubmit={handleRegister} className="max-w-lg mx-auto mt-12 border rounded-lg shadow-sm hover:shadow-2xl bg-gray-50 p-4">
              <div className="mb-5">
                <label className="mt-5 block border-color: transparent border-none mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input value={input.name} onChange={handleInput} name="name" type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required />
              </div>
              <div className="mb-5">
                <label className="block mb-2 border-color: transparent border-none text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input name="email" value={input.email} onChange={handleInput} placeholder="Email" required type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
              </div>
              <div className="mb-5">
                <label className="block mb-2 border-color: transparent border-none text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input name="password" value={input.password} onChange={handleInput} placeholder="Password" required type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
              </div>
              <div className="mb-5">
                <label className="block mb-2 border-color: transparent border-none text-sm font-medium text-gray-900 dark:text-white">Image_url</label>
                <input name="image_url" value={input.image_url} onChange={handleInput} placeholder="Image URL" required type="text" id="image_url" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input id="terms" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </form>

        </>
    )}
  



export default Register
