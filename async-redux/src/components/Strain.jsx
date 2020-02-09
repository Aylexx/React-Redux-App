import React from 'react';

const Strain = ({ strain }) => {
    return (
        <div className='Strain'>
            <p>`Strain type: ${strain.race}`</p>
            {strain.flavors.map(flavor => <p>{flavor}</p>)}
        </div>
    );
};

export default Strain;