/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
var cTeacher = { firstName: "John", lastName: "Doe" };
var cpp = new Subjects.Cpp();
cpp.setTeacher(cTeacher);
cpp.experienceTeachingC = 5;
var java = new Subjects.Java();
java.setTeacher(cTeacher);
java.experienceTeachingJava = 0;
var react = new Subjects.React();
react.setTeacher(cTeacher);
react.experienceTeachingReact = 10;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
