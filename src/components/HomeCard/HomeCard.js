import React from 'react';
import "./HomeCard.css"
import { Link } from "react-router-dom";

export const HomeCard = () => {
  return <div className=''>
    <div className="card home-card">
      <div className="card-body">
        <div className='row' style={{ fontSize: "13px" }}>
          <div className='col fw-bold'>
            <div className='row py-3'>
              <div role='button' className='d-flex'>
                <ion-icon name="business"></ion-icon>
                <div className='pl-2'> <Link to="/company" style={{ textDecoration: 'none', color: "black" }}>COMPANY</Link></div>
              </div>
            </div>
            <div role='button' className='row py-3'>
              <div className='d-flex'>
                <ion-icon name="pulse"></ion-icon>
                <div className='pl-2'>INVESTMENT FIRM</div>
              </div>
            </div>
            <div role='button' className='row py-3'>
              <div className='d-flex'>
                <ion-icon name="person"></ion-icon>
                <div className='pl-2'>PERSON</div>
              </div>
            </div>
          </div>
          <div className='col fw-bold'>
            <div role='button' className='row py-3'>
              <div className='d-flex'>
                <ion-icon name="school"></ion-icon>
                <div className='pl-2'>SCHOOL</div>
              </div>
            </div>
            <div role='button' className='row py-3'>
              <div className='d-flex'>
                <ion-icon name="school"></ion-icon>
                <div className='pl-2'>INDIVIDUAL INVESTOR</div>
              </div>
            </div>
            <div role='button' className='row py-3'>
              <div className='d-flex'>
                <ion-icon name="calendar"></ion-icon>
                <div className='pl-2'>EVENT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Link to="/database" type="button" style={{ textDecoration: 'none', color: "white" }} className="btn btn-primary database">Database Content</Link>
  </div>;
};
