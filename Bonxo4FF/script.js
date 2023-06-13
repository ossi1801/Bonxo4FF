var elemDiv = document.createElement('div');
elemDiv.id ="Bonxo4FF";
elemDiv.style.cssText = "position:absolute;width:64px !important;height:64px !important;opacity:1;z-index:99999 !important;background-size: cover;";
let s = browser.runtime.getURL("icons/bonxo1.svg");

elemDiv.style.cssText += "background-image: url('"+s+"');";//'background:#dd4033;'
elemDiv.style.cssText += 'transition: all .5s ease-in-out;';
elemDiv.style.cssText += 'left: 3%; top: 3%;';


document.body.appendChild(elemDiv);

setTimeout(moveElement, 5000);
function moveElement() {
    const div = document.getElementById('Bonxo4FF');
    
    div.style.top = `${Math.random()* 98}%`;
    div.style.left = `${Math.random() * 98}%`;
    setTimeout(moveElement, 5000);
  }