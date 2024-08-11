"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["default-src_app_theme_helper_components_index_ts"],{

/***/ 63619:
/*!***************************************************!*\
  !*** ./src/app/theme/helper/_utils/DomHelpers.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorDarken": () => (/* binding */ colorDarken),
/* harmony export */   "colorLighten": () => (/* binding */ colorLighten),
/* harmony export */   "getAttributeValueByBreakpoint": () => (/* binding */ getAttributeValueByBreakpoint),
/* harmony export */   "getBreakpoint": () => (/* binding */ getBreakpoint),
/* harmony export */   "getCSS": () => (/* binding */ getCSS),
/* harmony export */   "getCSSVariableValue": () => (/* binding */ getCSSVariableValue),
/* harmony export */   "getElementActualCss": () => (/* binding */ getElementActualCss),
/* harmony export */   "getElementActualHeight": () => (/* binding */ getElementActualHeight),
/* harmony export */   "getElementActualWidth": () => (/* binding */ getElementActualWidth),
/* harmony export */   "getElementChild": () => (/* binding */ getElementChild),
/* harmony export */   "getElementChildren": () => (/* binding */ getElementChildren),
/* harmony export */   "getElementIndex": () => (/* binding */ getElementIndex),
/* harmony export */   "getElementMatches": () => (/* binding */ getElementMatches),
/* harmony export */   "getElementOffset": () => (/* binding */ getElementOffset),
/* harmony export */   "getElementParents": () => (/* binding */ getElementParents),
/* harmony export */   "getHighestZindex": () => (/* binding */ getHighestZindex),
/* harmony export */   "getScrollTop": () => (/* binding */ getScrollTop),
/* harmony export */   "getViewPort": () => (/* binding */ getViewPort),
/* harmony export */   "insertAfterElement": () => (/* binding */ insertAfterElement),
/* harmony export */   "isElementHasClasses": () => (/* binding */ isElementHasClasses),
/* harmony export */   "isMobileDevice": () => (/* binding */ isMobileDevice),
/* harmony export */   "isVisibleElement": () => (/* binding */ isVisibleElement),
/* harmony export */   "slide": () => (/* binding */ slide),
/* harmony export */   "slideDown": () => (/* binding */ slideDown),
/* harmony export */   "slideUp": () => (/* binding */ slideUp),
/* harmony export */   "throttle": () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _ElementStyleUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ElementStyleUtil */ 47722);
/* harmony import */ var _DataUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_DataUtil */ 73701);
/* harmony import */ var _ElementAnimateUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ElementAnimateUtil */ 87300);
/* harmony import */ var _TypesHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_TypesHelpers */ 96269);




function getCSS(el, styleProp) {
    const defaultView = (el.ownerDocument || document).defaultView;
    if (!defaultView) {
        return '';
    }
    // sanitize property name to css notation
    // (hyphen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
}
function getCSSVariableValue(variableName) {
    let hex = getComputedStyle(document.documentElement).getPropertyValue(variableName);
    if (hex && hex.length > 0) {
        hex = hex.trim();
    }
    return hex;
}
function getElementActualCss(el, prop, cache) {
    let css = '';
    if (!el.getAttribute('kt-hidden-' + prop) || cache === false) {
        let value;
        // the element is hidden so:
        // making the el block so we can meassure its height but still be hidden
        css = el.style.cssText;
        el.style.cssText = 'position: absolute; visibility: hidden; display: block;';
        if (prop === 'width') {
            value = el.offsetWidth;
        }
        else if (prop === 'height') {
            value = el.offsetHeight;
        }
        el.style.cssText = css;
        // store it in cache
        if (value !== undefined) {
            el.setAttribute('kt-hidden-' + prop, value.toString());
            return parseFloat(value.toString());
        }
        return 0;
    }
    else {
        // store it in cache
        const attributeValue = el.getAttribute('kt-hidden-' + prop);
        if (attributeValue || attributeValue === '0') {
            return parseFloat(attributeValue);
        }
    }
}
function getElementActualHeight(el) {
    return getElementActualCss(el, 'height', false);
}
function getElementActualWidth(el, cache) {
    return getElementActualCss(el, 'width', false);
}
function getElementIndex(element) {
    if (element.parentNode) {
        const c = element.parentNode.children;
        for (let i = 0; i < c.length; i++) {
            if (c[i] === element)
                return i;
        }
    }
    return -1;
}
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
function getElementMatches(element, selector) {
    const p = Element.prototype;
    const f = p.matches || p.webkitMatchesSelector;
    if (element && element.tagName) {
        return f.call(element, selector);
    }
    else {
        return false;
    }
}
function getElementOffset(el) {
    // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
    // Support: IE <=11 only
    // Running getBoundingClientRect on a
    // disconnected node in IE throws an error
    if (!el.getClientRects().length) {
        return { top: 0, left: 0 };
    }
    // Get document-relative position by adding viewport scroll to viewport-relative gBCR
    const rect = el.getBoundingClientRect();
    const win = el.ownerDocument.defaultView;
    if (win) {
        return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset,
        };
    }
    return rect;
}
function getElementParents(element, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches = function (s) {
            const matches = (document || this.ownerDocument).querySelectorAll(s);
            let i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) { }
            return i > -1;
        };
    }
    // Set up a parent array
    const parents = [];
    let el = element;
    // Push each parent element to the array
    for (; el && el !== document.body; el = el.parentElement) {
        if (selector) {
            if (el.matches(selector)) {
                parents.push(el);
            }
            continue;
        }
        parents.push(el);
    }
    // Return our parent array
    return parents;
}
function getHighestZindex(el) {
    let bufferNode = el;
    let buffer = el;
    while (bufferNode && bufferNode !== document) {
        // Ignore z-index if position is set to a value where z-index is ignored by the browser
        // This makes behavior of this function consistent across browsers
        // WebKit always returns auto if the element is positioned
        const position = buffer.style.getPropertyValue('position');
        if (position === 'absolute' || position === 'relative' || position === 'fixed') {
            // IE returns 0 when zIndex is not specified
            // other browsers return a string
            // we ignore the case of nested elements with an explicit value of 0
            // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
            const value = parseInt(buffer.style.getPropertyValue('z-index'));
            if (!isNaN(value) && value !== 0) {
                return value;
            }
        }
        bufferNode = bufferNode.parentNode;
        buffer = bufferNode;
    }
    return null;
}
function getScrollTop() {
    return (document.scrollingElement || document.documentElement).scrollTop;
}
// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
function getViewPort() {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    };
}
function insertAfterElement(el, referenceNode) {
    var _a;
    return (_a = referenceNode.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(el, referenceNode.nextSibling);
}
function isElementHasClasses(element, classesStr) {
    const classes = classesStr.split(' ');
    for (let i = 0; i < classes.length; i++) {
        if (!element.classList.contains(classes[i])) {
            return false;
        }
    }
    return true;
}
function isVisibleElement(element) {
    return !(element.offsetWidth === 0 && element.offsetHeight === 0);
}
// Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds
function throttle(timer, func, delay) {
    // If setTimeout is already scheduled, no need to do anything
    if (timer) {
        return;
    }
    // Schedule a setTimeout after delay seconds
    timer = window.setTimeout(function () {
        func();
        // Once setTimeout function execution is finished, timerId = undefined so that in <br>
        // the next scroll event function execution can be scheduled by the setTimeout
        timer = undefined;
    }, delay);
}
function getElementChildren(element, selector) {
    if (!element || !element.childNodes) {
        return null;
    }
    const result = [];
    for (let i = 0; i < element.childNodes.length; i++) {
        const child = element.childNodes[i];
        // child.nodeType == 1 => Element, Text, Comment, ProcessingInstruction, CDATASection, EntityReference
        if (child.nodeType === 1 && getElementMatches(child, selector)) {
            result.push(child);
        }
    }
    return result;
}
function getElementChild(element, selector) {
    const children = getElementChildren(element, selector);
    return children ? children[0] : null;
}
function isMobileDevice() {
    let test = getViewPort().width < +getBreakpoint('lg') ? true : false;
    if (test === false) {
        // For use within normal web clients
        test = navigator.userAgent.match(/iPad/i) != null;
    }
    return test;
}
function slide(el, dir, speed, callback) {
    if (!el ||
        (dir === 'up' && isVisibleElement(el) === false) ||
        (dir === 'down' && isVisibleElement(el) === true)) {
        return;
    }
    speed = speed ? speed : 600;
    let calcHeight = getElementActualHeight(el);
    let calcPaddingTop = 0;
    let calcPaddingBottom = 0;
    if (_ElementStyleUtil__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.get(el, 'padding-top') && _DataUtil__WEBPACK_IMPORTED_MODULE_1__.DataUtil.get(el, 'slide-padding-top') !== true) {
        _DataUtil__WEBPACK_IMPORTED_MODULE_1__.DataUtil.set(el, 'slide-padding-top', _ElementStyleUtil__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.get(el, 'padding-top'));
    }
    if (_ElementStyleUtil__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.get(el, 'padding-bottom') &&
        _DataUtil__WEBPACK_IMPORTED_MODULE_1__.DataUtil.has(el, 'slide-padding-bottom') !== true) {
        _DataUtil__WEBPACK_IMPORTED_MODULE_1__.DataUtil.set(el, 'slide-padding-bottom', _ElementStyleUtil__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.get(el, 'padding-bottom'));
    }
    if (_DataUtil__WEBPACK_IMPORTED_MODULE_1__.DataUtil.has(el, 'slide-padding-top')) {
        const data = _DataUtil__WEBPACK_IMPORTED_MODULE_1__.DataUtil.get(el, 'slide-padding-top');
        calcPaddingTop = parseInt(data);
    }
    if (_DataUtil__WEBPACK_IMPORTED_MODULE_1__.DataUtil.has(el, 'slide-padding-bottom')) {
        const data = _DataUtil__WEBPACK_IMPORTED_MODULE_1__.DataUtil.get(el, 'slide-padding-bottom');
        calcPaddingBottom = parseInt(data);
    }
    if (dir === 'up') {
        // up
        el.style.cssText = 'display: block; overflow: hidden;';
        if (calcPaddingTop) {
            _ElementAnimateUtil__WEBPACK_IMPORTED_MODULE_2__.ElementAnimateUtil.animate(0, calcPaddingTop, speed, function (value) {
                el.style.paddingTop = calcPaddingTop - value + 'px';
            });
        }
        if (calcPaddingBottom) {
            _ElementAnimateUtil__WEBPACK_IMPORTED_MODULE_2__.ElementAnimateUtil.animate(0, calcPaddingBottom, speed, function (value) {
                el.style.paddingBottom = calcPaddingBottom - value + 'px';
            });
        }
        _ElementAnimateUtil__WEBPACK_IMPORTED_MODULE_2__.ElementAnimateUtil.animate(0, calcHeight || 0, speed, function (value) {
            el.style.height = (calcHeight || 0) - value + 'px';
        }, function () {
            el.style.height = '';
            el.style.display = 'none';
            if (typeof callback === 'function') {
                callback();
            }
        });
    }
    else if (dir === 'down') {
        // down
        el.style.cssText = 'display: block; overflow: hidden;';
        if (calcPaddingTop) {
            _ElementAnimateUtil__WEBPACK_IMPORTED_MODULE_2__.ElementAnimateUtil.animate(0, calcPaddingTop, speed, function (value) {
                //
                el.style.paddingTop = value + 'px';
            }, function () {
                el.style.paddingTop = '';
            });
        }
        if (calcPaddingBottom) {
            _ElementAnimateUtil__WEBPACK_IMPORTED_MODULE_2__.ElementAnimateUtil.animate(0, calcPaddingBottom, speed, function (value) {
                el.style.paddingBottom = value + 'px';
            }, function () {
                el.style.paddingBottom = '';
            });
        }
        _ElementAnimateUtil__WEBPACK_IMPORTED_MODULE_2__.ElementAnimateUtil.animate(0, calcHeight || 0, speed, function (value) {
            el.style.height = value + 'px';
        }, function () {
            el.style.height = '';
            el.style.display = '';
            el.style.overflow = '';
            if (typeof callback === 'function') {
                callback();
            }
        });
    }
}
function slideUp(el, speed, callback) {
    slide(el, 'up', speed, callback);
}
function slideDown(el, speed, callback) {
    slide(el, 'down', speed, callback);
}
function getBreakpoint(breakpoint) {
    let value = getCSSVariableValue('--kt-' + breakpoint);
    if (value) {
        value = parseInt(value.trim());
    }
    return value;
}
function getAttributeValueByBreakpoint(incomingAttr) {
    let value = (0,_TypesHelpers__WEBPACK_IMPORTED_MODULE_3__.toJSON)(incomingAttr);
    if (typeof value !== 'object') {
        return incomingAttr;
    }
    const width = getViewPort().width;
    let resultKey;
    let resultBreakpoint = -1;
    let breakpoint;
    for (let key in value) {
        if (key === 'default') {
            breakpoint = 0;
        }
        else {
            breakpoint = getBreakpoint(key) ? +getBreakpoint(key) : parseInt(key);
        }
        if (breakpoint <= width && breakpoint > resultBreakpoint) {
            resultKey = key;
            resultBreakpoint = breakpoint;
        }
    }
    return resultKey ? (0,_TypesHelpers__WEBPACK_IMPORTED_MODULE_3__.getObjectPropertyValueByKey)(value, resultKey) : value;
}
function colorLighten(color, amount) {
    const addLight = (_color, _amount) => {
        const cc = parseInt(_color, 16) + _amount;
        const cNum = cc > 255 ? 255 : cc;
        const c = cNum.toString(16).length > 1 ? cNum.toString(16) : `0${cNum.toString(16)}`;
        return c;
    };
    color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color;
    amount = parseInt(((255 * amount) / 100).toString());
    return (color = `#${addLight(color.substring(0, 2), amount)}${addLight(color.substring(2, 4), amount)}${addLight(color.substring(4, 6), amount)}`);
}
function colorDarken(color, amount) {
    const subtractLight = (_color, _amount) => {
        const cc = parseInt(color, 16) - amount;
        const cNum = cc < 0 ? 0 : cc;
        const c = cNum.toString(16).length > 1 ? cNum.toString(16) : `0${cNum.toString(16)}`;
        return c;
    };
    color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color;
    amount = parseInt(((255 * amount) / 100).toString());
    return (color = `#${subtractLight(color.substring(0, 2), amount)}${subtractLight(color.substring(2, 4), amount)}${subtractLight(color.substring(4, 6), amount)}`);
}



/***/ }),

/***/ 87300:
/*!***********************************************************!*\
  !*** ./src/app/theme/helper/_utils/ElementAnimateUtil.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementAnimateUtil": () => (/* binding */ ElementAnimateUtil)
/* harmony export */ });
/* harmony import */ var _DOMEventHandlerUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_DOMEventHandlerUtil */ 40729);
/* harmony import */ var _ElementStyleUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_ElementStyleUtil */ 47722);
/* harmony import */ var _DomHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DomHelpers */ 63619);



class ElementAnimateUtil {
    static animate(from, to, duration, update, complete) {
        /**
         * TinyAnimate.easings
         *  Adapted from jQuery Easing
         */
        const easings = {
            linear: function (t, b, c, d) {
                return (c * t) / d + b;
            },
        };
        // Create mock done() function if necessary
        if (!complete) {
            complete = function () { };
        }
        // Animation loop
        // let canceled = false;
        const change = to - from;
        function loop(timestamp) {
            var time = (timestamp || +new Date()) - start;
            if (time >= 0) {
                update(easings.linear(time, from, change, duration));
            }
            if (time >= 0 && time >= duration) {
                update(to);
                if (complete) {
                    complete();
                }
            }
            else {
                window.requestAnimationFrame(loop);
            }
        }
        update(from);
        // Start animation loop
        const start = window.performance && window.performance.now ? window.performance.now() : +new Date();
        window.requestAnimationFrame(loop);
    }
    static animateClass(element, animationName, callBack) {
        const animateClasses = animationName.split(' ');
        animateClasses.forEach((cssClass) => element.classList.add(cssClass));
        _DOMEventHandlerUtil__WEBPACK_IMPORTED_MODULE_0__.DOMEventHandlerUtil.one(element, 'animationend', function () {
            animateClasses.forEach((cssClass) => element.classList.remove(cssClass));
        });
        if (callBack) {
            _DOMEventHandlerUtil__WEBPACK_IMPORTED_MODULE_0__.DOMEventHandlerUtil.one(element, 'animationend', callBack);
        }
    }
    static transitionEnd(element, callBack) {
        _DOMEventHandlerUtil__WEBPACK_IMPORTED_MODULE_0__.DOMEventHandlerUtil.one(element, 'transitionend', callBack);
    }
    static animationEnd(element, callBack) {
        _DOMEventHandlerUtil__WEBPACK_IMPORTED_MODULE_0__.DOMEventHandlerUtil.one(element, 'animationend', callBack);
    }
    static animationDelay(element, value) {
        _ElementStyleUtil__WEBPACK_IMPORTED_MODULE_1__.ElementStyleUtil.set(element, 'animation-delay', value);
    }
    static animationDuration(element, value) {
        _ElementStyleUtil__WEBPACK_IMPORTED_MODULE_1__.ElementStyleUtil.set(element, 'animation-duration', value);
    }
    static scrollTo(element, offset, duration = 500) {
        let targetPos = element ? (0,_DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getElementOffset)(element).top : 0;
        let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (offset) {
            scrollPos += offset;
            targetPos = targetPos - offset;
        }
        const from = scrollPos;
        const to = targetPos;
        ElementAnimateUtil.animate(from, to, duration, function (value) {
            document.documentElement.scrollTop = value;
            // document.body.parentNode.scrollTop = value;
            document.body.scrollTop = value;
        }); //, easing, done
    }
    static scrollTop(offset, duration) {
        ElementAnimateUtil.scrollTo(null, offset, duration);
    }
}


