/// <reference path="./Subject.ts" />

namespace Subjects {
	export class React extends Subject {
	  experienceTeachingReact?: number;
  
	  getRequirements(): string {
		return "Here is the list of requirements for React";
	  }
  
	  getAvailableTeacher(): string {
		return this.teacher && this.experienceTeachingReact && this.experienceTeachingReact > 0
		  ? `Available Teacher: ${this.teacher.firstName}`
		  : "No available teacher";
	  }
	}
  }
  