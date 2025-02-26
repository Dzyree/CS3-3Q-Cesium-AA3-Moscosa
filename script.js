function verifyMessage(){
    let message = prompt('Verify your message here: ');
    let result = document.getElementById("result");

    // Case-sensitive checking (convert message to uppercase)
    let upperMessage = message.toUpperCase();
    let containsFR = upperMessage.indexOf("FR") !== -1;
    let containsAI = upperMessage.indexOf("AI") !== -1;
    let containsAiOraI = message.indexOf("Ai") !== -1 || message.indexOf("aI") !== -1;

    if(containsFR && containsAI){
        result.innerText = `The message "${message}" is legit!`;
    } else if(containsFR){
        result.innerText = `The message "${message}" is legit!`;
    } else if(containsAI){
        result.innerText = `The message "${message}" is tampered with.`;
    } else if (containsAI){
        result.innerText = `The message "${message}" is tampered with.`;
    } else{
        result.innerText = `The message "${message}" is not yet encoded.`;
    }


}
