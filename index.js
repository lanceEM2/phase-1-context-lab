/* Your Code Here */

// Helper function to calculate hours worked between two time events
// Helper function to calculate the hours worked
const hoursWorked = function(startTime, endTime) {
    const start = parseInt(startTime, 10);
    const end = parseInt(endTime, 10);
    return (end - start) / 100;
};

// Creates an employee record
const createEmployeeRecord = function(employeeData) {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
};

// Creates an array of employee records
const createEmployeeRecords = function(employees) {
    return employees.map(createEmployeeRecord);
};

// Adds a timeIn event to an employee's record
const createTimeInEvent = function(dateTime) {
    const [date, time] = dateTime.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: parseInt(time, 10),
    });
    return this;
};

// Adds a timeOut event to an employee's record
const createTimeOutEvent = function(dateTime) {
    const [date, time] = dateTime.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        date: date,
        hour: parseInt(time, 10),
    });
    return this;
};

// Calculates hours worked on a specific date
const hoursWorkedOnDate = function(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
    
    return hoursWorked(timeInEvent.hour, timeOutEvent.hour);
};

// Calculates wages earned on a specific date
const wagesEarnedOnDate = function(date) {
    const hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
};

// Aggregates all wages for an employee
const allWagesFor = function() {
    const datesWorked = this.timeInEvents.map(event => event.date);
    return datesWorked.reduce((totalWages, date) => totalWages + wagesEarnedOnDate.call(this, date), 0);
};

// Calculates the total wages for all employees
const calculatePayroll = function(employees) {
    return employees.reduce((total, employee) => total + allWagesFor.call(employee), 0);
};

// Finds an employee by first name
const findEmployeeByFirstName = function(employees, firstName) {
    return employees.find(employee => employee.firstName === firstName);
};


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



