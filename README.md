Adaptive markup
======================

Introduction
----

This is a simple proof of concept to show how adaptive markup can be used to serve device specific markup.

The main use case is where a responsive site has multiple breakpoints but the developer wants to serve different images at different breakpoints. Up until now, there has never been a way to do this without preventing all images from being downloaded. It is not sufficient to simply hide/show content using media queries as this will not prevent the original images from being downloaded.
