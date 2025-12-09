import { useState } from 'react';

const ReactionButton = ({ reaction, toggleLike }) => {
  return (
    <button
      className={`px-4 py-1 text-white rounded ${
        reaction === 'like'
          ? 'bg-sky-500 hover:bg-sky-600'
          : 'bg-gray-500 hover:bg-gray-600'
      }`}
      onClick={toggleLike}
    >
      {reaction === 'like' ? 'Like' : 'Unlike'}
    </button>
  );
};

function ProjectCard({ project }) {

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
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
        {isLiked ? (
          <ReactionButton reaction='unlike' toggleLike={toggleLike} />
        ) : (
          <ReactionButton reaction='like' toggleLike={toggleLike} />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
