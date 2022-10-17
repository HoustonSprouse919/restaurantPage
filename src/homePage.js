import { menuPage} from './menuPage';
function homePage(){
function h1() {
  let element = document.createElement("h1");
  element.append("Houston's");
  element.appendChild(document.createElement('br'));
  element.append("Pizza");
  return element;
 }
 function hero() {
  const element = document.createElement('div');
  element.setAttribute('id',"hero");
  return element;
 }
 function textDiv() {
  const element = document.createElement('div');
  element.setAttribute('id',"textDiv");
  return element;
 }
 function paragraph1() {
  let element = document.createElement("p");
  element.append("We serve the best Za in town!")
  return element;
 }
 function button(){
 let navButton = document.createElement("button");
 navButton.setAttribute('id',"navButton");
    navButton.append("Check out our menu :)");
    navButton.addEventListener("click", clearContent);
    navButton.addEventListener("click", menuPage);

    return navButton;
 }
 function clearContent(){
  const myNode = document.getElementById("content");
  while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
  }
}
 document.body.style.backgroundImage = "url('pizza.jpg')";
 document.querySelector('#content').appendChild(hero());
 document.querySelector('#hero').appendChild(textDiv());
 document.querySelector('#textDiv').appendChild(h1());
 document.querySelector('#textDiv').appendChild(paragraph1());
 document.querySelector('#textDiv').appendChild(button());
}
  export { homePage };