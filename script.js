var currentRoom = "start";

function changeRoom(direction) {
    if(rooms[currentRoom].directions[direction] !== undefined) {
        currentRoom = rooms[currentRoom].directions[direction];
        $('#game-text').append('<p>' + rooms[currentRoom].description + '</p>');
    } else {
        $('#game-text').append('<p>You cannot go that way!</p>');
    }
}

function playerInput(input) {
    var command = input.split(' ')[0];
    switch (command) {
        case "hill":
            changeRoom("hill");
            break;
        case "deer": 
            changeRoom("deer");
            break;
        
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