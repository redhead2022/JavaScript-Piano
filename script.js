const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    let key = e.target;
    let note = document.getElementById(key.dataset.note);
    note.currentTime = 0;
    note.play();
  });
});
