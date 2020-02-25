import React from 'react';
import './sass/Strain.scss';

const Strain = ({ strain }) => {
    return (
        <div className='Strain'>
            <h3 className='title'>{strain.name}</h3>
            <div className='strain-info'>
                <p className='data-element'>{`Strain Type: ${strain.race}`}</p>
                <p className='data-element'>Flavors:</p>
                    <ul>
    {                   strain.flavors.map(flavor => <li>{flavor}</li>)}
                    </ul>
                <p className='data-element'>Medical Benefits:</p>
                    <ul>
                        {strain.effects.medical.map(condition => <li>{condition}</li>)}
                    </ul>
                <p className='data-element'>Positive:</p>
                    <ul>
                        {strain.effects.positive.map(effect => <li>{effect}</li>)}
                    </ul>
                <p className='data-element'>Negative:</p>
                    <ul>
                        {strain.effects.negative.map(effect => <li>{effect}</li>)}
                    </ul>
            </div>
        </div>
    );
};

export default Strain;