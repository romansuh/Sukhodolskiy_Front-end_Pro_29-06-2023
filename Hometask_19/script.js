class Student {
    constructor(firstName, lastName, yearOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.scores = [];
        this.attendance = new Array(25).fill(null);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.yearOfBirth;
    }

    calculateAverageScore() {
        if (this.scores.length === 0) {
            return 0;
        }
        const sum = this.scores.reduce((total, score) => total + score, 0);
        return sum / this.scores.length;
    }

    updateAttendance(present) {
        const emptyIndex = this.attendance.indexOf(null);
        if (emptyIndex !== -1 && emptyIndex < 25) {
            this.attendance[emptyIndex] = present;
        }
    }

    present() {
        this.updateAttendance(true);
    }

    absent() {
        this.updateAttendance(false);
    }

    summary() {
        const averageScore = this.calculateAverageScore();
        const attendanceCount = this.attendance.filter(entry => entry === true).length;
        const averageAttendance = attendanceCount / this.attendance.length;

        if (averageScore > 90 && averageAttendance > 0.9) {
            return "Молодець!";
        } else if (averageScore > 90 || averageAttendance > 0.9) {
            return "Добре, але можна краще ";
        } else {
            return "Редиска!";
        }
    }
}


const student1 = new Student("John", "Doe", 2000);
const student2 = new Student("Jane", "Smith", 2002);
const student3 = new Student("Alex", "Merdok", "1996")

student1.scores = [67, 98, 45, 65, 71];
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();


student2.scores = [92, 88, 95, 90, 91];
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();

student3.scores = [95, 90, 90, 100, 96, 91];
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();


console.log(`
${student1.firstName} ${student1.lastName} info:`)
console.log(`
    Students age: ${student1.getAge()}`);
console.log(`
    Average score: ${student1.calculateAverageScore()}`);
console.log(`
    Summary: ${student1.summary()}`);

console.log(`
${student2.firstName} ${student2.lastName} info:`)
console.log(`
    Students age: ${student2.getAge()}`);
console.log(`
    Average score: ${student2.calculateAverageScore()}`);
console.log(`
    Summary: ${student2.summary()}`);

console.log(`
${student3.firstName} ${student3.lastName} info:`)
console.log(`
    Students age: ${student3.getAge()}`);
console.log(`
    Average score: ${student3.calculateAverageScore()}`);
console.log(`
    Summary: ${student3.summary()}`);

