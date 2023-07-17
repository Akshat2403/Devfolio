import { Routes, Route } from "react-router-dom";
import Me from "./pages/me";
import Error404 from "./pages/404";
import Home from "./pages/home";
import Work from "./pages/work";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/me" element={<Me />} />
      <Route path="/work" element={<Work />} />
      <Route path="*" component={<Error404 />} />
    </Routes>
  );
}

export default App;
