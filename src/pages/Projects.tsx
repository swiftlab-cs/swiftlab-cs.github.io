import { ReactElement } from 'react';

export function Projects(): ReactElement {
  return (
    <>
      <div className="container project-content">
        <h4>Funded Research Projects</h4>
        <ul className="project_ul">
          <li>
            National Natural Science Foundation of China (NSFC) for Ph.D. Graduate Students「国家自然科学基金青年学生基础研究项目（博士研究生）」, 2024
          </li>

          <li>
            More recent funded projects are avaiable at{' '}
            <a href="https://facultyprofiles.hkust.edu.hk/profiles.php?profile=shing-chi-cheung-sccheung#proj">
              here
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
