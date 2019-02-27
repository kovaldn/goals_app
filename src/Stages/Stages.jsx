import React from 'react';

export default ({ step }) => (
    <div>   
        {
            Array(10).fill('').map((_, i) => (
                <div key={i} isActive={i <= step} />
            ))
        }
    </div>
);