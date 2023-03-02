const signInForm = document.querySelector("#login-form");
const signInInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onSignInSubmit(event){
    event.preventDefault();
    signInForm.classList.add(HIDDEN_CLASSNAME);
    const username = signInInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null)
{
    signInForm.classList.remove(HIDDEN_CLASSNAME);
    signInForm.addEventListener("submit", onSignInSubmit); 
}
else{
    paintGreetings(savedUsername);
}