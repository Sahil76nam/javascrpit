let square=(a)=>{


    let pera=document.querySelector("#pera")

    // pera.innerHTML=a*a;
    pera.innerHTML=`
    the square of ${a} is ${a*a} <br>


    cube is ${a} is ${a*a*a} <br>

    ${(a%2==0)?even:odd}
    
        
    

    
    
    
    
    `;
    
}