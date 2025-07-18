// Dates//

//Date is object//

let myDate = new Date()


//console.log(myDate.toString());   // its your choice how type you chose tostring,tolocaldatestring,
///console.log(myDate.toLocaleDateString());;
//console.log(myDate.toDateString());
///console.log(myDate.toJSON());
//console.log(myDate.toTimeString());

// console.log(typeof myDate) //date type is object//

//let myCreatedDate = new Date(2023, 4, 26)   // i create a specific date//
//console.log(myCreatedDate.toLocaleDateString())

//console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
//let myCreatedDate = new Date("2023-01-14")   year-month-day
//let myCreatedDate = new Date("01-14-2023") 


//console.log(myCreatedDate.toDateString())
//console.log(myCreatedDate.toLocaleString())


 let myTimeStamp = Date.now()

  console.log(myTimeStamp);
  console.log(myCreatedDate.getTime());
  console.log(Math.floor(Date.now()/1000));// interview question


//  console.log(myCreatedDate.getTime())

//  console.log(Math.flooor(Date.now()/1000));