/***/ }),

/***/ 87647:
/*!*********************************************************!*\
  !*** ./src/app/theme/helper/_utils/EventHandlerUtil.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventHandlerUtil": () => (/* binding */ EventHandlerUtil)
/* harmony export */ });
/* harmony import */ var _DataUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_DataUtil */ 73701);
/* harmony import */ var _TypesHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_TypesHelpers */ 96269);


class EventHandlerUtil {
    static setEventMetasByName(name, handlers) {
        EventHandlerUtil.store[name] = handlers;
    }
    static getEventMetaByName(name) {
        return EventHandlerUtil.store[name];
    }
    static setEventMetaByNameAndHandlerId(name, handlerId, meta) {
        if (EventHandlerUtil.store[name]) {
            EventHandlerUtil.store[name][handlerId] = meta;
            return;
        }
        EventHandlerUtil.store[name] = {};
        EventHandlerUtil.store[name][handlerId] = meta;
    }
    static getEventMetaByHandlerId(name, handlerId) {
        const handlersIds = EventHandlerUtil.store[name];
        if (!handlersIds) {
            return;
        }
        return handlersIds[handlerId];
    }
    static setFiredByNameAndHandlerId(name, handerId, fired) {
        const meta = EventHandlerUtil.getEventMetaByHandlerId(name, handerId);
        if (!meta) {
            return;
        }
        meta.fired = fired;
        EventHandlerUtil.setEventMetaByNameAndHandlerId(name, handerId, meta);
    }
    static addEvent(element, name, callback, one = false) {
        const handlerId = (0,_TypesHelpers__WEBPACK_IMPORTED_MODULE_1__.getUniqueIdWithPrefix)('event');
        const data = _DataUtil__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(element, name);
        const handlersIds = data ? data : [];
        handlersIds.push(handlerId);
        _DataUtil__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(element, name, handlersIds);
        const meta = {
            name: name,
            callback: callback,
            one: one,
            fired: false,
        };
        EventHandlerUtil.setEventMetaByNameAndHandlerId(name, handlerId, meta);
        return handlerId;
    }
    static removeEvent(element, name, handerId) {
        _DataUtil__WEBPACK_IMPORTED_MODULE_0__.DataUtil.removeOne(element, name, handerId);
        const handlersIds = EventHandlerUtil.store[name];
        if (handlersIds) {
            return;
        }
        delete EventHandlerUtil.store[name][handerId];
    }
    static trigger(element, name, target, e) {
        let returnValue = true;
        if (!_DataUtil__WEBPACK_IMPORTED_MODULE_0__.DataUtil.has(element, name)) {
            return returnValue;
        }
        let eventValue;
        let handlerId;
        const data = _DataUtil__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(element, name);
        const handlersIds = data ? data : [];
        for (let i = 0; i < handlersIds.length; i++) {
            handlerId = handlersIds[i];
            if (EventHandlerUtil.store[name] && EventHandlerUtil.store[name][handlerId]) {
                const handler = EventHandlerUtil.store[name][handlerId];
                if (handler.name === name) {
                    if (handler.one) {
                        if (handler.fired) {
                            EventHandlerUtil.store[name][handlerId].fired = true;
                            eventValue = handler.callback.call(this, target);
                        }
                    }
                    else {
                        eventValue = handler.callback.call(this, target);
                    }
                    if (eventValue === false) {
                        returnValue = false;
                    }
                }
            }
        }
        return returnValue;
    }
    static one(element, name, callBack) {
        EventHandlerUtil.addEvent(element, name, callBack, true);
    }
    static off(element, name, handerId) {
        EventHandlerUtil.removeEvent(element, name, handerId);
    }
}
EventHandlerUtil.store = {};
EventHandlerUtil.on = function (element, name, callBack) {
    EventHandlerUtil.addEvent(element, name, callBack, false);
};


/***/ }),

/***/ 40729:
/*!*************************************************************!*\
  !*** ./src/app/theme/helper/_utils/_DOMEventHandlerUtil.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMEventHandlerUtil": () => (/* binding */ DOMEventHandlerUtil)
/* harmony export */ });
/* harmony import */ var _TypesHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_TypesHelpers */ 96269);

class DOMEventHandlerUtil {
    static on(element, selector, eventName, callBack) {
        const eventId = (0,_TypesHelpers__WEBPACK_IMPORTED_MODULE_0__.getUniqueIdWithPrefix)('DOMEvent');
        DOMEventHandlerUtil.store.set(eventId, (e) => {
            const targets = element.querySelectorAll(selector);
            let target = e.target;
            while (target && target !== element) {
                for (let i = 0; i < targets.length; i++) {
                    if (target === targets[i]) {
                        callBack.call(target, e);
                    }
                }
                if (target.parentElement) {
                    target = target.parentElement;
                }
                else {
                    target = null;
                }
            }
        });
        element.addEventListener(eventName, DOMEventHandlerUtil.store.get(eventId));
        return eventId;
    }
    static off(element, eventName, eventId) {
        const funcFromStore = DOMEventHandlerUtil.store.get(eventId);
        if (!funcFromStore) {
            return;
        }
        element.removeEventListener(eventName, funcFromStore);
        DOMEventHandlerUtil.store.delete(eventId);
    }
    static one(element, eventName, callBack) {
        element.addEventListener(eventName, function calee(e) {
            // remove event
            if (e.target && e.target.removeEventListener) {
                e.target.removeEventListener(e.type, calee);
            }
            if (element && e && e.currentTarget) {
                // if (element && element.removeEventListener && e && e.currentTarget) {
                e.currentTarget.removeEventListener(e.type, calee);
            }
            // call hander
            return callBack(e);
        });
    }
}
DOMEventHandlerUtil.store = new Map();


/***/ }),

/***/ 73701:
/*!**************************************************!*\
  !*** ./src/app/theme/helper/_utils/_DataUtil.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataUtil": () => (/* binding */ DataUtil)
/* harmony export */ });
class DataUtil {
    static set(instance, key, data) {
        if (!instance) {
            return;
        }
        const instanceData = DataUtil.store.get(instance);
        if (!instanceData) {
            const newMap = new Map().set(key, data);
            DataUtil.store.set(instance, newMap);
            return;
        }
        instanceData.set(key, data);
    }
    static get(instance, key) {
        const instanceData = DataUtil.store.get(instance);
        if (!instanceData) {
            return;
        }
        return instanceData.get(key);
    }
    static remove(instance, key) {
        const instanceData = DataUtil.store.get(instance);
        if (!instanceData) {
            return;
        }
        instanceData.delete(key);
    }
    static removeOne(instance, key, eventId) {
        const instanceData = DataUtil.store.get(instance);
        if (!instanceData) {
            return;
        }
        const eventsIds = instanceData.get(key);
        if (!eventsIds) {
            return;
        }
        const updateEventsIds = eventsIds.filter((f) => f !== eventId);
        DataUtil.set(instance, key, updateEventsIds);
    }
    static has(instance, key) {
        const instanceData = DataUtil.store.get(instance);
        if (instanceData) {
            return instanceData.has(key);
        }
        return false;
    }
    static getAllInstancesByKey(key) {
        const result = [];
        DataUtil.store.forEach((val) => {
            val.forEach((v, k) => {
                if (k === key) {
                    result.push(v);
                }
            });
        });
        return result;
    }
}
DataUtil.store = new Map();


/***/ }),

/***/ 47722:
/*!**********************************************************!*\
  !*** ./src/app/theme/helper/_utils/_ElementStyleUtil.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementStyleUtil": () => (/* binding */ ElementStyleUtil)
/* harmony export */ });
class ElementStyleUtil {
    static set(element, property, value, important) {
        if (important) {
            element.style.setProperty(property, value, 'important');
        }
        else {
            element.style.setProperty(property, value);
        }
    }
    static get(element, attributeName) {
        return element.style.getPropertyValue(attributeName);
    }
    static remove(element, attibuteName) {
        element.style.removeProperty(attibuteName);
    }
}


/***/ }),

/***/ 96269:
/*!******************************************************!*\
  !*** ./src/app/theme/helper/_utils/_TypesHelpers.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getObjectPropertyValueByKey": () => (/* binding */ getObjectPropertyValueByKey),
/* harmony export */   "getUniqueIdWithPrefix": () => (/* binding */ getUniqueIdWithPrefix),
/* harmony export */   "stringSnakeToCamel": () => (/* binding */ stringSnakeToCamel),
/* harmony export */   "toJSON": () => (/* binding */ toJSON)
/* harmony export */ });
function getObjectPropertyValueByKey(obj, key) {
    const map = new Map(Object.entries(obj));
    if (obj.hasOwnProperty(key) && map) {
        return map.get(key);
    }
}
/**
 * Generates unique ID for give prefix.
 * @param {string} prefix Prefix for generated ID
 * @returns {boolean}
 */
function getUniqueIdWithPrefix(prefix) {
    const result = Math.floor(Math.random() * new Date().getTime()).toString();
    if (!prefix) {
        return result;
    }
    return `${prefix}${result}`;
}
/* eslint-disable no-useless-escape */
function stringSnakeToCamel(str) {
    return str.replace(/(\-\w)/g, function (m) {
        return m[1].toUpperCase();
    });
}
function toJSON(value) {
    if (typeof value !== 'string') {
        return value;
    }
    if (!value) {
        return undefined;
    }
    // ("'" => "\"");
    const result = value
        .toString()
        .split('')
        .map((el) => (el !== "'" ? el : '"'))
        .join('');
    var jsonStr = result.replace(/(\w+:)|(\w+ :)/g, function (matched) {
        return '"' + matched.substring(0, matched.length - 1) + '":';
    });
    try {
        return JSON.parse(jsonStr);
    }
    catch (_a) {
        return undefined;
    }
}



/***/ }),

/***/ 47590:
/*!**********************************************!*\
  !*** ./src/app/theme/helper/_utils/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMEventHandlerUtil": () => (/* reexport safe */ _DOMEventHandlerUtil__WEBPACK_IMPORTED_MODULE_5__.DOMEventHandlerUtil),
/* harmony export */   "DataUtil": () => (/* reexport safe */ _DataUtil__WEBPACK_IMPORTED_MODULE_4__.DataUtil),
/* harmony export */   "ElementAnimateUtil": () => (/* reexport safe */ _ElementAnimateUtil__WEBPACK_IMPORTED_MODULE_7__.ElementAnimateUtil),
/* harmony export */   "ElementStyleUtil": () => (/* reexport safe */ _ElementStyleUtil__WEBPACK_IMPORTED_MODULE_6__.ElementStyleUtil),
/* harmony export */   "EventHandlerUtil": () => (/* reexport safe */ _EventHandlerUtil__WEBPACK_IMPORTED_MODULE_8__.EventHandlerUtil),
/* harmony export */   "colorDarken": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.colorDarken),
/* harmony export */   "colorLighten": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.colorLighten),
/* harmony export */   "getAttributeValueByBreakpoint": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getAttributeValueByBreakpoint),
/* harmony export */   "getBreakpoint": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getBreakpoint),
/* harmony export */   "getCSS": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getCSS),
/* harmony export */   "getCSSVariableValue": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getCSSVariableValue),
/* harmony export */   "getElementActualCss": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getElementActualCss),
/* harmony export */   "getElementActualHeight": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getElementActualHeight),
/* harmony export */   "getElementActualWidth": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getElementActualWidth),
/* harmony export */   "getElementChild": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getElementChild),
/* harmony export */   "getElementChildren": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getElementChildren),
/* harmony export */   "getElementIndex": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getElementIndex),
/* harmony export */   "getElementMatches": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getElementMatches),
/* harmony export */   "getElementOffset": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getElementOffset),
/* harmony export */   "getElementParents": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getElementParents),
/* harmony export */   "getHighestZindex": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getHighestZindex),
/* harmony export */   "getObjectPropertyValueByKey": () => (/* reexport safe */ _TypesHelpers__WEBPACK_IMPORTED_MODULE_3__.getObjectPropertyValueByKey),
/* harmony export */   "getScrollTop": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getScrollTop),
/* harmony export */   "getUniqueIdWithPrefix": () => (/* reexport safe */ _TypesHelpers__WEBPACK_IMPORTED_MODULE_3__.getUniqueIdWithPrefix),
/* harmony export */   "getViewPort": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.getViewPort),
/* harmony export */   "insertAfterElement": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.insertAfterElement),
/* harmony export */   "isElementHasClasses": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.isElementHasClasses),
/* harmony export */   "isMobileDevice": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.isMobileDevice),
/* harmony export */   "isVisibleElement": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.isVisibleElement),
/* harmony export */   "slide": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.slide),
/* harmony export */   "slideDown": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.slideDown),
/* harmony export */   "slideUp": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.slideUp),
/* harmony export */   "stringSnakeToCamel": () => (/* reexport safe */ _TypesHelpers__WEBPACK_IMPORTED_MODULE_3__.stringSnakeToCamel),
/* harmony export */   "throttle": () => (/* reexport safe */ _DomHelpers__WEBPACK_IMPORTED_MODULE_2__.throttle),
/* harmony export */   "toJSON": () => (/* reexport safe */ _TypesHelpers__WEBPACK_IMPORTED_MODULE_3__.toJSON)
/* harmony export */ });
/* harmony import */ var _models_OffsetModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/OffsetModel */ 50991);
/* harmony import */ var _models_ViewPortModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/ViewPortModel */ 74157);
/* harmony import */ var _DomHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DomHelpers */ 63619);
/* harmony import */ var _TypesHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_TypesHelpers */ 96269);
/* harmony import */ var _DataUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_DataUtil */ 73701);
/* harmony import */ var _DOMEventHandlerUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_DOMEventHandlerUtil */ 40729);
/* harmony import */ var _ElementStyleUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_ElementStyleUtil */ 47722);
/* harmony import */ var _ElementAnimateUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ElementAnimateUtil */ 87300);
/* harmony import */ var _EventHandlerUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EventHandlerUtil */ 87647);
// Types


// Helpers


// Basic







/***/ }),

/***/ 50991:
/*!***********************************************************!*\
  !*** ./src/app/theme/helper/_utils/models/OffsetModel.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 74157:
/*!*************************************************************!*\
  !*** ./src/app/theme/helper/_utils/models/ViewPortModel.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 47570:
/*!**********************************************************!*\
  !*** ./src/app/theme/helper/components/MenuComponent.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent),
/* harmony export */   "defaultMenuOptions": () => (/* binding */ defaultMenuOptions)
/* harmony export */ });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popperjs/core */ 62524);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils/index */ 47590);


