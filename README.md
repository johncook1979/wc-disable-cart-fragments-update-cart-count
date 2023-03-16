# wc-disable-cart-fragments-update-cart-count
Disable WooCommerce Cart Fragments and Update Cart Count On User Interaction

These snippets and scripts will help improve load times for your woocommerce store without loss of user experience. The concept is simple. Disable cart fragments, but update the cart using ajax once there is interaction with the page. This works flawlessly with ajax add to cart plugins.

You may need to find the cart count id or class name used by your theme or plugin to update the cart count. However, these snippets will work without a plugin or theme. Simple add a div or span on your menu or elsewhere and then apply styling. For example, you can add an svg icon to your navigation menu label with relevant span tags to display a cart icon with quantity as below and add an optional css clss name of menu-bag

### See menu icon file for svg icon and cart table placeholder code

This will add a bag icon to the naavigation with a container showing the number of items in your cart, without the need of a plugin. This also contains an optional cart table with skeleton loader
