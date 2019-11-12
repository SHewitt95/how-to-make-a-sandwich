import { Actions } from './_utils/constants';

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.MAKE_SANDWICH:
      return {
        ...state,
        peopleCount: state.peopleCount -= 1,
      };
      
    default:
      return state;
  }
}

export default reducer;