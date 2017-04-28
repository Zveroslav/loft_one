
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    function (moduleTarget, moduleFrame){
        $(moduleSelector).on('click', _showFrame);
        $(moduleSelector + '.close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(moduleFrame).slideUp()
    }
    function _closeFrame(){
        $(moduleFrame).slideDown()
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    function setUpsListeners(moduleTarget, moduleFrame){
        $(moduleSelector).on('click', _showFrame);
        $(moduleSelector + '.close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(moduleFrame).slideUp()
    }
    function _closeFrame(){
        $(moduleFrame).slideDown()
    }
    return {
        init: function(moduleTarget, moduleFrame){
            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    function setUpsListeners(moduleTarget, moduleFrame){
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(moduleFrame).slideUp()
    }
    function _closeFrame(){
        $(moduleFrame).slideDown()
    }
    return {
        init: function(moduleTarget, moduleFrame){
            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    function setUpsListeners(moduleTarget, moduleFrame){
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(moduleFrame).slideUp();
        console.log('test');
    }
    function _closeFrame(){
        $(moduleFrame).slideDown()
    }
    return {
        init: function(moduleTarget, moduleFrame){
            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    function setUpsListeners(moduleTarget, moduleFrame){
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(moduleFrame).slideUp();
        console.log('test');
    }
    function _closeFrame(){
        $(moduleFrame).slideDown()
    }
    return {
        init: function(moduleTarget, moduleFrame){
                    console.log('test1');

            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    function setUpsListeners(moduleTarget, moduleFrame){
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(moduleFrame).slideUp();
        console.log('test');
    }
    function _closeFrame(){
        $(moduleFrame).slideDown()
    }
    return {
        init: function(moduleTarget, moduleFrame){
                    console.log(moduleTarget);

            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    function setUpsListeners(moduleTarget, moduleFrame){
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(moduleFrame).slideUp();
        console.log('test');
    }
    function _closeFrame(){
        $(moduleFrame).slideDown()
    }
    return {
        init: function(moduleTarget, moduleFrame){
                    console.log(moduleFrame);

            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    function setUpsListeners(moduleTarget, moduleFrame){
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        console.log(moduleFrame);
        $(moduleFrame).slideUp();
        console.log('test');
    }
    function _closeFrame(){
        $(moduleFrame).slideDown()
    }
    return {
        init: function(moduleTarget, moduleFrame){
                    console.log(moduleFrame);

            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    function setUpsListeners(moduleTarget, moduleFrame){
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        console.log(ev);
        $(moduleFrame).slideUp();
        console.log('test');
    }
    function _closeFrame(){
        $(moduleFrame).slideDown()
    }
    return {
        init: function(moduleTarget, moduleFrame){
                    console.log(moduleFrame);

            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    moduleFrame;
    function setUpsListeners(moduleTarget, moduleFrame){
        this.moduleFrame = moduleFrame;
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        console.log(moduleFrame);
        $(moduleFrame).slideUp();
        console.log('test');
    }
    function _closeFrame(){
        $(moduleFrame).slideDown()
    }
    return {
        init: function(moduleTarget, moduleFrame){
                    console.log(moduleFrame);

            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    var moduleFrame;
    function setUpsListeners(moduleTarget, moduleFrame){
        this.moduleFrame = moduleFrame;
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        console.log(moduleFrame);
        $(moduleFrame).slideUp();
        console.log('test');
    }
    function _closeFrame(){
        $(moduleFrame).slideDown()
    }
    return {
        init: function(moduleTarget, moduleFrame){
                    console.log(moduleFrame);

            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    var frame;
    function setUpsListeners(moduleTarget, moduleFrame){
        this.frame = moduleFrame;
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        console.log(frame);
        $(frame).slideUp();
        console.log('test');
    }
    function _closeFrame(){
        $(moduleFrame).slideDown()
    }
    return {
        init: function(moduleTarget, moduleFrame){
                    console.log(moduleFrame);

            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    var frame;
    var self = this;
    function setUpsListeners(moduleTarget, moduleFrame){
        self.frame = moduleFrame;
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        console.log(self.frame);
        $(frame).slideUp();
        console.log('test');
    }
    function _closeFrame(){
        $(moduleFrame).slideDown()
    }
    return {
        init: function(moduleTarget, moduleFrame){
                    console.log(moduleFrame);

            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    var frame;
    var self = this;
    function setUpsListeners(moduleTarget, moduleFrame){
        self.frame = moduleFrame;
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(self.frame).slideUp();
        console.log('test');
    }
    function _closeFrame(){
        $(moduleFrame).slideDown()
    }
    return {
        init: function(moduleTarget, moduleFrame){
                    console.log(moduleFrame);

            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    var frame;
    var self = this;
    function setUpsListeners(moduleTarget, moduleFrame){
        self.frame = moduleFrame;
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(self.frame).show();
    }
    function _closeFrame(){
        $(moduleFrame).slideDown()
    }
    return {
        init: function(moduleTarget, moduleFrame){
            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    var frame;
    var self = this;
    function setUpsListeners(moduleTarget, moduleFrame){
        self.frame = moduleFrame;
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(self.frame).fadeIn();
    }
    function _closeFrame(){
        $(moduleFrame).slideDown()
    }
    return {
        init: function(moduleTarget, moduleFrame){
            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    var frame;
    var self = this;
    function setUpsListeners(moduleTarget, moduleFrame){
        self.frame = moduleFrame;
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(self.frame).fadeIn();
    }
    function _closeFrame(){
        $(self.frame).slideDown()
    }
    return {
        init: function(moduleTarget, moduleFrame){
            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    var frame;
    var self = this;
    function setUpsListeners(moduleTarget, moduleFrame){
        self.frame = moduleFrame;
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(self.frame).fadeIn();
    }
    function _closeFrame(){
        $(self.frame).hide()
        console.log(test);
    }
    return {
        init: function(moduleTarget, moduleFrame){
            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    var frame;
    var self = this;
    function setUpsListeners(moduleTarget, moduleFrame){
        self.frame = moduleFrame;
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(self.frame).fadeIn();
    }
    function _closeFrame(){
        $(self.frame).hide();
        console.log(test);
    }
    return {
        init: function(moduleTarget, moduleFrame){
            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    var frame;
    var self = this;
    function setUpsListeners(moduleTarget, moduleFrame){
        self.frame = moduleFrame;
        var closeTarget = moduleTarget + ' .close';
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(self.frame).fadeIn();
    }
    function _closeFrame(){
        $(self.frame).hide();
        console.log(test);
    }
    return {
        init: function(moduleTarget, moduleFrame){
            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    var frame;
    var self = this;
    function setUpsListeners(moduleTarget, moduleFrame){
        self.frame = moduleFrame;
        var closeTarget = moduleTarget + ' .close';
        console.log(closeTarget);
        $(moduleTarget).on('click', _showFrame);
        $(moduleTarget + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(self.frame).fadeIn();
    }
    function _closeFrame(){
        $(self.frame).hide();
        console.log(test);
    }
    return {
        init: function(moduleTarget, moduleFrame){
            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    var frame;
    var self = this;
    function setUpsListeners(moduleTarget, moduleFrame){
        self.frame = moduleFrame;
        var closeTarget = moduleFrame + ' .close';
        console.log(closeTarget);
        $(moduleTarget).on('click', _showFrame);
        $(moduleFrame + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(self.frame).fadeIn();
    }
    function _closeFrame(){
        $(self.frame).hide();
        console.log(test);
    }
    return {
        init: function(moduleTarget, moduleFrame){
            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    var frame;
    var self = this;
    function setUpsListeners(moduleTarget, moduleFrame){
        self.frame = moduleFrame;
        var closeTarget = moduleFrame + ' .close';
        console.log(closeTarget);
        $(moduleTarget).on('click', _showFrame);
        $(moduleFrame + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(self.frame).fadeIn();
    }
    function _closeFrame(){
        $(self.frame).fadeOut();
    }
    return {
        init: function(moduleTarget, moduleFrame){
            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var moduleWindow = (function(){
    var frame;
    var self = this;
    function setUpsListeners(moduleTarget, moduleFrame){
        self.frame = moduleFrame;
        var closeTarget = moduleFrame + ' .close';
        $(moduleTarget).on('click', _showFrame);
        $(moduleFrame + ' .close').on('click', _closeFrame)
    }
    function _showFrame(){
        $(self.frame).fadeIn();
    }
    function _closeFrame(){
        $(self.frame).fadeOut();
    }
    return {
        init: function(moduleTarget, moduleFrame){
            setUpsListeners(moduleTarget, moduleFrame);
        }
    }
}());