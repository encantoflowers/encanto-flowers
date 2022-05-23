import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { data } = await addUser({
      variables: {
        userName: formState.userName,
        email: formState.email,
        password: formState.password,
      },
    });
    console.log(data);
    const token = data.addUser.token;
    Auth.login(token);  

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="userName" className="p-2">User Name</label> 
          <input
          
            type="userName"
            name="userName"
            id="userName"
            placeholder="User Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="email" className="p-2">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="pwd" className="p-2">Password</label>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
