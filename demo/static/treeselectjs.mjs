var ci = Object.defineProperty;
var hi = (l, e, t) => e in l ? ci(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t;
var c = (l, e, t) => (hi(l, typeof e != "symbol" ? e + "" : e, t), t), kt = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
};
var n = (l, e, t) => (kt(l, e, "read from private field"), t ? t.call(l) : e.get(l)), r = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, m = (l, e, t, s) => (kt(l, e, "write to private field"), s ? s.call(l, t) : e.set(l, t), t);
var o = (l, e, t) => (kt(l, e, "access private method"), t);
const Pt = {
  arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',
  arrowDown: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  attention: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
  clear: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
  cross: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  partialCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'
}, I = (l, e) => {
  if (e.innerHTML = "", typeof l == "string")
    e.innerHTML = l;
  else {
    const t = l.cloneNode(!0);
    e.appendChild(t);
  }
}, Bt = (l) => {
  const e = l ? { ...l } : {};
  return Object.keys(Pt).forEach((t) => {
    e[t] || (e[t] = Pt[t]);
  }), e;
}, di = (l) => l.reduce((e, { name: t }, s) => (e += t, s < l.length - 1 && (e += ", "), e), "");
var T, E, H, v, ue, Ht, G, W, pe, Gt, me, Mt, M, U, O, D, fe, Ft, Ce, qt, be, jt, ge, Rt, ke, $t, we, Wt, Ee, Ut, ve, zt, Le, Yt, ye, Kt, xe, Xt, Se, Jt, _e, Zt, Ae, Qt, Ne, es, Te, ts, z, wt;
class ui {
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
    iconElements: k,
    inputCallback: w,
    searchCallback: y,
    openCallback: x,
    closeCallback: V,
    keydownCallback: ae,
    focusCallback: bt,
    blurCallback: gt,
    nameChangeCallback: oe
  }) {
    // Private methods
    r(this, ue);
    r(this, G);
    r(this, pe);
    r(this, me);
    r(this, M);
    r(this, O);
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
    r(this, xe);
    r(this, Se);
    r(this, _e);
    r(this, Ae);
    r(this, Ne);
    r(this, Te);
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
    // InnerState
    c(this, "isOpened");
    c(this, "searchText");
    c(this, "srcElement");
    // PrivateInnerState
    r(this, T, void 0);
    r(this, E, void 0);
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
    this.value = e, this.showTags = t, this.tagsCountText = s, this.searchable = h, this.placeholder = d, this.clearable = i, this.isAlwaysOpened = a, this.disabled = b, this.isSingleSelect = f, this.id = C, this.ariaLabel = g, this.iconElements = k, this.isOpened = !1, this.searchText = "", m(this, T, o(this, be, jt).call(this)), m(this, E, o(this, Le, Yt).call(this)), m(this, H, o(this, Se, Jt).call(this)), m(this, v, null), this.inputCallback = w, this.searchCallback = y, this.openCallback = x, this.closeCallback = V, this.keydownCallback = ae, this.focusCallback = bt, this.blurCallback = gt, this.nameChangeCallback = oe, this.srcElement = o(this, fe, Ft).call(this, n(this, T), n(this, E), n(this, H)), o(this, ue, Ht).call(this);
  }
  // Public methods
  focus() {
    setTimeout(() => n(this, E).focus(), 0);
  }
  blur() {
    this.isOpened && o(this, O, D).call(this), this.clearSearch(), n(this, E).blur();
  }
  updateValue(e) {
    this.value = e, o(this, G, W).call(this), o(this, M, U).call(this);
  }
  removeItem(e) {
    this.value = this.value.filter((t) => t.id !== e), o(this, z, wt).call(this), o(this, G, W).call(this), o(this, M, U).call(this);
  }
  clear() {
    this.value = [], o(this, z, wt).call(this), o(this, G, W).call(this), this.clearSearch();
  }
  openClose() {
    o(this, O, D).call(this);
  }
  clearSearch() {
    this.searchText = "", this.searchCallback(""), o(this, M, U).call(this);
  }
}
T = new WeakMap(), E = new WeakMap(), H = new WeakMap(), v = new WeakMap(), ue = new WeakSet(), Ht = function() {
  o(this, G, W).call(this), o(this, M, U).call(this), o(this, pe, Gt).call(this);
}, G = new WeakSet(), W = function() {
  if (n(this, T).innerHTML = "", this.showTags) {
    n(this, T).append(...o(this, ge, Rt).call(this));
    const e = di(this.value);
    this.nameChangeCallback(e);
  } else {
    const e = o(this, ve, zt).call(this);
    n(this, T).appendChild(e), this.nameChangeCallback(e.innerText);
  }
  n(this, T).appendChild(n(this, E));
}, pe = new WeakSet(), Gt = function() {
  const e = [];
  n(this, H).innerHTML = "", this.clearable && e.push(o(this, _e, Zt).call(this)), this.isAlwaysOpened || e.push(o(this, Ne, es).call(this, this.isOpened)), e.length && n(this, H).append(...e);
}, me = new WeakSet(), Mt = function() {
  if (!this.isAlwaysOpened && n(this, v)) {
    const e = this.isOpened ? this.iconElements.arrowUp : this.iconElements.arrowDown;
    I(e, n(this, v));
  }
}, M = new WeakSet(), U = function() {
  var e;
  (e = this.value) != null && e.length ? (n(this, E).removeAttribute("placeholder"), this.srcElement.classList.remove("treeselect-input--value-not-selected")) : (n(this, E).setAttribute("placeholder", this.placeholder), this.srcElement.classList.add("treeselect-input--value-not-selected")), this.searchable ? this.srcElement.classList.remove("treeselect-input--unsearchable") : this.srcElement.classList.add("treeselect-input--unsearchable"), this.isSingleSelect ? this.srcElement.classList.add("treeselect-input--is-single-select") : this.srcElement.classList.remove("treeselect-input--is-single-select"), n(this, E).value = this.searchText;
}, O = new WeakSet(), D = function() {
  this.isOpened = !this.isOpened, o(this, me, Mt).call(this), this.isOpened ? this.openCallback() : this.closeCallback();
}, fe = new WeakSet(), Ft = function(e, t, s) {
  const i = document.createElement("div");
  return i.classList.add("treeselect-input"), i.setAttribute("tabindex", "-1"), i.addEventListener("mousedown", (a) => o(this, Ce, qt).call(this, a)), i.addEventListener("focus", () => this.focusCallback(), !0), i.addEventListener("blur", () => this.blurCallback(), !0), e.appendChild(t), i.append(e, s), i;
}, Ce = new WeakSet(), qt = function(e) {
  e.stopPropagation(), this.isOpened || o(this, O, D).call(this), this.focus();
}, be = new WeakSet(), jt = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-input__tags"), e;
}, ge = new WeakSet(), Rt = function() {
  return this.value.map((e) => {
    const t = document.createElement("div");
    t.classList.add("treeselect-input__tags-element"), t.setAttribute("tabindex", "-1"), t.setAttribute("tag-id", e.id.toString()), t.setAttribute("title", e.name);
    const s = o(this, we, Wt).call(this, e.name), i = o(this, Ee, Ut).call(this);
    return t.addEventListener("mousedown", (a) => o(this, ke, $t).call(this, a, e.id)), t.append(s, i), t;
  });
}, ke = new WeakSet(), $t = function(e, t) {
  e.preventDefault(), e.stopPropagation(), this.removeItem(t), this.focus();
}, we = new WeakSet(), Wt = function(e) {
  const t = document.createElement("span");
  return t.classList.add("treeselect-input__tags-name"), t.textContent = e, t;
}, Ee = new WeakSet(), Ut = function() {
  const e = document.createElement("span");
  return e.classList.add("treeselect-input__tags-cross"), I(this.iconElements.cross, e), e;
}, ve = new WeakSet(), zt = function() {
  const e = document.createElement("span");
  if (e.classList.add("treeselect-input__tags-count"), !this.value.length)
    return e.textContent = "", e.setAttribute("title", ""), e;
  const t = this.value.length === 1 ? this.value[0].name : `${this.value.length} ${this.tagsCountText}`;
  return e.textContent = t, e.setAttribute("title", t), e;
}, Le = new WeakSet(), Yt = function() {
  const e = document.createElement("input");
  return e.classList.add("treeselect-input__edit"), this.id && e.setAttribute("id", this.id), (!this.searchable || this.disabled) && e.setAttribute("readonly", "readonly"), this.disabled && e.setAttribute("tabindex", "-1"), this.ariaLabel.length && e.setAttribute("aria-label", this.ariaLabel), e.addEventListener("keydown", (t) => o(this, ye, Kt).call(this, t)), e.addEventListener("input", (t) => o(this, xe, Xt).call(this, t, e)), e;
}, ye = new WeakSet(), Kt = function(e) {
  e.stopPropagation();
  const t = e.key;
  t === "Backspace" && !this.searchText.length && this.value.length && !this.showTags && this.clear(), t === "Backspace" && !this.searchText.length && this.value.length && this.removeItem(this.value[this.value.length - 1].id), e.code === "Space" && (!this.searchText || !this.searchable) && o(this, O, D).call(this), (t === "Enter" || t === "ArrowDown" || t === "ArrowUp") && e.preventDefault(), this.keydownCallback(e), t !== "Tab" && this.focus();
}, xe = new WeakSet(), Xt = function(e, t) {
  e.stopPropagation();
  const s = this.searchText, i = t.value.trim();
  if (s.length === 0 && i.length === 0) {
    t.value = "";
    return;
  }
  if (this.searchable) {
    const a = e.target.value;
    this.searchCallback(a), this.isOpened || o(this, O, D).call(this);
  } else
    t.value = "";
  this.searchText = t.value;
}, Se = new WeakSet(), Jt = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-input__operators"), e;
}, _e = new WeakSet(), Zt = function() {
  const e = document.createElement("span");
  return e.classList.add("treeselect-input__clear"), e.setAttribute("tabindex", "-1"), I(this.iconElements.clear, e), e.addEventListener("mousedown", (t) => o(this, Ae, Qt).call(this, t)), e;
}, Ae = new WeakSet(), Qt = function(e) {
  e.preventDefault(), e.stopPropagation(), (this.searchText.length || this.value.length) && this.clear(), this.focus();
}, Ne = new WeakSet(), es = function(e) {
  m(this, v, document.createElement("span")), n(this, v).classList.add("treeselect-input__arrow");
  const t = e ? this.iconElements.arrowUp : this.iconElements.arrowDown;
  return I(t, n(this, v)), n(this, v).addEventListener("mousedown", (s) => o(this, Te, ts).call(this, s)), n(this, v);
}, Te = new WeakSet(), ts = function(e) {
  e.stopPropagation(), e.preventDefault(), this.focus(), o(this, O, D).call(this);
}, z = new WeakSet(), wt = function() {
  this.inputCallback(this.value);
};
const ss = (l, e, t, s) => {
  Ci(e);
  const i = e.filter((a) => !a.disabled && l.some((h) => h === a.id));
  if (t && i.length) {
    i[0].checked = !0;
    return;
  }
  i.forEach((a) => {
    a.checked = !0;
    const h = It(a, e, s);
    a.checked = h;
  });
}, It = ({ id: l, checked: e }, t, s) => {
  const i = t.find((h) => h.id === l);
  if (!i)
    return !1;
  if (s)
    return i.checked = i.disabled ? !1 : !!e, i.checked;
  const a = is(!!e, i, t);
  return ls(i, t), a;
}, is = (l, e, t) => {
  if (!e.isGroup)
    return e.checked = e.disabled ? !1 : !!l, e.isPartialChecked = !1, e.checked;
  const s = t.filter((d) => d.childOf === e.id);
  return !l || e.disabled || e.isPartialChecked ? (e.checked = !1, e.isPartialChecked = !1, Et(e, s, t), e.checked) : ns(s, t) ? as(s) ? (e.checked = !1, e.isPartialChecked = !1, e.disabled = !0, e.checked) : (e.checked = !1, e.isPartialChecked = !0, s.forEach((d) => {
    is(l, d, t);
  }), e.checked) : (e.checked = !0, e.isPartialChecked = !1, Et(e, s, t), e.checked);
}, ls = (l, e) => {
  const t = e.find((s) => s.id === l.childOf);
  t && (pi(t, e), ls(t, e));
}, pi = (l, e) => {
  const t = ft(l, e);
  if (as(t)) {
    l.checked = !1, l.isPartialChecked = !1, l.disabled = !0;
    return;
  }
  if (mi(t)) {
    l.checked = !0, l.isPartialChecked = !1;
    return;
  }
  if (fi(t)) {
    l.checked = !1, l.isPartialChecked = !0;
    return;
  }
  l.checked = !1, l.isPartialChecked = !1;
}, Et = ({ checked: l, disabled: e }, t, s) => {
  t.forEach((i) => {
    i.disabled = !!e || !!i.disabled, i.checked = !!l && !i.disabled, i.isPartialChecked = !1;
    const a = ft(i, s);
    Et({ checked: l, disabled: e }, a, s);
  });
}, ns = (l, e) => l.some((i) => i.disabled) ? !0 : l.some((i) => {
  if (i.isGroup) {
    const a = ft(i, e);
    return ns(a, e);
  }
  return !1;
}), as = (l) => l.every((e) => !!e.disabled), mi = (l) => l.every((e) => !!e.checked), fi = (l) => l.some((e) => !!e.checked || !!e.isPartialChecked), Ci = (l) => {
  l.forEach((e) => {
    e.checked = !1, e.isPartialChecked = !1;
  });
}, bi = (l, e, t) => {
  const s = { level: 0, groupId: "" }, i = os(l, e, s.groupId, s.level);
  return ki(i, t);
}, os = (l, e, t, s) => l.reduce((i, a) => {
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
    const C = os(a.children, e, a.value, s + 1);
    i.push(...C);
  }
  return i;
}, []), ft = ({ id: l }, e) => e.filter((t) => t.childOf === l), gi = (l) => {
  const { ungroupedNodes: e, allGroupedNodes: t, allNodes: s } = l.reduce(
    (a, h) => (h.checked && (a.allNodes.push(h), h.isGroup ? a.allGroupedNodes.push(h) : a.ungroupedNodes.push(h)), a),
    {
      ungroupedNodes: [],
      allGroupedNodes: [],
      allNodes: []
    }
  ), i = s.filter((a) => !t.some(({ id: h }) => h === a.childOf));
  return { ungroupedNodes: e, groupedNodes: i, allNodes: s };
}, ki = (l, e) => (l.filter((s) => !!s.disabled).forEach(
  ({ id: s }) => It({ id: s, checked: !1 }, l, e)
), l), Ct = (l, { id: e, isClosed: t }) => {
  ft({ id: e }, l).forEach((i) => {
    i.hidden = t ?? !1, i.isGroup && !i.isClosed && Ct(l, { id: i.id, isClosed: t });
  });
}, wi = (l) => {
  l.filter((e) => e.isGroup && !e.disabled && (e.checked || e.isPartialChecked)).forEach((e) => {
    e.isClosed = !1, Ct(l, e);
  });
}, Ei = (l, e) => {
  const t = vi(l, e);
  l.forEach((s) => {
    t.some(({ id: a }) => a === s.id) ? (s.isGroup && (s.isClosed = !1, Ct(l, s)), s.hidden = !1) : s.hidden = !0;
  });
}, vi = (l, e) => l.reduce((t, s) => {
  if (s.name.toLowerCase().includes(e.toLowerCase())) {
    if (t.push(s), s.isGroup) {
      const a = rs(s.id, l);
      t.push(...a);
    }
    if (s.childOf) {
      const a = cs(s.childOf, l);
      t.push(...a);
    }
  }
  return t;
}, []), rs = (l, e) => e.reduce((t, s) => (s.childOf === l && (t.push(s), s.isGroup && t.push(...rs(s.id, e))), t), []), cs = (l, e) => e.reduce((t, s) => (s.id === l && (t.push(s), s.childOf && t.push(...cs(s.childOf, e))), t), []), Li = (l) => {
  const { duplications: e } = l.reduce(
    (t, s) => (t.allItems.some((i) => i.toString() === s.id.toString()) && t.duplications.push(s.id), t.allItems.push(s.id), t),
    {
      duplications: [],
      allItems: []
    }
  );
  e.length && console.error(`Validation: You have duplicated values: ${e.join(", ")}! You should use unique values.`);
}, yi = (l, e, t, s, i, a, h, d, b, f) => {
  ss(l, e, i, b), d && h && wi(e), ce(e, t, s, a, f);
}, ce = (l, e, t, s, i) => {
  l.forEach((a) => {
    const h = e.querySelector(`[input-id="${a.id}"]`), d = N(h);
    h.checked = a.checked, xi(a, d, s), Si(a, d), _i(a, d), Ai(a, d, t), Ni(a, d), Oi(a, d, l, i), Ti(a, h, t);
  }), Ii(l, e);
}, xi = (l, e, t) => {
  l.checked ? e.classList.add("treeselect-list__item--checked") : e.classList.remove("treeselect-list__item--checked"), Array.isArray(t) && t[0] === l.id && !l.disabled ? e.classList.add("treeselect-list__item--single-selected") : e.classList.remove("treeselect-list__item--single-selected");
}, Si = (l, e) => {
  l.isPartialChecked ? e.classList.add("treeselect-list__item--partial-checked") : e.classList.remove("treeselect-list__item--partial-checked");
}, _i = (l, e) => {
  l.disabled ? e.classList.add("treeselect-list__item--disabled") : e.classList.remove("treeselect-list__item--disabled");
}, Ai = (l, e, t) => {
  if (l.isGroup) {
    const s = e.querySelector(".treeselect-list__item-icon"), i = l.isClosed ? t.arrowRight : t.arrowDown;
    I(i, s), l.isClosed ? e.classList.add("treeselect-list__item--closed") : e.classList.remove("treeselect-list__item--closed");
  }
}, Ni = (l, e) => {
  l.hidden ? e.classList.add("treeselect-list__item--hidden") : e.classList.remove("treeselect-list__item--hidden");
}, Ti = (l, e, t) => {
  const i = e.parentNode.querySelector(".treeselect-list__item-checkbox-icon");
  l.checked ? I(t.check, i) : l.isPartialChecked ? I(t.partialCheck, i) : i.innerHTML = "";
}, Oi = (l, e, t, s) => {
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
}, N = (l) => l.parentNode.parentNode, Vt = (l, e) => e.find((t) => t.id.toString() === l), Pi = (l) => N(l).querySelector(".treeselect-list__item-icon"), Bi = (l, e) => {
  e && Object.keys(e).forEach((t) => {
    const s = e[t];
    typeof s == "string" && l.setAttribute(t, s);
  });
};
var F, P, S, Y, Oe, hs, Ie, ds, Pe, us, Be, ps, Ve, ms, De, fs, K, vt, He, Cs, Ge, bs, Me, gs, X, Lt, Fe, ks, qe, ws, je, Es, Re, vs, $e, Ls, We, ys, Ue, xs, ze, Ss, Ye, _s, Ke, As, Xe, Ns, J, yt, Z, xt, Je, Ts;
class Vi {
  constructor({
    options: e,
    value: t,
    openLevel: s,
    listSlotHtmlComponent: i,
    emptyText: a,
    isSingleSelect: h,
    iconElements: d,
    showCount: b,
    disabledBranchNode: f,
    expandSelected: C,
    isIndependentNodes: g,
    rtl: k,
    listClassName: w,
    inputCallback: y,
    arrowClickCallback: x,
    mouseupCallback: V
  }) {
    // Private methods
    r(this, Oe);
    r(this, Ie);
    r(this, Pe);
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
    c(this, "listClassName");
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
    r(this, F, null);
    r(this, P, !0);
    r(this, S, []);
    r(this, Y, !0);
    this.options = e, this.value = t, this.openLevel = s ?? 0, this.listSlotHtmlComponent = i ?? null, this.emptyText = a ?? "No results found...", this.isSingleSelect = h ?? !1, this.showCount = b ?? !1, this.disabledBranchNode = f ?? !1, this.expandSelected = C ?? !1, this.isIndependentNodes = g ?? !1, this.rtl = k ?? !1, this.listClassName = w ?? "", this.iconElements = d, this.searchText = "", this.flattedOptions = bi(this.options, this.openLevel, this.isIndependentNodes), this.flattedOptionsBeforeSearch = this.flattedOptions, this.selectedNodes = { nodes: [], groupedNodes: [], allNodes: [] }, this.srcElement = o(this, Pe, us).call(this), this.inputCallback = y, this.arrowClickCallback = x, this.mouseupCallback = V, Li(this.flattedOptions);
  }
  // Public methods
  updateValue(e) {
    this.value = e, m(this, S, this.isSingleSelect ? this.value : []), yi(
      e,
      this.flattedOptions,
      this.srcElement,
      this.iconElements,
      this.isSingleSelect,
      n(this, S),
      this.expandSelected,
      n(this, Y),
      this.isIndependentNodes,
      this.rtl
    ), m(this, Y, !1), o(this, Z, xt).call(this);
  }
  updateSearchValue(e) {
    if (e === this.searchText)
      return;
    const t = this.searchText === "" && e !== "";
    this.searchText = e, t && (this.flattedOptionsBeforeSearch = JSON.parse(JSON.stringify(this.flattedOptions))), this.searchText === "" && (this.flattedOptions = this.flattedOptionsBeforeSearch.map((s) => {
      const i = this.flattedOptions.find((a) => a.id === s.id);
      return i.isClosed = s.isClosed, i.hidden = s.hidden, i;
    }), this.flattedOptionsBeforeSearch = []), this.searchText && Ei(this.flattedOptions, e), ce(this.flattedOptions, this.srcElement, this.iconElements, n(this, S), this.rtl), this.focusFirstListElement();
  }
  callKeyAction(e) {
    m(this, P, !1);
    const t = this.srcElement.querySelector(".treeselect-list__item--focused");
    if (t == null ? void 0 : t.classList.contains("treeselect-list__item--hidden"))
      return;
    const i = e.key;
    i === "Enter" && t && t.dispatchEvent(new Event("mousedown")), (i === "ArrowLeft" || i === "ArrowRight") && o(this, Oe, hs).call(this, t, e), (i === "ArrowDown" || i === "ArrowUp") && o(this, Ie, ds).call(this, t, i);
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
F = new WeakMap(), P = new WeakMap(), S = new WeakMap(), Y = new WeakMap(), Oe = new WeakSet(), hs = function(e, t) {
  if (!e)
    return;
  const s = t.key, a = e.querySelector(".treeselect-list__item-checkbox").getAttribute("input-id"), h = Vt(a, this.flattedOptions), d = e.querySelector(".treeselect-list__item-icon");
  s === "ArrowLeft" && !h.isClosed && h.isGroup && (d.dispatchEvent(new Event("mousedown")), t.preventDefault()), s === "ArrowRight" && h.isClosed && h.isGroup && (d.dispatchEvent(new Event("mousedown")), t.preventDefault());
}, Ie = new WeakSet(), ds = function(e, t) {
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
      const k = this.srcElement.getBoundingClientRect(), w = g.getBoundingClientRect();
      if (C && t === "ArrowDown") {
        this.srcElement.scroll(0, 0);
        return;
      }
      if (C && t === "ArrowUp") {
        this.srcElement.scroll(0, this.srcElement.scrollHeight);
        return;
      }
      const y = ((i = this.listSlotHtmlComponent) == null ? void 0 : i.clientHeight) ?? 0;
      if (k.y + k.height < w.y + w.height + y) {
        this.srcElement.scroll(0, this.srcElement.scrollTop + w.height);
        return;
      }
      if (k.y > w.y) {
        this.srcElement.scroll(0, this.srcElement.scrollTop - w.height);
        return;
      }
    }
}, Pe = new WeakSet(), us = function() {
  const e = o(this, Be, ps).call(this), t = o(this, K, vt).call(this, this.options);
  e.append(...t);
  const s = o(this, Ge, bs).call(this);
  e.append(s);
  const i = o(this, He, Cs).call(this);
  return i && e.append(i), e;
}, Be = new WeakSet(), ps = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-list"), this.listClassName.length > 0 && e.classList.add(this.listClassName), this.isSingleSelect && e.classList.add("treeselect-list--single-select"), this.disabledBranchNode && e.classList.add("treeselect-list--disabled-branch-node"), e.addEventListener("mouseout", (t) => o(this, Ve, ms).call(this, t)), e.addEventListener("mousemove", () => o(this, De, fs).call(this)), e.addEventListener("mouseup", () => this.mouseupCallback(), !0), e;
}, Ve = new WeakSet(), ms = function(e) {
  e.stopPropagation(), n(this, F) && n(this, P) && n(this, F).classList.add("treeselect-list__item--focused");
}, De = new WeakSet(), fs = function() {
  m(this, P, !0);
}, K = new WeakSet(), vt = function(e) {
  return e.reduce((t, s) => {
    var a;
    if ((a = s.children) != null && a.length) {
      const h = o(this, Me, gs).call(this, s), d = o(this, K, vt).call(this, s.children);
      return h.append(...d), t.push(h), t;
    }
    const i = o(this, X, Lt).call(this, s, !1);
    return t.push(i), t;
  }, []);
}, He = new WeakSet(), Cs = function() {
  if (!this.listSlotHtmlComponent)
    return null;
  const e = document.createElement("div");
  return e.classList.add("treeselect-list__slot"), e.appendChild(this.listSlotHtmlComponent), e;
}, Ge = new WeakSet(), bs = function() {
  const e = document.createElement("div");
  e.classList.add("treeselect-list__empty"), e.setAttribute("title", this.emptyText);
  const t = document.createElement("span");
  t.classList.add("treeselect-list__empty-icon"), I(this.iconElements.attention, t);
  const s = document.createElement("span");
  return s.classList.add("treeselect-list__empty-text"), s.textContent = this.emptyText, e.append(t, s), e;
}, Me = new WeakSet(), gs = function(e) {
  const t = document.createElement("div");
  t.setAttribute("group-container-id", e.value.toString()), t.classList.add("treeselect-list__group-container");
  const s = o(this, X, Lt).call(this, e, !0);
  return t.appendChild(s), t;
}, X = new WeakSet(), Lt = function(e, t) {
  const s = o(this, Fe, ks).call(this, e);
  if (t) {
    const h = o(this, $e, Ls).call(this);
    s.appendChild(h), s.classList.add("treeselect-list__item--group");
  }
  const i = o(this, Ue, xs).call(this, e), a = o(this, ze, Ss).call(this, e, t);
  return s.append(i, a), s;
}, Fe = new WeakSet(), ks = function(e) {
  const t = document.createElement("div");
  return Bi(t, e.htmlAttr), t.setAttribute("tabindex", "-1"), t.setAttribute("title", e.name), t.classList.add("treeselect-list__item"), t.addEventListener("mouseover", () => o(this, qe, ws).call(this, t), !0), t.addEventListener("mouseout", () => o(this, je, Es).call(this, t), !0), t.addEventListener("mousedown", (s) => o(this, Re, vs).call(this, s, e)), t;
}, qe = new WeakSet(), ws = function(e) {
  n(this, P) && o(this, J, yt).call(this, !0, e);
}, je = new WeakSet(), Es = function(e) {
  n(this, P) && (o(this, J, yt).call(this, !1, e), m(this, F, e));
}, Re = new WeakSet(), vs = function(e, t) {
  var a;
  if (e.preventDefault(), e.stopPropagation(), (a = this.flattedOptions.find((h) => h.id === t.value)) == null ? void 0 : a.disabled)
    return;
  const i = e.target.querySelector(".treeselect-list__item-checkbox");
  i.checked = !i.checked, o(this, Ke, As).call(this, i, t);
}, $e = new WeakSet(), Ls = function() {
  const e = document.createElement("span");
  return e.setAttribute("tabindex", "-1"), e.classList.add("treeselect-list__item-icon"), I(this.iconElements.arrowDown, e), e.addEventListener("mousedown", (t) => o(this, We, ys).call(this, t)), e;
}, We = new WeakSet(), ys = function(e) {
  e.preventDefault(), e.stopPropagation(), o(this, Xe, Ns).call(this, e);
}, Ue = new WeakSet(), xs = function(e) {
  const t = document.createElement("div");
  t.classList.add("treeselect-list__item-checkbox-container");
  const s = document.createElement("span");
  s.classList.add("treeselect-list__item-checkbox-icon"), s.innerHTML = "";
  const i = document.createElement("input");
  return i.setAttribute("tabindex", "-1"), i.setAttribute("type", "checkbox"), i.setAttribute("input-id", e.value.toString()), i.classList.add("treeselect-list__item-checkbox"), t.append(s, i), t;
}, ze = new WeakSet(), Ss = function(e, t) {
  const s = document.createElement("label");
  if (s.textContent = e.name, s.classList.add("treeselect-list__item-label"), t && this.showCount) {
    const i = o(this, Ye, _s).call(this, e);
    s.appendChild(i);
  }
  return s;
}, Ye = new WeakSet(), _s = function(e) {
  const t = document.createElement("span"), s = this.flattedOptions.filter((i) => i.childOf === e.value);
  return t.textContent = `(${s.length})`, t.classList.add("treeselect-list__item-label-counter"), t;
}, Ke = new WeakSet(), As = function(e, t) {
  const s = this.flattedOptions.find((i) => i.id === t.value);
  if (s) {
    if (s != null && s.isGroup && this.disabledBranchNode) {
      const i = Pi(e);
      i == null || i.dispatchEvent(new Event("mousedown"));
      return;
    }
    if (this.isSingleSelect) {
      const [i] = n(this, S);
      if (s.id === i)
        return;
      m(this, S, [s.id]), ss([s.id], this.flattedOptions, this.isSingleSelect, this.isIndependentNodes);
    } else {
      s.checked = e.checked;
      const i = It(s, this.flattedOptions, this.isIndependentNodes);
      e.checked = i;
    }
    ce(this.flattedOptions, this.srcElement, this.iconElements, n(this, S), this.rtl), o(this, Je, Ts).call(this);
  }
}, Xe = new WeakSet(), Ns = function(e) {
  var a, h;
  const t = (h = (a = e.target) == null ? void 0 : a.parentNode) == null ? void 0 : h.querySelector("[input-id]"), s = (t == null ? void 0 : t.getAttribute("input-id")) ?? null, i = Vt(s, this.flattedOptions);
  i && (i.isClosed = !i.isClosed, Ct(this.flattedOptions, i), ce(this.flattedOptions, this.srcElement, this.iconElements, n(this, S), this.rtl), this.arrowClickCallback(i.id, i.isClosed));
}, J = new WeakSet(), yt = function(e, t) {
  const s = "treeselect-list__item--focused";
  if (e) {
    const i = Array.from(this.srcElement.querySelectorAll(`.${s}`));
    i.length && i.forEach((a) => a.classList.remove(s)), t.classList.add(s);
  } else
    t.classList.remove(s);
}, Z = new WeakSet(), xt = function() {
  const { ungroupedNodes: e, groupedNodes: t, allNodes: s } = gi(this.flattedOptions);
  this.selectedNodes = { nodes: e, groupedNodes: t, allNodes: s };
}, Je = new WeakSet(), Ts = function() {
  o(this, Z, xt).call(this), this.inputCallback(this.selectedNodes), this.value = this.selectedNodes.nodes.map((e) => e.id);
};
const Dt = ({
  parentHtmlContainer: l,
  staticList: e,
  appendToBody: t,
  isSingleSelect: s,
  value: i,
  direction: a
}) => {
  l || console.error("Validation: parentHtmlContainer prop is required!"), e && t && console.error("Validation: You should set staticList to false if you use appendToBody!"), s && Array.isArray(i) && console.error("Validation: if you use isSingleSelect prop, you should pass a single value!"), !s && !Array.isArray(i) && console.error("Validation: you should pass an array as a value!"), a && a !== "auto" && a !== "bottom" && a !== "top" && console.error("Validation: you should pass (auto | top | bottom | undefined) as a value for the direction prop!");
}, re = (l) => l.map((e) => e.id), Di = (l) => l ? Array.isArray(l) ? l : [l] : [], Hi = (l, e) => {
  if (e) {
    const [t] = l;
    return t ?? null;
  }
  return l;
};
var u, p, q, Q, j, _, A, L, B, ee, St, te, _t, Ze, Os, Qe, Is, et, Ps, tt, Bs, st, Vs, it, Ds, se, At, lt, Hs, nt, Gs, at, Ms, ot, Fs, ie, Nt, rt, qs, R, he, le, Tt, $, de, ct, js, ne, Ot, ht, Rs, dt, $s, ut, Ws, pt, Us, mt, zs;
class Mi {
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
    grouped: k,
    isGroupedValue: w,
    listSlotHtmlComponent: y,
    disabled: x,
    emptyText: V,
    staticList: ae,
    id: bt,
    ariaLabel: gt,
    isSingleSelect: oe,
    showCount: Ys,
    disabledBranchNode: Ks,
    direction: Xs,
    expandSelected: Js,
    saveScrollPosition: Zs,
    isIndependentNodes: Qs,
    rtl: ei,
    listClassName: ti,
    iconElements: si,
    inputCallback: ii,
    openCallback: li,
    closeCallback: ni,
    nameChangeCallback: ai,
    searchCallback: oi,
    openCloseGroupCallback: ri
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
    c(this, "listClassName");
    c(this, "iconElements");
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
    r(this, _, null);
    r(this, A, null);
    r(this, L, null);
    r(this, B, null);
    Dt({
      parentHtmlContainer: e,
      value: t,
      staticList: ae,
      appendToBody: a,
      isSingleSelect: oe
    }), this.parentHtmlContainer = e, this.value = [], this.options = s ?? [], this.openLevel = i ?? 0, this.appendToBody = a ?? !1, this.alwaysOpen = !!(h && !x), this.showTags = d ?? !0, this.tagsCountText = b ?? "elements selected", this.clearable = f ?? !0, this.searchable = C ?? !0, this.placeholder = g ?? "Search...", this.grouped = k ?? !0, this.isGroupedValue = w ?? !1, this.listSlotHtmlComponent = y ?? null, this.disabled = x ?? !1, this.emptyText = V ?? "No results found...", this.staticList = !!(ae && !this.appendToBody), this.id = bt ?? "", this.ariaLabel = gt ?? "", this.isSingleSelect = oe ?? !1, this.showCount = Ys ?? !1, this.disabledBranchNode = Ks ?? !1, this.direction = Xs ?? "auto", this.expandSelected = Js ?? !1, this.saveScrollPosition = Zs ?? !0, this.isIndependentNodes = Qs ?? !1, this.rtl = ei ?? !1, this.listClassName = ti ?? "", this.iconElements = Bt(si), this.inputCallback = ii, this.openCallback = li, this.closeCallback = ni, this.nameChangeCallback = ai, this.searchCallback = oi, this.openCloseGroupCallback = ri, this.ungroupedValue = [], this.groupedValue = [], this.allValue = [], this.isListOpened = !1, this.selectedName = "", this.srcElement = null, o(this, ee, St).call(this, t);
  }
  mount() {
    Dt({
      parentHtmlContainer: this.parentHtmlContainer,
      value: this.value,
      staticList: this.staticList,
      appendToBody: this.appendToBody,
      isSingleSelect: this.isSingleSelect
    }), this.iconElements = Bt(this.iconElements), o(this, ee, St).call(this, this.value);
  }
  updateValue(e) {
    const t = Di(e), s = n(this, u);
    s && (s.updateValue(t), o(this, se, At).call(this, s == null ? void 0 : s.selectedNodes));
  }
  destroy() {
    this.srcElement && (o(this, ie, Nt).call(this), this.srcElement.innerHTML = "", this.srcElement = null, o(this, $, de).call(this, !0));
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
    var y;
    const e = this.srcElement, t = (y = n(this, u)) == null ? void 0 : y.srcElement;
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
    const k = g ? "top" : "bottom";
    t.getAttribute("direction") !== k && (t.setAttribute("direction", k), o(this, rt, qs).call(this, g, this.appendToBody));
  }
}
u = new WeakMap(), p = new WeakMap(), q = new WeakMap(), Q = new WeakMap(), j = new WeakMap(), _ = new WeakMap(), A = new WeakMap(), L = new WeakMap(), B = new WeakMap(), ee = new WeakSet(), St = function(e) {
  var a;
  this.destroy();
  const { container: t, list: s, input: i } = o(this, Ze, Os).call(this);
  this.srcElement = t, m(this, u, s), m(this, p, i), m(this, _, this.scrollWindowHandler.bind(this)), m(this, A, this.scrollWindowHandler.bind(this)), m(this, L, this.focusWindowHandler.bind(this)), m(this, B, this.blurWindowHandler.bind(this)), this.alwaysOpen && ((a = n(this, p)) == null || a.openClose()), this.disabled ? this.srcElement.classList.add("treeselect--disabled") : this.srcElement.classList.remove("treeselect--disabled"), this.updateValue(e ?? this.value);
}, te = new WeakSet(), _t = function({
  groupedNodes: e,
  nodes: t,
  allNodes: s
}) {
  this.ungroupedValue = t ? re(t) : [], this.groupedValue = e ? re(e) : [], this.allValue = s ? re(s) : [];
  let i = [];
  this.isIndependentNodes || this.isSingleSelect ? i = this.allValue : this.isGroupedValue ? i = this.groupedValue : i = this.ungroupedValue, this.value = Hi(i, this.isSingleSelect);
}, Ze = new WeakSet(), Os = function() {
  const e = this.parentHtmlContainer;
  e.classList.add("treeselect"), this.rtl && e.setAttribute("dir", "rtl");
  const t = new Vi({
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
    listClassName: this.listClassName,
    iconElements: this.iconElements,
    inputCallback: (i) => o(this, lt, Hs).call(this, i),
    arrowClickCallback: (i, a) => o(this, nt, Gs).call(this, i, a),
    mouseupCallback: () => {
      var i;
      return (i = n(this, p)) == null ? void 0 : i.focus();
    }
  }), s = new ui({
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
    inputCallback: (i) => o(this, Qe, Is).call(this, i),
    searchCallback: (i) => o(this, tt, Bs).call(this, i),
    openCallback: () => o(this, ot, Fs).call(this),
    closeCallback: () => o(this, ie, Nt).call(this),
    keydownCallback: (i) => o(this, et, Ps).call(this, i),
    focusCallback: () => o(this, st, Vs).call(this),
    blurCallback: () => o(this, it, Ds).call(this),
    nameChangeCallback: (i) => o(this, at, Ms).call(this, i)
  });
  return this.appendToBody && m(this, q, new ResizeObserver(() => this.updateListPosition())), e.append(s.srcElement), { container: e, list: t, input: s };
}, Qe = new WeakSet(), Is = function(e) {
  var i, a;
  const t = re(e);
  (i = n(this, u)) == null || i.updateValue(t);
  const s = ((a = n(this, u)) == null ? void 0 : a.selectedNodes) ?? {};
  o(this, te, _t).call(this, s), o(this, ne, Ot).call(this);
}, et = new WeakSet(), Ps = function(e) {
  var t;
  this.isListOpened && ((t = n(this, u)) == null || t.callKeyAction(e));
}, tt = new WeakSet(), Bs = function(e) {
  n(this, j) && clearTimeout(n(this, j)), m(this, j, window.setTimeout(() => {
    var t;
    (t = n(this, u)) == null || t.updateSearchValue(e), this.updateListPosition();
  }, 350)), o(this, pt, Us).call(this, e);
}, st = new WeakSet(), Vs = function() {
  o(this, R, he).call(this, !0), n(this, L) && n(this, L) && n(this, B) && (document.addEventListener("mousedown", n(this, L), !0), document.addEventListener("focus", n(this, L), !0), window.addEventListener("blur", n(this, B)));
}, it = new WeakSet(), Ds = function() {
  setTimeout(() => {
    var s, i;
    const e = (s = n(this, p)) == null ? void 0 : s.srcElement.contains(document.activeElement), t = (i = n(this, u)) == null ? void 0 : i.srcElement.contains(document.activeElement);
    !e && !t && this.blurWindowHandler();
  }, 1);
}, se = new WeakSet(), At = function(e) {
  var s;
  if (!e)
    return;
  let t = [];
  this.isIndependentNodes || this.isSingleSelect ? t = e.allNodes : this.grouped ? t = e.groupedNodes : t = e.nodes, (s = n(this, p)) == null || s.updateValue(t), o(this, te, _t).call(this, e);
}, lt = new WeakSet(), Hs = function(e) {
  var t, s, i;
  o(this, se, At).call(this, e), this.isSingleSelect && !this.alwaysOpen && ((t = n(this, p)) == null || t.openClose(), (s = n(this, p)) == null || s.clearSearch()), (i = n(this, p)) == null || i.focus(), o(this, ne, Ot).call(this);
}, nt = new WeakSet(), Gs = function(e, t) {
  var s;
  (s = n(this, p)) == null || s.focus(), this.updateListPosition(), o(this, mt, zs).call(this, e, t);
}, at = new WeakSet(), Ms = function(e) {
  this.selectedName !== e && (this.selectedName = e, o(this, ht, Rs).call(this));
}, ot = new WeakSet(), Fs = function() {
  var e;
  this.isListOpened = !0, n(this, _) && n(this, A) && (window.addEventListener("scroll", n(this, _), !0), window.addEventListener("resize", n(this, A))), !(!n(this, u) || !this.srcElement) && (this.appendToBody ? (document.body.appendChild(n(this, u).srcElement), (e = n(this, q)) == null || e.observe(this.srcElement)) : this.srcElement.appendChild(n(this, u).srcElement), this.updateListPosition(), o(this, le, Tt).call(this, !0), o(this, ct, js).call(this), o(this, dt, $s).call(this));
}, ie = new WeakSet(), Nt = function() {
  var t;
  this.alwaysOpen || (this.isListOpened = !1, n(this, _) && n(this, A) && (window.removeEventListener("scroll", n(this, _), !0), window.removeEventListener("resize", n(this, A))), !n(this, u) || !this.srcElement) || !(this.appendToBody ? document.body.contains(n(this, u).srcElement) : this.srcElement.contains(n(this, u).srcElement)) || (m(this, Q, n(this, u).srcElement.scrollTop), this.appendToBody ? (document.body.removeChild(n(this, u).srcElement), (t = n(this, q)) == null || t.disconnect()) : this.srcElement.removeChild(n(this, u).srcElement), o(this, le, Tt).call(this, !1), o(this, ut, Ws).call(this));
}, rt = new WeakSet(), qs = function(e, t) {
  if (!n(this, u) || !n(this, p))
    return;
  const s = t ? "treeselect-list--top-to-body" : "treeselect-list--top", i = t ? "treeselect-list--bottom-to-body" : "treeselect-list--bottom";
  e ? (n(this, u).srcElement.classList.add(s), n(this, u).srcElement.classList.remove(i), n(this, p).srcElement.classList.add("treeselect-input--top"), n(this, p).srcElement.classList.remove("treeselect-input--bottom")) : (n(this, u).srcElement.classList.remove(s), n(this, u).srcElement.classList.add(i), n(this, p).srcElement.classList.remove("treeselect-input--top"), n(this, p).srcElement.classList.add("treeselect-input--bottom"));
}, R = new WeakSet(), he = function(e) {
  !n(this, p) || !n(this, u) || (e ? (n(this, p).srcElement.classList.add("treeselect-input--focused"), n(this, u).srcElement.classList.add("treeselect-list--focused")) : (n(this, p).srcElement.classList.remove("treeselect-input--focused"), n(this, u).srcElement.classList.remove("treeselect-list--focused")));
}, le = new WeakSet(), Tt = function(e) {
  var t, s, i, a;
  e ? (t = n(this, p)) == null || t.srcElement.classList.add("treeselect-input--opened") : (s = n(this, p)) == null || s.srcElement.classList.remove("treeselect-input--opened"), this.staticList ? (i = n(this, u)) == null || i.srcElement.classList.add("treeselect-list--static") : (a = n(this, u)) == null || a.srcElement.classList.remove("treeselect-list--static");
}, $ = new WeakSet(), de = function(e) {
  !n(this, _) || !n(this, A) || !n(this, L) || !n(this, B) || ((!this.alwaysOpen || e) && (window.removeEventListener("scroll", n(this, _), !0), window.removeEventListener("resize", n(this, A))), document.removeEventListener("mousedown", n(this, L), !0), document.removeEventListener("focus", n(this, L), !0), window.removeEventListener("blur", n(this, B)));
}, ct = new WeakSet(), js = function() {
  var t, s, i;
  const e = (t = n(this, u)) == null ? void 0 : t.isLastFocusedElementExist();
  this.saveScrollPosition && e ? (s = n(this, u)) == null || s.srcElement.scroll(0, n(this, Q)) : (i = n(this, u)) == null || i.focusFirstListElement();
}, ne = new WeakSet(), Ot = function() {
  var e;
  (e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("input", { detail: this.value })), this.inputCallback && this.inputCallback(this.value);
}, ht = new WeakSet(), Rs = function() {
  var e;
  (e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("name-change", { detail: this.selectedName })), this.nameChangeCallback && this.nameChangeCallback(this.selectedName);
}, dt = new WeakSet(), $s = function() {
  var e;
  this.alwaysOpen || ((e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("open", { detail: this.value })), this.openCallback && this.openCallback(this.value));
}, ut = new WeakSet(), Ws = function() {
  var e;
  this.alwaysOpen || ((e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("close", { detail: this.value })), this.closeCallback && this.closeCallback(this.value));
}, pt = new WeakSet(), Us = function(e) {
  var s;
  const t = (e == null ? void 0 : e.trim()) ?? "";
  (s = this.srcElement) == null || s.dispatchEvent(new CustomEvent("search", { detail: t })), this.searchCallback && this.searchCallback(t);
}, mt = new WeakSet(), zs = function(e, t) {
  var s;
  (s = this.srcElement) == null || s.dispatchEvent(new CustomEvent("open-close-group", { detail: { groupId: e, isClosed: t } })), this.openCloseGroupCallback && this.openCloseGroupCallback(e, t);
};
export {
  Mi as default
};
