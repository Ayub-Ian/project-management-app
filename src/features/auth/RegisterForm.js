import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "./AuthLayout";
import user_icon from "../../assets/user-icon.svg";
import lock_icon from "../../assets/lock-icon.svg";
import web_icon from "../../assets/web-icon.svg";
import tick_icon from "../../assets/tick-icon.svg";

function RegisterForm() {

    const [formData, setformData] = useState({
        username: '',
        email: '',
        password: ''
    })
    

    function resetForm() {
        setformData({
            username: '',
            email: '',
            password: ''
        })
    }
  
    function handleChange(e) {
        let { name , value } = e.target
        setformData({...formData,
            [name] : value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/user/create", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            resetForm()
        })
    }

  return (
    <div>
      <AuthLayout>
        <h3 className="tw-text-white">Register to join the team.</h3>
        <form className="tw-flex tw-flex-col tw-gap-3" onSubmit={handleSubmit} autoComplete="off">
          <div className="tw-relative">
            <img
              className="tw-absolute tw-top-2.5 tw-left-3"
              src={user_icon}
              alt="user icon"
            />
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={formData.username}
              className="tw-w-full tw-h-full tw-bg-transparent tw-border tw-border-grey-100 tw-rounded-lg tw-pr-6 tw-pl-9 tw-py-2 placeholder:tw-text-sm tw-text-white tw-outline-none"
              placeholder="Enter username"
            />
          </div>
          <div className="tw-relative">
            <img
              className="tw-absolute tw-top-2.5 tw-left-3"
              src={web_icon}
              alt="user icon"
            />
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={formData.email}
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
              onChange={handleChange}
              value={formData.password}
              className="tw-w-full tw-h-full tw-bg-transparent tw-border tw-border-grey-100 tw-rounded-lg tw-pr-6 tw-pl-9 tw-py-2 placeholder:tw-text-sm tw-text-white tw-outline-none"
              placeholder="Enter password"
            />
          </div>
          {/* <div className="tw-relative">
            <img
              className="tw-absolute tw-top-2.5 tw-left-3"
              src={tick_icon}
              alt="user icon"
            />
            <input
              type="password"
              name="confirmPassword"
              onChange={e => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              className="tw-w-full tw-h-full tw-bg-transparent tw-border tw-border-grey-100 tw-rounded-lg tw-pr-6 tw-pl-9 tw-py-2 placeholder:tw-text-sm tw-text-white tw-outline-none"
              placeholder="Confirm password"
            />
          </div> */}
          <input
            className=" tw-rounded-lg tw-bg-accent-100 tw-px-8 tw-py-1 tw-font-medium"
            type="submit"
            value="Sign up"
          />
        </form>
        <span className=" tw-flex tw-gap-1 tw-items-center">
          <p className=" tw-text-grey-100 tw-text-sm">
            Already have an account ?
          </p>
          <Link
            to={`/login`}
            className=" tw-underline tw-text-accent-100 tw-text-sm"
          >
            Login
          </Link>
        </span>
      </AuthLayout>
    </div>
  );
}

export default RegisterForm;
