const school = {
    name: "Royal College",
    location: "Colombo",

    getDetails() {
        console.log(`School Name: ${this.name}`, `Location: ${this.location}`);
    }
};

school.getDetails(); // Output: School Name: Royal College Location: Colombo

//Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age; 
};

//Prototype method
Person.prototype.introduce = function() {
    console.log(`Hi, I am ${this.name}`);
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        return `${this.name} is studying.`;
    }

    setMarks(marks) {
        this.#marks = marks;
    }

    getMarks() {
        return this.#marks;
    }
}

const student1 = new Student("Chathunga", 18, "A");
console.log(student1.study());

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    teach() {
        return `${this.name} is teaching ${this.subject}.`;
    }
}

const school = new school("Royal College", "Colombo");
console.log(school.name); // Output: Royal College
console.log(school.location); // Output: Colombo

console.log(school.getDetails()); // Output: School Name: Royal College Location: Colombo

//student details + marks
const student1 = new Student("Chathunga", 18, "A");
const student2 = new Student("Nimal", 19, "B");

student1.setMarks(95);
student2.setMarks(85);

console.log("Marks: "+student1.getMarks()); // Output: 95
console.log("Marks: "+student2.getMarks()); // Output: 85

const teacher1 = new Teacher("Mr. Silva", 40, "Mathematics");
console.log(teacher1.teach()); // Output: Mr. Silva is teaching Mathematics.