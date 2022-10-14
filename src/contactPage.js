function contactPage(){
  document.querySelector('#tabs').style.backgroundColor = "black";
  function h1() {
    let element = document.createElement("h1");
    element.append("Contact Us");
    return element;
   }
   function contactHero() {
    const element = document.createElement('div');
    element.setAttribute('id',"contactHero");
    return element;
   }
   function contactDiv() {
    const element = document.createElement('div');
    element.setAttribute('id',"contactDiv");
    return element;
   }
   function address() {
    let div = document.createElement("div");
    div.setAttribute('id',"address");
    return div;
   }
   function image1() {
    let element = document.createElement("IMG");
    element.setAttribute('class',"contactImage");
    element.setAttribute("src", "address.jpg");
    return element;
   }
   function heading1() {
    let element = document.createElement("h1");
    element.append("Locations");
    return element;
   }
   function text1() {
    let element = document.createElement("p");
    element.append("We currently have a single location at")
    element.appendChild(document.createElement('br'));
    element.append("284 down town drive!!")
    return element;
   }


   function phone() {
    let div = document.createElement("div");
    div.setAttribute('id',"phone");
    return div;
   }
   function image2() {
    let element = document.createElement("IMG");
    element.setAttribute('class',"contactImage");
    element.setAttribute("src", "phone.jpg");
    return element;
   }
   function heading2() {
    let element = document.createElement("h1");
    element.append("Give us a call!");
    return element;
   }
   function text2() {
    let element = document.createElement("p");
    element.append("Our phone number is")
    element.appendChild(document.createElement('br'));
    element.append("999-999-9999")
    return element;
   }



   function email() {
    let div = document.createElement("div");
    div.setAttribute('id',"email");
    return div;
   }
   function image3() {
    let element = document.createElement("IMG");
    element.setAttribute('class',"contactImage");
    element.setAttribute("src", "email.jpg");
    return element;
   }
   function heading3() {
    let element = document.createElement("h1");
    element.append("Email us");
    return element;
   }
   function text3() {
    let element = document.createElement("p");
    element.append("Our business email is")
    element.appendChild(document.createElement('br'));
    element.append("giveUsMoney@yahoo.com")
    return element;
   }




   document.body.style.backgroundImage = "none";


   document.querySelector('#content').appendChild(contactHero());
   document.querySelector('#contactHero').appendChild(h1());

   document.querySelector('#content').appendChild(contactDiv());

   document.querySelector('#contactDiv').appendChild(address());
   document.querySelector('#contactDiv').appendChild(phone());
   document.querySelector('#contactDiv').appendChild(email());


   document.querySelector('#address').appendChild(image1());
   document.querySelector('#phone').appendChild(image2());
   document.querySelector('#email').appendChild(image3());

   document.querySelector('#address').appendChild(heading1());
   document.querySelector('#phone').appendChild(heading2());
   document.querySelector('#email').appendChild(heading3());


   document.querySelector('#address').appendChild(text1());
   document.querySelector('#phone').appendChild(text2());
   document.querySelector('#email').appendChild(text3());

  }


      export { contactPage };