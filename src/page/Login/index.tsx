import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (
      username === process.env.REACT_APP_USERNAME &&
      password === process.env.REACT_APP_PASSWORD
    ) {
      navigate("/admin");
    }
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
                  <Form.Control
                    type="text"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback ml-6 pl-2">username</div>
                </div>
                <div className="col-md-12">
                  <Form.Control
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
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
