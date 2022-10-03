import { flatten, range } from "lodash";

export const DaysInCalendar = flatten(
  range(6).map((week) => {
    return range(7).map((day) => {
      return { x: day, y: week, value: "" };
    });
  })
);

export const BadgesData = [
  {
    officeVisits: 7299,
    dateVisited: "2021-03-22",
    weekDayStr: "Monday",
    month: "March",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 3
  },
  {
    officeVisits: 7579,
    dateVisited: "2021-04-02",
    weekDayStr: "Friday",
    month: "April",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 0
  },
  {
    officeVisits: 10676,
    dateVisited: "2021-07-04",
    weekDayStr: "Sunday",
    month: "July",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 0
  },
  {
    officeVisits: 11069,
    dateVisited: "2021-05-02",
    weekDayStr: "Sunday",
    month: "May",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 0
  },
  {
    officeVisits: 11741,
    dateVisited: "2021-04-04",
    weekDayStr: "Sunday",
    month: "April",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 0
  },
  {
    officeVisits: 11762,
    dateVisited: "2021-03-23",
    weekDayStr: "Tuesday",
    month: "March",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 3
  },
  {
    officeVisits: 12056,
    dateVisited: "2021-04-03",
    weekDayStr: "Saturday",
    month: "April",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 0
  },
  {
    officeVisits: 13084,
    dateVisited: "2021-03-31",
    weekDayStr: "Wednesday",
    month: "March",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 4
  },
  {
    officeVisits: 13473,
    dateVisited: "2021-07-25",
    weekDayStr: "Sunday",
    month: "July",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 3
  },
  {
    officeVisits: 13514,
    dateVisited: "2021-06-13",
    weekDayStr: "Sunday",
    month: "June",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 1
  },
  {
    officeVisits: 13960,
    dateVisited: "2021-05-01",
    weekDayStr: "Saturday",
    month: "May",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 0
  },
  {
    officeVisits: 14281,
    dateVisited: "2021-08-15",
    weekDayStr: "Sunday",
    month: "August",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 2
  },
  {
    officeVisits: 14476,
    dateVisited: "2021-02-28",
    weekDayStr: "Sunday",
    month: "February",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 3
  },
  {
    officeVisits: 14812,
    dateVisited: "2021-09-22",
    weekDayStr: "Wednesday",
    month: "September",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 3
  },
  {
    officeVisits: 15123,
    dateVisited: "2021-02-21",
    weekDayStr: "Sunday",
    month: "February",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 2
  },
  {
    officeVisits: 15245,
    dateVisited: "2021-03-07",
    weekDayStr: "Sunday",
    month: "March",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 0
  },
  {
    officeVisits: 15296,
    dateVisited: "2021-07-03",
    weekDayStr: "Saturday",
    month: "July",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 0
  },
  {
    officeVisits: 15407,
    dateVisited: "2021-02-27",
    weekDayStr: "Saturday",
    month: "February",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 3
  },
  {
    officeVisits: 15591,
    dateVisited: "2021-07-05",
    weekDayStr: "Monday",
    month: "July",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 0
  },
  {
    officeVisits: 15940,
    dateVisited: "2021-03-14",
    weekDayStr: "Sunday",
    month: "March",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 1
  },
  {
    officeVisits: 16206,
    dateVisited: "2021-04-11",
    weekDayStr: "Sunday",
    month: "April",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 1
  },
  {
    officeVisits: 16210,
    dateVisited: "2021-03-21",
    weekDayStr: "Sunday",
    month: "March",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 2
  },
  {
    officeVisits: 16406,
    dateVisited: "2021-04-18",
    weekDayStr: "Sunday",
    month: "April",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 2
  },
  {
    officeVisits: 16463,
    dateVisited: "2021-03-13",
    weekDayStr: "Saturday",
    month: "March",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 1
  },
  {
    officeVisits: 16553,
    dateVisited: "2021-04-17",
    weekDayStr: "Saturday",
    month: "April",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 2
  },
  {
    officeVisits: 16747,
    dateVisited: "2021-07-24",
    weekDayStr: "Saturday",
    month: "July",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 3
  },
  {
    officeVisits: 17232,
    dateVisited: "2021-03-06",
    weekDayStr: "Saturday",
    month: "March",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 0
  },
  {
    officeVisits: 17522,
    dateVisited: "2021-05-29",
    weekDayStr: "Saturday",
    month: "May",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 4
  },
  {
    officeVisits: 17584,
    dateVisited: "2021-02-23",
    weekDayStr: "Tuesday",
    month: "February",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 3
  },
  {
    officeVisits: 17666,
    dateVisited: "2021-04-10",
    weekDayStr: "Saturday",
    month: "April",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 1
  },
  {
    officeVisits: 17723,
    dateVisited: "2021-03-20",
    weekDayStr: "Saturday",
    month: "March",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 2
  },
  {
    officeVisits: 17908,
    dateVisited: "2021-06-12",
    weekDayStr: "Saturday",
    month: "June",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 1
  },
  {
    officeVisits: 18075,
    dateVisited: "2021-05-30",
    weekDayStr: "Sunday",
    month: "May",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 4
  },
  {
    officeVisits: 18137,
    dateVisited: "2021-02-22",
    weekDayStr: "Monday",
    month: "February",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 3
  },
  {
    officeVisits: 18255,
    dateVisited: "2021-03-28",
    weekDayStr: "Sunday",
    month: "March",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 3
  },
  {
    officeVisits: 18442,
    dateVisited: "2021-05-23",
    weekDayStr: "Sunday",
    month: "May",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 3
  },
  {
    officeVisits: 18467,
    dateVisited: "2021-05-09",
    weekDayStr: "Sunday",
    month: "May",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 1
  },
  {
    officeVisits: 18599,
    dateVisited: "2021-04-25",
    weekDayStr: "Sunday",
    month: "April",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 3
  },
  {
    officeVisits: 18961,
    dateVisited: "2021-06-06",
    weekDayStr: "Sunday",
    month: "June",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 0
  },
  {
    officeVisits: 19030,
    dateVisited: "2021-05-15",
    weekDayStr: "Saturday",
    month: "May",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 2
  },
  {
    officeVisits: 19208,
    dateVisited: "2021-04-24",
    weekDayStr: "Saturday",
    month: "April",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 3
  },
  {
    officeVisits: 19236,
    dateVisited: "2021-03-27",
    weekDayStr: "Saturday",
    month: "March",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 3
  },
  {
    officeVisits: 19238,
    dateVisited: "2021-08-14",
    weekDayStr: "Saturday",
    month: "August",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 1
  },
  {
    officeVisits: 19289,
    dateVisited: "2021-06-20",
    weekDayStr: "Sunday",
    month: "June",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 2
  },
  {
    officeVisits: 19452,
    dateVisited: "2021-05-03",
    weekDayStr: "Monday",
    month: "May",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 0
  },
  {
    officeVisits: 19750,
    dateVisited: "2021-06-05",
    weekDayStr: "Saturday",
    month: "June",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 0
  },
  {
    officeVisits: 19959,
    dateVisited: "2021-07-18",
    weekDayStr: "Sunday",
    month: "July",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 2
  },
  {
    officeVisits: 19999,
    dateVisited: "2021-02-26",
    weekDayStr: "Friday",
    month: "February",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 3
  },
  {
    officeVisits: 20129,
    dateVisited: "2021-09-06",
    weekDayStr: "Monday",
    month: "September",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 0
  },
  {
    officeVisits: 20197,
    dateVisited: "2021-05-16",
    weekDayStr: "Sunday",
    month: "May",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 2
  },
  {
    officeVisits: 20220,
    dateVisited: "2021-02-24",
    weekDayStr: "Wednesday",
    month: "February",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 3
  },
  {
    officeVisits: 20390,
    dateVisited: "2021-03-22",
    weekDayStr: "Monday",
    month: "March",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 3
  },
  {
    officeVisits: 20460,
    dateVisited: "2021-03-08",
    weekDayStr: "Monday",
    month: "March",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 1
  },
  {
    officeVisits: 20593,
    dateVisited: "2021-09-11",
    weekDayStr: "Saturday",
    month: "September",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 1
  },
  {
    officeVisits: 20768,
    dateVisited: "2021-05-08",
    weekDayStr: "Saturday",
    month: "May",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 1
  },
  {
    officeVisits: 20815,
    dateVisited: "2021-06-27",
    weekDayStr: "Sunday",
    month: "June",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 3
  },
  {
    officeVisits: 20817,
    dateVisited: "2021-02-25",
    weekDayStr: "Thursday",
    month: "February",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 3
  },
  {
    officeVisits: 21016,
    dateVisited: "2021-08-21",
    weekDayStr: "Saturday",
    month: "August",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 2
  },
  {
    officeVisits: 21052,
    dateVisited: "2021-08-22",
    weekDayStr: "Sunday",
    month: "August",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 3
  },
  {
    officeVisits: 21064,
    dateVisited: "2021-06-26",
    weekDayStr: "Saturday",
    month: "June",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 3
  },
  {
    officeVisits: 21183,
    dateVisited: "2021-06-14",
    weekDayStr: "Monday",
    month: "June",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 1
  },
  {
    officeVisits: 21238,
    dateVisited: "2021-03-01",
    weekDayStr: "Monday",
    month: "March",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 0
  },
  {
    officeVisits: 21498,
    dateVisited: "2021-05-22",
    weekDayStr: "Saturday",
    month: "May",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 3
  },
  {
    officeVisits: 21507,
    dateVisited: "2021-05-04",
    weekDayStr: "Tuesday",
    month: "May",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 0
  },
  {
    officeVisits: 21591,
    dateVisited: "2021-08-29",
    weekDayStr: "Sunday",
    month: "August",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 4
  },
  {
    officeVisits: 22093,
    dateVisited: "2021-03-03",
    weekDayStr: "Wednesday",
    month: "March",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 0
  },
  {
    officeVisits: 22099,
    dateVisited: "2021-08-01",
    weekDayStr: "Sunday",
    month: "August",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 0
  },
  {
    officeVisits: 22124,
    dateVisited: "2021-03-02",
    weekDayStr: "Tuesday",
    month: "March",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 0
  },
  {
    officeVisits: 22140,
    dateVisited: "2021-08-28",
    weekDayStr: "Saturday",
    month: "August",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 3
  },
  {
    officeVisits: 22178,
    dateVisited: "2021-04-05",
    weekDayStr: "Monday",
    month: "April",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 0
  },
  {
    officeVisits: 22189,
    dateVisited: "2021-05-31",
    weekDayStr: "Monday",
    month: "May",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 4
  },
  {
    officeVisits: 22212,
    dateVisited: "2021-07-11",
    weekDayStr: "Sunday",
    month: "July",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 1
  },
  {
    officeVisits: 22296,
    dateVisited: "2021-09-19",
    weekDayStr: "Sunday",
    month: "September",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 2
  },
  {
    officeVisits: 22304,
    dateVisited: "2021-03-15",
    weekDayStr: "Monday",
    month: "March",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 2
  },
  {
    officeVisits: 22411,
    dateVisited: "2021-04-12",
    weekDayStr: "Monday",
    month: "April",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 1
  },
  {
    officeVisits: 22625,
    dateVisited: "2021-03-05",
    weekDayStr: "Friday",
    month: "March",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 0
  },
  {
    officeVisits: 22673,
    dateVisited: "2021-04-16",
    weekDayStr: "Friday",
    month: "April",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 2
  },
  {
    officeVisits: 22761,
    dateVisited: "2021-09-04",
    weekDayStr: "Saturday",
    month: "September",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 0
  },
  {
    officeVisits: 22801,
    dateVisited: "2021-04-19",
    weekDayStr: "Monday",
    month: "April",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 2
  },
  {
    officeVisits: 22838,
    dateVisited: "2021-07-02",
    weekDayStr: "Friday",
    month: "July",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 0
  },
  {
    officeVisits: 22858,
    dateVisited: "2021-03-19",
    weekDayStr: "Friday",
    month: "March",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 2
  },
  {
    officeVisits: 22868,
    dateVisited: "2021-06-19",
    weekDayStr: "Saturday",
    month: "June",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 2
  },
  {
    officeVisits: 22997,
    dateVisited: "2021-03-09",
    weekDayStr: "Tuesday",
    month: "March",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 1
  },
  {
    officeVisits: 23083,
    dateVisited: "2021-08-08",
    weekDayStr: "Sunday",
    month: "August",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 1
  },
  {
    officeVisits: 23177,
    dateVisited: "2021-07-17",
    weekDayStr: "Saturday",
    month: "July",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 2
  },
  {
    officeVisits: 23180,
    dateVisited: "2021-03-12",
    weekDayStr: "Friday",
    month: "March",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 1
  },
  {
    officeVisits: 23429,
    dateVisited: "2021-07-10",
    weekDayStr: "Saturday",
    month: "July",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 1
  },
  {
    officeVisits: 23799,
    dateVisited: "2021-09-05",
    weekDayStr: "Sunday",
    month: "September",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 0
  },
  {
    officeVisits: 23931,
    dateVisited: "2021-05-10",
    weekDayStr: "Monday",
    month: "May",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 1
  },
  {
    officeVisits: 24003,
    dateVisited: "2021-04-13",
    weekDayStr: "Tuesday",
    month: "April",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 1
  },
  {
    officeVisits: 24007,
    dateVisited: "2021-03-26",
    weekDayStr: "Friday",
    month: "March",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 3
  },
  {
    officeVisits: 24115,
    dateVisited: "2021-04-09",
    weekDayStr: "Friday",
    month: "April",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 1
  },
  {
    officeVisits: 24170,
    dateVisited: "2021-03-04",
    weekDayStr: "Thursday",
    month: "March",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 0
  },
  {
    officeVisits: 24194,
    dateVisited: "2021-09-12",
    weekDayStr: "Sunday",
    month: "September",
    year: 2021,
    weekDay: 0,
    weekOfMonth: 1
  },
  {
    officeVisits: 24196,
    dateVisited: "2021-03-29",
    weekDayStr: "Monday",
    month: "March",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 4
  },
  {
    officeVisits: 24459,
    dateVisited: "2021-04-20",
    weekDayStr: "Tuesday",
    month: "April",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 2
  },
  {
    officeVisits: 24635,
    dateVisited: "2021-04-23",
    weekDayStr: "Friday",
    month: "April",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 3
  },
  {
    officeVisits: 24674,
    dateVisited: "2021-03-16",
    weekDayStr: "Tuesday",
    month: "March",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 2
  },
  {
    officeVisits: 24705,
    dateVisited: "2021-03-11",
    weekDayStr: "Thursday",
    month: "March",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 1
  },
  {
    officeVisits: 24747,
    dateVisited: "2021-03-10",
    weekDayStr: "Wednesday",
    month: "March",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 1
  },
  {
    officeVisits: 24806,
    dateVisited: "2021-08-07",
    weekDayStr: "Saturday",
    month: "August",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 0
  },
  {
    officeVisits: 24877,
    dateVisited: "2021-07-31",
    weekDayStr: "Saturday",
    month: "July",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 4
  },
  {
    officeVisits: 24939,
    dateVisited: "2021-03-23",
    weekDayStr: "Tuesday",
    month: "March",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 3
  },
  {
    officeVisits: 25256,
    dateVisited: "2021-03-17",
    weekDayStr: "Wednesday",
    month: "March",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 2
  },
  {
    officeVisits: 25259,
    dateVisited: "2021-04-14",
    weekDayStr: "Wednesday",
    month: "April",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 1
  },
  {
    officeVisits: 25315,
    dateVisited: "2021-05-14",
    weekDayStr: "Friday",
    month: "May",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 1
  },
  {
    officeVisits: 25483,
    dateVisited: "2021-05-07",
    weekDayStr: "Friday",
    month: "May",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 0
  },
  {
    officeVisits: 25501,
    dateVisited: "2021-03-30",
    weekDayStr: "Tuesday",
    month: "March",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 4
  },
  {
    officeVisits: 25683,
    dateVisited: "2021-04-22",
    weekDayStr: "Thursday",
    month: "April",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 3
  },
  {
    officeVisits: 25694,
    dateVisited: "2021-04-15",
    weekDayStr: "Thursday",
    month: "April",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 2
  },
  {
    officeVisits: 26045,
    dateVisited: "2021-04-08",
    weekDayStr: "Thursday",
    month: "April",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 1
  },
  {
    officeVisits: 26142,
    dateVisited: "2021-05-11",
    weekDayStr: "Tuesday",
    month: "May",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 1
  },
  {
    officeVisits: 26237,
    dateVisited: "2021-05-05",
    weekDayStr: "Wednesday",
    month: "May",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 0
  },
  {
    officeVisits: 26320,
    dateVisited: "2021-04-21",
    weekDayStr: "Wednesday",
    month: "April",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 2
  },
  {
    officeVisits: 26353,
    dateVisited: "2021-07-23",
    weekDayStr: "Friday",
    month: "July",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 3
  },
  {
    officeVisits: 26452,
    dateVisited: "2021-03-25",
    weekDayStr: "Thursday",
    month: "March",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 3
  },
  {
    officeVisits: 26527,
    dateVisited: "2021-04-30",
    weekDayStr: "Friday",
    month: "April",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 4
  },
  {
    officeVisits: 26530,
    dateVisited: "2021-07-26",
    weekDayStr: "Monday",
    month: "July",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 3
  },
  {
    officeVisits: 26882,
    dateVisited: "2021-04-06",
    weekDayStr: "Tuesday",
    month: "April",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 0
  },
  {
    officeVisits: 27205,
    dateVisited: "2021-09-18",
    weekDayStr: "Saturday",
    month: "September",
    year: 2021,
    weekDay: 6,
    weekOfMonth: 2
  },
  {
    officeVisits: 27216,
    dateVisited: "2021-03-18",
    weekDayStr: "Thursday",
    month: "March",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 2
  },
  {
    officeVisits: 27233,
    dateVisited: "2021-04-26",
    weekDayStr: "Monday",
    month: "April",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 3
  },
  {
    officeVisits: 27246,
    dateVisited: "2021-03-24",
    weekDayStr: "Wednesday",
    month: "March",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 3
  },
  {
    officeVisits: 27267,
    dateVisited: "2021-05-12",
    weekDayStr: "Wednesday",
    month: "May",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 1
  },
  {
    officeVisits: 27363,
    dateVisited: "2021-05-13",
    weekDayStr: "Thursday",
    month: "May",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 1
  },
  {
    officeVisits: 27392,
    dateVisited: "2021-05-06",
    weekDayStr: "Thursday",
    month: "May",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 0
  },
  {
    officeVisits: 27720,
    dateVisited: "2021-06-15",
    weekDayStr: "Tuesday",
    month: "June",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 2
  },
  {
    officeVisits: 27776,
    dateVisited: "2021-04-27",
    weekDayStr: "Tuesday",
    month: "April",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 3
  },
  {
    officeVisits: 27828,
    dateVisited: "2021-05-17",
    weekDayStr: "Monday",
    month: "May",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 2
  },
  {
    officeVisits: 27861,
    dateVisited: "2021-04-07",
    weekDayStr: "Wednesday",
    month: "April",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 0
  },
  {
    officeVisits: 27938,
    dateVisited: "2021-04-28",
    weekDayStr: "Wednesday",
    month: "April",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 3
  },
  {
    officeVisits: 28265,
    dateVisited: "2021-05-21",
    weekDayStr: "Friday",
    month: "May",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 2
  },
  {
    officeVisits: 28277,
    dateVisited: "2021-09-10",
    weekDayStr: "Friday",
    month: "September",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 1
  },
  {
    officeVisits: 28473,
    dateVisited: "2021-07-19",
    weekDayStr: "Monday",
    month: "July",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 2
  },
  {
    officeVisits: 28505,
    dateVisited: "2021-06-25",
    weekDayStr: "Friday",
    month: "June",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 3
  },
  {
    officeVisits: 28751,
    dateVisited: "2021-07-06",
    weekDayStr: "Tuesday",
    month: "July",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 0
  },
  {
    officeVisits: 28828,
    dateVisited: "2021-08-16",
    weekDayStr: "Monday",
    month: "August",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 2
  },
  {
    officeVisits: 28889,
    dateVisited: "2021-05-28",
    weekDayStr: "Friday",
    month: "May",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 3
  },
  {
    officeVisits: 28948,
    dateVisited: "2021-09-07",
    weekDayStr: "Tuesday",
    month: "September",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 0
  },
  {
    officeVisits: 29248,
    dateVisited: "2021-06-04",
    weekDayStr: "Friday",
    month: "June",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 0
  },
  {
    officeVisits: 29248,
    dateVisited: "2021-05-24",
    weekDayStr: "Monday",
    month: "May",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 3
  },
  {
    officeVisits: 29255,
    dateVisited: "2021-09-13",
    weekDayStr: "Monday",
    month: "September",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 1
  },
  {
    officeVisits: 29267,
    dateVisited: "2021-05-18",
    weekDayStr: "Tuesday",
    month: "May",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 2
  },
  {
    officeVisits: 29390,
    dateVisited: "2021-06-28",
    weekDayStr: "Monday",
    month: "June",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 3
  },
  {
    officeVisits: 29428,
    dateVisited: "2021-06-07",
    weekDayStr: "Monday",
    month: "June",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 0
  },
  {
    officeVisits: 29670,
    dateVisited: "2021-06-11",
    weekDayStr: "Friday",
    month: "June",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 1
  },
  {
    officeVisits: 29697,
    dateVisited: "2021-04-29",
    weekDayStr: "Thursday",
    month: "April",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 4
  },
  {
    officeVisits: 29768,
    dateVisited: "2021-08-13",
    weekDayStr: "Friday",
    month: "August",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 1
  },
  {
    officeVisits: 30205,
    dateVisited: "2021-05-20",
    weekDayStr: "Thursday",
    month: "May",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 2
  },
  {
    officeVisits: 30236,
    dateVisited: "2021-06-18",
    weekDayStr: "Friday",
    month: "June",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 2
  },
  {
    officeVisits: 30276,
    dateVisited: "2021-08-02",
    weekDayStr: "Monday",
    month: "August",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 0
  },
  {
    officeVisits: 30307,
    dateVisited: "2021-05-26",
    weekDayStr: "Wednesday",
    month: "May",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 3
  },
  {
    officeVisits: 30445,
    dateVisited: "2021-05-25",
    weekDayStr: "Tuesday",
    month: "May",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 3
  },
  {
    officeVisits: 30602,
    dateVisited: "2021-06-01",
    weekDayStr: "Tuesday",
    month: "June",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 0
  },
  {
    officeVisits: 30692,
    dateVisited: "2021-07-12",
    weekDayStr: "Monday",
    month: "July",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 1
  },
  {
    officeVisits: 30726,
    dateVisited: "2021-09-09",
    weekDayStr: "Thursday",
    month: "September",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 1
  },
  {
    officeVisits: 30748,
    dateVisited: "2021-05-19",
    weekDayStr: "Wednesday",
    month: "May",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 2
  },
  {
    officeVisits: 30872,
    dateVisited: "2021-06-21",
    weekDayStr: "Monday",
    month: "June",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 2
  },
  {
    officeVisits: 30902,
    dateVisited: "2021-08-23",
    weekDayStr: "Monday",
    month: "August",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 3
  },
  {
    officeVisits: 30986,
    dateVisited: "2021-07-01",
    weekDayStr: "Thursday",
    month: "July",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 0
  },
  {
    officeVisits: 31038,
    dateVisited: "2021-06-08",
    weekDayStr: "Tuesday",
    month: "June",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 1
  },
  {
    officeVisits: 31169,
    dateVisited: "2021-06-03",
    weekDayStr: "Thursday",
    month: "June",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 0
  },
  {
    officeVisits: 31170,
    dateVisited: "2021-07-09",
    weekDayStr: "Friday",
    month: "July",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 1
  },
  {
    officeVisits: 31230,
    dateVisited: "2021-08-27",
    weekDayStr: "Friday",
    month: "August",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 3
  },
  {
    officeVisits: 31300,
    dateVisited: "2021-07-16",
    weekDayStr: "Friday",
    month: "July",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 2
  },
  {
    officeVisits: 31607,
    dateVisited: "2021-08-06",
    weekDayStr: "Friday",
    month: "August",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 0
  },
  {
    officeVisits: 31666,
    dateVisited: "2021-06-23",
    weekDayStr: "Wednesday",
    month: "June",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 3
  },
  {
    officeVisits: 31678,
    dateVisited: "2021-06-22",
    weekDayStr: "Tuesday",
    month: "June",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 3
  },
  {
    officeVisits: 31869,
    dateVisited: "2021-08-09",
    weekDayStr: "Monday",
    month: "August",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 1
  },
  {
    officeVisits: 31885,
    dateVisited: "2021-09-08",
    weekDayStr: "Wednesday",
    month: "September",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 1
  },
  {
    officeVisits: 32016,
    dateVisited: "2021-08-30",
    weekDayStr: "Monday",
    month: "August",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 4
  },
  {
    officeVisits: 32032,
    dateVisited: "2021-06-17",
    weekDayStr: "Thursday",
    month: "June",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 2
  },
  {
    officeVisits: 32125,
    dateVisited: "2021-07-08",
    weekDayStr: "Thursday",
    month: "July",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 1
  },
  {
    officeVisits: 32215,
    dateVisited: "2021-07-15",
    weekDayStr: "Thursday",
    month: "July",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 2
  },
  {
    officeVisits: 32258,
    dateVisited: "2021-09-03",
    weekDayStr: "Friday",
    month: "September",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 0
  },
  {
    officeVisits: 32317,
    dateVisited: "2021-07-07",
    weekDayStr: "Wednesday",
    month: "July",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 0
  },
  {
    officeVisits: 32407,
    dateVisited: "2021-07-13",
    weekDayStr: "Tuesday",
    month: "July",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 1
  },
  {
    officeVisits: 32433,
    dateVisited: "2021-06-02",
    weekDayStr: "Wednesday",
    month: "June",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 0
  },
  {
    officeVisits: 32458,
    dateVisited: "2021-05-27",
    weekDayStr: "Thursday",
    month: "May",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 3
  },
  {
    officeVisits: 32475,
    dateVisited: "2021-09-20",
    weekDayStr: "Monday",
    month: "September",
    year: 2021,
    weekDay: 1,
    weekOfMonth: 2
  },
  {
    officeVisits: 32686,
    dateVisited: "2021-08-26",
    weekDayStr: "Thursday",
    month: "August",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 3
  },
  {
    officeVisits: 32785,
    dateVisited: "2021-08-24",
    weekDayStr: "Tuesday",
    month: "August",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 3
  },
  {
    officeVisits: 32818,
    dateVisited: "2021-06-09",
    weekDayStr: "Wednesday",
    month: "June",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 1
  },
  {
    officeVisits: 32834,
    dateVisited: "2021-06-29",
    weekDayStr: "Tuesday",
    month: "June",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 4
  },
  {
    officeVisits: 32893,
    dateVisited: "2021-07-30",
    weekDayStr: "Friday",
    month: "July",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 4
  },
  {
    officeVisits: 33089,
    dateVisited: "2021-08-12",
    weekDayStr: "Thursday",
    month: "August",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 1
  },
  {
    officeVisits: 33178,
    dateVisited: "2021-06-16",
    weekDayStr: "Wednesday",
    month: "June",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 2
  },
  {
    officeVisits: 33187,
    dateVisited: "2021-06-30",
    weekDayStr: "Wednesday",
    month: "June",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 4
  },
  {
    officeVisits: 33377,
    dateVisited: "2021-06-10",
    weekDayStr: "Thursday",
    month: "June",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 1
  },
  {
    officeVisits: 33421,
    dateVisited: "2021-07-20",
    weekDayStr: "Tuesday",
    month: "July",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 2
  },
  {
    officeVisits: 33558,
    dateVisited: "2021-07-21",
    weekDayStr: "Wednesday",
    month: "July",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 2
  },
  {
    officeVisits: 33705,
    dateVisited: "2021-08-20",
    weekDayStr: "Friday",
    month: "August",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 2
  },
  {
    officeVisits: 33947,
    dateVisited: "2021-08-10",
    weekDayStr: "Tuesday",
    month: "August",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 1
  },
  {
    officeVisits: 34051,
    dateVisited: "2021-06-24",
    weekDayStr: "Thursday",
    month: "June",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 3
  },
  {
    officeVisits: 34054,
    dateVisited: "2021-07-29",
    weekDayStr: "Thursday",
    month: "July",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 4
  },
  {
    officeVisits: 34099,
    dateVisited: "2021-08-03",
    weekDayStr: "Tuesday",
    month: "August",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 0
  },
  {
    officeVisits: 34107,
    dateVisited: "2021-09-14",
    weekDayStr: "Tuesday",
    month: "September",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 1
  },
  {
    officeVisits: 34226,
    dateVisited: "2021-08-17",
    weekDayStr: "Tuesday",
    month: "August",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 2
  },
  {
    officeVisits: 34240,
    dateVisited: "2021-07-22",
    weekDayStr: "Thursday",
    month: "July",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 3
  },
  {
    officeVisits: 34303,
    dateVisited: "2021-08-11",
    weekDayStr: "Wednesday",
    month: "August",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 1
  },
  {
    officeVisits: 34476,
    dateVisited: "2021-07-14",
    weekDayStr: "Wednesday",
    month: "July",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 1
  },
  {
    officeVisits: 34590,
    dateVisited: "2021-07-27",
    weekDayStr: "Tuesday",
    month: "July",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 3
  },
  {
    officeVisits: 34711,
    dateVisited: "2021-08-18",
    weekDayStr: "Wednesday",
    month: "August",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 2
  },
  {
    officeVisits: 34711,
    dateVisited: "2021-08-31",
    weekDayStr: "Tuesday",
    month: "August",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 4
  },
  {
    officeVisits: 34895,
    dateVisited: "2021-09-17",
    weekDayStr: "Friday",
    month: "September",
    year: 2021,
    weekDay: 5,
    weekOfMonth: 2
  },
  {
    officeVisits: 35221,
    dateVisited: "2021-08-25",
    weekDayStr: "Wednesday",
    month: "August",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 3
  },
  {
    officeVisits: 35386,
    dateVisited: "2021-09-15",
    weekDayStr: "Wednesday",
    month: "September",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 2
  },
  {
    officeVisits: 35506,
    dateVisited: "2021-08-04",
    weekDayStr: "Wednesday",
    month: "August",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 0
  },
  {
    officeVisits: 35643,
    dateVisited: "2021-09-21",
    weekDayStr: "Tuesday",
    month: "September",
    year: 2021,
    weekDay: 2,
    weekOfMonth: 2
  },
  {
    officeVisits: 35793,
    dateVisited: "2021-07-28",
    weekDayStr: "Wednesday",
    month: "July",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 3
  },
  {
    officeVisits: 35899,
    dateVisited: "2021-09-01",
    weekDayStr: "Wednesday",
    month: "September",
    year: 2021,
    weekDay: 3,
    weekOfMonth: 0
  },
  {
    officeVisits: 36015,
    dateVisited: "2021-08-05",
    weekDayStr: "Thursday",
    month: "August",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 0
  },
  {
    officeVisits: 36232,
    dateVisited: "2021-08-19",
    weekDayStr: "Thursday",
    month: "August",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 2
  },
  {
    officeVisits: 36475,
    dateVisited: "2021-09-02",
    weekDayStr: "Thursday",
    month: "September",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 0
  },
  {
    officeVisits: 37821,
    dateVisited: "2021-09-16",
    weekDayStr: "Thursday",
    month: "September",
    year: 2021,
    weekDay: 4,
    weekOfMonth: 2
  }
];
