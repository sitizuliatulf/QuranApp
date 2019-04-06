export const DetailTime = item => {
  let date = new Date();
  let currHour = date.getHours();
  let currMinutes = date.getMinutes();
  let getHourToMinutes = currHour * 60;
  let currTime = getHourToMinutes + currMinutes;

  let timeFromApi = item.time;
  let hourApi = parseInt(timeFromApi.split(":")[0]);
  let minutesApi = parseInt(timeFromApi.split(":")[1]);
  let hourApiToMinutes = hourApi * 60;
  let getTimeFromApi = hourApiToMinutes + minutesApi;

  let resultTime = getTimeFromApi - currTime;
  let minutes = resultTime % 60;
  let hour = (resultTime - minutes) / 60;
  if (currTime < getTimeFromApi) {
    return `Time ${hour} hour ${minutes} minutes until ${item.name}`;
  }
  return `Waktu sudah melebihi`;
};
