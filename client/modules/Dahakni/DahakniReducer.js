import { ADD_DAHAKNI, ADD_DAHAKNIES, DELETE_DAHAKNI } from './DahakniActions';

// Initial State
const initialState = { data: [] };

const DahakniReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DAHAKNI :
      return {
        data: [action.dahakni, ...state.data],
      };

    case ADD_DAHAKNIES :
      console.log(action.dahaknies);
      return {
        data: action.dahaknies,
      };

    case DELETE_DAHAKNI :
      return {
        data: state.data.filter(dahakni => dahakni.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getDahaknies = state => state.dahaknies.data;

// Get post by cuid
export const getDahakni = (state, cuid) => state.dahaknies.data.filter(dahakni => dahakni.cuid === cuid)[0];

// Export Reducer
export default DahakniReducer;
