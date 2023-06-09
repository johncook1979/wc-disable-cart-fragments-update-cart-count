<?php

/**
  * Disable cart fragments
  *
  * Add to child theme functions file or custom php file
  *
*/

add_action( 'wp_enqueue_scripts', 'custom_disable_cart_fragments', 11 ); 
 
function custom_disable_cart_fragments() { 
   wp_dequeue_script( 'wc-cart-fragments' ); 
}




/**
  * Enqueue scripts to fire cart refresh on page interaction or add/remove item from cart
  *
  * Add to child theme functions file or custom php file
  *
*/

add_action( 'wp_enqueue_scripts', 'refresh_cart_assets' );
function refresh_cart_assets() {
    wp_enqueue_script( 'refresh-cart-scripts', get_stylesheet_directory_uri() . '/refresh-cart-scripts.js' , __FILE__ );
    
    // include the following link ONLY is you are using the mini cart to display the cart contents
    wp_enqueue_script( 'cart-contents', get_stylesheet_directory_uri() . '/cart-contents.js' , __FILE__ );
}
