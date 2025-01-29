var teacher3 = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false
};
console.log(teacher3);
var director1 = {
    firstName: 'Jorh',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    return firstName.charAt(0) + ". " + lastName;
};
console.log(printTeacher("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var studentInstance = new StudentClass("Alice", "Wonderland");
console.log(studentInstance.displayName());
console.log(studentInstance.workOnHomework());
