let contactParts = [];
function contacts(header, image, text){ //constructor for new book objects
  this.header = header
  this.image = image
  this.text = text
  addBookToContacts(this)
}
function addBookToContacts(contact){ //takes a book object and adds it to end of myLibrary array
  contactParts.push(contact)
}

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


    function populateContacts(){
      for(let i =0; i < contactParts.length; i++){
        let div = document.createElement("div");
        div.setAttribute('class',"contactSection");
    
        let header = document.createElement("h1");
        header.append("contactPage[i].header");
    
        let element = document.createElement("IMG");
        element.setAttribute('class',"contactImage");
        element.setAttribute("src", "contactPage[i].image");
    
        document.querySelector('#contactDiv').appendChild(div);
        document.querySelector('#contactSection').appendChild(header);
        document.querySelector('#contactSection').appendChild(element);
      }
    }
      export { menuPage };