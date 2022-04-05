/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react";
import Navbar from "react-bootstrap/Navbar";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import MainLogo from '../logo.png';

/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props 
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            {/* <div style={{textAlign:"center", padding:"10px 0px 50px 0px"}}><img src={MainLogo} height={65} width={400}/></div> */}
            {/* <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">Hitachi Energy</a>
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
            </Navbar> */}
            <br />
            <br />
            <div style={{display:"flex", justifyContent:"space-between"}}>
             <div></div>
             <div style={{boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)", padding: "90px 86px", textAlign:"center"}}>
                <h6>Please Login using Hitachi Energy Credentials</h6> 
                <br/>
                
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
                <br/>
                <br/>
                {props.children}
             </div>
             <div></div>
            </div>
            
        </>
    );
};
