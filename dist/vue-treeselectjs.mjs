import { defineComponent as w, ref as r, computed as f, watch as d, toRaw as s, onMounted as E, onUnmounted as x, openBlock as N, createElementBlock as V, createElementVNode as p, renderSlot as L } from "vue";
import O from "treeselectjs";
const R = ["modelValue", "options", "id", "iconElements"], k = w({
  name: "Treeselect",
  props: {
    modelValue: {
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
    ariaLabel: {
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
    rtl: {
      type: Boolean,
      default: !1
    },
    iconElements: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["input", "open", "close", "name-change", "search", "open-close-group", "update:modelValue"],
  setup(e, { emit: a }) {
    const o = r(null), c = r(null), l = r(null), y = (t) => {
      a("update:modelValue", t), a("input", t);
    }, h = (t) => a("open", t), v = (t) => a("close", t), g = (t) => a("name-change", t), S = (t) => a("search", t), T = (t, n) => a("open-close-group", {
      groupId: t,
      isClosed: n
    }), b = f(() => JSON.stringify(e.modelValue)), B = f(() => JSON.stringify(e.options)), _ = f(() => JSON.stringify(e.iconElements));
    return d(
      () => e,
      (t) => {
        if (l.value) {
          const n = s(l.value), u = s(t);
          let m = !1;
          Object.keys(u).forEach((i) => {
            const C = u[i] === n[i];
            !R.includes(i) && !C && (n[i] = u[i], m = !0);
          }), m && n.mount();
        }
      },
      { deep: !0 }
    ), d(
      () => b.value,
      () => {
        l.value && s(l.value).updateValue(e.modelValue);
      }
    ), d(
      () => e.id,
      (t) => {
        if (l.value) {
          const n = s(l.value);
          (n.id || t) && (n.id = t ?? "", n.mount());
        }
      }
    ), d(
      () => B.value,
      () => {
        if (l.value) {
          const t = s(l.value);
          t.options = e.options, t.mount();
        }
      }
    ), d(
      () => _.value,
      () => {
        if (l.value) {
          const t = s(l.value);
          t.iconElements = {
            ...t.iconElements,
            ...e.iconElements
          }, t.mount();
        }
      }
    ), E(() => {
      if (!o.value)
        throw new Error("Treeselect container ref is not defined");
      l.value = new O({
        parentHtmlContainer: o.value,
        value: e.modelValue,
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
        ariaLabel: e.ariaLabel,
        isSingleSelect: e.isSingleSelect,
        showCount: e.showCount,
        isGroupedValue: e.isGroupedValue,
        disabledBranchNode: e.disabledBranchNode,
        direction: e.direction,
        expandSelected: e.expandSelected,
        saveScrollPosition: e.saveScrollPosition,
        isIndependentNodes: e.isIndependentNodes,
        rtl: e.rtl,
        inputCallback: y,
        openCallback: h,
        closeCallback: v,
        nameChangeCallback: g,
        searchCallback: S,
        openCloseGroupCallback: T,
        // We need a HTMLElement as a prop here. It is an additional component at the end of list.
        // We gets HTMLElement from refs. Vue events work fine.
        listSlotHtmlComponent: c.value ?? null,
        iconElements: e.iconElements
      });
    }), x(() => {
      l.value && s(l.value).destroy();
    }), {
      treeselectContainerRef: o,
      treeselectAfterListSlotRef: c
    };
  }
});
const A = (e, a) => {
  const o = e.__vccOpts || e;
  for (const [c, l] of a)
    o[c] = l;
  return o;
}, $ = { class: "vue-treeselect" }, G = { ref: "treeselectContainerRef" }, I = {
  ref: "treeselectAfterListSlotRef",
  class: "treeselect__after-list-slot"
};
function P(e, a, o, c, l, y) {
  return N(), V("div", $, [
    p("div", G, null, 512),
    p("div", I, [
      L(e.$slots, "default")
    ], 512)
  ]);
}
const H = /* @__PURE__ */ A(k, [["render", P]]);
export {
  H as default
};
