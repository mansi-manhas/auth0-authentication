import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { fetchProtectedData } from "./api/fetchProtectedData";

const App = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [data, setData] = React.useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const token = await getAccessTokenSilently();
        const result = await fetchProtectedData(token);
        setData(result);
      } catch (error) {
        console.error(error.message);
      }
    };

    if (isAuthenticated) {
      getData();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <div>
      <header>
        <h1>Welcome to Auth0 Provider</h1>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {isAuthenticated && data && <div>{data}</div>}
      </header>
    </div>
  );
};

export default App;
