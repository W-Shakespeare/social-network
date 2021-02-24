import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { authorization } from "../../redux/actions/actions";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/thunks";
import Avatar from "../Avatar/Avatar";

interface PropsType {
  isAuthorization: boolean;
  login: string | null;
  email: string | null;
  id: number | null;
  photo: string | null;
}

const Header: React.FC<PropsType> = ({
  isAuthorization,
  login,
  email,
  id,
  photo,
}) => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      {!photo ? <Avatar /> : <Avatar src={photo} />}
      {isAuthorization ? (
        <NavLink to={"/"}>
          <Button onClick={logOut} ghost>
            LogOut - {login}
          </Button>
        </NavLink>
      ) : (
        <NavLink to={"/Login"}>
          <Button ghost>Login</Button>
        </NavLink>
      )}
    </div>
  );
};

export default Header;
