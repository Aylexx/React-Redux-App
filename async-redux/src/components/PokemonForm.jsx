import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions';

const PokemonForm = ({ fetchPokemon, fetchingPokemon }) => {
    const handlefetchPokemon = event => {
        event.preventDefault();
        fetchPokemon();
    };

    return (
        <div className='PokemonForm'>
            {fetchingPokemon ? 
                (
                <div>Currently fetching pokemon...</div>
                ) : 
                (
                <button onClick={handlefetchPokemon}>Fetch Pokemon!</button>
                )
            }
        </div>
    );
};


const mapStateToProps = state => {
    return {
        fetchingPokemon: state.fetchingPokemon
    }
}

export default connect(mapStateToProps, { fetchPokemon })(PokemonForm);