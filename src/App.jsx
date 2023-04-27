import { Routes, Route } from "react-router-dom";
import SignIn from "../src/pages/login";
import Register from "./pages/register";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
