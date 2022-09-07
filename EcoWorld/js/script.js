const navBar = document.querySelectorAll(".nav-bar")[0];
const logo = document.querySelectorAll(".logo")[0];

window.addEventListener("scroll", toogleNavBar, false)

function toogleNavBar(){
    if (window.pageYOffset >= logo.offsetHeight && navBar.classList.contains("abs-pos")){
        navBar.classList.remove("abs-pos");
        navBar.classList.add("fix-pos");
    }
    else if (window.pageYOffset < logo.offsetHeight && navBar.classList.contains("fix-pos")){
        navBar.classList.remove("fix-pos");
        navBar.classList.add("abs-pos");
    }
}

//http://blogger.com

const extLink = document.querySelectorAll(".ext-link")[0];
extLink.addEventListener("click", openLink, false);

function openLink(){
    window.open("http://blogger.com", "_blank");
}


// const intLink = document.querySelectorAll(".int-link")[2];
// const transparenciaSection = document.querySelector("#transparencia");
// intLink.addEventListener("click", scrollToSection, false);

// function scrollToSection(){
//     //window.scrollTo(0, transparenciaSection.offsetTop - navBar.offsetHeight);
//     window.scrollTo({
//         top: transparenciaSection.offsetTop - navBar.offsetHeight,
//         left: 0,
//         behavior: 'smooth'
//     })
// }

const intLinks = document.querySelectorAll(".int-link");
const SectionArr = document.querySelectorAll("main section");

intLinks.forEach(function(cur, index){
    cur.addEventListener("click", function() {
        window.scrollTo({
            top: SectionArr[index].offsetTop - navBar.offsetHeight,
            left: 0,
            behavior: 'smooth'
        })
    }, false)
})