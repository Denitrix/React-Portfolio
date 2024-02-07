import { projects } from "../assets/js/projects.js";
import Project from "../components/Project";

export default function Portfolio() {
  const projectCards = projects.map((project, index) => (
    <Project {...project} key={index} />
  ));
  return (
    <div className="text-bg-primary container-fluid pb-5">
      <h3 className="m-3 ms-3 fs-3">Portfolio</h3>
      <div className="row container-fluid ms-2 me-2">{projectCards}</div>
    </div>
  );
}
