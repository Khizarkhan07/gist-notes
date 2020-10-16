export const autheticate = (token, data) => {

    window.localStorage.setItem("token", token);
    window.localStorage.setItem("user",  JSON.stringify(data));
}

export const logOut = () => {
    if(localStorage.getItem("user")){
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }
    else{
        return false;
    }
}

export const isAuthenticated = () => {
    if(typeof window == "undefined"){
        return false;
    }
    if(localStorage.getItem("user")){
        return JSON.parse(localStorage.getItem("user"));
    }
    else{
        return false;
    }
};


export const isAuthToken= () => {
    if(typeof window == "undefined"){
        return false;
    }
    if(localStorage.getItem("token")){
        return JSON.parse(localStorage.getItem("token"));
    }
    else{
        return false;
    }
};

