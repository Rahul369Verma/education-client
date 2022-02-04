import axios from 'axios';
import React, { useEffect } from 'react';
import "./Database.css"
import { useState } from 'react';

export const Database = () => {

  const [response, setResponse] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(process.env.REACT_APP_API_URL + "/api/formData")
      setResponse(response.data)
    }
    getData()
  }, [])

  return <div>
    <div className='database-container'>
      <p className='fs-3 database-card'>Database Record</p>
      {response?.map((d, i) => {
        return <div className="card database-card">
          <div className='d-flex'>
            <div className='p-1' style={{ backgroundColor: "rgba(49, 177, 252, 0.877)" }}>
              <ion-icon size="large" name="menu"></ion-icon>
            </div>
            <h5 class="card-title pl-2 pt-2">Record {i+1}</h5>
          </div>
          <hr className='p-0 m-0' />
          <div className="card-body ml-3 fw-light fs-6">
            <div>
              <label>Name *</label>
              <p>{d.name}</p>
              <label>Description *</label>
              <p>{d.description}</p>
              <label>Also Known As</label>
              <p>{d.alsoKnownAs}</p>
              <label>Legal Name</label>
              <p>{d.legalName}</p>
              <label>Number of Employees</label>
              <p>{d.numberOfEmployees}</p>
              <label>Company Type</label>
              <p>{d.companyType}</p>
              <label>Website URL</label>
              <p>{d.websiteUrl}</p>
              <label>Facebook URL</label>
              <p>{d.facebookUrl}</p>
              <label>LinkedIn URL</label>
              <p>{d.linkedInURL}</p>
              <label>Twitter URL</label>
              <p>{d.twitterUrl}</p>
              <label>Contact Email</label>
              <p>{d.contactEmail}</p>
              <label>Phone Number</label>
              <p>{d.phoneNumber}</p>
              <label>Full Description</label>
              <p>{d.fullDescription}</p>
              <label>Address Name</label>
              <p>{d.addressName}</p>
              <label>Address Line 1</label>
              <p>{d.addressLine1}</p>
              <label>Address Line 2</label>
              <p>{d.addressLine2}</p>
              <label>Postal Code</label>
              <p>{d.postalCode}</p>
            </div>
          </div>
        </div>
      })
      }
    </div>
  </div>
};
