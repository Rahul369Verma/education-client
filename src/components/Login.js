import { useContext, useState } from "react"
import axios from "axios"
import React from 'react'
import { useHistory } from "react-router-dom";


const Login = () => {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })



  const getEmail = (e) => {
    setEmail(e.target.value)
  }
  const getPassword = (e) => {
    setName(e.target.value)
  }
  const formSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
    }
    try {

      const response = await axiosInstance.post('api/formData', data)
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div className="whole">
      <div className="outer-div">
        <form className="inner-div" onSubmit={formSubmit}>
          <h3>Log in</h3>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={getEmail}
              className="form-control" placeholder="Enter email" autoComplete="on" />
          </div>

          <div className="form-group">
            <label>Name</label>
            <input type="text" value={name} onChange={getPassword}
              className="form-control" placeholder="Enter Name" autoComplete="on" />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
