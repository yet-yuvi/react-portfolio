function ProjectCard({ project }) {
  return (
    <div className='w-86 border-2 border-white p-4 rounded-lg shadow-md flex flex-col justify-between bg-gray-200'>
      <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
      <p className='text-gray-600 mb-2 flex-grow'>{project.description}</p>
      <a
        href={project.link}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:underline self-end'
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
