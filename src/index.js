(function buttons() {
    let button1 = document.createElement("button");
    button1.append("Home");
    button1.addEventListener("click", changePage);
    document.querySelector('#tabs').appendChild(button1);

    let button2 = document.createElement("button");
    button2.append("Menu");
    button2.addEventListener("click", changePage);
    document.querySelector('#tabs').appendChild(button2);

    let button3 = document.createElement("button");
    button3.append("Contact");
    button3.addEventListener("click", changePage);
    document.querySelector('#tabs').appendChild(button3);

   })();
   function changePage(){
    homePage();
}
import { homePage } from "./homePage"

