import Pe, { useRef as X, useEffect as Z } from "react";
import cr from "treeselectjs";
var W = {}, fr = {
  get exports() {
    return W;
  },
  set exports(l) {
    W = l;
  }
}, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function dr() {
  if (Te)
    return A;
  Te = 1;
  var l = Pe, _ = Symbol.for("react.element"), w = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, b = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(C, v, P) {
    var g, E = {}, O = null, $ = null;
    P !== void 0 && (O = "" + P), v.key !== void 0 && (O = "" + v.key), v.ref !== void 0 && ($ = v.ref);
    for (g in v)
      s.call(v, g) && !d.hasOwnProperty(g) && (E[g] = v[g]);
    if (C && C.defaultProps)
      for (g in v = C.defaultProps, v)
        E[g] === void 0 && (E[g] = v[g]);
    return { $$typeof: _, type: C, key: O, ref: $, props: E, _owner: b.current };
  }
  return A.Fragment = w, A.jsx = T, A.jsxs = T, A;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function vr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var l = Pe, _ = Symbol.for("react.element"), w = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), C = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), Q = Symbol.iterator, xe = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[xe];
      return typeof r == "function" ? r : null;
    }
    var x = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var De = !1, Fe = !1, Ae = !1, Ie = !1, We = !1, ee;
    ee = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === d || We || e === b || e === P || e === g || Ie || e === $ || De || Fe || Ae || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === E || e.$$typeof === T || e.$$typeof === C || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case b:
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
            return re(r) + ".Consumer";
          case T:
            var t = e;
            return re(t._context) + ".Provider";
          case v:
            return Ne(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case O: {
            var o = e, u = o._payload, i = o._init;
            try {
              return R(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, D = 0, te, ne, ae, ie, oe, ue, le;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function Ye() {
      {
        if (D === 0) {
          te = console.log, ne = console.info, ae = console.warn, ie = console.error, oe = console.group, ue = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
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
    function Ve() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: te
            }),
            info: S({}, e, {
              value: ne
            }),
            warn: S({}, e, {
              value: ae
            }),
            error: S({}, e, {
              value: ie
            }),
            group: S({}, e, {
              value: oe
            }),
            groupCollapsed: S({}, e, {
              value: ue
            }),
            groupEnd: S({}, e, {
              value: le
            })
          });
        }
        D < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = x.ReactCurrentDispatcher, J;
    function N(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var B = !1, Y;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Le();
    }
    function ce(e, r) {
      if (!e || B)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Ye();
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
            } catch (y) {
              n = y;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (y) {
              n = y;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (y) {
            n = y;
          }
          e();
        }
      } catch (y) {
        if (y && n && typeof y.stack == "string") {
          for (var a = y.stack.split(`
`), p = n.stack.split(`
`), c = a.length - 1, f = p.length - 1; c >= 1 && f >= 0 && a[c] !== p[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== p[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== p[f]) {
                    var m = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, m), m;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        B = !1, U.current = u, Ve(), Error.prepareStackTrace = o;
      }
      var k = e ? e.displayName || e.name : "", Ce = k ? N(k) : "";
      return typeof e == "function" && Y.set(e, Ce), Ce;
    }
    function Me(e, r, t) {
      return ce(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Ue(e));
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
          case v:
            return Me(e.render);
          case E:
            return V(e.type, r, t);
          case O: {
            var n = e, o = n._payload, u = n._init;
            try {
              return V(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, fe = {}, de = x.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, o) {
      {
        var u = Function.call.bind(L);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (M(o), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), M(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, M(o), h("Failed %s type: %s", t, a.message), M(null));
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
    function Ge(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function he(e) {
      if (Ge(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), ve(e);
    }
    var F = x.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, ge, G;
    G = {};
    function He(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = R(F.current.type);
        G[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(F.current.type), e.ref), G[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          pe || (pe = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          ge || (ge = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: _,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
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
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, o) {
      {
        var u, i = {}, a = null, p = null;
        t !== void 0 && (he(t), a = "" + t), Ke(r) && (he(r.key), a = "" + r.key), He(r) && (p = r.ref, Xe(r, o));
        for (u in r)
          L.call(r, u) && !ze.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            i[u] === void 0 && (i[u] = c[u]);
        }
        if (a || p) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(i, f), p && Qe(i, f);
        }
        return er(e, a, p, o, n, F.current, i);
      }
    }
    var z = x.ReactCurrentOwner, be = x.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === _;
    }
    function me() {
      {
        if (z.current) {
          var e = R(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function nr(e) {
      {
        var r = me();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + R(e._owner.type) + "."), j(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function ye(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && Re(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = je(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              K(i.value) && Re(i.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var o = R(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            j(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function _e(e, r, t, n, o, u) {
      {
        var i = $e(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = tr(o);
          p ? a += p : a += me();
          var c;
          e === null ? c = "null" : q(e) ? c = "array" : e !== void 0 && e.$$typeof === _ ? (c = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = rr(e, r, t, o, u);
        if (f == null)
          return f;
        if (i) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (q(m)) {
                for (var k = 0; k < m.length; k++)
                  ye(m[k], e);
                Object.freeze && Object.freeze(m);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ye(m, e);
        }
        return e === s ? ir(f) : ar(f), f;
      }
    }
    function or(e, r, t) {
      return _e(e, r, t, !0);
    }
    function ur(e, r, t) {
      return _e(e, r, t, !1);
    }
    var lr = ur, sr = or;
    I.Fragment = s, I.jsx = lr, I.jsxs = sr;
  }()), I;
}
(function(l) {
  process.env.NODE_ENV === "production" ? l.exports = dr() : l.exports = vr();
})(fr);
const hr = W.Fragment, Se = W.jsx, pr = W.jsxs, gr = ["value", "id", "children"], we = {
  onInput: "inputCallback",
  onOpen: "openCallback",
  onClose: "closeCallback",
  onNameChange: "nameChangeCallback",
  onSearch: "searchCallback"
}, Er = (l) => {
  const _ = X(null), w = X(null), s = X(null);
  if (s.current) {
    let b = !1;
    Object.keys(l).forEach((d) => {
      const T = Object.keys(we).includes(d) ? s.current[we[d]] === l[d] : s.current[d] === l[d];
      !gr.includes(d) && !T && (s.current[d] = l[d], b = !0);
    }), b && s.current.mount();
  }
  return Z(() => {
    s.current && JSON.stringify(s.current.value) !== JSON.stringify(l.value) && s.current.updateValue(l.value);
  }, [l.value]), Z(() => {
    var d;
    (((d = s.current) == null ? void 0 : d.id) || l.id) && s.current && (s.current.id = l.id ?? "", s.current.mount());
  }, [l.id]), Z(() => (s.current = new cr({
    parentHtmlContainer: _.current,
    listSlotHtmlComponent: w.current,
    ...l,
    inputCallback: l.onInput,
    openCallback: l.onOpen,
    closeCallback: l.onClose,
    nameChangeCallback: l.onNameChange,
    searchCallback: l.onSearch
  }), () => {
    var b;
    (b = s.current) == null || b.destroy();
  }), []), /* @__PURE__ */ pr(hr, { children: [
    /* @__PURE__ */ Se("div", { ref: _ }),
    /* @__PURE__ */ Se(
      "div",
      {
        ref: w,
        className: "treeselect-after-list-slot",
        children: l.children
      }
    )
  ] });
};
export {
  Er as default
};
