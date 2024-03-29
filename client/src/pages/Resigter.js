import React, {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import {  useNavigate } from 'react-router-dom';
import {  message } from 'antd';


const Resigter =  () => {
    const [credentials, setCredentials] = useState({name: "", email: "", password: ""})
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        try {
            const response = await fetch("http://localhost:8080/api/user/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            const textResponse = await response.text(); // Read the response as plain text
            console.log(textResponse); // Log the response
            if (textResponse) {
                navigate("/admin/login");
                message.success("Account created successfully");
            } else {
                message.error("Something went wrong: " + textResponse);
            }
        } catch (error) {
            console.error("Error during registration:", error);
            message.error("Something went wrong");
        }
    }
    
  
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        navigate('/admin/login');
      }
    }, [navigate]);

  return (
    <>
      <div className="register">
        <div className="register-form">
          {/* <h1>Restaurant Management System</h1> */}
          <h3 className='text-center fs-2 fw-bold'>Fill the Form To Register</h3>
          <form onSubmit={handleSubmit} style={{marginTop: "30px"}}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label center1 fw-bold fs-5">
                Name
              </label>
              <input
                type="text"
                className="form-control custom-width center1"
                id="Name"
                name="name"
                onChange={onChange}
                placeholder="Enter your Name"
              />
            </div>
            <div className="mb-3 fw-bold fs-5">
              <label htmlFor="user" className="form-label center1 ">
                Email
              </label>
              <input
                type="email"
                className="form-control custom-width center1"
                id="user"
                name="email"
                onChange={onChange}
                placeholder="Enter the Email"
              />
            </div>
            <div className="mb-3 fw-bold fs-5">
              <label htmlFor="Password" className="form-label center1">
                Password
              </label>
              <input
                type="password"
                className="form-control custom-width center1"
                id="Password"
                name="password"
                onChange={onChange}
                placeholder="Enter your Password"
              />
            </div>
            <button type="submit" className="btn btn-primary center button ">
              Register
            </button>
            <div className="d-flex justify-content-between pt-4 fs-6">
            <p>
              Already Registered? Please <Link to="/admin/login">Login Here</Link>
            </p>
          </div>  
          </form>
         
        </div>
      </div>
    </>
  );
};

export default Resigter;
