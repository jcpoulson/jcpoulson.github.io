// Variables
const main = document.querySelector('main');
const about = document.querySelector('#aboutMe');
const aboutNavBar = document.querySelector('#aboutNavBar');
const work = document.querySelector('#viewWork');
const workNavBar = document.querySelector('#workNavBar')
const fitness = document.querySelector('#viewFitness');
const adventures = document.querySelector('#viewAdventures');


// Variables that contain the HTML, for when the buttons are triggered
const fitnessHTML = `<div class="container text-center body-container">
<hr>
<div class="row">
  <div class="col">
      <h1>About Me</h1>
      <div class="row mt-4">
        <div class="col">
          <button type="button" class="btn btn-danger btn-lg" id="viewFitness">Fitness</button>
        </div>
        <div class="col">
          <button onClick="changeToCoolstuff()" type="button" class="btn btn-danger btn-lg" id="viewFitness">Cool Stuff</button>
        </div>
        <div class="col">
          <button onClick="changeToAdventures()" type="button" class="btn btn-danger btn-lg" id="viewAdventures">Adventures</button>
        </div>
    </div>
      <hr>
  </div>
</div>
<div class="container mt-5">
<h1 class="mb-5">I like fitness, really all there is to it LOL</h1>
<div class="row justify-content-around">
  <div id="carousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carousel" data-slide-to="0" class="active"></li>
      <li data-target="#carousel" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="d-lg-block justify-content-center">
          <div class="slide-box d-flex flex-column flex-lg-row">
            <img src="img/fitness-1.jpg" alt="First slide">
            <img src="img/fitness-2.JPG" alt="First slide">
            <img src="img/fitness-3.jpg" alt="First slide">
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-lg-block">
          <div class="slide-box d-flex flex-column flex-lg-row">
            <img src="img/fitness-4.JPG" alt="Second slide">
            <img src="img/fitness-5.JPG" alt="Second slide">
            <img src="img/fitness-6.JPG" alt="Second slide">
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
</div>`;

