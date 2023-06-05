var ii = Object.defineProperty;
var li = (l, e, t) => e in l ? ii(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t;
var c = (l, e, t) => (li(l, typeof e != "symbol" ? e + "" : e, t), t), bt = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
};
var n = (l, e, t) => (bt(l, e, "read from private field"), t ? t.call(l) : e.get(l)), r = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, m = (l, e, t, s) => (bt(l, e, "write to private field"), s ? s.call(l, t) : e.set(l, t), t);
var o = (l, e, t) => (bt(l, e, "access private method"), t);
const Ot = {
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
}, It = (l) => {
  const e = l ? { ...l } : {};
  return Object.keys(Ot).forEach((t) => {
    e[t] || (e[t] = Ot[t]);
  }), e;
}, ni = (l) => l.reduce((e, { name: t }, s) => (e += t, s < l.length - 1 && (e += ", "), e), "");
var T, E, D, v, ue, Vt, H, R, pe, Dt, me, Ht, G, U, N, V, fe, Gt, Ce, Mt, be, Ft, ge, qt, we, jt, ke, $t, Ee, Wt, ve, Rt, Le, Ut, ye, zt, xe, Yt, Se, Kt, _e, Xt, Ae, Jt, Te, Zt, Ne, Qt, z, gt;
class ai {
  constructor({
    value: e,
    showTags: t,
    tagsCountText: s,
    clearable: i,
    isAlwaysOpened: a,
    searchable: d,
    placeholder: p,
    disabled: f,
    isSingleSelect: C,
    id: b,
    iconElements: g,
    inputCallback: w,
    searchCallback: k,
    openCallback: y,
    closeCallback: I,
    keydownCallback: W,
    focusCallback: ae,
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
    this.value = e, this.showTags = t, this.tagsCountText = s, this.searchable = d, this.placeholder = p, this.clearable = i, this.isAlwaysOpened = a, this.disabled = f, this.isSingleSelect = C, this.id = b, this.iconElements = g, this.isOpened = !1, this.searchText = "", m(this, T, o(this, be, Ft).call(this)), m(this, E, o(this, Le, Ut).call(this)), m(this, D, o(this, Se, Kt).call(this)), m(this, v, null), this.inputCallback = w, this.searchCallback = k, this.openCallback = y, this.closeCallback = I, this.keydownCallback = W, this.focusCallback = ae, this.blurCallback = Ct, this.nameChangeCallback = oe, this.srcElement = o(this, fe, Gt).call(this, n(this, T), n(this, E), n(this, D)), o(this, ue, Vt).call(this);
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
    this.value = this.value.filter((t) => t.id !== e), o(this, z, gt).call(this), o(this, H, R).call(this), o(this, G, U).call(this);
  }
  clear() {
    this.value = [], o(this, z, gt).call(this), o(this, H, R).call(this), this.clearSearch();
  }
  openClose() {
    o(this, N, V).call(this);
  }
  clearSearch() {
    this.searchText = "", this.searchCallback(""), o(this, G, U).call(this);
  }
}
T = new WeakMap(), E = new WeakMap(), D = new WeakMap(), v = new WeakMap(), ue = new WeakSet(), Vt = function() {
  o(this, H, R).call(this), o(this, G, U).call(this), o(this, pe, Dt).call(this);
}, H = new WeakSet(), R = function() {
  if (n(this, T).innerHTML = "", this.showTags) {
    n(this, T).append(...o(this, ge, qt).call(this));
    const e = ni(this.value);
    this.nameChangeCallback(e);
  } else {
    const e = o(this, ve, Rt).call(this);
    n(this, T).appendChild(e), this.nameChangeCallback(e.innerText);
  }
  n(this, T).appendChild(n(this, E));
}, pe = new WeakSet(), Dt = function() {
  const e = [];
  n(this, D).innerHTML = "", this.clearable && e.push(o(this, _e, Xt).call(this)), this.isAlwaysOpened || e.push(o(this, Te, Zt).call(this, this.isOpened)), e.length && n(this, D).append(...e);
}, me = new WeakSet(), Ht = function() {
  if (!this.isAlwaysOpened && n(this, v)) {
    const e = this.isOpened ? this.iconElements.arrowUp : this.iconElements.arrowDown;
    O(e, n(this, v));
  }
}, G = new WeakSet(), U = function() {
  var e;
  (e = this.value) != null && e.length ? (n(this, E).removeAttribute("placeholder"), this.srcElement.classList.remove("treeselect-input--value-not-selected")) : (n(this, E).setAttribute("placeholder", this.placeholder), this.srcElement.classList.add("treeselect-input--value-not-selected")), this.searchable ? this.srcElement.classList.remove("treeselect-input--unsearchable") : this.srcElement.classList.add("treeselect-input--unsearchable"), this.isSingleSelect ? this.srcElement.classList.add("treeselect-input--is-single-select") : this.srcElement.classList.remove("treeselect-input--is-single-select"), n(this, E).value = this.searchText;
}, N = new WeakSet(), V = function() {
  this.isOpened = !this.isOpened, o(this, me, Ht).call(this), this.isOpened ? this.openCallback() : this.closeCallback();
}, fe = new WeakSet(), Gt = function(e, t, s) {
  const i = document.createElement("div");
  return i.classList.add("treeselect-input"), i.setAttribute("tabindex", "-1"), i.addEventListener("mousedown", (a) => o(this, Ce, Mt).call(this, a)), i.addEventListener("focus", () => this.focusCallback(), !0), i.addEventListener("blur", () => this.blurCallback(), !0), e.appendChild(t), i.append(e, s), i;
}, Ce = new WeakSet(), Mt = function(e) {
  e.stopPropagation(), this.isOpened || o(this, N, V).call(this), this.focus();
}, be = new WeakSet(), Ft = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-input__tags"), e;
}, ge = new WeakSet(), qt = function() {
  return this.value.map((e) => {
    const t = document.createElement("div");
    t.classList.add("treeselect-input__tags-element"), t.setAttribute("tabindex", "-1"), t.setAttribute("tag-id", e.id.toString()), t.setAttribute("title", e.name);
    const s = o(this, ke, $t).call(this, e.name), i = o(this, Ee, Wt).call(this);
    return t.addEventListener("mousedown", (a) => o(this, we, jt).call(this, a, e.id)), t.append(s, i), t;
  });
}, we = new WeakSet(), jt = function(e, t) {
  e.preventDefault(), e.stopPropagation(), this.removeItem(t), this.focus();
}, ke = new WeakSet(), $t = function(e) {
  const t = document.createElement("span");
  return t.classList.add("treeselect-input__tags-name"), t.textContent = e, t;
}, Ee = new WeakSet(), Wt = function() {
  const e = document.createElement("span");
  return e.classList.add("treeselect-input__tags-cross"), O(this.iconElements.cross, e), e;
}, ve = new WeakSet(), Rt = function() {
  const e = document.createElement("span");
  if (e.classList.add("treeselect-input__tags-count"), !this.value.length)
    return e.textContent = "", e.setAttribute("title", ""), e;
  const t = this.value.length === 1 ? this.value[0].name : `${this.value.length} ${this.tagsCountText}`;
  return e.textContent = t, e.setAttribute("title", t), e;
}, Le = new WeakSet(), Ut = function() {
  const e = document.createElement("input");
  return e.classList.add("treeselect-input__edit"), this.id && e.setAttribute("id", this.id), (!this.searchable || this.disabled) && e.setAttribute("readonly", "readonly"), this.disabled && e.setAttribute("tabindex", "-1"), e.addEventListener("keydown", (t) => o(this, ye, zt).call(this, t)), e.addEventListener("input", (t) => o(this, xe, Yt).call(this, t, e)), e;
}, ye = new WeakSet(), zt = function(e) {
  e.stopPropagation();
  const t = e.key;
  t === "Backspace" && !this.searchText.length && this.value.length && !this.showTags && this.clear(), t === "Backspace" && !this.searchText.length && this.value.length && this.removeItem(this.value[this.value.length - 1].id), e.code === "Space" && (!this.searchText || !this.searchable) && o(this, N, V).call(this), (t === "Enter" || t === "ArrowDown" || t === "ArrowUp") && e.preventDefault(), this.keydownCallback(e), t !== "Tab" && this.focus();
}, xe = new WeakSet(), Yt = function(e, t) {
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
}, Se = new WeakSet(), Kt = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-input__operators"), e;
}, _e = new WeakSet(), Xt = function() {
  const e = document.createElement("span");
  return e.classList.add("treeselect-input__clear"), e.setAttribute("tabindex", "-1"), O(this.iconElements.clear, e), e.addEventListener("mousedown", (t) => o(this, Ae, Jt).call(this, t)), e;
}, Ae = new WeakSet(), Jt = function(e) {
  e.preventDefault(), e.stopPropagation(), (this.searchText.length || this.value.length) && this.clear(), this.focus();
}, Te = new WeakSet(), Zt = function(e) {
  m(this, v, document.createElement("span")), n(this, v).classList.add("treeselect-input__arrow");
  const t = e ? this.iconElements.arrowUp : this.iconElements.arrowDown;
  return O(t, n(this, v)), n(this, v).addEventListener("mousedown", (s) => o(this, Ne, Qt).call(this, s)), n(this, v);
}, Ne = new WeakSet(), Qt = function(e) {
  e.stopPropagation(), e.preventDefault(), this.focus(), o(this, N, V).call(this);
}, z = new WeakSet(), gt = function() {
  this.inputCallback(this.value);
};
const es = (l, e, t, s) => {
  di(e);
  const i = e.filter((a) => !a.disabled && l.some((d) => d === a.id));
  if (t && i.length) {
    i[0].checked = !0;
    return;
  }
  i.forEach((a) => {
    a.checked = !0;
    const d = Nt(a, e, s);
    a.checked = d;
  });
}, Nt = ({ id: l, checked: e }, t, s) => {
  const i = t.find((d) => d.id === l);
  if (!i)
    return !1;
  if (s)
    return i.checked = i.disabled ? !1 : !!e, i.checked;
  const a = ts(!!e, i, t);
  return ss(i, t), a;
}, ts = (l, e, t) => {
  if (!e.isGroup)
    return e.checked = e.disabled ? !1 : !!l, e.isPartialChecked = !1, e.checked;
  const s = t.filter((p) => p.childOf === e.id);
  return !l || e.disabled || e.isPartialChecked ? (e.checked = !1, e.isPartialChecked = !1, wt(e, s, t), e.checked) : is(s, t) ? ls(s) ? (e.checked = !1, e.isPartialChecked = !1, e.disabled = !0, e.checked) : (e.checked = !1, e.isPartialChecked = !0, s.forEach((p) => {
    ts(l, p, t);
  }), e.checked) : (e.checked = !0, e.isPartialChecked = !1, wt(e, s, t), e.checked);
}, ss = (l, e) => {
  const t = e.find((s) => s.id === l.childOf);
  t && (oi(t, e), ss(t, e));
}, oi = (l, e) => {
  const t = mt(l, e);
  if (ls(t)) {
    l.checked = !1, l.isPartialChecked = !1, l.disabled = !0;
    return;
  }
  if (ri(t)) {
    l.checked = !0, l.isPartialChecked = !1;
    return;
  }
  if (ci(t)) {
    l.checked = !1, l.isPartialChecked = !0;
    return;
  }
  l.checked = !1, l.isPartialChecked = !1;
}, wt = ({ checked: l, disabled: e }, t, s) => {
  t.forEach((i) => {
    i.disabled = !!e || !!i.disabled, i.checked = !!l && !i.disabled, i.isPartialChecked = !1;
    const a = mt(i, s);
    wt({ checked: l, disabled: e }, a, s);
  });
}, is = (l, e) => l.some((i) => i.disabled) ? !0 : l.some((i) => {
  if (i.isGroup) {
    const a = mt(i, e);
    return is(a, e);
  }
  return !1;
}), ls = (l) => l.every((e) => !!e.disabled), ri = (l) => l.every((e) => !!e.checked), ci = (l) => l.some((e) => !!e.checked || !!e.isPartialChecked), di = (l) => {
  l.forEach((e) => {
    e.checked = !1, e.isPartialChecked = !1;
  });
}, hi = (l, e, t) => {
  const s = { level: 0, groupId: "" }, i = ns(l, e, s.groupId, s.level);
  return pi(i, t);
}, ns = (l, e, t, s) => l.reduce((i, a) => {
  var C;
  const d = !!((C = a.children) != null && C.length), p = s >= e && d, f = s > e;
  if (i.push({
    id: a.value,
    name: a.name,
    childOf: t,
    isGroup: d,
    checked: !1,
    isPartialChecked: !1,
    level: s,
    isClosed: p,
    hidden: f,
    disabled: a.disabled ?? !1
  }), d) {
    const b = ns(a.children, e, a.value, s + 1);
    i.push(...b);
  }
  return i;
}, []), mt = ({ id: l }, e) => e.filter((t) => t.childOf === l), ui = (l) => {
  const { ungroupedNodes: e, allGroupedNodes: t, allNodes: s } = l.reduce(
    (a, d) => (d.checked && (a.allNodes.push(d), d.isGroup ? a.allGroupedNodes.push(d) : a.ungroupedNodes.push(d)), a),
    {
      ungroupedNodes: [],
      allGroupedNodes: [],
      allNodes: []
    }
  ), i = s.filter((a) => !t.some(({ id: d }) => d === a.childOf));
  return { ungroupedNodes: e, groupedNodes: i, allNodes: s };
}, pi = (l, e) => (l.filter((s) => !!s.disabled).forEach(
  ({ id: s }) => Nt({ id: s, checked: !1 }, l, e)
), l), ft = (l, { id: e, isClosed: t }) => {
  mt({ id: e }, l).forEach((i) => {
    i.hidden = t ?? !1, i.isGroup && !i.isClosed && ft(l, { id: i.id, isClosed: t });
  });
}, mi = (l) => {
  l.filter((e) => e.isGroup && !e.disabled && (e.checked || e.isPartialChecked)).forEach((e) => {
    e.isClosed = !1, ft(l, e);
  });
}, fi = (l, e) => {
  const t = Ci(l, e);
  l.forEach((s) => {
    t.some(({ id: a }) => a === s.id) ? (s.isGroup && (s.isClosed = !1, ft(l, s)), s.hidden = !1) : s.hidden = !0;
  });
}, Ci = (l, e) => l.reduce((t, s) => {
  if (s.name.toLowerCase().includes(e.toLowerCase())) {
    if (t.push(s), s.isGroup) {
      const a = as(s.id, l);
      t.push(...a);
    }
    if (s.childOf) {
      const a = os(s.childOf, l);
      t.push(...a);
    }
  }
  return t;
}, []), as = (l, e) => e.reduce((t, s) => (s.childOf === l && (t.push(s), s.isGroup && t.push(...as(s.id, e))), t), []), os = (l, e) => e.reduce((t, s) => (s.id === l && (t.push(s), s.childOf && t.push(...os(s.childOf, e))), t), []), bi = (l) => {
  const { duplications: e } = l.reduce(
    (t, s) => (t.allItems.some((i) => i.toString() === s.id.toString()) && t.duplications.push(s.id), t.allItems.push(s.id), t),
    {
      duplications: [],
      allItems: []
    }
  );
  e.length && console.error(`Validation: You have duplicated values: ${e.join(", ")}! You should use unique values.`);
}, gi = (l, e, t, s, i, a, d, p, f) => {
  es(l, e, i, f), p && d && mi(e), ce(e, t, s, a);
}, ce = (l, e, t, s) => {
  l.forEach((i) => {
    const a = e.querySelector(`[input-id="${i.id}"]`), d = A(a);
    a.checked = i.checked, wi(i, d, s), ki(i, d), Ei(i, d), vi(i, d, t), Li(i, d), xi(i, d, l), yi(i, a, t);
  }), Si(l, e);
}, wi = (l, e, t) => {
  l.checked ? e.classList.add("treeselect-list__item--checked") : e.classList.remove("treeselect-list__item--checked"), Array.isArray(t) && t[0] === l.id && !l.disabled ? e.classList.add("treeselect-list__item--single-selected") : e.classList.remove("treeselect-list__item--single-selected");
}, ki = (l, e) => {
  l.isPartialChecked ? e.classList.add("treeselect-list__item--partial-checked") : e.classList.remove("treeselect-list__item--partial-checked");
}, Ei = (l, e) => {
  l.disabled ? e.classList.add("treeselect-list__item--disabled") : e.classList.remove("treeselect-list__item--disabled");
}, vi = (l, e, t) => {
  if (l.isGroup) {
    const s = e.querySelector(".treeselect-list__item-icon"), i = l.isClosed ? t.arrowRight : t.arrowDown;
    O(i, s), l.isClosed ? e.classList.add("treeselect-list__item--closed") : e.classList.remove("treeselect-list__item--closed");
  }
}, Li = (l, e) => {
  l.hidden ? e.classList.add("treeselect-list__item--hidden") : e.classList.remove("treeselect-list__item--hidden");
}, yi = (l, e, t) => {
  const i = e.parentNode.querySelector(".treeselect-list__item-checkbox-icon");
  l.checked ? O(t.check, i) : l.isPartialChecked ? O(t.partialCheck, i) : i.innerHTML = "";
}, xi = (l, e, t) => {
  const s = l.level === 0, i = 20, a = 5;
  if (s) {
    const d = t.some((f) => f.isGroup && f.level === l.level), p = !l.isGroup && d ? `${i}px` : `${a}px`;
    e.style.paddingLeft = l.isGroup ? "0" : p;
  } else
    e.style.paddingLeft = l.isGroup ? `${l.level * i}px` : `${l.level * i + i}px`;
  e.setAttribute("level", l.level.toString()), e.setAttribute("group", l.isGroup.toString());
}, Si = (l, e) => {
  const t = l.some((i) => !i.hidden), s = e.querySelector(".treeselect-list__empty");
  t ? s.classList.add("treeselect-list__empty--hidden") : s.classList.remove("treeselect-list__empty--hidden");
}, A = (l) => l.parentNode.parentNode, Pt = (l, e) => e.find((t) => t.id.toString() === l), _i = (l) => A(l).querySelector(".treeselect-list__item-icon"), Ai = (l, e) => {
  e && Object.keys(e).forEach((t) => {
    const s = e[t];
    typeof s == "string" && l.setAttribute(t, s);
  });
};
var M, P, x, Y, Oe, rs, Ie, cs, Pe, ds, Be, hs, Ve, us, De, ps, K, kt, He, ms, Ge, fs, Me, Cs, X, Et, Fe, bs, qe, gs, je, ws, $e, ks, We, Es, Re, vs, Ue, Ls, ze, ys, Ye, xs, Ke, Ss, Xe, _s, J, vt, Z, Lt, Je, As;
class Ti {
  constructor({
    options: e,
    value: t,
    openLevel: s,
    listSlotHtmlComponent: i,
    emptyText: a,
    isSingleSelect: d,
    iconElements: p,
    showCount: f,
    disabledBranchNode: C,
    expandSelected: b,
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
    this.options = e, this.value = t, this.openLevel = s ?? 0, this.listSlotHtmlComponent = i ?? null, this.emptyText = a ?? "No results found...", this.isSingleSelect = d ?? !1, this.showCount = f ?? !1, this.disabledBranchNode = C ?? !1, this.expandSelected = b ?? !1, this.isIndependentNodes = g ?? !1, this.iconElements = p, this.searchText = "", this.flattedOptions = hi(this.options, this.openLevel, this.isIndependentNodes), this.flattedOptionsBeforeSearch = this.flattedOptions, this.selectedNodes = { nodes: [], groupedNodes: [], allNodes: [] }, this.srcElement = o(this, Pe, ds).call(this), this.inputCallback = w, this.arrowClickCallback = k, this.mouseupCallback = y, bi(this.flattedOptions);
  }
  // Public methods
  updateValue(e) {
    this.value = e, m(this, x, this.isSingleSelect ? this.value : []), gi(
      e,
      this.flattedOptions,
      this.srcElement,
      this.iconElements,
      this.isSingleSelect,
      n(this, x),
      this.expandSelected,
      n(this, Y),
      this.isIndependentNodes
    ), m(this, Y, !1), o(this, Z, Lt).call(this);
  }
  updateSearchValue(e) {
    if (e === this.searchText)
      return;
    const t = this.searchText === "" && e !== "";
    this.searchText = e, t && (this.flattedOptionsBeforeSearch = JSON.parse(JSON.stringify(this.flattedOptions))), this.searchText === "" && (this.flattedOptions = this.flattedOptionsBeforeSearch.map((s) => {
      const i = this.flattedOptions.find((a) => a.id === s.id);
      return i.isClosed = s.isClosed, i.hidden = s.hidden, i;
    }), this.flattedOptionsBeforeSearch = []), this.searchText && fi(this.flattedOptions, e), ce(this.flattedOptions, this.srcElement, this.iconElements, n(this, x)), this.focusFirstListElement();
  }
  callKeyAction(e) {
    m(this, P, !1);
    const t = this.srcElement.querySelector(".treeselect-list__item--focused");
    if (t == null ? void 0 : t.classList.contains("treeselect-list__item--hidden"))
      return;
    const i = e.key;
    i === "Enter" && t && t.dispatchEvent(new Event("mousedown")), (i === "ArrowLeft" || i === "ArrowRight") && o(this, Oe, rs).call(this, t, e), (i === "ArrowDown" || i === "ArrowUp") && o(this, Ie, cs).call(this, t, i);
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
M = new WeakMap(), P = new WeakMap(), x = new WeakMap(), Y = new WeakMap(), Oe = new WeakSet(), rs = function(e, t) {
  if (!e)
    return;
  const s = t.key, a = e.querySelector(".treeselect-list__item-checkbox").getAttribute("input-id"), d = Pt(a, this.flattedOptions), p = e.querySelector(".treeselect-list__item-icon");
  s === "ArrowLeft" && !d.isClosed && d.isGroup && (p.dispatchEvent(new Event("mousedown")), t.preventDefault()), s === "ArrowRight" && d.isClosed && d.isGroup && (p.dispatchEvent(new Event("mousedown")), t.preventDefault());
}, Ie = new WeakSet(), cs = function(e, t) {
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
      const p = t === "ArrowDown" ? a + 1 : a - 1, f = t === "ArrowDown" ? 0 : s.length - 1, C = s[p] ?? s[f], b = !s[p], g = A(C);
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
  const e = o(this, Be, hs).call(this), t = o(this, K, kt).call(this, this.options);
  e.append(...t);
  const s = o(this, Ge, fs).call(this);
  e.append(s);
  const i = o(this, He, ms).call(this);
  return i && e.append(i), e;
}, Be = new WeakSet(), hs = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-list"), this.isSingleSelect && e.classList.add("treeselect-list--single-select"), this.disabledBranchNode && e.classList.add("treeselect-list--disabled-branch-node"), e.addEventListener("mouseout", (t) => o(this, Ve, us).call(this, t)), e.addEventListener("mousemove", () => o(this, De, ps).call(this)), e.addEventListener("mouseup", () => this.mouseupCallback(), !0), e;
}, Ve = new WeakSet(), us = function(e) {
  e.stopPropagation(), n(this, M) && n(this, P) && n(this, M).classList.add("treeselect-list__item--focused");
}, De = new WeakSet(), ps = function() {
  m(this, P, !0);
}, K = new WeakSet(), kt = function(e) {
  return e.reduce((t, s) => {
    var a;
    if ((a = s.children) != null && a.length) {
      const d = o(this, Me, Cs).call(this, s), p = o(this, K, kt).call(this, s.children);
      return d.append(...p), t.push(d), t;
    }
    const i = o(this, X, Et).call(this, s, !1);
    return t.push(i), t;
  }, []);
}, He = new WeakSet(), ms = function() {
  if (!this.listSlotHtmlComponent)
    return null;
  const e = document.createElement("div");
  return e.classList.add("treeselect-list__slot"), e.appendChild(this.listSlotHtmlComponent), e;
}, Ge = new WeakSet(), fs = function() {
  const e = document.createElement("div");
  e.classList.add("treeselect-list__empty"), e.setAttribute("title", this.emptyText);
  const t = document.createElement("span");
  t.classList.add("treeselect-list__empty-icon"), O(this.iconElements.attention, t);
  const s = document.createElement("span");
  return s.classList.add("treeselect-list__empty-text"), s.textContent = this.emptyText, e.append(t, s), e;
}, Me = new WeakSet(), Cs = function(e) {
  const t = document.createElement("div");
  t.setAttribute("group-container-id", e.value.toString()), t.classList.add("treeselect-list__group-container");
  const s = o(this, X, Et).call(this, e, !0);
  return t.appendChild(s), t;
}, X = new WeakSet(), Et = function(e, t) {
  const s = o(this, Fe, bs).call(this, e);
  if (t) {
    const d = o(this, We, Es).call(this);
    s.appendChild(d), s.classList.add("treeselect-list__item--group");
  }
  const i = o(this, Ue, Ls).call(this, e), a = o(this, ze, ys).call(this, e, t);
  return s.append(i, a), s;
}, Fe = new WeakSet(), bs = function(e) {
  const t = document.createElement("div");
  return Ai(t, e.htmlAttr), t.setAttribute("tabindex", "-1"), t.setAttribute("title", e.name), t.classList.add("treeselect-list__item"), t.addEventListener("mouseover", () => o(this, qe, gs).call(this, t), !0), t.addEventListener("mouseout", () => o(this, je, ws).call(this, t), !0), t.addEventListener("mousedown", (s) => o(this, $e, ks).call(this, s, e)), t;
}, qe = new WeakSet(), gs = function(e) {
  n(this, P) && o(this, J, vt).call(this, !0, e);
}, je = new WeakSet(), ws = function(e) {
  n(this, P) && (o(this, J, vt).call(this, !1, e), m(this, M, e));
}, $e = new WeakSet(), ks = function(e, t) {
  var a;
  if (e.preventDefault(), e.stopPropagation(), (a = this.flattedOptions.find((d) => d.id === t.value)) == null ? void 0 : a.disabled)
    return;
  const i = e.target.querySelector(".treeselect-list__item-checkbox");
  i.checked = !i.checked, o(this, Ke, Ss).call(this, i, t);
}, We = new WeakSet(), Es = function() {
  const e = document.createElement("span");
  return e.setAttribute("tabindex", "-1"), e.classList.add("treeselect-list__item-icon"), O(this.iconElements.arrowDown, e), e.addEventListener("mousedown", (t) => o(this, Re, vs).call(this, t)), e;
}, Re = new WeakSet(), vs = function(e) {
  e.preventDefault(), e.stopPropagation(), o(this, Xe, _s).call(this, e);
}, Ue = new WeakSet(), Ls = function(e) {
  const t = document.createElement("div");
  t.classList.add("treeselect-list__item-checkbox-container");
  const s = document.createElement("span");
  s.classList.add("treeselect-list__item-checkbox-icon"), s.innerHTML = "";
  const i = document.createElement("input");
  return i.setAttribute("tabindex", "-1"), i.setAttribute("type", "checkbox"), i.setAttribute("input-id", e.value.toString()), i.classList.add("treeselect-list__item-checkbox"), t.append(s, i), t;
}, ze = new WeakSet(), ys = function(e, t) {
  const s = document.createElement("label");
  if (s.textContent = e.name, s.classList.add("treeselect-list__item-label"), t && this.showCount) {
    const i = o(this, Ye, xs).call(this, e);
    s.appendChild(i);
  }
  return s;
}, Ye = new WeakSet(), xs = function(e) {
  const t = document.createElement("span"), s = this.flattedOptions.filter((i) => i.childOf === e.value);
  return t.textContent = `(${s.length})`, t.classList.add("treeselect-list__item-label-counter"), t;
}, Ke = new WeakSet(), Ss = function(e, t) {
  const s = this.flattedOptions.find((i) => i.id === t.value);
  if (s) {
    if (s != null && s.isGroup && this.disabledBranchNode) {
      const i = _i(e);
      i == null || i.dispatchEvent(new Event("mousedown"));
      return;
    }
    if (this.isSingleSelect) {
      const [i] = n(this, x);
      if (s.id === i)
        return;
      m(this, x, [s.id]), es([s.id], this.flattedOptions, this.isSingleSelect, this.isIndependentNodes);
    } else {
      s.checked = e.checked;
      const i = Nt(s, this.flattedOptions, this.isIndependentNodes);
      e.checked = i;
    }
    ce(this.flattedOptions, this.srcElement, this.iconElements, n(this, x)), o(this, Je, As).call(this);
  }
}, Xe = new WeakSet(), _s = function(e) {
  var a, d;
  const t = (d = (a = e.target) == null ? void 0 : a.parentNode) == null ? void 0 : d.querySelector("[input-id]"), s = (t == null ? void 0 : t.getAttribute("input-id")) ?? null, i = Pt(s, this.flattedOptions);
  i && (i.isClosed = !i.isClosed, ft(this.flattedOptions, i), ce(this.flattedOptions, this.srcElement, this.iconElements, n(this, x)), this.arrowClickCallback());
}, J = new WeakSet(), vt = function(e, t) {
  const s = "treeselect-list__item--focused";
  if (e) {
    const i = Array.from(this.srcElement.querySelectorAll(`.${s}`));
    i.length && i.forEach((a) => a.classList.remove(s)), t.classList.add(s);
  } else
    t.classList.remove(s);
}, Z = new WeakSet(), Lt = function() {
  const { ungroupedNodes: e, groupedNodes: t, allNodes: s } = ui(this.flattedOptions);
  this.selectedNodes = { nodes: e, groupedNodes: t, allNodes: s };
}, Je = new WeakSet(), As = function() {
  o(this, Z, Lt).call(this), this.inputCallback(this.selectedNodes), this.value = this.selectedNodes.nodes.map((e) => e.id);
};
const Bt = ({
  parentHtmlContainer: l,
  staticList: e,
  appendToBody: t,
  isSingleSelect: s,
  value: i,
  direction: a
}) => {
  l || console.error("Validation: parentHtmlContainer prop is required!"), e && t && console.error("Validation: You should set staticList to false if you use appendToBody!"), s && Array.isArray(i) && console.error("Validation: if you use isSingleSelect prop, you should pass a single value!"), !s && !Array.isArray(i) && console.error("Validation: you should pass an array as a value!"), a && a !== "auto" && a !== "bottom" && a !== "top" && console.error("Validation: you should pass (auto | top | bottom | undefined) as a value for the direction prop!");
}, re = (l) => l.map((e) => e.id), Ni = (l) => l ? Array.isArray(l) ? l : [l] : [], Oi = (l, e) => {
  if (e) {
    const [t] = l;
    return t ?? null;
  }
  return l;
};
var h, u, F, Q, q, S, _, L, B, ee, yt, te, xt, Ze, Ts, Qe, Ns, et, Os, tt, Is, st, Ps, it, Bs, se, St, lt, Vs, nt, Ds, at, Hs, ot, Gs, ie, _t, rt, Ms, j, de, le, At, $, he, ct, Fs, ne, Tt, dt, qs, ht, js, ut, $s, pt, Ws;
class Pi {
  constructor({
    parentHtmlContainer: e,
    value: t,
    options: s,
    openLevel: i,
    appendToBody: a,
    alwaysOpen: d,
    showTags: p,
    tagsCountText: f,
    clearable: C,
    searchable: b,
    placeholder: g,
    grouped: w,
    isGroupedValue: k,
    listSlotHtmlComponent: y,
    disabled: I,
    emptyText: W,
    staticList: ae,
    id: Ct,
    isSingleSelect: oe,
    showCount: Rs,
    disabledBranchNode: Us,
    direction: zs,
    expandSelected: Ys,
    saveScrollPosition: Ks,
    isIndependentNodes: Xs,
    iconElements: Js,
    inputCallback: Zs,
    openCallback: Qs,
    closeCallback: ei,
    nameChangeCallback: ti,
    searchCallback: si
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
    r(this, dt);
    r(this, ht);
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
    r(this, h, null);
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
    Bt({
      parentHtmlContainer: e,
      value: t,
      staticList: ae,
      appendToBody: a,
      isSingleSelect: oe
    }), this.parentHtmlContainer = e, this.value = [], this.options = s ?? [], this.openLevel = i ?? 0, this.appendToBody = a ?? !1, this.alwaysOpen = !!(d && !I), this.showTags = p ?? !0, this.tagsCountText = f ?? "elements selected", this.clearable = C ?? !0, this.searchable = b ?? !0, this.placeholder = g ?? "Search...", this.grouped = w ?? !0, this.isGroupedValue = k ?? !1, this.listSlotHtmlComponent = y ?? null, this.disabled = I ?? !1, this.emptyText = W ?? "No results found...", this.staticList = !!(ae && !this.appendToBody), this.id = Ct ?? "", this.isSingleSelect = oe ?? !1, this.showCount = Rs ?? !1, this.disabledBranchNode = Us ?? !1, this.direction = zs ?? "auto", this.expandSelected = Ys ?? !1, this.saveScrollPosition = Ks ?? !0, this.isIndependentNodes = Xs ?? !1, this.iconElements = It(Js), this.inputCallback = Zs, this.openCallback = Qs, this.closeCallback = ei, this.nameChangeCallback = ti, this.searchCallback = si, this.ungroupedValue = [], this.groupedValue = [], this.allValue = [], this.isListOpened = !1, this.selectedName = "", this.srcElement = null, o(this, ee, yt).call(this, t);
  }
  mount() {
    Bt({
      parentHtmlContainer: this.parentHtmlContainer,
      value: this.value,
      staticList: this.staticList,
      appendToBody: this.appendToBody,
      isSingleSelect: this.isSingleSelect
    }), this.iconElements = It(this.iconElements), o(this, ee, yt).call(this, this.value);
  }
  updateValue(e) {
    const t = Ni(e), s = n(this, h);
    s && (s.updateValue(t), o(this, se, St).call(this, s == null ? void 0 : s.selectedNodes));
  }
  destroy() {
    this.srcElement && (o(this, ie, _t).call(this), this.srcElement.innerHTML = "", this.srcElement = null, o(this, $, he).call(this, !0));
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
    ((s = this.srcElement) == null ? void 0 : s.contains(e.target)) || ((i = n(this, h)) == null ? void 0 : i.srcElement.contains(e.target)) || ((a = n(this, u)) == null || a.blur(), o(this, $, he).call(this, !1), o(this, j, de).call(this, !1));
  }
  blurWindowHandler() {
    var e;
    (e = n(this, u)) == null || e.blur(), o(this, $, he).call(this, !1), o(this, j, de).call(this, !1);
  }
  // Update direction of the list. Support appendToBody and standard mode with absolute
  updateListPosition() {
    var y;
    const e = this.srcElement, t = (y = n(this, h)) == null ? void 0 : y.srcElement;
    if (!e || !t)
      return;
    const { height: s } = t.getBoundingClientRect(), {
      x: i,
      y: a,
      height: d,
      width: p
    } = e.getBoundingClientRect(), f = window.innerHeight, C = a, b = f - a - d;
    let g = C > b && C >= s && b < s;
    if (this.direction !== "auto" && (g = this.direction === "top"), this.appendToBody) {
      (t.style.top !== "0px" || t.style.left !== "0px") && (t.style.top = "0px", t.style.left = "0px");
      const I = i + window.scrollX, W = g ? a + window.scrollY - s : a + window.scrollY + d;
      t.style.transform = `translate(${I}px,${W}px)`, t.style.width = `${p}px`;
    }
    const w = g ? "top" : "bottom";
    t.getAttribute("direction") !== w && (t.setAttribute("direction", w), o(this, rt, Ms).call(this, g, this.appendToBody));
  }
}
h = new WeakMap(), u = new WeakMap(), F = new WeakMap(), Q = new WeakMap(), q = new WeakMap(), S = new WeakMap(), _ = new WeakMap(), L = new WeakMap(), B = new WeakMap(), ee = new WeakSet(), yt = function(e) {
  var a;
  this.destroy();
  const { container: t, list: s, input: i } = o(this, Ze, Ts).call(this);
  this.srcElement = t, m(this, h, s), m(this, u, i), m(this, S, this.scrollWindowHandler.bind(this)), m(this, _, this.scrollWindowHandler.bind(this)), m(this, L, this.focusWindowHandler.bind(this)), m(this, B, this.blurWindowHandler.bind(this)), this.alwaysOpen && ((a = n(this, u)) == null || a.openClose()), this.disabled ? this.srcElement.classList.add("treeselect--disabled") : this.srcElement.classList.remove("treeselect--disabled"), this.updateValue(e ?? this.value);
}, te = new WeakSet(), xt = function({
  groupedNodes: e,
  nodes: t,
  allNodes: s
}) {
  this.ungroupedValue = t ? re(t) : [], this.groupedValue = e ? re(e) : [], this.allValue = s ? re(s) : [];
  let i = [];
  this.isIndependentNodes || this.isSingleSelect ? i = this.allValue : this.isGroupedValue ? i = this.groupedValue : i = this.ungroupedValue, this.value = Oi(i, this.isSingleSelect);
}, Ze = new WeakSet(), Ts = function() {
  const e = this.parentHtmlContainer;
  e.classList.add("treeselect");
  const t = new Ti({
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
    inputCallback: (i) => o(this, lt, Vs).call(this, i),
    arrowClickCallback: () => o(this, nt, Ds).call(this),
    mouseupCallback: () => {
      var i;
      return (i = n(this, u)) == null ? void 0 : i.focus();
    }
  }), s = new ai({
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
    iconElements: this.iconElements,
    inputCallback: (i) => o(this, Qe, Ns).call(this, i),
    searchCallback: (i) => o(this, tt, Is).call(this, i),
    openCallback: () => o(this, ot, Gs).call(this),
    closeCallback: () => o(this, ie, _t).call(this),
    keydownCallback: (i) => o(this, et, Os).call(this, i),
    focusCallback: () => o(this, st, Ps).call(this),
    blurCallback: () => o(this, it, Bs).call(this),
    nameChangeCallback: (i) => o(this, at, Hs).call(this, i)
  });
  return this.appendToBody && m(this, F, new ResizeObserver(() => this.updateListPosition())), e.append(s.srcElement), { container: e, list: t, input: s };
}, Qe = new WeakSet(), Ns = function(e) {
  var i, a;
  const t = re(e);
  (i = n(this, h)) == null || i.updateValue(t);
  const s = ((a = n(this, h)) == null ? void 0 : a.selectedNodes) ?? {};
  o(this, te, xt).call(this, s), o(this, ne, Tt).call(this);
}, et = new WeakSet(), Os = function(e) {
  var t;
  this.isListOpened && ((t = n(this, h)) == null || t.callKeyAction(e));
}, tt = new WeakSet(), Is = function(e) {
  n(this, q) && clearTimeout(n(this, q)), m(this, q, window.setTimeout(() => {
    var t;
    (t = n(this, h)) == null || t.updateSearchValue(e), this.updateListPosition();
  }, 350)), o(this, pt, Ws).call(this, e);
}, st = new WeakSet(), Ps = function() {
  o(this, j, de).call(this, !0), n(this, L) && n(this, L) && n(this, B) && (document.addEventListener("mousedown", n(this, L), !0), document.addEventListener("focus", n(this, L), !0), window.addEventListener("blur", n(this, B)));
}, it = new WeakSet(), Bs = function() {
  setTimeout(() => {
    var s, i;
    const e = (s = n(this, u)) == null ? void 0 : s.srcElement.contains(document.activeElement), t = (i = n(this, h)) == null ? void 0 : i.srcElement.contains(document.activeElement);
    !e && !t && this.blurWindowHandler();
  }, 1);
}, se = new WeakSet(), St = function(e) {
  var s;
  if (!e)
    return;
  let t = [];
  this.isIndependentNodes || this.isSingleSelect ? t = e.allNodes : this.grouped ? t = e.groupedNodes : t = e.nodes, (s = n(this, u)) == null || s.updateValue(t), o(this, te, xt).call(this, e);
}, lt = new WeakSet(), Vs = function(e) {
  var t, s, i;
  o(this, se, St).call(this, e), this.isSingleSelect && !this.alwaysOpen && ((t = n(this, u)) == null || t.openClose(), (s = n(this, u)) == null || s.clearSearch()), (i = n(this, u)) == null || i.focus(), o(this, ne, Tt).call(this);
}, nt = new WeakSet(), Ds = function() {
  var e;
  (e = n(this, u)) == null || e.focus(), this.updateListPosition();
}, at = new WeakSet(), Hs = function(e) {
  this.selectedName !== e && (this.selectedName = e, o(this, dt, qs).call(this));
}, ot = new WeakSet(), Gs = function() {
  var e;
  this.isListOpened = !0, n(this, S) && n(this, _) && (window.addEventListener("scroll", n(this, S), !0), window.addEventListener("resize", n(this, _))), !(!n(this, h) || !this.srcElement) && (this.appendToBody ? (document.body.appendChild(n(this, h).srcElement), (e = n(this, F)) == null || e.observe(this.srcElement)) : this.srcElement.appendChild(n(this, h).srcElement), this.updateListPosition(), o(this, le, At).call(this, !0), o(this, ct, Fs).call(this), o(this, ht, js).call(this));
}, ie = new WeakSet(), _t = function() {
  var t;
  this.alwaysOpen || (this.isListOpened = !1, n(this, S) && n(this, _) && (window.removeEventListener("scroll", n(this, S), !0), window.removeEventListener("resize", n(this, _))), !n(this, h) || !this.srcElement) || !(this.appendToBody ? document.body.contains(n(this, h).srcElement) : this.srcElement.contains(n(this, h).srcElement)) || (m(this, Q, n(this, h).srcElement.scrollTop), this.appendToBody ? (document.body.removeChild(n(this, h).srcElement), (t = n(this, F)) == null || t.disconnect()) : this.srcElement.removeChild(n(this, h).srcElement), o(this, le, At).call(this, !1), o(this, ut, $s).call(this));
}, rt = new WeakSet(), Ms = function(e, t) {
  if (!n(this, h) || !n(this, u))
    return;
  const s = t ? "treeselect-list--top-to-body" : "treeselect-list--top", i = t ? "treeselect-list--bottom-to-body" : "treeselect-list--bottom";
  e ? (n(this, h).srcElement.classList.add(s), n(this, h).srcElement.classList.remove(i), n(this, u).srcElement.classList.add("treeselect-input--top"), n(this, u).srcElement.classList.remove("treeselect-input--bottom")) : (n(this, h).srcElement.classList.remove(s), n(this, h).srcElement.classList.add(i), n(this, u).srcElement.classList.remove("treeselect-input--top"), n(this, u).srcElement.classList.add("treeselect-input--bottom"));
}, j = new WeakSet(), de = function(e) {
  !n(this, u) || !n(this, h) || (e ? (n(this, u).srcElement.classList.add("treeselect-input--focused"), n(this, h).srcElement.classList.add("treeselect-list--focused")) : (n(this, u).srcElement.classList.remove("treeselect-input--focused"), n(this, h).srcElement.classList.remove("treeselect-list--focused")));
}, le = new WeakSet(), At = function(e) {
  var t, s, i, a;
  e ? (t = n(this, u)) == null || t.srcElement.classList.add("treeselect-input--opened") : (s = n(this, u)) == null || s.srcElement.classList.remove("treeselect-input--opened"), this.staticList ? (i = n(this, h)) == null || i.srcElement.classList.add("treeselect-list--static") : (a = n(this, h)) == null || a.srcElement.classList.remove("treeselect-list--static");
}, $ = new WeakSet(), he = function(e) {
  !n(this, S) || !n(this, _) || !n(this, L) || !n(this, B) || ((!this.alwaysOpen || e) && (window.removeEventListener("scroll", n(this, S), !0), window.removeEventListener("resize", n(this, _))), document.removeEventListener("mousedown", n(this, L), !0), document.removeEventListener("focus", n(this, L), !0), window.removeEventListener("blur", n(this, B)));
}, ct = new WeakSet(), Fs = function() {
  var t, s, i;
  const e = (t = n(this, h)) == null ? void 0 : t.isLastFocusedElementExist();
  this.saveScrollPosition && e ? (s = n(this, h)) == null || s.srcElement.scroll(0, n(this, Q)) : (i = n(this, h)) == null || i.focusFirstListElement();
}, ne = new WeakSet(), Tt = function() {
  var e;
  (e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("input", { detail: this.value })), this.inputCallback && this.inputCallback(this.value);
}, dt = new WeakSet(), qs = function() {
  var e;
  (e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("name-change", { detail: this.selectedName })), this.nameChangeCallback && this.nameChangeCallback(this.selectedName);
}, ht = new WeakSet(), js = function() {
  var e;
  this.alwaysOpen || ((e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("open", { detail: this.value })), this.openCallback && this.openCallback(this.value));
}, ut = new WeakSet(), $s = function() {
  var e;
  this.alwaysOpen || ((e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("close", { detail: this.value })), this.closeCallback && this.closeCallback(this.value));
}, pt = new WeakSet(), Ws = function(e) {
  var s;
  const t = (e == null ? void 0 : e.trim()) ?? "";
  (s = this.srcElement) == null || s.dispatchEvent(new CustomEvent("search", { detail: t })), this.searchCallback && this.searchCallback(t);
};
export {
  Pi as default
};
