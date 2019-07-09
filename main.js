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
            new Image("images/Quiz Project/Quiz Answer Highlight.png", "A highlighted answer")
        ],
        "A screenshot of the quiz",
        "A quiz to test your Star Wars trivia knowledge. It will randomly sort the questions and the answers on display.",
        "https://tylerc314.github.io/quiz-app/",
        "https://github.com/TylerC314/quiz-app",
        [
            new Image("images/Logos/HTML5 Logo.png", "html5 logo"),
            new Image("images/Logos/CSS3 Logo.png", "css3 logo"),
            new Image("images/Logos/Javascript Logo.png", "javascript logo"),
            new Image("images/Logos/jQuery Logo.png", "jQuery logo")
        ]),
];

function displayAboutMe(){
    $("main").append(`
    <section class="about-me-container title-container main-display">
        <header class="project-title">
            <h2>About Me</h2>
        </header>
    </section>
    <section class="headline-container main-display">
        <p>Hello, I’m Tyler. I’m a full-stack developer living in the Greater Seattle Area.</p>
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
            web developer. I look forward to becoming part of a team of knowledgeable programmers to hone my programming
            skills and help build great websites! 
        </p>
    </section>
    `);
}

function displayProject(project) {
    $("main").append(`
    <section class="project-title-container title-container main-display">
        <header class="project-title">
            <h2>${project.projectName}</h2>
        </header>
    </section>
    <section class="project-container">
        <p class="project-text">${project.projecDescription}</p>
        ${project.projectDisplay}

        <section class="logos">
            <p>Technologies used:<p>
            <div>${project.logoDisplay}</div>
        </section>
        <section class="project-links">
        <p>Try it out:</p>
            <ul>
                <li><a href="${project.projectSite}" target="_blank">Site Link</a></li>
                <li><a href="${project.gitHubRepo}" target="_blank">GitHub repo</a></li>
            </ul>
        </section>
    </section>`);
}

function displayContactMe() {
    $("main").append(`
    <section class="contact-me-container main-display">
        <p>If you'd like to get in contact with me you can contact me through the following links:</p>
        <ul class="contacts-list">
            <li><img src="images/Logos/LinkedIn.png" alt="LinkedIn Logo">
            <a href="https://www.linkedin.com/in/tyler-clark-171974185/" target="_blank">LinkedIn</a></li>
            <li><img src="images/Logos/GitHub-Light.png" alt="GitHub Logo">
            <a href="https://github.com/TylerC314" target="_blank">GitHub</a></li>
            <li><img src="images/Logos/Email.png" alt="Email">
            <a href="mailto:tylerclark314@gmail.com">Email</a></li>
        </ul>
    </section>`);
}

function displayAllProjects() {
    projectContainer.forEach(function(element) {
        displayProject(element);
    });
}

function handlers(){
    let screenOffset = .1;
    $(".about-me-button").click(function() {
        $("body, html").animate(
            {
                scrollTop: $(".about-me-container").offset().top - $("nav").height()
            },
            300
        );
    });

    $(".projects-button").click(function() {
        $("body, html").animate(
            {
                scrollTop: $(".project-title-container").offset().top - $("nav").height()
            },
            300
        );
    });

    $(".contact-me-button").click(function() {
        $("body, html").animate(
            {
                scrollTop: $(".contact-me-container").offset().top
            },
            300
        );
    });
}


function display(){
    displayAboutMe();
    displayAllProjects();
    displayContactMe();
    handlers();
}

$(display);