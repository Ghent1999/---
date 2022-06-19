const MenuList = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Data image",
    path: "/data-image",
  },
  {
    label: "Gallery",
    path: "/gallery",
  },
  {
    label: "Login",
    path: "/login",
  },
];

export interface MenuListModel {
  label: string;
  path: string;
}

export default MenuList;
