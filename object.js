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
//for(let "key value" in "objet name")
for(let addd in student)
{
    console.log(student[addd])
}
console.log(student.name);//access
student.gender="male";//added
console.log(student);
student.age=21;//update
console.log(student.welcome());