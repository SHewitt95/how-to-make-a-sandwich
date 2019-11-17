import { Actions } from './_utils/constants';
import DefaultState from './State';

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.MAKE_SANDWICH:
      if (state.peopleCount - action.payload <= 0) {
        return {
          ...state,
          isGameActive: false,
          peopleCount: 0,
        }
      }
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

    case Actions.ACTIVATE_AUTO_ARMS:
      return {
        ...state,
        autoPlayerLevelActive: true,
      }

    case Actions.LOAD_GAME:
      return {
        ...state,
        ...action.payload,
      }

    case Actions.SAVE_GAME:
      const saveState = JSON.stringify(state);
      window.localStorage.setItem('sandwich-game', saveState);
      return state;

    case Actions.RESET_GAME:
      return {
        ...DefaultState,
      }

    default:
      return state;
  }
}

export default reducer;