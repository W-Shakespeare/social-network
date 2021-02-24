import React from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const NavBarContainer: React.FC = () => {
  const { selectedKeys } = useSelector((state: RootState) => state.navBar);

  return <NavBar selectedKeys={selectedKeys} />;
};

export default NavBarContainer;
