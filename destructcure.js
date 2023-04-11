const person = {Name :"jack william", age:17,job:"Facebook",gfName:"Ema watson",address:"Mohammodpur",phone:'0187',friends:['Tom hanks','tom cruse','tom yearn']}

const {phone,gfName,address,salary}=person;


const complexObject = {
  Name:'abc',
  info:{
    address:"Dhanmondi"
    leader:"tiger leader"
  }
}
const {leader}=complexObject.info
//const gfName=person.gfName;

//const phone= person.phone;

// console.log(gfName, phone,address,salary);
// console.log(gfName, phone,address,salary);

const friends=['sakib','hridoy','jewel','abir','khan'];

const [cotoFriend,nextFriend,...othersFriend]=friends;

console.log(cotoFriend,nextFriend);
console.log(othersFriend);
