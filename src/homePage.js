function homePage(){
function h1() {
  let element = document.createElement("h1");
  element.append("Houston's Pizza");
  return element;
 }
 function hero() {
  const element = document.createElement('div');
  element.setAttribute('id',"hero");
  return element;
 }
 function paragraph1() {
  let element = document.createElement("p");
  element.append("We serve the best Za in town!!")
  return element;
 }
 document.body.style.backgroundImage = "url('pizza.jpg')";
 document.querySelector('#content').appendChild(hero());
 document.querySelector('#hero').appendChild(h1());
 document.querySelector('#hero').appendChild(paragraph1());
}
  export { homePage };