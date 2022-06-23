function ProjectItem(props) {
  const { title, category, imgUrl, active, activateProject, id } = props;
  return (
    <div className="project-item">
      <img
        onClick={() => {
          activateProject(id);
        }}
        src={imgUrl}
        alt={title}
        className={active ? 'project-item__img__active' : 'project-item__img'}
      />
      <div className="project-item__text">
        <p className="project-item__category" onClick={() => activateProject(id)}>
          {category}
        </p>
        <p className="project-item__title">{title}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
