import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

export default function Nav(props) {
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow-sm`}
        >
            <div className="container-fluid px-4">
                {/* Brand */}
                <Link
                    className={`navbar-brand fw-bold text-${
                        props.mode === "light" ? "dark" : "light"
                    }`}
                    to="/"
                >
                    {props.title}
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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-2">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link ${
                                        isActive
                                            ? "fw-semibold border-bottom border-2"
                                            : ""
                                    } text-${
                                        props.mode === "light"
                                            ? "dark"
                                            : "light"
                                    }`
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link ${
                                        isActive
                                            ? "fw-semibold border-bottom border-2"
                                            : ""
                                    } text-${
                                        props.mode === "light"
                                            ? "dark"
                                            : "light"
                                    }`
                                }
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>

                    {/* Theme Palette */}
                    <div className="d-flex align-items-center gap-2">
                        <span
                            className={`text-${
                                props.mode === "light" ? "dark" : "light"
                            } small me-2`}
                        >
                            Theme:
                        </span>

                        {[
                            "primary",
                            "danger",
                            "success",
                            "warning",
                            "light",
                            "dark",
                        ].map((color) => (
                            <div
                                key={color}
                                className={`bg-${color} rounded-circle border`}
                                onClick={() => props.togglemode(color)}
                                style={{
                                    height: "22px",
                                    width: "22px",
                                    cursor: "pointer",
                                }}
                                title={color}
                            ></div>
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