const workHTML = `<div class="container">
<div class="row" id="work-nav">
  <div class="col-lg">
    <!-- Card -->
        <div class="card card-image"
        style="background-image: url(img/klt.png); background-size: contain; /* Center the image */
         background-repeat: no-repeat;">
        <!-- Content -->
        <div class="text-white text-center d-flex align-items-center py-5" style="background-color: rgba(0, 0, 0, 0.5);">
          <div class="text-center mx-auto">
            <h2 class="mb-5" style="color: #EC407A;"><img src="icons/code-icon.svg" class="mr-3"/>Software</h6>
              <h1 class="card-title my-5">Korean Language Trainer</h1>
              <h6 class="card-subtitle mb-2">Bootstrap, JavaScript(anime.js), JSON, Python</h6>
              <p class="card-text">A photo gallery that displays a modal window upon clicking and filters out photos when the search bar is keyed up</p>
              <button type="button" class="btn btn-lg btn-1 mt-5" style="background-color: #EC407A;"><img src="icons/project-icon.svg" class="mr-3"><a href="projects/korean_language_trainer/index.html" target="_blank">View Project</a></button>
          </div>
        </div>

        </div>
        <!-- Card -->
  </div>

  <div class="col-lg">
    <!-- Card -->
        <div class="card card-image"
        style="background-image: url(img/project-5.png); background-size: contain;/* Center the image */
         background-repeat: no-repeat;">
        <!-- Content -->
        <div class="text-white text-center d-flex align-items-center py-5" style="background-color: rgba(63,81,181,0.7);">
          <div class="text-center mx-auto">
            <h2 class="mb-5" style="color: #FF7043;"><img src="icons/code-icon-orange.svg" class="mr-3"/>Software</h6>
              <h1 class="card-title my-5">Interactive Photo Gallery</h1>
              <h6 class="card-subtitle mb-2">HTML, CSS, JavaScript/Jquery</h6>
              <p class="card-text">A photo gallery that displays a modal window upon clicking and filters out photos when the search bar is keyed up</p>
              <button type="button" class="btn btn-lg btn-1 mt-5" style="background-color: #FF7043;"><img src="icons/project-icon.svg" class="mr-3"><a href="projects/Treehouse-project-5/index.html" target="_blank">View Project</a></button>
          </div>
        </div>

        </div>
        <!-- Card -->
  </div>

  

  
</div>
<div class="row mt-5">
  <div class="col-lg">
    <!-- Card -->
    <div class="card card-image"
    style="background-image: url(img/project-6.png); background-size: contain;/* Center the image */
     background-repeat: no-repeat;">
    <!-- Content -->
    <div class="text-white text-center d-flex align-items-center py-5" style="background-color: rgba(255,140,0, 0.5);">
      <div class="text-center mx-auto text-dark">
        <h2 class="mb-5" style="color: rgba(84, 96, 167, 1);"><img src="icons/code-icon-blue.svg" class="mr-3"/>Software</h6>
          <h1 class="card-title my-5">Wheel of Success</h1>
          <h6 class="card-subtitle mb-2">HTML, CSS and JavaScript</h6>
          <p class="card-text">An Interactive game that has try and complete the random word in a given number of lives</p>
          <button type="button" class="btn btn-lg btn-1 mt-5" style="background-color: rgba(84, 96, 167, 1);"><img src="icons/project-icon.svg" class="mr-3"><a href="projects/Treehouse-project-6/index.html" target="_blank">View Project</a></button>
      </div>
    </div>

    </div>
    <!-- Card -->
  </div>
  
    <div class="col-lg">
      <!-- Card -->
          <div class="card card-image"
          style="background-image: url(img/project-8.png); background-size: contain;/* Center the image */
           background-repeat: no-repeat;">
          <!-- Content -->
          <div class="text-white text-center d-flex align-items-center py-5" style="background-color: rgba(0, 0, 0, 0.5);">
            <div class="text-center mx-auto">
              <h2 class="mb-5" style="color: #5FCF80;"><img src="icons/code-icon-green.svg" class="mr-3"/>Software</h6>
                <h1 class="card-title my-5">Random User Generator</h1>
                <h6 class="card-subtitle mb-2">HTML, CSS, JavaScript/Fetch/AJAX</h6>
                <p class="card-text">This Project uses the Fetch API to grab data from the random user generator, then generates user cards and modal windows for each user</p>
                <button type="button" class="btn btn-lg btn-1 mt-5" style="background-color: #5FCF80;"><img src="icons/project-icon.svg" class="mr-3"><a href="projects/Treehouse-project-8/index.html" target="_blank">View Project</a></button>
            </div>
          </div>

          </div>
          <!-- Card -->
    </div>
</div>

<div class="row mt-5">
  <div class="col-lg">
    <!-- Card -->
        <div class="card card-image"
        style="background-image: url(img/co23.png); background-size: contain;/* Center the image */
         background-repeat: no-repeat;">
        <!-- Content -->
        <div class="text-white text-center d-flex align-items-center py-5" style="background-color: rgba(0, 0, 0, 0.5);">
          <div class="text-center mx-auto">
            <h2 class="mb-5" style="color: #FFDF00;"><img src="icons/code-icon-gold.svg" class="mr-3"/>Software</h6>
              <h1 class="card-title my-5">commons2floor3.com</h1>
              <h6 class="card-subtitle mb-2">HTML, CSS, JavaScript/Jquery</h6>
              <p class="card-text">This website is the website for a dorm at Liberty Unviersity, it primarily serves as a way for students to get to know theri leadership</p>
              <button type="button" class="btn btn-lg btn-1 mt-5" style="background-color: #FFDF00;"><img src="icons/project-icon.svg" class="mr-3"><a href="http://commons2floor3.com/" target="_blank">View Project</a></button>
          </div>
        </div>

        </div>
        <!-- Card -->
  </div>

  <div class="col-lg">
    <!-- Card -->
        <div class="card card-image"
        style="background-image: url(img/project-7.png); background-size: contain;/* Center the image */
         background-repeat: no-repeat;">
        <!-- Content -->
        <div class="text-white text-center d-flex align-items-center py-5" style="background-color:  rgba(236,64,122,0.5);">
          <div class="text-center mx-auto">
            <h2 class="mb-5" style="color: #00bfff;"><img src="icons/code-icon-skyblue.svg" class="mr-3"/>Software</h6>
              <h1 class="card-title my-5">Web Dashboard</h1>
              <h6 class="card-subtitle mb-2">HTML, CSS, JavaScript</h6>
              <p class="card-text">A web dashboard that uses JavaScript along with SVG animation to create an interactive experience</p>
              <button type="button" class="btn btn-lg btn-1 mt-5" style="background-color: #00bfff;"><img src="icons/project-icon.svg" class="mr-3"><a href="projects/Treehouse-project-7-approach-2/index.html" target="_blank">View Project</a></button>
          </div>
        </div>

        </div>
        <!-- Card -->
  </div>
</div>
</div>`;

