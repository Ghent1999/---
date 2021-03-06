import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataImage from "./page/DataImage";
import Gallery from "./page/Gallery";
import ContactPage from "./page/Contact/ContactPage";
import Person from "./page/Person";
import HistoryLearning from "./page/history-learning";
import LoginPage from "./page/Login";
import Admin from "./page/Admin";

function App() {
  return (
    <div className="container-scroller">
      <div className="main-panel">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/data-image" element={<DataImage />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route
              path="/history-learning"
              element={<HistoryLearning />}
            ></Route>
            <Route path="/person" element={<Person />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
