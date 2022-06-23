import ProjectItem from './ProjectItem';
import '../css/Projects.css';
import { useState } from 'react';

function ProjectList(props) {
  const { data } = props;

  const activateProject = (id) => {
    if (activeItem === id) {
      setActiveItem(-1);
    } else {
      setActiveItem(id);
    }
  };

  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="project-list">
      {data.map((el) => {
        return (
          <ProjectItem
            activateProject={activateProject}
            active={activeItem === el.id ? true : false}
            key={el.id}
            id={el.id}
            {...el}
          />
        );
      })}
    </div>
  );
}

export default ProjectList;
