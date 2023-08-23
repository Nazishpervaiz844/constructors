function Subject(name, marks) {
    this.name = name;
    this.marks = marks;
}

function Student(name, age, regNumber, course, favoriteLanguages, subjects) {
    this.name = name;
    this.age = age;
    this.regNumber = regNumber;
    this.course = course;
    this.favoriteLanguages = favoriteLanguages;
    this.subjects = subjects;
}

// Creating instances of the Subject class for subjects
var subjects1 = [
    new Subject("Math", 85),
    new Subject("Science", 92),
    new Subject("History", 78),
    new Subject("English", 88),
    new Subject("Computer Science", 95)
];

var subjects2 = [
    new Subject("Math", 78),
    new Subject("Science", 88),
    new Subject("History", 75),
    new Subject("English", 90),
    new Subject("Computer Science", 82)
];

// Creating instances of the Student class with hard-coded information
var students = [
    new Student("Nazish", 24, "2023001", "Engineering", ["JavaScript", "Python", "Java"], subjects1),
    new Student("Ayesha", 17, "2023002", "Science", ["C++", "Python", "DataStructures"], subjects2)
];

// Displaying every single property of a student
var studentToDisplay = students[0];
console.log("Student Information:");
console.log("Name:", studentToDisplay.name);
console.log("Age:", studentToDisplay.age);
console.log("Registration Number:", studentToDisplay.regNumber);
console.log("Course:", studentToDisplay.course);
console.log("Favorite Programming Languages:", studentToDisplay.favoriteLanguages[0] + ', ' + studentToDisplay.favoriteLanguages[1] + ', ' + studentToDisplay.favoriteLanguages[2]);
console.log("Marks in Subjects:");
studentToDisplay.subjects.forEach(subject => {
    console.log(`${subject.name}: ${subject.marks}`);
});

// Displaying the first and last favorite programming languages of a student
var favoriteLanguages = studentToDisplay.favoriteLanguages;
console.log("First Favorite Programming Language:", favoriteLanguages[0]);
console.log("Last Favorite Programming Language:", favoriteLanguages[favoriteLanguages.length - 1]);

// Displaying the marks of any 2 subjects of a student
var selectedSubjects = studentToDisplay.subjects.slice(0, 2);
console.log("Marks of Selected Subjects:");
selectedSubjects.forEach(subject => {
    console.log(`${subject.name}: ${subject.marks}`);
});