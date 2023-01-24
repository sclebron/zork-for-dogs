var currentRoom = "start";

$(document).ready(function(){
    $('#game-text').append("<p>" + rooms.start.description + "</p>")
    $(document).keypress(function(key){
        //if statement that checks if user presses Enter and is in user-input box
        if (key.which === 13 && $('#user-input').is(':focus')) {
            var value = $('#user-input').val().toLowerCase();
             switch(value) {
                case "hill":
                    alert("You have gone to the hill");
                    break;
                default: 
                    alert("Invalid move");
             }
        }
    })
})