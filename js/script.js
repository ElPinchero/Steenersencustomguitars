<!—script.js—>

// ======================================================

// STEENERSEN CUSTOM GUITARS

// Version 5.0

// Lightbox Gallery

// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".gallery img");

    if (images.length === 0) return;

    let current = 0;

    // ---------- Create Lightbox ----------

    const lightbox = document.createElement("div");

    lightbox.id = "lightbox";

    const img = document.createElement("img");

    const close = document.createElement("span");

    close.innerHTML = "&times;";

    close.className = "lightbox-close";

    const prev = document.createElement("span");

    prev.innerHTML = "&#10094;";

    prev.className = "lightbox-prev";

    const next = document.createElement("span");

    next.innerHTML = "&#10095;";

    next.className = "lightbox-next";

    lightbox.appendChild(close);

    lightbox.appendChild(prev);

    lightbox.appendChild(img);

    lightbox.appendChild(next);

    document.body.appendChild(lightbox);

    // ---------- Open ----------

    images.forEach((image, index) => {

        image.addEventListener("click", () => {

            current = index;

            img.src = images[current].src;

            lightbox.classList.add("active");

        });

    });

    // ---------- Close ----------

    function closeLightbox() {

        lightbox.classList.remove("active");

    }

    close.onclick = closeLightbox;

    lightbox.addEventListener("click", function(e){

        if(e.target===lightbox){

            closeLightbox();

        }

    });

    // ---------- Previous ----------

    function previousImage(){

        current--;

        if(current<0){

            current=images.length-1;

        }

        img.src=images[current].src;

    }

    // ---------- Next ----------

    function nextImage(){

        current++;

        if(current>=images.length){

            current=0;

        }

        img.src=images[current].src;

    }

    prev.onclick=previousImage;

    next.onclick=nextImage;

    // ---------- Keyboard ----------

    document.addEventListener("keydown",function(e){

        if(!lightbox.classList.contains("active")) return;

        if(e.key==="Escape"){

            closeLightbox();

        }

        if(e.key==="ArrowLeft"){

            previousImage();

        }

        if(e.key==="ArrowRight"){

            nextImage();

        }

    });

});

