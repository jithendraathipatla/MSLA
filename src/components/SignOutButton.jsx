import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";
/**
 * Renders a sign-out button
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = (logoutType) => {
        if (logoutType === "popup") {
            instance.logoutPopup({
                postLogoutRedirectUri: "/html/microsoft-login/",
                mainWindowRedirectUri: "/html/microsoft-login/"
            });
        } 
    }
    return (
        <Button variant="warning" className="ml-auto" drop="left" title="Sign Out" onClick={() => handleLogout("popup")}>
           Logout
        </Button>
    )
}