import "../src/styling/App.css";
// import LoginButton from "./Components/LoginButton";
// import LogoutButton from "./Components/LogoutButton";
// import Profile from "./Components/Profile";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import AuthHandler from "./Pages/AuthHandler";

const App = () => {
  const { isLoading, error } = useAuth0();
  //gg
  return (
    <BrowserRouter>
      <main className="app-container">
        {<h1 className="app-heading">漢字 Quiz </h1>}
        {error && <p className="loading-text">Authentication Error</p>}
        {!error && isLoading && <p className="loading-text">Loading...</p>}
        {!error && !isLoading && <AuthHandler />}
      </main>
    </BrowserRouter>
  );
  // return (
  //   <HashRouter>
  //     <main className="app-container">
  //       {<h1 className="app-heading">漢字 Quiz </h1>}
  //       {error && <p>Authentication Error</p>}
  //       {!error && isLoading && <p>Loading...</p>}
  //       {!error && !isLoading && <AuthHandler />}
  //     </main>
  //   </HashRouter>
  // );
};

export default App;
//App->Profile->Pages(Routes)-> Access the other functionality.
