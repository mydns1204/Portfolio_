document.addEventListener('DOMContentLoaded', function () {
    pageLoad();
});

function pageLoad() {

    // (1) UI Design Slide Component ----------------------------------------------
    window.slideIndexUIDesign = 1; 
    showSlidesUIDesign(window.slideIndexUIDesign); // Call the showSlides function for first slideshow
    
    // Functions : Slide 6 Other
    window.plusSlidesUIDesign = function(n) {
        showSlidesUIDesign(window.slideIndexUIDesign += n);
    };

    window.currentSlideUIDesign = function(n) {
        showSlidesUIDesign(window.slideIndexUIDesign = n);
    };

    function showSlidesUIDesign(n) {
        let i;
        let slides = document.getElementsByClassName("mySlideUIDesign");
        let dots = document.getElementsByClassName("dotUIDesign");

        // Reset slide index if it exceeds
        if (n > slides.length) { 
            window.slideIndexUIDesign = 1; 
        }
        if (n < 1) { 
            window.slideIndexUIDesign = slides.length; 
        }

        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Remove 'active' class from all dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" activeUIDesign", "");
        }

        // Show the current slide and mark the dot as active
        slides[window.slideIndexUIDesign - 1].style.display = "block";
        dots[window.slideIndexUIDesign - 1].className += " activeUIDesign";
    }

    // (2) Slide UI Component ----------------------------------------------
    window.slideIndexUIComponent = 1;
    showSlidesUIComponent(window.slideIndexUIComponent);

    window.plusSlidesUIComponent = function(n) {
        showSlidesUIComponent(window.slideIndexUIComponent += n);
    };

    window.currentSlideUIComponent = function(n) {
        showSlidesUIComponent(window.slideIndexUIComponent = n);
    };

    function showSlidesUIComponent(n) {
        let i;
        const slides = document.getElementsByClassName("mySlidesUIComponent");
        const dots = document.getElementsByClassName("dotUIComponent");
 
        if (n > slides.length) { window.slideIndexUIComponent = 1; }
        if (n < 1) { window.slideIndexUIComponent = slides.length; }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" activeUIComponent", "");
        }

        slides[window.slideIndexUIComponent - 1].style.display = "block";
        dots[window.slideIndexUIComponent - 1].className += " activeUIComponent";
    }

    // (3) Slide UI Element ----------------------------------------------
    window.slideIndexElement = 1;
    showSlidesElement(window.slideIndexElement); 

    window.plusSlidesElement = function(n) {
        showSlidesElement(window.slideIndexElement += n);
    };

    window.currentSlideElement = function(n) {
        showSlidesElement(window.slideIndexElement = n);
    };

    function showSlidesElement(n) {
        const slides = document.getElementsByClassName("mySlideElement");
        const dots = document.getElementsByClassName("dotElement");

        if (n > slides.length) { 
            window.slideIndexElement = 1; 
        }
        if (n < 1) { 
            window.slideIndexElement = slides.length; 
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" activeElement", "");
        }

        slides[window.slideIndexElement - 1].style.display = "block";
        dots[window.slideIndexElement - 1].className += " activeElement";
    }

    // (4) Project Slide  ----------------------------------------------
    window.slideProject = 1; 
        showSlidesProject(window.slideProject); 

        window.plusSlidesProject = function(n) {
            showSlidesProject(window.slideProject += n);
        };
    
        window.currentSlideProject = function(n) {
            showSlidesProject(window.slideProject = n);
        };
    
        function showSlidesProject(n) {
            const slides = document.getElementsByClassName("mySlideProject");
            const dots = document.getElementsByClassName("dotProject");
    
            if (n > slides.length) { 
                window.slideProject = 1; 
            }
            if (n < 1) { 
                window.slideProject = slides.length; 
            }
    
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
    
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" activeProject", "");
            }
    
            slides[window.slideProject - 1].style.display = "block";
            dots[window.slideProject - 1].className += " activeProject";
        }


    // (5) Art Slide  ----------------------------------------------
    // Image List Scroll Component
    const imageList = document.querySelector(".Slide-containerArt .imageLists");
    const prevButton = document.getElementById("prevSlideArt");
    const nextButton = document.getElementById("nextSlideArt");

    // Scroll left when prev button is clicked
    prevButton.addEventListener("click", function() {
        scrollImages(-1);
    });

    // Scroll right when next button is clicked
    nextButton.addEventListener("click", function() {
        scrollImages(1);
    });

    function scrollImages(direction) {
        const scrollAmount = imageList.clientWidth;
        imageList.scrollBy({
            left: scrollAmount * direction, // Scroll left or right depending on direction (-1 for left, 1 for right)
            behavior: 'smooth'
        });
    }

    // (6) Other Slide Component ----------------------------------------------
    window.slideIndexOther = 1; 
    showSlidesOther(window.slideIndexOther); 
    
    window.plusSlidesOther = function(n) {
        showSlidesOther(window.slideIndexOther += n);
    };

    window.currentSlideOther = function(n) {
        showSlidesOther(window.slideIndexOther = n);
    };

    function showSlidesOther(n) {
        const slides = document.getElementsByClassName("mySlideOther");
        const dots = document.getElementsByClassName("dotOther");

        if (n > slides.length) { 
            window.slideIndexOther = 1; 
        }
        if (n < 1) { 
            window.slideIndexOther = slides.length; 
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" activeOther", "");
        }

        slides[window.slideIndexOther - 1].style.display = "block";
        dots[window.slideIndexOther - 1].className += " activeOther";
    }


}

window.onscroll = function() {
    const arrowUp = document.getElementById("arrow-up");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
};



window.onload = function() {
    mypostSlide(); // Start slideshow
};

window.slideIndexBagshop = 0;

function mypostSlide() {
    const slides = document.getElementsByClassName("postSlide");
    const dots = document.getElementsByClassName("dotBagshop");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    window.slideIndexBagshop++;
    if (window.slideIndexBagshop >= slides.length) { 
        window.slideIndexBagshop = 0; 
    }

    slides[window.slideIndexBagshop].style.display = "block";

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("activeBagshop");
    }
    
    dots[window.slideIndexBagshop].classList.add("activeBagshop");

    setTimeout(mypostSlide, 4000);
}