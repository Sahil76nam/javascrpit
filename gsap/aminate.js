var intialpath=`M 10 100 Q 500 100 1230 100`

var finalpath=`M 10 100 Q 500 100 1230 100`


 var string =document.querySelector(".string")

 string.addEventListener("mousemove",function(dets){
    Path=`M 10 100 Q ${dets.x} ${dets.y} 1230 100`

    gsap.to("svg path",
        {
            attr:{d:path},
            duration:0.3,
            ease:"power3"

        }
    )
 })

 string.addEventListener("mouseleave",function(dets){
    gsap.to("svg path",{
        attr:{d:finalpath},
        ease:"elastic.out",
        duration:1.3
    })
 })