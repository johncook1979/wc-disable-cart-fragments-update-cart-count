/*
  *
  * Update cart count on user interaction
  *
  * Add file to your child theme directory
  *
*/


(function($) {
  // set a user interaction variable to 0. This is so it only fires once per page load
  let userInteraction = 0;

  // Detect user interaction with one of these actions
  $("body,html").one("touchstart touchmove scroll mousemove mousedown DOMMouseScroll mousewheel keyup", function(e){ 

    // if this is the first action and the userInteraction == 0 then fire the ajax call to get the cart count
    if(userInteraction == 0){ 
      // load cart content on user interaction
      $.ajax({
        type: 'GET',
        url: '/wp-content/themes/your-child-theme-name/cart-quantity.php',  // Make sure to set the directory to your child theme name

        dataType: 'json',
        timeout: 0,
        success: function(data) {
          if(data >= 1){
            $('#cart_count').text(data); // the name of the container where the cart count is visible
            $('#cart_count').addClass('visible'); // the name of the container where the cart count is visible. This will make the container visible if it is hidden because it is empty. If necessary you can change this to .show() instead od addClass('visible')
          }

        },
        error: function(xhr, type){
          console.log('Ajax error!')
        }
      });		
    }
    userInteraction++;
  });

  // update count on remove item and update cart
  $( document.body ).on( 'updated_cart_totals', function(event){	
    $.ajax({
      type: 'GET',
      url: '/wp-content/themes/your-child-theme-name/cart-quantity.php', // Make sure to set the directory to your child theme name

      dataType: 'json',
      timeout: 0,
      success: function(data) {
        if(data >= 1){
          $('#cart_count').text(data); // the name of the container where the cart count is visible
          $('#cart_count').addClass('visible'); // the name of the container where the cart count is visible
        }

      },
      error: function(xhr, type){
        console.log('Ajax error!')
      }
    });
  });
})( jQuery );
