import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Adventure from "./pages/Adventure";
import Sharedlayout from "./pages/SharedLayout";
import UnLeashAi from "./pages/UnleashAi";
import Sustainability from "./pages/Sustainability";
import AboutUs from "./pages/AboutUs";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Sharedlayout />}>
            <Route index element={<Home />} />
            <Route path="/unLeashAi" element={<UnLeashAi />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/adventure" element={<Adventure />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
