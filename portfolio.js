const themeSlider = document.querySelector(".theme_slider");
const themeSwitch = document.querySelector(".theme_switch");
themeSwitch.addEventListener("click",function(){
    themeSlider.classList.toggle("theme_slider_night");
    themeSwitch.classList.toggle("theme_switch_night");
})
