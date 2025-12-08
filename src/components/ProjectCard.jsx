import { useState } from 'react';

function ProjectCard({ project }) {
  const [likeCount, setLikeCount] = useState(0);

  const incrementLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className='w-86 border-2 border-white p-4 rounded-lg shadow-md flex flex-col justify-between bg-gray-200'>
      <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
      <p className='text-gray-600 mb-2 flex-grow'>{project.description}</p>
      <div className='flex justify-between items-center'>
        <a
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          className='text-lg text-sky-500 hover:underline hover:underline-offset-4 hover:decoration-2'
        >
          View Project . .
        </a>
        <button
          onClick={incrementLike}
          className='px-4 py-1 bg-sky-500 text-white rounded hover:bg-sky-600'
        >
          {`Like ${likeCount}`}
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
