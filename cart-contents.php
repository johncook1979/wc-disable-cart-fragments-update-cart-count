<?php

/**
	*
    * File to display the cart contents on ajax load
    *
*/
include_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php');

global $woocommerce;

// get the cart items
$items = $woocommerce->cart->get_cart();

// create a cart container
echo '<div id="cart-wrap">';

// create the cart table
echo '<table id="mini-cart">';

// loop through each item in the cart
foreach($items as $item => $values) { 
    $_product =  wc_get_product( $values['data']->get_id() );
    //product image
    $getProductDetail = wc_get_product( $values['product_id'] );
  	echo '<tr>';
  
    echo '<td>'. $getProductDetail->get_image('woocommerce_gallery_thumbnail') . '</td>'; // product image using the gallery thumbnail
	
  	echo '<td class="qty">' . $values['quantity'] . ' X </td>'; // quantity
  
    echo "<td><b>".$_product->get_title() .'</td>';  // product name
  
    $price = get_post_meta($values['product_id'] , '_price', true) * $values['quantity']; // line item subtotal price * quantity
    echo "<td style='text-align:right;min-width: 70px;'>".get_woocommerce_currency_symbol().number_format((float)$price, 2, '.', '')."</td>"; // display line item subtotal

  	echo '</tr>';
}

// display the cart subtotal
$subtotal = WC()->cart->get_subtotal() +  WC()->cart->get_subtotal_tax(); // display subtotal plus tax. Edit as necessary
?>

<?php

// close off the table and the cart container
echo '</table>';
echo '</div>';

?>
<!-- Display subtotal amount and link to checkout pahe -->
<!-- You can change the cart URL for checkout URL is you wish -->
<p style="text-align:right;font-weight:700;display: initial; float: right;margin-bottom: 0;cursor:initial">Subtotal: <?= get_woocommerce_currency_symbol().number_format((float)$subtotal, 2, '.', '');?></p>
<p style="display: initial; float: left;margin-bottom: 0;"><a id="mini_cart_checkout" href="<?php echo wc_get_cart_url(); ?>">Proceed to cart &#8594;</a></p>
<?php
