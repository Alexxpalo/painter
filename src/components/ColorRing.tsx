import React from 'react';

interface ColorRingProps {
    color: string;
    size: number;
    onClick: (color: string) => void;
}

const ColorRing: React.FC<ColorRingProps> = ({ color, size, onClick }) => {

    return (
        <div className={`hover:drop-shadow-[0_0_2px_rgba(255,255,255,1)]`}
            style={{ width: size, height: size, backgroundColor: color }}
            onClick={() => onClick(color)}
        />
    );
};

export default ColorRing;