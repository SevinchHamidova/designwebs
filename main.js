const elmenuBtn = document.querySelector(".js-menu-btn");
const eltoggleList =document.querySelector(".toggle-main-text");
// console.log(elmenuBtn);
elmenuBtn.addEventListener("click", () =>{
    elmenuBtn.closest(".site-header").classList.toggle("open");
    elmenuBtn.closest("body").classList.toggle("unscroll");
})