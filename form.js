let sub=()=>{

    let name=document.querySelector("#name").value;
    let pass=document.querySelector("#pass").value;
    let cpass=document.querySelector("#cpass").value;
    let email=document.querySelector("#email").value;
    let number=document.querySelector("#number").value;

    let errorname=document.querySelector("#errorname");
    let errorpass=document.querySelector("#errorpass");
    let errorcpass=document.querySelector("#errorcpass");
    let erroremail=document.querySelector("#erroremail");
    let errornumber=document.querySelector("#errornumber");


    if(name===""){
        errorname.textContent="please enter the name";
        errorname.style.color="red";
        errorname.style.fontSize="30px";
        return false;
    }
    else if(number===""){
        errorname.textContent="please enter the numner";
        errorname.style.color="red";
        errorname.style.fontSize="30px";
        return false;
    } 
    else if(isNaN(number)){

        errornumber.innerHTML="please enter number only";
        return false;
    }
    else if(number.length!==10){

        error.innerHTML="please enter valid number 10";
        return false;
    }
    else if(!(email.includes("@")&& email.includes(".com"))){
        erroremail.textContent="please rnter the valid email";
        erroremail.style.color="red";
        erroremail.style.fontSize="30px";
        return false;
    }
    else if(!
        (
            pass.match(/[1234567890]/)
            &&
            pass.match(/[!@#$%^&*()]/)
            &&
            pass.match(/[a-z]/)
            &&
            pass.match(/[A-Z]/)
        )
    )
    {
        errorcpass.innerHTML="password contain atleast 1 lower,upper, special and number";
        document.querySelector('#errorpass').style.color="red";
        let passinp=document.querySelector("#pass");
        passinp.style.borderColor="red";
        passinp.style.outlineColor="red";
        return false;

    }
    else if(pass!==cpass){
        errorcpass.innerHTML="Password and confirm password should be same";
        document.querySelector('#pass').value="";
        document.querySelector('#cpass').value="";
        document.querySelector('#pass').focus();
        return false;

    }
    





}