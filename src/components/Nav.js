import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

export default function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm">
            <div className="container-fluid px-4">
                {/* Brand */}
                <Link className="navbar-brand fw-bold text-white" to="/">
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
                                    `nav-link text-white ${
                                        isActive
                                            ? "fw-semibold border-bottom border-2"
                                            : ""
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
                                    `nav-link text-white ${
                                        isActive
                                            ? "fw-semibold border-bottom border-2"
                                            : ""
                                    }`
                                }
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>

                    {/* Theme Palette (controls BODY only) */}
                    <div className="d-flex align-items-center gap-2">
                        <span className="text-white small me-2">Theme:</span>

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
                                className={`bg-${color} rounded-circle border border-light`}
                                onClick={() => props.togglemode(color)}
                                style={{
                                    height: "20px",
                                    width: "20px",
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
