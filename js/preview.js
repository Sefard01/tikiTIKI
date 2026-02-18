document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const folderId = params.get("id");

  const folder = FOLDERS.find(f => f.id === folderId);

  if (!folder) {
    alert("Folder not found");
    return;
  }
  
  const display = document.querySelector(".display");
  const theem = document.querySelector("#theem")
  const videoBox = document.getElementById("videos");
  const player = document.getElementById("player");
  const title = document.getElementById("title");
  const path = document.getElementById("path");
  let click = false;

  theem.addEventListener('click', ()=>{
    if(!click){
      theem.innerText="Dark";
      display.style.background = "white";
      display.style.color = "#000";

      

      click=true;

    }
    else{
      theem.innerText="Light";
      display.style.background = "#1e1d1d";
      display.style.color = "#fff";

      click=false;
      
    }
    
  })

  




  if (!videoBox || !player || !title) {
    console.error("Required elements missing in HTML");
    return;
  }

  let currentIndex = 0;

  // Render Video List
  folder.videos.forEach((video, index) => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.textContent = video.title;
    div.setAttribute("data-index", index);
    videoBox.appendChild(div);
  });

  // Load Video Function
  function loadVideo(index) {
    const video = folder.videos[index];
    if (!video) return;

    currentIndex = index;

    player.src = video.file;
    player.load();
    player.play();

    title.innerText = video.title;
    path.innerText= `${folderId}/${video.title}`;

    document.querySelectorAll("#videos .item")
      .forEach(el => el.classList.remove("active"));

    const activeItem = document.querySelector(
      `#videos .item[data-index="${index}"]`
    );

    if (activeItem) {
      activeItem.classList.add("active");
    }
  }

  // Click Listener
  videoBox.addEventListener("click", (e) => {
    const item = e.target.closest(".item");
    if (!item) return;

    const index = parseInt(item.getAttribute("data-index"));
    loadVideo(index);
  });

  // First Load
  if (folder.videos.length > 0) {
    loadVideo(0);
  }

});
