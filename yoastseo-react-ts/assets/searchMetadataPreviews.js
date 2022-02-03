window.yoast = window.yoast || {}, window.yoast.searchMetadataPreviews = function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {i: r, l: !1, exports: {}};
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }

  return n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
      return e[t]
    }.bind(null, o));
    return r
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 530)
}({
  0: function (e, t) {
    e.exports = window.yoast.propTypes
  }, 1: function (e, t) {
    e.exports = window.wp.element
  }, 10: function (e, t) {
    function n(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    e.exports = function (e, t, r) {
      return t && n(e.prototype, t), r && n(e, r), e
    }, e.exports.default = e.exports, e.exports.__esModule = !0
  }, 107: function (e, t) {
    e.exports = function (e) {
      return e.webpackPolyfill || (e.deprecate = function () {
      }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function () {
          return e.l
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0, get: function () {
          return e.i
        }
      }), e.webpackPolyfill = 1), e
    }
  }, 11: function (e, t, n) {
    var r = n(30);
    e.exports = function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && r(e, t)
    }, e.exports.default = e.exports, e.exports.__esModule = !0
  }, 12: function (e, t, n) {
    var r = n(24).default, o = n(14);
    e.exports = function (e, t) {
      return !t || "object" !== r(t) && "function" != typeof t ? o(e) : t
    }, e.exports.default = e.exports, e.exports.__esModule = !0
  }, 13: function (e, t) {
    e.exports = window.yoast.componentsNew
  }, 130: function (e, t, n) {
    (function (e, r) {
      var o;
      !function (i) {
        t && t.nodeType, e && e.nodeType;
        var a = "object" == typeof r && r;
        a.global !== a && a.window !== a && a.self;
        var s, l = 2147483647, c = /^xn--/, u = /[^\x20-\x7E]/, p = /[\x2E\u3002\uFF0E\uFF61]/g, d = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        }, h = Math.floor, f = String.fromCharCode;

        function m(e) {
          throw new RangeError(d[e])
        }

        function g(e, t) {
          for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
          return r
        }

        function v(e, t) {
          var n = e.split("@"), r = "";
          return n.length > 1 && (r = n[0] + "@", e = n[1]), r + g((e = e.replace(p, ".")).split("."), t).join(".")
        }

        function b(e) {
          for (var t, n, r = [], o = 0, i = e.length; o < i;) (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i ? 56320 == (64512 & (n = e.charCodeAt(o++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--) : r.push(t);
          return r
        }

        function y(e) {
          return g(e, (function (e) {
            var t = "";
            return e > 65535 && (t += f((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t + f(e)
          })).join("")
        }

        function x(e, t) {
          return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
        }

        function E(e, t, n) {
          var r = 0;
          for (e = n ? h(e / 700) : e >> 1, e += h(e / t); e > 455; r += 36) e = h(e / 35);
          return h(r + 36 * e / (e + 38))
        }

        function w(e) {
          var t, n, r, o, i, a, s, c, u, p, d, f = [], g = e.length, v = 0, b = 128, x = 72;
          for ((n = e.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && m("not-basic"), f.push(e.charCodeAt(r));
          for (o = n > 0 ? n + 1 : 0; o < g;) {
            for (i = v, a = 1, s = 36; o >= g && m("invalid-input"), ((c = (d = e.charCodeAt(o++)) - 48 < 10 ? d - 22 : d - 65 < 26 ? d - 65 : d - 97 < 26 ? d - 97 : 36) >= 36 || c > h((l - v) / a)) && m("overflow"), v += c * a, !(c < (u = s <= x ? 1 : s >= x + 26 ? 26 : s - x)); s += 36) a > h(l / (p = 36 - u)) && m("overflow"), a *= p;
            x = E(v - i, t = f.length + 1, 0 == i), h(v / t) > l - b && m("overflow"), b += h(v / t), v %= t, f.splice(v++, 0, b)
          }
          return y(f)
        }

        function O(e) {
          var t, n, r, o, i, a, s, c, u, p, d, g, v, y, w, O = [];
          for (g = (e = b(e)).length, t = 128, n = 0, i = 72, a = 0; a < g; ++a) (d = e[a]) < 128 && O.push(f(d));
          for (r = o = O.length, o && O.push("-"); r < g;) {
            for (s = l, a = 0; a < g; ++a) (d = e[a]) >= t && d < s && (s = d);
            for (s - t > h((l - n) / (v = r + 1)) && m("overflow"), n += (s - t) * v, t = s, a = 0; a < g; ++a) if ((d = e[a]) < t && ++n > l && m("overflow"), d == t) {
              for (c = n, u = 36; !(c < (p = u <= i ? 1 : u >= i + 26 ? 26 : u - i)); u += 36) w = c - p, y = 36 - p, O.push(f(x(p + w % y, 0))), c = h(w / y);
              O.push(f(x(c, 0))), i = E(n, v, r == o), n = 0, ++r
            }
            ++n, ++t
          }
          return O.join("")
        }

        s = {
          version: "1.4.1", ucs2: {decode: b, encode: y}, decode: w, encode: O, toASCII: function (e) {
            return v(e, (function (e) {
              return u.test(e) ? "xn--" + O(e) : e
            }))
          }, toUnicode: function (e) {
            return v(e, (function (e) {
              return c.test(e) ? w(e.slice(4).toLowerCase()) : e
            }))
          }
        }, void 0 === (o = function () {
          return s
        }.call(t, n, t, e)) || (e.exports = o)
      }()
    }).call(this, n(107)(e), n(31))
  }, 131: function (e, t, n) {
    "use strict";
    e.exports = {
      isString: function (e) {
        return "string" == typeof e
      }, isObject: function (e) {
        return "object" == typeof e && null !== e
      }, isNull: function (e) {
        return null === e
      }, isNullOrUndefined: function (e) {
        return null == e
      }
    }
  }, 132: function (e, t, n) {
    "use strict";
    t.decode = t.parse = n(133), t.encode = t.stringify = n(134)
  }, 133: function (e, t, n) {
    "use strict";

    function r(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }

    e.exports = function (e, t, n, i) {
      t = t || "&", n = n || "=";
      var a = {};
      if ("string" != typeof e || 0 === e.length) return a;
      var s = /\+/g;
      e = e.split(t);
      var l = 1e3;
      i && "number" == typeof i.maxKeys && (l = i.maxKeys);
      var c = e.length;
      l > 0 && c > l && (c = l);
      for (var u = 0; u < c; ++u) {
        var p, d, h, f, m = e[u].replace(s, "%20"), g = m.indexOf(n);
        g >= 0 ? (p = m.substr(0, g), d = m.substr(g + 1)) : (p = m, d = ""), h = decodeURIComponent(p), f = decodeURIComponent(d), r(a, h) ? o(a[h]) ? a[h].push(f) : a[h] = [a[h], f] : a[h] = f
      }
      return a
    };
    var o = Array.isArray || function (e) {
      return "[object Array]" === Object.prototype.toString.call(e)
    }
  }, 134: function (e, t, n) {
    "use strict";
    var r = function (e) {
      switch (typeof e) {
        case"string":
          return e;
        case"boolean":
          return e ? "true" : "false";
        case"number":
          return isFinite(e) ? e : "";
        default:
          return ""
      }
    };
    e.exports = function (e, t, n, s) {
      return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? i(a(e), (function (a) {
        var s = encodeURIComponent(r(a)) + n;
        return o(e[a]) ? i(e[a], (function (e) {
          return s + encodeURIComponent(r(e))
        })).join(t) : s + encodeURIComponent(r(e[a]))
      })).join(t) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(e)) : ""
    };
    var o = Array.isArray || function (e) {
      return "[object Array]" === Object.prototype.toString.call(e)
    };

    function i(e, t) {
      if (e.map) return e.map(t);
      for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
      return n
    }

    var a = Object.keys || function (e) {
      var t = [];
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
      return t
    }
  }, 14: function (e, t) {
    e.exports = function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }, e.exports.default = e.exports, e.exports.__esModule = !0
  }, 15: function (e, t) {
    e.exports = window.yoast.helpers
  }, 17: function (e, t) {
    e.exports = function (e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }, e.exports.default = e.exports, e.exports.__esModule = !0
  }, 18: function (e, t) {
    function n() {
      return e.exports = n = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }, e.exports.default = e.exports, e.exports.__esModule = !0, n.apply(this, arguments)
    }

    e.exports = n, e.exports.default = e.exports, e.exports.__esModule = !0
  }, 182: function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = t.EXITING = t.ENTERED = t.ENTERING = t.EXITED = t.UNMOUNTED = void 0;
    var r = function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
        r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
      }
      return t.default = e, t
    }(n(0)), o = s(n(4)), i = s(n(71)), a = n(99);

    function s(e) {
      return e && e.__esModule ? e : {default: e}
    }

    n(183), t.UNMOUNTED = "unmounted", t.EXITED = "exited", t.ENTERING = "entering", t.ENTERED = "entered", t.EXITING = "exiting";
    var l = function (e) {
      var t, n;

      function r(t, n) {
        var r;
        r = e.call(this, t, n) || this;
        var o, i = n.transitionGroup, a = i && !i.isMounting ? t.enter : t.appear;
        return r.appearStatus = null, t.in ? a ? (o = "exited", r.appearStatus = "entering") : o = "entered" : o = t.unmountOnExit || t.mountOnEnter ? "unmounted" : "exited", r.state = {status: o}, r.nextCallback = null, r
      }

      n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
      var a = r.prototype;
      return a.getChildContext = function () {
        return {transitionGroup: null}
      }, r.getDerivedStateFromProps = function (e, t) {
        return e.in && "unmounted" === t.status ? {status: "exited"} : null
      }, a.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus)
      }, a.componentDidUpdate = function (e) {
        var t = null;
        if (e !== this.props) {
          var n = this.state.status;
          this.props.in ? "entering" !== n && "entered" !== n && (t = "entering") : "entering" !== n && "entered" !== n || (t = "exiting")
        }
        this.updateStatus(!1, t)
      }, a.componentWillUnmount = function () {
        this.cancelNextCallback()
      }, a.getTimeouts = function () {
        var e, t, n, r = this.props.timeout;
        return e = t = n = r, null != r && "number" != typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
          exit: e,
          enter: t,
          appear: n
        }
      }, a.updateStatus = function (e, t) {
        if (void 0 === e && (e = !1), null !== t) {
          this.cancelNextCallback();
          var n = i.default.findDOMNode(this);
          "entering" === t ? this.performEnter(n, e) : this.performExit(n)
        } else this.props.unmountOnExit && "exited" === this.state.status && this.setState({status: "unmounted"})
      }, a.performEnter = function (e, t) {
        var n = this, r = this.props.enter,
          o = this.context.transitionGroup ? this.context.transitionGroup.isMounting : t, i = this.getTimeouts(),
          a = o ? i.appear : i.enter;
        t || r ? (this.props.onEnter(e, o), this.safeSetState({status: "entering"}, (function () {
          n.props.onEntering(e, o), n.onTransitionEnd(e, a, (function () {
            n.safeSetState({status: "entered"}, (function () {
              n.props.onEntered(e, o)
            }))
          }))
        }))) : this.safeSetState({status: "entered"}, (function () {
          n.props.onEntered(e)
        }))
      }, a.performExit = function (e) {
        var t = this, n = this.props.exit, r = this.getTimeouts();
        n ? (this.props.onExit(e), this.safeSetState({status: "exiting"}, (function () {
          t.props.onExiting(e), t.onTransitionEnd(e, r.exit, (function () {
            t.safeSetState({status: "exited"}, (function () {
              t.props.onExited(e)
            }))
          }))
        }))) : this.safeSetState({status: "exited"}, (function () {
          t.props.onExited(e)
        }))
      }, a.cancelNextCallback = function () {
        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
      }, a.safeSetState = function (e, t) {
        t = this.setNextCallback(t), this.setState(e, t)
      }, a.setNextCallback = function (e) {
        var t = this, n = !0;
        return this.nextCallback = function (r) {
          n && (n = !1, t.nextCallback = null, e(r))
        }, this.nextCallback.cancel = function () {
          n = !1
        }, this.nextCallback
      }, a.onTransitionEnd = function (e, t, n) {
        this.setNextCallback(n);
        var r = null == t && !this.props.addEndListener;
        e && !r ? (this.props.addEndListener && this.props.addEndListener(e, this.nextCallback), null != t && setTimeout(this.nextCallback, t)) : setTimeout(this.nextCallback, 0)
      }, a.render = function () {
        var e = this.state.status;
        if ("unmounted" === e) return null;
        var t = this.props, n = t.children, r = function (e, t) {
          if (null == e) return {};
          var n, r, o = {}, i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o
        }(t, ["children"]);
        if (delete r.in, delete r.mountOnEnter, delete r.unmountOnExit, delete r.appear, delete r.enter, delete r.exit, delete r.timeout, delete r.addEndListener, delete r.onEnter, delete r.onEntering, delete r.onEntered, delete r.onExit, delete r.onExiting, delete r.onExited, "function" == typeof n) return n(e, r);
        var i = o.default.Children.only(n);
        return o.default.cloneElement(i, r)
      }, r
    }(o.default.Component);

    function c() {
    }

    l.contextTypes = {transitionGroup: r.object}, l.childContextTypes = {
      transitionGroup: function () {
      }
    }, l.propTypes = {}, l.defaultProps = {
      in: !1,
      mountOnEnter: !1,
      unmountOnExit: !1,
      appear: !1,
      enter: !0,
      exit: !0,
      onEnter: c,
      onEntering: c,
      onEntered: c,
      onExit: c,
      onExiting: c,
      onExited: c
    }, l.UNMOUNTED = 0, l.EXITED = 1, l.ENTERING = 2, l.ENTERED = 3, l.EXITING = 4;
    var u = (0, a.polyfill)(l);
    t.default = u
  }, 183: function (e, t, n) {
    "use strict";
    var r;
    t.__esModule = !0, t.classNamesShape = t.timeoutsShape = void 0, (r = n(0)) && r.__esModule, t.timeoutsShape = null, t.classNamesShape = null
  }, 184: function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r = s(n(0)), o = s(n(4)), i = n(99), a = n(368);

    function s(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function l() {
      return (l = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }).apply(this, arguments)
    }

    function c(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    var u = Object.values || function (e) {
      return Object.keys(e).map((function (t) {
        return e[t]
      }))
    }, p = function (e) {
      var t, n;

      function r(t, n) {
        var r, o = (r = e.call(this, t, n) || this).handleExited.bind(c(c(r)));
        return r.state = {handleExited: o, firstRender: !0}, r
      }

      n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
      var i = r.prototype;
      return i.getChildContext = function () {
        return {transitionGroup: {isMounting: !this.appeared}}
      }, i.componentDidMount = function () {
        this.appeared = !0, this.mounted = !0
      }, i.componentWillUnmount = function () {
        this.mounted = !1
      }, r.getDerivedStateFromProps = function (e, t) {
        var n = t.children, r = t.handleExited;
        return {
          children: t.firstRender ? (0, a.getInitialChildMapping)(e, r) : (0, a.getNextChildMapping)(e, n, r),
          firstRender: !1
        }
      }, i.handleExited = function (e, t) {
        var n = (0, a.getChildMapping)(this.props.children);
        e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function (t) {
          var n = l({}, t.children);
          return delete n[e.key], {children: n}
        })))
      }, i.render = function () {
        var e = this.props, t = e.component, n = e.childFactory, r = function (e, t) {
          if (null == e) return {};
          var n, r, o = {}, i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o
        }(e, ["component", "childFactory"]), i = u(this.state.children).map(n);
        return delete r.appear, delete r.enter, delete r.exit, null === t ? i : o.default.createElement(t, r, i)
      }, r
    }(o.default.Component);
    p.childContextTypes = {transitionGroup: r.default.object.isRequired}, p.propTypes = {}, p.defaultProps = {
      component: "div",
      childFactory: function (e) {
        return e
      }
    };
    var d = (0, i.polyfill)(p);
    t.default = d, e.exports = t.default
  }, 2: function (e, t) {
    e.exports = window.lodash
  }, 23: function (e, t) {
    e.exports = window.yoast.replacementVariableEditor
  }, 24: function (e, t) {
    function n(t) {
      return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = n = function (e) {
        return typeof e
      }, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = n = function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, e.exports.default = e.exports, e.exports.__esModule = !0), n(t)
    }

    e.exports = n, e.exports.default = e.exports, e.exports.__esModule = !0
  }, 246: function (e, t, n) {
    "use strict";
    var r = s(n(362)), o = s(n(367)), i = s(n(184)), a = s(n(182));

    function s(e) {
      return e && e.__esModule ? e : {default: e}
    }

    e.exports = {
      Transition: a.default,
      TransitionGroup: i.default,
      ReplaceTransition: o.default,
      CSSTransition: r.default
    }
  }, 247: function (e, t) {
    e.exports = window.lodash.truncate
  }, 3: function (e, t) {
    e.exports = window.wp.i18n
  }, 30: function (e, t) {
    function n(t, r) {
      return e.exports = n = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      }, e.exports.default = e.exports, e.exports.__esModule = !0, n(t, r)
    }

    e.exports = n, e.exports.default = e.exports, e.exports.__esModule = !0
  }, 31: function (e, t) {
    var n;
    n = function () {
      return this
    }();
    try {
      n = n || new Function("return this")()
    } catch (e) {
      "object" == typeof window && (n = window)
    }
    e.exports = n
  }, 362: function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0, function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
        r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
      }
      t.default = e
    }(n(0));
    var r = s(n(363)), o = s(n(366)), i = s(n(4)), a = s(n(182));

    function s(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function l() {
      return (l = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }).apply(this, arguments)
    }

    n(183);
    var c = function (e, t) {
      return e && t && t.split(" ").forEach((function (t) {
        return (0, r.default)(e, t)
      }))
    }, u = function (e, t) {
      return e && t && t.split(" ").forEach((function (t) {
        return (0, o.default)(e, t)
      }))
    }, p = function (e) {
      var t, n;

      function r() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return (t = e.call.apply(e, [this].concat(r)) || this).onEnter = function (e, n) {
          var r = t.getClassNames(n ? "appear" : "enter").className;
          t.removeClasses(e, "exit"), c(e, r), t.props.onEnter && t.props.onEnter(e, n)
        }, t.onEntering = function (e, n) {
          var r = t.getClassNames(n ? "appear" : "enter").activeClassName;
          t.reflowAndAddClass(e, r), t.props.onEntering && t.props.onEntering(e, n)
        }, t.onEntered = function (e, n) {
          var r = t.getClassNames("appear").doneClassName, o = t.getClassNames("enter").doneClassName,
            i = n ? r + " " + o : o;
          t.removeClasses(e, n ? "appear" : "enter"), c(e, i), t.props.onEntered && t.props.onEntered(e, n)
        }, t.onExit = function (e) {
          var n = t.getClassNames("exit").className;
          t.removeClasses(e, "appear"), t.removeClasses(e, "enter"), c(e, n), t.props.onExit && t.props.onExit(e)
        }, t.onExiting = function (e) {
          var n = t.getClassNames("exit").activeClassName;
          t.reflowAndAddClass(e, n), t.props.onExiting && t.props.onExiting(e)
        }, t.onExited = function (e) {
          var n = t.getClassNames("exit").doneClassName;
          t.removeClasses(e, "exit"), c(e, n), t.props.onExited && t.props.onExited(e)
        }, t.getClassNames = function (e) {
          var n = t.props.classNames, r = "string" == typeof n, o = r ? (r && n ? n + "-" : "") + e : n[e];
          return {
            className: o,
            activeClassName: r ? o + "-active" : n[e + "Active"],
            doneClassName: r ? o + "-done" : n[e + "Done"]
          }
        }, t
      }

      n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
      var o = r.prototype;
      return o.removeClasses = function (e, t) {
        var n = this.getClassNames(t), r = n.className, o = n.activeClassName, i = n.doneClassName;
        r && u(e, r), o && u(e, o), i && u(e, i)
      }, o.reflowAndAddClass = function (e, t) {
        t && (e && e.scrollTop, c(e, t))
      }, o.render = function () {
        var e = l({}, this.props);
        return delete e.classNames, i.default.createElement(a.default, l({}, e, {
          onEnter: this.onEnter,
          onEntered: this.onEntered,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }))
      }, r
    }(i.default.Component);
    p.defaultProps = {classNames: ""}, p.propTypes = {};
    var d = p;
    t.default = d, e.exports = t.default
  }, 363: function (e, t, n) {
    "use strict";
    var r = n(364);
    t.__esModule = !0, t.default = function (e, t) {
      e.classList ? e.classList.add(t) : (0, o.default)(e, t) || ("string" == typeof e.className ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
    };
    var o = r(n(365));
    e.exports = t.default
  }, 364: function (e, t) {
    e.exports = function (e) {
      return e && e.__esModule ? e : {default: e}
    }
  }, 365: function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function (e, t) {
      return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
    }, e.exports = t.default
  }, 366: function (e, t, n) {
    "use strict";

    function r(e, t) {
      return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
    }

    e.exports = function (e, t) {
      e.classList ? e.classList.remove(t) : "string" == typeof e.className ? e.className = r(e.className, t) : e.setAttribute("class", r(e.className && e.className.baseVal || "", t))
    }
  }, 367: function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0, a(n(0));
    var r = a(n(4)), o = n(71), i = a(n(184));

    function a(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var s = function (e) {
      var t, n;

      function a() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return (t = e.call.apply(e, [this].concat(r)) || this).handleEnter = function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          return t.handleLifecycle("onEnter", 0, n)
        }, t.handleEntering = function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          return t.handleLifecycle("onEntering", 0, n)
        }, t.handleEntered = function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          return t.handleLifecycle("onEntered", 0, n)
        }, t.handleExit = function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          return t.handleLifecycle("onExit", 1, n)
        }, t.handleExiting = function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          return t.handleLifecycle("onExiting", 1, n)
        }, t.handleExited = function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          return t.handleLifecycle("onExited", 1, n)
        }, t
      }

      n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
      var s = a.prototype;
      return s.handleLifecycle = function (e, t, n) {
        var i, a = this.props.children, s = r.default.Children.toArray(a)[t];
        s.props[e] && (i = s.props)[e].apply(i, n), this.props[e] && this.props[e]((0, o.findDOMNode)(this))
      }, s.render = function () {
        var e = this.props, t = e.children, n = e.in, o = function (e, t) {
          if (null == e) return {};
          var n, r, o = {}, i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o
        }(e, ["children", "in"]), a = r.default.Children.toArray(t), s = a[0], l = a[1];
        return delete o.onEnter, delete o.onEntering, delete o.onEntered, delete o.onExit, delete o.onExiting, delete o.onExited, r.default.createElement(i.default, o, n ? r.default.cloneElement(s, {
          key: "first",
          onEnter: this.handleEnter,
          onEntering: this.handleEntering,
          onEntered: this.handleEntered
        }) : r.default.cloneElement(l, {
          key: "second",
          onEnter: this.handleExit,
          onEntering: this.handleExiting,
          onEntered: this.handleExited
        }))
      }, a
    }(r.default.Component);
    s.propTypes = {};
    var l = s;
    t.default = l, e.exports = t.default
  }, 368: function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.getChildMapping = o, t.mergeChildMappings = i, t.getInitialChildMapping = function (e, t) {
      return o(e.children, (function (n) {
        return (0, r.cloneElement)(n, {
          onExited: t.bind(null, n),
          in: !0,
          appear: a(n, "appear", e),
          enter: a(n, "enter", e),
          exit: a(n, "exit", e)
        })
      }))
    }, t.getNextChildMapping = function (e, t, n) {
      var s = o(e.children), l = i(t, s);
      return Object.keys(l).forEach((function (o) {
        var i = l[o];
        if ((0, r.isValidElement)(i)) {
          var c = o in t, u = o in s, p = t[o], d = (0, r.isValidElement)(p) && !p.props.in;
          !u || c && !d ? u || !c || d ? u && c && (0, r.isValidElement)(p) && (l[o] = (0, r.cloneElement)(i, {
            onExited: n.bind(null, i),
            in: p.props.in,
            exit: a(i, "exit", e),
            enter: a(i, "enter", e)
          })) : l[o] = (0, r.cloneElement)(i, {in: !1}) : l[o] = (0, r.cloneElement)(i, {
            onExited: n.bind(null, i),
            in: !0,
            exit: a(i, "exit", e),
            enter: a(i, "enter", e)
          })
        }
      })), l
    };
    var r = n(4);

    function o(e, t) {
      var n = Object.create(null);
      return e && r.Children.map(e, (function (e) {
        return e
      })).forEach((function (e) {
        n[e.key] = function (e) {
          return t && (0, r.isValidElement)(e) ? t(e) : e
        }(e)
      })), n
    }

    function i(e, t) {
      function n(n) {
        return n in t ? t[n] : e[n]
      }

      e = e || {}, t = t || {};
      var r, o = Object.create(null), i = [];
      for (var a in e) a in t ? i.length && (o[a] = i, i = []) : i.push(a);
      var s = {};
      for (var l in t) {
        if (o[l]) for (r = 0; r < o[l].length; r++) {
          var c = o[l][r];
          s[o[l][r]] = n(c)
        }
        s[l] = n(l)
      }
      for (r = 0; r < i.length; r++) s[i[r]] = n(i[r]);
      return s
    }

    function a(e, t, n) {
      return null != n[t] ? n[t] : e.props[t]
    }
  }, 4: function (e, t) {
    e.exports = window.React
  }, 41: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, o = s(n(4)), i = s(n(76)), a = s(n(79));

    function s(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var l = void 0;
    t.default = function (e) {
      var t = e.mixedString, n = e.components, s = e.throwErrors;
      if (l = t, !n) return t;
      if ("object" !== (void 0 === n ? "undefined" : r(n))) {
        if (s) throw new Error("Interpolation Error: unable to process `" + t + "` because components is not an object");
        return t
      }
      var c = (0, a.default)(t);
      try {
        return function e(t, n) {
          var a, s, c, u, p, d, h, f, m = [], g = {};
          for (d = 0; d < t.length; d++) if ("string" !== (p = t[d]).type) {
            if (!n.hasOwnProperty(p.value) || void 0 === n[p.value]) throw new Error("Invalid interpolation, missing component node: `" + p.value + "`");
            if ("object" !== r(n[p.value])) throw new Error("Invalid interpolation, component node must be a ReactElement or null: `" + p.value + "`", "\n> " + l);
            if ("componentClose" === p.type) throw new Error("Missing opening component token: `" + p.value + "`");
            if ("componentOpen" === p.type) {
              a = n[p.value], c = d;
              break
            }
            m.push(n[p.value])
          } else m.push(p.value);
          return a && (u = function (e, t) {
            var n, r, o = t[e], i = 0;
            for (r = e + 1; r < t.length; r++) if ((n = t[r]).value === o.value) {
              if ("componentOpen" === n.type) {
                i++;
                continue
              }
              if ("componentClose" === n.type) {
                if (0 === i) return r;
                i--
              }
            }
            throw new Error("Missing closing component token `" + o.value + "`")
          }(c, t), h = e(t.slice(c + 1, u), n), s = o.default.cloneElement(a, {}, h), m.push(s), u < t.length - 1 && (f = e(t.slice(u + 1), n), m = m.concat(f))), 1 === m.length ? m[0] : (m.forEach((function (e, t) {
            e && (g["interpolation-child-" + t] = e)
          })), (0, i.default)(g))
        }(c, n)
      } catch (e) {
        if (s) throw new Error("Interpolation Error: unable to process `" + t + "` because of error `" + e.message + "`");
        return t
      }
    }
  }, 49: function (e, t) {
    e.exports = window.yoast.analysis
  }, 5: function (e, t) {
    e.exports = window.yoast.styledComponents
  }, 50: function (e, t, n) {
    "use strict";

    function r(e) {
      return function () {
        return e
      }
    }

    var o = function () {
    };
    o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function () {
      return this
    }, o.thatReturnsArgument = function (e) {
      return e
    }, e.exports = o
  }, 530: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "FixedWidthContainer", (function () {
      return D
    })), n.d(t, "HelpTextWrapper", (function () {
      return te
    })), n.d(t, "ReplacementVariableEditor", (function () {
      return xt.ReplacementVariableEditor
    })), n.d(t, "replacementVariablesShape", (function () {
      return xt.replacementVariablesShape
    })), n.d(t, "recommendedReplacementVariablesShape", (function () {
      return xt.recommendedReplacementVariablesShape
    })), n.d(t, "SettingsSnippetEditor", (function () {
      return xt.SettingsSnippetEditor
    })), n.d(t, "SnippetEditor", (function () {
      return rn
    })), n.d(t, "lengthProgressShape", (function () {
      return St
    }));
    var r, o, i, a, s = n(9), l = n.n(s), c = n(10), u = n.n(c), p = n(14), d = n.n(p), h = n(11), f = n.n(h),
      m = n(12), g = n.n(m), v = n(8), b = n.n(v), y = n(6), x = n.n(y), E = n(1), w = n(4), O = n.n(w), j = n(5),
      S = n.n(j), C = n(0), _ = n.n(C), R = n(95), k = n.n(R), P = n(3);
    var M = S.a.div(r || (r = x()(["\n\toverflow: auto;\n\twidth: ", "px;\n\tpadding: 0 ", "px;\n\tmax-width: 100%;\n\tbox-sizing: border-box;\n"])), (function (e) {
        return e.widthValue
      }), (function (e) {
        return e.paddingValue
      })), A = S.a.div(o || (o = x()(["\n\twidth: ", "px;\n"])), (function (e) {
        return e.widthValue
      })), T = S.a.div(i || (i = x()(["\n\ttext-align: center;\n\tmargin: 1em 0 5px;\n"]))),
      F = S.a.div(a || (a = x()(['\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\n\t&:before{\n\t\tdisplay: inline-block;\n\t\tmargin-right: 10px;\n\t\tfont-size: 20px;\n\t\tline-height: inherit;\n\t\tvertical-align: text-top;\n\t\tcontent: "\\21c4";\n\t\tbox-sizing: border-box;\n\t}\n'], ['\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\n\t&:before{\n\t\tdisplay: inline-block;\n\t\tmargin-right: 10px;\n\t\tfont-size: 20px;\n\t\tline-height: inherit;\n\t\tvertical-align: text-top;\n\t\tcontent: "\\\\21c4";\n\t\tbox-sizing: border-box;\n\t}\n']))),
      D = function (e) {
        f()(o, e);
        var t, n, r = (t = o, n = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
            }))), !0
          } catch (e) {
            return !1
          }
        }(), function () {
          var e, r = b()(t);
          if (n) {
            var o = b()(this).constructor;
            e = Reflect.construct(r, arguments, o)
          } else e = r.apply(this, arguments);
          return g()(this, e)
        });

        function o(e) {
          var t;
          return l()(this, o), (t = r.call(this, e)).state = {showScrollHint: !1}, t.setContainerRef = t.setContainerRef.bind(d()(t)), t.determineSize = k()(t.determineSize.bind(d()(t)), 100), t
        }

        return u()(o, [{
          key: "setContainerRef", value: function (e) {
            if (!e) return null;
            this._container = e, this.determineSize(), window.addEventListener("resize", this.determineSize)
          }
        }, {
          key: "determineSize", value: function () {
            var e = this._container.offsetWidth;
            this.setState({showScrollHint: e < this.props.width})
          }
        }, {
          key: "componentWillUnmount", value: function () {
            window.removeEventListener("resize", this.determineSize)
          }
        }, {
          key: "render", value: function () {
            var e = this.props, t = e.width, n = e.padding, r = e.children, o = e.className, i = e.id, a = t - 2 * n;
            return Object(E.createElement)(O.a.Fragment, null, Object(E.createElement)(M, {
              id: i,
              className: o,
              widthValue: t,
              paddingValue: n,
              ref: this.setContainerRef
            }, Object(E.createElement)(A, {widthValue: a}, r)), this.state.showScrollHint && Object(E.createElement)(T, null, Object(E.createElement)(F, null, Object(P.__)("Scroll to see the preview content.", "wordpress-seo"))))
          }
        }]), o
      }(w.Component);
    D.propTypes = {
      id: _.a.string,
      width: _.a.number.isRequired,
      padding: _.a.number,
      children: _.a.node.isRequired,
      className: _.a.string
    }, D.defaultProps = {id: "", padding: 0, className: ""};
    var I, N = n(68), U = n.n(N), L = n(13), V = n(15), B = n(7), q = n(246);
    var z, W, H, G,
      K = S.a.div(I || (I = x()(["\n\t& > :first-child {\n\t\toverflow: hidden;\n\t\ttransition: height ", " ease-out;\n\t}\n"])), (function (e) {
        return "".concat(e.duration, "ms")
      })), Q = function (e) {
        f()(o, e);
        var t, n, r = (t = o, n = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
            }))), !0
          } catch (e) {
            return !1
          }
        }(), function () {
          var e, r = b()(t);
          if (n) {
            var o = b()(this).constructor;
            e = Reflect.construct(r, arguments, o)
          } else e = r.apply(this, arguments);
          return g()(this, e)
        });

        function o() {
          return l()(this, o), r.apply(this, arguments)
        }

        return u()(o, [{
          key: "resetHeight", value: function (e) {
            e.style.height = "0"
          }
        }, {
          key: "setHeight", value: function (e) {
            var t = function (e) {
              return Math.max(e.clientHeight, e.offsetHeight, e.scrollHeight)
            }(e);
            e.style.height = t + "px"
          }
        }, {
          key: "removeHeight", value: function (e) {
            e.style.height = null
          }
        }, {
          key: "render", value: function () {
            return Object(E.createElement)(K, {duration: this.props.duration}, Object(E.createElement)(q.CSSTransition, {
              in: this.props.isOpen,
              timeout: this.props.duration,
              classNames: "slide",
              unmountOnExit: !0,
              onEnter: this.resetHeight,
              onEntering: this.setHeight,
              onEntered: this.removeHeight,
              onExit: this.setHeight,
              onExiting: this.resetHeight
            }, this.props.children))
          }
        }]), o
      }(O.a.Component);
    Q.propTypes = {
      isOpen: _.a.bool.isRequired,
      duration: _.a.number.isRequired,
      children: _.a.node
    }, Q.defaultProps = {duration: 300};
    var $ = S.a.div(z || (z = x()(['\n\tmax-width: 600px;\n\tfont-weight: normal;\n\t// Don\'t apply a bottom margin to avoid "jumpiness".\n\tmargin: ', ";\n"])), Object(V.getDirectionalStyle)("0 20px 0 25px", "0 20px 0 15px")),
      X = S.a.div(W || (W = x()(["\n\tmax-width: ", ";\n"])), (function (e) {
        return e.panelMaxWidth
      })),
      Y = S()(L.Button)(H || (H = x()(["\n\tmin-width: 14px;\n\tmin-height: 14px;\n\twidth: 30px;\n\theight: 30px;\n\tborder-radius: 50%;\n\tborder: 1px solid transparent;\n\tbox-shadow: none;\n\tdisplay: block;\n\tmargin: -44px -10px 10px 0;\n\tbackground-color: transparent;\n\tfloat: ", ";\n\tpadding: ", ";\n\n\t&:hover {\n\t\tcolor: ", ";\n\t}\n\t&:focus {\n\t\tborder: 1px solid ", ";\n\t\toutline: none;\n\t\tbox-shadow: 0 0 3px ", ";\n\n\t\tsvg {\n\t\t\tfill: ", ";\n\t\t\tcolor: ", ";\n\t\t}\n\t}\n\t&:active {\n\t\tbox-shadow: none;\n\t}\n"])), Object(V.getDirectionalStyle)("right", "left"), Object(V.getDirectionalStyle)("3px 0 0 6px", "3px 0 0 5px"), B.colors.$color_blue, B.colors.$color_blue, Object(B.rgba)(B.colors.$color_blue_dark, .8), B.colors.$color_blue, B.colors.$color_blue),
      J = S()(L.SvgIcon)(G || (G = x()(["\n\t&:hover {\n\t\tfill: ", ";\n\t}\n"])), B.colors.$color_blue),
      Z = function (e) {
        f()(o, e);
        var t, n, r = (t = o, n = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
            }))), !0
          } catch (e) {
            return !1
          }
        }(), function () {
          var e, r = b()(t);
          if (n) {
            var o = b()(this).constructor;
            e = Reflect.construct(r, arguments, o)
          } else e = r.apply(this, arguments);
          return g()(this, e)
        });

        function o(e) {
          var t;
          return l()(this, o), (t = r.call(this, e)).state = {isExpanded: !1}, t.uniqueId = U()("yoast-help-"), t
        }

        return u()(o, [{
          key: "onButtonClick", value: function () {
            this.setState({isExpanded: !this.state.isExpanded})
          }
        }, {
          key: "render", value: function () {
            var e = "".concat(this.uniqueId, "-panel"), t = this.state.isExpanded;
            return Object(E.createElement)($, {className: this.props.className}, Object(E.createElement)(Y, {
              className: this.props.className + "__button",
              onClick: this.onButtonClick.bind(this),
              "aria-expanded": t,
              "aria-controls": t ? e : null,
              "aria-label": this.props.helpTextButtonLabel
            }, Object(E.createElement)(J, {
              size: "16px",
              color: B.colors.$color_grey_text,
              icon: "question-circle"
            })), Object(E.createElement)(Q, {isOpen: t}, Object(E.createElement)(X, {
              id: e,
              className: this.props.className + "__panel",
              panelMaxWidth: this.props.panelMaxWidth
            }, Object(E.createElement)(L.HelpText, null, this.props.helpText))))
          }
        }]), o
      }(O.a.Component);
    Z.propTypes = {
      className: _.a.string,
      helpTextButtonLabel: _.a.string.isRequired,
      panelMaxWidth: _.a.string,
      helpText: _.a.oneOfType([_.a.string, _.a.array])
    }, Z.defaultProps = {className: "yoast-help", panelMaxWidth: null, helpText: ""};
    var ee, te = Z, ne = n(18), re = n.n(ne), oe = n(41), ie = n.n(oe), ae = n(247), se = n.n(ae), le = n(70),
      ce = n(49), ue = n(2), pe = S.a.span(ee || (ee = x()(["\n\tcolor: #70757a;\n\tline-height: 1.7;\n"])));

    function de(e) {
      var t = e.shoppingData,
        n = Object(P.sprintf)(Object(P.__)("Rating: %s", "wordpress-seo"), Object(ue.round)(2 * t.rating, 1) + "/10"),
        r = Object(P.sprintf)(Object(P.__)("%s reviews", "wordpress-seo"), t.reviewCount);
      /* Translators: %s expands to the actual rating, e.g. 8/10. */
      return Object(E.createElement)(pe, null, t.reviewCount > 0 && Object(E.createElement)(w.Fragment, null, Object(E.createElement)(L.StarRating, {rating: t.rating}), Object(E.createElement)("span", null, " ", n, " · "), Object(E.createElement)("span", null, r, " · ")), t.price && Object(E.createElement)(w.Fragment, null, Object(E.createElement)("span", {dangerouslySetInnerHTML: {__html: t.price}})), t.availability && Object(E.createElement)("span", null, " · ".concat(Object(ue.capitalize)(t.availability))))
    }

    var he, fe, me, ge, ve = de;
    de.propTypes = {
      shoppingData: _.a.shape({
        rating: _.a.number,
        reviewCount: _.a.number,
        availability: _.a.string,
        price: _.a.string
      }).isRequired
    };
    var be = S.a.div(he || (he = x()(["\n\tdisplay: flex;\n\tmargin-top: -16px;\n\tline-height: 1.6;\n"]))),
      ye = S.a.div(fe || (fe = x()(["\n\tflex: 1;\n\tmax-width: 50%;\n"]))),
      xe = S.a.div(me || (me = x()(["\n\tflex: 1;\n\tmax-width: 25%;\n"]))),
      Ee = S.a.div(ge || (ge = x()(["\n\tcolor: #70757a;\n"])));

    function we(e) {
      var t = e.shoppingData;
      return Object(E.createElement)(be, null, t.rating > 0 && Object(E.createElement)(ye, {className: "yoast-shopping-data-preview__column"}, Object(E.createElement)("div", {className: "yoast-shopping-data-preview__upper"}, Object(P.__)("Rating", "wordpress-seo")), Object(E.createElement)(Ee, {className: "yoast-shopping-data-preview__lower"}, Object(E.createElement)("span", null, Object(ue.round)(2 * t.rating, 1), "/10 "), Object(E.createElement)(L.StarRating, {rating: t.rating}), Object(E.createElement)("span", null, " (", t.reviewCount, ")"))), t.price && Object(E.createElement)(xe, {className: "yoast-shopping-data-preview__column"}, Object(E.createElement)("div", {className: "yoast-shopping-data-preview__upper"}, Object(P.__)("Price", "wordpress-seo")), Object(E.createElement)(Ee, {
        className: "yoast-shopping-data-preview__lower",
        dangerouslySetInnerHTML: {__html: t.price}
      })), t.availability && Object(E.createElement)(xe, {className: "yoast-shopping-data-preview__column"}, Object(E.createElement)("div", {className: "yoast-shopping-data-preview__upper"}, Object(P.__)("Availability", "wordpress-seo")), Object(E.createElement)(Ee, {className: "yoast-shopping-data-preview__lower"}, Object(ue.capitalize)(t.availability))))
    }

    var Oe = we;
    we.propTypes = {
      shoppingData: _.a.shape({
        rating: _.a.number,
        reviewCount: _.a.number,
        availability: _.a.string,
        price: _.a.string
      }).isRequired
    };
    var je, Se, Ce, _e, Re, ke, Pe, Me, Ae, Te, Fe, De, Ie, Ne, Ue, Le, Ve, Be, qe, ze, We, He,
      Ge = ["desktop", "mobile"];
    var Ke = ce.languageProcessing.transliterate, Qe = ce.languageProcessing.createRegexFromArray,
      $e = ce.languageProcessing.replaceDiacritics,
      Xe = S()(D)(je || (je = x()(["\n\tbackground-color: #fff;\n\tfont-family: arial, sans-serif;\n\tbox-sizing: border-box;\n"]))),
      Ye = S.a.div(Se || (Se = x()(["\n\tborder-bottom: 1px hidden #fff;\n\tborder-radius: 8px;\n\tbox-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);\n\tfont-family: Arial, Roboto-Regular, HelveticaNeue, sans-serif;\n\tmax-width: ", "px;\n\tbox-sizing: border-box;\n\tfont-size: 14px;\n"])), 400),
      Je = S.a.div(Ce || (Ce = x()(["\n\tcursor: pointer;\n\tposition: relative;\n"])));

    function Ze(e, t, n) {
      return S()(e)(_e || (_e = x()(["\n\t\t&::before {\n\t\t\tdisplay: block;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\t", ": ", ";\n\t\t\twidth: 22px;\n\t\t\theight: 22px;\n\t\t\tbackground-image: url( ", ' );\n\t\t\tbackground-size: 24px;\n\t\t\tbackground-repeat: no-repeat;\n\t\t\tbackground-position: center;\n\t\t\tcontent: "";\n\t\t}\n\t'])), Object(V.getDirectionalStyle)("left", "right"), (function () {
        return "desktop" === n ? "-22px" : "-40px"
      }), Object(V.getDirectionalStyle)(Object(B.angleRight)(t), Object(B.angleLeft)(t)))
    }

    var et = S.a.div(Re || (Re = x()(["\n\tcolor: ", ";\n\ttext-decoration: none;\n\tfont-size: ", ";\n\tline-height: ", ";\n\tfont-weight: normal;\n\tmargin: 0;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\tmax-width: ", "px;\n\tvertical-align: top;\n\ttext-overflow: ellipsis;\n"])), (function (e) {
        return "desktop" === e.screenMode ? "#1a0dab" : "#1558d6"
      }), (function (e) {
        return e.screenMode, "20px"
      }), (function (e) {
        return "desktop" === e.screenMode ? "1.3" : "26px"
      }), 600),
      tt = S()(et)(ke || (ke = x()(["\n\tmax-width: ", "px;\n\tvertical-align: top;\n\ttext-overflow: ellipsis;\n"])), 600),
      nt = S.a.span(Pe || (Pe = x()(["\n\twhite-space: nowrap;\n"]))),
      rt = S.a.span(Me || (Me = x()(["\n\tdisplay: inline-block;\n\tmax-height: 52px; // max two lines of text\n\tpadding-top: 1px;\n\tvertical-align: top;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n"]))),
      ot = S.a.div(Ae || (Ae = x()(["\n\tdisplay: inline-block;\n\tcursor: pointer;\n\tposition: relative;\n\tmax-width: 90%;\n\twhite-space: nowrap;\n\tfont-size: 14px;\n\tvertical-align: top;\n"]))),
      it = S()(ot)(Te || (Te = x()(["\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tmax-width: 100%;\n\tmargin-bottom: ", ";\n\tpadding-top: 1px;\n\tline-height: ", ";\n\tvertical-align: ", ";\n"])), (function (e) {
        return "desktop" === e.screenMode ? "0" : "12px"
      }), (function (e) {
        return "desktop" === e.screenMode ? "1.5" : "20px"
      }), (function (e) {
        return "desktop" === e.screenMode ? "baseline" : "top"
      })),
      at = S.a.span(Fe || (Fe = x()(["\n\tfont-size: ", ";\n\tline-height: ", ";\n\tcolor: ", ";\n"])), (function (e) {
        return "desktop" === e.screenMode ? "14px" : "12px"
      }), (function (e) {
        return "desktop" === e.screenMode ? "1.3" : "20px"
      }), (function (e) {
        return "desktop" === e.screenMode ? "#5f6368" : "#70757a"
      })), st = S.a.span(De || (De = x()(["\n\tcolor: ", ";\n"])), (function (e) {
        return e.screenMode, "#202124"
      }));
    it.displayName = "SnippetPreview__BaseUrlOverflowContainer";
    var lt = S.a.div(Ie || (Ie = x()(["\n\tcolor: ", ";\n\tcursor: pointer;\n\tposition: relative;\n\tmax-width: ", "px;\n\tpadding-top: ", ";\n\tfont-size: 14px;\n\tline-height: 1.58;\n"])), (function (e) {
        return e.isDescriptionPlaceholder ? "4d5156" : "#4d5156"
      }), 600, (function (e) {
        return "desktop" === e.screenMode ? "0" : "1px"
      })),
      ct = S.a.div(Ne || (Ne = x()(["\n\tcolor: ", ";\n\tfont-size: 14px;\n\tline-height: 20px;\n\tcursor: pointer;\n\tposition: relative;\n\tmax-width: ", 'px;\n\n\t/* Clearing pseudo element to contain the floated image. */\n\t&:after {\n\t\tdisplay: table;\n\t\tcontent: "";\n\t\tclear: both;\n\t}\n'])), "#3c4043", 600),
      ut = S.a.div(Ue || (Ue = x()(["\n\tfloat: right;\n\twidth: 104px;\n\theight: 104px;\n\tmargin: 4px 0 4px 16px;\n\tborder-radius: 8px;\n\toverflow: hidden;\n"]))),
      pt = S.a.img(Le || (Le = x()(["\n\t/* Higher specificity is necessary to make sure inherited CSS rules don't alter the image ratio. */\n\t&&& {\n\t\tdisplay: block;\n\t\twidth: 104px;\n\t\theight: 104px;\n\t\tobject-fit: cover;\n\t}\n"]))),
      dt = S.a.div(Ve || (Ve = x()(["\n\tpadding: 12px 16px;\n\n\t&:first-child {\n\t\tmargin-bottom: -16px;\n\t}\n"]))),
      ht = S.a.div(Be || (Be = x()(["\n"]))),
      ft = S.a.div(qe || (qe = x()(["\n\tdisplay: inline-block;\n\tmargin-top: 9px;\n\tmargin-left: 6px;\n\tborder-top: 5px solid #70757a;\n\tborder-right: 4px solid transparent;\n\tborder-left: 4px solid transparent;\n\tvertical-align: top;\n"]))),
      mt = S.a.span(ze || (ze = x()(["\n\tcolor: ", ";\n"])), (function (e) {
        return "desktop" === e.screenMode ? "#777" : "#70757a"
      })),
      gt = S.a.img(We || (We = x()(["\n\twidth: 16px;\n\theight: 16px;\n\tmargin-right: 12px;\n\tvertical-align: middle;\n"]))),
      vt = S.a.div(He || (He = x()(["\n\tbackground-size: 100% 100%;\n\tdisplay: inline-block;\n\theight: 12px;\n\twidth: 12px;\n\tmargin-bottom: -1px;\n\topacity: 0.46;\n\tmargin-right: 6px;\n\tbackground-image: url( ", " );\n"])), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABr0lEQVR4AbWWJYCUURhFD04Zi7hrLzgFd4nzV9x6wKHinmYb7g4zq71gIw2LWBnZ3Q8df/fh96Tn/t2HVIw4CVKk+fSFNCkSxInxW1pFkhLmoMRjVvFLmkEX5ocuZuBVPw5jv8hh+iEU5QEmuMK+prz7RN3dPMMEGQYzxpH/lGjzou5jgl7mAvOdZfcbF+jbm3MAbFZ7VX9SJnlL1D8UMyjLe+BrAYDb+jJUr59JrlNWRtcqX9GkrPCR4QBAf4qYJAkQoyQrbKKs8RiaEjEI0GvvQ1mLMC9xaBFFBaZS1TbMSwJSomg39erDF+TxpCCNOXjGQJTCvG6qn4ZPzkcxA61Tjhaf4KMj+6Q3XvW6Lopraa8IozRQxIi0a7NXorULc5JyHX/3F3q+0PsFYytVTaGgjz/AvCyiegE69IUsPxHNBMpa738i6tGWlzkAABjKe/+j9YeRHGVd9oWRnwe2ewDASp/L/UqoPQ5AmFeYZMavBP8dAJz0GWWDHQlzXApMdz4KYUfKICcxkKeOfGmQyrIPcgE9m+g/+kT812/Nr3+0kqzitxQjoKXh6xfor99nlEdFjyvH15gAAAAASUVORK5CYII="),
      bt = function (e) {
        f()(o, e);
        var t, n, r = (t = o, n = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
            }))), !0
          } catch (e) {
            return !1
          }
        }(), function () {
          var e, r = b()(t);
          if (n) {
            var o = b()(this).constructor;
            e = Reflect.construct(r, arguments, o)
          } else e = r.apply(this, arguments);
          return g()(this, e)
        });

        function o(e) {
          var t;
          return l()(this, o), (t = r.call(this, e)).state = {
            title: e.title,
            description: e.description,
            isDescriptionPlaceholder: !0
          }, t.setTitleRef = t.setTitleRef.bind(d()(t)), t.setDescriptionRef = t.setDescriptionRef.bind(d()(t)), t
        }

        return u()(o, [{
          key: "setTitleRef", value: function (e) {
            this._titleElement = e
          }
        }, {
          key: "setDescriptionRef", value: function (e) {
            this._descriptionElement = e
          }
        }, {
          key: "hasOverflowedContent", value: function (e) {
            return Math.abs(e.clientHeight - e.scrollHeight) >= 2
          }
        }, {
          key: "fitTitle", value: function () {
            var e = this._titleElement;
            if (this.hasOverflowedContent(e)) {
              var t = this.state.title, n = e.clientWidth / 3;
              t.length > n && (t = t.substring(0, n));
              var r = this.dropLastWord(t);
              this.setState({title: r})
            }
          }
        }, {
          key: "dropLastWord", value: function (e) {
            var t = e.split(" ");
            return t.pop(), t.join(" ")
          }
        }, {
          key: "getTitle", value: function () {
            return this.props.title !== this.state.title ? this.state.title + " ..." : this.props.title
          }
        }, {
          key: "getDescription", value: function () {
            return this.props.description ? se()(this.props.description, {
              length: 156,
              separator: " ",
              omission: " ..."
            }) : Object(P.__)("Please provide a meta description by editing the snippet below. If you don’t, Google will try to find a relevant part of your post to show in the search results.", "wordpress-seo")
          }
        }, {
          key: "renderDate", value: function () {
            var e = "desktop" === this.props.mode ? "—" : "－";
            return this.props.date && Object(E.createElement)(mt, {screenMode: this.props.mode}, this.props.date, " ", e, " ")
          }
        }, {
          key: "addCaretStyles", value: function (e, t) {
            var n = this.props, r = n.mode, o = n.hoveredField;
            return n.activeField === e ? Ze(t, B.colors.$color_snippet_active, r) : o === e ? Ze(t, B.colors.$color_snippet_hover, r) : t
          }
        }, {
          key: "getBreadcrumbs", value: function (e) {
            var t = this.props.breadcrumbs, n = encodeURI(e.replace(/\?|#/g, "")), r = Object(le.parse)(n),
              o = r.hostname, i = r.pathname, a = " › " + (t || i.split("/")).filter((function (e) {
                return !!e
              })).join(" › ");
            return {hostname: decodeURI(o), breadcrumbs: decodeURI(a)}
          }
        }, {
          key: "renderUrl", value: function () {
            var e = this.props, t = e.url, n = e.onMouseUp, r = e.onMouseEnter, o = e.onMouseLeave, i = e.mode,
              a = e.faviconSrc, s = "mobile" === i, l = $e(t), c = this.getBreadcrumbs(l), u = c.hostname,
              p = c.breadcrumbs, d = this.addCaretStyles("url", ot);
            return Object(E.createElement)(O.a.Fragment, null, Object(E.createElement)(L.ScreenReaderText, null, Object(P.__)("Url preview", "wordpress-seo") + ":"), Object(E.createElement)(d, null, Object(E.createElement)(it, {
              onMouseUp: n.bind(null, "url"),
              onMouseEnter: r.bind(null, "url"),
              onMouseLeave: o.bind(null),
              screenMode: i
            }, s && Object(E.createElement)(gt, {
              src: a || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVR4AWL4//8/RRjO8Iucx+noO0MWUDo16FYABMGP6ZfUcRnWtm27jVPbtm3bttuH2t3eFPcY9pLz7NxiLjCyVd87pKnHyqXyxtCs8APd0rnyxiu4qSeA3QEDrAwBDrT1s1Rc/OrjLZwqVmOSu6+Lamcpp2KKMA9PH1BYXMe1mUP5qotvXTywsOEEYHXxrY+3cqk6TMkYpNr2FeoY3KIr0RPtn9wQ2unlA+GMkRw6+9TFw4YTwDUzx/JVvARj9KaedXRO8P5B1Du2S32smzqUrcKGEyA+uAgQjKX7zf0boWHGfn71jIKj2689gxp7OAGShNcBUmLMPVjZuiKcA2vuWHHDCQxMCz629kXAIU4ApY15QwggAFbfOP9DhgBJ+nWVJ1AZAfICAj1pAlY6hCADZnveQf7bQIwzVONGJonhLIlS9gr5mFg44Xd+4S3XHoGNPdJl1INIwKyEgHckEhgTe1bGiFY9GSFBYUwLh1IkiJUbY407E7syBSFxKTszEoiE/YdrgCEayDmtaJwCI9uu8TKMuZSVfSa4BpGgzvomBR/INhLGzrqDotp01ZR8pn/1L0JN9d9XNyx0AAAAAElFTkSuQmCC",
              alt: ""
            }), Object(E.createElement)(at, {screenMode: i}, Object(E.createElement)(st, null, u), p))))
          }
        }, {
          key: "componentWillReceiveProps", value: function (e) {
            var t = {};
            this.props.title !== e.title && (t.title = e.title), this.props.description !== e.description && (t.description = e.description), this.setState(t)
          }
        }, {
          key: "componentDidUpdate", value: function () {
            var e = this;
            this.setState({isDescriptionPlaceholder: !this.props.description}), "mobile" === this.props.mode && (clearTimeout(this.fitTitleTimeout), this.fitTitleTimeout = setTimeout((function () {
              e.fitTitle()
            }), 10))
          }
        }, {
          key: "componentDidMount", value: function () {
            this.setState({isDescriptionPlaceholder: !this.props.description})
          }
        }, {
          key: "componentWillUnmount", value: function () {
            clearTimeout(this.fitTitleTimeout)
          }
        }, {
          key: "renderDescription", value: function () {
            var e = this.props, t = e.wordsToHighlight, n = e.locale, r = e.onMouseUp, o = e.onMouseLeave,
              i = e.onMouseEnter, a = e.mode, s = e.mobileImageSrc, l = this.renderDate(), c = {
                isDescriptionPlaceholder: this.state.isDescriptionPlaceholder,
                onMouseUp: r.bind(null, "description"),
                onMouseEnter: i.bind(null, "description"),
                onMouseLeave: o.bind(null)
              };
            if ("desktop" === a) {
              var u = this.addCaretStyles("description", lt);
              return Object(E.createElement)(u, re()({}, c, {ref: this.setDescriptionRef}), l, function (e, t, n, r) {
                if (0 === t.length) return n;
                var o = n, i = [];
                t.forEach((function (t) {
                  t = t, i.push(t);
                  var n = Ke(t, e);
                  n !== t && i.push(n)
                }));
                var a = Qe(i, !1, "", !1);
                return o = o.replace(a, (function (e) {
                  return "{{strong}}".concat(e, "{{/strong}}")
                })), ie()({mixedString: o, components: {strong: Object(E.createElement)("strong", null)}})
              }(n, t, this.getDescription()))
            }
            if ("mobile" === a) {
              var p = this.addCaretStyles("description", ct);
              return Object(E.createElement)(p, c, Object(E.createElement)(ct, {
                isDescriptionPlaceholder: this.state.isDescriptionPlaceholder,
                ref: this.setDescriptionRef
              }, s && Object(E.createElement)(ut, null, Object(E.createElement)(pt, {
                src: s,
                alt: ""
              })), l, this.getDescription()))
            }
            return null
          }
        }, {
          key: "renderProductData", value: function (e) {
            var t = this.props, n = t.mode, r = t.shoppingData;
            return 0 === Object.values(r).length ? null : "desktop" === n ? Object(E.createElement)(e, {className: "yoast-shopping-data-preview--desktop"}, Object(E.createElement)(L.ScreenReaderText, null, Object(P.__)("Shopping data preview:", "wordpress-seo")), Object(E.createElement)(ve, {shoppingData: r})) : "mobile" === n ? Object(E.createElement)(e, {className: "yoast-shopping-data-preview--mobile"}, Object(E.createElement)(L.ScreenReaderText, null, Object(P.__)("Shopping data preview:", "wordpress-seo")), Object(E.createElement)(Oe, {shoppingData: r})) : null
          }
        }, {
          key: "render", value: function () {
            var e = this.props, t = e.onMouseUp, n = e.onMouseLeave, r = e.onMouseEnter, o = e.mode, i = e.isAmp,
              a = this.getPreparedComponents(o), s = a.PartContainer, l = a.Container, c = a.TitleUnbounded,
              u = a.SnippetTitle, p = "desktop" === o, d = p ? Object(E.createElement)(ft, null) : null,
              h = p || !i ? null : Object(E.createElement)(vt, null);
            return Object(E.createElement)("section", null, Object(E.createElement)(l, {
              id: "yoast-snippet-preview-container",
              width: p ? 640 : null,
              padding: 20
            }, Object(E.createElement)(s, null, this.renderUrl(), d, Object(E.createElement)(L.ScreenReaderText, null, Object(P.__)("SEO title preview", "wordpress-seo") + ":"), Object(E.createElement)(u, {
              onMouseUp: t.bind(null, "title"),
              onMouseEnter: r.bind(null, "title"),
              onMouseLeave: n.bind(null)
            }, Object(E.createElement)(tt, {screenMode: o}, Object(E.createElement)(c, {ref: this.setTitleRef}, this.getTitle()))), h), Object(E.createElement)(s, null, Object(E.createElement)(L.ScreenReaderText, null, Object(P.__)("Meta description preview:", "wordpress-seo")), this.renderDescription()), this.renderProductData(s)))
          }
        }, {
          key: "getPreparedComponents", value: function (e) {
            return {
              PartContainer: "desktop" === e ? ht : dt,
              Container: "desktop" === e ? Xe : Ye,
              TitleUnbounded: "desktop" === e ? nt : rt,
              SnippetTitle: this.addCaretStyles("title", Je)
            }
          }
        }]), o
      }(w.PureComponent);
    bt.propTypes = {
      title: _.a.string.isRequired,
      url: _.a.string.isRequired,
      description: _.a.string.isRequired,
      date: _.a.string,
      breadcrumbs: _.a.array,
      hoveredField: _.a.string,
      activeField: _.a.string,
      keyword: _.a.string,
      wordsToHighlight: _.a.array,
      locale: _.a.string,
      mode: _.a.oneOf(Ge),
      isAmp: _.a.bool,
      faviconSrc: _.a.string,
      mobileImageSrc: _.a.string,
      shoppingData: _.a.object,
      onMouseUp: _.a.func.isRequired,
      onHover: _.a.func,
      onMouseEnter: _.a.func,
      onMouseLeave: _.a.func
    }, bt.defaultProps = {
      date: "",
      keyword: "",
      wordsToHighlight: [],
      breadcrumbs: null,
      locale: "en",
      hoveredField: "",
      activeField: "",
      mode: "mobile",
      isAmp: !1,
      faviconSrc: "",
      mobileImageSrc: "",
      shoppingData: {},
      onHover: function () {
      },
      onMouseEnter: function () {
      },
      onMouseLeave: function () {
      }
    };
    var yt, xt = n(23), Et = n(17), wt = n.n(Et), Ot = n(93), jt = n.n(Ot),
      St = _.a.shape({max: _.a.number, actual: _.a.number, score: _.a.number});
    var Ct = S.a.input(yt || (yt = x()(["\n\tborder: none;\n\twidth: 100%;\n\theight: inherit;\n\tline-height: 1.71428571; // 24px based on 14px font-size\n\tfont-family: inherit;\n\tfont-size: inherit;\n\tcolor: inherit;\n\n\t&:focus {\n\t\toutline: 0;\n\t}\n"]))),
      _t = Object(B.withCaretStyles)(L.VariableEditorInputContainer), Rt = function (e) {
        f()(o, e);
        var t, n, r = (t = o, n = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
            }))), !0
          } catch (e) {
            return !1
          }
        }(), function () {
          var e, r = b()(t);
          if (n) {
            var o = b()(this).constructor;
            e = Reflect.construct(r, arguments, o)
          } else e = r.apply(this, arguments);
          return g()(this, e)
        });

        function o(e) {
          var t;
          return l()(this, o), (t = r.call(this, e)).elements = {
            title: null,
            slug: null,
            description: null
          }, t.uniqueId = U()("snippet-editor-field-"), t.setRef = t.setRef.bind(d()(t)), t.setTitleRef = t.setTitleRef.bind(d()(t)), t.setSlugRef = t.setSlugRef.bind(d()(t)), t.setDescriptionRef = t.setDescriptionRef.bind(d()(t)), t.triggerReplacementVariableSuggestions = t.triggerReplacementVariableSuggestions.bind(d()(t)), t.onFocusTitle = t.onFocusTitle.bind(d()(t)), t.onChangeTitle = t.onChangeTitle.bind(d()(t)), t.onFocusSlug = t.onFocusSlug.bind(d()(t)), t.focusSlug = t.focusSlug.bind(d()(t)), t.onChangeSlug = t.onChangeSlug.bind(d()(t)), t.onFocusDescription = t.onFocusDescription.bind(d()(t)), t.onChangeDescription = t.onChangeDescription.bind(d()(t)), t
        }

        return u()(o, [{
          key: "setRef", value: function (e, t) {
            this.elements[e] = t
          }
        }, {
          key: "setTitleRef", value: function (e) {
            this.setRef("title", e)
          }
        }, {
          key: "setSlugRef", value: function (e) {
            this.setRef("slug", e)
          }
        }, {
          key: "setDescriptionRef", value: function (e) {
            this.setRef("description", e)
          }
        }, {
          key: "componentDidUpdate", value: function (e) {
            e.activeField !== this.props.activeField && this.focusOnActiveFieldChange()
          }
        }, {
          key: "focusOnActiveFieldChange", value: function () {
            var e = this.props.activeField, t = e ? this.elements[e] : null;
            t && t.focus()
          }
        }, {
          key: "triggerReplacementVariableSuggestions", value: function (e) {
            this.elements[e].triggerReplacementVariableSuggestions()
          }
        }, {
          key: "onFocusTitle", value: function () {
            this.props.onFocus("title")
          }
        }, {
          key: "onChangeTitle", value: function (e) {
            this.props.onChange("title", e)
          }
        }, {
          key: "onFocusSlug", value: function () {
            this.props.onFocus("slug")
          }
        }, {
          key: "focusSlug", value: function () {
            this.elements.slug.focus()
          }
        }, {
          key: "onChangeSlug", value: function (e) {
            this.props.onChange("slug", e.target.value)
          }
        }, {
          key: "onFocusDescription", value: function () {
            this.props.onFocus("description")
          }
        }, {
          key: "onChangeDescription", value: function (e) {
            this.props.onChange("description", e)
          }
        }, {
          key: "render", value: function () {
            var e = this.props, t = e.activeField, n = e.hoveredField, r = e.replacementVariables,
              o = e.recommendedReplacementVariables, i = e.titleLengthProgress, a = e.descriptionLengthProgress,
              s = e.onBlur, l = e.descriptionEditorFieldPlaceholder, c = e.data, u = c.title, p = c.slug,
              d = c.description, h = e.containerPadding, f = e.titleInputId, m = e.slugInputId, g = e.descriptionInputId,
              v = "".concat(this.uniqueId, "-slug");
            return Object(E.createElement)(xt.StyledEditor, {padding: h}, Object(E.createElement)(xt.ReplacementVariableEditor, {
              withCaret: !0,
              label: Object(P.__)("SEO title", "wordpress-seo"),
              onFocus: this.onFocusTitle,
              onBlur: s,
              isActive: "title" === t,
              isHovered: "title" === n,
              editorRef: this.setTitleRef,
              replacementVariables: r,
              recommendedReplacementVariables: o,
              content: u,
              onChange: this.onChangeTitle,
              fieldId: f,
              type: "title"
            }), Object(E.createElement)(L.ProgressBar, {
              max: i.max,
              value: i.actual,
              progressColor: this.getProgressColor(i.score)
            }), Object(E.createElement)(L.SimulatedLabel, {
              id: v,
              onClick: this.onFocusSlug
            }, Object(P.__)("Slug", "wordpress-seo")), Object(E.createElement)(_t, {
              onClick: this.focusSlug,
              isActive: "slug" === t,
              isHovered: "slug" === n
            }, Object(E.createElement)(Ct, {
              value: p,
              onChange: this.onChangeSlug,
              onFocus: this.onFocusSlug,
              onBlur: s,
              ref: this.setSlugRef,
              "aria-labelledby": this.uniqueId + "-slug",
              id: m
            })), Object(E.createElement)(xt.ReplacementVariableEditor, {
              withCaret: !0,
              type: "description",
              placeholder: l,
              label: Object(P.__)("Meta description", "wordpress-seo"),
              onFocus: this.onFocusDescription,
              onBlur: s,
              isActive: "description" === t,
              isHovered: "description" === n,
              editorRef: this.setDescriptionRef,
              replacementVariables: r,
              recommendedReplacementVariables: o,
              content: d,
              onChange: this.onChangeDescription,
              fieldId: g
            }), Object(E.createElement)(L.ProgressBar, {
              max: a.max,
              value: a.actual,
              progressColor: this.getProgressColor(a.score)
            }))
          }
        }, {
          key: "getProgressColor", value: function (e) {
            return e >= 7 ? B.colors.$color_good : e >= 5 ? B.colors.$color_ok : B.colors.$color_bad
          }
        }]), o
      }(O.a.Component);
    Rt.propTypes = {
      replacementVariables: xt.replacementVariablesShape,
      recommendedReplacementVariables: xt.recommendedReplacementVariablesShape,
      onChange: _.a.func.isRequired,
      onFocus: _.a.func,
      onBlur: _.a.func,
      data: _.a.shape({
        title: _.a.string.isRequired,
        slug: _.a.string.isRequired,
        description: _.a.string.isRequired
      }).isRequired,
      activeField: _.a.oneOf(["title", "slug", "description"]),
      hoveredField: _.a.oneOf(["title", "slug", "description"]),
      titleLengthProgress: St,
      descriptionLengthProgress: St,
      descriptionEditorFieldPlaceholder: _.a.string,
      containerPadding: _.a.string,
      titleInputId: _.a.string,
      slugInputId: _.a.string,
      descriptionInputId: _.a.string
    }, Rt.defaultProps = {
      replacementVariables: [],
      onFocus: function () {
      },
      onBlur: function () {
      },
      titleLengthProgress: {max: 600, actual: 0, score: 0},
      descriptionLengthProgress: {max: 156, actual: 0, score: 0},
      containerPadding: "0 20px",
      titleInputId: "yoast-google-preview-title",
      slugInputId: "yoast-google-preview-slug",
      descriptionInputId: "yoast-google-preview-description"
    };
    var kt, Pt, Mt, At, Tt = Rt;
    var Ft = S.a.fieldset(kt || (kt = x()(["\n\tborder: 0;\n\tpadding: 0;\n\tmargin: 0 0 16px;\n"]))),
      Dt = S.a.legend(Pt || (Pt = x()(["\n\tmargin: 8px 0;\n\tpadding: 0;\n\tcolor: ", ";\n\tfont-size: 14px;\n\tfont-weight: 600;\n"])), B.colors.$color_headings),
      It = S()(L.Label)(Mt || (Mt = x()(["\n\t", ";\n\tcolor: inherit;\n\tfont-size: 14px;\n\tline-height: 1.71428571;\n\tcursor: pointer;\n\t/* Helps RTL in Chrome */\n\tdisplay: inline-block;\n"])), Object(V.getDirectionalStyle)("margin-right: 16px", "margin-left: 16px")),
      Nt = S()(L.Input)(At || (At = x()(["\n\t&& {\n\t\t", ";\n\t\tcursor: pointer;\n\t}\n"])), Object(V.getDirectionalStyle)("margin: 0 8px 0 0", "margin: 0 0 0 8px")),
      Ut = function (e) {
        f()(o, e);
        var t, n, r = (t = o, n = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
            }))), !0
          } catch (e) {
            return !1
          }
        }(), function () {
          var e, r = b()(t);
          if (n) {
            var o = b()(this).constructor;
            e = Reflect.construct(r, arguments, o)
          } else e = r.apply(this, arguments);
          return g()(this, e)
        });

        function o(e) {
          var t;
          return l()(this, o), (t = r.call(this, e)).switchToMobile = t.props.onChange.bind(d()(t), "mobile"), t.switchToDesktop = t.props.onChange.bind(d()(t), "desktop"), t
        }

        return u()(o, [{
          key: "render", value: function () {
            var e = this.props, t = e.active, n = e.mobileModeInputId, r = e.desktopModeInputId,
              o = n.length > 0 ? n : "yoast-google-preview-mode-mobile",
              i = r.length > 0 ? r : "yoast-google-preview-mode-desktop";
            return Object(E.createElement)(Ft, null, Object(E.createElement)(Dt, null, Object(P.__)("Preview as:", "wordpress-seo")), Object(E.createElement)(Nt, {
              onChange: this.switchToMobile,
              type: "radio",
              name: "screen",
              value: "mobile",
              optionalAttributes: {id: o, checked: "mobile" === t}
            }), Object(E.createElement)(It, {for: o}, Object(P.__)("Mobile result", "wordpress-seo")), Object(E.createElement)(Nt, {
              onChange: this.switchToDesktop,
              type: "radio",
              name: "screen",
              value: "desktop",
              optionalAttributes: {id: i, checked: "desktop" === t}
            }), Object(E.createElement)(It, {for: i}, Object(P.__)("Desktop result", "wordpress-seo")))
          }
        }]), o
      }(w.Component);
    Ut.propTypes = {
      onChange: _.a.func.isRequired,
      active: _.a.oneOf(Ge),
      mobileModeInputId: _.a.string,
      desktopModeInputId: _.a.string
    }, Ut.defaultProps = {active: "mobile", mobileModeInputId: "", desktopModeInputId: ""};
    var Lt, Vt, Bt, qt = Ut;

    function zt(e, t) {
      var n;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
          if (e) {
            if ("string" == typeof e) return Wt(e, void 0);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Wt(e, void 0) : void 0
          }
        }(e)) || t && e && "number" == typeof e.length) {
          n && (e = n);
          var r = 0, o = function () {
          };
          return {
            s: o, n: function () {
              return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
            }, e: function (e) {
              throw e
            }, f: o
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var i, a = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]()
        }, n: function () {
          var e = n.next();
          return a = e.done, e
        }, e: function (e) {
          s = !0, i = e
        }, f: function () {
          try {
            a || null == n.return || n.return()
          } finally {
            if (s) throw i
          }
        }
      }
    }

    function Wt(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }

    function Ht(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function Gt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Ht(Object(n), !0).forEach((function (t) {
          wt()(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ht(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    var Kt = ce.assessments.seo, Qt = Kt.MetaDescriptionLengthAssessment, $t = Kt.PageTitleWidthAssessment,
      Xt = ce.helpers.measureTextWidth,
      Yt = S()(L.Button)(Lt || (Lt = x()(["\n\theight: 33px;\n\tborder: 1px solid #dbdbdb;\n\tbox-shadow: none;\n\tfont-family: Arial, Roboto-Regular, HelveticaNeue, sans-serif;\n"]))),
      Jt = S()(Yt)(Vt || (Vt = x()(["\n\tmargin: ", ";\n\tfill: ", ";\n\tpadding-left: 8px;\n\n\t& svg {\n\t\t", ": 7px;\n\t}\n"])), Object(V.getDirectionalStyle)("10px 0 0 4px", "10px 4px 0 0"), B.colors.$color_grey_dark, Object(V.getDirectionalStyle)("margin-right", "margin-left")),
      Zt = S()(Yt)(Bt || (Bt = x()(["\n\tmargin-top: 24px;\n"])));

    function en(e) {
      var t = Xt(e), n = new $t({scores: {widthTooShort: 9}}, !0), r = n.calculateScore(t);
      return {max: n.getMaximumLength(), actual: t, score: r}
    }

    function tn(e, t, n, r, o) {
      var i = ce.languageProcessing.countMetaDescriptionLength(t, e),
        a = n && !r ? new Qt({scores: {tooLong: 3, tooShort: 3}}) : new Qt, s = a.calculateScore(i, o);
      return {max: a.getMaximumLength(o), actual: i, score: s}
    }

    var nn = function (e) {
      f()(o, e);
      var t, n, r = (t = o, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
          }))), !0
        } catch (e) {
          return !1
        }
      }(), function () {
        var e, r = b()(t);
        if (n) {
          var o = b()(this).constructor;
          e = Reflect.construct(r, arguments, o)
        } else e = r.apply(this, arguments);
        return g()(this, e)
      });

      function o(e) {
        var t;
        l()(this, o);
        var n = (t = r.call(this, e)).mapDataToMeasurements(e.data), i = t.mapDataToPreview(n);
        return t.state = {
          isOpen: !e.showCloseButton,
          activeField: null,
          hoveredField: null,
          mappedData: i,
          titleLengthProgress: en(n.title),
          descriptionLengthProgress: tn(n.description, t.props.date, t.props.isCornerstone, t.props.isTaxonomy, t.props.locale)
        }, t.setFieldFocus = t.setFieldFocus.bind(d()(t)), t.unsetFieldFocus = t.unsetFieldFocus.bind(d()(t)), t.onMouseUp = t.onMouseUp.bind(d()(t)), t.onMouseEnter = t.onMouseEnter.bind(d()(t)), t.onMouseLeave = t.onMouseLeave.bind(d()(t)), t.open = t.open.bind(d()(t)), t.close = t.close.bind(d()(t)), t.setEditButtonRef = t.setEditButtonRef.bind(d()(t)), t.handleChange = t.handleChange.bind(d()(t)), t
      }

      return u()(o, [{
        key: "shallowCompareData", value: function (e, t) {
          var n = !1;
          return e.data.description === t.data.description && e.data.slug === t.data.slug && e.data.title === t.data.title && e.isCornerstone === t.isCornerstone && e.isTaxonomy === t.isTaxonomy && e.locale === t.locale || (n = !0), JSON.stringify(e.replacementVariables) !== JSON.stringify(t.replacementVariables) && (n = !0), n
        }
      }, {
        key: "componentWillReceiveProps", value: function (e) {
          if (this.shallowCompareData(this.props, e)) {
            var t = this.mapDataToMeasurements(e.data, e.replacementVariables);
            this.setState({
              titleLengthProgress: en(t.title),
              descriptionLengthProgress: tn(t.description, e.date, e.isCornerstone, e.isTaxonomy, e.locale)
            })
          }
        }
      }, {
        key: "componentDidUpdate", value: function () {
          var e = this.mapDataToMeasurements(Gt({}, this.props.data));
          this.props.onChangeAnalysisData(e)
        }
      }, {
        key: "handleChange", value: function (e, t) {
          this.props.onChange(e, t);
          var n = this.mapDataToMeasurements(Gt(Gt({}, this.props.data), {}, wt()({}, e, t)));
          this.props.onChangeAnalysisData(n)
        }
      }, {
        key: "renderEditor", value: function () {
          var e = this.props, t = e.data, n = e.descriptionEditorFieldPlaceholder, r = e.replacementVariables,
            o = e.recommendedReplacementVariables, i = e.hasPaperStyle, a = e.showCloseButton, s = e.idSuffix,
            l = this.state, c = l.activeField, u = l.hoveredField, p = l.isOpen, d = l.titleLengthProgress,
            h = l.descriptionLengthProgress;
          return p ? Object(E.createElement)(O.a.Fragment, null, Object(E.createElement)(Tt, {
            data: t,
            activeField: c,
            hoveredField: u,
            onChange: this.handleChange,
            onFocus: this.setFieldFocus,
            onBlur: this.unsetFieldFocus,
            replacementVariables: r,
            recommendedReplacementVariables: o,
            titleLengthProgress: d,
            descriptionLengthProgress: h,
            descriptionEditorFieldPlaceholder: n,
            containerPadding: i ? "0 20px" : "0",
            titleInputId: Object(V.join)(["yoast-google-preview-title", s]),
            slugInputId: Object(V.join)(["yoast-google-preview-slug", s]),
            descriptionInputId: Object(V.join)(["yoast-google-preview-description", s])
          }), a && Object(E.createElement)(Zt, {onClick: this.close}, Object(P.__)("Close snippet editor", "wordpress-seo"))) : null
        }
      }, {
        key: "setFieldFocus", value: function (e) {
          e = this.mapFieldToEditor(e), this.setState({activeField: e})
        }
      }, {
        key: "unsetFieldFocus", value: function () {
          this.setState({activeField: null})
        }
      }, {
        key: "onMouseUp", value: function (e) {
          this.state.isOpen ? this.setFieldFocus(e) : this.open().then(this.setFieldFocus.bind(this, e))
        }
      }, {
        key: "onMouseEnter", value: function (e) {
          this.setState({hoveredField: this.mapFieldToEditor(e)})
        }
      }, {
        key: "onMouseLeave", value: function () {
          this.setState({hoveredField: null})
        }
      }, {
        key: "open", value: function () {
          var e = this;
          return new Promise((function (t) {
            e.setState({isOpen: !0}, t)
          }))
        }
      }, {
        key: "close", value: function () {
          var e = this;
          this.setState({isOpen: !1, activeField: null}, (function () {
            e._editButton.focus()
          }))
        }
      }, {
        key: "processReplacementVariables", value: function (e) {
          var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.props.replacementVariables,
            r = zt(n);
          try {
            for (r.s(); !(t = r.n()).done;) {
              var o = t.value, i = o.name, a = o.value;
              e = e.replace(new RegExp("%%" + i + "%%", "g"), a)
            }
          } catch (e) {
            r.e(e)
          } finally {
            r.f()
          }
          return e
        }
      }, {
        key: "mapDataToMeasurements", value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.props.replacementVariables,
            n = this.props, r = n.baseUrl, o = n.mapEditorDataToPreview,
            i = this.processReplacementVariables(e.description, t);
          i = ce.languageProcessing.stripSpaces(i);
          var a = r.replace(/^https?:\/\//i, ""),
            s = {title: this.processReplacementVariables(e.title, t), url: r + e.slug, description: i},
            l = {shortenedBaseUrl: a};
          return o ? o(s, l) : s
        }
      }, {
        key: "mapDataToPreview", value: function (e) {
          return {title: e.title, url: e.url, description: e.description}
        }
      }, {
        key: "mapFieldToPreview", value: function (e) {
          return "slug" === e && (e = "url"), e
        }
      }, {
        key: "mapFieldToEditor", value: function (e) {
          return "url" === e && (e = "slug"), e
        }
      }, {
        key: "setEditButtonRef", value: function (e) {
          this._editButton = e
        }
      }, {
        key: "render", value: function () {
          var e = this.props, t = e.onChange, n = e.data, r = e.mode, o = e.date, i = e.locale, a = e.keyword,
            s = e.wordsToHighlight, l = e.showCloseButton, c = e.faviconSrc, u = e.mobileImageSrc, p = e.idSuffix,
            d = e.shoppingData, h = this.state, f = h.activeField, m = h.hoveredField, g = h.isOpen,
            v = this.mapDataToMeasurements(n), b = this.mapDataToPreview(v);
          return Object(E.createElement)(L.ErrorBoundary, null, Object(E.createElement)("div", null, Object(E.createElement)(qt, {
            onChange: function (e) {
              return t("mode", e)
            },
            active: r,
            mobileModeInputId: Object(V.join)(["yoast-google-preview-mode-mobile", p]),
            desktopModeInputId: Object(V.join)(["yoast-google-preview-mode-desktop", p])
          }), Object(E.createElement)(bt, re()({
            keyword: a,
            wordsToHighlight: s,
            mode: r,
            date: o,
            activeField: this.mapFieldToPreview(f),
            hoveredField: this.mapFieldToPreview(m),
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
            onMouseUp: this.onMouseUp,
            locale: i,
            faviconSrc: c,
            mobileImageSrc: u,
            shoppingData: d
          }, b)), l && Object(E.createElement)(Jt, {
            onClick: g ? this.close : this.open,
            "aria-expanded": g,
            ref: this.setEditButtonRef
          }, Object(E.createElement)(L.SvgIcon, {icon: "edit"}), Object(P.__)("Edit snippet", "wordpress-seo")), this.renderEditor()))
        }
      }]), o
    }(O.a.Component);
    nn.propTypes = {
      replacementVariables: xt.replacementVariablesShape,
      recommendedReplacementVariables: xt.recommendedReplacementVariablesShape,
      data: _.a.shape({
        title: _.a.string.isRequired,
        slug: _.a.string.isRequired,
        description: _.a.string.isRequired
      }).isRequired,
      descriptionEditorFieldPlaceholder: _.a.string,
      baseUrl: _.a.string.isRequired,
      mode: _.a.oneOf(Ge),
      date: _.a.string,
      onChange: _.a.func.isRequired,
      onChangeAnalysisData: _.a.func,
      titleLengthProgress: St,
      descriptionLengthProgress: St,
      mapEditorDataToPreview: _.a.func,
      keyword: _.a.string,
      wordsToHighlight: _.a.array,
      locale: _.a.string,
      hasPaperStyle: _.a.bool,
      showCloseButton: _.a.bool,
      faviconSrc: _.a.string,
      mobileImageSrc: _.a.string,
      idSuffix: _.a.string,
      shoppingData: _.a.object,
      isCornerstone: _.a.bool,
      isTaxonomy: _.a.bool
    }, nn.defaultProps = {
      mode: "mobile",
      date: "",
      wordsToHighlight: [],
      replacementVariables: [],
      recommendedReplacementVariables: [],
      titleLengthProgress: {max: 600, actual: 0, score: 0},
      descriptionLengthProgress: {max: 156, actual: 0, score: 0},
      mapEditorDataToPreview: null,
      keyword: "",
      locale: "en",
      descriptionEditorFieldPlaceholder: "",
      onChangeAnalysisData: jt.a,
      hasPaperStyle: !0,
      showCloseButton: !0,
      faviconSrc: "",
      mobileImageSrc: "",
      idSuffix: "",
      shoppingData: {},
      isCornerstone: !1,
      isTaxonomy: !1
    };
    var rn = nn
  }, 6: function (e, t) {
    e.exports = function (e, t) {
      return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }, e.exports.default = e.exports, e.exports.__esModule = !0
  }, 68: function (e, t) {
    e.exports = window.lodash.uniqueId
  }, 7: function (e, t) {
    e.exports = window.yoast.styleGuide
  }, 70: function (e, t, n) {
    "use strict";
    var r = n(130), o = n(131);

    function i() {
      this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }

    t.parse = y, t.resolve = function (e, t) {
      return y(e, !1, !0).resolve(t)
    }, t.resolveObject = function (e, t) {
      return e ? y(e, !1, !0).resolveObject(t) : t
    }, t.format = function (e) {
      return o.isString(e) && (e = y(e)), e instanceof i ? e.format() : i.prototype.format.call(e)
    }, t.Url = i;
    var a = /^([a-z0-9.+-]+:)/i, s = /:[0-9]*$/, l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
      c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]), u = ["'"].concat(c),
      p = ["%", "/", "?", ";", "#"].concat(u), d = ["/", "?", "#"], h = /^[+a-z0-9A-Z_-]{0,63}$/,
      f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, m = {javascript: !0, "javascript:": !0},
      g = {javascript: !0, "javascript:": !0}, v = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
      }, b = n(132);

    function y(e, t, n) {
      if (e && o.isObject(e) && e instanceof i) return e;
      var r = new i;
      return r.parse(e, t, n), r
    }

    i.prototype.parse = function (e, t, n) {
      if (!o.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
      var i = e.indexOf("?"), s = -1 !== i && i < e.indexOf("#") ? "?" : "#", c = e.split(s);
      c[0] = c[0].replace(/\\/g, "/");
      var y = e = c.join(s);
      if (y = y.trim(), !n && 1 === e.split("#").length) {
        var x = l.exec(y);
        if (x) return this.path = y, this.href = y, this.pathname = x[1], x[2] ? (this.search = x[2], this.query = t ? b.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
      }
      var E = a.exec(y);
      if (E) {
        var w = (E = E[0]).toLowerCase();
        this.protocol = w, y = y.substr(E.length)
      }
      if (n || E || y.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var O = "//" === y.substr(0, 2);
        !O || E && g[E] || (y = y.substr(2), this.slashes = !0)
      }
      if (!g[E] && (O || E && !v[E])) {
        for (var j, S, C = -1, _ = 0; _ < d.length; _++) -1 !== (R = y.indexOf(d[_])) && (-1 === C || R < C) && (C = R);
        for (-1 !== (S = -1 === C ? y.lastIndexOf("@") : y.lastIndexOf("@", C)) && (j = y.slice(0, S), y = y.slice(S + 1), this.auth = decodeURIComponent(j)), C = -1, _ = 0; _ < p.length; _++) {
          var R;
          -1 !== (R = y.indexOf(p[_])) && (-1 === C || R < C) && (C = R)
        }
        -1 === C && (C = y.length), this.host = y.slice(0, C), y = y.slice(C), this.parseHost(), this.hostname = this.hostname || "";
        var k = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
        if (!k) for (var P = this.hostname.split(/\./), M = (_ = 0, P.length); _ < M; _++) {
          var A = P[_];
          if (A && !A.match(h)) {
            for (var T = "", F = 0, D = A.length; F < D; F++) A.charCodeAt(F) > 127 ? T += "x" : T += A[F];
            if (!T.match(h)) {
              var I = P.slice(0, _), N = P.slice(_ + 1), U = A.match(f);
              U && (I.push(U[1]), N.unshift(U[2])), N.length && (y = "/" + N.join(".") + y), this.hostname = I.join(".");
              break
            }
          }
        }
        this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), k || (this.hostname = r.toASCII(this.hostname));
        var L = this.port ? ":" + this.port : "", V = this.hostname || "";
        this.host = V + L, this.href += this.host, k && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== y[0] && (y = "/" + y))
      }
      if (!m[w]) for (_ = 0, M = u.length; _ < M; _++) {
        var B = u[_];
        if (-1 !== y.indexOf(B)) {
          var q = encodeURIComponent(B);
          q === B && (q = escape(B)), y = y.split(B).join(q)
        }
      }
      var z = y.indexOf("#");
      -1 !== z && (this.hash = y.substr(z), y = y.slice(0, z));
      var W = y.indexOf("?");
      if (-1 !== W ? (this.search = y.substr(W), this.query = y.substr(W + 1), t && (this.query = b.parse(this.query)), y = y.slice(0, W)) : t && (this.search = "", this.query = {}), y && (this.pathname = y), v[w] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
        L = this.pathname || "";
        var H = this.search || "";
        this.path = L + H
      }
      return this.href = this.format(), this
    }, i.prototype.format = function () {
      var e = this.auth || "";
      e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
      var t = this.protocol || "", n = this.pathname || "", r = this.hash || "", i = !1, a = "";
      this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query).length && (a = b.stringify(this.query));
      var s = this.search || a && "?" + a || "";
      return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || v[t]) && !1 !== i ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), s && "?" !== s.charAt(0) && (s = "?" + s), t + i + (n = n.replace(/[?#]/g, (function (e) {
        return encodeURIComponent(e)
      }))) + (s = s.replace("#", "%23")) + r
    }, i.prototype.resolve = function (e) {
      return this.resolveObject(y(e, !1, !0)).format()
    }, i.prototype.resolveObject = function (e) {
      if (o.isString(e)) {
        var t = new i;
        t.parse(e, !1, !0), e = t
      }
      for (var n = new i, r = Object.keys(this), a = 0; a < r.length; a++) {
        var s = r[a];
        n[s] = this[s]
      }
      if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
      if (e.slashes && !e.protocol) {
        for (var l = Object.keys(e), c = 0; c < l.length; c++) {
          var u = l[c];
          "protocol" !== u && (n[u] = e[u])
        }
        return v[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
      }
      if (e.protocol && e.protocol !== n.protocol) {
        if (!v[e.protocol]) {
          for (var p = Object.keys(e), d = 0; d < p.length; d++) {
            var h = p[d];
            n[h] = e[h]
          }
          return n.href = n.format(), n
        }
        if (n.protocol = e.protocol, e.host || g[e.protocol]) n.pathname = e.pathname; else {
          for (var f = (e.pathname || "").split("/"); f.length && !(e.host = f.shift());) ;
          e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), n.pathname = f.join("/")
        }
        if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
          var m = n.pathname || "", b = n.search || "";
          n.path = m + b
        }
        return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
      }
      var y = n.pathname && "/" === n.pathname.charAt(0), x = e.host || e.pathname && "/" === e.pathname.charAt(0),
        E = x || y || n.host && e.pathname, w = E, O = n.pathname && n.pathname.split("/") || [],
        j = (f = e.pathname && e.pathname.split("/") || [], n.protocol && !v[n.protocol]);
      if (j && (n.hostname = "", n.port = null, n.host && ("" === O[0] ? O[0] = n.host : O.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === f[0] ? f[0] = e.host : f.unshift(e.host)), e.host = null), E = E && ("" === f[0] || "" === O[0])), x) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, O = f; else if (f.length) O || (O = []), O.pop(), O = O.concat(f), n.search = e.search, n.query = e.query; else if (!o.isNullOrUndefined(e.search)) return j && (n.hostname = n.host = O.shift(), (k = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = k.shift(), n.host = n.hostname = k.shift())), n.search = e.search, n.query = e.query, o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
      if (!O.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
      for (var S = O.slice(-1)[0], C = (n.host || e.host || O.length > 1) && ("." === S || ".." === S) || "" === S, _ = 0, R = O.length; R >= 0; R--) "." === (S = O[R]) ? O.splice(R, 1) : ".." === S ? (O.splice(R, 1), _++) : _ && (O.splice(R, 1), _--);
      if (!E && !w) for (; _--; _) O.unshift("..");
      !E || "" === O[0] || O[0] && "/" === O[0].charAt(0) || O.unshift(""), C && "/" !== O.join("/").substr(-1) && O.push("");
      var k, P = "" === O[0] || O[0] && "/" === O[0].charAt(0);
      return j && (n.hostname = n.host = P ? "" : O.length ? O.shift() : "", (k = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = k.shift(), n.host = n.hostname = k.shift())), (E = E || n.host && O.length) && !P && O.unshift(""), O.length ? n.pathname = O.join("/") : (n.pathname = null, n.path = null), o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
    }, i.prototype.parseHost = function () {
      var e = this.host, t = s.exec(e);
      t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
    }
  }, 71: function (e, t) {
    e.exports = window.ReactDOM
  }, 76: function (e, t, n) {
    "use strict";
    var r = n(4), o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, i = n(50),
      a = n(77), s = n(78), l = "function" == typeof Symbol && Symbol.iterator;

    function c(e, t) {
      return e && "object" == typeof e && null != e.key ? (n = e.key, r = {
        "=": "=0",
        ":": "=2"
      }, "$" + ("" + n).replace(/[=:]/g, (function (e) {
        return r[e]
      }))) : t.toString(36);
      var n, r
    }

    var u = /\/+/g;

    function p(e) {
      return ("" + e).replace(u, "$&/")
    }

    var d, h, f = m, m = function (e) {
      if (this.instancePool.length) {
        var t = this.instancePool.pop();
        return this.call(t, e), t
      }
      return new this(e)
    };

    function g(e, t, n, r) {
      this.result = e, this.keyPrefix = t, this.func = n, this.context = r, this.count = 0
    }

    function v(e, t, n) {
      var o, a, s = e.result, l = e.keyPrefix, c = e.func, u = e.context, d = c.call(u, t, e.count++);
      Array.isArray(d) ? b(d, s, n, i.thatReturnsArgument) : null != d && (r.isValidElement(d) && (o = d, a = l + (!d.key || t && t.key === d.key ? "" : p(d.key) + "/") + n, d = r.cloneElement(o, {key: a}, void 0 !== o.props ? o.props.children : void 0)), s.push(d))
    }

    function b(e, t, n, r, i) {
      var s = "";
      null != n && (s = p(n) + "/");
      var u = g.getPooled(t, s, r, i);
      !function (e, t, n) {
        null == e || function e(t, n, r, i) {
          var s, u = typeof t;
          if ("undefined" !== u && "boolean" !== u || (t = null), null === t || "string" === u || "number" === u || "object" === u && t.$$typeof === o) return r(i, t, "" === n ? "." + c(t, 0) : n), 1;
          var p = 0, d = "" === n ? "." : n + ":";
          if (Array.isArray(t)) for (var h = 0; h < t.length; h++) p += e(s = t[h], d + c(s, h), r, i); else {
            var f = function (e) {
              var t = e && (l && e[l] || e["@@iterator"]);
              if ("function" == typeof t) return t
            }(t);
            if (f) for (var m, g = f.call(t), v = 0; !(m = g.next()).done;) p += e(s = m.value, d + c(s, v++), r, i); else if ("object" === u) {
              var b = "" + t;
              a(!1, "Objects are not valid as a React child (found: %s).%s", "[object Object]" === b ? "object with keys {" + Object.keys(t).join(", ") + "}" : b, "")
            }
          }
          return p
        }(e, "", t, n)
      }(e, v, u), g.release(u)
    }

    g.prototype.destructor = function () {
      this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0
    }, d = function (e, t, n, r) {
      if (this.instancePool.length) {
        var o = this.instancePool.pop();
        return this.call(o, e, t, n, r), o
      }
      return new this(e, t, n, r)
    }, (h = g).instancePool = [], h.getPooled = d || f, h.poolSize || (h.poolSize = 10), h.release = function (e) {
      a(e instanceof this, "Trying to release an instance into a pool of a different type."), e.destructor(), this.instancePool.length < this.poolSize && this.instancePool.push(e)
    }, e.exports = function (e) {
      if ("object" != typeof e || !e || Array.isArray(e)) return s(!1, "React.addons.createFragment only accepts a single object. Got: %s", e), e;
      if (r.isValidElement(e)) return s(!1, "React.addons.createFragment does not accept a ReactElement without a wrapper object."), e;
      a(1 !== e.nodeType, "React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");
      var t = [];
      for (var n in e) b(e[n], t, n, i.thatReturnsArgument);
      return t
    }
  }, 77: function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r, o, i, a, s) {
      if (!e) {
        var l;
        if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
          var c = [n, r, o, i, a, s], u = 0;
          (l = new Error(t.replace(/%s/g, (function () {
            return c[u++]
          })))).name = "Invariant Violation"
        }
        throw l.framesToPop = 1, l
      }
    }
  }, 78: function (e, t, n) {
    "use strict";
    var r = n(50);
    e.exports = r
  }, 79: function (e, t, n) {
    "use strict";

    function r(e) {
      return e.match(/^\{\{\//) ? {
        type: "componentClose",
        value: e.replace(/\W/g, "")
      } : e.match(/\/\}\}$/) ? {
        type: "componentSelfClosing",
        value: e.replace(/\W/g, "")
      } : e.match(/^\{\{/) ? {type: "componentOpen", value: e.replace(/\W/g, "")} : {type: "string", value: e}
    }

    e.exports = function (e) {
      return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(r)
    }
  }, 8: function (e, t) {
    function n(t) {
      return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, e.exports.default = e.exports, e.exports.__esModule = !0, n(t)
    }

    e.exports = n, e.exports.default = e.exports, e.exports.__esModule = !0
  }, 9: function (e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }, e.exports.default = e.exports, e.exports.__esModule = !0
  }, 93: function (e, t) {
    e.exports = window.lodash.noop
  }, 95: function (e, t) {
    e.exports = window.lodash.debounce
  }, 99: function (e, t, n) {
    "use strict";

    function r() {
      var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
      null != e && this.setState(e)
    }

    function o(e) {
      this.setState(function (t) {
        var n = this.constructor.getDerivedStateFromProps(e, t);
        return null != n ? n : null
      }.bind(this))
    }

    function i(e, t) {
      try {
        var n = this.props, r = this.state;
        this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r)
      } finally {
        this.props = n, this.state = r
      }
    }

    function a(e) {
      var t = e.prototype;
      if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components");
      if ("function" != typeof e.getDerivedStateFromProps && "function" != typeof t.getSnapshotBeforeUpdate) return e;
      var n = null, a = null, s = null;
      if ("function" == typeof t.componentWillMount ? n = "componentWillMount" : "function" == typeof t.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"), "function" == typeof t.componentWillReceiveProps ? a = "componentWillReceiveProps" : "function" == typeof t.UNSAFE_componentWillReceiveProps && (a = "UNSAFE_componentWillReceiveProps"), "function" == typeof t.componentWillUpdate ? s = "componentWillUpdate" : "function" == typeof t.UNSAFE_componentWillUpdate && (s = "UNSAFE_componentWillUpdate"), null !== n || null !== a || null !== s) {
        var l = e.displayName || e.name,
          c = "function" == typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
        throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + l + " uses " + c + " but also contains the following legacy lifecycles:" + (null !== n ? "\n  " + n : "") + (null !== a ? "\n  " + a : "") + (null !== s ? "\n  " + s : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")
      }
      if ("function" == typeof e.getDerivedStateFromProps && (t.componentWillMount = r, t.componentWillReceiveProps = o), "function" == typeof t.getSnapshotBeforeUpdate) {
        if ("function" != typeof t.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
        t.componentWillUpdate = i;
        var u = t.componentDidUpdate;
        t.componentDidUpdate = function (e, t, n) {
          var r = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
          u.call(this, e, t, r)
        }
      }
      return e
    }

    n.r(t), n.d(t, "polyfill", (function () {
      return a
    })), r.__suppressDeprecationWarning = !0, o.__suppressDeprecationWarning = !0, i.__suppressDeprecationWarning = !0
  }
});
