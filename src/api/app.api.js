const sliderDataUrl = "https://api.npoint.io/2faed63973ec7f79740a";
const gameDataUrl = "https://api.npoint.io/d51778e00788e90bb674";
export const assetUrl = "https://staticunagibet.netlify.app";

export async function fetchSliderData() {
  const slider_data = await (await fetch(sliderDataUrl)).json();
  return slider_data;
};

export async function fetchHomeGameData() {
    const url_data = await (await fetch(gameDataUrl)).json();
    const games_data = url_data.map((item)=>({...item, show: true}))
    return games_data;
};

export async function fetchNewGameData() {
  const url_data = await (await fetch(gameDataUrl)).json();
  const new_games_data = url_data.filter((item) => item.new === true).map((item)=>({...item, show: true}))
  return new_games_data;
};

export async function fetchSlotsGameData() {
  const url_data = await (await fetch(gameDataUrl)).json();
  const slots_games_data = url_data.filter((item) => item.type === "slot").map((item)=>({...item, show: true}))
  return slots_games_data;
};

export async function fetchTableGameData() {
  const url_data = await (await fetch(gameDataUrl)).json();
  const table_games_data = url_data.filter((item) => item.type === "table").map((item)=>({...item, show: true}))
  return table_games_data;
};