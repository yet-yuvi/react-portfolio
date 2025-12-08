import Image from './components/Image';
import Bio from './components/Bio';
import Social from './components/Social';
import Projects from './components/Projects';
import Hero from './components/Hero';

import './App.css';

function App() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio',
      description:
        'A personal portfolio website to showcase my projects and skills.',
      link: 'https://github.com/yet-yuvi/portfolio-js',
    },
    {
      id: 2,
      title: 'React Portfolio',
      description:
        'A portfolio website built using React to demonstrate my frontend skills.',
      link: 'https://github.com/yet-yuvi/react-portfolio',
    },
    {
      id: 3,
      title: 'To-Do App',
      description:
        'Simple to-do application to manage daily tasks efficiently.',
      link: 'https://github.com/yet-yuvi/To-Do-List',
    },
    {
      id: 4,
      title: 'Marketplace Backend',
      description:
        'Backend service for an online marketplace using Node.js and Express.',
      link: 'https://github.com/yet-yuvi/Market-Place',
    },
    {
      id: 5,
      title: 'Employee Management System',
      description: 'A system to manage employee records and HR tasks.',
      link: 'https://github.com/yet-yuvi/Employ-Management-System',
    },
    {
      id: 6,
      title: 'Inventory Management System',
      description:
        'An application to track and manage inventory levels, orders, and deliveries.',
      link: 'https://github.com/yet-yuvi/inventory-management',
    },
  ];
  return (
    <div className='gap-4 p-8 bg-gray-200 flex flex-col items-center justify-center h-full'>
      <Hero />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
