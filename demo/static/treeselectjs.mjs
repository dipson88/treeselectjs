var di = Object.defineProperty;
var hi = (l, e, t) => e in l ? di(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t;
var c = (l, e, t) => (hi(l, typeof e != "symbol" ? e + "" : e, t), t), vt = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
};
var n = (l, e, t) => (vt(l, e, "read from private field"), t ? t.call(l) : e.get(l)), o = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, f = (l, e, t, s) => (vt(l, e, "write to private field"), s ? s.call(l, t) : e.set(l, t), t);
var r = (l, e, t) => (vt(l, e, "access private method"), t);
const Ot = {
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
  return Object.keys(Ot).forEach((t) => {
    e[t] || (e[t] = Ot[t]);
  }), e;
}, ui = (l) => l.reduce((e, { name: t }, s) => (e += t, s < l.length - 1 && (e += ", "), e), "");
var N, w, H, E, ue, Ht, G, W, pe, Gt, me, Mt, M, U, P, D, fe, Ft, be, zt, Ce, qt, ge, jt, ve, Rt, ke, $t, we, Wt, Ee, Ut, Le, Yt, ye, Kt, xe, Xt, Se, Jt, _e, Zt, Ae, Qt, Te, es, Ne, ts, Y, kt;
class pi {
  constructor({
    value: e,
    showTags: t,
    tagsCountText: s,
    clearable: i,
    isAlwaysOpened: a,
    searchable: d,
    placeholder: h,
    disabled: b,
    isSingleSelect: m,
    id: C,
    ariaLabel: g,
    iconElements: v,
    inputCallback: k,
    searchCallback: y,
    openCallback: x,
    closeCallback: V,
    keydownCallback: z,
    focusCallback: Ct,
    blurCallback: gt,
    nameChangeCallback: re
  }) {
    // Private methods
    o(this, ue);
    o(this, G);
    o(this, pe);
    o(this, me);
    o(this, M);
    o(this, P);
    o(this, fe);
    o(this, be);
    o(this, Ce);
    o(this, ge);
    o(this, ve);
    o(this, ke);
    o(this, we);
    o(this, Ee);
    o(this, Le);
    o(this, ye);
    o(this, xe);
    o(this, Se);
    o(this, _e);
    o(this, Ae);
    o(this, Te);
    o(this, Ne);
    // Emits
    o(this, Y);
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
    o(this, N, void 0);
    o(this, w, void 0);
    o(this, H, void 0);
    o(this, E, void 0);
    // Callbacks
    c(this, "inputCallback");
    c(this, "searchCallback");
    c(this, "openCallback");
    c(this, "closeCallback");
    c(this, "keydownCallback");
    c(this, "focusCallback");
    c(this, "blurCallback");
    c(this, "nameChangeCallback");
    this.value = e, this.showTags = t, this.tagsCountText = s, this.searchable = d, this.placeholder = h, this.clearable = i, this.isAlwaysOpened = a, this.disabled = b, this.isSingleSelect = m, this.id = C, this.ariaLabel = g, this.iconElements = v, this.isOpened = !1, this.searchText = "", f(this, N, r(this, Ce, qt).call(this)), f(this, w, r(this, Le, Yt).call(this)), f(this, H, r(this, Se, Jt).call(this)), f(this, E, null), this.inputCallback = k, this.searchCallback = y, this.openCallback = x, this.closeCallback = V, this.keydownCallback = z, this.focusCallback = Ct, this.blurCallback = gt, this.nameChangeCallback = re, this.srcElement = r(this, fe, Ft).call(this, n(this, N), n(this, w), n(this, H)), r(this, ue, Ht).call(this);
  }
  // Public methods
  focus() {
    setTimeout(() => n(this, w).focus(), 0);
  }
  blur() {
    this.isOpened && r(this, P, D).call(this), this.clearSearch(), n(this, w).blur();
  }
  updateValue(e) {
    this.value = e, r(this, G, W).call(this), r(this, M, U).call(this);
  }
  removeItem(e) {
    this.value = this.value.filter((t) => t.id !== e), r(this, Y, kt).call(this), r(this, G, W).call(this), r(this, M, U).call(this);
  }
  clear() {
    this.value = [], r(this, Y, kt).call(this), r(this, G, W).call(this), this.clearSearch();
  }
  openClose() {
    r(this, P, D).call(this);
  }
  clearSearch() {
    this.searchText = "", this.searchCallback(""), r(this, M, U).call(this);
  }
}
N = new WeakMap(), w = new WeakMap(), H = new WeakMap(), E = new WeakMap(), ue = new WeakSet(), Ht = function() {
  r(this, G, W).call(this), r(this, M, U).call(this), r(this, pe, Gt).call(this);
}, G = new WeakSet(), W = function() {
  if (n(this, N).innerHTML = "", this.showTags) {
    n(this, N).append(...r(this, ge, jt).call(this));
    const e = ui(this.value);
    this.nameChangeCallback(e);
  } else {
    const e = r(this, Ee, Ut).call(this);
    n(this, N).appendChild(e), this.nameChangeCallback(e.innerText);
  }
  n(this, N).appendChild(n(this, w));
}, pe = new WeakSet(), Gt = function() {
  const e = [];
  n(this, H).innerHTML = "", this.clearable && e.push(r(this, _e, Zt).call(this)), this.isAlwaysOpened || e.push(r(this, Te, es).call(this, this.isOpened)), e.length && n(this, H).append(...e);
}, me = new WeakSet(), Mt = function() {
  if (!this.isAlwaysOpened && n(this, E)) {
    const e = this.isOpened ? this.iconElements.arrowUp : this.iconElements.arrowDown;
    I(e, n(this, E));
  }
}, M = new WeakSet(), U = function() {
  var e;
  (e = this.value) != null && e.length ? (n(this, w).removeAttribute("placeholder"), this.srcElement.classList.remove("treeselect-input--value-not-selected")) : (n(this, w).setAttribute("placeholder", this.placeholder), this.srcElement.classList.add("treeselect-input--value-not-selected")), this.searchable ? this.srcElement.classList.remove("treeselect-input--unsearchable") : this.srcElement.classList.add("treeselect-input--unsearchable"), this.isSingleSelect ? this.srcElement.classList.add("treeselect-input--is-single-select") : this.srcElement.classList.remove("treeselect-input--is-single-select"), n(this, w).value = this.searchText;
}, P = new WeakSet(), D = function() {
  this.isOpened = !this.isOpened, r(this, me, Mt).call(this), this.isOpened ? this.openCallback() : this.closeCallback();
}, fe = new WeakSet(), Ft = function(e, t, s) {
  const i = document.createElement("div");
  return i.classList.add("treeselect-input"), i.setAttribute("tabindex", "-1"), i.addEventListener("mousedown", (a) => r(this, be, zt).call(this, a)), i.addEventListener("focus", () => this.focusCallback(), !0), i.addEventListener("blur", () => this.blurCallback(), !0), e.appendChild(t), i.append(e, s), i;
}, be = new WeakSet(), zt = function(e) {
  e.stopPropagation(), this.isOpened || r(this, P, D).call(this), this.focus();
}, Ce = new WeakSet(), qt = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-input__tags"), e;
}, ge = new WeakSet(), jt = function() {
  return this.value.map((e) => {
    const t = document.createElement("div");
    t.classList.add("treeselect-input__tags-element"), t.setAttribute("tabindex", "-1"), t.setAttribute("tag-id", e.id.toString()), t.setAttribute("title", e.name);
    const s = r(this, ke, $t).call(this, e.name), i = r(this, we, Wt).call(this);
    return t.addEventListener("mousedown", (a) => r(this, ve, Rt).call(this, a, e.id)), t.append(s, i), t;
  });
}, ve = new WeakSet(), Rt = function(e, t) {
  e.preventDefault(), e.stopPropagation(), this.removeItem(t), this.focus();
}, ke = new WeakSet(), $t = function(e) {
  const t = document.createElement("span");
  return t.classList.add("treeselect-input__tags-name"), t.textContent = e, t;
}, we = new WeakSet(), Wt = function() {
  const e = document.createElement("span");
  return e.classList.add("treeselect-input__tags-cross"), I(this.iconElements.cross, e), e;
}, Ee = new WeakSet(), Ut = function() {
  const e = document.createElement("span");
  if (e.classList.add("treeselect-input__tags-count"), !this.value.length)
    return e.textContent = "", e.setAttribute("title", ""), e;
  const t = this.value.length === 1 ? this.value[0].name : `${this.value.length} ${this.tagsCountText}`;
  return e.textContent = t, e.setAttribute("title", t), e;
}, Le = new WeakSet(), Yt = function() {
  const e = document.createElement("input");
  return e.classList.add("treeselect-input__edit"), this.id && e.setAttribute("id", this.id), (!this.searchable || this.disabled) && e.setAttribute("readonly", "readonly"), this.disabled && e.setAttribute("tabindex", "-1"), this.ariaLabel.length && e.setAttribute("aria-label", this.ariaLabel), e.addEventListener("keydown", (t) => r(this, ye, Kt).call(this, t)), e.addEventListener("input", (t) => r(this, xe, Xt).call(this, t, e)), e;
}, ye = new WeakSet(), Kt = function(e) {
  e.stopPropagation();
  const t = e.key;
  t === "Backspace" && !this.searchText.length && this.value.length && !this.showTags && this.clear(), t === "Backspace" && !this.searchText.length && this.value.length && this.removeItem(this.value[this.value.length - 1].id), e.code === "Space" && (!this.searchText || !this.searchable) && r(this, P, D).call(this), (t === "Enter" || t === "ArrowDown" || t === "ArrowUp") && e.preventDefault(), this.keydownCallback(e), t !== "Tab" && this.focus();
}, xe = new WeakSet(), Xt = function(e, t) {
  e.stopPropagation();
  const s = this.searchText, i = t.value.trim();
  if (s.length === 0 && i.length === 0) {
    t.value = "";
    return;
  }
  if (this.searchable) {
    const a = e.target.value;
    this.searchCallback(a), this.isOpened || r(this, P, D).call(this);
  } else
    t.value = "";
  this.searchText = t.value;
}, Se = new WeakSet(), Jt = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-input__operators"), e;
}, _e = new WeakSet(), Zt = function() {
  const e = document.createElement("span");
  return e.classList.add("treeselect-input__clear"), e.setAttribute("tabindex", "-1"), I(this.iconElements.clear, e), e.addEventListener("mousedown", (t) => r(this, Ae, Qt).call(this, t)), e;
}, Ae = new WeakSet(), Qt = function(e) {
  e.preventDefault(), e.stopPropagation(), (this.searchText.length || this.value.length) && this.clear(), this.focus();
}, Te = new WeakSet(), es = function(e) {
  f(this, E, document.createElement("span")), n(this, E).classList.add("treeselect-input__arrow");
  const t = e ? this.iconElements.arrowUp : this.iconElements.arrowDown;
  return I(t, n(this, E)), n(this, E).addEventListener("mousedown", (s) => r(this, Ne, ts).call(this, s)), n(this, E);
}, Ne = new WeakSet(), ts = function(e) {
  e.stopPropagation(), e.preventDefault(), this.focus(), r(this, P, D).call(this);
}, Y = new WeakSet(), kt = function() {
  this.inputCallback(this.value);
};
const ss = (l, e, t, s) => {
  Ci(e);
  const i = e.filter((a) => !a.disabled && l.some((d) => d === a.id));
  if (t && i.length) {
    i[0].checked = !0;
    return;
  }
  i.forEach((a) => {
    a.checked = !0;
    const d = It(a, e, s);
    a.checked = d;
  });
}, It = ({ id: l, checked: e }, t, s) => {
  const i = t.find((d) => d.id === l);
  if (!i)
    return !1;
  if (s)
    return i.checked = i.disabled ? !1 : !!e, i.checked;
  const a = is(!!e, i, t);
  return ls(i, t), a;
}, is = (l, e, t) => {
  if (!e.isGroup)
    return e.checked = e.disabled ? !1 : !!l, e.isPartialChecked = !1, e.checked;
  const s = t.filter((h) => h.childOf === e.id);
  return !l || e.disabled || e.isPartialChecked ? (e.checked = !1, e.isPartialChecked = !1, wt(e, s, t), e.checked) : ns(s, t) ? as(s) ? (e.checked = !1, e.isPartialChecked = !1, e.disabled = !0, e.checked) : (e.checked = !1, e.isPartialChecked = !0, s.forEach((h) => {
    is(l, h, t);
  }), e.checked) : (e.checked = !0, e.isPartialChecked = !1, wt(e, s, t), e.checked);
}, ls = (l, e) => {
  const t = e.find((s) => s.id === l.childOf);
  t && (mi(t, e), ls(t, e));
}, mi = (l, e) => {
  const t = ft(l, e);
  if (as(t)) {
    l.checked = !1, l.isPartialChecked = !1, l.disabled = !0;
    return;
  }
  if (fi(t)) {
    l.checked = !0, l.isPartialChecked = !1;
    return;
  }
  if (bi(t)) {
    l.checked = !1, l.isPartialChecked = !0;
    return;
  }
  l.checked = !1, l.isPartialChecked = !1;
}, wt = ({ checked: l, disabled: e }, t, s) => {
  t.forEach((i) => {
    i.disabled = !!e || !!i.disabled, i.checked = !!l && !i.disabled, i.isPartialChecked = !1;
    const a = ft(i, s);
    wt({ checked: l, disabled: e }, a, s);
  });
}, ns = (l, e) => l.some((i) => i.disabled) ? !0 : l.some((i) => {
  if (i.isGroup) {
    const a = ft(i, e);
    return ns(a, e);
  }
  return !1;
}), as = (l) => l.every((e) => !!e.disabled), fi = (l) => l.every((e) => !!e.checked), bi = (l) => l.some((e) => !!e.checked || !!e.isPartialChecked), Ci = (l) => {
  l.forEach((e) => {
    e.checked = !1, e.isPartialChecked = !1;
  });
}, gi = (l, e, t) => {
  const s = { level: 0, groupId: "" }, i = rs(l, e, s.groupId, s.level);
  return ki(i, t);
}, rs = (l, e, t, s) => l.reduce((i, a) => {
  var m;
  const d = !!((m = a.children) != null && m.length), h = s >= e && d, b = s > e;
  if (i.push({
    id: a.value,
    name: a.name,
    childOf: t,
    isGroup: d,
    checked: !1,
    isPartialChecked: !1,
    level: s,
    isClosed: h,
    hidden: b,
    disabled: a.disabled ?? !1
  }), d) {
    const C = rs(a.children, e, a.value, s + 1);
    i.push(...C);
  }
  return i;
}, []), ft = ({ id: l }, e) => e.filter((t) => t.childOf === l), vi = (l) => {
  const { ungroupedNodes: e, allGroupedNodes: t, allNodes: s } = l.reduce(
    (a, d) => (d.checked && (a.allNodes.push(d), d.isGroup ? a.allGroupedNodes.push(d) : a.ungroupedNodes.push(d)), a),
    {
      ungroupedNodes: [],
      allGroupedNodes: [],
      allNodes: []
    }
  ), i = s.filter((a) => !t.some(({ id: d }) => d === a.childOf));
  return { ungroupedNodes: e, groupedNodes: i, allNodes: s };
}, ki = (l, e) => (l.filter((s) => !!s.disabled).forEach(
  ({ id: s }) => It({ id: s, checked: !1 }, l, e)
), l), bt = (l, { id: e, isClosed: t }) => {
  ft({ id: e }, l).forEach((i) => {
    i.hidden = t ?? !1, i.isGroup && !i.isClosed && bt(l, { id: i.id, isClosed: t });
  });
}, wi = (l) => {
  l.filter((e) => e.isGroup && !e.disabled && (e.checked || e.isPartialChecked)).forEach((e) => {
    e.isClosed = !1, bt(l, e);
  });
}, Ei = (l, e) => {
  const t = Li(l, e);
  l.forEach((s) => {
    t.some(({ id: a }) => a === s.id) ? (s.isGroup && (s.isClosed = !1, bt(l, s)), s.hidden = !1) : s.hidden = !0;
  });
}, Li = (l, e) => l.reduce((t, s) => {
  if (s.name.toLowerCase().includes(e.toLowerCase())) {
    if (t.push(s), s.isGroup) {
      const a = os(s.id, l);
      t.push(...a);
    }
    if (s.childOf) {
      const a = cs(s.childOf, l);
      t.push(...a);
    }
  }
  return t;
}, []), os = (l, e) => e.reduce((t, s) => (s.childOf === l && (t.push(s), s.isGroup && t.push(...os(s.id, e))), t), []), cs = (l, e) => e.reduce((t, s) => (s.id === l && (t.push(s), s.childOf && t.push(...cs(s.childOf, e))), t), []), yi = (l) => {
  const { duplications: e } = l.reduce(
    (t, s) => (t.allItems.some((i) => i.toString() === s.id.toString()) && t.duplications.push(s.id), t.allItems.push(s.id), t),
    {
      duplications: [],
      allItems: []
    }
  );
  e.length && console.error(`Validation: You have duplicated values: ${e.join(", ")}! You should use unique values.`);
}, xi = (l, e, t, s, i, a, d, h, b, m, C, g) => {
  ss(l, e, i, b), h && d && wi(e), ce(
    e,
    t,
    s,
    a,
    m,
    C,
    g
  );
}, ce = (l, e, t, s, i, a, d) => {
  l.forEach((h) => {
    const b = e.querySelector(`[input-id="${h.id}"]`), m = T(b);
    b.checked = h.checked, Si(h, m, s), _i(h, m), Ai(h, m), Ti(h, m, t), Ni(h, m), Ii(h, m, l, i, a, d), Pi(h, b, t);
  }), Oi(l, e);
}, Si = (l, e, t) => {
  l.checked ? e.classList.add("treeselect-list__item--checked") : e.classList.remove("treeselect-list__item--checked"), Array.isArray(t) && t[0] === l.id && !l.disabled ? e.classList.add("treeselect-list__item--single-selected") : e.classList.remove("treeselect-list__item--single-selected");
}, _i = (l, e) => {
  l.isPartialChecked ? e.classList.add("treeselect-list__item--partial-checked") : e.classList.remove("treeselect-list__item--partial-checked");
}, Ai = (l, e) => {
  l.disabled ? e.classList.add("treeselect-list__item--disabled") : e.classList.remove("treeselect-list__item--disabled");
}, Ti = (l, e, t) => {
  if (l.isGroup) {
    const s = e.querySelector(".treeselect-list__item-icon"), i = l.isClosed ? t.arrowRight : t.arrowDown;
    I(i, s), l.isClosed ? e.classList.add("treeselect-list__item--closed") : e.classList.remove("treeselect-list__item--closed");
  }
}, Ni = (l, e) => {
  l.hidden ? e.classList.add("treeselect-list__item--hidden") : e.classList.remove("treeselect-list__item--hidden");
}, Pi = (l, e, t) => {
  const i = e.parentNode.querySelector(".treeselect-list__item-checkbox-icon");
  l.checked ? I(t.check, i) : l.isPartialChecked ? I(t.partialCheck, i) : i.innerHTML = "";
}, Ii = (l, e, t, s, i, a) => {
  if (l.level === 0) {
    const h = t.some((C) => C.isGroup && C.level === l.level), b = !l.isGroup && h ? `${i}px` : `${a}px`, m = l.isGroup ? "0" : b;
    s ? e.style.paddingRight = m : e.style.paddingLeft = m;
  } else {
    const h = l.isGroup ? `${l.level * i}px` : `${l.level * i + i}px`;
    s ? e.style.paddingRight = h : e.style.paddingLeft = h;
  }
  e.setAttribute("level", l.level.toString()), e.setAttribute("group", l.isGroup.toString());
}, Oi = (l, e) => {
  const t = l.some((i) => !i.hidden), s = e.querySelector(".treeselect-list__empty");
  t ? s.classList.add("treeselect-list__empty--hidden") : s.classList.remove("treeselect-list__empty--hidden");
}, T = (l) => l.parentNode.parentNode, Vt = (l, e) => e.find((t) => t.id.toString() === l), Bi = (l) => T(l).querySelector(".treeselect-list__item-icon"), Vi = (l, e) => {
  e && Object.keys(e).forEach((t) => {
    const s = e[t];
    typeof s == "string" && l.setAttribute(t, s);
  });
};
var F, O, S, K, Pe, ds, Ie, hs, Oe, us, Be, ps, Ve, ms, De, fs, X, Et, He, bs, Ge, Cs, Me, gs, J, Lt, Fe, vs, ze, ks, qe, ws, je, Es, Re, Ls, $e, ys, We, xs, Ue, Ss, Ye, _s, Ke, As, Xe, Ts, Z, yt, Q, xt, Je, Ns;
class Di {
  constructor({
    options: e,
    value: t,
    openLevel: s,
    listSlotHtmlComponent: i,
    emptyText: a,
    isSingleSelect: d,
    iconElements: h,
    showCount: b,
    disabledBranchNode: m,
    expandSelected: C,
    isIndependentNodes: g,
    rtl: v,
    defaultPadding: k,
    zeroLevelItemPadding: y,
    inputCallback: x,
    arrowClickCallback: V,
    mouseupCallback: z
  }) {
    // Private methods
    o(this, Pe);
    o(this, Ie);
    o(this, Oe);
    o(this, Be);
    o(this, Ve);
    o(this, De);
    o(this, X);
    o(this, He);
    o(this, Ge);
    o(this, Me);
    o(this, J);
    o(this, Fe);
    o(this, ze);
    o(this, qe);
    o(this, je);
    o(this, Re);
    o(this, $e);
    o(this, We);
    o(this, Ue);
    o(this, Ye);
    // Actions
    o(this, Ke);
    o(this, Xe);
    o(this, Z);
    o(this, Q);
    // Emits
    o(this, Je);
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
    c(this, "defaultPadding");
    c(this, "zeroLevelItemPadding");
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
    o(this, F, null);
    o(this, O, !0);
    o(this, S, []);
    o(this, K, !0);
    this.options = e, this.value = t, this.openLevel = s ?? 0, this.listSlotHtmlComponent = i ?? null, this.emptyText = a ?? "No results found...", this.isSingleSelect = d ?? !1, this.showCount = b ?? !1, this.disabledBranchNode = m ?? !1, this.expandSelected = C ?? !1, this.isIndependentNodes = g ?? !1, this.rtl = v ?? !1, this.defaultPadding = k ?? 20, this.zeroLevelItemPadding = y ?? 5, this.iconElements = h, this.searchText = "", this.flattedOptions = gi(this.options, this.openLevel, this.isIndependentNodes), this.flattedOptionsBeforeSearch = this.flattedOptions, this.selectedNodes = { nodes: [], groupedNodes: [], allNodes: [] }, this.srcElement = r(this, Oe, us).call(this), this.inputCallback = x, this.arrowClickCallback = V, this.mouseupCallback = z, yi(this.flattedOptions);
  }
  // Public methods
  updateValue(e) {
    this.value = e, f(this, S, this.isSingleSelect ? this.value : []), xi(
      e,
      this.flattedOptions,
      this.srcElement,
      this.iconElements,
      this.isSingleSelect,
      n(this, S),
      this.expandSelected,
      n(this, K),
      this.isIndependentNodes,
      this.rtl,
      this.defaultPadding,
      this.zeroLevelItemPadding
    ), f(this, K, !1), r(this, Q, xt).call(this);
  }
  updateSearchValue(e) {
    if (e === this.searchText)
      return;
    const t = this.searchText === "" && e !== "";
    this.searchText = e, t && (this.flattedOptionsBeforeSearch = JSON.parse(JSON.stringify(this.flattedOptions))), this.searchText === "" && (this.flattedOptions = this.flattedOptionsBeforeSearch.map((s) => {
      const i = this.flattedOptions.find((a) => a.id === s.id);
      return i.isClosed = s.isClosed, i.hidden = s.hidden, i;
    }), this.flattedOptionsBeforeSearch = []), this.searchText && Ei(this.flattedOptions, e), ce(
      this.flattedOptions,
      this.srcElement,
      this.iconElements,
      n(this, S),
      this.rtl,
      this.defaultPadding,
      this.zeroLevelItemPadding
    ), this.focusFirstListElement();
  }
  callKeyAction(e) {
    f(this, O, !1);
    const t = this.srcElement.querySelector(".treeselect-list__item--focused");
    if (t == null ? void 0 : t.classList.contains("treeselect-list__item--hidden"))
      return;
    const i = e.key;
    i === "Enter" && t && t.dispatchEvent(new Event("mousedown")), (i === "ArrowLeft" || i === "ArrowRight") && r(this, Pe, ds).call(this, t, e), (i === "ArrowDown" || i === "ArrowUp") && r(this, Ie, hs).call(this, t, i);
  }
  focusFirstListElement() {
    const e = "treeselect-list__item--focused", t = this.srcElement.querySelector(`.${e}`), s = Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter(
      (a) => window.getComputedStyle(T(a)).display !== "none"
    );
    if (!s.length)
      return;
    t && t.classList.remove(e), T(s[0]).classList.add(e);
  }
  isLastFocusedElementExist() {
    return !!n(this, F);
  }
}
F = new WeakMap(), O = new WeakMap(), S = new WeakMap(), K = new WeakMap(), Pe = new WeakSet(), ds = function(e, t) {
  if (!e)
    return;
  const s = t.key, a = e.querySelector(".treeselect-list__item-checkbox").getAttribute("input-id"), d = Vt(a, this.flattedOptions), h = e.querySelector(".treeselect-list__item-icon");
  s === "ArrowLeft" && !d.isClosed && d.isGroup && (h.dispatchEvent(new Event("mousedown")), t.preventDefault()), s === "ArrowRight" && d.isClosed && d.isGroup && (h.dispatchEvent(new Event("mousedown")), t.preventDefault());
}, Ie = new WeakSet(), hs = function(e, t) {
  var i;
  const s = Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter(
    (a) => window.getComputedStyle(T(a)).display !== "none"
  );
  if (s.length)
    if (!e)
      T(s[0]).classList.add("treeselect-list__item--focused");
    else {
      const a = s.findIndex(
        (x) => T(x).classList.contains("treeselect-list__item--focused")
      );
      T(s[a]).classList.remove("treeselect-list__item--focused");
      const h = t === "ArrowDown" ? a + 1 : a - 1, b = t === "ArrowDown" ? 0 : s.length - 1, m = s[h] ?? s[b], C = !s[h], g = T(m);
      g.classList.add("treeselect-list__item--focused");
      const v = this.srcElement.getBoundingClientRect(), k = g.getBoundingClientRect();
      if (C && t === "ArrowDown") {
        this.srcElement.scroll(0, 0);
        return;
      }
      if (C && t === "ArrowUp") {
        this.srcElement.scroll(0, this.srcElement.scrollHeight);
        return;
      }
      const y = ((i = this.listSlotHtmlComponent) == null ? void 0 : i.clientHeight) ?? 0;
      if (v.y + v.height < k.y + k.height + y) {
        this.srcElement.scroll(0, this.srcElement.scrollTop + k.height);
        return;
      }
      if (v.y > k.y) {
        this.srcElement.scroll(0, this.srcElement.scrollTop - k.height);
        return;
      }
    }
}, Oe = new WeakSet(), us = function() {
  const e = r(this, Be, ps).call(this), t = r(this, X, Et).call(this, this.options);
  e.append(...t);
  const s = r(this, Ge, Cs).call(this);
  e.append(s);
  const i = r(this, He, bs).call(this);
  return i && e.append(i), e;
}, Be = new WeakSet(), ps = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-list"), this.isSingleSelect && e.classList.add("treeselect-list--single-select"), this.disabledBranchNode && e.classList.add("treeselect-list--disabled-branch-node"), e.addEventListener("mouseout", (t) => r(this, Ve, ms).call(this, t)), e.addEventListener("mousemove", () => r(this, De, fs).call(this)), e.addEventListener("mouseup", () => this.mouseupCallback(), !0), e;
}, Ve = new WeakSet(), ms = function(e) {
  e.stopPropagation(), n(this, F) && n(this, O) && n(this, F).classList.add("treeselect-list__item--focused");
}, De = new WeakSet(), fs = function() {
  f(this, O, !0);
}, X = new WeakSet(), Et = function(e) {
  return e.reduce((t, s) => {
    var a;
    if ((a = s.children) != null && a.length) {
      const d = r(this, Me, gs).call(this, s), h = r(this, X, Et).call(this, s.children);
      return d.append(...h), t.push(d), t;
    }
    const i = r(this, J, Lt).call(this, s, !1);
    return t.push(i), t;
  }, []);
}, He = new WeakSet(), bs = function() {
  if (!this.listSlotHtmlComponent)
    return null;
  const e = document.createElement("div");
  return e.classList.add("treeselect-list__slot"), e.appendChild(this.listSlotHtmlComponent), e;
}, Ge = new WeakSet(), Cs = function() {
  const e = document.createElement("div");
  e.classList.add("treeselect-list__empty"), e.setAttribute("title", this.emptyText);
  const t = document.createElement("span");
  t.classList.add("treeselect-list__empty-icon"), I(this.iconElements.attention, t);
  const s = document.createElement("span");
  return s.classList.add("treeselect-list__empty-text"), s.textContent = this.emptyText, e.append(t, s), e;
}, Me = new WeakSet(), gs = function(e) {
  const t = document.createElement("div");
  t.setAttribute("group-container-id", e.value.toString()), t.classList.add("treeselect-list__group-container");
  const s = r(this, J, Lt).call(this, e, !0);
  return t.appendChild(s), t;
}, J = new WeakSet(), Lt = function(e, t) {
  const s = r(this, Fe, vs).call(this, e);
  if (t) {
    const d = r(this, Re, Ls).call(this);
    s.appendChild(d), s.classList.add("treeselect-list__item--group");
  }
  const i = r(this, We, xs).call(this, e), a = r(this, Ue, Ss).call(this, e, t);
  return s.append(i, a), s;
}, Fe = new WeakSet(), vs = function(e) {
  const t = document.createElement("div");
  return Vi(t, e.htmlAttr), t.setAttribute("tabindex", "-1"), t.setAttribute("title", e.name), t.classList.add("treeselect-list__item"), t.addEventListener("mouseover", () => r(this, ze, ks).call(this, t), !0), t.addEventListener("mouseout", () => r(this, qe, ws).call(this, t), !0), t.addEventListener("mousedown", (s) => r(this, je, Es).call(this, s, e)), t;
}, ze = new WeakSet(), ks = function(e) {
  n(this, O) && r(this, Z, yt).call(this, !0, e);
}, qe = new WeakSet(), ws = function(e) {
  n(this, O) && (r(this, Z, yt).call(this, !1, e), f(this, F, e));
}, je = new WeakSet(), Es = function(e, t) {
  var a;
  if (e.preventDefault(), e.stopPropagation(), (a = this.flattedOptions.find((d) => d.id === t.value)) == null ? void 0 : a.disabled)
    return;
  const i = e.target.querySelector(".treeselect-list__item-checkbox");
  i.checked = !i.checked, r(this, Ke, As).call(this, i, t);
}, Re = new WeakSet(), Ls = function() {
  const e = document.createElement("span");
  return e.setAttribute("tabindex", "-1"), e.classList.add("treeselect-list__item-icon"), I(this.iconElements.arrowDown, e), e.addEventListener("mousedown", (t) => r(this, $e, ys).call(this, t)), e;
}, $e = new WeakSet(), ys = function(e) {
  e.preventDefault(), e.stopPropagation(), r(this, Xe, Ts).call(this, e);
}, We = new WeakSet(), xs = function(e) {
  const t = document.createElement("div");
  t.classList.add("treeselect-list__item-checkbox-container");
  const s = document.createElement("span");
  s.classList.add("treeselect-list__item-checkbox-icon"), s.innerHTML = "";
  const i = document.createElement("input");
  return i.setAttribute("tabindex", "-1"), i.setAttribute("type", "checkbox"), i.setAttribute("input-id", e.value.toString()), i.classList.add("treeselect-list__item-checkbox"), t.append(s, i), t;
}, Ue = new WeakSet(), Ss = function(e, t) {
  const s = document.createElement("label");
  if (s.textContent = e.name, s.classList.add("treeselect-list__item-label"), t && this.showCount) {
    const i = r(this, Ye, _s).call(this, e);
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
      const i = Bi(e);
      i == null || i.dispatchEvent(new Event("mousedown"));
      return;
    }
    if (this.isSingleSelect) {
      const [i] = n(this, S);
      if (s.id === i)
        return;
      f(this, S, [s.id]), ss([s.id], this.flattedOptions, this.isSingleSelect, this.isIndependentNodes);
    } else {
      s.checked = e.checked;
      const i = It(s, this.flattedOptions, this.isIndependentNodes);
      e.checked = i;
    }
    ce(
      this.flattedOptions,
      this.srcElement,
      this.iconElements,
      n(this, S),
      this.rtl,
      this.defaultPadding,
      this.zeroLevelItemPadding
    ), r(this, Je, Ns).call(this);
  }
}, Xe = new WeakSet(), Ts = function(e) {
  var a, d;
  const t = (d = (a = e.target) == null ? void 0 : a.parentNode) == null ? void 0 : d.querySelector("[input-id]"), s = (t == null ? void 0 : t.getAttribute("input-id")) ?? null, i = Vt(s, this.flattedOptions);
  i && (i.isClosed = !i.isClosed, bt(this.flattedOptions, i), ce(
    this.flattedOptions,
    this.srcElement,
    this.iconElements,
    n(this, S),
    this.rtl,
    this.defaultPadding,
    this.zeroLevelItemPadding
  ), this.arrowClickCallback(i.id, i.isClosed));
}, Z = new WeakSet(), yt = function(e, t) {
  const s = "treeselect-list__item--focused";
  if (e) {
    const i = Array.from(this.srcElement.querySelectorAll(`.${s}`));
    i.length && i.forEach((a) => a.classList.remove(s)), t.classList.add(s);
  } else
    t.classList.remove(s);
}, Q = new WeakSet(), xt = function() {
  const { ungroupedNodes: e, groupedNodes: t, allNodes: s } = vi(this.flattedOptions);
  this.selectedNodes = { nodes: e, groupedNodes: t, allNodes: s };
}, Je = new WeakSet(), Ns = function() {
  r(this, Q, xt).call(this), this.inputCallback(this.selectedNodes), this.value = this.selectedNodes.nodes.map((e) => e.id);
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
}, oe = (l) => l.map((e) => e.id), Hi = (l) => l ? Array.isArray(l) ? l : [l] : [], Gi = (l, e) => {
  if (e) {
    const [t] = l;
    return t ?? null;
  }
  return l;
};
var u, p, q, ee, j, _, A, L, B, te, St, se, _t, Ze, Ps, Qe, Is, et, Os, tt, Bs, st, Vs, it, Ds, ie, At, lt, Hs, nt, Gs, at, Ms, rt, Fs, le, Tt, ot, zs, R, de, ne, Nt, $, he, ct, qs, ae, Pt, dt, js, ht, Rs, ut, $s, pt, Ws, mt, Us;
class Fi {
  constructor({
    parentHtmlContainer: e,
    value: t,
    options: s,
    openLevel: i,
    appendToBody: a,
    alwaysOpen: d,
    showTags: h,
    tagsCountText: b,
    clearable: m,
    searchable: C,
    placeholder: g,
    grouped: v,
    isGroupedValue: k,
    listSlotHtmlComponent: y,
    disabled: x,
    emptyText: V,
    staticList: z,
    id: Ct,
    ariaLabel: gt,
    isSingleSelect: re,
    showCount: Ys,
    disabledBranchNode: Ks,
    direction: Xs,
    expandSelected: Js,
    saveScrollPosition: Zs,
    isIndependentNodes: Qs,
    rtl: ei,
    defaultPadding: ti,
    zeroLevelItemPadding: si,
    iconElements: ii,
    inputCallback: li,
    openCallback: ni,
    closeCallback: ai,
    nameChangeCallback: ri,
    searchCallback: oi,
    openCloseGroupCallback: ci
  }) {
    o(this, te);
    o(this, se);
    o(this, Ze);
    o(this, Qe);
    o(this, et);
    o(this, tt);
    o(this, st);
    o(this, it);
    o(this, ie);
    o(this, lt);
    o(this, nt);
    o(this, at);
    o(this, rt);
    o(this, le);
    o(this, ot);
    o(this, R);
    o(this, ne);
    o(this, $);
    o(this, ct);
    // Emits
    o(this, ae);
    o(this, dt);
    o(this, ht);
    o(this, ut);
    o(this, pt);
    o(this, mt);
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
    c(this, "defaultPadding");
    c(this, "zeroLevelItemPadding");
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
    o(this, u, null);
    o(this, p, null);
    // Resize props
    o(this, q, null);
    // List position scroll
    o(this, ee, 0);
    // Timer for search text
    o(this, j, 0);
    // Outside listeners
    o(this, _, null);
    o(this, A, null);
    o(this, L, null);
    o(this, B, null);
    Dt({
      parentHtmlContainer: e,
      value: t,
      staticList: z,
      appendToBody: a,
      isSingleSelect: re
    }), this.parentHtmlContainer = e, this.value = [], this.options = s ?? [], this.openLevel = i ?? 0, this.appendToBody = a ?? !1, this.alwaysOpen = !!(d && !x), this.showTags = h ?? !0, this.tagsCountText = b ?? "elements selected", this.clearable = m ?? !0, this.searchable = C ?? !0, this.placeholder = g ?? "Search...", this.grouped = v ?? !0, this.isGroupedValue = k ?? !1, this.listSlotHtmlComponent = y ?? null, this.disabled = x ?? !1, this.emptyText = V ?? "No results found...", this.staticList = !!(z && !this.appendToBody), this.id = Ct ?? "", this.ariaLabel = gt ?? "", this.isSingleSelect = re ?? !1, this.showCount = Ys ?? !1, this.disabledBranchNode = Ks ?? !1, this.direction = Xs ?? "auto", this.expandSelected = Js ?? !1, this.saveScrollPosition = Zs ?? !0, this.isIndependentNodes = Qs ?? !1, this.rtl = ei ?? !1, this.defaultPadding = ti ?? 20, this.zeroLevelItemPadding = si ?? 5, this.iconElements = Bt(ii), this.inputCallback = li, this.openCallback = ni, this.closeCallback = ai, this.nameChangeCallback = ri, this.searchCallback = oi, this.openCloseGroupCallback = ci, this.ungroupedValue = [], this.groupedValue = [], this.allValue = [], this.isListOpened = !1, this.selectedName = "", this.srcElement = null, r(this, te, St).call(this, t);
  }
  mount() {
    Dt({
      parentHtmlContainer: this.parentHtmlContainer,
      value: this.value,
      staticList: this.staticList,
      appendToBody: this.appendToBody,
      isSingleSelect: this.isSingleSelect
    }), this.iconElements = Bt(this.iconElements), r(this, te, St).call(this, this.value);
  }
  updateValue(e) {
    const t = Hi(e), s = n(this, u);
    s && (s.updateValue(t), r(this, ie, At).call(this, s == null ? void 0 : s.selectedNodes));
  }
  destroy() {
    this.srcElement && (r(this, le, Tt).call(this), this.srcElement.innerHTML = "", this.srcElement = null, r(this, $, he).call(this, !0));
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
    ((s = this.srcElement) == null ? void 0 : s.contains(e.target)) || ((i = n(this, u)) == null ? void 0 : i.srcElement.contains(e.target)) || ((a = n(this, p)) == null || a.blur(), r(this, $, he).call(this, !1), r(this, R, de).call(this, !1));
  }
  blurWindowHandler() {
    var e;
    (e = n(this, p)) == null || e.blur(), r(this, $, he).call(this, !1), r(this, R, de).call(this, !1);
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
      height: d,
      width: h
    } = e.getBoundingClientRect(), b = window.innerHeight, m = a, C = b - a - d;
    let g = m > C && m >= s && C < s;
    if (this.direction !== "auto" && (g = this.direction === "top"), this.appendToBody) {
      (t.style.top !== "0px" || t.style.left !== "0px") && (t.style.top = "0px", t.style.left = "0px");
      const x = i + window.scrollX, V = g ? a + window.scrollY - s : a + window.scrollY + d;
      t.style.transform = `translate(${x}px,${V}px)`, t.style.width = `${h}px`;
    }
    const v = g ? "top" : "bottom";
    t.getAttribute("direction") !== v && (t.setAttribute("direction", v), r(this, ot, zs).call(this, g, this.appendToBody));
  }
}
u = new WeakMap(), p = new WeakMap(), q = new WeakMap(), ee = new WeakMap(), j = new WeakMap(), _ = new WeakMap(), A = new WeakMap(), L = new WeakMap(), B = new WeakMap(), te = new WeakSet(), St = function(e) {
  var a;
  this.destroy();
  const { container: t, list: s, input: i } = r(this, Ze, Ps).call(this);
  this.srcElement = t, f(this, u, s), f(this, p, i), f(this, _, this.scrollWindowHandler.bind(this)), f(this, A, this.scrollWindowHandler.bind(this)), f(this, L, this.focusWindowHandler.bind(this)), f(this, B, this.blurWindowHandler.bind(this)), this.alwaysOpen && ((a = n(this, p)) == null || a.openClose()), this.disabled ? this.srcElement.classList.add("treeselect--disabled") : this.srcElement.classList.remove("treeselect--disabled"), this.updateValue(e ?? this.value);
}, se = new WeakSet(), _t = function({
  groupedNodes: e,
  nodes: t,
  allNodes: s
}) {
  this.ungroupedValue = t ? oe(t) : [], this.groupedValue = e ? oe(e) : [], this.allValue = s ? oe(s) : [];
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
    defaultPadding: this.defaultPadding,
    zeroLevelItemPadding: this.zeroLevelItemPadding,
    iconElements: this.iconElements,
    inputCallback: (i) => r(this, lt, Hs).call(this, i),
    arrowClickCallback: (i, a) => r(this, nt, Gs).call(this, i, a),
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
    inputCallback: (i) => r(this, Qe, Is).call(this, i),
    searchCallback: (i) => r(this, tt, Bs).call(this, i),
    openCallback: () => r(this, rt, Fs).call(this),
    closeCallback: () => r(this, le, Tt).call(this),
    keydownCallback: (i) => r(this, et, Os).call(this, i),
    focusCallback: () => r(this, st, Vs).call(this),
    blurCallback: () => r(this, it, Ds).call(this),
    nameChangeCallback: (i) => r(this, at, Ms).call(this, i)
  });
  return this.appendToBody && f(this, q, new ResizeObserver(() => this.updateListPosition())), e.append(s.srcElement), { container: e, list: t, input: s };
}, Qe = new WeakSet(), Is = function(e) {
  var i, a;
  const t = oe(e);
  (i = n(this, u)) == null || i.updateValue(t);
  const s = ((a = n(this, u)) == null ? void 0 : a.selectedNodes) ?? {};
  r(this, se, _t).call(this, s), r(this, ae, Pt).call(this);
}, et = new WeakSet(), Os = function(e) {
  var t;
  this.isListOpened && ((t = n(this, u)) == null || t.callKeyAction(e));
}, tt = new WeakSet(), Bs = function(e) {
  n(this, j) && clearTimeout(n(this, j)), f(this, j, window.setTimeout(() => {
    var t;
    (t = n(this, u)) == null || t.updateSearchValue(e), this.updateListPosition();
  }, 350)), r(this, pt, Ws).call(this, e);
}, st = new WeakSet(), Vs = function() {
  r(this, R, de).call(this, !0), n(this, L) && n(this, L) && n(this, B) && (document.addEventListener("mousedown", n(this, L), !0), document.addEventListener("focus", n(this, L), !0), window.addEventListener("blur", n(this, B)));
}, it = new WeakSet(), Ds = function() {
  setTimeout(() => {
    var s, i;
    const e = (s = n(this, p)) == null ? void 0 : s.srcElement.contains(document.activeElement), t = (i = n(this, u)) == null ? void 0 : i.srcElement.contains(document.activeElement);
    !e && !t && this.blurWindowHandler();
  }, 1);
}, ie = new WeakSet(), At = function(e) {
  var s;
  if (!e)
    return;
  let t = [];
  this.isIndependentNodes || this.isSingleSelect ? t = e.allNodes : this.grouped ? t = e.groupedNodes : t = e.nodes, (s = n(this, p)) == null || s.updateValue(t), r(this, se, _t).call(this, e);
}, lt = new WeakSet(), Hs = function(e) {
  var t, s, i;
  r(this, ie, At).call(this, e), this.isSingleSelect && !this.alwaysOpen && ((t = n(this, p)) == null || t.openClose(), (s = n(this, p)) == null || s.clearSearch()), (i = n(this, p)) == null || i.focus(), r(this, ae, Pt).call(this);
}, nt = new WeakSet(), Gs = function(e, t) {
  var s;
  (s = n(this, p)) == null || s.focus(), this.updateListPosition(), r(this, mt, Us).call(this, e, t);
}, at = new WeakSet(), Ms = function(e) {
  this.selectedName !== e && (this.selectedName = e, r(this, dt, js).call(this));
}, rt = new WeakSet(), Fs = function() {
  var e;
  this.isListOpened = !0, n(this, _) && n(this, A) && (window.addEventListener("scroll", n(this, _), !0), window.addEventListener("resize", n(this, A))), !(!n(this, u) || !this.srcElement) && (this.appendToBody ? (document.body.appendChild(n(this, u).srcElement), (e = n(this, q)) == null || e.observe(this.srcElement)) : this.srcElement.appendChild(n(this, u).srcElement), this.updateListPosition(), r(this, ne, Nt).call(this, !0), r(this, ct, qs).call(this), r(this, ht, Rs).call(this));
}, le = new WeakSet(), Tt = function() {
  var t;
  this.alwaysOpen || (this.isListOpened = !1, n(this, _) && n(this, A) && (window.removeEventListener("scroll", n(this, _), !0), window.removeEventListener("resize", n(this, A))), !n(this, u) || !this.srcElement) || !(this.appendToBody ? document.body.contains(n(this, u).srcElement) : this.srcElement.contains(n(this, u).srcElement)) || (f(this, ee, n(this, u).srcElement.scrollTop), this.appendToBody ? (document.body.removeChild(n(this, u).srcElement), (t = n(this, q)) == null || t.disconnect()) : this.srcElement.removeChild(n(this, u).srcElement), r(this, ne, Nt).call(this, !1), r(this, ut, $s).call(this));
}, ot = new WeakSet(), zs = function(e, t) {
  if (!n(this, u) || !n(this, p))
    return;
  const s = t ? "treeselect-list--top-to-body" : "treeselect-list--top", i = t ? "treeselect-list--bottom-to-body" : "treeselect-list--bottom";
  e ? (n(this, u).srcElement.classList.add(s), n(this, u).srcElement.classList.remove(i), n(this, p).srcElement.classList.add("treeselect-input--top"), n(this, p).srcElement.classList.remove("treeselect-input--bottom")) : (n(this, u).srcElement.classList.remove(s), n(this, u).srcElement.classList.add(i), n(this, p).srcElement.classList.remove("treeselect-input--top"), n(this, p).srcElement.classList.add("treeselect-input--bottom"));
}, R = new WeakSet(), de = function(e) {
  !n(this, p) || !n(this, u) || (e ? (n(this, p).srcElement.classList.add("treeselect-input--focused"), n(this, u).srcElement.classList.add("treeselect-list--focused")) : (n(this, p).srcElement.classList.remove("treeselect-input--focused"), n(this, u).srcElement.classList.remove("treeselect-list--focused")));
}, ne = new WeakSet(), Nt = function(e) {
  var t, s, i, a;
  e ? (t = n(this, p)) == null || t.srcElement.classList.add("treeselect-input--opened") : (s = n(this, p)) == null || s.srcElement.classList.remove("treeselect-input--opened"), this.staticList ? (i = n(this, u)) == null || i.srcElement.classList.add("treeselect-list--static") : (a = n(this, u)) == null || a.srcElement.classList.remove("treeselect-list--static");
}, $ = new WeakSet(), he = function(e) {
  !n(this, _) || !n(this, A) || !n(this, L) || !n(this, B) || ((!this.alwaysOpen || e) && (window.removeEventListener("scroll", n(this, _), !0), window.removeEventListener("resize", n(this, A))), document.removeEventListener("mousedown", n(this, L), !0), document.removeEventListener("focus", n(this, L), !0), window.removeEventListener("blur", n(this, B)));
}, ct = new WeakSet(), qs = function() {
  var t, s, i;
  const e = (t = n(this, u)) == null ? void 0 : t.isLastFocusedElementExist();
  this.saveScrollPosition && e ? (s = n(this, u)) == null || s.srcElement.scroll(0, n(this, ee)) : (i = n(this, u)) == null || i.focusFirstListElement();
}, ae = new WeakSet(), Pt = function() {
  var e;
  (e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("input", { detail: this.value })), this.inputCallback && this.inputCallback(this.value);
}, dt = new WeakSet(), js = function() {
  var e;
  (e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("name-change", { detail: this.selectedName })), this.nameChangeCallback && this.nameChangeCallback(this.selectedName);
}, ht = new WeakSet(), Rs = function() {
  var e;
  this.alwaysOpen || ((e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("open", { detail: this.value })), this.openCallback && this.openCallback(this.value));
}, ut = new WeakSet(), $s = function() {
  var e;
  this.alwaysOpen || ((e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("close", { detail: this.value })), this.closeCallback && this.closeCallback(this.value));
}, pt = new WeakSet(), Ws = function(e) {
  var s;
  const t = (e == null ? void 0 : e.trim()) ?? "";
  (s = this.srcElement) == null || s.dispatchEvent(new CustomEvent("search", { detail: t })), this.searchCallback && this.searchCallback(t);
}, mt = new WeakSet(), Us = function(e, t) {
  var s;
  (s = this.srcElement) == null || s.dispatchEvent(new CustomEvent("open-close-group", { detail: { groupId: e, isClosed: t } })), this.openCloseGroupCallback && this.openCloseGroupCallback(e, t);
};
export {
  Fi as default
};
