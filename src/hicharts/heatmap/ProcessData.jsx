// import React from "react";

function ProcessData(data,apiData) {
  // console.log(apiData[0][0].visits);
  // const d = new Date("July 21, 1983 01:15:00");
  const d = new Date(apiData[0][0].date);
  let day = d.getDay();

  let j = 0;
  for (let i = day; i < data.length; i++) {
    if (apiData[0][j]?.visits) {
      data[i].value = apiData[0][j].visits;
    } else {
      data[i].value = "";
    }
    j++;
  }

  return data;
}

export default ProcessData;
