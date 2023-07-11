var li = Object.defineProperty;
var ni = (l, e, t) => e in l ? li(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t;
var c = (l, e, t) => (ni(l, typeof e != "symbol" ? e + "" : e, t), t), gt = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
};
var n = (l, e, t) => (gt(l, e, "read from private field"), t ? t.call(l) : e.get(l)), r = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, m = (l, e, t, s) => (gt(l, e, "write to private field"), s ? s.call(l, t) : e.set(l, t), t);
var o = (l, e, t) => (gt(l, e, "access private method"), t);
const It = {
  arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',
  arrowDown: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  attention: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
  clear: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
  cross: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  partialCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'
}, O = (l, e) => {
  if (e.innerHTML = "", typeof l == "string")
    e.innerHTML = l;
  else {
    const t = l.cloneNode(!0);
    e.appendChild(t);
  }
}, Pt = (l) => {
  const e = l ? { ...l } : {};
  return Object.keys(It).forEach((t) => {
    e[t] || (e[t] = It[t]);
  }), e;
}, ai = (l) => l.reduce((e, { name: t }, s) => (e += t, s < l.length - 1 && (e += ", "), e), "");
var T, E, D, v, ue, Dt, H, R, pe, Ht, me, Gt, G, U, N, V, fe, Mt, be, Ft, Ce, qt, ge, jt, we, $t, ke, Wt, Ee, Rt, ve, Ut, Le, zt, ye, Yt, xe, Kt, Se, Xt, _e, Jt, Ae, Zt, Te, Qt, Ne, es, z, wt;
class oi {
  constructor({
    value: e,
    showTags: t,
    tagsCountText: s,
    clearable: i,
    isAlwaysOpened: a,
    searchable: h,
    placeholder: p,
    disabled: f,
    isSingleSelect: b,
    id: C,
    ariaLabel: g,
    iconElements: w,
    inputCallback: k,
    searchCallback: y,
    openCallback: I,
    closeCallback: W,
    keydownCallback: ae,
    focusCallback: bt,
    blurCallback: Ct,
    nameChangeCallback: oe
  }) {
    // Private methods
    r(this, ue);
    r(this, H);
    r(this, pe);
    r(this, me);
    r(this, G);
    r(this, N);
    r(this, fe);
    r(this, be);
    r(this, Ce);
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
    // InnerState
    c(this, "isOpened");
    c(this, "searchText");
    c(this, "srcElement");
    // PrivateInnerState
    r(this, T, void 0);
    r(this, E, void 0);
    r(this, D, void 0);
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
    this.value = e, this.showTags = t, this.tagsCountText = s, this.searchable = h, this.placeholder = p, this.clearable = i, this.isAlwaysOpened = a, this.disabled = f, this.isSingleSelect = b, this.id = C, this.ariaLabel = g, this.iconElements = w, this.isOpened = !1, this.searchText = "", m(this, T, o(this, Ce, qt).call(this)), m(this, E, o(this, Le, zt).call(this)), m(this, D, o(this, Se, Xt).call(this)), m(this, v, null), this.inputCallback = k, this.searchCallback = y, this.openCallback = I, this.closeCallback = W, this.keydownCallback = ae, this.focusCallback = bt, this.blurCallback = Ct, this.nameChangeCallback = oe, this.srcElement = o(this, fe, Mt).call(this, n(this, T), n(this, E), n(this, D)), o(this, ue, Dt).call(this);
  }
  // Public methods
  focus() {
    setTimeout(() => n(this, E).focus(), 0);
  }
  blur() {
    this.isOpened && o(this, N, V).call(this), this.clearSearch(), n(this, E).blur();
  }
  updateValue(e) {
    this.value = e, o(this, H, R).call(this), o(this, G, U).call(this);
  }
  removeItem(e) {
    this.value = this.value.filter((t) => t.id !== e), o(this, z, wt).call(this), o(this, H, R).call(this), o(this, G, U).call(this);
  }
  clear() {
    this.value = [], o(this, z, wt).call(this), o(this, H, R).call(this), this.clearSearch();
  }
  openClose() {
    o(this, N, V).call(this);
  }
  clearSearch() {
    this.searchText = "", this.searchCallback(""), o(this, G, U).call(this);
  }
}
T = new WeakMap(), E = new WeakMap(), D = new WeakMap(), v = new WeakMap(), ue = new WeakSet(), Dt = function() {
  o(this, H, R).call(this), o(this, G, U).call(this), o(this, pe, Ht).call(this);
}, H = new WeakSet(), R = function() {
  if (n(this, T).innerHTML = "", this.showTags) {
    n(this, T).append(...o(this, ge, jt).call(this));
    const e = ai(this.value);
    this.nameChangeCallback(e);
  } else {
    const e = o(this, ve, Ut).call(this);
    n(this, T).appendChild(e), this.nameChangeCallback(e.innerText);
  }
  n(this, T).appendChild(n(this, E));
}, pe = new WeakSet(), Ht = function() {
  const e = [];
  n(this, D).innerHTML = "", this.clearable && e.push(o(this, _e, Jt).call(this)), this.isAlwaysOpened || e.push(o(this, Te, Qt).call(this, this.isOpened)), e.length && n(this, D).append(...e);
}, me = new WeakSet(), Gt = function() {
  if (!this.isAlwaysOpened && n(this, v)) {
    const e = this.isOpened ? this.iconElements.arrowUp : this.iconElements.arrowDown;
    O(e, n(this, v));
  }
}, G = new WeakSet(), U = function() {
  var e;
  (e = this.value) != null && e.length ? (n(this, E).removeAttribute("placeholder"), this.srcElement.classList.remove("treeselect-input--value-not-selected")) : (n(this, E).setAttribute("placeholder", this.placeholder), this.srcElement.classList.add("treeselect-input--value-not-selected")), this.searchable ? this.srcElement.classList.remove("treeselect-input--unsearchable") : this.srcElement.classList.add("treeselect-input--unsearchable"), this.isSingleSelect ? this.srcElement.classList.add("treeselect-input--is-single-select") : this.srcElement.classList.remove("treeselect-input--is-single-select"), n(this, E).value = this.searchText;
}, N = new WeakSet(), V = function() {
  this.isOpened = !this.isOpened, o(this, me, Gt).call(this), this.isOpened ? this.openCallback() : this.closeCallback();
}, fe = new WeakSet(), Mt = function(e, t, s) {
  const i = document.createElement("div");
  return i.classList.add("treeselect-input"), i.setAttribute("tabindex", "-1"), i.addEventListener("mousedown", (a) => o(this, be, Ft).call(this, a)), i.addEventListener("focus", () => this.focusCallback(), !0), i.addEventListener("blur", () => this.blurCallback(), !0), e.appendChild(t), i.append(e, s), i;
}, be = new WeakSet(), Ft = function(e) {
  e.stopPropagation(), this.isOpened || o(this, N, V).call(this), this.focus();
}, Ce = new WeakSet(), qt = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-input__tags"), e;
}, ge = new WeakSet(), jt = function() {
  return this.value.map((e) => {
    const t = document.createElement("div");
    t.classList.add("treeselect-input__tags-element"), t.setAttribute("tabindex", "-1"), t.setAttribute("tag-id", e.id.toString()), t.setAttribute("title", e.name);
    const s = o(this, ke, Wt).call(this, e.name), i = o(this, Ee, Rt).call(this);
    return t.addEventListener("mousedown", (a) => o(this, we, $t).call(this, a, e.id)), t.append(s, i), t;
  });
}, we = new WeakSet(), $t = function(e, t) {
  e.preventDefault(), e.stopPropagation(), this.removeItem(t), this.focus();
}, ke = new WeakSet(), Wt = function(e) {
  const t = document.createElement("span");
  return t.classList.add("treeselect-input__tags-name"), t.textContent = e, t;
}, Ee = new WeakSet(), Rt = function() {
  const e = document.createElement("span");
  return e.classList.add("treeselect-input__tags-cross"), O(this.iconElements.cross, e), e;
}, ve = new WeakSet(), Ut = function() {
  const e = document.createElement("span");
  if (e.classList.add("treeselect-input__tags-count"), !this.value.length)
    return e.textContent = "", e.setAttribute("title", ""), e;
  const t = this.value.length === 1 ? this.value[0].name : `${this.value.length} ${this.tagsCountText}`;
  return e.textContent = t, e.setAttribute("title", t), e;
}, Le = new WeakSet(), zt = function() {
  const e = document.createElement("input");
  return e.classList.add("treeselect-input__edit"), this.id && e.setAttribute("id", this.id), (!this.searchable || this.disabled) && e.setAttribute("readonly", "readonly"), this.disabled && e.setAttribute("tabindex", "-1"), this.ariaLabel.length && e.setAttribute("aria-label", this.ariaLabel), e.addEventListener("keydown", (t) => o(this, ye, Yt).call(this, t)), e.addEventListener("input", (t) => o(this, xe, Kt).call(this, t, e)), e;
}, ye = new WeakSet(), Yt = function(e) {
  e.stopPropagation();
  const t = e.key;
  t === "Backspace" && !this.searchText.length && this.value.length && !this.showTags && this.clear(), t === "Backspace" && !this.searchText.length && this.value.length && this.removeItem(this.value[this.value.length - 1].id), e.code === "Space" && (!this.searchText || !this.searchable) && o(this, N, V).call(this), (t === "Enter" || t === "ArrowDown" || t === "ArrowUp") && e.preventDefault(), this.keydownCallback(e), t !== "Tab" && this.focus();
}, xe = new WeakSet(), Kt = function(e, t) {
  e.stopPropagation();
  const s = this.searchText, i = t.value.trim();
  if (s.length === 0 && i.length === 0) {
    t.value = "";
    return;
  }
  if (this.searchable) {
    const a = e.target.value;
    this.searchCallback(a), this.isOpened || o(this, N, V).call(this);
  } else
    t.value = "";
  this.searchText = t.value;
}, Se = new WeakSet(), Xt = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-input__operators"), e;
}, _e = new WeakSet(), Jt = function() {
  const e = document.createElement("span");
  return e.classList.add("treeselect-input__clear"), e.setAttribute("tabindex", "-1"), O(this.iconElements.clear, e), e.addEventListener("mousedown", (t) => o(this, Ae, Zt).call(this, t)), e;
}, Ae = new WeakSet(), Zt = function(e) {
  e.preventDefault(), e.stopPropagation(), (this.searchText.length || this.value.length) && this.clear(), this.focus();
}, Te = new WeakSet(), Qt = function(e) {
  m(this, v, document.createElement("span")), n(this, v).classList.add("treeselect-input__arrow");
  const t = e ? this.iconElements.arrowUp : this.iconElements.arrowDown;
  return O(t, n(this, v)), n(this, v).addEventListener("mousedown", (s) => o(this, Ne, es).call(this, s)), n(this, v);
}, Ne = new WeakSet(), es = function(e) {
  e.stopPropagation(), e.preventDefault(), this.focus(), o(this, N, V).call(this);
}, z = new WeakSet(), wt = function() {
  this.inputCallback(this.value);
};
const ts = (l, e, t, s) => {
  di(e);
  const i = e.filter((a) => !a.disabled && l.some((h) => h === a.id));
  if (t && i.length) {
    i[0].checked = !0;
    return;
  }
  i.forEach((a) => {
    a.checked = !0;
    const h = Ot(a, e, s);
    a.checked = h;
  });
}, Ot = ({ id: l, checked: e }, t, s) => {
  const i = t.find((h) => h.id === l);
  if (!i)
    return !1;
  if (s)
    return i.checked = i.disabled ? !1 : !!e, i.checked;
  const a = ss(!!e, i, t);
  return is(i, t), a;
}, ss = (l, e, t) => {
  if (!e.isGroup)
    return e.checked = e.disabled ? !1 : !!l, e.isPartialChecked = !1, e.checked;
  const s = t.filter((p) => p.childOf === e.id);
  return !l || e.disabled || e.isPartialChecked ? (e.checked = !1, e.isPartialChecked = !1, kt(e, s, t), e.checked) : ls(s, t) ? ns(s) ? (e.checked = !1, e.isPartialChecked = !1, e.disabled = !0, e.checked) : (e.checked = !1, e.isPartialChecked = !0, s.forEach((p) => {
    ss(l, p, t);
  }), e.checked) : (e.checked = !0, e.isPartialChecked = !1, kt(e, s, t), e.checked);
}, is = (l, e) => {
  const t = e.find((s) => s.id === l.childOf);
  t && (ri(t, e), is(t, e));
}, ri = (l, e) => {
  const t = mt(l, e);
  if (ns(t)) {
    l.checked = !1, l.isPartialChecked = !1, l.disabled = !0;
    return;
  }
  if (ci(t)) {
    l.checked = !0, l.isPartialChecked = !1;
    return;
  }
  if (hi(t)) {
    l.checked = !1, l.isPartialChecked = !0;
    return;
  }
  l.checked = !1, l.isPartialChecked = !1;
}, kt = ({ checked: l, disabled: e }, t, s) => {
  t.forEach((i) => {
    i.disabled = !!e || !!i.disabled, i.checked = !!l && !i.disabled, i.isPartialChecked = !1;
    const a = mt(i, s);
    kt({ checked: l, disabled: e }, a, s);
  });
}, ls = (l, e) => l.some((i) => i.disabled) ? !0 : l.some((i) => {
  if (i.isGroup) {
    const a = mt(i, e);
    return ls(a, e);
  }
  return !1;
}), ns = (l) => l.every((e) => !!e.disabled), ci = (l) => l.every((e) => !!e.checked), hi = (l) => l.some((e) => !!e.checked || !!e.isPartialChecked), di = (l) => {
  l.forEach((e) => {
    e.checked = !1, e.isPartialChecked = !1;
  });
}, ui = (l, e, t) => {
  const s = { level: 0, groupId: "" }, i = as(l, e, s.groupId, s.level);
  return mi(i, t);
}, as = (l, e, t, s) => l.reduce((i, a) => {
  var b;
  const h = !!((b = a.children) != null && b.length), p = s >= e && h, f = s > e;
  if (i.push({
    id: a.value,
    name: a.name,
    childOf: t,
    isGroup: h,
    checked: !1,
    isPartialChecked: !1,
    level: s,
    isClosed: p,
    hidden: f,
    disabled: a.disabled ?? !1
  }), h) {
    const C = as(a.children, e, a.value, s + 1);
    i.push(...C);
  }
  return i;
}, []), mt = ({ id: l }, e) => e.filter((t) => t.childOf === l), pi = (l) => {
  const { ungroupedNodes: e, allGroupedNodes: t, allNodes: s } = l.reduce(
    (a, h) => (h.checked && (a.allNodes.push(h), h.isGroup ? a.allGroupedNodes.push(h) : a.ungroupedNodes.push(h)), a),
    {
      ungroupedNodes: [],
      allGroupedNodes: [],
      allNodes: []
    }
  ), i = s.filter((a) => !t.some(({ id: h }) => h === a.childOf));
  return { ungroupedNodes: e, groupedNodes: i, allNodes: s };
}, mi = (l, e) => (l.filter((s) => !!s.disabled).forEach(
  ({ id: s }) => Ot({ id: s, checked: !1 }, l, e)
), l), ft = (l, { id: e, isClosed: t }) => {
  mt({ id: e }, l).forEach((i) => {
    i.hidden = t ?? !1, i.isGroup && !i.isClosed && ft(l, { id: i.id, isClosed: t });
  });
}, fi = (l) => {
  l.filter((e) => e.isGroup && !e.disabled && (e.checked || e.isPartialChecked)).forEach((e) => {
    e.isClosed = !1, ft(l, e);
  });
}, bi = (l, e) => {
  const t = Ci(l, e);
  l.forEach((s) => {
    t.some(({ id: a }) => a === s.id) ? (s.isGroup && (s.isClosed = !1, ft(l, s)), s.hidden = !1) : s.hidden = !0;
  });
}, Ci = (l, e) => l.reduce((t, s) => {
  if (s.name.toLowerCase().includes(e.toLowerCase())) {
    if (t.push(s), s.isGroup) {
      const a = os(s.id, l);
      t.push(...a);
    }
    if (s.childOf) {
      const a = rs(s.childOf, l);
      t.push(...a);
    }
  }
  return t;
}, []), os = (l, e) => e.reduce((t, s) => (s.childOf === l && (t.push(s), s.isGroup && t.push(...os(s.id, e))), t), []), rs = (l, e) => e.reduce((t, s) => (s.id === l && (t.push(s), s.childOf && t.push(...rs(s.childOf, e))), t), []), gi = (l) => {
  const { duplications: e } = l.reduce(
    (t, s) => (t.allItems.some((i) => i.toString() === s.id.toString()) && t.duplications.push(s.id), t.allItems.push(s.id), t),
    {
      duplications: [],
      allItems: []
    }
  );
  e.length && console.error(`Validation: You have duplicated values: ${e.join(", ")}! You should use unique values.`);
}, wi = (l, e, t, s, i, a, h, p, f) => {
  ts(l, e, i, f), p && h && fi(e), ce(e, t, s, a);
}, ce = (l, e, t, s) => {
  l.forEach((i) => {
    const a = e.querySelector(`[input-id="${i.id}"]`), h = A(a);
    a.checked = i.checked, ki(i, h, s), Ei(i, h), vi(i, h), Li(i, h, t), yi(i, h), Si(i, h, l), xi(i, a, t);
  }), _i(l, e);
}, ki = (l, e, t) => {
  l.checked ? e.classList.add("treeselect-list__item--checked") : e.classList.remove("treeselect-list__item--checked"), Array.isArray(t) && t[0] === l.id && !l.disabled ? e.classList.add("treeselect-list__item--single-selected") : e.classList.remove("treeselect-list__item--single-selected");
}, Ei = (l, e) => {
  l.isPartialChecked ? e.classList.add("treeselect-list__item--partial-checked") : e.classList.remove("treeselect-list__item--partial-checked");
}, vi = (l, e) => {
  l.disabled ? e.classList.add("treeselect-list__item--disabled") : e.classList.remove("treeselect-list__item--disabled");
}, Li = (l, e, t) => {
  if (l.isGroup) {
    const s = e.querySelector(".treeselect-list__item-icon"), i = l.isClosed ? t.arrowRight : t.arrowDown;
    O(i, s), l.isClosed ? e.classList.add("treeselect-list__item--closed") : e.classList.remove("treeselect-list__item--closed");
  }
}, yi = (l, e) => {
  l.hidden ? e.classList.add("treeselect-list__item--hidden") : e.classList.remove("treeselect-list__item--hidden");
}, xi = (l, e, t) => {
  const i = e.parentNode.querySelector(".treeselect-list__item-checkbox-icon");
  l.checked ? O(t.check, i) : l.isPartialChecked ? O(t.partialCheck, i) : i.innerHTML = "";
}, Si = (l, e, t) => {
  const s = l.level === 0, i = 20, a = 5;
  if (s) {
    const h = t.some((f) => f.isGroup && f.level === l.level), p = !l.isGroup && h ? `${i}px` : `${a}px`;
    e.style.paddingLeft = l.isGroup ? "0" : p;
  } else
    e.style.paddingLeft = l.isGroup ? `${l.level * i}px` : `${l.level * i + i}px`;
  e.setAttribute("level", l.level.toString()), e.setAttribute("group", l.isGroup.toString());
}, _i = (l, e) => {
  const t = l.some((i) => !i.hidden), s = e.querySelector(".treeselect-list__empty");
  t ? s.classList.add("treeselect-list__empty--hidden") : s.classList.remove("treeselect-list__empty--hidden");
}, A = (l) => l.parentNode.parentNode, Bt = (l, e) => e.find((t) => t.id.toString() === l), Ai = (l) => A(l).querySelector(".treeselect-list__item-icon"), Ti = (l, e) => {
  e && Object.keys(e).forEach((t) => {
    const s = e[t];
    typeof s == "string" && l.setAttribute(t, s);
  });
};
var M, P, x, Y, Oe, cs, Ie, hs, Pe, ds, Be, us, Ve, ps, De, ms, K, Et, He, fs, Ge, bs, Me, Cs, X, vt, Fe, gs, qe, ws, je, ks, $e, Es, We, vs, Re, Ls, Ue, ys, ze, xs, Ye, Ss, Ke, _s, Xe, As, J, Lt, Z, yt, Je, Ts;
class Ni {
  constructor({
    options: e,
    value: t,
    openLevel: s,
    listSlotHtmlComponent: i,
    emptyText: a,
    isSingleSelect: h,
    iconElements: p,
    showCount: f,
    disabledBranchNode: b,
    expandSelected: C,
    isIndependentNodes: g,
    inputCallback: w,
    arrowClickCallback: k,
    mouseupCallback: y
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
    r(this, $e);
    r(this, We);
    r(this, Re);
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
    r(this, P, !0);
    r(this, x, []);
    r(this, Y, !0);
    this.options = e, this.value = t, this.openLevel = s ?? 0, this.listSlotHtmlComponent = i ?? null, this.emptyText = a ?? "No results found...", this.isSingleSelect = h ?? !1, this.showCount = f ?? !1, this.disabledBranchNode = b ?? !1, this.expandSelected = C ?? !1, this.isIndependentNodes = g ?? !1, this.iconElements = p, this.searchText = "", this.flattedOptions = ui(this.options, this.openLevel, this.isIndependentNodes), this.flattedOptionsBeforeSearch = this.flattedOptions, this.selectedNodes = { nodes: [], groupedNodes: [], allNodes: [] }, this.srcElement = o(this, Pe, ds).call(this), this.inputCallback = w, this.arrowClickCallback = k, this.mouseupCallback = y, gi(this.flattedOptions);
  }
  // Public methods
  updateValue(e) {
    this.value = e, m(this, x, this.isSingleSelect ? this.value : []), wi(
      e,
      this.flattedOptions,
      this.srcElement,
      this.iconElements,
      this.isSingleSelect,
      n(this, x),
      this.expandSelected,
      n(this, Y),
      this.isIndependentNodes
    ), m(this, Y, !1), o(this, Z, yt).call(this);
  }
  updateSearchValue(e) {
    if (e === this.searchText)
      return;
    const t = this.searchText === "" && e !== "";
    this.searchText = e, t && (this.flattedOptionsBeforeSearch = JSON.parse(JSON.stringify(this.flattedOptions))), this.searchText === "" && (this.flattedOptions = this.flattedOptionsBeforeSearch.map((s) => {
      const i = this.flattedOptions.find((a) => a.id === s.id);
      return i.isClosed = s.isClosed, i.hidden = s.hidden, i;
    }), this.flattedOptionsBeforeSearch = []), this.searchText && bi(this.flattedOptions, e), ce(this.flattedOptions, this.srcElement, this.iconElements, n(this, x)), this.focusFirstListElement();
  }
  callKeyAction(e) {
    m(this, P, !1);
    const t = this.srcElement.querySelector(".treeselect-list__item--focused");
    if (t == null ? void 0 : t.classList.contains("treeselect-list__item--hidden"))
      return;
    const i = e.key;
    i === "Enter" && t && t.dispatchEvent(new Event("mousedown")), (i === "ArrowLeft" || i === "ArrowRight") && o(this, Oe, cs).call(this, t, e), (i === "ArrowDown" || i === "ArrowUp") && o(this, Ie, hs).call(this, t, i);
  }
  focusFirstListElement() {
    const e = "treeselect-list__item--focused", t = this.srcElement.querySelector(`.${e}`), s = Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter(
      (a) => window.getComputedStyle(A(a)).display !== "none"
    );
    if (!s.length)
      return;
    t && t.classList.remove(e), A(s[0]).classList.add(e);
  }
  isLastFocusedElementExist() {
    return !!n(this, M);
  }
}
M = new WeakMap(), P = new WeakMap(), x = new WeakMap(), Y = new WeakMap(), Oe = new WeakSet(), cs = function(e, t) {
  if (!e)
    return;
  const s = t.key, a = e.querySelector(".treeselect-list__item-checkbox").getAttribute("input-id"), h = Bt(a, this.flattedOptions), p = e.querySelector(".treeselect-list__item-icon");
  s === "ArrowLeft" && !h.isClosed && h.isGroup && (p.dispatchEvent(new Event("mousedown")), t.preventDefault()), s === "ArrowRight" && h.isClosed && h.isGroup && (p.dispatchEvent(new Event("mousedown")), t.preventDefault());
}, Ie = new WeakSet(), hs = function(e, t) {
  var i;
  const s = Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter(
    (a) => window.getComputedStyle(A(a)).display !== "none"
  );
  if (s.length)
    if (!e)
      A(s[0]).classList.add("treeselect-list__item--focused");
    else {
      const a = s.findIndex(
        (I) => A(I).classList.contains("treeselect-list__item--focused")
      );
      A(s[a]).classList.remove("treeselect-list__item--focused");
      const p = t === "ArrowDown" ? a + 1 : a - 1, f = t === "ArrowDown" ? 0 : s.length - 1, b = s[p] ?? s[f], C = !s[p], g = A(b);
      g.classList.add("treeselect-list__item--focused");
      const w = this.srcElement.getBoundingClientRect(), k = g.getBoundingClientRect();
      if (C && t === "ArrowDown") {
        this.srcElement.scroll(0, 0);
        return;
      }
      if (C && t === "ArrowUp") {
        this.srcElement.scroll(0, this.srcElement.scrollHeight);
        return;
      }
      const y = ((i = this.listSlotHtmlComponent) == null ? void 0 : i.clientHeight) ?? 0;
      if (w.y + w.height < k.y + k.height + y) {
        this.srcElement.scroll(0, this.srcElement.scrollTop + k.height);
        return;
      }
      if (w.y > k.y) {
        this.srcElement.scroll(0, this.srcElement.scrollTop - k.height);
        return;
      }
    }
}, Pe = new WeakSet(), ds = function() {
  const e = o(this, Be, us).call(this), t = o(this, K, Et).call(this, this.options);
  e.append(...t);
  const s = o(this, Ge, bs).call(this);
  e.append(s);
  const i = o(this, He, fs).call(this);
  return i && e.append(i), e;
}, Be = new WeakSet(), us = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-list"), this.isSingleSelect && e.classList.add("treeselect-list--single-select"), this.disabledBranchNode && e.classList.add("treeselect-list--disabled-branch-node"), e.addEventListener("mouseout", (t) => o(this, Ve, ps).call(this, t)), e.addEventListener("mousemove", () => o(this, De, ms).call(this)), e.addEventListener("mouseup", () => this.mouseupCallback(), !0), e;
}, Ve = new WeakSet(), ps = function(e) {
  e.stopPropagation(), n(this, M) && n(this, P) && n(this, M).classList.add("treeselect-list__item--focused");
}, De = new WeakSet(), ms = function() {
  m(this, P, !0);
}, K = new WeakSet(), Et = function(e) {
  return e.reduce((t, s) => {
    var a;
    if ((a = s.children) != null && a.length) {
      const h = o(this, Me, Cs).call(this, s), p = o(this, K, Et).call(this, s.children);
      return h.append(...p), t.push(h), t;
    }
    const i = o(this, X, vt).call(this, s, !1);
    return t.push(i), t;
  }, []);
}, He = new WeakSet(), fs = function() {
  if (!this.listSlotHtmlComponent)
    return null;
  const e = document.createElement("div");
  return e.classList.add("treeselect-list__slot"), e.appendChild(this.listSlotHtmlComponent), e;
}, Ge = new WeakSet(), bs = function() {
  const e = document.createElement("div");
  e.classList.add("treeselect-list__empty"), e.setAttribute("title", this.emptyText);
  const t = document.createElement("span");
  t.classList.add("treeselect-list__empty-icon"), O(this.iconElements.attention, t);
  const s = document.createElement("span");
  return s.classList.add("treeselect-list__empty-text"), s.textContent = this.emptyText, e.append(t, s), e;
}, Me = new WeakSet(), Cs = function(e) {
  const t = document.createElement("div");
  t.setAttribute("group-container-id", e.value.toString()), t.classList.add("treeselect-list__group-container");
  const s = o(this, X, vt).call(this, e, !0);
  return t.appendChild(s), t;
}, X = new WeakSet(), vt = function(e, t) {
  const s = o(this, Fe, gs).call(this, e);
  if (t) {
    const h = o(this, We, vs).call(this);
    s.appendChild(h), s.classList.add("treeselect-list__item--group");
  }
  const i = o(this, Ue, ys).call(this, e), a = o(this, ze, xs).call(this, e, t);
  return s.append(i, a), s;
}, Fe = new WeakSet(), gs = function(e) {
  const t = document.createElement("div");
  return Ti(t, e.htmlAttr), t.setAttribute("tabindex", "-1"), t.setAttribute("title", e.name), t.classList.add("treeselect-list__item"), t.addEventListener("mouseover", () => o(this, qe, ws).call(this, t), !0), t.addEventListener("mouseout", () => o(this, je, ks).call(this, t), !0), t.addEventListener("mousedown", (s) => o(this, $e, Es).call(this, s, e)), t;
}, qe = new WeakSet(), ws = function(e) {
  n(this, P) && o(this, J, Lt).call(this, !0, e);
}, je = new WeakSet(), ks = function(e) {
  n(this, P) && (o(this, J, Lt).call(this, !1, e), m(this, M, e));
}, $e = new WeakSet(), Es = function(e, t) {
  var a;
  if (e.preventDefault(), e.stopPropagation(), (a = this.flattedOptions.find((h) => h.id === t.value)) == null ? void 0 : a.disabled)
    return;
  const i = e.target.querySelector(".treeselect-list__item-checkbox");
  i.checked = !i.checked, o(this, Ke, _s).call(this, i, t);
}, We = new WeakSet(), vs = function() {
  const e = document.createElement("span");
  return e.setAttribute("tabindex", "-1"), e.classList.add("treeselect-list__item-icon"), O(this.iconElements.arrowDown, e), e.addEventListener("mousedown", (t) => o(this, Re, Ls).call(this, t)), e;
}, Re = new WeakSet(), Ls = function(e) {
  e.preventDefault(), e.stopPropagation(), o(this, Xe, As).call(this, e);
}, Ue = new WeakSet(), ys = function(e) {
  const t = document.createElement("div");
  t.classList.add("treeselect-list__item-checkbox-container");
  const s = document.createElement("span");
  s.classList.add("treeselect-list__item-checkbox-icon"), s.innerHTML = "";
  const i = document.createElement("input");
  return i.setAttribute("tabindex", "-1"), i.setAttribute("type", "checkbox"), i.setAttribute("input-id", e.value.toString()), i.classList.add("treeselect-list__item-checkbox"), t.append(s, i), t;
}, ze = new WeakSet(), xs = function(e, t) {
  const s = document.createElement("label");
  if (s.textContent = e.name, s.classList.add("treeselect-list__item-label"), t && this.showCount) {
    const i = o(this, Ye, Ss).call(this, e);
    s.appendChild(i);
  }
  return s;
}, Ye = new WeakSet(), Ss = function(e) {
  const t = document.createElement("span"), s = this.flattedOptions.filter((i) => i.childOf === e.value);
  return t.textContent = `(${s.length})`, t.classList.add("treeselect-list__item-label-counter"), t;
}, Ke = new WeakSet(), _s = function(e, t) {
  const s = this.flattedOptions.find((i) => i.id === t.value);
  if (s) {
    if (s != null && s.isGroup && this.disabledBranchNode) {
      const i = Ai(e);
      i == null || i.dispatchEvent(new Event("mousedown"));
      return;
    }
    if (this.isSingleSelect) {
      const [i] = n(this, x);
      if (s.id === i)
        return;
      m(this, x, [s.id]), ts([s.id], this.flattedOptions, this.isSingleSelect, this.isIndependentNodes);
    } else {
      s.checked = e.checked;
      const i = Ot(s, this.flattedOptions, this.isIndependentNodes);
      e.checked = i;
    }
    ce(this.flattedOptions, this.srcElement, this.iconElements, n(this, x)), o(this, Je, Ts).call(this);
  }
}, Xe = new WeakSet(), As = function(e) {
  var a, h;
  const t = (h = (a = e.target) == null ? void 0 : a.parentNode) == null ? void 0 : h.querySelector("[input-id]"), s = (t == null ? void 0 : t.getAttribute("input-id")) ?? null, i = Bt(s, this.flattedOptions);
  i && (i.isClosed = !i.isClosed, ft(this.flattedOptions, i), ce(this.flattedOptions, this.srcElement, this.iconElements, n(this, x)), this.arrowClickCallback());
}, J = new WeakSet(), Lt = function(e, t) {
  const s = "treeselect-list__item--focused";
  if (e) {
    const i = Array.from(this.srcElement.querySelectorAll(`.${s}`));
    i.length && i.forEach((a) => a.classList.remove(s)), t.classList.add(s);
  } else
    t.classList.remove(s);
}, Z = new WeakSet(), yt = function() {
  const { ungroupedNodes: e, groupedNodes: t, allNodes: s } = pi(this.flattedOptions);
  this.selectedNodes = { nodes: e, groupedNodes: t, allNodes: s };
}, Je = new WeakSet(), Ts = function() {
  o(this, Z, yt).call(this), this.inputCallback(this.selectedNodes), this.value = this.selectedNodes.nodes.map((e) => e.id);
};
const Vt = ({
  parentHtmlContainer: l,
  staticList: e,
  appendToBody: t,
  isSingleSelect: s,
  value: i,
  direction: a
}) => {
  l || console.error("Validation: parentHtmlContainer prop is required!"), e && t && console.error("Validation: You should set staticList to false if you use appendToBody!"), s && Array.isArray(i) && console.error("Validation: if you use isSingleSelect prop, you should pass a single value!"), !s && !Array.isArray(i) && console.error("Validation: you should pass an array as a value!"), a && a !== "auto" && a !== "bottom" && a !== "top" && console.error("Validation: you should pass (auto | top | bottom | undefined) as a value for the direction prop!");
}, re = (l) => l.map((e) => e.id), Oi = (l) => l ? Array.isArray(l) ? l : [l] : [], Ii = (l, e) => {
  if (e) {
    const [t] = l;
    return t ?? null;
  }
  return l;
};
var d, u, F, Q, q, S, _, L, B, ee, xt, te, St, Ze, Ns, Qe, Os, et, Is, tt, Ps, st, Bs, it, Vs, se, _t, lt, Ds, nt, Hs, at, Gs, ot, Ms, ie, At, rt, Fs, j, he, le, Tt, $, de, ct, qs, ne, Nt, ht, js, dt, $s, ut, Ws, pt, Rs;
class Bi {
  constructor({
    parentHtmlContainer: e,
    value: t,
    options: s,
    openLevel: i,
    appendToBody: a,
    alwaysOpen: h,
    showTags: p,
    tagsCountText: f,
    clearable: b,
    searchable: C,
    placeholder: g,
    grouped: w,
    isGroupedValue: k,
    listSlotHtmlComponent: y,
    disabled: I,
    emptyText: W,
    staticList: ae,
    id: bt,
    ariaLabel: Ct,
    isSingleSelect: oe,
    showCount: Us,
    disabledBranchNode: zs,
    direction: Ys,
    expandSelected: Ks,
    saveScrollPosition: Xs,
    isIndependentNodes: Js,
    iconElements: Zs,
    inputCallback: Qs,
    openCallback: ei,
    closeCallback: ti,
    nameChangeCallback: si,
    searchCallback: ii
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
    r(this, j);
    r(this, le);
    r(this, $);
    r(this, ct);
    // Emits
    r(this, ne);
    r(this, ht);
    r(this, dt);
    r(this, ut);
    r(this, pt);
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
    c(this, "iconElements");
    c(this, "inputCallback");
    c(this, "openCallback");
    c(this, "closeCallback");
    c(this, "nameChangeCallback");
    c(this, "searchCallback");
    // InnerState
    c(this, "ungroupedValue");
    c(this, "groupedValue");
    c(this, "allValue");
    c(this, "isListOpened");
    c(this, "selectedName");
    c(this, "srcElement");
    // Components
    r(this, d, null);
    r(this, u, null);
    // Resize props
    r(this, F, null);
    // List position scroll
    r(this, Q, 0);
    // Timer for search text
    r(this, q, 0);
    // Outside listeners
    r(this, S, null);
    r(this, _, null);
    r(this, L, null);
    r(this, B, null);
    Vt({
      parentHtmlContainer: e,
      value: t,
      staticList: ae,
      appendToBody: a,
      isSingleSelect: oe
    }), this.parentHtmlContainer = e, this.value = [], this.options = s ?? [], this.openLevel = i ?? 0, this.appendToBody = a ?? !1, this.alwaysOpen = !!(h && !I), this.showTags = p ?? !0, this.tagsCountText = f ?? "elements selected", this.clearable = b ?? !0, this.searchable = C ?? !0, this.placeholder = g ?? "Search...", this.grouped = w ?? !0, this.isGroupedValue = k ?? !1, this.listSlotHtmlComponent = y ?? null, this.disabled = I ?? !1, this.emptyText = W ?? "No results found...", this.staticList = !!(ae && !this.appendToBody), this.id = bt ?? "", this.ariaLabel = Ct ?? "", this.isSingleSelect = oe ?? !1, this.showCount = Us ?? !1, this.disabledBranchNode = zs ?? !1, this.direction = Ys ?? "auto", this.expandSelected = Ks ?? !1, this.saveScrollPosition = Xs ?? !0, this.isIndependentNodes = Js ?? !1, this.iconElements = Pt(Zs), this.inputCallback = Qs, this.openCallback = ei, this.closeCallback = ti, this.nameChangeCallback = si, this.searchCallback = ii, this.ungroupedValue = [], this.groupedValue = [], this.allValue = [], this.isListOpened = !1, this.selectedName = "", this.srcElement = null, o(this, ee, xt).call(this, t);
  }
  mount() {
    Vt({
      parentHtmlContainer: this.parentHtmlContainer,
      value: this.value,
      staticList: this.staticList,
      appendToBody: this.appendToBody,
      isSingleSelect: this.isSingleSelect
    }), this.iconElements = Pt(this.iconElements), o(this, ee, xt).call(this, this.value);
  }
  updateValue(e) {
    const t = Oi(e), s = n(this, d);
    s && (s.updateValue(t), o(this, se, _t).call(this, s == null ? void 0 : s.selectedNodes));
  }
  destroy() {
    this.srcElement && (o(this, ie, At).call(this), this.srcElement.innerHTML = "", this.srcElement = null, o(this, $, de).call(this, !0));
  }
  focus() {
    n(this, u) && n(this, u).focus();
  }
  toggleOpenClose() {
    n(this, u) && (n(this, u).openClose(), n(this, u).focus());
  }
  // Outside Listeners
  scrollWindowHandler() {
    this.updateListPosition();
  }
  focusWindowHandler(e) {
    var s, i, a;
    ((s = this.srcElement) == null ? void 0 : s.contains(e.target)) || ((i = n(this, d)) == null ? void 0 : i.srcElement.contains(e.target)) || ((a = n(this, u)) == null || a.blur(), o(this, $, de).call(this, !1), o(this, j, he).call(this, !1));
  }
  blurWindowHandler() {
    var e;
    (e = n(this, u)) == null || e.blur(), o(this, $, de).call(this, !1), o(this, j, he).call(this, !1);
  }
  // Update direction of the list. Support appendToBody and standard mode with absolute
  updateListPosition() {
    var y;
    const e = this.srcElement, t = (y = n(this, d)) == null ? void 0 : y.srcElement;
    if (!e || !t)
      return;
    const { height: s } = t.getBoundingClientRect(), {
      x: i,
      y: a,
      height: h,
      width: p
    } = e.getBoundingClientRect(), f = window.innerHeight, b = a, C = f - a - h;
    let g = b > C && b >= s && C < s;
    if (this.direction !== "auto" && (g = this.direction === "top"), this.appendToBody) {
      (t.style.top !== "0px" || t.style.left !== "0px") && (t.style.top = "0px", t.style.left = "0px");
      const I = i + window.scrollX, W = g ? a + window.scrollY - s : a + window.scrollY + h;
      t.style.transform = `translate(${I}px,${W}px)`, t.style.width = `${p}px`;
    }
    const w = g ? "top" : "bottom";
    t.getAttribute("direction") !== w && (t.setAttribute("direction", w), o(this, rt, Fs).call(this, g, this.appendToBody));
  }
}
d = new WeakMap(), u = new WeakMap(), F = new WeakMap(), Q = new WeakMap(), q = new WeakMap(), S = new WeakMap(), _ = new WeakMap(), L = new WeakMap(), B = new WeakMap(), ee = new WeakSet(), xt = function(e) {
  var a;
  this.destroy();
  const { container: t, list: s, input: i } = o(this, Ze, Ns).call(this);
  this.srcElement = t, m(this, d, s), m(this, u, i), m(this, S, this.scrollWindowHandler.bind(this)), m(this, _, this.scrollWindowHandler.bind(this)), m(this, L, this.focusWindowHandler.bind(this)), m(this, B, this.blurWindowHandler.bind(this)), this.alwaysOpen && ((a = n(this, u)) == null || a.openClose()), this.disabled ? this.srcElement.classList.add("treeselect--disabled") : this.srcElement.classList.remove("treeselect--disabled"), this.updateValue(e ?? this.value);
}, te = new WeakSet(), St = function({
  groupedNodes: e,
  nodes: t,
  allNodes: s
}) {
  this.ungroupedValue = t ? re(t) : [], this.groupedValue = e ? re(e) : [], this.allValue = s ? re(s) : [];
  let i = [];
  this.isIndependentNodes || this.isSingleSelect ? i = this.allValue : this.isGroupedValue ? i = this.groupedValue : i = this.ungroupedValue, this.value = Ii(i, this.isSingleSelect);
}, Ze = new WeakSet(), Ns = function() {
  const e = this.parentHtmlContainer;
  e.classList.add("treeselect");
  const t = new Ni({
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
    iconElements: this.iconElements,
    inputCallback: (i) => o(this, lt, Ds).call(this, i),
    arrowClickCallback: () => o(this, nt, Hs).call(this),
    mouseupCallback: () => {
      var i;
      return (i = n(this, u)) == null ? void 0 : i.focus();
    }
  }), s = new oi({
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
    inputCallback: (i) => o(this, Qe, Os).call(this, i),
    searchCallback: (i) => o(this, tt, Ps).call(this, i),
    openCallback: () => o(this, ot, Ms).call(this),
    closeCallback: () => o(this, ie, At).call(this),
    keydownCallback: (i) => o(this, et, Is).call(this, i),
    focusCallback: () => o(this, st, Bs).call(this),
    blurCallback: () => o(this, it, Vs).call(this),
    nameChangeCallback: (i) => o(this, at, Gs).call(this, i)
  });
  return this.appendToBody && m(this, F, new ResizeObserver(() => this.updateListPosition())), e.append(s.srcElement), { container: e, list: t, input: s };
}, Qe = new WeakSet(), Os = function(e) {
  var i, a;
  const t = re(e);
  (i = n(this, d)) == null || i.updateValue(t);
  const s = ((a = n(this, d)) == null ? void 0 : a.selectedNodes) ?? {};
  o(this, te, St).call(this, s), o(this, ne, Nt).call(this);
}, et = new WeakSet(), Is = function(e) {
  var t;
  this.isListOpened && ((t = n(this, d)) == null || t.callKeyAction(e));
}, tt = new WeakSet(), Ps = function(e) {
  n(this, q) && clearTimeout(n(this, q)), m(this, q, window.setTimeout(() => {
    var t;
    (t = n(this, d)) == null || t.updateSearchValue(e), this.updateListPosition();
  }, 350)), o(this, pt, Rs).call(this, e);
}, st = new WeakSet(), Bs = function() {
  o(this, j, he).call(this, !0), n(this, L) && n(this, L) && n(this, B) && (document.addEventListener("mousedown", n(this, L), !0), document.addEventListener("focus", n(this, L), !0), window.addEventListener("blur", n(this, B)));
}, it = new WeakSet(), Vs = function() {
  setTimeout(() => {
    var s, i;
    const e = (s = n(this, u)) == null ? void 0 : s.srcElement.contains(document.activeElement), t = (i = n(this, d)) == null ? void 0 : i.srcElement.contains(document.activeElement);
    !e && !t && this.blurWindowHandler();
  }, 1);
}, se = new WeakSet(), _t = function(e) {
  var s;
  if (!e)
    return;
  let t = [];
  this.isIndependentNodes || this.isSingleSelect ? t = e.allNodes : this.grouped ? t = e.groupedNodes : t = e.nodes, (s = n(this, u)) == null || s.updateValue(t), o(this, te, St).call(this, e);
}, lt = new WeakSet(), Ds = function(e) {
  var t, s, i;
  o(this, se, _t).call(this, e), this.isSingleSelect && !this.alwaysOpen && ((t = n(this, u)) == null || t.openClose(), (s = n(this, u)) == null || s.clearSearch()), (i = n(this, u)) == null || i.focus(), o(this, ne, Nt).call(this);
}, nt = new WeakSet(), Hs = function() {
  var e;
  (e = n(this, u)) == null || e.focus(), this.updateListPosition();
}, at = new WeakSet(), Gs = function(e) {
  this.selectedName !== e && (this.selectedName = e, o(this, ht, js).call(this));
}, ot = new WeakSet(), Ms = function() {
  var e;
  this.isListOpened = !0, n(this, S) && n(this, _) && (window.addEventListener("scroll", n(this, S), !0), window.addEventListener("resize", n(this, _))), !(!n(this, d) || !this.srcElement) && (this.appendToBody ? (document.body.appendChild(n(this, d).srcElement), (e = n(this, F)) == null || e.observe(this.srcElement)) : this.srcElement.appendChild(n(this, d).srcElement), this.updateListPosition(), o(this, le, Tt).call(this, !0), o(this, ct, qs).call(this), o(this, dt, $s).call(this));
}, ie = new WeakSet(), At = function() {
  var t;
  this.alwaysOpen || (this.isListOpened = !1, n(this, S) && n(this, _) && (window.removeEventListener("scroll", n(this, S), !0), window.removeEventListener("resize", n(this, _))), !n(this, d) || !this.srcElement) || !(this.appendToBody ? document.body.contains(n(this, d).srcElement) : this.srcElement.contains(n(this, d).srcElement)) || (m(this, Q, n(this, d).srcElement.scrollTop), this.appendToBody ? (document.body.removeChild(n(this, d).srcElement), (t = n(this, F)) == null || t.disconnect()) : this.srcElement.removeChild(n(this, d).srcElement), o(this, le, Tt).call(this, !1), o(this, ut, Ws).call(this));
}, rt = new WeakSet(), Fs = function(e, t) {
  if (!n(this, d) || !n(this, u))
    return;
  const s = t ? "treeselect-list--top-to-body" : "treeselect-list--top", i = t ? "treeselect-list--bottom-to-body" : "treeselect-list--bottom";
  e ? (n(this, d).srcElement.classList.add(s), n(this, d).srcElement.classList.remove(i), n(this, u).srcElement.classList.add("treeselect-input--top"), n(this, u).srcElement.classList.remove("treeselect-input--bottom")) : (n(this, d).srcElement.classList.remove(s), n(this, d).srcElement.classList.add(i), n(this, u).srcElement.classList.remove("treeselect-input--top"), n(this, u).srcElement.classList.add("treeselect-input--bottom"));
}, j = new WeakSet(), he = function(e) {
  !n(this, u) || !n(this, d) || (e ? (n(this, u).srcElement.classList.add("treeselect-input--focused"), n(this, d).srcElement.classList.add("treeselect-list--focused")) : (n(this, u).srcElement.classList.remove("treeselect-input--focused"), n(this, d).srcElement.classList.remove("treeselect-list--focused")));
}, le = new WeakSet(), Tt = function(e) {
  var t, s, i, a;
  e ? (t = n(this, u)) == null || t.srcElement.classList.add("treeselect-input--opened") : (s = n(this, u)) == null || s.srcElement.classList.remove("treeselect-input--opened"), this.staticList ? (i = n(this, d)) == null || i.srcElement.classList.add("treeselect-list--static") : (a = n(this, d)) == null || a.srcElement.classList.remove("treeselect-list--static");
}, $ = new WeakSet(), de = function(e) {
  !n(this, S) || !n(this, _) || !n(this, L) || !n(this, B) || ((!this.alwaysOpen || e) && (window.removeEventListener("scroll", n(this, S), !0), window.removeEventListener("resize", n(this, _))), document.removeEventListener("mousedown", n(this, L), !0), document.removeEventListener("focus", n(this, L), !0), window.removeEventListener("blur", n(this, B)));
}, ct = new WeakSet(), qs = function() {
  var t, s, i;
  const e = (t = n(this, d)) == null ? void 0 : t.isLastFocusedElementExist();
  this.saveScrollPosition && e ? (s = n(this, d)) == null || s.srcElement.scroll(0, n(this, Q)) : (i = n(this, d)) == null || i.focusFirstListElement();
}, ne = new WeakSet(), Nt = function() {
  var e;
  (e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("input", { detail: this.value })), this.inputCallback && this.inputCallback(this.value);
}, ht = new WeakSet(), js = function() {
  var e;
  (e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("name-change", { detail: this.selectedName })), this.nameChangeCallback && this.nameChangeCallback(this.selectedName);
}, dt = new WeakSet(), $s = function() {
  var e;
  this.alwaysOpen || ((e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("open", { detail: this.value })), this.openCallback && this.openCallback(this.value));
}, ut = new WeakSet(), Ws = function() {
  var e;
  this.alwaysOpen || ((e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("close", { detail: this.value })), this.closeCallback && this.closeCallback(this.value));
}, pt = new WeakSet(), Rs = function(e) {
  var s;
  const t = (e == null ? void 0 : e.trim()) ?? "";
  (s = this.srcElement) == null || s.dispatchEvent(new CustomEvent("search", { detail: t })), this.searchCallback && this.searchCallback(t);
};
export {
  Bi as default
};
