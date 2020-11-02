const home = document.querySelector('.home');
const resources = document.querySelector('.resources');
const about = document.querySelector('.about');
const level1 = document.querySelector('.level-1');
const check = document.querySelector('.check');
const main = document.querySelector('.overall-container');
const hangul = document.querySelector('#hangul');
const next = document.querySelector("#next");

let backgroundImages = ['img/korea-bg-img-2.jpg', 'img/korea-bg-img-3.jpg', 'img/korea-bg-img-4.jpg', 'img/korea-bg-img-5.jpg', 'img/korea-bg-img-6.jpg', 'img/korea-bg-img-7.jpg', 'img/korea-bg-img-8.jpg'];

function logEnglishValues(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].english)
    }
}

function getRandom(array) {
    randomItem = array[Math.floor(Math.random() * array.length)]
    return randomItem
}

function changeHTML(term) {
    appHTML = `<div class="view overall-container" style="background-image: url(${getRandom(backgroundImages)}); background-repeat: no-repeat; background-size: cover; background-position: center center;">
    <nav class="navbar navbar-expand-lg">
      <button class="btn btn-lg btn-primary" onclick="location.href='index.html';">Home</button>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active resources">
            <button class="btn btn-lg btn-danger" onclick="location.href='resources.html';">Resources/Courses <span class="sr-only">(current)</span></button>
          </li>
          <li class="nav-item active about">
              <button class="btn btn-lg btn-light">About <span class="sr-only">(current)</span></button>
            </li>
        </ul>
      </div>
    </nav>
      <main class="main">
    <div class="container my-5">
        <div class="row justify-content-center my-5">
              <h1 style="border-bottom: solid white 5px;" class="title">Level 1: Basic Actions, Items and Expressions</h1>
        </div>
        </div>
        <div class="container my-5">
        <div class="row justify-content-center my-5">
          <h1 class="title">Say the following or type it in Korean</h1>
        </div>
        <div class="row justify-content-center my-5">
        <h1 class="my-5 english">${term.english}</h1>
        </div>
        <div class="row justify-content-center my-5">
        <h1 class="hangul" id="hangul">${term.korean}</h1>
        </div>
        <div class="row justify-content-center my-5">
          <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Enter Answer</label>
                <input class="form-control input">
                <p>You don't have to enter the information, just click check and the answer will show</p>
              </div>
              </form>
            </div>
            <div class="row justify-content-center mt-5">
            <button class="btn btn-primary btn-lg btn-block mx-auto check" onClick="show()">Check</button>
            </div>
            <div class="row justify-content-center my-2">
            <button class="btn btn-success btn-lg btn-block mx-auto" id="next" onClick="reload()">Next</button>
            </div>
        </div>
        </main>
              <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br><br>`
        main.innerHTML = appHTML;
}

function show() {
  console.log("This is working here");
  document.querySelector('#hangul').style.display = "block";
  document.querySelector('#next').style.display = 'block';
}

function reload() {
  anime({
    targets: '.overall-container',
    translateX: 1000,
    direction: 'alternate',
    easing: 'linear',
    duration: 1500
  });

  setTimeout(function() {
    fetch('../data.json')
    .then(response => response.json())
    .then(data => getRandom(data))
    .then(term => changeHTML(term))
  }, 1500)
}

fetch('../data.json')
    .then(response => response.json())
    .then(data => getRandom(data))
    .then(term => changeHTML(term))
    