let Ramdombutton = document.querySelector('.ramdomBtn');
let colorInput = document.querySelector('#colorInput');
let ApplyButton = document.querySelector('.applyBtn');
let ramdomcolor = document.querySelector('.ramdoncolor');
let container = document.querySelector('.container');
//Ramdom color Array
const colorArray = ['red', 'blue', 'green', 'cyan', 'black', 'pink', 'skyblue', 'lightgreen', 'yellow', 'white', 'tomato'];
const generetramdomNumber = () => {
    const ramdomNmber = Math.floor(Math.random() * colorArray.length);
    return (colorArray[ramdomNmber]);
}


const handleRamdomBtnclick = () => {
    // let color = generetramdomNumber();
    colorchnage(generetramdomNumber());

}

// Handle the Apply button
const handleApplyBtnclick = () => {
    const color = colorInput.value;
    colorchnage(color);
}
//  Change the color funcation
const colorchnage = (color) => {
    container.style.backgroundColor = color;
    ramdomcolor.innerText = color;

}


Ramdombutton.addEventListener('click', handleRamdomBtnclick);
ApplyButton.addEventListener('click', handleApplyBtnclick);