export const autheticate = (token, data) => {
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("user", JSON.stringify(data));
};

export const logOut = () => {
  if (localStorage.getItem("user")) {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  } else {
    return false;
  }
};

export const getAuthenticatedUser = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};

export const isAuthToken = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("token")) {
    return JSON.parse(localStorage.getItem("token"));
  } else {
    return false;
  }
};

export const PageNumbers = (length, perPage) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(length / perPage); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
};
