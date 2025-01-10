iunuhbvar intialpath="M 10 100 Q 500 100 1230 100"

var finalpath="M 10 100 Q 500 100 1230 100";


  var string = document.querySelector("#string")

  string.addEventListener("mousemove", function (dets) {
      path = `M 10 100 Q ${dets.x} ${dets.y} 1230 100`;
  
      gsap.to("svg path",
          {
              attr: { d: path },
              duration: 0.8,
              ease: "power3.out"
          }
      );
  });
  

 string.addEventListener("mouseleave",function(dets){
    gsap.to("svg path",{
        attr:{d:finalpath},
        ease:"elastic.out",
        duration:0.3
    })
 })

gsap.to("#box1",{
    x:1000,
    duration:5,
    rotate:360,
    repeat:-1,
    yoyo:true
})
