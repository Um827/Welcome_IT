import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import ReadMore from "./pages/readmore/ReadMore";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="readmore" element={<ReadMore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
