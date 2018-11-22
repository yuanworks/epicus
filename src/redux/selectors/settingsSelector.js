export const getTheme = store => {
  console.log('theme', store);
  return store.settings.theme;
}
