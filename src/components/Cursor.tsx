import React from 'react';
interface CursorProps {
    mouseX: number;
    mouseY: number;
    sizeL: number;
    sizeM: number;
}

const Cursor: React.FC<CursorProps> = ({mouseX, mouseY, sizeL, sizeM}) => {


    return (
        <>
        <div
            className="
            absolute
            border
            border-white
            rounded-full
            opacity-50
            z-10
            "
            style={{width: sizeL, height: sizeL, transform: 'translate(' + (mouseX-sizeL/2) + 'px, ' + (mouseY-sizeL/2) + 'px)', transition: 'all 0.3s linear'}}
        />
        <div
            className="
            absolute
            border
            border-white
            rounded-full
            z-10
            "
            style={{width: sizeM, height: sizeM, transform: 'translate(' + (mouseX-sizeM/2) + 'px, ' + (mouseY-sizeM/2) + 'px)', transition: 'all 0.05s linear'}}
        />
        </>
    );
};

export default Cursor;