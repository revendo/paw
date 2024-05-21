import { openBlock as P, createElementBlock as W, normalizeClass as H, renderSlot as Wt, computed as Rt, createElementVNode as te, resolveComponent as He, createBlock as Oe, withCtx as be, createTextVNode as we, toDisplayString as pe, createCommentVNode as X, createVNode as Qe, Transition as Ta, withDirectives as ir, vShow as zr, Fragment as tt, renderList as gt, h as po, getCurrentInstance as Oa, inject as Lc, onMounted as Mc, onUnmounted as Nc, shallowRef as Ac, ref as ot, onBeforeMount as Rc, watch as Ds, Text as Fc, vModelText as go, vModelDynamic as Yc, pushScopeId as Bc, popScopeId as Wc, createStaticVNode as Uc } from "vue";
const ft = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, zc = {
  name: "PawIcon",
  props: {
    size: {
      type: String,
      required: !0,
      validator: function(e) {
        return ["sm", "md", "lg"].includes(e);
      }
    },
    outlined: {
      type: Boolean
    }
  },
  methods: {
    setClassNames() {
      let e = `material-icons${this.outlined ? "-outlined" : ""}`;
      switch (this.size) {
        case "sm":
          e += " text-icon-sm p-0.75 w-6 h-6";
          break;
        case "md":
          e += " text-icon-md p-1 w-8 h-8";
          break;
        case "lg":
          e += " text-icon-md p-2 w-10 h-10";
          break;
      }
      return e;
    }
  }
};
function Vc(e, t, r, n, i, a) {
  return P(), W("span", {
    class: H(a.setClassNames())
  }, [
    Wt(e.$slots, "default")
  ], 2);
}
const Gt = /* @__PURE__ */ ft(zc, [["render", Vc]]), Hc = /* @__PURE__ */ te("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), jc = [
  Hc
], _o = {
  __name: "LoadingSpinner",
  props: {
    loaderSize: {
      type: String,
      default: "md"
    },
    spinnerColorClasses: {
      type: String,
      default: "fill-action-500 text-gray-300 dark:text-gray-600"
    }
  },
  setup(e) {
    const t = e, r = Rt(() => t.loaderSize == "xs" ? "h-2 w-2" : t.loaderSize == "sm" ? "h-6 w-6" : t.loaderSize == "lg" ? "h-12 w-12" : "h-14 w-14");
    return (n, i) => (P(), W("svg", {
      "aria-hidden": "true",
      class: H([[r.value, e.spinnerColorClasses], "animate-spin"]),
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, jc, 2));
  }
}, qc = {
  name: "PawButton",
  emits: ["clicked"],
  data() {
    return {
      hasSlot: this.$slots.default && this.$slots.default().filter(
        (e) => e.type !== Comment && (typeof e.children == "string" || e.children instanceof String ? e.children.trim() : e.children) !== ""
      ).length
    };
  },
  props: {
    size: {
      type: String,
      required: !0,
      validator: function(e) {
        return ["sm", "md", "lg"].includes(e);
      }
    },
    title: {
      type: String
    },
    icon: {
      type: String
    },
    outlined: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    /* State */
    loading: {
      type: Boolean,
      default: !1
    },
    processing: {
      type: Boolean,
      default: () => {
      }
    },
    buttonRoundedClasses: {
      type: String,
      default: ""
    },
    buttonColorClasses: {
      type: String,
      default: ""
    },
    buttonBackgroundClasses: {
      type: String,
      default: ""
    },
    iconColorClasses: {
      type: String,
      default: ""
    }
  },
  components: {
    PawIcon: Gt,
    PawLoadingSpinner: _o
  },
  methods: {
    click() {
      this.$emit("clicked");
    },
    setClassNames() {
      let e = "";
      switch (this.size) {
        case "sm":
          e += "h-6 prose-xs element-text";
          break;
        case "md":
          e += "h-8 prose-md element-text ";
          break;
        case "lg":
          e += "h-10 prose-md element-text";
          break;
      }
      let t = this.buttonRoundedClasses !== "" ? ` ${this.buttonRoundedClasses} ` : ` rounded-${this.size} `;
      if (e += t, this.icon && !this.hasSlot && !this.loading)
        switch (this.size) {
          case "sm":
            e += " w-6";
            break;
          case "md":
            e += " w-8";
            break;
          case "lg":
            e += " w-10";
            break;
        }
      return e += " " + this.setPaddings(this.size), e += " " + this.setStates(), (this.disabled || this.processing) && (e += " cursor-not-allowed"), e;
    },
    setIconClassNames() {
      let e = "";
      if (this.disabled)
        e += "text-gray-100 dark:text-gray-700";
      else if (this.outlined) {
        let t = this.iconColorClasses || "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 group-active:text-gray-400 dark:group-active:text-gray-400 group-focus:text-action-400 dark:group-focus:text-action-400";
        e += t, this.icon && !this.hasSlot && (e += "  -ml-px");
      } else {
        let t = this.iconColorClasses || "text-action-100 dark:text-action-100 group-hover:text-white group-active:text-action-100 dark:group-active:text-action-100 group-focus:text-white dark:group-focus:text-white";
        e += t;
      }
      if (!this.hasSlot)
        return e;
      switch (this.size) {
        case "sm":
          e += " mr-0.75";
          break;
        case "md":
          e += " mr-1";
          break;
        case "lg":
          e += " mr-1";
          break;
      }
      return e;
    },
    setPaddings(e) {
      if (this.processing)
        switch (e) {
          case "sm":
            return "pr-2.75 pl-1";
          case "md":
            return "pr-2.75 pl-1";
          case "lg":
            return "pr-3.75 pl-1";
        }
      if (this.loading) {
        if (this.outlined)
          switch (e) {
            case "sm":
              return "px-2.75";
            case "md":
              return "px-2.75";
            case "lg":
              return "px-3.75";
          }
        switch (e) {
          case "sm":
            return "px-3";
          case "md":
            return "px-3";
          case "lg":
            return "px-4";
        }
      }
      if (!(this.icon && !this.hasSlot)) {
        if (this.icon && this.hasSlot) {
          if (this.outlined)
            switch (e) {
              case "sm":
                return "pl-0.5 pr-1.75";
              case "md":
                return "pl-0.5 pr-2.75";
              case "lg":
                return "pl-0.75 pr-2.75";
            }
          switch (e) {
            case "sm":
              return "pl-0.75 pr-2";
            case "md":
              return "pl-0.75 pr-3";
            case "lg":
              return "pl-1 pr-3";
          }
        }
        if (!this.icon && this.hasSlot) {
          if (this.outlined)
            switch (e) {
              case "sm":
                return "px-2.75";
              case "md":
                return "px-2.75";
              case "lg":
                return "px-3.75";
            }
          switch (e) {
            case "sm":
              return "px-3";
            case "md":
              return "px-3";
            case "lg":
              return "px-4";
          }
        }
      }
    },
    setStates() {
      if (this.loading)
        return "bg-gray-400 loading-bubble";
      if (this.disabled)
        return "italic text-white dark:text-gray-800 bg-gray-200 dark:bg-gray-600 cursor-default pointer-events-none";
      if (this.outlined) {
        let e = this.buttonBackgroundClasses || "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-white dark:active:bg-gray-800", t = this.buttonColorClasses || "text-gray-500 hover:text-gray-900 dark:hover:text-white active:text-gray-500 dark:active:text-gray-500 focus:text-action-500 dark:focus:text-action-400 ";
        return `${e} ${t} border border-gray-200 dark:border-gray-600 active:border-gray-400 dark:active:border-gray-400 focus:border-action-500 dark:focus:border-action-400`;
      } else {
        let e = this.buttonBackgroundClasses || "bg-action-500 dark:bg-action-400 hover:bg-action-300 dark:hover:bg-action-600 active:bg-action-500 dark:active:bg-action-400", t = this.buttonColorClasses || "text-white";
        return `${e} ${t}`;
      }
    }
  }
}, Gc = ["title"], $c = /* @__PURE__ */ te("div", { class: "h-1/3 w-10 bg-gray-500 rounded-full" }, null, -1), Kc = [
  $c
], Xc = ["disabled", "title"], Qc = { class: "truncate" };
function Zc(e, t, r, n, i, a) {
  const s = He("PawIcon"), u = He("PawLoadingSpinner");
  return r.loading ? (P(), W("div", {
    key: 0,
    class: H(["flex items-center group max-w-fit my-0 transition", a.setClassNames()]),
    disabled: "",
    title: r.title
  }, Kc, 10, Gc)) : (P(), W("button", {
    key: 1,
    class: H(["flex items-center group max-w-full my-0 transition", a.setClassNames()]),
    disabled: r.disabled || r.processing,
    title: r.title,
    onClick: t[0] || (t[0] = (...o) => a.click && a.click(...o))
  }, [
    r.icon && !r.processing ? (P(), Oe(s, {
      key: 0,
      size: r.size,
      outlined: r.outlined,
      class: H(["transition", a.setIconClassNames()])
    }, {
      default: be(() => [
        we(pe(r.processing ? "sync" : r.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : X("", !0),
    Qe(Ta, {
      "enter-active-class": "transitiona ease-in",
      "enter-from-class": "opacity-0 delay-150 ease-out",
      "enter-to-class": "opacity-100 "
    }, {
      default: be(() => [
        ir(Qe(u, {
          class: H([
            "transition w-full delay-150",
            r.processing ? "max-w-fit my-auto py-0.5 mx-2" : "max-w-0 mx-0"
          ]),
          loaderSize: "sm",
          spinnerColorClasses: a.setClassNames().includes("-action-") && !r.outlined ? "fill-white text-gray-300 dark:text-gray-600" : "fill-action-500 text-gray-300 dark:text-gray-600"
        }, null, 8, ["class", "spinnerColorClasses"]), [
          [zr, r.processing]
        ])
      ]),
      _: 1
    }),
    te("span", Qc, [
      Wt(e.$slots, "default")
    ])
  ], 10, Xc));
}
const Hn = /* @__PURE__ */ ft(qc, [["render", Zc]]), Jc = {
  name: "PawCheckbox",
  emits: ["changed"],
  data() {
    return {
      value: this.checked
    };
  },
  props: {
    size: {
      type: String,
      required: !0,
      validator: function(e) {
        return ["sm", "md", "lg"].includes(e);
      }
    },
    title: {
      type: String
    },
    checked: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  components: {
    PawIcon: Gt
  },
  methods: {
    change() {
      this.$emit("changed", this.value = !this.value);
    }
  }
}, ed = ["title"], td = { class: "relative w-[18px] h-[18px] m-0.75 shrink-0 self-start pointer-events-none" }, rd = ["checked", "disabled"], nd = { class: "absolute inset-0 block peer-checked:opacity-100 opacity-0 w-4 h-4 m-px bg-white dark:peer-disabled:bg-gray-500 text-action-500 dark:text-action-400 peer-disabled:text-gray-200 dark:peer-disabled:text-gray-600 overflow-hidden rounded-sm transition z-10" }, id = { class: "absolute inset-0 block group-hover:peer-checked:opacity-100 group-hover:peer-checked:peer-disabled:opacity-0 opacity-0 w-4 h-4 m-px bg-white overflow-hidden rounded-sm transition z-20" }, ad = /* @__PURE__ */ te("span", { class: "absolute inset-0 block w-[18px] h-[18px] border-2 border-gray-400 peer-checked:border-action-500 dark:peer-checked:border-action-400 peer-disabled:border-gray-200 dark:peer-disabled:border-gray-600 rounded-sm peer-disabled:cursor-default transition z-30" }, null, -1);
function sd(e, t, r, n, i, a) {
  const s = He("PawIcon");
  return P(), W("label", {
    class: H(["group inline-flex items-center", {
      "cursor-pointer": !r.disabled,
      "pointer-events-none": r.disabled,
      "gap-1": r.size === "sm",
      "gap-2 p-1": r.size === "md",
      "gap-3 p-2": r.size === "lg"
    }]),
    title: r.title
  }, [
    te("span", td, [
      te("input", {
        type: "checkbox",
        onChange: t[0] || (t[0] = (...u) => a.change && a.change(...u)),
        checked: r.checked,
        disabled: r.disabled,
        class: "peer hidden"
      }, null, 40, rd),
      te("span", nd, [
        Qe(s, {
          size: "md",
          class: "ml-[50%] mt-[50%] -translate-x-1/2 -translate-y-1/2"
        }, {
          default: be(() => [
            we(" check_box ")
          ]),
          _: 1
        })
      ]),
      te("span", id, [
        Qe(s, {
          size: "md",
          class: "text-action-500 dark:text-action-400 ml-[50%] mt-[50%] -translate-x-1/2 -translate-y-1/2"
        }, {
          default: be(() => [
            we(" indeterminate_check_box ")
          ]),
          _: 1
        })
      ]),
      ad
    ]),
    e.$slots.default ? (P(), W("span", {
      key: 0,
      class: H(["text-md transition", r.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"])
    }, [
      Wt(e.$slots, "default")
    ], 2)) : X("", !0)
  ], 10, ed);
}
const vo = /* @__PURE__ */ ft(Jc, [["render", sd]]), od = {
  name: "PawChip",
  emits: ["clicked"],
  data() {
    return {
      hasSlot: this.$slots.default && this.$slots.default().filter(
        (e) => e.type !== Comment && (typeof e.children == "string" || e.children instanceof String ? e.children.trim() : e.children) !== ""
      ).length
    };
  },
  props: {
    size: {
      type: String,
      required: !0,
      validator: function(e) {
        return ["sm", "md", "lg"].includes(e);
      }
    },
    title: {
      type: String
    },
    icon: {
      type: String
    },
    outlined: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    textEllipsis: {
      type: Boolean,
      default: !1
    }
  },
  components: {
    PawIcon: Gt
  },
  methods: {
    click() {
      this.$emit("clicked");
    },
    setClassNames() {
      let e = "";
      switch (this.size) {
        case "sm":
          e += "h-6 prose-xs element-text";
          break;
        case "md":
          e += "h-8 prose-md element-text";
          break;
        case "lg":
          e += "h-10 prose-md element-text";
          break;
      }
      switch (this.size) {
        case "sm":
          e += this.disabled ? " pr-2" : "";
          break;
        case "md":
          e += this.disabled ? " pr-4" : " pr-0.75";
          break;
        case "lg":
          e += this.disabled ? " pr-5" : " pr-1.5";
          break;
      }
      if (!this.icon)
        switch (this.size) {
          case "sm":
            e += " pl-2";
            break;
          case "md":
            e += " pl-4";
            break;
          case "lg":
            e += " pl-5";
            break;
        }
      return e += " " + this.setStates(), e;
    },
    setIconClassNames() {
      let e = "";
      if (this.disabled ? e += "text-gray-100 dark:text-gray-700" : this.outlined ? e += "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200" : e += "text-action-100 dark:text-action-100 group-hover:text-white", !this.hasSlot)
        return e;
      switch (this.size) {
        case "sm":
          e += " mr-0.75";
          break;
        case "md":
          e += " mr-1";
          break;
        case "lg":
          e += " mr-1";
          break;
      }
      return e;
    },
    setCloseClassNames() {
      let e = "";
      switch (this.outlined ? e += "text-gray-400 group-hover:text-action-500 dark:group-hover:text-action-400" : e += "text-action-100 dark:text-action-100 group-hover:text-white", this.size) {
        case "sm":
          e += " ml-2";
          break;
        case "md":
          e += " ml-3";
          break;
        case "lg":
          e += " ml-4";
          break;
      }
      return e;
    },
    setStates() {
      return this.disabled ? "italic text-white dark:text-gray-800 bg-gray-200 dark:bg-gray-600 cursor-default pointer-events-none" : this.outlined ? "bg-white dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-600 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700" : "bg-action-500 dark:bg-action-400 text-white hover:bg-action-300 dark:hover:bg-action-600";
    }
  }
}, ld = ["title"];
function ud(e, t, r, n, i, a) {
  const s = He("PawIcon");
  return P(), W("button", {
    class: H(["inline-flex items-center group my-0 max-w-full rounded-full overflow-hidden transition", a.setClassNames()]),
    title: r.title,
    onClick: t[0] || (t[0] = (...u) => a.click && a.click(...u))
  }, [
    r.icon ? (P(), Oe(s, {
      key: 0,
      size: r.size,
      outlined: r.outlined,
      class: H(["transition", a.setIconClassNames()])
    }, {
      default: be(() => [
        we(pe(r.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : X("", !0),
    te("span", {
      class: H(["truncate", [{ "max-w-16": r.textEllipsis }]])
    }, [
      Wt(e.$slots, "default")
    ], 2),
    r.disabled ? X("", !0) : (P(), Oe(s, {
      key: 1,
      size: "sm",
      class: H(["transition", a.setCloseClassNames()])
    }, {
      default: be(() => [
        we("close")
      ]),
      _: 1
    }, 8, ["class"]))
  ], 10, ld);
}
const cd = /* @__PURE__ */ ft(od, [["render", ud]]);
var hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yo = {}, bo = {}, Ea = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(r) {
    if (r = `${r}`, r === "0")
      return "0";
    if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(r))
      return r.replace(/^[+-]?/, (i) => i === "-" ? "" : "-");
    let n = [
      "var",
      "calc",
      "min",
      "max",
      "clamp"
    ];
    for (const i of n)
      if (r.includes(`${i}(`))
        return `calc(${r} * -1)`;
  }
})(Ea);
var wo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  const t = [
    "preflight",
    "container",
    "accessibility",
    "pointerEvents",
    "visibility",
    "position",
    "inset",
    "isolation",
    "zIndex",
    "order",
    "gridColumn",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRow",
    "gridRowStart",
    "gridRowEnd",
    "float",
    "clear",
    "margin",
    "boxSizing",
    "lineClamp",
    "display",
    "aspectRatio",
    "height",
    "maxHeight",
    "minHeight",
    "width",
    "minWidth",
    "maxWidth",
    "flex",
    "flexShrink",
    "flexGrow",
    "flexBasis",
    "tableLayout",
    "captionSide",
    "borderCollapse",
    "borderSpacing",
    "transformOrigin",
    "translate",
    "rotate",
    "skew",
    "scale",
    "transform",
    "animation",
    "cursor",
    "touchAction",
    "userSelect",
    "resize",
    "scrollSnapType",
    "scrollSnapAlign",
    "scrollSnapStop",
    "scrollMargin",
    "scrollPadding",
    "listStylePosition",
    "listStyleType",
    "listStyleImage",
    "appearance",
    "columns",
    "breakBefore",
    "breakInside",
    "breakAfter",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridTemplateColumns",
    "gridTemplateRows",
    "flexDirection",
    "flexWrap",
    "placeContent",
    "placeItems",
    "alignContent",
    "alignItems",
    "justifyContent",
    "justifyItems",
    "gap",
    "space",
    "divideWidth",
    "divideStyle",
    "divideColor",
    "divideOpacity",
    "placeSelf",
    "alignSelf",
    "justifySelf",
    "overflow",
    "overscrollBehavior",
    "scrollBehavior",
    "textOverflow",
    "hyphens",
    "whitespace",
    "wordBreak",
    "borderRadius",
    "borderWidth",
    "borderStyle",
    "borderColor",
    "borderOpacity",
    "backgroundColor",
    "backgroundOpacity",
    "backgroundImage",
    "gradientColorStops",
    "boxDecorationBreak",
    "backgroundSize",
    "backgroundAttachment",
    "backgroundClip",
    "backgroundPosition",
    "backgroundRepeat",
    "backgroundOrigin",
    "fill",
    "stroke",
    "strokeWidth",
    "objectFit",
    "objectPosition",
    "padding",
    "textAlign",
    "textIndent",
    "verticalAlign",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "textTransform",
    "fontStyle",
    "fontVariantNumeric",
    "lineHeight",
    "letterSpacing",
    "textColor",
    "textOpacity",
    "textDecoration",
    "textDecorationColor",
    "textDecorationStyle",
    "textDecorationThickness",
    "textUnderlineOffset",
    "fontSmoothing",
    "placeholderColor",
    "placeholderOpacity",
    "caretColor",
    "accentColor",
    "opacity",
    "backgroundBlendMode",
    "mixBlendMode",
    "boxShadow",
    "boxShadowColor",
    "outlineStyle",
    "outlineWidth",
    "outlineOffset",
    "outlineColor",
    "ringWidth",
    "ringColor",
    "ringOpacity",
    "ringOffsetWidth",
    "ringOffsetColor",
    "blur",
    "brightness",
    "contrast",
    "dropShadow",
    "grayscale",
    "hueRotate",
    "invert",
    "saturate",
    "sepia",
    "filter",
    "backdropBlur",
    "backdropBrightness",
    "backdropContrast",
    "backdropGrayscale",
    "backdropHueRotate",
    "backdropInvert",
    "backdropOpacity",
    "backdropSaturate",
    "backdropSepia",
    "backdropFilter",
    "transitionProperty",
    "transitionDelay",
    "transitionDuration",
    "transitionTimingFunction",
    "willChange",
    "content"
  ];
})(wo);
var ko = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(r, n) {
    return r === void 0 ? n : Array.isArray(r) ? r : [
      ...new Set(n.filter((a) => r !== !1 && r[a] !== !1).concat(Object.keys(r).filter((a) => r[a] !== !1)))
    ];
  }
})(ko);
var Da = {}, jn = {}, Ca = { exports: {} }, Ve = String, xo = function() {
  return { isColorSupported: !1, reset: Ve, bold: Ve, dim: Ve, italic: Ve, underline: Ve, inverse: Ve, hidden: Ve, strikethrough: Ve, black: Ve, red: Ve, green: Ve, yellow: Ve, blue: Ve, magenta: Ve, cyan: Ve, white: Ve, gray: Ve, bgBlack: Ve, bgRed: Ve, bgGreen: Ve, bgYellow: Ve, bgBlue: Ve, bgMagenta: Ve, bgCyan: Ve, bgWhite: Ve };
};
Ca.exports = xo();
Ca.exports.createColors = xo;
var So = Ca.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(o, l) {
    for (var f in l)
      Object.defineProperty(o, f, {
        enumerable: !0,
        get: l[f]
      });
  }
  t(e, {
    dim: function() {
      return s;
    },
    default: function() {
      return u;
    }
  });
  const r = /* @__PURE__ */ n(So);
  function n(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  let i = /* @__PURE__ */ new Set();
  function a(o, l, f) {
    typeof process < "u" && process.env.JEST_WORKER_ID || f && i.has(f) || (f && i.add(f), console.warn(""), l.forEach((m) => console.warn(o, "-", m)));
  }
  function s(o) {
    return r.default.dim(o);
  }
  const u = {
    info(o, l) {
      a(r.default.bold(r.default.cyan("info")), ...Array.isArray(o) ? [
        o
      ] : [
        l,
        o
      ]);
    },
    warn(o, l) {
      a(r.default.bold(r.default.yellow("warn")), ...Array.isArray(o) ? [
        o
      ] : [
        l,
        o
      ]);
    },
    risk(o, l) {
      a(r.default.bold(r.default.magenta("risk")), ...Array.isArray(o) ? [
        o
      ] : [
        l,
        o
      ]);
    }
  };
})(jn);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const t = /* @__PURE__ */ r(jn);
  function r(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  function n({ version: a, from: s, to: u }) {
    t.default.warn(`${s}-color-renamed`, [
      `As of Tailwind CSS ${a}, \`${s}\` has been renamed to \`${u}\`.`,
      "Update your configuration file to silence this warning."
    ]);
  }
  const i = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617"
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712"
    },
    zinc: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b"
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a"
    },
    stone: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
      950: "#0c0a09"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a"
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407"
    },
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03"
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
      950: "#422006"
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314",
      950: "#1a2e05"
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16"
    },
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22"
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
      950: "#042f2e"
    },
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      950: "#083344"
    },
    sky: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
      950: "#082f49"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b"
    },
    violet: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
      950: "#2e1065"
    },
    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764"
    },
    fuchsia: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
      950: "#4a044e"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
      950: "#500724"
    },
    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
      950: "#4c0519"
    },
    get lightBlue() {
      return n({
        version: "v2.2",
        from: "lightBlue",
        to: "sky"
      }), this.sky;
    },
    get warmGray() {
      return n({
        version: "v3.0",
        from: "warmGray",
        to: "stone"
      }), this.stone;
    },
    get trueGray() {
      return n({
        version: "v3.0",
        from: "trueGray",
        to: "neutral"
      }), this.neutral;
    },
    get coolGray() {
      return n({
        version: "v3.0",
        from: "coolGray",
        to: "gray"
      }), this.gray;
    },
    get blueGray() {
      return n({
        version: "v3.0",
        from: "blueGray",
        to: "slate"
      }), this.slate;
    }
  };
})(Da);
var To = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "defaults", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(r, ...n) {
    for (let s of n) {
      for (let u in s) {
        var i;
        !(r == null || (i = r.hasOwnProperty) === null || i === void 0) && i.call(r, u) || (r[u] = s[u]);
      }
      for (let u of Object.getOwnPropertySymbols(s)) {
        var a;
        !(r == null || (a = r.hasOwnProperty) === null || a === void 0) && a.call(r, u) || (r[u] = s[u]);
      }
    }
    return r;
  }
})(To);
var Oo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "toPath", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(r) {
    if (Array.isArray(r))
      return r;
    let n = r.split("[").length - 1, i = r.split("]").length - 1;
    if (n !== i)
      throw new Error(`Path is invalid. Has unbalanced brackets: ${r}`);
    return r.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
  }
})(Oo);
var Eo = {}, qn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(m, p) {
    for (var E in p)
      Object.defineProperty(m, E, {
        enumerable: !0,
        get: p[E]
      });
  }
  t(e, {
    flagEnabled: function() {
      return u;
    },
    issueFlagNotices: function() {
      return l;
    },
    default: function() {
      return f;
    }
  });
  const r = /* @__PURE__ */ i(So), n = /* @__PURE__ */ i(jn);
  function i(m) {
    return m && m.__esModule ? m : {
      default: m
    };
  }
  let a = {
    optimizeUniversalDefaults: !1,
    generalizedModifiers: !0,
    get disableColorOpacityUtilitiesByDefault() {
      return !1;
    },
    get relativeContentPathsByDefault() {
      return !1;
    }
  }, s = {
    future: [
      "hoverOnlyWhenSupported",
      "respectDefaultRingColorOpacity",
      "disableColorOpacityUtilitiesByDefault",
      "relativeContentPathsByDefault"
    ],
    experimental: [
      "optimizeUniversalDefaults",
      "generalizedModifiers"
    ]
  };
  function u(m, p) {
    if (s.future.includes(p)) {
      var E, S, d;
      return m.future === "all" || ((d = (S = m == null || (E = m.future) === null || E === void 0 ? void 0 : E[p]) !== null && S !== void 0 ? S : a[p]) !== null && d !== void 0 ? d : !1);
    }
    if (s.experimental.includes(p)) {
      var c, g, _;
      return m.experimental === "all" || ((_ = (g = m == null || (c = m.experimental) === null || c === void 0 ? void 0 : c[p]) !== null && g !== void 0 ? g : a[p]) !== null && _ !== void 0 ? _ : !1);
    }
    return !1;
  }
  function o(m) {
    if (m.experimental === "all")
      return s.experimental;
    var p;
    return Object.keys((p = m == null ? void 0 : m.experimental) !== null && p !== void 0 ? p : {}).filter((E) => s.experimental.includes(E) && m.experimental[E]);
  }
  function l(m) {
    if (process.env.JEST_WORKER_ID === void 0 && o(m).length > 0) {
      let p = o(m).map((E) => r.default.yellow(E)).join(", ");
      n.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${p}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  const f = s;
})(qn);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = qn, r = /* @__PURE__ */ i(jn);
  function n(s) {
    if (typeof WeakMap != "function")
      return null;
    var u = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
    return (n = function(l) {
      return l ? o : u;
    })(s);
  }
  function i(s, u) {
    if (!u && s && s.__esModule)
      return s;
    if (s === null || typeof s != "object" && typeof s != "function")
      return {
        default: s
      };
    var o = n(u);
    if (o && o.has(s))
      return o.get(s);
    var l = {}, f = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var m in s)
      if (m !== "default" && Object.prototype.hasOwnProperty.call(s, m)) {
        var p = f ? Object.getOwnPropertyDescriptor(s, m) : null;
        p && (p.get || p.set) ? Object.defineProperty(l, m, p) : l[m] = s[m];
      }
    return l.default = s, o && o.set(s, l), l;
  }
  function a(s) {
    if ((() => {
      if (s.purge || !s.content || !Array.isArray(s.content) && !(typeof s.content == "object" && s.content !== null))
        return !1;
      if (Array.isArray(s.content))
        return s.content.every((l) => typeof l == "string" ? !0 : !(typeof (l == null ? void 0 : l.raw) != "string" || l != null && l.extension && typeof (l == null ? void 0 : l.extension) != "string"));
      if (typeof s.content == "object" && s.content !== null) {
        if (Object.keys(s.content).some((l) => ![
          "files",
          "relative",
          "extract",
          "transform"
        ].includes(l)))
          return !1;
        if (Array.isArray(s.content.files)) {
          if (!s.content.files.every((l) => typeof l == "string" ? !0 : !(typeof (l == null ? void 0 : l.raw) != "string" || l != null && l.extension && typeof (l == null ? void 0 : l.extension) != "string")))
            return !1;
          if (typeof s.content.extract == "object") {
            for (let l of Object.values(s.content.extract))
              if (typeof l != "function")
                return !1;
          } else if (!(s.content.extract === void 0 || typeof s.content.extract == "function"))
            return !1;
          if (typeof s.content.transform == "object") {
            for (let l of Object.values(s.content.transform))
              if (typeof l != "function")
                return !1;
          } else if (!(s.content.transform === void 0 || typeof s.content.transform == "function"))
            return !1;
          if (typeof s.content.relative != "boolean" && typeof s.content.relative < "u")
            return !1;
        }
        return !0;
      }
      return !1;
    })() || r.default.warn("purge-deprecation", [
      "The `purge`/`content` options have changed in Tailwind CSS v3.0.",
      "Update your configuration file to eliminate this warning.",
      "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"
    ]), s.safelist = (() => {
      var l;
      let { content: f, purge: m, safelist: p } = s;
      return Array.isArray(p) ? p : Array.isArray(f == null ? void 0 : f.safelist) ? f.safelist : Array.isArray(m == null ? void 0 : m.safelist) ? m.safelist : Array.isArray(m == null || (l = m.options) === null || l === void 0 ? void 0 : l.safelist) ? m.options.safelist : [];
    })(), s.blocklist = (() => {
      let { blocklist: l } = s;
      if (Array.isArray(l)) {
        if (l.every((f) => typeof f == "string"))
          return l;
        r.default.warn("blocklist-invalid", [
          "The `blocklist` option must be an array of strings.",
          "https://tailwindcss.com/docs/content-configuration#discarding-classes"
        ]);
      }
      return [];
    })(), typeof s.prefix == "function")
      r.default.warn("prefix-function", [
        "As of Tailwind CSS v3.0, `prefix` cannot be a function.",
        "Update `prefix` in your configuration to be a string to eliminate this warning.",
        "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"
      ]), s.prefix = "";
    else {
      var o;
      s.prefix = (o = s.prefix) !== null && o !== void 0 ? o : "";
    }
    s.content = {
      relative: (() => {
        let { content: l } = s;
        return l != null && l.relative ? l.relative : (0, t.flagEnabled)(s, "relativeContentPathsByDefault");
      })(),
      files: (() => {
        let { content: l, purge: f } = s;
        return Array.isArray(f) ? f : Array.isArray(f == null ? void 0 : f.content) ? f.content : Array.isArray(l) ? l : Array.isArray(l == null ? void 0 : l.content) ? l.content : Array.isArray(l == null ? void 0 : l.files) ? l.files : [];
      })(),
      extract: (() => {
        let l = (() => {
          var p, E, S, d, c, g, _, w, x, b;
          return !((p = s.purge) === null || p === void 0) && p.extract ? s.purge.extract : !((E = s.content) === null || E === void 0) && E.extract ? s.content.extract : !((S = s.purge) === null || S === void 0 || (d = S.extract) === null || d === void 0) && d.DEFAULT ? s.purge.extract.DEFAULT : !((c = s.content) === null || c === void 0 || (g = c.extract) === null || g === void 0) && g.DEFAULT ? s.content.extract.DEFAULT : !((_ = s.purge) === null || _ === void 0 || (w = _.options) === null || w === void 0) && w.extractors ? s.purge.options.extractors : !((x = s.content) === null || x === void 0 || (b = x.options) === null || b === void 0) && b.extractors ? s.content.options.extractors : {};
        })(), f = {}, m = (() => {
          var p, E, S, d;
          if (!((p = s.purge) === null || p === void 0 || (E = p.options) === null || E === void 0) && E.defaultExtractor)
            return s.purge.options.defaultExtractor;
          if (!((S = s.content) === null || S === void 0 || (d = S.options) === null || d === void 0) && d.defaultExtractor)
            return s.content.options.defaultExtractor;
        })();
        if (m !== void 0 && (f.DEFAULT = m), typeof l == "function")
          f.DEFAULT = l;
        else if (Array.isArray(l))
          for (let { extensions: p, extractor: E } of l ?? [])
            for (let S of p)
              f[S] = E;
        else
          typeof l == "object" && l !== null && Object.assign(f, l);
        return f;
      })(),
      transform: (() => {
        let l = (() => {
          var m, p, E, S, d, c;
          return !((m = s.purge) === null || m === void 0) && m.transform ? s.purge.transform : !((p = s.content) === null || p === void 0) && p.transform ? s.content.transform : !((E = s.purge) === null || E === void 0 || (S = E.transform) === null || S === void 0) && S.DEFAULT ? s.purge.transform.DEFAULT : !((d = s.content) === null || d === void 0 || (c = d.transform) === null || c === void 0) && c.DEFAULT ? s.content.transform.DEFAULT : {};
        })(), f = {};
        return typeof l == "function" && (f.DEFAULT = l), typeof l == "object" && l !== null && Object.assign(f, l), f;
      })()
    };
    for (let l of s.content.files)
      if (typeof l == "string" && /{([^,]*?)}/g.test(l)) {
        r.default.warn("invalid-glob-braces", [
          `The glob pattern ${(0, r.dim)(l)} in your Tailwind CSS configuration is invalid.`,
          `Update it to ${(0, r.dim)(l.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`
        ]);
        break;
      }
    return s;
  }
})(Eo);
var Do = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(r) {
    if (Object.prototype.toString.call(r) !== "[object Object]")
      return !1;
    const n = Object.getPrototypeOf(r);
    return n === null || n === Object.prototype;
  }
})(Do);
var Ia = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "cloneDeep", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(r) {
    return Array.isArray(r) ? r.map((n) => t(n)) : typeof r == "object" && r !== null ? Object.fromEntries(Object.entries(r).map(([n, i]) => [
      n,
      t(i)
    ])) : r;
  }
})(Ia);
var Co = {}, Io = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(r) {
    return r.replace(/\\,/g, "\\2c ");
  }
})(Io);
var Pa = {}, La = {}, Po = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  const t = {
    aliceblue: [
      240,
      248,
      255
    ],
    antiquewhite: [
      250,
      235,
      215
    ],
    aqua: [
      0,
      255,
      255
    ],
    aquamarine: [
      127,
      255,
      212
    ],
    azure: [
      240,
      255,
      255
    ],
    beige: [
      245,
      245,
      220
    ],
    bisque: [
      255,
      228,
      196
    ],
    black: [
      0,
      0,
      0
    ],
    blanchedalmond: [
      255,
      235,
      205
    ],
    blue: [
      0,
      0,
      255
    ],
    blueviolet: [
      138,
      43,
      226
    ],
    brown: [
      165,
      42,
      42
    ],
    burlywood: [
      222,
      184,
      135
    ],
    cadetblue: [
      95,
      158,
      160
    ],
    chartreuse: [
      127,
      255,
      0
    ],
    chocolate: [
      210,
      105,
      30
    ],
    coral: [
      255,
      127,
      80
    ],
    cornflowerblue: [
      100,
      149,
      237
    ],
    cornsilk: [
      255,
      248,
      220
    ],
    crimson: [
      220,
      20,
      60
    ],
    cyan: [
      0,
      255,
      255
    ],
    darkblue: [
      0,
      0,
      139
    ],
    darkcyan: [
      0,
      139,
      139
    ],
    darkgoldenrod: [
      184,
      134,
      11
    ],
    darkgray: [
      169,
      169,
      169
    ],
    darkgreen: [
      0,
      100,
      0
    ],
    darkgrey: [
      169,
      169,
      169
    ],
    darkkhaki: [
      189,
      183,
      107
    ],
    darkmagenta: [
      139,
      0,
      139
    ],
    darkolivegreen: [
      85,
      107,
      47
    ],
    darkorange: [
      255,
      140,
      0
    ],
    darkorchid: [
      153,
      50,
      204
    ],
    darkred: [
      139,
      0,
      0
    ],
    darksalmon: [
      233,
      150,
      122
    ],
    darkseagreen: [
      143,
      188,
      143
    ],
    darkslateblue: [
      72,
      61,
      139
    ],
    darkslategray: [
      47,
      79,
      79
    ],
    darkslategrey: [
      47,
      79,
      79
    ],
    darkturquoise: [
      0,
      206,
      209
    ],
    darkviolet: [
      148,
      0,
      211
    ],
    deeppink: [
      255,
      20,
      147
    ],
    deepskyblue: [
      0,
      191,
      255
    ],
    dimgray: [
      105,
      105,
      105
    ],
    dimgrey: [
      105,
      105,
      105
    ],
    dodgerblue: [
      30,
      144,
      255
    ],
    firebrick: [
      178,
      34,
      34
    ],
    floralwhite: [
      255,
      250,
      240
    ],
    forestgreen: [
      34,
      139,
      34
    ],
    fuchsia: [
      255,
      0,
      255
    ],
    gainsboro: [
      220,
      220,
      220
    ],
    ghostwhite: [
      248,
      248,
      255
    ],
    gold: [
      255,
      215,
      0
    ],
    goldenrod: [
      218,
      165,
      32
    ],
    gray: [
      128,
      128,
      128
    ],
    green: [
      0,
      128,
      0
    ],
    greenyellow: [
      173,
      255,
      47
    ],
    grey: [
      128,
      128,
      128
    ],
    honeydew: [
      240,
      255,
      240
    ],
    hotpink: [
      255,
      105,
      180
    ],
    indianred: [
      205,
      92,
      92
    ],
    indigo: [
      75,
      0,
      130
    ],
    ivory: [
      255,
      255,
      240
    ],
    khaki: [
      240,
      230,
      140
    ],
    lavender: [
      230,
      230,
      250
    ],
    lavenderblush: [
      255,
      240,
      245
    ],
    lawngreen: [
      124,
      252,
      0
    ],
    lemonchiffon: [
      255,
      250,
      205
    ],
    lightblue: [
      173,
      216,
      230
    ],
    lightcoral: [
      240,
      128,
      128
    ],
    lightcyan: [
      224,
      255,
      255
    ],
    lightgoldenrodyellow: [
      250,
      250,
      210
    ],
    lightgray: [
      211,
      211,
      211
    ],
    lightgreen: [
      144,
      238,
      144
    ],
    lightgrey: [
      211,
      211,
      211
    ],
    lightpink: [
      255,
      182,
      193
    ],
    lightsalmon: [
      255,
      160,
      122
    ],
    lightseagreen: [
      32,
      178,
      170
    ],
    lightskyblue: [
      135,
      206,
      250
    ],
    lightslategray: [
      119,
      136,
      153
    ],
    lightslategrey: [
      119,
      136,
      153
    ],
    lightsteelblue: [
      176,
      196,
      222
    ],
    lightyellow: [
      255,
      255,
      224
    ],
    lime: [
      0,
      255,
      0
    ],
    limegreen: [
      50,
      205,
      50
    ],
    linen: [
      250,
      240,
      230
    ],
    magenta: [
      255,
      0,
      255
    ],
    maroon: [
      128,
      0,
      0
    ],
    mediumaquamarine: [
      102,
      205,
      170
    ],
    mediumblue: [
      0,
      0,
      205
    ],
    mediumorchid: [
      186,
      85,
      211
    ],
    mediumpurple: [
      147,
      112,
      219
    ],
    mediumseagreen: [
      60,
      179,
      113
    ],
    mediumslateblue: [
      123,
      104,
      238
    ],
    mediumspringgreen: [
      0,
      250,
      154
    ],
    mediumturquoise: [
      72,
      209,
      204
    ],
    mediumvioletred: [
      199,
      21,
      133
    ],
    midnightblue: [
      25,
      25,
      112
    ],
    mintcream: [
      245,
      255,
      250
    ],
    mistyrose: [
      255,
      228,
      225
    ],
    moccasin: [
      255,
      228,
      181
    ],
    navajowhite: [
      255,
      222,
      173
    ],
    navy: [
      0,
      0,
      128
    ],
    oldlace: [
      253,
      245,
      230
    ],
    olive: [
      128,
      128,
      0
    ],
    olivedrab: [
      107,
      142,
      35
    ],
    orange: [
      255,
      165,
      0
    ],
    orangered: [
      255,
      69,
      0
    ],
    orchid: [
      218,
      112,
      214
    ],
    palegoldenrod: [
      238,
      232,
      170
    ],
    palegreen: [
      152,
      251,
      152
    ],
    paleturquoise: [
      175,
      238,
      238
    ],
    palevioletred: [
      219,
      112,
      147
    ],
    papayawhip: [
      255,
      239,
      213
    ],
    peachpuff: [
      255,
      218,
      185
    ],
    peru: [
      205,
      133,
      63
    ],
    pink: [
      255,
      192,
      203
    ],
    plum: [
      221,
      160,
      221
    ],
    powderblue: [
      176,
      224,
      230
    ],
    purple: [
      128,
      0,
      128
    ],
    rebeccapurple: [
      102,
      51,
      153
    ],
    red: [
      255,
      0,
      0
    ],
    rosybrown: [
      188,
      143,
      143
    ],
    royalblue: [
      65,
      105,
      225
    ],
    saddlebrown: [
      139,
      69,
      19
    ],
    salmon: [
      250,
      128,
      114
    ],
    sandybrown: [
      244,
      164,
      96
    ],
    seagreen: [
      46,
      139,
      87
    ],
    seashell: [
      255,
      245,
      238
    ],
    sienna: [
      160,
      82,
      45
    ],
    silver: [
      192,
      192,
      192
    ],
    skyblue: [
      135,
      206,
      235
    ],
    slateblue: [
      106,
      90,
      205
    ],
    slategray: [
      112,
      128,
      144
    ],
    slategrey: [
      112,
      128,
      144
    ],
    snow: [
      255,
      250,
      250
    ],
    springgreen: [
      0,
      255,
      127
    ],
    steelblue: [
      70,
      130,
      180
    ],
    tan: [
      210,
      180,
      140
    ],
    teal: [
      0,
      128,
      128
    ],
    thistle: [
      216,
      191,
      216
    ],
    tomato: [
      255,
      99,
      71
    ],
    turquoise: [
      64,
      224,
      208
    ],
    violet: [
      238,
      130,
      238
    ],
    wheat: [
      245,
      222,
      179
    ],
    white: [
      255,
      255,
      255
    ],
    whitesmoke: [
      245,
      245,
      245
    ],
    yellow: [
      255,
      255,
      0
    ],
    yellowgreen: [
      154,
      205,
      50
    ]
  };
})(Po);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(S, d) {
    for (var c in d)
      Object.defineProperty(S, c, {
        enumerable: !0,
        get: d[c]
      });
  }
  t(e, {
    parseColor: function() {
      return p;
    },
    formatColor: function() {
      return E;
    }
  });
  const r = /* @__PURE__ */ n(Po);
  function n(S) {
    return S && S.__esModule ? S : {
      default: S
    };
  }
  let i = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, a = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, s = /(?:\d+|\d*\.\d+)%?/, u = /(?:\s*,\s*|\s+)/, o = /\s*[,/]\s*/, l = /var\(--(?:[^ )]*?)\)/, f = new RegExp(`^(rgba?)\\(\\s*(${s.source}|${l.source})(?:${u.source}(${s.source}|${l.source}))?(?:${u.source}(${s.source}|${l.source}))?(?:${o.source}(${s.source}|${l.source}))?\\s*\\)$`), m = new RegExp(`^(hsla?)\\(\\s*((?:${s.source})(?:deg|rad|grad|turn)?|${l.source})(?:${u.source}(${s.source}|${l.source}))?(?:${u.source}(${s.source}|${l.source}))?(?:${o.source}(${s.source}|${l.source}))?\\s*\\)$`);
  function p(S, { loose: d = !1 } = {}) {
    var c, g;
    if (typeof S != "string")
      return null;
    if (S = S.trim(), S === "transparent")
      return {
        mode: "rgb",
        color: [
          "0",
          "0",
          "0"
        ],
        alpha: "0"
      };
    if (S in r.default)
      return {
        mode: "rgb",
        color: r.default[S].map((C) => C.toString())
      };
    let _ = S.replace(a, (C, A, U, D, M) => [
      "#",
      A,
      A,
      U,
      U,
      D,
      D,
      M ? M + M : ""
    ].join("")).match(i);
    if (_ !== null)
      return {
        mode: "rgb",
        color: [
          parseInt(_[1], 16),
          parseInt(_[2], 16),
          parseInt(_[3], 16)
        ].map((C) => C.toString()),
        alpha: _[4] ? (parseInt(_[4], 16) / 255).toString() : void 0
      };
    var w;
    let x = (w = S.match(f)) !== null && w !== void 0 ? w : S.match(m);
    if (x === null)
      return null;
    let b = [
      x[2],
      x[3],
      x[4]
    ].filter(Boolean).map((C) => C.toString());
    return b.length === 2 && b[0].startsWith("var(") ? {
      mode: x[1],
      color: [
        b[0]
      ],
      alpha: b[1]
    } : !d && b.length !== 3 || b.length < 3 && !b.some((C) => /^var\(.*?\)$/.test(C)) ? null : {
      mode: x[1],
      color: b,
      alpha: (c = x[5]) === null || c === void 0 || (g = c.toString) === null || g === void 0 ? void 0 : g.call(c)
    };
  }
  function E({ mode: S, color: d, alpha: c }) {
    let g = c !== void 0;
    return S === "rgba" || S === "hsla" ? `${S}(${d.join(", ")}${g ? `, ${c}` : ""})` : `${S}(${d.join(" ")}${g ? ` / ${c}` : ""})`;
  }
})(La);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(a, s) {
    for (var u in s)
      Object.defineProperty(a, u, {
        enumerable: !0,
        get: s[u]
      });
  }
  t(e, {
    withAlphaValue: function() {
      return n;
    },
    default: function() {
      return i;
    }
  });
  const r = La;
  function n(a, s, u) {
    if (typeof a == "function")
      return a({
        opacityValue: s
      });
    let o = (0, r.parseColor)(a, {
      loose: !0
    });
    return o === null ? u : (0, r.formatColor)({
      ...o,
      alpha: s
    });
  }
  function i({ color: a, property: s, variable: u }) {
    let o = [].concat(s);
    if (typeof a == "function")
      return {
        [u]: "1",
        ...Object.fromEntries(o.map((f) => [
          f,
          a({
            opacityVariable: u,
            opacityValue: `var(${u})`
          })
        ]))
      };
    const l = (0, r.parseColor)(a);
    return l === null ? Object.fromEntries(o.map((f) => [
      f,
      a
    ])) : l.alpha !== void 0 ? Object.fromEntries(o.map((f) => [
      f,
      a
    ])) : {
      [u]: "1",
      ...Object.fromEntries(o.map((f) => [
        f,
        (0, r.formatColor)({
          ...l,
          alpha: `var(${u})`
        })
      ]))
    };
  }
})(Pa);
var Ma = {}, Lo = {}, Gn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "splitAtTopLevelOnly", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(r, n) {
    let i = [], a = [], s = 0, u = !1;
    for (let o = 0; o < r.length; o++) {
      let l = r[o];
      i.length === 0 && l === n[0] && !u && (n.length === 1 || r.slice(o, o + n.length) === n) && (a.push(r.slice(s, o)), s = o + n.length), u ? u = !1 : l === "\\" && (u = !0), l === "(" || l === "[" || l === "{" ? i.push(l) : (l === ")" && i[i.length - 1] === "(" || l === "]" && i[i.length - 1] === "[" || l === "}" && i[i.length - 1] === "{") && i.pop();
    }
    return a.push(r.slice(s)), a;
  }
})(Gn);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(o, l) {
    for (var f in l)
      Object.defineProperty(o, f, {
        enumerable: !0,
        get: l[f]
      });
  }
  t(e, {
    parseBoxShadowValue: function() {
      return s;
    },
    formatBoxShadowValue: function() {
      return u;
    }
  });
  const r = Gn;
  let n = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), i = /\ +(?![^(]*\))/g, a = /^-?(\d+|\.\d+)(.*?)$/g;
  function s(o) {
    return (0, r.splitAtTopLevelOnly)(o, ",").map((f) => {
      let m = f.trim(), p = {
        raw: m
      }, E = m.split(i), S = /* @__PURE__ */ new Set();
      for (let d of E)
        a.lastIndex = 0, !S.has("KEYWORD") && n.has(d) ? (p.keyword = d, S.add("KEYWORD")) : a.test(d) ? S.has("X") ? S.has("Y") ? S.has("BLUR") ? S.has("SPREAD") || (p.spread = d, S.add("SPREAD")) : (p.blur = d, S.add("BLUR")) : (p.y = d, S.add("Y")) : (p.x = d, S.add("X")) : p.color ? (p.unknown || (p.unknown = []), p.unknown.push(d)) : p.color = d;
      return p.valid = p.x !== void 0 && p.y !== void 0, p;
    });
  }
  function u(o) {
    return o.map((l) => l.valid ? [
      l.keyword,
      l.x,
      l.y,
      l.blur,
      l.spread,
      l.color
    ].filter(Boolean).join(" ") : l.raw).join(", ");
  }
})(Lo);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(L, re) {
    for (var ne in re)
      Object.defineProperty(L, ne, {
        enumerable: !0,
        get: re[ne]
      });
  }
  t(e, {
    normalize: function() {
      return l;
    },
    url: function() {
      return f;
    },
    number: function() {
      return m;
    },
    percentage: function() {
      return p;
    },
    length: function() {
      return d;
    },
    lineWidth: function() {
      return g;
    },
    shadow: function() {
      return _;
    },
    color: function() {
      return w;
    },
    image: function() {
      return x;
    },
    gradient: function() {
      return C;
    },
    position: function() {
      return U;
    },
    familyName: function() {
      return D;
    },
    genericName: function() {
      return z;
    },
    absoluteSize: function() {
      return q;
    },
    relativeSize: function() {
      return V;
    }
  });
  const r = La, n = Lo, i = Gn;
  let a = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function s(L) {
    return a.some((re) => new RegExp(`^${re}\\(.*\\)`).test(L));
  }
  const u = "--tw-placeholder", o = new RegExp(u, "g");
  function l(L, re = !0) {
    return L.startsWith("--") ? `var(${L})` : L.includes("url(") ? L.split(/(url\(.*?\))/g).filter(Boolean).map((ne) => /^url\(.*?\)$/.test(ne) ? ne : l(ne, !1)).join("") : (L = L.replace(/([^\\])_+/g, (ne, ue) => ue + " ".repeat(ne.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), re && (L = L.trim()), L = L.replace(/(calc|min|max|clamp)\(.+\)/g, (ne) => {
      let ue = [];
      return ne.replace(/var\((--.+?)[,)]/g, (Ae, ee) => (ue.push(ee), Ae.replace(ee, u))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ").replace(o, () => ue.shift());
    }), L);
  }
  function f(L) {
    return L.startsWith("url(");
  }
  function m(L) {
    return !isNaN(Number(L)) || s(L);
  }
  function p(L) {
    return L.endsWith("%") && m(L.slice(0, -1)) || s(L);
  }
  let S = `(?:${[
    "cm",
    "mm",
    "Q",
    "in",
    "pc",
    "pt",
    "px",
    "em",
    "ex",
    "ch",
    "rem",
    "lh",
    "rlh",
    "vw",
    "vh",
    "vmin",
    "vmax",
    "vb",
    "vi",
    "svw",
    "svh",
    "lvw",
    "lvh",
    "dvw",
    "dvh",
    "cqw",
    "cqh",
    "cqi",
    "cqb",
    "cqmin",
    "cqmax"
  ].join("|")})`;
  function d(L) {
    return L === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${S}$`).test(L) || s(L);
  }
  let c = /* @__PURE__ */ new Set([
    "thin",
    "medium",
    "thick"
  ]);
  function g(L) {
    return c.has(L);
  }
  function _(L) {
    let re = (0, n.parseBoxShadowValue)(l(L));
    for (let ne of re)
      if (!ne.valid)
        return !1;
    return !0;
  }
  function w(L) {
    let re = 0;
    return (0, i.splitAtTopLevelOnly)(L, "_").every((ue) => (ue = l(ue), ue.startsWith("var(") ? !0 : (0, r.parseColor)(ue, {
      loose: !0
    }) !== null ? (re++, !0) : !1)) ? re > 0 : !1;
  }
  function x(L) {
    let re = 0;
    return (0, i.splitAtTopLevelOnly)(L, ",").every((ue) => (ue = l(ue), ue.startsWith("var(") ? !0 : f(ue) || C(ue) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((Ae) => ue.startsWith(Ae)) ? (re++, !0) : !1)) ? re > 0 : !1;
  }
  let b = /* @__PURE__ */ new Set([
    "linear-gradient",
    "radial-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient",
    "conic-gradient"
  ]);
  function C(L) {
    L = l(L);
    for (let re of b)
      if (L.startsWith(`${re}(`))
        return !0;
    return !1;
  }
  let A = /* @__PURE__ */ new Set([
    "center",
    "top",
    "right",
    "bottom",
    "left"
  ]);
  function U(L) {
    let re = 0;
    return (0, i.splitAtTopLevelOnly)(L, "_").every((ue) => (ue = l(ue), ue.startsWith("var(") ? !0 : A.has(ue) || d(ue) || p(ue) ? (re++, !0) : !1)) ? re > 0 : !1;
  }
  function D(L) {
    let re = 0;
    return (0, i.splitAtTopLevelOnly)(L, ",").every((ue) => (ue = l(ue), ue.startsWith("var(") ? !0 : ue.includes(" ") && !/(['"])([^"']+)\1/g.test(ue) || /^\d/g.test(ue) ? !1 : (re++, !0))) ? re > 0 : !1;
  }
  let M = /* @__PURE__ */ new Set([
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
    "math",
    "emoji",
    "fangsong"
  ]);
  function z(L) {
    return M.has(L);
  }
  let Y = /* @__PURE__ */ new Set([
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "x-large",
    "xxx-large"
  ]);
  function q(L) {
    return Y.has(L);
  }
  let Q = /* @__PURE__ */ new Set([
    "larger",
    "smaller"
  ]);
  function V(L) {
    return Q.has(L);
  }
})(Ma);
var Mo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = Ma, r = Gn;
  function n(i) {
    let a = [
      "cover",
      "contain"
    ];
    return (0, r.splitAtTopLevelOnly)(i, ",").every((s) => {
      let u = (0, r.splitAtTopLevelOnly)(s, "_").filter(Boolean);
      return u.length === 1 && a.includes(u[0]) ? !0 : u.length !== 1 && u.length !== 2 ? !1 : u.every((o) => (0, t.length)(o) || (0, t.percentage)(o) || o === "auto");
    });
  }
})(Mo);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(D, M) {
    for (var z in M)
      Object.defineProperty(D, z, {
        enumerable: !0,
        get: M[z]
      });
  }
  t(e, {
    updateAllClasses: function() {
      return l;
    },
    asValue: function() {
      return p;
    },
    parseColorFormat: function() {
      return d;
    },
    asColor: function() {
      return g;
    },
    asLookupValue: function() {
      return _;
    },
    typeMap: function() {
      return x;
    },
    coerceValue: function() {
      return A;
    },
    getMatchingTypes: function() {
      return U;
    }
  });
  const r = /* @__PURE__ */ o(Io), n = Pa, i = Ma, a = /* @__PURE__ */ o(Ea), s = Mo, u = qn;
  function o(D) {
    return D && D.__esModule ? D : {
      default: D
    };
  }
  function l(D, M) {
    D.walkClasses((z) => {
      z.value = M(z.value), z.raws && z.raws.value && (z.raws.value = (0, r.default)(z.raws.value));
    });
  }
  function f(D, M) {
    if (!E(D))
      return;
    let z = D.slice(1, -1);
    if (M(z))
      return (0, i.normalize)(z);
  }
  function m(D, M = {}, z) {
    let Y = M[D];
    if (Y !== void 0)
      return (0, a.default)(Y);
    if (E(D)) {
      let q = f(D, z);
      return q === void 0 ? void 0 : (0, a.default)(q);
    }
  }
  function p(D, M = {}, { validate: z = () => !0 } = {}) {
    var Y;
    let q = (Y = M.values) === null || Y === void 0 ? void 0 : Y[D];
    return q !== void 0 ? q : M.supportsNegativeValues && D.startsWith("-") ? m(D.slice(1), M.values, z) : f(D, z);
  }
  function E(D) {
    return D.startsWith("[") && D.endsWith("]");
  }
  function S(D) {
    let M = D.lastIndexOf("/");
    return M === -1 || M === D.length - 1 ? [
      D,
      void 0
    ] : E(D) && !D.includes("]/[") ? [
      D,
      void 0
    ] : [
      D.slice(0, M),
      D.slice(M + 1)
    ];
  }
  function d(D) {
    if (typeof D == "string" && D.includes("<alpha-value>")) {
      let M = D;
      return ({ opacityValue: z = 1 }) => M.replace("<alpha-value>", z);
    }
    return D;
  }
  function c(D) {
    return (0, i.normalize)(D.slice(1, -1));
  }
  function g(D, M = {}, { tailwindConfig: z = {} } = {}) {
    var Y;
    if (((Y = M.values) === null || Y === void 0 ? void 0 : Y[D]) !== void 0) {
      var q;
      return d((q = M.values) === null || q === void 0 ? void 0 : q[D]);
    }
    let [Q, V] = S(D);
    if (V !== void 0) {
      var L, re, ne, ue;
      let Ae = (ue = (L = M.values) === null || L === void 0 ? void 0 : L[Q]) !== null && ue !== void 0 ? ue : E(Q) ? Q.slice(1, -1) : void 0;
      return Ae === void 0 ? void 0 : (Ae = d(Ae), E(V) ? (0, n.withAlphaValue)(Ae, c(V)) : ((re = z.theme) === null || re === void 0 || (ne = re.opacity) === null || ne === void 0 ? void 0 : ne[V]) === void 0 ? void 0 : (0, n.withAlphaValue)(Ae, z.theme.opacity[V]));
    }
    return p(D, M, {
      validate: i.color
    });
  }
  function _(D, M = {}) {
    var z;
    return (z = M.values) === null || z === void 0 ? void 0 : z[D];
  }
  function w(D) {
    return (M, z) => p(M, z, {
      validate: D
    });
  }
  let x = {
    any: p,
    color: g,
    url: w(i.url),
    image: w(i.image),
    length: w(i.length),
    percentage: w(i.percentage),
    position: w(i.position),
    lookup: _,
    "generic-name": w(i.genericName),
    "family-name": w(i.familyName),
    number: w(i.number),
    "line-width": w(i.lineWidth),
    "absolute-size": w(i.absoluteSize),
    "relative-size": w(i.relativeSize),
    shadow: w(i.shadow),
    size: w(s.backgroundSize)
  }, b = Object.keys(x);
  function C(D, M) {
    let z = D.indexOf(M);
    return z === -1 ? [
      void 0,
      D
    ] : [
      D.slice(0, z),
      D.slice(z + 1)
    ];
  }
  function A(D, M, z, Y) {
    if (z.values && M in z.values)
      for (let { type: Q } of D ?? []) {
        let V = x[Q](M, z, {
          tailwindConfig: Y
        });
        if (V !== void 0)
          return [
            V,
            Q,
            null
          ];
      }
    if (E(M)) {
      let Q = M.slice(1, -1), [V, L] = C(Q, ":");
      if (!/^[\w-_]+$/g.test(V))
        L = Q;
      else if (V !== void 0 && !b.includes(V))
        return [];
      if (L.length > 0 && b.includes(V))
        return [
          p(`[${L}]`, z),
          V,
          null
        ];
    }
    let q = U(D, M, z, Y);
    for (let Q of q)
      return Q;
    return [];
  }
  function* U(D, M, z, Y) {
    let q = (0, u.flagEnabled)(Y, "generalizedModifiers"), [Q, V] = S(M);
    if (q && z.modifiers != null && (z.modifiers === "any" || typeof z.modifiers == "object" && (V && E(V) || V in z.modifiers)) || (Q = M, V = void 0), V !== void 0 && Q === "" && (Q = "DEFAULT"), V !== void 0 && typeof z.modifiers == "object") {
      var re, ne;
      let ue = (ne = (re = z.modifiers) === null || re === void 0 ? void 0 : re[V]) !== null && ne !== void 0 ? ne : null;
      ue !== null ? V = ue : E(V) && (V = c(V));
    }
    for (let { type: ue } of D ?? []) {
      let Ae = x[ue](Q, z, {
        tailwindConfig: Y
      });
      Ae !== void 0 && (yield [
        Ae,
        ue,
        V ?? null
      ]);
    }
  }
})(Co);
var No = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(r) {
    return typeof r == "function" ? r({}) : r;
  }
})(No);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return z;
    }
  });
  const t = /* @__PURE__ */ E(Ea), r = /* @__PURE__ */ E(wo), n = /* @__PURE__ */ E(ko), i = /* @__PURE__ */ E(Da), a = To, s = Oo, u = Eo, o = /* @__PURE__ */ E(Do), l = Ia, f = Co, m = Pa, p = /* @__PURE__ */ E(No);
  function E(Y) {
    return Y && Y.__esModule ? Y : {
      default: Y
    };
  }
  function S(Y) {
    return typeof Y == "function";
  }
  function d(Y, ...q) {
    let Q = q.pop();
    for (let V of q)
      for (let L in V) {
        let re = Q(Y[L], V[L]);
        re === void 0 ? (0, o.default)(Y[L]) && (0, o.default)(V[L]) ? Y[L] = d({}, Y[L], V[L], Q) : Y[L] = V[L] : Y[L] = re;
      }
    return Y;
  }
  const c = {
    colors: i.default,
    negative(Y) {
      return Object.keys(Y).filter((q) => Y[q] !== "0").reduce((q, Q) => {
        let V = (0, t.default)(Y[Q]);
        return V !== void 0 && (q[`-${Q}`] = V), q;
      }, {});
    },
    breakpoints(Y) {
      return Object.keys(Y).filter((q) => typeof Y[q] == "string").reduce((q, Q) => ({
        ...q,
        [`screen-${Q}`]: Y[Q]
      }), {});
    }
  };
  function g(Y, ...q) {
    return S(Y) ? Y(...q) : Y;
  }
  function _(Y) {
    return Y.reduce((q, { extend: Q }) => d(q, Q, (V, L) => V === void 0 ? [
      L
    ] : Array.isArray(V) ? [
      L,
      ...V
    ] : [
      L,
      V
    ]), {});
  }
  function w(Y) {
    return {
      ...Y.reduce((q, Q) => (0, a.defaults)(q, Q), {}),
      // In order to resolve n config objects, we combine all of their `extend` properties
      // into arrays instead of objects so they aren't overridden.
      extend: _(Y)
    };
  }
  function x(Y, q) {
    if (Array.isArray(Y) && (0, o.default)(Y[0]))
      return Y.concat(q);
    if (Array.isArray(q) && (0, o.default)(q[0]) && (0, o.default)(Y))
      return [
        Y,
        ...q
      ];
    if (Array.isArray(q))
      return q;
  }
  function b({ extend: Y, ...q }) {
    return d(q, Y, (Q, V) => !S(Q) && !V.some(S) ? d({}, Q, ...V, x) : (L, re) => d({}, ...[
      Q,
      ...V
    ].map((ne) => g(ne, L, re)), x));
  }
  function* C(Y) {
    let q = (0, s.toPath)(Y);
    if (q.length === 0 || (yield q, Array.isArray(Y)))
      return;
    let Q = /^(.*?)\s*\/\s*([^/]+)$/, V = Y.match(Q);
    if (V !== null) {
      let [, L, re] = V, ne = (0, s.toPath)(L);
      ne.alpha = re, yield ne;
    }
  }
  function A(Y) {
    const q = (Q, V) => {
      for (const L of C(Q)) {
        let re = 0, ne = Y;
        for (; ne != null && re < L.length; )
          ne = ne[L[re++]], ne = S(ne) && (L.alpha === void 0 || re <= L.length - 1) ? ne(q, c) : ne;
        if (ne !== void 0) {
          if (L.alpha !== void 0) {
            let ue = (0, f.parseColorFormat)(ne);
            return (0, m.withAlphaValue)(ue, L.alpha, (0, p.default)(ue));
          }
          return (0, o.default)(ne) ? (0, l.cloneDeep)(ne) : ne;
        }
      }
      return V;
    };
    return Object.assign(q, {
      theme: q,
      ...c
    }), Object.keys(Y).reduce((Q, V) => (Q[V] = S(Y[V]) ? Y[V](q, c) : Y[V], Q), {});
  }
  function U(Y) {
    let q = [];
    return Y.forEach((Q) => {
      q = [
        ...q,
        Q
      ];
      var V;
      const L = (V = Q == null ? void 0 : Q.plugins) !== null && V !== void 0 ? V : [];
      L.length !== 0 && L.forEach((re) => {
        re.__isOptionsFunction && (re = re());
        var ne;
        q = [
          ...q,
          ...U([
            (ne = re == null ? void 0 : re.config) !== null && ne !== void 0 ? ne : {}
          ])
        ];
      });
    }), q;
  }
  function D(Y) {
    return [
      ...Y
    ].reduceRight((Q, V) => S(V) ? V({
      corePlugins: Q
    }) : (0, n.default)(V, Q), r.default);
  }
  function M(Y) {
    return [
      ...Y
    ].reduceRight((Q, V) => [
      ...Q,
      ...V
    ], []);
  }
  function z(Y) {
    let q = [
      ...U(Y),
      {
        prefix: "",
        important: !1,
        separator: ":"
      }
    ];
    var Q, V;
    return (0, u.normalizeConfig)((0, a.defaults)({
      theme: A(b(w(q.map((L) => (Q = L == null ? void 0 : L.theme) !== null && Q !== void 0 ? Q : {})))),
      corePlugins: D(q.map((L) => L.corePlugins)),
      plugins: M(Y.map((L) => (V = L == null ? void 0 : L.plugins) !== null && V !== void 0 ? V : []))
    }, ...q));
  }
})(bo);
var Ao = {}, Ro = {
  content: [],
  presets: [],
  darkMode: "media",
  // or 'class'
  theme: {
    accentColor: ({ theme: e }) => ({
      ...e("colors"),
      auto: "auto"
    }),
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite"
    },
    aria: {
      checked: 'checked="true"',
      disabled: 'disabled="true"',
      expanded: 'expanded="true"',
      hidden: 'hidden="true"',
      pressed: 'pressed="true"',
      readonly: 'readonly="true"',
      required: 'required="true"',
      selected: 'selected="true"'
    },
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9"
    },
    backdropBlur: ({ theme: e }) => e("blur"),
    backdropBrightness: ({ theme: e }) => e("brightness"),
    backdropContrast: ({ theme: e }) => e("contrast"),
    backdropGrayscale: ({ theme: e }) => e("grayscale"),
    backdropHueRotate: ({ theme: e }) => e("hueRotate"),
    backdropInvert: ({ theme: e }) => e("invert"),
    backdropOpacity: ({ theme: e }) => e("opacity"),
    backdropSaturate: ({ theme: e }) => e("saturate"),
    backdropSepia: ({ theme: e }) => e("sepia"),
    backgroundColor: ({ theme: e }) => e("colors"),
    backgroundImage: {
      none: "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
      "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
    },
    backgroundOpacity: ({ theme: e }) => e("opacity"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    blur: {
      0: "0",
      none: "0",
      sm: "4px",
      DEFAULT: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px"
    },
    borderColor: ({ theme: e }) => ({
      ...e("colors"),
      DEFAULT: e("colors.gray.200", "currentColor")
    }),
    borderOpacity: ({ theme: e }) => e("opacity"),
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px"
    },
    borderSpacing: ({ theme: e }) => ({
      ...e("spacing")
    }),
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "none"
    },
    boxShadowColor: ({ theme: e }) => e("colors"),
    brightness: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2"
    },
    caretColor: ({ theme: e }) => e("colors"),
    colors: ({ colors: e }) => ({
      inherit: e.inherit,
      current: e.current,
      transparent: e.transparent,
      black: e.black,
      white: e.white,
      slate: e.slate,
      gray: e.gray,
      zinc: e.zinc,
      neutral: e.neutral,
      stone: e.stone,
      red: e.red,
      orange: e.orange,
      amber: e.amber,
      yellow: e.yellow,
      lime: e.lime,
      green: e.green,
      emerald: e.emerald,
      teal: e.teal,
      cyan: e.cyan,
      sky: e.sky,
      blue: e.blue,
      indigo: e.indigo,
      violet: e.violet,
      purple: e.purple,
      fuchsia: e.fuchsia,
      pink: e.pink,
      rose: e.rose
    }),
    columns: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      "3xs": "16rem",
      "2xs": "18rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem"
    },
    container: {},
    content: {
      none: "none"
    },
    contrast: {
      0: "0",
      50: ".5",
      75: ".75",
      100: "1",
      125: "1.25",
      150: "1.5",
      200: "2"
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      help: "help",
      "not-allowed": "not-allowed",
      none: "none",
      "context-menu": "context-menu",
      progress: "progress",
      cell: "cell",
      crosshair: "crosshair",
      "vertical-text": "vertical-text",
      alias: "alias",
      copy: "copy",
      "no-drop": "no-drop",
      grab: "grab",
      grabbing: "grabbing",
      "all-scroll": "all-scroll",
      "col-resize": "col-resize",
      "row-resize": "row-resize",
      "n-resize": "n-resize",
      "e-resize": "e-resize",
      "s-resize": "s-resize",
      "w-resize": "w-resize",
      "ne-resize": "ne-resize",
      "nw-resize": "nw-resize",
      "se-resize": "se-resize",
      "sw-resize": "sw-resize",
      "ew-resize": "ew-resize",
      "ns-resize": "ns-resize",
      "nesw-resize": "nesw-resize",
      "nwse-resize": "nwse-resize",
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out"
    },
    divideColor: ({ theme: e }) => e("borderColor"),
    divideOpacity: ({ theme: e }) => e("borderOpacity"),
    divideWidth: ({ theme: e }) => e("borderWidth"),
    dropShadow: {
      sm: "0 1px 1px rgb(0 0 0 / 0.05)",
      DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
      md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
      lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
      xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
      "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
      none: "0 0 #0000"
    },
    fill: ({ theme: e }) => ({
      none: "none",
      ...e("colors")
    }),
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    flexBasis: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%"
    }),
    flexGrow: {
      0: "0",
      DEFAULT: "1"
    },
    flexShrink: {
      0: "0",
      DEFAULT: "1"
    },
    fontFamily: {
      sans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }]
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },
    gap: ({ theme: e }) => e("spacing"),
    gradientColorStops: ({ theme: e }) => e("colors"),
    gradientColorStopPositions: {
      "0%": "0%",
      "5%": "5%",
      "10%": "10%",
      "15%": "15%",
      "20%": "20%",
      "25%": "25%",
      "30%": "30%",
      "35%": "35%",
      "40%": "40%",
      "45%": "45%",
      "50%": "50%",
      "55%": "55%",
      "60%": "60%",
      "65%": "65%",
      "70%": "70%",
      "75%": "75%",
      "80%": "80%",
      "85%": "85%",
      "90%": "90%",
      "95%": "95%",
      "100%": "100%"
    },
    grayscale: {
      0: "0",
      DEFAULT: "100%"
    },
    gridAutoColumns: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)"
    },
    gridAutoRows: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)"
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1"
    },
    gridColumnEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridColumnStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridRow: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-full": "1 / -1"
    },
    gridRowEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7"
    },
    gridRowStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7"
    },
    gridTemplateColumns: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))"
    },
    gridTemplateRows: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))"
    },
    height: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    hueRotate: {
      0: "0deg",
      15: "15deg",
      30: "30deg",
      60: "60deg",
      90: "90deg",
      180: "180deg"
    },
    inset: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%"
    }),
    invert: {
      0: "0",
      DEFAULT: "100%"
    },
    keyframes: {
      spin: {
        to: {
          transform: "rotate(360deg)"
        }
      },
      ping: {
        "75%, 100%": {
          transform: "scale(2)",
          opacity: "0"
        }
      },
      pulse: {
        "50%": {
          opacity: ".5"
        }
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
        }
      }
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem"
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal"
    },
    listStyleImage: {
      none: "none"
    },
    margin: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing")
    }),
    lineClamp: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6"
    },
    maxHeight: ({ theme: e }) => ({
      ...e("spacing"),
      none: "none",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    maxWidth: ({ theme: e, breakpoints: t }) => ({
      none: "none",
      0: "0rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      prose: "65ch",
      ...t(e("screens"))
    }),
    minHeight: {
      0: "0px",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    },
    minWidth: {
      0: "0px",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    },
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    opacity: {
      0: "0",
      5: "0.05",
      10: "0.1",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      40: "0.4",
      50: "0.5",
      60: "0.6",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      90: "0.9",
      95: "0.95",
      100: "1"
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12"
    },
    outlineColor: ({ theme: e }) => e("colors"),
    outlineOffset: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    outlineWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    padding: ({ theme: e }) => e("spacing"),
    placeholderColor: ({ theme: e }) => e("colors"),
    placeholderOpacity: ({ theme: e }) => e("opacity"),
    ringColor: ({ theme: e }) => ({
      DEFAULT: e("colors.blue.500", "#3b82f6"),
      ...e("colors")
    }),
    ringOffsetColor: ({ theme: e }) => e("colors"),
    ringOffsetWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    ringOpacity: ({ theme: e }) => ({
      DEFAULT: "0.5",
      ...e("opacity")
    }),
    ringWidth: {
      DEFAULT: "3px",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    rotate: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
      45: "45deg",
      90: "90deg",
      180: "180deg"
    },
    saturate: {
      0: "0",
      50: ".5",
      100: "1",
      150: "1.5",
      200: "2"
    },
    scale: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    scrollMargin: ({ theme: e }) => ({
      ...e("spacing")
    }),
    scrollPadding: ({ theme: e }) => e("spacing"),
    sepia: {
      0: "0",
      DEFAULT: "100%"
    },
    skew: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg"
    },
    space: ({ theme: e }) => ({
      ...e("spacing")
    }),
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem"
    },
    stroke: ({ theme: e }) => ({
      none: "none",
      ...e("colors")
    }),
    strokeWidth: {
      0: "0",
      1: "1",
      2: "2"
    },
    supports: {},
    data: {},
    textColor: ({ theme: e }) => e("colors"),
    textDecorationColor: ({ theme: e }) => e("colors"),
    textDecorationThickness: {
      auto: "auto",
      "from-font": "from-font",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    textIndent: ({ theme: e }) => ({
      ...e("spacing")
    }),
    textOpacity: ({ theme: e }) => e("opacity"),
    textUnderlineOffset: {
      auto: "auto",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    transformOrigin: {
      center: "center",
      top: "top",
      "top-right": "top right",
      right: "right",
      "bottom-right": "bottom right",
      bottom: "bottom",
      "bottom-left": "bottom left",
      left: "left",
      "top-left": "top left"
    },
    transitionDelay: {
      0: "0s",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms"
    },
    transitionDuration: {
      DEFAULT: "150ms",
      0: "0s",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms"
    },
    transitionProperty: {
      none: "none",
      all: "all",
      DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform"
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    translate: ({ theme: e }) => ({
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%"
    }),
    width: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    willChange: {
      auto: "auto",
      scroll: "scroll-position",
      contents: "contents",
      transform: "transform"
    },
    zIndex: {
      auto: "auto",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50"
    }
  },
  plugins: []
};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const t = /* @__PURE__ */ n(Ro), r = qn;
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  function i(a) {
    var s;
    const u = ((s = a == null ? void 0 : a.presets) !== null && s !== void 0 ? s : [
      t.default
    ]).slice().reverse().flatMap((f) => i(f instanceof Function ? f() : f)), o = {
      // Add experimental configs here...
      respectDefaultRingColorOpacity: {
        theme: {
          ringColor: ({ theme: f }) => ({
            DEFAULT: "#3b82f67f",
            ...f("colors")
          })
        }
      },
      disableColorOpacityUtilitiesByDefault: {
        corePlugins: {
          backgroundOpacity: !1,
          borderOpacity: !1,
          divideOpacity: !1,
          placeholderOpacity: !1,
          ringOpacity: !1,
          textOpacity: !1
        }
      }
    }, l = Object.keys(o).filter((f) => (0, r.flagEnabled)(a, f)).map((f) => o[f]);
    return [
      a,
      ...l,
      ...u
    ];
  }
})(Ao);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const t = /* @__PURE__ */ n(bo), r = /* @__PURE__ */ n(Ao);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  function i(...a) {
    let [, ...s] = (0, r.default)(a[0]);
    return (0, t.default)([
      ...a,
      ...s
    ]);
  }
})(yo);
let Ei = yo;
var dd = (Ei.__esModule ? Ei : { default: Ei }).default;
const Fo = /* @__PURE__ */ Kr(dd);
var Yo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const t = Ia, r = /* @__PURE__ */ n(Ro);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const i = (0, t.cloneDeep)(r.default.theme);
})(Yo);
let Di = Yo;
var fd = (Di.__esModule ? Di : { default: Di }).default;
const Cs = /* @__PURE__ */ Kr(fd);
var Bo = {}, Wo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function t(n, i) {
    return {
      handler: n,
      config: i
    };
  }
  t.withOptions = function(n, i = () => ({})) {
    const a = function(s) {
      return {
        __options: s,
        handler: n(s),
        config: i(s)
      };
    };
    return a.__isOptionsFunction = !0, a.__pluginFunction = n, a.__configFunction = i, a;
  };
  const r = t;
})(Wo);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = /* @__PURE__ */ r(Wo);
  function r(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  const n = t.default;
})(Bo);
let Ci = Bo;
var Uo = (Ci.__esModule ? Ci : { default: Ci }).default;
const Is = /* @__PURE__ */ Kr(Uo);
let Ii = Da;
var zo = (Ii.__esModule ? Ii : { default: Ii }).default;
const dr = /* @__PURE__ */ Kr(zo);
var An = { exports: {} };
An.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", i = 800, a = 16, s = 9007199254740991, u = "[object Arguments]", o = "[object Array]", l = "[object AsyncFunction]", f = "[object Boolean]", m = "[object Date]", p = "[object Error]", E = "[object Function]", S = "[object GeneratorFunction]", d = "[object Map]", c = "[object Number]", g = "[object Null]", _ = "[object Object]", w = "[object Proxy]", x = "[object RegExp]", b = "[object Set]", C = "[object String]", A = "[object Undefined]", U = "[object WeakMap]", D = "[object ArrayBuffer]", M = "[object DataView]", z = "[object Float32Array]", Y = "[object Float64Array]", q = "[object Int8Array]", Q = "[object Int16Array]", V = "[object Int32Array]", L = "[object Uint8Array]", re = "[object Uint8ClampedArray]", ne = "[object Uint16Array]", ue = "[object Uint32Array]", Ae = /[\\^$.*+?()[\]{}|]/g, ee = /^\[object .+?Constructor\]$/, ie = /^(?:0|[1-9]\d*)$/, j = {};
  j[z] = j[Y] = j[q] = j[Q] = j[V] = j[L] = j[re] = j[ne] = j[ue] = !0, j[u] = j[o] = j[D] = j[f] = j[M] = j[m] = j[p] = j[E] = j[d] = j[c] = j[_] = j[x] = j[b] = j[C] = j[U] = !1;
  var R = typeof hr == "object" && hr && hr.Object === Object && hr, K = typeof self == "object" && self && self.Object === Object && self, ce = R || K || Function("return this")(), B = t && !t.nodeType && t, me = B && !0 && e && !e.nodeType && e, Se = me && me.exports === B, ve = Se && R.process, fe = function() {
    try {
      var y = me && me.require && me.require("util").types;
      return y || ve && ve.binding && ve.binding("util");
    } catch {
    }
  }(), De = fe && fe.isTypedArray;
  function k(y, O, N) {
    switch (N.length) {
      case 0:
        return y.call(O);
      case 1:
        return y.call(O, N[0]);
      case 2:
        return y.call(O, N[0], N[1]);
      case 3:
        return y.call(O, N[0], N[1], N[2]);
    }
    return y.apply(O, N);
  }
  function v(y, O) {
    for (var N = -1, se = Array(y); ++N < y; )
      se[N] = O(N);
    return se;
  }
  function I(y) {
    return function(O) {
      return y(O);
    };
  }
  function Z(y, O) {
    return y == null ? void 0 : y[O];
  }
  function de(y, O) {
    return function(N) {
      return y(O(N));
    };
  }
  var ge = Array.prototype, Fe = Function.prototype, Ue = Object.prototype, lt = ce["__core-js_shared__"], Ie = Fe.toString, F = Ue.hasOwnProperty, G = function() {
    var y = /[^.]+$/.exec(lt && lt.keys && lt.keys.IE_PROTO || "");
    return y ? "Symbol(src)_1." + y : "";
  }(), et = Ue.toString, it = Ie.call(Object), kr = RegExp(
    "^" + Ie.call(F).replace(Ae, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Nt = Se ? ce.Buffer : void 0, At = ce.Symbol, Et = ce.Uint8Array, Mr = Nt ? Nt.allocUnsafe : void 0, Jr = de(Object.getPrototypeOf, Object), ps = Object.create, Du = Ue.propertyIsEnumerable, Cu = ge.splice, xr = At ? At.toStringTag : void 0, Sn = function() {
    try {
      var y = yi(Object, "defineProperty");
      return y({}, "", {}), y;
    } catch {
    }
  }(), Iu = Nt ? Nt.isBuffer : void 0, gs = Math.max, Pu = Date.now, _s = yi(ce, "Map"), en = yi(Object, "create"), Lu = function() {
    function y() {
    }
    return function(O) {
      if (!Tr(O))
        return {};
      if (ps)
        return ps(O);
      y.prototype = O;
      var N = new y();
      return y.prototype = void 0, N;
    };
  }();
  function Sr(y) {
    var O = -1, N = y == null ? 0 : y.length;
    for (this.clear(); ++O < N; ) {
      var se = y[O];
      this.set(se[0], se[1]);
    }
  }
  function Mu() {
    this.__data__ = en ? en(null) : {}, this.size = 0;
  }
  function Nu(y) {
    var O = this.has(y) && delete this.__data__[y];
    return this.size -= O ? 1 : 0, O;
  }
  function Au(y) {
    var O = this.__data__;
    if (en) {
      var N = O[y];
      return N === n ? void 0 : N;
    }
    return F.call(O, y) ? O[y] : void 0;
  }
  function Ru(y) {
    var O = this.__data__;
    return en ? O[y] !== void 0 : F.call(O, y);
  }
  function Fu(y, O) {
    var N = this.__data__;
    return this.size += this.has(y) ? 0 : 1, N[y] = en && O === void 0 ? n : O, this;
  }
  Sr.prototype.clear = Mu, Sr.prototype.delete = Nu, Sr.prototype.get = Au, Sr.prototype.has = Ru, Sr.prototype.set = Fu;
  function Xt(y) {
    var O = -1, N = y == null ? 0 : y.length;
    for (this.clear(); ++O < N; ) {
      var se = y[O];
      this.set(se[0], se[1]);
    }
  }
  function Yu() {
    this.__data__ = [], this.size = 0;
  }
  function Bu(y) {
    var O = this.__data__, N = Tn(O, y);
    if (N < 0)
      return !1;
    var se = O.length - 1;
    return N == se ? O.pop() : Cu.call(O, N, 1), --this.size, !0;
  }
  function Wu(y) {
    var O = this.__data__, N = Tn(O, y);
    return N < 0 ? void 0 : O[N][1];
  }
  function Uu(y) {
    return Tn(this.__data__, y) > -1;
  }
  function zu(y, O) {
    var N = this.__data__, se = Tn(N, y);
    return se < 0 ? (++this.size, N.push([y, O])) : N[se][1] = O, this;
  }
  Xt.prototype.clear = Yu, Xt.prototype.delete = Bu, Xt.prototype.get = Wu, Xt.prototype.has = Uu, Xt.prototype.set = zu;
  function Nr(y) {
    var O = -1, N = y == null ? 0 : y.length;
    for (this.clear(); ++O < N; ) {
      var se = y[O];
      this.set(se[0], se[1]);
    }
  }
  function Vu() {
    this.size = 0, this.__data__ = {
      hash: new Sr(),
      map: new (_s || Xt)(),
      string: new Sr()
    };
  }
  function Hu(y) {
    var O = En(this, y).delete(y);
    return this.size -= O ? 1 : 0, O;
  }
  function ju(y) {
    return En(this, y).get(y);
  }
  function qu(y) {
    return En(this, y).has(y);
  }
  function Gu(y, O) {
    var N = En(this, y), se = N.size;
    return N.set(y, O), this.size += N.size == se ? 0 : 1, this;
  }
  Nr.prototype.clear = Vu, Nr.prototype.delete = Hu, Nr.prototype.get = ju, Nr.prototype.has = qu, Nr.prototype.set = Gu;
  function Ar(y) {
    var O = this.__data__ = new Xt(y);
    this.size = O.size;
  }
  function $u() {
    this.__data__ = new Xt(), this.size = 0;
  }
  function Ku(y) {
    var O = this.__data__, N = O.delete(y);
    return this.size = O.size, N;
  }
  function Xu(y) {
    return this.__data__.get(y);
  }
  function Qu(y) {
    return this.__data__.has(y);
  }
  function Zu(y, O) {
    var N = this.__data__;
    if (N instanceof Xt) {
      var se = N.__data__;
      if (!_s || se.length < r - 1)
        return se.push([y, O]), this.size = ++N.size, this;
      N = this.__data__ = new Nr(se);
    }
    return N.set(y, O), this.size = N.size, this;
  }
  Ar.prototype.clear = $u, Ar.prototype.delete = Ku, Ar.prototype.get = Xu, Ar.prototype.has = Qu, Ar.prototype.set = Zu;
  function Ju(y, O) {
    var N = ki(y), se = !N && wi(y), Pe = !N && !se && ks(y), Be = !N && !se && !Pe && Ss(y), $e = N || se || Pe || Be, Ce = $e ? v(y.length, String) : [], Ke = Ce.length;
    for (var Dt in y)
      (O || F.call(y, Dt)) && !($e && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Dt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Pe && (Dt == "offset" || Dt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Be && (Dt == "buffer" || Dt == "byteLength" || Dt == "byteOffset") || // Skip index properties.
      bs(Dt, Ke))) && Ce.push(Dt);
    return Ce;
  }
  function _i(y, O, N) {
    (N !== void 0 && !Dn(y[O], N) || N === void 0 && !(O in y)) && vi(y, O, N);
  }
  function ec(y, O, N) {
    var se = y[O];
    (!(F.call(y, O) && Dn(se, N)) || N === void 0 && !(O in y)) && vi(y, O, N);
  }
  function Tn(y, O) {
    for (var N = y.length; N--; )
      if (Dn(y[N][0], O))
        return N;
    return -1;
  }
  function vi(y, O, N) {
    O == "__proto__" && Sn ? Sn(y, O, {
      configurable: !0,
      enumerable: !0,
      value: N,
      writable: !0
    }) : y[O] = N;
  }
  var tc = mc();
  function On(y) {
    return y == null ? y === void 0 ? A : g : xr && xr in Object(y) ? pc(y) : wc(y);
  }
  function vs(y) {
    return tn(y) && On(y) == u;
  }
  function rc(y) {
    if (!Tr(y) || yc(y))
      return !1;
    var O = Si(y) ? kr : ee;
    return O.test(Tc(y));
  }
  function nc(y) {
    return tn(y) && xs(y.length) && !!j[On(y)];
  }
  function ic(y) {
    if (!Tr(y))
      return bc(y);
    var O = ws(y), N = [];
    for (var se in y)
      se == "constructor" && (O || !F.call(y, se)) || N.push(se);
    return N;
  }
  function ys(y, O, N, se, Pe) {
    y !== O && tc(O, function(Be, $e) {
      if (Pe || (Pe = new Ar()), Tr(Be))
        ac(y, O, $e, N, ys, se, Pe);
      else {
        var Ce = se ? se(bi(y, $e), Be, $e + "", y, O, Pe) : void 0;
        Ce === void 0 && (Ce = Be), _i(y, $e, Ce);
      }
    }, Ts);
  }
  function ac(y, O, N, se, Pe, Be, $e) {
    var Ce = bi(y, N), Ke = bi(O, N), Dt = $e.get(Ke);
    if (Dt) {
      _i(y, N, Dt);
      return;
    }
    var bt = Be ? Be(Ce, Ke, N + "", y, O, $e) : void 0, rn = bt === void 0;
    if (rn) {
      var Ti = ki(Ke), Oi = !Ti && ks(Ke), Es = !Ti && !Oi && Ss(Ke);
      bt = Ke, Ti || Oi || Es ? ki(Ce) ? bt = Ce : Oc(Ce) ? bt = dc(Ce) : Oi ? (rn = !1, bt = lc(Ke, !0)) : Es ? (rn = !1, bt = cc(Ke, !0)) : bt = [] : Ec(Ke) || wi(Ke) ? (bt = Ce, wi(Ce) ? bt = Dc(Ce) : (!Tr(Ce) || Si(Ce)) && (bt = gc(Ke))) : rn = !1;
    }
    rn && ($e.set(Ke, bt), Pe(bt, Ke, se, Be, $e), $e.delete(Ke)), _i(y, N, bt);
  }
  function sc(y, O) {
    return xc(kc(y, O, Os), y + "");
  }
  var oc = Sn ? function(y, O) {
    return Sn(y, "toString", {
      configurable: !0,
      enumerable: !1,
      value: Ic(O),
      writable: !0
    });
  } : Os;
  function lc(y, O) {
    if (O)
      return y.slice();
    var N = y.length, se = Mr ? Mr(N) : new y.constructor(N);
    return y.copy(se), se;
  }
  function uc(y) {
    var O = new y.constructor(y.byteLength);
    return new Et(O).set(new Et(y)), O;
  }
  function cc(y, O) {
    var N = O ? uc(y.buffer) : y.buffer;
    return new y.constructor(N, y.byteOffset, y.length);
  }
  function dc(y, O) {
    var N = -1, se = y.length;
    for (O || (O = Array(se)); ++N < se; )
      O[N] = y[N];
    return O;
  }
  function fc(y, O, N, se) {
    var Pe = !N;
    N || (N = {});
    for (var Be = -1, $e = O.length; ++Be < $e; ) {
      var Ce = O[Be], Ke = se ? se(N[Ce], y[Ce], Ce, N, y) : void 0;
      Ke === void 0 && (Ke = y[Ce]), Pe ? vi(N, Ce, Ke) : ec(N, Ce, Ke);
    }
    return N;
  }
  function hc(y) {
    return sc(function(O, N) {
      var se = -1, Pe = N.length, Be = Pe > 1 ? N[Pe - 1] : void 0, $e = Pe > 2 ? N[2] : void 0;
      for (Be = y.length > 3 && typeof Be == "function" ? (Pe--, Be) : void 0, $e && _c(N[0], N[1], $e) && (Be = Pe < 3 ? void 0 : Be, Pe = 1), O = Object(O); ++se < Pe; ) {
        var Ce = N[se];
        Ce && y(O, Ce, se, Be);
      }
      return O;
    });
  }
  function mc(y) {
    return function(O, N, se) {
      for (var Pe = -1, Be = Object(O), $e = se(O), Ce = $e.length; Ce--; ) {
        var Ke = $e[y ? Ce : ++Pe];
        if (N(Be[Ke], Ke, Be) === !1)
          break;
      }
      return O;
    };
  }
  function En(y, O) {
    var N = y.__data__;
    return vc(O) ? N[typeof O == "string" ? "string" : "hash"] : N.map;
  }
  function yi(y, O) {
    var N = Z(y, O);
    return rc(N) ? N : void 0;
  }
  function pc(y) {
    var O = F.call(y, xr), N = y[xr];
    try {
      y[xr] = void 0;
      var se = !0;
    } catch {
    }
    var Pe = et.call(y);
    return se && (O ? y[xr] = N : delete y[xr]), Pe;
  }
  function gc(y) {
    return typeof y.constructor == "function" && !ws(y) ? Lu(Jr(y)) : {};
  }
  function bs(y, O) {
    var N = typeof y;
    return O = O ?? s, !!O && (N == "number" || N != "symbol" && ie.test(y)) && y > -1 && y % 1 == 0 && y < O;
  }
  function _c(y, O, N) {
    if (!Tr(N))
      return !1;
    var se = typeof O;
    return (se == "number" ? xi(N) && bs(O, N.length) : se == "string" && O in N) ? Dn(N[O], y) : !1;
  }
  function vc(y) {
    var O = typeof y;
    return O == "string" || O == "number" || O == "symbol" || O == "boolean" ? y !== "__proto__" : y === null;
  }
  function yc(y) {
    return !!G && G in y;
  }
  function ws(y) {
    var O = y && y.constructor, N = typeof O == "function" && O.prototype || Ue;
    return y === N;
  }
  function bc(y) {
    var O = [];
    if (y != null)
      for (var N in Object(y))
        O.push(N);
    return O;
  }
  function wc(y) {
    return et.call(y);
  }
  function kc(y, O, N) {
    return O = gs(O === void 0 ? y.length - 1 : O, 0), function() {
      for (var se = arguments, Pe = -1, Be = gs(se.length - O, 0), $e = Array(Be); ++Pe < Be; )
        $e[Pe] = se[O + Pe];
      Pe = -1;
      for (var Ce = Array(O + 1); ++Pe < O; )
        Ce[Pe] = se[Pe];
      return Ce[O] = N($e), k(y, this, Ce);
    };
  }
  function bi(y, O) {
    if (!(O === "constructor" && typeof y[O] == "function") && O != "__proto__")
      return y[O];
  }
  var xc = Sc(oc);
  function Sc(y) {
    var O = 0, N = 0;
    return function() {
      var se = Pu(), Pe = a - (se - N);
      if (N = se, Pe > 0) {
        if (++O >= i)
          return arguments[0];
      } else
        O = 0;
      return y.apply(void 0, arguments);
    };
  }
  function Tc(y) {
    if (y != null) {
      try {
        return Ie.call(y);
      } catch {
      }
      try {
        return y + "";
      } catch {
      }
    }
    return "";
  }
  function Dn(y, O) {
    return y === O || y !== y && O !== O;
  }
  var wi = vs(function() {
    return arguments;
  }()) ? vs : function(y) {
    return tn(y) && F.call(y, "callee") && !Du.call(y, "callee");
  }, ki = Array.isArray;
  function xi(y) {
    return y != null && xs(y.length) && !Si(y);
  }
  function Oc(y) {
    return tn(y) && xi(y);
  }
  var ks = Iu || Pc;
  function Si(y) {
    if (!Tr(y))
      return !1;
    var O = On(y);
    return O == E || O == S || O == l || O == w;
  }
  function xs(y) {
    return typeof y == "number" && y > -1 && y % 1 == 0 && y <= s;
  }
  function Tr(y) {
    var O = typeof y;
    return y != null && (O == "object" || O == "function");
  }
  function tn(y) {
    return y != null && typeof y == "object";
  }
  function Ec(y) {
    if (!tn(y) || On(y) != _)
      return !1;
    var O = Jr(y);
    if (O === null)
      return !0;
    var N = F.call(O, "constructor") && O.constructor;
    return typeof N == "function" && N instanceof N && Ie.call(N) == it;
  }
  var Ss = De ? I(De) : nc;
  function Dc(y) {
    return fc(y, Ts(y));
  }
  function Ts(y) {
    return xi(y) ? Ju(y, !0) : ic(y);
  }
  var Cc = hc(function(y, O, N) {
    ys(y, O, N);
  });
  function Ic(y) {
    return function() {
      return y;
    };
  }
  function Os(y) {
    return y;
  }
  function Pc() {
    return !1;
  }
  e.exports = Cc;
})(An, An.exports);
var hd = An.exports;
function md() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return pd(e) ? e : [e];
}
var pd = Array.isArray, gd = md;
const T = zo, _e = (e) => e.toFixed(7).replace(/(\.[0-9]+?)0+$/, "$1").replace(/\.0$/, ""), zt = (e) => `${_e(e / 16)}rem`, h = (e, t) => `${_e(e / t)}em`;
let Pi = {
  sm: {
    css: [
      {
        fontSize: zt(14),
        lineHeight: _e(24 / 14),
        p: {
          marginTop: h(16, 14),
          marginBottom: h(16, 14)
        },
        '[class~="lead"]': {
          fontSize: h(18, 14),
          lineHeight: _e(28 / 18),
          marginTop: h(16, 18),
          marginBottom: h(16, 18)
        },
        blockquote: {
          marginTop: h(24, 18),
          marginBottom: h(24, 18),
          paddingLeft: h(20, 18)
        },
        h1: {
          fontSize: h(30, 14),
          marginTop: "0",
          marginBottom: h(24, 30),
          lineHeight: _e(36 / 30)
        },
        h2: {
          fontSize: h(20, 14),
          marginTop: h(32, 20),
          marginBottom: h(16, 20),
          lineHeight: _e(28 / 20)
        },
        h3: {
          fontSize: h(18, 14),
          marginTop: h(28, 18),
          marginBottom: h(8, 18),
          lineHeight: _e(28 / 18)
        },
        h4: {
          marginTop: h(20, 14),
          marginBottom: h(8, 14),
          lineHeight: _e(20 / 14)
        },
        img: {
          marginTop: h(24, 14),
          marginBottom: h(24, 14)
        },
        video: {
          marginTop: h(24, 14),
          marginBottom: h(24, 14)
        },
        figure: {
          marginTop: h(24, 14),
          marginBottom: h(24, 14)
        },
        "figure > *": {
          marginTop: "0",
          marginBottom: "0"
        },
        figcaption: {
          fontSize: h(12, 14),
          lineHeight: _e(16 / 12),
          marginTop: h(8, 12)
        },
        code: {
          fontSize: h(12, 14)
        },
        "h2 code": {
          fontSize: h(18, 20)
        },
        "h3 code": {
          fontSize: h(16, 18)
        },
        pre: {
          fontSize: h(12, 14),
          lineHeight: _e(20 / 12),
          marginTop: h(20, 12),
          marginBottom: h(20, 12),
          borderRadius: zt(4),
          paddingTop: h(8, 12),
          paddingRight: h(12, 12),
          paddingBottom: h(8, 12),
          paddingLeft: h(12, 12)
        },
        ol: {
          marginTop: h(16, 14),
          marginBottom: h(16, 14),
          paddingLeft: h(22, 14)
        },
        ul: {
          marginTop: h(16, 14),
          marginBottom: h(16, 14),
          paddingLeft: h(22, 14)
        },
        li: {
          marginTop: h(4, 14),
          marginBottom: h(4, 14)
        },
        "ol > li": {
          paddingLeft: h(6, 14)
        },
        "ul > li": {
          paddingLeft: h(6, 14)
        },
        "> ul > li p": {
          marginTop: h(8, 14),
          marginBottom: h(8, 14)
        },
        "> ul > li > *:first-child": {
          marginTop: h(16, 14)
        },
        "> ul > li > *:last-child": {
          marginBottom: h(16, 14)
        },
        "> ol > li > *:first-child": {
          marginTop: h(16, 14)
        },
        "> ol > li > *:last-child": {
          marginBottom: h(16, 14)
        },
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: h(8, 14),
          marginBottom: h(8, 14)
        },
        hr: {
          marginTop: h(40, 14),
          marginBottom: h(40, 14)
        },
        "hr + *": {
          marginTop: "0"
        },
        "h2 + *": {
          marginTop: "0"
        },
        "h3 + *": {
          marginTop: "0"
        },
        "h4 + *": {
          marginTop: "0"
        },
        table: {
          fontSize: h(12, 14),
          lineHeight: _e(18 / 12)
        },
        "thead th": {
          paddingRight: h(12, 12),
          paddingBottom: h(8, 12),
          paddingLeft: h(12, 12)
        },
        "thead th:first-child": {
          paddingLeft: "0"
        },
        "thead th:last-child": {
          paddingRight: "0"
        },
        "tbody td, tfoot td": {
          paddingTop: h(8, 12),
          paddingRight: h(12, 12),
          paddingBottom: h(8, 12),
          paddingLeft: h(12, 12)
        },
        "tbody td:first-child, tfoot td:first-child": {
          paddingLeft: "0"
        },
        "tbody td:last-child, tfoot td:last-child": {
          paddingRight: "0"
        }
      },
      {
        "> :first-child": {
          marginTop: "0"
        },
        "> :last-child": {
          marginBottom: "0"
        }
      }
    ]
  },
  base: {
    css: [
      {
        fontSize: zt(16),
        lineHeight: _e(28 / 16),
        p: {
          marginTop: h(20, 16),
          marginBottom: h(20, 16)
        },
        '[class~="lead"]': {
          fontSize: h(20, 16),
          lineHeight: _e(32 / 20),
          marginTop: h(24, 20),
          marginBottom: h(24, 20)
        },
        blockquote: {
          marginTop: h(32, 20),
          marginBottom: h(32, 20),
          paddingLeft: h(20, 20)
        },
        h1: {
          fontSize: h(36, 16),
          marginTop: "0",
          marginBottom: h(32, 36),
          lineHeight: _e(40 / 36)
        },
        h2: {
          fontSize: h(24, 16),
          marginTop: h(48, 24),
          marginBottom: h(24, 24),
          lineHeight: _e(32 / 24)
        },
        h3: {
          fontSize: h(20, 16),
          marginTop: h(32, 20),
          marginBottom: h(12, 20),
          lineHeight: _e(32 / 20)
        },
        h4: {
          marginTop: h(24, 16),
          marginBottom: h(8, 16),
          lineHeight: _e(24 / 16)
        },
        img: {
          marginTop: h(32, 16),
          marginBottom: h(32, 16)
        },
        video: {
          marginTop: h(32, 16),
          marginBottom: h(32, 16)
        },
        figure: {
          marginTop: h(32, 16),
          marginBottom: h(32, 16)
        },
        "figure > *": {
          marginTop: "0",
          marginBottom: "0"
        },
        figcaption: {
          fontSize: h(14, 16),
          lineHeight: _e(20 / 14),
          marginTop: h(12, 14)
        },
        code: {
          fontSize: h(14, 16)
        },
        "h2 code": {
          fontSize: h(21, 24)
        },
        "h3 code": {
          fontSize: h(18, 20)
        },
        pre: {
          fontSize: h(14, 16),
          lineHeight: _e(24 / 14),
          marginTop: h(24, 14),
          marginBottom: h(24, 14),
          borderRadius: zt(6),
          paddingTop: h(12, 14),
          paddingRight: h(16, 14),
          paddingBottom: h(12, 14),
          paddingLeft: h(16, 14)
        },
        ol: {
          marginTop: h(20, 16),
          marginBottom: h(20, 16),
          paddingLeft: h(26, 16)
        },
        ul: {
          marginTop: h(20, 16),
          marginBottom: h(20, 16),
          paddingLeft: h(26, 16)
        },
        li: {
          marginTop: h(8, 16),
          marginBottom: h(8, 16)
        },
        "ol > li": {
          paddingLeft: h(6, 16)
        },
        "ul > li": {
          paddingLeft: h(6, 16)
        },
        "> ul > li p": {
          marginTop: h(12, 16),
          marginBottom: h(12, 16)
        },
        "> ul > li > *:first-child": {
          marginTop: h(20, 16)
        },
        "> ul > li > *:last-child": {
          marginBottom: h(20, 16)
        },
        "> ol > li > *:first-child": {
          marginTop: h(20, 16)
        },
        "> ol > li > *:last-child": {
          marginBottom: h(20, 16)
        },
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: h(12, 16),
          marginBottom: h(12, 16)
        },
        hr: {
          marginTop: h(48, 16),
          marginBottom: h(48, 16)
        },
        "hr + *": {
          marginTop: "0"
        },
        "h2 + *": {
          marginTop: "0"
        },
        "h3 + *": {
          marginTop: "0"
        },
        "h4 + *": {
          marginTop: "0"
        },
        table: {
          fontSize: h(14, 16),
          lineHeight: _e(24 / 14)
        },
        "thead th": {
          paddingRight: h(8, 14),
          paddingBottom: h(8, 14),
          paddingLeft: h(8, 14)
        },
        "thead th:first-child": {
          paddingLeft: "0"
        },
        "thead th:last-child": {
          paddingRight: "0"
        },
        "tbody td, tfoot td": {
          paddingTop: h(8, 14),
          paddingRight: h(8, 14),
          paddingBottom: h(8, 14),
          paddingLeft: h(8, 14)
        },
        "tbody td:first-child, tfoot td:first-child": {
          paddingLeft: "0"
        },
        "tbody td:last-child, tfoot td:last-child": {
          paddingRight: "0"
        }
      },
      {
        "> :first-child": {
          marginTop: "0"
        },
        "> :last-child": {
          marginBottom: "0"
        }
      }
    ]
  },
  lg: {
    css: [
      {
        fontSize: zt(18),
        lineHeight: _e(32 / 18),
        p: {
          marginTop: h(24, 18),
          marginBottom: h(24, 18)
        },
        '[class~="lead"]': {
          fontSize: h(22, 18),
          lineHeight: _e(32 / 22),
          marginTop: h(24, 22),
          marginBottom: h(24, 22)
        },
        blockquote: {
          marginTop: h(40, 24),
          marginBottom: h(40, 24),
          paddingLeft: h(24, 24)
        },
        h1: {
          fontSize: h(48, 18),
          marginTop: "0",
          marginBottom: h(40, 48),
          lineHeight: _e(48 / 48)
        },
        h2: {
          fontSize: h(30, 18),
          marginTop: h(56, 30),
          marginBottom: h(32, 30),
          lineHeight: _e(40 / 30)
        },
        h3: {
          fontSize: h(24, 18),
          marginTop: h(40, 24),
          marginBottom: h(16, 24),
          lineHeight: _e(36 / 24)
        },
        h4: {
          marginTop: h(32, 18),
          marginBottom: h(8, 18),
          lineHeight: _e(28 / 18)
        },
        img: {
          marginTop: h(32, 18),
          marginBottom: h(32, 18)
        },
        video: {
          marginTop: h(32, 18),
          marginBottom: h(32, 18)
        },
        figure: {
          marginTop: h(32, 18),
          marginBottom: h(32, 18)
        },
        "figure > *": {
          marginTop: "0",
          marginBottom: "0"
        },
        figcaption: {
          fontSize: h(16, 18),
          lineHeight: _e(24 / 16),
          marginTop: h(16, 16)
        },
        code: {
          fontSize: h(16, 18)
        },
        "h2 code": {
          fontSize: h(26, 30)
        },
        "h3 code": {
          fontSize: h(21, 24)
        },
        pre: {
          fontSize: h(16, 18),
          lineHeight: _e(28 / 16),
          marginTop: h(32, 16),
          marginBottom: h(32, 16),
          borderRadius: zt(6),
          paddingTop: h(16, 16),
          paddingRight: h(24, 16),
          paddingBottom: h(16, 16),
          paddingLeft: h(24, 16)
        },
        ol: {
          marginTop: h(24, 18),
          marginBottom: h(24, 18),
          paddingLeft: h(28, 18)
        },
        ul: {
          marginTop: h(24, 18),
          marginBottom: h(24, 18),
          paddingLeft: h(28, 18)
        },
        li: {
          marginTop: h(12, 18),
          marginBottom: h(12, 18)
        },
        "ol > li": {
          paddingLeft: h(8, 18)
        },
        "ul > li": {
          paddingLeft: h(8, 18)
        },
        "> ul > li p": {
          marginTop: h(16, 18),
          marginBottom: h(16, 18)
        },
        "> ul > li > *:first-child": {
          marginTop: h(24, 18)
        },
        "> ul > li > *:last-child": {
          marginBottom: h(24, 18)
        },
        "> ol > li > *:first-child": {
          marginTop: h(24, 18)
        },
        "> ol > li > *:last-child": {
          marginBottom: h(24, 18)
        },
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: h(16, 18),
          marginBottom: h(16, 18)
        },
        hr: {
          marginTop: h(56, 18),
          marginBottom: h(56, 18)
        },
        "hr + *": {
          marginTop: "0"
        },
        "h2 + *": {
          marginTop: "0"
        },
        "h3 + *": {
          marginTop: "0"
        },
        "h4 + *": {
          marginTop: "0"
        },
        table: {
          fontSize: h(16, 18),
          lineHeight: _e(24 / 16)
        },
        "thead th": {
          paddingRight: h(12, 16),
          paddingBottom: h(12, 16),
          paddingLeft: h(12, 16)
        },
        "thead th:first-child": {
          paddingLeft: "0"
        },
        "thead th:last-child": {
          paddingRight: "0"
        },
        "tbody td, tfoot td": {
          paddingTop: h(12, 16),
          paddingRight: h(12, 16),
          paddingBottom: h(12, 16),
          paddingLeft: h(12, 16)
        },
        "tbody td:first-child, tfoot td:first-child": {
          paddingLeft: "0"
        },
        "tbody td:last-child, tfoot td:last-child": {
          paddingRight: "0"
        }
      },
      {
        "> :first-child": {
          marginTop: "0"
        },
        "> :last-child": {
          marginBottom: "0"
        }
      }
    ]
  },
  xl: {
    css: [
      {
        fontSize: zt(20),
        lineHeight: _e(36 / 20),
        p: {
          marginTop: h(24, 20),
          marginBottom: h(24, 20)
        },
        '[class~="lead"]': {
          fontSize: h(24, 20),
          lineHeight: _e(36 / 24),
          marginTop: h(24, 24),
          marginBottom: h(24, 24)
        },
        blockquote: {
          marginTop: h(48, 30),
          marginBottom: h(48, 30),
          paddingLeft: h(32, 30)
        },
        h1: {
          fontSize: h(56, 20),
          marginTop: "0",
          marginBottom: h(48, 56),
          lineHeight: _e(56 / 56)
        },
        h2: {
          fontSize: h(36, 20),
          marginTop: h(56, 36),
          marginBottom: h(32, 36),
          lineHeight: _e(40 / 36)
        },
        h3: {
          fontSize: h(30, 20),
          marginTop: h(48, 30),
          marginBottom: h(20, 30),
          lineHeight: _e(40 / 30)
        },
        h4: {
          marginTop: h(36, 20),
          marginBottom: h(12, 20),
          lineHeight: _e(32 / 20)
        },
        img: {
          marginTop: h(40, 20),
          marginBottom: h(40, 20)
        },
        video: {
          marginTop: h(40, 20),
          marginBottom: h(40, 20)
        },
        figure: {
          marginTop: h(40, 20),
          marginBottom: h(40, 20)
        },
        "figure > *": {
          marginTop: "0",
          marginBottom: "0"
        },
        figcaption: {
          fontSize: h(18, 20),
          lineHeight: _e(28 / 18),
          marginTop: h(18, 18)
        },
        code: {
          fontSize: h(18, 20)
        },
        "h2 code": {
          fontSize: h(31, 36)
        },
        "h3 code": {
          fontSize: h(27, 30)
        },
        pre: {
          fontSize: h(18, 20),
          lineHeight: _e(32 / 18),
          marginTop: h(36, 18),
          marginBottom: h(36, 18),
          borderRadius: zt(8),
          paddingTop: h(20, 18),
          paddingRight: h(24, 18),
          paddingBottom: h(20, 18),
          paddingLeft: h(24, 18)
        },
        ol: {
          marginTop: h(24, 20),
          marginBottom: h(24, 20),
          paddingLeft: h(32, 20)
        },
        ul: {
          marginTop: h(24, 20),
          marginBottom: h(24, 20),
          paddingLeft: h(32, 20)
        },
        li: {
          marginTop: h(12, 20),
          marginBottom: h(12, 20)
        },
        "ol > li": {
          paddingLeft: h(8, 20)
        },
        "ul > li": {
          paddingLeft: h(8, 20)
        },
        "> ul > li p": {
          marginTop: h(16, 20),
          marginBottom: h(16, 20)
        },
        "> ul > li > *:first-child": {
          marginTop: h(24, 20)
        },
        "> ul > li > *:last-child": {
          marginBottom: h(24, 20)
        },
        "> ol > li > *:first-child": {
          marginTop: h(24, 20)
        },
        "> ol > li > *:last-child": {
          marginBottom: h(24, 20)
        },
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: h(16, 20),
          marginBottom: h(16, 20)
        },
        hr: {
          marginTop: h(56, 20),
          marginBottom: h(56, 20)
        },
        "hr + *": {
          marginTop: "0"
        },
        "h2 + *": {
          marginTop: "0"
        },
        "h3 + *": {
          marginTop: "0"
        },
        "h4 + *": {
          marginTop: "0"
        },
        table: {
          fontSize: h(18, 20),
          lineHeight: _e(28 / 18)
        },
        "thead th": {
          paddingRight: h(12, 18),
          paddingBottom: h(16, 18),
          paddingLeft: h(12, 18)
        },
        "thead th:first-child": {
          paddingLeft: "0"
        },
        "thead th:last-child": {
          paddingRight: "0"
        },
        "tbody td, tfoot td": {
          paddingTop: h(16, 18),
          paddingRight: h(12, 18),
          paddingBottom: h(16, 18),
          paddingLeft: h(12, 18)
        },
        "tbody td:first-child, tfoot td:first-child": {
          paddingLeft: "0"
        },
        "tbody td:last-child, tfoot td:last-child": {
          paddingRight: "0"
        }
      },
      {
        "> :first-child": {
          marginTop: "0"
        },
        "> :last-child": {
          marginBottom: "0"
        }
      }
    ]
  },
  "2xl": {
    css: [
      {
        fontSize: zt(24),
        lineHeight: _e(40 / 24),
        p: {
          marginTop: h(32, 24),
          marginBottom: h(32, 24)
        },
        '[class~="lead"]': {
          fontSize: h(30, 24),
          lineHeight: _e(44 / 30),
          marginTop: h(32, 30),
          marginBottom: h(32, 30)
        },
        blockquote: {
          marginTop: h(64, 36),
          marginBottom: h(64, 36),
          paddingLeft: h(40, 36)
        },
        h1: {
          fontSize: h(64, 24),
          marginTop: "0",
          marginBottom: h(56, 64),
          lineHeight: _e(64 / 64)
        },
        h2: {
          fontSize: h(48, 24),
          marginTop: h(72, 48),
          marginBottom: h(40, 48),
          lineHeight: _e(52 / 48)
        },
        h3: {
          fontSize: h(36, 24),
          marginTop: h(56, 36),
          marginBottom: h(24, 36),
          lineHeight: _e(44 / 36)
        },
        h4: {
          marginTop: h(40, 24),
          marginBottom: h(16, 24),
          lineHeight: _e(36 / 24)
        },
        img: {
          marginTop: h(48, 24),
          marginBottom: h(48, 24)
        },
        video: {
          marginTop: h(48, 24),
          marginBottom: h(48, 24)
        },
        figure: {
          marginTop: h(48, 24),
          marginBottom: h(48, 24)
        },
        "figure > *": {
          marginTop: "0",
          marginBottom: "0"
        },
        figcaption: {
          fontSize: h(20, 24),
          lineHeight: _e(32 / 20),
          marginTop: h(20, 20)
        },
        code: {
          fontSize: h(20, 24)
        },
        "h2 code": {
          fontSize: h(42, 48)
        },
        "h3 code": {
          fontSize: h(32, 36)
        },
        pre: {
          fontSize: h(20, 24),
          lineHeight: _e(36 / 20),
          marginTop: h(40, 20),
          marginBottom: h(40, 20),
          borderRadius: zt(8),
          paddingTop: h(24, 20),
          paddingRight: h(32, 20),
          paddingBottom: h(24, 20),
          paddingLeft: h(32, 20)
        },
        ol: {
          marginTop: h(32, 24),
          marginBottom: h(32, 24),
          paddingLeft: h(38, 24)
        },
        ul: {
          marginTop: h(32, 24),
          marginBottom: h(32, 24),
          paddingLeft: h(38, 24)
        },
        li: {
          marginTop: h(12, 24),
          marginBottom: h(12, 24)
        },
        "ol > li": {
          paddingLeft: h(10, 24)
        },
        "ul > li": {
          paddingLeft: h(10, 24)
        },
        "> ul > li p": {
          marginTop: h(20, 24),
          marginBottom: h(20, 24)
        },
        "> ul > li > *:first-child": {
          marginTop: h(32, 24)
        },
        "> ul > li > *:last-child": {
          marginBottom: h(32, 24)
        },
        "> ol > li > *:first-child": {
          marginTop: h(32, 24)
        },
        "> ol > li > *:last-child": {
          marginBottom: h(32, 24)
        },
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: h(16, 24),
          marginBottom: h(16, 24)
        },
        hr: {
          marginTop: h(72, 24),
          marginBottom: h(72, 24)
        },
        "hr + *": {
          marginTop: "0"
        },
        "h2 + *": {
          marginTop: "0"
        },
        "h3 + *": {
          marginTop: "0"
        },
        "h4 + *": {
          marginTop: "0"
        },
        table: {
          fontSize: h(20, 24),
          lineHeight: _e(28 / 20)
        },
        "thead th": {
          paddingRight: h(12, 20),
          paddingBottom: h(16, 20),
          paddingLeft: h(12, 20)
        },
        "thead th:first-child": {
          paddingLeft: "0"
        },
        "thead th:last-child": {
          paddingRight: "0"
        },
        "tbody td, tfoot td": {
          paddingTop: h(16, 20),
          paddingRight: h(12, 20),
          paddingBottom: h(16, 20),
          paddingLeft: h(12, 20)
        },
        "tbody td:first-child, tfoot td:first-child": {
          paddingLeft: "0"
        },
        "tbody td:last-child, tfoot td:last-child": {
          paddingRight: "0"
        }
      },
      {
        "> :first-child": {
          marginTop: "0"
        },
        "> :last-child": {
          marginBottom: "0"
        }
      }
    ]
  },
  // Invert (for dark mode)
  invert: {
    css: {
      "--tw-prose-body": "var(--tw-prose-invert-body)",
      "--tw-prose-headings": "var(--tw-prose-invert-headings)",
      "--tw-prose-lead": "var(--tw-prose-invert-lead)",
      "--tw-prose-links": "var(--tw-prose-invert-links)",
      "--tw-prose-bold": "var(--tw-prose-invert-bold)",
      "--tw-prose-counters": "var(--tw-prose-invert-counters)",
      "--tw-prose-bullets": "var(--tw-prose-invert-bullets)",
      "--tw-prose-hr": "var(--tw-prose-invert-hr)",
      "--tw-prose-quotes": "var(--tw-prose-invert-quotes)",
      "--tw-prose-quote-borders": "var(--tw-prose-invert-quote-borders)",
      "--tw-prose-captions": "var(--tw-prose-invert-captions)",
      "--tw-prose-code": "var(--tw-prose-invert-code)",
      "--tw-prose-pre-code": "var(--tw-prose-invert-pre-code)",
      "--tw-prose-pre-bg": "var(--tw-prose-invert-pre-bg)",
      "--tw-prose-th-borders": "var(--tw-prose-invert-th-borders)",
      "--tw-prose-td-borders": "var(--tw-prose-invert-td-borders)"
    }
  },
  // Gray color themes
  slate: {
    css: {
      "--tw-prose-body": T.slate[700],
      "--tw-prose-headings": T.slate[900],
      "--tw-prose-lead": T.slate[600],
      "--tw-prose-links": T.slate[900],
      "--tw-prose-bold": T.slate[900],
      "--tw-prose-counters": T.slate[500],
      "--tw-prose-bullets": T.slate[300],
      "--tw-prose-hr": T.slate[200],
      "--tw-prose-quotes": T.slate[900],
      "--tw-prose-quote-borders": T.slate[200],
      "--tw-prose-captions": T.slate[500],
      "--tw-prose-code": T.slate[900],
      "--tw-prose-pre-code": T.slate[200],
      "--tw-prose-pre-bg": T.slate[800],
      "--tw-prose-th-borders": T.slate[300],
      "--tw-prose-td-borders": T.slate[200],
      "--tw-prose-invert-body": T.slate[300],
      "--tw-prose-invert-headings": T.white,
      "--tw-prose-invert-lead": T.slate[400],
      "--tw-prose-invert-links": T.white,
      "--tw-prose-invert-bold": T.white,
      "--tw-prose-invert-counters": T.slate[400],
      "--tw-prose-invert-bullets": T.slate[600],
      "--tw-prose-invert-hr": T.slate[700],
      "--tw-prose-invert-quotes": T.slate[100],
      "--tw-prose-invert-quote-borders": T.slate[700],
      "--tw-prose-invert-captions": T.slate[400],
      "--tw-prose-invert-code": T.white,
      "--tw-prose-invert-pre-code": T.slate[300],
      "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
      "--tw-prose-invert-th-borders": T.slate[600],
      "--tw-prose-invert-td-borders": T.slate[700]
    }
  },
  gray: {
    css: {
      "--tw-prose-body": T.gray[700],
      "--tw-prose-headings": T.gray[900],
      "--tw-prose-lead": T.gray[600],
      "--tw-prose-links": T.gray[900],
      "--tw-prose-bold": T.gray[900],
      "--tw-prose-counters": T.gray[500],
      "--tw-prose-bullets": T.gray[300],
      "--tw-prose-hr": T.gray[200],
      "--tw-prose-quotes": T.gray[900],
      "--tw-prose-quote-borders": T.gray[200],
      "--tw-prose-captions": T.gray[500],
      "--tw-prose-code": T.gray[900],
      "--tw-prose-pre-code": T.gray[200],
      "--tw-prose-pre-bg": T.gray[800],
      "--tw-prose-th-borders": T.gray[300],
      "--tw-prose-td-borders": T.gray[200],
      "--tw-prose-invert-body": T.gray[300],
      "--tw-prose-invert-headings": T.white,
      "--tw-prose-invert-lead": T.gray[400],
      "--tw-prose-invert-links": T.white,
      "--tw-prose-invert-bold": T.white,
      "--tw-prose-invert-counters": T.gray[400],
      "--tw-prose-invert-bullets": T.gray[600],
      "--tw-prose-invert-hr": T.gray[700],
      "--tw-prose-invert-quotes": T.gray[100],
      "--tw-prose-invert-quote-borders": T.gray[700],
      "--tw-prose-invert-captions": T.gray[400],
      "--tw-prose-invert-code": T.white,
      "--tw-prose-invert-pre-code": T.gray[300],
      "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
      "--tw-prose-invert-th-borders": T.gray[600],
      "--tw-prose-invert-td-borders": T.gray[700]
    }
  },
  zinc: {
    css: {
      "--tw-prose-body": T.zinc[700],
      "--tw-prose-headings": T.zinc[900],
      "--tw-prose-lead": T.zinc[600],
      "--tw-prose-links": T.zinc[900],
      "--tw-prose-bold": T.zinc[900],
      "--tw-prose-counters": T.zinc[500],
      "--tw-prose-bullets": T.zinc[300],
      "--tw-prose-hr": T.zinc[200],
      "--tw-prose-quotes": T.zinc[900],
      "--tw-prose-quote-borders": T.zinc[200],
      "--tw-prose-captions": T.zinc[500],
      "--tw-prose-code": T.zinc[900],
      "--tw-prose-pre-code": T.zinc[200],
      "--tw-prose-pre-bg": T.zinc[800],
      "--tw-prose-th-borders": T.zinc[300],
      "--tw-prose-td-borders": T.zinc[200],
      "--tw-prose-invert-body": T.zinc[300],
      "--tw-prose-invert-headings": T.white,
      "--tw-prose-invert-lead": T.zinc[400],
      "--tw-prose-invert-links": T.white,
      "--tw-prose-invert-bold": T.white,
      "--tw-prose-invert-counters": T.zinc[400],
      "--tw-prose-invert-bullets": T.zinc[600],
      "--tw-prose-invert-hr": T.zinc[700],
      "--tw-prose-invert-quotes": T.zinc[100],
      "--tw-prose-invert-quote-borders": T.zinc[700],
      "--tw-prose-invert-captions": T.zinc[400],
      "--tw-prose-invert-code": T.white,
      "--tw-prose-invert-pre-code": T.zinc[300],
      "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
      "--tw-prose-invert-th-borders": T.zinc[600],
      "--tw-prose-invert-td-borders": T.zinc[700]
    }
  },
  neutral: {
    css: {
      "--tw-prose-body": T.neutral[700],
      "--tw-prose-headings": T.neutral[900],
      "--tw-prose-lead": T.neutral[600],
      "--tw-prose-links": T.neutral[900],
      "--tw-prose-bold": T.neutral[900],
      "--tw-prose-counters": T.neutral[500],
      "--tw-prose-bullets": T.neutral[300],
      "--tw-prose-hr": T.neutral[200],
      "--tw-prose-quotes": T.neutral[900],
      "--tw-prose-quote-borders": T.neutral[200],
      "--tw-prose-captions": T.neutral[500],
      "--tw-prose-code": T.neutral[900],
      "--tw-prose-pre-code": T.neutral[200],
      "--tw-prose-pre-bg": T.neutral[800],
      "--tw-prose-th-borders": T.neutral[300],
      "--tw-prose-td-borders": T.neutral[200],
      "--tw-prose-invert-body": T.neutral[300],
      "--tw-prose-invert-headings": T.white,
      "--tw-prose-invert-lead": T.neutral[400],
      "--tw-prose-invert-links": T.white,
      "--tw-prose-invert-bold": T.white,
      "--tw-prose-invert-counters": T.neutral[400],
      "--tw-prose-invert-bullets": T.neutral[600],
      "--tw-prose-invert-hr": T.neutral[700],
      "--tw-prose-invert-quotes": T.neutral[100],
      "--tw-prose-invert-quote-borders": T.neutral[700],
      "--tw-prose-invert-captions": T.neutral[400],
      "--tw-prose-invert-code": T.white,
      "--tw-prose-invert-pre-code": T.neutral[300],
      "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
      "--tw-prose-invert-th-borders": T.neutral[600],
      "--tw-prose-invert-td-borders": T.neutral[700]
    }
  },
  stone: {
    css: {
      "--tw-prose-body": T.stone[700],
      "--tw-prose-headings": T.stone[900],
      "--tw-prose-lead": T.stone[600],
      "--tw-prose-links": T.stone[900],
      "--tw-prose-bold": T.stone[900],
      "--tw-prose-counters": T.stone[500],
      "--tw-prose-bullets": T.stone[300],
      "--tw-prose-hr": T.stone[200],
      "--tw-prose-quotes": T.stone[900],
      "--tw-prose-quote-borders": T.stone[200],
      "--tw-prose-captions": T.stone[500],
      "--tw-prose-code": T.stone[900],
      "--tw-prose-pre-code": T.stone[200],
      "--tw-prose-pre-bg": T.stone[800],
      "--tw-prose-th-borders": T.stone[300],
      "--tw-prose-td-borders": T.stone[200],
      "--tw-prose-invert-body": T.stone[300],
      "--tw-prose-invert-headings": T.white,
      "--tw-prose-invert-lead": T.stone[400],
      "--tw-prose-invert-links": T.white,
      "--tw-prose-invert-bold": T.white,
      "--tw-prose-invert-counters": T.stone[400],
      "--tw-prose-invert-bullets": T.stone[600],
      "--tw-prose-invert-hr": T.stone[700],
      "--tw-prose-invert-quotes": T.stone[100],
      "--tw-prose-invert-quote-borders": T.stone[700],
      "--tw-prose-invert-captions": T.stone[400],
      "--tw-prose-invert-code": T.white,
      "--tw-prose-invert-pre-code": T.stone[300],
      "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
      "--tw-prose-invert-th-borders": T.stone[600],
      "--tw-prose-invert-td-borders": T.stone[700]
    }
  },
  // Link-only themes (for backward compatibility)
  red: {
    css: {
      "--tw-prose-links": T.red[600],
      "--tw-prose-invert-links": T.red[500]
    }
  },
  orange: {
    css: {
      "--tw-prose-links": T.orange[600],
      "--tw-prose-invert-links": T.orange[500]
    }
  },
  amber: {
    css: {
      "--tw-prose-links": T.amber[600],
      "--tw-prose-invert-links": T.amber[500]
    }
  },
  yellow: {
    css: {
      "--tw-prose-links": T.yellow[600],
      "--tw-prose-invert-links": T.yellow[500]
    }
  },
  lime: {
    css: {
      "--tw-prose-links": T.lime[600],
      "--tw-prose-invert-links": T.lime[500]
    }
  },
  green: {
    css: {
      "--tw-prose-links": T.green[600],
      "--tw-prose-invert-links": T.green[500]
    }
  },
  emerald: {
    css: {
      "--tw-prose-links": T.emerald[600],
      "--tw-prose-invert-links": T.emerald[500]
    }
  },
  teal: {
    css: {
      "--tw-prose-links": T.teal[600],
      "--tw-prose-invert-links": T.teal[500]
    }
  },
  cyan: {
    css: {
      "--tw-prose-links": T.cyan[600],
      "--tw-prose-invert-links": T.cyan[500]
    }
  },
  sky: {
    css: {
      "--tw-prose-links": T.sky[600],
      "--tw-prose-invert-links": T.sky[500]
    }
  },
  blue: {
    css: {
      "--tw-prose-links": T.blue[600],
      "--tw-prose-invert-links": T.blue[500]
    }
  },
  indigo: {
    css: {
      "--tw-prose-links": T.indigo[600],
      "--tw-prose-invert-links": T.indigo[500]
    }
  },
  violet: {
    css: {
      "--tw-prose-links": T.violet[600],
      "--tw-prose-invert-links": T.violet[500]
    }
  },
  purple: {
    css: {
      "--tw-prose-links": T.purple[600],
      "--tw-prose-invert-links": T.purple[500]
    }
  },
  fuchsia: {
    css: {
      "--tw-prose-links": T.fuchsia[600],
      "--tw-prose-invert-links": T.fuchsia[500]
    }
  },
  pink: {
    css: {
      "--tw-prose-links": T.pink[600],
      "--tw-prose-invert-links": T.pink[500]
    }
  },
  rose: {
    css: {
      "--tw-prose-links": T.rose[600],
      "--tw-prose-invert-links": T.rose[500]
    }
  }
};
var _d = {
  DEFAULT: {
    css: [
      {
        color: "var(--tw-prose-body)",
        maxWidth: "65ch",
        // TODO: Figure out how to not need this, it's a merging issue
        p: {},
        '[class~="lead"]': {
          color: "var(--tw-prose-lead)"
        },
        a: {
          color: "var(--tw-prose-links)",
          textDecoration: "underline",
          fontWeight: "500"
        },
        strong: {
          color: "var(--tw-prose-bold)",
          fontWeight: "600"
        },
        "a strong": {
          color: "inherit"
        },
        "blockquote strong": {
          color: "inherit"
        },
        "thead th strong": {
          color: "inherit"
        },
        ol: {
          listStyleType: "decimal"
        },
        'ol[type="A"]': {
          listStyleType: "upper-alpha"
        },
        'ol[type="a"]': {
          listStyleType: "lower-alpha"
        },
        'ol[type="A" s]': {
          listStyleType: "upper-alpha"
        },
        'ol[type="a" s]': {
          listStyleType: "lower-alpha"
        },
        'ol[type="I"]': {
          listStyleType: "upper-roman"
        },
        'ol[type="i"]': {
          listStyleType: "lower-roman"
        },
        'ol[type="I" s]': {
          listStyleType: "upper-roman"
        },
        'ol[type="i" s]': {
          listStyleType: "lower-roman"
        },
        'ol[type="1"]': {
          listStyleType: "decimal"
        },
        ul: {
          listStyleType: "disc"
        },
        "ol > li::marker": {
          fontWeight: "400",
          color: "var(--tw-prose-counters)"
        },
        "ul > li::marker": {
          color: "var(--tw-prose-bullets)"
        },
        hr: {
          borderColor: "var(--tw-prose-hr)",
          borderTopWidth: 1
        },
        blockquote: {
          fontWeight: "500",
          fontStyle: "italic",
          color: "var(--tw-prose-quotes)",
          borderLeftWidth: "0.25rem",
          borderLeftColor: "var(--tw-prose-quote-borders)",
          quotes: '"\\201C""\\201D""\\2018""\\2019"'
        },
        "blockquote p:first-of-type::before": {
          content: "open-quote"
        },
        "blockquote p:last-of-type::after": {
          content: "close-quote"
        },
        h1: {
          color: "var(--tw-prose-headings)",
          fontWeight: "800"
        },
        "h1 strong": {
          fontWeight: "900",
          color: "inherit"
        },
        h2: {
          color: "var(--tw-prose-headings)",
          fontWeight: "700"
        },
        "h2 strong": {
          fontWeight: "800",
          color: "inherit"
        },
        h3: {
          color: "var(--tw-prose-headings)",
          fontWeight: "600"
        },
        "h3 strong": {
          fontWeight: "700",
          color: "inherit"
        },
        h4: {
          color: "var(--tw-prose-headings)",
          fontWeight: "600"
        },
        "h4 strong": {
          fontWeight: "700",
          color: "inherit"
        },
        // TODO: Figure out how to not need these, it's a merging issue
        img: {},
        "figure > *": {},
        figcaption: {
          color: "var(--tw-prose-captions)"
        },
        code: {
          color: "var(--tw-prose-code)",
          fontWeight: "600"
        },
        "code::before": {
          content: '"`"'
        },
        "code::after": {
          content: '"`"'
        },
        "a code": {
          color: "inherit"
        },
        "h1 code": {
          color: "inherit"
        },
        "h2 code": {
          color: "inherit"
        },
        "h3 code": {
          color: "inherit"
        },
        "h4 code": {
          color: "inherit"
        },
        "blockquote code": {
          color: "inherit"
        },
        "thead th code": {
          color: "inherit"
        },
        pre: {
          color: "var(--tw-prose-pre-code)",
          backgroundColor: "var(--tw-prose-pre-bg)",
          overflowX: "auto",
          fontWeight: "400"
        },
        "pre code": {
          backgroundColor: "transparent",
          borderWidth: "0",
          borderRadius: "0",
          padding: "0",
          fontWeight: "inherit",
          color: "inherit",
          fontSize: "inherit",
          fontFamily: "inherit",
          lineHeight: "inherit"
        },
        "pre code::before": {
          content: "none"
        },
        "pre code::after": {
          content: "none"
        },
        table: {
          width: "100%",
          tableLayout: "auto",
          textAlign: "left",
          marginTop: h(32, 16),
          marginBottom: h(32, 16)
        },
        thead: {
          borderBottomWidth: "1px",
          borderBottomColor: "var(--tw-prose-th-borders)"
        },
        "thead th": {
          color: "var(--tw-prose-headings)",
          fontWeight: "600",
          verticalAlign: "bottom"
        },
        "tbody tr": {
          borderBottomWidth: "1px",
          borderBottomColor: "var(--tw-prose-td-borders)"
        },
        "tbody tr:last-child": {
          borderBottomWidth: "0"
        },
        "tbody td": {
          verticalAlign: "baseline"
        },
        tfoot: {
          borderTopWidth: "1px",
          borderTopColor: "var(--tw-prose-th-borders)"
        },
        "tfoot td": {
          verticalAlign: "top"
        }
      },
      Pi.gray.css,
      ...Pi.base.css
    ]
  },
  ...Pi
}, vd = "[object Object]";
function yd(e) {
  var t = !1;
  if (e != null && typeof e.toString != "function")
    try {
      t = !!(e + "");
    } catch {
    }
  return t;
}
function bd(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var wd = Function.prototype, Vo = Object.prototype, Ho = wd.toString, kd = Vo.hasOwnProperty, xd = Ho.call(Object), Sd = Vo.toString, Td = bd(Object.getPrototypeOf, Object);
function Od(e) {
  return !!e && typeof e == "object";
}
function Ed(e) {
  if (!Od(e) || Sd.call(e) != vd || yd(e))
    return !1;
  var t = Td(e);
  if (t === null)
    return !0;
  var r = kd.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Ho.call(r) == xd;
}
var Dd = Ed, Yi = { exports: {} }, Bi = { exports: {} }, Wi = { exports: {} }, Ui = { exports: {} }, zi = { exports: {} }, Vi = { exports: {} }, St = {}, Hi = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = i;
  function r(a) {
    for (var s = a.toLowerCase(), u = "", o = !1, l = 0; l < 6 && s[l] !== void 0; l++) {
      var f = s.charCodeAt(l), m = f >= 97 && f <= 102 || f >= 48 && f <= 57;
      if (o = f === 32, !m)
        break;
      u += s[l];
    }
    if (u.length !== 0) {
      var p = parseInt(u, 16), E = p >= 55296 && p <= 57343;
      return E || p === 0 || p > 1114111 ? ["�", u.length + (o ? 1 : 0)] : [String.fromCodePoint(p), u.length + (o ? 1 : 0)];
    }
  }
  var n = /\\/;
  function i(a) {
    var s = n.test(a);
    if (!s)
      return a;
    for (var u = "", o = 0; o < a.length; o++) {
      if (a[o] === "\\") {
        var l = r(a.slice(o + 1, o + 7));
        if (l !== void 0) {
          u += l[0], o += l[1];
          continue;
        }
        if (a[o + 1] === "\\") {
          u += "\\", o++;
          continue;
        }
        a.length === o + 1 && (u += a[o]);
        continue;
      }
      u += a[o];
    }
    return u;
  }
  e.exports = t.default;
})(Hi, Hi.exports);
var jo = Hi.exports, ji = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = r;
  function r(n) {
    for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
      a[s - 1] = arguments[s];
    for (; a.length > 0; ) {
      var u = a.shift();
      if (!n[u])
        return;
      n = n[u];
    }
    return n;
  }
  e.exports = t.default;
})(ji, ji.exports);
var Cd = ji.exports, qi = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = r;
  function r(n) {
    for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
      a[s - 1] = arguments[s];
    for (; a.length > 0; ) {
      var u = a.shift();
      n[u] || (n[u] = {}), n = n[u];
    }
  }
  e.exports = t.default;
})(qi, qi.exports);
var Id = qi.exports, Gi = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = r;
  function r(n) {
    for (var i = "", a = n.indexOf("/*"), s = 0; a >= 0; ) {
      i = i + n.slice(s, a);
      var u = n.indexOf("*/", a + 2);
      if (u < 0)
        return i;
      s = u + 2, a = n.indexOf("/*", s);
    }
    return i = i + n.slice(s), i;
  }
  e.exports = t.default;
})(Gi, Gi.exports);
var Pd = Gi.exports;
St.__esModule = !0;
St.stripComments = St.ensureObject = St.getProp = St.unesc = void 0;
var Ld = $n(jo);
St.unesc = Ld.default;
var Md = $n(Cd);
St.getProp = Md.default;
var Nd = $n(Id);
St.ensureObject = Nd.default;
var Ad = $n(Pd);
St.stripComments = Ad.default;
function $n(e) {
  return e && e.__esModule ? e : { default: e };
}
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = St;
  function n(u, o) {
    for (var l = 0; l < o.length; l++) {
      var f = o[l];
      f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(u, f.key, f);
    }
  }
  function i(u, o, l) {
    return o && n(u.prototype, o), l && n(u, l), u;
  }
  var a = function u(o, l) {
    if (typeof o != "object" || o === null)
      return o;
    var f = new o.constructor();
    for (var m in o)
      if (o.hasOwnProperty(m)) {
        var p = o[m], E = typeof p;
        m === "parent" && E === "object" ? l && (f[m] = l) : p instanceof Array ? f[m] = p.map(function(S) {
          return u(S, f);
        }) : f[m] = u(p, f);
      }
    return f;
  }, s = /* @__PURE__ */ function() {
    function u(l) {
      l === void 0 && (l = {}), Object.assign(this, l), this.spaces = this.spaces || {}, this.spaces.before = this.spaces.before || "", this.spaces.after = this.spaces.after || "";
    }
    var o = u.prototype;
    return o.remove = function() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }, o.replaceWith = function() {
      if (this.parent) {
        for (var f in arguments)
          this.parent.insertBefore(this, arguments[f]);
        this.remove();
      }
      return this;
    }, o.next = function() {
      return this.parent.at(this.parent.index(this) + 1);
    }, o.prev = function() {
      return this.parent.at(this.parent.index(this) - 1);
    }, o.clone = function(f) {
      f === void 0 && (f = {});
      var m = a(this);
      for (var p in f)
        m[p] = f[p];
      return m;
    }, o.appendToPropertyAndEscape = function(f, m, p) {
      this.raws || (this.raws = {});
      var E = this[f], S = this.raws[f];
      this[f] = E + m, S || p !== m ? this.raws[f] = (S || E) + p : delete this.raws[f];
    }, o.setPropertyAndEscape = function(f, m, p) {
      this.raws || (this.raws = {}), this[f] = m, this.raws[f] = p;
    }, o.setPropertyWithoutEscape = function(f, m) {
      this[f] = m, this.raws && delete this.raws[f];
    }, o.isAtPosition = function(f, m) {
      if (this.source && this.source.start && this.source.end)
        return !(this.source.start.line > f || this.source.end.line < f || this.source.start.line === f && this.source.start.column > m || this.source.end.line === f && this.source.end.column < m);
    }, o.stringifyProperty = function(f) {
      return this.raws && this.raws[f] || this[f];
    }, o.valueToString = function() {
      return String(this.stringifyProperty("value"));
    }, o.toString = function() {
      return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join("");
    }, i(u, [{
      key: "rawSpaceBefore",
      get: function() {
        var f = this.raws && this.raws.spaces && this.raws.spaces.before;
        return f === void 0 && (f = this.spaces && this.spaces.before), f || "";
      },
      set: function(f) {
        (0, r.ensureObject)(this, "raws", "spaces"), this.raws.spaces.before = f;
      }
    }, {
      key: "rawSpaceAfter",
      get: function() {
        var f = this.raws && this.raws.spaces && this.raws.spaces.after;
        return f === void 0 && (f = this.spaces.after), f || "";
      },
      set: function(f) {
        (0, r.ensureObject)(this, "raws", "spaces"), this.raws.spaces.after = f;
      }
    }]), u;
  }();
  t.default = s, e.exports = t.default;
})(Vi, Vi.exports);
var yr = Vi.exports, ke = {};
ke.__esModule = !0;
ke.UNIVERSAL = ke.ATTRIBUTE = ke.CLASS = ke.COMBINATOR = ke.COMMENT = ke.ID = ke.NESTING = ke.PSEUDO = ke.ROOT = ke.SELECTOR = ke.STRING = ke.TAG = void 0;
var Rd = "tag";
ke.TAG = Rd;
var Fd = "string";
ke.STRING = Fd;
var Yd = "selector";
ke.SELECTOR = Yd;
var Bd = "root";
ke.ROOT = Bd;
var Wd = "pseudo";
ke.PSEUDO = Wd;
var Ud = "nesting";
ke.NESTING = Ud;
var zd = "id";
ke.ID = zd;
var Vd = "comment";
ke.COMMENT = Vd;
var Hd = "combinator";
ke.COMBINATOR = Hd;
var jd = "class";
ke.CLASS = jd;
var qd = "attribute";
ke.ATTRIBUTE = qd;
var Gd = "universal";
ke.UNIVERSAL = Gd;
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = s(yr), n = a(ke);
  function i() {
    if (typeof WeakMap != "function")
      return null;
    var d = /* @__PURE__ */ new WeakMap();
    return i = function() {
      return d;
    }, d;
  }
  function a(d) {
    if (d && d.__esModule)
      return d;
    if (d === null || typeof d != "object" && typeof d != "function")
      return { default: d };
    var c = i();
    if (c && c.has(d))
      return c.get(d);
    var g = {}, _ = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var w in d)
      if (Object.prototype.hasOwnProperty.call(d, w)) {
        var x = _ ? Object.getOwnPropertyDescriptor(d, w) : null;
        x && (x.get || x.set) ? Object.defineProperty(g, w, x) : g[w] = d[w];
      }
    return g.default = d, c && c.set(d, g), g;
  }
  function s(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function u(d, c) {
    var g;
    if (typeof Symbol > "u" || d[Symbol.iterator] == null) {
      if (Array.isArray(d) || (g = o(d)) || c && d && typeof d.length == "number") {
        g && (d = g);
        var _ = 0;
        return function() {
          return _ >= d.length ? { done: !0 } : { done: !1, value: d[_++] };
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    return g = d[Symbol.iterator](), g.next.bind(g);
  }
  function o(d, c) {
    if (d) {
      if (typeof d == "string")
        return l(d, c);
      var g = Object.prototype.toString.call(d).slice(8, -1);
      if (g === "Object" && d.constructor && (g = d.constructor.name), g === "Map" || g === "Set")
        return Array.from(d);
      if (g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))
        return l(d, c);
    }
  }
  function l(d, c) {
    (c == null || c > d.length) && (c = d.length);
    for (var g = 0, _ = new Array(c); g < c; g++)
      _[g] = d[g];
    return _;
  }
  function f(d, c) {
    for (var g = 0; g < c.length; g++) {
      var _ = c[g];
      _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(d, _.key, _);
    }
  }
  function m(d, c, g) {
    return c && f(d.prototype, c), g && f(d, g), d;
  }
  function p(d, c) {
    d.prototype = Object.create(c.prototype), d.prototype.constructor = d, E(d, c);
  }
  function E(d, c) {
    return E = Object.setPrototypeOf || function(_, w) {
      return _.__proto__ = w, _;
    }, E(d, c);
  }
  var S = /* @__PURE__ */ function(d) {
    p(c, d);
    function c(_) {
      var w;
      return w = d.call(this, _) || this, w.nodes || (w.nodes = []), w;
    }
    var g = c.prototype;
    return g.append = function(w) {
      return w.parent = this, this.nodes.push(w), this;
    }, g.prepend = function(w) {
      return w.parent = this, this.nodes.unshift(w), this;
    }, g.at = function(w) {
      return this.nodes[w];
    }, g.index = function(w) {
      return typeof w == "number" ? w : this.nodes.indexOf(w);
    }, g.removeChild = function(w) {
      w = this.index(w), this.at(w).parent = void 0, this.nodes.splice(w, 1);
      var x;
      for (var b in this.indexes)
        x = this.indexes[b], x >= w && (this.indexes[b] = x - 1);
      return this;
    }, g.removeAll = function() {
      for (var w = u(this.nodes), x; !(x = w()).done; ) {
        var b = x.value;
        b.parent = void 0;
      }
      return this.nodes = [], this;
    }, g.empty = function() {
      return this.removeAll();
    }, g.insertAfter = function(w, x) {
      x.parent = this;
      var b = this.index(w);
      this.nodes.splice(b + 1, 0, x), x.parent = this;
      var C;
      for (var A in this.indexes)
        C = this.indexes[A], b <= C && (this.indexes[A] = C + 1);
      return this;
    }, g.insertBefore = function(w, x) {
      x.parent = this;
      var b = this.index(w);
      this.nodes.splice(b, 0, x), x.parent = this;
      var C;
      for (var A in this.indexes)
        C = this.indexes[A], C <= b && (this.indexes[A] = C + 1);
      return this;
    }, g._findChildAtPosition = function(w, x) {
      var b = void 0;
      return this.each(function(C) {
        if (C.atPosition) {
          var A = C.atPosition(w, x);
          if (A)
            return b = A, !1;
        } else if (C.isAtPosition(w, x))
          return b = C, !1;
      }), b;
    }, g.atPosition = function(w, x) {
      if (this.isAtPosition(w, x))
        return this._findChildAtPosition(w, x) || this;
    }, g._inferEndPosition = function() {
      this.last && this.last.source && this.last.source.end && (this.source = this.source || {}, this.source.end = this.source.end || {}, Object.assign(this.source.end, this.last.source.end));
    }, g.each = function(w) {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
      var x = this.lastEach;
      if (this.indexes[x] = 0, !!this.length) {
        for (var b, C; this.indexes[x] < this.length && (b = this.indexes[x], C = w(this.at(b), b), C !== !1); )
          this.indexes[x] += 1;
        if (delete this.indexes[x], C === !1)
          return !1;
      }
    }, g.walk = function(w) {
      return this.each(function(x, b) {
        var C = w(x, b);
        if (C !== !1 && x.length && (C = x.walk(w)), C === !1)
          return !1;
      });
    }, g.walkAttributes = function(w) {
      var x = this;
      return this.walk(function(b) {
        if (b.type === n.ATTRIBUTE)
          return w.call(x, b);
      });
    }, g.walkClasses = function(w) {
      var x = this;
      return this.walk(function(b) {
        if (b.type === n.CLASS)
          return w.call(x, b);
      });
    }, g.walkCombinators = function(w) {
      var x = this;
      return this.walk(function(b) {
        if (b.type === n.COMBINATOR)
          return w.call(x, b);
      });
    }, g.walkComments = function(w) {
      var x = this;
      return this.walk(function(b) {
        if (b.type === n.COMMENT)
          return w.call(x, b);
      });
    }, g.walkIds = function(w) {
      var x = this;
      return this.walk(function(b) {
        if (b.type === n.ID)
          return w.call(x, b);
      });
    }, g.walkNesting = function(w) {
      var x = this;
      return this.walk(function(b) {
        if (b.type === n.NESTING)
          return w.call(x, b);
      });
    }, g.walkPseudos = function(w) {
      var x = this;
      return this.walk(function(b) {
        if (b.type === n.PSEUDO)
          return w.call(x, b);
      });
    }, g.walkTags = function(w) {
      var x = this;
      return this.walk(function(b) {
        if (b.type === n.TAG)
          return w.call(x, b);
      });
    }, g.walkUniversals = function(w) {
      var x = this;
      return this.walk(function(b) {
        if (b.type === n.UNIVERSAL)
          return w.call(x, b);
      });
    }, g.split = function(w) {
      var x = this, b = [];
      return this.reduce(function(C, A, U) {
        var D = w.call(x, A);
        return b.push(A), D ? (C.push(b), b = []) : U === x.length - 1 && C.push(b), C;
      }, []);
    }, g.map = function(w) {
      return this.nodes.map(w);
    }, g.reduce = function(w, x) {
      return this.nodes.reduce(w, x);
    }, g.every = function(w) {
      return this.nodes.every(w);
    }, g.some = function(w) {
      return this.nodes.some(w);
    }, g.filter = function(w) {
      return this.nodes.filter(w);
    }, g.sort = function(w) {
      return this.nodes.sort(w);
    }, g.toString = function() {
      return this.map(String).join("");
    }, m(c, [{
      key: "first",
      get: function() {
        return this.at(0);
      }
    }, {
      key: "last",
      get: function() {
        return this.at(this.length - 1);
      }
    }, {
      key: "length",
      get: function() {
        return this.nodes.length;
      }
    }]), c;
  }(r.default);
  t.default = S, e.exports = t.default;
})(zi, zi.exports);
var Na = zi.exports;
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(Na), n = ke;
  function i(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function a(f, m) {
    for (var p = 0; p < m.length; p++) {
      var E = m[p];
      E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(f, E.key, E);
    }
  }
  function s(f, m, p) {
    return m && a(f.prototype, m), p && a(f, p), f;
  }
  function u(f, m) {
    f.prototype = Object.create(m.prototype), f.prototype.constructor = f, o(f, m);
  }
  function o(f, m) {
    return o = Object.setPrototypeOf || function(E, S) {
      return E.__proto__ = S, E;
    }, o(f, m);
  }
  var l = /* @__PURE__ */ function(f) {
    u(m, f);
    function m(E) {
      var S;
      return S = f.call(this, E) || this, S.type = n.ROOT, S;
    }
    var p = m.prototype;
    return p.toString = function() {
      var S = this.reduce(function(d, c) {
        return d.push(String(c)), d;
      }, []).join(",");
      return this.trailingComma ? S + "," : S;
    }, p.error = function(S, d) {
      return this._error ? this._error(S, d) : new Error(S);
    }, s(m, [{
      key: "errorGenerator",
      set: function(S) {
        this._error = S;
      }
    }]), m;
  }(r.default);
  t.default = l, e.exports = t.default;
})(Ui, Ui.exports);
var qo = Ui.exports, $i = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(Na), n = ke;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, p) {
      return m.__proto__ = p, m;
    }, s(o, l);
  }
  var u = /* @__PURE__ */ function(o) {
    a(l, o);
    function l(f) {
      var m;
      return m = o.call(this, f) || this, m.type = n.SELECTOR, m;
    }
    return l;
  }(r.default);
  t.default = u, e.exports = t.default;
})($i, $i.exports);
var Go = $i.exports, Ki = { exports: {} };
/*! https://mths.be/cssesc v3.0.0 by @mathias */
var $d = {}, Kd = $d.hasOwnProperty, Xd = function(t, r) {
  if (!t)
    return r;
  var n = {};
  for (var i in r)
    n[i] = Kd.call(t, i) ? t[i] : r[i];
  return n;
}, Qd = /[ -,\.\/:-@\[-\^`\{-~]/, Zd = /[ -,\.\/:-@\[\]\^`\{-~]/, Jd = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g, Aa = function e(t, r) {
  r = Xd(r, e.options), r.quotes != "single" && r.quotes != "double" && (r.quotes = "single");
  for (var n = r.quotes == "double" ? '"' : "'", i = r.isIdentifier, a = t.charAt(0), s = "", u = 0, o = t.length; u < o; ) {
    var l = t.charAt(u++), f = l.charCodeAt(), m = void 0;
    if (f < 32 || f > 126) {
      if (f >= 55296 && f <= 56319 && u < o) {
        var p = t.charCodeAt(u++);
        (p & 64512) == 56320 ? f = ((f & 1023) << 10) + (p & 1023) + 65536 : u--;
      }
      m = "\\" + f.toString(16).toUpperCase() + " ";
    } else
      r.escapeEverything ? Qd.test(l) ? m = "\\" + l : m = "\\" + f.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(l) ? m = "\\" + f.toString(16).toUpperCase() + " " : l == "\\" || !i && (l == '"' && n == l || l == "'" && n == l) || i && Zd.test(l) ? m = "\\" + l : m = l;
    s += m;
  }
  return i && (/^-[-\d]/.test(s) ? s = "\\-" + s.slice(1) : /\d/.test(a) && (s = "\\3" + a + " " + s.slice(1))), s = s.replace(Jd, function(E, S, d) {
    return S && S.length % 2 ? E : (S || "") + d;
  }), !i && r.wrap ? n + s + n : s;
};
Aa.options = {
  escapeEverything: !1,
  isIdentifier: !1,
  quotes: "single",
  wrap: !1
};
Aa.version = "3.0.0";
var Ra = Aa;
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = s(Ra), n = St, i = s(yr), a = ke;
  function s(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function u(p, E) {
    for (var S = 0; S < E.length; S++) {
      var d = E[S];
      d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(p, d.key, d);
    }
  }
  function o(p, E, S) {
    return E && u(p.prototype, E), S && u(p, S), p;
  }
  function l(p, E) {
    p.prototype = Object.create(E.prototype), p.prototype.constructor = p, f(p, E);
  }
  function f(p, E) {
    return f = Object.setPrototypeOf || function(d, c) {
      return d.__proto__ = c, d;
    }, f(p, E);
  }
  var m = /* @__PURE__ */ function(p) {
    l(E, p);
    function E(d) {
      var c;
      return c = p.call(this, d) || this, c.type = a.CLASS, c._constructed = !0, c;
    }
    var S = E.prototype;
    return S.valueToString = function() {
      return "." + p.prototype.valueToString.call(this);
    }, o(E, [{
      key: "value",
      get: function() {
        return this._value;
      },
      set: function(c) {
        if (this._constructed) {
          var g = (0, r.default)(c, {
            isIdentifier: !0
          });
          g !== c ? ((0, n.ensureObject)(this, "raws"), this.raws.value = g) : this.raws && delete this.raws.value;
        }
        this._value = c;
      }
    }]), E;
  }(i.default);
  t.default = m, e.exports = t.default;
})(Ki, Ki.exports);
var $o = Ki.exports, Xi = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(yr), n = ke;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, p) {
      return m.__proto__ = p, m;
    }, s(o, l);
  }
  var u = /* @__PURE__ */ function(o) {
    a(l, o);
    function l(f) {
      var m;
      return m = o.call(this, f) || this, m.type = n.COMMENT, m;
    }
    return l;
  }(r.default);
  t.default = u, e.exports = t.default;
})(Xi, Xi.exports);
var Ko = Xi.exports, Qi = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(yr), n = ke;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, p) {
      return m.__proto__ = p, m;
    }, s(o, l);
  }
  var u = /* @__PURE__ */ function(o) {
    a(l, o);
    function l(m) {
      var p;
      return p = o.call(this, m) || this, p.type = n.ID, p;
    }
    var f = l.prototype;
    return f.valueToString = function() {
      return "#" + o.prototype.valueToString.call(this);
    }, l;
  }(r.default);
  t.default = u, e.exports = t.default;
})(Qi, Qi.exports);
var Xo = Qi.exports, Zi = { exports: {} }, Ji = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = a(Ra), n = St, i = a(yr);
  function a(m) {
    return m && m.__esModule ? m : { default: m };
  }
  function s(m, p) {
    for (var E = 0; E < p.length; E++) {
      var S = p[E];
      S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(m, S.key, S);
    }
  }
  function u(m, p, E) {
    return p && s(m.prototype, p), E && s(m, E), m;
  }
  function o(m, p) {
    m.prototype = Object.create(p.prototype), m.prototype.constructor = m, l(m, p);
  }
  function l(m, p) {
    return l = Object.setPrototypeOf || function(S, d) {
      return S.__proto__ = d, S;
    }, l(m, p);
  }
  var f = /* @__PURE__ */ function(m) {
    o(p, m);
    function p() {
      return m.apply(this, arguments) || this;
    }
    var E = p.prototype;
    return E.qualifiedName = function(d) {
      return this.namespace ? this.namespaceString + "|" + d : d;
    }, E.valueToString = function() {
      return this.qualifiedName(m.prototype.valueToString.call(this));
    }, u(p, [{
      key: "namespace",
      get: function() {
        return this._namespace;
      },
      set: function(d) {
        if (d === !0 || d === "*" || d === "&") {
          this._namespace = d, this.raws && delete this.raws.namespace;
          return;
        }
        var c = (0, r.default)(d, {
          isIdentifier: !0
        });
        this._namespace = d, c !== d ? ((0, n.ensureObject)(this, "raws"), this.raws.namespace = c) : this.raws && delete this.raws.namespace;
      }
    }, {
      key: "ns",
      get: function() {
        return this._namespace;
      },
      set: function(d) {
        this.namespace = d;
      }
    }, {
      key: "namespaceString",
      get: function() {
        if (this.namespace) {
          var d = this.stringifyProperty("namespace");
          return d === !0 ? "" : d;
        } else
          return "";
      }
    }]), p;
  }(i.default);
  t.default = f, e.exports = t.default;
})(Ji, Ji.exports);
var Fa = Ji.exports;
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(Fa), n = ke;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, p) {
      return m.__proto__ = p, m;
    }, s(o, l);
  }
  var u = /* @__PURE__ */ function(o) {
    a(l, o);
    function l(f) {
      var m;
      return m = o.call(this, f) || this, m.type = n.TAG, m;
    }
    return l;
  }(r.default);
  t.default = u, e.exports = t.default;
})(Zi, Zi.exports);
var Qo = Zi.exports, ea = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(yr), n = ke;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, p) {
      return m.__proto__ = p, m;
    }, s(o, l);
  }
  var u = /* @__PURE__ */ function(o) {
    a(l, o);
    function l(f) {
      var m;
      return m = o.call(this, f) || this, m.type = n.STRING, m;
    }
    return l;
  }(r.default);
  t.default = u, e.exports = t.default;
})(ea, ea.exports);
var Zo = ea.exports, ta = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(Na), n = ke;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, p) {
      return m.__proto__ = p, m;
    }, s(o, l);
  }
  var u = /* @__PURE__ */ function(o) {
    a(l, o);
    function l(m) {
      var p;
      return p = o.call(this, m) || this, p.type = n.PSEUDO, p;
    }
    var f = l.prototype;
    return f.toString = function() {
      var p = this.length ? "(" + this.map(String).join(",") + ")" : "";
      return [this.rawSpaceBefore, this.stringifyProperty("value"), p, this.rawSpaceAfter].join("");
    }, l;
  }(r.default);
  t.default = u, e.exports = t.default;
})(ta, ta.exports);
var Jo = ta.exports, Ya = {}, ef = tf;
function tf(e, t) {
  if (Li("noDeprecation"))
    return e;
  var r = !1;
  function n() {
    if (!r) {
      if (Li("throwDeprecation"))
        throw new Error(t);
      Li("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0;
    }
    return e.apply(this, arguments);
  }
  return n;
}
function Li(e) {
  try {
    if (!hr.localStorage)
      return !1;
  } catch {
    return !1;
  }
  var t = hr.localStorage[e];
  return t == null ? !1 : String(t).toLowerCase() === "true";
}
(function(e) {
  e.__esModule = !0, e.unescapeValue = c, e.default = void 0;
  var t = s(Ra), r = s(jo), n = s(Fa), i = ke, a;
  function s(b) {
    return b && b.__esModule ? b : { default: b };
  }
  function u(b, C) {
    for (var A = 0; A < C.length; A++) {
      var U = C[A];
      U.enumerable = U.enumerable || !1, U.configurable = !0, "value" in U && (U.writable = !0), Object.defineProperty(b, U.key, U);
    }
  }
  function o(b, C, A) {
    return C && u(b.prototype, C), A && u(b, A), b;
  }
  function l(b, C) {
    b.prototype = Object.create(C.prototype), b.prototype.constructor = b, f(b, C);
  }
  function f(b, C) {
    return f = Object.setPrototypeOf || function(U, D) {
      return U.__proto__ = D, U;
    }, f(b, C);
  }
  var m = ef, p = /^('|")([^]*)\1$/, E = m(function() {
  }, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."), S = m(function() {
  }, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."), d = m(function() {
  }, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");
  function c(b) {
    var C = !1, A = null, U = b, D = U.match(p);
    return D && (A = D[1], U = D[2]), U = (0, r.default)(U), U !== b && (C = !0), {
      deprecatedUsage: C,
      unescaped: U,
      quoteMark: A
    };
  }
  function g(b) {
    if (b.quoteMark !== void 0 || b.value === void 0)
      return b;
    d();
    var C = c(b.value), A = C.quoteMark, U = C.unescaped;
    return b.raws || (b.raws = {}), b.raws.value === void 0 && (b.raws.value = b.value), b.value = U, b.quoteMark = A, b;
  }
  var _ = /* @__PURE__ */ function(b) {
    l(C, b);
    function C(U) {
      var D;
      return U === void 0 && (U = {}), D = b.call(this, g(U)) || this, D.type = i.ATTRIBUTE, D.raws = D.raws || {}, Object.defineProperty(D.raws, "unquoted", {
        get: m(function() {
          return D.value;
        }, "attr.raws.unquoted is deprecated. Call attr.value instead."),
        set: m(function() {
          return D.value;
        }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")
      }), D._constructed = !0, D;
    }
    var A = C.prototype;
    return A.getQuotedValue = function(D) {
      D === void 0 && (D = {});
      var M = this._determineQuoteMark(D), z = w[M], Y = (0, t.default)(this._value, z);
      return Y;
    }, A._determineQuoteMark = function(D) {
      return D.smart ? this.smartQuoteMark(D) : this.preferredQuoteMark(D);
    }, A.setValue = function(D, M) {
      M === void 0 && (M = {}), this._value = D, this._quoteMark = this._determineQuoteMark(M), this._syncRawValue();
    }, A.smartQuoteMark = function(D) {
      var M = this.value, z = M.replace(/[^']/g, "").length, Y = M.replace(/[^"]/g, "").length;
      if (z + Y === 0) {
        var q = (0, t.default)(M, {
          isIdentifier: !0
        });
        if (q === M)
          return C.NO_QUOTE;
        var Q = this.preferredQuoteMark(D);
        if (Q === C.NO_QUOTE) {
          var V = this.quoteMark || D.quoteMark || C.DOUBLE_QUOTE, L = w[V], re = (0, t.default)(M, L);
          if (re.length < q.length)
            return V;
        }
        return Q;
      } else
        return Y === z ? this.preferredQuoteMark(D) : Y < z ? C.DOUBLE_QUOTE : C.SINGLE_QUOTE;
    }, A.preferredQuoteMark = function(D) {
      var M = D.preferCurrentQuoteMark ? this.quoteMark : D.quoteMark;
      return M === void 0 && (M = D.preferCurrentQuoteMark ? D.quoteMark : this.quoteMark), M === void 0 && (M = C.DOUBLE_QUOTE), M;
    }, A._syncRawValue = function() {
      var D = (0, t.default)(this._value, w[this.quoteMark]);
      D === this._value ? this.raws && delete this.raws.value : this.raws.value = D;
    }, A._handleEscapes = function(D, M) {
      if (this._constructed) {
        var z = (0, t.default)(M, {
          isIdentifier: !0
        });
        z !== M ? this.raws[D] = z : delete this.raws[D];
      }
    }, A._spacesFor = function(D) {
      var M = {
        before: "",
        after: ""
      }, z = this.spaces[D] || {}, Y = this.raws.spaces && this.raws.spaces[D] || {};
      return Object.assign(M, z, Y);
    }, A._stringFor = function(D, M, z) {
      M === void 0 && (M = D), z === void 0 && (z = x);
      var Y = this._spacesFor(M);
      return z(this.stringifyProperty(D), Y);
    }, A.offsetOf = function(D) {
      var M = 1, z = this._spacesFor("attribute");
      if (M += z.before.length, D === "namespace" || D === "ns")
        return this.namespace ? M : -1;
      if (D === "attributeNS" || (M += this.namespaceString.length, this.namespace && (M += 1), D === "attribute"))
        return M;
      M += this.stringifyProperty("attribute").length, M += z.after.length;
      var Y = this._spacesFor("operator");
      M += Y.before.length;
      var q = this.stringifyProperty("operator");
      if (D === "operator")
        return q ? M : -1;
      M += q.length, M += Y.after.length;
      var Q = this._spacesFor("value");
      M += Q.before.length;
      var V = this.stringifyProperty("value");
      if (D === "value")
        return V ? M : -1;
      M += V.length, M += Q.after.length;
      var L = this._spacesFor("insensitive");
      return M += L.before.length, D === "insensitive" && this.insensitive ? M : -1;
    }, A.toString = function() {
      var D = this, M = [this.rawSpaceBefore, "["];
      return M.push(this._stringFor("qualifiedAttribute", "attribute")), this.operator && (this.value || this.value === "") && (M.push(this._stringFor("operator")), M.push(this._stringFor("value")), M.push(this._stringFor("insensitiveFlag", "insensitive", function(z, Y) {
        return z.length > 0 && !D.quoted && Y.before.length === 0 && !(D.spaces.value && D.spaces.value.after) && (Y.before = " "), x(z, Y);
      }))), M.push("]"), M.push(this.rawSpaceAfter), M.join("");
    }, o(C, [{
      key: "quoted",
      get: function() {
        var D = this.quoteMark;
        return D === "'" || D === '"';
      },
      set: function(D) {
        S();
      }
      /**
       * returns a single (`'`) or double (`"`) quote character if the value is quoted.
       * returns `null` if the value is not quoted.
       * returns `undefined` if the quotation state is unknown (this can happen when
       * the attribute is constructed without specifying a quote mark.)
       */
    }, {
      key: "quoteMark",
      get: function() {
        return this._quoteMark;
      },
      set: function(D) {
        if (!this._constructed) {
          this._quoteMark = D;
          return;
        }
        this._quoteMark !== D && (this._quoteMark = D, this._syncRawValue());
      }
    }, {
      key: "qualifiedAttribute",
      get: function() {
        return this.qualifiedName(this.raws.attribute || this.attribute);
      }
    }, {
      key: "insensitiveFlag",
      get: function() {
        return this.insensitive ? "i" : "";
      }
    }, {
      key: "value",
      get: function() {
        return this._value;
      },
      set: function(D) {
        if (this._constructed) {
          var M = c(D), z = M.deprecatedUsage, Y = M.unescaped, q = M.quoteMark;
          if (z && E(), Y === this._value && q === this._quoteMark)
            return;
          this._value = Y, this._quoteMark = q, this._syncRawValue();
        } else
          this._value = D;
      }
    }, {
      key: "attribute",
      get: function() {
        return this._attribute;
      },
      set: function(D) {
        this._handleEscapes("attribute", D), this._attribute = D;
      }
    }]), C;
  }(n.default);
  e.default = _, _.NO_QUOTE = null, _.SINGLE_QUOTE = "'", _.DOUBLE_QUOTE = '"';
  var w = (a = {
    "'": {
      quotes: "single",
      wrap: !0
    },
    '"': {
      quotes: "double",
      wrap: !0
    }
  }, a[null] = {
    isIdentifier: !0
  }, a);
  function x(b, C) {
    return "" + C.before + b + C.after;
  }
})(Ya);
var ra = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(Fa), n = ke;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, p) {
      return m.__proto__ = p, m;
    }, s(o, l);
  }
  var u = /* @__PURE__ */ function(o) {
    a(l, o);
    function l(f) {
      var m;
      return m = o.call(this, f) || this, m.type = n.UNIVERSAL, m.value = "*", m;
    }
    return l;
  }(r.default);
  t.default = u, e.exports = t.default;
})(ra, ra.exports);
var el = ra.exports, na = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(yr), n = ke;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, p) {
      return m.__proto__ = p, m;
    }, s(o, l);
  }
  var u = /* @__PURE__ */ function(o) {
    a(l, o);
    function l(f) {
      var m;
      return m = o.call(this, f) || this, m.type = n.COMBINATOR, m;
    }
    return l;
  }(r.default);
  t.default = u, e.exports = t.default;
})(na, na.exports);
var tl = na.exports, ia = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(yr), n = ke;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, p) {
      return m.__proto__ = p, m;
    }, s(o, l);
  }
  var u = /* @__PURE__ */ function(o) {
    a(l, o);
    function l(f) {
      var m;
      return m = o.call(this, f) || this, m.type = n.NESTING, m.value = "&", m;
    }
    return l;
  }(r.default);
  t.default = u, e.exports = t.default;
})(ia, ia.exports);
var rl = ia.exports, aa = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = r;
  function r(n) {
    return n.sort(function(i, a) {
      return i - a;
    });
  }
  e.exports = t.default;
})(aa, aa.exports);
var rf = aa.exports, nl = {}, oe = {};
oe.__esModule = !0;
oe.combinator = oe.word = oe.comment = oe.str = oe.tab = oe.newline = oe.feed = oe.cr = oe.backslash = oe.bang = oe.slash = oe.doubleQuote = oe.singleQuote = oe.space = oe.greaterThan = oe.pipe = oe.equals = oe.plus = oe.caret = oe.tilde = oe.dollar = oe.closeSquare = oe.openSquare = oe.closeParenthesis = oe.openParenthesis = oe.semicolon = oe.colon = oe.comma = oe.at = oe.asterisk = oe.ampersand = void 0;
var nf = 38;
oe.ampersand = nf;
var af = 42;
oe.asterisk = af;
var sf = 64;
oe.at = sf;
var of = 44;
oe.comma = of;
var lf = 58;
oe.colon = lf;
var uf = 59;
oe.semicolon = uf;
var cf = 40;
oe.openParenthesis = cf;
var df = 41;
oe.closeParenthesis = df;
var ff = 91;
oe.openSquare = ff;
var hf = 93;
oe.closeSquare = hf;
var mf = 36;
oe.dollar = mf;
var pf = 126;
oe.tilde = pf;
var gf = 94;
oe.caret = gf;
var _f = 43;
oe.plus = _f;
var vf = 61;
oe.equals = vf;
var yf = 124;
oe.pipe = yf;
var bf = 62;
oe.greaterThan = bf;
var wf = 32;
oe.space = wf;
var il = 39;
oe.singleQuote = il;
var kf = 34;
oe.doubleQuote = kf;
var xf = 47;
oe.slash = xf;
var Sf = 33;
oe.bang = Sf;
var Tf = 92;
oe.backslash = Tf;
var Of = 13;
oe.cr = Of;
var Ef = 12;
oe.feed = Ef;
var Df = 10;
oe.newline = Df;
var Cf = 9;
oe.tab = Cf;
var If = il;
oe.str = If;
var Pf = -1;
oe.comment = Pf;
var Lf = -2;
oe.word = Lf;
var Mf = -3;
oe.combinator = Mf;
(function(e) {
  e.__esModule = !0, e.default = S, e.FIELDS = void 0;
  var t = a(oe), r, n;
  function i() {
    if (typeof WeakMap != "function")
      return null;
    var d = /* @__PURE__ */ new WeakMap();
    return i = function() {
      return d;
    }, d;
  }
  function a(d) {
    if (d && d.__esModule)
      return d;
    if (d === null || typeof d != "object" && typeof d != "function")
      return { default: d };
    var c = i();
    if (c && c.has(d))
      return c.get(d);
    var g = {}, _ = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var w in d)
      if (Object.prototype.hasOwnProperty.call(d, w)) {
        var x = _ ? Object.getOwnPropertyDescriptor(d, w) : null;
        x && (x.get || x.set) ? Object.defineProperty(g, w, x) : g[w] = d[w];
      }
    return g.default = d, c && c.set(d, g), g;
  }
  for (var s = (r = {}, r[t.tab] = !0, r[t.newline] = !0, r[t.cr] = !0, r[t.feed] = !0, r), u = (n = {}, n[t.space] = !0, n[t.tab] = !0, n[t.newline] = !0, n[t.cr] = !0, n[t.feed] = !0, n[t.ampersand] = !0, n[t.asterisk] = !0, n[t.bang] = !0, n[t.comma] = !0, n[t.colon] = !0, n[t.semicolon] = !0, n[t.openParenthesis] = !0, n[t.closeParenthesis] = !0, n[t.openSquare] = !0, n[t.closeSquare] = !0, n[t.singleQuote] = !0, n[t.doubleQuote] = !0, n[t.plus] = !0, n[t.pipe] = !0, n[t.tilde] = !0, n[t.greaterThan] = !0, n[t.equals] = !0, n[t.dollar] = !0, n[t.caret] = !0, n[t.slash] = !0, n), o = {}, l = "0123456789abcdefABCDEF", f = 0; f < l.length; f++)
    o[l.charCodeAt(f)] = !0;
  function m(d, c) {
    var g = c, _;
    do {
      if (_ = d.charCodeAt(g), u[_])
        return g - 1;
      _ === t.backslash ? g = p(d, g) + 1 : g++;
    } while (g < d.length);
    return g - 1;
  }
  function p(d, c) {
    var g = c, _ = d.charCodeAt(g + 1);
    if (!s[_])
      if (o[_]) {
        var w = 0;
        do
          g++, w++, _ = d.charCodeAt(g + 1);
        while (o[_] && w < 6);
        w < 6 && _ === t.space && g++;
      } else
        g++;
    return g;
  }
  var E = {
    TYPE: 0,
    START_LINE: 1,
    START_COL: 2,
    END_LINE: 3,
    END_COL: 4,
    START_POS: 5,
    END_POS: 6
  };
  e.FIELDS = E;
  function S(d) {
    var c = [], g = d.css.valueOf(), _ = g, w = _.length, x = -1, b = 1, C = 0, A = 0, U, D, M, z, Y, q, Q, V, L, re, ne, ue, Ae;
    function ee(ie, j) {
      if (d.safe)
        g += j, L = g.length - 1;
      else
        throw d.error("Unclosed " + ie, b, C - x, C);
    }
    for (; C < w; ) {
      switch (U = g.charCodeAt(C), U === t.newline && (x = C, b += 1), U) {
        case t.space:
        case t.tab:
        case t.newline:
        case t.cr:
        case t.feed:
          L = C;
          do
            L += 1, U = g.charCodeAt(L), U === t.newline && (x = L, b += 1);
          while (U === t.space || U === t.newline || U === t.tab || U === t.cr || U === t.feed);
          Ae = t.space, z = b, M = L - x - 1, A = L;
          break;
        case t.plus:
        case t.greaterThan:
        case t.tilde:
        case t.pipe:
          L = C;
          do
            L += 1, U = g.charCodeAt(L);
          while (U === t.plus || U === t.greaterThan || U === t.tilde || U === t.pipe);
          Ae = t.combinator, z = b, M = C - x, A = L;
          break;
        case t.asterisk:
        case t.ampersand:
        case t.bang:
        case t.comma:
        case t.equals:
        case t.dollar:
        case t.caret:
        case t.openSquare:
        case t.closeSquare:
        case t.colon:
        case t.semicolon:
        case t.openParenthesis:
        case t.closeParenthesis:
          L = C, Ae = U, z = b, M = C - x, A = L + 1;
          break;
        case t.singleQuote:
        case t.doubleQuote:
          ue = U === t.singleQuote ? "'" : '"', L = C;
          do
            for (Y = !1, L = g.indexOf(ue, L + 1), L === -1 && ee("quote", ue), q = L; g.charCodeAt(q - 1) === t.backslash; )
              q -= 1, Y = !Y;
          while (Y);
          Ae = t.str, z = b, M = C - x, A = L + 1;
          break;
        default:
          U === t.slash && g.charCodeAt(C + 1) === t.asterisk ? (L = g.indexOf("*/", C + 2) + 1, L === 0 && ee("comment", "*/"), D = g.slice(C, L + 1), V = D.split(`
`), Q = V.length - 1, Q > 0 ? (re = b + Q, ne = L - V[Q].length) : (re = b, ne = x), Ae = t.comment, b = re, z = re, M = L - ne) : U === t.slash ? (L = C, Ae = U, z = b, M = C - x, A = L + 1) : (L = m(g, C), Ae = t.word, z = b, M = L - x), A = L + 1;
          break;
      }
      c.push([
        Ae,
        // [0] Token type
        b,
        // [1] Starting line
        C - x,
        // [2] Starting column
        z,
        // [3] Ending line
        M,
        // [4] Ending column
        C,
        // [5] Start position / Source index
        A
        // [6] End position
      ]), ne && (x = ne, ne = null), C = A;
    }
    return c;
  }
})(nl);
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = A(qo), n = A(Go), i = A($o), a = A(Ko), s = A(Xo), u = A(Qo), o = A(Zo), l = A(Jo), f = C(Ya), m = A(el), p = A(tl), E = A(rl), S = A(rf), d = C(nl), c = C(oe), g = C(ke), _ = St, w, x;
  function b() {
    if (typeof WeakMap != "function")
      return null;
    var ee = /* @__PURE__ */ new WeakMap();
    return b = function() {
      return ee;
    }, ee;
  }
  function C(ee) {
    if (ee && ee.__esModule)
      return ee;
    if (ee === null || typeof ee != "object" && typeof ee != "function")
      return { default: ee };
    var ie = b();
    if (ie && ie.has(ee))
      return ie.get(ee);
    var j = {}, R = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var K in ee)
      if (Object.prototype.hasOwnProperty.call(ee, K)) {
        var ce = R ? Object.getOwnPropertyDescriptor(ee, K) : null;
        ce && (ce.get || ce.set) ? Object.defineProperty(j, K, ce) : j[K] = ee[K];
      }
    return j.default = ee, ie && ie.set(ee, j), j;
  }
  function A(ee) {
    return ee && ee.__esModule ? ee : { default: ee };
  }
  function U(ee, ie) {
    for (var j = 0; j < ie.length; j++) {
      var R = ie[j];
      R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(ee, R.key, R);
    }
  }
  function D(ee, ie, j) {
    return ie && U(ee.prototype, ie), j && U(ee, j), ee;
  }
  var M = (w = {}, w[c.space] = !0, w[c.cr] = !0, w[c.feed] = !0, w[c.newline] = !0, w[c.tab] = !0, w), z = Object.assign({}, M, (x = {}, x[c.comment] = !0, x));
  function Y(ee) {
    return {
      line: ee[d.FIELDS.START_LINE],
      column: ee[d.FIELDS.START_COL]
    };
  }
  function q(ee) {
    return {
      line: ee[d.FIELDS.END_LINE],
      column: ee[d.FIELDS.END_COL]
    };
  }
  function Q(ee, ie, j, R) {
    return {
      start: {
        line: ee,
        column: ie
      },
      end: {
        line: j,
        column: R
      }
    };
  }
  function V(ee) {
    return Q(ee[d.FIELDS.START_LINE], ee[d.FIELDS.START_COL], ee[d.FIELDS.END_LINE], ee[d.FIELDS.END_COL]);
  }
  function L(ee, ie) {
    if (ee)
      return Q(ee[d.FIELDS.START_LINE], ee[d.FIELDS.START_COL], ie[d.FIELDS.END_LINE], ie[d.FIELDS.END_COL]);
  }
  function re(ee, ie) {
    var j = ee[ie];
    if (typeof j == "string")
      return j.indexOf("\\") !== -1 && ((0, _.ensureObject)(ee, "raws"), ee[ie] = (0, _.unesc)(j), ee.raws[ie] === void 0 && (ee.raws[ie] = j)), ee;
  }
  function ne(ee, ie) {
    for (var j = -1, R = []; (j = ee.indexOf(ie, j + 1)) !== -1; )
      R.push(j);
    return R;
  }
  function ue() {
    var ee = Array.prototype.concat.apply([], arguments);
    return ee.filter(function(ie, j) {
      return j === ee.indexOf(ie);
    });
  }
  var Ae = /* @__PURE__ */ function() {
    function ee(j, R) {
      R === void 0 && (R = {}), this.rule = j, this.options = Object.assign({
        lossy: !1,
        safe: !1
      }, R), this.position = 0, this.css = typeof this.rule == "string" ? this.rule : this.rule.selector, this.tokens = (0, d.default)({
        css: this.css,
        error: this._errorGenerator(),
        safe: this.options.safe
      });
      var K = L(this.tokens[0], this.tokens[this.tokens.length - 1]);
      this.root = new r.default({
        source: K
      }), this.root.errorGenerator = this._errorGenerator();
      var ce = new n.default({
        source: {
          start: {
            line: 1,
            column: 1
          }
        }
      });
      this.root.append(ce), this.current = ce, this.loop();
    }
    var ie = ee.prototype;
    return ie._errorGenerator = function() {
      var R = this;
      return function(K, ce) {
        return typeof R.rule == "string" ? new Error(K) : R.rule.error(K, ce);
      };
    }, ie.attribute = function() {
      var R = [], K = this.currToken;
      for (this.position++; this.position < this.tokens.length && this.currToken[d.FIELDS.TYPE] !== c.closeSquare; )
        R.push(this.currToken), this.position++;
      if (this.currToken[d.FIELDS.TYPE] !== c.closeSquare)
        return this.expected("closing square bracket", this.currToken[d.FIELDS.START_POS]);
      var ce = R.length, B = {
        source: Q(K[1], K[2], this.currToken[3], this.currToken[4]),
        sourceIndex: K[d.FIELDS.START_POS]
      };
      if (ce === 1 && !~[c.word].indexOf(R[0][d.FIELDS.TYPE]))
        return this.expected("attribute", R[0][d.FIELDS.START_POS]);
      for (var me = 0, Se = "", ve = "", fe = null, De = !1; me < ce; ) {
        var k = R[me], v = this.content(k), I = R[me + 1];
        switch (k[d.FIELDS.TYPE]) {
          case c.space:
            if (De = !0, this.options.lossy)
              break;
            if (fe) {
              (0, _.ensureObject)(B, "spaces", fe);
              var Z = B.spaces[fe].after || "";
              B.spaces[fe].after = Z + v;
              var de = (0, _.getProp)(B, "raws", "spaces", fe, "after") || null;
              de && (B.raws.spaces[fe].after = de + v);
            } else
              Se = Se + v, ve = ve + v;
            break;
          case c.asterisk:
            if (I[d.FIELDS.TYPE] === c.equals)
              B.operator = v, fe = "operator";
            else if ((!B.namespace || fe === "namespace" && !De) && I) {
              Se && ((0, _.ensureObject)(B, "spaces", "attribute"), B.spaces.attribute.before = Se, Se = ""), ve && ((0, _.ensureObject)(B, "raws", "spaces", "attribute"), B.raws.spaces.attribute.before = Se, ve = ""), B.namespace = (B.namespace || "") + v;
              var ge = (0, _.getProp)(B, "raws", "namespace") || null;
              ge && (B.raws.namespace += v), fe = "namespace";
            }
            De = !1;
            break;
          case c.dollar:
            if (fe === "value") {
              var Fe = (0, _.getProp)(B, "raws", "value");
              B.value += "$", Fe && (B.raws.value = Fe + "$");
              break;
            }
          case c.caret:
            I[d.FIELDS.TYPE] === c.equals && (B.operator = v, fe = "operator"), De = !1;
            break;
          case c.combinator:
            if (v === "~" && I[d.FIELDS.TYPE] === c.equals && (B.operator = v, fe = "operator"), v !== "|") {
              De = !1;
              break;
            }
            I[d.FIELDS.TYPE] === c.equals ? (B.operator = v, fe = "operator") : !B.namespace && !B.attribute && (B.namespace = !0), De = !1;
            break;
          case c.word:
            if (I && this.content(I) === "|" && R[me + 2] && R[me + 2][d.FIELDS.TYPE] !== c.equals && // this look-ahead probably fails with comment nodes involved.
            !B.operator && !B.namespace)
              B.namespace = v, fe = "namespace";
            else if (!B.attribute || fe === "attribute" && !De) {
              Se && ((0, _.ensureObject)(B, "spaces", "attribute"), B.spaces.attribute.before = Se, Se = ""), ve && ((0, _.ensureObject)(B, "raws", "spaces", "attribute"), B.raws.spaces.attribute.before = ve, ve = ""), B.attribute = (B.attribute || "") + v;
              var Ue = (0, _.getProp)(B, "raws", "attribute") || null;
              Ue && (B.raws.attribute += v), fe = "attribute";
            } else if (!B.value && B.value !== "" || fe === "value" && !De) {
              var lt = (0, _.unesc)(v), Ie = (0, _.getProp)(B, "raws", "value") || "", F = B.value || "";
              B.value = F + lt, B.quoteMark = null, (lt !== v || Ie) && ((0, _.ensureObject)(B, "raws"), B.raws.value = (Ie || F) + v), fe = "value";
            } else {
              var G = v === "i" || v === "I";
              (B.value || B.value === "") && (B.quoteMark || De) ? (B.insensitive = G, (!G || v === "I") && ((0, _.ensureObject)(B, "raws"), B.raws.insensitiveFlag = v), fe = "insensitive", Se && ((0, _.ensureObject)(B, "spaces", "insensitive"), B.spaces.insensitive.before = Se, Se = ""), ve && ((0, _.ensureObject)(B, "raws", "spaces", "insensitive"), B.raws.spaces.insensitive.before = ve, ve = "")) : (B.value || B.value === "") && (fe = "value", B.value += v, B.raws.value && (B.raws.value += v));
            }
            De = !1;
            break;
          case c.str:
            if (!B.attribute || !B.operator)
              return this.error("Expected an attribute followed by an operator preceding the string.", {
                index: k[d.FIELDS.START_POS]
              });
            var et = (0, f.unescapeValue)(v), it = et.unescaped, kr = et.quoteMark;
            B.value = it, B.quoteMark = kr, fe = "value", (0, _.ensureObject)(B, "raws"), B.raws.value = v, De = !1;
            break;
          case c.equals:
            if (!B.attribute)
              return this.expected("attribute", k[d.FIELDS.START_POS], v);
            if (B.value)
              return this.error('Unexpected "=" found; an operator was already defined.', {
                index: k[d.FIELDS.START_POS]
              });
            B.operator = B.operator ? B.operator + v : v, fe = "operator", De = !1;
            break;
          case c.comment:
            if (fe)
              if (De || I && I[d.FIELDS.TYPE] === c.space || fe === "insensitive") {
                var Nt = (0, _.getProp)(B, "spaces", fe, "after") || "", At = (0, _.getProp)(B, "raws", "spaces", fe, "after") || Nt;
                (0, _.ensureObject)(B, "raws", "spaces", fe), B.raws.spaces[fe].after = At + v;
              } else {
                var Et = B[fe] || "", Mr = (0, _.getProp)(B, "raws", fe) || Et;
                (0, _.ensureObject)(B, "raws"), B.raws[fe] = Mr + v;
              }
            else
              ve = ve + v;
            break;
          default:
            return this.error('Unexpected "' + v + '" found.', {
              index: k[d.FIELDS.START_POS]
            });
        }
        me++;
      }
      re(B, "attribute"), re(B, "namespace"), this.newNode(new f.default(B)), this.position++;
    }, ie.parseWhitespaceEquivalentTokens = function(R) {
      R < 0 && (R = this.tokens.length);
      var K = this.position, ce = [], B = "", me = void 0;
      do
        if (M[this.currToken[d.FIELDS.TYPE]])
          this.options.lossy || (B += this.content());
        else if (this.currToken[d.FIELDS.TYPE] === c.comment) {
          var Se = {};
          B && (Se.before = B, B = ""), me = new a.default({
            value: this.content(),
            source: V(this.currToken),
            sourceIndex: this.currToken[d.FIELDS.START_POS],
            spaces: Se
          }), ce.push(me);
        }
      while (++this.position < R);
      if (B) {
        if (me)
          me.spaces.after = B;
        else if (!this.options.lossy) {
          var ve = this.tokens[K], fe = this.tokens[this.position - 1];
          ce.push(new o.default({
            value: "",
            source: Q(ve[d.FIELDS.START_LINE], ve[d.FIELDS.START_COL], fe[d.FIELDS.END_LINE], fe[d.FIELDS.END_COL]),
            sourceIndex: ve[d.FIELDS.START_POS],
            spaces: {
              before: B,
              after: ""
            }
          }));
        }
      }
      return ce;
    }, ie.convertWhitespaceNodesToSpace = function(R, K) {
      var ce = this;
      K === void 0 && (K = !1);
      var B = "", me = "";
      R.forEach(function(ve) {
        var fe = ce.lossySpace(ve.spaces.before, K), De = ce.lossySpace(ve.rawSpaceBefore, K);
        B += fe + ce.lossySpace(ve.spaces.after, K && fe.length === 0), me += fe + ve.value + ce.lossySpace(ve.rawSpaceAfter, K && De.length === 0);
      }), me === B && (me = void 0);
      var Se = {
        space: B,
        rawSpace: me
      };
      return Se;
    }, ie.isNamedCombinator = function(R) {
      return R === void 0 && (R = this.position), this.tokens[R + 0] && this.tokens[R + 0][d.FIELDS.TYPE] === c.slash && this.tokens[R + 1] && this.tokens[R + 1][d.FIELDS.TYPE] === c.word && this.tokens[R + 2] && this.tokens[R + 2][d.FIELDS.TYPE] === c.slash;
    }, ie.namedCombinator = function() {
      if (this.isNamedCombinator()) {
        var R = this.content(this.tokens[this.position + 1]), K = (0, _.unesc)(R).toLowerCase(), ce = {};
        K !== R && (ce.value = "/" + R + "/");
        var B = new p.default({
          value: "/" + K + "/",
          source: Q(this.currToken[d.FIELDS.START_LINE], this.currToken[d.FIELDS.START_COL], this.tokens[this.position + 2][d.FIELDS.END_LINE], this.tokens[this.position + 2][d.FIELDS.END_COL]),
          sourceIndex: this.currToken[d.FIELDS.START_POS],
          raws: ce
        });
        return this.position = this.position + 3, B;
      } else
        this.unexpected();
    }, ie.combinator = function() {
      var R = this;
      if (this.content() === "|")
        return this.namespace();
      var K = this.locateNextMeaningfulToken(this.position);
      if (K < 0 || this.tokens[K][d.FIELDS.TYPE] === c.comma) {
        var ce = this.parseWhitespaceEquivalentTokens(K);
        if (ce.length > 0) {
          var B = this.current.last;
          if (B) {
            var me = this.convertWhitespaceNodesToSpace(ce), Se = me.space, ve = me.rawSpace;
            ve !== void 0 && (B.rawSpaceAfter += ve), B.spaces.after += Se;
          } else
            ce.forEach(function(Ie) {
              return R.newNode(Ie);
            });
        }
        return;
      }
      var fe = this.currToken, De = void 0;
      K > this.position && (De = this.parseWhitespaceEquivalentTokens(K));
      var k;
      if (this.isNamedCombinator() ? k = this.namedCombinator() : this.currToken[d.FIELDS.TYPE] === c.combinator ? (k = new p.default({
        value: this.content(),
        source: V(this.currToken),
        sourceIndex: this.currToken[d.FIELDS.START_POS]
      }), this.position++) : M[this.currToken[d.FIELDS.TYPE]] || De || this.unexpected(), k) {
        if (De) {
          var v = this.convertWhitespaceNodesToSpace(De), I = v.space, Z = v.rawSpace;
          k.spaces.before = I, k.rawSpaceBefore = Z;
        }
      } else {
        var de = this.convertWhitespaceNodesToSpace(De, !0), ge = de.space, Fe = de.rawSpace;
        Fe || (Fe = ge);
        var Ue = {}, lt = {
          spaces: {}
        };
        ge.endsWith(" ") && Fe.endsWith(" ") ? (Ue.before = ge.slice(0, ge.length - 1), lt.spaces.before = Fe.slice(0, Fe.length - 1)) : ge.startsWith(" ") && Fe.startsWith(" ") ? (Ue.after = ge.slice(1), lt.spaces.after = Fe.slice(1)) : lt.value = Fe, k = new p.default({
          value: " ",
          source: L(fe, this.tokens[this.position - 1]),
          sourceIndex: fe[d.FIELDS.START_POS],
          spaces: Ue,
          raws: lt
        });
      }
      return this.currToken && this.currToken[d.FIELDS.TYPE] === c.space && (k.spaces.after = this.optionalSpace(this.content()), this.position++), this.newNode(k);
    }, ie.comma = function() {
      if (this.position === this.tokens.length - 1) {
        this.root.trailingComma = !0, this.position++;
        return;
      }
      this.current._inferEndPosition();
      var R = new n.default({
        source: {
          start: Y(this.tokens[this.position + 1])
        }
      });
      this.current.parent.append(R), this.current = R, this.position++;
    }, ie.comment = function() {
      var R = this.currToken;
      this.newNode(new a.default({
        value: this.content(),
        source: V(R),
        sourceIndex: R[d.FIELDS.START_POS]
      })), this.position++;
    }, ie.error = function(R, K) {
      throw this.root.error(R, K);
    }, ie.missingBackslash = function() {
      return this.error("Expected a backslash preceding the semicolon.", {
        index: this.currToken[d.FIELDS.START_POS]
      });
    }, ie.missingParenthesis = function() {
      return this.expected("opening parenthesis", this.currToken[d.FIELDS.START_POS]);
    }, ie.missingSquareBracket = function() {
      return this.expected("opening square bracket", this.currToken[d.FIELDS.START_POS]);
    }, ie.unexpected = function() {
      return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[d.FIELDS.START_POS]);
    }, ie.namespace = function() {
      var R = this.prevToken && this.content(this.prevToken) || !0;
      if (this.nextToken[d.FIELDS.TYPE] === c.word)
        return this.position++, this.word(R);
      if (this.nextToken[d.FIELDS.TYPE] === c.asterisk)
        return this.position++, this.universal(R);
    }, ie.nesting = function() {
      if (this.nextToken) {
        var R = this.content(this.nextToken);
        if (R === "|") {
          this.position++;
          return;
        }
      }
      var K = this.currToken;
      this.newNode(new E.default({
        value: this.content(),
        source: V(K),
        sourceIndex: K[d.FIELDS.START_POS]
      })), this.position++;
    }, ie.parentheses = function() {
      var R = this.current.last, K = 1;
      if (this.position++, R && R.type === g.PSEUDO) {
        var ce = new n.default({
          source: {
            start: Y(this.tokens[this.position - 1])
          }
        }), B = this.current;
        for (R.append(ce), this.current = ce; this.position < this.tokens.length && K; )
          this.currToken[d.FIELDS.TYPE] === c.openParenthesis && K++, this.currToken[d.FIELDS.TYPE] === c.closeParenthesis && K--, K ? this.parse() : (this.current.source.end = q(this.currToken), this.current.parent.source.end = q(this.currToken), this.position++);
        this.current = B;
      } else {
        for (var me = this.currToken, Se = "(", ve; this.position < this.tokens.length && K; )
          this.currToken[d.FIELDS.TYPE] === c.openParenthesis && K++, this.currToken[d.FIELDS.TYPE] === c.closeParenthesis && K--, ve = this.currToken, Se += this.parseParenthesisToken(this.currToken), this.position++;
        R ? R.appendToPropertyAndEscape("value", Se, Se) : this.newNode(new o.default({
          value: Se,
          source: Q(me[d.FIELDS.START_LINE], me[d.FIELDS.START_COL], ve[d.FIELDS.END_LINE], ve[d.FIELDS.END_COL]),
          sourceIndex: me[d.FIELDS.START_POS]
        }));
      }
      if (K)
        return this.expected("closing parenthesis", this.currToken[d.FIELDS.START_POS]);
    }, ie.pseudo = function() {
      for (var R = this, K = "", ce = this.currToken; this.currToken && this.currToken[d.FIELDS.TYPE] === c.colon; )
        K += this.content(), this.position++;
      if (!this.currToken)
        return this.expected(["pseudo-class", "pseudo-element"], this.position - 1);
      if (this.currToken[d.FIELDS.TYPE] === c.word)
        this.splitWord(!1, function(B, me) {
          K += B, R.newNode(new l.default({
            value: K,
            source: L(ce, R.currToken),
            sourceIndex: ce[d.FIELDS.START_POS]
          })), me > 1 && R.nextToken && R.nextToken[d.FIELDS.TYPE] === c.openParenthesis && R.error("Misplaced parenthesis.", {
            index: R.nextToken[d.FIELDS.START_POS]
          });
        });
      else
        return this.expected(["pseudo-class", "pseudo-element"], this.currToken[d.FIELDS.START_POS]);
    }, ie.space = function() {
      var R = this.content();
      this.position === 0 || this.prevToken[d.FIELDS.TYPE] === c.comma || this.prevToken[d.FIELDS.TYPE] === c.openParenthesis || this.current.nodes.every(function(K) {
        return K.type === "comment";
      }) ? (this.spaces = this.optionalSpace(R), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[d.FIELDS.TYPE] === c.comma || this.nextToken[d.FIELDS.TYPE] === c.closeParenthesis ? (this.current.last.spaces.after = this.optionalSpace(R), this.position++) : this.combinator();
    }, ie.string = function() {
      var R = this.currToken;
      this.newNode(new o.default({
        value: this.content(),
        source: V(R),
        sourceIndex: R[d.FIELDS.START_POS]
      })), this.position++;
    }, ie.universal = function(R) {
      var K = this.nextToken;
      if (K && this.content(K) === "|")
        return this.position++, this.namespace();
      var ce = this.currToken;
      this.newNode(new m.default({
        value: this.content(),
        source: V(ce),
        sourceIndex: ce[d.FIELDS.START_POS]
      }), R), this.position++;
    }, ie.splitWord = function(R, K) {
      for (var ce = this, B = this.nextToken, me = this.content(); B && ~[c.dollar, c.caret, c.equals, c.word].indexOf(B[d.FIELDS.TYPE]); ) {
        this.position++;
        var Se = this.content();
        if (me += Se, Se.lastIndexOf("\\") === Se.length - 1) {
          var ve = this.nextToken;
          ve && ve[d.FIELDS.TYPE] === c.space && (me += this.requiredSpace(this.content(ve)), this.position++);
        }
        B = this.nextToken;
      }
      var fe = ne(me, ".").filter(function(I) {
        var Z = me[I - 1] === "\\", de = /^\d+\.\d+%$/.test(me);
        return !Z && !de;
      }), De = ne(me, "#").filter(function(I) {
        return me[I - 1] !== "\\";
      }), k = ne(me, "#{");
      k.length && (De = De.filter(function(I) {
        return !~k.indexOf(I);
      }));
      var v = (0, S.default)(ue([0].concat(fe, De)));
      v.forEach(function(I, Z) {
        var de = v[Z + 1] || me.length, ge = me.slice(I, de);
        if (Z === 0 && K)
          return K.call(ce, ge, v.length);
        var Fe, Ue = ce.currToken, lt = Ue[d.FIELDS.START_POS] + v[Z], Ie = Q(Ue[1], Ue[2] + I, Ue[3], Ue[2] + (de - 1));
        if (~fe.indexOf(I)) {
          var F = {
            value: ge.slice(1),
            source: Ie,
            sourceIndex: lt
          };
          Fe = new i.default(re(F, "value"));
        } else if (~De.indexOf(I)) {
          var G = {
            value: ge.slice(1),
            source: Ie,
            sourceIndex: lt
          };
          Fe = new s.default(re(G, "value"));
        } else {
          var et = {
            value: ge,
            source: Ie,
            sourceIndex: lt
          };
          re(et, "value"), Fe = new u.default(et);
        }
        ce.newNode(Fe, R), R = null;
      }), this.position++;
    }, ie.word = function(R) {
      var K = this.nextToken;
      return K && this.content(K) === "|" ? (this.position++, this.namespace()) : this.splitWord(R);
    }, ie.loop = function() {
      for (; this.position < this.tokens.length; )
        this.parse(!0);
      return this.current._inferEndPosition(), this.root;
    }, ie.parse = function(R) {
      switch (this.currToken[d.FIELDS.TYPE]) {
        case c.space:
          this.space();
          break;
        case c.comment:
          this.comment();
          break;
        case c.openParenthesis:
          this.parentheses();
          break;
        case c.closeParenthesis:
          R && this.missingParenthesis();
          break;
        case c.openSquare:
          this.attribute();
          break;
        case c.dollar:
        case c.caret:
        case c.equals:
        case c.word:
          this.word();
          break;
        case c.colon:
          this.pseudo();
          break;
        case c.comma:
          this.comma();
          break;
        case c.asterisk:
          this.universal();
          break;
        case c.ampersand:
          this.nesting();
          break;
        case c.slash:
        case c.combinator:
          this.combinator();
          break;
        case c.str:
          this.string();
          break;
        case c.closeSquare:
          this.missingSquareBracket();
        case c.semicolon:
          this.missingBackslash();
        default:
          this.unexpected();
      }
    }, ie.expected = function(R, K, ce) {
      if (Array.isArray(R)) {
        var B = R.pop();
        R = R.join(", ") + " or " + B;
      }
      var me = /^[aeiou]/.test(R[0]) ? "an" : "a";
      return ce ? this.error("Expected " + me + " " + R + ', found "' + ce + '" instead.', {
        index: K
      }) : this.error("Expected " + me + " " + R + ".", {
        index: K
      });
    }, ie.requiredSpace = function(R) {
      return this.options.lossy ? " " : R;
    }, ie.optionalSpace = function(R) {
      return this.options.lossy ? "" : R;
    }, ie.lossySpace = function(R, K) {
      return this.options.lossy ? K ? " " : "" : R;
    }, ie.parseParenthesisToken = function(R) {
      var K = this.content(R);
      return R[d.FIELDS.TYPE] === c.space ? this.requiredSpace(K) : K;
    }, ie.newNode = function(R, K) {
      return K && (/^ +$/.test(K) && (this.options.lossy || (this.spaces = (this.spaces || "") + K), K = !0), R.namespace = K, re(R, "namespace")), this.spaces && (R.spaces.before = this.spaces, this.spaces = ""), this.current.append(R);
    }, ie.content = function(R) {
      return R === void 0 && (R = this.currToken), this.css.slice(R[d.FIELDS.START_POS], R[d.FIELDS.END_POS]);
    }, ie.locateNextMeaningfulToken = function(R) {
      R === void 0 && (R = this.position + 1);
      for (var K = R; K < this.tokens.length; )
        if (z[this.tokens[K][d.FIELDS.TYPE]]) {
          K++;
          continue;
        } else
          return K;
      return -1;
    }, D(ee, [{
      key: "currToken",
      get: function() {
        return this.tokens[this.position];
      }
    }, {
      key: "nextToken",
      get: function() {
        return this.tokens[this.position + 1];
      }
    }, {
      key: "prevToken",
      get: function() {
        return this.tokens[this.position - 1];
      }
    }]), ee;
  }();
  t.default = Ae, e.exports = t.default;
})(Wi, Wi.exports);
var Nf = Wi.exports;
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = n(Nf);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = /* @__PURE__ */ function() {
    function a(u, o) {
      this.func = u || function() {
      }, this.funcRes = null, this.options = o;
    }
    var s = a.prototype;
    return s._shouldUpdateSelector = function(o, l) {
      l === void 0 && (l = {});
      var f = Object.assign({}, this.options, l);
      return f.updateSelector === !1 ? !1 : typeof o != "string";
    }, s._isLossy = function(o) {
      o === void 0 && (o = {});
      var l = Object.assign({}, this.options, o);
      return l.lossless === !1;
    }, s._root = function(o, l) {
      l === void 0 && (l = {});
      var f = new r.default(o, this._parseOptions(l));
      return f.root;
    }, s._parseOptions = function(o) {
      return {
        lossy: this._isLossy(o)
      };
    }, s._run = function(o, l) {
      var f = this;
      return l === void 0 && (l = {}), new Promise(function(m, p) {
        try {
          var E = f._root(o, l);
          Promise.resolve(f.func(E)).then(function(S) {
            var d = void 0;
            return f._shouldUpdateSelector(o, l) && (d = E.toString(), o.selector = d), {
              transform: S,
              root: E,
              string: d
            };
          }).then(m, p);
        } catch (S) {
          p(S);
          return;
        }
      });
    }, s._runSync = function(o, l) {
      l === void 0 && (l = {});
      var f = this._root(o, l), m = this.func(f);
      if (m && typeof m.then == "function")
        throw new Error("Selector processor returned a promise to a synchronous call.");
      var p = void 0;
      return l.updateSelector && typeof o != "string" && (p = f.toString(), o.selector = p), {
        transform: m,
        root: f,
        string: p
      };
    }, s.ast = function(o, l) {
      return this._run(o, l).then(function(f) {
        return f.root;
      });
    }, s.astSync = function(o, l) {
      return this._runSync(o, l).root;
    }, s.transform = function(o, l) {
      return this._run(o, l).then(function(f) {
        return f.transform;
      });
    }, s.transformSync = function(o, l) {
      return this._runSync(o, l).transform;
    }, s.process = function(o, l) {
      return this._run(o, l).then(function(f) {
        return f.string || f.root.toString();
      });
    }, s.processSync = function(o, l) {
      var f = this._runSync(o, l);
      return f.string || f.root.toString();
    }, a;
  }();
  t.default = i, e.exports = t.default;
})(Bi, Bi.exports);
var Af = Bi.exports, al = {}, ze = {};
ze.__esModule = !0;
ze.universal = ze.tag = ze.string = ze.selector = ze.root = ze.pseudo = ze.nesting = ze.id = ze.comment = ze.combinator = ze.className = ze.attribute = void 0;
var Rf = It(Ya), Ff = It($o), Yf = It(tl), Bf = It(Ko), Wf = It(Xo), Uf = It(rl), zf = It(Jo), Vf = It(qo), Hf = It(Go), jf = It(Zo), qf = It(Qo), Gf = It(el);
function It(e) {
  return e && e.__esModule ? e : { default: e };
}
var $f = function(t) {
  return new Rf.default(t);
};
ze.attribute = $f;
var Kf = function(t) {
  return new Ff.default(t);
};
ze.className = Kf;
var Xf = function(t) {
  return new Yf.default(t);
};
ze.combinator = Xf;
var Qf = function(t) {
  return new Bf.default(t);
};
ze.comment = Qf;
var Zf = function(t) {
  return new Wf.default(t);
};
ze.id = Zf;
var Jf = function(t) {
  return new Uf.default(t);
};
ze.nesting = Jf;
var eh = function(t) {
  return new zf.default(t);
};
ze.pseudo = eh;
var th = function(t) {
  return new Vf.default(t);
};
ze.root = th;
var rh = function(t) {
  return new Hf.default(t);
};
ze.selector = rh;
var nh = function(t) {
  return new jf.default(t);
};
ze.string = nh;
var ih = function(t) {
  return new qf.default(t);
};
ze.tag = ih;
var ah = function(t) {
  return new Gf.default(t);
};
ze.universal = ah;
var Re = {};
Re.__esModule = !0;
Re.isNode = Ba;
Re.isPseudoElement = ll;
Re.isPseudoClass = gh;
Re.isContainer = _h;
Re.isNamespace = vh;
Re.isUniversal = Re.isTag = Re.isString = Re.isSelector = Re.isRoot = Re.isPseudo = Re.isNesting = Re.isIdentifier = Re.isComment = Re.isCombinator = Re.isClassName = Re.isAttribute = void 0;
var Je = ke, _t, sh = (_t = {}, _t[Je.ATTRIBUTE] = !0, _t[Je.CLASS] = !0, _t[Je.COMBINATOR] = !0, _t[Je.COMMENT] = !0, _t[Je.ID] = !0, _t[Je.NESTING] = !0, _t[Je.PSEUDO] = !0, _t[Je.ROOT] = !0, _t[Je.SELECTOR] = !0, _t[Je.STRING] = !0, _t[Je.TAG] = !0, _t[Je.UNIVERSAL] = !0, _t);
function Ba(e) {
  return typeof e == "object" && sh[e.type];
}
function Pt(e, t) {
  return Ba(t) && t.type === e;
}
var sl = Pt.bind(null, Je.ATTRIBUTE);
Re.isAttribute = sl;
var oh = Pt.bind(null, Je.CLASS);
Re.isClassName = oh;
var lh = Pt.bind(null, Je.COMBINATOR);
Re.isCombinator = lh;
var uh = Pt.bind(null, Je.COMMENT);
Re.isComment = uh;
var ch = Pt.bind(null, Je.ID);
Re.isIdentifier = ch;
var dh = Pt.bind(null, Je.NESTING);
Re.isNesting = dh;
var Wa = Pt.bind(null, Je.PSEUDO);
Re.isPseudo = Wa;
var fh = Pt.bind(null, Je.ROOT);
Re.isRoot = fh;
var hh = Pt.bind(null, Je.SELECTOR);
Re.isSelector = hh;
var mh = Pt.bind(null, Je.STRING);
Re.isString = mh;
var ol = Pt.bind(null, Je.TAG);
Re.isTag = ol;
var ph = Pt.bind(null, Je.UNIVERSAL);
Re.isUniversal = ph;
function ll(e) {
  return Wa(e) && e.value && (e.value.startsWith("::") || e.value.toLowerCase() === ":before" || e.value.toLowerCase() === ":after" || e.value.toLowerCase() === ":first-letter" || e.value.toLowerCase() === ":first-line");
}
function gh(e) {
  return Wa(e) && !ll(e);
}
function _h(e) {
  return !!(Ba(e) && e.walk);
}
function vh(e) {
  return sl(e) || ol(e);
}
(function(e) {
  e.__esModule = !0;
  var t = ke;
  Object.keys(t).forEach(function(i) {
    i === "default" || i === "__esModule" || i in e && e[i] === t[i] || (e[i] = t[i]);
  });
  var r = ze;
  Object.keys(r).forEach(function(i) {
    i === "default" || i === "__esModule" || i in e && e[i] === r[i] || (e[i] = r[i]);
  });
  var n = Re;
  Object.keys(n).forEach(function(i) {
    i === "default" || i === "__esModule" || i in e && e[i] === n[i] || (e[i] = n[i]);
  });
})(al);
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = s(Af), n = a(al);
  function i() {
    if (typeof WeakMap != "function")
      return null;
    var l = /* @__PURE__ */ new WeakMap();
    return i = function() {
      return l;
    }, l;
  }
  function a(l) {
    if (l && l.__esModule)
      return l;
    if (l === null || typeof l != "object" && typeof l != "function")
      return { default: l };
    var f = i();
    if (f && f.has(l))
      return f.get(l);
    var m = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var E in l)
      if (Object.prototype.hasOwnProperty.call(l, E)) {
        var S = p ? Object.getOwnPropertyDescriptor(l, E) : null;
        S && (S.get || S.set) ? Object.defineProperty(m, E, S) : m[E] = l[E];
      }
    return m.default = l, f && f.set(l, m), m;
  }
  function s(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var u = function(f) {
    return new r.default(f);
  };
  Object.assign(u, n), delete u.__esModule;
  var o = u;
  t.default = o, e.exports = t.default;
})(Yi, Yi.exports);
var yh = Yi.exports;
const bh = Dd, ul = yh, wh = ul();
var kh = {
  isUsableColor(e, t) {
    return bh(t) && e !== "gray" && t[600];
  },
  /**
   * @param {string} selector
   */
  commonTrailingPseudos(e) {
    let t = wh.astSync(e), r = [];
    for (let [i, a] of t.nodes.entries())
      for (const [s, u] of [...a.nodes].reverse().entries()) {
        if (u.type !== "pseudo" || !u.value.startsWith("::"))
          break;
        r[s] = r[s] || [], r[s][i] = u;
      }
    let n = ul.selector();
    for (const i of r) {
      if (!i)
        continue;
      if ((/* @__PURE__ */ new Set([...i.map((s) => s.value)])).size > 1)
        break;
      i.forEach((s) => s.remove()), n.prepend(i[0]);
    }
    return n.nodes.length ? [n.toString(), t.toString()] : [null, e];
  }
};
const xh = Uo, Sh = hd, Th = gd, Oh = _d, { commonTrailingPseudos: Eh } = kh, Ps = {
  // Reserved for future "magic properties", for example:
  // bulletColor: (color) => ({ 'ul > li::before': { backgroundColor: color } }),
};
function sa(e, { className: t, modifier: r, prefix: n }) {
  let i = n(`.not-${t}`).slice(1), a = e.startsWith(">") ? `${r === "DEFAULT" ? `.${t}` : `.${t}-${r}`} ` : "", [s, u] = Eh(e);
  return s ? `:where(${a}${u}):not(:where([class~="${i}"] *))${s}` : `:where(${a}${e}):not(:where([class~="${i}"] *))`;
}
function Ls(e) {
  return typeof e == "object" && e !== null;
}
function Dh(e = {}, { target: t, className: r, modifier: n, prefix: i }) {
  function a(s, u) {
    return t === "legacy" ? [s, u] : Array.isArray(u) ? [s, u] : Ls(u) ? Object.values(u).some(Ls) ? [
      sa(s, { className: r, modifier: n, prefix: i }),
      u,
      Object.fromEntries(Object.entries(u).map(([l, f]) => a(l, f)))
    ] : [sa(s, { className: r, modifier: n, prefix: i }), u] : [s, u];
  }
  return Object.fromEntries(
    Object.entries(
      Sh(
        {},
        ...Object.keys(e).filter((s) => Ps[s]).map((s) => Ps[s](e[s])),
        ...Th(e.css || {})
      )
    ).map(([s, u]) => a(s, u))
  );
}
var Ch = xh.withOptions(
  ({ className: e = "prose", target: t = "modern" } = {}) => function({ addVariant: r, addComponents: n, theme: i, prefix: a }) {
    let s = i("typography"), u = { className: e, prefix: a };
    for (let [o, ...l] of [
      ["headings", "h1", "h2", "h3", "h4", "h5", "h6", "th"],
      ["h1"],
      ["h2"],
      ["h3"],
      ["h4"],
      ["h5"],
      ["h6"],
      ["p"],
      ["a"],
      ["blockquote"],
      ["figure"],
      ["figcaption"],
      ["strong"],
      ["em"],
      ["code"],
      ["pre"],
      ["ol"],
      ["ul"],
      ["li"],
      ["table"],
      ["thead"],
      ["tr"],
      ["th"],
      ["td"],
      ["img"],
      ["video"],
      ["hr"],
      ["lead", '[class~="lead"]']
    ]) {
      l = l.length === 0 ? [o] : l;
      let f = t === "legacy" ? l.map((m) => `& ${m}`) : l.join(", ");
      r(
        `${e}-${o}`,
        t === "legacy" ? f : `& :is(${sa(f, u)})`
      );
    }
    n(
      Object.keys(s).map((o) => ({
        [o === "DEFAULT" ? `.${e}` : `.${e}-${o}`]: Dh(
          s[o],
          {
            target: t,
            className: e,
            modifier: o,
            prefix: a
          }
        )
      }))
    );
  },
  () => ({
    theme: { typography: Oh }
  })
);
const Ih = /* @__PURE__ */ Kr(Ch), cl = {
  content: ["./src/**/*.{vue,js}", "./node_modules/paw/**/*.js"],
  darkMode: "class",
  safelist: [
    {
      /**
       * Regular expression to match dynamically generated class names
       * @link https://regex101.com/r/2iIIuJ/1
       * */
      pattern: /(?:\w*(?::\w*)*:)?(border|bg|text)-(?:(white|black)|(gray|action|success|warning|danger)-(\d{2,3}))/,
      variants: ["dark", "hover", "active"]
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...Cs.fontFamily.sans],
        mono: ["Roboto Mono", ...Cs.fontFamily.mono]
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "14px",
        lg: "16px",
        // DEFAULT
        xl: "20px",
        xxl: "24px",
        "icon-sm": "18px",
        "icon-md": "24px"
      },
      letterSpacing: {
        wider: "0.06em",
        widest: "0.08em"
      },
      typography: (e) => ({
        xs: {
          css: {
            fontSize: e("fontSize.xs"),
            lineHeight: "140%",
            letterSpacing: "0.04em",
            marginBlock: "0.8em"
          }
        },
        sm: {
          css: {
            fontSize: e("fontSize.sm"),
            lineHeight: "140%",
            letterSpacing: "0.02em",
            marginBlock: "0.8em"
          }
        },
        md: {
          css: {
            fontSize: e("fontSize.md"),
            lineHeight: "140%",
            letterSpacing: "0.02em",
            marginBlock: "0.8em"
          }
        },
        lg: {
          css: {
            fontSize: e("fontSize.lg"),
            lineHeight: "140%",
            letterSpacing: "0.01em",
            marginBlock: "0.8em"
          }
        },
        DEFAULT: {
          css: {
            color: e("colors.gray.900"),
            fontSize: e("fontSize.lg"),
            lineHeight: "140%",
            letterSpacing: "0.01em",
            marginBlock: "0.8em"
          }
        },
        xl: {
          css: {
            fontSize: e("fontSize.xl"),
            lineHeight: "120%",
            letterSpacing: "0",
            marginBlock: "0"
          }
        },
        xxl: {
          css: {
            fontSize: e("fontSize.xxl"),
            lineHeight: "120%",
            letterSpacing: "0",
            marginBlock: "0"
          }
        }
      }),
      colors: {
        gray: {
          // #FFFFFF   // bg-card, dark:text-primary
          50: "#F9FAFB",
          100: "#F3F4F6",
          // bg-body, bg-box
          200: "#E5E7EB",
          // icon-soft, card-border, dark:icon-primary
          300: "#D1D5DB",
          400: "#9CA3AF",
          // icon-secondary, dark:icon-secondary
          500: "#6B7280",
          // text-secondary, dark:text-secondary
          600: "#4B5563",
          // icon-primary
          700: "#374151",
          // dark:bg-box, dark:card-border
          800: "#1F2937",
          // dark:bg-card
          900: "#111827"
          // text-primary, dark:bg-body
        },
        action: {
          100: "#BFDEFF",
          200: "#80BDFF",
          300: "#409CFF",
          400: "#0A84FF",
          500: "#007BFF",
          600: "#0F6DCD",
          700: "#15569B",
          800: "#1A4069"
        },
        success: {
          100: "#BFF2D9",
          200: "#80E5B2",
          300: "#40D98C",
          400: "#00CC66",
          500: "#00BB66",
          600: "#049F56",
          700: "#097246",
          800: "#0D4537"
        },
        danger: {
          100: "#FFD2CF",
          200: "#FFA59F",
          300: "#FF7870",
          400: "#FF4B40",
          500: "#F64338",
          600: "#C43E3A",
          700: "#883133",
          800: "#883133"
        },
        warning: {
          100: "#FFF5C2",
          200: "#FFEA84",
          300: "#FFE047",
          400: "#FFD60A",
          500: "#FBC900",
          600: "#C4A611",
          700: "#887719",
          800: "#4D4720"
        }
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(160px, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(160px, 1fr))"
      },
      padding: {
        0.75: "3px",
        1.75: "7px",
        2.25: "9px",
        2.75: "11px",
        3.75: "15px",
        left: {
          0.75: "3px",
          1.75: "7px",
          2.25: "9px",
          2.75: "11px",
          3.75: "15px"
        },
        right: {
          0.75: "3px",
          1.75: "7px",
          2.25: "9px",
          2.75: "11px",
          3.75: "15px"
        },
        px: {
          0.75: "3px",
          1.75: "7px",
          2.25: "9px",
          2.75: "11px",
          3.75: "15px"
        },
        py: {
          0.75: "3px",
          1.75: "7px",
          2.25: "9px",
          2.75: "11px",
          3.75: "15px"
        }
      },
      margin: {
        0.75: "3px",
        1.75: "7px",
        2.25: "9px",
        2.75: "11px",
        3.75: "15px",
        left: {
          0.75: "3px",
          1.75: "7px",
          2.25: "9px",
          2.75: "11px",
          3.75: "15px"
        },
        right: {
          0.75: "3px",
          1.75: "7px",
          2.25: "9px",
          2.75: "11px",
          3.75: "15px"
        },
        mx: {
          0.75: "3px",
          1.75: "7px",
          2.25: "9px",
          2.75: "11px",
          3.75: "15px"
        },
        my: {
          0.75: "3px",
          1.75: "7px",
          2.25: "9px",
          2.75: "11px",
          3.75: "15px"
        }
      },
      borderWidth: {
        6: "6px"
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "18px"
      },
      boxShadow: {
        /*
         * Alpha hex codes
         * @link https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
         * 10%: 1A
         * 20%: 33
         * 25%: 40
         * */
        box: `0px 1px 4px ${dr.gray[800]}1A, 0px 4px 8px ${dr.gray[800]}33`,
        "box-dark": `0px 1px 4px ${dr.gray[900]}, 0px 4px 8px ${dr.gray[900]}`,
        card: `0px 2px 4px ${dr.gray[800]}1A, 0px 4px 12px ${dr.gray[800]}40`,
        "card-dark": "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 4px 12px rgba(0, 0, 0, 0.5)",
        "gray-200-border-b-full": `0 1px 0 0  ${dr.gray[200]}`,
        "gray-700-border-b-full": `0 1px 0 0  ${dr.gray[700]}`
      },
      transitionDuration: {
        DEFAULT: "250ms"
      },
      keyframes: {
        "pulse-in": {
          "0%": {
            opacity: ".25"
          },
          "100%": {
            opacity: ".5"
          }
        },
        "pulse-out": {
          "56%": {
            opacity: ".5"
          },
          "100%": {
            opacity: ".25"
          }
        }
      },
      animation: {
        loading: "1800ms cubic-bezier(0.6, -0.28, 0.735, 0.045) 0s infinite normal none running pulse-in,1800ms ease-in-out 0ms infinite normal none running pulse-out"
      },
      screens: {
        xs: "400px"
      }
    }
  },
  plugins: [
    Ih,
    /** Add dynamically content to :before and :after pseudo-elements
     * @source: https://github.com/tailwindlabs/tailwindcss/discussions/2119#discussioncomment-200587
     * **/
    Is(({ addVariant: e, e: t }) => {
      e("before", ({ modifySelectors: r, separator: n }) => {
        r(({ className: i }) => `.${t(`before${n}${i}`)}::before`);
      }), e("after", ({ modifySelectors: r, separator: n }) => {
        r(({ className: i }) => `.${t(`after${n}${i}`)}::after`);
      });
    }),
    Is(({ addUtilities: e }) => {
      e({
        ".content": {
          content: "attr(data-content)"
        },
        ".content_": {
          content: "attr(data-content) ' '"
        },
        ".content-before": {
          content: "attr(data-before)"
        },
        ".content-after": {
          content: "attr(data-after)"
        }
      }, ["before", "after"]);
    })
    /** End of pseudo-element content **/
  ]
}, nn = Fo(cl), Ph = {
  name: "PawColorSwatches",
  props: {
    bgColor: {
      type: Object,
      required: !0
    },
    bgColorDark: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      colors: {
        gray: nn.theme.colors.gray,
        action: nn.theme.colors.action,
        success: nn.theme.colors.success,
        danger: nn.theme.colors.danger,
        warning: nn.theme.colors.warning
      }
    };
  }
}, Lh = { class: "text-xl mb-4 text-gray-900 dark:text-white transition" }, Mh = { class: "grow w-[14ch] font-mono text-xs text-gray-500" };
function Nh(e, t, r, n, i, a) {
  return P(), W("div", {
    class: H(["p-4 xs:p-8 rounded-3xl grid grid-cols-auto-fit gap-4 transition", `bg-${r.bgColor.color} dark:bg-${r.bgColorDark.color}`])
  }, [
    (P(!0), W(tt, null, gt(i.colors, (s, u) => (P(), W("div", { key: u }, [
      te("h2", Lh, pe(u), 1),
      (P(!0), W(tt, null, gt(s, (o, l) => (P(), W("div", {
        key: l,
        class: "flex items-center gap-2 mb-3"
      }, [
        te("div", {
          class: H(["flex-auto w-24 h-12 rounded-xl", [
            `bg-${u}-${l}`,
            `${u}-${l}` === r.bgColor.color ? `border border-${r.bgColor.border}` : "",
            `${u}-${l}` === r.bgColorDark.color ? `border border-${r.bgColorDark.border}` : ""
          ]])
        }, null, 2),
        te("div", Mh, pe(l) + " (" + pe(o) + ")", 1)
      ]))), 128))
    ]))), 128))
  ], 2);
}
const nb = /* @__PURE__ */ ft(Ph, [["render", Nh]]);
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const _r = typeof window < "u";
let Tt, Pr;
if (process.env.NODE_ENV !== "production") {
  const e = _r && window.performance;
  e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (Tt = (t) => e.mark(t), Pr = (t, r, n) => {
    e.measure(t, r, n), e.clearMarks(r), e.clearMarks(n);
  });
}
const Ah = /\{([0-9a-zA-Z]+)\}/g;
function Kn(e, ...t) {
  return t.length === 1 && We(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Ah, (r, n) => t.hasOwnProperty(n) ? t[n] : "");
}
const Rh = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", lr = (e) => Rh ? Symbol(e) : e, Fh = (e, t, r) => Yh({ l: e, k: t, s: r }), Yh = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ct = (e) => typeof e == "number" && isFinite(e), Bh = (e) => za(e) === "[object Date]", qr = (e) => za(e) === "[object RegExp]", Xn = (e) => Ee(e) && Object.keys(e).length === 0;
function _n(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ut = Object.assign;
let Ms;
const ln = () => Ms || (Ms = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ns(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Wh = Object.prototype.hasOwnProperty;
function Ua(e, t) {
  return Wh.call(e, t);
}
const nt = Array.isArray, at = (e) => typeof e == "function", le = (e) => typeof e == "string", je = (e) => typeof e == "boolean", We = (e) => (
  // eslint-disable-line
  e !== null && typeof e == "object"
), dl = Object.prototype.toString, za = (e) => dl.call(e), Ee = (e) => za(e) === "[object Object]", Uh = (e) => e == null ? "" : nt(e) || Ee(e) && e.toString === dl ? JSON.stringify(e, null, 2) : String(e), As = 2;
function zh(e, t = 0, r = e.length) {
  const n = e.split(/\r?\n/);
  let i = 0;
  const a = [];
  for (let s = 0; s < n.length; s++)
    if (i += n[s].length + 1, i >= t) {
      for (let u = s - As; u <= s + As || r > i; u++) {
        if (u < 0 || u >= n.length)
          continue;
        const o = u + 1;
        a.push(`${o}${" ".repeat(3 - String(o).length)}|  ${n[u]}`);
        const l = n[u].length;
        if (u === s) {
          const f = t - (i - l) + 1, m = Math.max(1, r > i ? l - f : r - t);
          a.push("   |  " + " ".repeat(f) + "^".repeat(m));
        } else if (u > s) {
          if (r > i) {
            const f = Math.max(Math.min(r - i, l), 1);
            a.push("   |  " + "^".repeat(f));
          }
          i += l + 1;
        }
      }
      break;
    }
  return a.join(`
`);
}
function Vh() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(r, n) {
      const i = e.get(r);
      i && i.push(n) || e.set(r, [n]);
    },
    off(r, n) {
      const i = e.get(r);
      i && i.splice(i.indexOf(n) >>> 0, 1);
    },
    emit(r, n) {
      (e.get(r) || []).slice().map((i) => i(n)), (e.get("*") || []).slice().map((i) => i(r, n));
    }
  };
}
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const ye = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 15
}, Hh = {
  // tokenizer error messages
  [ye.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [ye.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [ye.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [ye.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [ye.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [ye.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [ye.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [ye.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [ye.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [ye.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [ye.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [ye.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [ye.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [ye.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'"
};
function Qn(e, t, r = {}) {
  const { domain: n, messages: i, args: a } = r, s = process.env.NODE_ENV !== "production" ? Kn((i || Hh)[e] || "", ...a || []) : e, u = new SyntaxError(String(s));
  return u.code = e, t && (u.location = t), u.domain = n, u;
}
function jh(e) {
  throw e;
}
function qh(e, t, r) {
  return { line: e, column: t, offset: r };
}
function oa(e, t, r) {
  const n = { start: e, end: t };
  return r != null && (n.source = r), n;
}
const Qt = " ", Gh = "\r", pt = `
`, $h = String.fromCharCode(8232), Kh = String.fromCharCode(8233);
function Xh(e) {
  const t = e;
  let r = 0, n = 1, i = 1, a = 0;
  const s = (A) => t[A] === Gh && t[A + 1] === pt, u = (A) => t[A] === pt, o = (A) => t[A] === Kh, l = (A) => t[A] === $h, f = (A) => s(A) || u(A) || o(A) || l(A), m = () => r, p = () => n, E = () => i, S = () => a, d = (A) => s(A) || o(A) || l(A) ? pt : t[A], c = () => d(r), g = () => d(r + a);
  function _() {
    return a = 0, f(r) && (n++, i = 0), s(r) && r++, r++, i++, t[r];
  }
  function w() {
    return s(r + a) && a++, a++, t[r + a];
  }
  function x() {
    r = 0, n = 1, i = 1, a = 0;
  }
  function b(A = 0) {
    a = A;
  }
  function C() {
    const A = r + a;
    for (; A !== r; )
      _();
    a = 0;
  }
  return {
    index: m,
    line: p,
    column: E,
    peekOffset: S,
    charAt: d,
    currentChar: c,
    currentPeek: g,
    next: _,
    peek: w,
    reset: x,
    resetPeek: b,
    skipToPeek: C
  };
}
const fr = void 0, Rs = "'", Qh = "tokenizer";
function Zh(e, t = {}) {
  const r = t.location !== !1, n = Xh(e), i = () => n.index(), a = () => qh(n.line(), n.column(), n.index()), s = a(), u = i(), o = {
    currentType: 14,
    offset: u,
    startLoc: s,
    endLoc: s,
    lastType: 14,
    lastOffset: u,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, l = () => o, { onError: f } = t;
  function m(k, v, I, ...Z) {
    const de = l();
    if (v.column += I, v.offset += I, f) {
      const ge = oa(de.startLoc, v), Fe = Qn(k, ge, {
        domain: Qh,
        args: Z
      });
      f(Fe);
    }
  }
  function p(k, v, I) {
    k.endLoc = a(), k.currentType = v;
    const Z = { type: v };
    return r && (Z.loc = oa(k.startLoc, k.endLoc)), I != null && (Z.value = I), Z;
  }
  const E = (k) => p(
    k,
    14
    /* EOF */
  );
  function S(k, v) {
    return k.currentChar() === v ? (k.next(), v) : (m(ye.EXPECTED_TOKEN, a(), 0, v), "");
  }
  function d(k) {
    let v = "";
    for (; k.currentPeek() === Qt || k.currentPeek() === pt; )
      v += k.currentPeek(), k.peek();
    return v;
  }
  function c(k) {
    const v = d(k);
    return k.skipToPeek(), v;
  }
  function g(k) {
    if (k === fr)
      return !1;
    const v = k.charCodeAt(0);
    return v >= 97 && v <= 122 || // a-z
    v >= 65 && v <= 90 || // A-Z
    v === 95;
  }
  function _(k) {
    if (k === fr)
      return !1;
    const v = k.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function w(k, v) {
    const { currentType: I } = v;
    if (I !== 2)
      return !1;
    d(k);
    const Z = g(k.currentPeek());
    return k.resetPeek(), Z;
  }
  function x(k, v) {
    const { currentType: I } = v;
    if (I !== 2)
      return !1;
    d(k);
    const Z = k.currentPeek() === "-" ? k.peek() : k.currentPeek(), de = _(Z);
    return k.resetPeek(), de;
  }
  function b(k, v) {
    const { currentType: I } = v;
    if (I !== 2)
      return !1;
    d(k);
    const Z = k.currentPeek() === Rs;
    return k.resetPeek(), Z;
  }
  function C(k, v) {
    const { currentType: I } = v;
    if (I !== 8)
      return !1;
    d(k);
    const Z = k.currentPeek() === ".";
    return k.resetPeek(), Z;
  }
  function A(k, v) {
    const { currentType: I } = v;
    if (I !== 9)
      return !1;
    d(k);
    const Z = g(k.currentPeek());
    return k.resetPeek(), Z;
  }
  function U(k, v) {
    const { currentType: I } = v;
    if (!(I === 8 || I === 12))
      return !1;
    d(k);
    const Z = k.currentPeek() === ":";
    return k.resetPeek(), Z;
  }
  function D(k, v) {
    const { currentType: I } = v;
    if (I !== 10)
      return !1;
    const Z = () => {
      const ge = k.currentPeek();
      return ge === "{" ? g(k.peek()) : ge === "@" || ge === "%" || ge === "|" || ge === ":" || ge === "." || ge === Qt || !ge ? !1 : ge === pt ? (k.peek(), Z()) : g(ge);
    }, de = Z();
    return k.resetPeek(), de;
  }
  function M(k) {
    d(k);
    const v = k.currentPeek() === "|";
    return k.resetPeek(), v;
  }
  function z(k) {
    const v = d(k), I = k.currentPeek() === "%" && k.peek() === "{";
    return k.resetPeek(), {
      isModulo: I,
      hasSpace: v.length > 0
    };
  }
  function Y(k, v = !0) {
    const I = (de = !1, ge = "", Fe = !1) => {
      const Ue = k.currentPeek();
      return Ue === "{" ? ge === "%" ? !1 : de : Ue === "@" || !Ue ? ge === "%" ? !0 : de : Ue === "%" ? (k.peek(), I(de, "%", !0)) : Ue === "|" ? ge === "%" || Fe ? !0 : !(ge === Qt || ge === pt) : Ue === Qt ? (k.peek(), I(!0, Qt, Fe)) : Ue === pt ? (k.peek(), I(!0, pt, Fe)) : !0;
    }, Z = I();
    return v && k.resetPeek(), Z;
  }
  function q(k, v) {
    const I = k.currentChar();
    return I === fr ? fr : v(I) ? (k.next(), I) : null;
  }
  function Q(k) {
    return q(k, (I) => {
      const Z = I.charCodeAt(0);
      return Z >= 97 && Z <= 122 || // a-z
      Z >= 65 && Z <= 90 || // A-Z
      Z >= 48 && Z <= 57 || // 0-9
      Z === 95 || // _
      Z === 36;
    });
  }
  function V(k) {
    return q(k, (I) => {
      const Z = I.charCodeAt(0);
      return Z >= 48 && Z <= 57;
    });
  }
  function L(k) {
    return q(k, (I) => {
      const Z = I.charCodeAt(0);
      return Z >= 48 && Z <= 57 || // 0-9
      Z >= 65 && Z <= 70 || // A-F
      Z >= 97 && Z <= 102;
    });
  }
  function re(k) {
    let v = "", I = "";
    for (; v = V(k); )
      I += v;
    return I;
  }
  function ne(k) {
    c(k);
    const v = k.currentChar();
    return v !== "%" && m(ye.EXPECTED_TOKEN, a(), 0, v), k.next(), "%";
  }
  function ue(k) {
    let v = "";
    for (; ; ) {
      const I = k.currentChar();
      if (I === "{" || I === "}" || I === "@" || I === "|" || !I)
        break;
      if (I === "%")
        if (Y(k))
          v += I, k.next();
        else
          break;
      else if (I === Qt || I === pt)
        if (Y(k))
          v += I, k.next();
        else {
          if (M(k))
            break;
          v += I, k.next();
        }
      else
        v += I, k.next();
    }
    return v;
  }
  function Ae(k) {
    c(k);
    let v = "", I = "";
    for (; v = Q(k); )
      I += v;
    return k.currentChar() === fr && m(ye.UNTERMINATED_CLOSING_BRACE, a(), 0), I;
  }
  function ee(k) {
    c(k);
    let v = "";
    return k.currentChar() === "-" ? (k.next(), v += `-${re(k)}`) : v += re(k), k.currentChar() === fr && m(ye.UNTERMINATED_CLOSING_BRACE, a(), 0), v;
  }
  function ie(k) {
    c(k), S(k, "'");
    let v = "", I = "";
    const Z = (ge) => ge !== Rs && ge !== pt;
    for (; v = q(k, Z); )
      v === "\\" ? I += j(k) : I += v;
    const de = k.currentChar();
    return de === pt || de === fr ? (m(ye.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), de === pt && (k.next(), S(k, "'")), I) : (S(k, "'"), I);
  }
  function j(k) {
    const v = k.currentChar();
    switch (v) {
      case "\\":
      case "'":
        return k.next(), `\\${v}`;
      case "u":
        return R(k, v, 4);
      case "U":
        return R(k, v, 6);
      default:
        return m(ye.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, v), "";
    }
  }
  function R(k, v, I) {
    S(k, v);
    let Z = "";
    for (let de = 0; de < I; de++) {
      const ge = L(k);
      if (!ge) {
        m(ye.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${v}${Z}${k.currentChar()}`);
        break;
      }
      Z += ge;
    }
    return `\\${v}${Z}`;
  }
  function K(k) {
    c(k);
    let v = "", I = "";
    const Z = (de) => de !== "{" && de !== "}" && de !== Qt && de !== pt;
    for (; v = q(k, Z); )
      I += v;
    return I;
  }
  function ce(k) {
    let v = "", I = "";
    for (; v = Q(k); )
      I += v;
    return I;
  }
  function B(k) {
    const v = (I = !1, Z) => {
      const de = k.currentChar();
      return de === "{" || de === "%" || de === "@" || de === "|" || !de || de === Qt ? Z : de === pt ? (Z += de, k.next(), v(I, Z)) : (Z += de, k.next(), v(!0, Z));
    };
    return v(!1, "");
  }
  function me(k) {
    c(k);
    const v = S(
      k,
      "|"
      /* Pipe */
    );
    return c(k), v;
  }
  function Se(k, v) {
    let I = null;
    switch (k.currentChar()) {
      case "{":
        return v.braceNest >= 1 && m(ye.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), k.next(), I = p(
          v,
          2,
          "{"
          /* BraceLeft */
        ), c(k), v.braceNest++, I;
      case "}":
        return v.braceNest > 0 && v.currentType === 2 && m(ye.EMPTY_PLACEHOLDER, a(), 0), k.next(), I = p(
          v,
          3,
          "}"
          /* BraceRight */
        ), v.braceNest--, v.braceNest > 0 && c(k), v.inLinked && v.braceNest === 0 && (v.inLinked = !1), I;
      case "@":
        return v.braceNest > 0 && m(ye.UNTERMINATED_CLOSING_BRACE, a(), 0), I = ve(k, v) || E(v), v.braceNest = 0, I;
      default:
        let de = !0, ge = !0, Fe = !0;
        if (M(k))
          return v.braceNest > 0 && m(ye.UNTERMINATED_CLOSING_BRACE, a(), 0), I = p(v, 1, me(k)), v.braceNest = 0, v.inLinked = !1, I;
        if (v.braceNest > 0 && (v.currentType === 5 || v.currentType === 6 || v.currentType === 7))
          return m(ye.UNTERMINATED_CLOSING_BRACE, a(), 0), v.braceNest = 0, fe(k, v);
        if (de = w(k, v))
          return I = p(v, 5, Ae(k)), c(k), I;
        if (ge = x(k, v))
          return I = p(v, 6, ee(k)), c(k), I;
        if (Fe = b(k, v))
          return I = p(v, 7, ie(k)), c(k), I;
        if (!de && !ge && !Fe)
          return I = p(v, 13, K(k)), m(ye.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, I.value), c(k), I;
        break;
    }
    return I;
  }
  function ve(k, v) {
    const { currentType: I } = v;
    let Z = null;
    const de = k.currentChar();
    switch ((I === 8 || I === 9 || I === 12 || I === 10) && (de === pt || de === Qt) && m(ye.INVALID_LINKED_FORMAT, a(), 0), de) {
      case "@":
        return k.next(), Z = p(
          v,
          8,
          "@"
          /* LinkedAlias */
        ), v.inLinked = !0, Z;
      case ".":
        return c(k), k.next(), p(
          v,
          9,
          "."
          /* LinkedDot */
        );
      case ":":
        return c(k), k.next(), p(
          v,
          10,
          ":"
          /* LinkedDelimiter */
        );
      default:
        return M(k) ? (Z = p(v, 1, me(k)), v.braceNest = 0, v.inLinked = !1, Z) : C(k, v) || U(k, v) ? (c(k), ve(k, v)) : A(k, v) ? (c(k), p(v, 12, ce(k))) : D(k, v) ? (c(k), de === "{" ? Se(k, v) || Z : p(v, 11, B(k))) : (I === 8 && m(ye.INVALID_LINKED_FORMAT, a(), 0), v.braceNest = 0, v.inLinked = !1, fe(k, v));
    }
  }
  function fe(k, v) {
    let I = {
      type: 14
      /* EOF */
    };
    if (v.braceNest > 0)
      return Se(k, v) || E(v);
    if (v.inLinked)
      return ve(k, v) || E(v);
    switch (k.currentChar()) {
      case "{":
        return Se(k, v) || E(v);
      case "}":
        return m(ye.UNBALANCED_CLOSING_BRACE, a(), 0), k.next(), p(
          v,
          3,
          "}"
          /* BraceRight */
        );
      case "@":
        return ve(k, v) || E(v);
      default:
        if (M(k))
          return I = p(v, 1, me(k)), v.braceNest = 0, v.inLinked = !1, I;
        const { isModulo: de, hasSpace: ge } = z(k);
        if (de)
          return ge ? p(v, 0, ue(k)) : p(v, 4, ne(k));
        if (Y(k))
          return p(v, 0, ue(k));
        break;
    }
    return I;
  }
  function De() {
    const { currentType: k, offset: v, startLoc: I, endLoc: Z } = o;
    return o.lastType = k, o.lastOffset = v, o.lastStartLoc = I, o.lastEndLoc = Z, o.offset = i(), o.startLoc = a(), n.currentChar() === fr ? p(
      o,
      14
      /* EOF */
    ) : fe(n, o);
  }
  return {
    nextToken: De,
    currentOffset: i,
    currentPosition: a,
    context: l
  };
}
const Jh = "parser", e0 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function t0(e, t, r) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const n = parseInt(t || r, 16);
      return n <= 55295 || n >= 57344 ? String.fromCodePoint(n) : "�";
    }
  }
}
function r0(e = {}) {
  const t = e.location !== !1, { onError: r } = e;
  function n(g, _, w, x, ...b) {
    const C = g.currentPosition();
    if (C.offset += x, C.column += x, r) {
      const A = oa(w, C), U = Qn(_, A, {
        domain: Jh,
        args: b
      });
      r(U);
    }
  }
  function i(g, _, w) {
    const x = {
      type: g,
      start: _,
      end: _
    };
    return t && (x.loc = { start: w, end: w }), x;
  }
  function a(g, _, w, x) {
    g.end = _, x && (g.type = x), t && g.loc && (g.loc.end = w);
  }
  function s(g, _) {
    const w = g.context(), x = i(3, w.offset, w.startLoc);
    return x.value = _, a(x, g.currentOffset(), g.currentPosition()), x;
  }
  function u(g, _) {
    const w = g.context(), { lastOffset: x, lastStartLoc: b } = w, C = i(5, x, b);
    return C.index = parseInt(_, 10), g.nextToken(), a(C, g.currentOffset(), g.currentPosition()), C;
  }
  function o(g, _) {
    const w = g.context(), { lastOffset: x, lastStartLoc: b } = w, C = i(4, x, b);
    return C.key = _, g.nextToken(), a(C, g.currentOffset(), g.currentPosition()), C;
  }
  function l(g, _) {
    const w = g.context(), { lastOffset: x, lastStartLoc: b } = w, C = i(9, x, b);
    return C.value = _.replace(e0, t0), g.nextToken(), a(C, g.currentOffset(), g.currentPosition()), C;
  }
  function f(g) {
    const _ = g.nextToken(), w = g.context(), { lastOffset: x, lastStartLoc: b } = w, C = i(8, x, b);
    return _.type !== 12 ? (n(g, ye.UNEXPECTED_EMPTY_LINKED_MODIFIER, w.lastStartLoc, 0), C.value = "", a(C, x, b), {
      nextConsumeToken: _,
      node: C
    }) : (_.value == null && n(g, ye.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Vt(_)), C.value = _.value || "", a(C, g.currentOffset(), g.currentPosition()), {
      node: C
    });
  }
  function m(g, _) {
    const w = g.context(), x = i(7, w.offset, w.startLoc);
    return x.value = _, a(x, g.currentOffset(), g.currentPosition()), x;
  }
  function p(g) {
    const _ = g.context(), w = i(6, _.offset, _.startLoc);
    let x = g.nextToken();
    if (x.type === 9) {
      const b = f(g);
      w.modifier = b.node, x = b.nextConsumeToken || g.nextToken();
    }
    switch (x.type !== 10 && n(g, ye.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Vt(x)), x = g.nextToken(), x.type === 2 && (x = g.nextToken()), x.type) {
      case 11:
        x.value == null && n(g, ye.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Vt(x)), w.key = m(g, x.value || "");
        break;
      case 5:
        x.value == null && n(g, ye.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Vt(x)), w.key = o(g, x.value || "");
        break;
      case 6:
        x.value == null && n(g, ye.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Vt(x)), w.key = u(g, x.value || "");
        break;
      case 7:
        x.value == null && n(g, ye.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Vt(x)), w.key = l(g, x.value || "");
        break;
      default:
        n(g, ye.UNEXPECTED_EMPTY_LINKED_KEY, _.lastStartLoc, 0);
        const b = g.context(), C = i(7, b.offset, b.startLoc);
        return C.value = "", a(C, b.offset, b.startLoc), w.key = C, a(w, b.offset, b.startLoc), {
          nextConsumeToken: x,
          node: w
        };
    }
    return a(w, g.currentOffset(), g.currentPosition()), {
      node: w
    };
  }
  function E(g) {
    const _ = g.context(), w = _.currentType === 1 ? g.currentOffset() : _.offset, x = _.currentType === 1 ? _.endLoc : _.startLoc, b = i(2, w, x);
    b.items = [];
    let C = null;
    do {
      const D = C || g.nextToken();
      switch (C = null, D.type) {
        case 0:
          D.value == null && n(g, ye.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Vt(D)), b.items.push(s(g, D.value || ""));
          break;
        case 6:
          D.value == null && n(g, ye.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Vt(D)), b.items.push(u(g, D.value || ""));
          break;
        case 5:
          D.value == null && n(g, ye.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Vt(D)), b.items.push(o(g, D.value || ""));
          break;
        case 7:
          D.value == null && n(g, ye.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Vt(D)), b.items.push(l(g, D.value || ""));
          break;
        case 8:
          const M = p(g);
          b.items.push(M.node), C = M.nextConsumeToken || null;
          break;
      }
    } while (_.currentType !== 14 && _.currentType !== 1);
    const A = _.currentType === 1 ? _.lastOffset : g.currentOffset(), U = _.currentType === 1 ? _.lastEndLoc : g.currentPosition();
    return a(b, A, U), b;
  }
  function S(g, _, w, x) {
    const b = g.context();
    let C = x.items.length === 0;
    const A = i(1, _, w);
    A.cases = [], A.cases.push(x);
    do {
      const U = E(g);
      C || (C = U.items.length === 0), A.cases.push(U);
    } while (b.currentType !== 14);
    return C && n(g, ye.MUST_HAVE_MESSAGES_IN_PLURAL, w, 0), a(A, g.currentOffset(), g.currentPosition()), A;
  }
  function d(g) {
    const _ = g.context(), { offset: w, startLoc: x } = _, b = E(g);
    return _.currentType === 14 ? b : S(g, w, x, b);
  }
  function c(g) {
    const _ = Zh(g, ut({}, e)), w = _.context(), x = i(0, w.offset, w.startLoc);
    return t && x.loc && (x.loc.source = g), x.body = d(_), w.currentType !== 14 && n(_, ye.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, g[w.offset] || ""), a(x, _.currentOffset(), _.currentPosition()), x;
  }
  return { parse: c };
}
function Vt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function n0(e, t = {}) {
  const r = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => r, helper: (a) => (r.helpers.add(a), a) };
}
function Fs(e, t) {
  for (let r = 0; r < e.length; r++)
    Va(e[r], t);
}
function Va(e, t) {
  switch (e.type) {
    case 1:
      Fs(e.cases, t), t.helper(
        "plural"
        /* PLURAL */
      );
      break;
    case 2:
      Fs(e.items, t);
      break;
    case 6:
      Va(e.key, t), t.helper(
        "linked"
        /* LINKED */
      ), t.helper(
        "type"
        /* TYPE */
      );
      break;
    case 5:
      t.helper(
        "interpolate"
        /* INTERPOLATE */
      ), t.helper(
        "list"
        /* LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* INTERPOLATE */
      ), t.helper(
        "named"
        /* NAMED */
      );
      break;
  }
}
function i0(e, t = {}) {
  const r = n0(e);
  r.helper(
    "normalize"
    /* NORMALIZE */
  ), e.body && Va(e.body, r);
  const n = r.context();
  e.helpers = Array.from(n.helpers);
}
function a0(e, t) {
  const { sourceMap: r, filename: n, breakLineCode: i, needIndent: a } = t, s = {
    source: e.loc.source,
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: i,
    needIndent: a,
    indentLevel: 0
  }, u = () => s;
  function o(d, c) {
    s.code += d;
  }
  function l(d, c = !0) {
    const g = c ? i : "";
    o(a ? g + "  ".repeat(d) : g);
  }
  function f(d = !0) {
    const c = ++s.indentLevel;
    d && l(c);
  }
  function m(d = !0) {
    const c = --s.indentLevel;
    d && l(c);
  }
  function p() {
    l(s.indentLevel);
  }
  return {
    context: u,
    push: o,
    indent: f,
    deindent: m,
    newline: p,
    helper: (d) => `_${d}`,
    needIndent: () => s.needIndent
  };
}
function s0(e, t) {
  const { helper: r } = e;
  e.push(`${r(
    "linked"
    /* LINKED */
  )}(`), Gr(e, t.key), t.modifier ? (e.push(", "), Gr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function o0(e, t) {
  const { helper: r, needIndent: n } = e;
  e.push(`${r(
    "normalize"
    /* NORMALIZE */
  )}([`), e.indent(n());
  const i = t.items.length;
  for (let a = 0; a < i && (Gr(e, t.items[a]), a !== i - 1); a++)
    e.push(", ");
  e.deindent(n()), e.push("])");
}
function l0(e, t) {
  const { helper: r, needIndent: n } = e;
  if (t.cases.length > 1) {
    e.push(`${r(
      "plural"
      /* PLURAL */
    )}([`), e.indent(n());
    const i = t.cases.length;
    for (let a = 0; a < i && (Gr(e, t.cases[a]), a !== i - 1); a++)
      e.push(", ");
    e.deindent(n()), e.push("])");
  }
}
function u0(e, t) {
  t.body ? Gr(e, t.body) : e.push("null");
}
function Gr(e, t) {
  const { helper: r } = e;
  switch (t.type) {
    case 0:
      u0(e, t);
      break;
    case 1:
      l0(e, t);
      break;
    case 2:
      o0(e, t);
      break;
    case 6:
      s0(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${r(
        "interpolate"
        /* INTERPOLATE */
      )}(${r(
        "list"
        /* LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${r(
        "interpolate"
        /* INTERPOLATE */
      )}(${r(
        "named"
        /* NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      if (process.env.NODE_ENV !== "production")
        throw new Error(`unhandled codegen node type: ${t.type}`);
  }
}
const c0 = (e, t = {}) => {
  const r = le(t.mode) ? t.mode : "normal", n = le(t.filename) ? t.filename : "message.intl", i = !!t.sourceMap, a = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : r !== "arrow", u = e.helpers || [], o = a0(e, {
    mode: r,
    filename: n,
    sourceMap: i,
    breakLineCode: a,
    needIndent: s
  });
  o.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), o.indent(s), u.length > 0 && (o.push(`const { ${u.map((m) => `${m}: _${m}`).join(", ")} } = ctx`), o.newline()), o.push("return "), Gr(o, e), o.deindent(s), o.push("}");
  const { code: l, map: f } = o.context();
  return {
    ast: e,
    code: l,
    map: f ? f.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function d0(e, t = {}) {
  const r = ut({}, t), i = r0(r).parse(e);
  return i0(i, r), c0(i, r);
}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const fl = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const br = [];
br[
  0
  /* BEFORE_PATH */
] = {
  w: [
    0
    /* BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* APPEND */
  ],
  [
    "["
    /* LEFT_BRACKET */
  ]: [
    4
    /* IN_SUB_PATH */
  ],
  o: [
    7
    /* AFTER_PATH */
  ]
};
br[
  1
  /* IN_PATH */
] = {
  w: [
    1
    /* IN_PATH */
  ],
  [
    "."
    /* DOT */
  ]: [
    2
    /* BEFORE_IDENT */
  ],
  [
    "["
    /* LEFT_BRACKET */
  ]: [
    4
    /* IN_SUB_PATH */
  ],
  o: [
    7
    /* AFTER_PATH */
  ]
};
br[
  2
  /* BEFORE_IDENT */
] = {
  w: [
    2
    /* BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* APPEND */
  ],
  [
    0
    /* ZERO */
  ]: [
    3,
    0
    /* APPEND */
  ]
};
br[
  3
  /* IN_IDENT */
] = {
  i: [
    3,
    0
    /* APPEND */
  ],
  [
    0
    /* ZERO */
  ]: [
    3,
    0
    /* APPEND */
  ],
  w: [
    1,
    1
    /* PUSH */
  ],
  [
    "."
    /* DOT */
  ]: [
    2,
    1
    /* PUSH */
  ],
  [
    "["
    /* LEFT_BRACKET */
  ]: [
    4,
    1
    /* PUSH */
  ],
  o: [
    7,
    1
    /* PUSH */
  ]
};
br[
  4
  /* IN_SUB_PATH */
] = {
  [
    "'"
    /* SINGLE_QUOTE */
  ]: [
    5,
    0
    /* APPEND */
  ],
  [
    '"'
    /* DOUBLE_QUOTE */
  ]: [
    6,
    0
    /* APPEND */
  ],
  [
    "["
    /* LEFT_BRACKET */
  ]: [
    4,
    2
    /* INC_SUB_PATH_DEPTH */
  ],
  [
    "]"
    /* RIGHT_BRACKET */
  ]: [
    1,
    3
    /* PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* APPEND */
  ]
};
br[
  5
  /* IN_SINGLE_QUOTE */
] = {
  [
    "'"
    /* SINGLE_QUOTE */
  ]: [
    4,
    0
    /* APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* APPEND */
  ]
};
br[
  6
  /* IN_DOUBLE_QUOTE */
] = {
  [
    '"'
    /* DOUBLE_QUOTE */
  ]: [
    4,
    0
    /* APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* APPEND */
  ]
};
const f0 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function h0(e) {
  return f0.test(e);
}
function m0(e) {
  const t = e.charCodeAt(0), r = e.charCodeAt(e.length - 1);
  return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function p0(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function g0(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : h0(t) ? m0(t) : "*" + t;
}
function _0(e) {
  const t = [];
  let r = -1, n = 0, i = 0, a, s, u, o, l, f, m;
  const p = [];
  p[
    0
    /* APPEND */
  ] = () => {
    s === void 0 ? s = u : s += u;
  }, p[
    1
    /* PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, p[
    2
    /* INC_SUB_PATH_DEPTH */
  ] = () => {
    p[
      0
      /* APPEND */
    ](), i++;
  }, p[
    3
    /* PUSH_SUB_PATH */
  ] = () => {
    if (i > 0)
      i--, n = 4, p[
        0
        /* APPEND */
      ]();
    else {
      if (i = 0, s === void 0 || (s = g0(s), s === !1))
        return !1;
      p[
        1
        /* PUSH */
      ]();
    }
  };
  function E() {
    const S = e[r + 1];
    if (n === 5 && S === "'" || n === 6 && S === '"')
      return r++, u = "\\" + S, p[
        0
        /* APPEND */
      ](), !0;
  }
  for (; n !== null; )
    if (r++, a = e[r], !(a === "\\" && E())) {
      if (o = p0(a), m = br[n], l = m[o] || m.l || 8, l === 8 || (n = l[0], l[1] !== void 0 && (f = p[l[1]], f && (u = a, f() === !1))))
        return;
      if (n === 7)
        return t;
    }
}
const Ys = /* @__PURE__ */ new Map();
function v0(e, t) {
  return We(e) ? e[t] : null;
}
function y0(e, t) {
  if (!We(e))
    return null;
  let r = Ys.get(t);
  if (r || (r = _0(t), r && Ys.set(t, r)), !r)
    return null;
  const n = r.length;
  let i = e, a = 0;
  for (; a < n; ) {
    const s = i[r[a]];
    if (s === void 0)
      return null;
    i = s, a++;
  }
  return i;
}
const b0 = (e) => e, w0 = (e) => "", k0 = "text", x0 = (e) => e.length === 0 ? "" : e.join(""), S0 = Uh;
function Bs(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function T0(e) {
  const t = ct(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ct(e.named.count) || ct(e.named.n)) ? ct(e.named.count) ? e.named.count : ct(e.named.n) ? e.named.n : t : t;
}
function O0(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function E0(e = {}) {
  const t = e.locale, r = T0(e), n = We(e.pluralRules) && le(t) && at(e.pluralRules[t]) ? e.pluralRules[t] : Bs, i = We(e.pluralRules) && le(t) && at(e.pluralRules[t]) ? Bs : void 0, a = (g) => g[n(r, g.length, i)], s = e.list || [], u = (g) => s[g], o = e.named || {};
  ct(e.pluralIndex) && O0(r, o);
  const l = (g) => o[g];
  function f(g) {
    const _ = at(e.messages) ? e.messages(g) : We(e.messages) ? e.messages[g] : !1;
    return _ || (e.parent ? e.parent.message(g) : w0);
  }
  const m = (g) => e.modifiers ? e.modifiers[g] : b0, p = Ee(e.processor) && at(e.processor.normalize) ? e.processor.normalize : x0, E = Ee(e.processor) && at(e.processor.interpolate) ? e.processor.interpolate : S0, S = Ee(e.processor) && le(e.processor.type) ? e.processor.type : k0, c = {
    list: u,
    named: l,
    plural: a,
    linked: (g, ..._) => {
      const [w, x] = _;
      let b = "text", C = "";
      _.length === 1 ? We(w) ? (C = w.modifier || C, b = w.type || b) : le(w) && (C = w || C) : _.length === 2 && (le(w) && (C = w || C), le(x) && (b = x || b));
      let A = f(g)(c);
      return b === "vnode" && nt(A) && C && (A = A[0]), C ? m(C)(A, b) : A;
    },
    message: f,
    type: S,
    interpolate: E,
    normalize: p
  };
  return c;
}
let fn = null;
function D0(e) {
  fn = e;
}
function C0(e, t, r) {
  fn && fn.emit(fl.I18nInit, {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: r
  });
}
const I0 = /* @__PURE__ */ P0(fl.FunctionTranslate);
function P0(e) {
  return (t) => fn && fn.emit(e, t);
}
const kt = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  __EXTEND_POINT__: 7
}, L0 = {
  [kt.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [kt.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [kt.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [kt.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [kt.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [kt.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale."
};
function $r(e, ...t) {
  return Kn(L0[e], ...t);
}
function M0(e, t, r) {
  return [.../* @__PURE__ */ new Set([
    r,
    ...nt(t) ? t : We(t) ? Object.keys(t) : le(t) ? [t] : [r]
  ])];
}
function hl(e, t, r) {
  const n = le(r) ? r : Jn, i = e;
  i.__localeChainCache || (i.__localeChainCache = /* @__PURE__ */ new Map());
  let a = i.__localeChainCache.get(n);
  if (!a) {
    a = [];
    let s = [r];
    for (; nt(s); )
      s = Ws(a, s, t);
    const u = nt(t) || !Ee(t) ? t : t.default ? t.default : null;
    s = le(u) ? [u] : u, nt(s) && Ws(a, s, !1), i.__localeChainCache.set(n, a);
  }
  return a;
}
function Ws(e, t, r) {
  let n = !0;
  for (let i = 0; i < t.length && je(n); i++) {
    const a = t[i];
    le(a) && (n = N0(e, t[i], r));
  }
  return n;
}
function N0(e, t, r) {
  let n;
  const i = t.split("-");
  do {
    const a = i.join("-");
    n = A0(e, a, r), i.splice(-1, 1);
  } while (i.length && n === !0);
  return n;
}
function A0(e, t, r) {
  let n = !1;
  if (!e.includes(t) && (n = !0, t)) {
    n = t[t.length - 1] !== "!";
    const i = t.replace(/!/g, "");
    e.push(i), (nt(r) || Ee(r)) && r[i] && (n = r[i]);
  }
  return n;
}
const R0 = "9.2.2", Zn = -1, Jn = "en-US", Rn = "", Us = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function F0() {
  return {
    upper: (e, t) => t === "text" && le(e) ? e.toUpperCase() : t === "vnode" && We(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && le(e) ? e.toLowerCase() : t === "vnode" && We(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && le(e) ? Us(e) : t === "vnode" && We(e) && "__v_isVNode" in e ? Us(e.children) : e
  };
}
let ml;
function Y0(e) {
  ml = e;
}
let pl;
function B0(e) {
  pl = e;
}
let gl;
function W0(e) {
  gl = e;
}
let _l = null;
const zs = (e) => {
  _l = e;
}, U0 = () => _l;
let vl = null;
const Vs = (e) => {
  vl = e;
}, z0 = () => vl;
let Hs = 0;
function V0(e = {}) {
  const t = le(e.version) ? e.version : R0, r = le(e.locale) ? e.locale : Jn, n = nt(e.fallbackLocale) || Ee(e.fallbackLocale) || le(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, i = Ee(e.messages) ? e.messages : { [r]: {} }, a = Ee(e.datetimeFormats) ? e.datetimeFormats : { [r]: {} }, s = Ee(e.numberFormats) ? e.numberFormats : { [r]: {} }, u = ut({}, e.modifiers || {}, F0()), o = e.pluralRules || {}, l = at(e.missing) ? e.missing : null, f = je(e.missingWarn) || qr(e.missingWarn) ? e.missingWarn : !0, m = je(e.fallbackWarn) || qr(e.fallbackWarn) ? e.fallbackWarn : !0, p = !!e.fallbackFormat, E = !!e.unresolving, S = at(e.postTranslation) ? e.postTranslation : null, d = Ee(e.processor) ? e.processor : null, c = je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, g = !!e.escapeParameter, _ = at(e.messageCompiler) ? e.messageCompiler : ml, w = at(e.messageResolver) ? e.messageResolver : pl || v0, x = at(e.localeFallbacker) ? e.localeFallbacker : gl || M0, b = We(e.fallbackContext) ? e.fallbackContext : void 0, C = at(e.onWarn) ? e.onWarn : _n, A = e, U = We(A.__datetimeFormatters) ? A.__datetimeFormatters : /* @__PURE__ */ new Map(), D = We(A.__numberFormatters) ? A.__numberFormatters : /* @__PURE__ */ new Map(), M = We(A.__meta) ? A.__meta : {};
  Hs++;
  const z = {
    version: t,
    cid: Hs,
    locale: r,
    fallbackLocale: n,
    messages: i,
    modifiers: u,
    pluralRules: o,
    missing: l,
    missingWarn: f,
    fallbackWarn: m,
    fallbackFormat: p,
    unresolving: E,
    postTranslation: S,
    processor: d,
    warnHtmlMessage: c,
    escapeParameter: g,
    messageCompiler: _,
    messageResolver: w,
    localeFallbacker: x,
    fallbackContext: b,
    onWarn: C,
    __meta: M
  };
  return z.datetimeFormats = a, z.numberFormats = s, z.__datetimeFormatters = U, z.__numberFormatters = D, process.env.NODE_ENV !== "production" && (z.__v_emitter = A.__v_emitter != null ? A.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && C0(z, t, M), z;
}
function ei(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function yl(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Ha(e, t, r, n, i) {
  const { missing: a, onWarn: s } = e;
  if (process.env.NODE_ENV !== "production") {
    const u = e.__v_emitter;
    u && u.emit("missing", {
      locale: r,
      key: t,
      type: i,
      groupId: `${i}:${t}`
    });
  }
  if (a !== null) {
    const u = a(e, r, t, i);
    return le(u) ? u : t;
  } else
    return process.env.NODE_ENV !== "production" && yl(n, t) && s($r(kt.NOT_FOUND_KEY, { key: t, locale: r })), t;
}
function an(e, t, r) {
  const n = e;
  n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, r, t);
}
const H0 = /<\/?[\w\s="/.':;#-\/]+>/, j0 = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function q0(e, t) {
  (je(t.warnHtmlMessage) ? t.warnHtmlMessage : !0) && H0.test(e) && _n(Kn(j0, { source: e }));
}
const G0 = (e) => e;
let js = /* @__PURE__ */ Object.create(null);
function $0(e, t = {}) {
  {
    process.env.NODE_ENV !== "production" && q0(e, t);
    const n = (t.onCacheKey || G0)(e), i = js[n];
    if (i)
      return i;
    let a = !1;
    const s = t.onError || jh;
    t.onError = (l) => {
      a = !0, s(l);
    };
    const { code: u } = d0(e, t), o = new Function(`return ${u}`)();
    return a ? o : js[n] = o;
  }
}
let bl = ye.__EXTEND_POINT__;
const Mi = () => ++bl, tr = {
  INVALID_ARGUMENT: bl,
  INVALID_DATE_ARGUMENT: Mi(),
  INVALID_ISO_DATE_ARGUMENT: Mi(),
  __EXTEND_POINT__: Mi()
  // 18
};
function Wr(e) {
  return Qn(e, null, process.env.NODE_ENV !== "production" ? { messages: K0 } : void 0);
}
const K0 = {
  [tr.INVALID_ARGUMENT]: "Invalid arguments",
  [tr.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [tr.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string"
}, qs = () => "", Ht = (e) => at(e);
function Gs(e, ...t) {
  const { fallbackFormat: r, postTranslation: n, unresolving: i, messageCompiler: a, fallbackLocale: s, messages: u } = e, [o, l] = la(...t), f = je(l.missingWarn) ? l.missingWarn : e.missingWarn, m = je(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, p = je(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, E = !!l.resolvedMessage, S = le(l.default) || je(l.default) ? je(l.default) ? a ? o : () => o : l.default : r ? a ? o : () => o : "", d = r || S !== "", c = le(l.locale) ? l.locale : e.locale;
  p && X0(l);
  let [g, _, w] = E ? [
    o,
    c,
    u[c] || {}
  ] : wl(e, o, c, s, m, f), x = g, b = o;
  if (!E && !(le(x) || Ht(x)) && d && (x = S, b = x), !E && (!(le(x) || Ht(x)) || !le(_)))
    return i ? Zn : o;
  if (process.env.NODE_ENV !== "production" && le(x) && e.messageCompiler == null)
    return _n(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${o}'.`), o;
  let C = !1;
  const A = () => {
    C = !0;
  }, U = Ht(x) ? x : kl(e, o, _, x, b, A);
  if (C)
    return x;
  const D = J0(e, _, w, l), M = E0(D), z = Q0(e, U, M), Y = n ? n(z, o) : z;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const q = {
      timestamp: Date.now(),
      key: le(o) ? o : Ht(x) ? x.key : "",
      locale: _ || (Ht(x) ? x.locale : ""),
      format: le(x) ? x : Ht(x) ? x.source : "",
      message: Y
    };
    q.meta = ut({}, e.__meta, U0() || {}), I0(q);
  }
  return Y;
}
function X0(e) {
  nt(e.list) ? e.list = e.list.map((t) => le(t) ? Ns(t) : t) : We(e.named) && Object.keys(e.named).forEach((t) => {
    le(e.named[t]) && (e.named[t] = Ns(e.named[t]));
  });
}
function wl(e, t, r, n, i, a) {
  const { messages: s, onWarn: u, messageResolver: o, localeFallbacker: l } = e, f = l(e, n, r);
  let m = {}, p, E = null, S = r, d = null;
  const c = "translate";
  for (let g = 0; g < f.length; g++) {
    if (p = d = f[g], process.env.NODE_ENV !== "production" && r !== p && ei(i, t) && u($r(kt.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: p
    })), process.env.NODE_ENV !== "production" && r !== p) {
      const C = e.__v_emitter;
      C && C.emit("fallback", {
        type: c,
        key: t,
        from: S,
        to: d,
        groupId: `${c}:${t}`
      });
    }
    m = s[p] || {};
    let _ = null, w, x;
    if (process.env.NODE_ENV !== "production" && _r && (_ = window.performance.now(), w = "intlify-message-resolve-start", x = "intlify-message-resolve-end", Tt && Tt(w)), (E = o(m, t)) === null && (E = m[t]), process.env.NODE_ENV !== "production" && _r) {
      const C = window.performance.now(), A = e.__v_emitter;
      A && _ && E && A.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: E,
        time: C - _,
        groupId: `${c}:${t}`
      }), w && x && Tt && Pr && (Tt(x), Pr("intlify message resolve", w, x));
    }
    if (le(E) || at(E))
      break;
    const b = Ha(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      p,
      a,
      c
    );
    b !== t && (E = b), S = d;
  }
  return [E, p, m];
}
function kl(e, t, r, n, i, a) {
  const { messageCompiler: s, warnHtmlMessage: u } = e;
  if (Ht(n)) {
    const p = n;
    return p.locale = p.locale || r, p.key = p.key || t, p;
  }
  if (s == null) {
    const p = () => n;
    return p.locale = r, p.key = t, p;
  }
  let o = null, l, f;
  process.env.NODE_ENV !== "production" && _r && (o = window.performance.now(), l = "intlify-message-compilation-start", f = "intlify-message-compilation-end", Tt && Tt(l));
  const m = s(n, Z0(e, r, i, n, u, a));
  if (process.env.NODE_ENV !== "production" && _r) {
    const p = window.performance.now(), E = e.__v_emitter;
    E && o && E.emit("message-compilation", {
      type: "message-compilation",
      message: n,
      time: p - o,
      groupId: `translate:${t}`
    }), l && f && Tt && Pr && (Tt(f), Pr("intlify message compilation", l, f));
  }
  return m.locale = r, m.key = t, m.source = n, m;
}
function Q0(e, t, r) {
  let n = null, i, a;
  process.env.NODE_ENV !== "production" && _r && (n = window.performance.now(), i = "intlify-message-evaluation-start", a = "intlify-message-evaluation-end", Tt && Tt(i));
  const s = t(r);
  if (process.env.NODE_ENV !== "production" && _r) {
    const u = window.performance.now(), o = e.__v_emitter;
    o && n && o.emit("message-evaluation", {
      type: "message-evaluation",
      value: s,
      time: u - n,
      groupId: `translate:${t.key}`
    }), i && a && Tt && Pr && (Tt(a), Pr("intlify message evaluation", i, a));
  }
  return s;
}
function la(...e) {
  const [t, r, n] = e, i = {};
  if (!le(t) && !ct(t) && !Ht(t))
    throw Wr(tr.INVALID_ARGUMENT);
  const a = ct(t) ? String(t) : (Ht(t), t);
  return ct(r) ? i.plural = r : le(r) ? i.default = r : Ee(r) && !Xn(r) ? i.named = r : nt(r) && (i.list = r), ct(n) ? i.plural = n : le(n) ? i.default = n : Ee(n) && ut(i, n), [a, i];
}
function Z0(e, t, r, n, i, a) {
  return {
    warnHtmlMessage: i,
    onError: (s) => {
      if (a && a(s), process.env.NODE_ENV !== "production") {
        const u = `Message compilation error: ${s.message}`, o = s.location && zh(n, s.location.start.offset, s.location.end.offset), l = e.__v_emitter;
        l && l.emit("compile-error", {
          message: n,
          error: s.message,
          start: s.location && s.location.start.offset,
          end: s.location && s.location.end.offset,
          groupId: `translate:${r}`
        }), console.error(o ? `${u}
${o}` : u);
      } else
        throw s;
    },
    onCacheKey: (s) => Fh(t, r, s)
  };
}
function J0(e, t, r, n) {
  const { modifiers: i, pluralRules: a, messageResolver: s, fallbackLocale: u, fallbackWarn: o, missingWarn: l, fallbackContext: f } = e, p = {
    locale: t,
    modifiers: i,
    pluralRules: a,
    messages: (E) => {
      let S = s(r, E);
      if (S == null && f) {
        const [, , d] = wl(f, E, t, u, o, l);
        S = s(d, E);
      }
      if (le(S)) {
        let d = !1;
        const g = kl(e, E, t, S, E, () => {
          d = !0;
        });
        return d ? qs : g;
      } else
        return Ht(S) ? S : qs;
    }
  };
  return e.processor && (p.processor = e.processor), n.list && (p.list = n.list), n.named && (p.named = n.named), ct(n.plural) && (p.pluralIndex = n.plural), p;
}
const $s = typeof Intl < "u", xl = {
  dateTimeFormat: $s && typeof Intl.DateTimeFormat < "u",
  numberFormat: $s && typeof Intl.NumberFormat < "u"
};
function Ks(e, ...t) {
  const { datetimeFormats: r, unresolving: n, fallbackLocale: i, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !xl.dateTimeFormat)
    return a($r(kt.CANNOT_FORMAT_DATE)), Rn;
  const [o, l, f, m] = ua(...t), p = je(f.missingWarn) ? f.missingWarn : e.missingWarn, E = je(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, S = !!f.part, d = le(f.locale) ? f.locale : e.locale, c = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    i,
    d
  );
  if (!le(o) || o === "")
    return new Intl.DateTimeFormat(d, m).format(l);
  let g = {}, _, w = null, x = d, b = null;
  const C = "datetime format";
  for (let D = 0; D < c.length; D++) {
    if (_ = b = c[D], process.env.NODE_ENV !== "production" && d !== _ && ei(E, o) && a($r(kt.FALLBACK_TO_DATE_FORMAT, {
      key: o,
      target: _
    })), process.env.NODE_ENV !== "production" && d !== _) {
      const M = e.__v_emitter;
      M && M.emit("fallback", {
        type: C,
        key: o,
        from: x,
        to: b,
        groupId: `${C}:${o}`
      });
    }
    if (g = r[_] || {}, w = g[o], Ee(w))
      break;
    Ha(e, o, _, p, C), x = b;
  }
  if (!Ee(w) || !le(_))
    return n ? Zn : o;
  let A = `${_}__${o}`;
  Xn(m) || (A = `${A}__${JSON.stringify(m)}`);
  let U = u.get(A);
  return U || (U = new Intl.DateTimeFormat(_, ut({}, w, m)), u.set(A, U)), S ? U.formatToParts(l) : U.format(l);
}
const Sl = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function ua(...e) {
  const [t, r, n, i] = e, a = {};
  let s = {}, u;
  if (le(t)) {
    const o = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!o)
      throw Wr(tr.INVALID_ISO_DATE_ARGUMENT);
    const l = o[3] ? o[3].trim().startsWith("T") ? `${o[1].trim()}${o[3].trim()}` : `${o[1].trim()}T${o[3].trim()}` : o[1].trim();
    u = new Date(l);
    try {
      u.toISOString();
    } catch {
      throw Wr(tr.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Bh(t)) {
    if (isNaN(t.getTime()))
      throw Wr(tr.INVALID_DATE_ARGUMENT);
    u = t;
  } else if (ct(t))
    u = t;
  else
    throw Wr(tr.INVALID_ARGUMENT);
  return le(r) ? a.key = r : Ee(r) && Object.keys(r).forEach((o) => {
    Sl.includes(o) ? s[o] = r[o] : a[o] = r[o];
  }), le(n) ? a.locale = n : Ee(n) && (s = n), Ee(i) && (s = i), [a.key || "", u, a, s];
}
function Xs(e, t, r) {
  const n = e;
  for (const i in r) {
    const a = `${t}__${i}`;
    n.__datetimeFormatters.has(a) && n.__datetimeFormatters.delete(a);
  }
}
function Qs(e, ...t) {
  const { numberFormats: r, unresolving: n, fallbackLocale: i, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !xl.numberFormat)
    return a($r(kt.CANNOT_FORMAT_NUMBER)), Rn;
  const [o, l, f, m] = ca(...t), p = je(f.missingWarn) ? f.missingWarn : e.missingWarn, E = je(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, S = !!f.part, d = le(f.locale) ? f.locale : e.locale, c = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    i,
    d
  );
  if (!le(o) || o === "")
    return new Intl.NumberFormat(d, m).format(l);
  let g = {}, _, w = null, x = d, b = null;
  const C = "number format";
  for (let D = 0; D < c.length; D++) {
    if (_ = b = c[D], process.env.NODE_ENV !== "production" && d !== _ && ei(E, o) && a($r(kt.FALLBACK_TO_NUMBER_FORMAT, {
      key: o,
      target: _
    })), process.env.NODE_ENV !== "production" && d !== _) {
      const M = e.__v_emitter;
      M && M.emit("fallback", {
        type: C,
        key: o,
        from: x,
        to: b,
        groupId: `${C}:${o}`
      });
    }
    if (g = r[_] || {}, w = g[o], Ee(w))
      break;
    Ha(e, o, _, p, C), x = b;
  }
  if (!Ee(w) || !le(_))
    return n ? Zn : o;
  let A = `${_}__${o}`;
  Xn(m) || (A = `${A}__${JSON.stringify(m)}`);
  let U = u.get(A);
  return U || (U = new Intl.NumberFormat(_, ut({}, w, m)), u.set(A, U)), S ? U.formatToParts(l) : U.format(l);
}
const Tl = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function ca(...e) {
  const [t, r, n, i] = e, a = {};
  let s = {};
  if (!ct(t))
    throw Wr(tr.INVALID_ARGUMENT);
  const u = t;
  return le(r) ? a.key = r : Ee(r) && Object.keys(r).forEach((o) => {
    Tl.includes(o) ? s[o] = r[o] : a[o] = r[o];
  }), le(n) ? a.locale = n : Ee(n) && (s = n), Ee(i) && (s = i), [a.key || "", u, a, s];
}
function Zs(e, t, r) {
  const n = e;
  for (const i in r) {
    const a = `${t}__${i}`;
    n.__numberFormatters.has(a) && n.__numberFormatters.delete(a);
  }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ln().__INTLIFY_PROD_DEVTOOLS__ = !1);
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const em = "9.2.2";
function tm() {
  let e = !1;
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (e = !0, ln().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (e = !0, ln().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ln().__INTLIFY_PROD_DEVTOOLS__ = !1), process.env.NODE_ENV !== "production" && e && console.warn("You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.");
}
let Ol = kt.__EXTEND_POINT__;
const Rr = () => ++Ol, Jt = {
  FALLBACK_TO_ROOT: Ol,
  NOT_SUPPORTED_PRESERVE: Rr(),
  NOT_SUPPORTED_FORMATTER: Rr(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: Rr(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: Rr(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: Rr(),
  NOT_FOUND_PARENT_SCOPE: Rr()
  // 13
}, rm = {
  [Jt.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [Jt.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [Jt.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [Jt.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [Jt.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [Jt.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [Jt.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope."
};
function El(e, ...t) {
  return Kn(rm[e], ...t);
}
let Dl = ye.__EXTEND_POINT__;
const vt = () => ++Dl, Xe = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Dl,
  // legacy module errors
  INVALID_ARGUMENT: vt(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: vt(),
  NOT_INSLALLED: vt(),
  NOT_AVAILABLE_IN_LEGACY_MODE: vt(),
  // directive module errors
  REQUIRED_VALUE: vt(),
  INVALID_VALUE: vt(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: vt(),
  NOT_INSLALLED_WITH_PROVIDE: vt(),
  // unexpected error
  UNEXPECTED_ERROR: vt(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: vt(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: vt(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: vt(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: vt(),
  // for enhancement
  __EXTEND_POINT__: vt()
  // 29
};
function ar(e, ...t) {
  return Qn(e, null, process.env.NODE_ENV !== "production" ? { messages: nm, args: t } : void 0);
}
const nm = {
  [Xe.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [Xe.INVALID_ARGUMENT]: "Invalid argument",
  [Xe.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [Xe.NOT_INSLALLED]: "Need to install with `app.use` function",
  [Xe.UNEXPECTED_ERROR]: "Unexpected error",
  [Xe.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [Xe.REQUIRED_VALUE]: "Required in value: {0}",
  [Xe.INVALID_VALUE]: "Invalid value",
  [Xe.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [Xe.NOT_INSLALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [Xe.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [Xe.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [Xe.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [Xe.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, da = /* @__PURE__ */ lr("__transrateVNode"), fa = /* @__PURE__ */ lr("__datetimeParts"), ha = /* @__PURE__ */ lr("__numberParts"), ma = /* @__PURE__ */ lr("__enableEmitter"), pa = /* @__PURE__ */ lr("__disableEmitter"), im = lr("__setPluralRules");
lr("__intlifyMeta");
const Cl = /* @__PURE__ */ lr("__injectWithOption");
function ga(e) {
  if (!We(e))
    return e;
  for (const t in e)
    if (Ua(e, t))
      if (!t.includes("."))
        We(e[t]) && ga(e[t]);
      else {
        const r = t.split("."), n = r.length - 1;
        let i = e;
        for (let a = 0; a < n; a++)
          r[a] in i || (i[r[a]] = {}), i = i[r[a]];
        i[r[n]] = e[t], delete e[t], We(i[r[n]]) && ga(i[r[n]]);
      }
  return e;
}
function ja(e, t) {
  const { messages: r, __i18n: n, messageResolver: i, flatJson: a } = t, s = Ee(r) ? r : nt(n) ? {} : { [e]: {} };
  if (nt(n) && n.forEach((u) => {
    if ("locale" in u && "resource" in u) {
      const { locale: o, resource: l } = u;
      o ? (s[o] = s[o] || {}, un(l, s[o])) : un(l, s);
    } else
      le(u) && un(JSON.parse(u), s);
  }), i == null && a)
    for (const u in s)
      Ua(s, u) && ga(s[u]);
  return s;
}
const Cn = (e) => !We(e) || nt(e);
function un(e, t) {
  if (Cn(e) || Cn(t))
    throw ar(Xe.INVALID_VALUE);
  for (const r in e)
    Ua(e, r) && (Cn(e[r]) || Cn(t[r]) ? t[r] = e[r] : un(e[r], t[r]));
}
function Il(e) {
  return e.type;
}
function am(e, t, r) {
  let n = We(t.messages) ? t.messages : {};
  "__i18nGlobal" in r && (n = ja(e.locale.value, {
    messages: n,
    __i18n: r.__i18nGlobal
  }));
  const i = Object.keys(n);
  i.length && i.forEach((a) => {
    e.mergeLocaleMessage(a, n[a]);
  });
  {
    if (We(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (We(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function Js(e) {
  return Qe(Fc, null, e, 0);
}
const eo = "__INTLIFY_META__";
let to = 0;
function ro(e) {
  return (t, r, n, i) => e(r, n, Oa() || void 0, i);
}
const sm = () => {
  const e = Oa();
  let t = null;
  return e && (t = Il(e)[eo]) ? { [eo]: t } : null;
};
function om(e = {}, t) {
  const { __root: r } = e, n = r === void 0;
  let i = je(e.inheritLocale) ? e.inheritLocale : !0;
  const a = ot(
    // prettier-ignore
    r && i ? r.locale.value : le(e.locale) ? e.locale : Jn
  ), s = ot(
    // prettier-ignore
    r && i ? r.fallbackLocale.value : le(e.fallbackLocale) || nt(e.fallbackLocale) || Ee(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a.value
  ), u = ot(ja(a.value, e)), o = ot(Ee(e.datetimeFormats) ? e.datetimeFormats : { [a.value]: {} }), l = ot(Ee(e.numberFormats) ? e.numberFormats : { [a.value]: {} });
  let f = r ? r.missingWarn : je(e.missingWarn) || qr(e.missingWarn) ? e.missingWarn : !0, m = r ? r.fallbackWarn : je(e.fallbackWarn) || qr(e.fallbackWarn) ? e.fallbackWarn : !0, p = r ? r.fallbackRoot : je(e.fallbackRoot) ? e.fallbackRoot : !0, E = !!e.fallbackFormat, S = at(e.missing) ? e.missing : null, d = at(e.missing) ? ro(e.missing) : null, c = at(e.postTranslation) ? e.postTranslation : null, g = r ? r.warnHtmlMessage : je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, _ = !!e.escapeParameter;
  const w = r ? r.modifiers : Ee(e.modifiers) ? e.modifiers : {};
  let x = e.pluralRules || r && r.pluralRules, b;
  b = (() => {
    n && Vs(null);
    const F = {
      version: em,
      locale: a.value,
      fallbackLocale: s.value,
      messages: u.value,
      modifiers: w,
      pluralRules: x,
      missing: d === null ? void 0 : d,
      missingWarn: f,
      fallbackWarn: m,
      fallbackFormat: E,
      unresolving: !0,
      postTranslation: c === null ? void 0 : c,
      warnHtmlMessage: g,
      escapeParameter: _,
      messageResolver: e.messageResolver,
      __meta: { framework: "vue" }
    };
    F.datetimeFormats = o.value, F.numberFormats = l.value, F.__datetimeFormatters = Ee(b) ? b.__datetimeFormatters : void 0, F.__numberFormatters = Ee(b) ? b.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (F.__v_emitter = Ee(b) ? b.__v_emitter : void 0);
    const G = V0(F);
    return n && Vs(G), G;
  })(), an(b, a.value, s.value);
  function A() {
    return [
      a.value,
      s.value,
      u.value,
      o.value,
      l.value
    ];
  }
  const U = Rt({
    get: () => a.value,
    set: (F) => {
      a.value = F, b.locale = a.value;
    }
  }), D = Rt({
    get: () => s.value,
    set: (F) => {
      s.value = F, b.fallbackLocale = s.value, an(b, a.value, F);
    }
  }), M = Rt(() => u.value), z = /* @__PURE__ */ Rt(() => o.value), Y = /* @__PURE__ */ Rt(() => l.value);
  function q() {
    return at(c) ? c : null;
  }
  function Q(F) {
    c = F, b.postTranslation = F;
  }
  function V() {
    return S;
  }
  function L(F) {
    F !== null && (d = ro(F)), S = F, b.missing = d;
  }
  function re(F, G) {
    return F !== "translate" || !G.resolvedMessage;
  }
  const ne = (F, G, et, it, kr, Nt) => {
    A();
    let At;
    if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__)
      try {
        zs(sm()), n || (b.fallbackContext = r ? z0() : void 0), At = F(b);
      } finally {
        zs(null), n || (b.fallbackContext = void 0);
      }
    else
      At = F(b);
    if (ct(At) && At === Zn) {
      const [Et, Mr] = G();
      if (process.env.NODE_ENV !== "production" && r && le(Et) && re(et, Mr) && (p && (ei(m, Et) || yl(f, Et)) && _n(El(Jt.FALLBACK_TO_ROOT, {
        key: Et,
        type: et
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Jr } = b;
        Jr && p && Jr.emit("fallback", {
          type: et,
          key: Et,
          to: "global",
          groupId: `${et}:${Et}`
        });
      }
      return r && p ? it(r) : kr(Et);
    } else {
      if (Nt(At))
        return At;
      throw ar(Xe.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ue(...F) {
    return ne((G) => Reflect.apply(Gs, null, [G, ...F]), () => la(...F), "translate", (G) => Reflect.apply(G.t, G, [...F]), (G) => G, (G) => le(G));
  }
  function Ae(...F) {
    const [G, et, it] = F;
    if (it && !We(it))
      throw ar(Xe.INVALID_ARGUMENT);
    return ue(G, et, ut({ resolvedMessage: !0 }, it || {}));
  }
  function ee(...F) {
    return ne((G) => Reflect.apply(Ks, null, [G, ...F]), () => ua(...F), "datetime format", (G) => Reflect.apply(G.d, G, [...F]), () => Rn, (G) => le(G));
  }
  function ie(...F) {
    return ne((G) => Reflect.apply(Qs, null, [G, ...F]), () => ca(...F), "number format", (G) => Reflect.apply(G.n, G, [...F]), () => Rn, (G) => le(G));
  }
  function j(F) {
    return F.map((G) => le(G) || ct(G) || je(G) ? Js(String(G)) : G);
  }
  const K = {
    normalize: j,
    interpolate: (F) => F,
    type: "vnode"
  };
  function ce(...F) {
    return ne(
      (G) => {
        let et;
        const it = G;
        try {
          it.processor = K, et = Reflect.apply(Gs, null, [it, ...F]);
        } finally {
          it.processor = null;
        }
        return et;
      },
      () => la(...F),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (G) => G[da](...F),
      (G) => [Js(G)],
      (G) => nt(G)
    );
  }
  function B(...F) {
    return ne(
      (G) => Reflect.apply(Qs, null, [G, ...F]),
      () => ca(...F),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (G) => G[ha](...F),
      () => [],
      (G) => le(G) || nt(G)
    );
  }
  function me(...F) {
    return ne(
      (G) => Reflect.apply(Ks, null, [G, ...F]),
      () => ua(...F),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (G) => G[fa](...F),
      () => [],
      (G) => le(G) || nt(G)
    );
  }
  function Se(F) {
    x = F, b.pluralRules = x;
  }
  function ve(F, G) {
    const et = le(G) ? G : a.value, it = k(et);
    return b.messageResolver(it, F) !== null;
  }
  function fe(F) {
    let G = null;
    const et = hl(b, s.value, a.value);
    for (let it = 0; it < et.length; it++) {
      const kr = u.value[et[it]] || {}, Nt = b.messageResolver(kr, F);
      if (Nt != null) {
        G = Nt;
        break;
      }
    }
    return G;
  }
  function De(F) {
    const G = fe(F);
    return G ?? (r ? r.tm(F) || {} : {});
  }
  function k(F) {
    return u.value[F] || {};
  }
  function v(F, G) {
    u.value[F] = G, b.messages = u.value;
  }
  function I(F, G) {
    u.value[F] = u.value[F] || {}, un(G, u.value[F]), b.messages = u.value;
  }
  function Z(F) {
    return o.value[F] || {};
  }
  function de(F, G) {
    o.value[F] = G, b.datetimeFormats = o.value, Xs(b, F, G);
  }
  function ge(F, G) {
    o.value[F] = ut(o.value[F] || {}, G), b.datetimeFormats = o.value, Xs(b, F, G);
  }
  function Fe(F) {
    return l.value[F] || {};
  }
  function Ue(F, G) {
    l.value[F] = G, b.numberFormats = l.value, Zs(b, F, G);
  }
  function lt(F, G) {
    l.value[F] = ut(l.value[F] || {}, G), b.numberFormats = l.value, Zs(b, F, G);
  }
  to++, r && _r && (Ds(r.locale, (F) => {
    i && (a.value = F, b.locale = F, an(b, a.value, s.value));
  }), Ds(r.fallbackLocale, (F) => {
    i && (s.value = F, b.fallbackLocale = F, an(b, a.value, s.value));
  }));
  const Ie = {
    id: to,
    locale: U,
    fallbackLocale: D,
    get inheritLocale() {
      return i;
    },
    set inheritLocale(F) {
      i = F, F && r && (a.value = r.locale.value, s.value = r.fallbackLocale.value, an(b, a.value, s.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: M,
    get modifiers() {
      return w;
    },
    get pluralRules() {
      return x || {};
    },
    get isGlobal() {
      return n;
    },
    get missingWarn() {
      return f;
    },
    set missingWarn(F) {
      f = F, b.missingWarn = f;
    },
    get fallbackWarn() {
      return m;
    },
    set fallbackWarn(F) {
      m = F, b.fallbackWarn = m;
    },
    get fallbackRoot() {
      return p;
    },
    set fallbackRoot(F) {
      p = F;
    },
    get fallbackFormat() {
      return E;
    },
    set fallbackFormat(F) {
      E = F, b.fallbackFormat = E;
    },
    get warnHtmlMessage() {
      return g;
    },
    set warnHtmlMessage(F) {
      g = F, b.warnHtmlMessage = F;
    },
    get escapeParameter() {
      return _;
    },
    set escapeParameter(F) {
      _ = F, b.escapeParameter = F;
    },
    t: ue,
    getLocaleMessage: k,
    setLocaleMessage: v,
    mergeLocaleMessage: I,
    getPostTranslationHandler: q,
    setPostTranslationHandler: Q,
    getMissingHandler: V,
    setMissingHandler: L,
    [im]: Se
  };
  return Ie.datetimeFormats = z, Ie.numberFormats = Y, Ie.rt = Ae, Ie.te = ve, Ie.tm = De, Ie.d = ee, Ie.n = ie, Ie.getDateTimeFormat = Z, Ie.setDateTimeFormat = de, Ie.mergeDateTimeFormat = ge, Ie.getNumberFormat = Fe, Ie.setNumberFormat = Ue, Ie.mergeNumberFormat = lt, Ie[Cl] = e.__injectWithOption, Ie[da] = ce, Ie[fa] = me, Ie[ha] = B, process.env.NODE_ENV !== "production" && (Ie[ma] = (F) => {
    b.__v_emitter = F;
  }, Ie[pa] = () => {
    b.__v_emitter = void 0;
  }), Ie;
}
const qa = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponetI18nScope */
  },
  i18n: {
    type: Object
  }
};
function lm({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, i) => n = [
    ...n,
    ...nt(i.children) ? i.children : [i]
  ], []) : t.reduce((r, n) => {
    const i = e[n];
    return i && (r[n] = i()), r;
  }, {});
}
function Pl(e) {
  return tt;
}
ut({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => ct(e) || !isNaN(e)
  }
}, qa);
function um(e) {
  return nt(e) && !le(e[0]);
}
function Ll(e, t, r, n) {
  const { slots: i, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let u = {};
    e.locale && (s.locale = e.locale), le(e.format) ? s.key = e.format : We(e.format) && (le(e.format.key) && (s.key = e.format.key), u = Object.keys(e.format).reduce((p, E) => r.includes(E) ? ut({}, p, { [E]: e.format[E] }) : p, {}));
    const o = n(e.value, s, u);
    let l = [s.key];
    nt(o) ? l = o.map((p, E) => {
      const S = i[p.type], d = S ? S({ [p.type]: p.value, index: E, parts: o }) : [p.value];
      return um(d) && (d[0].key = `${p.type}-${E}`), d;
    }) : le(o) && (l = [o]);
    const f = ut({}, a), m = le(e.tag) || We(e.tag) ? e.tag : Pl();
    return po(m, f, l);
  };
}
ut({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, qa);
ut({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, qa);
function no(e, t) {
}
const cm = /* @__PURE__ */ lr("global-vue-i18n");
function Xr(e = {}) {
  const t = Oa();
  if (t == null)
    throw ar(Xe.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw ar(Xe.NOT_INSLALLED);
  const r = dm(t), n = hm(r), i = Il(t), a = fm(e, i);
  if (__VUE_I18N_LEGACY_API__ && r.mode === "legacy" && !e.__useComponent) {
    if (!r.allowComposition)
      throw ar(Xe.NOT_AVAILABLE_IN_LEGACY_MODE);
    return gm(t, a, n, e);
  }
  if (a === "global")
    return am(n, e, i), n;
  if (a === "parent") {
    let o = mm(r, t, e.__useComponent);
    return o == null && (process.env.NODE_ENV !== "production" && _n(El(Jt.NOT_FOUND_PARENT_SCOPE)), o = n), o;
  }
  const s = r;
  let u = s.__getInstance(t);
  if (u == null) {
    const o = ut({}, e);
    "__i18n" in i && (o.__i18n = i.__i18n), n && (o.__root = n), u = om(o), pm(s, t, u), s.__setInstance(t, u);
  }
  return u;
}
function dm(e) {
  {
    const t = Lc(e.isCE ? cm : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw ar(e.isCE ? Xe.NOT_INSLALLED_WITH_PROVIDE : Xe.UNEXPECTED_ERROR);
    return t;
  }
}
function fm(e, t) {
  return Xn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function hm(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function mm(e, t, r = !1) {
  let n = null;
  const i = t.root;
  let a = t.parent;
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      n = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const u = s.__getInstance(a);
      u != null && (n = u.__composer, r && n && !n[Cl] && (n = null));
    }
    if (n != null || i === a)
      break;
    a = a.parent;
  }
  return n;
}
function pm(e, t, r) {
  let n = null;
  Mc(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = r, n = Vh();
      const i = r;
      i[ma] && i[ma](n), n.on("*", no);
    }
  }, t), Nc(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__) {
      n && n.off("*", no);
      const i = r;
      i[pa] && i[pa](), delete t.vnode.el.__VUE_I18N__;
    }
    e.__deleteInstance(t);
  }, t);
}
function gm(e, t, r, n = {}) {
  const i = t === "local", a = Ac(null);
  if (i && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw ar(Xe.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const s = je(n.inheritLocale) ? n.inheritLocale : !0, u = ot(
    // prettier-ignore
    i && s ? r.locale.value : le(n.locale) ? n.locale : Jn
  ), o = ot(
    // prettier-ignore
    i && s ? r.fallbackLocale.value : le(n.fallbackLocale) || nt(n.fallbackLocale) || Ee(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : u.value
  ), l = ot(ja(u.value, n)), f = ot(Ee(n.datetimeFormats) ? n.datetimeFormats : { [u.value]: {} }), m = ot(Ee(n.numberFormats) ? n.numberFormats : { [u.value]: {} }), p = i ? r.missingWarn : je(n.missingWarn) || qr(n.missingWarn) ? n.missingWarn : !0, E = i ? r.fallbackWarn : je(n.fallbackWarn) || qr(n.fallbackWarn) ? n.fallbackWarn : !0, S = i ? r.fallbackRoot : je(n.fallbackRoot) ? n.fallbackRoot : !0, d = !!n.fallbackFormat, c = at(n.missing) ? n.missing : null, g = at(n.postTranslation) ? n.postTranslation : null, _ = i ? r.warnHtmlMessage : je(n.warnHtmlMessage) ? n.warnHtmlMessage : !0, w = !!n.escapeParameter, x = i ? r.modifiers : Ee(n.modifiers) ? n.modifiers : {}, b = n.pluralRules || i && r.pluralRules;
  function C() {
    return [
      u.value,
      o.value,
      l.value,
      f.value,
      m.value
    ];
  }
  const A = Rt({
    get: () => a.value ? a.value.locale.value : u.value,
    set: (v) => {
      a.value && (a.value.locale.value = v), u.value = v;
    }
  }), U = Rt({
    get: () => a.value ? a.value.fallbackLocale.value : o.value,
    set: (v) => {
      a.value && (a.value.fallbackLocale.value = v), o.value = v;
    }
  }), D = Rt(() => a.value ? a.value.messages.value : l.value), M = Rt(() => f.value), z = Rt(() => m.value);
  function Y() {
    return a.value ? a.value.getPostTranslationHandler() : g;
  }
  function q(v) {
    a.value && a.value.setPostTranslationHandler(v);
  }
  function Q() {
    return a.value ? a.value.getMissingHandler() : c;
  }
  function V(v) {
    a.value && a.value.setMissingHandler(v);
  }
  function L(v) {
    return C(), v();
  }
  function re(...v) {
    return a.value ? L(() => Reflect.apply(a.value.t, null, [...v])) : L(() => "");
  }
  function ne(...v) {
    return a.value ? Reflect.apply(a.value.rt, null, [...v]) : "";
  }
  function ue(...v) {
    return a.value ? L(() => Reflect.apply(a.value.d, null, [...v])) : L(() => "");
  }
  function Ae(...v) {
    return a.value ? L(() => Reflect.apply(a.value.n, null, [...v])) : L(() => "");
  }
  function ee(v) {
    return a.value ? a.value.tm(v) : {};
  }
  function ie(v, I) {
    return a.value ? a.value.te(v, I) : !1;
  }
  function j(v) {
    return a.value ? a.value.getLocaleMessage(v) : {};
  }
  function R(v, I) {
    a.value && (a.value.setLocaleMessage(v, I), l.value[v] = I);
  }
  function K(v, I) {
    a.value && a.value.mergeLocaleMessage(v, I);
  }
  function ce(v) {
    return a.value ? a.value.getDateTimeFormat(v) : {};
  }
  function B(v, I) {
    a.value && (a.value.setDateTimeFormat(v, I), f.value[v] = I);
  }
  function me(v, I) {
    a.value && a.value.mergeDateTimeFormat(v, I);
  }
  function Se(v) {
    return a.value ? a.value.getNumberFormat(v) : {};
  }
  function ve(v, I) {
    a.value && (a.value.setNumberFormat(v, I), m.value[v] = I);
  }
  function fe(v, I) {
    a.value && a.value.mergeNumberFormat(v, I);
  }
  const De = {
    get id() {
      return a.value ? a.value.id : -1;
    },
    locale: A,
    fallbackLocale: U,
    messages: D,
    datetimeFormats: M,
    numberFormats: z,
    get inheritLocale() {
      return a.value ? a.value.inheritLocale : s;
    },
    set inheritLocale(v) {
      a.value && (a.value.inheritLocale = v);
    },
    get availableLocales() {
      return a.value ? a.value.availableLocales : Object.keys(l.value);
    },
    get modifiers() {
      return a.value ? a.value.modifiers : x;
    },
    get pluralRules() {
      return a.value ? a.value.pluralRules : b;
    },
    get isGlobal() {
      return a.value ? a.value.isGlobal : !1;
    },
    get missingWarn() {
      return a.value ? a.value.missingWarn : p;
    },
    set missingWarn(v) {
      a.value && (a.value.missingWarn = v);
    },
    get fallbackWarn() {
      return a.value ? a.value.fallbackWarn : E;
    },
    set fallbackWarn(v) {
      a.value && (a.value.missingWarn = v);
    },
    get fallbackRoot() {
      return a.value ? a.value.fallbackRoot : S;
    },
    set fallbackRoot(v) {
      a.value && (a.value.fallbackRoot = v);
    },
    get fallbackFormat() {
      return a.value ? a.value.fallbackFormat : d;
    },
    set fallbackFormat(v) {
      a.value && (a.value.fallbackFormat = v);
    },
    get warnHtmlMessage() {
      return a.value ? a.value.warnHtmlMessage : _;
    },
    set warnHtmlMessage(v) {
      a.value && (a.value.warnHtmlMessage = v);
    },
    get escapeParameter() {
      return a.value ? a.value.escapeParameter : w;
    },
    set escapeParameter(v) {
      a.value && (a.value.escapeParameter = v);
    },
    t: re,
    getPostTranslationHandler: Y,
    setPostTranslationHandler: q,
    getMissingHandler: Q,
    setMissingHandler: V,
    rt: ne,
    d: ue,
    n: Ae,
    tm: ee,
    te: ie,
    getLocaleMessage: j,
    setLocaleMessage: R,
    mergeLocaleMessage: K,
    getDateTimeFormat: ce,
    setDateTimeFormat: B,
    mergeDateTimeFormat: me,
    getNumberFormat: Se,
    setNumberFormat: ve,
    mergeNumberFormat: fe
  };
  function k(v) {
    v.locale.value = u.value, v.fallbackLocale.value = o.value, Object.keys(l.value).forEach((I) => {
      v.mergeLocaleMessage(I, l.value[I]);
    }), Object.keys(f.value).forEach((I) => {
      v.mergeDateTimeFormat(I, f.value[I]);
    }), Object.keys(m.value).forEach((I) => {
      v.mergeNumberFormat(I, m.value[I]);
    }), v.escapeParameter = w, v.fallbackFormat = d, v.fallbackRoot = S, v.fallbackWarn = E, v.missingWarn = p, v.warnHtmlMessage = _;
  }
  return Rc(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw ar(Xe.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const v = a.value = e.proxy.$i18n.__composer;
    t === "global" ? (u.value = v.locale.value, o.value = v.fallbackLocale.value, l.value = v.messages.value, f.value = v.datetimeFormats.value, m.value = v.numberFormats.value) : i && k(v);
  }), De;
}
Y0($0);
B0(y0);
W0(hl);
tm();
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = ln();
  e.__INTLIFY__ = !0, D0(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const _m = {
  name: "PawLink",
  emits: ["clicked"],
  data() {
    return {
      hasSlot: this.$slots.default && this.$slots.default().filter(
        (e) => e.type !== Comment && (typeof e.children == "string" || e.children instanceof String ? e.children.trim() : e.children) !== ""
      ).length,
      showPopover: !1,
      hoverTimer: null
    };
  },
  props: {
    size: {
      type: String,
      required: !0,
      validator: function(e) {
        return ["sm", "md", "lg"].includes(e);
      }
    },
    title: {
      type: String
    },
    titlePopover: {
      type: Boolean
    },
    icon: {
      type: String
    },
    align: {
      type: String,
      validator: function(e) {
        return [void 0, "left", "right"].includes(e);
      }
    },
    color: {
      type: String,
      validator: function(e) {
        return [
          void 0,
          "action",
          "success",
          "danger",
          "warning"
        ].includes(e);
      }
    },
    compact: {
      type: Boolean
    },
    outlined: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  },
  components: {
    PawIcon: Gt
  },
  methods: {
    click() {
      this.$emit("clicked");
    },
    setClassNames() {
      let e = "";
      switch (this.size) {
        case "sm":
          e += "prose-xs element-text";
          break;
        case "md":
          e += "prose-md element-text";
          break;
        case "lg":
          e += "prose-md element-text";
          break;
      }
      if (this.disabled)
        e += " text-gray-300 dark:text-gray-600 cursor-default pointer-events-none";
      else
        switch (e += " cursor-pointer", this.color) {
          case "action":
            e += " text-action-500 dark:text-action-400 hover:text-action-300 dark:hover:text-action-600";
            break;
          case "success":
            e += " text-success-500 dark:text-success-400 hover:text-success-300 dark:hover:text-success-600";
            break;
          case "danger":
            e += " text-danger-500 dark:text-danger-400 hover:text-danger-300 dark:hover:text-danger-600";
            break;
          case "warning":
            e += " text-warning-500 hover:text-warning-300 dark:hover:text-warning-600";
            break;
          default:
            e += " text-gray-500 hover:text-gray-400";
            break;
        }
      return e;
    },
    setIconClassNames() {
      let e = "";
      if (!this.disabled)
        switch (this.color) {
          case "action":
            e += "group-hover:text-action-300 dark:group-hover:text-action-600";
            break;
          case "success":
            e += "group-hover:text-success-300 dark:group-hover:text-success-600";
            break;
          case "danger":
            e += "group-hover:text-danger-300 dark:group-hover:text-danger-600";
            break;
          case "warning":
            e += "group-hover:text-warning-300 dark:group-hover:text-warning-600";
            break;
          default:
            e += "text-gray-400 group-hover:text-gray-300";
            break;
        }
      switch (this.align) {
        case "left":
          e += " order-1";
          break;
        case "right":
          e += " order-2";
          break;
      }
      return e + " transition";
    },
    setTextClassNames() {
      let e = "";
      switch (this.disabled && (e += "italic"), this.align) {
        case "left":
          e += ` order-2${this.compact ? "" : " ml-1"}`;
          break;
        case "right":
          e += ` order-1${this.compact ? "" : " mr-1"}`;
          break;
      }
      return e;
    },
    startHoverTimer() {
      this.hoverTimer = setTimeout(() => {
        this.showPopover = !0;
      }, 500);
    },
    clearHoverTimer() {
      setTimeout(() => {
        clearTimeout(this.hoverTimer), this.showPopover = !1;
      }, 500);
    }
  }
}, vm = ["title"], ym = {
  key: 2,
  class: "absolute max-w-2xl w-60 bg-white dark:bg-gray-800 border border-gray-200 shadow-2xl dark:border-gray-700 transition-all duration-300 left-0 rounded-md z-[9999] top-full px-4 py-2 text-gray-500"
};
function bm(e, t, r, n, i, a) {
  const s = He("PawIcon");
  return P(), W("button", {
    class: H(["flex items-center group max-w-full my-0 relative", a.setClassNames()]),
    title: r.titlePopover ? void 0 : r.title,
    onClick: t[0] || (t[0] = (...u) => a.click && a.click(...u)),
    onMouseenter: t[1] || (t[1] = (...u) => a.startHoverTimer && a.startHoverTimer(...u)),
    onMouseleave: t[2] || (t[2] = (...u) => a.clearHoverTimer && a.clearHoverTimer(...u))
  }, [
    r.icon ? (P(), Oe(s, {
      key: 0,
      size: r.compact ? "sm" : r.size,
      outlined: r.outlined,
      class: H(a.setIconClassNames())
    }, {
      default: be(() => [
        we(pe(r.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : X("", !0),
    i.hasSlot ? (P(), W("span", {
      key: 1,
      class: H(["truncate transition", a.setTextClassNames()])
    }, [
      Wt(e.$slots, "default")
    ], 2)) : X("", !0),
    i.showPopover && r.titlePopover === !0 ? (P(), W("div", ym, pe(r.title), 1)) : X("", !0)
  ], 42, vm);
}
const Ml = /* @__PURE__ */ ft(_m, [["render", bm]]), wm = {
  name: "PawRadio",
  emits: ["changed"],
  props: {
    size: {
      type: String,
      required: !0,
      validator: function(e) {
        return ["sm", "md", "lg"].includes(e);
      }
    },
    title: {
      type: String
    },
    checked: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  methods: {
    change() {
      this.$emit("changed", !this.checked);
    }
  }
}, km = ["title"], xm = { class: "block w-5 h-5 m-0.5 shrink-0 self-start pointer-events-none" }, Sm = ["checked", "disabled"], Tm = /* @__PURE__ */ te("label", { class: "block w-5 h-5 border-2 peer-checked:border-6 peer-checked:bg-white dark:peer-checked:peer-disabled:bg-gray-500 border-gray-400 peer-checked:border-action-500 dark:peer-checked:border-action-400 peer-disabled:border-gray-200 dark:peer-disabled:border-gray-600 rounded-full transition" }, null, -1);
function Om(e, t, r, n, i, a) {
  return P(), W("label", {
    class: H(["inline-flex items-center max-w-full", {
      "cursor-pointer": !r.disabled,
      "pointer-events-none": r.disabled,
      "gap-1": r.size === "sm",
      "gap-2 p-1": r.size === "md",
      "gap-3 p-2": r.size === "lg"
    }]),
    title: r.title
  }, [
    te("span", xm, [
      te("input", {
        type: "radio",
        onChange: t[0] || (t[0] = (...s) => a.change && a.change(...s)),
        checked: r.checked,
        disabled: r.disabled,
        class: "peer hidden"
      }, null, 40, Sm),
      Tm
    ]),
    e.$slots.default ? (P(), W("span", {
      key: 0,
      class: H(["text-md truncate transition", r.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"])
    }, [
      Wt(e.$slots, "default")
    ], 2)) : X("", !0)
  ], 10, km);
}
const Nl = /* @__PURE__ */ ft(wm, [["render", Om]]), Em = 5, Dm = {
  name: "PawCrazyInput",
  emits: [
    "changed",
    "removed",
    "typed",
    "selected",
    "added",
    "cancelled",
    "optionFocused",
    "optionSelected",
    "optionMoved",
    "optionTyped",
    "dropdownClosed",
    "keyDownEnter"
  ],
  data() {
    return {
      hasSlot: null,
      inputValue: this.getDefaultValue(),
      inputOutline: !1,
      contextValue: this.contextChecked,
      showingResults: !1,
      loadingResults: !1,
      loadingCancelled: !1,
      selected: this.getCheckedValues(),
      itemIdFocused: null,
      chips: []
    };
  },
  computed: {
    dropdownItems() {
      var e;
      return this.loadingResults ? Em : (e = this.data) != null && e.length ? this.data : this.loadingCancelled ? [
        {
          id: 1,
          value: this.t("loadingCancelled"),
          unselectable: !0
        }
      ] : [
        {
          id: 1,
          value: this.t("noResults"),
          unselectable: !0
        }
      ];
    },
    multilineClasses() {
      return this.multiline ? "min-h-[32px] before:content_ before:py-1.5 before:pl-2 before:pr-3 before:row-start-1 before:col-start-1 before:prose-md before:element-text before:invisible before:whitespace-pre-wrap" : "h-8";
    },
    gridClass() {
      return this.multiline ? "inline-grid" : "";
    },
    widthClasses() {
      if (this.multiselect) {
        if (this.showSearchInputOnlyOnFocus) {
          if (this.showingResults && !this.inputValue && this.chips.length)
            return "basis-1/12 grow-0";
          if (!this.showingResults && this.chips.length)
            return "w-1";
        }
      } else
        return "w-full";
      return "basis-20 grow";
    }
  },
  watch: {
    value() {
      this.inputValue = this.getDefaultValue();
    },
    showingResults(e) {
      if (this.readonly || !e)
        return !1;
      this.clickOutsideElement(this.$refs.crazyInput, () => {
        this.showingResults = !1, this.inputOutline = !1;
      });
    },
    $props: {
      handler() {
        this.data && (this.loadingResults = !1, this.selected = this.data.filter((e) => e.checked), this.multiselect && this.updateChips(), this.updateDropdown());
      },
      deep: !0,
      immediate: !0
    }
  },
  props: {
    /* Text field */
    value: {
      type: String,
      default: ""
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String
    },
    secret: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    multiline: {
      type: Boolean,
      default: !1
    },
    select: {
      type: Boolean,
      default: !1
    },
    multiselect: {
      type: Boolean,
      default: !1
    },
    inputRoundedClasses: {
      type: String,
      default: ""
    },
    inputMinWidthClasses: {
      type: String,
      default: ""
    },
    fullwidth: {
      type: Boolean,
      default: !1
    },
    /* Search results (dropdown) */
    data: {
      type: Object
    },
    item: [Object, Number],
    isOpen: {
      type: Boolean,
      default: !1
    },
    chipIcon: {
      type: String
    },
    addLabel: {
      type: String
    },
    addIcon: {
      type: String,
      default: "add"
    },
    addButtonSize: {
      type: String,
      default: "sm",
      validator: function(e) {
        return ["sm", "md", "lg"].includes(e);
      }
    },
    dropdownWrap: {
      type: Boolean,
      default: !1
    },
    flexDir: {
      type: String,
      validator: function(e) {
        return ["col", "row"].includes(e);
      },
      default: "col"
    },
    maxChips: {
      type: Number,
      default: 0
    },
    chipsTruncated: {
      type: Boolean,
      default: !0
    },
    showSearchInputOnlyOnFocus: {
      type: Boolean,
      default: !1
    },
    /* State */
    loading: {
      type: Boolean,
      default: !1
    },
    /* Top labels */
    label: {
      type: String
    },
    info: {
      type: String
    },
    title: {
      type: String
    },
    /* Context elements (left) */
    // Icon
    contextIcon: {
      type: String
    },
    contextIconOutlined: {
      type: Boolean,
      default: !1
    },
    // Checkbox / Radio controls
    contextControl: {
      type: String,
      validator: function(e) {
        return [void 0, "checkbox", "radio"].includes(e);
      }
    },
    contextChecked: {
      type: Boolean,
      default: !1
    },
    contextDisabled: {
      type: Boolean,
      default: !1
    },
    // Position
    contextPosition: {
      type: String,
      validator: function(e) {
        return [void 0, "top", "center", "bottom"].includes(e);
      },
      default: "top"
    },
    /* Extra elements (right) */
    extraLabel: {
      type: String
    },
    extraIcon: {
      type: String
    },
    extraIconOutlined: {
      type: Boolean,
      default: !1
    },
    // Position
    extraPosition: {
      type: String,
      validator: function(e) {
        return [void 0, "top", "center", "bottom"].includes(e);
      },
      default: "top"
    },
    /* Bottom labels */
    notification: {
      type: String
    },
    warning: {
      type: String
    },
    error: {
      type: String
    }
  },
  components: {
    PawIcon: Gt,
    PawLink: Ml,
    PawCheckbox: vo,
    PawRadio: Nl,
    PawChip: cd,
    PawButton: Hn
  },
  setup() {
    const { t: e } = Xr({
      inheritLocale: !0,
      useScope: "local",
      messages: {
        en: {
          loadingCancelled: "Loading was cancelled",
          noResults: "No results found",
          removeItem: "Remove item"
        },
        de: {
          loadingCancelled: "Laden wurde abgebrochen",
          noResults: "Keine Ergebnisse gefunden",
          removeItem: "Eintrag entfernen"
        }
      }
    });
    return { t: e };
  },
  methods: {
    getDefaultValue() {
      return this.value ? this.value : (this.hasSlot = this.$slots.default && this.$slots.default().filter(
        (e) => e.type !== Comment && (typeof e.children == "string" || e.children instanceof String ? e.children.trim() : e.children) !== ""
      ).length, this.hasSlot ? this.$slots.default()[0].children.trim() : "");
    },
    focusInputElement() {
      this.$refs.textInput.focus();
    },
    unFocusInputElement() {
      this.$refs.textInput.blur();
    },
    getCheckedValues() {
      return this.data ? this.data.filter((e) => e.checked) : [];
    },
    change() {
      this.$emit("changed", this.switchCheckboxValue());
    },
    type(e) {
      if (this.inputValue === "") {
        this.cancelLoading(!0), this.$emit("typed", this.inputValue);
        return;
      }
      e !== !0 && (this.$emit("typed", this.inputValue), !(!this.select && !this.multiselect) && (this.loadingResults = !0, this.loadingCancelled = !1, this.showingResults = !0));
    },
    optionTyped() {
      this.focusTextInput(), this.type();
    },
    focus(e, t) {
      this.$emit("optionFocused", e, t);
    },
    /**
     * Change focus between dropdown options
     * @param itemId {Number|String} Option ID.
     * @param event {Boolean} Gained focus?
     */
    focusChange(e, t) {
      this.itemIdFocused = t ? e : null;
    },
    resize(e) {
      this.multiline && (e.target.parentNode.dataset.content = e.target.value);
    },
    keyDown(e, t) {
      if (!this.readonly && this.data)
        e:
          switch (e.code) {
            case "ArrowUp":
              if (!this.showingResults && this.data.length === 0) {
                this.type();
                break;
              }
              if (this.data.filter((r) => r.unselectable).length === this.data.length)
                break;
              if (this.showingResults = !0, this.data.length > 0) {
                if (this.select) {
                  if (!this.selected[0] && !this.loadingResults) {
                    this.focusOption(
                      this.getOptionInput(this.data[this.data.length - 1])
                    );
                    break;
                  }
                  this.moveOption(this.selected[0], -1, !0);
                }
                if (this.multiselect) {
                  for (let r = this.data.length - 1; r >= 0; r--) {
                    const n = this.getOptionControl(
                      this.data[r].id,
                      "checkbox"
                    );
                    if (!n)
                      break;
                    if (!n.checked) {
                      this.focusOption(this.getOptionInput(this.data[r]));
                      break e;
                    }
                  }
                  this.focusOption(this.getOptionInput(this.data[0]));
                }
              }
              break;
            case "ArrowDown":
              if (!this.showingResults && this.data.length === 0) {
                this.type();
                break;
              }
              if (this.data.filter((r) => r.unselectable).length === this.data.length)
                break;
              if (this.showingResults = !0, this.data.length > 0) {
                if (this.select) {
                  if (!this.selected[0] && !this.loadingResults) {
                    this.focusOption(this.getOptionInput(this.data[0]));
                    break;
                  }
                  this.moveOption(this.selected[0], 1, !0);
                }
                if (this.multiselect) {
                  for (const r in this.data) {
                    const n = this.getOptionControl(
                      this.data[r].id,
                      "checkbox"
                    );
                    if (!n)
                      break;
                    if (!n.checked) {
                      this.focusOption(this.getOptionInput(this.data[r]));
                      break e;
                    }
                  }
                  this.focusOption(this.getOptionInput(this.data[0]));
                }
              }
              break;
            case "Backspace":
              this.multiselect && this.chips.length > 0 && this.inputValue === "" && this.updateChips(this.chips[this.chips.length - 1], !1);
              break;
            case "Escape":
              this.showingResults = !1, this.cancelLoading();
              break;
            case "Enter":
              this.unFocusInputElement(), this.$emit("keyDownEnter");
              break;
          }
      else if (this.readonly)
        switch (e.code) {
          case "Enter":
            switch (this.contextControl) {
              case "radio":
                this.$emit("optionSelected", t, !0);
                break;
              case "checkbox":
                this.$emit("optionSelected", t, this.switchCheckboxValue());
                break;
            }
            break;
          case "ArrowUp":
            e.preventDefault(), this.$emit("optionMoved", t, -1);
            break;
          case "ArrowDown":
            e.preventDefault(), this.$emit("optionMoved", t, 1);
            break;
          case "Escape":
            this.$emit("dropdownClosed");
            break;
          case "Backspace":
            this.$emit("optionSelected", t, !1);
            break;
          case "Delete":
            this.$emit("optionSelected", t, !1);
            break;
          default:
            String.fromCharCode(e.keyCode).match(/(\w|\s)/g) && e.code !== "Tab" && this.$emit("optionTyped", e.key);
            break;
        }
      else
        switch (e.code) {
          case "Enter":
            this.unFocusInputElement(), this.$emit("keyDownEnter");
            break;
          case "Escape":
            this.unFocusInputElement();
            break;
        }
    },
    outlineContainer(e, t) {
      this.inputOutline = e || this.showingResults, e && this.data && !t && (this.showingResults = !0), this.readonly && this.item && this.focus(this.item.id, e);
    },
    focusTextInput() {
      this.$refs.textInput.focus();
    },
    unFocusTextInput() {
      this.$refs.textInput.blur();
    },
    getOptionId(e) {
      return this.data.length === 0 ? e : e.id;
    },
    getOptionInput(e) {
      if (this.$refs[`OPTION-${this.getOptionId(e)}`][0])
        return this.$refs[`OPTION-${this.getOptionId(e)}`][0].$el.querySelector('input[type="text"], textarea');
    },
    getOptionControl(e, t) {
      if (this.$refs[`OPTION-${e}`][0])
        return this.$refs[`OPTION-${e}`][0].$el.querySelector(
          `input[type="${t}"]`
        );
    },
    switchCheckboxValue() {
      return this.contextValue = !this.contextValue;
    },
    deselectAll() {
      const e = document.activeElement;
      e && /INPUT|TEXTAREA/i.test(e.tagName) && ("selectionStart" in e && (e.selectionEnd = e.selectionStart), e.blur()), window.getSelection ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty();
    },
    isItemChecked(e) {
      return this.select ? e.checked && this.selected.length === 0 || this.selected.includes(e) : this.multiselect ? e.checked || this.selected.includes(e) || this.selected.some((t) => t.value === e.value) : !1;
    },
    updateChips(e, t) {
      !t && e && this.removeChip(e), this.chips = this.arrayUnique(this.chips.concat(this.selected));
    },
    updateDropdown() {
      if (this.select) {
        var e = this.data.filter(
          (t) => t.value === this.inputValue
        );
        e !== this.selected ? (this.selected = e, this.$emit("selected", this.selected)) : this.selected = e;
        return;
      }
      this.selected = this.arrayUnique(this.selected.concat(this.chips));
    },
    click() {
      this.readonly && this.$refs[this.contextControl] && this.$refs[this.contextControl].$el.click();
    },
    selectSingleItem(e, t) {
      this.selected[0] = e, this.inputValue = e.value, this.type(t), this.showingResults = !1, this.inputOutline = !1;
    },
    itemSelected(e, t) {
      this.select && this.selectSingleItem(e), this.multiselect && (t ? this.selected.push(e) : this.selected = this.selected.filter((r) => r !== e), this.updateChips(e, t), this.inputValue = "", this.$emit("typed", this.inputValue)), this.$emit("selected", this.selected);
    },
    confirmSelection(e) {
      this.select && this.selectSingleItem(e, !0);
    },
    add() {
      this.$emit("added");
    },
    moveOption(e, t, r) {
      if (!this.data || this.loadingResults)
        return;
      const n = this.data.indexOf(e) + t;
      if (n < 0 || n > this.data.length - 1) {
        if (r) {
          this.focusOption(this.getOptionInput(e), r);
          return;
        }
        this.showingResults = !1, this.focusTextInput();
        return;
      }
      this.focusOption(this.getOptionInput(this.data[n]), r);
    },
    focusOption(e, t) {
      if (e) {
        if (t) {
          e.select();
          return;
        }
        e.focus();
      }
    },
    optionHovered(e) {
      e && (this.itemIdFocused = e.id);
    },
    closeAction() {
      if (this.select && !this.showingResults) {
        this.selected[0] = null, this.inputValue = "", this.type(), this.cancelLoading(!0);
        return;
      }
      this.showingResults = !this.showingResults, this.cancelLoading();
    },
    closeDropdown() {
      this.showingResults = !1, this.focusTextInput(), this.cancelLoading();
    },
    removeChip(e) {
      let t = this.chips.indexOf(e);
      t !== -1 && (this.chips.splice(t, 1), t = this.selected.indexOf(e), t !== -1 && (this.selected.splice(t, 1), this.$emit("removed", e)));
    },
    // Cancel loading of results
    cancelLoading(e) {
      (!this.showingResults && this.loadingResults || e) && (this.$emit("cancelled"), this.loadingResults = !1, this.loadingCancelled = !0);
    },
    /**
     * Perform action on clicking outside of container
     * @param container {Element} HTML element corresponding to container. E.g: document.querySelector(...) or Vue.js: this.$refs.containerRef
     * @param action {Function} Function to execute on clicking outside of container. If this function evaluates as 'false', then event listener won't be removed.
     * @param excludedElements {NodeList} Set of HTML elements not to be considered as outer elements. E.g: document.querySelectorAll(...)
     * @param bindEvent {String}
     */
    clickOutsideElement(e, t = () => {
    }, r = document.createElement(null), n = "mouseup") {
      document.addEventListener(n, function i(a) {
        if (!(a.target instanceof Element))
          return document.removeEventListener(n, i), !1;
        e !== a.target && !e.contains(a.target) && !Array.from(r).includes(a.target) && t(a) !== !1 && document.removeEventListener(n, i);
      });
    },
    arrayUnique(e) {
      const t = e.concat();
      for (let r = 0; r < t.length; ++r)
        for (let n = r + 1; n < t.length; ++n)
          t[r] === t[n] && t.splice(n--, 1);
      return t;
    },
    setContainerClassNames() {
      let e = "", t = this.inputRoundedClasses !== "" ? this.inputRoundedClasses : "rounded-md ";
      return e += this.readonly ? "" : "pr-0.75 border border-gray-200 dark:border-gray-600 transition " + t, e += this.fullwidth ? " w-full " : "", e += ` ${this.inputMinWidthClasses} `, this.contextIcon || this.contextControl === "checkbox" || this.contextControl === "radio" ? e += " pl-0.75" : e += " pl-1", e += this.inputOutline && !this.readonly && !this.showingResults ? " outline outline-4 outline-action-200 dark:outline-action-700" : "", e += this.showingResults ? " rounded-b-none border-b-transparent bg-gray-200 dark:bg-gray-600 shadow-box dark:shadow-box-dark" : this.readonly ? "" : " bg-gray-100 dark:bg-gray-700", e;
    },
    setLoaderMaxWidth() {
      const e = [
        "max-w-[32px]",
        "max-w-[48px]",
        "max-w-[80px]",
        "max-w-[120px]",
        "max-w-[200px]",
        "max-w-xs"
      ];
      return e[Math.floor(Math.random() * e.length)];
    }
  }
}, Cm = {
  key: 0,
  class: "flex flex-row"
}, Im = {
  key: 0,
  class: "max-w-[80px] h-3.5 mr-1 bg-gray-400 loading-bubble"
}, Pm = {
  key: 1,
  class: "max-w-[48px] h-3.5 ml-auto bg-gray-400 loading-bubble"
}, Lm = /* @__PURE__ */ te("span", { class: "bg-gray-400 loading-bubble max-w-[24px] w-full h-2" }, null, -1), Mm = /* @__PURE__ */ te("span", { class: "bg-gray-400 loading-bubble w-4 h-4" }, null, -1), Nm = [
  Lm,
  Mm
], Am = {
  key: 1,
  class: "ml-2 mt-1"
}, Rm = {
  key: 0,
  class: "max-w-[120px] h-2 bg-gray-400 mb-2 loading-bubble"
}, Fm = {
  key: 1,
  class: "max-w-[120px] h-2 bg-warning-400 mb-2 loading-bubble"
}, Ym = {
  key: 2,
  class: "max-w-[120px] h-2 bg-danger-500 dark:bg-danger-400 loading-bubble"
}, Bm = {
  key: 0,
  class: "flex flex-row"
}, Wm = ["title"], Um = ["data-content"], zm = ["placeholder", "readonly", "tabindex"], Vm = ["type", "placeholder", "readonly", "tabindex"], Hm = ["onMouseover"], jm = {
  key: 0,
  class: "flex justify-center py-2 bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-b-md shadow-box dark:shadow-box-dark"
}, qm = {
  key: 3,
  class: "ml-2"
}, Gm = {
  key: 0,
  class: "prose-xs element-text italic text-gray-500 transition"
}, $m = {
  key: 1,
  class: "prose-xs element-text italic text-warning-500 transition"
}, Km = {
  key: 2,
  class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition"
};
function Xm(e, t, r, n, i, a) {
  var E, S, d;
  const s = He("PawIcon"), u = He("PawCheckbox"), o = He("PawRadio"), l = He("PawChip"), f = He("PawLink"), m = He("PawCrazyInput"), p = He("PawButton");
  return P(), W("div", {
    class: H(["relative flex", [
      {
        "gap-1": !r.readonly,
        "mb-44": this.dropdownWrap
      },
      `flex-${this.flexDir}`
    ]]),
    ref: "crazyInput"
  }, [
    r.loading ? (P(), W(tt, { key: 0 }, [
      r.label || r.info ? (P(), W("div", Cm, [
        r.label ? (P(), W("label", Im)) : X("", !0),
        r.info ? (P(), W("span", Pm)) : X("", !0)
      ])) : X("", !0),
      te("div", {
        class: H(["flex flex-row items-center justify-between", [r.readonly ? "gap-3" : "gap-1"]])
      }, [
        r.readonly && (r.contextIcon || r.contextControl) ? (P(), W("div", {
          key: 0,
          class: H(["w-4 h-4 bg-gray-400 shrink-0 loading-bubble", [
            r.contextPosition === "top" && r.multiline ? "self-start" : "",
            r.contextPosition === "center" && r.multiline ? "self-center" : "",
            r.contextPosition === "bottom" && r.multiline ? "self-end" : ""
          ]])
        }, null, 2)) : X("", !0),
        te("div", {
          class: H(["bg-gray-400 loading-bubble mr-auto", [
            r.readonly ? r.multiline ? "h-8" : a.setLoaderMaxWidth() + " h-2" : r.multiline ? "h-24" : "h-[34px]"
          ]])
        }, null, 2),
        r.readonly ? (P(), W(tt, { key: 1 }, [
          r.extraLabel || r.extraIcon ? (P(), W("div", {
            key: 0,
            class: H(["flex flex-row items-center shrink-0 gap-3 w-full max-w-[52px] py-1", [
              r.extraPosition === "top" && r.multiline ? "self-start" : "",
              r.extraPosition === "center" && r.multiline ? "self-center" : "",
              r.extraPosition === "bottom" && r.multiline ? "self-end" : ""
            ]])
          }, Nm, 2)) : X("", !0)
        ], 64)) : X("", !0)
      ], 2),
      r.notification || r.warning || r.error ? (P(), W("div", Am, [
        r.notification ? (P(), W("div", Rm)) : X("", !0),
        r.warning ? (P(), W("div", Fm)) : X("", !0),
        r.error ? (P(), W("div", Ym)) : X("", !0)
      ])) : X("", !0)
    ], 64)) : (P(), W(tt, { key: 1 }, [
      r.label || r.info ? (P(), W("div", Bm, [
        r.label ? (P(), W("label", {
          key: 0,
          onClick: t[0] || (t[0] = (...c) => a.focusTextInput && a.focusTextInput(...c)),
          class: "prose-xs element-text text-xs uppercase text-gray-500 cursor-pointer transition"
        }, pe(r.label), 1)) : X("", !0),
        r.info ? (P(), W("span", {
          key: 1,
          class: "ml-auto prose-xs element-text uppercase text-gray-500 cursor-help transition",
          title: r.title
        }, pe(r.info), 9, Wm)) : X("", !0)
      ])) : X("", !0),
      te("div", {
        class: H(["flex flex-row items-center", a.setContainerClassNames()]),
        onClick: t[13] || (t[13] = (...c) => a.click && a.click(...c))
      }, [
        r.contextIcon ? (P(), Oe(s, {
          key: 0,
          onClick: a.focusTextInput,
          size: "sm",
          outlined: r.contextIconOutlined,
          class: H(["text-gray-400 my-1 cursor-pointer", {
            "self-start": r.contextPosition === "top",
            "self-center": r.contextPosition === "center",
            "self-end": r.contextPosition === "bottom"
          }])
        }, {
          default: be(() => [
            we(pe(r.contextIcon), 1)
          ]),
          _: 1
        }, 8, ["onClick", "outlined", "class"])) : r.contextControl === "checkbox" ? (P(), Oe(u, {
          key: 1,
          ref: "checkbox",
          onClick: a.focusTextInput,
          onChanged: a.change,
          size: "sm",
          class: H(["py-1", {
            "self-start": r.contextPosition === "top",
            "self-center": r.contextPosition === "center",
            "self-end": r.contextPosition === "bottom",
            "pointer-events-none": r.readonly
          }]),
          checked: r.contextChecked,
          disabled: r.contextDisabled
        }, null, 8, ["onClick", "onChanged", "class", "checked", "disabled"])) : r.contextControl === "radio" ? (P(), Oe(o, {
          key: 2,
          ref: "radio",
          onClick: a.focusTextInput,
          onChanged: a.change,
          size: "sm",
          class: H(["py-1", {
            "self-start": r.contextPosition === "top",
            "self-center": r.contextPosition === "center",
            "self-end": r.contextPosition === "bottom",
            "pointer-events-none": r.readonly
          }]),
          checked: r.contextChecked,
          disabled: r.contextDisabled
        }, null, 8, ["onClick", "onChanged", "class", "checked", "disabled"])) : X("", !0),
        te("div", {
          class: H(["w-full min-w-0 flex flex-wrap", {
            "cursor-pointer": !((E = r.item) != null && E.unselectable)
          }]),
          onClick: t[11] || (t[11] = (...c) => a.focusTextInput && a.focusTextInput(...c))
        }, [
          (P(!0), W(tt, null, gt(r.maxChips > 0 ? i.chips.slice(0, r.maxChips) : i.chips, (c) => (P(), Oe(l, {
            key: c.id,
            onClicked: (g) => a.removeChip(c),
            size: "sm",
            icon: r.chipIcon,
            title: this.t("removeItem"),
            textEllipsis: r.chipsTruncated,
            class: "shrink align-top justify-self-start ml-1 mt-1"
          }, {
            default: be(() => [
              we(pe(c.value), 1)
            ]),
            _: 2
          }, 1032, ["onClicked", "icon", "title", "textEllipsis"]))), 128)),
          r.maxChips > 0 && i.chips.length > r.maxChips ? (P(), Oe(l, {
            key: 0,
            size: "sm",
            icon: r.chipIcon,
            class: "shrink align-top justify-self-start ml-1 mt-1"
          }, {
            default: be(() => [
              we("...")
            ]),
            _: 1
          }, 8, ["icon"])) : X("", !0),
          te("span", {
            class: H([a.multilineClasses, a.gridClass, a.widthClasses]),
            "data-content": r.multiline ? i.inputValue : ""
          }, [
            r.multiline ? ir((P(), W("textarea", {
              key: 0,
              "onUpdate:modelValue": t[1] || (t[1] = (c) => i.inputValue = c),
              ref: "textInput",
              class: H(["row-start-1 col-start-1 rounded-md break-words input-reset text-gray-900 dark:text-white transition", [
                r.extraLabel || r.extraIcon || r.readonly ? "pr-3" : "pr-2.25",
                r.readonly ? "cursor-pointer" : ""
              ]]),
              onInput: t[2] || (t[2] = (c) => {
                a.resize(c), a.type();
              }),
              onFocus: t[3] || (t[3] = (c) => a.outlineContainer(!0)),
              onBlur: t[4] || (t[4] = (c) => a.outlineContainer(!1)),
              onKeydown: t[5] || (t[5] = (c) => a.keyDown(c, r.item)),
              rows: "1",
              placeholder: r.placeholder,
              readonly: r.readonly,
              tabindex: r.readonly && !r.isOpen || (S = r.item) != null && S.unselectable ? -1 : null
            }, null, 42, zm)), [
              [go, i.inputValue]
            ]) : ir((P(), W("input", {
              key: 1,
              type: r.secret ? "password" : "text",
              "onUpdate:modelValue": t[6] || (t[6] = (c) => i.inputValue = c),
              ref: "textInput",
              onInput: t[7] || (t[7] = (...c) => a.type && a.type(...c)),
              onFocus: t[8] || (t[8] = (c) => a.outlineContainer(!0)),
              onBlur: t[9] || (t[9] = (c) => a.outlineContainer(!1)),
              onKeydown: t[10] || (t[10] = (c) => a.keyDown(c, r.item)),
              class: H(["rounded-md input-reset text-gray-900 dark:text-white transition", {
                truncate: !r.multiline,
                "pr-3": r.extraLabel || r.extraIcon || r.readonly,
                "pointer-events-none selection:bg-transparent": r.readonly
              }]),
              placeholder: i.chips.length ? "" : r.placeholder,
              readonly: r.readonly,
              tabindex: r.readonly && !r.isOpen || (d = r.item) != null && d.unselectable ? -1 : null
            }, null, 42, Vm)), [
              [Yc, i.inputValue]
            ])
          ], 10, Um)
        ], 2),
        r.extraLabel || r.extraIcon || r.data ? (P(), W("span", {
          key: 3,
          class: H(["flex flex-row shrink-0 items-center py-1", {
            "self-start": r.extraPosition === "top",
            "self-center": r.extraPosition === "center",
            "self-end": r.extraPosition === "bottom"
          }])
        }, [
          r.extraLabel ? (P(), W("span", {
            key: 0,
            class: "mr-1 text-xs text-gray-400 cursor-pointer",
            onClick: t[12] || (t[12] = (...c) => a.focusTextInput && a.focusTextInput(...c))
          }, pe(r.extraLabel), 1)) : X("", !0),
          r.extraIcon ? (P(), Oe(s, {
            key: 1,
            onClick: a.focusTextInput,
            size: "sm",
            class: H(["text-gray-400 opacity-100 cursor-pointer transition", {
              "opacity-0": i.showingResults
            }]),
            outlined: r.extraIconOutlined
          }, {
            default: be(() => [
              we(pe(r.extraIcon), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class", "outlined"])) : X("", !0),
          r.data ? ir((P(), Oe(f, {
            key: 2,
            onClicked: a.closeAction,
            class: H([[
              i.showingResults || i.inputValue ? "opacity-100" : "opacity-0 pointer-events-none"
            ], "transition"]),
            size: "sm",
            icon: r.select ? "close" : r.multiselect ? i.showingResults ? "unfold_less" : "unfold_more" : "",
            tabindex: i.showingResults ? null : -1
          }, null, 8, ["onClicked", "class", "icon", "tabindex"])), [
            [zr, i.showingResults || i.inputValue || !r.extraLabel && !r.extraIcon]
          ]) : X("", !0)
        ], 2)) : X("", !0)
      ], 2),
      r.data ? (P(), W("div", {
        key: 1,
        class: H([{
          "opacity-100": i.showingResults
        }, "absolute z-20 opacity-0 bottom-1 w-full translate-y-full h-1 border-x border-gray-200 dark:border-gray-600 bg-gray-200 dark:bg-gray-600 transition"])
      }, null, 2)) : X("", !0),
      r.data ? (P(), W("div", {
        key: 2,
        class: H([[
          i.showingResults ? "opacity-100" : "opacity-0 pointer-events-none"
        ], "absolute z-10 bottom-0 w-full max-h-[181px] translate-y-full rounded-md rounded-t-none transition"])
      }, [
        te("div", {
          class: H(["max-h-[inherit] overflow-y-auto border-gray-300 dark:border-gray-700 shadow-box dark:shadow-box-dark", r.addLabel ? "rounded-b-none" : "rounded-b-md"])
        }, [
          (P(!0), W(tt, null, gt(a.dropdownItems, (c) => (P(), W("div", {
            key: c,
            onMouseover: (g) => a.optionHovered(c),
            class: H(["transition", [
              !c.unselectable && !i.loadingResults ? "hover:bg-white dark:hover:bg-gray-800 cursor-pointer" : "",
              c.id === i.itemIdFocused && !c.unselectable && !i.loadingResults ? "bg-white dark:bg-gray-800" : "bg-gray-100 dark:bg-gray-700"
            ]])
          }, [
            Qe(m, {
              class: H({
                "p-2 gap-1": i.loadingResults
              }),
              ref_for: !0,
              ref: `OPTION-${a.getOptionId(c)}`,
              onClick: (g) => a.confirmSelection(c),
              onChanged: (g) => c.unselectable ? null : a.itemSelected(c, g),
              onOptionFocused: (g, _) => c.unselectable ? null : a.focusChange(g, _),
              onOptionSelected: (g, _) => c.unselectable ? null : a.itemSelected(g, _),
              onOptionMoved: (g, _) => c.unselectable ? null : a.moveOption(g, _),
              onOptionTyped: t[14] || (t[14] = (g) => a.optionTyped(g)),
              onDropdownClosed: (g) => c.unselectable ? null : a.closeDropdown(),
              "context-control": c.unselectable ? null : r.select ? "radio" : r.multiselect ? "checkbox" : null,
              "context-checked": c.unselectable ? null : a.isItemChecked(c),
              "context-disabled": c.unselectable ? null : c.disabled,
              "context-position": c.unselectable ? r.contextPosition : c.contextPosition,
              "extra-label": i.loadingResults ? r.extraLabel : c.extraLabel,
              "extra-icon": i.loadingResults ? r.extraIcon : c.extraIcon,
              "extra-icon-outlined": c.extraIconOutlined,
              "extra-position": c.extraPosition,
              multiline: i.loadingResults ? r.multiline : c.multiline,
              "is-open": i.showingResults,
              item: c,
              loading: i.loadingResults,
              readonly: ""
            }, {
              default: be(() => [
                we(pe(c.value), 1)
              ]),
              _: 2
            }, 1032, ["class", "onClick", "onChanged", "onOptionFocused", "onOptionSelected", "onOptionMoved", "onDropdownClosed", "context-control", "context-checked", "context-disabled", "context-position", "extra-label", "extra-icon", "extra-icon-outlined", "extra-position", "multiline", "is-open", "item", "loading"])
          ], 42, Hm))), 128))
        ], 2),
        r.addLabel && !i.loadingResults ? (P(), W("div", jm, [
          Qe(p, {
            size: r.addButtonSize,
            icon: r.addIcon,
            onClicked: a.add
          }, {
            default: be(() => [
              we(pe(r.addLabel), 1)
            ]),
            _: 1
          }, 8, ["size", "icon", "onClicked"])
        ])) : X("", !0)
      ], 2)) : X("", !0),
      r.notification || r.warning || r.error ? (P(), W("div", qm, [
        r.notification ? (P(), W("div", Gm, pe(r.notification), 1)) : X("", !0),
        r.warning ? (P(), W("div", $m, pe(r.warning), 1)) : X("", !0),
        r.error ? (P(), W("div", Km, pe(r.error), 1)) : X("", !0)
      ])) : X("", !0)
    ], 64))
  ], 2);
}
const Qm = /* @__PURE__ */ ft(Dm, [["render", Xm]]);
var io = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}, Zm = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.name = t, this.version = r, this.os = n, this.type = "browser";
    }
    return e;
  }()
), Jm = (
  /** @class */
  function() {
    function e(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return e;
  }()
), ep = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this.name = t, this.version = r, this.os = n, this.bot = i, this.type = "bot-device";
    }
    return e;
  }()
), tp = (
  /** @class */
  function() {
    function e() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return e;
  }()
), rp = (
  /** @class */
  function() {
    function e() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return e;
  }()
), np = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, ip = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, ao = 3, ap = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", np]
], so = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function sp(e) {
  return e ? oo(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new rp() : typeof navigator < "u" ? oo(navigator.userAgent) : up();
}
function op(e) {
  return e !== "" && ap.reduce(function(t, r) {
    var n = r[0], i = r[1];
    if (t)
      return t;
    var a = i.exec(e);
    return !!a && [n, a];
  }, !1);
}
function oo(e) {
  var t = op(e);
  if (!t)
    return null;
  var r = t[0], n = t[1];
  if (r === "searchbot")
    return new tp();
  var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  i ? i.length < ao && (i = io(io([], i, !0), cp(ao - i.length), !0)) : i = [];
  var a = i.join("."), s = lp(e), u = ip.exec(e);
  return u && u[1] ? new ep(r, a, s, u[1]) : new Zm(r, a, s);
}
function lp(e) {
  for (var t = 0, r = so.length; t < r; t++) {
    var n = so[t], i = n[0], a = n[1], s = a.exec(e);
    if (s)
      return i;
  }
  return null;
}
function up() {
  var e = typeof process < "u" && process.version;
  return e ? new Jm(process.version.slice(1)) : null;
}
function cp(e) {
  for (var t = [], r = 0; r < e; r++)
    t.push("0");
  return t;
}
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Al;
function J() {
  return Al.apply(null, arguments);
}
function dp(e) {
  Al = e;
}
function Yt(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Ir(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Me(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Ga(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (Me(e, t))
      return !1;
  return !0;
}
function yt(e) {
  return e === void 0;
}
function or(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function vn(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Rl(e, t) {
  var r = [], n, i = e.length;
  for (n = 0; n < i; ++n)
    r.push(t(e[n], n));
  return r;
}
function mr(e, t) {
  for (var r in t)
    Me(t, r) && (e[r] = t[r]);
  return Me(t, "toString") && (e.toString = t.toString), Me(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function $t(e, t, r, n) {
  return su(e, t, r, n, !0).utc();
}
function fp() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function xe(e) {
  return e._pf == null && (e._pf = fp()), e._pf;
}
var _a;
Array.prototype.some ? _a = Array.prototype.some : _a = function(e) {
  var t = Object(this), r = t.length >>> 0, n;
  for (n = 0; n < r; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function $a(e) {
  if (e._isValid == null) {
    var t = xe(e), r = _a.call(t.parsedDateParts, function(i) {
      return i != null;
    }), n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
    if (e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = n;
    else
      return n;
  }
  return e._isValid;
}
function ti(e) {
  var t = $t(NaN);
  return e != null ? mr(xe(t), e) : xe(t).userInvalidated = !0, t;
}
var lo = J.momentProperties = [], Ni = !1;
function Ka(e, t) {
  var r, n, i, a = lo.length;
  if (yt(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), yt(t._i) || (e._i = t._i), yt(t._f) || (e._f = t._f), yt(t._l) || (e._l = t._l), yt(t._strict) || (e._strict = t._strict), yt(t._tzm) || (e._tzm = t._tzm), yt(t._isUTC) || (e._isUTC = t._isUTC), yt(t._offset) || (e._offset = t._offset), yt(t._pf) || (e._pf = xe(t)), yt(t._locale) || (e._locale = t._locale), a > 0)
    for (r = 0; r < a; r++)
      n = lo[r], i = t[n], yt(i) || (e[n] = i);
  return e;
}
function yn(e) {
  Ka(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Ni === !1 && (Ni = !0, J.updateOffset(this), Ni = !1);
}
function Bt(e) {
  return e instanceof yn || e != null && e._isAMomentObject != null;
}
function Fl(e) {
  J.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Lt(e, t) {
  var r = !0;
  return mr(function() {
    if (J.deprecationHandler != null && J.deprecationHandler(null, e), r) {
      var n = [], i, a, s, u = arguments.length;
      for (a = 0; a < u; a++) {
        if (i = "", typeof arguments[a] == "object") {
          i += `
[` + a + "] ";
          for (s in arguments[0])
            Me(arguments[0], s) && (i += s + ": " + arguments[0][s] + ", ");
          i = i.slice(0, -2);
        } else
          i = arguments[a];
        n.push(i);
      }
      Fl(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var uo = {};
function Yl(e, t) {
  J.deprecationHandler != null && J.deprecationHandler(e, t), uo[e] || (Fl(t), uo[e] = !0);
}
J.suppressDeprecationWarnings = !1;
J.deprecationHandler = null;
function Kt(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function hp(e) {
  var t, r;
  for (r in e)
    Me(e, r) && (t = e[r], Kt(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function va(e, t) {
  var r = mr({}, e), n;
  for (n in t)
    Me(t, n) && (Ir(e[n]) && Ir(t[n]) ? (r[n] = {}, mr(r[n], e[n]), mr(r[n], t[n])) : t[n] != null ? r[n] = t[n] : delete r[n]);
  for (n in e)
    Me(e, n) && !Me(t, n) && Ir(e[n]) && (r[n] = mr({}, r[n]));
  return r;
}
function Xa(e) {
  e != null && this.set(e);
}
var ya;
Object.keys ? ya = Object.keys : ya = function(e) {
  var t, r = [];
  for (t in e)
    Me(e, t) && r.push(t);
  return r;
};
var mp = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function pp(e, t, r) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return Kt(n) ? n.call(t, r) : n;
}
function qt(e, t, r) {
  var n = "" + Math.abs(e), i = t - n.length, a = e >= 0;
  return (a ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + n;
}
var Qa = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, In = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ai = {}, Vr = {};
function he(e, t, r, n) {
  var i = n;
  typeof n == "string" && (i = function() {
    return this[n]();
  }), e && (Vr[e] = i), t && (Vr[t[0]] = function() {
    return qt(i.apply(this, arguments), t[1], t[2]);
  }), r && (Vr[r] = function() {
    return this.localeData().ordinal(
      i.apply(this, arguments),
      e
    );
  });
}
function gp(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function _p(e) {
  var t = e.match(Qa), r, n;
  for (r = 0, n = t.length; r < n; r++)
    Vr[t[r]] ? t[r] = Vr[t[r]] : t[r] = gp(t[r]);
  return function(i) {
    var a = "", s;
    for (s = 0; s < n; s++)
      a += Kt(t[s]) ? t[s].call(i, e) : t[s];
    return a;
  };
}
function Ln(e, t) {
  return e.isValid() ? (t = Bl(t, e.localeData()), Ai[t] = Ai[t] || _p(t), Ai[t](e)) : e.localeData().invalidDate();
}
function Bl(e, t) {
  var r = 5;
  function n(i) {
    return t.longDateFormat(i) || i;
  }
  for (In.lastIndex = 0; r >= 0 && In.test(e); )
    e = e.replace(
      In,
      n
    ), In.lastIndex = 0, r -= 1;
  return e;
}
var vp = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function yp(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(Qa).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var bp = "Invalid date";
function wp() {
  return this._invalidDate;
}
var kp = "%d", xp = /\d{1,2}/;
function Sp(e) {
  return this._ordinal.replace("%d", e);
}
var Tp = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function Op(e, t, r, n) {
  var i = this._relativeTime[r];
  return Kt(i) ? i(e, t, r, n) : i.replace(/%d/i, e);
}
function Ep(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return Kt(r) ? r(t) : r.replace(/%s/i, t);
}
var cn = {};
function ht(e, t) {
  var r = e.toLowerCase();
  cn[r] = cn[r + "s"] = cn[t] = e;
}
function Mt(e) {
  return typeof e == "string" ? cn[e] || cn[e.toLowerCase()] : void 0;
}
function Za(e) {
  var t = {}, r, n;
  for (n in e)
    Me(e, n) && (r = Mt(n), r && (t[r] = e[n]));
  return t;
}
var Wl = {};
function mt(e, t) {
  Wl[e] = t;
}
function Dp(e) {
  var t = [], r;
  for (r in e)
    Me(e, r) && t.push({ unit: r, priority: Wl[r] });
  return t.sort(function(n, i) {
    return n.priority - i.priority;
  }), t;
}
function ri(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function Ct(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Te(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = Ct(t)), r;
}
function Qr(e, t) {
  return function(r) {
    return r != null ? (Ul(this, e, r), J.updateOffset(this, t), this) : Fn(this, e);
  };
}
function Fn(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Ul(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && ri(e.year()) && e.month() === 1 && e.date() === 29 ? (r = Te(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    li(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function Cp(e) {
  return e = Mt(e), Kt(this[e]) ? this[e]() : this;
}
function Ip(e, t) {
  if (typeof e == "object") {
    e = Za(e);
    var r = Dp(e), n, i = r.length;
    for (n = 0; n < i; n++)
      this[r[n].unit](e[r[n].unit]);
  } else if (e = Mt(e), Kt(this[e]))
    return this[e](t);
  return this;
}
var zl = /\d/, Ot = /\d\d/, Vl = /\d{3}/, Ja = /\d{4}/, ni = /[+-]?\d{6}/, Ge = /\d\d?/, Hl = /\d\d\d\d?/, jl = /\d\d\d\d\d\d?/, ii = /\d{1,3}/, es = /\d{1,4}/, ai = /[+-]?\d{1,6}/, Zr = /\d+/, si = /[+-]?\d+/, Pp = /Z|[+-]\d\d:?\d\d/gi, oi = /Z|[+-]\d\d(?::?\d\d)?/gi, Lp = /[+-]?\d+(\.\d{1,3})?/, bn = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Yn;
Yn = {};
function ae(e, t, r) {
  Yn[e] = Kt(t) ? t : function(n, i) {
    return n && r ? r : t;
  };
}
function Mp(e, t) {
  return Me(Yn, e) ? Yn[e](t._strict, t._locale) : new RegExp(Np(e));
}
function Np(e) {
  return xt(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, n, i, a) {
        return r || n || i || a;
      }
    )
  );
}
function xt(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var ba = {};
function Ye(e, t) {
  var r, n = t, i;
  for (typeof e == "string" && (e = [e]), or(t) && (n = function(a, s) {
    s[t] = Te(a);
  }), i = e.length, r = 0; r < i; r++)
    ba[e[r]] = n;
}
function wn(e, t) {
  Ye(e, function(r, n, i, a) {
    i._w = i._w || {}, t(r, i._w, i, a);
  });
}
function Ap(e, t, r) {
  t != null && Me(ba, e) && ba[e](t, r._a, r, e);
}
var dt = 0, rr = 1, jt = 2, st = 3, Ft = 4, nr = 5, Dr = 6, Rp = 7, Fp = 8;
function Yp(e, t) {
  return (e % t + t) % t;
}
var rt;
Array.prototype.indexOf ? rt = Array.prototype.indexOf : rt = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function li(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = Yp(t, 12);
  return e += (t - r) / 12, r === 1 ? ri(e) ? 29 : 28 : 31 - r % 7 % 2;
}
he("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
he("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
he("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
ht("month", "M");
mt("month", 8);
ae("M", Ge);
ae("MM", Ge, Ot);
ae("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
ae("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Ye(["M", "MM"], function(e, t) {
  t[rr] = Te(e) - 1;
});
Ye(["MMM", "MMMM"], function(e, t, r, n) {
  var i = r._locale.monthsParse(e, n, r._strict);
  i != null ? t[rr] = i : xe(r).invalidMonth = e;
});
var Bp = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), ql = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Gl = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Wp = bn, Up = bn;
function zp(e, t) {
  return e ? Yt(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Gl).test(t) ? "format" : "standalone"][e.month()] : Yt(this._months) ? this._months : this._months.standalone;
}
function Vp(e, t) {
  return e ? Yt(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Gl.test(t) ? "format" : "standalone"][e.month()] : Yt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Hp(e, t, r) {
  var n, i, a, s = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      a = $t([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(a, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (i = rt.call(this._shortMonthsParse, s), i !== -1 ? i : null) : (i = rt.call(this._longMonthsParse, s), i !== -1 ? i : null) : t === "MMM" ? (i = rt.call(this._shortMonthsParse, s), i !== -1 ? i : (i = rt.call(this._longMonthsParse, s), i !== -1 ? i : null)) : (i = rt.call(this._longMonthsParse, s), i !== -1 ? i : (i = rt.call(this._shortMonthsParse, s), i !== -1 ? i : null));
}
function jp(e, t, r) {
  var n, i, a;
  if (this._monthsParseExact)
    return Hp.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (i = $t([2e3, n]), r && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(i, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(i, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[n] && (a = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[n] = new RegExp(a.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (r && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!r && this._monthsParse[n].test(e))
      return n;
  }
}
function $l(e, t) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = Te(t);
    else if (t = e.localeData().monthsParse(t), !or(t))
      return e;
  }
  return r = Math.min(e.date(), li(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function Kl(e) {
  return e != null ? ($l(this, e), J.updateOffset(this, !0), this) : Fn(this, "Month");
}
function qp() {
  return li(this.year(), this.month());
}
function Gp(e) {
  return this._monthsParseExact ? (Me(this, "_monthsRegex") || Xl.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Me(this, "_monthsShortRegex") || (this._monthsShortRegex = Wp), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function $p(e) {
  return this._monthsParseExact ? (Me(this, "_monthsRegex") || Xl.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Me(this, "_monthsRegex") || (this._monthsRegex = Up), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Xl() {
  function e(s, u) {
    return u.length - s.length;
  }
  var t = [], r = [], n = [], i, a;
  for (i = 0; i < 12; i++)
    a = $t([2e3, i]), t.push(this.monthsShort(a, "")), r.push(this.months(a, "")), n.push(this.months(a, "")), n.push(this.monthsShort(a, ""));
  for (t.sort(e), r.sort(e), n.sort(e), i = 0; i < 12; i++)
    t[i] = xt(t[i]), r[i] = xt(r[i]);
  for (i = 0; i < 24; i++)
    n[i] = xt(n[i]);
  this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
he("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? qt(e, 4) : "+" + e;
});
he(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
he(0, ["YYYY", 4], 0, "year");
he(0, ["YYYYY", 5], 0, "year");
he(0, ["YYYYYY", 6, !0], 0, "year");
ht("year", "y");
mt("year", 1);
ae("Y", si);
ae("YY", Ge, Ot);
ae("YYYY", es, Ja);
ae("YYYYY", ai, ni);
ae("YYYYYY", ai, ni);
Ye(["YYYYY", "YYYYYY"], dt);
Ye("YYYY", function(e, t) {
  t[dt] = e.length === 2 ? J.parseTwoDigitYear(e) : Te(e);
});
Ye("YY", function(e, t) {
  t[dt] = J.parseTwoDigitYear(e);
});
Ye("Y", function(e, t) {
  t[dt] = parseInt(e, 10);
});
function dn(e) {
  return ri(e) ? 366 : 365;
}
J.parseTwoDigitYear = function(e) {
  return Te(e) + (Te(e) > 68 ? 1900 : 2e3);
};
var Ql = Qr("FullYear", !0);
function Kp() {
  return ri(this.year());
}
function Xp(e, t, r, n, i, a, s) {
  var u;
  return e < 100 && e >= 0 ? (u = new Date(e + 400, t, r, n, i, a, s), isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e, t, r, n, i, a, s), u;
}
function hn(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Bn(e, t, r) {
  var n = 7 + t - r, i = (7 + hn(e, 0, n).getUTCDay() - t) % 7;
  return -i + n - 1;
}
function Zl(e, t, r, n, i) {
  var a = (7 + r - n) % 7, s = Bn(e, n, i), u = 1 + 7 * (t - 1) + a + s, o, l;
  return u <= 0 ? (o = e - 1, l = dn(o) + u) : u > dn(e) ? (o = e + 1, l = u - dn(e)) : (o = e, l = u), {
    year: o,
    dayOfYear: l
  };
}
function mn(e, t, r) {
  var n = Bn(e.year(), t, r), i = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, a, s;
  return i < 1 ? (s = e.year() - 1, a = i + sr(s, t, r)) : i > sr(e.year(), t, r) ? (a = i - sr(e.year(), t, r), s = e.year() + 1) : (s = e.year(), a = i), {
    week: a,
    year: s
  };
}
function sr(e, t, r) {
  var n = Bn(e, t, r), i = Bn(e + 1, t, r);
  return (dn(e) - n + i) / 7;
}
he("w", ["ww", 2], "wo", "week");
he("W", ["WW", 2], "Wo", "isoWeek");
ht("week", "w");
ht("isoWeek", "W");
mt("week", 5);
mt("isoWeek", 5);
ae("w", Ge);
ae("ww", Ge, Ot);
ae("W", Ge);
ae("WW", Ge, Ot);
wn(
  ["w", "ww", "W", "WW"],
  function(e, t, r, n) {
    t[n.substr(0, 1)] = Te(e);
  }
);
function Qp(e) {
  return mn(e, this._week.dow, this._week.doy).week;
}
var Zp = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Jp() {
  return this._week.dow;
}
function eg() {
  return this._week.doy;
}
function tg(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function rg(e) {
  var t = mn(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
he("d", 0, "do", "day");
he("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
he("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
he("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
he("e", 0, 0, "weekday");
he("E", 0, 0, "isoWeekday");
ht("day", "d");
ht("weekday", "e");
ht("isoWeekday", "E");
mt("day", 11);
mt("weekday", 11);
mt("isoWeekday", 11);
ae("d", Ge);
ae("e", Ge);
ae("E", Ge);
ae("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
ae("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
ae("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
wn(["dd", "ddd", "dddd"], function(e, t, r, n) {
  var i = r._locale.weekdaysParse(e, n, r._strict);
  i != null ? t.d = i : xe(r).invalidWeekday = e;
});
wn(["d", "e", "E"], function(e, t, r, n) {
  t[n] = Te(e);
});
function ng(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function ig(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function ts(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var ag = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Jl = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), sg = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), og = bn, lg = bn, ug = bn;
function cg(e, t) {
  var r = Yt(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? ts(r, this._week.dow) : e ? r[e.day()] : r;
}
function dg(e) {
  return e === !0 ? ts(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function fg(e) {
  return e === !0 ? ts(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function hg(e, t, r) {
  var n, i, a, s = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      a = $t([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(a, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (i = rt.call(this._weekdaysParse, s), i !== -1 ? i : null) : t === "ddd" ? (i = rt.call(this._shortWeekdaysParse, s), i !== -1 ? i : null) : (i = rt.call(this._minWeekdaysParse, s), i !== -1 ? i : null) : t === "dddd" ? (i = rt.call(this._weekdaysParse, s), i !== -1 || (i = rt.call(this._shortWeekdaysParse, s), i !== -1) ? i : (i = rt.call(this._minWeekdaysParse, s), i !== -1 ? i : null)) : t === "ddd" ? (i = rt.call(this._shortWeekdaysParse, s), i !== -1 || (i = rt.call(this._weekdaysParse, s), i !== -1) ? i : (i = rt.call(this._minWeekdaysParse, s), i !== -1 ? i : null)) : (i = rt.call(this._minWeekdaysParse, s), i !== -1 || (i = rt.call(this._weekdaysParse, s), i !== -1) ? i : (i = rt.call(this._shortWeekdaysParse, s), i !== -1 ? i : null));
}
function mg(e, t, r) {
  var n, i, a;
  if (this._weekdaysParseExact)
    return hg.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (i = $t([2e3, 1]).day(n), r && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (a = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[n] = new RegExp(a.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (r && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (r && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!r && this._weekdaysParse[n].test(e))
      return n;
  }
}
function pg(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = ng(e, this.localeData()), this.add(e - t, "d")) : t;
}
function gg(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function _g(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = ig(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function vg(e) {
  return this._weekdaysParseExact ? (Me(this, "_weekdaysRegex") || rs.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Me(this, "_weekdaysRegex") || (this._weekdaysRegex = og), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function yg(e) {
  return this._weekdaysParseExact ? (Me(this, "_weekdaysRegex") || rs.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Me(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = lg), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function bg(e) {
  return this._weekdaysParseExact ? (Me(this, "_weekdaysRegex") || rs.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Me(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ug), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function rs() {
  function e(f, m) {
    return m.length - f.length;
  }
  var t = [], r = [], n = [], i = [], a, s, u, o, l;
  for (a = 0; a < 7; a++)
    s = $t([2e3, 1]).day(a), u = xt(this.weekdaysMin(s, "")), o = xt(this.weekdaysShort(s, "")), l = xt(this.weekdays(s, "")), t.push(u), r.push(o), n.push(l), i.push(u), i.push(o), i.push(l);
  t.sort(e), r.sort(e), n.sort(e), i.sort(e), this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function ns() {
  return this.hours() % 12 || 12;
}
function wg() {
  return this.hours() || 24;
}
he("H", ["HH", 2], 0, "hour");
he("h", ["hh", 2], 0, ns);
he("k", ["kk", 2], 0, wg);
he("hmm", 0, 0, function() {
  return "" + ns.apply(this) + qt(this.minutes(), 2);
});
he("hmmss", 0, 0, function() {
  return "" + ns.apply(this) + qt(this.minutes(), 2) + qt(this.seconds(), 2);
});
he("Hmm", 0, 0, function() {
  return "" + this.hours() + qt(this.minutes(), 2);
});
he("Hmmss", 0, 0, function() {
  return "" + this.hours() + qt(this.minutes(), 2) + qt(this.seconds(), 2);
});
function eu(e, t) {
  he(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
eu("a", !0);
eu("A", !1);
ht("hour", "h");
mt("hour", 13);
function tu(e, t) {
  return t._meridiemParse;
}
ae("a", tu);
ae("A", tu);
ae("H", Ge);
ae("h", Ge);
ae("k", Ge);
ae("HH", Ge, Ot);
ae("hh", Ge, Ot);
ae("kk", Ge, Ot);
ae("hmm", Hl);
ae("hmmss", jl);
ae("Hmm", Hl);
ae("Hmmss", jl);
Ye(["H", "HH"], st);
Ye(["k", "kk"], function(e, t, r) {
  var n = Te(e);
  t[st] = n === 24 ? 0 : n;
});
Ye(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
Ye(["h", "hh"], function(e, t, r) {
  t[st] = Te(e), xe(r).bigHour = !0;
});
Ye("hmm", function(e, t, r) {
  var n = e.length - 2;
  t[st] = Te(e.substr(0, n)), t[Ft] = Te(e.substr(n)), xe(r).bigHour = !0;
});
Ye("hmmss", function(e, t, r) {
  var n = e.length - 4, i = e.length - 2;
  t[st] = Te(e.substr(0, n)), t[Ft] = Te(e.substr(n, 2)), t[nr] = Te(e.substr(i)), xe(r).bigHour = !0;
});
Ye("Hmm", function(e, t, r) {
  var n = e.length - 2;
  t[st] = Te(e.substr(0, n)), t[Ft] = Te(e.substr(n));
});
Ye("Hmmss", function(e, t, r) {
  var n = e.length - 4, i = e.length - 2;
  t[st] = Te(e.substr(0, n)), t[Ft] = Te(e.substr(n, 2)), t[nr] = Te(e.substr(i));
});
function kg(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var xg = /[ap]\.?m?\.?/i, Sg = Qr("Hours", !0);
function Tg(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var ru = {
  calendar: mp,
  longDateFormat: vp,
  invalidDate: bp,
  ordinal: kp,
  dayOfMonthOrdinalParse: xp,
  relativeTime: Tp,
  months: Bp,
  monthsShort: ql,
  week: Zp,
  weekdays: ag,
  weekdaysMin: sg,
  weekdaysShort: Jl,
  meridiemParse: xg
}, Ze = {}, sn = {}, pn;
function Og(e, t) {
  var r, n = Math.min(e.length, t.length);
  for (r = 0; r < n; r += 1)
    if (e[r] !== t[r])
      return r;
  return n;
}
function co(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Eg(e) {
  for (var t = 0, r, n, i, a; t < e.length; ) {
    for (a = co(e[t]).split("-"), r = a.length, n = co(e[t + 1]), n = n ? n.split("-") : null; r > 0; ) {
      if (i = ui(a.slice(0, r).join("-")), i)
        return i;
      if (n && n.length >= r && Og(a, n) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return pn;
}
function Dg(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function ui(e) {
  var t = null, r;
  if (Ze[e] === void 0 && typeof module < "u" && module && module.exports && Dg(e))
    try {
      t = pn._abbr, r = require, r("./locale/" + e), gr(t);
    } catch {
      Ze[e] = null;
    }
  return Ze[e];
}
function gr(e, t) {
  var r;
  return e && (yt(t) ? r = ur(e) : r = is(e, t), r ? pn = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), pn._abbr;
}
function is(e, t) {
  if (t !== null) {
    var r, n = ru;
    if (t.abbr = e, Ze[e] != null)
      Yl(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = Ze[e]._config;
    else if (t.parentLocale != null)
      if (Ze[t.parentLocale] != null)
        n = Ze[t.parentLocale]._config;
      else if (r = ui(t.parentLocale), r != null)
        n = r._config;
      else
        return sn[t.parentLocale] || (sn[t.parentLocale] = []), sn[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return Ze[e] = new Xa(va(n, t)), sn[e] && sn[e].forEach(function(i) {
      is(i.name, i.config);
    }), gr(e), Ze[e];
  } else
    return delete Ze[e], null;
}
function Cg(e, t) {
  if (t != null) {
    var r, n, i = ru;
    Ze[e] != null && Ze[e].parentLocale != null ? Ze[e].set(va(Ze[e]._config, t)) : (n = ui(e), n != null && (i = n._config), t = va(i, t), n == null && (t.abbr = e), r = new Xa(t), r.parentLocale = Ze[e], Ze[e] = r), gr(e);
  } else
    Ze[e] != null && (Ze[e].parentLocale != null ? (Ze[e] = Ze[e].parentLocale, e === gr() && gr(e)) : Ze[e] != null && delete Ze[e]);
  return Ze[e];
}
function ur(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return pn;
  if (!Yt(e)) {
    if (t = ui(e), t)
      return t;
    e = [e];
  }
  return Eg(e);
}
function Ig() {
  return ya(Ze);
}
function as(e) {
  var t, r = e._a;
  return r && xe(e).overflow === -2 && (t = r[rr] < 0 || r[rr] > 11 ? rr : r[jt] < 1 || r[jt] > li(r[dt], r[rr]) ? jt : r[st] < 0 || r[st] > 24 || r[st] === 24 && (r[Ft] !== 0 || r[nr] !== 0 || r[Dr] !== 0) ? st : r[Ft] < 0 || r[Ft] > 59 ? Ft : r[nr] < 0 || r[nr] > 59 ? nr : r[Dr] < 0 || r[Dr] > 999 ? Dr : -1, xe(e)._overflowDayOfYear && (t < dt || t > jt) && (t = jt), xe(e)._overflowWeeks && t === -1 && (t = Rp), xe(e)._overflowWeekday && t === -1 && (t = Fp), xe(e).overflow = t), e;
}
var Pg = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Lg = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Mg = /Z|[+-]\d\d(?::?\d\d)?/, Pn = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Ri = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Ng = /^\/?Date\((-?\d+)/i, Ag = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Rg = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function nu(e) {
  var t, r, n = e._i, i = Pg.exec(n) || Lg.exec(n), a, s, u, o, l = Pn.length, f = Ri.length;
  if (i) {
    for (xe(e).iso = !0, t = 0, r = l; t < r; t++)
      if (Pn[t][1].exec(i[1])) {
        s = Pn[t][0], a = Pn[t][2] !== !1;
        break;
      }
    if (s == null) {
      e._isValid = !1;
      return;
    }
    if (i[3]) {
      for (t = 0, r = f; t < r; t++)
        if (Ri[t][1].exec(i[3])) {
          u = (i[2] || " ") + Ri[t][0];
          break;
        }
      if (u == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!a && u != null) {
      e._isValid = !1;
      return;
    }
    if (i[4])
      if (Mg.exec(i[4]))
        o = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = s + (u || "") + (o || ""), os(e);
  } else
    e._isValid = !1;
}
function Fg(e, t, r, n, i, a) {
  var s = [
    Yg(e),
    ql.indexOf(t),
    parseInt(r, 10),
    parseInt(n, 10),
    parseInt(i, 10)
  ];
  return a && s.push(parseInt(a, 10)), s;
}
function Yg(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Bg(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Wg(e, t, r) {
  if (e) {
    var n = Jl.indexOf(e), i = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== i)
      return xe(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function Ug(e, t, r) {
  if (e)
    return Rg[e];
  if (t)
    return 0;
  var n = parseInt(r, 10), i = n % 100, a = (n - i) / 100;
  return a * 60 + i;
}
function iu(e) {
  var t = Ag.exec(Bg(e._i)), r;
  if (t) {
    if (r = Fg(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Wg(t[1], r, e))
      return;
    e._a = r, e._tzm = Ug(t[8], t[9], t[10]), e._d = hn.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), xe(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function zg(e) {
  var t = Ng.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (nu(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (iu(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : J.createFromInputFallback(e);
}
J.createFromInputFallback = Lt(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Br(e, t, r) {
  return e ?? t ?? r;
}
function Vg(e) {
  var t = new Date(J.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function ss(e) {
  var t, r, n = [], i, a, s;
  if (!e._d) {
    for (i = Vg(e), e._w && e._a[jt] == null && e._a[rr] == null && Hg(e), e._dayOfYear != null && (s = Br(e._a[dt], i[dt]), (e._dayOfYear > dn(s) || e._dayOfYear === 0) && (xe(e)._overflowDayOfYear = !0), r = hn(s, 0, e._dayOfYear), e._a[rr] = r.getUTCMonth(), e._a[jt] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = i[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[st] === 24 && e._a[Ft] === 0 && e._a[nr] === 0 && e._a[Dr] === 0 && (e._nextDay = !0, e._a[st] = 0), e._d = (e._useUTC ? hn : Xp).apply(
      null,
      n
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[st] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (xe(e).weekdayMismatch = !0);
  }
}
function Hg(e) {
  var t, r, n, i, a, s, u, o, l;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, s = 4, r = Br(
    t.GG,
    e._a[dt],
    mn(qe(), 1, 4).year
  ), n = Br(t.W, 1), i = Br(t.E, 1), (i < 1 || i > 7) && (o = !0)) : (a = e._locale._week.dow, s = e._locale._week.doy, l = mn(qe(), a, s), r = Br(t.gg, e._a[dt], l.year), n = Br(t.w, l.week), t.d != null ? (i = t.d, (i < 0 || i > 6) && (o = !0)) : t.e != null ? (i = t.e + a, (t.e < 0 || t.e > 6) && (o = !0)) : i = a), n < 1 || n > sr(r, a, s) ? xe(e)._overflowWeeks = !0 : o != null ? xe(e)._overflowWeekday = !0 : (u = Zl(r, n, i, a, s), e._a[dt] = u.year, e._dayOfYear = u.dayOfYear);
}
J.ISO_8601 = function() {
};
J.RFC_2822 = function() {
};
function os(e) {
  if (e._f === J.ISO_8601) {
    nu(e);
    return;
  }
  if (e._f === J.RFC_2822) {
    iu(e);
    return;
  }
  e._a = [], xe(e).empty = !0;
  var t = "" + e._i, r, n, i, a, s, u = t.length, o = 0, l, f;
  for (i = Bl(e._f, e._locale).match(Qa) || [], f = i.length, r = 0; r < f; r++)
    a = i[r], n = (t.match(Mp(a, e)) || [])[0], n && (s = t.substr(0, t.indexOf(n)), s.length > 0 && xe(e).unusedInput.push(s), t = t.slice(
      t.indexOf(n) + n.length
    ), o += n.length), Vr[a] ? (n ? xe(e).empty = !1 : xe(e).unusedTokens.push(a), Ap(a, n, e)) : e._strict && !n && xe(e).unusedTokens.push(a);
  xe(e).charsLeftOver = u - o, t.length > 0 && xe(e).unusedInput.push(t), e._a[st] <= 12 && xe(e).bigHour === !0 && e._a[st] > 0 && (xe(e).bigHour = void 0), xe(e).parsedDateParts = e._a.slice(0), xe(e).meridiem = e._meridiem, e._a[st] = jg(
    e._locale,
    e._a[st],
    e._meridiem
  ), l = xe(e).era, l !== null && (e._a[dt] = e._locale.erasConvertYear(l, e._a[dt])), ss(e), as(e);
}
function jg(e, t, r) {
  var n;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (n = e.isPM(r), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function qg(e) {
  var t, r, n, i, a, s, u = !1, o = e._f.length;
  if (o === 0) {
    xe(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (i = 0; i < o; i++)
    a = 0, s = !1, t = Ka({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[i], os(t), $a(t) && (s = !0), a += xe(t).charsLeftOver, a += xe(t).unusedTokens.length * 10, xe(t).score = a, u ? a < n && (n = a, r = t) : (n == null || a < n || s) && (n = a, r = t, s && (u = !0));
  mr(e, r || t);
}
function Gg(e) {
  if (!e._d) {
    var t = Za(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = Rl(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), ss(e);
  }
}
function $g(e) {
  var t = new yn(as(au(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function au(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || ur(e._l), t === null || r === void 0 && t === "" ? ti({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Bt(t) ? new yn(as(t)) : (vn(t) ? e._d = t : Yt(r) ? qg(e) : r ? os(e) : Kg(e), $a(e) || (e._d = null), e));
}
function Kg(e) {
  var t = e._i;
  yt(t) ? e._d = new Date(J.now()) : vn(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? zg(e) : Yt(t) ? (e._a = Rl(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), ss(e)) : Ir(t) ? Gg(e) : or(t) ? e._d = new Date(t) : J.createFromInputFallback(e);
}
function su(e, t, r, n, i) {
  var a = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (r === !0 || r === !1) && (n = r, r = void 0), (Ir(e) && Ga(e) || Yt(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = i, a._l = r, a._i = e, a._f = t, a._strict = n, $g(a);
}
function qe(e, t, r, n) {
  return su(e, t, r, n, !1);
}
var Xg = Lt(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = qe.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : ti();
  }
), Qg = Lt(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = qe.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : ti();
  }
);
function ou(e, t) {
  var r, n;
  if (t.length === 1 && Yt(t[0]) && (t = t[0]), !t.length)
    return qe();
  for (r = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
  return r;
}
function Zg() {
  var e = [].slice.call(arguments, 0);
  return ou("isBefore", e);
}
function Jg() {
  var e = [].slice.call(arguments, 0);
  return ou("isAfter", e);
}
var e_ = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, on = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function t_(e) {
  var t, r = !1, n, i = on.length;
  for (t in e)
    if (Me(e, t) && !(rt.call(on, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < i; ++n)
    if (e[on[n]]) {
      if (r)
        return !1;
      parseFloat(e[on[n]]) !== Te(e[on[n]]) && (r = !0);
    }
  return !0;
}
function r_() {
  return this._isValid;
}
function n_() {
  return Ut(NaN);
}
function ci(e) {
  var t = Za(e), r = t.year || 0, n = t.quarter || 0, i = t.month || 0, a = t.week || t.isoWeek || 0, s = t.day || 0, u = t.hour || 0, o = t.minute || 0, l = t.second || 0, f = t.millisecond || 0;
  this._isValid = t_(t), this._milliseconds = +f + l * 1e3 + // 1000
  o * 6e4 + // 1000 * 60
  u * 1e3 * 60 * 60, this._days = +s + a * 7, this._months = +i + n * 3 + r * 12, this._data = {}, this._locale = ur(), this._bubble();
}
function Mn(e) {
  return e instanceof ci;
}
function wa(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function i_(e, t, r) {
  var n = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), a = 0, s;
  for (s = 0; s < n; s++)
    (r && e[s] !== t[s] || !r && Te(e[s]) !== Te(t[s])) && a++;
  return a + i;
}
function lu(e, t) {
  he(e, 0, 0, function() {
    var r = this.utcOffset(), n = "+";
    return r < 0 && (r = -r, n = "-"), n + qt(~~(r / 60), 2) + t + qt(~~r % 60, 2);
  });
}
lu("Z", ":");
lu("ZZ", "");
ae("Z", oi);
ae("ZZ", oi);
Ye(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = ls(oi, e);
});
var a_ = /([\+\-]|\d\d)/gi;
function ls(e, t) {
  var r = (t || "").match(e), n, i, a;
  return r === null ? null : (n = r[r.length - 1] || [], i = (n + "").match(a_) || ["-", 0, 0], a = +(i[1] * 60) + Te(i[2]), a === 0 ? 0 : i[0] === "+" ? a : -a);
}
function us(e, t) {
  var r, n;
  return t._isUTC ? (r = t.clone(), n = (Bt(e) || vn(e) ? e.valueOf() : qe(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + n), J.updateOffset(r, !1), r) : qe(e).local();
}
function ka(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
J.updateOffset = function() {
};
function s_(e, t, r) {
  var n = this._offset || 0, i;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = ls(oi, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (i = ka(this)), this._offset = e, this._isUTC = !0, i != null && this.add(i, "m"), n !== e && (!t || this._changeInProgress ? du(
      this,
      Ut(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, J.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : ka(this);
}
function o_(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function l_(e) {
  return this.utcOffset(0, e);
}
function u_(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(ka(this), "m")), this;
}
function c_() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = ls(Pp, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function d_(e) {
  return this.isValid() ? (e = e ? qe(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function f_() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function h_() {
  if (!yt(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Ka(e, this), e = au(e), e._a ? (t = e._isUTC ? $t(e._a) : qe(e._a), this._isDSTShifted = this.isValid() && i_(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function m_() {
  return this.isValid() ? !this._isUTC : !1;
}
function p_() {
  return this.isValid() ? this._isUTC : !1;
}
function uu() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var g_ = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, __ = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Ut(e, t) {
  var r = e, n = null, i, a, s;
  return Mn(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : or(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (n = g_.exec(e)) ? (i = n[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: Te(n[jt]) * i,
    h: Te(n[st]) * i,
    m: Te(n[Ft]) * i,
    s: Te(n[nr]) * i,
    ms: Te(wa(n[Dr] * 1e3)) * i
    // the millisecond decimal point is included in the match
  }) : (n = __.exec(e)) ? (i = n[1] === "-" ? -1 : 1, r = {
    y: Or(n[2], i),
    M: Or(n[3], i),
    w: Or(n[4], i),
    d: Or(n[5], i),
    h: Or(n[6], i),
    m: Or(n[7], i),
    s: Or(n[8], i)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (s = v_(
    qe(r.from),
    qe(r.to)
  ), r = {}, r.ms = s.milliseconds, r.M = s.months), a = new ci(r), Mn(e) && Me(e, "_locale") && (a._locale = e._locale), Mn(e) && Me(e, "_isValid") && (a._isValid = e._isValid), a;
}
Ut.fn = ci.prototype;
Ut.invalid = n_;
function Or(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function fo(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function v_(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = us(t, e), e.isBefore(t) ? r = fo(e, t) : (r = fo(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function cu(e, t) {
  return function(r, n) {
    var i, a;
    return n !== null && !isNaN(+n) && (Yl(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = r, r = n, n = a), i = Ut(r, n), du(this, i, e), this;
  };
}
function du(e, t, r, n) {
  var i = t._milliseconds, a = wa(t._days), s = wa(t._months);
  e.isValid() && (n = n ?? !0, s && $l(e, Fn(e, "Month") + s * r), a && Ul(e, "Date", Fn(e, "Date") + a * r), i && e._d.setTime(e._d.valueOf() + i * r), n && J.updateOffset(e, a || s));
}
var y_ = cu(1, "add"), b_ = cu(-1, "subtract");
function fu(e) {
  return typeof e == "string" || e instanceof String;
}
function w_(e) {
  return Bt(e) || vn(e) || fu(e) || or(e) || x_(e) || k_(e) || e === null || e === void 0;
}
function k_(e) {
  var t = Ir(e) && !Ga(e), r = !1, n = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], i, a, s = n.length;
  for (i = 0; i < s; i += 1)
    a = n[i], r = r || Me(e, a);
  return t && r;
}
function x_(e) {
  var t = Yt(e), r = !1;
  return t && (r = e.filter(function(n) {
    return !or(n) && fu(e);
  }).length === 0), t && r;
}
function S_(e) {
  var t = Ir(e) && !Ga(e), r = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], i, a;
  for (i = 0; i < n.length; i += 1)
    a = n[i], r = r || Me(e, a);
  return t && r;
}
function T_(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function O_(e, t) {
  arguments.length === 1 && (arguments[0] ? w_(arguments[0]) ? (e = arguments[0], t = void 0) : S_(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || qe(), n = us(r, this).startOf("day"), i = J.calendarFormat(this, n) || "sameElse", a = t && (Kt(t[i]) ? t[i].call(this, r) : t[i]);
  return this.format(
    a || this.localeData().calendar(i, this, qe(r))
  );
}
function E_() {
  return new yn(this);
}
function D_(e, t) {
  var r = Bt(e) ? e : qe(e);
  return this.isValid() && r.isValid() ? (t = Mt(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function C_(e, t) {
  var r = Bt(e) ? e : qe(e);
  return this.isValid() && r.isValid() ? (t = Mt(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function I_(e, t, r, n) {
  var i = Bt(e) ? e : qe(e), a = Bt(t) ? t : qe(t);
  return this.isValid() && i.isValid() && a.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(i, r) : !this.isBefore(i, r)) && (n[1] === ")" ? this.isBefore(a, r) : !this.isAfter(a, r))) : !1;
}
function P_(e, t) {
  var r = Bt(e) ? e : qe(e), n;
  return this.isValid() && r.isValid() ? (t = Mt(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function L_(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function M_(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function N_(e, t, r) {
  var n, i, a;
  if (!this.isValid())
    return NaN;
  if (n = us(e, this), !n.isValid())
    return NaN;
  switch (i = (n.utcOffset() - this.utcOffset()) * 6e4, t = Mt(t), t) {
    case "year":
      a = Nn(this, n) / 12;
      break;
    case "month":
      a = Nn(this, n);
      break;
    case "quarter":
      a = Nn(this, n) / 3;
      break;
    case "second":
      a = (this - n) / 1e3;
      break;
    case "minute":
      a = (this - n) / 6e4;
      break;
    case "hour":
      a = (this - n) / 36e5;
      break;
    case "day":
      a = (this - n - i) / 864e5;
      break;
    case "week":
      a = (this - n - i) / 6048e5;
      break;
    default:
      a = this - n;
  }
  return r ? a : Ct(a);
}
function Nn(e, t) {
  if (e.date() < t.date())
    return -Nn(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(r, "months"), i, a;
  return t - n < 0 ? (i = e.clone().add(r - 1, "months"), a = (t - n) / (n - i)) : (i = e.clone().add(r + 1, "months"), a = (t - n) / (i - n)), -(r + a) || 0;
}
J.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
J.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function A_() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function R_(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? Ln(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Kt(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ln(r, "Z")) : Ln(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function F_() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, n, i, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(r + n + i + a);
}
function Y_(e) {
  e || (e = this.isUtc() ? J.defaultFormatUtc : J.defaultFormat);
  var t = Ln(this, e);
  return this.localeData().postformat(t);
}
function B_(e, t) {
  return this.isValid() && (Bt(e) && e.isValid() || qe(e).isValid()) ? Ut({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function W_(e) {
  return this.from(qe(), e);
}
function U_(e, t) {
  return this.isValid() && (Bt(e) && e.isValid() || qe(e).isValid()) ? Ut({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function z_(e) {
  return this.to(qe(), e);
}
function hu(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = ur(e), t != null && (this._locale = t), this);
}
var mu = Lt(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function pu() {
  return this._locale;
}
var Wn = 1e3, Hr = 60 * Wn, Un = 60 * Hr, gu = (365 * 400 + 97) * 24 * Un;
function jr(e, t) {
  return (e % t + t) % t;
}
function _u(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - gu : new Date(e, t, r).valueOf();
}
function vu(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - gu : Date.UTC(e, t, r);
}
function V_(e) {
  var t, r;
  if (e = Mt(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? vu : _u, e) {
    case "year":
      t = r(this.year(), 0, 1);
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = r(this.year(), this.month(), 1);
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= jr(
        t + (this._isUTC ? 0 : this.utcOffset() * Hr),
        Un
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= jr(t, Hr);
      break;
    case "second":
      t = this._d.valueOf(), t -= jr(t, Wn);
      break;
  }
  return this._d.setTime(t), J.updateOffset(this, !0), this;
}
function H_(e) {
  var t, r;
  if (e = Mt(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? vu : _u, e) {
    case "year":
      t = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Un - jr(
        t + (this._isUTC ? 0 : this.utcOffset() * Hr),
        Un
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Hr - jr(t, Hr) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Wn - jr(t, Wn) - 1;
      break;
  }
  return this._d.setTime(t), J.updateOffset(this, !0), this;
}
function j_() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function q_() {
  return Math.floor(this.valueOf() / 1e3);
}
function G_() {
  return new Date(this.valueOf());
}
function $_() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function K_() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function X_() {
  return this.isValid() ? this.toISOString() : null;
}
function Q_() {
  return $a(this);
}
function Z_() {
  return mr({}, xe(this));
}
function J_() {
  return xe(this).overflow;
}
function ev() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
he("N", 0, 0, "eraAbbr");
he("NN", 0, 0, "eraAbbr");
he("NNN", 0, 0, "eraAbbr");
he("NNNN", 0, 0, "eraName");
he("NNNNN", 0, 0, "eraNarrow");
he("y", ["y", 1], "yo", "eraYear");
he("y", ["yy", 2], 0, "eraYear");
he("y", ["yyy", 3], 0, "eraYear");
he("y", ["yyyy", 4], 0, "eraYear");
ae("N", cs);
ae("NN", cs);
ae("NNN", cs);
ae("NNNN", dv);
ae("NNNNN", fv);
Ye(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, n) {
    var i = r._locale.erasParse(e, n, r._strict);
    i ? xe(r).era = i : xe(r).invalidEra = e;
  }
);
ae("y", Zr);
ae("yy", Zr);
ae("yyy", Zr);
ae("yyyy", Zr);
ae("yo", hv);
Ye(["y", "yy", "yyy", "yyyy"], dt);
Ye(["yo"], function(e, t, r, n) {
  var i;
  r._locale._eraYearOrdinalRegex && (i = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[dt] = r._locale.eraYearOrdinalParse(e, i) : t[dt] = parseInt(e, 10);
});
function tv(e, t) {
  var r, n, i, a = this._eras || ur("en")._eras;
  for (r = 0, n = a.length; r < n; ++r) {
    switch (typeof a[r].since) {
      case "string":
        i = J(a[r].since).startOf("day"), a[r].since = i.valueOf();
        break;
    }
    switch (typeof a[r].until) {
      case "undefined":
        a[r].until = 1 / 0;
        break;
      case "string":
        i = J(a[r].until).startOf("day").valueOf(), a[r].until = i.valueOf();
        break;
    }
  }
  return a;
}
function rv(e, t, r) {
  var n, i, a = this.eras(), s, u, o;
  for (e = e.toUpperCase(), n = 0, i = a.length; n < i; ++n)
    if (s = a[n].name.toUpperCase(), u = a[n].abbr.toUpperCase(), o = a[n].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (u === e)
            return a[n];
          break;
        case "NNNN":
          if (s === e)
            return a[n];
          break;
        case "NNNNN":
          if (o === e)
            return a[n];
          break;
      }
    else if ([s, u, o].indexOf(e) >= 0)
      return a[n];
}
function nv(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? J(e.since).year() : J(e.since).year() + (t - e.offset) * r;
}
function iv() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].name;
  return "";
}
function av() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].narrow;
  return "";
}
function sv() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].abbr;
  return "";
}
function ov() {
  var e, t, r, n, i = this.localeData().eras();
  for (e = 0, t = i.length; e < t; ++e)
    if (r = i[e].since <= i[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), i[e].since <= n && n <= i[e].until || i[e].until <= n && n <= i[e].since)
      return (this.year() - J(i[e].since).year()) * r + i[e].offset;
  return this.year();
}
function lv(e) {
  return Me(this, "_erasNameRegex") || ds.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function uv(e) {
  return Me(this, "_erasAbbrRegex") || ds.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function cv(e) {
  return Me(this, "_erasNarrowRegex") || ds.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function cs(e, t) {
  return t.erasAbbrRegex(e);
}
function dv(e, t) {
  return t.erasNameRegex(e);
}
function fv(e, t) {
  return t.erasNarrowRegex(e);
}
function hv(e, t) {
  return t._eraYearOrdinalRegex || Zr;
}
function ds() {
  var e = [], t = [], r = [], n = [], i, a, s = this.eras();
  for (i = 0, a = s.length; i < a; ++i)
    t.push(xt(s[i].name)), e.push(xt(s[i].abbr)), r.push(xt(s[i].narrow)), n.push(xt(s[i].name)), n.push(xt(s[i].abbr)), n.push(xt(s[i].narrow));
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
he(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
he(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function di(e, t) {
  he(0, [e, e.length], 0, t);
}
di("gggg", "weekYear");
di("ggggg", "weekYear");
di("GGGG", "isoWeekYear");
di("GGGGG", "isoWeekYear");
ht("weekYear", "gg");
ht("isoWeekYear", "GG");
mt("weekYear", 1);
mt("isoWeekYear", 1);
ae("G", si);
ae("g", si);
ae("GG", Ge, Ot);
ae("gg", Ge, Ot);
ae("GGGG", es, Ja);
ae("gggg", es, Ja);
ae("GGGGG", ai, ni);
ae("ggggg", ai, ni);
wn(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, n) {
    t[n.substr(0, 2)] = Te(e);
  }
);
wn(["gg", "GG"], function(e, t, r, n) {
  t[n] = J.parseTwoDigitYear(e);
});
function mv(e) {
  return yu.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function pv(e) {
  return yu.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function gv() {
  return sr(this.year(), 1, 4);
}
function _v() {
  return sr(this.isoWeekYear(), 1, 4);
}
function vv() {
  var e = this.localeData()._week;
  return sr(this.year(), e.dow, e.doy);
}
function yv() {
  var e = this.localeData()._week;
  return sr(this.weekYear(), e.dow, e.doy);
}
function yu(e, t, r, n, i) {
  var a;
  return e == null ? mn(this, n, i).year : (a = sr(e, n, i), t > a && (t = a), bv.call(this, e, t, r, n, i));
}
function bv(e, t, r, n, i) {
  var a = Zl(e, t, r, n, i), s = hn(a.year, 0, a.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
}
he("Q", 0, "Qo", "quarter");
ht("quarter", "Q");
mt("quarter", 7);
ae("Q", zl);
Ye("Q", function(e, t) {
  t[rr] = (Te(e) - 1) * 3;
});
function wv(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
he("D", ["DD", 2], "Do", "date");
ht("date", "D");
mt("date", 9);
ae("D", Ge);
ae("DD", Ge, Ot);
ae("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Ye(["D", "DD"], jt);
Ye("Do", function(e, t) {
  t[jt] = Te(e.match(Ge)[0]);
});
var bu = Qr("Date", !0);
he("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
ht("dayOfYear", "DDD");
mt("dayOfYear", 4);
ae("DDD", ii);
ae("DDDD", Vl);
Ye(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = Te(e);
});
function kv(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
he("m", ["mm", 2], 0, "minute");
ht("minute", "m");
mt("minute", 14);
ae("m", Ge);
ae("mm", Ge, Ot);
Ye(["m", "mm"], Ft);
var xv = Qr("Minutes", !1);
he("s", ["ss", 2], 0, "second");
ht("second", "s");
mt("second", 15);
ae("s", Ge);
ae("ss", Ge, Ot);
Ye(["s", "ss"], nr);
var Sv = Qr("Seconds", !1);
he("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
he(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
he(0, ["SSS", 3], 0, "millisecond");
he(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
he(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
he(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
he(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
he(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
he(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
ht("millisecond", "ms");
mt("millisecond", 16);
ae("S", ii, zl);
ae("SS", ii, Ot);
ae("SSS", ii, Vl);
var pr, wu;
for (pr = "SSSS"; pr.length <= 9; pr += "S")
  ae(pr, Zr);
function Tv(e, t) {
  t[Dr] = Te(("0." + e) * 1e3);
}
for (pr = "S"; pr.length <= 9; pr += "S")
  Ye(pr, Tv);
wu = Qr("Milliseconds", !1);
he("z", 0, 0, "zoneAbbr");
he("zz", 0, 0, "zoneName");
function Ov() {
  return this._isUTC ? "UTC" : "";
}
function Ev() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var $ = yn.prototype;
$.add = y_;
$.calendar = O_;
$.clone = E_;
$.diff = N_;
$.endOf = H_;
$.format = Y_;
$.from = B_;
$.fromNow = W_;
$.to = U_;
$.toNow = z_;
$.get = Cp;
$.invalidAt = J_;
$.isAfter = D_;
$.isBefore = C_;
$.isBetween = I_;
$.isSame = P_;
$.isSameOrAfter = L_;
$.isSameOrBefore = M_;
$.isValid = Q_;
$.lang = mu;
$.locale = hu;
$.localeData = pu;
$.max = Qg;
$.min = Xg;
$.parsingFlags = Z_;
$.set = Ip;
$.startOf = V_;
$.subtract = b_;
$.toArray = $_;
$.toObject = K_;
$.toDate = G_;
$.toISOString = R_;
$.inspect = F_;
typeof Symbol < "u" && Symbol.for != null && ($[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
$.toJSON = X_;
$.toString = A_;
$.unix = q_;
$.valueOf = j_;
$.creationData = ev;
$.eraName = iv;
$.eraNarrow = av;
$.eraAbbr = sv;
$.eraYear = ov;
$.year = Ql;
$.isLeapYear = Kp;
$.weekYear = mv;
$.isoWeekYear = pv;
$.quarter = $.quarters = wv;
$.month = Kl;
$.daysInMonth = qp;
$.week = $.weeks = tg;
$.isoWeek = $.isoWeeks = rg;
$.weeksInYear = vv;
$.weeksInWeekYear = yv;
$.isoWeeksInYear = gv;
$.isoWeeksInISOWeekYear = _v;
$.date = bu;
$.day = $.days = pg;
$.weekday = gg;
$.isoWeekday = _g;
$.dayOfYear = kv;
$.hour = $.hours = Sg;
$.minute = $.minutes = xv;
$.second = $.seconds = Sv;
$.millisecond = $.milliseconds = wu;
$.utcOffset = s_;
$.utc = l_;
$.local = u_;
$.parseZone = c_;
$.hasAlignedHourOffset = d_;
$.isDST = f_;
$.isLocal = m_;
$.isUtcOffset = p_;
$.isUtc = uu;
$.isUTC = uu;
$.zoneAbbr = Ov;
$.zoneName = Ev;
$.dates = Lt(
  "dates accessor is deprecated. Use date instead.",
  bu
);
$.months = Lt(
  "months accessor is deprecated. Use month instead",
  Kl
);
$.years = Lt(
  "years accessor is deprecated. Use year instead",
  Ql
);
$.zone = Lt(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  o_
);
$.isDSTShifted = Lt(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  h_
);
function Dv(e) {
  return qe(e * 1e3);
}
function Cv() {
  return qe.apply(null, arguments).parseZone();
}
function ku(e) {
  return e;
}
var Ne = Xa.prototype;
Ne.calendar = pp;
Ne.longDateFormat = yp;
Ne.invalidDate = wp;
Ne.ordinal = Sp;
Ne.preparse = ku;
Ne.postformat = ku;
Ne.relativeTime = Op;
Ne.pastFuture = Ep;
Ne.set = hp;
Ne.eras = tv;
Ne.erasParse = rv;
Ne.erasConvertYear = nv;
Ne.erasAbbrRegex = uv;
Ne.erasNameRegex = lv;
Ne.erasNarrowRegex = cv;
Ne.months = zp;
Ne.monthsShort = Vp;
Ne.monthsParse = jp;
Ne.monthsRegex = $p;
Ne.monthsShortRegex = Gp;
Ne.week = Qp;
Ne.firstDayOfYear = eg;
Ne.firstDayOfWeek = Jp;
Ne.weekdays = cg;
Ne.weekdaysMin = fg;
Ne.weekdaysShort = dg;
Ne.weekdaysParse = mg;
Ne.weekdaysRegex = vg;
Ne.weekdaysShortRegex = yg;
Ne.weekdaysMinRegex = bg;
Ne.isPM = kg;
Ne.meridiem = Tg;
function zn(e, t, r, n) {
  var i = ur(), a = $t().set(n, t);
  return i[r](a, e);
}
function xu(e, t, r) {
  if (or(e) && (t = e, e = void 0), e = e || "", t != null)
    return zn(e, t, r, "month");
  var n, i = [];
  for (n = 0; n < 12; n++)
    i[n] = zn(e, n, r, "month");
  return i;
}
function fs(e, t, r, n) {
  typeof e == "boolean" ? (or(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, or(t) && (r = t, t = void 0), t = t || "");
  var i = ur(), a = e ? i._week.dow : 0, s, u = [];
  if (r != null)
    return zn(t, (r + a) % 7, n, "day");
  for (s = 0; s < 7; s++)
    u[s] = zn(t, (s + a) % 7, n, "day");
  return u;
}
function Iv(e, t) {
  return xu(e, t, "months");
}
function Pv(e, t) {
  return xu(e, t, "monthsShort");
}
function Lv(e, t, r) {
  return fs(e, t, r, "weekdays");
}
function Mv(e, t, r) {
  return fs(e, t, r, "weekdaysShort");
}
function Nv(e, t, r) {
  return fs(e, t, r, "weekdaysMin");
}
gr("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, r = Te(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
J.lang = Lt(
  "moment.lang is deprecated. Use moment.locale instead.",
  gr
);
J.langData = Lt(
  "moment.langData is deprecated. Use moment.localeData instead.",
  ur
);
var Zt = Math.abs;
function Av() {
  var e = this._data;
  return this._milliseconds = Zt(this._milliseconds), this._days = Zt(this._days), this._months = Zt(this._months), e.milliseconds = Zt(e.milliseconds), e.seconds = Zt(e.seconds), e.minutes = Zt(e.minutes), e.hours = Zt(e.hours), e.months = Zt(e.months), e.years = Zt(e.years), this;
}
function Su(e, t, r, n) {
  var i = Ut(t, r);
  return e._milliseconds += n * i._milliseconds, e._days += n * i._days, e._months += n * i._months, e._bubble();
}
function Rv(e, t) {
  return Su(this, e, t, 1);
}
function Fv(e, t) {
  return Su(this, e, t, -1);
}
function ho(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Yv() {
  var e = this._milliseconds, t = this._days, r = this._months, n = this._data, i, a, s, u, o;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += ho(xa(r) + t) * 864e5, t = 0, r = 0), n.milliseconds = e % 1e3, i = Ct(e / 1e3), n.seconds = i % 60, a = Ct(i / 60), n.minutes = a % 60, s = Ct(a / 60), n.hours = s % 24, t += Ct(s / 24), o = Ct(Tu(t)), r += o, t -= ho(xa(o)), u = Ct(r / 12), r %= 12, n.days = t, n.months = r, n.years = u, this;
}
function Tu(e) {
  return e * 4800 / 146097;
}
function xa(e) {
  return e * 146097 / 4800;
}
function Bv(e) {
  if (!this.isValid())
    return NaN;
  var t, r, n = this._milliseconds;
  if (e = Mt(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, r = this._months + Tu(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(xa(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Wv() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + Te(this._months / 12) * 31536e6 : NaN;
}
function cr(e) {
  return function() {
    return this.as(e);
  };
}
var Uv = cr("ms"), zv = cr("s"), Vv = cr("m"), Hv = cr("h"), jv = cr("d"), qv = cr("w"), Gv = cr("M"), $v = cr("Q"), Kv = cr("y");
function Xv() {
  return Ut(this);
}
function Qv(e) {
  return e = Mt(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Lr(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Zv = Lr("milliseconds"), Jv = Lr("seconds"), ey = Lr("minutes"), ty = Lr("hours"), ry = Lr("days"), ny = Lr("months"), iy = Lr("years");
function ay() {
  return Ct(this.days() / 7);
}
var er = Math.round, Ur = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function sy(e, t, r, n, i) {
  return i.relativeTime(t || 1, !!r, e, n);
}
function oy(e, t, r, n) {
  var i = Ut(e).abs(), a = er(i.as("s")), s = er(i.as("m")), u = er(i.as("h")), o = er(i.as("d")), l = er(i.as("M")), f = er(i.as("w")), m = er(i.as("y")), p = a <= r.ss && ["s", a] || a < r.s && ["ss", a] || s <= 1 && ["m"] || s < r.m && ["mm", s] || u <= 1 && ["h"] || u < r.h && ["hh", u] || o <= 1 && ["d"] || o < r.d && ["dd", o];
  return r.w != null && (p = p || f <= 1 && ["w"] || f < r.w && ["ww", f]), p = p || l <= 1 && ["M"] || l < r.M && ["MM", l] || m <= 1 && ["y"] || ["yy", m], p[2] = t, p[3] = +e > 0, p[4] = n, sy.apply(null, p);
}
function ly(e) {
  return e === void 0 ? er : typeof e == "function" ? (er = e, !0) : !1;
}
function uy(e, t) {
  return Ur[e] === void 0 ? !1 : t === void 0 ? Ur[e] : (Ur[e] = t, e === "s" && (Ur.ss = t - 1), !0);
}
function cy(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, n = Ur, i, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (n = Object.assign({}, Ur, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), i = this.localeData(), a = oy(this, !r, n, i), r && (a = i.pastFuture(+this, a)), i.postformat(a);
}
var Fi = Math.abs;
function Fr(e) {
  return (e > 0) - (e < 0) || +e;
}
function fi() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Fi(this._milliseconds) / 1e3, t = Fi(this._days), r = Fi(this._months), n, i, a, s, u = this.asSeconds(), o, l, f, m;
  return u ? (n = Ct(e / 60), i = Ct(n / 60), e %= 60, n %= 60, a = Ct(r / 12), r %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", o = u < 0 ? "-" : "", l = Fr(this._months) !== Fr(u) ? "-" : "", f = Fr(this._days) !== Fr(u) ? "-" : "", m = Fr(this._milliseconds) !== Fr(u) ? "-" : "", o + "P" + (a ? l + a + "Y" : "") + (r ? l + r + "M" : "") + (t ? f + t + "D" : "") + (i || n || e ? "T" : "") + (i ? m + i + "H" : "") + (n ? m + n + "M" : "") + (e ? m + s + "S" : "")) : "P0D";
}
var Le = ci.prototype;
Le.isValid = r_;
Le.abs = Av;
Le.add = Rv;
Le.subtract = Fv;
Le.as = Bv;
Le.asMilliseconds = Uv;
Le.asSeconds = zv;
Le.asMinutes = Vv;
Le.asHours = Hv;
Le.asDays = jv;
Le.asWeeks = qv;
Le.asMonths = Gv;
Le.asQuarters = $v;
Le.asYears = Kv;
Le.valueOf = Wv;
Le._bubble = Yv;
Le.clone = Xv;
Le.get = Qv;
Le.milliseconds = Zv;
Le.seconds = Jv;
Le.minutes = ey;
Le.hours = ty;
Le.days = ry;
Le.weeks = ay;
Le.months = ny;
Le.years = iy;
Le.humanize = cy;
Le.toISOString = fi;
Le.toString = fi;
Le.toJSON = fi;
Le.locale = hu;
Le.localeData = pu;
Le.toIsoString = Lt(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  fi
);
Le.lang = mu;
he("X", 0, 0, "unix");
he("x", 0, 0, "valueOf");
ae("x", si);
ae("X", Lp);
Ye("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
Ye("x", function(e, t, r) {
  r._d = new Date(Te(e));
});
//! moment.js
J.version = "2.29.4";
dp(qe);
J.fn = $;
J.min = Zg;
J.max = Jg;
J.now = e_;
J.utc = $t;
J.unix = Dv;
J.months = Iv;
J.isDate = vn;
J.locale = gr;
J.invalid = ti;
J.duration = Ut;
J.isMoment = Bt;
J.weekdays = Lv;
J.parseZone = Cv;
J.localeData = ur;
J.isDuration = Mn;
J.monthsShort = Pv;
J.weekdaysMin = Nv;
J.defineLocale = is;
J.updateLocale = Cg;
J.locales = Ig;
J.weekdaysShort = Mv;
J.normalizeUnits = Mt;
J.relativeTimeRounding = ly;
J.relativeTimeThreshold = uy;
J.calendarFormat = T_;
J.prototype = $;
J.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const dy = (e) => (Bc("data-v-ee12da86"), e = e(), Wc(), e), fy = {
  key: 0,
  class: "flex flex-row"
}, hy = {
  key: 0,
  class: "max-w-[80px] h-3.5 mr-1 bg-gray-400 loading-bubble"
}, my = { class: "flex flex-row items-center justify-between gap-3" }, py = /* @__PURE__ */ dy(() => /* @__PURE__ */ te("template", null, [
  /* @__PURE__ */ te("div", { class: "flex flex-row items-center shrink-0 gap-3 w-full max-w-[52px] py-1" }, [
    /* @__PURE__ */ te("span", { class: "bg-gray-400 loading-bubble max-w-[24px] w-full h-2" }),
    /* @__PURE__ */ te("span", { class: "bg-gray-400 loading-bubble w-4 h-4" })
  ])
], -1)), gy = {
  key: 1,
  class: "ml-2 mt-1"
}, _y = {
  key: 0,
  class: "max-w-[120px] h-2 bg-gray-400 mb-2 loading-bubble"
}, vy = {
  key: 1,
  class: "max-w-[120px] h-2 bg-danger-500 dark:bg-danger-400 loading-bubble"
}, yy = { class: "flex flex-row" }, by = ["readonly", "min", "max"], wy = {
  key: 0,
  class: "ml-2"
}, ky = {
  key: 0,
  class: "prose-xs element-text italic text-gray-500 transition"
}, xy = {
  key: 1,
  class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition"
}, Sy = {
  __name: "DatePicker",
  props: {
    label: {
      type: String
    },
    inputValue: {
      type: String
    },
    format: {
      type: String
    },
    minDate: {
      type: String
    },
    maxDate: {
      type: Boolean
    },
    notification: {
      type: String
    },
    error: {
      type: String
    },
    loading: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const r = e, n = sp(), i = ot(!1), a = ot(), s = ot(J(r.inputValue).format("YYYY-MM-DD")), u = ot(J(r.minDate).format("YYYY-MM-DD")), o = ot(J(r.maxDate).format("YYYY-MM-DD"));
    function l() {
      const S = r.format ? r.format : "DD/MM/YYYY";
      t("changed", J(s.value).format(S));
    }
    function f(S) {
      r.readonly || (i.value = !0, S.srcElement.nodeName !== "INPUT" && n.name !== "safari" && a.value.showPicker());
    }
    function m(S, d = () => {
    }, c = document.createElement(null), g = "mouseup") {
      document.addEventListener(g, function _(w) {
        if (!(w.target instanceof Element))
          return document.removeEventListener(g, _), !1;
        S !== w.target && !Array.from(c).includes(w.target) && d(w) !== !1 && document.removeEventListener(g, _);
      });
    }
    function p() {
      let S = "";
      return S += r.readonly ? "" : "pr-0.75 border border-gray-200 dark:border-gray-600 rounded-md transition", S += " pl-1", S += i.value && !r.readonly ? " outline outline-4 outline-action-200 dark:outline-action-700" : "", S;
    }
    function E() {
      const S = ["max-w-[120px]", "max-w-[200px]", "max-w-xs"];
      return S[Math.floor(Math.random() * S.length)];
    }
    return (S, d) => (P(), W("div", {
      ref: (c) => {
        m(c, () => {
          i.value = !1;
        });
      },
      class: "flex flex-col relative gap-1"
    }, [
      e.loading ? (P(), W(tt, { key: 0 }, [
        e.label ? (P(), W("div", fy, [
          e.label ? (P(), W("label", hy)) : X("", !0)
        ])) : X("", !0),
        te("div", my, [
          te("div", {
            class: H(["bg-gray-400 loading-bubble mr-auto h-8", [E()]])
          }, null, 2),
          py
        ]),
        e.notification || e.error ? (P(), W("div", gy, [
          e.notification ? (P(), W("div", _y)) : X("", !0),
          e.error ? (P(), W("div", vy)) : X("", !0)
        ])) : X("", !0)
      ], 64)) : (P(), W(tt, { key: 1 }, [
        te("div", yy, [
          te("label", {
            onClick: f,
            class: "prose-xs element-text text-xs uppercase text-gray-500 cursor-pointer transition"
          }, pe(e.label), 1)
        ]),
        te("div", {
          class: H([p(), "flex flex-row w-full items-center rounded-md transition px-0.75"])
        }, [
          ir(te("input", {
            readonly: e.readonly,
            "onUpdate:modelValue": d[0] || (d[0] = (c) => s.value = c),
            onChange: d[1] || (d[1] = (c) => l()),
            onInput: d[2] || (d[2] = (c) => l()),
            min: u.value,
            max: o.value,
            ref_key: "inputRef",
            ref: a,
            onClick: d[3] || (d[3] = (c) => f(c)),
            class: "bg-transparent rounded-md input-reset text-gray-900 dark:text-white transition cursor-pointer py-1.5",
            type: "date",
            placeholder: "dd-mm-yyyy"
          }, null, 40, by), [
            [go, s.value]
          ]),
          e.readonly ? X("", !0) : (P(), Oe(Gt, {
            key: 0,
            onClick: d[4] || (d[4] = (c) => f(c)),
            size: "sm",
            class: "text-gray-400 opacity-100 cursor-pointer transition"
          }, {
            default: be(() => [
              we(" calendar_month ")
            ]),
            _: 1
          }))
        ], 2),
        e.notification || e.error ? (P(), W("div", wy, [
          e.notification ? (P(), W("div", ky, pe(e.notification), 1)) : X("", !0),
          e.error ? (P(), W("div", xy, pe(e.error), 1)) : X("", !0)
        ])) : X("", !0)
      ], 64))
    ], 512));
  }
}, ib = /* @__PURE__ */ ft(Sy, [["__scopeId", "data-v-ee12da86"]]), Ty = { class: "relative w-fit" }, Oy = { class: "flex flex-col" }, Ey = ["onClick"], Dy = {
  __name: "DropDown",
  props: {
    items: {
      type: Array,
      required: !0,
      default: () => []
    },
    size: {
      type: String,
      required: !1,
      validator: function(e) {
        return ["sm", "md", "lg"].includes(e);
      }
    },
    title: {
      type: String
    },
    icon: {
      type: String
    },
    outlined: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    textSlot: {
      type: String
    },
    buttonRoundedClasses: {
      type: String,
      default: ""
    },
    buttonColorClasses: {
      type: String,
      default: ""
    },
    buttonBackgroundClasses: {
      type: String,
      default: ""
    },
    iconColorClasses: {
      type: String,
      default: ""
    },
    ref: {
      type: String,
      default: ""
    },
    fluidWidthDropdown: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["selected"],
  setup(e, { expose: t, emit: r }) {
    const n = e, i = ot("right-0");
    function a(o) {
      o.x < 260 && (i.value = "left-0"), s.value = !s.value;
    }
    const s = ot(!1);
    function u(o) {
      s.value = !1, r("selected", o);
    }
    return t({ dropdownOpen: s }), (o, l) => (P(), W("div", Ty, [
      Qe(Hn, {
        onClick: l[0] || (l[0] = (f) => a(f)),
        size: n.size,
        title: n.title,
        icon: n.icon,
        disabled: n.disabled,
        outlined: n.outlined,
        buttonRoundedClasses: n.buttonRoundedClasses,
        buttonColorClasses: n.buttonColorClasses,
        buttonBackgroundClasses: n.buttonBackgroundClasses,
        iconColorClasses: n.iconColorClasses
      }, {
        default: be(() => [
          we(pe(n.textSlot), 1)
        ]),
        _: 1
      }, 8, ["size", "title", "icon", "disabled", "outlined", "buttonRoundedClasses", "buttonColorClasses", "buttonBackgroundClasses", "iconColorClasses"]),
      Qe(Ta, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95",
        appear: ""
      }, {
        default: be(() => [
          ir(te("div", {
            class: H([[
              e.fluidWidthDropdown ? "min-w-max" : "min-w-[240px]",
              i.value
            ], "absolute max-w-xs w-full rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 my-2 z-50"])
          }, [
            te("div", Oy, [
              (P(!0), W(tt, null, gt(n.items, (f) => (P(), W("button", {
                onClick: (m) => u(f.identifier),
                key: f.identifier,
                class: H(["dark:hover:bg-gray-900 cursor-pointer first-of-type:rounded-tr-lg first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-bl-lg hover:bg-gray-100 w-full text-md dark:text-white text-gray-900 transition-all duration-300 items-center flex flex-row space-x-3 border-t dark:border-gray-700 first-of-type:border-t-0", [e.fluidWidthDropdown ? "px-4 py-2" : "p-2"]])
              }, [
                f.icon ? (P(), Oe(Gt, {
                  key: 0,
                  size: "sm",
                  class: "text-gray-400"
                }, {
                  default: be(() => [
                    we(pe(f.icon), 1)
                  ]),
                  _: 2
                }, 1024)) : X("", !0),
                te("span", null, pe(f.textSlot), 1)
              ], 10, Ey))), 128))
            ])
          ], 2), [
            [zr, s.value]
          ])
        ]),
        _: 1
      })
    ]));
  }
}, Cy = { class: "flex items-center gap-2 self-center p-3 rounded-xl bg-gray-900/60 backdrop-blur-sm dark:bg-gray-950/60 w-fit" }, ab = {
  __name: "FloatingBar",
  props: {
    buttons: {
      type: Array,
      default: () => [],
      validator: (e) => e.every((t) => (typeof t.icon == "string" || t.icon === void 0) && typeof t.textSlot == "string" && typeof t.outlined == "boolean" && ["sm", "md", "lg"].includes(t.size) && typeof t.identifier == "string")
    },
    scrollGradient: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["clicked"],
  setup(e, { emit: t }) {
    const r = (n) => {
      t("clicked", n);
    };
    return (n, i) => (P(), W("div", {
      class: H([
        "fixed bottom-0 w-full left-0 right-0 py-4 z-50 grid place-items-center",
        e.scrollGradient ? "from-gray-100 dark:from-gray-900 to-transparent bg-gradient-to-t" : ""
      ])
    }, [
      te("div", Cy, [
        (P(!0), W(tt, null, gt(e.buttons, (a, s) => (P(), Oe(Hn, {
          key: `button-${s}`,
          icon: a.icon,
          title: a.textSlot,
          outlined: a.outlined,
          size: a.size,
          onClicked: (u) => r(a.identifier)
        }, {
          default: be(() => [
            we(pe(a.textSlot), 1)
          ]),
          _: 2
        }, 1032, ["icon", "title", "outlined", "size", "onClicked"]))), 128))
      ])
    ], 2));
  }
}, Iy = {
  name: "PawLabel",
  data() {
    return {
      hasSlot: this.$slots.default && this.$slots.default().filter((e) => e.type !== Comment && (typeof e.children == "string" || e.children instanceof String ? e.children.trim() : e.children) !== "").length
    };
  },
  props: {
    size: {
      type: String,
      required: !0,
      validator: function(e) {
        return ["sm", "md", "lg"].includes(e);
      }
    },
    color: {
      type: String,
      validator: function(e) {
        return [void 0, "action", "success", "danger", "warning"].includes(e);
      }
    },
    title: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    setClassNames() {
      let e = "";
      switch (this.size) {
        case "sm":
          e += "h-6 px-3 prose-xs";
          break;
        case "md":
          e += "h-8 px-3 prose-md";
          break;
        case "lg":
          e += "h-10 px-4 prose-md";
          break;
      }
      if (this.disabled)
        return e += " bg-gray-200 dark:bg-gray-600 dark:text-gray-800 italic", e;
      switch (this.color) {
        case "action":
          e += " bg-action-500 dark:bg-action-400";
          break;
        case "success":
          e += " bg-success-500 dark:bg-success-400";
          break;
        case "danger":
          e += " bg-danger-500 dark:bg-danger-400";
          break;
        case "warning":
          e += " bg-warning-500";
          break;
        default:
          e += " bg-gray-600 dark:bg-gray-200 dark:text-gray-800";
          break;
      }
      return e;
    }
  }
}, Py = ["title"], Ly = { class: "truncate" };
function My(e, t, r, n, i, a) {
  return P(), W("label", {
    class: H(["flex items-center max-w-max text-white element-text rounded-full transition", a.setClassNames()]),
    title: r.title
  }, [
    te("span", Ly, [
      Wt(e.$slots, "default")
    ])
  ], 10, Py);
}
const Ny = /* @__PURE__ */ ft(Iy, [["render", My]]);
var Ay = {
  visa: {
    niceType: "Visa",
    type: "visa",
    patterns: [4],
    gaps: [4, 8, 12],
    lengths: [16, 18, 19],
    code: {
      name: "CVV",
      size: 3
    }
  },
  mastercard: {
    niceType: "Mastercard",
    type: "mastercard",
    patterns: [[51, 55], [2221, 2229], [223, 229], [23, 26], [270, 271], 2720],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVC",
      size: 3
    }
  },
  "american-express": {
    niceType: "American Express",
    type: "american-express",
    patterns: [34, 37],
    gaps: [4, 10],
    lengths: [15],
    code: {
      name: "CID",
      size: 4
    }
  },
  "diners-club": {
    niceType: "Diners Club",
    type: "diners-club",
    patterns: [[300, 305], 36, 38, 39],
    gaps: [4, 10],
    lengths: [14, 16, 19],
    code: {
      name: "CVV",
      size: 3
    }
  },
  discover: {
    niceType: "Discover",
    type: "discover",
    patterns: [6011, [644, 649], 65],
    gaps: [4, 8, 12],
    lengths: [16, 19],
    code: {
      name: "CID",
      size: 3
    }
  },
  jcb: {
    niceType: "JCB",
    type: "jcb",
    patterns: [2131, 1800, [3528, 3589]],
    gaps: [4, 8, 12],
    lengths: [16, 17, 18, 19],
    code: {
      name: "CVV",
      size: 3
    }
  },
  unionpay: {
    niceType: "UnionPay",
    type: "unionpay",
    patterns: [
      620,
      [624, 626],
      [62100, 62182],
      [62184, 62187],
      [62185, 62197],
      [62200, 62205],
      [622010, 622999],
      622018,
      [622019, 622999],
      [62207, 62209],
      [622126, 622925],
      [623, 626],
      6270,
      6272,
      6276,
      [627700, 627779],
      [627781, 627799],
      [6282, 6289],
      6291,
      6292,
      810,
      [8110, 8131],
      [8132, 8151],
      [8152, 8163],
      [8164, 8171]
    ],
    gaps: [4, 8, 12],
    lengths: [14, 15, 16, 17, 18, 19],
    code: {
      name: "CVN",
      size: 3
    }
  },
  maestro: {
    niceType: "Maestro",
    type: "maestro",
    patterns: [
      493698,
      [5e5, 504174],
      [504176, 506698],
      [506779, 508999],
      [56, 59],
      63,
      67,
      6
    ],
    gaps: [4, 8, 12],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19],
    code: {
      name: "CVC",
      size: 3
    }
  },
  elo: {
    niceType: "Elo",
    type: "elo",
    patterns: [
      401178,
      401179,
      438935,
      457631,
      457632,
      431274,
      451416,
      457393,
      504175,
      [506699, 506778],
      [509e3, 509999],
      627780,
      636297,
      636368,
      [650031, 650033],
      [650035, 650051],
      [650405, 650439],
      [650485, 650538],
      [650541, 650598],
      [650700, 650718],
      [650720, 650727],
      [650901, 650978],
      [651652, 651679],
      [655e3, 655019],
      [655021, 655058]
    ],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVE",
      size: 3
    }
  },
  mir: {
    niceType: "Mir",
    type: "mir",
    patterns: [[2200, 2204]],
    gaps: [4, 8, 12],
    lengths: [16, 17, 18, 19],
    code: {
      name: "CVP2",
      size: 3
    }
  },
  hiper: {
    niceType: "Hiper",
    type: "hiper",
    patterns: [637095, 63737423, 63743358, 637568, 637599, 637609, 637612],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVC",
      size: 3
    }
  },
  hipercard: {
    niceType: "Hipercard",
    type: "hipercard",
    patterns: [606282],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVC",
      size: 3
    }
  }
}, Ry = Ay, hi = {}, kn = {};
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.clone = void 0;
function Fy(e) {
  return e ? JSON.parse(JSON.stringify(e)) : null;
}
kn.clone = Fy;
var mi = {};
Object.defineProperty(mi, "__esModule", { value: !0 });
mi.matches = void 0;
function Yy(e, t, r) {
  var n = String(t).length, i = e.substr(0, n), a = parseInt(i, 10);
  return t = parseInt(String(t).substr(0, i.length), 10), r = parseInt(String(r).substr(0, i.length), 10), a >= t && a <= r;
}
function By(e, t) {
  return t = String(t), t.substring(0, e.length) === e.substring(0, t.length);
}
function Wy(e, t) {
  return Array.isArray(t) ? Yy(e, t[0], t[1]) : By(e, t);
}
mi.matches = Wy;
Object.defineProperty(hi, "__esModule", { value: !0 });
hi.addMatchingCardsToResults = void 0;
var Uy = kn, zy = mi;
function Vy(e, t, r) {
  var n, i;
  for (n = 0; n < t.patterns.length; n++) {
    var a = t.patterns[n];
    if (zy.matches(e, a)) {
      var s = Uy.clone(t);
      Array.isArray(a) ? i = String(a[0]).length : i = String(a).length, e.length >= i && (s.matchStrength = i), r.push(s);
      break;
    }
  }
}
hi.addMatchingCardsToResults = Vy;
var pi = {};
Object.defineProperty(pi, "__esModule", { value: !0 });
pi.isValidInputType = void 0;
function Hy(e) {
  return typeof e == "string" || e instanceof String;
}
pi.isValidInputType = Hy;
var gi = {};
Object.defineProperty(gi, "__esModule", { value: !0 });
gi.findBestMatch = void 0;
function jy(e) {
  var t = e.filter(function(r) {
    return r.matchStrength;
  }).length;
  return t > 0 && t === e.length;
}
function qy(e) {
  return jy(e) ? e.reduce(function(t, r) {
    return !t || Number(t.matchStrength) < Number(r.matchStrength) ? r : t;
  }) : null;
}
gi.findBestMatch = qy;
var Vn = hr && hr.__assign || function() {
  return Vn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Vn.apply(this, arguments);
}, Ou = Ry, Gy = hi, $y = pi, Ky = gi, xn = kn, gn = {}, wt = {
  VISA: "visa",
  MASTERCARD: "mastercard",
  AMERICAN_EXPRESS: "american-express",
  DINERS_CLUB: "diners-club",
  DISCOVER: "discover",
  JCB: "jcb",
  UNIONPAY: "unionpay",
  MAESTRO: "maestro",
  ELO: "elo",
  MIR: "mir",
  HIPER: "hiper",
  HIPERCARD: "hipercard"
}, Eu = [
  wt.VISA,
  wt.MASTERCARD,
  wt.AMERICAN_EXPRESS,
  wt.DINERS_CLUB,
  wt.DISCOVER,
  wt.JCB,
  wt.UNIONPAY,
  wt.MAESTRO,
  wt.ELO,
  wt.MIR,
  wt.HIPER,
  wt.HIPERCARD
], vr = xn.clone(Eu);
function hs(e) {
  return gn[e] || Ou[e];
}
function Xy() {
  return vr.map(function(e) {
    return xn.clone(hs(e));
  });
}
function ms(e, t) {
  t === void 0 && (t = !1);
  var r = vr.indexOf(e);
  if (!t && r === -1)
    throw new Error('"' + e + '" is not a supported card type.');
  return r;
}
function wr(e) {
  var t = [];
  if (!$y.isValidInputType(e))
    return t;
  if (e.length === 0)
    return Xy();
  vr.forEach(function(n) {
    var i = hs(n);
    Gy.addMatchingCardsToResults(e, i, t);
  });
  var r = Ky.findBestMatch(t);
  return r ? [r] : t;
}
wr.getTypeInfo = function(e) {
  return xn.clone(hs(e));
};
wr.removeCard = function(e) {
  var t = ms(e);
  vr.splice(t, 1);
};
wr.addCard = function(e) {
  var t = ms(e.type, !0);
  gn[e.type] = e, t === -1 && vr.push(e.type);
};
wr.updateCard = function(e, t) {
  var r = gn[e] || Ou[e];
  if (!r)
    throw new Error('"' + e + "\" is not a recognized type. Use `addCard` instead.'");
  if (t.type && r.type !== t.type)
    throw new Error("Cannot overwrite type parameter.");
  var n = xn.clone(r);
  n = Vn(Vn({}, n), t), gn[n.type] = n;
};
wr.changeOrder = function(e, t) {
  var r = ms(e);
  vr.splice(r, 1), vr.splice(t, 0, e);
};
wr.resetModifications = function() {
  vr = xn.clone(Eu), gn = {};
};
wr.types = wt;
var Qy = wr;
const Zy = /* @__PURE__ */ Kr(Qy), Jy = {
  mail: "mail",
  phone: "ring_volume",
  link: "link"
}, mo = 13, Sa = ["en", "de"], Cr = window.navigator.userLanguage || window.navigator.language || Sa[0], Er = {
  date: {
    /* Possible input formats */
    formats: [
      /* German */
      /* English */
      "YYYY M D",
      // 2022 3 28
      "D M YYYY",
      // 28 3 2022
      "D M YY",
      // 28 3 22
      "YYYY-M-D",
      // 2022-3-28
      "D-M-YYYY",
      // 28-3-2022
      "D-M-YY",
      // 28-3-22
      "YYYY.M.D",
      // 2022-3-28
      "D.M.YYYY",
      // 28-3-2022
      "D.M.YY",
      // 28-3-22
      "dddd, D M YYYY",
      // Montag, 28 3 2022          Monday, 28 3 2022
      "dddd, D-M-YYYY",
      // Montag, 28-3-2022          Monday, 28-3-2022
      "dddd, D.M.YYYY",
      // Montag, 28.3.2022          Monday, 28.3.2022
      "Do MMMM YYYY",
      // 28. März 2022              28th March 2022
      "dddd, Do MMMM YYYY"
      // Montag, 28. März 2022      Monday, 28th March 2022
    ],
    /* Output format */
    format: "dddd, l"
    // Montag, 28.3.2022          Monday, 3/28/2022
  },
  time: {
    /* Possible input formats */
    formats: [
      "kk:mm:ss",
      // 17:14:11
      "kk:mm",
      // 17:14
      "x"
      // 1410715640579 (UNIX time)
    ],
    /* Output format */
    format: "kk:mm"
    // 17:14
  },
  datetime: {
    /* Possible input formats */
    formats: [
      /* With seconds */
      /* German */
      /* English */
      "YYYY M D kk:mm:ss",
      // 2022 3 28 17:14:11
      "D M YYYY kk:mm:ss",
      // 28 3 2022 17:14:11
      "D M YY kk:mm:ss",
      // 28 3 22 17:14:11
      "YYYY-M-D kk:mm:ss",
      // 2022-3-28 17:14:11
      "D-M-YYYY kk:mm:ss",
      // 28-3-2022 17:14:11
      "D-M-YY kk:mm:ss",
      // 28-3-22 17:14:11
      "YYYY.M.D kk:mm:ss",
      // 2022-3-28 17:14:11
      "D.M.YYYY kk:mm:ss",
      // 28-3-2022 17:14:11
      "D.M.YY kk:mm:ss",
      // 28-3-22 17:14:11
      "dddd, D M YYYY kk:mm:ss",
      // Montag, 28 3 2022 17:14:11        Monday, 28 3 2022 17:14:11
      "dddd, D-M-YYYY kk:mm:ss",
      // Montag, 28-3-2022 17:14:11        Monday, 28-3-2022 17:14:11
      "dddd, D.M.YYYY kk:mm:ss",
      // Montag, 28.3.2022 17:14:11        Monday, 28.3.2022 17:14:11
      "Do MMMM YYYY kk:mm:ss",
      // 28. März 2022 17:14:11            28th March 2022 17:14:11
      "dddd, Do MMMM YYYY kk:mm:ss",
      // Montag, 28. März 2022 17:14:11    Monday, 28th March 2022 17:14:11
      /* Without seconds */
      "YYYY M D kk:mm",
      // 2022 3 28 17:14
      "D M YYYY kk:mm",
      // 28 3 2022 17:14
      "D M YY kk:mm",
      // 28 3 22 17:14
      "YYYY-M-D kk:mm",
      // 2022-3-28 17:14
      "D-M-YYYY kk:mm",
      // 28-3-2022 17:14
      "D-M-YY kk:mm",
      // 28-3-22 17:14
      "YYYY.M.D kk:mm",
      // 2022-3-28 17:14
      "D.M.YYYY kk:mm",
      // 28-3-2022 17:14
      "D.M.YY kk:mm",
      // 28-3-22 17:14
      "dddd, D M YYYY kk:mm",
      // Montag, 28 3 2022 17:14              Monday, 28 3 2022 17:14
      "dddd, D-M-YYYY kk:mm",
      // Montag, 28-3-2022 17:14              Monday, 28-3-2022 17:14
      "dddd, D.M.YYYY kk:mm",
      // Montag, 28.3.2022 17:14              Monday, 28.3.2022 17:14
      "Do MMMM YYYY kk:mm",
      // 28. März 2022 17:14                  28th March 2022 17:14
      "dddd, Do MMMM YYYY kk:mm",
      // Montag, 28. März 2022 17:14          Monday, 28th March 2022 17:14
      /* UTC datetime format */
      "utc"
      // 2022-03-28T17:14:11+01:00
    ],
    /* Output format */
    format: "dddd, l kk:mm:ss"
    // Montag, 28.3.2022 17:14:11           Monday, 3/28/2022 17:14:11
  }
}, e1 = {
  name: "PawLazyField",
  emits: ["clicked", "editClicked", "deleteClicked"],
  data() {
    return {
      hasSlot: null,
      formatting: null,
      inputOutline: !1,
      fieldValueIconPosition: this.valueIconPosition,
      show: !1,
      copying: !1,
      message: null,
      success: null,
      formatError: null,
      actionIcons: Jy,
      unit: {
        label: this.unitLabel,
        icon: this.unitIcon,
        outlined: this.unitIconOutlined
      },
      languagePreference: null
    };
  },
  computed: {
    inputValue() {
      return (e) => this.secret && !this.show && this.formatting !== "card" && !e ? "••••••••" : this.value ? this.formatValue(this.value, e) : (this.hasSlot = this.$slots.default && this.$slots.default().filter((t) => t.type !== Comment && (typeof t.children == "string" || t.children instanceof String ? t.children.trim() : t.children) !== "").length, this.hasSlot ? this.formatValue(this.$slots.default()[0].children.trim(), e) : "");
    },
    valueIconName() {
      return this.valueIcon;
    }
  },
  created() {
    this.initFormat(), J.locale(Cr);
  },
  watch: {
    value() {
      this.setMessage("");
    },
    format() {
      this.initFormat();
    }
  },
  props: {
    /* Top labels */
    label: {
      type: String
    },
    info: {
      type: String
    },
    title: {
      type: String
    },
    /* Field & icons */
    value: {
      type: String,
      default: ""
    },
    valueIcon: {
      type: String,
      default: ""
    },
    valueIconPosition: {
      type: String,
      default: "left"
    },
    valueColorClass: {
      type: String,
      default: ""
    },
    unitLabel: {
      type: String
    },
    unitIcon: {
      type: String
    },
    unitIconOutlined: {
      type: Boolean,
      default: !1
    },
    copy: {
      type: Boolean
    },
    editAction: {
      type: Boolean
    },
    deleteAction: {
      type: Boolean
    },
    secret: {
      type: Boolean
    },
    action: {
      type: String,
      validator: function(e) {
        return [void 0, "mail", "phone", "link"].includes(e);
      }
    },
    size: {
      type: String,
      validator: function(e) {
        return ["sm", "md"].includes(e);
      },
      default: "md"
    },
    format: {
      type: String,
      validator: function(e) {
        return [void 0, "mail", "phone", "number", "card", "iban", "multiline", "date", "time", "datetime", "icon"].includes(e);
      }
    },
    link: {
      type: String
    },
    insecure: {
      type: Boolean
    },
    // Digits
    minDecimals: {
      type: Number,
      default: 2
    },
    maxDecimals: {
      type: Number,
      default: 10
    },
    // Position
    unitPosition: {
      type: String,
      validator: function(e) {
        return [void 0, "top", "center", "bottom"].includes(e);
      }
    },
    /* Bottom elements */
    hideErrors: {
      type: Boolean,
      default: !1
    }
  },
  components: {
    PawIcon: Gt
  },
  setup() {
    const { t: e } = Xr({
      inheritLocale: !0,
      useScope: "local",
      messages: {
        en: {
          clipboard: {
            error: "Unable to copy content to clipboard.",
            success: "Field content copied to clipboard."
          },
          format: {
            creditCardDigitError: "Credit card must have minimum {minDigits} digits.",
            creditCardInvalid: "Invalid credit card number.",
            datetimeError: "{momentType} could not be parsed (closest format: {candidate}{overflow}{mismatch}).",
            emailError: "Not a valid email address.",
            mismatch: ", weekday mismatch",
            numberError: "Not a valid number.",
            overflow: ", overflown: {overflow}",
            phonePrefixError: "Error formatting phone number (no valid international prefix found).",
            phoneTooShort: "Error formatting phone number (too short)."
          }
        },
        de: {
          clipboard: {
            error: "Der Inhalt kann nicht in die Zwischenablage kopiert werden.",
            success: "Feldinhalt in die Zwischenablage kopiert."
          },
          format: {
            creditCardDigitError: "Eine Kreditkarte muss mindestens {minDigits} Ziffern enthalten.",
            creditCardInvalid: "Ungültige Kreditkartennummer.",
            datetimeError: "{momentType} konnte nicht geparst werden (nächstliegende Format: {candidate}{overflow}{mismatch}).",
            emailError: "Ungültige E-Mail-Adresse.",
            mismatch: ", Wochentagsinkongruenz",
            numberError: "Ungültige Nummer.",
            overflow: ", überflogen: {overflow}",
            phonePrefixError: "Fehler beim Formatieren der Telefonnummer (keine gültige int. Vorwahl gefunden).",
            phoneTooShort: "Fehler beim Formatieren der Telefonnummer (zu kurz)."
          }
        }
      }
    });
    return { t: e };
  },
  methods: {
    click() {
      if (this.action) {
        if (this.$emit("clicked"), this.formatError)
          return;
        const e = this.inputValue(!0), t = this.link || e;
        switch (this.action) {
          case "mail":
            window.location.href = `mailto:${e}`;
            break;
          case "phone":
            window.location.href = `tel:${e}`;
            break;
          case "link":
            window.open(t.indexOf("://") !== -1 ? t : `http${this.insecure ? "" : "s"}://${t}`);
            break;
        }
      }
    },
    toggleSecret() {
      this.show = !this.show;
    },
    copyToClipboard() {
      this.copying || (this.copying = !0, this.$copyText(this.inputValue(!0)).then(
        () => this.setMessage(this.t("clipboard.success"), !0),
        () => this.setMessage(this.t("clipboard.error"), !1)
      ));
    },
    editTrigger() {
      this.$emit("editClicked");
    },
    deleteTrigger() {
      this.$emit("deleteClicked");
    },
    setMessage(e, t) {
      this.message = e, this.success = t, this.copying && setTimeout(() => {
        this.copying = !1, this.message = null;
      }, 3e3);
    },
    initFormat() {
      this.setMessage(""), this.formatting = this.format, ["phone", "mail"].includes(this.action) && (this.formatting = this.action);
    },
    formatValue(e, t) {
      const r = this.number(e);
      switch (this.formatting) {
        case "phone":
          return this.filterPhone(e, {
            plus: !0,
            brackets: !0,
            space: !0,
            dash: !1,
            localPrefix: !0,
            areaCode: !0
          });
        case "mail":
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e) || (this.setMessage(this.t("format.emailError")), this.formatError = !0), e;
        case "number":
          return isNaN(e) || isNaN(parseFloat(e)) ? (this.setMessage(this.t("format.numberError"), !1), this.formatError = !0, e) : new Intl.NumberFormat(Cr, {
            minimumFractionDigits: this.minDecimals,
            maximumFractionDigits: this.maxDecimals
          }).format(e);
        case "card":
          return r.length < mo ? (this.setMessage(this.t("format.creditCardDigitError", { minDigits: `<b>${mo}</b>` }), !1), this.formatError = !0, e) : this.formatCard(r, t);
        case "iban":
          return e.replace(/[^\dA-Z]/g, "").replace(/(.{4})/g, "$1 ").trim();
        case "date":
          return this.parseDate(e, this.formatting);
        case "time":
          return this.parseDate(e, this.formatting);
        case "datetime":
          return this.parseDate(e, this.formatting);
        default:
          return e;
      }
    },
    formatDate(e, t, r) {
      switch (r) {
        case "time":
          this.unit.label = "24h", this.unit.icon = "schedule";
          break;
        case "date":
          break;
        case "datetime":
          this.unit.label = this.unitLabel ?? "24h", this.unit.icon = this.unitIcon ?? "calendar_today";
          break;
      }
      return e.locale(Cr).format(t);
    },
    parseDate(e, t) {
      if (!e || !t)
        return e;
      let r = -1, n = null, i = null;
      for (const s in Sa)
        for (const u in Er[t].formats) {
          if (Er[t].formats[u] === "utc")
            continue;
          const o = J(e, Er[t].formats[u], Sa[s], !0), l = o.parsingFlags();
          if (o.isValid() && !l.weekdayMismatch)
            return this.formatDate(o, Er[t].format, t);
          const f = l.unusedInput.length + l.unusedTokens.length;
          (f < r || r === -1) && (r = f, n = Er[t].formats[u], i = l);
        }
      if (t === "datetime" && Er[t].formats.includes("utc")) {
        const s = J.utc(e, !0), u = s.parsingFlags();
        if (s.isValid())
          return this.formatDate(s, Er[t].format, t);
        const o = u.unusedInput.length + u.unusedTokens.length;
        u.overflow >= 0 && (o < r || r === -1) && (r = o, n = "UTC → YYYY-MM-DDTkk:mm:ss+ZZ", i = u);
      }
      let a = null;
      return i.overflow >= 0 && i.parsedDateParts.length > i.overflow - 1 && (a = i.parsedDateParts[i.overflow]), this.setMessage(this.t("format.datetimeError", {
        momentType: `<b>${t.charAt(0).toUpperCase() + t.slice(1)}</b>`,
        candidate: `<b>${n}</b>`,
        overflow: a ? this.t("format.overflow", {
          overflow: `<b>${a}</b>`
        }) : "",
        mismatch: i.weekdayMismatch ? this.t("format.mismatch", {
          mismatch: `<b>${this.t("format.mismatch")}</b>`
        }) : ""
      }), !1), e;
    },
    formatCard(e, t) {
      var i;
      const r = Zy(e)[0];
      if (!r)
        return this.setMessage(this.t("format.creditCardInvalid"), !1), this.formatError = !0, e;
      let n = e.toString().split("");
      return r.gaps.forEach((a, s) => n.splice(a + s, 0, " ")), t ? n.join("") : `${(i = r.niceType) == null ? void 0 : i.toUpperCase()} ${this.show ? n.join("") : `•••• ${e.slice(-4)}`}`;
    },
    standard(e) {
      const t = e.match(/[0-9]{0,14}/g);
      return t === null ? "" : `+${t.join("").substring(0, 15)}`;
    },
    number(e) {
      if (!e)
        return 0;
      const t = e.match(/[0-9]+/g);
      return t === null ? 0 : `${t.join("").substring(0)}`;
    },
    /**
     * Phone formatting method
     * @link https://github.com/evildvl/vue-e164
     * @param value String to be formatted as a phone number.
     * @param options Formatting options.
     * @returns Formatted phone according to given options.
     */
    filterPhone(e, t) {
      if (!e)
        return "";
      const r = /^(\+)((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)/ig, n = /^(\+)((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(0)*(\d{2,3})(\d{3})(\d{2})(\d{2})/ig, i = t.plus ? "+" : "", a = t.brackets ? { l: "(", r: ")" } : { l: "", r: "" }, s = t.space ? " " : "", u = t.dash ? "-" : "", o = this.standard(e), l = n.exec(o), f = r.exec(o);
      if (!l && f)
        return this.setMessage(this.t("format.phoneTooShort"), !1), this.formatError = !0, e;
      if (!l && !f)
        return this.setMessage(this.t("format.phonePrefixError"), !1), this.formatError = !0, e;
      const m = t.localPrefix && l[3] ? `${a.l}${l[3]}${a.r}` : "", p = t.areaCode ? l[2] : "";
      return `${t.areaCode ? i : ""}${p}${t.areaCode ? s : ""}${m}${l[4]}${s}${l[5]}${s}${u}${t.dash ? s : ""}${l[6]}${s}${u}${t.dash ? s : ""}${l[7]}`;
    }
  }
}, t1 = { class: "flex flex-col gap-1" }, r1 = {
  key: 0,
  class: "flex flex-row"
}, n1 = {
  key: 0,
  class: "prose-xs element-text text-xs uppercase text-gray-500 transition"
}, i1 = ["title"], a1 = ["textContent"], s1 = {
  key: 0,
  class: "mr-1 text-xs text-gray-400"
}, o1 = ["innerHTML"], l1 = ["innerHTML"];
function u1(e, t, r, n, i, a) {
  const s = He("PawIcon");
  return P(), W("div", t1, [
    r.label || r.info ? (P(), W("div", r1, [
      r.label ? (P(), W("label", n1, pe(r.label), 1)) : X("", !0),
      r.info ? (P(), W("span", {
        key: 1,
        class: "ml-auto prose-xs element-text uppercase text-gray-500 cursor-help transition",
        title: r.title
      }, pe(r.info), 9, i1)) : X("", !0)
    ])) : X("", !0),
    te("div", {
      class: H(["flex flex-row items-center justify-between text-gray-800 dark:text-white transition", {
        "border-t border-gray-200 dark:border-gray-600": r.label
      }])
    }, [
      te("div", {
        class: H(["flex items-center", i.formatting == "icon" && i.fieldValueIconPosition == "right" ? "flex-row-reverse" : ""])
      }, [
        i.formatting == "icon" && r.valueIcon ? (P(), Oe(s, {
          key: 0,
          class: H(r.valueColorClass ?? "text-gray-400"),
          size: "sm"
        }, {
          default: be(() => [
            we(pe(a.valueIconName), 1)
          ]),
          _: 1
        }, 8, ["class"])) : X("", !0),
        te("span", {
          class: H(["my-1.5", {
            "prose-md": r.size === "md",
            "prose-sm": r.size === "sm",
            "prose-xs": r.size === "xs",
            "whitespace-pre-wrap": r.format === "multiline",
            truncate: r.format !== "multiline",
            "text-action-500 dark:text-action-400 hover:text-action-300 dark:hover:text-action-600 cursor-pointer transition": r.action && !i.formatError,
            [r.valueColorClass]: r.valueColorClass
          }]),
          onClick: t[0] || (t[0] = (...u) => a.click && a.click(...u)),
          textContent: pe(this.inputValue(!1))
        }, null, 10, a1)
      ], 2),
      te("div", {
        class: H(["flex flex-row shrink-0 items-center gap-1 py-1 ml-3", {
          "self-start": r.unitPosition === "top",
          "self-center": r.unitPosition === "center",
          "self-end": r.unitPosition === "bottom"
        }])
      }, [
        i.unit.label ? (P(), W("span", s1, pe(i.unit.label), 1)) : X("", !0),
        i.unit.icon ? (P(), Oe(s, {
          key: 1,
          size: "sm",
          class: "text-gray-400",
          outlined: i.unit.outlined === !0
        }, {
          default: be(() => [
            we(pe(i.unit.icon), 1)
          ]),
          _: 1
        }, 8, ["outlined"])) : X("", !0),
        r.copy && !i.formatError ? (P(), Oe(s, {
          key: 2,
          size: "sm",
          onClick: a.copyToClipboard,
          class: "text-gray-400 cursor-pointer"
        }, {
          default: be(() => [
            we(" copy_all ")
          ]),
          _: 1
        }, 8, ["onClick"])) : X("", !0),
        r.editAction && !i.formatError ? (P(), Oe(s, {
          key: 3,
          size: "sm",
          onClick: a.editTrigger,
          class: "text-gray-400 cursor-pointer"
        }, {
          default: be(() => [
            we(" edit ")
          ]),
          _: 1
        }, 8, ["onClick"])) : X("", !0),
        r.deleteAction && !i.formatError ? (P(), Oe(s, {
          key: 4,
          size: "sm",
          onClick: a.deleteTrigger,
          class: "text-gray-400 cursor-pointer"
        }, {
          default: be(() => [
            we(" delete ")
          ]),
          _: 1
        }, 8, ["onClick"])) : X("", !0),
        r.secret && !i.formatError ? (P(), Oe(s, {
          key: 5,
          size: "sm",
          class: "text-gray-400 cursor-pointer",
          onClick: a.toggleSecret
        }, {
          default: be(() => [
            we(pe(i.show ? "visibility_off" : "visibility"), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : X("", !0),
        r.action && !i.formatError ? (P(), Oe(s, {
          key: 6,
          size: "sm",
          onClick: a.click,
          class: "text-action-500 dark:text-action-400 hover:text-action-300 dark:hover:text-action-600 cursor-pointer transition"
        }, {
          default: be(() => [
            we(pe(i.actionIcons[r.action]), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : X("", !0)
      ], 2)
    ], 2),
    i.message && i.success ? (P(), W("div", {
      key: 1,
      class: "prose-xs element-text italic text-success-500 dark:text-success-400 transition",
      innerHTML: i.message
    }, null, 8, o1)) : X("", !0),
    i.message && !i.success && !r.hideErrors ? (P(), W("div", {
      key: 2,
      class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition",
      innerHTML: i.message
    }, null, 8, l1)) : X("", !0)
  ]);
}
const c1 = /* @__PURE__ */ ft(e1, [["render", u1]]), d1 = {
  name: "PawListItem",
  emits: ["clicked"],
  data() {
    return {
      hasSlot: this.$slots.default && this.$slots.default().filter(
        (e) => e.type !== Comment && (typeof e.children == "string" || e.children instanceof String ? e.children.trim() : e.children) !== ""
      ).length
    };
  },
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    },
    size: {
      type: String,
      validator: function(e) {
        return [void 0, "sm", "md", "lg"].includes(e);
      },
      default: "md"
    },
    outlined: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    active: {
      type: Boolean
    }
  },
  components: {
    PawIcon: Gt
  },
  methods: {
    click() {
      this.$emit("clicked");
    },
    calcButton() {
      return this.disabled ? "bg-gray-200 dark:bg-gray-600 text-white dark:text-gray-800 italic cursor-default pointer-events-none" : this.active ? "text-white bg-action-500 dark:bg-action-400" : "text-action-500 dark:text-action-400 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-800 active:text-white active:bg-action-500 dark:active:bg-action-400 focus:text-white dark:focus:text-white focus:bg-action-500 dark:focus:bg-action-400";
    },
    calcIcon() {
      return this.disabled ? "text-gray-100 dark:text-gray-700" : this.active ? "text-action-100" : "text-action-500 dark:text-action-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 group-active:text-action-100 dark:group-active:text-action-100 group-focus:text-white dark:group-focus:text-white";
    }
  }
}, f1 = ["title"];
function h1(e, t, r, n, i, a) {
  const s = He("PawIcon");
  return P(), W("button", {
    class: H(["flex items-center group my-0 h-8 w-full prose-md element-text rounded-md transition", a.calcButton()]),
    title: r.title,
    onClick: t[0] || (t[0] = (...u) => a.click && a.click(...u))
  }, [
    r.icon ? (P(), Oe(s, {
      key: 0,
      size: r.size,
      outlined: r.outlined,
      class: H(["ml-0.75 mr-2 transition", a.calcIcon()])
    }, {
      default: be(() => [
        we(pe(r.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : X("", !0),
    te("span", {
      class: H(["flex-grow text-left truncate", r.icon ? "" : "ml-3"])
    }, [
      Wt(e.$slots, "default")
    ], 2),
    Qe(s, {
      size: "sm",
      class: H([
        "opacity-0 text-gray-400",
        r.disabled ? "" : "group-hover:opacity-100 group-focus:text-action-100 dark:group-focus:text-action-100 group-focus:opacity-100 group-active:text-action-100 dark:group-active:text-action-100 group-active:opacity-100"
      ])
    }, {
      default: be(() => [
        we(" navigate_next ")
      ]),
      _: 1
    }, 8, ["class"])
  ], 10, f1);
}
const m1 = /* @__PURE__ */ ft(d1, [["render", h1]]), p1 = {
  name: "PawList",
  emits: ["clicked"],
  data() {
    return {
      hasSlot: this.$slots.default && this.$slots.default().filter((e) => e.type !== Comment && (typeof e.children == "string" || e.children instanceof String ? e.children.trim() : e.children) !== "").length
    };
  },
  props: {
    items: {
      type: Object,
      required: !0
    },
    title: {
      type: String
    },
    icon: {
      type: String
    },
    size: {
      type: String,
      validator: function(e) {
        return [void 0, "sm", "md", "lg"].includes(e);
      },
      default: "md"
    },
    outlined: {
      type: Boolean
    },
    divider: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean
    }
  },
  components: {
    PawListItem: m1
  },
  methods: {
    click(e) {
      this.$emit("clicked", e);
    }
  }
};
function g1(e, t, r, n, i, a) {
  const s = He("PawListItem");
  return !r.items || Object.keys(r.items).length === 0 ? (P(), W("div", {
    key: 0,
    class: H(["flex items-center w-full p-4 mb-8 bg-warning-100 dark:bg-warning-800 text-warning-800 dark:text-warning-100 rounded-lg transition", i.hasSlot ? "" : "hidden"])
  }, [
    Wt(e.$slots, "default")
  ], 2)) : (P(!0), W(tt, { key: 1 }, gt(r.items, (u, o) => (P(), W("div", {
    key: o,
    class: H(["py-1.5", {
      "border-t border-gray-200 dark:border-gray-700 transition": r.divider && o > 0
    }])
  }, [
    Qe(s, {
      icon: u.icon ?? r.icon,
      size: u.size ?? r.size,
      title: u.title ?? r.title,
      outlined: u.outlined ?? r.outlined,
      disabled: u.disabled ?? r.disabled,
      onClicked: (l) => a.click(o)
    }, {
      default: be(() => [
        we(pe(u.text), 1)
      ]),
      _: 2
    }, 1032, ["icon", "size", "title", "outlined", "disabled", "onClicked"])
  ], 2))), 128));
}
const sb = /* @__PURE__ */ ft(p1, [["render", g1]]);
const _1 = ["title"], v1 = ["checked", "disabled"], y1 = { class: "relative w-8 h-5 m-0.5 shrink-0 self-start bg-gray-400 peer-disabled:bg-gray-200 dark:peer-disabled:bg-gray-600 peer-checked:bg-action-500 dark:peer-checked:bg-action-500 rounded-full transition" }, b1 = {
  name: "PawCheckbox",
  emits: ["changed"],
  data() {
    return {
      value: this.checked
    };
  },
  props: {
    size: {
      type: String,
      required: !0,
      validator: function(e) {
        return ["sm", "md", "lg"].includes(e);
      }
    },
    title: {
      type: String
    },
    checked: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  methods: {
    change() {
      this.$emit("changed", this.value = !this.value);
    }
  },
  watch: {
    $props: {
      handler() {
        this.value = this.checked;
      },
      deep: !0,
      immediate: !0
    }
  }
}, w1 = /* @__PURE__ */ Object.assign(b1, {
  setup(e) {
    const t = ot();
    return (r, n) => {
      var i;
      return P(), W("label", {
        class: H(["group inline-flex items-center", {
          "cursor-pointer": !e.disabled,
          "gap-1": e.size === "sm",
          "gap-2 p-1": e.size === "md",
          "gap-3 p-2": e.size === "lg"
        }]),
        title: e.title
      }, [
        te("input", {
          ref_key: "toggle",
          ref: t,
          type: "checkbox",
          onChange: n[0] || (n[0] = (...a) => r.change && r.change(...a)),
          checked: e.checked,
          disabled: e.disabled,
          class: "peer hidden"
        }, null, 40, v1),
        te("span", y1, [
          te("span", {
            class: H(["block w-4 h-4 bg-white m-0.5 rounded-full shadow-box dark:shadow-box-dark transition", [
              r.value ? "translate-x-3" : "translate-x-0",
              (i = t.value) != null && i.disabled ? "dark:bg-gray-400" : ""
            ]])
          }, null, 2)
        ]),
        r.$slots.default ? (P(), W("span", {
          key: 0,
          class: H([
            "text-md transition",
            e.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"
          ])
        }, [
          Wt(r.$slots, "default", {}, void 0, !0)
        ], 2)) : X("", !0)
      ], 10, _1);
    };
  }
}), ob = /* @__PURE__ */ ft(w1, [["__scopeId", "data-v-5cd34538"]]), k1 = 8, x1 = 5, S1 = {
  name: "PawTable",
  emits: [
    "filtered",
    "selected",
    "sorted",
    "clicked",
    "reordered",
    "paginated",
    "buttonClicked",
    "searchDropdownItemClicked",
    "searched",
    "keyDownEnter",
    "actionSelected"
  ],
  data() {
    var e;
    return {
      hasSlot: this.$slots.default && this.$slots.default().filter(
        (t) => t.type !== Comment && (typeof t.children == "string" || t.children instanceof String ? t.children.trim() : t.children) !== ""
      ).length,
      settingsOpened: !1,
      searchbarOpened: !1,
      searchValue: this.searchbarValueProxy,
      error: !1,
      dropdownOpen: !1,
      rowIdentifierProxy: null,
      items: ((e = this.data) == null ? void 0 : e.items) ?? []
    };
  },
  props: {
    data: {
      type: Object,
      required: !0
    },
    buttons: {
      type: Array,
      default: () => []
    },
    searchDropdownItems: {
      type: Array,
      default: () => []
    },
    searchDropdownText: {
      type: String,
      default: "Search by"
    },
    actionDropdownItems: {
      type: Array,
      default: () => []
    },
    rowItemIdentifier: {
      type: String,
      default: "id"
    },
    title: {
      type: String
    },
    buttonText: {
      type: String
    },
    buttonIcon: {
      type: String
    },
    informal: {
      type: Boolean,
      default: !1
    },
    ctaIcon: {
      type: String,
      default: "assignment"
    },
    ctaIconDisabled: {
      type: Boolean,
      default: !1
    },
    bgDark: {
      type: String,
      default: "bg-gray-800"
    },
    bgLight: {
      type: String,
      default: "bg-white"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    searchbar: {
      type: Boolean,
      default: !1
    },
    searchbarValueProxy: {
      type: String,
      default: ""
    },
    selectionEnabled: {
      type: Boolean,
      default: !1
    },
    multiselect: {
      type: Boolean,
      default: !0
    },
    itemsNotFoundHasBgColor: {
      type: Boolean,
      default: !0
    },
    itemsNotFoundBgClass: {
      type: String,
      default: "warning"
    },
    itemsNotFoundTextColorClass: {
      type: String,
      default: "gray"
    },
    isRowClickable: {
      type: Boolean,
      default: !1
    }
  },
  components: {
    PawCheckbox: vo,
    PawLazyField: c1,
    PawLink: Ml,
    PawIcon: Gt,
    PawLabel: Ny,
    PawButton: Hn,
    PawDropdown: Dy,
    PawCrazyInput: Qm,
    PawRadio: Nl,
    PawLoadingSpinner: _o
  },
  setup() {
    const { t: e } = Xr({
      inheritLocale: !0,
      useScope: "local",
      messages: {
        en: {
          table: {
            details: "Details",
            loading: "Loading results...",
            missingHeadingName: "Missing heading name",
            missingHeadingTitle: "Missing heading title",
            missingAttribute: "{attr} attribute missing in {obj} prop",
            next: "Next",
            previous: "Previous",
            showRecords: "Showing {total} results",
            showRecordsInterval: "Showing {first} to {last} of {total} results"
          }
        },
        de: {
          table: {
            details: "Details",
            loading: "Ergebnisse werden geladen...",
            missingHeadingName: "Fehlender heading name",
            missingHeadingTitle: "Fehlender heading title",
            missingAttribute: "Attribut {attr} fehlt in {obj} prop",
            next: "Weiter",
            previous: "Zurück",
            showRecords: "Zeigt {total} Ergebnisse",
            showRecordsInterval: "Zeigt {first} bis {last} von {total} Ergebnissen"
          }
        }
      }
    });
    return { t: e };
  },
  created() {
    this.data.headings || (this.error = this.t("table.missingAttribute", {
      attr: '<pre class="inline-block font-bold not-italic">headings</pre>',
      obj: '<pre class="inline-block font-bold not-italic">data</pre>'
    }));
  },
  watch: {
    data: {
      deep: !0,
      handler() {
        this.syncItemsWithProp();
      }
    }
  },
  computed: {
    headings() {
      return this.data.headings ? [...this.data.headings].sort(
        (e, t) => e.position - t.position
      ) : {};
    },
    activeHeadings() {
      return this.headings ? this.headings.filter((e) => e.visible) : {};
    },
    currentItems() {
      const e = this.meta.lastItem - this.meta.firstItem + 1;
      let t = [];
      this.meta.pagination >= this.items.length ? t = this.items.slice(0, e) : t = this.items.slice(
        this.meta.firstItem - 1,
        Math.max(
          this.meta.firstItem - 1 + this.meta.pagination,
          e
        )
      );
      const r = this.informal ? x1 : k1;
      return this.loading && t.length < r ? t.concat(this.fillItems(r - t.length)) : t;
    },
    detailsText() {
      return this.informal ? "" : this.t("table.details");
    },
    meta() {
      let e = {};
      return e.totalRecords = Math.max(
        this.data.meta.records,
        this.items.length
      ), e.pagination = (this.data.meta.pagination < 1 ? 1 : this.data.meta.pagination) || 10, e.totalPages = Math.ceil(e.totalRecords / e.pagination) || 1, e.currentPage = Math.min(
        Math.max(this.data.meta.page, 1),
        e.totalPages
      ) || 1, e.firstItem = e.pagination * (e.currentPage - 1) + 1, e.lastItem = Math.min(
        e.firstItem + e.pagination - 1,
        e.totalRecords
      ) || this.items.length, e;
    },
    footerText() {
      return this.error ? this.error : this.loading ? this.t("table.loading") : this.data.meta.records ? this.t("table.showRecordsInterval", {
        first: new Intl.NumberFormat(Cr).format(
          this.meta.firstItem
        ),
        last: new Intl.NumberFormat(Cr).format(
          this.meta.lastItem
        ),
        total: new Intl.NumberFormat(Cr).format(
          this.meta.totalRecords
        )
      }) : this.t("table.showRecords", {
        total: new Intl.NumberFormat(Cr).format(
          this.items.length
        )
      });
    },
    computedInputRoundedClasses() {
      return this.searchDropdownItems.length > 0 ? "rounded-md rounded-l-none" : "rounded-md";
    },
    computedButtonRoundedClasses() {
      return this.searchDropdownItems.length > 0 ? "rounded-md rounded-r-none" : "rounded-md";
    },
    computedFlexDirectionProperty() {
      return this.searchDropdownItems.length > 0 ? "row" : "col";
    }
  },
  methods: {
    /* Emitters */
    /**
     * Emitted when heading visibility changed
     * @param heading {Object} Table heading
     */
    filter(e) {
      this.$emit("filtered", e.name, e.visible);
    },
    /**
     * Emitted when record checkbox selected
     * @param eventValue {Boolean} Is checkbox selected?
     * @param id {Number | String} ID of record
     */
    select(e, t) {
      this.$emit("selected", t, e);
    },
    /**
     * Emitted when record radio button selected
     * @param eventValue {Boolean} Is radio button selected?
     * @param id {Number | String} ID of record
     */
    selectRadio(e, t) {
      const r = this.items.find(
        (i) => i.selected
      );
      r && (r.selected = !1);
      const n = this.items.find(
        (i) => i.id === t
      );
      n && (n.selected = !0), this.$emit("selected", t, e);
    },
    /**
     * Emitted when heading sorted
     * @param heading {Object} Table heading
     */
    sort(e) {
      this.headings.forEach((t) => {
        if (t.name === e.name) {
          t.sort = e.sort === "asc" ? "desc" : "asc";
          return;
        }
        t.sort = t.sort == "disabled" ? "disabled" : null;
      }), this.$emit("sorted", e.name, e.sort);
    },
    /**
     * Emitted when record detail link clicked
     * @param id {Number | String} ID of record
     * @param source {String} Source of record - row or actionButton
     */
    click(e, t) {
      this.$emit("clicked", e, t);
    },
    /**
     * Emitted when table heading reordered
     * @param heading {Object} Table heading
     * @param position {Number} Index of new position
     */
    reorder(e, t) {
      this.$emit("reordered", e.name, t);
    },
    /**
     * Emitted when pagination arrows clicked
     * @param direction {String} Direction of clicked pagination ['prev', 'next']
     */
    paginate(e) {
      this.$emit("paginated", e);
    },
    /**
     * Emitted when search bar is typed - returns value
     */
    searchTyped(e) {
      this.searchValue = e, this.$emit("searched", this.searchValue);
    },
    /* Methods */
    headingTitle(e) {
      return e || this.t("table.missingHeadingTitle");
    },
    /**
     * Synchronizes the component's items state with the data prop.
     * This method checks if the data prop and its items sub-property exist
     * and updates the component's items state accordingly. If the data or
     * data.items are not present, it sets the items state to an empty array.
     */
    syncItemsWithProp() {
      this.items = this.data && this.data.items ? this.data.items : [];
    },
    openSearchbar(e) {
      e == "mobile" ? (this.searchbarOpened = !0, this.$refs.searchbarMobile.focusInputElement(), this.clickOutsideElement(this.$refs.searchbarMobile, () => {
        this.searchbarOpened = !1, this.searchValue = "", this.$refs.searchbar.unFocusInputElement();
      })) : (this.searchbarOpened = !0, this.$refs.searchbar.focusInputElement(), this.clickOutsideElement(this.$refs.searchbar, () => {
        this.searchbarOpened = !1, this.searchValue = "", this.$refs.searchbar.unFocusInputElement();
      }));
    },
    openDropdown(e, t) {
      this.dropdownOpen = !1, setTimeout(() => {
        const r = this.$refs.actionDropdown, n = e.target.getBoundingClientRect(), i = this.$refs.table.getBoundingClientRect(), a = this.$refs.tableHeader.getBoundingClientRect(), s = this.informal ? 30 : 10, u = n.top - i.top + a.height + n.height + s;
        r.style.top = `${u}px`, this.dropdownOpen = !0, this.rowIdentifierProxy = t, this.clickOutsideElement(this.$refs.actionDropdown, () => {
          this.dropdownOpen = !1;
        });
      }, 150);
    },
    dropdownActionSelected(e) {
      this.dropdownOpen = !1, this.$emit(
        "actionSelected",
        e,
        this.rowIdentifierProxy
      );
    },
    cellValue(e, t) {
      return t ? e : `<span class="italic text-danger-500 dark:text-danger-400 transition">${this.t(
        "table.missingHeadingName"
      )}</span>`;
    },
    toggleHeading(e) {
      e.visible = !e.visible, this.filter(e);
    },
    /**
     * Returns array of missing items to reach minimum of loading rows
     * @param n {Number} Number of rows to fill
     */
    fillItems(e) {
      let t = {};
      for (let n in this.headings)
        t[this.headings[n].name] = "1";
      let r = [];
      for (let n = 0; n < e; n++)
        r.push(t);
      return r;
    },
    clickOutsideElement(e, t = () => {
    }, r = document.createElement(null), n = "mouseup") {
      document.addEventListener(n, function i(a) {
        if (!(a.target instanceof Element))
          return document.removeEventListener(n, i), !1;
        e !== a.target && !Array.from(r).includes(a.target) && t(a) !== !1 && document.removeEventListener(
          n,
          i
        );
      });
    },
    hasStickyDetails() {
      return this.ctaIcon && this.ctaIcon !== "";
    }
  }
}, T1 = {
  key: 0,
  class: "text-lg font-bold text-gray-500 dark:text-white whitespace-nowrap"
}, O1 = {
  key: 0,
  class: "md:flex flex-row gap-3 hidden"
}, E1 = { class: "flex flex-row transition-all" }, D1 = { class: "flex flex-row w-full" }, C1 = {
  key: 0,
  class: "flex justify-between w-full items-center sm:w-fit"
}, I1 = { class: "block sm:hidden" }, P1 = {
  key: 0,
  class: "text-lg font-bold text-gray-500 dark:text-white whitespace-nowrap"
}, L1 = /* @__PURE__ */ te("col", { class: "w-8" }, null, -1), M1 = ["onClick"], N1 = {
  key: 2,
  class: "z-50"
}, A1 = /* @__PURE__ */ te("div", { class: "w-8 h-2 bg-action-300 dark:bg-action-600 rounded-md" }, null, -1), R1 = {
  key: 4,
  class: "border-r border-t border-b border-gray-200 dark:border-gray-700 rounded-r-lg absolute top-2 right-4 bottom-2 -left-12 h-12 z-10 group-hover:shadow-card dark:group-hover:shadow-card-dark transition-all"
}, F1 = {
  ref: "actionDropdown",
  class: "absolute max-w-xs w-fit min-w-[120px] rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 my-2 z-50 right-0 mr-6"
}, Y1 = { class: "flex flex-col" }, B1 = ["onClick"], W1 = { class: "" }, U1 = { class: "flex flex-col text-left opacity-[.999] overflow-hidden rounded-md" }, z1 = ["onClick"], V1 = ["innerHTML"], H1 = { class: "flex flex-row items-center" };
function j1(e, t, r, n, i, a) {
  const s = He("PawButton"), u = He("PawDropdown"), o = He("PawCrazyInput"), l = He("PawLink"), f = He("PawCheckbox"), m = He("PawRadio"), p = He("PawLazyField"), E = He("PawLabel"), S = He("PawLoadingSpinner"), d = He("PawIcon");
  return P(), W("div", {
    class: H(["flex flex-col relative transition z-0", {
      "pointer-events-none": r.loading
    }])
  }, [
    te("div", {
      class: H(["overflow-y-auto max-h-full transition", {
        "overflow-hidden": r.loading,
        "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-t border-l border-r rounded-t-xl translate-z-0": !r.informal,
        "px-4": r.informal
      }])
    }, [
      r.buttons.length || r.title || r.searchDropdownItems.length ? (P(), W("div", {
        key: 0,
        ref: "tableHeader",
        class: H([{
          "px-0 mb-3 sm:mb-5": r.informal,
          "px-6": !r.informal,
          "flex-wrap sm:!h-fit": r.searchDropdownItems.length > 0
        }, "sticky inset-0 flex flex-row justify-between items-center mt-3 h-fit sm:h-8 z-50 gap-3"])
      }, [
        te("div", {
          class: H({ "hidden sm:block": r.searchDropdownItems.length })
        }, [
          r.title ? (P(), W("h1", T1, pe(r.title), 1)) : X("", !0)
        ], 2),
        Object.keys(r.buttons).length <= 4 ? (P(), W("div", O1, [
          te("div", E1, [
            ir(Qe(s, {
              disabled: r.loading,
              outlined: "",
              size: "md",
              title: "Search",
              icon: "search",
              onClicked: t[0] || (t[0] = (c) => a.openSearchbar())
            }, null, 8, ["disabled"]), [
              [
                zr,
                r.searchDropdownItems.length ? !1 : !i.searchbarOpened && r.searchbar
              ]
            ]),
            r.searchDropdownItems.length ? (P(), Oe(u, {
              key: 0,
              outlined: "",
              size: "md",
              icon: "expand_more",
              class: "h-full",
              textSlot: r.searchDropdownText,
              items: r.searchDropdownItems,
              buttonRoundedClasses: a.computedButtonRoundedClasses,
              onSelected: t[1] || (t[1] = (c) => this.$emit("searchDropdownItemClicked", c))
            }, null, 8, ["textSlot", "items", "buttonRoundedClasses"])) : X("", !0),
            Qe(o, {
              ref: "searchbar",
              value: i.searchValue,
              placeholder: "Search",
              title: "Extended information about this field",
              contextIcon: "search",
              class: H([
                "max-h-8",
                i.searchbarOpened && !r.searchDropdownItems.length ? "w-full" : r.searchDropdownItems.length ? "w-full rounded-l-none" : "w-0 overflow-hidden"
              ]),
              inputRoundedClasses: a.computedInputRoundedClasses,
              inputMinWidthClasses: "min-w-[30ch]",
              flexDir: a.computedFlexDirectionProperty,
              onTyped: t[2] || (t[2] = (c) => a.searchTyped(c)),
              onKeyDownEnter: t[3] || (t[3] = (c) => this.$emit("keyDownEnter"))
            }, {
              default: be(() => [
                we(pe(i.searchValue), 1)
              ]),
              _: 1
            }, 8, ["value", "inputRoundedClasses", "flexDir", "class"])
          ]),
          (P(!0), W(tt, null, gt(r.buttons, (c) => (P(), Oe(s, {
            key: c.id,
            onClicked: (g) => this.$emit("buttonClicked", c.identifier),
            disabled: r.loading,
            outlined: c.outlined,
            size: "md",
            title: c.title,
            icon: c.icon
          }, {
            default: be(() => [
              we(pe(c.textSlot), 1)
            ]),
            _: 2
          }, 1032, ["onClicked", "disabled", "outlined", "title", "icon"]))), 128))
        ])) : X("", !0),
        te("div", {
          class: H(["flex flex-row gap-3 md:hidden", [
            r.buttons.length >= 4 ? "!flex" : "",
            r.searchDropdownItems.length ? "flex-col-reverse items-end sm:flex-row w-full" : ""
          ]])
        }, [
          te("div", D1, [
            ir(Qe(s, {
              disabled: r.loading,
              outlined: "",
              size: "md",
              title: "Search",
              icon: "search",
              onClicked: t[4] || (t[4] = (c) => a.openSearchbar("mobile"))
            }, null, 8, ["disabled"]), [
              [
                zr,
                r.searchDropdownItems.length ? !1 : !i.searchbarOpened && r.searchbar
              ]
            ]),
            r.searchDropdownItems.length ? (P(), Oe(u, {
              key: 0,
              outlined: "",
              size: "md",
              icon: "expand_more",
              class: "h-full",
              textSlot: r.searchDropdownText,
              items: r.searchDropdownItems,
              buttonRoundedClasses: a.computedButtonRoundedClasses,
              onSelected: t[5] || (t[5] = (c) => this.$emit("searchDropdownItemClicked", c))
            }, null, 8, ["textSlot", "items", "buttonRoundedClasses"])) : X("", !0),
            Qe(o, {
              ref: "searchbarMobile",
              value: i.searchValue,
              placeholder: "Search",
              title: "Extended information about this field",
              contextIcon: "search",
              class: H([
                "max-h-8",
                i.searchbarOpened && !r.searchDropdownItems.length ? "w-full" : r.searchDropdownItems.length ? "w-full rounded-l-none" : "w-0 overflow-hidden"
              ]),
              onTyped: t[6] || (t[6] = (c) => a.searchTyped(c)),
              inputRoundedClasses: a.computedInputRoundedClasses,
              fullwidth: !0,
              flexDir: a.computedFlexDirectionProperty,
              onKeyDownEnter: t[7] || (t[7] = (c) => this.$emit("keyDownEnter"))
            }, {
              default: be(() => [
                we(pe(i.searchValue), 1)
              ]),
              _: 1
            }, 8, ["value", "class", "inputRoundedClasses", "flexDir"])
          ]),
          r.searchDropdownItems.length ? (P(), W("div", C1, [
            te("div", I1, [
              r.title ? (P(), W("h1", P1, pe(r.title), 1)) : X("", !0)
            ]),
            r.buttons && r.buttons.length ? (P(), Oe(u, {
              key: 0,
              class: H(i.searchbarOpened ? "hidden" : ""),
              outlined: "",
              size: "md",
              icon: "expand_more",
              textSlot: "Options",
              items: r.buttons,
              onSelected: t[8] || (t[8] = (c) => this.$emit("buttonClicked", c))
            }, null, 8, ["class", "items"])) : X("", !0)
          ])) : r.buttons && r.buttons.length ? (P(), Oe(u, {
            key: 1,
            class: H(i.searchbarOpened ? "hidden" : ""),
            outlined: "",
            size: "md",
            icon: "expand_more",
            textSlot: "Options",
            items: r.buttons,
            onSelected: t[9] || (t[9] = (c) => this.$emit("buttonClicked", c))
          }, null, 8, ["class", "items"])) : X("", !0)
        ], 2)
      ], 2)) : X("", !0),
      (!r.data || Object.keys(r.data).length === 0 || Object.keys(r.data.items).length === 0) && !r.loading ? (P(), W("div", {
        key: 1,
        class: H(["flex items-center w-auto p-4 rounded-lg transition", [
          i.hasSlot ? "" : "hidden",
          r.itemsNotFoundHasBgColor ? `bg-${r.itemsNotFoundBgClass}-100 dark:bg-${r.itemsNotFoundBgClass}-800 text-${r.itemsNotFoundTextColorClass}-800 dark:text-${r.itemsNotFoundTextColorClass}-100` : "text-white",
          r.informal ? "mx-auto mb-3 sm:mb-5" : "m-6"
        ]])
      }, [
        Wt(e.$slots, "default")
      ], 2)) : (P(), W("table", {
        key: 2,
        ref: "table",
        class: H(["relative w-full formal-table fill-available", {
          "border-collapse": !r.informal,
          "border-separate table-informal": r.informal
        }])
      }, [
        te("colgroup", null, [
          r.informal ? X("", !0) : (P(), W("col", {
            key: 0,
            class: H({
              "w-8": a.activeHeadings.length > 0,
              "w-auto": a.activeHeadings.length === 0
            })
          }, null, 2)),
          (P(!0), W(tt, null, gt(a.activeHeadings, (c, g) => (P(), W("col", {
            key: g,
            class: H(["w-auto", {
              "min-w-[160px]": !r.informal,
              "min-w-[120px]": r.informal
            }])
          }, null, 2))), 128)),
          L1
        ]),
        te("thead", null, [
          te("tr", {
            class: H([{
              "bg-white dark:bg-gray-800 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition": !r.informal
            }, "sticky z-20 top-0 transition-all"])
          }, [
            r.informal ? X("", !0) : (P(), W("th", {
              key: 0,
              class: H([{
                "pt-3 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full": !r.informal
              }, "sticky z-10 pl-6 pb-0 pr-3 left-0 text-left bg-white dark:bg-gray-800 transition-all"])
            }, null, 2)),
            (P(!0), W(tt, null, gt(a.activeHeadings, (c, g) => (P(), W("th", {
              key: c.id,
              class: H(["pb-0", [
                g > 0 ? "pl-7" : "",
                g === 0 && r.informal ? "pl-3" : "",
                c.align === "left" || !c.align ? "text-left" : "",
                c.align === "right" ? "text-right" : "",
                c.align === "center" ? "text-center" : "",
                r.informal ? `${r.bgLight} dark:${r.bgDark} transition` : "pt-3 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition-all"
              ]])
            }, [
              c.sort == "disabled" ? (P(), Oe(l, {
                key: 0,
                class: "inline-flex uppercase",
                size: "sm",
                align: "right",
                compact: ""
              }, {
                default: be(() => [
                  we(pe(a.headingTitle(c.title || c.name)), 1)
                ]),
                _: 2
              }, 1024)) : (P(), Oe(l, {
                key: 1,
                class: "inline-flex uppercase",
                size: "sm",
                align: "right",
                compact: "",
                onClicked: (_) => a.sort(c),
                color: !c.title && !c.name ? "danger" : c.sort ? "action" : null,
                icon: c.sort === "asc" || !c.sort ? "keyboard_arrow_up" : "keyboard_arrow_down"
              }, {
                default: be(() => [
                  we(pe(a.headingTitle(c.title || c.name)), 1)
                ]),
                _: 2
              }, 1032, ["onClicked", "color", "icon"]))
            ], 2))), 128)),
            te("th", {
              class: H([[
                r.informal ? `pr-1 ${r.bgLight} dark:${r.bgDark} transition` : "pr-6 bg-white dark:bg-gray-800 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition-all"
              ], "sticky z-10 pl-3 pb-0 right-0 text-right transition-all"])
            }, [
              Qe(l, {
                size: "md",
                icon: "playlist_add",
                class: H({
                  "ml-auto pt-3": !r.informal
                }),
                onClicked: t[10] || (t[10] = (c) => i.settingsOpened = !i.settingsOpened)
              }, null, 8, ["class"]),
              r.informal ? (P(), W("div", {
                key: 0,
                class: H([`${r.bgLight} dark:${r.bgDark}`, "absolute top-0 bottom-0 left-0 -right-4 -z-10 transition"])
              }, null, 2)) : X("", !0)
            ], 2)
          ], 2)
        ]),
        te("tbody", null, [
          (P(!0), W(tt, null, gt(a.currentItems, (c, g) => (P(), W("tr", {
            key: c.id,
            class: H(["relative transition-all group", {
              "border-b border-gray-200 dark:border-gray-700": g < a.currentItems.length - 1 && !r.informal,
              "animate-loading": r.loading,
              "h-8 hover:bg-gray-100 dark:hover:bg-gray-800": !r.informal,
              "h-12 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg": r.informal
            }])
          }, [
            r.informal ? X("", !0) : (P(), W("td", {
              key: 0,
              class: H(["sticky z-10 pl-6 pr-3 left-0 bg-white dark:bg-gray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 overflow-hidden transition", {
                "py-0": !r.informal,
                "pt-2 pb-2": r.informal
              }])
            }, [
              r.selectionEnabled && r.multiselect ? (P(), Oe(f, {
                key: 0,
                size: "md",
                onChanged: (_) => a.select(_, c.id)
              }, null, 8, ["onChanged"])) : X("", !0),
              r.selectionEnabled && !r.multiselect ? (P(), Oe(m, {
                key: 1,
                size: "lg",
                checked: c.selected,
                onChanged: (_) => a.selectRadio(_, c.id)
              }, null, 8, ["checked", "onChanged"])) : X("", !0)
            ], 2)),
            (P(!0), W(tt, null, gt(a.activeHeadings, (_, w) => {
              var x;
              return P(), W("td", {
                key: _.name,
                class: H([[
                  w > 0 ? "pl-7" : "",
                  w === 0 && r.informal ? "pl-3 rounded-l-lg border-l overflow-hidden before:opacity-0 group-hover:before:opacity-100 before:content-[''] before:absolute before:mt-[-9.75px] before:left-0 before:right-0 before:h-12 before:overflow-clip group-hover:before:shadow-card dark:group-hover:before:shadow-card-dark before:rounded-lg before:transition" : "",
                  w === a.activeHeadings.length - 1 ? "pr-2" : "",
                  _.align === "left" || !_.align ? "text-left" : "",
                  _.align === "right" ? "text-right" : "",
                  _.align === "center" ? "text-center" : "",
                  r.informal ? "pt-2 pb-2 border-t border-b border-gray-200 dark:border-gray-700 transition" : "py-0",
                  r.isRowClickable && !_.action ? "cursor-pointer" : "",
                  c.rowLoading ? "pointer-events-none" : ""
                ], "align-middle"]),
                onClick: (b) => r.isRowClickable && !_.action ? a.click(c.id, "row") : ""
              }, [
                !r.loading && _.format !== "label" ? (P(), Oe(p, {
                  key: 0,
                  class: "inline-flex",
                  size: "sm",
                  "hide-errors": "",
                  action: _.action,
                  copy: _.copy,
                  link: _.action === "link" ? c[_.name].link : null,
                  insecure: _.action === "link" ? c[_.name].insecure : null,
                  secret: _.secret,
                  format: _.format,
                  "unit-label": _.unitLabel,
                  "unit-icon": _.unitIcon,
                  "unit-icon-outlined": _.unitIconOutlined,
                  "min-decimals": _.minDecimals,
                  "max-decimals": _.maxDecimals,
                  valueIcon: _.format == "icon" ? c[_.name].icon : "",
                  valueIconPosition: _.format == "icon" ? c[_.name].iconPosition : "",
                  valueColorClass: _.format == "icon" ? c[_.name].valueColor : ""
                }, {
                  default: be(() => [
                    we(pe(a.cellValue(
                      _.action === "link" ? c[_.name].text : _.format == "icon" ? c[_.name].value : c[_.name],
                      _.name
                    )), 1)
                  ]),
                  _: 2
                }, 1032, ["action", "copy", "link", "insecure", "secret", "format", "unit-label", "unit-icon", "unit-icon-outlined", "min-decimals", "max-decimals", "valueIcon", "valueIconPosition", "valueColorClass"])) : X("", !0),
                !r.loading && _.format === "label" && ((x = c[_.name]) != null && x.text) ? (P(), Oe(E, {
                  key: 1,
                  class: "inline-flex my-0.75",
                  size: "sm",
                  color: c[_.name].color,
                  disabled: c[_.name].disabled
                }, {
                  default: be(() => [
                    we(pe(a.cellValue(
                      c[_.name].text,
                      _.name
                    )), 1)
                  ]),
                  _: 2
                }, 1032, ["color", "disabled"])) : X("", !0),
                r.loading ? (P(), W("div", {
                  key: 2,
                  class: H(["inline-block bg-gray-400 align-middle", {
                    "w-24 h-2 rounded-md": _.format !== "label",
                    "w-14 h-6 rounded-full": _.format === "label"
                  }])
                }, null, 2)) : X("", !0)
              ], 10, M1);
            }), 128)),
            te("td", {
              class: H(["z-10 pl-3 py-0 max-w-[120px] right-0 bg-white dark:bg-gray-800 transition-all", [
                r.loading ? "before:opacity-100" : "",
                r.informal ? "pr-3 h-12" : "pr-6 overflow-y-clip row-clip group-hover:bg-gray-100 dark:group-hover:bg-gray-800 before:content-[''] before:absolute before:-z-10 before:inset-0 before:opacity-0 group-hover:before:opacity-100 before:transition before:shadow-box dark:before:shadow-box-dark",
                r.informal && !r.bgDark && !r.bgLight ? "!bg-transparent" : "",
                a.hasStickyDetails() || !r.informal ? "sticky" : "relative border-gray-200 dark:border-gray-700 rounded-r-lg border-t border-r border-b"
              ]])
            }, [
              a.hasStickyDetails() || !r.informal ? (P(), W("div", {
                key: 0,
                class: H([
                  r.informal ? "flex items-center absolute -top-2  h-16 left-[-0.75px] -right-4 pr-4 overflow-hidden transition-all" : ""
                ])
              }, [
                (!r.informal && !r.loading || r.informal) && !r.actionDropdownItems.length && !c.rowLoading ? (P(), Oe(l, {
                  key: 0,
                  size: "sm",
                  icon: r.informal ? r.ctaIcon : "last_page",
                  outlined: r.informal,
                  color: "action",
                  disabled: r.ctaIconDisabled,
                  align: "center",
                  compact: "",
                  onClicked: (_) => a.click(c.id, "actionButton"),
                  class: H(["z-20", {
                    "ml-auto": !r.informal,
                    "justify-center absolute h-12 w-[49px] bg-white dark:bg-gray-800 border-r border-t border-b border-gray-200 dark:border-gray-700 rounded-r-lg transition": r.informal,
                    "cursor-auto": r.informal && !r.ctaIcon
                  }])
                }, {
                  default: be(() => [
                    we(pe(a.detailsText), 1)
                  ]),
                  _: 2
                }, 1032, ["icon", "outlined", "disabled", "onClicked", "class"])) : c.rowLoading ? (P(), Oe(S, {
                  key: 1,
                  class: "mx-auto my-auto p-1 z-20",
                  loaderSize: "sm"
                })) : (P(), W("div", N1, [
                  Qe(s, {
                    onClick: (_) => a.openDropdown(
                      _,
                      c[r.rowItemIdentifier]
                    ),
                    size: "sm",
                    icon: "more_horiz",
                    outlined: "",
                    buttonRoundedClasses: "border-none !bg-transparent"
                  }, null, 8, ["onClick"])
                ])),
                r.loading ? (P(), W("div", {
                  key: 3,
                  class: H(["flex flex-row items-center", { "p-3": r.informal }])
                }, [
                  r.informal ? (P(), Oe(d, {
                    key: 1,
                    size: "sm",
                    class: "text-action-300 dark:text-action-600",
                    outlined: ""
                  }, {
                    default: be(() => [
                      we(" assignment ")
                    ]),
                    _: 1
                  })) : (P(), W(tt, { key: 0 }, [
                    A1,
                    Qe(d, {
                      size: "sm",
                      class: "text-action-300 dark:text-action-600"
                    }, {
                      default: be(() => [
                        we(" last_page ")
                      ]),
                      _: 1
                    })
                  ], 64))
                ], 2)) : X("", !0),
                r.informal ? (P(), W("div", R1)) : X("", !0),
                r.informal ? (P(), W("div", {
                  key: 5,
                  class: H(`${r.bgLight} dark:${r.bgDark} absolute top-2 bottom-2 left-0 right-0 z-0 transition`)
                }, null, 2)) : X("", !0),
                r.informal ? (P(), W("div", {
                  key: 6,
                  class: H(["absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition", [
                    r.bgLight ? `${r.bgLight}` : "bg-white",
                    r.bgDark ? `dark:${r.bgDark}` : "dark:bg-gray-800"
                  ]])
                }, null, 2)) : X("", !0)
              ], 2)) : X("", !0)
            ], 2)
          ], 2))), 128))
        ])
      ], 2))
    ], 2),
    Qe(Ta, {
      "enter-active-class": "transition ease-out duration-200",
      "enter-from-class": "transform opacity-0 scale-95",
      "enter-to-class": "transform opacity-100 scale-100",
      "leave-active-class": "transition ease-in duration-75",
      "leave-from-class": "transform opacity-100 scale-100",
      "leave-to-class": "transform opacity-0 scale-95",
      appear: ""
    }, {
      default: be(() => [
        ir(te("div", F1, [
          te("div", Y1, [
            (P(!0), W(tt, null, gt(r.actionDropdownItems, (c) => (P(), W("button", {
              onClick: (g) => a.dropdownActionSelected(c.identifier),
              key: c.identifier,
              class: "dark:hover:bg-gray-900 cursor-pointer first-of-type:rounded-tr-lg first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-bl-lg hover:bg-gray-100 w-full p-2 text-md dark:text-white text-gray-900 transition-all duration-300 items-center flex flex-row space-x-3 border-t dark:border-gray-700 first-of-type:border-t-0"
            }, [
              Qe(d, {
                size: "sm",
                class: "text-gray-400"
              }, {
                default: be(() => [
                  we(pe(c.icon), 1)
                ]),
                _: 2
              }, 1024),
              te("span", W1, pe(c.textSlot), 1)
            ], 8, B1))), 128))
          ])
        ], 512), [
          [zr, i.dropdownOpen]
        ])
      ]),
      _: 1
    }),
    te("div", {
      class: H(["absolute max-w-[200px] z-30 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-card dark:shadow-card-dark transition-all before:absolute before:content-[''] before:w-4 before:h-4 before:-top-2 before:z-0 before:rotate-45 before:bg-gray-100 dark:before:bg-gray-700 before:border before:border-t-gray-200 before:border-l-gray-200 dark:before:border-t-gray-600 dark:before:border-l-gray-600 before:border-b-gray-100 before:border-r-gray-100 dark:before:border-b-gray-700 dark:before:border-r-gray-700 before:transition", {
        "opacity-0 invisible -translate-y-5": !i.settingsOpened || this.loading,
        "opacity-1 visible translate-y-0": i.settingsOpened && !this.loading,
        "top-32 sm:top-20 right-3 before:right-6": !r.informal,
        "top-36 sm:top-24 right-5 before:right-3": r.informal
      }])
    }, [
      te("div", U1, [
        (P(!0), W(tt, null, gt(a.headings, (c, g) => (P(), W("div", {
          key: g,
          class: "flex flex-row justify-between gap-2 p-1 items-center hover:bg-white dark:hover:bg-gray-800 transition"
        }, [
          Qe(d, {
            size: "sm",
            outlined: "",
            onClick: (_) => a.toggleHeading(c),
            class: H(["cursor-pointer transition", {
              "text-gray-400": c.visible,
              "text-gray-200 dark:text-gray-600": !c.visible
            }])
          }, {
            default: be(() => [
              we(pe(c.visible ? "visibility" : "visibility_off"), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "class"]),
          te("span", {
            class: H(["mr-auto prose-md element-text truncate font-normal cursor-pointer transition", {
              "text-gray-900 dark:text-white": c.visible,
              "text-gray-500 dark:text-gray-500": !c.visible
            }]),
            onClick: (_) => a.toggleHeading(c)
          }, pe(c.title), 11, z1),
          Qe(d, {
            size: "sm",
            class: H(["cursor-grab transition", {
              "text-gray-400": c.visible,
              "text-gray-200 dark:text-gray-600": !c.visible
            }]),
            disabled: c.visible
          }, {
            default: be(() => [
              we("drag_handle")
            ]),
            _: 2
          }, 1032, ["class", "disabled"])
        ]))), 128))
      ])
    ], 2),
    te("div", {
      class: H(["flex flex-col xs:flex-row items-center justify-between prose-xs element-text text-gray-500 border-gray-200 dark:border-gray-700 transition", {
        "border-t": a.currentItems.length > 0 || r.informal,
        "bg-white dark:bg-gray-800 border-b border-l border-r rounded-b-xl translate-z-0": !r.informal,
        "px-6 py-3": !r.informal,
        "px-3 py-2 mx-4": r.informal
      }])
    }, [
      te("div", {
        class: H({
          "italic text-danger-500 dark:text-danger-400 transition": i.error
        }),
        innerHTML: a.footerText
      }, null, 10, V1),
      te("div", H1, [
        Qe(l, {
          size: "sm",
          icon: "keyboard_arrow_up",
          class: "mr-2",
          onClicked: t[11] || (t[11] = (c) => a.paginate("prev")),
          disabled: a.meta.currentPage <= 1
        }, {
          default: be(() => [
            we(pe(this.t("table.previous")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Qe(l, {
          size: "sm",
          icon: "keyboard_arrow_down",
          onClicked: t[12] || (t[12] = (c) => a.paginate("next")),
          disabled: a.meta.currentPage >= a.meta.totalPages
        }, {
          default: be(() => [
            we(pe(this.t("table.next")), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 2)
  ], 2);
}
const lb = /* @__PURE__ */ ft(S1, [["render", j1]]), Yr = Fo(cl), q1 = {
  name: "PawTypography",
  props: ["view"],
  data() {
    return {
      typography: {
        xxl: Yr.theme.typography.xxl,
        xl: Yr.theme.typography.xl,
        lg: Yr.theme.typography.lg,
        md: Yr.theme.typography.md,
        sm: Yr.theme.typography.sm,
        xs: Yr.theme.typography.xs
      }
    };
  },
  methods: {
    getFontCSS(e) {
      return e.css.constructor.name === "Array" ? e.css[e.css.length - 1] : e.css;
    }
  }
}, G1 = { class: "bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl flex flex-col gap-4 transition" }, $1 = {
  key: 0,
  class: "flex flex-col gap-8 sm:gap-4"
}, K1 = { class: "flex-none font-mono text-xs text-gray-500 w-24" }, X1 = /* @__PURE__ */ te("span", { class: "font-bold" }, "Bold", -1), Q1 = {
  key: 0,
  class: "italic"
}, Z1 = {
  key: 1,
  class: "text-gray-900 dark:text-white transition"
}, J1 = /* @__PURE__ */ Uc('<h1 class="prose-xxl font-bold">Supercharged for pros.</h1><h2 class="prose-xl font-bold text-gray-500">From $1999</h2><br><br><p class="text-lg"><span class="font-bold">A case full of energy.</span> <span class="text-gray-500">Wirelessly</span></p><p class="prose-md max-w-xs">and effortlessly recharge the MagSafe Charging Case on a MagSafe charger. Fully loaded, the case gives you up to 30 hours of total listening time. And charging AirPods in the case for just 5 minutes generates around an hour of listening time.</p><br><br><p class="prose-sm text-gray-500">Delightfully capable. Surprisingly affordable.</p><p class="prose-xs text-gray-500">Die Displays haben gerundete Ecken. Als Rechteck gemessen hat das Display eine Diagonale von 12,9&quot; (32,77 cm) beim 12,9&quot; iPad Pro, von 11&quot; (27,96 cm) beim 11&quot; iPad Pro, von 10,86&quot; (27,59 cm) beim iPad Air (4. Generation) und von 8,3&quot; (21,08 cm) beim iPad mini (6. Generation). Der tatsächlich sichtbare Displaybereich ist kleiner.</p>', 10), eb = [
  J1
];
function tb(e, t, r, n, i, a) {
  return P(), W("div", G1, [
    r.view === "sizes" ? (P(), W("div", $1, [
      (P(!0), W(tt, null, gt(i.typography, (s, u) => (P(), W("div", {
        key: u,
        class: "sm:flex sm:flex-row sm:justify-items-start sm:items-center sm:gap-10 text-gray-900 dark:text-white transition"
      }, [
        te("p", K1, " prose-" + pe(u) + " " + pe(a.getFontCSS(s).fontSize), 1),
        te("p", {
          class: H(`prose-${u}`)
        }, " Roboto Regular ", 2),
        te("p", {
          class: H([`prose-${u}`, "sm:text-right sm:ml-auto"])
        }, [
          X1,
          ["lg", "md", "sm", "xs"].includes(u) ? (P(), W("span", Q1, ", Italic")) : X("", !0),
          ["sm", "xs"].includes(u) ? (P(), W("span", {
            key: 1,
            class: H(["uppercase", { "tracking-wider": u === "sm", "tracking-widest": u === "xs" }])
          }, ", Uppercase", 2)) : X("", !0)
        ], 2)
      ]))), 128))
    ])) : X("", !0),
    r.view === "context" ? (P(), W("div", Z1, eb)) : X("", !0)
  ]);
}
const ub = /* @__PURE__ */ ft(q1, [["render", tb]]);
export {
  Hn as PawButton,
  vo as PawCheckbox,
  cd as PawChip,
  nb as PawColorSwatches,
  Qm as PawCrazyInput,
  ib as PawDatePicker,
  Dy as PawDropDown,
  ab as PawFloatingBar,
  Gt as PawIcon,
  Ny as PawLabel,
  c1 as PawLazyField,
  Ml as PawLink,
  sb as PawList,
  m1 as PawListItem,
  _o as PawLoadingSpinner,
  Nl as PawRadio,
  ob as PawSwitch,
  lb as PawTable,
  ub as PawTypography
};
