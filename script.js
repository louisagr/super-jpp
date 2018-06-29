// const randomColor = () => '#' + Math.random().toString(16).substr(-6)
// const changeColor = () => document.body.style.backgroundColor = randomColor()

// setInterval(() => {
//   changeColor()
// }, 1000)

// document.onreadystatechange = () => {
//   if (document.readyState === 'complete') {
//     changeColor()
//   }
// }
//   Phrase type =
//   A la découverte de [sujet] + à l'ancienne de + [ville]
document.getElementById("btn").onclick = function() {
    var sujet = [
        "des brioches",
        "du pain à l'ancienne",
        "des bretzels",
        "du flan aux pruneaux",
        "du fion",
        "des pains au chocolat",
        "des mogettes",
        "du préfou",
        "de la trouspinette",
        "du pinard"
    ];
    var ville1 = [
        "Trifouillis",
        "Hénin",
        "Pelouailles",
        "Pouzauges",
        "Dié",
        "Saint-Gilbert",
        "Vieuxmont",
        "Garches",
        "Pougny",
        "Gesnay"
    ];
    var ville2 = [
        "La-Forêt",
        "Les-Trois-Eglises",
        "Le-Vieux-Pont",
        "Sur-Yvette",
        "La-Nouvelle",
        "Les-Oies",
        "Le-Bourg",
        "Du-Bon-Accueil",
        "La-Douille",
        "Saint-Firmin"
    ];
    var sujetAle = sujet[Math.floor(Math.random() * sujet.length)];
    var ville1Ale = ville1[Math.floor(Math.random() * ville1.length)];
    var ville2Ale = ville2[Math.floor(Math.random() * ville2.length)];
    var jpp = "À la découverte " + sujetAle + " de " + ville1Ale + "-" + ville2Ale + " !";
    var generer = document.querySelector("#generateur");
    generer.innerHTML = jpp;
  }



