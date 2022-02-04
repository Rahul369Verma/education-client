import React from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='py-1 shadow nav-container'>
      <div className='d-flex my-1'>
        <div style={{marginRight: "1rem", marginLeft: "2rem", fontSize: "1.4rem"}}>
          <Link style={{ textDecoration: 'none', color: "black" }} to="/">Crunchbase</Link>
        </div>
        <div className='ml-3'>
          <input className="rounded-md input py-1" placeholder="Search for anything..." type="text" name="search" />
        </div>
        <div>
          <div className="relative inline-block text-left">
            <div type="button" className="inline-flex justify-center w-full rounded-md mx-2 px-2 py-1 text-white" data-dropdown-toggle="dropdown" id="dropdownMenuButton">
              Advanced
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
