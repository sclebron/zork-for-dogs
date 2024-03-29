var currentRoom = 'start';
var commands = ['go', 'pickup', 'look'];
var help = "";

function showHelp() {
    $('#game-text').append('<p>Here is how to play: </p>');
    $('#game-text').append(help);
}

function playerInput(input) {
    let direction1 = rooms[currentRoom].directions.direction1;
    let direction2 = rooms[currentRoom].directions.direction2;

    if (input === "help") {
        showHelp();
    } else if (input.includes(direction1) == false && input.includes(direction2) == false) {
        $('#game-text').append('<p>You cannot go that way!</p>');
        console.log(currentRoom)
        console.log(direction2)
    } else if (input.includes(direction1) == true) {
        currentRoom = rooms[currentRoom].directions.direction1;
        $('#game-text').append('<p>' + rooms[currentRoom].description + '</p>');
    } else if (input.includes(direction2) == true) {
        currentRoom = rooms[currentRoom].directions.direction2;
        $('#game-text').append('<p>' + rooms[currentRoom].description + '</p>');
    } else {
        $('#game-text').append('<p>Invalid command</p>');
    }
}

function score(input) {
    let direction1 = rooms[currentRoom].directions.direction1;
    let direction2 = rooms[currentRoom].directions.direction2;
    let point1 = rooms[currentRoom].points.direction1;
    let point2 = rooms[currentRoom].points.direction2;
    // console.log(Object.key(rooms[currentRoom].directions))
    // console.log(Object.value(rooms[currentRoom].points))
    let score = 0;

    if (input.includes(direction1) === true && point1 === 1) {
        score += 1;
    } else if (input.includes(direction2) === true && point2 === 1) {
        score += 1;
    }

    //score is being logged but looks like the score is incorrect -> score stays at 0 even when it should be increasing

    console.log(score)
}

$(document).ready(function(){
    $('#game-text').append("<p>" + rooms.start.description + "</p>")
    $(document).keypress(function(key){
        //if statement that checks if user presses Enter and is in user-input box
        if (key.which === 13 && $('#user-input').is(':focus')) {
            var value = $('#user-input').val().toLowerCase();
            $('#user-input').val('');
            playerInput(value)
            score(value)
        }
    })
})

