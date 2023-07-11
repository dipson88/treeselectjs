import xe, { useRef as Z, useEffect as A } from "react";
import fr from "treeselectjs";
var V = {}, dr = {
  get exports() {
    return V;
  },
  set exports(o) {
    V = o;
  }
}, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function vr() {
  if (Oe)
    return I;
  Oe = 1;
  var o = xe, E = Symbol.for("react.element"), w = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, v = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(C, h, P) {
    var b, R = {}, O = null, $ = null;
    P !== void 0 && (O = "" + P), h.key !== void 0 && (O = "" + h.key), h.ref !== void 0 && ($ = h.ref);
    for (b in h)
      s.call(h, b) && !d.hasOwnProperty(b) && (R[b] = h[b]);
    if (C && C.defaultProps)
      for (b in h = C.defaultProps, h)
        R[b] === void 0 && (R[b] = h[b]);
    return { $$typeof: E, type: C, key: O, ref: $, props: R, _owner: v.current };
  }
  return I.Fragment = w, I.jsx = T, I.jsxs = T, I;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function hr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var o = xe, E = Symbol.for("react.element"), w = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), C = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), ee = Symbol.iterator, je = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[je];
      return typeof r == "function" ? r : null;
    }
    var x = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var l = t.map(function(i) {
          return String(i);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Fe = !1, Ae = !1, Ie = !1, We = !1, Ve = !1, re;
    re = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === d || Ve || e === v || e === P || e === b || We || e === $ || Fe || Ae || Ie || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === R || e.$$typeof === T || e.$$typeof === C || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case w:
          return "Portal";
        case d:
          return "Profiler";
        case v:
          return "StrictMode";
        case P:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var r = e;
            return te(r) + ".Consumer";
          case T:
            var t = e;
            return te(t._context) + ".Provider";
          case h:
            return Ne(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : y(e.type) || "Memo";
          case O: {
            var u = e, l = u._payload, i = u._init;
            try {
              return y(i(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, D = 0, ne, ae, ie, oe, ue, se, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ye() {
      {
        if (D === 0) {
          ne = console.log, ae = console.info, ie = console.warn, oe = console.error, ue = console.group, se = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Le() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ne
            }),
            info: S({}, e, {
              value: ae
            }),
            warn: S({}, e, {
              value: ie
            }),
            error: S({}, e, {
              value: oe
            }),
            group: S({}, e, {
              value: ue
            }),
            groupCollapsed: S({}, e, {
              value: se
            }),
            groupEnd: S({}, e, {
              value: le
            })
          });
        }
        D < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = x.ReactCurrentDispatcher, B;
    function N(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var q = !1, Y;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Me();
    }
    function fe(e, r) {
      if (!e || q)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = J.current, J.current = null, Ye();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (_) {
              n = _;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), g = n.stack.split(`
`), c = a.length - 1, f = g.length - 1; c >= 1 && f >= 0 && a[c] !== g[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== g[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== g[f]) {
                    var p = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, p), p;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        q = !1, J.current = l, Le(), Error.prepareStackTrace = u;
      }
      var k = e ? e.displayName || e.name : "", Te = k ? N(k) : "";
      return typeof e == "function" && Y.set(e, Te), Te;
    }
    function Ue(e, r, t) {
      return fe(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Je(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case P:
          return N("Suspense");
        case b:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return Ue(e.render);
          case R:
            return L(e.type, r, t);
          case O: {
            var n = e, u = n._payload, l = n._init;
            try {
              return L(l(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, de = {}, ve = x.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, u) {
      {
        var l = Function.call.bind(M);
        for (var i in e)
          if (l(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (U(u), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), U(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, U(u), m("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var qe = Array.isArray;
    function G(e) {
      return qe(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function me(e) {
      if (ze(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), he(e);
    }
    var F = x.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, be, z;
    z = {};
    function Ke(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = y(F.current.type);
        z[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(F.current.type), e.ref), z[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          ge || (ge = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          be || (be = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, u, l, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, u) {
      {
        var l, i = {}, a = null, g = null;
        t !== void 0 && (me(t), a = "" + t), Xe(r) && (me(r.key), a = "" + r.key), Ke(r) && (g = r.ref, Ze(r, u));
        for (l in r)
          M.call(r, l) && !He.hasOwnProperty(l) && (i[l] = r[l]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (l in c)
            i[l] === void 0 && (i[l] = c[l]);
        }
        if (a || g) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(i, f), g && er(i, f);
        }
        return rr(e, a, g, u, n, F.current, i);
      }
    }
    var H = x.ReactCurrentOwner, pe = x.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function Ee() {
      {
        if (H.current) {
          var e = y(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Re = {};
    function ar(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + y(e._owner.type) + "."), j(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && ye(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = ke(e);
          if (typeof u == "function" && u !== e.entries)
            for (var l = u.call(e), i; !(i = l.next()).done; )
              X(i.value) && ye(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = y(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var u = y(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            j(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function Ce(e, r, t, n, u, l) {
      {
        var i = $e(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = nr(u);
          g ? a += g : a += Ee();
          var c;
          e === null ? c = "null" : G(e) ? c = "array" : e !== void 0 && e.$$typeof === E ? (c = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = tr(e, r, t, u, l);
        if (f == null)
          return f;
        if (i) {
          var p = r.children;
          if (p !== void 0)
            if (n)
              if (G(p)) {
                for (var k = 0; k < p.length; k++)
                  _e(p[k], e);
                Object.freeze && Object.freeze(p);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(p, e);
        }
        return e === s ? or(f) : ir(f), f;
      }
    }
    function ur(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var lr = sr, cr = ur;
    W.Fragment = s, W.jsx = lr, W.jsxs = cr;
  }()), W;
}
(function(o) {
  process.env.NODE_ENV === "production" ? o.exports = vr() : o.exports = hr();
})(dr);
const mr = V.Fragment, we = V.jsx, gr = V.jsxs, br = ["value", "id", "options", "iconElements", "children"], Pe = {
  onInput: "inputCallback",
  onOpen: "openCallback",
  onClose: "closeCallback",
  onNameChange: "nameChangeCallback",
  onSearch: "searchCallback"
}, Q = (o, E) => JSON.stringify(o) !== JSON.stringify(E), Rr = (o) => {
  const E = Z(null), w = Z(null), s = Z(null);
  if (s.current) {
    let v = !1;
    Object.keys(o).forEach((d) => {
      const T = Object.keys(Pe).includes(d) ? (
        // @ts-ignore
        s.current[Pe[d]] === o[d]
      ) : (
        // @ts-ignore
        s.current[d] === o[d]
      );
      !br.includes(d) && !T && (s.current[d] = o[d], v = !0);
    }), v && s.current.mount();
  }
  return A(() => {
    s.current && Q(s.current.value, o.value) && s.current.updateValue(o.value);
  }, [o.value]), A(() => {
    var d;
    (((d = s.current) == null ? void 0 : d.id) || o.id) && s.current && (s.current.id = o.id ?? "", s.current.mount());
  }, [o.id]), A(() => {
    s.current && Q(s.current.options, o.options) && (s.current.options = o.options ?? [], s.current.mount());
  }, [o.options]), A(() => {
    if (s.current) {
      const v = { ...s.current.iconElements, ...o.iconElements };
      Q(s.current.iconElements, v) && (s.current.iconElements = v, s.current.mount());
    }
  }, [o.iconElements]), A(() => (s.current = new fr({
    parentHtmlContainer: E.current,
    listSlotHtmlComponent: w.current,
    ...o,
    inputCallback: o.onInput,
    openCallback: o.onOpen,
    closeCallback: o.onClose,
    nameChangeCallback: o.onNameChange,
    searchCallback: o.onSearch
  }), () => {
    var v;
    (v = s.current) == null || v.destroy();
  }), []), /* @__PURE__ */ gr(mr, { children: [
    /* @__PURE__ */ we("div", { ref: E }),
    /* @__PURE__ */ we(
      "div",
      {
        ref: w,
        className: "treeselect-after-list-slot",
        children: o.children
      }
    )
  ] });
};
export {
  Rr as default
};
