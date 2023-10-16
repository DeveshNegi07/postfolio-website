import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink exact className="navbar-brand" to="/">
                  <img
                    className="logo"
                    src="https://img.freepik.com/premium-vector/dn-logo-design_731343-1070.jpg"
                    alt="logo"
                  />
                  Consultancy
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) => {
                          const linkClasses = ["nav-link active"];
                          if (isActive) linkClasses.push("menu_active");
                          return linkClasses.join(" ");
                        }}
                        exact
                        aria-current="page"
                        to="/home"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) => {
                          const linkClasses = ["nav-link active"];
                          if (isActive) linkClasses.push("menu_active");
                          return linkClasses.join(" ");
                        }}
                        exact
                        to="/service"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) => {
                          const linkClasses = ["nav-link active"];
                          if (isActive) linkClasses.push("menu_active");
                          return linkClasses.join(" ");
                        }}
                        exact
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) => {
                          const linkClasses = ["nav-link active"];
                          if (isActive) linkClasses.push("menu_active");
                          return linkClasses.join(" ");
                        }}
                        exact
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
