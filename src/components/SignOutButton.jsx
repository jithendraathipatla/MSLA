import React from "react";
import { useMsal } from "@azure/msal-react";

/**
 * Renders a sign-out button
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = (logoutType) => {
        if (logoutType === "popup") {
            instance.logoutPopup({
                postLogoutRedirectUri: "/",
                mainWindowRedirectUri: "/"
            });
        } 
    }
    return (
        <Button variant="warning" className="ml-auto" drop="left" title="Sign Out" onClick={() => handleLogout("popup")}>
           Sign out
        </Button>
    )
}