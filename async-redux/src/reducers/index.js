import { FETCH_STRAINS, UPDATE_STRAINS, SET_ERROR } from '../actions';

const initialState = {
    strainData: [],
    fetchingStrainData: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_STRAINS:
            return {
              ...state,
              fetchingStrainData: true,
              strainData: [],
            };

        case UPDATE_STRAINS:
            return {
                ...state,
                strainData: action.payload,
                fetchingStrainData: false
            };

            case SET_ERROR:
                return {
                  ...state,
                  fetchingStrainData: false,
                  error: action.payload
                };


        default:
            return state;
    }
}