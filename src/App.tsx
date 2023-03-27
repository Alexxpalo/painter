import React, { useEffect, useState } from 'react';
import Cursor from './components/Cursor';
import ColorRing from './components/ColorRing';
import Tiles from './components/Tiles';

function App() {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const changeColor = (color: string) => {
    setSelectedColor(color);
    console.log(selectedColor);
  }

  return (
    <div className='h-screen bg-black'>
        {/* < Cursor mouseX={mousePos.x} mouseY={mousePos.y} sizeL={36} sizeM={18} /> */}
        <div className='bg-white flex px-3 py-1 gap-3 w-1/5 justify-between rounded-lg'>
        < ColorRing color={'red-500'} size={32} onClick={changeColor}/>
        < ColorRing color={'orange-500'} size={32} onClick={changeColor}/>
        < ColorRing color={'amber-500'} size={32} onClick={changeColor}/>
        < ColorRing color={'yellow-500'} size={32} onClick={changeColor}/>
        < ColorRing color={'lime-500'} size={32} onClick={changeColor}/>
        < ColorRing color={'green-500'} size={32} onClick={changeColor}/>
        < ColorRing color={'emerald-500'} size={32} onClick={changeColor}/>
        < ColorRing color={'teal-500'} size={32} onClick={changeColor}/>
        < ColorRing color={'cyan-500'} size={32} onClick={changeColor}/>
        < ColorRing color={'sky-500'} size={32} onClick={changeColor}/>
        < ColorRing color={'blue-500'} size={32} onClick={changeColor}/>
        < ColorRing color={'indigo-500'} size={32} onClick={changeColor}/>
        < ColorRing color={'violet-500'} size={32} onClick={changeColor}/>
        < ColorRing color={'purple-500'} size={32} onClick={changeColor}/>
        < ColorRing color={'fuchsia-500'} size={32} onClick={changeColor}/>
        < ColorRing color={'pink-500'} size={32} onClick={changeColor}/>
        < ColorRing color={'rose-500'} size={32} onClick={changeColor}/>
        </div>
        < Tiles width={5} height={5} color={selectedColor} />
    </div>
  );
}

export default App;
