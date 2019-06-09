function Project(image, imageDescription, projectDescription) {
    this.image = image;
    this.imageDescription = imageDescription;
    this.projecDescription = projectDescription;
}

test = new Project("Star Wars Quiz.png",
    "A screenshot of the quiz",
    "A quiz to test your Star Wars Knowledge!");

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
        <p class="project-text">${project.projecDescription}</p>
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
    // displayHeadline();
    handlers();
}

$(display);