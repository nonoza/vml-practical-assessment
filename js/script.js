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
});
