var currentRoom = "start";
var commands = ['go', 'pickup', 'look', 'talk'];

function changeRoom(direction) {
    if(rooms[currentRoom].directions[direction] !== undefined) {
        currentRoom = rooms[currentRoom].directions[direction];
        $('#game-text').append('<p>' + rooms[currentRoom].description + '</p>');
    } else {
        $('#game-text').append('<p>You cannot go that way!</p>');
    }
}

function showHelp() {
    $('#game-text').append('<p>Here are the possible commands: </p>');
    $('#game-text').append('<ul>');
        for (var i = 0; i < commands.length; i++) {
            $('#game-text').append('<li>' + + '</li>');
        }
    $('#game-text').append('</ul>');
}

function playerInput(input) {
    var command = input.split(' ')[0];
    switch (command) {
        case "go":
            var direction = input.split(' ')[1];
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
            playerInput(value)
        }
    })
})