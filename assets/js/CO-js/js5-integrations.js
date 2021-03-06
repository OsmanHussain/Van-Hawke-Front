(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.freshpaintIntegrations = f()
    }
})(function() {
    var define, module, exports;
    return function() {
        function r(e, n, t) {
            function o(i, f) {
                if (!n[i]) {
                    if (!e[i]) {
                        var c = "function" == typeof require && require;
                        if (!f && c) return c(i, !0);
                        if (u) return u(i, !0);
                        var a = new Error("Cannot find module '" + i + "'");
                        throw a.code = "MODULE_NOT_FOUND", a
                    }
                    var p = n[i] = {
                        exports: {}
                    };
                    e[i][0].call(p.exports, function(r) {
                        var n = e[i][1][r];
                        return o(n || r)
                    }, p, p.exports, r, e, n, t)
                }
                return n[i].exports
            }
            for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
            return o
        }
        return r
    }()({
        1: [function(require, module, exports) {
            "use strict";
            var analytics = require("@segment/analytics.js-core");
            var Integrations = require("./integrations");
            module.exports = exports = analytics;
            analytics.require = require;
            exports.VERSION = require("../package.json").version;
            Object.keys(Integrations).forEach(function(name) {
                analytics.use(Integrations[name])
            })
        }, {
            "../package.json": 445,
            "./integrations": 2,
            "@segment/analytics.js-core": 24
        }],
        2: [function(require, module, exports) {
            "use strict";
            module.exports = {
                adroll: require("@segment/analytics.js-integration-adroll"),
                adwords: require("@segment/analytics.js-integration-adwords"),
                alexa: require("@segment/analytics.js-integration-alexa"),
                ambassador: require("@segment/analytics.js-integration-ambassador"),
                amplitude: require("@segment/analytics.js-integration-amplitude"),
                appboy: require("@segment/analytics.js-integration-appboy"),
                appcues: require("@segment/analytics.js-integration-appcues"),
                bugsnag: require("@segment/analytics.js-integration-bugsnag"),
                "bing-ads": require("@segment/analytics.js-integrations/integrations/bing-ads"),
                castle: require("@segment/analytics.js-integration-castle"),
                chameleon: require("@segment/analytics.js-integration-chameleon"),
                chartbeat: require("@segment/analytics.js-integration-chartbeat"),
                clicky: require("@segment/analytics.js-integration-clicky"),
                "crazy-egg": require("@segment/analytics.js-integration-crazy-egg"),
                curebit: require("@segment/analytics.js-integration-curebit"),
                customerio: require("@segment/analytics.js-integration-customerio"),
                drift: require("@segment/analytics.js-integration-drift"),
                drip: require("@segment/analytics.js-integration-drip"),
                elevio: require("@segment/analytics.js-integration-elevio"),
                errorception: require("@segment/analytics.js-integration-errorception"),
                "facebook-pixel": require("@segment/analytics.js-integration-facebook-pixel"),
                fullstory: require("@segment/analytics.js-integration-fullstory"),
                gauges: require("@segment/analytics.js-integration-gauges"),
                "google-analytics": require("@segment/analytics.js-integration-google-analytics"),
                "google-adwords-new": require("@segment/analytics.js-integrations/integrations/google-adwords-new"),
                gosquared: require("@segment/analytics.js-integration-gosquared"),
                heap: require("@segment/analytics.js-integration-heap"),
                hellobar: require("@segment/analytics.js-integration-hellobar"),
                hotjar: require("analytics.js-integration-hotjar"),
                hubspot: require("@segment/analytics.js-integration-hubspot"),
                inspectlet: require("@segment/analytics.js-integration-inspectlet"),
                intercom: require("@segment/analytics.js-integration-intercom"),
                "keen-io": require("@segment/analytics.js-integration-keen-io"),
                kissmetrics: require("@segment/analytics.js-integration-kissmetrics"),
                klaviyo: require("@segment/analytics.js-integration-klaviyo"),
                "linkedin-insight-tag": require("@segment/analytics.js-integrations/integrations/linkedin-insight-tag"),
                livechat: require("@segment/analytics.js-integration-livechat"),
                "lucky-orange": require("@segment/analytics.js-integration-lucky-orange"),
                madkudu: require("@segment/analytics.js-integration-madkudu"),
                mixpanel: require("@segment/analytics.js-integration-mixpanel"),
                mouseflow: require("@segment/analytics.js-integration-mouseflow"),
                mousestats: require("@segment/analytics.js-integration-mousestats"),
                olark: require("@segment/analytics.js-integration-olark"),
                optimizely: require("@segment/analytics.js-integration-optimizely"),
                parsely: require("@segment/analytics.js-integration-parsely"),
                pingdom: require("@segment/analytics.js-integration-pingdom"),
                "pinterest-tag": require("@segment/analytics.js-integrations/integrations/pinterest-tag"),
                piwik: require("@segment/analytics.js-integration-piwik"),
                qualaroo: require("@segment/analytics.js-integration-qualaroo"),
                quantcast: require("@segment/analytics.js-integration-quantcast"),
                replaybird: require("@replaybird/analytics.js-integrations/integrations/replaybird"),
                rollbar: require("@segment/analytics.js-integration-rollbar"),
                saasquatch: require("@segment/analytics.js-integration-saasquatch"),
                satismeter: require("@segment/analytics.js-integration-satismeter"),
                sentry: require("@segment/analytics.js-integration-sentry"),
                snapengage: require("@segment/analytics.js-integration-snapengage"),
                taplytics: require("@segment/analytics.js-integration-taplytics"),
                tapstream: require("@segment/analytics.js-integration-tapstream"),
                "twitter-ads": require("@segment/analytics.js-integration-twitter-ads"),
                uservoice: require("@segment/analytics.js-integration-uservoice"),
                "visual-website-optimizer": require("@segment/analytics.js-integration-visual-website-optimizer"),
                webengage: require("@segment/analytics.js-integration-webengage"),
                woopra: require("@segment/analytics.js-integration-woopra"),
                wootric: require("@segment/analytics.js-integration-wootric"),
                "yandex-metrica": require("@segment/analytics.js-integration-yandex-metrica")
            }
        }, {
            "@replaybird/analytics.js-integrations/integrations/replaybird": 18,
            "@segment/analytics.js-integration-adroll": 33,
            "@segment/analytics.js-integration-adwords": 34,
            "@segment/analytics.js-integration-alexa": 41,
            "@segment/analytics.js-integration-ambassador": 48,
            "@segment/analytics.js-integration-amplitude": 55,
            "@segment/analytics.js-integration-appboy": 62,
            "@segment/analytics.js-integration-appcues": 63,
            "@segment/analytics.js-integration-bugsnag": 70,
            "@segment/analytics.js-integration-castle": 77,
            "@segment/analytics.js-integration-chameleon": 78,
            "@segment/analytics.js-integration-chartbeat": 85,
            "@segment/analytics.js-integration-clicky": 86,
            "@segment/analytics.js-integration-crazy-egg": 93,
            "@segment/analytics.js-integration-curebit": 100,
            "@segment/analytics.js-integration-customerio": 101,
            "@segment/analytics.js-integration-drift": 108,
            "@segment/analytics.js-integration-drip": 115,
            "@segment/analytics.js-integration-elevio": 116,
            "@segment/analytics.js-integration-errorception": 118,
            "@segment/analytics.js-integration-facebook-pixel": 126,
            "@segment/analytics.js-integration-fullstory": 127,
            "@segment/analytics.js-integration-gauges": 135,
            "@segment/analytics.js-integration-google-analytics": 142,
            "@segment/analytics.js-integration-gosquared": 143,
            "@segment/analytics.js-integration-heap": 144,
            "@segment/analytics.js-integration-hellobar": 145,
            "@segment/analytics.js-integration-hubspot": 152,
            "@segment/analytics.js-integration-inspectlet": 153,
            "@segment/analytics.js-integration-intercom": 160,
            "@segment/analytics.js-integration-keen-io": 167,
            "@segment/analytics.js-integration-kissmetrics": 174,
            "@segment/analytics.js-integration-klaviyo": 181,
            "@segment/analytics.js-integration-livechat": 182,
            "@segment/analytics.js-integration-lucky-orange": 189,
            "@segment/analytics.js-integration-madkudu": 190,
            "@segment/analytics.js-integration-mixpanel": 197,
            "@segment/analytics.js-integration-mouseflow": 204,
            "@segment/analytics.js-integration-mousestats": 205,
            "@segment/analytics.js-integration-olark": 212,
            "@segment/analytics.js-integration-optimizely": 219,
            "@segment/analytics.js-integration-parsely": 228,
            "@segment/analytics.js-integration-pingdom": 230,
            "@segment/analytics.js-integration-piwik": 237,
            "@segment/analytics.js-integration-qualaroo": 244,
            "@segment/analytics.js-integration-quantcast": 251,
            "@segment/analytics.js-integration-rollbar": 252,
            "@segment/analytics.js-integration-saasquatch": 259,
            "@segment/analytics.js-integration-satismeter": 266,
            "@segment/analytics.js-integration-sentry": 273,
            "@segment/analytics.js-integration-snapengage": 280,
            "@segment/analytics.js-integration-taplytics": 287,
            "@segment/analytics.js-integration-tapstream": 294,
            "@segment/analytics.js-integration-twitter-ads": 301,
            "@segment/analytics.js-integration-uservoice": 302,
            "@segment/analytics.js-integration-visual-website-optimizer": 309,
            "@segment/analytics.js-integration-webengage": 310,
            "@segment/analytics.js-integration-woopra": 317,
            "@segment/analytics.js-integration-wootric": 324,
            "@segment/analytics.js-integration-yandex-metrica": 331,
            "@segment/analytics.js-integrations/integrations/bing-ads": 344,
            "@segment/analytics.js-integrations/integrations/google-adwords-new": 345,
            "@segment/analytics.js-integrations/integrations/linkedin-insight-tag": 346,
            "@segment/analytics.js-integrations/integrations/pinterest-tag": 347,
            "analytics.js-integration-hotjar": 362
        }],
        3: [function(require, module, exports) {
            "use strict";
            var arity = require("@ndhoule/arity");
            var objToString = Object.prototype.toString;
            var isFunction = function(val) {
                return typeof val === "function"
            };
            var isNumber = function(val) {
                var type = typeof val;
                return type === "number" || type === "object" && objToString.call(val) === "[object Number]"
            };
            var after = function after(n, fn) {
                if (!isNumber(n)) {
                    throw new TypeError("Expected a number but received " + typeof n)
                }
                if (!isFunction(fn)) {
                    throw new TypeError("Expected a function but received " + typeof fn)
                }
                var callCount = 0;
                return arity(fn.length, function() {
                    callCount += 1;
                    if (callCount < n) {
                        return
                    }
                    return fn.apply(this, arguments)
                })
            };
            module.exports = after
        }, {
            "@ndhoule/arity": 4
        }],
        4: [function(require, module, exports) {
            "use strict";
            var objToString = Object.prototype.toString;
            var isFunction = function(val) {
                return typeof val === "function"
            };
            var isNumber = function(val) {
                var type = typeof val;
                return type === "number" || type === "object" && objToString.call(val) === "[object Number]"
            };
            var createParams = function createParams(n) {
                var args = [];
                for (var i = 1; i <= n; i += 1) {
                    args.push("arg" + i)
                }
                return args
            };
            var createArityWrapper = function createArityWrapper(n) {
                var paramNames = createParams(n).join(", ");
                var wrapperBody = "".concat("  return function(", paramNames, ") {\n", "    return func.apply(this, arguments);\n", "  };");
                return new Function("func", wrapperBody)
            };
            var arityWrapperCache = [function(fn) {
                return function() {
                    return fn.apply(this, arguments)
                }
            }, function(fn) {
                return function(arg1) {
                    return fn.apply(this, arguments)
                }
            }, function(fn) {
                return function(arg1, arg2) {
                    return fn.apply(this, arguments)
                }
            }, function(fn) {
                return function(arg1, arg2, arg3) {
                    return fn.apply(this, arguments)
                }
            }, function(fn) {
                return function(arg1, arg2, arg3, arg4) {
                    return fn.apply(this, arguments)
                }
            }, function(fn) {
                return function(arg1, arg2, arg3, arg4, arg5) {
                    return fn.apply(this, arguments)
                }
            }];
            var arity = function arity(n, func) {
                if (!isFunction(func)) {
                    throw new TypeError("Expected a function but got " + typeof func)
                }
                n = Math.max(isNumber(n) ? n : 0, 0);
                if (!arityWrapperCache[n]) {
                    arityWrapperCache[n] = createArityWrapper(n)
                }
                return arityWrapperCache[n](func)
            };
            module.exports = arity
        }, {}],
        5: [function(require, module, exports) {
            "use strict";
            var type = require("component-type");
            var clone = function clone(obj) {
                var t = type(obj);
                if (t === "object") {
                    var copy = {};
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            copy[key] = clone(obj[key])
                        }
                    }
                    return copy
                }
                if (t === "array") {
                    var copy = new Array(obj.length);
                    for (var i = 0, l = obj.length; i < l; i++) {
                        copy[i] = clone(obj[i])
                    }
                    return copy
                }
                if (t === "regexp") {
                    var flags = "";
                    flags += obj.multiline ? "m" : "";
                    flags += obj.global ? "g" : "";
                    flags += obj.ignoreCase ? "i" : "";
                    return new RegExp(obj.source, flags)
                }
                if (t === "date") {
                    return new Date(obj.getTime())
                }
                return obj
            };
            module.exports = clone
        }, {
            "component-type": 379
        }],
        6: [function(require, module, exports) {
            "use strict";
            var drop = require("@ndhoule/drop");
            var rest = require("@ndhoule/rest");
            var has = Object.prototype.hasOwnProperty;
            var objToString = Object.prototype.toString;
            var isObject = function isObject(value) {
                return Boolean(value) && typeof value === "object"
            };
            var isPlainObject = function isPlainObject(value) {
                return Boolean(value) && objToString.call(value) === "[object Object]"
            };
            var shallowCombiner = function shallowCombiner(target, source, value, key) {
                if (has.call(source, key) && target[key] === undefined) {
                    target[key] = value
                }
                return source
            };
            var deepCombiner = function(target, source, value, key) {
                if (has.call(source, key)) {
                    if (isPlainObject(target[key]) && isPlainObject(value)) {
                        target[key] = defaultsDeep(target[key], value)
                    } else if (target[key] === undefined) {
                        target[key] = value
                    }
                }
                return source
            };
            var defaultsWith = function(combiner, target) {
                if (!isObject(target)) {
                    return target
                }
                combiner = combiner || shallowCombiner;
                var sources = drop(2, arguments);
                for (var i = 0; i < sources.length; i += 1) {
                    for (var key in sources[i]) {
                        combiner(target, sources[i], sources[i][key], key)
                    }
                }
                return target
            };
            var defaultsDeep = function defaultsDeep(target) {
                return defaultsWith.apply(null, [deepCombiner, target].concat(rest(arguments)))
            };
            var defaults = function(target) {
                return defaultsWith.apply(null, [null, target].concat(rest(arguments)))
            };
            module.exports = defaults;
            module.exports.deep = defaultsDeep
        }, {
            "@ndhoule/drop": 7,
            "@ndhoule/rest": 16
        }],
        7: [function(require, module, exports) {
            "use strict";
            var max = Math.max;
            var drop = function drop(count, collection) {
                var length = collection ? collection.length : 0;
                if (!length) {
                    return []
                }
                var toDrop = max(Number(count) || 0, 0);
                var resultsLength = max(length - toDrop, 0);
                var results = new Array(resultsLength);
                for (var i = 0; i < resultsLength; i += 1) {
                    results[i] = collection[i + toDrop]
                }
                return results
            };
            module.exports = drop
        }, {}],
        8: [function(require, module, exports) {
            "use strict";
            var keys = require("@ndhoule/keys");
            var objToString = Object.prototype.toString;
            var isNumber = function isNumber(val) {
                var type = typeof val;
                return type === "number" || type === "object" && objToString.call(val) === "[object Number]"
            };
            var isArray = typeof Array.isArray === "function" ? Array.isArray : function isArray(val) {
                return objToString.call(val) === "[object Array]"
            };
            var isArrayLike = function isArrayLike(val) {
                return val != null && (isArray(val) || val !== "function" && isNumber(val.length))
            };
            var arrayEach = function arrayEach(iterator, array) {
                for (var i = 0; i < array.length; i += 1) {
                    if (iterator(array[i], i, array) === false) {
                        break
                    }
                }
            };
            var baseEach = function baseEach(iterator, object) {
                var ks = keys(object);
                for (var i = 0; i < ks.length; i += 1) {
                    if (iterator(object[ks[i]], ks[i], object) === false) {
                        break
                    }
                }
            };
            var each = function each(iterator, collection) {
                return (isArrayLike(collection) ? arrayEach : baseEach).call(this, iterator, collection)
            };
            module.exports = each
        }, {
            "@ndhoule/keys": 13
        }],
        9: [function(require, module, exports) {
            "use strict";
            var each = require("@ndhoule/each");
            var every = function every(predicate, collection) {
                if (typeof predicate !== "function") {
                    throw new TypeError("`predicate` must be a function but was a " + typeof predicate)
                }
                var result = true;
                each(function(val, key, collection) {
                    result = !!predicate(val, key, collection);
                    if (!result) {
                        return false
                    }
                }, collection);
                return result
            };
            module.exports = every
        }, {
            "@ndhoule/each": 8
        }],
        10: [function(require, module, exports) {
            "use strict";
            var has = Object.prototype.hasOwnProperty;
            var extend = function extend(dest) {
                var sources = Array.prototype.slice.call(arguments, 1);
                for (var i = 0; i < sources.length; i += 1) {
                    for (var key in sources[i]) {
                        if (has.call(sources[i], key)) {
                            dest[key] = sources[i][key]
                        }
                    }
                }
                return dest
            };
            module.exports = extend
        }, {}],
        11: [function(require, module, exports) {
            "use strict";
            var each = require("@ndhoule/each");
            var foldl = function foldl(iterator, accumulator, collection) {
                if (typeof iterator !== "function") {
                    throw new TypeError("Expected a function but received a " + typeof iterator)
                }
                each(function(val, i, collection) {
                    accumulator = iterator(accumulator, val, i, collection)
                }, collection);
                return accumulator
            };
            module.exports = foldl
        }, {
            "@ndhoule/each": 8
        }],
        12: [function(require, module, exports) {
            "use strict";
            var each = require("@ndhoule/each");
            var strIndexOf = String.prototype.indexOf;
            var sameValueZero = function sameValueZero(value1, value2) {
                if (value1 === value2) {
                    return value1 !== 0 || 1 / value1 === 1 / value2
                }
                return value1 !== value1 && value2 !== value2
            };
            var includes = function includes(searchElement, collection) {
                var found = false;
                if (typeof collection === "string") {
                    return strIndexOf.call(collection, searchElement) !== -1
                }
                each(function(value) {
                    if (sameValueZero(value, searchElement)) {
                        found = true;
                        return false
                    }
                }, collection);
                return found
            };
            module.exports = includes
        }, {
            "@ndhoule/each": 8
        }],
        13: [function(require, module, exports) {
            "use strict";
            var hop = Object.prototype.hasOwnProperty;
            var strCharAt = String.prototype.charAt;
            var toStr = Object.prototype.toString;
            var charAt = function(str, index) {
                return strCharAt.call(str, index)
            };
            var has = function has(context, prop) {
                return hop.call(context, prop)
            };
            var isString = function isString(val) {
                return toStr.call(val) === "[object String]"
            };
            var isArrayLike = function isArrayLike(val) {
                return val != null && (typeof val !== "function" && typeof val.length === "number")
            };
            var indexKeys = function indexKeys(target, pred) {
                pred = pred || has;
                var results = [];
                for (var i = 0, len = target.length; i < len; i += 1) {
                    if (pred(target, i)) {
                        results.push(String(i))
                    }
                }
                return results
            };
            var objectKeys = function objectKeys(target, pred) {
                pred = pred || has;
                var results = [];
                for (var key in target) {
                    if (pred(target, key)) {
                        results.push(String(key))
                    }
                }
                return results
            };
            var keys = function keys(source) {
                if (source == null) {
                    return []
                }
                if (isString(source)) {
                    return indexKeys(source, charAt)
                }
                if (isArrayLike(source)) {
                    return indexKeys(source, has)
                }
                return objectKeys(source)
            };
            module.exports = keys
        }, {}],
        14: [function(require, module, exports) {
            "use strict";
            var each = require("@ndhoule/each");
            var map = function map(iterator, collection) {
                if (typeof iterator !== "function") {
                    throw new TypeError("Expected a function but received a " + typeof iterator)
                }
                var result = [];
                each(function(val, i, collection) {
                    result.push(iterator(val, i, collection))
                }, collection);
                return result
            };
            module.exports = map
        }, {
            "@ndhoule/each": 8
        }],
        15: [function(require, module, exports) {
            "use strict";
            var objToString = Object.prototype.toString;
            var existy = function(val) {
                return val != null
            };
            var isArray = function(val) {
                return objToString.call(val) === "[object Array]"
            };
            var isString = function(val) {
                return typeof val === "string" || objToString.call(val) === "[object String]"
            };
            var isObject = function(val) {
                return val != null && typeof val === "object"
            };
            var pick = function pick(props, object) {
                if (!existy(object) || !isObject(object)) {
                    return {}
                }
                if (isString(props)) {
                    props = [props]
                }
                if (!isArray(props)) {
                    props = []
                }
                var result = {};
                for (var i = 0; i < props.length; i += 1) {
                    if (isString(props[i]) && props[i] in object) {
                        result[props[i]] = object[props[i]]
                    }
                }
                return result
            };
            module.exports = pick
        }, {}],
        16: [function(require, module, exports) {
            "use strict";
            var max = Math.max;
            var rest = function rest(collection) {
                if (collection == null || !collection.length) {
                    return []
                }
                var results = new Array(max(collection.length - 2, 0));
                for (var i = 1; i < collection.length; i += 1) {
                    results[i - 1] = collection[i]
                }
                return results
            };
            module.exports = rest
        }, {}],
        17: [function(require, module, exports) {
            "use strict";
            var keys = require("@ndhoule/keys");
            var values = function values(source) {
                var ks = keys(source);
                var results = new Array(ks.length);
                for (var i = 0; i < ks.length; i += 1) {
                    results[i] = source[ks[i]]
                }
                return results
            };
            module.exports = values
        }, {
            "@ndhoule/keys": 13
        }],
        18: [function(require, module, exports) {
            "use strict";
            var camel = require("camelcase");
            var foldl = require("@ndhoule/foldl");
            var integration = require("@segment/analytics.js-integration");
            var ReplayBird = module.exports = integration("ReplayBird").option("siteKey", "").option("debug", false);
            ReplayBird.prototype.initialize = function() {
                ! function(a, b, c, d, e, f, g, h) {
                    a.ReplayBirdObject = e, a[e] = a[e] || function() {
                        (a[e].o = a[e].o || []).push(arguments)
                    }, g = b.createElement(c), h = b.getElementsByTagName(c)[0], g.async = 1, g.src = d, a.__replaybirdNoConflict = !!f, h.parentNode.insertBefore(g, h)
                }(window, document, "script", "https://cdn.replaybird.com/replaybird.min.js", "_rb");
                _rb("apikey", this.options.siteKey);
                _rb("debugMode", this.options.debug);
                this.ready()
            };
            ReplayBird.prototype.loaded = function() {
                return !!window.ReplayBird
            };
            ReplayBird.prototype.identify = function(identify) {
                if (!identify.userId()) {
                    return this.debug("user id is required")
                }
                var traits = identify.traits({
                    name: "name"
                });
                var newTraits = foldl(function(results, value, key) {
                    var rs = results;
                    if (key !== "id") {
                        rs[key === "name" || key === "email" ? key : camelCaseField(key)] = value
                    }
                    return rs
                }, {}, traits);
                if (identify.userId()) {
                    window.ReplayBird.identify(String(identify.userId()), newTraits)
                }
            };
            ReplayBird.prototype.track = function(track) {
                window.ReplayBird.event(track.event(), track.properties())
            };

            function camelCaseField(fieldName) {
                var parts = fieldName.split("_");
                if (parts.length > 1) {
                    var typeSuffix = parts.pop();
                    switch (typeSuffix) {
                        case "str":
                        case "int":
                        case "date":
                        case "real":
                        case "bool":
                        case "strs":
                        case "ints":
                        case "dates":
                        case "reals":
                        case "bools":
                            return camel(parts.join("_")) + "_" + typeSuffix;
                        default:
                    }
                }
                return camel(fieldName)
            }
        }, {
            "@ndhoule/foldl": 11,
            "@segment/analytics.js-integration": 338,
            camelcase: 364
        }],
        19: [function(require, module, exports) {
            var type = require("component-type");
            var clone = require("component-clone");
            module.exports = alias;

            function alias(obj, method) {
                switch (type(method)) {
                    case "object":
                        return aliasByDictionary(clone(obj), method);
                    case "function":
                        return aliasByFunction(clone(obj), method)
                }
            }

            function aliasByDictionary(obj, aliases) {
                for (var key in aliases) {
                    if (undefined === obj[key]) continue;
                    obj[aliases[key]] = obj[key];
                    delete obj[key]
                }
                return obj
            }

            function aliasByFunction(obj, convert) {
                var output = {};
                for (var key in obj) output[convert(key)] = obj[key];
                return output
            }
        }, {
            "component-clone": 366,
            "component-type": 379
        }],
        20: [function(require, module, exports) {
            (function(global) {
                "use strict";
                var _analytics = global.analytics;
                var Alias = require("segmentio-facade").Alias;
                var Emitter = require("component-emitter");
                var Facade = require("segmentio-facade");
                var Group = require("segmentio-facade").Group;
                var Identify = require("segmentio-facade").Identify;
                var MiddlewareChain = require("./middleware").Chain;
                var Page = require("segmentio-facade").Page;
                var Track = require("segmentio-facade").Track;
                var after = require("@ndhoule/after");
                var bindAll = require("bind-all");
                var clone = require("@ndhoule/clone");
                var extend = require("extend");
                var cookie = require("./cookie");
                var metrics = require("./metrics");
                var debug = require("debug");
                var defaults = require("@ndhoule/defaults");
                var each = require("@ndhoule/each");
                var foldl = require("@ndhoule/foldl");
                var group = require("./group");
                var is = require("is");
                var isMeta = require("@segment/is-meta");
                var keys = require("@ndhoule/keys");
                var memory = require("./memory");
                var nextTick = require("next-tick");
                var normalize = require("./normalize");
                var on = require("component-event").bind;
                var pageDefaults = require("./pageDefaults");
                var pick = require("@ndhoule/pick");
                var prevent = require("@segment/prevent-default");
                var querystring = require("component-querystring");
                var store = require("./store");
                var user = require("./user");
                var type = require("component-type");

                function Analytics() {
                    this._options({});
                    this.Integrations = {};
                    this._integrationMiddlewares = new MiddlewareChain;
                    this._integrations = {};
                    this._readied = false;
                    this._timeout = 300;
                    this._user = user;
                    this.log = debug("analytics.js");
                    bindAll(this);
                    var self = this;
                    this.on("initialize", function(settings, options) {
                        if (options.initialPageview) self.page();
                        self._parseQuery(window.location.search)
                    })
                }
                Emitter(Analytics.prototype);
                Analytics.prototype.use = function(plugin) {
                    plugin(this);
                    return this
                };
                Analytics.prototype.addIntegration = function(Integration) {
                    var name = Integration.prototype.name;
                    if (!name) throw new TypeError("attempted to add an invalid integration");
                    this.Integrations[name] = Integration;
                    return this
                };
                Analytics.prototype.addIntegrationMiddleware = function(middleware) {
                    if (this.initialized) throw new Error("attempted to add middleware after initialization");
                    this._integrationMiddlewares.add(middleware);
                    return this
                };
                Analytics.prototype.init = Analytics.prototype.initialize = function(settings, options) {
                    settings = settings || {};
                    options = options || {};
                    this._options(options);
                    this._readied = false;
                    var self = this;
                    each(function(opts, name) {
                        var Integration = self.Integrations[name];
                        if (!Integration) delete settings[name]
                    }, settings);
                    each(function(opts, name) {
                        if (options.integrations) {
                            if (options.integrations[name] === false || options.integrations.All === false && !options.integrations[name]) {
                                return
                            }
                        }
                        var Integration = self.Integrations[name];
                        var clonedOpts = {};
                        extend(true, clonedOpts, opts);
                        var integration = new Integration(clonedOpts);
                        self.log("initialize %o - %o", name, opts);
                        self.add(integration)
                    }, settings);
                    var integrations = this._integrations;
                    user.load();
                    group.load();
                    var integrationCount = keys(integrations).length;
                    var ready = after(integrationCount, function() {
                        self._readied = true;
                        self.emit("ready")
                    });
                    if (integrationCount <= 0) {
                        ready()
                    }
                    this.failedInitializations = [];
                    each(function(integration) {
                        if (options.initialPageview && integration.options.initialPageview === false) {
                            integration.page = after(2, integration.page)
                        }
                        integration.analytics = self;
                        integration.once("ready", ready);
                        try {
                            metrics.increment("analytics_js.integration.invoke", {
                                method: "initialize",
                                integration_name: integration.name
                            });
                            integration.initialize()
                        } catch (e) {
                            var integrationName = integration.name;
                            metrics.increment("analytics_js.integration.invoke.error", {
                                method: "initialize",
                                integration_name: integration.name
                            });
                            self.failedInitializations.push(integrationName);
                            self.log("Error initializing %s integration: %o", integrationName, e);
                            integration.ready()
                        }
                    }, integrations);
                    this.initialized = true;
                    this.emit("initialize", settings, options);
                    return this
                };
                Analytics.prototype.setAnonymousId = function(id) {
                    this.user().anonymousId(id);
                    return this
                };
                Analytics.prototype.add = function(integration) {
                    this._integrations[integration.name] = integration;
                    return this
                };
                Analytics.prototype.identify = function(id, traits, options, fn) {
                    if (is.fn(options)) fn = options, options = null;
                    if (is.fn(traits)) fn = traits, options = null, traits = null;
                    if (is.object(id)) options = traits, traits = id, id = user.id();
                    user.identify(id, traits);
                    var msg = this.normalize({
                        options: options,
                        traits: user.traits(),
                        userId: user.id()
                    });
                    if (this.options.integrations) {
                        defaults(msg.integrations, this.options.integrations)
                    }
                    this._invoke("identify", new Identify(msg));
                    this.emit("identify", id, traits, options);
                    this._callback(fn);
                    return this
                };
                Analytics.prototype.user = function() {
                    return user
                };
                Analytics.prototype.group = function(id, traits, options, fn) {
                    if (!arguments.length) return group;
                    if (is.fn(options)) fn = options, options = null;
                    if (is.fn(traits)) fn = traits, options = null, traits = null;
                    if (is.object(id)) options = traits, traits = id, id = group.id();
                    group.identify(id, traits);
                    var msg = this.normalize({
                        options: options,
                        traits: group.traits(),
                        groupId: group.id()
                    });
                    if (this.options.integrations) {
                        defaults(msg.integrations, this.options.integrations)
                    }
                    this._invoke("group", new Group(msg));
                    this.emit("group", id, traits, options);
                    this._callback(fn);
                    return this
                };
                Analytics.prototype.track = function(event, properties, options, fn) {
                    if (is.fn(options)) fn = options, options = null;
                    if (is.fn(properties)) fn = properties, options = null, properties = null;
                    var plan = this.options.plan || {};
                    var events = plan.track || {};
                    var planIntegrationOptions = {};
                    var msg = this.normalize({
                        properties: properties,
                        options: options,
                        event: event
                    });
                    plan = events[event];
                    if (plan) {
                        this.log("plan %o - %o", event, plan);
                        if (plan.enabled === false) {
                            planIntegrationOptions = {
                                All: false,
                                "Segment.io": true
                            }
                        } else {
                            planIntegrationOptions = plan.integrations || {}
                        }
                    } else {
                        var defaultPlan = events.__default || {
                            enabled: true
                        };
                        if (!defaultPlan.enabled) {
                            planIntegrationOptions = {
                                All: false,
                                "Segment.io": true
                            }
                        }
                    }
                    defaults(msg.integrations, this._mergeInitializeAndPlanIntegrations(planIntegrationOptions));
                    this._invoke("track", new Track(msg));
                    this.emit("track", event, properties, options);
                    this._callback(fn);
                    return this
                };
                Analytics.prototype.trackClick = Analytics.prototype.trackLink = function(links, event, properties) {
                    if (!links) return this;
                    if (type(links) === "element") links = [links];
                    var self = this;
                    each(function(el) {
                        if (type(el) !== "element") {
                            throw new TypeError("Must pass HTMLElement to `analytics.trackLink`.")
                        }
                        on(el, "click", function(e) {
                            var ev = is.fn(event) ? event(el) : event;
                            var props = is.fn(properties) ? properties(el) : properties;
                            var href = el.getAttribute("href") || el.getAttributeNS("http://www.w3.org/1999/xlink", "href") || el.getAttribute("xlink:href");
                            self.track(ev, props);
                            if (href && el.target !== "_blank" && !isMeta(e)) {
                                prevent(e);
                                self._callback(function() {
                                    window.location.href = href
                                })
                            }
                        })
                    }, links);
                    return this
                };
                Analytics.prototype.trackSubmit = Analytics.prototype.trackForm = function(forms, event, properties) {
                    if (!forms) return this;
                    if (type(forms) === "element") forms = [forms];
                    var self = this;
                    each(function(el) {
                        if (type(el) !== "element") throw new TypeError("Must pass HTMLElement to `analytics.trackForm`.");

                        function handler(e) {
                            prevent(e);
                            var ev = is.fn(event) ? event(el) : event;
                            var props = is.fn(properties) ? properties(el) : properties;
                            self.track(ev, props);
                            self._callback(function() {
                                el.submit()
                            })
                        }
                        var $ = window.jQuery || window.Zepto;
                        if ($) {
                            $(el).submit(handler)
                        } else {
                            on(el, "submit", handler)
                        }
                    }, forms);
                    return this
                };
                Analytics.prototype.page = function(category, name, properties, options, fn) {
                    if (is.fn(options)) fn = options, options = null;
                    if (is.fn(properties)) fn = properties, options = properties = null;
                    if (is.fn(name)) fn = name, options = properties = name = null;
                    if (type(category) === "object") options = name, properties = category, name = category = null;
                    if (type(name) === "object") options = properties, properties = name, name = null;
                    if (type(category) === "string" && type(name) !== "string") name = category, category = null;
                    properties = clone(properties) || {};
                    if (name) properties.name = name;
                    if (category) properties.category = category;
                    var defs = pageDefaults();
                    defaults(properties, defs);
                    var overrides = pick(keys(defs), properties);
                    if (!is.empty(overrides)) {
                        options = options || {};
                        options.context = options.context || {};
                        options.context.page = overrides
                    }
                    var msg = this.normalize({
                        properties: properties,
                        category: category,
                        options: options,
                        name: name
                    });
                    if (this.options.integrations) {
                        defaults(msg.integrations, this.options.integrations)
                    }
                    this._invoke("page", new Page(msg));
                    this.emit("page", category, name, properties, options);
                    this._callback(fn);
                    return this
                };
                Analytics.prototype.pageview = function(url) {
                    var properties = {};
                    if (url) properties.path = url;
                    this.page(properties);
                    return this
                };
                Analytics.prototype.alias = function(to, from, options, fn) {
                    if (is.fn(options)) fn = options, options = null;
                    if (is.fn(from)) fn = from, options = null, from = null;
                    if (is.object(from)) options = from, from = null;
                    var msg = this.normalize({
                        options: options,
                        previousId: from,
                        userId: to
                    });
                    if (this.options.integrations) {
                        defaults(msg.integrations, this.options.integrations)
                    }
                    this._invoke("alias", new Alias(msg));
                    this.emit("alias", to, from, options);
                    this._callback(fn);
                    return this
                };
                Analytics.prototype.ready = function(fn) {
                    if (is.fn(fn)) {
                        if (this._readied) {
                            nextTick(fn)
                        } else {
                            this.once("ready", fn)
                        }
                    }
                    return this
                };
                Analytics.prototype.timeout = function(timeout) {
                    this._timeout = timeout
                };
                Analytics.prototype.debug = function(str) {
                    if (!arguments.length || str) {
                        debug.enable("analytics:" + (str || "*"))
                    } else {
                        debug.disable()
                    }
                };
                Analytics.prototype._options = function(options) {
                    options = options || {};
                    this.options = options;
                    cookie.options(options.cookie);
                    metrics.options(options.metrics);
                    store.options(options.localStorage);
                    user.options(options.user);
                    group.options(options.group);
                    return this
                };
                Analytics.prototype._callback = function(fn) {
                    if (is.fn(fn)) {
                        this._timeout ? setTimeout(fn, this._timeout) : nextTick(fn)
                    }
                    return this
                };
                Analytics.prototype._invoke = function(method, facade) {
                    var self = this;
                    metrics.increment("analytics_js.invoke", {
                        method: method
                    });
                    this.emit("invoke", facade);
                    var failedInitializations = self.failedInitializations || [];
                    each(function(integration, name) {
                        var facadeCopy = extend(true, new Facade({}), facade);
                        if (!facadeCopy.enabled(name)) return;
                        if (failedInitializations.indexOf(name) >= 0) {
                            self.log("Skipping invocation of .%s method of %s integration. Integration failed to initialize properly.", method, name)
                        } else {
                            try {
                                self._integrationMiddlewares.applyMiddlewares(facadeCopy, integration.name, function(result) {
                                    if (result === null) {
                                        self.log('Payload to integration "%s" was null and dropped.', name);
                                        return
                                    }
                                    if (!(result instanceof Facade)) {
                                        result = new Facade(result)
                                    }
                                    metrics.increment("analytics_js.integration.invoke", {
                                        method: method,
                                        integration_name: integration.name
                                    });
                                    integration.invoke.call(integration, method, result)
                                })
                            } catch (e) {
                                metrics.increment("analytics_js.integration.invoke.error", {
                                    method: method,
                                    integration_name: integration.name
                                });
                                self.log("Error invoking .%s method of %s integration: %o", method, name, e)
                            }
                        }
                    }, this._integrations);
                    return this
                };
                Analytics.prototype.push = function(args) {
                    var method = args.shift();
                    if (!this[method]) return;
                    this[method].apply(this, args)
                };
                Analytics.prototype.reset = function() {
                    this.user().logout();
                    this.group().logout()
                };
                Analytics.prototype._parseQuery = function(query) {
                    var q = querystring.parse(query);
                    var traits = pickPrefix("ajs_trait_", q);
                    var props = pickPrefix("ajs_prop_", q);
                    if (q.ajs_uid) this.identify(q.ajs_uid, traits);
                    if (q.ajs_event) this.track(q.ajs_event, props);
                    if (q.ajs_aid) user.anonymousId(q.ajs_aid);
                    return this;

                    function pickPrefix(prefix, object) {
                        var length = prefix.length;
                        var sub;
                        return foldl(function(acc, val, key) {
                            if (key.substr(0, length) === prefix) {
                                sub = key.substr(length);
                                acc[sub] = val
                            }
                            return acc
                        }, {}, object)
                    }
                };
                Analytics.prototype.normalize = function(msg) {
                    msg = normalize(msg, keys(this._integrations));
                    if (msg.anonymousId) user.anonymousId(msg.anonymousId);
                    msg.anonymousId = user.anonymousId();
                    msg.context.page = defaults(msg.context.page || {}, pageDefaults());
                    return msg
                };
                Analytics.prototype._mergeInitializeAndPlanIntegrations = function(planIntegrations) {
                    if (!this.options.integrations) {
                        return planIntegrations
                    }
                    var integrations = extend({}, this.options.integrations);
                    var integrationName;
                    if (planIntegrations.All === false) {
                        integrations = {
                            All: false
                        }
                    }
                    for (integrationName in planIntegrations) {
                        if (planIntegrations.hasOwnProperty(integrationName)) {
                            if (this.options.integrations[integrationName] !== false) {
                                integrations[integrationName] = planIntegrations[integrationName]
                            }
                        }
                    }
                    return integrations
                };
                Analytics.prototype.noConflict = function() {
                    window.analytics = _analytics;
                    return this
                };
                module.exports = Analytics;
                module.exports.cookie = cookie;
                module.exports.memory = memory;
                module.exports.store = store;
                module.exports.metrics = metrics
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {
            "./cookie": 21,
            "./group": 23,
            "./memory": 25,
            "./metrics": 26,
            "./middleware": 27,
            "./normalize": 28,
            "./pageDefaults": 29,
            "./store": 30,
            "./user": 31,
            "@ndhoule/after": 3,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/each": 8,
            "@ndhoule/foldl": 11,
            "@ndhoule/keys": 13,
            "@ndhoule/pick": 15,
            "@segment/is-meta": 352,
            "@segment/prevent-default": 356,
            "bind-all": 363,
            "component-emitter": 373,
            "component-event": 374,
            "component-querystring": 377,
            "component-type": 379,
            debug: 382,
            extend: 385,
            is: 392,
            "next-tick": 406,
            "segmentio-facade": 421
        }],
        21: [function(require, module, exports) {
            "use strict";
            var bindAll = require("bind-all");
            var clone = require("@ndhoule/clone");
            var cookie = require("component-cookie");
            var debug = require("debug")("analytics.js:cookie");
            var defaults = require("@ndhoule/defaults");
            var json = require("json3");
            var topDomain = require("@segment/top-domain");

            function Cookie(options) {
                this.options(options)
            }
            Cookie.prototype.options = function(options) {
                if (arguments.length === 0) return this._options;
                options = options || {};
                var domain = "." + topDomain(window.location.href);
                if (domain === ".") domain = null;
                this._options = defaults(options, {
                    maxage: 31536e6,
                    path: "/",
                    domain: domain
                });
                this.set("ajs:test", true);
                if (!this.get("ajs:test")) {
                    debug("fallback to domain=null");
                    this._options.domain = null
                }
                this.remove("ajs:test")
            };
            Cookie.prototype.set = function(key, value) {
                try {
                    value = json.stringify(value);
                    cookie(key, value, clone(this._options));
                    return true
                } catch (e) {
                    return false
                }
            };
            Cookie.prototype.get = function(key) {
                try {
                    var value = cookie(key);
                    value = value ? json.parse(value) : null;
                    return value
                } catch (e) {
                    return null
                }
            };
            Cookie.prototype.remove = function(key) {
                try {
                    cookie(key, null, clone(this._options));
                    return true
                } catch (e) {
                    return false
                }
            };
            module.exports = bindAll(new Cookie);
            module.exports.Cookie = Cookie
        }, {
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@segment/top-domain": 360,
            "bind-all": 363,
            "component-cookie": 367,
            debug: 382,
            json3: 396
        }],
        22: [function(require, module, exports) {
            "use strict";
            var clone = require("@ndhoule/clone");
            var cookie = require("./cookie");
            var debug = require("debug")("analytics:entity");
            var defaults = require("@ndhoule/defaults");
            var extend = require("@ndhoule/extend");
            var memory = require("./memory");
            var store = require("./store");
            var isodateTraverse = require("@segment/isodate-traverse");
            module.exports = Entity;

            function Entity(options) {
                this.options(options);
                this.initialize()
            }
            Entity.prototype.initialize = function() {
                cookie.set("ajs:cookies", true);
                if (cookie.get("ajs:cookies")) {
                    cookie.remove("ajs:cookies");
                    this._storage = cookie;
                    return
                }
                if (store.enabled) {
                    this._storage = store;
                    return
                }
                debug("warning using memory store both cookies and localStorage are disabled");
                this._storage = memory
            };
            Entity.prototype.storage = function() {
                return this._storage
            };
            Entity.prototype.options = function(options) {
                if (arguments.length === 0) return this._options;
                this._options = defaults(options || {}, this.defaults || {})
            };
            Entity.prototype.id = function(id) {
                switch (arguments.length) {
                    case 0:
                        return this._getId();
                    case 1:
                        return this._setId(id);
                    default:
                }
            };
            Entity.prototype._getId = function() {
                if (!this._options.persist) {
                    return this._id === undefined ? null : this._id
                }
                var cookieId = this._getIdFromCookie();
                if (cookieId) {
                    return cookieId
                }
                var lsId = this._getIdFromLocalStorage();
                if (lsId) {
                    this._setIdInCookies(lsId);
                    return lsId
                }
                return null
            };
            Entity.prototype._getIdFromCookie = function() {
                return this.storage().get(this._options.cookie.key)
            };
            Entity.prototype._getIdFromLocalStorage = function() {
                if (!this._options.localStorageFallbackDisabled) {
                    return store.get(this._options.cookie.key)
                }
                return null
            };
            Entity.prototype._setId = function(id) {
                if (this._options.persist) {
                    this._setIdInCookies(id);
                    this._setIdInLocalStorage(id)
                } else {
                    this._id = id
                }
            };
            Entity.prototype._setIdInCookies = function(id) {
                this.storage().set(this._options.cookie.key, id)
            };
            Entity.prototype._setIdInLocalStorage = function(id) {
                if (!this._options.localStorageFallbackDisabled) {
                    store.set(this._options.cookie.key, id)
                }
            };
            Entity.prototype.properties = Entity.prototype.traits = function(traits) {
                switch (arguments.length) {
                    case 0:
                        return this._getTraits();
                    case 1:
                        return this._setTraits(traits);
                    default:
                }
            };
            Entity.prototype._getTraits = function() {
                var ret = this._options.persist ? store.get(this._options.localStorage.key) : this._traits;
                return ret ? isodateTraverse(clone(ret)) : {}
            };
            Entity.prototype._setTraits = function(traits) {
                traits = traits || {};
                if (this._options.persist) {
                    store.set(this._options.localStorage.key, traits)
                } else {
                    this._traits = traits
                }
            };
            Entity.prototype.identify = function(id, traits) {
                traits = traits || {};
                var current = this.id();
                if (current === null || current === id) traits = extend(this.traits(), traits);
                if (id) this.id(id);
                this.debug("identify %o, %o", id, traits);
                this.traits(traits);
                this.save()
            };
            Entity.prototype.save = function() {
                if (!this._options.persist) return false;
                this._setId(this.id());
                this._setTraits(this.traits());
                return true
            };
            Entity.prototype.logout = function() {
                this.id(null);
                this.traits({});
                this.storage().remove(this._options.cookie.key);
                store.remove(this._options.cookie.key);
                store.remove(this._options.localStorage.key)
            };
            Entity.prototype.reset = function() {
                this.logout();
                this.options({})
            };
            Entity.prototype.load = function() {
                this.id(this.id());
                this.traits(this.traits())
            }
        }, {
            "./cookie": 21,
            "./memory": 25,
            "./store": 30,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "@segment/isodate-traverse": 353,
            debug: 382
        }],
        23: [function(require, module, exports) {
            "use strict";
            var Entity = require("./entity");
            var bindAll = require("bind-all");
            var debug = require("debug")("analytics:group");
            var inherit = require("inherits");
            Group.defaults = {
                persist: true,
                cookie: {
                    key: "ajs_group_id"
                },
                localStorage: {
                    key: "ajs_group_properties"
                }
            };

            function Group(options) {
                this.defaults = Group.defaults;
                this.debug = debug;
                Entity.call(this, options)
            }
            inherit(Group, Entity);
            module.exports = bindAll(new Group);
            module.exports.Group = Group
        }, {
            "./entity": 22,
            "bind-all": 363,
            debug: 382,
            inherits: 390
        }],
        24: [function(require, module, exports) {
            "use strict";
            var Analytics = require("./analytics");
            var analytics = new Analytics;
            analytics.require = require;
            analytics.VERSION = require("../package.json").version;
            module.exports = analytics
        }, {
            "../package.json": 32,
            "./analytics": 20
        }],
        25: [function(require, module, exports) {
            "use strict";
            var bindAll = require("bind-all");
            var clone = require("@ndhoule/clone");
            var has = Object.prototype.hasOwnProperty;
            module.exports = bindAll(new Memory);

            function Memory() {
                this.store = {}
            }
            Memory.prototype.set = function(key, value) {
                this.store[key] = clone(value);
                return true
            };
            Memory.prototype.get = function(key) {
                if (!has.call(this.store, key)) return;
                return clone(this.store[key])
            };
            Memory.prototype.remove = function(key) {
                delete this.store[key];
                return true
            }
        }, {
            "@ndhoule/clone": 5,
            "bind-all": 363
        }],
        26: [function(require, module, exports) {
            "use strict";
            var bindAll = require("bind-all");
            var send = require("@segment/send-json");
            var debug = require("debug")("analytics.js:metrics");

            function Metrics(options) {
                this.options(options)
            }
            Metrics.prototype.options = function(options) {
                options = options || {};
                this.host = options.host || "api.segment.io/v1";
                this.sampleRate = options.sampleRate || 0;
                this.flushTimer = options.flushTimer || 30 * 1e3;
                this.maxQueueSize = options.maxQueueSize || 20;
                this.queue = [];
                if (this.sampleRate > 0) {
                    var self = this;
                    setInterval(function() {
                        self._flush()
                    }, this.flushTimer)
                }
            };
            Metrics.prototype.increment = function(metric, tags) {
                if (Math.random() > this.sampleRate) {
                    return
                }
                if (this.queue.length >= this.maxQueueSize) {
                    return
                }
                this.queue.push({
                    type: "Counter",
                    metric: metric,
                    value: 1,
                    tags: tags
                });
                if (metric.indexOf("error") > 0) {
                    this._flush()
                }
            };
            Metrics.prototype._flush = function() {
                var self = this;
                if (self.queue.length <= 0) {
                    return
                }
                var payload = {
                    series: this.queue
                };
                var headers = {
                    "Content-Type": "text/plain"
                };
                self.queue = [];
                if (send.type !== "xhr") return;
                send("https://" + this.host + "/m", payload, headers, function(err, res) {
                    debug("sent %O, received %O", payload, [err, res])
                })
            };
            module.exports = bindAll(new Metrics);
            module.exports.Metrics = Metrics
        }, {
            "@segment/send-json": 357,
            "bind-all": 363,
            debug: 382
        }],
        27: [function(require, module, exports) {
            "use strict";
            var Facade = require("segmentio-facade");

            function Chain() {
                var middlewares = [];
                this.getMiddlewares = function() {
                    return middlewares.slice()
                };
                this.add = function(middleware) {
                    if (typeof middleware !== "function") throw new Error("attempted to add non-function middleware");
                    if (middlewares.indexOf(middleware) !== -1) throw new Error("middleware is already registered");
                    middlewares.push(middleware)
                };
                this.applyMiddlewares = function(facade, integration, fn) {
                    if (typeof facade !== "object") throw new Error("applyMiddlewares requires a payload object");
                    if (typeof fn !== "function") throw new Error("applyMiddlewares requires a function callback");
                    var middlewaresToApply = middlewares.slice();
                    middlewaresToApply.push(fn);
                    executeChain(facade, integration, middlewaresToApply, 0)
                }
            }

            function executeChain(payload, integration, middlewares, index) {
                if (payload === null) {
                    middlewares[middlewares.length - 1](null);
                    return
                }
                if (!(payload instanceof Facade)) {
                    payload = new Facade(payload)
                }
                var mw = middlewares[index];
                if (mw) {
                    if (middlewares[index + 1]) {
                        mw(payload, integration, function(result) {
                            executeChain(result, integration, middlewares, ++index)
                        })
                    } else {
                        mw(payload)
                    }
                }
            }
            module.exports.Chain = Chain
        }, {
            "segmentio-facade": 421
        }],
        28: [function(require, module, exports) {
            "use strict";
            var debug = require("debug")("analytics.js:normalize");
            var defaults = require("@ndhoule/defaults");
            var each = require("@ndhoule/each");
            var includes = require("@ndhoule/includes");
            var map = require("@ndhoule/map");
            var type = require("component-type");
            var uuid = require("uuid").v4;
            var json = require("json3");
            var md5 = require("spark-md5").hash;
            var has = Object.prototype.hasOwnProperty;
            module.exports = normalize;
            var toplevel = ["integrations", "anonymousId", "timestamp", "context"];

            function normalize(msg, list) {
                var lower = map(function(s) {
                    return s.toLowerCase()
                }, list);
                var opts = msg.options || {};
                var integrations = opts.integrations || {};
                var providers = opts.providers || {};
                var context = opts.context || {};
                var ret = {};
                debug("<-", msg);
                each(function(value, key) {
                    if (!integration(key)) return;
                    if (!has.call(integrations, key)) integrations[key] = value;
                    delete opts[key]
                }, opts);
                delete opts.providers;
                each(function(value, key) {
                    if (!integration(key)) return;
                    if (type(integrations[key]) === "object") return;
                    if (has.call(integrations, key) && typeof providers[key] === "boolean") return;
                    integrations[key] = value
                }, providers);
                each(function(value, key) {
                    if (includes(key, toplevel)) {
                        ret[key] = opts[key]
                    } else {
                        context[key] = opts[key]
                    }
                }, opts);
                msg.messageId = "ajs-" + md5(json.stringify(msg) + uuid());
                delete msg.options;
                ret.integrations = integrations;
                ret.context = context;
                ret = defaults(ret, msg);
                debug("->", ret);
                return ret;

                function integration(name) {
                    return !!(includes(name, list) || name.toLowerCase() === "all" || includes(name.toLowerCase(), lower))
                }
            }
        }, {
            "@ndhoule/defaults": 6,
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "@ndhoule/map": 14,
            "component-type": 379,
            debug: 382,
            json3: 396,
            "spark-md5": 428,
            uuid: 444
        }],
        29: [function(require, module, exports) {
            "use strict";
            var canonical = require("@segment/canonical");
            var includes = require("@ndhoule/includes");
            var url = require("component-url");

            function pageDefaults() {
                return {
                    path: canonicalPath(),
                    referrer: document.referrer,
                    search: location.search,
                    title: document.title,
                    url: canonicalUrl(location.search)
                }
            }

            function canonicalPath() {
                var canon = canonical();
                if (!canon) return window.location.pathname;
                var parsed = url.parse(canon);
                return parsed.pathname
            }

            function canonicalUrl(search) {
                var canon = canonical();
                if (canon) return includes("?", canon) ? canon : canon + search;
                var url = window.location.href;
                var i = url.indexOf("#");
                return i === -1 ? url : url.slice(0, i)
            }
            module.exports = pageDefaults
        }, {
            "@ndhoule/includes": 12,
            "@segment/canonical": 349,
            "component-url": 380
        }],
        30: [function(require, module, exports) {
            "use strict";
            var bindAll = require("bind-all");
            var defaults = require("@ndhoule/defaults");
            var store = require("@segment/store");

            function Store(options) {
                this.options(options)
            }
            Store.prototype.options = function(options) {
                if (arguments.length === 0) return this._options;
                options = options || {};
                defaults(options, {
                    enabled: true
                });
                this.enabled = options.enabled && store.enabled;
                this._options = options
            };
            Store.prototype.set = function(key, value) {
                if (!this.enabled) return false;
                return store.set(key, value)
            };
            Store.prototype.get = function(key) {
                if (!this.enabled) return null;
                return store.get(key)
            };
            Store.prototype.remove = function(key) {
                if (!this.enabled) return false;
                return store.remove(key)
            };
            module.exports = bindAll(new Store);
            module.exports.Store = Store
        }, {
            "@ndhoule/defaults": 6,
            "@segment/store": 358,
            "bind-all": 363
        }],
        31: [function(require, module, exports) {
            "use strict";
            var Entity = require("./entity");
            var bindAll = require("bind-all");
            var cookie = require("./cookie");
            var debug = require("debug")("analytics:user");
            var inherit = require("inherits");
            var rawCookie = require("component-cookie");
            var uuid = require("uuid");
            var localStorage = require("./store");
            User.defaults = {
                persist: true,
                cookie: {
                    key: "ajs_user_id",
                    oldKey: "ajs_user"
                },
                localStorage: {
                    key: "ajs_user_traits"
                }
            };

            function User(options) {
                this.defaults = User.defaults;
                this.debug = debug;
                Entity.call(this, options)
            }
            inherit(User, Entity);
            User.prototype.id = function(id) {
                var prev = this._getId();
                var ret = Entity.prototype.id.apply(this, arguments);
                if (prev == null) return ret;
                if (prev != id && id) this.anonymousId(null);
                return ret
            };
            User.prototype.anonymousId = function(anonymousId) {
                var store = this.storage();
                if (arguments.length) {
                    store.set("ajs_anonymous_id", anonymousId);
                    this._setAnonymousIdInLocalStorage(anonymousId);
                    return this
                }
                anonymousId = store.get("ajs_anonymous_id");
                if (anonymousId) {
                    this._setAnonymousIdInLocalStorage(anonymousId);
                    store.set("ajs_anonymous_id", anonymousId);
                    return anonymousId
                }
                if (!this._options.localStorageFallbackDisabled) {
                    anonymousId = localStorage.get("ajs_anonymous_id");
                    if (anonymousId) {
                        store.set("ajs_anonymous_id", anonymousId);
                        return anonymousId
                    }
                }
                anonymousId = rawCookie("_sio");
                if (anonymousId) {
                    anonymousId = anonymousId.split("----")[0];
                    store.set("ajs_anonymous_id", anonymousId);
                    this._setAnonymousIdInLocalStorage(anonymousId);
                    store.remove("_sio");
                    return anonymousId
                }
                anonymousId = uuid.v4();
                store.set("ajs_anonymous_id", anonymousId);
                this._setAnonymousIdInLocalStorage(anonymousId);
                return store.get("ajs_anonymous_id")
            };
            User.prototype._setAnonymousIdInLocalStorage = function(id) {
                if (!this._options.localStorageFallbackDisabled) {
                    localStorage.set("ajs_anonymous_id", id)
                }
            };
            User.prototype.logout = function() {
                Entity.prototype.logout.call(this);
                this.anonymousId(null)
            };
            User.prototype.load = function() {
                if (this._loadOldCookie()) return;
                Entity.prototype.load.call(this)
            };
            User.prototype._loadOldCookie = function() {
                var user = cookie.get(this._options.cookie.oldKey);
                if (!user) return false;
                this.id(user.id);
                this.traits(user.traits);
                cookie.remove(this._options.cookie.oldKey);
                return true
            };
            module.exports = bindAll(new User);
            module.exports.User = User
        }, {
            "./cookie": 21,
            "./entity": 22,
            "./store": 30,
            "bind-all": 363,
            "component-cookie": 367,
            debug: 382,
            inherits: 390,
            uuid: 444
        }],
        32: [function(require, module, exports) {
            module.exports = {
                _args: [
                    ["@segment/analytics.js-core@^3.0.0", "/home/malisper/FreshPaint/analytics.js"]
                ],
                _from: "@segment/analytics.js-core@>=3.0.0 <4.0.0",
                _hasShrinkwrap: false,
                _id: "@segment/analytics.js-core@3.9.0",
                _inCache: true,
                _installable: true,
                _location: "/@segment/analytics.js-core",
                _nodeVersion: "8.16.0",
                _npmOperationalInternal: {
                    host: "s3://npm-registry-packages",
                    tmp: "tmp/analytics.js-core_3.9.0_1562095903151_0.6863291401957432"
                },
                _npmUser: {
                    email: "tools+npm@segment.com",
                    name: "segment-admin"
                },
                _npmVersion: "6.4.1",
                _phantomChildren: {},
                _requested: {
                    name: "@segment/analytics.js-core",
                    raw: "@segment/analytics.js-core@^3.0.0",
                    rawSpec: "^3.0.0",
                    scope: "@segment",
                    spec: ">=3.0.0 <4.0.0",
                    type: "range"
                },
                _requiredBy: ["/"],
                _resolved: "https://registry.npmjs.org/@segment/analytics.js-core/-/analytics.js-core-3.9.0.tgz",
                _shasum: "eaf575b784c45b2184340b1a8856906771e7e39d",
                _shrinkwrap: null,
                _spec: "@segment/analytics.js-core@^3.0.0",
                _where: "/home/malisper/FreshPaint/analytics.js",
                author: {
                    email: "friends@segment.com",
                    name: "Segment"
                },
                bugs: {
                    url: "https://github.com/segmentio/analytics.js-core/issues"
                },
                commitlint: {
                    extends: ["@commitlint/config-conventional"]
                },
                config: {
                    commitizen: {
                        path: "cz-conventional-changelog"
                    }
                },
                dependencies: {
                    "@ndhoule/after": "^1.0.0",
                    "@ndhoule/clone": "^1.0.0",
                    "@ndhoule/defaults": "^2.0.1",
                    "@ndhoule/each": "^2.0.1",
                    "@ndhoule/extend": "^2.0.0",
                    "@ndhoule/foldl": "^2.0.1",
                    "@ndhoule/includes": "^2.0.1",
                    "@ndhoule/keys": "^2.0.0",
                    "@ndhoule/map": "^2.0.1",
                    "@ndhoule/pick": "^2.0.0",
                    "@segment/canonical": "^1.0.0",
                    "@segment/is-meta": "^1.0.0",
                    "@segment/isodate": "^1.0.2",
                    "@segment/isodate-traverse": "^1.0.1",
                    "@segment/prevent-default": "^1.0.0",
                    "@segment/send-json": "^3.0.0",
                    "@segment/store": "^1.3.20",
                    "@segment/top-domain": "^3.0.0",
                    "bind-all": "^1.0.0",
                    "component-cookie": "^1.1.2",
                    "component-emitter": "^1.2.1",
                    "component-event": "^0.1.4",
                    "component-querystring": "^2.0.0",
                    "component-type": "^1.2.1",
                    "component-url": "^0.2.1",
                    debug: "^0.7.4",
                    extend: "3.0.2",
                    inherits: "^2.0.1",
                    install: "^0.7.3",
                    is: "^3.1.0",
                    json3: "^3.3.2",
                    "new-date": "^1.0.0",
                    "next-tick": "^0.2.2",
                    "segmentio-facade": "^3.0.2",
                    "spark-md5": "^2.0.2",
                    uuid: "^2.0.2"
                },
                description: "The hassle-free way to integrate analytics into any web application.",
                devDependencies: {
                    "@commitlint/cli": "^7.0.0",
                    "@commitlint/config-conventional": "^7.0.1",
                    "@segment/analytics.js-integration": "^3.2.1",
                    "@segment/eslint-config": "^4.0.0",
                    browserify: "13.0.0",
                    "browserify-istanbul": "^2.0.0",
                    codecov: "^3.0.2",
                    commitizen: "^2.10.1",
                    "commitlint-circle": "^1.0.0",
                    "compat-trigger-event": "^1.0.0",
                    "component-each": "^0.2.6",
                    "cz-conventional-changelog": "^2.1.0",
                    eslint: "^4.19.1",
                    "eslint-config-prettier": "^2.9.0",
                    "eslint-plugin-mocha": "^5.0.0",
                    "eslint-plugin-react": "^7.9.1",
                    "eslint-plugin-require-path-exists": "^1.1.8",
                    husky: "^0.14.3",
                    istanbul: "^0.4.3",
                    jquery: "^3.2.1",
                    karma: "1.3.0",
                    "karma-browserify": "^5.0.4",
                    "karma-chrome-launcher": "^1.0.1",
                    "karma-coverage": "^1.0.0",
                    "karma-junit-reporter": "^1.0.0",
                    "karma-mocha": "1.0.1",
                    "karma-phantomjs-launcher": "^1.0.0",
                    "karma-sauce-launcher": "^1.0.0",
                    "karma-spec-reporter": "0.0.26",
                    "karma-summary-reporter": "^1.5.0",
                    "lint-staged": "^7.2.0",
                    mocha: "^2.2.5",
                    np: "^3.0.4",
                    "phantomjs-prebuilt": "^2.1.7",
                    "prettier-eslint-cli": "^4.7.1",
                    proclaim: "^3.4.1",
                    sinon: "^1.7.3",
                    snyk: "^1.83.0",
                    watchify: "^3.7.0"
                },
                directories: {},
                dist: {
                    fileCount: 39,
                    integrity: "sha512-gxS1v1iphKcSJv51Ft0V8YSFQthMhojtUEce0UbCM90fPJltnY0ceelQKEVdA+IJ3mXfQUcUW0/IyWPHZNKauA==",
                    "npm-signature": "-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v3.0.4\r\nComment: https://openpgpjs.org\r\n\r\nwsFcBAEBCAAQBQJdG7EfCRA9TVsSAnZWagAA+TwP/in9uHE5y1VmAu6520To\nGjXVlOK0sqxl0kH1Zcoq+EdFmjcSbAKn8BsZDDfp88qUjd3AMIJ7GsFCZgpW\nbHXLKd5UKA7sAyXXe6fTL+Pm13Xiw/QX5rtlO+5qSdAUAb7kyFnHTtDNUFrg\nAF90gmBNoBb0cisK7QykJ4/bsr0P3Kyd1V+qM9d//zETc8ufOsrw+WBWu0Nq\n7Z7+/1u83NCwiI8GUHgh0TVXayal6RsuNgO5cAOSyV3acPqVIGjCrYE9jtyH\nUYmALJ6tgWSdm8DaZiMyXLdz5ZqsdkvTOGFgs3vYQvbkeoYMUDkeOY4ib/0m\nSdNWnMGvDQc9VdYpG60BtBWyV4ep2auZtW3K3AKh8JHqDI9s6/XGuvBbdmfD\nnhgnwtsPuhPzJL6dscvW28Tq7xMMslvmQJUwEsD7w9mtRDzMUCFwvNsZ9XyD\nQNod3/TG2NFcSR7IJ1u/amGx80bQl6oOH2YaWwkE2/A+yZ14+LKq7rK2LgQa\npXpHofBgyL7YMKZ6Tzlvzaaak+hpaaPUPPlczCoEXoxFGHjJRwqeBA4jBlol\n4lvujH2VQSXNC7VWBubBFvachbxMZalSd7Qex4v/xPJgF4MCD/ET761vsxaM\n1OzIDVABoyq0iu9anvAxseKEsX0rvp7D4yc2OVg8C8ZfNBKMPHcz9vIH5nu1\nknWv\r\n=WIAW\r\n-----END PGP SIGNATURE-----\r\n",
                    shasum: "eaf575b784c45b2184340b1a8856906771e7e39d",
                    tarball: "https://registry.npmjs.org/@segment/analytics.js-core/-/analytics.js-core-3.9.0.tgz",
                    unpackedSize: 466064
                },
                gitHead: "9c49672409479d26f5813451f2fbfe96c5244a75",
                homepage: "https://github.com/segmentio/analytics.js-core#readme",
                keywords: ["analytics", "analytics.js", "segment", "segment.io"],
                license: "SEE LICENSE IN LICENSE",
                "lint-staged": {
                    linters: {
                        "*.{js,json,md}": ["git add", "prettier-eslint --write"]
                    }
                },
                main: "lib/index.js",
                maintainers: [{
                    name: "julee05",
                    email: "ju.lee@segment.com"
                }, {
                    name: "achille-roussel",
                    email: "achille.roussel@gmail.com"
                }, {
                    name: "albert.segment",
                    email: "albert@segment.com"
                }, {
                    name: "amillet89",
                    email: "alex@segment.io"
                }, {
                    name: "andreiko_ru",
                    email: "mail@andreiko.ru"
                }, {
                    name: "andyguwc",
                    email: "tianyou@segment.com"
                }, {
                    name: "anoonan",
                    email: "amnoonann@gmail.com"
                }, {
                    name: "atrivedi1",
                    email: "akash@segment.com"
                }, {
                    name: "aultimus",
                    email: "matthew.ault@gmail.com"
                }, {
                    name: "av-segment",
                    email: "andrius@segment.com"
                }, {
                    name: "bgamwell",
                    email: "brennan@segment.com"
                }, {
                    name: "boggsboggs",
                    email: "john.boggs@segment.com"
                }, {
                    name: "brienne.mcnally",
                    email: "brienne.mcnally@segment.com"
                }, {
                    name: "bryanmikaelian",
                    email: "bryan.mikaelian@gmail.com"
                }, {
                    name: "bsneed",
                    email: "brandon.sneed@segment.com"
                }, {
                    name: "calthomson",
                    email: "caledonia.thomson@segment.com"
                }, {
                    name: "calvinfo",
                    email: "calvin@calv.info"
                }, {
                    name: "carlosmecha",
                    email: "mecha.carlos@gmail.com"
                }, {
                    name: "ccnixon",
                    email: "chrisnxn@gmail.com"
                }, {
                    name: "cdrycroft",
                    email: "diggory@segment.com"
                }, {
                    name: "chenpengcheng",
                    email: "pengcheng.chen@gmail.com"
                }, {
                    name: "colinking",
                    email: "me@colinking.co"
                }, {
                    name: "davidbirdsong",
                    email: "david.birdsong@gmail.com"
                }, {
                    name: "dk1027",
                    email: "dk1027@gmail.com"
                }, {
                    name: "dominicbarnes",
                    email: "dominic@dbarnes.info"
                }, {
                    name: "dscrobonia",
                    email: "davidscrobonia@gmail.com"
                }, {
                    name: "eculver",
                    email: "e@eculver.io"
                }, {
                    name: "eesegment",
                    email: "eric.ellett@segment.com"
                }, {
                    name: "emilio-gomez-lavin",
                    email: "emilio@segment.com"
                }, {
                    name: "emily.luckette",
                    email: "emily@segment.com"
                }, {
                    name: "erickimsegment",
                    email: "eric@segment.com"
                }, {
                    name: "erikdw",
                    email: "edweathers@yahoo.com"
                }, {
                    name: "f2prateek",
                    email: "f2prateek@gmail.com"
                }, {
                    name: "falberini",
                    email: "f.alberini@gmail.com"
                }, {
                    name: "fathyb",
                    email: "fathy.boundjadj@gmail.com"
                }, {
                    name: "fauzyy",
                    email: "barlo.marc@gmail.com"
                }, {
                    name: "fforres",
                    email: "felipe.torressepulveda@gmail.com"
                }, {
                    name: "flaque",
                    email: "flaqueeau@gmail.com"
                }, {
                    name: "frannypack",
                    email: "francesythai@gmail.com"
                }, {
                    name: "garimanegi55",
                    email: "garima.negi@segment.com"
                }, {
                    name: "gnijor",
                    email: "nijor22@gmail.com"
                }, {
                    name: "gpsamson",
                    email: "gabriel.samson@segment.com"
                }, {
                    name: "hellooimkat",
                    email: "kateligad@gmail.com"
                }, {
                    name: "hieuhpham",
                    email: "hieuhpham@gmail.com"
                }, {
                    name: "illyay2017",
                    email: "illya.yanchuk@gmail.com"
                }, {
                    name: "ivolo",
                    email: "ilya@segment.io"
                }, {
                    name: "jaimal",
                    email: "jaimalsoni@gmail.com"
                }, {
                    name: "jamesmcguinness",
                    email: "james.mcguinness@segment.com"
                }, {
                    name: "jeremylarkin",
                    email: "jeremy.larkin@segment.com"
                }, {
                    name: "jeroenransijn",
                    email: "jssrdesign@gmail.com"
                }, {
                    name: "jfabre-segment",
                    email: "julien@segment.com"
                }, {
                    name: "jfarah",
                    email: "julio.farah@segment.com"
                }, {
                    name: "jknight12882",
                    email: "jknight12882@gmail.com"
                }, {
                    name: "jlee9595",
                    email: "justin@segment.com"
                }, {
                    name: "joeybloggs",
                    email: "dean@segment.com"
                }, {
                    name: "alan-segment",
                    email: "alan@segment.com"
                }, {
                    name: "kamebkj",
                    email: "kamebkj@gmail.com"
                }, {
                    name: "knoonan",
                    email: "catherine.noonan@segment.com"
                }, {
                    name: "ktrinh",
                    email: "kelly.trinh@segment.com"
                }, {
                    name: "ladanazita",
                    email: "ladanazita@gmail.com"
                }, {
                    name: "lauramunozjimenez",
                    email: "laura.munoz@segment.com"
                }, {
                    name: "laurenmreeder",
                    email: "laurenmreeder@gmail.com"
                }, {
                    name: "leifdreizler",
                    email: "leifdreizler@gmail.com"
                }, {
                    name: "manbearshark",
                    email: "igor.fcb+npm@gmail.com"
                }, {
                    name: "markhazlett",
                    email: "markhazlett9@gmail.com"
                }, {
                    name: "mericsson",
                    email: "mericsson@gmail.com"
                }, {
                    name: "monicadamborenea",
                    email: "monica@segment.com"
                }, {
                    name: "msanterre",
                    email: "mooxeh@gmail.com"
                }, {
                    name: "mshwery",
                    email: "mshwery@gmail.com"
                }, {
                    name: "n2parko",
                    email: "kevin@segment.com"
                }, {
                    name: "nettofarah",
                    email: "nettofarah@gmail.com"
                }, {
                    name: "nhi-nguyen",
                    email: "nhi.nguyen@segment.com"
                }, {
                    name: "nickatsegment",
                    email: "nick@segment.com"
                }, {
                    name: "nielssegment",
                    email: "niels@segment.com"
                }, {
                    name: "nucleartide",
                    email: "jasontu4@gmail.com"
                }, {
                    name: "nzoschke",
                    email: "nzoschke@gmail.com"
                }, {
                    name: "parsa-segment",
                    email: "parsa@segment.com"
                }, {
                    name: "peripheral",
                    email: "peter.h.richmond@gmail.com"
                }, {
                    name: "prayansh-segmentt",
                    email: "prayansh.srivastava@segment.com"
                }, {
                    name: "rarchana2001asu",
                    email: "archana@segment.com"
                }, {
                    name: "rbranson",
                    email: "rick@diodeware.com"
                }, {
                    name: "rowno",
                    email: "rowno@webspirited.com"
                }, {
                    name: "rpaul80",
                    email: "rpaul80@gmail.com"
                }, {
                    name: "ryan_segment",
                    email: "ryan.musser@segment.com"
                }, {
                    name: "sahilp",
                    email: "sahil@segment.com"
                }, {
                    name: "sanscontext",
                    email: "lrubin@segment.io"
                }, {
                    name: "scruwys1",
                    email: "scott.cruwys@segment.com"
                }, {
                    name: "segment-admin",
                    email: "tools+npm@segment.com"
                }, {
                    name: "segment-anastassia",
                    email: "anastassia@segment.com"
                }, {
                    name: "segment-andy-yeo",
                    email: "andy.yeo@segment.com"
                }, {
                    name: "segment-danielstjules",
                    email: "danielst.jules@segment.com"
                }, {
                    name: "segment-ulysse",
                    email: "ulysse@segment.com"
                }, {
                    name: "segmentaimee",
                    email: "aimee@segment.com"
                }, {
                    name: "segmentio",
                    email: "tools@segment.com"
                }, {
                    name: "shse",
                    email: "shumov.ss@gmail.com"
                }, {
                    name: "solon_aguiar",
                    email: "solon.liam.aguiar@gmail.com"
                }, {
                    name: "srthurman",
                    email: "srthurman@gmail.com"
                }, {
                    name: "stargaesser",
                    email: "agaesser@gmail.com"
                }, {
                    name: "systemizer",
                    email: "robmcqn@gmail.com"
                }, {
                    name: "tidothegreat",
                    email: "tido@segment.com"
                }, {
                    name: "tyson_segment",
                    email: "tyson@segment.com"
                }, {
                    name: "uditmehta",
                    email: "udit@segment.com"
                }, {
                    name: "vdemedes",
                    email: "vdemedes@gmail.com"
                }, {
                    name: "willallison",
                    email: "will.allison@segment.com"
                }, {
                    name: "williamgrosset",
                    email: "william.grosset@segment.com"
                }, {
                    name: "williams-blake",
                    email: "blake@segment.com"
                }, {
                    name: "xagos",
                    email: "xavier.agostini@mail.mcgill.ca"
                }, {
                    name: "yabrira",
                    email: "yanisbrianbou@gmail.com"
                }, {
                    name: "yields",
                    email: "yields@icloud.com"
                }, {
                    name: "ynguyen",
                    email: "y.nguyen@segment.com"
                }, {
                    name: "yunqiaohuang",
                    email: "yunqiaohuang@gmail.com"
                }],
                name: "@segment/analytics.js-core",
                optionalDependencies: {},
                readme: "ERROR: No README data found!",
                repository: {
                    type: "git",
                    url: "git+https://github.com/segmentio/analytics.js-core.git"
                },
                scripts: {
                    commitmsg: "commitlint -E GIT_PARAMS",
                    cz: "git-cz",
                    format: 'prettier-eslint --write --list-different "./{lib,test}/**/*.{js,json,md}"',
                    lint: 'eslint "./{lib,test}/**/*.js"',
                    np: "np --no-publish",
                    precommit: "lint-staged",
                    test: "make test"
                },
                version: "3.9.0"
            }
        }, {}],
        33: [function(require, module, exports) {
            "use strict";
            var each = require("@ndhoule/each");
            var foldl = require("@ndhoule/foldl");
            var integration = require("@segment/analytics.js-integration");
            var map = require("@ndhoule/map");
            var snake = require("to-snake-case");
            var useHttps = require("use-https");
            var AdRoll = module.exports = integration("AdRoll").assumesPageview().global("__adroll").global("__adroll_loaded").global("adroll_adv_id").global("adroll_custom_data").global("adroll_email").global("adroll_pix_id").option("advId", "").option("pixId", "").option("_version", 2).tag("http", '<script src="http://a.adroll.com/j/roundtrip.js">').tag("https", '<script src="https://s.adroll.com/j/roundtrip.js">').mapping("events");
            AdRoll.prototype.initialize = function() {
                window.adroll_adv_id = this.options.advId;
                window.adroll_pix_id = this.options.pixId;
                window.__adroll_loaded = true;
                var name = useHttps() ? "https" : "http";
                this.load(name, this.ready)
            };
            AdRoll.prototype.loaded = function() {
                return !!window.__adroll
            };
            AdRoll.prototype.page = function(page) {
                this.track(page.track(page.fullName()))
            };
            AdRoll.prototype.identify = function(identify) {
                if (identify.email()) {
                    window.adroll_email = identify.email();
                    window.__adroll.record_adroll_email("segment")
                }
            };
            AdRoll.prototype.track = function(track) {
                var events = this.events(track.event());
                var userId = this.analytics.user().id();
                var data = formulateData(track, {
                    revenue: "adroll_conversion_value"
                });
                if (this.options._version === 1) {
                    if (!events.length) events = [track.event()];
                    events = map(snake, events)
                }
                if (userId) data.user_id = userId;
                sendConversion(events, data)
            };
            AdRoll.prototype.productViewed = AdRoll.prototype.productAdded = function(track) {
                var events = this.events(track.event());
                var userId = this.analytics.user().id();
                var data = formulateData(track, {
                    id: "product_id",
                    productId: "product_id",
                    price: "adroll_conversion_value"
                });
                if (this.options._version === 1) {
                    if (!events.length) events = [track.event()];
                    events = map(snake, events)
                }
                if (userId) data.user_id = userId;
                sendConversion(events, data)
            };
            AdRoll.prototype.orderCompleted = function(track) {
                var events = this.events(track.event());
                var userId = this.analytics.user().id();
                var data = formulateData(track, {
                    orderId: "order_id",
                    revenue: "adroll_conversion_value"
                });
                if (track.properties().currency) {
                    data.adroll_currency = track.properties().currency;
                    delete data.currency
                }
                if (this.options._version === 1) {
                    if (!events.length) events = [track.event()];
                    events = map(snake, events)
                }
                if (userId) data.user_id = userId;
                sendConversion(events, data)
            };

            function sendConversion(events, data) {
                each(function(segmentId) {
                    data.adroll_segments = segmentId;
                    window.__adroll.record_user(data)
                }, events)
            }

            function formulateData(track, alias) {
                var aliases = alias || {};
                var ret = foldl(function(props, val, key) {
                    props[snake(key)] = val;
                    return props
                }, track.properties(aliases));
                return ret
            }
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/foldl": 11,
            "@ndhoule/map": 14,
            "@segment/analytics.js-integration": 338,
            "to-snake-case": 434,
            "use-https": 441
        }],
        34: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var when = require("do-when");
            var AdWords = module.exports = integration("AdWords").option("conversionId", "").option("pageRemarketing", false).option("eventMappings", []).tag('<script src="//www.googleadservices.com/pagead/conversion_async.js">');
            AdWords.prototype.initialize = function() {
                var loaded = this.loaded;
                var ready = this.ready;
                this.load(function() {
                    when(loaded, ready)
                })
            };
            AdWords.prototype.loaded = function() {
                return !!(document.body && window.google_trackConversion)
            };
            AdWords.prototype.page = function(page) {
                var remarketing = this.options.pageRemarketing;
                var id = this.options.conversionId;
                var props = page.properties();
                window.google_trackConversion({
                    google_conversion_id: id,
                    google_custom_params: {},
                    google_remarketing_only: false
                });
                if (remarketing) {
                    window.google_trackConversion({
                        google_conversion_id: id,
                        google_custom_params: props,
                        google_remarketing_only: true
                    })
                }
            };
            AdWords.prototype.track = function(track) {
                var self = this;
                var props = track.properties();
                var eventMappings = this.options.eventMappings;
                var revenue = track.revenue() || 0;
                eventMappings.forEach(function(mapping) {
                    if (mapping.value) {
                        if (mapping.value.eventName.toLowerCase() !== track.event().toLowerCase()) return;
                        var id = mapping.value.conversionId || self.options.conversionId;
                        if (mapping.value.label !== "") {
                            delete props.revenue;
                            window.google_trackConversion({
                                google_conversion_id: id,
                                google_custom_params: props,
                                google_conversion_language: "en",
                                google_conversion_format: "3",
                                google_conversion_color: "ffffff",
                                google_conversion_label: mapping.value.label,
                                google_conversion_value: revenue,
                                google_remarketing_only: false
                            })
                        }
                        if (mapping.value.remarketing) {
                            window.google_trackConversion({
                                google_conversion_id: id,
                                google_custom_params: props,
                                google_remarketing_only: true
                            })
                        }
                    } else {
                        if (mapping.eventName.toLowerCase() !== track.event().toLowerCase()) return;
                        id = mapping.conversionId || self.options.conversionId;
                        if (mapping.label !== "") {
                            delete props.revenue;
                            window.google_trackConversion({
                                google_conversion_id: id,
                                google_custom_params: props,
                                google_conversion_language: "en",
                                google_conversion_format: "3",
                                google_conversion_color: "ffffff",
                                google_conversion_label: mapping.label,
                                google_conversion_value: revenue,
                                google_remarketing_only: false
                            })
                        }
                        if (mapping.remarketing) {
                            window.google_trackConversion({
                                google_conversion_id: id,
                                google_custom_params: props,
                                google_remarketing_only: true
                            })
                        }
                    }
                })
            }
        }, {
            "@segment/analytics.js-integration": 35,
            "do-when": 383
        }],
        35: [function(require, module, exports) {
            "use strict";
            var bind = require("component-bind");
            var clone = require("@ndhoule/clone");
            var debug = require("debug");
            var defaults = require("@ndhoule/defaults");
            var extend = require("@ndhoule/extend");
            var slug = require("slug-component");
            var protos = require("./protos");
            var statics = require("./statics");

            function createIntegration(name) {
                function Integration(options) {
                    if (options && options.addIntegration) {
                        return options.addIntegration(Integration)
                    }
                    this.debug = debug("analytics:integration:" + slug(name));
                    this.options = defaults(clone(options) || {}, this.defaults);
                    this._queue = [];
                    this.once("ready", bind(this, this.flush));
                    Integration.emit("construct", this);
                    this.ready = bind(this, this.ready);
                    this._wrapInitialize();
                    this._wrapPage();
                    this._wrapTrack()
                }
                Integration.prototype.defaults = {};
                Integration.prototype.globals = [];
                Integration.prototype.templates = {};
                Integration.prototype.name = name;
                extend(Integration, statics);
                extend(Integration.prototype, protos);
                return Integration
            }
            module.exports = createIntegration
        }, {
            "./protos": 36,
            "./statics": 37,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 39,
            "slug-component": 427
        }],
        36: [function(require, module, exports) {
            "use strict";
            var Emitter = require("component-emitter");
            var after = require("@ndhoule/after");
            var each = require("@ndhoule/each");
            var events = require("analytics-events");
            var every = require("@ndhoule/every");
            var fmt = require("@segment/fmt");
            var foldl = require("@ndhoule/foldl");
            var is = require("is");
            var loadIframe = require("load-iframe");
            var loadScript = require("@segment/load-script");
            var nextTick = require("next-tick");
            var normalize = require("to-no-case");
            var has = Object.prototype.hasOwnProperty;
            var noop = function noop() {};
            var onerror = window.onerror;
            var onload = null;
            Emitter(exports);
            exports.initialize = function() {
                var ready = this.ready;
                nextTick(ready)
            };
            exports.loaded = function() {
                return false
            };
            exports.page = function(page) {};
            exports.track = function(track) {};
            exports.map = function(options, key) {
                var normalizedComparator = normalize(key);
                var mappingType = getMappingType(options);
                if (mappingType === "unknown") {
                    return []
                }
                return foldl(function(matchingValues, val, key) {
                    var compare;
                    var result;
                    if (mappingType === "map") {
                        compare = key;
                        result = val
                    }
                    if (mappingType === "array") {
                        compare = val;
                        result = val
                    }
                    if (mappingType === "mixed") {
                        compare = val.key;
                        result = val.value
                    }
                    if (normalize(compare) === normalizedComparator) {
                        matchingValues.push(result)
                    }
                    return matchingValues
                }, [], options)
            };
            exports.invoke = function(method) {
                if (!this[method]) return;
                var args = Array.prototype.slice.call(arguments, 1);
                if (!this._ready) return this.queue(method, args);
                this.debug("%s with %o", method, args);
                return this[method].apply(this, args)
            };
            exports.queue = function(method, args) {
                if (method === "page" && this._assumesPageview && !this._initialized) {
                    return this.page.apply(this, args)
                }
                this._queue.push({
                    method: method,
                    args: args
                })
            };
            exports.flush = function() {
                this._ready = true;
                var self = this;
                each(function(call) {
                    self[call.method].apply(self, call.args)
                }, this._queue);
                this._queue.length = 0
            };
            exports.reset = function() {
                for (var i = 0; i < this.globals.length; i++) {
                    window[this.globals[i]] = undefined
                }
                window.onerror = onerror;
                window.onload = onload
            };
            exports.load = function(name, locals, callback) {
                if (typeof name === "function") {
                    callback = name;
                    locals = null;
                    name = null
                }
                if (name && typeof name === "object") {
                    callback = locals;
                    locals = name;
                    name = null
                }
                if (typeof locals === "function") {
                    callback = locals;
                    locals = null
                }
                name = name || "library";
                locals = locals || {};
                locals = this.locals(locals);
                var template = this.templates[name];
                if (!template) throw new Error(fmt('template "%s" not defined.', name));
                var attrs = render(template, locals);
                callback = callback || noop;
                var self = this;
                var el;
                switch (template.type) {
                    case "img":
                        attrs.width = 1;
                        attrs.height = 1;
                        el = loadImage(attrs, callback);
                        break;
                    case "script":
                        el = loadScript(attrs, function(err) {
                            if (!err) return callback();
                            self.debug('error loading "%s" error="%s"', self.name, err)
                        });
                        delete attrs.src;
                        each(function(val, key) {
                            el.setAttribute(key, val)
                        }, attrs);
                        break;
                    case "iframe":
                        el = loadIframe(attrs, callback);
                        break;
                    default:
                }
                return el
            };
            exports.locals = function(locals) {
                locals = locals || {};
                var cache = Math.floor((new Date).getTime() / 36e5);
                if (!locals.hasOwnProperty("cache")) locals.cache = cache;
                each(function(val, key) {
                    if (!locals.hasOwnProperty(key)) locals[key] = val
                }, this.options);
                return locals
            };
            exports.ready = function() {
                this.emit("ready")
            };
            exports._wrapInitialize = function() {
                var initialize = this.initialize;
                this.initialize = function() {
                    this.debug("initialize");
                    this._initialized = true;
                    var ret = initialize.apply(this, arguments);
                    this.emit("initialize");
                    return ret
                };
                if (this._assumesPageview) this.initialize = after(2, this.initialize)
            };
            exports._wrapPage = function() {
                var page = this.page;
                this.page = function() {
                    if (this._assumesPageview && !this._initialized) {
                        return this.initialize.apply(this, arguments)
                    }
                    return page.apply(this, arguments)
                }
            };
            exports._wrapTrack = function() {
                var t = this.track;
                this.track = function(track) {
                    var event = track.event();
                    var called;
                    var ret;
                    for (var method in events) {
                        if (has.call(events, method)) {
                            var regexp = events[method];
                            if (!this[method]) continue;
                            if (!regexp.test(event)) continue;
                            ret = this[method].apply(this, arguments);
                            called = true;
                            break
                        }
                    }
                    if (!called) ret = t.apply(this, arguments);
                    return ret
                }
            };

            function getMappingType(mapping) {
                if (is.array(mapping)) {
                    return every(isMixed, mapping) ? "mixed" : "array"
                }
                if (is.object(mapping)) return "map";
                return "unknown"
            }

            function isMixed(item) {
                if (!is.object(item)) return false;
                if (!is.string(item.key)) return false;
                if (!has.call(item, "value")) return false;
                return true
            }

            function loadImage(attrs, fn) {
                fn = fn || function() {};
                var img = new Image;
                img.onerror = error(fn, "failed to load pixel", img);
                img.onload = function() {
                    fn()
                };
                img.src = attrs.src;
                img.width = 1;
                img.height = 1;
                return img
            }

            function error(fn, message, img) {
                return function(e) {
                    e = e || window.event;
                    var err = new Error(message);
                    err.event = e;
                    err.source = img;
                    fn(err)
                }
            }

            function render(template, locals) {
                return foldl(function(attrs, val, key) {
                    attrs[key] = val.replace(/\{\{\ *(\w+)\ *\}\}/g, function(_, $1) {
                        return locals[$1]
                    });
                    return attrs
                }, {}, template.attrs)
            }
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 38,
            "component-emitter": 373,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        37: [function(require, module, exports) {
            "use strict";
            var Emitter = require("component-emitter");
            var domify = require("domify");
            var each = require("@ndhoule/each");
            var includes = require("@ndhoule/includes");
            Emitter(exports);
            exports.option = function(key, value) {
                this.prototype.defaults[key] = value;
                return this
            };
            exports.mapping = function(name) {
                this.option(name, []);
                this.prototype[name] = function(key) {
                    return this.map(this.options[name], key)
                };
                return this
            };
            exports.global = function(key) {
                this.prototype.globals.push(key);
                return this
            };
            exports.assumesPageview = function() {
                this.prototype._assumesPageview = true;
                return this
            };
            exports.readyOnLoad = function() {
                this.prototype._readyOnLoad = true;
                return this
            };
            exports.readyOnInitialize = function() {
                this.prototype._readyOnInitialize = true;
                return this
            };
            exports.tag = function(name, tag) {
                if (tag == null) {
                    tag = name;
                    name = "library"
                }
                this.prototype.templates[name] = objectify(tag);
                return this
            };

            function objectify(str) {
                str = str.replace(' src="', ' data-src="');
                var el = domify(str);
                var attrs = {};
                each(function(attr) {
                    var name = attr.name === "data-src" ? "src" : attr.name;
                    if (!includes(attr.name + "=", str)) return;
                    attrs[name] = attr.value
                }, el.attributes);
                return {
                    type: el.tagName.toLowerCase(),
                    attrs: attrs
                }
            }
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384
        }],
        38: [function(require, module, exports) {
            module.exports = {
                promotionViewed: /^[ _]?promotion[ _]?viewed?[ _]?$/i,
                viewedPromotion: /^[ _]?viewed[ _]?promotion?[ _]?$/i,
                promotionClicked: /^[ _]?promotion[ _]?clicked?[ _]?$/i,
                clickedPromotion: /^[ _]?clicked[ _]?promotion?[ _]?$/i,
                productsSearched: /^[ _]?products[ _]?searched[ _]?$/i,
                productListViewed: /^[ _]?product[ _]?list[ _]?viewed[ _]?$/i,
                productListFiltered: /^[ _]?product[ _]?list[ _]?filtered[ _]?$/i,
                viewedProductCategory: /^[ _]?viewed[ _]?product[ _]?category[ _]?$/i,
                viewedProductDetails: /^[ _]?viewed[ _]?product[ _]?details?[ _]?$/i,
                productClicked: /^[ _]?product[ _]?clicked[ _]?$/i,
                clickedProduct: /^[ _]?clicked[ _]?product[ _]?$/i,
                productViewed: /^[ _]?product[ _]?viewed[ _]?$/i,
                viewedProduct: /^[ _]?viewed[ _]?product[ _]?$/i,
                productAdded: /^[ _]?product[ _]?added[ _]?$/i,
                addedProduct: /^[ _]?added[ _]?product[ _]?$/i,
                productRemoved: /^[ _]?product[ _]?removed[ _]?$/i,
                removedProduct: /^[ _]?removed[ _]?product[ _]?$/i,
                cartViewed: /^[ _]?cart[ _]?viewed[ _]?$/i,
                orderStarted: /^[ _]?order[ _]?started[ _]?$/i,
                startedOrder: /^[ _]?started[ _]?order[ _]?$/i,
                orderUpdated: /^[ _]?order[ _]?updated[ _]?$/i,
                updatedOrder: /^[ _]?updated[ _]?order[ _]?$/i,
                orderCompleted: /^[ _]?order[ _]?completed[ _]?$/i,
                completedOrder: /^[ _]?completed[ _]?order[ _]?$/i,
                orderRefunded: /^[ _]?order[ _]?refunded[ _]?$/i,
                refundedOrder: /^[ _]?refunded[ _]?order[ _]?$/i,
                orderCancelled: /^[ _]?order[ _]?cancelled[ _]?$/i,
                paymentInfoAdded: /^[ _]?payment[ _]?info[ _]?added[ _]?$/i,
                checkoutStarted: /^[ _]?checkout[ _]?started[ _]?$/i,
                checkoutStepViewed: /^[ _]?checkout[ _]?step[ _]?viewed[ _]?$/i,
                viewedCheckoutStep: /^[ _]?viewed[ _]?checkout[ _]?step[ _]?$/i,
                checkoutStepCompleted: /^[ _]?checkout[ _]?step[ _]?completed[ _]?$/i,
                completedCheckoutStep: /^[ _]?completed[ _]?checkout[ _]?step[ _]?$/i,
                couponEntered: /^[ _]?coupon[ _]?entered[ _]?$/i,
                couponApplied: /^[ _]?coupon[ _]?applied[ _]?$/i,
                couponDenied: /^[ _]?coupon[ _]?denied[ _]?$/i,
                couponRemoved: /^[ _]?coupon[ _]?removed[ _]?$/i,
                productAddedToWishlist: /^[ _]?product[ _]?added[ _]?to[ _]?wishlist[ _]?$/i,
                wishlistProductRemoved: /^[ _]?wishlist[ _]?product[ _]?removed[ _]?$/i,
                wishlistProductAddedToCart: /^[ _]?wishlist[ _]?product[ _]?added[ _]?to[ _]?cart[ _]?$/i,
                productShared: /^[ _]?product[ _]?shared[ _]?$/i,
                cartShared: /^[ _]?cart[ _]?shared[ _]?$/i,
                productRemoved: /^[ _]?product[ _]?removed[ _]?$/i,
                applicationInstalled: /^[ _]?application[ _]?installed[ _]?$/i,
                applicationUpdated: /^[ _]?application[ _]?updated[ _]?$/i,
                applicationOpened: /^[ _]?application[ _]?opened[ _]?$/i,
                applicationBackgrounded: /^[ _]?application[ _]?backgrounded[ _]?$/i,
                applicationUninstalled: /^[ _]?application[ _]?uninstalled[ _]?$/i,
                installAttributed: /^[ _]?install[ _]?attributed[ _]?$/i,
                deepLinkOpened: /^[ _]?deep[ _]?link[ _]?opened[ _]?$/i,
                pushNotificationReceived: /^[ _]?push[ _]?notification[ _]?received[ _]?$/i,
                pushNotificationTapped: /^[ _]?push[ _]?notification[ _]?received[ _]?$/i,
                pushNotificationBounced: /^[ _]?push[ _]?notification[ _]?bounced[ _]?$/i
            }
        }, {}],
        39: [function(require, module, exports) {
            (function(process) {
                exports = module.exports = require("./debug");
                exports.log = log;
                exports.formatArgs = formatArgs;
                exports.save = save;
                exports.load = load;
                exports.useColors = useColors;
                exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
                exports.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"];

                function useColors() {
                    if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
                        return true
                    }
                    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                }
                exports.formatters.j = function(v) {
                    try {
                        return JSON.stringify(v)
                    } catch (err) {
                        return "[UnexpectedJSONParseError]: " + err.message
                    }
                };

                function formatArgs(args) {
                    var useColors = this.useColors;
                    args[0] = (useColors ? "%c" : "") + this.namespace + (useColors ? " %c" : " ") + args[0] + (useColors ? "%c " : " ") + "+" + exports.humanize(this.diff);
                    if (!useColors) return;
                    var c = "color: " + this.color;
                    args.splice(1, 0, c, "color: inherit");
                    var index = 0;
                    var lastC = 0;
                    args[0].replace(/%[a-zA-Z%]/g, function(match) {
                        if ("%%" === match) return;
                        index++;
                        if ("%c" === match) {
                            lastC = index
                        }
                    });
                    args.splice(lastC, 0, c)
                }

                function log() {
                    return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                }

                function save(namespaces) {
                    try {
                        if (null == namespaces) {
                            exports.storage.removeItem("debug")
                        } else {
                            exports.storage.debug = namespaces
                        }
                    } catch (e) {}
                }

                function load() {
                    var r;
                    try {
                        r = exports.storage.debug
                    } catch (e) {}
                    if (!r && typeof process !== "undefined" && "env" in process) {
                        r = process.env.DEBUG
                    }
                    return r
                }
                exports.enable(load());

                function localstorage() {
                    try {
                        return window.localStorage
                    } catch (e) {}
                }
            }).call(this, require("_process"))
        }, {
            "./debug": 40,
            _process: 412
        }],
        40: [function(require, module, exports) {
            exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
            exports.coerce = coerce;
            exports.disable = disable;
            exports.enable = enable;
            exports.enabled = enabled;
            exports.humanize = require("ms");
            exports.names = [];
            exports.skips = [];
            exports.formatters = {};
            var prevTime;

            function selectColor(namespace) {
                var hash = 0,
                    i;
                for (i in namespace) {
                    hash = (hash << 5) - hash + namespace.charCodeAt(i);
                    hash |= 0
                }
                return exports.colors[Math.abs(hash) % exports.colors.length]
            }

            function createDebug(namespace) {
                function debug() {
                    if (!debug.enabled) return;
                    var self = debug;
                    var curr = +new Date;
                    var ms = curr - (prevTime || curr);
                    self.diff = ms;
                    self.prev = prevTime;
                    self.curr = curr;
                    prevTime = curr;
                    var args = new Array(arguments.length);
                    for (var i = 0; i < args.length; i++) {
                        args[i] = arguments[i]
                    }
                    args[0] = exports.coerce(args[0]);
                    if ("string" !== typeof args[0]) {
                        args.unshift("%O")
                    }
                    var index = 0;
                    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
                        if (match === "%%") return match;
                        index++;
                        var formatter = exports.formatters[format];
                        if ("function" === typeof formatter) {
                            var val = args[index];
                            match = formatter.call(self, val);
                            args.splice(index, 1);
                            index--
                        }
                        return match
                    });
                    exports.formatArgs.call(self, args);
                    var logFn = debug.log || exports.log || console.log.bind(console);
                    logFn.apply(self, args)
                }
                debug.namespace = namespace;
                debug.enabled = exports.enabled(namespace);
                debug.useColors = exports.useColors();
                debug.color = selectColor(namespace);
                if ("function" === typeof exports.init) {
                    exports.init(debug)
                }
                return debug
            }

            function enable(namespaces) {
                exports.save(namespaces);
                exports.names = [];
                exports.skips = [];
                var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
                var len = split.length;
                for (var i = 0; i < len; i++) {
                    if (!split[i]) continue;
                    namespaces = split[i].replace(/\*/g, ".*?");
                    if (namespaces[0] === "-") {
                        exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"))
                    } else {
                        exports.names.push(new RegExp("^" + namespaces + "$"))
                    }
                }
            }

            function disable() {
                exports.enable("")
            }

            function enabled(name) {
                var i, len;
                for (i = 0, len = exports.skips.length; i < len; i++) {
                    if (exports.skips[i].test(name)) {
                        return false
                    }
                }
                for (i = 0, len = exports.names.length; i < len; i++) {
                    if (exports.names[i].test(name)) {
                        return true
                    }
                }
                return false
            }

            function coerce(val) {
                if (val instanceof Error) return val.stack || val.message;
                return val
            }
        }, {
            ms: 401
        }],
        41: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var Alexa = module.exports = integration("Alexa").assumesPageview().global("_atrk_opts").option("account", null).option("domain", "").option("dynamic", true).tag('<script src="//d31qbv1cthcecs.cloudfront.net/atrk.js">');
            Alexa.prototype.initialize = function() {
                var self = this;
                window._atrk_opts = {
                    atrk_acct: this.options.account,
                    domain: this.options.domain,
                    dynamic: this.options.dynamic
                };
                this.load(function() {
                    window.atrk();
                    self.ready()
                })
            };
            Alexa.prototype.loaded = function() {
                return !!window.atrk
            }
        }, {
            "@segment/analytics.js-integration": 42
        }],
        42: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 43,
            "./statics": 44,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 46,
            dup: 35,
            "slug-component": 427
        }],
        43: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 45,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        44: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        45: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        46: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 47,
            _process: 412,
            dup: 39
        }],
        47: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        48: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var Ambassador = module.exports = integration("Ambassador").global("mbsy").option("uid", "").option("campaigns", {}).tag('<script src="https://cdn.getambassador.com/us.js">').mapping("events");
            Ambassador.prototype.initialize = function() {
                (function(m, b, s, y) {
                    m[b] = m[b] || {};
                    m[b].uid = s;
                    m[b].methods = ["identify", "track"];
                    m[b].queue = [];
                    m[b].factory = function(t) {
                        return function() {
                            var l = Array.prototype.slice.call(arguments);
                            l.unshift(t);
                            m[b].queue.push(l);
                            return m[b].queue
                        }
                    };
                    for (var t = 0; t < m[b].methods.length; t++) {
                        y = m[b].methods[t];
                        m[b][y] = m[b].factory(y)
                    }
                }).bind(this)(window, "mbsy", this.options.uid);
                this.load(this.ready)
            };
            Ambassador.prototype.loaded = function() {
                return !!window.mbsy
            };
            Ambassador.prototype.identify = function(identify) {
                var allowedCampaigns = getAllowedCampaigns(this.options.campaigns);
                var id = identify.userId();
                var email = identify.email();
                var traits = identify.traits();
                delete traits.id;
                if (!(id || email)) return this.debug("user id or email is required");
                var args = [];
                if (id) args.push(id);
                args.push(traits);
                var opts = {};
                opts.identifyType = "segment";
                args.push(opts);
                if (allowedCampaigns.length > 0) {
                    for (var i = 0; i < allowedCampaigns.length; i++) {
                        opts.campaign = allowedCampaigns[i];
                        window.mbsy.identify.apply(this, args)
                    }
                } else {
                    window.mbsy.identify.apply(this, args)
                }
            };
            Ambassador.prototype.track = function(track) {
                var allowedCampaigns = getAllowedCampaigns(this.options.campaigns);
                if (!allowedCampaigns) return;
                var props = track.properties();
                var evt = track.event();
                var events = this.events(evt);
                if (events.indexOf("conversion") === -1) return;
                for (var i = 0; i < allowedCampaigns.length; i++) {
                    props.campaign = allowedCampaigns[i];
                    window.mbsy.track(evt, props, {
                        conversion: true
                    })
                }
            };

            function getAllowedCampaigns(allCampaigns) {
                var allowedCampaigns = [];
                for (var c in allCampaigns) {
                    if (isValidUrl(c)) {
                        allowedCampaigns.push(allCampaigns[c])
                    }
                }
                return allowedCampaigns.length === 0 ? false : allowedCampaigns
            }

            function windowLocationContext() {
                return window.mockLocation ? parseUrl(window.mockLocation) : window.location
            }

            function containsHash(locationObj) {
                return locationObj.hash && locationObj.href.indexOf("#") >= 0
            }

            function isValidUrl(url) {
                if (!url) {
                    return false
                }
                url = url.replace(/．/g, ".");
                url = url.substr(0, 4) === "http" ? url : "http://" + url;
                var wildcardPhrase = "--" + (new Date).getTime() + "--";
                url = url.replace(/\*/g, wildcardPhrase);
                url = url.toLowerCase();
                var rawBrowserUrl = windowLocationContext().href.toLowerCase();
                var providedUrlParts = parseUrl(url);
                var browserUrlParts = parseUrl(rawBrowserUrl);
                var providedHostnameParts = decodeURIComponent(providedUrlParts.hostname).split(".").filter(function(p) {
                    return !!p
                }).reverse();
                var providedPathnameParts = decodeURIComponent(providedUrlParts.pathname).split("/").filter(function(p) {
                    return !!p
                });
                var providedHashParts = decodeURIComponent(providedUrlParts.hash).replace(/[#!]+/g, "").split("/").filter(function(p) {
                    return !!p
                });
                var browserHostnameParts = browserUrlParts.hostname.split(".").filter(function(p) {
                    return !!p
                }).reverse();
                var browserPathnameParts = browserUrlParts.pathname.split("/").filter(function(p) {
                    return !!p
                });
                var browserHashParts = browserUrlParts.hash.replace(/[#!]+/g, "").split("?")[0].split("/").filter(function(p) {
                    return !!p
                });
                for (var i = 0; i < providedHostnameParts.length; i++) {
                    if (providedHostnameParts[i] !== wildcardPhrase && providedHostnameParts[i] !== browserHostnameParts[i]) {
                        return false
                    }
                }
                for (var x = 0; x < providedPathnameParts.length; x++) {
                    if (providedPathnameParts[x] !== wildcardPhrase && providedPathnameParts[x] !== browserPathnameParts[x]) {
                        return false
                    }
                }
                if (containsHash(providedUrlParts)) {
                    for (var y = 0; y < providedHashParts.length; y++) {
                        if (providedHashParts[y] !== wildcardPhrase && providedHashParts[y] !== browserHashParts[y] || !browserHashParts[y] && !containsHash(browserUrlParts)) {
                            return false
                        }
                    }
                }
                if (providedPathnameParts.length === 0 && browserPathnameParts.length > 0) {
                    return false
                }
                return true
            }

            function parseUrl(url) {
                var urlAnchor = document.createElement("a");
                urlAnchor.href = url;
                var urlParts = {
                    hash: urlAnchor.hash,
                    href: urlAnchor.href,
                    pathname: urlAnchor.pathname,
                    port: urlAnchor.port,
                    search: urlAnchor.search,
                    hostname: urlAnchor.hostname,
                    host: urlAnchor.host,
                    origin: urlAnchor.origin,
                    protocol: urlAnchor.protocol
                };
                if (urlParts.pathname.substr(0, 1) !== "/") {
                    urlParts.pathname = "/" + urlParts.pathname
                }
                return urlParts
            }
        }, {
            "@segment/analytics.js-integration": 49
        }],
        49: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 50,
            "./statics": 51,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 53,
            dup: 35,
            "slug-component": 427
        }],
        50: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 52,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        51: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        52: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        53: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 54,
            _process: 412,
            dup: 39
        }],
        54: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        55: [function(require, module, exports) {
            "use strict";
            var bind = require("component-bind");
            var integration = require("@segment/analytics.js-integration");
            var topDomain = require("@segment/top-domain");
            var when = require("do-when");
            var is = require("is");
            var each = require("@ndhoule/each");
            var Track = require("segmentio-facade").Track;
            var umd = typeof window.define === "function" && window.define.amd;
            var src = "//d24n15hnbwhuhn.cloudfront.net/libs/amplitude-4.1.1-min.gz.js";
            var Amplitude = module.exports = integration("Amplitude").global("amplitude").option("apiKey", "").option("trackAllPages", false).option("trackNamedPages", true).option("trackCategorizedPages", true).option("trackUtmProperties", true).option("trackReferrer", false).option("batchEvents", false).option("eventUploadThreshold", 30).option("eventUploadPeriodMillis", 3e4).option("useLogRevenueV2", false).option("forceHttps", false).option("trackGclid", false).option("saveParamsReferrerOncePerSession", true).option("deviceIdFromUrlParam", false).option("mapQueryParams", {}).option("trackRevenuePerProduct", false).option("preferAnonymousIdForDeviceId", false).tag('<script src="' + src + '">');
            Amplitude.prototype.initialize = function() {
                (function(e, t) {
                    var n = e.amplitude || {
                        _q: [],
                        _iq: {}
                    };

                    function r(e, t) {
                        e.prototype[t] = function() {
                            this._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
                            return this
                        }
                    }
                    var i = function() {
                        this._q = [];
                        return this
                    };
                    var s = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset"];
                    for (var o = 0; o < s.length; o++) {
                        r(i, s[o])
                    }
                    n.Identify = i;
                    var a = function() {
                        this._q = [];
                        return this
                    };
                    var u = ["setProductId", "setQuantity", "setPrice", "setRevenueType", "setEventProperties"];
                    for (var c = 0; c < u.length; c++) {
                        r(a, u[c])
                    }
                    n.Revenue = a;
                    var l = ["init", "logEvent", "logRevenue", "setUserId", "setUserProperties", "setOptOut", "setVersionName", "setDomain", "setDeviceId", "setGlobalUserProperties", "identify", "clearUserProperties", "setGroup", "logRevenueV2", "regenerateDeviceId", "logEventWithTimestamp", "logEventWithGroups", "setSessionId"];

                    function p(e) {
                        function t(t) {
                            e[t] = function() {
                                e._q.push([t].concat(Array.prototype.slice.call(arguments, 0)))
                            }
                        }
                        for (var n = 0; n < l.length; n++) {
                            t(l[n])
                        }
                    }
                    p(n);
                    n.getInstance = function(e) {
                        e = (!e || e.length === 0 ? "$default_instance" : e).toLowerCase();
                        if (!n._iq.hasOwnProperty(e)) {
                            n._iq[e] = {
                                _q: []
                            };
                            p(n._iq[e])
                        }
                        return n._iq[e]
                    };
                    e.amplitude = n
                })(window, document);
                this.setDomain(window.location.href);
                window.amplitude.init(this.options.apiKey, null, {
                    includeUtm: this.options.trackUtmProperties,
                    includeReferrer: this.options.trackReferrer,
                    batchEvents: this.options.batchEvents,
                    eventUploadThreshold: this.options.eventUploadThreshold,
                    eventUploadPeriodMillis: this.options.eventUploadPeriodMillis,
                    forceHttps: this.options.forceHttps,
                    includeGclid: this.options.trackGclid,
                    saveParamsReferrerOncePerSession: this.options.saveParamsReferrerOncePerSession,
                    deviceIdFromUrlParam: this.options.deviceIdFromUrlParam
                });
                var loaded = bind(this, this.loaded);
                var ready = this.ready;
                if (umd) {
                    window.require([src], function(amplitude) {
                        window.amplitude = amplitude;
                        when(loaded, function() {
                            window.amplitude.runQueuedFunctions();
                            ready()
                        })
                    });
                    return
                }
                this.load(function() {
                    when(loaded, function() {
                        window.amplitude.runQueuedFunctions();
                        ready()
                    })
                })
            };
            Amplitude.prototype.loaded = function() {
                return !!(window.amplitude && window.amplitude.options)
            };
            Amplitude.prototype.page = function(page) {
                this.setDeviceIdFromAnonymousId(page);
                var category = page.category();
                var name = page.fullName();
                var opts = this.options;
                if (opts.trackAllPages) {
                    this.track(page.track())
                }
                if (category && opts.trackCategorizedPages) {
                    this.track(page.track(category))
                }
                if (name && opts.trackNamedPages) {
                    this.track(page.track(name))
                }
            };
            Amplitude.prototype.identify = function(identify) {
                this.setDeviceIdFromAnonymousId(identify);
                var id = identify.userId();
                var traits = identify.traits();
                if (id) window.amplitude.setUserId(id);
                if (traits) {
                    var mapQueryParams = this.options.mapQueryParams;
                    var query = identify.proxy("context.page.search");
                    if (!is.empty(mapQueryParams)) {
                        each(function(value, key) {
                            traits[key] = query
                        }, mapQueryParams)
                    }
                    window.amplitude.setUserProperties(traits)
                }
                var groups = identify.options(this.name).groups;
                if (groups && is.object(groups)) {
                    for (var group in groups) {
                        if (groups.hasOwnProperty(group)) window.amplitude.setGroup(group, groups[group])
                    }
                }
            };
            Amplitude.prototype.track = logEvent;

            function logEvent(track, dontSetRevenue) {
                this.setDeviceIdFromAnonymousId(track);
                var props = track.properties();
                var options = track.options(this.name);
                var event = track.event();
                var mapQueryParams = this.options.mapQueryParams;
                var query = track.proxy("context.page.search");
                if (!is.empty(mapQueryParams)) {
                    var params = {};
                    var type;
                    each(function(value, key) {
                        type = value;
                        type === "user_properties" ? params[key] = query : props[key] = query
                    }, mapQueryParams);
                    if (type === "user_properties") window.amplitude.setUserProperties(params)
                }
                if (options.groups) {
                    window.amplitude.logEventWithGroups(event, props, options.groups)
                } else {
                    window.amplitude.logEvent(event, props)
                }
                if (track.revenue() && !dontSetRevenue) this.setRevenue(mapRevenueAttributes(track))
            }
            Amplitude.prototype.orderCompleted = function(track) {
                this.setDeviceIdFromAnonymousId(track);
                var products = track.products();
                var clonedTrack = track.json();
                var trackRevenuePerProduct = this.options.trackRevenuePerProduct;
                if (!products || !Array.isArray(products)) return logEvent.call(this, track);
                delete clonedTrack.properties.products;
                logEvent.call(this, new Track(clonedTrack), trackRevenuePerProduct);
                each(function(product) {
                    var price = product.price;
                    var quantity = product.quantity;
                    clonedTrack.properties = product;
                    clonedTrack.event = "Product Purchased";
                    if (trackRevenuePerProduct && price != null && quantity) this.setRevenue(mapRevenueAttributes(new Track(clonedTrack)));
                    logEvent.call(this, new Track(clonedTrack), trackRevenuePerProduct)
                }.bind(this), products)
            };
            Amplitude.prototype.group = function(group) {
                this.setDeviceIdFromAnonymousId(group);
                var groupType = group.traits()[this.options.groupTypeTrait];
                var groupValue = group.traits()[this.options.groupValueTrait];
                if (groupType && groupValue) {
                    window.amplitude.setGroup(groupType, groupValue)
                } else {
                    var groupId = group.groupId();
                    if (groupId) {
                        window.amplitude.setGroup("[Segment] Group", groupId)
                    }
                }
            };
            Amplitude.prototype.setDomain = function(href) {
                var domain = topDomain(href);
                window.amplitude.setDomain(domain)
            };
            Amplitude.prototype.setDeviceIdFromAnonymousId = function(facade) {
                if (this.options.preferAnonymousIdForDeviceId) {
                    this.setDeviceId(facade.anonymousId())
                }
            };
            Amplitude.prototype.setDeviceId = function(deviceId) {
                if (deviceId) window.amplitude.setDeviceId(deviceId)
            };
            Amplitude.prototype.setRevenue = function(properties) {
                var price = properties.price;
                var productId = properties.productId;
                var revenueType = properties.revenueType;
                var quantity = properties.quantity;
                var eventProps = properties.eventProps;
                var revenue = properties.revenue;
                if (this.options.useLogRevenueV2) {
                    if (!price) {
                        price = revenue;
                        quantity = 1
                    }
                    var ampRevenue = (new window.amplitude.Revenue).setPrice(price).setQuantity(quantity).setEventProperties(eventProps);
                    if (revenueType) ampRevenue.setRevenueType(revenueType);
                    if (productId) ampRevenue.setProductId(productId);
                    window.amplitude.logRevenueV2(ampRevenue)
                } else {
                    window.amplitude.logRevenue(revenue || price * quantity, quantity, productId)
                }
            };

            function mapRevenueAttributes(track) {
                var mapRevenueType = {
                    "order completed": "Purchase",
                    "product purchased": "Purchase"
                };
                return {
                    price: track.price(),
                    productId: track.productId(),
                    revenueType: track.proxy("properties.revenueType") || mapRevenueType[track.event().toLowerCase()],
                    quantity: track.quantity(),
                    eventProps: track.properties(),
                    revenue: track.revenue()
                }
            }
        }, {
            "@ndhoule/each": 8,
            "@segment/analytics.js-integration": 56,
            "@segment/top-domain": 360,
            "component-bind": 365,
            "do-when": 383,
            is: 392,
            "segmentio-facade": 421
        }],
        56: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 57,
            "./statics": 58,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 60,
            dup: 35,
            "slug-component": 427
        }],
        57: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 59,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        58: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        59: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        60: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 61,
            _process: 412,
            dup: 39
        }],
        61: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        62: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var Track = require("segmentio-facade").Track;
            var each = require("@ndhoule/each");
            var del = require("obj-case").del;
            var clone = require("@ndhoule/clone");
            var Appboy = module.exports = integration("Appboy").global("appboy").option("apiKey", "").option("safariWebsitePushId", "").option("allowCrawlerActivity", false).option("doNotLoadFontAwesome", false).option("enableLogging", false).option("automaticallyDisplayMessages", true).option("localization", "en").option("minimumIntervalBetweenTriggerActionsInSeconds", 30).option("openInAppMessagesInNewTab", false).option("openNewsFeedCardsInNewTab", false).option("sessionTimeoutInSeconds", 30).option("requireExplicitInAppMessageDismissal", false).option("enableHtmlInAppMessages", false).option("trackAllPages", false).option("trackNamedPages", false).option("customEndpoint", "").option("version", 1).tag("v1", '<script src="https://js.appboycdn.com/web-sdk/1.6/appboy.min.js">').tag("v2", '<script src="https://js.appboycdn.com/web-sdk/2.1/appboy.min.js">');
            Appboy.prototype.initialize = function() {
                var options = this.options;
                var customEndpoint;
                if (options.customEndpoint) {
                    var endpoint = options.customEndpoint;
                    var regex = new RegExp("^(http|https)://", "i");
                    customEndpoint = (regex.test(endpoint) ? endpoint : "https://" + endpoint) + "/api/v3"
                } else if (options.datacenter === "eu") {
                    customEndpoint = "https://sdk.fra-01.braze.eu/api/v3"
                }
                if (Number(options.version) === 2) {
                    this.initializeV2(customEndpoint)
                } else {
                    this.initializeV1(customEndpoint)
                }
            };
            Appboy.prototype.initializeV1 = function(customEndpoint) {
                var options = this.options;
                var self = this;
                var userId = this.analytics.user().id(); + function(a, p, P, b, y) {
                    window.appboy = {};
                    for (var s = "destroy toggleAppboyLogging setLogger openSession changeUser requestImmediateDataFlush requestFeedRefresh subscribeToFeedUpdates logCardImpressions logCardClick logFeedDisplayed requestInAppMessageRefresh logInAppMessageImpression logInAppMessageClick logInAppMessageButtonClick subscribeToNewInAppMessages removeSubscription removeAllSubscriptions logCustomEvent logPurchase isPushSupported isPushBlocked isPushGranted isPushPermissionGranted registerAppboyPushMessages unregisterAppboyPushMessages submitFeedback ab ab.User ab.User.Genders ab.User.NotificationSubscriptionTypes ab.User.prototype.getUserId ab.User.prototype.setFirstName ab.User.prototype.setLastName ab.User.prototype.setEmail ab.User.prototype.setGender ab.User.prototype.setDateOfBirth ab.User.prototype.setCountry ab.User.prototype.setHomeCity ab.User.prototype.setEmailNotificationSubscriptionType ab.User.prototype.setPushNotificationSubscriptionType ab.User.prototype.setPhoneNumber ab.User.prototype.setAvatarImageUrl ab.User.prototype.setLastKnownLocation ab.User.prototype.setUserAttribute ab.User.prototype.setCustomUserAttribute ab.User.prototype.addToCustomAttributeArray ab.User.prototype.removeFromCustomAttributeArray ab.User.prototype.incrementCustomUserAttribute ab.InAppMessage ab.InAppMessage.SlideFrom ab.InAppMessage.ClickAction ab.InAppMessage.DismissType ab.InAppMessage.OpenTarget ab.InAppMessage.ImageStyle ab.InAppMessage.Orientation ab.InAppMessage.CropType ab.InAppMessage.prototype.subscribeToClickedEvent ab.InAppMessage.prototype.subscribeToDismissedEvent ab.InAppMessage.prototype.removeSubscription ab.InAppMessage.prototype.removeAllSubscriptions ab.InAppMessage.Button ab.InAppMessage.Button.prototype.subscribeToClickedEvent ab.InAppMessage.Button.prototype.removeSubscription ab.InAppMessage.Button.prototype.removeAllSubscriptions ab.SlideUpMessage ab.ModalMessage ab.FullScreenMessage ab.ControlMessage ab.Feed ab.Feed.prototype.getUnreadCardCount ab.Card ab.ClassicCard ab.CaptionedImage ab.Banner ab.WindowUtils display display.automaticallyShowNewInAppMessages display.showInAppMessage display.showFeed display.destroyFeed display.toggleFeed sharedLib".split(" "), i = 0; i < s.length; i++) {
                        for (var k = appboy, l = s[i].split("."), j = 0; j < l.length - 1; j++) k = k[l[j]];
                        k[l[j]] = function() {
                            console && console.error("The Appboy SDK has not yet been loaded.")
                        }
                    }
                    appboy.initialize = function() {
                        console && console.error("Appboy cannot be loaded - this is usually due to strict corporate firewalls or ad blockers.")
                    };
                    appboy.getUser = function() {
                        return new appboy.ab.User
                    };
                    appboy.getCachedFeed = function() {
                        return new appboy.ab.Feed
                    }
                }(document, "script", "link");
                this._shim = window.appboy.initialize;
                this.load("v1", function() {
                    var config = {};
                    var datacenterMappings = {
                        us: "https://sdk.iad-01.braze.com",
                        us02: "https://sdk.iad-02.braze.com",
                        us03: "https://sdk.iad-03.braze.com",
                        eu: "https://sdk.fra-01.braze.eu"
                    };
                    if (options.safariWebsitePushId) config.safariWebsitePushId = options.safariWebsitePushId;
                    if (options.enableHtmlInAppMessages) config.enableHtmlInAppMessages = true;
                    if (options.customEndpoint) {
                        var endpoint = options.customEndpoint;
                        var regex = new RegExp("^(http|https)://", "i");
                        config.baseUrl = (regex.test(endpoint) ? endpoint : "https://" + endpoint) + "/api/v3"
                    } else {
                        config.baseUrl = (datacenterMappings[options.datacenter] || "https://sdk.iad-01.braze.com") + "/api/v3"
                    }
                    if (customEndpoint) config.baseUrl = customEndpoint;
                    self.initializeTester(options.apiKey, config);
                    window.appboy.initialize(options.apiKey, config);
                    if (options.automaticallyDisplayMessages) window.appboy.display.automaticallyShowNewInAppMessages();
                    if (userId) window.appboy.changeUser(userId);
                    window.appboy.openSession();
                    self.ready()
                })
            };
            Appboy.prototype.initializeV2 = function(customEndpoint) {
                var options = this.options;
                var userId = this.analytics.user().id(); + function(a, p, P, b, y) {
                    window.appboy = {};
                    window.appboyQueue = [];
                    for (var s = "initialize destroy getDeviceId toggleAppboyLogging setLogger openSession changeUser requestImmediateDataFlush requestFeedRefresh subscribeToFeedUpdates logCardImpressions logCardClick logFeedDisplayed requestInAppMessageRefresh logInAppMessageImpression logInAppMessageClick logInAppMessageButtonClick logInAppMessageHtmlClick subscribeToNewInAppMessages removeSubscription removeAllSubscriptions logCustomEvent logPurchase isPushSupported isPushBlocked isPushGranted isPushPermissionGranted registerAppboyPushMessages unregisterAppboyPushMessages submitFeedback trackLocation stopWebTracking resumeWebTracking wipeData ab ab.User ab.User.Genders ab.User.NotificationSubscriptionTypes ab.User.prototype.getUserId ab.User.prototype.setFirstName ab.User.prototype.setLastName ab.User.prototype.setEmail ab.User.prototype.setGender ab.User.prototype.setDateOfBirth ab.User.prototype.setCountry ab.User.prototype.setHomeCity ab.User.prototype.setLanguage ab.User.prototype.setEmailNotificationSubscriptionType ab.User.prototype.setPushNotificationSubscriptionType ab.User.prototype.setPhoneNumber ab.User.prototype.setAvatarImageUrl ab.User.prototype.setLastKnownLocation ab.User.prototype.setUserAttribute ab.User.prototype.setCustomUserAttribute ab.User.prototype.addToCustomAttributeArray ab.User.prototype.removeFromCustomAttributeArray ab.User.prototype.incrementCustomUserAttribute ab.User.prototype.addAlias ab.InAppMessage ab.InAppMessage.SlideFrom ab.InAppMessage.ClickAction ab.InAppMessage.DismissType ab.InAppMessage.OpenTarget ab.InAppMessage.ImageStyle ab.InAppMessage.TextAlignment ab.InAppMessage.Orientation ab.InAppMessage.CropType ab.InAppMessage.prototype.subscribeToClickedEvent ab.InAppMessage.prototype.subscribeToDismissedEvent ab.InAppMessage.prototype.removeSubscription ab.InAppMessage.prototype.removeAllSubscriptions ab.InAppMessage.Button ab.InAppMessage.Button.prototype.subscribeToClickedEvent ab.InAppMessage.Button.prototype.removeSubscription ab.InAppMessage.Button.prototype.removeAllSubscriptions ab.SlideUpMessage ab.ModalMessage ab.FullScreenMessage ab.HtmlMessage ab.ControlMessage ab.Feed ab.Feed.prototype.getUnreadCardCount ab.Card ab.ClassicCard ab.CaptionedImage ab.Banner ab.WindowUtils display display.automaticallyShowNewInAppMessages display.showInAppMessage display.showFeed display.destroyFeed display.toggleFeed sharedLib".split(" "), i = 0; i < s.length; i++) {
                        for (var m = s[i], k = appboy, l = m.split("."), j = 0; j < l.length - 1; j++) k = k[l[j]];
                        k[l[j]] = new Function("return function " + m.replace(/\./g, "_") + "(){appboyQueue.push(arguments); return true}")()
                    }
                    appboy.getUser = function() {
                        return new appboy.ab.User
                    };
                    appboy.getCachedFeed = function() {
                        return new appboy.ab.Feed
                    }
                }(window, document, "script");
                var config = {
                    safariWebsitePushId: options.safariWebsitePushId,
                    enableHtmlInAppMessages: options.enableHtmlInAppMessages,
                    allowCrawlerActivity: options.allowCrawlerActivity,
                    doNotLoadFontAwesome: options.doNotLoadFontAwesome,
                    enableLogging: options.enableLogging,
                    localization: options.localization,
                    minimumIntervalBetweenTriggerActionsInSeconds: Number(options.minimumIntervalBetweenTriggerActionsInSeconds) || 30,
                    openInAppMessagesInNewTab: options.openInAppMessagesInNewTab,
                    openNewsFeedCardsInNewTab: options.openNewsFeedCardsInNewTab,
                    requireExplicitInAppMessageDismissal: options.requireExplicitInAppMessageDismissal,
                    sessionTimeoutInSeconds: Number(options.sessionTimeoutInSeconds) || 30
                };
                if (customEndpoint) config.baseUrl = customEndpoint;
                this.initializeTester(options.apiKey, config);
                window.appboy.initialize(options.apiKey, config);
                if (options.automaticallyDisplayMessages) window.appboy.display.automaticallyShowNewInAppMessages();
                if (userId) window.appboy.changeUser(userId);
                window.appboy.openSession();
                this.load("v2", this.ready)
            };
            Appboy.prototype.initializeTester = function() {};
            Appboy.prototype.loaded = function() {
                var options = this.options;
                if (Number(options.version) === 2) return window.appboyQueue === null;
                return window.appboy && window.appboy.initialize !== this._shim
            };
            Appboy.prototype.identify = function(identify) {
                var userId = identify.userId();
                var address = identify.address();
                var avatar = identify.avatar();
                var birthday = identify.birthday();
                var email = identify.email();
                var firstName = identify.firstName();
                var gender = identify.gender();
                var lastName = identify.lastName();
                var phone = identify.phone();
                var traits = clone(identify.traits());
                window.appboy.changeUser(userId);
                window.appboy.getUser().setAvatarImageUrl(avatar);
                window.appboy.getUser().setEmail(email);
                window.appboy.getUser().setFirstName(firstName);
                window.appboy.getUser().setGender(getGender(gender));
                window.appboy.getUser().setLastName(lastName);
                window.appboy.getUser().setPhoneNumber(phone);
                if (address) {
                    window.appboy.getUser().setCountry(address.country);
                    window.appboy.getUser().setHomeCity(address.city)
                }
                if (birthday) {
                    window.appboy.getUser().setDateOfBirth(birthday.getUTCFullYear(), birthday.getUTCMonth() + 1, birthday.getUTCDate())
                }
                var reserved = ["avatar", "address", "birthday", "email", "id", "firstName", "gender", "lastName", "phone", "facebook", "twitter", "first_name", "last_name", "dob", "external_id", "country", "home_city", "bio", "gender", "phone", "email_subscribe", "push_subscribe"];
                each(function(key) {
                    delete traits[key]
                }, reserved);
                each(function(value, key) {
                    window.appboy.getUser().setCustomUserAttribute(key, value)
                }, traits)
            };
            Appboy.prototype.group = function(group) {
                var userId = group.userId();
                var groupIdKey = "ab_segment_group_" + group.groupId();
                window.appboy.changeUser(userId);
                window.appboy.getUser().setCustomUserAttribute(groupIdKey, true)
            };
            Appboy.prototype.track = function(track) {
                var userId = track.userId();
                var eventName = track.event();
                var properties = track.properties();
                var reserved = ["time", "product_id", "quantity", "event_name", "price", "currency"];
                each(function(key) {
                    delete properties[key]
                }, reserved);
                window.appboy.changeUser(userId);
                window.appboy.logCustomEvent(eventName, properties)
            };
            Appboy.prototype.page = function(page) {
                var settings = this.options;
                if (!settings.trackAllPages && !settings.trackNamedPages) return;
                if (settings.trackNamedPages && !page.name()) return;
                var userId = page.userId();
                var pageEvent = page.track(page.fullName());
                var eventName = pageEvent.event();
                var properties = page.properties();
                window.appboy.changeUser(userId);
                window.appboy.logCustomEvent(eventName, properties)
            };
            Appboy.prototype.orderCompleted = function(track) {
                var userId = track.userId();
                var products = track.products();
                var currencyCode = track.currency();
                var purchaseProperties = track.properties();
                window.appboy.changeUser(userId);
                del(purchaseProperties, "products");
                del(purchaseProperties, "currency");
                each(function(product) {
                    var track = new Track({
                        properties: product
                    });
                    var productId = track.productId();
                    var price = track.price();
                    var quantity = track.quantity();
                    window.appboy.logPurchase(productId, price, currencyCode, quantity, purchaseProperties)
                }, products)
            };

            function getGender(gender) {
                if (!gender) return;
                if (typeof gender !== "string") return;
                var femaleGenders = ["woman", "female", "w", "f"];
                var maleGenders = ["man", "male", "m"];
                var otherGenders = ["other", "o"];
                if (femaleGenders.indexOf(gender.toLowerCase()) > -1) return window.appboy.ab.User.Genders.FEMALE;
                if (maleGenders.indexOf(gender.toLowerCase()) > -1) return window.appboy.ab.User.Genders.MALE;
                if (otherGenders.indexOf(gender.toLowerCase()) > -1) return window.appboy.ab.User.Genders.OTHER
            }
        }, {
            "@ndhoule/clone": 5,
            "@ndhoule/each": 8,
            "@segment/analytics.js-integration": 338,
            "obj-case": 407,
            "segmentio-facade": 421
        }],
        63: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var isObject = require("isobject");
            var load = require("@segment/load-script");
            var Appcues = integration("Appcues").global("Appcues").option("appcuesId", "");
            Appcues.prototype.initialize = function() {
                this.load(this.ready)
            };
            Appcues.prototype.loaded = function() {
                return isObject(window.Appcues)
            };
            Appcues.prototype.load = function(callback) {
                var id = this.options.appcuesId || "appcues";
                load("//fast.appcues.com/" + id + ".js", callback)
            };
            Appcues.prototype.page = function(page) {
                window.Appcues.page(page.name(), page.properties())
            };
            Appcues.prototype.identify = function(identify) {
                window.Appcues.identify(identify.userId(), identify.traits())
            };
            Appcues.prototype.track = function(track) {
                window.Appcues.track(track.event(), track.properties())
            };
            module.exports = exports = function(analytics) {
                analytics.addIntegration(Appcues)
            };
            exports.Integration = Appcues
        }, {
            "@segment/analytics.js-integration": 64,
            "@segment/load-script": 355,
            isobject: 394
        }],
        64: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 65,
            "./statics": 66,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 68,
            dup: 35,
            "slug-component": 427
        }],
        65: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 67,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        66: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        67: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        68: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 69,
            _process: 412,
            dup: 39
        }],
        69: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        70: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var isObject = require("isobject");
            var extend = require("@ndhoule/extend");
            var umd = typeof window.define === "function" && window.define.amd;
            var src = "//d2wy8f7a9ursnm.cloudfront.net/bugsnag-3.min.js";
            var Bugsnag = module.exports = integration("Bugsnag").global("Bugsnag").option("apiKey", "").option("releaseStage", null).tag('<script src="' + src + '">');
            Bugsnag.prototype.initialize = function() {
                var self = this;
                if (umd) {
                    window.require([src], function(bugsnag) {
                        bugsnag.apiKey = self.options.apiKey;
                        if (self.options.releaseStage) bugsnag.releaseStage = self.options.releaseStage;
                        window.Bugsnag = bugsnag;
                        self.ready()
                    });
                    return
                }
                this.load(function() {
                    window.Bugsnag.apiKey = self.options.apiKey;
                    if (self.options.releaseStage) window.Bugsnag.releaseStage = self.options.releaseStage;
                    self.ready()
                })
            };
            Bugsnag.prototype.loaded = function() {
                return isObject(window.Bugsnag)
            };
            Bugsnag.prototype.identify = function(identify) {
                window.Bugsnag.user = window.Bugsnag.user || {};
                extend(window.Bugsnag.user, identify.traits())
            }
        }, {
            "@ndhoule/extend": 10,
            "@segment/analytics.js-integration": 71,
            isobject: 394
        }],
        71: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 72,
            "./statics": 73,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 75,
            dup: 35,
            "slug-component": 427
        }],
        72: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 74,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        73: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        74: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        75: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 76,
            _process: 412,
            dup: 39
        }],
        76: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        77: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var Castle = module.exports = integration("Castle").option("publishableKey", "").option("autoPageview", false).option("cookieDomain", false).tag('<script src="//d2t77mnxyo7adj.cloudfront.net/v1/cs.js">');
            Castle.prototype.initialize = function() {
                window._castle = window._castle || {};
                window._castle.q = window._castle.q || [];
                window._castle.q.push(["setKey", this.options.publishableKey]);
                if (this.options.cookieDomain) {
                    window._castle.q.push(["setCookieDomain", this.options.cookieDomain])
                }
                if (this.options.autoPageview === false) {
                    window._castle.q.push(["autoTrack", this.options.autoPageview])
                }
                this._identifyFromCache();
                this.load(this.ready)
            };
            Castle.prototype.loaded = function() {
                return typeof window._castle === "function"
            };
            Castle.prototype.identify = function(identify) {
                var traits = identify.traits();
                var castleOptions = identify.options(this.name);
                if (castleOptions && castleOptions.secure) {
                    window._castle("secure", castleOptions.secure)
                }
                delete traits.id;
                window._castle("identify", identify.userId(), traits)
            };
            Castle.prototype.page = function(page) {
                if (this.options.autoPageview) return;
                window._castle("page", page.url(), page.title())
            };
            Castle.prototype.track = function(track) {
                window._castle("track", track.event(), track.properties())
            };
            Castle.prototype._identifyFromCache = function() {
                var user = this.analytics.user();
                if (user.id()) {
                    window._castle.q.push(["identify", user.id(), user.traits()])
                }
            }
        }, {
            "@segment/analytics.js-integration": 338
        }],
        78: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var Chameleon = module.exports = integration("Chameleon").readyOnInitialize().readyOnLoad().global("chmln").option("apiKey", null).tag('<script src="https://fast.trychameleon.com/messo/{{apiKey}}/messo.min.js"><\/script>');
            Chameleon.prototype.initialize = function() {
                var that = this;
                ! function() {
                    var c = window.chmln || (window.chmln = {});
                    if (c.root) {
                        return
                    }
                    c.location = window.location.href.toString();
                    c.accountToken = that.options.apiKey;
                    var names = "setup identify alias track set show on off custom help _data".split(" ");
                    for (var i = 0; i < names.length; i++) {
                        (function() {
                            var t = c[names[i] + "_a"] = [];
                            c[names[i]] = function() {
                                t.push(arguments)
                            }
                        })()
                    }
                }();
                this.ready();
                this.load()
            };
            Chameleon.prototype.loaded = function() {
                return !!window.chmln
            };
            Chameleon.prototype.identify = function(identify) {
                var traits = identify.traits();
                delete traits.id;
                window.chmln.identify(identify.userId(), traits)
            };
            Chameleon.prototype.group = function(group) {
                window.chmln.set({
                    company: group.traits({
                        id: "uid"
                    })
                })
            };
            Chameleon.prototype.track = function(track) {
                window.chmln.track(track.event(), track.properties())
            };
            Chameleon.prototype.alias = function(alias) {
                window.chmln.alias({
                    from: alias.previousId() || alias.anonymousId(),
                    to: alias.userId()
                })
            }
        }, {
            "@segment/analytics.js-integration": 79
        }],
        79: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 80,
            "./statics": 81,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 83,
            dup: 35,
            "slug-component": 427
        }],
        80: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 82,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        81: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        82: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        83: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 84,
            _process: 412,
            dup: 39
        }],
        84: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        85: [function(require, module, exports) {
            "use strict";
            var defaults = require("@ndhoule/defaults");
            var integration = require("@segment/analytics.js-integration");
            var onBody = require("on-body");
            var Chartbeat = module.exports = integration("Chartbeat").global("_sf_async_config").global("_sf_endpt").global("pSUPERFLY").option("domain", "").option("uid", null).option("video", false).option("sendNameAndCategoryAsTitle", false).option("subscriberEngagementKeys", []).tag('<script src="//static.chartbeat.com/js/{{ script }}">');
            Chartbeat.prototype.loaded = function() {
                return !!window.pSUPERFLY
            };
            Chartbeat.prototype.initialize = function() {
                this.pageCalledYet = false;
                this._ready = true
            };
            Chartbeat.prototype.page = function(page) {
                this.updateConfig(page);
                if (!this.pageCalledYet) {
                    this._ready = false;
                    this.pageCalledYet = true;
                    this._initialize()
                } else {
                    var props = page.properties();
                    window.pSUPERFLY.virtualPage(props.path)
                }
            };
            Chartbeat.prototype.updateConfig = function(page) {
                var category = page.category();
                var author = page.proxy("properties.author");
                var props = page.properties();
                var title;
                if (this.options.sendNameAndCategoryAsTitle) {
                    title = page.fullName() || props.title
                } else {
                    title = props.title
                }
                window._sf_async_config = window._sf_async_config || {};
                if (category) window._sf_async_config.sections = category;
                if (author) window._sf_async_config.authors = author;
                if (title) window._sf_async_config.title = title;
                var _cbq = window._cbq = window._cbq || [];
                for (var key in props) {
                    if (!props.hasOwnProperty(key)) continue;
                    if (this.options.subscriberEngagementKeys.indexOf(key) > -1) {
                        _cbq.push([key, props[key]])
                    }
                }
            };
            Chartbeat.prototype._initialize = function() {
                var self = this;
                var script = this.options.video ? "chartbeat_video.js" : "chartbeat.js";
                window._sf_async_config.useCanonical = true;
                defaults(window._sf_async_config, {
                    domain: this.options.domain,
                    uid: this.options.uid
                });
                onBody(function() {
                    window._sf_endpt = (new Date).getTime();
                    self.load({
                        script: script
                    }, self.ready)
                })
            }
        }, {
            "@ndhoule/defaults": 6,
            "@segment/analytics.js-integration": 338,
            "on-body": 410
        }],
        86: [function(require, module, exports) {
            "use strict";
            var Identify = require("segmentio-facade").Identify;
            var extend = require("@ndhoule/extend");
            var integration = require("@segment/analytics.js-integration");
            var isObject = require("isobject");
            var Clicky = module.exports = integration("Clicky").assumesPageview().global("clicky").global("clicky_site_ids").global("clicky_custom").option("siteId", null).tag('<script src="//static.getclicky.com/js"><\/script>');
            Clicky.prototype.initialize = function() {
                var user = this.analytics.user();
                window.clicky_site_ids = window.clicky_site_ids || [this.options.siteId];
                this.identify(new Identify({
                    userId: user.id(),
                    traits: user.traits()
                }));
                this.load(this.ready)
            };
            Clicky.prototype.loaded = function() {
                return isObject(window.clicky)
            };
            Clicky.prototype.page = function(page) {
                var properties = page.properties();
                var name = page.fullName();
                window.clicky.log(properties.path, name || properties.title)
            };
            Clicky.prototype.identify = function(identify) {
                window.clicky_custom = window.clicky_custom || {};
                window.clicky_custom.session = window.clicky_custom.session || {};
                var traits = identify.traits();
                var username = identify.username();
                var email = identify.email();
                var name = identify.name();
                if (username || email || name) traits.username = username || email || name;
                extend(window.clicky_custom.session, traits)
            };
            Clicky.prototype.track = function(track) {
                window.clicky.goal(track.event(), track.revenue())
            }
        }, {
            "@ndhoule/extend": 10,
            "@segment/analytics.js-integration": 87,
            isobject: 394,
            "segmentio-facade": 421
        }],
        87: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 88,
            "./statics": 89,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 91,
            dup: 35,
            "slug-component": 427
        }],
        88: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 90,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        89: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        90: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        91: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 92,
            _process: 412,
            dup: 39
        }],
        92: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        93: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var CrazyEgg = module.exports = integration("Crazy Egg").assumesPageview().global("CE2").option("accountNumber", "").tag('<script src="//script.crazyegg.com/pages/scripts/{{ path }}.js?{{ cacheBuster }}">');
            CrazyEgg.prototype.initialize = function() {
                var number = this.options.accountNumber;
                var path = number.slice(0, 4) + "/" + number.slice(4);
                var cacheBuster = Math.floor((new Date).getTime() / 36e5);
                this.load({
                    path: path,
                    cacheBuster: cacheBuster
                }, this.ready)
            };
            CrazyEgg.prototype.loaded = function() {
                return !!window.CE2
            }
        }, {
            "@segment/analytics.js-integration": 94
        }],
        94: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 95,
            "./statics": 96,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 98,
            dup: 35,
            "slug-component": 427
        }],
        95: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 97,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        96: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        97: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        98: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 99,
            _process: 412,
            dup: 39
        }],
        99: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        100: [function(require, module, exports) {
            "use strict";
            var Identify = require("segmentio-facade").Identify;
            var Track = require("segmentio-facade").Track;
            var bind = require("component-bind");
            var each = require("@ndhoule/each");
            var integration = require("@segment/analytics.js-integration");
            var iso = require("@segment/to-iso-string");
            var push = require("global-queue")("_curebitq");
            var throttle = require("throttleit");
            var when = require("do-when");
            var Curebit = module.exports = integration("Curebit").global("_curebitq").global("curebit").option("campaigns", {}).option("device", "").option("iframeBorder", 0).option("iframeHeight", "480").option("iframeId", "curebit_integration").option("iframeWidth", "100%").option("insertIntoId", "").option("responsive", true).option("server", "https://www.curebit.com").option("siteId", "").option("customUrl", "").tag('<script src="{{ src }}">');
            Curebit.prototype.initialize = function() {
                var url = this.options.customUrl || "//d2jjzw81hqbuqv.cloudfront.net/integration/curebit-1.0.min.js";
                push("init", {
                    site_id: this.options.siteId,
                    server: this.options.server
                });
                this.load({
                    src: url
                }, this.ready);
                this.page = throttle(bind(this, this.page), 250)
            };
            Curebit.prototype.loaded = function() {
                return !!window.curebit
            };
            Curebit.prototype.injectIntoId = function(url, id, fn) {
                when(function() {
                    return document.getElementById(id)
                }, function() {
                    var script = document.createElement("script");
                    script.src = url;
                    var parent = document.getElementById(id);
                    parent.appendChild(script);
                    onload(script, fn)
                })
            };
            Curebit.prototype.page = function() {
                var user = this.analytics.user();
                var campaigns = this.options.campaigns;
                var path = window.location.pathname;
                if (!campaigns[path]) return;
                var tags = (campaigns[path] || "").split(",");
                if (!tags.length) return;
                var settings = {
                    responsive: this.options.responsive,
                    device: this.options.device,
                    campaign_tags: tags,
                    iframe: {
                        width: this.options.iframeWidth,
                        height: this.options.iframeHeight,
                        id: this.options.iframeId,
                        frameborder: this.options.iframeBorder,
                        container: this.options.insertIntoId
                    }
                };
                var identify = new Identify({
                    userId: user.id(),
                    traits: user.traits()
                });
                if (identify.email()) {
                    settings.affiliate_member = {
                        email: identify.email(),
                        first_name: identify.firstName(),
                        last_name: identify.lastName(),
                        customer_id: identify.userId()
                    }
                }
                push("register_affiliate", settings)
            };
            Curebit.prototype.orderCompleted = function(track) {
                var user = this.analytics.user();
                var orderId = track.orderId();
                var products = track.products();
                var props = track.properties();
                var items = [];
                var identify = new Identify({
                    traits: user.traits(),
                    userId: user.id()
                });
                each(function(product) {
                    var track = new Track({
                        properties: product
                    });
                    items.push({
                        product_id: track.productId() || track.id() || track.sku(),
                        quantity: track.quantity(),
                        image_url: product.image,
                        price: track.price(),
                        title: track.name(),
                        url: product.url
                    })
                }, products);
                push("register_purchase", {
                    order_date: iso(props.date || new Date),
                    order_number: orderId,
                    coupon_code: track.coupon(),
                    subtotal: track.total(),
                    customer_id: identify.userId(),
                    first_name: identify.firstName(),
                    last_name: identify.lastName(),
                    email: identify.email(),
                    items: items
                })
            }
        }, {
            "@ndhoule/each": 8,
            "@segment/analytics.js-integration": 338,
            "@segment/to-iso-string": 359,
            "component-bind": 365,
            "do-when": 383,
            "global-queue": 386,
            "segmentio-facade": 421,
            throttleit: 429
        }],
        101: [function(require, module, exports) {
            "use strict";
            var Identify = require("segmentio-facade").Identify;
            var alias = require("@segment/alias");
            var convertDates = require("@segment/convert-dates");
            var integration = require("@segment/analytics.js-integration");
            var Customerio = module.exports = integration("Customer.io").global("_cio").option("siteId", "").tag('<script id="cio-tracker" src="https://assets.customer.io/assets/track.js" data-site-id="{{ siteId }}">');
            Customerio.prototype.initialize = function() {
                window._cio = window._cio || [];
                (function() {
                    var a, b, c;
                    a = function(f) {
                        return function() {
                            window._cio.push([f].concat(Array.prototype.slice.call(arguments, 0)))
                        }
                    };
                    b = ["identify", "track"];
                    for (c = 0; c < b.length; c++) {
                        window._cio[b[c]] = a(b[c])
                    }
                })();
                this.load(this.ready)
            };
            Customerio.prototype.loaded = function() {
                return !!(window._cio && window._cio.push !== Array.prototype.push)
            };
            Customerio.prototype.page = function(page) {
                var name = page.name() || page.url();
                window._cio.page(name, page.properties())
            };
            Customerio.prototype.identify = function(identify) {
                if (!identify.userId()) return this.debug("user id required");
                var traits = identify.traits({
                    createdAt: "created"
                });
                traits = alias(traits, {
                    created: "created_at"
                });
                traits = convertDates(traits, convertDate);
                window._cio.identify(traits)
            };
            Customerio.prototype.group = function(group) {
                var traits = group.traits();
                var user = this.analytics.user();
                traits = alias(traits, function(trait) {
                    return "Group " + trait
                });
                this.identify(new Identify({
                    userId: user.id(),
                    traits: traits
                }))
            };
            Customerio.prototype.track = function(track) {
                var properties = track.properties();
                properties = convertDates(properties, convertDate);
                window._cio.track(track.event(), properties)
            };

            function convertDate(date) {
                return Math.floor(date.getTime() / 1e3)
            }
        }, {
            "@segment/alias": 19,
            "@segment/analytics.js-integration": 102,
            "@segment/convert-dates": 350,
            "segmentio-facade": 421
        }],
        102: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 103,
            "./statics": 104,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 106,
            dup: 35,
            "slug-component": 427
        }],
        103: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 105,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        104: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        105: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        106: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 107,
            _process: 412,
            dup: 39
        }],
        107: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        108: [function(require, module, exports) {
            "use strict";
            var convertDates = require("@segment/convert-dates");
            var each = require("@ndhoule/each");
            var integration = require("@segment/analytics.js-integration");
            var REFRESH_RATE = 3e5;
            var timeHash = Math.ceil(new Date / REFRESH_RATE) * REFRESH_RATE;
            var Drift = module.exports = integration("Drift").global("drift").option("embedId", "").tag('<script src="https://js.driftt.com/include/' + timeHash + '/{{ embedId }}.js">');
            Drift.prototype.initialize = function() {
                var drift;
                drift = window.drift = window.driftt = window.driftt || [];
                drift.methods = ["identify", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"];
                drift.factory = function(method) {
                    return function() {
                        var args;
                        args = Array.prototype.slice.call(arguments);
                        args.unshift(method);
                        drift.push(args)
                    }
                };
                each(function(key) {
                    drift[key] = drift.factory(key)
                }, drift.methods);
                this.load(this.ready)
            };
            Drift.prototype.loaded = function() {
                return window.drift !== undefined
            };
            Drift.prototype.identify = function(identify) {
                if (!identify.userId()) return this.debug("user id required");
                var traits = identify.traits();
                var id = identify.userId();
                delete traits.id;
                window.drift.identify(id, traits);
                this.identified = true
            };
            Drift.prototype.track = function(track) {
                var properties = track.properties();
                properties = convertDates(properties, convertDate);
                window.drift.track(track.event(), properties)
            };

            function convertDate(date) {
                return Math.floor(date.getTime() / 1e3)
            }
            Drift.prototype.page = function(page) {
                var userId = this.analytics.user().id();
                if (!this.identified && userId) {
                    window.drift.identify(userId);
                    this.identified = true
                }
                window.drift.page(page.name())
            }
        }, {
            "@ndhoule/each": 8,
            "@segment/analytics.js-integration": 109,
            "@segment/convert-dates": 350
        }],
        109: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 110,
            "./statics": 111,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 113,
            dup: 35,
            "slug-component": 427
        }],
        110: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 112,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        111: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        112: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        113: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 114,
            _process: 412,
            dup: 39
        }],
        114: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        115: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var isObject = require("isobject");
            var push = require("global-queue")("_dcq");
            var each = require("@ndhoule/each");
            var find = require("obj-case").find;
            var Drip = module.exports = integration("Drip").global("_dc").global("_dcq").global("_dcqi").global("_dcs").option("account", "").tag('<script src="//tag.getdrip.com/{{ account }}.js">');
            Drip.prototype.initialize = function() {
                window._dcq = window._dcq || [];
                window._dcs = window._dcs || {};
                window._dcs.account = this.options.account;
                this.load(this.ready)
            };
            Drip.prototype.loaded = function() {
                return isObject(window._dc)
            };
            Drip.prototype.track = function(track) {
                var props = format(track.properties());
                var cents = Math.round(track.revenue() * 100);
                if (cents) props.value = cents;
                delete props.revenue;
                push("track", track.event(), props)
            };
            Drip.prototype.identify = function(identify) {
                if (!identify.email()) return;
                push("identify", format(identify.traits()));
                var dripCampaignId = find(identify.options(this.name), "campaignId") || this.options.campaignId;
                if (dripCampaignId) push("subscribe", {
                    campaign_id: dripCampaignId,
                    fields: identify.traits()
                })
            };

            function format(obj) {
                var ret = {};
                each(function(value, key) {
                    var formattedKey = key.replace(/\s/g, "_");
                    ret[formattedKey] = value
                }, obj);
                return ret
            }
        }, {
            "@ndhoule/each": 8,
            "@segment/analytics.js-integration": 338,
            "global-queue": 386,
            isobject: 394,
            "obj-case": 407
        }],
        116: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var tick = require("next-tick");
            var objCase = require("obj-case");
            var each = require("@ndhoule/each");
            var objectKeys = require("@ndhoule/keys");
            var Elevio = module.exports = integration("Elevio").option("accountId", "").global("_elev").tag('<script src="//static.elev.io/js/v3.js">');
            Elevio.prototype.initialize = function() {
                var self = this;
                window._elev = window._elev || {};
                window._elev.account_id = this.options.accountId;
                window._elev.segment = true;
                this.load(function() {
                    tick(self.ready)
                })
            };
            Elevio.prototype.loaded = function() {
                return !!window._elev
            };
            Elevio.prototype.identify = function(identify) {
                var name = identify.name();
                var email = identify.email();
                var plan = identify.proxy("traits.plan");
                var traits = identify.traits();
                var removeTraits = ["id", "name", "firstName", "lastName", "email"];
                each(function(traitItem) {
                    if (traits.hasOwnProperty(traitItem)) {
                        objCase.del(traits, traitItem)
                    }
                }, removeTraits);
                var user = {};
                user.via = "segment";
                if (email) user.email = email;
                if (name) user.name = name;
                if (plan) user.plan = [plan];
                if (plan) user.groups = [plan];
                if (objectKeys(traits).length > 0) user.traits = traits;
                window._elev.user = user;
                if (typeof window._elev.setUser === "function") {
                    window._elev.setUser(user)
                }
            }
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/keys": 13,
            "@segment/analytics.js-integration": 338,
            "next-tick": 117,
            "obj-case": 407
        }],
        117: [function(require, module, exports) {
            (function(process, setImmediate) {
                "use strict";
                var callable, byObserver;
                callable = function(fn) {
                    if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
                    return fn
                };
                byObserver = function(Observer) {
                    var node = document.createTextNode(""),
                        queue, currentQueue, i = 0;
                    new Observer(function() {
                        var callback;
                        if (!queue) {
                            if (!currentQueue) return;
                            queue = currentQueue
                        } else if (currentQueue) {
                            queue = currentQueue.concat(queue)
                        }
                        currentQueue = queue;
                        queue = null;
                        if (typeof currentQueue === "function") {
                            callback = currentQueue;
                            currentQueue = null;
                            callback();
                            return
                        }
                        node.data = i = ++i % 2;
                        while (currentQueue) {
                            callback = currentQueue.shift();
                            if (!currentQueue.length) currentQueue = null;
                            callback()
                        }
                    }).observe(node, {
                        characterData: true
                    });
                    return function(fn) {
                        callable(fn);
                        if (queue) {
                            if (typeof queue === "function") queue = [queue, fn];
                            else queue.push(fn);
                            return
                        }
                        queue = fn;
                        node.data = i = ++i % 2
                    }
                };
                module.exports = function() {
                    if (typeof process === "object" && process && typeof process.nextTick === "function") {
                        return process.nextTick
                    }
                    if (typeof document === "object" && document) {
                        if (typeof MutationObserver === "function") return byObserver(MutationObserver);
                        if (typeof WebKitMutationObserver === "function") return byObserver(WebKitMutationObserver)
                    }
                    if (typeof setImmediate === "function") {
                        return function(cb) {
                            setImmediate(callable(cb))
                        }
                    }
                    if (typeof setTimeout === "function" || typeof setTimeout === "object") {
                        return function(cb) {
                            setTimeout(callable(cb), 0)
                        }
                    }
                    return null
                }()
            }).call(this, require("_process"), require("timers").setImmediate)
        }, {
            _process: 412,
            timers: 430
        }],
        118: [function(require, module, exports) {
            "use strict";
            var extend = require("@ndhoule/extend");
            var integration = require("@segment/analytics.js-integration");
            var push = require("global-queue")("_errs");
            var Errorception = module.exports = integration("Errorception").assumesPageview().global("_errs").option("projectId", "").option("meta", true).tag('<script src="//beacon.errorception.com/{{ projectId }}.js">');
            Errorception.prototype.initialize = function() {
                window._errs = window._errs || [this.options.projectId];
                if (typeof window.onerror === "function" && window.onerror !== push) {
                    var oldOnerror = window.onerror;
                    window.onerror = function() {
                        oldOnerror.apply(window, arguments);
                        push.apply(window, arguments)
                    }
                } else {
                    window.onerror = push
                }
                this.load(this.ready)
            };
            Errorception.prototype.loaded = function() {
                return !!(window._errs && window._errs.push !== Array.prototype.push)
            };
            Errorception.prototype.identify = function(identify) {
                if (!this.options.meta) return;
                var traits = identify.traits();
                window._errs = window._errs || [];
                window._errs.meta = window._errs.meta || {};
                extend(window._errs.meta, traits)
            }
        }, {
            "@ndhoule/extend": 119,
            "@segment/analytics.js-integration": 120,
            "global-queue": 386
        }],
        119: [function(require, module, exports) {
            arguments[4][10][0].apply(exports, arguments)
        }, {
            dup: 10
        }],
        120: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 121,
            "./statics": 122,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 119,
            "component-bind": 365,
            debug: 124,
            dup: 35,
            "slug-component": 427
        }],
        121: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 123,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        122: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        123: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        124: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 125,
            _process: 412,
            dup: 39
        }],
        125: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        126: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var foldl = require("@ndhoule/foldl");
            var each = require("@ndhoule/each");
            var reject = require("reject");
            var camel = require("to-camel-case");
            var is = require("is");
            var dateformat = require("dateformat");
            var Track = require("segmentio-facade").Track;
            var FacebookPixel = module.exports = integration("Facebook Pixel").global("fbq").option("pixelId", "").option("agent", "seg").option("valueIdentifier", "value").option("initWithExistingTraits", false).option("traverse", false).mapping("standardEvents").mapping("legacyEvents").tag('<script src="//connect.facebook.net/en_US/fbevents.js">');
            FacebookPixel.prototype.initialize = function() {
                window._fbq = function() {
                    if (window.fbq.callMethod) {
                        window.fbq.callMethod.apply(window.fbq, arguments)
                    } else {
                        window.fbq.queue.push(arguments)
                    }
                };
                window.fbq = window.fbq || window._fbq;
                window.fbq.push = window.fbq;
                window.fbq.loaded = true;
                window.fbq.disablePushState = true;
                window.fbq.allowDuplicatePageViews = true;
                window.fbq.agent = this.options.agent;
                window.fbq.version = "2.0";
                window.fbq.queue = [];
                this.load(this.ready);
                if (this.options.initWithExistingTraits) {
                    var traits = formatTraits(this.analytics);
                    window.fbq("init", this.options.pixelId, traits)
                } else {
                    window.fbq("init", this.options.pixelId)
                }
            };
            FacebookPixel.prototype.loaded = function() {
                return !!(window.fbq && window.fbq.callMethod)
            };
            FacebookPixel.prototype.page = function() {
                window.fbq("track", "PageView")
            };
            FacebookPixel.prototype.track = function(track) {
                var event = track.event();
                var revenue = formatRevenue(track.revenue());
                var payload = foldl(function(acc, val, key) {
                    if (key === "revenue") {
                        acc.value = revenue;
                        return acc
                    }
                    var dateFields = ["checkinDate", "checkoutDate", "departingArrivalDate", "departingDepartureDate", "returningArrivalDate", "returningDepartureDate", "travelEnd", "travelStart"];
                    if (dateFields.indexOf(camel(key)) >= 0) {
                        if (is.date(val)) {
                            val = val.toISOString().split("T")[0];
                            acc[key] = val;
                            return acc
                        }
                    }
                    acc[key] = val;
                    return acc
                }, {}, track.properties());
                var standard = this.standardEvents(event);
                var legacy = this.legacyEvents(event);
                if (![].concat(standard, legacy).length) {
                    window.fbq("trackCustom", event, payload);
                    return
                }
                each(function(event) {
                    if (event === "Purchase") payload.currency = track.currency();
                    window.fbq("track", event, payload)
                }, standard);
                each(function(event) {
                    window.fbq("track", event, {
                        currency: track.currency(),
                        value: revenue
                    })
                }, legacy)
            };
            FacebookPixel.prototype.productListViewed = function(track) {
                var contentType;
                var contentIds = [];
                var products = track.products();
                if (Array.isArray(products)) {
                    products.forEach(function(product) {
                        var productId = product.productId || product.product_id;
                        if (productId) {
                            contentIds.push(productId)
                        }
                    })
                }
                if (contentIds.length) {
                    contentType = "product"
                } else {
                    contentIds.push(track.category() || "");
                    contentType = "product_group"
                }
                window.fbq("track", "ViewContent", {
                    content_ids: contentIds,
                    content_type: contentType
                });
                each(function(event) {
                    window.fbq("track", event, {
                        currency: track.currency(),
                        value: formatRevenue(track.revenue())
                    })
                }, this.legacyEvents(track.event()))
            };
            FacebookPixel.prototype.productViewed = function(track) {
                window.fbq("track", "ViewContent", {
                    content_ids: [track.productId() || track.id() || track.sku() || ""],
                    content_type: "product",
                    content_name: track.name() || "",
                    content_category: track.category() || "",
                    currency: track.currency(),
                    value: this.options.valueIdentifier === "value" ? formatRevenue(track.value()) : formatRevenue(track.price())
                });
                each(function(event) {
                    window.fbq("track", event, {
                        currency: track.currency(),
                        value: formatRevenue(track.revenue())
                    })
                }, this.legacyEvents(track.event()))
            };
            FacebookPixel.prototype.productAdded = function(track) {
                window.fbq("track", "AddToCart", {
                    content_ids: [track.productId() || track.id() || track.sku() || ""],
                    content_type: "product",
                    content_name: track.name() || "",
                    content_category: track.category() || "",
                    currency: track.currency(),
                    value: this.options.valueIdentifier === "value" ? formatRevenue(track.value()) : formatRevenue(track.price())
                });
                each(function(event) {
                    window.fbq("track", event, {
                        currency: track.currency(),
                        value: formatRevenue(track.revenue())
                    })
                }, this.legacyEvents(track.event()))
            };
            FacebookPixel.prototype.orderCompleted = function(track) {
                var content_ids = foldl(function(acc, product) {
                    var item = new Track({
                        properties: product
                    });
                    var key = item.productId() || item.id() || item.sku();
                    if (key) acc.push(key);
                    return acc
                }, [], track.products() || []);
                var revenue = formatRevenue(track.revenue());
                window.fbq("track", "Purchase", {
                    content_ids: content_ids,
                    content_type: "product",
                    currency: track.currency(),
                    value: revenue
                });
                each(function(event) {
                    window.fbq("track", event, {
                        currency: track.currency(),
                        value: formatRevenue(track.revenue())
                    })
                }, this.legacyEvents(track.event()))
            };

            function formatRevenue(revenue) {
                return Number(revenue || 0).toFixed(2)
            }

            function formatTraits(analytics) {
                var traits = analytics && analytics.user().traits();
                if (!traits) return {};
                var firstName;
                var lastName;
                if (traits.firstName) {
                    firstName = traits.firstName;
                    lastName = traits.lastName
                } else {
                    var nameArray = traits.name && traits.name.toLowerCase().split(" ") || [];
                    firstName = nameArray.shift();
                    lastName = nameArray.pop()
                }
                var gender;
                if (traits.gender && is.string(traits.gender)) {
                    gender = traits.gender.slice(0, 1).toLowerCase()
                }
                var birthday = traits.birthday && dateformat(traits.birthday, "yyyymmdd");
                var address = traits.address || {};
                var city = address.city && address.city.split(" ").join("").toLowerCase();
                var state = address.state && address.state.toLowerCase();
                var postalCode = address.postalCode;
                return reject({
                    em: traits.email,
                    fn: firstName,
                    ln: lastName,
                    ph: traits.phone,
                    ge: gender,
                    db: birthday,
                    ct: city,
                    st: state,
                    zp: postalCode
                })
            }
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/foldl": 11,
            "@segment/analytics.js-integration": 338,
            dateformat: 381,
            is: 392,
            reject: 413,
            "segmentio-facade": 421,
            "to-camel-case": 431
        }],
        127: [function(require, module, exports) {
            "use strict";
            var camel = require("camelcase");
            var foldl = require("@ndhoule/foldl");
            var integration = require("@segment/analytics.js-integration");
            var FullStory = module.exports = integration("FullStory").option("org", "").option("debug", false).tag('<script src="https://www.fullstory.com/s/fs.js"><\/script>');
            var apiSource = "segment";
            FullStory.prototype.initialize = function() {
                window._fs_debug = this.options.debug;
                window._fs_host = "www.fullstory.com";
                window._fs_org = this.options.org;
                window._fs_namespace = "FS";
                (function(m, n, e, t, l, o, g, y) {
                    if (e in m) {
                        if (m.console && m.console.log) {
                            m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].')
                        }
                        return
                    }
                    g = m[e] = function(a, b, s) {
                        g.q ? g.q.push([a, b, s]) : g._api(a, b, s)
                    };
                    g.q = [];
                    g.identify = function(i, v, s) {
                        g(l, {
                            uid: i
                        }, s);
                        if (v) g(l, v, s)
                    };
                    g.setUserVars = function(v, s) {
                        g(l, v, s)
                    };
                    g.event = function(i, v, s) {
                        g("event", {
                            n: i,
                            p: v
                        }, s)
                    };
                    g.shutdown = function() {
                        g("rec", !1)
                    };
                    g.restart = function() {
                        g("rec", !0)
                    };
                    g.consent = function(a) {
                        g("consent", !arguments.length || a)
                    };
                    g.identifyAccount = function(i, v) {
                        o = "account";
                        v = v || {};
                        v.acctId = i;
                        g(o, v)
                    };
                    g.clearUserCookie = function() {}
                })(window, document, window["_fs_namespace"], "script", "user");
                this.load(this.ready)
            };
            FullStory.prototype.loaded = function() {
                return !!window.FS
            };
            FullStory.prototype.identify = function(identify) {
                var traits = identify.traits({
                    name: "displayName"
                });
                var newTraits = foldl(function(results, value, key) {
                    if (key !== "id") {
                        results[key === "displayName" || key === "email" ? key : camelCaseField(key)] = value
                    }
                    return results
                }, {}, traits);
                if (identify.userId()) {
                    window.FS.identify(String(identify.userId()), newTraits, apiSource)
                } else {
                    newTraits.segmentAnonymousId_str = String(identify.anonymousId());
                    window.FS.setUserVars(newTraits, apiSource)
                }
            };
            FullStory.prototype.track = function(track) {
                window.FS.event(track.event(), track.properties(), apiSource)
            };

            function camelCaseField(fieldName) {
                var parts = fieldName.split("_");
                if (parts.length > 1) {
                    var typeSuffix = parts.pop();
                    switch (typeSuffix) {
                        case "str":
                        case "int":
                        case "date":
                        case "real":
                        case "bool":
                        case "strs":
                        case "ints":
                        case "dates":
                        case "reals":
                        case "bools":
                            return camel(parts.join("_")) + "_" + typeSuffix;
                        default:
                    }
                }
                return camel(fieldName)
            }
        }, {
            "@ndhoule/foldl": 11,
            "@segment/analytics.js-integration": 128,
            camelcase: 132
        }],
        128: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 129,
            "./statics": 130,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 133,
            dup: 35,
            "slug-component": 427
        }],
        129: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 131,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        130: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        131: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        132: [function(require, module, exports) {
            "use strict";

            function preserveCamelCase(str) {
                var isLastCharLower = false;
                for (var i = 0; i < str.length; i++) {
                    var c = str.charAt(i);
                    if (isLastCharLower && /[a-zA-Z]/.test(c) && c.toUpperCase() === c) {
                        str = str.substr(0, i) + "-" + str.substr(i);
                        isLastCharLower = false;
                        i++
                    } else {
                        isLastCharLower = c.toLowerCase() === c
                    }
                }
                return str
            }
            module.exports = function() {
                var str = [].map.call(arguments, function(str) {
                    return str.trim()
                }).filter(function(str) {
                    return str.length
                }).join("-");
                if (!str.length) {
                    return ""
                }
                if (str.length === 1) {
                    return str.toLowerCase()
                }
                if (!/[_.\- ]+/.test(str)) {
                    if (str === str.toUpperCase()) {
                        return str.toLowerCase()
                    }
                    if (str[0] !== str[0].toLowerCase()) {
                        return str[0].toLowerCase() + str.slice(1)
                    }
                    return str
                }
                str = preserveCamelCase(str);
                return str.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, function(m, p1) {
                    return p1.toUpperCase()
                })
            }
        }, {}],
        133: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 134,
            _process: 412,
            dup: 39
        }],
        134: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        135: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var push = require("global-queue")("_gauges");
            var Gauges = module.exports = integration("Gauges").assumesPageview().global("_gauges").option("siteId", "").tag('<script id="gauges-tracker" src="//secure.gaug.es/track.js" data-site-id="{{ siteId }}">');
            Gauges.prototype.initialize = function() {
                window._gauges = window._gauges || [];
                this.load(this.ready)
            };
            Gauges.prototype.loaded = function() {
                return !!(window._gauges && window._gauges.push !== Array.prototype.push)
            };
            Gauges.prototype.page = function() {
                push("track")
            }
        }, {
            "@segment/analytics.js-integration": 136,
            "global-queue": 386
        }],
        136: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 137,
            "./statics": 138,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 140,
            dup: 35,
            "slug-component": 427
        }],
        137: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 139,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        138: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        139: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        140: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 141,
            _process: 412,
            dup: 39
        }],
        141: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        142: [function(require, module, exports) {
            "use strict";
            var Track = require("segmentio-facade").Track;
            var defaults = require("@ndhoule/defaults");
            var dot = require("obj-case");
            var each = require("component-each");
            var integration = require("@segment/analytics.js-integration");
            var is = require("is");
            var len = require("object-component").length;
            var push = require("global-queue")("_gaq");
            var reject = require("reject");
            var useHttps = require("use-https");
            var extend = require("extend");
            var user;
            module.exports = exports = function(analytics) {
                analytics.addIntegration(GA);
                user = analytics.user()
            };
            var GA = exports.Integration = integration("Google Analytics").readyOnLoad().global("ga").global("gaplugins").global("_gaq").global("GoogleAnalyticsObject").option("anonymizeIp", false).option("useGoogleAmpClientId", false).option("classic", false).option("contentGroupings", {}).option("dimensions", {}).option("domain", "auto").option("doubleClick", false).option("enhancedEcommerce", false).option("enhancedLinkAttribution", false).option("ignoredReferrers", null).option("includeSearch", false).option("setAllMappedProps", true).option("metrics", {}).option("nonInteraction", false).option("sendUserId", false).option("siteSpeedSampleRate", 1).option("sampleRate", 100).option("trackCategorizedPages", true).option("trackNamedPages", true).option("trackingId", "").option("optimize", "").option("nameTracker", false).tag("library", '<script src="//www.google-analytics.com/analytics.js">').tag("double click", '<script src="//stats.g.doubleclick.net/dc.js">').tag("http", '<script src="http://www.google-analytics.com/ga.js">').tag("https", '<script src="https://ssl.google-analytics.com/ga.js">');
            GA.on("construct", function(integration) {
                if (integration.options.classic) {
                    integration.initialize = integration.initializeClassic;
                    integration.loaded = integration.loadedClassic;
                    integration.page = integration.pageClassic;
                    integration.track = integration.trackClassic;
                    integration.orderCompleted = integration.completedOrderClassic
                } else if (integration.options.enhancedEcommerce) {
                    integration.productViewed = integration.productViewedEnhanced;
                    integration.productClicked = integration.productClickedEnhanced;
                    integration.productAdded = integration.productAddedEnhanced;
                    integration.productRemoved = integration.productRemovedEnhanced;
                    integration.checkoutStarted = integration.checkoutStartedEnhanced;
                    integration.checkoutStepViewed = integration.checkoutStepViewedEnhanced;
                    integration.checkoutStepCompleted = integration.checkoutStepCompletedEnhanced;
                    integration.orderUpdated = integration.orderUpdatedEnhanced;
                    integration.orderCompleted = integration.orderCompletedEnhanced;
                    integration.orderRefunded = integration.orderRefundedEnhanced;
                    integration.promotionViewed = integration.promotionViewedEnhanced;
                    integration.promotionClicked = integration.promotionClickedEnhanced;
                    integration.productListViewed = integration.productListViewedEnhanced;
                    integration.productListFiltered = integration.productListFilteredEnhanced
                }
            });
            GA.prototype.initialize = function() {
                this.pageCalled = false;
                var opts = this.options;
                window.GoogleAnalyticsObject = "ga";
                window.ga = window.ga || function() {
                    window.ga.q = window.ga.q || [];
                    window.ga.q.push(arguments)
                };
                window.ga.l = (new Date).getTime();
                if (window.location.hostname === "localhost") opts.domain = "none";
                var config = {
                    cookieDomain: opts.domain || GA.prototype.defaults.domain,
                    siteSpeedSampleRate: opts.siteSpeedSampleRate,
                    sampleRate: opts.sampleRate,
                    allowLinker: true,
                    useAmpClientId: opts.useGoogleAmpClientId
                };
                if (opts.nameTracker) {
                    config.name = "segmentGATracker";
                    this._trackerName = "segmentGATracker."
                } else {
                    this._trackerName = ""
                }
                window.ga("create", opts.trackingId, config);
                if (opts.optimize) window.ga(this._trackerName + "require", opts.optimize);
                if (opts.doubleClick) {
                    window.ga(this._trackerName + "require", "displayfeatures")
                }
                if (opts.enhancedLinkAttribution) {
                    window.ga(this._trackerName + "require", "linkid", "linkid.js")
                }
                if (opts.sendUserId && user.id()) {
                    window.ga(this._trackerName + "set", "userId", user.id())
                }
                if (opts.anonymizeIp) window.ga(this._trackerName + "set", "anonymizeIp", true);
                var userTraits = user.traits();
                if (user.id()) {
                    userTraits.id = user.id()
                }
                var custom = metrics(userTraits, opts);
                if (len(custom)) window.ga(this._trackerName + "set", custom);
                this.load("library", this.ready)
            };
            GA.prototype.loaded = function() {
                return !!window.gaplugins
            };
            GA.prototype.page = function(page) {
                var category = page.category();
                var props = page.properties();
                var name = page.fullName();
                var opts = this.options;
                var campaign = page.proxy("context.campaign") || {};
                var pageview = {};
                var pagePath = path(props, this.options);
                var pageTitle = name || props.title;
                var pageReferrer = page.referrer() || "";
                var self = this;
                var track;
                this._category = category;
                pageview.page = pagePath;
                pageview.title = pageTitle;
                pageview.location = props.url;
                if (campaign.name) pageview.campaignName = campaign.name;
                if (campaign.source) pageview.campaignSource = campaign.source;
                if (campaign.medium) pageview.campaignMedium = campaign.medium;
                if (campaign.content) pageview.campaignContent = campaign.content;
                if (campaign.term) pageview.campaignKeyword = campaign.term;
                var payload = {
                    page: pagePath,
                    title: pageTitle
                };
                pageview = extend(pageview, setCustomDimenionsAndMetrics(props, opts, self._trackerName));
                if (pageReferrer !== document.referrer) payload.referrer = pageReferrer;
                window.ga(this._trackerName + "set", payload);
                if (this.pageCalled) delete pageview.location;
                window.ga(this._trackerName + "send", "pageview", pageview);
                if (category && this.options.trackCategorizedPages) {
                    track = page.track(category);
                    this.track(track, {
                        nonInteraction: 1
                    })
                }
                if (name && this.options.trackNamedPages) {
                    track = page.track(name);
                    this.track(track, {
                        nonInteraction: 1
                    })
                }
                this.pageCalled = true
            };
            GA.prototype.identify = function(identify) {
                var opts = this.options;
                if (opts.sendUserId && identify.userId()) {
                    window.ga(this._trackerName + "set", "userId", identify.userId())
                }
                var custom = metrics(identify.traits(), opts);
                if (len(custom)) window.ga(this._trackerName + "set", custom)
            };
            GA.prototype.track = function(track, options) {
                var contextOpts = track.options(this.name);
                var interfaceOpts = this.options;
                var opts = defaults(options || {}, contextOpts);
                opts = defaults(opts, interfaceOpts);
                var props = track.properties();
                var campaign = track.proxy("context.campaign") || {};
                var self = this;
                var payload = {
                    eventAction: track.event(),
                    eventCategory: track.category() || this._category || "All",
                    eventLabel: props.label,
                    eventValue: formatValue(props.value || track.revenue()),
                    nonInteraction: props.nonInteraction !== undefined ? !!props.nonInteraction : !!opts.nonInteraction
                };
                if (campaign.name) payload.campaignName = campaign.name;
                if (campaign.source) payload.campaignSource = campaign.source;
                if (campaign.medium) payload.campaignMedium = campaign.medium;
                if (campaign.content) payload.campaignContent = campaign.content;
                if (campaign.term) payload.campaignKeyword = campaign.term;
                payload = extend(payload, setCustomDimenionsAndMetrics(props, interfaceOpts, self._trackerName));
                window.ga(this._trackerName + "send", "event", payload)
            };
            GA.prototype.orderCompleted = function(track) {
                var total = track.total() || track.revenue() || 0;
                var orderId = track.orderId();
                var products = track.products();
                var props = track.properties();
                var self = this;
                if (!orderId) return;
                if (!this.ecommerce) {
                    window.ga(this._trackerName + "require", "ecommerce");
                    this.ecommerce = true
                }
                window.ga(this._trackerName + "ecommerce:addTransaction", {
                    affiliation: props.affiliation,
                    shipping: track.shipping(),
                    revenue: total,
                    tax: track.tax(),
                    id: orderId,
                    currency: track.currency()
                });
                each(products, function(product) {
                    var productTrack = createProductTrack(track, product);
                    window.ga(self._trackerName + "ecommerce:addItem", {
                        category: productTrack.category(),
                        quantity: productTrack.quantity(),
                        price: productTrack.price(),
                        name: productTrack.name(),
                        sku: productTrack.sku(),
                        id: orderId,
                        currency: productTrack.currency()
                    })
                });
                window.ga(this._trackerName + "ecommerce:send")
            };
            GA.prototype.initializeClassic = function() {
                var opts = this.options;
                var anonymize = opts.anonymizeIp;
                var domain = opts.domain;
                var enhanced = opts.enhancedLinkAttribution;
                var ignore = opts.ignoredReferrers;
                var sample = opts.siteSpeedSampleRate;
                window._gaq = window._gaq || [];
                push("_setAccount", opts.trackingId);
                push("_setAllowLinker", true);
                if (anonymize) push("_gat._anonymizeIp");
                if (domain) push("_setDomainName", domain);
                if (sample) push("_setSiteSpeedSampleRate", sample);
                if (enhanced) {
                    var protocol = document.location.protocol === "https:" ? "https:" : "http:";
                    var pluginUrl = protocol + "//www.google-analytics.com/plugins/ga/inpage_linkid.js";
                    push("_require", "inpage_linkid", pluginUrl)
                }
                if (ignore) {
                    if (!is.array(ignore)) ignore = [ignore];
                    each(ignore, function(domain) {
                        push("_addIgnoredRef", domain)
                    })
                }
                if (this.options.doubleClick) {
                    this.load("double click", this.ready)
                } else {
                    var name = useHttps() ? "https" : "http";
                    this.load(name, this.ready)
                }
            };
            GA.prototype.loadedClassic = function() {
                return !!(window._gaq && window._gaq.push !== Array.prototype.push)
            };
            GA.prototype.pageClassic = function(page) {
                var category = page.category();
                var props = page.properties();
                var name = page.fullName();
                var track;
                push("_trackPageview", path(props, this.options));
                if (category && this.options.trackCategorizedPages) {
                    track = page.track(category);
                    this.track(track, {
                        nonInteraction: 1
                    })
                }
                if (name && this.options.trackNamedPages) {
                    track = page.track(name);
                    this.track(track, {
                        nonInteraction: 1
                    })
                }
            };
            GA.prototype.trackClassic = function(track, options) {
                var opts = options || track.options(this.name);
                var props = track.properties();
                var revenue = track.revenue();
                var event = track.event();
                var category = this._category || track.category() || "All";
                var label = props.label;
                var value = formatValue(revenue || props.value);
                var nonInteraction = !!(props.nonInteraction || opts.nonInteraction);
                push("_trackEvent", category, event, label, value, nonInteraction)
            };
            GA.prototype.completedOrderClassic = function(track) {
                var total = track.total() || track.revenue() || 0;
                var orderId = track.orderId();
                var products = track.products() || [];
                var props = track.properties();
                var currency = track.currency();
                if (!orderId) return;
                push("_addTrans", orderId, props.affiliation, total, track.tax(), track.shipping(), track.city(), track.state(), track.country());
                each(products, function(product) {
                    var track = new Track({
                        properties: product
                    });
                    push("_addItem", orderId, track.sku(), track.name(), track.category(), track.price(), track.quantity())
                });
                push("_set", "currencyCode", currency);
                push("_trackTrans")
            };

            function path(properties, options) {
                if (!properties) return;
                var str = properties.path;
                if (options.includeSearch && properties.search) str += properties.search;
                return str
            }

            function setCustomDimenionsAndMetrics(props, opts, trackerName) {
                var ret = {};
                var custom = metrics(props, opts);
                if (len(custom)) {
                    if (opts.setAllMappedProps) {
                        window.ga(trackerName + "set", custom)
                    } else {
                        each(custom, function(key, value) {
                            ret[key] = value
                        });
                        return ret
                    }
                }
            }

            function formatValue(value) {
                if (!value || value < 0) return 0;
                return Math.round(value)
            }

            function metrics(obj, data) {
                var dimensions = data.dimensions;
                var metrics = data.metrics;
                var contentGroupings = data.contentGroupings;
                var ret = {};
                each([metrics, dimensions, contentGroupings], function(group) {
                    each(group, function(prop, key) {
                        var value = dot(obj, prop) || obj[prop];
                        if (is.bool(value)) value = value.toString();
                        if (value || value === 0) ret[key] = value
                    })
                });
                return ret
            }
            GA.prototype.loadEnhancedEcommerce = function(track) {
                var self = this;
                if (!this.enhancedEcommerceLoaded) {
                    window.ga(self._trackerName + "require", "ec");
                    this.enhancedEcommerceLoaded = true
                }
                window.ga(self._trackerName + "set", "&cu", track.currency())
            };
            GA.prototype.pushEnhancedEcommerce = function(track, opts, trackerName) {
                var self = this;
                var args = reject([self._trackerName + "send", "event", track.category() || "EnhancedEcommerce", track.event() || "Action not defined", track.properties().label, extend({
                    nonInteraction: 1
                }, setCustomDimenionsAndMetrics(track.properties(), opts, trackerName))]);
                window.ga.apply(window, args)
            };
            GA.prototype.checkoutStartedEnhanced = function(track) {
                this.checkoutStepViewed(track)
            };
            GA.prototype.orderUpdatedEnhanced = function(track) {
                this.checkoutStartedEnhanced(track)
            };
            GA.prototype.checkoutStepViewedEnhanced = function(track) {
                var products = track.products();
                var props = track.properties();
                var options = extractCheckoutOptions(props);
                var self = this;
                var opts = this.options;
                this.loadEnhancedEcommerce(track);
                each(products, function(product) {
                    var productTrack = createProductTrack(track, product);
                    enhancedEcommerceTrackProduct(productTrack, self._trackerName, opts)
                });
                window.ga(self._trackerName + "ec:setAction", "checkout", {
                    step: props.step || 1,
                    option: options || undefined
                });
                this.pushEnhancedEcommerce(track, opts, self._trackerName)
            };
            GA.prototype.checkoutStepCompletedEnhanced = function(track) {
                var props = track.properties();
                var options = extractCheckoutOptions(props);
                var self = this;
                if (!props.step || !options) return;
                this.loadEnhancedEcommerce(track);
                window.ga(self._trackerName + "ec:setAction", "checkout_option", {
                    step: props.step || 1,
                    option: options
                });
                window.ga(self._trackerName + "send", "event", "Checkout", "Option")
            };
            GA.prototype.orderCompletedEnhanced = function(track) {
                var total = track.total() || track.revenue() || 0;
                var orderId = track.orderId();
                var products = track.products();
                var props = track.properties();
                var opts = this.options;
                var self = this;
                if (!orderId) return;
                this.loadEnhancedEcommerce(track);
                each(products, function(product) {
                    var productTrack = createProductTrack(track, product);
                    enhancedEcommerceTrackProduct(productTrack, self._trackerName, opts)
                });
                window.ga(self._trackerName + "ec:setAction", "purchase", {
                    id: orderId,
                    affiliation: props.affiliation,
                    revenue: total,
                    tax: track.tax(),
                    shipping: track.shipping(),
                    coupon: track.coupon()
                });
                this.pushEnhancedEcommerce(track, opts, self._trackerName)
            };
            GA.prototype.orderRefundedEnhanced = function(track) {
                var orderId = track.orderId();
                var products = track.products();
                var self = this;
                var opts = this.options;
                if (!orderId) return;
                this.loadEnhancedEcommerce(track);
                each(products, function(product) {
                    var track = new Track({
                        properties: product
                    });
                    window.ga(self._trackerName + "ec:addProduct", {
                        id: track.productId() || track.id() || track.sku(),
                        quantity: track.quantity()
                    })
                });
                window.ga(self._trackerName + "ec:setAction", "refund", {
                    id: orderId
                });
                this.pushEnhancedEcommerce(track, opts, self._trackerName)
            };
            GA.prototype.productAddedEnhanced = function(track) {
                var self = this;
                var opts = this.options;
                this.loadEnhancedEcommerce(track);
                enhancedEcommerceProductAction(track, "add", null, self._trackerName, opts);
                this.pushEnhancedEcommerce(track, opts, self._trackerName)
            };
            GA.prototype.productRemovedEnhanced = function(track) {
                var self = this;
                var opts = this.options;
                this.loadEnhancedEcommerce(track);
                enhancedEcommerceProductAction(track, "remove", null, self._trackerName, opts);
                this.pushEnhancedEcommerce(track, opts, self._trackerName)
            };
            GA.prototype.productViewedEnhanced = function(track) {
                var props = track.properties();
                var data = {};
                var self = this;
                var opts = this.options;
                this.loadEnhancedEcommerce(track);
                if (props.list) data.list = props.list;
                enhancedEcommerceProductAction(track, "detail", data, self._trackerName, opts);
                this.pushEnhancedEcommerce(track, opts, self._trackerName)
            };
            GA.prototype.productClickedEnhanced = function(track) {
                var props = track.properties();
                var data = {};
                var self = this;
                var opts = this.options;
                this.loadEnhancedEcommerce(track);
                if (props.list) data.list = props.list;
                enhancedEcommerceProductAction(track, "click", data, self._trackerName, opts);
                this.pushEnhancedEcommerce(track, opts, self._trackerName)
            };
            GA.prototype.promotionViewedEnhanced = function(track) {
                var props = track.properties();
                var self = this;
                var opts = this.options;
                this.loadEnhancedEcommerce(track);
                window.ga(self._trackerName + "ec:addPromo", {
                    id: track.promotionId() || track.id(),
                    name: track.name(),
                    creative: props.creative,
                    position: props.position
                });
                this.pushEnhancedEcommerce(track, opts, self._trackerName)
            };
            GA.prototype.promotionClickedEnhanced = function(track) {
                var props = track.properties();
                var self = this;
                var opts = this.options;
                this.loadEnhancedEcommerce(track);
                window.ga(self._trackerName + "ec:addPromo", {
                    id: track.promotionId() || track.id(),
                    name: track.name(),
                    creative: props.creative,
                    position: props.position
                });
                window.ga(self._trackerName + "ec:setAction", "promo_click", {});
                this.pushEnhancedEcommerce(track, opts, self._trackerName)
            };
            GA.prototype.productListViewedEnhanced = function(track) {
                var props = track.properties();
                var products = track.products();
                var self = this;
                var opts = this.options;
                this.loadEnhancedEcommerce(track);
                each(products, function(product) {
                    var item = new Track({
                        properties: product
                    });
                    if (!(item.productId() || item.sku()) && !item.name()) return;
                    var impressionObj = {
                        id: item.productId() || item.sku(),
                        name: item.name(),
                        category: item.category() || track.category(),
                        list: props.list_id || track.category() || "products",
                        brand: item.properties().brand,
                        variant: item.properties().variant,
                        price: item.price(),
                        position: products.map(function(x) {
                            return x.product_id
                        }).indexOf(item.productId()) + 1
                    };
                    impressionObj = extend(impressionObj, metrics(item.properties(), opts));
                    for (var prop in impressionObj) {
                        if (impressionObj[prop] === undefined) delete impressionObj[prop]
                    }
                    window.ga(self._trackerName + "ec:addImpression", impressionObj)
                });
                this.pushEnhancedEcommerce(track, opts, self._trackerName)
            };
            GA.prototype.productListFilteredEnhanced = function(track) {
                var props = track.properties();
                var products = track.products();
                props.filters = props.filters || [];
                props.sorters = props.sorters || [];
                var filters = props.filters.map(function(obj) {
                    return obj.type + ":" + obj.value
                }).join();
                var sorts = props.sorts.map(function(obj) {
                    return obj.type + ":" + obj.value
                }).join();
                var self = this;
                var opts = this.options;
                this.loadEnhancedEcommerce(track);
                each(products, function(product) {
                    var item = new Track({
                        properties: product
                    });
                    if (!(item.productId() || item.sku()) && !item.name()) return;
                    var impressionObj = {
                        id: item.productId() || item.sku(),
                        name: item.name(),
                        category: item.category() || track.category(),
                        list: props.list_id || track.category() || "search results",
                        brand: item.properties().brand,
                        variant: filters + "::" + sorts,
                        price: item.price(),
                        position: products.map(function(x) {
                            return x.product_id
                        }).indexOf(item.productId()) + 1
                    };
                    impressionObj = extend(impressionObj, metrics(item.properties(), opts));
                    for (var prop in impressionObj) {
                        if (impressionObj[prop] === undefined) delete impressionObj[prop]
                    }
                    window.ga(self._trackerName + "ec:addImpression", impressionObj)
                });
                this.pushEnhancedEcommerce(track, opts, self._trackerName)
            };

            function enhancedEcommerceTrackProduct(track, trackerName, opts) {
                var props = track.properties();
                var product = {
                    id: track.productId() || track.id() || track.sku(),
                    name: track.name(),
                    category: track.category(),
                    quantity: track.quantity(),
                    price: track.price(),
                    brand: props.brand,
                    variant: props.variant,
                    currency: track.currency()
                };
                if (props.position != null) {
                    product.position = Math.round(props.position)
                }
                var coupon = track.proxy("properties.coupon");
                if (coupon) product.coupon = coupon;
                product = extend(product, metrics(props, opts));
                window.ga(trackerName + "ec:addProduct", product)
            }

            function enhancedEcommerceProductAction(track, action, data, trackerName, opts) {
                enhancedEcommerceTrackProduct(track, trackerName, opts);
                window.ga(trackerName + "ec:setAction", action, data || {})
            }

            function extractCheckoutOptions(props) {
                var options = [props.paymentMethod, props.shippingMethod];
                var valid = reject(options);
                return valid.length > 0 ? valid.join(", ") : null
            }

            function createProductTrack(track, properties) {
                properties.currency = properties.currency || track.currency();
                return new Track({
                    properties: properties
                })
            }
        }, {
            "@ndhoule/defaults": 6,
            "@segment/analytics.js-integration": 338,
            "component-each": 371,
            extend: 385,
            "global-queue": 386,
            is: 392,
            "obj-case": 407,
            "object-component": 408,
            reject: 413,
            "segmentio-facade": 421,
            "use-https": 441
        }],
        143: [function(require, module, exports) {
            "use strict";
            var Identify = require("segmentio-facade").Identify;
            var Track = require("segmentio-facade").Track;
            var each = require("component-each");
            var integration = require("@segment/analytics.js-integration");
            var omit = require("omit");
            var pick = require("pick");
            var GoSquared = module.exports = integration("GoSquared").assumesPageview().global("_gs").option("anonymizeIP", false).option("apiSecret", "").option("cookieDomain", null).option("trackHash", false).option("trackLocal", false).option("trackParams", true).option("useCookies", true).tag('<script src="//d1l6p2sc9645hc.cloudfront.net/tracker.js">');
            GoSquared.prototype.initialize = function() {
                var self = this;
                var options = this.options;
                var user = this.analytics.user();
                push(options.apiSecret);
                each(options, function(name, value) {
                    if (name === "apiSecret") return;
                    if (value == null) return;
                    push("set", name, value)
                });
                self.identify(new Identify({
                    traits: user.traits(),
                    userId: user.id()
                }));
                self.load(this.ready)
            };
            GoSquared.prototype.loaded = function() {
                return !!(window._gs && window._gs.v)
            };
            GoSquared.prototype.page = function(page) {
                var props = page.properties();
                var name = page.fullName();
                push("track", props.path, name || props.title)
            };
            GoSquared.prototype.identify = function(identify) {
                var traits = identify.traits({
                    createdAt: "created_at",
                    firstName: "first_name",
                    lastName: "last_name",
                    title: "company_position",
                    industry: "company_industry"
                });
                var specialKeys = ["id", "email", "name", "first_name", "last_name", "username", "description", "avatar", "phone", "created_at", "company_name", "company_size", "company_position", "company_industry"];
                var props = pick.apply(null, [traits].concat(specialKeys));
                props.custom = omit(specialKeys, traits);
                var id = identify.userId();
                if (id) {
                    push("identify", id, props)
                } else {
                    push("properties", props)
                }
            };
            GoSquared.prototype.track = function(track) {
                push("event", track.event(), track.properties())
            };
            GoSquared.prototype.orderCompleted = function(track) {
                var products = track.products();
                var items = [];
                each(products, function(product) {
                    var track = new Track({
                        properties: product
                    });
                    items.push({
                        category: track.category(),
                        quantity: track.quantity(),
                        price: track.price(),
                        name: track.name()
                    })
                });
                push("transaction", track.orderId(), {
                    revenue: track.total(),
                    track: true
                }, items)
            };

            function push() {
                window._gs = window._gs || function() {
                    window._gs.q.push(arguments)
                };
                window._gs.q = window._gs.q || [];
                window._gs.apply(null, arguments)
            }
        }, {
            "@segment/analytics.js-integration": 338,
            "component-each": 371,
            omit: 409,
            pick: 411,
            "segmentio-facade": 421
        }],
        144: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var each = require("component-each");
            var is = require("is");
            var extend = require("@ndhoule/extend");
            var toISOString = require("@segment/to-iso-string");
            var toString = Object.prototype.toString;
            var Heap = module.exports = integration("Heap").global("heap").option("appId", "").tag('<script src="//cdn.heapanalytics.com/js/heap-{{ appId }}.js">');
            Heap.prototype.initialize = function() {
                window.heap = window.heap || [];
                window.heap.load = function(appid, config) {
                    window.heap.appid = appid;
                    window.heap.config = config;
                    var methodFactory = function(type) {
                        return function() {
                            window.heap.push([type].concat(Array.prototype.slice.call(arguments, 0)))
                        }
                    };
                    var heapMethods = ["addEventProperties", "addUserProperties", "clearEventProperties", "identify", "removeEventProperty", "setEventProperties", "track", "unsetEventProperty", "resetIdentity"];
                    each(heapMethods, function(method) {
                        window.heap[method] = methodFactory(method)
                    })
                };
                window.heap.load(this.options.appId);
                this.load(this.ready)
            };
            Heap.prototype.loaded = function() {
                return !!(window.heap && window.heap.appid)
            };
            Heap.prototype.identify = function(identify) {
                var traits = identify.traits({
                    email: "_email"
                });
                var id = identify.userId();
                if (id) window.heap.identify(id);
                window.heap.addUserProperties(clean(traits))
            };
            Heap.prototype.track = function(track) {
                window.heap.track(track.event(), clean(track.properties()))
            };

            function clean(obj) {
                var ret = {};
                for (var k in obj) {
                    if (obj.hasOwnProperty(k)) {
                        var value = obj[k];
                        if (value === null || value === undefined) continue;
                        if (is.date(value)) {
                            ret[k] = toISOString(value);
                            continue
                        }
                        if (is.bool(value)) {
                            ret[k] = value;
                            continue
                        }
                        if (is.number(value)) {
                            ret[k] = value;
                            continue
                        }
                        if (toString.call(value) === "[object Array]") {
                            ret = extend(ret, trample(k, value));
                            continue
                        }
                        if (toString.call(value) !== "[object Object]") {
                            ret[k] = value.toString();
                            continue
                        }
                        ret = extend(ret, trample(k, value))
                    }
                }

                function trample(key, value) {
                    var nestedObj = {};
                    nestedObj[key] = value;
                    var flattenedObj = flatten(nestedObj, {
                        safe: true
                    });
                    for (var k in flattenedObj) {
                        if (is.array(flattenedObj[k])) flattenedObj[k] = JSON.stringify(flattenedObj[k])
                    }
                    return flattenedObj
                }
                return ret
            }

            function flatten(target, opts) {
                opts = opts || {};
                var delimiter = opts.delimiter || ".";
                var maxDepth = opts.maxDepth;
                var currentDepth = 1;
                var output = {};

                function step(object, prev) {
                    Object.keys(object).forEach(function(key) {
                        var value = object[key];
                        var isarray = opts.safe && Array.isArray(value);
                        var type = Object.prototype.toString.call(value);
                        var isobject = type === "[object Object]" || type === "[object Array]";
                        var newKey = prev ? prev + delimiter + key : key;
                        if (!opts.maxDepth) {
                            maxDepth = currentDepth + 1
                        }
                        if (!isarray && isobject && Object.keys(value).length && currentDepth < maxDepth) {
                            ++currentDepth;
                            return step(value, newKey)
                        }
                        output[newKey] = value
                    })
                }
                step(target);
                return output
            }
            if (!Object.keys) {
                Object.keys = function(o) {
                    if (o !== Object(o)) {
                        throw new TypeError("Object.keys called on a non-object")
                    }
                    var k = [];
                    var p;
                    for (p in o)
                        if (Object.prototype.hasOwnProperty.call(o, p)) k.push(p);
                    return k
                }
            }
        }, {
            "@ndhoule/extend": 10,
            "@segment/analytics.js-integration": 338,
            "@segment/to-iso-string": 359,
            "component-each": 371,
            is: 392
        }],
        145: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var Hellobar = module.exports = integration("Hello Bar").assumesPageview().option("apiKey", "").tag('<script src="//my.hellobar.com/{{ apiKey }}.js">');
            Hellobar.prototype.initialize = function() {
                this.load(this.ready)
            };
            Hellobar.prototype.loaded = function() {
                return typeof window.hellobar === "function"
            }
        }, {
            "@segment/analytics.js-integration": 146
        }],
        146: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 147,
            "./statics": 148,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 150,
            dup: 35,
            "slug-component": 427
        }],
        147: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 149,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        148: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        149: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        150: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 151,
            _process: 412,
            dup: 39
        }],
        151: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        152: [function(require, module, exports) {
            "use strict";
            var Identify = require("segmentio-facade").Identify;
            var convert = require("@segment/convert-dates");
            var integration = require("@segment/analytics.js-integration");
            var push = require("global-queue")("_hsq");
            var each = require("@ndhoule/each");
            var HubSpot = module.exports = integration("HubSpot").assumesPageview().global("_hsq").option("portalId", null).tag('<script id="hs-analytics" src="https://js.hs-analytics.net/analytics/{{ cacheBuster }}/{{ portalId }}.js">');
            HubSpot.prototype.initialize = function() {
                window._hsq = [];
                var cacheBuster = Math.ceil(new Date / 3e5) * 3e5;
                this.load({
                    cacheBuster: cacheBuster
                }, this.ready)
            };
            HubSpot.prototype.loaded = function() {
                return !!(window._hsq && window._hsq.push !== Array.prototype.push)
            };
            HubSpot.prototype.page = function() {
                push("trackPageView")
            };
            HubSpot.prototype.identify = function(identify) {
                var newIdentify = new Identify({
                    traits: identify.traits(),
                    userId: identify.userId()
                });
                if (!newIdentify.email()) {
                    return
                }
                var traits = newIdentify.traits({
                    firstName: "firstname",
                    lastName: "lastname"
                });
                traits = convertDates(traits);
                traits = formatTraits(traits);
                if (newIdentify.companyName() !== undefined) {
                    traits.company = newIdentify.companyName()
                }
                push("identify", traits)
            };
            HubSpot.prototype.track = function(track) {
                var props = convertDates(track.properties({
                    id: "_id",
                    revenue: "value"
                }));
                props.id = track.event();
                push("trackEvent", track.event(), props)
            };

            function convertDates(properties) {
                return convert(properties, function(date) {
                    return date.getTime()
                })
            }

            function formatTraits(traits) {
                var ret = {};
                each(function(value, key) {
                    var k = key.toLowerCase().split(" ").join("_").split(".").join("_").split("\n").join("_").split("\v").join("_").split("\t").join("_").split("\f").join("_").split("\r").join("_");
                    ret[k] = value
                }, traits);
                return ret
            }
        }, {
            "@ndhoule/each": 8,
            "@segment/analytics.js-integration": 338,
            "@segment/convert-dates": 350,
            "global-queue": 386,
            "segmentio-facade": 421
        }],
        153: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var push = require("global-queue")("__insp");
            var Inspectlet = module.exports = integration("Inspectlet").assumesPageview().global("__insp").global("__insp_").option("wid", "").tag('<script src="//cdn.inspectlet.com/inspectlet.js">');
            Inspectlet.prototype.initialize = function() {
                push("wid", this.options.wid);
                this.load(this.ready)
            };
            Inspectlet.prototype.loaded = function() {
                return !!(window.__insp_ && window.__insp)
            };
            Inspectlet.prototype.identify = function(identify) {
                var traits = identify.traits({
                    id: "userid"
                });
                var email = identify.email();
                if (email) push("identify", email);
                push("tagSession", traits)
            };
            Inspectlet.prototype.track = function(track) {
                push("tagSession", track.event(), track.properties())
            };
            Inspectlet.prototype.page = function() {
                push("virtualPage")
            }
        }, {
            "@segment/analytics.js-integration": 154,
            "global-queue": 386
        }],
        154: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 155,
            "./statics": 156,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 158,
            dup: 35,
            "slug-component": 427
        }],
        155: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 157,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        156: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        157: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        158: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 159,
            _process: 412,
            dup: 39
        }],
        159: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        160: [function(require, module, exports) {
            "use strict";
            var convertDates = require("@segment/convert-dates");
            var defaults = require("@ndhoule/defaults");
            var del = require("obj-case").del;
            var integration = require("@segment/analytics.js-integration");
            var is = require("is");
            var extend = require("@ndhoule/extend");
            var clone = require("@ndhoule/clone");
            var each = require("@ndhoule/each");
            var pick = require("@ndhoule/pick");
            var Intercom = module.exports = integration("Intercom").global("Intercom").option("activator", "#IntercomDefaultWidget").option("appId", "").option("richLinkProperties", []).tag('<script src="https://widget.intercom.io/widget/{{ appId }}">');
            Intercom.prototype.initialize = function() {
                window.Intercom = function() {
                    window.Intercom.q.push(arguments)
                };
                window.Intercom.q = [];
                this.load(this.ready)
            };
            Intercom.prototype.loaded = function() {
                return typeof window.Intercom === "function"
            };
            Intercom.prototype.page = function(page) {
                var integrationSettings = page.options(this.name);
                this.bootOrUpdate({}, integrationSettings)
            };
            Intercom.prototype.identify = function(identify) {
                var traits = identify.traits({
                    userId: "user_id"
                });
                var integrationSettings = identify.options(this.name);
                var companyCreated = identify.companyCreated();
                var created = identify.created();
                var name = identify.name();
                var id = identify.userId();
                var group = this.analytics.group();
                var settings = this.options;
                if (!id && !identify.email()) {
                    return
                }
                if (traits.company !== null && !is.object(traits.company)) {
                    delete traits.company
                }
                if (traits.company) {
                    defaults(traits.company, group.traits())
                }
                if (name) traits.name = name;
                if (created) {
                    del(traits, "created");
                    del(traits, "createdAt");
                    traits.created_at = created
                }
                if (companyCreated) {
                    del(traits.company, "created");
                    del(traits.company, "createdAt");
                    traits.company.created_at = companyCreated
                }
                traits = convertDates(traits, formatDate);
                traits = formatNestedCustomTraits(traits, settings);
                if (integrationSettings.userHash) traits.user_hash = integrationSettings.userHash;
                if (integrationSettings.user_hash) traits.user_hash = integrationSettings.user_hash;
                this.bootOrUpdate(traits, integrationSettings)
            };
            Intercom.prototype.group = function(group) {
                var settings = this.options;
                var props = group.traits({
                    createdAt: "created",
                    created: "created_at",
                    monthlySpend: "monthly_spend"
                });
                props = convertDates(props, formatDate);
                var id = group.groupId();
                if (id) props.id = id;
                var integrationSettings = group.options(this.name);
                props = formatNestedCustomTraits(props, settings);
                var traits = extend({
                    company: props
                }, hideDefaultLauncher(integrationSettings));
                api("update", traits)
            };
            Intercom.prototype.track = function(track) {
                var settings = this.options;
                var props = track.properties();
                var revenue = track.revenue();
                if (revenue) {
                    var revenueData = {
                        price: {
                            amount: revenue * 100,
                            currency: track.currency()
                        }
                    }
                }
                props = formatNestedCustomTraits(props, settings);
                props = extend(props, revenueData);
                del(props, "revenue");
                del(props, "currency");
                api("trackEvent", track.event(), props)
            };
            Intercom.prototype.bootOrUpdate = function(options, integrationSettings) {
                options = options || {};
                var method = this.booted === true ? "update" : "boot";
                var activator = this.options.activator;
                options.app_id = this.options.appId;
                if (activator !== "#IntercomDefaultWidget") {
                    options.widget = {
                        activator: activator
                    }
                }
                options = extend(options, hideDefaultLauncher(integrationSettings));
                api(method, options);
                this.booted = true
            };

            function formatDate(date) {
                return Math.floor(date / 1e3)
            }

            function formatNestedCustomTraits(obj, settings) {
                var richLinkProperties = settings.richLinkProperties;
                var basicIntercomTraits = ["companies", "company", "created_at", "created", "custom_attributes", "company_id", "id", "name", "monthly_spend", "plan", "remote_created_at", "remove", "user_id", "email"];
                var semanticTraits = basicIntercomTraits.concat(richLinkProperties);
                var customTraits = clone(obj);
                each(function(trait) {
                    del(customTraits, trait)
                }, semanticTraits);
                var standardTraits = pick(semanticTraits, obj);
                var supportedTraits = {};
                each(function(value, key) {
                    if (!is.object(value) && !is.array(value)) supportedTraits[key] = value
                }, customTraits);
                return extend(supportedTraits, standardTraits)
            }

            function api() {
                window.Intercom.apply(window.Intercom, arguments)
            }

            function hideDefaultLauncher(options) {
                var ret = {};
                var setting = options.hideDefaultLauncher;
                if (setting === undefined || typeof setting !== "boolean") return ret;
                ret.hide_default_launcher = setting;
                return ret
            }
        }, {
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/each": 8,
            "@ndhoule/extend": 10,
            "@ndhoule/pick": 15,
            "@segment/analytics.js-integration": 161,
            "@segment/convert-dates": 350,
            is: 392,
            "obj-case": 407
        }],
        161: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 162,
            "./statics": 163,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 165,
            dup: 35,
            "slug-component": 427
        }],
        162: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 164,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        163: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        164: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        165: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 166,
            _process: 412,
            dup: 39
        }],
        166: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        167: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var clone = require("@ndhoule/clone");
            var Keen = module.exports = integration("Keen IO").global("KeenSegment").option("ipAddon", false).option("projectId", "").option("readKey", "").option("referrerAddon", false).option("trackAllPages", false).option("trackCategorizedPages", true).option("trackNamedPages", true).option("uaAddon", false).option("urlAddon", false).option("writeKey", "").tag('<script src="//d26b395fwzu5fz.cloudfront.net/3.4.0/{{ lib }}.min.js">');
            Keen.prototype.initialize = function() {
                var lib = this.options.readKey ? "keen" : "keen-tracker";
                var options = this.options;
                var previousKeen = window.Keen || null;
                var self = this;
                if (!window.Keen || window.Keen.version !== "3.4.0") {
                    window.Keen = undefined;
                    ! function(a, b) {
                        if (void 0 === b[a]) {
                            b["_" + a] = {}, b[a] = function(c) {
                                b["_" + a].clients = b["_" + a].clients || {}, b["_" + a].clients[c.projectId] = this, this._config = c
                            }, b[a].ready = function(c) {
                                b["_" + a].ready = b["_" + a].ready || [], b["_" + a].ready.push(c)
                            };
                            for (var c = ["addEvent", "setGlobalProperties", "trackExternalLink", "on"], d = 0; d < c.length; d++) {
                                var e = c[d],
                                    f = function(a) {
                                        return function() {
                                            return this["_" + a] = this["_" + a] || [], this["_" + a].push(arguments), this
                                        }
                                    };
                                b[a].prototype[e] = f(e)
                            }
                        }
                    }("Keen", window)
                }
                window.KeenSegment = window.Keen;
                this.client = new window.KeenSegment({
                    projectId: options.projectId,
                    readKey: options.readKey,
                    writeKey: options.writeKey
                });
                this.load({
                    lib: lib
                }, function() {
                    window.KeenSegment = window.Keen;
                    if (previousKeen) {
                        window.Keen = previousKeen;
                        previousKeen = undefined
                    }
                    self.ready()
                })
            };
            Keen.prototype.loaded = function() {
                return !!(window.KeenSegment && window.KeenSegment.prototype.configure)
            };
            Keen.prototype.page = function(page) {
                var category = page.category();
                var name = page.fullName();
                var opts = this.options;
                if (opts.trackAllPages) {
                    this.track(page.track())
                }
                if (name && opts.trackNamedPages) {
                    this.track(page.track(name))
                }
                if (category && opts.trackCategorizedPages) {
                    this.track(page.track(category))
                }
            };
            Keen.prototype.identify = function(identify) {
                var traits = identify.traits();
                var id = identify.userId();
                var user = {};
                if (id) user.userId = id;
                if (traits) user.traits = traits;
                var props = {
                    user: user
                };
                this.addons(props, identify);
                this.client.setGlobalProperties(function() {
                    return clone(props)
                })
            };
            Keen.prototype.track = function(track) {
                var props = track.properties();
                this.addons(props, track);
                this.client.addEvent(track.event(), props)
            };
            Keen.prototype.addons = function(obj, msg) {
                var options = this.options;
                var addons = [];
                if (options.ipAddon) {
                    addons.push({
                        name: "keen:ip_to_geo",
                        input: {
                            ip: "ip_address"
                        },
                        output: "ip_geo_info"
                    });
                    obj.ip_address = "${keen.ip}"
                }
                if (options.uaAddon) {
                    addons.push({
                        name: "keen:ua_parser",
                        input: {
                            ua_string: "user_agent"
                        },
                        output: "parsed_user_agent"
                    });
                    obj.user_agent = "${keen.user_agent}"
                }
                if (options.urlAddon) {
                    addons.push({
                        name: "keen:url_parser",
                        input: {
                            url: "page_url"
                        },
                        output: "parsed_page_url"
                    });
                    obj.page_url = document.location.href
                }
                if (options.referrerAddon) {
                    addons.push({
                        name: "keen:referrer_parser",
                        input: {
                            referrer_url: "referrer_url",
                            page_url: "page_url"
                        },
                        output: "referrer_info"
                    });
                    obj.referrer_url = document.referrer;
                    obj.page_url = document.location.href
                }
                obj.keen = {
                    timestamp: msg.timestamp(),
                    addons: addons
                }
            }
        }, {
            "@ndhoule/clone": 5,
            "@segment/analytics.js-integration": 168
        }],
        168: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 169,
            "./statics": 170,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 172,
            dup: 35,
            "slug-component": 427
        }],
        169: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 171,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        170: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        171: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        172: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 173,
            _process: 412,
            dup: 39
        }],
        173: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        174: [function(require, module, exports) {
            "use strict";
            var each = require("component-each");
            var integration = require("@segment/analytics.js-integration");
            var is = require("is");
            var push = require("global-queue")("_kmq");
            var extend = require("@ndhoule/extend");
            var del = require("obj-case").del;
            var KISSmetrics = module.exports = integration("KISSmetrics").global("KM").global("_kmil").global("_kmq").option("apiKey", "").option("prefixProperties", true).option("trackCategorizedPages", true).option("trackNamedPages", true).tag("library", '<script src="//scripts.kissmetrics.com/{{ apiKey }}.2.js">');
            exports.isMobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone|iPod/i);
            KISSmetrics.prototype.initialize = function() {
                window._kmq = window._kmq || [];
                if (exports.isMobile) push("set", {
                    "Mobile Session": "Yes"
                });
                this.load("library", this.ready)
            };
            KISSmetrics.prototype.loaded = function() {
                return is.object(window.KM)
            };
            KISSmetrics.prototype.page = function(page) {
                if (!window.KM_SKIP_PAGE_VIEW) {
                    push("record", "Page View", {
                        "Viewed URL": page.url(),
                        Referrer: page.referrer() || "Direct"
                    })
                }
                this.trackPage(page)
            };
            KISSmetrics.prototype.trackPage = function(page) {
                var category = page.category();
                var name = page.fullName();
                var opts = this.options;
                var e;
                if (opts.trackCategorizedPages && category) {
                    e = page.category()
                }
                if (opts.trackNamedPages && name) {
                    e = page.name()
                }
                if (!e) {
                    return
                }
                var event = "Viewed " + e + " Page";
                var properties = prefix("Page", page.properties());
                push("record", event, properties)
            };
            KISSmetrics.prototype.identify = function(identify) {
                var traits = clean(identify.traits());
                var id = identify.userId();
                if (id) push("identify", id);
                if (traits) push("set", traits)
            };
            KISSmetrics.prototype.track = function(track) {
                var mapping = {
                    revenue: "Billing Amount"
                };
                var event = track.event();
                var properties = clean(track.properties(mapping));
                var revenue = track.revenue();
                if (revenue) {
                    properties.revenue = revenue
                }
                if (this.options.prefixProperties) properties = prefix(event, properties);
                push("record", event, properties)
            };
            KISSmetrics.prototype.alias = function(alias) {
                push("alias", alias.to(), alias.from())
            };
            KISSmetrics.prototype.group = function(group) {
                push("set", prefix("Group", group.traits()))
            };
            KISSmetrics.prototype.completedOrder = function(track) {
                var opts = this.options;
                var event = track.event();
                var products = track.products();
                var timestamp = toUnixTimestamp(track.timestamp() || new Date);
                var properties = track.properties();
                del(properties, "products");
                if (opts.prefixProperties) properties = prefix(event, properties);
                push("record", event, properties);
                window._kmq.push(function() {
                    each(products, function(product, i) {
                        var item = product;
                        if (opts) item = prefix(event, item);
                        item._t = timestamp + i;
                        item._d = 1;
                        window.KM.set(item)
                    })
                })
            };

            function prefix(event, properties) {
                var prefixed = {};
                each(properties, function(key, val) {
                    if (key === "Billing Amount") {
                        prefixed[key] = val
                    } else if (key === "revenue") {
                        prefixed[event + " - " + key] = val;
                        prefixed["Billing Amount"] = val
                    } else {
                        prefixed[event + " - " + key] = val
                    }
                });
                return prefixed
            }

            function toUnixTimestamp(date) {
                date = new Date(date);
                return Math.floor(date.getTime() / 1e3)
            }

            function clean(obj) {
                var ret = {};
                for (var k in obj) {
                    if (obj.hasOwnProperty(k)) {
                        var value = obj[k];
                        if (value === null || typeof value === "undefined") continue;
                        if (is.date(value)) {
                            ret[k] = toUnixTimestamp(value);
                            continue
                        }
                        if (is.bool(value)) {
                            ret[k] = value;
                            continue
                        }
                        if (is.number(value)) {
                            ret[k] = value;
                            continue
                        }
                        if (value.toString() !== "[object Object]") {
                            ret[k] = value.toString();
                            continue
                        }
                        var nestedObj = {};
                        nestedObj[k] = value;
                        var flattenedObj = flatten(nestedObj, {
                            safe: true
                        });
                        for (var key in flattenedObj) {
                            if (is.array(flattenedObj[key])) {
                                flattenedObj[key] = flattenedObj[key].toString()
                            }
                        }
                        ret = extend(ret, flattenedObj);
                        delete ret[k]
                    }
                }
                return ret
            }

            function flatten(target, opts) {
                opts = opts || {};
                var delimiter = opts.delimiter || ".";
                var maxDepth = opts.maxDepth;
                var currentDepth = 1;
                var output = {};

                function step(object, prev) {
                    for (var key in object) {
                        if (object.hasOwnProperty(key)) {
                            var value = object[key];
                            var isarray = opts.safe && is.array(value);
                            var type = Object.prototype.toString.call(value);
                            var isobject = type === "[object Object]" || type === "[object Array]";
                            var arr = [];
                            var newKey = prev ? prev + delimiter + key : key;
                            if (!opts.maxDepth) {
                                maxDepth = currentDepth + 1
                            }
                            for (var keys in value) {
                                if (value.hasOwnProperty(keys)) {
                                    arr.push(keys)
                                }
                            }
                            if (!isarray && isobject && arr.length && currentDepth < maxDepth) {
                                ++currentDepth;
                                return step(value, newKey)
                            }
                            output[newKey] = value
                        }
                    }
                }
                step(target);
                return output
            }
        }, {
            "@ndhoule/extend": 10,
            "@segment/analytics.js-integration": 175,
            "component-each": 371,
            "global-queue": 386,
            is: 392,
            "obj-case": 407
        }],
        175: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 176,
            "./statics": 177,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 179,
            dup: 35,
            "slug-component": 427
        }],
        176: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 178,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        177: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        178: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        179: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 180,
            _process: 412,
            dup: 39
        }],
        180: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        181: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var push = require("global-queue")("_learnq");
            var tick = require("next-tick");
            var Track = require("segmentio-facade").Track;
            var foldl = require("@ndhoule/foldl");
            var remove = require("obj-case").del;
            var extend = require("@ndhoule/extend");
            var Klaviyo = module.exports = integration("Klaviyo").assumesPageview().global("_learnq").option("apiKey", "").option("enforceEmail", false).tag('<script src="//a.klaviyo.com/media/js/analytics/analytics.js">');
            Klaviyo.prototype.initialize = function() {
                var self = this;
                push("account", this.options.apiKey);
                this.load(function() {
                    tick(self.ready)
                })
            };
            Klaviyo.prototype.loaded = function() {
                return !!(window._learnq && window._learnq.push !== Array.prototype.push)
            };
            Klaviyo.prototype.identify = function(identify) {
                if (!identify.userId() && !identify.email()) return;
                var traitAliases = {
                    email: "$email",
                    id: "$id",
                    firstName: "$first_name",
                    lastName: "$last_name",
                    phone: "$phone_number",
                    title: "$title"
                };
                var traits = identify.traits(traitAliases);
                if (this.options.enforceEmail) {
                    remove(traits, "id");
                    remove(traits, "$id")
                }
                if (this.options.enforceEmail && !traits.$email) return;
                push("identify", traits)
            };
            Klaviyo.prototype.group = function(group) {
                var props = group.properties();
                if (!props.name) return;
                push("identify", {
                    $organization: props.name
                })
            };
            Klaviyo.prototype.track = function(track) {
                push("track", track.event(), track.properties({
                    revenue: "$value"
                }))
            };
            Klaviyo.prototype.orderCompleted = function(track) {
                var products = formatProducts(track.products());
                var payload = {
                    $event_id: track.orderId(),
                    $value: track.revenue(),
                    Categories: products.categories,
                    ItemNames: products.names,
                    Items: products.items
                };
                var whitelist = ["$event_id", "$value", "orderId", "order_id", "categories", "itemNames", "items", "revenue", "total", "products"];
                var topLevelCustomProps = filter(track, whitelist);
                payload = extend(payload, topLevelCustomProps);
                push("track", track.event(), payload);
                var productProperties = formatItems(track);
                for (var x = 0; x < productProperties.length; x++) {
                    push("track", "Ordered Product", productProperties[x])
                }
            };

            function filter(facade, list) {
                var ret = facade.properties();
                for (var x = 0; x < list.length; x++) {
                    remove(ret, list[x])
                }
                return ret
            }

            function formatItems(track) {
                return foldl(function(payloads, props) {
                    var product = new Track({
                        properties: props
                    });
                    var itemWhitelist = ["$event_id", "$value", "name", "product categories", "category", "id", "productId", "product_id", "sku", "quantity", "price", "productUrl", "imageUrl"];
                    var itemCustomProps = filter(product, itemWhitelist);
                    var item = reject({
                        $value: product.price(),
                        Name: product.name(),
                        Quantity: product.quantity(),
                        ProductCategories: [product.category()],
                        ProductURL: product.proxy("properties.productUrl"),
                        ImageURL: product.proxy("properties.imageUrl"),
                        SKU: product.sku()
                    });
                    var identifier = product.productId() || product.id() || product.sku();
                    item.$event_id = track.orderId() + "_" + identifier;
                    item = extend(item, itemCustomProps);
                    payloads.push(item);
                    return payloads
                }, [], track.products())
            }

            function formatProducts(products) {
                return foldl(function(payloads, props) {
                    var product = new Track({
                        properties: props
                    });
                    var whitelist = ["id", "product_id", "productId", "sku", "name", "quantity", "itemPrice", "price", "rowTotal", "categories", "category", "productUrl", "imageUrl"];
                    var customProps = filter(product, whitelist);
                    var item = reject({
                        id: product.productId() || product.id(),
                        SKU: product.sku(),
                        Name: product.name(),
                        Quantity: product.quantity(),
                        ItemPrice: product.price(),
                        RowTotal: product.price(),
                        Categories: [product.category()],
                        ProductURL: product.proxy("properties.productUrl"),
                        ImageURL: product.proxy("properties.imageUrl")
                    });
                    item = extend(item, customProps);
                    payloads.items.push(item);
                    payloads.categories.push(product.category());
                    payloads.names.push(product.name());
                    return payloads
                }, {
                    categories: [],
                    names: [],
                    items: []
                }, products)
            }

            function reject(obj) {
                return foldl(function(result, val, key) {
                    if (val !== undefined) {
                        result[key] = val
                    }
                    return result
                }, {}, obj)
            }
        }, {
            "@ndhoule/extend": 10,
            "@ndhoule/foldl": 11,
            "@segment/analytics.js-integration": 338,
            "global-queue": 386,
            "next-tick": 406,
            "obj-case": 407,
            "segmentio-facade": 421
        }],
        182: [function(require, module, exports) {
            "use strict";
            var Identify = require("segmentio-facade").Identify;
            var clone = require("component-clone");
            var each = require("component-each");
            var integration = require("@segment/analytics.js-integration");
            var tick = require("next-tick");
            var when = require("do-when");
            var LiveChat = module.exports = integration("LiveChat").assumesPageview().global("LC_API").global("LC_Invite").global("__lc").global("__lc_inited").global("__lc_lang").option("group", 0).option("license", "").option("listen", false).tag('<script src="//cdn.livechatinc.com/tracking.js">');
            var integrationContext = {
                name: "livechat",
                version: "1.0.0"
            };
            LiveChat.prototype.initialize = function() {
                var self = this;
                var user = this.analytics.user();
                var identify = new Identify({
                    userId: user.id(),
                    traits: user.traits()
                });
                window.__lc = clone(this.options);
                window.__lc.visitor = {
                    name: identify.name(),
                    email: identify.email()
                };
                delete window.__lc.listen;
                this.load(function() {
                    when(function() {
                        return self.loaded()
                    }, function() {
                        if (self.options.listen) self.attachListeners();
                        tick(self.ready)
                    })
                })
            };
            LiveChat.prototype.loaded = function() {
                return !!(window.LC_API && window.LC_Invite)
            };
            LiveChat.prototype.identify = function(identify) {
                var traits = identify.traits({
                    userId: "User ID"
                });
                window.LC_API.set_custom_variables(convert(traits))
            };
            LiveChat.prototype.attachListeners = function() {
                var self = this;
                window.LC_API = window.LC_API || {};
                window.LC_API.on_chat_started = function(data) {
                    self.analytics.track("Live Chat Conversation Started", {
                        agentName: data.agent_name
                    }, {
                        context: {
                            integration: integrationContext
                        }
                    })
                };
                window.LC_API.on_message = function(data) {
                    if (data.user_type === "visitor") {
                        self.analytics.track("Live Chat Message Sent", {}, {
                            context: {
                                integration: integrationContext
                            }
                        })
                    } else {
                        self.analytics.track("Live Chat Message Received", {
                            agentName: data.agent_name,
                            agentUsername: data.agent_login
                        }, {
                            context: {
                                integration: integrationContext
                            }
                        })
                    }
                };
                window.LC_API.on_chat_ended = function() {
                    self.analytics.track("Live Chat Conversation Ended")
                }
            };

            function convert(traits) {
                var arr = [];
                each(traits, function(key, value) {
                    arr.push({
                        name: key,
                        value: value
                    })
                });
                return arr
            }
        }, {
            "@segment/analytics.js-integration": 183,
            "component-clone": 366,
            "component-each": 371,
            "do-when": 383,
            "next-tick": 406,
            "segmentio-facade": 421
        }],
        183: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 184,
            "./statics": 185,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 187,
            dup: 35,
            "slug-component": 427
        }],
        184: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 186,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        185: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        186: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        187: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 188,
            _process: 412,
            dup: 39
        }],
        188: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        189: [function(require, module, exports) {
            "use strict";
            var Identify = require("segmentio-facade").Identify;
            var integration = require("@segment/analytics.js-integration");
            var useHttps = require("use-https");
            var LuckyOrange = module.exports = integration("Lucky Orange").assumesPageview().global("_loq").global("__lo_cs_added").global("__wtw_lucky_site_id").global("__wtw_lucky_is_segment_io").global("__wtw_custom_user_data").option("siteId", null).tag("http", '<script src="http://www.luckyorange.com/w.js?{{ cacheBuster }}">').tag("https", '<script src="https://ssl.luckyorange.com/w.js?{{ cacheBuster }}">');
            LuckyOrange.prototype.initialize = function() {
                if (!window._loq) window._loq = [];
                window.__wtw_lucky_site_id = this.options.siteId;
                var user = this.analytics.user();
                this.identify(new Identify({
                    traits: user.traits(),
                    userId: user.id()
                }));
                var cacheBuster = Math.floor((new Date).getTime() / 6e4);
                var tagName = useHttps() ? "https" : "http";
                this.load(tagName, {
                    cacheBuster: cacheBuster
                }, this.ready)
            };
            LuckyOrange.prototype.loaded = function() {
                return !!window.__lo_cs_added
            };
            LuckyOrange.prototype.identify = function(identify) {
                var traits = identify.traits();
                var email = identify.email();
                if (email) traits.email = email;
                var name = identify.name();
                if (name) traits.name = name;
                window.__wtw_custom_user_data = traits
            }
        }, {
            "@segment/analytics.js-integration": 338,
            "segmentio-facade": 421,
            "use-https": 441
        }],
        190: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var umd = typeof window.define === "function" && window.define.amd;
            var MadKudu = module.exports = integration("Madkudu").global("madkudu").option("apiKey", "").readyOnLoad().tag('<script src="//cdn.madkudu.com/madkudu.js/v1/{{ apiKey }}/madkudu.min.js">');
            MadKudu.prototype.initialize = function() {
                ! function() {
                    var madkudu = window.madkudu = window.madkudu || [];
                    if (!madkudu.initialize)
                        if (madkudu.invoked) window.console && console.error && console.error("MadKudu snippet included twice.");
                        else {
                            madkudu.invoked = !0;
                            madkudu.methods = ["identify", "reset", "group", "ready", "page", "track", "once", "on"];
                            madkudu.factory = function(t) {
                                return function() {
                                    var e = Array.prototype.slice.call(arguments);
                                    e.unshift(t);
                                    madkudu.push(e);
                                    return madkudu
                                }
                            };
                            for (var t = 0; t < madkudu.methods.length; t++) {
                                var e = madkudu.methods[t];
                                madkudu[e] = madkudu.factory(e)
                            }
                            madkudu.SNIPPET_VERSION = "0.3.0"
                        }
                }();
                var self = this;
                if (umd) {
                    window.require(["//cdn.madkudu.com/madkudu.js/v1/" + self.options.apiKey + "/madkudu.min.js"], function(madkudu) {
                        window.madkudu = madkudu;
                        self.ready()
                    });
                    return
                }
                this.load({
                    apiKey: this.options.apiKey
                }, function() {
                    self.ready()
                })
            };
            MadKudu.prototype.loaded = function() {
                return !!(window.madkudu && window.madkudu.options)
            };
            MadKudu.prototype.page = function() {
                window.madkudu.page()
            };
            MadKudu.prototype.identify = function(identify) {
                var id = identify.userId();
                var traits = identify.traits();
                if (id) {
                    window.madkudu.identify(id, traits)
                } else {
                    window.madkudu.identify(traits)
                }
            }
        }, {
            "@segment/analytics.js-integration": 191
        }],
        191: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 192,
            "./statics": 193,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 195,
            dup: 35,
            "slug-component": 427
        }],
        192: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 194,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        193: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        194: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        195: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 196,
            _process: 412,
            dup: 39
        }],
        196: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        197: [function(require, module, exports) {
            "use strict";
            var alias = require("@segment/alias");
            var dates = require("@segment/convert-dates");
            var del = require("obj-case").del;
            var includes = require("@ndhoule/includes");
            var integration = require("@segment/analytics.js-integration");
            var iso = require("@segment/to-iso-string");
            var pick = require("@ndhoule/pick");
            var is = require("is");
            var indexOf = require("component-indexof");
            var Mixpanel = module.exports = integration("Mixpanel").global("mixpanel").option("eventIncrements", []).option("propIncrements", []).option("peopleProperties", []).option("superProperties", []).option("cookieName", "").option("crossSubdomainCookie", false).option("secureCookie", false).option("persistence", "cookie").option("nameTag", true).option("pageview", false).option("people", false).option("token", "").option("setAllTraitsByDefault", true).option("consolidatedPageCalls", true).option("trackAllPages", false).option("trackNamedPages", false).option("trackCategorizedPages", false).option("sourceName", "").tag('<script src="//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js">');
            var optionsAliases = {
                cookieName: "cookie_name",
                crossSubdomainCookie: "cross_subdomain_cookie",
                secureCookie: "secure_cookie"
            };
            Mixpanel.prototype.initialize = function() {
                (function(e, a) {
                    if (!a.__SV) {
                        var b = window;
                        try {
                            var c, l, i, j = b.location,
                                g = j.hash;
                            c = function(a, b) {
                                return (l = a.match(RegExp(b + "=([^&]*)"))) ? l[1] : null
                            };
                            g && c(g, "state") && (i = JSON.parse(decodeURIComponent(c(g, "state"))), "mpeditor" === i.action && (b.sessionStorage.setItem("_mpcehash", g), history.replaceState(i.desiredHash || "", e.title, j.pathname + j.search)))
                        } catch (m) {}
                        var k, h;
                        window.mixpanel = a;
                        a._i = [];
                        a.init = function(b, c, f) {
                            function e(b, a) {
                                var c = a.split(".");
                                2 == c.length && (b = b[c[0]], a = c[1]);
                                b[a] = function() {
                                    b.push([a].concat(Array.prototype.slice.call(arguments, 0)))
                                }
                            }
                            var d = a;
                            "undefined" !== typeof f ? d = a[f] = [] : f = "mixpanel";
                            d.people = d.people || [];
                            d.toString = function(b) {
                                var a = "mixpanel";
                                "mixpanel" !== f && (a += "." + f);
                                b || (a += " (stub)");
                                return a
                            };
                            d.people.toString = function() {
                                return d.toString(1) + ".people (stub)"
                            };
                            k = "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
                            for (h = 0; h < k.length; h++) e(d, k[h]);
                            a._i.push([b, c, f])
                        };
                        a.__SV = 1.2
                    }
                })(document, window.mixpanel || []);
                this.options.eventIncrements = lowercase(this.options.eventIncrements);
                this.options.propIncrements = lowercase(this.options.propIncrements);
                var options = alias(this.options, optionsAliases);
                options.loaded = function(mixpanel) {
                    mixpanel.register({
                        mp_lib: "Segment: web"
                    })
                };
                window.mixpanel.init(options.token, options);
                this.load(this.ready)
            };
            Mixpanel.prototype.loaded = function() {
                return !!(window.mixpanel && window.mixpanel.config)
            };
            Mixpanel.prototype.page = function(page) {
                var category = page.category();
                var name = page.name();
                var opts = this.options;
                if (opts.consolidatedPageCalls) {
                    this.track(page.track());
                    return
                }
                if (opts.trackAllPages) {
                    this.track(page.track());
                    return
                }
                if (opts.trackCategorizedPages && category) {
                    if (name) {
                        this.track(page.track(page.fullName()));
                        return
                    }
                    this.track(page.track(category));
                    return
                }
                if (name && opts.trackNamedPages) {
                    this.track(page.track(name))
                }
            };
            var traitAliases = {
                created: "$created",
                email: "$email",
                firstName: "$first_name",
                lastName: "$last_name",
                lastSeen: "$last_seen",
                name: "$name",
                username: "$username",
                phone: "$phone"
            };
            Mixpanel.prototype.identify = function(identify) {
                var username = identify.username();
                var email = identify.email();
                var id = identify.userId();
                var setAllTraitsByDefault = this.options.setAllTraitsByDefault;
                var people = this.options.people;
                var peopleProperties = extendTraits(this.options.peopleProperties);
                var superProperties = this.options.superProperties;
                if (id) window.mixpanel.identify(id);
                var nametag = email || username || id;
                if (nametag) window.mixpanel.name_tag(nametag);
                var traits = identify.traits(traitAliases);
                if (traits.$created) del(traits, "createdAt");
                traits = dates(traits, iso);
                var traitsToUnion = {};
                var traitsToSet = {};
                for (var key in traits) {
                    if (!traits.hasOwnProperty(key)) continue;
                    var trait = traits[key];
                    if (Array.isArray(trait) && trait.length > 0) {
                        traitsToUnion[key] = trait;
                        var existingTrait = window.mixpanel.get_property(key);
                        if (existingTrait && Array.isArray(existingTrait)) {
                            traits[key] = unionArrays(existingTrait, trait)
                        }
                    } else {
                        traitsToSet[key] = trait
                    }
                }
                if (setAllTraitsByDefault) {
                    window.mixpanel.register(traits);
                    if (people) {
                        window.mixpanel.people.set(traitsToSet);
                        window.mixpanel.people.union(traitsToUnion)
                    }
                } else {
                    var mappedSuperProps = mapTraits(superProperties);
                    var superProps = pick(mappedSuperProps || [], traits);
                    if (!is.empty(superProps)) window.mixpanel.register(superProps);
                    if (people) {
                        var mappedPeopleProps = mapTraits(peopleProperties);
                        var peoplePropsToSet = pick(mappedPeopleProps || [], traitsToSet);
                        var peoplePropsToUnion = pick(mappedPeopleProps || [], traitsToUnion);
                        if (!is.empty(peoplePropsToSet)) window.mixpanel.people.set(peoplePropsToSet);
                        if (!is.empty(peoplePropsToUnion)) window.mixpanel.people.union(peoplePropsToUnion)
                    }
                }
            };
            Mixpanel.prototype.track = function(track) {
                var eventIncrements = this.options.eventIncrements || this.options.increments;
                var propIncrements = this.options.propIncrements;
                var eventLowercase = track.event().toLowerCase();
                var people = this.options.people;
                var props = track.properties();
                var revenue = track.revenue();
                var superProps = pick(this.options.superProperties, props);
                var sourceName = this.options.sourceName;
                if (sourceName) props.segment_source_name = sourceName;
                delete props.distinct_id;
                delete props.ip;
                delete props.mp_name_tag;
                delete props.mp_note;
                delete props.token;
                props = dates(props, iso);
                invertObjectArrays(props);
                if (people) {
                    if (includes(eventLowercase, eventIncrements)) {
                        window.mixpanel.people.increment(track.event());
                        window.mixpanel.people.set("Last " + track.event(), new Date)
                    }
                    for (var key in props) {
                        if (!Object.prototype.hasOwnProperty.call(props, key)) {
                            continue
                        }
                        var prop = props[key];
                        if (includes(key.toLowerCase(), propIncrements)) {
                            window.mixpanel.people.increment(key, prop)
                        }
                    }
                    if (revenue) {
                        window.mixpanel.people.track_charge(revenue)
                    }
                }
                var query;
                if (props.link_query) {
                    query = props.link_query;
                    delete props.link_query;
                    window.mixpanel.track_links(query, track.event(), props)
                } else if (props.form_query) {
                    query = props.form_query;
                    delete props.form_query;
                    window.mixpanel.track_forms(query, track.event(), props)
                } else {
                    window.mixpanel.track(track.event(), props)
                }
                if (!is.empty(superProps)) {
                    window.mixpanel.register(superProps)
                }
            };
            Mixpanel.prototype.alias = function(alias) {
                var mp = window.mixpanel;
                var to = alias.to();
                if (mp.get_distinct_id && mp.get_distinct_id() === to) return;
                if (mp.get_property && mp.get_property("$people_distinct_id") === to) return;
                mp.alias(to, alias.from())
            };

            function lowercase(arr) {
                var ret = new Array(arr.length);
                for (var i = 0; i < arr.length; ++i) {
                    ret[i] = String(arr[i]).toLowerCase()
                }
                return ret
            }

            function mapTraits(arr) {
                var ret = new Array(arr.length);
                for (var i = 0; i < arr.length; ++i) {
                    if (traitAliases.hasOwnProperty(arr[i])) {
                        ret.push(traitAliases[arr[i]])
                    } else {
                        ret.push(arr[i])
                    }
                }
                return ret
            }

            function extendTraits(arr) {
                var keys = [];
                for (var key in traitAliases) {
                    if (traitAliases.hasOwnProperty(key)) {
                        keys.push(key)
                    }
                }
                for (var i = 0; i < keys.length; ++i) {
                    if (indexOf(arr, keys[i]) < 0) {
                        arr.push(keys[i])
                    }
                }
                return arr
            }

            function invertObjectArrays(props) {
                for (var propName in props) {
                    var propValue = props[propName];
                    if (!props.hasOwnProperty(propName) || !Array.isArray(propValue)) {
                        continue
                    }
                    var invertedArrays = invertObjectArray(propName, propValue);
                    if (Object.keys(invertedArrays).length !== 0) {
                        mergeArraysIntoObj(props, invertedArrays);
                        delete props[propName]
                    }
                }
            }

            function invertObjectArray(propName, arr) {
                var invertedArrays = {};
                for (var i = 0; i < arr.length; i++) {
                    var elem = arr[i];
                    if (typeof elem !== "object") {
                        return {}
                    }
                    for (var key in elem) {
                        if (!elem.hasOwnProperty(key)) {
                            continue
                        }
                        var attrKey = propName + "_" + key + "s";
                        if (attrKey in invertedArrays) {
                            invertedArrays[attrKey].push(elem[key])
                        } else {
                            invertedArrays[attrKey] = [elem[key]]
                        }
                    }
                }
                return invertedArrays
            }

            function mergeArraysIntoObj(destination, source) {
                for (var arrayName in source) {
                    if (source.hasOwnProperty(arrayName)) {
                        var arr = source[arrayName];
                        destination[arrayName] = arrayName in destination ? destination[arrayName].concat(arr) : arr
                    }
                }
            }

            function unionArrays(x, y) {
                var obj = {};
                var i;
                for (i = 0; i < x.length; i++) {
                    obj[x[i]] = x[i]
                }
                for (i = 0; i < y.length; i++) {
                    obj[y[i]] = y[i]
                }
                return Object.keys(obj)
            }
        }, {
            "@ndhoule/includes": 12,
            "@ndhoule/pick": 15,
            "@segment/alias": 19,
            "@segment/analytics.js-integration": 198,
            "@segment/convert-dates": 350,
            "@segment/to-iso-string": 359,
            "component-indexof": 375,
            is: 392,
            "obj-case": 407
        }],
        198: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 199,
            "./statics": 200,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 202,
            dup: 35,
            "slug-component": 427
        }],
        199: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 201,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        200: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        201: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        202: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 203,
            _process: 412,
            dup: 39
        }],
        203: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        204: [function(require, module, exports) {
            "use strict";
            var each = require("component-each");
            var integration = require("@segment/analytics.js-integration");
            var push = require("global-queue")("_mfq");
            var Mouseflow = module.exports = integration("Mouseflow").assumesPageview().global("_mfq").global("mouseflow").global("mouseflowHtmlDelay").option("apiKey", "").option("mouseflowHtmlDelay", 0).tag('<script src="//cdn.mouseflow.com/projects/{{ apiKey }}.js">');
            Mouseflow.prototype.initialize = function() {
                window.mouseflowHtmlDelay = this.options.mouseflowHtmlDelay;
                this.load(this.ready)
            };
            Mouseflow.prototype.loaded = function() {
                return !!window.mouseflow
            };
            Mouseflow.prototype.page = function(page) {
                push("newPageView", page.path())
            };
            Mouseflow.prototype.identify = function(identify) {
                set(identify.traits())
            };
            Mouseflow.prototype.track = function(track) {
                var props = track.properties();
                props.event = track.event();
                set(props)
            };

            function set(obj) {
                each(obj, function(key, value) {
                    push("setVariable", key, value)
                })
            }
        }, {
            "@segment/analytics.js-integration": 338,
            "component-each": 371,
            "global-queue": 386
        }],
        205: [function(require, module, exports) {
            "use strict";
            var each = require("component-each");
            var integration = require("@segment/analytics.js-integration");
            var is = require("is");
            var useHttps = require("use-https");
            var MouseStats = module.exports = integration("MouseStats").assumesPageview().global("msaa").global("MouseStatsVisitorPlaybacks").option("accountNumber", "").tag("http", '<script src="http://www2.mousestats.com/js/{{ path }}.js?{{ cacheBuster }}">').tag("https", '<script src="https://ssl.mousestats.com/js/{{ path }}.js?{{ cacheBuster }}">');
            MouseStats.prototype.initialize = function() {
                var accountNumber = this.options.accountNumber;
                var path = accountNumber.slice(0, 1) + "/" + accountNumber.slice(1, 2) + "/" + accountNumber;
                var cacheBuster = Math.floor((new Date).getTime() / 6e4);
                var tagName = useHttps() ? "https" : "http";
                this.load(tagName, {
                    path: path,
                    cacheBuster: cacheBuster
                }, this.ready)
            };
            MouseStats.prototype.loaded = function() {
                return is.array(window.MouseStatsVisitorPlaybacks)
            };
            MouseStats.prototype.identify = function(identify) {
                each(identify.traits(), function(key, value) {
                    window.MouseStatsVisitorPlaybacks.customVariable(key, value)
                })
            }
        }, {
            "@segment/analytics.js-integration": 206,
            "component-each": 371,
            is: 392,
            "use-https": 441
        }],
        206: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 207,
            "./statics": 208,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 210,
            dup: 35,
            "slug-component": 427
        }],
        207: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 209,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        208: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        209: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        210: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 211,
            _process: 412,
            dup: 39
        }],
        211: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        212: [function(require, module, exports) {
            "use strict";
            var https = require("use-https");
            var integration = require("@segment/analytics.js-integration");
            var tick = require("next-tick");
            var Olark = module.exports = integration("Olark").assumesPageview().global("olark").option("groupId", "").option("identify", true).option("listen", false).option("page", true).option("siteId", "").option("track", false).option("inline", false);
            var integrationContext = {
                name: "olark",
                version: "1.0.0"
            };
            Olark.prototype.initialize = function() {
                var self = this;
                this.load(function() {
                    tick(self.ready)
                });
                var groupId = this.options.groupId;
                if (groupId) api("chat.setOperatorGroup", {
                    group: groupId
                });
                api("box.onExpand", function() {
                    self._open = true
                });
                api("box.onShrink", function() {
                    self._open = false
                });
                if (this.options.listen) this.attachListeners()
            };
            Olark.prototype.load = function(callback) {
                window.olark || function(c) {
                    var f = window,
                        d = document,
                        l = https() ? "https:" : "http:",
                        z = c.name,
                        r = "load";
                    var nt = function() {
                        f[z] = function() {
                            (a.s = a.s || []).push(arguments)
                        };
                        var a = f[z]._ = {},
                            q = c.methods.length;
                        while (q--) {
                            (function(n) {
                                f[z][n] = function() {
                                    f[z]("call", n, arguments)
                                }
                            })(c.methods[q])
                        }
                        a.l = c.loader;
                        a.i = nt;
                        a.p = {
                            0: +new Date
                        };
                        a.P = function(u) {
                            a.p[u] = new Date - a.p[0]
                        };

                        function s() {
                            a.P(r);
                            f[z](r)
                        }
                        f.addEventListener ? f.addEventListener(r, s, false) : f.attachEvent("on" + r, s);
                        var ld = function() {
                            function p(hd) {
                                hd = "head";
                                return ["<", hd, "></", hd, "><", i, " onl" + 'oad="var d=', g, ";d.getElementsByTagName('head')[0].", j, "(d.", h, "('script')).", k, "='", l, "//", a.l, "'", '"', "></", i, ">"].join("")
                            }
                            var i = "body",
                                m = d[i];
                            if (!m) {
                                return setTimeout(ld, 100)
                            }
                            a.P(1);
                            var j = "appendChild",
                                h = "createElement",
                                k = "src",
                                n = d[h]("div"),
                                v = n[j](d[h](z)),
                                b = d[h]("iframe"),
                                g = "document",
                                e = "domain",
                                o;
                            n.style.display = "none";
                            m.insertBefore(n, m.firstChild).id = z;
                            b.frameBorder = "0";
                            b.id = z + "-loader";
                            if (/MSIE[ ]+6/.test(navigator.userAgent)) {
                                b.src = "javascript:false"
                            }
                            b.allowTransparency = "true";
                            v[j](b);
                            try {
                                b.contentWindow[g].open()
                            } catch (w) {
                                c[e] = d[e];
                                o = "javascript:var d=" + g + ".open();d.domain='" + d.domain + "';";
                                b[k] = o + "void(0);"
                            }
                            try {
                                var t = b.contentWindow[g];
                                t.write(p());
                                t.close()
                            } catch (x) {
                                b[k] = o + 'd.write("' + p().replace(/"/g, String.fromCharCode(92) + '"') + '");d.close();'
                            }
                            a.P(2)
                        };
                        ld()
                    };
                    nt()
                }({
                    loader: "static.olark.com/jsclient/loader0.js",
                    name: "olark",
                    methods: ["configure", "extend", "declare", "identify"]
                });
                if (this.options.inline) configure("box.inline", true);
                window.olark.identify(this.options.siteId);
                callback()
            };
            Olark.prototype.loaded = function() {
                return !!window.olark
            };
            Olark.prototype.page = function(page) {
                if (!this.options.page) return;
                var props = page.properties();
                var name = page.fullName();
                if (!name && !props.url) return;
                name = name ? name + " page" : props.url;
                this.notify("looking at " + name)
            };
            Olark.prototype.identify = function(identify) {
                if (!this.options.identify) return;
                var username = identify.username();
                var traits = identify.traits();
                var id = identify.userId();
                var email = identify.email();
                var phone = identify.phone();
                var name = identify.name() || identify.firstName();
                if (traits) api("visitor.updateCustomFields", traits);
                if (email) api("visitor.updateEmailAddress", {
                    emailAddress: email
                });
                if (phone) api("visitor.updatePhoneNumber", {
                    phoneNumber: phone
                });
                if (name) api("visitor.updateFullName", {
                    fullName: name
                });
                var nickname = name || email || username || id;
                if (name && email) nickname += " (" + email + ")";
                if (nickname) api("chat.updateVisitorNickname", {
                    snippet: nickname
                })
            };
            Olark.prototype.track = function(track) {
                if (!this.options.track) return;
                this.notify('visitor triggered "' + track.event() + '"')
            };
            Olark.prototype.attachListeners = function() {
                var self = this;
                api("chat.onBeginConversation", function() {
                    self.analytics.track("Live Chat Conversation Started", {}, {
                        context: {
                            integration: integrationContext
                        },
                        integrations: {
                            Olark: false
                        }
                    })
                });
                api("chat.onMessageToOperator", function() {
                    self.analytics.track("Live Chat Message Sent", {}, {
                        context: {
                            integration: integrationContext
                        },
                        integrations: {
                            Olark: false
                        }
                    })
                });
                api("chat.onMessageToVisitor", function() {
                    self.analytics.track("Live Chat Message Received", {}, {
                        context: {
                            integration: integrationContext
                        },
                        integrations: {
                            Olark: false
                        }
                    })
                })
            };
            Olark.prototype.notify = function(message) {
                if (!this._open) return;
                message = message.toLowerCase();
                api("visitor.getDetails", function(data) {
                    if (!data || !data.isConversing) return;
                    api("chat.sendNotificationToOperator", {
                        body: message
                    })
                })
            };

            function api(action, value) {
                window.olark("api." + action, value)
            }

            function configure(action, value) {
                window.olark.configure(action, value)
            }
        }, {
            "@segment/analytics.js-integration": 213,
            "next-tick": 406,
            "use-https": 441
        }],
        213: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 214,
            "./statics": 215,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 217,
            dup: 35,
            "slug-component": 427
        }],
        214: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 216,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        215: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        216: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        217: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 218,
            _process: 412,
            dup: 39
        }],
        218: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        219: [function(require, module, exports) {
            "use strict";
            var keys = require("@ndhoule/keys");
            var values = require("@ndhoule/values");
            var foldl = require("@ndhoule/foldl");
            var each = require("@ndhoule/each");
            var integration = require("@segment/analytics.js-integration");
            var push = require("global-queue")("optimizely", {
                wrap: false
            });
            var tick = require("next-tick");
            var Optimizely = module.exports = integration("Optimizely").option("trackCategorizedPages", true).option("trackNamedPages", true).option("variations", false).option("listen", true).option("nonInteraction", false).option("sendRevenueOnlyForOrderCompleted", true);
            var optimizelyContext = {
                name: "optimizely",
                version: "2.0.0"
            };
            Optimizely.prototype.initialize = function() {
                var self = this;
                push({
                    type: "integration",
                    OAuthClientId: "5360906403"
                });
                tick(function() {
                    Optimizely.initOptimizelyIntegration({
                        referrerOverride: self.setEffectiveReferrer.bind(self),
                        sendExperimentData: self.sendClassicDataToSegment.bind(self),
                        sendCampaignData: self.sendNewDataToSegment.bind(self)
                    })
                });
                this.ready()
            };
            Optimizely.prototype.track = function(track) {
                var opts = this.options;
                var eventProperties = track.properties();
                if (eventProperties.revenue && opts.sendRevenueOnlyForOrderCompleted) {
                    if (track.event() === "Order Completed") {
                        eventProperties.revenue = Math.round(eventProperties.revenue * 100)
                    } else if (track.event() !== "Order Completed") {
                        delete eventProperties.revenue
                    }
                } else if (opts.sendRevenueOnlyForOrderCompleted === false && eventProperties.revenue) {
                    eventProperties.revenue = Math.round(eventProperties.revenue * 100)
                }
                var eventName = track.event().replace(/:/g, "_");
                var payload = {
                    type: "event",
                    eventName: eventName,
                    tags: eventProperties
                };
                push(payload);
                var optimizelyClientInstance = window.optimizelyClientInstance;
                if (optimizelyClientInstance && optimizelyClientInstance.track) {
                    var optimizelyOptions = track.options("Optimizely");
                    var userId = optimizelyOptions.userId || track.userId() || this.analytics.user().id();
                    var attributes = optimizelyOptions.attributes || track.traits() || this.analytics.user().traits();
                    if (userId) {
                        optimizelyClientInstance.track(eventName, userId, attributes, payload.tags)
                    }
                }
            };
            Optimizely.prototype.page = function(page) {
                var category = page.category();
                var name = page.fullName();
                var opts = this.options;
                if (category && opts.trackCategorizedPages) {
                    this.track(page.track(category))
                }
                if (name && opts.trackNamedPages) {
                    this.track(page.track(name))
                }
            };
            Optimizely.prototype.sendClassicDataToSegment = function(experimentState) {
                var experiment = experimentState.experiment;
                var variations = experimentState.variations;
                var sections = experimentState.sections;
                var context = {
                    integration: optimizelyContext
                };
                var variationsMap = foldl(function(results, variation) {
                    results[variation.id] = variation.name;
                    return results
                }, {}, variations);
                var variationIds = keys(variationsMap).sort();
                var variationNames = values(variationsMap).sort();
                if (this.options.listen) {
                    var props = {
                        experimentId: experiment.id,
                        experimentName: experiment.name,
                        variationId: variationIds.join(),
                        variationName: variationNames.join(", ")
                    };
                    if (experiment.referrer) {
                        props.referrer = experiment.referrer;
                        context.page = {
                            referrer: experiment.referrer
                        }
                    }
                    if (sections) {
                        var activeSections = {};
                        var variationIdsToSectionsMap = foldl(function(results, section, sectionId) {
                            each(function(variationId) {
                                results[variationId] = {
                                    id: sectionId,
                                    name: section.name
                                }
                            }, section.variation_ids);
                            return results
                        }, {}, sections);
                        for (var j = 0; j < variationIds.length; j++) {
                            var activeVariation = variationIds[j];
                            var activeSection = variationIdsToSectionsMap[activeVariation];
                            if (activeSection) activeSections[activeSection.id] = activeSection.name
                        }
                        props.sectionId = keys(activeSections).sort().join();
                        props.sectionName = values(activeSections).sort().join(", ")
                    }
                    if (this.options.nonInteraction) props.nonInteraction = 1;
                    this.analytics.track("Experiment Viewed", props, context)
                }
                if (this.options.variations) {
                    var traits = {};
                    traits["Experiment: " + experiment.name] = variationNames.join(", ");
                    this.analytics.identify(traits)
                }
            };
            Optimizely.prototype.sendNewDataToSegment = function(campaignState) {
                var experiment = campaignState.experiment;
                var variation = campaignState.variation;
                var context = {
                    integration: optimizelyContext
                };
                var audiencesMap = foldl(function(results, audience) {
                    results[audience.id] = audience.name;
                    return results
                }, {}, campaignState.audiences);
                var audienceIds = keys(audiencesMap).sort().join();
                var audienceNames = values(audiencesMap).sort().join(", ");
                if (this.options.listen) {
                    var props = {
                        campaignName: campaignState.campaignName,
                        campaignId: campaignState.id,
                        experimentId: experiment.id,
                        experimentName: experiment.name,
                        variationName: variation.name,
                        variationId: variation.id,
                        audienceId: audienceIds,
                        audienceName: audienceNames,
                        isInCampaignHoldback: campaignState.isInCampaignHoldback
                    };
                    if (experiment.referrer) {
                        props.referrer = experiment.referrer;
                        context.page = {
                            referrer: experiment.referrer
                        }
                    }
                    if (this.options.nonInteraction) props.nonInteraction = 1;
                    this.analytics.track("Experiment Viewed", props, context)
                }
                if (this.options.variations) {
                    var traits = {};
                    traits["Experiment: " + experiment.name] = variation.name;
                    this.analytics.identify(traits)
                }
            };
            Optimizely.prototype.setEffectiveReferrer = function(referrer) {
                if (referrer) return window.optimizelyEffectiveReferrer = referrer
            };
            Optimizely.initOptimizelyIntegration = function(handlers) {
                var initClassicOptimizelyIntegration = function(referrerOverride, sendExperimentData) {
                    var data = window.optimizely && window.optimizely.data;
                    var state = data && data.state;
                    if (state) {
                        var activeExperiments = state.activeExperiments;
                        if (state.redirectExperiment) {
                            var redirectExperimentId = state.redirectExperiment.experimentId;
                            var index = -1;
                            for (var i = 0; i < state.activeExperiments.length; i++) {
                                if (state.activeExperiments[i] === redirectExperimentId) {
                                    index = i;
                                    break
                                }
                            }
                            if (index === -1) {
                                activeExperiments.push(redirectExperimentId)
                            }
                            referrerOverride(state.redirectExperiment.referrer)
                        }
                        for (var k = 0; k < activeExperiments.length; k++) {
                            var currentExperimentId = activeExperiments[k];
                            var activeExperimentState = {
                                experiment: {
                                    id: currentExperimentId,
                                    name: data.experiments[currentExperimentId].name
                                },
                                variations: [],
                                sections: data.sections
                            };
                            if (state.redirectExperiment && currentExperimentId === redirectExperimentId && state.redirectExperiment.referrer) {
                                activeExperimentState.experiment.referrer = state.redirectExperiment.referrer
                            }
                            var variationIds = state.variationIdsMap[activeExperimentState.experiment.id];
                            for (var j = 0; j < variationIds.length; j++) {
                                var id = variationIds[j];
                                var name = data.variations[id].name;
                                activeExperimentState.variations.push({
                                    id: id,
                                    name: name
                                })
                            }
                            sendExperimentData(activeExperimentState)
                        }
                    }
                };
                var initNewOptimizelyIntegration = function(referrerOverride, sendCampaignData) {
                    var newActiveCampaign = function(id, referrer) {
                        var state = window.optimizely.get && window.optimizely.get("state");
                        if (state) {
                            var activeCampaigns = state.getCampaignStates({
                                isActive: true
                            });
                            var campaignState = activeCampaigns[id];
                            if (referrer) campaignState.experiment.referrer = referrer;
                            sendCampaignData(campaignState)
                        }
                    };
                    var checkReferrer = function() {
                        var state = window.optimizely.get && window.optimizely.get("state");
                        if (state) {
                            var referrer = state.getRedirectInfo() && state.getRedirectInfo().referrer;
                            if (referrer) {
                                referrerOverride(referrer);
                                return referrer
                            }
                        }
                    };
                    var registerFutureActiveCampaigns = function() {
                        window.optimizely = window.optimizely || [];
                        window.optimizely.push({
                            type: "addListener",
                            filter: {
                                type: "lifecycle",
                                name: "campaignDecided"
                            },
                            handler: function(event) {
                                var id = event.data.campaign.id;
                                newActiveCampaign(id)
                            }
                        })
                    };
                    var registerCurrentlyActiveCampaigns = function() {
                        window.optimizely = window.optimizely || [];
                        var state = window.optimizely.get && window.optimizely.get("state");
                        if (state) {
                            var referrer = checkReferrer();
                            var activeCampaigns = state.getCampaignStates({
                                isActive: true
                            });
                            for (var id in activeCampaigns) {
                                if ({}.hasOwnProperty.call(activeCampaigns, id)) {
                                    referrer ? newActiveCampaign(id, referrer) : newActiveCampaign(id)
                                }
                            }
                        } else {
                            window.optimizely.push({
                                type: "addListener",
                                filter: {
                                    type: "lifecycle",
                                    name: "initialized"
                                },
                                handler: function() {
                                    checkReferrer()
                                }
                            })
                        }
                    };
                    registerCurrentlyActiveCampaigns();
                    registerFutureActiveCampaigns()
                };
                initClassicOptimizelyIntegration(handlers.referrerOverride, handlers.sendExperimentData);
                initNewOptimizelyIntegration(handlers.referrerOverride, handlers.sendCampaignData)
            }
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/foldl": 11,
            "@ndhoule/keys": 13,
            "@ndhoule/values": 17,
            "@segment/analytics.js-integration": 220,
            "global-queue": 386,
            "next-tick": 227
        }],
        220: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 221,
            "./statics": 222,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 225,
            dup: 35,
            "slug-component": 427
        }],
        221: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 224,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 223,
            "to-no-case": 433
        }],
        222: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        223: [function(require, module, exports) {
            (function(process, setImmediate) {
                "use strict";
                var callable, byObserver;
                callable = function(fn) {
                    if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
                    return fn
                };
                byObserver = function(Observer) {
                    var node = document.createTextNode(""),
                        queue, i = 0;
                    new Observer(function() {
                        var data;
                        if (!queue) return;
                        data = queue;
                        queue = null;
                        if (typeof data === "function") {
                            data();
                            return
                        }
                        data.forEach(function(fn) {
                            fn()
                        })
                    }).observe(node, {
                        characterData: true
                    });
                    return function(fn) {
                        callable(fn);
                        if (queue) {
                            if (typeof queue === "function") queue = [queue, fn];
                            else queue.push(fn);
                            return
                        }
                        queue = fn;
                        node.data = i = ++i % 2
                    }
                };
                module.exports = function() {
                    if (typeof process !== "undefined" && process && typeof process.nextTick === "function") {
                        return process.nextTick
                    }
                    if (typeof document === "object" && document) {
                        if (typeof MutationObserver === "function") {
                            return byObserver(MutationObserver)
                        }
                        if (typeof WebKitMutationObserver === "function") {
                            return byObserver(WebKitMutationObserver)
                        }
                    }
                    if (typeof setImmediate === "function") {
                        return function(cb) {
                            setImmediate(callable(cb))
                        }
                    }
                    if (typeof setTimeout === "function") {
                        return function(cb) {
                            setTimeout(callable(cb), 0)
                        }
                    }
                    return null
                }()
            }).call(this, require("_process"), require("timers").setImmediate)
        }, {
            _process: 412,
            timers: 430
        }],
        224: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        225: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 226,
            _process: 412,
            dup: 39
        }],
        226: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        227: [function(require, module, exports) {
            arguments[4][117][0].apply(exports, arguments)
        }, {
            _process: 412,
            dup: 117,
            timers: 430
        }],
        228: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var when = require("do-when");
            var reject = require("reject");
            var json = require("json3");
            var is = require("is");
            var defaults = require("@ndhoule/defaults");
            var Parsely = module.exports = integration("Parsely").global("PARSELY").option("apiKey", "").option("dynamicTracking", false).option("trackEvents", false).option("inPixelMetadata", false).tag('<script src="//d1z2jf7jlzjs58.cloudfront.net/p.js">');
            Parsely.prototype.initialize = function() {
                window.PARSELY = window.PARSELY || {};
                if (this.options.dynamicTracking) window.PARSELY.autotrack = false;
                var self = this;
                var meta = document.createElement("meta");
                meta.id = "parsely-cfg";
                meta.setAttribute("data-parsely-site", this.options.apiKey);
                var head = document.getElementsByTagName("head")[0];
                if (!head) return;
                head.appendChild(meta);
                this.load(function() {
                    when(self.loaded, self.ready)
                })
            };
            Parsely.prototype.loaded = function() {
                return !!window.PARSELY.beacon
            };
            Parsely.prototype.page = function(page) {
                if (!this.options.dynamicTracking) return;
                var properties = page.properties();
                var data = {
                    url: page.url(),
                    urlref: page.referrer(),
                    data: properties,
                    js: 1
                };
                if (this.options.inPixelMetadata) {
                    var aliasedProps = page.properties(this.options.customMapping);
                    var metadata = {
                        section: aliasedProps.section || page.category(),
                        image_url: aliasedProps.image_url || aliasedProps.imageUrl,
                        pub_date_tmsp: aliasedProps.pub_date_tmsp || aliasedProps.created,
                        title: aliasedProps.title || page.title(),
                        tags: aliasedProps.tags,
                        authors: aliasedProps.authors,
                        link: aliasedProps.link || page.url(),
                        page_type: aliasedProps.page_type || "post"
                    };
                    var authors = metadata.authors;
                    var tags = metadata.tags;
                    if (authors && !is.array(authors)) metadata.authors = [authors];
                    if (tags && !is.array(tags)) metadata.tags = [tags];
                    data.metadata = json.stringify(reject(metadata))
                }
                window.PARSELY.beacon.trackPageView(data)
            };
            Parsely.prototype.track = function(track) {
                return this.trackDynamicEvent(track)
            };
            var CURRENT_VIDEO_METADATA = {};
            Parsely.prototype.videoContentStarted = function(track) {
                if (window.PARSELY.video) {
                    var vidId = track.proxy("properties.assetId");
                    var urlOverride = track.proxy("context.page.url");
                    var metadata = this.parseVideoMetadata(track);
                    CURRENT_VIDEO_METADATA = metadata;
                    window.PARSELY.video.trackPlay(vidId, metadata, urlOverride)
                }
                return this.trackDynamicEvent(track)
            };
            Parsely.prototype.videoPlaybackPaused = function(track) {
                if (window.PARSELY.video) {
                    var vidId = track.proxy("properties.assetId");
                    var urlOverride = track.proxy("context.page.url");
                    var metadata = this.parseVideoMetadata(track);
                    metadata = defaults(metadata, CURRENT_VIDEO_METADATA);
                    window.PARSELY.video.trackPause(vidId, metadata, urlOverride)
                }
                return this.trackDynamicEvent(track)
            };
            Parsely.prototype.videoPlaybackInterrupted = function(track) {
                if (window.PARSELY.video) {
                    var vidId = track.proxy("properties.assetId");
                    window.PARSELY.video.reset(vidId)
                }
                return this.trackDynamicEvent(track)
            };
            Parsely.prototype.trackDynamicEvent = function(track) {
                if (this.options.trackEvents) {
                    window.PARSELY.beacon.trackPageView({
                        data: track.properties(),
                        action: track.event(),
                        url: track.proxy("context.page.url"),
                        urlref: track.proxy("context.page.referrer"),
                        js: 1
                    })
                }
            };
            Parsely.prototype.parseVideoMetadata = function(track) {
                var options = track.options(this.name) || {};
                var authors = track.proxy("properties.publisher");
                if (authors) authors = Array.isArray(authors) ? authors : [authors];
                return reject({
                    title: track.proxy("properties.title"),
                    pub_date_tmsp: +new Date(track.proxy("properties.airdate")) || null,
                    image_url: options.imageUrl,
                    section: track.proxy("properties.genre"),
                    authors: authors,
                    tags: track.proxy("properties.keywords")
                })
            }
        }, {
            "@ndhoule/defaults": 6,
            "@segment/analytics.js-integration": 338,
            "do-when": 383,
            is: 229,
            json3: 396,
            reject: 413
        }],
        229: [function(require, module, exports) {
            "use strict";
            var objProto = Object.prototype;
            var owns = objProto.hasOwnProperty;
            var toStr = objProto.toString;
            var symbolValueOf;
            if (typeof Symbol === "function") {
                symbolValueOf = Symbol.prototype.valueOf
            }
            var isActualNaN = function(value) {
                return value !== value
            };
            var NON_HOST_TYPES = {
                boolean: 1,
                number: 1,
                string: 1,
                undefined: 1
            };
            var base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
            var hexRegex = /^[A-Fa-f0-9]+$/;
            var is = {};
            is.a = is.type = function(value, type) {
                return typeof value === type
            };
            is.defined = function(value) {
                return typeof value !== "undefined"
            };
            is.empty = function(value) {
                var type = toStr.call(value);
                var key;
                if (type === "[object Array]" || type === "[object Arguments]" || type === "[object String]") {
                    return value.length === 0
                }
                if (type === "[object Object]") {
                    for (key in value) {
                        if (owns.call(value, key)) {
                            return false
                        }
                    }
                    return true
                }
                return !value
            };
            is.equal = function equal(value, other) {
                if (value === other) {
                    return true
                }
                var type = toStr.call(value);
                var key;
                if (type !== toStr.call(other)) {
                    return false
                }
                if (type === "[object Object]") {
                    for (key in value) {
                        if (!is.equal(value[key], other[key]) || !(key in other)) {
                            return false
                        }
                    }
                    for (key in other) {
                        if (!is.equal(value[key], other[key]) || !(key in value)) {
                            return false
                        }
                    }
                    return true
                }
                if (type === "[object Array]") {
                    key = value.length;
                    if (key !== other.length) {
                        return false
                    }
                    while (key--) {
                        if (!is.equal(value[key], other[key])) {
                            return false
                        }
                    }
                    return true
                }
                if (type === "[object Function]") {
                    return value.prototype === other.prototype
                }
                if (type === "[object Date]") {
                    return value.getTime() === other.getTime()
                }
                return false
            };
            is.hosted = function(value, host) {
                var type = typeof host[value];
                return type === "object" ? !!host[value] : !NON_HOST_TYPES[type]
            };
            is.instance = is["instanceof"] = function(value, constructor) {
                return value instanceof constructor
            };
            is.nil = is["null"] = function(value) {
                return value === null
            };
            is.undef = is.undefined = function(value) {
                return typeof value === "undefined"
            };
            is.args = is.arguments = function(value) {
                var isStandardArguments = toStr.call(value) === "[object Arguments]";
                var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
                return isStandardArguments || isOldArguments
            };
            is.array = Array.isArray || function(value) {
                return toStr.call(value) === "[object Array]"
            };
            is.args.empty = function(value) {
                return is.args(value) && value.length === 0
            };
            is.array.empty = function(value) {
                return is.array(value) && value.length === 0
            };
            is.arraylike = function(value) {
                return !!value && !is.bool(value) && owns.call(value, "length") && isFinite(value.length) && is.number(value.length) && value.length >= 0
            };
            is.bool = is["boolean"] = function(value) {
                return toStr.call(value) === "[object Boolean]"
            };
            is["false"] = function(value) {
                return is.bool(value) && Boolean(Number(value)) === false
            };
            is["true"] = function(value) {
                return is.bool(value) && Boolean(Number(value)) === true
            };
            is.date = function(value) {
                return toStr.call(value) === "[object Date]"
            };
            is.date.valid = function(value) {
                return is.date(value) && !isNaN(Number(value))
            };
            is.element = function(value) {
                return value !== undefined && typeof HTMLElement !== "undefined" && value instanceof HTMLElement && value.nodeType === 1
            };
            is.error = function(value) {
                return toStr.call(value) === "[object Error]"
            };
            is.fn = is["function"] = function(value) {
                var isAlert = typeof window !== "undefined" && value === window.alert;
                if (isAlert) {
                    return true
                }
                var str = toStr.call(value);
                return str === "[object Function]" || str === "[object GeneratorFunction]" || str === "[object AsyncFunction]"
            };
            is.number = function(value) {
                return toStr.call(value) === "[object Number]"
            };
            is.infinite = function(value) {
                return value === Infinity || value === -Infinity
            };
            is.decimal = function(value) {
                return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0
            };
            is.divisibleBy = function(value, n) {
                var isDividendInfinite = is.infinite(value);
                var isDivisorInfinite = is.infinite(n);
                var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
                return isDividendInfinite || isDivisorInfinite || isNonZeroNumber && value % n === 0
            };
            is.integer = is["int"] = function(value) {
                return is.number(value) && !isActualNaN(value) && value % 1 === 0
            };
            is.maximum = function(value, others) {
                if (isActualNaN(value)) {
                    throw new TypeError("NaN is not a valid value")
                } else if (!is.arraylike(others)) {
                    throw new TypeError("second argument must be array-like")
                }
                var len = others.length;
                while (--len >= 0) {
                    if (value < others[len]) {
                        return false
                    }
                }
                return true
            };
            is.minimum = function(value, others) {
                if (isActualNaN(value)) {
                    throw new TypeError("NaN is not a valid value")
                } else if (!is.arraylike(others)) {
                    throw new TypeError("second argument must be array-like")
                }
                var len = others.length;
                while (--len >= 0) {
                    if (value > others[len]) {
                        return false
                    }
                }
                return true
            };
            is.nan = function(value) {
                return !is.number(value) || value !== value
            };
            is.even = function(value) {
                return is.infinite(value) || is.number(value) && value === value && value % 2 === 0
            };
            is.odd = function(value) {
                return is.infinite(value) || is.number(value) && value === value && value % 2 !== 0
            };
            is.ge = function(value, other) {
                if (isActualNaN(value) || isActualNaN(other)) {
                    throw new TypeError("NaN is not a valid value")
                }
                return !is.infinite(value) && !is.infinite(other) && value >= other
            };
            is.gt = function(value, other) {
                if (isActualNaN(value) || isActualNaN(other)) {
                    throw new TypeError("NaN is not a valid value")
                }
                return !is.infinite(value) && !is.infinite(other) && value > other
            };
            is.le = function(value, other) {
                if (isActualNaN(value) || isActualNaN(other)) {
                    throw new TypeError("NaN is not a valid value")
                }
                return !is.infinite(value) && !is.infinite(other) && value <= other
            };
            is.lt = function(value, other) {
                if (isActualNaN(value) || isActualNaN(other)) {
                    throw new TypeError("NaN is not a valid value")
                }
                return !is.infinite(value) && !is.infinite(other) && value < other
            };
            is.within = function(value, start, finish) {
                if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
                    throw new TypeError("NaN is not a valid value")
                } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
                    throw new TypeError("all arguments must be numbers")
                }
                var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
                return isAnyInfinite || value >= start && value <= finish
            };
            is.object = function(value) {
                return toStr.call(value) === "[object Object]"
            };
            is.primitive = function isPrimitive(value) {
                if (!value) {
                    return true
                }
                if (typeof value === "object" || is.object(value) || is.fn(value) || is.array(value)) {
                    return false
                }
                return true
            };
            is.hash = function(value) {
                return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval
            };
            is.regexp = function(value) {
                return toStr.call(value) === "[object RegExp]"
            };
            is.string = function(value) {
                return toStr.call(value) === "[object String]"
            };
            is.base64 = function(value) {
                return is.string(value) && (!value.length || base64Regex.test(value))
            };
            is.hex = function(value) {
                return is.string(value) && (!value.length || hexRegex.test(value))
            };
            is.symbol = function(value) {
                return typeof Symbol === "function" && toStr.call(value) === "[object Symbol]" && typeof symbolValueOf.call(value) === "symbol"
            };
            module.exports = is
        }, {}],
        230: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var push = require("global-queue")("_prum");
            var Pingdom = module.exports = integration("Pingdom").assumesPageview().global("_prum").global("PRUM_EPISODES").option("id", "").tag('<script src="//rum-static.pingdom.net/prum.min.js">');
            Pingdom.prototype.initialize = function() {
                window._prum = window._prum || [];
                push("id", this.options.id);
                var date = new Date;
                push("mark", "firstbyte", date.getTime());
                this.load(this.ready)
            };
            Pingdom.prototype.loaded = function() {
                return !!(window._prum && window._prum.push !== Array.prototype.push)
            }
        }, {
            "@segment/analytics.js-integration": 231,
            "global-queue": 386
        }],
        231: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 232,
            "./statics": 233,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 235,
            dup: 35,
            "slug-component": 427
        }],
        232: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 234,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        233: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        234: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        235: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 236,
            _process: 412,
            dup: 39
        }],
        236: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        237: [function(require, module, exports) {
            "use strict";
            var each = require("component-each");
            var integration = require("@segment/analytics.js-integration");
            var is = require("is");
            var push = require("global-queue")("_paq");
            var Piwik = module.exports = integration("Piwik").global("_paq").option("url", null).option("siteId", "").option("customVariableLimit", 5).mapping("goals").tag('<script src="{{ url }}/piwik.js">');
            Piwik.prototype.initialize = function() {
                window._paq = window._paq || [];
                push("setSiteId", this.options.siteId);
                push("setTrackerUrl", this.options.url + "/piwik.php");
                push("enableLinkTracking");
                this.load(this.ready)
            };
            Piwik.prototype.loaded = function() {
                return !!(window._paq && window._paq.push !== Array.prototype.push)
            };
            Piwik.prototype.page = function() {
                push("trackPageView")
            };
            Piwik.prototype.identify = function(identify) {
                if (!identify.userId()) return;
                push("setUserId", identify.userId().toString())
            };
            Piwik.prototype.track = function(track) {
                var goals = this.goals(track.event());
                var revenue = track.revenue();
                var category = track.category() || "All";
                var action = track.event();
                var name = track.proxy("properties.name") || track.proxy("properties.label");
                var value = track.value() || track.revenue();
                var options = track.options("Piwik");
                var customVariables = options.customVars || options.cvar;
                if (!is.object(customVariables)) {
                    customVariables = {}
                }
                for (var i = 1; i <= this.options.customVariableLimit; i += 1) {
                    if (customVariables[i]) {
                        push("setCustomVariable", i.toString(), customVariables[i][0], customVariables[i][1], "page")
                    }
                }
                each(goals, function(goal) {
                    push("trackGoal", goal, revenue)
                });
                push("trackEvent", category, action, name, value)
            }
        }, {
            "@segment/analytics.js-integration": 238,
            "component-each": 371,
            "global-queue": 386,
            is: 392
        }],
        238: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 239,
            "./statics": 240,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 242,
            dup: 35,
            "slug-component": 427
        }],
        239: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 241,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        240: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        241: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        242: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 243,
            _process: 412,
            dup: 39
        }],
        243: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        244: [function(require, module, exports) {
            "use strict";
            var Identify = require("segmentio-facade").Identify;
            var integration = require("@segment/analytics.js-integration");
            var push = require("global-queue")("_kiq");
            var when = require("do-when");
            var Qualaroo = module.exports = integration("Qualaroo").assumesPageview().global("_kiq").option("customerId", "").option("siteToken", "").option("track", false).tag('<script src="https://cl.qualaroo.com/ki.js/{{ customerId }}/{{ siteToken }}.js">');
            Qualaroo.prototype.initialize = function() {
                window._kiq = window._kiq || [];
                var loaded = this.loaded;
                var ready = this.ready;
                this.load(function() {
                    when(loaded, ready)
                })
            };
            Qualaroo.prototype.loaded = function() {
                return !!(window._kiq && window._kiq.push !== Array.prototype.push)
            };
            Qualaroo.prototype.identify = function(identify) {
                var traits = identify.traits();
                var id = identify.userId();
                var email = identify.email();
                if (email) id = email;
                if (id) push("identify", id);
                if (traits) push("set", traits)
            };
            Qualaroo.prototype.track = function(track) {
                if (!this.options.track) return;
                var event = track.event();
                var traits = {};
                traits["Triggered: " + event] = true;
                this.identify(new Identify({
                    traits: traits
                }))
            }
        }, {
            "@segment/analytics.js-integration": 245,
            "do-when": 383,
            "global-queue": 386,
            "segmentio-facade": 421
        }],
        245: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 246,
            "./statics": 247,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 249,
            dup: 35,
            "slug-component": 427
        }],
        246: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 248,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        247: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        248: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        249: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 250,
            _process: 412,
            dup: 39
        }],
        250: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        251: [function(require, module, exports) {
            "use strict";
            var push = require("global-queue")("_qevents", {
                wrap: false
            });
            var integration = require("@segment/analytics.js-integration");
            var useHttps = require("use-https");
            var is = require("is");
            var objCase = require("obj-case");
            var Quantcast = module.exports = integration("Quantcast").assumesPageview().global("_qevents").global("__qc").option("pCode", null).option("advertise", false).tag("http", '<script src="http://edge.quantserve.com/quant.js">').tag("https", '<script src="https://secure.quantserve.com/quant.js">');
            Quantcast.prototype.initialize = function(page) {
                window._qevents = window._qevents || [];
                var opts = this.options;
                var settings = {
                    qacct: opts.pCode
                };
                var user = this.analytics.user();
                if (user.id()) settings.uid = user.id().toString();
                if (page) {
                    settings.labels = this._labels(page)
                }
                push(settings);
                var name = useHttps() ? "https" : "http";
                this.load(name, this.ready)
            };
            Quantcast.prototype.loaded = function() {
                return !!window.__qc
            };
            Quantcast.prototype.page = function(page) {
                var settings = {
                    event: "refresh",
                    labels: this._labels(page),
                    qacct: this.options.pCode
                };
                var user = this.analytics.user();
                if (!this.options.advertise && !page.name() && !page.category()) delete settings.labels;
                if (user.id()) settings.uid = user.id().toString();
                push(settings)
            };
            Quantcast.prototype.identify = function(identify) {
                if (identify.userId()) {
                    window._qevents[0] = window._qevents[0] || {};
                    window._qevents[0].uid = identify.userId().toString()
                }
            };
            Quantcast.prototype.track = function(track) {
                var revenue = track.revenue();
                var orderId = track.orderId();
                var user = this.analytics.user();
                var settings = {
                    event: "click",
                    labels: this._labels(track),
                    qacct: this.options.pCode
                };
                if (revenue) settings.revenue = String(revenue);
                if (orderId) settings.orderid = String(orderId);
                if (user.id()) settings.uid = user.id().toString();
                push(settings)
            };
            var productLabelMap = {
                brand: "Brand",
                category: "Category",
                coupon: "Coupon",
                image_url: "ImageURL",
                name: "Name",
                position: "Position",
                product_id: "ProductID",
                sku: "SKU",
                url: "URL",
                variant: "Variant"
            };
            Quantcast.prototype.orderCompleted = function(track) {
                var labels = this._labels(track);
                if (this.options.advertise) {
                    var category = safe(track.category());
                    if (category) labels += ",_fp.pcat." + category;
                    var repeat = track.proxy("properties.repeat");
                    if (typeof repeat === "boolean") labels += ",_fp.customer." + (repeat ? "repeat" : "new");
                    if (this.options.advertiseProducts) {
                        var products = track.products();
                        products.forEach(function(product) {
                            if (!objCase.find(product, "product_id")) return;
                            Object.keys(productLabelMap).forEach(function(key) {
                                var value = objCase.find(product, key);
                                var label = productLabelMap[key];
                                if (value) labels += ",_fp.pcat." + label + "." + value
                            })
                        });
                        var quantity = products.reduce(function(acc, product) {
                            var quantity = objCase.find(product, "quantity");
                            if (typeof quantity === "number") return acc + quantity;
                            if (typeof quantity === "string") return acc + parseInt(quantity, 10);
                            return acc
                        }, 0);
                        if (quantity > 0) labels += ",_fp.pcat.Quantity." + quantity
                    }
                }
                var settings = {
                    event: "refresh",
                    labels: labels,
                    revenue: String(track.total() || track.revenue()),
                    orderid: String(track.orderId()),
                    qacct: this.options.pCode
                };
                push(settings)
            };
            Quantcast.prototype._labels = function(facade) {
                var action = facade.action();
                var autoLabels = [];
                var ret;
                if (action === "page") {
                    if (facade.category()) autoLabels.push(safe(facade.category()));
                    autoLabels.push(safe(facade.name() || "Default"));
                    autoLabels = autoLabels.join(".")
                } else if (action === "track") {
                    autoLabels = safe(facade.event())
                }
                var label = safe(facade.proxy("properties.label"));
                var customLabels = facade.options("Quantcast").labels || [];
                if (is.string(customLabels)) customLabels = [customLabels];
                customLabels = customLabels.map(function(label) {
                    return safe(label)
                });
                if (is.string(label)) customLabels.unshift(label);
                customLabels = customLabels.join(",");
                if (this.options.advertise) {
                    ret = "_fp.event." + autoLabels
                } else {
                    ret = autoLabels
                }
                if (customLabels) ret += "," + customLabels;
                return ret
            };

            function safe(str) {
                if (str) return str.replace(/[^\w\s]|_/gi, "")
            }
        }, {
            "@segment/analytics.js-integration": 338,
            "global-queue": 386,
            is: 392,
            "obj-case": 407,
            "use-https": 441
        }],
        252: [function(require, module, exports) {
            "use strict";
            var extend = require("@ndhoule/extend");
            var integration = require("@segment/analytics.js-integration");
            var RollbarIntegration = module.exports = integration("Rollbar").global("Rollbar").global("rollbar").option("identify", true).option("accessToken", "").option("environment", "unknown").option("captureUncaught", true).option("captureUnhandledRejections", false).option("sourceMapEnabled", false).option("codeVersion", "").option("guessUncaughtFrames", false).option("ignoredMessages", []).option("loadTimeout", 6e4).option("verbose", false);
            RollbarIntegration.prototype.initialize = function() {
                window._rollbarConfig = this.config = {
                    accessToken: this.options.accessToken,
                    captureUncaught: this.options.captureUncaught,
                    captureUnhandledRejections: this.options.captureUnhandledRejections,
                    verbose: this.options.verbose,
                    payload: {
                        environment: this.options.environment,
                        client: {
                            javascript: {
                                source_map_enabled: this.options.sourceMapEnabled,
                                code_version: this.options.codeVersion,
                                guess_uncaught_frames: this.options.guessUncaughtFrames
                            }
                        }
                    }
                };
                var msg = this.options.ignoredMessages;
                if (msg.length > 0) {
                    var ret = [];
                    for (var x = 0; x < msg.length; x++) {
                        if (msg[x] !== null && msg[x] !== "") ret.push(msg[x])
                    }
                    window._rollbarConfig.ignoredMessages = ret
                }! function(r) {
                    function o(n) {
                        if (e[n]) return e[n].exports;
                        var t = e[n] = {
                            exports: {},
                            id: n,
                            loaded: !1
                        };
                        return r[n].call(t.exports, t, t.exports, o), t.loaded = !0, t.exports
                    }
                    var e = {};
                    return o.m = r, o.c = e, o.p = "", o(0)
                }([function(r, o, e) {
                    "use strict";
                    var n = e(1),
                        t = e(4);
                    _rollbarConfig = _rollbarConfig || {}, _rollbarConfig.rollbarJsUrl = _rollbarConfig.rollbarJsUrl || "https://cdnjs.cloudflare.com/ajax/libs/rollbar.js/2.2.7/rollbar.min.js", _rollbarConfig.async = void 0 === _rollbarConfig.async || _rollbarConfig.async;
                    var a = n.setupShim(window, _rollbarConfig),
                        l = t(_rollbarConfig);
                    window.rollbar = n.Rollbar, a.loadFull(window, document, !_rollbarConfig.async, _rollbarConfig, l)
                }, function(r, o, e) {
                    "use strict";

                    function n(r) {
                        return function() {
                            try {
                                return r.apply(this, arguments)
                            } catch (r) {
                                try {
                                    console.error("[Rollbar]: Internal error", r)
                                } catch (r) {}
                            }
                        }
                    }

                    function t(r, o) {
                        this.options = r, this._rollbarOldOnError = null;
                        var e = s++;
                        this.shimId = function() {
                            return e
                        }, window && window._rollbarShims && (window._rollbarShims[e] = {
                            handler: o,
                            messages: []
                        })
                    }

                    function a(r, o) {
                        var e = o.globalAlias || "Rollbar";
                        if ("object" == typeof r[e]) return r[e];
                        r._rollbarShims = {}, r._rollbarWrappedError = null;
                        var t = new p(o);
                        return n(function() {
                            o.captureUncaught && (t._rollbarOldOnError = r.onerror, i.captureUncaughtExceptions(r, t, !0), i.wrapGlobals(r, t, !0)), o.captureUnhandledRejections && i.captureUnhandledRejections(r, t, !0);
                            var n = o.autoInstrument;
                            return (void 0 === n || n === !0 || "object" == typeof n && n.network) && r.addEventListener && (r.addEventListener("load", t.captureLoad.bind(t)), r.addEventListener("DOMContentLoaded", t.captureDomContentLoaded.bind(t))), r[e] = t, t
                        })()
                    }

                    function l(r) {
                        return n(function() {
                            var o = this,
                                e = Array.prototype.slice.call(arguments, 0),
                                n = {
                                    shim: o,
                                    method: r,
                                    args: e,
                                    ts: new Date
                                };
                            window._rollbarShims[this.shimId()].messages.push(n)
                        })
                    }
                    var i = e(2),
                        s = 0,
                        d = e(3),
                        c = function(r, o) {
                            return new t(r, o)
                        },
                        p = d.bind(null, c);
                    t.prototype.loadFull = function(r, o, e, t, a) {
                        var l = function() {
                                var o;
                                if (void 0 === r._rollbarDidLoad) {
                                    o = new Error("rollbar.js did not load");
                                    for (var e, n, t, l, i = 0; e = r._rollbarShims[i++];)
                                        for (e = e.messages || []; n = e.shift();)
                                            for (t = n.args || [], i = 0; i < t.length; ++i)
                                                if (l = t[i], "function" == typeof l) {
                                                    l(o);
                                                    break
                                                }
                                }
                                "function" == typeof a && a(o)
                            },
                            i = !1,
                            s = o.createElement("script"),
                            d = o.getElementsByTagName("script")[0],
                            c = d.parentNode;
                        s.crossOrigin = "", s.src = t.rollbarJsUrl, e || (s.async = !0), s.onload = s.onreadystatechange = n(function() {
                            if (!(i || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState)) {
                                s.onload = s.onreadystatechange = null;
                                try {
                                    c.removeChild(s)
                                } catch (r) {}
                                i = !0, l()
                            }
                        }), c.insertBefore(s, d)
                    }, t.prototype.wrap = function(r, o, e) {
                        try {
                            var n;
                            if (n = "function" == typeof o ? o : function() {
                                    return o || {}
                                }, "function" != typeof r) return r;
                            if (r._isWrap) return r;
                            if (!r._rollbar_wrapped && (r._rollbar_wrapped = function() {
                                    e && "function" == typeof e && e.apply(this, arguments);
                                    try {
                                        return r.apply(this, arguments)
                                    } catch (e) {
                                        var o = e;
                                        throw "string" == typeof o && (o = new String(o)), o._rollbarContext = n() || {}, o._rollbarContext._wrappedSource = r.toString(), window._rollbarWrappedError = o, o
                                    }
                                }, r._rollbar_wrapped._isWrap = !0, r.hasOwnProperty))
                                for (var t in r) r.hasOwnProperty(t) && (r._rollbar_wrapped[t] = r[t]);
                            return r._rollbar_wrapped
                        } catch (o) {
                            return r
                        }
                    };
                    for (var u = "log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleUnhandledRejection,captureDomContentLoaded,captureLoad".split(","), f = 0; f < u.length; ++f) t.prototype[u[f]] = l(u[f]);
                    r.exports = {
                        setupShim: a,
                        Rollbar: p
                    }
                }, function(r, o) {
                    "use strict";

                    function e(r, o, e) {
                        if (r) {
                            var t;
                            "function" == typeof o._rollbarOldOnError ? t = o._rollbarOldOnError : r.onerror && !r.onerror.belongsToShim && (t = r.onerror, o._rollbarOldOnError = t);
                            var a = function() {
                                var e = Array.prototype.slice.call(arguments, 0);
                                n(r, o, t, e)
                            };
                            a.belongsToShim = e, r.onerror = a
                        }
                    }

                    function n(r, o, e, n) {
                        r._rollbarWrappedError && (n[4] || (n[4] = r._rollbarWrappedError), n[5] || (n[5] = r._rollbarWrappedError._rollbarContext), r._rollbarWrappedError = null), o.handleUncaughtException.apply(o, n), e && e.apply(r, n)
                    }

                    function t(r, o, e) {
                        if (r) {
                            "function" == typeof r._rollbarURH && r._rollbarURH.belongsToShim && r.removeEventListener("unhandledrejection", r._rollbarURH);
                            var n = function(r) {
                                var e = r.reason,
                                    n = r.promise,
                                    t = r.detail;
                                !e && t && (e = t.reason, n = t.promise), o && o.handleUnhandledRejection && o.handleUnhandledRejection(e, n)
                            };
                            n.belongsToShim = e, r._rollbarURH = n, r.addEventListener("unhandledrejection", n)
                        }
                    }

                    function a(r, o, e) {
                        if (r) {
                            var n, t, a = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");
                            for (n = 0; n < a.length; ++n) t = a[n], r[t] && r[t].prototype && l(o, r[t].prototype, e)
                        }
                    }

                    function l(r, o, e) {
                        if (o.hasOwnProperty && o.hasOwnProperty("addEventListener")) {
                            for (var n = o.addEventListener; n._rollbarOldAdd && n.belongsToShim;) n = n._rollbarOldAdd;
                            var t = function(o, e, t) {
                                n.call(this, o, r.wrap(e), t)
                            };
                            t._rollbarOldAdd = n, t.belongsToShim = e, o.addEventListener = t;
                            for (var a = o.removeEventListener; a._rollbarOldRemove && a.belongsToShim;) a = a._rollbarOldRemove;
                            var l = function(r, o, e) {
                                a.call(this, r, o && o._rollbar_wrapped || o, e)
                            };
                            l._rollbarOldRemove = a, l.belongsToShim = e, o.removeEventListener = l
                        }
                    }
                    r.exports = {
                        captureUncaughtExceptions: e,
                        captureUnhandledRejections: t,
                        wrapGlobals: a
                    }
                }, function(r, o) {
                    "use strict";

                    function e(r, o) {
                        this.impl = r(o, this), this.options = o, n(e.prototype)
                    }

                    function n(r) {
                        for (var o = function(r) {
                                return function() {
                                    var o = Array.prototype.slice.call(arguments, 0);
                                    if (this.impl[r]) return this.impl[r].apply(this.impl, o)
                                }
                            }, e = "log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleUnhandledRejection,_createItem,wrap,loadFull,shimId,captureDomContentLoaded,captureLoad".split(","), n = 0; n < e.length; n++) r[e[n]] = o(e[n])
                    }
                    e.prototype._swapAndProcessMessages = function(r, o) {
                        this.impl = r(this.options);
                        for (var e, n, t; e = o.shift();) n = e.method, t = e.args, this[n] && "function" == typeof this[n] && ("captureDomContentLoaded" === n || "captureLoad" === n ? this[n].apply(this, [t[0], e.ts]) : this[n].apply(this, t));
                        return this
                    }, r.exports = e
                }, function(r, o) {
                    "use strict";
                    r.exports = function(r) {
                        return function(o) {
                            if (!o && !window._rollbarInitialized) {
                                r = r || {};
                                for (var e, n, t = r.globalAlias || "Rollbar", a = window.rollbar, l = function(r) {
                                        return new a(r)
                                    }, i = 0; e = window._rollbarShims[i++];) n || (n = e.handler), e.handler._swapAndProcessMessages(l, e.messages);
                                window[t] = n, window._rollbarInitialized = !0
                            }
                        }
                    }
                }]);
                this.load(this.ready)
            };
            RollbarIntegration.prototype.loaded = function() {
                return !!window._rollbarDidLoad
            };
            RollbarIntegration.prototype.load = function(callback) {
                var loadedCheck = this.loaded;
                var startTime = (new Date).getTime();
                var timeout = this.options.loadTimeout;

                function timer() {
                    if (loadedCheck()) {
                        return callback()
                    }
                    if ((new Date).getTime() - startTime >= timeout) {
                        return callback(new Error("Rollbar timed out while loading"))
                    }
                    setTimeout(timer, 1)
                }
                timer()
            };
            RollbarIntegration.prototype.identify = function(identify) {
                if (!this.options.identify) return;
                var uid = identify.userId();
                if (uid === null || uid === undefined) return;
                var rollbar = window.Rollbar;
                var person = {
                    id: uid
                };
                extend(person, identify.traits());
                rollbar.configure({
                    payload: {
                        person: person
                    }
                })
            }
        }, {
            "@ndhoule/extend": 10,
            "@segment/analytics.js-integration": 253
        }],
        253: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 254,
            "./statics": 255,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 257,
            dup: 35,
            "slug-component": 427
        }],
        254: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 256,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        255: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        256: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        257: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 258,
            _process: 412,
            dup: 39
        }],
        258: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        259: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var objCase = require("obj-case");
            var SaaSquatch = module.exports = integration("SaaSquatch").option("tenantAlias", "").option("referralImage", "").global("_sqh").tag('<script src="//d2rcp9ak152ke1.cloudfront.net/assets/javascripts/squatch.min.js">');
            SaaSquatch.prototype.initialize = function() {
                window._sqh = window._sqh || [];
                window._sqh.push(["init", {
                    tenant_alias: this.options.tenantAlias
                }]);
                this.load(this.ready)
            };
            SaaSquatch.prototype.loaded = function() {
                return window._sqh && window._sqh.push !== Array.prototype.push
            };
            SaaSquatch.prototype.identify = function(identify) {
                var sqh = window._sqh;
                var opts = identify.options(this.name);
                var id = identify.userId();
                var email = identify.email();
                if (!(id || email)) return;
                if (this.called) return;
                var init = identify.traits();
                init.email = email;
                init.user_id = id;
                objCase.del(init, "id");
                init.tenant_alias = this.options.tenantAlias;
                init.first_name = identify.firstName();
                init.last_name = identify.lastName();
                init.user_image = identify.avatar();
                var properties = ["account_id", "payment_provider_id", "account_status", "referral_code", "user_referral_code", "checksum", "mode", "locale"];
                for (var i = 0; i < properties.length; i++) {
                    var prop = properties[i];
                    var value = objCase.find(opts, prop) || objCase.find(init, prop);
                    objCase.del(init, prop);
                    if (value) {
                        init[prop] = value
                    }
                }
                if (init.payment_provider_id === "null") {
                    init.payment_provider_id = null
                }
                var image = objCase.find(opts, "referralImage") || objCase.find(init, "referralImage") || this.options.referralImage;
                if (image) {
                    objCase.del(init, "referralImage");
                    init.fb_share_image = image
                }
                sqh.push(["init", init]);
                this.called = true;
                this.load()
            };
            SaaSquatch.prototype.group = function(group) {
                var sqh = window._sqh;
                var id = group.groupId();
                var image = group.proxy("traits.referralImage") || this.options.referralImage;
                var opts = group.options(this.name);
                if (this.called) return;
                var init = {
                    tenant_alias: this.options.tenantAlias,
                    account_id: id
                };
                if (opts.checksum) init.checksum = opts.checksum;
                if (image) init.fb_share_image = image;
                sqh.push(["init", init]);
                this.called = true;
                this.load()
            }
        }, {
            "@segment/analytics.js-integration": 260,
            "obj-case": 407
        }],
        260: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 261,
            "./statics": 262,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 264,
            dup: 35,
            "slug-component": 427
        }],
        261: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 263,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        262: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        263: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        264: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 265,
            _process: 412,
            dup: 39
        }],
        265: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        266: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var when = require("do-when");
            var SatisMeter = module.exports = integration("SatisMeter").global("satismeter").option("token", "").option("apiKey", "").tag('<script src="https://app.satismeter.com/satismeter.js">');
            SatisMeter.prototype.initialize = function() {
                var self = this;
                this.load(function() {
                    when(function() {
                        return self.loaded()
                    }, self.ready)
                })
            };
            SatisMeter.prototype.loaded = function() {
                return !!window.satismeter
            };
            SatisMeter.prototype.identify = function(identify) {
                window.satismeter({
                    writeKey: this.options.apiKey || this.options.token,
                    userId: identify.userId(),
                    traits: this.analytics.user().traits(),
                    type: "identify"
                })
            };
            SatisMeter.prototype.page = function() {
                window.satismeter({
                    writeKey: this.options.apiKey || this.options.token,
                    userId: this.analytics.user().id(),
                    type: "page"
                })
            }
        }, {
            "@segment/analytics.js-integration": 267,
            "do-when": 383
        }],
        267: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 268,
            "./statics": 269,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 271,
            dup: 35,
            "slug-component": 427
        }],
        268: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 270,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        269: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        270: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        271: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 272,
            _process: 412,
            dup: 39
        }],
        272: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        273: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var is = require("is");
            var foldl = require("@ndhoule/foldl");
            var Sentry = module.exports = integration("Sentry").global("Raven").global("RavenConfig").option("config", "").option("serverName", null).option("release", null).option("ignoreErrors", []).option("ignoreUrls", []).option("whitelistUrls", []).option("includePaths", []).option("maxMessageLength", null).option("logger", null).option("customVersionProperty", null).tag('<script src="https://cdn.ravenjs.com/3.17.0/raven.min.js" crossorigin="anonymous">');
            Sentry.prototype.initialize = function() {
                var dsnPublic = this.options.config;
                var customRelease = this.options.customVersionProperty ? window[this.options.customVersionProperty] : null;
                var options = {
                    logger: this.options.logger,
                    release: customRelease || this.options.release,
                    serverName: this.options.serverName,
                    whitelistUrls: this.options.whitelistUrls,
                    ignoreErrors: this.options.ignoreErrors,
                    ignoreUrls: this.options.ignoreUrls,
                    includePaths: this.options.includePaths,
                    maxMessageLength: this.options.maxMessageLength
                };
                window.RavenConfig = {
                    dsn: dsnPublic,
                    config: reject(options)
                };
                this.load(this.ready)
            };
            Sentry.prototype.loaded = function() {
                return is.object(window.Raven)
            };
            Sentry.prototype.identify = function(identify) {
                window.Raven.setUserContext(identify.traits())
            };

            function reject(obj) {
                return foldl(function(result, val, key) {
                    if (val !== null && val !== "" && !is.array(val)) {
                        result[key] = val
                    }
                    if (is.array(val)) {
                        var ret = [];
                        for (var x = 0; x < val.length; x++) {
                            if (val[x] !== null && val[x] !== "") ret.push(val[x])
                        }
                        if (!is.empty(ret)) {
                            result[key] = ret
                        }
                    }
                    return result
                }, {}, obj)
            }
        }, {
            "@ndhoule/foldl": 11,
            "@segment/analytics.js-integration": 274,
            is: 392
        }],
        274: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 275,
            "./statics": 276,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 278,
            dup: 35,
            "slug-component": 427
        }],
        275: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 277,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        276: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        277: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        278: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 279,
            _process: 412,
            dup: 39
        }],
        279: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        280: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var is = require("is");
            var tick = require("next-tick");
            var SnapEngage = module.exports = integration("SnapEngage").assumesPageview().global("SnapABug").global("SnapEngage").option("apiKey", "").option("listen", false).tag('<script src="//www.snapengage.com/cdn/js/{{ apiKey }}.js">');
            var integrationContext = {
                name: "snapengage",
                version: "1.0.0"
            };
            SnapEngage.prototype.initialize = function() {
                var self = this;
                this.load(function() {
                    if (self.options.listen) self.attachListeners();
                    tick(self.ready)
                })
            };
            SnapEngage.prototype.loaded = function() {
                return is.object(window.SnapABug) && is.object(window.SnapEngage)
            };
            SnapEngage.prototype.identify = function(identify) {
                var email = identify.email();
                if (!email) return;
                window.SnapABug.setUserEmail(email)
            };
            SnapEngage.prototype.attachListeners = function() {
                var self = this;
                window.SnapEngage.setCallback("StartChat", function() {
                    self.analytics.track("Live Chat Conversation Started", {}, {
                        context: {
                            integration: integrationContext
                        }
                    })
                });
                window.SnapEngage.setCallback("ChatMessageReceived", function(agent) {
                    self.analytics.track("Live Chat Message Received", {
                        agentUsername: agent
                    }, {
                        context: {
                            integration: integrationContext
                        }
                    })
                });
                window.SnapEngage.setCallback("ChatMessageSent", function() {
                    self.analytics.track("Live Chat Message Sent", {}, {
                        context: {
                            integration: integrationContext
                        }
                    })
                });
                window.SnapEngage.setCallback("Close", function() {
                    self.analytics.track("Live Chat Conversation Ended", {}, {
                        context: {
                            integration: integrationContext
                        }
                    })
                })
            }
        }, {
            "@segment/analytics.js-integration": 281,
            is: 392,
            "next-tick": 406
        }],
        281: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 282,
            "./statics": 283,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 285,
            dup: 35,
            "slug-component": 427
        }],
        282: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 284,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        283: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        284: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        285: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 286,
            _process: 412,
            dup: 39
        }],
        286: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        287: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var is = require("is");
            var keys = require("@ndhoule/keys");
            var push = require("global-queue")("_tlq");
            var Taplytics = module.exports = integration("Taplytics").global("_tlq").global("Taplytics").option("apiKey", "").option("options", {}).tag('<script id="taplytics" src="//cdn.taplytics.com/taplytics.min.js">').assumesPageview();
            Taplytics.prototype.initialize = function() {
                var options = this.options.options;
                var apiKey = this.options.apiKey;
                window._tlq = window._tlq || [];
                push("init", apiKey, options);
                this.load(this.ready)
            };
            Taplytics.prototype.loaded = function() {
                return window.Taplytics && is.object(window.Taplytics._in)
            };
            Taplytics.prototype.identify = function(identify) {
                var userId = identify.userId();
                var attrs = identify.traits() || {};
                if (userId) attrs.id = userId;
                if (keys(attrs).length) {
                    push("identify", attrs)
                }
            };
            Taplytics.prototype.group = function(group) {
                var attrs = {};
                var groupId = group.groupId();
                var traits = group.traits();
                var user = this.analytics.user();
                var userId = user.id();
                if (groupId) attrs.groupId = groupId;
                if (traits) attrs.groupTraits = traits;
                if (userId) attrs.id = userId;
                if (keys(attrs).length) push("identify", attrs)
            };
            Taplytics.prototype.track = function(track) {
                var properties = track.properties() || {};
                var total = track.revenue() || track.total() || 0;
                push("track", track.event(), total, properties)
            };
            Taplytics.prototype.page = function(page) {
                var category = page.category() || undefined;
                var name = page.fullName() || undefined;
                var properties = page.properties() || {};
                push("page", category, name, properties)
            };
            Taplytics.prototype.reset = function() {
                push("reset")
            }
        }, {
            "@ndhoule/keys": 13,
            "@segment/analytics.js-integration": 288,
            "global-queue": 386,
            is: 392
        }],
        288: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 289,
            "./statics": 290,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 292,
            dup: 35,
            "slug-component": 427
        }],
        289: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 291,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        290: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        291: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        292: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 293,
            _process: 412,
            dup: 39
        }],
        293: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        294: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var push = require("global-queue")("_tsq");
            var slug = require("slug-component");
            var Tapstream = module.exports = integration("Tapstream").assumesPageview().global("_tsq").option("accountName", "").option("trackAllPages", true).option("trackNamedPages", true).option("trackCategorizedPages", true).tag('<script src="//cdn.tapstream.com/static/js/tapstream.js">');
            Tapstream.prototype.initialize = function() {
                window._tsq = window._tsq || [];
                push("setAccountName", this.options.accountName);
                this.load(this.ready)
            };
            Tapstream.prototype.loaded = function() {
                return !!(window._tsq && window._tsq.push !== Array.prototype.push)
            };
            Tapstream.prototype.page = function(page) {
                var category = page.category();
                var opts = this.options;
                var name = page.fullName();
                if (opts.trackAllPages) {
                    this.track(page.track())
                }
                if (name && opts.trackNamedPages) {
                    this.track(page.track(name))
                }
                if (category && opts.trackCategorizedPages) {
                    this.track(page.track(category))
                }
            };
            Tapstream.prototype.track = function(track) {
                var props = track.properties();
                push("fireHit", slug(track.event()), [props.url])
            }
        }, {
            "@segment/analytics.js-integration": 295,
            "global-queue": 386,
            "slug-component": 427
        }],
        295: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 296,
            "./statics": 297,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 299,
            dup: 35,
            "slug-component": 427
        }],
        296: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 298,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        297: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        298: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        299: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 300,
            _process: 412,
            dup: 39
        }],
        300: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        301: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var defaults = require("@ndhoule/defaults");
            var foldl = require("@ndhoule/foldl");
            var each = require("component-each");
            var get = require("obj-case");
            var Track = require("segmentio-facade").Track;
            var extend = require("@ndhoule/extend");
            var TwitterAds = module.exports = integration("Twitter Ads").option("page", "").option("universalTagPixelId", "").option("identifier", "productId").tag("singleTag", '<img src="//analytics.twitter.com/i/adsct?txn_id={{ pixelId }}&p_id=Twitter&tw_sale_amount={{ revenue }}&tw_order_quantity={{ quantity }}"/>').tag("universalTag", '<script src="//static.ads-twitter.com/uwt.js">').mapping("events");
            TwitterAds.prototype.initialize = function() {
                var self = this;
                if (this.options.universalTagPixelId) {
                    (function(e, t, n, s, u, a) {
                        e.twq || (s = e.twq = function() {
                            s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments)
                        }, s.version = "1.1", s.queue = [])
                    })(window, document, "script");
                    this.load("universalTag", function() {
                        window.twq("init", self.options.universalTagPixelId);
                        self.ready()
                    })
                } else {
                    this.ready()
                }
            };
            TwitterAds.prototype.page = function(page) {
                if (this.options.universalTagPixelId) {
                    window.twq("track", "PageView")
                }
                if (this.options.page) {
                    this.load("singleTag", {
                        pixelId: this.options.page,
                        revenue: 0,
                        quantity: 0
                    })
                }
            };
            TwitterAds.prototype.track = function(track) {
                this.fireLegacyConversionTags(track)
            };
            TwitterAds.prototype.productsSearched = function(track) {
                this.fireLegacyConversionTags(track);
                if (this.options.universalTagPixelId) {
                    var payload = setStatus(track.properties());
                    window.twq("track", "Search", payload)
                }
            };
            TwitterAds.prototype.productViewed = function(product) {
                this.fireLegacyConversionTags(product);
                if (this.options.universalTagPixelId) {
                    var props = product.properties();
                    var identifier = this.options.identifier;
                    var payload = {
                        content_ids: [product[identifier]()],
                        content_type: "product",
                        content_name: product.name(),
                        content_category: product.category()
                    };
                    payload = extend(payload, setStatus(props));
                    window.twq("track", "ViewContent", payload)
                }
            };
            TwitterAds.prototype.productAdded = function(product) {
                this.fireLegacyConversionTags(product);
                if (this.options.universalTagPixelId) {
                    var props = product.properties();
                    var identifier = this.options.identifier;
                    var payload = {
                        content_ids: [product[identifier]()],
                        content_type: "product",
                        content_name: product.name()
                    };
                    payload = extend(payload, setStatus(props));
                    window.twq("track", "AddToCart", payload)
                }
            };
            TwitterAds.prototype.orderCompleted = function(track) {
                var identifier = this.options.identifier;
                var sumOfQuantities = foldl(function(cartQuantity, product) {
                    return cartQuantity + (get(product, "quantity") || 0)
                }, 0, track.products());
                this.fireLegacyConversionTags(track, {
                    quantity: sumOfQuantities
                });
                if (this.options.universalTagPixelId) {
                    var payload = {
                        currency: track.currency(),
                        content_type: "product",
                        order_id: track.orderId(),
                        num_items: sumOfQuantities.toString()
                    };
                    if (track.revenue()) payload.value = track.revenue().toFixed(2);
                    payload = extend(payload, setStatus(track.properties()));
                    var content = foldl(function(ret, item) {
                        var product = new Track({
                            properties: item
                        });
                        var contentId = product[identifier]();
                        ret.ids.push(contentId);
                        ret.names.push(product.name());
                        return ret
                    }, {
                        ids: [],
                        names: []
                    }, track.products());
                    payload.content_ids = content.ids.sort();
                    payload.content_name = content.names.sort().join(", ");
                    window.twq("track", "Purchase", payload)
                }
            };
            TwitterAds.prototype.productAddedToWishlist = function(product) {
                this.fireLegacyConversionTags(product);
                if (this.options.universalTagPixelId) {
                    var props = product.properties();
                    var identifier = this.options.identifier;
                    var payload = {
                        content_name: product.name(),
                        content_category: product.category(),
                        content_ids: [product[identifier]()]
                    };
                    payload = extend(payload, setStatus(props));
                    window.twq("track", "AddToWishlist", payload)
                }
            };
            TwitterAds.prototype.checkoutStarted = function(track) {
                var sumOfQuantities = foldl(function(cartQuantity, product) {
                    return cartQuantity + (get(product, "quantity") || 0)
                }, 0, track.products());
                this.fireLegacyConversionTags(track, {
                    quantity: sumOfQuantities
                });
                if (this.options.universalTagPixelId) {
                    var identifier = this.options.identifier;
                    var content = foldl(function(ret, item) {
                        var product = new Track({
                            properties: item
                        });
                        var contentId = product[identifier]();
                        ret.ids.push(contentId);
                        ret.names.push(product.name());
                        ret.categories.push(product.category());
                        return ret
                    }, {
                        ids: [],
                        names: [],
                        categories: []
                    }, track.products());
                    var payload = {
                        content_ids: content.ids.sort(),
                        content_name: content.names.sort().join(", "),
                        content_category: content.categories.join(", ")
                    };
                    payload = extend(payload, setStatus(track.properties()));
                    window.twq("track", "InitiateCheckout", payload)
                }
            };
            TwitterAds.prototype.paymentInfoEntered = function(track) {
                this.fireLegacyConversionTags(track);
                var payload = extend({}, setStatus(track.properties()));
                if (this.options.universalTagPixelId) window.twq("track", "AddPaymentInfo", payload)
            };
            TwitterAds.prototype.fireLegacyConversionTags = function(track, override) {
                var events = this.events(track.event());
                var self = this;
                each(events, function(pixelId) {
                    var tagParams = {
                        pixelId: pixelId,
                        quantity: track.proxy("properties.quantity") || 0,
                        revenue: track.revenue() || 0
                    };
                    if (override) tagParams = defaults(override, tagParams);
                    self.load("singleTag", tagParams)
                })
            };

            function setStatus(properties) {
                return properties.status ? {
                    status: properties.status
                } : {}
            }
        }, {
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "@ndhoule/foldl": 11,
            "@segment/analytics.js-integration": 338,
            "component-each": 371,
            "obj-case": 407,
            "segmentio-facade": 421
        }],
        302: [function(require, module, exports) {
            "use strict";
            var alias = require("@segment/alias");
            var convertDates = require("@segment/convert-dates");
            var integration = require("@segment/analytics.js-integration");
            var push = require("global-queue")("UserVoice");
            var unix = require("to-unix-timestamp");
            var UserVoice = module.exports = integration("UserVoice").assumesPageview().global("UserVoice").global("showClassicWidget").option("apiKey", "").option("classic", false).option("forumId", null).option("showWidget", true).option("mode", "contact").option("accentColor", "#448dd6").option("screenshotEnabled", true).option("smartvote", true).option("trigger", null).option("triggerPosition", "bottom-right").option("triggerColor", "#ffffff").option("triggerBackgroundColor", "rgba(46, 49, 51, 0.6)").option("classicMode", "full").option("primaryColor", "#cc6d00").option("linkColor", "#007dbf").option("defaultMode", "support").option("tabLabel", "Feedback & Support").option("tabColor", "#cc6d00").option("tabPosition", "middle-right").option("tabInverted", false).option("customTicketFields", {}).tag('<script src="//widget.uservoice.com/{{ apiKey }}.js">');
            UserVoice.on("construct", function(integration) {
                if (!integration.options.classic) return;
                integration.group = undefined;
                integration.identify = integration.identifyClassic;
                integration.initialize = integration.initializeClassic
            });
            UserVoice.prototype.initialize = function() {
                var options = this.options;
                var opts = formatOptions(options);
                push("set", opts);
                push("autoprompt", {});
                if (options.showWidget) {
                    if (options.trigger) {
                        push("addTrigger", options.trigger, opts)
                    } else {
                        push("addTrigger", opts)
                    }
                }
                this.load(this.ready)
            };
            UserVoice.prototype.loaded = function() {
                return !!(window.UserVoice && window.UserVoice.push !== Array.prototype.push)
            };
            UserVoice.prototype.identify = function(identify) {
                var traits = identify.traits({
                    created: "created_at"
                });
                traits = convertDates(traits, unix);
                push("identify", traits)
            };
            UserVoice.prototype.group = function(group) {
                var traits = group.traits({
                    created: "created_at"
                });
                traits = convertDates(traits, unix);
                push("identify", {
                    account: traits
                })
            };
            UserVoice.prototype.initializeClassic = function() {
                var options = this.options;
                window.showClassicWidget = showClassicWidget;
                if (options.showWidget) showClassicWidget("showTab", formatClassicOptions(options));
                this.load(this.ready)
            };
            UserVoice.prototype.identifyClassic = function(identify) {
                push("setCustomFields", identify.traits())
            };

            function formatOptions(options) {
                return alias(options, {
                    forumId: "forum_id",
                    accentColor: "accent_color",
                    smartvote: "smartvote_enabled",
                    triggerColor: "trigger_color",
                    triggerBackgroundColor: "trigger_background_color",
                    triggerPosition: "trigger_position",
                    screenshotEnabled: "screenshot_enabled",
                    customTicketFields: "ticket_custom_fields"
                })
            }

            function formatClassicOptions(options) {
                return alias(options, {
                    forumId: "forum_id",
                    classicMode: "mode",
                    primaryColor: "primary_color",
                    tabPosition: "tab_position",
                    tabColor: "tab_color",
                    linkColor: "link_color",
                    defaultMode: "default_mode",
                    tabLabel: "tab_label",
                    tabInverted: "tab_inverted"
                })
            }

            function showClassicWidget(type, options) {
                type = type || "showLightbox";
                push(type, "classic_widget", options)
            }
        }, {
            "@segment/alias": 19,
            "@segment/analytics.js-integration": 303,
            "@segment/convert-dates": 350,
            "global-queue": 386,
            "to-unix-timestamp": 437
        }],
        303: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 304,
            "./statics": 305,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 307,
            dup: 35,
            "slug-component": 427
        }],
        304: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 306,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        305: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        306: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        307: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 308,
            _process: 412,
            dup: 39
        }],
        308: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        309: [function(require, module, exports) {
            var each = require("component-each");
            var integration = require("@segment/analytics.js-integration");
            var tick = require("next-tick");
            var VWO = module.exports = integration("Visual Website Optimizer").global("_vis_opt_queue").global("_vis_opt_revenue_conversion").global("_vwo_exp").global("_vwo_exp_ids").option("accountId").option("useAsyncSmartCode", false).option("settingsTolerance", 2e3).option("libraryTolerance", 2500).option("useExistingJQuery", false).option("replay", true).option("listen", false).option("experimentNonInteraction", false);
            var integrationContext = {
                name: "visual-website-optimizer",
                version: "1.0.0"
            };
            VWO.prototype.initialize = function() {
                if (this.options.useAsyncSmartCode) {
                    var account_id = this.options.accountId;
                    var settings_tolerance = this.options.settingsTolerance;
                    var library_tolerance = this.options.libraryTolerance;
                    var use_existing_jquery = this.options.useExistingJQuery;
                    window._vwo_code = function() {
                        f = false, d = document;
                        return {
                            use_existing_jquery: function() {
                                return use_existing_jquery
                            },
                            library_tolerance: function() {
                                return library_tolerance
                            },
                            finish: function() {
                                if (!f) {
                                    f = true;
                                    var a = d.getElementById("_vis_opt_path_hides");
                                    if (a) a.parentNode.removeChild(a)
                                }
                            },
                            finished: function() {
                                return f
                            },
                            load: function(a) {
                                var b = d.createElement("script");
                                b.src = a;
                                b.type = "text/javascript";
                                b.innerText;
                                b.onerror = function() {
                                    _vwo_code.finish()
                                };
                                d.getElementsByTagName("head")[0].appendChild(b)
                            },
                            init: function() {
                                settings_timer = setTimeout("_vwo_code.finish()", settings_tolerance);
                                var a = d.createElement("style"),
                                    b = "body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}",
                                    h = d.getElementsByTagName("head")[0];
                                a.setAttribute("id", "_vis_opt_path_hides");
                                a.setAttribute("type", "text/css");
                                if (a.styleSheet) a.styleSheet.cssText = b;
                                else a.appendChild(d.createTextNode(b));
                                h.appendChild(a);
                                this.load("//dev.visualwebsiteoptimizer.com/j.php?a=" + account_id + "&u=" + encodeURIComponent(d.URL) + "&r=" + Math.random());
                                return settings_timer
                            }
                        }
                    }();
                    _vwo_settings_timer = _vwo_code.init()
                }
                var self = this;
                if (this.options.replay) {
                    tick(function() {
                        self.replay()
                    })
                }
                if (this.options.listen) {
                    tick(function() {
                        self.roots()
                    })
                }
                if (this.options.useAsyncSmartCode) {
                    enqueue(function() {
                        self.ready()
                    })
                } else {
                    self.ready()
                }
            };
            VWO.prototype.orderCompleted = function(track) {
                var total = track.total() || track.revenue() || 0;
                enqueue(function() {
                    window._vis_opt_revenue_conversion(total)
                })
            };
            VWO.prototype.replay = function() {
                var analytics = this.analytics;
                experiments(function(err, traits) {
                    if (traits) analytics.identify(traits)
                })
            };
            VWO.prototype.roots = function() {
                var analytics = this.analytics;
                var self = this;
                rootExperiments(function(err, data) {
                    each(data, function(experimentId, variationName) {
                        var props = {
                            experimentId: experimentId,
                            variationName: variationName
                        };
                        if (self.options.experimentNonInteraction) props.nonInteraction = 1;
                        analytics.track("Experiment Viewed", props, {
                            context: {
                                integration: integrationContext
                            }
                        })
                    })
                })
            };

            function rootExperiments(fn) {
                enqueue(function() {
                    var data = {};
                    var experimentIds = window._vwo_exp_ids;
                    if (!experimentIds) return fn();
                    each(experimentIds, function(experimentId) {
                        var variationName = variation(experimentId);
                        if (variationName) data[experimentId] = variationName
                    });
                    fn(null, data)
                })
            }

            function experiments(fn) {
                enqueue(function() {
                    var data = {};
                    var ids = window._vwo_exp_ids;
                    if (!ids) return fn();
                    each(ids, function(id) {
                        var name = variation(id);
                        if (name) data["Experiment: " + id] = name
                    });
                    fn(null, data)
                })
            }

            function enqueue(fn) {
                window._vis_opt_queue = window._vis_opt_queue || [];
                window._vis_opt_queue.push(fn)
            }

            function variation(id) {
                var experiments = window._vwo_exp;
                if (!experiments) return null;
                var experiment = experiments[id];
                var variationId = experiment.combination_chosen;
                if (experiment.ready && !window._vis_debug && variationId) {
                    return experiment.comb_n[variationId]
                }
                return null
            }
        }, {
            "@segment/analytics.js-integration": 338,
            "component-each": 371,
            "next-tick": 406
        }],
        310: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var useHttps = require("use-https");
            var remove = require("obj-case").del;
            var WebEngage = module.exports = integration("WebEngage").readyOnInitialize().global("webengage").option("licenseCode", "").tag("http", '<script src="http://cdn.widgets.webengage.com/js/webengage-min-v-6.0.js">').tag("https", '<script src="https://ssl.widgets.webengage.com/js/webengage-min-v-6.0.js">');
            WebEngage.prototype.initialize = function() {
                ! function(e, t, n) {
                    function o(e, t) {
                        e[t[t.length - 1]] = function() {
                            r.__queue.push([t.join("."), arguments])
                        }
                    }
                    var i, s, r = e[n],
                        g = " ",
                        l = "init options track screen onReady".split(g),
                        a = "feedback survey notification".split(g),
                        c = "options render clear abort".split(g),
                        p = "Open Close Submit Complete View Click".split(g),
                        u = "identify login logout setAttribute".split(g);
                    if (!r || !r.__v) {
                        for (e[n] = r = {
                                __queue: [],
                                __v: "6.0",
                                user: {}
                            }, i = 0; i < l.length; i++) o(r, [l[i]]);
                        for (i = 0; i < a.length; i++) {
                            for (r[a[i]] = {}, s = 0; s < c.length; s++) o(r[a[i]], [a[i], c[s]]);
                            for (s = 0; s < p.length; s++) o(r[a[i]], [a[i], "on" + p[s]])
                        }
                        for (i = 0; i < u.length; i++) o(r.user, ["user", u[i]])
                    }
                }(window, document, "webengage");
                window.webengage.ixP = "Segment";
                window.webengage.init(this.options.licenseCode);
                var name = useHttps() ? "https" : "http";
                this.load(name, this.ready)
            };
            WebEngage.prototype.loaded = function() {
                return !!window.webengage
            };
            WebEngage.prototype.identify = function(identify) {
                var traits = identify.traits();
                var id = identify.userId();
                var mappedTraits = mapTraits(traits);
                if (identify.firstName()) mappedTraits.we_first_name = identify.firstName();
                if (identify.lastName()) mappedTraits.we_last_name = identify.lastName();
                remove(mappedTraits, "name");
                remove(mappedTraits, "firstName");
                remove(mappedTraits, "lastName");
                if (id) window.webengage.user.login(id);
                if (traits) window.webengage.user.setAttribute(mappedTraits)
            };
            WebEngage.prototype.track = function(track) {
                var event = track.event();
                var properties = track.properties();
                window.webengage.track(event, properties)
            };
            WebEngage.prototype.page = function(page) {
                var name = page.name() || "";
                var properties = page.properties();
                window.webengage.screen(name, properties)
            };

            function mapTraits(traits) {
                var aliases = {
                    email: "we_email",
                    gender: "we_gender",
                    birthday: "we_birth_date",
                    phone: "we_phone",
                    company: "we_company"
                };
                var mapped = {};
                for (var k in traits) {
                    if (aliases.hasOwnProperty(k)) {
                        mapped[aliases[k]] = traits[k]
                    } else {
                        mapped[k] = traits[k]
                    }
                }
                if (Object.prototype.toString.call(mapped.we_birth_date) === "[object Date]") {
                    var date = mapped.we_birth_date;
                    mapped.we_birth_date = date.getUTCFullYear() + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate())
                }
                return mapped
            }

            function pad(number) {
                return number < 10 ? "0" + number : number
            }
        }, {
            "@segment/analytics.js-integration": 311,
            "obj-case": 407,
            "use-https": 441
        }],
        311: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 312,
            "./statics": 313,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 315,
            dup: 35,
            "slug-component": 427
        }],
        312: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 314,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        313: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        314: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        315: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 316,
            _process: 412,
            dup: 39
        }],
        316: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        317: [function(require, module, exports) {
            "use strict";
            var each = require("component-each");
            var integration = require("@segment/analytics.js-integration");
            var toSnakeCase = require("to-snake-case");
            var is = require("is");
            var foldl = require("@ndhoule/foldl");
            var json = require("json3");
            var isostring = require("isostring");
            var time = require("unix-time");
            var Woopra = module.exports = integration("Woopra").global("woopra").option("domain", "").option("cookieName", "wooTracker").option("cookieDomain", null).option("cookiePath", "/").option("ping", true).option("pingInterval", 12e3).option("idleTimeout", 3e5).option("downloadTracking", true).option("outgoingTracking", true).option("outgoingIgnoreSubdomain", true).option("downloadPause", 200).option("outgoingPause", 400).option("ignoreQueryUrl", true).option("hideCampaign", false).tag('<script src="//static.woopra.com/js/w.js">');
            Woopra.prototype.initialize = function() {
                (function() {
                    var i, s, z, w = window,
                        d = document,
                        a = arguments,
                        q = "script",
                        f = ["config", "track", "identify", "visit", "push", "call"],
                        c = function() {
                            var i, self = this;
                            self._e = [];
                            for (i = 0; i < f.length; i++) {
                                (function(f) {
                                    self[f] = function() {
                                        self._e.push([f].concat(Array.prototype.slice.call(arguments, 0)));
                                        return self
                                    }
                                })(f[i])
                            }
                        };
                    w._w = w._w || {};
                    for (i = 0; i < a.length; i++) {
                        w._w[a[i]] = w[a[i]] = w[a[i]] || new c
                    }
                })("woopra");
                this.load(this.ready);
                each(this.options, function(key, value) {
                    key = toSnakeCase(key);
                    if (value == null) return;
                    if (value === "") return;
                    window.woopra.config(key, value)
                })
            };
            Woopra.prototype.loaded = function() {
                return !!(window.woopra && window.woopra.loaded)
            };
            Woopra.prototype.page = function(page) {
                var props = page.properties();
                var name = page.fullName();
                if (name) props.title = name;
                window.woopra.track("pv", props)
            };
            Woopra.prototype.identify = function(identify) {
                var traits = identify.traits();
                each(traits, function(key, val) {
                    if (isostring(val) || is.date(val)) {
                        traits[key] = time(val) * 1e3
                    }
                });
                if (identify.name()) traits.name = identify.name();
                window.woopra.identify(traits).push()
            };
            Woopra.prototype.track = function(track) {
                window.woopra.track(track.event(), stringifyNested(track.properties()))
            };

            function stringifyNested(obj) {
                return foldl(function(results, value, key) {
                    if (is.array(obj[key])) {
                        results[key] = json.stringify(obj[key])
                    } else {
                        results[key] = obj[key]
                    }
                    return results
                }, {}, obj)
            }
        }, {
            "@ndhoule/foldl": 11,
            "@segment/analytics.js-integration": 318,
            "component-each": 371,
            is: 392,
            isostring: 395,
            json3: 396,
            "to-snake-case": 434,
            "unix-time": 440
        }],
        318: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 319,
            "./statics": 320,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 322,
            dup: 35,
            "slug-component": 427
        }],
        319: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 321,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        320: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        321: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        322: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 323,
            _process: 412,
            dup: 39
        }],
        323: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        324: [function(require, module, exports) {
            "use strict";
            var foldl = require("@ndhoule/foldl");
            var is = require("is");
            var integration = require("@segment/analytics.js-integration");
            var omit = require("omit");
            var Wootric = module.exports = integration("Wootric").assumesPageview().option("accountToken", "").global("wootricSettings").global("wootric_survey_immediately").global("wootric").tag("library", '<script src="//cdn.wootric.com/wootric-sdk.js"><\/script>').tag("pixel", '<img src="//d8myem934l1zi.cloudfront.net/pixel.gif?account_token={{ accountToken }}&email={{ email }}&created_at={{ createdAt }}&url={{ url }}&random={{ cacheBuster }}">');
            Wootric.prototype.initialize = function() {
                this.lastPageTracked = null;
                window.wootricSettings = window.wootricSettings || {};
                window.wootricSettings.account_token = this.options.accountToken;
                var self = this;
                this.load("library", function() {
                    self.ready()
                })
            };
            Wootric.prototype.loaded = function() {
                return !!window.wootric
            };
            Wootric.prototype.identify = function(identify) {
                var userId = identify.userId();
                var anonymousId = identify.anonymousId();
                var traits = identify.traits();
                var email = identify.email();
                var createdAt = identify.created();
                var language = traits.language;
                window.wootricSettings.segment_user_id = userId || anonymousId;
                if (language) window.wootricSettings.language = language;
                survey(email, createdAt, traits, null)
            };
            Wootric.prototype.track = function(track) {
                var properties = track.properties();
                var email = track.email();
                var eventName = track.event();
                survey(email, null, properties, eventName)
            };
            Wootric.prototype.page = function(page) {
                if (this.lastPageTracked === window.location) {
                    return
                }
                this.lastPageTracked = window.location;
                var wootricSettings = window.wootricSettings;
                this.load("pixel", {
                    accountToken: this.options.accountToken,
                    email: encodeURIComponent(wootricSettings.email),
                    createdAt: wootricSettings.created_at,
                    url: encodeURIComponent(page.url()),
                    cacheBuster: Math.random()
                })
            };

            function convertKey(key, value) {
                if (is.date(value) && !key.endsWith("_date")) return key + "_date";
                return key
            }

            function convertDate(date) {
                return Math.round(date.getTime() / 1e3)
            }
            if (!String.prototype.endsWith) {
                String.prototype.endsWith = function(searchString, position) {
                    var subjectString = this.toString();
                    if (typeof position !== "number" || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
                        position = subjectString.length
                    }
                    position -= searchString.length;
                    var lastIndex = subjectString.lastIndexOf(searchString, position);
                    return lastIndex !== -1 && lastIndex === position
                }
            }

            function survey(email, createdAt, properties, eventName) {
                if (createdAt && createdAt.getTime) window.wootricSettings.created_at = Math.round(createdAt.getTime() / 1e3);
                window.wootricSettings.email = email;
                window.wootricSettings.event_name = eventName;
                var newProperties = foldl(function(results, value, key) {
                    results[convertKey(key, value)] = is.date(value) ? convertDate(value) : value;
                    return results
                }, {}, properties);
                window.wootricSettings.properties = omit(["created", "createdAt", "email"], newProperties);
                window.wootric("run")
            }
        }, {
            "@ndhoule/foldl": 11,
            "@segment/analytics.js-integration": 325,
            is: 392,
            omit: 409
        }],
        325: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 326,
            "./statics": 327,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 329,
            dup: 35,
            "slug-component": 427
        }],
        326: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 328,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        327: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        328: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        329: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 330,
            _process: 412,
            dup: 39
        }],
        330: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        331: [function(require, module, exports) {
            "use strict";
            var bind = require("component-bind");
            var integration = require("@segment/analytics.js-integration");
            var tick = require("next-tick");
            var when = require("do-when");
            var Yandex = module.exports = integration("Yandex Metrica").assumesPageview().global("yandex_metrika_callbacks").global("Ya").option("type", 0).option("counterId", null).option("clickmap", false).option("webvisor", false).option("trackHash", false).option("trackLinks", false).option("accurateTrackBounce", false).tag('<script src="//mc.yandex.ru/metrika/watch.js">');
            Yandex.prototype.initialize = function() {
                var id = this.options.counterId;
                var type = this.options.type;
                var clickmap = this.options.clickmap;
                var webvisor = this.options.webvisor;
                var trackHash = this.options.trackHash;
                var trackLinks = this.options.trackLinks;
                var accurateTrackBounce = this.options.accurateTrackBounce;
                push(function() {
                    window["yaCounter" + id] = new window.Ya.Metrika({
                        id: id,
                        type: type,
                        clickmap: clickmap,
                        webvisor: webvisor,
                        trackHash: trackHash,
                        trackLinks: trackLinks,
                        accurateTrackBounce: accurateTrackBounce
                    })
                });
                var loaded = bind(this, this.loaded);
                var ready = this.ready;
                this.load(function() {
                    when(loaded, function() {
                        tick(ready)
                    })
                })
            };
            Yandex.prototype.loaded = function() {
                return !!(window.Ya && window.Ya.Metrika)
            };

            function push(callback) {
                window.yandex_metrika_callbacks = window.yandex_metrika_callbacks || [];
                window.yandex_metrika_callbacks.push(callback)
            }
        }, {
            "@segment/analytics.js-integration": 332,
            "component-bind": 365,
            "do-when": 383,
            "next-tick": 406
        }],
        332: [function(require, module, exports) {
            arguments[4][35][0].apply(exports, arguments)
        }, {
            "./protos": 333,
            "./statics": 334,
            "@ndhoule/clone": 5,
            "@ndhoule/defaults": 6,
            "@ndhoule/extend": 10,
            "component-bind": 365,
            debug: 336,
            dup: 35,
            "slug-component": 427
        }],
        333: [function(require, module, exports) {
            arguments[4][36][0].apply(exports, arguments)
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 335,
            "component-emitter": 373,
            dup: 36,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        334: [function(require, module, exports) {
            arguments[4][37][0].apply(exports, arguments)
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384,
            dup: 37
        }],
        335: [function(require, module, exports) {
            arguments[4][38][0].apply(exports, arguments)
        }, {
            dup: 38
        }],
        336: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 337,
            _process: 412,
            dup: 39
        }],
        337: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        338: [function(require, module, exports) {
            "use strict";
            var bind = require("component-bind");
            var debug = require("debug");
            var defaults = require("@ndhoule/defaults");
            var extend = require("extend");
            var slug = require("slug-component");
            var protos = require("./protos");
            var statics = require("./statics");

            function createIntegration(name) {
                function Integration(options) {
                    if (options && options.addIntegration) {
                        return options.addIntegration(Integration)
                    }
                    this.debug = debug("analytics:integration:" + slug(name));
                    var clonedOpts = {};
                    extend(true, clonedOpts, options);
                    this.options = defaults(clonedOpts || {}, this.defaults);
                    this._queue = [];
                    this.once("ready", bind(this, this.flush));
                    Integration.emit("construct", this);
                    this.ready = bind(this, this.ready);
                    this._wrapInitialize();
                    this._wrapPage();
                    this._wrapTrack()
                }
                Integration.prototype.defaults = {};
                Integration.prototype.globals = [];
                Integration.prototype.templates = {};
                Integration.prototype.name = name;
                extend(Integration, statics);
                extend(Integration.prototype, protos);
                return Integration
            }
            module.exports = createIntegration
        }, {
            "./protos": 339,
            "./statics": 340,
            "@ndhoule/defaults": 6,
            "component-bind": 365,
            debug: 341,
            extend: 343,
            "slug-component": 427
        }],
        339: [function(require, module, exports) {
            "use strict";
            var Emitter = require("component-emitter");
            var after = require("@ndhoule/after");
            var each = require("@ndhoule/each");
            var events = require("analytics-events");
            var every = require("@ndhoule/every");
            var fmt = require("@segment/fmt");
            var foldl = require("@ndhoule/foldl");
            var is = require("is");
            var loadIframe = require("load-iframe");
            var loadScript = require("@segment/load-script");
            var nextTick = require("next-tick");
            var normalize = require("to-no-case");
            var has = Object.prototype.hasOwnProperty;
            var noop = function noop() {};
            var onerror = window.onerror;
            var onload = null;
            Emitter(exports);
            exports.initialize = function() {
                var ready = this.ready;
                nextTick(ready)
            };
            exports.loaded = function() {
                return false
            };
            exports.page = function(page) {};
            exports.track = function(track) {};
            exports.map = function(options, key) {
                var normalizedComparator = normalize(key);
                var mappingType = getMappingType(options);
                if (mappingType === "unknown") {
                    return []
                }
                return foldl(function(matchingValues, val, key) {
                    var compare;
                    var result;
                    if (mappingType === "map") {
                        compare = key;
                        result = val
                    }
                    if (mappingType === "array") {
                        compare = val;
                        result = val
                    }
                    if (mappingType === "mixed") {
                        compare = val.key;
                        result = val.value
                    }
                    if (normalize(compare) === normalizedComparator) {
                        matchingValues.push(result)
                    }
                    return matchingValues
                }, [], options)
            };
            exports.invoke = function(method) {
                if (!this[method]) return;
                var args = Array.prototype.slice.call(arguments, 1);
                if (!this._ready) return this.queue(method, args);
                this.debug("%s with %o", method, args);
                return this[method].apply(this, args)
            };
            exports.queue = function(method, args) {
                this._queue.push({
                    method: method,
                    args: args
                })
            };
            exports.flush = function() {
                this._ready = true;
                var self = this;
                each(function(call) {
                    self[call.method].apply(self, call.args)
                }, this._queue);
                this._queue.length = 0
            };
            exports.reset = function() {
                for (var i = 0; i < this.globals.length; i++) {
                    window[this.globals[i]] = undefined
                }
                window.onerror = onerror;
                window.onload = onload
            };
            exports.load = function(name, locals, callback) {
                if (typeof name === "function") {
                    callback = name;
                    locals = null;
                    name = null
                }
                if (name && typeof name === "object") {
                    callback = locals;
                    locals = name;
                    name = null
                }
                if (typeof locals === "function") {
                    callback = locals;
                    locals = null
                }
                name = name || "library";
                locals = locals || {};
                locals = this.locals(locals);
                var template = this.templates[name];
                if (!template) throw new Error(fmt('template "%s" not defined.', name));
                var attrs = render(template, locals);
                callback = callback || noop;
                var self = this;
                var el;
                switch (template.type) {
                    case "img":
                        attrs.width = 1;
                        attrs.height = 1;
                        el = loadImage(attrs, callback);
                        break;
                    case "script":
                        el = loadScript(attrs, function(err) {
                            if (!err) return callback();
                            self.debug('error loading "%s" error="%s"', self.name, err)
                        });
                        delete attrs.src;
                        each(function(val, key) {
                            el.setAttribute(key, val)
                        }, attrs);
                        break;
                    case "iframe":
                        el = loadIframe(attrs, callback);
                        break;
                    default:
                }
                return el
            };
            exports.locals = function(locals) {
                locals = locals || {};
                var cache = Math.floor((new Date).getTime() / 36e5);
                if (!locals.hasOwnProperty("cache")) locals.cache = cache;
                each(function(val, key) {
                    if (!locals.hasOwnProperty(key)) locals[key] = val
                }, this.options);
                return locals
            };
            exports.ready = function() {
                this.emit("ready")
            };
            exports._wrapInitialize = function() {
                var initialize = this.initialize;
                this.initialize = function() {
                    this.debug("initialize");
                    this._initialized = true;
                    var ret = initialize.apply(this, arguments);
                    this.emit("initialize");
                    return ret
                }
            };
            exports._wrapPage = function() {
                if (this._assumesPageview) return this.page = after(2, this.page)
            };
            exports._wrapTrack = function() {
                var t = this.track;
                this.track = function(track) {
                    var event = track.event();
                    var called;
                    var ret;
                    for (var method in events) {
                        if (has.call(events, method)) {
                            var regexp = events[method];
                            if (!this[method]) continue;
                            if (!regexp.test(event)) continue;
                            ret = this[method].apply(this, arguments);
                            called = true;
                            break
                        }
                    }
                    if (!called) ret = t.apply(this, arguments);
                    return ret
                }
            };

            function getMappingType(mapping) {
                if (is.array(mapping)) {
                    return every(isMixed, mapping) ? "mixed" : "array"
                }
                if (is.object(mapping)) return "map";
                return "unknown"
            }

            function isMixed(item) {
                if (!is.object(item)) return false;
                if (!is.string(item.key)) return false;
                if (!has.call(item, "value")) return false;
                return true
            }

            function loadImage(attrs, fn) {
                fn = fn || function() {};
                var img = new Image;
                img.onerror = error(fn, "failed to load pixel", img);
                img.onload = function() {
                    fn()
                };
                img.src = attrs.src;
                img.width = 1;
                img.height = 1;
                return img
            }

            function error(fn, message, img) {
                return function(e) {
                    e = e || window.event;
                    var err = new Error(message);
                    err.event = e;
                    err.source = img;
                    fn(err)
                }
            }

            function render(template, locals) {
                return foldl(function(attrs, val, key) {
                    attrs[key] = val.replace(/\{\{\ *(\w+)\ *\}\}/g, function(_, $1) {
                        return locals[$1]
                    });
                    return attrs
                }, {}, template.attrs)
            }
        }, {
            "@ndhoule/after": 3,
            "@ndhoule/each": 8,
            "@ndhoule/every": 9,
            "@ndhoule/foldl": 11,
            "@segment/fmt": 351,
            "@segment/load-script": 355,
            "analytics-events": 361,
            "component-emitter": 373,
            is: 392,
            "load-iframe": 400,
            "next-tick": 406,
            "to-no-case": 433
        }],
        340: [function(require, module, exports) {
            "use strict";
            var Emitter = require("component-emitter");
            var domify = require("domify");
            var each = require("@ndhoule/each");
            var includes = require("@ndhoule/includes");
            Emitter(exports);
            exports.option = function(key, value) {
                this.prototype.defaults[key] = value;
                return this
            };
            exports.mapping = function(name) {
                this.option(name, []);
                this.prototype[name] = function(key) {
                    return this.map(this.options[name], key)
                };
                return this
            };
            exports.global = function(key) {
                this.prototype.globals.push(key);
                return this
            };
            exports.assumesPageview = function() {
                this.prototype._assumesPageview = true;
                return this
            };
            exports.readyOnLoad = function() {
                this.prototype._readyOnLoad = true;
                return this
            };
            exports.readyOnInitialize = function() {
                this.prototype._readyOnInitialize = true;
                return this
            };
            exports.tag = function(name, tag) {
                if (tag == null) {
                    tag = name;
                    name = "library"
                }
                this.prototype.templates[name] = objectify(tag);
                return this
            };

            function objectify(str) {
                str = str.replace(' src="', ' data-src="');
                var el = domify(str);
                var attrs = {};
                each(function(attr) {
                    var name = attr.name === "data-src" ? "src" : attr.name;
                    if (!includes(attr.name + "=", str)) return;
                    attrs[name] = attr.value
                }, el.attributes);
                return {
                    type: el.tagName.toLowerCase(),
                    attrs: attrs
                }
            }
        }, {
            "@ndhoule/each": 8,
            "@ndhoule/includes": 12,
            "component-emitter": 373,
            domify: 384
        }],
        341: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 342,
            _process: 412,
            dup: 39
        }],
        342: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        343: [function(require, module, exports) {
            "use strict";
            var hasOwn = Object.prototype.hasOwnProperty;
            var toStr = Object.prototype.toString;
            var isArray = function isArray(arr) {
                if (typeof Array.isArray === "function") {
                    return Array.isArray(arr)
                }
                return toStr.call(arr) === "[object Array]"
            };
            var isPlainObject = function isPlainObject(obj) {
                if (!obj || toStr.call(obj) !== "[object Object]") {
                    return false
                }
                var hasOwnConstructor = hasOwn.call(obj, "constructor");
                var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
                if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
                    return false
                }
                var key;
                for (key in obj) {}
                return typeof key === "undefined" || hasOwn.call(obj, key)
            };
            module.exports = function extend() {
                var options, name, src, copy, copyIsArray, clone;
                var target = arguments[0];
                var i = 1;
                var length = arguments.length;
                var deep = false;
                if (typeof target === "boolean") {
                    deep = target;
                    target = arguments[1] || {};
                    i = 2
                }
                if (target == null || typeof target !== "object" && typeof target !== "function") {
                    target = {}
                }
                for (; i < length; ++i) {
                    options = arguments[i];
                    if (options != null) {
                        for (name in options) {
                            src = target[name];
                            copy = options[name];
                            if (target !== copy) {
                                if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                                    if (copyIsArray) {
                                        copyIsArray = false;
                                        clone = src && isArray(src) ? src : []
                                    } else {
                                        clone = src && isPlainObject(src) ? src : {}
                                    }
                                    target[name] = extend(deep, clone, copy)
                                } else if (typeof copy !== "undefined") {
                                    target[name] = copy
                                }
                            }
                        }
                    }
                }
                return target
            }
        }, {}],
        344: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var Bing = module.exports = integration("Bing Ads").global("UET").global("uetq").option("tagId", "").tag('<script src="//bat.bing.com/bat.js">');
            Bing.prototype.initialize = function() {
                window.uetq = window.uetq || [];
                var self = this;
                self.load(function() {
                    var setup = {
                        ti: self.options.tagId,
                        q: window.uetq
                    };
                    window.uetq = new window.UET(setup);
                    self.ready()
                })
            };
            Bing.prototype.loaded = function() {
                return !!(window.uetq && window.uetq.push !== Array.prototype.push)
            };
            Bing.prototype.page = function() {
                window.uetq.push("pageLoad")
            };
            Bing.prototype.track = function(track) {
                var event = {
                    ea: "track",
                    el: track.event()
                };
                if (track.category()) event.ec = track.category();
                if (track.revenue()) event.gv = track.revenue();
                window.uetq.push(event)
            }
        }, {
            "@segment/analytics.js-integration": 338
        }],
        345: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var each = require("@ndhoule/each");
            var find = require("obj-case");
            var reject = require("reject");
            var extend = require("extend");
            var GoogleAdWordsNew = module.exports = integration("Google AdWords New").option("accountId", "").option("sendPageView", true).option("conversionLinker", true).option("clickConversions", []).option("pageLoadConversions", []).option("defaultPageConversion", "").option("disableAdPersonalization", false).tag('<script src="https://www.googletagmanager.com/gtag/js?id={{ accountId }}">');
            GoogleAdWordsNew.prototype.initialize = function() {
                var self = this;
                window.dataLayer = window.dataLayer || [];
                window.gtag = function() {
                    window.dataLayer.push(arguments)
                };
                var config = {};
                if (this.options.sendPageView === false) config.send_page_view = this.options.sendPageView;
                if (this.options.conversionLinker === false) config.conversion_linker = this.options.conversionLinker;
                this.load(function() {
                    window.gtag("js", new Date);
                    if (self.options.disableAdPersonalization) window.gtag("set", "allow_ad_personalization_signals", false);
                    window.gtag("config", self.options.accountId, config);
                    self.ready()
                })
            };
            GoogleAdWordsNew.prototype.loaded = function() {
                return window.dataLayer.push !== Array.prototype.push
            };
            GoogleAdWordsNew.prototype.page = function(page) {
                var self = this;
                var configs = this.options;
                var pageName = page.name();
                if (!pageName && configs.defaultPageConversion) return sendPageLoadConversion(configs.defaultPageConversion);
                var mappedConversions = matchConversion(this.options.pageLoadConversions, pageName);
                each(function(mappedConversion) {
                    sendPageLoadConversion(mappedConversion.id, mappedConversion.override)
                }, mappedConversions);

                function sendPageLoadConversion(id, override) {
                    var semanticMetadata = reject({
                        send_to: (override || configs.accountId) + "/" + id,
                        value: page.options(self.name).value,
                        currency: page.options(self.name).currency,
                        transaction_id: find(page.options(self.name), "order_id")
                    });
                    var metadata = extend(page.properties(), semanticMetadata);
                    return window.gtag("event", pageName || "conversion", metadata)
                }
            };
            GoogleAdWordsNew.prototype.track = function(track) {
                var self = this;
                var eventName = track.event();
                var mappedConversions = matchConversion(this.options.clickConversions, track.event());
                each(function(mappedConversion) {
                    var properties = track.properties({
                        orderId: "transaction_id"
                    });
                    var metadata = extend(properties, {
                        send_to: (mappedConversion.override || self.options.accountId) + "/" + mappedConversion.id
                    });
                    return window.gtag("event", eventName, metadata)
                }, mappedConversions)
            };
            GoogleAdWordsNew.prototype.orderCompleted = function(track) {
                var self = this;
                var eventName = track.event();
                var mappedConversions = matchConversion(this.options.clickConversions, track.event());
                each(function(mappedConversion) {
                    var properties = track.properties({
                        orderId: "transaction_id",
                        order_id: "transaction_id",
                        revenue: "value"
                    });
                    var metadata = extend(properties, {
                        send_to: (mappedConversion.override || self.options.accountId) + "/" + mappedConversion.id
                    });
                    return window.gtag("event", eventName, metadata)
                }, mappedConversions)
            };

            function matchConversion(mappedConversions, segmentEvent) {
                var ret = [];
                each(function(setting) {
                    var conversion = setting.value || setting;
                    if (typeof segmentEvent === "string" && segmentEvent.toLowerCase() === conversion.event.toLowerCase()) {
                        var con = {
                            id: conversion.id
                        };
                        if (conversion.accountId) con.override = conversion.accountId;
                        ret.push(con)
                    }
                }, mappedConversions);
                return ret
            }
        }, {
            "@ndhoule/each": 8,
            "@segment/analytics.js-integration": 338,
            extend: 385,
            "obj-case": 407,
            reject: 413
        }],
        346: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var Linkedin = module.exports = integration("LinkedIn Insight Tag").option("partnerId", "").tag('<script src="https://snap.licdn.com/li.lms-analytics/insight.min.js"><\/script>');
            Linkedin.prototype.initialize = function() {
                if (!this.options.partnerId) return;
                window._linkedin_data_partner_id = this.options.partnerId;
                this.load(this.ready)
            };
            Linkedin.prototype.loaded = function() {
                return window._linkedin_data_partner_id
            }
        }, {
            "@segment/analytics.js-integration": 338
        }],
        347: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var analyticsEvents = require("analytics-events");
            var Pinterest = module.exports = integration("Pinterest Tag").global("pintrk").option("tid", "").option("pinterestCustomProperties", []).option("useEnhancedMatchLoad", false).mapping("pinterestEventMapping").tag('<script src="https://s.pinimg.com/ct/core.js"><\/script>');
            Pinterest.prototype.initialize = function() {
                if (!this.options.tid) return;
                (function(e) {
                    if (!window.pintrk) {
                        window.pintrk = function() {
                            window.pintrk.queue.push(Array.prototype.slice.call(arguments))
                        };
                        var n = window.pintrk;
                        n.queue = [], n.version = "3.0"
                    }
                })();
                this.load(this.ready);
                var traits = this.analytics.user().traits();
                if (traits && traits.email && this.options.useEnhancedMatchLoad) {
                    var email = this.analytics.user().traits().email;
                    window.pintrk("load", this.options.tid, {
                        em: email
                    })
                } else {
                    window.pintrk("load", this.options.tid)
                }
                window.pintrk("page");
                this.createPropertyMapping()
            };
            Pinterest.prototype.loaded = function() {
                return !!(window.pintrk && window.pintrk.queue)
            };
            Pinterest.prototype.identify = function(identify) {
                if (identify.email()) {
                    window.pintrk("set", {
                        np: "segment",
                        em: identify.email()
                    })
                }
            };
            Pinterest.prototype.page = function(page) {
                if (page.category()) {
                    window.pintrk("track", "ViewCategory", {
                        category: page.category(),
                        name: page.name() || ""
                    })
                } else {
                    window.pintrk("track", "PageVisit", {
                        name: page.name() || ""
                    })
                }
            };
            Pinterest.prototype.track = function(track) {
                var segmentEvent = track.event();
                var pinterestEvent = this.getPinterestEvent(segmentEvent);
                var pinterestObject = this.generatePropertiesObject(track);
                if (pinterestEvent) {
                    window.pintrk("track", pinterestEvent, pinterestObject)
                } else {
                    window.pintrk("track", segmentEvent, pinterestObject)
                }
            };
            Pinterest.prototype.getPinterestEvent = function(segmentEvent) {
                for (var mappedEvent in this.options.pinterestEventMapping) {
                    if (mappedEvent.toLowerCase() === segmentEvent.toLowerCase()) {
                        return this.options.pinterestEventMapping[mappedEvent]
                    }
                }
                var eventMap = [
                    [analyticsEvents.productsSearched, "Search"],
                    [analyticsEvents.productListFiltered, "Search"],
                    [analyticsEvents.productAdded, "AddToCart"],
                    [analyticsEvents.orderCompleted, "Checkout"],
                    [analyticsEvents.videoPlaybackStarted, "WatchVideo"]
                ];
                for (var index in eventMap) {
                    if (!eventMap.hasOwnProperty(index)) continue;
                    var eventRegex = eventMap[index][0];
                    var pinterestEvent = eventMap[index][1];
                    if (eventRegex.test(segmentEvent)) {
                        return pinterestEvent
                    }
                }
            };
            Pinterest.prototype.createPropertyMapping = function() {
                this.propertyMap = {
                    query: "search_query",
                    order_id: "order_id",
                    coupon: "coupon",
                    value: "value",
                    currency: "currency"
                };
                this.productPropertyMap = {
                    name: "product_name",
                    product_id: "product_id",
                    sku: "product_id",
                    category: "product_category",
                    variant: "product_variant",
                    price: "product_price",
                    quantity: "product_quantity",
                    brand: "product_brand"
                }
            };
            Pinterest.prototype.generatePropertiesObject = function(track) {
                var pinterestProps = {};
                var trackValue;
                for (var prop in this.propertyMap) {
                    if (!this.propertyMap.hasOwnProperty(prop)) continue;
                    trackValue = track.proxy("properties." + prop);
                    if (trackValue) pinterestProps[this.propertyMap[prop]] = trackValue
                }
                var products = track.proxy("properties.products");
                var lineItemsArray;
                if (Array.isArray(products)) {
                    lineItemsArray = [];
                    for (var i = 0; i < products.length; i++) {
                        for (var productProperty in this.productPropertyMap) {
                            if (!this.productPropertyMap.hasOwnProperty(productProperty)) continue;
                            trackValue = products[i][productProperty];
                            if (trackValue) {
                                if (lineItemsArray[i] === undefined) lineItemsArray[i] = {};
                                lineItemsArray[i][this.productPropertyMap[productProperty]] = trackValue
                            }
                        }
                    }
                    if (lineItemsArray.length) pinterestProps.line_items = lineItemsArray
                } else {
                    lineItemsArray = [{}];
                    var propAdded = false;
                    for (var productProp in this.productPropertyMap) {
                        if (!this.productPropertyMap.hasOwnProperty(productProp)) continue;
                        trackValue = track.proxy("properties." + productProp);
                        if (trackValue) {
                            lineItemsArray[0][this.productPropertyMap[productProp]] = trackValue;
                            propAdded = true
                        }
                    }
                    if (propAdded) pinterestProps.line_items = lineItemsArray
                }
                var customProps = this.options.pinterestCustomProperties;
                for (var j = 0; j < customProps.length; j++) {
                    var customProperty = customProps[j];
                    trackValue = track.proxy("properties." + customProperty);
                    if (trackValue) pinterestProps[customProperty] = trackValue
                }
                return pinterestProps
            }
        }, {
            "@segment/analytics.js-integration": 338,
            "analytics-events": 361
        }],
        348: [function(require, module, exports) {
            var utf8Encode = require("utf8-encode");
            var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            module.exports = encode;

            function encode(input) {
                var output = "";
                var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
                var i = 0;
                input = utf8Encode(input);
                while (i < input.length) {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);
                    enc1 = chr1 >> 2;
                    enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                    enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                    enc4 = chr3 & 63;
                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64
                    } else if (isNaN(chr3)) {
                        enc4 = 64
                    }
                    output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4)
                }
                return output
            }
        }, {
            "utf8-encode": 442
        }],
        349: [function(require, module, exports) {
            "use strict";

            function canonical() {
                var tags = document.getElementsByTagName("link");
                for (var i = 0, tag; tag = tags[i]; i++) {
                    if (tag.getAttribute("rel") === "canonical") {
                        return tag.getAttribute("href")
                    }
                }
            }
            module.exports = canonical
        }, {}],
        350: [function(require, module, exports) {
            "use strict";
            var clone = require("@ndhoule/clone");
            var each = require("@ndhoule/each");
            var type = require("component-type");

            function convertDates(obj, convert) {
                obj = clone(obj);
                each(function(val, key) {
                    if (type(val) === "date") {
                        obj[key] = convert(val)
                    }
                    if (type(val) === "object" || type(val) === "array") {
                        obj[key] = convertDates(val, convert)
                    }
                }, obj);
                return obj
            }
            module.exports = convertDates
        }, {
            "@ndhoule/clone": 5,
            "@ndhoule/each": 8,
            "component-type": 379
        }],
        351: [function(require, module, exports) {
            (function(global) {
                "use strict";
                var toString = global.JSON && typeof JSON.stringify === "function" ? JSON.stringify : String;

                function fmt(str) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    var j = 0;
                    return str.replace(/%([a-z])/gi, function(match, f) {
                        return fmt[f] ? fmt[f](args[j++]) : match + f
                    })
                }
                fmt.o = toString;
                fmt.s = String;
                fmt.d = parseInt;
                module.exports = fmt
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {}],
        352: [function(require, module, exports) {
            "use strict";

            function isMeta(e) {
                if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
                    return true
                }
                var which = e.which;
                var button = e.button;
                if (!which && button !== undefined) {
                    return !button & 1 && !button & 2 && button & 4
                } else if (which === 2) {
                    return true
                }
                return false
            }
            module.exports = isMeta
        }, {}],
        353: [function(require, module, exports) {
            "use strict";
            var type = require("component-type");
            var each = require("component-each");
            var isodate = require("@segment/isodate");
            module.exports = traverse;

            function traverse(input, strict) {
                if (strict === undefined) strict = true;
                if (type(input) === "object") return object(input, strict);
                if (type(input) === "array") return array(input, strict);
                return input
            }

            function object(obj, strict) {
                if (obj.length && typeof obj.length === "number" && !(obj.length - 1 in obj)) {
                    obj.lengthNonArray = obj.length;
                    delete obj.length
                }
                each(obj, function(key, val) {
                    if (isodate.is(val, strict)) {
                        obj[key] = isodate.parse(val)
                    } else if (type(val) === "object" || type(val) === "array") {
                        traverse(val, strict)
                    }
                });
                if (obj.lengthNonArray) {
                    obj.length = obj.lengthNonArray;
                    delete obj.lengthNonArray
                }
                return obj
            }

            function array(arr, strict) {
                each(arr, function(val, x) {
                    if (type(val) === "object") {
                        traverse(val, strict)
                    } else if (isodate.is(val, strict)) {
                        arr[x] = isodate.parse(val)
                    }
                });
                return arr
            }
        }, {
            "@segment/isodate": 354,
            "component-each": 371,
            "component-type": 379
        }],
        354: [function(require, module, exports) {
            "use strict";
            var matcher = /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
            exports.parse = function(iso) {
                var numericKeys = [1, 5, 6, 7, 11, 12];
                var arr = matcher.exec(iso);
                var offset = 0;
                if (!arr) {
                    return new Date(iso)
                }
                for (var i = 0, val; val = numericKeys[i]; i++) {
                    arr[val] = parseInt(arr[val], 10) || 0
                }
                arr[2] = parseInt(arr[2], 10) || 1;
                arr[3] = parseInt(arr[3], 10) || 1;
                arr[2]--;
                arr[8] = arr[8] ? (arr[8] + "00").substring(0, 3) : 0;
                if (arr[4] === " ") {
                    offset = (new Date).getTimezoneOffset()
                } else if (arr[9] !== "Z" && arr[10]) {
                    offset = arr[11] * 60 + arr[12];
                    if (arr[10] === "+") {
                        offset = 0 - offset
                    }
                }
                var millis = Date.UTC(arr[1], arr[2], arr[3], arr[5], arr[6] + offset, arr[7], arr[8]);
                return new Date(millis)
            };
            exports.is = function(string, strict) {
                if (typeof string !== "string") {
                    return false
                }
                if (strict && /^\d{4}-\d{2}-\d{2}/.test(string) === false) {
                    return false
                }
                return matcher.test(string)
            }
        }, {}],
        355: [function(require, module, exports) {
            "use strict";
            var onload = require("script-onload");
            var tick = require("next-tick");
            var type = require("component-type");

            function loadScript(options, cb) {
                if (!options) {
                    throw new Error("Can't load nothing...")
                }
                if (type(options) === "string") {
                    options = {
                        src: options
                    }
                }
                var https = document.location.protocol === "https:" || document.location.protocol === "chrome-extension:";
                if (options.src && options.src.indexOf("//") === 0) {
                    options.src = (https ? "https:" : "http:") + options.src
                }
                if (https && options.https) {
                    options.src = options.https
                } else if (!https && options.http) {
                    options.src = options.http
                }
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.async = true;
                script.src = options.src;
                if (type(cb) === "function") {
                    onload(script, cb)
                }
                tick(function() {
                    var firstScript = document.getElementsByTagName("script")[0];
                    firstScript.parentNode.insertBefore(script, firstScript)
                });
                return script
            }
            module.exports = loadScript
        }, {
            "component-type": 379,
            "next-tick": 406,
            "script-onload": 414
        }],
        356: [function(require, module, exports) {
            "use strict";

            function preventDefault(e) {
                e = e || window.event;
                return e.preventDefault ? e.preventDefault() : e.returnValue = false
            }
            module.exports = preventDefault
        }, {}],
        357: [function(require, module, exports) {
            "use strict";
            var JSON = require("json3");
            var base64encode = require("@segment/base64-encode");
            var cors = require("has-cors");
            var jsonp = require("jsonp");
            exports = module.exports = cors ? json : base64;
            exports.callback = "callback";
            exports.prefix = "data";
            exports.json = json;
            exports.base64 = base64;
            exports.type = cors ? "xhr" : "jsonp";

            function json(url, obj, headers, fn) {
                if (arguments.length === 3) fn = headers, headers = {};
                var req = new XMLHttpRequest;
                req.onerror = fn;
                req.onreadystatechange = done;
                req.open("POST", url, true);
                for (var k in headers) {
                    req.setRequestHeader(k, headers[k])
                }
                req.send(JSON.stringify(obj));

                function done() {
                    if (req.readyState === 4) {
                        return fn(null, req)
                    }
                }
            }

            function base64(url, obj, _, fn) {
                if (arguments.length === 3) fn = _;
                var prefix = exports.prefix;
                var data = encode(obj);
                url += "?" + prefix + "=" + data;
                jsonp(url, {
                    param: exports.callback
                }, function(err, obj) {
                    if (err) return fn(err);
                    fn(null, {
                        url: url,
                        body: obj
                    })
                })
            }

            function encode(obj) {
                var str = "";
                str = JSON.stringify(obj);
                str = base64encode(str);
                str = str.replace(/\+/g, "-").replace(/\//g, "_");
                return encodeURIComponent(str)
            }
        }, {
            "@segment/base64-encode": 348,
            "has-cors": 389,
            json3: 396,
            jsonp: 397
        }],
        358: [function(require, module, exports) {
            (function(global) {
                "use strict";
                var JSON = require("json3");
                module.exports = function() {
                    var store = {},
                        win = typeof window != "undefined" ? window : global,
                        doc = win.document,
                        localStorageName = "localStorage",
                        scriptTag = "script",
                        storage;
                    store.disabled = false;
                    store.version = "1.3.20";
                    store.set = function(key, value) {};
                    store.get = function(key, defaultVal) {};
                    store.has = function(key) {
                        return store.get(key) !== undefined
                    };
                    store.remove = function(key) {};
                    store.clear = function() {};
                    store.transact = function(key, defaultVal, transactionFn) {
                        if (transactionFn == null) {
                            transactionFn = defaultVal;
                            defaultVal = null
                        }
                        if (defaultVal == null) {
                            defaultVal = {}
                        }
                        var val = store.get(key, defaultVal);
                        transactionFn(val);
                        store.set(key, val)
                    };
                    store.getAll = function() {
                        var ret = {};
                        store.forEach(function(key, val) {
                            ret[key] = val
                        });
                        return ret
                    };
                    store.forEach = function() {};
                    store.serialize = function(value) {
                        return JSON.stringify(value)
                    };
                    store.deserialize = function(value) {
                        if (typeof value != "string") {
                            return undefined
                        }
                        try {
                            return JSON.parse(value)
                        } catch (e) {
                            return value || undefined
                        }
                    };

                    function isLocalStorageNameSupported() {
                        try {
                            return localStorageName in win && win[localStorageName]
                        } catch (err) {
                            return false
                        }
                    }
                    if (isLocalStorageNameSupported()) {
                        storage = win[localStorageName];
                        store.set = function(key, val) {
                            if (val === undefined) {
                                return store.remove(key)
                            }
                            storage.setItem(key, store.serialize(val));
                            return val
                        };
                        store.get = function(key, defaultVal) {
                            var val = store.deserialize(storage.getItem(key));
                            return val === undefined ? defaultVal : val
                        };
                        store.remove = function(key) {
                            storage.removeItem(key)
                        };
                        store.clear = function() {
                            storage.clear()
                        };
                        store.forEach = function(callback) {
                            for (var i = 0; i < storage.length; i++) {
                                var key = storage.key(i);
                                callback(key, store.get(key))
                            }
                        }
                    } else if (doc && doc.documentElement.addBehavior) {
                        var storageOwner, storageContainer;
                        try {
                            storageContainer = new ActiveXObject("htmlfile");
                            storageContainer.open();
                            storageContainer.write("<" + scriptTag + ">document.w=window</" + scriptTag + '><iframe src="/favicon.ico"></iframe>');
                            storageContainer.close();
                            storageOwner = storageContainer.w.frames[0].document;
                            storage = storageOwner.createElement("div")
                        } catch (e) {
                            storage = doc.createElement("div");
                            storageOwner = doc.body
                        }
                        var withIEStorage = function(storeFunction) {
                            return function() {
                                var args = Array.prototype.slice.call(arguments, 0);
                                args.unshift(storage);
                                storageOwner.appendChild(storage);
                                storage.addBehavior("#default#userData");
                                storage.load(localStorageName);
                                var result = storeFunction.apply(store, args);
                                storageOwner.removeChild(storage);
                                return result
                            }
                        };
                        var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
                        var ieKeyFix = function(key) {
                            return key.replace(/^d/, "___$&").replace(forbiddenCharsRegex, "___")
                        };
                        store.set = withIEStorage(function(storage, key, val) {
                            key = ieKeyFix(key);
                            if (val === undefined) {
                                return store.remove(key)
                            }
                            storage.setAttribute(key, store.serialize(val));
                            storage.save(localStorageName);
                            return val
                        });
                        store.get = withIEStorage(function(storage, key, defaultVal) {
                            key = ieKeyFix(key);
                            var val = store.deserialize(storage.getAttribute(key));
                            return val === undefined ? defaultVal : val
                        });
                        store.remove = withIEStorage(function(storage, key) {
                            key = ieKeyFix(key);
                            storage.removeAttribute(key);
                            storage.save(localStorageName)
                        });
                        store.clear = withIEStorage(function(storage) {
                            var attributes = storage.XMLDocument.documentElement.attributes;
                            storage.load(localStorageName);
                            for (var i = attributes.length - 1; i >= 0; i--) {
                                storage.removeAttribute(attributes[i].name)
                            }
                            storage.save(localStorageName)
                        });
                        store.forEach = withIEStorage(function(storage, callback) {
                            var attributes = storage.XMLDocument.documentElement.attributes;
                            for (var i = 0, attr; attr = attributes[i]; ++i) {
                                callback(attr.name, store.deserialize(storage.getAttribute(attr.name)))
                            }
                        })
                    }
                    try {
                        var testKey = "__storejs__";
                        store.set(testKey, testKey);
                        if (store.get(testKey) != testKey) {
                            store.disabled = true
                        }
                        store.remove(testKey)
                    } catch (e) {
                        store.disabled = true
                    }
                    store.enabled = !store.disabled;
                    return store
                }()
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {
            json3: 396
        }],
        359: [function(require, module, exports) {
            "use strict";

            function pad(number) {
                var n = number.toString();
                return n.length === 1 ? "0" + n : n
            }

            function toISOString(date) {
                return date.getUTCFullYear() + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate()) + "T" + pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + "." + String((date.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
            }
            module.exports = toISOString
        }, {}],
        360: [function(require, module, exports) {
            "use strict";
            var parse = require("component-url").parse;
            var cookie = require("component-cookie");

            function domain(url) {
                var cookie = exports.cookie;
                var levels = exports.levels(url);
                for (var i = 0; i < levels.length; ++i) {
                    var cname = "__tld__";
                    var domain = levels[i];
                    var opts = {
                        domain: "." + domain
                    };
                    cookie(cname, 1, opts);
                    if (cookie(cname)) {
                        cookie(cname, null, opts);
                        return domain
                    }
                }
                return ""
            }
            domain.levels = function(url) {
                var host = parse(url).hostname;
                var parts = host.split(".");
                var last = parts[parts.length - 1];
                var levels = [];
                if (parts.length === 4 && last === parseInt(last, 10)) {
                    return levels
                }
                if (parts.length <= 1) {
                    return levels
                }
                for (var i = parts.length - 2; i >= 0; --i) {
                    levels.push(parts.slice(i).join("."))
                }
                return levels
            };
            domain.cookie = cookie;
            exports = module.exports = domain
        }, {
            "component-cookie": 367,
            "component-url": 380
        }],
        361: [function(require, module, exports) {
            "use strict";
            var map = require("@ndhoule/map");
            var foldl = require("@ndhoule/foldl");
            var eventMap = {
                videoPlaybackStarted: [{
                    object: "video playback",
                    action: "started"
                }],
                videoPlaybackPaused: [{
                    object: "video playback",
                    action: "paused"
                }],
                videoPlaybackInterrupted: [{
                    object: "video playback",
                    action: "interrupted"
                }],
                videoPlaybackResumed: [{
                    object: "video playback",
                    action: "resumed"
                }],
                videoPlaybackCompleted: [{
                    object: "video playback",
                    action: "completed"
                }],
                videoPlaybackBufferStarted: [{
                    object: "video playback buffer",
                    action: "started"
                }],
                videoPlaybackBufferCompleted: [{
                    object: "video playback buffer",
                    action: "completed"
                }],
                videoPlaybackSeekStarted: [{
                    object: "video playback seek",
                    action: "started"
                }],
                videoPlaybackSeekCompleted: [{
                    object: "video playback seek",
                    action: "completed"
                }],
                videoContentStarted: [{
                    object: "video content",
                    action: "started"
                }],
                videoContentPlaying: [{
                    object: "video content",
                    action: "playing"
                }],
                videoContentCompleted: [{
                    object: "video content",
                    action: "completed"
                }],
                videoAdStarted: [{
                    object: "video ad",
                    action: "started"
                }],
                videoAdPlaying: [{
                    object: "video ad",
                    action: "playing"
                }],
                videoAdCompleted: [{
                    object: "video ad",
                    action: "completed"
                }],
                promotionViewed: [{
                    object: "promotion",
                    action: "viewed"
                }],
                promotionClicked: [{
                    object: "promotion",
                    action: "clicked"
                }],
                productsSearched: [{
                    object: "products",
                    action: "searched"
                }],
                productListViewed: [{
                    object: "product list",
                    action: "viewed"
                }, {
                    object: "product category",
                    action: "viewed"
                }],
                productListFiltered: [{
                    object: "product list",
                    action: "filtered"
                }],
                productClicked: [{
                    object: "product",
                    action: "clicked"
                }],
                productViewed: [{
                    object: "product",
                    action: "viewed"
                }],
                productAdded: [{
                    object: "product",
                    action: "added"
                }],
                productRemoved: [{
                    object: "product",
                    action: "removed"
                }],
                cartViewed: [{
                    object: "cart",
                    action: "viewed"
                }],
                orderUpdated: [{
                    object: "order",
                    action: "updated"
                }],
                orderCompleted: [{
                    object: "order",
                    action: "completed"
                }],
                orderRefunded: [{
                    object: "order",
                    action: "refunded"
                }],
                orderCancelled: [{
                    object: "order",
                    action: "cancelled"
                }],
                paymentInfoEntered: [{
                    object: "payment info",
                    action: "entered"
                }],
                checkoutStarted: [{
                    object: "checkout",
                    action: "started"
                }],
                checkoutStepViewed: [{
                    object: "checkout step",
                    action: "viewed"
                }],
                checkoutStepCompleted: [{
                    object: "checkout step",
                    action: "completed"
                }],
                couponEntered: [{
                    object: "coupon",
                    action: "entered"
                }],
                couponApplied: [{
                    object: "coupon",
                    action: "applied"
                }],
                couponDenied: [{
                    object: "coupon",
                    action: "denied"
                }],
                couponRemoved: [{
                    object: "coupon",
                    action: "removed"
                }],
                productAddedToWishlist: [{
                    object: "product",
                    action: "added to wishlist"
                }],
                productRemovedFromWishlist: [{
                    object: "product",
                    action: "removed from wishlist"
                }],
                productAddedFromWishlistToCart: [{
                    object: "product",
                    action: "added to cart from wishlist"
                }, {
                    object: "product",
                    action: "added from wishlist to cart"
                }],
                productShared: [{
                    object: "product",
                    action: "shared"
                }],
                cartShared: [{
                    object: "cart",
                    action: "shared"
                }],
                productReviewed: [{
                    object: "product",
                    action: "reviewed"
                }],
                applicationInstalled: [{
                    object: "application",
                    action: "installed"
                }],
                applicationUpdated: [{
                    object: "application",
                    action: "updated"
                }],
                applicationOpened: [{
                    object: "application",
                    action: "opened"
                }],
                applicationBackgrounded: [{
                    object: "application",
                    action: "backgrounded"
                }],
                applicationUninstalled: [{
                    object: "application",
                    action: "uninstalled"
                }],
                applicationCrashed: [{
                    object: "application",
                    action: "crashed"
                }],
                installAttributed: [{
                    object: "install",
                    action: "attributed"
                }],
                deepLinkOpened: [{
                    object: "deep link",
                    action: "opened"
                }],
                pushNotificationReceived: [{
                    object: "push notification",
                    action: "received"
                }],
                pushNotificationTapped: [{
                    object: "push notification",
                    action: "tapped"
                }],
                pushNotificationBounced: [{
                    object: "push notification",
                    action: "bounced"
                }],
                emailBounced: [{
                    object: "email",
                    action: "bounced"
                }],
                emailDelivered: [{
                    object: "email",
                    action: "delivered"
                }],
                emailLinkClicked: [{
                    object: "email link",
                    action: "clicked"
                }],
                emailMarkedAsSpam: [{
                    object: "email",
                    action: "marked as spam"
                }],
                emailOpened: [{
                    object: "email",
                    action: "opened"
                }],
                unsubscribed: [{
                    object: "",
                    action: "unsubscribed"
                }]
            };
            module.exports = foldl(function transform(ret, pairs, method) {
                var values = map(function(pair) {
                    return map(function(permutation) {
                        var flattened = [].concat.apply([], map(function(words) {
                            return words.split(" ")
                        }, permutation));
                        return "^[ _]?" + flattened.join("[ _]?") + "[ _]?"
                    }, [
                        [pair.action, pair.object],
                        [pair.object, pair.action]
                    ]).join("|")
                }, pairs);
                var conjoined = values.join("|") + "$";
                ret[method] = new RegExp(conjoined, "i");
                return ret
            }, {}, eventMap)
        }, {
            "@ndhoule/foldl": 11,
            "@ndhoule/map": 14
        }],
        362: [function(require, module, exports) {
            "use strict";
            var integration = require("@segment/analytics.js-integration");
            var Hotjar = module.exports = integration("Hotjar").global("hj").global("_hjSettings").option("hjid").option("hjsv").option("tagEvents", true).option("recordVisitors", true).option("identifyTags", ["Logged In User"]);
            Hotjar.prototype.initialize = function() {
                var hjid = this.options.hjid;
                var hjsv = this.options.hjsv;
                window.hj = window.hj || function() {
                    (window.hj.q = window.hj.q || []).push(arguments)
                };
                window._hjSettings = {
                    hjid: hjid,
                    hjsv: hjsv
                };
                if (this.options.recordVisitors) {
                    appendHotjarScript()
                }
                this.ready()
            };
            Hotjar.prototype.loaded = function() {
                return !!window.hj
            };
            Hotjar.prototype.identify = function() {
                var identifyTags = this.options.identifyTags;
                if (!this.options.recordVisitors) {
                    appendHotjarScript()
                }
                if (this.options.identifyTags) {
                    window.hj("tagRecording", identifyTags)
                }
            };
            Hotjar.prototype.track = function(track) {
                var eventName = track.event();
                var tagEvents = this.options.tagEvents;
                if (!tagEvents) {
                    return
                }
                window.hj("tagRecording", [eventName])
            };
            var script;

            function appendHotjarScript() {
                if (script) {
                    return
                }
                var head = document.getElementsByTagName("head")[0];
                script = document.createElement("script");
                script.async = 1;
                script.src = "https://static.hotjar.com/c/hotjar-" + window._hjSettings.hjid + ".js?sv=" + window._hjSettings.hjsv;
                head.appendChild(script)
            }
        }, {
            "@segment/analytics.js-integration": 338
        }],
        363: [function(require, module, exports) {
            "use strict";
            var bind = require("component-bind");

            function bindAll(obj) {
                for (var key in obj) {
                    var val = obj[key];
                    if (typeof val === "function") {
                        obj[key] = bind(obj, obj[key])
                    }
                }
                return obj
            }
            module.exports = bindAll
        }, {
            "component-bind": 365
        }],
        364: [function(require, module, exports) {
            "use strict";

            function preserveCamelCase(str) {
                var isLastCharLower = false;
                for (var i = 0; i < str.length; i++) {
                    var c = str.charAt(i);
                    if (isLastCharLower && /[a-zA-Z]/.test(c) && c.toUpperCase() === c) {
                        str = str.substr(0, i) + "-" + str.substr(i);
                        isLastCharLower = false;
                        i++
                    } else {
                        isLastCharLower = c.toLowerCase() === c
                    }
                }
                return str
            }
            module.exports = function() {
                var str = [].map.call(arguments, function(str) {
                    return str.trim()
                }).filter(function(str) {
                    return str.length
                }).join("-");
                if (!str.length) {
                    return ""
                }
                if (str.length === 1) {
                    return str
                }
                if (!/[_.\- ]+/.test(str)) {
                    if (str === str.toUpperCase()) {
                        return str.toLowerCase()
                    }
                    if (str[0] !== str[0].toLowerCase()) {
                        return str[0].toLowerCase() + str.slice(1)
                    }
                    return str
                }
                str = preserveCamelCase(str);
                return str.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, function(m, p1) {
                    return p1.toUpperCase()
                })
            }
        }, {}],
        365: [function(require, module, exports) {
            var slice = [].slice;
            module.exports = function(obj, fn) {
                if ("string" == typeof fn) fn = obj[fn];
                if ("function" != typeof fn) throw new Error("bind() requires a function");
                var args = slice.call(arguments, 2);
                return function() {
                    return fn.apply(obj, args.concat(slice.call(arguments)))
                }
            }
        }, {}],
        366: [function(require, module, exports) {
            var type;
            try {
                type = require("component-type")
            } catch (_) {
                type = require("type")
            }
            module.exports = clone;

            function clone(obj) {
                switch (type(obj)) {
                    case "object":
                        var copy = {};
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                                copy[key] = clone(obj[key])
                            }
                        }
                        return copy;
                    case "array":
                        var copy = new Array(obj.length);
                        for (var i = 0, l = obj.length; i < l; i++) {
                            copy[i] = clone(obj[i])
                        }
                        return copy;
                    case "regexp":
                        var flags = "";
                        flags += obj.multiline ? "m" : "";
                        flags += obj.global ? "g" : "";
                        flags += obj.ignoreCase ? "i" : "";
                        return new RegExp(obj.source, flags);
                    case "date":
                        return new Date(obj.getTime());
                    default:
                        return obj
                }
            }
        }, {
            "component-type": 379,
            type: 379
        }],
        367: [function(require, module, exports) {
            var debug = require("debug")("cookie");
            module.exports = function(name, value, options) {
                switch (arguments.length) {
                    case 3:
                    case 2:
                        return set(name, value, options);
                    case 1:
                        return get(name);
                    default:
                        return all()
                }
            };

            function set(name, value, options) {
                options = options || {};
                var str = encode(name) + "=" + encode(value);
                if (null == value) options.maxage = -1;
                if (options.maxage) {
                    options.expires = new Date(+new Date + options.maxage)
                }
                if (options.path) str += "; path=" + options.path;
                if (options.domain) str += "; domain=" + options.domain;
                if (options.expires) str += "; expires=" + options.expires.toUTCString();
                if (options.secure) str += "; secure";
                document.cookie = str
            }

            function all() {
                var str;
                try {
                    str = document.cookie
                } catch (err) {
                    if (typeof console !== "undefined" && typeof console.error === "function") {
                        console.error(err.stack || err)
                    }
                    return {}
                }
                return parse(str)
            }

            function get(name) {
                return all()[name]
            }

            function parse(str) {
                var obj = {};
                var pairs = str.split(/ *; */);
                var pair;
                if ("" == pairs[0]) return obj;
                for (var i = 0; i < pairs.length; ++i) {
                    pair = pairs[i].split("=");
                    obj[decode(pair[0])] = decode(pair[1])
                }
                return obj
            }

            function encode(value) {
                try {
                    return encodeURIComponent(value)
                } catch (e) {
                    debug("error `encode(%o)` - %o", value, e)
                }
            }

            function decode(value) {
                try {
                    return decodeURIComponent(value)
                } catch (e) {
                    debug("error `decode(%o)` - %o", value, e)
                }
            }
        }, {
            debug: 368
        }],
        368: [function(require, module, exports) {
            exports = module.exports = require("./debug");
            exports.log = log;
            exports.formatArgs = formatArgs;
            exports.save = save;
            exports.load = load;
            exports.useColors = useColors;
            exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
            exports.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"];

            function useColors() {
                return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
            }
            exports.formatters.j = function(v) {
                return JSON.stringify(v)
            };

            function formatArgs() {
                var args = arguments;
                var useColors = this.useColors;
                args[0] = (useColors ? "%c" : "") + this.namespace + (useColors ? " %c" : " ") + args[0] + (useColors ? "%c " : " ") + "+" + exports.humanize(this.diff);
                if (!useColors) return args;
                var c = "color: " + this.color;
                args = [args[0], c, "color: inherit"].concat(Array.prototype.slice.call(args, 1));
                var index = 0;
                var lastC = 0;
                args[0].replace(/%[a-z%]/g, function(match) {
                    if ("%%" === match) return;
                    index++;
                    if ("%c" === match) {
                        lastC = index
                    }
                });
                args.splice(lastC, 0, c);
                return args
            }

            function log() {
                return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }

            function save(namespaces) {
                try {
                    if (null == namespaces) {
                        exports.storage.removeItem("debug")
                    } else {
                        exports.storage.debug = namespaces
                    }
                } catch (e) {}
            }

            function load() {
                var r;
                try {
                    r = exports.storage.debug
                } catch (e) {}
                return r
            }
            exports.enable(load());

            function localstorage() {
                try {
                    return window.localStorage
                } catch (e) {}
            }
        }, {
            "./debug": 369
        }],
        369: [function(require, module, exports) {
            exports = module.exports = debug;
            exports.coerce = coerce;
            exports.disable = disable;
            exports.enable = enable;
            exports.enabled = enabled;
            exports.humanize = require("ms");
            exports.names = [];
            exports.skips = [];
            exports.formatters = {};
            var prevColor = 0;
            var prevTime;

            function selectColor() {
                return exports.colors[prevColor++ % exports.colors.length]
            }

            function debug(namespace) {
                function disabled() {}
                disabled.enabled = false;

                function enabled() {
                    var self = enabled;
                    var curr = +new Date;
                    var ms = curr - (prevTime || curr);
                    self.diff = ms;
                    self.prev = prevTime;
                    self.curr = curr;
                    prevTime = curr;
                    if (null == self.useColors) self.useColors = exports.useColors();
                    if (null == self.color && self.useColors) self.color = selectColor();
                    var args = Array.prototype.slice.call(arguments);
                    args[0] = exports.coerce(args[0]);
                    if ("string" !== typeof args[0]) {
                        args = ["%o"].concat(args)
                    }
                    var index = 0;
                    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
                        if (match === "%%") return match;
                        index++;
                        var formatter = exports.formatters[format];
                        if ("function" === typeof formatter) {
                            var val = args[index];
                            match = formatter.call(self, val);
                            args.splice(index, 1);
                            index--
                        }
                        return match
                    });
                    if ("function" === typeof exports.formatArgs) {
                        args = exports.formatArgs.apply(self, args)
                    }
                    var logFn = enabled.log || exports.log || console.log.bind(console);
                    logFn.apply(self, args)
                }
                enabled.enabled = true;
                var fn = exports.enabled(namespace) ? enabled : disabled;
                fn.namespace = namespace;
                return fn
            }

            function enable(namespaces) {
                exports.save(namespaces);
                var split = (namespaces || "").split(/[\s,]+/);
                var len = split.length;
                for (var i = 0; i < len; i++) {
                    if (!split[i]) continue;
                    namespaces = split[i].replace(/\*/g, ".*?");
                    if (namespaces[0] === "-") {
                        exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"))
                    } else {
                        exports.names.push(new RegExp("^" + namespaces + "$"))
                    }
                }
            }

            function disable() {
                exports.enable("")
            }

            function enabled(name) {
                var i, len;
                for (i = 0, len = exports.skips.length; i < len; i++) {
                    if (exports.skips[i].test(name)) {
                        return false
                    }
                }
                for (i = 0, len = exports.names.length; i < len; i++) {
                    if (exports.names[i].test(name)) {
                        return true
                    }
                }
                return false
            }

            function coerce(val) {
                if (val instanceof Error) return val.stack || val.message;
                return val
            }
        }, {
            ms: 370
        }],
        370: [function(require, module, exports) {
            var s = 1e3;
            var m = s * 60;
            var h = m * 60;
            var d = h * 24;
            var y = d * 365.25;
            module.exports = function(val, options) {
                options = options || {};
                if ("string" == typeof val) return parse(val);
                return options.long ? long(val) : short(val)
            };

            function parse(str) {
                str = "" + str;
                if (str.length > 1e4) return;
                var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
                if (!match) return;
                var n = parseFloat(match[1]);
                var type = (match[2] || "ms").toLowerCase();
                switch (type) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return n * y;
                    case "days":
                    case "day":
                    case "d":
                        return n * d;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return n * h;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return n * m;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return n * s;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return n
                }
            }

            function short(ms) {
                if (ms >= d) return Math.round(ms / d) + "d";
                if (ms >= h) return Math.round(ms / h) + "h";
                if (ms >= m) return Math.round(ms / m) + "m";
                if (ms >= s) return Math.round(ms / s) + "s";
                return ms + "ms"
            }

            function long(ms) {
                return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms"
            }

            function plural(ms, n, name) {
                if (ms < n) return;
                if (ms < n * 1.5) return Math.floor(ms / n) + " " + name;
                return Math.ceil(ms / n) + " " + name + "s"
            }
        }, {}],
        371: [function(require, module, exports) {
            try {
                var type = require("type")
            } catch (err) {
                var type = require("component-type")
            }
            var toFunction = require("to-function");
            var has = Object.prototype.hasOwnProperty;
            module.exports = function(obj, fn, ctx) {
                fn = toFunction(fn);
                ctx = ctx || this;
                switch (type(obj)) {
                    case "array":
                        return array(obj, fn, ctx);
                    case "object":
                        if ("number" == typeof obj.length) return array(obj, fn, ctx);
                        return object(obj, fn, ctx);
                    case "string":
                        return string(obj, fn, ctx)
                }
            };

            function string(obj, fn, ctx) {
                for (var i = 0; i < obj.length; ++i) {
                    fn.call(ctx, obj.charAt(i), i)
                }
            }

            function object(obj, fn, ctx) {
                for (var key in obj) {
                    if (has.call(obj, key)) {
                        fn.call(ctx, key, obj[key])
                    }
                }
            }

            function array(obj, fn, ctx) {
                for (var i = 0; i < obj.length; ++i) {
                    fn.call(ctx, obj[i], i)
                }
            }
        }, {
            "component-type": 372,
            "to-function": 432,
            type: 372
        }],
        372: [function(require, module, exports) {
            var toString = Object.prototype.toString;
            module.exports = function(val) {
                switch (toString.call(val)) {
                    case "[object Function]":
                        return "function";
                    case "[object Date]":
                        return "date";
                    case "[object RegExp]":
                        return "regexp";
                    case "[object Arguments]":
                        return "arguments";
                    case "[object Array]":
                        return "array";
                    case "[object String]":
                        return "string"
                }
                if (val === null) return "null";
                if (val === undefined) return "undefined";
                if (val && val.nodeType === 1) return "element";
                if (val === Object(val)) return "object";
                return typeof val
            }
        }, {}],
        373: [function(require, module, exports) {
            if (typeof module !== "undefined") {
                module.exports = Emitter
            }

            function Emitter(obj) {
                if (obj) return mixin(obj)
            }

            function mixin(obj) {
                for (var key in Emitter.prototype) {
                    obj[key] = Emitter.prototype[key]
                }
                return obj
            }
            Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
                this._callbacks = this._callbacks || {};
                (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
                return this
            };
            Emitter.prototype.once = function(event, fn) {
                function on() {
                    this.off(event, on);
                    fn.apply(this, arguments)
                }
                on.fn = fn;
                this.on(event, on);
                return this
            };
            Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
                this._callbacks = this._callbacks || {};
                if (0 == arguments.length) {
                    this._callbacks = {};
                    return this
                }
                var callbacks = this._callbacks["$" + event];
                if (!callbacks) return this;
                if (1 == arguments.length) {
                    delete this._callbacks["$" + event];
                    return this
                }
                var cb;
                for (var i = 0; i < callbacks.length; i++) {
                    cb = callbacks[i];
                    if (cb === fn || cb.fn === fn) {
                        callbacks.splice(i, 1);
                        break
                    }
                }
                if (callbacks.length === 0) {
                    delete this._callbacks["$" + event]
                }
                return this
            };
            Emitter.prototype.emit = function(event) {
                this._callbacks = this._callbacks || {};
                var args = new Array(arguments.length - 1),
                    callbacks = this._callbacks["$" + event];
                for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i]
                }
                if (callbacks) {
                    callbacks = callbacks.slice(0);
                    for (var i = 0, len = callbacks.length; i < len; ++i) {
                        callbacks[i].apply(this, args)
                    }
                }
                return this
            };
            Emitter.prototype.listeners = function(event) {
                this._callbacks = this._callbacks || {};
                return this._callbacks["$" + event] || []
            };
            Emitter.prototype.hasListeners = function(event) {
                return !!this.listeners(event).length
            }
        }, {}],
        374: [function(require, module, exports) {
            var bind = window.addEventListener ? "addEventListener" : "attachEvent",
                unbind = window.removeEventListener ? "removeEventListener" : "detachEvent",
                prefix = bind !== "addEventListener" ? "on" : "";
            exports.bind = function(el, type, fn, capture) {
                el[bind](prefix + type, fn, capture || false);
                return fn
            };
            exports.unbind = function(el, type, fn, capture) {
                el[unbind](prefix + type, fn, capture || false);
                return fn
            }
        }, {}],
        375: [function(require, module, exports) {
            module.exports = function(arr, obj) {
                if (arr.indexOf) return arr.indexOf(obj);
                for (var i = 0; i < arr.length; ++i) {
                    if (arr[i] === obj) return i
                }
                return -1
            }
        }, {}],
        376: [function(require, module, exports) {
            var globals = /\b(Array|Date|Object|Math|JSON)\b/g;
            module.exports = function(str, fn) {
                var p = unique(props(str));
                if (fn && "string" == typeof fn) fn = prefixed(fn);
                if (fn) return map(str, p, fn);
                return p
            };

            function props(str) {
                return str.replace(/\.\w+|\w+ *\(|"[^"]*"|'[^']*'|\/([^/]+)\//g, "").replace(globals, "").match(/[a-zA-Z_]\w*/g) || []
            }

            function map(str, props, fn) {
                var re = /\.\w+|\w+ *\(|"[^"]*"|'[^']*'|\/([^/]+)\/|[a-zA-Z_]\w*/g;
                return str.replace(re, function(_) {
                    if ("(" == _[_.length - 1]) return fn(_);
                    if (!~props.indexOf(_)) return _;
                    return fn(_)
                })
            }

            function unique(arr) {
                var ret = [];
                for (var i = 0; i < arr.length; i++) {
                    if (~ret.indexOf(arr[i])) continue;
                    ret.push(arr[i])
                }
                return ret
            }

            function prefixed(str) {
                return function(_) {
                    return str + _
                }
            }
        }, {}],
        377: [function(require, module, exports) {
            var trim = require("trim");
            var type = require("type");
            var pattern = /(\w+)\[(\d+)\]/;
            var encode = function(str) {
                try {
                    return encodeURIComponent(str)
                } catch (e) {
                    return str
                }
            };
            var decode = function(str) {
                try {
                    return decodeURIComponent(str.replace(/\+/g, " "))
                } catch (e) {
                    return str
                }
            };
            exports.parse = function(str) {
                if ("string" != typeof str) return {};
                str = trim(str);
                if ("" == str) return {};
                if ("?" == str.charAt(0)) str = str.slice(1);
                var obj = {};
                var pairs = str.split("&");
                for (var i = 0; i < pairs.length; i++) {
                    var parts = pairs[i].split("=");
                    var key = decode(parts[0]);
                    var m;
                    if (m = pattern.exec(key)) {
                        obj[m[1]] = obj[m[1]] || [];
                        obj[m[1]][m[2]] = decode(parts[1]);
                        continue
                    }
                    obj[parts[0]] = null == parts[1] ? "" : decode(parts[1])
                }
                return obj
            };
            exports.stringify = function(obj) {
                if (!obj) return "";
                var pairs = [];
                for (var key in obj) {
                    var value = obj[key];
                    if ("array" == type(value)) {
                        for (var i = 0; i < value.length; ++i) {
                            pairs.push(encode(key + "[" + i + "]") + "=" + encode(value[i]))
                        }
                        continue
                    }
                    pairs.push(encode(key) + "=" + encode(obj[key]))
                }
                return pairs.join("&")
            }
        }, {
            trim: 438,
            type: 378
        }],
        378: [function(require, module, exports) {
            var toString = Object.prototype.toString;
            module.exports = function(val) {
                switch (toString.call(val)) {
                    case "[object Date]":
                        return "date";
                    case "[object RegExp]":
                        return "regexp";
                    case "[object Arguments]":
                        return "arguments";
                    case "[object Array]":
                        return "array";
                    case "[object Error]":
                        return "error"
                }
                if (val === null) return "null";
                if (val === undefined) return "undefined";
                if (val !== val) return "nan";
                if (val && val.nodeType === 1) return "element";
                val = val.valueOf ? val.valueOf() : Object.prototype.valueOf.apply(val);
                return typeof val
            }
        }, {}],
        379: [function(require, module, exports) {
            var toString = Object.prototype.toString;
            module.exports = function(val) {
                switch (toString.call(val)) {
                    case "[object Date]":
                        return "date";
                    case "[object RegExp]":
                        return "regexp";
                    case "[object Arguments]":
                        return "arguments";
                    case "[object Array]":
                        return "array";
                    case "[object Error]":
                        return "error"
                }
                if (val === null) return "null";
                if (val === undefined) return "undefined";
                if (val !== val) return "nan";
                if (val && val.nodeType === 1) return "element";
                if (isBuffer(val)) return "buffer";
                val = val.valueOf ? val.valueOf() : Object.prototype.valueOf.apply(val);
                return typeof val
            };

            function isBuffer(obj) {
                return !!(obj != null && (obj._isBuffer || obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj)))
            }
        }, {}],
        380: [function(require, module, exports) {
            exports.parse = function(url) {
                var a = document.createElement("a");
                a.href = url;
                return {
                    href: a.href,
                    host: a.host || location.host,
                    port: "0" === a.port || "" === a.port ? port(a.protocol) : a.port,
                    hash: a.hash,
                    hostname: a.hostname || location.hostname,
                    pathname: a.pathname.charAt(0) != "/" ? "/" + a.pathname : a.pathname,
                    protocol: !a.protocol || ":" == a.protocol ? location.protocol : a.protocol,
                    search: a.search,
                    query: a.search.slice(1)
                }
            };
            exports.isAbsolute = function(url) {
                return 0 == url.indexOf("//") || !!~url.indexOf("://")
            };
            exports.isRelative = function(url) {
                return !exports.isAbsolute(url)
            };
            exports.isCrossDomain = function(url) {
                url = exports.parse(url);
                var location = exports.parse(window.location.href);
                return url.hostname !== location.hostname || url.port !== location.port || url.protocol !== location.protocol
            };

            function port(protocol) {
                switch (protocol) {
                    case "http:":
                        return 80;
                    case "https:":
                        return 443;
                    default:
                        return location.port
                }
            }
        }, {}],
        381: [function(require, module, exports) {
            (function(global) {
                "use strict";
                var dateFormat = function() {
                    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
                    var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
                    var timezoneClip = /[^-+\dA-Z]/g;
                    return function(date, mask, utc, gmt) {
                        if (arguments.length === 1 && kindOf(date) === "string" && !/\d/.test(date)) {
                            mask = date;
                            date = undefined
                        }
                        date = date || new Date;
                        if (!(date instanceof Date)) {
                            date = new Date(date)
                        }
                        if (isNaN(date)) {
                            throw TypeError("Invalid date")
                        }
                        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks["default"]);
                        var maskSlice = mask.slice(0, 4);
                        if (maskSlice === "UTC:" || maskSlice === "GMT:") {
                            mask = mask.slice(4);
                            utc = true;
                            if (maskSlice === "GMT:") {
                                gmt = true
                            }
                        }
                        var _ = utc ? "getUTC" : "get";
                        var d = date[_ + "Date"]();
                        var D = date[_ + "Day"]();
                        var m = date[_ + "Month"]();
                        var y = date[_ + "FullYear"]();
                        var H = date[_ + "Hours"]();
                        var M = date[_ + "Minutes"]();
                        var s = date[_ + "Seconds"]();
                        var L = date[_ + "Milliseconds"]();
                        var o = utc ? 0 : date.getTimezoneOffset();
                        var W = getWeek(date);
                        var N = getDayOfWeek(date);
                        var flags = {
                            d: d,
                            dd: pad(d),
                            ddd: dateFormat.i18n.dayNames[D],
                            dddd: dateFormat.i18n.dayNames[D + 7],
                            m: m + 1,
                            mm: pad(m + 1),
                            mmm: dateFormat.i18n.monthNames[m],
                            mmmm: dateFormat.i18n.monthNames[m + 12],
                            yy: String(y).slice(2),
                            yyyy: y,
                            h: H % 12 || 12,
                            hh: pad(H % 12 || 12),
                            H: H,
                            HH: pad(H),
                            M: M,
                            MM: pad(M),
                            s: s,
                            ss: pad(s),
                            l: pad(L, 3),
                            L: pad(Math.round(L / 10)),
                            t: H < 12 ? "a" : "p",
                            tt: H < 12 ? "am" : "pm",
                            T: H < 12 ? "A" : "P",
                            TT: H < 12 ? "AM" : "PM",
                            Z: gmt ? "GMT" : utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                            o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                            S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
                            W: W,
                            N: N
                        };
                        return mask.replace(token, function(match) {
                            if (match in flags) {
                                return flags[match]
                            }
                            return match.slice(1, match.length - 1)
                        })
                    }
                }();
                dateFormat.masks = {
                    default: "ddd mmm dd yyyy HH:MM:ss",
                    shortDate: "m/d/yy",
                    mediumDate: "mmm d, yyyy",
                    longDate: "mmmm d, yyyy",
                    fullDate: "dddd, mmmm d, yyyy",
                    shortTime: "h:MM TT",
                    mediumTime: "h:MM:ss TT",
                    longTime: "h:MM:ss TT Z",
                    isoDate: "yyyy-mm-dd",
                    isoTime: "HH:MM:ss",
                    isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
                    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
                    expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z"
                };
                dateFormat.i18n = {
                    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                };

                function pad(val, len) {
                    val = String(val);
                    len = len || 2;
                    while (val.length < len) {
                        val = "0" + val
                    }
                    return val
                }

                function getWeek(date) {
                    var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                    targetThursday.setDate(targetThursday.getDate() - (targetThursday.getDay() + 6) % 7 + 3);
                    var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);
                    firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);
                    var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
                    targetThursday.setHours(targetThursday.getHours() - ds);
                    var weekDiff = (targetThursday - firstThursday) / (864e5 * 7);
                    return 1 + Math.floor(weekDiff)
                }

                function getDayOfWeek(date) {
                    var dow = date.getDay();
                    if (dow === 0) {
                        dow = 7
                    }
                    return dow
                }

                function kindOf(val) {
                    if (val === null) {
                        return "null"
                    }
                    if (val === undefined) {
                        return "undefined"
                    }
                    if (typeof val !== "object") {
                        return typeof val
                    }
                    if (Array.isArray(val)) {
                        return "array"
                    }
                    return {}.toString.call(val).slice(8, -1).toLowerCase()
                }
                if (typeof define === "function" && define.amd) {
                    define(function() {
                        return dateFormat
                    })
                } else if (typeof exports === "object") {
                    module.exports = dateFormat
                } else {
                    global.dateFormat = dateFormat
                }
            })(this)
        }, {}],
        382: [function(require, module, exports) {
            module.exports = debug;

            function debug(name) {
                if (!debug.enabled(name)) return function() {};
                return function(fmt) {
                    fmt = coerce(fmt);
                    var curr = new Date;
                    var ms = curr - (debug[name] || curr);
                    debug[name] = curr;
                    fmt = name + " " + fmt + " +" + debug.humanize(ms);
                    window.console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                }
            }
            debug.names = [];
            debug.skips = [];
            debug.enable = function(name) {
                try {
                    localStorage.debug = name
                } catch (e) {}
                var split = (name || "").split(/[\s,]+/),
                    len = split.length;
                for (var i = 0; i < len; i++) {
                    name = split[i].replace("*", ".*?");
                    if (name[0] === "-") {
                        debug.skips.push(new RegExp("^" + name.substr(1) + "$"))
                    } else {
                        debug.names.push(new RegExp("^" + name + "$"))
                    }
                }
            };
            debug.disable = function() {
                debug.enable("")
            };
            debug.humanize = function(ms) {
                var sec = 1e3,
                    min = 60 * 1e3,
                    hour = 60 * min;
                if (ms >= hour) return (ms / hour).toFixed(1) + "h";
                if (ms >= min) return (ms / min).toFixed(1) + "m";
                if (ms >= sec) return (ms / sec | 0) + "s";
                return ms + "ms"
            };
            debug.enabled = function(name) {
                for (var i = 0, len = debug.skips.length; i < len; i++) {
                    if (debug.skips[i].test(name)) {
                        return false
                    }
                }
                for (var i = 0, len = debug.names.length; i < len; i++) {
                    if (debug.names[i].test(name)) {
                        return true
                    }
                }
                return false
            };

            function coerce(val) {
                if (val instanceof Error) return val.stack || val.message;
                return val
            }
            try {
                if (window.localStorage) debug.enable(localStorage.debug)
            } catch (e) {}
        }, {}],
        383: [function(require, module, exports) {
            var nextTick = require("next-tick");

            function when(condition, fn, interval) {
                if (typeof condition !== "function") throw new Error("condition must be a function");
                if (typeof fn !== "function") throw new Error("fn must be a function");
                if (condition()) return nextTick(fn);
                var ref = setInterval(function() {
                    if (!condition()) return;
                    nextTick(fn);
                    clearInterval(ref)
                }, interval || 10)
            }
            module.exports = when
        }, {
            "next-tick": 406
        }],
        384: [function(require, module, exports) {
            module.exports = parse;
            var innerHTMLBug = false;
            var bugTestDiv;
            if (typeof document !== "undefined") {
                bugTestDiv = document.createElement("div");
                bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
                innerHTMLBug = !bugTestDiv.getElementsByTagName("link").length;
                bugTestDiv = undefined
            }
            var map = {
                legend: [1, "<fieldset>", "</fieldset>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                _default: innerHTMLBug ? [1, "X<div>", "</div>"] : [0, "", ""]
            };
            map.td = map.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
            map.option = map.optgroup = [1, '<select multiple="multiple">', "</select>"];
            map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, "<table>", "</table>"];
            map.polyline = map.ellipse = map.polygon = map.circle = map.text = map.line = map.path = map.rect = map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', "</svg>"];

            function parse(html, doc) {
                if ("string" != typeof html) throw new TypeError("String expected");
                if (!doc) doc = document;
                var m = /<([\w:]+)/.exec(html);
                if (!m) return doc.createTextNode(html);
                html = html.replace(/^\s+|\s+$/g, "");
                var tag = m[1];
                if (tag == "body") {
                    var el = doc.createElement("html");
                    el.innerHTML = html;
                    return el.removeChild(el.lastChild)
                }
                var wrap = map[tag] || map._default;
                var depth = wrap[0];
                var prefix = wrap[1];
                var suffix = wrap[2];
                var el = doc.createElement("div");
                el.innerHTML = prefix + html + suffix;
                while (depth--) el = el.lastChild;
                if (el.firstChild == el.lastChild) {
                    return el.removeChild(el.firstChild)
                }
                var fragment = doc.createDocumentFragment();
                while (el.firstChild) {
                    fragment.appendChild(el.removeChild(el.firstChild))
                }
                return fragment
            }
        }, {}],
        385: [function(require, module, exports) {
            "use strict";
            var hasOwn = Object.prototype.hasOwnProperty;
            var toStr = Object.prototype.toString;
            var defineProperty = Object.defineProperty;
            var gOPD = Object.getOwnPropertyDescriptor;
            var isArray = function isArray(arr) {
                if (typeof Array.isArray === "function") {
                    return Array.isArray(arr)
                }
                return toStr.call(arr) === "[object Array]"
            };
            var isPlainObject = function isPlainObject(obj) {
                if (!obj || toStr.call(obj) !== "[object Object]") {
                    return false
                }
                var hasOwnConstructor = hasOwn.call(obj, "constructor");
                var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
                if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
                    return false
                }
                var key;
                for (key in obj) {}
                return typeof key === "undefined" || hasOwn.call(obj, key)
            };
            var setProperty = function setProperty(target, options) {
                if (defineProperty && options.name === "__proto__") {
                    defineProperty(target, options.name, {
                        enumerable: true,
                        configurable: true,
                        value: options.newValue,
                        writable: true
                    })
                } else {
                    target[options.name] = options.newValue
                }
            };
            var getProperty = function getProperty(obj, name) {
                if (name === "__proto__") {
                    if (!hasOwn.call(obj, name)) {
                        return void 0
                    } else if (gOPD) {
                        return gOPD(obj, name).value
                    }
                }
                return obj[name]
            };
            module.exports = function extend() {
                var options, name, src, copy, copyIsArray, clone;
                var target = arguments[0];
                var i = 1;
                var length = arguments.length;
                var deep = false;
                if (typeof target === "boolean") {
                    deep = target;
                    target = arguments[1] || {};
                    i = 2
                }
                if (target == null || typeof target !== "object" && typeof target !== "function") {
                    target = {}
                }
                for (; i < length; ++i) {
                    options = arguments[i];
                    if (options != null) {
                        for (name in options) {
                            src = getProperty(target, name);
                            copy = getProperty(options, name);
                            if (target !== copy) {
                                if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                                    if (copyIsArray) {
                                        copyIsArray = false;
                                        clone = src && isArray(src) ? src : []
                                    } else {
                                        clone = src && isPlainObject(src) ? src : {}
                                    }
                                    setProperty(target, {
                                        name: name,
                                        newValue: extend(deep, clone, copy)
                                    })
                                } else if (typeof copy !== "undefined") {
                                    setProperty(target, {
                                        name: name,
                                        newValue: copy
                                    })
                                }
                            }
                        }
                    }
                }
                return target
            }
        }, {}],
        386: [function(require, module, exports) {
            var debug = require("debug");
            module.exports = generate;

            function generate(name, options) {
                var log = debug("global-queue:" + name);
                options = options || {};
                return function(args) {
                    args = [].slice.call(arguments);
                    window[name] || (window[name] = []);
                    log("%o", args);
                    options.wrap === false ? window[name].push.apply(window[name], args) : window[name].push(args)
                }
            }
        }, {
            debug: 387
        }],
        387: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 388,
            _process: 412,
            dup: 39
        }],
        388: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        389: [function(require, module, exports) {
            try {
                module.exports = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest
            } catch (err) {
                module.exports = false
            }
        }, {}],
        390: [function(require, module, exports) {
            if (typeof Object.create === "function") {
                module.exports = function inherits(ctor, superCtor) {
                    if (superCtor) {
                        ctor.super_ = superCtor;
                        ctor.prototype = Object.create(superCtor.prototype, {
                            constructor: {
                                value: ctor,
                                enumerable: false,
                                writable: true,
                                configurable: true
                            }
                        })
                    }
                }
            } else {
                module.exports = function inherits(ctor, superCtor) {
                    if (superCtor) {
                        ctor.super_ = superCtor;
                        var TempCtor = function() {};
                        TempCtor.prototype = superCtor.prototype;
                        ctor.prototype = new TempCtor;
                        ctor.prototype.constructor = ctor
                    }
                }
            }
        }, {}],
        391: [function(require, module, exports) {
            module.exports = function isEmail(string) {
                return /.+\@.+\..+/.test(string)
            }
        }, {}],
        392: [function(require, module, exports) {
            "use strict";
            var objProto = Object.prototype;
            var owns = objProto.hasOwnProperty;
            var toStr = objProto.toString;
            var symbolValueOf;
            if (typeof Symbol === "function") {
                symbolValueOf = Symbol.prototype.valueOf
            }
            var bigIntValueOf;
            if (typeof BigInt === "function") {
                bigIntValueOf = BigInt.prototype.valueOf
            }
            var isActualNaN = function(value) {
                return value !== value
            };
            var NON_HOST_TYPES = {
                boolean: 1,
                number: 1,
                string: 1,
                undefined: 1
            };
            var base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
            var hexRegex = /^[A-Fa-f0-9]+$/;
            var is = {};
            is.a = is.type = function(value, type) {
                return typeof value === type
            };
            is.defined = function(value) {
                return typeof value !== "undefined"
            };
            is.empty = function(value) {
                var type = toStr.call(value);
                var key;
                if (type === "[object Array]" || type === "[object Arguments]" || type === "[object String]") {
                    return value.length === 0
                }
                if (type === "[object Object]") {
                    for (key in value) {
                        if (owns.call(value, key)) {
                            return false
                        }
                    }
                    return true
                }
                return !value
            };
            is.equal = function equal(value, other) {
                if (value === other) {
                    return true
                }
                var type = toStr.call(value);
                var key;
                if (type !== toStr.call(other)) {
                    return false
                }
                if (type === "[object Object]") {
                    for (key in value) {
                        if (!is.equal(value[key], other[key]) || !(key in other)) {
                            return false
                        }
                    }
                    for (key in other) {
                        if (!is.equal(value[key], other[key]) || !(key in value)) {
                            return false
                        }
                    }
                    return true
                }
                if (type === "[object Array]") {
                    key = value.length;
                    if (key !== other.length) {
                        return false
                    }
                    while (key--) {
                        if (!is.equal(value[key], other[key])) {
                            return false
                        }
                    }
                    return true
                }
                if (type === "[object Function]") {
                    return value.prototype === other.prototype
                }
                if (type === "[object Date]") {
                    return value.getTime() === other.getTime()
                }
                return false
            };
            is.hosted = function(value, host) {
                var type = typeof host[value];
                return type === "object" ? !!host[value] : !NON_HOST_TYPES[type]
            };
            is.instance = is["instanceof"] = function(value, constructor) {
                return value instanceof constructor
            };
            is.nil = is["null"] = function(value) {
                return value === null
            };
            is.undef = is.undefined = function(value) {
                return typeof value === "undefined"
            };
            is.args = is.arguments = function(value) {
                var isStandardArguments = toStr.call(value) === "[object Arguments]";
                var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
                return isStandardArguments || isOldArguments
            };
            is.array = Array.isArray || function(value) {
                return toStr.call(value) === "[object Array]"
            };
            is.args.empty = function(value) {
                return is.args(value) && value.length === 0
            };
            is.array.empty = function(value) {
                return is.array(value) && value.length === 0
            };
            is.arraylike = function(value) {
                return !!value && !is.bool(value) && owns.call(value, "length") && isFinite(value.length) && is.number(value.length) && value.length >= 0
            };
            is.bool = is["boolean"] = function(value) {
                return toStr.call(value) === "[object Boolean]"
            };
            is["false"] = function(value) {
                return is.bool(value) && Boolean(Number(value)) === false
            };
            is["true"] = function(value) {
                return is.bool(value) && Boolean(Number(value)) === true
            };
            is.date = function(value) {
                return toStr.call(value) === "[object Date]"
            };
            is.date.valid = function(value) {
                return is.date(value) && !isNaN(Number(value))
            };
            is.element = function(value) {
                return value !== undefined && typeof HTMLElement !== "undefined" && value instanceof HTMLElement && value.nodeType === 1
            };
            is.error = function(value) {
                return toStr.call(value) === "[object Error]"
            };
            is.fn = is["function"] = function(value) {
                var isAlert = typeof window !== "undefined" && value === window.alert;
                if (isAlert) {
                    return true
                }
                var str = toStr.call(value);
                return str === "[object Function]" || str === "[object GeneratorFunction]" || str === "[object AsyncFunction]"
            };
            is.number = function(value) {
                return toStr.call(value) === "[object Number]"
            };
            is.infinite = function(value) {
                return value === Infinity || value === -Infinity
            };
            is.decimal = function(value) {
                return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0
            };
            is.divisibleBy = function(value, n) {
                var isDividendInfinite = is.infinite(value);
                var isDivisorInfinite = is.infinite(n);
                var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
                return isDividendInfinite || isDivisorInfinite || isNonZeroNumber && value % n === 0
            };
            is.integer = is["int"] = function(value) {
                return is.number(value) && !isActualNaN(value) && value % 1 === 0
            };
            is.maximum = function(value, others) {
                if (isActualNaN(value)) {
                    throw new TypeError("NaN is not a valid value")
                } else if (!is.arraylike(others)) {
                    throw new TypeError("second argument must be array-like")
                }
                var len = others.length;
                while (--len >= 0) {
                    if (value < others[len]) {
                        return false
                    }
                }
                return true
            };
            is.minimum = function(value, others) {
                if (isActualNaN(value)) {
                    throw new TypeError("NaN is not a valid value")
                } else if (!is.arraylike(others)) {
                    throw new TypeError("second argument must be array-like")
                }
                var len = others.length;
                while (--len >= 0) {
                    if (value > others[len]) {
                        return false
                    }
                }
                return true
            };
            is.nan = function(value) {
                return !is.number(value) || value !== value
            };
            is.even = function(value) {
                return is.infinite(value) || is.number(value) && value === value && value % 2 === 0
            };
            is.odd = function(value) {
                return is.infinite(value) || is.number(value) && value === value && value % 2 !== 0
            };
            is.ge = function(value, other) {
                if (isActualNaN(value) || isActualNaN(other)) {
                    throw new TypeError("NaN is not a valid value")
                }
                return !is.infinite(value) && !is.infinite(other) && value >= other
            };
            is.gt = function(value, other) {
                if (isActualNaN(value) || isActualNaN(other)) {
                    throw new TypeError("NaN is not a valid value")
                }
                return !is.infinite(value) && !is.infinite(other) && value > other
            };
            is.le = function(value, other) {
                if (isActualNaN(value) || isActualNaN(other)) {
                    throw new TypeError("NaN is not a valid value")
                }
                return !is.infinite(value) && !is.infinite(other) && value <= other
            };
            is.lt = function(value, other) {
                if (isActualNaN(value) || isActualNaN(other)) {
                    throw new TypeError("NaN is not a valid value")
                }
                return !is.infinite(value) && !is.infinite(other) && value < other
            };
            is.within = function(value, start, finish) {
                if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
                    throw new TypeError("NaN is not a valid value")
                } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
                    throw new TypeError("all arguments must be numbers")
                }
                var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
                return isAnyInfinite || value >= start && value <= finish
            };
            is.object = function(value) {
                return toStr.call(value) === "[object Object]"
            };
            is.primitive = function isPrimitive(value) {
                if (!value) {
                    return true
                }
                if (typeof value === "object" || is.object(value) || is.fn(value) || is.array(value)) {
                    return false
                }
                return true
            };
            is.hash = function(value) {
                return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval
            };
            is.regexp = function(value) {
                return toStr.call(value) === "[object RegExp]"
            };
            is.string = function(value) {
                return toStr.call(value) === "[object String]"
            };
            is.base64 = function(value) {
                return is.string(value) && (!value.length || base64Regex.test(value))
            };
            is.hex = function(value) {
                return is.string(value) && (!value.length || hexRegex.test(value))
            };
            is.symbol = function(value) {
                return typeof Symbol === "function" && toStr.call(value) === "[object Symbol]" && typeof symbolValueOf.call(value) === "symbol"
            };
            is.bigint = function(value) {
                return typeof BigInt === "function" && toStr.call(value) === "[object BigInt]" && typeof bigIntValueOf.call(value) === "bigint"
            };
            module.exports = is
        }, {}],
        393: [function(require, module, exports) {
            var toString = {}.toString;
            module.exports = Array.isArray || function(arr) {
                return toString.call(arr) == "[object Array]"
            }
        }, {}],
        394: [function(require, module, exports) {
            "use strict";
            var isArray = require("isarray");
            module.exports = function isObject(val) {
                return val != null && typeof val === "object" && isArray(val) === false
            }
        }, {
            isarray: 393
        }],
        395: [function(require, module, exports) {
            module.exports = isDate;
            var isoformat = "^\\d{4}-\\d{2}-\\d{2}" + "((T\\d{2}:\\d{2}(:\\d{2})?)" + "(\\.\\d{1,6})?" + "(Z|(\\+|-)\\d{2}:\\d{2})?)?$";
            var matcher = new RegExp(isoformat);

            function isDate(val) {
                return typeof val === "string" && matcher.test(val) && !isNaN(Date.parse(val))
            }
        }, {}],
        396: [function(require, module, exports) {
            (function(global) {
                (function() {
                    var isLoader = typeof define === "function" && define.amd;
                    var objectTypes = {
                        function: true,
                        object: true
                    };
                    var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
                    var root = objectTypes[typeof window] && window || this,
                        freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;
                    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
                        root = freeGlobal
                    }

                    function runInContext(context, exports) {
                        context || (context = root.Object());
                        exports || (exports = root.Object());
                        var Number = context.Number || root.Number,
                            String = context.String || root.String,
                            Object = context.Object || root.Object,
                            Date = context.Date || root.Date,
                            SyntaxError = context.SyntaxError || root.SyntaxError,
                            TypeError = context.TypeError || root.TypeError,
                            Math = context.Math || root.Math,
                            nativeJSON = context.JSON || root.JSON;
                        if (typeof nativeJSON == "object" && nativeJSON) {
                            exports.stringify = nativeJSON.stringify;
                            exports.parse = nativeJSON.parse
                        }
                        var objectProto = Object.prototype,
                            getClass = objectProto.toString,
                            isProperty = objectProto.hasOwnProperty,
                            undefined;

                        function attempt(func, errorFunc) {
                            try {
                                func()
                            } catch (exception) {
                                if (errorFunc) {
                                    errorFunc()
                                }
                            }
                        }
                        var isExtended = new Date(-0xc782b5b800cec);
                        attempt(function() {
                            isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 && isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708
                        });

                        function has(name) {
                            if (has[name] != null) {
                                return has[name]
                            }
                            var isSupported;
                            if (name == "bug-string-char-index") {
                                isSupported = "a" [0] != "a"
                            } else if (name == "json") {
                                isSupported = has("json-stringify") && has("date-serialization") && has("json-parse")
                            } else if (name == "date-serialization") {
                                isSupported = has("json-stringify") && isExtended;
                                if (isSupported) {
                                    var stringify = exports.stringify;
                                    attempt(function() {
                                        isSupported = stringify(new Date(-864e13)) == '"-271821-04-20T00:00:00.000Z"' && stringify(new Date(864e13)) == '"+275760-09-13T00:00:00.000Z"' && stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"'
                                    })
                                }
                            } else {
                                var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                if (name == "json-stringify") {
                                    var stringify = exports.stringify,
                                        stringifySupported = typeof stringify == "function";
                                    if (stringifySupported) {
                                        (value = function() {
                                            return 1
                                        }).toJSON = value;
                                        attempt(function() {
                                            stringifySupported = stringify(0) === "0" && stringify(new Number) === "0" && stringify(new String) == '""' && stringify(getClass) === undefined && stringify(undefined) === undefined && stringify() === undefined && stringify(value) === "1" && stringify([value]) == "[1]" && stringify([undefined]) == "[null]" && stringify(null) == "null" && stringify([undefined, getClass, null]) == "[null,null,null]" && stringify({
                                                a: [value, true, false, null, "\0\b\n\f\r\t"]
                                            }) == serialized && stringify(null, value) === "1" && stringify([1, 2], null, 1) == "[\n 1,\n 2\n]"
                                        }, function() {
                                            stringifySupported = false
                                        })
                                    }
                                    isSupported = stringifySupported
                                }
                                if (name == "json-parse") {
                                    var parse = exports.parse,
                                        parseSupported;
                                    if (typeof parse == "function") {
                                        attempt(function() {
                                            if (parse("0") === 0 && !parse(false)) {
                                                value = parse(serialized);
                                                parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                                                if (parseSupported) {
                                                    attempt(function() {
                                                        parseSupported = !parse('"\t"')
                                                    });
                                                    if (parseSupported) {
                                                        attempt(function() {
                                                            parseSupported = parse("01") !== 1
                                                        })
                                                    }
                                                    if (parseSupported) {
                                                        attempt(function() {
                                                            parseSupported = parse("1.") !== 1
                                                        })
                                                    }
                                                }
                                            }
                                        }, function() {
                                            parseSupported = false
                                        })
                                    }
                                    isSupported = parseSupported
                                }
                            }
                            return has[name] = !!isSupported
                        }
                        has["bug-string-char-index"] = has["date-serialization"] = has["json"] = has["json-stringify"] = has["json-parse"] = null;
                        if (!has("json")) {
                            var functionClass = "[object Function]",
                                dateClass = "[object Date]",
                                numberClass = "[object Number]",
                                stringClass = "[object String]",
                                arrayClass = "[object Array]",
                                booleanClass = "[object Boolean]";
                            var charIndexBuggy = has("bug-string-char-index");
                            var forOwn = function(object, callback) {
                                var size = 0,
                                    Properties, dontEnums, property;
                                (Properties = function() {
                                    this.valueOf = 0
                                }).prototype.valueOf = 0;
                                dontEnums = new Properties;
                                for (property in dontEnums) {
                                    if (isProperty.call(dontEnums, property)) {
                                        size++
                                    }
                                }
                                Properties = dontEnums = null;
                                if (!size) {
                                    dontEnums = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                                    forOwn = function(object, callback) {
                                        var isFunction = getClass.call(object) == functionClass,
                                            property, length;
                                        var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
                                        for (property in object) {
                                            if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                                                callback(property)
                                            }
                                        }
                                        for (length = dontEnums.length; property = dontEnums[--length];) {
                                            if (hasProperty.call(object, property)) {
                                                callback(property)
                                            }
                                        }
                                    }
                                } else {
                                    forOwn = function(object, callback) {
                                        var isFunction = getClass.call(object) == functionClass,
                                            property, isConstructor;
                                        for (property in object) {
                                            if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                                                callback(property)
                                            }
                                        }
                                        if (isConstructor || isProperty.call(object, property = "constructor")) {
                                            callback(property)
                                        }
                                    }
                                }
                                return forOwn(object, callback)
                            };
                            if (!has("json-stringify") && !has("date-serialization")) {
                                var Escapes = {
                                    92: "\\\\",
                                    34: '\\"',
                                    8: "\\b",
                                    12: "\\f",
                                    10: "\\n",
                                    13: "\\r",
                                    9: "\\t"
                                };
                                var leadingZeroes = "000000";
                                var toPaddedString = function(width, value) {
                                    return (leadingZeroes + (value || 0)).slice(-width)
                                };
                                var serializeDate = function(value) {
                                    var getData, year, month, date, time, hours, minutes, seconds, milliseconds;
                                    if (!isExtended) {
                                        var floor = Math.floor;
                                        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                                        var getDay = function(year, month) {
                                            return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400)
                                        };
                                        getData = function(value) {
                                            date = floor(value / 864e5);
                                            for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                                            for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                                            date = 1 + date - getDay(year, month);
                                            time = (value % 864e5 + 864e5) % 864e5;
                                            hours = floor(time / 36e5) % 24;
                                            minutes = floor(time / 6e4) % 60;
                                            seconds = floor(time / 1e3) % 60;
                                            milliseconds = time % 1e3
                                        }
                                    } else {
                                        getData = function(value) {
                                            year = value.getUTCFullYear();
                                            month = value.getUTCMonth();
                                            date = value.getUTCDate();
                                            hours = value.getUTCHours();
                                            minutes = value.getUTCMinutes();
                                            seconds = value.getUTCSeconds();
                                            milliseconds = value.getUTCMilliseconds()
                                        }
                                    }
                                    serializeDate = function(value) {
                                        if (value > -1 / 0 && value < 1 / 0) {
                                            getData(value);
                                            value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) + "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) + "." + toPaddedString(3, milliseconds) + "Z";
                                            year = month = date = hours = minutes = seconds = milliseconds = null
                                        } else {
                                            value = null
                                        }
                                        return value
                                    };
                                    return serializeDate(value)
                                };
                                if (has("json-stringify") && !has("date-serialization")) {
                                    function dateToJSON(key) {
                                        return serializeDate(this)
                                    }
                                    var nativeStringify = exports.stringify;
                                    exports.stringify = function(source, filter, width) {
                                        var nativeToJSON = Date.prototype.toJSON;
                                        Date.prototype.toJSON = dateToJSON;
                                        var result = nativeStringify(source, filter, width);
                                        Date.prototype.toJSON = nativeToJSON;
                                        return result
                                    }
                                } else {
                                    var unicodePrefix = "\\u00";
                                    var escapeChar = function(character) {
                                        var charCode = character.charCodeAt(0),
                                            escaped = Escapes[charCode];
                                        if (escaped) {
                                            return escaped
                                        }
                                        return unicodePrefix + toPaddedString(2, charCode.toString(16))
                                    };
                                    var reEscape = /[\x00-\x1f\x22\x5c]/g;
                                    var quote = function(value) {
                                        reEscape.lastIndex = 0;
                                        return '"' + (reEscape.test(value) ? value.replace(reEscape, escapeChar) : value) + '"'
                                    };
                                    var serialize = function(property, object, callback, properties, whitespace, indentation, stack) {
                                        var value, type, className, results, element, index, length, prefix, result;
                                        attempt(function() {
                                            value = object[property]
                                        });
                                        if (typeof value == "object" && value) {
                                            if (value.getUTCFullYear && getClass.call(value) == dateClass && value.toJSON === Date.prototype.toJSON) {
                                                value = serializeDate(value)
                                            } else if (typeof value.toJSON == "function") {
                                                value = value.toJSON(property)
                                            }
                                        }
                                        if (callback) {
                                            value = callback.call(object, property, value)
                                        }
                                        if (value == undefined) {
                                            return value === undefined ? value : "null"
                                        }
                                        type = typeof value;
                                        if (type == "object") {
                                            className = getClass.call(value)
                                        }
                                        switch (className || type) {
                                            case "boolean":
                                            case booleanClass:
                                                return "" + value;
                                            case "number":
                                            case numberClass:
                                                return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
                                            case "string":
                                            case stringClass:
                                                return quote("" + value)
                                        }
                                        if (typeof value == "object") {
                                            for (length = stack.length; length--;) {
                                                if (stack[length] === value) {
                                                    throw TypeError()
                                                }
                                            }
                                            stack.push(value);
                                            results = [];
                                            prefix = indentation;
                                            indentation += whitespace;
                                            if (className == arrayClass) {
                                                for (index = 0, length = value.length; index < length; index++) {
                                                    element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                                                    results.push(element === undefined ? "null" : element)
                                                }
                                                result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]"
                                            } else {
                                                forOwn(properties || value, function(property) {
                                                    var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                                                    if (element !== undefined) {
                                                        results.push(quote(property) + ":" + (whitespace ? " " : "") + element)
                                                    }
                                                });
                                                result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}"
                                            }
                                            stack.pop();
                                            return result
                                        }
                                    };
                                    exports.stringify = function(source, filter, width) {
                                        var whitespace, callback, properties, className;
                                        if (objectTypes[typeof filter] && filter) {
                                            className = getClass.call(filter);
                                            if (className == functionClass) {
                                                callback = filter
                                            } else if (className == arrayClass) {
                                                properties = {};
                                                for (var index = 0, length = filter.length, value; index < length;) {
                                                    value = filter[index++];
                                                    className = getClass.call(value);
                                                    if (className == "[object String]" || className == "[object Number]") {
                                                        properties[value] = 1
                                                    }
                                                }
                                            }
                                        }
                                        if (width) {
                                            className = getClass.call(width);
                                            if (className == numberClass) {
                                                if ((width -= width % 1) > 0) {
                                                    if (width > 10) {
                                                        width = 10
                                                    }
                                                    for (whitespace = ""; whitespace.length < width;) {
                                                        whitespace += " "
                                                    }
                                                }
                                            } else if (className == stringClass) {
                                                whitespace = width.length <= 10 ? width : width.slice(0, 10)
                                            }
                                        }
                                        return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", [])
                                    }
                                }
                            }
                            if (!has("json-parse")) {
                                var fromCharCode = String.fromCharCode;
                                var Unescapes = {
                                    92: "\\",
                                    34: '"',
                                    47: "/",
                                    98: "\b",
                                    116: "\t",
                                    110: "\n",
                                    102: "\f",
                                    114: "\r"
                                };
                                var Index, Source;
                                var abort = function() {
                                    Index = Source = null;
                                    throw SyntaxError()
                                };
                                var lex = function() {
                                    var source = Source,
                                        length = source.length,
                                        value, begin, position, isSigned, charCode;
                                    while (Index < length) {
                                        charCode = source.charCodeAt(Index);
                                        switch (charCode) {
                                            case 9:
                                            case 10:
                                            case 13:
                                            case 32:
                                                Index++;
                                                break;
                                            case 123:
                                            case 125:
                                            case 91:
                                            case 93:
                                            case 58:
                                            case 44:
                                                value = charIndexBuggy ? source.charAt(Index) : source[Index];
                                                Index++;
                                                return value;
                                            case 34:
                                                for (value = "@", Index++; Index < length;) {
                                                    charCode = source.charCodeAt(Index);
                                                    if (charCode < 32) {
                                                        abort()
                                                    } else if (charCode == 92) {
                                                        charCode = source.charCodeAt(++Index);
                                                        switch (charCode) {
                                                            case 92:
                                                            case 34:
                                                            case 47:
                                                            case 98:
                                                            case 116:
                                                            case 110:
                                                            case 102:
                                                            case 114:
                                                                value += Unescapes[charCode];
                                                                Index++;
                                                                break;
                                                            case 117:
                                                                begin = ++Index;
                                                                for (position = Index + 4; Index < position; Index++) {
                                                                    charCode = source.charCodeAt(Index);
                                                                    if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                                                                        abort()
                                                                    }
                                                                }
                                                                value += fromCharCode("0x" + source.slice(begin, Index));
                                                                break;
                                                            default:
                                                                abort()
                                                        }
                                                    } else {
                                                        if (charCode == 34) {
                                                            break
                                                        }
                                                        charCode = source.charCodeAt(Index);
                                                        begin = Index;
                                                        while (charCode >= 32 && charCode != 92 && charCode != 34) {
                                                            charCode = source.charCodeAt(++Index)
                                                        }
                                                        value += source.slice(begin, Index)
                                                    }
                                                }
                                                if (source.charCodeAt(Index) == 34) {
                                                    Index++;
                                                    return value
                                                }
                                                abort();
                                            default:
                                                begin = Index;
                                                if (charCode == 45) {
                                                    isSigned = true;
                                                    charCode = source.charCodeAt(++Index)
                                                }
                                                if (charCode >= 48 && charCode <= 57) {
                                                    if (charCode == 48 && (charCode = source.charCodeAt(Index + 1), charCode >= 48 && charCode <= 57)) {
                                                        abort()
                                                    }
                                                    isSigned = false;
                                                    for (; Index < length && (charCode = source.charCodeAt(Index), charCode >= 48 && charCode <= 57); Index++);
                                                    if (source.charCodeAt(Index) == 46) {
                                                        position = ++Index;
                                                        for (; position < length; position++) {
                                                            charCode = source.charCodeAt(position);
                                                            if (charCode < 48 || charCode > 57) {
                                                                break
                                                            }
                                                        }
                                                        if (position == Index) {
                                                            abort()
                                                        }
                                                        Index = position
                                                    }
                                                    charCode = source.charCodeAt(Index);
                                                    if (charCode == 101 || charCode == 69) {
                                                        charCode = source.charCodeAt(++Index);
                                                        if (charCode == 43 || charCode == 45) {
                                                            Index++
                                                        }
                                                        for (position = Index; position < length; position++) {
                                                            charCode = source.charCodeAt(position);
                                                            if (charCode < 48 || charCode > 57) {
                                                                break
                                                            }
                                                        }
                                                        if (position == Index) {
                                                            abort()
                                                        }
                                                        Index = position
                                                    }
                                                    return +source.slice(begin, Index)
                                                }
                                                if (isSigned) {
                                                    abort()
                                                }
                                                var temp = source.slice(Index, Index + 4);
                                                if (temp == "true") {
                                                    Index += 4;
                                                    return true
                                                } else if (temp == "fals" && source.charCodeAt(Index + 4) == 101) {
                                                    Index += 5;
                                                    return false
                                                } else if (temp == "null") {
                                                    Index += 4;
                                                    return null
                                                }
                                                abort()
                                        }
                                    }
                                    return "$"
                                };
                                var get = function(value) {
                                    var results, hasMembers;
                                    if (value == "$") {
                                        abort()
                                    }
                                    if (typeof value == "string") {
                                        if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
                                            return value.slice(1)
                                        }
                                        if (value == "[") {
                                            results = [];
                                            for (;;) {
                                                value = lex();
                                                if (value == "]") {
                                                    break
                                                }
                                                if (hasMembers) {
                                                    if (value == ",") {
                                                        value = lex();
                                                        if (value == "]") {
                                                            abort()
                                                        }
                                                    } else {
                                                        abort()
                                                    }
                                                } else {
                                                    hasMembers = true
                                                }
                                                if (value == ",") {
                                                    abort()
                                                }
                                                results.push(get(value))
                                            }
                                            return results
                                        } else if (value == "{") {
                                            results = {};
                                            for (;;) {
                                                value = lex();
                                                if (value == "}") {
                                                    break
                                                }
                                                if (hasMembers) {
                                                    if (value == ",") {
                                                        value = lex();
                                                        if (value == "}") {
                                                            abort()
                                                        }
                                                    } else {
                                                        abort()
                                                    }
                                                } else {
                                                    hasMembers = true
                                                }
                                                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                                                    abort()
                                                }
                                                results[value.slice(1)] = get(lex())
                                            }
                                            return results
                                        }
                                        abort()
                                    }
                                    return value
                                };
                                var update = function(source, property, callback) {
                                    var element = walk(source, property, callback);
                                    if (element === undefined) {
                                        delete source[property]
                                    } else {
                                        source[property] = element
                                    }
                                };
                                var walk = function(source, property, callback) {
                                    var value = source[property],
                                        length;
                                    if (typeof value == "object" && value) {
                                        if (getClass.call(value) == arrayClass) {
                                            for (length = value.length; length--;) {
                                                update(getClass, forOwn, value, length, callback)
                                            }
                                        } else {
                                            forOwn(value, function(property) {
                                                update(value, property, callback)
                                            })
                                        }
                                    }
                                    return callback.call(source, property, value)
                                };
                                exports.parse = function(source, callback) {
                                    var result, value;
                                    Index = 0;
                                    Source = "" + source;
                                    result = get(lex());
                                    if (lex() != "$") {
                                        abort()
                                    }
                                    Index = Source = null;
                                    return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result
                                }
                            }
                        }
                        exports.runInContext = runInContext;
                        return exports
                    }
                    if (freeExports && !isLoader) {
                        runInContext(root, freeExports)
                    } else {
                        var nativeJSON = root.JSON,
                            previousJSON = root.JSON3,
                            isRestored = false;
                        var JSON3 = runInContext(root, root.JSON3 = {
                            noConflict: function() {
                                if (!isRestored) {
                                    isRestored = true;
                                    root.JSON = nativeJSON;
                                    root.JSON3 = previousJSON;
                                    nativeJSON = previousJSON = null
                                }
                                return JSON3
                            }
                        });
                        root.JSON = {
                            parse: JSON3.parse,
                            stringify: JSON3.stringify
                        }
                    }
                    if (isLoader) {
                        define(function() {
                            return JSON3
                        })
                    }
                }).call(this)
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {}],
        397: [function(require, module, exports) {
            var debug = require("debug")("jsonp");
            module.exports = jsonp;
            var count = 0;

            function noop() {}

            function jsonp(url, opts, fn) {
                if ("function" == typeof opts) {
                    fn = opts;
                    opts = {}
                }
                if (!opts) opts = {};
                var prefix = opts.prefix || "__jp";
                var id = opts.name || prefix + count++;
                var param = opts.param || "callback";
                var timeout = null != opts.timeout ? opts.timeout : 6e4;
                var enc = encodeURIComponent;
                var target = document.getElementsByTagName("script")[0] || document.head;
                var script;
                var timer;
                if (timeout) {
                    timer = setTimeout(function() {
                        cleanup();
                        if (fn) fn(new Error("Timeout"))
                    }, timeout)
                }

                function cleanup() {
                    if (script.parentNode) script.parentNode.removeChild(script);
                    window[id] = noop;
                    if (timer) clearTimeout(timer)
                }

                function cancel() {
                    if (window[id]) {
                        cleanup()
                    }
                }
                window[id] = function(data) {
                    debug("jsonp got", data);
                    cleanup();
                    if (fn) fn(null, data)
                };
                url += (~url.indexOf("?") ? "&" : "?") + param + "=" + enc(id);
                url = url.replace("?&", "?");
                debug('jsonp req "%s"', url);
                script = document.createElement("script");
                script.src = url;
                target.parentNode.insertBefore(script, target);
                return cancel
            }
        }, {
            debug: 398
        }],
        398: [function(require, module, exports) {
            arguments[4][39][0].apply(exports, arguments)
        }, {
            "./debug": 399,
            _process: 412,
            dup: 39
        }],
        399: [function(require, module, exports) {
            arguments[4][40][0].apply(exports, arguments)
        }, {
            dup: 40,
            ms: 401
        }],
        400: [function(require, module, exports) {
            var is = require("is");
            var onload = require("script-onload");
            var tick = require("next-tick");
            module.exports = function loadIframe(options, fn) {
                if (!options) throw new Error("Cant load nothing...");
                if (is.string(options)) options = {
                    src: options
                };
                var https = document.location.protocol === "https:" || document.location.protocol === "chrome-extension:";
                if (options.src && options.src.indexOf("//") === 0) {
                    options.src = https ? "https:" + options.src : "http:" + options.src
                }
                if (https && options.https) options.src = options.https;
                else if (!https && options.http) options.src = options.http;
                var iframe = document.createElement("iframe");
                iframe.src = options.src;
                iframe.width = options.width || 1;
                iframe.height = options.height || 1;
                iframe.style.display = "none";
                if (is.fn(fn)) {
                    onload(iframe, fn)
                }
                tick(function() {
                    var firstScript = document.getElementsByTagName("script")[0];
                    firstScript.parentNode.insertBefore(iframe, firstScript)
                });
                return iframe
            }
        }, {
            is: 392,
            "next-tick": 406,
            "script-onload": 414
        }],
        401: [function(require, module, exports) {
            var s = 1e3;
            var m = s * 60;
            var h = m * 60;
            var d = h * 24;
            var y = d * 365.25;
            module.exports = function(val, options) {
                options = options || {};
                var type = typeof val;
                if (type === "string" && val.length > 0) {
                    return parse(val)
                } else if (type === "number" && isNaN(val) === false) {
                    return options.long ? fmtLong(val) : fmtShort(val)
                }
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val))
            };

            function parse(str) {
                str = String(str);
                if (str.length > 100) {
                    return
                }
                var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
                if (!match) {
                    return
                }
                var n = parseFloat(match[1]);
                var type = (match[2] || "ms").toLowerCase();
                switch (type) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return n * y;
                    case "days":
                    case "day":
                    case "d":
                        return n * d;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return n * h;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return n * m;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return n * s;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return n;
                    default:
                        return undefined
                }
            }

            function fmtShort(ms) {
                if (ms >= d) {
                    return Math.round(ms / d) + "d"
                }
                if (ms >= h) {
                    return Math.round(ms / h) + "h"
                }
                if (ms >= m) {
                    return Math.round(ms / m) + "m"
                }
                if (ms >= s) {
                    return Math.round(ms / s) + "s"
                }
                return ms + "ms"
            }

            function fmtLong(ms) {
                return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms"
            }

            function plural(ms, n, name) {
                if (ms < n) {
                    return
                }
                if (ms < n * 1.5) {
                    return Math.floor(ms / n) + " " + name
                }
                return Math.ceil(ms / n) + " " + name + "s"
            }
        }, {}],
        402: [function(require, module, exports) {
            "use strict";
            var is = require("is");
            var isodate = require("@segment/isodate");
            var milliseconds = require("./milliseconds");
            var seconds = require("./seconds");
            module.exports = function newDate(val) {
                if (is.date(val)) return val;
                if (is.number(val)) return new Date(toMs(val));
                if (isodate.is(val)) {
                    return isodate.parse(val)
                }
                if (milliseconds.is(val)) {
                    return milliseconds.parse(val)
                }
                if (seconds.is(val)) {
                    return seconds.parse(val)
                }
                return new Date(val)
            };

            function toMs(num) {
                if (num < 315576e5) return num * 1e3;
                return num
            }
        }, {
            "./milliseconds": 403,
            "./seconds": 404,
            "@segment/isodate": 405,
            is: 392
        }],
        403: [function(require, module, exports) {
            "use strict";
            var matcher = /\d{13}/;
            exports.is = function(string) {
                return matcher.test(string)
            };
            exports.parse = function(millis) {
                millis = parseInt(millis, 10);
                return new Date(millis)
            }
        }, {}],
        404: [function(require, module, exports) {
            "use strict";
            var matcher = /\d{10}/;
            exports.is = function(string) {
                return matcher.test(string)
            };
            exports.parse = function(seconds) {
                var millis = parseInt(seconds, 10) * 1e3;
                return new Date(millis)
            }
        }, {}],
        405: [function(require, module, exports) {
            "use strict";
            var matcher = /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
            exports.parse = function(iso) {
                var numericKeys = [1, 5, 6, 7, 11, 12];
                var arr = matcher.exec(iso);
                var offset = 0;
                if (!arr) {
                    return new Date(iso)
                }
                for (var i = 0, val; val = numericKeys[i]; i++) {
                    arr[val] = parseInt(arr[val], 10) || 0
                }
                arr[2] = parseInt(arr[2], 10) || 1;
                arr[3] = parseInt(arr[3], 10) || 1;
                arr[2]--;
                arr[8] = arr[8] ? (arr[8] + "00").substring(0, 3) : 0;
                if (arr[4] === " ") {
                    offset = (new Date).getTimezoneOffset()
                } else if (arr[9] !== "Z" && arr[10]) {
                    offset = arr[11] * 60 + arr[12];
                    if (arr[10] === "+") {
                        offset = 0 - offset
                    }
                }
                var millis = Date.UTC(arr[1], arr[2], arr[3], arr[5], arr[6] + offset, arr[7], arr[8]);
                return new Date(millis)
            };
            exports.is = function(string, strict) {
                if (strict && /^\d{4}-\d{2}-\d{2}/.test(string) === false) {
                    return false
                }
                return matcher.test(string)
            }
        }, {}],
        406: [function(require, module, exports) {
            arguments[4][223][0].apply(exports, arguments)
        }, {
            _process: 412,
            dup: 223,
            timers: 430
        }],
        407: [function(require, module, exports) {
            var identity = function(_) {
                return _
            };
            module.exports = multiple(find);
            module.exports.find = module.exports;
            module.exports.replace = function(obj, key, val, options) {
                multiple(replace).call(this, obj, key, val, options);
                return obj
            };
            module.exports.del = function(obj, key, options) {
                multiple(del).call(this, obj, key, null, options);
                return obj
            };

            function multiple(fn) {
                return function(obj, path, val, options) {
                    normalize = options && isFunction(options.normalizer) ? options.normalizer : defaultNormalize;
                    path = normalize(path);
                    var key;
                    var finished = false;
                    while (!finished) loop();

                    function loop() {
                        for (key in obj) {
                            var normalizedKey = normalize(key);
                            if (0 === path.indexOf(normalizedKey)) {
                                var temp = path.substr(normalizedKey.length);
                                if (temp.charAt(0) === "." || temp.length === 0) {
                                    path = temp.substr(1);
                                    var child = obj[key];
                                    if (null == child) {
                                        finished = true;
                                        return
                                    }
                                    if (!path.length) {
                                        finished = true;
                                        return
                                    }
                                    obj = child;
                                    return
                                }
                            }
                        }
                        key = undefined;
                        finished = true
                    }
                    if (!key) return;
                    if (null == obj) return obj;
                    return fn(obj, key, val)
                }
            }

            function find(obj, key) {
                if (obj.hasOwnProperty(key)) return obj[key]
            }

            function del(obj, key) {
                if (obj.hasOwnProperty(key)) delete obj[key];
                return obj
            }

            function replace(obj, key, val) {
                if (obj.hasOwnProperty(key)) obj[key] = val;
                return obj
            }

            function defaultNormalize(path) {
                return path.replace(/[^a-zA-Z0-9\.]+/g, "").toLowerCase()
            }

            function isFunction(val) {
                return typeof val === "function"
            }
        }, {}],
        408: [function(require, module, exports) {
            var has = Object.prototype.hasOwnProperty;
            exports.keys = Object.keys || function(obj) {
                var keys = [];
                for (var key in obj) {
                    if (has.call(obj, key)) {
                        keys.push(key)
                    }
                }
                return keys
            };
            exports.values = function(obj) {
                var vals = [];
                for (var key in obj) {
                    if (has.call(obj, key)) {
                        vals.push(obj[key])
                    }
                }
                return vals
            };
            exports.merge = function(a, b) {
                for (var key in b) {
                    if (has.call(b, key)) {
                        a[key] = b[key]
                    }
                }
                return a
            };
            exports.length = function(obj) {
                return exports.keys(obj).length
            };
            exports.isEmpty = function(obj) {
                return 0 == exports.length(obj)
            }
        }, {}],
        409: [function(require, module, exports) {
            module.exports = omit;

            function omit(keys, object) {
                var ret = {};
                for (var item in object) {
                    ret[item] = object[item]
                }
                for (var i = 0; i < keys.length; i++) {
                    delete ret[keys[i]]
                }
                return ret
            }
        }, {}],
        410: [function(require, module, exports) {
            var each = require("each");
            var body = false;
            var callbacks = [];
            module.exports = function onBody(callback) {
                if (body) {
                    call(callback)
                } else {
                    callbacks.push(callback)
                }
            };
            var interval = setInterval(function() {
                if (!document.body) return;
                body = true;
                each(callbacks, call);
                clearInterval(interval)
            }, 5);

            function call(callback) {
                callback(document.body)
            }
        }, {
            each: 371
        }],
        411: [function(require, module, exports) {
            module.exports = pick;

            function pick(obj) {
                var keys = [].slice.call(arguments, 1);
                var ret = {};
                for (var i = 0, key; key = keys[i]; i++) {
                    if (key in obj) ret[key] = obj[key]
                }
                return ret
            }
        }, {}],
        412: [function(require, module, exports) {
            var process = module.exports = {};
            var cachedSetTimeout;
            var cachedClearTimeout;

            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined")
            }

            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined")
            }(function() {
                try {
                    if (typeof setTimeout === "function") {
                        cachedSetTimeout = setTimeout
                    } else {
                        cachedSetTimeout = defaultSetTimout
                    }
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout
                }
                try {
                    if (typeof clearTimeout === "function") {
                        cachedClearTimeout = clearTimeout
                    } else {
                        cachedClearTimeout = defaultClearTimeout
                    }
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout
                }
            })();

            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                    return setTimeout(fun, 0)
                }
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0)
                }
                try {
                    return cachedSetTimeout(fun, 0)
                } catch (e) {
                    try {
                        return cachedSetTimeout.call(null, fun, 0)
                    } catch (e) {
                        return cachedSetTimeout.call(this, fun, 0)
                    }
                }
            }

            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                    return clearTimeout(marker)
                }
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker)
                }
                try {
                    return cachedClearTimeout(marker)
                } catch (e) {
                    try {
                        return cachedClearTimeout.call(null, marker)
                    } catch (e) {
                        return cachedClearTimeout.call(this, marker)
                    }
                }
            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;

            function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                    return
                }
                draining = false;
                if (currentQueue.length) {
                    queue = currentQueue.concat(queue)
                } else {
                    queueIndex = -1
                }
                if (queue.length) {
                    drainQueue()
                }
            }

            function drainQueue() {
                if (draining) {
                    return
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) {
                        if (currentQueue) {
                            currentQueue[queueIndex].run()
                        }
                    }
                    queueIndex = -1;
                    len = queue.length
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout)
            }
            process.nextTick = function(fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i]
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    runTimeout(drainQueue)
                }
            };

            function Item(fun, array) {
                this.fun = fun;
                this.array = array
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array)
            };
            process.title = "browser";
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = "";
            process.versions = {};

            function noop() {}
            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;
            process.listeners = function(name) {
                return []
            };
            process.binding = function(name) {
                throw new Error("process.binding is not supported")
            };
            process.cwd = function() {
                return "/"
            };
            process.chdir = function(dir) {
                throw new Error("process.chdir is not supported")
            };
            process.umask = function() {
                return 0
            }
        }, {}],
        413: [function(require, module, exports) {
            var type = require("type-component");
            module.exports = reject;

            function reject(obj, fn) {
                fn = fn || compact;
                return "array" == type(obj) ? reject.array(obj, fn) : reject.object(obj, fn)
            }
            reject.array = function(arr, fn) {
                var ret = [];
                for (var i = 0; i < arr.length; ++i) {
                    if (!fn(arr[i], i)) ret[ret.length] = arr[i]
                }
                return ret
            };
            reject.object = function(obj, fn) {
                var ret = {};
                for (var k in obj) {
                    if (obj.hasOwnProperty(k) && !fn(obj[k], k)) {
                        ret[k] = obj[k]
                    }
                }
                return ret
            };
            reject.types = reject.type = function(obj, types) {
                if (!Array.isArray(types)) types = [types];
                return reject(obj, function(value) {
                    return -1 != types.indexOf(type(value))
                })
            };

            function compact(value) {
                return null == value
            }
        }, {
            "type-component": 439
        }],
        414: [function(require, module, exports) {
            module.exports = function(el, fn) {
                return el.addEventListener ? add(el, fn) : attach(el, fn)
            };

            function add(el, fn) {
                el.addEventListener("load", function(_, e) {
                    fn(null, e)
                }, false);
                el.addEventListener("error", function(e) {
                    var err = new Error('script error "' + el.src + '"');
                    err.event = e;
                    fn(err)
                }, false)
            }

            function attach(el, fn) {
                el.attachEvent("onreadystatechange", function(e) {
                    if (!/complete|loaded/.test(el.readyState)) return;
                    fn(null, e)
                });
                el.attachEvent("onerror", function(e) {
                    var err = new Error('failed to load the script "' + el.src + '"');
                    err.event = e || window.event;
                    fn(err)
                })
            }
        }, {}],
        415: [function(require, module, exports) {
            "use strict";
            var get = require("obj-case");
            module.exports = function(proto) {
                proto.zip = trait("postalCode", "zip");
                proto.country = trait("country");
                proto.street = trait("street");
                proto.state = trait("state");
                proto.city = trait("city");
                proto.region = trait("region");

                function trait(a, b) {
                    return function() {
                        var traits = this.traits();
                        var props = this.properties ? this.properties() : {};
                        return get(traits, "address." + a) || get(traits, a) || (b ? get(traits, "address." + b) : null) || (b ? get(traits, b) : null) || get(props, "address." + a) || get(props, a) || (b ? get(props, "address." + b) : null) || (b ? get(props, b) : null)
                    }
                }
            }
        }, {
            "obj-case": 407
        }],
        416: [function(require, module, exports) {
            "use strict";
            var inherit = require("./utils").inherit;
            var Facade = require("./facade");

            function Alias(dictionary, opts) {
                Facade.call(this, dictionary, opts)
            }
            inherit(Alias, Facade);
            Alias.prototype.action = function() {
                return "alias"
            };
            Alias.prototype.type = Alias.prototype.action;
            Alias.prototype.previousId = function() {
                return this.field("previousId") || this.field("from")
            };
            Alias.prototype.from = Alias.prototype.previousId;
            Alias.prototype.userId = function() {
                return this.field("userId") || this.field("to")
            };
            Alias.prototype.to = Alias.prototype.userId;
            module.exports = Alias
        }, {
            "./facade": 418,
            "./utils": 426
        }],
        417: [function(require, module, exports) {
            "use strict";
            var inherit = require("./utils").inherit;
            var Facade = require("./facade");

            function Delete(dictionary, opts) {
                Facade.call(this, dictionary, opts)
            }
            inherit(Delete, Facade);
            Delete.prototype.type = function() {
                return "delete"
            };
            module.exports = Delete
        }, {
            "./facade": 418,
            "./utils": 426
        }],
        418: [function(require, module, exports) {
            "use strict";
            var address = require("./address");
            var clone = require("./utils").clone;
            var isEnabled = require("./is-enabled");
            var newDate = require("new-date");
            var objCase = require("obj-case");
            var traverse = require("@segment/isodate-traverse");
            var type = require("./utils").type;

            function Facade(obj, opts) {
                opts = opts || {};
                if (!("clone" in opts)) opts.clone = true;
                if (opts.clone) obj = clone(obj);
                if (!("traverse" in opts)) opts.traverse = true;
                if (!("timestamp" in obj)) obj.timestamp = new Date;
                else obj.timestamp = newDate(obj.timestamp);
                if (opts.traverse) traverse(obj);
                this.opts = opts;
                this.obj = obj
            }
            Facade.prototype.proxy = function(field) {
                var fields = field.split(".");
                field = fields.shift();
                var obj = this[field] || this.field(field);
                if (!obj) return obj;
                if (typeof obj === "function") obj = obj.call(this) || {};
                if (fields.length === 0) return this.opts.clone ? transform(obj) : obj;
                obj = objCase(obj, fields.join("."));
                return this.opts.clone ? transform(obj) : obj
            };
            Facade.prototype.field = function(field) {
                var obj = this.obj[field];
                return this.opts.clone ? transform(obj) : obj
            };
            Facade.proxy = function(field) {
                return function() {
                    return this.proxy(field)
                }
            };
            Facade.field = function(field) {
                return function() {
                    return this.field(field)
                }
            };
            Facade.multi = function(path) {
                return function() {
                    var multi = this.proxy(path + "s");
                    if (type(multi) === "array") return multi;
                    var one = this.proxy(path);
                    if (one) one = [this.opts.clone ? clone(one) : one];
                    return one || []
                }
            };
            Facade.one = function(path) {
                return function() {
                    var one = this.proxy(path);
                    if (one) return one;
                    var multi = this.proxy(path + "s");
                    if (type(multi) === "array") return multi[0]
                }
            };
            Facade.prototype.json = function() {
                var ret = this.opts.clone ? clone(this.obj) : this.obj;
                if (this.type) ret.type = this.type();
                return ret
            };
            Facade.prototype.options = function(integration) {
                var obj = this.obj.options || this.obj.context || {};
                var options = this.opts.clone ? clone(obj) : obj;
                if (!integration) return options;
                if (!this.enabled(integration)) return;
                var integrations = this.integrations();
                var value = integrations[integration] || objCase(integrations, integration);
                if (typeof value !== "object") value = objCase(this.options(), integration);
                return typeof value === "object" ? value : {}
            };
            Facade.prototype.context = Facade.prototype.options;
            Facade.prototype.enabled = function(integration) {
                var allEnabled = this.proxy("options.providers.all");
                if (typeof allEnabled !== "boolean") allEnabled = this.proxy("options.all");
                if (typeof allEnabled !== "boolean") allEnabled = this.proxy("integrations.all");
                if (typeof allEnabled !== "boolean") allEnabled = true;
                var enabled = allEnabled && isEnabled(integration);
                var options = this.integrations();
                if (options.providers && options.providers.hasOwnProperty(integration)) {
                    enabled = options.providers[integration]
                }
                if (options.hasOwnProperty(integration)) {
                    var settings = options[integration];
                    if (typeof settings === "boolean") {
                        enabled = settings
                    } else {
                        enabled = true
                    }
                }
                return !!enabled
            };
            Facade.prototype.integrations = function() {
                return this.obj.integrations || this.proxy("options.providers") || this.options()
            };
            Facade.prototype.active = function() {
                var active = this.proxy("options.active");
                if (active === null || active === undefined) active = true;
                return active
            };
            Facade.prototype.anonymousId = function() {
                return this.field("anonymousId") || this.field("sessionId")
            };
            Facade.prototype.sessionId = Facade.prototype.anonymousId;
            Facade.prototype.groupId = Facade.proxy("options.groupId");
            Facade.prototype.traits = function(aliases) {
                var ret = this.proxy("options.traits") || {};
                var id = this.userId();
                aliases = aliases || {};
                if (id) ret.id = id;
                for (var alias in aliases) {
                    var value = this[alias] == null ? this.proxy("options.traits." + alias) : this[alias]();
                    if (value == null) continue;
                    ret[aliases[alias]] = value;
                    delete ret[alias]
                }
                return ret
            };
            Facade.prototype.library = function() {
                var library = this.proxy("options.library");
                if (!library) return {
                    name: "unknown",
                    version: null
                };
                if (typeof library === "string") return {
                    name: library,
                    version: null
                };
                return library
            };
            Facade.prototype.device = function() {
                var device = this.proxy("context.device");
                if (type(device) !== "object") device = {};
                var library = this.library().name;
                if (device.type) return device;
                if (library.indexOf("ios") > -1) device.type = "ios";
                if (library.indexOf("android") > -1) device.type = "android";
                return device
            };
            Facade.prototype.userAgent = Facade.proxy("context.userAgent");
            Facade.prototype.timezone = Facade.proxy("context.timezone");
            Facade.prototype.timestamp = Facade.field("timestamp");
            Facade.prototype.channel = Facade.field("channel");
            Facade.prototype.ip = Facade.proxy("context.ip");
            Facade.prototype.userId = Facade.field("userId");
            address(Facade.prototype);

            function transform(obj) {
                return clone(obj)
            }
            module.exports = Facade
        }, {
            "./address": 415,
            "./is-enabled": 422,
            "./utils": 426,
            "@segment/isodate-traverse": 353,
            "new-date": 402,
            "obj-case": 407
        }],
        419: [function(require, module, exports) {
            "use strict";
            var inherit = require("./utils").inherit;
            var isEmail = require("is-email");
            var newDate = require("new-date");
            var Facade = require("./facade");

            function Group(dictionary, opts) {
                Facade.call(this, dictionary, opts)
            }
            inherit(Group, Facade);
            Group.prototype.action = function() {
                return "group"
            };
            Group.prototype.type = Group.prototype.action;
            Group.prototype.groupId = Facade.field("groupId");
            Group.prototype.created = function() {
                var created = this.proxy("traits.createdAt") || this.proxy("traits.created") || this.proxy("properties.createdAt") || this.proxy("properties.created");
                if (created) return newDate(created)
            };
            Group.prototype.email = function() {
                var email = this.proxy("traits.email");
                if (email) return email;
                var groupId = this.groupId();
                if (isEmail(groupId)) return groupId
            };
            Group.prototype.traits = function(aliases) {
                var ret = this.properties();
                var id = this.groupId();
                aliases = aliases || {};
                if (id) ret.id = id;
                for (var alias in aliases) {
                    var value = this[alias] == null ? this.proxy("traits." + alias) : this[alias]();
                    if (value == null) continue;
                    ret[aliases[alias]] = value;
                    delete ret[alias]
                }
                return ret
            };
            Group.prototype.name = Facade.proxy("traits.name");
            Group.prototype.industry = Facade.proxy("traits.industry");
            Group.prototype.employees = Facade.proxy("traits.employees");
            Group.prototype.properties = function() {
                return this.field("traits") || this.field("properties") || {}
            };
            module.exports = Group
        }, {
            "./facade": 418,
            "./utils": 426,
            "is-email": 391,
            "new-date": 402
        }],
        420: [function(require, module, exports) {
            "use strict";
            var Facade = require("./facade");
            var get = require("obj-case");
            var inherit = require("./utils").inherit;
            var isEmail = require("is-email");
            var newDate = require("new-date");
            var trim = require("trim");
            var type = require("./utils").type;

            function Identify(dictionary, opts) {
                Facade.call(this, dictionary, opts)
            }
            inherit(Identify, Facade);
            Identify.prototype.action = function() {
                return "identify"
            };
            Identify.prototype.type = Identify.prototype.action;
            Identify.prototype.traits = function(aliases) {
                var ret = this.field("traits") || {};
                var id = this.userId();
                aliases = aliases || {};
                if (id) ret.id = id;
                for (var alias in aliases) {
                    var value = this[alias] == null ? this.proxy("traits." + alias) : this[alias]();
                    if (value == null) continue;
                    ret[aliases[alias]] = value;
                    if (alias !== aliases[alias]) delete ret[alias]
                }
                return ret
            };
            Identify.prototype.email = function() {
                var email = this.proxy("traits.email");
                if (email) return email;
                var userId = this.userId();
                if (isEmail(userId)) return userId
            };
            Identify.prototype.created = function() {
                var created = this.proxy("traits.created") || this.proxy("traits.createdAt");
                if (created) return newDate(created)
            };
            Identify.prototype.companyCreated = function() {
                var created = this.proxy("traits.company.created") || this.proxy("traits.company.createdAt");
                if (created) {
                    return newDate(created)
                }
            };
            Identify.prototype.companyName = function() {
                return this.proxy("traits.company.name")
            };
            Identify.prototype.name = function() {
                var name = this.proxy("traits.name");
                if (typeof name === "string") {
                    return trim(name)
                }
                var firstName = this.firstName();
                var lastName = this.lastName();
                if (firstName && lastName) {
                    return trim(firstName + " " + lastName)
                }
            };
            Identify.prototype.firstName = function() {
                var firstName = this.proxy("traits.firstName");
                if (typeof firstName === "string") {
                    return trim(firstName)
                }
                var name = this.proxy("traits.name");
                if (typeof name === "string") {
                    return trim(name).split(" ")[0]
                }
            };
            Identify.prototype.lastName = function() {
                var lastName = this.proxy("traits.lastName");
                if (typeof lastName === "string") {
                    return trim(lastName)
                }
                var name = this.proxy("traits.name");
                if (typeof name !== "string") {
                    return
                }
                var space = trim(name).indexOf(" ");
                if (space === -1) {
                    return
                }
                return trim(name.substr(space + 1))
            };
            Identify.prototype.uid = function() {
                return this.userId() || this.username() || this.email()
            };
            Identify.prototype.description = function() {
                return this.proxy("traits.description") || this.proxy("traits.background")
            };
            Identify.prototype.age = function() {
                var date = this.birthday();
                var age = get(this.traits(), "age");
                if (age != null) return age;
                if (type(date) !== "date") return;
                var now = new Date;
                return now.getFullYear() - date.getFullYear()
            };
            Identify.prototype.avatar = function() {
                var traits = this.traits();
                return get(traits, "avatar") || get(traits, "photoUrl") || get(traits, "avatarUrl")
            };
            Identify.prototype.position = function() {
                var traits = this.traits();
                return get(traits, "position") || get(traits, "jobTitle")
            };
            Identify.prototype.username = Facade.proxy("traits.username");
            Identify.prototype.website = Facade.one("traits.website");
            Identify.prototype.websites = Facade.multi("traits.website");
            Identify.prototype.phone = Facade.one("traits.phone");
            Identify.prototype.phones = Facade.multi("traits.phone");
            Identify.prototype.address = Facade.proxy("traits.address");
            Identify.prototype.gender = Facade.proxy("traits.gender");
            Identify.prototype.birthday = Facade.proxy("traits.birthday");
            module.exports = Identify
        }, {
            "./facade": 418,
            "./utils": 426,
            "is-email": 391,
            "new-date": 402,
            "obj-case": 407,
            trim: 438
        }],
        421: [function(require, module, exports) {
            "use strict";
            var Facade = require("./facade");
            Facade.Alias = require("./alias");
            Facade.Group = require("./group");
            Facade.Identify = require("./identify");
            Facade.Track = require("./track");
            Facade.Page = require("./page");
            Facade.Screen = require("./screen");
            Facade.Delete = require("./delete");
            module.exports = Facade
        }, {
            "./alias": 416,
            "./delete": 417,
            "./facade": 418,
            "./group": 419,
            "./identify": 420,
            "./page": 423,
            "./screen": 424,
            "./track": 425
        }],
        422: [function(require, module, exports) {
            "use strict";
            var disabled = {
                Salesforce: true
            };
            module.exports = function(integration) {
                return !disabled[integration]
            }
        }, {}],
        423: [function(require, module, exports) {
            "use strict";
            var inherit = require("./utils").inherit;
            var Facade = require("./facade");
            var Track = require("./track");
            var isEmail = require("is-email");

            function Page(dictionary, opts) {
                Facade.call(this, dictionary, opts)
            }
            inherit(Page, Facade);
            Page.prototype.action = function() {
                return "page"
            };
            Page.prototype.type = Page.prototype.action;
            Page.prototype.category = Facade.field("category");
            Page.prototype.name = Facade.field("name");
            Page.prototype.title = Facade.proxy("properties.title");
            Page.prototype.path = Facade.proxy("properties.path");
            Page.prototype.url = Facade.proxy("properties.url");
            Page.prototype.referrer = function() {
                return this.proxy("context.referrer.url") || this.proxy("context.page.referrer") || this.proxy("properties.referrer")
            };
            Page.prototype.properties = function(aliases) {
                var props = this.field("properties") || {};
                var category = this.category();
                var name = this.name();
                aliases = aliases || {};
                if (category) props.category = category;
                if (name) props.name = name;
                for (var alias in aliases) {
                    var value = this[alias] == null ? this.proxy("properties." + alias) : this[alias]();
                    if (value == null) continue;
                    props[aliases[alias]] = value;
                    if (alias !== aliases[alias]) delete props[alias]
                }
                return props
            };
            Page.prototype.email = function() {
                var email = this.proxy("context.traits.email") || this.proxy("properties.email");
                if (email) return email;
                var userId = this.userId();
                if (isEmail(userId)) return userId
            };
            Page.prototype.fullName = function() {
                var category = this.category();
                var name = this.name();
                return name && category ? category + " " + name : name
            };
            Page.prototype.event = function(name) {
                return name ? "Viewed " + name + " Page" : "Loaded a Page"
            };
            Page.prototype.track = function(name) {
                var json = this.json();
                json.event = this.event(name);
                json.timestamp = this.timestamp();
                json.properties = this.properties();
                return new Track(json, this.opts)
            };
            module.exports = Page
        }, {
            "./facade": 418,
            "./track": 425,
            "./utils": 426,
            "is-email": 391
        }],
        424: [function(require, module, exports) {
            "use strict";
            var inherit = require("./utils").inherit;
            var Page = require("./page");
            var Track = require("./track");

            function Screen(dictionary, opts) {
                Page.call(this, dictionary, opts)
            }
            inherit(Screen, Page);
            Screen.prototype.action = function() {
                return "screen"
            };
            Screen.prototype.type = Screen.prototype.action;
            Screen.prototype.event = function(name) {
                return name ? "Viewed " + name + " Screen" : "Loaded a Screen"
            };
            Screen.prototype.track = function(name) {
                var json = this.json();
                json.event = this.event(name);
                json.timestamp = this.timestamp();
                json.properties = this.properties();
                return new Track(json, this.opts)
            };
            module.exports = Screen
        }, {
            "./page": 423,
            "./track": 425,
            "./utils": 426
        }],
        425: [function(require, module, exports) {
            "use strict";
            var inherit = require("./utils").inherit;
            var type = require("./utils").type;
            var Facade = require("./facade");
            var Identify = require("./identify");
            var isEmail = require("is-email");
            var get = require("obj-case");

            function Track(dictionary, opts) {
                Facade.call(this, dictionary, opts)
            }
            inherit(Track, Facade);
            Track.prototype.action = function() {
                return "track"
            };
            Track.prototype.type = Track.prototype.action;
            Track.prototype.event = Facade.field("event");
            Track.prototype.value = Facade.proxy("properties.value");
            Track.prototype.category = Facade.proxy("properties.category");
            Track.prototype.id = Facade.proxy("properties.id");
            Track.prototype.productId = function() {
                return this.proxy("properties.product_id") || this.proxy("properties.productId")
            };
            Track.prototype.promotionId = function() {
                return this.proxy("properties.promotion_id") || this.proxy("properties.promotionId")
            };
            Track.prototype.cartId = function() {
                return this.proxy("properties.cart_id") || this.proxy("properties.cartId")
            };
            Track.prototype.checkoutId = function() {
                return this.proxy("properties.checkout_id") || this.proxy("properties.checkoutId")
            };
            Track.prototype.paymentId = function() {
                return this.proxy("properties.payment_id") || this.proxy("properties.paymentId")
            };
            Track.prototype.couponId = function() {
                return this.proxy("properties.coupon_id") || this.proxy("properties.couponId")
            };
            Track.prototype.wishlistId = function() {
                return this.proxy("properties.wishlist_id") || this.proxy("properties.wishlistId")
            };
            Track.prototype.reviewId = function() {
                return this.proxy("properties.review_id") || this.proxy("properties.reviewId")
            };
            Track.prototype.orderId = function() {
                return this.proxy("properties.id") || this.proxy("properties.order_id") || this.proxy("properties.orderId")
            };
            Track.prototype.sku = Facade.proxy("properties.sku");
            Track.prototype.tax = Facade.proxy("properties.tax");
            Track.prototype.name = Facade.proxy("properties.name");
            Track.prototype.price = Facade.proxy("properties.price");
            Track.prototype.total = Facade.proxy("properties.total");
            Track.prototype.repeat = Facade.proxy("properties.repeat");
            Track.prototype.coupon = Facade.proxy("properties.coupon");
            Track.prototype.shipping = Facade.proxy("properties.shipping");
            Track.prototype.discount = Facade.proxy("properties.discount");
            Track.prototype.shippingMethod = function() {
                return this.proxy("properties.shipping_method") || this.proxy("properties.shippingMethod")
            };
            Track.prototype.paymentMethod = function() {
                return this.proxy("properties.payment_method") || this.proxy("properties.paymentMethod")
            };
            Track.prototype.description = Facade.proxy("properties.description");
            Track.prototype.plan = Facade.proxy("properties.plan");
            Track.prototype.subtotal = function() {
                var subtotal = get(this.properties(), "subtotal");
                var total = this.total() || this.revenue();
                if (subtotal) return subtotal;
                if (!total) return 0;
                if (this.total()) {
                    var n = this.tax();
                    if (n) total -= n;
                    n = this.shipping();
                    if (n) total -= n;
                    n = this.discount();
                    if (n) total += n
                }
                return total
            };
            Track.prototype.products = function() {
                var props = this.properties();
                var products = get(props, "products");
                return type(products) === "array" ? products : []
            };
            Track.prototype.quantity = function() {
                var props = this.obj.properties || {};
                return props.quantity || 1
            };
            Track.prototype.currency = function() {
                var props = this.obj.properties || {};
                return props.currency || "USD"
            };
            Track.prototype.referrer = function() {
                return this.proxy("context.referrer.url") || this.proxy("context.page.referrer") || this.proxy("properties.referrer")
            };
            Track.prototype.query = Facade.proxy("options.query");
            Track.prototype.properties = function(aliases) {
                var ret = this.field("properties") || {};
                aliases = aliases || {};
                for (var alias in aliases) {
                    var value = this[alias] == null ? this.proxy("properties." + alias) : this[alias]();
                    if (value == null) continue;
                    ret[aliases[alias]] = value;
                    delete ret[alias]
                }
                return ret
            };
            Track.prototype.username = function() {
                return this.proxy("traits.username") || this.proxy("properties.username") || this.userId() || this.sessionId()
            };
            Track.prototype.email = function() {
                var email = this.proxy("traits.email") || this.proxy("properties.email") || this.proxy("options.traits.email");
                if (email) return email;
                var userId = this.userId();
                if (isEmail(userId)) return userId
            };
            Track.prototype.revenue = function() {
                var revenue = this.proxy("properties.revenue");
                var event = this.event();
                var orderCompletedRegExp = /^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i;
                if (!revenue && event && event.match(orderCompletedRegExp)) {
                    revenue = this.proxy("properties.total")
                }
                return currency(revenue)
            };
            Track.prototype.cents = function() {
                var revenue = this.revenue();
                return typeof revenue !== "number" ? this.value() || 0 : revenue * 100
            };
            Track.prototype.identify = function() {
                var json = this.json();
                json.traits = this.traits();
                return new Identify(json, this.opts)
            };

            function currency(val) {
                if (!val) return;
                if (typeof val === "number") {
                    return val
                }
                if (typeof val !== "string") {
                    return
                }
                val = val.replace(/\$/g, "");
                val = parseFloat(val);
                if (!isNaN(val)) {
                    return val
                }
            }
            module.exports = Track
        }, {
            "./facade": 418,
            "./identify": 420,
            "./utils": 426,
            "is-email": 391,
            "obj-case": 407
        }],
        426: [function(require, module, exports) {
            "use strict";
            exports.inherit = require("inherits");
            exports.clone = require("@ndhoule/clone");
            exports.type = require("type-component")
        }, {
            "@ndhoule/clone": 5,
            inherits: 390,
            "type-component": 439
        }],
        427: [function(require, module, exports) {
            module.exports = function(str, options) {
                options || (options = {});
                return str.toLowerCase().replace(options.replace || /[^a-z0-9]/g, " ").replace(/^ +| +$/g, "").replace(/ +/g, options.separator || "-")
            }
        }, {}],
        428: [function(require, module, exports) {
            (function(factory) {
                if (typeof exports === "object") {
                    module.exports = factory()
                } else if (typeof define === "function" && define.amd) {
                    define(factory)
                } else {
                    var glob;
                    try {
                        glob = window
                    } catch (e) {
                        glob = self
                    }
                    glob.SparkMD5 = factory()
                }
            })(function(undefined) {
                "use strict";
                var add32 = function(a, b) {
                        return a + b & 4294967295
                    },
                    hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

                function cmn(q, a, b, x, s, t) {
                    a = add32(add32(a, q), add32(x, t));
                    return add32(a << s | a >>> 32 - s, b)
                }

                function ff(a, b, c, d, x, s, t) {
                    return cmn(b & c | ~b & d, a, b, x, s, t)
                }

                function gg(a, b, c, d, x, s, t) {
                    return cmn(b & d | c & ~d, a, b, x, s, t)
                }

                function hh(a, b, c, d, x, s, t) {
                    return cmn(b ^ c ^ d, a, b, x, s, t)
                }

                function ii(a, b, c, d, x, s, t) {
                    return cmn(c ^ (b | ~d), a, b, x, s, t)
                }

                function md5cycle(x, k) {
                    var a = x[0],
                        b = x[1],
                        c = x[2],
                        d = x[3];
                    a = ff(a, b, c, d, k[0], 7, -680876936);
                    d = ff(d, a, b, c, k[1], 12, -389564586);
                    c = ff(c, d, a, b, k[2], 17, 606105819);
                    b = ff(b, c, d, a, k[3], 22, -1044525330);
                    a = ff(a, b, c, d, k[4], 7, -176418897);
                    d = ff(d, a, b, c, k[5], 12, 1200080426);
                    c = ff(c, d, a, b, k[6], 17, -1473231341);
                    b = ff(b, c, d, a, k[7], 22, -45705983);
                    a = ff(a, b, c, d, k[8], 7, 1770035416);
                    d = ff(d, a, b, c, k[9], 12, -1958414417);
                    c = ff(c, d, a, b, k[10], 17, -42063);
                    b = ff(b, c, d, a, k[11], 22, -1990404162);
                    a = ff(a, b, c, d, k[12], 7, 1804603682);
                    d = ff(d, a, b, c, k[13], 12, -40341101);
                    c = ff(c, d, a, b, k[14], 17, -1502002290);
                    b = ff(b, c, d, a, k[15], 22, 1236535329);
                    a = gg(a, b, c, d, k[1], 5, -165796510);
                    d = gg(d, a, b, c, k[6], 9, -1069501632);
                    c = gg(c, d, a, b, k[11], 14, 643717713);
                    b = gg(b, c, d, a, k[0], 20, -373897302);
                    a = gg(a, b, c, d, k[5], 5, -701558691);
                    d = gg(d, a, b, c, k[10], 9, 38016083);
                    c = gg(c, d, a, b, k[15], 14, -660478335);
                    b = gg(b, c, d, a, k[4], 20, -405537848);
                    a = gg(a, b, c, d, k[9], 5, 568446438);
                    d = gg(d, a, b, c, k[14], 9, -1019803690);
                    c = gg(c, d, a, b, k[3], 14, -187363961);
                    b = gg(b, c, d, a, k[8], 20, 1163531501);
                    a = gg(a, b, c, d, k[13], 5, -1444681467);
                    d = gg(d, a, b, c, k[2], 9, -51403784);
                    c = gg(c, d, a, b, k[7], 14, 1735328473);
                    b = gg(b, c, d, a, k[12], 20, -1926607734);
                    a = hh(a, b, c, d, k[5], 4, -378558);
                    d = hh(d, a, b, c, k[8], 11, -2022574463);
                    c = hh(c, d, a, b, k[11], 16, 1839030562);
                    b = hh(b, c, d, a, k[14], 23, -35309556);
                    a = hh(a, b, c, d, k[1], 4, -1530992060);
                    d = hh(d, a, b, c, k[4], 11, 1272893353);
                    c = hh(c, d, a, b, k[7], 16, -155497632);
                    b = hh(b, c, d, a, k[10], 23, -1094730640);
                    a = hh(a, b, c, d, k[13], 4, 681279174);
                    d = hh(d, a, b, c, k[0], 11, -358537222);
                    c = hh(c, d, a, b, k[3], 16, -722521979);
                    b = hh(b, c, d, a, k[6], 23, 76029189);
                    a = hh(a, b, c, d, k[9], 4, -640364487);
                    d = hh(d, a, b, c, k[12], 11, -421815835);
                    c = hh(c, d, a, b, k[15], 16, 530742520);
                    b = hh(b, c, d, a, k[2], 23, -995338651);
                    a = ii(a, b, c, d, k[0], 6, -198630844);
                    d = ii(d, a, b, c, k[7], 10, 1126891415);
                    c = ii(c, d, a, b, k[14], 15, -1416354905);
                    b = ii(b, c, d, a, k[5], 21, -57434055);
                    a = ii(a, b, c, d, k[12], 6, 1700485571);
                    d = ii(d, a, b, c, k[3], 10, -1894986606);
                    c = ii(c, d, a, b, k[10], 15, -1051523);
                    b = ii(b, c, d, a, k[1], 21, -2054922799);
                    a = ii(a, b, c, d, k[8], 6, 1873313359);
                    d = ii(d, a, b, c, k[15], 10, -30611744);
                    c = ii(c, d, a, b, k[6], 15, -1560198380);
                    b = ii(b, c, d, a, k[13], 21, 1309151649);
                    a = ii(a, b, c, d, k[4], 6, -145523070);
                    d = ii(d, a, b, c, k[11], 10, -1120210379);
                    c = ii(c, d, a, b, k[2], 15, 718787259);
                    b = ii(b, c, d, a, k[9], 21, -343485551);
                    x[0] = add32(a, x[0]);
                    x[1] = add32(b, x[1]);
                    x[2] = add32(c, x[2]);
                    x[3] = add32(d, x[3])
                }

                function md5blk(s) {
                    var md5blks = [],
                        i;
                    for (i = 0; i < 64; i += 4) {
                        md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
                    }
                    return md5blks
                }

                function md5blk_array(a) {
                    var md5blks = [],
                        i;
                    for (i = 0; i < 64; i += 4) {
                        md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
                    }
                    return md5blks
                }

                function md51(s) {
                    var n = s.length,
                        state = [1732584193, -271733879, -1732584194, 271733878],
                        i, length, tail, tmp, lo, hi;
                    for (i = 64; i <= n; i += 64) {
                        md5cycle(state, md5blk(s.substring(i - 64, i)))
                    }
                    s = s.substring(i - 64);
                    length = s.length;
                    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (i = 0; i < length; i += 1) {
                        tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
                    }
                    tail[i >> 2] |= 128 << (i % 4 << 3);
                    if (i > 55) {
                        md5cycle(state, tail);
                        for (i = 0; i < 16; i += 1) {
                            tail[i] = 0
                        }
                    }
                    tmp = n * 8;
                    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
                    lo = parseInt(tmp[2], 16);
                    hi = parseInt(tmp[1], 16) || 0;
                    tail[14] = lo;
                    tail[15] = hi;
                    md5cycle(state, tail);
                    return state
                }

                function md51_array(a) {
                    var n = a.length,
                        state = [1732584193, -271733879, -1732584194, 271733878],
                        i, length, tail, tmp, lo, hi;
                    for (i = 64; i <= n; i += 64) {
                        md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
                    }
                    a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
                    length = a.length;
                    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (i = 0; i < length; i += 1) {
                        tail[i >> 2] |= a[i] << (i % 4 << 3)
                    }
                    tail[i >> 2] |= 128 << (i % 4 << 3);
                    if (i > 55) {
                        md5cycle(state, tail);
                        for (i = 0; i < 16; i += 1) {
                            tail[i] = 0
                        }
                    }
                    tmp = n * 8;
                    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
                    lo = parseInt(tmp[2], 16);
                    hi = parseInt(tmp[1], 16) || 0;
                    tail[14] = lo;
                    tail[15] = hi;
                    md5cycle(state, tail);
                    return state
                }

                function rhex(n) {
                    var s = "",
                        j;
                    for (j = 0; j < 4; j += 1) {
                        s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
                    }
                    return s
                }

                function hex(x) {
                    var i;
                    for (i = 0; i < x.length; i += 1) {
                        x[i] = rhex(x[i])
                    }
                    return x.join("")
                }
                if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
                    add32 = function(x, y) {
                        var lsw = (x & 65535) + (y & 65535),
                            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                        return msw << 16 | lsw & 65535
                    }
                }
                if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
                    (function() {
                        function clamp(val, length) {
                            val = val | 0 || 0;
                            if (val < 0) {
                                return Math.max(val + length, 0)
                            }
                            return Math.min(val, length)
                        }
                        ArrayBuffer.prototype.slice = function(from, to) {
                            var length = this.byteLength,
                                begin = clamp(from, length),
                                end = length,
                                num, target, targetArray, sourceArray;
                            if (to !== undefined) {
                                end = clamp(to, length)
                            }
                            if (begin > end) {
                                return new ArrayBuffer(0)
                            }
                            num = end - begin;
                            target = new ArrayBuffer(num);
                            targetArray = new Uint8Array(target);
                            sourceArray = new Uint8Array(this, begin, num);
                            targetArray.set(sourceArray);
                            return target
                        }
                    })()
                }

                function toUtf8(str) {
                    if (/[\u0080-\uFFFF]/.test(str)) {
                        str = unescape(encodeURIComponent(str))
                    }
                    return str
                }

                function utf8Str2ArrayBuffer(str, returnUInt8Array) {
                    var length = str.length,
                        buff = new ArrayBuffer(length),
                        arr = new Uint8Array(buff),
                        i;
                    for (i = 0; i < length; i += 1) {
                        arr[i] = str.charCodeAt(i)
                    }
                    return returnUInt8Array ? arr : buff
                }

                function arrayBuffer2Utf8Str(buff) {
                    return String.fromCharCode.apply(null, new Uint8Array(buff))
                }

                function concatenateArrayBuffers(first, second, returnUInt8Array) {
                    var result = new Uint8Array(first.byteLength + second.byteLength);
                    result.set(new Uint8Array(first));
                    result.set(new Uint8Array(second), first.byteLength);
                    return returnUInt8Array ? result : result.buffer
                }

                function hexToBinaryString(hex) {
                    var bytes = [],
                        length = hex.length,
                        x;
                    for (x = 0; x < length - 1; x += 2) {
                        bytes.push(parseInt(hex.substr(x, 2), 16))
                    }
                    return String.fromCharCode.apply(String, bytes)
                }

                function SparkMD5() {
                    this.reset()
                }
                SparkMD5.prototype.append = function(str) {
                    this.appendBinary(toUtf8(str));
                    return this
                };
                SparkMD5.prototype.appendBinary = function(contents) {
                    this._buff += contents;
                    this._length += contents.length;
                    var length = this._buff.length,
                        i;
                    for (i = 64; i <= length; i += 64) {
                        md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)))
                    }
                    this._buff = this._buff.substring(i - 64);
                    return this
                };
                SparkMD5.prototype.end = function(raw) {
                    var buff = this._buff,
                        length = buff.length,
                        i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        ret;
                    for (i = 0; i < length; i += 1) {
                        tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
                    }
                    this._finish(tail, length);
                    ret = hex(this._hash);
                    if (raw) {
                        ret = hexToBinaryString(ret)
                    }
                    this.reset();
                    return ret
                };
                SparkMD5.prototype.reset = function() {
                    this._buff = "";
                    this._length = 0;
                    this._hash = [1732584193, -271733879, -1732584194, 271733878];
                    return this
                };
                SparkMD5.prototype.getState = function() {
                    return {
                        buff: this._buff,
                        length: this._length,
                        hash: this._hash
                    }
                };
                SparkMD5.prototype.setState = function(state) {
                    this._buff = state.buff;
                    this._length = state.length;
                    this._hash = state.hash;
                    return this
                };
                SparkMD5.prototype.destroy = function() {
                    delete this._hash;
                    delete this._buff;
                    delete this._length
                };
                SparkMD5.prototype._finish = function(tail, length) {
                    var i = length,
                        tmp, lo, hi;
                    tail[i >> 2] |= 128 << (i % 4 << 3);
                    if (i > 55) {
                        md5cycle(this._hash, tail);
                        for (i = 0; i < 16; i += 1) {
                            tail[i] = 0
                        }
                    }
                    tmp = this._length * 8;
                    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
                    lo = parseInt(tmp[2], 16);
                    hi = parseInt(tmp[1], 16) || 0;
                    tail[14] = lo;
                    tail[15] = hi;
                    md5cycle(this._hash, tail)
                };
                SparkMD5.hash = function(str, raw) {
                    return SparkMD5.hashBinary(toUtf8(str), raw)
                };
                SparkMD5.hashBinary = function(content, raw) {
                    var hash = md51(content),
                        ret = hex(hash);
                    return raw ? hexToBinaryString(ret) : ret
                };
                SparkMD5.ArrayBuffer = function() {
                    this.reset()
                };
                SparkMD5.ArrayBuffer.prototype.append = function(arr) {
                    var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
                        length = buff.length,
                        i;
                    this._length += arr.byteLength;
                    for (i = 64; i <= length; i += 64) {
                        md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)))
                    }
                    this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
                    return this
                };
                SparkMD5.ArrayBuffer.prototype.end = function(raw) {
                    var buff = this._buff,
                        length = buff.length,
                        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        i, ret;
                    for (i = 0; i < length; i += 1) {
                        tail[i >> 2] |= buff[i] << (i % 4 << 3)
                    }
                    this._finish(tail, length);
                    ret = hex(this._hash);
                    if (raw) {
                        ret = hexToBinaryString(ret)
                    }
                    this.reset();
                    return ret
                };
                SparkMD5.ArrayBuffer.prototype.reset = function() {
                    this._buff = new Uint8Array(0);
                    this._length = 0;
                    this._hash = [1732584193, -271733879, -1732584194, 271733878];
                    return this
                };
                SparkMD5.ArrayBuffer.prototype.getState = function() {
                    var state = SparkMD5.prototype.getState.call(this);
                    state.buff = arrayBuffer2Utf8Str(state.buff);
                    return state
                };
                SparkMD5.ArrayBuffer.prototype.setState = function(state) {
                    state.buff = utf8Str2ArrayBuffer(state.buff, true);
                    return SparkMD5.prototype.setState.call(this, state)
                };
                SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
                SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
                SparkMD5.ArrayBuffer.hash = function(arr, raw) {
                    var hash = md51_array(new Uint8Array(arr)),
                        ret = hex(hash);
                    return raw ? hexToBinaryString(ret) : ret
                };
                return SparkMD5
            })
        }, {}],
        429: [function(require, module, exports) {
            module.exports = throttle;

            function throttle(func, wait) {
                var rtn;
                var last = 0;
                return function throttled() {
                    var now = (new Date).getTime();
                    var delta = now - last;
                    if (delta >= wait) {
                        rtn = func.apply(this, arguments);
                        last = now
                    }
                    return rtn
                }
            }
        }, {}],
        430: [function(require, module, exports) {
            (function(setImmediate, clearImmediate) {
                var nextTick = require("process/browser.js").nextTick;
                var apply = Function.prototype.apply;
                var slice = Array.prototype.slice;
                var immediateIds = {};
                var nextImmediateId = 0;
                exports.setTimeout = function() {
                    return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout)
                };
                exports.setInterval = function() {
                    return new Timeout(apply.call(setInterval, window, arguments), clearInterval)
                };
                exports.clearTimeout = exports.clearInterval = function(timeout) {
                    timeout.close()
                };

                function Timeout(id, clearFn) {
                    this._id = id;
                    this._clearFn = clearFn
                }
                Timeout.prototype.unref = Timeout.prototype.ref = function() {};
                Timeout.prototype.close = function() {
                    this._clearFn.call(window, this._id)
                };
                exports.enroll = function(item, msecs) {
                    clearTimeout(item._idleTimeoutId);
                    item._idleTimeout = msecs
                };
                exports.unenroll = function(item) {
                    clearTimeout(item._idleTimeoutId);
                    item._idleTimeout = -1
                };
                exports._unrefActive = exports.active = function(item) {
                    clearTimeout(item._idleTimeoutId);
                    var msecs = item._idleTimeout;
                    if (msecs >= 0) {
                        item._idleTimeoutId = setTimeout(function onTimeout() {
                            if (item._onTimeout) item._onTimeout()
                        }, msecs)
                    }
                };
                exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
                    var id = nextImmediateId++;
                    var args = arguments.length < 2 ? false : slice.call(arguments, 1);
                    immediateIds[id] = true;
                    nextTick(function onNextTick() {
                        if (immediateIds[id]) {
                            if (args) {
                                fn.apply(null, args)
                            } else {
                                fn.call(null)
                            }
                            exports.clearImmediate(id)
                        }
                    });
                    return id
                };
                exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
                    delete immediateIds[id]
                }
            }).call(this, require("timers").setImmediate, require("timers").clearImmediate)
        }, {
            "process/browser.js": 412,
            timers: 430
        }],
        431: [function(require, module, exports) {
            var space = require("to-space-case");
            module.exports = toCamelCase;

            function toCamelCase(string) {
                return space(string).replace(/\s(\w)/g, function(matches, letter) {
                    return letter.toUpperCase()
                })
            }
        }, {
            "to-space-case": 435
        }],
        432: [function(require, module, exports) {
            var expr;
            try {
                expr = require("props")
            } catch (e) {
                expr = require("component-props")
            }
            module.exports = toFunction;

            function toFunction(obj) {
                switch ({}.toString.call(obj)) {
                    case "[object Object]":
                        return objectToFunction(obj);
                    case "[object Function]":
                        return obj;
                    case "[object String]":
                        return stringToFunction(obj);
                    case "[object RegExp]":
                        return regexpToFunction(obj);
                    default:
                        return defaultToFunction(obj)
                }
            }

            function defaultToFunction(val) {
                return function(obj) {
                    return val === obj
                }
            }

            function regexpToFunction(re) {
                return function(obj) {
                    return re.test(obj)
                }
            }

            function stringToFunction(str) {
                if (/^ *\W+/.test(str)) return new Function("_", "return _ " + str);
                return new Function("_", "return " + get(str))
            }

            function objectToFunction(obj) {
                var match = {};
                for (var key in obj) {
                    match[key] = typeof obj[key] === "string" ? defaultToFunction(obj[key]) : toFunction(obj[key])
                }
                return function(val) {
                    if (typeof val !== "object") return false;
                    for (var key in match) {
                        if (!(key in val)) return false;
                        if (!match[key](val[key])) return false
                    }
                    return true
                }
            }

            function get(str) {
                var props = expr(str);
                if (!props.length) return "_." + str;
                var val, i, prop;
                for (i = 0; i < props.length; i++) {
                    prop = props[i];
                    val = "_." + prop;
                    val = "('function' == typeof " + val + " ? " + val + "() : " + val + ")";
                    str = stripNested(prop, str, val)
                }
                return str
            }

            function stripNested(prop, str, val) {
                return str.replace(new RegExp("(\\.)?" + prop, "g"), function($0, $1) {
                    return $1 ? $0 : val
                })
            }
        }, {
            "component-props": 376,
            props: 376
        }],
        433: [function(require, module, exports) {
            module.exports = toNoCase;
            var hasSpace = /\s/;
            var hasSeparator = /[\W_]/;

            function toNoCase(string) {
                if (hasSpace.test(string)) return string.toLowerCase();
                if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase();
                return uncamelize(string).toLowerCase()
            }
            var separatorSplitter = /[\W_]+(.|$)/g;

            function unseparate(string) {
                return string.replace(separatorSplitter, function(m, next) {
                    return next ? " " + next : ""
                })
            }
            var camelSplitter = /(.)([A-Z]+)/g;

            function uncamelize(string) {
                return string.replace(camelSplitter, function(m, previous, uppers) {
                    return previous + " " + uppers.toLowerCase().split("").join(" ")
                })
            }
        }, {}],
        434: [function(require, module, exports) {
            var toSpace = require("to-space-case");
            module.exports = toSnakeCase;

            function toSnakeCase(string) {
                return toSpace(string).replace(/\s/g, "_")
            }
        }, {
            "to-space-case": 435
        }],
        435: [function(require, module, exports) {
            var clean = require("to-no-case");
            module.exports = toSpaceCase;

            function toSpaceCase(string) {
                return clean(string).replace(/[\W_]+(.|$)/g, function(matches, match) {
                    return match ? " " + match : ""
                }).trim()
            }
        }, {
            "to-no-case": 436
        }],
        436: [function(require, module, exports) {
            module.exports = toNoCase;
            var hasSpace = /\s/;
            var hasSeparator = /(_|-|\.|:)/;
            var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;

            function toNoCase(string) {
                if (hasSpace.test(string)) return string.toLowerCase();
                if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase();
                if (hasCamel.test(string)) return uncamelize(string).toLowerCase();
                return string.toLowerCase()
            }
            var separatorSplitter = /[\W_]+(.|$)/g;

            function unseparate(string) {
                return string.replace(separatorSplitter, function(m, next) {
                    return next ? " " + next : ""
                })
            }
            var camelSplitter = /(.)([A-Z]+)/g;

            function uncamelize(string) {
                return string.replace(camelSplitter, function(m, previous, uppers) {
                    return previous + " " + uppers.toLowerCase().split("").join(" ")
                })
            }
        }, {}],
        437: [function(require, module, exports) {
            "use strict";

            function toUnixTimestamp(date) {
                return Math.floor(new Date(date).getTime() / 1e3)
            }
            module.exports = toUnixTimestamp
        }, {}],
        438: [function(require, module, exports) {
            exports = module.exports = trim;

            function trim(str) {
                return str.replace(/^\s*|\s*$/g, "")
            }
            exports.left = function(str) {
                return str.replace(/^\s*/, "")
            };
            exports.right = function(str) {
                return str.replace(/\s*$/, "")
            }
        }, {}],
        439: [function(require, module, exports) {
            var toString = Object.prototype.toString;
            module.exports = function(val) {
                switch (toString.call(val)) {
                    case "[object Function]":
                        return "function";
                    case "[object Date]":
                        return "date";
                    case "[object RegExp]":
                        return "regexp";
                    case "[object Arguments]":
                        return "arguments";
                    case "[object Array]":
                        return "array"
                }
                if (val === null) return "null";
                if (val === undefined) return "undefined";
                if (val === Object(val)) return "object";
                return typeof val
            }
        }, {}],
        440: [function(require, module, exports) {
            module.exports = function(date) {
                date = new Date(date);
                return Math.floor(date.getTime() / 1e3)
            }
        }, {}],
        441: [function(require, module, exports) {
            module.exports = function(url) {
                switch (arguments.length) {
                    case 0:
                        return check();
                    case 1:
                        return transform(url)
                }
            };

            function transform(url) {
                return check() ? "https:" + url : "http:" + url
            }

            function check() {
                return location.protocol == "https:" || location.protocol == "chrome-extension:"
            }
        }, {}],
        442: [function(require, module, exports) {
            module.exports = encode;

            function encode(string) {
                string = string.replace(/\r\n/g, "\n");
                var utftext = "";
                for (var n = 0; n < string.length; n++) {
                    var c = string.charCodeAt(n);
                    if (c < 128) {
                        utftext += String.fromCharCode(c)
                    } else if (c > 127 && c < 2048) {
                        utftext += String.fromCharCode(c >> 6 | 192);
                        utftext += String.fromCharCode(c & 63 | 128)
                    } else {
                        utftext += String.fromCharCode(c >> 12 | 224);
                        utftext += String.fromCharCode(c >> 6 & 63 | 128);
                        utftext += String.fromCharCode(c & 63 | 128)
                    }
                }
                return utftext
            }
        }, {}],
        443: [function(require, module, exports) {
            (function(global) {
                var rng;
                var crypto = global.crypto || global.msCrypto;
                if (crypto && crypto.getRandomValues) {
                    var _rnds8 = new Uint8Array(16);
                    rng = function whatwgRNG() {
                        crypto.getRandomValues(_rnds8);
                        return _rnds8
                    }
                }
                if (!rng) {
                    var _rnds = new Array(16);
                    rng = function() {
                        for (var i = 0, r; i < 16; i++) {
                            if ((i & 3) === 0) r = Math.random() * 4294967296;
                            _rnds[i] = r >>> ((i & 3) << 3) & 255
                        }
                        return _rnds
                    }
                }
                module.exports = rng
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {}],
        444: [function(require, module, exports) {
            var _rng = require("./rng");
            var _byteToHex = [];
            var _hexToByte = {};
            for (var i = 0; i < 256; i++) {
                _byteToHex[i] = (i + 256).toString(16).substr(1);
                _hexToByte[_byteToHex[i]] = i
            }

            function parse(s, buf, offset) {
                var i = buf && offset || 0,
                    ii = 0;
                buf = buf || [];
                s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
                    if (ii < 16) {
                        buf[i + ii++] = _hexToByte[oct]
                    }
                });
                while (ii < 16) {
                    buf[i + ii++] = 0
                }
                return buf
            }

            function unparse(buf, offset) {
                var i = offset || 0,
                    bth = _byteToHex;
                return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]]
            }
            var _seedBytes = _rng();
            var _nodeId = [_seedBytes[0] | 1, _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]];
            var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 16383;
            var _lastMSecs = 0,
                _lastNSecs = 0;

            function v1(options, buf, offset) {
                var i = buf && offset || 0;
                var b = buf || [];
                options = options || {};
                var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
                var msecs = options.msecs !== undefined ? options.msecs : (new Date).getTime();
                var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
                var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
                if (dt < 0 && options.clockseq === undefined) {
                    clockseq = clockseq + 1 & 16383
                }
                if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
                    nsecs = 0
                }
                if (nsecs >= 1e4) {
                    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
                }
                _lastMSecs = msecs;
                _lastNSecs = nsecs;
                _clockseq = clockseq;
                msecs += 122192928e5;
                var tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
                b[i++] = tl >>> 24 & 255;
                b[i++] = tl >>> 16 & 255;
                b[i++] = tl >>> 8 & 255;
                b[i++] = tl & 255;
                var tmh = msecs / 4294967296 * 1e4 & 268435455;
                b[i++] = tmh >>> 8 & 255;
                b[i++] = tmh & 255;
                b[i++] = tmh >>> 24 & 15 | 16;
                b[i++] = tmh >>> 16 & 255;
                b[i++] = clockseq >>> 8 | 128;
                b[i++] = clockseq & 255;
                var node = options.node || _nodeId;
                for (var n = 0; n < 6; n++) {
                    b[i + n] = node[n]
                }
                return buf ? buf : unparse(b)
            }

            function v4(options, buf, offset) {
                var i = buf && offset || 0;
                if (typeof options == "string") {
                    buf = options == "binary" ? new Array(16) : null;
                    options = null
                }
                options = options || {};
                var rnds = options.random || (options.rng || _rng)();
                rnds[6] = rnds[6] & 15 | 64;
                rnds[8] = rnds[8] & 63 | 128;
                if (buf) {
                    for (var ii = 0; ii < 16; ii++) {
                        buf[i + ii] = rnds[ii]
                    }
                }
                return buf || unparse(rnds)
            }
            var uuid = v4;
            uuid.v1 = v1;
            uuid.v4 = v4;
            uuid.parse = parse;
            uuid.unparse = unparse;
            module.exports = uuid
        }, {
            "./rng": 443
        }],
        445: [function(require, module, exports) {
            module.exports = {
                name: "@segment/analytics.js",
                author: "Segment <friends@segment.com>",
                version: "2.11.0",
                description: "The hassle-free way to integrate analytics into any web application.",
                keywords: ["analytics", "analytics.js", "segment", "segment.io"],
                main: "analytics.js",
                scripts: {
                    build: "make build",
                    clean: "make clean",
                    test: "make test"
                },
                repository: {
                    type: "git",
                    url: "https://github.com/segmentio/analytics.js.git"
                },
                license: "SEE LICENSE IN LICENSE",
                bugs: {
                    url: "https://github.com/segmentio/analytics.js/issues"
                },
                homepage: "https://github.com/segmentio/analytics.js#readme",
                dependencies: {
                    "@segment/analytics.js-core": "^3.0.0",
                    "@segment/analytics.js-integration": "^3.1.0",
                    "@segment/analytics.js-integrations": "git+https://github.com:segmentio/analytics.js-integrations.git",
                    "@segment/analytics.js-integration-adroll": "git+https://github.com/segment-integrations/analytics.js-integration-adroll.git",
                    "@segment/analytics.js-integration-adwords": "git+https://github.com/segment-integrations/analytics.js-integration-adwords.git",
                    "@segment/analytics.js-integration-alexa": "git+https://github.com/segment-integrations/analytics.js-integration-alexa.git",
                    "@segment/analytics.js-integration-ambassador": "git+https://github.com/segment-integrations/analytics.js-integration-ambassador.git",
                    "@segment/analytics.js-integration-amplitude": "git+https://github.com/segment-integrations/analytics.js-integration-amplitude.git",
                    "@segment/analytics.js-integration-appboy": "git+https://github.com/segment-integrations/analytics.js-integration-appboy.git",
                    "@segment/analytics.js-integration-appcues": "git+https://github.com/segment-integrations/analytics.js-integration-appcues.git",
                    "@segment/analytics.js-integration-bugsnag": "git+https://github.com/segment-integrations/analytics.js-integration-bugsnag.git",
                    "@segment/analytics.js-integration-castle": "git+https://github.com/segment-integrations/analytics.js-integration-castle.git",
                    "@segment/analytics.js-integration-chameleon": "git+https://github.com/segment-integrations/analytics.js-integration-chameleon.git",
                    "@segment/analytics.js-integration-chartbeat": "git+https://github.com/segment-integrations/analytics.js-integration-chartbeat.git",
                    "@segment/analytics.js-integration-clicky": "git+https://github.com/segment-integrations/analytics.js-integration-clicky.git",
                    "@segment/analytics.js-integration-crazy-egg": "git+https://github.com/segment-integrations/analytics.js-integration-crazy-egg.git",
                    "@segment/analytics.js-integration-curebit": "git+https://github.com/segment-integrations/analytics.js-integration-curebit.git",
                    "@segment/analytics.js-integration-customerio": "git+https://github.com/segment-integrations/analytics.js-integration-customerio.git",
                    "@segment/analytics.js-integration-drift": "git+https://github.com/segment-integrations/analytics.js-integration-drift.git",
                    "@segment/analytics.js-integration-drip": "git+https://github.com/segment-integrations/analytics.js-integration-drip.git",
                    "@segment/analytics.js-integration-elevio": "git+https://github.com/segment-integrations/analytics.js-integration-elevio.git",
                    "@segment/analytics.js-integration-errorception": "git+https://github.com/segment-integrations/analytics.js-integration-errorception.git",
                    "@segment/analytics.js-integration-facebook-pixel": "git+https://github.com/segment-integrations/analytics.js-integration-facebook-pixel.git",
                    "@segment/analytics.js-integration-fullstory": "git+https://github.com/segment-integrations/analytics.js-integration-fullstory.git",
                    "@segment/analytics.js-integration-gauges": "git+https://github.com/segment-integrations/analytics.js-integration-gauges.git",
                    "@segment/analytics.js-integration-google-analytics": "git+https://github.com/segment-integrations/analytics.js-integration-google-analytics.git",
                    "@segment/analytics.js-integration-gosquared": "git+https://github.com/segment-integrations/analytics.js-integration-gosquared.git",
                    "@segment/analytics.js-integration-heap": "git+https://github.com/segment-integrations/analytics.js-integration-heap.git",
                    "@segment/analytics.js-integration-hellobar": "git+https://github.com/segment-integrations/analytics.js-integration-hellobar.git",
                    "@segment/analytics.js-integration-hubspot": "git+https://github.com/segment-integrations/analytics.js-integration-hubspot.git",
                    "@segment/analytics.js-integration-inspectlet": "git+https://github.com/segment-integrations/analytics.js-integration-inspectlet.git",
                    "@segment/analytics.js-integration-intercom": "git+https://github.com/segment-integrations/analytics.js-integration-intercom.git",
                    "@segment/analytics.js-integration-keen-io": "git+https://github.com/segment-integrations/analytics.js-integration-keen-io.git",
                    "@segment/analytics.js-integration-kissmetrics": "git+https://github.com/segment-integrations/analytics.js-integration-kissmetrics.git",
                    "@segment/analytics.js-integration-klaviyo": "git+https://github.com/segment-integrations/analytics.js-integration-klaviyo.git",
                    "@segment/analytics.js-integration-livechat": "git+https://github.com/segment-integrations/analytics.js-integration-livechat.git",
                    "@segment/analytics.js-integration-lucky-orange": "git+https://github.com/segment-integrations/analytics.js-integration-lucky-orange.git",
                    "@segment/analytics.js-integration-madkudu": "git+https://github.com/segment-integrations/analytics.js-integration-madkudu.git",
                    "@segment/analytics.js-integration-mixpanel": "git+https://github.com/segment-integrations/analytics.js-integration-mixpanel.git",
                    "@segment/analytics.js-integration-mouseflow": "git+https://github.com/segment-integrations/analytics.js-integration-mouseflow.git",
                    "@segment/analytics.js-integration-mousestats": "git+https://github.com/segment-integrations/analytics.js-integration-mousestats.git",
                    "@segment/analytics.js-integration-olark": "git+https://github.com/segment-integrations/analytics.js-integration-olark.git",
                    "@segment/analytics.js-integration-optimizely": "git+https://github.com/segment-integrations/analytics.js-integration-optimizely.git",
                    "@segment/analytics.js-integration-parsely": "git+https://github.com/segment-integrations/analytics.js-integration-parsely.git",
                    "@segment/analytics.js-integration-pingdom": "git+https://github.com/segment-integrations/analytics.js-integration-pingdom.git",
                    "@segment/analytics.js-integration-piwik": "git+https://github.com/segment-integrations/analytics.js-integration-piwik.git",
                    "@segment/analytics.js-integration-qualaroo": "git+https://github.com/segment-integrations/analytics.js-integration-qualaroo.git",
                    "@segment/analytics.js-integration-quantcast": "git+https://github.com/segment-integrations/analytics.js-integration-quantcast.git",
                    "@segment/analytics.js-integration-rollbar": "git+https://github.com/segment-integrations/analytics.js-integration-rollbar.git",
                    "@segment/analytics.js-integration-saasquatch": "git+https://github.com/segment-integrations/analytics.js-integration-saasquatch.git",
                    "@segment/analytics.js-integration-satismeter": "git+https://github.com/segment-integrations/analytics.js-integration-satismeter.git",
                    "@segment/analytics.js-integration-sentry": "git+https://github.com/segment-integrations/analytics.js-integration-sentry.git",
                    "@segment/analytics.js-integration-snapengage": "git+https://github.com/segment-integrations/analytics.js-integration-snapengage.git",
                    "@segment/analytics.js-integration-taplytics": "git+https://github.com/segment-integrations/analytics.js-integration-taplytics.git",
                    "@segment/analytics.js-integration-tapstream": "git+https://github.com/segment-integrations/analytics.js-integration-tapstream.git",
                    "@segment/analytics.js-integration-twitter-ads": "git+https://github.com/segment-integrations/analytics.js-integration-twitter-ads.git",
                    "@segment/analytics.js-integration-uservoice": "git+https://github.com/segment-integrations/analytics.js-integration-uservoice.git",
                    "@segment/analytics.js-integration-visual-website-optimizer": "git+https://github.com/segment-integrations/analytics.js-integration-visual-website-optimizer.git",
                    "@segment/analytics.js-integration-webengage": "git+https://github.com/segment-integrations/analytics.js-integration-webengage.git",
                    "@segment/analytics.js-integration-woopra": "git+https://github.com/segment-integrations/analytics.js-integration-woopra.git",
                    "@segment/analytics.js-integration-wootric": "git+https://github.com/segment-integrations/analytics.js-integration-wootric.git",
                    "@segment/analytics.js-integration-yandex-metrica": "git+https://github.com/segment-integrations/analytics.js-integration-yandex-metrica.git",
                    "@replaybird/analytics.js-integrations": "git+https://github.com/replaybird/analytics.js-integrations.git",
                    "analytics.js-integration-hotjar": "git+https://github.com/SamyPesse/analytics.js-integration-hotjar"
                },
                devDependencies: {
                    "@segment/eslint-config": "^3.1.1",
                    browserify: "^13.0.1",
                    eslint: "^2.9.0",
                    "eslint-plugin-mocha": "^2.2.0",
                    "eslint-plugin-require-path-exists": "^1.1.5",
                    "uglify-js": "^2.6.4"
                }
            }
        }, {}]
    }, {}, [1])(1)
});