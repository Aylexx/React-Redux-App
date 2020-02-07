import { FETCH_POKEMON, UPDATE_POKEMON, SET_ERROR } from '../actions';

const initialState = {
    pokemon: [],
    fetchingPokemon: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON:
            return {
                ...state,
                fetchingPokemon: true
            };
        case UPDATE_POKEMON:
            return {
                ...state,
                pokemon: action.payload,
                fetchingPokemon: false
            };
        case SET_ERROR:
            return {
                ...state,
                fetchingPokemon: false,
                error: action.payload
            };
        default:
            return state;
    }
}