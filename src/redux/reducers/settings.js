import SETTINGS from "../../constants/settings";
import { Map } from "immutable";

const initialState = Map({
  theme: SETTINGS.Themes.Default,
});

const settings = (state = initialState, action) => {
  
  switch (action.type) {
    case SETTINGS.Actions.SetTheme:
      return state.set('theme', action.payload.theme);
    
    default:
      return state;
  }
}

export default settings;
