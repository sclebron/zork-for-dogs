var rooms = {
    "start": {
        "description": "You are on a snow covered field. You see a hill up ahead and you see a group of deer to your right."
    },

}


$(document).ready(function(){
    $('#game-text').append(rooms.start.description)
    $(document).keypress(function(key){
        //if statement that checks if user presses Enter and is in user-input box
        if (key.which === 13 && $('#user-input').is(':focus')) {
            var value = $('#user-input').val();
        }
    })
})