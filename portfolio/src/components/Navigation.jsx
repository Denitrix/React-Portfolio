import { useLocation } from "react-router-dom";

export default function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <ul className="navbar-nav mb-2 mb-sm-0 w-100 justify-content-evenly">
        <li className="nav-item text-center">
          <a
            className={
              currentPage === "/"
                ? "nav-link active bg-secondary rounded-3"
                : "nav-link"
            }
            aria-current="page"
            href="/"
          >
            About Me
          </a>
        </li>
        <li className="nav-item text-center">
          <a
            className={
              currentPage === "/portfolio"
                ? "nav-link active bg-secondary rounded-3"
                : "nav-link"
            }
            href="/portfolio"
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item text-center">
          <a
            className={
              currentPage === "/contact"
                ? "nav-link active bg-secondary rounded-3"
                : "nav-link"
            }
            href="/contact"
          >
            Contact Me
          </a>
        </li>
        <li className="nav-item text-center">
          <a
            className={
              currentPage === "/resume"
                ? "nav-link active bg-secondary rounded-3"
                : "nav-link"
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
