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
