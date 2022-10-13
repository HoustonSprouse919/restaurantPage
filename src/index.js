import { homePage } from "./homePage"
import { menuPage} from './menuPage';
import { contactPage} from './contactPage';
homePage();
(function navBar() {
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

    document.querySelector('#tabs').appendChild(button1);
    document.querySelector('#tabs').appendChild(button2);
    document.querySelector('#tabs').appendChild(button3);
   })();


