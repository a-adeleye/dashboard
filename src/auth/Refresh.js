export default async function refreshToken() {
  //Retrieve session data from sessionStorage

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
      `https://phplaravel-718120-2386003.cloudwaysapps.com/api/v1/auth/refresh?access_token=${accessToken}`,
      requestOptions
    );
    if (response.ok) {
      //Update sessiondata in sessionStorage

      const data = await response.json();
      sessionStorage.setItem(
        "sessionData",
        JSON.stringify({
          accessToken: data.data.access_token,
          refreshToken: data.data.refresh_token,
          profileData: data.data.me,
        })
      );
      console.log("refreshed");
      const newSessionData = JSON.parse(sessionStorage.getItem("sessionData"));
      return newSessionData;
    } 
  } catch (error) {
    console.log("error", error);
  }
}
