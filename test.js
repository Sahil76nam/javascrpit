let subject ='';
document.querySelector("#btn1").addEventListener('click',function(){
    subject=prompt("enter the favourite subjects")
});
document.querySelector("#btn2").addEventListener('click',function(){
    if(subject){
        document.querySelector('#showsubject').innerHTML=`favorite subjects${subject}`;
    }
    else{
        document.querySelector('#showsubject').innerHTML=`please enter the subject`;
    }
})
// let sentence;
// sentence=prompt("enter the word");
//  let uppercase=sentence.toUpperCase();
// document.querySelector("#show").innerHTML=`upercae   :${uppercase}`;
    
// let number;
// document.querySelector("#btn1").addEventListener('click',function(){
//    number=prompt("enter the number")
//    let sumnumber=(number*number+1)/2;
//     document.querySelector("#sum").innerHTML=`sum of number  ${sumnumber}`;
// })
let img1=document.querySelector("#after").addEventListener('click',function(){
    img=document.querySelector("#img")
    img1.src='img2.jpeg';
})