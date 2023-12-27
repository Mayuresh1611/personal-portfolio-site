/* selection of the sections */

// techStack , aboutMe , Experience , sideHustle
let activeSection = null

/* handles the active sections and deactivates the active section to activate different section */
function handleDeactivation( section ) {
    if( activeSection == "aboutMe"){
        aboutMeUnselect()
    }
    else if( activeSection == "techStack" ) {
        techStackUnSelect()
    }
    else if( activeSection == "experience") {
        experienceUnselect()
    }
    else if( activeSection == "sideHustle") {
        sideHustleUnselect() 
    }
    activeSection = section
}

/* remninds  */
let exitHint = document.querySelector(".exit-hint")

setInterval(() => {
    exitHint.style.width = "18rem"
    exitHint.style.right = "8vw"
    setTimeout(() => {
        exitHint.style.right = "0.2vw"
        exitHint.style.width = "0rem"
    }, 8000);
}, 45000);

/* about me section when selected */
let aboutMeUnselectedSvg = document.querySelector("#about-me-unselected")

let aboutMeSelected = document.querySelector(".about-me-selected-container")
let aboutMeSelectedPosition = ["0" , "0vw" , "17vw" ,"21vw" , "28vw"]
let aboutMeUnSelectedPosition = ["0" , "-48.1vw" , "-17vw" ,"-21vw" , "-28vw"]

let aboutMeHeading = document.querySelector("#about-me-heading")

aboutMeUnselectedSvg.addEventListener("click" , () => {
    handleDeactivation("aboutMe")
    
    aboutMeSelected.style.bottom = "0vw";
    aboutMeSelected.children[0].style.bottom = aboutMeSelectedPosition[0];
    aboutMeSelected.children[0].style.left = "0vw";

    aboutMeHeading.style.bottom = "40vw"


    for(i=1 ; i<5; i++) {        
        setTimeout( function(index) {
            aboutMeSelected.children[index].style.bottom = aboutMeSelectedPosition[index]
        } , 800 * i, i )
    }
    
}) 

