import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substring(1);
  const [activeItem, setAvtiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setAvtiveItem(name);

  return (
    <Menu pointing secondary size="massive" color="olive">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      {Auth.loggedIn() ? (
        <>
        <Menu.Item
        name="map"
        active={activeItem === "map"}
        onClick={handleItemClick}
        as={Link}
        to="/map"
      />

      <Menu.Item
        name="locate"
        active={activeItem === "locate"}
        onClick={handleItemClick}
        as={Link}
        to="/locate"
      />
        </>
      ) : ""}
      <Menu.Menu position="right">
        {Auth.loggedIn() ? (
          <>
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={logout}
              as={Link}
              to="/"
            />
          </>
        ) : (
          <>
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={handleItemClick}
              as={Link}
              to="/login"
            />
            <Menu.Item
              name="register"
              active={activeItem === "register"}
              onClick={handleItemClick}
              as={Link}
              to="/register"
            />
          </>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
