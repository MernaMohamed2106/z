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
let submenu

section.forEach(li => {
  li.addEventListener("click", e => {
    if(e.target.dataset.text=="pro"){
         submenu = document.querySelector("ul .one .pro");
    }
    else{
          submenu = document.querySelector("ul .one .set");
    }
  
    if (submenu) {
      if (submenu.style.display === "block") {
        submenu.style.display = "none";
      } else {
        submenu.style.display = "block";
      }
    }
    e.target.parentElement.querySelectorAll(".active").forEach(m => {
      m.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// --
// let s = document.querySelectorAll("ul .one .edit");


//   s.addEventListener("click", e => {
   
//      m = document.querySelector("ul  .edit .two");
  
//     if (m) {
//       if (m.style.display === "block") {
//         m.style.display = "none";
//       } else {
//         m.style.display = "block";
//       }
//     }
   
//   });

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