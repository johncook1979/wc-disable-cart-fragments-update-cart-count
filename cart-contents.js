(function($) {
  // click cart icon show cart
  $(document).on("click", "#menu-item-name", function(e){ // edit the #menu-item-name to the id or class name used
    e.preventDefault();
    $('#cart_container').toggleClass('visible');
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
        alert('Ajax error!')
      }

    });

  });

  // send user to cart on click. This is needed as the cart is part of the nav menu and prevented from sending users to links by default
  $(document).one('click', '#mini_cart_checkout', function(e){
    let Url = $(this).attr('href');
    window.location.href = Url;
  });
})( jQuery );
