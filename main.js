function Project(image, imageDescription, projectDescription, logoContainer) {
    this.image = image;
    this.imageDescription = imageDescription;
    this.projecDescription = projectDescription;
    this.logoContainer = logoContainer;
    this.logoDisplay = displayLogos(this.logoContainer);
}

function Logo(imageLocation, altDescription) {
    this.imageLocation = imageLocation;
    this.altDescription = altDescription;
}

function displayLogos(logoContainer){
    let logoList = "";
    for(let i = 0; i < logoContainer.length; ++i) {
        logoList += `<img src="${logoContainer[i].imageLocation}" alt="${logoContainer[i].imageDescription}">`
    }
    return logoList;
};

test = new Project("images/Star Wars Quiz Screenshot.png",
    "A screenshot of the quiz",
    "A quiz to test your Star Wars Knowledge!",
    [new Logo("images/HTML5 logo.png", "html5 logo"),
        new Logo("images/CSS3 logo.png", "css3 logo"),
        new Logo("images/Javascript Logo.png", "javascript logo"),
        new Logo("images/jQuery Logo.png", "jQuery logo")]);

function displayHeadline(){
    $("main").html("");
    $("main").append(`
    <section class="headline-container">
        <p>Hello, I’m Tyler. I’m a full-stack developer living in the Greater Seattle Area</p>
        <p>My interests include: </p>
        <ul class="interests-list">
            <li>PC Gaming</li>
            <li>Working Out</li>
            <li>Meditation</li>
            <li>Programming</li>
        </ul>
        <p>If you're interested in seeing my projects or contacing me via Email use the following links:</p>
        <ul>
            <button class="projects-button">Projects</button>
            <button>Email</button>
        </ul>
    </section>`);
}

function displayBio(){
    $("main").html("");
    $("main").append(`
    <section class="bio-container">
        <p>As a current student in the Thinkful Full-Stack Flex program I’m interested in web-development and being on
            the front end of new technologies. I’ve always enjoyed solving puzzles, so programming has been a natural
            fit for me. Learning new, more optimal ways of solving problems is one of my favorite things about being a
            web developer. In my off time, I enjoy PC gaming and going to the gym.
        </p>
    </section>`);
}

function displayProject(project){
    $("main").html("");
    $("main").append(`
    <section class="project-title-container">
        <header role="heading" class="project-title">
            Star Wars Quiz
        </header>
    </section>
    <section class="project-container">
        <img src="${project.image}" class= "project-picture" alt="Test text">
        <p class="project-text">${project.projecDescription}</p>
        <section class="logos">
            ${project.logoDisplay}
        </section>
    </section>`);
}

function handlers(){
    $(".headline-button").click(function() {
        displayHeadline();
    });
    
    $(".bio-button").click(function() {
        displayBio();
    });

    $(".projects-button").click(function() {
        displayProject(test);
    });
}


function display(){
    displayHeadline();
    handlers();
}

$(display);