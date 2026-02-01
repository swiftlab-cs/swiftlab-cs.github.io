import { ReactElement } from 'react';
import awardsData from './awards.json';

export function Awards(): ReactElement {
  return (
    <>
      <div className="container news-content">
        <h4>Awards and Honors</h4>
        <div className="clearfix"> </div>
        <ul className="news-list">
          {awardsData.map((award, index) => (
            <li key={index}>
              <b>{award.date}: </b>
              <a href={award.link}>
                {award.recipient}
              </a>{' '}
              received <strong>{award.title}</strong>
              {award.conference && `, ${award.conference}`}
              {award.journal && `, ${award.journal}`}
              {award.institution && `, ${award.institution}`}
              {award.year && `, ${award.year}`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
