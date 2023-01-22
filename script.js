gsap.from("h1", {x: -100, duration: 2, opacity: 0});
gsap.from(".piano", {x: -100, duration: 2, opacity: 0, delay: 2});

const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    let key = e.target;
    let note = document.getElementById(key.dataset.note);
    note.currentTime = 0;
    note.play();
  });
});
