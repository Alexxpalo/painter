import React, {useState} from 'react';

interface TileProps {
    width: number;
    height: number;
    color: string;
}

const Tile: React.FC<TileProps> = ({width, height, color}) => {

    const [tileArray, setTileArray] = useState(new Array(width * height).fill('white'));

    const paintTile = (index: number) => {
        setTileArray((prev) => {
            const newArray = [...prev];
            newArray[index] = color;
            return newArray;
            });
    };

    return (
        <div className={`flex flex-wrap bg-slate-200`} style={{height: height*50, width: width*50}}>
            {tileArray.map((tile, index) => {
                return (
                    <div className={`bg-${tile}`} style={{width: 50, height: 50}} key={index} onClick={() => paintTile(index)}/>
                );})}
        </div>
    );
};

export default Tile;