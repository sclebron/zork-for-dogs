var input = $('#user-input').val();

$(document).ready(function(){
    $(document).keypress(function(key){
        //if statement that checks if user presses Enter and is in user-input box
        if (key.which === 13 && $('#user-input').is(':focus')) {
            alert("hello");
        }
    })
})