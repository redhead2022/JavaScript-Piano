gsap.from("h1", {x: -100, duration: 2, opacity: 0});
gsap.from(".piano", {x: -100, duration: 2, opacity: 0, delay: 2});
gsap.from("#container", {x: -100, duration: 2, opacity: 0, delay: 4});

const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    let key = e.target;
    let note = document.getElementById(key.dataset.note);
    note.currentTime = 0;
    note.play();
  });
});


const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photos = ['https://noobnotes.net/wp-content/uploads/2018/06/music-notes-bohemian-rhapsody-queen.jpg', 'https://noobnotes.net/wp-content/uploads/2017/12/never-gonna-give-you-up-rick-astley-music-letter-notes.jpg', 'https://noobnotes.net/wp-content/uploads/2017/12/dancing-queen-abba-music-notes.jpg', 'https://noobnotes.net/wp-content/uploads/2018/02/music-notes-believer-imagine-dragons.jpg', 'https://noobnotes.net/wp-content/uploads/2018/08/music-notes-rolling-in-the-deep-adele.jpg'];
let i = 0;

next.addEventListener('click', () =>{
   i++;
   if (i > photos.length-1) {
      i = 0;
   }
   document.querySelector('#pictures').src = photos[i];
});


back.addEventListener('click', () =>{
   i--;
   if (i < 0) {
      i = photos.length-1;
   }
   document.querySelector('#pictures').src = photos[i];
});