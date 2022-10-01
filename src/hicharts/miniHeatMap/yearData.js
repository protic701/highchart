import { groupBy, map, unionWith } from "lodash";
import { BadgesData, DaysInCalendar } from "./constants";
// import "./styles.css";

export default function YearData() {
  const groupedData = groupBy(BadgesData, "year");

  const yearData = map(groupedData, (year, key) => {
    const monthData = groupBy(year, "month");
    // console.log(monthData);
    return {
      year: key,
      monthData: map(monthData, (month, key) => {
        const data = month.map((value) => {
          return {
            x: value.weekDay,
            y: value.weekOfMonth,
            value: value.officeVisits
          };
        });
        return {
          month: key,
          chartData: unionWith(
            data,
            DaysInCalendar,
            (a, b) => a.x === b.x && a.y === b.y
          ),
          data
        };
      })
    };
  });

  // console.log(yearData);

  return yearData;
}
