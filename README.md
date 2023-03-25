# A WooCommerce mini cart and cart count with disabled WooCommerce cart fragments and delayed script
Disable WooCommerce Cart Fragments and Update Cart Count On User Interaction. Load mini cart contents only when user requests to view cart contents.

These snippets and scripts will help improve load times for your woocommerce store without loss of user experience. The concept is simple. Disable cart fragments, but update the cart using ajax once there is interaction with the page. This works flawlessly with ajax add to cart plugins.

Ajax get refreshed cart fragments is one of the longest loading scripts that you will detect when running a performance test of your website. The script runs to collect dynamic cart content for the visitor. Because it's requesting uncached and dynamic content on page load, it can slow down the overall page loading times. By disabling cart fragments you can significantly improve loading times by serving cached content to all visitors. However, unlike other guides, this repository allows you to maintain functionality as though it was still enabled.

### Notes

You may need to find the cart count id or class name used by your theme or plugin to update the cart count. However, these snippets will work without a plugin or theme that uses a mini cart. Simply add a div or span on your menu or elsewhere and then apply styling. For example, you can add an svg icon to your navigation menu label with relevant span tags to display a cart icon with quantity as below and add an optional css clss name of menu-bag. Alternatively, you can use the html file and paste the contents into your nav menu to display the cart icon, cart count and cart list.

### See menu icon file for svg icon and cart table placeholder code

This will add a bag icon to the naavigation with a container showing the number of items in your cart, without the need of a plugin. This also contains an optional cart table with skeleton loader.

With all options added you will have a mini cart that will only request data when there is user interaction or when the user requests the data..

Some styling may be necessary to suit your design preferences

## Screenshots

**Skeleton loader for mini cart while cart items are loading by ajax**

![alt text](/assets/skeleton-loader.png)

**Mini cart**

![alt text](/assets/mini-cart.png)

