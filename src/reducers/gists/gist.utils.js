export const searchGist = (data, searchString) => {
  return data.filter((gist) => gist.owner.login === searchString);
};
