import React from 'react';
import Stages from '../Stages/Stages';

export default ({ step }) => (
    <div>   
        <h1>Приложение по созданию целей</h1>
        <Stages step={step} />
    </div>
);