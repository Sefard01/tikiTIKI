document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- URL PARAM ---------------- */

  const params = new URLSearchParams(window.location.search);
  const folderId = params.get("id");

  const folder = FOLDERS.find(f => f.id === folderId);

  if (!folder) {
    alert("Folder not found");
    return;
  }

  /* ---------------- ELEMENTS ---------------- */

  const display = document.querySelector(".display");
  const themeBtn = document.getElementById("theem");

  const videoBox = document.getElementById("videos");

  const videoPlayer = document.getElementById("player");
  const ytPlayer = document.getElementById("ytPlayer");

  const title = document.getElementById("title");
  const path = document.getElementById("path");

  if (!videoBox || !videoPlayer || !ytPlayer || !title || !path) {
    console.error("Required HTML elements missing");
    return;
  }

  let currentIndex = 0;
  let isDark = true;

  /* ---------------- THEME TOGGLE ---------------- */

  themeBtn.addEventListener("click", () => {
    isDark = !isDark;

    if (isDark) {
      display.style.background = "#1e1d1d";
      display.style.color = "#fff";
      themeBtn.innerText = "Light";
    } else {
      display.style.background = "#ffffff";
      display.style.color = "#000";
      themeBtn.innerText = "Dark";
    }
  });

  /* ---------------- RENDER VIDEO LIST ---------------- */

  folder.videos.forEach((video, index) => {
    const item = document.createElement("div");
    item.className = "item";
    item.textContent = video.title;
    item.dataset.index = index;
    videoBox.appendChild(item);
  });

  /* ---------------- PLAYER SWITCH LOGIC ---------------- */

  function loadVideo(index) {

    const video = folder.videos[index];
    if (!video) return;

    currentIndex = index;

    const file = video.file;

    // Reset players
    videoPlayer.pause();
    videoPlayer.style.display = "none";
    ytPlayer.style.display = "none";
    ytPlayer.src = "";

    // YouTube detection
    if (file.includes("youtu")) {

      let videoId = "";

      if (file.includes("youtu.be")) {
        videoId = file.split("youtu.be/")[1];
      } else if (file.includes("watch?v=")) {
        videoId = file.split("watch?v=")[1];
      }

      ytPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      ytPlayer.style.display = "block";

    } else {

      videoPlayer.src = file;
      videoPlayer.style.display = "block";
      videoPlayer.load();
      videoPlayer.play();

    }

    title.textContent = video.title;
    path.textContent = `${folderId}/${video.title}`;

    // Active highlight
    document.querySelectorAll("#videos .item")
      .forEach(el => el.classList.remove("active"));

    const activeItem = document.querySelector(
      `#videos .item[data-index="${index}"]`
    );

    if (activeItem) {
      activeItem.classList.add("active");
    }

  }

  /* ---------------- CLICK EVENT ---------------- */

  videoBox.addEventListener("click", (e) => {
    const item = e.target.closest(".item");
    if (!item) return;

    const index = Number(item.dataset.index);
    loadVideo(index);
  });

  /* ---------------- AUTO LOAD FIRST VIDEO ---------------- */

  if (folder.videos.length > 0) {
    loadVideo(0);
  }

});
