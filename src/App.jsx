import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../src/pages/login";
import Register from "./pages/register";
import Home from "./pages/Home";
import Layout from "./components/Layout";

import { useAuthContext } from "./hooks/useAuthContext";
import Contributions from "./pages/Contributions";
import Profile from "./pages/Profile";
import ViewContributions from "./pages/ViewContribution";
import UnAuthorized from "./pages/Unauthorized";
import ViewLoans from "./pages/ViewLoans";
import ViewUsers from "./pages/ViewUsers";

function App() {
  const { user } = useAuthContext();

  return (
    <Routes>
      <Route index element={!user ? <SignIn /> : <Navigate to="profile" />} />
      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="profile" />}
      />
      <Route path="/unauthorized" element={<UnAuthorized />} />
      <Route path="/" element={user ? <Layout /> : <Navigate to="/" />}>
        <Route
          path="profile"
          element={user ? <Profile /> : <Navigate to="/" />}
        />
        {!user?.admin && (
          <Route path="home" element={user ? <Home /> : <Navigate to="/" />} />
        )}
        <Route
          path="contributions"
          element={user ? <Contributions /> : <Navigate to="/" />}
        />

        <Route
          path="view-contribution"
          element={user ? <ViewContributions /> : <Navigate to="/" />}
        />
         <Route
          path="view-loans"
          element={user ? <ViewLoans /> : <Navigate to="/" />}
        />
          <Route
          path="users"
          element={user ? <ViewUsers /> : <Navigate to="/" />}
        />
      </Route>
    </Routes>
  );
}

export default App;
