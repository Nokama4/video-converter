import { NavLink } from "@remix-run/react";

const Nav = () => {
  const activeStyle = {
    textDecoration: "underline",
  };
  return (
    <nav>
      <ul>
        <li>
        <NavLink
            to="messages"
            style={({ isActive }) =>
              isActive ? activeStyle : {}
            }
          >
            Messages
          </NavLink>
        </li>
        </ul>
    </nav>
  );
}

export default Nav