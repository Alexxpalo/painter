import React, { useState } from 'react';

interface TileProps {
    width: number;
    height: number;
    tileSize: number;
    color: string;
}

const Tile: React.FC<TileProps> = ({ width, height, tileSize, color }) => {

    const [tileArray, setTileArray] = useState(new Array(width * height).fill('white'));

    const paintTile = (index: number) => {
        setTileArray((prev) => {
            const newArray = [...prev];
            newArray[index] = color;
            return newArray;
        });
    };

    return (
        <div className={`flex flex-wrap`} style={{ height: height * tileSize, width: width * tileSize }}>
            {tileArray.map((tile, index) => {
                return (
                    <div className={`hover:border hover:border-black`} style={{ width: tileSize, height: tileSize, backgroundColor: tile }} key={index} onClick={() => paintTile(index)} />
                );
            })}
        </div>
    );
};

export default Tile;