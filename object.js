syntax of object
let objectName={

    key1:"value1",
    key2:"value2"
}
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


const st=()=>{
    let student ={name :"sahil",age:22,city:"bhopal"}
    const { name,age,city}=student;//destructre tree
    console.log(age)

    student1={name:"sahil",age:23};
    student2={city:"bhoapl",country:"india"}

    let twostudent={...student1,...student2};//spread opeater
    console.log(twostudent);
}



let arr1=[1,3,4,5,67,7];
let newarr=arr1.filter((num)=>num>3)//filter function
//let newarr=arr1.map((num)=>num*2);//map function
console.log(newarr)
}
st();