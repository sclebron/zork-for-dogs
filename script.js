var currentRoom = 'start';
var commands = ['go', 'pickup', 'look'];

function changeRoom(direction) {
    if(rooms[currentRoom].directions[direction] !== undefined) {
        currentRoom = rooms[currentRoom].directions[direction];
        $('#game-text').append('<p>' + rooms[currentRoom].description + '</p>');
    } else {
        $('#game-text').append('<p>You cannot go that way!</p>');
    }
}
/*how changeRoom currently works - have to type 'go' and then second word must be word to the left of colon in directions object of the room which will result in moving to the room which is identified by the word to the right of the colon. maybe make word to left and right the same and make it so that the word just has to be in the userinput not necessarily the second word and the person doesn't have to say 'go'. essentially - as long as the word to the left of the colon is identified in userinput then the user will move to the room identified by the word to the right of the colon. if (user input.includes the key word then change direction)
if (input.includes(keyword) ) */

function showHelp() {
    $('#game-text').append('<p>Here is how to play: </p>');
    $('#game-text').append('<p><ul>');
        for (var i = 0; i < commands.length; i++) {
            $('#game-text').append('<li>' + commands[i] + '</li>');
        }
    $('#game-text').append('</ul></p>');
}

function playerInput(input) {
    var command = input.split(' ')[0];
    switch (command) {
        case "go":
            // var direction = input.split(' ')[1];
            var direction = 
            changeRoom(direction);
            break;
        case "help":
            showHelp();
            break;
        default: 
            $('#game-text').append('<p>Invalid command</p>');
    }
}

$(document).ready(function(){
    $('#game-text').append("<p>" + rooms.start.description + "</p>")
    $(document).keypress(function(key){
        //if statement that checks if user presses Enter and is in user-input box
        if (key.which === 13 && $('#user-input').is(':focus')) {
            var value = $('#user-input').val().toLowerCase();
            $('#user-input').val('');
            playerInput(value)
        }
    })
})

// function showInventory() {
//     if (inventory.length === 0) {
//         $('#game-text').append('<p>Your inventory is empty</p>');
//         return;
//     }
//     $('#game-text').append('<p>Here is your inventory: </p>');
//     $('#game-text').append('<p><ul>');
//         for (var i = 0; i < inventory.length; i++) {
//             $('#game-text').append('<li>' + inventory[i] + '</li>');
//         }
//     $('#game-text').append('</ul></p>');
// }
