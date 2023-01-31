var currentRoom = "start";

function changeRoom(direction) {
    if(rooms[currentRoom].directions[direction] !== undefined) {
        currentRoom = rooms[currentRoom].directions[direction];
        $('#game-text').append('<p>' + )
    }
}

$(document).ready(function(){
    $('#game-text').append("<p>" + rooms.start.description + "</p>")
    $(document).keypress(function(key){
        //if statement that checks if user presses Enter and is in user-input box
        if (key.which === 13 && $('#user-input').is(':focus')) {
            var value = $('#user-input').val().toLowerCase();
             switch(value) {
                case "hill":
                    changeRoom("hill");
                    break;
                case "deer":
                    changeRoom("deer");
                    break
                default: 
                    alert("Invalid move");
             }
        }
    })
})