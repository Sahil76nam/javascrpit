//syntax of object
// let objectName={

//     key1:"value1",
//     key2:"value2"
// }
let student={
    name:"sahil",
    age: 20,
    address:"sainkheda",
    welcome:function(){
        return`hello my name is  ${this.name}  and age is ${this.age}`//function mai "this" ka use
    }
}
console.log(student.name);//access
student.gender="male";//added
console.log(student);
student.age=21;//update
console.log(student.welcome());