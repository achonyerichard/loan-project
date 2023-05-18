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
import Withdrawals from "./pages/Withdrawals";
import ViewWithdrawal from "./pages/ViewWithdrawal";
import Dividend from "./pages/Dividend";

function App() {
  const { user } = useAuthContext();

  return (
    <Routes>
      <Route path="/login" element={!user ? <SignIn /> : <Navigate to="/profile" />} />
      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/profile" />}
      />
      <Route path="/unauthorized" element={<UnAuthorized />} />
      <Route path="/" element={ <Layout /> }>
        <Route
          path="profile"
          index
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
        {!user?.admin && (
          <Route path="home" element={user ? <Home /> : <Navigate to="/login" />} />
        )}
        <Route
          path="contributions"
          element={user ? <Contributions /> : <Navigate to="/login" />}
        />
        <Route
          path="withdraw"
          element={user ? <Withdrawals /> : <Navigate to="/login" />}
        />
        <Route
          path="view-contribution"
          element={user ? <ViewContributions /> : <Navigate to="/login" />}
        />
        <Route
          path="view-withdrawals"
          element={user ? <ViewWithdrawal /> : <Navigate to="/login" />}
        />
        <Route
          path="view-loans"
          element={user ? <ViewLoans /> : <Navigate to="/login" />}
        />
        <Route
          path="users"
          element={user ? <ViewUsers /> : <Navigate to="/login" />}
        />
        <Route
          path="dividend"
          element={user ? <Dividend /> : <Navigate to="/login" />}
        />
      </Route>
    </Routes>
  );
}

export default App;
