import SETTINGS from "../../constants/settings";

const initialState = {
  theme: SETTINGS.Themes.Default,
};

const settings = (state = initialState, action) => {
  
  switch (action.type) {
    case SETTINGS.Actions.SetTheme:
      return {...state, theme: action.payload.theme};

    default:
      return state;
  }
}

export default settings;
