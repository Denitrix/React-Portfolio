export default function Navigation() {
  return (
    <>
      <ul className="navbar-nav mb-2 mb-sm-0 ms-auto me-auto">
        <li className="nav-item ms-auto me-auto">
          <a className="nav-link active" aria-current="page" href="/">
            About Me
          </a>
        </li>
        <li className="nav-item ms-auto me-auto">
          <a className="nav-link" href="/portfolio">
            Portfolio
          </a>
        </li>
        <li className="nav-item ms-auto me-auto">
          <a className="nav-link" href="/contact-me">
            Contact Me
          </a>
        </li>
        <li className="nav-item ms-auto me-auto">
          <a className="nav-link" href="/resume">
            Resume
          </a>
        </li>
      </ul>
    </>
  );
}
