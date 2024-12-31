let fetchdata =async()=>{
    try{
        let url='http://localhost:3000/flightticket'
        let res=await fetch (url,{method:"GET"})
        let data =await res.json()
        console.log(data);


        let output=document.querySelector("#display")

        data.map((e)=>{
            output.innerHTML+=`
             <tr>
             <td>${e.Travellername}</td>
             <td>${e.Origin}</td>
             <td>${e.Distination}</td>
             <td>${e.Price}</td>
             <td>${e.Categrey}</td>
             <td onclick="condelete('${e.id}')">Delete</td>
             <td onclick="fillform('${e.id}')">update</td>
             </tr>
    
            `
        }
        )
    }
    catch(error){
        console.log(error);
    }
}
let condelete=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            del(id)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
}
let del=(id)=>{
    let url=`http://localhost:3000/flightticket/${id}`
    fetch(url,{
        method:"DELETE"
    })
}
let ins=()=>{
    let travellername=document.querySelector("#travellername").value;
    let origen=document.querySelector("#origen").value;
    let distination=document.querySelector("#distination").value;
    let price=document.querySelector("#price").value;
    let categrey=document.querySelector("#categery").value;


let url='http://localhost:3000/flightticket'
fetch(url ,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        "Travellername":travellername,
        "Origin":origen,
        "Distination":distination,
        "Price":price,
        "Categrey":categrey
    })
})

return false;
}
let fillform=async(id)=>{
    let url=`http://localhost:3000/flightticket/${id}`
    let res=await fetch(url)
    let data=await res.json()

    let formdaata=`
    Enter travellername <input type="text" value=${data.travellername} id="travellername1"> <br>
     Enter origen <input type="text" value=${data.origen} id="origen1"> <br>
      Enter distination <input type="text" value=${data.distination} id="distination"> <br>
      Enter price <input type="text" value=${data.price} id="distination"> <br>
      Enter categrey <input type="text" value=${data.categrey} id="distination"> <br>
      <input type="submit" onclick="update('${data.id}')">
      
      
    
    `
    document.querySelector("#formupdate").innerHTML=formData;
    
}
let update=(id)=>{
    let travellername=document.querySelector("#travellername1").value;
    let origen=document.querySelector("#origen1").value;
    let distination=document.querySelector("#distination1").value;
    let price=document.querySelector("#price1").value;
    let categrey=document.querySelector("#categrey1").value;

    let url=`http://localhost:3000/flightticket/${id}`
    fetch(url,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "Travellername":travellername,
            "Origin":origen,
            "Distination":distination,
            "Price":price,
            "Categrey":categrey
        })
    })
}