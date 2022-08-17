import React, { useState } from 'react';

export default function ColorBtn({ colors }) {
    const [currentColorIdx, setColorIdx] = useState(0);

    const nextColor = () =>
        setColorIdx((idx) => (idx === colors.length - 1 ? 0 : idx + 1));
    
    return (
        <div className='container'>
            <button
                style={{ backgroundColor: colors[currentColorIdx] }}
                onClick={nextColor}
            >
                Change Color
            </button>
        </div> 
    )
}

