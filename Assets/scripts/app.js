const transition = document.getElementById("transition");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
let arrayText = ["Sustainable", "Reliable", "Efficient" ];

let count = 0;
const first = document.getElementById("first");

const doSwitch = () =>{
    if(count >= arrayText.length){
        count = 0;
    }

    transition.textContent = arrayText[count];

    transition.style.transform = "translate(0,20px)";
    
    console.log(arrayText[count])
    console.log(transition)
    count++;
}

const toggleNav = () => {
    links.classList.toggle('show-links');
}

setInterval(doSwitch,1500);

navToggle.addEventListener("click", toggleNav)