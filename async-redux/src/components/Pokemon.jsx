import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPokemon } from '../actions';

const Pokemon = ({ error, fetchPokemon, pokemon }) => {
    useEffect(() => {
        fetchPokemon();
    }, []);

    if (pokemon.results) {
        return (
            <div className='Pokemon'>
                <h1>Pokemon!</h1>
                {pokemon.results.map(monster => <p>{monster.name}</p> )}
            </div>
        );
    }
    else {
        return (
            <div className='Pokemon'>
                <h1>Pokemon!</h1>
                <p>Fetching results...</p>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchPokemon })(Pokemon);