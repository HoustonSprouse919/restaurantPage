function menuPage(){
    function h1() {
      let element = document.createElement("h1");
      element.append("Houston's Menu");
      return element;
     }
     function image() {
      let element = document.createElement("IMG");
      element.setAttribute("src", "https://i.pinimg.com/736x/9d/25/6b/9d256bf90bf80e38d3a8be2efc7444a9.jpg");
      return element;
     }
     function paragraph1() {
      let element = document.createElement("p");
      element.append("Welcome to Houston's pizza. We serve the best Za in town!!")
      return element;
     }
    
     document.querySelector('#content').appendChild(h1());
     document.querySelector('#content').appendChild(image());
     document.querySelector('#content').appendChild(paragraph1());
    }
      export { menuPage };