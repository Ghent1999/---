export default function ContactPage() {
  return (
    <div className="container-scroller">
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="page-header">
            <h3 className="page-title">Contact</h3>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#sss" className="text-decoration-none">
                    <i className="mdi mdi-home" />
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact
                </li>
              </ol>
            </nav>
          </div>
          <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body text-center">
                  <div className="card mt-3">
                    <div className="card-header bg-warning">
                      <h3>ติดต่อเรา</h3>
                    </div>
                    <div className="card-body">
                      <img
                        src="https://chainat.chandra.ac.th/images/Image/service.jpg"
                        alt="contact detail"
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                  <div className="card mt-3">
                    <div className="card-header bg-warning">
                      <h3>แผนที่</h3>
                    </div>
                    <div className="card-body">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d246574.9540918541!2d100.14244100000002!3d15.062841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e1910f215b5aaf%3A0x6db855308e4d8df1!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lij4Liy4LiK4Lig4Lix4LiP4LiI4Lix4LiZ4LiX4Lij4LmA4LiB4Lip4LihLeC4iuC4seC4ouC4meC4suC4lw!5e0!3m2!1sth!2sth!4v1645991070715!5m2!1sth!2sth"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Map"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
