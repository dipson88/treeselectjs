import xe, { useRef as Z, useEffect as A } from "react";
import fr from "treeselectjs";
var V = {}, dr = {
  get exports() {
    return V;
  },
  set exports(i) {
    V = i;
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
  var i = xe, E = Symbol.for("react.element"), w = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, v = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(C, h, P) {
    var g, R = {}, O = null, $ = null;
    P !== void 0 && (O = "" + P), h.key !== void 0 && (O = "" + h.key), h.ref !== void 0 && ($ = h.ref);
    for (g in h)
      l.call(h, g) && !d.hasOwnProperty(g) && (R[g] = h[g]);
    if (C && C.defaultProps)
      for (g in h = C.defaultProps, h)
        R[g] === void 0 && (R[g] = h[g]);
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
    var i = xe, E = Symbol.for("react.element"), w = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), C = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), ee = Symbol.iterator, je = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[je];
      return typeof r == "function" ? r : null;
    }
    var x = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Fe = !1, Ae = !1, Ie = !1, We = !1, Ve = !1, re;
    re = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === d || Ve || e === v || e === P || e === g || We || e === $ || Fe || Ae || Ie || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === R || e.$$typeof === T || e.$$typeof === C || e.$$typeof === h || // This needs to include all possible module reference object
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
        case l:
          return "Fragment";
        case w:
          return "Portal";
        case d:
          return "Profiler";
        case v:
          return "StrictMode";
        case P:
          return "Suspense";
        case g:
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
            var u = e, s = u._payload, o = u._init;
            try {
              return y(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, D = 0, ne, ae, ie, oe, ue, le, se;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ye() {
      {
        if (D === 0) {
          ne = console.log, ae = console.info, ie = console.warn, oe = console.error, ue = console.group, le = console.groupCollapsed, se = console.groupEnd;
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
              value: le
            }),
            groupEnd: S({}, e, {
              value: se
            })
          });
        }
        D < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = x.ReactCurrentDispatcher, J;
    function N(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var B = !1, Y;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Me();
    }
    function fe(e, r) {
      if (!e || B)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = G.current, G.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              n = _;
            }
            e.call(o.prototype);
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
`), p = n.stack.split(`
`), c = a.length - 1, f = p.length - 1; c >= 1 && f >= 0 && a[c] !== p[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== p[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== p[f]) {
                    var b = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, b), b;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        B = !1, G.current = s, Le(), Error.prepareStackTrace = u;
      }
      var k = e ? e.displayName || e.name : "", Te = k ? N(k) : "";
      return typeof e == "function" && Y.set(e, Te), Te;
    }
    function Ue(e, r, t) {
      return fe(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ge(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case P:
          return N("Suspense");
        case g:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return Ue(e.render);
          case R:
            return L(e.type, r, t);
          case O: {
            var n = e, u = n._payload, s = n._init;
            try {
              return L(s(u), r, t);
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
    function Je(e, r, t, n, u) {
      {
        var s = Function.call.bind(M);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (U(u), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, U(u), m("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Be = Array.isArray;
    function q(e) {
      return Be(e);
    }
    function qe(e) {
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
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), he(e);
    }
    var F = x.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, ge, z;
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
          pe || (pe = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          ge || (ge = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, u, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
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
        var s, o = {}, a = null, p = null;
        t !== void 0 && (me(t), a = "" + t), Xe(r) && (me(r.key), a = "" + r.key), Ke(r) && (p = r.ref, Ze(r, u));
        for (s in r)
          M.call(r, s) && !He.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (s in c)
            o[s] === void 0 && (o[s] = c[s]);
        }
        if (a || p) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, f), p && er(o, f);
        }
        return rr(e, a, p, u, n, F.current, o);
      }
    }
    var H = x.ReactCurrentOwner, be = x.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
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
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && ye(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = ke(e);
          if (typeof u == "function" && u !== e.entries)
            for (var s = u.call(e), o; !(o = s.next()).done; )
              X(o.value) && ye(o.value, r);
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
          Je(t, e.props, "prop", n, e);
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
    function Ce(e, r, t, n, u, s) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = nr(u);
          p ? a += p : a += Ee();
          var c;
          e === null ? c = "null" : q(e) ? c = "array" : e !== void 0 && e.$$typeof === E ? (c = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = tr(e, r, t, u, s);
        if (f == null)
          return f;
        if (o) {
          var b = r.children;
          if (b !== void 0)
            if (n)
              if (q(b)) {
                for (var k = 0; k < b.length; k++)
                  _e(b[k], e);
                Object.freeze && Object.freeze(b);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(b, e);
        }
        return e === l ? or(f) : ir(f), f;
      }
    }
    function ur(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var sr = lr, cr = ur;
    W.Fragment = l, W.jsx = sr, W.jsxs = cr;
  }()), W;
}
(function(i) {
  process.env.NODE_ENV === "production" ? i.exports = vr() : i.exports = hr();
})(dr);
const mr = V.Fragment, we = V.jsx, pr = V.jsxs, gr = ["value", "id", "options", "iconElements", "children"], Pe = {
  onInput: "inputCallback",
  onOpen: "openCallback",
  onClose: "closeCallback",
  onNameChange: "nameChangeCallback",
  onSearch: "searchCallback",
  onOpenCloseGroup: "openCloseGroupCallback"
}, Q = (i, E) => JSON.stringify(i) !== JSON.stringify(E), Rr = (i) => {
  const E = Z(null), w = Z(null), l = Z(null);
  if (l.current) {
    let v = !1;
    Object.keys(i).forEach((d) => {
      const T = Object.keys(Pe).includes(d) ? (
        // @ts-ignore
        l.current[Pe[d]] === i[d]
      ) : (
        // @ts-ignore
        l.current[d] === i[d]
      );
      !gr.includes(d) && !T && (l.current[d] = i[d], v = !0);
    }), v && l.current.mount();
  }
  return A(() => {
    l.current && Q(l.current.value, i.value) && l.current.updateValue(i.value);
  }, [i.value]), A(() => {
    var d;
    (((d = l.current) == null ? void 0 : d.id) || i.id) && l.current && (l.current.id = i.id ?? "", l.current.mount());
  }, [i.id]), A(() => {
    l.current && Q(l.current.options, i.options) && (l.current.options = i.options ?? [], l.current.mount());
  }, [i.options]), A(() => {
    if (l.current) {
      const v = { ...l.current.iconElements, ...i.iconElements };
      Q(l.current.iconElements, v) && (l.current.iconElements = v, l.current.mount());
    }
  }, [i.iconElements]), A(() => (l.current = new fr({
    parentHtmlContainer: E.current,
    listSlotHtmlComponent: w.current,
    ...i,
    inputCallback: i.onInput,
    openCallback: i.onOpen,
    closeCallback: i.onClose,
    nameChangeCallback: i.onNameChange,
    searchCallback: i.onSearch,
    openCloseGroupCallback: i.onOpenCloseGroup
  }), () => {
    var v;
    (v = l.current) == null || v.destroy();
  }), []), /* @__PURE__ */ pr(mr, { children: [
    /* @__PURE__ */ we("div", { ref: E }),
    /* @__PURE__ */ we(
      "div",
      {
        ref: w,
        className: "treeselect-after-list-slot",
        children: i.children
      }
    )
  ] });
};
export {
  Rr as default
};
