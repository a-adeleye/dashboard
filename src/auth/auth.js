import toast from "react-hot-toast";

export default (function auth() {
  async function login(formdata) {
    const fetchHeaders = new Headers();
    fetchHeaders.append("App-Secret", "*(3%13@Uh@1");
    fetchHeaders.append("Platform", "web");

    const requestOptions = {
      method: "POST",
      headers: fetchHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://phplaravel-718120-2386003.cloudwaysapps.com/api/v1/auth/admin-login",
        requestOptions
      );

      if(!response.ok){
        toast.error("Invalid login details")
      }

      if (response.ok) {
        const data = await response.json();
        const sessionData = JSON.stringify(data.data)
        sessionStorage.setItem("sessionData", sessionData);
        return sessionData;
      }
      return Promise.reject(response);
    } catch (error) {
      console.log("error", error);
    }
  }

  async function logout() {
    const sessionData = JSON.parse(sessionStorage.getItem("sessionData"));
    const accessToken = sessionData.access_token;
    const refreshToken = sessionData.refresh_token;

    const fetchHeaders = new Headers();
    fetchHeaders.append("App-Secret", "*(3%13@Uh@1");
    fetchHeaders.append("Platform", "web");
    fetchHeaders.append("Accept", "application/json");
    fetchHeaders.append("Authorization", `Bearer ${refreshToken}`);

    const requestOptions = {
      method: "GET",
      headers: fetchHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `https://phplaravel-718120-2386003.cloudwaysapps.com/api/v1/auth/logout?access_token=${accessToken}`,
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        sessionStorage.removeItem("sessionData");
        document.location.reload();
        return data;
      }
      return Promise.reject(response);
    } catch (error) {
      console.log("error", error);
    }
  }

  async function fetchUserData() {
    const sessionData = JSON.parse(sessionStorage.getItem("sessionData"));
    const accessToken = sessionData.access_token;

    const fetchHeaders = new Headers();
    fetchHeaders.append("App-Secret", "*(3%13@Uh@1");
    fetchHeaders.append("Platform", "web");
    fetchHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: fetchHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://phplaravel-718120-2386003.cloudwaysapps.com/api/v1/me",
        requestOptions
      );

      if (!response.ok) {
        refreshToken().then((res) => {
          return res.me;
        });
      }

      if (response.ok) {
        const data = await response.json();
        return data.data;
      }
      
    } catch (error) {
      console.log("error", error);
    }
  }

  async function refreshToken() {
    //Retrieve session data from sessionStorage

    const sessionData = JSON.parse(sessionStorage.getItem("sessionData"));
    const accessToken = sessionData.access_token;
    const refreshToken = sessionData.refresh_token;

    const fetchHeaders = new Headers();
    fetchHeaders.append("App-Secret", "*(3%13@Uh@1");
    fetchHeaders.append("Platform", "web");
    fetchHeaders.append("Accept", "application/json");
    fetchHeaders.append("Authorization", `Bearer ${refreshToken}`);

    const requestOptions = {
      method: "GET",
      headers: fetchHeaders,
      redirect: "follow",
    };

    try {

      const response = await fetch(
        `https://phplaravel-718120-2386003.cloudwaysapps.com/api/v1/auth/refresh?access_token=${accessToken}`,
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();

        //Update sessiondata in sessionStorage
        const newSessionData = JSON.stringify(data.data);
        sessionStorage.setItem("sessionData", newSessionData);
        return newSessionData;
      }

      return Promise.reject(response);

    } catch (error) {
      console.log("error", error);
    }
  }

//Check if user is loggedin

  function isLoggedIn() {
    let sessionData = sessionStorage.getItem("sessionData");
    return sessionData ? true : false;
  }

  return { login, logout, fetchUserData, refreshToken, isLoggedIn };
})();
