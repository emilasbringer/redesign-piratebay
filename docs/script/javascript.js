const dropDownElement = document.querySelector('#dropdown');
const containerMenu = document.querySelector('burgermenu')

let showDropDown = false;

function dropdownevent(x) {
    x.classList.toggle("change");
     
    if (showDropDown == false) {
        showDropDown = true;
        dropDownElement.classList.remove('dropupanimation'); // reset animation
        void dropDownElement.offsetWidth; // trigger reflow
        dropDownElement.classList.add('dropdownanimation'); // start animation 
        
        setTimeout(() => {
            console.log("showing dropdown");
            dropDownElement.style.top = "50px";
            }, 1000);
    }
    else if (showDropDown == true) {
        showDropDown = false;
        dropDownElement.classList.remove('dropdownanimation'); // reset animation
        void dropDownElement.offsetWidth; // trigger reflow
        dropDownElement.classList.add('dropupanimation'); //start animation
        setTimeout(() => {
            console.log("hiding dropdown");
            dropDownElement.style.top = "-155px";
            }, 1000);
    }
    
}

/*

*/