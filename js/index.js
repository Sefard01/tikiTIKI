const box = document.getElementById("folders");

FOLDERS.forEach(folder => {
  box.innerHTML += `
    <div class="folder-card" onclick="openFolder('${folder.id}')">
      📁 ${folder.title}
    </div>
  `;
});

function openFolder(id) {
  window.location.href = `preview.html?id=${id}`;
}
