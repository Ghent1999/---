export default function NavBar() {
  return (
    <header id="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar-bottom">
            <div className="d-flex justify-content-between align-items-center">
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
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contact">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/data-image">
                        Data image
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/gallery">
                        Gallery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
