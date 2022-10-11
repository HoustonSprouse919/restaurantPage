function component() {
    const element = document.createElement('div');
    element.innerHTML = "HELLO THERE";
    return element;
  }
  
  document.body.appendChild(component());

  export { component };