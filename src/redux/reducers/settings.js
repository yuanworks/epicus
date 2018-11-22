const initialState = {
  theme: 'light',
};

const settings = (state = initialState, action) => {
  
  switch (action.type) {
    case 'THEME_SET':
      console.log(action);
      return {...state, theme: action.payload.theme};

    default:
      return state;
  }
}

export default settings;