const defaultMenuOptions = {
    dropdown: {
        hoverTimeout: 200,
        zindex: 105,
    },
    accordion: {
        slideSpeed: 250,
        expand: false,
    },
};
class MenuComponent {
    constructor(_element, options) {
        this.triggerElement = null;
        // Set external trigger element
        this._setTriggerElement = () => {
            const target = document.querySelector(`[data-kt-menu-target="#${this.element.getAttribute('id')}"`);
            if (target) {
                this.triggerElement = target;
            }
            else if (this.element.closest('[data-kt-menu-trigger]')) {
                this.triggerElement = this.element.closest('[data-kt-menu-trigger]');
            }
            else if (this.element.parentNode &&
                (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getElementChild)(this.element.parentNode, '[data-kt-menu-trigger]')) {
                const child = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getElementChild)(this.element.parentNode, '[data-kt-menu-trigger]');
                if (child) {
                    this.triggerElement = child;
                }
            }
            if (this.triggerElement) {
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(this.triggerElement, 'menu', this);
            }
        };
        // Test if menu has external trigger element
        this._isTriggerElement = (item) => {
            return this.triggerElement === item;
        };
        // Get item option(through html attributes)
        this._getItemOption = (item, name) => {
            let value = null;
            if (item && item.hasAttribute('data-kt-menu-' + name)) {
                const attr = item.getAttribute('data-kt-menu-' + name) || '';
                value = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByBreakpoint)(attr);
                if (value !== null && String(value) === 'true') {
                    value = true;
                }
                else if (value !== null && String(value) === 'false') {
                    value = false;
                }
            }
            return value;
        };
        // Get item element
        this._getItemElement = (_element) => {
            // Element is the external trigger element
            if (this._isTriggerElement(_element)) {
                return _element;
            }
            // Element has item toggler attribute
            if (_element.hasAttribute('data-kt-menu-trigger')) {
                return _element;
            }
            // Element has item DOM reference in it's data storage
            const itemElement = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(_element, 'item');
            if (itemElement) {
                return itemElement;
            }
            // Item is parent of element
            const item = _element.closest('.menu-item[data-kt-menu-trigger]');
            if (item) {
                return item;
            }
            // Element's parent has item DOM reference in it's data storage
            const sub = _element.closest('.menu-sub');
            if (sub) {
                const subItem = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(sub, 'item');
                if (subItem) {
                    return subItem;
                }
            }
        };
        // Get item parent element
        this._getItemParentElement = (item) => {
            const sub = item.closest('.menu-sub');
            if (!sub) {
                return null;
            }
            const subItem = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(sub, 'item');
            if (subItem) {
                return subItem;
            }
            const parentItem = sub.closest('.menu-item[data-kt-menu-trigger]');
            if (sub && parentItem) {
                return parentItem;
            }
            return null;
        };
        // Get item parent elements
        this._getItemParentElements = (item) => {
            const parents = [];
            let parent;
            let i = 0;
            let buffer = item;
            do {
                parent = this._getItemParentElement(buffer);
                if (parent) {
                    parents.push(parent);
                    buffer = parent;
                }
                i++;
            } while (parent !== null && i < 20);
            if (this.triggerElement) {
                parents.unshift(this.triggerElement);
            }
            return parents;
        };
        // Prepare popper config for dropdown(see: https://popper.js.org/docs/v2/)
        this._getDropdownPopperConfig = (item) => {
            // Placement
            const placementOption = this._getItemOption(item, 'placement');
            let placement = 'right';
            if (placementOption) {
                placement = placementOption;
            }
            // Flip
            // const flipValue = this._getItemOption(item, 'flip')
            // const flip = flipValue ? flipValue.toString().split(',') : []
            // Offset
            const offsetValue = this._getItemOption(item, 'offset');
            const offset = offsetValue ? offsetValue.toString().split(',') : [];
            // Strategy
            const strategy = this._getItemOption(item, 'overflow') === true ? 'absolute' : 'fixed';
            return {
                placement: placement,
                strategy: strategy,
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: offset,
                        },
                    },
                    {
                        name: 'preventOverflow',
                    },
                    {
                        name: 'flip',
                        options: {
                            // altBoundary: true,
                            // fallbackPlacements: flip,
                            flipVariations: false,
                        },
                    },
                ],
            };
        };
        // Get item child element
        this._getItemChildElement = (item) => {
            let selector = item;
            const subItem = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(item, 'sub');
            if (subItem) {
                selector = subItem;
            }
            if (selector) {
                //element = selector.querySelector('.show.menu-item[data-kt-menu-trigger]');
                const element = selector.querySelector('.menu-item[data-kt-menu-trigger]');
                if (element) {
                    return element;
                }
            }
            return null;
        };
        // Get item child elements
        this._getItemChildElements = (item) => {
            const children = [];
            let child;
            let i = 0;
            let buffer = item;
            do {
                child = this._getItemChildElement(buffer);
                if (child) {
                    children.push(child);
                    buffer = child;
                }
                i++;
            } while (child !== null && i < 20);
            return children;
        };
        // Get item sub element
        this._getItemSubElement = (item) => {
            if (!item) {
                return null;
            }
            if (this._isTriggerElement(item)) {
                return this.element;
            }
            if (item.classList.contains('menu-sub')) {
                return item;
            }
            else if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.has(item, 'sub')) {
                const itemSub = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(item, 'sub');
                return itemSub ? itemSub : null;
            }
            else {
                return (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getElementChild)(item, '.menu-sub');
            }
        };
        this._getCss = (el, styleProp) => {
            const defaultView = (el.ownerDocument || document).defaultView;
            if (!defaultView) {
                return '';
            }
            // sanitize property name to css notation
            // (hyphen separated words eg. font-Size)
            styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
            return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
        };
        // Get item sub type
        this._getItemSubType = (element) => {
            const sub = this._getItemSubElement(element);
            if (sub && parseInt(this._getCss(sub, 'z-index')) > 0) {
                return 'dropdown';
            }
            else {
                return 'accordion';
            }
        };
        // Test if item's sub is shown
        this._isItemSubShown = (item) => {
            let sub = this._getItemSubElement(item);
            if (sub) {
                if (this._getItemSubType(item) === 'dropdown') {
                    const subHTMLElement = sub;
                    return (subHTMLElement.classList.contains('show') &&
                        subHTMLElement.hasAttribute('data-popper-placement'));
                }
                else {
                    return item.classList.contains('show');
                }
            }
            return false;
        };
        // Test if item dropdown is permanent
        this._isItemDropdownPermanent = (item) => {
            return this._getItemOption(item, 'permanent') === true;
        };
        // Test if item's parent is shown
        this._isItemParentShown = (item) => {
            return (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getElementParents)(item, '.menu-item.show').length > 0;
        };
        // Test of it is item sub element
        this._isItemSubElement = (item) => {
            return item.classList.contains('menu-sub');
        };
        // Test if item has sub
        this._hasItemSub = (item) => {
            return item.classList.contains('menu-item') && item.hasAttribute('data-kt-menu-trigger');
        };
        // Get link element
        this._getItemLinkElement = (item) => {
            return (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getElementChild)(item, '.menu-link');
        };
        // Get toggle element
        this._getItemToggleElement = (item) => {
            if (this.triggerElement) {
                return this.triggerElement;
            }
            return this._getItemLinkElement(item);
        };
        // Show item dropdown
        this._showDropdown = (item) => {
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.menu.dropdown.show') === false) {
                return;
            }
            // Hide all currently shown dropdowns except current one
            MenuComponent.hideDropdowns(item);
            // const toggle = this._isTriggerElement(item) ? item : this._getItemLinkElement(item);
            const sub = this._getItemSubElement(item);
            const width = this._getItemOption(item, 'width');
            const height = this._getItemOption(item, 'height');
            let zindex = this.options.dropdown.zindex;
            const parentZindex = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getHighestZindex)(item); // update
            // Apply a new z-index if dropdown's toggle element or it's parent has greater z-index // update
            if (parentZindex !== null && parentZindex >= zindex) {
                zindex = parentZindex + 1;
            }
            if (zindex && sub) {
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(sub, 'z-index', zindex);
            }
            if (width && sub) {
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(sub, 'width', width);
            }
            if (height && sub) {
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(sub, 'height', height);
            }
            this.initDropdownPopper(item, sub);
            item.classList.add('show');
            item.classList.add('menu-dropdown');
            sub === null || sub === void 0 ? void 0 : sub.classList.add('show');
            // Append the sub the the root of the menu
            if (this._getItemOption(item, 'overflow') === true) {
                if (sub) {
                    document.body.appendChild(sub);
                    _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(item, 'sub', sub);
                    _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(sub, 'item', item);
                    _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(sub, 'menu', this);
                }
            }
            else {
                if (sub) {
                    _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(sub, 'item', item);
                }
            }
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.menu.dropdown.shown');
        };
        // Init dropdown popper(new)
        this.initDropdownPopper = (item, sub) => {
            // Setup popper instance
            let reference;
            const attach = this._getItemOption(item, 'attach');
            if (attach) {
                if (attach === 'parent') {
                    reference = item.parentNode;
                }
                else {
                    reference = document.querySelector(attach);
                }
            }
            else {
                reference = item;
            }
            if (reference) {
                const popper = (0,_popperjs_core__WEBPACK_IMPORTED_MODULE_1__.createPopper)(reference, sub, this._getDropdownPopperConfig(item));
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(item, 'popper', popper);
            }
        };
        // Hide item dropdown
        this._hideDropdown = (item) => {
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.menu.dropdown.hide') === false) {
                return;
            }
            const sub = this._getItemSubElement(item);
            if (sub) {
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(sub, 'z-index', '');
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(sub, 'width', '');
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(sub, 'height', '');
            }
            item.classList.remove('show');
            item.classList.remove('menu-dropdown');
            if (sub) {
                sub.classList.remove('show');
            }
            // Append the sub back to it's parent
            if (this._getItemOption(item, 'overflow') === true) {
                if (item.classList.contains('menu-item')) {
                    if (sub) {
                        item.appendChild(sub);
                    }
                }
                else {
                    (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.insertAfterElement)(this.element, item);
                }
                if (sub) {
                    _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.remove(item, 'sub');
                    _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.remove(sub, 'item');
                    _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.remove(sub, 'menu');
                }
            }
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.has(item, 'popper') === true) {
                // @ts-ignore
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(item, 'popper').destroy();
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.remove(item, 'popper');
            }
            // Destroy popper(new)
            this.destroyDropdownPopper(item);
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.menu.dropdown.hidden');
        };
        // Destroy dropdown popper(new)
        this.destroyDropdownPopper = (item) => {
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.has(item, 'popper') === true) {
                // @ts-ignore
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(item, 'popper').destroy();
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.remove(item, 'popper');
            }
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.menu.dropdown.hidden');
        };
        this._showAccordion = (item) => {
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.menu.accordion.show') === false) {
                return;
            }
            if (this.options.accordion.expand === false) {
                this._hideAccordions(item);
            }
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.has(item, 'popper') === true) {
                this._hideDropdown(item);
            }
            item.classList.add('hover'); // updateWW
            item.classList.add('showing');
            const subElement = this._getItemSubElement(item);
            if (subElement) {
                const sub = subElement;
                (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.slideDown)(sub, this.options.accordion.slideSpeed, () => {
                    item.classList.remove('showing');
                    item.classList.add('show');
                    sub.classList.add('show');
                    _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.menu.accordion.shown');
                });
            }
        };
        this._hideAccordion = (item) => {
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.menu.accordion.hide') === false) {
                return;
            }
            const sub = this._getItemSubElement(item);
            item.classList.add('hiding');
            if (sub) {
                (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.slideUp)(sub, this.options.accordion.slideSpeed, () => {
                    item.classList.remove('hiding');
                    item.classList.remove('show');
                    sub.classList.remove('show');
                    item.classList.remove('hover'); // update
                    _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.menu.accordion.hidden');
                });
            }
        };
        // Hide all shown accordions of item
        this._hideAccordions = (item) => {
            const itemsToHide = this.element.querySelectorAll('.show[data-kt-menu-trigger]');
            if (itemsToHide && itemsToHide.length > 0) {
                for (var i = 0, len = itemsToHide.length; i < len; i++) {
                    const itemToHide = itemsToHide[i];
                    if (this._getItemSubType(itemToHide) === 'accordion' &&
                        itemToHide !== item &&
                        item.contains(itemToHide) === false &&
                        itemToHide.contains(item) === false) {
                        this._hideAccordion(itemToHide);
                    }
                }
            }
        };
        // Event Handlers
        // Reset item state classes if item sub type changed
        this._reset = (item) => {
            if (this._hasItemSub(item) === false) {
                return;
            }
            const sub = this._getItemSubElement(item);
            // Reset sub state if sub type is changed during the window resize
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.has(item, 'type') && _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(item, 'type') !== this._getItemSubType(item)) {
                // updated
                item.classList.remove('hover');
                item.classList.remove('show');
                item.classList.remove('show');
                if (sub) {
                    sub.classList.remove('show');
                }
            } // updated
        };
        // TODO: not done
        this._destroy = () => { };
        // Update all item state classes if item sub type changed
        this._update = () => {
            const items = this.element.querySelectorAll('.menu-item[data-kt-menu-trigger]');
            items.forEach((el) => this._reset(el));
        };
        // Hide item sub
        this._hide = (item) => {
            if (!item) {
                return;
            }
            if (this._isItemSubShown(item) === false) {
                return;
            }
            if (this._getItemSubType(item) === 'dropdown') {
                this._hideDropdown(item);
            }
            else if (this._getItemSubType(item) === 'accordion') {
                this._hideAccordion(item);
            }
        };
        // Show item sub
        this._show = (item) => {
            if (!item) {
                return;
            }
            if (this._isItemSubShown(item) === true) {
                return;
            }
            if (this._getItemSubType(item) === 'dropdown') {
                this._showDropdown(item); // // show current dropdown
            }
            else if (this._getItemSubType(item) === 'accordion') {
                this._showAccordion(item);
            }
            // Remember last submenu type
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(item, 'type', this._getItemSubType(item)); // updated
        };
        // Toggle item sub
        this._toggle = (item) => {
            if (!item) {
                return;
            }
            if (this._isItemSubShown(item) === true) {
                this._hide(item);
            }
            else {
                this._show(item);
            }
        };
        // Mouseout handle
        this._mouseout = (element, e) => {
            const item = this._getItemElement(element);
            if (!item) {
                return;
            }
            if (this._getItemOption(item, 'trigger') !== 'hover') {
                return;
            }
            const timeout = setTimeout(() => {
                if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(item, 'hover') === '1') {
                    this._hide(item);
                }
            }, this.options.dropdown.hoverTimeout);
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(item, 'hover', '1');
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(item, 'timeout', timeout);
        };
        // Mouseover handle
        this._mouseover = (element, e) => {
            const item = this._getItemElement(element);
            if (!item) {
                return;
            }
            if (this._getItemOption(item, 'trigger') !== 'hover') {
                return;
            }
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(item, 'hover') === '1') {
                const timeout = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(item, 'timeout');
                if (timeout) {
                    clearTimeout(timeout);
                }
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.remove(item, 'hover');
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.remove(item, 'timeout');
            }
            this._show(item);
        };
        // Dismiss handler
        this._dismiss = (element, e) => {
            const item = this._getItemElement(element);
            if (!item) {
                return;
            }
            const items = this._getItemChildElements(item);
            //if ( item !== null && _getItemOption(item, 'trigger') === 'click' &&  _getItemSubType(item) === 'dropdown' ) {
            const itemSubType = this._getItemSubType(item);
            if (item !== null && itemSubType === 'dropdown') {
                this._hide(item); // hide items dropdown
                // Hide all child elements as well
                if (items.length > 0) {
                    for (let i = 0, len = items.length; i < len; i++) {
                        //if ( _getItemOption(item, 'trigger') === 'click' &&  _getItemSubType(item) === 'dropdown' ) {
                        if (items[i] !== null && this._getItemSubType(items[i]) === 'dropdown') {
                            this._hide(items[i]);
                        }
                    }
                }
            }
        };
        // Link handler
        this._link = (element, e) => {
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.menu.link.click') === false) {
                return;
            }
            // Dismiss all shown dropdowns
            MenuComponent.hideDropdowns(undefined);
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.menu.link.clicked');
        };
        this._click = (element, e) => {
            e.preventDefault();
            const item = this._getItemElement(element);
            if (item) {
                if (this._getItemOption(item, 'trigger') !== 'click') {
                    return;
                }
                if (this._getItemOption(item, 'toggle') === false) {
                    this._show(item);
                }
                else {
                    this._toggle(item);
                }
            }
        };
        ///////////////////////
        // ** Public API  ** //
        ///////////////////////
        this.click = (element, e) => {
            return this._click(element, e);
        };
        this.link = (element, e) => {
            return this._link(element, e);
        };
        this.dismiss = (element, e) => {
            return this._dismiss(element, e);
        };
        this.mouseover = (element, e) => {
            return this._mouseover(element, e);
        };
        this.mouseout = (element, e) => {
            return this._mouseout(element, e);
        };
        // General Methods
        this.getItemTriggerType = (item) => {
            return this._getItemOption(item, 'trigger');
        };
        this.getItemSubType = (element) => {
            return this._getItemSubType(element);
        };
        this.show = (item) => {
            return this._show(item);
        };
        this.hide = (item) => {
            return this._hide(item);
        };
        this.reset = (item) => {
            return this._reset(item);
        };
        this.update = () => {
            return this._update();
        };
        this.getElement = () => {
            return this.element;
        };
        this.getItemLinkElement = (item) => {
            return this._getItemLinkElement(item);
        };
        this.getItemToggleElement = (item) => {
            return this._getItemToggleElement(item);
        };
        this.getItemSubElement = (item) => {
            return this._getItemSubElement(item);
        };
        this.getItemParentElements = (item) => {
            return this._getItemParentElements(item);
        };
        this.isItemSubShown = (item) => {
            return this._isItemSubShown(item);
        };
        this.isItemParentShown = (item) => {
            return this._isItemParentShown(item);
        };
        this.getTriggerElement = () => {
            return this.triggerElement;
        };
        this.isItemDropdownPermanent = (item) => {
            return this._isItemDropdownPermanent(item);
        };
        // Accordion Mode Methods
        this.hideAccordions = (item) => {
            return this._hideAccordions(item);
        };
        // Event API
        this.on = (name, handler) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.on(this.element, name, handler);
        };
        this.one = (name, handler) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.one(this.element, name, handler);
        };
        this.off = (name, handlerId) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.off(this.element, name, handlerId);
        };
        this.element = _element;
        this.options = Object.assign(defaultMenuOptions, options);
        this.instanceUid = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getUniqueIdWithPrefix)('menu');
        // this.element.setAttribute('data-kt-menu', 'true')
        this._setTriggerElement();
        this._update();
        _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(this.element, 'menu', this);
        return this;
    }
}
// public static methods
// Get KTMenu instance by element
MenuComponent.getInstance = (element) => {
    // Element has menu DOM reference in it's DATA storage
    const elementMenu = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(element, 'menu');
    if (elementMenu) {
        return elementMenu;
    }
    // Element has .menu parent
    const menu = element.closest('.menu');
    if (menu) {
        const menuData = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(menu, 'menu');
        if (menuData) {
            return menuData;
        }
    }
    // Element has a parent with DOM reference to .menu in it's DATA storage
    if (element.classList.contains('menu-link')) {
        const sub = element.closest('.menu-sub');
        if (sub) {
            const subMenu = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(sub, 'menu');
            if (subMenu) {
                return subMenu;
            }
        }
    }
    return null;
};
// Hide all dropdowns and skip one if provided
MenuComponent.hideDropdowns = (skip) => {
    const items = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]');
    if (items && items.length > 0) {
        for (let i = 0, len = items.length; i < len; i++) {
            const item = items[i];
            const menu = MenuComponent.getInstance(item);
            if (menu && menu.getItemSubType(item) === 'dropdown') {
                if (skip) {
                    if (
                    // @ts-ignore
                    menu.getItemSubElement(item).contains(skip) === false &&
                        item.contains(skip) === false &&
                        item !== skip) {
                        menu.hide(item);
                    }
                }
                else {
                    menu.hide(item);
                }
            }
        }
    }
};
MenuComponent.updateDropdowns = () => {
    const items = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]');
    if (items && items.length > 0) {
        for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.has(item, 'popper')) {
                // @ts-ignore
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(item, 'popper').forceUpdate();
            }
        }
    }
};
// Global handlers
MenuComponent.createInstances = (selector) => {
    // Initialize menus
    document.querySelectorAll(selector).forEach((el) => {
        const menuItem = el;
        let menuInstance = MenuComponent.getInstance(menuItem);
        if (!menuInstance) {
            menuInstance = new MenuComponent(el, defaultMenuOptions);
        }
    });
};
MenuComponent.initGlobalHandlers = () => {
    // Dropdown handler
    document.addEventListener('click', (e) => {
        const menuItems = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]');
        if (menuItems && menuItems.length > 0) {
            for (let i = 0; i < menuItems.length; i++) {
                const item = menuItems[i];
                const menuObj = MenuComponent.getInstance(item);
                if (menuObj && menuObj.getItemSubType(item) === 'dropdown') {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const menu = menuObj.getElement();
                    const sub = menuObj.getItemSubElement(item);
                    if (item === e.target || item.contains(e.target)) {
                        continue;
                    }
                    if (sub && (sub === e.target || sub.contains(e.target))) {
                        continue;
                    }
                    menuObj.hide(item);
                }
            }
        }
    });
    // Sub toggle handler
    _utils_index__WEBPACK_IMPORTED_MODULE_0__.DOMEventHandlerUtil.on(document.body, '.menu-item[data-kt-menu-trigger] > .menu-link, [data-kt-menu-trigger]:not(.menu-item):not([data-kt-menu-trigger="auto"])', 'click', function (e) {
        const menu = MenuComponent.getInstance(this);
        if (menu) {
            return menu.click(this, e);
        }
    });
    // // Link handler
    _utils_index__WEBPACK_IMPORTED_MODULE_0__.DOMEventHandlerUtil.on(document.body, '.menu-item:not([data-kt-menu-trigger]) > .menu-link', 'click', function (e) {
        e.stopPropagation();
        const menu = MenuComponent.getInstance(this);
        if (menu && menu.link) {
            return menu.link(this, e);
        }
    });
    // Dismiss handler
    _utils_index__WEBPACK_IMPORTED_MODULE_0__.DOMEventHandlerUtil.on(document.body, '[data-kt-menu-dismiss="true"]', 'click', function (e) {
        const menu = MenuComponent.getInstance(this);
        if (menu) {
            return menu.dismiss(this, e);
        }
    });
    // Mouseover handler
    _utils_index__WEBPACK_IMPORTED_MODULE_0__.DOMEventHandlerUtil.on(document.body, '[data-kt-menu-trigger], .menu-sub', 'mouseover', function (e) {
        const menu = MenuComponent.getInstance(this);
        if (menu && menu.getItemSubType(this) === 'dropdown') {
            return menu.mouseover(this, e);
        }
    });
    // Mouseout handler
    _utils_index__WEBPACK_IMPORTED_MODULE_0__.DOMEventHandlerUtil.on(document.body, '[data-kt-menu-trigger], .menu-sub', 'mouseout', function (e) {
        const menu = MenuComponent.getInstance(this);
        if (menu && menu.getItemSubType(this) === 'dropdown') {
            return menu.mouseout(this, e);
        }
    });
    // Resize handler
    window.addEventListener('resize', () => {
        let timer;
        (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.throttle)(timer, () => {
            // Locate and update Drawer instances on window resize
            const elements = document.querySelectorAll('[data-kt-menu="true"]');
            elements.forEach((el) => {
                const menu = MenuComponent.getInstance(el);
                if (menu) {
                    menu.update();
                }
            });
        }, 200);
    });
};
MenuComponent.bootstrap = () => {
    MenuComponent.initGlobalHandlers();
    MenuComponent.createInstances('[data-kt-menu="true"]');
};
MenuComponent.reinitialization = () => {
    MenuComponent.createInstances('[data-kt-menu="true"]');
};
MenuComponent.createInsance = (selector, options = defaultMenuOptions) => {
    const element = document.body.querySelector(selector);
    if (!element) {
        return;
    }
    const item = element;
    let menu = MenuComponent.getInstance(item);
    if (!menu) {
        menu = new MenuComponent(item, options);
    }
    return menu;
};



