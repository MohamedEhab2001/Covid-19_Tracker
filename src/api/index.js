import axios from "axios";
const URL = "https://covid19.mathdro.id/api";

export const getGlobal = async (country = "") => {
  let tragetURL = URL;
  if (country !== "") {
    tragetURL = tragetURL + `/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(tragetURL);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const DailyData = async () => {
  try {
    const { data } = await axios.get(`${URL}/daily`);
    const usedData = data.map((d) => ({
      confirmed: d.confirmed.total,
      deaths: d.deaths.total,
      recovered: d.recovered.total,
      reportDate: d.reportDate,
    }));
    return usedData;
  } catch (error) {
    console.log(error);
  }
};

export const Countries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${URL}/countries`);
    const usedData = countries.map((country) => country.name);
    return usedData;
  } catch (error) {
    console.log(error);
  }
};
