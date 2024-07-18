import { openBlock as P, createElementBlock as W, Fragment as nt, renderList as _t, createElementVNode as ne, toDisplayString as pe, normalizeClass as j, createCommentVNode as Z, createStaticVNode as ed, defineComponent as Ma, h as Lo, getCurrentInstance as Aa, inject as td, onMounted as rd, onUnmounted as nd, shallowRef as Mo, ref as xt, computed as Ft, onBeforeMount as id, watch as Us, createVNode as Je, Text as ad, renderSlot as Wt, resolveComponent as qe, createBlock as Ee, withCtx as we, createTextVNode as xe, Transition as Ra, withDirectives as cr, vShow as Qr, vModelText as Ao, vModelDynamic as sd, pushScopeId as od, popScopeId as ld } from "vue";
var br = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ro = {}, Fo = {}, Fa = {};
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
})(Fa);
var Yo = {};
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
})(Yo);
var Bo = {};
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
})(Bo);
var Ya = {}, ei = {}, Ba = { exports: {} }, je = String, Uo = function() {
  return { isColorSupported: !1, reset: je, bold: je, dim: je, italic: je, underline: je, inverse: je, hidden: je, strikethrough: je, black: je, red: je, green: je, yellow: je, blue: je, magenta: je, cyan: je, white: je, gray: je, bgBlack: je, bgRed: je, bgGreen: je, bgYellow: je, bgBlue: je, bgMagenta: je, bgCyan: je, bgWhite: je };
};
Ba.exports = Uo();
Ba.exports.createColors = Uo;
var Wo = Ba.exports;
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
  const r = /* @__PURE__ */ n(Wo);
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
})(ei);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const t = /* @__PURE__ */ r(ei);
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
})(Ya);
var zo = {};
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
})(zo);
var Vo = {};
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
})(Vo);
var Ho = {}, ti = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(m, g) {
    for (var O in g)
      Object.defineProperty(m, O, {
        enumerable: !0,
        get: g[O]
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
  const r = /* @__PURE__ */ i(Wo), n = /* @__PURE__ */ i(ei);
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
  function u(m, g) {
    if (s.future.includes(g)) {
      var O, E, h;
      return m.future === "all" || ((h = (E = m == null || (O = m.future) === null || O === void 0 ? void 0 : O[g]) !== null && E !== void 0 ? E : a[g]) !== null && h !== void 0 ? h : !1);
    }
    if (s.experimental.includes(g)) {
      var c, p, _;
      return m.experimental === "all" || ((_ = (p = m == null || (c = m.experimental) === null || c === void 0 ? void 0 : c[g]) !== null && p !== void 0 ? p : a[g]) !== null && _ !== void 0 ? _ : !1);
    }
    return !1;
  }
  function o(m) {
    if (m.experimental === "all")
      return s.experimental;
    var g;
    return Object.keys((g = m == null ? void 0 : m.experimental) !== null && g !== void 0 ? g : {}).filter((O) => s.experimental.includes(O) && m.experimental[O]);
  }
  function l(m) {
    if (process.env.JEST_WORKER_ID === void 0 && o(m).length > 0) {
      let g = o(m).map((O) => r.default.yellow(O)).join(", ");
      n.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${g}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  const f = s;
})(ti);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = ti, r = /* @__PURE__ */ i(ei);
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
        var g = f ? Object.getOwnPropertyDescriptor(s, m) : null;
        g && (g.get || g.set) ? Object.defineProperty(l, m, g) : l[m] = s[m];
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
      let { content: f, purge: m, safelist: g } = s;
      return Array.isArray(g) ? g : Array.isArray(f == null ? void 0 : f.safelist) ? f.safelist : Array.isArray(m == null ? void 0 : m.safelist) ? m.safelist : Array.isArray(m == null || (l = m.options) === null || l === void 0 ? void 0 : l.safelist) ? m.options.safelist : [];
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
          var g, O, E, h, c, p, _, k, w, T;
          return !((g = s.purge) === null || g === void 0) && g.extract ? s.purge.extract : !((O = s.content) === null || O === void 0) && O.extract ? s.content.extract : !((E = s.purge) === null || E === void 0 || (h = E.extract) === null || h === void 0) && h.DEFAULT ? s.purge.extract.DEFAULT : !((c = s.content) === null || c === void 0 || (p = c.extract) === null || p === void 0) && p.DEFAULT ? s.content.extract.DEFAULT : !((_ = s.purge) === null || _ === void 0 || (k = _.options) === null || k === void 0) && k.extractors ? s.purge.options.extractors : !((w = s.content) === null || w === void 0 || (T = w.options) === null || T === void 0) && T.extractors ? s.content.options.extractors : {};
        })(), f = {}, m = (() => {
          var g, O, E, h;
          if (!((g = s.purge) === null || g === void 0 || (O = g.options) === null || O === void 0) && O.defaultExtractor)
            return s.purge.options.defaultExtractor;
          if (!((E = s.content) === null || E === void 0 || (h = E.options) === null || h === void 0) && h.defaultExtractor)
            return s.content.options.defaultExtractor;
        })();
        if (m !== void 0 && (f.DEFAULT = m), typeof l == "function")
          f.DEFAULT = l;
        else if (Array.isArray(l))
          for (let { extensions: g, extractor: O } of l ?? [])
            for (let E of g)
              f[E] = O;
        else
          typeof l == "object" && l !== null && Object.assign(f, l);
        return f;
      })(),
      transform: (() => {
        let l = (() => {
          var m, g, O, E, h, c;
          return !((m = s.purge) === null || m === void 0) && m.transform ? s.purge.transform : !((g = s.content) === null || g === void 0) && g.transform ? s.content.transform : !((O = s.purge) === null || O === void 0 || (E = O.transform) === null || E === void 0) && E.DEFAULT ? s.purge.transform.DEFAULT : !((h = s.content) === null || h === void 0 || (c = h.transform) === null || c === void 0) && c.DEFAULT ? s.content.transform.DEFAULT : {};
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
})(Ho);
var jo = {};
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
    return n === null || Object.getPrototypeOf(n) === null;
  }
})(jo);
var Ua = {};
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
})(Ua);
var qo = {}, Go = {};
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
})(Go);
var Wa = {}, za = {}, $o = {};
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
})($o);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(E, h) {
    for (var c in h)
      Object.defineProperty(E, c, {
        enumerable: !0,
        get: h[c]
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
  const r = /* @__PURE__ */ n($o);
  function n(E) {
    return E && E.__esModule ? E : {
      default: E
    };
  }
  let i = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, a = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, s = /(?:\d+|\d*\.\d+)%?/, u = /(?:\s*,\s*|\s+)/, o = /\s*[,/]\s*/, l = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/, f = new RegExp(`^(rgba?)\\(\\s*(${s.source}|${l.source})(?:${u.source}(${s.source}|${l.source}))?(?:${u.source}(${s.source}|${l.source}))?(?:${o.source}(${s.source}|${l.source}))?\\s*\\)$`), m = new RegExp(`^(hsla?)\\(\\s*((?:${s.source})(?:deg|rad|grad|turn)?|${l.source})(?:${u.source}(${s.source}|${l.source}))?(?:${u.source}(${s.source}|${l.source}))?(?:${o.source}(${s.source}|${l.source}))?\\s*\\)$`);
  function g(E, { loose: h = !1 } = {}) {
    var c, p;
    if (typeof E != "string")
      return null;
    if (E = E.trim(), E === "transparent")
      return {
        mode: "rgb",
        color: [
          "0",
          "0",
          "0"
        ],
        alpha: "0"
      };
    if (E in r.default)
      return {
        mode: "rgb",
        color: r.default[E].map((D) => D.toString())
      };
    let _ = E.replace(a, (D, R, B, b, L) => [
      "#",
      R,
      R,
      B,
      B,
      b,
      b,
      L ? L + L : ""
    ].join("")).match(i);
    if (_ !== null)
      return {
        mode: "rgb",
        color: [
          parseInt(_[1], 16),
          parseInt(_[2], 16),
          parseInt(_[3], 16)
        ].map((D) => D.toString()),
        alpha: _[4] ? (parseInt(_[4], 16) / 255).toString() : void 0
      };
    var k;
    let w = (k = E.match(f)) !== null && k !== void 0 ? k : E.match(m);
    if (w === null)
      return null;
    let T = [
      w[2],
      w[3],
      w[4]
    ].filter(Boolean).map((D) => D.toString());
    return T.length === 2 && T[0].startsWith("var(") ? {
      mode: w[1],
      color: [
        T[0]
      ],
      alpha: T[1]
    } : !h && T.length !== 3 || T.length < 3 && !T.some((D) => /^var\(.*?\)$/.test(D)) ? null : {
      mode: w[1],
      color: T,
      alpha: (c = w[5]) === null || c === void 0 || (p = c.toString) === null || p === void 0 ? void 0 : p.call(c)
    };
  }
  function O({ mode: E, color: h, alpha: c }) {
    let p = c !== void 0;
    return E === "rgba" || E === "hsla" ? `${E}(${h.join(", ")}${p ? `, ${c}` : ""})` : `${E}(${h.join(" ")}${p ? ` / ${c}` : ""})`;
  }
})(za);
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
  const r = za;
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
})(Wa);
var Va = {}, Ko = {}, ri = {};
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
})(ri);
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
  const r = ri;
  let n = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), i = /\ +(?![^(]*\))/g, a = /^-?(\d+|\.\d+)(.*?)$/g;
  function s(o) {
    return (0, r.splitAtTopLevelOnly)(o, ",").map((f) => {
      let m = f.trim(), g = {
        raw: m
      }, O = m.split(i), E = /* @__PURE__ */ new Set();
      for (let h of O)
        a.lastIndex = 0, !E.has("KEYWORD") && n.has(h) ? (g.keyword = h, E.add("KEYWORD")) : a.test(h) ? E.has("X") ? E.has("Y") ? E.has("BLUR") ? E.has("SPREAD") || (g.spread = h, E.add("SPREAD")) : (g.blur = h, E.add("BLUR")) : (g.y = h, E.add("Y")) : (g.x = h, E.add("X")) : g.color ? (g.unknown || (g.unknown = []), g.unknown.push(h)) : g.color = h;
      return g.valid = g.x !== void 0 && g.y !== void 0, g;
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
})(Ko);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(N, re) {
    for (var ue in re)
      Object.defineProperty(N, ue, {
        enumerable: !0,
        get: re[ue]
      });
  }
  t(e, {
    normalize: function() {
      return o;
    },
    url: function() {
      return f;
    },
    number: function() {
      return m;
    },
    percentage: function() {
      return g;
    },
    length: function() {
      return h;
    },
    lineWidth: function() {
      return p;
    },
    shadow: function() {
      return _;
    },
    color: function() {
      return k;
    },
    image: function() {
      return w;
    },
    gradient: function() {
      return D;
    },
    position: function() {
      return B;
    },
    familyName: function() {
      return b;
    },
    genericName: function() {
      return V;
    },
    absoluteSize: function() {
      return G;
    },
    relativeSize: function() {
      return H;
    }
  });
  const r = za, n = Ko, i = ri;
  let a = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function s(N) {
    return a.some((re) => new RegExp(`^${re}\\(.*\\)`).test(N));
  }
  const u = /* @__PURE__ */ new Set([
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
  function o(N, re = null, ue = !0) {
    let ce = re && u.has(re.property);
    return N.startsWith("--") && !ce ? `var(${N})` : N.includes("url(") ? N.split(/(url\(.*?\))/g).filter(Boolean).map((be) => /^url\(.*?\)$/.test(be) ? be : o(be, re, !1)).join("") : (N = N.replace(/([^\\])_+/g, (be, te) => te + " ".repeat(be.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), ue && (N = N.trim()), N = l(N), N);
  }
  function l(N) {
    let re = [
      "theme"
    ], ue = [
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
    return N.replace(/(calc|min|max|clamp)\(.+\)/g, (ce) => {
      let be = "";
      function te() {
        let X = be.trimEnd();
        return X[X.length - 1];
      }
      for (let X = 0; X < ce.length; X++) {
        let z = function(ie) {
          return ie.split("").every((Y, fe) => ce[X + fe] === Y);
        }, A = function(ie) {
          let Y = 1 / 0;
          for (let ke of ie) {
            let ge = ce.indexOf(ke, X);
            ge !== -1 && ge < Y && (Y = ge);
          }
          let fe = ce.slice(X, Y);
          return X += fe.length - 1, fe;
        }, $ = ce[X];
        if (z("var"))
          be += A([
            ")",
            ","
          ]);
        else if (ue.some((ie) => z(ie))) {
          let ie = ue.find((Y) => z(Y));
          be += ie, X += ie.length - 1;
        } else
          re.some((ie) => z(ie)) ? be += A([
            ")"
          ]) : z("[") ? be += A([
            "]"
          ]) : [
            "+",
            "-",
            "*",
            "/"
          ].includes($) && ![
            "(",
            "+",
            "-",
            "*",
            "/",
            ","
          ].includes(te()) ? be += ` ${$} ` : be += $;
      }
      return be.replace(/\s+/g, " ");
    });
  }
  function f(N) {
    return N.startsWith("url(");
  }
  function m(N) {
    return !isNaN(Number(N)) || s(N);
  }
  function g(N) {
    return N.endsWith("%") && m(N.slice(0, -1)) || s(N);
  }
  let E = `(?:${[
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
  function h(N) {
    return N === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${E}$`).test(N) || s(N);
  }
  let c = /* @__PURE__ */ new Set([
    "thin",
    "medium",
    "thick"
  ]);
  function p(N) {
    return c.has(N);
  }
  function _(N) {
    let re = (0, n.parseBoxShadowValue)(o(N));
    for (let ue of re)
      if (!ue.valid)
        return !1;
    return !0;
  }
  function k(N) {
    let re = 0;
    return (0, i.splitAtTopLevelOnly)(N, "_").every((ce) => (ce = o(ce), ce.startsWith("var(") ? !0 : (0, r.parseColor)(ce, {
      loose: !0
    }) !== null ? (re++, !0) : !1)) ? re > 0 : !1;
  }
  function w(N) {
    let re = 0;
    return (0, i.splitAtTopLevelOnly)(N, ",").every((ce) => (ce = o(ce), ce.startsWith("var(") ? !0 : f(ce) || D(ce) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((be) => ce.startsWith(be)) ? (re++, !0) : !1)) ? re > 0 : !1;
  }
  let T = /* @__PURE__ */ new Set([
    "conic-gradient",
    "linear-gradient",
    "radial-gradient",
    "repeating-conic-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient"
  ]);
  function D(N) {
    N = o(N);
    for (let re of T)
      if (N.startsWith(`${re}(`))
        return !0;
    return !1;
  }
  let R = /* @__PURE__ */ new Set([
    "center",
    "top",
    "right",
    "bottom",
    "left"
  ]);
  function B(N) {
    let re = 0;
    return (0, i.splitAtTopLevelOnly)(N, "_").every((ce) => (ce = o(ce), ce.startsWith("var(") ? !0 : R.has(ce) || h(ce) || g(ce) ? (re++, !0) : !1)) ? re > 0 : !1;
  }
  function b(N) {
    let re = 0;
    return (0, i.splitAtTopLevelOnly)(N, ",").every((ce) => (ce = o(ce), ce.startsWith("var(") ? !0 : ce.includes(" ") && !/(['"])([^"']+)\1/g.test(ce) || /^\d/g.test(ce) ? !1 : (re++, !0))) ? re > 0 : !1;
  }
  let L = /* @__PURE__ */ new Set([
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
  function V(N) {
    return L.has(N);
  }
  let F = /* @__PURE__ */ new Set([
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "x-large",
    "xxx-large"
  ]);
  function G(N) {
    return F.has(N);
  }
  let Q = /* @__PURE__ */ new Set([
    "larger",
    "smaller"
  ]);
  function H(N) {
    return Q.has(N);
  }
})(Va);
var Xo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = Va, r = ri;
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
})(Xo);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(b, L) {
    for (var V in L)
      Object.defineProperty(b, V, {
        enumerable: !0,
        get: L[V]
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
      return h;
    },
    asColor: function() {
      return p;
    },
    asLookupValue: function() {
      return _;
    },
    typeMap: function() {
      return w;
    },
    coerceValue: function() {
      return R;
    },
    getMatchingTypes: function() {
      return B;
    }
  });
  const r = /* @__PURE__ */ o(Go), n = Wa, i = Va, a = /* @__PURE__ */ o(Fa), s = Xo, u = ti;
  function o(b) {
    return b && b.__esModule ? b : {
      default: b
    };
  }
  function l(b, L) {
    b.walkClasses((V) => {
      V.value = L(V.value), V.raws && V.raws.value && (V.raws.value = (0, r.default)(V.raws.value));
    });
  }
  function f(b, L) {
    if (!O(b))
      return;
    let V = b.slice(1, -1);
    if (L(V))
      return (0, i.normalize)(V);
  }
  function m(b, L = {}, V) {
    let F = L[b];
    if (F !== void 0)
      return (0, a.default)(F);
    if (O(b)) {
      let G = f(b, V);
      return G === void 0 ? void 0 : (0, a.default)(G);
    }
  }
  function g(b, L = {}, { validate: V = () => !0 } = {}) {
    var F;
    let G = (F = L.values) === null || F === void 0 ? void 0 : F[b];
    return G !== void 0 ? G : L.supportsNegativeValues && b.startsWith("-") ? m(b.slice(1), L.values, V) : f(b, V);
  }
  function O(b) {
    return b.startsWith("[") && b.endsWith("]");
  }
  function E(b) {
    let L = b.lastIndexOf("/"), V = b.lastIndexOf("[", L), F = b.indexOf("]", L);
    return b[L - 1] === "]" || b[L + 1] === "[" || V !== -1 && F !== -1 && V < L && L < F && (L = b.lastIndexOf("/", V)), L === -1 || L === b.length - 1 ? [
      b,
      void 0
    ] : O(b) && !b.includes("]/[") ? [
      b,
      void 0
    ] : [
      b.slice(0, L),
      b.slice(L + 1)
    ];
  }
  function h(b) {
    if (typeof b == "string" && b.includes("<alpha-value>")) {
      let L = b;
      return ({ opacityValue: V = 1 }) => L.replace("<alpha-value>", V);
    }
    return b;
  }
  function c(b) {
    return (0, i.normalize)(b.slice(1, -1));
  }
  function p(b, L = {}, { tailwindConfig: V = {} } = {}) {
    var F;
    if (((F = L.values) === null || F === void 0 ? void 0 : F[b]) !== void 0) {
      var G;
      return h((G = L.values) === null || G === void 0 ? void 0 : G[b]);
    }
    let [Q, H] = E(b);
    if (H !== void 0) {
      var N, re, ue, ce;
      let be = (ce = (N = L.values) === null || N === void 0 ? void 0 : N[Q]) !== null && ce !== void 0 ? ce : O(Q) ? Q.slice(1, -1) : void 0;
      return be === void 0 ? void 0 : (be = h(be), O(H) ? (0, n.withAlphaValue)(be, c(H)) : ((re = V.theme) === null || re === void 0 || (ue = re.opacity) === null || ue === void 0 ? void 0 : ue[H]) === void 0 ? void 0 : (0, n.withAlphaValue)(be, V.theme.opacity[H]));
    }
    return g(b, L, {
      validate: i.color
    });
  }
  function _(b, L = {}) {
    var V;
    return (V = L.values) === null || V === void 0 ? void 0 : V[b];
  }
  function k(b) {
    return (L, V) => g(L, V, {
      validate: b
    });
  }
  let w = {
    any: g,
    color: p,
    url: k(i.url),
    image: k(i.image),
    length: k(i.length),
    percentage: k(i.percentage),
    position: k(i.position),
    lookup: _,
    "generic-name": k(i.genericName),
    "family-name": k(i.familyName),
    number: k(i.number),
    "line-width": k(i.lineWidth),
    "absolute-size": k(i.absoluteSize),
    "relative-size": k(i.relativeSize),
    shadow: k(i.shadow),
    size: k(s.backgroundSize)
  }, T = Object.keys(w);
  function D(b, L) {
    let V = b.indexOf(L);
    return V === -1 ? [
      void 0,
      b
    ] : [
      b.slice(0, V),
      b.slice(V + 1)
    ];
  }
  function R(b, L, V, F) {
    if (V.values && L in V.values)
      for (let { type: Q } of b ?? []) {
        let H = w[Q](L, V, {
          tailwindConfig: F
        });
        if (H !== void 0)
          return [
            H,
            Q,
            null
          ];
      }
    if (O(L)) {
      let Q = L.slice(1, -1), [H, N] = D(Q, ":");
      if (!/^[\w-_]+$/g.test(H))
        N = Q;
      else if (H !== void 0 && !T.includes(H))
        return [];
      if (N.length > 0 && T.includes(H))
        return [
          g(`[${N}]`, V),
          H,
          null
        ];
    }
    let G = B(b, L, V, F);
    for (let Q of G)
      return Q;
    return [];
  }
  function* B(b, L, V, F) {
    let G = (0, u.flagEnabled)(F, "generalizedModifiers"), [Q, H] = E(L);
    if (G && V.modifiers != null && (V.modifiers === "any" || typeof V.modifiers == "object" && (H && O(H) || H in V.modifiers)) || (Q = L, H = void 0), H !== void 0 && Q === "" && (Q = "DEFAULT"), H !== void 0 && typeof V.modifiers == "object") {
      var re, ue;
      let ce = (ue = (re = V.modifiers) === null || re === void 0 ? void 0 : re[H]) !== null && ue !== void 0 ? ue : null;
      ce !== null ? H = ce : O(H) && (H = c(H));
    }
    for (let { type: ce } of b ?? []) {
      let be = w[ce](Q, V, {
        tailwindConfig: F
      });
      be !== void 0 && (yield [
        be,
        ce,
        H ?? null
      ]);
    }
  }
})(qo);
var Qo = {};
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
})(Qo);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return V;
    }
  });
  const t = /* @__PURE__ */ O(Fa), r = /* @__PURE__ */ O(Yo), n = /* @__PURE__ */ O(Bo), i = /* @__PURE__ */ O(Ya), a = zo, s = Vo, u = Ho, o = /* @__PURE__ */ O(jo), l = Ua, f = qo, m = Wa, g = /* @__PURE__ */ O(Qo);
  function O(F) {
    return F && F.__esModule ? F : {
      default: F
    };
  }
  function E(F) {
    return typeof F == "function";
  }
  function h(F, ...G) {
    let Q = G.pop();
    for (let H of G)
      for (let N in H) {
        let re = Q(F[N], H[N]);
        re === void 0 ? (0, o.default)(F[N]) && (0, o.default)(H[N]) ? F[N] = h({}, F[N], H[N], Q) : F[N] = H[N] : F[N] = re;
      }
    return F;
  }
  const c = {
    colors: i.default,
    negative(F) {
      return Object.keys(F).filter((G) => F[G] !== "0").reduce((G, Q) => {
        let H = (0, t.default)(F[Q]);
        return H !== void 0 && (G[`-${Q}`] = H), G;
      }, {});
    },
    breakpoints(F) {
      return Object.keys(F).filter((G) => typeof F[G] == "string").reduce((G, Q) => ({
        ...G,
        [`screen-${Q}`]: F[Q]
      }), {});
    }
  };
  function p(F, ...G) {
    return E(F) ? F(...G) : F;
  }
  function _(F) {
    return F.reduce((G, { extend: Q }) => h(G, Q, (H, N) => H === void 0 ? [
      N
    ] : Array.isArray(H) ? [
      N,
      ...H
    ] : [
      N,
      H
    ]), {});
  }
  function k(F) {
    return {
      ...F.reduce((G, Q) => (0, a.defaults)(G, Q), {}),
      // In order to resolve n config objects, we combine all of their `extend` properties
      // into arrays instead of objects so they aren't overridden.
      extend: _(F)
    };
  }
  function w(F, G) {
    if (Array.isArray(F) && (0, o.default)(F[0]))
      return F.concat(G);
    if (Array.isArray(G) && (0, o.default)(G[0]) && (0, o.default)(F))
      return [
        F,
        ...G
      ];
    if (Array.isArray(G))
      return G;
  }
  function T({ extend: F, ...G }) {
    return h(G, F, (Q, H) => !E(Q) && !H.some(E) ? h({}, Q, ...H, w) : (N, re) => h({}, ...[
      Q,
      ...H
    ].map((ue) => p(ue, N, re)), w));
  }
  function* D(F) {
    let G = (0, s.toPath)(F);
    if (G.length === 0 || (yield G, Array.isArray(F)))
      return;
    let Q = /^(.*?)\s*\/\s*([^/]+)$/, H = F.match(Q);
    if (H !== null) {
      let [, N, re] = H, ue = (0, s.toPath)(N);
      ue.alpha = re, yield ue;
    }
  }
  function R(F) {
    const G = (Q, H) => {
      for (const N of D(Q)) {
        let re = 0, ue = F;
        for (; ue != null && re < N.length; )
          ue = ue[N[re++]], ue = E(ue) && (N.alpha === void 0 || re <= N.length - 1) ? ue(G, c) : ue;
        if (ue !== void 0) {
          if (N.alpha !== void 0) {
            let ce = (0, f.parseColorFormat)(ue);
            return (0, m.withAlphaValue)(ce, N.alpha, (0, g.default)(ce));
          }
          return (0, o.default)(ue) ? (0, l.cloneDeep)(ue) : ue;
        }
      }
      return H;
    };
    return Object.assign(G, {
      theme: G,
      ...c
    }), Object.keys(F).reduce((Q, H) => (Q[H] = E(F[H]) ? F[H](G, c) : F[H], Q), {});
  }
  function B(F) {
    let G = [];
    return F.forEach((Q) => {
      G = [
        ...G,
        Q
      ];
      var H;
      const N = (H = Q == null ? void 0 : Q.plugins) !== null && H !== void 0 ? H : [];
      N.length !== 0 && N.forEach((re) => {
        re.__isOptionsFunction && (re = re());
        var ue;
        G = [
          ...G,
          ...B([
            (ue = re == null ? void 0 : re.config) !== null && ue !== void 0 ? ue : {}
          ])
        ];
      });
    }), G;
  }
  function b(F) {
    return [
      ...F
    ].reduceRight((Q, H) => E(H) ? H({
      corePlugins: Q
    }) : (0, n.default)(H, Q), r.default);
  }
  function L(F) {
    return [
      ...F
    ].reduceRight((Q, H) => [
      ...Q,
      ...H
    ], []);
  }
  function V(F) {
    let G = [
      ...B(F),
      {
        prefix: "",
        important: !1,
        separator: ":"
      }
    ];
    var Q, H;
    return (0, u.normalizeConfig)((0, a.defaults)({
      theme: R(T(k(G.map((N) => (Q = N == null ? void 0 : N.theme) !== null && Q !== void 0 ? Q : {})))),
      corePlugins: b(G.map((N) => N.corePlugins)),
      plugins: L(F.map((N) => (H = N == null ? void 0 : N.plugins) !== null && H !== void 0 ? H : []))
    }, ...G));
  }
})(Fo);
var Zo = {}, Jo = {
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
      return i;
    }
  });
  const t = /* @__PURE__ */ n(Jo), r = ti;
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
})(Zo);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const t = /* @__PURE__ */ n(Fo), r = /* @__PURE__ */ n(Zo);
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
})(Ro);
let Mi = Ro;
var ud = (Mi.__esModule ? Mi : { default: Mi }).default;
const el = /* @__PURE__ */ nn(ud);
var tl = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const t = Ua, r = /* @__PURE__ */ n(Jo);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const i = (0, t.cloneDeep)(r.default.theme);
})(tl);
let Ai = tl;
var cd = (Ai.__esModule ? Ai : { default: Ai }).default;
const Ws = /* @__PURE__ */ nn(cd);
var rl = {}, nl = {};
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
})(nl);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = /* @__PURE__ */ r(nl);
  function r(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  const n = t.default;
})(rl);
let Ri = rl;
var il = (Ri.__esModule ? Ri : { default: Ri }).default;
const zs = /* @__PURE__ */ nn(il);
let Fi = Ya;
var al = (Fi.__esModule ? Fi : { default: Fi }).default;
const yr = /* @__PURE__ */ nn(al);
var Hn = { exports: {} };
Hn.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", i = 800, a = 16, s = 9007199254740991, u = "[object Arguments]", o = "[object Array]", l = "[object AsyncFunction]", f = "[object Boolean]", m = "[object Date]", g = "[object Error]", O = "[object Function]", E = "[object GeneratorFunction]", h = "[object Map]", c = "[object Number]", p = "[object Null]", _ = "[object Object]", k = "[object Proxy]", w = "[object RegExp]", T = "[object Set]", D = "[object String]", R = "[object Undefined]", B = "[object WeakMap]", b = "[object ArrayBuffer]", L = "[object DataView]", V = "[object Float32Array]", F = "[object Float64Array]", G = "[object Int8Array]", Q = "[object Int16Array]", H = "[object Int32Array]", N = "[object Uint8Array]", re = "[object Uint8ClampedArray]", ue = "[object Uint16Array]", ce = "[object Uint32Array]", be = /[\\^$.*+?()[\]{}|]/g, te = /^\[object .+?Constructor\]$/, X = /^(?:0|[1-9]\d*)$/, z = {};
  z[V] = z[F] = z[G] = z[Q] = z[H] = z[N] = z[re] = z[ue] = z[ce] = !0, z[u] = z[o] = z[b] = z[f] = z[L] = z[m] = z[g] = z[O] = z[h] = z[c] = z[_] = z[w] = z[T] = z[D] = z[B] = !1;
  var A = typeof br == "object" && br && br.Object === Object && br, $ = typeof self == "object" && self && self.Object === Object && self, ie = A || $ || Function("return this")(), Y = t && !t.nodeType && t, fe = Y && !0 && e && !e.nodeType && e, ke = fe && fe.exports === Y, ge = ke && A.process, he = function() {
    try {
      var v = fe && fe.require && fe.require("util").types;
      return v || ge && ge.binding && ge.binding("util");
    } catch {
    }
  }(), Ie = he && he.isTypedArray;
  function x(v, C, M) {
    switch (M.length) {
      case 0:
        return v.call(C);
      case 1:
        return v.call(C, M[0]);
      case 2:
        return v.call(C, M[0], M[1]);
      case 3:
        return v.call(C, M[0], M[1], M[2]);
    }
    return v.apply(C, M);
  }
  function y(v, C) {
    for (var M = -1, oe = Array(v); ++M < v; )
      oe[M] = C(M);
    return oe;
  }
  function I(v) {
    return function(C) {
      return v(C);
    };
  }
  function J(v, C) {
    return v == null ? void 0 : v[C];
  }
  function de(v, C) {
    return function(M) {
      return v(C(M));
    };
  }
  var ye = Array.prototype, Ye = Function.prototype, ze = Object.prototype, lt = ie["__core-js_shared__"], mt = Ye.toString, ut = ze.hasOwnProperty, Jt = function() {
    var v = /[^.]+$/.exec(lt && lt.keys && lt.keys.IE_PROTO || "");
    return v ? "Symbol(src)_1." + v : "";
  }(), Vt = ze.toString, Xe = mt.call(Object), U = RegExp(
    "^" + mt.call(ut).replace(be, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), q = ke ? ie.Buffer : void 0, Oe = ie.Symbol, Ve = ie.Uint8Array, St = q ? q.allocUnsafe : void 0, Ir = de(Object.getPrototypeOf, Object), er = Object.create, tr = ze.propertyIsEnumerable, xi = ye.splice, Ht = Oe ? Oe.toStringTag : void 0, Nn = function() {
    try {
      var v = Oi(Object, "defineProperty");
      return v({}, "", {}), v;
    } catch {
    }
  }(), Zu = q ? q.isBuffer : void 0, Cs = Math.max, Ju = Date.now, Ds = Oi(ie, "Map"), cn = Oi(Object, "create"), ec = function() {
    function v() {
    }
    return function(C) {
      if (!Nr(C))
        return {};
      if (er)
        return er(C);
      v.prototype = C;
      var M = new v();
      return v.prototype = void 0, M;
    };
  }();
  function Pr(v) {
    var C = -1, M = v == null ? 0 : v.length;
    for (this.clear(); ++C < M; ) {
      var oe = v[C];
      this.set(oe[0], oe[1]);
    }
  }
  function tc() {
    this.__data__ = cn ? cn(null) : {}, this.size = 0;
  }
  function rc(v) {
    var C = this.has(v) && delete this.__data__[v];
    return this.size -= C ? 1 : 0, C;
  }
  function nc(v) {
    var C = this.__data__;
    if (cn) {
      var M = C[v];
      return M === n ? void 0 : M;
    }
    return ut.call(C, v) ? C[v] : void 0;
  }
  function ic(v) {
    var C = this.__data__;
    return cn ? C[v] !== void 0 : ut.call(C, v);
  }
  function ac(v, C) {
    var M = this.__data__;
    return this.size += this.has(v) ? 0 : 1, M[v] = cn && C === void 0 ? n : C, this;
  }
  Pr.prototype.clear = tc, Pr.prototype.delete = rc, Pr.prototype.get = nc, Pr.prototype.has = ic, Pr.prototype.set = ac;
  function rr(v) {
    var C = -1, M = v == null ? 0 : v.length;
    for (this.clear(); ++C < M; ) {
      var oe = v[C];
      this.set(oe[0], oe[1]);
    }
  }
  function sc() {
    this.__data__ = [], this.size = 0;
  }
  function oc(v) {
    var C = this.__data__, M = Ln(C, v);
    if (M < 0)
      return !1;
    var oe = C.length - 1;
    return M == oe ? C.pop() : xi.call(C, M, 1), --this.size, !0;
  }
  function lc(v) {
    var C = this.__data__, M = Ln(C, v);
    return M < 0 ? void 0 : C[M][1];
  }
  function uc(v) {
    return Ln(this.__data__, v) > -1;
  }
  function cc(v, C) {
    var M = this.__data__, oe = Ln(M, v);
    return oe < 0 ? (++this.size, M.push([v, C])) : M[oe][1] = C, this;
  }
  rr.prototype.clear = sc, rr.prototype.delete = oc, rr.prototype.get = lc, rr.prototype.has = uc, rr.prototype.set = cc;
  function Vr(v) {
    var C = -1, M = v == null ? 0 : v.length;
    for (this.clear(); ++C < M; ) {
      var oe = v[C];
      this.set(oe[0], oe[1]);
    }
  }
  function dc() {
    this.size = 0, this.__data__ = {
      hash: new Pr(),
      map: new (Ds || rr)(),
      string: new Pr()
    };
  }
  function fc(v) {
    var C = An(this, v).delete(v);
    return this.size -= C ? 1 : 0, C;
  }
  function hc(v) {
    return An(this, v).get(v);
  }
  function mc(v) {
    return An(this, v).has(v);
  }
  function pc(v, C) {
    var M = An(this, v), oe = M.size;
    return M.set(v, C), this.size += M.size == oe ? 0 : 1, this;
  }
  Vr.prototype.clear = dc, Vr.prototype.delete = fc, Vr.prototype.get = hc, Vr.prototype.has = mc, Vr.prototype.set = pc;
  function Hr(v) {
    var C = this.__data__ = new rr(v);
    this.size = C.size;
  }
  function gc() {
    this.__data__ = new rr(), this.size = 0;
  }
  function _c(v) {
    var C = this.__data__, M = C.delete(v);
    return this.size = C.size, M;
  }
  function yc(v) {
    return this.__data__.get(v);
  }
  function vc(v) {
    return this.__data__.has(v);
  }
  function bc(v, C) {
    var M = this.__data__;
    if (M instanceof rr) {
      var oe = M.__data__;
      if (!Ds || oe.length < r - 1)
        return oe.push([v, C]), this.size = ++M.size, this;
      M = this.__data__ = new Vr(oe);
    }
    return M.set(v, C), this.size = M.size, this;
  }
  Hr.prototype.clear = gc, Hr.prototype.delete = _c, Hr.prototype.get = yc, Hr.prototype.has = vc, Hr.prototype.set = bc;
  function wc(v, C) {
    var M = Di(v), oe = !M && Ci(v), Ne = !M && !oe && Ms(v), Ue = !M && !oe && !Ne && Rs(v), Qe = M || oe || Ne || Ue, Pe = Qe ? y(v.length, String) : [], Ze = Pe.length;
    for (var It in v)
      (C || ut.call(v, It)) && !(Qe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (It == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Ne && (It == "offset" || It == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Ue && (It == "buffer" || It == "byteLength" || It == "byteOffset") || // Skip index properties.
      Ns(It, Ze))) && Pe.push(It);
    return Pe;
  }
  function Si(v, C, M) {
    (M !== void 0 && !Rn(v[C], M) || M === void 0 && !(C in v)) && Ti(v, C, M);
  }
  function kc(v, C, M) {
    var oe = v[C];
    (!(ut.call(v, C) && Rn(oe, M)) || M === void 0 && !(C in v)) && Ti(v, C, M);
  }
  function Ln(v, C) {
    for (var M = v.length; M--; )
      if (Rn(v[M][0], C))
        return M;
    return -1;
  }
  function Ti(v, C, M) {
    C == "__proto__" && Nn ? Nn(v, C, {
      configurable: !0,
      enumerable: !0,
      value: M,
      writable: !0
    }) : v[C] = M;
  }
  var xc = Rc();
  function Mn(v) {
    return v == null ? v === void 0 ? R : p : Ht && Ht in Object(v) ? Fc(v) : Vc(v);
  }
  function Is(v) {
    return dn(v) && Mn(v) == u;
  }
  function Sc(v) {
    if (!Nr(v) || Wc(v))
      return !1;
    var C = Pi(v) ? U : te;
    return C.test(Gc(v));
  }
  function Tc(v) {
    return dn(v) && As(v.length) && !!z[Mn(v)];
  }
  function Oc(v) {
    if (!Nr(v))
      return zc(v);
    var C = Ls(v), M = [];
    for (var oe in v)
      oe == "constructor" && (C || !ut.call(v, oe)) || M.push(oe);
    return M;
  }
  function Ps(v, C, M, oe, Ne) {
    v !== C && xc(C, function(Ue, Qe) {
      if (Ne || (Ne = new Hr()), Nr(Ue))
        Ec(v, C, Qe, M, Ps, oe, Ne);
      else {
        var Pe = oe ? oe(Ei(v, Qe), Ue, Qe + "", v, C, Ne) : void 0;
        Pe === void 0 && (Pe = Ue), Si(v, Qe, Pe);
      }
    }, Fs);
  }
  function Ec(v, C, M, oe, Ne, Ue, Qe) {
    var Pe = Ei(v, M), Ze = Ei(C, M), It = Qe.get(Ze);
    if (It) {
      Si(v, M, It);
      return;
    }
    var Tt = Ue ? Ue(Pe, Ze, M + "", v, C, Qe) : void 0, fn = Tt === void 0;
    if (fn) {
      var Ni = Di(Ze), Li = !Ni && Ms(Ze), Bs = !Ni && !Li && Rs(Ze);
      Tt = Ze, Ni || Li || Bs ? Di(Pe) ? Tt = Pe : $c(Pe) ? Tt = Lc(Pe) : Li ? (fn = !1, Tt = Ic(Ze, !0)) : Bs ? (fn = !1, Tt = Nc(Ze, !0)) : Tt = [] : Kc(Ze) || Ci(Ze) ? (Tt = Pe, Ci(Pe) ? Tt = Xc(Pe) : (!Nr(Pe) || Pi(Pe)) && (Tt = Yc(Ze))) : fn = !1;
    }
    fn && (Qe.set(Ze, Tt), Ne(Tt, Ze, oe, Ue, Qe), Qe.delete(Ze)), Si(v, M, Tt);
  }
  function Cc(v, C) {
    return jc(Hc(v, C, Ys), v + "");
  }
  var Dc = Nn ? function(v, C) {
    return Nn(v, "toString", {
      configurable: !0,
      enumerable: !1,
      value: Zc(C),
      writable: !0
    });
  } : Ys;
  function Ic(v, C) {
    if (C)
      return v.slice();
    var M = v.length, oe = St ? St(M) : new v.constructor(M);
    return v.copy(oe), oe;
  }
  function Pc(v) {
    var C = new v.constructor(v.byteLength);
    return new Ve(C).set(new Ve(v)), C;
  }
  function Nc(v, C) {
    var M = C ? Pc(v.buffer) : v.buffer;
    return new v.constructor(M, v.byteOffset, v.length);
  }
  function Lc(v, C) {
    var M = -1, oe = v.length;
    for (C || (C = Array(oe)); ++M < oe; )
      C[M] = v[M];
    return C;
  }
  function Mc(v, C, M, oe) {
    var Ne = !M;
    M || (M = {});
    for (var Ue = -1, Qe = C.length; ++Ue < Qe; ) {
      var Pe = C[Ue], Ze = oe ? oe(M[Pe], v[Pe], Pe, M, v) : void 0;
      Ze === void 0 && (Ze = v[Pe]), Ne ? Ti(M, Pe, Ze) : kc(M, Pe, Ze);
    }
    return M;
  }
  function Ac(v) {
    return Cc(function(C, M) {
      var oe = -1, Ne = M.length, Ue = Ne > 1 ? M[Ne - 1] : void 0, Qe = Ne > 2 ? M[2] : void 0;
      for (Ue = v.length > 3 && typeof Ue == "function" ? (Ne--, Ue) : void 0, Qe && Bc(M[0], M[1], Qe) && (Ue = Ne < 3 ? void 0 : Ue, Ne = 1), C = Object(C); ++oe < Ne; ) {
        var Pe = M[oe];
        Pe && v(C, Pe, oe, Ue);
      }
      return C;
    });
  }
  function Rc(v) {
    return function(C, M, oe) {
      for (var Ne = -1, Ue = Object(C), Qe = oe(C), Pe = Qe.length; Pe--; ) {
        var Ze = Qe[v ? Pe : ++Ne];
        if (M(Ue[Ze], Ze, Ue) === !1)
          break;
      }
      return C;
    };
  }
  function An(v, C) {
    var M = v.__data__;
    return Uc(C) ? M[typeof C == "string" ? "string" : "hash"] : M.map;
  }
  function Oi(v, C) {
    var M = J(v, C);
    return Sc(M) ? M : void 0;
  }
  function Fc(v) {
    var C = ut.call(v, Ht), M = v[Ht];
    try {
      v[Ht] = void 0;
      var oe = !0;
    } catch {
    }
    var Ne = Vt.call(v);
    return oe && (C ? v[Ht] = M : delete v[Ht]), Ne;
  }
  function Yc(v) {
    return typeof v.constructor == "function" && !Ls(v) ? ec(Ir(v)) : {};
  }
  function Ns(v, C) {
    var M = typeof v;
    return C = C ?? s, !!C && (M == "number" || M != "symbol" && X.test(v)) && v > -1 && v % 1 == 0 && v < C;
  }
  function Bc(v, C, M) {
    if (!Nr(M))
      return !1;
    var oe = typeof C;
    return (oe == "number" ? Ii(M) && Ns(C, M.length) : oe == "string" && C in M) ? Rn(M[C], v) : !1;
  }
  function Uc(v) {
    var C = typeof v;
    return C == "string" || C == "number" || C == "symbol" || C == "boolean" ? v !== "__proto__" : v === null;
  }
  function Wc(v) {
    return !!Jt && Jt in v;
  }
  function Ls(v) {
    var C = v && v.constructor, M = typeof C == "function" && C.prototype || ze;
    return v === M;
  }
  function zc(v) {
    var C = [];
    if (v != null)
      for (var M in Object(v))
        C.push(M);
    return C;
  }
  function Vc(v) {
    return Vt.call(v);
  }
  function Hc(v, C, M) {
    return C = Cs(C === void 0 ? v.length - 1 : C, 0), function() {
      for (var oe = arguments, Ne = -1, Ue = Cs(oe.length - C, 0), Qe = Array(Ue); ++Ne < Ue; )
        Qe[Ne] = oe[C + Ne];
      Ne = -1;
      for (var Pe = Array(C + 1); ++Ne < C; )
        Pe[Ne] = oe[Ne];
      return Pe[C] = M(Qe), x(v, this, Pe);
    };
  }
  function Ei(v, C) {
    if (!(C === "constructor" && typeof v[C] == "function") && C != "__proto__")
      return v[C];
  }
  var jc = qc(Dc);
  function qc(v) {
    var C = 0, M = 0;
    return function() {
      var oe = Ju(), Ne = a - (oe - M);
      if (M = oe, Ne > 0) {
        if (++C >= i)
          return arguments[0];
      } else
        C = 0;
      return v.apply(void 0, arguments);
    };
  }
  function Gc(v) {
    if (v != null) {
      try {
        return mt.call(v);
      } catch {
      }
      try {
        return v + "";
      } catch {
      }
    }
    return "";
  }
  function Rn(v, C) {
    return v === C || v !== v && C !== C;
  }
  var Ci = Is(function() {
    return arguments;
  }()) ? Is : function(v) {
    return dn(v) && ut.call(v, "callee") && !tr.call(v, "callee");
  }, Di = Array.isArray;
  function Ii(v) {
    return v != null && As(v.length) && !Pi(v);
  }
  function $c(v) {
    return dn(v) && Ii(v);
  }
  var Ms = Zu || Jc;
  function Pi(v) {
    if (!Nr(v))
      return !1;
    var C = Mn(v);
    return C == O || C == E || C == l || C == k;
  }
  function As(v) {
    return typeof v == "number" && v > -1 && v % 1 == 0 && v <= s;
  }
  function Nr(v) {
    var C = typeof v;
    return v != null && (C == "object" || C == "function");
  }
  function dn(v) {
    return v != null && typeof v == "object";
  }
  function Kc(v) {
    if (!dn(v) || Mn(v) != _)
      return !1;
    var C = Ir(v);
    if (C === null)
      return !0;
    var M = ut.call(C, "constructor") && C.constructor;
    return typeof M == "function" && M instanceof M && mt.call(M) == Xe;
  }
  var Rs = Ie ? I(Ie) : Tc;
  function Xc(v) {
    return Mc(v, Fs(v));
  }
  function Fs(v) {
    return Ii(v) ? wc(v, !0) : Oc(v);
  }
  var Qc = Ac(function(v, C, M) {
    Ps(v, C, M);
  });
  function Zc(v) {
    return function() {
      return v;
    };
  }
  function Ys(v) {
    return v;
  }
  function Jc() {
    return !1;
  }
  e.exports = Qc;
})(Hn, Hn.exports);
var dd = Hn.exports;
function fd() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return hd(e) ? e : [e];
}
var hd = Array.isArray, md = fd;
const S = al, ve = (e) => e.toFixed(7).replace(/(\.[0-9]+?)0+$/, "$1").replace(/\.0$/, ""), pt = (e) => `${ve(e / 16)}rem`, d = (e, t) => `${ve(e / t)}em`, jt = (e) => {
  e = e.replace("#", ""), e = e.length === 3 ? e.replace(/./g, "$&$&") : e;
  const t = parseInt(e.substring(0, 2), 16), r = parseInt(e.substring(2, 4), 16), n = parseInt(e.substring(4, 6), 16);
  return `${t} ${r} ${n}`;
};
let Yi = {
  sm: {
    css: [
      {
        fontSize: pt(14),
        lineHeight: ve(24 / 14),
        p: {
          marginTop: d(16, 14),
          marginBottom: d(16, 14)
        },
        '[class~="lead"]': {
          fontSize: d(18, 14),
          lineHeight: ve(28 / 18),
          marginTop: d(16, 18),
          marginBottom: d(16, 18)
        },
        blockquote: {
          marginTop: d(24, 18),
          marginBottom: d(24, 18),
          paddingLeft: d(20, 18)
        },
        h1: {
          fontSize: d(30, 14),
          marginTop: "0",
          marginBottom: d(24, 30),
          lineHeight: ve(36 / 30)
        },
        h2: {
          fontSize: d(20, 14),
          marginTop: d(32, 20),
          marginBottom: d(16, 20),
          lineHeight: ve(28 / 20)
        },
        h3: {
          fontSize: d(18, 14),
          marginTop: d(28, 18),
          marginBottom: d(8, 18),
          lineHeight: ve(28 / 18)
        },
        h4: {
          marginTop: d(20, 14),
          marginBottom: d(8, 14),
          lineHeight: ve(20 / 14)
        },
        img: {
          marginTop: d(24, 14),
          marginBottom: d(24, 14)
        },
        picture: {
          marginTop: d(24, 14),
          marginBottom: d(24, 14)
        },
        "picture > img": {
          marginTop: "0",
          marginBottom: "0"
        },
        video: {
          marginTop: d(24, 14),
          marginBottom: d(24, 14)
        },
        kbd: {
          fontSize: d(12, 14),
          borderRadius: pt(5),
          paddingTop: d(2, 14),
          paddingRight: d(5, 14),
          paddingBottom: d(2, 14),
          paddingLeft: d(5, 14)
        },
        code: {
          fontSize: d(12, 14)
        },
        "h2 code": {
          fontSize: d(18, 20)
        },
        "h3 code": {
          fontSize: d(16, 18)
        },
        pre: {
          fontSize: d(12, 14),
          lineHeight: ve(20 / 12),
          marginTop: d(20, 12),
          marginBottom: d(20, 12),
          borderRadius: pt(4),
          paddingTop: d(8, 12),
          paddingRight: d(12, 12),
          paddingBottom: d(8, 12),
          paddingLeft: d(12, 12)
        },
        ol: {
          marginTop: d(16, 14),
          marginBottom: d(16, 14),
          paddingLeft: d(22, 14)
        },
        ul: {
          marginTop: d(16, 14),
          marginBottom: d(16, 14),
          paddingLeft: d(22, 14)
        },
        li: {
          marginTop: d(4, 14),
          marginBottom: d(4, 14)
        },
        "ol > li": {
          paddingLeft: d(6, 14)
        },
        "ul > li": {
          paddingLeft: d(6, 14)
        },
        "> ul > li p": {
          marginTop: d(8, 14),
          marginBottom: d(8, 14)
        },
        "> ul > li > *:first-child": {
          marginTop: d(16, 14)
        },
        "> ul > li > *:last-child": {
          marginBottom: d(16, 14)
        },
        "> ol > li > *:first-child": {
          marginTop: d(16, 14)
        },
        "> ol > li > *:last-child": {
          marginBottom: d(16, 14)
        },
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: d(8, 14),
          marginBottom: d(8, 14)
        },
        dl: {
          marginTop: d(16, 14),
          marginBottom: d(16, 14)
        },
        dt: {
          marginTop: d(16, 14)
        },
        dd: {
          marginTop: d(4, 14),
          paddingLeft: d(22, 14)
        },
        hr: {
          marginTop: d(40, 14),
          marginBottom: d(40, 14)
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
          fontSize: d(12, 14),
          lineHeight: ve(18 / 12)
        },
        "thead th": {
          paddingRight: d(12, 12),
          paddingBottom: d(8, 12),
          paddingLeft: d(12, 12)
        },
        "thead th:first-child": {
          paddingLeft: "0"
        },
        "thead th:last-child": {
          paddingRight: "0"
        },
        "tbody td, tfoot td": {
          paddingTop: d(8, 12),
          paddingRight: d(12, 12),
          paddingBottom: d(8, 12),
          paddingLeft: d(12, 12)
        },
        "tbody td:first-child, tfoot td:first-child": {
          paddingLeft: "0"
        },
        "tbody td:last-child, tfoot td:last-child": {
          paddingRight: "0"
        },
        figure: {
          marginTop: d(24, 14),
          marginBottom: d(24, 14)
        },
        "figure > *": {
          marginTop: "0",
          marginBottom: "0"
        },
        figcaption: {
          fontSize: d(12, 14),
          lineHeight: ve(16 / 12),
          marginTop: d(8, 12)
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
        fontSize: pt(16),
        lineHeight: ve(28 / 16),
        p: {
          marginTop: d(20, 16),
          marginBottom: d(20, 16)
        },
        '[class~="lead"]': {
          fontSize: d(20, 16),
          lineHeight: ve(32 / 20),
          marginTop: d(24, 20),
          marginBottom: d(24, 20)
        },
        blockquote: {
          marginTop: d(32, 20),
          marginBottom: d(32, 20),
          paddingLeft: d(20, 20)
        },
        h1: {
          fontSize: d(36, 16),
          marginTop: "0",
          marginBottom: d(32, 36),
          lineHeight: ve(40 / 36)
        },
        h2: {
          fontSize: d(24, 16),
          marginTop: d(48, 24),
          marginBottom: d(24, 24),
          lineHeight: ve(32 / 24)
        },
        h3: {
          fontSize: d(20, 16),
          marginTop: d(32, 20),
          marginBottom: d(12, 20),
          lineHeight: ve(32 / 20)
        },
        h4: {
          marginTop: d(24, 16),
          marginBottom: d(8, 16),
          lineHeight: ve(24 / 16)
        },
        img: {
          marginTop: d(32, 16),
          marginBottom: d(32, 16)
        },
        picture: {
          marginTop: d(32, 16),
          marginBottom: d(32, 16)
        },
        "picture > img": {
          marginTop: "0",
          marginBottom: "0"
        },
        video: {
          marginTop: d(32, 16),
          marginBottom: d(32, 16)
        },
        kbd: {
          fontSize: d(14, 16),
          borderRadius: pt(5),
          paddingTop: d(3, 16),
          paddingRight: d(6, 16),
          paddingBottom: d(3, 16),
          paddingLeft: d(6, 16)
        },
        code: {
          fontSize: d(14, 16)
        },
        "h2 code": {
          fontSize: d(21, 24)
        },
        "h3 code": {
          fontSize: d(18, 20)
        },
        pre: {
          fontSize: d(14, 16),
          lineHeight: ve(24 / 14),
          marginTop: d(24, 14),
          marginBottom: d(24, 14),
          borderRadius: pt(6),
          paddingTop: d(12, 14),
          paddingRight: d(16, 14),
          paddingBottom: d(12, 14),
          paddingLeft: d(16, 14)
        },
        ol: {
          marginTop: d(20, 16),
          marginBottom: d(20, 16),
          paddingLeft: d(26, 16)
        },
        ul: {
          marginTop: d(20, 16),
          marginBottom: d(20, 16),
          paddingLeft: d(26, 16)
        },
        li: {
          marginTop: d(8, 16),
          marginBottom: d(8, 16)
        },
        "ol > li": {
          paddingLeft: d(6, 16)
        },
        "ul > li": {
          paddingLeft: d(6, 16)
        },
        "> ul > li p": {
          marginTop: d(12, 16),
          marginBottom: d(12, 16)
        },
        "> ul > li > *:first-child": {
          marginTop: d(20, 16)
        },
        "> ul > li > *:last-child": {
          marginBottom: d(20, 16)
        },
        "> ol > li > *:first-child": {
          marginTop: d(20, 16)
        },
        "> ol > li > *:last-child": {
          marginBottom: d(20, 16)
        },
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: d(12, 16),
          marginBottom: d(12, 16)
        },
        dl: {
          marginTop: d(20, 16),
          marginBottom: d(20, 16)
        },
        dt: {
          marginTop: d(20, 16)
        },
        dd: {
          marginTop: d(8, 16),
          paddingLeft: d(26, 16)
        },
        hr: {
          marginTop: d(48, 16),
          marginBottom: d(48, 16)
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
          fontSize: d(14, 16),
          lineHeight: ve(24 / 14)
        },
        "thead th": {
          paddingRight: d(8, 14),
          paddingBottom: d(8, 14),
          paddingLeft: d(8, 14)
        },
        "thead th:first-child": {
          paddingLeft: "0"
        },
        "thead th:last-child": {
          paddingRight: "0"
        },
        "tbody td, tfoot td": {
          paddingTop: d(8, 14),
          paddingRight: d(8, 14),
          paddingBottom: d(8, 14),
          paddingLeft: d(8, 14)
        },
        "tbody td:first-child, tfoot td:first-child": {
          paddingLeft: "0"
        },
        "tbody td:last-child, tfoot td:last-child": {
          paddingRight: "0"
        },
        figure: {
          marginTop: d(32, 16),
          marginBottom: d(32, 16)
        },
        "figure > *": {
          marginTop: "0",
          marginBottom: "0"
        },
        figcaption: {
          fontSize: d(14, 16),
          lineHeight: ve(20 / 14),
          marginTop: d(12, 14)
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
        fontSize: pt(18),
        lineHeight: ve(32 / 18),
        p: {
          marginTop: d(24, 18),
          marginBottom: d(24, 18)
        },
        '[class~="lead"]': {
          fontSize: d(22, 18),
          lineHeight: ve(32 / 22),
          marginTop: d(24, 22),
          marginBottom: d(24, 22)
        },
        blockquote: {
          marginTop: d(40, 24),
          marginBottom: d(40, 24),
          paddingLeft: d(24, 24)
        },
        h1: {
          fontSize: d(48, 18),
          marginTop: "0",
          marginBottom: d(40, 48),
          lineHeight: ve(48 / 48)
        },
        h2: {
          fontSize: d(30, 18),
          marginTop: d(56, 30),
          marginBottom: d(32, 30),
          lineHeight: ve(40 / 30)
        },
        h3: {
          fontSize: d(24, 18),
          marginTop: d(40, 24),
          marginBottom: d(16, 24),
          lineHeight: ve(36 / 24)
        },
        h4: {
          marginTop: d(32, 18),
          marginBottom: d(8, 18),
          lineHeight: ve(28 / 18)
        },
        img: {
          marginTop: d(32, 18),
          marginBottom: d(32, 18)
        },
        picture: {
          marginTop: d(32, 18),
          marginBottom: d(32, 18)
        },
        "picture > img": {
          marginTop: "0",
          marginBottom: "0"
        },
        video: {
          marginTop: d(32, 18),
          marginBottom: d(32, 18)
        },
        kbd: {
          fontSize: d(16, 18),
          borderRadius: pt(5),
          paddingTop: d(4, 18),
          paddingRight: d(8, 18),
          paddingBottom: d(4, 18),
          paddingLeft: d(8, 18)
        },
        code: {
          fontSize: d(16, 18)
        },
        "h2 code": {
          fontSize: d(26, 30)
        },
        "h3 code": {
          fontSize: d(21, 24)
        },
        pre: {
          fontSize: d(16, 18),
          lineHeight: ve(28 / 16),
          marginTop: d(32, 16),
          marginBottom: d(32, 16),
          borderRadius: pt(6),
          paddingTop: d(16, 16),
          paddingRight: d(24, 16),
          paddingBottom: d(16, 16),
          paddingLeft: d(24, 16)
        },
        ol: {
          marginTop: d(24, 18),
          marginBottom: d(24, 18),
          paddingLeft: d(28, 18)
        },
        ul: {
          marginTop: d(24, 18),
          marginBottom: d(24, 18),
          paddingLeft: d(28, 18)
        },
        li: {
          marginTop: d(12, 18),
          marginBottom: d(12, 18)
        },
        "ol > li": {
          paddingLeft: d(8, 18)
        },
        "ul > li": {
          paddingLeft: d(8, 18)
        },
        "> ul > li p": {
          marginTop: d(16, 18),
          marginBottom: d(16, 18)
        },
        "> ul > li > *:first-child": {
          marginTop: d(24, 18)
        },
        "> ul > li > *:last-child": {
          marginBottom: d(24, 18)
        },
        "> ol > li > *:first-child": {
          marginTop: d(24, 18)
        },
        "> ol > li > *:last-child": {
          marginBottom: d(24, 18)
        },
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: d(16, 18),
          marginBottom: d(16, 18)
        },
        dl: {
          marginTop: d(24, 18),
          marginBottom: d(24, 18)
        },
        dt: {
          marginTop: d(24, 18)
        },
        dd: {
          marginTop: d(12, 18),
          paddingLeft: d(28, 18)
        },
        hr: {
          marginTop: d(56, 18),
          marginBottom: d(56, 18)
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
          fontSize: d(16, 18),
          lineHeight: ve(24 / 16)
        },
        "thead th": {
          paddingRight: d(12, 16),
          paddingBottom: d(12, 16),
          paddingLeft: d(12, 16)
        },
        "thead th:first-child": {
          paddingLeft: "0"
        },
        "thead th:last-child": {
          paddingRight: "0"
        },
        "tbody td, tfoot td": {
          paddingTop: d(12, 16),
          paddingRight: d(12, 16),
          paddingBottom: d(12, 16),
          paddingLeft: d(12, 16)
        },
        "tbody td:first-child, tfoot td:first-child": {
          paddingLeft: "0"
        },
        "tbody td:last-child, tfoot td:last-child": {
          paddingRight: "0"
        },
        figure: {
          marginTop: d(32, 18),
          marginBottom: d(32, 18)
        },
        "figure > *": {
          marginTop: "0",
          marginBottom: "0"
        },
        figcaption: {
          fontSize: d(16, 18),
          lineHeight: ve(24 / 16),
          marginTop: d(16, 16)
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
        fontSize: pt(20),
        lineHeight: ve(36 / 20),
        p: {
          marginTop: d(24, 20),
          marginBottom: d(24, 20)
        },
        '[class~="lead"]': {
          fontSize: d(24, 20),
          lineHeight: ve(36 / 24),
          marginTop: d(24, 24),
          marginBottom: d(24, 24)
        },
        blockquote: {
          marginTop: d(48, 30),
          marginBottom: d(48, 30),
          paddingLeft: d(32, 30)
        },
        h1: {
          fontSize: d(56, 20),
          marginTop: "0",
          marginBottom: d(48, 56),
          lineHeight: ve(56 / 56)
        },
        h2: {
          fontSize: d(36, 20),
          marginTop: d(56, 36),
          marginBottom: d(32, 36),
          lineHeight: ve(40 / 36)
        },
        h3: {
          fontSize: d(30, 20),
          marginTop: d(48, 30),
          marginBottom: d(20, 30),
          lineHeight: ve(40 / 30)
        },
        h4: {
          marginTop: d(36, 20),
          marginBottom: d(12, 20),
          lineHeight: ve(32 / 20)
        },
        img: {
          marginTop: d(40, 20),
          marginBottom: d(40, 20)
        },
        picture: {
          marginTop: d(40, 20),
          marginBottom: d(40, 20)
        },
        "picture > img": {
          marginTop: "0",
          marginBottom: "0"
        },
        video: {
          marginTop: d(40, 20),
          marginBottom: d(40, 20)
        },
        kbd: {
          fontSize: d(18, 20),
          borderRadius: pt(5),
          paddingTop: d(5, 20),
          paddingRight: d(8, 20),
          paddingBottom: d(5, 20),
          paddingLeft: d(8, 20)
        },
        code: {
          fontSize: d(18, 20)
        },
        "h2 code": {
          fontSize: d(31, 36)
        },
        "h3 code": {
          fontSize: d(27, 30)
        },
        pre: {
          fontSize: d(18, 20),
          lineHeight: ve(32 / 18),
          marginTop: d(36, 18),
          marginBottom: d(36, 18),
          borderRadius: pt(8),
          paddingTop: d(20, 18),
          paddingRight: d(24, 18),
          paddingBottom: d(20, 18),
          paddingLeft: d(24, 18)
        },
        ol: {
          marginTop: d(24, 20),
          marginBottom: d(24, 20),
          paddingLeft: d(32, 20)
        },
        ul: {
          marginTop: d(24, 20),
          marginBottom: d(24, 20),
          paddingLeft: d(32, 20)
        },
        li: {
          marginTop: d(12, 20),
          marginBottom: d(12, 20)
        },
        "ol > li": {
          paddingLeft: d(8, 20)
        },
        "ul > li": {
          paddingLeft: d(8, 20)
        },
        "> ul > li p": {
          marginTop: d(16, 20),
          marginBottom: d(16, 20)
        },
        "> ul > li > *:first-child": {
          marginTop: d(24, 20)
        },
        "> ul > li > *:last-child": {
          marginBottom: d(24, 20)
        },
        "> ol > li > *:first-child": {
          marginTop: d(24, 20)
        },
        "> ol > li > *:last-child": {
          marginBottom: d(24, 20)
        },
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: d(16, 20),
          marginBottom: d(16, 20)
        },
        dl: {
          marginTop: d(24, 20),
          marginBottom: d(24, 20)
        },
        dt: {
          marginTop: d(24, 20)
        },
        dd: {
          marginTop: d(12, 20),
          paddingLeft: d(32, 20)
        },
        hr: {
          marginTop: d(56, 20),
          marginBottom: d(56, 20)
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
          fontSize: d(18, 20),
          lineHeight: ve(28 / 18)
        },
        "thead th": {
          paddingRight: d(12, 18),
          paddingBottom: d(16, 18),
          paddingLeft: d(12, 18)
        },
        "thead th:first-child": {
          paddingLeft: "0"
        },
        "thead th:last-child": {
          paddingRight: "0"
        },
        "tbody td, tfoot td": {
          paddingTop: d(16, 18),
          paddingRight: d(12, 18),
          paddingBottom: d(16, 18),
          paddingLeft: d(12, 18)
        },
        "tbody td:first-child, tfoot td:first-child": {
          paddingLeft: "0"
        },
        "tbody td:last-child, tfoot td:last-child": {
          paddingRight: "0"
        },
        figure: {
          marginTop: d(40, 20),
          marginBottom: d(40, 20)
        },
        "figure > *": {
          marginTop: "0",
          marginBottom: "0"
        },
        figcaption: {
          fontSize: d(18, 20),
          lineHeight: ve(28 / 18),
          marginTop: d(18, 18)
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
        fontSize: pt(24),
        lineHeight: ve(40 / 24),
        p: {
          marginTop: d(32, 24),
          marginBottom: d(32, 24)
        },
        '[class~="lead"]': {
          fontSize: d(30, 24),
          lineHeight: ve(44 / 30),
          marginTop: d(32, 30),
          marginBottom: d(32, 30)
        },
        blockquote: {
          marginTop: d(64, 36),
          marginBottom: d(64, 36),
          paddingLeft: d(40, 36)
        },
        h1: {
          fontSize: d(64, 24),
          marginTop: "0",
          marginBottom: d(56, 64),
          lineHeight: ve(64 / 64)
        },
        h2: {
          fontSize: d(48, 24),
          marginTop: d(72, 48),
          marginBottom: d(40, 48),
          lineHeight: ve(52 / 48)
        },
        h3: {
          fontSize: d(36, 24),
          marginTop: d(56, 36),
          marginBottom: d(24, 36),
          lineHeight: ve(44 / 36)
        },
        h4: {
          marginTop: d(40, 24),
          marginBottom: d(16, 24),
          lineHeight: ve(36 / 24)
        },
        img: {
          marginTop: d(48, 24),
          marginBottom: d(48, 24)
        },
        picture: {
          marginTop: d(48, 24),
          marginBottom: d(48, 24)
        },
        "picture > img": {
          marginTop: "0",
          marginBottom: "0"
        },
        video: {
          marginTop: d(48, 24),
          marginBottom: d(48, 24)
        },
        kbd: {
          fontSize: d(20, 24),
          borderRadius: pt(6),
          paddingTop: d(6, 24),
          paddingRight: d(8, 24),
          paddingBottom: d(6, 24),
          paddingLeft: d(8, 24)
        },
        code: {
          fontSize: d(20, 24)
        },
        "h2 code": {
          fontSize: d(42, 48)
        },
        "h3 code": {
          fontSize: d(32, 36)
        },
        pre: {
          fontSize: d(20, 24),
          lineHeight: ve(36 / 20),
          marginTop: d(40, 20),
          marginBottom: d(40, 20),
          borderRadius: pt(8),
          paddingTop: d(24, 20),
          paddingRight: d(32, 20),
          paddingBottom: d(24, 20),
          paddingLeft: d(32, 20)
        },
        ol: {
          marginTop: d(32, 24),
          marginBottom: d(32, 24),
          paddingLeft: d(38, 24)
        },
        ul: {
          marginTop: d(32, 24),
          marginBottom: d(32, 24),
          paddingLeft: d(38, 24)
        },
        li: {
          marginTop: d(12, 24),
          marginBottom: d(12, 24)
        },
        "ol > li": {
          paddingLeft: d(10, 24)
        },
        "ul > li": {
          paddingLeft: d(10, 24)
        },
        "> ul > li p": {
          marginTop: d(20, 24),
          marginBottom: d(20, 24)
        },
        "> ul > li > *:first-child": {
          marginTop: d(32, 24)
        },
        "> ul > li > *:last-child": {
          marginBottom: d(32, 24)
        },
        "> ol > li > *:first-child": {
          marginTop: d(32, 24)
        },
        "> ol > li > *:last-child": {
          marginBottom: d(32, 24)
        },
        "ul ul, ul ol, ol ul, ol ol": {
          marginTop: d(16, 24),
          marginBottom: d(16, 24)
        },
        dl: {
          marginTop: d(32, 24),
          marginBottom: d(32, 24)
        },
        dt: {
          marginTop: d(32, 24)
        },
        dd: {
          marginTop: d(12, 24),
          paddingLeft: d(38, 24)
        },
        hr: {
          marginTop: d(72, 24),
          marginBottom: d(72, 24)
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
          fontSize: d(20, 24),
          lineHeight: ve(28 / 20)
        },
        "thead th": {
          paddingRight: d(12, 20),
          paddingBottom: d(16, 20),
          paddingLeft: d(12, 20)
        },
        "thead th:first-child": {
          paddingLeft: "0"
        },
        "thead th:last-child": {
          paddingRight: "0"
        },
        "tbody td, tfoot td": {
          paddingTop: d(16, 20),
          paddingRight: d(12, 20),
          paddingBottom: d(16, 20),
          paddingLeft: d(12, 20)
        },
        "tbody td:first-child, tfoot td:first-child": {
          paddingLeft: "0"
        },
        "tbody td:last-child, tfoot td:last-child": {
          paddingRight: "0"
        },
        figure: {
          marginTop: d(48, 24),
          marginBottom: d(48, 24)
        },
        "figure > *": {
          marginTop: "0",
          marginBottom: "0"
        },
        figcaption: {
          fontSize: d(20, 24),
          lineHeight: ve(32 / 20),
          marginTop: d(20, 20)
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
  // Gray color themes
  slate: {
    css: {
      "--tw-prose-body": S.slate[700],
      "--tw-prose-headings": S.slate[900],
      "--tw-prose-lead": S.slate[600],
      "--tw-prose-links": S.slate[900],
      "--tw-prose-bold": S.slate[900],
      "--tw-prose-counters": S.slate[500],
      "--tw-prose-bullets": S.slate[300],
      "--tw-prose-hr": S.slate[200],
      "--tw-prose-quotes": S.slate[900],
      "--tw-prose-quote-borders": S.slate[200],
      "--tw-prose-captions": S.slate[500],
      "--tw-prose-kbd": S.slate[900],
      "--tw-prose-kbd-shadows": jt(S.slate[900]),
      "--tw-prose-code": S.slate[900],
      "--tw-prose-pre-code": S.slate[200],
      "--tw-prose-pre-bg": S.slate[800],
      "--tw-prose-th-borders": S.slate[300],
      "--tw-prose-td-borders": S.slate[200],
      "--tw-prose-invert-body": S.slate[300],
      "--tw-prose-invert-headings": S.white,
      "--tw-prose-invert-lead": S.slate[400],
      "--tw-prose-invert-links": S.white,
      "--tw-prose-invert-bold": S.white,
      "--tw-prose-invert-counters": S.slate[400],
      "--tw-prose-invert-bullets": S.slate[600],
      "--tw-prose-invert-hr": S.slate[700],
      "--tw-prose-invert-quotes": S.slate[100],
      "--tw-prose-invert-quote-borders": S.slate[700],
      "--tw-prose-invert-captions": S.slate[400],
      "--tw-prose-invert-kbd": S.white,
      "--tw-prose-invert-kbd-shadows": jt(S.white),
      "--tw-prose-invert-code": S.white,
      "--tw-prose-invert-pre-code": S.slate[300],
      "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
      "--tw-prose-invert-th-borders": S.slate[600],
      "--tw-prose-invert-td-borders": S.slate[700]
    }
  },
  gray: {
    css: {
      "--tw-prose-body": S.gray[700],
      "--tw-prose-headings": S.gray[900],
      "--tw-prose-lead": S.gray[600],
      "--tw-prose-links": S.gray[900],
      "--tw-prose-bold": S.gray[900],
      "--tw-prose-counters": S.gray[500],
      "--tw-prose-bullets": S.gray[300],
      "--tw-prose-hr": S.gray[200],
      "--tw-prose-quotes": S.gray[900],
      "--tw-prose-quote-borders": S.gray[200],
      "--tw-prose-captions": S.gray[500],
      "--tw-prose-kbd": S.gray[900],
      "--tw-prose-kbd-shadows": jt(S.gray[900]),
      "--tw-prose-code": S.gray[900],
      "--tw-prose-pre-code": S.gray[200],
      "--tw-prose-pre-bg": S.gray[800],
      "--tw-prose-th-borders": S.gray[300],
      "--tw-prose-td-borders": S.gray[200],
      "--tw-prose-invert-body": S.gray[300],
      "--tw-prose-invert-headings": S.white,
      "--tw-prose-invert-lead": S.gray[400],
      "--tw-prose-invert-links": S.white,
      "--tw-prose-invert-bold": S.white,
      "--tw-prose-invert-counters": S.gray[400],
      "--tw-prose-invert-bullets": S.gray[600],
      "--tw-prose-invert-hr": S.gray[700],
      "--tw-prose-invert-quotes": S.gray[100],
      "--tw-prose-invert-quote-borders": S.gray[700],
      "--tw-prose-invert-captions": S.gray[400],
      "--tw-prose-invert-kbd": S.white,
      "--tw-prose-invert-kbd-shadows": jt(S.white),
      "--tw-prose-invert-code": S.white,
      "--tw-prose-invert-pre-code": S.gray[300],
      "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
      "--tw-prose-invert-th-borders": S.gray[600],
      "--tw-prose-invert-td-borders": S.gray[700]
    }
  },
  zinc: {
    css: {
      "--tw-prose-body": S.zinc[700],
      "--tw-prose-headings": S.zinc[900],
      "--tw-prose-lead": S.zinc[600],
      "--tw-prose-links": S.zinc[900],
      "--tw-prose-bold": S.zinc[900],
      "--tw-prose-counters": S.zinc[500],
      "--tw-prose-bullets": S.zinc[300],
      "--tw-prose-hr": S.zinc[200],
      "--tw-prose-quotes": S.zinc[900],
      "--tw-prose-quote-borders": S.zinc[200],
      "--tw-prose-captions": S.zinc[500],
      "--tw-prose-kbd": S.zinc[900],
      "--tw-prose-kbd-shadows": jt(S.zinc[900]),
      "--tw-prose-code": S.zinc[900],
      "--tw-prose-pre-code": S.zinc[200],
      "--tw-prose-pre-bg": S.zinc[800],
      "--tw-prose-th-borders": S.zinc[300],
      "--tw-prose-td-borders": S.zinc[200],
      "--tw-prose-invert-body": S.zinc[300],
      "--tw-prose-invert-headings": S.white,
      "--tw-prose-invert-lead": S.zinc[400],
      "--tw-prose-invert-links": S.white,
      "--tw-prose-invert-bold": S.white,
      "--tw-prose-invert-counters": S.zinc[400],
      "--tw-prose-invert-bullets": S.zinc[600],
      "--tw-prose-invert-hr": S.zinc[700],
      "--tw-prose-invert-quotes": S.zinc[100],
      "--tw-prose-invert-quote-borders": S.zinc[700],
      "--tw-prose-invert-captions": S.zinc[400],
      "--tw-prose-invert-kbd": S.white,
      "--tw-prose-invert-kbd-shadows": jt(S.white),
      "--tw-prose-invert-code": S.white,
      "--tw-prose-invert-pre-code": S.zinc[300],
      "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
      "--tw-prose-invert-th-borders": S.zinc[600],
      "--tw-prose-invert-td-borders": S.zinc[700]
    }
  },
  neutral: {
    css: {
      "--tw-prose-body": S.neutral[700],
      "--tw-prose-headings": S.neutral[900],
      "--tw-prose-lead": S.neutral[600],
      "--tw-prose-links": S.neutral[900],
      "--tw-prose-bold": S.neutral[900],
      "--tw-prose-counters": S.neutral[500],
      "--tw-prose-bullets": S.neutral[300],
      "--tw-prose-hr": S.neutral[200],
      "--tw-prose-quotes": S.neutral[900],
      "--tw-prose-quote-borders": S.neutral[200],
      "--tw-prose-captions": S.neutral[500],
      "--tw-prose-kbd": S.neutral[900],
      "--tw-prose-kbd-shadows": jt(S.neutral[900]),
      "--tw-prose-code": S.neutral[900],
      "--tw-prose-pre-code": S.neutral[200],
      "--tw-prose-pre-bg": S.neutral[800],
      "--tw-prose-th-borders": S.neutral[300],
      "--tw-prose-td-borders": S.neutral[200],
      "--tw-prose-invert-body": S.neutral[300],
      "--tw-prose-invert-headings": S.white,
      "--tw-prose-invert-lead": S.neutral[400],
      "--tw-prose-invert-links": S.white,
      "--tw-prose-invert-bold": S.white,
      "--tw-prose-invert-counters": S.neutral[400],
      "--tw-prose-invert-bullets": S.neutral[600],
      "--tw-prose-invert-hr": S.neutral[700],
      "--tw-prose-invert-quotes": S.neutral[100],
      "--tw-prose-invert-quote-borders": S.neutral[700],
      "--tw-prose-invert-captions": S.neutral[400],
      "--tw-prose-invert-kbd": S.white,
      "--tw-prose-invert-kbd-shadows": jt(S.white),
      "--tw-prose-invert-code": S.white,
      "--tw-prose-invert-pre-code": S.neutral[300],
      "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
      "--tw-prose-invert-th-borders": S.neutral[600],
      "--tw-prose-invert-td-borders": S.neutral[700]
    }
  },
  stone: {
    css: {
      "--tw-prose-body": S.stone[700],
      "--tw-prose-headings": S.stone[900],
      "--tw-prose-lead": S.stone[600],
      "--tw-prose-links": S.stone[900],
      "--tw-prose-bold": S.stone[900],
      "--tw-prose-counters": S.stone[500],
      "--tw-prose-bullets": S.stone[300],
      "--tw-prose-hr": S.stone[200],
      "--tw-prose-quotes": S.stone[900],
      "--tw-prose-quote-borders": S.stone[200],
      "--tw-prose-captions": S.stone[500],
      "--tw-prose-kbd": S.stone[900],
      "--tw-prose-kbd-shadows": jt(S.stone[900]),
      "--tw-prose-code": S.stone[900],
      "--tw-prose-pre-code": S.stone[200],
      "--tw-prose-pre-bg": S.stone[800],
      "--tw-prose-th-borders": S.stone[300],
      "--tw-prose-td-borders": S.stone[200],
      "--tw-prose-invert-body": S.stone[300],
      "--tw-prose-invert-headings": S.white,
      "--tw-prose-invert-lead": S.stone[400],
      "--tw-prose-invert-links": S.white,
      "--tw-prose-invert-bold": S.white,
      "--tw-prose-invert-counters": S.stone[400],
      "--tw-prose-invert-bullets": S.stone[600],
      "--tw-prose-invert-hr": S.stone[700],
      "--tw-prose-invert-quotes": S.stone[100],
      "--tw-prose-invert-quote-borders": S.stone[700],
      "--tw-prose-invert-captions": S.stone[400],
      "--tw-prose-invert-kbd": S.white,
      "--tw-prose-invert-kbd-shadows": jt(S.white),
      "--tw-prose-invert-code": S.white,
      "--tw-prose-invert-pre-code": S.stone[300],
      "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
      "--tw-prose-invert-th-borders": S.stone[600],
      "--tw-prose-invert-td-borders": S.stone[700]
    }
  },
  // Link-only themes (for backward compatibility)
  red: {
    css: {
      "--tw-prose-links": S.red[600],
      "--tw-prose-invert-links": S.red[500]
    }
  },
  orange: {
    css: {
      "--tw-prose-links": S.orange[600],
      "--tw-prose-invert-links": S.orange[500]
    }
  },
  amber: {
    css: {
      "--tw-prose-links": S.amber[600],
      "--tw-prose-invert-links": S.amber[500]
    }
  },
  yellow: {
    css: {
      "--tw-prose-links": S.yellow[600],
      "--tw-prose-invert-links": S.yellow[500]
    }
  },
  lime: {
    css: {
      "--tw-prose-links": S.lime[600],
      "--tw-prose-invert-links": S.lime[500]
    }
  },
  green: {
    css: {
      "--tw-prose-links": S.green[600],
      "--tw-prose-invert-links": S.green[500]
    }
  },
  emerald: {
    css: {
      "--tw-prose-links": S.emerald[600],
      "--tw-prose-invert-links": S.emerald[500]
    }
  },
  teal: {
    css: {
      "--tw-prose-links": S.teal[600],
      "--tw-prose-invert-links": S.teal[500]
    }
  },
  cyan: {
    css: {
      "--tw-prose-links": S.cyan[600],
      "--tw-prose-invert-links": S.cyan[500]
    }
  },
  sky: {
    css: {
      "--tw-prose-links": S.sky[600],
      "--tw-prose-invert-links": S.sky[500]
    }
  },
  blue: {
    css: {
      "--tw-prose-links": S.blue[600],
      "--tw-prose-invert-links": S.blue[500]
    }
  },
  indigo: {
    css: {
      "--tw-prose-links": S.indigo[600],
      "--tw-prose-invert-links": S.indigo[500]
    }
  },
  violet: {
    css: {
      "--tw-prose-links": S.violet[600],
      "--tw-prose-invert-links": S.violet[500]
    }
  },
  purple: {
    css: {
      "--tw-prose-links": S.purple[600],
      "--tw-prose-invert-links": S.purple[500]
    }
  },
  fuchsia: {
    css: {
      "--tw-prose-links": S.fuchsia[600],
      "--tw-prose-invert-links": S.fuchsia[500]
    }
  },
  pink: {
    css: {
      "--tw-prose-links": S.pink[600],
      "--tw-prose-invert-links": S.pink[500]
    }
  },
  rose: {
    css: {
      "--tw-prose-links": S.rose[600],
      "--tw-prose-invert-links": S.rose[500]
    }
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
      "--tw-prose-kbd": "var(--tw-prose-invert-kbd)",
      "--tw-prose-kbd-shadows": "var(--tw-prose-invert-kbd-shadows)",
      "--tw-prose-code": "var(--tw-prose-invert-code)",
      "--tw-prose-pre-code": "var(--tw-prose-invert-pre-code)",
      "--tw-prose-pre-bg": "var(--tw-prose-invert-pre-bg)",
      "--tw-prose-th-borders": "var(--tw-prose-invert-th-borders)",
      "--tw-prose-td-borders": "var(--tw-prose-invert-td-borders)"
    }
  }
};
var pd = {
  DEFAULT: {
    css: [
      {
        color: "var(--tw-prose-body)",
        maxWidth: "65ch",
        p: {},
        // Required to maintain correct order when merging
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
        dt: {
          color: "var(--tw-prose-headings)",
          fontWeight: "600"
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
        img: {},
        // Required to maintain correct order when merging
        picture: {
          display: "block"
        },
        kbd: {
          fontWeight: "500",
          fontFamily: "inherit",
          color: "var(--tw-prose-kbd)",
          boxShadow: "0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%)"
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
          marginTop: d(32, 16),
          marginBottom: d(32, 16)
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
        },
        "figure > *": {},
        // Required to maintain correct order when merging
        figcaption: {
          color: "var(--tw-prose-captions)"
        }
      },
      Yi.gray.css,
      ...Yi.base.css
    ]
  },
  ...Yi
}, gd = "[object Object]";
function _d(e) {
  var t = !1;
  if (e != null && typeof e.toString != "function")
    try {
      t = !!(e + "");
    } catch {
    }
  return t;
}
function yd(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var vd = Function.prototype, sl = Object.prototype, ol = vd.toString, bd = sl.hasOwnProperty, wd = ol.call(Object), kd = sl.toString, xd = yd(Object.getPrototypeOf, Object);
function Sd(e) {
  return !!e && typeof e == "object";
}
function Td(e) {
  if (!Sd(e) || kd.call(e) != gd || _d(e))
    return !1;
  var t = xd(e);
  if (t === null)
    return !0;
  var r = bd.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && ol.call(r) == wd;
}
var Od = Td, qi = { exports: {} }, Gi = { exports: {} }, $i = { exports: {} }, Ki = { exports: {} }, Xi = { exports: {} }, Qi = { exports: {} }, Et = {}, Zi = { exports: {} };
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
      var g = parseInt(u, 16), O = g >= 55296 && g <= 57343;
      return O || g === 0 || g > 1114111 ? ["�", u.length + (o ? 1 : 0)] : [String.fromCodePoint(g), u.length + (o ? 1 : 0)];
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
})(Zi, Zi.exports);
var ll = Zi.exports, Ji = { exports: {} };
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
})(Ji, Ji.exports);
var Ed = Ji.exports, ea = { exports: {} };
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
})(ea, ea.exports);
var Cd = ea.exports, ta = { exports: {} };
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
})(ta, ta.exports);
var Dd = ta.exports;
Et.__esModule = !0;
Et.stripComments = Et.ensureObject = Et.getProp = Et.unesc = void 0;
var Id = ni(ll);
Et.unesc = Id.default;
var Pd = ni(Ed);
Et.getProp = Pd.default;
var Nd = ni(Cd);
Et.ensureObject = Nd.default;
var Ld = ni(Dd);
Et.stripComments = Ld.default;
function ni(e) {
  return e && e.__esModule ? e : { default: e };
}
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = Et;
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
        var g = o[m], O = typeof g;
        m === "parent" && O === "object" ? l && (f[m] = l) : g instanceof Array ? f[m] = g.map(function(E) {
          return u(E, f);
        }) : f[m] = u(g, f);
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
      for (var g in f)
        m[g] = f[g];
      return m;
    }, o.appendToPropertyAndEscape = function(f, m, g) {
      this.raws || (this.raws = {});
      var O = this[f], E = this.raws[f];
      this[f] = O + m, E || g !== m ? this.raws[f] = (E || O) + g : delete this.raws[f];
    }, o.setPropertyAndEscape = function(f, m, g) {
      this.raws || (this.raws = {}), this[f] = m, this.raws[f] = g;
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
})(Qi, Qi.exports);
var Or = Qi.exports, Se = {};
Se.__esModule = !0;
Se.UNIVERSAL = Se.ATTRIBUTE = Se.CLASS = Se.COMBINATOR = Se.COMMENT = Se.ID = Se.NESTING = Se.PSEUDO = Se.ROOT = Se.SELECTOR = Se.STRING = Se.TAG = void 0;
var Md = "tag";
Se.TAG = Md;
var Ad = "string";
Se.STRING = Ad;
var Rd = "selector";
Se.SELECTOR = Rd;
var Fd = "root";
Se.ROOT = Fd;
var Yd = "pseudo";
Se.PSEUDO = Yd;
var Bd = "nesting";
Se.NESTING = Bd;
var Ud = "id";
Se.ID = Ud;
var Wd = "comment";
Se.COMMENT = Wd;
var zd = "combinator";
Se.COMBINATOR = zd;
var Vd = "class";
Se.CLASS = Vd;
var Hd = "attribute";
Se.ATTRIBUTE = Hd;
var jd = "universal";
Se.UNIVERSAL = jd;
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = s(Or), n = a(Se);
  function i() {
    if (typeof WeakMap != "function")
      return null;
    var h = /* @__PURE__ */ new WeakMap();
    return i = function() {
      return h;
    }, h;
  }
  function a(h) {
    if (h && h.__esModule)
      return h;
    if (h === null || typeof h != "object" && typeof h != "function")
      return { default: h };
    var c = i();
    if (c && c.has(h))
      return c.get(h);
    var p = {}, _ = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var k in h)
      if (Object.prototype.hasOwnProperty.call(h, k)) {
        var w = _ ? Object.getOwnPropertyDescriptor(h, k) : null;
        w && (w.get || w.set) ? Object.defineProperty(p, k, w) : p[k] = h[k];
      }
    return p.default = h, c && c.set(h, p), p;
  }
  function s(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function u(h, c) {
    var p;
    if (typeof Symbol > "u" || h[Symbol.iterator] == null) {
      if (Array.isArray(h) || (p = o(h)) || c && h && typeof h.length == "number") {
        p && (h = p);
        var _ = 0;
        return function() {
          return _ >= h.length ? { done: !0 } : { done: !1, value: h[_++] };
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    return p = h[Symbol.iterator](), p.next.bind(p);
  }
  function o(h, c) {
    if (h) {
      if (typeof h == "string")
        return l(h, c);
      var p = Object.prototype.toString.call(h).slice(8, -1);
      if (p === "Object" && h.constructor && (p = h.constructor.name), p === "Map" || p === "Set")
        return Array.from(h);
      if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))
        return l(h, c);
    }
  }
  function l(h, c) {
    (c == null || c > h.length) && (c = h.length);
    for (var p = 0, _ = new Array(c); p < c; p++)
      _[p] = h[p];
    return _;
  }
  function f(h, c) {
    for (var p = 0; p < c.length; p++) {
      var _ = c[p];
      _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(h, _.key, _);
    }
  }
  function m(h, c, p) {
    return c && f(h.prototype, c), p && f(h, p), h;
  }
  function g(h, c) {
    h.prototype = Object.create(c.prototype), h.prototype.constructor = h, O(h, c);
  }
  function O(h, c) {
    return O = Object.setPrototypeOf || function(_, k) {
      return _.__proto__ = k, _;
    }, O(h, c);
  }
  var E = /* @__PURE__ */ function(h) {
    g(c, h);
    function c(_) {
      var k;
      return k = h.call(this, _) || this, k.nodes || (k.nodes = []), k;
    }
    var p = c.prototype;
    return p.append = function(k) {
      return k.parent = this, this.nodes.push(k), this;
    }, p.prepend = function(k) {
      return k.parent = this, this.nodes.unshift(k), this;
    }, p.at = function(k) {
      return this.nodes[k];
    }, p.index = function(k) {
      return typeof k == "number" ? k : this.nodes.indexOf(k);
    }, p.removeChild = function(k) {
      k = this.index(k), this.at(k).parent = void 0, this.nodes.splice(k, 1);
      var w;
      for (var T in this.indexes)
        w = this.indexes[T], w >= k && (this.indexes[T] = w - 1);
      return this;
    }, p.removeAll = function() {
      for (var k = u(this.nodes), w; !(w = k()).done; ) {
        var T = w.value;
        T.parent = void 0;
      }
      return this.nodes = [], this;
    }, p.empty = function() {
      return this.removeAll();
    }, p.insertAfter = function(k, w) {
      w.parent = this;
      var T = this.index(k);
      this.nodes.splice(T + 1, 0, w), w.parent = this;
      var D;
      for (var R in this.indexes)
        D = this.indexes[R], T <= D && (this.indexes[R] = D + 1);
      return this;
    }, p.insertBefore = function(k, w) {
      w.parent = this;
      var T = this.index(k);
      this.nodes.splice(T, 0, w), w.parent = this;
      var D;
      for (var R in this.indexes)
        D = this.indexes[R], D <= T && (this.indexes[R] = D + 1);
      return this;
    }, p._findChildAtPosition = function(k, w) {
      var T = void 0;
      return this.each(function(D) {
        if (D.atPosition) {
          var R = D.atPosition(k, w);
          if (R)
            return T = R, !1;
        } else if (D.isAtPosition(k, w))
          return T = D, !1;
      }), T;
    }, p.atPosition = function(k, w) {
      if (this.isAtPosition(k, w))
        return this._findChildAtPosition(k, w) || this;
    }, p._inferEndPosition = function() {
      this.last && this.last.source && this.last.source.end && (this.source = this.source || {}, this.source.end = this.source.end || {}, Object.assign(this.source.end, this.last.source.end));
    }, p.each = function(k) {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
      var w = this.lastEach;
      if (this.indexes[w] = 0, !!this.length) {
        for (var T, D; this.indexes[w] < this.length && (T = this.indexes[w], D = k(this.at(T), T), D !== !1); )
          this.indexes[w] += 1;
        if (delete this.indexes[w], D === !1)
          return !1;
      }
    }, p.walk = function(k) {
      return this.each(function(w, T) {
        var D = k(w, T);
        if (D !== !1 && w.length && (D = w.walk(k)), D === !1)
          return !1;
      });
    }, p.walkAttributes = function(k) {
      var w = this;
      return this.walk(function(T) {
        if (T.type === n.ATTRIBUTE)
          return k.call(w, T);
      });
    }, p.walkClasses = function(k) {
      var w = this;
      return this.walk(function(T) {
        if (T.type === n.CLASS)
          return k.call(w, T);
      });
    }, p.walkCombinators = function(k) {
      var w = this;
      return this.walk(function(T) {
        if (T.type === n.COMBINATOR)
          return k.call(w, T);
      });
    }, p.walkComments = function(k) {
      var w = this;
      return this.walk(function(T) {
        if (T.type === n.COMMENT)
          return k.call(w, T);
      });
    }, p.walkIds = function(k) {
      var w = this;
      return this.walk(function(T) {
        if (T.type === n.ID)
          return k.call(w, T);
      });
    }, p.walkNesting = function(k) {
      var w = this;
      return this.walk(function(T) {
        if (T.type === n.NESTING)
          return k.call(w, T);
      });
    }, p.walkPseudos = function(k) {
      var w = this;
      return this.walk(function(T) {
        if (T.type === n.PSEUDO)
          return k.call(w, T);
      });
    }, p.walkTags = function(k) {
      var w = this;
      return this.walk(function(T) {
        if (T.type === n.TAG)
          return k.call(w, T);
      });
    }, p.walkUniversals = function(k) {
      var w = this;
      return this.walk(function(T) {
        if (T.type === n.UNIVERSAL)
          return k.call(w, T);
      });
    }, p.split = function(k) {
      var w = this, T = [];
      return this.reduce(function(D, R, B) {
        var b = k.call(w, R);
        return T.push(R), b ? (D.push(T), T = []) : B === w.length - 1 && D.push(T), D;
      }, []);
    }, p.map = function(k) {
      return this.nodes.map(k);
    }, p.reduce = function(k, w) {
      return this.nodes.reduce(k, w);
    }, p.every = function(k) {
      return this.nodes.every(k);
    }, p.some = function(k) {
      return this.nodes.some(k);
    }, p.filter = function(k) {
      return this.nodes.filter(k);
    }, p.sort = function(k) {
      return this.nodes.sort(k);
    }, p.toString = function() {
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
  t.default = E, e.exports = t.default;
})(Xi, Xi.exports);
var Ha = Xi.exports;
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(Ha), n = Se;
  function i(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function a(f, m) {
    for (var g = 0; g < m.length; g++) {
      var O = m[g];
      O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(f, O.key, O);
    }
  }
  function s(f, m, g) {
    return m && a(f.prototype, m), g && a(f, g), f;
  }
  function u(f, m) {
    f.prototype = Object.create(m.prototype), f.prototype.constructor = f, o(f, m);
  }
  function o(f, m) {
    return o = Object.setPrototypeOf || function(O, E) {
      return O.__proto__ = E, O;
    }, o(f, m);
  }
  var l = /* @__PURE__ */ function(f) {
    u(m, f);
    function m(O) {
      var E;
      return E = f.call(this, O) || this, E.type = n.ROOT, E;
    }
    var g = m.prototype;
    return g.toString = function() {
      var E = this.reduce(function(h, c) {
        return h.push(String(c)), h;
      }, []).join(",");
      return this.trailingComma ? E + "," : E;
    }, g.error = function(E, h) {
      return this._error ? this._error(E, h) : new Error(E);
    }, s(m, [{
      key: "errorGenerator",
      set: function(E) {
        this._error = E;
      }
    }]), m;
  }(r.default);
  t.default = l, e.exports = t.default;
})(Ki, Ki.exports);
var ul = Ki.exports, ra = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(Ha), n = Se;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, g) {
      return m.__proto__ = g, m;
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
})(ra, ra.exports);
var cl = ra.exports, na = { exports: {} };
/*! https://mths.be/cssesc v3.0.0 by @mathias */
var qd = {}, Gd = qd.hasOwnProperty, $d = function(t, r) {
  if (!t)
    return r;
  var n = {};
  for (var i in r)
    n[i] = Gd.call(t, i) ? t[i] : r[i];
  return n;
}, Kd = /[ -,\.\/:-@\[-\^`\{-~]/, Xd = /[ -,\.\/:-@\[\]\^`\{-~]/, Qd = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g, ja = function e(t, r) {
  r = $d(r, e.options), r.quotes != "single" && r.quotes != "double" && (r.quotes = "single");
  for (var n = r.quotes == "double" ? '"' : "'", i = r.isIdentifier, a = t.charAt(0), s = "", u = 0, o = t.length; u < o; ) {
    var l = t.charAt(u++), f = l.charCodeAt(), m = void 0;
    if (f < 32 || f > 126) {
      if (f >= 55296 && f <= 56319 && u < o) {
        var g = t.charCodeAt(u++);
        (g & 64512) == 56320 ? f = ((f & 1023) << 10) + (g & 1023) + 65536 : u--;
      }
      m = "\\" + f.toString(16).toUpperCase() + " ";
    } else
      r.escapeEverything ? Kd.test(l) ? m = "\\" + l : m = "\\" + f.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(l) ? m = "\\" + f.toString(16).toUpperCase() + " " : l == "\\" || !i && (l == '"' && n == l || l == "'" && n == l) || i && Xd.test(l) ? m = "\\" + l : m = l;
    s += m;
  }
  return i && (/^-[-\d]/.test(s) ? s = "\\-" + s.slice(1) : /\d/.test(a) && (s = "\\3" + a + " " + s.slice(1))), s = s.replace(Qd, function(O, E, h) {
    return E && E.length % 2 ? O : (E || "") + h;
  }), !i && r.wrap ? n + s + n : s;
};
ja.options = {
  escapeEverything: !1,
  isIdentifier: !1,
  quotes: "single",
  wrap: !1
};
ja.version = "3.0.0";
var qa = ja;
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = s(qa), n = Et, i = s(Or), a = Se;
  function s(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function u(g, O) {
    for (var E = 0; E < O.length; E++) {
      var h = O[E];
      h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(g, h.key, h);
    }
  }
  function o(g, O, E) {
    return O && u(g.prototype, O), E && u(g, E), g;
  }
  function l(g, O) {
    g.prototype = Object.create(O.prototype), g.prototype.constructor = g, f(g, O);
  }
  function f(g, O) {
    return f = Object.setPrototypeOf || function(h, c) {
      return h.__proto__ = c, h;
    }, f(g, O);
  }
  var m = /* @__PURE__ */ function(g) {
    l(O, g);
    function O(h) {
      var c;
      return c = g.call(this, h) || this, c.type = a.CLASS, c._constructed = !0, c;
    }
    var E = O.prototype;
    return E.valueToString = function() {
      return "." + g.prototype.valueToString.call(this);
    }, o(O, [{
      key: "value",
      get: function() {
        return this._value;
      },
      set: function(c) {
        if (this._constructed) {
          var p = (0, r.default)(c, {
            isIdentifier: !0
          });
          p !== c ? ((0, n.ensureObject)(this, "raws"), this.raws.value = p) : this.raws && delete this.raws.value;
        }
        this._value = c;
      }
    }]), O;
  }(i.default);
  t.default = m, e.exports = t.default;
})(na, na.exports);
var dl = na.exports, ia = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(Or), n = Se;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, g) {
      return m.__proto__ = g, m;
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
})(ia, ia.exports);
var fl = ia.exports, aa = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(Or), n = Se;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, g) {
      return m.__proto__ = g, m;
    }, s(o, l);
  }
  var u = /* @__PURE__ */ function(o) {
    a(l, o);
    function l(m) {
      var g;
      return g = o.call(this, m) || this, g.type = n.ID, g;
    }
    var f = l.prototype;
    return f.valueToString = function() {
      return "#" + o.prototype.valueToString.call(this);
    }, l;
  }(r.default);
  t.default = u, e.exports = t.default;
})(aa, aa.exports);
var hl = aa.exports, sa = { exports: {} }, oa = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = a(qa), n = Et, i = a(Or);
  function a(m) {
    return m && m.__esModule ? m : { default: m };
  }
  function s(m, g) {
    for (var O = 0; O < g.length; O++) {
      var E = g[O];
      E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(m, E.key, E);
    }
  }
  function u(m, g, O) {
    return g && s(m.prototype, g), O && s(m, O), m;
  }
  function o(m, g) {
    m.prototype = Object.create(g.prototype), m.prototype.constructor = m, l(m, g);
  }
  function l(m, g) {
    return l = Object.setPrototypeOf || function(E, h) {
      return E.__proto__ = h, E;
    }, l(m, g);
  }
  var f = /* @__PURE__ */ function(m) {
    o(g, m);
    function g() {
      return m.apply(this, arguments) || this;
    }
    var O = g.prototype;
    return O.qualifiedName = function(h) {
      return this.namespace ? this.namespaceString + "|" + h : h;
    }, O.valueToString = function() {
      return this.qualifiedName(m.prototype.valueToString.call(this));
    }, u(g, [{
      key: "namespace",
      get: function() {
        return this._namespace;
      },
      set: function(h) {
        if (h === !0 || h === "*" || h === "&") {
          this._namespace = h, this.raws && delete this.raws.namespace;
          return;
        }
        var c = (0, r.default)(h, {
          isIdentifier: !0
        });
        this._namespace = h, c !== h ? ((0, n.ensureObject)(this, "raws"), this.raws.namespace = c) : this.raws && delete this.raws.namespace;
      }
    }, {
      key: "ns",
      get: function() {
        return this._namespace;
      },
      set: function(h) {
        this.namespace = h;
      }
    }, {
      key: "namespaceString",
      get: function() {
        if (this.namespace) {
          var h = this.stringifyProperty("namespace");
          return h === !0 ? "" : h;
        } else
          return "";
      }
    }]), g;
  }(i.default);
  t.default = f, e.exports = t.default;
})(oa, oa.exports);
var Ga = oa.exports;
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(Ga), n = Se;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, g) {
      return m.__proto__ = g, m;
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
})(sa, sa.exports);
var ml = sa.exports, la = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(Or), n = Se;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, g) {
      return m.__proto__ = g, m;
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
})(la, la.exports);
var pl = la.exports, ua = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(Ha), n = Se;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, g) {
      return m.__proto__ = g, m;
    }, s(o, l);
  }
  var u = /* @__PURE__ */ function(o) {
    a(l, o);
    function l(m) {
      var g;
      return g = o.call(this, m) || this, g.type = n.PSEUDO, g;
    }
    var f = l.prototype;
    return f.toString = function() {
      var g = this.length ? "(" + this.map(String).join(",") + ")" : "";
      return [this.rawSpaceBefore, this.stringifyProperty("value"), g, this.rawSpaceAfter].join("");
    }, l;
  }(r.default);
  t.default = u, e.exports = t.default;
})(ua, ua.exports);
var gl = ua.exports, $a = {}, Zd = Jd;
function Jd(e, t) {
  if (Bi("noDeprecation"))
    return e;
  var r = !1;
  function n() {
    if (!r) {
      if (Bi("throwDeprecation"))
        throw new Error(t);
      Bi("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0;
    }
    return e.apply(this, arguments);
  }
  return n;
}
function Bi(e) {
  try {
    if (!br.localStorage)
      return !1;
  } catch {
    return !1;
  }
  var t = br.localStorage[e];
  return t == null ? !1 : String(t).toLowerCase() === "true";
}
(function(e) {
  e.__esModule = !0, e.unescapeValue = c, e.default = void 0;
  var t = s(qa), r = s(ll), n = s(Ga), i = Se, a;
  function s(T) {
    return T && T.__esModule ? T : { default: T };
  }
  function u(T, D) {
    for (var R = 0; R < D.length; R++) {
      var B = D[R];
      B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(T, B.key, B);
    }
  }
  function o(T, D, R) {
    return D && u(T.prototype, D), R && u(T, R), T;
  }
  function l(T, D) {
    T.prototype = Object.create(D.prototype), T.prototype.constructor = T, f(T, D);
  }
  function f(T, D) {
    return f = Object.setPrototypeOf || function(B, b) {
      return B.__proto__ = b, B;
    }, f(T, D);
  }
  var m = Zd, g = /^('|")([^]*)\1$/, O = m(function() {
  }, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."), E = m(function() {
  }, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."), h = m(function() {
  }, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");
  function c(T) {
    var D = !1, R = null, B = T, b = B.match(g);
    return b && (R = b[1], B = b[2]), B = (0, r.default)(B), B !== T && (D = !0), {
      deprecatedUsage: D,
      unescaped: B,
      quoteMark: R
    };
  }
  function p(T) {
    if (T.quoteMark !== void 0 || T.value === void 0)
      return T;
    h();
    var D = c(T.value), R = D.quoteMark, B = D.unescaped;
    return T.raws || (T.raws = {}), T.raws.value === void 0 && (T.raws.value = T.value), T.value = B, T.quoteMark = R, T;
  }
  var _ = /* @__PURE__ */ function(T) {
    l(D, T);
    function D(B) {
      var b;
      return B === void 0 && (B = {}), b = T.call(this, p(B)) || this, b.type = i.ATTRIBUTE, b.raws = b.raws || {}, Object.defineProperty(b.raws, "unquoted", {
        get: m(function() {
          return b.value;
        }, "attr.raws.unquoted is deprecated. Call attr.value instead."),
        set: m(function() {
          return b.value;
        }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")
      }), b._constructed = !0, b;
    }
    var R = D.prototype;
    return R.getQuotedValue = function(b) {
      b === void 0 && (b = {});
      var L = this._determineQuoteMark(b), V = k[L], F = (0, t.default)(this._value, V);
      return F;
    }, R._determineQuoteMark = function(b) {
      return b.smart ? this.smartQuoteMark(b) : this.preferredQuoteMark(b);
    }, R.setValue = function(b, L) {
      L === void 0 && (L = {}), this._value = b, this._quoteMark = this._determineQuoteMark(L), this._syncRawValue();
    }, R.smartQuoteMark = function(b) {
      var L = this.value, V = L.replace(/[^']/g, "").length, F = L.replace(/[^"]/g, "").length;
      if (V + F === 0) {
        var G = (0, t.default)(L, {
          isIdentifier: !0
        });
        if (G === L)
          return D.NO_QUOTE;
        var Q = this.preferredQuoteMark(b);
        if (Q === D.NO_QUOTE) {
          var H = this.quoteMark || b.quoteMark || D.DOUBLE_QUOTE, N = k[H], re = (0, t.default)(L, N);
          if (re.length < G.length)
            return H;
        }
        return Q;
      } else
        return F === V ? this.preferredQuoteMark(b) : F < V ? D.DOUBLE_QUOTE : D.SINGLE_QUOTE;
    }, R.preferredQuoteMark = function(b) {
      var L = b.preferCurrentQuoteMark ? this.quoteMark : b.quoteMark;
      return L === void 0 && (L = b.preferCurrentQuoteMark ? b.quoteMark : this.quoteMark), L === void 0 && (L = D.DOUBLE_QUOTE), L;
    }, R._syncRawValue = function() {
      var b = (0, t.default)(this._value, k[this.quoteMark]);
      b === this._value ? this.raws && delete this.raws.value : this.raws.value = b;
    }, R._handleEscapes = function(b, L) {
      if (this._constructed) {
        var V = (0, t.default)(L, {
          isIdentifier: !0
        });
        V !== L ? this.raws[b] = V : delete this.raws[b];
      }
    }, R._spacesFor = function(b) {
      var L = {
        before: "",
        after: ""
      }, V = this.spaces[b] || {}, F = this.raws.spaces && this.raws.spaces[b] || {};
      return Object.assign(L, V, F);
    }, R._stringFor = function(b, L, V) {
      L === void 0 && (L = b), V === void 0 && (V = w);
      var F = this._spacesFor(L);
      return V(this.stringifyProperty(b), F);
    }, R.offsetOf = function(b) {
      var L = 1, V = this._spacesFor("attribute");
      if (L += V.before.length, b === "namespace" || b === "ns")
        return this.namespace ? L : -1;
      if (b === "attributeNS" || (L += this.namespaceString.length, this.namespace && (L += 1), b === "attribute"))
        return L;
      L += this.stringifyProperty("attribute").length, L += V.after.length;
      var F = this._spacesFor("operator");
      L += F.before.length;
      var G = this.stringifyProperty("operator");
      if (b === "operator")
        return G ? L : -1;
      L += G.length, L += F.after.length;
      var Q = this._spacesFor("value");
      L += Q.before.length;
      var H = this.stringifyProperty("value");
      if (b === "value")
        return H ? L : -1;
      L += H.length, L += Q.after.length;
      var N = this._spacesFor("insensitive");
      return L += N.before.length, b === "insensitive" && this.insensitive ? L : -1;
    }, R.toString = function() {
      var b = this, L = [this.rawSpaceBefore, "["];
      return L.push(this._stringFor("qualifiedAttribute", "attribute")), this.operator && (this.value || this.value === "") && (L.push(this._stringFor("operator")), L.push(this._stringFor("value")), L.push(this._stringFor("insensitiveFlag", "insensitive", function(V, F) {
        return V.length > 0 && !b.quoted && F.before.length === 0 && !(b.spaces.value && b.spaces.value.after) && (F.before = " "), w(V, F);
      }))), L.push("]"), L.push(this.rawSpaceAfter), L.join("");
    }, o(D, [{
      key: "quoted",
      get: function() {
        var b = this.quoteMark;
        return b === "'" || b === '"';
      },
      set: function(b) {
        E();
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
      set: function(b) {
        if (!this._constructed) {
          this._quoteMark = b;
          return;
        }
        this._quoteMark !== b && (this._quoteMark = b, this._syncRawValue());
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
      set: function(b) {
        if (this._constructed) {
          var L = c(b), V = L.deprecatedUsage, F = L.unescaped, G = L.quoteMark;
          if (V && O(), F === this._value && G === this._quoteMark)
            return;
          this._value = F, this._quoteMark = G, this._syncRawValue();
        } else
          this._value = b;
      }
    }, {
      key: "attribute",
      get: function() {
        return this._attribute;
      },
      set: function(b) {
        this._handleEscapes("attribute", b), this._attribute = b;
      }
    }]), D;
  }(n.default);
  e.default = _, _.NO_QUOTE = null, _.SINGLE_QUOTE = "'", _.DOUBLE_QUOTE = '"';
  var k = (a = {
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
  function w(T, D) {
    return "" + D.before + T + D.after;
  }
})($a);
var ca = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(Ga), n = Se;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, g) {
      return m.__proto__ = g, m;
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
})(ca, ca.exports);
var _l = ca.exports, da = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(Or), n = Se;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, g) {
      return m.__proto__ = g, m;
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
})(da, da.exports);
var yl = da.exports, fa = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = i(Or), n = Se;
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, s(o, l);
  }
  function s(o, l) {
    return s = Object.setPrototypeOf || function(m, g) {
      return m.__proto__ = g, m;
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
})(fa, fa.exports);
var vl = fa.exports, ha = { exports: {} };
(function(e, t) {
  t.__esModule = !0, t.default = r;
  function r(n) {
    return n.sort(function(i, a) {
      return i - a;
    });
  }
  e.exports = t.default;
})(ha, ha.exports);
var ef = ha.exports, bl = {}, le = {};
le.__esModule = !0;
le.combinator = le.word = le.comment = le.str = le.tab = le.newline = le.feed = le.cr = le.backslash = le.bang = le.slash = le.doubleQuote = le.singleQuote = le.space = le.greaterThan = le.pipe = le.equals = le.plus = le.caret = le.tilde = le.dollar = le.closeSquare = le.openSquare = le.closeParenthesis = le.openParenthesis = le.semicolon = le.colon = le.comma = le.at = le.asterisk = le.ampersand = void 0;
var tf = 38;
le.ampersand = tf;
var rf = 42;
le.asterisk = rf;
var nf = 64;
le.at = nf;
var af = 44;
le.comma = af;
var sf = 58;
le.colon = sf;
var of = 59;
le.semicolon = of;
var lf = 40;
le.openParenthesis = lf;
var uf = 41;
le.closeParenthesis = uf;
var cf = 91;
le.openSquare = cf;
var df = 93;
le.closeSquare = df;
var ff = 36;
le.dollar = ff;
var hf = 126;
le.tilde = hf;
var mf = 94;
le.caret = mf;
var pf = 43;
le.plus = pf;
var gf = 61;
le.equals = gf;
var _f = 124;
le.pipe = _f;
var yf = 62;
le.greaterThan = yf;
var vf = 32;
le.space = vf;
var wl = 39;
le.singleQuote = wl;
var bf = 34;
le.doubleQuote = bf;
var wf = 47;
le.slash = wf;
var kf = 33;
le.bang = kf;
var xf = 92;
le.backslash = xf;
var Sf = 13;
le.cr = Sf;
var Tf = 12;
le.feed = Tf;
var Of = 10;
le.newline = Of;
var Ef = 9;
le.tab = Ef;
var Cf = wl;
le.str = Cf;
var Df = -1;
le.comment = Df;
var If = -2;
le.word = If;
var Pf = -3;
le.combinator = Pf;
(function(e) {
  e.__esModule = !0, e.default = E, e.FIELDS = void 0;
  var t = a(le), r, n;
  function i() {
    if (typeof WeakMap != "function")
      return null;
    var h = /* @__PURE__ */ new WeakMap();
    return i = function() {
      return h;
    }, h;
  }
  function a(h) {
    if (h && h.__esModule)
      return h;
    if (h === null || typeof h != "object" && typeof h != "function")
      return { default: h };
    var c = i();
    if (c && c.has(h))
      return c.get(h);
    var p = {}, _ = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var k in h)
      if (Object.prototype.hasOwnProperty.call(h, k)) {
        var w = _ ? Object.getOwnPropertyDescriptor(h, k) : null;
        w && (w.get || w.set) ? Object.defineProperty(p, k, w) : p[k] = h[k];
      }
    return p.default = h, c && c.set(h, p), p;
  }
  for (var s = (r = {}, r[t.tab] = !0, r[t.newline] = !0, r[t.cr] = !0, r[t.feed] = !0, r), u = (n = {}, n[t.space] = !0, n[t.tab] = !0, n[t.newline] = !0, n[t.cr] = !0, n[t.feed] = !0, n[t.ampersand] = !0, n[t.asterisk] = !0, n[t.bang] = !0, n[t.comma] = !0, n[t.colon] = !0, n[t.semicolon] = !0, n[t.openParenthesis] = !0, n[t.closeParenthesis] = !0, n[t.openSquare] = !0, n[t.closeSquare] = !0, n[t.singleQuote] = !0, n[t.doubleQuote] = !0, n[t.plus] = !0, n[t.pipe] = !0, n[t.tilde] = !0, n[t.greaterThan] = !0, n[t.equals] = !0, n[t.dollar] = !0, n[t.caret] = !0, n[t.slash] = !0, n), o = {}, l = "0123456789abcdefABCDEF", f = 0; f < l.length; f++)
    o[l.charCodeAt(f)] = !0;
  function m(h, c) {
    var p = c, _;
    do {
      if (_ = h.charCodeAt(p), u[_])
        return p - 1;
      _ === t.backslash ? p = g(h, p) + 1 : p++;
    } while (p < h.length);
    return p - 1;
  }
  function g(h, c) {
    var p = c, _ = h.charCodeAt(p + 1);
    if (!s[_])
      if (o[_]) {
        var k = 0;
        do
          p++, k++, _ = h.charCodeAt(p + 1);
        while (o[_] && k < 6);
        k < 6 && _ === t.space && p++;
      } else
        p++;
    return p;
  }
  var O = {
    TYPE: 0,
    START_LINE: 1,
    START_COL: 2,
    END_LINE: 3,
    END_COL: 4,
    START_POS: 5,
    END_POS: 6
  };
  e.FIELDS = O;
  function E(h) {
    var c = [], p = h.css.valueOf(), _ = p, k = _.length, w = -1, T = 1, D = 0, R = 0, B, b, L, V, F, G, Q, H, N, re, ue, ce, be;
    function te(X, z) {
      if (h.safe)
        p += z, N = p.length - 1;
      else
        throw h.error("Unclosed " + X, T, D - w, D);
    }
    for (; D < k; ) {
      switch (B = p.charCodeAt(D), B === t.newline && (w = D, T += 1), B) {
        case t.space:
        case t.tab:
        case t.newline:
        case t.cr:
        case t.feed:
          N = D;
          do
            N += 1, B = p.charCodeAt(N), B === t.newline && (w = N, T += 1);
          while (B === t.space || B === t.newline || B === t.tab || B === t.cr || B === t.feed);
          be = t.space, V = T, L = N - w - 1, R = N;
          break;
        case t.plus:
        case t.greaterThan:
        case t.tilde:
        case t.pipe:
          N = D;
          do
            N += 1, B = p.charCodeAt(N);
          while (B === t.plus || B === t.greaterThan || B === t.tilde || B === t.pipe);
          be = t.combinator, V = T, L = D - w, R = N;
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
          N = D, be = B, V = T, L = D - w, R = N + 1;
          break;
        case t.singleQuote:
        case t.doubleQuote:
          ce = B === t.singleQuote ? "'" : '"', N = D;
          do
            for (F = !1, N = p.indexOf(ce, N + 1), N === -1 && te("quote", ce), G = N; p.charCodeAt(G - 1) === t.backslash; )
              G -= 1, F = !F;
          while (F);
          be = t.str, V = T, L = D - w, R = N + 1;
          break;
        default:
          B === t.slash && p.charCodeAt(D + 1) === t.asterisk ? (N = p.indexOf("*/", D + 2) + 1, N === 0 && te("comment", "*/"), b = p.slice(D, N + 1), H = b.split(`
`), Q = H.length - 1, Q > 0 ? (re = T + Q, ue = N - H[Q].length) : (re = T, ue = w), be = t.comment, T = re, V = re, L = N - ue) : B === t.slash ? (N = D, be = B, V = T, L = D - w, R = N + 1) : (N = m(p, D), be = t.word, V = T, L = N - w), R = N + 1;
          break;
      }
      c.push([
        be,
        // [0] Token type
        T,
        // [1] Starting line
        D - w,
        // [2] Starting column
        V,
        // [3] Ending line
        L,
        // [4] Ending column
        D,
        // [5] Start position / Source index
        R
        // [6] End position
      ]), ue && (w = ue, ue = null), D = R;
    }
    return c;
  }
})(bl);
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = R(ul), n = R(cl), i = R(dl), a = R(fl), s = R(hl), u = R(ml), o = R(pl), l = R(gl), f = D($a), m = R(_l), g = R(yl), O = R(vl), E = R(ef), h = D(bl), c = D(le), p = D(Se), _ = Et, k, w;
  function T() {
    if (typeof WeakMap != "function")
      return null;
    var te = /* @__PURE__ */ new WeakMap();
    return T = function() {
      return te;
    }, te;
  }
  function D(te) {
    if (te && te.__esModule)
      return te;
    if (te === null || typeof te != "object" && typeof te != "function")
      return { default: te };
    var X = T();
    if (X && X.has(te))
      return X.get(te);
    var z = {}, A = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var $ in te)
      if (Object.prototype.hasOwnProperty.call(te, $)) {
        var ie = A ? Object.getOwnPropertyDescriptor(te, $) : null;
        ie && (ie.get || ie.set) ? Object.defineProperty(z, $, ie) : z[$] = te[$];
      }
    return z.default = te, X && X.set(te, z), z;
  }
  function R(te) {
    return te && te.__esModule ? te : { default: te };
  }
  function B(te, X) {
    for (var z = 0; z < X.length; z++) {
      var A = X[z];
      A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(te, A.key, A);
    }
  }
  function b(te, X, z) {
    return X && B(te.prototype, X), z && B(te, z), te;
  }
  var L = (k = {}, k[c.space] = !0, k[c.cr] = !0, k[c.feed] = !0, k[c.newline] = !0, k[c.tab] = !0, k), V = Object.assign({}, L, (w = {}, w[c.comment] = !0, w));
  function F(te) {
    return {
      line: te[h.FIELDS.START_LINE],
      column: te[h.FIELDS.START_COL]
    };
  }
  function G(te) {
    return {
      line: te[h.FIELDS.END_LINE],
      column: te[h.FIELDS.END_COL]
    };
  }
  function Q(te, X, z, A) {
    return {
      start: {
        line: te,
        column: X
      },
      end: {
        line: z,
        column: A
      }
    };
  }
  function H(te) {
    return Q(te[h.FIELDS.START_LINE], te[h.FIELDS.START_COL], te[h.FIELDS.END_LINE], te[h.FIELDS.END_COL]);
  }
  function N(te, X) {
    if (te)
      return Q(te[h.FIELDS.START_LINE], te[h.FIELDS.START_COL], X[h.FIELDS.END_LINE], X[h.FIELDS.END_COL]);
  }
  function re(te, X) {
    var z = te[X];
    if (typeof z == "string")
      return z.indexOf("\\") !== -1 && ((0, _.ensureObject)(te, "raws"), te[X] = (0, _.unesc)(z), te.raws[X] === void 0 && (te.raws[X] = z)), te;
  }
  function ue(te, X) {
    for (var z = -1, A = []; (z = te.indexOf(X, z + 1)) !== -1; )
      A.push(z);
    return A;
  }
  function ce() {
    var te = Array.prototype.concat.apply([], arguments);
    return te.filter(function(X, z) {
      return z === te.indexOf(X);
    });
  }
  var be = /* @__PURE__ */ function() {
    function te(z, A) {
      A === void 0 && (A = {}), this.rule = z, this.options = Object.assign({
        lossy: !1,
        safe: !1
      }, A), this.position = 0, this.css = typeof this.rule == "string" ? this.rule : this.rule.selector, this.tokens = (0, h.default)({
        css: this.css,
        error: this._errorGenerator(),
        safe: this.options.safe
      });
      var $ = N(this.tokens[0], this.tokens[this.tokens.length - 1]);
      this.root = new r.default({
        source: $
      }), this.root.errorGenerator = this._errorGenerator();
      var ie = new n.default({
        source: {
          start: {
            line: 1,
            column: 1
          }
        }
      });
      this.root.append(ie), this.current = ie, this.loop();
    }
    var X = te.prototype;
    return X._errorGenerator = function() {
      var A = this;
      return function($, ie) {
        return typeof A.rule == "string" ? new Error($) : A.rule.error($, ie);
      };
    }, X.attribute = function() {
      var A = [], $ = this.currToken;
      for (this.position++; this.position < this.tokens.length && this.currToken[h.FIELDS.TYPE] !== c.closeSquare; )
        A.push(this.currToken), this.position++;
      if (this.currToken[h.FIELDS.TYPE] !== c.closeSquare)
        return this.expected("closing square bracket", this.currToken[h.FIELDS.START_POS]);
      var ie = A.length, Y = {
        source: Q($[1], $[2], this.currToken[3], this.currToken[4]),
        sourceIndex: $[h.FIELDS.START_POS]
      };
      if (ie === 1 && !~[c.word].indexOf(A[0][h.FIELDS.TYPE]))
        return this.expected("attribute", A[0][h.FIELDS.START_POS]);
      for (var fe = 0, ke = "", ge = "", he = null, Ie = !1; fe < ie; ) {
        var x = A[fe], y = this.content(x), I = A[fe + 1];
        switch (x[h.FIELDS.TYPE]) {
          case c.space:
            if (Ie = !0, this.options.lossy)
              break;
            if (he) {
              (0, _.ensureObject)(Y, "spaces", he);
              var J = Y.spaces[he].after || "";
              Y.spaces[he].after = J + y;
              var de = (0, _.getProp)(Y, "raws", "spaces", he, "after") || null;
              de && (Y.raws.spaces[he].after = de + y);
            } else
              ke = ke + y, ge = ge + y;
            break;
          case c.asterisk:
            if (I[h.FIELDS.TYPE] === c.equals)
              Y.operator = y, he = "operator";
            else if ((!Y.namespace || he === "namespace" && !Ie) && I) {
              ke && ((0, _.ensureObject)(Y, "spaces", "attribute"), Y.spaces.attribute.before = ke, ke = ""), ge && ((0, _.ensureObject)(Y, "raws", "spaces", "attribute"), Y.raws.spaces.attribute.before = ke, ge = ""), Y.namespace = (Y.namespace || "") + y;
              var ye = (0, _.getProp)(Y, "raws", "namespace") || null;
              ye && (Y.raws.namespace += y), he = "namespace";
            }
            Ie = !1;
            break;
          case c.dollar:
            if (he === "value") {
              var Ye = (0, _.getProp)(Y, "raws", "value");
              Y.value += "$", Ye && (Y.raws.value = Ye + "$");
              break;
            }
          case c.caret:
            I[h.FIELDS.TYPE] === c.equals && (Y.operator = y, he = "operator"), Ie = !1;
            break;
          case c.combinator:
            if (y === "~" && I[h.FIELDS.TYPE] === c.equals && (Y.operator = y, he = "operator"), y !== "|") {
              Ie = !1;
              break;
            }
            I[h.FIELDS.TYPE] === c.equals ? (Y.operator = y, he = "operator") : !Y.namespace && !Y.attribute && (Y.namespace = !0), Ie = !1;
            break;
          case c.word:
            if (I && this.content(I) === "|" && A[fe + 2] && A[fe + 2][h.FIELDS.TYPE] !== c.equals && // this look-ahead probably fails with comment nodes involved.
            !Y.operator && !Y.namespace)
              Y.namespace = y, he = "namespace";
            else if (!Y.attribute || he === "attribute" && !Ie) {
              ke && ((0, _.ensureObject)(Y, "spaces", "attribute"), Y.spaces.attribute.before = ke, ke = ""), ge && ((0, _.ensureObject)(Y, "raws", "spaces", "attribute"), Y.raws.spaces.attribute.before = ge, ge = ""), Y.attribute = (Y.attribute || "") + y;
              var ze = (0, _.getProp)(Y, "raws", "attribute") || null;
              ze && (Y.raws.attribute += y), he = "attribute";
            } else if (!Y.value && Y.value !== "" || he === "value" && !Ie) {
              var lt = (0, _.unesc)(y), mt = (0, _.getProp)(Y, "raws", "value") || "", ut = Y.value || "";
              Y.value = ut + lt, Y.quoteMark = null, (lt !== y || mt) && ((0, _.ensureObject)(Y, "raws"), Y.raws.value = (mt || ut) + y), he = "value";
            } else {
              var Jt = y === "i" || y === "I";
              (Y.value || Y.value === "") && (Y.quoteMark || Ie) ? (Y.insensitive = Jt, (!Jt || y === "I") && ((0, _.ensureObject)(Y, "raws"), Y.raws.insensitiveFlag = y), he = "insensitive", ke && ((0, _.ensureObject)(Y, "spaces", "insensitive"), Y.spaces.insensitive.before = ke, ke = ""), ge && ((0, _.ensureObject)(Y, "raws", "spaces", "insensitive"), Y.raws.spaces.insensitive.before = ge, ge = "")) : (Y.value || Y.value === "") && (he = "value", Y.value += y, Y.raws.value && (Y.raws.value += y));
            }
            Ie = !1;
            break;
          case c.str:
            if (!Y.attribute || !Y.operator)
              return this.error("Expected an attribute followed by an operator preceding the string.", {
                index: x[h.FIELDS.START_POS]
              });
            var Vt = (0, f.unescapeValue)(y), Xe = Vt.unescaped, U = Vt.quoteMark;
            Y.value = Xe, Y.quoteMark = U, he = "value", (0, _.ensureObject)(Y, "raws"), Y.raws.value = y, Ie = !1;
            break;
          case c.equals:
            if (!Y.attribute)
              return this.expected("attribute", x[h.FIELDS.START_POS], y);
            if (Y.value)
              return this.error('Unexpected "=" found; an operator was already defined.', {
                index: x[h.FIELDS.START_POS]
              });
            Y.operator = Y.operator ? Y.operator + y : y, he = "operator", Ie = !1;
            break;
          case c.comment:
            if (he)
              if (Ie || I && I[h.FIELDS.TYPE] === c.space || he === "insensitive") {
                var q = (0, _.getProp)(Y, "spaces", he, "after") || "", Oe = (0, _.getProp)(Y, "raws", "spaces", he, "after") || q;
                (0, _.ensureObject)(Y, "raws", "spaces", he), Y.raws.spaces[he].after = Oe + y;
              } else {
                var Ve = Y[he] || "", St = (0, _.getProp)(Y, "raws", he) || Ve;
                (0, _.ensureObject)(Y, "raws"), Y.raws[he] = St + y;
              }
            else
              ge = ge + y;
            break;
          default:
            return this.error('Unexpected "' + y + '" found.', {
              index: x[h.FIELDS.START_POS]
            });
        }
        fe++;
      }
      re(Y, "attribute"), re(Y, "namespace"), this.newNode(new f.default(Y)), this.position++;
    }, X.parseWhitespaceEquivalentTokens = function(A) {
      A < 0 && (A = this.tokens.length);
      var $ = this.position, ie = [], Y = "", fe = void 0;
      do
        if (L[this.currToken[h.FIELDS.TYPE]])
          this.options.lossy || (Y += this.content());
        else if (this.currToken[h.FIELDS.TYPE] === c.comment) {
          var ke = {};
          Y && (ke.before = Y, Y = ""), fe = new a.default({
            value: this.content(),
            source: H(this.currToken),
            sourceIndex: this.currToken[h.FIELDS.START_POS],
            spaces: ke
          }), ie.push(fe);
        }
      while (++this.position < A);
      if (Y) {
        if (fe)
          fe.spaces.after = Y;
        else if (!this.options.lossy) {
          var ge = this.tokens[$], he = this.tokens[this.position - 1];
          ie.push(new o.default({
            value: "",
            source: Q(ge[h.FIELDS.START_LINE], ge[h.FIELDS.START_COL], he[h.FIELDS.END_LINE], he[h.FIELDS.END_COL]),
            sourceIndex: ge[h.FIELDS.START_POS],
            spaces: {
              before: Y,
              after: ""
            }
          }));
        }
      }
      return ie;
    }, X.convertWhitespaceNodesToSpace = function(A, $) {
      var ie = this;
      $ === void 0 && ($ = !1);
      var Y = "", fe = "";
      A.forEach(function(ge) {
        var he = ie.lossySpace(ge.spaces.before, $), Ie = ie.lossySpace(ge.rawSpaceBefore, $);
        Y += he + ie.lossySpace(ge.spaces.after, $ && he.length === 0), fe += he + ge.value + ie.lossySpace(ge.rawSpaceAfter, $ && Ie.length === 0);
      }), fe === Y && (fe = void 0);
      var ke = {
        space: Y,
        rawSpace: fe
      };
      return ke;
    }, X.isNamedCombinator = function(A) {
      return A === void 0 && (A = this.position), this.tokens[A + 0] && this.tokens[A + 0][h.FIELDS.TYPE] === c.slash && this.tokens[A + 1] && this.tokens[A + 1][h.FIELDS.TYPE] === c.word && this.tokens[A + 2] && this.tokens[A + 2][h.FIELDS.TYPE] === c.slash;
    }, X.namedCombinator = function() {
      if (this.isNamedCombinator()) {
        var A = this.content(this.tokens[this.position + 1]), $ = (0, _.unesc)(A).toLowerCase(), ie = {};
        $ !== A && (ie.value = "/" + A + "/");
        var Y = new g.default({
          value: "/" + $ + "/",
          source: Q(this.currToken[h.FIELDS.START_LINE], this.currToken[h.FIELDS.START_COL], this.tokens[this.position + 2][h.FIELDS.END_LINE], this.tokens[this.position + 2][h.FIELDS.END_COL]),
          sourceIndex: this.currToken[h.FIELDS.START_POS],
          raws: ie
        });
        return this.position = this.position + 3, Y;
      } else
        this.unexpected();
    }, X.combinator = function() {
      var A = this;
      if (this.content() === "|")
        return this.namespace();
      var $ = this.locateNextMeaningfulToken(this.position);
      if ($ < 0 || this.tokens[$][h.FIELDS.TYPE] === c.comma) {
        var ie = this.parseWhitespaceEquivalentTokens($);
        if (ie.length > 0) {
          var Y = this.current.last;
          if (Y) {
            var fe = this.convertWhitespaceNodesToSpace(ie), ke = fe.space, ge = fe.rawSpace;
            ge !== void 0 && (Y.rawSpaceAfter += ge), Y.spaces.after += ke;
          } else
            ie.forEach(function(mt) {
              return A.newNode(mt);
            });
        }
        return;
      }
      var he = this.currToken, Ie = void 0;
      $ > this.position && (Ie = this.parseWhitespaceEquivalentTokens($));
      var x;
      if (this.isNamedCombinator() ? x = this.namedCombinator() : this.currToken[h.FIELDS.TYPE] === c.combinator ? (x = new g.default({
        value: this.content(),
        source: H(this.currToken),
        sourceIndex: this.currToken[h.FIELDS.START_POS]
      }), this.position++) : L[this.currToken[h.FIELDS.TYPE]] || Ie || this.unexpected(), x) {
        if (Ie) {
          var y = this.convertWhitespaceNodesToSpace(Ie), I = y.space, J = y.rawSpace;
          x.spaces.before = I, x.rawSpaceBefore = J;
        }
      } else {
        var de = this.convertWhitespaceNodesToSpace(Ie, !0), ye = de.space, Ye = de.rawSpace;
        Ye || (Ye = ye);
        var ze = {}, lt = {
          spaces: {}
        };
        ye.endsWith(" ") && Ye.endsWith(" ") ? (ze.before = ye.slice(0, ye.length - 1), lt.spaces.before = Ye.slice(0, Ye.length - 1)) : ye.startsWith(" ") && Ye.startsWith(" ") ? (ze.after = ye.slice(1), lt.spaces.after = Ye.slice(1)) : lt.value = Ye, x = new g.default({
          value: " ",
          source: N(he, this.tokens[this.position - 1]),
          sourceIndex: he[h.FIELDS.START_POS],
          spaces: ze,
          raws: lt
        });
      }
      return this.currToken && this.currToken[h.FIELDS.TYPE] === c.space && (x.spaces.after = this.optionalSpace(this.content()), this.position++), this.newNode(x);
    }, X.comma = function() {
      if (this.position === this.tokens.length - 1) {
        this.root.trailingComma = !0, this.position++;
        return;
      }
      this.current._inferEndPosition();
      var A = new n.default({
        source: {
          start: F(this.tokens[this.position + 1])
        }
      });
      this.current.parent.append(A), this.current = A, this.position++;
    }, X.comment = function() {
      var A = this.currToken;
      this.newNode(new a.default({
        value: this.content(),
        source: H(A),
        sourceIndex: A[h.FIELDS.START_POS]
      })), this.position++;
    }, X.error = function(A, $) {
      throw this.root.error(A, $);
    }, X.missingBackslash = function() {
      return this.error("Expected a backslash preceding the semicolon.", {
        index: this.currToken[h.FIELDS.START_POS]
      });
    }, X.missingParenthesis = function() {
      return this.expected("opening parenthesis", this.currToken[h.FIELDS.START_POS]);
    }, X.missingSquareBracket = function() {
      return this.expected("opening square bracket", this.currToken[h.FIELDS.START_POS]);
    }, X.unexpected = function() {
      return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[h.FIELDS.START_POS]);
    }, X.namespace = function() {
      var A = this.prevToken && this.content(this.prevToken) || !0;
      if (this.nextToken[h.FIELDS.TYPE] === c.word)
        return this.position++, this.word(A);
      if (this.nextToken[h.FIELDS.TYPE] === c.asterisk)
        return this.position++, this.universal(A);
    }, X.nesting = function() {
      if (this.nextToken) {
        var A = this.content(this.nextToken);
        if (A === "|") {
          this.position++;
          return;
        }
      }
      var $ = this.currToken;
      this.newNode(new O.default({
        value: this.content(),
        source: H($),
        sourceIndex: $[h.FIELDS.START_POS]
      })), this.position++;
    }, X.parentheses = function() {
      var A = this.current.last, $ = 1;
      if (this.position++, A && A.type === p.PSEUDO) {
        var ie = new n.default({
          source: {
            start: F(this.tokens[this.position - 1])
          }
        }), Y = this.current;
        for (A.append(ie), this.current = ie; this.position < this.tokens.length && $; )
          this.currToken[h.FIELDS.TYPE] === c.openParenthesis && $++, this.currToken[h.FIELDS.TYPE] === c.closeParenthesis && $--, $ ? this.parse() : (this.current.source.end = G(this.currToken), this.current.parent.source.end = G(this.currToken), this.position++);
        this.current = Y;
      } else {
        for (var fe = this.currToken, ke = "(", ge; this.position < this.tokens.length && $; )
          this.currToken[h.FIELDS.TYPE] === c.openParenthesis && $++, this.currToken[h.FIELDS.TYPE] === c.closeParenthesis && $--, ge = this.currToken, ke += this.parseParenthesisToken(this.currToken), this.position++;
        A ? A.appendToPropertyAndEscape("value", ke, ke) : this.newNode(new o.default({
          value: ke,
          source: Q(fe[h.FIELDS.START_LINE], fe[h.FIELDS.START_COL], ge[h.FIELDS.END_LINE], ge[h.FIELDS.END_COL]),
          sourceIndex: fe[h.FIELDS.START_POS]
        }));
      }
      if ($)
        return this.expected("closing parenthesis", this.currToken[h.FIELDS.START_POS]);
    }, X.pseudo = function() {
      for (var A = this, $ = "", ie = this.currToken; this.currToken && this.currToken[h.FIELDS.TYPE] === c.colon; )
        $ += this.content(), this.position++;
      if (!this.currToken)
        return this.expected(["pseudo-class", "pseudo-element"], this.position - 1);
      if (this.currToken[h.FIELDS.TYPE] === c.word)
        this.splitWord(!1, function(Y, fe) {
          $ += Y, A.newNode(new l.default({
            value: $,
            source: N(ie, A.currToken),
            sourceIndex: ie[h.FIELDS.START_POS]
          })), fe > 1 && A.nextToken && A.nextToken[h.FIELDS.TYPE] === c.openParenthesis && A.error("Misplaced parenthesis.", {
            index: A.nextToken[h.FIELDS.START_POS]
          });
        });
      else
        return this.expected(["pseudo-class", "pseudo-element"], this.currToken[h.FIELDS.START_POS]);
    }, X.space = function() {
      var A = this.content();
      this.position === 0 || this.prevToken[h.FIELDS.TYPE] === c.comma || this.prevToken[h.FIELDS.TYPE] === c.openParenthesis || this.current.nodes.every(function($) {
        return $.type === "comment";
      }) ? (this.spaces = this.optionalSpace(A), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[h.FIELDS.TYPE] === c.comma || this.nextToken[h.FIELDS.TYPE] === c.closeParenthesis ? (this.current.last.spaces.after = this.optionalSpace(A), this.position++) : this.combinator();
    }, X.string = function() {
      var A = this.currToken;
      this.newNode(new o.default({
        value: this.content(),
        source: H(A),
        sourceIndex: A[h.FIELDS.START_POS]
      })), this.position++;
    }, X.universal = function(A) {
      var $ = this.nextToken;
      if ($ && this.content($) === "|")
        return this.position++, this.namespace();
      var ie = this.currToken;
      this.newNode(new m.default({
        value: this.content(),
        source: H(ie),
        sourceIndex: ie[h.FIELDS.START_POS]
      }), A), this.position++;
    }, X.splitWord = function(A, $) {
      for (var ie = this, Y = this.nextToken, fe = this.content(); Y && ~[c.dollar, c.caret, c.equals, c.word].indexOf(Y[h.FIELDS.TYPE]); ) {
        this.position++;
        var ke = this.content();
        if (fe += ke, ke.lastIndexOf("\\") === ke.length - 1) {
          var ge = this.nextToken;
          ge && ge[h.FIELDS.TYPE] === c.space && (fe += this.requiredSpace(this.content(ge)), this.position++);
        }
        Y = this.nextToken;
      }
      var he = ue(fe, ".").filter(function(I) {
        var J = fe[I - 1] === "\\", de = /^\d+\.\d+%$/.test(fe);
        return !J && !de;
      }), Ie = ue(fe, "#").filter(function(I) {
        return fe[I - 1] !== "\\";
      }), x = ue(fe, "#{");
      x.length && (Ie = Ie.filter(function(I) {
        return !~x.indexOf(I);
      }));
      var y = (0, E.default)(ce([0].concat(he, Ie)));
      y.forEach(function(I, J) {
        var de = y[J + 1] || fe.length, ye = fe.slice(I, de);
        if (J === 0 && $)
          return $.call(ie, ye, y.length);
        var Ye, ze = ie.currToken, lt = ze[h.FIELDS.START_POS] + y[J], mt = Q(ze[1], ze[2] + I, ze[3], ze[2] + (de - 1));
        if (~he.indexOf(I)) {
          var ut = {
            value: ye.slice(1),
            source: mt,
            sourceIndex: lt
          };
          Ye = new i.default(re(ut, "value"));
        } else if (~Ie.indexOf(I)) {
          var Jt = {
            value: ye.slice(1),
            source: mt,
            sourceIndex: lt
          };
          Ye = new s.default(re(Jt, "value"));
        } else {
          var Vt = {
            value: ye,
            source: mt,
            sourceIndex: lt
          };
          re(Vt, "value"), Ye = new u.default(Vt);
        }
        ie.newNode(Ye, A), A = null;
      }), this.position++;
    }, X.word = function(A) {
      var $ = this.nextToken;
      return $ && this.content($) === "|" ? (this.position++, this.namespace()) : this.splitWord(A);
    }, X.loop = function() {
      for (; this.position < this.tokens.length; )
        this.parse(!0);
      return this.current._inferEndPosition(), this.root;
    }, X.parse = function(A) {
      switch (this.currToken[h.FIELDS.TYPE]) {
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
          A && this.missingParenthesis();
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
    }, X.expected = function(A, $, ie) {
      if (Array.isArray(A)) {
        var Y = A.pop();
        A = A.join(", ") + " or " + Y;
      }
      var fe = /^[aeiou]/.test(A[0]) ? "an" : "a";
      return ie ? this.error("Expected " + fe + " " + A + ', found "' + ie + '" instead.', {
        index: $
      }) : this.error("Expected " + fe + " " + A + ".", {
        index: $
      });
    }, X.requiredSpace = function(A) {
      return this.options.lossy ? " " : A;
    }, X.optionalSpace = function(A) {
      return this.options.lossy ? "" : A;
    }, X.lossySpace = function(A, $) {
      return this.options.lossy ? $ ? " " : "" : A;
    }, X.parseParenthesisToken = function(A) {
      var $ = this.content(A);
      return A[h.FIELDS.TYPE] === c.space ? this.requiredSpace($) : $;
    }, X.newNode = function(A, $) {
      return $ && (/^ +$/.test($) && (this.options.lossy || (this.spaces = (this.spaces || "") + $), $ = !0), A.namespace = $, re(A, "namespace")), this.spaces && (A.spaces.before = this.spaces, this.spaces = ""), this.current.append(A);
    }, X.content = function(A) {
      return A === void 0 && (A = this.currToken), this.css.slice(A[h.FIELDS.START_POS], A[h.FIELDS.END_POS]);
    }, X.locateNextMeaningfulToken = function(A) {
      A === void 0 && (A = this.position + 1);
      for (var $ = A; $ < this.tokens.length; )
        if (V[this.tokens[$][h.FIELDS.TYPE]]) {
          $++;
          continue;
        } else
          return $;
      return -1;
    }, b(te, [{
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
    }]), te;
  }();
  t.default = be, e.exports = t.default;
})($i, $i.exports);
var Nf = $i.exports;
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
      return l === void 0 && (l = {}), new Promise(function(m, g) {
        try {
          var O = f._root(o, l);
          Promise.resolve(f.func(O)).then(function(E) {
            var h = void 0;
            return f._shouldUpdateSelector(o, l) && (h = O.toString(), o.selector = h), {
              transform: E,
              root: O,
              string: h
            };
          }).then(m, g);
        } catch (E) {
          g(E);
          return;
        }
      });
    }, s._runSync = function(o, l) {
      l === void 0 && (l = {});
      var f = this._root(o, l), m = this.func(f);
      if (m && typeof m.then == "function")
        throw new Error("Selector processor returned a promise to a synchronous call.");
      var g = void 0;
      return l.updateSelector && typeof o != "string" && (g = f.toString(), o.selector = g), {
        transform: m,
        root: f,
        string: g
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
})(Gi, Gi.exports);
var Lf = Gi.exports, kl = {}, He = {};
He.__esModule = !0;
He.universal = He.tag = He.string = He.selector = He.root = He.pseudo = He.nesting = He.id = He.comment = He.combinator = He.className = He.attribute = void 0;
var Mf = Lt($a), Af = Lt(dl), Rf = Lt(yl), Ff = Lt(fl), Yf = Lt(hl), Bf = Lt(vl), Uf = Lt(gl), Wf = Lt(ul), zf = Lt(cl), Vf = Lt(pl), Hf = Lt(ml), jf = Lt(_l);
function Lt(e) {
  return e && e.__esModule ? e : { default: e };
}
var qf = function(t) {
  return new Mf.default(t);
};
He.attribute = qf;
var Gf = function(t) {
  return new Af.default(t);
};
He.className = Gf;
var $f = function(t) {
  return new Rf.default(t);
};
He.combinator = $f;
var Kf = function(t) {
  return new Ff.default(t);
};
He.comment = Kf;
var Xf = function(t) {
  return new Yf.default(t);
};
He.id = Xf;
var Qf = function(t) {
  return new Bf.default(t);
};
He.nesting = Qf;
var Zf = function(t) {
  return new Uf.default(t);
};
He.pseudo = Zf;
var Jf = function(t) {
  return new Wf.default(t);
};
He.root = Jf;
var eh = function(t) {
  return new zf.default(t);
};
He.selector = eh;
var th = function(t) {
  return new Vf.default(t);
};
He.string = th;
var rh = function(t) {
  return new Hf.default(t);
};
He.tag = rh;
var nh = function(t) {
  return new jf.default(t);
};
He.universal = nh;
var Re = {};
Re.__esModule = !0;
Re.isNode = Ka;
Re.isPseudoElement = Tl;
Re.isPseudoClass = mh;
Re.isContainer = ph;
Re.isNamespace = gh;
Re.isUniversal = Re.isTag = Re.isString = Re.isSelector = Re.isRoot = Re.isPseudo = Re.isNesting = Re.isIdentifier = Re.isComment = Re.isCombinator = Re.isClassName = Re.isAttribute = void 0;
var tt = Se, vt, ih = (vt = {}, vt[tt.ATTRIBUTE] = !0, vt[tt.CLASS] = !0, vt[tt.COMBINATOR] = !0, vt[tt.COMMENT] = !0, vt[tt.ID] = !0, vt[tt.NESTING] = !0, vt[tt.PSEUDO] = !0, vt[tt.ROOT] = !0, vt[tt.SELECTOR] = !0, vt[tt.STRING] = !0, vt[tt.TAG] = !0, vt[tt.UNIVERSAL] = !0, vt);
function Ka(e) {
  return typeof e == "object" && ih[e.type];
}
function Mt(e, t) {
  return Ka(t) && t.type === e;
}
var xl = Mt.bind(null, tt.ATTRIBUTE);
Re.isAttribute = xl;
var ah = Mt.bind(null, tt.CLASS);
Re.isClassName = ah;
var sh = Mt.bind(null, tt.COMBINATOR);
Re.isCombinator = sh;
var oh = Mt.bind(null, tt.COMMENT);
Re.isComment = oh;
var lh = Mt.bind(null, tt.ID);
Re.isIdentifier = lh;
var uh = Mt.bind(null, tt.NESTING);
Re.isNesting = uh;
var Xa = Mt.bind(null, tt.PSEUDO);
Re.isPseudo = Xa;
var ch = Mt.bind(null, tt.ROOT);
Re.isRoot = ch;
var dh = Mt.bind(null, tt.SELECTOR);
Re.isSelector = dh;
var fh = Mt.bind(null, tt.STRING);
Re.isString = fh;
var Sl = Mt.bind(null, tt.TAG);
Re.isTag = Sl;
var hh = Mt.bind(null, tt.UNIVERSAL);
Re.isUniversal = hh;
function Tl(e) {
  return Xa(e) && e.value && (e.value.startsWith("::") || e.value.toLowerCase() === ":before" || e.value.toLowerCase() === ":after" || e.value.toLowerCase() === ":first-letter" || e.value.toLowerCase() === ":first-line");
}
function mh(e) {
  return Xa(e) && !Tl(e);
}
function ph(e) {
  return !!(Ka(e) && e.walk);
}
function gh(e) {
  return xl(e) || Sl(e);
}
(function(e) {
  e.__esModule = !0;
  var t = Se;
  Object.keys(t).forEach(function(i) {
    i === "default" || i === "__esModule" || i in e && e[i] === t[i] || (e[i] = t[i]);
  });
  var r = He;
  Object.keys(r).forEach(function(i) {
    i === "default" || i === "__esModule" || i in e && e[i] === r[i] || (e[i] = r[i]);
  });
  var n = Re;
  Object.keys(n).forEach(function(i) {
    i === "default" || i === "__esModule" || i in e && e[i] === n[i] || (e[i] = n[i]);
  });
})(kl);
(function(e, t) {
  t.__esModule = !0, t.default = void 0;
  var r = s(Lf), n = a(kl);
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
    var m = {}, g = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var O in l)
      if (Object.prototype.hasOwnProperty.call(l, O)) {
        var E = g ? Object.getOwnPropertyDescriptor(l, O) : null;
        E && (E.get || E.set) ? Object.defineProperty(m, O, E) : m[O] = l[O];
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
})(qi, qi.exports);
var _h = qi.exports;
const yh = Od, Ol = _h, vh = Ol();
var bh = {
  isUsableColor(e, t) {
    return yh(t) && e !== "gray" && t[600];
  },
  /**
   * @param {string} selector
   */
  commonTrailingPseudos(e) {
    let t = vh.astSync(e), r = [];
    for (let [i, a] of t.nodes.entries())
      for (const [s, u] of [...a.nodes].reverse().entries()) {
        if (u.type !== "pseudo" || !u.value.startsWith("::"))
          break;
        r[s] = r[s] || [], r[s][i] = u;
      }
    let n = Ol.selector();
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
const wh = il, kh = dd, xh = md, Sh = pd, { commonTrailingPseudos: Th } = bh, Vs = {
  // Reserved for future "magic properties", for example:
  // bulletColor: (color) => ({ 'ul > li::before': { backgroundColor: color } }),
};
function ma(e, { className: t, modifier: r, prefix: n }) {
  let i = n(`.not-${t}`).slice(1), a = e.startsWith(">") ? `${r === "DEFAULT" ? `.${t}` : `.${t}-${r}`} ` : "", [s, u] = Th(e);
  return s ? `:where(${a}${u}):not(:where([class~="${i}"],[class~="${i}"] *))${s}` : `:where(${a}${e}):not(:where([class~="${i}"],[class~="${i}"] *))`;
}
function Hs(e) {
  return typeof e == "object" && e !== null;
}
function Oh(e = {}, { target: t, className: r, modifier: n, prefix: i }) {
  function a(s, u) {
    return t === "legacy" ? [s, u] : Array.isArray(u) ? [s, u] : Hs(u) ? Object.values(u).some(Hs) ? [
      ma(s, { className: r, modifier: n, prefix: i }),
      u,
      Object.fromEntries(Object.entries(u).map(([l, f]) => a(l, f)))
    ] : [ma(s, { className: r, modifier: n, prefix: i }), u] : [s, u];
  }
  return Object.fromEntries(
    Object.entries(
      kh(
        {},
        ...Object.keys(e).filter((s) => Vs[s]).map((s) => Vs[s](e[s])),
        ...xh(e.css || {})
      )
    ).map(([s, u]) => a(s, u))
  );
}
var Eh = wh.withOptions(
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
        t === "legacy" ? f : `& :is(${ma(f, u)})`
      );
    }
    n(
      Object.keys(s).map((o) => ({
        [o === "DEFAULT" ? `.${e}` : `.${e}-${o}`]: Oh(
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
    theme: { typography: Sh }
  })
);
const Ch = /* @__PURE__ */ nn(Eh), El = {
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
        sans: ["Roboto", ...Ws.fontFamily.sans],
        mono: ["Roboto Mono", ...Ws.fontFamily.mono]
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
        box: `0px 1px 4px ${yr.gray[800]}1A, 0px 4px 8px ${yr.gray[800]}33`,
        "box-dark": `0px 1px 4px ${yr.gray[900]}, 0px 4px 8px ${yr.gray[900]}`,
        card: `0px 2px 4px ${yr.gray[800]}1A, 0px 4px 12px ${yr.gray[800]}40`,
        "card-dark": "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 4px 12px rgba(0, 0, 0, 0.5)",
        "gray-200-border-b-full": `0 1px 0 0  ${yr.gray[200]}`,
        "gray-700-border-b-full": `0 1px 0 0  ${yr.gray[700]}`
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
    Ch,
    /** Add dynamically content to :before and :after pseudo-elements
     * @source: https://github.com/tailwindlabs/tailwindcss/discussions/2119#discussioncomment-200587
     * **/
    zs(({ addVariant: e, e: t }) => {
      e("before", ({ modifySelectors: r, separator: n }) => {
        r(({ className: i }) => `.${t(`before${n}${i}`)}::before`);
      }), e("after", ({ modifySelectors: r, separator: n }) => {
        r(({ className: i }) => `.${t(`after${n}${i}`)}::after`);
      });
    }),
    zs(({ addUtilities: e }) => {
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
}, ht = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, jr = el(El), Dh = {
  name: "PawTypography",
  props: ["view"],
  data() {
    return {
      typography: {
        xxl: jr.theme.typography.xxl,
        xl: jr.theme.typography.xl,
        lg: jr.theme.typography.lg,
        md: jr.theme.typography.md,
        sm: jr.theme.typography.sm,
        xs: jr.theme.typography.xs
      }
    };
  },
  methods: {
    getFontCSS(e) {
      return e.css.constructor.name === "Array" ? e.css[e.css.length - 1] : e.css;
    }
  }
}, Ih = { class: "bg-white dark:bg-gray-800 p-4 xs:p-8 rounded-3xl flex flex-col gap-4 transition" }, Ph = {
  key: 0,
  class: "flex flex-col gap-8 sm:gap-4"
}, Nh = { class: "flex-none font-mono text-xs text-gray-500 w-24" }, Lh = /* @__PURE__ */ ne("span", { class: "font-bold" }, "Bold", -1), Mh = {
  key: 0,
  class: "italic"
}, Ah = {
  key: 1,
  class: "text-gray-900 dark:text-white transition"
}, Rh = /* @__PURE__ */ ed('<h1 class="prose-xxl font-bold">Supercharged for pros.</h1><h2 class="prose-xl font-bold text-gray-500">From $1999</h2><br><br><p class="text-lg"><span class="font-bold">A case full of energy.</span> <span class="text-gray-500">Wirelessly</span></p><p class="prose-md max-w-xs">and effortlessly recharge the MagSafe Charging Case on a MagSafe charger. Fully loaded, the case gives you up to 30 hours of total listening time. And charging AirPods in the case for just 5 minutes generates around an hour of listening time.</p><br><br><p class="prose-sm text-gray-500">Delightfully capable. Surprisingly affordable.</p><p class="prose-xs text-gray-500">Die Displays haben gerundete Ecken. Als Rechteck gemessen hat das Display eine Diagonale von 12,9&quot; (32,77 cm) beim 12,9&quot; iPad Pro, von 11&quot; (27,96 cm) beim 11&quot; iPad Pro, von 10,86&quot; (27,59 cm) beim iPad Air (4. Generation) und von 8,3&quot; (21,08 cm) beim iPad mini (6. Generation). Der tatsächlich sichtbare Displaybereich ist kleiner.</p>', 10), Fh = [
  Rh
];
function Yh(e, t, r, n, i, a) {
  return P(), W("div", Ih, [
    r.view === "sizes" ? (P(), W("div", Ph, [
      (P(!0), W(nt, null, _t(i.typography, (s, u) => (P(), W("div", {
        key: u,
        class: "sm:flex sm:flex-row sm:justify-items-start sm:items-center sm:gap-10 text-gray-900 dark:text-white transition"
      }, [
        ne("p", Nh, " prose-" + pe(u) + " " + pe(a.getFontCSS(s).fontSize), 1),
        ne("p", {
          class: j(`prose-${u}`)
        }, " Roboto Regular ", 2),
        ne("p", {
          class: j([`prose-${u}`, "sm:text-right sm:ml-auto"])
        }, [
          Lh,
          ["lg", "md", "sm", "xs"].includes(u) ? (P(), W("span", Mh, ", Italic")) : Z("", !0),
          ["sm", "xs"].includes(u) ? (P(), W("span", {
            key: 1,
            class: j(["uppercase", { "tracking-wider": u === "sm", "tracking-widest": u === "xs" }])
          }, ", Uppercase", 2)) : Z("", !0)
        ], 2)
      ]))), 128))
    ])) : Z("", !0),
    r.view === "context" ? (P(), W("div", Ah, Fh)) : Z("", !0)
  ]);
}
const Fb = /* @__PURE__ */ ht(Dh, [["render", Yh]]);
/*!
  * shared v9.10.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const hr = typeof window < "u";
let Ct, Br;
if (process.env.NODE_ENV !== "production") {
  const e = hr && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Ct = (t) => {
    e.mark(t);
  }, Br = (t, r, n) => {
    e.measure(t, r, n), e.clearMarks(r), e.clearMarks(n);
  });
}
const Bh = /\{([0-9a-zA-Z]+)\}/g;
function Qa(e, ...t) {
  return t.length === 1 && Fe(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Bh, (r, n) => t.hasOwnProperty(n) ? t[n] : "");
}
const pr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Uh = (e, t, r) => Wh({ l: e, k: t, s: r }), Wh = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ct = (e) => typeof e == "number" && isFinite(e), zh = (e) => Dl(e) === "[object Date]", tn = (e) => Dl(e) === "[object RegExp]", ii = (e) => Ce(e) && Object.keys(e).length === 0, dt = Object.assign;
let js;
const or = () => js || (js = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qs(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Vh = Object.prototype.hasOwnProperty;
function jn(e, t) {
  return Vh.call(e, t);
}
const at = Array.isArray, Ge = (e) => typeof e == "function", se = (e) => typeof e == "string", We = (e) => typeof e == "boolean", Fe = (e) => e !== null && typeof e == "object", Hh = (e) => Fe(e) && Ge(e.then) && Ge(e.catch), Cl = Object.prototype.toString, Dl = (e) => Cl.call(e), Ce = (e) => {
  if (!Fe(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, jh = (e) => e == null ? "" : at(e) || Ce(e) && e.toString === Cl ? JSON.stringify(e, null, 2) : String(e);
function qh(e, t = "") {
  return e.reduce((r, n, i) => i === 0 ? r + n : r + t + n, "");
}
const Gs = 2;
function Gh(e, t = 0, r = e.length) {
  const n = e.split(/\r?\n/);
  let i = 0;
  const a = [];
  for (let s = 0; s < n.length; s++)
    if (i += n[s].length + 1, i >= t) {
      for (let u = s - Gs; u <= s + Gs || r > i; u++) {
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
function Za(e) {
  let t = e;
  return () => ++t;
}
function Er(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const $s = {};
function Il(e) {
  $s[e] || ($s[e] = !0, Er(e));
}
function $h() {
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
const Fn = (e) => !Fe(e) || at(e);
function Un(e, t) {
  if (Fn(e) || Fn(t))
    throw new Error("Invalid value");
  const r = [{ src: e, des: t }];
  for (; r.length; ) {
    const { src: n, des: i } = r.pop();
    Object.keys(n).forEach((a) => {
      Fn(n[a]) || Fn(i[a]) ? i[a] = n[a] : r.push({ src: n[a], des: i[a] });
    });
  }
}
/*!
  * message-compiler v9.10.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Kh(e, t, r) {
  return { line: e, column: t, offset: r };
}
function pa(e, t, r) {
  const n = { start: e, end: t };
  return r != null && (n.source = r), n;
}
const Xh = /\{([0-9a-zA-Z]+)\}/g;
function Qh(e, ...t) {
  return t.length === 1 && Zh(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Xh, (r, n) => t.hasOwnProperty(n) ? t[n] : "");
}
const Pl = Object.assign, Ks = (e) => typeof e == "string", Zh = (e) => e !== null && typeof e == "object";
function Nl(e, t = "") {
  return e.reduce((r, n, i) => i === 0 ? r + n : r + t + n, "");
}
const _e = {
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
}, Jh = {
  // tokenizer error messages
  [_e.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [_e.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [_e.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [_e.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [_e.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [_e.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [_e.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [_e.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [_e.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [_e.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [_e.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [_e.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [_e.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [_e.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [_e.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [_e.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function an(e, t, r = {}) {
  const { domain: n, messages: i, args: a } = r, s = Qh((i || Jh)[e] || "", ...a || []), u = new SyntaxError(String(s));
  return u.code = e, t && (u.location = t), u.domain = n, u;
}
function e0(e) {
  throw e;
}
const t0 = /<\/?[\w\s="/.':;#-\/]+>/, r0 = (e) => t0.test(e), nr = " ", n0 = "\r", gt = `
`, i0 = String.fromCharCode(8232), a0 = String.fromCharCode(8233);
function s0(e) {
  const t = e;
  let r = 0, n = 1, i = 1, a = 0;
  const s = (R) => t[R] === n0 && t[R + 1] === gt, u = (R) => t[R] === gt, o = (R) => t[R] === a0, l = (R) => t[R] === i0, f = (R) => s(R) || u(R) || o(R) || l(R), m = () => r, g = () => n, O = () => i, E = () => a, h = (R) => s(R) || o(R) || l(R) ? gt : t[R], c = () => h(r), p = () => h(r + a);
  function _() {
    return a = 0, f(r) && (n++, i = 0), s(r) && r++, r++, i++, t[r];
  }
  function k() {
    return s(r + a) && a++, a++, t[r + a];
  }
  function w() {
    r = 0, n = 1, i = 1, a = 0;
  }
  function T(R = 0) {
    a = R;
  }
  function D() {
    const R = r + a;
    for (; R !== r; )
      _();
    a = 0;
  }
  return {
    index: m,
    line: g,
    column: O,
    peekOffset: E,
    charAt: h,
    currentChar: c,
    currentPeek: p,
    next: _,
    peek: k,
    reset: w,
    resetPeek: T,
    skipToPeek: D
  };
}
const vr = void 0, o0 = ".", Xs = "'", l0 = "tokenizer";
function u0(e, t = {}) {
  const r = t.location !== !1, n = s0(e), i = () => n.index(), a = () => Kh(n.line(), n.column(), n.index()), s = a(), u = i(), o = {
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
  function m(x, y, I, ...J) {
    const de = l();
    if (y.column += I, y.offset += I, f) {
      const ye = r ? pa(de.startLoc, y) : null, Ye = an(x, ye, {
        domain: l0,
        args: J
      });
      f(Ye);
    }
  }
  function g(x, y, I) {
    x.endLoc = a(), x.currentType = y;
    const J = { type: y };
    return r && (J.loc = pa(x.startLoc, x.endLoc)), I != null && (J.value = I), J;
  }
  const O = (x) => g(
    x,
    14
    /* TokenTypes.EOF */
  );
  function E(x, y) {
    return x.currentChar() === y ? (x.next(), y) : (m(_e.EXPECTED_TOKEN, a(), 0, y), "");
  }
  function h(x) {
    let y = "";
    for (; x.currentPeek() === nr || x.currentPeek() === gt; )
      y += x.currentPeek(), x.peek();
    return y;
  }
  function c(x) {
    const y = h(x);
    return x.skipToPeek(), y;
  }
  function p(x) {
    if (x === vr)
      return !1;
    const y = x.charCodeAt(0);
    return y >= 97 && y <= 122 || // a-z
    y >= 65 && y <= 90 || // A-Z
    y === 95;
  }
  function _(x) {
    if (x === vr)
      return !1;
    const y = x.charCodeAt(0);
    return y >= 48 && y <= 57;
  }
  function k(x, y) {
    const { currentType: I } = y;
    if (I !== 2)
      return !1;
    h(x);
    const J = p(x.currentPeek());
    return x.resetPeek(), J;
  }
  function w(x, y) {
    const { currentType: I } = y;
    if (I !== 2)
      return !1;
    h(x);
    const J = x.currentPeek() === "-" ? x.peek() : x.currentPeek(), de = _(J);
    return x.resetPeek(), de;
  }
  function T(x, y) {
    const { currentType: I } = y;
    if (I !== 2)
      return !1;
    h(x);
    const J = x.currentPeek() === Xs;
    return x.resetPeek(), J;
  }
  function D(x, y) {
    const { currentType: I } = y;
    if (I !== 8)
      return !1;
    h(x);
    const J = x.currentPeek() === ".";
    return x.resetPeek(), J;
  }
  function R(x, y) {
    const { currentType: I } = y;
    if (I !== 9)
      return !1;
    h(x);
    const J = p(x.currentPeek());
    return x.resetPeek(), J;
  }
  function B(x, y) {
    const { currentType: I } = y;
    if (!(I === 8 || I === 12))
      return !1;
    h(x);
    const J = x.currentPeek() === ":";
    return x.resetPeek(), J;
  }
  function b(x, y) {
    const { currentType: I } = y;
    if (I !== 10)
      return !1;
    const J = () => {
      const ye = x.currentPeek();
      return ye === "{" ? p(x.peek()) : ye === "@" || ye === "%" || ye === "|" || ye === ":" || ye === "." || ye === nr || !ye ? !1 : ye === gt ? (x.peek(), J()) : p(ye);
    }, de = J();
    return x.resetPeek(), de;
  }
  function L(x) {
    h(x);
    const y = x.currentPeek() === "|";
    return x.resetPeek(), y;
  }
  function V(x) {
    const y = h(x), I = x.currentPeek() === "%" && x.peek() === "{";
    return x.resetPeek(), {
      isModulo: I,
      hasSpace: y.length > 0
    };
  }
  function F(x, y = !0) {
    const I = (de = !1, ye = "", Ye = !1) => {
      const ze = x.currentPeek();
      return ze === "{" ? ye === "%" ? !1 : de : ze === "@" || !ze ? ye === "%" ? !0 : de : ze === "%" ? (x.peek(), I(de, "%", !0)) : ze === "|" ? ye === "%" || Ye ? !0 : !(ye === nr || ye === gt) : ze === nr ? (x.peek(), I(!0, nr, Ye)) : ze === gt ? (x.peek(), I(!0, gt, Ye)) : !0;
    }, J = I();
    return y && x.resetPeek(), J;
  }
  function G(x, y) {
    const I = x.currentChar();
    return I === vr ? vr : y(I) ? (x.next(), I) : null;
  }
  function Q(x) {
    return G(x, (I) => {
      const J = I.charCodeAt(0);
      return J >= 97 && J <= 122 || // a-z
      J >= 65 && J <= 90 || // A-Z
      J >= 48 && J <= 57 || // 0-9
      J === 95 || // _
      J === 36;
    });
  }
  function H(x) {
    return G(x, (I) => {
      const J = I.charCodeAt(0);
      return J >= 48 && J <= 57;
    });
  }
  function N(x) {
    return G(x, (I) => {
      const J = I.charCodeAt(0);
      return J >= 48 && J <= 57 || // 0-9
      J >= 65 && J <= 70 || // A-F
      J >= 97 && J <= 102;
    });
  }
  function re(x) {
    let y = "", I = "";
    for (; y = H(x); )
      I += y;
    return I;
  }
  function ue(x) {
    c(x);
    const y = x.currentChar();
    return y !== "%" && m(_e.EXPECTED_TOKEN, a(), 0, y), x.next(), "%";
  }
  function ce(x) {
    let y = "";
    for (; ; ) {
      const I = x.currentChar();
      if (I === "{" || I === "}" || I === "@" || I === "|" || !I)
        break;
      if (I === "%")
        if (F(x))
          y += I, x.next();
        else
          break;
      else if (I === nr || I === gt)
        if (F(x))
          y += I, x.next();
        else {
          if (L(x))
            break;
          y += I, x.next();
        }
      else
        y += I, x.next();
    }
    return y;
  }
  function be(x) {
    c(x);
    let y = "", I = "";
    for (; y = Q(x); )
      I += y;
    return x.currentChar() === vr && m(_e.UNTERMINATED_CLOSING_BRACE, a(), 0), I;
  }
  function te(x) {
    c(x);
    let y = "";
    return x.currentChar() === "-" ? (x.next(), y += `-${re(x)}`) : y += re(x), x.currentChar() === vr && m(_e.UNTERMINATED_CLOSING_BRACE, a(), 0), y;
  }
  function X(x) {
    c(x), E(x, "'");
    let y = "", I = "";
    const J = (ye) => ye !== Xs && ye !== gt;
    for (; y = G(x, J); )
      y === "\\" ? I += z(x) : I += y;
    const de = x.currentChar();
    return de === gt || de === vr ? (m(_e.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), de === gt && (x.next(), E(x, "'")), I) : (E(x, "'"), I);
  }
  function z(x) {
    const y = x.currentChar();
    switch (y) {
      case "\\":
      case "'":
        return x.next(), `\\${y}`;
      case "u":
        return A(x, y, 4);
      case "U":
        return A(x, y, 6);
      default:
        return m(_e.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, y), "";
    }
  }
  function A(x, y, I) {
    E(x, y);
    let J = "";
    for (let de = 0; de < I; de++) {
      const ye = N(x);
      if (!ye) {
        m(_e.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${y}${J}${x.currentChar()}`);
        break;
      }
      J += ye;
    }
    return `\\${y}${J}`;
  }
  function $(x) {
    c(x);
    let y = "", I = "";
    const J = (de) => de !== "{" && de !== "}" && de !== nr && de !== gt;
    for (; y = G(x, J); )
      I += y;
    return I;
  }
  function ie(x) {
    let y = "", I = "";
    for (; y = Q(x); )
      I += y;
    return I;
  }
  function Y(x) {
    const y = (I = !1, J) => {
      const de = x.currentChar();
      return de === "{" || de === "%" || de === "@" || de === "|" || de === "(" || de === ")" || !de || de === nr ? J : de === gt || de === o0 ? (J += de, x.next(), y(I, J)) : (J += de, x.next(), y(!0, J));
    };
    return y(!1, "");
  }
  function fe(x) {
    c(x);
    const y = E(
      x,
      "|"
      /* TokenChars.Pipe */
    );
    return c(x), y;
  }
  function ke(x, y) {
    let I = null;
    switch (x.currentChar()) {
      case "{":
        return y.braceNest >= 1 && m(_e.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), x.next(), I = g(
          y,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), c(x), y.braceNest++, I;
      case "}":
        return y.braceNest > 0 && y.currentType === 2 && m(_e.EMPTY_PLACEHOLDER, a(), 0), x.next(), I = g(
          y,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), y.braceNest--, y.braceNest > 0 && c(x), y.inLinked && y.braceNest === 0 && (y.inLinked = !1), I;
      case "@":
        return y.braceNest > 0 && m(_e.UNTERMINATED_CLOSING_BRACE, a(), 0), I = ge(x, y) || O(y), y.braceNest = 0, I;
      default: {
        let de = !0, ye = !0, Ye = !0;
        if (L(x))
          return y.braceNest > 0 && m(_e.UNTERMINATED_CLOSING_BRACE, a(), 0), I = g(y, 1, fe(x)), y.braceNest = 0, y.inLinked = !1, I;
        if (y.braceNest > 0 && (y.currentType === 5 || y.currentType === 6 || y.currentType === 7))
          return m(_e.UNTERMINATED_CLOSING_BRACE, a(), 0), y.braceNest = 0, he(x, y);
        if (de = k(x, y))
          return I = g(y, 5, be(x)), c(x), I;
        if (ye = w(x, y))
          return I = g(y, 6, te(x)), c(x), I;
        if (Ye = T(x, y))
          return I = g(y, 7, X(x)), c(x), I;
        if (!de && !ye && !Ye)
          return I = g(y, 13, $(x)), m(_e.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, I.value), c(x), I;
        break;
      }
    }
    return I;
  }
  function ge(x, y) {
    const { currentType: I } = y;
    let J = null;
    const de = x.currentChar();
    switch ((I === 8 || I === 9 || I === 12 || I === 10) && (de === gt || de === nr) && m(_e.INVALID_LINKED_FORMAT, a(), 0), de) {
      case "@":
        return x.next(), J = g(
          y,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), y.inLinked = !0, J;
      case ".":
        return c(x), x.next(), g(
          y,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return c(x), x.next(), g(
          y,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return L(x) ? (J = g(y, 1, fe(x)), y.braceNest = 0, y.inLinked = !1, J) : D(x, y) || B(x, y) ? (c(x), ge(x, y)) : R(x, y) ? (c(x), g(y, 12, ie(x))) : b(x, y) ? (c(x), de === "{" ? ke(x, y) || J : g(y, 11, Y(x))) : (I === 8 && m(_e.INVALID_LINKED_FORMAT, a(), 0), y.braceNest = 0, y.inLinked = !1, he(x, y));
    }
  }
  function he(x, y) {
    let I = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (y.braceNest > 0)
      return ke(x, y) || O(y);
    if (y.inLinked)
      return ge(x, y) || O(y);
    switch (x.currentChar()) {
      case "{":
        return ke(x, y) || O(y);
      case "}":
        return m(_e.UNBALANCED_CLOSING_BRACE, a(), 0), x.next(), g(
          y,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return ge(x, y) || O(y);
      default: {
        if (L(x))
          return I = g(y, 1, fe(x)), y.braceNest = 0, y.inLinked = !1, I;
        const { isModulo: de, hasSpace: ye } = V(x);
        if (de)
          return ye ? g(y, 0, ce(x)) : g(y, 4, ue(x));
        if (F(x))
          return g(y, 0, ce(x));
        break;
      }
    }
    return I;
  }
  function Ie() {
    const { currentType: x, offset: y, startLoc: I, endLoc: J } = o;
    return o.lastType = x, o.lastOffset = y, o.lastStartLoc = I, o.lastEndLoc = J, o.offset = i(), o.startLoc = a(), n.currentChar() === vr ? g(
      o,
      14
      /* TokenTypes.EOF */
    ) : he(n, o);
  }
  return {
    nextToken: Ie,
    currentOffset: i,
    currentPosition: a,
    context: l
  };
}
const c0 = "parser", d0 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function f0(e, t, r) {
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
function h0(e = {}) {
  const t = e.location !== !1, { onError: r } = e;
  function n(p, _, k, w, ...T) {
    const D = p.currentPosition();
    if (D.offset += w, D.column += w, r) {
      const R = t ? pa(k, D) : null, B = an(_, R, {
        domain: c0,
        args: T
      });
      r(B);
    }
  }
  function i(p, _, k) {
    const w = { type: p };
    return t && (w.start = _, w.end = _, w.loc = { start: k, end: k }), w;
  }
  function a(p, _, k, w) {
    w && (p.type = w), t && (p.end = _, p.loc && (p.loc.end = k));
  }
  function s(p, _) {
    const k = p.context(), w = i(3, k.offset, k.startLoc);
    return w.value = _, a(w, p.currentOffset(), p.currentPosition()), w;
  }
  function u(p, _) {
    const k = p.context(), { lastOffset: w, lastStartLoc: T } = k, D = i(5, w, T);
    return D.index = parseInt(_, 10), p.nextToken(), a(D, p.currentOffset(), p.currentPosition()), D;
  }
  function o(p, _) {
    const k = p.context(), { lastOffset: w, lastStartLoc: T } = k, D = i(4, w, T);
    return D.key = _, p.nextToken(), a(D, p.currentOffset(), p.currentPosition()), D;
  }
  function l(p, _) {
    const k = p.context(), { lastOffset: w, lastStartLoc: T } = k, D = i(9, w, T);
    return D.value = _.replace(d0, f0), p.nextToken(), a(D, p.currentOffset(), p.currentPosition()), D;
  }
  function f(p) {
    const _ = p.nextToken(), k = p.context(), { lastOffset: w, lastStartLoc: T } = k, D = i(8, w, T);
    return _.type !== 12 ? (n(p, _e.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), D.value = "", a(D, w, T), {
      nextConsumeToken: _,
      node: D
    }) : (_.value == null && n(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, qt(_)), D.value = _.value || "", a(D, p.currentOffset(), p.currentPosition()), {
      node: D
    });
  }
  function m(p, _) {
    const k = p.context(), w = i(7, k.offset, k.startLoc);
    return w.value = _, a(w, p.currentOffset(), p.currentPosition()), w;
  }
  function g(p) {
    const _ = p.context(), k = i(6, _.offset, _.startLoc);
    let w = p.nextToken();
    if (w.type === 9) {
      const T = f(p);
      k.modifier = T.node, w = T.nextConsumeToken || p.nextToken();
    }
    switch (w.type !== 10 && n(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, qt(w)), w = p.nextToken(), w.type === 2 && (w = p.nextToken()), w.type) {
      case 11:
        w.value == null && n(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, qt(w)), k.key = m(p, w.value || "");
        break;
      case 5:
        w.value == null && n(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, qt(w)), k.key = o(p, w.value || "");
        break;
      case 6:
        w.value == null && n(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, qt(w)), k.key = u(p, w.value || "");
        break;
      case 7:
        w.value == null && n(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, qt(w)), k.key = l(p, w.value || "");
        break;
      default: {
        n(p, _e.UNEXPECTED_EMPTY_LINKED_KEY, _.lastStartLoc, 0);
        const T = p.context(), D = i(7, T.offset, T.startLoc);
        return D.value = "", a(D, T.offset, T.startLoc), k.key = D, a(k, T.offset, T.startLoc), {
          nextConsumeToken: w,
          node: k
        };
      }
    }
    return a(k, p.currentOffset(), p.currentPosition()), {
      node: k
    };
  }
  function O(p) {
    const _ = p.context(), k = _.currentType === 1 ? p.currentOffset() : _.offset, w = _.currentType === 1 ? _.endLoc : _.startLoc, T = i(2, k, w);
    T.items = [];
    let D = null;
    do {
      const b = D || p.nextToken();
      switch (D = null, b.type) {
        case 0:
          b.value == null && n(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, qt(b)), T.items.push(s(p, b.value || ""));
          break;
        case 6:
          b.value == null && n(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, qt(b)), T.items.push(u(p, b.value || ""));
          break;
        case 5:
          b.value == null && n(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, qt(b)), T.items.push(o(p, b.value || ""));
          break;
        case 7:
          b.value == null && n(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, qt(b)), T.items.push(l(p, b.value || ""));
          break;
        case 8: {
          const L = g(p);
          T.items.push(L.node), D = L.nextConsumeToken || null;
          break;
        }
      }
    } while (_.currentType !== 14 && _.currentType !== 1);
    const R = _.currentType === 1 ? _.lastOffset : p.currentOffset(), B = _.currentType === 1 ? _.lastEndLoc : p.currentPosition();
    return a(T, R, B), T;
  }
  function E(p, _, k, w) {
    const T = p.context();
    let D = w.items.length === 0;
    const R = i(1, _, k);
    R.cases = [], R.cases.push(w);
    do {
      const B = O(p);
      D || (D = B.items.length === 0), R.cases.push(B);
    } while (T.currentType !== 14);
    return D && n(p, _e.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), a(R, p.currentOffset(), p.currentPosition()), R;
  }
  function h(p) {
    const _ = p.context(), { offset: k, startLoc: w } = _, T = O(p);
    return _.currentType === 14 ? T : E(p, k, w, T);
  }
  function c(p) {
    const _ = u0(p, Pl({}, e)), k = _.context(), w = i(0, k.offset, k.startLoc);
    return t && w.loc && (w.loc.source = p), w.body = h(_), e.onCacheKey && (w.cacheKey = e.onCacheKey(p)), k.currentType !== 14 && n(_, _e.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, p[k.offset] || ""), a(w, _.currentOffset(), _.currentPosition()), w;
  }
  return { parse: c };
}
function qt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function m0(e, t = {}) {
  const r = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => r, helper: (a) => (r.helpers.add(a), a) };
}
function Qs(e, t) {
  for (let r = 0; r < e.length; r++)
    Ja(e[r], t);
}
function Ja(e, t) {
  switch (e.type) {
    case 1:
      Qs(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Qs(e.items, t);
      break;
    case 6: {
      Ja(e.key, t), t.helper(
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
function p0(e, t = {}) {
  const r = m0(e);
  r.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Ja(e.body, r);
  const n = r.context();
  e.helpers = Array.from(n.helpers);
}
function g0(e) {
  const t = e.body;
  return t.type === 2 ? Zs(t) : t.cases.forEach((r) => Zs(r)), e;
}
function Zs(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let r = 0; r < e.items.length; r++) {
      const n = e.items[r];
      if (!(n.type === 3 || n.type === 9) || n.value == null)
        break;
      t.push(n.value);
    }
    if (t.length === e.items.length) {
      e.static = Nl(t);
      for (let r = 0; r < e.items.length; r++) {
        const n = e.items[r];
        (n.type === 3 || n.type === 9) && delete n.value;
      }
    }
  }
}
const _0 = "minifier";
function Gr(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Gr(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, r = t.cases;
      for (let n = 0; n < r.length; n++)
        Gr(r[n]);
      t.c = r, delete t.cases;
      break;
    }
    case 2: {
      const t = e, r = t.items;
      for (let n = 0; n < r.length; n++)
        Gr(r[n]);
      t.i = r, delete t.items, t.static && (t.s = t.static, delete t.static);
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
      Gr(t.key), t.k = t.key, delete t.key, t.modifier && (Gr(t.modifier), t.m = t.modifier, delete t.modifier);
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
      throw an(_e.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: _0,
        args: [e.type]
      });
  }
  delete e.type;
}
const y0 = "parser";
function v0(e, t) {
  const { sourceMap: r, filename: n, breakLineCode: i, needIndent: a } = t, s = t.location !== !1, u = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: i,
    needIndent: a,
    indentLevel: 0
  };
  s && e.loc && (u.source = e.loc.source);
  const o = () => u;
  function l(c, p) {
    u.code += c;
  }
  function f(c, p = !0) {
    const _ = p ? i : "";
    l(a ? _ + "  ".repeat(c) : _);
  }
  function m(c = !0) {
    const p = ++u.indentLevel;
    c && f(p);
  }
  function g(c = !0) {
    const p = --u.indentLevel;
    c && f(p);
  }
  function O() {
    f(u.indentLevel);
  }
  return {
    context: o,
    push: l,
    indent: m,
    deindent: g,
    newline: O,
    helper: (c) => `_${c}`,
    needIndent: () => u.needIndent
  };
}
function b0(e, t) {
  const { helper: r } = e;
  e.push(`${r(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), rn(e, t.key), t.modifier ? (e.push(", "), rn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function w0(e, t) {
  const { helper: r, needIndent: n } = e;
  e.push(`${r(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(n());
  const i = t.items.length;
  for (let a = 0; a < i && (rn(e, t.items[a]), a !== i - 1); a++)
    e.push(", ");
  e.deindent(n()), e.push("])");
}
function k0(e, t) {
  const { helper: r, needIndent: n } = e;
  if (t.cases.length > 1) {
    e.push(`${r(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(n());
    const i = t.cases.length;
    for (let a = 0; a < i && (rn(e, t.cases[a]), a !== i - 1); a++)
      e.push(", ");
    e.deindent(n()), e.push("])");
  }
}
function x0(e, t) {
  t.body ? rn(e, t.body) : e.push("null");
}
function rn(e, t) {
  const { helper: r } = e;
  switch (t.type) {
    case 0:
      x0(e, t);
      break;
    case 1:
      k0(e, t);
      break;
    case 2:
      w0(e, t);
      break;
    case 6:
      b0(e, t);
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
        /* HelperNameMap.INTERPOLATE */
      )}(${r(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${r(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${r(
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
      throw an(_e.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: y0,
        args: [t.type]
      });
  }
}
const S0 = (e, t = {}) => {
  const r = Ks(t.mode) ? t.mode : "normal", n = Ks(t.filename) ? t.filename : "message.intl", i = !!t.sourceMap, a = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : r !== "arrow", u = e.helpers || [], o = v0(e, {
    mode: r,
    filename: n,
    sourceMap: i,
    breakLineCode: a,
    needIndent: s
  });
  o.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), o.indent(s), u.length > 0 && (o.push(`const { ${Nl(u.map((m) => `${m}: _${m}`), ", ")} } = ctx`), o.newline()), o.push("return "), rn(o, e), o.deindent(s), o.push("}"), delete e.helpers;
  const { code: l, map: f } = o.context();
  return {
    ast: e,
    code: l,
    map: f ? f.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function T0(e, t = {}) {
  const r = Pl({}, t), n = !!r.jit, i = !!r.minify, a = r.optimize == null ? !0 : r.optimize, u = h0(r).parse(e);
  return n ? (a && g0(u), i && Gr(u), { ast: u, code: "" }) : (p0(u, r), S0(u, r));
}
/*!
  * core-base v9.10.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function O0() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (or().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (or().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (or().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Cr = [];
Cr[
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
Cr[
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
Cr[
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
Cr[
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
Cr[
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
Cr[
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
Cr[
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
const E0 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function C0(e) {
  return E0.test(e);
}
function D0(e) {
  const t = e.charCodeAt(0), r = e.charCodeAt(e.length - 1);
  return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function I0(e) {
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
function P0(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : C0(t) ? D0(t) : "*" + t;
}
function N0(e) {
  const t = [];
  let r = -1, n = 0, i = 0, a, s, u, o, l, f, m;
  const g = [];
  g[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = u : s += u;
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
    ](), i++;
  }, g[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (i > 0)
      i--, n = 4, g[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (i = 0, s === void 0 || (s = P0(s), s === !1))
        return !1;
      g[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function O() {
    const E = e[r + 1];
    if (n === 5 && E === "'" || n === 6 && E === '"')
      return r++, u = "\\" + E, g[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; n !== null; )
    if (r++, a = e[r], !(a === "\\" && O())) {
      if (o = I0(a), m = Cr[n], l = m[o] || m.l || 8, l === 8 || (n = l[0], l[1] !== void 0 && (f = g[l[1]], f && (u = a, f() === !1))))
        return;
      if (n === 7)
        return t;
    }
}
const Js = /* @__PURE__ */ new Map();
function L0(e, t) {
  return Fe(e) ? e[t] : null;
}
function M0(e, t) {
  if (!Fe(e))
    return null;
  let r = Js.get(t);
  if (r || (r = N0(t), r && Js.set(t, r)), !r)
    return null;
  const n = r.length;
  let i = e, a = 0;
  for (; a < n; ) {
    const s = i[r[a]];
    if (s === void 0 || Ge(i))
      return null;
    i = s, a++;
  }
  return i;
}
const A0 = (e) => e, R0 = (e) => "", F0 = "text", Y0 = (e) => e.length === 0 ? "" : qh(e), B0 = jh;
function eo(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function U0(e) {
  const t = ct(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ct(e.named.count) || ct(e.named.n)) ? ct(e.named.count) ? e.named.count : ct(e.named.n) ? e.named.n : t : t;
}
function W0(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function z0(e = {}) {
  const t = e.locale, r = U0(e), n = Fe(e.pluralRules) && se(t) && Ge(e.pluralRules[t]) ? e.pluralRules[t] : eo, i = Fe(e.pluralRules) && se(t) && Ge(e.pluralRules[t]) ? eo : void 0, a = (p) => p[n(r, p.length, i)], s = e.list || [], u = (p) => s[p], o = e.named || {};
  ct(e.pluralIndex) && W0(r, o);
  const l = (p) => o[p];
  function f(p) {
    const _ = Ge(e.messages) ? e.messages(p) : Fe(e.messages) ? e.messages[p] : !1;
    return _ || (e.parent ? e.parent.message(p) : R0);
  }
  const m = (p) => e.modifiers ? e.modifiers[p] : A0, g = Ce(e.processor) && Ge(e.processor.normalize) ? e.processor.normalize : Y0, O = Ce(e.processor) && Ge(e.processor.interpolate) ? e.processor.interpolate : B0, E = Ce(e.processor) && se(e.processor.type) ? e.processor.type : F0, c = {
    list: u,
    named: l,
    plural: a,
    linked: (p, ..._) => {
      const [k, w] = _;
      let T = "text", D = "";
      _.length === 1 ? Fe(k) ? (D = k.modifier || D, T = k.type || T) : se(k) && (D = k || D) : _.length === 2 && (se(k) && (D = k || D), se(w) && (T = w || T));
      const R = f(p)(c), B = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        T === "vnode" && at(R) && D ? R[0] : R
      );
      return D ? m(D)(B, T) : B;
    },
    message: f,
    type: E,
    interpolate: O,
    normalize: g,
    values: dt({}, s, o)
  };
  return c;
}
let yn = null;
function V0(e) {
  yn = e;
}
function H0(e, t, r) {
  yn && yn.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: r
  });
}
const j0 = /* @__PURE__ */ q0(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function q0(e) {
  return (t) => yn && yn.emit(e, t);
}
const yt = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
}, G0 = {
  [yt.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [yt.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [yt.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [yt.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [yt.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [yt.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [yt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Ur(e, ...t) {
  return Qa(G0[e], ...t);
}
const Ll = _e.__EXTEND_POINT__, Lr = Za(Ll), ot = {
  INVALID_ARGUMENT: Ll,
  // 18
  INVALID_DATE_ARGUMENT: Lr(),
  // 19
  INVALID_ISO_DATE_ARGUMENT: Lr(),
  // 20
  NOT_SUPPORT_NON_STRING_MESSAGE: Lr(),
  // 21
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: Lr(),
  // 22
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Lr(),
  // 23
  NOT_SUPPORT_LOCALE_TYPE: Lr(),
  // 24
  __EXTEND_POINT__: Lr()
  // 25
};
function $t(e) {
  return an(e, null, process.env.NODE_ENV !== "production" ? { messages: $0 } : void 0);
}
const $0 = {
  [ot.INVALID_ARGUMENT]: "Invalid arguments",
  [ot.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [ot.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [ot.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [ot.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [ot.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [ot.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function es(e, t) {
  return t.locale != null ? to(t.locale) : to(e.locale);
}
let Ui;
function to(e) {
  if (se(e))
    return e;
  if (Ge(e)) {
    if (e.resolvedOnce && Ui != null)
      return Ui;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Hh(t))
        throw $t(ot.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ui = t;
    } else
      throw $t(ot.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw $t(ot.NOT_SUPPORT_LOCALE_TYPE);
}
function K0(e, t, r) {
  return [.../* @__PURE__ */ new Set([
    r,
    ...at(t) ? t : Fe(t) ? Object.keys(t) : se(t) ? [t] : [r]
  ])];
}
function Ml(e, t, r) {
  const n = se(r) ? r : vn, i = e;
  i.__localeChainCache || (i.__localeChainCache = /* @__PURE__ */ new Map());
  let a = i.__localeChainCache.get(n);
  if (!a) {
    a = [];
    let s = [r];
    for (; at(s); )
      s = ro(a, s, t);
    const u = at(t) || !Ce(t) ? t : t.default ? t.default : null;
    s = se(u) ? [u] : u, at(s) && ro(a, s, !1), i.__localeChainCache.set(n, a);
  }
  return a;
}
function ro(e, t, r) {
  let n = !0;
  for (let i = 0; i < t.length && We(n); i++) {
    const a = t[i];
    se(a) && (n = X0(e, t[i], r));
  }
  return n;
}
function X0(e, t, r) {
  let n;
  const i = t.split("-");
  do {
    const a = i.join("-");
    n = Q0(e, a, r), i.splice(-1, 1);
  } while (i.length && n === !0);
  return n;
}
function Q0(e, t, r) {
  let n = !1;
  if (!e.includes(t) && (n = !0, t)) {
    n = t[t.length - 1] !== "!";
    const i = t.replace(/!/g, "");
    e.push(i), (at(r) || Ce(r)) && r[i] && (n = r[i]);
  }
  return n;
}
const Z0 = "9.10.2", ai = -1, vn = "en-US", qn = "", no = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function J0() {
  return {
    upper: (e, t) => t === "text" && se(e) ? e.toUpperCase() : t === "vnode" && Fe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && se(e) ? e.toLowerCase() : t === "vnode" && Fe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && se(e) ? no(e) : t === "vnode" && Fe(e) && "__v_isVNode" in e ? no(e.children) : e
  };
}
let Al;
function io(e) {
  Al = e;
}
let Rl;
function em(e) {
  Rl = e;
}
let Fl;
function tm(e) {
  Fl = e;
}
let Yl = null;
const rm = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Yl = e;
}, nm = /* @__NO_SIDE_EFFECTS__ */ () => Yl;
let Bl = null;
const ao = (e) => {
  Bl = e;
}, im = () => Bl;
let so = 0;
function am(e = {}) {
  const t = Ge(e.onWarn) ? e.onWarn : Er, r = se(e.version) ? e.version : Z0, n = se(e.locale) || Ge(e.locale) ? e.locale : vn, i = Ge(n) ? vn : n, a = at(e.fallbackLocale) || Ce(e.fallbackLocale) || se(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, s = Ce(e.messages) ? e.messages : { [i]: {} }, u = Ce(e.datetimeFormats) ? e.datetimeFormats : { [i]: {} }, o = Ce(e.numberFormats) ? e.numberFormats : { [i]: {} }, l = dt({}, e.modifiers || {}, J0()), f = e.pluralRules || {}, m = Ge(e.missing) ? e.missing : null, g = We(e.missingWarn) || tn(e.missingWarn) ? e.missingWarn : !0, O = We(e.fallbackWarn) || tn(e.fallbackWarn) ? e.fallbackWarn : !0, E = !!e.fallbackFormat, h = !!e.unresolving, c = Ge(e.postTranslation) ? e.postTranslation : null, p = Ce(e.processor) ? e.processor : null, _ = We(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter, w = Ge(e.messageCompiler) ? e.messageCompiler : Al;
  process.env.NODE_ENV !== "production" && Ge(e.messageCompiler) && Il(Ur(yt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const T = Ge(e.messageResolver) ? e.messageResolver : Rl || L0, D = Ge(e.localeFallbacker) ? e.localeFallbacker : Fl || K0, R = Fe(e.fallbackContext) ? e.fallbackContext : void 0, B = e, b = Fe(B.__datetimeFormatters) ? B.__datetimeFormatters : /* @__PURE__ */ new Map(), L = Fe(B.__numberFormatters) ? B.__numberFormatters : /* @__PURE__ */ new Map(), V = Fe(B.__meta) ? B.__meta : {};
  so++;
  const F = {
    version: r,
    cid: so,
    locale: n,
    fallbackLocale: a,
    messages: s,
    modifiers: l,
    pluralRules: f,
    missing: m,
    missingWarn: g,
    fallbackWarn: O,
    fallbackFormat: E,
    unresolving: h,
    postTranslation: c,
    processor: p,
    warnHtmlMessage: _,
    escapeParameter: k,
    messageCompiler: w,
    messageResolver: T,
    localeFallbacker: D,
    fallbackContext: R,
    onWarn: t,
    __meta: V
  };
  return F.datetimeFormats = u, F.numberFormats = o, F.__datetimeFormatters = b, F.__numberFormatters = L, process.env.NODE_ENV !== "production" && (F.__v_emitter = B.__v_emitter != null ? B.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && H0(F, r, V), F;
}
function si(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Ul(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function ts(e, t, r, n, i) {
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
    return se(u) ? u : t;
  } else
    return process.env.NODE_ENV !== "production" && Ul(n, t) && s(Ur(yt.NOT_FOUND_KEY, { key: t, locale: r })), t;
}
function hn(e, t, r) {
  const n = e;
  n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, r, t);
}
function Wi(e) {
  return (r) => sm(r, e);
}
function sm(e, t) {
  const r = t.b || t.body;
  if ((r.t || r.type) === 1) {
    const n = r, i = n.c || n.cases;
    return e.plural(i.reduce((a, s) => [
      ...a,
      oo(e, s)
    ], []));
  } else
    return oo(e, r);
}
function oo(e, t) {
  const r = t.s || t.static;
  if (r)
    return e.type === "text" ? r : e.normalize([r]);
  {
    const n = (t.i || t.items).reduce((i, a) => [...i, ga(e, a)], []);
    return e.normalize(n);
  }
}
function ga(e, t) {
  const r = t.t || t.type;
  switch (r) {
    case 3: {
      const n = t;
      return n.v || n.value;
    }
    case 9: {
      const n = t;
      return n.v || n.value;
    }
    case 4: {
      const n = t;
      return e.interpolate(e.named(n.k || n.key));
    }
    case 5: {
      const n = t;
      return e.interpolate(e.list(n.i != null ? n.i : n.index));
    }
    case 6: {
      const n = t, i = n.m || n.modifier;
      return e.linked(ga(e, n.k || n.key), i ? ga(e, i) : void 0, e.type);
    }
    case 7: {
      const n = t;
      return n.v || n.value;
    }
    case 8: {
      const n = t;
      return n.v || n.value;
    }
    default:
      throw new Error(`unhandled node type on format message part: ${r}`);
  }
}
const om = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Wl(e, t) {
  t && r0(e) && Er(Qa(om, { source: e }));
}
const zl = (e) => e;
let Kr = /* @__PURE__ */ Object.create(null);
const Wr = (e) => Fe(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function Vl(e, t = {}) {
  let r = !1;
  const n = t.onError || e0;
  return t.onError = (i) => {
    r = !0, n(i);
  }, { ...T0(e, t), detectError: r };
}
const lm = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
  if (!se(e))
    throw $t(ot.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    const r = We(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Wl(e, r);
    const i = (t.onCacheKey || zl)(e), a = Kr[i];
    if (a)
      return a;
    const { code: s, detectError: u } = Vl(e, t), o = new Function(`return ${s}`)();
    return u ? o : Kr[i] = o;
  }
};
function um(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && se(e)) {
    const r = We(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Wl(e, r);
    const i = (t.onCacheKey || zl)(e), a = Kr[i];
    if (a)
      return a;
    const { ast: s, detectError: u } = Vl(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), o = Wi(s);
    return u ? o : Kr[i] = o;
  } else {
    if (process.env.NODE_ENV !== "production" && !Wr(e))
      return Er(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const r = e.cacheKey;
    if (r) {
      const n = Kr[r];
      return n || (Kr[r] = Wi(e));
    } else
      return Wi(e);
  }
}
const lo = () => "", Pt = (e) => Ge(e);
function uo(e, ...t) {
  const { fallbackFormat: r, postTranslation: n, unresolving: i, messageCompiler: a, fallbackLocale: s, messages: u } = e, [o, l] = _a(...t), f = We(l.missingWarn) ? l.missingWarn : e.missingWarn, m = We(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, g = We(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, O = !!l.resolvedMessage, E = se(l.default) || We(l.default) ? We(l.default) ? a ? o : () => o : l.default : r ? a ? o : () => o : "", h = r || E !== "", c = es(e, l);
  g && cm(l);
  let [p, _, k] = O ? [
    o,
    c,
    u[c] || {}
  ] : Hl(e, o, c, s, m, f), w = p, T = o;
  if (!O && !(se(w) || Wr(w) || Pt(w)) && h && (w = E, T = w), !O && (!(se(w) || Wr(w) || Pt(w)) || !se(_)))
    return i ? ai : o;
  if (process.env.NODE_ENV !== "production" && se(w) && e.messageCompiler == null)
    return Er(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${o}'.`), o;
  let D = !1;
  const R = () => {
    D = !0;
  }, B = Pt(w) ? w : jl(e, o, _, w, T, R);
  if (D)
    return w;
  const b = mm(e, _, k, l), L = z0(b), V = dm(e, B, L), F = n ? n(V, o) : V;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const G = {
      timestamp: Date.now(),
      key: se(o) ? o : Pt(w) ? w.key : "",
      locale: _ || (Pt(w) ? w.locale : ""),
      format: se(w) ? w : Pt(w) ? w.source : "",
      message: F
    };
    G.meta = dt({}, e.__meta, /* @__PURE__ */ nm() || {}), j0(G);
  }
  return F;
}
function cm(e) {
  at(e.list) ? e.list = e.list.map((t) => se(t) ? qs(t) : t) : Fe(e.named) && Object.keys(e.named).forEach((t) => {
    se(e.named[t]) && (e.named[t] = qs(e.named[t]));
  });
}
function Hl(e, t, r, n, i, a) {
  const { messages: s, onWarn: u, messageResolver: o, localeFallbacker: l } = e, f = l(e, n, r);
  let m = {}, g, O = null, E = r, h = null;
  const c = "translate";
  for (let p = 0; p < f.length; p++) {
    if (g = h = f[p], process.env.NODE_ENV !== "production" && r !== g && si(i, t) && u(Ur(yt.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: g
    })), process.env.NODE_ENV !== "production" && r !== g) {
      const D = e.__v_emitter;
      D && D.emit("fallback", {
        type: c,
        key: t,
        from: E,
        to: h,
        groupId: `${c}:${t}`
      });
    }
    m = s[g] || {};
    let _ = null, k, w;
    if (process.env.NODE_ENV !== "production" && hr && (_ = window.performance.now(), k = "intlify-message-resolve-start", w = "intlify-message-resolve-end", Ct && Ct(k)), (O = o(m, t)) === null && (O = m[t]), process.env.NODE_ENV !== "production" && hr) {
      const D = window.performance.now(), R = e.__v_emitter;
      R && _ && O && R.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: O,
        time: D - _,
        groupId: `${c}:${t}`
      }), k && w && Ct && Br && (Ct(w), Br("intlify message resolve", k, w));
    }
    if (se(O) || Wr(O) || Pt(O))
      break;
    const T = ts(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      g,
      a,
      c
    );
    T !== t && (O = T), E = h;
  }
  return [O, g, m];
}
function jl(e, t, r, n, i, a) {
  const { messageCompiler: s, warnHtmlMessage: u } = e;
  if (Pt(n)) {
    const g = n;
    return g.locale = g.locale || r, g.key = g.key || t, g;
  }
  if (s == null) {
    const g = () => n;
    return g.locale = r, g.key = t, g;
  }
  let o = null, l, f;
  process.env.NODE_ENV !== "production" && hr && (o = window.performance.now(), l = "intlify-message-compilation-start", f = "intlify-message-compilation-end", Ct && Ct(l));
  const m = s(n, fm(e, r, i, n, u, a));
  if (process.env.NODE_ENV !== "production" && hr) {
    const g = window.performance.now(), O = e.__v_emitter;
    O && o && O.emit("message-compilation", {
      type: "message-compilation",
      message: n,
      time: g - o,
      groupId: `translate:${t}`
    }), l && f && Ct && Br && (Ct(f), Br("intlify message compilation", l, f));
  }
  return m.locale = r, m.key = t, m.source = n, m;
}
function dm(e, t, r) {
  let n = null, i, a;
  process.env.NODE_ENV !== "production" && hr && (n = window.performance.now(), i = "intlify-message-evaluation-start", a = "intlify-message-evaluation-end", Ct && Ct(i));
  const s = t(r);
  if (process.env.NODE_ENV !== "production" && hr) {
    const u = window.performance.now(), o = e.__v_emitter;
    o && n && o.emit("message-evaluation", {
      type: "message-evaluation",
      value: s,
      time: u - n,
      groupId: `translate:${t.key}`
    }), i && a && Ct && Br && (Ct(a), Br("intlify message evaluation", i, a));
  }
  return s;
}
function _a(...e) {
  const [t, r, n] = e, i = {};
  if (!se(t) && !ct(t) && !Pt(t) && !Wr(t))
    throw $t(ot.INVALID_ARGUMENT);
  const a = ct(t) ? String(t) : (Pt(t), t);
  return ct(r) ? i.plural = r : se(r) ? i.default = r : Ce(r) && !ii(r) ? i.named = r : at(r) && (i.list = r), ct(n) ? i.plural = n : se(n) ? i.default = n : Ce(n) && dt(i, n), [a, i];
}
function fm(e, t, r, n, i, a) {
  return {
    locale: t,
    key: r,
    warnHtmlMessage: i,
    onError: (s) => {
      if (a && a(s), process.env.NODE_ENV !== "production") {
        const u = hm(n), o = `Message compilation error: ${s.message}`, l = s.location && u && Gh(u, s.location.start.offset, s.location.end.offset), f = e.__v_emitter;
        f && u && f.emit("compile-error", {
          message: u,
          error: s.message,
          start: s.location && s.location.start.offset,
          end: s.location && s.location.end.offset,
          groupId: `translate:${r}`
        }), console.error(l ? `${o}
${l}` : o);
      } else
        throw s;
    },
    onCacheKey: (s) => Uh(t, r, s)
  };
}
function hm(e) {
  if (se(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function mm(e, t, r, n) {
  const { modifiers: i, pluralRules: a, messageResolver: s, fallbackLocale: u, fallbackWarn: o, missingWarn: l, fallbackContext: f } = e, g = {
    locale: t,
    modifiers: i,
    pluralRules: a,
    messages: (O) => {
      let E = s(r, O);
      if (E == null && f) {
        const [, , h] = Hl(f, O, t, u, o, l);
        E = s(h, O);
      }
      if (se(E) || Wr(E)) {
        let h = !1;
        const p = jl(e, O, t, E, O, () => {
          h = !0;
        });
        return h ? lo : p;
      } else
        return Pt(E) ? E : lo;
    }
  };
  return e.processor && (g.processor = e.processor), n.list && (g.list = n.list), n.named && (g.named = n.named), ct(n.plural) && (g.pluralIndex = n.plural), g;
}
const co = typeof Intl < "u", ql = {
  dateTimeFormat: co && typeof Intl.DateTimeFormat < "u",
  numberFormat: co && typeof Intl.NumberFormat < "u"
};
function fo(e, ...t) {
  const { datetimeFormats: r, unresolving: n, fallbackLocale: i, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !ql.dateTimeFormat)
    return a(Ur(yt.CANNOT_FORMAT_DATE)), qn;
  const [o, l, f, m] = ya(...t), g = We(f.missingWarn) ? f.missingWarn : e.missingWarn, O = We(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, E = !!f.part, h = es(e, f), c = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    i,
    h
  );
  if (!se(o) || o === "")
    return new Intl.DateTimeFormat(h, m).format(l);
  let p = {}, _, k = null, w = h, T = null;
  const D = "datetime format";
  for (let b = 0; b < c.length; b++) {
    if (_ = T = c[b], process.env.NODE_ENV !== "production" && h !== _ && si(O, o) && a(Ur(yt.FALLBACK_TO_DATE_FORMAT, {
      key: o,
      target: _
    })), process.env.NODE_ENV !== "production" && h !== _) {
      const L = e.__v_emitter;
      L && L.emit("fallback", {
        type: D,
        key: o,
        from: w,
        to: T,
        groupId: `${D}:${o}`
      });
    }
    if (p = r[_] || {}, k = p[o], Ce(k))
      break;
    ts(e, o, _, g, D), w = T;
  }
  if (!Ce(k) || !se(_))
    return n ? ai : o;
  let R = `${_}__${o}`;
  ii(m) || (R = `${R}__${JSON.stringify(m)}`);
  let B = u.get(R);
  return B || (B = new Intl.DateTimeFormat(_, dt({}, k, m)), u.set(R, B)), E ? B.formatToParts(l) : B.format(l);
}
const Gl = [
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
function ya(...e) {
  const [t, r, n, i] = e, a = {};
  let s = {}, u;
  if (se(t)) {
    const o = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!o)
      throw $t(ot.INVALID_ISO_DATE_ARGUMENT);
    const l = o[3] ? o[3].trim().startsWith("T") ? `${o[1].trim()}${o[3].trim()}` : `${o[1].trim()}T${o[3].trim()}` : o[1].trim();
    u = new Date(l);
    try {
      u.toISOString();
    } catch {
      throw $t(ot.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (zh(t)) {
    if (isNaN(t.getTime()))
      throw $t(ot.INVALID_DATE_ARGUMENT);
    u = t;
  } else if (ct(t))
    u = t;
  else
    throw $t(ot.INVALID_ARGUMENT);
  return se(r) ? a.key = r : Ce(r) && Object.keys(r).forEach((o) => {
    Gl.includes(o) ? s[o] = r[o] : a[o] = r[o];
  }), se(n) ? a.locale = n : Ce(n) && (s = n), Ce(i) && (s = i), [a.key || "", u, a, s];
}
function ho(e, t, r) {
  const n = e;
  for (const i in r) {
    const a = `${t}__${i}`;
    n.__datetimeFormatters.has(a) && n.__datetimeFormatters.delete(a);
  }
}
function mo(e, ...t) {
  const { numberFormats: r, unresolving: n, fallbackLocale: i, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !ql.numberFormat)
    return a(Ur(yt.CANNOT_FORMAT_NUMBER)), qn;
  const [o, l, f, m] = va(...t), g = We(f.missingWarn) ? f.missingWarn : e.missingWarn, O = We(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, E = !!f.part, h = es(e, f), c = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    i,
    h
  );
  if (!se(o) || o === "")
    return new Intl.NumberFormat(h, m).format(l);
  let p = {}, _, k = null, w = h, T = null;
  const D = "number format";
  for (let b = 0; b < c.length; b++) {
    if (_ = T = c[b], process.env.NODE_ENV !== "production" && h !== _ && si(O, o) && a(Ur(yt.FALLBACK_TO_NUMBER_FORMAT, {
      key: o,
      target: _
    })), process.env.NODE_ENV !== "production" && h !== _) {
      const L = e.__v_emitter;
      L && L.emit("fallback", {
        type: D,
        key: o,
        from: w,
        to: T,
        groupId: `${D}:${o}`
      });
    }
    if (p = r[_] || {}, k = p[o], Ce(k))
      break;
    ts(e, o, _, g, D), w = T;
  }
  if (!Ce(k) || !se(_))
    return n ? ai : o;
  let R = `${_}__${o}`;
  ii(m) || (R = `${R}__${JSON.stringify(m)}`);
  let B = u.get(R);
  return B || (B = new Intl.NumberFormat(_, dt({}, k, m)), u.set(R, B)), E ? B.formatToParts(l) : B.format(l);
}
const $l = [
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
function va(...e) {
  const [t, r, n, i] = e, a = {};
  let s = {};
  if (!ct(t))
    throw $t(ot.INVALID_ARGUMENT);
  const u = t;
  return se(r) ? a.key = r : Ce(r) && Object.keys(r).forEach((o) => {
    $l.includes(o) ? s[o] = r[o] : a[o] = r[o];
  }), se(n) ? a.locale = n : Ce(n) && (s = n), Ce(i) && (s = i), [a.key || "", u, a, s];
}
function po(e, t, r) {
  const n = e;
  for (const i in r) {
    const a = `${t}__${i}`;
    n.__numberFormatters.has(a) && n.__numberFormatters.delete(a);
  }
}
O0();
/*!
  * vue-i18n v9.10.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const pm = "9.10.2";
function gm() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (or().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (or().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (or().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (or().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (or().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Kl = yt.__EXTEND_POINT__, ir = Za(Kl), kt = {
  FALLBACK_TO_ROOT: Kl,
  // 9
  NOT_SUPPORTED_PRESERVE: ir(),
  // 10
  NOT_SUPPORTED_FORMATTER: ir(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: ir(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: ir(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: ir(),
  // 14
  NOT_FOUND_PARENT_SCOPE: ir(),
  // 15
  IGNORE_OBJ_FLATTEN: ir(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: ir(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: ir()
  // 18
}, _m = {
  [kt.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [kt.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [kt.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [kt.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [kt.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [kt.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [kt.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [kt.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [kt.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze",
  [kt.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: "'translateExistCompatible' option will be dropped in the next major version."
};
function Gn(e, ...t) {
  return Qa(_m[e], ...t);
}
const Xl = ot.__EXTEND_POINT__, bt = Za(Xl), rt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Xl,
  // 26
  // legacy module errors
  INVALID_ARGUMENT: bt(),
  // 27
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: bt(),
  // 28
  NOT_INSTALLED: bt(),
  // 29
  NOT_AVAILABLE_IN_LEGACY_MODE: bt(),
  // 30
  // directive module errors
  REQUIRED_VALUE: bt(),
  // 31
  INVALID_VALUE: bt(),
  // 32
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: bt(),
  // 33
  NOT_INSTALLED_WITH_PROVIDE: bt(),
  // 34
  // unexpected error
  UNEXPECTED_ERROR: bt(),
  // 35
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: bt(),
  // 36
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: bt(),
  // 37
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: bt(),
  // 38
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: bt(),
  // 39
  // for enhancement
  __EXTEND_POINT__: bt()
  // 40
};
function xr(e, ...t) {
  return an(e, null, process.env.NODE_ENV !== "production" ? { messages: ym, args: t } : void 0);
}
const ym = {
  [rt.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [rt.INVALID_ARGUMENT]: "Invalid argument",
  [rt.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [rt.NOT_INSTALLED]: "Need to install with `app.use` function",
  [rt.UNEXPECTED_ERROR]: "Unexpected error",
  [rt.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [rt.REQUIRED_VALUE]: "Required in value: {0}",
  [rt.INVALID_VALUE]: "Invalid value",
  [rt.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [rt.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [rt.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [rt.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [rt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [rt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, ba = /* @__PURE__ */ pr("__translateVNode"), wa = /* @__PURE__ */ pr("__datetimeParts"), ka = /* @__PURE__ */ pr("__numberParts"), xa = /* @__PURE__ */ pr("__enableEmitter"), Sa = /* @__PURE__ */ pr("__disableEmitter"), vm = pr("__setPluralRules"), Ql = /* @__PURE__ */ pr("__injectWithOption"), Ta = /* @__PURE__ */ pr("__dispose");
function bn(e) {
  if (!Fe(e))
    return e;
  for (const t in e)
    if (jn(e, t))
      if (!t.includes("."))
        Fe(e[t]) && bn(e[t]);
      else {
        const r = t.split("."), n = r.length - 1;
        let i = e, a = !1;
        for (let s = 0; s < n; s++) {
          if (r[s] in i || (i[r[s]] = {}), !Fe(i[r[s]])) {
            process.env.NODE_ENV !== "production" && Er(Gn(kt.IGNORE_OBJ_FLATTEN, {
              key: r[s]
            })), a = !0;
            break;
          }
          i = i[r[s]];
        }
        a || (i[r[n]] = e[t], delete e[t]), Fe(i[r[n]]) && bn(i[r[n]]);
      }
  return e;
}
function rs(e, t) {
  const { messages: r, __i18n: n, messageResolver: i, flatJson: a } = t, s = Ce(r) ? r : at(n) ? {} : { [e]: {} };
  if (at(n) && n.forEach((u) => {
    if ("locale" in u && "resource" in u) {
      const { locale: o, resource: l } = u;
      o ? (s[o] = s[o] || {}, Un(l, s[o])) : Un(l, s);
    } else
      se(u) && Un(JSON.parse(u), s);
  }), i == null && a)
    for (const u in s)
      jn(s, u) && bn(s[u]);
  return s;
}
function Zl(e) {
  return e.type;
}
function bm(e, t, r) {
  let n = Fe(t.messages) ? t.messages : {};
  "__i18nGlobal" in r && (n = rs(e.locale.value, {
    messages: n,
    __i18n: r.__i18nGlobal
  }));
  const i = Object.keys(n);
  i.length && i.forEach((a) => {
    e.mergeLocaleMessage(a, n[a]);
  });
  {
    if (Fe(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (Fe(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function go(e) {
  return Je(ad, null, e, 0);
}
const _o = "__INTLIFY_META__", yo = () => [], wm = () => !1;
let vo = 0;
function bo(e) {
  return (t, r, n, i) => e(r, n, Aa() || void 0, i);
}
const km = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Aa();
  let t = null;
  return e && (t = Zl(e)[_o]) ? { [_o]: t } : null;
};
function xm(e = {}, t) {
  const { __root: r, __injectWithOption: n } = e, i = r === void 0, a = e.flatJson, s = hr ? xt : Mo, u = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && u && Il(Gn(kt.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let o = We(e.inheritLocale) ? e.inheritLocale : !0;
  const l = s(
    // prettier-ignore
    r && o ? r.locale.value : se(e.locale) ? e.locale : vn
  ), f = s(
    // prettier-ignore
    r && o ? r.fallbackLocale.value : se(e.fallbackLocale) || at(e.fallbackLocale) || Ce(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), m = s(rs(l.value, e)), g = s(Ce(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), O = s(Ce(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let E = r ? r.missingWarn : We(e.missingWarn) || tn(e.missingWarn) ? e.missingWarn : !0, h = r ? r.fallbackWarn : We(e.fallbackWarn) || tn(e.fallbackWarn) ? e.fallbackWarn : !0, c = r ? r.fallbackRoot : We(e.fallbackRoot) ? e.fallbackRoot : !0, p = !!e.fallbackFormat, _ = Ge(e.missing) ? e.missing : null, k = Ge(e.missing) ? bo(e.missing) : null, w = Ge(e.postTranslation) ? e.postTranslation : null, T = r ? r.warnHtmlMessage : We(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, D = !!e.escapeParameter;
  const R = r ? r.modifiers : Ce(e.modifiers) ? e.modifiers : {};
  let B = e.pluralRules || r && r.pluralRules, b;
  b = (() => {
    i && ao(null);
    const U = {
      version: pm,
      locale: l.value,
      fallbackLocale: f.value,
      messages: m.value,
      modifiers: R,
      pluralRules: B,
      missing: k === null ? void 0 : k,
      missingWarn: E,
      fallbackWarn: h,
      fallbackFormat: p,
      unresolving: !0,
      postTranslation: w === null ? void 0 : w,
      warnHtmlMessage: T,
      escapeParameter: D,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    U.datetimeFormats = g.value, U.numberFormats = O.value, U.__datetimeFormatters = Ce(b) ? b.__datetimeFormatters : void 0, U.__numberFormatters = Ce(b) ? b.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (U.__v_emitter = Ce(b) ? b.__v_emitter : void 0);
    const q = am(U);
    return i && ao(q), q;
  })(), hn(b, l.value, f.value);
  function V() {
    return [
      l.value,
      f.value,
      m.value,
      g.value,
      O.value
    ];
  }
  const F = Ft({
    get: () => l.value,
    set: (U) => {
      l.value = U, b.locale = l.value;
    }
  }), G = Ft({
    get: () => f.value,
    set: (U) => {
      f.value = U, b.fallbackLocale = f.value, hn(b, l.value, U);
    }
  }), Q = Ft(() => m.value), H = /* @__PURE__ */ Ft(() => g.value), N = /* @__PURE__ */ Ft(() => O.value);
  function re() {
    return Ge(w) ? w : null;
  }
  function ue(U) {
    w = U, b.postTranslation = U;
  }
  function ce() {
    return _;
  }
  function be(U) {
    U !== null && (k = bo(U)), _ = U, b.missing = k;
  }
  function te(U, q) {
    return U !== "translate" || !q.resolvedMessage;
  }
  const X = (U, q, Oe, Ve, St, Ir) => {
    V();
    let er;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, i || (b.fallbackContext = r ? im() : void 0), er = U(b);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, i || (b.fallbackContext = void 0);
    }
    if (Oe !== "translate exists" && // for not `te` (e.g `t`)
    ct(er) && er === ai || Oe === "translate exists" && !er) {
      const [tr, xi] = q();
      if (process.env.NODE_ENV !== "production" && r && se(tr) && te(Oe, xi) && (c && (si(h, tr) || Ul(E, tr)) && Er(Gn(kt.FALLBACK_TO_ROOT, {
        key: tr,
        type: Oe
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Ht } = b;
        Ht && c && Ht.emit("fallback", {
          type: Oe,
          key: tr,
          to: "global",
          groupId: `${Oe}:${tr}`
        });
      }
      return r && c ? Ve(r) : St(tr);
    } else {
      if (Ir(er))
        return er;
      throw xr(rt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function z(...U) {
    return X((q) => Reflect.apply(uo, null, [q, ...U]), () => _a(...U), "translate", (q) => Reflect.apply(q.t, q, [...U]), (q) => q, (q) => se(q));
  }
  function A(...U) {
    const [q, Oe, Ve] = U;
    if (Ve && !Fe(Ve))
      throw xr(rt.INVALID_ARGUMENT);
    return z(q, Oe, dt({ resolvedMessage: !0 }, Ve || {}));
  }
  function $(...U) {
    return X((q) => Reflect.apply(fo, null, [q, ...U]), () => ya(...U), "datetime format", (q) => Reflect.apply(q.d, q, [...U]), () => qn, (q) => se(q));
  }
  function ie(...U) {
    return X((q) => Reflect.apply(mo, null, [q, ...U]), () => va(...U), "number format", (q) => Reflect.apply(q.n, q, [...U]), () => qn, (q) => se(q));
  }
  function Y(U) {
    return U.map((q) => se(q) || ct(q) || We(q) ? go(String(q)) : q);
  }
  const ke = {
    normalize: Y,
    interpolate: (U) => U,
    type: "vnode"
  };
  function ge(...U) {
    return X(
      (q) => {
        let Oe;
        const Ve = q;
        try {
          Ve.processor = ke, Oe = Reflect.apply(uo, null, [Ve, ...U]);
        } finally {
          Ve.processor = null;
        }
        return Oe;
      },
      () => _a(...U),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (q) => q[ba](...U),
      (q) => [go(q)],
      (q) => at(q)
    );
  }
  function he(...U) {
    return X(
      (q) => Reflect.apply(mo, null, [q, ...U]),
      () => va(...U),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (q) => q[ka](...U),
      yo,
      (q) => se(q) || at(q)
    );
  }
  function Ie(...U) {
    return X(
      (q) => Reflect.apply(fo, null, [q, ...U]),
      () => ya(...U),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (q) => q[wa](...U),
      yo,
      (q) => se(q) || at(q)
    );
  }
  function x(U) {
    B = U, b.pluralRules = B;
  }
  function y(U, q) {
    return X(() => {
      if (!U)
        return !1;
      const Oe = se(q) ? q : l.value, Ve = de(Oe), St = b.messageResolver(Ve, U);
      return u ? St != null : Wr(St) || Pt(St) || se(St);
    }, () => [U], "translate exists", (Oe) => Reflect.apply(Oe.te, Oe, [U, q]), wm, (Oe) => We(Oe));
  }
  function I(U) {
    let q = null;
    const Oe = Ml(b, f.value, l.value);
    for (let Ve = 0; Ve < Oe.length; Ve++) {
      const St = m.value[Oe[Ve]] || {}, Ir = b.messageResolver(St, U);
      if (Ir != null) {
        q = Ir;
        break;
      }
    }
    return q;
  }
  function J(U) {
    const q = I(U);
    return q ?? (r ? r.tm(U) || {} : {});
  }
  function de(U) {
    return m.value[U] || {};
  }
  function ye(U, q) {
    if (a) {
      const Oe = { [U]: q };
      for (const Ve in Oe)
        jn(Oe, Ve) && bn(Oe[Ve]);
      q = Oe[U];
    }
    m.value[U] = q, b.messages = m.value;
  }
  function Ye(U, q) {
    m.value[U] = m.value[U] || {};
    const Oe = { [U]: q };
    if (a)
      for (const Ve in Oe)
        jn(Oe, Ve) && bn(Oe[Ve]);
    q = Oe[U], Un(q, m.value[U]), b.messages = m.value;
  }
  function ze(U) {
    return g.value[U] || {};
  }
  function lt(U, q) {
    g.value[U] = q, b.datetimeFormats = g.value, ho(b, U, q);
  }
  function mt(U, q) {
    g.value[U] = dt(g.value[U] || {}, q), b.datetimeFormats = g.value, ho(b, U, q);
  }
  function ut(U) {
    return O.value[U] || {};
  }
  function Jt(U, q) {
    O.value[U] = q, b.numberFormats = O.value, po(b, U, q);
  }
  function Vt(U, q) {
    O.value[U] = dt(O.value[U] || {}, q), b.numberFormats = O.value, po(b, U, q);
  }
  vo++, r && hr && (Us(r.locale, (U) => {
    o && (l.value = U, b.locale = U, hn(b, l.value, f.value));
  }), Us(r.fallbackLocale, (U) => {
    o && (f.value = U, b.fallbackLocale = U, hn(b, l.value, f.value));
  }));
  const Xe = {
    id: vo,
    locale: F,
    fallbackLocale: G,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(U) {
      o = U, U && r && (l.value = r.locale.value, f.value = r.fallbackLocale.value, hn(b, l.value, f.value));
    },
    get availableLocales() {
      return Object.keys(m.value).sort();
    },
    messages: Q,
    get modifiers() {
      return R;
    },
    get pluralRules() {
      return B || {};
    },
    get isGlobal() {
      return i;
    },
    get missingWarn() {
      return E;
    },
    set missingWarn(U) {
      E = U, b.missingWarn = E;
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(U) {
      h = U, b.fallbackWarn = h;
    },
    get fallbackRoot() {
      return c;
    },
    set fallbackRoot(U) {
      c = U;
    },
    get fallbackFormat() {
      return p;
    },
    set fallbackFormat(U) {
      p = U, b.fallbackFormat = p;
    },
    get warnHtmlMessage() {
      return T;
    },
    set warnHtmlMessage(U) {
      T = U, b.warnHtmlMessage = U;
    },
    get escapeParameter() {
      return D;
    },
    set escapeParameter(U) {
      D = U, b.escapeParameter = U;
    },
    t: z,
    getLocaleMessage: de,
    setLocaleMessage: ye,
    mergeLocaleMessage: Ye,
    getPostTranslationHandler: re,
    setPostTranslationHandler: ue,
    getMissingHandler: ce,
    setMissingHandler: be,
    [vm]: x
  };
  return Xe.datetimeFormats = H, Xe.numberFormats = N, Xe.rt = A, Xe.te = y, Xe.tm = J, Xe.d = $, Xe.n = ie, Xe.getDateTimeFormat = ze, Xe.setDateTimeFormat = lt, Xe.mergeDateTimeFormat = mt, Xe.getNumberFormat = ut, Xe.setNumberFormat = Jt, Xe.mergeNumberFormat = Vt, Xe[Ql] = n, Xe[ba] = ge, Xe[wa] = Ie, Xe[ka] = he, process.env.NODE_ENV !== "production" && (Xe[xa] = (U) => {
    b.__v_emitter = U;
  }, Xe[Sa] = () => {
    b.__v_emitter = void 0;
  }), Xe;
}
const ns = {
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
function Sm({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, i) => [
    ...n,
    // prettier-ignore
    ...i.type === nt ? i.children : [i]
  ], []) : t.reduce((r, n) => {
    const i = e[n];
    return i && (r[n] = i()), r;
  }, {});
}
function Jl(e) {
  return nt;
}
dt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => ct(e) || !isNaN(e)
  }
}, ns);
function Tm(e) {
  return at(e) && !se(e[0]);
}
function eu(e, t, r, n) {
  const { slots: i, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let u = {};
    e.locale && (s.locale = e.locale), se(e.format) ? s.key = e.format : Fe(e.format) && (se(e.format.key) && (s.key = e.format.key), u = Object.keys(e.format).reduce((g, O) => r.includes(O) ? dt({}, g, { [O]: e.format[O] }) : g, {}));
    const o = n(e.value, s, u);
    let l = [s.key];
    at(o) ? l = o.map((g, O) => {
      const E = i[g.type], h = E ? E({ [g.type]: g.value, index: O, parts: o }) : [g.value];
      return Tm(h) && (h[0].key = `${g.type}-${O}`), h;
    }) : se(o) && (l = [o]);
    const f = dt({}, a), m = se(e.tag) || Fe(e.tag) ? e.tag : Jl();
    return Lo(m, f, l);
  };
}
dt({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ns);
dt({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ns);
function wo(e, t) {
}
const Om = /* @__PURE__ */ pr("global-vue-i18n");
function sn(e = {}) {
  const t = Aa();
  if (t == null)
    throw xr(rt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw xr(rt.NOT_INSTALLED);
  const r = Em(t), n = Dm(r), i = Zl(t), a = Cm(e, i);
  if (__VUE_I18N_LEGACY_API__ && r.mode === "legacy" && !e.__useComponent) {
    if (!r.allowComposition)
      throw xr(rt.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Lm(t, a, n, e);
  }
  if (a === "global")
    return bm(n, e, i), n;
  if (a === "parent") {
    let o = Im(r, t, e.__useComponent);
    return o == null && (process.env.NODE_ENV !== "production" && Er(Gn(kt.NOT_FOUND_PARENT_SCOPE)), o = n), o;
  }
  const s = r;
  let u = s.__getInstance(t);
  if (u == null) {
    const o = dt({}, e);
    "__i18n" in i && (o.__i18n = i.__i18n), n && (o.__root = n), u = xm(o), s.__composerExtend && (u[Ta] = s.__composerExtend(u)), Nm(s, t, u), s.__setInstance(t, u);
  }
  return u;
}
function Em(e) {
  {
    const t = td(e.isCE ? Om : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw xr(e.isCE ? rt.NOT_INSTALLED_WITH_PROVIDE : rt.UNEXPECTED_ERROR);
    return t;
  }
}
function Cm(e, t) {
  return ii(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Dm(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Im(e, t, r = !1) {
  let n = null;
  const i = t.root;
  let a = Pm(t, r);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      n = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const u = s.__getInstance(a);
      u != null && (n = u.__composer, r && n && !n[Ql] && (n = null));
    }
    if (n != null || i === a)
      break;
    a = a.parent;
  }
  return n;
}
function Pm(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Nm(e, t, r) {
  let n = null;
  rd(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = r, n = $h();
      const i = r;
      i[xa] && i[xa](n), n.on("*", wo);
    }
  }, t), nd(() => {
    const i = r;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (n && n.off("*", wo), i[Sa] && i[Sa](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const a = i[Ta];
    a && (a(), delete i[Ta]);
  }, t);
}
function Lm(e, t, r, n = {}) {
  const i = t === "local", a = Mo(null);
  if (i && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw xr(rt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const s = We(n.inheritLocale) ? n.inheritLocale : !se(n.locale), u = xt(
    // prettier-ignore
    !i || s ? r.locale.value : se(n.locale) ? n.locale : vn
  ), o = xt(
    // prettier-ignore
    !i || s ? r.fallbackLocale.value : se(n.fallbackLocale) || at(n.fallbackLocale) || Ce(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : u.value
  ), l = xt(rs(u.value, n)), f = xt(Ce(n.datetimeFormats) ? n.datetimeFormats : { [u.value]: {} }), m = xt(Ce(n.numberFormats) ? n.numberFormats : { [u.value]: {} }), g = i ? r.missingWarn : We(n.missingWarn) || tn(n.missingWarn) ? n.missingWarn : !0, O = i ? r.fallbackWarn : We(n.fallbackWarn) || tn(n.fallbackWarn) ? n.fallbackWarn : !0, E = i ? r.fallbackRoot : We(n.fallbackRoot) ? n.fallbackRoot : !0, h = !!n.fallbackFormat, c = Ge(n.missing) ? n.missing : null, p = Ge(n.postTranslation) ? n.postTranslation : null, _ = i ? r.warnHtmlMessage : We(n.warnHtmlMessage) ? n.warnHtmlMessage : !0, k = !!n.escapeParameter, w = i ? r.modifiers : Ce(n.modifiers) ? n.modifiers : {}, T = n.pluralRules || i && r.pluralRules;
  function D() {
    return [
      u.value,
      o.value,
      l.value,
      f.value,
      m.value
    ];
  }
  const R = Ft({
    get: () => a.value ? a.value.locale.value : u.value,
    set: (y) => {
      a.value && (a.value.locale.value = y), u.value = y;
    }
  }), B = Ft({
    get: () => a.value ? a.value.fallbackLocale.value : o.value,
    set: (y) => {
      a.value && (a.value.fallbackLocale.value = y), o.value = y;
    }
  }), b = Ft(() => a.value ? a.value.messages.value : l.value), L = Ft(() => f.value), V = Ft(() => m.value);
  function F() {
    return a.value ? a.value.getPostTranslationHandler() : p;
  }
  function G(y) {
    a.value && a.value.setPostTranslationHandler(y);
  }
  function Q() {
    return a.value ? a.value.getMissingHandler() : c;
  }
  function H(y) {
    a.value && a.value.setMissingHandler(y);
  }
  function N(y) {
    return D(), y();
  }
  function re(...y) {
    return a.value ? N(() => Reflect.apply(a.value.t, null, [...y])) : N(() => "");
  }
  function ue(...y) {
    return a.value ? Reflect.apply(a.value.rt, null, [...y]) : "";
  }
  function ce(...y) {
    return a.value ? N(() => Reflect.apply(a.value.d, null, [...y])) : N(() => "");
  }
  function be(...y) {
    return a.value ? N(() => Reflect.apply(a.value.n, null, [...y])) : N(() => "");
  }
  function te(y) {
    return a.value ? a.value.tm(y) : {};
  }
  function X(y, I) {
    return a.value ? a.value.te(y, I) : !1;
  }
  function z(y) {
    return a.value ? a.value.getLocaleMessage(y) : {};
  }
  function A(y, I) {
    a.value && (a.value.setLocaleMessage(y, I), l.value[y] = I);
  }
  function $(y, I) {
    a.value && a.value.mergeLocaleMessage(y, I);
  }
  function ie(y) {
    return a.value ? a.value.getDateTimeFormat(y) : {};
  }
  function Y(y, I) {
    a.value && (a.value.setDateTimeFormat(y, I), f.value[y] = I);
  }
  function fe(y, I) {
    a.value && a.value.mergeDateTimeFormat(y, I);
  }
  function ke(y) {
    return a.value ? a.value.getNumberFormat(y) : {};
  }
  function ge(y, I) {
    a.value && (a.value.setNumberFormat(y, I), m.value[y] = I);
  }
  function he(y, I) {
    a.value && a.value.mergeNumberFormat(y, I);
  }
  const Ie = {
    get id() {
      return a.value ? a.value.id : -1;
    },
    locale: R,
    fallbackLocale: B,
    messages: b,
    datetimeFormats: L,
    numberFormats: V,
    get inheritLocale() {
      return a.value ? a.value.inheritLocale : s;
    },
    set inheritLocale(y) {
      a.value && (a.value.inheritLocale = y);
    },
    get availableLocales() {
      return a.value ? a.value.availableLocales : Object.keys(l.value);
    },
    get modifiers() {
      return a.value ? a.value.modifiers : w;
    },
    get pluralRules() {
      return a.value ? a.value.pluralRules : T;
    },
    get isGlobal() {
      return a.value ? a.value.isGlobal : !1;
    },
    get missingWarn() {
      return a.value ? a.value.missingWarn : g;
    },
    set missingWarn(y) {
      a.value && (a.value.missingWarn = y);
    },
    get fallbackWarn() {
      return a.value ? a.value.fallbackWarn : O;
    },
    set fallbackWarn(y) {
      a.value && (a.value.missingWarn = y);
    },
    get fallbackRoot() {
      return a.value ? a.value.fallbackRoot : E;
    },
    set fallbackRoot(y) {
      a.value && (a.value.fallbackRoot = y);
    },
    get fallbackFormat() {
      return a.value ? a.value.fallbackFormat : h;
    },
    set fallbackFormat(y) {
      a.value && (a.value.fallbackFormat = y);
    },
    get warnHtmlMessage() {
      return a.value ? a.value.warnHtmlMessage : _;
    },
    set warnHtmlMessage(y) {
      a.value && (a.value.warnHtmlMessage = y);
    },
    get escapeParameter() {
      return a.value ? a.value.escapeParameter : k;
    },
    set escapeParameter(y) {
      a.value && (a.value.escapeParameter = y);
    },
    t: re,
    getPostTranslationHandler: F,
    setPostTranslationHandler: G,
    getMissingHandler: Q,
    setMissingHandler: H,
    rt: ue,
    d: ce,
    n: be,
    tm: te,
    te: X,
    getLocaleMessage: z,
    setLocaleMessage: A,
    mergeLocaleMessage: $,
    getDateTimeFormat: ie,
    setDateTimeFormat: Y,
    mergeDateTimeFormat: fe,
    getNumberFormat: ke,
    setNumberFormat: ge,
    mergeNumberFormat: he
  };
  function x(y) {
    y.locale.value = u.value, y.fallbackLocale.value = o.value, Object.keys(l.value).forEach((I) => {
      y.mergeLocaleMessage(I, l.value[I]);
    }), Object.keys(f.value).forEach((I) => {
      y.mergeDateTimeFormat(I, f.value[I]);
    }), Object.keys(m.value).forEach((I) => {
      y.mergeNumberFormat(I, m.value[I]);
    }), y.escapeParameter = k, y.fallbackFormat = h, y.fallbackRoot = E, y.fallbackWarn = O, y.missingWarn = g, y.warnHtmlMessage = _;
  }
  return id(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw xr(rt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const y = a.value = e.proxy.$i18n.__composer;
    t === "global" ? (u.value = y.locale.value, o.value = y.fallbackLocale.value, l.value = y.messages.value, f.value = y.datetimeFormats.value, m.value = y.numberFormats.value) : i && x(y);
  }), Ie;
}
gm();
__INTLIFY_JIT_COMPILATION__ ? io(um) : io(lm);
em(M0);
tm(Ml);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = or();
  e.__INTLIFY__ = !0, V0(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Mm = {
  mail: "mail",
  phone: "ring_volume",
  link: "link"
}, ko = 13, Oa = ["en", "de"], Rr = window.navigator.userLanguage || window.navigator.language || Oa[0], Mr = {
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
}, Am = {
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
function Rm(e, t, r, n, i, a) {
  return P(), W("span", {
    class: j(a.setClassNames())
  }, [
    Wt(e.$slots, "default")
  ], 2);
}
const Xt = /* @__PURE__ */ ht(Am, [["render", Rm]]), Fm = /* @__PURE__ */ ne("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), Ym = [
  Fm
], tu = {
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
    const t = e, r = Ft(() => t.loaderSize == "xs" ? "h-2 w-2" : t.loaderSize == "sm" ? "h-6 w-6" : t.loaderSize == "lg" ? "h-12 w-12" : "h-14 w-14");
    return (n, i) => (P(), W("svg", {
      "aria-hidden": "true",
      class: j([[r.value, e.spinnerColorClasses], "animate-spin"]),
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, Ym, 2));
  }
}, Bm = {
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
    PawIcon: Xt,
    PawLoadingSpinner: tu
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
}, Um = ["title"], Wm = /* @__PURE__ */ ne("div", { class: "h-1/3 w-10 bg-gray-500 rounded-full" }, null, -1), zm = [
  Wm
], Vm = ["disabled", "title"], Hm = { class: "truncate" };
function jm(e, t, r, n, i, a) {
  const s = qe("PawIcon"), u = qe("PawLoadingSpinner");
  return r.loading ? (P(), W("div", {
    key: 0,
    class: j(["flex items-center group max-w-fit my-0 transition", a.setClassNames()]),
    disabled: "",
    title: r.title
  }, zm, 10, Um)) : (P(), W("button", {
    key: 1,
    class: j(["flex items-center group max-w-full my-0 transition", a.setClassNames()]),
    disabled: r.disabled || r.processing,
    title: r.title,
    onClick: t[0] || (t[0] = (...o) => a.click && a.click(...o))
  }, [
    r.icon && !r.processing ? (P(), Ee(s, {
      key: 0,
      size: r.size,
      outlined: r.outlined,
      class: j(["transition", a.setIconClassNames()])
    }, {
      default: we(() => [
        xe(pe(r.processing ? "sync" : r.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : Z("", !0),
    Je(Ra, {
      "enter-active-class": "transitiona ease-in",
      "enter-from-class": "opacity-0 delay-150 ease-out",
      "enter-to-class": "opacity-100 "
    }, {
      default: we(() => [
        cr(Je(u, {
          class: j([
            "transition w-full delay-150",
            r.processing ? "max-w-fit my-auto py-0.5 mx-2" : "max-w-0 mx-0"
          ]),
          loaderSize: "sm",
          spinnerColorClasses: a.setClassNames().includes("-action-") && !r.outlined ? "fill-white text-gray-300 dark:text-gray-600" : "fill-action-500 text-gray-300 dark:text-gray-600"
        }, null, 8, ["class", "spinnerColorClasses"]), [
          [Qr, r.processing]
        ])
      ]),
      _: 1
    }),
    ne("span", Hm, [
      Wt(e.$slots, "default")
    ])
  ], 10, Vm));
}
const oi = /* @__PURE__ */ ht(Bm, [["render", jm]]), qm = {
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
    PawIcon: Xt
  },
  methods: {
    change() {
      this.$emit("changed", this.value = !this.value);
    }
  }
}, Gm = ["title"], $m = { class: "relative w-[18px] h-[18px] m-0.75 shrink-0 self-start pointer-events-none" }, Km = ["checked", "disabled"], Xm = { class: "absolute inset-0 block peer-checked:opacity-100 opacity-0 w-4 h-4 m-px bg-white dark:peer-disabled:bg-gray-500 text-action-500 dark:text-action-400 peer-disabled:text-gray-200 dark:peer-disabled:text-gray-600 overflow-hidden rounded-sm transition z-10" }, Qm = { class: "absolute inset-0 block group-hover:peer-checked:opacity-100 group-hover:peer-checked:peer-disabled:opacity-0 opacity-0 w-4 h-4 m-px bg-white overflow-hidden rounded-sm transition z-20" }, Zm = /* @__PURE__ */ ne("span", { class: "absolute inset-0 block w-[18px] h-[18px] border-2 border-gray-400 peer-checked:border-action-500 dark:peer-checked:border-action-400 peer-disabled:border-gray-200 dark:peer-disabled:border-gray-600 rounded-sm peer-disabled:cursor-default transition z-30" }, null, -1);
function Jm(e, t, r, n, i, a) {
  const s = qe("PawIcon");
  return P(), W("label", {
    class: j(["group inline-flex items-center", {
      "cursor-pointer": !r.disabled,
      "pointer-events-none": r.disabled,
      "gap-1": r.size === "sm",
      "gap-2 p-1": r.size === "md",
      "gap-3 p-2": r.size === "lg"
    }]),
    title: r.title
  }, [
    ne("span", $m, [
      ne("input", {
        type: "checkbox",
        onChange: t[0] || (t[0] = (...u) => a.change && a.change(...u)),
        checked: r.checked,
        disabled: r.disabled,
        class: "peer hidden"
      }, null, 40, Km),
      ne("span", Xm, [
        Je(s, {
          size: "md",
          class: "ml-[50%] mt-[50%] -translate-x-1/2 -translate-y-1/2"
        }, {
          default: we(() => [
            xe(" check_box ")
          ]),
          _: 1
        })
      ]),
      ne("span", Qm, [
        Je(s, {
          size: "md",
          class: "text-action-500 dark:text-action-400 ml-[50%] mt-[50%] -translate-x-1/2 -translate-y-1/2"
        }, {
          default: we(() => [
            xe(" indeterminate_check_box ")
          ]),
          _: 1
        })
      ]),
      Zm
    ]),
    e.$slots.default ? (P(), W("span", {
      key: 0,
      class: j(["text-md transition", r.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"])
    }, [
      Wt(e.$slots, "default")
    ], 2)) : Z("", !0)
  ], 10, Gm);
}
const ru = /* @__PURE__ */ ht(qm, [["render", Jm]]), ep = {
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
    PawIcon: Xt
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
}, tp = ["title"];
function rp(e, t, r, n, i, a) {
  const s = qe("PawIcon");
  return P(), W("button", {
    class: j(["inline-flex items-center group my-0 max-w-full rounded-full overflow-hidden transition", a.setClassNames()]),
    title: r.title,
    onClick: t[0] || (t[0] = (...u) => a.click && a.click(...u))
  }, [
    r.icon ? (P(), Ee(s, {
      key: 0,
      size: r.size,
      outlined: r.outlined,
      class: j(["transition", a.setIconClassNames()])
    }, {
      default: we(() => [
        xe(pe(r.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : Z("", !0),
    ne("span", {
      class: j(["truncate", [{ "max-w-16": r.textEllipsis }]])
    }, [
      Wt(e.$slots, "default")
    ], 2),
    r.disabled ? Z("", !0) : (P(), Ee(s, {
      key: 1,
      size: "sm",
      class: j(["transition", a.setCloseClassNames()])
    }, {
      default: we(() => [
        xe("close")
      ]),
      _: 1
    }, 8, ["class"]))
  ], 10, tp);
}
const np = /* @__PURE__ */ ht(ep, [["render", rp]]), ip = {
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
    PawIcon: Xt
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
}, ap = ["title"], sp = {
  key: 2,
  class: "absolute max-w-2xl w-60 bg-white dark:bg-gray-800 border border-gray-200 shadow-2xl dark:border-gray-700 transition-all duration-300 left-0 rounded-md z-[9999] top-full px-4 py-2 text-gray-500"
};
function op(e, t, r, n, i, a) {
  const s = qe("PawIcon");
  return P(), W("button", {
    class: j(["flex items-center group max-w-full my-0 relative", a.setClassNames()]),
    title: r.titlePopover ? void 0 : r.title,
    onClick: t[0] || (t[0] = (...u) => a.click && a.click(...u)),
    onMouseenter: t[1] || (t[1] = (...u) => a.startHoverTimer && a.startHoverTimer(...u)),
    onMouseleave: t[2] || (t[2] = (...u) => a.clearHoverTimer && a.clearHoverTimer(...u))
  }, [
    r.icon ? (P(), Ee(s, {
      key: 0,
      size: r.compact ? "sm" : r.size,
      outlined: r.outlined,
      class: j(a.setIconClassNames())
    }, {
      default: we(() => [
        xe(pe(r.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : Z("", !0),
    i.hasSlot ? (P(), W("span", {
      key: 1,
      class: j(["truncate transition", a.setTextClassNames()])
    }, [
      Wt(e.$slots, "default")
    ], 2)) : Z("", !0),
    i.showPopover && r.titlePopover === !0 ? (P(), W("div", sp, pe(r.title), 1)) : Z("", !0)
  ], 42, ap);
}
const nu = /* @__PURE__ */ ht(ip, [["render", op]]), lp = {
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
}, up = ["title"], cp = { class: "block w-5 h-5 m-0.5 shrink-0 self-start pointer-events-none" }, dp = ["checked", "disabled"], fp = /* @__PURE__ */ ne("label", { class: "block w-5 h-5 border-2 peer-checked:border-6 peer-checked:bg-white dark:peer-checked:peer-disabled:bg-gray-500 border-gray-400 peer-checked:border-action-500 dark:peer-checked:border-action-400 peer-disabled:border-gray-200 dark:peer-disabled:border-gray-600 rounded-full transition" }, null, -1);
function hp(e, t, r, n, i, a) {
  return P(), W("label", {
    class: j(["inline-flex items-center max-w-full", {
      "cursor-pointer": !r.disabled,
      "pointer-events-none": r.disabled,
      "gap-1": r.size === "sm",
      "gap-2 p-1": r.size === "md",
      "gap-3 p-2": r.size === "lg"
    }]),
    title: r.title
  }, [
    ne("span", cp, [
      ne("input", {
        type: "radio",
        onChange: t[0] || (t[0] = (...s) => a.change && a.change(...s)),
        checked: r.checked,
        disabled: r.disabled,
        class: "peer hidden"
      }, null, 40, dp),
      fp
    ]),
    e.$slots.default ? (P(), W("span", {
      key: 0,
      class: j(["text-md truncate transition", r.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"])
    }, [
      Wt(e.$slots, "default")
    ], 2)) : Z("", !0)
  ], 10, up);
}
const iu = /* @__PURE__ */ ht(lp, [["render", hp]]), mp = 5, pp = {
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
      return this.loadingResults ? mp : (e = this.data) != null && e.length ? this.data : this.loadingCancelled ? [
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
    collapseDropdownOnAdd: {
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
    PawIcon: Xt,
    PawLink: nu,
    PawCheckbox: ru,
    PawRadio: iu,
    PawChip: np,
    PawButton: oi
  },
  setup() {
    const { t: e } = sn({
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
      this.collapseDropdownOnAdd && (this.showingResults = !1), this.$emit("added");
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
}, gp = {
  key: 0,
  class: "flex flex-row"
}, _p = {
  key: 0,
  class: "max-w-[80px] h-3.5 mr-1 bg-gray-400 loading-bubble"
}, yp = {
  key: 1,
  class: "max-w-[48px] h-3.5 ml-auto bg-gray-400 loading-bubble"
}, vp = /* @__PURE__ */ ne("span", { class: "bg-gray-400 loading-bubble max-w-[24px] w-full h-2" }, null, -1), bp = /* @__PURE__ */ ne("span", { class: "bg-gray-400 loading-bubble w-4 h-4" }, null, -1), wp = [
  vp,
  bp
], kp = {
  key: 1,
  class: "ml-2 mt-1"
}, xp = {
  key: 0,
  class: "max-w-[120px] h-2 bg-gray-400 mb-2 loading-bubble"
}, Sp = {
  key: 1,
  class: "max-w-[120px] h-2 bg-warning-400 mb-2 loading-bubble"
}, Tp = {
  key: 2,
  class: "max-w-[120px] h-2 bg-danger-500 dark:bg-danger-400 loading-bubble"
}, Op = {
  key: 0,
  class: "flex flex-row"
}, Ep = ["title"], Cp = ["data-content"], Dp = ["placeholder", "readonly", "tabindex"], Ip = ["type", "placeholder", "readonly", "tabindex"], Pp = ["onMouseover"], Np = {
  key: 0,
  class: "flex justify-center py-2 bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-b-md shadow-box dark:shadow-box-dark"
}, Lp = {
  key: 3,
  class: "ml-2"
}, Mp = {
  key: 0,
  class: "prose-xs element-text italic text-gray-500 transition"
}, Ap = {
  key: 1,
  class: "prose-xs element-text italic text-warning-500 transition"
}, Rp = {
  key: 2,
  class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition"
};
function Fp(e, t, r, n, i, a) {
  var O, E, h;
  const s = qe("PawIcon"), u = qe("PawCheckbox"), o = qe("PawRadio"), l = qe("PawChip"), f = qe("PawLink"), m = qe("PawCrazyInput"), g = qe("PawButton");
  return P(), W("div", {
    class: j(["relative flex", [
      {
        "gap-1": !r.readonly,
        "mb-44": this.dropdownWrap
      },
      `flex-${this.flexDir}`
    ]]),
    ref: "crazyInput"
  }, [
    r.loading ? (P(), W(nt, { key: 0 }, [
      r.label || r.info ? (P(), W("div", gp, [
        r.label ? (P(), W("label", _p)) : Z("", !0),
        r.info ? (P(), W("span", yp)) : Z("", !0)
      ])) : Z("", !0),
      ne("div", {
        class: j(["flex flex-row items-center justify-between", [r.readonly ? "gap-3" : "gap-1"]])
      }, [
        r.readonly && (r.contextIcon || r.contextControl) ? (P(), W("div", {
          key: 0,
          class: j(["w-4 h-4 bg-gray-400 shrink-0 loading-bubble", [
            r.contextPosition === "top" && r.multiline ? "self-start" : "",
            r.contextPosition === "center" && r.multiline ? "self-center" : "",
            r.contextPosition === "bottom" && r.multiline ? "self-end" : ""
          ]])
        }, null, 2)) : Z("", !0),
        ne("div", {
          class: j(["bg-gray-400 loading-bubble mr-auto", [
            r.readonly ? r.multiline ? "h-8" : a.setLoaderMaxWidth() + " h-2" : r.multiline ? "h-24" : "h-[34px]"
          ]])
        }, null, 2),
        r.readonly ? (P(), W(nt, { key: 1 }, [
          r.extraLabel || r.extraIcon ? (P(), W("div", {
            key: 0,
            class: j(["flex flex-row items-center shrink-0 gap-3 w-full max-w-[52px] py-1", [
              r.extraPosition === "top" && r.multiline ? "self-start" : "",
              r.extraPosition === "center" && r.multiline ? "self-center" : "",
              r.extraPosition === "bottom" && r.multiline ? "self-end" : ""
            ]])
          }, wp, 2)) : Z("", !0)
        ], 64)) : Z("", !0)
      ], 2),
      r.notification || r.warning || r.error ? (P(), W("div", kp, [
        r.notification ? (P(), W("div", xp)) : Z("", !0),
        r.warning ? (P(), W("div", Sp)) : Z("", !0),
        r.error ? (P(), W("div", Tp)) : Z("", !0)
      ])) : Z("", !0)
    ], 64)) : (P(), W(nt, { key: 1 }, [
      r.label || r.info ? (P(), W("div", Op, [
        r.label ? (P(), W("label", {
          key: 0,
          onClick: t[0] || (t[0] = (...c) => a.focusTextInput && a.focusTextInput(...c)),
          class: "prose-xs element-text text-xs uppercase text-gray-500 cursor-pointer transition"
        }, pe(r.label), 1)) : Z("", !0),
        r.info ? (P(), W("span", {
          key: 1,
          class: "ml-auto prose-xs element-text uppercase text-gray-500 cursor-help transition",
          title: r.title
        }, pe(r.info), 9, Ep)) : Z("", !0)
      ])) : Z("", !0),
      ne("div", {
        class: j(["flex flex-row items-center", a.setContainerClassNames()]),
        onClick: t[13] || (t[13] = (...c) => a.click && a.click(...c))
      }, [
        r.contextIcon ? (P(), Ee(s, {
          key: 0,
          onClick: a.focusTextInput,
          size: "sm",
          outlined: r.contextIconOutlined,
          class: j(["text-gray-400 my-1 cursor-pointer", {
            "self-start": r.contextPosition === "top",
            "self-center": r.contextPosition === "center",
            "self-end": r.contextPosition === "bottom"
          }])
        }, {
          default: we(() => [
            xe(pe(r.contextIcon), 1)
          ]),
          _: 1
        }, 8, ["onClick", "outlined", "class"])) : r.contextControl === "checkbox" ? (P(), Ee(u, {
          key: 1,
          ref: "checkbox",
          onClick: a.focusTextInput,
          onChanged: a.change,
          size: "sm",
          class: j(["py-1", {
            "self-start": r.contextPosition === "top",
            "self-center": r.contextPosition === "center",
            "self-end": r.contextPosition === "bottom",
            "pointer-events-none": r.readonly
          }]),
          checked: r.contextChecked,
          disabled: r.contextDisabled
        }, null, 8, ["onClick", "onChanged", "class", "checked", "disabled"])) : r.contextControl === "radio" ? (P(), Ee(o, {
          key: 2,
          ref: "radio",
          onClick: a.focusTextInput,
          onChanged: a.change,
          size: "sm",
          class: j(["py-1", {
            "self-start": r.contextPosition === "top",
            "self-center": r.contextPosition === "center",
            "self-end": r.contextPosition === "bottom",
            "pointer-events-none": r.readonly
          }]),
          checked: r.contextChecked,
          disabled: r.contextDisabled
        }, null, 8, ["onClick", "onChanged", "class", "checked", "disabled"])) : Z("", !0),
        ne("div", {
          class: j(["w-full min-w-0 flex flex-wrap", {
            "cursor-pointer": !((O = r.item) != null && O.unselectable)
          }]),
          onClick: t[11] || (t[11] = (...c) => a.focusTextInput && a.focusTextInput(...c))
        }, [
          (P(!0), W(nt, null, _t(r.maxChips > 0 ? i.chips.slice(0, r.maxChips) : i.chips, (c) => (P(), Ee(l, {
            key: c.id,
            onClicked: (p) => a.removeChip(c),
            size: "sm",
            icon: r.chipIcon,
            title: this.t("removeItem"),
            textEllipsis: r.chipsTruncated,
            class: "shrink align-top justify-self-start ml-1 mt-1"
          }, {
            default: we(() => [
              xe(pe(c.value), 1)
            ]),
            _: 2
          }, 1032, ["onClicked", "icon", "title", "textEllipsis"]))), 128)),
          r.maxChips > 0 && i.chips.length > r.maxChips ? (P(), Ee(l, {
            key: 0,
            size: "sm",
            icon: r.chipIcon,
            class: "shrink align-top justify-self-start ml-1 mt-1"
          }, {
            default: we(() => [
              xe("...")
            ]),
            _: 1
          }, 8, ["icon"])) : Z("", !0),
          ne("span", {
            class: j([a.multilineClasses, a.gridClass, a.widthClasses]),
            "data-content": r.multiline ? i.inputValue : ""
          }, [
            r.multiline ? cr((P(), W("textarea", {
              key: 0,
              "onUpdate:modelValue": t[1] || (t[1] = (c) => i.inputValue = c),
              ref: "textInput",
              class: j(["row-start-1 col-start-1 rounded-md break-words input-reset text-gray-900 dark:text-white transition", [
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
              tabindex: r.readonly && !r.isOpen || (E = r.item) != null && E.unselectable ? -1 : null
            }, null, 42, Dp)), [
              [Ao, i.inputValue]
            ]) : cr((P(), W("input", {
              key: 1,
              type: r.secret ? "password" : "text",
              "onUpdate:modelValue": t[6] || (t[6] = (c) => i.inputValue = c),
              ref: "textInput",
              onInput: t[7] || (t[7] = (...c) => a.type && a.type(...c)),
              onFocus: t[8] || (t[8] = (c) => a.outlineContainer(!0)),
              onBlur: t[9] || (t[9] = (c) => a.outlineContainer(!1)),
              onKeydown: t[10] || (t[10] = (c) => a.keyDown(c, r.item)),
              class: j(["rounded-md input-reset text-gray-900 dark:text-white transition", {
                truncate: !r.multiline,
                "pr-3": r.extraLabel || r.extraIcon || r.readonly,
                "pointer-events-none selection:bg-transparent": r.readonly
              }]),
              placeholder: i.chips.length ? "" : r.placeholder,
              readonly: r.readonly,
              tabindex: r.readonly && !r.isOpen || (h = r.item) != null && h.unselectable ? -1 : null
            }, null, 42, Ip)), [
              [sd, i.inputValue]
            ])
          ], 10, Cp)
        ], 2),
        r.extraLabel || r.extraIcon || r.data ? (P(), W("span", {
          key: 3,
          class: j(["flex flex-row shrink-0 items-center py-1", {
            "self-start": r.extraPosition === "top",
            "self-center": r.extraPosition === "center",
            "self-end": r.extraPosition === "bottom"
          }])
        }, [
          r.extraLabel ? (P(), W("span", {
            key: 0,
            class: "mr-1 text-xs text-gray-400 cursor-pointer",
            onClick: t[12] || (t[12] = (...c) => a.focusTextInput && a.focusTextInput(...c))
          }, pe(r.extraLabel), 1)) : Z("", !0),
          r.extraIcon ? (P(), Ee(s, {
            key: 1,
            onClick: a.focusTextInput,
            size: "sm",
            class: j(["text-gray-400 opacity-100 cursor-pointer transition", {
              "opacity-0": i.showingResults
            }]),
            outlined: r.extraIconOutlined
          }, {
            default: we(() => [
              xe(pe(r.extraIcon), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class", "outlined"])) : Z("", !0),
          r.data ? cr((P(), Ee(f, {
            key: 2,
            onClicked: a.closeAction,
            class: j([[
              i.showingResults || i.inputValue ? "opacity-100" : "opacity-0 pointer-events-none"
            ], "transition"]),
            size: "sm",
            icon: r.select ? "close" : r.multiselect ? i.showingResults ? "unfold_less" : "unfold_more" : "",
            tabindex: i.showingResults ? null : -1
          }, null, 8, ["onClicked", "class", "icon", "tabindex"])), [
            [Qr, i.showingResults || i.inputValue || !r.extraLabel && !r.extraIcon]
          ]) : Z("", !0)
        ], 2)) : Z("", !0)
      ], 2),
      r.data ? (P(), W("div", {
        key: 1,
        class: j([{
          "opacity-100": i.showingResults
        }, "absolute z-20 opacity-0 bottom-1 w-full translate-y-full h-1 border-x border-gray-200 dark:border-gray-600 bg-gray-200 dark:bg-gray-600 transition"])
      }, null, 2)) : Z("", !0),
      r.data ? (P(), W("div", {
        key: 2,
        class: j([[
          i.showingResults ? "opacity-100" : "opacity-0 pointer-events-none"
        ], "absolute z-10 bottom-0 w-full max-h-[181px] translate-y-full rounded-md rounded-t-none transition"])
      }, [
        ne("div", {
          class: j(["max-h-[inherit] overflow-y-auto border-gray-300 dark:border-gray-700 shadow-box dark:shadow-box-dark", r.addLabel ? "rounded-b-none" : "rounded-b-md"])
        }, [
          (P(!0), W(nt, null, _t(a.dropdownItems, (c) => (P(), W("div", {
            key: c,
            onMouseover: (p) => a.optionHovered(c),
            class: j(["transition", [
              !c.unselectable && !i.loadingResults ? "hover:bg-white dark:hover:bg-gray-800 cursor-pointer" : "",
              c.id === i.itemIdFocused && !c.unselectable && !i.loadingResults ? "bg-white dark:bg-gray-800" : "bg-gray-100 dark:bg-gray-700"
            ]])
          }, [
            Je(m, {
              class: j({
                "p-2 gap-1": i.loadingResults
              }),
              ref_for: !0,
              ref: `OPTION-${a.getOptionId(c)}`,
              onClick: (p) => a.confirmSelection(c),
              onChanged: (p) => c.unselectable ? null : a.itemSelected(c, p),
              onOptionFocused: (p, _) => c.unselectable ? null : a.focusChange(p, _),
              onOptionSelected: (p, _) => c.unselectable ? null : a.itemSelected(p, _),
              onOptionMoved: (p, _) => c.unselectable ? null : a.moveOption(p, _),
              onOptionTyped: t[14] || (t[14] = (p) => a.optionTyped(p)),
              onDropdownClosed: (p) => c.unselectable ? null : a.closeDropdown(),
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
              default: we(() => [
                xe(pe(c.value), 1)
              ]),
              _: 2
            }, 1032, ["class", "onClick", "onChanged", "onOptionFocused", "onOptionSelected", "onOptionMoved", "onDropdownClosed", "context-control", "context-checked", "context-disabled", "context-position", "extra-label", "extra-icon", "extra-icon-outlined", "extra-position", "multiline", "is-open", "item", "loading"])
          ], 42, Pp))), 128))
        ], 2),
        r.addLabel && !i.loadingResults ? (P(), W("div", Np, [
          Je(g, {
            size: r.addButtonSize,
            icon: r.addIcon,
            onClicked: a.add
          }, {
            default: we(() => [
              xe(pe(r.addLabel), 1)
            ]),
            _: 1
          }, 8, ["size", "icon", "onClicked"])
        ])) : Z("", !0)
      ], 2)) : Z("", !0),
      r.notification || r.warning || r.error ? (P(), W("div", Lp, [
        r.notification ? (P(), W("div", Mp, pe(r.notification), 1)) : Z("", !0),
        r.warning ? (P(), W("div", Ap, pe(r.warning), 1)) : Z("", !0),
        r.error ? (P(), W("div", Rp, pe(r.error), 1)) : Z("", !0)
      ])) : Z("", !0)
    ], 64))
  ], 2);
}
const Yp = /* @__PURE__ */ ht(pp, [["render", Fp]]), Bp = { class: "relative w-fit" }, Up = { class: "flex flex-col" }, Wp = ["onClick"], zp = {
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
    const n = xt("right-0");
    function i(l) {
      l.x < 260 && (n.value = "left-0"), u.value = !u.value;
    }
    const a = r, s = e, u = xt(!1);
    function o(l) {
      u.value = !1, a("selected", l);
    }
    return t({ dropdownOpen: u }), (l, f) => (P(), W("div", Bp, [
      Je(oi, {
        onClick: f[0] || (f[0] = (m) => i(m)),
        size: s.size,
        title: s.title,
        icon: s.icon,
        disabled: s.disabled,
        outlined: s.outlined,
        buttonRoundedClasses: s.buttonRoundedClasses,
        buttonColorClasses: s.buttonColorClasses,
        buttonBackgroundClasses: s.buttonBackgroundClasses,
        iconColorClasses: s.iconColorClasses
      }, {
        default: we(() => [
          xe(pe(s.textSlot), 1)
        ]),
        _: 1
      }, 8, ["size", "title", "icon", "disabled", "outlined", "buttonRoundedClasses", "buttonColorClasses", "buttonBackgroundClasses", "iconColorClasses"]),
      Je(Ra, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95",
        appear: ""
      }, {
        default: we(() => [
          cr(ne("div", {
            class: j([[
              e.fluidWidthDropdown ? "min-w-max" : "min-w-[240px]",
              n.value
            ], "absolute max-w-xs w-full rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 my-2 z-50"])
          }, [
            ne("div", Up, [
              (P(!0), W(nt, null, _t(s.items, (m) => (P(), W("button", {
                onClick: (g) => o(m.identifier),
                key: m.identifier,
                class: j(["dark:hover:bg-gray-900 cursor-pointer first-of-type:rounded-tr-lg first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-bl-lg hover:bg-gray-100 w-full text-md dark:text-white text-gray-900 transition-all duration-300 items-center flex flex-row space-x-3 border-t dark:border-gray-700 first-of-type:border-t-0", [e.fluidWidthDropdown ? "px-4 py-2" : "p-2"]])
              }, [
                m.icon ? (P(), Ee(Xt, {
                  key: 0,
                  size: "sm",
                  class: "text-gray-400"
                }, {
                  default: we(() => [
                    xe(pe(m.icon), 1)
                  ]),
                  _: 2
                }, 1024)) : Z("", !0),
                ne("span", null, pe(m.textSlot), 1)
              ], 10, Wp))), 128))
            ])
          ], 2), [
            [Qr, u.value]
          ])
        ]),
        _: 1
      })
    ]));
  }
}, Vp = {
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
}, Hp = ["title"], jp = { class: "truncate" };
function qp(e, t, r, n, i, a) {
  return P(), W("label", {
    class: j(["flex items-center max-w-max text-white element-text rounded-full transition", a.setClassNames()]),
    title: r.title
  }, [
    ne("span", jp, [
      Wt(e.$slots, "default")
    ])
  ], 10, Hp);
}
const Gp = /* @__PURE__ */ ht(Vp, [["render", qp]]);
var $p = {
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
}, Kp = $p, li = {}, On = {};
Object.defineProperty(On, "__esModule", { value: !0 });
On.clone = void 0;
function Xp(e) {
  return e ? JSON.parse(JSON.stringify(e)) : null;
}
On.clone = Xp;
var ui = {};
Object.defineProperty(ui, "__esModule", { value: !0 });
ui.matches = void 0;
function Qp(e, t, r) {
  var n = String(t).length, i = e.substr(0, n), a = parseInt(i, 10);
  return t = parseInt(String(t).substr(0, i.length), 10), r = parseInt(String(r).substr(0, i.length), 10), a >= t && a <= r;
}
function Zp(e, t) {
  return t = String(t), t.substring(0, e.length) === e.substring(0, t.length);
}
function Jp(e, t) {
  return Array.isArray(t) ? Qp(e, t[0], t[1]) : Zp(e, t);
}
ui.matches = Jp;
Object.defineProperty(li, "__esModule", { value: !0 });
li.addMatchingCardsToResults = void 0;
var eg = On, tg = ui;
function rg(e, t, r) {
  var n, i;
  for (n = 0; n < t.patterns.length; n++) {
    var a = t.patterns[n];
    if (tg.matches(e, a)) {
      var s = eg.clone(t);
      Array.isArray(a) ? i = String(a[0]).length : i = String(a).length, e.length >= i && (s.matchStrength = i), r.push(s);
      break;
    }
  }
}
li.addMatchingCardsToResults = rg;
var ci = {};
Object.defineProperty(ci, "__esModule", { value: !0 });
ci.isValidInputType = void 0;
function ng(e) {
  return typeof e == "string" || e instanceof String;
}
ci.isValidInputType = ng;
var di = {};
Object.defineProperty(di, "__esModule", { value: !0 });
di.findBestMatch = void 0;
function ig(e) {
  var t = e.filter(function(r) {
    return r.matchStrength;
  }).length;
  return t > 0 && t === e.length;
}
function ag(e) {
  return ig(e) ? e.reduce(function(t, r) {
    return !t || Number(t.matchStrength) < Number(r.matchStrength) ? r : t;
  }) : null;
}
di.findBestMatch = ag;
var $n = br && br.__assign || function() {
  return $n = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, $n.apply(this, arguments);
}, au = Kp, sg = li, og = ci, lg = di, En = On, wn = {}, Ot = {
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
}, su = [
  Ot.VISA,
  Ot.MASTERCARD,
  Ot.AMERICAN_EXPRESS,
  Ot.DINERS_CLUB,
  Ot.DISCOVER,
  Ot.JCB,
  Ot.UNIONPAY,
  Ot.MAESTRO,
  Ot.ELO,
  Ot.MIR,
  Ot.HIPER,
  Ot.HIPERCARD
], Tr = En.clone(su);
function is(e) {
  return wn[e] || au[e];
}
function ug() {
  return Tr.map(function(e) {
    return En.clone(is(e));
  });
}
function as(e, t) {
  t === void 0 && (t = !1);
  var r = Tr.indexOf(e);
  if (!t && r === -1)
    throw new Error('"' + e + '" is not a supported card type.');
  return r;
}
function Dr(e) {
  var t = [];
  if (!og.isValidInputType(e))
    return t;
  if (e.length === 0)
    return ug();
  Tr.forEach(function(n) {
    var i = is(n);
    sg.addMatchingCardsToResults(e, i, t);
  });
  var r = lg.findBestMatch(t);
  return r ? [r] : t;
}
Dr.getTypeInfo = function(e) {
  return En.clone(is(e));
};
Dr.removeCard = function(e) {
  var t = as(e);
  Tr.splice(t, 1);
};
Dr.addCard = function(e) {
  var t = as(e.type, !0);
  wn[e.type] = e, t === -1 && Tr.push(e.type);
};
Dr.updateCard = function(e, t) {
  var r = wn[e] || au[e];
  if (!r)
    throw new Error('"' + e + "\" is not a recognized type. Use `addCard` instead.'");
  if (t.type && r.type !== t.type)
    throw new Error("Cannot overwrite type parameter.");
  var n = En.clone(r);
  n = $n($n({}, n), t), wn[n.type] = n;
};
Dr.changeOrder = function(e, t) {
  var r = as(e);
  Tr.splice(r, 1), Tr.splice(t, 0, e);
};
Dr.resetModifications = function() {
  Tr = En.clone(su), wn = {};
};
Dr.types = Ot;
var cg = Dr;
const dg = /* @__PURE__ */ nn(cg);
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var ou;
function ee() {
  return ou.apply(null, arguments);
}
function fg(e) {
  ou = e;
}
function Bt(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Yr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Me(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ss(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (Me(e, t))
      return !1;
  return !0;
}
function wt(e) {
  return e === void 0;
}
function mr(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Cn(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function lu(e, t) {
  var r = [], n, i = e.length;
  for (n = 0; n < i; ++n)
    r.push(t(e[n], n));
  return r;
}
function wr(e, t) {
  for (var r in t)
    Me(t, r) && (e[r] = t[r]);
  return Me(t, "toString") && (e.toString = t.toString), Me(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Qt(e, t, r, n) {
  return Pu(e, t, r, n, !0).utc();
}
function hg() {
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
function Te(e) {
  return e._pf == null && (e._pf = hg()), e._pf;
}
var Ea;
Array.prototype.some ? Ea = Array.prototype.some : Ea = function(e) {
  var t = Object(this), r = t.length >>> 0, n;
  for (n = 0; n < r; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function os(e) {
  var t = null, r = !1, n = e._d && !isNaN(e._d.getTime());
  if (n && (t = Te(e), r = Ea.call(t.parsedDateParts, function(i) {
    return i != null;
  }), n = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r), e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = n;
  else
    return n;
  return e._isValid;
}
function fi(e) {
  var t = Qt(NaN);
  return e != null ? wr(Te(t), e) : Te(t).userInvalidated = !0, t;
}
var xo = ee.momentProperties = [], zi = !1;
function ls(e, t) {
  var r, n, i, a = xo.length;
  if (wt(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), wt(t._i) || (e._i = t._i), wt(t._f) || (e._f = t._f), wt(t._l) || (e._l = t._l), wt(t._strict) || (e._strict = t._strict), wt(t._tzm) || (e._tzm = t._tzm), wt(t._isUTC) || (e._isUTC = t._isUTC), wt(t._offset) || (e._offset = t._offset), wt(t._pf) || (e._pf = Te(t)), wt(t._locale) || (e._locale = t._locale), a > 0)
    for (r = 0; r < a; r++)
      n = xo[r], i = t[n], wt(i) || (e[n] = i);
  return e;
}
function Dn(e) {
  ls(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), zi === !1 && (zi = !0, ee.updateOffset(this), zi = !1);
}
function Ut(e) {
  return e instanceof Dn || e != null && e._isAMomentObject != null;
}
function uu(e) {
  ee.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function At(e, t) {
  var r = !0;
  return wr(function() {
    if (ee.deprecationHandler != null && ee.deprecationHandler(null, e), r) {
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
      uu(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var So = {};
function cu(e, t) {
  ee.deprecationHandler != null && ee.deprecationHandler(e, t), So[e] || (uu(t), So[e] = !0);
}
ee.suppressDeprecationWarnings = !1;
ee.deprecationHandler = null;
function Zt(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function mg(e) {
  var t, r;
  for (r in e)
    Me(e, r) && (t = e[r], Zt(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Ca(e, t) {
  var r = wr({}, e), n;
  for (n in t)
    Me(t, n) && (Yr(e[n]) && Yr(t[n]) ? (r[n] = {}, wr(r[n], e[n]), wr(r[n], t[n])) : t[n] != null ? r[n] = t[n] : delete r[n]);
  for (n in e)
    Me(e, n) && !Me(t, n) && Yr(e[n]) && (r[n] = wr({}, r[n]));
  return r;
}
function us(e) {
  e != null && this.set(e);
}
var Da;
Object.keys ? Da = Object.keys : Da = function(e) {
  var t, r = [];
  for (t in e)
    Me(e, t) && r.push(t);
  return r;
};
var pg = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function gg(e, t, r) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return Zt(n) ? n.call(t, r) : n;
}
function Kt(e, t, r) {
  var n = "" + Math.abs(e), i = t - n.length, a = e >= 0;
  return (a ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + n;
}
var cs = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Yn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Vi = {}, Zr = {};
function me(e, t, r, n) {
  var i = n;
  typeof n == "string" && (i = function() {
    return this[n]();
  }), e && (Zr[e] = i), t && (Zr[t[0]] = function() {
    return Kt(i.apply(this, arguments), t[1], t[2]);
  }), r && (Zr[r] = function() {
    return this.localeData().ordinal(
      i.apply(this, arguments),
      e
    );
  });
}
function _g(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function yg(e) {
  var t = e.match(cs), r, n;
  for (r = 0, n = t.length; r < n; r++)
    Zr[t[r]] ? t[r] = Zr[t[r]] : t[r] = _g(t[r]);
  return function(i) {
    var a = "", s;
    for (s = 0; s < n; s++)
      a += Zt(t[s]) ? t[s].call(i, e) : t[s];
    return a;
  };
}
function Wn(e, t) {
  return e.isValid() ? (t = du(t, e.localeData()), Vi[t] = Vi[t] || yg(t), Vi[t](e)) : e.localeData().invalidDate();
}
function du(e, t) {
  var r = 5;
  function n(i) {
    return t.longDateFormat(i) || i;
  }
  for (Yn.lastIndex = 0; r >= 0 && Yn.test(e); )
    e = e.replace(
      Yn,
      n
    ), Yn.lastIndex = 0, r -= 1;
  return e;
}
var vg = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function bg(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(cs).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var wg = "Invalid date";
function kg() {
  return this._invalidDate;
}
var xg = "%d", Sg = /\d{1,2}/;
function Tg(e) {
  return this._ordinal.replace("%d", e);
}
var Og = {
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
function Eg(e, t, r, n) {
  var i = this._relativeTime[r];
  return Zt(i) ? i(e, t, r, n) : i.replace(/%d/i, e);
}
function Cg(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return Zt(r) ? r(t) : r.replace(/%s/i, t);
}
var To = {
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
function Rt(e) {
  return typeof e == "string" ? To[e] || To[e.toLowerCase()] : void 0;
}
function ds(e) {
  var t = {}, r, n;
  for (n in e)
    Me(e, n) && (r = Rt(n), r && (t[r] = e[n]));
  return t;
}
var Dg = {
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
function Ig(e) {
  var t = [], r;
  for (r in e)
    Me(e, r) && t.push({ unit: r, priority: Dg[r] });
  return t.sort(function(n, i) {
    return n.priority - i.priority;
  }), t;
}
var fu = /\d/, Dt = /\d\d/, hu = /\d{3}/, fs = /\d{4}/, hi = /[+-]?\d{6}/, Ke = /\d\d?/, mu = /\d\d\d\d?/, pu = /\d\d\d\d\d\d?/, mi = /\d{1,3}/, hs = /\d{1,4}/, pi = /[+-]?\d{1,6}/, on = /\d+/, gi = /[+-]?\d+/, Pg = /Z|[+-]\d\d:?\d\d/gi, _i = /Z|[+-]\d\d(?::?\d\d)?/gi, Ng = /[+-]?\d+(\.\d{1,3})?/, In = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ln = /^[1-9]\d?/, ms = /^([1-9]\d|\d)/, Kn;
Kn = {};
function ae(e, t, r) {
  Kn[e] = Zt(t) ? t : function(n, i) {
    return n && r ? r : t;
  };
}
function Lg(e, t) {
  return Me(Kn, e) ? Kn[e](t._strict, t._locale) : new RegExp(Mg(e));
}
function Mg(e) {
  return dr(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, n, i, a) {
        return r || n || i || a;
      }
    )
  );
}
function dr(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Nt(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function De(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = Nt(t)), r;
}
var Ia = {};
function Be(e, t) {
  var r, n = t, i;
  for (typeof e == "string" && (e = [e]), mr(t) && (n = function(a, s) {
    s[t] = De(a);
  }), i = e.length, r = 0; r < i; r++)
    Ia[e[r]] = n;
}
function Pn(e, t) {
  Be(e, function(r, n, i, a) {
    i._w = i._w || {}, t(r, i._w, i, a);
  });
}
function Ag(e, t, r) {
  t != null && Me(Ia, e) && Ia[e](t, r._a, r, e);
}
function yi(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var ft = 0, lr = 1, Gt = 2, st = 3, Yt = 4, ur = 5, Fr = 6, Rg = 7, Fg = 8;
me("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Kt(e, 4) : "+" + e;
});
me(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
me(0, ["YYYY", 4], 0, "year");
me(0, ["YYYYY", 5], 0, "year");
me(0, ["YYYYYY", 6, !0], 0, "year");
ae("Y", gi);
ae("YY", Ke, Dt);
ae("YYYY", hs, fs);
ae("YYYYY", pi, hi);
ae("YYYYYY", pi, hi);
Be(["YYYYY", "YYYYYY"], ft);
Be("YYYY", function(e, t) {
  t[ft] = e.length === 2 ? ee.parseTwoDigitYear(e) : De(e);
});
Be("YY", function(e, t) {
  t[ft] = ee.parseTwoDigitYear(e);
});
Be("Y", function(e, t) {
  t[ft] = parseInt(e, 10);
});
function _n(e) {
  return yi(e) ? 366 : 365;
}
ee.parseTwoDigitYear = function(e) {
  return De(e) + (De(e) > 68 ? 1900 : 2e3);
};
var gu = un("FullYear", !0);
function Yg() {
  return yi(this.year());
}
function un(e, t) {
  return function(r) {
    return r != null ? (_u(this, e, r), ee.updateOffset(this, t), this) : kn(this, e);
  };
}
function kn(e, t) {
  if (!e.isValid())
    return NaN;
  var r = e._d, n = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return n ? r.getUTCMilliseconds() : r.getMilliseconds();
    case "Seconds":
      return n ? r.getUTCSeconds() : r.getSeconds();
    case "Minutes":
      return n ? r.getUTCMinutes() : r.getMinutes();
    case "Hours":
      return n ? r.getUTCHours() : r.getHours();
    case "Date":
      return n ? r.getUTCDate() : r.getDate();
    case "Day":
      return n ? r.getUTCDay() : r.getDay();
    case "Month":
      return n ? r.getUTCMonth() : r.getMonth();
    case "FullYear":
      return n ? r.getUTCFullYear() : r.getFullYear();
    default:
      return NaN;
  }
}
function _u(e, t, r) {
  var n, i, a, s, u;
  if (!(!e.isValid() || isNaN(r))) {
    switch (n = e._d, i = e._isUTC, t) {
      case "Milliseconds":
        return void (i ? n.setUTCMilliseconds(r) : n.setMilliseconds(r));
      case "Seconds":
        return void (i ? n.setUTCSeconds(r) : n.setSeconds(r));
      case "Minutes":
        return void (i ? n.setUTCMinutes(r) : n.setMinutes(r));
      case "Hours":
        return void (i ? n.setUTCHours(r) : n.setHours(r));
      case "Date":
        return void (i ? n.setUTCDate(r) : n.setDate(r));
      case "FullYear":
        break;
      default:
        return;
    }
    a = r, s = e.month(), u = e.date(), u = u === 29 && s === 1 && !yi(a) ? 28 : u, i ? n.setUTCFullYear(a, s, u) : n.setFullYear(a, s, u);
  }
}
function Bg(e) {
  return e = Rt(e), Zt(this[e]) ? this[e]() : this;
}
function Ug(e, t) {
  if (typeof e == "object") {
    e = ds(e);
    var r = Ig(e), n, i = r.length;
    for (n = 0; n < i; n++)
      this[r[n].unit](e[r[n].unit]);
  } else if (e = Rt(e), Zt(this[e]))
    return this[e](t);
  return this;
}
function Wg(e, t) {
  return (e % t + t) % t;
}
var it;
Array.prototype.indexOf ? it = Array.prototype.indexOf : it = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function ps(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = Wg(t, 12);
  return e += (t - r) / 12, r === 1 ? yi(e) ? 29 : 28 : 31 - r % 7 % 2;
}
me("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
me("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
me("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
ae("M", Ke, ln);
ae("MM", Ke, Dt);
ae("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
ae("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Be(["M", "MM"], function(e, t) {
  t[lr] = De(e) - 1;
});
Be(["MMM", "MMMM"], function(e, t, r, n) {
  var i = r._locale.monthsParse(e, n, r._strict);
  i != null ? t[lr] = i : Te(r).invalidMonth = e;
});
var zg = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), yu = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), vu = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Vg = In, Hg = In;
function jg(e, t) {
  return e ? Bt(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || vu).test(t) ? "format" : "standalone"][e.month()] : Bt(this._months) ? this._months : this._months.standalone;
}
function qg(e, t) {
  return e ? Bt(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[vu.test(t) ? "format" : "standalone"][e.month()] : Bt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Gg(e, t, r) {
  var n, i, a, s = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      a = Qt([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(a, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (i = it.call(this._shortMonthsParse, s), i !== -1 ? i : null) : (i = it.call(this._longMonthsParse, s), i !== -1 ? i : null) : t === "MMM" ? (i = it.call(this._shortMonthsParse, s), i !== -1 ? i : (i = it.call(this._longMonthsParse, s), i !== -1 ? i : null)) : (i = it.call(this._longMonthsParse, s), i !== -1 ? i : (i = it.call(this._shortMonthsParse, s), i !== -1 ? i : null));
}
function $g(e, t, r) {
  var n, i, a;
  if (this._monthsParseExact)
    return Gg.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (i = Qt([2e3, n]), r && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
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
function bu(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = De(t);
    else if (t = e.localeData().monthsParse(t), !mr(t))
      return e;
  }
  var r = t, n = e.date();
  return n = n < 29 ? n : Math.min(n, ps(e.year(), r)), e._isUTC ? e._d.setUTCMonth(r, n) : e._d.setMonth(r, n), e;
}
function wu(e) {
  return e != null ? (bu(this, e), ee.updateOffset(this, !0), this) : kn(this, "Month");
}
function Kg() {
  return ps(this.year(), this.month());
}
function Xg(e) {
  return this._monthsParseExact ? (Me(this, "_monthsRegex") || ku.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Me(this, "_monthsShortRegex") || (this._monthsShortRegex = Vg), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Qg(e) {
  return this._monthsParseExact ? (Me(this, "_monthsRegex") || ku.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Me(this, "_monthsRegex") || (this._monthsRegex = Hg), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function ku() {
  function e(o, l) {
    return l.length - o.length;
  }
  var t = [], r = [], n = [], i, a, s, u;
  for (i = 0; i < 12; i++)
    a = Qt([2e3, i]), s = dr(this.monthsShort(a, "")), u = dr(this.months(a, "")), t.push(s), r.push(u), n.push(u), n.push(s);
  t.sort(e), r.sort(e), n.sort(e), this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Zg(e, t, r, n, i, a, s) {
  var u;
  return e < 100 && e >= 0 ? (u = new Date(e + 400, t, r, n, i, a, s), isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e, t, r, n, i, a, s), u;
}
function xn(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Xn(e, t, r) {
  var n = 7 + t - r, i = (7 + xn(e, 0, n).getUTCDay() - t) % 7;
  return -i + n - 1;
}
function xu(e, t, r, n, i) {
  var a = (7 + r - n) % 7, s = Xn(e, n, i), u = 1 + 7 * (t - 1) + a + s, o, l;
  return u <= 0 ? (o = e - 1, l = _n(o) + u) : u > _n(e) ? (o = e + 1, l = u - _n(e)) : (o = e, l = u), {
    year: o,
    dayOfYear: l
  };
}
function Sn(e, t, r) {
  var n = Xn(e.year(), t, r), i = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, a, s;
  return i < 1 ? (s = e.year() - 1, a = i + fr(s, t, r)) : i > fr(e.year(), t, r) ? (a = i - fr(e.year(), t, r), s = e.year() + 1) : (s = e.year(), a = i), {
    week: a,
    year: s
  };
}
function fr(e, t, r) {
  var n = Xn(e, t, r), i = Xn(e + 1, t, r);
  return (_n(e) - n + i) / 7;
}
me("w", ["ww", 2], "wo", "week");
me("W", ["WW", 2], "Wo", "isoWeek");
ae("w", Ke, ln);
ae("ww", Ke, Dt);
ae("W", Ke, ln);
ae("WW", Ke, Dt);
Pn(
  ["w", "ww", "W", "WW"],
  function(e, t, r, n) {
    t[n.substr(0, 1)] = De(e);
  }
);
function Jg(e) {
  return Sn(e, this._week.dow, this._week.doy).week;
}
var e_ = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function t_() {
  return this._week.dow;
}
function r_() {
  return this._week.doy;
}
function n_(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function i_(e) {
  var t = Sn(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
me("d", 0, "do", "day");
me("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
me("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
me("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
me("e", 0, 0, "weekday");
me("E", 0, 0, "isoWeekday");
ae("d", Ke);
ae("e", Ke);
ae("E", Ke);
ae("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
ae("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
ae("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Pn(["dd", "ddd", "dddd"], function(e, t, r, n) {
  var i = r._locale.weekdaysParse(e, n, r._strict);
  i != null ? t.d = i : Te(r).invalidWeekday = e;
});
Pn(["d", "e", "E"], function(e, t, r, n) {
  t[n] = De(e);
});
function a_(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function s_(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function gs(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var o_ = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Su = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), l_ = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), u_ = In, c_ = In, d_ = In;
function f_(e, t) {
  var r = Bt(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? gs(r, this._week.dow) : e ? r[e.day()] : r;
}
function h_(e) {
  return e === !0 ? gs(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function m_(e) {
  return e === !0 ? gs(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function p_(e, t, r) {
  var n, i, a, s = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      a = Qt([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(a, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (i = it.call(this._weekdaysParse, s), i !== -1 ? i : null) : t === "ddd" ? (i = it.call(this._shortWeekdaysParse, s), i !== -1 ? i : null) : (i = it.call(this._minWeekdaysParse, s), i !== -1 ? i : null) : t === "dddd" ? (i = it.call(this._weekdaysParse, s), i !== -1 || (i = it.call(this._shortWeekdaysParse, s), i !== -1) ? i : (i = it.call(this._minWeekdaysParse, s), i !== -1 ? i : null)) : t === "ddd" ? (i = it.call(this._shortWeekdaysParse, s), i !== -1 || (i = it.call(this._weekdaysParse, s), i !== -1) ? i : (i = it.call(this._minWeekdaysParse, s), i !== -1 ? i : null)) : (i = it.call(this._minWeekdaysParse, s), i !== -1 || (i = it.call(this._weekdaysParse, s), i !== -1) ? i : (i = it.call(this._shortWeekdaysParse, s), i !== -1 ? i : null));
}
function g_(e, t, r) {
  var n, i, a;
  if (this._weekdaysParseExact)
    return p_.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (i = Qt([2e3, 1]).day(n), r && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
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
function __(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = kn(this, "Day");
  return e != null ? (e = a_(e, this.localeData()), this.add(e - t, "d")) : t;
}
function y_(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function v_(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = s_(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function b_(e) {
  return this._weekdaysParseExact ? (Me(this, "_weekdaysRegex") || _s.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Me(this, "_weekdaysRegex") || (this._weekdaysRegex = u_), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function w_(e) {
  return this._weekdaysParseExact ? (Me(this, "_weekdaysRegex") || _s.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Me(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = c_), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function k_(e) {
  return this._weekdaysParseExact ? (Me(this, "_weekdaysRegex") || _s.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Me(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = d_), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function _s() {
  function e(f, m) {
    return m.length - f.length;
  }
  var t = [], r = [], n = [], i = [], a, s, u, o, l;
  for (a = 0; a < 7; a++)
    s = Qt([2e3, 1]).day(a), u = dr(this.weekdaysMin(s, "")), o = dr(this.weekdaysShort(s, "")), l = dr(this.weekdays(s, "")), t.push(u), r.push(o), n.push(l), i.push(u), i.push(o), i.push(l);
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
function ys() {
  return this.hours() % 12 || 12;
}
function x_() {
  return this.hours() || 24;
}
me("H", ["HH", 2], 0, "hour");
me("h", ["hh", 2], 0, ys);
me("k", ["kk", 2], 0, x_);
me("hmm", 0, 0, function() {
  return "" + ys.apply(this) + Kt(this.minutes(), 2);
});
me("hmmss", 0, 0, function() {
  return "" + ys.apply(this) + Kt(this.minutes(), 2) + Kt(this.seconds(), 2);
});
me("Hmm", 0, 0, function() {
  return "" + this.hours() + Kt(this.minutes(), 2);
});
me("Hmmss", 0, 0, function() {
  return "" + this.hours() + Kt(this.minutes(), 2) + Kt(this.seconds(), 2);
});
function Tu(e, t) {
  me(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Tu("a", !0);
Tu("A", !1);
function Ou(e, t) {
  return t._meridiemParse;
}
ae("a", Ou);
ae("A", Ou);
ae("H", Ke, ms);
ae("h", Ke, ln);
ae("k", Ke, ln);
ae("HH", Ke, Dt);
ae("hh", Ke, Dt);
ae("kk", Ke, Dt);
ae("hmm", mu);
ae("hmmss", pu);
ae("Hmm", mu);
ae("Hmmss", pu);
Be(["H", "HH"], st);
Be(["k", "kk"], function(e, t, r) {
  var n = De(e);
  t[st] = n === 24 ? 0 : n;
});
Be(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
Be(["h", "hh"], function(e, t, r) {
  t[st] = De(e), Te(r).bigHour = !0;
});
Be("hmm", function(e, t, r) {
  var n = e.length - 2;
  t[st] = De(e.substr(0, n)), t[Yt] = De(e.substr(n)), Te(r).bigHour = !0;
});
Be("hmmss", function(e, t, r) {
  var n = e.length - 4, i = e.length - 2;
  t[st] = De(e.substr(0, n)), t[Yt] = De(e.substr(n, 2)), t[ur] = De(e.substr(i)), Te(r).bigHour = !0;
});
Be("Hmm", function(e, t, r) {
  var n = e.length - 2;
  t[st] = De(e.substr(0, n)), t[Yt] = De(e.substr(n));
});
Be("Hmmss", function(e, t, r) {
  var n = e.length - 4, i = e.length - 2;
  t[st] = De(e.substr(0, n)), t[Yt] = De(e.substr(n, 2)), t[ur] = De(e.substr(i));
});
function S_(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var T_ = /[ap]\.?m?\.?/i, O_ = un("Hours", !0);
function E_(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var Eu = {
  calendar: pg,
  longDateFormat: vg,
  invalidDate: wg,
  ordinal: xg,
  dayOfMonthOrdinalParse: Sg,
  relativeTime: Og,
  months: zg,
  monthsShort: yu,
  week: e_,
  weekdays: o_,
  weekdaysMin: l_,
  weekdaysShort: Su,
  meridiemParse: T_
}, et = {}, mn = {}, Tn;
function C_(e, t) {
  var r, n = Math.min(e.length, t.length);
  for (r = 0; r < n; r += 1)
    if (e[r] !== t[r])
      return r;
  return n;
}
function Oo(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function D_(e) {
  for (var t = 0, r, n, i, a; t < e.length; ) {
    for (a = Oo(e[t]).split("-"), r = a.length, n = Oo(e[t + 1]), n = n ? n.split("-") : null; r > 0; ) {
      if (i = vi(a.slice(0, r).join("-")), i)
        return i;
      if (n && n.length >= r && C_(a, n) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return Tn;
}
function I_(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function vi(e) {
  var t = null, r;
  if (et[e] === void 0 && typeof module < "u" && module && module.exports && I_(e))
    try {
      t = Tn._abbr, r = require, r("./locale/" + e), Sr(t);
    } catch {
      et[e] = null;
    }
  return et[e];
}
function Sr(e, t) {
  var r;
  return e && (wt(t) ? r = gr(e) : r = vs(e, t), r ? Tn = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Tn._abbr;
}
function vs(e, t) {
  if (t !== null) {
    var r, n = Eu;
    if (t.abbr = e, et[e] != null)
      cu(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = et[e]._config;
    else if (t.parentLocale != null)
      if (et[t.parentLocale] != null)
        n = et[t.parentLocale]._config;
      else if (r = vi(t.parentLocale), r != null)
        n = r._config;
      else
        return mn[t.parentLocale] || (mn[t.parentLocale] = []), mn[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return et[e] = new us(Ca(n, t)), mn[e] && mn[e].forEach(function(i) {
      vs(i.name, i.config);
    }), Sr(e), et[e];
  } else
    return delete et[e], null;
}
function P_(e, t) {
  if (t != null) {
    var r, n, i = Eu;
    et[e] != null && et[e].parentLocale != null ? et[e].set(Ca(et[e]._config, t)) : (n = vi(e), n != null && (i = n._config), t = Ca(i, t), n == null && (t.abbr = e), r = new us(t), r.parentLocale = et[e], et[e] = r), Sr(e);
  } else
    et[e] != null && (et[e].parentLocale != null ? (et[e] = et[e].parentLocale, e === Sr() && Sr(e)) : et[e] != null && delete et[e]);
  return et[e];
}
function gr(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Tn;
  if (!Bt(e)) {
    if (t = vi(e), t)
      return t;
    e = [e];
  }
  return D_(e);
}
function N_() {
  return Da(et);
}
function bs(e) {
  var t, r = e._a;
  return r && Te(e).overflow === -2 && (t = r[lr] < 0 || r[lr] > 11 ? lr : r[Gt] < 1 || r[Gt] > ps(r[ft], r[lr]) ? Gt : r[st] < 0 || r[st] > 24 || r[st] === 24 && (r[Yt] !== 0 || r[ur] !== 0 || r[Fr] !== 0) ? st : r[Yt] < 0 || r[Yt] > 59 ? Yt : r[ur] < 0 || r[ur] > 59 ? ur : r[Fr] < 0 || r[Fr] > 999 ? Fr : -1, Te(e)._overflowDayOfYear && (t < ft || t > Gt) && (t = Gt), Te(e)._overflowWeeks && t === -1 && (t = Rg), Te(e)._overflowWeekday && t === -1 && (t = Fg), Te(e).overflow = t), e;
}
var L_ = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, M_ = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, A_ = /Z|[+-]\d\d(?::?\d\d)?/, Bn = [
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
], Hi = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], R_ = /^\/?Date\((-?\d+)/i, F_ = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Y_ = {
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
function Cu(e) {
  var t, r, n = e._i, i = L_.exec(n) || M_.exec(n), a, s, u, o, l = Bn.length, f = Hi.length;
  if (i) {
    for (Te(e).iso = !0, t = 0, r = l; t < r; t++)
      if (Bn[t][1].exec(i[1])) {
        s = Bn[t][0], a = Bn[t][2] !== !1;
        break;
      }
    if (s == null) {
      e._isValid = !1;
      return;
    }
    if (i[3]) {
      for (t = 0, r = f; t < r; t++)
        if (Hi[t][1].exec(i[3])) {
          u = (i[2] || " ") + Hi[t][0];
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
      if (A_.exec(i[4]))
        o = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = s + (u || "") + (o || ""), ks(e);
  } else
    e._isValid = !1;
}
function B_(e, t, r, n, i, a) {
  var s = [
    U_(e),
    yu.indexOf(t),
    parseInt(r, 10),
    parseInt(n, 10),
    parseInt(i, 10)
  ];
  return a && s.push(parseInt(a, 10)), s;
}
function U_(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function W_(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function z_(e, t, r) {
  if (e) {
    var n = Su.indexOf(e), i = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== i)
      return Te(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function V_(e, t, r) {
  if (e)
    return Y_[e];
  if (t)
    return 0;
  var n = parseInt(r, 10), i = n % 100, a = (n - i) / 100;
  return a * 60 + i;
}
function Du(e) {
  var t = F_.exec(W_(e._i)), r;
  if (t) {
    if (r = B_(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !z_(t[1], r, e))
      return;
    e._a = r, e._tzm = V_(t[8], t[9], t[10]), e._d = xn.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Te(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function H_(e) {
  var t = R_.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Cu(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Du(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : ee.createFromInputFallback(e);
}
ee.createFromInputFallback = At(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function $r(e, t, r) {
  return e ?? t ?? r;
}
function j_(e) {
  var t = new Date(ee.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function ws(e) {
  var t, r, n = [], i, a, s;
  if (!e._d) {
    for (i = j_(e), e._w && e._a[Gt] == null && e._a[lr] == null && q_(e), e._dayOfYear != null && (s = $r(e._a[ft], i[ft]), (e._dayOfYear > _n(s) || e._dayOfYear === 0) && (Te(e)._overflowDayOfYear = !0), r = xn(s, 0, e._dayOfYear), e._a[lr] = r.getUTCMonth(), e._a[Gt] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = i[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[st] === 24 && e._a[Yt] === 0 && e._a[ur] === 0 && e._a[Fr] === 0 && (e._nextDay = !0, e._a[st] = 0), e._d = (e._useUTC ? xn : Zg).apply(
      null,
      n
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[st] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (Te(e).weekdayMismatch = !0);
  }
}
function q_(e) {
  var t, r, n, i, a, s, u, o, l;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, s = 4, r = $r(
    t.GG,
    e._a[ft],
    Sn($e(), 1, 4).year
  ), n = $r(t.W, 1), i = $r(t.E, 1), (i < 1 || i > 7) && (o = !0)) : (a = e._locale._week.dow, s = e._locale._week.doy, l = Sn($e(), a, s), r = $r(t.gg, e._a[ft], l.year), n = $r(t.w, l.week), t.d != null ? (i = t.d, (i < 0 || i > 6) && (o = !0)) : t.e != null ? (i = t.e + a, (t.e < 0 || t.e > 6) && (o = !0)) : i = a), n < 1 || n > fr(r, a, s) ? Te(e)._overflowWeeks = !0 : o != null ? Te(e)._overflowWeekday = !0 : (u = xu(r, n, i, a, s), e._a[ft] = u.year, e._dayOfYear = u.dayOfYear);
}
ee.ISO_8601 = function() {
};
ee.RFC_2822 = function() {
};
function ks(e) {
  if (e._f === ee.ISO_8601) {
    Cu(e);
    return;
  }
  if (e._f === ee.RFC_2822) {
    Du(e);
    return;
  }
  e._a = [], Te(e).empty = !0;
  var t = "" + e._i, r, n, i, a, s, u = t.length, o = 0, l, f;
  for (i = du(e._f, e._locale).match(cs) || [], f = i.length, r = 0; r < f; r++)
    a = i[r], n = (t.match(Lg(a, e)) || [])[0], n && (s = t.substr(0, t.indexOf(n)), s.length > 0 && Te(e).unusedInput.push(s), t = t.slice(
      t.indexOf(n) + n.length
    ), o += n.length), Zr[a] ? (n ? Te(e).empty = !1 : Te(e).unusedTokens.push(a), Ag(a, n, e)) : e._strict && !n && Te(e).unusedTokens.push(a);
  Te(e).charsLeftOver = u - o, t.length > 0 && Te(e).unusedInput.push(t), e._a[st] <= 12 && Te(e).bigHour === !0 && e._a[st] > 0 && (Te(e).bigHour = void 0), Te(e).parsedDateParts = e._a.slice(0), Te(e).meridiem = e._meridiem, e._a[st] = G_(
    e._locale,
    e._a[st],
    e._meridiem
  ), l = Te(e).era, l !== null && (e._a[ft] = e._locale.erasConvertYear(l, e._a[ft])), ws(e), bs(e);
}
function G_(e, t, r) {
  var n;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (n = e.isPM(r), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function $_(e) {
  var t, r, n, i, a, s, u = !1, o = e._f.length;
  if (o === 0) {
    Te(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (i = 0; i < o; i++)
    a = 0, s = !1, t = ls({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[i], ks(t), os(t) && (s = !0), a += Te(t).charsLeftOver, a += Te(t).unusedTokens.length * 10, Te(t).score = a, u ? a < n && (n = a, r = t) : (n == null || a < n || s) && (n = a, r = t, s && (u = !0));
  wr(e, r || t);
}
function K_(e) {
  if (!e._d) {
    var t = ds(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = lu(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), ws(e);
  }
}
function X_(e) {
  var t = new Dn(bs(Iu(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Iu(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || gr(e._l), t === null || r === void 0 && t === "" ? fi({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Ut(t) ? new Dn(bs(t)) : (Cn(t) ? e._d = t : Bt(r) ? $_(e) : r ? ks(e) : Q_(e), os(e) || (e._d = null), e));
}
function Q_(e) {
  var t = e._i;
  wt(t) ? e._d = new Date(ee.now()) : Cn(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? H_(e) : Bt(t) ? (e._a = lu(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), ws(e)) : Yr(t) ? K_(e) : mr(t) ? e._d = new Date(t) : ee.createFromInputFallback(e);
}
function Pu(e, t, r, n, i) {
  var a = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (r === !0 || r === !1) && (n = r, r = void 0), (Yr(e) && ss(e) || Bt(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = i, a._l = r, a._i = e, a._f = t, a._strict = n, X_(a);
}
function $e(e, t, r, n) {
  return Pu(e, t, r, n, !1);
}
var Z_ = At(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = $e.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : fi();
  }
), J_ = At(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = $e.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : fi();
  }
);
function Nu(e, t) {
  var r, n;
  if (t.length === 1 && Bt(t[0]) && (t = t[0]), !t.length)
    return $e();
  for (r = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
  return r;
}
function ey() {
  var e = [].slice.call(arguments, 0);
  return Nu("isBefore", e);
}
function ty() {
  var e = [].slice.call(arguments, 0);
  return Nu("isAfter", e);
}
var ry = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, pn = [
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
function ny(e) {
  var t, r = !1, n, i = pn.length;
  for (t in e)
    if (Me(e, t) && !(it.call(pn, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < i; ++n)
    if (e[pn[n]]) {
      if (r)
        return !1;
      parseFloat(e[pn[n]]) !== De(e[pn[n]]) && (r = !0);
    }
  return !0;
}
function iy() {
  return this._isValid;
}
function ay() {
  return zt(NaN);
}
function bi(e) {
  var t = ds(e), r = t.year || 0, n = t.quarter || 0, i = t.month || 0, a = t.week || t.isoWeek || 0, s = t.day || 0, u = t.hour || 0, o = t.minute || 0, l = t.second || 0, f = t.millisecond || 0;
  this._isValid = ny(t), this._milliseconds = +f + l * 1e3 + // 1000
  o * 6e4 + // 1000 * 60
  u * 1e3 * 60 * 60, this._days = +s + a * 7, this._months = +i + n * 3 + r * 12, this._data = {}, this._locale = gr(), this._bubble();
}
function zn(e) {
  return e instanceof bi;
}
function Pa(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function sy(e, t, r) {
  var n = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), a = 0, s;
  for (s = 0; s < n; s++)
    (r && e[s] !== t[s] || !r && De(e[s]) !== De(t[s])) && a++;
  return a + i;
}
function Lu(e, t) {
  me(e, 0, 0, function() {
    var r = this.utcOffset(), n = "+";
    return r < 0 && (r = -r, n = "-"), n + Kt(~~(r / 60), 2) + t + Kt(~~r % 60, 2);
  });
}
Lu("Z", ":");
Lu("ZZ", "");
ae("Z", _i);
ae("ZZ", _i);
Be(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = xs(_i, e);
});
var oy = /([\+\-]|\d\d)/gi;
function xs(e, t) {
  var r = (t || "").match(e), n, i, a;
  return r === null ? null : (n = r[r.length - 1] || [], i = (n + "").match(oy) || ["-", 0, 0], a = +(i[1] * 60) + De(i[2]), a === 0 ? 0 : i[0] === "+" ? a : -a);
}
function Ss(e, t) {
  var r, n;
  return t._isUTC ? (r = t.clone(), n = (Ut(e) || Cn(e) ? e.valueOf() : $e(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + n), ee.updateOffset(r, !1), r) : $e(e).local();
}
function Na(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
ee.updateOffset = function() {
};
function ly(e, t, r) {
  var n = this._offset || 0, i;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = xs(_i, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (i = Na(this)), this._offset = e, this._isUTC = !0, i != null && this.add(i, "m"), n !== e && (!t || this._changeInProgress ? Ru(
      this,
      zt(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, ee.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : Na(this);
}
function uy(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function cy(e) {
  return this.utcOffset(0, e);
}
function dy(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Na(this), "m")), this;
}
function fy() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = xs(Pg, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function hy(e) {
  return this.isValid() ? (e = e ? $e(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function my() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function py() {
  if (!wt(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return ls(e, this), e = Iu(e), e._a ? (t = e._isUTC ? Qt(e._a) : $e(e._a), this._isDSTShifted = this.isValid() && sy(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function gy() {
  return this.isValid() ? !this._isUTC : !1;
}
function _y() {
  return this.isValid() ? this._isUTC : !1;
}
function Mu() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var yy = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, vy = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function zt(e, t) {
  var r = e, n = null, i, a, s;
  return zn(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : mr(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (n = yy.exec(e)) ? (i = n[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: De(n[Gt]) * i,
    h: De(n[st]) * i,
    m: De(n[Yt]) * i,
    s: De(n[ur]) * i,
    ms: De(Pa(n[Fr] * 1e3)) * i
    // the millisecond decimal point is included in the match
  }) : (n = vy.exec(e)) ? (i = n[1] === "-" ? -1 : 1, r = {
    y: Ar(n[2], i),
    M: Ar(n[3], i),
    w: Ar(n[4], i),
    d: Ar(n[5], i),
    h: Ar(n[6], i),
    m: Ar(n[7], i),
    s: Ar(n[8], i)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (s = by(
    $e(r.from),
    $e(r.to)
  ), r = {}, r.ms = s.milliseconds, r.M = s.months), a = new bi(r), zn(e) && Me(e, "_locale") && (a._locale = e._locale), zn(e) && Me(e, "_isValid") && (a._isValid = e._isValid), a;
}
zt.fn = bi.prototype;
zt.invalid = ay;
function Ar(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function Eo(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function by(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = Ss(t, e), e.isBefore(t) ? r = Eo(e, t) : (r = Eo(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function Au(e, t) {
  return function(r, n) {
    var i, a;
    return n !== null && !isNaN(+n) && (cu(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = r, r = n, n = a), i = zt(r, n), Ru(this, i, e), this;
  };
}
function Ru(e, t, r, n) {
  var i = t._milliseconds, a = Pa(t._days), s = Pa(t._months);
  e.isValid() && (n = n ?? !0, s && bu(e, kn(e, "Month") + s * r), a && _u(e, "Date", kn(e, "Date") + a * r), i && e._d.setTime(e._d.valueOf() + i * r), n && ee.updateOffset(e, a || s));
}
var wy = Au(1, "add"), ky = Au(-1, "subtract");
function Fu(e) {
  return typeof e == "string" || e instanceof String;
}
function xy(e) {
  return Ut(e) || Cn(e) || Fu(e) || mr(e) || Ty(e) || Sy(e) || e === null || e === void 0;
}
function Sy(e) {
  var t = Yr(e) && !ss(e), r = !1, n = [
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
function Ty(e) {
  var t = Bt(e), r = !1;
  return t && (r = e.filter(function(n) {
    return !mr(n) && Fu(e);
  }).length === 0), t && r;
}
function Oy(e) {
  var t = Yr(e) && !ss(e), r = !1, n = [
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
function Ey(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function Cy(e, t) {
  arguments.length === 1 && (arguments[0] ? xy(arguments[0]) ? (e = arguments[0], t = void 0) : Oy(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || $e(), n = Ss(r, this).startOf("day"), i = ee.calendarFormat(this, n) || "sameElse", a = t && (Zt(t[i]) ? t[i].call(this, r) : t[i]);
  return this.format(
    a || this.localeData().calendar(i, this, $e(r))
  );
}
function Dy() {
  return new Dn(this);
}
function Iy(e, t) {
  var r = Ut(e) ? e : $e(e);
  return this.isValid() && r.isValid() ? (t = Rt(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Py(e, t) {
  var r = Ut(e) ? e : $e(e);
  return this.isValid() && r.isValid() ? (t = Rt(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function Ny(e, t, r, n) {
  var i = Ut(e) ? e : $e(e), a = Ut(t) ? t : $e(t);
  return this.isValid() && i.isValid() && a.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(i, r) : !this.isBefore(i, r)) && (n[1] === ")" ? this.isBefore(a, r) : !this.isAfter(a, r))) : !1;
}
function Ly(e, t) {
  var r = Ut(e) ? e : $e(e), n;
  return this.isValid() && r.isValid() ? (t = Rt(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function My(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Ay(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Ry(e, t, r) {
  var n, i, a;
  if (!this.isValid())
    return NaN;
  if (n = Ss(e, this), !n.isValid())
    return NaN;
  switch (i = (n.utcOffset() - this.utcOffset()) * 6e4, t = Rt(t), t) {
    case "year":
      a = Vn(this, n) / 12;
      break;
    case "month":
      a = Vn(this, n);
      break;
    case "quarter":
      a = Vn(this, n) / 3;
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
  return r ? a : Nt(a);
}
function Vn(e, t) {
  if (e.date() < t.date())
    return -Vn(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(r, "months"), i, a;
  return t - n < 0 ? (i = e.clone().add(r - 1, "months"), a = (t - n) / (n - i)) : (i = e.clone().add(r + 1, "months"), a = (t - n) / (i - n)), -(r + a) || 0;
}
ee.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
ee.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Fy() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Yy(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? Wn(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Zt(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Wn(r, "Z")) : Wn(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function By() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, n, i, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(r + n + i + a);
}
function Uy(e) {
  e || (e = this.isUtc() ? ee.defaultFormatUtc : ee.defaultFormat);
  var t = Wn(this, e);
  return this.localeData().postformat(t);
}
function Wy(e, t) {
  return this.isValid() && (Ut(e) && e.isValid() || $e(e).isValid()) ? zt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function zy(e) {
  return this.from($e(), e);
}
function Vy(e, t) {
  return this.isValid() && (Ut(e) && e.isValid() || $e(e).isValid()) ? zt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Hy(e) {
  return this.to($e(), e);
}
function Yu(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = gr(e), t != null && (this._locale = t), this);
}
var Bu = At(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Uu() {
  return this._locale;
}
var Qn = 1e3, Jr = 60 * Qn, Zn = 60 * Jr, Wu = (365 * 400 + 97) * 24 * Zn;
function en(e, t) {
  return (e % t + t) % t;
}
function zu(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - Wu : new Date(e, t, r).valueOf();
}
function Vu(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Wu : Date.UTC(e, t, r);
}
function jy(e) {
  var t, r;
  if (e = Rt(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? Vu : zu, e) {
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
      t = this._d.valueOf(), t -= en(
        t + (this._isUTC ? 0 : this.utcOffset() * Jr),
        Zn
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= en(t, Jr);
      break;
    case "second":
      t = this._d.valueOf(), t -= en(t, Qn);
      break;
  }
  return this._d.setTime(t), ee.updateOffset(this, !0), this;
}
function qy(e) {
  var t, r;
  if (e = Rt(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? Vu : zu, e) {
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
      t = this._d.valueOf(), t += Zn - en(
        t + (this._isUTC ? 0 : this.utcOffset() * Jr),
        Zn
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Jr - en(t, Jr) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Qn - en(t, Qn) - 1;
      break;
  }
  return this._d.setTime(t), ee.updateOffset(this, !0), this;
}
function Gy() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function $y() {
  return Math.floor(this.valueOf() / 1e3);
}
function Ky() {
  return new Date(this.valueOf());
}
function Xy() {
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
function Qy() {
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
function Zy() {
  return this.isValid() ? this.toISOString() : null;
}
function Jy() {
  return os(this);
}
function ev() {
  return wr({}, Te(this));
}
function tv() {
  return Te(this).overflow;
}
function rv() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
me("N", 0, 0, "eraAbbr");
me("NN", 0, 0, "eraAbbr");
me("NNN", 0, 0, "eraAbbr");
me("NNNN", 0, 0, "eraName");
me("NNNNN", 0, 0, "eraNarrow");
me("y", ["y", 1], "yo", "eraYear");
me("y", ["yy", 2], 0, "eraYear");
me("y", ["yyy", 3], 0, "eraYear");
me("y", ["yyyy", 4], 0, "eraYear");
ae("N", Ts);
ae("NN", Ts);
ae("NNN", Ts);
ae("NNNN", hv);
ae("NNNNN", mv);
Be(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, n) {
    var i = r._locale.erasParse(e, n, r._strict);
    i ? Te(r).era = i : Te(r).invalidEra = e;
  }
);
ae("y", on);
ae("yy", on);
ae("yyy", on);
ae("yyyy", on);
ae("yo", pv);
Be(["y", "yy", "yyy", "yyyy"], ft);
Be(["yo"], function(e, t, r, n) {
  var i;
  r._locale._eraYearOrdinalRegex && (i = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[ft] = r._locale.eraYearOrdinalParse(e, i) : t[ft] = parseInt(e, 10);
});
function nv(e, t) {
  var r, n, i, a = this._eras || gr("en")._eras;
  for (r = 0, n = a.length; r < n; ++r) {
    switch (typeof a[r].since) {
      case "string":
        i = ee(a[r].since).startOf("day"), a[r].since = i.valueOf();
        break;
    }
    switch (typeof a[r].until) {
      case "undefined":
        a[r].until = 1 / 0;
        break;
      case "string":
        i = ee(a[r].until).startOf("day").valueOf(), a[r].until = i.valueOf();
        break;
    }
  }
  return a;
}
function iv(e, t, r) {
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
function av(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? ee(e.since).year() : ee(e.since).year() + (t - e.offset) * r;
}
function sv() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].name;
  return "";
}
function ov() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].narrow;
  return "";
}
function lv() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].abbr;
  return "";
}
function uv() {
  var e, t, r, n, i = this.localeData().eras();
  for (e = 0, t = i.length; e < t; ++e)
    if (r = i[e].since <= i[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), i[e].since <= n && n <= i[e].until || i[e].until <= n && n <= i[e].since)
      return (this.year() - ee(i[e].since).year()) * r + i[e].offset;
  return this.year();
}
function cv(e) {
  return Me(this, "_erasNameRegex") || Os.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function dv(e) {
  return Me(this, "_erasAbbrRegex") || Os.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function fv(e) {
  return Me(this, "_erasNarrowRegex") || Os.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Ts(e, t) {
  return t.erasAbbrRegex(e);
}
function hv(e, t) {
  return t.erasNameRegex(e);
}
function mv(e, t) {
  return t.erasNarrowRegex(e);
}
function pv(e, t) {
  return t._eraYearOrdinalRegex || on;
}
function Os() {
  var e = [], t = [], r = [], n = [], i, a, s, u, o, l = this.eras();
  for (i = 0, a = l.length; i < a; ++i)
    s = dr(l[i].name), u = dr(l[i].abbr), o = dr(l[i].narrow), t.push(s), e.push(u), r.push(o), n.push(s), n.push(u), n.push(o);
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
me(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
me(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function wi(e, t) {
  me(0, [e, e.length], 0, t);
}
wi("gggg", "weekYear");
wi("ggggg", "weekYear");
wi("GGGG", "isoWeekYear");
wi("GGGGG", "isoWeekYear");
ae("G", gi);
ae("g", gi);
ae("GG", Ke, Dt);
ae("gg", Ke, Dt);
ae("GGGG", hs, fs);
ae("gggg", hs, fs);
ae("GGGGG", pi, hi);
ae("ggggg", pi, hi);
Pn(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, n) {
    t[n.substr(0, 2)] = De(e);
  }
);
Pn(["gg", "GG"], function(e, t, r, n) {
  t[n] = ee.parseTwoDigitYear(e);
});
function gv(e) {
  return Hu.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function _v(e) {
  return Hu.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function yv() {
  return fr(this.year(), 1, 4);
}
function vv() {
  return fr(this.isoWeekYear(), 1, 4);
}
function bv() {
  var e = this.localeData()._week;
  return fr(this.year(), e.dow, e.doy);
}
function wv() {
  var e = this.localeData()._week;
  return fr(this.weekYear(), e.dow, e.doy);
}
function Hu(e, t, r, n, i) {
  var a;
  return e == null ? Sn(this, n, i).year : (a = fr(e, n, i), t > a && (t = a), kv.call(this, e, t, r, n, i));
}
function kv(e, t, r, n, i) {
  var a = xu(e, t, r, n, i), s = xn(a.year, 0, a.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
}
me("Q", 0, "Qo", "quarter");
ae("Q", fu);
Be("Q", function(e, t) {
  t[lr] = (De(e) - 1) * 3;
});
function xv(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
me("D", ["DD", 2], "Do", "date");
ae("D", Ke, ln);
ae("DD", Ke, Dt);
ae("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Be(["D", "DD"], Gt);
Be("Do", function(e, t) {
  t[Gt] = De(e.match(Ke)[0]);
});
var ju = un("Date", !0);
me("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
ae("DDD", mi);
ae("DDDD", hu);
Be(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = De(e);
});
function Sv(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
me("m", ["mm", 2], 0, "minute");
ae("m", Ke, ms);
ae("mm", Ke, Dt);
Be(["m", "mm"], Yt);
var Tv = un("Minutes", !1);
me("s", ["ss", 2], 0, "second");
ae("s", Ke, ms);
ae("ss", Ke, Dt);
Be(["s", "ss"], ur);
var Ov = un("Seconds", !1);
me("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
me(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
me(0, ["SSS", 3], 0, "millisecond");
me(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
me(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
me(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
me(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
me(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
me(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
ae("S", mi, fu);
ae("SS", mi, Dt);
ae("SSS", mi, hu);
var kr, qu;
for (kr = "SSSS"; kr.length <= 9; kr += "S")
  ae(kr, on);
function Ev(e, t) {
  t[Fr] = De(("0." + e) * 1e3);
}
for (kr = "S"; kr.length <= 9; kr += "S")
  Be(kr, Ev);
qu = un("Milliseconds", !1);
me("z", 0, 0, "zoneAbbr");
me("zz", 0, 0, "zoneName");
function Cv() {
  return this._isUTC ? "UTC" : "";
}
function Dv() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var K = Dn.prototype;
K.add = wy;
K.calendar = Cy;
K.clone = Dy;
K.diff = Ry;
K.endOf = qy;
K.format = Uy;
K.from = Wy;
K.fromNow = zy;
K.to = Vy;
K.toNow = Hy;
K.get = Bg;
K.invalidAt = tv;
K.isAfter = Iy;
K.isBefore = Py;
K.isBetween = Ny;
K.isSame = Ly;
K.isSameOrAfter = My;
K.isSameOrBefore = Ay;
K.isValid = Jy;
K.lang = Bu;
K.locale = Yu;
K.localeData = Uu;
K.max = J_;
K.min = Z_;
K.parsingFlags = ev;
K.set = Ug;
K.startOf = jy;
K.subtract = ky;
K.toArray = Xy;
K.toObject = Qy;
K.toDate = Ky;
K.toISOString = Yy;
K.inspect = By;
typeof Symbol < "u" && Symbol.for != null && (K[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
K.toJSON = Zy;
K.toString = Fy;
K.unix = $y;
K.valueOf = Gy;
K.creationData = rv;
K.eraName = sv;
K.eraNarrow = ov;
K.eraAbbr = lv;
K.eraYear = uv;
K.year = gu;
K.isLeapYear = Yg;
K.weekYear = gv;
K.isoWeekYear = _v;
K.quarter = K.quarters = xv;
K.month = wu;
K.daysInMonth = Kg;
K.week = K.weeks = n_;
K.isoWeek = K.isoWeeks = i_;
K.weeksInYear = bv;
K.weeksInWeekYear = wv;
K.isoWeeksInYear = yv;
K.isoWeeksInISOWeekYear = vv;
K.date = ju;
K.day = K.days = __;
K.weekday = y_;
K.isoWeekday = v_;
K.dayOfYear = Sv;
K.hour = K.hours = O_;
K.minute = K.minutes = Tv;
K.second = K.seconds = Ov;
K.millisecond = K.milliseconds = qu;
K.utcOffset = ly;
K.utc = cy;
K.local = dy;
K.parseZone = fy;
K.hasAlignedHourOffset = hy;
K.isDST = my;
K.isLocal = gy;
K.isUtcOffset = _y;
K.isUtc = Mu;
K.isUTC = Mu;
K.zoneAbbr = Cv;
K.zoneName = Dv;
K.dates = At(
  "dates accessor is deprecated. Use date instead.",
  ju
);
K.months = At(
  "months accessor is deprecated. Use month instead",
  wu
);
K.years = At(
  "years accessor is deprecated. Use year instead",
  gu
);
K.zone = At(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  uy
);
K.isDSTShifted = At(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  py
);
function Iv(e) {
  return $e(e * 1e3);
}
function Pv() {
  return $e.apply(null, arguments).parseZone();
}
function Gu(e) {
  return e;
}
var Ae = us.prototype;
Ae.calendar = gg;
Ae.longDateFormat = bg;
Ae.invalidDate = kg;
Ae.ordinal = Tg;
Ae.preparse = Gu;
Ae.postformat = Gu;
Ae.relativeTime = Eg;
Ae.pastFuture = Cg;
Ae.set = mg;
Ae.eras = nv;
Ae.erasParse = iv;
Ae.erasConvertYear = av;
Ae.erasAbbrRegex = dv;
Ae.erasNameRegex = cv;
Ae.erasNarrowRegex = fv;
Ae.months = jg;
Ae.monthsShort = qg;
Ae.monthsParse = $g;
Ae.monthsRegex = Qg;
Ae.monthsShortRegex = Xg;
Ae.week = Jg;
Ae.firstDayOfYear = r_;
Ae.firstDayOfWeek = t_;
Ae.weekdays = f_;
Ae.weekdaysMin = m_;
Ae.weekdaysShort = h_;
Ae.weekdaysParse = g_;
Ae.weekdaysRegex = b_;
Ae.weekdaysShortRegex = w_;
Ae.weekdaysMinRegex = k_;
Ae.isPM = S_;
Ae.meridiem = E_;
function Jn(e, t, r, n) {
  var i = gr(), a = Qt().set(n, t);
  return i[r](a, e);
}
function $u(e, t, r) {
  if (mr(e) && (t = e, e = void 0), e = e || "", t != null)
    return Jn(e, t, r, "month");
  var n, i = [];
  for (n = 0; n < 12; n++)
    i[n] = Jn(e, n, r, "month");
  return i;
}
function Es(e, t, r, n) {
  typeof e == "boolean" ? (mr(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, mr(t) && (r = t, t = void 0), t = t || "");
  var i = gr(), a = e ? i._week.dow : 0, s, u = [];
  if (r != null)
    return Jn(t, (r + a) % 7, n, "day");
  for (s = 0; s < 7; s++)
    u[s] = Jn(t, (s + a) % 7, n, "day");
  return u;
}
function Nv(e, t) {
  return $u(e, t, "months");
}
function Lv(e, t) {
  return $u(e, t, "monthsShort");
}
function Mv(e, t, r) {
  return Es(e, t, r, "weekdays");
}
function Av(e, t, r) {
  return Es(e, t, r, "weekdaysShort");
}
function Rv(e, t, r) {
  return Es(e, t, r, "weekdaysMin");
}
Sr("en", {
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
    var t = e % 10, r = De(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
ee.lang = At(
  "moment.lang is deprecated. Use moment.locale instead.",
  Sr
);
ee.langData = At(
  "moment.langData is deprecated. Use moment.localeData instead.",
  gr
);
var ar = Math.abs;
function Fv() {
  var e = this._data;
  return this._milliseconds = ar(this._milliseconds), this._days = ar(this._days), this._months = ar(this._months), e.milliseconds = ar(e.milliseconds), e.seconds = ar(e.seconds), e.minutes = ar(e.minutes), e.hours = ar(e.hours), e.months = ar(e.months), e.years = ar(e.years), this;
}
function Ku(e, t, r, n) {
  var i = zt(t, r);
  return e._milliseconds += n * i._milliseconds, e._days += n * i._days, e._months += n * i._months, e._bubble();
}
function Yv(e, t) {
  return Ku(this, e, t, 1);
}
function Bv(e, t) {
  return Ku(this, e, t, -1);
}
function Co(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Uv() {
  var e = this._milliseconds, t = this._days, r = this._months, n = this._data, i, a, s, u, o;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += Co(La(r) + t) * 864e5, t = 0, r = 0), n.milliseconds = e % 1e3, i = Nt(e / 1e3), n.seconds = i % 60, a = Nt(i / 60), n.minutes = a % 60, s = Nt(a / 60), n.hours = s % 24, t += Nt(s / 24), o = Nt(Xu(t)), r += o, t -= Co(La(o)), u = Nt(r / 12), r %= 12, n.days = t, n.months = r, n.years = u, this;
}
function Xu(e) {
  return e * 4800 / 146097;
}
function La(e) {
  return e * 146097 / 4800;
}
function Wv(e) {
  if (!this.isValid())
    return NaN;
  var t, r, n = this._milliseconds;
  if (e = Rt(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, r = this._months + Xu(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(La(this._months)), e) {
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
function _r(e) {
  return function() {
    return this.as(e);
  };
}
var Qu = _r("ms"), zv = _r("s"), Vv = _r("m"), Hv = _r("h"), jv = _r("d"), qv = _r("w"), Gv = _r("M"), $v = _r("Q"), Kv = _r("y"), Xv = Qu;
function Qv() {
  return zt(this);
}
function Zv(e) {
  return e = Rt(e), this.isValid() ? this[e + "s"]() : NaN;
}
function zr(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Jv = zr("milliseconds"), e1 = zr("seconds"), t1 = zr("minutes"), r1 = zr("hours"), n1 = zr("days"), i1 = zr("months"), a1 = zr("years");
function s1() {
  return Nt(this.days() / 7);
}
var sr = Math.round, Xr = {
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
function o1(e, t, r, n, i) {
  return i.relativeTime(t || 1, !!r, e, n);
}
function l1(e, t, r, n) {
  var i = zt(e).abs(), a = sr(i.as("s")), s = sr(i.as("m")), u = sr(i.as("h")), o = sr(i.as("d")), l = sr(i.as("M")), f = sr(i.as("w")), m = sr(i.as("y")), g = a <= r.ss && ["s", a] || a < r.s && ["ss", a] || s <= 1 && ["m"] || s < r.m && ["mm", s] || u <= 1 && ["h"] || u < r.h && ["hh", u] || o <= 1 && ["d"] || o < r.d && ["dd", o];
  return r.w != null && (g = g || f <= 1 && ["w"] || f < r.w && ["ww", f]), g = g || l <= 1 && ["M"] || l < r.M && ["MM", l] || m <= 1 && ["y"] || ["yy", m], g[2] = t, g[3] = +e > 0, g[4] = n, o1.apply(null, g);
}
function u1(e) {
  return e === void 0 ? sr : typeof e == "function" ? (sr = e, !0) : !1;
}
function c1(e, t) {
  return Xr[e] === void 0 ? !1 : t === void 0 ? Xr[e] : (Xr[e] = t, e === "s" && (Xr.ss = t - 1), !0);
}
function d1(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, n = Xr, i, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (n = Object.assign({}, Xr, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), i = this.localeData(), a = l1(this, !r, n, i), r && (a = i.pastFuture(+this, a)), i.postformat(a);
}
var ji = Math.abs;
function qr(e) {
  return (e > 0) - (e < 0) || +e;
}
function ki() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = ji(this._milliseconds) / 1e3, t = ji(this._days), r = ji(this._months), n, i, a, s, u = this.asSeconds(), o, l, f, m;
  return u ? (n = Nt(e / 60), i = Nt(n / 60), e %= 60, n %= 60, a = Nt(r / 12), r %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", o = u < 0 ? "-" : "", l = qr(this._months) !== qr(u) ? "-" : "", f = qr(this._days) !== qr(u) ? "-" : "", m = qr(this._milliseconds) !== qr(u) ? "-" : "", o + "P" + (a ? l + a + "Y" : "") + (r ? l + r + "M" : "") + (t ? f + t + "D" : "") + (i || n || e ? "T" : "") + (i ? m + i + "H" : "") + (n ? m + n + "M" : "") + (e ? m + s + "S" : "")) : "P0D";
}
var Le = bi.prototype;
Le.isValid = iy;
Le.abs = Fv;
Le.add = Yv;
Le.subtract = Bv;
Le.as = Wv;
Le.asMilliseconds = Qu;
Le.asSeconds = zv;
Le.asMinutes = Vv;
Le.asHours = Hv;
Le.asDays = jv;
Le.asWeeks = qv;
Le.asMonths = Gv;
Le.asQuarters = $v;
Le.asYears = Kv;
Le.valueOf = Xv;
Le._bubble = Uv;
Le.clone = Qv;
Le.get = Zv;
Le.milliseconds = Jv;
Le.seconds = e1;
Le.minutes = t1;
Le.hours = r1;
Le.days = n1;
Le.weeks = s1;
Le.months = i1;
Le.years = a1;
Le.humanize = d1;
Le.toISOString = ki;
Le.toString = ki;
Le.toJSON = ki;
Le.locale = Yu;
Le.localeData = Uu;
Le.toIsoString = At(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  ki
);
Le.lang = Bu;
me("X", 0, 0, "unix");
me("x", 0, 0, "valueOf");
ae("x", gi);
ae("X", Ng);
Be("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
Be("x", function(e, t, r) {
  r._d = new Date(De(e));
});
//! moment.js
ee.version = "2.30.1";
fg($e);
ee.fn = K;
ee.min = ey;
ee.max = ty;
ee.now = ry;
ee.utc = Qt;
ee.unix = Iv;
ee.months = Nv;
ee.isDate = Cn;
ee.locale = Sr;
ee.invalid = fi;
ee.duration = zt;
ee.isMoment = Ut;
ee.weekdays = Mv;
ee.parseZone = Pv;
ee.localeData = gr;
ee.isDuration = zn;
ee.monthsShort = Lv;
ee.weekdaysMin = Rv;
ee.defineLocale = vs;
ee.updateLocale = P_;
ee.locales = N_;
ee.weekdaysShort = Av;
ee.normalizeUnits = Rt;
ee.relativeTimeRounding = u1;
ee.relativeTimeThreshold = c1;
ee.calendarFormat = Ey;
ee.prototype = K;
ee.HTML5_FMT = {
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
const f1 = {
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
      actionIcons: Mm,
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
    this.initFormat(), ee.locale(Rr);
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
    PawIcon: Xt
  },
  setup() {
    const { t: e } = sn({
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
          return isNaN(e) || isNaN(parseFloat(e)) ? (this.setMessage(this.t("format.numberError"), !1), this.formatError = !0, e) : new Intl.NumberFormat(Rr, {
            minimumFractionDigits: this.minDecimals,
            maximumFractionDigits: this.maxDecimals
          }).format(e);
        case "card":
          return r.length < ko ? (this.setMessage(this.t("format.creditCardDigitError", { minDigits: `<b>${ko}</b>` }), !1), this.formatError = !0, e) : this.formatCard(r, t);
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
      return e.locale(Rr).format(t);
    },
    parseDate(e, t) {
      if (!e || !t)
        return e;
      let r = -1, n = null, i = null;
      for (const s in Oa)
        for (const u in Mr[t].formats) {
          if (Mr[t].formats[u] === "utc")
            continue;
          const o = ee(e, Mr[t].formats[u], Oa[s], !0), l = o.parsingFlags();
          if (o.isValid() && !l.weekdayMismatch)
            return this.formatDate(o, Mr[t].format, t);
          const f = l.unusedInput.length + l.unusedTokens.length;
          (f < r || r === -1) && (r = f, n = Mr[t].formats[u], i = l);
        }
      if (t === "datetime" && Mr[t].formats.includes("utc")) {
        const s = ee.utc(e, !0), u = s.parsingFlags();
        if (s.isValid())
          return this.formatDate(s, Mr[t].format, t);
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
      const r = dg(e)[0];
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
      const m = t.localPrefix && l[3] ? `${a.l}${l[3]}${a.r}` : "", g = t.areaCode ? l[2] : "";
      return `${t.areaCode ? i : ""}${g}${t.areaCode ? s : ""}${m}${l[4]}${s}${l[5]}${s}${u}${t.dash ? s : ""}${l[6]}${s}${u}${t.dash ? s : ""}${l[7]}`;
    }
  }
}, h1 = { class: "flex flex-col gap-1" }, m1 = {
  key: 0,
  class: "flex flex-row"
}, p1 = {
  key: 0,
  class: "prose-xs element-text text-xs uppercase text-gray-500 transition"
}, g1 = ["title"], _1 = ["textContent"], y1 = {
  key: 0,
  class: "mr-1 text-xs text-gray-400"
}, v1 = ["innerHTML"], b1 = ["innerHTML"];
function w1(e, t, r, n, i, a) {
  const s = qe("PawIcon");
  return P(), W("div", h1, [
    r.label || r.info ? (P(), W("div", m1, [
      r.label ? (P(), W("label", p1, pe(r.label), 1)) : Z("", !0),
      r.info ? (P(), W("span", {
        key: 1,
        class: "ml-auto prose-xs element-text uppercase text-gray-500 cursor-help transition",
        title: r.title
      }, pe(r.info), 9, g1)) : Z("", !0)
    ])) : Z("", !0),
    ne("div", {
      class: j(["flex flex-row items-center justify-between text-gray-800 dark:text-white transition", {
        "border-t border-gray-200 dark:border-gray-600": r.label
      }])
    }, [
      ne("div", {
        class: j(["flex items-center", i.formatting == "icon" && i.fieldValueIconPosition == "right" ? "flex-row-reverse" : ""])
      }, [
        i.formatting == "icon" && r.valueIcon ? (P(), Ee(s, {
          key: 0,
          class: j(r.valueColorClass ?? "text-gray-400"),
          size: "sm"
        }, {
          default: we(() => [
            xe(pe(a.valueIconName), 1)
          ]),
          _: 1
        }, 8, ["class"])) : Z("", !0),
        ne("span", {
          class: j(["my-1.5", {
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
        }, null, 10, _1)
      ], 2),
      ne("div", {
        class: j(["flex flex-row shrink-0 items-center gap-1 py-1 ml-3", {
          "self-start": r.unitPosition === "top",
          "self-center": r.unitPosition === "center",
          "self-end": r.unitPosition === "bottom"
        }])
      }, [
        i.unit.label ? (P(), W("span", y1, pe(i.unit.label), 1)) : Z("", !0),
        i.unit.icon ? (P(), Ee(s, {
          key: 1,
          size: "sm",
          class: "text-gray-400",
          outlined: i.unit.outlined === !0
        }, {
          default: we(() => [
            xe(pe(i.unit.icon), 1)
          ]),
          _: 1
        }, 8, ["outlined"])) : Z("", !0),
        r.copy && !i.formatError ? (P(), Ee(s, {
          key: 2,
          size: "sm",
          onClick: a.copyToClipboard,
          class: "text-gray-400 cursor-pointer"
        }, {
          default: we(() => [
            xe(" copy_all ")
          ]),
          _: 1
        }, 8, ["onClick"])) : Z("", !0),
        r.editAction && !i.formatError ? (P(), Ee(s, {
          key: 3,
          size: "sm",
          onClick: a.editTrigger,
          class: "text-gray-400 cursor-pointer"
        }, {
          default: we(() => [
            xe(" edit ")
          ]),
          _: 1
        }, 8, ["onClick"])) : Z("", !0),
        r.deleteAction && !i.formatError ? (P(), Ee(s, {
          key: 4,
          size: "sm",
          onClick: a.deleteTrigger,
          class: "text-gray-400 cursor-pointer"
        }, {
          default: we(() => [
            xe(" delete ")
          ]),
          _: 1
        }, 8, ["onClick"])) : Z("", !0),
        r.secret && !i.formatError ? (P(), Ee(s, {
          key: 5,
          size: "sm",
          class: "text-gray-400 cursor-pointer",
          onClick: a.toggleSecret
        }, {
          default: we(() => [
            xe(pe(i.show ? "visibility_off" : "visibility"), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : Z("", !0),
        r.action && !i.formatError ? (P(), Ee(s, {
          key: 6,
          size: "sm",
          onClick: a.click,
          class: "text-action-500 dark:text-action-400 hover:text-action-300 dark:hover:text-action-600 cursor-pointer transition"
        }, {
          default: we(() => [
            xe(pe(i.actionIcons[r.action]), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : Z("", !0)
      ], 2)
    ], 2),
    i.message && i.success ? (P(), W("div", {
      key: 1,
      class: "prose-xs element-text italic text-success-500 dark:text-success-400 transition",
      innerHTML: i.message
    }, null, 8, v1)) : Z("", !0),
    i.message && !i.success && !r.hideErrors ? (P(), W("div", {
      key: 2,
      class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition",
      innerHTML: i.message
    }, null, 8, b1)) : Z("", !0)
  ]);
}
const k1 = /* @__PURE__ */ ht(f1, [["render", w1]]), x1 = 8, S1 = 5, T1 = {
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
    PawCheckbox: ru,
    PawLazyField: k1,
    PawLink: nu,
    PawIcon: Xt,
    PawLabel: Gp,
    PawButton: oi,
    PawDropdown: zp,
    PawCrazyInput: Yp,
    PawRadio: iu,
    PawLoadingSpinner: tu
  },
  setup() {
    const { t: e } = sn({
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
      const r = this.informal ? S1 : x1;
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
        first: new Intl.NumberFormat(Rr).format(
          this.meta.firstItem
        ),
        last: new Intl.NumberFormat(Rr).format(
          this.meta.lastItem
        ),
        total: new Intl.NumberFormat(Rr).format(
          this.meta.totalRecords
        )
      }) : this.t("table.showRecords", {
        total: new Intl.NumberFormat(Rr).format(
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
}, O1 = {
  key: 0,
  class: "text-lg font-bold text-gray-500 dark:text-white whitespace-nowrap"
}, E1 = {
  key: 0,
  class: "md:flex flex-row gap-3 hidden"
}, C1 = { class: "flex flex-row transition-all" }, D1 = { class: "flex flex-row w-full" }, I1 = {
  key: 0,
  class: "flex justify-between w-full items-center sm:w-fit"
}, P1 = { class: "block sm:hidden" }, N1 = {
  key: 0,
  class: "text-lg font-bold text-gray-500 dark:text-white whitespace-nowrap"
}, L1 = /* @__PURE__ */ ne("col", { class: "w-8" }, null, -1), M1 = ["onClick"], A1 = {
  key: 2,
  class: "z-50"
}, R1 = /* @__PURE__ */ ne("div", { class: "w-8 h-2 bg-action-300 dark:bg-action-600 rounded-md" }, null, -1), F1 = {
  key: 4,
  class: "border-r border-t border-b border-gray-200 dark:border-gray-700 rounded-r-lg absolute top-2 right-4 bottom-2 -left-12 h-12 z-10 group-hover:shadow-card dark:group-hover:shadow-card-dark transition-all"
}, Y1 = {
  ref: "actionDropdown",
  class: "absolute max-w-xs w-fit min-w-[120px] rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 my-2 z-50 right-0 mr-6"
}, B1 = { class: "flex flex-col" }, U1 = ["onClick"], W1 = { class: "" }, z1 = { class: "flex flex-col text-left opacity-[.999] overflow-hidden rounded-md" }, V1 = ["onClick"], H1 = ["innerHTML"], j1 = { class: "flex flex-row items-center" };
function q1(e, t, r, n, i, a) {
  const s = qe("PawButton"), u = qe("PawDropdown"), o = qe("PawCrazyInput"), l = qe("PawLink"), f = qe("PawCheckbox"), m = qe("PawRadio"), g = qe("PawLazyField"), O = qe("PawLabel"), E = qe("PawLoadingSpinner"), h = qe("PawIcon");
  return P(), W("div", {
    class: j(["flex flex-col relative transition z-0", {
      "pointer-events-none": r.loading
    }])
  }, [
    ne("div", {
      class: j(["overflow-y-auto max-h-full transition", {
        "overflow-hidden": r.loading,
        "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-t border-l border-r rounded-t-xl translate-z-0": !r.informal,
        "px-4": r.informal
      }])
    }, [
      r.buttons.length || r.title || r.searchDropdownItems.length ? (P(), W("div", {
        key: 0,
        ref: "tableHeader",
        class: j([{
          "px-0 mb-3 sm:mb-5": r.informal,
          "px-6": !r.informal,
          "flex-wrap sm:!h-fit": r.searchDropdownItems.length > 0
        }, "sticky inset-0 flex flex-row justify-between items-center mt-3 h-fit sm:h-8 z-50 gap-3"])
      }, [
        ne("div", {
          class: j({ "hidden sm:block": r.searchDropdownItems.length })
        }, [
          r.title ? (P(), W("h1", O1, pe(r.title), 1)) : Z("", !0)
        ], 2),
        Object.keys(r.buttons).length <= 4 ? (P(), W("div", E1, [
          ne("div", C1, [
            cr(Je(s, {
              disabled: r.loading,
              outlined: "",
              size: "md",
              title: "Search",
              icon: "search",
              onClicked: t[0] || (t[0] = (c) => a.openSearchbar())
            }, null, 8, ["disabled"]), [
              [
                Qr,
                r.searchDropdownItems.length ? !1 : !i.searchbarOpened && r.searchbar
              ]
            ]),
            r.searchDropdownItems.length ? (P(), Ee(u, {
              key: 0,
              outlined: "",
              size: "md",
              icon: "expand_more",
              class: "h-full",
              textSlot: r.searchDropdownText,
              items: r.searchDropdownItems,
              buttonRoundedClasses: a.computedButtonRoundedClasses,
              onSelected: t[1] || (t[1] = (c) => this.$emit("searchDropdownItemClicked", c))
            }, null, 8, ["textSlot", "items", "buttonRoundedClasses"])) : Z("", !0),
            Je(o, {
              ref: "searchbar",
              value: i.searchValue,
              placeholder: "Search",
              title: "Extended information about this field",
              contextIcon: "search",
              class: j([
                "max-h-8",
                i.searchbarOpened && !r.searchDropdownItems.length ? "w-full" : r.searchDropdownItems.length ? "w-full rounded-l-none" : "w-0 overflow-hidden"
              ]),
              inputRoundedClasses: a.computedInputRoundedClasses,
              inputMinWidthClasses: "min-w-[30ch]",
              flexDir: a.computedFlexDirectionProperty,
              onTyped: t[2] || (t[2] = (c) => a.searchTyped(c)),
              onKeyDownEnter: t[3] || (t[3] = (c) => this.$emit("keyDownEnter"))
            }, {
              default: we(() => [
                xe(pe(i.searchValue), 1)
              ]),
              _: 1
            }, 8, ["value", "inputRoundedClasses", "flexDir", "class"])
          ]),
          (P(!0), W(nt, null, _t(r.buttons, (c) => (P(), Ee(s, {
            key: c.id,
            onClicked: (p) => this.$emit("buttonClicked", c.identifier),
            disabled: r.loading,
            outlined: c.outlined,
            size: "md",
            title: c.title,
            icon: c.icon
          }, {
            default: we(() => [
              xe(pe(c.textSlot), 1)
            ]),
            _: 2
          }, 1032, ["onClicked", "disabled", "outlined", "title", "icon"]))), 128))
        ])) : Z("", !0),
        ne("div", {
          class: j(["flex flex-row gap-3 md:hidden", [
            r.buttons.length >= 4 ? "!flex" : "",
            r.searchDropdownItems.length ? "flex-col-reverse items-end sm:flex-row w-full" : ""
          ]])
        }, [
          ne("div", D1, [
            cr(Je(s, {
              disabled: r.loading,
              outlined: "",
              size: "md",
              title: "Search",
              icon: "search",
              onClicked: t[4] || (t[4] = (c) => a.openSearchbar("mobile"))
            }, null, 8, ["disabled"]), [
              [
                Qr,
                r.searchDropdownItems.length ? !1 : !i.searchbarOpened && r.searchbar
              ]
            ]),
            r.searchDropdownItems.length ? (P(), Ee(u, {
              key: 0,
              outlined: "",
              size: "md",
              icon: "expand_more",
              class: "h-full",
              textSlot: r.searchDropdownText,
              items: r.searchDropdownItems,
              buttonRoundedClasses: a.computedButtonRoundedClasses,
              onSelected: t[5] || (t[5] = (c) => this.$emit("searchDropdownItemClicked", c))
            }, null, 8, ["textSlot", "items", "buttonRoundedClasses"])) : Z("", !0),
            Je(o, {
              ref: "searchbarMobile",
              value: i.searchValue,
              placeholder: "Search",
              title: "Extended information about this field",
              contextIcon: "search",
              class: j([
                "max-h-8",
                i.searchbarOpened && !r.searchDropdownItems.length ? "w-full" : r.searchDropdownItems.length ? "w-full rounded-l-none" : "w-0 overflow-hidden"
              ]),
              onTyped: t[6] || (t[6] = (c) => a.searchTyped(c)),
              inputRoundedClasses: a.computedInputRoundedClasses,
              fullwidth: !0,
              flexDir: a.computedFlexDirectionProperty,
              onKeyDownEnter: t[7] || (t[7] = (c) => this.$emit("keyDownEnter"))
            }, {
              default: we(() => [
                xe(pe(i.searchValue), 1)
              ]),
              _: 1
            }, 8, ["value", "class", "inputRoundedClasses", "flexDir"])
          ]),
          r.searchDropdownItems.length ? (P(), W("div", I1, [
            ne("div", P1, [
              r.title ? (P(), W("h1", N1, pe(r.title), 1)) : Z("", !0)
            ]),
            r.buttons && r.buttons.length ? (P(), Ee(u, {
              key: 0,
              class: j(i.searchbarOpened ? "hidden" : ""),
              outlined: "",
              size: "md",
              icon: "expand_more",
              textSlot: "Options",
              items: r.buttons,
              onSelected: t[8] || (t[8] = (c) => this.$emit("buttonClicked", c))
            }, null, 8, ["class", "items"])) : Z("", !0)
          ])) : r.buttons && r.buttons.length ? (P(), Ee(u, {
            key: 1,
            class: j(i.searchbarOpened ? "hidden" : ""),
            outlined: "",
            size: "md",
            icon: "expand_more",
            textSlot: "Options",
            items: r.buttons,
            onSelected: t[9] || (t[9] = (c) => this.$emit("buttonClicked", c))
          }, null, 8, ["class", "items"])) : Z("", !0)
        ], 2)
      ], 2)) : Z("", !0),
      (!r.data || Object.keys(r.data).length === 0 || Object.keys(r.data.items).length === 0) && !r.loading ? (P(), W("div", {
        key: 1,
        class: j(["flex items-center w-auto p-4 rounded-lg transition", [
          i.hasSlot ? "" : "hidden",
          r.itemsNotFoundHasBgColor ? `bg-${r.itemsNotFoundBgClass}-100 dark:bg-${r.itemsNotFoundBgClass}-800 text-${r.itemsNotFoundTextColorClass}-800 dark:text-${r.itemsNotFoundTextColorClass}-100` : "text-white",
          r.informal ? "mx-auto mb-3 sm:mb-5" : "m-6"
        ]])
      }, [
        Wt(e.$slots, "default")
      ], 2)) : (P(), W("table", {
        key: 2,
        ref: "table",
        class: j(["relative w-full formal-table fill-available", {
          "border-collapse": !r.informal,
          "border-separate table-informal": r.informal
        }])
      }, [
        ne("colgroup", null, [
          r.informal ? Z("", !0) : (P(), W("col", {
            key: 0,
            class: j({
              "w-8": a.activeHeadings.length > 0,
              "w-auto": a.activeHeadings.length === 0
            })
          }, null, 2)),
          (P(!0), W(nt, null, _t(a.activeHeadings, (c, p) => (P(), W("col", {
            key: p,
            class: j(["w-auto", {
              "min-w-[160px]": !r.informal,
              "min-w-[120px]": r.informal
            }])
          }, null, 2))), 128)),
          L1
        ]),
        ne("thead", null, [
          ne("tr", {
            class: j([{
              "bg-white dark:bg-gray-800 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition": !r.informal
            }, "sticky z-20 top-0 transition-all"])
          }, [
            r.informal ? Z("", !0) : (P(), W("th", {
              key: 0,
              class: j([{
                "pt-3 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full": !r.informal
              }, "sticky z-10 pl-6 pb-0 pr-3 left-0 text-left bg-white dark:bg-gray-800 transition-all"])
            }, null, 2)),
            (P(!0), W(nt, null, _t(a.activeHeadings, (c, p) => (P(), W("th", {
              key: c.id,
              class: j(["pb-0", [
                p > 0 ? "pl-7" : "",
                p === 0 && r.informal ? "pl-3" : "",
                c.align === "left" || !c.align ? "text-left" : "",
                c.align === "right" ? "text-right" : "",
                c.align === "center" ? "text-center" : "",
                r.informal ? `${r.bgLight} dark:${r.bgDark} transition` : "pt-3 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition-all"
              ]])
            }, [
              c.sort == "disabled" ? (P(), Ee(l, {
                key: 0,
                class: "inline-flex uppercase",
                size: "sm",
                align: "right",
                compact: ""
              }, {
                default: we(() => [
                  xe(pe(a.headingTitle(c.title || c.name)), 1)
                ]),
                _: 2
              }, 1024)) : (P(), Ee(l, {
                key: 1,
                class: "inline-flex uppercase",
                size: "sm",
                align: "right",
                compact: "",
                onClicked: (_) => a.sort(c),
                color: !c.title && !c.name ? "danger" : c.sort ? "action" : null,
                icon: c.sort === "asc" || !c.sort ? "keyboard_arrow_up" : "keyboard_arrow_down"
              }, {
                default: we(() => [
                  xe(pe(a.headingTitle(c.title || c.name)), 1)
                ]),
                _: 2
              }, 1032, ["onClicked", "color", "icon"]))
            ], 2))), 128)),
            ne("th", {
              class: j([[
                r.informal ? `pr-1 ${r.bgLight} dark:${r.bgDark} transition` : "pr-6 bg-white dark:bg-gray-800 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition-all"
              ], "sticky z-10 pl-3 pb-0 right-0 text-right transition-all"])
            }, [
              Je(l, {
                size: "md",
                icon: "playlist_add",
                class: j({
                  "ml-auto pt-3": !r.informal
                }),
                onClicked: t[10] || (t[10] = (c) => i.settingsOpened = !i.settingsOpened)
              }, null, 8, ["class"]),
              r.informal ? (P(), W("div", {
                key: 0,
                class: j([`${r.bgLight} dark:${r.bgDark}`, "absolute top-0 bottom-0 left-0 -right-4 -z-10 transition"])
              }, null, 2)) : Z("", !0)
            ], 2)
          ], 2)
        ]),
        ne("tbody", null, [
          (P(!0), W(nt, null, _t(a.currentItems, (c, p) => (P(), W("tr", {
            key: c.id,
            class: j(["relative transition-all group", {
              "border-b border-gray-200 dark:border-gray-700": p < a.currentItems.length - 1 && !r.informal,
              "animate-loading": r.loading,
              "h-8 hover:bg-gray-100 dark:hover:bg-gray-800": !r.informal,
              "h-12 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg": r.informal
            }])
          }, [
            r.informal ? Z("", !0) : (P(), W("td", {
              key: 0,
              class: j(["sticky z-10 pl-6 pr-3 left-0 bg-white dark:bg-gray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 overflow-hidden transition", {
                "py-0": !r.informal,
                "pt-2 pb-2": r.informal
              }])
            }, [
              r.selectionEnabled && r.multiselect ? (P(), Ee(f, {
                key: 0,
                size: "md",
                onChanged: (_) => a.select(_, c.id)
              }, null, 8, ["onChanged"])) : Z("", !0),
              r.selectionEnabled && !r.multiselect ? (P(), Ee(m, {
                key: 1,
                size: "lg",
                checked: c.selected,
                onChanged: (_) => a.selectRadio(_, c.id)
              }, null, 8, ["checked", "onChanged"])) : Z("", !0)
            ], 2)),
            (P(!0), W(nt, null, _t(a.activeHeadings, (_, k) => {
              var w;
              return P(), W("td", {
                key: _.name,
                class: j([[
                  k > 0 ? "pl-7" : "",
                  k === 0 && r.informal ? "pl-3 rounded-l-lg border-l overflow-hidden before:opacity-0 group-hover:before:opacity-100 before:content-[''] before:absolute before:mt-[-9.75px] before:left-0 before:right-0 before:h-12 before:overflow-clip group-hover:before:shadow-card dark:group-hover:before:shadow-card-dark before:rounded-lg before:transition" : "",
                  k === a.activeHeadings.length - 1 ? "pr-2" : "",
                  _.align === "left" || !_.align ? "text-left" : "",
                  _.align === "right" ? "text-right" : "",
                  _.align === "center" ? "text-center" : "",
                  r.informal ? "pt-2 pb-2 border-t border-b border-gray-200 dark:border-gray-700 transition" : "py-0",
                  r.isRowClickable && !_.action ? "cursor-pointer" : "",
                  c.rowLoading ? "pointer-events-none" : ""
                ], "align-middle"]),
                onClick: (T) => r.isRowClickable && !_.action ? a.click(c.id, "row") : ""
              }, [
                !r.loading && _.format !== "label" ? (P(), Ee(g, {
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
                  default: we(() => [
                    xe(pe(a.cellValue(
                      _.action === "link" ? c[_.name].text : _.format == "icon" ? c[_.name].value : c[_.name],
                      _.name
                    )), 1)
                  ]),
                  _: 2
                }, 1032, ["action", "copy", "link", "insecure", "secret", "format", "unit-label", "unit-icon", "unit-icon-outlined", "min-decimals", "max-decimals", "valueIcon", "valueIconPosition", "valueColorClass"])) : Z("", !0),
                !r.loading && _.format === "label" && ((w = c[_.name]) != null && w.text) ? (P(), Ee(O, {
                  key: 1,
                  class: "inline-flex my-0.75",
                  size: "sm",
                  color: c[_.name].color,
                  disabled: c[_.name].disabled
                }, {
                  default: we(() => [
                    xe(pe(a.cellValue(
                      c[_.name].text,
                      _.name
                    )), 1)
                  ]),
                  _: 2
                }, 1032, ["color", "disabled"])) : Z("", !0),
                r.loading ? (P(), W("div", {
                  key: 2,
                  class: j(["inline-block bg-gray-400 align-middle", {
                    "w-24 h-2 rounded-md": _.format !== "label",
                    "w-14 h-6 rounded-full": _.format === "label"
                  }])
                }, null, 2)) : Z("", !0)
              ], 10, M1);
            }), 128)),
            ne("td", {
              class: j(["z-10 pl-3 py-0 max-w-[120px] right-0 bg-white dark:bg-gray-800 transition-all", [
                r.loading ? "before:opacity-100" : "",
                r.informal ? "pr-3 h-12" : "pr-6 overflow-y-clip row-clip group-hover:bg-gray-100 dark:group-hover:bg-gray-800 before:content-[''] before:absolute before:-z-10 before:inset-0 before:opacity-0 group-hover:before:opacity-100 before:transition before:shadow-box dark:before:shadow-box-dark",
                r.informal && !r.bgDark && !r.bgLight ? "!bg-transparent" : "",
                a.hasStickyDetails() || !r.informal ? "sticky" : "relative border-gray-200 dark:border-gray-700 rounded-r-lg border-t border-r border-b"
              ]])
            }, [
              a.hasStickyDetails() || !r.informal ? (P(), W("div", {
                key: 0,
                class: j([
                  r.informal ? "flex items-center absolute -top-2  h-16 left-[-0.75px] -right-4 pr-4 overflow-hidden transition-all" : ""
                ])
              }, [
                (!r.informal && !r.loading || r.informal) && !r.actionDropdownItems.length && !c.rowLoading ? (P(), Ee(l, {
                  key: 0,
                  size: "sm",
                  icon: r.informal ? r.ctaIcon : "last_page",
                  outlined: r.informal,
                  color: "action",
                  disabled: r.ctaIconDisabled,
                  align: "right",
                  compact: "",
                  onClicked: (_) => a.click(c.id, "actionButton"),
                  class: j(["z-20", {
                    "ml-auto": !r.informal,
                    "justify-center absolute h-12 w-[49px] bg-white dark:bg-gray-800 border-r border-t border-b border-gray-200 dark:border-gray-700 rounded-r-lg transition": r.informal,
                    "cursor-auto": r.informal && !r.ctaIcon
                  }])
                }, {
                  default: we(() => [
                    xe(pe(a.detailsText), 1)
                  ]),
                  _: 2
                }, 1032, ["icon", "outlined", "disabled", "onClicked", "class"])) : c.rowLoading ? (P(), Ee(E, {
                  key: 1,
                  class: "mx-auto my-auto p-1 z-20",
                  loaderSize: "sm"
                })) : (P(), W("div", A1, [
                  Je(s, {
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
                  class: j(["flex flex-row items-center", { "p-3": r.informal }])
                }, [
                  r.informal ? (P(), Ee(h, {
                    key: 1,
                    size: "sm",
                    class: "text-action-300 dark:text-action-600",
                    outlined: ""
                  }, {
                    default: we(() => [
                      xe(" assignment ")
                    ]),
                    _: 1
                  })) : (P(), W(nt, { key: 0 }, [
                    R1,
                    Je(h, {
                      size: "sm",
                      class: "text-action-300 dark:text-action-600"
                    }, {
                      default: we(() => [
                        xe(" last_page ")
                      ]),
                      _: 1
                    })
                  ], 64))
                ], 2)) : Z("", !0),
                r.informal ? (P(), W("div", F1)) : Z("", !0),
                r.informal ? (P(), W("div", {
                  key: 5,
                  class: j(`${r.bgLight} dark:${r.bgDark} absolute top-2 bottom-2 left-0 right-0 z-0 transition`)
                }, null, 2)) : Z("", !0),
                r.informal ? (P(), W("div", {
                  key: 6,
                  class: j(["absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition", [
                    r.bgLight ? `${r.bgLight}` : "bg-white",
                    r.bgDark ? `dark:${r.bgDark}` : "dark:bg-gray-800"
                  ]])
                }, null, 2)) : Z("", !0)
              ], 2)) : Z("", !0)
            ], 2)
          ], 2))), 128))
        ])
      ], 2))
    ], 2),
    Je(Ra, {
      "enter-active-class": "transition ease-out duration-200",
      "enter-from-class": "transform opacity-0 scale-95",
      "enter-to-class": "transform opacity-100 scale-100",
      "leave-active-class": "transition ease-in duration-75",
      "leave-from-class": "transform opacity-100 scale-100",
      "leave-to-class": "transform opacity-0 scale-95",
      appear: ""
    }, {
      default: we(() => [
        cr(ne("div", Y1, [
          ne("div", B1, [
            (P(!0), W(nt, null, _t(r.actionDropdownItems, (c) => (P(), W("button", {
              onClick: (p) => a.dropdownActionSelected(c.identifier),
              key: c.identifier,
              class: "dark:hover:bg-gray-900 cursor-pointer first-of-type:rounded-tr-lg first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-bl-lg hover:bg-gray-100 w-full p-2 text-md dark:text-white text-gray-900 transition-all duration-300 items-center flex flex-row space-x-3 border-t dark:border-gray-700 first-of-type:border-t-0"
            }, [
              Je(h, {
                size: "sm",
                class: "text-gray-400"
              }, {
                default: we(() => [
                  xe(pe(c.icon), 1)
                ]),
                _: 2
              }, 1024),
              ne("span", W1, pe(c.textSlot), 1)
            ], 8, U1))), 128))
          ])
        ], 512), [
          [Qr, i.dropdownOpen]
        ])
      ]),
      _: 1
    }),
    ne("div", {
      class: j(["absolute max-w-[200px] z-30 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-card dark:shadow-card-dark transition-all before:absolute before:content-[''] before:w-4 before:h-4 before:-top-2 before:z-0 before:rotate-45 before:bg-gray-100 dark:before:bg-gray-700 before:border before:border-t-gray-200 before:border-l-gray-200 dark:before:border-t-gray-600 dark:before:border-l-gray-600 before:border-b-gray-100 before:border-r-gray-100 dark:before:border-b-gray-700 dark:before:border-r-gray-700 before:transition", {
        "opacity-0 invisible -translate-y-5": !i.settingsOpened || this.loading,
        "opacity-1 visible translate-y-0": i.settingsOpened && !this.loading,
        "top-32 sm:top-20 right-3 before:right-6": !r.informal,
        "top-36 sm:top-24 right-5 before:right-3": r.informal
      }])
    }, [
      ne("div", z1, [
        (P(!0), W(nt, null, _t(a.headings, (c, p) => (P(), W("div", {
          key: p,
          class: "flex flex-row justify-between gap-2 p-1 items-center hover:bg-white dark:hover:bg-gray-800 transition"
        }, [
          Je(h, {
            size: "sm",
            outlined: "",
            onClick: (_) => a.toggleHeading(c),
            class: j(["cursor-pointer transition", {
              "text-gray-400": c.visible,
              "text-gray-200 dark:text-gray-600": !c.visible
            }])
          }, {
            default: we(() => [
              xe(pe(c.visible ? "visibility" : "visibility_off"), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "class"]),
          ne("span", {
            class: j(["mr-auto prose-md element-text truncate font-normal cursor-pointer transition", {
              "text-gray-900 dark:text-white": c.visible,
              "text-gray-500 dark:text-gray-500": !c.visible
            }]),
            onClick: (_) => a.toggleHeading(c)
          }, pe(c.title), 11, V1),
          Je(h, {
            size: "sm",
            class: j(["cursor-grab transition", {
              "text-gray-400": c.visible,
              "text-gray-200 dark:text-gray-600": !c.visible
            }]),
            disabled: c.visible
          }, {
            default: we(() => [
              xe("drag_handle")
            ]),
            _: 2
          }, 1032, ["class", "disabled"])
        ]))), 128))
      ])
    ], 2),
    ne("div", {
      class: j(["flex flex-col xs:flex-row items-center justify-between prose-xs element-text text-gray-500 border-gray-200 dark:border-gray-700 transition", {
        "border-t": a.currentItems.length > 0 || r.informal,
        "bg-white dark:bg-gray-800 border-b border-l border-r rounded-b-xl translate-z-0": !r.informal,
        "px-6 py-3": !r.informal,
        "px-3 py-2 mx-4": r.informal
      }])
    }, [
      ne("div", {
        class: j({
          "italic text-danger-500 dark:text-danger-400 transition": i.error
        }),
        innerHTML: a.footerText
      }, null, 10, H1),
      ne("div", j1, [
        Je(l, {
          size: "sm",
          icon: "keyboard_arrow_up",
          class: "mr-2",
          onClicked: t[11] || (t[11] = (c) => a.paginate("prev")),
          disabled: a.meta.currentPage <= 1
        }, {
          default: we(() => [
            xe(pe(this.t("table.previous")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Je(l, {
          size: "sm",
          icon: "keyboard_arrow_down",
          onClicked: t[12] || (t[12] = (c) => a.paginate("next")),
          disabled: a.meta.currentPage >= a.meta.totalPages
        }, {
          default: we(() => [
            xe(pe(this.t("table.next")), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 2)
  ], 2);
}
const Yb = /* @__PURE__ */ ht(T1, [["render", q1]]);
const G1 = ["title"], $1 = ["checked", "disabled"], K1 = { class: "relative w-8 h-5 m-0.5 shrink-0 self-start bg-gray-400 peer-disabled:bg-gray-200 dark:peer-disabled:bg-gray-600 peer-checked:bg-action-500 dark:peer-checked:bg-action-500 rounded-full transition" }, X1 = {
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
}, Q1 = /* @__PURE__ */ Object.assign(X1, {
  setup(e) {
    const t = xt();
    return (r, n) => {
      var i;
      return P(), W("label", {
        class: j(["group inline-flex items-center", {
          "cursor-pointer": !e.disabled,
          "gap-1": e.size === "sm",
          "gap-2 p-1": e.size === "md",
          "gap-3 p-2": e.size === "lg"
        }]),
        title: e.title
      }, [
        ne("input", {
          ref_key: "toggle",
          ref: t,
          type: "checkbox",
          onChange: n[0] || (n[0] = (...a) => r.change && r.change(...a)),
          checked: e.checked,
          disabled: e.disabled,
          class: "peer hidden"
        }, null, 40, $1),
        ne("span", K1, [
          ne("span", {
            class: j(["block w-4 h-4 bg-white m-0.5 rounded-full shadow-box dark:shadow-box-dark transition", [
              r.value ? "translate-x-3" : "translate-x-0",
              (i = t.value) != null && i.disabled ? "dark:bg-gray-400" : ""
            ]])
          }, null, 2)
        ]),
        r.$slots.default ? (P(), W("span", {
          key: 0,
          class: j([
            "text-md transition",
            e.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"
          ])
        }, [
          Wt(r.$slots, "default", {}, void 0, !0)
        ], 2)) : Z("", !0)
      ], 10, G1);
    };
  }
}), Bb = /* @__PURE__ */ ht(Q1, [["__scopeId", "data-v-5cd34538"]]), Z1 = {
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
    PawIcon: Xt
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
}, J1 = ["title"];
function eb(e, t, r, n, i, a) {
  const s = qe("PawIcon");
  return P(), W("button", {
    class: j(["flex items-center group my-0 h-8 w-full prose-md element-text rounded-md transition", a.calcButton()]),
    title: r.title,
    onClick: t[0] || (t[0] = (...u) => a.click && a.click(...u))
  }, [
    r.icon ? (P(), Ee(s, {
      key: 0,
      size: r.size,
      outlined: r.outlined,
      class: j(["ml-0.75 mr-2 transition", a.calcIcon()])
    }, {
      default: we(() => [
        xe(pe(r.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : Z("", !0),
    ne("span", {
      class: j(["flex-grow text-left truncate", r.icon ? "" : "ml-3"])
    }, [
      Wt(e.$slots, "default")
    ], 2),
    Je(s, {
      size: "sm",
      class: j([
        "opacity-0 text-gray-400",
        r.disabled ? "" : "group-hover:opacity-100 group-focus:text-action-100 dark:group-focus:text-action-100 group-focus:opacity-100 group-active:text-action-100 dark:group-active:text-action-100 group-active:opacity-100"
      ])
    }, {
      default: we(() => [
        xe(" navigate_next ")
      ]),
      _: 1
    }, 8, ["class"])
  ], 10, J1);
}
const tb = /* @__PURE__ */ ht(Z1, [["render", eb]]), rb = {
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
    PawListItem: tb
  },
  methods: {
    click(e) {
      this.$emit("clicked", e);
    }
  }
};
function nb(e, t, r, n, i, a) {
  const s = qe("PawListItem");
  return !r.items || Object.keys(r.items).length === 0 ? (P(), W("div", {
    key: 0,
    class: j(["flex items-center w-full p-4 mb-8 bg-warning-100 dark:bg-warning-800 text-warning-800 dark:text-warning-100 rounded-lg transition", i.hasSlot ? "" : "hidden"])
  }, [
    Wt(e.$slots, "default")
  ], 2)) : (P(!0), W(nt, { key: 1 }, _t(r.items, (u, o) => (P(), W("div", {
    key: o,
    class: j(["py-1.5", {
      "border-t border-gray-200 dark:border-gray-700 transition": r.divider && o > 0
    }])
  }, [
    Je(s, {
      icon: u.icon ?? r.icon,
      size: u.size ?? r.size,
      title: u.title ?? r.title,
      outlined: u.outlined ?? r.outlined,
      disabled: u.disabled ?? r.disabled,
      onClicked: (l) => a.click(o)
    }, {
      default: we(() => [
        xe(pe(u.text), 1)
      ]),
      _: 2
    }, 1032, ["icon", "size", "title", "outlined", "disabled", "onClicked"])
  ], 2))), 128));
}
const Ub = /* @__PURE__ */ ht(rb, [["render", nb]]), ib = { class: "flex items-center gap-2 self-center p-3 rounded-xl bg-gray-900/60 backdrop-blur-sm dark:bg-gray-950/60 w-fit" }, Wb = {
  __name: "FloatingBar",
  props: {
    buttons: {
      type: Array,
      default: () => [],
      validator: (e) => e.every((t) => (typeof t.icon == "string" || t.icon === void 0) && typeof t.textSlot == "string" && typeof t.outlined == "boolean" && (typeof t.processing == "boolean" || t.processing === void 0) && (typeof t.loading == "boolean" || t.loading === void 0) && ["sm", "md", "lg"].includes(t.size) && typeof t.identifier == "string")
    },
    scrollGradient: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["clicked"],
  setup(e, { emit: t }) {
    const r = t, n = (i) => {
      r("clicked", i);
    };
    return (i, a) => (P(), W("div", {
      class: j([
        "fixed bottom-0 w-full left-0 right-0 py-4 z-50 grid place-items-center",
        e.scrollGradient ? "from-gray-100 dark:from-gray-900 to-transparent bg-gradient-to-t" : ""
      ])
    }, [
      ne("div", ib, [
        (P(!0), W(nt, null, _t(e.buttons, (s, u) => (P(), Ee(oi, {
          key: `button-${u}`,
          icon: s.icon,
          title: s.textSlot,
          outlined: s.outlined,
          loading: s.loading || !1,
          processing: s.processing || !1,
          size: s.size,
          onClicked: (o) => n(s.identifier)
        }, {
          default: we(() => [
            xe(pe(s.textSlot), 1)
          ]),
          _: 2
        }, 1032, ["icon", "title", "outlined", "loading", "processing", "size", "onClicked"]))), 128))
      ])
    ], 2));
  }
};
var Do = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}, ab = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.name = t, this.version = r, this.os = n, this.type = "browser";
    }
    return e;
  }()
), sb = (
  /** @class */
  function() {
    function e(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return e;
  }()
), ob = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this.name = t, this.version = r, this.os = n, this.bot = i, this.type = "bot-device";
    }
    return e;
  }()
), lb = (
  /** @class */
  function() {
    function e() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return e;
  }()
), ub = (
  /** @class */
  function() {
    function e() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return e;
  }()
), cb = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, db = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Io = 3, fb = [
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
  ["searchbot", cb]
], Po = [
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
function hb(e) {
  return e ? No(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new ub() : typeof navigator < "u" ? No(navigator.userAgent) : gb();
}
function mb(e) {
  return e !== "" && fb.reduce(function(t, r) {
    var n = r[0], i = r[1];
    if (t)
      return t;
    var a = i.exec(e);
    return !!a && [n, a];
  }, !1);
}
function No(e) {
  var t = mb(e);
  if (!t)
    return null;
  var r = t[0], n = t[1];
  if (r === "searchbot")
    return new lb();
  var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  i ? i.length < Io && (i = Do(Do([], i, !0), _b(Io - i.length), !0)) : i = [];
  var a = i.join("."), s = pb(e), u = db.exec(e);
  return u && u[1] ? new ob(r, a, s, u[1]) : new ab(r, a, s);
}
function pb(e) {
  for (var t = 0, r = Po.length; t < r; t++) {
    var n = Po[t], i = n[0], a = n[1], s = a.exec(e);
    if (s)
      return i;
  }
  return null;
}
function gb() {
  var e = typeof process < "u" && process.version;
  return e ? new sb(process.version.slice(1)) : null;
}
function _b(e) {
  for (var t = [], r = 0; r < e; r++)
    t.push("0");
  return t;
}
const yb = (e) => (od("data-v-ee12da86"), e = e(), ld(), e), vb = {
  key: 0,
  class: "flex flex-row"
}, bb = {
  key: 0,
  class: "max-w-[80px] h-3.5 mr-1 bg-gray-400 loading-bubble"
}, wb = { class: "flex flex-row items-center justify-between gap-3" }, kb = /* @__PURE__ */ yb(() => /* @__PURE__ */ ne("template", null, [
  /* @__PURE__ */ ne("div", { class: "flex flex-row items-center shrink-0 gap-3 w-full max-w-[52px] py-1" }, [
    /* @__PURE__ */ ne("span", { class: "bg-gray-400 loading-bubble max-w-[24px] w-full h-2" }),
    /* @__PURE__ */ ne("span", { class: "bg-gray-400 loading-bubble w-4 h-4" })
  ])
], -1)), xb = {
  key: 1,
  class: "ml-2 mt-1"
}, Sb = {
  key: 0,
  class: "max-w-[120px] h-2 bg-gray-400 mb-2 loading-bubble"
}, Tb = {
  key: 1,
  class: "max-w-[120px] h-2 bg-danger-500 dark:bg-danger-400 loading-bubble"
}, Ob = { class: "flex flex-row" }, Eb = ["readonly", "min", "max"], Cb = {
  key: 0,
  class: "ml-2"
}, Db = {
  key: 0,
  class: "prose-xs element-text italic text-gray-500 transition"
}, Ib = {
  key: 1,
  class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition"
}, Pb = {
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
    const r = t, n = e, i = hb(), a = xt(!1), s = xt(), u = xt(ee(n.inputValue).format("YYYY-MM-DD")), o = xt(ee(n.minDate).format("YYYY-MM-DD")), l = xt(ee(n.maxDate).format("YYYY-MM-DD"));
    function f() {
      const h = n.format ? n.format : "DD/MM/YYYY";
      r("changed", ee(u.value).format(h));
    }
    function m(h) {
      n.readonly || (a.value = !0, h.srcElement.nodeName !== "INPUT" && i.name !== "safari" && s.value.showPicker());
    }
    function g(h, c = () => {
    }, p = document.createElement(null), _ = "mouseup") {
      document.addEventListener(_, function k(w) {
        if (!(w.target instanceof Element))
          return document.removeEventListener(_, k), !1;
        h !== w.target && !Array.from(p).includes(w.target) && c(w) !== !1 && document.removeEventListener(_, k);
      });
    }
    function O() {
      let h = "";
      return h += n.readonly ? "" : "pr-0.75 border border-gray-200 dark:border-gray-600 rounded-md transition", h += " pl-1", h += a.value && !n.readonly ? " outline outline-4 outline-action-200 dark:outline-action-700" : "", h;
    }
    function E() {
      const h = ["max-w-[120px]", "max-w-[200px]", "max-w-xs"];
      return h[Math.floor(Math.random() * h.length)];
    }
    return (h, c) => (P(), W("div", {
      ref: (p) => {
        g(p, () => {
          a.value = !1;
        });
      },
      class: "flex flex-col relative gap-1"
    }, [
      e.loading ? (P(), W(nt, { key: 0 }, [
        e.label ? (P(), W("div", vb, [
          e.label ? (P(), W("label", bb)) : Z("", !0)
        ])) : Z("", !0),
        ne("div", wb, [
          ne("div", {
            class: j(["bg-gray-400 loading-bubble mr-auto h-8", [E()]])
          }, null, 2),
          kb
        ]),
        e.notification || e.error ? (P(), W("div", xb, [
          e.notification ? (P(), W("div", Sb)) : Z("", !0),
          e.error ? (P(), W("div", Tb)) : Z("", !0)
        ])) : Z("", !0)
      ], 64)) : (P(), W(nt, { key: 1 }, [
        ne("div", Ob, [
          ne("label", {
            onClick: m,
            class: "prose-xs element-text text-xs uppercase text-gray-500 cursor-pointer transition"
          }, pe(e.label), 1)
        ]),
        ne("div", {
          class: j([O(), "flex flex-row w-full items-center rounded-md transition px-0.75"])
        }, [
          cr(ne("input", {
            readonly: e.readonly,
            "onUpdate:modelValue": c[0] || (c[0] = (p) => u.value = p),
            onChange: c[1] || (c[1] = (p) => f()),
            onInput: c[2] || (c[2] = (p) => f()),
            min: o.value,
            max: l.value,
            ref_key: "inputRef",
            ref: s,
            onClick: c[3] || (c[3] = (p) => m(p)),
            class: "bg-transparent rounded-md input-reset text-gray-900 dark:text-white transition cursor-pointer py-1.5",
            type: "date",
            placeholder: "dd-mm-yyyy"
          }, null, 40, Eb), [
            [Ao, u.value]
          ]),
          e.readonly ? Z("", !0) : (P(), Ee(Xt, {
            key: 0,
            onClick: c[4] || (c[4] = (p) => m(p)),
            size: "sm",
            class: "text-gray-400 opacity-100 cursor-pointer transition"
          }, {
            default: we(() => [
              xe(" calendar_month ")
            ]),
            _: 1
          }))
        ], 2),
        e.notification || e.error ? (P(), W("div", Cb, [
          e.notification ? (P(), W("div", Db, pe(e.notification), 1)) : Z("", !0),
          e.error ? (P(), W("div", Ib, pe(e.error), 1)) : Z("", !0)
        ])) : Z("", !0)
      ], 64))
    ], 512));
  }
}, zb = /* @__PURE__ */ ht(Pb, [["__scopeId", "data-v-ee12da86"]]), gn = el(El), Nb = {
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
        gray: gn.theme.colors.gray,
        action: gn.theme.colors.action,
        success: gn.theme.colors.success,
        danger: gn.theme.colors.danger,
        warning: gn.theme.colors.warning
      }
    };
  }
}, Lb = { class: "text-xl mb-4 text-gray-900 dark:text-white transition" }, Mb = { class: "grow w-[14ch] font-mono text-xs text-gray-500" };
function Ab(e, t, r, n, i, a) {
  return P(), W("div", {
    class: j(["p-4 xs:p-8 rounded-3xl grid grid-cols-auto-fit gap-4 transition", `bg-${r.bgColor.color} dark:bg-${r.bgColorDark.color}`])
  }, [
    (P(!0), W(nt, null, _t(i.colors, (s, u) => (P(), W("div", { key: u }, [
      ne("h2", Lb, pe(u), 1),
      (P(!0), W(nt, null, _t(s, (o, l) => (P(), W("div", {
        key: l,
        class: "flex items-center gap-2 mb-3"
      }, [
        ne("div", {
          class: j(["flex-auto w-24 h-12 rounded-xl", [
            `bg-${u}-${l}`,
            `${u}-${l}` === r.bgColor.color ? `border border-${r.bgColor.border}` : "",
            `${u}-${l}` === r.bgColorDark.color ? `border border-${r.bgColorDark.border}` : ""
          ]])
        }, null, 2),
        ne("div", Mb, pe(l) + " (" + pe(o) + ")", 1)
      ]))), 128))
    ]))), 128))
  ], 2);
}
const Vb = /* @__PURE__ */ ht(Nb, [["render", Ab]]);
export {
  oi as PawButton,
  ru as PawCheckbox,
  np as PawChip,
  Vb as PawColorSwatches,
  Yp as PawCrazyInput,
  zb as PawDatePicker,
  zp as PawDropDown,
  Wb as PawFloatingBar,
  Xt as PawIcon,
  Gp as PawLabel,
  k1 as PawLazyField,
  nu as PawLink,
  Ub as PawList,
  tb as PawListItem,
  tu as PawLoadingSpinner,
  iu as PawRadio,
  Bb as PawSwitch,
  Yb as PawTable,
  Fb as PawTypography
};
