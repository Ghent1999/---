import { Button, Form } from "react-bootstrap";

export default function LoginPage() {
  const handleSubmit = () => {
    console.log("test");
  };

  return (
    <div className="form-body">
      <div className="row col-12">
        <div className="form-holder w-100">
          <div className="form-content">
            <div className="form-items">
              <h3>เข้าสู่ระบบ</h3>
              <p>เฉพาะเจ้าหน้าที่ admin</p>
              <Form
                className="requires-validation"
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="col-md-12">
                  <Form.Control type="text" placeholder="username" required />
                  <div className="invalid-feedback ml-6 pl-2">username</div>
                </div>
                <div className="col-md-12">
                  <Form.Control type="text" placeholder="password" required />
                  <div className="invalid-feedback ml-6 pl-2">password</div>
                </div>

                <div className="form-button mt-3 text-center">
                  <Button
                    onClick={handleSubmit}
                    id="submit"
                    className="btn btn-primary col-6"
                  >
                    Login
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
