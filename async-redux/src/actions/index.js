// Using The Strain API
// API key:  oNKr3rg

import axios from 'axios';

export const FETCH_STRAINS = 'FETCH_STRAINS';
export const UPDATE_STRAINS = 'UPDATE_STRAINS';
export const SET_ERROR = 'SET_ERROR';

export const fetchStrains = () => dispatch => {
    dispatch({ type: FETCH_STRAINS });
    setTimeout(() => {
        axios
            .get('http://strainapi.evanbusse.com/oNKr3rg/strains/search/all')
            .then(res => { 

                // Names of strains in order:
                const objKeys = Object.keys(res.data);

                // strain information as objects, in order:
                const objValues = Object.values(res.data);

                // Initializes array for strain object with name added:
                let combinedArray = [];

                // Traditional For loop to combine name with strainObj at respective index:
                for (var i = 0; i < objValues.length; i++) {
                    const currentStrainObj = {
                        ...objValues[i],
                        name: objKeys[i]
                    };
                    combinedArray[i] = currentStrainObj;
                }

                dispatch({ type: UPDATE_STRAINS, payload: combinedArray });
            })
            .catch(err => {
                console.error(`error fetching strains from API! err: ${err}`);
                dispatch({ type: SET_ERROR, payload: 'Error fetching strains from API!' });
            });
    }, 2000);
}