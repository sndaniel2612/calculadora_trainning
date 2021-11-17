let displayOutput = document.getElementById("displayHud");

function display(num){
    displayOutput.value += num;
}

function Calculate(){
    try{
        displayOutput.value = eval(displayOutput.value)
    }
    catch(err){
        alert("Digite um valor valido !")
    } 
}

function Clear(){
    displayOutput.value = ""
}

function Del(){
    displayOutput.value = displayOutput.value.slice(0,-1)
}