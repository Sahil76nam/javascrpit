function arr1(){

    let fruits=["apple","mango","banana"]
    let fruits2=[2,4,6,8]
    let ans=document.querySelector("#fruits")

    alert(fruits)
    ans.innerHTML=fruits[0];
    fruits.push("grapis");
    console.log(fruits)
    fruits.splice(1,0,5)
    console.log(fruits)
    console.log(fruits.concat(fruits2));
    console.log(fruits.length)
    console.log(fruits2.reverse)
    console.log(fruits.unshift)
    console.log('sahil'||'namdev')



}
arr1();