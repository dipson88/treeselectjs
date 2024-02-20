var hi = Object.defineProperty;
var di = (l, e, t) => e in l ? hi(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t;
var c = (l, e, t) => (di(l, typeof e != "symbol" ? e + "" : e, t), t), wt = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
};
var n = (l, e, t) => (wt(l, e, "read from private field"), t ? t.call(l) : e.get(l)), r = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, m = (l, e, t, s) => (wt(l, e, "write to private field"), s ? s.call(l, t) : e.set(l, t), t);
var o = (l, e, t) => (wt(l, e, "access private method"), t);
const Vt = {
  arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',
  arrowDown: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  attention: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
  clear: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
  cross: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  partialCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'
}, P = (l, e) => {
  if (e.innerHTML = "", typeof l == "string")
    e.innerHTML = l;
  else {
    const t = l.cloneNode(!0);
    e.appendChild(t);
  }
}, Dt = (l) => {
  const e = l ? { ...l } : {};
  return Object.keys(Vt).forEach((t) => {
    e[t] || (e[t] = Vt[t]);
  }), e;
}, ui = (l) => l.reduce((e, { name: t }, s) => (e += t, s < l.length - 1 && (e += ", "), e), "");
var _, k, H, v, ue, Mt, G, W, pe, Ft, me, qt, M, U, T, D, fe, jt, Ce, Rt, be, $t, ge, Wt, ke, Ut, we, zt, Ee, Yt, ve, Kt, Le, Xt, ye, Jt, Se, Zt, xe, Qt, _e, es, Ae, ts, Oe, ss, Ne, is, z, Et;
class pi {
  constructor({
    value: e,
    showTags: t,
    tagsCountText: s,
    clearable: i,
    isAlwaysOpened: a,
    searchable: h,
    placeholder: d,
    disabled: b,
    isSingleSelect: f,
    id: C,
    ariaLabel: g,
    iconElements: w,
    showPlaceholderOnOpen: E,
    inputCallback: S,
    searchCallback: x,
    openCallback: V,
    closeCallback: ae,
    keydownCallback: bt,
    focusCallback: gt,
    blurCallback: oe,
    nameChangeCallback: kt
  }) {
    // Private methods
    r(this, ue);
    r(this, G);
    r(this, pe);
    r(this, me);
    r(this, M);
    r(this, T);
    r(this, fe);
    r(this, Ce);
    r(this, be);
    r(this, ge);
    r(this, ke);
    r(this, we);
    r(this, Ee);
    r(this, ve);
    r(this, Le);
    r(this, ye);
    r(this, Se);
    r(this, xe);
    r(this, _e);
    r(this, Ae);
    r(this, Oe);
    r(this, Ne);
    // Emits
    r(this, z);
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
    c(this, "ariaLabel");
    c(this, "iconElements");
    c(this, "showPlaceholderOnOpen");
    // InnerState
    c(this, "isOpened");
    c(this, "searchText");
    c(this, "srcElement");
    // PrivateInnerState
    r(this, _, void 0);
    r(this, k, void 0);
    r(this, H, void 0);
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
    this.value = e, this.showTags = t, this.tagsCountText = s, this.searchable = h, this.placeholder = d, this.clearable = i, this.isAlwaysOpened = a, this.disabled = b, this.isSingleSelect = f, this.id = C, this.ariaLabel = g, this.iconElements = w, this.showPlaceholderOnOpen = E ?? !1, this.isOpened = !1, this.searchText = "", m(this, _, o(this, be, $t).call(this)), m(this, k, o(this, Le, Xt).call(this)), m(this, H, o(this, xe, Qt).call(this)), m(this, v, null), this.inputCallback = S, this.searchCallback = x, this.openCallback = V, this.closeCallback = ae, this.keydownCallback = bt, this.focusCallback = gt, this.blurCallback = oe, this.nameChangeCallback = kt, this.srcElement = o(this, fe, jt).call(this, n(this, _), n(this, k), n(this, H)), o(this, ue, Mt).call(this);
  }
  // Public methods
  focus() {
    setTimeout(() => n(this, k).focus(), 0);
  }
  blur() {
    this.isOpened && o(this, T, D).call(this), this.clearSearch(), n(this, k).blur();
  }
  updateValue(e) {
    this.value = e, o(this, G, W).call(this), o(this, M, U).call(this);
  }
  removeItem(e) {
    this.value = this.value.filter((t) => t.id !== e), o(this, z, Et).call(this), o(this, G, W).call(this), o(this, M, U).call(this);
  }
  clear() {
    this.value = [], o(this, z, Et).call(this), o(this, G, W).call(this), this.clearSearch();
  }
  openClose() {
    o(this, T, D).call(this);
  }
  clearSearch() {
    this.searchText = "", this.searchCallback(""), o(this, M, U).call(this);
  }
}
_ = new WeakMap(), k = new WeakMap(), H = new WeakMap(), v = new WeakMap(), ue = new WeakSet(), Mt = function() {
  o(this, G, W).call(this), o(this, M, U).call(this), o(this, pe, Ft).call(this);
}, G = new WeakSet(), W = function() {
  if (n(this, _).innerHTML = "", this.showTags) {
    n(this, _).append(...o(this, ge, Wt).call(this));
    const e = ui(this.value);
    this.nameChangeCallback(e);
  } else {
    const e = o(this, ve, Kt).call(this);
    n(this, _).appendChild(e), this.nameChangeCallback(e.innerText);
  }
  n(this, _).appendChild(n(this, k));
}, pe = new WeakSet(), Ft = function() {
  const e = [];
  n(this, H).innerHTML = "", this.clearable && e.push(o(this, _e, es).call(this)), this.isAlwaysOpened || e.push(o(this, Oe, ss).call(this, this.isOpened)), e.length && n(this, H).append(...e);
}, me = new WeakSet(), qt = function() {
  if (!this.isAlwaysOpened && n(this, v)) {
    const e = this.isOpened ? this.iconElements.arrowUp : this.iconElements.arrowDown;
    P(e, n(this, v));
  }
}, M = new WeakSet(), U = function() {
  var e;
  (e = this.value) != null && e.length ? (n(this, k).removeAttribute("placeholder"), this.srcElement.classList.remove("treeselect-input--value-not-selected")) : (n(this, k).setAttribute("placeholder", this.placeholder), this.srcElement.classList.add("treeselect-input--value-not-selected")), this.searchable ? this.srcElement.classList.remove("treeselect-input--unsearchable") : this.srcElement.classList.add("treeselect-input--unsearchable"), this.isSingleSelect ? this.srcElement.classList.add("treeselect-input--is-single-select") : this.srcElement.classList.remove("treeselect-input--is-single-select"), n(this, k).value = this.searchText;
}, T = new WeakSet(), D = function() {
  this.isOpened = !this.isOpened, o(this, me, qt).call(this);
  const e = n(this, _).querySelector(".treeselect-input__tags-count");
  this.isOpened ? (this.showPlaceholderOnOpen && this.isSingleSelect && this.value.length && (e == null || e.setAttribute("style", "display: none;"), n(this, k).setAttribute("placeholder", this.placeholder)), this.openCallback()) : (this.showPlaceholderOnOpen && this.isSingleSelect && this.value.length && (e == null || e.setAttribute("style", "display: block;"), n(this, k).removeAttribute("placeholder")), this.closeCallback());
}, fe = new WeakSet(), jt = function(e, t, s) {
  const i = document.createElement("div");
  return i.classList.add("treeselect-input"), i.setAttribute("tabindex", "-1"), i.addEventListener("mousedown", (a) => o(this, Ce, Rt).call(this, a)), i.addEventListener("focus", () => this.focusCallback(), !0), i.addEventListener("blur", () => this.blurCallback(), !0), e.appendChild(t), i.append(e, s), i;
}, Ce = new WeakSet(), Rt = function(e) {
  e.stopPropagation(), this.isOpened || o(this, T, D).call(this), this.focus();
}, be = new WeakSet(), $t = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-input__tags"), e;
}, ge = new WeakSet(), Wt = function() {
  return this.value.map((e) => {
    const t = document.createElement("div");
    t.classList.add("treeselect-input__tags-element"), t.setAttribute("tabindex", "-1"), t.setAttribute("tag-id", e.id.toString()), t.setAttribute("title", e.name);
    const s = o(this, we, zt).call(this, e.name), i = o(this, Ee, Yt).call(this);
    return t.addEventListener("mousedown", (a) => o(this, ke, Ut).call(this, a, e.id)), t.append(s, i), t;
  });
}, ke = new WeakSet(), Ut = function(e, t) {
  e.preventDefault(), e.stopPropagation(), this.removeItem(t), this.focus();
}, we = new WeakSet(), zt = function(e) {
  const t = document.createElement("span");
  return t.classList.add("treeselect-input__tags-name"), t.textContent = e, t;
}, Ee = new WeakSet(), Yt = function() {
  const e = document.createElement("span");
  return e.classList.add("treeselect-input__tags-cross"), P(this.iconElements.cross, e), e;
}, ve = new WeakSet(), Kt = function() {
  const e = document.createElement("span");
  if (e.classList.add("treeselect-input__tags-count"), !this.value.length)
    return e.textContent = "", e.setAttribute("title", ""), e;
  const t = this.value.length === 1 ? this.value[0].name : `${this.value.length} ${this.tagsCountText}`;
  return e.textContent = t, e.setAttribute("title", t), e;
}, Le = new WeakSet(), Xt = function() {
  const e = document.createElement("input");
  return e.classList.add("treeselect-input__edit"), this.id && e.setAttribute("id", this.id), (!this.searchable || this.disabled) && e.setAttribute("readonly", "readonly"), this.disabled && e.setAttribute("tabindex", "-1"), this.ariaLabel.length && e.setAttribute("aria-label", this.ariaLabel), e.addEventListener("keydown", (t) => o(this, ye, Jt).call(this, t)), e.addEventListener("input", (t) => o(this, Se, Zt).call(this, t, e)), e;
}, ye = new WeakSet(), Jt = function(e) {
  e.stopPropagation();
  const t = e.key;
  t === "Backspace" && !this.searchText.length && this.value.length && !this.showTags && this.clear(), t === "Backspace" && !this.searchText.length && this.value.length && this.removeItem(this.value[this.value.length - 1].id), e.code === "Space" && (!this.searchText || !this.searchable) && o(this, T, D).call(this), (t === "Enter" || t === "ArrowDown" || t === "ArrowUp") && e.preventDefault(), this.keydownCallback(e), t !== "Tab" && this.focus();
}, Se = new WeakSet(), Zt = function(e, t) {
  e.stopPropagation();
  const s = this.searchText, i = t.value.trim();
  if (s.length === 0 && i.length === 0) {
    t.value = "";
    return;
  }
  if (this.searchable) {
    const a = e.target.value;
    this.searchCallback(a), this.isOpened || o(this, T, D).call(this);
  } else
    t.value = "";
  this.searchText = t.value;
}, xe = new WeakSet(), Qt = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-input__operators"), e;
}, _e = new WeakSet(), es = function() {
  const e = document.createElement("span");
  return e.classList.add("treeselect-input__clear"), e.setAttribute("tabindex", "-1"), P(this.iconElements.clear, e), e.addEventListener("mousedown", (t) => o(this, Ae, ts).call(this, t)), e;
}, Ae = new WeakSet(), ts = function(e) {
  e.preventDefault(), e.stopPropagation(), (this.searchText.length || this.value.length) && this.clear(), this.focus();
}, Oe = new WeakSet(), ss = function(e) {
  m(this, v, document.createElement("span")), n(this, v).classList.add("treeselect-input__arrow");
  const t = e ? this.iconElements.arrowUp : this.iconElements.arrowDown;
  return P(t, n(this, v)), n(this, v).addEventListener("mousedown", (s) => o(this, Ne, is).call(this, s)), n(this, v);
}, Ne = new WeakSet(), is = function(e) {
  e.stopPropagation(), e.preventDefault(), this.focus(), o(this, T, D).call(this);
}, z = new WeakSet(), Et = function() {
  this.inputCallback(this.value);
};
const vt = (l, e, t, s) => {
  bi(e);
  const i = e.filter((a) => !a.disabled && l.some((h) => h === a.id));
  if (t && i.length) {
    i[0].checked = !0;
    return;
  }
  i.forEach((a) => {
    a.checked = !0;
    const h = Bt(a, e, s);
    a.checked = h;
  });
}, Bt = ({ id: l, checked: e }, t, s) => {
  const i = t.find((h) => h.id === l);
  if (!i)
    return !1;
  if (s)
    return i.checked = i.disabled ? !1 : !!e, i.checked;
  const a = ls(!!e, i, t);
  return ns(i, t), a;
}, ls = (l, e, t) => {
  if (!e.isGroup)
    return e.checked = e.disabled ? !1 : !!l, e.isPartialChecked = !1, e.checked;
  const s = t.filter((d) => d.childOf === e.id);
  return !l || e.disabled || e.isPartialChecked ? (e.checked = !1, e.isPartialChecked = !1, Lt(e, s, t), e.checked) : as(s, t) ? os(s) ? (e.checked = !1, e.isPartialChecked = !1, e.disabled = !0, e.checked) : (e.checked = !1, e.isPartialChecked = !0, s.forEach((d) => {
    ls(l, d, t);
  }), e.checked) : (e.checked = !0, e.isPartialChecked = !1, Lt(e, s, t), e.checked);
}, ns = (l, e) => {
  const t = e.find((s) => s.id === l.childOf);
  t && (mi(t, e), ns(t, e));
}, mi = (l, e) => {
  const t = ft(l, e);
  if (os(t)) {
    l.checked = !1, l.isPartialChecked = !1, l.disabled = !0;
    return;
  }
  if (fi(t)) {
    l.checked = !0, l.isPartialChecked = !1;
    return;
  }
  if (Ci(t)) {
    l.checked = !1, l.isPartialChecked = !0;
    return;
  }
  l.checked = !1, l.isPartialChecked = !1;
}, Lt = ({ checked: l, disabled: e }, t, s) => {
  t.forEach((i) => {
    i.disabled = !!e || !!i.disabled, i.checked = !!l && !i.disabled, i.isPartialChecked = !1;
    const a = ft(i, s);
    Lt({ checked: l, disabled: e }, a, s);
  });
}, as = (l, e) => l.some((i) => i.disabled) ? !0 : l.some((i) => {
  if (i.isGroup) {
    const a = ft(i, e);
    return as(a, e);
  }
  return !1;
}), os = (l) => l.every((e) => !!e.disabled), fi = (l) => l.every((e) => !!e.checked), Ci = (l) => l.some((e) => !!e.checked || !!e.isPartialChecked), bi = (l) => {
  l.forEach((e) => {
    e.checked = !1, e.isPartialChecked = !1;
  });
}, gi = (l, e, t) => {
  const s = { level: 0, groupId: "" }, i = rs(l, e, s.groupId, s.level);
  return wi(i, t);
}, rs = (l, e, t, s) => l.reduce((i, a) => {
  var f;
  const h = !!((f = a.children) != null && f.length), d = s >= e && h, b = s > e;
  if (i.push({
    id: a.value,
    name: a.name,
    childOf: t,
    isGroup: h,
    checked: !1,
    isPartialChecked: !1,
    level: s,
    isClosed: d,
    hidden: b,
    disabled: a.disabled ?? !1
  }), h) {
    const C = rs(a.children, e, a.value, s + 1);
    i.push(...C);
  }
  return i;
}, []), ft = ({ id: l }, e) => e.filter((t) => t.childOf === l), ki = (l) => {
  const { ungroupedNodes: e, allGroupedNodes: t, allNodes: s } = l.reduce(
    (a, h) => (h.checked && (a.allNodes.push(h), h.isGroup ? a.allGroupedNodes.push(h) : a.ungroupedNodes.push(h)), a),
    {
      ungroupedNodes: [],
      allGroupedNodes: [],
      allNodes: []
    }
  ), i = s.filter((a) => !t.some(({ id: h }) => h === a.childOf));
  return { ungroupedNodes: e, groupedNodes: i, allNodes: s };
}, wi = (l, e) => (l.filter((s) => !!s.disabled).forEach(
  ({ id: s }) => Bt({ id: s, checked: !1 }, l, e)
), l), Ct = (l, { id: e, isClosed: t }) => {
  ft({ id: e }, l).forEach((i) => {
    i.hidden = t ?? !1, i.isGroup && !i.isClosed && Ct(l, { id: i.id, isClosed: t });
  });
}, Ei = (l) => {
  l.filter((e) => e.isGroup && !e.disabled && (e.checked || e.isPartialChecked)).forEach((e) => {
    e.isClosed = !1, Ct(l, e);
  });
}, vi = (l, e) => {
  const t = Li(l, e);
  l.forEach((s) => {
    t.some(({ id: a }) => a === s.id) ? (s.isGroup && (s.isClosed = !1, Ct(l, s)), s.hidden = !1) : s.hidden = !0;
  });
}, Li = (l, e) => l.reduce((t, s) => {
  if (s.name.toLowerCase().includes(e.toLowerCase())) {
    if (t.push(s), s.isGroup) {
      const a = cs(s.id, l);
      t.push(...a);
    }
    if (s.childOf) {
      const a = hs(s.childOf, l);
      t.push(...a);
    }
  }
  return t;
}, []), cs = (l, e) => e.reduce((t, s) => (s.childOf === l && (t.push(s), s.isGroup && t.push(...cs(s.id, e))), t), []), hs = (l, e) => e.reduce((t, s) => (s.id === l && (t.push(s), s.childOf && t.push(...hs(s.childOf, e))), t), []), yi = (l) => {
  const { duplications: e } = l.reduce(
    (t, s) => (t.allItems.some((i) => i.toString() === s.id.toString()) && t.duplications.push(s.id), t.allItems.push(s.id), t),
    {
      duplications: [],
      allItems: []
    }
  );
  e.length && console.error(`Validation: You have duplicated values: ${e.join(", ")}! You should use unique values.`);
}, Si = (l, e, t, s, i, a, h, d, b, f) => {
  vt(l, e, i, b), d && h && Ei(e), ce(e, t, s, a, f);
}, ce = (l, e, t, s, i) => {
  l.forEach((a) => {
    const h = e.querySelector(`[input-id="${a.id}"]`), d = N(h);
    h.checked = a.checked, xi(a, d, s), _i(a, d), Ai(a, d), Oi(a, d, t), Ni(a, d), Pi(a, d, l, i), Ti(a, h, t);
  }), Ii(l, e);
}, xi = (l, e, t) => {
  l.checked ? e.classList.add("treeselect-list__item--checked") : e.classList.remove("treeselect-list__item--checked"), Array.isArray(t) && t[0] === l.id && !l.disabled ? e.classList.add("treeselect-list__item--single-selected") : e.classList.remove("treeselect-list__item--single-selected");
}, _i = (l, e) => {
  l.isPartialChecked ? e.classList.add("treeselect-list__item--partial-checked") : e.classList.remove("treeselect-list__item--partial-checked");
}, Ai = (l, e) => {
  l.disabled ? e.classList.add("treeselect-list__item--disabled") : e.classList.remove("treeselect-list__item--disabled");
}, Oi = (l, e, t) => {
  if (l.isGroup) {
    const s = e.querySelector(".treeselect-list__item-icon"), i = l.isClosed ? t.arrowRight : t.arrowDown;
    P(i, s), l.isClosed ? e.classList.add("treeselect-list__item--closed") : e.classList.remove("treeselect-list__item--closed");
  }
}, Ni = (l, e) => {
  l.hidden ? e.classList.add("treeselect-list__item--hidden") : e.classList.remove("treeselect-list__item--hidden");
}, Ti = (l, e, t) => {
  const i = e.parentNode.querySelector(".treeselect-list__item-checkbox-icon");
  l.checked ? P(t.check, i) : l.isPartialChecked ? P(t.partialCheck, i) : i.innerHTML = "";
}, Pi = (l, e, t, s) => {
  const i = l.level === 0, a = 20, h = 5;
  if (i) {
    const d = t.some((C) => C.isGroup && C.level === l.level), b = !l.isGroup && d ? `${a}px` : `${h}px`, f = l.isGroup ? "0" : b;
    s ? e.style.paddingRight = f : e.style.paddingLeft = f;
  } else {
    const d = l.isGroup ? `${l.level * a}px` : `${l.level * a + a}px`;
    s ? e.style.paddingRight = d : e.style.paddingLeft = d;
  }
  e.setAttribute("level", l.level.toString()), e.setAttribute("group", l.isGroup.toString());
}, Ii = (l, e) => {
  const t = l.some((i) => !i.hidden), s = e.querySelector(".treeselect-list__empty");
  t ? s.classList.add("treeselect-list__empty--hidden") : s.classList.remove("treeselect-list__empty--hidden");
}, N = (l) => l.parentNode.parentNode, Ht = (l, e) => e.find((t) => t.id.toString() === l), Bi = (l) => N(l).querySelector(".treeselect-list__item-icon"), Vi = (l, e) => {
  e && Object.keys(e).forEach((t) => {
    const s = e[t];
    typeof s == "string" && l.setAttribute(t, s);
  });
};
var F, I, L, Y, Te, ds, Pe, us, Ie, ps, Be, ms, Ve, fs, De, Cs, K, yt, He, bs, Ge, gs, Me, ks, X, St, Fe, ws, qe, Es, je, vs, Re, Ls, $e, ys, We, Ss, Ue, xs, ze, _s, Ye, As, Ke, Os, Xe, Ns, J, xt, Z, _t, Je, Ts;
class Di {
  constructor({
    options: e,
    value: t,
    openLevel: s,
    listSlotHtmlComponent: i,
    emptyText: a,
    isSingleSelect: h,
    iconElements: d,
    unselectOnClickSingleSelected: b,
    showCount: f,
    disabledBranchNode: C,
    expandSelected: g,
    isIndependentNodes: w,
    rtl: E,
    inputCallback: S,
    arrowClickCallback: x,
    mouseupCallback: V
  }) {
    // Private methods
    r(this, Te);
    r(this, Pe);
    r(this, Ie);
    r(this, Be);
    r(this, Ve);
    r(this, De);
    r(this, K);
    r(this, He);
    r(this, Ge);
    r(this, Me);
    r(this, X);
    r(this, Fe);
    r(this, qe);
    r(this, je);
    r(this, Re);
    r(this, $e);
    r(this, We);
    r(this, Ue);
    r(this, ze);
    r(this, Ye);
    // Actions
    r(this, Ke);
    r(this, Xe);
    r(this, J);
    r(this, Z);
    // Emits
    r(this, Je);
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
    c(this, "isIndependentNodes");
    c(this, "rtl");
    c(this, "iconElements");
    c(this, "unselectOnClickSingleSelected");
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
    r(this, F, null);
    r(this, I, !0);
    r(this, L, []);
    r(this, Y, !0);
    this.options = e, this.value = t, this.openLevel = s ?? 0, this.listSlotHtmlComponent = i ?? null, this.emptyText = a ?? "No results found...", this.isSingleSelect = h ?? !1, this.showCount = f ?? !1, this.disabledBranchNode = C ?? !1, this.expandSelected = g ?? !1, this.isIndependentNodes = w ?? !1, this.rtl = E ?? !1, this.iconElements = d, this.unselectOnClickSingleSelected = b ?? !1, this.searchText = "", this.flattedOptions = gi(this.options, this.openLevel, this.isIndependentNodes), this.flattedOptionsBeforeSearch = this.flattedOptions, this.selectedNodes = { nodes: [], groupedNodes: [], allNodes: [] }, this.srcElement = o(this, Ie, ps).call(this), this.inputCallback = S, this.arrowClickCallback = x, this.mouseupCallback = V, yi(this.flattedOptions);
  }
  // Public methods
  updateValue(e) {
    this.value = e, m(this, L, this.isSingleSelect ? this.value : []), Si(
      e,
      this.flattedOptions,
      this.srcElement,
      this.iconElements,
      this.isSingleSelect,
      n(this, L),
      this.expandSelected,
      n(this, Y),
      this.isIndependentNodes,
      this.rtl
    ), m(this, Y, !1), o(this, Z, _t).call(this);
  }
  updateSearchValue(e) {
    if (e === this.searchText)
      return;
    const t = this.searchText === "" && e !== "";
    this.searchText = e, t && (this.flattedOptionsBeforeSearch = JSON.parse(JSON.stringify(this.flattedOptions))), this.searchText === "" && (this.flattedOptions = this.flattedOptionsBeforeSearch.map((s) => {
      const i = this.flattedOptions.find((a) => a.id === s.id);
      return i.isClosed = s.isClosed, i.hidden = s.hidden, i;
    }), this.flattedOptionsBeforeSearch = []), this.searchText && vi(this.flattedOptions, e), ce(this.flattedOptions, this.srcElement, this.iconElements, n(this, L), this.rtl), this.focusFirstListElement();
  }
  callKeyAction(e) {
    m(this, I, !1);
    const t = this.srcElement.querySelector(".treeselect-list__item--focused");
    if (t == null ? void 0 : t.classList.contains("treeselect-list__item--hidden"))
      return;
    const i = e.key;
    i === "Enter" && t && t.dispatchEvent(new Event("mousedown")), (i === "ArrowLeft" || i === "ArrowRight") && o(this, Te, ds).call(this, t, e), (i === "ArrowDown" || i === "ArrowUp") && o(this, Pe, us).call(this, t, i);
  }
  focusFirstListElement() {
    const e = "treeselect-list__item--focused", t = this.srcElement.querySelector(`.${e}`), s = Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter(
      (a) => window.getComputedStyle(N(a)).display !== "none"
    );
    if (!s.length)
      return;
    t && t.classList.remove(e), N(s[0]).classList.add(e);
  }
  isLastFocusedElementExist() {
    return !!n(this, F);
  }
}
F = new WeakMap(), I = new WeakMap(), L = new WeakMap(), Y = new WeakMap(), Te = new WeakSet(), ds = function(e, t) {
  if (!e)
    return;
  const s = t.key, a = e.querySelector(".treeselect-list__item-checkbox").getAttribute("input-id"), h = Ht(a, this.flattedOptions), d = e.querySelector(".treeselect-list__item-icon");
  s === "ArrowLeft" && !h.isClosed && h.isGroup && (d.dispatchEvent(new Event("mousedown")), t.preventDefault()), s === "ArrowRight" && h.isClosed && h.isGroup && (d.dispatchEvent(new Event("mousedown")), t.preventDefault());
}, Pe = new WeakSet(), us = function(e, t) {
  var i;
  const s = Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter(
    (a) => window.getComputedStyle(N(a)).display !== "none"
  );
  if (s.length)
    if (!e)
      N(s[0]).classList.add("treeselect-list__item--focused");
    else {
      const a = s.findIndex(
        (x) => N(x).classList.contains("treeselect-list__item--focused")
      );
      N(s[a]).classList.remove("treeselect-list__item--focused");
      const d = t === "ArrowDown" ? a + 1 : a - 1, b = t === "ArrowDown" ? 0 : s.length - 1, f = s[d] ?? s[b], C = !s[d], g = N(f);
      g.classList.add("treeselect-list__item--focused");
      const w = this.srcElement.getBoundingClientRect(), E = g.getBoundingClientRect();
      if (C && t === "ArrowDown") {
        this.srcElement.scroll(0, 0);
        return;
      }
      if (C && t === "ArrowUp") {
        this.srcElement.scroll(0, this.srcElement.scrollHeight);
        return;
      }
      const S = ((i = this.listSlotHtmlComponent) == null ? void 0 : i.clientHeight) ?? 0;
      if (w.y + w.height < E.y + E.height + S) {
        this.srcElement.scroll(0, this.srcElement.scrollTop + E.height);
        return;
      }
      if (w.y > E.y) {
        this.srcElement.scroll(0, this.srcElement.scrollTop - E.height);
        return;
      }
    }
}, Ie = new WeakSet(), ps = function() {
  const e = o(this, Be, ms).call(this), t = o(this, K, yt).call(this, this.options);
  e.append(...t);
  const s = o(this, Ge, gs).call(this);
  e.append(s);
  const i = o(this, He, bs).call(this);
  return i && e.append(i), e;
}, Be = new WeakSet(), ms = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-list"), this.isSingleSelect && e.classList.add("treeselect-list--single-select"), this.disabledBranchNode && e.classList.add("treeselect-list--disabled-branch-node"), e.addEventListener("mouseout", (t) => o(this, Ve, fs).call(this, t)), e.addEventListener("mousemove", () => o(this, De, Cs).call(this)), e.addEventListener("mouseup", () => this.mouseupCallback(), !0), e;
}, Ve = new WeakSet(), fs = function(e) {
  e.stopPropagation(), n(this, F) && n(this, I) && n(this, F).classList.add("treeselect-list__item--focused");
}, De = new WeakSet(), Cs = function() {
  m(this, I, !0);
}, K = new WeakSet(), yt = function(e) {
  return e.reduce((t, s) => {
    var a;
    if ((a = s.children) != null && a.length) {
      const h = o(this, Me, ks).call(this, s), d = o(this, K, yt).call(this, s.children);
      return h.append(...d), t.push(h), t;
    }
    const i = o(this, X, St).call(this, s, !1);
    return t.push(i), t;
  }, []);
}, He = new WeakSet(), bs = function() {
  if (!this.listSlotHtmlComponent)
    return null;
  const e = document.createElement("div");
  return e.classList.add("treeselect-list__slot"), e.appendChild(this.listSlotHtmlComponent), e;
}, Ge = new WeakSet(), gs = function() {
  const e = document.createElement("div");
  e.classList.add("treeselect-list__empty"), e.setAttribute("title", this.emptyText);
  const t = document.createElement("span");
  t.classList.add("treeselect-list__empty-icon"), P(this.iconElements.attention, t);
  const s = document.createElement("span");
  return s.classList.add("treeselect-list__empty-text"), s.textContent = this.emptyText, e.append(t, s), e;
}, Me = new WeakSet(), ks = function(e) {
  const t = document.createElement("div");
  t.setAttribute("group-container-id", e.value.toString()), t.classList.add("treeselect-list__group-container");
  const s = o(this, X, St).call(this, e, !0);
  return t.appendChild(s), t;
}, X = new WeakSet(), St = function(e, t) {
  const s = o(this, Fe, ws).call(this, e);
  if (t) {
    const h = o(this, $e, ys).call(this);
    s.appendChild(h), s.classList.add("treeselect-list__item--group");
  }
  const i = o(this, Ue, xs).call(this, e), a = o(this, ze, _s).call(this, e, t);
  return s.append(i, a), s;
}, Fe = new WeakSet(), ws = function(e) {
  const t = document.createElement("div");
  return Vi(t, e.htmlAttr), t.setAttribute("tabindex", "-1"), t.setAttribute("title", e.name), t.classList.add("treeselect-list__item"), t.addEventListener("mouseover", () => o(this, qe, Es).call(this, t), !0), t.addEventListener("mouseout", () => o(this, je, vs).call(this, t), !0), t.addEventListener("mousedown", (s) => o(this, Re, Ls).call(this, s, e)), t;
}, qe = new WeakSet(), Es = function(e) {
  n(this, I) && o(this, J, xt).call(this, !0, e);
}, je = new WeakSet(), vs = function(e) {
  n(this, I) && (o(this, J, xt).call(this, !1, e), m(this, F, e));
}, Re = new WeakSet(), Ls = function(e, t) {
  var a;
  if (e.preventDefault(), e.stopPropagation(), (a = this.flattedOptions.find((h) => h.id === t.value)) == null ? void 0 : a.disabled)
    return;
  const i = e.target.querySelector(".treeselect-list__item-checkbox");
  i.checked = !i.checked, o(this, Ke, Os).call(this, i, t);
}, $e = new WeakSet(), ys = function() {
  const e = document.createElement("span");
  return e.setAttribute("tabindex", "-1"), e.classList.add("treeselect-list__item-icon"), P(this.iconElements.arrowDown, e), e.addEventListener("mousedown", (t) => o(this, We, Ss).call(this, t)), e;
}, We = new WeakSet(), Ss = function(e) {
  e.preventDefault(), e.stopPropagation(), o(this, Xe, Ns).call(this, e);
}, Ue = new WeakSet(), xs = function(e) {
  const t = document.createElement("div");
  t.classList.add("treeselect-list__item-checkbox-container");
  const s = document.createElement("span");
  s.classList.add("treeselect-list__item-checkbox-icon"), s.innerHTML = "";
  const i = document.createElement("input");
  return i.setAttribute("tabindex", "-1"), i.setAttribute("type", "checkbox"), i.setAttribute("input-id", e.value.toString()), i.classList.add("treeselect-list__item-checkbox"), t.append(s, i), t;
}, ze = new WeakSet(), _s = function(e, t) {
  const s = document.createElement("label");
  if (s.textContent = e.name, s.classList.add("treeselect-list__item-label"), t && this.showCount) {
    const i = o(this, Ye, As).call(this, e);
    s.appendChild(i);
  }
  return s;
}, Ye = new WeakSet(), As = function(e) {
  const t = document.createElement("span"), s = this.flattedOptions.filter((i) => i.childOf === e.value);
  return t.textContent = `(${s.length})`, t.classList.add("treeselect-list__item-label-counter"), t;
}, Ke = new WeakSet(), Os = function(e, t) {
  const s = this.flattedOptions.find((i) => i.id === t.value);
  if (s) {
    if (s != null && s.isGroup && this.disabledBranchNode) {
      const i = Bi(e);
      i == null || i.dispatchEvent(new Event("mousedown"));
      return;
    }
    if (this.isSingleSelect) {
      const [i] = n(this, L);
      if (s.id === i)
        if (this.unselectOnClickSingleSelected)
          m(this, L, []), vt([], this.flattedOptions, this.isSingleSelect, this.isIndependentNodes);
        else
          return;
      else
        m(this, L, [s.id]), vt([s.id], this.flattedOptions, this.isSingleSelect, this.isIndependentNodes);
    } else {
      s.checked = e.checked;
      const i = Bt(s, this.flattedOptions, this.isIndependentNodes);
      e.checked = i;
    }
    ce(this.flattedOptions, this.srcElement, this.iconElements, n(this, L), this.rtl), o(this, Je, Ts).call(this);
  }
}, Xe = new WeakSet(), Ns = function(e) {
  var a, h;
  const t = (h = (a = e.target) == null ? void 0 : a.parentNode) == null ? void 0 : h.querySelector("[input-id]"), s = (t == null ? void 0 : t.getAttribute("input-id")) ?? null, i = Ht(s, this.flattedOptions);
  i && (i.isClosed = !i.isClosed, Ct(this.flattedOptions, i), ce(this.flattedOptions, this.srcElement, this.iconElements, n(this, L), this.rtl), this.arrowClickCallback(i.id, i.isClosed));
}, J = new WeakSet(), xt = function(e, t) {
  const s = "treeselect-list__item--focused";
  if (e) {
    const i = Array.from(this.srcElement.querySelectorAll(`.${s}`));
    i.length && i.forEach((a) => a.classList.remove(s)), t.classList.add(s);
  } else
    t.classList.remove(s);
}, Z = new WeakSet(), _t = function() {
  const { ungroupedNodes: e, groupedNodes: t, allNodes: s } = ki(this.flattedOptions);
  this.selectedNodes = { nodes: e, groupedNodes: t, allNodes: s };
}, Je = new WeakSet(), Ts = function() {
  o(this, Z, _t).call(this), this.inputCallback(this.selectedNodes), this.value = this.selectedNodes.nodes.map((e) => e.id);
};
const Gt = ({
  parentHtmlContainer: l,
  staticList: e,
  appendToBody: t,
  isSingleSelect: s,
  value: i,
  direction: a
}) => {
  l || console.error("Validation: parentHtmlContainer prop is required!"), e && t && console.error("Validation: You should set staticList to false if you use appendToBody!"), s && Array.isArray(i) && console.error("Validation: if you use isSingleSelect prop, you should pass a single value!"), !s && !Array.isArray(i) && console.error("Validation: you should pass an array as a value!"), a && a !== "auto" && a !== "bottom" && a !== "top" && console.error("Validation: you should pass (auto | top | bottom | undefined) as a value for the direction prop!");
}, re = (l) => l.map((e) => e.id), Hi = (l) => l ? Array.isArray(l) ? l : [l] : [], Gi = (l, e) => {
  if (e) {
    const [t] = l;
    return t ?? null;
  }
  return l;
};
var u, p, q, Q, j, A, O, y, B, ee, At, te, Ot, Ze, Ps, Qe, Is, et, Bs, tt, Vs, st, Ds, it, Hs, se, Nt, lt, Gs, nt, Ms, at, Fs, ot, qs, ie, Tt, rt, js, R, he, le, Pt, $, de, ct, Rs, ne, It, ht, $s, dt, Ws, ut, Us, pt, zs, mt, Ys;
class Fi {
  constructor({
    parentHtmlContainer: e,
    value: t,
    options: s,
    openLevel: i,
    appendToBody: a,
    alwaysOpen: h,
    showTags: d,
    tagsCountText: b,
    clearable: f,
    searchable: C,
    placeholder: g,
    grouped: w,
    isGroupedValue: E,
    listSlotHtmlComponent: S,
    disabled: x,
    emptyText: V,
    staticList: ae,
    id: bt,
    ariaLabel: gt,
    isSingleSelect: oe,
    showCount: kt,
    disabledBranchNode: Ks,
    direction: Xs,
    expandSelected: Js,
    saveScrollPosition: Zs,
    isIndependentNodes: Qs,
    rtl: ei,
    iconElements: ti,
    showPlaceholderOnOpen: si,
    unselectOnClickSingleSelected: ii,
    inputCallback: li,
    openCallback: ni,
    closeCallback: ai,
    nameChangeCallback: oi,
    searchCallback: ri,
    openCloseGroupCallback: ci
  }) {
    r(this, ee);
    r(this, te);
    r(this, Ze);
    r(this, Qe);
    r(this, et);
    r(this, tt);
    r(this, st);
    r(this, it);
    r(this, se);
    r(this, lt);
    r(this, nt);
    r(this, at);
    r(this, ot);
    r(this, ie);
    r(this, rt);
    r(this, R);
    r(this, le);
    r(this, $);
    r(this, ct);
    // Emits
    r(this, ne);
    r(this, ht);
    r(this, dt);
    r(this, ut);
    r(this, pt);
    r(this, mt);
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
    c(this, "ariaLabel");
    c(this, "isSingleSelect");
    c(this, "showCount");
    c(this, "disabledBranchNode");
    c(this, "direction");
    c(this, "expandSelected");
    c(this, "saveScrollPosition");
    c(this, "isIndependentNodes");
    c(this, "rtl");
    c(this, "iconElements");
    c(this, "showPlaceholderOnOpen");
    c(this, "unselectOnClickSingleSelected");
    c(this, "inputCallback");
    c(this, "openCallback");
    c(this, "closeCallback");
    c(this, "nameChangeCallback");
    c(this, "searchCallback");
    c(this, "openCloseGroupCallback");
    // InnerState
    c(this, "ungroupedValue");
    c(this, "groupedValue");
    c(this, "allValue");
    c(this, "isListOpened");
    c(this, "selectedName");
    c(this, "srcElement");
    // Components
    r(this, u, null);
    r(this, p, null);
    // Resize props
    r(this, q, null);
    // List position scroll
    r(this, Q, 0);
    // Timer for search text
    r(this, j, 0);
    // Outside listeners
    r(this, A, null);
    r(this, O, null);
    r(this, y, null);
    r(this, B, null);
    Gt({
      parentHtmlContainer: e,
      value: t,
      staticList: ae,
      appendToBody: a,
      isSingleSelect: oe
    }), this.parentHtmlContainer = e, this.value = [], this.options = s ?? [], this.openLevel = i ?? 0, this.appendToBody = a ?? !1, this.alwaysOpen = !!(h && !x), this.showTags = d ?? !0, this.tagsCountText = b ?? "elements selected", this.clearable = f ?? !0, this.searchable = C ?? !0, this.placeholder = g ?? "Search...", this.grouped = w ?? !0, this.isGroupedValue = E ?? !1, this.listSlotHtmlComponent = S ?? null, this.disabled = x ?? !1, this.emptyText = V ?? "No results found...", this.staticList = !!(ae && !this.appendToBody), this.id = bt ?? "", this.ariaLabel = gt ?? "", this.isSingleSelect = oe ?? !1, this.showCount = kt ?? !1, this.disabledBranchNode = Ks ?? !1, this.direction = Xs ?? "auto", this.expandSelected = Js ?? !1, this.saveScrollPosition = Zs ?? !0, this.isIndependentNodes = Qs ?? !1, this.rtl = ei ?? !1, this.iconElements = Dt(ti), this.showPlaceholderOnOpen = si ?? !1, this.unselectOnClickSingleSelected = ii ?? !1, this.inputCallback = li, this.openCallback = ni, this.closeCallback = ai, this.nameChangeCallback = oi, this.searchCallback = ri, this.openCloseGroupCallback = ci, this.ungroupedValue = [], this.groupedValue = [], this.allValue = [], this.isListOpened = !1, this.selectedName = "", this.srcElement = null, o(this, ee, At).call(this, t);
  }
  mount() {
    Gt({
      parentHtmlContainer: this.parentHtmlContainer,
      value: this.value,
      staticList: this.staticList,
      appendToBody: this.appendToBody,
      isSingleSelect: this.isSingleSelect
    }), this.iconElements = Dt(this.iconElements), o(this, ee, At).call(this, this.value);
  }
  updateValue(e) {
    const t = Hi(e), s = n(this, u);
    s && (s.updateValue(t), o(this, se, Nt).call(this, s == null ? void 0 : s.selectedNodes));
  }
  destroy() {
    this.srcElement && (o(this, ie, Tt).call(this), this.srcElement.innerHTML = "", this.srcElement = null, o(this, $, de).call(this, !0));
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
    var s, i, a;
    ((s = this.srcElement) == null ? void 0 : s.contains(e.target)) || ((i = n(this, u)) == null ? void 0 : i.srcElement.contains(e.target)) || ((a = n(this, p)) == null || a.blur(), o(this, $, de).call(this, !1), o(this, R, he).call(this, !1));
  }
  blurWindowHandler() {
    var e;
    (e = n(this, p)) == null || e.blur(), o(this, $, de).call(this, !1), o(this, R, he).call(this, !1);
  }
  // Update direction of the list. Support appendToBody and standard mode with absolute
  updateListPosition() {
    var S;
    const e = this.srcElement, t = (S = n(this, u)) == null ? void 0 : S.srcElement;
    if (!e || !t)
      return;
    const { height: s } = t.getBoundingClientRect(), {
      x: i,
      y: a,
      height: h,
      width: d
    } = e.getBoundingClientRect(), b = window.innerHeight, f = a, C = b - a - h;
    let g = f > C && f >= s && C < s;
    if (this.direction !== "auto" && (g = this.direction === "top"), this.appendToBody) {
      (t.style.top !== "0px" || t.style.left !== "0px") && (t.style.top = "0px", t.style.left = "0px");
      const x = i + window.scrollX, V = g ? a + window.scrollY - s : a + window.scrollY + h;
      t.style.transform = `translate(${x}px,${V}px)`, t.style.width = `${d}px`;
    }
    const w = g ? "top" : "bottom";
    t.getAttribute("direction") !== w && (t.setAttribute("direction", w), o(this, rt, js).call(this, g, this.appendToBody));
  }
}
u = new WeakMap(), p = new WeakMap(), q = new WeakMap(), Q = new WeakMap(), j = new WeakMap(), A = new WeakMap(), O = new WeakMap(), y = new WeakMap(), B = new WeakMap(), ee = new WeakSet(), At = function(e) {
  var a;
  this.destroy();
  const { container: t, list: s, input: i } = o(this, Ze, Ps).call(this);
  this.srcElement = t, m(this, u, s), m(this, p, i), m(this, A, this.scrollWindowHandler.bind(this)), m(this, O, this.scrollWindowHandler.bind(this)), m(this, y, this.focusWindowHandler.bind(this)), m(this, B, this.blurWindowHandler.bind(this)), this.alwaysOpen && ((a = n(this, p)) == null || a.openClose()), this.disabled ? this.srcElement.classList.add("treeselect--disabled") : this.srcElement.classList.remove("treeselect--disabled"), this.updateValue(e ?? this.value);
}, te = new WeakSet(), Ot = function({
  groupedNodes: e,
  nodes: t,
  allNodes: s
}) {
  this.ungroupedValue = t ? re(t) : [], this.groupedValue = e ? re(e) : [], this.allValue = s ? re(s) : [];
  let i = [];
  this.isIndependentNodes || this.isSingleSelect ? i = this.allValue : this.isGroupedValue ? i = this.groupedValue : i = this.ungroupedValue, this.value = Gi(i, this.isSingleSelect);
}, Ze = new WeakSet(), Ps = function() {
  const e = this.parentHtmlContainer;
  e.classList.add("treeselect"), this.rtl && e.setAttribute("dir", "rtl");
  const t = new Di({
    value: [],
    // updateValue method calls in initMount method to set actual value
    options: this.options,
    openLevel: this.openLevel,
    listSlotHtmlComponent: this.listSlotHtmlComponent,
    emptyText: this.emptyText,
    isSingleSelect: this.isSingleSelect,
    showCount: this.showCount,
    disabledBranchNode: this.disabledBranchNode,
    expandSelected: this.expandSelected,
    isIndependentNodes: this.isIndependentNodes,
    rtl: this.rtl,
    iconElements: this.iconElements,
    unselectOnClickSingleSelected: this.unselectOnClickSingleSelected,
    inputCallback: (i) => o(this, lt, Gs).call(this, i),
    arrowClickCallback: (i, a) => o(this, nt, Ms).call(this, i, a),
    mouseupCallback: () => {
      var i;
      return (i = n(this, p)) == null ? void 0 : i.focus();
    }
  }), s = new pi({
    value: [],
    // updateValue method calls in initMount method to set actual value
    showTags: this.showTags,
    tagsCountText: this.tagsCountText,
    clearable: this.clearable,
    isAlwaysOpened: this.alwaysOpen,
    searchable: this.searchable,
    placeholder: this.placeholder,
    disabled: this.disabled,
    isSingleSelect: this.isSingleSelect,
    id: this.id,
    ariaLabel: this.ariaLabel,
    iconElements: this.iconElements,
    showPlaceholderOnOpen: this.showPlaceholderOnOpen,
    inputCallback: (i) => o(this, Qe, Is).call(this, i),
    searchCallback: (i) => o(this, tt, Vs).call(this, i),
    openCallback: () => o(this, ot, qs).call(this),
    closeCallback: () => o(this, ie, Tt).call(this),
    keydownCallback: (i) => o(this, et, Bs).call(this, i),
    focusCallback: () => o(this, st, Ds).call(this),
    blurCallback: () => o(this, it, Hs).call(this),
    nameChangeCallback: (i) => o(this, at, Fs).call(this, i)
  });
  return this.appendToBody && m(this, q, new ResizeObserver(() => this.updateListPosition())), e.append(s.srcElement), { container: e, list: t, input: s };
}, Qe = new WeakSet(), Is = function(e) {
  var i, a;
  const t = re(e);
  (i = n(this, u)) == null || i.updateValue(t);
  const s = ((a = n(this, u)) == null ? void 0 : a.selectedNodes) ?? {};
  o(this, te, Ot).call(this, s), o(this, ne, It).call(this);
}, et = new WeakSet(), Bs = function(e) {
  var t;
  this.isListOpened && ((t = n(this, u)) == null || t.callKeyAction(e));
}, tt = new WeakSet(), Vs = function(e) {
  n(this, j) && clearTimeout(n(this, j)), m(this, j, window.setTimeout(() => {
    var t;
    (t = n(this, u)) == null || t.updateSearchValue(e), this.updateListPosition();
  }, 350)), o(this, pt, zs).call(this, e);
}, st = new WeakSet(), Ds = function() {
  o(this, R, he).call(this, !0), n(this, y) && n(this, y) && n(this, B) && (document.addEventListener("mousedown", n(this, y), !0), document.addEventListener("focus", n(this, y), !0), window.addEventListener("blur", n(this, B)));
}, it = new WeakSet(), Hs = function() {
  setTimeout(() => {
    var s, i;
    const e = (s = n(this, p)) == null ? void 0 : s.srcElement.contains(document.activeElement), t = (i = n(this, u)) == null ? void 0 : i.srcElement.contains(document.activeElement);
    !e && !t && this.blurWindowHandler();
  }, 1);
}, se = new WeakSet(), Nt = function(e) {
  var s;
  if (!e)
    return;
  let t = [];
  this.isIndependentNodes || this.isSingleSelect ? t = e.allNodes : this.grouped ? t = e.groupedNodes : t = e.nodes, (s = n(this, p)) == null || s.updateValue(t), o(this, te, Ot).call(this, e);
}, lt = new WeakSet(), Gs = function(e) {
  var t, s, i;
  o(this, se, Nt).call(this, e), this.isSingleSelect && !this.alwaysOpen && ((t = n(this, p)) == null || t.openClose(), (s = n(this, p)) == null || s.clearSearch()), (i = n(this, p)) == null || i.focus(), o(this, ne, It).call(this);
}, nt = new WeakSet(), Ms = function(e, t) {
  var s;
  (s = n(this, p)) == null || s.focus(), this.updateListPosition(), o(this, mt, Ys).call(this, e, t);
}, at = new WeakSet(), Fs = function(e) {
  this.selectedName !== e && (this.selectedName = e, o(this, ht, $s).call(this));
}, ot = new WeakSet(), qs = function() {
  var e;
  this.isListOpened = !0, n(this, A) && n(this, O) && (window.addEventListener("scroll", n(this, A), !0), window.addEventListener("resize", n(this, O))), !(!n(this, u) || !this.srcElement) && (this.appendToBody ? (document.body.appendChild(n(this, u).srcElement), (e = n(this, q)) == null || e.observe(this.srcElement)) : this.srcElement.appendChild(n(this, u).srcElement), this.updateListPosition(), o(this, le, Pt).call(this, !0), o(this, ct, Rs).call(this), o(this, dt, Ws).call(this));
}, ie = new WeakSet(), Tt = function() {
  var t;
  this.alwaysOpen || (this.isListOpened = !1, n(this, A) && n(this, O) && (window.removeEventListener("scroll", n(this, A), !0), window.removeEventListener("resize", n(this, O))), !n(this, u) || !this.srcElement) || !(this.appendToBody ? document.body.contains(n(this, u).srcElement) : this.srcElement.contains(n(this, u).srcElement)) || (m(this, Q, n(this, u).srcElement.scrollTop), this.appendToBody ? (document.body.removeChild(n(this, u).srcElement), (t = n(this, q)) == null || t.disconnect()) : this.srcElement.removeChild(n(this, u).srcElement), o(this, le, Pt).call(this, !1), o(this, ut, Us).call(this));
}, rt = new WeakSet(), js = function(e, t) {
  if (!n(this, u) || !n(this, p))
    return;
  const s = t ? "treeselect-list--top-to-body" : "treeselect-list--top", i = t ? "treeselect-list--bottom-to-body" : "treeselect-list--bottom";
  e ? (n(this, u).srcElement.classList.add(s), n(this, u).srcElement.classList.remove(i), n(this, p).srcElement.classList.add("treeselect-input--top"), n(this, p).srcElement.classList.remove("treeselect-input--bottom")) : (n(this, u).srcElement.classList.remove(s), n(this, u).srcElement.classList.add(i), n(this, p).srcElement.classList.remove("treeselect-input--top"), n(this, p).srcElement.classList.add("treeselect-input--bottom"));
}, R = new WeakSet(), he = function(e) {
  !n(this, p) || !n(this, u) || (e ? (n(this, p).srcElement.classList.add("treeselect-input--focused"), n(this, u).srcElement.classList.add("treeselect-list--focused")) : (n(this, p).srcElement.classList.remove("treeselect-input--focused"), n(this, u).srcElement.classList.remove("treeselect-list--focused")));
}, le = new WeakSet(), Pt = function(e) {
  var t, s, i, a;
  e ? (t = n(this, p)) == null || t.srcElement.classList.add("treeselect-input--opened") : (s = n(this, p)) == null || s.srcElement.classList.remove("treeselect-input--opened"), this.staticList ? (i = n(this, u)) == null || i.srcElement.classList.add("treeselect-list--static") : (a = n(this, u)) == null || a.srcElement.classList.remove("treeselect-list--static");
}, $ = new WeakSet(), de = function(e) {
  !n(this, A) || !n(this, O) || !n(this, y) || !n(this, B) || ((!this.alwaysOpen || e) && (window.removeEventListener("scroll", n(this, A), !0), window.removeEventListener("resize", n(this, O))), document.removeEventListener("mousedown", n(this, y), !0), document.removeEventListener("focus", n(this, y), !0), window.removeEventListener("blur", n(this, B)));
}, ct = new WeakSet(), Rs = function() {
  var t, s, i;
  const e = (t = n(this, u)) == null ? void 0 : t.isLastFocusedElementExist();
  this.saveScrollPosition && e ? (s = n(this, u)) == null || s.srcElement.scroll(0, n(this, Q)) : (i = n(this, u)) == null || i.focusFirstListElement();
}, ne = new WeakSet(), It = function() {
  var e;
  (e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("input", { detail: this.value })), this.inputCallback && this.inputCallback(this.value);
}, ht = new WeakSet(), $s = function() {
  var e;
  (e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("name-change", { detail: this.selectedName })), this.nameChangeCallback && this.nameChangeCallback(this.selectedName);
}, dt = new WeakSet(), Ws = function() {
  var e;
  this.alwaysOpen || ((e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("open", { detail: this.value })), this.openCallback && this.openCallback(this.value));
}, ut = new WeakSet(), Us = function() {
  var e;
  this.alwaysOpen || ((e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("close", { detail: this.value })), this.closeCallback && this.closeCallback(this.value));
}, pt = new WeakSet(), zs = function(e) {
  var s;
  const t = (e == null ? void 0 : e.trim()) ?? "";
  (s = this.srcElement) == null || s.dispatchEvent(new CustomEvent("search", { detail: t })), this.searchCallback && this.searchCallback(t);
}, mt = new WeakSet(), Ys = function(e, t) {
  var s;
  (s = this.srcElement) == null || s.dispatchEvent(new CustomEvent("open-close-group", { detail: { groupId: e, isClosed: t } })), this.openCloseGroupCallback && this.openCloseGroupCallback(e, t);
};
export {
  Fi as default
};