/***/ }),

/***/ 92817:
/*!************************************************************!*\
  !*** ./src/app/theme/helper/components/SearchComponent.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent),
/* harmony export */   "defaultSearchOptions": () => (/* binding */ defaultSearchOptions),
/* harmony export */   "defaultSearchQueires": () => (/* binding */ defaultSearchQueires)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils/index */ 47590);
/* harmony import */ var _MenuComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuComponent */ 47570);


const defaultSearchOptions = {
    minLength: 2,
    keypress: true,
    enter: true,
    layout: 'menu',
    showOnFocus: true, // Always show menu on input focus
};
const defaultSearchQueires = {
    componentName: 'search',
    instanseQuery: '[data-kt-search]',
    attrQuery: 'data-kt-search-',
};
class SearchComponent {
    constructor(_element, _options, _queries) {
        this.processing = false;
        this._getElement = (name) => {
            return this.element.querySelector('[data-kt-search-element="' + name + '"]');
        };
        // Get option
        this.getOption = (name) => {
            const attr = this.element.getAttribute(`${this.queries.attrQuery}${name}`);
            if (attr) {
                let value = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByBreakpoint)(attr);
                if (value !== null && String(value) === 'true') {
                    return true;
                }
                else if (value !== null && String(value) === 'false') {
                    return false;
                }
                return value;
            }
            else {
                const optionName = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.stringSnakeToCamel)(name);
                const option = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getObjectPropertyValueByKey)(this.options, optionName);
                if (option) {
                    return (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByBreakpoint)(option);
                }
                else {
                    return null;
                }
            }
        };
        // Check if responsive form mode is enabled
        this.getResponsiveFormMode = () => {
            const responsive = this.getOption('responsive');
            const width = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getViewPort)().width;
            if (!responsive) {
                return null;
            }
            const breakpoint = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getBreakpoint)(responsive);
            let breakPointNum = -1;
            if (!breakpoint) {
                breakPointNum = parseInt(responsive);
            }
            else {
                breakPointNum = +breakpoint;
            }
            if (width < breakPointNum) {
                return 'on';
            }
            else {
                return 'off';
            }
        };
        // Focus
        this.focus = () => {
            this.element.classList.add('focus');
            if (this.getOption('show-on-focus') === true ||
                this.inputElement.value.length >= this.options.minLength) {
                this.show();
            }
        };
        // Blur
        this.blur = () => {
            this.element.classList.remove('focus');
        };
        // Enter
        this.enter = (e) => {
            const key = e.charCode || e.keyCode || 0;
            if (key === 13) {
                e.preventDefault();
                this.search();
            }
        };
        // Input
        this.input = () => {
            if (this.getOption('min-length')) {
                const minLength = parseInt(this.getOption('min-length'));
                if (this.inputElement.value.length >= minLength) {
                    this.search();
                }
                else if (this.inputElement.value.length === 0) {
                    this.clear();
                }
            }
        };
        ///////////////////////
        // ** Public API  ** //
        ///////////////////////
        // Update
        this.update = () => {
            // Handle responsive form
            if (this.layout === 'menu') {
                let responsiveFormMode = this.getResponsiveFormMode();
                if (responsiveFormMode === 'on' && !this.contentElement.contains(this.formElement)) {
                    this.contentElement.prepend(this.formElement);
                    this.formElement.classList.remove('d-none');
                }
                else if (responsiveFormMode === 'off' && this.contentElement.contains(this.formElement)) {
                    this.element.prepend(this.formElement);
                    this.formElement.classList.add('d-none');
                }
            }
        };
        // Show menu
        this.show = () => {
            if (this.menuObject) {
                this.update();
                this.menuObject.show(this.element);
            }
        };
        // Hide menu
        this.hide = () => {
            if (this.menuObject) {
                this.update();
                this.menuObject.hide(this.element);
            }
        };
        // Search
        this.search = () => {
            if (!this.processing) {
                // Show search spinner
                if (this.spinnerElement) {
                    this.spinnerElement.classList.remove('d-none');
                }
                // Hide search clear button
                if (this.clearElement) {
                    this.clearElement.classList.add('d-none');
                }
                // Hide search toolbar
                if (this.toolbarElement) {
                    this.toolbarElement.classList.add('d-none');
                }
                // Focus input
                this.inputElement.focus();
                this.processing = true;
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.search.process', this);
            }
        };
        // Complete
        this.complete = () => {
            if (this.spinnerElement) {
                this.spinnerElement.classList.add('d-none');
            }
            // Show search toolbar
            if (this.clearElement) {
                this.clearElement.classList.remove('d-none');
            }
            if (this.inputElement.value.length === 0) {
                this.clear();
            }
            // Focus input
            this.inputElement.focus();
            this.show();
            this.processing = false;
        };
        // Clear
        this.clear = () => {
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.search.clear') === false) {
                return;
            }
            // Clear and focus input
            this.inputElement.value = '';
            this.inputElement.focus();
            // Hide clear icon
            if (this.clearElement) {
                this.clearElement.classList.add('d-none');
            }
            // Show search toolbar
            if (this.toolbarElement) {
                this.toolbarElement.classList.remove('d-none');
            }
            // Hide menu
            if (this.getOption('show-on-focus') === false) {
                this.hide();
            }
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.search.cleared');
        };
        this.isProcessing = () => {
            return this.processing;
        };
        this.getQuery = () => {
            return this.inputElement.value;
        };
        this.getMenu = () => {
            return this.menuObject;
        };
        this.getFormElement = () => {
            return this.formElement;
        };
        // Event API
        this.on = (name, handler) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.on(this.element, name, handler);
        };
        this.one = (name, handler) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.one(this.element, name, handler);
        };
        this.off = (name, handlerId) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.off(this.element, name, handlerId);
        };
        // Variables
        this.options = Object.assign(defaultSearchOptions, _options);
        this.queries = _queries;
        // Elements
        this.element = _element;
        this.contentElement = this._getElement('content');
        this.formElement = this._getElement('form');
        this.inputElement = this._getElement('input');
        this.spinnerElement = this._getElement('spinner');
        this.clearElement = this._getElement('clear');
        this.toggleElement = this._getElement('toggle');
        this.submitElement = this._getElement('submit');
        this.toolbarElement = this._getElement('toolbar');
        this.resultsElement = this._getElement('results');
        this.suggestionElement = this._getElement('suggestion');
        this.emptyElement = this._getElement('empty');
        // Layout
        this.layout = this.getOption('layout');
        if (this.layout === 'menu') {
            this.menuObject = new _MenuComponent__WEBPACK_IMPORTED_MODULE_1__.MenuComponent(this.contentElement, _MenuComponent__WEBPACK_IMPORTED_MODULE_1__.defaultMenuOptions);
        }
        // Update
        this.update();
        // Event Handlers
        this.handlers();
        _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(this.element, this.queries.componentName, this);
    }
    handlers() {
        const context = this;
        // Focus
        this.inputElement.addEventListener('focus', this.focus);
        // Blur
        this.inputElement.addEventListener('blur', this.blur);
        // Keypress
        if (this.getOption('keypress') === true) {
            this.inputElement.addEventListener('input', this.input);
        }
        // Submit
        if (this.submitElement) {
            this.submitElement.addEventListener('click', this.search);
        }
        // Enter
        if (this.getOption('enter') === true) {
            this.inputElement.addEventListener('keypress', this.enter);
        }
        // Clear
        if (this.clearElement) {
            this.clearElement.addEventListener('click', this.clear);
        }
        // Menu
        if (this.menuObject) {
            // Toggle menu
            if (this.toggleElement) {
                this.toggleElement.addEventListener('click', this.show);
                this.menuObject.on('kt.menu.dropdown.show', function () {
                    // @ts-ignore
                    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.isVisibleElement)(context.toggleElement)) {
                        // @ts-ignore
                        context.toggleElement.classList.add('active');
                        // @ts-ignore
                        context.toggleElement.classList.add('show');
                    }
                });
                this.menuObject.on('kt.menu.dropdown.hide', function () {
                    // @ts-ignore
                    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.isVisibleElement)(context.toggleElement)) {
                        // @ts-ignore
                        context.toggleElement.classList.remove('active');
                        // @ts-ignore
                        context.toggleElement.classList.remove('show');
                    }
                });
            }
            this.menuObject.on('kt.menu.dropdown.shown', function () {
                // @ts-ignore
                context.inputElement.focus();
            });
        }
        // Window resize handling
        window.addEventListener('resize', () => {
            let timer;
            (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.throttle)(timer, () => {
                this.update();
            }, 200);
        });
    }
    getInputElement() {
        return this.inputElement;
    }
    getContentElement() {
        return this.contentElement;
    }
    getElement() {
        return this.element;
    }
}
// Static methods
SearchComponent.getInstance = (el, componentName = defaultSearchQueires.componentName) => {
    const Search = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(el, componentName);
    if (Search) {
        return Search;
    }
    return null;
};
SearchComponent.createInstances = (selector = defaultSearchQueires.instanseQuery, options = defaultSearchOptions, queries = defaultSearchQueires) => {
    const elements = document.body.querySelectorAll(selector);
    elements.forEach((el) => {
        const item = el;
        let Search = SearchComponent.getInstance(item);
        if (!Search) {
            Search = new SearchComponent(item, options, queries);
        }
    });
};
SearchComponent.createInsance = (selector = defaultSearchQueires.instanseQuery, options = defaultSearchOptions, queries = defaultSearchQueires) => {
    const element = document.body.querySelector(selector);
    if (!element) {
        return;
    }
    const item = element;
    let Search = SearchComponent.getInstance(item);
    if (!Search) {
        Search = new SearchComponent(item, options, queries);
    }
    return Search;
};
SearchComponent.bootstrap = (selector = defaultSearchQueires.instanseQuery) => {
    SearchComponent.createInstances(selector);
};
SearchComponent.reinitialization = (selector = defaultSearchQueires.instanseQuery) => {
    SearchComponent.createInstances(selector);
};



/***/ }),

/***/ 38004:
/*!*************************************************************!*\
  !*** ./src/app/theme/helper/components/_CookieComponent.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookieComponent": () => (/* binding */ CookieComponent)
/* harmony export */ });
/* eslint-disable no-useless-escape */
// DOCS: https://javascript.info/cookie
class CookieComponent {
    /**
     * Returns the cookie with the given name, or undefined if not found
     *
     * @param  {string} name - cookie name
     * @returns string | null
     */
    static get(name) {
        let matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    /**
     * Please note that a cookie value is encoded,
     * so getCookie uses a built-in decodeURIComponent function to decode it.
     *
     * @param  {string} name - cookie name
     * @param  {string | number | boolean} value - cookie value
     * @param  {any} cookieOptions - cookie options
     * @returns void
     */
    static set(name, value, cookieOptions) {
        const options = Object.assign({ path: '/' }, cookieOptions);
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }
        let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        for (let optionKey in options) {
            updatedCookie += '; ' + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += '=' + optionValue;
            }
        }
        document.cookie = updatedCookie;
    }
    /**
     * To delete a cookie, we can call it with a negative expiration date
     *
     * @param  {string} name
     */
    static delete(name) {
        CookieComponent.set(name, '', {
            'max-age': -1,
        });
    }
}


/***/ }),

/***/ 97988:
/*!*************************************************************!*\
  !*** ./src/app/theme/helper/components/_DrawerComponent.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawerComponent": () => (/* binding */ DrawerComponent),
