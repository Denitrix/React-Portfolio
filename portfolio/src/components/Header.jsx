import Navigation from "./Navigation";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid">
        <h1 className="navbar-brand fs-2" href="#">
          Alex Majorowicz
        </h1>
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
          className="collapse navbar-collapse nav justify-content-evenly"
          id="navbarSupportedContent"
        >
          <Navigation />
        </div>
      </div>
    </nav>
  );
}
