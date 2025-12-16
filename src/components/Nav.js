import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

export default function Nav(props) {
    const colors = ["primary", "danger", "success", "warning", "light", "dark"];

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm">
            <div className="container-fluid px-4">
                {/* Brand */}
                <Link className="navbar-brand fw-bold text-white" to="/">
                    ✨ {props.title}
                </Link>

                {/* Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-3">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `nav-link text-white ${
                                        isActive
                                            ? "fw-semibold border-bottom border-2"
                                            : ""
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `nav-link text-white ${
                                        isActive
                                            ? "fw-semibold border-bottom border-2"
                                            : ""
                                    }`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>

                    {/* Theme Selector */}
                    <div className="d-flex align-items-center gap-2">
                        <span className="text-white small me-2">Theme</span>

                        {colors.map((color) => (
                            <div
                                key={color}
                                onClick={() => props.togglemode(color)}
                                title={color}
                                style={{
                                    height: "22px",
                                    width: "22px",
                                    borderRadius: "50%",
                                    cursor: "pointer",
                                    backgroundColor:
                                        color === "light" ? "#f8f9fa" : "",
                                }}
                                className={`bg-${color} theme-dot`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

Nav.propTypes = {
    title: PropTypes.string.isRequired,
};