/* harmony export */   "DrawerStore": () => (/* binding */ DrawerStore),
/* harmony export */   "defaultDrawerOptions": () => (/* binding */ defaultDrawerOptions)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils/index */ 47590);
var _a;

class DrawerStore {
    static set(instanceId, drawerComponentObj) {
        if (DrawerStore.has(instanceId)) {
            return;
        }
        DrawerStore.store.set(instanceId, drawerComponentObj);
    }
    static get(instanceId) {
        if (!DrawerStore.has(instanceId)) {
            return;
        }
        return DrawerStore.store.get(instanceId);
    }
    static remove(instanceId) {
        if (!DrawerStore.has(instanceId)) {
            return;
        }
        DrawerStore.store.delete(instanceId);
    }
    static has(instanceId) {
        return DrawerStore.store.has(instanceId);
    }
    static getAllInstances() {
        return DrawerStore.store;
    }
}
DrawerStore.store = new Map();
const defaultDrawerOptions = {
    overlay: true,
    baseClass: 'drawer',
    overlayClass: 'drawer-overlay',
    direction: 'end',
};
class DrawerComponent {
    constructor(_element, options) {
        this.overlayElement = null;
        this.toggleElement = null;
        this.name = '';
        this.shown = false;
        this.lastWidth = 0;
        this.closeElement = null;
        this._handlers = () => {
            const togglers = this._getOption('toggle');
            const closers = this._getOption('close');
            if (togglers !== null && togglers.length > 0) {
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.DOMEventHandlerUtil.on(document.body, togglers, 'click', (e) => {
                    e.preventDefault();
                    this.toggleElement = document.getElementById(togglers);
                    this._toggle();
                });
            }
            if (closers !== null && closers.length > 0) {
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.DOMEventHandlerUtil.on(document.body, closers, 'click', (e) => {
                    e.preventDefault();
                    this.closeElement = document.getElementById(closers);
                    this._hide();
                });
            }
        };
        this._update = () => {
            const width = String(this._getOption('width'));
            const direction = String(this._getOption('direction'));
            // Reset state
            const hasBaseClass = this.element.classList.contains(`${this.options.baseClass}-on`);
            const bodyCanvasAttr = String(document.body.getAttribute(`data-kt-drawer-${this.name}-`));
            if (hasBaseClass === true && bodyCanvasAttr === 'on') {
                this.shown = true;
            }
            else {
                this.shown = false;
            }
            // Activate/deactivate
            if (this._getOption('activate') === true) {
                this.element.classList.add(this.options.baseClass);
                this.element.classList.add(`${this.options.baseClass}-${direction}`);
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(this.element, 'width', width, true);
                this.lastWidth = parseInt(width);
            }
            else {
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(this.element, 'width', '');
                this.element.classList.remove(this.options.baseClass);
                this.element.classList.remove(`${this.options.baseClass}-${direction}`);
                this._hide();
            }
        };
        this._getOption = (name) => {
            const attr = this.element.getAttribute(`data-kt-drawer-${name}`);
            if (attr) {
                let value = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByBreakpoint)(attr);
                if (value !== null && String(value) === 'true') {
                    return true;
                }
                else {
                    if (value !== null && String(value) === 'false') {
                        return false;
                    }
                }
                return value;
            }
            else {
                const optionName = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.stringSnakeToCamel)(name);
                const option = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getObjectPropertyValueByKey)(this.options, optionName);
                if (option) {
                    return (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByBreakpoint)(option);
                }
                else {
                    return null;
                }
            }
        };
        this._toggle = () => {
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.drawer.toggle') === false) {
                return;
            }
            if (this.shown) {
                this._hide();
            }
            else {
                this._show();
            }
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.drawer.toggled');
        };
        this._hide = () => {
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.drawer.hide') === false) {
                return;
            }
            this.shown = false;
            this._deleteOverlay();
            document.body.removeAttribute(`data-kt-drawer-${this.name}`);
            document.body.removeAttribute(`data-kt-drawer`);
            this.element.classList.remove(`${this.options.baseClass}-on`);
            if (this.toggleElement != null) {
                this.toggleElement.classList.remove('active');
            }
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.drawer.after.hidden');
        };
        this._show = () => {
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.drawer.show') === false) {
                return;
            }
            this.shown = true;
            this._createOverlay();
            document.body.setAttribute(`data-kt-drawer-${this.name}`, 'on');
            document.body.setAttribute('data-kt-drawer', 'on');
            this.element.classList.add(`${this.options.baseClass}-on`);
            if (this.toggleElement !== null) {
                this.toggleElement.classList.add('active');
            }
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.drawer.shown');
        };
        this._createOverlay = () => {
            if (this._getOption('overlay') === true) {
                this.overlayElement = document.createElement('DIV');
                const elementZIndex = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(this.element, 'z-index');
                if (elementZIndex) {
                    const overlayZindex = parseInt(elementZIndex) - 1;
                    _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(this.overlayElement, 'z-index', overlayZindex); // update
                }
                document.body.append(this.overlayElement);
                const overlayClassOption = this._getOption('overlay-class');
                if (overlayClassOption) {
                    this.overlayElement.classList.add(overlayClassOption.toString());
                }
                this.overlayElement.addEventListener('click', (e) => {
                    e.preventDefault();
                    this._hide();
                });
            }
        };
        this._deleteOverlay = () => {
            if (this.overlayElement !== null && this.overlayElement.parentNode) {
                this.overlayElement.parentNode.removeChild(this.overlayElement);
            }
        };
        this._getDirection = () => {
            return String(this._getOption('direction')) === 'left' ? 'left' : 'right';
        };
        this._getWidth = () => {
            let width = this._getOption('width');
            if (width && width === 'auto') {
                width = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(this.element, 'width');
            }
            return width;
        };
        ///////////////////////
        // ** Public API  ** //
        ///////////////////////
        this.toggle = () => {
            this._toggle();
        };
        this.show = () => {
            this._show();
        };
        this.hide = () => {
            this._hide();
        };
        this.isShown = () => {
            return this.shown;
        };
        this.update = () => {
            this._update();
        };
        this.goElement = () => {
            return this.element;
        };
        // Event API
        this.on = (name, handler) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.on(this.element, name, handler);
        };
        this.one = (name, handler) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.one(this.element, name, handler);
        };
        this.off = (name, handerId) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.off(this.element, name, handerId);
        };
        this.trigger = (name, event) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, name, event);
        };
        this.element = _element;
        this.options = Object.assign(defaultDrawerOptions, options);
        this.instanceUid = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getUniqueIdWithPrefix)('drawer');
        this.overlayElement = null;
        this.name = this.element.getAttribute('data-kt-drawer-name') || '';
        this.shown = false;
        this.toggleElement = null;
        // Event Handlers
        this._handlers();
        // Update Instance
        this._update();
        // Bind Instance
        DrawerStore.set(this.element.id, this);
    }
    // Create Instances
    static createInstances(selector) {
        const elements = document.body.querySelectorAll(selector);
        elements.forEach((element) => {
            const item = element;
            let drawer = DrawerComponent.getInstance(item.id);
            if (!drawer) {
                drawer = new DrawerComponent(item, defaultDrawerOptions);
            }
            drawer.element = item;
            drawer.hide();
        });
    }
    // Global Initialization
    static initGlobalHandlers() {
        // Window Resize Handling
        window.addEventListener('resize', function () {
            let timer;
            (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.throttle)(timer, () => {
                // Locate and update Drawer instances on window resize
                const elements = document.body.querySelectorAll('[data-kt-drawer="true"]');
                elements.forEach((el) => {
                    const item = el;
                    const instance = DrawerComponent.getInstance(item.id);
                    if (instance) {
                        instance.element = item;
                        instance.update();
                    }
                });
            }, 200);
        });
    }
}
_a = DrawerComponent;
// Static methods
DrawerComponent.hasInstace = (elementId) => {
    return DrawerStore.has(elementId);
};
DrawerComponent.getInstance = (elementId) => {
    return DrawerStore.get(elementId);
};
DrawerComponent.hideAll = () => {
    const oldInstances = DrawerStore.getAllInstances();
    oldInstances.forEach((dr) => {
        dr.hide();
    });
};
DrawerComponent.updateAll = () => {
    const oldInstances = DrawerStore.getAllInstances();
    oldInstances.forEach((dr) => {
        dr.update();
    });
};
// Dismiss instances
DrawerComponent.handleDismiss = () => {
    // External drawer toggle handler
    _utils_index__WEBPACK_IMPORTED_MODULE_0__.DOMEventHandlerUtil.on(document.body, '[data-kt-drawer-dismiss="true"]', 'click', () => {
        /* @ts-ignore */
        const element = _a.closest('[data-kt-drawer="true"]');
        if (element) {
            const drawer = DrawerComponent.getInstance(element);
            if (drawer && drawer.isShown()) {
                drawer.hide();
            }
        }
    });
};
DrawerComponent.bootstrap = () => {
    DrawerComponent.createInstances('[data-kt-drawer="true"]');
    DrawerComponent.initGlobalHandlers();
    DrawerComponent.handleDismiss();
};
DrawerComponent.reinitialization = () => {
    DrawerComponent.createInstances('[data-kt-drawer="true"]');
    DrawerComponent.hideAll();
    DrawerComponent.updateAll();
    DrawerComponent.handleDismiss();
};



/***/ }),

/***/ 27781:
/*!***************************************************************!*\
  !*** ./src/app/theme/helper/components/_FeedbackComponent.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackComponent": () => (/* binding */ FeedbackComponent),
/* harmony export */   "defaultFeedbackOptions": () => (/* binding */ defaultFeedbackOptions)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils/index */ 47590);

const defaultFeedbackOptions = {
    width: 100,
    placement: 'top-center',
    content: '',
    type: 'popup',
};
class FeedbackComponent {
    constructor(_element, options) {
        this._handlers = () => {
            this.element.addEventListener('click', (e) => {
                e.preventDefault();
                this._go();
            });
        };
        this._go = () => { };
        this.showPopup = () => {
            this.element = document.createElement('DIV');
            this.element.classList.add('feedback feedback-popup');
            this.element.innerHTML = this.options.content || '';
            if (this.options.placement === 'top-center') {
                this.setPopupTopCenterPosition();
            }
            document.body.appendChild(this.element);
            this.element.classList.add('feedback-shown');
            this.shown = true;
        };
        this.setPopupTopCenterPosition = () => {
            var _a;
            const width = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByBreakpoint)(((_a = this.options.width) === null || _a === void 0 ? void 0 : _a.toString()) || '0');
            const height = _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.get(this.element, 'height');
            this.element.classList.add('feedback-top-center');
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(this.element, 'width', width);
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(this.element, 'left', '50%');
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(this.element, 'top', '-' + height);
        };
        this.hidePopup = () => {
            this.element.remove();
        };
        ///////////////////////
        // ** Public API  ** //
        ///////////////////////
        this.show = () => {
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.feedback.show') === false) {
                return;
            }
            if (this.options.type === 'popup') {
                this.showPopup();
            }
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.feedback.shown');
            return this;
        };
        this.hide = () => {
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.feedback.hide') === false) {
                return;
            }
            if (this.options.type === 'popup') {
                this.hidePopup();
            }
            this.shown = false;
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.feedback.hidden');
            return this;
        };
        this.isShown = () => {
            return this.isShown;
        };
        this.getElement = () => {
            return this.element;
        };
        // Event API
        this.on = (name, handler) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.on(this.element, name, handler);
        };
        this.one = (name, handler) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.one(this.element, name, handler);
        };
        this.off = (name, handerId) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.off(this.element, name, handerId);
        };
        this.trigger = (name, event) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, name, event);
        };
        this.element = _element;
        this.options = Object.assign(defaultFeedbackOptions, options);
        this.instanceUid = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getUniqueIdWithPrefix)('feedback');
        this.shown = false;
        // Event handlers
        this._handlers(); // will add in the show popup
        _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(this.element, 'feedback', this);
    }
    // Create Instances
    static createInstances(selector) {
        throw new Error('not implemented');
    }
    // Static methods
    static hasInstace(element) {
        throw new Error('not implemented');
    }
    static getInstance(element) {
        throw new Error('not implemented');
    }
    static bootstrap(attr = '[data-Feedback]') {
        throw new Error('not implemented');
    }
}



/***/ }),

/***/ 82486:
/*!*****************************************************************!*\
  !*** ./src/app/theme/helper/components/_ImageInputComponent.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageInputComponent": () => (/* binding */ ImageInputComponent),
/* harmony export */   "defaultImageInputOptions": () => (/* binding */ defaultImageInputOptions),
/* harmony export */   "defaultImageInputQueires": () => (/* binding */ defaultImageInputQueires)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils/index */ 47590);

const defaultImageInputOptions = {};
const defaultImageInputQueires = {
    componentName: 'image-input',
    instanseQuery: '[data-kt-image-input]',
    inputQuery: 'input[type="file"]',
    wrapperQuery: '.image-input-wrapper',
    cancelQuery: '[data-kt-image-input-action="cancel"]',
    removeQuery: '[data-kt-image-input-action="remove"]',
    hiddenQuery: 'input[type="hidden"]',
};
class ImageInputComponent {
    constructor(_element, _options, _queries) {
        this.src = '';
        this.value = '';
        // Event Handlers
        this._change = (e) => {
            e.preventDefault();
            if (this.inputElement !== null && this.inputElement.files && this.inputElement.files[0]) {
                // Fire change event
                if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.imageinput.change', e) === false) {
                    return;
                }
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (this.wrapperElement && e.target) {
                        this.wrapperElement.style.setProperty('background-image', `url('${e.target.result}')`);
                    }
                };
                reader.readAsDataURL(this.inputElement.files[0]);
                this.element.classList.add('image-input-changed');
                this.element.classList.remove('image-input-empty');
                // Fire removed event
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.imageinput.changed', e);
            }
        };
        this._cancel = (e) => {
            e.preventDefault();
            // Fire cancel event
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.imageinput.cancel', e) === false) {
                return;
            }
            this.element.classList.remove('image-input-changed');
            this.element.classList.remove('image-input-empty');
            this.element.style.setProperty('background-image', this.src);
            if (this.inputElement) {
                this.inputElement.value = '';
            }
            if (this.hiddenElement !== null) {
                this.hiddenElement.value = '0';
            }
            // Fire canceled event
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.imageinput.canceled', e);
        };
        this._remove = (e) => {
            e.preventDefault();
            // Fire remove event
            if (_utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.imageinput.remove', e) === false) {
                return;
            }
            this.element.classList.remove('image-input-changed');
            this.element.classList.add('image-input-empty');
            if (this.wrapperElement) {
                this.wrapperElement.style.setProperty('background-image', 'none');
            }
            if (this.inputElement) {
                this.inputElement.value = '';
            }
            if (this.hiddenElement !== null) {
                this.hiddenElement.value = '1';
            }
            // Fire removed event
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.imageinput.removed', e);
        };
        // Event API
        this.on = (name, handler) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.on(this.element, name, handler);
        };
        this.one = (name, handler) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.one(this.element, name, handler);
        };
        this.off = (name, handlerId) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.off(this.element, name, handlerId);
        };
        this.trigger = (name, event) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, name, event);
        };
        // Variables
        this.options = Object.assign(defaultImageInputOptions, _options);
        this.queries = _queries;
        this.uid = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getUniqueIdWithPrefix)(this.queries.componentName);
        // Elements
        this.element = _element;
        this.inputElement = this.element.querySelector(this.queries.inputQuery);
        this.wrapperElement = this.element.querySelector(this.queries.wrapperQuery);
        this.cancelElement = this.element.querySelector(this.queries.cancelQuery);
        this.removeElement = this.element.querySelector(this.queries.removeQuery);
        this.hiddenElement = this.element.querySelector(this.queries.hiddenQuery);
        if (this.wrapperElement) {
            this.src = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(this.wrapperElement, 'backgroundImage');
        }
        // Event Handlers
        this.handlers();
        _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(this.element, this.queries.componentName, this);
    }
    handlers() {
        this.element.addEventListener('change', this._change);
        if (this.cancelElement) {
            this.cancelElement.addEventListener('click', this._cancel);
        }
        if (this.removeElement) {
            this.removeElement.addEventListener('click', this._cancel);
        }
    }
    ///////////////////////
    // ** Public API  ** //
    ///////////////////////
    getInputElement() {
        return this.inputElement;
    }
    getElement() {
        return this.element;
    }
}
// Static methods
ImageInputComponent.getInstance = (el, componentName = defaultImageInputQueires.componentName) => {
    const ImageInput = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(el, componentName);
    if (ImageInput) {
        return ImageInput;
    }
};
ImageInputComponent.createInstances = (selector = defaultImageInputQueires.instanseQuery, options = defaultImageInputOptions, queries = defaultImageInputQueires) => {
    const elements = document.body.querySelectorAll(selector);
    elements.forEach((el) => {
        const item = el;
        let ImageInput = ImageInputComponent.getInstance(item);
        if (!ImageInput) {
            ImageInput = new ImageInputComponent(item, options, queries);
        }
    });
};
ImageInputComponent.createInsance = (selector = defaultImageInputQueires.instanseQuery, options = defaultImageInputOptions, queries = defaultImageInputQueires) => {
    const element = document.body.querySelector(selector);
    if (!element) {
        return;
    }
    const item = element;
    let ImageInput = ImageInputComponent.getInstance(item);
    if (!ImageInput) {
        ImageInput = new ImageInputComponent(item, options, queries);
    }
    return ImageInput;
};
ImageInputComponent.bootstrap = (selector = defaultImageInputQueires.instanseQuery) => {
    ImageInputComponent.createInstances(selector);
};
ImageInputComponent.reinitialization = (selector = defaultImageInputQueires.instanseQuery) => {
    ImageInputComponent.createInstances(selector);
};



