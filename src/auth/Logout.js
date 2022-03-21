import { trackPromise } from "react-promise-tracker";

export default async function logout() {
  
  const sessionData = JSON.parse(sessionStorage.getItem("sessionData"));
  const accessToken = sessionData.accessToken;
  const refreshToken = sessionData.refreshToken;

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
      console.log("loggedout");
      console.log(data);
      document.location.reload();
      return data;
    }
    return Promise.reject(response);
  } catch (error) {
    console.log("error", error);
  }
}
