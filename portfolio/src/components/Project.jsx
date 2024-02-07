import "../assets/css/project.css";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa6";

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
              className="link-body-emphasis link-opacity-50 link-opacity-100-hover link-underline link-underline-opacity-0"
            >
              <h5 className="card-title">{props.title}</h5>
            </a>
            <IconContext.Provider
              value={{
                color: "black",
                className: "gitHub mx-1",
                size: "1.25em",
              }}
            >
              <a href={props.github} className="text-body-dark card-link px-1">
                <FaGithub />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}
