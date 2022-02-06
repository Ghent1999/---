import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  function navigationHistory() {
    navigate("/history");
  }
  return (
    <header id="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar-bottom">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mt-4">
                <a className="navbar-brand" href="">
                  <img src="assets/images/Cow.png" alt="" />
                </a>
              </div>
              <div className="mt-4">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="navbar-collapse justify-content-center collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav d-lg-flex justify-content-between align-items-center">
                    <li>
                      <button className="navbar-close">
                        <i className="mdi mdi-close" />
                      </button>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        type="button"
                        onClick={navigationHistory}
                      >
                        History
                      </a>
                    </li>
                    <li className="nav-item">
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown button
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/contactus.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="social-media mt-4">
                <li>
                  <a href="#">
                    <i className="mdi mdi-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="mdi mdi-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="mdi mdi-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
