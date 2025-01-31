interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  function createEmployee(salary: number | string): Director | Teacher {
    return typeof salary === "number" && salary < 500 ? new Teacher() : new Director();
  }
  
function isDirector(employee: Teacher | Director): employee is Director {
    return employee instanceof Director;
  }

function executeWork(employee: Teacher | Director): void {
    if (isDirector(employee)) {
      console.log(employee.workDirectorTasks()); // Exécute `workDirectorTasks()` si c'est un Director
    } else {
      console.log(employee.workTeacherTasks()); // Exécute `workTeacherTasks()` si c'est un Teacher
    }
  }
  
const director = new Director();
const teacher = new Teacher();

console.log(isDirector(director));
console.log(isDirector(teacher))

executeWork(director);
executeWork(teacher);

console.log(createEmployee(200));  
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
      return "Teaching Math";
    } else {
      return "Teaching History";
    }
  }

console.log(teachClass("Math"));
console.log(teachClass("History"));