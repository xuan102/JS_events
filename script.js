//fonctionnalite 1 cliquer "footer" 
var footer = document.querySelector('footer');
let counter = 0

function changeTexte(){
    counter += 1
    console.log(`click n ${counter}`);    
}

footer.addEventListener('click', changeTexte);

//fonctionnalite 2 cliquer l'icone de 3 traits dans le navbar pour faire paraitre/disparaitre la liste
let navbar = document.getElementsByTagName("button")[0]; 

    navbar.addEventListener("click", function() {
    document.getElementById('navbarHeader').classList.toggle("collapse");
      });


//fonctionnalite 3 changer couleur en cliquant "edit" sur la premiere carde
let myEdit1 = document.getElementsByTagName("button")[2];
let myText1 = document.getElementsByClassName("card-text")[0];

myEdit1.addEventListener("click", function()
{
    myText1.style.color = "red";
});

//fonctionnalite 4 changer couleur en cliquant "edit" sur la deuxieme carde
let myEdit2 = document.getElementsByTagName("button")[4];
let myText2 = document.getElementsByClassName("card-text")[1];

myEdit2.addEventListener("click", function(){
    if (myText2.style.color === "") {
        myText2.style.color = "green";
    } else {
        myText2.style.color = "";
    }
}
);

//fonctionnalite 5 double click pour faire disaparaitre/apparaitre le boostrap dans le navbar
let myNavbar = document.getElementsByTagName("header")[0];
let bootstrap = document.getElementsByTagName("link")[0];

myNavbar.addEventListener('dblclick', function(){
    if (bootstrap.getAttribute('href') !== null){
        bootstrap.removeAttribute('href');
    } else {
        bootstrap.setAttribute('href', "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
    
    }
});

/*fonctionnalite 6 reduit les images
let images = document.querySelectorAll(".img");
let view = document.querySelectorAll(".btn btn-sm btn-success");
let edit = document.querySelectorAll(".btn btn-sm btn-outline-secondary");

for i */




