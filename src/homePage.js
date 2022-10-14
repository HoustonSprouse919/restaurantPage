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
  element.append("Welcome to Houston's pizza. We serve the best Za in town!!")
  return element;
 }

 document.querySelector('#content').appendChild(hero());
 document.querySelector('#hero').appendChild(h1());
 document.querySelector('#hero').appendChild(paragraph1());
}
  export { homePage };