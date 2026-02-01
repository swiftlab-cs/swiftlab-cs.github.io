// 静态构造publication信息
import { ReactElement } from 'react';

import {
  LiteratureEntry,
  Literatures,
  LiteratureAuthor,
} from 'react-paper-list';

import publicationData from '../publication/publication.json';

export function Publication(): ReactElement {
  // 静态构造papers数据
  // const papers = [
  //   {
  //     id: '0',
  //     title: 'The Pensieve Paradigm: Stateful Language Models with Learned Memory Management',
  //     date: new Date('2026-01-XX'),
  //     type: 'Conference Paper',
  //     authors: [
  //       { lastName: 'Xiaoyuan', firstName: 'Liu' } as LiteratureAuthor,
  //       { lastName: 'Tian', firstName: 'Liang' } as LiteratureAuthor,
  //       { lastName: 'Dongyang', firstName: 'Ma' } as LiteratureAuthor,
  //       { lastName: 'Deyu', firstName: 'Zhou' } as LiteratureAuthor,
  //       { lastName: 'Haitao', firstName: 'Mi' } as LiteratureAuthor,
  //       { lastName: 'Pinjia', firstName: 'He' } as LiteratureAuthor,
  //       { lastName: 'Yan', firstName: 'Wang' } as LiteratureAuthor
  //     ],
  //     venue: 'International Conference on Learning Representations',
  //     venueShort: 'ICLR 2026',
  //     tags: ['tag1', 'tag2'],
  //     awards: [],
  //     paperUrl: 'https://openreview.net/pdf?id=GymjF88oGQ',
  //     abstract: 'This is an example abstract for the first paper.',
  //     bibtex: '暂时还没有',
  //     projectUrl: '',
  //     slidesUrl: ''
  //   }
  // ] as LiteratureEntry[];
   // 从json文件中读取papers数据并转换为指定格式
  const papers: LiteratureEntry[] = publicationData.map((d: any, index: number) => {
    // 处理作者格式：将"FirstName LastName"分割为firstName和lastName
    const parseAuthor = (authorName: string): LiteratureAuthor => {
      const nameParts = authorName.trim().split(' ');
      if (nameParts.length === 1) {
        // 只有一个名字部分，全部作为lastName
        return { firstName: '', lastName: nameParts[0] } as LiteratureAuthor;
      } else {
        // 多个名字部分，最后一个作为lastName，其余作为firstName
        const lastName = nameParts[nameParts.length - 1];
        const firstName = nameParts.slice(0, -1).join(' ');
        return { firstName, lastName } as LiteratureAuthor;
      }
    };
 
    return {
      id: index.toString(), // 添加递增的id序号（从0开始）
      title: d.title,
      date: new Date(d.date),
      type: d.type || 'Conference Paper', // 使用JSON中的type，默认Conference Paper
      authors: d.authors.map(parseAuthor),
      venue: d.venue,
      venueShort: d.venueShort,
      tags: d.tags,
      awards: d.awards,
      paperUrl: d.paperUrl,
      abstract: d.abstract,
      bibtex: d.bibtex,
      projectUrl: d.projectUrl,
      slidesUrl: d.slidesUrl,
    } as LiteratureEntry;
  });

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