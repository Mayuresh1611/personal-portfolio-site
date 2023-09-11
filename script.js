/* about me section when selected */
let aboutMeUnselectedSvg = document.querySelector("#about-me-unselected")

let aboutMeSelected = document.querySelector(".about-me-selected-container")
let aboutMeSelectedPosition = ["0" , "0vw" , "17vw" ,"21vw" , "28vw"]
let aboutMeUnSelectedPosition = ["0" , "-48.1vw" , "-17vw" ,"-21vw" , "-28vw"]

let aboutMeHeading = document.querySelector("#about-me-heading")

console.log(aboutMeSelected); // Check if aboutMeSelected is defined and what it contains
console.log(aboutMeSelected.children.length);


aboutMeUnselectedSvg.addEventListener("click" , () => {
    techStackUnSelect()
    aboutMeSelected.style.bottom = "0vw";
    aboutMeSelected.children[0].style.bottom = aboutMeSelectedPosition[0];
    aboutMeSelected.children[0].style.left = "0vw";

    aboutMeHeading.style.bottom = "40vw"

    console.log("clicked")

    for(i=1 ; i<5; i++) {        
        setTimeout( function(index) {
            aboutMeSelected.children[index].style.bottom = aboutMeSelectedPosition[index]
        } , 800 * i, i )
    }
    
}) 

function aboutMeUnselect() {
    
    for(let i = 1 ; i < 5 ; i++) {
        setTimeout( function(index) {
            console.log(i)
            aboutMeSelected.children[index].style.bottom = aboutMeUnSelectedPosition[index]
        } , 300 * i, i )

    }
    setTimeout(() => {
        aboutMeSelected.children[0].style.bottom = "-48vw";
        aboutMeSelected.children[0].style.left = "100vw";
    }, 1600);

    setTimeout(() => {
        aboutMeSelected.style.bottom = "-48vw";
        aboutMeHeading.style.bottom = "30vw"
    }, 2000);
    
}

setTimeout(() => {
    techStackUnSelect()
}, 10000);

/* --------------------------------------------tech stack  ------------------------------------------------------- */

/* tech stack when selected */

let techStackHeading = document.querySelector("#tech-stack-heading")
let techStackUnSelectedSvg = document.querySelector("#tech-stack-unselected")
let techStackSelected = document.querySelector(".tech-stack-selected-container")

techStackUnSelectedSvg.addEventListener("click" , function() {  
    aboutMeUnselect()
    techStackSelected.style.bottom = "0vw"
    techStackSelected.children[0].style.bottom = "-5vw"
    techStackHeading.style.bottom = "25vw"
    setTimeout( function() {
        techStackSelected.children[1].style.bottom = "20vw"
        techStackSelected.children[3].style.bottom = "22vw"
    } , 500)

    setTimeout( function() {
        techStackSelected.children[2].style.bottom = "9.5vw"
        techStackSelected.children[4].style.bottom = "11vw"
    } , 2000)
    positionLogos()
})


let langSectionTechStack = document.querySelector(".languages-section")
let toolsSectionTechStack = document.querySelector(".tools-section")

console.log(toolsSectionTechStack)
let langPositions = [["2" , "1"] , ["4" , "1"] , ["1" , "2"] , ["3" , "2"] , ["5" , "2"]]
let toolsPositions = [["2" , "1"] , ["3" , "1"] , ["4" , "1"] , ["3" , "2"]]

function positionLogos() {
    for ( let i = 0 ;i < langSectionTechStack.children.length ; i++ ) {
            langSectionTechStack.children[i].style.gridColumn = langPositions[i][0]
            langSectionTechStack.children[i].style.gridRow = langPositions[i][1]
    }

    for ( let i = 0 ;i < toolsSectionTechStack.children.length ; i++ ) {
        toolsSectionTechStack.children[i].style.gridColumn = toolsPositions[i][0]
        toolsSectionTechStack.children[i].style.gridRow = toolsPositions[i][1]
}
}

/* tech stack unselect */

function techStackUnSelect() {
    
    setTimeout( function() {
        techStackSelected.children[1].style.bottom = "-20vw"
        techStackSelected.children[3].style.bottom = "-22vw"
    } , 1000)

    setTimeout( function() {
        techStackSelected.children[2].style.bottom = "-9.5vw"
        techStackSelected.children[4].style.bottom = "-11vw"
    } , 500)

    setTimeout(() => {
        techStackSelected.children[0].style.bottom = "-50vw"
        techStackHeading.style.bottom = "13vw"
    }, 1500);
    setTimeout(() => {
        techStackSelected.style.bottom = "-50vw"
    }, 3000);

}