const coolStuff = `<div class="container text-center body-container">
<hr>
<div class="row">
  <div class="col">
      <h1>About Me</h1>
      <div class="row mt-4">
        <div class="col">
          <button onClick="changeToFitness()" type="button" class="btn btn-danger btn-lg" id="viewFitness">Fitness</button>
        </div>
        <div class="col">
      <button type="button" class="btn btn-danger btn-lg" id="viewFitness">Cool Stuff</button>
      </div>
        <div class="col">
          <button onClick="changeToAdventures()" type="button" class="btn btn-danger btn-lg" id="viewAdventures">Adventures</button>
        </div>
    </div>
      <hr>
  </div>
</div>
    
  
</div>
<div class="container text-center mt-5">
  <h1>Cool Things about Me</h1>
  <p>Presented here are just cool facts about me and things that I am into</p>
  </div>
  <div class="container-fluid text-center mt-5">
    <div class="row">
      <div class="col">
        <!-- Card -->
          <div class="card">

            <!-- Card image -->
            <img class="card-img-top" src="img/anime.jpg" alt="Card image cap">

            <!-- Card content -->
            <div class="card-body">

              <!-- Title -->
              <h4 class="card-title"><a>Anime</a></h4>
              <!-- Text -->
              <p class="card-text">Yeah, I said it, I like anime (actually only a handful of them). While some are just straight garbage, some animes are just the most 
                amazing pieces of storytelling and animation. Anyways, Here are some of my favorites</p>
              <!-- Button -->
              <a href="" class="btn btn-primary" data-toggle="modal" data-target="#modal-1">My Favorites</a>

            </div>

          </div>
          <!-- Card -->
      </div>
      <div class="col">
        <!-- Card -->
        <div class="card">

          <!-- Card image -->
          <img class="card-img-top" src="img/guitar.jpg" alt="Card image cap">

          <!-- Card content -->
          <div class="card-body">

            <!-- Title -->
            <h4 class="card-title"><a>Guitar</a></h4>
            <!-- Text -->
            <p class="card-text">I've always loved music and I have been playing the guitar since 2011 so about 9 years now.
               The guitar for me has been an extremely exciting instrument for me to play and has allowed me to be a part of amazing events while at the same time
              it has been the place I go to get away, a place of peace and comfort</p>
            <!-- Button -->
            <a class="btn btn-primary" data-toggle="modal" data-target="#modal-2">Button</a>

          </div>

        </div>
        <!-- Card -->
      </div>
    </div>
  </div>`;


