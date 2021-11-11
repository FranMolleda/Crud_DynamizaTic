import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="container nav-header mt-4">
        <h1>
          <Link to={"/"}>CRUD DynamizaTic </Link>{" "}
        </h1>{" "}
        <Link to={"/tarea/nueva"}>Agregar Tarea &#43;</Link>
      </div>{" "}
    </nav>
  );
};

export default Header;
