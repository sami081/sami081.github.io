//création dune constante qui aura comme valeur les ballons tirés
const text = document.getElementById("end");
const counterDisplay = document.querySelector("h3");
let counter = 0;
const btn = document.querySelector("#btn");
const goal = document.querySelector("#goal");
let decompte = function(i){
  document.getElementById("decompte").innerHTML = i + "s";
}
let affichage = function(){
  text.innerHTML =`
  <h3>Game Over</h3>
  <p>Rejouer</p>
  <ul>
  <li><a href="./index.html">oui</a></li>
  <li><a href ="https://www.google.fr/">Non</a><li>
  </ul>
 `
bubble.remove()
}
let temp = 0;
let decrement = function(){
  for (let i = 60; i > -1; i--){
    setTimeout((function(s){
      return  function(){
        decompte(s);
      }
    })(i), temp);

    temp += 1000 ;
  }
}
decrement();

setTimeout(affichage,temp-1000);

//création de la fonction qui va jouer tout le reste du code
const bubbleMaker = () =>{
//creation de la constante bubble avec la creatuon d un span
const bubble = document.createElement("span");
//creation de ala class bubble affilé au span (const bubble)
bubble.classList.add("bubble");
//le span apparait dansle body
document.body.appendChild(bubble);
//création dune constante qui permet d avoir une taille aleatoire entre 100 et 300
const size = Math.random() * 200 + 100 + "px";
// injection du style a la const bubble
bubble.style.height = size;
bubble.style.width = size;
// permet que la bulle apparait aléatoirement sur la page de bas en haut et de gauve a droite
// le Math.random n'est pas dans une const car on veut que le top et la left ont des valeurs differentes
bubble.style.top = Math.random() *100 + 50 + "%";
bubble.style.left = Math.random() * 100 + "%";

// action pour que la bulle va aléatoirement a gauche ou a droite
// si le math.random est supperieur a 0.5 alor 1 sinon -1
//const plusMinus = Math.random() > 0.5 ? 1 : -1;

bubble.style.setProperty("--left", Math.random() * 100  + "%");

bubble.addEventListener("click", () =>{
  const audio = new Audio();
  audio.src = "m.mp3";
  audio.play();
  counter++;
  counterDisplay.textContent = counter;
  if (counter>=50) {
    text.innerHTML =`
    <h3>Gagné</h3>
  
    <ul>
    <li><a href="./index3.html">Passez au niveau 3</a></li>
    <li><a href ="https://www.google.fr/">quitter</a><li>
    </ul>
   `;
  
  }
 
  
  
  bubble.remove();
})
setTimeout(()=>{
  bubble.remove();
}, 8000);
};

setInterval(bubbleMaker, 500);
setTimeout(()=>{
  window.close()
},70000)