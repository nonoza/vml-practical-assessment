window.addEventListener("load", () => {
  // Variables for dropdown menu and mobile overlay
  let overlay = document.querySelector(".overlay");
  let closeMenu = document.querySelector(".close-icon-btn");
  let dropDownMenu = document.querySelectorAll(".dropdown");
  let dropDownIcon = document.querySelectorAll(".dropdown-icon");
  let droptDownMenuItems = document.querySelectorAll(".dropdown-menu");
  let mobileIcon = document.querySelector(".navbar-toggler");
  let mainMenu = document.querySelector(".main-menu");
  let login = document.querySelector(".login");
  let register = document.querySelector('.btn-outline');
  const form = document.querySelectorAll('form');
  const closeX = document.querySelectorAll('.popup-close');
  const loginPopUp = document.querySelector('.popup-login');
  const registerPopup = document.querySelector('.popup-register ');
  const popup = document.querySelector('.popup-wrapper');
  const loginLink = document.querySelector('.login-link');
const regsterLink = document.querySelector('.register-link');
const lastName = document.querySelector('#firstNname');
const email = document.querySelector('#email-address');
const password  = document.querySelector('#password');
const errorMsg = document.querySelectorAll('.error-mgs');
  

  //Dropdown icon switch
  dropDownMenu.forEach((menu, index) => {
    menu.addEventListener("click", () => {
      console.log("clicked droped");

      //Toggle the dropdown icon
      //Check if the dropdown icons on any index have icon arrow down
      if (dropDownIcon[index].src.includes("icon-arrow-down.svg")) {
        // If yes, change it to icon arrow up
        dropDownIcon[index].src = "./images/icon-arrow-up.svg";
      } else {
        // else, add the arrow down if arrow up is not found.
        dropDownIcon[index].src = "./images/icon-arrow-down.svg";
      }

      droptDownMenuItems.classList.add("dropdown-menu[data-bs-popper]");
    });
  });

  // An event that will happend when the mobile icon is clicked, must show the mobile menu.
  mobileIcon.addEventListener("click", () => {
    console.log("clicked");
    // adding the styles of overlay.
    overlay.classList.toggle("show");
  });

  // An event that will happend when the close button is clicked, must hide the mobile menu.
  closeMenu.addEventListener("click", () => {
    console.log("clicked");
    // remove the styles of overlay
    overlay.classList.remove("show");
    // remove the styles for show and hide a menu.
    mainMenu.classList.remove("show");
  });

  //Initialising AOS js library
  AOS.init();

  //script for popup
  login.addEventListener('click',()=> {
    popup.style.display = "flex";
    registerPopup.style.display = "none";
    loginPopUp.style.display = "block";
  })

  register.addEventListener('click',()=> {
    popup.style.display = "flex";
    registerPopup.style.display = "block";
    loginPopUp.style.display = "none";
  })

  closeX.forEach( closebtn => {
    closebtn.addEventListener('click',()=>{
        popup.style.display = "none";
    })
})


loginLink.addEventListener('click',()=>{
 loginPopUp.style.display = "block";
 registerPopup.style.display = "none";
});

regsterLink.addEventListener('click',()=>{
    loginPopUp.style.display = "none";
    registerPopup.style.display = "block";
   })



form.forEach(form =>{
    form.addEventListener('submit', e => {
        e.preventDefault();
        console.log('clicked');
    
        // Validate the empty values
        if (lastName.value.trim() === "" && email.value.trim() === "" && password.value.trim() === "" ) { // Trim any leading or trailing whitespace
            errorMsg[0].textContent = "Enter your details";
            errorMsg[1].textContent = "Enter your details";
        } else {
            // Clear any previous error messages
            errorMsg[0].textContent = "";
        }
    });
})
});





