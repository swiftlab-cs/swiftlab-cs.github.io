import { ReactElement } from 'react';

export function Projects(): ReactElement {
  return (
    <>
      <div className="container project-content">
        <h4>Funded Research Projects</h4>
        <ul className="project_ul">
          <li>
            基于MCP与强化学习的多智能体根因分析系统、字节横向， 2025-2026
          </li>
          <li>
            AI辅助日志分析及诊断技术合作项目、华为横向，2025-2026
          </li>
          <li>
            基于模型架构实现LLM内生安全等能力快速迭代提升、CCF-华为软件工程专项，2025
          </li>
          <li>
            面向大模型生成内容安全的评估与优化技术研究，CCF-华为可信计算专项，2025
          </li>
          <li>
            面向微服务系统的智能日志分析技术研究，广东省自然科学基金面上项目，2024-2026
          </li>
          <li>
            面向研发场景的LLM任务拆解和规划执行能力提升，CCF-华为软件工程专项，2024
          </li>
          <li>
            Optimizing the I/O Efficiency of Key-Value Stores on Disaggregated Memory. National Natural Science Foundation of China (NSFC) for Ph.D. Graduate Students「国家自然科学基金青年学生基础研究项目（博士研究生）」, 2024
          </li>
          <li>
            基于研发数据知识图谱的日志异常分析关键技术研究，深圳市高等院校稳定支持计划，2022-2025
          </li>
          <li>
            基于自动化日志分析的大规模软件可靠性工程研究，国家自然科学基金-青年科学基金项目，2022-2024
          </li>

        </ul>
      </div>
    </>
  );
}
