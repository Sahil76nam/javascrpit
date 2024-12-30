let store="";

let pressed=(value)=>{
    let show =document.querySelector("#display")
    store=store+value;
    show.innerHTML=store;
}
let equall=()=>{
    show.innerHTML=eval(store)
    store=eval(store)
    store.toString();

}
let ac=()=>{
    store="";
    let show=document.querySelector("#display")
    show.innerHTML=store;
}
let del=()=>{
    store=store.slice(0,-1)
    let show=document.querySelector("#display")
    show.innerHTML=store
}
let sqr=()=>{
    store=store*store;
    let show=document.querySelector("#display")
    show.innerHTML=store
}
