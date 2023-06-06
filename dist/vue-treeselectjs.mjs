import { defineComponent as T, ref as r, watch as f, toRaw as d, onMounted as B, onUnmounted as C, openBlock as b, createElementBlock as w, Fragment as _, createElementVNode as h, renderSlot as N } from "vue";
import x from "treeselectjs";
const E = ["value", "id"], O = T({
  name: "Treeselect",
  props: {
    value: {
      type: [Array, Number, String],
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    },
    openLevel: {
      type: Number,
      default: 0
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    alwaysOpen: {
      type: Boolean,
      default: !1
    },
    showTags: {
      type: Boolean,
      default: !0
    },
    tagsCountText: {
      type: String,
      default: "elements selected"
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    searchable: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: String,
      default: "Select..."
    },
    grouped: {
      type: Boolean,
      default: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    emptyText: {
      type: String,
      default: "No results found..."
    },
    staticList: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: ""
    },
    isSingleSelect: {
      type: Boolean,
      default: !1
    },
    showCount: {
      type: Boolean,
      default: !1
    },
    isGroupedValue: {
      type: Boolean,
      default: !1
    },
    disabledBranchNode: {
      type: Boolean,
      default: !1
    },
    direction: {
      type: String,
      default: "auto"
    },
    expandSelected: {
      type: Boolean,
      default: !1
    },
    saveScrollPosition: {
      type: Boolean,
      default: !0
    },
    isIndependentNodes: {
      type: Boolean,
      default: !1
    },
    iconElements: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["input", "open", "close", "name-change", "search"],
  setup(e, { emit: n }) {
    const o = r(null), c = r(null), l = r(null), y = (t) => n("input", t), p = (t) => n("open", t), g = (t) => n("close", t), v = (t) => n("name-change", t), m = (t) => n("search", t);
    return f(
      () => e,
      (t) => {
        if (l.value) {
          const a = d(l.value), s = d(t);
          let u = !1;
          Object.keys(s).forEach((i) => {
            const S = s[i] === a[i];
            !E.includes(i) && !S && (a[i] = s[i], u = !0);
          }), u && a.mount();
        }
      },
      { deep: !0 }
    ), f(
      () => e.value,
      (t) => {
        if (l.value) {
          const a = d(l.value), s = d(t);
          JSON.stringify(a.value) !== JSON.stringify(s) && a.updateValue(s);
        }
      }
    ), f(
      () => e.id,
      (t) => {
        if (l.value) {
          const a = d(l.value);
          (a.id || t) && (a.id = t ?? "", a.mount());
        }
      }
    ), B(() => {
      if (!o.value)
        throw new Error("Treeselect container ref is not defined");
      l.value = new x({
        parentHtmlContainer: o.value,
        value: e.value,
        options: e.options,
        openLevel: e.openLevel,
        appendToBody: e.appendToBody,
        alwaysOpen: e.alwaysOpen,
        showTags: e.showTags,
        tagsCountText: e.tagsCountText,
        clearable: e.clearable,
        searchable: e.searchable,
        placeholder: e.placeholder,
        grouped: e.grouped,
        disabled: e.disabled,
        emptyText: e.emptyText,
        staticList: e.staticList,
        id: e.id,
        isSingleSelect: e.isSingleSelect,
        showCount: e.showCount,
        isGroupedValue: e.isGroupedValue,
        disabledBranchNode: e.disabledBranchNode,
        direction: e.direction,
        expandSelected: e.expandSelected,
        saveScrollPosition: e.saveScrollPosition,
        isIndependentNodes: e.isIndependentNodes,
        inputCallback: y,
        openCallback: p,
        closeCallback: g,
        nameChangeCallback: v,
        searchCallback: m,
        // We need a HTMLElement as a prop here. It is an additional component at the end of list.
        // We gets HTMLElement from refs. Vue events work fine.
        listSlotHtmlComponent: c.value ?? null,
        iconElements: e.iconElements
      });
    }), C(() => {
      l.value && d(l.value).destroy();
    }), {
      treeselectContainerRef: o,
      treeselectAfterListSlotRef: c
    };
  }
}), V = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [c, l] of n)
    o[c] = l;
  return o;
}, L = { ref: "treeselectContainerRef" }, R = {
  ref: "treeselectAfterListSlotRef",
  class: "treeselect__after-list-slot"
};
function k(e, n, o, c, l, y) {
  return b(), w(_, null, [
    h("div", L, null, 512),
    h("div", R, [
      N(e.$slots, "default")
    ], 512)
  ], 64);
}
const P = /* @__PURE__ */ V(O, [["render", k]]);
export {
  P as default
};
