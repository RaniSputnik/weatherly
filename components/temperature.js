import React from 'react';

const Temperature = ({ value, unit }) => (
    <div className='has-text-centered'>
        <span style={{fontSize: '10rem'}}>{value}</span>
        <span style={{fontSize: '2rem', verticalAlign: 'calc(5rem)'}}>{getUnit(unit)}</span>
    </div>
);

const getUnit = (unit) => {
    switch (unit) {
        case 'celsius':
            return '℃';
        case 'fahrenheit':
            return '℉';
    }
    return '';
}

export default Temperature;