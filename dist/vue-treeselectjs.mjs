import { defineComponent as S, ref as r, watch as f, toRaw as c, onMounted as T, onUnmounted as B, openBlock as w, createElementBlock as C, Fragment as b, createElementVNode as h, renderSlot as _ } from "vue";
import x from "treeselectjs";
const N = ["value", "id"], E = S({
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
    iconElements: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["input", "open", "close", "name-change"],
  setup(e, { emit: n }) {
    const o = r(null), i = r(null), l = r(null), y = (t) => n("input", t), p = (t) => n("open", t), g = (t) => n("close", t), m = (t) => n("name-change", t);
    return f(
      () => e,
      (t) => {
        if (l.value) {
          const a = c(l.value), s = c(t);
          let u = !1;
          Object.keys(s).forEach((d) => {
            const v = s[d] === a[d];
            !N.includes(d) && !v && (a[d] = s[d], u = !0);
          }), u && a.mount();
        }
      },
      { deep: !0 }
    ), f(
      () => e.value,
      (t) => {
        if (l.value) {
          const a = c(l.value), s = c(t);
          JSON.stringify(a.value) !== JSON.stringify(s) && a.updateValue(s);
        }
      }
    ), f(
      () => e.id,
      (t) => {
        if (l.value) {
          const a = c(l.value);
          (a.id || t) && (a.id = t ?? "", a.mount());
        }
      }
    ), T(() => {
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
        inputCallback: y,
        openCallback: p,
        closeCallback: g,
        nameChangeCallback: m,
        // We need a HTMLElement as a prop here. It is an additional component at the end of list.
        // We gets HTMLElement from refs. Vue events work fine.
        listSlotHtmlComponent: i.value ?? null,
        iconElements: e.iconElements
      });
    }), B(() => {
      l.value && c(l.value).destroy();
    }), {
      treeselectContainerRef: o,
      treeselectAfterListSlotRef: i
    };
  }
}), O = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [i, l] of n)
    o[i] = l;
  return o;
}, V = { ref: "treeselectContainerRef" }, L = {
  ref: "treeselectAfterListSlotRef",
  class: "treeselect__after-list-slot"
};
function R(e, n, o, i, l, y) {
  return w(), C(b, null, [
    h("div", V, null, 512),
    h("div", L, [
      _(e.$slots, "default")
    ], 512)
  ], 64);
}
const P = /* @__PURE__ */ O(E, [["render", R]]);
export {
  P as default
};
