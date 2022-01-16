import React, { useState } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { PageLayout } from "./components/PageLayout";
import { ProfileData } from "./components/ProfileData";
import { callMsGraph } from "./graph";
import Button from "react-bootstrap/Button";
import "./styles/App.css";
import AllUserData from "./components/data";

/**
 * Renders information about the signed-in user or a button to retrieve data about the user
 */
const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken).then((response) =>
          setGraphData(response)
        );
      });
  }
 
  let button1 = "";
  let button2 = "";
  let country = "";
  const final2_0_v_URL = () => {
    let result = AllUserData.filter(t=>t.username === accounts[0].username);
    result.map((i)=> {
      button1 = i.buttonURL2_0_v;
      button2 = i.buttonURL2_1_v;
      country = i.country;
    })
  }
  final2_0_v_URL();

  return (

    (
      <>
        <h5 className="card-title">Welcome {accounts[0].name}</h5>
        <h6 className="card-title">
          <span style={{ color: "green" }}>Your Email'Id:</span>{" "}
          {accounts[0].username}
        </h6>
        
        {/* {graphData ? 
                <ProfileData graphData={graphData} />
                :
                <Button variant="secondary" onClick={RequestProfileData}>Request Profile Information</Button>
            } */}
        
        <div className="tab-content">
          <div></div>
          <div>
            <br />
            <table style={{ borderSpacing: "0px" }}>
              <tr>
                <th>2.0 V</th>
                <th>2.1 V</th>
              </tr>
              <tr>
                <td><button className="prestigecopyabcde" onClick={() => window.open(button1)}>{country} - 2.0-version</button></td>
                <td><button className="prestigecopyabcde" onClick={() => window.open(button2)}>{country} - 2.1-version</button></td>
                
              </tr>
            </table>
          </div>
          <div></div>
        </div>
        <br />
        <br />
      </>
    )
  );
};

/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
const MainContent = () => {
  return (
    <div className="App">
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <h6 className="card-title">
          Your Profile Name will get displayed here after signingIn
        </h6>
      </UnauthenticatedTemplate>
    </div>
  );
};

export default function App() {
  return (
    <PageLayout>
      <MainContent />
    </PageLayout>
  );
}
