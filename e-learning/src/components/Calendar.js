const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
  (year % 100 === 0 && year % 400 === 0);
const getFebDays = (year) => (isLeapYear(year) ? 29 : 28);

const currentDate = new Date();
const curDayNum = currentDate.getDay();
// const curMonthNum = currentDate.getMonth();
const curMonthNum = 1;
const currentYear = currentDate.getFullYear();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dayOfMonths = [
  31,
  getFebDays(currentYear),
  31,
  30,
  31,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];
const daysOfWeeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "friday",
  "Saturday",
  "Sunday",
];

const cal = [];

// function generateCalendar() {
//   let firstDay = new Date(currentYear, curMonthNum);
//   console.log("hey--", daysOfWeeks[firstDay.getDay()]);

//   for (let i = 0; i <= dayOfMonths[curMonthNum]; i++) {
//     if (i < firstDay.getDay()){
//         i--
//     }
//     // else {
//       cal.push(
//         <div
//           className="hover:bg-orange-70 w-fit px-2 rounded-[50%] hover:text-abs-white mb-1"
//           key={i}
//         >
//           {i}
//         </div>
//       );
//     // }
//   }
// }

// generateCalendar();

export function Calendar() {
  return (
    <article className="bg-grey-60">
      <div className="flex justify-between">
        <p className="font-bold text-4xl">
          {monthNames[curMonthNum]}, {currentYear}
        </p>
        <p>{daysOfWeeks[curDayNum]}</p>
      </div>
      <div className="p-4">
        <div>
          <div className="grid grid-cols-7">
            <div className="text-orange-70">Sun</div>
            <div className="text-orange-70">Mon</div>
            <div className="text-orange-70">Tue</div>
            <div className="text-orange-70">Wed</div>
            <div className="text-orange-70">Thur</div>
            <div className="text-orange-70">Fri</div>
            <div className="text-orange-70">Sat</div>
          </div>
        </div>
        <div className="grid grid-cols-7">{cal}</div>
      </div>
    </article>
  );
}
