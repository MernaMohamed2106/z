let mode=  document.querySelector(".styl .mode");
mode.addEventListener("click",()=>{
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark")
        document.querySelector(".fa-sun").classList.remove("non")
        document.querySelector(".fa-moon").classList.add("non")
    }
    else{
         document.body.classList.add("dark")
        document.querySelector(".fa-sun").classList.add("non")
          document.querySelector(".fa-moon").classList.remove("non")
    }
})

let theme=localStorage.getItem("color")
if(theme!==null){
    document.documentElement.style.setProperty('--main-color',theme)
    document.querySelectorAll(".theme li ").forEach(e=>{
        e.classList.remove("active")
        if(e.dataset.color==theme)
            e.classList.add("active")
    })
}

let color = document.querySelectorAll(".theme li")
color.forEach(li=>{
    li.addEventListener("click",e=>{
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
        localStorage.setItem("color",e.target.dataset.color);
        e.target.parentElement.querySelectorAll(".active").forEach(m=>{
            m.classList.remove("active")
        })
        e.target.classList.add("active")
    })
})

let section = document.querySelectorAll("ul .one");

section.forEach(li => {
  li.querySelectorAll(".f .fa-angle-down").forEach(f => {
    f.addEventListener("click", e => {
      let submenu;
      const parent = e.target.closest(".f");
      if (parent.dataset.text === "pro") {
        submenu = document.querySelector(".one .pro");
      } else if (parent.dataset.text === "set") {
        submenu = document.querySelector(".one .set ");
      } else {
        return; 
      }

      if (submenu.style.display === "block") {
        submenu.style.display = "none";
      } else {
        submenu.style.display = "block";
      }

      li.querySelectorAll(".f.active").forEach(m => {
        m.classList.remove("active");
      });


      parent.classList.add("active");
    });
  });
});


// -------------------------------------
let s = document.querySelector("ul .one .edit .s");


  s.addEventListener("click", b => { 
   
    if (b.target.closest(".s").nextElementSibling.style.display === "block") {
       b.target.nextElementSibling.style.display = "none";
      } else {
       b.currentTarget.nextElementSibling.style.display = "block";
      }
   
  });

   let lan = document.querySelector(" .styl .lan");
   lan.addEventListener("click", l =>{
     if (l) {
       if (l.currentTarget.dataset.lan === "en") {
         window.open("html/arindex.html", "_self");
       } else {
         window.open("../index.html", "_self");
       }
     }
   })