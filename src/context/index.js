import React from "react";
import { useReducer, createContext, useEffect } from "react";


// initial State
const initialState = {
    name: null,
    description: null,
    alsoKnownAs: null,
    legalName: null,
    numberOfEmployees: null,
    companyType: null,
    websiteUrl: null,
    facebookUrl: null,
    linkedInURL: null,
    twitterUrl: null,
    contactEmail: null,
    phoneNumber: null,
    fullDescription: null,
    filled: false,
    addressName: null,
    addressLine1: null,
    addressLine2: null,
    postalCode: null,
    city: null
}

// create Context
const Context = createContext()

// root reducer
const rootReducer = (state, action) => {
    switch (action.type) {
        case "FILL":
            let address = action.payload
            return {
                ...state, filled: true, addressName: address.addressName, addressLine1: address.addressLine1,
                addressLine2: address.addressLine2, postalCode: address.postalCode, city: address.city
            }
        case "COMMON":
            let data = action.payload
            return{
                ...state, name: data.name, description: data.description, alsoKnownAs: data.alsoKnownAs, legalName: data.legalName,
                numberOfEmployees: data.numberOfEmployees, companyType: data.companyType, webkitURL: data.webkitURL,
                facebookUrl: data.facebookUrl, linkedInURL: data.linkedInURL, twitterUrl: data.twitterUrl, contactEmail: data.contactEmail,
                phoneNumber: data.phoneNumber, fullDescription: data.fullDescription
            }
        default:
            return state
    }
}

// context Provider
const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState)
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }