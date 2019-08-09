let titleInput = document.getElementById("title_input");
let mainTitle = document.getElementById("main_title");


function changeMain(){
    mainTitle.innerText = "Welcome to BuskFind, " + title_input.value
    // alert(title_input.value);
}
titleInput.addEventListener("keyup", changeMain);
let noun = document.getElementById("noun");
let verb = document.getElementById("verb");
let adjective = document.getElementById("adjective");

let button = document.getElementById("submit_button")
button.addEventListener("click", buttonPress);

function buttonPress(event){
    event.preventDefault
    if(titleInput.value == "" || noun.value == "" || verb.value == "" || adjective.value == ""){
        alert("You need to complete the sign up sheet!!")
    }
    else{
        alert("Welcome to BuskFind, " + titleInput.value + ". Your Password is " + noun.value + ".")
    }
}

