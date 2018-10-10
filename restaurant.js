let getStarters = document.getElementById("starters")
let getEntrees = document.getElementById("entrees")
let getDesserts = document.getElementById("desserts")

let menu = document.getElementById("menu")
let starter1 = `<li>${dishes[0].title}</li>`
menu.insertAdjacentHTML('beforeend',starter1)


let disheslength = dishes.length
console.log(disheslength)



for (let i = 0; i < disheslength; i++ ) {
  menu.insertAdjacentHTML('beforeend',menuItemTemplate(i)) ;
}

function menuItemTemplate(i) {return `
<li><h2> ${dishes[i].title} </h2> </li>
<p>${dishes[i].description}</p>
<h4>${dishes[i].price}</h4>
<img src="${dishes[i].imageURL}" alt="">
`

}
// console.log(dishes[0].title);
// console.log(dishes[0].description);
// console.log(dishes[0].price);
// console.log(dishes[0].imageURL);
