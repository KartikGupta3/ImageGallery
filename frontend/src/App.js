import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SingUp from "./Components/SingUp";
import HomePage from "./Components/HomePage";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/LogIn" element={<Login />} />
        <Route path="/SignUp" element={<SingUp />} />
      </Routes>
    </Router>
  );
}

export default App;
