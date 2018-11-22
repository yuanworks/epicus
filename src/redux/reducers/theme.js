const initialState = 'light';

const theme = (state = initialState, action) => {
  
  switch (action.type) {
    case 'THEME_SET':
      console.log(action);
      return action.payload.theme;

    default:
      return state;
  }
}

export default theme;
