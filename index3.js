//création dune constante qui aura comme valeur les ballons tirés
const text = document.getElementById("end");
const counterDisplay = document.querySelector("h3");
let counter = 0;
const btn = document.querySelector("#btn");
const goal = document.querySelector("#goal");
let temp = 0;

let intervalGame;
let gameOver = false;



function clickOnBallon(bubble) {
  if (!gameOver) {
    const audio = new Audio();
    audio.src = "m.mp3";
    audio.play();
    bubble.remove();


    counter++;
    counterDisplay.textContent = counter;

    if (counter >= 60) { // Le chiffre de ballon a atteindre doit être dans une constante au dessus
      gameOver = true;
      text.innerHTML = `
      <h3>Gagné</h3>
      <ul>
      <li><a href="./index4.html">Passez au niveau 4</a></li>
      <li><a href ="https://www.google.fr/">quitter</a><li>
      </ul>
     `;
    }

  }
}


//création de la fonction qui va jouer tout le reste du code
const bubbleMaker = () => {

  console.log('youss');
  //creation de la constante bubble avec la creatuon d un span
  const bubble = document.createElement("span");
  //creation de ala class bubble affilé au span (const bubble)
  bubble.classList.add("bubble");
  //le span apparait dansle body
  document.body.appendChild(bubble);
  //création dune constante qui permet d avoir une taille aleatoire entre 100 et 300
  let size = Math.round(Math.PI * (Math.random())) * 50 + 50 + "px";
  // injection du style a la const bubble
  bubble.style.height = size;
  bubble.style.width = size;
  // permet que la bulle apparait aléatoirement sur la page de bas en haut et de gauve a droite
  // le Math.random n'est pas dans une const car on veut que le top et la left ont des valeurs differentes
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  //bubble.textContent = size;
  bubble.style.color = "white";

  // action pour que la bulle va aléatoirement a gauche ou a droite
  // si le math.random est supperieur a 0.5 alor 1 sinon -1
  //const plusMinus = Math.random() > 0.5 ? 1 : -1;

  bubble.style.setProperty("--left", Math.random() * 100 + "%");


  bubble.addEventListener("click", function () {
    clickOnBallon(bubble);
  }, false)


  setTimeout(() => {
    bubble.remove();
  }, 8000);
};



function initGame() {

  decrement();

  setTimeout(gameLost, temp - 1000);

  intervalGame = setInterval(bubbleMaker, 500);
}



let decompte = function (i) {
  document.getElementById("decompte").innerHTML = i + "s";
}
let gameLost = function () { // renommer la fonction
  if (!gameOver) {
    text.innerHTML = `
    <h3>Game Over</h3>
    <p>Rejouer</p>
    <ul>
    <li><a href="./index.html">oui</a></li>
    <li><a href ="https://www.google.fr/">Non</a><li>
    </ul>
   `

    clearInterval(intervalGame);
    gameOver = true;
  }
}


let decrement = function () {
  for (let i = 70; i > -1; i--) {
    setTimeout((function (s) {
      return function () {
        decompte(s);
      }
    })(i), temp);

    temp += 1000;
  }

}
// if( confirm("voulez vous recommencer?")){ window.open("./index1.html");
//  window.close()

// }
// else {
// alert("a bientot")
// window.open("https://www.google.fr/")
// window.close()

//  }

setTimeout(() => {
  bubble.remove();
}, 62000);
