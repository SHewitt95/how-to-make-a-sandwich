import { Actions } from './_utils/constants';

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.MAKE_SANDWICH:
      console.log(action.payload);
      return {
        ...state,
        peopleCount: state.peopleCount -= (action.payload || 1),
      };
      
    case Actions.UP_PLAYER_LEVEL:
      return {
        ...state,
        playerLevel: state.playerLevel += action.payload,
      };

    case Actions.UPGRADE_MENU_ITEM:
      console.log(state.menuItems)
      return {
        ...state,
        menuItems: {
          ...state.menuItems,
          [action.itemName]: {
            ...state.menuItems[action.itemName],
            level: state.menuItems[action.itemName].level += action.payload,
          },
        },
      };

    default:
      return state;
  }
}

export default reducer;