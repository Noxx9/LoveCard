let currentSection = 0;
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

let mainElement = document.getElementById('main');
mainElement.addEventListener('scroll', () => {
    let scrollY = (mainElement.scrollTop/sizes.height).toFixed(1); 
    const newSection = Math.round(scrollY); 
    if (newSection != currentSection) {
        currentSection = newSection;
    };
});

const scrollDownBtn = document.getElementById('scroll-down');
scrollDownBtn.addEventListener("click", scrollDown);

function scrollDown() {
    let nextSection;
    console.log(currentSection)
    switch (currentSection) {
        case 0: 
            nextSection = document.getElementById('section-one');
            nextSection.scrollIntoView({behavior: "smooth"})
            break;
        case 1: 
            nextSection = document.getElementById('section-two');
            nextSection.scrollIntoView({behavior: "smooth"})
            break;
        case 2: 
            nextSection = document.getElementById('section-three');
            nextSection.scrollIntoView({behavior: "smooth"})
            break;
        case 3: 
            nextSection = document.getElementById('section-four');
            nextSection.scrollIntoView({behavior: "smooth"})
            break;
        case 4: 
            nextSection = document.getElementById('section-five');
            nextSection.scrollIntoView({behavior: "smooth"})
            break;
        case 5: 
            nextSection = document.getElementById('section-six');
            nextSection.scrollIntoView({behavior: "smooth"})
            break;
        case 6: 
            nextSection = document.getElementById('section-seven');
            nextSection.scrollIntoView({behavior: "smooth"})
            break;
        case 7: 
            nextSection = document.getElementById('section-eight');
            nextSection.scrollIntoView({behavior: "smooth"})
            break;
        case 8: 
            nextSection = document.getElementById('section-nine');
            nextSection.scrollIntoView({behavior: "smooth"})
            break;
        case 9: 
            nextSection = document.getElementById('section-ten');
            nextSection.scrollIntoView({behavior: "smooth"})
            break;
    }
}

const scrollUpBtn = document.getElementById('scroll-up');
scrollUpBtn.addEventListener("click", scrollUp);

function scrollUp() {
    let prevSection;
    console.log(currentSection)
    switch (currentSection) {
        case 1: 
            prevSection = document.getElementById('into-section');
            prevSection.scrollIntoView({behavior: "smooth"})
            break;
        case 2: 
            prevSection = document.getElementById('section-one');
            prevSection.scrollIntoView({behavior: "smooth"})
            break;
        case 3: 
            prevSection = document.getElementById('section-two');
            prevSection.scrollIntoView({behavior: "smooth"})
            break;
        case 4: 
            prevSection = document.getElementById('section-three');
            prevSection.scrollIntoView({behavior: "smooth"})
            break;
        case 5: 
            prevSection = document.getElementById('section-four');
            prevSection.scrollIntoView({behavior: "smooth"})
            break;
        case 6: 
            prevSection = document.getElementById('section-five');
            prevSection.scrollIntoView({behavior: "smooth"})
            break;
        case 7: 
            prevSection = document.getElementById('section-six');
            prevSection.scrollIntoView({behavior: "smooth"})
            break;
        case 8: 
            prevSection = document.getElementById('section-seven');
            prevSection.scrollIntoView({behavior: "smooth"})
            break;
        case 9: 
            prevSection = document.getElementById('section-eight');
            prevSection.scrollIntoView({behavior: "smooth"})
            break;
        case 10: 
            prevSection = document.getElementById('section-nine');
            prevSection.scrollIntoView({behavior: "smooth"})
            break;
    }
}
