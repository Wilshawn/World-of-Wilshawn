$(document).ready(function(){
    $('#nav-toggle').click(function(){
        $('#nav-items').fadeToggle("slow");
    });
});


document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
});