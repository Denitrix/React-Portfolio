export default function Navigation() {
  return (
    <>
      <ul className="navbar-nav mb-2 mb-sm-0">
        <li className="nav-item ms-auto me-auto">
          <a className="nav-link active" aria-current="page" href="/">
            About Me
          </a>
        </li>
        <li className="nav-item ms-auto me-auto">
          <a className="nav-link" href="/">
            Portfolio
          </a>
        </li>
        <li className="nav-item ms-auto me-auto">
          <a className="nav-link" href="/">
            Contact Me
          </a>
        </li>
        <li className="nav-item ms-auto me-auto">
          <a className="nav-link" href="/">
            Resume
          </a>
        </li>
      </ul>
    </>
  );
}
