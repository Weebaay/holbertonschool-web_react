# TypeScript Project

## Description
This project focuses on learning and applying the fundamental concepts of TypeScript, a superset of JavaScript that introduces static typing. It includes exercises to create robust and maintainable applications using interfaces, classes, functions, and more.

## Prerequisites
Before starting, ensure you have:
- **Node.js** installed (https://nodejs.org)
- A text editor such as **Visual Studio Code**
- Basic knowledge of JavaScript

## Project Structure
The project contains the following configuration files:
- **package.json**: Specifies dependencies and scripts.
- **tsconfig.json**: TypeScript compiler configuration.
- **webpack.config.js**: Webpack configuration for bundling.
- **.eslintrc.js**: ESLint configuration for TypeScript code standards.

## Setup
1. Clone this repository:
   ```bash
   git clone 'https://github.com/Weebaay/holbertonschool-web_react.git'
   cd TypeScript
   ```
2. Install dependencies:

	npm install

**Start the project in development mode:**

	npm run start-dev

**Build the project for production:**

	npm run build

**Run tests:**

    npm run test

## Learning Objectives

**By completing this project, you will be able to:**

    Understand basic types in TypeScript.
    Use interfaces, classes, and functions to structure code.
    Interact with the DOM using TypeScript.
    Work with generic types for reusable code.
    Organize code using namespaces.
    Merge declarations and use ambient namespaces.
    Apply nominal typing concepts in TypeScript.

## Tasks
**Task 0: Creating a Student Interface**

    Define an interface Student with firstName, lastName, age, and location fields.
    Create two Student objects and display them in a table using Vanilla JavaScript.

**Task 1: Defining a Teacher Interface**

    Define a Teacher interface with fields for firstName, lastName, fullTimeEmployee, yearsOfExperience, and location.
    Allow additional properties with string keys and any type of value.

**Task 2: Extending the Teacher Interface**

    Create a Directors interface that extends Teacher and adds a numberOfReports field.

**Task 3: Printing Teacher Information**

    Write a function printTeacher(firstName, lastName) that returns the first letter of firstName and the full lastName.

**Task 4: Writing a Student Class**

    Implement a StudentClass with methods workOnHomework and displayName.

**Task 5: Advanced Types Part 1**

    Create interfaces for Director and Teacher, and implement their respective classes with specific behaviors.

**Task 6: Functions Specific to Employees**

    Write functions to determine if an employee is a Director and execute appropriate tasks.

**Task 7: String Literal Types**

    Use string literal types to restrict variable values to specific strings (e.g., Math or History).

**Task 8: Ambient Namespaces**

    Define ambient type declarations for a library (crud.js) and use them in a TypeScript file.

**Task 9: Namespace & Declaration Merging**

    Use namespaces and declaration merging to extend functionality in a modular way.

**Task 10: Brand Convention & Nominal Typing**

    Define branded types for MajorCredits and MinorCredits and implement summation functions.

## Requirements

    All files must end with a newline.
    Transpile code using TypeScript (no errors or warnings).
    Use the .ts extension whenever possible.
    Tests are mandatory and should pass without errors.

## Resources

    TypeScript Documentation
    TypeScript in 5 Minutes

## Author

**Dijeont Jean-Paul**