/***/ }),

/***/ 71740:
/*!********************************************************************!*\
  !*** ./src/app/theme/helper/components/_PasswordMeterComponent.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordMeterComponent": () => (/* binding */ PasswordMeterComponent),
/* harmony export */   "defaultPasswordMeterOptions": () => (/* binding */ defaultPasswordMeterOptions),
/* harmony export */   "defaultPasswordMeterQueires": () => (/* binding */ defaultPasswordMeterQueires)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils/index */ 47590);
/* eslint-disable array-callback-return */
/* eslint-disable no-useless-escape */

const defaultPasswordMeterOptions = {
    minLength: 8,
    checkUppercase: true,
    checkLowercase: true,
    checkDigit: true,
    checkChar: true,
    scoreHighlightClass: 'active',
};
const defaultPasswordMeterQueires = {
    componentName: 'password-meter',
    instanseQuery: '[data-kt-password-meter]',
    inputQuery: 'input[type]',
    visibilityQuery: '[data-kt-password-meter-control="visibility"]',
    highlightQuery: '[data-kt-password-meter-control="highlight"]',
};
class PasswordMeterComponent {
    constructor(_element, _options, _queries) {
        ///////////////////////
        // ** Public API  ** //
        ///////////////////////
        this.reset = () => {
            this.score = 0;
            this.highlight();
        };
        this.element = _element;
        this.options = Object.assign(defaultPasswordMeterOptions, _options);
        this.queries = _queries;
        this.score = 0;
        this.checkSteps = 5;
        // Elements
        this.inputElement = this.element.querySelector(this.queries.inputQuery);
        this.visibilityElement = this.element.querySelector(this.queries.visibilityQuery);
        this.highlightElement = this.element.querySelector(this.queries.highlightQuery);
        // Event Handlers
        this.handlers();
        _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(this.element, this.queries.componentName, this);
    }
    handlers() {
        if (this.inputElement) {
            this.inputElement.addEventListener('input', () => {
                this.check();
            });
        }
        if (this.visibilityElement) {
            this.visibilityElement.addEventListener('click', () => {
                this.visitbility();
            });
        }
    }
    visitbility() {
        if (this.visibilityElement && this.inputElement) {
            const visibleIcon = this.visibilityElement.querySelector('i:not(.d-none), .svg-icon:not(.d-none)');
            const hiddenIcon = this.visibilityElement.querySelector('i.d-none, .svg-icon.d-none');
            const typeAttr = this.inputElement.getAttribute('type') || '';
            if (typeAttr === 'password') {
                this.inputElement.setAttribute('type', 'text');
            }
            else {
                this.inputElement.setAttribute('type', 'password');
            }
            visibleIcon === null || visibleIcon === void 0 ? void 0 : visibleIcon.classList.add('d-none');
            hiddenIcon === null || hiddenIcon === void 0 ? void 0 : hiddenIcon.classList.remove('d-none');
            this.inputElement.focus();
        }
    }
    checkScore() {
        return 0;
    }
    checkLength() {
        if (this.inputElement) {
            return this.inputElement.value.length >= this.options.minLength; // 20 score
        }
        return false;
    }
    checkLowerCase() {
        const val = this.inputElement ? this.inputElement.value : '';
        return /[a-z]/.test(val); // 20 score
    }
    checkUppercase() {
        const val = this.inputElement ? this.inputElement.value : '';
        return /[A-Z]/.test(val); // 20 score
    }
    checkDigit() {
        const val = this.inputElement ? this.inputElement.value : '';
        return /[0-9]/.test(val); // 20 score
    }
    checkChar() {
        const val = this.inputElement ? this.inputElement.value : '';
        return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(val); // 20 score
    }
    getCheckScore() {
        let count = 1;
        if (this.options.checkUppercase) {
            count++;
        }
        if (this.options.checkLowercase) {
            count++;
        }
        if (this.options.checkDigit) {
            count++;
        }
        if (this.options.checkChar) {
            count++;
        }
        this.checkSteps = count;
        return 100 / this.checkSteps;
    }
    highlight() {
        const items = this.highlightElement
            ? [].slice.call(this.highlightElement.querySelectorAll('div'))
            : [];
        const total = items.length;
        let index = 0;
        const checkScore = this.getCheckScore();
        const score = this.getScore();
        items.map((item) => {
            index++;
            if (checkScore * index * (this.checkSteps / total) <= score) {
                item.classList.add('active');
            }
            else {
                item.classList.remove('active');
            }
        });
    }
    getScore() {
        return this.score;
    }
    check() {
        let score = 0;
        const checkScore = this.getCheckScore();
        if (this.checkLength()) {
            score = score + checkScore;
        }
        if (this.options.checkUppercase && this.checkLowerCase()) {
            score = score + checkScore;
        }
        if (this.options.checkLowercase && this.checkUppercase()) {
            score = score + checkScore;
        }
        if (this.options.checkDigit && this.checkDigit()) {
            score = score + checkScore;
        }
        if (this.options.checkChar && this.checkChar()) {
            score = score + checkScore;
        }
        this.score = score;
        this.highlight();
    }
}
// Static methods
PasswordMeterComponent.getInstance = (el, componentName = defaultPasswordMeterQueires.componentName) => {
    const passwordMeter = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(el, componentName);
    if (passwordMeter) {
        return passwordMeter;
    }
};
PasswordMeterComponent.createInstances = (selector = defaultPasswordMeterQueires.instanseQuery, options = defaultPasswordMeterOptions, queries = defaultPasswordMeterQueires) => {
    const elements = document.body.querySelectorAll(selector);
    elements.forEach((el) => {
        const item = el;
        let passwordMeter = PasswordMeterComponent.getInstance(item);
        if (!passwordMeter) {
            passwordMeter = new PasswordMeterComponent(item, options, queries);
        }
    });
};
PasswordMeterComponent.createInsance = (selector = defaultPasswordMeterQueires.instanseQuery, options = defaultPasswordMeterOptions, queries = defaultPasswordMeterQueires) => {
    const element = document.body.querySelector(selector);
    if (!element) {
        return;
    }
    const item = element;
    let passwordMeter = PasswordMeterComponent.getInstance(item);
    if (!passwordMeter) {
        passwordMeter = new PasswordMeterComponent(item, options, queries);
    }
    return passwordMeter;
};
PasswordMeterComponent.bootstrap = (selector = defaultPasswordMeterQueires.instanseQuery) => {
    PasswordMeterComponent.createInstances(selector);
};
PasswordMeterComponent.reinitialization = (selector = defaultPasswordMeterQueires.instanseQuery) => {
    PasswordMeterComponent.createInstances(selector);
};



/***/ }),

/***/ 64077:
/*!*************************************************************!*\
  !*** ./src/app/theme/helper/components/_ScrollComponent.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollComponent": () => (/* binding */ ScrollComponent),
/* harmony export */   "defaultScrollOptions": () => (/* binding */ defaultScrollOptions)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils/index */ 47590);
/* harmony import */ var _CookieComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_CookieComponent */ 38004);


const defaultScrollOptions = {
    saveState: true,
};
class ScrollComponent {
    constructor(_element, options) {
        this.getOption = (name) => {
            if (this.element.hasAttribute('data-kt-scroll-' + name) === true) {
                const attr = this.element.getAttribute('data-kt-scroll-' + name) || '';
                let value = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByBreakpoint)(attr);
                if (value !== null && String(value) === 'true') {
                    value = true;
                }
                else if (value !== null && String(value) === 'false') {
                    value = false;
                }
                return value;
            }
            else {
                const optionName = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.stringSnakeToCamel)(name);
                const option = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getObjectPropertyValueByKey)(this.options, optionName);
                if (option) {
                    return (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByBreakpoint)(option);
                }
                else {
                    return null;
                }
            }
        };
        this.getHeightType = () => {
            if (this.getOption('height')) {
                return 'height';
            }
            if (this.getOption('min-height')) {
                return 'min-height';
            }
            if (this.getOption('max-height')) {
                return 'max-height';
            }
        };
        this.getAutoHeight = () => {
            let height = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getViewPort)().height;
            const dependencies = this.getOption('dependencies');
            const wrappers = this.getOption('wrappers');
            const offset = this.getOption('offset');
            // Height dependencies
            if (dependencies !== null) {
                const elements = document.querySelectorAll(dependencies);
                if (elements && elements.length > 0) {
                    for (let i = 0, len = elements.length; i < len; i++) {
                        const element = elements[i];
                        if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.isVisibleElement)(element) === false) {
                            continue;
                        }
                        height = height - parseInt((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(element, 'height'));
                        height = height - parseInt((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(element, 'margin-top'));
                        height = height - parseInt((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(element, 'margin-bottom'));
                        const borderTop = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(element, 'border-top');
                        if (borderTop) {
                            height = height - parseInt(borderTop);
                        }
                        const borderBottom = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(element, 'border-bottom');
                        if (borderBottom) {
                            height = height - parseInt(borderBottom);
                        }
                    }
                }
            }
            // Wrappers
            if (wrappers !== null) {
                var elements = document.querySelectorAll(wrappers);
                if (elements && elements.length > 0) {
                    for (let i = 0, len = elements.length; i < len; i++) {
                        const element = elements[i];
                        if (!(0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.isVisibleElement)(element)) {
                            continue;
                        }
                        height = height - parseInt((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(element, 'margin-top'));
                        height = height - parseInt((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(element, 'margin-bottom'));
                        height = height - parseInt((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(element, 'padding-top'));
                        height = height - parseInt((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(element, 'padding-bottom'));
                        const borderTop = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(element, 'border-top');
                        if (borderTop) {
                            height = height - parseInt(borderTop);
                        }
                        const borderBottom = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(element, 'border-bottom');
                        if (borderBottom) {
                            height = height - parseInt(borderBottom);
                        }
                    }
                }
            }
            // Custom offset
            if (offset !== null) {
                height = height - parseInt(offset);
            }
            height = height - parseInt((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(this.element, 'margin-top'));
            height = height - parseInt((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(this.element, 'margin-bottom'));
            const borderTop = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(this.element, 'border-top');
            if (borderTop) {
                height = height - parseInt(borderTop);
            }
            const borderBottom = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(this.element, 'border-bottom');
            if (borderBottom) {
                height = height - parseInt(borderBottom);
            }
            height = String(height) + 'px';
            return height;
        };
        this.setupHeight = () => {
            let height = this.getHeight();
            let heightType = this.getHeightType();
            // Set height
            if (height !== null && height.length > 0) {
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(this.element, heightType, height);
            }
            else {
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(this.element, heightType, '');
            }
        };
        this.setupState = () => {
            if (this.getOption('save-state') === true && this.id) {
                const cookie = _CookieComponent__WEBPACK_IMPORTED_MODULE_1__.CookieComponent.get(this.id + 'st');
                if (cookie) {
                    var pos = parseInt(cookie);
                    if (pos > 0) {
                        this.element.scrollTop = pos;
                    }
                }
            }
        };
        this.setupScrollHandler = () => {
            if (this.getOption('save-state') === true && this.id) {
                this.element.addEventListener('scroll', this.scrollHandler);
            }
            else {
                this.element.removeEventListener('scroll', this.scrollHandler);
            }
        };
        this.scrollHandler = () => {
            const cookieId = this.id + 'st';
            _CookieComponent__WEBPACK_IMPORTED_MODULE_1__.CookieComponent.set(cookieId, this.element.scrollTop, {});
        };
        this.destroyScrollHandler = () => {
            this.element.removeEventListener('scroll', this.scrollHandler);
        };
        this.resetHeight = () => {
            const heghtType = this.getHeightType();
            if (heghtType) {
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(this.element, heghtType, '');
            }
        };
        ///////////////////////
        // ** Public API  ** //
        ///////////////////////
        this.update = () => {
            // Activate/deactivate
            if (this.getOption('activate') === true ||
                !this.element.hasAttribute('data-kt-scroll-activate')) {
                this.setupHeight();
                this.setupScrollHandler();
                this.setupState();
            }
            else {
                this.resetHeight();
                this.destroyScrollHandler();
            }
        };
        this.getHeight = () => {
            const heightType = this.getHeightType();
            const height = this.getOption(heightType || '');
            if (height instanceof Function) {
                return height.call(height);
            }
            else if (height !== null && typeof height === 'string' && height.toLowerCase() === 'auto') {
                return this.getAutoHeight();
            }
            else {
                return height;
            }
        };
        this.getElement = () => {
            return this.element;
        };
        this.element = _element;
        this.options = Object.assign(defaultScrollOptions, options);
        this.id = this.element.getAttribute('id') || '';
        this.update();
        // this.element.setAttribute('data-kt-scrolltop', 'true')
        _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(this.element, 'scroll', this);
    }
    // Static methods
    static hasInstace(element) {
        return _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.has(element, 'scroll');
    }
    static getInstance(element) {
        if (element !== null && ScrollComponent.hasInstace(element)) {
            const data = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(element, 'scroll');
            if (data) {
                return data;
            }
        }
    }
    // Create Instances
    static createInstances(selector) {
        const elements = document.body.querySelectorAll(selector);
        elements.forEach((element) => {
            const item = element;
            let scroll = ScrollComponent.getInstance(item);
            if (!scroll) {
                scroll = new ScrollComponent(item, defaultScrollOptions);
            }
        });
    }
    static destroyAll(attr = '[data-kt-scroll="true"]') { }
    static bootstrap(attr = '[data-kt-scroll="true"]') {
        ScrollComponent.createInstances(attr);
        ScrollComponent.resize();
    }
    static reinitialization(attr = '[data-kt-scroll="true"]') {
        ScrollComponent.createInstances(attr);
    }
    static updateAll() {
        const elements = document.body.querySelectorAll('[data-kt-scroll="true"]');
        elements.forEach((element) => {
            const instance = ScrollComponent.getInstance(element);
            if (instance) {
                instance.update();
            }
        });
    }
    static resize() {
        // Window Resize Handling
        window.addEventListener('resize', function () {
            let timer;
            (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.throttle)(timer, () => {
                // Locate and update Drawer instances on window resize
                ScrollComponent.updateAll();
            }, 200);
        });
    }
}
ScrollComponent.createInstance = (element, options = defaultScrollOptions) => {
    let scroll = ScrollComponent.getInstance(element);
    if (!scroll) {
        scroll = new ScrollComponent(element, options);
    }
    return scroll;
};



/***/ }),

/***/ 83560:
/*!****************************************************************!*\
  !*** ./src/app/theme/helper/components/_ScrollTopComponent.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollTopComponent": () => (/* binding */ ScrollTopComponent),
/* harmony export */   "defaultScrollTopOptions": () => (/* binding */ defaultScrollTopOptions)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils/index */ 47590);

const defaultScrollTopOptions = {
    offset: 200,
    speed: 600,
};
class ScrollTopComponent {
    constructor(_element, options) {
        this._handlers = () => {
            let timer;
            window.addEventListener('scroll', () => {
                (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.throttle)(timer, () => {
                    this._scroll();
                });
            });
            this.element.addEventListener('click', (e) => {
                e.preventDefault();
                this._go();
            });
        };
        this._scroll = () => {
            const offset = parseInt(this._getOption('offset'));
            const pos = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getScrollTop)(); // current vertical position
            if (pos > offset) {
                if (!document.body.hasAttribute('data-kt-scrolltop')) {
                    document.body.setAttribute('data-kt-scrolltop', 'on');
                }
            }
            else {
                if (document.body.hasAttribute('data-kt-scrolltop')) {
                    document.body.removeAttribute('data-kt-scrolltop');
                }
            }
        };
        this._go = () => {
            const speed = parseInt(this._getOption('speed'));
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementAnimateUtil.scrollTop(0, speed);
        };
        this._getOption = (name) => {
            const attr = this.element.getAttribute(`data-kt-scrolltop-${name}`);
            if (attr) {
                const value = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByBreakpoint)(attr);
                return value !== null && String(value) === 'true';
            }
            const optionName = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.stringSnakeToCamel)(name);
            const option = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getObjectPropertyValueByKey)(this.options, optionName);
            if (option) {
                return (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByBreakpoint)(option);
            }
            return null;
        };
        ///////////////////////
        // ** Public API  ** //
        ///////////////////////
        // Plugin API
        this.go = () => {
            return this._go();
        };
        this.getElement = () => {
            return this.element;
        };
        this.element = _element;
        this.options = Object.assign(defaultScrollTopOptions, options);
        this.instanceUid = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getUniqueIdWithPrefix)('scrolltop');
        // Event Handlers
        this._handlers();
        // Bind Instance
        _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(this.element, 'scrolltop', this);
    }
}
// Static methods
ScrollTopComponent.getInstance = (el) => {
    const scrollTop = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(el, 'scrolltop');
    if (scrollTop) {
        return scrollTop;
    }
};
ScrollTopComponent.createInstances = (selector) => {
    const elements = document.body.querySelectorAll(selector);
    elements.forEach((el) => {
        const item = el;
        let scrollTop = ScrollTopComponent.getInstance(item);
        if (!scrollTop) {
            scrollTop = new ScrollTopComponent(item, defaultScrollTopOptions);
        }
    });
};
ScrollTopComponent.createInsance = (selector, options = defaultScrollTopOptions) => {
    const element = document.body.querySelector(selector);
    if (!element) {
        return;
    }
    const item = element;
    let scrollTop = ScrollTopComponent.getInstance(item);
    if (!scrollTop) {
        scrollTop = new ScrollTopComponent(item, options);
    }
    return scrollTop;
};
ScrollTopComponent.bootstrap = () => {
    ScrollTopComponent.createInstances('[data-kt-scrolltop="true"]');
};
ScrollTopComponent.reinitialization = () => {
    ScrollTopComponent.createInstances('[data-kt-scrolltop="true"]');
};
ScrollTopComponent.goTop = () => {
    _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementAnimateUtil.scrollTop(0, defaultScrollTopOptions.speed);
};



