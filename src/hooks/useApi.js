
const useApi = (initialState = '') => {


     const login = ()=> {
        console.log("hereee")
        return fetch(`http://localhost:8080/`,{
            method: "GET"
        })
            .then(res => {
                console.log(res)
                return res.json();
            }).catch(err=> console.log(err));

    };


    const createAccessToken = (token)=>{


        return fetch(`http://localhost:8080/oauth?code=${token}`,{
            method: "get",
            headers: {
                Accept: "application/json",
            },

        }).then(res => {
            return res.json();
        }).catch(err=> console.log(err));


    };

     const getGists =(token) => {
        return fetch(`https://api.github.com/gists/public`,{
            method: "get",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },

        }).then(res => {
            return res.json();
        }).catch(err=> console.log(err));
    }


    const getUser =(token) => {
        return fetch(`https://api.github.com/user`,{
            method: "get",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },

        }).then(res => {
            return res.json();
        }).catch(err=> console.log(err));
    }


    const userGists = (token) => {
        return fetch(`https://api.github.com/users/khizarkhan07/gists`,{
            method: "get",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },

        }).then(res => {
            return res.json();
        }).catch(err=> console.log(err));
    }

    const readGits = (url) => {

        return fetch(`${url}`,{
            method: "get",

        }).then(res => {

            return res.text();
        }).catch(err=> console.log(err));
    }

    const gistsForks = (url, token) => {

        return fetch(`${url}`,{
            method: "get",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },

        }).then(res => {
            return res.json();
        }).catch(err=> console.log(err));
    }

    const gistsById = (id) => {

        return fetch(`https://api.github.com/gists/${id}`,{
            method: "get",
            headers: {
                Accept: "application/json"
            },

        }).then(res => {
            return res.json();
        }).catch(err=> console.log(err));
    }


    return { getGists, login, createAccessToken, getUser, userGists, readGits, gistsForks, gistsById }
}

export default useApi