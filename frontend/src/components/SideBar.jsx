import React from "react";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon">
          <img className="w-100" src="images/soundSystem.jpeg" alt="Sound System" />
        </div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Products from SoundSystem</span>
        </a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">Vistas</div>
      {/* Nav Item - Pages */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="/">
          <i className="fas fa-fw fa-folder" />
          <Link to={`/products`}>
          <span>Productos</span>
          </Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-chart-area" />
          <Link to={`/users`}>
          <span>Usuarios</span>
          </Link>
        </a>
      </li>      
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
};

export default SideBar;
