/// <reference path="./Subject.ts" />

namespace Subjects {
	export class Java extends Subject {
	  experienceTeachingJava?: number;
  
	  getRequirements(): string {
		return "Here is the list of requirements for Java";
	  }
  
	  getAvailableTeacher(): string {
		return this.teacher && this.experienceTeachingJava && this.experienceTeachingJava > 0
		  ? `Available Teacher: ${this.teacher.firstName}`
		  : "No available teacher";
	  }
	}
  }
  