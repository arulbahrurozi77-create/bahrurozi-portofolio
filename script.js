/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }, 1200);

});


/* =========================
   TYPING EFFECT
========================= */

const typingText =
document.querySelector(".typing");

const words = [

    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Enthusiast"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord =
    words[wordIndex];

    if(!deleting){

        typingText.textContent =
        currentWord.substring(
            0,
            charIndex + 1
        );

        charIndex++;

        if(
            charIndex ===
            currentWord.length
        ){

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    }

    else{

        typingText.textContent =
        currentWord.substring(
            0,
            charIndex - 1
        );

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(
                wordIndex >=
                words.length
            ){

                wordIndex = 0;

            }

        }

    }

    setTimeout(

        typeEffect,

        deleting
        ? 60
        : 120

    );

}

typeEffect();


/* =========================
   SCROLL REVEAL
========================= */

const hiddenElements =
document.querySelectorAll(

".skill, .project-card"

);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(
entry.isIntersecting
){

entry.target.classList.add(
"show"
);

}

});

},

{
threshold:0.2
}

);

hiddenElements.forEach(el=>{

observer.observe(el);

});


/* =========================
   NAVBAR EFFECT
========================= */

const navbar =
document.querySelector(
".navbar"
);

window.addEventListener(

"scroll",

()=>{

if(
window.scrollY > 50
){

navbar.classList.add(
"scrolled"
);

}

else{

navbar.classList.remove(
"scrolled"
);

}

}

);


/* =========================
   PROJECT HOVER
========================= */

const projects =
document.querySelectorAll(
".project-card img"
);

projects.forEach(project=>{

project.addEventListener(

"mouseenter",

()=>{

project.style.transform =
"scale(1.04)";

}

);

project.addEventListener(

"mouseleave",

()=>{

project.style.transform =
"scale(1)";

}

);

});


/* =========================
   MOUSE GLOW
========================= */

const glow =
document.createElement("div");

glow.className =
"cursor-glow";

document.body.appendChild(
glow
);

document.addEventListener(

"mousemove",

(e)=>{

glow.style.left =
e.clientX + "px";

glow.style.top =
e.clientY + "px";

}

);