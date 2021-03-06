/**
 * @class Ext.Viewport
 * @singleton
 * @ignore
 * @private
 *
 * Handles viewport sizing for the whole application
 */

Ext.Viewport = new (Ext.extend(Ext.util.Observable, {
    constructor: function() {
        var me = this;

        this.addEvents(
            'orientationchange',
            'resize'
        );

        this.stretchSizes = {};

        if (Ext.supports.OrientationChange) {
            window.addEventListener('orientationchange', Ext.createDelegate(me.onOrientationChange, me), false);
        }
        else {
            window.addEventListener('resize', Ext.createDelegate(me.onResize, me), false);
        }

        if (!Ext.desktop) {
            document.addEventListener('touchstart', Ext.createDelegate(me.onTouchStartCapturing, me), true);
        }
    },

    init: function(fn, scope) {
        var me = this,
            stretchSize = Math.max(window.innerHeight, window.innerWidth) * 2,
            body = Ext.getBody();

        me.updateOrientation();

        this.initialHeight = window.innerHeight;
        this.initialOrientation = this.orientation;

        body.setHeight(stretchSize);

        Ext.gesture.Manager.freeze();

        this.scrollToTop();
        // These 2 timers here are ugly but it's the only way to
        // make address bar hiding works on all the devices we have
        // including the new Galaxy Tab
        setTimeout(function() {
            me.scrollToTop();
            setTimeout(function() {
                me.scrollToTop();
                me.initialHeight = Math.max(me.initialHeight, window.innerHeight);

                if (fn) {
                    fn.apply(scope || window);
                }

                me.updateBodySize();

                Ext.gesture.Manager.thaw();
            }, 500);
        }, 500);

    },

    scrollToTop: function() {
        if (Ext.is.iOS) {
            if (Ext.is.Phone) {
                document.body.scrollTop = document.body.scrollHeight;
            }
        }
        else if (Ext.is.Blackberry) {
            window.scrollTo(0, 1000);
        }
        else {
            window.scrollTo(0, 1);
        }
    },

    updateBodySize: function() {
        Ext.getBody().setSize(window.innerWidth, window.innerHeight);
    },

    updateOrientation: function() {
        this.lastSize = this.getSize();
        this.orientation = this.getOrientation();
    },

    onTouchStartCapturing: function(e) {
        if (!Ext.currentlyFocusedField && Ext.is.iOS) {
            this.scrollToTop();
        }
    },

    onOrientationChange: function() {
        var me = this,
            body = Ext.getBody();

        if (!Ext.is.Phone) {
            body.setHeight(body.getWidth());

            this.updateOrientation();

            this.fireEvent('orientationchange', this, this.orientation);
            me.scrollToTop();
            me.updateBodySize();
            me.fireResizeEvent();
            Ext.repaint();

            return;
        }

        Ext.gesture.Manager.freeze();

        body.setHeight(body.getWidth());

        this.updateOrientation();

        this.fireEvent('orientationchange', this, this.orientation);

        setTimeout(function() {
            me.scrollToTop();

            setTimeout(function() {
                me.updateBodySize();
                me.fireResizeEvent();

                Ext.gesture.Manager.thaw();

                Ext.repaint();
            }, 200);
        }, 200);
    },

    fireResizeEvent: function() {
        var me = this;

        if (!Ext.is.iOS) {
            if (this.resizeEventTimer) {
                clearTimeout(this.resizeEventTimer);
            }

            this.resizeEventTimer = setTimeout(function() {
                me.fireEvent('resize', me, me.getSize());
            }, 500);
        } else {
            me.fireEvent('resize', me, me.getSize());
        }
    },

    onResize: function() {
        if (this.orientation != this.getOrientation()) {
            this.onOrientationChange();
        } else {
            var size = this.getSize();

            if (!Ext.is.iOS && !Ext.is.Desktop) {
                if ((size.width == this.lastSize.width && size.height > this.lastSize.height) ||
                    (size.height == this.lastSize.height && size.width > this.lastSize.width)) {
                    this.fireEvent('resize', this, size);
                }
            } else {
                this.fireEvent('resize', this, size);
            }
        }
    },

    getSize: function() {
        var size = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        if (!Ext.is.Desktop) {
            size.height = (this.orientation == this.initialOrientation) ?
                            Math.max(this.initialHeight, size.height) :
                            size.height
        }

        return size;
    },

    getOffset: function() {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        };
    },

    getOrientation: function() {
        var size = this.getSize();

        if (window.hasOwnProperty('orientation')) {
            return (window.orientation == 0 || window.orientation == 180) ? 'portrait' : 'landscape';
        }
        else {
            if (!Ext.is.iOS && !Ext.is.Desktop) {
                if ((size.width == this.lastSize.width && size.height < this.lastSize.height) ||
                    (size.height == this.lastSize.height && size.width < this.lastSize.width)) {
                    return this.orientation;
                }
            }

            return (window.innerHeight > window.innerWidth) ? 'portrait' : 'landscape';
        }

    }

}));
