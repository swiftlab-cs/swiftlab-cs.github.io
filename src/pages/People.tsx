import { ReactElement } from 'react';
import { faculty } from '../data/faculty.json';
import { students } from '../data/students.json';

export function People(): ReactElement {
  const renderPerson = (person: any) => (
    <div className="banner-bottom-left">
      <div className="portrait">
        <img alt="" src={person.photo} className="portrait-round" />
      </div>
      <h3>
        {person.link ? <a href={person.link}>{person.name}</a> : person.name}
      </h3>
      <p>{person.title}</p>
    </div>
  );
  return (
    <>
      <div className="banner-bottom">
        <div className="container people">
          <h2>Faculty</h2>

          {faculty.map(renderPerson)}


          {/*  Students  */}

          <div className="clearfix"> </div>
          <h2>Students</h2>


          {students.map(renderPerson)}

          {/* Former Members */}
          {/* <div className="clearfix"> </div>
          <h2>Former Members</h2>

          <div className="banner-bottom-left">
            <a href="https://haoyang9804.github.io">
              <div className="portrait">
                <img
                  alt=""
                  src="images/haoyang.jpeg"
                  className="portrait-round"
                />
              </div>
            </a>
            <h3>
              <a href="https://haoyang9804.github.io">占位</a>
            </h3>
            <p>占位</p>
          </div> */}

          

          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}
