import React from 'react'
import { QUERY_ALL_PRODUCTS, QUERY_CATEGORIES } from '../../utils/queries';
import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, ADD_CATEGORY, UPDATE_CATEGPRY, DELETE_CATEGORY } from '../../utils/actions';

function AdminPanel() {
  return (
    <div>
        <h1 className="p-5">What would you like to do today?</h1>
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
  )
}

export default AdminPanel;