var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    return typeof salary === "number" && salary < 500 ? new Teacher() : new Director();
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks()); // Exécute `workDirectorTasks()` si c'est un Director
    }
    else {
        console.log(employee.workTeacherTasks()); // Exécute `workTeacherTasks()` si c'est un Teacher
    }
}
var director = new Director();
var teacher = new Teacher();
console.log(isDirector(director));
console.log(isDirector(teacher));
executeWork(director);
executeWork(teacher);
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else {
        return "Teaching History";
    }
}
console.log(teachClass("Math"));
console.log(teachClass("History"));
