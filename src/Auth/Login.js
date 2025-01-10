import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {
  let navigate = useNavigate()
  const [input, setInput] = useState({
    email : "",
    password : ""
  })

  const handleInput = (event) => {
    let value = event.target.value
    let name = event.target.name

    setInput({...input, [name] : value})
  }

  const handleLogin = (event) => {
    event.preventDefault()

    let {email, password} = input
    console.log(input)

    axios.post("https://dev-example.sanbercloud.com/api/login", {email, password})
    .then((res) => {
      console.log(res)
      let data = res.data
      let { token, user} = data
      Cookies.set('token', token, {expires : 1})
      Cookies.set('user',JSON.stringify(user),{expires: 1})
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Selamat Anda Berhasil Login",
        showConfirmButton: false,
        timer: 2000
      });
      navigate("/")
      })
      .catch((error) => {
        console.log(error.message)
        Swal.fire({
          icon: "error",
          title: "Waduh...",
          text: "Login Gagal",
          footer: '<a href="#">Why do I have this issue?</a>'          
          });
          navigate("/")
        })
  }



    return (
    <>
        <form onSubmit={handleLogin} className=" max-w-sm mx-auto mt-12 border rounded-lg shadow-sm hover:shadow-2xl bg-white p-4">
            <p className="my-5 center text-center text-black font-bold text-[24px]">Login Form</p>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input name="email" value={input.email} onChange={handleInput} placeholder="Email" required type="email" id="email"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input name="password" value={input.password} onChange={handleInput} placeholder="Password" required type="password" id="password"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    </>
  )
}

export default Login