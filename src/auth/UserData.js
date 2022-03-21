import refreshToken from "./Refresh";

export default async function fetchUserData(accessToken) {
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
        return (res.profileData);
      });
    }

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    return Promise.reject(response);
    
  } catch (error) {
    console.log("error", error);
  }
}
