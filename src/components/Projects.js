import React from 'react';
import './Projects.css';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/alwaysdata.svg';

const ProjectCard = ({ project, isOpen, toggleOpen }) => (
  <div className="project-card">
    <div className="image-container">
      <img src={project.image} alt={project.title} />
    </div>
    <div className="project-details">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button className="expand-button" onClick={() => toggleOpen(project.id)}>
        {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <div className="project-expanded">
          <h4>기술 스택</h4>
          <div className="tech-stack">
            {project.details.stack.map((tech, index) => (
              <span key={index} className="tech-item">{tech}</span>
            ))}
          </div>
          <h4>프로젝트 개요</h4>
          <p>{project.details.overview}</p>
        </div>
      )}
    </div>
  </div>
);

const Projects = () => {
  const [openProjectId, setOpenProjectId] = React.useState(null);

  const toggleProject = (projectId) => {
    setOpenProjectId(openProjectId === projectId ? null : projectId);
  };

  const projects = [
    {
      id: 1,
      title: 'MemoSnap',
      description: 'AI 기반으로 자동으로 일기를 작성해 주는 앱입니다.',
      image: project1Image,
      details: {
        stack: ['Flutter', 'Dart', 'Python', 'Firebase', 'Flask', 'LLM'],
        overview: `Flutter의 무한한 가능성에 매료되어 시작한 프로젝트입니다. 
        크로스 플랫폼 개발의 효율성과 Firebase의 실시간 데이터베이스를 활용하여 
        사용자 경험을 최우선으로 고려했습니다. Flask 백엔드와의 연동을 통해 
        AI 기반의 자동 일기 작성 기능을 구현하면서, Flutter 개발자로서의 
        전문성을 키울 수 있었습니다.`,
      },
    },
    {
      id: 2,
      title: 'skytrend',
      description: '날씨 데이터를 기반으로 매출을 예측하는 프로젝트입니다.',
      image: project2Image,
      details: {
        stack: ['Python', 'MongoDB', 'Scikit-learn'],
        overview: `서울시 상권 분석과 기상 데이터의 상관관계를 심층적으로 분석한 프로젝트입니다. 
        scikit-learn을 활용하여 선형회귀와 랜덤포레스트 모델을 구현했으며, 
        각 모델의 성능을 비교 분석했습니다. 특히 시계열 데이터의 특성을 고려한 
        데이터 전처리와 특성 공학을 통해 예측 정확도를 향상시켰으며, 
        matplotlib과 seaborn을 활용한 데이터 시각화로 분석 결과를 
        효과적으로 전달했습니다.`,
      },
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isOpen={openProjectId === project.id}
              toggleOpen={toggleProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;