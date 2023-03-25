(function($) {
  // click cart icon to show cart contents. Remember to change the #mnu-item-name to your class or id name
  $(document).on("click", "#menu-item-name", function(e){ // edit the #menu-item-name to the id or class name used
    e.preventDefault();
    
    // get the value of items in the cart. If the cart is empty it can be used to prevent an unnecessary call to the cart contents file
    let cartCount = parseInt($(this).find('#cart_count').text()) || 0; // If NULL or NaN return 0
    
    // check if the cart count is greater than 1 and if so display the cart and get the contents
    if(cartCount >= 1){
      $('#cart_container').toggleClass('visible');
      
      // ajax call to cart-contents file
      $.ajax({
        type: 'GET',
        url: '/wp-content/themes/your-child-theme-name/cart-contents.php',
        dataType: 'html',
        timeout: 0,
        success: function(data) {
          $('#cart_container').html(data);
          $('#cart-links').remove();
        },
        error: function(xhr, type){
          console.log('Ajax error!')
        }
      });
    }

  });

  // send user to cart on click. This is needed as the cart is part of the nav menu and prevented from sending users to links by default
  $(document).one('click', '#mini_cart_checkout', function(e){
    let Url = $(this).attr('href');
    window.location.href = Url;
  });
})( jQuery );
