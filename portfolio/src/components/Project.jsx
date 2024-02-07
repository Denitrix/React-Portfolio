import "../assets/css/project.css";

export default function Project(props) {
  return (
    <div className="col-md-6 col-xl-4 ms-auto me-auto my-1">
      <div className="card">
        <img
          className="card-img"
          src={props.image}
          alt={`Screenshot of ${props.title}`}
        />
        <div className="card-overlay rounded d-flex align-items-end">
          <div className="d-inline-flex py-1 px-2">
            <a
              href={props.deployment}
              className="link-body-emphasis link-opacity-75 link-opacity-100-hover link-underline link-underline-opacity-0"
            >
              <h5 className="card-title">{props.title}</h5>
            </a>
            <a href={props.github} className="card-link px-1">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
