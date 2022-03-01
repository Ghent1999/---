import "./gallery.css";


export default function Gallery() {
  return (
    <>
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Home">
    <Sonnet />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Sonnet />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <Sonnet />
  </Tab>
</Tabs>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            จมูกวัว
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Contact
          </button>
        </li>
      </ul>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-white mt-3">จมูกวัว</h1>
            <div className="row">
              <a
                href="https://unsplash.it/1200/768.jpg?image=251"
                data-toggle="lightbox"
                data-gallery="example-gallery"
                className="col-lg-3 col-md-4 col-6 my-3"
              >
                <img
                  src="https://unsplash.it/600.jpg?image=251"
                  className="img-fluid card"
                />
              </a>
              <a
                href="https://unsplash.it/1200/768.jpg?image=252"
                data-toggle="lightbox"
                data-gallery="example-gallery"
                className="col-lg-3 col-md-4 col-6 my-3"
              >
                <img
                  src="https://unsplash.it/600.jpg?image=252"
                  className="img-fluid card"
                />
              </a>
              <a
                href="https://unsplash.it/1200/768.jpg?image=253"
                data-toggle="lightbox"
                data-gallery="example-gallery"
                className="col-lg-3 col-md-4 col-6 my-3"
              >
                <img
                  src="https://unsplash.it/600.jpg?image=253"
                  className="img-fluid card"
                />
              </a>
              <a
                href="https://unsplash.it/1200/768.jpg?image=254"
                data-toggle="lightbox"
                data-gallery="example-gallery"
                className="col-lg-3 col-md-4 col-6 my-3"
              >
                <img
                  src="https://unsplash.it/600.jpg?image=254"
                  className="img-fluid card"
                />
              </a>
              <a
                href="https://unsplash.it/1200/768.jpg?image=255"
                data-toggle="lightbox"
                data-gallery="example-gallery"
                className="col-lg-3 col-md-4 col-6 my-3"
              >
                <img
                  src="https://unsplash.it/600.jpg?image=255"
                  className="img-fluid card"
                />
              </a>
              <a
                href="https://unsplash.it/1200/768.jpg?image=256"
                data-toggle="lightbox"
                data-gallery="example-gallery"
                className="col-lg-3 col-md-4 col-6 my-3"
              >
                <img
                  src="https://unsplash.it/600.jpg?image=256"
                  className="img-fluid card"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
