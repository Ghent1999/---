import "./dataImageCss.css";

export default function DataImage() {
  return (
    <div className="form-body">
      <div className="row col-12">
        <div className="form-holder w-100">
          <div className="form-content">
            <div className="form-items">
              <h3>เพิ่มรายละเอียดวัว</h3>
              <p>กรุณากรอกข้อมูลจริง</p>
              <form className="requires-validation" noValidate>
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                  <div className="valid-feedback">Username field is valid!</div>
                  <div className="invalid-feedback">
                    Username field cannot be blank!
                  </div>
                </div>
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="tel"
                    placeholder="Tel : 0987654321"
                    required
                  />
                  <div className="valid-feedback">Email field is valid!</div>
                  <div className="invalid-feedback">
                    Email field cannot be blank!
                  </div>
                </div>
                <div className="col-md-12">
                  <select className="form-select mt-3" required>
                    <option selected hidden>
                      พันธุ์วัว
                    </option>
                    {/* ตัวเลือกพันธุ์วัว */}
                    <option value="โคพื้นเมือง">โคพื้นเมือง</option>
                    <option value="โคพันธุ์บราห์มัน">โคพันธุ์บราห์มัน</option>
                    <option value="โคพันธุ์ซิมเมนทัล">โคพันธุ์ซิมเมนทัล</option>
                    <option value="โคพันธุ์ตาก">โคพันธุ์ตาก</option>
                    <option value="โคพันธุ์กำแพงแสน">โคพันธุ์กำแพงแสน</option>
                    <option value="โคพันธุ์กบินทร์บุรี">
                      โคพันธุ์กบินทร์บุรี
                    </option>
                    <option value="โคพันธุ์เดร้าท์มาสเตอร์">
                      โคพันธุ์เดร้าท์มาสเตอร์
                    </option>
                    <option value="โคพันธุ์ฮินดูบราซิล">
                      โคพันธุ์ฮินดูบราซิล
                    </option>
                  </select>
                  <div className="valid-feedback">You selected a position!</div>
                  <div className="invalid-feedback">
                    Please select a position!
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <input
                    type="file"
                    placeholder="เลือกไฟล์รูปภาพ"
                    className="form-control rounded"
                  />
                  <div className="valid-feedback">You selected a position!</div>
                  <div className="invalid-feedback">
                    Please select a position!
                  </div>
                </div>

                <div className="form-button mt-3 text-center">
                  <button
                    id="submit"
                    type="submit"
                    className="btn btn-primary col-6"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
