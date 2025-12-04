import Image from './components/Image';
import Bio from './components/Bio';
import Social from './components/Social';

import './App.css';

function App() {
  return (
    <div className='gap-6 bg-gray-200 flex items-center justify-center h-screen'>
      <Image />
      <div className='flex flex-col gap-6'>
        <Bio />
        <Social />
      </div>
    </div>
  );
}

export default App;
