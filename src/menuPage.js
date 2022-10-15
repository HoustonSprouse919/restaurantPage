
function menuPage(){
  let menuItems = [];
function menuItem(header, image, text){ //constructor for new book objects
  this.header = header
  this.image = image
  this.text = text
  menuItems.push(this)
}
new menuItem("cheese pizza", "cheesePizza.jpg", "Our signature cheese pizza");
new menuItem("peperoni pizza", "peperoni.jpg", "A classic za for the whole family");
new menuItem("Meat Lovers pizza", "meatLovers.jpg", "WE HAVE THE ASSORTED QUANTITY OF MEATS");
new menuItem("Chicago style pizza", "chicagoStyle.jpg", "Pizza or not that thing be tasty");
new menuItem("Hawaiian Pizza", "hawaiianPizza.jpg", "ITS NOT WEIRD");
function contactHero() {
  const element = document.createElement('div');
  element.setAttribute('id',"menuHero");
  return element;
 }
 function h1() {
  let element = document.createElement("h1");
  element.append("OUR MENU");
  return element;
 }
 document.querySelector('#content').appendChild(contactHero());
 document.querySelector('#menuHero').appendChild(h1());

 const element = document.createElement('div');
 element.setAttribute('id',"menuArea");
 document.querySelector('#content').appendChild(element);

 for(let i =0; i<menuItems.length;i++){
      let divId = "divId" + i;
      function createDiv() {
        const element = document.createElement('div');
        element.setAttribute('id',divId);
         element.setAttribute('class',"menuArea");
        return element;
       }
       document.querySelector('#menuArea').appendChild(createDiv());

       function createHeader() {
        let element = document.createElement("h1");
        element.append(menuItems[i].header);
        return element;
       }
       document.querySelector("#"+divId).appendChild(createHeader());
       function createImage() {
        let element = document.createElement("IMG");
        element.setAttribute('class',"menuImage");
        element.setAttribute("src", menuItems[i].image);
        return element;
       }
       document.querySelector("#"+divId).appendChild(createImage());
       function createDescription() {
        let element = document.createElement("p");
        element.append(menuItems[i].text)
        return element;
       }
       document.querySelector("#"+divId).appendChild(createDescription());
    }

    document.querySelector('#tabs').style.backgroundColor = "black";
  
  
     document.body.style.backgroundImage = "none";
    }
      export { menuPage };