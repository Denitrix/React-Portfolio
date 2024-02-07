import "../assets/css/project.css";

export default function Project(props) {
  return (
    <div className="col-md-6 ms-auto me-auto my-1">
      <div className="card">
        <img
          className="card-img"
          src={props.image}
          alt={`Screenshot of ${props.title}`}
        />
        <div className="card-overlay rounded d-flex flex-end">
          <div className="card-body">
            <a
              href={props.deployment}
              className="link-body-emphasis link-underline link-underline-opacity-0"
            >
              <h5 className="card-title">{props.title}</h5>
            </a>
            <a className="card-link">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}
