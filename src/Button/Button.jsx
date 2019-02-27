import React from 'react';

export default ({ background, handleClick, isDisabled, value }) => (
    <div background={background}>   
        <button 
            onClick={handleClick}
            disabled={isDisabled}
        >
        {value}
        </button>
    </div>
);