
    const color = document.getElementById('colorPicker');

// console.log(color);
// console.log(color.value);
function setColor(color) {
    var elements = document.getElementById('footer');
        elements.style.backgroundColor = color;


}    
     

        
/// local storage 
const colorSave = localStorage.getItem("bgColor");
if (colorSave) {
    setColor(colorSave);
    color.value = colorSave;

}

color.addEventListener('input', function () {
    const colorSelect = this.value;
    setColor(colorSelect);
    localStorage.setItem('bgColor', colorSelect);
}

)
