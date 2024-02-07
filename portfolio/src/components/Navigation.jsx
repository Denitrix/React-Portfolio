import { useLocation } from "react-router-dom";

export default function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <ul className="navbar-nav mb-2 mb-sm-0 ms-auto me-auto">
        <li className="nav-item ms-auto me-auto">
          <a
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
            aria-current="page"
            href="/"
          >
            About Me
          </a>
        </li>
        <li className="nav-item ms-auto me-auto">
          <a
            className={
              currentPage === "/portfolio" ? "nav-link active" : "nav-link"
            }
            href="/portfolio"
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item ms-auto me-auto">
          <a
            className={
              currentPage === "/contact" ? "nav-link active" : "nav-link"
            }
            href="/contact"
          >
            Contact Me
          </a>
        </li>
        <li className="nav-item ms-auto me-auto">
          <a
            className={
              currentPage === "/resume" ? "nav-link active" : "nav-link"
            }
            href="/resume"
          >
            Resume
          </a>
        </li>
      </ul>
    </>
  );
}
