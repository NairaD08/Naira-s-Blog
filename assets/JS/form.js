const username = document.getElementById("username");
const title = document.getElementById("title");
const content = document.getElementById("content");
const submit = document.getElementById("submit");


submit.addEventListener("click", () =>{
    console.log("clicked")
let userInput = {
    username:username.value.trim(), 
    title:title.value.trim(),
    content:content.value.trim(),
} ;
if (userInput.username === "" || userInput.title === "" || userInput.content === "") {
    alert("Please complete the form.");
} else {
    let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    blogPosts.push(userInput);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    window.location.href = "./blog.html";
}
});  

//The condition to check if the form fields are empty should be inside
// the event listener function, not outside of it. This way, it will be
// checked when the submit button is clicked.


//  writeLocalStorage(userInput) 




