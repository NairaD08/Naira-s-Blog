let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode =() => {
    console.log("running the darkmode function")
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    console.log("light mode function")
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () =>{
    console.log("clicked")
    darkmode=localStorage.getItem('darkmode')
    console.log(darkmode)
    if(darkmode !== "active") {
        console.log("Darkmode is turned on")
        enableDarkmode()
    } else { disableDarkmode()
        console.log("light mode activated")
    } 
})

function readLocalStorage() {
let blogPosts = localStorage.getItem("blogPosts");
if (blogPosts) {
    return JSON.parse(blogPosts)
}   return [];
}


 //   return []; // empty arrey retun


function writeLocalStorage(userInput) {
let blogPosts = readLocalStorage()  
blogPosts.push(userInput)  
localStorage.setItem('blogPosts', JSON.stringify(blogPosts))
}