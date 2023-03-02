const signInInput = document.querySelector("#login-form input");
const signInButton = document.querySelector("#login-form button");

function handleSignInBtnClick(){
    console.log(signInInput.value);
 
}
signInButton.addEventListener("click",handleSignInBtnClick);