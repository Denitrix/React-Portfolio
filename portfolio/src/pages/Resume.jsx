import resumePDF from "../assets/files/Simple-resume-template.pdf";

export default function Resume() {
  return (
    <div className="text-bg-primary container-fluid">
      <h3 className="m-3 ms-3 fs-3">Resume</h3>
      <div className="container-fluid ms-2 me-2">
        <p>
          Download my{" "}
          <a
            href={resumePDF}
            className="link-secondary link-underline link-underline-opacity"
          >
            resume
          </a>
        </p>

        <h4>Skills</h4>
        <h5>Front-end proficiencies</h5>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>

        <h5>Back-end proficiencies</h5>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}
