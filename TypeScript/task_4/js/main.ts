/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

const cTeacher: Subjects.Teacher = { firstName: "John", lastName: "Doe" };

const cpp = new Subjects.Cpp();
cpp.setTeacher(cTeacher);
cpp.experienceTeachingC = 5;

const java = new Subjects.Java();
java.setTeacher(cTeacher);
java.experienceTeachingJava = 0;

const react = new Subjects.React();
react.setTeacher(cTeacher);
react.experienceTeachingReact = 10;

console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher()); 

console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
