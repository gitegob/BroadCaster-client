export const pusher = (history, path) => {
  if (history.location.pathname === path)history.replace(path);
  else history.push(path);
};
