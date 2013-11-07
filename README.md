jquery-pointer-events
=====================

A very simple and light weight jQuery plugin that adds support for the style attribute "pointer-events: none" to browsers without this feature

Inspired by Pointer Events Polyfill by Kent Mewhort.

## Requirements
  * jQuery > 1.7
  * jQuery Nearest

## Usage
    $(document).ready(function(){
      PointerEventsPolyfill.initialize({
        selector:'.avoid-clicks'
        target:'.pointerTarget'
      });
    });
    
