import React, { useContext } from 'react';
import { useState } from 'react';
import { Context } from '../../context';
import { Link, useNavigate } from "react-router-dom";

import "./Address.css"

export const Address = () => {

  const { state, dispatch } = useContext(Context);

  const [addressName, setAddressName] = useState(state.addressName || "")
  const [addressLine1, setAddressLine1] = useState(state.addressLine1 || "")
  const [addressLine2, setAddressLine2] = useState(state.addressLine2 || "")
  const [postalCode, setPostalCode] = useState(state.postalCode || "")
  const [city, setCity] = useState(state.city || "")

  const history = useNavigate()



  const getaddressName = (e) => {
    setAddressName(e.target.value)
  }
  const getaddressLine1 = (e) => {
    setAddressLine1(e.target.value)
  }
  const getaddressLine2 = (e) => {
    setAddressLine2(e.target.value)
  }
  const getpostalCode = (e) => {
    setPostalCode(e.target.value)
  }
  const getCity = (e) => {
    setCity(e.target.value)
  }

  const FormSubmit = () => {
    const data = {
      addressName,
      addressLine1,
      addressLine2,
      postalCode,
      city
    }
    dispatch({
      type: "FILL",
      payload: data
    })
    history("/company")
  }


  return <div className='address-container'>
    <p className='fs-3 address-card'>Add Address Details</p>
    <div className="card address-card">
      <div className='d-flex'>
        <div className='p-1' style={{ backgroundColor: "rgba(49, 177, 252, 0.877)" }}>
          <ion-icon size="large" name="menu"></ion-icon>
        </div>
        <h5 class="card-title pl-2 pt-2">Address</h5>
      </div>
      <hr className='p-0 m-0' />
      <div className="card-body ml-3 fw-light fs-6">
        <div>
          <label>Address Name</label>
          <input value={addressName} onChange={getaddressName} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
          <label>Address Line 1</label>
          <input value={addressLine1} onChange={getaddressLine1} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
          <label>Address Line 2</label>
          <input value={addressLine2} onChange={getaddressLine2} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
          <label>Postal Code</label>
          <input value={postalCode} onChange={getpostalCode} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </div>
    </div>
    <p className='fs-3 address-card'>Select the city for this address</p>
    <div className="card address-card">
      <div className='d-flex'>
        <div className='p-1' style={{ backgroundColor: "rgba(165, 122, 42, 0.63)" }}>
          <ion-icon size="large" name="locate"></ion-icon>
        </div>
        <h5 class="card-title pl-2 pt-2">Diversity Spotlight (US Only)</h5>
      </div>
      <hr className='p-0 m-0' />
      <div className="card-body ml-3 fw-light fs-6">
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping"><ion-icon name="search"></ion-icon></span>
          <input value={city} onChange={getCity} type="text" className="form-control" placeholder="Find a Diversity Spotlight (US Only) to add" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>
      </div>
    </div>
    <button onClick={FormSubmit} type="button" class="btn btn-primary continue">Continue</button>
  </div>
};
