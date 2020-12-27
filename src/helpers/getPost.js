export const getPost = async () => {
  const URL = 'https://jsonplaceholder.typicode.com/posts';
  const resp = await fetch(URL);
  const data = await resp.json();
  return data;
};
