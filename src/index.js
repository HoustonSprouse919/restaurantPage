import { homePage } from "./homePage"
import { menuPage} from './menuPage';
import { contactPage} from './contactPage';
import Icon from './icon.png';
(function navBar() {
    const navArea = document.createElement('div');
    navArea.setAttribute('id',"navArea");

    const element = document.createElement('div');
    element.setAttribute('id',"logoDiv");
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.setAttribute('id',"logo");
    element.appendChild(myIcon);

    let footer = document.createElement("FOOTER");
    var p = document.createElement("P");
      var txt = document.createTextNode("Houston's Pizza - Copyright ©, 2022");
      p.appendChild(txt);
      footer.appendChild(p);

(function buttons(){
    const buttonArea = document.createElement('div');
    buttonArea.setAttribute('id',"buttonArea");

    let button1 = document.createElement("button");
    button1.append("Home");
    button1.addEventListener("click", clearContent);
    button1.addEventListener("click", homePage);

    let button2 = document.createElement("button");
    button2.append("Menu");
    button2.addEventListener("click", clearContent);
    button2.addEventListener("click", menuPage);

    let button3 = document.createElement("button");
    button3.append("Contact");
    button3.addEventListener("click", clearContent);
    button3.addEventListener("click", contactPage);


    function clearContent(){
        const myNode = document.getElementById("content");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }
    document.querySelector('#tabs').appendChild(navArea);
    document.querySelector('#navArea').appendChild(element);
    document.querySelector('#navArea').appendChild(buttonArea);
    document.querySelector('#buttonArea').appendChild(button1);
    document.querySelector('#buttonArea').appendChild(button2);
    document.querySelector('#buttonArea').appendChild(button3);
    document.querySelector('#tabs').appendChild(footer);
})();
   })();
   homePage();


