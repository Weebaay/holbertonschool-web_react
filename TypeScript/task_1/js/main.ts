interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;

	// dynamique properties
	[key: string]: any;
}

const teacher3: Teacher = {
	firstName: "John",
	lastName: "Doe",
	fullTimeEmployee: false,
	location: "London",
	contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
	numberOfReports: number;
}

const director1: Directors = {
	firstName: 'Jorh',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));


interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
  }

interface StudentConstructorInterface {
	new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;
  
	constructor(firstName: string, lastName: string) {
	  this.firstName = firstName;
	  this.lastName = lastName;
	}
  
	workOnHomework(): string {
	  return "Currently working";
	}
  
	displayName(): string {
	  return this.firstName;
	}
}

const studentInstance = new StudentClass("Alice", "Wonderland");
console.log(studentInstance.displayName());
console.log(studentInstance.workOnHomework());