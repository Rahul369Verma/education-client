import React, { useContext } from 'react';
import "./Company.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Context } from '../../context';
import axios from 'axios';

export const Company = () => {

  const { state, dispatch } = useContext(Context);

  const [name, setName] = useState(state.name || "")
  const [description, setDescription] = useState(state.description || "")
  const [alsoKnownAs, setAlsoKnownAs] = useState(state.alsoKnownAs || "")
  const [legalName, setLegalName] = useState(state.legalName || "")
  const [numberOfEmployees, setNumberOfEmployees] = useState(state.numberOfEmployees || "")
  const [companyType, setCompanyType] = useState(state.companyType || "")
  const [websiteUrl, setWebsiteUrl] = useState(state.websiteUrl || "")
  const [facebookUrl, setFacebookUrl] = useState(state.facebookUrl || "")
  const [linkedInURL, setLinkedInURL] = useState(state.linkedInURL || "")
  const [twitterUrl, setTwitterUrl] = useState(state.twitterUrl || "")
  const [contactEmail, setContactEmail] = useState(state.contactEmail || "")
  const [phoneNumber, setPhoneNumber] = useState(state.phoneNumber || "")
  const [fullDescription, setFullDescription] = useState(state.fullDescription || "")
  const [errMess, setErrMess] = useState("")
  const history = useNavigate()
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })


  const getName = (e) => {
    setName(e.target.value)
  }
  const getDescription = (e) => {
    setDescription(e.target.value)
  }
  const getAlsoKnownAs = (e) => {
    setAlsoKnownAs(e.target.value)
  }
  const getLegalName = (e) => {
    setLegalName(e.target.value)
  }
  const getNumberOfEmployees = (e) => {
    setNumberOfEmployees(e.target.value)
  }
  const getCompanyType = (e) => {
    setCompanyType(e.target.value)
  }
  const getWebsiteURL = (e) => {
    setWebsiteUrl(e.target.value)
  }
  const getFacebookURL = (e) => {
    setFacebookUrl(e.target.value)
  }
  const getLinkerInURL = (e) => {
    setLinkedInURL(e.target.value)
  }
  const getTwitterURL = (e) => {
    setTwitterUrl(e.target.value)
  }
  const getContactEmail = (e) => {
    setContactEmail(e.target.value)
  }
  const getPhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }
  const getFullDescription = (e) => {
    setFullDescription(e.target.value)
  }

  const formSubmit = async (e) => {
    e.preventDefault();
    if(name === "" || description === ""){
      setErrMess("Required")
      return
    }
    let data = {
      name,
      description,
      alsoKnownAs,
      legalName,
      numberOfEmployees,
      companyType,
      websiteUrl,
      facebookUrl,
      linkedInURL,
      twitterUrl,
      contactEmail,
      phoneNumber,
      fullDescription,
      addressName: state.addressName || "",
      addressLine1: state.addressLine1 || "",
      addressLine2: state.addressLine2 || "",
      postalCode: state.postalCode || "",
      city: state.city || ""
    }
    try {
      const response = await axiosInstance.post('/api/formData', data)
      history("/database")
    } catch (error) {
      setErrMess(error.response?.data)
      console.log(error.response);
    }
  }

  const goToAddress = () => {
    let data = {
      name,
      description,
      alsoKnownAs,
      legalName,
      numberOfEmployees,
      companyType,
      websiteUrl,
      facebookUrl,
      linkedInURL,
      twitterUrl,
      contactEmail,
      phoneNumber,
      fullDescription,
    }
    dispatch({
      type: "COMMON",
      payload: data
    })
    history("/address")
  }

  return <div className='company-container'>
    <div className="shadow mb-2 p-2 bg-white rounded d-flex">
      <div className='pl-4'>
        Edit New Company
      </div>
      <button type="button" className="btn-success save-edits px-3" onClick={formSubmit}>SAVE ALL EDITS</button>
      <button type="button" className="btn btn-link cancel">Cancel</button>
    </div>
    <div className="card company-card">
      <div className='d-flex'>
        <div className='p-1' style={{ backgroundColor: "rgba(49, 177, 252, 0.877)" }}>
          <ion-icon size="large" name="menu"></ion-icon>
        </div>
        <h5 class="card-title pl-2 pt-2">Overview</h5>
      </div>
      <hr className='p-0 m-0' />
      <div className="card-body ml-3 fw-light fs-6">
        <p className='fw-light fs-6'>Profile Image</p>
        <div className='row'>
          <div className='col-1'>
            <div className='card profile-card'>
              <ion-icon style={{ width: "5rem", height: "5rem", color: "grey", margin: "auto auto auto auto" }} name="business"></ion-icon>
            </div>
          </div>
          <div className='col-8 ml-6'>
            <ul className='list-items'>
              <li>square images work best (at least 100 x 100 pixels)</li>
              <li>crop your images before you upload</li>
              <li>Image uploads are limited to 2MB</li>
              <li>Accepted image types: JPG, PNG</li>
            </ul>
          </div>
        </div>
        <div>
          <label>Name *  <label style={{color: "red"}}>{errMess}</label></label>
          <input value={name} onChange={getName} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
          <label>Description *  <label style={{color: "red"}}>{errMess}</label></label>
          <input value={description} onChange={getDescription} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
          <label>Also Known As</label>
          <input value={alsoKnownAs} onChange={getAlsoKnownAs} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
          <label>Legal Name</label>
          <input value={legalName} onChange={getLegalName} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
          <div className='row mb-3'>
            <div className='col-4'>
              <label>Founded Date Year</label>
              <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className='col-4'>
              <label>Month</label>
              <div className="form-control mb-3">
                <select className='fw-light fs-6' id="inputGroupSelect02">
                  <option selected>Choose...</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                </select>
              </div>
            </div>
            <div className='col-4'>
              <label>Day</label>
              <div className="form-control mb-3">
                <select className='fw-light fs-6' id="inputGroupSelect02">
                  <option selected>Choose...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
          <label>Number of Employees</label>
          <input value={numberOfEmployees} onChange={getNumberOfEmployees} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
          <label>Company Type</label>
          <input value={companyType} onChange={getCompanyType} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
          <label>Website URL</label>
          <input value={websiteUrl} onChange={getWebsiteURL} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
          <label>Facebook URL</label>
          <input value={facebookUrl} onChange={getFacebookURL} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
          <label>LinkedIn URL</label>
          <input value={linkedInURL} onChange={getLinkerInURL} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
          <label>Twitter URL</label>
          <input value={twitterUrl} onChange={getTwitterURL} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
          <label>Contact Email</label>
          <input value={contactEmail} onChange={getContactEmail} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
          <label>Phone Number</label>
          <input value={phoneNumber} onChange={getPhoneNumber} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
          <label>Full Description</label>
          <input value={fullDescription} onChange={getFullDescription} type="text" className="form-control mb-3" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </div>
    </div>
    <div className="card company-card">
      <div className='d-flex'>
        <div className='p-1' style={{ backgroundColor: "rgba(49, 177, 252, 0.877)" }}>
          <ion-icon size="large" name="locate"></ion-icon>
        </div>
        <h5 className="card-title pl-2 pt-2">Overview</h5>
      </div>
      <hr className='p-0 m-0' />
      <div className="card-body ml-3 fw-light fs-6">
        {
          state.filled ?
            <button onClick={goToAddress} type="button" to="/address" className="btn btn-success">Edit</button> :
            <button onClick={goToAddress} type="button" to="/address" className="btn btn-primary">Create New Headquaters</button>
        }
      </div>
    </div >
    <div className="card company-card">
      <div className='d-flex'>
        <div className='p-1' style={{ backgroundColor: "orange" }}>
          <ion-icon size="large" name="locate"></ion-icon>
        </div>
        <h5 class="card-title pl-2 pt-2">Industries</h5>
      </div>
      <hr className='p-0 m-0' />
      <div className="card-body ml-3 fw-light fs-6">
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping"><ion-icon name="search"></ion-icon></span>
          <input type="text" className="form-control" placeholder="Find a Industry to add" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>
      </div>
    </div >
    <div className="card company-card">
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
          <input type="text" className="form-control" placeholder="Find a Diversity Spotlight (US Only) to add" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>
      </div>
    </div >
    <div className="card company-card">
      <div className='d-flex'>
        <div className='p-1' style={{ backgroundColor: "rgb(47, 224, 255)" }}>
          <ion-icon size="large" name="person"></ion-icon>
        </div>
        <h5 class="card-title pl-2 pt-2">Founders</h5>
      </div>
      <hr className='p-0 m-0' />
      <div className="card-body ml-3 fw-light fs-6">
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping"><ion-icon name="search"></ion-icon></span>
          <input type="text" className="form-control" placeholder="Find a Founder to add" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>
        <button type="button" className="btn btn-primary mt-3">Create New Founder</button>
      </div>
    </div>
    <div className="card company-card">
      <div className='d-flex'>
        <div className='p-1' style={{ backgroundColor: "purple" }}>
          <ion-icon size="large" name="flag"></ion-icon>
        </div>
        <h5 className="card-title pl-2 pt-2">IPO & Stock Price</h5>
      </div>
      <hr className='p-0 m-0' />
      <div className="card-body ml-3 fw-light fs-6">
        <button type="button" className="btn btn-primary">Create New IPO</button>
      </div>
    </div>
  </div >;
};
