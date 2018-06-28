document.getElementById("btn").onclick = function() {
    var type = ["Un site ", "Une appli ", "Un projet ", "Une plateforme ", "Un Wordpress ", "Un Wix ", "Un portfolio ", "Un réseau social ", "Une to-do list ", "Un template ", "Un prestashop ", "Un tuto "];
    var adjectif = ["trop cool ", "super bien ", "sympa ", "responsive ", "pas trop naze ", "révolutionnaire ", "facile à faire ", "fait à l'arrache ", "à la main ", "en JS pur ", "assez osé ", "fait par Kenny "];
    var theme = ["sur les chats", "à la Facebook", "pour les développeurs", "pour les kids", "pour Philippe", "sur les poneys", "pour apprendre à coder", "pour se la péter", "pour les photos de ma Maman", "pour le CV d'un pote", "pour le site d'Arinfo", "à la LoSo"];
  
    var typeAle = type[Math.floor(Math.random() * 12)];
    var adjectifAle = adjectif[Math.floor(Math.random() * 12)];
    var themeAle = theme[Math.floor(Math.random() * 12)];
  
    var sujet = typeAle + adjectifAle + themeAle + " !";
    var generer = document.querySelector("#generateur");
    generer.innerHTML = sujet;
  }


//   Phrase type =
//   A la découverte de [sujet] + [ville]
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
]
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
]
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
]