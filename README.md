Adaptive markup
======================

Introduction
----

This is a proof of concept to show how Javascript can be used to serve adaptive markup.

The main use case is where a responsive site has multiple breakpoints but the developer wants to serve different images at different breakpoints. There is not currently a way to do this without preventing all images from being downloaded.

It is therefore not sufficient to simply hide/show content using media queries as this will not prevent the original images from being downloaded.

Use cases
----

##### Images

One of the main use cases is to serve different images to different viewports on a responsive site. An example might be a product details on an ecommerce site where the developer only wants device specific images to be downloaded.

##### Javascript

Another use case is to manage Javascript for complex, JS heavy responsive sites. Modern responsive ecommerce sites may be very JS heavy and include some Javascript that is device specific or not executed across all breakpoints. Using this technique enables the developer to separate JS into modular device specific units and ensure that each is only downloaded according to the current viewport/device.

How to use
----
To enable this technique, simply add a media attribute to any element with a src attribute (i.e. img or script tag). The value of the media attribute should be a valid media query, e.g.:

```sh
<img src="http://placehold.it/320x213" width="100%" media="(max-width : 480px)">
```

or

```sh
<script src="js/mobile.js" media="(max-width: 480px)"></script>
```

It should be noted that this technique only deals with ensuring that the device/viewport specific asset is loaded. For visual elements, you should use this technique is conjunction with CSS media queries to hide/show appropriate content.

How does it work?
----

* When the page loads and whenever the window is resized, the JS scans for any element with a media attribute.
* If the element has a media query that is not currently active, the elements 'src' attribute is set to 'unset-src', thus preventing the asset from being downloaded.
* When the page initially loads, the DOM is rewritten according to points 1 and 2 above before the browser's lookahead parser is initialized. This means the DOM can be rewritten before the browser has started to download any assets.
