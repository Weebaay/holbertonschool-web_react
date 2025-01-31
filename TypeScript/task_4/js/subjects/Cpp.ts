/// <reference path="./Subject.ts" />

namespace Subjects {
	export class Cpp extends Subject {
	  experienceTeachingC?: number;
  
	  getRequirements(): string {
		return "Here is the list of requirements for Cpp";
	  }
  
	  getAvailableTeacher(): string {
		return this.teacher && this.experienceTeachingC && this.experienceTeachingC > 0
		  ? `Available Teacher: ${this.teacher.firstName}`
		  : "No available teacher";
	  }
	}
  }
  