import SETTINGS from '../../constants/settings';

export const setTheme = theme => ({
  type: SETTINGS.Actions.SetTheme,
  payload: { theme },
});
