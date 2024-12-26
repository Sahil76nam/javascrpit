let fetchData=  async ()=>{

    try{
    let url='http://localhost:3000/car';
     let res= await fetch(url)
     let data=await res.json()
     console.log(data);

     let output=document.querySelector("#display")

     data.map((e)=>{
        output.innerHTML+=`
           <tr>
           <td>${e.carname}</td>
           <td>${e.carprice}</td>
           <td>${e.carcolor}</td>
           <td>${e.carbrand}</td>
           <td onclick="del('${e.id}')">Delete</td>
           </tr>
        `
     })

    }
    catch(error){
        console.log(error);
        
    }


}



let del=(id)=>{
   
    let url=http://localhost:3000/car/${id}
    fetch(url,{
        method:"DELETE"
    })


}





fetchData()