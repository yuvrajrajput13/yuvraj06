const skills = document.querySelectorAll(".skill-card");

skills.forEach((card, index) => {
card.style.opacity="0";
card.style.transform="translateY(20px)";

setTimeout(()=>{
card.style.transition="0.5s";
card.style.opacity="1";
card.style.transform="translateY(0)";
}, index*200);
});


// education
const items = document.querySelectorAll(".edu-box");

window.addEventListener("scroll", () => {

items.forEach(item => {

let position = item.getBoundingClientRect().top;

let screen = window.innerHeight;

if(position < screen - 100){
item.style.opacity = "1";
item.style.transform = "translateX(0)";
}

});

});

items.forEach(item=>{
item.style.opacity="0";
item.style.transform="translateX(-40px)";
item.style.transition="0.6s";
});