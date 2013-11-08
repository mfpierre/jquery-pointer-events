/*
* vendorPrefix.js - Copyright(c) Addy Osmani 2011.
* http://github.com/addyosmani
* Tests for native support of a browser property in a specific context
* If supported, a value will be returned.
*/
function getPrefix(prop, context) {
    var vendorPrefixes = ['moz', 'webkit', 'khtml', 'o', 'ms'],
        upper = prop.charAt(0).toUpperCase() + prop.slice(1),
        pref, len = vendorPrefixes.length,
        q = null;
    while (len--) {
        q = vendorPrefixes[len];
        if (context.toString().indexOf('style')) {
            q = q.charAt(0).toUpperCase() + q.slice(1);
        }
        if ((q + upper) in context) {
            pref = (q);
        }
    }
    if (prop in context) {
        pref = prop;
    }
    if (pref) {
        return '-' + pref.toLowerCase() + '-';
    }
    return null;
}

/* ===========================================================
 * jquery-pointer-events.js v1
 * ===========================================================
 * Copyright 2013 Pierre Margueritte
 *
 * A very simple and light weight jQuery plugin that
 * Adds support for the style attribute "pointer-events: none" to browsers without this feature
 * Inspired by Pointer Events Polyfill by Kent Mewhort.
 *
 * ========================================================== */

function PointerEventsPolyfill(options){
    this.options = $.extend({
        target: '.pointerTarget',
        selector: '*',
        mouseEvents: ['click','dblclick','mousedown','mouseup']
    }, options);
    if(null === getPrefix('pointer-eventes', document.createElement('div').style)) {
        this.register_mouse_events();
    }
}

PointerEventsPolyfill.initialize = function(options){
    if(PointerEventsPolyfill.singleton === undefined)
      PointerEventsPolyfill.singleton = new PointerEventsPolyfill(options);
    return PointerEventsPolyfill.singleton;
};

PointerEventsPolyfill.prototype.register_mouse_events = function(){
    var options = options;
    $(document).on(this.options.mouseEvents.join(" "), options.selector, function(e){
        if($(this).css('pointer-events') == 'none'){
            var $targetElement = $.nearest({x: e.clientX, y: e.clientY}, options.target);
            e.target = $targetElement;
            $($targetElement).trigger(e);
            return false;
        }
        return true;
    });
};