function aboutMeUnselect() {
    
    for(let i = 1 ; i < 5 ; i++) {
        setTimeout( function(index) {
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
}, 10000);

/* --------------------------------------------tech stack  ------------------------------------------------------- */

/* tech stack when selected */

let techStackHeading = document.querySelector("#tech-stack-heading")
let techStackUnSelectedSvg = document.querySelector("#tech-stack-unselected")
let techStackSelected = document.querySelector(".tech-stack-selected-container")

techStackUnSelectedSvg.addEventListener("click" , function() {  
    handleDeactivation("techStack")
    techStackSelected.style.bottom = "0vw"
    techStackSelected.children[0].style.bottom = "-5vw"
    
    setTimeout( function() {
        techStackSelected.children[1].style.bottom = "20vw"
        techStackSelected.children[3].style.bottom = "22vw"
        techStackHeading.style.bottom = "25vw"
        
    } , 500)

    setTimeout( function() {
        techStackSelected.children[2].style.bottom = "9.5vw"
        techStackSelected.children[4].style.bottom = "11vw"
        
    } , 2000)
    positionLogos()
})


let langSectionTechStack = document.querySelector(".languages-section")
let toolsSectionTechStack = document.querySelector(".tools-section")

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

/* -------------------------------------------------- Experience selected   -----------------------------------------------------------------------------*/

let projectsSection = document.querySelector(".projects-section")

/* generates customized random  radius for div box to generate random shapes */
function getRandomInt(max , min){
    return Math.floor(Math.random() * (max - min)) + min;
}
function changeShape() {
    const topLeft = getRandomInt(40, 80); 
    const topRight = getRandomInt(40, 80);
    const bottomRight = getRandomInt(40, 80);
    const bottomLeft = getRandomInt(40, 80);
    return `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`
}


/* droplets */

let dropletsHolder = document.querySelector(".droplets")
let drops = [] 

// creates the required droplets
for(let j = 0; j < 50; j++) {
    drop = document.createElement("div")
    let size = getRandomInt(1 , 5) + "vw";
    drop.style.height = size;
    drop.style.width = size;
    drop.style.bottom = "50%";
    drop.style.left = "50%";
    drops.push(drop)
    dropletsHolder.appendChild(drop)
}      


function dropsSplash( l , b) {

    dropletsHolder.style.bottom = b + "vw"
    dropletsHolder.style.left = l + "vw"

    for (let j = 0 ; j < drops.length ; j++) {
        drops[j].style.bottom = getRandomInt(5 , 30) + "vw"; 
        drops[j].style.left = getRandomInt(-30 , 50) + "vw";
        drops[j].style.animation = `blurunblur 3s ease-in-out infinite ${getRandomInt(0 , 3)}s`
    }

    dropInterval = setInterval(() => {
        for (let j = 0 ; j < drops.length ; j++) {
                drops[j].style.bottom = getRandomInt(5 , 30) + "vw"; 
                drops[j].style.left = getRandomInt(-30 , 40) + "vw";
        }
    }, 5000);
}

function dropsCollect( ){
    try {
        clearInterval(dropInterval)
    } catch (error) {
        
    }
    dropletsHolder.style.bottom = "-12vw"
    dropletsHolder.style.left = "38vw"

    for (let j = 0 ; j < drops.length ; j++) {
        drops[j].style.bottom = "50%"; 
        drops[j].style.left = "50%";
        drops[j].style.animation = "none"
    }

    

}

/* experience select */

let experienceUnselected = document.querySelector("#experience-unselected")
let experienceSelectedContainer = document.querySelector(".experience-selected-container")
let experienceSelected = document.querySelector("#experience-selected")

experienceUnselected.addEventListener("click" , ()=> {
    handleDeactivation("experience")

    experienceSelectedContainer.style.bottom = "0vw"
    experienceSelected.style.bottom = "0vw"
    
    projectsSection.style.bottom = "12vw"

})

/* Activates project section */
let noProjects 
let projectsSectionActive = 0;

// imports the json data into the file 
var jsonData
fetch('exp.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Store the retrieved JSON data in the variable
    jsonData = data;
    console.log(jsonData); // Access jsonData here or perform further actions
    addProjectsToPage(jsonData)
  })
  .catch(error => {
    console.error('There was a problem fetching the JSON file:', error);
  });

let projectCardColl = document.querySelector(".project-cards")
function addProjectsToPage(jsonData){
    noProjects = jsonData.projects.length
    

    for (var i = 0; i < noProjects; i++) {
        (function () {
            var obj = jsonData.projects[i];
            var pdiv = addProjectDiv(obj.name , obj.link);
            var card = addProjectCard(obj.name, obj.desc, obj.img, i);
    
            pdiv.addEventListener("mouseover", function () {
                card.style.width = "20rem";
                card.style.filter = "blur(0px)"
            });
    
            pdiv.addEventListener("mouseout", function () {
                card.style.width = "0rem";
                card.style.filter = "blur(5px)"
            });
    
            projectCardColl.appendChild(card);
        })();
    }
    
}

function addProjectDiv(name , link){
    let pdiv = document.createElement("a")
    pdiv.classList.add("projects")
    pdiv.setAttribute("href" , link)
    pdiv.setAttribute("target" , "blank")
    let hname = document.createElement("h6")
    hname.textContent = name
    pdiv.appendChild(hname)
    projectsSection.appendChild(pdiv) 

    return pdiv
}




/* adding project cards to the projects */
function addProjectCard(name, desc , img , i){
    // Create main container div
  const projectCard = document.createElement('div');
  projectCard.classList.add('project_card');
  projectCard.style.backgroundImage = "url("+ img +")"

  let clickhere = document.createElement("p")
  clickhere.textContent = "< click"
  clickhere.classList.add("clickme")  

  // Create project info card div
  const projectInfoCard = document.createElement('div');
  projectInfoCard.classList.add('project-info-card');

  // Create heading element
  const heading = document.createElement('h6');
  heading.classList.add('name');
  heading.textContent = name;

  // Create paragraph element
  const paragraph = document.createElement('p');
  paragraph.classList.add('desc');
  paragraph.textContent = desc;

  // Append heading and paragraph to project info card
  projectInfoCard.appendChild(heading);
  projectInfoCard.appendChild(paragraph);

  // Create link div
  const linkDiv = document.createElement('div');
  linkDiv.classList.add('link');

  // Create image element
  const image = document.createElement('img');
  image.classList.add('link-svg');
  image.src = 'Asset 3.svg';
  image.alt = '';

  // Append image to link div
  linkDiv.appendChild(image);

  // Create transit div
  const transitDiv = document.createElement('div');
  transitDiv.classList.add('transit');

  // Append project info card, link div, and transit div to project card
  projectCard.appendChild(projectInfoCard);
  projectCard.appendChild(linkDiv);
  projectCard.appendChild(clickhere)
  projectCard.appendChild(transitDiv);

  return projectCard
}

function getPosition(n){
    let used = []
    let ret = []
    var arr = [[-30, 10], [-20, 10], [-10, 10], [0, 10], [10, 10], [20, 10], [30, 10], [-30, 20], [-20, 20], [-10, 20], [0, 20], [10, 20], [20, 20], [30, 20]]
    
    let i = 0
    while (i < n){
        let pos = getRandomInt(0 , 14) 
        if (!used.includes(pos)){
            i++
            ret.push(arr[pos])
            used.push(pos)
        }

    }
    return ret
}



function activateProject() {

    /* sets up the different projects div into their respective positions */
    let vals = getPosition(noProjects)

    for (let i = 1 ; i < noProjects+1 ; i++) {
        pos = vals[i-1]
        projectsSection.children[i].style.height = "8vw"
        projectsSection.children[i].style.width = "8vw"
        projectsSection.children[i].style.borderWidth = "0.3rem"
        projectsSection.children[i].style.left = pos[0] + "vw"
        projectsSection.children[i].style.bottom = pos[1] + "vw"

        projectCardColl.children[i-1].style.left = (pos[0] + 42)+ "vw"
        projectCardColl.children[i-1].style.bottom = (pos[1] + 10) + "vw"
        
        projectsSection.children[i].style.borderRadius = changeShape() ;  
    }
    // changes shape every 2 seconds
    shapeChangeInterval = setInterval(() => {
        for (let i = 1 ; i < projectsSection.children.length ; i++) {
    
            projectsSection.children[i].style.borderRadius = changeShape();
            pos = pos + 11
        }
    }, 2000);


    /* droplets */
    dropsSplash(37 , 14);
}

function deactivateProject() {
    for (let i = 1 ; i < projectsSection.children.length ; i++) {
        
        projectsSection.children[i].style.height = "0vw"
        projectsSection.children[i].style.width = "0vw"
        projectsSection.children[i].style.left = "50%"
        projectsSection.children[i].style.bottom = "50%"
        projectsSection.children[i].style.borderWidth = "0rem"
    }

    try {
        clearInterval(shapeChangeInterval)
    } catch (error) {
        
    }

    dropsCollect()
}

/* changes the shape of the box every 2 seconds  */


projectsSection.children[0].addEventListener("click" , function() {
    if (projectsSectionActive) {
        /* deactivate */
        deactivateProject()
        projectsSectionActive = 0; 
    }
    else{
        /* activate */
        activateProject()
        projectsSectionActive = 1;
    }
})

function experienceUnselect() {
    deactivateProject()
    experienceSelected.style.bottom = "-30vw"
    projectsSection.style.bottom = "-12vw"
    dropletsHolder.style.bottom = "-10vw" 

    setTimeout(() => {
        experienceSelectedContainer.style.bottom = "-30vw"
    }, 3000);
}


/* --------------------------------------------    side hustle  --------------------------------------------------------------------- */
let sideHustleUnselected = document.querySelector("#side-hustle-unselected")
let sideHustleSelectedContainer = document.querySelector(".side-hustle-selected-container")
let sideHustleHeading = document.querySelector("#side-hustle-heading")

sideHustleUnselected.addEventListener("click" , () => {
    handleDeactivation("sideHustle")

    sideHustleSelectedContainer.style.bottom = "0vw"
    sideHustleSelectedContainer.children[0].style.bottom = "0vw"

    sideHustleHeading.style.bottom = "34vw"
    sideHustleHeading.style.left = "45vw"

    setTimeout(() => {
        sideHustleSelectedContainer.children[1].style.bottom = "19vw"
        sideHustleSelectedContainer.children[2].style.bottom = "21vw"
    }, 1500);
}) 

function sideHustleUnselect() {
    sideHustleSelectedContainer.children[1].style.bottom = "-19vw"
    sideHustleSelectedContainer.children[2].style.bottom = "-21vw"
    setTimeout(() => {
        sideHustleHeading.style.bottom = "19vw"
        sideHustleHeading.style.left = "4vw"
        sideHustleSelectedContainer.children[0].style.bottom  = "-40vw"
    }, 500);
    setTimeout(() => {
        sideHustleSelectedContainer.style.bottom = "-40vw"
    }, 1000);
}

/* --------------------------   exit sections by clicking clouds  ----------------------------------------------------------------- */

let cloudContainer = document.querySelector(".cloud-container")

cloudContainer.addEventListener("click" , () => {
    handleDeactivation("none")
})