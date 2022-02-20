import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoryPage from "./page/History";
import DataImage from "./page/DataImage";
import Gallery from "./page/Gallery";

function App() {
  return (
    <div className="container-scroller">
      <div className="main-panel">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/history" element={<HistoryPage />}></Route>
            <Route path="/data-image" element={<DataImage />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
