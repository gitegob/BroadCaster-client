export const BASEURL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASEURL : 'http://localhost:5000';
export const pusher = (history, path) => {
  if (history.location.pathname === path)history.replace(path);
  else history.push(path);
};

export const sendFeedback = async (body) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  const res = await (await fetch(`${BASEURL}/api/v1/feedback`, config)).json();
  return res;
};
