
// Variables for dropdown menu and mobile overlay
let overlay = document.querySelector('.overlay');
let closeMenu = document.querySelector('.close-icon-btn');
let dropDownMenu = document.querySelectorAll('.dropdown');
let dropDownIcon = document.querySelectorAll('.dropdown-icon');
let mobileIcon = document.querySelector('.navbar-toggler');
let mainMenu = document.querySelector('.main-menu');
let login = document.querySelector('.login');


//Dropdown icon switch
dropDownMenu.forEach((menu, index) => {
    menu.addEventListener('click', () => {
        console.log('clicked droped');

        //Toggle the dropdown icon 
        //Check if the dropdown icons on any index have icon arrow down
        if (dropDownIcon[index].src.includes("icon-arrow-down.svg")) {
            // If yes, change it to icon arrow up
            dropDownIcon[index].src = "./images/icon-arrow-up.svg";
        } else {
            // else, add the arrow down if arrow up is not found.
            dropDownIcon[index].src = "./images/icon-arrow-down.svg";
        }
        
    });
});

//Overlay for mobile bn
mobileIcon.addEventListener('click',()=>{
    console.log('clicked');
    overlay.classList.toggle('show'); 
})

closeMenu.addEventListener('click',()=> {
    console.log('clicked');
    overlay.classList.remove('show');
    mainMenu.classList.remove('show');
})

