let inputbox=document.querySelector(".MyInputBox");
let selectinput=document.querySelector(".SelectedInput p");
let OptionInput=document.querySelector(".OptionInput");
let bool=true;
inputbox.addEventListener('mouseover', () => {
    OptionInput.classList.add("select")
})
inputbox.addEventListener('mouseout', () => {
    OptionInput.classList.remove("select")
})
let cities=document.querySelectorAll('.OptionInput div')
cities.forEach((element, index) => {
    element.style=`--i: ${index}`
    
});
let citiescontent=document.querySelectorAll('.OptionInput p')

citiescontent.forEach((element) => {
    
    element.addEventListener('mouseover', () => {
        selectinput.textContent=element.textContent;
    })
    element.addEventListener('click', () => {
        selectinput.textContent=element.textContent;
        bool=true;
        return bool;
    })
    
    if(bool==false){
    element.addEventListener('mouseout', () => {
        selectinput.textContent='Cities';
    })
    }
});
