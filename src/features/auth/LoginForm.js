import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "./AuthLayout";
import user_icon from "../../assets/user-icon.svg";
import lock_icon from "../../assets/lock-icon.svg";

function LoginForm({loggedIn, setLoggedIn}) {

    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        email : "",
        password : ""
    })

    const [error, setError] =  useState("")

    useEffect(()=>{
      if(loggedIn){
          navigate('/projects')
      }
  }, [loggedIn, navigate])

    function resetForm() {
        setLoginData({
            email : "",
            password : ""  
        })
    }

    function handleChange(e) {
        let {name, value} = e.target
        setLoginData({
            ...loginData,
            [name] :  value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
   
        fetch("http://localhost:9292/user/login", {
            method: "POST",
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(loginData)
        })
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            if (data.error) {
                setError(data.error)
            } else {
              localStorage.setItem('loggedIn', true)
              localStorage.setItem('user', JSON.stringify(data))
              resetForm() 
              setLoggedIn(true)
              navigate('/projects')
            }

        })
    }

  return (
    <div>
      <AuthLayout>
        <h3 className="tw-text-white">Welcome, please sign in.</h3>
        {error ? <span className=" tw-text-sm tw-text-red-600 tw-w-72 tw-text-center">{error}</span>:null}
        <form onSubmit={handleSubmit} className="tw-flex tw-flex-col tw-gap-3" autoComplete="off">
          <div className="tw-relative">
            <img
              className="tw-absolute tw-top-2.5 tw-left-3"
              src={user_icon}
              alt="user icon"
            />
            <input
              type="text"
              autoFocus={true}
              name="email"
              value={loginData.email}
              onChange={handleChange}
              className="tw-w-full tw-h-full tw-bg-transparent tw-border tw-border-grey-100 tw-rounded-lg tw-pr-6 tw-pl-9 tw-py-2 placeholder:tw-text-sm tw-text-white tw-outline-none"
              placeholder="Enter email"
            />
          </div>
          <div className="tw-relative">
            <img
              className="tw-absolute tw-top-2.5 tw-left-3"
              src={lock_icon}
              alt="user icon"
            />
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="tw-w-full tw-h-full tw-bg-transparent tw-border tw-border-grey-100 tw-rounded-lg tw-pr-6 tw-pl-9 tw-py-2 placeholder:tw-text-sm tw-text-white tw-outline-none"
              placeholder="Enter password"
            />
          </div>
          <input
            className=" tw-rounded-lg tw-bg-accent-100 tw-px-8 tw-py-1 tw-font-medium"
            type="submit"
            value="Sign in"
          />
        </form>
        <span className=" tw-flex tw-gap-1 tw-items-center">
          <p className=" tw-text-grey-100 tw-text-sm">
            Don't have an account ?
          </p>
          <Link
            to={`/register`}
            className=" tw-underline tw-text-accent-100 tw-text-sm"
          >
            Sign up
          </Link>
        </span>
      </AuthLayout>
    </div>
  );
}

export default LoginForm;
