import React from 'react';

interface ColorRingProps {
    color: string;
    size: number;
    onClick: (color: string) => void;
}

const ColorRing: React.FC<ColorRingProps> = ({color, size, onClick }) => {
    return (
        <div className={`rounded-full bg-${color} hover:drop-shadow-[0_0_5px_rgba(0,0,0,1)]`}
        style={{width: size, height: size}}
        onClick={() => onClick(color)}
        />
    );
};

export default ColorRing;