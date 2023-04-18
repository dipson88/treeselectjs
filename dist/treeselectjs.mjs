var Js = Object.defineProperty;
var Zs = (l, e, t) => e in l ? Js(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t;
var c = (l, e, t) => (Zs(l, typeof e != "symbol" ? e + "" : e, t), t), ft = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
};
var n = (l, e, t) => (ft(l, e, "read from private field"), t ? t.call(l) : e.get(l)), r = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, m = (l, e, t, s) => (ft(l, e, "write to private field"), s ? s.call(l, t) : e.set(l, t), t);
var a = (l, e, t) => (ft(l, e, "access private method"), t);
const At = {
  arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',
  arrowDown: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  attention: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
  clear: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
  cross: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  partialCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'
}, N = (l, e) => {
  if (e.innerHTML = "", typeof l == "string")
    e.innerHTML = l;
  else {
    const t = l.cloneNode(!0);
    e.appendChild(t);
  }
}, Tt = (l) => {
  const e = l ? { ...l } : {};
  return Object.keys(At).forEach((t) => {
    e[t] || (e[t] = At[t]);
  }), e;
}, Qs = (l) => l.reduce((e, { name: t }, s) => (e += t, s < l.length - 1 && (e += ", "), e), "");
var A, E, I, v, he, Pt, H, U, ue, Bt, pe, Vt, G, z, T, D, me, Dt, fe, It, Ce, Ht, be, Gt, ge, Mt, we, Ft, ke, qt, Ee, jt, ve, $t, Le, Wt, ye, Rt, xe, Ut, Se, zt, _e, Yt, Ae, Kt, Te, Xt, Y, bt;
class ei {
  constructor({
    value: e,
    showTags: t,
    tagsCountText: s,
    clearable: i,
    isAlwaysOpened: o,
    searchable: d,
    placeholder: u,
    disabled: f,
    isSingleSelect: C,
    id: b,
    iconElements: g,
    inputCallback: w,
    searchCallback: k,
    openCallback: O,
    closeCallback: P,
    keydownCallback: R,
    focusCallback: ne,
    blurCallback: mt,
    nameChangeCallback: oe
  }) {
    // Private methods
    r(this, he);
    r(this, H);
    r(this, ue);
    r(this, pe);
    r(this, G);
    r(this, T);
    r(this, me);
    r(this, fe);
    r(this, Ce);
    r(this, be);
    r(this, ge);
    r(this, we);
    r(this, ke);
    r(this, Ee);
    r(this, ve);
    r(this, Le);
    r(this, ye);
    r(this, xe);
    r(this, Se);
    r(this, _e);
    r(this, Ae);
    r(this, Te);
    // Emits
    r(this, Y);
    // Props
    c(this, "value");
    c(this, "showTags");
    c(this, "tagsCountText");
    c(this, "clearable");
    c(this, "isAlwaysOpened");
    c(this, "searchable");
    c(this, "placeholder");
    c(this, "disabled");
    c(this, "isSingleSelect");
    c(this, "id");
    c(this, "iconElements");
    // InnerState
    c(this, "isOpened");
    c(this, "searchText");
    c(this, "srcElement");
    // PrivateInnerState
    r(this, A, void 0);
    r(this, E, void 0);
    r(this, I, void 0);
    r(this, v, void 0);
    // Callbacks
    c(this, "inputCallback");
    c(this, "searchCallback");
    c(this, "openCallback");
    c(this, "closeCallback");
    c(this, "keydownCallback");
    c(this, "focusCallback");
    c(this, "blurCallback");
    c(this, "nameChangeCallback");
    this.value = e, this.showTags = t, this.tagsCountText = s, this.searchable = d, this.placeholder = u, this.clearable = i, this.isAlwaysOpened = o, this.disabled = f, this.isSingleSelect = C, this.id = b, this.iconElements = g, this.isOpened = !1, this.searchText = "", m(this, A, a(this, Ce, Ht).call(this)), m(this, E, a(this, ve, $t).call(this)), m(this, I, a(this, xe, Ut).call(this)), m(this, v, null), this.inputCallback = w, this.searchCallback = k, this.openCallback = O, this.closeCallback = P, this.keydownCallback = R, this.focusCallback = ne, this.blurCallback = mt, this.nameChangeCallback = oe, this.srcElement = a(this, me, Dt).call(this, n(this, A), n(this, E), n(this, I)), a(this, he, Pt).call(this);
  }
  // Public methods
  focus() {
    setTimeout(() => n(this, E).focus(), 0);
  }
  blur() {
    this.isOpened && a(this, T, D).call(this), this.clearSearch(), n(this, E).blur();
  }
  updateValue(e) {
    this.value = e, a(this, H, U).call(this), a(this, G, z).call(this);
  }
  removeItem(e) {
    this.value = this.value.filter((t) => t.id !== e), a(this, Y, bt).call(this), a(this, H, U).call(this), a(this, G, z).call(this);
  }
  clear() {
    this.value = [], a(this, Y, bt).call(this), a(this, H, U).call(this), this.clearSearch();
  }
  openClose() {
    a(this, T, D).call(this);
  }
  clearSearch() {
    this.searchText = "", this.searchCallback(""), a(this, G, z).call(this);
  }
}
A = new WeakMap(), E = new WeakMap(), I = new WeakMap(), v = new WeakMap(), he = new WeakSet(), Pt = function() {
  a(this, H, U).call(this), a(this, G, z).call(this), a(this, ue, Bt).call(this);
}, H = new WeakSet(), U = function() {
  if (n(this, A).innerHTML = "", this.showTags) {
    n(this, A).append(...a(this, be, Gt).call(this));
    const e = Qs(this.value);
    this.nameChangeCallback(e);
  } else {
    const e = a(this, Ee, jt).call(this);
    n(this, A).appendChild(e), this.nameChangeCallback(e.innerText);
  }
  n(this, A).appendChild(n(this, E));
}, ue = new WeakSet(), Bt = function() {
  const e = [];
  n(this, I).innerHTML = "", this.clearable && e.push(a(this, Se, zt).call(this)), this.isAlwaysOpened || e.push(a(this, Ae, Kt).call(this, this.isOpened)), e.length && n(this, I).append(...e);
}, pe = new WeakSet(), Vt = function() {
  if (!this.isAlwaysOpened && n(this, v)) {
    const e = this.isOpened ? this.iconElements.arrowUp : this.iconElements.arrowDown;
    N(e, n(this, v));
  }
}, G = new WeakSet(), z = function() {
  var e;
  (e = this.value) != null && e.length ? (n(this, E).removeAttribute("placeholder"), this.srcElement.classList.remove("treeselect-input--value-not-selected")) : (n(this, E).setAttribute("placeholder", this.placeholder), this.srcElement.classList.add("treeselect-input--value-not-selected")), this.searchable ? this.srcElement.classList.remove("treeselect-input--unsearchable") : this.srcElement.classList.add("treeselect-input--unsearchable"), this.isSingleSelect ? this.srcElement.classList.add("treeselect-input--is-single-select") : this.srcElement.classList.remove("treeselect-input--is-single-select"), n(this, E).value = this.searchText;
}, T = new WeakSet(), D = function() {
  this.isOpened = !this.isOpened, a(this, pe, Vt).call(this), this.isOpened ? this.openCallback() : this.closeCallback();
}, me = new WeakSet(), Dt = function(e, t, s) {
  const i = document.createElement("div");
  return i.classList.add("treeselect-input"), i.setAttribute("tabindex", "-1"), i.addEventListener("mousedown", (o) => a(this, fe, It).call(this, o)), i.addEventListener("focus", () => this.focusCallback(), !0), i.addEventListener("blur", () => this.blurCallback(), !0), e.appendChild(t), i.append(e, s), i;
}, fe = new WeakSet(), It = function(e) {
  e.stopPropagation(), this.isOpened || a(this, T, D).call(this), this.focus();
}, Ce = new WeakSet(), Ht = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-input__tags"), e;
}, be = new WeakSet(), Gt = function() {
  return this.value.map((e) => {
    const t = document.createElement("div");
    t.classList.add("treeselect-input__tags-element"), t.setAttribute("tabindex", "-1"), t.setAttribute("tag-id", e.id.toString()), t.setAttribute("title", e.name);
    const s = a(this, we, Ft).call(this, e.name), i = a(this, ke, qt).call(this);
    return t.addEventListener("mousedown", (o) => a(this, ge, Mt).call(this, o, e.id)), t.append(s, i), t;
  });
}, ge = new WeakSet(), Mt = function(e, t) {
  e.preventDefault(), e.stopPropagation(), this.removeItem(t), this.focus();
}, we = new WeakSet(), Ft = function(e) {
  const t = document.createElement("span");
  return t.classList.add("treeselect-input__tags-name"), t.textContent = e, t;
}, ke = new WeakSet(), qt = function() {
  const e = document.createElement("span");
  return e.classList.add("treeselect-input__tags-cross"), N(this.iconElements.cross, e), e;
}, Ee = new WeakSet(), jt = function() {
  const e = document.createElement("span");
  if (e.classList.add("treeselect-input__tags-count"), !this.value.length)
    return e.textContent = "", e.setAttribute("title", ""), e;
  const t = this.value.length === 1 ? this.value[0].name : `${this.value.length} ${this.tagsCountText}`;
  return e.textContent = t, e.setAttribute("title", t), e;
}, ve = new WeakSet(), $t = function() {
  const e = document.createElement("input");
  return e.classList.add("treeselect-input__edit"), this.id && e.setAttribute("id", this.id), (!this.searchable || this.disabled) && e.setAttribute("readonly", "readonly"), this.disabled && e.setAttribute("tabindex", "-1"), e.addEventListener("keydown", (t) => a(this, Le, Wt).call(this, t)), e.addEventListener("input", (t) => a(this, ye, Rt).call(this, t, e)), e;
}, Le = new WeakSet(), Wt = function(e) {
  e.stopPropagation();
  const t = e.key;
  t === "Backspace" && !this.searchText.length && this.value.length && !this.showTags && this.clear(), t === "Backspace" && !this.searchText.length && this.value.length && this.removeItem(this.value[this.value.length - 1].id), e.code === "Space" && (!this.searchText || !this.searchable) && a(this, T, D).call(this), (t === "Enter" || t === "ArrowDown" || t === "ArrowUp") && e.preventDefault(), this.keydownCallback(e), t !== "Tab" && this.focus();
}, ye = new WeakSet(), Rt = function(e, t) {
  e.stopPropagation();
  const s = this.searchText, i = t.value.trim();
  if (s.length === 0 && i.length === 0) {
    t.value = "";
    return;
  }
  if (this.searchable) {
    const o = e.target.value;
    this.searchCallback(o), this.isOpened || a(this, T, D).call(this);
  } else
    t.value = "";
  this.searchText = t.value;
}, xe = new WeakSet(), Ut = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-input__operators"), e;
}, Se = new WeakSet(), zt = function() {
  const e = document.createElement("span");
  return e.classList.add("treeselect-input__clear"), e.setAttribute("tabindex", "-1"), N(this.iconElements.clear, e), e.addEventListener("mousedown", (t) => a(this, _e, Yt).call(this, t)), e;
}, _e = new WeakSet(), Yt = function(e) {
  e.preventDefault(), e.stopPropagation(), (this.searchText.length || this.value.length) && this.clear(), this.focus();
}, Ae = new WeakSet(), Kt = function(e) {
  m(this, v, document.createElement("span")), n(this, v).classList.add("treeselect-input__arrow");
  const t = e ? this.iconElements.arrowUp : this.iconElements.arrowDown;
  return N(t, n(this, v)), n(this, v).addEventListener("mousedown", (s) => a(this, Te, Xt).call(this, s)), n(this, v);
}, Te = new WeakSet(), Xt = function(e) {
  e.stopPropagation(), e.preventDefault(), this.focus(), a(this, T, D).call(this);
}, Y = new WeakSet(), bt = function() {
  this.inputCallback(this.value);
};
const Jt = (l, e, t) => {
  li(e);
  const s = e.filter((i) => !i.disabled && l.some((o) => o === i.id));
  if (t && s.length) {
    s[0].checked = !0;
    return;
  }
  s.forEach((i) => {
    i.checked = !0;
    const o = _t(i, e);
    i.checked = o;
  });
}, _t = ({ id: l, checked: e }, t) => {
  const s = t.find((o) => o.id === l);
  if (!s)
    return !1;
  const i = Zt(!!e, s, t);
  return Qt(s, t), i;
}, Zt = (l, e, t) => {
  if (!e.isGroup)
    return e.checked = e.disabled ? !1 : !!l, e.isPartialChecked = !1, e.checked;
  const s = t.filter((u) => u.childOf === e.id);
  return !l || e.disabled || e.isPartialChecked ? (e.checked = !1, e.isPartialChecked = !1, gt(e, s, t), e.checked) : es(s, t) ? ts(s) ? (e.checked = !1, e.isPartialChecked = !1, e.disabled = !0, e.checked) : (e.checked = !1, e.isPartialChecked = !0, s.forEach((u) => {
    Zt(l, u, t);
  }), e.checked) : (e.checked = !0, e.isPartialChecked = !1, gt(e, s, t), e.checked);
}, Qt = (l, e) => {
  const t = e.find((s) => s.id === l.childOf);
  t && (ti(t, e), Qt(t, e));
}, ti = (l, e) => {
  const t = ut(l, e);
  if (ts(t)) {
    l.checked = !1, l.isPartialChecked = !1, l.disabled = !0;
    return;
  }
  if (si(t)) {
    l.checked = !0, l.isPartialChecked = !1;
    return;
  }
  if (ii(t)) {
    l.checked = !1, l.isPartialChecked = !0;
    return;
  }
  l.checked = !1, l.isPartialChecked = !1;
}, gt = ({ checked: l, disabled: e }, t, s) => {
  t.forEach((i) => {
    i.disabled = !!e || !!i.disabled, i.checked = !!l && !i.disabled, i.isPartialChecked = !1;
    const o = ut(i, s);
    gt({ checked: l, disabled: e }, o, s);
  });
}, es = (l, e) => l.some((i) => i.disabled) ? !0 : l.some((i) => {
  if (i.isGroup) {
    const o = ut(i, e);
    return es(o, e);
  }
  return !1;
}), ts = (l) => l.every((e) => !!e.disabled), si = (l) => l.every((e) => !!e.checked), ii = (l) => l.some((e) => !!e.checked || !!e.isPartialChecked), li = (l) => {
  l.forEach((e) => {
    e.checked = !1, e.isPartialChecked = !1;
  });
}, ni = (l, e, t = "", s = 0) => {
  const i = ss(l, e, t, s);
  return ai(i);
}, ss = (l, e, t, s) => l.reduce((i, o) => {
  var C;
  const d = !!((C = o.children) != null && C.length), u = s >= e && d, f = s > e;
  if (i.push({
    id: o.value,
    name: o.name,
    childOf: t,
    isGroup: d,
    checked: !1,
    isPartialChecked: !1,
    level: s,
    isClosed: u,
    hidden: f,
    disabled: o.disabled ?? !1
  }), d) {
    const b = ss(o.children, e, o.value, s + 1);
    i.push(...b);
  }
  return i;
}, []), ut = ({ id: l }, e) => e.filter((t) => t.childOf === l), oi = (l) => {
  const { ungroupedNodes: e, allGroupedNodes: t, allNodes: s } = l.reduce(
    (o, d) => (d.checked && (o.allNodes.push(d), d.isGroup ? o.allGroupedNodes.push(d) : o.ungroupedNodes.push(d)), o),
    {
      ungroupedNodes: [],
      allGroupedNodes: [],
      allNodes: []
    }
  ), i = s.filter((o) => !t.some(({ id: d }) => d === o.childOf));
  return { ungroupedNodes: e, groupedNodes: i, allNodes: s };
}, ai = (l) => (l.filter((t) => !!t.disabled).forEach(({ id: t }) => _t({ id: t, checked: !1 }, l)), l), pt = (l, { id: e, isClosed: t }) => {
  ut({ id: e }, l).forEach((i) => {
    i.hidden = t ?? !1, i.isGroup && !i.isClosed && pt(l, { id: i.id, isClosed: t });
  });
}, ri = (l) => {
  l.filter((e) => e.isGroup && !e.disabled && (e.checked || e.isPartialChecked)).forEach((e) => {
    e.isClosed = !1, pt(l, e);
  });
}, ci = (l, e) => {
  const t = di(l, e);
  l.forEach((s) => {
    t.some(({ id: o }) => o === s.id) ? (s.isGroup && (s.isClosed = !1, pt(l, s)), s.hidden = !1) : s.hidden = !0;
  });
}, di = (l, e) => l.reduce((t, s) => {
  if (s.name.toLowerCase().includes(e.toLowerCase())) {
    if (t.push(s), s.isGroup) {
      const o = is(s.id, l);
      t.push(...o);
    }
    if (s.childOf) {
      const o = ls(s.childOf, l);
      t.push(...o);
    }
  }
  return t;
}, []), is = (l, e) => e.reduce((t, s) => (s.childOf === l && (t.push(s), s.isGroup && t.push(...is(s.id, e))), t), []), ls = (l, e) => e.reduce((t, s) => (s.id === l && (t.push(s), s.childOf && t.push(...ls(s.childOf, e))), t), []), hi = (l) => {
  const { duplications: e } = l.reduce(
    (t, s) => (t.allItems.some((i) => i.toString() === s.id.toString()) && t.duplications.push(s.id), t.allItems.push(s.id), t),
    {
      duplications: [],
      allItems: []
    }
  );
  e.length && console.error(`Validation: You have duplicated values: ${e.join(", ")}! You should use unique values.`);
}, ui = (l, e, t, s, i, o, d, u) => {
  Jt(l, e, i), u && d && ri(e), ae(e, t, s, o);
}, ae = (l, e, t, s) => {
  l.forEach((i) => {
    const o = e.querySelector(`[input-id="${i.id}"]`), d = _(o);
    o.checked = i.checked, pi(i, d, s), mi(i, d), fi(i, d), Ci(i, d, t), bi(i, d), wi(i, d, l), gi(i, o, t);
  }), ki(l, e);
}, pi = (l, e, t) => {
  l.checked ? e.classList.add("treeselect-list__item--checked") : e.classList.remove("treeselect-list__item--checked"), Array.isArray(t) && t[0] === l.id && !l.disabled ? e.classList.add("treeselect-list__item--single-selected") : e.classList.remove("treeselect-list__item--single-selected");
}, mi = (l, e) => {
  l.isPartialChecked ? e.classList.add("treeselect-list__item--partial-checked") : e.classList.remove("treeselect-list__item--partial-checked");
}, fi = (l, e) => {
  l.disabled ? e.classList.add("treeselect-list__item--disabled") : e.classList.remove("treeselect-list__item--disabled");
}, Ci = (l, e, t) => {
  if (l.isGroup) {
    const s = e.querySelector(".treeselect-list__item-icon"), i = l.isClosed ? t.arrowRight : t.arrowDown;
    N(i, s), l.isClosed ? e.classList.add("treeselect-list__item--closed") : e.classList.remove("treeselect-list__item--closed");
  }
}, bi = (l, e) => {
  l.hidden ? e.classList.add("treeselect-list__item--hidden") : e.classList.remove("treeselect-list__item--hidden");
}, gi = (l, e, t) => {
  const i = e.parentNode.querySelector(".treeselect-list__item-checkbox-icon");
  l.checked ? N(t.check, i) : l.isPartialChecked ? N(t.partialCheck, i) : i.innerHTML = "";
}, wi = (l, e, t) => {
  const s = l.level === 0, i = 20, o = 5;
  if (s) {
    const d = t.some((f) => f.isGroup && f.level === l.level), u = !l.isGroup && d ? `${i}px` : `${o}px`;
    e.style.paddingLeft = l.isGroup ? "0" : u;
  } else
    e.style.paddingLeft = l.isGroup ? `${l.level * i}px` : `${l.level * i + i}px`;
  e.setAttribute("level", l.level.toString()), e.setAttribute("group", l.isGroup.toString());
}, ki = (l, e) => {
  const t = l.some((i) => !i.hidden), s = e.querySelector(".treeselect-list__empty");
  t ? s.classList.add("treeselect-list__empty--hidden") : s.classList.remove("treeselect-list__empty--hidden");
}, _ = (l) => l.parentNode.parentNode, Nt = (l, e) => e.find((t) => t.id.toString() === l), Ei = (l) => _(l).querySelector(".treeselect-list__item-icon"), vi = (l, e) => {
  e && Object.keys(e).forEach((t) => {
    const s = e[t];
    typeof s == "string" && l.setAttribute(t, s);
  });
};
var M, B, y, K, Ne, ns, Oe, os, Pe, as, Be, rs, Ve, cs, De, ds, X, wt, Ie, hs, He, us, Ge, ps, J, kt, Me, ms, Fe, fs, qe, Cs, je, bs, $e, gs, We, ws, Re, ks, Ue, Es, ze, vs, Ye, Ls, Ke, ys, Z, Et, Q, vt, Xe, xs;
class Li {
  constructor({
    options: e,
    value: t,
    openLevel: s,
    listSlotHtmlComponent: i,
    emptyText: o,
    isSingleSelect: d,
    iconElements: u,
    showCount: f,
    disabledBranchNode: C,
    expandSelected: b,
    inputCallback: g,
    arrowClickCallback: w,
    mouseupCallback: k
  }) {
    // Private methods
    r(this, Ne);
    r(this, Oe);
    r(this, Pe);
    r(this, Be);
    r(this, Ve);
    r(this, De);
    r(this, X);
    r(this, Ie);
    r(this, He);
    r(this, Ge);
    r(this, J);
    r(this, Me);
    r(this, Fe);
    r(this, qe);
    r(this, je);
    r(this, $e);
    r(this, We);
    r(this, Re);
    r(this, Ue);
    r(this, ze);
    // Actions
    r(this, Ye);
    r(this, Ke);
    r(this, Z);
    r(this, Q);
    // Emits
    r(this, Xe);
    // Props
    c(this, "options");
    c(this, "value");
    c(this, "openLevel");
    c(this, "listSlotHtmlComponent");
    c(this, "emptyText");
    c(this, "isSingleSelect");
    c(this, "showCount");
    c(this, "disabledBranchNode");
    c(this, "expandSelected");
    c(this, "iconElements");
    // InnerState
    c(this, "searchText");
    c(this, "flattedOptions");
    c(this, "flattedOptionsBeforeSearch");
    c(this, "selectedNodes");
    c(this, "srcElement");
    // Callbacks
    c(this, "inputCallback");
    c(this, "arrowClickCallback");
    c(this, "mouseupCallback");
    // PrivateInnerState
    r(this, M, null);
    r(this, B, !0);
    r(this, y, []);
    r(this, K, !0);
    this.options = e, this.value = t, this.openLevel = s ?? 0, this.listSlotHtmlComponent = i ?? null, this.emptyText = o ?? "No results found...", this.isSingleSelect = d ?? !1, this.showCount = f ?? !1, this.disabledBranchNode = C ?? !1, this.expandSelected = b ?? !1, this.iconElements = u, this.searchText = "", this.flattedOptions = ni(this.options, this.openLevel), this.flattedOptionsBeforeSearch = this.flattedOptions, this.selectedNodes = { nodes: [], groupedNodes: [] }, this.srcElement = a(this, Pe, as).call(this), this.inputCallback = g, this.arrowClickCallback = w, this.mouseupCallback = k, hi(this.flattedOptions);
  }
  // Public methods
  updateValue(e) {
    this.value = e, m(this, y, this.isSingleSelect ? this.value : []), ui(
      e,
      this.flattedOptions,
      this.srcElement,
      this.iconElements,
      this.isSingleSelect,
      n(this, y),
      this.expandSelected,
      n(this, K)
    ), m(this, K, !1), a(this, Q, vt).call(this);
  }
  updateSearchValue(e) {
    if (e === this.searchText)
      return;
    const t = this.searchText === "" && e !== "";
    this.searchText = e, t && (this.flattedOptionsBeforeSearch = JSON.parse(JSON.stringify(this.flattedOptions))), this.searchText === "" && (this.flattedOptions = this.flattedOptionsBeforeSearch.map((s) => {
      const i = this.flattedOptions.find((o) => o.id === s.id);
      return i.isClosed = s.isClosed, i.hidden = s.hidden, i;
    }), this.flattedOptionsBeforeSearch = []), this.searchText && ci(this.flattedOptions, e), ae(this.flattedOptions, this.srcElement, this.iconElements, n(this, y)), this.focusFirstListElement();
  }
  callKeyAction(e) {
    m(this, B, !1);
    const t = this.srcElement.querySelector(".treeselect-list__item--focused");
    if (t == null ? void 0 : t.classList.contains("treeselect-list__item--hidden"))
      return;
    const i = e.key;
    i === "Enter" && t && t.dispatchEvent(new Event("mousedown")), (i === "ArrowLeft" || i === "ArrowRight") && a(this, Ne, ns).call(this, t, e), (i === "ArrowDown" || i === "ArrowUp") && a(this, Oe, os).call(this, t, i);
  }
  focusFirstListElement() {
    const e = "treeselect-list__item--focused", t = this.srcElement.querySelector(`.${e}`), s = Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter(
      (o) => window.getComputedStyle(_(o)).display !== "none"
    );
    if (!s.length)
      return;
    t && t.classList.remove(e), _(s[0]).classList.add(e);
  }
  isLastFocusedElementExist() {
    return !!n(this, M);
  }
}
M = new WeakMap(), B = new WeakMap(), y = new WeakMap(), K = new WeakMap(), Ne = new WeakSet(), ns = function(e, t) {
  if (!e)
    return;
  const s = t.key, o = e.querySelector(".treeselect-list__item-checkbox").getAttribute("input-id"), d = Nt(o, this.flattedOptions), u = e.querySelector(".treeselect-list__item-icon");
  s === "ArrowLeft" && !d.isClosed && d.isGroup && (u.dispatchEvent(new Event("mousedown")), t.preventDefault()), s === "ArrowRight" && d.isClosed && d.isGroup && (u.dispatchEvent(new Event("mousedown")), t.preventDefault());
}, Oe = new WeakSet(), os = function(e, t) {
  var i;
  const s = Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter(
    (o) => window.getComputedStyle(_(o)).display !== "none"
  );
  if (s.length)
    if (!e)
      _(s[0]).classList.add("treeselect-list__item--focused");
    else {
      const o = s.findIndex(
        (P) => _(P).classList.contains("treeselect-list__item--focused")
      );
      _(s[o]).classList.remove("treeselect-list__item--focused");
      const u = t === "ArrowDown" ? o + 1 : o - 1, f = t === "ArrowDown" ? 0 : s.length - 1, C = s[u] ?? s[f], b = !s[u], g = _(C);
      g.classList.add("treeselect-list__item--focused");
      const w = this.srcElement.getBoundingClientRect(), k = g.getBoundingClientRect();
      if (b && t === "ArrowDown") {
        this.srcElement.scroll(0, 0);
        return;
      }
      if (b && t === "ArrowUp") {
        this.srcElement.scroll(0, this.srcElement.scrollHeight);
        return;
      }
      const O = ((i = this.listSlotHtmlComponent) == null ? void 0 : i.clientHeight) ?? 0;
      if (w.y + w.height < k.y + k.height + O) {
        this.srcElement.scroll(0, this.srcElement.scrollTop + k.height);
        return;
      }
      if (w.y > k.y) {
        this.srcElement.scroll(0, this.srcElement.scrollTop - k.height);
        return;
      }
    }
}, Pe = new WeakSet(), as = function() {
  const e = a(this, Be, rs).call(this), t = a(this, X, wt).call(this, this.options);
  e.append(...t);
  const s = a(this, He, us).call(this);
  e.append(s);
  const i = a(this, Ie, hs).call(this);
  return i && e.append(i), e;
}, Be = new WeakSet(), rs = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-list"), this.isSingleSelect && e.classList.add("treeselect-list--single-select"), this.disabledBranchNode && e.classList.add("treeselect-list--disabled-branch-node"), e.addEventListener("mouseout", (t) => a(this, Ve, cs).call(this, t)), e.addEventListener("mousemove", () => a(this, De, ds).call(this)), e.addEventListener("mouseup", () => this.mouseupCallback(), !0), e;
}, Ve = new WeakSet(), cs = function(e) {
  e.stopPropagation(), n(this, M) && n(this, B) && n(this, M).classList.add("treeselect-list__item--focused");
}, De = new WeakSet(), ds = function() {
  m(this, B, !0);
}, X = new WeakSet(), wt = function(e) {
  return e.reduce((t, s) => {
    var o;
    if ((o = s.children) != null && o.length) {
      const d = a(this, Ge, ps).call(this, s), u = a(this, X, wt).call(this, s.children);
      return d.append(...u), t.push(d), t;
    }
    const i = a(this, J, kt).call(this, s, !1);
    return t.push(i), t;
  }, []);
}, Ie = new WeakSet(), hs = function() {
  if (!this.listSlotHtmlComponent)
    return null;
  const e = document.createElement("div");
  return e.classList.add("treeselect-list__slot"), e.appendChild(this.listSlotHtmlComponent), e;
}, He = new WeakSet(), us = function() {
  const e = document.createElement("div");
  e.classList.add("treeselect-list__empty"), e.setAttribute("title", this.emptyText);
  const t = document.createElement("span");
  t.classList.add("treeselect-list__empty-icon"), N(this.iconElements.attention, t);
  const s = document.createElement("span");
  return s.classList.add("treeselect-list__empty-text"), s.textContent = this.emptyText, e.append(t, s), e;
}, Ge = new WeakSet(), ps = function(e) {
  const t = document.createElement("div");
  t.setAttribute("group-container-id", e.value.toString()), t.classList.add("treeselect-list__group-container");
  const s = a(this, J, kt).call(this, e, !0);
  return t.appendChild(s), t;
}, J = new WeakSet(), kt = function(e, t) {
  const s = a(this, Me, ms).call(this, e);
  if (t) {
    const d = a(this, $e, gs).call(this);
    s.appendChild(d), s.classList.add("treeselect-list__item--group");
  }
  const i = a(this, Re, ks).call(this, e), o = a(this, Ue, Es).call(this, e, t);
  return s.append(i, o), s;
}, Me = new WeakSet(), ms = function(e) {
  const t = document.createElement("div");
  return vi(t, e.htmlAttr), t.setAttribute("tabindex", "-1"), t.setAttribute("title", e.name), t.classList.add("treeselect-list__item"), t.addEventListener("mouseover", () => a(this, Fe, fs).call(this, t), !0), t.addEventListener("mouseout", () => a(this, qe, Cs).call(this, t), !0), t.addEventListener("mousedown", (s) => a(this, je, bs).call(this, s, e)), t;
}, Fe = new WeakSet(), fs = function(e) {
  n(this, B) && a(this, Z, Et).call(this, !0, e);
}, qe = new WeakSet(), Cs = function(e) {
  n(this, B) && (a(this, Z, Et).call(this, !1, e), m(this, M, e));
}, je = new WeakSet(), bs = function(e, t) {
  var o;
  if (e.preventDefault(), e.stopPropagation(), (o = this.flattedOptions.find((d) => d.id === t.value)) == null ? void 0 : o.disabled)
    return;
  const i = e.target.querySelector(".treeselect-list__item-checkbox");
  i.checked = !i.checked, a(this, Ye, Ls).call(this, i, t);
}, $e = new WeakSet(), gs = function() {
  const e = document.createElement("span");
  return e.setAttribute("tabindex", "-1"), e.classList.add("treeselect-list__item-icon"), N(this.iconElements.arrowDown, e), e.addEventListener("mousedown", (t) => a(this, We, ws).call(this, t)), e;
}, We = new WeakSet(), ws = function(e) {
  e.preventDefault(), e.stopPropagation(), a(this, Ke, ys).call(this, e);
}, Re = new WeakSet(), ks = function(e) {
  const t = document.createElement("div");
  t.classList.add("treeselect-list__item-checkbox-container");
  const s = document.createElement("span");
  s.classList.add("treeselect-list__item-checkbox-icon"), s.innerHTML = "";
  const i = document.createElement("input");
  return i.setAttribute("tabindex", "-1"), i.setAttribute("type", "checkbox"), i.setAttribute("input-id", e.value.toString()), i.classList.add("treeselect-list__item-checkbox"), t.append(s, i), t;
}, Ue = new WeakSet(), Es = function(e, t) {
  const s = document.createElement("label");
  if (s.textContent = e.name, s.classList.add("treeselect-list__item-label"), t && this.showCount) {
    const i = a(this, ze, vs).call(this, e);
    s.appendChild(i);
  }
  return s;
}, ze = new WeakSet(), vs = function(e) {
  const t = document.createElement("span"), s = this.flattedOptions.filter((i) => i.childOf === e.value);
  return t.textContent = `(${s.length})`, t.classList.add("treeselect-list__item-label-counter"), t;
}, Ye = new WeakSet(), Ls = function(e, t) {
  const s = this.flattedOptions.find((i) => i.id === t.value);
  if (s) {
    if (s != null && s.isGroup && this.disabledBranchNode) {
      const i = Ei(e);
      i == null || i.dispatchEvent(new Event("mousedown"));
      return;
    }
    if (this.isSingleSelect) {
      const [i] = n(this, y);
      if (s.id === i)
        return;
      m(this, y, [s.id]), Jt([s.id], this.flattedOptions, this.isSingleSelect);
    } else {
      s.checked = e.checked;
      const i = _t(s, this.flattedOptions);
      e.checked = i;
    }
    ae(this.flattedOptions, this.srcElement, this.iconElements, n(this, y)), a(this, Xe, xs).call(this);
  }
}, Ke = new WeakSet(), ys = function(e) {
  var o, d;
  const t = (d = (o = e.target) == null ? void 0 : o.parentNode) == null ? void 0 : d.querySelector("[input-id]"), s = (t == null ? void 0 : t.getAttribute("input-id")) ?? null, i = Nt(s, this.flattedOptions);
  i && (i.isClosed = !i.isClosed, pt(this.flattedOptions, i), ae(this.flattedOptions, this.srcElement, this.iconElements, n(this, y)), this.arrowClickCallback());
}, Z = new WeakSet(), Et = function(e, t) {
  const s = "treeselect-list__item--focused";
  if (e) {
    const i = Array.from(this.srcElement.querySelectorAll(`.${s}`));
    i.length && i.forEach((o) => o.classList.remove(s)), t.classList.add(s);
  } else
    t.classList.remove(s);
}, Q = new WeakSet(), vt = function() {
  const { ungroupedNodes: e, groupedNodes: t } = oi(this.flattedOptions);
  this.selectedNodes = { nodes: e, groupedNodes: t };
}, Xe = new WeakSet(), xs = function() {
  a(this, Q, vt).call(this), this.inputCallback(this.selectedNodes), this.value = this.selectedNodes.nodes.map((e) => e.id);
};
const Ot = ({
  parentHtmlContainer: l,
  staticList: e,
  appendToBody: t,
  isSingleSelect: s,
  value: i,
  direction: o
}) => {
  l || console.error("Validation: parentHtmlContainer prop is required!"), e && t && console.error("Validation: You should set staticList to false if you use appendToBody!"), s && Array.isArray(i) && console.error("Validation: if you use isSingleSelect prop, you should pass a single value!"), !s && !Array.isArray(i) && console.error("Validation: you should pass an array as a value!"), o && o !== "auto" && o !== "bottom" && o !== "top" && console.error("Validation: you should pass (auto | top | bottom | undefined) as a value for the direction prop!");
}, Ct = (l) => l.map((e) => e.id), yi = (l) => l ? Array.isArray(l) ? l : [l] : [], xi = (l, e) => {
  if (e) {
    const [t] = l;
    return t ?? null;
  }
  return l;
};
var h, p, F, ee, q, x, S, L, V, te, Lt, j, re, Je, Ss, Ze, _s, Qe, As, et, Ts, tt, Ns, st, Os, it, Ps, lt, Bs, nt, Vs, ot, Ds, se, yt, at, Is, $, ce, ie, xt, W, de, rt, Hs, le, St, ct, Gs, dt, Ms, ht, Fs;
class _i {
  constructor({
    parentHtmlContainer: e,
    value: t,
    options: s,
    openLevel: i,
    appendToBody: o,
    alwaysOpen: d,
    showTags: u,
    tagsCountText: f,
    clearable: C,
    searchable: b,
    placeholder: g,
    grouped: w,
    isGroupedValue: k,
    listSlotHtmlComponent: O,
    disabled: P,
    emptyText: R,
    staticList: ne,
    id: mt,
    isSingleSelect: oe,
    showCount: qs,
    disabledBranchNode: js,
    direction: $s,
    expandSelected: Ws,
    saveScrollPosition: Rs,
    iconElements: Us,
    inputCallback: zs,
    openCallback: Ys,
    closeCallback: Ks,
    nameChangeCallback: Xs
  }) {
    r(this, te);
    r(this, j);
    r(this, Je);
    r(this, Ze);
    r(this, Qe);
    r(this, et);
    r(this, tt);
    r(this, st);
    r(this, it);
    r(this, lt);
    r(this, nt);
    r(this, ot);
    r(this, se);
    r(this, at);
    r(this, $);
    r(this, ie);
    r(this, W);
    r(this, rt);
    // Emits
    r(this, le);
    r(this, ct);
    r(this, dt);
    r(this, ht);
    // Props
    c(this, "parentHtmlContainer");
    c(this, "value");
    c(this, "options");
    c(this, "openLevel");
    c(this, "appendToBody");
    c(this, "alwaysOpen");
    c(this, "showTags");
    c(this, "tagsCountText");
    c(this, "clearable");
    c(this, "searchable");
    c(this, "placeholder");
    c(this, "grouped");
    c(this, "isGroupedValue");
    c(this, "listSlotHtmlComponent");
    c(this, "disabled");
    c(this, "emptyText");
    c(this, "staticList");
    c(this, "id");
    c(this, "isSingleSelect");
    c(this, "showCount");
    c(this, "disabledBranchNode");
    c(this, "direction");
    c(this, "expandSelected");
    c(this, "saveScrollPosition");
    c(this, "iconElements");
    c(this, "inputCallback");
    c(this, "openCallback");
    c(this, "closeCallback");
    c(this, "nameChangeCallback");
    // InnerState
    c(this, "ungroupedValue");
    c(this, "groupedValue");
    c(this, "isListOpened");
    c(this, "selectedName");
    c(this, "srcElement");
    // Components
    r(this, h, null);
    r(this, p, null);
    // Resize props
    r(this, F, null);
    // List position scroll
    r(this, ee, 0);
    // Timer for search text
    r(this, q, 0);
    // Outside listeners
    r(this, x, null);
    r(this, S, null);
    r(this, L, null);
    r(this, V, null);
    Ot({
      parentHtmlContainer: e,
      value: t,
      staticList: ne,
      appendToBody: o,
      isSingleSelect: oe
    }), this.parentHtmlContainer = e, this.value = [], this.options = s ?? [], this.openLevel = i ?? 0, this.appendToBody = o ?? !1, this.alwaysOpen = !!(d && !P), this.showTags = u ?? !0, this.tagsCountText = f ?? "elements selected", this.clearable = C ?? !0, this.searchable = b ?? !0, this.placeholder = g ?? "Search...", this.grouped = w ?? !0, this.isGroupedValue = k ?? !1, this.listSlotHtmlComponent = O ?? null, this.disabled = P ?? !1, this.emptyText = R ?? "No results found...", this.staticList = !!(ne && !this.appendToBody), this.id = mt ?? "", this.isSingleSelect = oe ?? !1, this.showCount = qs ?? !1, this.disabledBranchNode = js ?? !1, this.direction = $s ?? "auto", this.expandSelected = Ws ?? !1, this.saveScrollPosition = Rs ?? !0, this.iconElements = Tt(Us), this.inputCallback = zs, this.openCallback = Ys, this.closeCallback = Ks, this.nameChangeCallback = Xs, this.ungroupedValue = [], this.groupedValue = [], this.isListOpened = !1, this.selectedName = "", this.srcElement = null, a(this, te, Lt).call(this, t);
  }
  mount() {
    Ot({
      parentHtmlContainer: this.parentHtmlContainer,
      value: this.value,
      staticList: this.staticList,
      appendToBody: this.appendToBody,
      isSingleSelect: this.isSingleSelect
    }), this.iconElements = Tt(this.iconElements), a(this, te, Lt).call(this, this.value);
  }
  updateValue(e) {
    var s;
    const t = n(this, h);
    if (t) {
      const i = yi(e);
      t.updateValue(i);
      const { groupedNodes: o, nodes: d } = t.selectedNodes, u = this.grouped || this.isSingleSelect ? o : d;
      (s = n(this, p)) == null || s.updateValue(u), a(this, j, re).call(this, { groupedNodes: o, nodes: d });
    }
  }
  destroy() {
    this.srcElement && (a(this, se, yt).call(this), this.srcElement.innerHTML = "", this.srcElement = null, a(this, W, de).call(this, !0));
  }
  focus() {
    n(this, p) && n(this, p).focus();
  }
  toggleOpenClose() {
    n(this, p) && (n(this, p).openClose(), n(this, p).focus());
  }
  // Outside Listeners
  scrollWindowHandler() {
    this.updateListPosition();
  }
  focusWindowHandler(e) {
    var s, i, o;
    ((s = this.srcElement) == null ? void 0 : s.contains(e.target)) || ((i = n(this, h)) == null ? void 0 : i.srcElement.contains(e.target)) || ((o = n(this, p)) == null || o.blur(), a(this, W, de).call(this, !1), a(this, $, ce).call(this, !1));
  }
  blurWindowHandler() {
    var e;
    (e = n(this, p)) == null || e.blur(), a(this, W, de).call(this, !1), a(this, $, ce).call(this, !1);
  }
  // Update direction of the list. Support appendToBody and standard mode with absolute
  updateListPosition() {
    var O;
    const e = this.srcElement, t = (O = n(this, h)) == null ? void 0 : O.srcElement;
    if (!e || !t)
      return;
    const { height: s } = t.getBoundingClientRect(), {
      x: i,
      y: o,
      height: d,
      width: u
    } = e.getBoundingClientRect(), f = window.innerHeight, C = o, b = f - o - d;
    let g = C > b && C >= s && b < s;
    if (this.direction !== "auto" && (g = this.direction === "top"), this.appendToBody) {
      (t.style.top !== "0px" || t.style.left !== "0px") && (t.style.top = "0px", t.style.left = "0px");
      const P = i + window.scrollX, R = g ? o + window.scrollY - s : o + window.scrollY + d;
      t.style.transform = `translate(${P}px,${R}px)`, t.style.width = `${u}px`;
    }
    const w = g ? "top" : "bottom";
    t.getAttribute("direction") !== w && (t.setAttribute("direction", w), a(this, at, Is).call(this, g, this.appendToBody));
  }
}
h = new WeakMap(), p = new WeakMap(), F = new WeakMap(), ee = new WeakMap(), q = new WeakMap(), x = new WeakMap(), S = new WeakMap(), L = new WeakMap(), V = new WeakMap(), te = new WeakSet(), Lt = function(e) {
  var o;
  this.destroy();
  const { container: t, list: s, input: i } = a(this, Je, Ss).call(this);
  this.srcElement = t, m(this, h, s), m(this, p, i), m(this, x, this.scrollWindowHandler.bind(this)), m(this, S, this.scrollWindowHandler.bind(this)), m(this, L, this.focusWindowHandler.bind(this)), m(this, V, this.blurWindowHandler.bind(this)), this.alwaysOpen && ((o = n(this, p)) == null || o.openClose()), this.disabled ? this.srcElement.classList.add("treeselect--disabled") : this.srcElement.classList.remove("treeselect--disabled"), this.updateValue(e ?? this.value);
}, j = new WeakSet(), re = function({ groupedNodes: e, nodes: t }) {
  this.ungroupedValue = t ? Ct(t) : [], this.groupedValue = e ? Ct(e) : [];
  const s = this.isGroupedValue || this.isSingleSelect ? this.groupedValue : this.ungroupedValue;
  this.value = xi(s, this.isSingleSelect);
}, Je = new WeakSet(), Ss = function() {
  const e = this.parentHtmlContainer;
  e.classList.add("treeselect");
  const t = new Li({
    options: this.options,
    value: this.ungroupedValue,
    openLevel: this.openLevel,
    listSlotHtmlComponent: this.listSlotHtmlComponent,
    emptyText: this.emptyText,
    isSingleSelect: this.isSingleSelect,
    showCount: this.showCount,
    disabledBranchNode: this.disabledBranchNode,
    expandSelected: this.expandSelected,
    iconElements: this.iconElements,
    inputCallback: (d) => a(this, it, Ps).call(this, d),
    arrowClickCallback: () => a(this, lt, Bs).call(this),
    mouseupCallback: () => {
      var d;
      return (d = n(this, p)) == null ? void 0 : d.focus();
    }
  }), { groupedNodes: s, nodes: i } = t.selectedNodes, o = new ei({
    value: this.grouped || this.isSingleSelect ? s : i,
    showTags: this.showTags,
    tagsCountText: this.tagsCountText,
    clearable: this.clearable,
    isAlwaysOpened: this.alwaysOpen,
    searchable: this.searchable,
    placeholder: this.placeholder,
    disabled: this.disabled,
    isSingleSelect: this.isSingleSelect,
    id: this.id,
    iconElements: this.iconElements,
    inputCallback: (d) => a(this, Ze, _s).call(this, d),
    searchCallback: (d) => a(this, et, Ts).call(this, d),
    openCallback: () => a(this, ot, Ds).call(this),
    closeCallback: () => a(this, se, yt).call(this),
    keydownCallback: (d) => a(this, Qe, As).call(this, d),
    focusCallback: () => a(this, tt, Ns).call(this),
    blurCallback: () => a(this, st, Os).call(this),
    nameChangeCallback: (d) => a(this, nt, Vs).call(this, d)
  });
  return this.appendToBody && m(this, F, new ResizeObserver(() => this.updateListPosition())), e.append(o.srcElement), { container: e, list: t, input: o };
}, Ze = new WeakSet(), _s = function(e) {
  var o, d, u, f, C;
  const t = Ct(e);
  (o = n(this, h)) == null || o.updateValue(t);
  const s = (u = (d = n(this, h)) == null ? void 0 : d.selectedNodes) == null ? void 0 : u.nodes, i = (C = (f = n(this, h)) == null ? void 0 : f.selectedNodes) == null ? void 0 : C.groupedNodes;
  a(this, j, re).call(this, { groupedNodes: i, nodes: s }), a(this, le, St).call(this);
}, Qe = new WeakSet(), As = function(e) {
  var t;
  this.isListOpened && ((t = n(this, h)) == null || t.callKeyAction(e));
}, et = new WeakSet(), Ts = function(e) {
  n(this, q) && clearTimeout(n(this, q)), m(this, q, setTimeout(() => {
    var t;
    (t = n(this, h)) == null || t.updateSearchValue(e), this.updateListPosition();
  }, 350));
}, tt = new WeakSet(), Ns = function() {
  a(this, $, ce).call(this, !0), n(this, L) && n(this, L) && n(this, V) && (document.addEventListener("mousedown", n(this, L), !0), document.addEventListener("focus", n(this, L), !0), window.addEventListener("blur", n(this, V)));
}, st = new WeakSet(), Os = function() {
  setTimeout(() => {
    var s, i;
    const e = (s = n(this, p)) == null ? void 0 : s.srcElement.contains(document.activeElement), t = (i = n(this, h)) == null ? void 0 : i.srcElement.contains(document.activeElement);
    !e && !t && this.blurWindowHandler();
  }, 1);
}, it = new WeakSet(), Ps = function(e) {
  var o, d, u, f;
  const { groupedNodes: t, nodes: s } = e, i = this.grouped || this.isSingleSelect ? t : s;
  (o = n(this, p)) == null || o.updateValue(i), a(this, j, re).call(this, { groupedNodes: t, nodes: s }), this.isSingleSelect && !this.alwaysOpen && ((d = n(this, p)) == null || d.openClose(), (u = n(this, p)) == null || u.clearSearch()), (f = n(this, p)) == null || f.focus(), a(this, le, St).call(this);
}, lt = new WeakSet(), Bs = function() {
  var e;
  (e = n(this, p)) == null || e.focus(), this.updateListPosition();
}, nt = new WeakSet(), Vs = function(e) {
  this.selectedName !== e && (this.selectedName = e, a(this, ct, Gs).call(this));
}, ot = new WeakSet(), Ds = function() {
  var e;
  this.isListOpened = !0, n(this, x) && n(this, S) && (window.addEventListener("scroll", n(this, x), !0), window.addEventListener("resize", n(this, S))), !(!n(this, h) || !this.srcElement) && (this.appendToBody ? (document.body.appendChild(n(this, h).srcElement), (e = n(this, F)) == null || e.observe(this.srcElement)) : this.srcElement.appendChild(n(this, h).srcElement), this.updateListPosition(), a(this, ie, xt).call(this, !0), a(this, rt, Hs).call(this), a(this, dt, Ms).call(this));
}, se = new WeakSet(), yt = function() {
  var t;
  this.alwaysOpen || (this.isListOpened = !1, n(this, x) && n(this, S) && (window.removeEventListener("scroll", n(this, x), !0), window.removeEventListener("resize", n(this, S))), !n(this, h) || !this.srcElement) || !(this.appendToBody ? document.body.contains(n(this, h).srcElement) : this.srcElement.contains(n(this, h).srcElement)) || (m(this, ee, n(this, h).srcElement.scrollTop), this.appendToBody ? (document.body.removeChild(n(this, h).srcElement), (t = n(this, F)) == null || t.disconnect()) : this.srcElement.removeChild(n(this, h).srcElement), a(this, ie, xt).call(this, !1), a(this, ht, Fs).call(this));
}, at = new WeakSet(), Is = function(e, t) {
  if (!n(this, h) || !n(this, p))
    return;
  const s = t ? "treeselect-list--top-to-body" : "treeselect-list--top", i = t ? "treeselect-list--bottom-to-body" : "treeselect-list--bottom";
  e ? (n(this, h).srcElement.classList.add(s), n(this, h).srcElement.classList.remove(i), n(this, p).srcElement.classList.add("treeselect-input--top"), n(this, p).srcElement.classList.remove("treeselect-input--bottom")) : (n(this, h).srcElement.classList.remove(s), n(this, h).srcElement.classList.add(i), n(this, p).srcElement.classList.remove("treeselect-input--top"), n(this, p).srcElement.classList.add("treeselect-input--bottom"));
}, $ = new WeakSet(), ce = function(e) {
  !n(this, p) || !n(this, h) || (e ? (n(this, p).srcElement.classList.add("treeselect-input--focused"), n(this, h).srcElement.classList.add("treeselect-list--focused")) : (n(this, p).srcElement.classList.remove("treeselect-input--focused"), n(this, h).srcElement.classList.remove("treeselect-list--focused")));
}, ie = new WeakSet(), xt = function(e) {
  var t, s, i, o;
  e ? (t = n(this, p)) == null || t.srcElement.classList.add("treeselect-input--opened") : (s = n(this, p)) == null || s.srcElement.classList.remove("treeselect-input--opened"), this.staticList ? (i = n(this, h)) == null || i.srcElement.classList.add("treeselect-list--static") : (o = n(this, h)) == null || o.srcElement.classList.remove("treeselect-list--static");
}, W = new WeakSet(), de = function(e) {
  !n(this, x) || !n(this, S) || !n(this, L) || !n(this, V) || ((!this.alwaysOpen || e) && (window.removeEventListener("scroll", n(this, x), !0), window.removeEventListener("resize", n(this, S))), document.removeEventListener("mousedown", n(this, L), !0), document.removeEventListener("focus", n(this, L), !0), window.removeEventListener("blur", n(this, V)));
}, rt = new WeakSet(), Hs = function() {
  var t, s, i;
  const e = (t = n(this, h)) == null ? void 0 : t.isLastFocusedElementExist();
  this.saveScrollPosition && e ? (s = n(this, h)) == null || s.srcElement.scroll(0, n(this, ee)) : (i = n(this, h)) == null || i.focusFirstListElement();
}, le = new WeakSet(), St = function() {
  var e;
  (e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("input", { detail: this.value })), this.inputCallback && this.inputCallback(this.value);
}, ct = new WeakSet(), Gs = function() {
  var e;
  (e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("name-change", { detail: this.selectedName })), this.nameChangeCallback && this.nameChangeCallback(this.selectedName);
}, dt = new WeakSet(), Ms = function() {
  var e;
  this.alwaysOpen || ((e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("open", { detail: this.value })), this.openCallback && this.openCallback(this.value));
}, ht = new WeakSet(), Fs = function() {
  var e;
  this.alwaysOpen || ((e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("close", { detail: this.value })), this.closeCallback && this.closeCallback(this.value));
};
export {
  _i as default
};
