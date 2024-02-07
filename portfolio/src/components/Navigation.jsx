import { useLocation, Link } from "react-router-dom";

export default function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <ul className="navbar-nav mb-2 mb-sm-0 w-100 justify-content-evenly">
        <li className="nav-item text-center">
          <Link
            className={
              currentPage === "/"
                ? "nav-link active bg-secondary rounded-3"
                : "nav-link"
            }
            to="/"
          >
            About Me
          </Link>
        </li>
        <li className="nav-item text-center">
          <Link
            className={
              currentPage === "/portfolio"
                ? "nav-link active bg-secondary rounded-3"
                : "nav-link"
            }
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item text-center">
          <Link
            className={
              currentPage === "/contact"
                ? "nav-link active bg-secondary rounded-3"
                : "nav-link"
            }
            to="/contact"
          >
            Contact Me
          </Link>
        </li>
        <li className="nav-item text-center">
          <Link
            className={
              currentPage === "/resume"
                ? "nav-link active bg-secondary rounded-3"
                : "nav-link"
            }
            to="/resume"
          >
            Resume
          </Link>
        </li>
      </ul>
    </>
  );
}
