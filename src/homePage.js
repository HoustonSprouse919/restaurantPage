function component() {
  const element = document.createElement('div');
  element.innerHTML = "TESTING";
  return element;
 }


 document.querySelector('#container').appendChild(component());

  export { component };