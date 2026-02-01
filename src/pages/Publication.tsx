// 静态构造publication信息
import { ReactElement } from 'react';

import {
  LiteratureEntry,
  Literatures,
  LiteratureAuthor,
} from 'react-paper-list';

export function Publication(): ReactElement {
  // 静态构造papers数据
  const papers = [
    {
      id: '0',
      title: 'The Pensieve Paradigm: Stateful Language Models with Learned Memory Management',
      date: new Date('2026-01-XX'),
      type: 'Conference Paper',
      authors: [
        { lastName: 'Xiaoyuan', firstName: 'Liu' } as LiteratureAuthor,
        { lastName: 'Tian', firstName: 'Liang' } as LiteratureAuthor,
        { lastName: 'Dongyang', firstName: 'Ma' } as LiteratureAuthor,
        { lastName: 'Deyu', firstName: 'Zhou' } as LiteratureAuthor,
        { lastName: 'Haitao', firstName: 'Mi' } as LiteratureAuthor,
        { lastName: 'Pinjia', firstName: 'He' } as LiteratureAuthor,
        { lastName: 'Yan', firstName: 'Wang' } as LiteratureAuthor
      ],
      venue: 'International Conference on Learning Representations',
      venueShort: 'ICLR 2026',
      tags: ['tag1', 'tag2'],
      awards: [],
      paperUrl: 'https://openreview.net/pdf?id=GymjF88oGQ',
      abstract: 'This is an example abstract for the first paper.',
      bibtex: '暂时还没有',
      projectUrl: '',
      slidesUrl: ''
    }
  ] as LiteratureEntry[];
  

  return (
    <div className="container">
      <div style={{ minHeight: 200, paddingTop: 20 }}>
        {/* 原来这个是三元表达式，loading为true时显示加载动画（GridLoader组件），否则显示publication列表 */}
        {(
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