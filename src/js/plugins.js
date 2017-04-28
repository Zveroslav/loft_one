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