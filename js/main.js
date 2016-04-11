/*This plugin adds a tab that allows the user to scroll up when not at the top of the page.
It can be found on the bottom right hand corner of the screen.*/
$( function( ) {
  $.scrollUp();
} );

/*This jQuery code is used to change the color of the h2s to green when the mouse enters
the element and back to red when the mouse exits the element. This code is used on
all of the h2s found in the document.*/
$( document ).ready( function( ) {
    $( 'h2' )
        .mouseenter( function( ) {
            $( 'h2' ).css( 'color', '#16837e' );
        } )
        .mouseleave( function( ) {
            $( 'h2' ).css( 'color', '#df3326' );
        } );
} );
