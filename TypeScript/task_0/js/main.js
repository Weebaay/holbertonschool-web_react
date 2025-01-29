var student1 = {
    firstName: "Alice",
    lastName: "Doe",
    age: 20,
    location: "Paris"
};
var student2 = {
    firstName: "Bob",
    lastName: "Smith",
    age: 22,
    location: "London"
};
var studentsList = [student1, student2];
var body = document.querySelector("body");
var table = document.createElement("table");
var headerRow = document.createElement("tr");
var header1 = document.createElement("th");
header1.textContent = "First Name";
var header2 = document.createElement("th");
header2.textContent = "Location";
headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    cell1.textContent = student.firstName;
    var cell2 = document.createElement("td");
    cell2.textContent = student.location;
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
});
body === null || body === void 0 ? void 0 : body.appendChild(table);
