function Project(projectName, images, imageDescription, projectDescription, projectSite, gitHubRepo, logoContainer) {
    this.projectName = projectName;
    this.images = images;
    this.imageDescription = imageDescription;
    this.projecDescription = projectDescription;
    this.projectSite = projectSite;
    this.gitHubRepo = gitHubRepo;
    this.logoContainer = logoContainer;
    this.logoDisplay = displayImages(this.logoContainer);
    this.projectDisplay = displayImages(this.images);
}

function Image(imageLocation, altDescription) {
    this.imageLocation = imageLocation;
    this.altDescription = altDescription;
}

function displayImages(imageContainer){
    let logoList = "";
    imageContainer.forEach(function(element) {
        logoList += `<li><img src="${element.imageLocation}" alt="${element.altDescription}"></li>`
    });
    return `
    <ul>
        ${logoList}
    </ul>`;
};

const projectContainer = [
    new Project("Star Wars Quiz",
        [
            new Image("images/Quiz Project/Quiz Start.png", "Opening Screen"),
            new Image("images/Quiz Project/Quiz Display 1.png", "View of the first Question"),
            new Image("images/Quiz Project/Quiz Question Incorrect.png", "A correct answer"),
            new Image("images/Quiz Project/Quiz Answer Highlight.png", "A highlighted answer"),
            new Image("images/Quiz Project/Quiz End Screen.png", "The quiz' final screen")
        ],
        "A screenshot of the quiz",
        "A quiz to test your Star Wars trivia knowledge. It will randomly sort the questions and the answers on display.",
        "https://tylerc314.github.io/quiz-app/",
        "https://github.com/TylerC314/quiz-app",
        [new Image("images/Logos/HTML5 Logo.png", "html5 logo"),
        new Image("images/Logos/CSS3 Logo.png", "css3 logo"),
        new Image("images/Logos/Javascript Logo.png", "javascript logo"),
        new Image("images/Logos/jQuery Logo.png", "jQuery logo")]),
];

function displayAboutMe(){
    $("main").html("");
    $("main").append(`
    <section class="title-container main-display">
        <header role="heading" class="project-title">
            <h2>About Me<h2>
        </header>
    </section>
    <section class="headline-container main-display">
        <p>Hello, I’m Tyler. I’m a full-stack developer living in the Greater Seattle Area</p>
        <p>My interests include: </p>
        <ul class="interests-list">
            <li>PC Gaming</li>
            <li>Working Out</li>
            <li>Meditation</li>
            <li>Programming</li>
        </ul>
        <p>As a current student in the Thinkful Full-Stack Flex program I’m interested in web-development and being on
            the front end of new technologies. I’ve always enjoyed solving puzzles, so programming has been a natural
            fit for me. Learning new, more optimal ways of solving problems is one of my favorite things about being a
            web developer. In my off time, I enjoy PC gaming and going to the gym.
        </p>
        <p>If you're interested in seeing my projects or contacing me via Email use the following links:</p>
        <ul>
            <button class="projects-button">Projects</button>
            <button class="email-button" onclick="location.href='mailto:tylerclark314@gmail.com;'">Email</button>
        </ul>   
    </section>
    `);
}

function displayContactMe() {
    $("main").html("");
    $("main").append(`
    <section class="contact-container main-display">
        <p>If you'd like to get in contact with me you can contact me through the following links:</p>
        <ul class="contacts-list">
            <li><img src="images/Logos/LinkedIn.png" alt="LinkedIn Logo">
            <a href="https://www.linkedin.com/in/tyler-clark-171974185/"><span class="link-text">LinkedIn</span></a></li>
            <li><img src="images/Logos/GitHub Light.png" alt="GitHub Logo">
            <a href="https://github.com/TylerC314"><span class="link-text">GitHub</span></a></li>
            <li><img src="images/Logos/Email.png" alt="Email">
            <a href="mailto:tylerclark314@gmail.com"><span class="link-text">Email</span></a></li>
        </ul>
    </section>`);
}

function displayProject(project) {
    $("main").append(`
    <section class="title-container main-display">
        <header role="heading" class="project-title">
            <h2>${project.projectName}<h2>
        </header>
    </section>
    <section class="project-container">
        <p class="project-text">${project.projecDescription}</p>
        ${project.projectDisplay}
        <section class="project-links">
            <ul>
                <a href="${project.projectSite}"><span class="link-text">Site Link</span></a>
                <a href="${project.gitHubRepo}"><span class="link-text">GitHub repo</span></a>
            </ul>
        </section>
        <section class="logos">
            <p>Technologies used:<p>
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
    $(".about-me-button").click(function() {
        displayAboutMe();
    });
    
    $(".contact-me-button").click(function() {
        displayContactMe();
    });
    $("html").on("click", ".projects-button", function() {
        displayAllProjects();
    });
}


function display(){
    displayAboutMe();
    handlers();
}

$(display);