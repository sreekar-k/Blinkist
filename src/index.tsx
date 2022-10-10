import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.render(
  <Auth0Provider
  domain="dev-tpvs73bz.us.auth0.com"
  clientId="DgtiWuLflb0XZlTzsO3GVGJ7gW84lNtZ"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App />
      </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);

reportWebVitals();
