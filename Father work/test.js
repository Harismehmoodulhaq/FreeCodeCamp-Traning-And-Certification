class Student {
  name;
  age;
​
  constructor(name = "Aslam", age = 12) {
    this.name = name;
    this.age = age;
  }
​
  read(bookName) {
    console.log("I'm reading ", bookName);
  }
}
​
class StudentFactory {
  constructor() {
    this.createStudents = function (type, name, age) {
      let students;
      if (type === "Monitor") students = new Monitor(name, age);
      else if (type === "Student") students = new Student(name, age);
​
      return students;
    };
  }
}
​
const studentFactory = new StudentFactory();
​
// const studentFactory = function (type:string, name:string, age:number) {
//   let students;
//   if ( type === 'Monitor') students = new Monitor(name,age);
//   else if (type === 'Student') students = new Student(name, age);
​
//   return students;
// };
​
class Monitor extends Student {
  constructor(name = "Aslam", age = 12) {
    super(name, age);
  }
​
  monitor() {
    console.log("I'm monitoring the class");
  }
}
​
var myClass = {
  teachers: [
    {
      name: "shaheen",
      subjects: ["Maths", "Social_Studies"],
    },
​
    {
      name: "shaheen2",
      subjects: ["Maths", "Social_Studies"],
    },
​
    new Teachers("Sumera", ["Science"]),
    new Teachers("Shumila", ["Drawing"]),
    new Teachers("Bushra", ["English"]),
​
    this.creatTeachers = function ( name, subject){},
​
      Teachers.creatTeachers("shaheen", ["Math", "Social_Studies"]),
      Teachers.creatTeachers("shaheen2", ["Math", "Social_Studies"]),
      Teachers.creatTeachers("sumera", ["shumaila", "Drawing"]),
      Teachers.creatTeachers("Bushra", ["English"])
    
  ],
  students: [
    {
      name: "Hamid",
      age: 15,
      read: (bookName) => {
        console.log("I'm reading ", bookName);
      },
    },
    new Student("Noor", 12), // constructor pattern
    new Student("Abbas", 12),
    new Monitor("AWali", 15),
    studentFactory.createStudents("Student", "Aslam", 12), // factory pattern
    studentFactory.createStudents("Student", "Saleem", 12),
    studentFactory.createStudents("Monitor", "Asad", 15),
    
  ],
​
  furnitures: {
    chairs: 2,
    table: 1,
    desks: 25,
    blackboard: 1,
  },
};
​
function ction() {
  throw new Error("Function not implemented.");
}
​
/* 
{
      name: "shaheen",
      subjects: ["Maths", "Social_Studies"],
    } */
​
​
    class Teachers {
​
      name = "";
      subjects = [];
​
      constructor(name,subjects){
​
        this.name =  name;
        this.subjects = subjects;
​
      }
​
    }
​
​
    var teacher1 =  new Teachers('shaheen', ["Maths", "Social_Studies"]);