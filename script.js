

// ======================================

// STEENERSEN CUSTOM GUITARS

// script.js v1.0

// ======================================

// Sticky header shadow

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.45)";

    } else {

        header.style.boxShadow = "none";

    }

});

// Fade in sections

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// Simple Lightbox

const galleryImages=document.querySelectorAll(".gallery img");

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        const lightbox=document.createElement("div");

        lightbox.id="lightbox";

        lightbox.innerHTML=`<img src="${img.src}">`;

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click",()=>{

            lightbox.remove();

        });

    });

});

