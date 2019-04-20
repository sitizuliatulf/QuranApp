export const informationTime = item => {
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

export const prayerTimes = data => {
  let tmp = {
    name: "",
    time: ""
  };

  console.log(555);

  let time = new Date();
  let currHour = time.getHours();
  let currMinutes = time.getMinutes();
  let hourToMinutes = currHour * 60;
  let currTime = hourToMinutes + currMinutes;
  let key = Object.keys(data);
  //key = Fajr,Sunrise,Dhuhr

  for (let i = 0; i < key.length; i++) {
    if (
      key[i] == "Fajr" ||
      key[i] == "Dhuhr" ||
      key[i] == "Asr" ||
      key[i] == "Maghrib" ||
      key[i] == "Isha"
    ) {
      let timeFromApi = data[key[i]];
      let hourApi = parseInt(timeFromApi.split(":")[0]);
      let minutesApi = parseInt(timeFromApi.split(":")[1]);
      let hourApiToMinutes = hourApi * 60;
      let getTimeFromApi = hourApiToMinutes + minutesApi;

      if (currTime < getTimeFromApi) {
        tmp = {
          name: key[i],
          time: timeFromApi
        };
        break;
      }
      // jika waktu sekarang lebih dari value  time index terakhir
      // dimana key nya [fajr,dhuhr,asr,magrib,isha]
      // length = 5
      // kalau waktu sekarang udah melewati value dari index ke 5
      // maka waktu mendekati value dari index ke 1

      if (currTime > getTimeFromApi && i == key.length - 1) {
        var names = key[0];
        var times = data[names];
        tmp = {
          name: names,
          time: times
        };
      }
    }
  }

  return tmp;
};

export const trasformPrayerTimesToArr = data => {
  let tmp = [];
  var key = Object.keys(data);
  console.log(data);
  for (let i = 0; i < key.length; i++) {
    if (
      key[i] == "Fajr" ||
      key[i] == "Dhuhr" ||
      key[i] == "Asr" ||
      (key[i] == "Maghrib") | (key[i] == "Isha")
    ) {
      tmp = tmp.concat({
        name: key[i],
        time: data[key[i]]
      });
    }
  }
  return tmp;
};
