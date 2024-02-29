import { openBlock as b, createElementBlock as O, normalizeClass as N, renderSlot as Je, resolveComponent as ve, createBlock as le, withCtx as ee, createTextVNode as re, toDisplayString as Z, createCommentVNode as A, createElementVNode as U, createVNode as _e, Fragment as ke, renderList as Fe, h as gi, getCurrentInstance as Kn, inject as il, onMounted as sl, onUnmounted as ll, shallowRef as ol, ref as De, computed as nt, onBeforeMount as ul, watch as Na, Text as cl, withDirectives as Tt, vModelText as pi, vModelDynamic as dl, vShow as _r, pushScopeId as fl, popScopeId as hl, Transition as yi, createStaticVNode as ml } from "vue";
const Me = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, gl = {
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
function pl(e, t, r, n, a, i) {
  return b(), O("span", {
    class: N(i.setClassNames())
  }, [
    Je(e.$slots, "default")
  ], 2);
}
const st = /* @__PURE__ */ Me(gl, [["render", pl]]), yl = {
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
    PawIcon: st
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
      return e += " " + this.setPaddings(this.size), e += " " + this.setStates(), e;
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
}, bl = ["title"], _l = /* @__PURE__ */ U("div", { class: "h-1/3 w-10 bg-gray-500 rounded-full" }, null, -1), vl = [
  _l
], kl = ["title"], xl = { class: "truncate" };
function wl(e, t, r, n, a, i) {
  const s = ve("PawIcon");
  return r.loading ? (b(), O("div", {
    key: 0,
    class: N(["flex items-center group max-w-fit my-0 transition", i.setClassNames()]),
    disabled: "",
    title: r.title
  }, vl, 10, bl)) : (b(), O("button", {
    key: 1,
    class: N(["flex items-center group max-w-full my-0 transition", i.setClassNames()]),
    title: r.title,
    onClick: t[0] || (t[0] = (...o) => i.click && i.click(...o))
  }, [
    r.icon ? (b(), le(s, {
      key: 0,
      size: r.size,
      outlined: r.outlined,
      class: N(["transition", i.setIconClassNames()])
    }, {
      default: ee(() => [
        re(Z(r.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : A("", !0),
    U("span", xl, [
      Je(e.$slots, "default")
    ])
  ], 10, kl));
}
const Zr = /* @__PURE__ */ Me(yl, [["render", wl]]), Sl = {
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
    PawIcon: st
  },
  methods: {
    change() {
      this.$emit("changed", this.value = !this.value);
    }
  }
}, Ol = ["title"], El = { class: "relative w-[18px] h-[18px] m-0.75 shrink-0 self-start pointer-events-none" }, Cl = ["checked", "disabled"], Dl = { class: "absolute inset-0 block peer-checked:opacity-100 opacity-0 w-4 h-4 m-px bg-white dark:peer-disabled:bg-gray-500 text-action-500 dark:text-action-400 peer-disabled:text-gray-200 dark:peer-disabled:text-gray-600 overflow-hidden rounded-sm transition z-10" }, Tl = { class: "absolute inset-0 block group-hover:peer-checked:opacity-100 group-hover:peer-checked:peer-disabled:opacity-0 opacity-0 w-4 h-4 m-px bg-white overflow-hidden rounded-sm transition z-20" }, Nl = /* @__PURE__ */ U("span", { class: "absolute inset-0 block w-[18px] h-[18px] border-2 border-gray-400 peer-checked:border-action-500 dark:peer-checked:border-action-400 peer-disabled:border-gray-200 dark:peer-disabled:border-gray-600 rounded-sm peer-disabled:cursor-default transition z-30" }, null, -1);
function Il(e, t, r, n, a, i) {
  const s = ve("PawIcon");
  return b(), O("label", {
    class: N(["group inline-flex items-center", {
      "cursor-pointer": !r.disabled,
      "pointer-events-none": r.disabled,
      "gap-1": r.size === "sm",
      "gap-2 p-1": r.size === "md",
      "gap-3 p-2": r.size === "lg"
    }]),
    title: r.title
  }, [
    U("span", El, [
      U("input", {
        type: "checkbox",
        onChange: t[0] || (t[0] = (...o) => i.change && i.change(...o)),
        checked: r.checked,
        disabled: r.disabled,
        class: "peer hidden"
      }, null, 40, Cl),
      U("span", Dl, [
        _e(s, {
          size: "md",
          class: "ml-[50%] mt-[50%] -translate-x-1/2 -translate-y-1/2"
        }, {
          default: ee(() => [
            re(" check_box ")
          ]),
          _: 1
        })
      ]),
      U("span", Tl, [
        _e(s, {
          size: "md",
          class: "text-action-500 dark:text-action-400 ml-[50%] mt-[50%] -translate-x-1/2 -translate-y-1/2"
        }, {
          default: ee(() => [
            re(" indeterminate_check_box ")
          ]),
          _: 1
        })
      ]),
      Nl
    ]),
    e.$slots.default ? (b(), O("span", {
      key: 0,
      class: N(["text-md transition", r.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"])
    }, [
      Je(e.$slots, "default")
    ], 2)) : A("", !0)
  ], 10, Ol);
}
const bi = /* @__PURE__ */ Me(Sl, [["render", Il]]), Ml = {
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
    }
  },
  components: {
    PawIcon: st
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
}, Ll = ["title"], Pl = { class: "truncate" };
function Al(e, t, r, n, a, i) {
  const s = ve("PawIcon");
  return b(), O("button", {
    class: N(["inline-flex items-center group my-0 max-w-full rounded-full overflow-hidden transition", i.setClassNames()]),
    title: r.title,
    onClick: t[0] || (t[0] = (...o) => i.click && i.click(...o))
  }, [
    r.icon ? (b(), le(s, {
      key: 0,
      size: r.size,
      outlined: r.outlined,
      class: N(["transition", i.setIconClassNames()])
    }, {
      default: ee(() => [
        re(Z(r.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : A("", !0),
    U("span", Pl, [
      Je(e.$slots, "default")
    ]),
    r.disabled ? A("", !0) : (b(), le(s, {
      key: 1,
      size: "sm",
      class: N(["transition", i.setCloseClassNames()])
    }, {
      default: ee(() => [
        re("close")
      ]),
      _: 1
    }, 8, ["class"]))
  ], 10, Ll);
}
const Rl = /* @__PURE__ */ Me(Ml, [["render", Al]]);
var Ia = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _i(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vi = {}, ki = {}, Xn = {};
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
      return r.replace(/^[+-]?/, (a) => a === "-" ? "" : "-");
    let n = [
      "var",
      "calc",
      "min",
      "max",
      "clamp"
    ];
    for (const a of n)
      if (r.includes(`${a}(`))
        return `calc(${r} * -1)`;
  }
})(Xn);
var xi = {};
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
})(xi);
var wi = {};
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
      ...new Set(n.filter((i) => r !== !1 && r[i] !== !1).concat(Object.keys(r).filter((i) => r[i] !== !1)))
    ];
  }
})(wi);
var Si = {}, Jr = {}, Zn = { exports: {} }, he = String, Oi = function() {
  return { isColorSupported: !1, reset: he, bold: he, dim: he, italic: he, underline: he, inverse: he, hidden: he, strikethrough: he, black: he, red: he, green: he, yellow: he, blue: he, magenta: he, cyan: he, white: he, gray: he, bgBlack: he, bgRed: he, bgGreen: he, bgYellow: he, bgBlue: he, bgMagenta: he, bgCyan: he, bgWhite: he };
};
Zn.exports = Oi();
Zn.exports.createColors = Oi;
var Ei = Zn.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(u, l) {
    for (var p in l)
      Object.defineProperty(u, p, {
        enumerable: !0,
        get: l[p]
      });
  }
  t(e, {
    dim: function() {
      return s;
    },
    default: function() {
      return o;
    }
  });
  const r = /* @__PURE__ */ n(Ei);
  function n(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  let a = /* @__PURE__ */ new Set();
  function i(u, l, p) {
    typeof process < "u" && process.env.JEST_WORKER_ID || p && a.has(p) || (p && a.add(p), console.warn(""), l.forEach((y) => console.warn(u, "-", y)));
  }
  function s(u) {
    return r.default.dim(u);
  }
  const o = {
    info(u, l) {
      i(r.default.bold(r.default.cyan("info")), ...Array.isArray(u) ? [
        u
      ] : [
        l,
        u
      ]);
    },
    warn(u, l) {
      i(r.default.bold(r.default.yellow("warn")), ...Array.isArray(u) ? [
        u
      ] : [
        l,
        u
      ]);
    },
    risk(u, l) {
      i(r.default.bold(r.default.magenta("risk")), ...Array.isArray(u) ? [
        u
      ] : [
        l,
        u
      ]);
    }
  };
})(Jr);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ r(Jr);
  function r(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function n({ version: i, from: s, to: o }) {
    t.default.warn(`${s}-color-renamed`, [
      `As of Tailwind CSS ${i}, \`${s}\` has been renamed to \`${o}\`.`,
      "Update your configuration file to silence this warning."
    ]);
  }
  const a = {
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
})(Si);
var Ci = {};
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
      for (let o in s) {
        var a;
        !(r == null || (a = r.hasOwnProperty) === null || a === void 0) && a.call(r, o) || (r[o] = s[o]);
      }
      for (let o of Object.getOwnPropertySymbols(s)) {
        var i;
        !(r == null || (i = r.hasOwnProperty) === null || i === void 0) && i.call(r, o) || (r[o] = s[o]);
      }
    }
    return r;
  }
})(Ci);
var Di = {};
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
    let n = r.split("[").length - 1, a = r.split("]").length - 1;
    if (n !== a)
      throw new Error(`Path is invalid. Has unbalanced brackets: ${r}`);
    return r.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
  }
})(Di);
var Ti = {}, Qr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(y, g) {
    for (var S in g)
      Object.defineProperty(y, S, {
        enumerable: !0,
        get: g[S]
      });
  }
  t(e, {
    flagEnabled: function() {
      return o;
    },
    issueFlagNotices: function() {
      return l;
    },
    default: function() {
      return p;
    }
  });
  const r = /* @__PURE__ */ a(Ei), n = /* @__PURE__ */ a(Jr);
  function a(y) {
    return y && y.__esModule ? y : {
      default: y
    };
  }
  let i = {
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
  function o(y, g) {
    if (s.future.includes(g)) {
      var S, f, v;
      return y.future === "all" || ((v = (f = y == null || (S = y.future) === null || S === void 0 ? void 0 : S[g]) !== null && f !== void 0 ? f : i[g]) !== null && v !== void 0 ? v : !1);
    }
    if (s.experimental.includes(g)) {
      var d, m, _;
      return y.experimental === "all" || ((_ = (m = y == null || (d = y.experimental) === null || d === void 0 ? void 0 : d[g]) !== null && m !== void 0 ? m : i[g]) !== null && _ !== void 0 ? _ : !1);
    }
    return !1;
  }
  function u(y) {
    if (y.experimental === "all")
      return s.experimental;
    var g;
    return Object.keys((g = y == null ? void 0 : y.experimental) !== null && g !== void 0 ? g : {}).filter((S) => s.experimental.includes(S) && y.experimental[S]);
  }
  function l(y) {
    if (process.env.JEST_WORKER_ID === void 0 && u(y).length > 0) {
      let g = u(y).map((S) => r.default.yellow(S)).join(", ");
      n.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${g}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  const p = s;
})(Qr);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const t = Qr, r = /* @__PURE__ */ a(Jr);
  function n(s) {
    if (typeof WeakMap != "function")
      return null;
    var o = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
    return (n = function(l) {
      return l ? u : o;
    })(s);
  }
  function a(s, o) {
    if (!o && s && s.__esModule)
      return s;
    if (s === null || typeof s != "object" && typeof s != "function")
      return {
        default: s
      };
    var u = n(o);
    if (u && u.has(s))
      return u.get(s);
    var l = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var y in s)
      if (y !== "default" && Object.prototype.hasOwnProperty.call(s, y)) {
        var g = p ? Object.getOwnPropertyDescriptor(s, y) : null;
        g && (g.get || g.set) ? Object.defineProperty(l, y, g) : l[y] = s[y];
      }
    return l.default = s, u && u.set(s, l), l;
  }
  function i(s) {
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
      let { content: p, purge: y, safelist: g } = s;
      return Array.isArray(g) ? g : Array.isArray(p == null ? void 0 : p.safelist) ? p.safelist : Array.isArray(y == null ? void 0 : y.safelist) ? y.safelist : Array.isArray(y == null || (l = y.options) === null || l === void 0 ? void 0 : l.safelist) ? y.options.safelist : [];
    })(), s.blocklist = (() => {
      let { blocklist: l } = s;
      if (Array.isArray(l)) {
        if (l.every((p) => typeof p == "string"))
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
      var u;
      s.prefix = (u = s.prefix) !== null && u !== void 0 ? u : "";
    }
    s.content = {
      relative: (() => {
        let { content: l } = s;
        return l != null && l.relative ? l.relative : (0, t.flagEnabled)(s, "relativeContentPathsByDefault");
      })(),
      files: (() => {
        let { content: l, purge: p } = s;
        return Array.isArray(p) ? p : Array.isArray(p == null ? void 0 : p.content) ? p.content : Array.isArray(l) ? l : Array.isArray(l == null ? void 0 : l.content) ? l.content : Array.isArray(l == null ? void 0 : l.files) ? l.files : [];
      })(),
      extract: (() => {
        let l = (() => {
          var g, S, f, v, d, m, _, E, x, w;
          return !((g = s.purge) === null || g === void 0) && g.extract ? s.purge.extract : !((S = s.content) === null || S === void 0) && S.extract ? s.content.extract : !((f = s.purge) === null || f === void 0 || (v = f.extract) === null || v === void 0) && v.DEFAULT ? s.purge.extract.DEFAULT : !((d = s.content) === null || d === void 0 || (m = d.extract) === null || m === void 0) && m.DEFAULT ? s.content.extract.DEFAULT : !((_ = s.purge) === null || _ === void 0 || (E = _.options) === null || E === void 0) && E.extractors ? s.purge.options.extractors : !((x = s.content) === null || x === void 0 || (w = x.options) === null || w === void 0) && w.extractors ? s.content.options.extractors : {};
        })(), p = {}, y = (() => {
          var g, S, f, v;
          if (!((g = s.purge) === null || g === void 0 || (S = g.options) === null || S === void 0) && S.defaultExtractor)
            return s.purge.options.defaultExtractor;
          if (!((f = s.content) === null || f === void 0 || (v = f.options) === null || v === void 0) && v.defaultExtractor)
            return s.content.options.defaultExtractor;
        })();
        if (y !== void 0 && (p.DEFAULT = y), typeof l == "function")
          p.DEFAULT = l;
        else if (Array.isArray(l))
          for (let { extensions: g, extractor: S } of l ?? [])
            for (let f of g)
              p[f] = S;
        else
          typeof l == "object" && l !== null && Object.assign(p, l);
        return p;
      })(),
      transform: (() => {
        let l = (() => {
          var y, g, S, f, v, d;
          return !((y = s.purge) === null || y === void 0) && y.transform ? s.purge.transform : !((g = s.content) === null || g === void 0) && g.transform ? s.content.transform : !((S = s.purge) === null || S === void 0 || (f = S.transform) === null || f === void 0) && f.DEFAULT ? s.purge.transform.DEFAULT : !((v = s.content) === null || v === void 0 || (d = v.transform) === null || d === void 0) && d.DEFAULT ? s.content.transform.DEFAULT : {};
        })(), p = {};
        return typeof l == "function" && (p.DEFAULT = l), typeof l == "object" && l !== null && Object.assign(p, l), p;
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
})(Ti);
var Ni = {};
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
})(Ni);
var Ii = {};
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
    return Array.isArray(r) ? r.map((n) => t(n)) : typeof r == "object" && r !== null ? Object.fromEntries(Object.entries(r).map(([n, a]) => [
      n,
      t(a)
    ])) : r;
  }
})(Ii);
var Mi = {}, Li = {};
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
})(Li);
var Jn = {}, Qn = {}, Pi = {};
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
})(Pi);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(f, v) {
    for (var d in v)
      Object.defineProperty(f, d, {
        enumerable: !0,
        get: v[d]
      });
  }
  t(e, {
    parseColor: function() {
      return g;
    },
    formatColor: function() {
      return S;
    }
  });
  const r = /* @__PURE__ */ n(Pi);
  function n(f) {
    return f && f.__esModule ? f : {
      default: f
    };
  }
  let a = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, i = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, s = /(?:\d+|\d*\.\d+)%?/, o = /(?:\s*,\s*|\s+)/, u = /\s*[,/]\s*/, l = /var\(--(?:[^ )]*?)\)/, p = new RegExp(`^(rgba?)\\(\\s*(${s.source}|${l.source})(?:${o.source}(${s.source}|${l.source}))?(?:${o.source}(${s.source}|${l.source}))?(?:${u.source}(${s.source}|${l.source}))?\\s*\\)$`), y = new RegExp(`^(hsla?)\\(\\s*((?:${s.source})(?:deg|rad|grad|turn)?|${l.source})(?:${o.source}(${s.source}|${l.source}))?(?:${o.source}(${s.source}|${l.source}))?(?:${u.source}(${s.source}|${l.source}))?\\s*\\)$`);
  function g(f, { loose: v = !1 } = {}) {
    var d, m;
    if (typeof f != "string")
      return null;
    if (f = f.trim(), f === "transparent")
      return {
        mode: "rgb",
        color: [
          "0",
          "0",
          "0"
        ],
        alpha: "0"
      };
    if (f in r.default)
      return {
        mode: "rgb",
        color: r.default[f].map((L) => L.toString())
      };
    let _ = f.replace(i, (L, Y, ne, T, V) => [
      "#",
      Y,
      Y,
      ne,
      ne,
      T,
      T,
      V ? V + V : ""
    ].join("")).match(a);
    if (_ !== null)
      return {
        mode: "rgb",
        color: [
          parseInt(_[1], 16),
          parseInt(_[2], 16),
          parseInt(_[3], 16)
        ].map((L) => L.toString()),
        alpha: _[4] ? (parseInt(_[4], 16) / 255).toString() : void 0
      };
    var E;
    let x = (E = f.match(p)) !== null && E !== void 0 ? E : f.match(y);
    if (x === null)
      return null;
    let w = [
      x[2],
      x[3],
      x[4]
    ].filter(Boolean).map((L) => L.toString());
    return w.length === 2 && w[0].startsWith("var(") ? {
      mode: x[1],
      color: [
        w[0]
      ],
      alpha: w[1]
    } : !v && w.length !== 3 || w.length < 3 && !w.some((L) => /^var\(.*?\)$/.test(L)) ? null : {
      mode: x[1],
      color: w,
      alpha: (d = x[5]) === null || d === void 0 || (m = d.toString) === null || m === void 0 ? void 0 : m.call(d)
    };
  }
  function S({ mode: f, color: v, alpha: d }) {
    let m = d !== void 0;
    return f === "rgba" || f === "hsla" ? `${f}(${v.join(", ")}${m ? `, ${d}` : ""})` : `${f}(${v.join(" ")}${m ? ` / ${d}` : ""})`;
  }
})(Qn);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(i, s) {
    for (var o in s)
      Object.defineProperty(i, o, {
        enumerable: !0,
        get: s[o]
      });
  }
  t(e, {
    withAlphaValue: function() {
      return n;
    },
    default: function() {
      return a;
    }
  });
  const r = Qn;
  function n(i, s, o) {
    if (typeof i == "function")
      return i({
        opacityValue: s
      });
    let u = (0, r.parseColor)(i, {
      loose: !0
    });
    return u === null ? o : (0, r.formatColor)({
      ...u,
      alpha: s
    });
  }
  function a({ color: i, property: s, variable: o }) {
    let u = [].concat(s);
    if (typeof i == "function")
      return {
        [o]: "1",
        ...Object.fromEntries(u.map((p) => [
          p,
          i({
            opacityVariable: o,
            opacityValue: `var(${o})`
          })
        ]))
      };
    const l = (0, r.parseColor)(i);
    return l === null ? Object.fromEntries(u.map((p) => [
      p,
      i
    ])) : l.alpha !== void 0 ? Object.fromEntries(u.map((p) => [
      p,
      i
    ])) : {
      [o]: "1",
      ...Object.fromEntries(u.map((p) => [
        p,
        (0, r.formatColor)({
          ...l,
          alpha: `var(${o})`
        })
      ]))
    };
  }
})(Jn);
var ea = {}, Ai = {}, en = {};
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
    let a = [], i = [], s = 0, o = !1;
    for (let u = 0; u < r.length; u++) {
      let l = r[u];
      a.length === 0 && l === n[0] && !o && (n.length === 1 || r.slice(u, u + n.length) === n) && (i.push(r.slice(s, u)), s = u + n.length), o ? o = !1 : l === "\\" && (o = !0), l === "(" || l === "[" || l === "{" ? a.push(l) : (l === ")" && a[a.length - 1] === "(" || l === "]" && a[a.length - 1] === "[" || l === "}" && a[a.length - 1] === "{") && a.pop();
    }
    return i.push(r.slice(s)), i;
  }
})(en);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(u, l) {
    for (var p in l)
      Object.defineProperty(u, p, {
        enumerable: !0,
        get: l[p]
      });
  }
  t(e, {
    parseBoxShadowValue: function() {
      return s;
    },
    formatBoxShadowValue: function() {
      return o;
    }
  });
  const r = en;
  let n = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), a = /\ +(?![^(]*\))/g, i = /^-?(\d+|\.\d+)(.*?)$/g;
  function s(u) {
    return (0, r.splitAtTopLevelOnly)(u, ",").map((p) => {
      let y = p.trim(), g = {
        raw: y
      }, S = y.split(a), f = /* @__PURE__ */ new Set();
      for (let v of S)
        i.lastIndex = 0, !f.has("KEYWORD") && n.has(v) ? (g.keyword = v, f.add("KEYWORD")) : i.test(v) ? f.has("X") ? f.has("Y") ? f.has("BLUR") ? f.has("SPREAD") || (g.spread = v, f.add("SPREAD")) : (g.blur = v, f.add("BLUR")) : (g.y = v, f.add("Y")) : (g.x = v, f.add("X")) : g.color ? (g.unknown || (g.unknown = []), g.unknown.push(v)) : g.color = v;
      return g.valid = g.x !== void 0 && g.y !== void 0, g;
    });
  }
  function o(u) {
    return u.map((l) => l.valid ? [
      l.keyword,
      l.x,
      l.y,
      l.blur,
      l.spread,
      l.color
    ].filter(Boolean).join(" ") : l.raw).join(", ");
  }
})(Ai);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(D, q) {
    for (var $ in q)
      Object.defineProperty(D, $, {
        enumerable: !0,
        get: q[$]
      });
  }
  t(e, {
    normalize: function() {
      return l;
    },
    url: function() {
      return p;
    },
    number: function() {
      return y;
    },
    percentage: function() {
      return g;
    },
    length: function() {
      return v;
    },
    lineWidth: function() {
      return m;
    },
    shadow: function() {
      return _;
    },
    color: function() {
      return E;
    },
    image: function() {
      return x;
    },
    gradient: function() {
      return L;
    },
    position: function() {
      return ne;
    },
    familyName: function() {
      return T;
    },
    genericName: function() {
      return B;
    },
    absoluteSize: function() {
      return W;
    },
    relativeSize: function() {
      return R;
    }
  });
  const r = Qn, n = Ai, a = en;
  let i = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function s(D) {
    return i.some((q) => new RegExp(`^${q}\\(.*\\)`).test(D));
  }
  const o = "--tw-placeholder", u = new RegExp(o, "g");
  function l(D, q = !0) {
    return D.startsWith("--") ? `var(${D})` : D.includes("url(") ? D.split(/(url\(.*?\))/g).filter(Boolean).map(($) => /^url\(.*?\)$/.test($) ? $ : l($, !1)).join("") : (D = D.replace(/([^\\])_+/g, ($, X) => X + " ".repeat($.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), q && (D = D.trim()), D = D.replace(/(calc|min|max|clamp)\(.+\)/g, ($) => {
      let X = [];
      return $.replace(/var\((--.+?)[,)]/g, (Ce, wt) => (X.push(wt), Ce.replace(wt, o))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ").replace(u, () => X.shift());
    }), D);
  }
  function p(D) {
    return D.startsWith("url(");
  }
  function y(D) {
    return !isNaN(Number(D)) || s(D);
  }
  function g(D) {
    return D.endsWith("%") && y(D.slice(0, -1)) || s(D);
  }
  let f = `(?:${[
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
  function v(D) {
    return D === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${f}$`).test(D) || s(D);
  }
  let d = /* @__PURE__ */ new Set([
    "thin",
    "medium",
    "thick"
  ]);
  function m(D) {
    return d.has(D);
  }
  function _(D) {
    let q = (0, n.parseBoxShadowValue)(l(D));
    for (let $ of q)
      if (!$.valid)
        return !1;
    return !0;
  }
  function E(D) {
    let q = 0;
    return (0, a.splitAtTopLevelOnly)(D, "_").every((X) => (X = l(X), X.startsWith("var(") ? !0 : (0, r.parseColor)(X, {
      loose: !0
    }) !== null ? (q++, !0) : !1)) ? q > 0 : !1;
  }
  function x(D) {
    let q = 0;
    return (0, a.splitAtTopLevelOnly)(D, ",").every((X) => (X = l(X), X.startsWith("var(") ? !0 : p(X) || L(X) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((Ce) => X.startsWith(Ce)) ? (q++, !0) : !1)) ? q > 0 : !1;
  }
  let w = /* @__PURE__ */ new Set([
    "linear-gradient",
    "radial-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient",
    "conic-gradient"
  ]);
  function L(D) {
    D = l(D);
    for (let q of w)
      if (D.startsWith(`${q}(`))
        return !0;
    return !1;
  }
  let Y = /* @__PURE__ */ new Set([
    "center",
    "top",
    "right",
    "bottom",
    "left"
  ]);
  function ne(D) {
    let q = 0;
    return (0, a.splitAtTopLevelOnly)(D, "_").every((X) => (X = l(X), X.startsWith("var(") ? !0 : Y.has(X) || v(X) || g(X) ? (q++, !0) : !1)) ? q > 0 : !1;
  }
  function T(D) {
    let q = 0;
    return (0, a.splitAtTopLevelOnly)(D, ",").every((X) => (X = l(X), X.startsWith("var(") ? !0 : X.includes(" ") && !/(['"])([^"']+)\1/g.test(X) || /^\d/g.test(X) ? !1 : (q++, !0))) ? q > 0 : !1;
  }
  let V = /* @__PURE__ */ new Set([
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
  function B(D) {
    return V.has(D);
  }
  let M = /* @__PURE__ */ new Set([
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "x-large",
    "xxx-large"
  ]);
  function W(D) {
    return M.has(D);
  }
  let G = /* @__PURE__ */ new Set([
    "larger",
    "smaller"
  ]);
  function R(D) {
    return G.has(D);
  }
})(ea);
var Ri = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = ea, r = en;
  function n(a) {
    let i = [
      "cover",
      "contain"
    ];
    return (0, r.splitAtTopLevelOnly)(a, ",").every((s) => {
      let o = (0, r.splitAtTopLevelOnly)(s, "_").filter(Boolean);
      return o.length === 1 && i.includes(o[0]) ? !0 : o.length !== 1 && o.length !== 2 ? !1 : o.every((u) => (0, t.length)(u) || (0, t.percentage)(u) || u === "auto");
    });
  }
})(Ri);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(T, V) {
    for (var B in V)
      Object.defineProperty(T, B, {
        enumerable: !0,
        get: V[B]
      });
  }
  t(e, {
    updateAllClasses: function() {
      return l;
    },
    asValue: function() {
      return g;
    },
    parseColorFormat: function() {
      return v;
    },
    asColor: function() {
      return m;
    },
    asLookupValue: function() {
      return _;
    },
    typeMap: function() {
      return x;
    },
    coerceValue: function() {
      return Y;
    },
    getMatchingTypes: function() {
      return ne;
    }
  });
  const r = /* @__PURE__ */ u(Li), n = Jn, a = ea, i = /* @__PURE__ */ u(Xn), s = Ri, o = Qr;
  function u(T) {
    return T && T.__esModule ? T : {
      default: T
    };
  }
  function l(T, V) {
    T.walkClasses((B) => {
      B.value = V(B.value), B.raws && B.raws.value && (B.raws.value = (0, r.default)(B.raws.value));
    });
  }
  function p(T, V) {
    if (!S(T))
      return;
    let B = T.slice(1, -1);
    if (V(B))
      return (0, a.normalize)(B);
  }
  function y(T, V = {}, B) {
    let M = V[T];
    if (M !== void 0)
      return (0, i.default)(M);
    if (S(T)) {
      let W = p(T, B);
      return W === void 0 ? void 0 : (0, i.default)(W);
    }
  }
  function g(T, V = {}, { validate: B = () => !0 } = {}) {
    var M;
    let W = (M = V.values) === null || M === void 0 ? void 0 : M[T];
    return W !== void 0 ? W : V.supportsNegativeValues && T.startsWith("-") ? y(T.slice(1), V.values, B) : p(T, B);
  }
  function S(T) {
    return T.startsWith("[") && T.endsWith("]");
  }
  function f(T) {
    let V = T.lastIndexOf("/");
    return V === -1 || V === T.length - 1 ? [
      T,
      void 0
    ] : S(T) && !T.includes("]/[") ? [
      T,
      void 0
    ] : [
      T.slice(0, V),
      T.slice(V + 1)
    ];
  }
  function v(T) {
    if (typeof T == "string" && T.includes("<alpha-value>")) {
      let V = T;
      return ({ opacityValue: B = 1 }) => V.replace("<alpha-value>", B);
    }
    return T;
  }
  function d(T) {
    return (0, a.normalize)(T.slice(1, -1));
  }
  function m(T, V = {}, { tailwindConfig: B = {} } = {}) {
    var M;
    if (((M = V.values) === null || M === void 0 ? void 0 : M[T]) !== void 0) {
      var W;
      return v((W = V.values) === null || W === void 0 ? void 0 : W[T]);
    }
    let [G, R] = f(T);
    if (R !== void 0) {
      var D, q, $, X;
      let Ce = (X = (D = V.values) === null || D === void 0 ? void 0 : D[G]) !== null && X !== void 0 ? X : S(G) ? G.slice(1, -1) : void 0;
      return Ce === void 0 ? void 0 : (Ce = v(Ce), S(R) ? (0, n.withAlphaValue)(Ce, d(R)) : ((q = B.theme) === null || q === void 0 || ($ = q.opacity) === null || $ === void 0 ? void 0 : $[R]) === void 0 ? void 0 : (0, n.withAlphaValue)(Ce, B.theme.opacity[R]));
    }
    return g(T, V, {
      validate: a.color
    });
  }
  function _(T, V = {}) {
    var B;
    return (B = V.values) === null || B === void 0 ? void 0 : B[T];
  }
  function E(T) {
    return (V, B) => g(V, B, {
      validate: T
    });
  }
  let x = {
    any: g,
    color: m,
    url: E(a.url),
    image: E(a.image),
    length: E(a.length),
    percentage: E(a.percentage),
    position: E(a.position),
    lookup: _,
    "generic-name": E(a.genericName),
    "family-name": E(a.familyName),
    number: E(a.number),
    "line-width": E(a.lineWidth),
    "absolute-size": E(a.absoluteSize),
    "relative-size": E(a.relativeSize),
    shadow: E(a.shadow),
    size: E(s.backgroundSize)
  }, w = Object.keys(x);
  function L(T, V) {
    let B = T.indexOf(V);
    return B === -1 ? [
      void 0,
      T
    ] : [
      T.slice(0, B),
      T.slice(B + 1)
    ];
  }
  function Y(T, V, B, M) {
    if (B.values && V in B.values)
      for (let { type: G } of T ?? []) {
        let R = x[G](V, B, {
          tailwindConfig: M
        });
        if (R !== void 0)
          return [
            R,
            G,
            null
          ];
      }
    if (S(V)) {
      let G = V.slice(1, -1), [R, D] = L(G, ":");
      if (!/^[\w-_]+$/g.test(R))
        D = G;
      else if (R !== void 0 && !w.includes(R))
        return [];
      if (D.length > 0 && w.includes(R))
        return [
          g(`[${D}]`, B),
          R,
          null
        ];
    }
    let W = ne(T, V, B, M);
    for (let G of W)
      return G;
    return [];
  }
  function* ne(T, V, B, M) {
    let W = (0, o.flagEnabled)(M, "generalizedModifiers"), [G, R] = f(V);
    if (W && B.modifiers != null && (B.modifiers === "any" || typeof B.modifiers == "object" && (R && S(R) || R in B.modifiers)) || (G = V, R = void 0), R !== void 0 && G === "" && (G = "DEFAULT"), R !== void 0 && typeof B.modifiers == "object") {
      var q, $;
      let X = ($ = (q = B.modifiers) === null || q === void 0 ? void 0 : q[R]) !== null && $ !== void 0 ? $ : null;
      X !== null ? R = X : S(R) && (R = d(R));
    }
    for (let { type: X } of T ?? []) {
      let Ce = x[X](G, B, {
        tailwindConfig: M
      });
      Ce !== void 0 && (yield [
        Ce,
        X,
        R ?? null
      ]);
    }
  }
})(Mi);
var Fi = {};
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
})(Fi);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return B;
    }
  });
  const t = /* @__PURE__ */ S(Xn), r = /* @__PURE__ */ S(xi), n = /* @__PURE__ */ S(wi), a = /* @__PURE__ */ S(Si), i = Ci, s = Di, o = Ti, u = /* @__PURE__ */ S(Ni), l = Ii, p = Mi, y = Jn, g = /* @__PURE__ */ S(Fi);
  function S(M) {
    return M && M.__esModule ? M : {
      default: M
    };
  }
  function f(M) {
    return typeof M == "function";
  }
  function v(M, ...W) {
    let G = W.pop();
    for (let R of W)
      for (let D in R) {
        let q = G(M[D], R[D]);
        q === void 0 ? (0, u.default)(M[D]) && (0, u.default)(R[D]) ? M[D] = v({}, M[D], R[D], G) : M[D] = R[D] : M[D] = q;
      }
    return M;
  }
  const d = {
    colors: a.default,
    negative(M) {
      return Object.keys(M).filter((W) => M[W] !== "0").reduce((W, G) => {
        let R = (0, t.default)(M[G]);
        return R !== void 0 && (W[`-${G}`] = R), W;
      }, {});
    },
    breakpoints(M) {
      return Object.keys(M).filter((W) => typeof M[W] == "string").reduce((W, G) => ({
        ...W,
        [`screen-${G}`]: M[G]
      }), {});
    }
  };
  function m(M, ...W) {
    return f(M) ? M(...W) : M;
  }
  function _(M) {
    return M.reduce((W, { extend: G }) => v(W, G, (R, D) => R === void 0 ? [
      D
    ] : Array.isArray(R) ? [
      D,
      ...R
    ] : [
      D,
      R
    ]), {});
  }
  function E(M) {
    return {
      ...M.reduce((W, G) => (0, i.defaults)(W, G), {}),
      // In order to resolve n config objects, we combine all of their `extend` properties
      // into arrays instead of objects so they aren't overridden.
      extend: _(M)
    };
  }
  function x(M, W) {
    if (Array.isArray(M) && (0, u.default)(M[0]))
      return M.concat(W);
    if (Array.isArray(W) && (0, u.default)(W[0]) && (0, u.default)(M))
      return [
        M,
        ...W
      ];
    if (Array.isArray(W))
      return W;
  }
  function w({ extend: M, ...W }) {
    return v(W, M, (G, R) => !f(G) && !R.some(f) ? v({}, G, ...R, x) : (D, q) => v({}, ...[
      G,
      ...R
    ].map(($) => m($, D, q)), x));
  }
  function* L(M) {
    let W = (0, s.toPath)(M);
    if (W.length === 0 || (yield W, Array.isArray(M)))
      return;
    let G = /^(.*?)\s*\/\s*([^/]+)$/, R = M.match(G);
    if (R !== null) {
      let [, D, q] = R, $ = (0, s.toPath)(D);
      $.alpha = q, yield $;
    }
  }
  function Y(M) {
    const W = (G, R) => {
      for (const D of L(G)) {
        let q = 0, $ = M;
        for (; $ != null && q < D.length; )
          $ = $[D[q++]], $ = f($) && (D.alpha === void 0 || q <= D.length - 1) ? $(W, d) : $;
        if ($ !== void 0) {
          if (D.alpha !== void 0) {
            let X = (0, p.parseColorFormat)($);
            return (0, y.withAlphaValue)(X, D.alpha, (0, g.default)(X));
          }
          return (0, u.default)($) ? (0, l.cloneDeep)($) : $;
        }
      }
      return R;
    };
    return Object.assign(W, {
      theme: W,
      ...d
    }), Object.keys(M).reduce((G, R) => (G[R] = f(M[R]) ? M[R](W, d) : M[R], G), {});
  }
  function ne(M) {
    let W = [];
    return M.forEach((G) => {
      W = [
        ...W,
        G
      ];
      var R;
      const D = (R = G == null ? void 0 : G.plugins) !== null && R !== void 0 ? R : [];
      D.length !== 0 && D.forEach((q) => {
        q.__isOptionsFunction && (q = q());
        var $;
        W = [
          ...W,
          ...ne([
            ($ = q == null ? void 0 : q.config) !== null && $ !== void 0 ? $ : {}
          ])
        ];
      });
    }), W;
  }
  function T(M) {
    return [
      ...M
    ].reduceRight((G, R) => f(R) ? R({
      corePlugins: G
    }) : (0, n.default)(R, G), r.default);
  }
  function V(M) {
    return [
      ...M
    ].reduceRight((G, R) => [
      ...G,
      ...R
    ], []);
  }
  function B(M) {
    let W = [
      ...ne(M),
      {
        prefix: "",
        important: !1,
        separator: ":"
      }
    ];
    var G, R;
    return (0, o.normalizeConfig)((0, i.defaults)({
      theme: Y(w(E(W.map((D) => (G = D == null ? void 0 : D.theme) !== null && G !== void 0 ? G : {})))),
      corePlugins: T(W.map((D) => D.corePlugins)),
      plugins: V(M.map((D) => (R = D == null ? void 0 : D.plugins) !== null && R !== void 0 ? R : []))
    }, ...W));
  }
})(ki);
var Yi = {}, Fl = {
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
      return a;
    }
  });
  const t = /* @__PURE__ */ n(Fl), r = Qr;
  function n(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function a(i) {
    var s;
    const o = ((s = i == null ? void 0 : i.presets) !== null && s !== void 0 ? s : [
      t.default
    ]).slice().reverse().flatMap((p) => a(p instanceof Function ? p() : p)), u = {
      // Add experimental configs here...
      respectDefaultRingColorOpacity: {
        theme: {
          ringColor: ({ theme: p }) => ({
            DEFAULT: "#3b82f67f",
            ...p("colors")
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
    }, l = Object.keys(u).filter((p) => (0, r.flagEnabled)(i, p)).map((p) => u[p]);
    return [
      i,
      ...l,
      ...o
    ];
  }
})(Yi);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(ki), r = /* @__PURE__ */ n(Yi);
  function n(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function a(...i) {
    let [, ...s] = (0, r.default)(i[0]);
    return (0, t.default)([
      ...i,
      ...s
    ]);
  }
})(vi);
let On = vi;
var Yl = (On.__esModule ? On : { default: On }).default;
const Wi = /* @__PURE__ */ _i(Yl), Ma = require("tailwindcss/defaultTheme"), La = require("tailwindcss/plugin"), Ot = require("tailwindcss/colors"), Ui = {
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
        sans: ["Roboto", ...Ma.fontFamily.sans],
        mono: ["Roboto Mono", ...Ma.fontFamily.mono]
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
        box: `0px 1px 4px ${Ot.gray[800]}1A, 0px 4px 8px ${Ot.gray[800]}33`,
        "box-dark": `0px 1px 4px ${Ot.gray[900]}, 0px 4px 8px ${Ot.gray[900]}`,
        card: `0px 2px 4px ${Ot.gray[800]}1A, 0px 4px 12px ${Ot.gray[800]}40`,
        "card-dark": "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 4px 12px rgba(0, 0, 0, 0.5)",
        "gray-200-border-b-full": `0 1px 0 0  ${Ot.gray[200]}`,
        "gray-700-border-b-full": `0 1px 0 0  ${Ot.gray[700]}`
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
    require("@tailwindcss/typography"),
    /** Add dynamically content to :before and :after pseudo-elements
     * @source: https://github.com/tailwindlabs/tailwindcss/discussions/2119#discussioncomment-200587
     * **/
    La(({ addVariant: e, e: t }) => {
      e("before", ({ modifySelectors: r, separator: n }) => {
        r(({ className: a }) => `.${t(`before${n}${a}`)}::before`);
      }), e("after", ({ modifySelectors: r, separator: n }) => {
        r(({ className: a }) => `.${t(`after${n}${a}`)}::after`);
      });
    }),
    La(({ addUtilities: e }) => {
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
}, gr = Wi(Ui), Wl = {
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
        gray: gr.theme.colors.gray,
        action: gr.theme.colors.action,
        success: gr.theme.colors.success,
        danger: gr.theme.colors.danger,
        warning: gr.theme.colors.warning
      }
    };
  }
}, Ul = { class: "text-xl mb-4 text-gray-900 dark:text-white transition" }, Vl = { class: "grow w-[14ch] font-mono text-xs text-gray-500" };
function Bl(e, t, r, n, a, i) {
  return b(), O("div", {
    class: N(["p-4 xs:p-8 rounded-3xl grid grid-cols-auto-fit gap-4 transition", `bg-${r.bgColor.color} dark:bg-${r.bgColorDark.color}`])
  }, [
    (b(!0), O(ke, null, Fe(a.colors, (s, o) => (b(), O("div", { key: o }, [
      U("h2", Ul, Z(o), 1),
      (b(!0), O(ke, null, Fe(s, (u, l) => (b(), O("div", {
        key: l,
        class: "flex items-center gap-2 mb-3"
      }, [
        U("div", {
          class: N(["flex-auto w-24 h-12 rounded-xl", [
            `bg-${o}-${l}`,
            `${o}-${l}` === r.bgColor.color ? `border border-${r.bgColor.border}` : "",
            `${o}-${l}` === r.bgColorDark.color ? `border border-${r.bgColorDark.border}` : ""
          ]])
        }, null, 2),
        U("div", Vl, Z(l) + " (" + Z(u) + ")", 1)
      ]))), 128))
    ]))), 128))
  ], 2);
}
const fg = /* @__PURE__ */ Me(Wl, [["render", Bl]]);
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const It = typeof window < "u";
let He, Ht;
if (process.env.NODE_ENV !== "production") {
  const e = It && window.performance;
  e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (He = (t) => e.mark(t), Ht = (t, r, n) => {
    e.measure(t, r, n), e.clearMarks(r), e.clearMarks(n);
  });
}
const zl = /\{([0-9a-zA-Z]+)\}/g;
function tn(e, ...t) {
  return t.length === 1 && fe(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(zl, (r, n) => t.hasOwnProperty(n) ? t[n] : "");
}
const Hl = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", vt = (e) => Hl ? Symbol(e) : e, jl = (e, t, r) => Gl({ l: e, k: t, s: r }), Gl = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ne = (e) => typeof e == "number" && isFinite(e), $l = (e) => ra(e) === "[object Date]", rr = (e) => ra(e) === "[object RegExp]", rn = (e) => ie(e) && Object.keys(e).length === 0;
function Tr(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Te = Object.assign;
let Pa;
const vr = () => Pa || (Pa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Aa(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const ql = Object.prototype.hasOwnProperty;
function ta(e, t) {
  return ql.call(e, t);
}
const we = Array.isArray, Oe = (e) => typeof e == "function", j = (e) => typeof e == "string", me = (e) => typeof e == "boolean", fe = (e) => (
  // eslint-disable-line
  e !== null && typeof e == "object"
), Vi = Object.prototype.toString, ra = (e) => Vi.call(e), ie = (e) => ra(e) === "[object Object]", Kl = (e) => e == null ? "" : we(e) || ie(e) && e.toString === Vi ? JSON.stringify(e, null, 2) : String(e), Ra = 2;
function Xl(e, t = 0, r = e.length) {
  const n = e.split(/\r?\n/);
  let a = 0;
  const i = [];
  for (let s = 0; s < n.length; s++)
    if (a += n[s].length + 1, a >= t) {
      for (let o = s - Ra; o <= s + Ra || r > a; o++) {
        if (o < 0 || o >= n.length)
          continue;
        const u = o + 1;
        i.push(`${u}${" ".repeat(3 - String(u).length)}|  ${n[o]}`);
        const l = n[o].length;
        if (o === s) {
          const p = t - (a - l) + 1, y = Math.max(1, r > a ? l - p : r - t);
          i.push("   |  " + " ".repeat(p) + "^".repeat(y));
        } else if (o > s) {
          if (r > a) {
            const p = Math.max(Math.min(r - a, l), 1);
            i.push("   |  " + "^".repeat(p));
          }
          a += l + 1;
        }
      }
      break;
    }
  return i.join(`
`);
}
function Zl() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(r, n) {
      const a = e.get(r);
      a && a.push(n) || e.set(r, [n]);
    },
    off(r, n) {
      const a = e.get(r);
      a && a.splice(a.indexOf(n) >>> 0, 1);
    },
    emit(r, n) {
      (e.get(r) || []).slice().map((a) => a(n)), (e.get("*") || []).slice().map((a) => a(r, n));
    }
  };
}
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const J = {
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
}, Jl = {
  // tokenizer error messages
  [J.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [J.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [J.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [J.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [J.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [J.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [J.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [J.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [J.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [J.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [J.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [J.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [J.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [J.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'"
};
function nn(e, t, r = {}) {
  const { domain: n, messages: a, args: i } = r, s = process.env.NODE_ENV !== "production" ? tn((a || Jl)[e] || "", ...i || []) : e, o = new SyntaxError(String(s));
  return o.code = e, t && (o.location = t), o.domain = n, o;
}
function Ql(e) {
  throw e;
}
function eo(e, t, r) {
  return { line: e, column: t, offset: r };
}
function In(e, t, r) {
  const n = { start: e, end: t };
  return r != null && (n.source = r), n;
}
const ct = " ", to = "\r", Re = `
`, ro = String.fromCharCode(8232), no = String.fromCharCode(8233);
function ao(e) {
  const t = e;
  let r = 0, n = 1, a = 1, i = 0;
  const s = (Y) => t[Y] === to && t[Y + 1] === Re, o = (Y) => t[Y] === Re, u = (Y) => t[Y] === no, l = (Y) => t[Y] === ro, p = (Y) => s(Y) || o(Y) || u(Y) || l(Y), y = () => r, g = () => n, S = () => a, f = () => i, v = (Y) => s(Y) || u(Y) || l(Y) ? Re : t[Y], d = () => v(r), m = () => v(r + i);
  function _() {
    return i = 0, p(r) && (n++, a = 0), s(r) && r++, r++, a++, t[r];
  }
  function E() {
    return s(r + i) && i++, i++, t[r + i];
  }
  function x() {
    r = 0, n = 1, a = 1, i = 0;
  }
  function w(Y = 0) {
    i = Y;
  }
  function L() {
    const Y = r + i;
    for (; Y !== r; )
      _();
    i = 0;
  }
  return {
    index: y,
    line: g,
    column: S,
    peekOffset: f,
    charAt: v,
    currentChar: d,
    currentPeek: m,
    next: _,
    peek: E,
    reset: x,
    resetPeek: w,
    skipToPeek: L
  };
}
const Et = void 0, Fa = "'", io = "tokenizer";
function so(e, t = {}) {
  const r = t.location !== !1, n = ao(e), a = () => n.index(), i = () => eo(n.line(), n.column(), n.index()), s = i(), o = a(), u = {
    currentType: 14,
    offset: o,
    startLoc: s,
    endLoc: s,
    lastType: 14,
    lastOffset: o,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, l = () => u, { onError: p } = t;
  function y(h, c, k, ...z) {
    const Q = l();
    if (c.column += k, c.offset += k, p) {
      const ce = In(Q.startLoc, c), et = nn(h, ce, {
        domain: io,
        args: z
      });
      p(et);
    }
  }
  function g(h, c, k) {
    h.endLoc = i(), h.currentType = c;
    const z = { type: c };
    return r && (z.loc = In(h.startLoc, h.endLoc)), k != null && (z.value = k), z;
  }
  const S = (h) => g(
    h,
    14
    /* EOF */
  );
  function f(h, c) {
    return h.currentChar() === c ? (h.next(), c) : (y(J.EXPECTED_TOKEN, i(), 0, c), "");
  }
  function v(h) {
    let c = "";
    for (; h.currentPeek() === ct || h.currentPeek() === Re; )
      c += h.currentPeek(), h.peek();
    return c;
  }
  function d(h) {
    const c = v(h);
    return h.skipToPeek(), c;
  }
  function m(h) {
    if (h === Et)
      return !1;
    const c = h.charCodeAt(0);
    return c >= 97 && c <= 122 || // a-z
    c >= 65 && c <= 90 || // A-Z
    c === 95;
  }
  function _(h) {
    if (h === Et)
      return !1;
    const c = h.charCodeAt(0);
    return c >= 48 && c <= 57;
  }
  function E(h, c) {
    const { currentType: k } = c;
    if (k !== 2)
      return !1;
    v(h);
    const z = m(h.currentPeek());
    return h.resetPeek(), z;
  }
  function x(h, c) {
    const { currentType: k } = c;
    if (k !== 2)
      return !1;
    v(h);
    const z = h.currentPeek() === "-" ? h.peek() : h.currentPeek(), Q = _(z);
    return h.resetPeek(), Q;
  }
  function w(h, c) {
    const { currentType: k } = c;
    if (k !== 2)
      return !1;
    v(h);
    const z = h.currentPeek() === Fa;
    return h.resetPeek(), z;
  }
  function L(h, c) {
    const { currentType: k } = c;
    if (k !== 8)
      return !1;
    v(h);
    const z = h.currentPeek() === ".";
    return h.resetPeek(), z;
  }
  function Y(h, c) {
    const { currentType: k } = c;
    if (k !== 9)
      return !1;
    v(h);
    const z = m(h.currentPeek());
    return h.resetPeek(), z;
  }
  function ne(h, c) {
    const { currentType: k } = c;
    if (!(k === 8 || k === 12))
      return !1;
    v(h);
    const z = h.currentPeek() === ":";
    return h.resetPeek(), z;
  }
  function T(h, c) {
    const { currentType: k } = c;
    if (k !== 10)
      return !1;
    const z = () => {
      const ce = h.currentPeek();
      return ce === "{" ? m(h.peek()) : ce === "@" || ce === "%" || ce === "|" || ce === ":" || ce === "." || ce === ct || !ce ? !1 : ce === Re ? (h.peek(), z()) : m(ce);
    }, Q = z();
    return h.resetPeek(), Q;
  }
  function V(h) {
    v(h);
    const c = h.currentPeek() === "|";
    return h.resetPeek(), c;
  }
  function B(h) {
    const c = v(h), k = h.currentPeek() === "%" && h.peek() === "{";
    return h.resetPeek(), {
      isModulo: k,
      hasSpace: c.length > 0
    };
  }
  function M(h, c = !0) {
    const k = (Q = !1, ce = "", et = !1) => {
      const ut = h.currentPeek();
      return ut === "{" ? ce === "%" ? !1 : Q : ut === "@" || !ut ? ce === "%" ? !0 : Q : ut === "%" ? (h.peek(), k(Q, "%", !0)) : ut === "|" ? ce === "%" || et ? !0 : !(ce === ct || ce === Re) : ut === ct ? (h.peek(), k(!0, ct, et)) : ut === Re ? (h.peek(), k(!0, Re, et)) : !0;
    }, z = k();
    return c && h.resetPeek(), z;
  }
  function W(h, c) {
    const k = h.currentChar();
    return k === Et ? Et : c(k) ? (h.next(), k) : null;
  }
  function G(h) {
    return W(h, (k) => {
      const z = k.charCodeAt(0);
      return z >= 97 && z <= 122 || // a-z
      z >= 65 && z <= 90 || // A-Z
      z >= 48 && z <= 57 || // 0-9
      z === 95 || // _
      z === 36;
    });
  }
  function R(h) {
    return W(h, (k) => {
      const z = k.charCodeAt(0);
      return z >= 48 && z <= 57;
    });
  }
  function D(h) {
    return W(h, (k) => {
      const z = k.charCodeAt(0);
      return z >= 48 && z <= 57 || // 0-9
      z >= 65 && z <= 70 || // A-F
      z >= 97 && z <= 102;
    });
  }
  function q(h) {
    let c = "", k = "";
    for (; c = R(h); )
      k += c;
    return k;
  }
  function $(h) {
    d(h);
    const c = h.currentChar();
    return c !== "%" && y(J.EXPECTED_TOKEN, i(), 0, c), h.next(), "%";
  }
  function X(h) {
    let c = "";
    for (; ; ) {
      const k = h.currentChar();
      if (k === "{" || k === "}" || k === "@" || k === "|" || !k)
        break;
      if (k === "%")
        if (M(h))
          c += k, h.next();
        else
          break;
      else if (k === ct || k === Re)
        if (M(h))
          c += k, h.next();
        else {
          if (V(h))
            break;
          c += k, h.next();
        }
      else
        c += k, h.next();
    }
    return c;
  }
  function Ce(h) {
    d(h);
    let c = "", k = "";
    for (; c = G(h); )
      k += c;
    return h.currentChar() === Et && y(J.UNTERMINATED_CLOSING_BRACE, i(), 0), k;
  }
  function wt(h) {
    d(h);
    let c = "";
    return h.currentChar() === "-" ? (h.next(), c += `-${q(h)}`) : c += q(h), h.currentChar() === Et && y(J.UNTERMINATED_CLOSING_BRACE, i(), 0), c;
  }
  function or(h) {
    d(h), f(h, "'");
    let c = "", k = "";
    const z = (ce) => ce !== Fa && ce !== Re;
    for (; c = W(h, z); )
      c === "\\" ? k += ur(h) : k += c;
    const Q = h.currentChar();
    return Q === Re || Q === Et ? (y(J.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), Q === Re && (h.next(), f(h, "'")), k) : (f(h, "'"), k);
  }
  function ur(h) {
    const c = h.currentChar();
    switch (c) {
      case "\\":
      case "'":
        return h.next(), `\\${c}`;
      case "u":
        return cr(h, c, 4);
      case "U":
        return cr(h, c, 6);
      default:
        return y(J.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, c), "";
    }
  }
  function cr(h, c, k) {
    f(h, c);
    let z = "";
    for (let Q = 0; Q < k; Q++) {
      const ce = D(h);
      if (!ce) {
        y(J.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${c}${z}${h.currentChar()}`);
        break;
      }
      z += ce;
    }
    return `\\${c}${z}`;
  }
  function dr(h) {
    d(h);
    let c = "", k = "";
    const z = (Q) => Q !== "{" && Q !== "}" && Q !== ct && Q !== Re;
    for (; c = W(h, z); )
      k += c;
    return k;
  }
  function fr(h) {
    let c = "", k = "";
    for (; c = G(h); )
      k += c;
    return k;
  }
  function hr(h) {
    const c = (k = !1, z) => {
      const Q = h.currentChar();
      return Q === "{" || Q === "%" || Q === "@" || Q === "|" || !Q || Q === ct ? z : Q === Re ? (z += Q, h.next(), c(k, z)) : (z += Q, h.next(), c(!0, z));
    };
    return c(!1, "");
  }
  function At(h) {
    d(h);
    const c = f(
      h,
      "|"
      /* Pipe */
    );
    return d(h), c;
  }
  function Rt(h, c) {
    let k = null;
    switch (h.currentChar()) {
      case "{":
        return c.braceNest >= 1 && y(J.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), h.next(), k = g(
          c,
          2,
          "{"
          /* BraceLeft */
        ), d(h), c.braceNest++, k;
      case "}":
        return c.braceNest > 0 && c.currentType === 2 && y(J.EMPTY_PLACEHOLDER, i(), 0), h.next(), k = g(
          c,
          3,
          "}"
          /* BraceRight */
        ), c.braceNest--, c.braceNest > 0 && d(h), c.inLinked && c.braceNest === 0 && (c.inLinked = !1), k;
      case "@":
        return c.braceNest > 0 && y(J.UNTERMINATED_CLOSING_BRACE, i(), 0), k = St(h, c) || S(c), c.braceNest = 0, k;
      default:
        let Q = !0, ce = !0, et = !0;
        if (V(h))
          return c.braceNest > 0 && y(J.UNTERMINATED_CLOSING_BRACE, i(), 0), k = g(c, 1, At(h)), c.braceNest = 0, c.inLinked = !1, k;
        if (c.braceNest > 0 && (c.currentType === 5 || c.currentType === 6 || c.currentType === 7))
          return y(J.UNTERMINATED_CLOSING_BRACE, i(), 0), c.braceNest = 0, Ft(h, c);
        if (Q = E(h, c))
          return k = g(c, 5, Ce(h)), d(h), k;
        if (ce = x(h, c))
          return k = g(c, 6, wt(h)), d(h), k;
        if (et = w(h, c))
          return k = g(c, 7, or(h)), d(h), k;
        if (!Q && !ce && !et)
          return k = g(c, 13, dr(h)), y(J.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, k.value), d(h), k;
        break;
    }
    return k;
  }
  function St(h, c) {
    const { currentType: k } = c;
    let z = null;
    const Q = h.currentChar();
    switch ((k === 8 || k === 9 || k === 12 || k === 10) && (Q === Re || Q === ct) && y(J.INVALID_LINKED_FORMAT, i(), 0), Q) {
      case "@":
        return h.next(), z = g(
          c,
          8,
          "@"
          /* LinkedAlias */
        ), c.inLinked = !0, z;
      case ".":
        return d(h), h.next(), g(
          c,
          9,
          "."
          /* LinkedDot */
        );
      case ":":
        return d(h), h.next(), g(
          c,
          10,
          ":"
          /* LinkedDelimiter */
        );
      default:
        return V(h) ? (z = g(c, 1, At(h)), c.braceNest = 0, c.inLinked = !1, z) : L(h, c) || ne(h, c) ? (d(h), St(h, c)) : Y(h, c) ? (d(h), g(c, 12, fr(h))) : T(h, c) ? (d(h), Q === "{" ? Rt(h, c) || z : g(c, 11, hr(h))) : (k === 8 && y(J.INVALID_LINKED_FORMAT, i(), 0), c.braceNest = 0, c.inLinked = !1, Ft(h, c));
    }
  }
  function Ft(h, c) {
    let k = {
      type: 14
      /* EOF */
    };
    if (c.braceNest > 0)
      return Rt(h, c) || S(c);
    if (c.inLinked)
      return St(h, c) || S(c);
    switch (h.currentChar()) {
      case "{":
        return Rt(h, c) || S(c);
      case "}":
        return y(J.UNBALANCED_CLOSING_BRACE, i(), 0), h.next(), g(
          c,
          3,
          "}"
          /* BraceRight */
        );
      case "@":
        return St(h, c) || S(c);
      default:
        if (V(h))
          return k = g(c, 1, At(h)), c.braceNest = 0, c.inLinked = !1, k;
        const { isModulo: Q, hasSpace: ce } = B(h);
        if (Q)
          return ce ? g(c, 0, X(h)) : g(c, 4, $(h));
        if (M(h))
          return g(c, 0, X(h));
        break;
    }
    return k;
  }
  function mr() {
    const { currentType: h, offset: c, startLoc: k, endLoc: z } = u;
    return u.lastType = h, u.lastOffset = c, u.lastStartLoc = k, u.lastEndLoc = z, u.offset = a(), u.startLoc = i(), n.currentChar() === Et ? g(
      u,
      14
      /* EOF */
    ) : Ft(n, u);
  }
  return {
    nextToken: mr,
    currentOffset: a,
    currentPosition: i,
    context: l
  };
}
const lo = "parser", oo = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function uo(e, t, r) {
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
function co(e = {}) {
  const t = e.location !== !1, { onError: r } = e;
  function n(m, _, E, x, ...w) {
    const L = m.currentPosition();
    if (L.offset += x, L.column += x, r) {
      const Y = In(E, L), ne = nn(_, Y, {
        domain: lo,
        args: w
      });
      r(ne);
    }
  }
  function a(m, _, E) {
    const x = {
      type: m,
      start: _,
      end: _
    };
    return t && (x.loc = { start: E, end: E }), x;
  }
  function i(m, _, E, x) {
    m.end = _, x && (m.type = x), t && m.loc && (m.loc.end = E);
  }
  function s(m, _) {
    const E = m.context(), x = a(3, E.offset, E.startLoc);
    return x.value = _, i(x, m.currentOffset(), m.currentPosition()), x;
  }
  function o(m, _) {
    const E = m.context(), { lastOffset: x, lastStartLoc: w } = E, L = a(5, x, w);
    return L.index = parseInt(_, 10), m.nextToken(), i(L, m.currentOffset(), m.currentPosition()), L;
  }
  function u(m, _) {
    const E = m.context(), { lastOffset: x, lastStartLoc: w } = E, L = a(4, x, w);
    return L.key = _, m.nextToken(), i(L, m.currentOffset(), m.currentPosition()), L;
  }
  function l(m, _) {
    const E = m.context(), { lastOffset: x, lastStartLoc: w } = E, L = a(9, x, w);
    return L.value = _.replace(oo, uo), m.nextToken(), i(L, m.currentOffset(), m.currentPosition()), L;
  }
  function p(m) {
    const _ = m.nextToken(), E = m.context(), { lastOffset: x, lastStartLoc: w } = E, L = a(8, x, w);
    return _.type !== 12 ? (n(m, J.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0), L.value = "", i(L, x, w), {
      nextConsumeToken: _,
      node: L
    }) : (_.value == null && n(m, J.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, tt(_)), L.value = _.value || "", i(L, m.currentOffset(), m.currentPosition()), {
      node: L
    });
  }
  function y(m, _) {
    const E = m.context(), x = a(7, E.offset, E.startLoc);
    return x.value = _, i(x, m.currentOffset(), m.currentPosition()), x;
  }
  function g(m) {
    const _ = m.context(), E = a(6, _.offset, _.startLoc);
    let x = m.nextToken();
    if (x.type === 9) {
      const w = p(m);
      E.modifier = w.node, x = w.nextConsumeToken || m.nextToken();
    }
    switch (x.type !== 10 && n(m, J.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, tt(x)), x = m.nextToken(), x.type === 2 && (x = m.nextToken()), x.type) {
      case 11:
        x.value == null && n(m, J.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, tt(x)), E.key = y(m, x.value || "");
        break;
      case 5:
        x.value == null && n(m, J.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, tt(x)), E.key = u(m, x.value || "");
        break;
      case 6:
        x.value == null && n(m, J.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, tt(x)), E.key = o(m, x.value || "");
        break;
      case 7:
        x.value == null && n(m, J.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, tt(x)), E.key = l(m, x.value || "");
        break;
      default:
        n(m, J.UNEXPECTED_EMPTY_LINKED_KEY, _.lastStartLoc, 0);
        const w = m.context(), L = a(7, w.offset, w.startLoc);
        return L.value = "", i(L, w.offset, w.startLoc), E.key = L, i(E, w.offset, w.startLoc), {
          nextConsumeToken: x,
          node: E
        };
    }
    return i(E, m.currentOffset(), m.currentPosition()), {
      node: E
    };
  }
  function S(m) {
    const _ = m.context(), E = _.currentType === 1 ? m.currentOffset() : _.offset, x = _.currentType === 1 ? _.endLoc : _.startLoc, w = a(2, E, x);
    w.items = [];
    let L = null;
    do {
      const T = L || m.nextToken();
      switch (L = null, T.type) {
        case 0:
          T.value == null && n(m, J.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, tt(T)), w.items.push(s(m, T.value || ""));
          break;
        case 6:
          T.value == null && n(m, J.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, tt(T)), w.items.push(o(m, T.value || ""));
          break;
        case 5:
          T.value == null && n(m, J.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, tt(T)), w.items.push(u(m, T.value || ""));
          break;
        case 7:
          T.value == null && n(m, J.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, tt(T)), w.items.push(l(m, T.value || ""));
          break;
        case 8:
          const V = g(m);
          w.items.push(V.node), L = V.nextConsumeToken || null;
          break;
      }
    } while (_.currentType !== 14 && _.currentType !== 1);
    const Y = _.currentType === 1 ? _.lastOffset : m.currentOffset(), ne = _.currentType === 1 ? _.lastEndLoc : m.currentPosition();
    return i(w, Y, ne), w;
  }
  function f(m, _, E, x) {
    const w = m.context();
    let L = x.items.length === 0;
    const Y = a(1, _, E);
    Y.cases = [], Y.cases.push(x);
    do {
      const ne = S(m);
      L || (L = ne.items.length === 0), Y.cases.push(ne);
    } while (w.currentType !== 14);
    return L && n(m, J.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0), i(Y, m.currentOffset(), m.currentPosition()), Y;
  }
  function v(m) {
    const _ = m.context(), { offset: E, startLoc: x } = _, w = S(m);
    return _.currentType === 14 ? w : f(m, E, x, w);
  }
  function d(m) {
    const _ = so(m, Te({}, e)), E = _.context(), x = a(0, E.offset, E.startLoc);
    return t && x.loc && (x.loc.source = m), x.body = v(_), E.currentType !== 14 && n(_, J.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, m[E.offset] || ""), i(x, _.currentOffset(), _.currentPosition()), x;
  }
  return { parse: d };
}
function tt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function fo(e, t = {}) {
  const r = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => r, helper: (i) => (r.helpers.add(i), i) };
}
function Ya(e, t) {
  for (let r = 0; r < e.length; r++)
    na(e[r], t);
}
function na(e, t) {
  switch (e.type) {
    case 1:
      Ya(e.cases, t), t.helper(
        "plural"
        /* PLURAL */
      );
      break;
    case 2:
      Ya(e.items, t);
      break;
    case 6:
      na(e.key, t), t.helper(
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
function ho(e, t = {}) {
  const r = fo(e);
  r.helper(
    "normalize"
    /* NORMALIZE */
  ), e.body && na(e.body, r);
  const n = r.context();
  e.helpers = Array.from(n.helpers);
}
function mo(e, t) {
  const { sourceMap: r, filename: n, breakLineCode: a, needIndent: i } = t, s = {
    source: e.loc.source,
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: a,
    needIndent: i,
    indentLevel: 0
  }, o = () => s;
  function u(v, d) {
    s.code += v;
  }
  function l(v, d = !0) {
    const m = d ? a : "";
    u(i ? m + "  ".repeat(v) : m);
  }
  function p(v = !0) {
    const d = ++s.indentLevel;
    v && l(d);
  }
  function y(v = !0) {
    const d = --s.indentLevel;
    v && l(d);
  }
  function g() {
    l(s.indentLevel);
  }
  return {
    context: o,
    push: u,
    indent: p,
    deindent: y,
    newline: g,
    helper: (v) => `_${v}`,
    needIndent: () => s.needIndent
  };
}
function go(e, t) {
  const { helper: r } = e;
  e.push(`${r(
    "linked"
    /* LINKED */
  )}(`), nr(e, t.key), t.modifier ? (e.push(", "), nr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function po(e, t) {
  const { helper: r, needIndent: n } = e;
  e.push(`${r(
    "normalize"
    /* NORMALIZE */
  )}([`), e.indent(n());
  const a = t.items.length;
  for (let i = 0; i < a && (nr(e, t.items[i]), i !== a - 1); i++)
    e.push(", ");
  e.deindent(n()), e.push("])");
}
function yo(e, t) {
  const { helper: r, needIndent: n } = e;
  if (t.cases.length > 1) {
    e.push(`${r(
      "plural"
      /* PLURAL */
    )}([`), e.indent(n());
    const a = t.cases.length;
    for (let i = 0; i < a && (nr(e, t.cases[i]), i !== a - 1); i++)
      e.push(", ");
    e.deindent(n()), e.push("])");
  }
}
function bo(e, t) {
  t.body ? nr(e, t.body) : e.push("null");
}
function nr(e, t) {
  const { helper: r } = e;
  switch (t.type) {
    case 0:
      bo(e, t);
      break;
    case 1:
      yo(e, t);
      break;
    case 2:
      po(e, t);
      break;
    case 6:
      go(e, t);
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
const _o = (e, t = {}) => {
  const r = j(t.mode) ? t.mode : "normal", n = j(t.filename) ? t.filename : "message.intl", a = !!t.sourceMap, i = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : r !== "arrow", o = e.helpers || [], u = mo(e, {
    mode: r,
    filename: n,
    sourceMap: a,
    breakLineCode: i,
    needIndent: s
  });
  u.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), u.indent(s), o.length > 0 && (u.push(`const { ${o.map((y) => `${y}: _${y}`).join(", ")} } = ctx`), u.newline()), u.push("return "), nr(u, e), u.deindent(s), u.push("}");
  const { code: l, map: p } = u.context();
  return {
    ast: e,
    code: l,
    map: p ? p.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function vo(e, t = {}) {
  const r = Te({}, t), a = co(r).parse(e);
  return ho(a, r), _o(a, r);
}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Bi = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Lt = [];
Lt[
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
Lt[
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
Lt[
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
Lt[
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
Lt[
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
Lt[
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
Lt[
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
const ko = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function xo(e) {
  return ko.test(e);
}
function wo(e) {
  const t = e.charCodeAt(0), r = e.charCodeAt(e.length - 1);
  return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function So(e) {
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
function Oo(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : xo(t) ? wo(t) : "*" + t;
}
function Eo(e) {
  const t = [];
  let r = -1, n = 0, a = 0, i, s, o, u, l, p, y;
  const g = [];
  g[
    0
    /* APPEND */
  ] = () => {
    s === void 0 ? s = o : s += o;
  }, g[
    1
    /* PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, g[
    2
    /* INC_SUB_PATH_DEPTH */
  ] = () => {
    g[
      0
      /* APPEND */
    ](), a++;
  }, g[
    3
    /* PUSH_SUB_PATH */
  ] = () => {
    if (a > 0)
      a--, n = 4, g[
        0
        /* APPEND */
      ]();
    else {
      if (a = 0, s === void 0 || (s = Oo(s), s === !1))
        return !1;
      g[
        1
        /* PUSH */
      ]();
    }
  };
  function S() {
    const f = e[r + 1];
    if (n === 5 && f === "'" || n === 6 && f === '"')
      return r++, o = "\\" + f, g[
        0
        /* APPEND */
      ](), !0;
  }
  for (; n !== null; )
    if (r++, i = e[r], !(i === "\\" && S())) {
      if (u = So(i), y = Lt[n], l = y[u] || y.l || 8, l === 8 || (n = l[0], l[1] !== void 0 && (p = g[l[1]], p && (o = i, p() === !1))))
        return;
      if (n === 7)
        return t;
    }
}
const Wa = /* @__PURE__ */ new Map();
function Co(e, t) {
  return fe(e) ? e[t] : null;
}
function Do(e, t) {
  if (!fe(e))
    return null;
  let r = Wa.get(t);
  if (r || (r = Eo(t), r && Wa.set(t, r)), !r)
    return null;
  const n = r.length;
  let a = e, i = 0;
  for (; i < n; ) {
    const s = a[r[i]];
    if (s === void 0)
      return null;
    a = s, i++;
  }
  return a;
}
const To = (e) => e, No = (e) => "", Io = "text", Mo = (e) => e.length === 0 ? "" : e.join(""), Lo = Kl;
function Ua(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Po(e) {
  const t = Ne(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ne(e.named.count) || Ne(e.named.n)) ? Ne(e.named.count) ? e.named.count : Ne(e.named.n) ? e.named.n : t : t;
}
function Ao(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Ro(e = {}) {
  const t = e.locale, r = Po(e), n = fe(e.pluralRules) && j(t) && Oe(e.pluralRules[t]) ? e.pluralRules[t] : Ua, a = fe(e.pluralRules) && j(t) && Oe(e.pluralRules[t]) ? Ua : void 0, i = (m) => m[n(r, m.length, a)], s = e.list || [], o = (m) => s[m], u = e.named || {};
  Ne(e.pluralIndex) && Ao(r, u);
  const l = (m) => u[m];
  function p(m) {
    const _ = Oe(e.messages) ? e.messages(m) : fe(e.messages) ? e.messages[m] : !1;
    return _ || (e.parent ? e.parent.message(m) : No);
  }
  const y = (m) => e.modifiers ? e.modifiers[m] : To, g = ie(e.processor) && Oe(e.processor.normalize) ? e.processor.normalize : Mo, S = ie(e.processor) && Oe(e.processor.interpolate) ? e.processor.interpolate : Lo, f = ie(e.processor) && j(e.processor.type) ? e.processor.type : Io, d = {
    list: o,
    named: l,
    plural: i,
    linked: (m, ..._) => {
      const [E, x] = _;
      let w = "text", L = "";
      _.length === 1 ? fe(E) ? (L = E.modifier || L, w = E.type || w) : j(E) && (L = E || L) : _.length === 2 && (j(E) && (L = E || L), j(x) && (w = x || w));
      let Y = p(m)(d);
      return w === "vnode" && we(Y) && L && (Y = Y[0]), L ? y(L)(Y, w) : Y;
    },
    message: p,
    type: f,
    interpolate: S,
    normalize: g
  };
  return d;
}
let Sr = null;
function Fo(e) {
  Sr = e;
}
function Yo(e, t, r) {
  Sr && Sr.emit(Bi.I18nInit, {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: r
  });
}
const Wo = /* @__PURE__ */ Uo(Bi.FunctionTranslate);
function Uo(e) {
  return (t) => Sr && Sr.emit(e, t);
}
const Be = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  __EXTEND_POINT__: 7
}, Vo = {
  [Be.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Be.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Be.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Be.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Be.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Be.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale."
};
function ar(e, ...t) {
  return tn(Vo[e], ...t);
}
function Bo(e, t, r) {
  return [.../* @__PURE__ */ new Set([
    r,
    ...we(t) ? t : fe(t) ? Object.keys(t) : j(t) ? [t] : [r]
  ])];
}
function zi(e, t, r) {
  const n = j(r) ? r : sn, a = e;
  a.__localeChainCache || (a.__localeChainCache = /* @__PURE__ */ new Map());
  let i = a.__localeChainCache.get(n);
  if (!i) {
    i = [];
    let s = [r];
    for (; we(s); )
      s = Va(i, s, t);
    const o = we(t) || !ie(t) ? t : t.default ? t.default : null;
    s = j(o) ? [o] : o, we(s) && Va(i, s, !1), a.__localeChainCache.set(n, i);
  }
  return i;
}
function Va(e, t, r) {
  let n = !0;
  for (let a = 0; a < t.length && me(n); a++) {
    const i = t[a];
    j(i) && (n = zo(e, t[a], r));
  }
  return n;
}
function zo(e, t, r) {
  let n;
  const a = t.split("-");
  do {
    const i = a.join("-");
    n = Ho(e, i, r), a.splice(-1, 1);
  } while (a.length && n === !0);
  return n;
}
function Ho(e, t, r) {
  let n = !1;
  if (!e.includes(t) && (n = !0, t)) {
    n = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (we(r) || ie(r)) && r[a] && (n = r[a]);
  }
  return n;
}
const jo = "9.2.2", an = -1, sn = "en-US", zr = "", Ba = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Go() {
  return {
    upper: (e, t) => t === "text" && j(e) ? e.toUpperCase() : t === "vnode" && fe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && j(e) ? e.toLowerCase() : t === "vnode" && fe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && j(e) ? Ba(e) : t === "vnode" && fe(e) && "__v_isVNode" in e ? Ba(e.children) : e
  };
}
let Hi;
function $o(e) {
  Hi = e;
}
let ji;
function qo(e) {
  ji = e;
}
let Gi;
function Ko(e) {
  Gi = e;
}
let $i = null;
const za = (e) => {
  $i = e;
}, Xo = () => $i;
let qi = null;
const Ha = (e) => {
  qi = e;
}, Zo = () => qi;
let ja = 0;
function Jo(e = {}) {
  const t = j(e.version) ? e.version : jo, r = j(e.locale) ? e.locale : sn, n = we(e.fallbackLocale) || ie(e.fallbackLocale) || j(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, a = ie(e.messages) ? e.messages : { [r]: {} }, i = ie(e.datetimeFormats) ? e.datetimeFormats : { [r]: {} }, s = ie(e.numberFormats) ? e.numberFormats : { [r]: {} }, o = Te({}, e.modifiers || {}, Go()), u = e.pluralRules || {}, l = Oe(e.missing) ? e.missing : null, p = me(e.missingWarn) || rr(e.missingWarn) ? e.missingWarn : !0, y = me(e.fallbackWarn) || rr(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, S = !!e.unresolving, f = Oe(e.postTranslation) ? e.postTranslation : null, v = ie(e.processor) ? e.processor : null, d = me(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, m = !!e.escapeParameter, _ = Oe(e.messageCompiler) ? e.messageCompiler : Hi, E = Oe(e.messageResolver) ? e.messageResolver : ji || Co, x = Oe(e.localeFallbacker) ? e.localeFallbacker : Gi || Bo, w = fe(e.fallbackContext) ? e.fallbackContext : void 0, L = Oe(e.onWarn) ? e.onWarn : Tr, Y = e, ne = fe(Y.__datetimeFormatters) ? Y.__datetimeFormatters : /* @__PURE__ */ new Map(), T = fe(Y.__numberFormatters) ? Y.__numberFormatters : /* @__PURE__ */ new Map(), V = fe(Y.__meta) ? Y.__meta : {};
  ja++;
  const B = {
    version: t,
    cid: ja,
    locale: r,
    fallbackLocale: n,
    messages: a,
    modifiers: o,
    pluralRules: u,
    missing: l,
    missingWarn: p,
    fallbackWarn: y,
    fallbackFormat: g,
    unresolving: S,
    postTranslation: f,
    processor: v,
    warnHtmlMessage: d,
    escapeParameter: m,
    messageCompiler: _,
    messageResolver: E,
    localeFallbacker: x,
    fallbackContext: w,
    onWarn: L,
    __meta: V
  };
  return B.datetimeFormats = i, B.numberFormats = s, B.__datetimeFormatters = ne, B.__numberFormatters = T, process.env.NODE_ENV !== "production" && (B.__v_emitter = Y.__v_emitter != null ? Y.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Yo(B, t, V), B;
}
function ln(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Ki(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function aa(e, t, r, n, a) {
  const { missing: i, onWarn: s } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = e.__v_emitter;
    o && o.emit("missing", {
      locale: r,
      key: t,
      type: a,
      groupId: `${a}:${t}`
    });
  }
  if (i !== null) {
    const o = i(e, r, t, a);
    return j(o) ? o : t;
  } else
    return process.env.NODE_ENV !== "production" && Ki(n, t) && s(ar(Be.NOT_FOUND_KEY, { key: t, locale: r })), t;
}
function pr(e, t, r) {
  const n = e;
  n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, r, t);
}
const Qo = /<\/?[\w\s="/.':;#-\/]+>/, eu = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function tu(e, t) {
  (me(t.warnHtmlMessage) ? t.warnHtmlMessage : !0) && Qo.test(e) && Tr(tn(eu, { source: e }));
}
const ru = (e) => e;
let Ga = /* @__PURE__ */ Object.create(null);
function nu(e, t = {}) {
  {
    process.env.NODE_ENV !== "production" && tu(e, t);
    const n = (t.onCacheKey || ru)(e), a = Ga[n];
    if (a)
      return a;
    let i = !1;
    const s = t.onError || Ql;
    t.onError = (l) => {
      i = !0, s(l);
    };
    const { code: o } = vo(e, t), u = new Function(`return ${o}`)();
    return i ? u : Ga[n] = u;
  }
}
let Xi = J.__EXTEND_POINT__;
const En = () => ++Xi, mt = {
  INVALID_ARGUMENT: Xi,
  INVALID_DATE_ARGUMENT: En(),
  INVALID_ISO_DATE_ARGUMENT: En(),
  __EXTEND_POINT__: En()
  // 18
};
function Zt(e) {
  return nn(e, null, process.env.NODE_ENV !== "production" ? { messages: au } : void 0);
}
const au = {
  [mt.INVALID_ARGUMENT]: "Invalid arguments",
  [mt.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [mt.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string"
}, $a = () => "", rt = (e) => Oe(e);
function qa(e, ...t) {
  const { fallbackFormat: r, postTranslation: n, unresolving: a, messageCompiler: i, fallbackLocale: s, messages: o } = e, [u, l] = Mn(...t), p = me(l.missingWarn) ? l.missingWarn : e.missingWarn, y = me(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, g = me(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, S = !!l.resolvedMessage, f = j(l.default) || me(l.default) ? me(l.default) ? i ? u : () => u : l.default : r ? i ? u : () => u : "", v = r || f !== "", d = j(l.locale) ? l.locale : e.locale;
  g && iu(l);
  let [m, _, E] = S ? [
    u,
    d,
    o[d] || {}
  ] : Zi(e, u, d, s, y, p), x = m, w = u;
  if (!S && !(j(x) || rt(x)) && v && (x = f, w = x), !S && (!(j(x) || rt(x)) || !j(_)))
    return a ? an : u;
  if (process.env.NODE_ENV !== "production" && j(x) && e.messageCompiler == null)
    return Tr(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${u}'.`), u;
  let L = !1;
  const Y = () => {
    L = !0;
  }, ne = rt(x) ? x : Ji(e, u, _, x, w, Y);
  if (L)
    return x;
  const T = ou(e, _, E, l), V = Ro(T), B = su(e, ne, V), M = n ? n(B, u) : B;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const W = {
      timestamp: Date.now(),
      key: j(u) ? u : rt(x) ? x.key : "",
      locale: _ || (rt(x) ? x.locale : ""),
      format: j(x) ? x : rt(x) ? x.source : "",
      message: M
    };
    W.meta = Te({}, e.__meta, Xo() || {}), Wo(W);
  }
  return M;
}
function iu(e) {
  we(e.list) ? e.list = e.list.map((t) => j(t) ? Aa(t) : t) : fe(e.named) && Object.keys(e.named).forEach((t) => {
    j(e.named[t]) && (e.named[t] = Aa(e.named[t]));
  });
}
function Zi(e, t, r, n, a, i) {
  const { messages: s, onWarn: o, messageResolver: u, localeFallbacker: l } = e, p = l(e, n, r);
  let y = {}, g, S = null, f = r, v = null;
  const d = "translate";
  for (let m = 0; m < p.length; m++) {
    if (g = v = p[m], process.env.NODE_ENV !== "production" && r !== g && ln(a, t) && o(ar(Be.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: g
    })), process.env.NODE_ENV !== "production" && r !== g) {
      const L = e.__v_emitter;
      L && L.emit("fallback", {
        type: d,
        key: t,
        from: f,
        to: v,
        groupId: `${d}:${t}`
      });
    }
    y = s[g] || {};
    let _ = null, E, x;
    if (process.env.NODE_ENV !== "production" && It && (_ = window.performance.now(), E = "intlify-message-resolve-start", x = "intlify-message-resolve-end", He && He(E)), (S = u(y, t)) === null && (S = y[t]), process.env.NODE_ENV !== "production" && It) {
      const L = window.performance.now(), Y = e.__v_emitter;
      Y && _ && S && Y.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: S,
        time: L - _,
        groupId: `${d}:${t}`
      }), E && x && He && Ht && (He(x), Ht("intlify message resolve", E, x));
    }
    if (j(S) || Oe(S))
      break;
    const w = aa(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      g,
      i,
      d
    );
    w !== t && (S = w), f = v;
  }
  return [S, g, y];
}
function Ji(e, t, r, n, a, i) {
  const { messageCompiler: s, warnHtmlMessage: o } = e;
  if (rt(n)) {
    const g = n;
    return g.locale = g.locale || r, g.key = g.key || t, g;
  }
  if (s == null) {
    const g = () => n;
    return g.locale = r, g.key = t, g;
  }
  let u = null, l, p;
  process.env.NODE_ENV !== "production" && It && (u = window.performance.now(), l = "intlify-message-compilation-start", p = "intlify-message-compilation-end", He && He(l));
  const y = s(n, lu(e, r, a, n, o, i));
  if (process.env.NODE_ENV !== "production" && It) {
    const g = window.performance.now(), S = e.__v_emitter;
    S && u && S.emit("message-compilation", {
      type: "message-compilation",
      message: n,
      time: g - u,
      groupId: `translate:${t}`
    }), l && p && He && Ht && (He(p), Ht("intlify message compilation", l, p));
  }
  return y.locale = r, y.key = t, y.source = n, y;
}
function su(e, t, r) {
  let n = null, a, i;
  process.env.NODE_ENV !== "production" && It && (n = window.performance.now(), a = "intlify-message-evaluation-start", i = "intlify-message-evaluation-end", He && He(a));
  const s = t(r);
  if (process.env.NODE_ENV !== "production" && It) {
    const o = window.performance.now(), u = e.__v_emitter;
    u && n && u.emit("message-evaluation", {
      type: "message-evaluation",
      value: s,
      time: o - n,
      groupId: `translate:${t.key}`
    }), a && i && He && Ht && (He(i), Ht("intlify message evaluation", a, i));
  }
  return s;
}
function Mn(...e) {
  const [t, r, n] = e, a = {};
  if (!j(t) && !Ne(t) && !rt(t))
    throw Zt(mt.INVALID_ARGUMENT);
  const i = Ne(t) ? String(t) : (rt(t), t);
  return Ne(r) ? a.plural = r : j(r) ? a.default = r : ie(r) && !rn(r) ? a.named = r : we(r) && (a.list = r), Ne(n) ? a.plural = n : j(n) ? a.default = n : ie(n) && Te(a, n), [i, a];
}
function lu(e, t, r, n, a, i) {
  return {
    warnHtmlMessage: a,
    onError: (s) => {
      if (i && i(s), process.env.NODE_ENV !== "production") {
        const o = `Message compilation error: ${s.message}`, u = s.location && Xl(n, s.location.start.offset, s.location.end.offset), l = e.__v_emitter;
        l && l.emit("compile-error", {
          message: n,
          error: s.message,
          start: s.location && s.location.start.offset,
          end: s.location && s.location.end.offset,
          groupId: `translate:${r}`
        }), console.error(u ? `${o}
${u}` : o);
      } else
        throw s;
    },
    onCacheKey: (s) => jl(t, r, s)
  };
}
function ou(e, t, r, n) {
  const { modifiers: a, pluralRules: i, messageResolver: s, fallbackLocale: o, fallbackWarn: u, missingWarn: l, fallbackContext: p } = e, g = {
    locale: t,
    modifiers: a,
    pluralRules: i,
    messages: (S) => {
      let f = s(r, S);
      if (f == null && p) {
        const [, , v] = Zi(p, S, t, o, u, l);
        f = s(v, S);
      }
      if (j(f)) {
        let v = !1;
        const m = Ji(e, S, t, f, S, () => {
          v = !0;
        });
        return v ? $a : m;
      } else
        return rt(f) ? f : $a;
    }
  };
  return e.processor && (g.processor = e.processor), n.list && (g.list = n.list), n.named && (g.named = n.named), Ne(n.plural) && (g.pluralIndex = n.plural), g;
}
const Ka = typeof Intl < "u", Qi = {
  dateTimeFormat: Ka && typeof Intl.DateTimeFormat < "u",
  numberFormat: Ka && typeof Intl.NumberFormat < "u"
};
function Xa(e, ...t) {
  const { datetimeFormats: r, unresolving: n, fallbackLocale: a, onWarn: i, localeFallbacker: s } = e, { __datetimeFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !Qi.dateTimeFormat)
    return i(ar(Be.CANNOT_FORMAT_DATE)), zr;
  const [u, l, p, y] = Ln(...t), g = me(p.missingWarn) ? p.missingWarn : e.missingWarn, S = me(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, f = !!p.part, v = j(p.locale) ? p.locale : e.locale, d = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    v
  );
  if (!j(u) || u === "")
    return new Intl.DateTimeFormat(v, y).format(l);
  let m = {}, _, E = null, x = v, w = null;
  const L = "datetime format";
  for (let T = 0; T < d.length; T++) {
    if (_ = w = d[T], process.env.NODE_ENV !== "production" && v !== _ && ln(S, u) && i(ar(Be.FALLBACK_TO_DATE_FORMAT, {
      key: u,
      target: _
    })), process.env.NODE_ENV !== "production" && v !== _) {
      const V = e.__v_emitter;
      V && V.emit("fallback", {
        type: L,
        key: u,
        from: x,
        to: w,
        groupId: `${L}:${u}`
      });
    }
    if (m = r[_] || {}, E = m[u], ie(E))
      break;
    aa(e, u, _, g, L), x = w;
  }
  if (!ie(E) || !j(_))
    return n ? an : u;
  let Y = `${_}__${u}`;
  rn(y) || (Y = `${Y}__${JSON.stringify(y)}`);
  let ne = o.get(Y);
  return ne || (ne = new Intl.DateTimeFormat(_, Te({}, E, y)), o.set(Y, ne)), f ? ne.formatToParts(l) : ne.format(l);
}
const es = [
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
function Ln(...e) {
  const [t, r, n, a] = e, i = {};
  let s = {}, o;
  if (j(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw Zt(mt.INVALID_ISO_DATE_ARGUMENT);
    const l = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    o = new Date(l);
    try {
      o.toISOString();
    } catch {
      throw Zt(mt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if ($l(t)) {
    if (isNaN(t.getTime()))
      throw Zt(mt.INVALID_DATE_ARGUMENT);
    o = t;
  } else if (Ne(t))
    o = t;
  else
    throw Zt(mt.INVALID_ARGUMENT);
  return j(r) ? i.key = r : ie(r) && Object.keys(r).forEach((u) => {
    es.includes(u) ? s[u] = r[u] : i[u] = r[u];
  }), j(n) ? i.locale = n : ie(n) && (s = n), ie(a) && (s = a), [i.key || "", o, i, s];
}
function Za(e, t, r) {
  const n = e;
  for (const a in r) {
    const i = `${t}__${a}`;
    n.__datetimeFormatters.has(i) && n.__datetimeFormatters.delete(i);
  }
}
function Ja(e, ...t) {
  const { numberFormats: r, unresolving: n, fallbackLocale: a, onWarn: i, localeFallbacker: s } = e, { __numberFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !Qi.numberFormat)
    return i(ar(Be.CANNOT_FORMAT_NUMBER)), zr;
  const [u, l, p, y] = Pn(...t), g = me(p.missingWarn) ? p.missingWarn : e.missingWarn, S = me(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, f = !!p.part, v = j(p.locale) ? p.locale : e.locale, d = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    v
  );
  if (!j(u) || u === "")
    return new Intl.NumberFormat(v, y).format(l);
  let m = {}, _, E = null, x = v, w = null;
  const L = "number format";
  for (let T = 0; T < d.length; T++) {
    if (_ = w = d[T], process.env.NODE_ENV !== "production" && v !== _ && ln(S, u) && i(ar(Be.FALLBACK_TO_NUMBER_FORMAT, {
      key: u,
      target: _
    })), process.env.NODE_ENV !== "production" && v !== _) {
      const V = e.__v_emitter;
      V && V.emit("fallback", {
        type: L,
        key: u,
        from: x,
        to: w,
        groupId: `${L}:${u}`
      });
    }
    if (m = r[_] || {}, E = m[u], ie(E))
      break;
    aa(e, u, _, g, L), x = w;
  }
  if (!ie(E) || !j(_))
    return n ? an : u;
  let Y = `${_}__${u}`;
  rn(y) || (Y = `${Y}__${JSON.stringify(y)}`);
  let ne = o.get(Y);
  return ne || (ne = new Intl.NumberFormat(_, Te({}, E, y)), o.set(Y, ne)), f ? ne.formatToParts(l) : ne.format(l);
}
const ts = [
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
function Pn(...e) {
  const [t, r, n, a] = e, i = {};
  let s = {};
  if (!Ne(t))
    throw Zt(mt.INVALID_ARGUMENT);
  const o = t;
  return j(r) ? i.key = r : ie(r) && Object.keys(r).forEach((u) => {
    ts.includes(u) ? s[u] = r[u] : i[u] = r[u];
  }), j(n) ? i.locale = n : ie(n) && (s = n), ie(a) && (s = a), [i.key || "", o, i, s];
}
function Qa(e, t, r) {
  const n = e;
  for (const a in r) {
    const i = `${t}__${a}`;
    n.__numberFormatters.has(i) && n.__numberFormatters.delete(i);
  }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (vr().__INTLIFY_PROD_DEVTOOLS__ = !1);
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const uu = "9.2.2";
function cu() {
  let e = !1;
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (e = !0, vr().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (e = !0, vr().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (vr().__INTLIFY_PROD_DEVTOOLS__ = !1), process.env.NODE_ENV !== "production" && e && console.warn("You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.");
}
let rs = Be.__EXTEND_POINT__;
const $t = () => ++rs, ft = {
  FALLBACK_TO_ROOT: rs,
  NOT_SUPPORTED_PRESERVE: $t(),
  NOT_SUPPORTED_FORMATTER: $t(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: $t(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: $t(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: $t(),
  NOT_FOUND_PARENT_SCOPE: $t()
  // 13
}, du = {
  [ft.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [ft.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [ft.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [ft.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [ft.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [ft.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [ft.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope."
};
function ns(e, ...t) {
  return tn(du[e], ...t);
}
let as = J.__EXTEND_POINT__;
const We = () => ++as, ye = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: as,
  // legacy module errors
  INVALID_ARGUMENT: We(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: We(),
  NOT_INSLALLED: We(),
  NOT_AVAILABLE_IN_LEGACY_MODE: We(),
  // directive module errors
  REQUIRED_VALUE: We(),
  INVALID_VALUE: We(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: We(),
  NOT_INSLALLED_WITH_PROVIDE: We(),
  // unexpected error
  UNEXPECTED_ERROR: We(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: We(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: We(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: We(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: We(),
  // for enhancement
  __EXTEND_POINT__: We()
  // 29
};
function yt(e, ...t) {
  return nn(e, null, process.env.NODE_ENV !== "production" ? { messages: fu, args: t } : void 0);
}
const fu = {
  [ye.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [ye.INVALID_ARGUMENT]: "Invalid argument",
  [ye.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [ye.NOT_INSLALLED]: "Need to install with `app.use` function",
  [ye.UNEXPECTED_ERROR]: "Unexpected error",
  [ye.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [ye.REQUIRED_VALUE]: "Required in value: {0}",
  [ye.INVALID_VALUE]: "Invalid value",
  [ye.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [ye.NOT_INSLALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [ye.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [ye.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [ye.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [ye.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, An = /* @__PURE__ */ vt("__transrateVNode"), Rn = /* @__PURE__ */ vt("__datetimeParts"), Fn = /* @__PURE__ */ vt("__numberParts"), Yn = /* @__PURE__ */ vt("__enableEmitter"), Wn = /* @__PURE__ */ vt("__disableEmitter"), hu = vt("__setPluralRules");
vt("__intlifyMeta");
const is = /* @__PURE__ */ vt("__injectWithOption");
function Un(e) {
  if (!fe(e))
    return e;
  for (const t in e)
    if (ta(e, t))
      if (!t.includes("."))
        fe(e[t]) && Un(e[t]);
      else {
        const r = t.split("."), n = r.length - 1;
        let a = e;
        for (let i = 0; i < n; i++)
          r[i] in a || (a[r[i]] = {}), a = a[r[i]];
        a[r[n]] = e[t], delete e[t], fe(a[r[n]]) && Un(a[r[n]]);
      }
  return e;
}
function ia(e, t) {
  const { messages: r, __i18n: n, messageResolver: a, flatJson: i } = t, s = ie(r) ? r : we(n) ? {} : { [e]: {} };
  if (we(n) && n.forEach((o) => {
    if ("locale" in o && "resource" in o) {
      const { locale: u, resource: l } = o;
      u ? (s[u] = s[u] || {}, kr(l, s[u])) : kr(l, s);
    } else
      j(o) && kr(JSON.parse(o), s);
  }), a == null && i)
    for (const o in s)
      ta(s, o) && Un(s[o]);
  return s;
}
const Fr = (e) => !fe(e) || we(e);
function kr(e, t) {
  if (Fr(e) || Fr(t))
    throw yt(ye.INVALID_VALUE);
  for (const r in e)
    ta(e, r) && (Fr(e[r]) || Fr(t[r]) ? t[r] = e[r] : kr(e[r], t[r]));
}
function ss(e) {
  return e.type;
}
function mu(e, t, r) {
  let n = fe(t.messages) ? t.messages : {};
  "__i18nGlobal" in r && (n = ia(e.locale.value, {
    messages: n,
    __i18n: r.__i18nGlobal
  }));
  const a = Object.keys(n);
  a.length && a.forEach((i) => {
    e.mergeLocaleMessage(i, n[i]);
  });
  {
    if (fe(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats);
      i.length && i.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (fe(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length && i.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function ei(e) {
  return _e(cl, null, e, 0);
}
const ti = "__INTLIFY_META__";
let ri = 0;
function ni(e) {
  return (t, r, n, a) => e(r, n, Kn() || void 0, a);
}
const gu = () => {
  const e = Kn();
  let t = null;
  return e && (t = ss(e)[ti]) ? { [ti]: t } : null;
};
function pu(e = {}, t) {
  const { __root: r } = e, n = r === void 0;
  let a = me(e.inheritLocale) ? e.inheritLocale : !0;
  const i = De(
    // prettier-ignore
    r && a ? r.locale.value : j(e.locale) ? e.locale : sn
  ), s = De(
    // prettier-ignore
    r && a ? r.fallbackLocale.value : j(e.fallbackLocale) || we(e.fallbackLocale) || ie(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), o = De(ia(i.value, e)), u = De(ie(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), l = De(ie(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let p = r ? r.missingWarn : me(e.missingWarn) || rr(e.missingWarn) ? e.missingWarn : !0, y = r ? r.fallbackWarn : me(e.fallbackWarn) || rr(e.fallbackWarn) ? e.fallbackWarn : !0, g = r ? r.fallbackRoot : me(e.fallbackRoot) ? e.fallbackRoot : !0, S = !!e.fallbackFormat, f = Oe(e.missing) ? e.missing : null, v = Oe(e.missing) ? ni(e.missing) : null, d = Oe(e.postTranslation) ? e.postTranslation : null, m = r ? r.warnHtmlMessage : me(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, _ = !!e.escapeParameter;
  const E = r ? r.modifiers : ie(e.modifiers) ? e.modifiers : {};
  let x = e.pluralRules || r && r.pluralRules, w;
  w = (() => {
    n && Ha(null);
    const C = {
      version: uu,
      locale: i.value,
      fallbackLocale: s.value,
      messages: o.value,
      modifiers: E,
      pluralRules: x,
      missing: v === null ? void 0 : v,
      missingWarn: p,
      fallbackWarn: y,
      fallbackFormat: S,
      unresolving: !0,
      postTranslation: d === null ? void 0 : d,
      warnHtmlMessage: m,
      escapeParameter: _,
      messageResolver: e.messageResolver,
      __meta: { framework: "vue" }
    };
    C.datetimeFormats = u.value, C.numberFormats = l.value, C.__datetimeFormatters = ie(w) ? w.__datetimeFormatters : void 0, C.__numberFormatters = ie(w) ? w.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (C.__v_emitter = ie(w) ? w.__v_emitter : void 0);
    const P = Jo(C);
    return n && Ha(P), P;
  })(), pr(w, i.value, s.value);
  function Y() {
    return [
      i.value,
      s.value,
      o.value,
      u.value,
      l.value
    ];
  }
  const ne = nt({
    get: () => i.value,
    set: (C) => {
      i.value = C, w.locale = i.value;
    }
  }), T = nt({
    get: () => s.value,
    set: (C) => {
      s.value = C, w.fallbackLocale = s.value, pr(w, i.value, C);
    }
  }), V = nt(() => o.value), B = /* @__PURE__ */ nt(() => u.value), M = /* @__PURE__ */ nt(() => l.value);
  function W() {
    return Oe(d) ? d : null;
  }
  function G(C) {
    d = C, w.postTranslation = C;
  }
  function R() {
    return f;
  }
  function D(C) {
    C !== null && (v = ni(C)), f = C, w.missing = v;
  }
  function q(C, P) {
    return C !== "translate" || !P.resolvedMessage;
  }
  const $ = (C, P, Ye, Ae, Sn, Rr) => {
    Y();
    let Gt;
    if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__)
      try {
        za(gu()), n || (w.fallbackContext = r ? Zo() : void 0), Gt = C(w);
      } finally {
        za(null), n || (w.fallbackContext = void 0);
      }
    else
      Gt = C(w);
    if (Ne(Gt) && Gt === an) {
      const [Yt, al] = P();
      if (process.env.NODE_ENV !== "production" && r && j(Yt) && q(Ye, al) && (g && (ln(y, Yt) || Ki(p, Yt)) && Tr(ns(ft.FALLBACK_TO_ROOT, {
        key: Yt,
        type: Ye
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Ta } = w;
        Ta && g && Ta.emit("fallback", {
          type: Ye,
          key: Yt,
          to: "global",
          groupId: `${Ye}:${Yt}`
        });
      }
      return r && g ? Ae(r) : Sn(Yt);
    } else {
      if (Rr(Gt))
        return Gt;
      throw yt(ye.UNEXPECTED_RETURN_TYPE);
    }
  };
  function X(...C) {
    return $((P) => Reflect.apply(qa, null, [P, ...C]), () => Mn(...C), "translate", (P) => Reflect.apply(P.t, P, [...C]), (P) => P, (P) => j(P));
  }
  function Ce(...C) {
    const [P, Ye, Ae] = C;
    if (Ae && !fe(Ae))
      throw yt(ye.INVALID_ARGUMENT);
    return X(P, Ye, Te({ resolvedMessage: !0 }, Ae || {}));
  }
  function wt(...C) {
    return $((P) => Reflect.apply(Xa, null, [P, ...C]), () => Ln(...C), "datetime format", (P) => Reflect.apply(P.d, P, [...C]), () => zr, (P) => j(P));
  }
  function or(...C) {
    return $((P) => Reflect.apply(Ja, null, [P, ...C]), () => Pn(...C), "number format", (P) => Reflect.apply(P.n, P, [...C]), () => zr, (P) => j(P));
  }
  function ur(C) {
    return C.map((P) => j(P) || Ne(P) || me(P) ? ei(String(P)) : P);
  }
  const dr = {
    normalize: ur,
    interpolate: (C) => C,
    type: "vnode"
  };
  function fr(...C) {
    return $(
      (P) => {
        let Ye;
        const Ae = P;
        try {
          Ae.processor = dr, Ye = Reflect.apply(qa, null, [Ae, ...C]);
        } finally {
          Ae.processor = null;
        }
        return Ye;
      },
      () => Mn(...C),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (P) => P[An](...C),
      (P) => [ei(P)],
      (P) => we(P)
    );
  }
  function hr(...C) {
    return $(
      (P) => Reflect.apply(Ja, null, [P, ...C]),
      () => Pn(...C),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (P) => P[Fn](...C),
      () => [],
      (P) => j(P) || we(P)
    );
  }
  function At(...C) {
    return $(
      (P) => Reflect.apply(Xa, null, [P, ...C]),
      () => Ln(...C),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (P) => P[Rn](...C),
      () => [],
      (P) => j(P) || we(P)
    );
  }
  function Rt(C) {
    x = C, w.pluralRules = x;
  }
  function St(C, P) {
    const Ye = j(P) ? P : i.value, Ae = h(Ye);
    return w.messageResolver(Ae, C) !== null;
  }
  function Ft(C) {
    let P = null;
    const Ye = zi(w, s.value, i.value);
    for (let Ae = 0; Ae < Ye.length; Ae++) {
      const Sn = o.value[Ye[Ae]] || {}, Rr = w.messageResolver(Sn, C);
      if (Rr != null) {
        P = Rr;
        break;
      }
    }
    return P;
  }
  function mr(C) {
    const P = Ft(C);
    return P ?? (r ? r.tm(C) || {} : {});
  }
  function h(C) {
    return o.value[C] || {};
  }
  function c(C, P) {
    o.value[C] = P, w.messages = o.value;
  }
  function k(C, P) {
    o.value[C] = o.value[C] || {}, kr(P, o.value[C]), w.messages = o.value;
  }
  function z(C) {
    return u.value[C] || {};
  }
  function Q(C, P) {
    u.value[C] = P, w.datetimeFormats = u.value, Za(w, C, P);
  }
  function ce(C, P) {
    u.value[C] = Te(u.value[C] || {}, P), w.datetimeFormats = u.value, Za(w, C, P);
  }
  function et(C) {
    return l.value[C] || {};
  }
  function ut(C, P) {
    l.value[C] = P, w.numberFormats = l.value, Qa(w, C, P);
  }
  function nl(C, P) {
    l.value[C] = Te(l.value[C] || {}, P), w.numberFormats = l.value, Qa(w, C, P);
  }
  ri++, r && It && (Na(r.locale, (C) => {
    a && (i.value = C, w.locale = C, pr(w, i.value, s.value));
  }), Na(r.fallbackLocale, (C) => {
    a && (s.value = C, w.fallbackLocale = C, pr(w, i.value, s.value));
  }));
  const Se = {
    id: ri,
    locale: ne,
    fallbackLocale: T,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(C) {
      a = C, C && r && (i.value = r.locale.value, s.value = r.fallbackLocale.value, pr(w, i.value, s.value));
    },
    get availableLocales() {
      return Object.keys(o.value).sort();
    },
    messages: V,
    get modifiers() {
      return E;
    },
    get pluralRules() {
      return x || {};
    },
    get isGlobal() {
      return n;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(C) {
      p = C, w.missingWarn = p;
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(C) {
      y = C, w.fallbackWarn = y;
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(C) {
      g = C;
    },
    get fallbackFormat() {
      return S;
    },
    set fallbackFormat(C) {
      S = C, w.fallbackFormat = S;
    },
    get warnHtmlMessage() {
      return m;
    },
    set warnHtmlMessage(C) {
      m = C, w.warnHtmlMessage = C;
    },
    get escapeParameter() {
      return _;
    },
    set escapeParameter(C) {
      _ = C, w.escapeParameter = C;
    },
    t: X,
    getLocaleMessage: h,
    setLocaleMessage: c,
    mergeLocaleMessage: k,
    getPostTranslationHandler: W,
    setPostTranslationHandler: G,
    getMissingHandler: R,
    setMissingHandler: D,
    [hu]: Rt
  };
  return Se.datetimeFormats = B, Se.numberFormats = M, Se.rt = Ce, Se.te = St, Se.tm = mr, Se.d = wt, Se.n = or, Se.getDateTimeFormat = z, Se.setDateTimeFormat = Q, Se.mergeDateTimeFormat = ce, Se.getNumberFormat = et, Se.setNumberFormat = ut, Se.mergeNumberFormat = nl, Se[is] = e.__injectWithOption, Se[An] = fr, Se[Rn] = At, Se[Fn] = hr, process.env.NODE_ENV !== "production" && (Se[Yn] = (C) => {
    w.__v_emitter = C;
  }, Se[Wn] = () => {
    w.__v_emitter = void 0;
  }), Se;
}
const sa = {
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
function yu({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, a) => n = [
    ...n,
    ...we(a.children) ? a.children : [a]
  ], []) : t.reduce((r, n) => {
    const a = e[n];
    return a && (r[n] = a()), r;
  }, {});
}
function ls(e) {
  return ke;
}
Te({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => Ne(e) || !isNaN(e)
  }
}, sa);
function bu(e) {
  return we(e) && !j(e[0]);
}
function os(e, t, r, n) {
  const { slots: a, attrs: i } = t;
  return () => {
    const s = { part: !0 };
    let o = {};
    e.locale && (s.locale = e.locale), j(e.format) ? s.key = e.format : fe(e.format) && (j(e.format.key) && (s.key = e.format.key), o = Object.keys(e.format).reduce((g, S) => r.includes(S) ? Te({}, g, { [S]: e.format[S] }) : g, {}));
    const u = n(e.value, s, o);
    let l = [s.key];
    we(u) ? l = u.map((g, S) => {
      const f = a[g.type], v = f ? f({ [g.type]: g.value, index: S, parts: u }) : [g.value];
      return bu(v) && (v[0].key = `${g.type}-${S}`), v;
    }) : j(u) && (l = [u]);
    const p = Te({}, i), y = j(e.tag) || fe(e.tag) ? e.tag : ls();
    return gi(y, p, l);
  };
}
Te({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, sa);
Te({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, sa);
function ai(e, t) {
}
const _u = /* @__PURE__ */ vt("global-vue-i18n");
function ir(e = {}) {
  const t = Kn();
  if (t == null)
    throw yt(ye.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw yt(ye.NOT_INSLALLED);
  const r = vu(t), n = xu(r), a = ss(t), i = ku(e, a);
  if (__VUE_I18N_LEGACY_API__ && r.mode === "legacy" && !e.__useComponent) {
    if (!r.allowComposition)
      throw yt(ye.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Ou(t, i, n, e);
  }
  if (i === "global")
    return mu(n, e, a), n;
  if (i === "parent") {
    let u = wu(r, t, e.__useComponent);
    return u == null && (process.env.NODE_ENV !== "production" && Tr(ns(ft.NOT_FOUND_PARENT_SCOPE)), u = n), u;
  }
  const s = r;
  let o = s.__getInstance(t);
  if (o == null) {
    const u = Te({}, e);
    "__i18n" in a && (u.__i18n = a.__i18n), n && (u.__root = n), o = pu(u), Su(s, t, o), s.__setInstance(t, o);
  }
  return o;
}
function vu(e) {
  {
    const t = il(e.isCE ? _u : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw yt(e.isCE ? ye.NOT_INSLALLED_WITH_PROVIDE : ye.UNEXPECTED_ERROR);
    return t;
  }
}
function ku(e, t) {
  return rn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function xu(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function wu(e, t, r = !1) {
  let n = null;
  const a = t.root;
  let i = t.parent;
  for (; i != null; ) {
    const s = e;
    if (e.mode === "composition")
      n = s.__getInstance(i);
    else if (__VUE_I18N_LEGACY_API__) {
      const o = s.__getInstance(i);
      o != null && (n = o.__composer, r && n && !n[is] && (n = null));
    }
    if (n != null || a === i)
      break;
    i = i.parent;
  }
  return n;
}
function Su(e, t, r) {
  let n = null;
  sl(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = r, n = Zl();
      const a = r;
      a[Yn] && a[Yn](n), n.on("*", ai);
    }
  }, t), ll(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__) {
      n && n.off("*", ai);
      const a = r;
      a[Wn] && a[Wn](), delete t.vnode.el.__VUE_I18N__;
    }
    e.__deleteInstance(t);
  }, t);
}
function Ou(e, t, r, n = {}) {
  const a = t === "local", i = ol(null);
  if (a && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw yt(ye.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const s = me(n.inheritLocale) ? n.inheritLocale : !0, o = De(
    // prettier-ignore
    a && s ? r.locale.value : j(n.locale) ? n.locale : sn
  ), u = De(
    // prettier-ignore
    a && s ? r.fallbackLocale.value : j(n.fallbackLocale) || we(n.fallbackLocale) || ie(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : o.value
  ), l = De(ia(o.value, n)), p = De(ie(n.datetimeFormats) ? n.datetimeFormats : { [o.value]: {} }), y = De(ie(n.numberFormats) ? n.numberFormats : { [o.value]: {} }), g = a ? r.missingWarn : me(n.missingWarn) || rr(n.missingWarn) ? n.missingWarn : !0, S = a ? r.fallbackWarn : me(n.fallbackWarn) || rr(n.fallbackWarn) ? n.fallbackWarn : !0, f = a ? r.fallbackRoot : me(n.fallbackRoot) ? n.fallbackRoot : !0, v = !!n.fallbackFormat, d = Oe(n.missing) ? n.missing : null, m = Oe(n.postTranslation) ? n.postTranslation : null, _ = a ? r.warnHtmlMessage : me(n.warnHtmlMessage) ? n.warnHtmlMessage : !0, E = !!n.escapeParameter, x = a ? r.modifiers : ie(n.modifiers) ? n.modifiers : {}, w = n.pluralRules || a && r.pluralRules;
  function L() {
    return [
      o.value,
      u.value,
      l.value,
      p.value,
      y.value
    ];
  }
  const Y = nt({
    get: () => i.value ? i.value.locale.value : o.value,
    set: (c) => {
      i.value && (i.value.locale.value = c), o.value = c;
    }
  }), ne = nt({
    get: () => i.value ? i.value.fallbackLocale.value : u.value,
    set: (c) => {
      i.value && (i.value.fallbackLocale.value = c), u.value = c;
    }
  }), T = nt(() => i.value ? i.value.messages.value : l.value), V = nt(() => p.value), B = nt(() => y.value);
  function M() {
    return i.value ? i.value.getPostTranslationHandler() : m;
  }
  function W(c) {
    i.value && i.value.setPostTranslationHandler(c);
  }
  function G() {
    return i.value ? i.value.getMissingHandler() : d;
  }
  function R(c) {
    i.value && i.value.setMissingHandler(c);
  }
  function D(c) {
    return L(), c();
  }
  function q(...c) {
    return i.value ? D(() => Reflect.apply(i.value.t, null, [...c])) : D(() => "");
  }
  function $(...c) {
    return i.value ? Reflect.apply(i.value.rt, null, [...c]) : "";
  }
  function X(...c) {
    return i.value ? D(() => Reflect.apply(i.value.d, null, [...c])) : D(() => "");
  }
  function Ce(...c) {
    return i.value ? D(() => Reflect.apply(i.value.n, null, [...c])) : D(() => "");
  }
  function wt(c) {
    return i.value ? i.value.tm(c) : {};
  }
  function or(c, k) {
    return i.value ? i.value.te(c, k) : !1;
  }
  function ur(c) {
    return i.value ? i.value.getLocaleMessage(c) : {};
  }
  function cr(c, k) {
    i.value && (i.value.setLocaleMessage(c, k), l.value[c] = k);
  }
  function dr(c, k) {
    i.value && i.value.mergeLocaleMessage(c, k);
  }
  function fr(c) {
    return i.value ? i.value.getDateTimeFormat(c) : {};
  }
  function hr(c, k) {
    i.value && (i.value.setDateTimeFormat(c, k), p.value[c] = k);
  }
  function At(c, k) {
    i.value && i.value.mergeDateTimeFormat(c, k);
  }
  function Rt(c) {
    return i.value ? i.value.getNumberFormat(c) : {};
  }
  function St(c, k) {
    i.value && (i.value.setNumberFormat(c, k), y.value[c] = k);
  }
  function Ft(c, k) {
    i.value && i.value.mergeNumberFormat(c, k);
  }
  const mr = {
    get id() {
      return i.value ? i.value.id : -1;
    },
    locale: Y,
    fallbackLocale: ne,
    messages: T,
    datetimeFormats: V,
    numberFormats: B,
    get inheritLocale() {
      return i.value ? i.value.inheritLocale : s;
    },
    set inheritLocale(c) {
      i.value && (i.value.inheritLocale = c);
    },
    get availableLocales() {
      return i.value ? i.value.availableLocales : Object.keys(l.value);
    },
    get modifiers() {
      return i.value ? i.value.modifiers : x;
    },
    get pluralRules() {
      return i.value ? i.value.pluralRules : w;
    },
    get isGlobal() {
      return i.value ? i.value.isGlobal : !1;
    },
    get missingWarn() {
      return i.value ? i.value.missingWarn : g;
    },
    set missingWarn(c) {
      i.value && (i.value.missingWarn = c);
    },
    get fallbackWarn() {
      return i.value ? i.value.fallbackWarn : S;
    },
    set fallbackWarn(c) {
      i.value && (i.value.missingWarn = c);
    },
    get fallbackRoot() {
      return i.value ? i.value.fallbackRoot : f;
    },
    set fallbackRoot(c) {
      i.value && (i.value.fallbackRoot = c);
    },
    get fallbackFormat() {
      return i.value ? i.value.fallbackFormat : v;
    },
    set fallbackFormat(c) {
      i.value && (i.value.fallbackFormat = c);
    },
    get warnHtmlMessage() {
      return i.value ? i.value.warnHtmlMessage : _;
    },
    set warnHtmlMessage(c) {
      i.value && (i.value.warnHtmlMessage = c);
    },
    get escapeParameter() {
      return i.value ? i.value.escapeParameter : E;
    },
    set escapeParameter(c) {
      i.value && (i.value.escapeParameter = c);
    },
    t: q,
    getPostTranslationHandler: M,
    setPostTranslationHandler: W,
    getMissingHandler: G,
    setMissingHandler: R,
    rt: $,
    d: X,
    n: Ce,
    tm: wt,
    te: or,
    getLocaleMessage: ur,
    setLocaleMessage: cr,
    mergeLocaleMessage: dr,
    getDateTimeFormat: fr,
    setDateTimeFormat: hr,
    mergeDateTimeFormat: At,
    getNumberFormat: Rt,
    setNumberFormat: St,
    mergeNumberFormat: Ft
  };
  function h(c) {
    c.locale.value = o.value, c.fallbackLocale.value = u.value, Object.keys(l.value).forEach((k) => {
      c.mergeLocaleMessage(k, l.value[k]);
    }), Object.keys(p.value).forEach((k) => {
      c.mergeDateTimeFormat(k, p.value[k]);
    }), Object.keys(y.value).forEach((k) => {
      c.mergeNumberFormat(k, y.value[k]);
    }), c.escapeParameter = E, c.fallbackFormat = v, c.fallbackRoot = f, c.fallbackWarn = S, c.missingWarn = g, c.warnHtmlMessage = _;
  }
  return ul(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw yt(ye.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const c = i.value = e.proxy.$i18n.__composer;
    t === "global" ? (o.value = c.locale.value, u.value = c.fallbackLocale.value, l.value = c.messages.value, p.value = c.datetimeFormats.value, y.value = c.numberFormats.value) : a && h(c);
  }), mr;
}
$o(nu);
qo(Do);
Ko(zi);
cu();
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = vr();
  e.__INTLIFY__ = !0, Fo(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Eu = {
  name: "PawLink",
  emits: ["clicked"],
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
    title: {
      type: String
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
        return [void 0, "action", "success", "danger", "warning"].includes(e);
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
    PawIcon: st
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
    }
  }
}, Cu = ["title"];
function Du(e, t, r, n, a, i) {
  const s = ve("PawIcon");
  return b(), O("button", {
    class: N(["flex items-center group max-w-full my-0", i.setClassNames()]),
    title: r.title,
    onClick: t[0] || (t[0] = (...o) => i.click && i.click(...o))
  }, [
    r.icon ? (b(), le(s, {
      key: 0,
      size: r.compact ? "sm" : r.size,
      outlined: r.outlined,
      class: N(i.setIconClassNames())
    }, {
      default: ee(() => [
        re(Z(r.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : A("", !0),
    a.hasSlot ? (b(), O("span", {
      key: 1,
      class: N(["truncate transition", i.setTextClassNames()])
    }, [
      Je(e.$slots, "default")
    ], 2)) : A("", !0)
  ], 10, Cu);
}
const us = /* @__PURE__ */ Me(Eu, [["render", Du]]), Tu = {
  name: "PawRadio",
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
  }
}, Nu = ["title"], Iu = { class: "block w-5 h-5 m-0.5 shrink-0 self-start pointer-events-none" }, Mu = ["checked", "disabled"], Lu = /* @__PURE__ */ U("label", { class: "block w-5 h-5 border-2 peer-checked:border-6 peer-checked:bg-white dark:peer-checked:peer-disabled:bg-gray-500 border-gray-400 peer-checked:border-action-500 dark:peer-checked:border-action-400 peer-disabled:border-gray-200 dark:peer-disabled:border-gray-600 rounded-full transition" }, null, -1);
function Pu(e, t, r, n, a, i) {
  return b(), O("label", {
    class: N(["inline-flex items-center max-w-full", {
      "cursor-pointer": !r.disabled,
      "pointer-events-none": r.disabled,
      "gap-1": r.size === "sm",
      "gap-2 p-1": r.size === "md",
      "gap-3 p-2": r.size === "lg"
    }]),
    title: r.title
  }, [
    U("span", Iu, [
      U("input", {
        type: "radio",
        onChange: t[0] || (t[0] = (...s) => i.change && i.change(...s)),
        checked: r.checked,
        disabled: r.disabled,
        class: "peer hidden"
      }, null, 40, Mu),
      Lu
    ]),
    e.$slots.default ? (b(), O("span", {
      key: 0,
      class: N(["text-md truncate transition", r.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"])
    }, [
      Je(e.$slots, "default")
    ], 2)) : A("", !0)
  ], 10, Nu);
}
const Au = /* @__PURE__ */ Me(Tu, [["render", Pu]]), Ru = 5, Fu = {
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
      return this.loadingResults ? Ru : (e = this.data) != null && e.length ? this.data : this.loadingCancelled ? [
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
    PawIcon: st,
    PawLink: us,
    PawCheckbox: bi,
    PawRadio: Au,
    PawChip: Rl,
    PawButton: Zr
  },
  setup() {
    const { t: e } = ir({
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
      return this.select ? e.checked && this.selected.length === 0 || this.selected.includes(e) : this.multiselect ? e.checked || this.selected.includes(e) : !1;
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
      document.addEventListener(n, function a(i) {
        if (!(i.target instanceof Element))
          return document.removeEventListener(n, a), !1;
        e !== i.target && !e.contains(i.target) && !Array.from(r).includes(i.target) && t(i) !== !1 && document.removeEventListener(n, a);
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
}, Yu = {
  key: 0,
  class: "flex flex-row"
}, Wu = {
  key: 0,
  class: "max-w-[80px] h-3.5 mr-1 bg-gray-400 loading-bubble"
}, Uu = {
  key: 1,
  class: "max-w-[48px] h-3.5 ml-auto bg-gray-400 loading-bubble"
}, Vu = /* @__PURE__ */ U("span", { class: "bg-gray-400 loading-bubble max-w-[24px] w-full h-2" }, null, -1), Bu = /* @__PURE__ */ U("span", { class: "bg-gray-400 loading-bubble w-4 h-4" }, null, -1), zu = [
  Vu,
  Bu
], Hu = {
  key: 1,
  class: "ml-2 mt-1"
}, ju = {
  key: 0,
  class: "max-w-[120px] h-2 bg-gray-400 mb-2 loading-bubble"
}, Gu = {
  key: 1,
  class: "max-w-[120px] h-2 bg-warning-400 mb-2 loading-bubble"
}, $u = {
  key: 2,
  class: "max-w-[120px] h-2 bg-danger-500 dark:bg-danger-400 loading-bubble"
}, qu = {
  key: 0,
  class: "flex flex-row"
}, Ku = ["title"], Xu = ["data-content"], Zu = ["placeholder", "readonly", "tabindex"], Ju = ["type", "placeholder", "readonly", "tabindex"], Qu = ["onMouseover"], ec = {
  key: 0,
  class: "flex justify-center py-2 bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-b-md shadow-box dark:shadow-box-dark"
}, tc = {
  key: 3,
  class: "ml-2"
}, rc = {
  key: 0,
  class: "prose-xs element-text italic text-gray-500 transition"
}, nc = {
  key: 1,
  class: "prose-xs element-text italic text-warning-500 transition"
}, ac = {
  key: 2,
  class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition"
};
function ic(e, t, r, n, a, i) {
  var S, f, v;
  const s = ve("PawIcon"), o = ve("PawCheckbox"), u = ve("PawRadio"), l = ve("PawChip"), p = ve("PawLink"), y = ve("PawCrazyInput"), g = ve("PawButton");
  return b(), O("div", {
    class: N(["relative flex", [
      {
        "gap-1": !r.readonly,
        "mb-44": this.dropdownWrap
      },
      `flex-${this.flexDir}`
    ]]),
    ref: "crazyInput"
  }, [
    r.loading ? (b(), O(ke, { key: 0 }, [
      r.label || r.info ? (b(), O("div", Yu, [
        r.label ? (b(), O("label", Wu)) : A("", !0),
        r.info ? (b(), O("span", Uu)) : A("", !0)
      ])) : A("", !0),
      U("div", {
        class: N(["flex flex-row items-center justify-between", [r.readonly ? "gap-3" : "gap-1"]])
      }, [
        r.readonly && (r.contextIcon || r.contextControl) ? (b(), O("div", {
          key: 0,
          class: N(["w-4 h-4 bg-gray-400 shrink-0 loading-bubble", [
            r.contextPosition === "top" && r.multiline ? "self-start" : "",
            r.contextPosition === "center" && r.multiline ? "self-center" : "",
            r.contextPosition === "bottom" && r.multiline ? "self-end" : ""
          ]])
        }, null, 2)) : A("", !0),
        U("div", {
          class: N(["bg-gray-400 loading-bubble mr-auto", [
            r.readonly ? r.multiline ? "h-8" : i.setLoaderMaxWidth() + " h-2" : r.multiline ? "h-24" : "h-[34px]"
          ]])
        }, null, 2),
        r.readonly ? (b(), O(ke, { key: 1 }, [
          r.extraLabel || r.extraIcon ? (b(), O("div", {
            key: 0,
            class: N(["flex flex-row items-center shrink-0 gap-3 w-full max-w-[52px] py-1", [
              r.extraPosition === "top" && r.multiline ? "self-start" : "",
              r.extraPosition === "center" && r.multiline ? "self-center" : "",
              r.extraPosition === "bottom" && r.multiline ? "self-end" : ""
            ]])
          }, zu, 2)) : A("", !0)
        ], 64)) : A("", !0)
      ], 2),
      r.notification || r.warning || r.error ? (b(), O("div", Hu, [
        r.notification ? (b(), O("div", ju)) : A("", !0),
        r.warning ? (b(), O("div", Gu)) : A("", !0),
        r.error ? (b(), O("div", $u)) : A("", !0)
      ])) : A("", !0)
    ], 64)) : (b(), O(ke, { key: 1 }, [
      r.label || r.info ? (b(), O("div", qu, [
        r.label ? (b(), O("label", {
          key: 0,
          onClick: t[0] || (t[0] = (...d) => i.focusTextInput && i.focusTextInput(...d)),
          class: "prose-xs element-text text-xs uppercase text-gray-500 cursor-pointer transition"
        }, Z(r.label), 1)) : A("", !0),
        r.info ? (b(), O("span", {
          key: 1,
          class: "ml-auto prose-xs element-text uppercase text-gray-500 cursor-help transition",
          title: r.title
        }, Z(r.info), 9, Ku)) : A("", !0)
      ])) : A("", !0),
      U("div", {
        class: N(["flex flex-row items-center", i.setContainerClassNames()]),
        onClick: t[13] || (t[13] = (...d) => i.click && i.click(...d))
      }, [
        r.contextIcon ? (b(), le(s, {
          key: 0,
          onClick: i.focusTextInput,
          size: "sm",
          outlined: r.contextIconOutlined,
          class: N(["text-gray-400 my-1 cursor-pointer", {
            "self-start": r.contextPosition === "top",
            "self-center": r.contextPosition === "center",
            "self-end": r.contextPosition === "bottom"
          }])
        }, {
          default: ee(() => [
            re(Z(r.contextIcon), 1)
          ]),
          _: 1
        }, 8, ["onClick", "outlined", "class"])) : r.contextControl === "checkbox" ? (b(), le(o, {
          key: 1,
          ref: "checkbox",
          onClick: i.focusTextInput,
          onChanged: i.change,
          size: "sm",
          class: N(["py-1", {
            "self-start": r.contextPosition === "top",
            "self-center": r.contextPosition === "center",
            "self-end": r.contextPosition === "bottom",
            "pointer-events-none": r.readonly
          }]),
          checked: r.contextChecked,
          disabled: r.contextDisabled
        }, null, 8, ["onClick", "onChanged", "class", "checked", "disabled"])) : r.contextControl === "radio" ? (b(), le(u, {
          key: 2,
          ref: "radio",
          onClick: i.focusTextInput,
          onChanged: i.change,
          size: "sm",
          class: N(["py-1", {
            "self-start": r.contextPosition === "top",
            "self-center": r.contextPosition === "center",
            "self-end": r.contextPosition === "bottom",
            "pointer-events-none": r.readonly
          }]),
          checked: r.contextChecked,
          disabled: r.contextDisabled
        }, null, 8, ["onClick", "onChanged", "class", "checked", "disabled"])) : A("", !0),
        U("div", {
          class: N(["w-full min-w-0 flex flex-wrap", {
            "cursor-pointer": !((S = r.item) != null && S.unselectable)
          }]),
          onClick: t[11] || (t[11] = (...d) => i.focusTextInput && i.focusTextInput(...d))
        }, [
          (b(!0), O(ke, null, Fe(a.chips, (d) => (b(), le(l, {
            key: d.id,
            onClicked: (m) => i.removeChip(d),
            size: "sm",
            icon: r.chipIcon,
            title: this.t("removeItem"),
            class: "shrink align-top justify-self-start ml-1 mt-1"
          }, {
            default: ee(() => [
              re(Z(d.value), 1)
            ]),
            _: 2
          }, 1032, ["onClicked", "icon", "title"]))), 128)),
          U("span", {
            class: N([
              r.multiline ? "min-h-[32px] before:content_ before:py-1.5 before:pl-2 before:pr-3 before:row-start-1 before:col-start-1 before:prose-md before:element-text before:invisible before:whitespace-pre-wrap" : "h-8",
              r.multiline ? "inline-grid" : "",
              r.multiselect ? "basis-20 grow" : "w-full"
            ]),
            "data-content": r.multiline ? a.inputValue : ""
          }, [
            r.multiline ? Tt((b(), O("textarea", {
              key: 0,
              "onUpdate:modelValue": t[1] || (t[1] = (d) => a.inputValue = d),
              ref: "textInput",
              class: N(["row-start-1 col-start-1 rounded-md break-words input-reset text-gray-900 dark:text-white transition", [
                r.extraLabel || r.extraIcon || r.readonly ? "pr-3" : "pr-2.25",
                r.readonly ? "cursor-pointer" : ""
              ]]),
              onInput: t[2] || (t[2] = (d) => {
                i.resize(d), i.type();
              }),
              onFocus: t[3] || (t[3] = (d) => i.outlineContainer(!0)),
              onBlur: t[4] || (t[4] = (d) => i.outlineContainer(!1)),
              onKeydown: t[5] || (t[5] = (d) => i.keyDown(d, r.item)),
              rows: "1",
              placeholder: r.placeholder,
              readonly: r.readonly,
              tabindex: r.readonly && !r.isOpen || (f = r.item) != null && f.unselectable ? -1 : null
            }, null, 42, Zu)), [
              [pi, a.inputValue]
            ]) : Tt((b(), O("input", {
              key: 1,
              type: r.secret ? "password" : "text",
              "onUpdate:modelValue": t[6] || (t[6] = (d) => a.inputValue = d),
              ref: "textInput",
              onInput: t[7] || (t[7] = (...d) => i.type && i.type(...d)),
              onFocus: t[8] || (t[8] = (d) => i.outlineContainer(!0)),
              onBlur: t[9] || (t[9] = (d) => i.outlineContainer(!1)),
              onKeydown: t[10] || (t[10] = (d) => i.keyDown(d, r.item)),
              class: N(["rounded-md input-reset text-gray-900 dark:text-white transition", {
                truncate: !r.multiline,
                "pr-3": r.extraLabel || r.extraIcon || r.readonly,
                "pointer-events-none selection:bg-transparent": r.readonly
              }]),
              placeholder: r.placeholder,
              readonly: r.readonly,
              tabindex: r.readonly && !r.isOpen || (v = r.item) != null && v.unselectable ? -1 : null
            }, null, 42, Ju)), [
              [dl, a.inputValue]
            ])
          ], 10, Xu)
        ], 2),
        r.extraLabel || r.extraIcon || r.data ? (b(), O("span", {
          key: 3,
          class: N(["flex flex-row shrink-0 items-center py-1", {
            "self-start": r.extraPosition === "top",
            "self-center": r.extraPosition === "center",
            "self-end": r.extraPosition === "bottom"
          }])
        }, [
          r.extraLabel ? (b(), O("span", {
            key: 0,
            class: "mr-1 text-xs text-gray-400 cursor-pointer",
            onClick: t[12] || (t[12] = (...d) => i.focusTextInput && i.focusTextInput(...d))
          }, Z(r.extraLabel), 1)) : A("", !0),
          r.extraIcon ? (b(), le(s, {
            key: 1,
            onClick: i.focusTextInput,
            size: "sm",
            class: N(["text-gray-400 opacity-100 cursor-pointer transition", {
              "opacity-0": a.showingResults
            }]),
            outlined: r.extraIconOutlined
          }, {
            default: ee(() => [
              re(Z(r.extraIcon), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class", "outlined"])) : A("", !0),
          r.data ? Tt((b(), le(p, {
            key: 2,
            onClicked: i.closeAction,
            class: N([[
              a.showingResults || a.inputValue ? "opacity-100" : "opacity-0 pointer-events-none"
            ], "transition"]),
            size: "sm",
            icon: r.select ? "close" : r.multiselect ? a.showingResults ? "unfold_less" : "unfold_more" : "",
            tabindex: a.showingResults ? null : -1
          }, null, 8, ["onClicked", "class", "icon", "tabindex"])), [
            [_r, a.showingResults || a.inputValue || !r.extraLabel && !r.extraIcon]
          ]) : A("", !0)
        ], 2)) : A("", !0)
      ], 2),
      r.data ? (b(), O("div", {
        key: 1,
        class: N([{
          "opacity-100": a.showingResults
        }, "absolute z-20 opacity-0 bottom-1 w-full translate-y-full h-1 border-x border-gray-200 dark:border-gray-600 bg-gray-200 dark:bg-gray-600 transition"])
      }, null, 2)) : A("", !0),
      r.data ? (b(), O("div", {
        key: 2,
        class: N([[
          a.showingResults ? "opacity-100" : "opacity-0 pointer-events-none"
        ], "absolute z-10 bottom-0 w-full max-h-[181px] translate-y-full rounded-md rounded-t-none transition"])
      }, [
        U("div", {
          class: N(["max-h-[inherit] overflow-y-auto border-gray-300 dark:border-gray-700 shadow-box dark:shadow-box-dark", r.addLabel ? "rounded-b-none" : "rounded-b-md"])
        }, [
          (b(!0), O(ke, null, Fe(i.dropdownItems, (d) => (b(), O("div", {
            key: d,
            onMouseover: (m) => i.optionHovered(d),
            class: N(["transition", [
              !d.unselectable && !a.loadingResults ? "hover:bg-white dark:hover:bg-gray-800 cursor-pointer" : "",
              d.id === a.itemIdFocused && !d.unselectable && !a.loadingResults ? "bg-white dark:bg-gray-800" : "bg-gray-100 dark:bg-gray-700"
            ]])
          }, [
            _e(y, {
              class: N({
                "p-2 gap-1": a.loadingResults
              }),
              ref_for: !0,
              ref: `OPTION-${i.getOptionId(d)}`,
              onClick: (m) => i.confirmSelection(d),
              onChanged: (m) => d.unselectable ? null : i.itemSelected(d, m),
              onOptionFocused: (m, _) => d.unselectable ? null : i.focusChange(m, _),
              onOptionSelected: (m, _) => d.unselectable ? null : i.itemSelected(m, _),
              onOptionMoved: (m, _) => d.unselectable ? null : i.moveOption(m, _),
              onOptionTyped: t[14] || (t[14] = (m) => i.optionTyped(m)),
              onDropdownClosed: (m) => d.unselectable ? null : i.closeDropdown(),
              "context-control": d.unselectable ? null : r.select ? "radio" : r.multiselect ? "checkbox" : null,
              "context-checked": d.unselectable ? null : i.isItemChecked(d),
              "context-disabled": d.unselectable ? null : d.disabled,
              "context-position": d.unselectable ? r.contextPosition : d.contextPosition,
              "extra-label": a.loadingResults ? r.extraLabel : d.extraLabel,
              "extra-icon": a.loadingResults ? r.extraIcon : d.extraIcon,
              "extra-icon-outlined": d.extraIconOutlined,
              "extra-position": d.extraPosition,
              multiline: a.loadingResults ? r.multiline : d.multiline,
              "is-open": a.showingResults,
              item: d,
              loading: a.loadingResults,
              readonly: ""
            }, {
              default: ee(() => [
                re(Z(d.value), 1)
              ]),
              _: 2
            }, 1032, ["class", "onClick", "onChanged", "onOptionFocused", "onOptionSelected", "onOptionMoved", "onDropdownClosed", "context-control", "context-checked", "context-disabled", "context-position", "extra-label", "extra-icon", "extra-icon-outlined", "extra-position", "multiline", "is-open", "item", "loading"])
          ], 42, Qu))), 128))
        ], 2),
        r.addLabel && !a.loadingResults ? (b(), O("div", ec, [
          _e(g, {
            size: "sm",
            icon: r.addIcon,
            onClicked: i.add
          }, {
            default: ee(() => [
              re(Z(r.addLabel), 1)
            ]),
            _: 1
          }, 8, ["icon", "onClicked"])
        ])) : A("", !0)
      ], 2)) : A("", !0),
      r.notification || r.warning || r.error ? (b(), O("div", tc, [
        r.notification ? (b(), O("div", rc, Z(r.notification), 1)) : A("", !0),
        r.warning ? (b(), O("div", nc, Z(r.warning), 1)) : A("", !0),
        r.error ? (b(), O("div", ac, Z(r.error), 1)) : A("", !0)
      ])) : A("", !0)
    ], 64))
  ], 2);
}
const sc = /* @__PURE__ */ Me(Fu, [["render", ic]]);
var ii = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, i; n < a; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}, lc = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.name = t, this.version = r, this.os = n, this.type = "browser";
    }
    return e;
  }()
), oc = (
  /** @class */
  function() {
    function e(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return e;
  }()
), uc = (
  /** @class */
  function() {
    function e(t, r, n, a) {
      this.name = t, this.version = r, this.os = n, this.bot = a, this.type = "bot-device";
    }
    return e;
  }()
), cc = (
  /** @class */
  function() {
    function e() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return e;
  }()
), dc = (
  /** @class */
  function() {
    function e() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return e;
  }()
), fc = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, hc = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, si = 3, mc = [
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
  ["searchbot", fc]
], li = [
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
function gc(e) {
  return e ? oi(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new dc() : typeof navigator < "u" ? oi(navigator.userAgent) : bc();
}
function pc(e) {
  return e !== "" && mc.reduce(function(t, r) {
    var n = r[0], a = r[1];
    if (t)
      return t;
    var i = a.exec(e);
    return !!i && [n, i];
  }, !1);
}
function oi(e) {
  var t = pc(e);
  if (!t)
    return null;
  var r = t[0], n = t[1];
  if (r === "searchbot")
    return new cc();
  var a = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  a ? a.length < si && (a = ii(ii([], a, !0), _c(si - a.length), !0)) : a = [];
  var i = a.join("."), s = yc(e), o = hc.exec(e);
  return o && o[1] ? new uc(r, i, s, o[1]) : new lc(r, i, s);
}
function yc(e) {
  for (var t = 0, r = li.length; t < r; t++) {
    var n = li[t], a = n[0], i = n[1], s = i.exec(e);
    if (s)
      return a;
  }
  return null;
}
function bc() {
  var e = typeof process < "u" && process.version;
  return e ? new oc(process.version.slice(1)) : null;
}
function _c(e) {
  for (var t = [], r = 0; r < e; r++)
    t.push("0");
  return t;
}
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var cs;
function F() {
  return cs.apply(null, arguments);
}
function vc(e) {
  cs = e;
}
function Xe(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function zt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function oe(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function la(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (oe(e, t))
      return !1;
  return !0;
}
function Ue(e) {
  return e === void 0;
}
function _t(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Nr(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function ds(e, t) {
  var r = [], n, a = e.length;
  for (n = 0; n < a; ++n)
    r.push(t(e[n], n));
  return r;
}
function Ct(e, t) {
  for (var r in t)
    oe(t, r) && (e[r] = t[r]);
  return oe(t, "toString") && (e.toString = t.toString), oe(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function lt(e, t, r, n) {
  return As(e, t, r, n, !0).utc();
}
function kc() {
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
function te(e) {
  return e._pf == null && (e._pf = kc()), e._pf;
}
var Vn;
Array.prototype.some ? Vn = Array.prototype.some : Vn = function(e) {
  var t = Object(this), r = t.length >>> 0, n;
  for (n = 0; n < r; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function oa(e) {
  if (e._isValid == null) {
    var t = te(e), r = Vn.call(t.parsedDateParts, function(a) {
      return a != null;
    }), n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
    if (e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = n;
    else
      return n;
  }
  return e._isValid;
}
function on(e) {
  var t = lt(NaN);
  return e != null ? Ct(te(t), e) : te(t).userInvalidated = !0, t;
}
var ui = F.momentProperties = [], Cn = !1;
function ua(e, t) {
  var r, n, a, i = ui.length;
  if (Ue(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Ue(t._i) || (e._i = t._i), Ue(t._f) || (e._f = t._f), Ue(t._l) || (e._l = t._l), Ue(t._strict) || (e._strict = t._strict), Ue(t._tzm) || (e._tzm = t._tzm), Ue(t._isUTC) || (e._isUTC = t._isUTC), Ue(t._offset) || (e._offset = t._offset), Ue(t._pf) || (e._pf = te(t)), Ue(t._locale) || (e._locale = t._locale), i > 0)
    for (r = 0; r < i; r++)
      n = ui[r], a = t[n], Ue(a) || (e[n] = a);
  return e;
}
function Ir(e) {
  ua(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Cn === !1 && (Cn = !0, F.updateOffset(this), Cn = !1);
}
function Ze(e) {
  return e instanceof Ir || e != null && e._isAMomentObject != null;
}
function fs(e) {
  F.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function $e(e, t) {
  var r = !0;
  return Ct(function() {
    if (F.deprecationHandler != null && F.deprecationHandler(null, e), r) {
      var n = [], a, i, s, o = arguments.length;
      for (i = 0; i < o; i++) {
        if (a = "", typeof arguments[i] == "object") {
          a += `
[` + i + "] ";
          for (s in arguments[0])
            oe(arguments[0], s) && (a += s + ": " + arguments[0][s] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[i];
        n.push(a);
      }
      fs(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var ci = {};
function hs(e, t) {
  F.deprecationHandler != null && F.deprecationHandler(e, t), ci[e] || (fs(t), ci[e] = !0);
}
F.suppressDeprecationWarnings = !1;
F.deprecationHandler = null;
function ot(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function xc(e) {
  var t, r;
  for (r in e)
    oe(e, r) && (t = e[r], ot(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Bn(e, t) {
  var r = Ct({}, e), n;
  for (n in t)
    oe(t, n) && (zt(e[n]) && zt(t[n]) ? (r[n] = {}, Ct(r[n], e[n]), Ct(r[n], t[n])) : t[n] != null ? r[n] = t[n] : delete r[n]);
  for (n in e)
    oe(e, n) && !oe(t, n) && zt(e[n]) && (r[n] = Ct({}, r[n]));
  return r;
}
function ca(e) {
  e != null && this.set(e);
}
var zn;
Object.keys ? zn = Object.keys : zn = function(e) {
  var t, r = [];
  for (t in e)
    oe(e, t) && r.push(t);
  return r;
};
var wc = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Sc(e, t, r) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return ot(n) ? n.call(t, r) : n;
}
function it(e, t, r) {
  var n = "" + Math.abs(e), a = t - n.length, i = e >= 0;
  return (i ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + n;
}
var da = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Yr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Dn = {}, Qt = {};
function K(e, t, r, n) {
  var a = n;
  typeof n == "string" && (a = function() {
    return this[n]();
  }), e && (Qt[e] = a), t && (Qt[t[0]] = function() {
    return it(a.apply(this, arguments), t[1], t[2]);
  }), r && (Qt[r] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function Oc(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Ec(e) {
  var t = e.match(da), r, n;
  for (r = 0, n = t.length; r < n; r++)
    Qt[t[r]] ? t[r] = Qt[t[r]] : t[r] = Oc(t[r]);
  return function(a) {
    var i = "", s;
    for (s = 0; s < n; s++)
      i += ot(t[s]) ? t[s].call(a, e) : t[s];
    return i;
  };
}
function Ur(e, t) {
  return e.isValid() ? (t = ms(t, e.localeData()), Dn[t] = Dn[t] || Ec(t), Dn[t](e)) : e.localeData().invalidDate();
}
function ms(e, t) {
  var r = 5;
  function n(a) {
    return t.longDateFormat(a) || a;
  }
  for (Yr.lastIndex = 0; r >= 0 && Yr.test(e); )
    e = e.replace(
      Yr,
      n
    ), Yr.lastIndex = 0, r -= 1;
  return e;
}
var Cc = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Dc(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(da).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var Tc = "Invalid date";
function Nc() {
  return this._invalidDate;
}
var Ic = "%d", Mc = /\d{1,2}/;
function Lc(e) {
  return this._ordinal.replace("%d", e);
}
var Pc = {
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
function Ac(e, t, r, n) {
  var a = this._relativeTime[r];
  return ot(a) ? a(e, t, r, n) : a.replace(/%d/i, e);
}
function Rc(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return ot(r) ? r(t) : r.replace(/%s/i, t);
}
var xr = {};
function Le(e, t) {
  var r = e.toLowerCase();
  xr[r] = xr[r + "s"] = xr[t] = e;
}
function qe(e) {
  return typeof e == "string" ? xr[e] || xr[e.toLowerCase()] : void 0;
}
function fa(e) {
  var t = {}, r, n;
  for (n in e)
    oe(e, n) && (r = qe(n), r && (t[r] = e[n]));
  return t;
}
var gs = {};
function Pe(e, t) {
  gs[e] = t;
}
function Fc(e) {
  var t = [], r;
  for (r in e)
    oe(e, r) && t.push({ unit: r, priority: gs[r] });
  return t.sort(function(n, a) {
    return n.priority - a.priority;
  }), t;
}
function un(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function Ge(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function ae(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = Ge(t)), r;
}
function sr(e, t) {
  return function(r) {
    return r != null ? (ps(this, e, r), F.updateOffset(this, t), this) : Hr(this, e);
  };
}
function Hr(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function ps(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && un(e.year()) && e.month() === 1 && e.date() === 29 ? (r = ae(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    gn(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function Yc(e) {
  return e = qe(e), ot(this[e]) ? this[e]() : this;
}
function Wc(e, t) {
  if (typeof e == "object") {
    e = fa(e);
    var r = Fc(e), n, a = r.length;
    for (n = 0; n < a; n++)
      this[r[n].unit](e[r[n].unit]);
  } else if (e = qe(e), ot(this[e]))
    return this[e](t);
  return this;
}
var ys = /\d/, je = /\d\d/, bs = /\d{3}/, ha = /\d{4}/, cn = /[+-]?\d{6}/, pe = /\d\d?/, _s = /\d\d\d\d?/, vs = /\d\d\d\d\d\d?/, dn = /\d{1,3}/, ma = /\d{1,4}/, fn = /[+-]?\d{1,6}/, lr = /\d+/, hn = /[+-]?\d+/, Uc = /Z|[+-]\d\d:?\d\d/gi, mn = /Z|[+-]\d\d(?::?\d\d)?/gi, Vc = /[+-]?\d+(\.\d{1,3})?/, Mr = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, jr;
jr = {};
function H(e, t, r) {
  jr[e] = ot(t) ? t : function(n, a) {
    return n && r ? r : t;
  };
}
function Bc(e, t) {
  return oe(jr, e) ? jr[e](t._strict, t._locale) : new RegExp(zc(e));
}
function zc(e) {
  return ze(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, n, a, i) {
        return r || n || a || i;
      }
    )
  );
}
function ze(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Hn = {};
function de(e, t) {
  var r, n = t, a;
  for (typeof e == "string" && (e = [e]), _t(t) && (n = function(i, s) {
    s[t] = ae(i);
  }), a = e.length, r = 0; r < a; r++)
    Hn[e[r]] = n;
}
function Lr(e, t) {
  de(e, function(r, n, a, i) {
    a._w = a._w || {}, t(r, a._w, a, i);
  });
}
function Hc(e, t, r) {
  t != null && oe(Hn, e) && Hn[e](t, r._a, r, e);
}
var Ie = 0, gt = 1, at = 2, Ee = 3, Ke = 4, pt = 5, Vt = 6, jc = 7, Gc = 8;
function $c(e, t) {
  return (e % t + t) % t;
}
var xe;
Array.prototype.indexOf ? xe = Array.prototype.indexOf : xe = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function gn(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = $c(t, 12);
  return e += (t - r) / 12, r === 1 ? un(e) ? 29 : 28 : 31 - r % 7 % 2;
}
K("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
K("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
K("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
Le("month", "M");
Pe("month", 8);
H("M", pe);
H("MM", pe, je);
H("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
H("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
de(["M", "MM"], function(e, t) {
  t[gt] = ae(e) - 1;
});
de(["MMM", "MMMM"], function(e, t, r, n) {
  var a = r._locale.monthsParse(e, n, r._strict);
  a != null ? t[gt] = a : te(r).invalidMonth = e;
});
var qc = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), ks = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), xs = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Kc = Mr, Xc = Mr;
function Zc(e, t) {
  return e ? Xe(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || xs).test(t) ? "format" : "standalone"][e.month()] : Xe(this._months) ? this._months : this._months.standalone;
}
function Jc(e, t) {
  return e ? Xe(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[xs.test(t) ? "format" : "standalone"][e.month()] : Xe(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Qc(e, t, r) {
  var n, a, i, s = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      i = lt([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (a = xe.call(this._shortMonthsParse, s), a !== -1 ? a : null) : (a = xe.call(this._longMonthsParse, s), a !== -1 ? a : null) : t === "MMM" ? (a = xe.call(this._shortMonthsParse, s), a !== -1 ? a : (a = xe.call(this._longMonthsParse, s), a !== -1 ? a : null)) : (a = xe.call(this._longMonthsParse, s), a !== -1 ? a : (a = xe.call(this._shortMonthsParse, s), a !== -1 ? a : null));
}
function ed(e, t, r) {
  var n, a, i;
  if (this._monthsParseExact)
    return Qc.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (a = lt([2e3, n]), r && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[n] && (i = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (r && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!r && this._monthsParse[n].test(e))
      return n;
  }
}
function ws(e, t) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = ae(t);
    else if (t = e.localeData().monthsParse(t), !_t(t))
      return e;
  }
  return r = Math.min(e.date(), gn(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function Ss(e) {
  return e != null ? (ws(this, e), F.updateOffset(this, !0), this) : Hr(this, "Month");
}
function td() {
  return gn(this.year(), this.month());
}
function rd(e) {
  return this._monthsParseExact ? (oe(this, "_monthsRegex") || Os.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (oe(this, "_monthsShortRegex") || (this._monthsShortRegex = Kc), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function nd(e) {
  return this._monthsParseExact ? (oe(this, "_monthsRegex") || Os.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (oe(this, "_monthsRegex") || (this._monthsRegex = Xc), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Os() {
  function e(s, o) {
    return o.length - s.length;
  }
  var t = [], r = [], n = [], a, i;
  for (a = 0; a < 12; a++)
    i = lt([2e3, a]), t.push(this.monthsShort(i, "")), r.push(this.months(i, "")), n.push(this.months(i, "")), n.push(this.monthsShort(i, ""));
  for (t.sort(e), r.sort(e), n.sort(e), a = 0; a < 12; a++)
    t[a] = ze(t[a]), r[a] = ze(r[a]);
  for (a = 0; a < 24; a++)
    n[a] = ze(n[a]);
  this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
K("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? it(e, 4) : "+" + e;
});
K(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
K(0, ["YYYY", 4], 0, "year");
K(0, ["YYYYY", 5], 0, "year");
K(0, ["YYYYYY", 6, !0], 0, "year");
Le("year", "y");
Pe("year", 1);
H("Y", hn);
H("YY", pe, je);
H("YYYY", ma, ha);
H("YYYYY", fn, cn);
H("YYYYYY", fn, cn);
de(["YYYYY", "YYYYYY"], Ie);
de("YYYY", function(e, t) {
  t[Ie] = e.length === 2 ? F.parseTwoDigitYear(e) : ae(e);
});
de("YY", function(e, t) {
  t[Ie] = F.parseTwoDigitYear(e);
});
de("Y", function(e, t) {
  t[Ie] = parseInt(e, 10);
});
function wr(e) {
  return un(e) ? 366 : 365;
}
F.parseTwoDigitYear = function(e) {
  return ae(e) + (ae(e) > 68 ? 1900 : 2e3);
};
var Es = sr("FullYear", !0);
function ad() {
  return un(this.year());
}
function id(e, t, r, n, a, i, s) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, r, n, a, i, s), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, r, n, a, i, s), o;
}
function Or(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Gr(e, t, r) {
  var n = 7 + t - r, a = (7 + Or(e, 0, n).getUTCDay() - t) % 7;
  return -a + n - 1;
}
function Cs(e, t, r, n, a) {
  var i = (7 + r - n) % 7, s = Gr(e, n, a), o = 1 + 7 * (t - 1) + i + s, u, l;
  return o <= 0 ? (u = e - 1, l = wr(u) + o) : o > wr(e) ? (u = e + 1, l = o - wr(e)) : (u = e, l = o), {
    year: u,
    dayOfYear: l
  };
}
function Er(e, t, r) {
  var n = Gr(e.year(), t, r), a = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, i, s;
  return a < 1 ? (s = e.year() - 1, i = a + bt(s, t, r)) : a > bt(e.year(), t, r) ? (i = a - bt(e.year(), t, r), s = e.year() + 1) : (s = e.year(), i = a), {
    week: i,
    year: s
  };
}
function bt(e, t, r) {
  var n = Gr(e, t, r), a = Gr(e + 1, t, r);
  return (wr(e) - n + a) / 7;
}
K("w", ["ww", 2], "wo", "week");
K("W", ["WW", 2], "Wo", "isoWeek");
Le("week", "w");
Le("isoWeek", "W");
Pe("week", 5);
Pe("isoWeek", 5);
H("w", pe);
H("ww", pe, je);
H("W", pe);
H("WW", pe, je);
Lr(
  ["w", "ww", "W", "WW"],
  function(e, t, r, n) {
    t[n.substr(0, 1)] = ae(e);
  }
);
function sd(e) {
  return Er(e, this._week.dow, this._week.doy).week;
}
var ld = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function od() {
  return this._week.dow;
}
function ud() {
  return this._week.doy;
}
function cd(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function dd(e) {
  var t = Er(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
K("d", 0, "do", "day");
K("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
K("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
K("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
K("e", 0, 0, "weekday");
K("E", 0, 0, "isoWeekday");
Le("day", "d");
Le("weekday", "e");
Le("isoWeekday", "E");
Pe("day", 11);
Pe("weekday", 11);
Pe("isoWeekday", 11);
H("d", pe);
H("e", pe);
H("E", pe);
H("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
H("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
H("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Lr(["dd", "ddd", "dddd"], function(e, t, r, n) {
  var a = r._locale.weekdaysParse(e, n, r._strict);
  a != null ? t.d = a : te(r).invalidWeekday = e;
});
Lr(["d", "e", "E"], function(e, t, r, n) {
  t[n] = ae(e);
});
function fd(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function hd(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function ga(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var md = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Ds = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), gd = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), pd = Mr, yd = Mr, bd = Mr;
function _d(e, t) {
  var r = Xe(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? ga(r, this._week.dow) : e ? r[e.day()] : r;
}
function vd(e) {
  return e === !0 ? ga(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function kd(e) {
  return e === !0 ? ga(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function xd(e, t, r) {
  var n, a, i, s = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      i = lt([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(i, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (a = xe.call(this._weekdaysParse, s), a !== -1 ? a : null) : t === "ddd" ? (a = xe.call(this._shortWeekdaysParse, s), a !== -1 ? a : null) : (a = xe.call(this._minWeekdaysParse, s), a !== -1 ? a : null) : t === "dddd" ? (a = xe.call(this._weekdaysParse, s), a !== -1 || (a = xe.call(this._shortWeekdaysParse, s), a !== -1) ? a : (a = xe.call(this._minWeekdaysParse, s), a !== -1 ? a : null)) : t === "ddd" ? (a = xe.call(this._shortWeekdaysParse, s), a !== -1 || (a = xe.call(this._weekdaysParse, s), a !== -1) ? a : (a = xe.call(this._minWeekdaysParse, s), a !== -1 ? a : null)) : (a = xe.call(this._minWeekdaysParse, s), a !== -1 || (a = xe.call(this._weekdaysParse, s), a !== -1) ? a : (a = xe.call(this._shortWeekdaysParse, s), a !== -1 ? a : null));
}
function wd(e, t, r) {
  var n, a, i;
  if (this._weekdaysParseExact)
    return xd.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (a = lt([2e3, 1]).day(n), r && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (i = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (r && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (r && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!r && this._weekdaysParse[n].test(e))
      return n;
  }
}
function Sd(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = fd(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Od(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Ed(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = hd(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Cd(e) {
  return this._weekdaysParseExact ? (oe(this, "_weekdaysRegex") || pa.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (oe(this, "_weekdaysRegex") || (this._weekdaysRegex = pd), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Dd(e) {
  return this._weekdaysParseExact ? (oe(this, "_weekdaysRegex") || pa.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (oe(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = yd), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Td(e) {
  return this._weekdaysParseExact ? (oe(this, "_weekdaysRegex") || pa.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (oe(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = bd), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function pa() {
  function e(p, y) {
    return y.length - p.length;
  }
  var t = [], r = [], n = [], a = [], i, s, o, u, l;
  for (i = 0; i < 7; i++)
    s = lt([2e3, 1]).day(i), o = ze(this.weekdaysMin(s, "")), u = ze(this.weekdaysShort(s, "")), l = ze(this.weekdays(s, "")), t.push(o), r.push(u), n.push(l), a.push(o), a.push(u), a.push(l);
  t.sort(e), r.sort(e), n.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
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
function ya() {
  return this.hours() % 12 || 12;
}
function Nd() {
  return this.hours() || 24;
}
K("H", ["HH", 2], 0, "hour");
K("h", ["hh", 2], 0, ya);
K("k", ["kk", 2], 0, Nd);
K("hmm", 0, 0, function() {
  return "" + ya.apply(this) + it(this.minutes(), 2);
});
K("hmmss", 0, 0, function() {
  return "" + ya.apply(this) + it(this.minutes(), 2) + it(this.seconds(), 2);
});
K("Hmm", 0, 0, function() {
  return "" + this.hours() + it(this.minutes(), 2);
});
K("Hmmss", 0, 0, function() {
  return "" + this.hours() + it(this.minutes(), 2) + it(this.seconds(), 2);
});
function Ts(e, t) {
  K(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Ts("a", !0);
Ts("A", !1);
Le("hour", "h");
Pe("hour", 13);
function Ns(e, t) {
  return t._meridiemParse;
}
H("a", Ns);
H("A", Ns);
H("H", pe);
H("h", pe);
H("k", pe);
H("HH", pe, je);
H("hh", pe, je);
H("kk", pe, je);
H("hmm", _s);
H("hmmss", vs);
H("Hmm", _s);
H("Hmmss", vs);
de(["H", "HH"], Ee);
de(["k", "kk"], function(e, t, r) {
  var n = ae(e);
  t[Ee] = n === 24 ? 0 : n;
});
de(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
de(["h", "hh"], function(e, t, r) {
  t[Ee] = ae(e), te(r).bigHour = !0;
});
de("hmm", function(e, t, r) {
  var n = e.length - 2;
  t[Ee] = ae(e.substr(0, n)), t[Ke] = ae(e.substr(n)), te(r).bigHour = !0;
});
de("hmmss", function(e, t, r) {
  var n = e.length - 4, a = e.length - 2;
  t[Ee] = ae(e.substr(0, n)), t[Ke] = ae(e.substr(n, 2)), t[pt] = ae(e.substr(a)), te(r).bigHour = !0;
});
de("Hmm", function(e, t, r) {
  var n = e.length - 2;
  t[Ee] = ae(e.substr(0, n)), t[Ke] = ae(e.substr(n));
});
de("Hmmss", function(e, t, r) {
  var n = e.length - 4, a = e.length - 2;
  t[Ee] = ae(e.substr(0, n)), t[Ke] = ae(e.substr(n, 2)), t[pt] = ae(e.substr(a));
});
function Id(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Md = /[ap]\.?m?\.?/i, Ld = sr("Hours", !0);
function Pd(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var Is = {
  calendar: wc,
  longDateFormat: Cc,
  invalidDate: Tc,
  ordinal: Ic,
  dayOfMonthOrdinalParse: Mc,
  relativeTime: Pc,
  months: qc,
  monthsShort: ks,
  week: ld,
  weekdays: md,
  weekdaysMin: gd,
  weekdaysShort: Ds,
  meridiemParse: Md
}, be = {}, yr = {}, Cr;
function Ad(e, t) {
  var r, n = Math.min(e.length, t.length);
  for (r = 0; r < n; r += 1)
    if (e[r] !== t[r])
      return r;
  return n;
}
function di(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Rd(e) {
  for (var t = 0, r, n, a, i; t < e.length; ) {
    for (i = di(e[t]).split("-"), r = i.length, n = di(e[t + 1]), n = n ? n.split("-") : null; r > 0; ) {
      if (a = pn(i.slice(0, r).join("-")), a)
        return a;
      if (n && n.length >= r && Ad(i, n) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return Cr;
}
function Fd(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function pn(e) {
  var t = null, r;
  if (be[e] === void 0 && typeof module < "u" && module && module.exports && Fd(e))
    try {
      t = Cr._abbr, r = require, r("./locale/" + e), Nt(t);
    } catch {
      be[e] = null;
    }
  return be[e];
}
function Nt(e, t) {
  var r;
  return e && (Ue(t) ? r = kt(e) : r = ba(e, t), r ? Cr = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Cr._abbr;
}
function ba(e, t) {
  if (t !== null) {
    var r, n = Is;
    if (t.abbr = e, be[e] != null)
      hs(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = be[e]._config;
    else if (t.parentLocale != null)
      if (be[t.parentLocale] != null)
        n = be[t.parentLocale]._config;
      else if (r = pn(t.parentLocale), r != null)
        n = r._config;
      else
        return yr[t.parentLocale] || (yr[t.parentLocale] = []), yr[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return be[e] = new ca(Bn(n, t)), yr[e] && yr[e].forEach(function(a) {
      ba(a.name, a.config);
    }), Nt(e), be[e];
  } else
    return delete be[e], null;
}
function Yd(e, t) {
  if (t != null) {
    var r, n, a = Is;
    be[e] != null && be[e].parentLocale != null ? be[e].set(Bn(be[e]._config, t)) : (n = pn(e), n != null && (a = n._config), t = Bn(a, t), n == null && (t.abbr = e), r = new ca(t), r.parentLocale = be[e], be[e] = r), Nt(e);
  } else
    be[e] != null && (be[e].parentLocale != null ? (be[e] = be[e].parentLocale, e === Nt() && Nt(e)) : be[e] != null && delete be[e]);
  return be[e];
}
function kt(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Cr;
  if (!Xe(e)) {
    if (t = pn(e), t)
      return t;
    e = [e];
  }
  return Rd(e);
}
function Wd() {
  return zn(be);
}
function _a(e) {
  var t, r = e._a;
  return r && te(e).overflow === -2 && (t = r[gt] < 0 || r[gt] > 11 ? gt : r[at] < 1 || r[at] > gn(r[Ie], r[gt]) ? at : r[Ee] < 0 || r[Ee] > 24 || r[Ee] === 24 && (r[Ke] !== 0 || r[pt] !== 0 || r[Vt] !== 0) ? Ee : r[Ke] < 0 || r[Ke] > 59 ? Ke : r[pt] < 0 || r[pt] > 59 ? pt : r[Vt] < 0 || r[Vt] > 999 ? Vt : -1, te(e)._overflowDayOfYear && (t < Ie || t > at) && (t = at), te(e)._overflowWeeks && t === -1 && (t = jc), te(e)._overflowWeekday && t === -1 && (t = Gc), te(e).overflow = t), e;
}
var Ud = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Vd = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Bd = /Z|[+-]\d\d(?::?\d\d)?/, Wr = [
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
], Tn = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], zd = /^\/?Date\((-?\d+)/i, Hd = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, jd = {
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
function Ms(e) {
  var t, r, n = e._i, a = Ud.exec(n) || Vd.exec(n), i, s, o, u, l = Wr.length, p = Tn.length;
  if (a) {
    for (te(e).iso = !0, t = 0, r = l; t < r; t++)
      if (Wr[t][1].exec(a[1])) {
        s = Wr[t][0], i = Wr[t][2] !== !1;
        break;
      }
    if (s == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, r = p; t < r; t++)
        if (Tn[t][1].exec(a[3])) {
          o = (a[2] || " ") + Tn[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && o != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (Bd.exec(a[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = s + (o || "") + (u || ""), ka(e);
  } else
    e._isValid = !1;
}
function Gd(e, t, r, n, a, i) {
  var s = [
    $d(e),
    ks.indexOf(t),
    parseInt(r, 10),
    parseInt(n, 10),
    parseInt(a, 10)
  ];
  return i && s.push(parseInt(i, 10)), s;
}
function $d(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function qd(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Kd(e, t, r) {
  if (e) {
    var n = Ds.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== a)
      return te(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function Xd(e, t, r) {
  if (e)
    return jd[e];
  if (t)
    return 0;
  var n = parseInt(r, 10), a = n % 100, i = (n - a) / 100;
  return i * 60 + a;
}
function Ls(e) {
  var t = Hd.exec(qd(e._i)), r;
  if (t) {
    if (r = Gd(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Kd(t[1], r, e))
      return;
    e._a = r, e._tzm = Xd(t[8], t[9], t[10]), e._d = Or.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), te(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Zd(e) {
  var t = zd.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Ms(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Ls(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : F.createFromInputFallback(e);
}
F.createFromInputFallback = $e(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Xt(e, t, r) {
  return e ?? t ?? r;
}
function Jd(e) {
  var t = new Date(F.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function va(e) {
  var t, r, n = [], a, i, s;
  if (!e._d) {
    for (a = Jd(e), e._w && e._a[at] == null && e._a[gt] == null && Qd(e), e._dayOfYear != null && (s = Xt(e._a[Ie], a[Ie]), (e._dayOfYear > wr(s) || e._dayOfYear === 0) && (te(e)._overflowDayOfYear = !0), r = Or(s, 0, e._dayOfYear), e._a[gt] = r.getUTCMonth(), e._a[at] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Ee] === 24 && e._a[Ke] === 0 && e._a[pt] === 0 && e._a[Vt] === 0 && (e._nextDay = !0, e._a[Ee] = 0), e._d = (e._useUTC ? Or : id).apply(
      null,
      n
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ee] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (te(e).weekdayMismatch = !0);
  }
}
function Qd(e) {
  var t, r, n, a, i, s, o, u, l;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, s = 4, r = Xt(
    t.GG,
    e._a[Ie],
    Er(ge(), 1, 4).year
  ), n = Xt(t.W, 1), a = Xt(t.E, 1), (a < 1 || a > 7) && (u = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, l = Er(ge(), i, s), r = Xt(t.gg, e._a[Ie], l.year), n = Xt(t.w, l.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (u = !0)) : t.e != null ? (a = t.e + i, (t.e < 0 || t.e > 6) && (u = !0)) : a = i), n < 1 || n > bt(r, i, s) ? te(e)._overflowWeeks = !0 : u != null ? te(e)._overflowWeekday = !0 : (o = Cs(r, n, a, i, s), e._a[Ie] = o.year, e._dayOfYear = o.dayOfYear);
}
F.ISO_8601 = function() {
};
F.RFC_2822 = function() {
};
function ka(e) {
  if (e._f === F.ISO_8601) {
    Ms(e);
    return;
  }
  if (e._f === F.RFC_2822) {
    Ls(e);
    return;
  }
  e._a = [], te(e).empty = !0;
  var t = "" + e._i, r, n, a, i, s, o = t.length, u = 0, l, p;
  for (a = ms(e._f, e._locale).match(da) || [], p = a.length, r = 0; r < p; r++)
    i = a[r], n = (t.match(Bc(i, e)) || [])[0], n && (s = t.substr(0, t.indexOf(n)), s.length > 0 && te(e).unusedInput.push(s), t = t.slice(
      t.indexOf(n) + n.length
    ), u += n.length), Qt[i] ? (n ? te(e).empty = !1 : te(e).unusedTokens.push(i), Hc(i, n, e)) : e._strict && !n && te(e).unusedTokens.push(i);
  te(e).charsLeftOver = o - u, t.length > 0 && te(e).unusedInput.push(t), e._a[Ee] <= 12 && te(e).bigHour === !0 && e._a[Ee] > 0 && (te(e).bigHour = void 0), te(e).parsedDateParts = e._a.slice(0), te(e).meridiem = e._meridiem, e._a[Ee] = ef(
    e._locale,
    e._a[Ee],
    e._meridiem
  ), l = te(e).era, l !== null && (e._a[Ie] = e._locale.erasConvertYear(l, e._a[Ie])), va(e), _a(e);
}
function ef(e, t, r) {
  var n;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (n = e.isPM(r), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function tf(e) {
  var t, r, n, a, i, s, o = !1, u = e._f.length;
  if (u === 0) {
    te(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < u; a++)
    i = 0, s = !1, t = ua({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], ka(t), oa(t) && (s = !0), i += te(t).charsLeftOver, i += te(t).unusedTokens.length * 10, te(t).score = i, o ? i < n && (n = i, r = t) : (n == null || i < n || s) && (n = i, r = t, s && (o = !0));
  Ct(e, r || t);
}
function rf(e) {
  if (!e._d) {
    var t = fa(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = ds(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), va(e);
  }
}
function nf(e) {
  var t = new Ir(_a(Ps(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Ps(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || kt(e._l), t === null || r === void 0 && t === "" ? on({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Ze(t) ? new Ir(_a(t)) : (Nr(t) ? e._d = t : Xe(r) ? tf(e) : r ? ka(e) : af(e), oa(e) || (e._d = null), e));
}
function af(e) {
  var t = e._i;
  Ue(t) ? e._d = new Date(F.now()) : Nr(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Zd(e) : Xe(t) ? (e._a = ds(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), va(e)) : zt(t) ? rf(e) : _t(t) ? e._d = new Date(t) : F.createFromInputFallback(e);
}
function As(e, t, r, n, a) {
  var i = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (r === !0 || r === !1) && (n = r, r = void 0), (zt(e) && la(e) || Xe(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = a, i._l = r, i._i = e, i._f = t, i._strict = n, nf(i);
}
function ge(e, t, r, n) {
  return As(e, t, r, n, !1);
}
var sf = $e(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = ge.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : on();
  }
), lf = $e(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = ge.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : on();
  }
);
function Rs(e, t) {
  var r, n;
  if (t.length === 1 && Xe(t[0]) && (t = t[0]), !t.length)
    return ge();
  for (r = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
  return r;
}
function of() {
  var e = [].slice.call(arguments, 0);
  return Rs("isBefore", e);
}
function uf() {
  var e = [].slice.call(arguments, 0);
  return Rs("isAfter", e);
}
var cf = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, br = [
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
function df(e) {
  var t, r = !1, n, a = br.length;
  for (t in e)
    if (oe(e, t) && !(xe.call(br, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < a; ++n)
    if (e[br[n]]) {
      if (r)
        return !1;
      parseFloat(e[br[n]]) !== ae(e[br[n]]) && (r = !0);
    }
  return !0;
}
function ff() {
  return this._isValid;
}
function hf() {
  return Qe(NaN);
}
function yn(e) {
  var t = fa(e), r = t.year || 0, n = t.quarter || 0, a = t.month || 0, i = t.week || t.isoWeek || 0, s = t.day || 0, o = t.hour || 0, u = t.minute || 0, l = t.second || 0, p = t.millisecond || 0;
  this._isValid = df(t), this._milliseconds = +p + l * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +s + i * 7, this._months = +a + n * 3 + r * 12, this._data = {}, this._locale = kt(), this._bubble();
}
function Vr(e) {
  return e instanceof yn;
}
function jn(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function mf(e, t, r) {
  var n = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), i = 0, s;
  for (s = 0; s < n; s++)
    (r && e[s] !== t[s] || !r && ae(e[s]) !== ae(t[s])) && i++;
  return i + a;
}
function Fs(e, t) {
  K(e, 0, 0, function() {
    var r = this.utcOffset(), n = "+";
    return r < 0 && (r = -r, n = "-"), n + it(~~(r / 60), 2) + t + it(~~r % 60, 2);
  });
}
Fs("Z", ":");
Fs("ZZ", "");
H("Z", mn);
H("ZZ", mn);
de(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = xa(mn, e);
});
var gf = /([\+\-]|\d\d)/gi;
function xa(e, t) {
  var r = (t || "").match(e), n, a, i;
  return r === null ? null : (n = r[r.length - 1] || [], a = (n + "").match(gf) || ["-", 0, 0], i = +(a[1] * 60) + ae(a[2]), i === 0 ? 0 : a[0] === "+" ? i : -i);
}
function wa(e, t) {
  var r, n;
  return t._isUTC ? (r = t.clone(), n = (Ze(e) || Nr(e) ? e.valueOf() : ge(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + n), F.updateOffset(r, !1), r) : ge(e).local();
}
function Gn(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
F.updateOffset = function() {
};
function pf(e, t, r) {
  var n = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = xa(mn, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (a = Gn(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), n !== e && (!t || this._changeInProgress ? Us(
      this,
      Qe(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, F.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : Gn(this);
}
function yf(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function bf(e) {
  return this.utcOffset(0, e);
}
function _f(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Gn(this), "m")), this;
}
function vf() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = xa(Uc, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function kf(e) {
  return this.isValid() ? (e = e ? ge(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function xf() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function wf() {
  if (!Ue(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return ua(e, this), e = Ps(e), e._a ? (t = e._isUTC ? lt(e._a) : ge(e._a), this._isDSTShifted = this.isValid() && mf(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Sf() {
  return this.isValid() ? !this._isUTC : !1;
}
function Of() {
  return this.isValid() ? this._isUTC : !1;
}
function Ys() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Ef = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Cf = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Qe(e, t) {
  var r = e, n = null, a, i, s;
  return Vr(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : _t(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (n = Ef.exec(e)) ? (a = n[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: ae(n[at]) * a,
    h: ae(n[Ee]) * a,
    m: ae(n[Ke]) * a,
    s: ae(n[pt]) * a,
    ms: ae(jn(n[Vt] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (n = Cf.exec(e)) ? (a = n[1] === "-" ? -1 : 1, r = {
    y: Wt(n[2], a),
    M: Wt(n[3], a),
    w: Wt(n[4], a),
    d: Wt(n[5], a),
    h: Wt(n[6], a),
    m: Wt(n[7], a),
    s: Wt(n[8], a)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (s = Df(
    ge(r.from),
    ge(r.to)
  ), r = {}, r.ms = s.milliseconds, r.M = s.months), i = new yn(r), Vr(e) && oe(e, "_locale") && (i._locale = e._locale), Vr(e) && oe(e, "_isValid") && (i._isValid = e._isValid), i;
}
Qe.fn = yn.prototype;
Qe.invalid = hf;
function Wt(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function fi(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function Df(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = wa(t, e), e.isBefore(t) ? r = fi(e, t) : (r = fi(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function Ws(e, t) {
  return function(r, n) {
    var a, i;
    return n !== null && !isNaN(+n) && (hs(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = r, r = n, n = i), a = Qe(r, n), Us(this, a, e), this;
  };
}
function Us(e, t, r, n) {
  var a = t._milliseconds, i = jn(t._days), s = jn(t._months);
  e.isValid() && (n = n ?? !0, s && ws(e, Hr(e, "Month") + s * r), i && ps(e, "Date", Hr(e, "Date") + i * r), a && e._d.setTime(e._d.valueOf() + a * r), n && F.updateOffset(e, i || s));
}
var Tf = Ws(1, "add"), Nf = Ws(-1, "subtract");
function Vs(e) {
  return typeof e == "string" || e instanceof String;
}
function If(e) {
  return Ze(e) || Nr(e) || Vs(e) || _t(e) || Lf(e) || Mf(e) || e === null || e === void 0;
}
function Mf(e) {
  var t = zt(e) && !la(e), r = !1, n = [
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
  ], a, i, s = n.length;
  for (a = 0; a < s; a += 1)
    i = n[a], r = r || oe(e, i);
  return t && r;
}
function Lf(e) {
  var t = Xe(e), r = !1;
  return t && (r = e.filter(function(n) {
    return !_t(n) && Vs(e);
  }).length === 0), t && r;
}
function Pf(e) {
  var t = zt(e) && !la(e), r = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, i;
  for (a = 0; a < n.length; a += 1)
    i = n[a], r = r || oe(e, i);
  return t && r;
}
function Af(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function Rf(e, t) {
  arguments.length === 1 && (arguments[0] ? If(arguments[0]) ? (e = arguments[0], t = void 0) : Pf(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || ge(), n = wa(r, this).startOf("day"), a = F.calendarFormat(this, n) || "sameElse", i = t && (ot(t[a]) ? t[a].call(this, r) : t[a]);
  return this.format(
    i || this.localeData().calendar(a, this, ge(r))
  );
}
function Ff() {
  return new Ir(this);
}
function Yf(e, t) {
  var r = Ze(e) ? e : ge(e);
  return this.isValid() && r.isValid() ? (t = qe(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Wf(e, t) {
  var r = Ze(e) ? e : ge(e);
  return this.isValid() && r.isValid() ? (t = qe(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function Uf(e, t, r, n) {
  var a = Ze(e) ? e : ge(e), i = Ze(t) ? t : ge(t);
  return this.isValid() && a.isValid() && i.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(a, r) : !this.isBefore(a, r)) && (n[1] === ")" ? this.isBefore(i, r) : !this.isAfter(i, r))) : !1;
}
function Vf(e, t) {
  var r = Ze(e) ? e : ge(e), n;
  return this.isValid() && r.isValid() ? (t = qe(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function Bf(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function zf(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Hf(e, t, r) {
  var n, a, i;
  if (!this.isValid())
    return NaN;
  if (n = wa(e, this), !n.isValid())
    return NaN;
  switch (a = (n.utcOffset() - this.utcOffset()) * 6e4, t = qe(t), t) {
    case "year":
      i = Br(this, n) / 12;
      break;
    case "month":
      i = Br(this, n);
      break;
    case "quarter":
      i = Br(this, n) / 3;
      break;
    case "second":
      i = (this - n) / 1e3;
      break;
    case "minute":
      i = (this - n) / 6e4;
      break;
    case "hour":
      i = (this - n) / 36e5;
      break;
    case "day":
      i = (this - n - a) / 864e5;
      break;
    case "week":
      i = (this - n - a) / 6048e5;
      break;
    default:
      i = this - n;
  }
  return r ? i : Ge(i);
}
function Br(e, t) {
  if (e.date() < t.date())
    return -Br(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(r, "months"), a, i;
  return t - n < 0 ? (a = e.clone().add(r - 1, "months"), i = (t - n) / (n - a)) : (a = e.clone().add(r + 1, "months"), i = (t - n) / (a - n)), -(r + i) || 0;
}
F.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
F.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function jf() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Gf(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? Ur(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : ot(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ur(r, "Z")) : Ur(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function $f() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, n, a, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(r + n + a + i);
}
function qf(e) {
  e || (e = this.isUtc() ? F.defaultFormatUtc : F.defaultFormat);
  var t = Ur(this, e);
  return this.localeData().postformat(t);
}
function Kf(e, t) {
  return this.isValid() && (Ze(e) && e.isValid() || ge(e).isValid()) ? Qe({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Xf(e) {
  return this.from(ge(), e);
}
function Zf(e, t) {
  return this.isValid() && (Ze(e) && e.isValid() || ge(e).isValid()) ? Qe({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Jf(e) {
  return this.to(ge(), e);
}
function Bs(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = kt(e), t != null && (this._locale = t), this);
}
var zs = $e(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Hs() {
  return this._locale;
}
var $r = 1e3, er = 60 * $r, qr = 60 * er, js = (365 * 400 + 97) * 24 * qr;
function tr(e, t) {
  return (e % t + t) % t;
}
function Gs(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - js : new Date(e, t, r).valueOf();
}
function $s(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - js : Date.UTC(e, t, r);
}
function Qf(e) {
  var t, r;
  if (e = qe(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? $s : Gs, e) {
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
      t = this._d.valueOf(), t -= tr(
        t + (this._isUTC ? 0 : this.utcOffset() * er),
        qr
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= tr(t, er);
      break;
    case "second":
      t = this._d.valueOf(), t -= tr(t, $r);
      break;
  }
  return this._d.setTime(t), F.updateOffset(this, !0), this;
}
function e0(e) {
  var t, r;
  if (e = qe(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? $s : Gs, e) {
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
      t = this._d.valueOf(), t += qr - tr(
        t + (this._isUTC ? 0 : this.utcOffset() * er),
        qr
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += er - tr(t, er) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += $r - tr(t, $r) - 1;
      break;
  }
  return this._d.setTime(t), F.updateOffset(this, !0), this;
}
function t0() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function r0() {
  return Math.floor(this.valueOf() / 1e3);
}
function n0() {
  return new Date(this.valueOf());
}
function a0() {
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
function i0() {
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
function s0() {
  return this.isValid() ? this.toISOString() : null;
}
function l0() {
  return oa(this);
}
function o0() {
  return Ct({}, te(this));
}
function u0() {
  return te(this).overflow;
}
function c0() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
K("N", 0, 0, "eraAbbr");
K("NN", 0, 0, "eraAbbr");
K("NNN", 0, 0, "eraAbbr");
K("NNNN", 0, 0, "eraName");
K("NNNNN", 0, 0, "eraNarrow");
K("y", ["y", 1], "yo", "eraYear");
K("y", ["yy", 2], 0, "eraYear");
K("y", ["yyy", 3], 0, "eraYear");
K("y", ["yyyy", 4], 0, "eraYear");
H("N", Sa);
H("NN", Sa);
H("NNN", Sa);
H("NNNN", k0);
H("NNNNN", x0);
de(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, n) {
    var a = r._locale.erasParse(e, n, r._strict);
    a ? te(r).era = a : te(r).invalidEra = e;
  }
);
H("y", lr);
H("yy", lr);
H("yyy", lr);
H("yyyy", lr);
H("yo", w0);
de(["y", "yy", "yyy", "yyyy"], Ie);
de(["yo"], function(e, t, r, n) {
  var a;
  r._locale._eraYearOrdinalRegex && (a = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[Ie] = r._locale.eraYearOrdinalParse(e, a) : t[Ie] = parseInt(e, 10);
});
function d0(e, t) {
  var r, n, a, i = this._eras || kt("en")._eras;
  for (r = 0, n = i.length; r < n; ++r) {
    switch (typeof i[r].since) {
      case "string":
        a = F(i[r].since).startOf("day"), i[r].since = a.valueOf();
        break;
    }
    switch (typeof i[r].until) {
      case "undefined":
        i[r].until = 1 / 0;
        break;
      case "string":
        a = F(i[r].until).startOf("day").valueOf(), i[r].until = a.valueOf();
        break;
    }
  }
  return i;
}
function f0(e, t, r) {
  var n, a, i = this.eras(), s, o, u;
  for (e = e.toUpperCase(), n = 0, a = i.length; n < a; ++n)
    if (s = i[n].name.toUpperCase(), o = i[n].abbr.toUpperCase(), u = i[n].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return i[n];
          break;
        case "NNNN":
          if (s === e)
            return i[n];
          break;
        case "NNNNN":
          if (u === e)
            return i[n];
          break;
      }
    else if ([s, o, u].indexOf(e) >= 0)
      return i[n];
}
function h0(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? F(e.since).year() : F(e.since).year() + (t - e.offset) * r;
}
function m0() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].name;
  return "";
}
function g0() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].narrow;
  return "";
}
function p0() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].abbr;
  return "";
}
function y0() {
  var e, t, r, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (r = a[e].since <= a[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return (this.year() - F(a[e].since).year()) * r + a[e].offset;
  return this.year();
}
function b0(e) {
  return oe(this, "_erasNameRegex") || Oa.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function _0(e) {
  return oe(this, "_erasAbbrRegex") || Oa.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function v0(e) {
  return oe(this, "_erasNarrowRegex") || Oa.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Sa(e, t) {
  return t.erasAbbrRegex(e);
}
function k0(e, t) {
  return t.erasNameRegex(e);
}
function x0(e, t) {
  return t.erasNarrowRegex(e);
}
function w0(e, t) {
  return t._eraYearOrdinalRegex || lr;
}
function Oa() {
  var e = [], t = [], r = [], n = [], a, i, s = this.eras();
  for (a = 0, i = s.length; a < i; ++a)
    t.push(ze(s[a].name)), e.push(ze(s[a].abbr)), r.push(ze(s[a].narrow)), n.push(ze(s[a].name)), n.push(ze(s[a].abbr)), n.push(ze(s[a].narrow));
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
K(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
K(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function bn(e, t) {
  K(0, [e, e.length], 0, t);
}
bn("gggg", "weekYear");
bn("ggggg", "weekYear");
bn("GGGG", "isoWeekYear");
bn("GGGGG", "isoWeekYear");
Le("weekYear", "gg");
Le("isoWeekYear", "GG");
Pe("weekYear", 1);
Pe("isoWeekYear", 1);
H("G", hn);
H("g", hn);
H("GG", pe, je);
H("gg", pe, je);
H("GGGG", ma, ha);
H("gggg", ma, ha);
H("GGGGG", fn, cn);
H("ggggg", fn, cn);
Lr(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, n) {
    t[n.substr(0, 2)] = ae(e);
  }
);
Lr(["gg", "GG"], function(e, t, r, n) {
  t[n] = F.parseTwoDigitYear(e);
});
function S0(e) {
  return qs.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function O0(e) {
  return qs.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function E0() {
  return bt(this.year(), 1, 4);
}
function C0() {
  return bt(this.isoWeekYear(), 1, 4);
}
function D0() {
  var e = this.localeData()._week;
  return bt(this.year(), e.dow, e.doy);
}
function T0() {
  var e = this.localeData()._week;
  return bt(this.weekYear(), e.dow, e.doy);
}
function qs(e, t, r, n, a) {
  var i;
  return e == null ? Er(this, n, a).year : (i = bt(e, n, a), t > i && (t = i), N0.call(this, e, t, r, n, a));
}
function N0(e, t, r, n, a) {
  var i = Cs(e, t, r, n, a), s = Or(i.year, 0, i.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
}
K("Q", 0, "Qo", "quarter");
Le("quarter", "Q");
Pe("quarter", 7);
H("Q", ys);
de("Q", function(e, t) {
  t[gt] = (ae(e) - 1) * 3;
});
function I0(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
K("D", ["DD", 2], "Do", "date");
Le("date", "D");
Pe("date", 9);
H("D", pe);
H("DD", pe, je);
H("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
de(["D", "DD"], at);
de("Do", function(e, t) {
  t[at] = ae(e.match(pe)[0]);
});
var Ks = sr("Date", !0);
K("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Le("dayOfYear", "DDD");
Pe("dayOfYear", 4);
H("DDD", dn);
H("DDDD", bs);
de(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = ae(e);
});
function M0(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
K("m", ["mm", 2], 0, "minute");
Le("minute", "m");
Pe("minute", 14);
H("m", pe);
H("mm", pe, je);
de(["m", "mm"], Ke);
var L0 = sr("Minutes", !1);
K("s", ["ss", 2], 0, "second");
Le("second", "s");
Pe("second", 15);
H("s", pe);
H("ss", pe, je);
de(["s", "ss"], pt);
var P0 = sr("Seconds", !1);
K("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
K(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
K(0, ["SSS", 3], 0, "millisecond");
K(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
K(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
K(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
K(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
K(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
K(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
Le("millisecond", "ms");
Pe("millisecond", 16);
H("S", dn, ys);
H("SS", dn, je);
H("SSS", dn, bs);
var Dt, Xs;
for (Dt = "SSSS"; Dt.length <= 9; Dt += "S")
  H(Dt, lr);
function A0(e, t) {
  t[Vt] = ae(("0." + e) * 1e3);
}
for (Dt = "S"; Dt.length <= 9; Dt += "S")
  de(Dt, A0);
Xs = sr("Milliseconds", !1);
K("z", 0, 0, "zoneAbbr");
K("zz", 0, 0, "zoneName");
function R0() {
  return this._isUTC ? "UTC" : "";
}
function F0() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var I = Ir.prototype;
I.add = Tf;
I.calendar = Rf;
I.clone = Ff;
I.diff = Hf;
I.endOf = e0;
I.format = qf;
I.from = Kf;
I.fromNow = Xf;
I.to = Zf;
I.toNow = Jf;
I.get = Yc;
I.invalidAt = u0;
I.isAfter = Yf;
I.isBefore = Wf;
I.isBetween = Uf;
I.isSame = Vf;
I.isSameOrAfter = Bf;
I.isSameOrBefore = zf;
I.isValid = l0;
I.lang = zs;
I.locale = Bs;
I.localeData = Hs;
I.max = lf;
I.min = sf;
I.parsingFlags = o0;
I.set = Wc;
I.startOf = Qf;
I.subtract = Nf;
I.toArray = a0;
I.toObject = i0;
I.toDate = n0;
I.toISOString = Gf;
I.inspect = $f;
typeof Symbol < "u" && Symbol.for != null && (I[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
I.toJSON = s0;
I.toString = jf;
I.unix = r0;
I.valueOf = t0;
I.creationData = c0;
I.eraName = m0;
I.eraNarrow = g0;
I.eraAbbr = p0;
I.eraYear = y0;
I.year = Es;
I.isLeapYear = ad;
I.weekYear = S0;
I.isoWeekYear = O0;
I.quarter = I.quarters = I0;
I.month = Ss;
I.daysInMonth = td;
I.week = I.weeks = cd;
I.isoWeek = I.isoWeeks = dd;
I.weeksInYear = D0;
I.weeksInWeekYear = T0;
I.isoWeeksInYear = E0;
I.isoWeeksInISOWeekYear = C0;
I.date = Ks;
I.day = I.days = Sd;
I.weekday = Od;
I.isoWeekday = Ed;
I.dayOfYear = M0;
I.hour = I.hours = Ld;
I.minute = I.minutes = L0;
I.second = I.seconds = P0;
I.millisecond = I.milliseconds = Xs;
I.utcOffset = pf;
I.utc = bf;
I.local = _f;
I.parseZone = vf;
I.hasAlignedHourOffset = kf;
I.isDST = xf;
I.isLocal = Sf;
I.isUtcOffset = Of;
I.isUtc = Ys;
I.isUTC = Ys;
I.zoneAbbr = R0;
I.zoneName = F0;
I.dates = $e(
  "dates accessor is deprecated. Use date instead.",
  Ks
);
I.months = $e(
  "months accessor is deprecated. Use month instead",
  Ss
);
I.years = $e(
  "years accessor is deprecated. Use year instead",
  Es
);
I.zone = $e(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  yf
);
I.isDSTShifted = $e(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  wf
);
function Y0(e) {
  return ge(e * 1e3);
}
function W0() {
  return ge.apply(null, arguments).parseZone();
}
function Zs(e) {
  return e;
}
var ue = ca.prototype;
ue.calendar = Sc;
ue.longDateFormat = Dc;
ue.invalidDate = Nc;
ue.ordinal = Lc;
ue.preparse = Zs;
ue.postformat = Zs;
ue.relativeTime = Ac;
ue.pastFuture = Rc;
ue.set = xc;
ue.eras = d0;
ue.erasParse = f0;
ue.erasConvertYear = h0;
ue.erasAbbrRegex = _0;
ue.erasNameRegex = b0;
ue.erasNarrowRegex = v0;
ue.months = Zc;
ue.monthsShort = Jc;
ue.monthsParse = ed;
ue.monthsRegex = nd;
ue.monthsShortRegex = rd;
ue.week = sd;
ue.firstDayOfYear = ud;
ue.firstDayOfWeek = od;
ue.weekdays = _d;
ue.weekdaysMin = kd;
ue.weekdaysShort = vd;
ue.weekdaysParse = wd;
ue.weekdaysRegex = Cd;
ue.weekdaysShortRegex = Dd;
ue.weekdaysMinRegex = Td;
ue.isPM = Id;
ue.meridiem = Pd;
function Kr(e, t, r, n) {
  var a = kt(), i = lt().set(n, t);
  return a[r](i, e);
}
function Js(e, t, r) {
  if (_t(e) && (t = e, e = void 0), e = e || "", t != null)
    return Kr(e, t, r, "month");
  var n, a = [];
  for (n = 0; n < 12; n++)
    a[n] = Kr(e, n, r, "month");
  return a;
}
function Ea(e, t, r, n) {
  typeof e == "boolean" ? (_t(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, _t(t) && (r = t, t = void 0), t = t || "");
  var a = kt(), i = e ? a._week.dow : 0, s, o = [];
  if (r != null)
    return Kr(t, (r + i) % 7, n, "day");
  for (s = 0; s < 7; s++)
    o[s] = Kr(t, (s + i) % 7, n, "day");
  return o;
}
function U0(e, t) {
  return Js(e, t, "months");
}
function V0(e, t) {
  return Js(e, t, "monthsShort");
}
function B0(e, t, r) {
  return Ea(e, t, r, "weekdays");
}
function z0(e, t, r) {
  return Ea(e, t, r, "weekdaysShort");
}
function H0(e, t, r) {
  return Ea(e, t, r, "weekdaysMin");
}
Nt("en", {
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
    var t = e % 10, r = ae(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
F.lang = $e(
  "moment.lang is deprecated. Use moment.locale instead.",
  Nt
);
F.langData = $e(
  "moment.langData is deprecated. Use moment.localeData instead.",
  kt
);
var dt = Math.abs;
function j0() {
  var e = this._data;
  return this._milliseconds = dt(this._milliseconds), this._days = dt(this._days), this._months = dt(this._months), e.milliseconds = dt(e.milliseconds), e.seconds = dt(e.seconds), e.minutes = dt(e.minutes), e.hours = dt(e.hours), e.months = dt(e.months), e.years = dt(e.years), this;
}
function Qs(e, t, r, n) {
  var a = Qe(t, r);
  return e._milliseconds += n * a._milliseconds, e._days += n * a._days, e._months += n * a._months, e._bubble();
}
function G0(e, t) {
  return Qs(this, e, t, 1);
}
function $0(e, t) {
  return Qs(this, e, t, -1);
}
function hi(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function q0() {
  var e = this._milliseconds, t = this._days, r = this._months, n = this._data, a, i, s, o, u;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += hi($n(r) + t) * 864e5, t = 0, r = 0), n.milliseconds = e % 1e3, a = Ge(e / 1e3), n.seconds = a % 60, i = Ge(a / 60), n.minutes = i % 60, s = Ge(i / 60), n.hours = s % 24, t += Ge(s / 24), u = Ge(el(t)), r += u, t -= hi($n(u)), o = Ge(r / 12), r %= 12, n.days = t, n.months = r, n.years = o, this;
}
function el(e) {
  return e * 4800 / 146097;
}
function $n(e) {
  return e * 146097 / 4800;
}
function K0(e) {
  if (!this.isValid())
    return NaN;
  var t, r, n = this._milliseconds;
  if (e = qe(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, r = this._months + el(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round($n(this._months)), e) {
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
function X0() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ae(this._months / 12) * 31536e6 : NaN;
}
function xt(e) {
  return function() {
    return this.as(e);
  };
}
var Z0 = xt("ms"), J0 = xt("s"), Q0 = xt("m"), eh = xt("h"), th = xt("d"), rh = xt("w"), nh = xt("M"), ah = xt("Q"), ih = xt("y");
function sh() {
  return Qe(this);
}
function lh(e) {
  return e = qe(e), this.isValid() ? this[e + "s"]() : NaN;
}
function jt(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var oh = jt("milliseconds"), uh = jt("seconds"), ch = jt("minutes"), dh = jt("hours"), fh = jt("days"), hh = jt("months"), mh = jt("years");
function gh() {
  return Ge(this.days() / 7);
}
var ht = Math.round, Jt = {
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
function ph(e, t, r, n, a) {
  return a.relativeTime(t || 1, !!r, e, n);
}
function yh(e, t, r, n) {
  var a = Qe(e).abs(), i = ht(a.as("s")), s = ht(a.as("m")), o = ht(a.as("h")), u = ht(a.as("d")), l = ht(a.as("M")), p = ht(a.as("w")), y = ht(a.as("y")), g = i <= r.ss && ["s", i] || i < r.s && ["ss", i] || s <= 1 && ["m"] || s < r.m && ["mm", s] || o <= 1 && ["h"] || o < r.h && ["hh", o] || u <= 1 && ["d"] || u < r.d && ["dd", u];
  return r.w != null && (g = g || p <= 1 && ["w"] || p < r.w && ["ww", p]), g = g || l <= 1 && ["M"] || l < r.M && ["MM", l] || y <= 1 && ["y"] || ["yy", y], g[2] = t, g[3] = +e > 0, g[4] = n, ph.apply(null, g);
}
function bh(e) {
  return e === void 0 ? ht : typeof e == "function" ? (ht = e, !0) : !1;
}
function _h(e, t) {
  return Jt[e] === void 0 ? !1 : t === void 0 ? Jt[e] : (Jt[e] = t, e === "s" && (Jt.ss = t - 1), !0);
}
function vh(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, n = Jt, a, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (n = Object.assign({}, Jt, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), a = this.localeData(), i = yh(this, !r, n, a), r && (i = a.pastFuture(+this, i)), a.postformat(i);
}
var Nn = Math.abs;
function qt(e) {
  return (e > 0) - (e < 0) || +e;
}
function _n() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Nn(this._milliseconds) / 1e3, t = Nn(this._days), r = Nn(this._months), n, a, i, s, o = this.asSeconds(), u, l, p, y;
  return o ? (n = Ge(e / 60), a = Ge(n / 60), e %= 60, n %= 60, i = Ge(r / 12), r %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = o < 0 ? "-" : "", l = qt(this._months) !== qt(o) ? "-" : "", p = qt(this._days) !== qt(o) ? "-" : "", y = qt(this._milliseconds) !== qt(o) ? "-" : "", u + "P" + (i ? l + i + "Y" : "") + (r ? l + r + "M" : "") + (t ? p + t + "D" : "") + (a || n || e ? "T" : "") + (a ? y + a + "H" : "") + (n ? y + n + "M" : "") + (e ? y + s + "S" : "")) : "P0D";
}
var se = yn.prototype;
se.isValid = ff;
se.abs = j0;
se.add = G0;
se.subtract = $0;
se.as = K0;
se.asMilliseconds = Z0;
se.asSeconds = J0;
se.asMinutes = Q0;
se.asHours = eh;
se.asDays = th;
se.asWeeks = rh;
se.asMonths = nh;
se.asQuarters = ah;
se.asYears = ih;
se.valueOf = X0;
se._bubble = q0;
se.clone = sh;
se.get = lh;
se.milliseconds = oh;
se.seconds = uh;
se.minutes = ch;
se.hours = dh;
se.days = fh;
se.weeks = gh;
se.months = hh;
se.years = mh;
se.humanize = vh;
se.toISOString = _n;
se.toString = _n;
se.toJSON = _n;
se.locale = Bs;
se.localeData = Hs;
se.toIsoString = $e(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  _n
);
se.lang = zs;
K("X", 0, 0, "unix");
K("x", 0, 0, "valueOf");
H("x", hn);
H("X", Vc);
de("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
de("x", function(e, t, r) {
  r._d = new Date(ae(e));
});
//! moment.js
F.version = "2.29.4";
vc(ge);
F.fn = I;
F.min = of;
F.max = uf;
F.now = cf;
F.utc = lt;
F.unix = Y0;
F.months = U0;
F.isDate = Nr;
F.locale = Nt;
F.invalid = on;
F.duration = Qe;
F.isMoment = Ze;
F.weekdays = B0;
F.parseZone = W0;
F.localeData = kt;
F.isDuration = Vr;
F.monthsShort = V0;
F.weekdaysMin = H0;
F.defineLocale = ba;
F.updateLocale = Yd;
F.locales = Wd;
F.weekdaysShort = z0;
F.normalizeUnits = qe;
F.relativeTimeRounding = bh;
F.relativeTimeThreshold = _h;
F.calendarFormat = Af;
F.prototype = I;
F.HTML5_FMT = {
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
const kh = (e) => (fl("data-v-ee12da86"), e = e(), hl(), e), xh = {
  key: 0,
  class: "flex flex-row"
}, wh = {
  key: 0,
  class: "max-w-[80px] h-3.5 mr-1 bg-gray-400 loading-bubble"
}, Sh = { class: "flex flex-row items-center justify-between gap-3" }, Oh = /* @__PURE__ */ kh(() => /* @__PURE__ */ U("template", null, [
  /* @__PURE__ */ U("div", { class: "flex flex-row items-center shrink-0 gap-3 w-full max-w-[52px] py-1" }, [
    /* @__PURE__ */ U("span", { class: "bg-gray-400 loading-bubble max-w-[24px] w-full h-2" }),
    /* @__PURE__ */ U("span", { class: "bg-gray-400 loading-bubble w-4 h-4" })
  ])
], -1)), Eh = {
  key: 1,
  class: "ml-2 mt-1"
}, Ch = {
  key: 0,
  class: "max-w-[120px] h-2 bg-gray-400 mb-2 loading-bubble"
}, Dh = {
  key: 1,
  class: "max-w-[120px] h-2 bg-danger-500 dark:bg-danger-400 loading-bubble"
}, Th = { class: "flex flex-row" }, Nh = ["readonly", "min", "max"], Ih = {
  key: 0,
  class: "ml-2"
}, Mh = {
  key: 0,
  class: "prose-xs element-text italic text-gray-500 transition"
}, Lh = {
  key: 1,
  class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition"
}, Ph = {
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
    const r = e, n = gc(), a = De(!1), i = De(), s = De(F(r.inputValue).format("YYYY-MM-DD")), o = De(F(r.minDate).format("YYYY-MM-DD")), u = De(F(r.maxDate).format("YYYY-MM-DD"));
    function l() {
      const f = r.format ? r.format : "DD/MM/YYYY";
      t("changed", F(s.value).format(f));
    }
    function p(f) {
      r.readonly || (a.value = !0, f.srcElement.nodeName !== "INPUT" && n.name !== "safari" && i.value.showPicker());
    }
    function y(f, v = () => {
    }, d = document.createElement(null), m = "mouseup") {
      document.addEventListener(m, function _(E) {
        if (!(E.target instanceof Element))
          return document.removeEventListener(m, _), !1;
        f !== E.target && !Array.from(d).includes(E.target) && v(E) !== !1 && document.removeEventListener(m, _);
      });
    }
    function g() {
      let f = "";
      return f += r.readonly ? "" : "pr-0.75 border border-gray-200 dark:border-gray-600 rounded-md transition", f += " pl-1", f += a.value && !r.readonly ? " outline outline-4 outline-action-200 dark:outline-action-700" : "", f;
    }
    function S() {
      const f = ["max-w-[120px]", "max-w-[200px]", "max-w-xs"];
      return f[Math.floor(Math.random() * f.length)];
    }
    return (f, v) => (b(), O("div", {
      ref: (d) => {
        y(d, () => {
          a.value = !1;
        });
      },
      class: "flex flex-col relative gap-1"
    }, [
      e.loading ? (b(), O(ke, { key: 0 }, [
        e.label ? (b(), O("div", xh, [
          e.label ? (b(), O("label", wh)) : A("", !0)
        ])) : A("", !0),
        U("div", Sh, [
          U("div", {
            class: N(["bg-gray-400 loading-bubble mr-auto h-8", [S()]])
          }, null, 2),
          Oh
        ]),
        e.notification || e.error ? (b(), O("div", Eh, [
          e.notification ? (b(), O("div", Ch)) : A("", !0),
          e.error ? (b(), O("div", Dh)) : A("", !0)
        ])) : A("", !0)
      ], 64)) : (b(), O(ke, { key: 1 }, [
        U("div", Th, [
          U("label", {
            onClick: p,
            class: "prose-xs element-text text-xs uppercase text-gray-500 cursor-pointer transition"
          }, Z(e.label), 1)
        ]),
        U("div", {
          class: N([g(), "flex flex-row w-full items-center rounded-md transition px-0.75"])
        }, [
          Tt(U("input", {
            readonly: e.readonly,
            "onUpdate:modelValue": v[0] || (v[0] = (d) => s.value = d),
            onChange: v[1] || (v[1] = (d) => l()),
            onInput: v[2] || (v[2] = (d) => l()),
            min: o.value,
            max: u.value,
            ref_key: "inputRef",
            ref: i,
            onClick: v[3] || (v[3] = (d) => p(d)),
            class: "bg-transparent rounded-md input-reset text-gray-900 dark:text-white transition cursor-pointer py-1.5",
            type: "date",
            placeholder: "dd-mm-yyyy"
          }, null, 40, Nh), [
            [pi, s.value]
          ]),
          e.readonly ? A("", !0) : (b(), le(st, {
            key: 0,
            onClick: v[4] || (v[4] = (d) => p(d)),
            size: "sm",
            class: "text-gray-400 opacity-100 cursor-pointer transition"
          }, {
            default: ee(() => [
              re(" calendar_month ")
            ]),
            _: 1
          }))
        ], 2),
        e.notification || e.error ? (b(), O("div", Ih, [
          e.notification ? (b(), O("div", Mh, Z(e.notification), 1)) : A("", !0),
          e.error ? (b(), O("div", Lh, Z(e.error), 1)) : A("", !0)
        ])) : A("", !0)
      ], 64))
    ], 512));
  }
}, hg = /* @__PURE__ */ Me(Ph, [["__scopeId", "data-v-ee12da86"]]), Ah = { class: "relative w-fit" }, Rh = { class: "flex flex-col" }, Fh = ["onClick"], Yh = {
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
    fluidWidthDropdown: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["selected"],
  setup(e, { emit: t }) {
    const r = e, n = De("right-0");
    function a(o) {
      o.x < 260 && (n.value = "left-0"), i.value = !i.value;
    }
    const i = De(!1);
    function s(o) {
      i.value = !1, t("selected", o);
    }
    return (o, u) => (b(), O("div", Ah, [
      _e(Zr, {
        onClick: u[0] || (u[0] = (l) => a(l)),
        size: r.size,
        title: r.title,
        icon: r.icon,
        disabled: r.disabled,
        outlined: r.outlined,
        buttonRoundedClasses: r.buttonRoundedClasses,
        buttonColorClasses: r.buttonColorClasses,
        buttonBackgroundClasses: r.buttonBackgroundClasses,
        iconColorClasses: r.iconColorClasses
      }, {
        default: ee(() => [
          re(Z(r.textSlot), 1)
        ]),
        _: 1
      }, 8, ["size", "title", "icon", "disabled", "outlined", "buttonRoundedClasses", "buttonColorClasses", "buttonBackgroundClasses", "iconColorClasses"]),
      _e(yi, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95",
        appear: ""
      }, {
        default: ee(() => [
          Tt(U("div", {
            class: N([[
              e.fluidWidthDropdown ? "min-w-max" : "min-w-[240px]",
              n.value
            ], "absolute max-w-xs w-full rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 my-2 z-50"])
          }, [
            U("div", Rh, [
              (b(!0), O(ke, null, Fe(r.items, (l) => (b(), O("button", {
                onClick: (p) => s(l.identifier),
                key: l.identifier,
                class: N(["dark:hover:bg-gray-900 cursor-pointer first-of-type:rounded-tr-lg first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-bl-lg hover:bg-gray-100 w-full text-md dark:text-white text-gray-900 transition-all duration-300 items-center flex flex-row space-x-3 border-t dark:border-gray-700 first-of-type:border-t-0", [e.fluidWidthDropdown ? "px-4 py-2" : "p-2"]])
              }, [
                l.icon ? (b(), le(st, {
                  key: 0,
                  size: "sm",
                  class: "text-gray-400"
                }, {
                  default: ee(() => [
                    re(Z(l.icon), 1)
                  ]),
                  _: 2
                }, 1024)) : A("", !0),
                U("span", null, Z(l.textSlot), 1)
              ], 10, Fh))), 128))
            ])
          ], 2), [
            [_r, i.value]
          ])
        ]),
        _: 1
      })
    ]));
  }
}, mg = {
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
    return (n, a) => (b(), O("div", {
      class: N([
        "flex items-center gap-2 fixed bottom-0 w-full justify-center left-0 right-0 py-4 z-50",
        e.scrollGradient ? "from-gray-100 dark:from-gray-900 to-transparent bg-gradient-to-t" : ""
      ])
    }, [
      (b(!0), O(ke, null, Fe(e.buttons, (i, s) => (b(), le(Zr, {
        key: `button-${s}`,
        icon: i.icon,
        title: i.textSlot,
        outlined: i.outlined,
        size: i.size,
        onClicked: (o) => r(i.identifier)
      }, {
        default: ee(() => [
          re(Z(i.textSlot), 1)
        ]),
        _: 2
      }, 1032, ["icon", "title", "outlined", "size", "onClicked"]))), 128))
    ], 2));
  }
}, Wh = {
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
}, Uh = ["title"], Vh = { class: "truncate" };
function Bh(e, t, r, n, a, i) {
  return b(), O("label", {
    class: N(["flex items-center max-w-max text-white element-text rounded-full transition", i.setClassNames()]),
    title: r.title
  }, [
    U("span", Vh, [
      Je(e.$slots, "default")
    ])
  ], 10, Uh);
}
const zh = /* @__PURE__ */ Me(Wh, [["render", Bh]]);
var Hh = {
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
}, jh = Hh, vn = {}, Pr = {};
Object.defineProperty(Pr, "__esModule", { value: !0 });
Pr.clone = void 0;
function Gh(e) {
  return e ? JSON.parse(JSON.stringify(e)) : null;
}
Pr.clone = Gh;
var kn = {};
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.matches = void 0;
function $h(e, t, r) {
  var n = String(t).length, a = e.substr(0, n), i = parseInt(a, 10);
  return t = parseInt(String(t).substr(0, a.length), 10), r = parseInt(String(r).substr(0, a.length), 10), i >= t && i <= r;
}
function qh(e, t) {
  return t = String(t), t.substring(0, e.length) === e.substring(0, t.length);
}
function Kh(e, t) {
  return Array.isArray(t) ? $h(e, t[0], t[1]) : qh(e, t);
}
kn.matches = Kh;
Object.defineProperty(vn, "__esModule", { value: !0 });
vn.addMatchingCardsToResults = void 0;
var Xh = Pr, Zh = kn;
function Jh(e, t, r) {
  var n, a;
  for (n = 0; n < t.patterns.length; n++) {
    var i = t.patterns[n];
    if (Zh.matches(e, i)) {
      var s = Xh.clone(t);
      Array.isArray(i) ? a = String(i[0]).length : a = String(i).length, e.length >= a && (s.matchStrength = a), r.push(s);
      break;
    }
  }
}
vn.addMatchingCardsToResults = Jh;
var xn = {};
Object.defineProperty(xn, "__esModule", { value: !0 });
xn.isValidInputType = void 0;
function Qh(e) {
  return typeof e == "string" || e instanceof String;
}
xn.isValidInputType = Qh;
var wn = {};
Object.defineProperty(wn, "__esModule", { value: !0 });
wn.findBestMatch = void 0;
function em(e) {
  var t = e.filter(function(r) {
    return r.matchStrength;
  }).length;
  return t > 0 && t === e.length;
}
function tm(e) {
  return em(e) ? e.reduce(function(t, r) {
    return !t || Number(t.matchStrength) < Number(r.matchStrength) ? r : t;
  }) : null;
}
wn.findBestMatch = tm;
var Xr = Ia && Ia.__assign || function() {
  return Xr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Xr.apply(this, arguments);
}, tl = jh, rm = vn, nm = xn, am = wn, Ar = Pr, Dr = {}, Ve = {
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
}, rl = [
  Ve.VISA,
  Ve.MASTERCARD,
  Ve.AMERICAN_EXPRESS,
  Ve.DINERS_CLUB,
  Ve.DISCOVER,
  Ve.JCB,
  Ve.UNIONPAY,
  Ve.MAESTRO,
  Ve.ELO,
  Ve.MIR,
  Ve.HIPER,
  Ve.HIPERCARD
], Mt = Ar.clone(rl);
function Ca(e) {
  return Dr[e] || tl[e];
}
function im() {
  return Mt.map(function(e) {
    return Ar.clone(Ca(e));
  });
}
function Da(e, t) {
  t === void 0 && (t = !1);
  var r = Mt.indexOf(e);
  if (!t && r === -1)
    throw new Error('"' + e + '" is not a supported card type.');
  return r;
}
function Pt(e) {
  var t = [];
  if (!nm.isValidInputType(e))
    return t;
  if (e.length === 0)
    return im();
  Mt.forEach(function(n) {
    var a = Ca(n);
    rm.addMatchingCardsToResults(e, a, t);
  });
  var r = am.findBestMatch(t);
  return r ? [r] : t;
}
Pt.getTypeInfo = function(e) {
  return Ar.clone(Ca(e));
};
Pt.removeCard = function(e) {
  var t = Da(e);
  Mt.splice(t, 1);
};
Pt.addCard = function(e) {
  var t = Da(e.type, !0);
  Dr[e.type] = e, t === -1 && Mt.push(e.type);
};
Pt.updateCard = function(e, t) {
  var r = Dr[e] || tl[e];
  if (!r)
    throw new Error('"' + e + "\" is not a recognized type. Use `addCard` instead.'");
  if (t.type && r.type !== t.type)
    throw new Error("Cannot overwrite type parameter.");
  var n = Ar.clone(r);
  n = Xr(Xr({}, n), t), Dr[n.type] = n;
};
Pt.changeOrder = function(e, t) {
  var r = Da(e);
  Mt.splice(r, 1), Mt.splice(t, 0, e);
};
Pt.resetModifications = function() {
  Mt = Ar.clone(rl), Dr = {};
};
Pt.types = Ve;
var sm = Pt;
const lm = /* @__PURE__ */ _i(sm), om = {
  mail: "mail",
  phone: "ring_volume",
  link: "link"
}, mi = 13, qn = ["en", "de"], Bt = window.navigator.userLanguage || window.navigator.language || qn[0], Ut = {
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
}, um = {
  name: "PawLazyField",
  emits: ["clicked", "editClicked", "deleteClicked"],
  data() {
    return {
      hasSlot: null,
      formatting: null,
      inputOutline: !1,
      fieldValueIconPosition: this.valueIconPosition,
      valueIconName: this.valueIcon,
      show: !1,
      copying: !1,
      message: null,
      success: null,
      formatError: null,
      actionIcons: om,
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
    }
  },
  created() {
    this.initFormat(), F.locale(Bt);
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
    PawIcon: st
  },
  setup() {
    const { t: e } = ir({
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
          return isNaN(e) || isNaN(parseFloat(e)) ? (this.setMessage(this.t("format.numberError"), !1), this.formatError = !0, e) : new Intl.NumberFormat(Bt, {
            minimumFractionDigits: this.minDecimals,
            maximumFractionDigits: this.maxDecimals
          }).format(e);
        case "card":
          return r.length < mi ? (this.setMessage(this.t("format.creditCardDigitError", { minDigits: `<b>${mi}</b>` }), !1), this.formatError = !0, e) : this.formatCard(r, t);
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
      return e.locale(Bt).format(t);
    },
    parseDate(e, t) {
      if (!e || !t)
        return e;
      let r = -1, n = null, a = null;
      for (const s in qn)
        for (const o in Ut[t].formats) {
          if (Ut[t].formats[o] === "utc")
            continue;
          const u = F(e, Ut[t].formats[o], qn[s], !0), l = u.parsingFlags();
          if (u.isValid() && !l.weekdayMismatch)
            return this.formatDate(u, Ut[t].format, t);
          const p = l.unusedInput.length + l.unusedTokens.length;
          (p < r || r === -1) && (r = p, n = Ut[t].formats[o], a = l);
        }
      if (t === "datetime" && Ut[t].formats.includes("utc")) {
        const s = F.utc(e, !0), o = s.parsingFlags();
        if (s.isValid())
          return this.formatDate(s, Ut[t].format, t);
        const u = o.unusedInput.length + o.unusedTokens.length;
        o.overflow >= 0 && (u < r || r === -1) && (r = u, n = "UTC → YYYY-MM-DDTkk:mm:ss+ZZ", a = o);
      }
      let i = null;
      return a.overflow >= 0 && a.parsedDateParts.length > a.overflow - 1 && (i = a.parsedDateParts[a.overflow]), this.setMessage(this.t("format.datetimeError", {
        momentType: `<b>${t.charAt(0).toUpperCase() + t.slice(1)}</b>`,
        candidate: `<b>${n}</b>`,
        overflow: i ? this.t("format.overflow", {
          overflow: `<b>${i}</b>`
        }) : "",
        mismatch: a.weekdayMismatch ? this.t("format.mismatch", {
          mismatch: `<b>${this.t("format.mismatch")}</b>`
        }) : ""
      }), !1), e;
    },
    formatCard(e, t) {
      var a;
      const r = lm(e)[0];
      if (!r)
        return this.setMessage(this.t("format.creditCardInvalid"), !1), this.formatError = !0, e;
      let n = e.toString().split("");
      return r.gaps.forEach((i, s) => n.splice(i + s, 0, " ")), t ? n.join("") : `${(a = r.niceType) == null ? void 0 : a.toUpperCase()} ${this.show ? n.join("") : `•••• ${e.slice(-4)}`}`;
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
      const r = /^(\+)((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)/ig, n = /^(\+)((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(0)*(\d{2,3})(\d{3})(\d{2})(\d{2})/ig, a = t.plus ? "+" : "", i = t.brackets ? { l: "(", r: ")" } : { l: "", r: "" }, s = t.space ? " " : "", o = t.dash ? "-" : "", u = this.standard(e), l = n.exec(u), p = r.exec(u);
      if (!l && p)
        return this.setMessage(this.t("format.phoneTooShort"), !1), this.formatError = !0, e;
      if (!l && !p)
        return this.setMessage(this.t("format.phonePrefixError"), !1), this.formatError = !0, e;
      const y = t.localPrefix && l[3] ? `${i.l}${l[3]}${i.r}` : "", g = t.areaCode ? l[2] : "";
      return `${t.areaCode ? a : ""}${g}${t.areaCode ? s : ""}${y}${l[4]}${s}${l[5]}${s}${o}${t.dash ? s : ""}${l[6]}${s}${o}${t.dash ? s : ""}${l[7]}`;
    }
  }
}, cm = { class: "flex flex-col gap-1" }, dm = {
  key: 0,
  class: "flex flex-row"
}, fm = {
  key: 0,
  class: "prose-xs element-text text-xs uppercase text-gray-500 transition"
}, hm = ["title"], mm = ["textContent"], gm = {
  key: 0,
  class: "mr-1 text-xs text-gray-400"
}, pm = ["innerHTML"], ym = ["innerHTML"];
function bm(e, t, r, n, a, i) {
  const s = ve("PawIcon");
  return b(), O("div", cm, [
    r.label || r.info ? (b(), O("div", dm, [
      r.label ? (b(), O("label", fm, Z(r.label), 1)) : A("", !0),
      r.info ? (b(), O("span", {
        key: 1,
        class: "ml-auto prose-xs element-text uppercase text-gray-500 cursor-help transition",
        title: r.title
      }, Z(r.info), 9, hm)) : A("", !0)
    ])) : A("", !0),
    U("div", {
      class: N(["flex flex-row items-center justify-between text-gray-800 dark:text-white transition", {
        "border-t border-gray-200 dark:border-gray-600": r.label
      }])
    }, [
      U("div", {
        class: N(["flex items-center", a.formatting == "icon" && a.fieldValueIconPosition == "right" ? "flex-row-reverse" : ""])
      }, [
        a.formatting == "icon" && a.valueIconName ? (b(), le(s, {
          key: 0,
          class: N(r.valueColorClass ?? "text-gray-400"),
          size: "sm"
        }, {
          default: ee(() => [
            re(Z(a.valueIconName), 1)
          ]),
          _: 1
        }, 8, ["class"])) : A("", !0),
        U("span", {
          class: N(["my-1.5", {
            "prose-md": r.size === "md",
            "prose-sm": r.size === "sm",
            "prose-xs": r.size === "xs",
            "whitespace-pre-wrap": r.format === "multiline",
            truncate: r.format !== "multiline",
            "text-action-500 dark:text-action-400 hover:text-action-300 dark:hover:text-action-600 cursor-pointer transition": r.action && !a.formatError,
            [r.valueColorClass]: r.valueColorClass
          }]),
          onClick: t[0] || (t[0] = (...o) => i.click && i.click(...o)),
          textContent: Z(this.inputValue(!1))
        }, null, 10, mm)
      ], 2),
      U("div", {
        class: N(["flex flex-row shrink-0 items-center gap-1 py-1 ml-3", {
          "self-start": r.unitPosition === "top",
          "self-center": r.unitPosition === "center",
          "self-end": r.unitPosition === "bottom"
        }])
      }, [
        a.unit.label ? (b(), O("span", gm, Z(a.unit.label), 1)) : A("", !0),
        a.unit.icon ? (b(), le(s, {
          key: 1,
          size: "sm",
          class: "text-gray-400",
          outlined: a.unit.outlined === !0
        }, {
          default: ee(() => [
            re(Z(a.unit.icon), 1)
          ]),
          _: 1
        }, 8, ["outlined"])) : A("", !0),
        r.copy && !a.formatError ? (b(), le(s, {
          key: 2,
          size: "sm",
          onClick: i.copyToClipboard,
          class: "text-gray-400 cursor-pointer"
        }, {
          default: ee(() => [
            re(" copy_all ")
          ]),
          _: 1
        }, 8, ["onClick"])) : A("", !0),
        r.editAction && !a.formatError ? (b(), le(s, {
          key: 3,
          size: "sm",
          onClick: i.editTrigger,
          class: "text-gray-400 cursor-pointer"
        }, {
          default: ee(() => [
            re(" edit ")
          ]),
          _: 1
        }, 8, ["onClick"])) : A("", !0),
        r.deleteAction && !a.formatError ? (b(), le(s, {
          key: 4,
          size: "sm",
          onClick: i.deleteTrigger,
          class: "text-gray-400 cursor-pointer"
        }, {
          default: ee(() => [
            re(" delete ")
          ]),
          _: 1
        }, 8, ["onClick"])) : A("", !0),
        r.secret && !a.formatError ? (b(), le(s, {
          key: 5,
          size: "sm",
          class: "text-gray-400 cursor-pointer",
          onClick: i.toggleSecret
        }, {
          default: ee(() => [
            re(Z(a.show ? "visibility_off" : "visibility"), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : A("", !0),
        r.action && !a.formatError ? (b(), le(s, {
          key: 6,
          size: "sm",
          onClick: i.click,
          class: "text-action-500 dark:text-action-400 hover:text-action-300 dark:hover:text-action-600 cursor-pointer transition"
        }, {
          default: ee(() => [
            re(Z(a.actionIcons[r.action]), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : A("", !0)
      ], 2)
    ], 2),
    a.message && a.success ? (b(), O("div", {
      key: 1,
      class: "prose-xs element-text italic text-success-500 dark:text-success-400 transition",
      innerHTML: a.message
    }, null, 8, pm)) : A("", !0),
    a.message && !a.success && !r.hideErrors ? (b(), O("div", {
      key: 2,
      class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition",
      innerHTML: a.message
    }, null, 8, ym)) : A("", !0)
  ]);
}
const _m = /* @__PURE__ */ Me(um, [["render", bm]]), vm = {
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
    PawIcon: st
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
}, km = ["title"];
function xm(e, t, r, n, a, i) {
  const s = ve("PawIcon");
  return b(), O("button", {
    class: N(["flex items-center group my-0 h-8 w-full prose-md element-text rounded-md transition", i.calcButton()]),
    title: r.title,
    onClick: t[0] || (t[0] = (...o) => i.click && i.click(...o))
  }, [
    r.icon ? (b(), le(s, {
      key: 0,
      size: r.size,
      outlined: r.outlined,
      class: N(["ml-0.75 mr-2 transition", i.calcIcon()])
    }, {
      default: ee(() => [
        re(Z(r.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : A("", !0),
    U("span", {
      class: N(["flex-grow text-left truncate", r.icon ? "" : "ml-3"])
    }, [
      Je(e.$slots, "default")
    ], 2),
    _e(s, {
      size: "sm",
      class: N([
        "opacity-0 text-gray-400",
        r.disabled ? "" : "group-hover:opacity-100 group-focus:text-action-100 dark:group-focus:text-action-100 group-focus:opacity-100 group-active:text-action-100 dark:group-active:text-action-100 group-active:opacity-100"
      ])
    }, {
      default: ee(() => [
        re(" navigate_next ")
      ]),
      _: 1
    }, 8, ["class"])
  ], 10, km);
}
const wm = /* @__PURE__ */ Me(vm, [["render", xm]]), Sm = {
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
    PawListItem: wm
  },
  methods: {
    click(e) {
      this.$emit("clicked", e);
    }
  }
};
function Om(e, t, r, n, a, i) {
  const s = ve("PawListItem");
  return !r.items || Object.keys(r.items).length === 0 ? (b(), O("div", {
    key: 0,
    class: N(["flex items-center w-full p-4 mb-8 bg-warning-100 dark:bg-warning-800 text-warning-800 dark:text-warning-100 rounded-lg transition", a.hasSlot ? "" : "hidden"])
  }, [
    Je(e.$slots, "default")
  ], 2)) : (b(!0), O(ke, { key: 1 }, Fe(r.items, (o, u) => (b(), O("div", {
    key: u,
    class: N(["py-1.5", {
      "border-t border-gray-200 dark:border-gray-700 transition": r.divider && u > 0
    }])
  }, [
    _e(s, {
      icon: o.icon ?? r.icon,
      size: o.size ?? r.size,
      title: o.title ?? r.title,
      outlined: o.outlined ?? r.outlined,
      disabled: o.disabled ?? r.disabled,
      onClicked: (l) => i.click(u)
    }, {
      default: ee(() => [
        re(Z(o.text), 1)
      ]),
      _: 2
    }, 1032, ["icon", "size", "title", "outlined", "disabled", "onClicked"])
  ], 2))), 128));
}
const gg = /* @__PURE__ */ Me(Sm, [["render", Om]]);
const Em = ["title"], Cm = ["checked", "disabled"], Dm = { class: "relative w-8 h-5 m-0.5 shrink-0 self-start bg-gray-400 peer-disabled:bg-gray-200 dark:peer-disabled:bg-gray-600 peer-checked:bg-action-500 dark:peer-checked:bg-action-500 rounded-full transition" }, Tm = {
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
}, Nm = /* @__PURE__ */ Object.assign(Tm, {
  setup(e) {
    const t = De();
    return (r, n) => {
      var a;
      return b(), O("label", {
        class: N(["group inline-flex items-center", {
          "cursor-pointer": !e.disabled,
          "gap-1": e.size === "sm",
          "gap-2 p-1": e.size === "md",
          "gap-3 p-2": e.size === "lg"
        }]),
        title: e.title
      }, [
        U("input", {
          ref_key: "toggle",
          ref: t,
          type: "checkbox",
          onChange: n[0] || (n[0] = (...i) => r.change && r.change(...i)),
          checked: e.checked,
          disabled: e.disabled,
          class: "peer hidden"
        }, null, 40, Cm),
        U("span", Dm, [
          U("span", {
            class: N(["block w-4 h-4 bg-white m-0.5 rounded-full shadow-box dark:shadow-box-dark transition", [
              r.value ? "translate-x-3" : "translate-x-0",
              (a = t.value) != null && a.disabled ? "dark:bg-gray-400" : ""
            ]])
          }, null, 2)
        ]),
        r.$slots.default ? (b(), O("span", {
          key: 0,
          class: N([
            "text-md transition",
            e.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"
          ])
        }, [
          Je(r.$slots, "default", {}, void 0, !0)
        ], 2)) : A("", !0)
      ], 10, Em);
    };
  }
}), pg = /* @__PURE__ */ Me(Nm, [["__scopeId", "data-v-5cd34538"]]), Im = 8, Mm = 5, Lm = {
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
    return {
      hasSlot: this.$slots.default && this.$slots.default().filter(
        (e) => e.type !== Comment && (typeof e.children == "string" || e.children instanceof String ? e.children.trim() : e.children) !== ""
      ).length,
      settingsOpened: !1,
      searchbarOpened: !1,
      searchValue: this.searchbarValueProxy,
      error: !1,
      dropdownOpen: !1,
      rowIdentifierProxy: null
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
    PawCheckbox: bi,
    PawLazyField: _m,
    PawLink: us,
    PawIcon: st,
    PawLabel: zh,
    PawButton: Zr,
    PawDropdown: Yh,
    PawCrazyInput: sc
  },
  setup() {
    const { t: e } = ir({
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
  computed: {
    headings() {
      return this.data.headings ? [...this.data.headings].sort((e, t) => e.position - t.position) : {};
    },
    activeHeadings() {
      return this.headings ? this.headings.filter((e) => e.visible) : {};
    },
    currentItems() {
      const e = this.meta.lastItem - this.meta.firstItem + 1;
      let t = [];
      this.meta.pagination >= this.data.items.length ? t = this.data.items.slice(0, e) : t = this.data.items.slice(
        this.meta.firstItem - 1,
        Math.max(this.meta.firstItem - 1 + this.meta.pagination, e)
      );
      const r = this.informal ? Mm : Im;
      return this.loading && t.length < r ? t.concat(this.fillItems(r - t.length)) : t;
    },
    detailsText() {
      return this.informal ? "" : this.t("table.details");
    },
    meta() {
      let e = {};
      return e.totalRecords = Math.max(
        this.data.meta.records,
        this.data.items.length
      ), e.pagination = (this.data.meta.pagination < 1 ? 1 : this.data.meta.pagination) || 10, e.totalPages = Math.ceil(e.totalRecords / e.pagination) || 1, e.currentPage = Math.min(Math.max(this.data.meta.page, 1), e.totalPages) || 1, e.firstItem = e.pagination * (e.currentPage - 1) + 1, e.lastItem = Math.min(e.firstItem + e.pagination - 1, e.totalRecords) || this.data.items.length, e;
    },
    footerText() {
      return this.error ? this.error : this.loading ? this.t("table.loading") : this.data.meta.records ? this.t("table.showRecordsInterval", {
        first: new Intl.NumberFormat(Bt).format(
          this.meta.firstItem
        ),
        last: new Intl.NumberFormat(Bt).format(
          this.meta.lastItem
        ),
        total: new Intl.NumberFormat(Bt).format(
          this.meta.totalRecords
        )
      }) : this.t("table.showRecords", {
        total: new Intl.NumberFormat(Bt).format(
          this.data.items.length
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
     * Emitted when heading sorted
     * @param heading {Object} Table heading
     */
    sort(e) {
      this.headings.forEach((t) => {
        if (t.name === e.name) {
          t.sort = e.sort === "asc" ? "desc" : "asc";
          return;
        }
        t.sort = null;
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
    openSearchbar(e) {
      e == "mobile" ? (this.searchbarOpened = !0, this.$refs.searchbarMobile.focusInputElement(), this.clickOutsideElement(this.$refs.searchbarMobile, () => {
        this.searchbarOpened = !1, this.searchValue = "", this.$refs.searchbar.unFocusInputElement();
      })) : (this.searchbarOpened = !0, this.$refs.searchbar.focusInputElement(), this.clickOutsideElement(this.$refs.searchbar, () => {
        this.searchbarOpened = !1, this.searchValue = "", this.$refs.searchbar.unFocusInputElement();
      }));
    },
    openDropdown(e, t) {
      this.dropdownOpen = !1, setTimeout(() => {
        const r = this.$refs.actionDropdown, n = e.target.getBoundingClientRect(), a = this.$refs.table.getBoundingClientRect(), i = this.$refs.tableHeader.getBoundingClientRect(), s = this.informal ? 30 : 10, o = n.top - a.top + i.height + n.height + s;
        r.style.top = `${o}px`, this.dropdownOpen = !0, this.rowIdentifierProxy = t, this.clickOutsideElement(this.$refs.actionDropdown, () => {
          this.dropdownOpen = !1;
        });
      }, 150);
    },
    dropdownActionSelected(e) {
      this.dropdownOpen = !1, this.$emit("actionSelected", e, this.rowIdentifierProxy);
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
      document.addEventListener(n, function a(i) {
        if (!(i.target instanceof Element))
          return document.removeEventListener(n, a), !1;
        e !== i.target && !Array.from(r).includes(i.target) && t(i) !== !1 && document.removeEventListener(n, a);
      });
    },
    hasStickyDetails() {
      return this.ctaIcon && this.ctaIcon !== "";
    }
  }
}, Pm = {
  key: 0,
  class: "text-lg font-bold text-gray-500 dark:text-white whitespace-nowrap"
}, Am = {
  key: 0,
  class: "md:flex flex-row gap-3 hidden"
}, Rm = { class: "flex flex-row transition-all" }, Fm = { class: "flex flex-row w-full" }, Ym = {
  key: 0,
  class: "flex justify-between w-full items-center sm:w-fit"
}, Wm = { class: "block sm:hidden" }, Um = {
  key: 0,
  class: "text-lg font-bold text-gray-500 dark:text-white whitespace-nowrap"
}, Vm = /* @__PURE__ */ U("col", { class: "w-8" }, null, -1), Bm = ["onClick"], zm = {
  key: 1,
  class: "z-50"
}, Hm = /* @__PURE__ */ U("div", { class: "w-8 h-2 bg-action-300 dark:bg-action-600 rounded-md" }, null, -1), jm = {
  key: 3,
  class: "border-r border-t border-b border-gray-200 dark:border-gray-700 rounded-r-lg absolute top-2 right-4 bottom-2 -left-12 h-12 z-10 group-hover:shadow-card dark:group-hover:shadow-card-dark transition-all"
}, Gm = {
  ref: "actionDropdown",
  class: "absolute max-w-xs w-fit min-w-[120px] rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 my-2 z-50 right-0 mr-6"
}, $m = { class: "flex flex-col" }, qm = ["onClick"], Km = { class: "" }, Xm = { class: "flex flex-col text-left opacity-[.999] overflow-hidden rounded-md" }, Zm = ["onClick"], Jm = ["innerHTML"], Qm = { class: "flex flex-row items-center" };
function eg(e, t, r, n, a, i) {
  const s = ve("PawButton"), o = ve("PawDropdown"), u = ve("PawCrazyInput"), l = ve("PawLink"), p = ve("PawCheckbox"), y = ve("PawLazyField"), g = ve("PawLabel"), S = ve("PawIcon");
  return b(), O("div", {
    class: N(["flex flex-col relative transition z-0", {
      "pointer-events-none": r.loading
    }])
  }, [
    U("div", {
      class: N(["overflow-y-auto max-h-full transition", {
        "overflow-hidden": r.loading,
        "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-t border-l border-r rounded-t-xl translate-z-0": !r.informal,
        "px-4": r.informal
      }])
    }, [
      r.buttons.length || r.title || r.searchDropdownItems.length ? (b(), O("div", {
        key: 0,
        ref: "tableHeader",
        class: N([{
          "px-0 mb-3 sm:mb-5": r.informal,
          "px-6": !r.informal,
          "flex-wrap sm:!h-fit": r.searchDropdownItems.length > 0
        }, "sticky inset-0 flex flex-row justify-between items-center mt-3 h-fit sm:h-8 z-50 gap-3"])
      }, [
        U("div", {
          class: N({ "hidden sm:block": r.searchDropdownItems.length })
        }, [
          r.title ? (b(), O("h1", Pm, Z(r.title), 1)) : A("", !0)
        ], 2),
        Object.keys(r.buttons).length <= 4 ? (b(), O("div", Am, [
          U("div", Rm, [
            Tt(_e(s, {
              disabled: r.loading,
              outlined: "",
              size: "md",
              title: "Search",
              icon: "search",
              onClicked: t[0] || (t[0] = (f) => i.openSearchbar())
            }, null, 8, ["disabled"]), [
              [
                _r,
                r.searchDropdownItems.length ? !1 : !a.searchbarOpened && r.searchbar
              ]
            ]),
            r.searchDropdownItems.length ? (b(), le(o, {
              key: 0,
              outlined: "",
              size: "md",
              icon: "expand_more",
              class: "h-full",
              textSlot: r.searchDropdownText,
              items: r.searchDropdownItems,
              buttonRoundedClasses: i.computedButtonRoundedClasses,
              onSelected: t[1] || (t[1] = (f) => this.$emit("searchDropdownItemClicked", f))
            }, null, 8, ["textSlot", "items", "buttonRoundedClasses"])) : A("", !0),
            _e(u, {
              ref: "searchbar",
              value: a.searchValue,
              placeholder: "Search",
              title: "Extended information about this field",
              contextIcon: "search",
              class: N([
                "max-h-8",
                a.searchbarOpened && !r.searchDropdownItems.length ? "w-full" : r.searchDropdownItems.length ? "w-full rounded-l-none" : "w-0 overflow-hidden"
              ]),
              inputRoundedClasses: i.computedInputRoundedClasses,
              inputMinWidthClasses: "min-w-[30ch]",
              flexDir: i.computedFlexDirectionProperty,
              onTyped: t[2] || (t[2] = (f) => i.searchTyped(f)),
              onKeyDownEnter: t[3] || (t[3] = (f) => this.$emit("keyDownEnter"))
            }, {
              default: ee(() => [
                re(Z(a.searchValue), 1)
              ]),
              _: 1
            }, 8, ["value", "inputRoundedClasses", "flexDir", "class"])
          ]),
          (b(!0), O(ke, null, Fe(r.buttons, (f) => (b(), le(s, {
            key: f.id,
            onClicked: (v) => this.$emit("buttonClicked", f.identifier),
            disabled: r.loading,
            outlined: f.outlined,
            size: "md",
            title: f.title,
            icon: f.icon
          }, {
            default: ee(() => [
              re(Z(f.textSlot), 1)
            ]),
            _: 2
          }, 1032, ["onClicked", "disabled", "outlined", "title", "icon"]))), 128))
        ])) : A("", !0),
        U("div", {
          class: N(["flex flex-row gap-3 md:hidden", [
            r.buttons.length >= 4 ? "!flex" : "",
            r.searchDropdownItems.length ? "flex-col-reverse items-end sm:flex-row w-full" : ""
          ]])
        }, [
          U("div", Fm, [
            Tt(_e(s, {
              disabled: r.loading,
              outlined: "",
              size: "md",
              title: "Search",
              icon: "search",
              onClicked: t[4] || (t[4] = (f) => i.openSearchbar("mobile"))
            }, null, 8, ["disabled"]), [
              [
                _r,
                r.searchDropdownItems.length ? !1 : !a.searchbarOpened && r.searchbar
              ]
            ]),
            r.searchDropdownItems.length ? (b(), le(o, {
              key: 0,
              outlined: "",
              size: "md",
              icon: "expand_more",
              class: "h-full",
              textSlot: r.searchDropdownText,
              items: r.searchDropdownItems,
              buttonRoundedClasses: i.computedButtonRoundedClasses,
              onSelected: t[5] || (t[5] = (f) => this.$emit("searchDropdownItemClicked", f))
            }, null, 8, ["textSlot", "items", "buttonRoundedClasses"])) : A("", !0),
            _e(u, {
              ref: "searchbarMobile",
              value: a.searchValue,
              placeholder: "Search",
              title: "Extended information about this field",
              contextIcon: "search",
              class: N([
                "max-h-8",
                a.searchbarOpened && !r.searchDropdownItems.length ? "w-full" : r.searchDropdownItems.length ? "w-full rounded-l-none" : "w-0 overflow-hidden"
              ]),
              onTyped: t[6] || (t[6] = (f) => i.searchTyped(f)),
              inputRoundedClasses: i.computedInputRoundedClasses,
              fullwidth: !0,
              flexDir: i.computedFlexDirectionProperty,
              onKeyDownEnter: t[7] || (t[7] = (f) => this.$emit("keyDownEnter"))
            }, {
              default: ee(() => [
                re(Z(a.searchValue), 1)
              ]),
              _: 1
            }, 8, ["value", "class", "inputRoundedClasses", "flexDir"])
          ]),
          r.searchDropdownItems.length ? (b(), O("div", Ym, [
            U("div", Wm, [
              r.title ? (b(), O("h1", Um, Z(r.title), 1)) : A("", !0)
            ]),
            r.buttons && r.buttons.length ? (b(), le(o, {
              key: 0,
              class: N(a.searchbarOpened ? "hidden" : ""),
              outlined: "",
              size: "md",
              icon: "expand_more",
              textSlot: "Options",
              items: r.buttons,
              onSelected: t[8] || (t[8] = (f) => this.$emit("buttonClicked", f))
            }, null, 8, ["class", "items"])) : A("", !0)
          ])) : r.buttons && r.buttons.length ? (b(), le(o, {
            key: 1,
            class: N(a.searchbarOpened ? "hidden" : ""),
            outlined: "",
            size: "md",
            icon: "expand_more",
            textSlot: "Options",
            items: r.buttons,
            onSelected: t[9] || (t[9] = (f) => this.$emit("buttonClicked", f))
          }, null, 8, ["class", "items"])) : A("", !0)
        ], 2)
      ], 2)) : A("", !0),
      (!r.data || Object.keys(r.data).length === 0 || Object.keys(r.data.items).length === 0) && !r.loading ? (b(), O("div", {
        key: 1,
        class: N(["flex items-center w-auto p-4 rounded-lg transition", [
          a.hasSlot ? "" : "hidden",
          r.itemsNotFoundHasBgColor ? `bg-${r.itemsNotFoundBgClass}-100 dark:bg-${r.itemsNotFoundBgClass}-800 text-${r.itemsNotFoundTextColorClass}-800 dark:text-${r.itemsNotFoundTextColorClass}-100` : "text-white",
          r.informal ? "mx-auto mb-3 sm:mb-5" : "m-6"
        ]])
      }, [
        Je(e.$slots, "default")
      ], 2)) : (b(), O("table", {
        key: 2,
        ref: "table",
        class: N(["relative w-full formal-table fill-available", {
          "border-collapse": !r.informal,
          "border-separate table-informal": r.informal
        }])
      }, [
        U("colgroup", null, [
          r.informal ? A("", !0) : (b(), O("col", {
            key: 0,
            class: N({
              "w-8": i.activeHeadings.length > 0,
              "w-auto": i.activeHeadings.length === 0
            })
          }, null, 2)),
          (b(!0), O(ke, null, Fe(i.activeHeadings, (f, v) => (b(), O("col", {
            key: v,
            class: N(["w-auto", {
              "min-w-[160px]": !r.informal,
              "min-w-[120px]": r.informal
            }])
          }, null, 2))), 128)),
          Vm
        ]),
        U("thead", null, [
          U("tr", {
            class: N([{
              "bg-white dark:bg-gray-800 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition": !r.informal
            }, "sticky z-20 top-0 transition-all"])
          }, [
            r.informal ? A("", !0) : (b(), O("th", {
              key: 0,
              class: N([{
                "pt-3 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full": !r.informal
              }, "sticky z-10 pl-6 pb-0 pr-3 left-0 text-left bg-white dark:bg-gray-800 transition-all"])
            }, null, 2)),
            (b(!0), O(ke, null, Fe(i.activeHeadings, (f, v) => (b(), O("th", {
              key: f.id,
              class: N(["pb-0", [
                v > 0 ? "pl-7" : "",
                v === 0 && r.informal ? "pl-3" : "",
                f.align === "left" || !f.align ? "text-left" : "",
                f.align === "right" ? "text-right" : "",
                f.align === "center" ? "text-center" : "",
                r.informal ? `${r.bgLight} dark:${r.bgDark} transition` : "pt-3 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition-all"
              ]])
            }, [
              f.sort == "disabled" ? (b(), le(l, {
                key: 0,
                class: "inline-flex uppercase",
                size: "sm",
                align: "right",
                compact: ""
              }, {
                default: ee(() => [
                  re(Z(i.headingTitle(f.title || f.name)), 1)
                ]),
                _: 2
              }, 1024)) : (b(), le(l, {
                key: 1,
                class: "inline-flex uppercase",
                size: "sm",
                align: "right",
                compact: "",
                onClicked: (d) => i.sort(f),
                color: !f.title && !f.name ? "danger" : f.sort ? "action" : null,
                icon: f.sort === "asc" || !f.sort ? "keyboard_arrow_up" : "keyboard_arrow_down"
              }, {
                default: ee(() => [
                  re(Z(i.headingTitle(f.title || f.name)), 1)
                ]),
                _: 2
              }, 1032, ["onClicked", "color", "icon"]))
            ], 2))), 128)),
            U("th", {
              class: N([[
                r.informal ? `pr-1 ${r.bgLight} dark:${r.bgDark} transition` : "pr-6 bg-white dark:bg-gray-800 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition-all"
              ], "sticky z-10 pl-3 pb-0 right-0 text-right transition-all"])
            }, [
              _e(l, {
                size: "md",
                icon: "playlist_add",
                class: N({
                  "ml-auto pt-3": !r.informal
                }),
                onClicked: t[10] || (t[10] = (f) => a.settingsOpened = !a.settingsOpened)
              }, null, 8, ["class"]),
              r.informal ? (b(), O("div", {
                key: 0,
                class: N([`${r.bgLight} dark:${r.bgDark}`, "absolute top-0 bottom-0 left-0 -right-4 -z-10 transition"])
              }, null, 2)) : A("", !0)
            ], 2)
          ], 2)
        ]),
        U("tbody", null, [
          (b(!0), O(ke, null, Fe(i.currentItems, (f, v) => (b(), O("tr", {
            key: f.id,
            class: N(["relative transition-all group", {
              "border-b border-gray-200 dark:border-gray-700": v < i.currentItems.length - 1 && !r.informal,
              "animate-loading": r.loading,
              "h-8 hover:bg-gray-100 dark:hover:bg-gray-800": !r.informal,
              "h-12 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg": r.informal
            }])
          }, [
            r.informal ? A("", !0) : (b(), O("td", {
              key: 0,
              class: N(["sticky z-10 pl-6 pr-3 left-0 bg-white dark:bg-gray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 overflow-hidden transition", {
                "py-0": !r.informal,
                "pt-2 pb-2": r.informal
              }])
            }, [
              r.selectionEnabled ? (b(), le(p, {
                key: 0,
                size: "md",
                onChanged: (d) => i.select(d, f.id)
              }, null, 8, ["onChanged"])) : A("", !0)
            ], 2)),
            (b(!0), O(ke, null, Fe(i.activeHeadings, (d, m) => (b(), O("td", {
              key: d.name,
              class: N([[
                m > 0 ? "pl-7" : "",
                m === 0 && r.informal ? "pl-3 rounded-l-lg border-l overflow-hidden before:opacity-0 group-hover:before:opacity-100 before:content-[''] before:absolute before:mt-[-9.75px] before:left-0 before:right-0 before:h-12 before:overflow-clip group-hover:before:shadow-card dark:group-hover:before:shadow-card-dark before:rounded-lg before:transition" : "",
                m === i.activeHeadings.length - 1 ? "pr-2" : "",
                d.align === "left" || !d.align ? "text-left" : "",
                d.align === "right" ? "text-right" : "",
                d.align === "center" ? "text-center" : "",
                r.informal ? "pt-2 pb-2 border-t border-b border-gray-200 dark:border-gray-700 transition" : "py-0",
                r.isRowClickable && !d.action ? "cursor-pointer" : ""
              ], "align-middle"]),
              onClick: (_) => r.isRowClickable && !d.action ? i.click(f.id, "row") : ""
            }, [
              !r.loading && d.format !== "label" ? (b(), le(y, {
                key: 0,
                class: "inline-flex",
                size: "sm",
                "hide-errors": "",
                action: d.action,
                copy: d.copy,
                link: d.action === "link" ? f[d.name].link : null,
                insecure: d.action === "link" ? f[d.name].insecure : null,
                secret: d.secret,
                format: d.format,
                "unit-label": d.unitLabel,
                "unit-icon": d.unitIcon,
                "unit-icon-outlined": d.unitIconOutlined,
                "min-decimals": d.minDecimals,
                "max-decimals": d.maxDecimals,
                valueIcon: d.format == "icon" ? f[d.name].icon : "",
                valueIconPosition: d.format == "icon" ? f[d.name].iconPosition : "",
                valueColorClass: d.format == "icon" ? f[d.name].valueColor : ""
              }, {
                default: ee(() => [
                  re(Z(i.cellValue(
                    d.action === "link" ? f[d.name].text : d.format == "icon" ? f[d.name].value : f[d.name],
                    d.name
                  )), 1)
                ]),
                _: 2
              }, 1032, ["action", "copy", "link", "insecure", "secret", "format", "unit-label", "unit-icon", "unit-icon-outlined", "min-decimals", "max-decimals", "valueIcon", "valueIconPosition", "valueColorClass"])) : A("", !0),
              !r.loading && d.format === "label" ? (b(), le(g, {
                key: 1,
                class: "inline-flex my-0.75",
                size: "sm",
                color: f[d.name].color,
                disabled: f[d.name].disabled
              }, {
                default: ee(() => [
                  re(Z(i.cellValue(f[d.name].text, d.name)), 1)
                ]),
                _: 2
              }, 1032, ["color", "disabled"])) : A("", !0),
              r.loading ? (b(), O("div", {
                key: 2,
                class: N(["inline-block bg-gray-400 align-middle", {
                  "w-24 h-2 rounded-md": d.format !== "label",
                  "w-14 h-6 rounded-full": d.format === "label"
                }])
              }, null, 2)) : A("", !0)
            ], 10, Bm))), 128)),
            U("td", {
              class: N(["z-10 pl-3 py-0 max-w-[120px] right-0 bg-white dark:bg-gray-800 transition-all", [
                r.loading ? "before:opacity-100" : "",
                r.informal ? "pr-3 h-12" : "pr-6 overflow-y-clip row-clip group-hover:bg-gray-100 dark:group-hover:bg-gray-800 before:content-[''] before:absolute before:-z-10 before:inset-0 before:opacity-0 group-hover:before:opacity-100 before:transition before:shadow-box dark:before:shadow-box-dark",
                r.informal && !r.bgDark && !r.bgLight ? "!bg-transparent" : "",
                i.hasStickyDetails() || !r.informal ? "sticky" : "relative border-gray-200 dark:border-gray-700 rounded-r-lg border-t border-r border-b"
              ]])
            }, [
              i.hasStickyDetails() || !r.informal ? (b(), O("div", {
                key: 0,
                class: N([
                  r.informal ? "flex items-center absolute -top-2  h-16 left-[-0.75px] -right-4 pr-4 overflow-hidden transition-all" : ""
                ])
              }, [
                (!r.informal && !r.loading || r.informal) && !r.actionDropdownItems.length ? (b(), le(l, {
                  key: 0,
                  size: "sm",
                  icon: r.informal ? r.ctaIcon : "last_page",
                  outlined: r.informal,
                  color: "action",
                  disabled: r.ctaIconDisabled,
                  align: "right",
                  compact: "",
                  onClicked: (d) => i.click(f.id, "actionButton"),
                  class: N(["z-20", {
                    "ml-auto": !r.informal,
                    "justify-center absolute h-12 w-[49px] bg-white dark:bg-gray-800 border-r border-t border-b border-gray-200 dark:border-gray-700 rounded-r-lg transition": r.informal,
                    "cursor-auto": r.informal && !r.ctaIcon
                  }])
                }, {
                  default: ee(() => [
                    re(Z(i.detailsText), 1)
                  ]),
                  _: 2
                }, 1032, ["icon", "outlined", "disabled", "onClicked", "class"])) : (b(), O("div", zm, [
                  _e(s, {
                    onClick: (d) => i.openDropdown(d, f[r.rowItemIdentifier]),
                    size: "sm",
                    icon: "more_horiz",
                    outlined: "",
                    buttonRoundedClasses: "border-none !bg-transparent "
                  }, null, 8, ["onClick"])
                ])),
                r.loading ? (b(), O("div", {
                  key: 2,
                  class: N(["flex flex-row items-center", { "p-3": r.informal }])
                }, [
                  r.informal ? (b(), le(S, {
                    key: 1,
                    size: "sm",
                    class: "text-action-300 dark:text-action-600",
                    outlined: ""
                  }, {
                    default: ee(() => [
                      re(" assignment ")
                    ]),
                    _: 1
                  })) : (b(), O(ke, { key: 0 }, [
                    Hm,
                    _e(S, {
                      size: "sm",
                      class: "text-action-300 dark:text-action-600"
                    }, {
                      default: ee(() => [
                        re(" last_page ")
                      ]),
                      _: 1
                    })
                  ], 64))
                ], 2)) : A("", !0),
                r.informal ? (b(), O("div", jm)) : A("", !0),
                r.informal ? (b(), O("div", {
                  key: 4,
                  class: N(`${r.bgLight} dark:${r.bgDark} absolute top-2 bottom-2 left-0 right-0 z-0 transition`)
                }, null, 2)) : A("", !0),
                r.informal ? (b(), O("div", {
                  key: 5,
                  class: N(["absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition", [
                    r.bgLight ? `${r.bgLight}` : "bg-white",
                    r.bgDark ? `dark:${r.bgDark}` : "dark:bg-gray-800"
                  ]])
                }, null, 2)) : A("", !0)
              ], 2)) : A("", !0)
            ], 2)
          ], 2))), 128))
        ])
      ], 2))
    ], 2),
    _e(yi, {
      "enter-active-class": "transition ease-out duration-200",
      "enter-from-class": "transform opacity-0 scale-95",
      "enter-to-class": "transform opacity-100 scale-100",
      "leave-active-class": "transition ease-in duration-75",
      "leave-from-class": "transform opacity-100 scale-100",
      "leave-to-class": "transform opacity-0 scale-95",
      appear: ""
    }, {
      default: ee(() => [
        Tt(U("div", Gm, [
          U("div", $m, [
            (b(!0), O(ke, null, Fe(r.actionDropdownItems, (f) => (b(), O("button", {
              onClick: (v) => i.dropdownActionSelected(f.identifier),
              key: f.identifier,
              class: "dark:hover:bg-gray-900 cursor-pointer first-of-type:rounded-tr-lg first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-bl-lg hover:bg-gray-100 w-full p-2 text-md dark:text-white text-gray-900 transition-all duration-300 items-center flex flex-row space-x-3 border-t dark:border-gray-700 first-of-type:border-t-0"
            }, [
              _e(S, {
                size: "sm",
                class: "text-gray-400"
              }, {
                default: ee(() => [
                  re(Z(f.icon), 1)
                ]),
                _: 2
              }, 1024),
              U("span", Km, Z(f.textSlot), 1)
            ], 8, qm))), 128))
          ])
        ], 512), [
          [_r, a.dropdownOpen]
        ])
      ]),
      _: 1
    }),
    U("div", {
      class: N(["absolute max-w-[200px] z-30 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-card dark:shadow-card-dark transition-all before:absolute before:content-[''] before:w-4 before:h-4 before:-top-2 before:z-0 before:rotate-45 before:bg-gray-100 dark:before:bg-gray-700 before:border before:border-t-gray-200 before:border-l-gray-200 dark:before:border-t-gray-600 dark:before:border-l-gray-600 before:border-b-gray-100 before:border-r-gray-100 dark:before:border-b-gray-700 dark:before:border-r-gray-700 before:transition", {
        "opacity-0 invisible -translate-y-5": !a.settingsOpened || this.loading,
        "opacity-1 visible translate-y-0": a.settingsOpened && !this.loading,
        "top-32 sm:top-20 right-3 before:right-6": !r.informal,
        "top-36 sm:top-24 right-5 before:right-3": r.informal
      }])
    }, [
      U("div", Xm, [
        (b(!0), O(ke, null, Fe(i.headings, (f, v) => (b(), O("div", {
          key: v,
          class: "flex flex-row justify-between gap-2 p-1 items-center hover:bg-white dark:hover:bg-gray-800 transition"
        }, [
          _e(S, {
            size: "sm",
            outlined: "",
            onClick: (d) => i.toggleHeading(f),
            class: N(["cursor-pointer transition", {
              "text-gray-400": f.visible,
              "text-gray-200 dark:text-gray-600": !f.visible
            }])
          }, {
            default: ee(() => [
              re(Z(f.visible ? "visibility" : "visibility_off"), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "class"]),
          U("span", {
            class: N(["mr-auto prose-md element-text truncate font-normal cursor-pointer transition", {
              "text-gray-900 dark:text-white": f.visible,
              "text-gray-500 dark:text-gray-500": !f.visible
            }]),
            onClick: (d) => i.toggleHeading(f)
          }, Z(f.title), 11, Zm),
          _e(S, {
            size: "sm",
            class: N(["cursor-grab transition", {
              "text-gray-400": f.visible,
              "text-gray-200 dark:text-gray-600": !f.visible
            }]),
            disabled: f.visible
          }, {
            default: ee(() => [
              re("drag_handle")
            ]),
            _: 2
          }, 1032, ["class", "disabled"])
        ]))), 128))
      ])
    ], 2),
    U("div", {
      class: N(["flex flex-col xs:flex-row items-center justify-between prose-xs element-text text-gray-500 border-gray-200 dark:border-gray-700 transition", {
        "border-t": i.currentItems.length > 0 || r.informal,
        "bg-white dark:bg-gray-800 border-b border-l border-r rounded-b-xl translate-z-0": !r.informal,
        "px-6 py-3": !r.informal,
        "px-3 py-2 mx-4": r.informal
      }])
    }, [
      U("div", {
        class: N({
          "italic text-danger-500 dark:text-danger-400 transition": a.error
        }),
        innerHTML: i.footerText
      }, null, 10, Jm),
      U("div", Qm, [
        _e(l, {
          size: "sm",
          icon: "keyboard_arrow_up",
          class: "mr-2",
          onClicked: t[11] || (t[11] = (f) => i.paginate("prev")),
          disabled: i.meta.currentPage <= 1
        }, {
          default: ee(() => [
            re(Z(this.t("table.previous")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        _e(l, {
          size: "sm",
          icon: "keyboard_arrow_down",
          onClicked: t[12] || (t[12] = (f) => i.paginate("next")),
          disabled: i.meta.currentPage >= i.meta.totalPages
        }, {
          default: ee(() => [
            re(Z(this.t("table.next")), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 2)
  ], 2);
}
const yg = /* @__PURE__ */ Me(Lm, [["render", eg]]), Kt = Wi(Ui), tg = {
  name: "PawTypography",
  props: ["view"],
  data() {
    return {
      typography: {
        xxl: Kt.theme.typography.xxl,
        xl: Kt.theme.typography.xl,
        lg: Kt.theme.typography.lg,
        md: Kt.theme.typography.md,
        sm: Kt.theme.typography.sm,
        xs: Kt.theme.typography.xs
      }
    };
  },
  methods: {
    getFontCSS(e) {
      return e.css.constructor.name === "Array" ? e.css[e.css.length - 1] : e.css;
    }
  }
}, rg = { class: "bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl flex flex-col gap-4 transition" }, ng = {
  key: 0,
  class: "flex flex-col gap-8 sm:gap-4"
}, ag = { class: "flex-none font-mono text-xs text-gray-500 w-24" }, ig = /* @__PURE__ */ U("span", { class: "font-bold" }, "Bold", -1), sg = {
  key: 0,
  class: "italic"
}, lg = {
  key: 1,
  class: "text-gray-900 dark:text-white transition"
}, og = /* @__PURE__ */ ml('<h1 class="prose-xxl font-bold">Supercharged for pros.</h1><h2 class="prose-xl font-bold text-gray-500">From $1999</h2><br><br><p class="text-lg"><span class="font-bold">A case full of energy.</span> <span class="text-gray-500">Wirelessly</span></p><p class="prose-md max-w-xs">and effortlessly recharge the MagSafe Charging Case on a MagSafe charger. Fully loaded, the case gives you up to 30 hours of total listening time. And charging AirPods in the case for just 5 minutes generates around an hour of listening time.</p><br><br><p class="prose-sm text-gray-500">Delightfully capable. Surprisingly affordable.</p><p class="prose-xs text-gray-500">Die Displays haben gerundete Ecken. Als Rechteck gemessen hat das Display eine Diagonale von 12,9&quot; (32,77 cm) beim 12,9&quot; iPad Pro, von 11&quot; (27,96 cm) beim 11&quot; iPad Pro, von 10,86&quot; (27,59 cm) beim iPad Air (4. Generation) und von 8,3&quot; (21,08 cm) beim iPad mini (6. Generation). Der tatsächlich sichtbare Displaybereich ist kleiner.</p>', 10), ug = [
  og
];
function cg(e, t, r, n, a, i) {
  return b(), O("div", rg, [
    r.view === "sizes" ? (b(), O("div", ng, [
      (b(!0), O(ke, null, Fe(a.typography, (s, o) => (b(), O("div", {
        key: o,
        class: "sm:flex sm:flex-row sm:justify-items-start sm:items-center sm:gap-10 text-gray-900 dark:text-white transition"
      }, [
        U("p", ag, " prose-" + Z(o) + " " + Z(i.getFontCSS(s).fontSize), 1),
        U("p", {
          class: N(`prose-${o}`)
        }, " Roboto Regular ", 2),
        U("p", {
          class: N([`prose-${o}`, "sm:text-right sm:ml-auto"])
        }, [
          ig,
          ["lg", "md", "sm", "xs"].includes(o) ? (b(), O("span", sg, ", Italic")) : A("", !0),
          ["sm", "xs"].includes(o) ? (b(), O("span", {
            key: 1,
            class: N(["uppercase", { "tracking-wider": o === "sm", "tracking-widest": o === "xs" }])
          }, ", Uppercase", 2)) : A("", !0)
        ], 2)
      ]))), 128))
    ])) : A("", !0),
    r.view === "context" ? (b(), O("div", lg, ug)) : A("", !0)
  ]);
}
const bg = /* @__PURE__ */ Me(tg, [["render", cg]]);
export {
  Zr as PawButton,
  bi as PawCheckbox,
  Rl as PawChip,
  fg as PawColorSwatches,
  sc as PawCrazyInput,
  hg as PawDatePicker,
  Yh as PawDropDown,
  mg as PawFloatingBar,
  st as PawIcon,
  zh as PawLabel,
  _m as PawLazyField,
  us as PawLink,
  gg as PawList,
  wm as PawListItem,
  Au as PawRadio,
  pg as PawSwitch,
  yg as PawTable,
  bg as PawTypography
};
