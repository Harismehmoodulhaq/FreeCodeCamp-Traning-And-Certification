
    // {
    //     name: "shaheen",
    //     subject: ["Maths", "Social_Studies"],
    // } 


        class TeacherFactory  {
            constructor() {
                this.addNewTeacher = function(permition) {
                let teacher;
                if (permition === "Class Teacher") teacher = new ClassTeacher();
                else if (permition === "Teacher") teacher = new Teacher();
            
                return teacher;
                };
            }
        }


    class Teacher {
        name
        subject 
        constructor (name, subject) {
            this.name = name;
            this.subject = subject;
        }
    }

    var teacher1 = new Teacher("Mehmood", ["Math", "computer"]);
    var teacher2 = new Teacher("Shaheen", ["Science", "English"]);

        class ClassTeacher {
            constructor () {
                permition = 'Class Teacher';
            }
        }

        class NormaTeacher {
            constructor () {
                this.permition = 'Class Teacher'
            }
        }

        const teacher = new TeacherFactory()

        const teacher3 = teacher.addNewTeacher('Class Teacher');
        const teacher4 = teacher.addNewTeacher('Teacher');



class Student {
    name
    age
    group

    constructor (name, age, group) {
        this.name = name;
        this.age = age;
        this.group = group;
    }
} 

var student1 = new Student("Haris", 15, ["Computer Science"]);
var student2 = new Student("Hamid", 16, ["Arts Group"]);
