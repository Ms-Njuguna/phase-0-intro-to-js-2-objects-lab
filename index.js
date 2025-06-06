// Write your solution in this file!

const employee = {
    name : 'Trish',
    streetAddress : '16th Steet Nairobi'
};

//returns an employee with the original key value pairs and the new key value pair
//it does not modify the original employee, but rather returns a clone with the new data

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ... obj,
        [key] : value,
    };
}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '23rd Street Kiambu');

updatedEmployee.streetAddress;


//updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key,value){
    employee[key] = value; 
    return employee;
}

destructivelyUpdateEmployeeWithKeyAndValue('Sam');
destructivelyUpdateEmployeeWithKeyAndValue('11 Broadway');


//deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
//does not modify the original employee (it is non-destructive)

function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = { ...obj }; // clone the object
    delete newEmployee[key];             // remove the key from the clone
    return newEmployee;     
}

const updatedEmployeeObject = deleteFromEmployeeByKey(employee, 'name');

updatedEmployeeObject;

//returns employee without the deleted key/value pair
//modifies the original employee


function destructivelyDeleteFromEmployeeByKey(employee, key ) {
    delete employee[key];
    return employee;
}

destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');


console.log(updatedEmployee.streetAddress);
console.log(destructivelyUpdateEmployeeWithKeyAndValue( 'Sam'));
console.log(updatedEmployeeObject);
console.log(destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress'));


