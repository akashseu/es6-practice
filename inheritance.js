class Parents{
    constructor(){
        this.FatherName = "Akash";
        this.MotherName = "Mousumi";
    }
}

class Child extends Parents{
    constructor(name){
        super();
        this.Name = name;
    }
}

const child1 = new Child("Ayaan");
const child2 = new Child("Montasir");
console.log(child1, child2);