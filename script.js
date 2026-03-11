// EVENT SLIDER CONTROL

const events = document.querySelectorAll("#eventList li");
const slides = document.querySelectorAll(".slide");

events.forEach(event => {

event.addEventListener("click", () => {

events.forEach(e => e.classList.remove("active"));
slides.forEach(s => s.classList.remove("active"));

event.classList.add("active");

const index = event.dataset.index;
slides[index].classList.add("active");

});

});



// COUNTDOWN TIMER

const targetDate = new Date("2026-04-01T10:00:00").getTime();

function updateCountdown(){

const now = new Date().getTime();
const gap = targetDate - now;

const days = Math.floor(gap / (1000 * 60 * 60 * 24));
const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((gap % (1000 * 60)) / 1000);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

}

setInterval(updateCountdown,1000);


const searchInput = document.getElementById("searchInput");
const modeFilter = document.getElementById("modeFilter");
const levelFilter = document.getElementById("levelFilter");
const locationFilter = document.getElementById("locationFilter");

const cards = document.querySelectorAll(".event-card");


function filterEvents(){

const search = searchInput.value.toLowerCase();
const mode = modeFilter.value;
const level = levelFilter.value;
const location = locationFilter.value;

cards.forEach(card=>{

const name = card.dataset.name;
const cardMode = card.dataset.mode;
const cardLevel = card.dataset.level;
const cardLocation = card.dataset.location;

let visible = true;

if(search && !name.includes(search))
visible = false;

if(mode && cardMode !== mode)
visible = false;

if(level && cardLevel !== level)
visible = false;

if(location && cardLocation !== location)
visible = false;

card.style.display = visible ? "block" : "none";

});

}


searchInput.addEventListener("input",filterEvents);
modeFilter.addEventListener("change",filterEvents);
levelFilter.addEventListener("change",filterEvents);
locationFilter.addEventListener("change",filterEvents);

// GALLERY FILTER

const gallerySearch = document.getElementById("gallerySearch");
const galleryFilter = document.getElementById("galleryFilter");
const galleryCards = document.querySelectorAll(".gallery-card");

function filterGallery(){

const search = gallerySearch.value.toLowerCase();
const event = galleryFilter.value;

galleryCards.forEach(card=>{

const name = card.dataset.name;
const cardEvent = card.dataset.event;

let visible = true;

if(search && !name.includes(search))
visible = false;

if(event && cardEvent !== event)
visible = false;

card.style.display = visible ? "block" : "none";

});

}

gallerySearch.addEventListener("input",filterGallery);
galleryFilter.addEventListener("change",filterGallery);



// FULLSCREEN PREVIEW

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const closeModal = document.querySelector(".close-modal");

galleryCards.forEach(card=>{

card.addEventListener("click",()=>{

const img = card.querySelector("img").src;
const title = card.querySelector(".gallery-title").innerText;

modal.style.display = "flex";
modalImg.src = img;
modalTitle.innerText = title;

});

});

closeModal.onclick = ()=>{

modal.style.display = "none";

}

const joinBtn = document.querySelector(".join-btn");

joinBtn.addEventListener("click", () => {

document.querySelector(".events-section")
.scrollIntoView({behavior:"smooth"});

});


const authModal = document.getElementById("authModal")

const signInBtn = document.querySelector(".signin")
const signUpBtn = document.querySelector(".signup")

const closeAuth = document.querySelector(".close-auth")

const authTitle = document.getElementById("authTitle")

const authName = document.getElementById("authName")
const authEmail = document.getElementById("authEmail")
const authPassword = document.getElementById("authPassword")

const authSubmit = document.getElementById("authSubmit")

const switchAuth = document.getElementById("switchAuth")

const authSwitchText = document.getElementById("authSwitchText")

const userInfo = document.getElementById("userInfo")

const logoutBtn = document.getElementById("logoutBtn")


let isSignup = false



signInBtn.onclick = () => {

authModal.style.display = "flex"

isSignup = false

updateAuthMode()

}


signUpBtn.onclick = () => {

authModal.style.display = "flex"

isSignup = true

updateAuthMode()

}


closeAuth.onclick = () => {

authModal.style.display = "none"

}



switchAuth.onclick = () => {

isSignup = !isSignup

updateAuthMode()

}



function updateAuthMode(){

if(isSignup){

authTitle.innerText = "Sign Up"

authName.style.display = "block"

authSwitchText.innerText = "Already have an account?"

switchAuth.innerText = "Sign In"

}

else{

authTitle.innerText = "Sign In"

authName.style.display = "none"

authSwitchText.innerText = "Don't have an account?"

switchAuth.innerText = "Sign Up"

}

}



authSubmit.onclick = () => {

const name = authName.value
const email = authEmail.value
const pass = authPassword.value

let users = JSON.parse(localStorage.getItem("users")) || []


if(isSignup){

users.push({name,email,pass})

localStorage.setItem("users",JSON.stringify(users))

alert("Account Created")

}

else{

const user = users.find(u => u.email === email && u.pass === pass)

if(user){

localStorage.setItem("loggedUser",JSON.stringify(user))

showUser()

authModal.style.display="none"

}

else{

alert("Invalid Credentials")

}

}

}



function showUser(){

const user = JSON.parse(localStorage.getItem("loggedUser"))

if(user){

userInfo.innerText = "Hi, "+user.name

logoutBtn.style.display = "inline-block"

signInBtn.style.display="none"
signUpBtn.style.display="none"

}

}



logoutBtn.onclick = () => {

localStorage.removeItem("loggedUser")

location.reload()

}


showUser()