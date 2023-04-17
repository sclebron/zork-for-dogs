var currentRoom = 'start';
var commands = ['go', 'pickup', 'look'];
var help = "";

const direction1 = rooms[currentRoom].directions.direction1;
const direction2 = rooms[currentRoom].directions.direction2;

// function changeRoom(direction) {
//     // if (user-input.includes(direction1) == true) {
//     //     let direction = direction1;
//     // } else if (user-input.includes(direction2) == true) {
//     //     let direction = direction2;
//     // }

//     if (user-input.includes(direction1) == true) {
//         currentRoom = rooms[currentRoom].directions.direction1;
//         $('#game-text').append('<p>' + rooms[currentRoom].description + '</p>');
//     } else if (user-input.includes(direction2) == true) {
//         currentRoom = rooms[currentRoom].directions.direction2;
//         $('#game-text').append('<p>' + rooms[currentRoom].description + '</p>');
//     } else {
//         $('#game-text').append('<p>You cannot go that way!</p>');
//     }

    // if(rooms[currentRoom].directions[direction] !== undefined) {
    //     currentRoom = rooms[currentRoom].directions[direction];
    //     //need to define direction or change how this function works, right now direction is undefined
    //     console.log(direction)
    //     $('#game-text').append('<p>' + rooms[currentRoom].description + '</p>');
    // } else {
    //     $('#game-text').append('<p>You cannot go that way!</p>');
    //     console.log(direction)
    // }
// }

function showHelp() {
    $('#game-text').append('<p>Here is how to play: </p>');
    $('#game-text').append(help);
}

function playerInput(input) {
    // if (input.includes(direction1) == true) {
    //     let direction = direction1;
    // } else if (input.includes(direction2) == true) {
    //     let direction = direction2;
    // }
    // let direction = rooms.directions;
    if (input === "help") {
        showHelp();
    // } else if (input.includes(direction1) == true || input.includes(direction2) == true) {
        // changeRoom();
    } else if (input.includes(direction1) == false && input.includes(direction2) == false) {
        $('#game-text').append('<p>Invalid command</p>');
    } else if (input.includes(direction1) == true) {
        currentRoom = rooms[currentRoom].directions.direction1;
        $('#game-text').append('<p>' + rooms[currentRoom].description + '</p>');
    } else if (input.includes(direction2) == true) {
        currentRoom = rooms[currentRoom].directions.direction2;
        $('#game-text').append('<p>' + rooms[currentRoom].description + '</p>');
    } else {
        $('#game-text').append('<p>You cannot go that way!</p>');
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

// function playerInput(input) {
//     var command = input.split(' ')[0];
//     switch (command) {
//         case "go":
//             // var direction = input.split(' ')[1];
//             var direction = rooms.directions;
//             changeRoom(direction);
//             break;
//         case "help":
//             showHelp();
//             break;
//         default: 
//             $('#game-text').append('<p>Invalid command</p>');
//     }
// }

