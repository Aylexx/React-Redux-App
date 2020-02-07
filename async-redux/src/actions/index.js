import axios from 'axios';

export const FETCH_POKEMON = 'FETCH_POKEMON';
export const UPDATE_POKEMON = 'UPDATE_POKEMON';
export const SET_ERROR = 'SET_ERROR';

export const fetchPokemon = () => dispatch => {
    dispatch({ type: FETCH_POKEMON });
    setTimeout(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon', {
                params: {
                    limit: 10
                }
            })
            .then(res => {
                console.log(res);
                dispatch({ type: UPDATE_POKEMON, payload: res.data });

            })
            .catch(err => {
                console.error(`error fetching pokemon from API! err: ${err}`);
                dispatch({ type: SET_ERROR, payload: 'Error fetching pokemon from API!' });
            });
    }, 2000);
}