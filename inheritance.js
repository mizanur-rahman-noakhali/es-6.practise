class Parents{
  constructor(){
    this.fatherName="Rahmat ullah"
  }
}

class Child extends Parents{

  constructor(name){
    super();
    this.name=name;
  }
  //function
  getFullName(){
     return this.name+' '+this.fatherName;
  }
}

const baby=new Child("mizan");
const baby2=new Child("rony");
// console.log(baby);
// console.log(baby2);

console.log(baby.getFullName());
console.log(baby.getFullName());