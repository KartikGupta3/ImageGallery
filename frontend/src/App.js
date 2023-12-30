import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Gallery from "./Components/Gallery";
import ImageUpload from "./Components/ImageUpload";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="ImageUpload" element={<ImageUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
