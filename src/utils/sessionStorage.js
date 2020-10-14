export const autheticate = (token, data) => {

    window.localStorage.setItem("token", token);
    window.localStorage.setItem("user",  JSON.stringify(data));
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