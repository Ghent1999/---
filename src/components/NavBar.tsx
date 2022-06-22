import { useEffect, useState } from "react";
import MenuList, { MenuListModel } from "../models/MenuModel";
import LoginServices from "../services/LoginService";

export default function NavBar() {
  const username = window.sessionStorage.getItem("username") ?? "";
  const password = window.sessionStorage.getItem("password") ?? "";
  const [menuList, setMenuList] = useState<MenuListModel[]>(MenuList);
  let path = window.location.pathname;

  useEffect(() => {
    if (path === "/admin") {
      const verifyLogin = () => {
        LoginServices.getLogin(username, password).then(
          (res) => {
            if (res.status) {
              menuList[4].label = "logout";
            }
          },
          (err) => {
            setMenuList(menuList);
          }
        );
      };

      verifyLogin();
    }
  }, [menuList, password, path, username]);

  return (
    <header id="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar-bottom">
            <div className="d-flex justify-content-between align-items-center">
              <div
                className="navbar-collapse  collapse mt-3"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav d-lg-flex justify-content-between align-items-center">
                  <li className="nav-item active text-white">
                    <img
                      src="http://www.chandra.ac.th/uploads/media/files/about/newchandralogo1.png"
                      alt="logo"
                      width="70"
                    />
                  </li>
                  <li className="nav-item active text-white ml-3">
                    ศูนย์การเรียนรู้จันทรเกษม - ชัยนาท
                  </li>
                </ul>
              </div>
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
                className="navbar-collapse justify-content-center collapse mt-3"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav d-lg-flex justify-content-between align-items-center">
                  <li>
                    <button className="navbar-close">
                      <i className="mdi mdi-close" />
                    </button>
                  </li>
                  {menuList.map((item: MenuListModel, index) => (
                    <li className="nav-item" key={index}>
                      <a className="nav-link" href={item.path}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
