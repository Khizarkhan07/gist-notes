export const login = ()=> {
    console.log("hereee")
    return fetch(`http://localhost:8080/`,{
        method: "GET"
    })
        .then(res => {
            console.log(res)
            return res.json();
        }).catch(err=> console.log(err));

};


export const createAccessToken = (token)=>{


    return fetch(`http://localhost:8080/oauth?code=${token}`,{
        method: "get",
        headers: {
            Accept: "application/json",
        },

    }).then(res => {
        return res.json();
    }).catch(err=> console.log(err));


};

export const getUser =(token) => {
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

export const getGists =() => {
    return fetch(`https://api.github.com/gists/public`,{
        method: "get",
        headers: {
            Accept: "application/json",
        },

    }).then(res => {
        return res.json();
    }).catch(err=> console.log(err));
}


export const userGists = () => {
    return fetch(`https://api.github.com/users/khizarkhan07/gists`,{
        method: "get",
        headers: {
            Accept: "application/json",
        },

    }).then(res => {
        return res.json();
    }).catch(err=> console.log(err));
}


export const readGists =(url) => {
    return fetch(`${url}`,{
        method: "get",
        headers: {
            Accept: "application/json",
        },

    }).then(res => {
        return res.json();
    }).catch(err=> console.log(err));
}

export const gistsForks = (url) => {

    return fetch(`${url}`,{
        method: "get",
        headers: {
            Accept: "application/json",
        },

    }).then(res => {
        return res.json();
    }).catch(err=> console.log(err));
}