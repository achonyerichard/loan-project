import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../src/pages/login";
import Register from "./pages/register";
import Home from "./pages/Home";
import Layout from "./components/Layout";

import { useAuthContext } from "./hooks/useAuthContext";
import Contributions from "./pages/Contributions";
import Profile from "./pages/Profile";

function App() {
 

  const { user } = useAuthContext();

  return (
    <Routes>
      <Route index element={!user ?<SignIn /> :<Navigate to="home"/>} />
      <Route path="/register" element={!user ?<Register />: <Navigate to="home"/>} />
      <Route path="/" element={user ?<Layout />: <Navigate to="/"/>}>
        <Route path="home" element={user ?<Home />: <Navigate to="/"/>} />
        <Route path="contributions" element={user ?<Contributions />: <Navigate to="/"/>} />
        <Route path="profile" element={user ?<Profile />: <Navigate to="/"/>} />
      </Route>
    </Routes>
  );
}

export default App;
