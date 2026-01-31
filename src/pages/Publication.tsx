// 静态构造publication信息
import { ReactElement, useState } from 'react';

import { GridLoader } from 'react-spinners';
import {
  LiteratureEntry,
  Literatures,
  LiteratureAuthor,
} from 'react-paper-list';

export function Publication(): ReactElement {
  // 静态构造papers数据
  const [papers, setPapers] = useState([
    {
      id: 0,
      title: 'Example Paper Title 1',
      date: new Date('2023-01-01'),
      type: 'Conference Paper',
      authors: [
        { lastName: 'Author', firstName: 'First' } as LiteratureAuthor,
        { lastName: 'Another', firstName: 'Author' } as LiteratureAuthor
      ],
      venue: 'International Conference on Example',
      venueShort: 'ICE 2023',
      tags: ['tag1', 'tag2'],
      awards: [],
      paperUrl: 'https://example.com/paper1',
      abstract: 'This is an example abstract for the first paper.',
      bibtex: '@inproceedings{example1, title={Example Paper Title 1}, author={First Author and Another Author}, booktitle={International Conference on Example}, year={2023}}',
      projectUrl: '',
      slidesUrl: ''
    },
    {
      id: 1,
      title: 'Example Paper Title 2',
      date: new Date('2022-06-15'),
      type: 'Journal Article',
      authors: [
        { lastName: 'Author', firstName: 'Second' } as LiteratureAuthor
      ],
      venue: 'Journal of Examples',
      venueShort: 'JOE',
      tags: ['tag3'],
      awards: ['Best Paper Award'],
      paperUrl: 'https://example.com/paper2',
      abstract: 'This is an example abstract for the second paper.',
      bibtex: '@article{example2, title={Example Paper Title 2}, author={Second Author}, journal={Journal of Examples}, year={2022}}',
      projectUrl: 'https://example.com/project2',
      slidesUrl: 'https://example.com/slides2'
    }
  ] as LiteratureEntry[]);
  
  // 静态数据不需要加载状态
  const [loading, setLoading] = useState(false);

  return (
    <div className="container">
      <div style={{ minHeight: 200 }}>
        {/* 原来这个是三元表达式，loading为true时显示加载动画（GridLoader组件），否则显示publication列表 */}
        {loading ? (
          <div
            style={{
              position: 'relative',
              marginTop: 100,
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '20px',
            }}
          >
            <GridLoader color="#5dc9c9" />
          </div>
        ) : (
          // 这就是文件列表了，已经被打包为了Literatures组件
          <Literatures
            title={'Selected Publication'}
            description={''}
            entries={papers}
            listHeader={'Published Papers'}
            defaultSortCriterion="date"
            defaultReverse={true}
            // enableSort
            // enableFilter
            enableSearch
            enableScrollTopButton
          />
        )}
      </div>
    </div>
  );
}