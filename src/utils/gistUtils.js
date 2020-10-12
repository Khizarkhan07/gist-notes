
export const searchGists = (gists, search) => {
    const result= gists.filter(gist => gist.name === search.search);
    return result;

}