/***/ }),

/***/ 21349:
/*!**************************************************************!*\
  !*** ./src/app/theme/helper/components/_StepperComponent.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepperComponent": () => (/* binding */ StepperComponent),
/* harmony export */   "defaultStepperOptions": () => (/* binding */ defaultStepperOptions)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils/index */ 47590);

const defaultStepperOptions = {
    startIndex: 1,
    animation: false,
    animationSpeed: '0.3s',
    animationNextClass: 'animate__animated animate__slideInRight animate__fast',
    animationPreviousClass: 'animate__animated animate__slideInLeft animate__fast',
};
class StepperComponent {
    constructor(_element, options) {
        var _a;
        this.totatStepsNumber = 0;
        this.passedStepIndex = 0;
        this.currentStepIndex = 1;
        this._goTo = (index) => {
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.stepper.change');
            // Skip if this step is already shown
            if (index === this.currentStepIndex ||
                index > this.totatStepsNumber ||
                index < 0) {
                return;
            }
            // Validate step number
            index = parseInt(index.toString());
            // Set current step
            this.passedStepIndex = this.currentStepIndex;
            this.currentStepIndex = index;
            // Refresh elements
            this.refreshUI();
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.stepper.changed');
        };
        this.initHandlers = () => {
            var _a, _b;
            (_a = this.btnNext) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
                e.preventDefault();
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.stepper.next', e);
            });
            (_b = this.btnPrev) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (e) => {
                e.preventDefault();
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.stepper.previous', e);
            });
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.DOMEventHandlerUtil.on(this.element, '[data-kt-stepper-action="step"]', 'click', (e) => {
                e.preventDefault();
                if (this.steps && this.steps.length > 0) {
                    for (let i = 0; i < this.steps.length; i++) {
                        if (this.steps[i] === this.element) {
                            let index = i + 1;
                            const stepDirection = this._getStepDirection(index);
                            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, `stepper.${stepDirection}`, e);
                            return;
                        }
                    }
                }
            });
        };
        this._getStepDirection = (index) => {
            return index > this.currentStepIndex ? 'next' : 'previous';
        };
        this.getStepContent = (index) => {
            const content = this.element.querySelectorAll('[data-kt-stepper-element="content"]');
            if (!content) {
                return false;
            }
            if (content[index - 1]) {
                return content[index - 1];
            }
            return false;
        };
        this.getLastStepIndex = () => {
            return this.totatStepsNumber;
        };
        this.getTotalStepsNumber = () => {
            return this.totatStepsNumber;
        };
        this.refreshUI = () => {
            let state = '';
            if (this.isLastStep()) {
                state = 'last';
            }
            else if (this.isFirstStep()) {
                state = 'first';
            }
            else {
                state = 'between';
            }
            // Set state class
            this.element.classList.remove('last');
            this.element.classList.remove('first');
            this.element.classList.remove('between');
            this.element.classList.add(state);
            // Step Items
            const elements = this.element.querySelectorAll('[data-kt-stepper-element="nav"], [data-kt-stepper-element="content"], [data-kt-stepper-element="info"]');
            if (!elements || elements.length <= 0) {
                return;
            }
            for (var i = 0, len = elements.length; i < len; i++) {
                var element = elements[i];
                var index = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getElementIndex)(element) + 1;
                element.classList.remove('current');
                element.classList.remove('completed');
                element.classList.remove('pending');
                if (index === this.currentStepIndex) {
                    element.classList.add('current');
                    if (this.options.animation !== false &&
                        element.getAttribute('data-kt-stepper-element') === 'content') {
                        _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(element, 'animationDuration', this.options.animationSpeed);
                        const animation = this._getStepDirection(this.passedStepIndex) === 'previous'
                            ? this.options.animationPreviousClass
                            : this.options.animationNextClass;
                        _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementAnimateUtil.animateClass(element, animation);
                    }
                }
                else {
                    if (index < this.currentStepIndex) {
                        element.classList.add('completed');
                    }
                    else {
                        element.classList.add('pending');
                    }
                }
            }
        };
        this.isLastStep = () => {
            return this.currentStepIndex === this.totatStepsNumber;
        };
        this.isFirstStep = () => {
            return this.currentStepIndex === 1;
        };
        this.isBetweenStep = () => {
            return this.isLastStep() === false && this.isFirstStep() === false;
        };
        //   ///////////////////////
        //   // ** Public API  ** //
        //   ///////////////////////
        //   // Plugin API
        this.goto = (index) => {
            return this._goTo(index);
        };
        this.goNext = () => {
            return this.goto(this.getNextStepIndex());
        };
        this.goPrev = () => {
            return this.goto(this.getPrevStepIndex());
        };
        this.goFirst = () => {
            return this.goto(1);
        };
        this.goLast = () => {
            return this.goto(this.getLastStepIndex());
        };
        this.getCurrentStepIndex = () => {
            return this.currentStepIndex;
        };
        this.getNextStepIndex = () => {
            if (this.totatStepsNumber >= this.currentStepIndex + 1) {
                return this.currentStepIndex + 1;
            }
            else {
                return this.totatStepsNumber;
            }
        };
        this.getPassedStepIndex = () => {
            return this.passedStepIndex;
        };
        this.getPrevStepIndex = () => {
            if (this.currentStepIndex - 1 > 1) {
                return this.currentStepIndex - 1;
            }
            else {
                return 1;
            }
        };
        this.getElement = (index) => {
            return this.element;
        };
        // Event API
        this.on = (name, handler) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.on(this.element, name, handler);
        };
        this.one = (name, handler) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.one(this.element, name, handler);
        };
        this.off = (name, handlerId) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.off(this.element, name, handlerId);
        };
        this.destroy = () => {
            // console.log('destroy stepper');
        };
        this.trigger = (name, event) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, name, event);
        };
        this.element = _element;
        this.options = Object.assign(defaultStepperOptions, options);
        this.instanceUid = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getUniqueIdWithPrefix)('stepper');
        // Elements
        this.steps = this.element.querySelectorAll('[data-kt-stepper-element="nav"]');
        this.btnNext = this.element.querySelector('[data-kt-stepper-action="next"]');
        this.btnPrev = this.element.querySelector('[data-kt-stepper-action="previous"]');
        this.btnSubmit = this.element.querySelector('[data-kt-stepper-action="submit"]');
        // Variables
        this.totatStepsNumber = ((_a = this.steps) === null || _a === void 0 ? void 0 : _a.length) | 0;
        this.passedStepIndex = 0;
        this.currentStepIndex = 1;
        // Set Current Step
        if (this.options.startIndex > 1) {
            this._goTo(this.options.startIndex);
        }
        // Event Handlers
        this.initHandlers();
        // Bind Instance
        _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(this.element, 'stepper', this);
    }
    // Static methods
    static hasInstace(element) {
        return _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.has(element, 'stepper');
    }
    static getInstance(element) {
        if (element !== null && StepperComponent.hasInstace(element)) {
            const data = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(element, 'stepper');
            if (data) {
                return data;
            }
        }
    }
    // Create Instances
    static createInstances(selector) {
        const elements = document.body.querySelectorAll(selector);
        elements.forEach((element) => {
            const item = element;
            let stepper = StepperComponent.getInstance(item);
            if (!stepper) {
                stepper = new StepperComponent(item, defaultStepperOptions);
            }
        });
    }
    static bootstrap(attr = '[data-kt-stepper]') {
        StepperComponent.createInstances(attr);
    }
}
StepperComponent.createInsance = (element, options = defaultStepperOptions) => {
    if (!element) {
        return null;
    }
    let stepper = StepperComponent.getInstance(element);
    if (!stepper) {
        stepper = new StepperComponent(element, options);
    }
    return stepper;
};



/***/ }),

/***/ 50932:
/*!*************************************************************!*\
  !*** ./src/app/theme/helper/components/_StickyComponent.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StickyComponent": () => (/* binding */ StickyComponent),
/* harmony export */   "defaultStickyOptions": () => (/* binding */ defaultStickyOptions)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils/index */ 47590);

const defaultStickyOptions = {
    offset: 200,
    reverse: false,
    animation: true,
    animationSpeed: '0.3s',
    animationClass: 'animation-slide-in-down',
};
class StickyComponent {
    constructor(_element, options) {
        this.instanceName = '';
        this.scroll = () => {
            let offset = this.getOption('offset');
            let reverse = this.getOption('reverse');
            // Exit if false
            if (offset === false) {
                return;
            }
            let offsetNum = 0;
            if (typeof offset === 'string') {
                offsetNum = parseInt(offset);
            }
            const st = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getScrollTop)();
            // Reverse scroll mode
            if (reverse === true) {
                // Release on reverse scroll mode
                if (st > offsetNum && this.lastScrollTop < st) {
                    if (document.body.hasAttribute(this.attributeName) === false) {
                        this.enable();
                        document.body.setAttribute(this.attributeName, 'on');
                    }
                    if (this.eventTriggerState === true) {
                        _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.sticky.on');
                        _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.sticky.change');
                        this.eventTriggerState = false;
                    }
                }
                else {
                    // Back scroll mode
                    if (document.body.hasAttribute(this.attributeName)) {
                        this.disable();
                        document.body.removeAttribute(this.attributeName);
                    }
                    if (this.eventTriggerState === false) {
                        _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.sticky.off');
                        _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.sticky.change');
                        this.eventTriggerState = true;
                    }
                }
                this.lastScrollTop = st;
                return;
            }
            // Classic scroll mode
            if (st > offsetNum) {
                if (document.body.hasAttribute(this.attributeName) === false) {
                    this.enable();
                    document.body.setAttribute(this.attributeName, 'on');
                }
                if (this.eventTriggerState === true) {
                    _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.sticky.on');
                    _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.sticky.change');
                    this.eventTriggerState = false;
                }
            }
            else {
                // back scroll mode
                if (document.body.hasAttribute(this.attributeName) === true) {
                    this.disable();
                    document.body.removeAttribute(this.attributeName);
                }
                if (this.eventTriggerState === false) {
                    _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.sticky.off');
                    _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.sticky.change');
                    this.eventTriggerState = true;
                }
            }
        };
        this.getOption = (name) => {
            const dataStickyAttr = 'data-kt-sticky-' + name;
            if (this.element.hasAttribute(dataStickyAttr) === true) {
                const attrValueInStr = this.element.getAttribute(dataStickyAttr);
                const attrValue = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByBreakpoint)(attrValueInStr || '');
                if (attrValue !== null && String(attrValue) === 'true') {
                    return true;
                }
                else if (attrValue !== null && String(attrValue) === 'false') {
                    return false;
                }
                return attrValue;
            }
            else {
                const optionName = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.stringSnakeToCamel)(name);
                const option = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getObjectPropertyValueByKey)(this.options, optionName);
                if (option) {
                    return (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByBreakpoint)(option);
                }
            }
        };
        this.disable = () => {
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.remove(this.element, 'top');
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.remove(this.element, 'width');
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.remove(this.element, 'left');
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.remove(this.element, 'right');
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.remove(this.element, 'z-index');
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.remove(this.element, 'position');
        };
        this.enable = (update = false) => {
            const top = this.getOption('top');
            const left = this.getOption('left');
            // const right = this.getOption("right");
            let width = this.getOption('width');
            const zindex = this.getOption('zindex');
            if (update !== true && this.getOption('animation') === true) {
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(this.element, 'animationDuration', this.getOption('animationSpeed'));
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementAnimateUtil.animateClass(this.element, 'animation ' + this.getOption('animationClass'));
            }
            if (zindex !== null) {
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(this.element, 'z-index', zindex);
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(this.element, 'position', 'fixed');
            }
            if (top !== null) {
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(this.element, 'top', top);
            }
            if (width !== null && width !== undefined) {
                const widthTarget = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getObjectPropertyValueByKey)(width, 'target');
                if (widthTarget) {
                    const targetElement = document.querySelector(widthTarget);
                    if (targetElement) {
                        width = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getCSS)(targetElement, 'width');
                    }
                }
                _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(this.element, 'width', width);
            }
            if (left !== null) {
                if (String(left).toLowerCase() === 'auto') {
                    var offsetLeft = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getElementOffset)(this.element).left;
                    if (offsetLeft > 0) {
                        _utils_index__WEBPACK_IMPORTED_MODULE_0__.ElementStyleUtil.set(this.element, 'left', String(offsetLeft) + 'px');
                    }
                }
            }
        };
        this.update = () => {
            if (document.body.hasAttribute(this.attributeName) === true) {
                this.disable();
                document.body.removeAttribute(this.attributeName);
                this.enable(true);
                document.body.setAttribute(this.attributeName, 'on');
            }
        };
        // Event API
        this.on = (name, callBack) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.on(this.element, name, callBack);
        };
        this.one = (name, callback) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.one(this.element, name, callback);
        };
        this.off = (name, handlerId) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.off(this.element, name, handlerId);
        };
        this.trigger = (name) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, name);
        };
        this.element = _element;
        this.options = Object.assign(defaultStickyOptions, options);
        this.instanceUid = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getUniqueIdWithPrefix)('sticky');
        this.instanceName = this.element.getAttribute('data-kt-sticky-name');
        this.attributeName = 'data-kt-sticky-' + this.instanceName;
        this.eventTriggerState = true;
        this.lastScrollTop = 0;
        // Event Handlers
        window.addEventListener('scroll', this.scroll);
        // Initial Launch
        this.scroll();
        _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(this.element, 'sticky', this);
    }
    // Static methods
    static hasInstace(element) {
        return _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.has(element, 'sticky');
    }
    static getInstance(element) {
        if (element !== null && StickyComponent.hasInstace(element)) {
            const data = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(element, 'sticky');
            if (data) {
                return data;
            }
        }
    }
    // Create Instances
    static createInstances(selector) {
        const elements = document.body.querySelectorAll(selector);
        elements.forEach((element) => {
            const item = element;
            let sticky = StickyComponent.getInstance(item);
            if (!sticky) {
                sticky = new StickyComponent(item, defaultStickyOptions);
            }
        });
    }
    static bootstrap(attr = '[data-kt-sticky="true"]') {
        StickyComponent.createInstances(attr);
    }
    static reInitialization(attr = '[data-kt-sticky="true"]') {
        StickyComponent.createInstances(attr);
    }
}
StickyComponent.createInsance = (selector, options = defaultStickyOptions) => {
    const element = document.body.querySelector(selector);
    if (!element) {
        return;
    }
    const item = element;
    let sticky = StickyComponent.getInstance(item);
    if (!sticky) {
        sticky = new StickyComponent(item, options);
    }
    return sticky;
};



/***/ }),

/***/ 82841:
/*!**************************************************************!*\
  !*** ./src/app/theme/helper/components/_SwapperComponent.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwapperComponent": () => (/* binding */ SwapperComponent),
/* harmony export */   "SwapperStore": () => (/* binding */ SwapperStore),
/* harmony export */   "defaultSwapperOptions": () => (/* binding */ defaultSwapperOptions),
/* harmony export */   "defaultSwapperQueires": () => (/* binding */ defaultSwapperQueires)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils/index */ 47590);

