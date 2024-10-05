// ask user input
let Name = ("Valdez Edith");
let address = ("Patac Galimuyod Ilocos Sur");
let age = parseInt("18");
let classRole =("Officer, Student, Teacher");
let course = ("BSCS, BSM, BAEL");

// Conditional statement(switch stetment)
switch (course) {
    case "BSCS":
        switch (classRole) {
            case "Officer":
            case "Student":
            case "Teacher":
                // 1/4 of the Age input
                let iterations = Math.floor(age / 4);
                for (let i = 0; i < iterations; i++) {
                    alert("Name: " + Name);
                }
                break;
            default:
               alert("Default for BSCS class role");
        }
        break;
    case "BSM":
        // class of BSM course
        switch (classRole) {
            case "Officer":
            case "Student":
            case "Teacher":
                //  1/4 of the Age input
                let iterations = Math.floor(age / 4);
                for (let i = 0; i < iterations; i++) {
                    alert("Name: " + Name);
                }
                break;
            default:
                alert("Default for BAEL class role");
        }
        break;
    default:
        alert("Default for course");
}
