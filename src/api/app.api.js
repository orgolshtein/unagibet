export const serverUrl = "http://localhost:4400";
export const assetUrl = `${serverUrl}/src/assets`;

export async function riseAndShine() {
  // const urls = ["https://histl.onrender.com", "https://redrossent.onrender.com"];
  // urls.forEach(async (url, i)=>{
  //   console.log(`Called server ${i+1}`)
  //   await fetch(url);
  // })
};

export async function fetchData(type) {
  const slider_data = await (await fetch(`${serverUrl}/crud/get-${type}-data`)).json();
  return slider_data;
};

export async function updateSlider(data) {
  const url = `${serverUrl}/crud/update-slider-data`;
  const options = {
    method: "POST",
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify({
      slider_data: data
    })
  };
  return await (await fetch(url, options)).json();
};

export async function updateGames(data) {
  const url = `${serverUrl}/crud/update-games-data`;
  const options = {
    method: "POST",
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify({
      games_data: data
    })
  };
  return await (await fetch(url, options)).json();
};

export async function adminLogin(username, password) {
  const url = `${serverUrl}/admin/admin-login`;
  const options = {
    method: "POST",
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify({
      username: username,
      password: password
    })
  };
  return await (await fetch(url, options)).json()/* : null */;
};
