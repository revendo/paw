import { openBlock as y, createElementBlock as C, Fragment as Oe, renderList as Ye, createElementVNode as W, toDisplayString as Z, normalizeClass as N, createCommentVNode as A, createStaticVNode as Il, defineComponent as ea, h as Ni, getCurrentInstance as ta, inject as Ml, onMounted as Pl, onUnmounted as Ll, shallowRef as Ii, ref as ze, computed as ut, onBeforeMount as Al, watch as Ua, createVNode as Se, Text as Rl, renderSlot as at, resolveComponent as we, createBlock as se, withCtx as te, createTextVNode as re, withDirectives as Ut, vModelText as Mi, vModelDynamic as Fl, vShow as Cn, Transition as Pi, pushScopeId as Yl, popScopeId as Ul } from "vue";
var Wa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Li(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ai = {}, Ri = {}, na = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n) {
    if (n = `${n}`, n === "0")
      return "0";
    if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(n))
      return n.replace(/^[+-]?/, (a) => a === "-" ? "" : "-");
    let r = [
      "var",
      "calc",
      "min",
      "max",
      "clamp"
    ];
    for (const a of r)
      if (n.includes(`${a}(`))
        return `calc(${n} * -1)`;
  }
})(na);
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
    "size",
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
    "textWrap",
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
    "content",
    "forcedColorAdjust"
  ];
})(Fi);
var Yi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n, r) {
    return n === void 0 ? r : Array.isArray(n) ? n : [
      ...new Set(r.filter((i) => n !== !1 && n[i] !== !1).concat(Object.keys(n).filter((i) => n[i] !== !1)))
    ];
  }
})(Yi);
var Ui = {}, sr = {}, ra = { exports: {} }, pe = String, Wi = function() {
  return { isColorSupported: !1, reset: pe, bold: pe, dim: pe, italic: pe, underline: pe, inverse: pe, hidden: pe, strikethrough: pe, black: pe, red: pe, green: pe, yellow: pe, blue: pe, magenta: pe, cyan: pe, white: pe, gray: pe, bgBlack: pe, bgRed: pe, bgGreen: pe, bgYellow: pe, bgBlue: pe, bgMagenta: pe, bgCyan: pe, bgWhite: pe };
};
ra.exports = Wi();
ra.exports.createColors = Wi;
var Vi = ra.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(o, u) {
    for (var m in u)
      Object.defineProperty(o, m, {
        enumerable: !0,
        get: u[m]
      });
  }
  t(e, {
    dim: function() {
      return s;
    },
    default: function() {
      return l;
    }
  });
  const n = /* @__PURE__ */ r(Vi);
  function r(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  let a = /* @__PURE__ */ new Set();
  function i(o, u, m) {
    typeof process < "u" && process.env.JEST_WORKER_ID || m && a.has(m) || (m && a.add(m), console.warn(""), u.forEach((_) => console.warn(o, "-", _)));
  }
  function s(o) {
    return n.default.dim(o);
  }
  const l = {
    info(o, u) {
      i(n.default.bold(n.default.cyan("info")), ...Array.isArray(o) ? [
        o
      ] : [
        u,
        o
      ]);
    },
    warn(o, u) {
      i(n.default.bold(n.default.yellow("warn")), ...Array.isArray(o) ? [
        o
      ] : [
        u,
        o
      ]);
    },
    risk(o, u) {
      i(n.default.bold(n.default.magenta("risk")), ...Array.isArray(o) ? [
        o
      ] : [
        u,
        o
      ]);
    }
  };
})(sr);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(sr);
  function n(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function r({ version: i, from: s, to: l }) {
    t.default.warn(`${s}-color-renamed`, [
      `As of Tailwind CSS ${i}, \`${s}\` has been renamed to \`${l}\`.`,
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
      return r({
        version: "v2.2",
        from: "lightBlue",
        to: "sky"
      }), this.sky;
    },
    get warmGray() {
      return r({
        version: "v3.0",
        from: "warmGray",
        to: "stone"
      }), this.stone;
    },
    get trueGray() {
      return r({
        version: "v3.0",
        from: "trueGray",
        to: "neutral"
      }), this.neutral;
    },
    get coolGray() {
      return r({
        version: "v3.0",
        from: "coolGray",
        to: "gray"
      }), this.gray;
    },
    get blueGray() {
      return r({
        version: "v3.0",
        from: "blueGray",
        to: "slate"
      }), this.slate;
    }
  };
})(Ui);
var Bi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "defaults", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n, ...r) {
    for (let s of r) {
      for (let l in s) {
        var a;
        !(n == null || (a = n.hasOwnProperty) === null || a === void 0) && a.call(n, l) || (n[l] = s[l]);
      }
      for (let l of Object.getOwnPropertySymbols(s)) {
        var i;
        !(n == null || (i = n.hasOwnProperty) === null || i === void 0) && i.call(n, l) || (n[l] = s[l]);
      }
    }
    return n;
  }
})(Bi);
var zi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "toPath", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n) {
    if (Array.isArray(n))
      return n;
    let r = n.split("[").length - 1, a = n.split("]").length - 1;
    if (r !== a)
      throw new Error(`Path is invalid. Has unbalanced brackets: ${n}`);
    return n.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
  }
})(zi);
var Hi = {}, lr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(_, g) {
    for (var O in g)
      Object.defineProperty(_, O, {
        enumerable: !0,
        get: g[O]
      });
  }
  t(e, {
    flagEnabled: function() {
      return l;
    },
    issueFlagNotices: function() {
      return u;
    },
    default: function() {
      return m;
    }
  });
  const n = /* @__PURE__ */ a(Vi), r = /* @__PURE__ */ a(sr);
  function a(_) {
    return _ && _.__esModule ? _ : {
      default: _
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
  function l(_, g) {
    if (s.future.includes(g)) {
      var O, w, f;
      return _.future === "all" || ((f = (w = _ == null || (O = _.future) === null || O === void 0 ? void 0 : O[g]) !== null && w !== void 0 ? w : i[g]) !== null && f !== void 0 ? f : !1);
    }
    if (s.experimental.includes(g)) {
      var p, d, v;
      return _.experimental === "all" || ((v = (d = _ == null || (p = _.experimental) === null || p === void 0 ? void 0 : p[g]) !== null && d !== void 0 ? d : i[g]) !== null && v !== void 0 ? v : !1);
    }
    return !1;
  }
  function o(_) {
    if (_.experimental === "all")
      return s.experimental;
    var g;
    return Object.keys((g = _ == null ? void 0 : _.experimental) !== null && g !== void 0 ? g : {}).filter((O) => s.experimental.includes(O) && _.experimental[O]);
  }
  function u(_) {
    if (process.env.JEST_WORKER_ID === void 0 && o(_).length > 0) {
      let g = o(_).map((O) => n.default.yellow(O)).join(", ");
      r.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${g}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  const m = s;
})(lr);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const t = lr, n = /* @__PURE__ */ a(sr);
  function r(s) {
    if (typeof WeakMap != "function")
      return null;
    var l = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
    return (r = function(u) {
      return u ? o : l;
    })(s);
  }
  function a(s, l) {
    if (!l && s && s.__esModule)
      return s;
    if (s === null || typeof s != "object" && typeof s != "function")
      return {
        default: s
      };
    var o = r(l);
    if (o && o.has(s))
      return o.get(s);
    var u = {}, m = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var _ in s)
      if (_ !== "default" && Object.prototype.hasOwnProperty.call(s, _)) {
        var g = m ? Object.getOwnPropertyDescriptor(s, _) : null;
        g && (g.get || g.set) ? Object.defineProperty(u, _, g) : u[_] = s[_];
      }
    return u.default = s, o && o.set(s, u), u;
  }
  function i(s) {
    if ((() => {
      if (s.purge || !s.content || !Array.isArray(s.content) && !(typeof s.content == "object" && s.content !== null))
        return !1;
      if (Array.isArray(s.content))
        return s.content.every((u) => typeof u == "string" ? !0 : !(typeof (u == null ? void 0 : u.raw) != "string" || u != null && u.extension && typeof (u == null ? void 0 : u.extension) != "string"));
      if (typeof s.content == "object" && s.content !== null) {
        if (Object.keys(s.content).some((u) => ![
          "files",
          "relative",
          "extract",
          "transform"
        ].includes(u)))
          return !1;
        if (Array.isArray(s.content.files)) {
          if (!s.content.files.every((u) => typeof u == "string" ? !0 : !(typeof (u == null ? void 0 : u.raw) != "string" || u != null && u.extension && typeof (u == null ? void 0 : u.extension) != "string")))
            return !1;
          if (typeof s.content.extract == "object") {
            for (let u of Object.values(s.content.extract))
              if (typeof u != "function")
                return !1;
          } else if (!(s.content.extract === void 0 || typeof s.content.extract == "function"))
            return !1;
          if (typeof s.content.transform == "object") {
            for (let u of Object.values(s.content.transform))
              if (typeof u != "function")
                return !1;
          } else if (!(s.content.transform === void 0 || typeof s.content.transform == "function"))
            return !1;
          if (typeof s.content.relative != "boolean" && typeof s.content.relative < "u")
            return !1;
        }
        return !0;
      }
      return !1;
    })() || n.default.warn("purge-deprecation", [
      "The `purge`/`content` options have changed in Tailwind CSS v3.0.",
      "Update your configuration file to eliminate this warning.",
      "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"
    ]), s.safelist = (() => {
      var u;
      let { content: m, purge: _, safelist: g } = s;
      return Array.isArray(g) ? g : Array.isArray(m == null ? void 0 : m.safelist) ? m.safelist : Array.isArray(_ == null ? void 0 : _.safelist) ? _.safelist : Array.isArray(_ == null || (u = _.options) === null || u === void 0 ? void 0 : u.safelist) ? _.options.safelist : [];
    })(), s.blocklist = (() => {
      let { blocklist: u } = s;
      if (Array.isArray(u)) {
        if (u.every((m) => typeof m == "string"))
          return u;
        n.default.warn("blocklist-invalid", [
          "The `blocklist` option must be an array of strings.",
          "https://tailwindcss.com/docs/content-configuration#discarding-classes"
        ]);
      }
      return [];
    })(), typeof s.prefix == "function")
      n.default.warn("prefix-function", [
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
        let { content: u } = s;
        return u != null && u.relative ? u.relative : (0, t.flagEnabled)(s, "relativeContentPathsByDefault");
      })(),
      files: (() => {
        let { content: u, purge: m } = s;
        return Array.isArray(m) ? m : Array.isArray(m == null ? void 0 : m.content) ? m.content : Array.isArray(u) ? u : Array.isArray(u == null ? void 0 : u.content) ? u.content : Array.isArray(u == null ? void 0 : u.files) ? u.files : [];
      })(),
      extract: (() => {
        let u = (() => {
          var g, O, w, f, p, d, v, E, k, L;
          return !((g = s.purge) === null || g === void 0) && g.extract ? s.purge.extract : !((O = s.content) === null || O === void 0) && O.extract ? s.content.extract : !((w = s.purge) === null || w === void 0 || (f = w.extract) === null || f === void 0) && f.DEFAULT ? s.purge.extract.DEFAULT : !((p = s.content) === null || p === void 0 || (d = p.extract) === null || d === void 0) && d.DEFAULT ? s.content.extract.DEFAULT : !((v = s.purge) === null || v === void 0 || (E = v.options) === null || E === void 0) && E.extractors ? s.purge.options.extractors : !((k = s.content) === null || k === void 0 || (L = k.options) === null || L === void 0) && L.extractors ? s.content.options.extractors : {};
        })(), m = {}, _ = (() => {
          var g, O, w, f;
          if (!((g = s.purge) === null || g === void 0 || (O = g.options) === null || O === void 0) && O.defaultExtractor)
            return s.purge.options.defaultExtractor;
          if (!((w = s.content) === null || w === void 0 || (f = w.options) === null || f === void 0) && f.defaultExtractor)
            return s.content.options.defaultExtractor;
        })();
        if (_ !== void 0 && (m.DEFAULT = _), typeof u == "function")
          m.DEFAULT = u;
        else if (Array.isArray(u))
          for (let { extensions: g, extractor: O } of u ?? [])
            for (let w of g)
              m[w] = O;
        else
          typeof u == "object" && u !== null && Object.assign(m, u);
        return m;
      })(),
      transform: (() => {
        let u = (() => {
          var _, g, O, w, f, p;
          return !((_ = s.purge) === null || _ === void 0) && _.transform ? s.purge.transform : !((g = s.content) === null || g === void 0) && g.transform ? s.content.transform : !((O = s.purge) === null || O === void 0 || (w = O.transform) === null || w === void 0) && w.DEFAULT ? s.purge.transform.DEFAULT : !((f = s.content) === null || f === void 0 || (p = f.transform) === null || p === void 0) && p.DEFAULT ? s.content.transform.DEFAULT : {};
        })(), m = {};
        return typeof u == "function" && (m.DEFAULT = u), typeof u == "object" && u !== null && Object.assign(m, u), m;
      })()
    };
    for (let u of s.content.files)
      if (typeof u == "string" && /{([^,]*?)}/g.test(u)) {
        n.default.warn("invalid-glob-braces", [
          `The glob pattern ${(0, n.dim)(u)} in your Tailwind CSS configuration is invalid.`,
          `Update it to ${(0, n.dim)(u.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`
        ]);
        break;
      }
    return s;
  }
})(Hi);
var ji = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n) {
    if (Object.prototype.toString.call(n) !== "[object Object]")
      return !1;
    const r = Object.getPrototypeOf(n);
    return r === null || Object.getPrototypeOf(r) === null;
  }
})(ji);
var Gi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "cloneDeep", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n) {
    return Array.isArray(n) ? n.map((r) => t(r)) : typeof n == "object" && n !== null ? Object.fromEntries(Object.entries(n).map(([r, a]) => [
      r,
      t(a)
    ])) : n;
  }
})(Gi);
var $i = {}, Ki = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n) {
    return n.replace(/\\,/g, "\\2c ");
  }
})(Ki);
var aa = {}, ia = {}, qi = {};
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
})(qi);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(w, f) {
    for (var p in f)
      Object.defineProperty(w, p, {
        enumerable: !0,
        get: f[p]
      });
  }
  t(e, {
    parseColor: function() {
      return g;
    },
    formatColor: function() {
      return O;
    }
  });
  const n = /* @__PURE__ */ r(qi);
  function r(w) {
    return w && w.__esModule ? w : {
      default: w
    };
  }
  let a = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, i = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, s = /(?:\d+|\d*\.\d+)%?/, l = /(?:\s*,\s*|\s+)/, o = /\s*[,/]\s*/, u = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/, m = new RegExp(`^(rgba?)\\(\\s*(${s.source}|${u.source})(?:${l.source}(${s.source}|${u.source}))?(?:${l.source}(${s.source}|${u.source}))?(?:${o.source}(${s.source}|${u.source}))?\\s*\\)$`), _ = new RegExp(`^(hsla?)\\(\\s*((?:${s.source})(?:deg|rad|grad|turn)?|${u.source})(?:${l.source}(${s.source}|${u.source}))?(?:${l.source}(${s.source}|${u.source}))?(?:${o.source}(${s.source}|${u.source}))?\\s*\\)$`);
  function g(w, { loose: f = !1 } = {}) {
    var p, d;
    if (typeof w != "string")
      return null;
    if (w = w.trim(), w === "transparent")
      return {
        mode: "rgb",
        color: [
          "0",
          "0",
          "0"
        ],
        alpha: "0"
      };
    if (w in n.default)
      return {
        mode: "rgb",
        color: n.default[w].map((P) => P.toString())
      };
    let v = w.replace(i, (P, V, X, b, U) => [
      "#",
      V,
      V,
      X,
      X,
      b,
      b,
      U ? U + U : ""
    ].join("")).match(a);
    if (v !== null)
      return {
        mode: "rgb",
        color: [
          parseInt(v[1], 16),
          parseInt(v[2], 16),
          parseInt(v[3], 16)
        ].map((P) => P.toString()),
        alpha: v[4] ? (parseInt(v[4], 16) / 255).toString() : void 0
      };
    var E;
    let k = (E = w.match(m)) !== null && E !== void 0 ? E : w.match(_);
    if (k === null)
      return null;
    let L = [
      k[2],
      k[3],
      k[4]
    ].filter(Boolean).map((P) => P.toString());
    return L.length === 2 && L[0].startsWith("var(") ? {
      mode: k[1],
      color: [
        L[0]
      ],
      alpha: L[1]
    } : !f && L.length !== 3 || L.length < 3 && !L.some((P) => /^var\(.*?\)$/.test(P)) ? null : {
      mode: k[1],
      color: L,
      alpha: (p = k[5]) === null || p === void 0 || (d = p.toString) === null || d === void 0 ? void 0 : d.call(p)
    };
  }
  function O({ mode: w, color: f, alpha: p }) {
    let d = p !== void 0;
    return w === "rgba" || w === "hsla" ? `${w}(${f.join(", ")}${d ? `, ${p}` : ""})` : `${w}(${f.join(" ")}${d ? ` / ${p}` : ""})`;
  }
})(ia);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(i, s) {
    for (var l in s)
      Object.defineProperty(i, l, {
        enumerable: !0,
        get: s[l]
      });
  }
  t(e, {
    withAlphaValue: function() {
      return r;
    },
    default: function() {
      return a;
    }
  });
  const n = ia;
  function r(i, s, l) {
    if (typeof i == "function")
      return i({
        opacityValue: s
      });
    let o = (0, n.parseColor)(i, {
      loose: !0
    });
    return o === null ? l : (0, n.formatColor)({
      ...o,
      alpha: s
    });
  }
  function a({ color: i, property: s, variable: l }) {
    let o = [].concat(s);
    if (typeof i == "function")
      return {
        [l]: "1",
        ...Object.fromEntries(o.map((m) => [
          m,
          i({
            opacityVariable: l,
            opacityValue: `var(${l})`
          })
        ]))
      };
    const u = (0, n.parseColor)(i);
    return u === null ? Object.fromEntries(o.map((m) => [
      m,
      i
    ])) : u.alpha !== void 0 ? Object.fromEntries(o.map((m) => [
      m,
      i
    ])) : {
      [l]: "1",
      ...Object.fromEntries(o.map((m) => [
        m,
        (0, n.formatColor)({
          ...u,
          alpha: `var(${l})`
        })
      ]))
    };
  }
})(aa);
var sa = {}, Xi = {}, or = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "splitAtTopLevelOnly", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n, r) {
    let a = [], i = [], s = 0, l = !1;
    for (let o = 0; o < n.length; o++) {
      let u = n[o];
      a.length === 0 && u === r[0] && !l && (r.length === 1 || n.slice(o, o + r.length) === r) && (i.push(n.slice(s, o)), s = o + r.length), l ? l = !1 : u === "\\" && (l = !0), u === "(" || u === "[" || u === "{" ? a.push(u) : (u === ")" && a[a.length - 1] === "(" || u === "]" && a[a.length - 1] === "[" || u === "}" && a[a.length - 1] === "{") && a.pop();
    }
    return i.push(n.slice(s)), i;
  }
})(or);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(o, u) {
    for (var m in u)
      Object.defineProperty(o, m, {
        enumerable: !0,
        get: u[m]
      });
  }
  t(e, {
    parseBoxShadowValue: function() {
      return s;
    },
    formatBoxShadowValue: function() {
      return l;
    }
  });
  const n = or;
  let r = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), a = /\ +(?![^(]*\))/g, i = /^-?(\d+|\.\d+)(.*?)$/g;
  function s(o) {
    return (0, n.splitAtTopLevelOnly)(o, ",").map((m) => {
      let _ = m.trim(), g = {
        raw: _
      }, O = _.split(a), w = /* @__PURE__ */ new Set();
      for (let f of O)
        i.lastIndex = 0, !w.has("KEYWORD") && r.has(f) ? (g.keyword = f, w.add("KEYWORD")) : i.test(f) ? w.has("X") ? w.has("Y") ? w.has("BLUR") ? w.has("SPREAD") || (g.spread = f, w.add("SPREAD")) : (g.blur = f, w.add("BLUR")) : (g.y = f, w.add("Y")) : (g.x = f, w.add("X")) : g.color ? (g.unknown || (g.unknown = []), g.unknown.push(f)) : g.color = f;
      return g.valid = g.x !== void 0 && g.y !== void 0, g;
    });
  }
  function l(o) {
    return o.map((u) => u.valid ? [
      u.keyword,
      u.x,
      u.y,
      u.blur,
      u.spread,
      u.color
    ].filter(Boolean).join(" ") : u.raw).join(", ");
  }
})(Xi);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(T, $) {
    for (var J in $)
      Object.defineProperty(T, J, {
        enumerable: !0,
        get: $[J]
      });
  }
  t(e, {
    normalize: function() {
      return o;
    },
    url: function() {
      return m;
    },
    number: function() {
      return _;
    },
    percentage: function() {
      return g;
    },
    length: function() {
      return f;
    },
    lineWidth: function() {
      return d;
    },
    shadow: function() {
      return v;
    },
    color: function() {
      return E;
    },
    image: function() {
      return k;
    },
    gradient: function() {
      return P;
    },
    position: function() {
      return X;
    },
    familyName: function() {
      return b;
    },
    genericName: function() {
      return H;
    },
    absoluteSize: function() {
      return Y;
    },
    relativeSize: function() {
      return R;
    }
  });
  const n = ia, r = Xi, a = or;
  let i = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function s(T) {
    return i.some(($) => new RegExp(`^${$}\\(.*\\)`).test(T));
  }
  const l = /* @__PURE__ */ new Set([
    // Concrete properties
    "scroll-timeline-name",
    "timeline-scope",
    "view-timeline-name",
    "font-palette",
    // Shorthand properties
    "scroll-timeline",
    "animation-timeline",
    "view-timeline"
  ]);
  function o(T, $ = null, J = !0) {
    let q = $ && l.has($.property);
    return T.startsWith("--") && !q ? `var(${T})` : T.includes("url(") ? T.split(/(url\(.*?\))/g).filter(Boolean).map((ce) => /^url\(.*?\)$/.test(ce) ? ce : o(ce, $, !1)).join("") : (T = T.replace(/([^\\])_+/g, (ce, pt) => pt + " ".repeat(ce.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), J && (T = T.trim()), T = u(T), T);
  }
  function u(T) {
    let $ = [
      "theme"
    ], J = [
      "min-content",
      "max-content",
      "fit-content",
      // Env
      "safe-area-inset-top",
      "safe-area-inset-right",
      "safe-area-inset-bottom",
      "safe-area-inset-left",
      "titlebar-area-x",
      "titlebar-area-y",
      "titlebar-area-width",
      "titlebar-area-height",
      "keyboard-inset-top",
      "keyboard-inset-right",
      "keyboard-inset-bottom",
      "keyboard-inset-left",
      "keyboard-inset-width",
      "keyboard-inset-height",
      "radial-gradient",
      "linear-gradient",
      "conic-gradient",
      "repeating-radial-gradient",
      "repeating-linear-gradient",
      "repeating-conic-gradient"
    ];
    return T.replace(/(calc|min|max|clamp)\(.+\)/g, (q) => {
      let ce = "";
      function pt() {
        let ke = ce.trimEnd();
        return ke[ke.length - 1];
      }
      for (let ke = 0; ke < q.length; ke++) {
        let Ke = function(Me) {
          return Me.split("").every((He, et) => q[ke + et] === He);
        }, st = function(Me) {
          let He = 1 / 0;
          for (let yt of Me) {
            let qe = q.indexOf(yt, ke);
            qe !== -1 && qe < He && (He = qe);
          }
          let et = q.slice(ke, He);
          return ke += et.length - 1, et;
        }, _t = q[ke];
        if (Ke("var"))
          ce += st([
            ")",
            ","
          ]);
        else if (J.some((Me) => Ke(Me))) {
          let Me = J.find((He) => Ke(He));
          ce += Me, ke += Me.length - 1;
        } else
          $.some((Me) => Ke(Me)) ? ce += st([
            ")"
          ]) : Ke("[") ? ce += st([
            "]"
          ]) : [
            "+",
            "-",
            "*",
            "/"
          ].includes(_t) && ![
            "(",
            "+",
            "-",
            "*",
            "/",
            ","
          ].includes(pt()) ? ce += ` ${_t} ` : ce += _t;
      }
      return ce.replace(/\s+/g, " ");
    });
  }
  function m(T) {
    return T.startsWith("url(");
  }
  function _(T) {
    return !isNaN(Number(T)) || s(T);
  }
  function g(T) {
    return T.endsWith("%") && _(T.slice(0, -1)) || s(T);
  }
  let w = `(?:${[
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
  function f(T) {
    return T === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${w}$`).test(T) || s(T);
  }
  let p = /* @__PURE__ */ new Set([
    "thin",
    "medium",
    "thick"
  ]);
  function d(T) {
    return p.has(T);
  }
  function v(T) {
    let $ = (0, r.parseBoxShadowValue)(o(T));
    for (let J of $)
      if (!J.valid)
        return !1;
    return !0;
  }
  function E(T) {
    let $ = 0;
    return (0, a.splitAtTopLevelOnly)(T, "_").every((q) => (q = o(q), q.startsWith("var(") ? !0 : (0, n.parseColor)(q, {
      loose: !0
    }) !== null ? ($++, !0) : !1)) ? $ > 0 : !1;
  }
  function k(T) {
    let $ = 0;
    return (0, a.splitAtTopLevelOnly)(T, ",").every((q) => (q = o(q), q.startsWith("var(") ? !0 : m(q) || P(q) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((ce) => q.startsWith(ce)) ? ($++, !0) : !1)) ? $ > 0 : !1;
  }
  let L = /* @__PURE__ */ new Set([
    "conic-gradient",
    "linear-gradient",
    "radial-gradient",
    "repeating-conic-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient"
  ]);
  function P(T) {
    T = o(T);
    for (let $ of L)
      if (T.startsWith(`${$}(`))
        return !0;
    return !1;
  }
  let V = /* @__PURE__ */ new Set([
    "center",
    "top",
    "right",
    "bottom",
    "left"
  ]);
  function X(T) {
    let $ = 0;
    return (0, a.splitAtTopLevelOnly)(T, "_").every((q) => (q = o(q), q.startsWith("var(") ? !0 : V.has(q) || f(q) || g(q) ? ($++, !0) : !1)) ? $ > 0 : !1;
  }
  function b(T) {
    let $ = 0;
    return (0, a.splitAtTopLevelOnly)(T, ",").every((q) => (q = o(q), q.startsWith("var(") ? !0 : q.includes(" ") && !/(['"])([^"']+)\1/g.test(q) || /^\d/g.test(q) ? !1 : ($++, !0))) ? $ > 0 : !1;
  }
  let U = /* @__PURE__ */ new Set([
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
  function H(T) {
    return U.has(T);
  }
  let D = /* @__PURE__ */ new Set([
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "x-large",
    "xxx-large"
  ]);
  function Y(T) {
    return D.has(T);
  }
  let G = /* @__PURE__ */ new Set([
    "larger",
    "smaller"
  ]);
  function R(T) {
    return G.has(T);
  }
})(sa);
var Zi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  const t = sa, n = or;
  function r(a) {
    let i = [
      "cover",
      "contain"
    ];
    return (0, n.splitAtTopLevelOnly)(a, ",").every((s) => {
      let l = (0, n.splitAtTopLevelOnly)(s, "_").filter(Boolean);
      return l.length === 1 && i.includes(l[0]) ? !0 : l.length !== 1 && l.length !== 2 ? !1 : l.every((o) => (0, t.length)(o) || (0, t.percentage)(o) || o === "auto");
    });
  }
})(Zi);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(b, U) {
    for (var H in U)
      Object.defineProperty(b, H, {
        enumerable: !0,
        get: U[H]
      });
  }
  t(e, {
    updateAllClasses: function() {
      return u;
    },
    asValue: function() {
      return g;
    },
    parseColorFormat: function() {
      return f;
    },
    asColor: function() {
      return d;
    },
    asLookupValue: function() {
      return v;
    },
    typeMap: function() {
      return k;
    },
    coerceValue: function() {
      return V;
    },
    getMatchingTypes: function() {
      return X;
    }
  });
  const n = /* @__PURE__ */ o(Ki), r = aa, a = sa, i = /* @__PURE__ */ o(na), s = Zi, l = lr;
  function o(b) {
    return b && b.__esModule ? b : {
      default: b
    };
  }
  function u(b, U) {
    b.walkClasses((H) => {
      H.value = U(H.value), H.raws && H.raws.value && (H.raws.value = (0, n.default)(H.raws.value));
    });
  }
  function m(b, U) {
    if (!O(b))
      return;
    let H = b.slice(1, -1);
    if (U(H))
      return (0, a.normalize)(H);
  }
  function _(b, U = {}, H) {
    let D = U[b];
    if (D !== void 0)
      return (0, i.default)(D);
    if (O(b)) {
      let Y = m(b, H);
      return Y === void 0 ? void 0 : (0, i.default)(Y);
    }
  }
  function g(b, U = {}, { validate: H = () => !0 } = {}) {
    var D;
    let Y = (D = U.values) === null || D === void 0 ? void 0 : D[b];
    return Y !== void 0 ? Y : U.supportsNegativeValues && b.startsWith("-") ? _(b.slice(1), U.values, H) : m(b, H);
  }
  function O(b) {
    return b.startsWith("[") && b.endsWith("]");
  }
  function w(b) {
    let U = b.lastIndexOf("/"), H = b.lastIndexOf("[", U), D = b.indexOf("]", U);
    return b[U - 1] === "]" || b[U + 1] === "[" || H !== -1 && D !== -1 && H < U && U < D && (U = b.lastIndexOf("/", H)), U === -1 || U === b.length - 1 ? [
      b,
      void 0
    ] : O(b) && !b.includes("]/[") ? [
      b,
      void 0
    ] : [
      b.slice(0, U),
      b.slice(U + 1)
    ];
  }
  function f(b) {
    if (typeof b == "string" && b.includes("<alpha-value>")) {
      let U = b;
      return ({ opacityValue: H = 1 }) => U.replace("<alpha-value>", H);
    }
    return b;
  }
  function p(b) {
    return (0, a.normalize)(b.slice(1, -1));
  }
  function d(b, U = {}, { tailwindConfig: H = {} } = {}) {
    var D;
    if (((D = U.values) === null || D === void 0 ? void 0 : D[b]) !== void 0) {
      var Y;
      return f((Y = U.values) === null || Y === void 0 ? void 0 : Y[b]);
    }
    let [G, R] = w(b);
    if (R !== void 0) {
      var T, $, J, q;
      let ce = (q = (T = U.values) === null || T === void 0 ? void 0 : T[G]) !== null && q !== void 0 ? q : O(G) ? G.slice(1, -1) : void 0;
      return ce === void 0 ? void 0 : (ce = f(ce), O(R) ? (0, r.withAlphaValue)(ce, p(R)) : (($ = H.theme) === null || $ === void 0 || (J = $.opacity) === null || J === void 0 ? void 0 : J[R]) === void 0 ? void 0 : (0, r.withAlphaValue)(ce, H.theme.opacity[R]));
    }
    return g(b, U, {
      validate: a.color
    });
  }
  function v(b, U = {}) {
    var H;
    return (H = U.values) === null || H === void 0 ? void 0 : H[b];
  }
  function E(b) {
    return (U, H) => g(U, H, {
      validate: b
    });
  }
  let k = {
    any: g,
    color: d,
    url: E(a.url),
    image: E(a.image),
    length: E(a.length),
    percentage: E(a.percentage),
    position: E(a.position),
    lookup: v,
    "generic-name": E(a.genericName),
    "family-name": E(a.familyName),
    number: E(a.number),
    "line-width": E(a.lineWidth),
    "absolute-size": E(a.absoluteSize),
    "relative-size": E(a.relativeSize),
    shadow: E(a.shadow),
    size: E(s.backgroundSize)
  }, L = Object.keys(k);
  function P(b, U) {
    let H = b.indexOf(U);
    return H === -1 ? [
      void 0,
      b
    ] : [
      b.slice(0, H),
      b.slice(H + 1)
    ];
  }
  function V(b, U, H, D) {
    if (H.values && U in H.values)
      for (let { type: G } of b ?? []) {
        let R = k[G](U, H, {
          tailwindConfig: D
        });
        if (R !== void 0)
          return [
            R,
            G,
            null
          ];
      }
    if (O(U)) {
      let G = U.slice(1, -1), [R, T] = P(G, ":");
      if (!/^[\w-_]+$/g.test(R))
        T = G;
      else if (R !== void 0 && !L.includes(R))
        return [];
      if (T.length > 0 && L.includes(R))
        return [
          g(`[${T}]`, H),
          R,
          null
        ];
    }
    let Y = X(b, U, H, D);
    for (let G of Y)
      return G;
    return [];
  }
  function* X(b, U, H, D) {
    let Y = (0, l.flagEnabled)(D, "generalizedModifiers"), [G, R] = w(U);
    if (Y && H.modifiers != null && (H.modifiers === "any" || typeof H.modifiers == "object" && (R && O(R) || R in H.modifiers)) || (G = U, R = void 0), R !== void 0 && G === "" && (G = "DEFAULT"), R !== void 0 && typeof H.modifiers == "object") {
      var $, J;
      let q = (J = ($ = H.modifiers) === null || $ === void 0 ? void 0 : $[R]) !== null && J !== void 0 ? J : null;
      q !== null ? R = q : O(R) && (R = p(R));
    }
    for (let { type: q } of b ?? []) {
      let ce = k[q](G, H, {
        tailwindConfig: D
      });
      ce !== void 0 && (yield [
        ce,
        q,
        R ?? null
      ]);
    }
  }
})($i);
var Ji = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n) {
    return typeof n == "function" ? n({}) : n;
  }
})(Ji);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return H;
    }
  });
  const t = /* @__PURE__ */ O(na), n = /* @__PURE__ */ O(Fi), r = /* @__PURE__ */ O(Yi), a = /* @__PURE__ */ O(Ui), i = Bi, s = zi, l = Hi, o = /* @__PURE__ */ O(ji), u = Gi, m = $i, _ = aa, g = /* @__PURE__ */ O(Ji);
  function O(D) {
    return D && D.__esModule ? D : {
      default: D
    };
  }
  function w(D) {
    return typeof D == "function";
  }
  function f(D, ...Y) {
    let G = Y.pop();
    for (let R of Y)
      for (let T in R) {
        let $ = G(D[T], R[T]);
        $ === void 0 ? (0, o.default)(D[T]) && (0, o.default)(R[T]) ? D[T] = f({}, D[T], R[T], G) : D[T] = R[T] : D[T] = $;
      }
    return D;
  }
  const p = {
    colors: a.default,
    negative(D) {
      return Object.keys(D).filter((Y) => D[Y] !== "0").reduce((Y, G) => {
        let R = (0, t.default)(D[G]);
        return R !== void 0 && (Y[`-${G}`] = R), Y;
      }, {});
    },
    breakpoints(D) {
      return Object.keys(D).filter((Y) => typeof D[Y] == "string").reduce((Y, G) => ({
        ...Y,
        [`screen-${G}`]: D[G]
      }), {});
    }
  };
  function d(D, ...Y) {
    return w(D) ? D(...Y) : D;
  }
  function v(D) {
    return D.reduce((Y, { extend: G }) => f(Y, G, (R, T) => R === void 0 ? [
      T
    ] : Array.isArray(R) ? [
      T,
      ...R
    ] : [
      T,
      R
    ]), {});
  }
  function E(D) {
    return {
      ...D.reduce((Y, G) => (0, i.defaults)(Y, G), {}),
      // In order to resolve n config objects, we combine all of their `extend` properties
      // into arrays instead of objects so they aren't overridden.
      extend: v(D)
    };
  }
  function k(D, Y) {
    if (Array.isArray(D) && (0, o.default)(D[0]))
      return D.concat(Y);
    if (Array.isArray(Y) && (0, o.default)(Y[0]) && (0, o.default)(D))
      return [
        D,
        ...Y
      ];
    if (Array.isArray(Y))
      return Y;
  }
  function L({ extend: D, ...Y }) {
    return f(Y, D, (G, R) => !w(G) && !R.some(w) ? f({}, G, ...R, k) : (T, $) => f({}, ...[
      G,
      ...R
    ].map((J) => d(J, T, $)), k));
  }
  function* P(D) {
    let Y = (0, s.toPath)(D);
    if (Y.length === 0 || (yield Y, Array.isArray(D)))
      return;
    let G = /^(.*?)\s*\/\s*([^/]+)$/, R = D.match(G);
    if (R !== null) {
      let [, T, $] = R, J = (0, s.toPath)(T);
      J.alpha = $, yield J;
    }
  }
  function V(D) {
    const Y = (G, R) => {
      for (const T of P(G)) {
        let $ = 0, J = D;
        for (; J != null && $ < T.length; )
          J = J[T[$++]], J = w(J) && (T.alpha === void 0 || $ <= T.length - 1) ? J(Y, p) : J;
        if (J !== void 0) {
          if (T.alpha !== void 0) {
            let q = (0, m.parseColorFormat)(J);
            return (0, _.withAlphaValue)(q, T.alpha, (0, g.default)(q));
          }
          return (0, o.default)(J) ? (0, u.cloneDeep)(J) : J;
        }
      }
      return R;
    };
    return Object.assign(Y, {
      theme: Y,
      ...p
    }), Object.keys(D).reduce((G, R) => (G[R] = w(D[R]) ? D[R](Y, p) : D[R], G), {});
  }
  function X(D) {
    let Y = [];
    return D.forEach((G) => {
      Y = [
        ...Y,
        G
      ];
      var R;
      const T = (R = G == null ? void 0 : G.plugins) !== null && R !== void 0 ? R : [];
      T.length !== 0 && T.forEach(($) => {
        $.__isOptionsFunction && ($ = $());
        var J;
        Y = [
          ...Y,
          ...X([
            (J = $ == null ? void 0 : $.config) !== null && J !== void 0 ? J : {}
          ])
        ];
      });
    }), Y;
  }
  function b(D) {
    return [
      ...D
    ].reduceRight((G, R) => w(R) ? R({
      corePlugins: G
    }) : (0, r.default)(R, G), n.default);
  }
  function U(D) {
    return [
      ...D
    ].reduceRight((G, R) => [
      ...G,
      ...R
    ], []);
  }
  function H(D) {
    let Y = [
      ...X(D),
      {
        prefix: "",
        important: !1,
        separator: ":"
      }
    ];
    var G, R;
    return (0, l.normalizeConfig)((0, i.defaults)({
      theme: V(L(E(Y.map((T) => (G = T == null ? void 0 : T.theme) !== null && G !== void 0 ? G : {})))),
      corePlugins: b(Y.map((T) => T.corePlugins)),
      plugins: U(D.map((T) => (R = T == null ? void 0 : T.plugins) !== null && R !== void 0 ? R : []))
    }, ...Y));
  }
})(Ri);
var Qi = {}, Wl = {
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
      busy: 'busy="true"',
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
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
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
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridRowStart: {
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
    gridTemplateColumns: {
      none: "none",
      subgrid: "subgrid",
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
      subgrid: "subgrid",
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
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
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
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    maxWidth: ({ theme: e, breakpoints: t }) => ({
      ...e("spacing"),
      none: "none",
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
    minHeight: ({ theme: e }) => ({
      ...e("spacing"),
      full: "100%",
      screen: "100vh",
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    minWidth: ({ theme: e }) => ({
      ...e("spacing"),
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
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
      15: "0.15",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      35: "0.35",
      40: "0.4",
      45: "0.45",
      50: "0.5",
      55: "0.55",
      60: "0.6",
      65: "0.65",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      85: "0.85",
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
    size: ({ theme: e }) => ({
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
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
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
      svw: "100svw",
      lvw: "100lvw",
      dvw: "100dvw",
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
  const t = /* @__PURE__ */ r(Wl), n = lr;
  function r(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function a(i) {
    var s;
    const l = ((s = i == null ? void 0 : i.presets) !== null && s !== void 0 ? s : [
      t.default
    ]).slice().reverse().flatMap((m) => a(m instanceof Function ? m() : m)), o = {
      // Add experimental configs here...
      respectDefaultRingColorOpacity: {
        theme: {
          ringColor: ({ theme: m }) => ({
            DEFAULT: "#3b82f67f",
            ...m("colors")
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
    }, u = Object.keys(o).filter((m) => (0, n.flagEnabled)(i, m)).map((m) => o[m]);
    return [
      i,
      ...u,
      ...l
    ];
  }
})(Qi);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ r(Ri), n = /* @__PURE__ */ r(Qi);
  function r(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  function a(...i) {
    let [, ...s] = (0, n.default)(i[0]);
    return (0, t.default)([
      ...i,
      ...s
    ]);
  }
})(Ai);
let Tr = Ai;
var Vl = (Tr.__esModule ? Tr : { default: Tr }).default;
const es = /* @__PURE__ */ Li(Vl), Va = require("tailwindcss/defaultTheme"), Ba = require("tailwindcss/plugin"), At = require("tailwindcss/colors"), ts = {
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
        sans: ["Roboto", ...Va.fontFamily.sans],
        mono: ["Roboto Mono", ...Va.fontFamily.mono]
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
        box: `0px 1px 4px ${At.gray[800]}1A, 0px 4px 8px ${At.gray[800]}33`,
        "box-dark": `0px 1px 4px ${At.gray[900]}, 0px 4px 8px ${At.gray[900]}`,
        card: `0px 2px 4px ${At.gray[800]}1A, 0px 4px 12px ${At.gray[800]}40`,
        "card-dark": "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 4px 12px rgba(0, 0, 0, 0.5)",
        "gray-200-border-b-full": `0 1px 0 0  ${At.gray[200]}`,
        "gray-700-border-b-full": `0 1px 0 0  ${At.gray[700]}`
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
    Ba(({ addVariant: e, e: t }) => {
      e("before", ({ modifySelectors: n, separator: r }) => {
        n(({ className: a }) => `.${t(`before${r}${a}`)}::before`);
      }), e("after", ({ modifySelectors: n, separator: r }) => {
        n(({ className: a }) => `.${t(`after${r}${a}`)}::after`);
      });
    }),
    Ba(({ addUtilities: e }) => {
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
}, Re = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, sn = es(ts), Bl = {
  name: "PawTypography",
  props: ["view"],
  data() {
    return {
      typography: {
        xxl: sn.theme.typography.xxl,
        xl: sn.theme.typography.xl,
        lg: sn.theme.typography.lg,
        md: sn.theme.typography.md,
        sm: sn.theme.typography.sm,
        xs: sn.theme.typography.xs
      }
    };
  },
  methods: {
    getFontCSS(e) {
      return e.css.constructor.name === "Array" ? e.css[e.css.length - 1] : e.css;
    }
  }
}, zl = { class: "bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl flex flex-col gap-4 transition" }, Hl = {
  key: 0,
  class: "flex flex-col gap-8 sm:gap-4"
}, jl = { class: "flex-none font-mono text-xs text-gray-500 w-24" }, Gl = /* @__PURE__ */ W("span", { class: "font-bold" }, "Bold", -1), $l = {
  key: 0,
  class: "italic"
}, Kl = {
  key: 1,
  class: "text-gray-900 dark:text-white transition"
}, ql = /* @__PURE__ */ Il('<h1 class="prose-xxl font-bold">Supercharged for pros.</h1><h2 class="prose-xl font-bold text-gray-500">From $1999</h2><br><br><p class="text-lg"><span class="font-bold">A case full of energy.</span> <span class="text-gray-500">Wirelessly</span></p><p class="prose-md max-w-xs">and effortlessly recharge the MagSafe Charging Case on a MagSafe charger. Fully loaded, the case gives you up to 30 hours of total listening time. And charging AirPods in the case for just 5 minutes generates around an hour of listening time.</p><br><br><p class="prose-sm text-gray-500">Delightfully capable. Surprisingly affordable.</p><p class="prose-xs text-gray-500">Die Displays haben gerundete Ecken. Als Rechteck gemessen hat das Display eine Diagonale von 12,9&quot; (32,77 cm) beim 12,9&quot; iPad Pro, von 11&quot; (27,96 cm) beim 11&quot; iPad Pro, von 10,86&quot; (27,59 cm) beim iPad Air (4. Generation) und von 8,3&quot; (21,08 cm) beim iPad mini (6. Generation). Der tatsächlich sichtbare Displaybereich ist kleiner.</p>', 10), Xl = [
  ql
];
function Zl(e, t, n, r, a, i) {
  return y(), C("div", zl, [
    n.view === "sizes" ? (y(), C("div", Hl, [
      (y(!0), C(Oe, null, Ye(a.typography, (s, l) => (y(), C("div", {
        key: l,
        class: "sm:flex sm:flex-row sm:justify-items-start sm:items-center sm:gap-10 text-gray-900 dark:text-white transition"
      }, [
        W("p", jl, " prose-" + Z(l) + " " + Z(i.getFontCSS(s).fontSize), 1),
        W("p", {
          class: N(`prose-${l}`)
        }, " Roboto Regular ", 2),
        W("p", {
          class: N([`prose-${l}`, "sm:text-right sm:ml-auto"])
        }, [
          Gl,
          ["lg", "md", "sm", "xs"].includes(l) ? (y(), C("span", $l, ", Italic")) : A("", !0),
          ["sm", "xs"].includes(l) ? (y(), C("span", {
            key: 1,
            class: N(["uppercase", { "tracking-wider": l === "sm", "tracking-widest": l === "xs" }])
          }, ", Uppercase", 2)) : A("", !0)
        ], 2)
      ]))), 128))
    ])) : A("", !0),
    n.view === "context" ? (y(), C("div", Kl, Xl)) : A("", !0)
  ]);
}
const Xg = /* @__PURE__ */ Re(Bl, [["render", Zl]]);
/*!
  * shared v9.10.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Dt = typeof window < "u";
let Ge, en;
if (process.env.NODE_ENV !== "production") {
  const e = Dt && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Ge = (t) => {
    e.mark(t);
  }, en = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const Jl = /\{([0-9a-zA-Z]+)\}/g;
function la(e, ...t) {
  return t.length === 1 && he(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Jl, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const It = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Ql = (e, t, n) => eo({ l: e, k: t, s: n }), eo = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Pe = (e) => typeof e == "number" && isFinite(e), to = (e) => rs(e) === "[object Date]", gn = (e) => rs(e) === "[object RegExp]", ur = (e) => ae(e) && Object.keys(e).length === 0, Le = Object.assign;
let za;
const Ot = () => za || (za = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ha(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const no = Object.prototype.hasOwnProperty;
function Zn(e, t) {
  return no.call(e, t);
}
const De = Array.isArray, _e = (e) => typeof e == "function", j = (e) => typeof e == "string", ge = (e) => typeof e == "boolean", he = (e) => e !== null && typeof e == "object", ro = (e) => he(e) && _e(e.then) && _e(e.catch), ns = Object.prototype.toString, rs = (e) => ns.call(e), ae = (e) => {
  if (!he(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, ao = (e) => e == null ? "" : De(e) || ae(e) && e.toString === ns ? JSON.stringify(e, null, 2) : String(e);
function io(e, t = "") {
  return e.reduce((n, r, a) => a === 0 ? n + r : n + t + r, "");
}
const ja = 2;
function so(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let a = 0;
  const i = [];
  for (let s = 0; s < r.length; s++)
    if (a += r[s].length + 1, a >= t) {
      for (let l = s - ja; l <= s + ja || n > a; l++) {
        if (l < 0 || l >= r.length)
          continue;
        const o = l + 1;
        i.push(`${o}${" ".repeat(3 - String(o).length)}|  ${r[l]}`);
        const u = r[l].length;
        if (l === s) {
          const m = t - (a - u) + 1, _ = Math.max(1, n > a ? u - m : n - t);
          i.push("   |  " + " ".repeat(m) + "^".repeat(_));
        } else if (l > s) {
          if (n > a) {
            const m = Math.max(Math.min(n - a, u), 1);
            i.push("   |  " + "^".repeat(m));
          }
          a += u + 1;
        }
      }
      break;
    }
  return i.join(`
`);
}
function oa(e) {
  let t = e;
  return () => ++t;
}
function zt(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ga = {};
function as(e) {
  Ga[e] || (Ga[e] = !0, zt(e));
}
function lo() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, r) {
      const a = e.get(n);
      a && a.push(r) || e.set(n, [r]);
    },
    off(n, r) {
      const a = e.get(n);
      a && a.splice(a.indexOf(r) >>> 0, 1);
    },
    emit(n, r) {
      (e.get(n) || []).slice().map((a) => a(r)), (e.get("*") || []).slice().map((a) => a(n, r));
    }
  };
}
const Hn = (e) => !he(e) || De(e);
function $n(e, t) {
  if (Hn(e) || Hn(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: a } = n.pop();
    Object.keys(r).forEach((i) => {
      Hn(r[i]) || Hn(a[i]) ? a[i] = r[i] : n.push({ src: r[i], des: a[i] });
    });
  }
}
/*!
  * message-compiler v9.10.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function oo(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ar(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const uo = /\{([0-9a-zA-Z]+)\}/g;
function co(e, ...t) {
  return t.length === 1 && fo(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(uo, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const is = Object.assign, $a = (e) => typeof e == "string", fo = (e) => e !== null && typeof e == "object";
function ss(e, t = "") {
  return e.reduce((n, r, a) => a === 0 ? n + r : n + t + r, "");
}
const Q = {
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
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
}, ho = {
  // tokenizer error messages
  [Q.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [Q.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [Q.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [Q.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [Q.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [Q.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [Q.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [Q.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [Q.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [Q.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [Q.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [Q.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [Q.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [Q.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [Q.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [Q.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function _n(e, t, n = {}) {
  const { domain: r, messages: a, args: i } = n, s = co((a || ho)[e] || "", ...i || []), l = new SyntaxError(String(s));
  return l.code = e, t && (l.location = t), l.domain = r, l;
}
function mo(e) {
  throw e;
}
const go = /<\/?[\w\s="/.':;#-\/]+>/, po = (e) => go.test(e), vt = " ", _o = "\r", Fe = `
`, yo = String.fromCharCode(8232), bo = String.fromCharCode(8233);
function vo(e) {
  const t = e;
  let n = 0, r = 1, a = 1, i = 0;
  const s = (V) => t[V] === _o && t[V + 1] === Fe, l = (V) => t[V] === Fe, o = (V) => t[V] === bo, u = (V) => t[V] === yo, m = (V) => s(V) || l(V) || o(V) || u(V), _ = () => n, g = () => r, O = () => a, w = () => i, f = (V) => s(V) || o(V) || u(V) ? Fe : t[V], p = () => f(n), d = () => f(n + i);
  function v() {
    return i = 0, m(n) && (r++, a = 0), s(n) && n++, n++, a++, t[n];
  }
  function E() {
    return s(n + i) && i++, i++, t[n + i];
  }
  function k() {
    n = 0, r = 1, a = 1, i = 0;
  }
  function L(V = 0) {
    i = V;
  }
  function P() {
    const V = n + i;
    for (; V !== n; )
      v();
    i = 0;
  }
  return {
    index: _,
    line: g,
    column: O,
    peekOffset: w,
    charAt: f,
    currentChar: p,
    currentPeek: d,
    next: v,
    peek: E,
    reset: k,
    resetPeek: L,
    skipToPeek: P
  };
}
const Rt = void 0, ko = ".", Ka = "'", xo = "tokenizer";
function wo(e, t = {}) {
  const n = t.location !== !1, r = vo(e), a = () => r.index(), i = () => oo(r.line(), r.column(), r.index()), s = i(), l = a(), o = {
    currentType: 14,
    offset: l,
    startLoc: s,
    endLoc: s,
    lastType: 14,
    lastOffset: l,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, u = () => o, { onError: m } = t;
  function _(h, c, x, ...B) {
    const ee = u();
    if (c.column += x, c.offset += x, m) {
      const de = n ? Ar(ee.startLoc, c) : null, lt = _n(h, de, {
        domain: xo,
        args: B
      });
      m(lt);
    }
  }
  function g(h, c, x) {
    h.endLoc = i(), h.currentType = c;
    const B = { type: c };
    return n && (B.loc = Ar(h.startLoc, h.endLoc)), x != null && (B.value = x), B;
  }
  const O = (h) => g(
    h,
    14
    /* TokenTypes.EOF */
  );
  function w(h, c) {
    return h.currentChar() === c ? (h.next(), c) : (_(Q.EXPECTED_TOKEN, i(), 0, c), "");
  }
  function f(h) {
    let c = "";
    for (; h.currentPeek() === vt || h.currentPeek() === Fe; )
      c += h.currentPeek(), h.peek();
    return c;
  }
  function p(h) {
    const c = f(h);
    return h.skipToPeek(), c;
  }
  function d(h) {
    if (h === Rt)
      return !1;
    const c = h.charCodeAt(0);
    return c >= 97 && c <= 122 || // a-z
    c >= 65 && c <= 90 || // A-Z
    c === 95;
  }
  function v(h) {
    if (h === Rt)
      return !1;
    const c = h.charCodeAt(0);
    return c >= 48 && c <= 57;
  }
  function E(h, c) {
    const { currentType: x } = c;
    if (x !== 2)
      return !1;
    f(h);
    const B = d(h.currentPeek());
    return h.resetPeek(), B;
  }
  function k(h, c) {
    const { currentType: x } = c;
    if (x !== 2)
      return !1;
    f(h);
    const B = h.currentPeek() === "-" ? h.peek() : h.currentPeek(), ee = v(B);
    return h.resetPeek(), ee;
  }
  function L(h, c) {
    const { currentType: x } = c;
    if (x !== 2)
      return !1;
    f(h);
    const B = h.currentPeek() === Ka;
    return h.resetPeek(), B;
  }
  function P(h, c) {
    const { currentType: x } = c;
    if (x !== 8)
      return !1;
    f(h);
    const B = h.currentPeek() === ".";
    return h.resetPeek(), B;
  }
  function V(h, c) {
    const { currentType: x } = c;
    if (x !== 9)
      return !1;
    f(h);
    const B = d(h.currentPeek());
    return h.resetPeek(), B;
  }
  function X(h, c) {
    const { currentType: x } = c;
    if (!(x === 8 || x === 12))
      return !1;
    f(h);
    const B = h.currentPeek() === ":";
    return h.resetPeek(), B;
  }
  function b(h, c) {
    const { currentType: x } = c;
    if (x !== 10)
      return !1;
    const B = () => {
      const de = h.currentPeek();
      return de === "{" ? d(h.peek()) : de === "@" || de === "%" || de === "|" || de === ":" || de === "." || de === vt || !de ? !1 : de === Fe ? (h.peek(), B()) : d(de);
    }, ee = B();
    return h.resetPeek(), ee;
  }
  function U(h) {
    f(h);
    const c = h.currentPeek() === "|";
    return h.resetPeek(), c;
  }
  function H(h) {
    const c = f(h), x = h.currentPeek() === "%" && h.peek() === "{";
    return h.resetPeek(), {
      isModulo: x,
      hasSpace: c.length > 0
    };
  }
  function D(h, c = !0) {
    const x = (ee = !1, de = "", lt = !1) => {
      const bt = h.currentPeek();
      return bt === "{" ? de === "%" ? !1 : ee : bt === "@" || !bt ? de === "%" ? !0 : ee : bt === "%" ? (h.peek(), x(ee, "%", !0)) : bt === "|" ? de === "%" || lt ? !0 : !(de === vt || de === Fe) : bt === vt ? (h.peek(), x(!0, vt, lt)) : bt === Fe ? (h.peek(), x(!0, Fe, lt)) : !0;
    }, B = x();
    return c && h.resetPeek(), B;
  }
  function Y(h, c) {
    const x = h.currentChar();
    return x === Rt ? Rt : c(x) ? (h.next(), x) : null;
  }
  function G(h) {
    return Y(h, (x) => {
      const B = x.charCodeAt(0);
      return B >= 97 && B <= 122 || // a-z
      B >= 65 && B <= 90 || // A-Z
      B >= 48 && B <= 57 || // 0-9
      B === 95 || // _
      B === 36;
    });
  }
  function R(h) {
    return Y(h, (x) => {
      const B = x.charCodeAt(0);
      return B >= 48 && B <= 57;
    });
  }
  function T(h) {
    return Y(h, (x) => {
      const B = x.charCodeAt(0);
      return B >= 48 && B <= 57 || // 0-9
      B >= 65 && B <= 70 || // A-F
      B >= 97 && B <= 102;
    });
  }
  function $(h) {
    let c = "", x = "";
    for (; c = R(h); )
      x += c;
    return x;
  }
  function J(h) {
    p(h);
    const c = h.currentChar();
    return c !== "%" && _(Q.EXPECTED_TOKEN, i(), 0, c), h.next(), "%";
  }
  function q(h) {
    let c = "";
    for (; ; ) {
      const x = h.currentChar();
      if (x === "{" || x === "}" || x === "@" || x === "|" || !x)
        break;
      if (x === "%")
        if (D(h))
          c += x, h.next();
        else
          break;
      else if (x === vt || x === Fe)
        if (D(h))
          c += x, h.next();
        else {
          if (U(h))
            break;
          c += x, h.next();
        }
      else
        c += x, h.next();
    }
    return c;
  }
  function ce(h) {
    p(h);
    let c = "", x = "";
    for (; c = G(h); )
      x += c;
    return h.currentChar() === Rt && _(Q.UNTERMINATED_CLOSING_BRACE, i(), 0), x;
  }
  function pt(h) {
    p(h);
    let c = "";
    return h.currentChar() === "-" ? (h.next(), c += `-${$(h)}`) : c += $(h), h.currentChar() === Rt && _(Q.UNTERMINATED_CLOSING_BRACE, i(), 0), c;
  }
  function ke(h) {
    p(h), w(h, "'");
    let c = "", x = "";
    const B = (de) => de !== Ka && de !== Fe;
    for (; c = Y(h, B); )
      c === "\\" ? x += Ke(h) : x += c;
    const ee = h.currentChar();
    return ee === Fe || ee === Rt ? (_(Q.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), ee === Fe && (h.next(), w(h, "'")), x) : (w(h, "'"), x);
  }
  function Ke(h) {
    const c = h.currentChar();
    switch (c) {
      case "\\":
      case "'":
        return h.next(), `\\${c}`;
      case "u":
        return st(h, c, 4);
      case "U":
        return st(h, c, 6);
      default:
        return _(Q.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, c), "";
    }
  }
  function st(h, c, x) {
    w(h, c);
    let B = "";
    for (let ee = 0; ee < x; ee++) {
      const de = T(h);
      if (!de) {
        _(Q.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${c}${B}${h.currentChar()}`);
        break;
      }
      B += de;
    }
    return `\\${c}${B}`;
  }
  function _t(h) {
    p(h);
    let c = "", x = "";
    const B = (ee) => ee !== "{" && ee !== "}" && ee !== vt && ee !== Fe;
    for (; c = Y(h, B); )
      x += c;
    return x;
  }
  function Me(h) {
    let c = "", x = "";
    for (; c = G(h); )
      x += c;
    return x;
  }
  function He(h) {
    const c = (x = !1, B) => {
      const ee = h.currentChar();
      return ee === "{" || ee === "%" || ee === "@" || ee === "|" || ee === "(" || ee === ")" || !ee || ee === vt ? B : ee === Fe || ee === ko ? (B += ee, h.next(), c(x, B)) : (B += ee, h.next(), c(!0, B));
    };
    return c(!1, "");
  }
  function et(h) {
    p(h);
    const c = w(
      h,
      "|"
      /* TokenChars.Pipe */
    );
    return p(h), c;
  }
  function yt(h, c) {
    let x = null;
    switch (h.currentChar()) {
      case "{":
        return c.braceNest >= 1 && _(Q.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), h.next(), x = g(
          c,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), p(h), c.braceNest++, x;
      case "}":
        return c.braceNest > 0 && c.currentType === 2 && _(Q.EMPTY_PLACEHOLDER, i(), 0), h.next(), x = g(
          c,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), c.braceNest--, c.braceNest > 0 && p(h), c.inLinked && c.braceNest === 0 && (c.inLinked = !1), x;
      case "@":
        return c.braceNest > 0 && _(Q.UNTERMINATED_CLOSING_BRACE, i(), 0), x = qe(h, c) || O(c), c.braceNest = 0, x;
      default: {
        let ee = !0, de = !0, lt = !0;
        if (U(h))
          return c.braceNest > 0 && _(Q.UNTERMINATED_CLOSING_BRACE, i(), 0), x = g(c, 1, et(h)), c.braceNest = 0, c.inLinked = !1, x;
        if (c.braceNest > 0 && (c.currentType === 5 || c.currentType === 6 || c.currentType === 7))
          return _(Q.UNTERMINATED_CLOSING_BRACE, i(), 0), c.braceNest = 0, Gt(h, c);
        if (ee = E(h, c))
          return x = g(c, 5, ce(h)), p(h), x;
        if (de = k(h, c))
          return x = g(c, 6, pt(h)), p(h), x;
        if (lt = L(h, c))
          return x = g(c, 7, ke(h)), p(h), x;
        if (!ee && !de && !lt)
          return x = g(c, 13, _t(h)), _(Q.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, x.value), p(h), x;
        break;
      }
    }
    return x;
  }
  function qe(h, c) {
    const { currentType: x } = c;
    let B = null;
    const ee = h.currentChar();
    switch ((x === 8 || x === 9 || x === 12 || x === 10) && (ee === Fe || ee === vt) && _(Q.INVALID_LINKED_FORMAT, i(), 0), ee) {
      case "@":
        return h.next(), B = g(
          c,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), c.inLinked = !0, B;
      case ".":
        return p(h), h.next(), g(
          c,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return p(h), h.next(), g(
          c,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return U(h) ? (B = g(c, 1, et(h)), c.braceNest = 0, c.inLinked = !1, B) : P(h, c) || X(h, c) ? (p(h), qe(h, c)) : V(h, c) ? (p(h), g(c, 12, Me(h))) : b(h, c) ? (p(h), ee === "{" ? yt(h, c) || B : g(c, 11, He(h))) : (x === 8 && _(Q.INVALID_LINKED_FORMAT, i(), 0), c.braceNest = 0, c.inLinked = !1, Gt(h, c));
    }
  }
  function Gt(h, c) {
    let x = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (c.braceNest > 0)
      return yt(h, c) || O(c);
    if (c.inLinked)
      return qe(h, c) || O(c);
    switch (h.currentChar()) {
      case "{":
        return yt(h, c) || O(c);
      case "}":
        return _(Q.UNBALANCED_CLOSING_BRACE, i(), 0), h.next(), g(
          c,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return qe(h, c) || O(c);
      default: {
        if (U(h))
          return x = g(c, 1, et(h)), c.braceNest = 0, c.inLinked = !1, x;
        const { isModulo: ee, hasSpace: de } = H(h);
        if (ee)
          return de ? g(c, 0, q(h)) : g(c, 4, J(h));
        if (D(h))
          return g(c, 0, q(h));
        break;
      }
    }
    return x;
  }
  function xn() {
    const { currentType: h, offset: c, startLoc: x, endLoc: B } = o;
    return o.lastType = h, o.lastOffset = c, o.lastStartLoc = x, o.lastEndLoc = B, o.offset = a(), o.startLoc = i(), r.currentChar() === Rt ? g(
      o,
      14
      /* TokenTypes.EOF */
    ) : Gt(r, o);
  }
  return {
    nextToken: xn,
    currentOffset: a,
    currentPosition: i,
    context: u
  };
}
const Oo = "parser", So = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Eo(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function Co(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(d, v, E, k, ...L) {
    const P = d.currentPosition();
    if (P.offset += k, P.column += k, n) {
      const V = t ? Ar(E, P) : null, X = _n(v, V, {
        domain: Oo,
        args: L
      });
      n(X);
    }
  }
  function a(d, v, E) {
    const k = { type: d };
    return t && (k.start = v, k.end = v, k.loc = { start: E, end: E }), k;
  }
  function i(d, v, E, k) {
    k && (d.type = k), t && (d.end = v, d.loc && (d.loc.end = E));
  }
  function s(d, v) {
    const E = d.context(), k = a(3, E.offset, E.startLoc);
    return k.value = v, i(k, d.currentOffset(), d.currentPosition()), k;
  }
  function l(d, v) {
    const E = d.context(), { lastOffset: k, lastStartLoc: L } = E, P = a(5, k, L);
    return P.index = parseInt(v, 10), d.nextToken(), i(P, d.currentOffset(), d.currentPosition()), P;
  }
  function o(d, v) {
    const E = d.context(), { lastOffset: k, lastStartLoc: L } = E, P = a(4, k, L);
    return P.key = v, d.nextToken(), i(P, d.currentOffset(), d.currentPosition()), P;
  }
  function u(d, v) {
    const E = d.context(), { lastOffset: k, lastStartLoc: L } = E, P = a(9, k, L);
    return P.value = v.replace(So, Eo), d.nextToken(), i(P, d.currentOffset(), d.currentPosition()), P;
  }
  function m(d) {
    const v = d.nextToken(), E = d.context(), { lastOffset: k, lastStartLoc: L } = E, P = a(8, k, L);
    return v.type !== 12 ? (r(d, Q.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0), P.value = "", i(P, k, L), {
      nextConsumeToken: v,
      node: P
    }) : (v.value == null && r(d, Q.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, ot(v)), P.value = v.value || "", i(P, d.currentOffset(), d.currentPosition()), {
      node: P
    });
  }
  function _(d, v) {
    const E = d.context(), k = a(7, E.offset, E.startLoc);
    return k.value = v, i(k, d.currentOffset(), d.currentPosition()), k;
  }
  function g(d) {
    const v = d.context(), E = a(6, v.offset, v.startLoc);
    let k = d.nextToken();
    if (k.type === 9) {
      const L = m(d);
      E.modifier = L.node, k = L.nextConsumeToken || d.nextToken();
    }
    switch (k.type !== 10 && r(d, Q.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ot(k)), k = d.nextToken(), k.type === 2 && (k = d.nextToken()), k.type) {
      case 11:
        k.value == null && r(d, Q.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ot(k)), E.key = _(d, k.value || "");
        break;
      case 5:
        k.value == null && r(d, Q.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ot(k)), E.key = o(d, k.value || "");
        break;
      case 6:
        k.value == null && r(d, Q.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ot(k)), E.key = l(d, k.value || "");
        break;
      case 7:
        k.value == null && r(d, Q.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ot(k)), E.key = u(d, k.value || "");
        break;
      default: {
        r(d, Q.UNEXPECTED_EMPTY_LINKED_KEY, v.lastStartLoc, 0);
        const L = d.context(), P = a(7, L.offset, L.startLoc);
        return P.value = "", i(P, L.offset, L.startLoc), E.key = P, i(E, L.offset, L.startLoc), {
          nextConsumeToken: k,
          node: E
        };
      }
    }
    return i(E, d.currentOffset(), d.currentPosition()), {
      node: E
    };
  }
  function O(d) {
    const v = d.context(), E = v.currentType === 1 ? d.currentOffset() : v.offset, k = v.currentType === 1 ? v.endLoc : v.startLoc, L = a(2, E, k);
    L.items = [];
    let P = null;
    do {
      const b = P || d.nextToken();
      switch (P = null, b.type) {
        case 0:
          b.value == null && r(d, Q.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ot(b)), L.items.push(s(d, b.value || ""));
          break;
        case 6:
          b.value == null && r(d, Q.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ot(b)), L.items.push(l(d, b.value || ""));
          break;
        case 5:
          b.value == null && r(d, Q.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ot(b)), L.items.push(o(d, b.value || ""));
          break;
        case 7:
          b.value == null && r(d, Q.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ot(b)), L.items.push(u(d, b.value || ""));
          break;
        case 8: {
          const U = g(d);
          L.items.push(U.node), P = U.nextConsumeToken || null;
          break;
        }
      }
    } while (v.currentType !== 14 && v.currentType !== 1);
    const V = v.currentType === 1 ? v.lastOffset : d.currentOffset(), X = v.currentType === 1 ? v.lastEndLoc : d.currentPosition();
    return i(L, V, X), L;
  }
  function w(d, v, E, k) {
    const L = d.context();
    let P = k.items.length === 0;
    const V = a(1, v, E);
    V.cases = [], V.cases.push(k);
    do {
      const X = O(d);
      P || (P = X.items.length === 0), V.cases.push(X);
    } while (L.currentType !== 14);
    return P && r(d, Q.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0), i(V, d.currentOffset(), d.currentPosition()), V;
  }
  function f(d) {
    const v = d.context(), { offset: E, startLoc: k } = v, L = O(d);
    return v.currentType === 14 ? L : w(d, E, k, L);
  }
  function p(d) {
    const v = wo(d, is({}, e)), E = v.context(), k = a(0, E.offset, E.startLoc);
    return t && k.loc && (k.loc.source = d), k.body = f(v), e.onCacheKey && (k.cacheKey = e.onCacheKey(d)), E.currentType !== 14 && r(v, Q.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, d[E.offset] || ""), i(k, v.currentOffset(), v.currentPosition()), k;
  }
  return { parse: p };
}
function ot(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function To(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (i) => (n.helpers.add(i), i) };
}
function qa(e, t) {
  for (let n = 0; n < e.length; n++)
    ua(e[n], t);
}
function ua(e, t) {
  switch (e.type) {
    case 1:
      qa(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      qa(e.items, t);
      break;
    case 6: {
      ua(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function Do(e, t = {}) {
  const n = To(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && ua(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function No(e) {
  const t = e.body;
  return t.type === 2 ? Xa(t) : t.cases.forEach((n) => Xa(n)), e;
}
function Xa(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null)
        break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = ss(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const Io = "minifier";
function on(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      on(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        on(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        on(n[r]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      on(t.key), t.k = t.key, delete t.key, t.modifier && (on(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
    default:
      throw _n(Q.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: Io,
        args: [e.type]
      });
  }
  delete e.type;
}
const Mo = "parser";
function Po(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: a, needIndent: i } = t, s = t.location !== !1, l = {
    filename: r,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: a,
    needIndent: i,
    indentLevel: 0
  };
  s && e.loc && (l.source = e.loc.source);
  const o = () => l;
  function u(p, d) {
    l.code += p;
  }
  function m(p, d = !0) {
    const v = d ? a : "";
    u(i ? v + "  ".repeat(p) : v);
  }
  function _(p = !0) {
    const d = ++l.indentLevel;
    p && m(d);
  }
  function g(p = !0) {
    const d = --l.indentLevel;
    p && m(d);
  }
  function O() {
    m(l.indentLevel);
  }
  return {
    context: o,
    push: u,
    indent: _,
    deindent: g,
    newline: O,
    helper: (p) => `_${p}`,
    needIndent: () => l.needIndent
  };
}
function Lo(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), pn(e, t.key), t.modifier ? (e.push(", "), pn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Ao(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const a = t.items.length;
  for (let i = 0; i < a && (pn(e, t.items[i]), i !== a - 1); i++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Ro(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const a = t.cases.length;
    for (let i = 0; i < a && (pn(e, t.cases[i]), i !== a - 1); i++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Fo(e, t) {
  t.body ? pn(e, t.body) : e.push("null");
}
function pn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Fo(e, t);
      break;
    case 1:
      Ro(e, t);
      break;
    case 2:
      Ao(e, t);
      break;
    case 6:
      Lo(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      throw _n(Q.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: Mo,
        args: [t.type]
      });
  }
}
const Yo = (e, t = {}) => {
  const n = $a(t.mode) ? t.mode : "normal", r = $a(t.filename) ? t.filename : "message.intl", a = !!t.sourceMap, i = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", l = e.helpers || [], o = Po(e, {
    mode: n,
    filename: r,
    sourceMap: a,
    breakLineCode: i,
    needIndent: s
  });
  o.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), o.indent(s), l.length > 0 && (o.push(`const { ${ss(l.map((_) => `${_}: _${_}`), ", ")} } = ctx`), o.newline()), o.push("return "), pn(o, e), o.deindent(s), o.push("}"), delete e.helpers;
  const { code: u, map: m } = o.context();
  return {
    ast: e,
    code: u,
    map: m ? m.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Uo(e, t = {}) {
  const n = is({}, t), r = !!n.jit, a = !!n.minify, i = n.optimize == null ? !0 : n.optimize, l = Co(n).parse(e);
  return r ? (i && No(l), a && on(l), { ast: l, code: "" }) : (Do(l, n), Yo(l, n));
}
/*!
  * core-base v9.10.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Wo() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ot().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Ot().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ot().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Ht = [];
Ht[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Ht[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Ht[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
Ht[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
Ht[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
Ht[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
Ht[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const Vo = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Bo(e) {
  return Vo.test(e);
}
function zo(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ho(e) {
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
function jo(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Bo(t) ? zo(t) : "*" + t;
}
function Go(e) {
  const t = [];
  let n = -1, r = 0, a = 0, i, s, l, o, u, m, _;
  const g = [];
  g[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = l : s += l;
  }, g[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, g[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    g[
      0
      /* Actions.APPEND */
    ](), a++;
  }, g[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (a > 0)
      a--, r = 4, g[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (a = 0, s === void 0 || (s = jo(s), s === !1))
        return !1;
      g[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function O() {
    const w = e[n + 1];
    if (r === 5 && w === "'" || r === 6 && w === '"')
      return n++, l = "\\" + w, g[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, i = e[n], !(i === "\\" && O())) {
      if (o = Ho(i), _ = Ht[r], u = _[o] || _.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (m = g[u[1]], m && (l = i, m() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Za = /* @__PURE__ */ new Map();
function $o(e, t) {
  return he(e) ? e[t] : null;
}
function Ko(e, t) {
  if (!he(e))
    return null;
  let n = Za.get(t);
  if (n || (n = Go(t), n && Za.set(t, n)), !n)
    return null;
  const r = n.length;
  let a = e, i = 0;
  for (; i < r; ) {
    const s = a[n[i]];
    if (s === void 0 || _e(a))
      return null;
    a = s, i++;
  }
  return a;
}
const qo = (e) => e, Xo = (e) => "", Zo = "text", Jo = (e) => e.length === 0 ? "" : io(e), Qo = ao;
function Ja(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function eu(e) {
  const t = Pe(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Pe(e.named.count) || Pe(e.named.n)) ? Pe(e.named.count) ? e.named.count : Pe(e.named.n) ? e.named.n : t : t;
}
function tu(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function nu(e = {}) {
  const t = e.locale, n = eu(e), r = he(e.pluralRules) && j(t) && _e(e.pluralRules[t]) ? e.pluralRules[t] : Ja, a = he(e.pluralRules) && j(t) && _e(e.pluralRules[t]) ? Ja : void 0, i = (d) => d[r(n, d.length, a)], s = e.list || [], l = (d) => s[d], o = e.named || {};
  Pe(e.pluralIndex) && tu(n, o);
  const u = (d) => o[d];
  function m(d) {
    const v = _e(e.messages) ? e.messages(d) : he(e.messages) ? e.messages[d] : !1;
    return v || (e.parent ? e.parent.message(d) : Xo);
  }
  const _ = (d) => e.modifiers ? e.modifiers[d] : qo, g = ae(e.processor) && _e(e.processor.normalize) ? e.processor.normalize : Jo, O = ae(e.processor) && _e(e.processor.interpolate) ? e.processor.interpolate : Qo, w = ae(e.processor) && j(e.processor.type) ? e.processor.type : Zo, p = {
    list: l,
    named: u,
    plural: i,
    linked: (d, ...v) => {
      const [E, k] = v;
      let L = "text", P = "";
      v.length === 1 ? he(E) ? (P = E.modifier || P, L = E.type || L) : j(E) && (P = E || P) : v.length === 2 && (j(E) && (P = E || P), j(k) && (L = k || L));
      const V = m(d)(p), X = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        L === "vnode" && De(V) && P ? V[0] : V
      );
      return P ? _(P)(X, L) : X;
    },
    message: m,
    type: w,
    interpolate: O,
    normalize: g,
    values: Le({}, s, o)
  };
  return p;
}
let Dn = null;
function ru(e) {
  Dn = e;
}
function au(e, t, n) {
  Dn && Dn.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const iu = /* @__PURE__ */ su(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function su(e) {
  return (t) => Dn && Dn.emit(e, t);
}
const Ue = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
}, lu = {
  [Ue.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Ue.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Ue.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Ue.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Ue.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Ue.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [Ue.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function tn(e, ...t) {
  return la(lu[e], ...t);
}
const ls = Q.__EXTEND_POINT__, Kt = oa(ls), Ie = {
  INVALID_ARGUMENT: ls,
  // 18
  INVALID_DATE_ARGUMENT: Kt(),
  // 19
  INVALID_ISO_DATE_ARGUMENT: Kt(),
  // 20
  NOT_SUPPORT_NON_STRING_MESSAGE: Kt(),
  // 21
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: Kt(),
  // 22
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Kt(),
  // 23
  NOT_SUPPORT_LOCALE_TYPE: Kt(),
  // 24
  __EXTEND_POINT__: Kt()
  // 25
};
function dt(e) {
  return _n(e, null, process.env.NODE_ENV !== "production" ? { messages: ou } : void 0);
}
const ou = {
  [Ie.INVALID_ARGUMENT]: "Invalid arguments",
  [Ie.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Ie.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Ie.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [Ie.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [Ie.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [Ie.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function ca(e, t) {
  return t.locale != null ? Qa(t.locale) : Qa(e.locale);
}
let Dr;
function Qa(e) {
  if (j(e))
    return e;
  if (_e(e)) {
    if (e.resolvedOnce && Dr != null)
      return Dr;
    if (e.constructor.name === "Function") {
      const t = e();
      if (ro(t))
        throw dt(Ie.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Dr = t;
    } else
      throw dt(Ie.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw dt(Ie.NOT_SUPPORT_LOCALE_TYPE);
}
function uu(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...De(t) ? t : he(t) ? Object.keys(t) : j(t) ? [t] : [n]
  ])];
}
function os(e, t, n) {
  const r = j(n) ? n : Nn, a = e;
  a.__localeChainCache || (a.__localeChainCache = /* @__PURE__ */ new Map());
  let i = a.__localeChainCache.get(r);
  if (!i) {
    i = [];
    let s = [n];
    for (; De(s); )
      s = ei(i, s, t);
    const l = De(t) || !ae(t) ? t : t.default ? t.default : null;
    s = j(l) ? [l] : l, De(s) && ei(i, s, !1), a.__localeChainCache.set(r, i);
  }
  return i;
}
function ei(e, t, n) {
  let r = !0;
  for (let a = 0; a < t.length && ge(r); a++) {
    const i = t[a];
    j(i) && (r = cu(e, t[a], n));
  }
  return r;
}
function cu(e, t, n) {
  let r;
  const a = t.split("-");
  do {
    const i = a.join("-");
    r = du(e, i, n), a.splice(-1, 1);
  } while (a.length && r === !0);
  return r;
}
function du(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (De(n) || ae(n)) && n[a] && (r = n[a]);
  }
  return r;
}
const fu = "9.10.2", cr = -1, Nn = "en-US", Jn = "", ti = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function hu() {
  return {
    upper: (e, t) => t === "text" && j(e) ? e.toUpperCase() : t === "vnode" && he(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && j(e) ? e.toLowerCase() : t === "vnode" && he(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && j(e) ? ti(e) : t === "vnode" && he(e) && "__v_isVNode" in e ? ti(e.children) : e
  };
}
let us;
function ni(e) {
  us = e;
}
let cs;
function mu(e) {
  cs = e;
}
let ds;
function gu(e) {
  ds = e;
}
let fs = null;
const pu = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  fs = e;
}, _u = /* @__NO_SIDE_EFFECTS__ */ () => fs;
let hs = null;
const ri = (e) => {
  hs = e;
}, yu = () => hs;
let ai = 0;
function bu(e = {}) {
  const t = _e(e.onWarn) ? e.onWarn : zt, n = j(e.version) ? e.version : fu, r = j(e.locale) || _e(e.locale) ? e.locale : Nn, a = _e(r) ? Nn : r, i = De(e.fallbackLocale) || ae(e.fallbackLocale) || j(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a, s = ae(e.messages) ? e.messages : { [a]: {} }, l = ae(e.datetimeFormats) ? e.datetimeFormats : { [a]: {} }, o = ae(e.numberFormats) ? e.numberFormats : { [a]: {} }, u = Le({}, e.modifiers || {}, hu()), m = e.pluralRules || {}, _ = _e(e.missing) ? e.missing : null, g = ge(e.missingWarn) || gn(e.missingWarn) ? e.missingWarn : !0, O = ge(e.fallbackWarn) || gn(e.fallbackWarn) ? e.fallbackWarn : !0, w = !!e.fallbackFormat, f = !!e.unresolving, p = _e(e.postTranslation) ? e.postTranslation : null, d = ae(e.processor) ? e.processor : null, v = ge(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, k = _e(e.messageCompiler) ? e.messageCompiler : us;
  process.env.NODE_ENV !== "production" && _e(e.messageCompiler) && as(tn(Ue.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const L = _e(e.messageResolver) ? e.messageResolver : cs || $o, P = _e(e.localeFallbacker) ? e.localeFallbacker : ds || uu, V = he(e.fallbackContext) ? e.fallbackContext : void 0, X = e, b = he(X.__datetimeFormatters) ? X.__datetimeFormatters : /* @__PURE__ */ new Map(), U = he(X.__numberFormatters) ? X.__numberFormatters : /* @__PURE__ */ new Map(), H = he(X.__meta) ? X.__meta : {};
  ai++;
  const D = {
    version: n,
    cid: ai,
    locale: r,
    fallbackLocale: i,
    messages: s,
    modifiers: u,
    pluralRules: m,
    missing: _,
    missingWarn: g,
    fallbackWarn: O,
    fallbackFormat: w,
    unresolving: f,
    postTranslation: p,
    processor: d,
    warnHtmlMessage: v,
    escapeParameter: E,
    messageCompiler: k,
    messageResolver: L,
    localeFallbacker: P,
    fallbackContext: V,
    onWarn: t,
    __meta: H
  };
  return D.datetimeFormats = l, D.numberFormats = o, D.__datetimeFormatters = b, D.__numberFormatters = U, process.env.NODE_ENV !== "production" && (D.__v_emitter = X.__v_emitter != null ? X.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && au(D, n, H), D;
}
function dr(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function ms(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function da(e, t, n, r, a) {
  const { missing: i, onWarn: s } = e;
  if (process.env.NODE_ENV !== "production") {
    const l = e.__v_emitter;
    l && l.emit("missing", {
      locale: n,
      key: t,
      type: a,
      groupId: `${a}:${t}`
    });
  }
  if (i !== null) {
    const l = i(e, n, t, a);
    return j(l) ? l : t;
  } else
    return process.env.NODE_ENV !== "production" && ms(r, t) && s(tn(Ue.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function wn(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Nr(e) {
  return (n) => vu(n, e);
}
function vu(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n, a = r.c || r.cases;
    return e.plural(a.reduce((i, s) => [
      ...i,
      ii(e, s)
    ], []));
  } else
    return ii(e, n);
}
function ii(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = (t.i || t.items).reduce((a, i) => [...a, Rr(e, i)], []);
    return e.normalize(r);
  }
}
function Rr(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3: {
      const r = t;
      return r.v || r.value;
    }
    case 9: {
      const r = t;
      return r.v || r.value;
    }
    case 4: {
      const r = t;
      return e.interpolate(e.named(r.k || r.key));
    }
    case 5: {
      const r = t;
      return e.interpolate(e.list(r.i != null ? r.i : r.index));
    }
    case 6: {
      const r = t, a = r.m || r.modifier;
      return e.linked(Rr(e, r.k || r.key), a ? Rr(e, a) : void 0, e.type);
    }
    case 7: {
      const r = t;
      return r.v || r.value;
    }
    case 8: {
      const r = t;
      return r.v || r.value;
    }
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const ku = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function gs(e, t) {
  t && po(e) && zt(la(ku, { source: e }));
}
const ps = (e) => e;
let cn = /* @__PURE__ */ Object.create(null);
const nn = (e) => he(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function _s(e, t = {}) {
  let n = !1;
  const r = t.onError || mo;
  return t.onError = (a) => {
    n = !0, r(a);
  }, { ...Uo(e, t), detectError: n };
}
const xu = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
  if (!j(e))
    throw dt(Ie.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    const n = ge(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && gs(e, n);
    const a = (t.onCacheKey || ps)(e), i = cn[a];
    if (i)
      return i;
    const { code: s, detectError: l } = _s(e, t), o = new Function(`return ${s}`)();
    return l ? o : cn[a] = o;
  }
};
function wu(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && j(e)) {
    const n = ge(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && gs(e, n);
    const a = (t.onCacheKey || ps)(e), i = cn[a];
    if (i)
      return i;
    const { ast: s, detectError: l } = _s(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), o = Nr(s);
    return l ? o : cn[a] = o;
  } else {
    if (process.env.NODE_ENV !== "production" && !nn(e))
      return zt(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = cn[n];
      return r || (cn[n] = Nr(e));
    } else
      return Nr(e);
  }
}
const si = () => "", Xe = (e) => _e(e);
function li(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: a, messageCompiler: i, fallbackLocale: s, messages: l } = e, [o, u] = Fr(...t), m = ge(u.missingWarn) ? u.missingWarn : e.missingWarn, _ = ge(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, g = ge(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, O = !!u.resolvedMessage, w = j(u.default) || ge(u.default) ? ge(u.default) ? i ? o : () => o : u.default : n ? i ? o : () => o : "", f = n || w !== "", p = ca(e, u);
  g && Ou(u);
  let [d, v, E] = O ? [
    o,
    p,
    l[p] || {}
  ] : ys(e, o, p, s, _, m), k = d, L = o;
  if (!O && !(j(k) || nn(k) || Xe(k)) && f && (k = w, L = k), !O && (!(j(k) || nn(k) || Xe(k)) || !j(v)))
    return a ? cr : o;
  if (process.env.NODE_ENV !== "production" && j(k) && e.messageCompiler == null)
    return zt(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${o}'.`), o;
  let P = !1;
  const V = () => {
    P = !0;
  }, X = Xe(k) ? k : bs(e, o, v, k, L, V);
  if (P)
    return k;
  const b = Tu(e, v, E, u), U = nu(b), H = Su(e, X, U), D = r ? r(H, o) : H;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Y = {
      timestamp: Date.now(),
      key: j(o) ? o : Xe(k) ? k.key : "",
      locale: v || (Xe(k) ? k.locale : ""),
      format: j(k) ? k : Xe(k) ? k.source : "",
      message: D
    };
    Y.meta = Le({}, e.__meta, /* @__PURE__ */ _u() || {}), iu(Y);
  }
  return D;
}
function Ou(e) {
  De(e.list) ? e.list = e.list.map((t) => j(t) ? Ha(t) : t) : he(e.named) && Object.keys(e.named).forEach((t) => {
    j(e.named[t]) && (e.named[t] = Ha(e.named[t]));
  });
}
function ys(e, t, n, r, a, i) {
  const { messages: s, onWarn: l, messageResolver: o, localeFallbacker: u } = e, m = u(e, r, n);
  let _ = {}, g, O = null, w = n, f = null;
  const p = "translate";
  for (let d = 0; d < m.length; d++) {
    if (g = f = m[d], process.env.NODE_ENV !== "production" && n !== g && dr(a, t) && l(tn(Ue.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: g
    })), process.env.NODE_ENV !== "production" && n !== g) {
      const P = e.__v_emitter;
      P && P.emit("fallback", {
        type: p,
        key: t,
        from: w,
        to: f,
        groupId: `${p}:${t}`
      });
    }
    _ = s[g] || {};
    let v = null, E, k;
    if (process.env.NODE_ENV !== "production" && Dt && (v = window.performance.now(), E = "intlify-message-resolve-start", k = "intlify-message-resolve-end", Ge && Ge(E)), (O = o(_, t)) === null && (O = _[t]), process.env.NODE_ENV !== "production" && Dt) {
      const P = window.performance.now(), V = e.__v_emitter;
      V && v && O && V.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: O,
        time: P - v,
        groupId: `${p}:${t}`
      }), E && k && Ge && en && (Ge(k), en("intlify message resolve", E, k));
    }
    if (j(O) || nn(O) || Xe(O))
      break;
    const L = da(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      g,
      i,
      p
    );
    L !== t && (O = L), w = f;
  }
  return [O, g, _];
}
function bs(e, t, n, r, a, i) {
  const { messageCompiler: s, warnHtmlMessage: l } = e;
  if (Xe(r)) {
    const g = r;
    return g.locale = g.locale || n, g.key = g.key || t, g;
  }
  if (s == null) {
    const g = () => r;
    return g.locale = n, g.key = t, g;
  }
  let o = null, u, m;
  process.env.NODE_ENV !== "production" && Dt && (o = window.performance.now(), u = "intlify-message-compilation-start", m = "intlify-message-compilation-end", Ge && Ge(u));
  const _ = s(r, Eu(e, n, a, r, l, i));
  if (process.env.NODE_ENV !== "production" && Dt) {
    const g = window.performance.now(), O = e.__v_emitter;
    O && o && O.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: g - o,
      groupId: `translate:${t}`
    }), u && m && Ge && en && (Ge(m), en("intlify message compilation", u, m));
  }
  return _.locale = n, _.key = t, _.source = r, _;
}
function Su(e, t, n) {
  let r = null, a, i;
  process.env.NODE_ENV !== "production" && Dt && (r = window.performance.now(), a = "intlify-message-evaluation-start", i = "intlify-message-evaluation-end", Ge && Ge(a));
  const s = t(n);
  if (process.env.NODE_ENV !== "production" && Dt) {
    const l = window.performance.now(), o = e.__v_emitter;
    o && r && o.emit("message-evaluation", {
      type: "message-evaluation",
      value: s,
      time: l - r,
      groupId: `translate:${t.key}`
    }), a && i && Ge && en && (Ge(i), en("intlify message evaluation", a, i));
  }
  return s;
}
function Fr(...e) {
  const [t, n, r] = e, a = {};
  if (!j(t) && !Pe(t) && !Xe(t) && !nn(t))
    throw dt(Ie.INVALID_ARGUMENT);
  const i = Pe(t) ? String(t) : (Xe(t), t);
  return Pe(n) ? a.plural = n : j(n) ? a.default = n : ae(n) && !ur(n) ? a.named = n : De(n) && (a.list = n), Pe(r) ? a.plural = r : j(r) ? a.default = r : ae(r) && Le(a, r), [i, a];
}
function Eu(e, t, n, r, a, i) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: a,
    onError: (s) => {
      if (i && i(s), process.env.NODE_ENV !== "production") {
        const l = Cu(r), o = `Message compilation error: ${s.message}`, u = s.location && l && so(l, s.location.start.offset, s.location.end.offset), m = e.__v_emitter;
        m && l && m.emit("compile-error", {
          message: l,
          error: s.message,
          start: s.location && s.location.start.offset,
          end: s.location && s.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(u ? `${o}
${u}` : o);
      } else
        throw s;
    },
    onCacheKey: (s) => Ql(t, n, s)
  };
}
function Cu(e) {
  if (j(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function Tu(e, t, n, r) {
  const { modifiers: a, pluralRules: i, messageResolver: s, fallbackLocale: l, fallbackWarn: o, missingWarn: u, fallbackContext: m } = e, g = {
    locale: t,
    modifiers: a,
    pluralRules: i,
    messages: (O) => {
      let w = s(n, O);
      if (w == null && m) {
        const [, , f] = ys(m, O, t, l, o, u);
        w = s(f, O);
      }
      if (j(w) || nn(w)) {
        let f = !1;
        const d = bs(e, O, t, w, O, () => {
          f = !0;
        });
        return f ? si : d;
      } else
        return Xe(w) ? w : si;
    }
  };
  return e.processor && (g.processor = e.processor), r.list && (g.list = r.list), r.named && (g.named = r.named), Pe(r.plural) && (g.pluralIndex = r.plural), g;
}
const oi = typeof Intl < "u", vs = {
  dateTimeFormat: oi && typeof Intl.DateTimeFormat < "u",
  numberFormat: oi && typeof Intl.NumberFormat < "u"
};
function ui(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: a, onWarn: i, localeFallbacker: s } = e, { __datetimeFormatters: l } = e;
  if (process.env.NODE_ENV !== "production" && !vs.dateTimeFormat)
    return i(tn(Ue.CANNOT_FORMAT_DATE)), Jn;
  const [o, u, m, _] = Yr(...t), g = ge(m.missingWarn) ? m.missingWarn : e.missingWarn, O = ge(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn, w = !!m.part, f = ca(e, m), p = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    f
  );
  if (!j(o) || o === "")
    return new Intl.DateTimeFormat(f, _).format(u);
  let d = {}, v, E = null, k = f, L = null;
  const P = "datetime format";
  for (let b = 0; b < p.length; b++) {
    if (v = L = p[b], process.env.NODE_ENV !== "production" && f !== v && dr(O, o) && i(tn(Ue.FALLBACK_TO_DATE_FORMAT, {
      key: o,
      target: v
    })), process.env.NODE_ENV !== "production" && f !== v) {
      const U = e.__v_emitter;
      U && U.emit("fallback", {
        type: P,
        key: o,
        from: k,
        to: L,
        groupId: `${P}:${o}`
      });
    }
    if (d = n[v] || {}, E = d[o], ae(E))
      break;
    da(e, o, v, g, P), k = L;
  }
  if (!ae(E) || !j(v))
    return r ? cr : o;
  let V = `${v}__${o}`;
  ur(_) || (V = `${V}__${JSON.stringify(_)}`);
  let X = l.get(V);
  return X || (X = new Intl.DateTimeFormat(v, Le({}, E, _)), l.set(V, X)), w ? X.formatToParts(u) : X.format(u);
}
const ks = [
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
function Yr(...e) {
  const [t, n, r, a] = e, i = {};
  let s = {}, l;
  if (j(t)) {
    const o = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!o)
      throw dt(Ie.INVALID_ISO_DATE_ARGUMENT);
    const u = o[3] ? o[3].trim().startsWith("T") ? `${o[1].trim()}${o[3].trim()}` : `${o[1].trim()}T${o[3].trim()}` : o[1].trim();
    l = new Date(u);
    try {
      l.toISOString();
    } catch {
      throw dt(Ie.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (to(t)) {
    if (isNaN(t.getTime()))
      throw dt(Ie.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (Pe(t))
    l = t;
  else
    throw dt(Ie.INVALID_ARGUMENT);
  return j(n) ? i.key = n : ae(n) && Object.keys(n).forEach((o) => {
    ks.includes(o) ? s[o] = n[o] : i[o] = n[o];
  }), j(r) ? i.locale = r : ae(r) && (s = r), ae(a) && (s = a), [i.key || "", l, i, s];
}
function ci(e, t, n) {
  const r = e;
  for (const a in n) {
    const i = `${t}__${a}`;
    r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i);
  }
}
function di(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: a, onWarn: i, localeFallbacker: s } = e, { __numberFormatters: l } = e;
  if (process.env.NODE_ENV !== "production" && !vs.numberFormat)
    return i(tn(Ue.CANNOT_FORMAT_NUMBER)), Jn;
  const [o, u, m, _] = Ur(...t), g = ge(m.missingWarn) ? m.missingWarn : e.missingWarn, O = ge(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn, w = !!m.part, f = ca(e, m), p = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    f
  );
  if (!j(o) || o === "")
    return new Intl.NumberFormat(f, _).format(u);
  let d = {}, v, E = null, k = f, L = null;
  const P = "number format";
  for (let b = 0; b < p.length; b++) {
    if (v = L = p[b], process.env.NODE_ENV !== "production" && f !== v && dr(O, o) && i(tn(Ue.FALLBACK_TO_NUMBER_FORMAT, {
      key: o,
      target: v
    })), process.env.NODE_ENV !== "production" && f !== v) {
      const U = e.__v_emitter;
      U && U.emit("fallback", {
        type: P,
        key: o,
        from: k,
        to: L,
        groupId: `${P}:${o}`
      });
    }
    if (d = n[v] || {}, E = d[o], ae(E))
      break;
    da(e, o, v, g, P), k = L;
  }
  if (!ae(E) || !j(v))
    return r ? cr : o;
  let V = `${v}__${o}`;
  ur(_) || (V = `${V}__${JSON.stringify(_)}`);
  let X = l.get(V);
  return X || (X = new Intl.NumberFormat(v, Le({}, E, _)), l.set(V, X)), w ? X.formatToParts(u) : X.format(u);
}
const xs = [
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
function Ur(...e) {
  const [t, n, r, a] = e, i = {};
  let s = {};
  if (!Pe(t))
    throw dt(Ie.INVALID_ARGUMENT);
  const l = t;
  return j(n) ? i.key = n : ae(n) && Object.keys(n).forEach((o) => {
    xs.includes(o) ? s[o] = n[o] : i[o] = n[o];
  }), j(r) ? i.locale = r : ae(r) && (s = r), ae(a) && (s = a), [i.key || "", l, i, s];
}
function fi(e, t, n) {
  const r = e;
  for (const a in n) {
    const i = `${t}__${a}`;
    r.__numberFormatters.has(i) && r.__numberFormatters.delete(i);
  }
}
Wo();
/*!
  * vue-i18n v9.10.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Du = "9.10.2";
function Nu() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Ot().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Ot().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Ot().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ot().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ot().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const ws = Ue.__EXTEND_POINT__, kt = oa(ws), Be = {
  FALLBACK_TO_ROOT: ws,
  // 9
  NOT_SUPPORTED_PRESERVE: kt(),
  // 10
  NOT_SUPPORTED_FORMATTER: kt(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: kt(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: kt(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: kt(),
  // 14
  NOT_FOUND_PARENT_SCOPE: kt(),
  // 15
  IGNORE_OBJ_FLATTEN: kt(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: kt(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: kt()
  // 18
}, Iu = {
  [Be.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [Be.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [Be.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [Be.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [Be.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [Be.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [Be.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [Be.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [Be.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze",
  [Be.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: "'translateExistCompatible' option will be dropped in the next major version."
};
function Qn(e, ...t) {
  return la(Iu[e], ...t);
}
const Os = Ie.__EXTEND_POINT__, We = oa(Os), xe = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Os,
  // 26
  // legacy module errors
  INVALID_ARGUMENT: We(),
  // 27
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: We(),
  // 28
  NOT_INSTALLED: We(),
  // 29
  NOT_AVAILABLE_IN_LEGACY_MODE: We(),
  // 30
  // directive module errors
  REQUIRED_VALUE: We(),
  // 31
  INVALID_VALUE: We(),
  // 32
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: We(),
  // 33
  NOT_INSTALLED_WITH_PROVIDE: We(),
  // 34
  // unexpected error
  UNEXPECTED_ERROR: We(),
  // 35
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: We(),
  // 36
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: We(),
  // 37
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: We(),
  // 38
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: We(),
  // 39
  // for enhancement
  __EXTEND_POINT__: We()
  // 40
};
function Wt(e, ...t) {
  return _n(e, null, process.env.NODE_ENV !== "production" ? { messages: Mu, args: t } : void 0);
}
const Mu = {
  [xe.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [xe.INVALID_ARGUMENT]: "Invalid argument",
  [xe.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [xe.NOT_INSTALLED]: "Need to install with `app.use` function",
  [xe.UNEXPECTED_ERROR]: "Unexpected error",
  [xe.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [xe.REQUIRED_VALUE]: "Required in value: {0}",
  [xe.INVALID_VALUE]: "Invalid value",
  [xe.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [xe.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [xe.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [xe.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [xe.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [xe.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Wr = /* @__PURE__ */ It("__translateVNode"), Vr = /* @__PURE__ */ It("__datetimeParts"), Br = /* @__PURE__ */ It("__numberParts"), zr = /* @__PURE__ */ It("__enableEmitter"), Hr = /* @__PURE__ */ It("__disableEmitter"), Pu = It("__setPluralRules"), Ss = /* @__PURE__ */ It("__injectWithOption"), jr = /* @__PURE__ */ It("__dispose");
function In(e) {
  if (!he(e))
    return e;
  for (const t in e)
    if (Zn(e, t))
      if (!t.includes("."))
        he(e[t]) && In(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let a = e, i = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] in a || (a[n[s]] = {}), !he(a[n[s]])) {
            process.env.NODE_ENV !== "production" && zt(Qn(Be.IGNORE_OBJ_FLATTEN, {
              key: n[s]
            })), i = !0;
            break;
          }
          a = a[n[s]];
        }
        i || (a[n[r]] = e[t], delete e[t]), he(a[n[r]]) && In(a[n[r]]);
      }
  return e;
}
function fa(e, t) {
  const { messages: n, __i18n: r, messageResolver: a, flatJson: i } = t, s = ae(n) ? n : De(r) ? {} : { [e]: {} };
  if (De(r) && r.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: o, resource: u } = l;
      o ? (s[o] = s[o] || {}, $n(u, s[o])) : $n(u, s);
    } else
      j(l) && $n(JSON.parse(l), s);
  }), a == null && i)
    for (const l in s)
      Zn(s, l) && In(s[l]);
  return s;
}
function Es(e) {
  return e.type;
}
function Lu(e, t, n) {
  let r = he(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = fa(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const a = Object.keys(r);
  a.length && a.forEach((i) => {
    e.mergeLocaleMessage(i, r[i]);
  });
  {
    if (he(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats);
      i.length && i.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (he(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length && i.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function hi(e) {
  return Se(Rl, null, e, 0);
}
const mi = "__INTLIFY_META__", gi = () => [], Au = () => !1;
let pi = 0;
function _i(e) {
  return (t, n, r, a) => e(n, r, ta() || void 0, a);
}
const Ru = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = ta();
  let t = null;
  return e && (t = Es(e)[mi]) ? { [mi]: t } : null;
};
function Fu(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, a = n === void 0, i = e.flatJson, s = Dt ? ze : Ii, l = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && l && as(Qn(Be.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let o = ge(e.inheritLocale) ? e.inheritLocale : !0;
  const u = s(
    // prettier-ignore
    n && o ? n.locale.value : j(e.locale) ? e.locale : Nn
  ), m = s(
    // prettier-ignore
    n && o ? n.fallbackLocale.value : j(e.fallbackLocale) || De(e.fallbackLocale) || ae(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value
  ), _ = s(fa(u.value, e)), g = s(ae(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), O = s(ae(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let w = n ? n.missingWarn : ge(e.missingWarn) || gn(e.missingWarn) ? e.missingWarn : !0, f = n ? n.fallbackWarn : ge(e.fallbackWarn) || gn(e.fallbackWarn) ? e.fallbackWarn : !0, p = n ? n.fallbackRoot : ge(e.fallbackRoot) ? e.fallbackRoot : !0, d = !!e.fallbackFormat, v = _e(e.missing) ? e.missing : null, E = _e(e.missing) ? _i(e.missing) : null, k = _e(e.postTranslation) ? e.postTranslation : null, L = n ? n.warnHtmlMessage : ge(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, P = !!e.escapeParameter;
  const V = n ? n.modifiers : ae(e.modifiers) ? e.modifiers : {};
  let X = e.pluralRules || n && n.pluralRules, b;
  b = (() => {
    a && ri(null);
    const S = {
      version: Du,
      locale: u.value,
      fallbackLocale: m.value,
      messages: _.value,
      modifiers: V,
      pluralRules: X,
      missing: E === null ? void 0 : E,
      missingWarn: w,
      fallbackWarn: f,
      fallbackFormat: d,
      unresolving: !0,
      postTranslation: k === null ? void 0 : k,
      warnHtmlMessage: L,
      escapeParameter: P,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    S.datetimeFormats = g.value, S.numberFormats = O.value, S.__datetimeFormatters = ae(b) ? b.__datetimeFormatters : void 0, S.__numberFormatters = ae(b) ? b.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (S.__v_emitter = ae(b) ? b.__v_emitter : void 0);
    const M = bu(S);
    return a && ri(M), M;
  })(), wn(b, u.value, m.value);
  function H() {
    return [
      u.value,
      m.value,
      _.value,
      g.value,
      O.value
    ];
  }
  const D = ut({
    get: () => u.value,
    set: (S) => {
      u.value = S, b.locale = u.value;
    }
  }), Y = ut({
    get: () => m.value,
    set: (S) => {
      m.value = S, b.fallbackLocale = m.value, wn(b, u.value, S);
    }
  }), G = ut(() => _.value), R = /* @__PURE__ */ ut(() => g.value), T = /* @__PURE__ */ ut(() => O.value);
  function $() {
    return _e(k) ? k : null;
  }
  function J(S) {
    k = S, b.postTranslation = S;
  }
  function q() {
    return v;
  }
  function ce(S) {
    S !== null && (E = _i(S)), v = S, b.missing = E;
  }
  function pt(S, M) {
    return S !== "translate" || !M.resolvedMessage;
  }
  const ke = (S, M, fe, Ee, Lt, zn) => {
    H();
    let an;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, a || (b.fallbackContext = n ? yu() : void 0), an = S(b);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, a || (b.fallbackContext = void 0);
    }
    if (fe !== "translate exists" && // for not `te` (e.g `t`)
    Pe(an) && an === cr || fe === "translate exists" && !an) {
      const [$t, Nl] = M();
      if (process.env.NODE_ENV !== "production" && n && j($t) && pt(fe, Nl) && (p && (dr(f, $t) || ms(w, $t)) && zt(Qn(Be.FALLBACK_TO_ROOT, {
        key: $t,
        type: fe
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Ya } = b;
        Ya && p && Ya.emit("fallback", {
          type: fe,
          key: $t,
          to: "global",
          groupId: `${fe}:${$t}`
        });
      }
      return n && p ? Ee(n) : Lt($t);
    } else {
      if (zn(an))
        return an;
      throw Wt(xe.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ke(...S) {
    return ke((M) => Reflect.apply(li, null, [M, ...S]), () => Fr(...S), "translate", (M) => Reflect.apply(M.t, M, [...S]), (M) => M, (M) => j(M));
  }
  function st(...S) {
    const [M, fe, Ee] = S;
    if (Ee && !he(Ee))
      throw Wt(xe.INVALID_ARGUMENT);
    return Ke(M, fe, Le({ resolvedMessage: !0 }, Ee || {}));
  }
  function _t(...S) {
    return ke((M) => Reflect.apply(ui, null, [M, ...S]), () => Yr(...S), "datetime format", (M) => Reflect.apply(M.d, M, [...S]), () => Jn, (M) => j(M));
  }
  function Me(...S) {
    return ke((M) => Reflect.apply(di, null, [M, ...S]), () => Ur(...S), "number format", (M) => Reflect.apply(M.n, M, [...S]), () => Jn, (M) => j(M));
  }
  function He(S) {
    return S.map((M) => j(M) || Pe(M) || ge(M) ? hi(String(M)) : M);
  }
  const yt = {
    normalize: He,
    interpolate: (S) => S,
    type: "vnode"
  };
  function qe(...S) {
    return ke(
      (M) => {
        let fe;
        const Ee = M;
        try {
          Ee.processor = yt, fe = Reflect.apply(li, null, [Ee, ...S]);
        } finally {
          Ee.processor = null;
        }
        return fe;
      },
      () => Fr(...S),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (M) => M[Wr](...S),
      (M) => [hi(M)],
      (M) => De(M)
    );
  }
  function Gt(...S) {
    return ke(
      (M) => Reflect.apply(di, null, [M, ...S]),
      () => Ur(...S),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (M) => M[Br](...S),
      gi,
      (M) => j(M) || De(M)
    );
  }
  function xn(...S) {
    return ke(
      (M) => Reflect.apply(ui, null, [M, ...S]),
      () => Yr(...S),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (M) => M[Vr](...S),
      gi,
      (M) => j(M) || De(M)
    );
  }
  function h(S) {
    X = S, b.pluralRules = X;
  }
  function c(S, M) {
    return ke(() => {
      if (!S)
        return !1;
      const fe = j(M) ? M : u.value, Ee = ee(fe), Lt = b.messageResolver(Ee, S);
      return l ? Lt != null : nn(Lt) || Xe(Lt) || j(Lt);
    }, () => [S], "translate exists", (fe) => Reflect.apply(fe.te, fe, [S, M]), Au, (fe) => ge(fe));
  }
  function x(S) {
    let M = null;
    const fe = os(b, m.value, u.value);
    for (let Ee = 0; Ee < fe.length; Ee++) {
      const Lt = _.value[fe[Ee]] || {}, zn = b.messageResolver(Lt, S);
      if (zn != null) {
        M = zn;
        break;
      }
    }
    return M;
  }
  function B(S) {
    const M = x(S);
    return M ?? (n ? n.tm(S) || {} : {});
  }
  function ee(S) {
    return _.value[S] || {};
  }
  function de(S, M) {
    if (i) {
      const fe = { [S]: M };
      for (const Ee in fe)
        Zn(fe, Ee) && In(fe[Ee]);
      M = fe[S];
    }
    _.value[S] = M, b.messages = _.value;
  }
  function lt(S, M) {
    _.value[S] = _.value[S] || {};
    const fe = { [S]: M };
    if (i)
      for (const Ee in fe)
        Zn(fe, Ee) && In(fe[Ee]);
    M = fe[S], $n(M, _.value[S]), b.messages = _.value;
  }
  function bt(S) {
    return g.value[S] || {};
  }
  function Sl(S, M) {
    g.value[S] = M, b.datetimeFormats = g.value, ci(b, S, M);
  }
  function El(S, M) {
    g.value[S] = Le(g.value[S] || {}, M), b.datetimeFormats = g.value, ci(b, S, M);
  }
  function Cl(S) {
    return O.value[S] || {};
  }
  function Tl(S, M) {
    O.value[S] = M, b.numberFormats = O.value, fi(b, S, M);
  }
  function Dl(S, M) {
    O.value[S] = Le(O.value[S] || {}, M), b.numberFormats = O.value, fi(b, S, M);
  }
  pi++, n && Dt && (Ua(n.locale, (S) => {
    o && (u.value = S, b.locale = S, wn(b, u.value, m.value));
  }), Ua(n.fallbackLocale, (S) => {
    o && (m.value = S, b.fallbackLocale = S, wn(b, u.value, m.value));
  }));
  const Te = {
    id: pi,
    locale: D,
    fallbackLocale: Y,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(S) {
      o = S, S && n && (u.value = n.locale.value, m.value = n.fallbackLocale.value, wn(b, u.value, m.value));
    },
    get availableLocales() {
      return Object.keys(_.value).sort();
    },
    messages: G,
    get modifiers() {
      return V;
    },
    get pluralRules() {
      return X || {};
    },
    get isGlobal() {
      return a;
    },
    get missingWarn() {
      return w;
    },
    set missingWarn(S) {
      w = S, b.missingWarn = w;
    },
    get fallbackWarn() {
      return f;
    },
    set fallbackWarn(S) {
      f = S, b.fallbackWarn = f;
    },
    get fallbackRoot() {
      return p;
    },
    set fallbackRoot(S) {
      p = S;
    },
    get fallbackFormat() {
      return d;
    },
    set fallbackFormat(S) {
      d = S, b.fallbackFormat = d;
    },
    get warnHtmlMessage() {
      return L;
    },
    set warnHtmlMessage(S) {
      L = S, b.warnHtmlMessage = S;
    },
    get escapeParameter() {
      return P;
    },
    set escapeParameter(S) {
      P = S, b.escapeParameter = S;
    },
    t: Ke,
    getLocaleMessage: ee,
    setLocaleMessage: de,
    mergeLocaleMessage: lt,
    getPostTranslationHandler: $,
    setPostTranslationHandler: J,
    getMissingHandler: q,
    setMissingHandler: ce,
    [Pu]: h
  };
  return Te.datetimeFormats = R, Te.numberFormats = T, Te.rt = st, Te.te = c, Te.tm = B, Te.d = _t, Te.n = Me, Te.getDateTimeFormat = bt, Te.setDateTimeFormat = Sl, Te.mergeDateTimeFormat = El, Te.getNumberFormat = Cl, Te.setNumberFormat = Tl, Te.mergeNumberFormat = Dl, Te[Ss] = r, Te[Wr] = qe, Te[Vr] = xn, Te[Br] = Gt, process.env.NODE_ENV !== "production" && (Te[zr] = (S) => {
    b.__v_emitter = S;
  }, Te[Hr] = () => {
    b.__v_emitter = void 0;
  }), Te;
}
const ha = {
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
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function Yu({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, a) => [
    ...r,
    // prettier-ignore
    ...a.type === Oe ? a.children : [a]
  ], []) : t.reduce((n, r) => {
    const a = e[r];
    return a && (n[r] = a()), n;
  }, {});
}
function Cs(e) {
  return Oe;
}
Le({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => Pe(e) || !isNaN(e)
  }
}, ha);
function Uu(e) {
  return De(e) && !j(e[0]);
}
function Ts(e, t, n, r) {
  const { slots: a, attrs: i } = t;
  return () => {
    const s = { part: !0 };
    let l = {};
    e.locale && (s.locale = e.locale), j(e.format) ? s.key = e.format : he(e.format) && (j(e.format.key) && (s.key = e.format.key), l = Object.keys(e.format).reduce((g, O) => n.includes(O) ? Le({}, g, { [O]: e.format[O] }) : g, {}));
    const o = r(e.value, s, l);
    let u = [s.key];
    De(o) ? u = o.map((g, O) => {
      const w = a[g.type], f = w ? w({ [g.type]: g.value, index: O, parts: o }) : [g.value];
      return Uu(f) && (f[0].key = `${g.type}-${O}`), f;
    }) : j(o) && (u = [o]);
    const m = Le({}, i), _ = j(e.tag) || he(e.tag) ? e.tag : Cs();
    return Ni(_, m, u);
  };
}
Le({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ha);
Le({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ha);
function yi(e, t) {
}
const Wu = /* @__PURE__ */ It("global-vue-i18n");
function yn(e = {}) {
  const t = ta();
  if (t == null)
    throw Wt(xe.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Wt(xe.NOT_INSTALLED);
  const n = Vu(t), r = zu(n), a = Es(t), i = Bu(e, a);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Wt(xe.NOT_AVAILABLE_IN_LEGACY_MODE);
    return $u(t, i, r, e);
  }
  if (i === "global")
    return Lu(r, e, a), r;
  if (i === "parent") {
    let o = Hu(n, t, e.__useComponent);
    return o == null && (process.env.NODE_ENV !== "production" && zt(Qn(Be.NOT_FOUND_PARENT_SCOPE)), o = r), o;
  }
  const s = n;
  let l = s.__getInstance(t);
  if (l == null) {
    const o = Le({}, e);
    "__i18n" in a && (o.__i18n = a.__i18n), r && (o.__root = r), l = Fu(o), s.__composerExtend && (l[jr] = s.__composerExtend(l)), Gu(s, t, l), s.__setInstance(t, l);
  }
  return l;
}
function Vu(e) {
  {
    const t = Ml(e.isCE ? Wu : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Wt(e.isCE ? xe.NOT_INSTALLED_WITH_PROVIDE : xe.UNEXPECTED_ERROR);
    return t;
  }
}
function Bu(e, t) {
  return ur(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function zu(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Hu(e, t, n = !1) {
  let r = null;
  const a = t.root;
  let i = ju(t, n);
  for (; i != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(i);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = s.__getInstance(i);
      l != null && (r = l.__composer, n && r && !r[Ss] && (r = null));
    }
    if (r != null || a === i)
      break;
    i = i.parent;
  }
  return r;
}
function ju(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Gu(e, t, n) {
  let r = null;
  Pl(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = lo();
      const a = n;
      a[zr] && a[zr](r), r.on("*", yi);
    }
  }, t), Ll(() => {
    const a = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (r && r.off("*", yi), a[Hr] && a[Hr](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const i = a[jr];
    i && (i(), delete a[jr]);
  }, t);
}
function $u(e, t, n, r = {}) {
  const a = t === "local", i = Ii(null);
  if (a && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Wt(xe.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const s = ge(r.inheritLocale) ? r.inheritLocale : !j(r.locale), l = ze(
    // prettier-ignore
    !a || s ? n.locale.value : j(r.locale) ? r.locale : Nn
  ), o = ze(
    // prettier-ignore
    !a || s ? n.fallbackLocale.value : j(r.fallbackLocale) || De(r.fallbackLocale) || ae(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : l.value
  ), u = ze(fa(l.value, r)), m = ze(ae(r.datetimeFormats) ? r.datetimeFormats : { [l.value]: {} }), _ = ze(ae(r.numberFormats) ? r.numberFormats : { [l.value]: {} }), g = a ? n.missingWarn : ge(r.missingWarn) || gn(r.missingWarn) ? r.missingWarn : !0, O = a ? n.fallbackWarn : ge(r.fallbackWarn) || gn(r.fallbackWarn) ? r.fallbackWarn : !0, w = a ? n.fallbackRoot : ge(r.fallbackRoot) ? r.fallbackRoot : !0, f = !!r.fallbackFormat, p = _e(r.missing) ? r.missing : null, d = _e(r.postTranslation) ? r.postTranslation : null, v = a ? n.warnHtmlMessage : ge(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, E = !!r.escapeParameter, k = a ? n.modifiers : ae(r.modifiers) ? r.modifiers : {}, L = r.pluralRules || a && n.pluralRules;
  function P() {
    return [
      l.value,
      o.value,
      u.value,
      m.value,
      _.value
    ];
  }
  const V = ut({
    get: () => i.value ? i.value.locale.value : l.value,
    set: (c) => {
      i.value && (i.value.locale.value = c), l.value = c;
    }
  }), X = ut({
    get: () => i.value ? i.value.fallbackLocale.value : o.value,
    set: (c) => {
      i.value && (i.value.fallbackLocale.value = c), o.value = c;
    }
  }), b = ut(() => i.value ? i.value.messages.value : u.value), U = ut(() => m.value), H = ut(() => _.value);
  function D() {
    return i.value ? i.value.getPostTranslationHandler() : d;
  }
  function Y(c) {
    i.value && i.value.setPostTranslationHandler(c);
  }
  function G() {
    return i.value ? i.value.getMissingHandler() : p;
  }
  function R(c) {
    i.value && i.value.setMissingHandler(c);
  }
  function T(c) {
    return P(), c();
  }
  function $(...c) {
    return i.value ? T(() => Reflect.apply(i.value.t, null, [...c])) : T(() => "");
  }
  function J(...c) {
    return i.value ? Reflect.apply(i.value.rt, null, [...c]) : "";
  }
  function q(...c) {
    return i.value ? T(() => Reflect.apply(i.value.d, null, [...c])) : T(() => "");
  }
  function ce(...c) {
    return i.value ? T(() => Reflect.apply(i.value.n, null, [...c])) : T(() => "");
  }
  function pt(c) {
    return i.value ? i.value.tm(c) : {};
  }
  function ke(c, x) {
    return i.value ? i.value.te(c, x) : !1;
  }
  function Ke(c) {
    return i.value ? i.value.getLocaleMessage(c) : {};
  }
  function st(c, x) {
    i.value && (i.value.setLocaleMessage(c, x), u.value[c] = x);
  }
  function _t(c, x) {
    i.value && i.value.mergeLocaleMessage(c, x);
  }
  function Me(c) {
    return i.value ? i.value.getDateTimeFormat(c) : {};
  }
  function He(c, x) {
    i.value && (i.value.setDateTimeFormat(c, x), m.value[c] = x);
  }
  function et(c, x) {
    i.value && i.value.mergeDateTimeFormat(c, x);
  }
  function yt(c) {
    return i.value ? i.value.getNumberFormat(c) : {};
  }
  function qe(c, x) {
    i.value && (i.value.setNumberFormat(c, x), _.value[c] = x);
  }
  function Gt(c, x) {
    i.value && i.value.mergeNumberFormat(c, x);
  }
  const xn = {
    get id() {
      return i.value ? i.value.id : -1;
    },
    locale: V,
    fallbackLocale: X,
    messages: b,
    datetimeFormats: U,
    numberFormats: H,
    get inheritLocale() {
      return i.value ? i.value.inheritLocale : s;
    },
    set inheritLocale(c) {
      i.value && (i.value.inheritLocale = c);
    },
    get availableLocales() {
      return i.value ? i.value.availableLocales : Object.keys(u.value);
    },
    get modifiers() {
      return i.value ? i.value.modifiers : k;
    },
    get pluralRules() {
      return i.value ? i.value.pluralRules : L;
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
      return i.value ? i.value.fallbackWarn : O;
    },
    set fallbackWarn(c) {
      i.value && (i.value.missingWarn = c);
    },
    get fallbackRoot() {
      return i.value ? i.value.fallbackRoot : w;
    },
    set fallbackRoot(c) {
      i.value && (i.value.fallbackRoot = c);
    },
    get fallbackFormat() {
      return i.value ? i.value.fallbackFormat : f;
    },
    set fallbackFormat(c) {
      i.value && (i.value.fallbackFormat = c);
    },
    get warnHtmlMessage() {
      return i.value ? i.value.warnHtmlMessage : v;
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
    t: $,
    getPostTranslationHandler: D,
    setPostTranslationHandler: Y,
    getMissingHandler: G,
    setMissingHandler: R,
    rt: J,
    d: q,
    n: ce,
    tm: pt,
    te: ke,
    getLocaleMessage: Ke,
    setLocaleMessage: st,
    mergeLocaleMessage: _t,
    getDateTimeFormat: Me,
    setDateTimeFormat: He,
    mergeDateTimeFormat: et,
    getNumberFormat: yt,
    setNumberFormat: qe,
    mergeNumberFormat: Gt
  };
  function h(c) {
    c.locale.value = l.value, c.fallbackLocale.value = o.value, Object.keys(u.value).forEach((x) => {
      c.mergeLocaleMessage(x, u.value[x]);
    }), Object.keys(m.value).forEach((x) => {
      c.mergeDateTimeFormat(x, m.value[x]);
    }), Object.keys(_.value).forEach((x) => {
      c.mergeNumberFormat(x, _.value[x]);
    }), c.escapeParameter = E, c.fallbackFormat = f, c.fallbackRoot = w, c.fallbackWarn = O, c.missingWarn = g, c.warnHtmlMessage = v;
  }
  return Al(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Wt(xe.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const c = i.value = e.proxy.$i18n.__composer;
    t === "global" ? (l.value = c.locale.value, o.value = c.fallbackLocale.value, u.value = c.messages.value, m.value = c.datetimeFormats.value, _.value = c.numberFormats.value) : a && h(c);
  }), xn;
}
Nu();
__INTLIFY_JIT_COMPILATION__ ? ni(wu) : ni(xu);
mu(Ko);
gu(os);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Ot();
  e.__INTLIFY__ = !0, ru(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Ku = {
  mail: "mail",
  phone: "ring_volume",
  link: "link"
}, bi = 13, Gr = ["en", "de"], Zt = window.navigator.userLanguage || window.navigator.language || Gr[0], qt = {
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
}, qu = {
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
function Xu(e, t, n, r, a, i) {
  return y(), C("span", {
    class: N(i.setClassNames())
  }, [
    at(e.$slots, "default")
  ], 2);
}
const ht = /* @__PURE__ */ Re(qu, [["render", Xu]]), Zu = {
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
    PawIcon: ht
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
}, Ju = ["title"], Qu = /* @__PURE__ */ W("div", { class: "h-1/3 w-10 bg-gray-500 rounded-full" }, null, -1), ec = [
  Qu
], tc = ["title"], nc = { class: "truncate" };
function rc(e, t, n, r, a, i) {
  const s = we("PawIcon");
  return n.loading ? (y(), C("div", {
    key: 0,
    class: N(["flex items-center group max-w-fit my-0 transition", i.setClassNames()]),
    disabled: "",
    title: n.title
  }, ec, 10, Ju)) : (y(), C("button", {
    key: 1,
    class: N(["flex items-center group max-w-full my-0 transition", i.setClassNames()]),
    title: n.title,
    onClick: t[0] || (t[0] = (...l) => i.click && i.click(...l))
  }, [
    n.icon ? (y(), se(s, {
      key: 0,
      size: n.size,
      outlined: n.outlined,
      class: N(["transition", i.setIconClassNames()])
    }, {
      default: te(() => [
        re(Z(n.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : A("", !0),
    W("span", nc, [
      at(e.$slots, "default")
    ])
  ], 10, tc));
}
const fr = /* @__PURE__ */ Re(Zu, [["render", rc]]), ac = {
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
    PawIcon: ht
  },
  methods: {
    change() {
      this.$emit("changed", this.value = !this.value);
    }
  }
}, ic = ["title"], sc = { class: "relative w-[18px] h-[18px] m-0.75 shrink-0 self-start pointer-events-none" }, lc = ["checked", "disabled"], oc = { class: "absolute inset-0 block peer-checked:opacity-100 opacity-0 w-4 h-4 m-px bg-white dark:peer-disabled:bg-gray-500 text-action-500 dark:text-action-400 peer-disabled:text-gray-200 dark:peer-disabled:text-gray-600 overflow-hidden rounded-sm transition z-10" }, uc = { class: "absolute inset-0 block group-hover:peer-checked:opacity-100 group-hover:peer-checked:peer-disabled:opacity-0 opacity-0 w-4 h-4 m-px bg-white overflow-hidden rounded-sm transition z-20" }, cc = /* @__PURE__ */ W("span", { class: "absolute inset-0 block w-[18px] h-[18px] border-2 border-gray-400 peer-checked:border-action-500 dark:peer-checked:border-action-400 peer-disabled:border-gray-200 dark:peer-disabled:border-gray-600 rounded-sm peer-disabled:cursor-default transition z-30" }, null, -1);
function dc(e, t, n, r, a, i) {
  const s = we("PawIcon");
  return y(), C("label", {
    class: N(["group inline-flex items-center", {
      "cursor-pointer": !n.disabled,
      "pointer-events-none": n.disabled,
      "gap-1": n.size === "sm",
      "gap-2 p-1": n.size === "md",
      "gap-3 p-2": n.size === "lg"
    }]),
    title: n.title
  }, [
    W("span", sc, [
      W("input", {
        type: "checkbox",
        onChange: t[0] || (t[0] = (...l) => i.change && i.change(...l)),
        checked: n.checked,
        disabled: n.disabled,
        class: "peer hidden"
      }, null, 40, lc),
      W("span", oc, [
        Se(s, {
          size: "md",
          class: "ml-[50%] mt-[50%] -translate-x-1/2 -translate-y-1/2"
        }, {
          default: te(() => [
            re(" check_box ")
          ]),
          _: 1
        })
      ]),
      W("span", uc, [
        Se(s, {
          size: "md",
          class: "text-action-500 dark:text-action-400 ml-[50%] mt-[50%] -translate-x-1/2 -translate-y-1/2"
        }, {
          default: te(() => [
            re(" indeterminate_check_box ")
          ]),
          _: 1
        })
      ]),
      cc
    ]),
    e.$slots.default ? (y(), C("span", {
      key: 0,
      class: N(["text-md transition", n.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"])
    }, [
      at(e.$slots, "default")
    ], 2)) : A("", !0)
  ], 10, ic);
}
const Ds = /* @__PURE__ */ Re(ac, [["render", dc]]), fc = {
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
    PawIcon: ht
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
}, hc = ["title"], mc = { class: "truncate" };
function gc(e, t, n, r, a, i) {
  const s = we("PawIcon");
  return y(), C("button", {
    class: N(["inline-flex items-center group my-0 max-w-full rounded-full overflow-hidden transition", i.setClassNames()]),
    title: n.title,
    onClick: t[0] || (t[0] = (...l) => i.click && i.click(...l))
  }, [
    n.icon ? (y(), se(s, {
      key: 0,
      size: n.size,
      outlined: n.outlined,
      class: N(["transition", i.setIconClassNames()])
    }, {
      default: te(() => [
        re(Z(n.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : A("", !0),
    W("span", mc, [
      at(e.$slots, "default")
    ]),
    n.disabled ? A("", !0) : (y(), se(s, {
      key: 1,
      size: "sm",
      class: N(["transition", i.setCloseClassNames()])
    }, {
      default: te(() => [
        re("close")
      ]),
      _: 1
    }, 8, ["class"]))
  ], 10, hc);
}
const pc = /* @__PURE__ */ Re(fc, [["render", gc]]), _c = {
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
    PawIcon: ht
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
}, yc = ["title"];
function bc(e, t, n, r, a, i) {
  const s = we("PawIcon");
  return y(), C("button", {
    class: N(["flex items-center group max-w-full my-0", i.setClassNames()]),
    title: n.title,
    onClick: t[0] || (t[0] = (...l) => i.click && i.click(...l))
  }, [
    n.icon ? (y(), se(s, {
      key: 0,
      size: n.compact ? "sm" : n.size,
      outlined: n.outlined,
      class: N(i.setIconClassNames())
    }, {
      default: te(() => [
        re(Z(n.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : A("", !0),
    a.hasSlot ? (y(), C("span", {
      key: 1,
      class: N(["truncate transition", i.setTextClassNames()])
    }, [
      at(e.$slots, "default")
    ], 2)) : A("", !0)
  ], 10, yc);
}
const Ns = /* @__PURE__ */ Re(_c, [["render", bc]]), vc = {
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
}, kc = ["title"], xc = { class: "block w-5 h-5 m-0.5 shrink-0 self-start pointer-events-none" }, wc = ["checked", "disabled"], Oc = /* @__PURE__ */ W("label", { class: "block w-5 h-5 border-2 peer-checked:border-6 peer-checked:bg-white dark:peer-checked:peer-disabled:bg-gray-500 border-gray-400 peer-checked:border-action-500 dark:peer-checked:border-action-400 peer-disabled:border-gray-200 dark:peer-disabled:border-gray-600 rounded-full transition" }, null, -1);
function Sc(e, t, n, r, a, i) {
  return y(), C("label", {
    class: N(["inline-flex items-center max-w-full", {
      "cursor-pointer": !n.disabled,
      "pointer-events-none": n.disabled,
      "gap-1": n.size === "sm",
      "gap-2 p-1": n.size === "md",
      "gap-3 p-2": n.size === "lg"
    }]),
    title: n.title
  }, [
    W("span", xc, [
      W("input", {
        type: "radio",
        onChange: t[0] || (t[0] = (...s) => i.change && i.change(...s)),
        checked: n.checked,
        disabled: n.disabled,
        class: "peer hidden"
      }, null, 40, wc),
      Oc
    ]),
    e.$slots.default ? (y(), C("span", {
      key: 0,
      class: N(["text-md truncate transition", n.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"])
    }, [
      at(e.$slots, "default")
    ], 2)) : A("", !0)
  ], 10, kc);
}
const Is = /* @__PURE__ */ Re(vc, [["render", Sc]]), Ec = 5, Cc = {
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
      return this.loadingResults ? Ec : (e = this.data) != null && e.length ? this.data : this.loadingCancelled ? [
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
    PawIcon: ht,
    PawLink: Ns,
    PawCheckbox: Ds,
    PawRadio: Is,
    PawChip: pc,
    PawButton: fr
  },
  setup() {
    const { t: e } = yn({
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
              if (this.data.filter((n) => n.unselectable).length === this.data.length)
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
                  for (let n = this.data.length - 1; n >= 0; n--) {
                    const r = this.getOptionControl(
                      this.data[n].id,
                      "checkbox"
                    );
                    if (!r)
                      break;
                    if (!r.checked) {
                      this.focusOption(this.getOptionInput(this.data[n]));
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
              if (this.data.filter((n) => n.unselectable).length === this.data.length)
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
                  for (const n in this.data) {
                    const r = this.getOptionControl(
                      this.data[n].id,
                      "checkbox"
                    );
                    if (!r)
                      break;
                    if (!r.checked) {
                      this.focusOption(this.getOptionInput(this.data[n]));
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
      this.select && this.selectSingleItem(e), this.multiselect && (t ? this.selected.push(e) : this.selected = this.selected.filter((n) => n !== e), this.updateChips(e, t), this.inputValue = "", this.$emit("typed", this.inputValue)), this.$emit("selected", this.selected);
    },
    confirmSelection(e) {
      this.select && this.selectSingleItem(e, !0);
    },
    add() {
      this.$emit("added");
    },
    moveOption(e, t, n) {
      if (!this.data || this.loadingResults)
        return;
      const r = this.data.indexOf(e) + t;
      if (r < 0 || r > this.data.length - 1) {
        if (n) {
          this.focusOption(this.getOptionInput(e), n);
          return;
        }
        this.showingResults = !1, this.focusTextInput();
        return;
      }
      this.focusOption(this.getOptionInput(this.data[r]), n);
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
    }, n = document.createElement(null), r = "mouseup") {
      document.addEventListener(r, function a(i) {
        if (!(i.target instanceof Element))
          return document.removeEventListener(r, a), !1;
        e !== i.target && !e.contains(i.target) && !Array.from(n).includes(i.target) && t(i) !== !1 && document.removeEventListener(r, a);
      });
    },
    arrayUnique(e) {
      const t = e.concat();
      for (let n = 0; n < t.length; ++n)
        for (let r = n + 1; r < t.length; ++r)
          t[n] === t[r] && t.splice(r--, 1);
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
}, Tc = {
  key: 0,
  class: "flex flex-row"
}, Dc = {
  key: 0,
  class: "max-w-[80px] h-3.5 mr-1 bg-gray-400 loading-bubble"
}, Nc = {
  key: 1,
  class: "max-w-[48px] h-3.5 ml-auto bg-gray-400 loading-bubble"
}, Ic = /* @__PURE__ */ W("span", { class: "bg-gray-400 loading-bubble max-w-[24px] w-full h-2" }, null, -1), Mc = /* @__PURE__ */ W("span", { class: "bg-gray-400 loading-bubble w-4 h-4" }, null, -1), Pc = [
  Ic,
  Mc
], Lc = {
  key: 1,
  class: "ml-2 mt-1"
}, Ac = {
  key: 0,
  class: "max-w-[120px] h-2 bg-gray-400 mb-2 loading-bubble"
}, Rc = {
  key: 1,
  class: "max-w-[120px] h-2 bg-warning-400 mb-2 loading-bubble"
}, Fc = {
  key: 2,
  class: "max-w-[120px] h-2 bg-danger-500 dark:bg-danger-400 loading-bubble"
}, Yc = {
  key: 0,
  class: "flex flex-row"
}, Uc = ["title"], Wc = ["data-content"], Vc = ["placeholder", "readonly", "tabindex"], Bc = ["type", "placeholder", "readonly", "tabindex"], zc = ["onMouseover"], Hc = {
  key: 0,
  class: "flex justify-center py-2 bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-b-md shadow-box dark:shadow-box-dark"
}, jc = {
  key: 3,
  class: "ml-2"
}, Gc = {
  key: 0,
  class: "prose-xs element-text italic text-gray-500 transition"
}, $c = {
  key: 1,
  class: "prose-xs element-text italic text-warning-500 transition"
}, Kc = {
  key: 2,
  class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition"
};
function qc(e, t, n, r, a, i) {
  var O, w, f;
  const s = we("PawIcon"), l = we("PawCheckbox"), o = we("PawRadio"), u = we("PawChip"), m = we("PawLink"), _ = we("PawCrazyInput"), g = we("PawButton");
  return y(), C("div", {
    class: N(["relative flex", [
      {
        "gap-1": !n.readonly,
        "mb-44": this.dropdownWrap
      },
      `flex-${this.flexDir}`
    ]]),
    ref: "crazyInput"
  }, [
    n.loading ? (y(), C(Oe, { key: 0 }, [
      n.label || n.info ? (y(), C("div", Tc, [
        n.label ? (y(), C("label", Dc)) : A("", !0),
        n.info ? (y(), C("span", Nc)) : A("", !0)
      ])) : A("", !0),
      W("div", {
        class: N(["flex flex-row items-center justify-between", [n.readonly ? "gap-3" : "gap-1"]])
      }, [
        n.readonly && (n.contextIcon || n.contextControl) ? (y(), C("div", {
          key: 0,
          class: N(["w-4 h-4 bg-gray-400 shrink-0 loading-bubble", [
            n.contextPosition === "top" && n.multiline ? "self-start" : "",
            n.contextPosition === "center" && n.multiline ? "self-center" : "",
            n.contextPosition === "bottom" && n.multiline ? "self-end" : ""
          ]])
        }, null, 2)) : A("", !0),
        W("div", {
          class: N(["bg-gray-400 loading-bubble mr-auto", [
            n.readonly ? n.multiline ? "h-8" : i.setLoaderMaxWidth() + " h-2" : n.multiline ? "h-24" : "h-[34px]"
          ]])
        }, null, 2),
        n.readonly ? (y(), C(Oe, { key: 1 }, [
          n.extraLabel || n.extraIcon ? (y(), C("div", {
            key: 0,
            class: N(["flex flex-row items-center shrink-0 gap-3 w-full max-w-[52px] py-1", [
              n.extraPosition === "top" && n.multiline ? "self-start" : "",
              n.extraPosition === "center" && n.multiline ? "self-center" : "",
              n.extraPosition === "bottom" && n.multiline ? "self-end" : ""
            ]])
          }, Pc, 2)) : A("", !0)
        ], 64)) : A("", !0)
      ], 2),
      n.notification || n.warning || n.error ? (y(), C("div", Lc, [
        n.notification ? (y(), C("div", Ac)) : A("", !0),
        n.warning ? (y(), C("div", Rc)) : A("", !0),
        n.error ? (y(), C("div", Fc)) : A("", !0)
      ])) : A("", !0)
    ], 64)) : (y(), C(Oe, { key: 1 }, [
      n.label || n.info ? (y(), C("div", Yc, [
        n.label ? (y(), C("label", {
          key: 0,
          onClick: t[0] || (t[0] = (...p) => i.focusTextInput && i.focusTextInput(...p)),
          class: "prose-xs element-text text-xs uppercase text-gray-500 cursor-pointer transition"
        }, Z(n.label), 1)) : A("", !0),
        n.info ? (y(), C("span", {
          key: 1,
          class: "ml-auto prose-xs element-text uppercase text-gray-500 cursor-help transition",
          title: n.title
        }, Z(n.info), 9, Uc)) : A("", !0)
      ])) : A("", !0),
      W("div", {
        class: N(["flex flex-row items-center", i.setContainerClassNames()]),
        onClick: t[13] || (t[13] = (...p) => i.click && i.click(...p))
      }, [
        n.contextIcon ? (y(), se(s, {
          key: 0,
          onClick: i.focusTextInput,
          size: "sm",
          outlined: n.contextIconOutlined,
          class: N(["text-gray-400 my-1 cursor-pointer", {
            "self-start": n.contextPosition === "top",
            "self-center": n.contextPosition === "center",
            "self-end": n.contextPosition === "bottom"
          }])
        }, {
          default: te(() => [
            re(Z(n.contextIcon), 1)
          ]),
          _: 1
        }, 8, ["onClick", "outlined", "class"])) : n.contextControl === "checkbox" ? (y(), se(l, {
          key: 1,
          ref: "checkbox",
          onClick: i.focusTextInput,
          onChanged: i.change,
          size: "sm",
          class: N(["py-1", {
            "self-start": n.contextPosition === "top",
            "self-center": n.contextPosition === "center",
            "self-end": n.contextPosition === "bottom",
            "pointer-events-none": n.readonly
          }]),
          checked: n.contextChecked,
          disabled: n.contextDisabled
        }, null, 8, ["onClick", "onChanged", "class", "checked", "disabled"])) : n.contextControl === "radio" ? (y(), se(o, {
          key: 2,
          ref: "radio",
          onClick: i.focusTextInput,
          onChanged: i.change,
          size: "sm",
          class: N(["py-1", {
            "self-start": n.contextPosition === "top",
            "self-center": n.contextPosition === "center",
            "self-end": n.contextPosition === "bottom",
            "pointer-events-none": n.readonly
          }]),
          checked: n.contextChecked,
          disabled: n.contextDisabled
        }, null, 8, ["onClick", "onChanged", "class", "checked", "disabled"])) : A("", !0),
        W("div", {
          class: N(["w-full min-w-0 flex flex-wrap", {
            "cursor-pointer": !((O = n.item) != null && O.unselectable)
          }]),
          onClick: t[11] || (t[11] = (...p) => i.focusTextInput && i.focusTextInput(...p))
        }, [
          (y(!0), C(Oe, null, Ye(a.chips, (p) => (y(), se(u, {
            key: p.id,
            onClicked: (d) => i.removeChip(p),
            size: "sm",
            icon: n.chipIcon,
            title: this.t("removeItem"),
            class: "shrink align-top justify-self-start ml-1 mt-1"
          }, {
            default: te(() => [
              re(Z(p.value), 1)
            ]),
            _: 2
          }, 1032, ["onClicked", "icon", "title"]))), 128)),
          W("span", {
            class: N([
              n.multiline ? "min-h-[32px] before:content_ before:py-1.5 before:pl-2 before:pr-3 before:row-start-1 before:col-start-1 before:prose-md before:element-text before:invisible before:whitespace-pre-wrap" : "h-8",
              n.multiline ? "inline-grid" : "",
              n.multiselect ? "basis-20 grow" : "w-full"
            ]),
            "data-content": n.multiline ? a.inputValue : ""
          }, [
            n.multiline ? Ut((y(), C("textarea", {
              key: 0,
              "onUpdate:modelValue": t[1] || (t[1] = (p) => a.inputValue = p),
              ref: "textInput",
              class: N(["row-start-1 col-start-1 rounded-md break-words input-reset text-gray-900 dark:text-white transition", [
                n.extraLabel || n.extraIcon || n.readonly ? "pr-3" : "pr-2.25",
                n.readonly ? "cursor-pointer" : ""
              ]]),
              onInput: t[2] || (t[2] = (p) => {
                i.resize(p), i.type();
              }),
              onFocus: t[3] || (t[3] = (p) => i.outlineContainer(!0)),
              onBlur: t[4] || (t[4] = (p) => i.outlineContainer(!1)),
              onKeydown: t[5] || (t[5] = (p) => i.keyDown(p, n.item)),
              rows: "1",
              placeholder: n.placeholder,
              readonly: n.readonly,
              tabindex: n.readonly && !n.isOpen || (w = n.item) != null && w.unselectable ? -1 : null
            }, null, 42, Vc)), [
              [Mi, a.inputValue]
            ]) : Ut((y(), C("input", {
              key: 1,
              type: n.secret ? "password" : "text",
              "onUpdate:modelValue": t[6] || (t[6] = (p) => a.inputValue = p),
              ref: "textInput",
              onInput: t[7] || (t[7] = (...p) => i.type && i.type(...p)),
              onFocus: t[8] || (t[8] = (p) => i.outlineContainer(!0)),
              onBlur: t[9] || (t[9] = (p) => i.outlineContainer(!1)),
              onKeydown: t[10] || (t[10] = (p) => i.keyDown(p, n.item)),
              class: N(["rounded-md input-reset text-gray-900 dark:text-white transition", {
                truncate: !n.multiline,
                "pr-3": n.extraLabel || n.extraIcon || n.readonly,
                "pointer-events-none selection:bg-transparent": n.readonly
              }]),
              placeholder: n.placeholder,
              readonly: n.readonly,
              tabindex: n.readonly && !n.isOpen || (f = n.item) != null && f.unselectable ? -1 : null
            }, null, 42, Bc)), [
              [Fl, a.inputValue]
            ])
          ], 10, Wc)
        ], 2),
        n.extraLabel || n.extraIcon || n.data ? (y(), C("span", {
          key: 3,
          class: N(["flex flex-row shrink-0 items-center py-1", {
            "self-start": n.extraPosition === "top",
            "self-center": n.extraPosition === "center",
            "self-end": n.extraPosition === "bottom"
          }])
        }, [
          n.extraLabel ? (y(), C("span", {
            key: 0,
            class: "mr-1 text-xs text-gray-400 cursor-pointer",
            onClick: t[12] || (t[12] = (...p) => i.focusTextInput && i.focusTextInput(...p))
          }, Z(n.extraLabel), 1)) : A("", !0),
          n.extraIcon ? (y(), se(s, {
            key: 1,
            onClick: i.focusTextInput,
            size: "sm",
            class: N(["text-gray-400 opacity-100 cursor-pointer transition", {
              "opacity-0": a.showingResults
            }]),
            outlined: n.extraIconOutlined
          }, {
            default: te(() => [
              re(Z(n.extraIcon), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class", "outlined"])) : A("", !0),
          n.data ? Ut((y(), se(m, {
            key: 2,
            onClicked: i.closeAction,
            class: N([[
              a.showingResults || a.inputValue ? "opacity-100" : "opacity-0 pointer-events-none"
            ], "transition"]),
            size: "sm",
            icon: n.select ? "close" : n.multiselect ? a.showingResults ? "unfold_less" : "unfold_more" : "",
            tabindex: a.showingResults ? null : -1
          }, null, 8, ["onClicked", "class", "icon", "tabindex"])), [
            [Cn, a.showingResults || a.inputValue || !n.extraLabel && !n.extraIcon]
          ]) : A("", !0)
        ], 2)) : A("", !0)
      ], 2),
      n.data ? (y(), C("div", {
        key: 1,
        class: N([{
          "opacity-100": a.showingResults
        }, "absolute z-20 opacity-0 bottom-1 w-full translate-y-full h-1 border-x border-gray-200 dark:border-gray-600 bg-gray-200 dark:bg-gray-600 transition"])
      }, null, 2)) : A("", !0),
      n.data ? (y(), C("div", {
        key: 2,
        class: N([[
          a.showingResults ? "opacity-100" : "opacity-0 pointer-events-none"
        ], "absolute z-10 bottom-0 w-full max-h-[181px] translate-y-full rounded-md rounded-t-none transition"])
      }, [
        W("div", {
          class: N(["max-h-[inherit] overflow-y-auto border-gray-300 dark:border-gray-700 shadow-box dark:shadow-box-dark", n.addLabel ? "rounded-b-none" : "rounded-b-md"])
        }, [
          (y(!0), C(Oe, null, Ye(i.dropdownItems, (p) => (y(), C("div", {
            key: p,
            onMouseover: (d) => i.optionHovered(p),
            class: N(["transition", [
              !p.unselectable && !a.loadingResults ? "hover:bg-white dark:hover:bg-gray-800 cursor-pointer" : "",
              p.id === a.itemIdFocused && !p.unselectable && !a.loadingResults ? "bg-white dark:bg-gray-800" : "bg-gray-100 dark:bg-gray-700"
            ]])
          }, [
            Se(_, {
              class: N({
                "p-2 gap-1": a.loadingResults
              }),
              ref_for: !0,
              ref: `OPTION-${i.getOptionId(p)}`,
              onClick: (d) => i.confirmSelection(p),
              onChanged: (d) => p.unselectable ? null : i.itemSelected(p, d),
              onOptionFocused: (d, v) => p.unselectable ? null : i.focusChange(d, v),
              onOptionSelected: (d, v) => p.unselectable ? null : i.itemSelected(d, v),
              onOptionMoved: (d, v) => p.unselectable ? null : i.moveOption(d, v),
              onOptionTyped: t[14] || (t[14] = (d) => i.optionTyped(d)),
              onDropdownClosed: (d) => p.unselectable ? null : i.closeDropdown(),
              "context-control": p.unselectable ? null : n.select ? "radio" : n.multiselect ? "checkbox" : null,
              "context-checked": p.unselectable ? null : i.isItemChecked(p),
              "context-disabled": p.unselectable ? null : p.disabled,
              "context-position": p.unselectable ? n.contextPosition : p.contextPosition,
              "extra-label": a.loadingResults ? n.extraLabel : p.extraLabel,
              "extra-icon": a.loadingResults ? n.extraIcon : p.extraIcon,
              "extra-icon-outlined": p.extraIconOutlined,
              "extra-position": p.extraPosition,
              multiline: a.loadingResults ? n.multiline : p.multiline,
              "is-open": a.showingResults,
              item: p,
              loading: a.loadingResults,
              readonly: ""
            }, {
              default: te(() => [
                re(Z(p.value), 1)
              ]),
              _: 2
            }, 1032, ["class", "onClick", "onChanged", "onOptionFocused", "onOptionSelected", "onOptionMoved", "onDropdownClosed", "context-control", "context-checked", "context-disabled", "context-position", "extra-label", "extra-icon", "extra-icon-outlined", "extra-position", "multiline", "is-open", "item", "loading"])
          ], 42, zc))), 128))
        ], 2),
        n.addLabel && !a.loadingResults ? (y(), C("div", Hc, [
          Se(g, {
            size: "sm",
            icon: n.addIcon,
            onClicked: i.add
          }, {
            default: te(() => [
              re(Z(n.addLabel), 1)
            ]),
            _: 1
          }, 8, ["icon", "onClicked"])
        ])) : A("", !0)
      ], 2)) : A("", !0),
      n.notification || n.warning || n.error ? (y(), C("div", jc, [
        n.notification ? (y(), C("div", Gc, Z(n.notification), 1)) : A("", !0),
        n.warning ? (y(), C("div", $c, Z(n.warning), 1)) : A("", !0),
        n.error ? (y(), C("div", Kc, Z(n.error), 1)) : A("", !0)
      ])) : A("", !0)
    ], 64))
  ], 2);
}
const Xc = /* @__PURE__ */ Re(Cc, [["render", qc]]), Zc = { class: "relative w-fit" }, Jc = { class: "flex flex-col" }, Qc = ["onClick"], ed = {
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
    const n = ze("right-0");
    function r(o) {
      o.x < 260 && (n.value = "left-0"), s.value = !s.value;
    }
    const a = t, i = e, s = ze(!1);
    function l(o) {
      s.value = !1, a("selected", o);
    }
    return (o, u) => (y(), C("div", Zc, [
      Se(fr, {
        onClick: u[0] || (u[0] = (m) => r(m)),
        size: i.size,
        title: i.title,
        icon: i.icon,
        disabled: i.disabled,
        outlined: i.outlined,
        buttonRoundedClasses: i.buttonRoundedClasses,
        buttonColorClasses: i.buttonColorClasses,
        buttonBackgroundClasses: i.buttonBackgroundClasses,
        iconColorClasses: i.iconColorClasses
      }, {
        default: te(() => [
          re(Z(i.textSlot), 1)
        ]),
        _: 1
      }, 8, ["size", "title", "icon", "disabled", "outlined", "buttonRoundedClasses", "buttonColorClasses", "buttonBackgroundClasses", "iconColorClasses"]),
      Se(Pi, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95",
        appear: ""
      }, {
        default: te(() => [
          Ut(W("div", {
            class: N([[
              e.fluidWidthDropdown ? "min-w-max" : "min-w-[240px]",
              n.value
            ], "absolute max-w-xs w-full rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 my-2 z-50"])
          }, [
            W("div", Jc, [
              (y(!0), C(Oe, null, Ye(i.items, (m) => (y(), C("button", {
                onClick: (_) => l(m.identifier),
                key: m.identifier,
                class: N(["dark:hover:bg-gray-900 cursor-pointer first-of-type:rounded-tr-lg first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-bl-lg hover:bg-gray-100 w-full text-md dark:text-white text-gray-900 transition-all duration-300 items-center flex flex-row space-x-3 border-t dark:border-gray-700 first-of-type:border-t-0", [e.fluidWidthDropdown ? "px-4 py-2" : "p-2"]])
              }, [
                m.icon ? (y(), se(ht, {
                  key: 0,
                  size: "sm",
                  class: "text-gray-400"
                }, {
                  default: te(() => [
                    re(Z(m.icon), 1)
                  ]),
                  _: 2
                }, 1024)) : A("", !0),
                W("span", null, Z(m.textSlot), 1)
              ], 10, Qc))), 128))
            ])
          ], 2), [
            [Cn, s.value]
          ])
        ]),
        _: 1
      })
    ]));
  }
}, td = {
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
}, nd = ["title"], rd = { class: "truncate" };
function ad(e, t, n, r, a, i) {
  return y(), C("label", {
    class: N(["flex items-center max-w-max text-white element-text rounded-full transition", i.setClassNames()]),
    title: n.title
  }, [
    W("span", rd, [
      at(e.$slots, "default")
    ])
  ], 10, nd);
}
const id = /* @__PURE__ */ Re(td, [["render", ad]]);
var sd = {
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
}, ld = sd, hr = {}, Fn = {};
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.clone = void 0;
function od(e) {
  return e ? JSON.parse(JSON.stringify(e)) : null;
}
Fn.clone = od;
var mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.matches = void 0;
function ud(e, t, n) {
  var r = String(t).length, a = e.substr(0, r), i = parseInt(a, 10);
  return t = parseInt(String(t).substr(0, a.length), 10), n = parseInt(String(n).substr(0, a.length), 10), i >= t && i <= n;
}
function cd(e, t) {
  return t = String(t), t.substring(0, e.length) === e.substring(0, t.length);
}
function dd(e, t) {
  return Array.isArray(t) ? ud(e, t[0], t[1]) : cd(e, t);
}
mr.matches = dd;
Object.defineProperty(hr, "__esModule", { value: !0 });
hr.addMatchingCardsToResults = void 0;
var fd = Fn, hd = mr;
function md(e, t, n) {
  var r, a;
  for (r = 0; r < t.patterns.length; r++) {
    var i = t.patterns[r];
    if (hd.matches(e, i)) {
      var s = fd.clone(t);
      Array.isArray(i) ? a = String(i[0]).length : a = String(i).length, e.length >= a && (s.matchStrength = a), n.push(s);
      break;
    }
  }
}
hr.addMatchingCardsToResults = md;
var gr = {};
Object.defineProperty(gr, "__esModule", { value: !0 });
gr.isValidInputType = void 0;
function gd(e) {
  return typeof e == "string" || e instanceof String;
}
gr.isValidInputType = gd;
var pr = {};
Object.defineProperty(pr, "__esModule", { value: !0 });
pr.findBestMatch = void 0;
function pd(e) {
  var t = e.filter(function(n) {
    return n.matchStrength;
  }).length;
  return t > 0 && t === e.length;
}
function _d(e) {
  return pd(e) ? e.reduce(function(t, n) {
    return !t || Number(t.matchStrength) < Number(n.matchStrength) ? n : t;
  }) : null;
}
pr.findBestMatch = _d;
var er = Wa && Wa.__assign || function() {
  return er = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, er.apply(this, arguments);
}, Ms = ld, yd = hr, bd = gr, vd = pr, Yn = Fn, Mn = {}, je = {
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
}, Ps = [
  je.VISA,
  je.MASTERCARD,
  je.AMERICAN_EXPRESS,
  je.DINERS_CLUB,
  je.DISCOVER,
  je.JCB,
  je.UNIONPAY,
  je.MAESTRO,
  je.ELO,
  je.MIR,
  je.HIPER,
  je.HIPERCARD
], Bt = Yn.clone(Ps);
function ma(e) {
  return Mn[e] || Ms[e];
}
function kd() {
  return Bt.map(function(e) {
    return Yn.clone(ma(e));
  });
}
function ga(e, t) {
  t === void 0 && (t = !1);
  var n = Bt.indexOf(e);
  if (!t && n === -1)
    throw new Error('"' + e + '" is not a supported card type.');
  return n;
}
function jt(e) {
  var t = [];
  if (!bd.isValidInputType(e))
    return t;
  if (e.length === 0)
    return kd();
  Bt.forEach(function(r) {
    var a = ma(r);
    yd.addMatchingCardsToResults(e, a, t);
  });
  var n = vd.findBestMatch(t);
  return n ? [n] : t;
}
jt.getTypeInfo = function(e) {
  return Yn.clone(ma(e));
};
jt.removeCard = function(e) {
  var t = ga(e);
  Bt.splice(t, 1);
};
jt.addCard = function(e) {
  var t = ga(e.type, !0);
  Mn[e.type] = e, t === -1 && Bt.push(e.type);
};
jt.updateCard = function(e, t) {
  var n = Mn[e] || Ms[e];
  if (!n)
    throw new Error('"' + e + "\" is not a recognized type. Use `addCard` instead.'");
  if (t.type && n.type !== t.type)
    throw new Error("Cannot overwrite type parameter.");
  var r = Yn.clone(n);
  r = er(er({}, r), t), Mn[r.type] = r;
};
jt.changeOrder = function(e, t) {
  var n = ga(e);
  Bt.splice(n, 1), Bt.splice(t, 0, e);
};
jt.resetModifications = function() {
  Bt = Yn.clone(Ps), Mn = {};
};
jt.types = je;
var xd = jt;
const wd = /* @__PURE__ */ Li(xd);
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ls;
function F() {
  return Ls.apply(null, arguments);
}
function Od(e) {
  Ls = e;
}
function nt(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Qt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function oe(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function pa(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (oe(e, t))
      return !1;
  return !0;
}
function Ve(e) {
  return e === void 0;
}
function Nt(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Un(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function As(e, t) {
  var n = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    n.push(t(e[r], r));
  return n;
}
function Ft(e, t) {
  for (var n in t)
    oe(t, n) && (e[n] = t[n]);
  return oe(t, "toString") && (e.toString = t.toString), oe(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function mt(e, t, n, r) {
  return al(e, t, n, r, !0).utc();
}
function Sd() {
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
function ne(e) {
  return e._pf == null && (e._pf = Sd()), e._pf;
}
var $r;
Array.prototype.some ? $r = Array.prototype.some : $r = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function _a(e) {
  var t = null, n = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = ne(e), n = $r.call(t.parsedDateParts, function(a) {
    return a != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function _r(e) {
  var t = mt(NaN);
  return e != null ? Ft(ne(t), e) : ne(t).userInvalidated = !0, t;
}
var vi = F.momentProperties = [], Ir = !1;
function ya(e, t) {
  var n, r, a, i = vi.length;
  if (Ve(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Ve(t._i) || (e._i = t._i), Ve(t._f) || (e._f = t._f), Ve(t._l) || (e._l = t._l), Ve(t._strict) || (e._strict = t._strict), Ve(t._tzm) || (e._tzm = t._tzm), Ve(t._isUTC) || (e._isUTC = t._isUTC), Ve(t._offset) || (e._offset = t._offset), Ve(t._pf) || (e._pf = ne(t)), Ve(t._locale) || (e._locale = t._locale), i > 0)
    for (n = 0; n < i; n++)
      r = vi[n], a = t[r], Ve(a) || (e[r] = a);
  return e;
}
function Wn(e) {
  ya(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Ir === !1 && (Ir = !0, F.updateOffset(this), Ir = !1);
}
function rt(e) {
  return e instanceof Wn || e != null && e._isAMomentObject != null;
}
function Rs(e) {
  F.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Je(e, t) {
  var n = !0;
  return Ft(function() {
    if (F.deprecationHandler != null && F.deprecationHandler(null, e), n) {
      var r = [], a, i, s, l = arguments.length;
      for (i = 0; i < l; i++) {
        if (a = "", typeof arguments[i] == "object") {
          a += `
[` + i + "] ";
          for (s in arguments[0])
            oe(arguments[0], s) && (a += s + ": " + arguments[0][s] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[i];
        r.push(a);
      }
      Rs(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var ki = {};
function Fs(e, t) {
  F.deprecationHandler != null && F.deprecationHandler(e, t), ki[e] || (Rs(t), ki[e] = !0);
}
F.suppressDeprecationWarnings = !1;
F.deprecationHandler = null;
function gt(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Ed(e) {
  var t, n;
  for (n in e)
    oe(e, n) && (t = e[n], gt(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Kr(e, t) {
  var n = Ft({}, e), r;
  for (r in t)
    oe(t, r) && (Qt(e[r]) && Qt(t[r]) ? (n[r] = {}, Ft(n[r], e[r]), Ft(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    oe(e, r) && !oe(t, r) && Qt(e[r]) && (n[r] = Ft({}, n[r]));
  return n;
}
function ba(e) {
  e != null && this.set(e);
}
var qr;
Object.keys ? qr = Object.keys : qr = function(e) {
  var t, n = [];
  for (t in e)
    oe(e, t) && n.push(t);
  return n;
};
var Cd = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Td(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return gt(r) ? r.call(t, n) : r;
}
function ft(e, t, n) {
  var r = "" + Math.abs(e), a = t - r.length, i = e >= 0;
  return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var va = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, jn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Mr = {}, fn = {};
function K(e, t, n, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (fn[e] = a), t && (fn[t[0]] = function() {
    return ft(a.apply(this, arguments), t[1], t[2]);
  }), n && (fn[n] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function Dd(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Nd(e) {
  var t = e.match(va), n, r;
  for (n = 0, r = t.length; n < r; n++)
    fn[t[n]] ? t[n] = fn[t[n]] : t[n] = Dd(t[n]);
  return function(a) {
    var i = "", s;
    for (s = 0; s < r; s++)
      i += gt(t[s]) ? t[s].call(a, e) : t[s];
    return i;
  };
}
function Kn(e, t) {
  return e.isValid() ? (t = Ys(t, e.localeData()), Mr[t] = Mr[t] || Nd(t), Mr[t](e)) : e.localeData().invalidDate();
}
function Ys(e, t) {
  var n = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (jn.lastIndex = 0; n >= 0 && jn.test(e); )
    e = e.replace(
      jn,
      r
    ), jn.lastIndex = 0, n -= 1;
  return e;
}
var Id = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Md(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(va).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var Pd = "Invalid date";
function Ld() {
  return this._invalidDate;
}
var Ad = "%d", Rd = /\d{1,2}/;
function Fd(e) {
  return this._ordinal.replace("%d", e);
}
var Yd = {
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
function Ud(e, t, n, r) {
  var a = this._relativeTime[n];
  return gt(a) ? a(e, t, n, r) : a.replace(/%d/i, e);
}
function Wd(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return gt(n) ? n(t) : n.replace(/%s/i, t);
}
var xi = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function Qe(e) {
  return typeof e == "string" ? xi[e] || xi[e.toLowerCase()] : void 0;
}
function ka(e) {
  var t = {}, n, r;
  for (r in e)
    oe(e, r) && (n = Qe(r), n && (t[n] = e[r]));
  return t;
}
var Vd = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function Bd(e) {
  var t = [], n;
  for (n in e)
    oe(e, n) && t.push({ unit: n, priority: Vd[n] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
var Us = /\d/, $e = /\d\d/, Ws = /\d{3}/, xa = /\d{4}/, yr = /[+-]?\d{6}/, be = /\d\d?/, Vs = /\d\d\d\d?/, Bs = /\d\d\d\d\d\d?/, br = /\d{1,3}/, wa = /\d{1,4}/, vr = /[+-]?\d{1,6}/, bn = /\d+/, kr = /[+-]?\d+/, zd = /Z|[+-]\d\d:?\d\d/gi, xr = /Z|[+-]\d\d(?::?\d\d)?/gi, Hd = /[+-]?\d+(\.\d{1,3})?/, Vn = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, vn = /^[1-9]\d?/, Oa = /^([1-9]\d|\d)/, tr;
tr = {};
function z(e, t, n) {
  tr[e] = gt(t) ? t : function(r, a) {
    return r && n ? n : t;
  };
}
function jd(e, t) {
  return oe(tr, e) ? tr[e](t._strict, t._locale) : new RegExp(Gd(e));
}
function Gd(e) {
  return Ct(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, r, a, i) {
        return n || r || a || i;
      }
    )
  );
}
function Ct(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Ze(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function ie(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = Ze(t)), n;
}
var Xr = {};
function me(e, t) {
  var n, r = t, a;
  for (typeof e == "string" && (e = [e]), Nt(t) && (r = function(i, s) {
    s[t] = ie(i);
  }), a = e.length, n = 0; n < a; n++)
    Xr[e[n]] = r;
}
function Bn(e, t) {
  me(e, function(n, r, a, i) {
    a._w = a._w || {}, t(n, a._w, a, i);
  });
}
function $d(e, t, n) {
  t != null && oe(Xr, e) && Xr[e](t, n._a, n, e);
}
function wr(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var Ae = 0, St = 1, ct = 2, Ne = 3, tt = 4, Et = 5, Jt = 6, Kd = 7, qd = 8;
K("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? ft(e, 4) : "+" + e;
});
K(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
K(0, ["YYYY", 4], 0, "year");
K(0, ["YYYYY", 5], 0, "year");
K(0, ["YYYYYY", 6, !0], 0, "year");
z("Y", kr);
z("YY", be, $e);
z("YYYY", wa, xa);
z("YYYYY", vr, yr);
z("YYYYYY", vr, yr);
me(["YYYYY", "YYYYYY"], Ae);
me("YYYY", function(e, t) {
  t[Ae] = e.length === 2 ? F.parseTwoDigitYear(e) : ie(e);
});
me("YY", function(e, t) {
  t[Ae] = F.parseTwoDigitYear(e);
});
me("Y", function(e, t) {
  t[Ae] = parseInt(e, 10);
});
function Tn(e) {
  return wr(e) ? 366 : 365;
}
F.parseTwoDigitYear = function(e) {
  return ie(e) + (ie(e) > 68 ? 1900 : 2e3);
};
var zs = kn("FullYear", !0);
function Xd() {
  return wr(this.year());
}
function kn(e, t) {
  return function(n) {
    return n != null ? (Hs(this, e, n), F.updateOffset(this, t), this) : Pn(this, e);
  };
}
function Pn(e, t) {
  if (!e.isValid())
    return NaN;
  var n = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? n.getUTCMilliseconds() : n.getMilliseconds();
    case "Seconds":
      return r ? n.getUTCSeconds() : n.getSeconds();
    case "Minutes":
      return r ? n.getUTCMinutes() : n.getMinutes();
    case "Hours":
      return r ? n.getUTCHours() : n.getHours();
    case "Date":
      return r ? n.getUTCDate() : n.getDate();
    case "Day":
      return r ? n.getUTCDay() : n.getDay();
    case "Month":
      return r ? n.getUTCMonth() : n.getMonth();
    case "FullYear":
      return r ? n.getUTCFullYear() : n.getFullYear();
    default:
      return NaN;
  }
}
function Hs(e, t, n) {
  var r, a, i, s, l;
  if (!(!e.isValid() || isNaN(n))) {
    switch (r = e._d, a = e._isUTC, t) {
      case "Milliseconds":
        return void (a ? r.setUTCMilliseconds(n) : r.setMilliseconds(n));
      case "Seconds":
        return void (a ? r.setUTCSeconds(n) : r.setSeconds(n));
      case "Minutes":
        return void (a ? r.setUTCMinutes(n) : r.setMinutes(n));
      case "Hours":
        return void (a ? r.setUTCHours(n) : r.setHours(n));
      case "Date":
        return void (a ? r.setUTCDate(n) : r.setDate(n));
      case "FullYear":
        break;
      default:
        return;
    }
    i = n, s = e.month(), l = e.date(), l = l === 29 && s === 1 && !wr(i) ? 28 : l, a ? r.setUTCFullYear(i, s, l) : r.setFullYear(i, s, l);
  }
}
function Zd(e) {
  return e = Qe(e), gt(this[e]) ? this[e]() : this;
}
function Jd(e, t) {
  if (typeof e == "object") {
    e = ka(e);
    var n = Bd(e), r, a = n.length;
    for (r = 0; r < a; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = Qe(e), gt(this[e]))
    return this[e](t);
  return this;
}
function Qd(e, t) {
  return (e % t + t) % t;
}
var Ce;
Array.prototype.indexOf ? Ce = Array.prototype.indexOf : Ce = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Sa(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = Qd(t, 12);
  return e += (t - n) / 12, n === 1 ? wr(e) ? 29 : 28 : 31 - n % 7 % 2;
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
z("M", be, vn);
z("MM", be, $e);
z("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
z("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
me(["M", "MM"], function(e, t) {
  t[St] = ie(e) - 1;
});
me(["MMM", "MMMM"], function(e, t, n, r) {
  var a = n._locale.monthsParse(e, r, n._strict);
  a != null ? t[St] = a : ne(n).invalidMonth = e;
});
var ef = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), js = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Gs = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, tf = Vn, nf = Vn;
function rf(e, t) {
  return e ? nt(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Gs).test(t) ? "format" : "standalone"][e.month()] : nt(this._months) ? this._months : this._months.standalone;
}
function af(e, t) {
  return e ? nt(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Gs.test(t) ? "format" : "standalone"][e.month()] : nt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function sf(e, t, n) {
  var r, a, i, s = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      i = mt([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (a = Ce.call(this._shortMonthsParse, s), a !== -1 ? a : null) : (a = Ce.call(this._longMonthsParse, s), a !== -1 ? a : null) : t === "MMM" ? (a = Ce.call(this._shortMonthsParse, s), a !== -1 ? a : (a = Ce.call(this._longMonthsParse, s), a !== -1 ? a : null)) : (a = Ce.call(this._longMonthsParse, s), a !== -1 ? a : (a = Ce.call(this._shortMonthsParse, s), a !== -1 ? a : null));
}
function lf(e, t, n) {
  var r, a, i;
  if (this._monthsParseExact)
    return sf.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (a = mt([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[r] && (i = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!n && this._monthsParse[r].test(e))
      return r;
  }
}
function $s(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = ie(t);
    else if (t = e.localeData().monthsParse(t), !Nt(t))
      return e;
  }
  var n = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, Sa(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r), e;
}
function Ks(e) {
  return e != null ? ($s(this, e), F.updateOffset(this, !0), this) : Pn(this, "Month");
}
function of() {
  return Sa(this.year(), this.month());
}
function uf(e) {
  return this._monthsParseExact ? (oe(this, "_monthsRegex") || qs.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (oe(this, "_monthsShortRegex") || (this._monthsShortRegex = tf), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function cf(e) {
  return this._monthsParseExact ? (oe(this, "_monthsRegex") || qs.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (oe(this, "_monthsRegex") || (this._monthsRegex = nf), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function qs() {
  function e(o, u) {
    return u.length - o.length;
  }
  var t = [], n = [], r = [], a, i, s, l;
  for (a = 0; a < 12; a++)
    i = mt([2e3, a]), s = Ct(this.monthsShort(i, "")), l = Ct(this.months(i, "")), t.push(s), n.push(l), r.push(l), r.push(s);
  t.sort(e), n.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function df(e, t, n, r, a, i, s) {
  var l;
  return e < 100 && e >= 0 ? (l = new Date(e + 400, t, n, r, a, i, s), isFinite(l.getFullYear()) && l.setFullYear(e)) : l = new Date(e, t, n, r, a, i, s), l;
}
function Ln(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function nr(e, t, n) {
  var r = 7 + t - n, a = (7 + Ln(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function Xs(e, t, n, r, a) {
  var i = (7 + n - r) % 7, s = nr(e, r, a), l = 1 + 7 * (t - 1) + i + s, o, u;
  return l <= 0 ? (o = e - 1, u = Tn(o) + l) : l > Tn(e) ? (o = e + 1, u = l - Tn(e)) : (o = e, u = l), {
    year: o,
    dayOfYear: u
  };
}
function An(e, t, n) {
  var r = nr(e.year(), t, n), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, i, s;
  return a < 1 ? (s = e.year() - 1, i = a + Tt(s, t, n)) : a > Tt(e.year(), t, n) ? (i = a - Tt(e.year(), t, n), s = e.year() + 1) : (s = e.year(), i = a), {
    week: i,
    year: s
  };
}
function Tt(e, t, n) {
  var r = nr(e, t, n), a = nr(e + 1, t, n);
  return (Tn(e) - r + a) / 7;
}
K("w", ["ww", 2], "wo", "week");
K("W", ["WW", 2], "Wo", "isoWeek");
z("w", be, vn);
z("ww", be, $e);
z("W", be, vn);
z("WW", be, $e);
Bn(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = ie(e);
  }
);
function ff(e) {
  return An(e, this._week.dow, this._week.doy).week;
}
var hf = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function mf() {
  return this._week.dow;
}
function gf() {
  return this._week.doy;
}
function pf(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function _f(e) {
  var t = An(this, 1, 4).week;
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
z("d", be);
z("e", be);
z("E", be);
z("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
z("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
z("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Bn(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var a = n._locale.weekdaysParse(e, r, n._strict);
  a != null ? t.d = a : ne(n).invalidWeekday = e;
});
Bn(["d", "e", "E"], function(e, t, n, r) {
  t[r] = ie(e);
});
function yf(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function bf(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Ea(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var vf = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Zs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), kf = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), xf = Vn, wf = Vn, Of = Vn;
function Sf(e, t) {
  var n = nt(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Ea(n, this._week.dow) : e ? n[e.day()] : n;
}
function Ef(e) {
  return e === !0 ? Ea(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Cf(e) {
  return e === !0 ? Ea(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Tf(e, t, n) {
  var r, a, i, s = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      i = mt([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (a = Ce.call(this._weekdaysParse, s), a !== -1 ? a : null) : t === "ddd" ? (a = Ce.call(this._shortWeekdaysParse, s), a !== -1 ? a : null) : (a = Ce.call(this._minWeekdaysParse, s), a !== -1 ? a : null) : t === "dddd" ? (a = Ce.call(this._weekdaysParse, s), a !== -1 || (a = Ce.call(this._shortWeekdaysParse, s), a !== -1) ? a : (a = Ce.call(this._minWeekdaysParse, s), a !== -1 ? a : null)) : t === "ddd" ? (a = Ce.call(this._shortWeekdaysParse, s), a !== -1 || (a = Ce.call(this._weekdaysParse, s), a !== -1) ? a : (a = Ce.call(this._minWeekdaysParse, s), a !== -1 ? a : null)) : (a = Ce.call(this._minWeekdaysParse, s), a !== -1 || (a = Ce.call(this._weekdaysParse, s), a !== -1) ? a : (a = Ce.call(this._shortWeekdaysParse, s), a !== -1 ? a : null));
}
function Df(e, t, n) {
  var r, a, i;
  if (this._weekdaysParseExact)
    return Tf.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (a = mt([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (i = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!n && this._weekdaysParse[r].test(e))
      return r;
  }
}
function Nf(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = Pn(this, "Day");
  return e != null ? (e = yf(e, this.localeData()), this.add(e - t, "d")) : t;
}
function If(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Mf(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = bf(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Pf(e) {
  return this._weekdaysParseExact ? (oe(this, "_weekdaysRegex") || Ca.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (oe(this, "_weekdaysRegex") || (this._weekdaysRegex = xf), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Lf(e) {
  return this._weekdaysParseExact ? (oe(this, "_weekdaysRegex") || Ca.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (oe(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = wf), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Af(e) {
  return this._weekdaysParseExact ? (oe(this, "_weekdaysRegex") || Ca.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (oe(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Of), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Ca() {
  function e(m, _) {
    return _.length - m.length;
  }
  var t = [], n = [], r = [], a = [], i, s, l, o, u;
  for (i = 0; i < 7; i++)
    s = mt([2e3, 1]).day(i), l = Ct(this.weekdaysMin(s, "")), o = Ct(this.weekdaysShort(s, "")), u = Ct(this.weekdays(s, "")), t.push(l), n.push(o), r.push(u), a.push(l), a.push(o), a.push(u);
  t.sort(e), n.sort(e), r.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Ta() {
  return this.hours() % 12 || 12;
}
function Rf() {
  return this.hours() || 24;
}
K("H", ["HH", 2], 0, "hour");
K("h", ["hh", 2], 0, Ta);
K("k", ["kk", 2], 0, Rf);
K("hmm", 0, 0, function() {
  return "" + Ta.apply(this) + ft(this.minutes(), 2);
});
K("hmmss", 0, 0, function() {
  return "" + Ta.apply(this) + ft(this.minutes(), 2) + ft(this.seconds(), 2);
});
K("Hmm", 0, 0, function() {
  return "" + this.hours() + ft(this.minutes(), 2);
});
K("Hmmss", 0, 0, function() {
  return "" + this.hours() + ft(this.minutes(), 2) + ft(this.seconds(), 2);
});
function Js(e, t) {
  K(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Js("a", !0);
Js("A", !1);
function Qs(e, t) {
  return t._meridiemParse;
}
z("a", Qs);
z("A", Qs);
z("H", be, Oa);
z("h", be, vn);
z("k", be, vn);
z("HH", be, $e);
z("hh", be, $e);
z("kk", be, $e);
z("hmm", Vs);
z("hmmss", Bs);
z("Hmm", Vs);
z("Hmmss", Bs);
me(["H", "HH"], Ne);
me(["k", "kk"], function(e, t, n) {
  var r = ie(e);
  t[Ne] = r === 24 ? 0 : r;
});
me(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
me(["h", "hh"], function(e, t, n) {
  t[Ne] = ie(e), ne(n).bigHour = !0;
});
me("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[Ne] = ie(e.substr(0, r)), t[tt] = ie(e.substr(r)), ne(n).bigHour = !0;
});
me("hmmss", function(e, t, n) {
  var r = e.length - 4, a = e.length - 2;
  t[Ne] = ie(e.substr(0, r)), t[tt] = ie(e.substr(r, 2)), t[Et] = ie(e.substr(a)), ne(n).bigHour = !0;
});
me("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[Ne] = ie(e.substr(0, r)), t[tt] = ie(e.substr(r));
});
me("Hmmss", function(e, t, n) {
  var r = e.length - 4, a = e.length - 2;
  t[Ne] = ie(e.substr(0, r)), t[tt] = ie(e.substr(r, 2)), t[Et] = ie(e.substr(a));
});
function Ff(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Yf = /[ap]\.?m?\.?/i, Uf = kn("Hours", !0);
function Wf(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var el = {
  calendar: Cd,
  longDateFormat: Id,
  invalidDate: Pd,
  ordinal: Ad,
  dayOfMonthOrdinalParse: Rd,
  relativeTime: Yd,
  months: ef,
  monthsShort: js,
  week: hf,
  weekdays: vf,
  weekdaysMin: kf,
  weekdaysShort: Zs,
  meridiemParse: Yf
}, ve = {}, On = {}, Rn;
function Vf(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function wi(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Bf(e) {
  for (var t = 0, n, r, a, i; t < e.length; ) {
    for (i = wi(e[t]).split("-"), n = i.length, r = wi(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (a = Or(i.slice(0, n).join("-")), a)
        return a;
      if (r && r.length >= n && Vf(i, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return Rn;
}
function zf(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Or(e) {
  var t = null, n;
  if (ve[e] === void 0 && typeof module < "u" && module && module.exports && zf(e))
    try {
      t = Rn._abbr, n = require, n("./locale/" + e), Vt(t);
    } catch {
      ve[e] = null;
    }
  return ve[e];
}
function Vt(e, t) {
  var n;
  return e && (Ve(t) ? n = Mt(e) : n = Da(e, t), n ? Rn = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Rn._abbr;
}
function Da(e, t) {
  if (t !== null) {
    var n, r = el;
    if (t.abbr = e, ve[e] != null)
      Fs(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = ve[e]._config;
    else if (t.parentLocale != null)
      if (ve[t.parentLocale] != null)
        r = ve[t.parentLocale]._config;
      else if (n = Or(t.parentLocale), n != null)
        r = n._config;
      else
        return On[t.parentLocale] || (On[t.parentLocale] = []), On[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return ve[e] = new ba(Kr(r, t)), On[e] && On[e].forEach(function(a) {
      Da(a.name, a.config);
    }), Vt(e), ve[e];
  } else
    return delete ve[e], null;
}
function Hf(e, t) {
  if (t != null) {
    var n, r, a = el;
    ve[e] != null && ve[e].parentLocale != null ? ve[e].set(Kr(ve[e]._config, t)) : (r = Or(e), r != null && (a = r._config), t = Kr(a, t), r == null && (t.abbr = e), n = new ba(t), n.parentLocale = ve[e], ve[e] = n), Vt(e);
  } else
    ve[e] != null && (ve[e].parentLocale != null ? (ve[e] = ve[e].parentLocale, e === Vt() && Vt(e)) : ve[e] != null && delete ve[e]);
  return ve[e];
}
function Mt(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Rn;
  if (!nt(e)) {
    if (t = Or(e), t)
      return t;
    e = [e];
  }
  return Bf(e);
}
function jf() {
  return qr(ve);
}
function Na(e) {
  var t, n = e._a;
  return n && ne(e).overflow === -2 && (t = n[St] < 0 || n[St] > 11 ? St : n[ct] < 1 || n[ct] > Sa(n[Ae], n[St]) ? ct : n[Ne] < 0 || n[Ne] > 24 || n[Ne] === 24 && (n[tt] !== 0 || n[Et] !== 0 || n[Jt] !== 0) ? Ne : n[tt] < 0 || n[tt] > 59 ? tt : n[Et] < 0 || n[Et] > 59 ? Et : n[Jt] < 0 || n[Jt] > 999 ? Jt : -1, ne(e)._overflowDayOfYear && (t < Ae || t > ct) && (t = ct), ne(e)._overflowWeeks && t === -1 && (t = Kd), ne(e)._overflowWeekday && t === -1 && (t = qd), ne(e).overflow = t), e;
}
var Gf = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, $f = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Kf = /Z|[+-]\d\d(?::?\d\d)?/, Gn = [
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
], Pr = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], qf = /^\/?Date\((-?\d+)/i, Xf = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Zf = {
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
function tl(e) {
  var t, n, r = e._i, a = Gf.exec(r) || $f.exec(r), i, s, l, o, u = Gn.length, m = Pr.length;
  if (a) {
    for (ne(e).iso = !0, t = 0, n = u; t < n; t++)
      if (Gn[t][1].exec(a[1])) {
        s = Gn[t][0], i = Gn[t][2] !== !1;
        break;
      }
    if (s == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, n = m; t < n; t++)
        if (Pr[t][1].exec(a[3])) {
          l = (a[2] || " ") + Pr[t][0];
          break;
        }
      if (l == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && l != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (Kf.exec(a[4]))
        o = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = s + (l || "") + (o || ""), Ma(e);
  } else
    e._isValid = !1;
}
function Jf(e, t, n, r, a, i) {
  var s = [
    Qf(e),
    js.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return i && s.push(parseInt(i, 10)), s;
}
function Qf(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function e0(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function t0(e, t, n) {
  if (e) {
    var r = Zs.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return ne(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function n0(e, t, n) {
  if (e)
    return Zf[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), a = r % 100, i = (r - a) / 100;
  return i * 60 + a;
}
function nl(e) {
  var t = Xf.exec(e0(e._i)), n;
  if (t) {
    if (n = Jf(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !t0(t[1], n, e))
      return;
    e._a = n, e._tzm = n0(t[8], t[9], t[10]), e._d = Ln.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), ne(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function r0(e) {
  var t = qf.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (tl(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (nl(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : F.createFromInputFallback(e);
}
F.createFromInputFallback = Je(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function un(e, t, n) {
  return e ?? t ?? n;
}
function a0(e) {
  var t = new Date(F.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Ia(e) {
  var t, n, r = [], a, i, s;
  if (!e._d) {
    for (a = a0(e), e._w && e._a[ct] == null && e._a[St] == null && i0(e), e._dayOfYear != null && (s = un(e._a[Ae], a[Ae]), (e._dayOfYear > Tn(s) || e._dayOfYear === 0) && (ne(e)._overflowDayOfYear = !0), n = Ln(s, 0, e._dayOfYear), e._a[St] = n.getUTCMonth(), e._a[ct] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Ne] === 24 && e._a[tt] === 0 && e._a[Et] === 0 && e._a[Jt] === 0 && (e._nextDay = !0, e._a[Ne] = 0), e._d = (e._useUTC ? Ln : df).apply(
      null,
      r
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ne] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (ne(e).weekdayMismatch = !0);
  }
}
function i0(e) {
  var t, n, r, a, i, s, l, o, u;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, s = 4, n = un(
    t.GG,
    e._a[Ae],
    An(ye(), 1, 4).year
  ), r = un(t.W, 1), a = un(t.E, 1), (a < 1 || a > 7) && (o = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, u = An(ye(), i, s), n = un(t.gg, e._a[Ae], u.year), r = un(t.w, u.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (o = !0)) : t.e != null ? (a = t.e + i, (t.e < 0 || t.e > 6) && (o = !0)) : a = i), r < 1 || r > Tt(n, i, s) ? ne(e)._overflowWeeks = !0 : o != null ? ne(e)._overflowWeekday = !0 : (l = Xs(n, r, a, i, s), e._a[Ae] = l.year, e._dayOfYear = l.dayOfYear);
}
F.ISO_8601 = function() {
};
F.RFC_2822 = function() {
};
function Ma(e) {
  if (e._f === F.ISO_8601) {
    tl(e);
    return;
  }
  if (e._f === F.RFC_2822) {
    nl(e);
    return;
  }
  e._a = [], ne(e).empty = !0;
  var t = "" + e._i, n, r, a, i, s, l = t.length, o = 0, u, m;
  for (a = Ys(e._f, e._locale).match(va) || [], m = a.length, n = 0; n < m; n++)
    i = a[n], r = (t.match(jd(i, e)) || [])[0], r && (s = t.substr(0, t.indexOf(r)), s.length > 0 && ne(e).unusedInput.push(s), t = t.slice(
      t.indexOf(r) + r.length
    ), o += r.length), fn[i] ? (r ? ne(e).empty = !1 : ne(e).unusedTokens.push(i), $d(i, r, e)) : e._strict && !r && ne(e).unusedTokens.push(i);
  ne(e).charsLeftOver = l - o, t.length > 0 && ne(e).unusedInput.push(t), e._a[Ne] <= 12 && ne(e).bigHour === !0 && e._a[Ne] > 0 && (ne(e).bigHour = void 0), ne(e).parsedDateParts = e._a.slice(0), ne(e).meridiem = e._meridiem, e._a[Ne] = s0(
    e._locale,
    e._a[Ne],
    e._meridiem
  ), u = ne(e).era, u !== null && (e._a[Ae] = e._locale.erasConvertYear(u, e._a[Ae])), Ia(e), Na(e);
}
function s0(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function l0(e) {
  var t, n, r, a, i, s, l = !1, o = e._f.length;
  if (o === 0) {
    ne(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < o; a++)
    i = 0, s = !1, t = ya({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Ma(t), _a(t) && (s = !0), i += ne(t).charsLeftOver, i += ne(t).unusedTokens.length * 10, ne(t).score = i, l ? i < r && (r = i, n = t) : (r == null || i < r || s) && (r = i, n = t, s && (l = !0));
  Ft(e, n || t);
}
function o0(e) {
  if (!e._d) {
    var t = ka(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = As(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Ia(e);
  }
}
function u0(e) {
  var t = new Wn(Na(rl(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function rl(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || Mt(e._l), t === null || n === void 0 && t === "" ? _r({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), rt(t) ? new Wn(Na(t)) : (Un(t) ? e._d = t : nt(n) ? l0(e) : n ? Ma(e) : c0(e), _a(e) || (e._d = null), e));
}
function c0(e) {
  var t = e._i;
  Ve(t) ? e._d = new Date(F.now()) : Un(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? r0(e) : nt(t) ? (e._a = As(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Ia(e)) : Qt(t) ? o0(e) : Nt(t) ? e._d = new Date(t) : F.createFromInputFallback(e);
}
function al(e, t, n, r, a) {
  var i = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (Qt(e) && pa(e) || nt(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = a, i._l = n, i._i = e, i._f = t, i._strict = r, u0(i);
}
function ye(e, t, n, r) {
  return al(e, t, n, r, !1);
}
var d0 = Je(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = ye.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : _r();
  }
), f0 = Je(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = ye.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : _r();
  }
);
function il(e, t) {
  var n, r;
  if (t.length === 1 && nt(t[0]) && (t = t[0]), !t.length)
    return ye();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function h0() {
  var e = [].slice.call(arguments, 0);
  return il("isBefore", e);
}
function m0() {
  var e = [].slice.call(arguments, 0);
  return il("isAfter", e);
}
var g0 = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Sn = [
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
function p0(e) {
  var t, n = !1, r, a = Sn.length;
  for (t in e)
    if (oe(e, t) && !(Ce.call(Sn, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[Sn[r]]) {
      if (n)
        return !1;
      parseFloat(e[Sn[r]]) !== ie(e[Sn[r]]) && (n = !0);
    }
  return !0;
}
function _0() {
  return this._isValid;
}
function y0() {
  return it(NaN);
}
function Sr(e) {
  var t = ka(e), n = t.year || 0, r = t.quarter || 0, a = t.month || 0, i = t.week || t.isoWeek || 0, s = t.day || 0, l = t.hour || 0, o = t.minute || 0, u = t.second || 0, m = t.millisecond || 0;
  this._isValid = p0(t), this._milliseconds = +m + u * 1e3 + // 1000
  o * 6e4 + // 1000 * 60
  l * 1e3 * 60 * 60, this._days = +s + i * 7, this._months = +a + r * 3 + n * 12, this._data = {}, this._locale = Mt(), this._bubble();
}
function qn(e) {
  return e instanceof Sr;
}
function Zr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function b0(e, t, n) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), i = 0, s;
  for (s = 0; s < r; s++)
    (n && e[s] !== t[s] || !n && ie(e[s]) !== ie(t[s])) && i++;
  return i + a;
}
function sl(e, t) {
  K(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + ft(~~(n / 60), 2) + t + ft(~~n % 60, 2);
  });
}
sl("Z", ":");
sl("ZZ", "");
z("Z", xr);
z("ZZ", xr);
me(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = Pa(xr, e);
});
var v0 = /([\+\-]|\d\d)/gi;
function Pa(e, t) {
  var n = (t || "").match(e), r, a, i;
  return n === null ? null : (r = n[n.length - 1] || [], a = (r + "").match(v0) || ["-", 0, 0], i = +(a[1] * 60) + ie(a[2]), i === 0 ? 0 : a[0] === "+" ? i : -i);
}
function La(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (rt(e) || Un(e) ? e.valueOf() : ye(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), F.updateOffset(n, !1), n) : ye(e).local();
}
function Jr(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
F.updateOffset = function() {
};
function k0(e, t, n) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Pa(xr, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (a = Jr(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? ul(
      this,
      it(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, F.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : Jr(this);
}
function x0(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function w0(e) {
  return this.utcOffset(0, e);
}
function O0(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Jr(this), "m")), this;
}
function S0() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Pa(zd, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function E0(e) {
  return this.isValid() ? (e = e ? ye(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function C0() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function T0() {
  if (!Ve(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return ya(e, this), e = rl(e), e._a ? (t = e._isUTC ? mt(e._a) : ye(e._a), this._isDSTShifted = this.isValid() && b0(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function D0() {
  return this.isValid() ? !this._isUTC : !1;
}
function N0() {
  return this.isValid() ? this._isUTC : !1;
}
function ll() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var I0 = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, M0 = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function it(e, t) {
  var n = e, r = null, a, i, s;
  return qn(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Nt(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = I0.exec(e)) ? (a = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: ie(r[ct]) * a,
    h: ie(r[Ne]) * a,
    m: ie(r[tt]) * a,
    s: ie(r[Et]) * a,
    ms: ie(Zr(r[Jt] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = M0.exec(e)) ? (a = r[1] === "-" ? -1 : 1, n = {
    y: Xt(r[2], a),
    M: Xt(r[3], a),
    w: Xt(r[4], a),
    d: Xt(r[5], a),
    h: Xt(r[6], a),
    m: Xt(r[7], a),
    s: Xt(r[8], a)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (s = P0(
    ye(n.from),
    ye(n.to)
  ), n = {}, n.ms = s.milliseconds, n.M = s.months), i = new Sr(n), qn(e) && oe(e, "_locale") && (i._locale = e._locale), qn(e) && oe(e, "_isValid") && (i._isValid = e._isValid), i;
}
it.fn = Sr.prototype;
it.invalid = y0;
function Xt(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function Oi(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function P0(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = La(t, e), e.isBefore(t) ? n = Oi(e, t) : (n = Oi(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function ol(e, t) {
  return function(n, r) {
    var a, i;
    return r !== null && !isNaN(+r) && (Fs(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = n, n = r, r = i), a = it(n, r), ul(this, a, e), this;
  };
}
function ul(e, t, n, r) {
  var a = t._milliseconds, i = Zr(t._days), s = Zr(t._months);
  e.isValid() && (r = r ?? !0, s && $s(e, Pn(e, "Month") + s * n), i && Hs(e, "Date", Pn(e, "Date") + i * n), a && e._d.setTime(e._d.valueOf() + a * n), r && F.updateOffset(e, i || s));
}
var L0 = ol(1, "add"), A0 = ol(-1, "subtract");
function cl(e) {
  return typeof e == "string" || e instanceof String;
}
function R0(e) {
  return rt(e) || Un(e) || cl(e) || Nt(e) || Y0(e) || F0(e) || e === null || e === void 0;
}
function F0(e) {
  var t = Qt(e) && !pa(e), n = !1, r = [
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
  ], a, i, s = r.length;
  for (a = 0; a < s; a += 1)
    i = r[a], n = n || oe(e, i);
  return t && n;
}
function Y0(e) {
  var t = nt(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !Nt(r) && cl(e);
  }).length === 0), t && n;
}
function U0(e) {
  var t = Qt(e) && !pa(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, i;
  for (a = 0; a < r.length; a += 1)
    i = r[a], n = n || oe(e, i);
  return t && n;
}
function W0(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function V0(e, t) {
  arguments.length === 1 && (arguments[0] ? R0(arguments[0]) ? (e = arguments[0], t = void 0) : U0(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || ye(), r = La(n, this).startOf("day"), a = F.calendarFormat(this, r) || "sameElse", i = t && (gt(t[a]) ? t[a].call(this, n) : t[a]);
  return this.format(
    i || this.localeData().calendar(a, this, ye(n))
  );
}
function B0() {
  return new Wn(this);
}
function z0(e, t) {
  var n = rt(e) ? e : ye(e);
  return this.isValid() && n.isValid() ? (t = Qe(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function H0(e, t) {
  var n = rt(e) ? e : ye(e);
  return this.isValid() && n.isValid() ? (t = Qe(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function j0(e, t, n, r) {
  var a = rt(e) ? e : ye(e), i = rt(t) ? t : ye(t);
  return this.isValid() && a.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, n) : !this.isBefore(a, n)) && (r[1] === ")" ? this.isBefore(i, n) : !this.isAfter(i, n))) : !1;
}
function G0(e, t) {
  var n = rt(e) ? e : ye(e), r;
  return this.isValid() && n.isValid() ? (t = Qe(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function $0(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function K0(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function q0(e, t, n) {
  var r, a, i;
  if (!this.isValid())
    return NaN;
  if (r = La(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = Qe(t), t) {
    case "year":
      i = Xn(this, r) / 12;
      break;
    case "month":
      i = Xn(this, r);
      break;
    case "quarter":
      i = Xn(this, r) / 3;
      break;
    case "second":
      i = (this - r) / 1e3;
      break;
    case "minute":
      i = (this - r) / 6e4;
      break;
    case "hour":
      i = (this - r) / 36e5;
      break;
    case "day":
      i = (this - r - a) / 864e5;
      break;
    case "week":
      i = (this - r - a) / 6048e5;
      break;
    default:
      i = this - r;
  }
  return n ? i : Ze(i);
}
function Xn(e, t) {
  if (e.date() < t.date())
    return -Xn(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), a, i;
  return t - r < 0 ? (a = e.clone().add(n - 1, "months"), i = (t - r) / (r - a)) : (a = e.clone().add(n + 1, "months"), i = (t - r) / (a - r)), -(n + i) || 0;
}
F.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
F.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function X0() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Z0(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? Kn(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : gt(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Kn(n, "Z")) : Kn(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function J0() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, a, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(n + r + a + i);
}
function Q0(e) {
  e || (e = this.isUtc() ? F.defaultFormatUtc : F.defaultFormat);
  var t = Kn(this, e);
  return this.localeData().postformat(t);
}
function eh(e, t) {
  return this.isValid() && (rt(e) && e.isValid() || ye(e).isValid()) ? it({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function th(e) {
  return this.from(ye(), e);
}
function nh(e, t) {
  return this.isValid() && (rt(e) && e.isValid() || ye(e).isValid()) ? it({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function rh(e) {
  return this.to(ye(), e);
}
function dl(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Mt(e), t != null && (this._locale = t), this);
}
var fl = Je(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function hl() {
  return this._locale;
}
var rr = 1e3, hn = 60 * rr, ar = 60 * hn, ml = (365 * 400 + 97) * 24 * ar;
function mn(e, t) {
  return (e % t + t) % t;
}
function gl(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - ml : new Date(e, t, n).valueOf();
}
function pl(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - ml : Date.UTC(e, t, n);
}
function ah(e) {
  var t, n;
  if (e = Qe(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? pl : gl, e) {
    case "year":
      t = n(this.year(), 0, 1);
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = n(this.year(), this.month(), 1);
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= mn(
        t + (this._isUTC ? 0 : this.utcOffset() * hn),
        ar
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= mn(t, hn);
      break;
    case "second":
      t = this._d.valueOf(), t -= mn(t, rr);
      break;
  }
  return this._d.setTime(t), F.updateOffset(this, !0), this;
}
function ih(e) {
  var t, n;
  if (e = Qe(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? pl : gl, e) {
    case "year":
      t = n(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = n(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += ar - mn(
        t + (this._isUTC ? 0 : this.utcOffset() * hn),
        ar
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += hn - mn(t, hn) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += rr - mn(t, rr) - 1;
      break;
  }
  return this._d.setTime(t), F.updateOffset(this, !0), this;
}
function sh() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function lh() {
  return Math.floor(this.valueOf() / 1e3);
}
function oh() {
  return new Date(this.valueOf());
}
function uh() {
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
function ch() {
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
function dh() {
  return this.isValid() ? this.toISOString() : null;
}
function fh() {
  return _a(this);
}
function hh() {
  return Ft({}, ne(this));
}
function mh() {
  return ne(this).overflow;
}
function gh() {
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
z("N", Aa);
z("NN", Aa);
z("NNN", Aa);
z("NNNN", Eh);
z("NNNNN", Ch);
me(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var a = n._locale.erasParse(e, r, n._strict);
    a ? ne(n).era = a : ne(n).invalidEra = e;
  }
);
z("y", bn);
z("yy", bn);
z("yyy", bn);
z("yyyy", bn);
z("yo", Th);
me(["y", "yy", "yyy", "yyyy"], Ae);
me(["yo"], function(e, t, n, r) {
  var a;
  n._locale._eraYearOrdinalRegex && (a = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Ae] = n._locale.eraYearOrdinalParse(e, a) : t[Ae] = parseInt(e, 10);
});
function ph(e, t) {
  var n, r, a, i = this._eras || Mt("en")._eras;
  for (n = 0, r = i.length; n < r; ++n) {
    switch (typeof i[n].since) {
      case "string":
        a = F(i[n].since).startOf("day"), i[n].since = a.valueOf();
        break;
    }
    switch (typeof i[n].until) {
      case "undefined":
        i[n].until = 1 / 0;
        break;
      case "string":
        a = F(i[n].until).startOf("day").valueOf(), i[n].until = a.valueOf();
        break;
    }
  }
  return i;
}
function _h(e, t, n) {
  var r, a, i = this.eras(), s, l, o;
  for (e = e.toUpperCase(), r = 0, a = i.length; r < a; ++r)
    if (s = i[r].name.toUpperCase(), l = i[r].abbr.toUpperCase(), o = i[r].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (l === e)
            return i[r];
          break;
        case "NNNN":
          if (s === e)
            return i[r];
          break;
        case "NNNNN":
          if (o === e)
            return i[r];
          break;
      }
    else if ([s, l, o].indexOf(e) >= 0)
      return i[r];
}
function yh(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? F(e.since).year() : F(e.since).year() + (t - e.offset) * n;
}
function bh() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function vh() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function kh() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function xh() {
  var e, t, n, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - F(a[e].since).year()) * n + a[e].offset;
  return this.year();
}
function wh(e) {
  return oe(this, "_erasNameRegex") || Ra.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Oh(e) {
  return oe(this, "_erasAbbrRegex") || Ra.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Sh(e) {
  return oe(this, "_erasNarrowRegex") || Ra.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Aa(e, t) {
  return t.erasAbbrRegex(e);
}
function Eh(e, t) {
  return t.erasNameRegex(e);
}
function Ch(e, t) {
  return t.erasNarrowRegex(e);
}
function Th(e, t) {
  return t._eraYearOrdinalRegex || bn;
}
function Ra() {
  var e = [], t = [], n = [], r = [], a, i, s, l, o, u = this.eras();
  for (a = 0, i = u.length; a < i; ++a)
    s = Ct(u[a].name), l = Ct(u[a].abbr), o = Ct(u[a].narrow), t.push(s), e.push(l), n.push(o), r.push(s), r.push(l), r.push(o);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
K(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
K(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Er(e, t) {
  K(0, [e, e.length], 0, t);
}
Er("gggg", "weekYear");
Er("ggggg", "weekYear");
Er("GGGG", "isoWeekYear");
Er("GGGGG", "isoWeekYear");
z("G", kr);
z("g", kr);
z("GG", be, $e);
z("gg", be, $e);
z("GGGG", wa, xa);
z("gggg", wa, xa);
z("GGGGG", vr, yr);
z("ggggg", vr, yr);
Bn(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = ie(e);
  }
);
Bn(["gg", "GG"], function(e, t, n, r) {
  t[r] = F.parseTwoDigitYear(e);
});
function Dh(e) {
  return _l.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Nh(e) {
  return _l.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Ih() {
  return Tt(this.year(), 1, 4);
}
function Mh() {
  return Tt(this.isoWeekYear(), 1, 4);
}
function Ph() {
  var e = this.localeData()._week;
  return Tt(this.year(), e.dow, e.doy);
}
function Lh() {
  var e = this.localeData()._week;
  return Tt(this.weekYear(), e.dow, e.doy);
}
function _l(e, t, n, r, a) {
  var i;
  return e == null ? An(this, r, a).year : (i = Tt(e, r, a), t > i && (t = i), Ah.call(this, e, t, n, r, a));
}
function Ah(e, t, n, r, a) {
  var i = Xs(e, t, n, r, a), s = Ln(i.year, 0, i.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
}
K("Q", 0, "Qo", "quarter");
z("Q", Us);
me("Q", function(e, t) {
  t[St] = (ie(e) - 1) * 3;
});
function Rh(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
K("D", ["DD", 2], "Do", "date");
z("D", be, vn);
z("DD", be, $e);
z("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
me(["D", "DD"], ct);
me("Do", function(e, t) {
  t[ct] = ie(e.match(be)[0]);
});
var yl = kn("Date", !0);
K("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
z("DDD", br);
z("DDDD", Ws);
me(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = ie(e);
});
function Fh(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
K("m", ["mm", 2], 0, "minute");
z("m", be, Oa);
z("mm", be, $e);
me(["m", "mm"], tt);
var Yh = kn("Minutes", !1);
K("s", ["ss", 2], 0, "second");
z("s", be, Oa);
z("ss", be, $e);
me(["s", "ss"], Et);
var Uh = kn("Seconds", !1);
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
z("S", br, Us);
z("SS", br, $e);
z("SSS", br, Ws);
var Yt, bl;
for (Yt = "SSSS"; Yt.length <= 9; Yt += "S")
  z(Yt, bn);
function Wh(e, t) {
  t[Jt] = ie(("0." + e) * 1e3);
}
for (Yt = "S"; Yt.length <= 9; Yt += "S")
  me(Yt, Wh);
bl = kn("Milliseconds", !1);
K("z", 0, 0, "zoneAbbr");
K("zz", 0, 0, "zoneName");
function Vh() {
  return this._isUTC ? "UTC" : "";
}
function Bh() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var I = Wn.prototype;
I.add = L0;
I.calendar = V0;
I.clone = B0;
I.diff = q0;
I.endOf = ih;
I.format = Q0;
I.from = eh;
I.fromNow = th;
I.to = nh;
I.toNow = rh;
I.get = Zd;
I.invalidAt = mh;
I.isAfter = z0;
I.isBefore = H0;
I.isBetween = j0;
I.isSame = G0;
I.isSameOrAfter = $0;
I.isSameOrBefore = K0;
I.isValid = fh;
I.lang = fl;
I.locale = dl;
I.localeData = hl;
I.max = f0;
I.min = d0;
I.parsingFlags = hh;
I.set = Jd;
I.startOf = ah;
I.subtract = A0;
I.toArray = uh;
I.toObject = ch;
I.toDate = oh;
I.toISOString = Z0;
I.inspect = J0;
typeof Symbol < "u" && Symbol.for != null && (I[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
I.toJSON = dh;
I.toString = X0;
I.unix = lh;
I.valueOf = sh;
I.creationData = gh;
I.eraName = bh;
I.eraNarrow = vh;
I.eraAbbr = kh;
I.eraYear = xh;
I.year = zs;
I.isLeapYear = Xd;
I.weekYear = Dh;
I.isoWeekYear = Nh;
I.quarter = I.quarters = Rh;
I.month = Ks;
I.daysInMonth = of;
I.week = I.weeks = pf;
I.isoWeek = I.isoWeeks = _f;
I.weeksInYear = Ph;
I.weeksInWeekYear = Lh;
I.isoWeeksInYear = Ih;
I.isoWeeksInISOWeekYear = Mh;
I.date = yl;
I.day = I.days = Nf;
I.weekday = If;
I.isoWeekday = Mf;
I.dayOfYear = Fh;
I.hour = I.hours = Uf;
I.minute = I.minutes = Yh;
I.second = I.seconds = Uh;
I.millisecond = I.milliseconds = bl;
I.utcOffset = k0;
I.utc = w0;
I.local = O0;
I.parseZone = S0;
I.hasAlignedHourOffset = E0;
I.isDST = C0;
I.isLocal = D0;
I.isUtcOffset = N0;
I.isUtc = ll;
I.isUTC = ll;
I.zoneAbbr = Vh;
I.zoneName = Bh;
I.dates = Je(
  "dates accessor is deprecated. Use date instead.",
  yl
);
I.months = Je(
  "months accessor is deprecated. Use month instead",
  Ks
);
I.years = Je(
  "years accessor is deprecated. Use year instead",
  zs
);
I.zone = Je(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  x0
);
I.isDSTShifted = Je(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  T0
);
function zh(e) {
  return ye(e * 1e3);
}
function Hh() {
  return ye.apply(null, arguments).parseZone();
}
function vl(e) {
  return e;
}
var ue = ba.prototype;
ue.calendar = Td;
ue.longDateFormat = Md;
ue.invalidDate = Ld;
ue.ordinal = Fd;
ue.preparse = vl;
ue.postformat = vl;
ue.relativeTime = Ud;
ue.pastFuture = Wd;
ue.set = Ed;
ue.eras = ph;
ue.erasParse = _h;
ue.erasConvertYear = yh;
ue.erasAbbrRegex = Oh;
ue.erasNameRegex = wh;
ue.erasNarrowRegex = Sh;
ue.months = rf;
ue.monthsShort = af;
ue.monthsParse = lf;
ue.monthsRegex = cf;
ue.monthsShortRegex = uf;
ue.week = ff;
ue.firstDayOfYear = gf;
ue.firstDayOfWeek = mf;
ue.weekdays = Sf;
ue.weekdaysMin = Cf;
ue.weekdaysShort = Ef;
ue.weekdaysParse = Df;
ue.weekdaysRegex = Pf;
ue.weekdaysShortRegex = Lf;
ue.weekdaysMinRegex = Af;
ue.isPM = Ff;
ue.meridiem = Wf;
function ir(e, t, n, r) {
  var a = Mt(), i = mt().set(r, t);
  return a[n](i, e);
}
function kl(e, t, n) {
  if (Nt(e) && (t = e, e = void 0), e = e || "", t != null)
    return ir(e, t, n, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = ir(e, r, n, "month");
  return a;
}
function Fa(e, t, n, r) {
  typeof e == "boolean" ? (Nt(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, Nt(t) && (n = t, t = void 0), t = t || "");
  var a = Mt(), i = e ? a._week.dow : 0, s, l = [];
  if (n != null)
    return ir(t, (n + i) % 7, r, "day");
  for (s = 0; s < 7; s++)
    l[s] = ir(t, (s + i) % 7, r, "day");
  return l;
}
function jh(e, t) {
  return kl(e, t, "months");
}
function Gh(e, t) {
  return kl(e, t, "monthsShort");
}
function $h(e, t, n) {
  return Fa(e, t, n, "weekdays");
}
function Kh(e, t, n) {
  return Fa(e, t, n, "weekdaysShort");
}
function qh(e, t, n) {
  return Fa(e, t, n, "weekdaysMin");
}
Vt("en", {
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
    var t = e % 10, n = ie(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
F.lang = Je(
  "moment.lang is deprecated. Use moment.locale instead.",
  Vt
);
F.langData = Je(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Mt
);
var xt = Math.abs;
function Xh() {
  var e = this._data;
  return this._milliseconds = xt(this._milliseconds), this._days = xt(this._days), this._months = xt(this._months), e.milliseconds = xt(e.milliseconds), e.seconds = xt(e.seconds), e.minutes = xt(e.minutes), e.hours = xt(e.hours), e.months = xt(e.months), e.years = xt(e.years), this;
}
function xl(e, t, n, r) {
  var a = it(t, n);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function Zh(e, t) {
  return xl(this, e, t, 1);
}
function Jh(e, t) {
  return xl(this, e, t, -1);
}
function Si(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Qh() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, a, i, s, l, o;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Si(Qr(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, a = Ze(e / 1e3), r.seconds = a % 60, i = Ze(a / 60), r.minutes = i % 60, s = Ze(i / 60), r.hours = s % 24, t += Ze(s / 24), o = Ze(wl(t)), n += o, t -= Si(Qr(o)), l = Ze(n / 12), n %= 12, r.days = t, r.months = n, r.years = l, this;
}
function wl(e) {
  return e * 4800 / 146097;
}
function Qr(e) {
  return e * 146097 / 4800;
}
function em(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = Qe(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + wl(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(Qr(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Pt(e) {
  return function() {
    return this.as(e);
  };
}
var Ol = Pt("ms"), tm = Pt("s"), nm = Pt("m"), rm = Pt("h"), am = Pt("d"), im = Pt("w"), sm = Pt("M"), lm = Pt("Q"), om = Pt("y"), um = Ol;
function cm() {
  return it(this);
}
function dm(e) {
  return e = Qe(e), this.isValid() ? this[e + "s"]() : NaN;
}
function rn(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var fm = rn("milliseconds"), hm = rn("seconds"), mm = rn("minutes"), gm = rn("hours"), pm = rn("days"), _m = rn("months"), ym = rn("years");
function bm() {
  return Ze(this.days() / 7);
}
var wt = Math.round, dn = {
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
function vm(e, t, n, r, a) {
  return a.relativeTime(t || 1, !!n, e, r);
}
function km(e, t, n, r) {
  var a = it(e).abs(), i = wt(a.as("s")), s = wt(a.as("m")), l = wt(a.as("h")), o = wt(a.as("d")), u = wt(a.as("M")), m = wt(a.as("w")), _ = wt(a.as("y")), g = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || s <= 1 && ["m"] || s < n.m && ["mm", s] || l <= 1 && ["h"] || l < n.h && ["hh", l] || o <= 1 && ["d"] || o < n.d && ["dd", o];
  return n.w != null && (g = g || m <= 1 && ["w"] || m < n.w && ["ww", m]), g = g || u <= 1 && ["M"] || u < n.M && ["MM", u] || _ <= 1 && ["y"] || ["yy", _], g[2] = t, g[3] = +e > 0, g[4] = r, vm.apply(null, g);
}
function xm(e) {
  return e === void 0 ? wt : typeof e == "function" ? (wt = e, !0) : !1;
}
function wm(e, t) {
  return dn[e] === void 0 ? !1 : t === void 0 ? dn[e] : (dn[e] = t, e === "s" && (dn.ss = t - 1), !0);
}
function Om(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = dn, a, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, dn, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), i = km(this, !n, r, a), n && (i = a.pastFuture(+this, i)), a.postformat(i);
}
var Lr = Math.abs;
function ln(e) {
  return (e > 0) - (e < 0) || +e;
}
function Cr() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Lr(this._milliseconds) / 1e3, t = Lr(this._days), n = Lr(this._months), r, a, i, s, l = this.asSeconds(), o, u, m, _;
  return l ? (r = Ze(e / 60), a = Ze(r / 60), e %= 60, r %= 60, i = Ze(n / 12), n %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", o = l < 0 ? "-" : "", u = ln(this._months) !== ln(l) ? "-" : "", m = ln(this._days) !== ln(l) ? "-" : "", _ = ln(this._milliseconds) !== ln(l) ? "-" : "", o + "P" + (i ? u + i + "Y" : "") + (n ? u + n + "M" : "") + (t ? m + t + "D" : "") + (a || r || e ? "T" : "") + (a ? _ + a + "H" : "") + (r ? _ + r + "M" : "") + (e ? _ + s + "S" : "")) : "P0D";
}
var le = Sr.prototype;
le.isValid = _0;
le.abs = Xh;
le.add = Zh;
le.subtract = Jh;
le.as = em;
le.asMilliseconds = Ol;
le.asSeconds = tm;
le.asMinutes = nm;
le.asHours = rm;
le.asDays = am;
le.asWeeks = im;
le.asMonths = sm;
le.asQuarters = lm;
le.asYears = om;
le.valueOf = um;
le._bubble = Qh;
le.clone = cm;
le.get = dm;
le.milliseconds = fm;
le.seconds = hm;
le.minutes = mm;
le.hours = gm;
le.days = pm;
le.weeks = bm;
le.months = _m;
le.years = ym;
le.humanize = Om;
le.toISOString = Cr;
le.toString = Cr;
le.toJSON = Cr;
le.locale = dl;
le.localeData = hl;
le.toIsoString = Je(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Cr
);
le.lang = fl;
K("X", 0, 0, "unix");
K("x", 0, 0, "valueOf");
z("x", kr);
z("X", Hd);
me("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
me("x", function(e, t, n) {
  n._d = new Date(ie(e));
});
//! moment.js
F.version = "2.30.1";
Od(ye);
F.fn = I;
F.min = h0;
F.max = m0;
F.now = g0;
F.utc = mt;
F.unix = zh;
F.months = jh;
F.isDate = Un;
F.locale = Vt;
F.invalid = _r;
F.duration = it;
F.isMoment = rt;
F.weekdays = $h;
F.parseZone = Hh;
F.localeData = Mt;
F.isDuration = qn;
F.monthsShort = Gh;
F.weekdaysMin = qh;
F.defineLocale = Da;
F.updateLocale = Hf;
F.locales = jf;
F.weekdaysShort = Kh;
F.normalizeUnits = Qe;
F.relativeTimeRounding = xm;
F.relativeTimeThreshold = wm;
F.calendarFormat = W0;
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
const Sm = {
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
      actionIcons: Ku,
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
    this.initFormat(), F.locale(Zt);
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
    PawIcon: ht
  },
  setup() {
    const { t: e } = yn({
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
      const n = this.number(e);
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
          return isNaN(e) || isNaN(parseFloat(e)) ? (this.setMessage(this.t("format.numberError"), !1), this.formatError = !0, e) : new Intl.NumberFormat(Zt, {
            minimumFractionDigits: this.minDecimals,
            maximumFractionDigits: this.maxDecimals
          }).format(e);
        case "card":
          return n.length < bi ? (this.setMessage(this.t("format.creditCardDigitError", { minDigits: `<b>${bi}</b>` }), !1), this.formatError = !0, e) : this.formatCard(n, t);
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
    formatDate(e, t, n) {
      switch (n) {
        case "time":
          this.unit.label = "24h", this.unit.icon = "schedule";
          break;
        case "date":
          break;
        case "datetime":
          this.unit.label = this.unitLabel ?? "24h", this.unit.icon = this.unitIcon ?? "calendar_today";
          break;
      }
      return e.locale(Zt).format(t);
    },
    parseDate(e, t) {
      if (!e || !t)
        return e;
      let n = -1, r = null, a = null;
      for (const s in Gr)
        for (const l in qt[t].formats) {
          if (qt[t].formats[l] === "utc")
            continue;
          const o = F(e, qt[t].formats[l], Gr[s], !0), u = o.parsingFlags();
          if (o.isValid() && !u.weekdayMismatch)
            return this.formatDate(o, qt[t].format, t);
          const m = u.unusedInput.length + u.unusedTokens.length;
          (m < n || n === -1) && (n = m, r = qt[t].formats[l], a = u);
        }
      if (t === "datetime" && qt[t].formats.includes("utc")) {
        const s = F.utc(e, !0), l = s.parsingFlags();
        if (s.isValid())
          return this.formatDate(s, qt[t].format, t);
        const o = l.unusedInput.length + l.unusedTokens.length;
        l.overflow >= 0 && (o < n || n === -1) && (n = o, r = "UTC → YYYY-MM-DDTkk:mm:ss+ZZ", a = l);
      }
      let i = null;
      return a.overflow >= 0 && a.parsedDateParts.length > a.overflow - 1 && (i = a.parsedDateParts[a.overflow]), this.setMessage(this.t("format.datetimeError", {
        momentType: `<b>${t.charAt(0).toUpperCase() + t.slice(1)}</b>`,
        candidate: `<b>${r}</b>`,
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
      const n = wd(e)[0];
      if (!n)
        return this.setMessage(this.t("format.creditCardInvalid"), !1), this.formatError = !0, e;
      let r = e.toString().split("");
      return n.gaps.forEach((i, s) => r.splice(i + s, 0, " ")), t ? r.join("") : `${(a = n.niceType) == null ? void 0 : a.toUpperCase()} ${this.show ? r.join("") : `•••• ${e.slice(-4)}`}`;
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
      const n = /^(\+)((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)/ig, r = /^(\+)((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(0)*(\d{2,3})(\d{3})(\d{2})(\d{2})/ig, a = t.plus ? "+" : "", i = t.brackets ? { l: "(", r: ")" } : { l: "", r: "" }, s = t.space ? " " : "", l = t.dash ? "-" : "", o = this.standard(e), u = r.exec(o), m = n.exec(o);
      if (!u && m)
        return this.setMessage(this.t("format.phoneTooShort"), !1), this.formatError = !0, e;
      if (!u && !m)
        return this.setMessage(this.t("format.phonePrefixError"), !1), this.formatError = !0, e;
      const _ = t.localPrefix && u[3] ? `${i.l}${u[3]}${i.r}` : "", g = t.areaCode ? u[2] : "";
      return `${t.areaCode ? a : ""}${g}${t.areaCode ? s : ""}${_}${u[4]}${s}${u[5]}${s}${l}${t.dash ? s : ""}${u[6]}${s}${l}${t.dash ? s : ""}${u[7]}`;
    }
  }
}, Em = { class: "flex flex-col gap-1" }, Cm = {
  key: 0,
  class: "flex flex-row"
}, Tm = {
  key: 0,
  class: "prose-xs element-text text-xs uppercase text-gray-500 transition"
}, Dm = ["title"], Nm = ["textContent"], Im = {
  key: 0,
  class: "mr-1 text-xs text-gray-400"
}, Mm = ["innerHTML"], Pm = ["innerHTML"];
function Lm(e, t, n, r, a, i) {
  const s = we("PawIcon");
  return y(), C("div", Em, [
    n.label || n.info ? (y(), C("div", Cm, [
      n.label ? (y(), C("label", Tm, Z(n.label), 1)) : A("", !0),
      n.info ? (y(), C("span", {
        key: 1,
        class: "ml-auto prose-xs element-text uppercase text-gray-500 cursor-help transition",
        title: n.title
      }, Z(n.info), 9, Dm)) : A("", !0)
    ])) : A("", !0),
    W("div", {
      class: N(["flex flex-row items-center justify-between text-gray-800 dark:text-white transition", {
        "border-t border-gray-200 dark:border-gray-600": n.label
      }])
    }, [
      W("div", {
        class: N(["flex items-center", a.formatting == "icon" && a.fieldValueIconPosition == "right" ? "flex-row-reverse" : ""])
      }, [
        a.formatting == "icon" && n.valueIcon ? (y(), se(s, {
          key: 0,
          class: N(n.valueColorClass ?? "text-gray-400"),
          size: "sm"
        }, {
          default: te(() => [
            re(Z(i.valueIconName), 1)
          ]),
          _: 1
        }, 8, ["class"])) : A("", !0),
        W("span", {
          class: N(["my-1.5", {
            "prose-md": n.size === "md",
            "prose-sm": n.size === "sm",
            "prose-xs": n.size === "xs",
            "whitespace-pre-wrap": n.format === "multiline",
            truncate: n.format !== "multiline",
            "text-action-500 dark:text-action-400 hover:text-action-300 dark:hover:text-action-600 cursor-pointer transition": n.action && !a.formatError,
            [n.valueColorClass]: n.valueColorClass
          }]),
          onClick: t[0] || (t[0] = (...l) => i.click && i.click(...l)),
          textContent: Z(this.inputValue(!1))
        }, null, 10, Nm)
      ], 2),
      W("div", {
        class: N(["flex flex-row shrink-0 items-center gap-1 py-1 ml-3", {
          "self-start": n.unitPosition === "top",
          "self-center": n.unitPosition === "center",
          "self-end": n.unitPosition === "bottom"
        }])
      }, [
        a.unit.label ? (y(), C("span", Im, Z(a.unit.label), 1)) : A("", !0),
        a.unit.icon ? (y(), se(s, {
          key: 1,
          size: "sm",
          class: "text-gray-400",
          outlined: a.unit.outlined === !0
        }, {
          default: te(() => [
            re(Z(a.unit.icon), 1)
          ]),
          _: 1
        }, 8, ["outlined"])) : A("", !0),
        n.copy && !a.formatError ? (y(), se(s, {
          key: 2,
          size: "sm",
          onClick: i.copyToClipboard,
          class: "text-gray-400 cursor-pointer"
        }, {
          default: te(() => [
            re(" copy_all ")
          ]),
          _: 1
        }, 8, ["onClick"])) : A("", !0),
        n.editAction && !a.formatError ? (y(), se(s, {
          key: 3,
          size: "sm",
          onClick: i.editTrigger,
          class: "text-gray-400 cursor-pointer"
        }, {
          default: te(() => [
            re(" edit ")
          ]),
          _: 1
        }, 8, ["onClick"])) : A("", !0),
        n.deleteAction && !a.formatError ? (y(), se(s, {
          key: 4,
          size: "sm",
          onClick: i.deleteTrigger,
          class: "text-gray-400 cursor-pointer"
        }, {
          default: te(() => [
            re(" delete ")
          ]),
          _: 1
        }, 8, ["onClick"])) : A("", !0),
        n.secret && !a.formatError ? (y(), se(s, {
          key: 5,
          size: "sm",
          class: "text-gray-400 cursor-pointer",
          onClick: i.toggleSecret
        }, {
          default: te(() => [
            re(Z(a.show ? "visibility_off" : "visibility"), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : A("", !0),
        n.action && !a.formatError ? (y(), se(s, {
          key: 6,
          size: "sm",
          onClick: i.click,
          class: "text-action-500 dark:text-action-400 hover:text-action-300 dark:hover:text-action-600 cursor-pointer transition"
        }, {
          default: te(() => [
            re(Z(a.actionIcons[n.action]), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : A("", !0)
      ], 2)
    ], 2),
    a.message && a.success ? (y(), C("div", {
      key: 1,
      class: "prose-xs element-text italic text-success-500 dark:text-success-400 transition",
      innerHTML: a.message
    }, null, 8, Mm)) : A("", !0),
    a.message && !a.success && !n.hideErrors ? (y(), C("div", {
      key: 2,
      class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition",
      innerHTML: a.message
    }, null, 8, Pm)) : A("", !0)
  ]);
}
const Am = /* @__PURE__ */ Re(Sm, [["render", Lm]]), Rm = 8, Fm = 5, Ym = {
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
    PawCheckbox: Ds,
    PawLazyField: Am,
    PawLink: Ns,
    PawIcon: ht,
    PawLabel: id,
    PawButton: fr,
    PawDropdown: ed,
    PawCrazyInput: Xc,
    PawRadio: Is
  },
  setup() {
    const { t: e } = yn({
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
      this.meta.pagination >= this.items.length ? t = this.items.slice(0, e) : t = this.items.slice(
        this.meta.firstItem - 1,
        Math.max(this.meta.firstItem - 1 + this.meta.pagination, e)
      );
      const n = this.informal ? Fm : Rm;
      return this.loading && t.length < n ? t.concat(this.fillItems(n - t.length)) : t;
    },
    detailsText() {
      return this.informal ? "" : this.t("table.details");
    },
    meta() {
      let e = {};
      return e.totalRecords = Math.max(
        this.data.meta.records,
        this.items.length
      ), e.pagination = (this.data.meta.pagination < 1 ? 1 : this.data.meta.pagination) || 10, e.totalPages = Math.ceil(e.totalRecords / e.pagination) || 1, e.currentPage = Math.min(Math.max(this.data.meta.page, 1), e.totalPages) || 1, e.firstItem = e.pagination * (e.currentPage - 1) + 1, e.lastItem = Math.min(e.firstItem + e.pagination - 1, e.totalRecords) || this.items.length, e;
    },
    footerText() {
      return this.error ? this.error : this.loading ? this.t("table.loading") : this.data.meta.records ? this.t("table.showRecordsInterval", {
        first: new Intl.NumberFormat(Zt).format(
          this.meta.firstItem
        ),
        last: new Intl.NumberFormat(Zt).format(
          this.meta.lastItem
        ),
        total: new Intl.NumberFormat(Zt).format(
          this.meta.totalRecords
        )
      }) : this.t("table.showRecords", {
        total: new Intl.NumberFormat(Zt).format(
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
      const n = this.items.find((a) => a.selected);
      n && (n.selected = !1);
      const r = this.items.find((a) => a.id === t);
      r && (r.selected = !0), this.$emit("selected", t, e);
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
        const n = this.$refs.actionDropdown, r = e.target.getBoundingClientRect(), a = this.$refs.table.getBoundingClientRect(), i = this.$refs.tableHeader.getBoundingClientRect(), s = this.informal ? 30 : 10, l = r.top - a.top + i.height + r.height + s;
        n.style.top = `${l}px`, this.dropdownOpen = !0, this.rowIdentifierProxy = t, this.clickOutsideElement(this.$refs.actionDropdown, () => {
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
      for (let r in this.headings)
        t[this.headings[r].name] = "1";
      let n = [];
      for (let r = 0; r < e; r++)
        n.push(t);
      return n;
    },
    clickOutsideElement(e, t = () => {
    }, n = document.createElement(null), r = "mouseup") {
      document.addEventListener(r, function a(i) {
        if (!(i.target instanceof Element))
          return document.removeEventListener(r, a), !1;
        e !== i.target && !Array.from(n).includes(i.target) && t(i) !== !1 && document.removeEventListener(r, a);
      });
    },
    hasStickyDetails() {
      return this.ctaIcon && this.ctaIcon !== "";
    }
  }
}, Um = {
  key: 0,
  class: "text-lg font-bold text-gray-500 dark:text-white whitespace-nowrap"
}, Wm = {
  key: 0,
  class: "md:flex flex-row gap-3 hidden"
}, Vm = { class: "flex flex-row transition-all" }, Bm = { class: "flex flex-row w-full" }, zm = {
  key: 0,
  class: "flex justify-between w-full items-center sm:w-fit"
}, Hm = { class: "block sm:hidden" }, jm = {
  key: 0,
  class: "text-lg font-bold text-gray-500 dark:text-white whitespace-nowrap"
}, Gm = /* @__PURE__ */ W("col", { class: "w-8" }, null, -1), $m = ["onClick"], Km = {
  key: 1,
  class: "z-50"
}, qm = /* @__PURE__ */ W("div", { class: "w-8 h-2 bg-action-300 dark:bg-action-600 rounded-md" }, null, -1), Xm = {
  key: 3,
  class: "border-r border-t border-b border-gray-200 dark:border-gray-700 rounded-r-lg absolute top-2 right-4 bottom-2 -left-12 h-12 z-10 group-hover:shadow-card dark:group-hover:shadow-card-dark transition-all"
}, Zm = {
  ref: "actionDropdown",
  class: "absolute max-w-xs w-fit min-w-[120px] rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 my-2 z-50 right-0 mr-6"
}, Jm = { class: "flex flex-col" }, Qm = ["onClick"], eg = { class: "" }, tg = { class: "flex flex-col text-left opacity-[.999] overflow-hidden rounded-md" }, ng = ["onClick"], rg = ["innerHTML"], ag = { class: "flex flex-row items-center" };
function ig(e, t, n, r, a, i) {
  const s = we("PawButton"), l = we("PawDropdown"), o = we("PawCrazyInput"), u = we("PawLink"), m = we("PawCheckbox"), _ = we("PawRadio"), g = we("PawLazyField"), O = we("PawLabel"), w = we("PawIcon");
  return y(), C("div", {
    class: N(["flex flex-col relative transition z-0", {
      "pointer-events-none": n.loading
    }])
  }, [
    W("div", {
      class: N(["overflow-y-auto max-h-full transition", {
        "overflow-hidden": n.loading,
        "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-t border-l border-r rounded-t-xl translate-z-0": !n.informal,
        "px-4": n.informal
      }])
    }, [
      n.buttons.length || n.title || n.searchDropdownItems.length ? (y(), C("div", {
        key: 0,
        ref: "tableHeader",
        class: N([{
          "px-0 mb-3 sm:mb-5": n.informal,
          "px-6": !n.informal,
          "flex-wrap sm:!h-fit": n.searchDropdownItems.length > 0
        }, "sticky inset-0 flex flex-row justify-between items-center mt-3 h-fit sm:h-8 z-50 gap-3"])
      }, [
        W("div", {
          class: N({ "hidden sm:block": n.searchDropdownItems.length })
        }, [
          n.title ? (y(), C("h1", Um, Z(n.title), 1)) : A("", !0)
        ], 2),
        Object.keys(n.buttons).length <= 4 ? (y(), C("div", Wm, [
          W("div", Vm, [
            Ut(Se(s, {
              disabled: n.loading,
              outlined: "",
              size: "md",
              title: "Search",
              icon: "search",
              onClicked: t[0] || (t[0] = (f) => i.openSearchbar())
            }, null, 8, ["disabled"]), [
              [
                Cn,
                n.searchDropdownItems.length ? !1 : !a.searchbarOpened && n.searchbar
              ]
            ]),
            n.searchDropdownItems.length ? (y(), se(l, {
              key: 0,
              outlined: "",
              size: "md",
              icon: "expand_more",
              class: "h-full",
              textSlot: n.searchDropdownText,
              items: n.searchDropdownItems,
              buttonRoundedClasses: i.computedButtonRoundedClasses,
              onSelected: t[1] || (t[1] = (f) => this.$emit("searchDropdownItemClicked", f))
            }, null, 8, ["textSlot", "items", "buttonRoundedClasses"])) : A("", !0),
            Se(o, {
              ref: "searchbar",
              value: a.searchValue,
              placeholder: "Search",
              title: "Extended information about this field",
              contextIcon: "search",
              class: N([
                "max-h-8",
                a.searchbarOpened && !n.searchDropdownItems.length ? "w-full" : n.searchDropdownItems.length ? "w-full rounded-l-none" : "w-0 overflow-hidden"
              ]),
              inputRoundedClasses: i.computedInputRoundedClasses,
              inputMinWidthClasses: "min-w-[30ch]",
              flexDir: i.computedFlexDirectionProperty,
              onTyped: t[2] || (t[2] = (f) => i.searchTyped(f)),
              onKeyDownEnter: t[3] || (t[3] = (f) => this.$emit("keyDownEnter"))
            }, {
              default: te(() => [
                re(Z(a.searchValue), 1)
              ]),
              _: 1
            }, 8, ["value", "inputRoundedClasses", "flexDir", "class"])
          ]),
          (y(!0), C(Oe, null, Ye(n.buttons, (f) => (y(), se(s, {
            key: f.id,
            onClicked: (p) => this.$emit("buttonClicked", f.identifier),
            disabled: n.loading,
            outlined: f.outlined,
            size: "md",
            title: f.title,
            icon: f.icon
          }, {
            default: te(() => [
              re(Z(f.textSlot), 1)
            ]),
            _: 2
          }, 1032, ["onClicked", "disabled", "outlined", "title", "icon"]))), 128))
        ])) : A("", !0),
        W("div", {
          class: N(["flex flex-row gap-3 md:hidden", [
            n.buttons.length >= 4 ? "!flex" : "",
            n.searchDropdownItems.length ? "flex-col-reverse items-end sm:flex-row w-full" : ""
          ]])
        }, [
          W("div", Bm, [
            Ut(Se(s, {
              disabled: n.loading,
              outlined: "",
              size: "md",
              title: "Search",
              icon: "search",
              onClicked: t[4] || (t[4] = (f) => i.openSearchbar("mobile"))
            }, null, 8, ["disabled"]), [
              [
                Cn,
                n.searchDropdownItems.length ? !1 : !a.searchbarOpened && n.searchbar
              ]
            ]),
            n.searchDropdownItems.length ? (y(), se(l, {
              key: 0,
              outlined: "",
              size: "md",
              icon: "expand_more",
              class: "h-full",
              textSlot: n.searchDropdownText,
              items: n.searchDropdownItems,
              buttonRoundedClasses: i.computedButtonRoundedClasses,
              onSelected: t[5] || (t[5] = (f) => this.$emit("searchDropdownItemClicked", f))
            }, null, 8, ["textSlot", "items", "buttonRoundedClasses"])) : A("", !0),
            Se(o, {
              ref: "searchbarMobile",
              value: a.searchValue,
              placeholder: "Search",
              title: "Extended information about this field",
              contextIcon: "search",
              class: N([
                "max-h-8",
                a.searchbarOpened && !n.searchDropdownItems.length ? "w-full" : n.searchDropdownItems.length ? "w-full rounded-l-none" : "w-0 overflow-hidden"
              ]),
              onTyped: t[6] || (t[6] = (f) => i.searchTyped(f)),
              inputRoundedClasses: i.computedInputRoundedClasses,
              fullwidth: !0,
              flexDir: i.computedFlexDirectionProperty,
              onKeyDownEnter: t[7] || (t[7] = (f) => this.$emit("keyDownEnter"))
            }, {
              default: te(() => [
                re(Z(a.searchValue), 1)
              ]),
              _: 1
            }, 8, ["value", "class", "inputRoundedClasses", "flexDir"])
          ]),
          n.searchDropdownItems.length ? (y(), C("div", zm, [
            W("div", Hm, [
              n.title ? (y(), C("h1", jm, Z(n.title), 1)) : A("", !0)
            ]),
            n.buttons && n.buttons.length ? (y(), se(l, {
              key: 0,
              class: N(a.searchbarOpened ? "hidden" : ""),
              outlined: "",
              size: "md",
              icon: "expand_more",
              textSlot: "Options",
              items: n.buttons,
              onSelected: t[8] || (t[8] = (f) => this.$emit("buttonClicked", f))
            }, null, 8, ["class", "items"])) : A("", !0)
          ])) : n.buttons && n.buttons.length ? (y(), se(l, {
            key: 1,
            class: N(a.searchbarOpened ? "hidden" : ""),
            outlined: "",
            size: "md",
            icon: "expand_more",
            textSlot: "Options",
            items: n.buttons,
            onSelected: t[9] || (t[9] = (f) => this.$emit("buttonClicked", f))
          }, null, 8, ["class", "items"])) : A("", !0)
        ], 2)
      ], 2)) : A("", !0),
      (!n.data || Object.keys(n.data).length === 0 || Object.keys(n.data.items).length === 0) && !n.loading ? (y(), C("div", {
        key: 1,
        class: N(["flex items-center w-auto p-4 rounded-lg transition", [
          a.hasSlot ? "" : "hidden",
          n.itemsNotFoundHasBgColor ? `bg-${n.itemsNotFoundBgClass}-100 dark:bg-${n.itemsNotFoundBgClass}-800 text-${n.itemsNotFoundTextColorClass}-800 dark:text-${n.itemsNotFoundTextColorClass}-100` : "text-white",
          n.informal ? "mx-auto mb-3 sm:mb-5" : "m-6"
        ]])
      }, [
        at(e.$slots, "default")
      ], 2)) : (y(), C("table", {
        key: 2,
        ref: "table",
        class: N(["relative w-full formal-table fill-available", {
          "border-collapse": !n.informal,
          "border-separate table-informal": n.informal
        }])
      }, [
        W("colgroup", null, [
          n.informal ? A("", !0) : (y(), C("col", {
            key: 0,
            class: N({
              "w-8": i.activeHeadings.length > 0,
              "w-auto": i.activeHeadings.length === 0
            })
          }, null, 2)),
          (y(!0), C(Oe, null, Ye(i.activeHeadings, (f, p) => (y(), C("col", {
            key: p,
            class: N(["w-auto", {
              "min-w-[160px]": !n.informal,
              "min-w-[120px]": n.informal
            }])
          }, null, 2))), 128)),
          Gm
        ]),
        W("thead", null, [
          W("tr", {
            class: N([{
              "bg-white dark:bg-gray-800 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition": !n.informal
            }, "sticky z-20 top-0 transition-all"])
          }, [
            n.informal ? A("", !0) : (y(), C("th", {
              key: 0,
              class: N([{
                "pt-3 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full": !n.informal
              }, "sticky z-10 pl-6 pb-0 pr-3 left-0 text-left bg-white dark:bg-gray-800 transition-all"])
            }, null, 2)),
            (y(!0), C(Oe, null, Ye(i.activeHeadings, (f, p) => (y(), C("th", {
              key: f.id,
              class: N(["pb-0", [
                p > 0 ? "pl-7" : "",
                p === 0 && n.informal ? "pl-3" : "",
                f.align === "left" || !f.align ? "text-left" : "",
                f.align === "right" ? "text-right" : "",
                f.align === "center" ? "text-center" : "",
                n.informal ? `${n.bgLight} dark:${n.bgDark} transition` : "pt-3 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition-all"
              ]])
            }, [
              f.sort == "disabled" ? (y(), se(u, {
                key: 0,
                class: "inline-flex uppercase",
                size: "sm",
                align: "right",
                compact: ""
              }, {
                default: te(() => [
                  re(Z(i.headingTitle(f.title || f.name)), 1)
                ]),
                _: 2
              }, 1024)) : (y(), se(u, {
                key: 1,
                class: "inline-flex uppercase",
                size: "sm",
                align: "right",
                compact: "",
                onClicked: (d) => i.sort(f),
                color: !f.title && !f.name ? "danger" : f.sort ? "action" : null,
                icon: f.sort === "asc" || !f.sort ? "keyboard_arrow_up" : "keyboard_arrow_down"
              }, {
                default: te(() => [
                  re(Z(i.headingTitle(f.title || f.name)), 1)
                ]),
                _: 2
              }, 1032, ["onClicked", "color", "icon"]))
            ], 2))), 128)),
            W("th", {
              class: N([[
                n.informal ? `pr-1 ${n.bgLight} dark:${n.bgDark} transition` : "pr-6 bg-white dark:bg-gray-800 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition-all"
              ], "sticky z-10 pl-3 pb-0 right-0 text-right transition-all"])
            }, [
              Se(u, {
                size: "md",
                icon: "playlist_add",
                class: N({
                  "ml-auto pt-3": !n.informal
                }),
                onClicked: t[10] || (t[10] = (f) => a.settingsOpened = !a.settingsOpened)
              }, null, 8, ["class"]),
              n.informal ? (y(), C("div", {
                key: 0,
                class: N([`${n.bgLight} dark:${n.bgDark}`, "absolute top-0 bottom-0 left-0 -right-4 -z-10 transition"])
              }, null, 2)) : A("", !0)
            ], 2)
          ], 2)
        ]),
        W("tbody", null, [
          (y(!0), C(Oe, null, Ye(i.currentItems, (f, p) => (y(), C("tr", {
            key: f.id,
            class: N(["relative transition-all group", {
              "border-b border-gray-200 dark:border-gray-700": p < i.currentItems.length - 1 && !n.informal,
              "animate-loading": n.loading,
              "h-8 hover:bg-gray-100 dark:hover:bg-gray-800": !n.informal,
              "h-12 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg": n.informal
            }])
          }, [
            n.informal ? A("", !0) : (y(), C("td", {
              key: 0,
              class: N(["sticky z-10 pl-6 pr-3 left-0 bg-white dark:bg-gray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 overflow-hidden transition", {
                "py-0": !n.informal,
                "pt-2 pb-2": n.informal
              }])
            }, [
              n.selectionEnabled && n.multiselect ? (y(), se(m, {
                key: 0,
                size: "md",
                onChanged: (d) => i.select(d, f.id)
              }, null, 8, ["onChanged"])) : A("", !0),
              n.selectionEnabled && !n.multiselect ? (y(), se(_, {
                key: 1,
                size: "lg",
                checked: f.selected,
                onChanged: (d) => i.selectRadio(d, f.id)
              }, null, 8, ["checked", "onChanged"])) : A("", !0)
            ], 2)),
            (y(!0), C(Oe, null, Ye(i.activeHeadings, (d, v) => (y(), C("td", {
              key: d.name,
              class: N([[
                v > 0 ? "pl-7" : "",
                v === 0 && n.informal ? "pl-3 rounded-l-lg border-l overflow-hidden before:opacity-0 group-hover:before:opacity-100 before:content-[''] before:absolute before:mt-[-9.75px] before:left-0 before:right-0 before:h-12 before:overflow-clip group-hover:before:shadow-card dark:group-hover:before:shadow-card-dark before:rounded-lg before:transition" : "",
                v === i.activeHeadings.length - 1 ? "pr-2" : "",
                d.align === "left" || !d.align ? "text-left" : "",
                d.align === "right" ? "text-right" : "",
                d.align === "center" ? "text-center" : "",
                n.informal ? "pt-2 pb-2 border-t border-b border-gray-200 dark:border-gray-700 transition" : "py-0",
                n.isRowClickable && !d.action ? "cursor-pointer" : ""
              ], "align-middle"]),
              onClick: (E) => n.isRowClickable && !d.action ? i.click(f.id, "row") : ""
            }, [
              !n.loading && d.format !== "label" ? (y(), se(g, {
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
                default: te(() => [
                  re(Z(i.cellValue(
                    d.action === "link" ? f[d.name].text : d.format == "icon" ? f[d.name].value : f[d.name],
                    d.name
                  )), 1)
                ]),
                _: 2
              }, 1032, ["action", "copy", "link", "insecure", "secret", "format", "unit-label", "unit-icon", "unit-icon-outlined", "min-decimals", "max-decimals", "valueIcon", "valueIconPosition", "valueColorClass"])) : A("", !0),
              !n.loading && d.format === "label" ? (y(), se(O, {
                key: 1,
                class: "inline-flex my-0.75",
                size: "sm",
                color: f[d.name].color,
                disabled: f[d.name].disabled
              }, {
                default: te(() => [
                  re(Z(i.cellValue(f[d.name].text, d.name)), 1)
                ]),
                _: 2
              }, 1032, ["color", "disabled"])) : A("", !0),
              n.loading ? (y(), C("div", {
                key: 2,
                class: N(["inline-block bg-gray-400 align-middle", {
                  "w-24 h-2 rounded-md": d.format !== "label",
                  "w-14 h-6 rounded-full": d.format === "label"
                }])
              }, null, 2)) : A("", !0)
            ], 10, $m))), 128)),
            W("td", {
              class: N(["z-10 pl-3 py-0 max-w-[120px] right-0 bg-white dark:bg-gray-800 transition-all", [
                n.loading ? "before:opacity-100" : "",
                n.informal ? "pr-3 h-12" : "pr-6 overflow-y-clip row-clip group-hover:bg-gray-100 dark:group-hover:bg-gray-800 before:content-[''] before:absolute before:-z-10 before:inset-0 before:opacity-0 group-hover:before:opacity-100 before:transition before:shadow-box dark:before:shadow-box-dark",
                n.informal && !n.bgDark && !n.bgLight ? "!bg-transparent" : "",
                i.hasStickyDetails() || !n.informal ? "sticky" : "relative border-gray-200 dark:border-gray-700 rounded-r-lg border-t border-r border-b"
              ]])
            }, [
              i.hasStickyDetails() || !n.informal ? (y(), C("div", {
                key: 0,
                class: N([
                  n.informal ? "flex items-center absolute -top-2  h-16 left-[-0.75px] -right-4 pr-4 overflow-hidden transition-all" : ""
                ])
              }, [
                (!n.informal && !n.loading || n.informal) && !n.actionDropdownItems.length ? (y(), se(u, {
                  key: 0,
                  size: "sm",
                  icon: n.informal ? n.ctaIcon : "last_page",
                  outlined: n.informal,
                  color: "action",
                  disabled: n.ctaIconDisabled,
                  align: "right",
                  compact: "",
                  onClicked: (d) => i.click(f.id, "actionButton"),
                  class: N(["z-20", {
                    "ml-auto": !n.informal,
                    "justify-center absolute h-12 w-[49px] bg-white dark:bg-gray-800 border-r border-t border-b border-gray-200 dark:border-gray-700 rounded-r-lg transition": n.informal,
                    "cursor-auto": n.informal && !n.ctaIcon
                  }])
                }, {
                  default: te(() => [
                    re(Z(i.detailsText), 1)
                  ]),
                  _: 2
                }, 1032, ["icon", "outlined", "disabled", "onClicked", "class"])) : (y(), C("div", Km, [
                  Se(s, {
                    onClick: (d) => i.openDropdown(d, f[n.rowItemIdentifier]),
                    size: "sm",
                    icon: "more_horiz",
                    outlined: "",
                    buttonRoundedClasses: "border-none !bg-transparent "
                  }, null, 8, ["onClick"])
                ])),
                n.loading ? (y(), C("div", {
                  key: 2,
                  class: N(["flex flex-row items-center", { "p-3": n.informal }])
                }, [
                  n.informal ? (y(), se(w, {
                    key: 1,
                    size: "sm",
                    class: "text-action-300 dark:text-action-600",
                    outlined: ""
                  }, {
                    default: te(() => [
                      re(" assignment ")
                    ]),
                    _: 1
                  })) : (y(), C(Oe, { key: 0 }, [
                    qm,
                    Se(w, {
                      size: "sm",
                      class: "text-action-300 dark:text-action-600"
                    }, {
                      default: te(() => [
                        re(" last_page ")
                      ]),
                      _: 1
                    })
                  ], 64))
                ], 2)) : A("", !0),
                n.informal ? (y(), C("div", Xm)) : A("", !0),
                n.informal ? (y(), C("div", {
                  key: 4,
                  class: N(`${n.bgLight} dark:${n.bgDark} absolute top-2 bottom-2 left-0 right-0 z-0 transition`)
                }, null, 2)) : A("", !0),
                n.informal ? (y(), C("div", {
                  key: 5,
                  class: N(["absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition", [
                    n.bgLight ? `${n.bgLight}` : "bg-white",
                    n.bgDark ? `dark:${n.bgDark}` : "dark:bg-gray-800"
                  ]])
                }, null, 2)) : A("", !0)
              ], 2)) : A("", !0)
            ], 2)
          ], 2))), 128))
        ])
      ], 2))
    ], 2),
    Se(Pi, {
      "enter-active-class": "transition ease-out duration-200",
      "enter-from-class": "transform opacity-0 scale-95",
      "enter-to-class": "transform opacity-100 scale-100",
      "leave-active-class": "transition ease-in duration-75",
      "leave-from-class": "transform opacity-100 scale-100",
      "leave-to-class": "transform opacity-0 scale-95",
      appear: ""
    }, {
      default: te(() => [
        Ut(W("div", Zm, [
          W("div", Jm, [
            (y(!0), C(Oe, null, Ye(n.actionDropdownItems, (f) => (y(), C("button", {
              onClick: (p) => i.dropdownActionSelected(f.identifier),
              key: f.identifier,
              class: "dark:hover:bg-gray-900 cursor-pointer first-of-type:rounded-tr-lg first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-bl-lg hover:bg-gray-100 w-full p-2 text-md dark:text-white text-gray-900 transition-all duration-300 items-center flex flex-row space-x-3 border-t dark:border-gray-700 first-of-type:border-t-0"
            }, [
              Se(w, {
                size: "sm",
                class: "text-gray-400"
              }, {
                default: te(() => [
                  re(Z(f.icon), 1)
                ]),
                _: 2
              }, 1024),
              W("span", eg, Z(f.textSlot), 1)
            ], 8, Qm))), 128))
          ])
        ], 512), [
          [Cn, a.dropdownOpen]
        ])
      ]),
      _: 1
    }),
    W("div", {
      class: N(["absolute max-w-[200px] z-30 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-card dark:shadow-card-dark transition-all before:absolute before:content-[''] before:w-4 before:h-4 before:-top-2 before:z-0 before:rotate-45 before:bg-gray-100 dark:before:bg-gray-700 before:border before:border-t-gray-200 before:border-l-gray-200 dark:before:border-t-gray-600 dark:before:border-l-gray-600 before:border-b-gray-100 before:border-r-gray-100 dark:before:border-b-gray-700 dark:before:border-r-gray-700 before:transition", {
        "opacity-0 invisible -translate-y-5": !a.settingsOpened || this.loading,
        "opacity-1 visible translate-y-0": a.settingsOpened && !this.loading,
        "top-32 sm:top-20 right-3 before:right-6": !n.informal,
        "top-36 sm:top-24 right-5 before:right-3": n.informal
      }])
    }, [
      W("div", tg, [
        (y(!0), C(Oe, null, Ye(i.headings, (f, p) => (y(), C("div", {
          key: p,
          class: "flex flex-row justify-between gap-2 p-1 items-center hover:bg-white dark:hover:bg-gray-800 transition"
        }, [
          Se(w, {
            size: "sm",
            outlined: "",
            onClick: (d) => i.toggleHeading(f),
            class: N(["cursor-pointer transition", {
              "text-gray-400": f.visible,
              "text-gray-200 dark:text-gray-600": !f.visible
            }])
          }, {
            default: te(() => [
              re(Z(f.visible ? "visibility" : "visibility_off"), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "class"]),
          W("span", {
            class: N(["mr-auto prose-md element-text truncate font-normal cursor-pointer transition", {
              "text-gray-900 dark:text-white": f.visible,
              "text-gray-500 dark:text-gray-500": !f.visible
            }]),
            onClick: (d) => i.toggleHeading(f)
          }, Z(f.title), 11, ng),
          Se(w, {
            size: "sm",
            class: N(["cursor-grab transition", {
              "text-gray-400": f.visible,
              "text-gray-200 dark:text-gray-600": !f.visible
            }]),
            disabled: f.visible
          }, {
            default: te(() => [
              re("drag_handle")
            ]),
            _: 2
          }, 1032, ["class", "disabled"])
        ]))), 128))
      ])
    ], 2),
    W("div", {
      class: N(["flex flex-col xs:flex-row items-center justify-between prose-xs element-text text-gray-500 border-gray-200 dark:border-gray-700 transition", {
        "border-t": i.currentItems.length > 0 || n.informal,
        "bg-white dark:bg-gray-800 border-b border-l border-r rounded-b-xl translate-z-0": !n.informal,
        "px-6 py-3": !n.informal,
        "px-3 py-2 mx-4": n.informal
      }])
    }, [
      W("div", {
        class: N({
          "italic text-danger-500 dark:text-danger-400 transition": a.error
        }),
        innerHTML: i.footerText
      }, null, 10, rg),
      W("div", ag, [
        Se(u, {
          size: "sm",
          icon: "keyboard_arrow_up",
          class: "mr-2",
          onClicked: t[11] || (t[11] = (f) => i.paginate("prev")),
          disabled: i.meta.currentPage <= 1
        }, {
          default: te(() => [
            re(Z(this.t("table.previous")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Se(u, {
          size: "sm",
          icon: "keyboard_arrow_down",
          onClicked: t[12] || (t[12] = (f) => i.paginate("next")),
          disabled: i.meta.currentPage >= i.meta.totalPages
        }, {
          default: te(() => [
            re(Z(this.t("table.next")), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 2)
  ], 2);
}
const Zg = /* @__PURE__ */ Re(Ym, [["render", ig]]);
const sg = ["title"], lg = ["checked", "disabled"], og = { class: "relative w-8 h-5 m-0.5 shrink-0 self-start bg-gray-400 peer-disabled:bg-gray-200 dark:peer-disabled:bg-gray-600 peer-checked:bg-action-500 dark:peer-checked:bg-action-500 rounded-full transition" }, ug = {
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
}, cg = /* @__PURE__ */ Object.assign(ug, {
  setup(e) {
    const t = ze();
    return (n, r) => {
      var a;
      return y(), C("label", {
        class: N(["group inline-flex items-center", {
          "cursor-pointer": !e.disabled,
          "gap-1": e.size === "sm",
          "gap-2 p-1": e.size === "md",
          "gap-3 p-2": e.size === "lg"
        }]),
        title: e.title
      }, [
        W("input", {
          ref_key: "toggle",
          ref: t,
          type: "checkbox",
          onChange: r[0] || (r[0] = (...i) => n.change && n.change(...i)),
          checked: e.checked,
          disabled: e.disabled,
          class: "peer hidden"
        }, null, 40, lg),
        W("span", og, [
          W("span", {
            class: N(["block w-4 h-4 bg-white m-0.5 rounded-full shadow-box dark:shadow-box-dark transition", [
              n.value ? "translate-x-3" : "translate-x-0",
              (a = t.value) != null && a.disabled ? "dark:bg-gray-400" : ""
            ]])
          }, null, 2)
        ]),
        n.$slots.default ? (y(), C("span", {
          key: 0,
          class: N([
            "text-md transition",
            e.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"
          ])
        }, [
          at(n.$slots, "default", {}, void 0, !0)
        ], 2)) : A("", !0)
      ], 10, sg);
    };
  }
}), Jg = /* @__PURE__ */ Re(cg, [["__scopeId", "data-v-5cd34538"]]), dg = {
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
    PawIcon: ht
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
}, fg = ["title"];
function hg(e, t, n, r, a, i) {
  const s = we("PawIcon");
  return y(), C("button", {
    class: N(["flex items-center group my-0 h-8 w-full prose-md element-text rounded-md transition", i.calcButton()]),
    title: n.title,
    onClick: t[0] || (t[0] = (...l) => i.click && i.click(...l))
  }, [
    n.icon ? (y(), se(s, {
      key: 0,
      size: n.size,
      outlined: n.outlined,
      class: N(["ml-0.75 mr-2 transition", i.calcIcon()])
    }, {
      default: te(() => [
        re(Z(n.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : A("", !0),
    W("span", {
      class: N(["flex-grow text-left truncate", n.icon ? "" : "ml-3"])
    }, [
      at(e.$slots, "default")
    ], 2),
    Se(s, {
      size: "sm",
      class: N([
        "opacity-0 text-gray-400",
        n.disabled ? "" : "group-hover:opacity-100 group-focus:text-action-100 dark:group-focus:text-action-100 group-focus:opacity-100 group-active:text-action-100 dark:group-active:text-action-100 group-active:opacity-100"
      ])
    }, {
      default: te(() => [
        re(" navigate_next ")
      ]),
      _: 1
    }, 8, ["class"])
  ], 10, fg);
}
const mg = /* @__PURE__ */ Re(dg, [["render", hg]]), gg = {
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
    PawListItem: mg
  },
  methods: {
    click(e) {
      this.$emit("clicked", e);
    }
  }
};
function pg(e, t, n, r, a, i) {
  const s = we("PawListItem");
  return !n.items || Object.keys(n.items).length === 0 ? (y(), C("div", {
    key: 0,
    class: N(["flex items-center w-full p-4 mb-8 bg-warning-100 dark:bg-warning-800 text-warning-800 dark:text-warning-100 rounded-lg transition", a.hasSlot ? "" : "hidden"])
  }, [
    at(e.$slots, "default")
  ], 2)) : (y(!0), C(Oe, { key: 1 }, Ye(n.items, (l, o) => (y(), C("div", {
    key: o,
    class: N(["py-1.5", {
      "border-t border-gray-200 dark:border-gray-700 transition": n.divider && o > 0
    }])
  }, [
    Se(s, {
      icon: l.icon ?? n.icon,
      size: l.size ?? n.size,
      title: l.title ?? n.title,
      outlined: l.outlined ?? n.outlined,
      disabled: l.disabled ?? n.disabled,
      onClicked: (u) => i.click(o)
    }, {
      default: te(() => [
        re(Z(l.text), 1)
      ]),
      _: 2
    }, 1032, ["icon", "size", "title", "outlined", "disabled", "onClicked"])
  ], 2))), 128));
}
const Qg = /* @__PURE__ */ Re(gg, [["render", pg]]), _g = { class: "flex items-center gap-2 self-center p-3 rounded-xl bg-gray-900/60 backdrop-blur-sm dark:bg-gray-950/60 w-fit" }, ep = {
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
    const n = t, r = (a) => {
      n("clicked", a);
    };
    return (a, i) => (y(), C("div", {
      class: N([
        "fixed bottom-0 w-full left-0 right-0 py-4 z-50 grid place-items-center",
        e.scrollGradient ? "from-gray-100 dark:from-gray-900 to-transparent bg-gradient-to-t" : ""
      ])
    }, [
      W("div", _g, [
        (y(!0), C(Oe, null, Ye(e.buttons, (s, l) => (y(), se(fr, {
          key: `button-${l}`,
          icon: s.icon,
          title: s.textSlot,
          outlined: s.outlined,
          size: s.size,
          onClicked: (o) => r(s.identifier)
        }, {
          default: te(() => [
            re(Z(s.textSlot), 1)
          ]),
          _: 2
        }, 1032, ["icon", "title", "outlined", "size", "onClicked"]))), 128))
      ])
    ], 2));
  }
};
var Ei = globalThis && globalThis.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, i; r < a; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}, yg = (
  /** @class */
  function() {
    function e(t, n, r) {
      this.name = t, this.version = n, this.os = r, this.type = "browser";
    }
    return e;
  }()
), bg = (
  /** @class */
  function() {
    function e(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return e;
  }()
), vg = (
  /** @class */
  function() {
    function e(t, n, r, a) {
      this.name = t, this.version = n, this.os = r, this.bot = a, this.type = "bot-device";
    }
    return e;
  }()
), kg = (
  /** @class */
  function() {
    function e() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return e;
  }()
), xg = (
  /** @class */
  function() {
    function e() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return e;
  }()
), wg = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Og = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Ci = 3, Sg = [
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
  ["searchbot", wg]
], Ti = [
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
function Eg(e) {
  return e ? Di(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new xg() : typeof navigator < "u" ? Di(navigator.userAgent) : Dg();
}
function Cg(e) {
  return e !== "" && Sg.reduce(function(t, n) {
    var r = n[0], a = n[1];
    if (t)
      return t;
    var i = a.exec(e);
    return !!i && [r, i];
  }, !1);
}
function Di(e) {
  var t = Cg(e);
  if (!t)
    return null;
  var n = t[0], r = t[1];
  if (n === "searchbot")
    return new kg();
  var a = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
  a ? a.length < Ci && (a = Ei(Ei([], a, !0), Ng(Ci - a.length), !0)) : a = [];
  var i = a.join("."), s = Tg(e), l = Og.exec(e);
  return l && l[1] ? new vg(n, i, s, l[1]) : new yg(n, i, s);
}
function Tg(e) {
  for (var t = 0, n = Ti.length; t < n; t++) {
    var r = Ti[t], a = r[0], i = r[1], s = i.exec(e);
    if (s)
      return a;
  }
  return null;
}
function Dg() {
  var e = typeof process < "u" && process.version;
  return e ? new bg(process.version.slice(1)) : null;
}
function Ng(e) {
  for (var t = [], n = 0; n < e; n++)
    t.push("0");
  return t;
}
const Ig = (e) => (Yl("data-v-ee12da86"), e = e(), Ul(), e), Mg = {
  key: 0,
  class: "flex flex-row"
}, Pg = {
  key: 0,
  class: "max-w-[80px] h-3.5 mr-1 bg-gray-400 loading-bubble"
}, Lg = { class: "flex flex-row items-center justify-between gap-3" }, Ag = /* @__PURE__ */ Ig(() => /* @__PURE__ */ W("template", null, [
  /* @__PURE__ */ W("div", { class: "flex flex-row items-center shrink-0 gap-3 w-full max-w-[52px] py-1" }, [
    /* @__PURE__ */ W("span", { class: "bg-gray-400 loading-bubble max-w-[24px] w-full h-2" }),
    /* @__PURE__ */ W("span", { class: "bg-gray-400 loading-bubble w-4 h-4" })
  ])
], -1)), Rg = {
  key: 1,
  class: "ml-2 mt-1"
}, Fg = {
  key: 0,
  class: "max-w-[120px] h-2 bg-gray-400 mb-2 loading-bubble"
}, Yg = {
  key: 1,
  class: "max-w-[120px] h-2 bg-danger-500 dark:bg-danger-400 loading-bubble"
}, Ug = { class: "flex flex-row" }, Wg = ["readonly", "min", "max"], Vg = {
  key: 0,
  class: "ml-2"
}, Bg = {
  key: 0,
  class: "prose-xs element-text italic text-gray-500 transition"
}, zg = {
  key: 1,
  class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition"
}, Hg = {
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
    const n = t, r = e, a = Eg(), i = ze(!1), s = ze(), l = ze(F(r.inputValue).format("YYYY-MM-DD")), o = ze(F(r.minDate).format("YYYY-MM-DD")), u = ze(F(r.maxDate).format("YYYY-MM-DD"));
    function m() {
      const f = r.format ? r.format : "DD/MM/YYYY";
      n("changed", F(l.value).format(f));
    }
    function _(f) {
      r.readonly || (i.value = !0, f.srcElement.nodeName !== "INPUT" && a.name !== "safari" && s.value.showPicker());
    }
    function g(f, p = () => {
    }, d = document.createElement(null), v = "mouseup") {
      document.addEventListener(v, function E(k) {
        if (!(k.target instanceof Element))
          return document.removeEventListener(v, E), !1;
        f !== k.target && !Array.from(d).includes(k.target) && p(k) !== !1 && document.removeEventListener(v, E);
      });
    }
    function O() {
      let f = "";
      return f += r.readonly ? "" : "pr-0.75 border border-gray-200 dark:border-gray-600 rounded-md transition", f += " pl-1", f += i.value && !r.readonly ? " outline outline-4 outline-action-200 dark:outline-action-700" : "", f;
    }
    function w() {
      const f = ["max-w-[120px]", "max-w-[200px]", "max-w-xs"];
      return f[Math.floor(Math.random() * f.length)];
    }
    return (f, p) => (y(), C("div", {
      ref: (d) => {
        g(d, () => {
          i.value = !1;
        });
      },
      class: "flex flex-col relative gap-1"
    }, [
      e.loading ? (y(), C(Oe, { key: 0 }, [
        e.label ? (y(), C("div", Mg, [
          e.label ? (y(), C("label", Pg)) : A("", !0)
        ])) : A("", !0),
        W("div", Lg, [
          W("div", {
            class: N(["bg-gray-400 loading-bubble mr-auto h-8", [w()]])
          }, null, 2),
          Ag
        ]),
        e.notification || e.error ? (y(), C("div", Rg, [
          e.notification ? (y(), C("div", Fg)) : A("", !0),
          e.error ? (y(), C("div", Yg)) : A("", !0)
        ])) : A("", !0)
      ], 64)) : (y(), C(Oe, { key: 1 }, [
        W("div", Ug, [
          W("label", {
            onClick: _,
            class: "prose-xs element-text text-xs uppercase text-gray-500 cursor-pointer transition"
          }, Z(e.label), 1)
        ]),
        W("div", {
          class: N([O(), "flex flex-row w-full items-center rounded-md transition px-0.75"])
        }, [
          Ut(W("input", {
            readonly: e.readonly,
            "onUpdate:modelValue": p[0] || (p[0] = (d) => l.value = d),
            onChange: p[1] || (p[1] = (d) => m()),
            onInput: p[2] || (p[2] = (d) => m()),
            min: o.value,
            max: u.value,
            ref_key: "inputRef",
            ref: s,
            onClick: p[3] || (p[3] = (d) => _(d)),
            class: "bg-transparent rounded-md input-reset text-gray-900 dark:text-white transition cursor-pointer py-1.5",
            type: "date",
            placeholder: "dd-mm-yyyy"
          }, null, 40, Wg), [
            [Mi, l.value]
          ]),
          e.readonly ? A("", !0) : (y(), se(ht, {
            key: 0,
            onClick: p[4] || (p[4] = (d) => _(d)),
            size: "sm",
            class: "text-gray-400 opacity-100 cursor-pointer transition"
          }, {
            default: te(() => [
              re(" calendar_month ")
            ]),
            _: 1
          }))
        ], 2),
        e.notification || e.error ? (y(), C("div", Vg, [
          e.notification ? (y(), C("div", Bg, Z(e.notification), 1)) : A("", !0),
          e.error ? (y(), C("div", zg, Z(e.error), 1)) : A("", !0)
        ])) : A("", !0)
      ], 64))
    ], 512));
  }
}, tp = /* @__PURE__ */ Re(Hg, [["__scopeId", "data-v-ee12da86"]]), En = es(ts), jg = {
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
        gray: En.theme.colors.gray,
        action: En.theme.colors.action,
        success: En.theme.colors.success,
        danger: En.theme.colors.danger,
        warning: En.theme.colors.warning
      }
    };
  }
}, Gg = { class: "text-xl mb-4 text-gray-900 dark:text-white transition" }, $g = { class: "grow w-[14ch] font-mono text-xs text-gray-500" };
function Kg(e, t, n, r, a, i) {
  return y(), C("div", {
    class: N(["p-4 xs:p-8 rounded-3xl grid grid-cols-auto-fit gap-4 transition", `bg-${n.bgColor.color} dark:bg-${n.bgColorDark.color}`])
  }, [
    (y(!0), C(Oe, null, Ye(a.colors, (s, l) => (y(), C("div", { key: l }, [
      W("h2", Gg, Z(l), 1),
      (y(!0), C(Oe, null, Ye(s, (o, u) => (y(), C("div", {
        key: u,
        class: "flex items-center gap-2 mb-3"
      }, [
        W("div", {
          class: N(["flex-auto w-24 h-12 rounded-xl", [
            `bg-${l}-${u}`,
            `${l}-${u}` === n.bgColor.color ? `border border-${n.bgColor.border}` : "",
            `${l}-${u}` === n.bgColorDark.color ? `border border-${n.bgColorDark.border}` : ""
          ]])
        }, null, 2),
        W("div", $g, Z(u) + " (" + Z(o) + ")", 1)
      ]))), 128))
    ]))), 128))
  ], 2);
}
const np = /* @__PURE__ */ Re(jg, [["render", Kg]]);
export {
  fr as PawButton,
  Ds as PawCheckbox,
  pc as PawChip,
  np as PawColorSwatches,
  Xc as PawCrazyInput,
  tp as PawDatePicker,
  ed as PawDropDown,
  ep as PawFloatingBar,
  ht as PawIcon,
  id as PawLabel,
  Am as PawLazyField,
  Ns as PawLink,
  Qg as PawList,
  mg as PawListItem,
  Is as PawRadio,
  Jg as PawSwitch,
  Zg as PawTable,
  Xg as PawTypography
};
