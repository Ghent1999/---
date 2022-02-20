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
                      ลักษณะกายภาพ
                    </option>
                    <option value="จมูกวัว">จมูกวัว</option>
                    <option value="ลายข้างวัวซ้าย">ลายข้างวัวซ้าย</option>
                    <option value="ลายข้างวัวขวา">ลายข้างวัวขวา</option>
                    <option value="บั้นท้าย">บั้นท้าย</option>
                    <option value="อุจระ">อุจระ</option>
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
