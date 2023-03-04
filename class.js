class student{
    constructor(sId, sName){
        this.ID = sId;
        this.NAME = sName;
        this.SCHOOL = "Bathuly Sady Laily Begum High School";
    }
}

const student1 = new student(1, "Tania");
const student2 = new student(2, "Sabuj");
const student3 = new student(3, "Akash");

console.log(student1.NAME, student2.NAME, student3.NAME);