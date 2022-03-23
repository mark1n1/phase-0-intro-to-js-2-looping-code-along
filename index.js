// Code your solutions in this file
function writeCards(names, eventName){
    let messages = [];
    for (let index = 0; index < names.length; index++) {
        messages[index] = 'Thank you, ' + names[index] + ', for the wonderful ' + eventName + ' gift!';
    }

    return messages;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}