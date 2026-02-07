import { ReactElement } from 'react';
import projectsData from './json_data/project.json';


export function Projects(): ReactElement {
  return (
    <>
      <div className="container project-content">
        <h4>Funded Research Projects</h4>
        <ul className="project_ul">
          {projectsData.map((project, index) => (
            <li key={index}>
              {project.title}，{project.description}，{project.date}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
