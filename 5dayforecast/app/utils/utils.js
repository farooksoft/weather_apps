function convertTemp (kelvin) {
  return parseInt(((kelvin - 273.15)), 10)
}

var daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
};

var monthsMap = {
  "0":"Jan",
  "1":"Feb",
  "2":"Mar",
  "3":"Apr",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"Aug",
  "8":"Sept",
  "9":"Oct",
  "10":"Nov",
  "11":"Dec"
};

function getDate (unixTimestmap) {
  var date = new Date(unixTimestmap * 1000);
  var day = daysMap[date.getDay()]
  var month = monthsMap[date.getMonth()] + ' ' + date.getDate();
  return day + ', ' + month;
}

// http://stackoverflow.com/questions/3818193/how-to-add-number-of-days-to-todays-date
// Date.prototype.addDays = function(days) {
//     this.setDate(this.getDate() + parseInt(days));
//     return this;
// };
//
// function getDate (n = 0) {
//   var currentDate = new Date();
//   return n === 0 ? currentDate : currentDate.addDays(n);
// }
//
// function formatGetDate(n = 0) {
//   var getFullDate = getDate(n).toString();
//   var getWeekMonthDayRegex = /^(.*? ){3}/; //http://stackoverflow.com/questions/17004741/regex-how-to-delete-everything-before-the-third-empty-space-in-a-notepad-lin#17004755
//   var currentDate = getFullDate.match(getWeekMonthDayRegex)[0].trim();
//   return currentDate;
// }

module.exports = {
  convertTemp: convertTemp,
  getDate: getDate
}
