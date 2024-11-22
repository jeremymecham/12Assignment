// Sets tracker to toggle different styles
let buttonTracker = true;

//initial function to contain all of the jquery
$(document).ready(function() {
    //buttonclick function that determines what happens when button is clicked
    function buttonClick() {
        $("#buttonClick").click(function() {
            // If the tracker is true, it will extend the container, blur the image, display the show less button, and set tracker to false
            if(buttonTracker) {
                $(".containerStyles").css("height", "860px");
                $("#image").css("filter", "blur(5px)");
                $(this).text("Show Less")
                buttonTracker = false;
            }
            // If the tracker is false, it will retract the container, unblur the image, display the show more button, and set tracker to true
            else if(!buttonTracker) {
                $(".containerStyles").css("height", "700px");
                $("#image").css("filter", "blur(0px)");
                $(this).text("Show More")
                buttonTracker = true;
            }
        });
    }
    // Makes the button click function active
    buttonClick();
});


