const moment   = require('moment');
const format = "DD/MM/YYYY hh:mmA";
const m = moment("10/02/2023 11:08AM", format);
const d = moment("15/01/2023 12:00AM", format);


//add method 1
m.add(1, 'day');
m.add(1, 'hour');
m.add(1,'minute');
console.log(m.toString());

//add method 2
m.add(1, 'day').add(1, 'hour').add(1,'minute');
console.log(m.toString());

//add method 3
m.add({
    "hour": 1,
    "minute": 1,
    "day": 1
})
console.log(m.toString());

//same for substract


m.subtract(1, 'day');
m.subtract(1, 'hour');
m.subtract(1,'minute');
console.log(m.toString());

m.subtract(1, 'hour').subtract(1, 'minute').subtract(1, 'day');
console.log(m.toString());

m.subtract({
    "hour": 1,
    "minute": 1,
    "day": 1
})
console.log(m.toString());


//difference method to get the difference between two dates
const difft = m.diff(d, "days");
console.log(difft,"days")


//set method to set a date to your choice

// m.set({
//     "hour": 1,
//     "minute": 1,
//     "date": 1,
//     "month": 0,
//     "year": 1
// })
// console.log(m.toString());

//get method to get a date from your choice

console.log(m.get("date"));
console.log(m.get("year"));
console.log(m.get("day"));
console.log(m.get("hour"));
console.log(m.get("minute"));

//manupilate the date
m.startOf('month');
m.startOf('year');
m.startOf('day');

m.endOf('month');
m.endOf('year');
m.endOf('day');
console.log(m.toString());

//moment tokens

console.log(m.format("[Today is] dddd Do [of the month] MMMM [in the year] YYYY"));

//fromnow method
const birthday = moment("25/02/2023 11:08AM", format).fromNow(m);
console.log(birthday)

//isSame isBefore isAfter

console.log(moment("25/02/2023").isSame("25/02/2023", "day"))
console.log(moment("25/02/2023").isBefore("26/03/2023","month"))
console.log(moment("25/02/2023").isAfter("24/02/2022", "year"))


setInterval(()=>{
    console.log("pirnt")
},1000)