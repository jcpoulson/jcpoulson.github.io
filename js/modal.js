const next = document.querySelector('#next');
const modalBody = document.querySelector('.modal-body')

const demonSlayer = `<iframe src="https://www.youtube.com/embed/pmanD_s7G3U?autoplay=1&mute=1" style="width: 100%;"></iframe>
    <h1 class="mt-4">Demon Slayer</h1>
    <p>Demon Slayer is my hands down favorite anime ever, just the mix of awesome elemental/sword fighting, the connection to the characters,
        the storytelling and the lessons this show has to teach make this an amazing show and my favorite
    </p>`;

const yourName = `<iframe src="https://www.youtube.com/embed/xU47nhruN-Q?autoplay=1&mute=1" style="width: 100%;"></iframe>
    <h1 class="mt-4">Your Name</h1>
    <p>Your Name is an absolute master piece that makes my eyes water everytime I watch it. This movie does a fantastic job of mixing comedy and romance,
        However this movie is not a romcom, very far from it actually. This movie is one you just have to watch, I have to warn you though, it'll probably have you shedding a happy tear
    </p>`;

const naruto = `<iframe src="https://www.youtube.com/embed/KmrTuNXVrf4?autoplay=1&mute=1" style="width: 100%;"></iframe>
<h1 class="mt-4">Naruto</h1>
<p>Naruto is a classic and actually the first anime I ever watched. Although Naruto is quite long, it has amazing battles, a very heartfelt
  connection to the characters and an amazing story that is built right from the beginning with an epic finale
</p>`;

const weatheringWithYou = `<iframe src="https://www.youtube.com/embed/Q6iK6DjV_iE?autoplay=1&mute=1" style="width: 100%;"></iframe>
<h1 class="mt-4">Weathering With You</h1>
<p>This movie is made by the same director who directed "Your Name", although this movie is similar in many aspects, it is also different in 
  many aspects as well. This movie much like "Your Name" is an amazing movie that will have you shedding happy-sad tears
</p>`;

modalBodies = [demonSlayer, yourName, naruto, weatheringWithYou];
count = 1;
function changeModal(){
    modalBody.innerHTML = modalBodies[count]
    if (count >= modalBodies.length) {
        count = 0;
    } else {
        count += 1;
    }
}
    
next.addEventListener('click', function() {
    changeModal();
});