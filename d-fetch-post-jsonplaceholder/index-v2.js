/*  Exmplet använder https://jsonplaceholder.typicode.com/ 
   
    Uddatering v. 2.0
    Ett tillagt exempel: en JSON-array med två objekt
*/

// först: att hämta (GET) en post, och visa med console.log()

const urlOnePost = "https://jsonplaceholder.typicode.com/posts/1";
const urlAllPosts = "https://jsonplaceholder.typicode.com/posts";

let data1 = fetch(urlOnePost)
  .then((response) => response.json()) // här blir Json-stringen till objekt
  .then((json) => console.log(json));


// därefter: att hämta (GET) alla poster, och visa med console.log()
let data2 = fetch(urlAllPosts)
  .then((response) => response.json())
  .then((json) => console.log(json));


// igen att hämta (GET) en post, och visa med console.log() men nu med hjälp av loop visade som enskilda objekt
let data3 = fetch(urlAllPosts)
  .then((response) => response.json())
  .then((json) => {
    json.forEach(element => {
      console.log(element)
    });
  });



// att skicka en liten post som sparas (fejksparas) på servern
fetch(urlAllPosts, {
  method: "POST",
  body: JSON.stringify({
    title: "Testing to post a title !!!",
    body: "Testing to post a message",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// att uppdatera en befintlig post som uppdateras (fejkuppdateras) på servern  
fetch(urlOnePost, {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "Trying to update title",
    body: "Trying to update the message",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


// att uppdatera ett enskilt värde på en befintlig post  
fetch(urlOnePost, {
  method: "PATCH",
  body: JSON.stringify({
    title: "A single patch",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


// Till sist: ett litet mer realistiskt exempel med en array innehållande två objekt, samt felhantering med .catch()
const cars = [ //en arraay med två objekt
  {
    model: "Peugeot",
    color: "blue",
    registration: 2012,
    checkups: [2015, 2017]
  },
  {
    model: "Citroën",
    color: "white",
    registration: 1999,
    checkups: [2003, 2005, 2007, 2009, 2011, 2013]
  }];


fetch(urlAllPosts, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(cars) // här blir arrayen till en JSON-string
})
  .then(response => response.text())
  .then(result => { console.log(result); })
  .catch(err => { console.error(err.message); }); //här tas ett fel emot ifall det infräffar

