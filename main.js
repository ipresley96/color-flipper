let colorFlipper = false

function setColors(){
    const setColors = ['FF0000', '00FF00', '0000FF', 'FFA500', 'FFFF00'];
    let randomIndex = Math.floor(Math.random() * setColors.length)
    document.querySelector("span").textContent = `#${setColors[randomIndex]}`
    document.querySelector("body").style.backgroundColor = `#${setColors[randomIndex]}`
}

function randomColors(){
    const hexValues = '0123456789ABCDEF';
    let color = "#"
    for (let i = 0; i < 6; i++) 
    color += hexValues[(Math.floor(Math.random() * 16))]; 
    document.querySelector("span").textContent = color
    document.querySelector("body").style.backgroundColor = color
}

document.querySelector("button").addEventListener('click', () => {
    if(colorFlipper){
        setColors()
    } else {
        randomColors()
    } 
})


document.querySelector('#setColors').addEventListener("click", () => {
    colorFlipper = true
    if(colorFlipper === true){
        document.querySelector('#setColors').style.color = '#90cdf4';
        document.querySelector('#randomColors').style.color = '#000'
    } 
})

document.querySelector('#randomColors').addEventListener("click", () => {
    colorFlipper = false
    if(colorFlipper === false){
        document.querySelector('#randomColors').style.color= '#90cdf4'
        document.querySelector('#setColors').style.color = '#000'
    } 
    
    console.log(colorFlipper)
})
