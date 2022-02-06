import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoryPage from "./page/History";

function App() {
  return (
    <div className="container-scroller">
      <div className="main-panel">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/history" element={<HistoryPage />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
