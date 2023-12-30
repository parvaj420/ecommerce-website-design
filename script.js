
    //  / <!-- \\\\\\\\\\\\\\\ body start//////////////////// -->/  /
    /* / <!-- \\\\\\\\\\\\\\\ body end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ main start//////////////////// -->/  */
    document.querySelectorAll(".pageLoad h5").forEach(e => e.style.display = "block")
    function time(){
    var a = 0;
    setInterval(function(){
        a = a + Math.ceil(Math.random() * 20)
        document.querySelector('#loader h1').innerHTML = a + "%"
        if (a >= 100) {
            document.querySelector('#loader h1').innerHTML = 100 + "%";
           
     gsap.to('.pageLoad',{
      y:"-100%",
      duration:1,
      delay:1,
      onStart:time,
    })
    
        }
    },150)
   }
   time()
    gsap.from('.pageLoad h5',{
       x:100,
       stagger:.5,
       opacity:0,
       duration:1,
    })

    /* / <!-- \\\\\\\\\\\\\\\ main end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ nav start//////////////////// -->/  */
    let menu = document.querySelector(".menu")
    let close = document.querySelector(".close")
    let nav = document.querySelector(".nav")
    console.log( document.querySelector(".menu"));
    console.log(document.querySelector(".close"));
    menu.addEventListener("click",()=>{
      nav.style.height = "100%"
    })
    close.addEventListener("click",()=>{
      nav.style.height = "0"
    })
    /* / <!-- \\\\\\\\\\\\\\\ nav end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box1 start//////////////////// -->/  */
    let box1 = document.querySelector("#box1")
    let cursor2Per = document.querySelector(".cursor2Per")
    let clickItem = document.querySelector(".clickItem")
    let video = document.querySelector("video")
    let btnCl = document.querySelector(".btnCl")
    let pop = document.querySelectorAll('.pop')
        pop.forEach(pop => {
          pop.addEventListener('click',()=>{
            clickItem.style.transform = 'translate(0)';
          })
        })
    {
let cursor = document.querySelector(".cursor")
let cursor2= document.querySelector(".cursor2")
    video.addEventListener("click",()=>{
    clickItem.style.transform = 'translate(0)';
    })
    btnCl.addEventListener("click",()=>{
    clickItem.style.transform = 'translate(-100%)';
    })
  box1.addEventListener("mousemove",(e)=>{
      cursor.style.top = e.y + "px";
      cursor.style.left = e.x + "px";
      cursor.style.width = "8vw"
  cursor.style.height = "8vw"
  })
  
  window.addEventListener("mouseout",()=>{
  cursor.style.delay = "2"
  cursor.style.width = "0"
  cursor.style.height = "0"
  })
  cursor2Per.addEventListener("mousemove",(e)=>{
      cursor2.style.top = e.y + "px";
      cursor2.style.left = e.x + "px";
      cursor2.style.width = "8vw";
  cursor2.style.height = "8vw";
  })
  
  window.addEventListener("mouseout",()=>{
  cursor2.style.delay = "2"
  cursor2.style.width = "0"
  cursor2.style.height = "0"
  })
  }
  
  var tl = gsap.timeline({})
    tl.from("#box1 .item2 h1",{
         y:200,
        duration:1,
        delay:2.2,
        opacity:0,
        stagger:.1,
      onStart:time,
    },'me')
    tl.from("#box1 .menu",{
         x:-200,
        duration:1.5,
        delay:1,
        opacity:0,
      onStart:time,
    },'me2')
    tl.from("#box1 .logo",{
         x:200,
        duration:1,
        delay:1.5,
        opacity:0,
      onStart:time,
    },'me2')

    /* / <!-- \\\\\\\\\\\\\\\ box1 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box2 start//////////////////// -->/  */
  gsap.from("#box2 .item3 h1",{
         y:100, 
        opacity:0,
        stagger:0.2,
        delay:2,
        duration:1,
        scrollTrigger:{
    trigger:"#box2",
    start:"20% 70%",
    end:"20% 70%",
    scrub:5,
    // markers:true,
        }
    })
  gsap.from("#box2 .item2 p,#box2 .item1 p span,#box2 .bg-dark",{
    width:"0",
    duration:1,
    delay:.5,
        scrollTrigger:{
    trigger:"#box2 .bg-dark",
    start:"20% 70%",
    end:"20% 70%",
    scrub:1,
    // markers:true,
        }
  })
   gsap.from("#box2 .item5 h1",{
         y:100,
        duration:1,
        delay:1,
        opacity:0,
        scrollTrigger:{
    trigger:"#box2 .item5 h1",
    start:"0% 70%",
    end:"0% 70%",
    scrub:5,
    // markers:true,
        }
    })
    /* / <!-- \\\\\\\\\\\\\\\ box2 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box3 start//////////////////// -->/  */
    var box3 = gsap.timeline({scrollTrigger:{
    trigger:"#box3",
    start:"55% 95%",
    end:"55% 70%",
    scrub:2,
    // markers:true,
   }})
   gsap.from('#box3 .a1',{
        x:-200,
        duration:2,
        delay:2,
        opacity:0,
        scrollTrigger:{
    trigger:"#box3 .a1",
    start:"10% 75%",
    end:"10% 70%",
    scrub:5,
    // markers:true,
        }
   },'a1')
   gsap.from('#box3 .a2',{
        y:200,
        duration:2,
        delay:2,
        opacity:0,
        scrollTrigger:{
    trigger:"#box3 .a2",
    start:"0% 100%",
    end:"0% 100%",
    scrub:5,
    // markers:true,
        }
   },'a1')
   gsap.from('#box3 .a3',{
        x:200,
        duration:2,
        delay:2,
        opacity:0,
        scrollTrigger:{
    trigger:"#box3 .a3",
    start:"10% 70%",
    end:"10% 70%",
    scrub:5,
    // markers:true,
        }
   },'a1')
    /* / <!-- \\\\\\\\\\\\\\\ box3 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box4 start//////////////////// -->/  */
    var box4 = gsap.timeline({scrollTrigger:{
    trigger:"#box4",
    start:"25% 95%",
    end:"27% 70%",
    scrub:5,
    // markers:true,
   }})
   gsap.from("#box4 .item3 h1,#box4 .item2 p",{
        y:100, 
        opacity:0,
        stagger:0.2,
        delay:2,
        duration:1,
        scrollTrigger:{
    trigger:"#box4",
    start:"20% 70%",
    end:"20% 70%",
    scrub:5,
    // markers:true,
        }
    })
  gsap.from("#box4 .bg-dark",{
    width:"0",
    duration:1,
    delay:.5,
        scrollTrigger:{
    trigger:"#box4 .bg-dark",
    start:"20% 70%",
    end:"20% 70%",
    scrub:1,
    // markers:true,
        }
  })
  var box4 = gsap.timeline({scrollTrigger:{
    trigger:"#box4",
    start:"0% 95%",
    end:"0% 70%",
    scrub:2,
    // markers:true,
   }})
   box4.from("#box4 div p",{
         y:200,
        duration:2,
        delay:2,
        opacity:0,
        stagger:0.2,
    })
    /* / <!-- \\\\\\\\\\\\\\\ box4 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box5 start//////////////////// -->/  */
    var box5 = gsap.timeline({scrollTrigger:{
    trigger:"#box5",
    start:"40% 95%",
    end:"40% 70%",
    scrub:2,
    // markers:true,
   }})
   box5.from("#box5 .item3 h1,#box5 .item2 p",{
         y:200,
        duration:2,
        delay:2,
        // opacity:0,
        stagger:0.2,
    })
  box5.from("#box5 .bg-dark",{
    width:0,
    duration:1,
  })
  var box5_1 = gsap.timeline({scrollTrigger:{
    trigger:"#box5",
    start:"15% 95%",
    end:"15% 70%",
    scrub:2,
    // markers:true,
   }})
  box5_1.from("#box5 .item1 h6",{
         y:200,
        duration:2,
        delay:2,
        // opacity:0,
        stagger:0.2,
    })
    /* / <!-- \\\\\\\\\\\\\\\ box5 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box6 start//////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box6 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box7 start//////////////////// -->/  */
    var box7 = gsap.timeline({scrollTrigger:{
    trigger:"#box7",
    start:"65% 95%",
    end:"65% 70%",
    scrub:2,
    // markers:true,
   }})
   box7.from("#box7 h1",{
         y:-200,
        duration:2,
        delay:2,
        // opacity:0,
        stagger:0.2,
    })
   const initSlider = () => {
    const imageList = document.querySelector(".image-list");
    const sliderButton = document.querySelectorAll(".slid-button");
    console.log(sliderButton);
    sliderButton.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slid" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
}
window.addEventListener("load",initSlider)

    /* / <!-- \\\\\\\\\\\\\\\ box7 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box8 start//////////////////// -->/  */
    var footer1 = gsap.timeline({scrollTrigger:{
    trigger:"footer",
    start:"30% 95%",
    end:"30% 70%",
    scrub:2,
    // markers:true,
   }})
   footer1.from(" footer ul li a",{
    x:-200,
        duration:2,
        delay:2,
        opacity:0,
        stagger:.7,
   })
   footer1.from(" footer button",{
        x:-200,
        duration:2,
        delay:2,
        opacity:0,
   })
   footer1.from(" footer h4",{
        x:200,
        duration:2,
        delay:2,
        opacity:0,
   })
  var footer = gsap.timeline({scrollTrigger:{
    trigger:"footer",
    start:"65% 95%",
    end:"65% 80%",
    scrub:2,
    // markers:true,
   }})
   footer.from("footer .logo h1",{
         y:-200,
        duration:2,
        delay:2,
        // opacity:0,
        stagger:0.2,
    })
    //
    /* / <!-- \\\\\\\\\\\\\\\ box8 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box9 start//////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box9 end //////////////////// -->/  */
    /* / <!-- \\\\\\\\\\\\\\\ box10 start//////////////////// -->/  */
  