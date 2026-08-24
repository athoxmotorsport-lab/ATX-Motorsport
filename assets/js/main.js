/*=========================================
ATX MOTORSPORT
=========================================*/

// Header Scroll

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 40){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});


// Barre de progression au scroll

const progressBar = document.querySelector("#progress");

if(progressBar){

    window.addEventListener("scroll",()=>{

        const h = document.documentElement;
        const scrollable = h.scrollHeight - h.clientHeight;
        const scrolled = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0;

        progressBar.style.width = scrolled + "%";

    });

}


// Ticker (bandeau défilant) — duplication du contenu pour une boucle infinie fluide

const tickerTrack = document.querySelector(".ticker-track");

if(tickerTrack){

    tickerTrack.innerHTML += tickerTrack.innerHTML;

}


// Animations d'apparition au scroll (génériques, sans avoir à taguer chaque page)

const revealTargets = document.querySelectorAll(
    ".card, .stat-card, .event-card, .livery-card, .champ-block, .champ-tab, .section-title, .cta, .cta-banner"
);

if(revealTargets.length){

    revealTargets.forEach(el => el.classList.add("rv-in"));

    const revealObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("seen");
                revealObserver.unobserve(entry.target);

            }

        });

    }, { threshold:.15 });

    revealTargets.forEach(el => revealObserver.observe(el));

}


// Lightbox galerie de livrées (livrees.html uniquement)

const lightbox = document.querySelector("#lightbox");

if(lightbox){

    const lightboxImg = document.querySelector("#lightbox-img");
    const lightboxClose = document.querySelector("#lightbox-close");
    const galleryImgs = document.querySelectorAll(".livery-card img");

    galleryImgs.forEach(img=>{

        img.addEventListener("click",()=>{

            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add("active");

        });

    });

    lightboxClose.addEventListener("click",()=>{

        lightbox.classList.remove("active");

    });

    lightbox.addEventListener("click",(e)=>{

        if(e.target === lightbox){

            lightbox.classList.remove("active");

        }

    });

}


// Onglets championnats (course.html uniquement)

const champTabs = document.querySelectorAll(".champ-tab");

if(champTabs.length){

    const champPanels = document.querySelectorAll(".champ-panel");

    champTabs.forEach(tab=>{

        tab.addEventListener("click",()=>{

            champTabs.forEach(t=> t.classList.remove("active"));
            champPanels.forEach(p=> p.classList.remove("active"));

            tab.classList.add("active");
            document.querySelector("#"+tab.dataset.target).classList.add("active");

        });

    });

}
