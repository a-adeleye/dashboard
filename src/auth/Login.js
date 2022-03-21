export default async function login(formdata) {
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

export function isLoggedIn() {
  let sessionData = sessionStorage.getItem("sessionData");
  return sessionData ? true : false;
}
