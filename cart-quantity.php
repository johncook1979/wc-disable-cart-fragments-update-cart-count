<?php

/**
	*
    * File to update the cart quantity on ajax load
    *
*/

// Include wp load file
include_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php');


// echo the cart count
echo WC()->cart->get_cart_contents_count();