class SwapperStore {
    static set(instanceId, drawerComponentObj) {
        if (SwapperStore.has(instanceId)) {
            return;
        }
        SwapperStore.store.set(instanceId, drawerComponentObj);
    }
    static get(instanceId) {
        if (!SwapperStore.has(instanceId)) {
            return;
        }
        return SwapperStore.store.get(instanceId);
    }
    static remove(instanceId) {
        if (!SwapperStore.has(instanceId)) {
            return;
        }
        SwapperStore.store.delete(instanceId);
    }
    static has(instanceId) {
        return SwapperStore.store.has(instanceId);
    }
    static getAllInstances() {
        return SwapperStore.store;
    }
}
SwapperStore.store = new Map();
const defaultSwapperOptions = {
    mode: 'append',
};
const defaultSwapperQueires = {
    componentName: 'swapper',
    instanseQuery: '[data-kt-swapper="true"]',
    attrQuery: 'data-kt-swapper-',
};
class SwapperComponent {
    constructor(_element, _options, _queries) {
        ///////////////////////
        // ** Public API  ** //
        ///////////////////////
        this.update = () => {
            var _a;
            const parentSelector = (_a = this.getOption('parent')) === null || _a === void 0 ? void 0 : _a.toString();
            const mode = this.getOption('mode');
            const parentElement = parentSelector ? document.querySelector(parentSelector) : null;
            if (parentElement && this.element.parentNode !== parentElement) {
                if (mode === 'prepend') {
                    parentElement.prepend(this.element);
                }
                else if (mode === 'append') {
                    parentElement.append(this.element);
                }
            }
        };
        // Event API
        this.on = (name, handler) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.on(this.element, name, handler);
        };
        this.one = (name, handler) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.one(this.element, name, handler);
        };
        this.off = (name, handlerId) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.off(this.element, name, handlerId);
        };
        this.trigger = (name, event) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, name, event);
        };
        this.element = _element;
        this.options = Object.assign(defaultSwapperOptions, _options);
        this.queries = _queries;
        // Initial update
        this.update();
        SwapperStore.set(this.element.id, this);
    }
    getOption(name) {
        const attr = this.element.getAttribute(`${this.queries.attrQuery}${name}`);
        if (attr) {
            let value = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByBreakpoint)(attr);
            if (attr != null && String(value) === 'true') {
                return true;
            }
            else if (value !== null && String(value) === 'false') {
                return false;
            }
            return value;
        }
        else {
            const optionName = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.stringSnakeToCamel)(name);
            const option = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getObjectPropertyValueByKey)(this.options, optionName);
            if (option) {
                return (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByBreakpoint)(option);
            }
            else {
                return null;
            }
        }
    }
}
// Static methods
SwapperComponent.getInstance = (el, componentName = defaultSwapperQueires.componentName) => {
    const place = SwapperStore.get(el.id);
    if (place) {
        return place;
    }
    return null;
};
SwapperComponent.createInstances = (selector = defaultSwapperQueires.instanseQuery, options = defaultSwapperOptions, queries = defaultSwapperQueires) => {
    const elements = document.body.querySelectorAll(selector);
    elements.forEach((el) => {
        const item = el;
        let place = SwapperComponent.getInstance(item);
        if (!place) {
            place = new SwapperComponent(item, options, queries);
        }
    });
};
SwapperComponent.createInsance = (selector = defaultSwapperQueires.instanseQuery, options = defaultSwapperOptions, queries = defaultSwapperQueires) => {
    const element = document.body.querySelector(selector);
    if (!element) {
        return;
    }
    const item = element;
    let place = SwapperComponent.getInstance(item);
    if (!place) {
        place = new SwapperComponent(item, options, queries);
    }
    return place;
};
SwapperComponent.bootstrap = (selector = defaultSwapperQueires.instanseQuery) => {
    SwapperComponent.createInstances(selector);
};
SwapperComponent.reinitialization = (selector = defaultSwapperQueires.instanseQuery) => {
    SwapperComponent.createInstances(selector);
};
// Window resize handler
window.addEventListener('resize', function () {
    let timer;
    (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.throttle)(timer, () => {
        // Locate and update Offcanvas instances on window resize
        const elements = document.querySelectorAll(defaultSwapperQueires.instanseQuery);
        elements.forEach((el) => {
            const place = SwapperComponent.getInstance(el);
            if (place) {
                place.update();
            }
        });
    }, 200);
});



/***/ }),

/***/ 10099:
/*!*************************************************************!*\
  !*** ./src/app/theme/helper/components/_ToggleComponent.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleComponent": () => (/* binding */ ToggleComponent),
/* harmony export */   "defaultToggleOptions": () => (/* binding */ defaultToggleOptions)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils/index */ 47590);
/* harmony import */ var _CookieComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_CookieComponent */ 38004);

// Helpers

const defaultToggleOptions = {
    saveState: false,
};
class ToggleComponent {
    constructor(_element, options) {
        this.state = '';
        this.mode = '';
        this.target = null;
        this.attribute = '';
        this._handlers = () => {
            this.element.addEventListener('click', (e) => {
                e.preventDefault();
                if (this.mode === '') {
                    this._toggle();
                    return;
                }
                if (this.mode === 'off' && !this._isEnabled()) {
                    this._toggle();
                }
                else if (this.mode === 'on' && this._isEnabled()) {
                    this._toggle();
                }
            });
        };
        // Event handlers
        this._toggle = () => {
            // Trigger "after.toggle" event
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.toggle.change');
            if (this._isEnabled()) {
                this._disable();
            }
            else {
                this._enable();
            }
            // Trigger "before.toggle" event
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.toggle.changed');
            return this;
        };
        this._enable = () => {
            var _a;
            if (this._isEnabled()) {
                return;
            }
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.toggle.enable');
            (_a = this.target) === null || _a === void 0 ? void 0 : _a.setAttribute(this.attribute, 'on');
            if (this.state.length > 0) {
                this.element.classList.add(this.state);
            }
            if (this.options.saveState) {
                _CookieComponent__WEBPACK_IMPORTED_MODULE_1__.CookieComponent.set(this.attribute, 'on', {});
            }
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.toggle.enabled');
            return this;
        };
        this._disable = () => {
            var _a;
            if (!this._isEnabled()) {
                return false;
            }
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.toggle.disable');
            (_a = this.target) === null || _a === void 0 ? void 0 : _a.removeAttribute(this.attribute);
            if (this.state.length > 0) {
                this.element.classList.remove(this.state);
            }
            if (this.options.saveState) {
                _CookieComponent__WEBPACK_IMPORTED_MODULE_1__.CookieComponent["delete"](this.attribute);
            }
            _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.toggle.disabled');
            return this;
        };
        this._isEnabled = () => {
            if (!this.target) {
                return false;
            }
            return (String(this.target.getAttribute(this.attribute)).toLowerCase() === 'on');
        };
        ///////////////////////
        // ** Public API  ** //
        ///////////////////////
        // Plugin API
        // Plugin API
        this.toggle = () => {
            return this._toggle();
        };
        this.enable = () => {
            return this._enable();
        };
        this.disable = () => {
            return this._disable();
        };
        this.isEnabled = () => {
            return this._isEnabled();
        };
        this.goElement = () => {
            return this.element;
        };
        // Event API
        this.on = (name, handler) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.on(this.element, name, handler);
        };
        this.one = (name, handler) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.one(this.element, name, handler);
        };
        this.off = (name, handlerId) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.off(this.element, name, handlerId);
        };
        this.trigger = (name, event) => {
            return _utils_index__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, name, event);
        };
        this.options = Object.assign(defaultToggleOptions, options);
        this.instanceUid = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getUniqueIdWithPrefix)('toggle');
        this.element = _element;
        const elementTargetAttr = this.element.getAttribute('data-kt-toggle-target');
        if (elementTargetAttr) {
            this.target = document.querySelector(elementTargetAttr);
        }
        const elementToggleAttr = this.element.getAttribute('data-kt-toggle-state');
        this.state = elementToggleAttr || '';
        const elementModeAttr = this.element.getAttribute('data-kt-toggle-mode');
        this.mode = elementModeAttr || '';
        this.attribute =
            'data-kt-' + this.element.getAttribute('data-kt-toggle-name');
        // Event Handlers
        this._handlers();
        // Update Instance
        // Bind Instance
        _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.set(this.element, 'toggle', this);
    }
}
// Static methods
ToggleComponent.getInstance = (el) => {
    const toggleElement = _utils_index__WEBPACK_IMPORTED_MODULE_0__.DataUtil.get(el, 'toggle');
    if (toggleElement) {
        return toggleElement;
    }
    return null;
};
ToggleComponent.createInstances = (selector) => {
    const elements = document.body.querySelectorAll(selector);
    elements.forEach((el) => {
        let toggle = ToggleComponent.getInstance(el);
        if (!toggle) {
            toggle = new ToggleComponent(el, defaultToggleOptions);
        }
    });
};
ToggleComponent.reinitialization = () => {
    ToggleComponent.createInstances('[data-kt-toggle]');
};
ToggleComponent.bootstrap = () => {
    ToggleComponent.createInstances('[data-kt-toggle]');
};



/***/ }),

/***/ 12101:
/*!**************************************************!*\
  !*** ./src/app/theme/helper/components/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookieComponent": () => (/* reexport safe */ _CookieComponent__WEBPACK_IMPORTED_MODULE_0__.CookieComponent),
/* harmony export */   "DrawerComponent": () => (/* reexport safe */ _DrawerComponent__WEBPACK_IMPORTED_MODULE_1__.DrawerComponent),
/* harmony export */   "DrawerStore": () => (/* reexport safe */ _DrawerComponent__WEBPACK_IMPORTED_MODULE_1__.DrawerStore),
/* harmony export */   "FeedbackComponent": () => (/* reexport safe */ _FeedbackComponent__WEBPACK_IMPORTED_MODULE_2__.FeedbackComponent),
/* harmony export */   "ImageInputComponent": () => (/* reexport safe */ _ImageInputComponent__WEBPACK_IMPORTED_MODULE_3__.ImageInputComponent),
/* harmony export */   "MenuComponent": () => (/* reexport safe */ _MenuComponent__WEBPACK_IMPORTED_MODULE_11__.MenuComponent),
/* harmony export */   "PasswordMeterComponent": () => (/* reexport safe */ _PasswordMeterComponent__WEBPACK_IMPORTED_MODULE_9__.PasswordMeterComponent),
/* harmony export */   "ScrollComponent": () => (/* reexport safe */ _ScrollComponent__WEBPACK_IMPORTED_MODULE_4__.ScrollComponent),
/* harmony export */   "ScrollTopComponent": () => (/* reexport safe */ _ScrollTopComponent__WEBPACK_IMPORTED_MODULE_5__.ScrollTopComponent),
/* harmony export */   "SearchComponent": () => (/* reexport safe */ _SearchComponent__WEBPACK_IMPORTED_MODULE_12__.SearchComponent),
/* harmony export */   "StepperComponent": () => (/* reexport safe */ _StepperComponent__WEBPACK_IMPORTED_MODULE_6__.StepperComponent),
/* harmony export */   "StickyComponent": () => (/* reexport safe */ _StickyComponent__WEBPACK_IMPORTED_MODULE_7__.StickyComponent),
/* harmony export */   "SwapperComponent": () => (/* reexport safe */ _SwapperComponent__WEBPACK_IMPORTED_MODULE_10__.SwapperComponent),
/* harmony export */   "SwapperStore": () => (/* reexport safe */ _SwapperComponent__WEBPACK_IMPORTED_MODULE_10__.SwapperStore),
/* harmony export */   "ToggleComponent": () => (/* reexport safe */ _ToggleComponent__WEBPACK_IMPORTED_MODULE_8__.ToggleComponent),
/* harmony export */   "defaultDrawerOptions": () => (/* reexport safe */ _DrawerComponent__WEBPACK_IMPORTED_MODULE_1__.defaultDrawerOptions),
/* harmony export */   "defaultFeedbackOptions": () => (/* reexport safe */ _FeedbackComponent__WEBPACK_IMPORTED_MODULE_2__.defaultFeedbackOptions),
/* harmony export */   "defaultImageInputOptions": () => (/* reexport safe */ _ImageInputComponent__WEBPACK_IMPORTED_MODULE_3__.defaultImageInputOptions),
/* harmony export */   "defaultImageInputQueires": () => (/* reexport safe */ _ImageInputComponent__WEBPACK_IMPORTED_MODULE_3__.defaultImageInputQueires),
/* harmony export */   "defaultMenuOptions": () => (/* reexport safe */ _MenuComponent__WEBPACK_IMPORTED_MODULE_11__.defaultMenuOptions),
/* harmony export */   "defaultPasswordMeterOptions": () => (/* reexport safe */ _PasswordMeterComponent__WEBPACK_IMPORTED_MODULE_9__.defaultPasswordMeterOptions),
/* harmony export */   "defaultPasswordMeterQueires": () => (/* reexport safe */ _PasswordMeterComponent__WEBPACK_IMPORTED_MODULE_9__.defaultPasswordMeterQueires),
/* harmony export */   "defaultScrollOptions": () => (/* reexport safe */ _ScrollComponent__WEBPACK_IMPORTED_MODULE_4__.defaultScrollOptions),
/* harmony export */   "defaultScrollTopOptions": () => (/* reexport safe */ _ScrollTopComponent__WEBPACK_IMPORTED_MODULE_5__.defaultScrollTopOptions),
/* harmony export */   "defaultSearchOptions": () => (/* reexport safe */ _SearchComponent__WEBPACK_IMPORTED_MODULE_12__.defaultSearchOptions),
/* harmony export */   "defaultSearchQueires": () => (/* reexport safe */ _SearchComponent__WEBPACK_IMPORTED_MODULE_12__.defaultSearchQueires),
/* harmony export */   "defaultStepperOptions": () => (/* reexport safe */ _StepperComponent__WEBPACK_IMPORTED_MODULE_6__.defaultStepperOptions),
/* harmony export */   "defaultStickyOptions": () => (/* reexport safe */ _StickyComponent__WEBPACK_IMPORTED_MODULE_7__.defaultStickyOptions),
/* harmony export */   "defaultSwapperOptions": () => (/* reexport safe */ _SwapperComponent__WEBPACK_IMPORTED_MODULE_10__.defaultSwapperOptions),
/* harmony export */   "defaultSwapperQueires": () => (/* reexport safe */ _SwapperComponent__WEBPACK_IMPORTED_MODULE_10__.defaultSwapperQueires),
/* harmony export */   "defaultToggleOptions": () => (/* reexport safe */ _ToggleComponent__WEBPACK_IMPORTED_MODULE_8__.defaultToggleOptions)
/* harmony export */ });
/* harmony import */ var _CookieComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_CookieComponent */ 38004);
/* harmony import */ var _DrawerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_DrawerComponent */ 97988);
/* harmony import */ var _FeedbackComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_FeedbackComponent */ 27781);
/* harmony import */ var _ImageInputComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_ImageInputComponent */ 82486);
/* harmony import */ var _ScrollComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_ScrollComponent */ 64077);
/* harmony import */ var _ScrollTopComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_ScrollTopComponent */ 83560);
/* harmony import */ var _StepperComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_StepperComponent */ 21349);
/* harmony import */ var _StickyComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_StickyComponent */ 50932);
/* harmony import */ var _ToggleComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_ToggleComponent */ 10099);
/* harmony import */ var _PasswordMeterComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_PasswordMeterComponent */ 71740);
/* harmony import */ var _SwapperComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_SwapperComponent */ 82841);
/* harmony import */ var _MenuComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MenuComponent */ 47570);
/* harmony import */ var _SearchComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SearchComponent */ 92817);









// export * from './_DialerComponent';






/***/ }),

/***/ 63226:
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ 4358);
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ 29079);



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom, _enums_js__WEBPACK_IMPORTED_MODULE_0__.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ 96262:
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyStyles": () => (/* reexport safe */ _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "arrow": () => (/* reexport safe */ _arrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "computeStyles": () => (/* reexport safe */ _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "eventListeners": () => (/* reexport safe */ _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "flip": () => (/* reexport safe */ _flip_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "hide": () => (/* reexport safe */ _hide_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "offset": () => (/* reexport safe */ _offset_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "popperOffsets": () => (/* reexport safe */ _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "preventOverflow": () => (/* reexport safe */ _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"])
/* harmony export */ });
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ 1254);
/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ 13009);
/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ 4227);
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ 36271);
/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ 62728);
/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ 63226);
/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ 14780);
/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ 80655);
/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ 19955);










/***/ }),

/***/ 62524:
/*!***************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyStyles": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.applyStyles),
/* harmony export */   "arrow": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.arrow),
/* harmony export */   "computeStyles": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.computeStyles),
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "createPopperLite": () => (/* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__.createPopper),
/* harmony export */   "defaultModifiers": () => (/* binding */ defaultModifiers),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "eventListeners": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.eventListeners),
/* harmony export */   "flip": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.flip),
/* harmony export */   "hide": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.hide),
/* harmony export */   "offset": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.offset),
/* harmony export */   "popperGenerator": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator),
/* harmony export */   "popperOffsets": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.popperOffsets),
/* harmony export */   "preventOverflow": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.preventOverflow)
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createPopper.js */ 94484);
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createPopper.js */ 29079);
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ 36271);
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ 80655);
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ 4227);
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ 1254);
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/offset.js */ 14780);
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/flip.js */ 62728);
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ 19955);
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/arrow.js */ 13009);
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/hide.js */ 63226);
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popper-lite.js */ 25670);
/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modifiers/index.js */ 96262);










var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ })

}]);
//# sourceMappingURL=default-src_app_theme_helper_components_index_ts.63500bfd6088dd9e.js.map