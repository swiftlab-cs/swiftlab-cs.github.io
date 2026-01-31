// 这个文件是用来获取publication信息的，所以会有axios的请求
import { ReactElement, useEffect, useState } from 'react';

import { GridLoader } from 'react-spinners';
import {
  LiteratureEntry,
  Literatures,
  LiteratureAuthor,
} from 'react-paper-list';
import axios from 'axios';

export function Publication(): ReactElement {
  // useState是一个React Hook，返回条件变量的初始值和set函数
  // 在未来你可以调用这个set函数来更新变量值，此时页面会重新触发渲染
  // papers是数据，初始化为空数组（as LiteratureEntry[]类型），setPapers是更新papers的函数
  const [papers, setPapers] = useState([] as LiteratureEntry[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromise = new Promise<LiteratureEntry[]>((resolve) => {
      axios
        .get(
          'https://castlelab.github.io/selected-publications/public/bundle.json',
        )
        .then((resp) => {
          console.log('Fetched data: ', resp.data);
          const papers: LiteratureEntry[] = resp.data.map(
            (d: any, index: number) => {
              return {
                id: index,
                title: d.title,
                date: new Date(d.date),
                type: 'Conference Paper',
                authors: d.authors.map((a: any) => {
                  return {
                    lastName: a,
                    firstName: '',
                  } as LiteratureAuthor;
                }),
                venue: d.venue,
                venueShort: d.venueShort,
                tags: d.tags,
                awards: d.awards,
                paperUrl: d.paperUrl,
                abstract: d.abstract,
                bibtex: d.bibtex,
                projectUrl: d.projectUrl,
                slidesUrl: d.slidesUrl,
              } as unknown as LiteratureEntry;
            },
          );
          resolve(papers);
        });
    });

    fetchPromise.then((r) => {
      setPapers(r);
      setLoading(false);
    });
  }, []);

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
