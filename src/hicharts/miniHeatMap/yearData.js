import { endOfMonth, getDay, getWeekOfMonth, startOfMonth } from "date-fns";
import { groupBy, map, unionWith } from "lodash";
import { BadgesData, DaysInCalendar } from "./constants";
// import "./styles.css";

export default function YearData() {
  const groupedData = groupBy(BadgesData, "year");
  // console.log(DaysInCalendar);
  const yearData = map(groupedData, (year, key) => {
    const monthData = groupBy(year, "month");
    // console.log(monthData);
    return {
      year: key,
      monthData: map(monthData, (month, key) => {
        const startOf = startOfMonth(new Date(month[0].dateVisited));
        const endOf = endOfMonth(new Date(month[0].dateVisited));
        const getStartDaysWeek = getWeekOfMonth(startOf) - 1;
        const getStartDay = getDay(startOf);
        const getEndDaysWeek = getWeekOfMonth(endOf) - 1;
        const getEndDay = getDay(endOf);
        const actualDays = DaysInCalendar.findIndex(
          (value) => value.x === getStartDay && value.y === getStartDaysWeek
        );
        const extDays = DaysInCalendar.findIndex(
          (value) => value.x === getEndDay && value.y === getEndDaysWeek
        );
        console.log(actualDays, extDays);
        console.log(startOfMonth(new Date(month[0].dateVisited)));
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
            DaysInCalendar.map((value, index) => {
              if (index <= actualDays || index >= extDays) {
                return { ...value, value: 0 };
              }

              return value;
            }),
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
