import { defineComponent as w, ref as r, computed as f, watch as d, toRaw as s, onMounted as C, onUnmounted as E, openBlock as x, createElementBlock as N, createElementVNode as h, renderSlot as V } from "vue";
import L from "treeselectjs";
const O = ["modelValue", "options", "id", "iconElements"], R = w({
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
    iconElements: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["input", "open", "close", "name-change", "search", "update:modelValue"],
  setup(e, { emit: a }) {
    const n = r(null), c = r(null), l = r(null), y = (t) => {
      a("update:modelValue", t), a("input", t);
    }, v = (t) => a("open", t), g = (t) => a("close", t), S = (t) => a("name-change", t), p = (t) => a("search", t), T = f(() => JSON.stringify(e.modelValue)), b = f(() => JSON.stringify(e.options)), _ = f(() => JSON.stringify(e.iconElements));
    return d(
      () => e,
      (t) => {
        if (l.value) {
          const o = s(l.value), u = s(t);
          let m = !1;
          Object.keys(u).forEach((i) => {
            const B = u[i] === o[i];
            !O.includes(i) && !B && (o[i] = u[i], m = !0);
          }), m && o.mount();
        }
      },
      { deep: !0 }
    ), d(
      () => T.value,
      () => {
        l.value && s(l.value).updateValue(e.modelValue);
      }
    ), d(
      () => e.id,
      (t) => {
        if (l.value) {
          const o = s(l.value);
          (o.id || t) && (o.id = t ?? "", o.mount());
        }
      }
    ), d(
      () => b.value,
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
    ), C(() => {
      if (!n.value)
        throw new Error("Treeselect container ref is not defined");
      l.value = new L({
        parentHtmlContainer: n.value,
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
        inputCallback: y,
        openCallback: v,
        closeCallback: g,
        nameChangeCallback: S,
        searchCallback: p,
        // We need a HTMLElement as a prop here. It is an additional component at the end of list.
        // We gets HTMLElement from refs. Vue events work fine.
        listSlotHtmlComponent: c.value ?? null,
        iconElements: e.iconElements
      });
    }), E(() => {
      l.value && s(l.value).destroy();
    }), {
      treeselectContainerRef: n,
      treeselectAfterListSlotRef: c
    };
  }
});
const k = (e, a) => {
  const n = e.__vccOpts || e;
  for (const [c, l] of a)
    n[c] = l;
  return n;
}, A = { class: "vue-treeselect" }, $ = { ref: "treeselectContainerRef" }, I = {
  ref: "treeselectAfterListSlotRef",
  class: "treeselect__after-list-slot"
};
function P(e, a, n, c, l, y) {
  return x(), N("div", A, [
    h("div", $, null, 512),
    h("div", I, [
      V(e.$slots, "default")
    ], 512)
  ]);
}
const j = /* @__PURE__ */ k(R, [["render", P]]);
export {
  j as default
};