// This function is for when the user wants to change to the adventures tab, this function is written into the fitnessHTML for the adventure button
function changeToAdventures() {
    main.innerHTML = `<div class="container text-center body-container">
    <hr>
    <div class="row">
      <div class="col">
          <h1>About Me</h1>
          <div class="row mt-4">
            <div class="col">
              <button onClick="changeToFitness()" type="button" class="btn btn-danger btn-lg" id="viewFitness">Fitness</button>
            </div>
            <div class="col">
          <button onClick="changeToCoolstuff()" type="button" class="btn btn-danger btn-lg" id="viewFitness">Cool Stuff</button>
          </div>
            <div class="col">
              <button type="button" class="btn btn-danger btn-lg" id="viewAdventures">Adventures</button>
            </div>
        </div>
          <hr>
      </div>
    </div>
        
      
    </div>
    <div class="container text-center mt-5">
      <h1>Adventures</h1>
      <p>A picture is worth a thousand words, Explaining an adventure in words will never fully do it justice. I hope these pictures speak to you and tell an amazing story</p>
      <div class="row">
        <!-- Card deck -->
                <div class="card-deck">

                  <!-- Card -->
                  <div class="card mb-4 card-1">

                    <!--Card image-->
                    <div class="view overlay">
                      <img class="card-img-top" src="img/adventure-1.jpg"
                        alt="Card image cap">
                      <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                      </a>
                    </div>

                    <!--Card content-->
                    <div class="card-body">

                      <!--Title-->
                      <h4 class="card-title">Cole Mountain</h4>
                      <!--Text-->
                      
                      
                    </div>

                  </div>
                  <!-- Card -->

                  <!-- Card -->
                  <div class="card mb-4 card-1">

                    <!--Card image-->
                    <div class="view overlay">
                      <img class="card-img-top" src="img/adventure-2.JPG"
                        alt="Card image cap">
                      <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                      </a>
                    </div>

                    <!--Card content-->
                    <div class="card-body">

                      <!--Title-->
                      <h4 class="card-title">MRE bar</h4>
                      
                      

                    </div>

                  </div>
                  <!-- Card -->

                  <!-- Card -->
                  <div class="card mb-4 card-1">

                    <!--Card image-->
                    <div class="view overlay">
                      <img class="card-img-top" src="img/adventure-3.jpg"
                        alt="Card image cap">
                      <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                      </a>
                    </div>

                    <!--Card content-->
                    <div class="card-body">

                      <!--Title-->
                      <h4 class="card-title">David Nasser</h4>
                      
                      
                    </div>

                  </div>
                  <!-- Card -->

                </div>
                <!-- Card deck -->
                
      </div>
      
      <div class="row">
            <!-- Card deck -->
                  <div class="card-deck">

                    <!-- Card -->
                    <div class="card mb-4 card-1">

                      <!--Card image-->
                      <div class="view overlay">
                        <img class="card-img-top" src="img/adventure-4.jpg"
                          alt="Card image cap">
                        <a href="#!">
                          <div class="mask rgba-white-slight"></div>
                        </a>
                      </div>

                      <!--Card content-->
                      <div class="card-body">

                        <!--Title-->
                        <h4 class="card-title">Super Saiyan</h4>
                        
                        

                      </div>

                    </div>
                    <!-- Card -->

                    <!-- Card -->
                    <div class="card mb-4 card-1">

                      <!--Card image-->
                      <div class="view overlay">
                        <img class="card-img-top" src="img/adventure-5.jpg"
                          alt="Card image cap">
                        <a href="#!">
                          <div class="mask rgba-white-slight"></div>
                        </a>
                      </div>

                      <!--Card content-->
                      <div class="card-body">

                        <!--Title-->
                        <h4 class="card-title"> Freshman Move In</h4>
                        
                        

                      </div>

                    </div>
                    <!-- Card -->

                    <!-- Card -->
                    <div class="card mb-4 card-1">

                      <!--Card image-->
                      <div class="view overlay">
                        <img class="card-img-top" src="img/adventure-6.JPG"
                          alt="Card image cap">
                        <a href="#!">
                          <div class="mask rgba-white-slight"></div>
                        </a>
                      </div>

                      <!--Card content-->
                      <div class="card-body">

                        <!--Title-->
                        <h4 class="card-title">Hawaii</h4>
                        
                        

                      </div>

                    </div>
                    <!-- Card -->

                  </div>
                  <!-- Card deck -->
      </div>
    </div>
  </div>`;
};

// this function is for changing back to the fitness HTML from the adventuresHTML, this function is written into the adventuresHTML for the fitness button
function changeToFitness() {
  main.innerHTML = fitnessHTML;
};

function changeToCoolstuff(){
  main.innerHTML = coolStuff;
}


// These are the event listeners for the buttons on the page, these buttons change the main content section of the page
about.addEventListener('click', function() {
   main.innerHTML = fitnessHTML;
});

aboutNavBar.addEventListener('click', function() {
    main.innerHTML = fitnessHTML;
 });

 work.addEventListener('click', function() {
     main.innerHTML = workHTML;
 });

 workNavBar.addEventListener('click', function() {
     main.innerHTML = workHTML;
 })


