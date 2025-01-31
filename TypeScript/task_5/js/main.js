function sumMajorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits, _majorBrand: "major" };
}
function sumMinorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits, _minorBrand: "minor" };
}
var major1 = { credits: 3, _majorBrand: "major" };
var major2 = { credits: 4, _majorBrand: "major" };
var minor1 = { credits: 2, _minorBrand: "minor" };
var minor2 = { credits: 1, _minorBrand: "minor" };
var totalMajor = sumMajorCredits(major1, major2);
var totalMinor = sumMinorCredits(minor1, minor2);
console.log("Total Major Credits: ".concat(totalMajor.credits));
console.log("Total Minor Credits: ".concat(totalMinor.credits));
