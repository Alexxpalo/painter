import React, { useState } from 'react';
import ColorRing from './components/ColorRing';
import Tiles from './components/Tiles';
import ExportImage from './utils/exportImage';

function App() {
  const [selectedColor, setSelectedColor] = useState('');
  const exportRef = React.useRef<HTMLDivElement>(null);

  const changeColor = (color: string) => {
    setSelectedColor(color);
  }

  return (
    <div className='h-screen bg-black pt-10'>
      <div className='flex mx-auto mb-5 w-fit border border-white'>
        < ColorRing color={'#ffffff'} size={32} onClick={changeColor} />
        < ColorRing color={'#ef4444'} size={32} onClick={changeColor} />
        < ColorRing color={'#f97316'} size={32} onClick={changeColor} />
        < ColorRing color={'#f59e0b'} size={32} onClick={changeColor} />
        < ColorRing color={'#eab308'} size={32} onClick={changeColor} />
        < ColorRing color={'#84cc16'} size={32} onClick={changeColor} />
        < ColorRing color={'#22c55e'} size={32} onClick={changeColor} />
        < ColorRing color={'#10b981'} size={32} onClick={changeColor} />
        < ColorRing color={'#14b8a6'} size={32} onClick={changeColor} />
        < ColorRing color={'#06b6d4'} size={32} onClick={changeColor} />
        < ColorRing color={'#0ea5e9'} size={32} onClick={changeColor} />
        < ColorRing color={'#3b82f6'} size={32} onClick={changeColor} />
        < ColorRing color={'#6366f1'} size={32} onClick={changeColor} />
        < ColorRing color={'#8b5cf6'} size={32} onClick={changeColor} />
        < ColorRing color={'#a855f7'} size={32} onClick={changeColor} />
        < ColorRing color={'#d946ef'} size={32} onClick={changeColor} />
        < ColorRing color={'#ec4899'} size={32} onClick={changeColor} />
        < ColorRing color={'#f43f5e'} size={32} onClick={changeColor} />
        < ColorRing color={'#000000'} size={32} onClick={changeColor} />
      </div>
      <div className='mx-auto mb-5 border border-white' style={{ width: 32, height: 32, backgroundColor: selectedColor }} />
      <div ref={exportRef} className='w-fit mx-auto'>
        < Tiles width={64} height={64} tileSize={10} color={selectedColor} />
      </div>

      <div className='bg-slate-500 py-2 px-3 w-fit text-white cursor-pointer mx-auto mt-10 hover:bg-slate-300'>
        <p>Clear canvas</p>
      </div>

      <div className='bg-slate-500 py-2 px-3 w-fit text-white cursor-pointer mx-auto mt-10 hover:bg-slate-300'
        onClick={() => ExportImage({ element: exportRef.current, fileName: 'test' })}
      ><p>Download image</p></div>
    </div>
  );
}

export default App;
