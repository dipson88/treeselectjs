import we, { useRef as X, useEffect as Z } from "react";
import lr from "treeselectjs";
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
var Oe;
function cr() {
  if (Oe)
    return A;
  Oe = 1;
  var l = we, _ = Symbol.for("react.element"), w = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, m = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(T, d, P) {
    var g, R = {}, C = null, $ = null;
    P !== void 0 && (C = "" + P), d.key !== void 0 && (C = "" + d.key), d.ref !== void 0 && ($ = d.ref);
    for (g in d)
      f.call(d, g) && !h.hasOwnProperty(g) && (R[g] = d[g]);
    if (T && T.defaultProps)
      for (g in d = T.defaultProps, d)
        R[g] === void 0 && (R[g] = d[g]);
    return { $$typeof: _, type: T, key: C, ref: $, props: R, _owner: m.current };
  }
  return A.Fragment = w, A.jsx = O, A.jsxs = O, A;
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
var Ce;
function dr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var l = we, _ = Symbol.for("react.element"), w = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), T = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), Q = Symbol.iterator, Pe = "@@iterator";
    function xe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var x = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        je("error", e, t);
      }
    }
    function je(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ke = !1, Fe = !1, De = !1, Ae = !1, Ie = !1, ee;
    ee = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === h || Ie || e === m || e === P || e === g || Ae || e === $ || ke || Fe || De || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === R || e.$$typeof === O || e.$$typeof === T || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case w:
          return "Portal";
        case h:
          return "Profiler";
        case m:
          return "StrictMode";
        case P:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return re(r) + ".Consumer";
          case O:
            var t = e;
            return re(t._context) + ".Provider";
          case d:
            return $e(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case C: {
            var o = e, u = o._payload, i = o._init;
            try {
              return b(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, F = 0, te, ne, ae, ie, oe, ue, se;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Ye() {
      {
        if (F === 0) {
          te = console.log, ne = console.info, ae = console.warn, ie = console.error, oe = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
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
        F++;
      }
    }
    function Ne() {
      {
        if (F--, F === 0) {
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
              value: se
            })
          });
        }
        F < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = x.ReactCurrentDispatcher, J;
    function Y(e, r, t) {
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
    var B = !1, N;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ve();
    }
    function fe(e, r) {
      if (!e || B)
        return "";
      {
        var t = N.get(e);
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
`), s = a.length - 1, c = p.length - 1; s >= 1 && c >= 0 && a[s] !== p[c]; )
            c--;
          for (; s >= 1 && c >= 0; s--, c--)
            if (a[s] !== p[c]) {
              if (s !== 1 || c !== 1)
                do
                  if (s--, c--, c < 0 || a[s] !== p[c]) {
                    var E = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, E), E;
                  }
                while (s >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        B = !1, U.current = u, Ne(), Error.prepareStackTrace = o;
      }
      var k = e ? e.displayName || e.name : "", Te = k ? Y(k) : "";
      return typeof e == "function" && N.set(e, Te), Te;
    }
    function Le(e, r, t) {
      return fe(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Me(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case P:
          return Y("Suspense");
        case g:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Le(e.render);
          case R:
            return V(e.type, r, t);
          case C: {
            var n = e, o = n._payload, u = n._init;
            try {
              return V(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, ce = {}, de = x.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, o) {
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
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (M(o), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), M(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, M(o), v("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Je = Array.isArray;
    function q(e) {
      return Je(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (qe(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), ve(e);
    }
    var D = x.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ge, G;
    G = {};
    function ze(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = b(D.current.type);
        G[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(D.current.type), e.ref), G[t] = !0);
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          he || (he = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ge || (ge = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, o, u, i) {
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
    function er(e, r, t, n, o) {
      {
        var u, i = {}, a = null, p = null;
        t !== void 0 && (pe(t), a = "" + t), He(r) && (pe(r.key), a = "" + r.key), ze(r) && (p = r.ref, Ke(r, o));
        for (u in r)
          L.call(r, u) && !Ge.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || p) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Xe(i, c), p && Ze(i, c);
        }
        return Qe(e, a, p, o, n, D.current, i);
      }
    }
    var z = x.ReactCurrentOwner, me = x.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === _;
    }
    function Ee() {
      {
        if (z.current) {
          var e = b(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
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
    function tr(e) {
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
    function be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + b(e._owner.type) + "."), j(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function ye(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && be(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = xe(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              K(i.value) && be(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = b(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var o = b(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            j(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function _e(e, r, t, n, o, u) {
      {
        var i = We(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = rr(o);
          p ? a += p : a += Ee();
          var s;
          e === null ? s = "null" : q(e) ? s = "array" : e !== void 0 && e.$$typeof === _ ? (s = "<" + (b(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var c = er(e, r, t, o, u);
        if (c == null)
          return c;
        if (i) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (q(E)) {
                for (var k = 0; k < E.length; k++)
                  ye(E[k], e);
                Object.freeze && Object.freeze(E);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ye(E, e);
        }
        return e === f ? ar(c) : nr(c), c;
      }
    }
    function ir(e, r, t) {
      return _e(e, r, t, !0);
    }
    function or(e, r, t) {
      return _e(e, r, t, !1);
    }
    var ur = or, sr = ir;
    I.Fragment = f, I.jsx = ur, I.jsxs = sr;
  }()), I;
}
(function(l) {
  process.env.NODE_ENV === "production" ? l.exports = cr() : l.exports = dr();
})(fr);
const vr = W.Fragment, Se = W.jsx, pr = W.jsxs, hr = ["value", "id", "children"], Er = (l) => {
  const _ = X(null), w = X(null), f = X(null);
  if (f.current) {
    let m = !1;
    Object.keys(l).forEach((h) => {
      const O = f.current[h] === l[h];
      !hr.includes(h) && !O && (f.current[h] = l[h], m = !0);
    }), m && f.current.mount();
  }
  return Z(() => {
    f.current && JSON.stringify(f.current.value) !== JSON.stringify(l.value) && f.current.updateValue(l.value ?? []);
  }, [l.value]), Z(() => {
    var h;
    (((h = f.current) == null ? void 0 : h.id) || l.id) && f.current && (f.current.id = l.id ?? "", f.current.mount());
  }, [l.id]), Z(() => (f.current = new lr({
    parentHtmlContainer: _.current,
    listSlotHtmlComponent: w.current,
    ...l
  }), () => {
    var m;
    (m = f.current) == null || m.destroy();
  }), []), /* @__PURE__ */ pr(vr, { children: [
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
