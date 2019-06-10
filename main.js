function Project(projectName, image, imageDescription, projectDescription, projectSite, gitHubRepo, logoContainer) {
    this.projectName = projectName;
    this.image = image;
    this.imageDescription = imageDescription;
    this.projecDescription = projectDescription;
    this.projectSite = projectSite;
    this.gitHubRepo = gitHubRepo;
    this.logoContainer = logoContainer;
    this.logoDisplay = displayLogos(this.logoContainer);
}

function Logo(imageLocation, altDescription) {
    this.imageLocation = imageLocation;
    this.altDescription = altDescription;
}

function displayLogos(logoContainer){
    let logoList = "";
    logoContainer.forEach(function(element) {
        logoList += `<img src="${element.imageLocation}" alt="${element.imageDescription}">`
    });
    return logoList;
};

const projectContainer = [
    new Project("Star Wars Quiz",
        "images/Star Wars Quiz Screenshot.png",
        "A screenshot of the quiz",
        "A quiz to test your Star Wars Knowledge!",
        "https://tylerc314.github.io/quiz-app/",
        "https://github.com/TylerC314/quiz-app",
        [new Logo("images/HTML5 Logo.png", "html5 logo"),
        new Logo("images/CSS3 Logo.png", "css3 logo"),
        new Logo("images/Javascript Logo.png", "javascript logo"),
        new Logo("images/jQuery Logo.png", "jQuery logo")]),
];

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
            <button class="email-button" onclick="location.href='mailto:tylerclark314@gmail.com;'">Email</button>
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

function displayProject(project) {
    $("main").append(`
    <section class="project-title-container">
        <header role="heading" class="project-title">
            ${project.projectName}
        </header>
    </section>
    <section class="project-container">
        <img src="${project.image}" class= "project-picture" alt="Test text">
        <p class="project-text">${project.projecDescription}</p>
        <ul>
        <a href="${project.projectSite}">Site Link</a>
        <a href="${project.gitHubRepo}">GitHub repo</a>
    </ul>
        <section class="logos">
            ${project.logoDisplay}
        </section>
    </section>`);
}

function displayAllProjects() {
    $("main").html("");
    projectContainer.forEach(function(element) {
        displayProject(element);
    });
}

function handlers(){
    $(".headline-button").click(function() {
        displayHeadline();
    });
    
    $(".bio-button").click(function() {
        displayBio();
    });
    $("html").on("click", ".projects-button", function() {
        displayAllProjects();
    });
}


function display(){
    displayHeadline();
    handlers();
}

$(display);