
class student{

    static batchName = "Playwright 2X";
    static mentor_name = "Pramod";

    constructor(name_student,age,phoneNo){
        this.name_student = name_student;
        this.age = age;
        this.phoneNo = phoneNo;
    }

}
const s1 = new student("Swapnil",32,"8787878");
const s2 = new student("kiran",28,"278878");

console.log(s1.name_student);
console.log(s2.name_student);

console.log(student.batchName);
console.log(student.mentor_name);