export async function loginUser(formdata) {
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
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return Promise.reject(response);
  } catch (error) {
    console.log("error", error);
  }
}

export async function getUser(token) {
  const fetchHeaders = new Headers();
  fetchHeaders.append("App-Secret", "*(3%13@Uh@1");
  fetchHeaders.append("Platform", "web");
  fetchHeaders.append("Authorization", `Bearer ${token}`);

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
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return Promise.reject(response);
  } catch (error) {
    console.log("error", error);
  }
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
