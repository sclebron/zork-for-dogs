var rooms = {
    "start": {
        "description": "You are on a snow covered field. You see a hill up ahead and you see a group of deer to your right."
    },
    "hill": {
        "description": "You run to the top of the hill. You can roll around in the snow at the top of the hill or slide down the hill."
    },
    "deer": {
        "description": "You run over to the group of deer. One of the deer walks up to you. You can walk up to the deer or run past the deer to a cabin behind the deer."
    }
}

var currentRoom = "start";

$(document).ready(function(){
    $('#game-text').append("<p>" + rooms.start.description + "</p>")
    $(document).keypress(function(key){
        //if statement that checks if user presses Enter and is in user-input box
        if (key.which === 13 && $('#user-input').is(':focus')) {
            var value = $('#user-input').val();
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