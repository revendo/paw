import { openBlock as m, createElementBlock as x, normalizeClass as D, renderSlot as He, resolveComponent as ue, createBlock as X, withCtx as H, createTextVNode as z, toDisplayString as V, createCommentVNode as N, createElementVNode as F, createVNode as ce, h as es, getCurrentInstance as Ur, inject as wi, onMounted as xi, onUnmounted as Si, shallowRef as Ei, ref as ye, computed as Je, onBeforeMount as Oi, watch as ya, Fragment as me, Text as Di, renderList as Ye, withDirectives as vt, vModelText as ts, vModelDynamic as Ci, vShow as _n, pushScopeId as Ti, popScopeId as Ni, Transition as ns } from "vue";
const Te = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Ii = {
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
function Mi(e, t, n, r, a, s) {
  return m(), x("span", {
    class: D(s.setClassNames())
  }, [
    He(e.$slots, "default")
  ], 2);
}
const et = /* @__PURE__ */ Te(Ii, [["render", Mi]]), Li = {
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
    PawIcon: et
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
}, Pi = ["title"], Ri = /* @__PURE__ */ F("div", { class: "h-1/3 w-10 bg-gray-500 rounded-full" }, null, -1), Yi = [
  Ri
], Ai = ["title"], Fi = { class: "truncate" };
function Wi(e, t, n, r, a, s) {
  const i = ue("PawIcon");
  return n.loading ? (m(), x("div", {
    key: 0,
    class: D(["flex items-center group max-w-fit my-0 transition", s.setClassNames()]),
    disabled: "",
    title: n.title
  }, Yi, 10, Pi)) : (m(), x("button", {
    key: 1,
    class: D(["flex items-center group max-w-full my-0 transition", s.setClassNames()]),
    title: n.title,
    onClick: t[0] || (t[0] = (...o) => s.click && s.click(...o))
  }, [
    n.icon ? (m(), X(i, {
      key: 0,
      size: n.size,
      outlined: n.outlined,
      class: D(["transition", s.setIconClassNames()])
    }, {
      default: H(() => [
        z(V(n.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : N("", !0),
    F("span", Fi, [
      He(e.$slots, "default")
    ])
  ], 10, Ai));
}
const Xn = /* @__PURE__ */ Te(Li, [["render", Wi]]), Vi = {
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
    PawIcon: et
  },
  methods: {
    change() {
      this.$emit("changed", this.value = !this.value);
    }
  }
}, Ui = ["title"], Bi = { class: "relative w-[18px] h-[18px] m-0.75 shrink-0 self-start pointer-events-none" }, Hi = ["checked", "disabled"], zi = { class: "absolute inset-0 block peer-checked:opacity-100 opacity-0 w-4 h-4 m-px bg-white dark:peer-disabled:bg-gray-500 text-action-500 dark:text-action-400 peer-disabled:text-gray-200 dark:peer-disabled:text-gray-600 overflow-hidden rounded-sm transition z-10" }, Gi = { class: "absolute inset-0 block group-hover:peer-checked:opacity-100 group-hover:peer-checked:peer-disabled:opacity-0 opacity-0 w-4 h-4 m-px bg-white overflow-hidden rounded-sm transition z-20" }, ji = /* @__PURE__ */ F("span", { class: "absolute inset-0 block w-[18px] h-[18px] border-2 border-gray-400 peer-checked:border-action-500 dark:peer-checked:border-action-400 peer-disabled:border-gray-200 dark:peer-disabled:border-gray-600 rounded-sm peer-disabled:cursor-default transition z-30" }, null, -1);
function Ki(e, t, n, r, a, s) {
  const i = ue("PawIcon");
  return m(), x("label", {
    class: D(["group inline-flex items-center", {
      "cursor-pointer": !n.disabled,
      "pointer-events-none": n.disabled,
      "gap-1": n.size === "sm",
      "gap-2 p-1": n.size === "md",
      "gap-3 p-2": n.size === "lg"
    }]),
    title: n.title
  }, [
    F("span", Bi, [
      F("input", {
        type: "checkbox",
        onChange: t[0] || (t[0] = (...o) => s.change && s.change(...o)),
        checked: n.checked,
        disabled: n.disabled,
        class: "peer hidden"
      }, null, 40, Hi),
      F("span", zi, [
        ce(i, {
          size: "md",
          class: "ml-[50%] mt-[50%] -translate-x-1/2 -translate-y-1/2"
        }, {
          default: H(() => [
            z(" check_box ")
          ]),
          _: 1
        })
      ]),
      F("span", Gi, [
        ce(i, {
          size: "md",
          class: "text-action-500 dark:text-action-400 ml-[50%] mt-[50%] -translate-x-1/2 -translate-y-1/2"
        }, {
          default: H(() => [
            z(" indeterminate_check_box ")
          ]),
          _: 1
        })
      ]),
      ji
    ]),
    e.$slots.default ? (m(), x("span", {
      key: 0,
      class: D(["text-md transition", n.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"])
    }, [
      He(e.$slots, "default")
    ], 2)) : N("", !0)
  ], 10, Ui);
}
const rs = /* @__PURE__ */ Te(Vi, [["render", Ki]]), Xi = {
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
    PawIcon: et
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
}, Zi = ["title"], qi = { class: "truncate" };
function Ji(e, t, n, r, a, s) {
  const i = ue("PawIcon");
  return m(), x("button", {
    class: D(["inline-flex items-center group my-0 max-w-full rounded-full overflow-hidden transition", s.setClassNames()]),
    title: n.title,
    onClick: t[0] || (t[0] = (...o) => s.click && s.click(...o))
  }, [
    n.icon ? (m(), X(i, {
      key: 0,
      size: n.size,
      outlined: n.outlined,
      class: D(["transition", s.setIconClassNames()])
    }, {
      default: H(() => [
        z(V(n.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : N("", !0),
    F("span", qi, [
      He(e.$slots, "default")
    ]),
    n.disabled ? N("", !0) : (m(), X(i, {
      key: 1,
      size: "sm",
      class: D(["transition", s.setCloseClassNames()])
    }, {
      default: H(() => [
        z("close")
      ]),
      _: 1
    }, 8, ["class"]))
  ], 10, Zi);
}
const Qi = /* @__PURE__ */ Te(Xi, [["render", Ji]]);
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const xt = typeof window < "u";
let Le, At;
if (process.env.NODE_ENV !== "production") {
  const e = xt && window.performance;
  e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (Le = (t) => e.mark(t), At = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const $i = /\{([0-9a-zA-Z]+)\}/g;
function Zn(e, ...t) {
  return t.length === 1 && ne(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace($i, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const el = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", mt = (e) => el ? Symbol(e) : e, tl = (e, t, n) => nl({ l: e, k: t, s: n }), nl = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), pe = (e) => typeof e == "number" && isFinite(e), rl = (e) => Hr(e) === "[object Date]", qt = (e) => Hr(e) === "[object RegExp]", qn = (e) => K(e) && Object.keys(e).length === 0;
function On(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const be = Object.assign;
let ba;
const yn = () => ba || (ba = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ka(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const al = Object.prototype.hasOwnProperty;
function Br(e, t) {
  return al.call(e, t);
}
const fe = Array.isArray, ge = (e) => typeof e == "function", A = (e) => typeof e == "string", re = (e) => typeof e == "boolean", ne = (e) => (
  // eslint-disable-line
  e !== null && typeof e == "object"
), as = Object.prototype.toString, Hr = (e) => as.call(e), K = (e) => Hr(e) === "[object Object]", sl = (e) => e == null ? "" : fe(e) || K(e) && e.toString === as ? JSON.stringify(e, null, 2) : String(e), pa = 2;
function il(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let a = 0;
  const s = [];
  for (let i = 0; i < r.length; i++)
    if (a += r[i].length + 1, a >= t) {
      for (let o = i - pa; o <= i + pa || n > a; o++) {
        if (o < 0 || o >= r.length)
          continue;
        const c = o + 1;
        s.push(`${c}${" ".repeat(3 - String(c).length)}|  ${r[o]}`);
        const f = r[o].length;
        if (o === i) {
          const w = t - (a - f) + 1, S = Math.max(1, n > a ? f - w : n - t);
          s.push("   |  " + " ".repeat(w) + "^".repeat(S));
        } else if (o > i) {
          if (n > a) {
            const w = Math.max(Math.min(n - a, f), 1);
            s.push("   |  " + "^".repeat(w));
          }
          a += f + 1;
        }
      }
      break;
    }
  return s.join(`
`);
}
function ll() {
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
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const U = {
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
}, ol = {
  // tokenizer error messages
  [U.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [U.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [U.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [U.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [U.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [U.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [U.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [U.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [U.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [U.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [U.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [U.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [U.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [U.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'"
};
function Jn(e, t, n = {}) {
  const { domain: r, messages: a, args: s } = n, i = process.env.NODE_ENV !== "production" ? Zn((a || ol)[e] || "", ...s || []) : e, o = new SyntaxError(String(i));
  return o.code = e, t && (o.location = t), o.domain = r, o;
}
function cl(e) {
  throw e;
}
function ul(e, t, n) {
  return { line: e, column: t, offset: n };
}
function xr(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const at = " ", dl = "\r", Ee = `
`, fl = String.fromCharCode(8232), hl = String.fromCharCode(8233);
function ml(e) {
  const t = e;
  let n = 0, r = 1, a = 1, s = 0;
  const i = (P) => t[P] === dl && t[P + 1] === Ee, o = (P) => t[P] === Ee, c = (P) => t[P] === hl, f = (P) => t[P] === fl, w = (P) => i(P) || o(P) || c(P) || f(P), S = () => n, p = () => r, M = () => a, g = () => s, O = (P) => i(P) || c(P) || f(P) ? Ee : t[P], d = () => O(n), h = () => O(n + s);
  function y() {
    return s = 0, w(n) && (r++, a = 0), i(n) && n++, n++, a++, t[n];
  }
  function C() {
    return i(n + s) && s++, s++, t[n + s];
  }
  function v() {
    n = 0, r = 1, a = 1, s = 0;
  }
  function k(P = 0) {
    s = P;
  }
  function L() {
    const P = n + s;
    for (; P !== n; )
      y();
    s = 0;
  }
  return {
    index: S,
    line: p,
    column: M,
    peekOffset: g,
    charAt: O,
    currentChar: d,
    currentPeek: h,
    next: y,
    peek: C,
    reset: v,
    resetPeek: k,
    skipToPeek: L
  };
}
const bt = void 0, va = "'", gl = "tokenizer";
function _l(e, t = {}) {
  const n = t.location !== !1, r = ml(e), a = () => r.index(), s = () => ul(r.line(), r.column(), r.index()), i = s(), o = a(), c = {
    currentType: 14,
    offset: o,
    startLoc: i,
    endLoc: i,
    lastType: 14,
    lastOffset: o,
    lastStartLoc: i,
    lastEndLoc: i,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, f = () => c, { onError: w } = t;
  function S(u, l, _, ...R) {
    const B = f();
    if (l.column += _, l.offset += _, w) {
      const $ = xr(B.startLoc, l), Xe = Jn(u, $, {
        domain: gl,
        args: R
      });
      w(Xe);
    }
  }
  function p(u, l, _) {
    u.endLoc = s(), u.currentType = l;
    const R = { type: l };
    return n && (R.loc = xr(u.startLoc, u.endLoc)), _ != null && (R.value = _), R;
  }
  const M = (u) => p(
    u,
    14
    /* EOF */
  );
  function g(u, l) {
    return u.currentChar() === l ? (u.next(), l) : (S(U.EXPECTED_TOKEN, s(), 0, l), "");
  }
  function O(u) {
    let l = "";
    for (; u.currentPeek() === at || u.currentPeek() === Ee; )
      l += u.currentPeek(), u.peek();
    return l;
  }
  function d(u) {
    const l = O(u);
    return u.skipToPeek(), l;
  }
  function h(u) {
    if (u === bt)
      return !1;
    const l = u.charCodeAt(0);
    return l >= 97 && l <= 122 || // a-z
    l >= 65 && l <= 90 || // A-Z
    l === 95;
  }
  function y(u) {
    if (u === bt)
      return !1;
    const l = u.charCodeAt(0);
    return l >= 48 && l <= 57;
  }
  function C(u, l) {
    const { currentType: _ } = l;
    if (_ !== 2)
      return !1;
    O(u);
    const R = h(u.currentPeek());
    return u.resetPeek(), R;
  }
  function v(u, l) {
    const { currentType: _ } = l;
    if (_ !== 2)
      return !1;
    O(u);
    const R = u.currentPeek() === "-" ? u.peek() : u.currentPeek(), B = y(R);
    return u.resetPeek(), B;
  }
  function k(u, l) {
    const { currentType: _ } = l;
    if (_ !== 2)
      return !1;
    O(u);
    const R = u.currentPeek() === va;
    return u.resetPeek(), R;
  }
  function L(u, l) {
    const { currentType: _ } = l;
    if (_ !== 8)
      return !1;
    O(u);
    const R = u.currentPeek() === ".";
    return u.resetPeek(), R;
  }
  function P(u, l) {
    const { currentType: _ } = l;
    if (_ !== 9)
      return !1;
    O(u);
    const R = h(u.currentPeek());
    return u.resetPeek(), R;
  }
  function ee(u, l) {
    const { currentType: _ } = l;
    if (!(_ === 8 || _ === 12))
      return !1;
    O(u);
    const R = u.currentPeek() === ":";
    return u.resetPeek(), R;
  }
  function Q(u, l) {
    const { currentType: _ } = l;
    if (_ !== 10)
      return !1;
    const R = () => {
      const $ = u.currentPeek();
      return $ === "{" ? h(u.peek()) : $ === "@" || $ === "%" || $ === "|" || $ === ":" || $ === "." || $ === at || !$ ? !1 : $ === Ee ? (u.peek(), R()) : h($);
    }, B = R();
    return u.resetPeek(), B;
  }
  function oe(u) {
    O(u);
    const l = u.currentPeek() === "|";
    return u.resetPeek(), l;
  }
  function ke(u) {
    const l = O(u), _ = u.currentPeek() === "%" && u.peek() === "{";
    return u.resetPeek(), {
      isModulo: _,
      hasSpace: l.length > 0
    };
  }
  function Ge(u, l = !0) {
    const _ = (B = !1, $ = "", Xe = !1) => {
      const rt = u.currentPeek();
      return rt === "{" ? $ === "%" ? !1 : B : rt === "@" || !rt ? $ === "%" ? !0 : B : rt === "%" ? (u.peek(), _(B, "%", !0)) : rt === "|" ? $ === "%" || Xe ? !0 : !($ === at || $ === Ee) : rt === at ? (u.peek(), _(!0, at, Xe)) : rt === Ee ? (u.peek(), _(!0, Ee, Xe)) : !0;
    }, R = _();
    return l && u.resetPeek(), R;
  }
  function Re(u, l) {
    const _ = u.currentChar();
    return _ === bt ? bt : l(_) ? (u.next(), _) : null;
  }
  function Wt(u) {
    return Re(u, (_) => {
      const R = _.charCodeAt(0);
      return R >= 97 && R <= 122 || // a-z
      R >= 65 && R <= 90 || // A-Z
      R >= 48 && R <= 57 || // 0-9
      R === 95 || // _
      R === 36;
    });
  }
  function nn(u) {
    return Re(u, (_) => {
      const R = _.charCodeAt(0);
      return R >= 48 && R <= 57;
    });
  }
  function je(u) {
    return Re(u, (_) => {
      const R = _.charCodeAt(0);
      return R >= 48 && R <= 57 || // 0-9
      R >= 65 && R <= 70 || // A-F
      R >= 97 && R <= 102;
    });
  }
  function Vt(u) {
    let l = "", _ = "";
    for (; l = nn(u); )
      _ += l;
    return _;
  }
  function Ke(u) {
    d(u);
    const l = u.currentChar();
    return l !== "%" && S(U.EXPECTED_TOKEN, s(), 0, l), u.next(), "%";
  }
  function Dt(u) {
    let l = "";
    for (; ; ) {
      const _ = u.currentChar();
      if (_ === "{" || _ === "}" || _ === "@" || _ === "|" || !_)
        break;
      if (_ === "%")
        if (Ge(u))
          l += _, u.next();
        else
          break;
      else if (_ === at || _ === Ee)
        if (Ge(u))
          l += _, u.next();
        else {
          if (oe(u))
            break;
          l += _, u.next();
        }
      else
        l += _, u.next();
    }
    return l;
  }
  function rn(u) {
    d(u);
    let l = "", _ = "";
    for (; l = Wt(u); )
      _ += l;
    return u.currentChar() === bt && S(U.UNTERMINATED_CLOSING_BRACE, s(), 0), _;
  }
  function an(u) {
    d(u);
    let l = "";
    return u.currentChar() === "-" ? (u.next(), l += `-${Vt(u)}`) : l += Vt(u), u.currentChar() === bt && S(U.UNTERMINATED_CLOSING_BRACE, s(), 0), l;
  }
  function sn(u) {
    d(u), g(u, "'");
    let l = "", _ = "";
    const R = ($) => $ !== va && $ !== Ee;
    for (; l = Re(u, R); )
      l === "\\" ? _ += ln(u) : _ += l;
    const B = u.currentChar();
    return B === Ee || B === bt ? (S(U.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), B === Ee && (u.next(), g(u, "'")), _) : (g(u, "'"), _);
  }
  function ln(u) {
    const l = u.currentChar();
    switch (l) {
      case "\\":
      case "'":
        return u.next(), `\\${l}`;
      case "u":
        return on(u, l, 4);
      case "U":
        return on(u, l, 6);
      default:
        return S(U.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, l), "";
    }
  }
  function on(u, l, _) {
    g(u, l);
    let R = "";
    for (let B = 0; B < _; B++) {
      const $ = je(u);
      if (!$) {
        S(U.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${l}${R}${u.currentChar()}`);
        break;
      }
      R += $;
    }
    return `\\${l}${R}`;
  }
  function cn(u) {
    d(u);
    let l = "", _ = "";
    const R = (B) => B !== "{" && B !== "}" && B !== at && B !== Ee;
    for (; l = Re(u, R); )
      _ += l;
    return _;
  }
  function un(u) {
    let l = "", _ = "";
    for (; l = Wt(u); )
      _ += l;
    return _;
  }
  function dn(u) {
    const l = (_ = !1, R) => {
      const B = u.currentChar();
      return B === "{" || B === "%" || B === "@" || B === "|" || !B || B === at ? R : B === Ee ? (R += B, u.next(), l(_, R)) : (R += B, u.next(), l(!0, R));
    };
    return l(!1, "");
  }
  function Ct(u) {
    d(u);
    const l = g(
      u,
      "|"
      /* Pipe */
    );
    return d(u), l;
  }
  function Tt(u, l) {
    let _ = null;
    switch (u.currentChar()) {
      case "{":
        return l.braceNest >= 1 && S(U.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), u.next(), _ = p(
          l,
          2,
          "{"
          /* BraceLeft */
        ), d(u), l.braceNest++, _;
      case "}":
        return l.braceNest > 0 && l.currentType === 2 && S(U.EMPTY_PLACEHOLDER, s(), 0), u.next(), _ = p(
          l,
          3,
          "}"
          /* BraceRight */
        ), l.braceNest--, l.braceNest > 0 && d(u), l.inLinked && l.braceNest === 0 && (l.inLinked = !1), _;
      case "@":
        return l.braceNest > 0 && S(U.UNTERMINATED_CLOSING_BRACE, s(), 0), _ = yt(u, l) || M(l), l.braceNest = 0, _;
      default:
        let B = !0, $ = !0, Xe = !0;
        if (oe(u))
          return l.braceNest > 0 && S(U.UNTERMINATED_CLOSING_BRACE, s(), 0), _ = p(l, 1, Ct(u)), l.braceNest = 0, l.inLinked = !1, _;
        if (l.braceNest > 0 && (l.currentType === 5 || l.currentType === 6 || l.currentType === 7))
          return S(U.UNTERMINATED_CLOSING_BRACE, s(), 0), l.braceNest = 0, Nt(u, l);
        if (B = C(u, l))
          return _ = p(l, 5, rn(u)), d(u), _;
        if ($ = v(u, l))
          return _ = p(l, 6, an(u)), d(u), _;
        if (Xe = k(u, l))
          return _ = p(l, 7, sn(u)), d(u), _;
        if (!B && !$ && !Xe)
          return _ = p(l, 13, cn(u)), S(U.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, _.value), d(u), _;
        break;
    }
    return _;
  }
  function yt(u, l) {
    const { currentType: _ } = l;
    let R = null;
    const B = u.currentChar();
    switch ((_ === 8 || _ === 9 || _ === 12 || _ === 10) && (B === Ee || B === at) && S(U.INVALID_LINKED_FORMAT, s(), 0), B) {
      case "@":
        return u.next(), R = p(
          l,
          8,
          "@"
          /* LinkedAlias */
        ), l.inLinked = !0, R;
      case ".":
        return d(u), u.next(), p(
          l,
          9,
          "."
          /* LinkedDot */
        );
      case ":":
        return d(u), u.next(), p(
          l,
          10,
          ":"
          /* LinkedDelimiter */
        );
      default:
        return oe(u) ? (R = p(l, 1, Ct(u)), l.braceNest = 0, l.inLinked = !1, R) : L(u, l) || ee(u, l) ? (d(u), yt(u, l)) : P(u, l) ? (d(u), p(l, 12, un(u))) : Q(u, l) ? (d(u), B === "{" ? Tt(u, l) || R : p(l, 11, dn(u))) : (_ === 8 && S(U.INVALID_LINKED_FORMAT, s(), 0), l.braceNest = 0, l.inLinked = !1, Nt(u, l));
    }
  }
  function Nt(u, l) {
    let _ = {
      type: 14
      /* EOF */
    };
    if (l.braceNest > 0)
      return Tt(u, l) || M(l);
    if (l.inLinked)
      return yt(u, l) || M(l);
    switch (u.currentChar()) {
      case "{":
        return Tt(u, l) || M(l);
      case "}":
        return S(U.UNBALANCED_CLOSING_BRACE, s(), 0), u.next(), p(
          l,
          3,
          "}"
          /* BraceRight */
        );
      case "@":
        return yt(u, l) || M(l);
      default:
        if (oe(u))
          return _ = p(l, 1, Ct(u)), l.braceNest = 0, l.inLinked = !1, _;
        const { isModulo: B, hasSpace: $ } = ke(u);
        if (B)
          return $ ? p(l, 0, Dt(u)) : p(l, 4, Ke(u));
        if (Ge(u))
          return p(l, 0, Dt(u));
        break;
    }
    return _;
  }
  function fn() {
    const { currentType: u, offset: l, startLoc: _, endLoc: R } = c;
    return c.lastType = u, c.lastOffset = l, c.lastStartLoc = _, c.lastEndLoc = R, c.offset = a(), c.startLoc = s(), r.currentChar() === bt ? p(
      c,
      14
      /* EOF */
    ) : Nt(r, c);
  }
  return {
    nextToken: fn,
    currentOffset: a,
    currentPosition: s,
    context: f
  };
}
const yl = "parser", bl = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function kl(e, t, n) {
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
function pl(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(h, y, C, v, ...k) {
    const L = h.currentPosition();
    if (L.offset += v, L.column += v, n) {
      const P = xr(C, L), ee = Jn(y, P, {
        domain: yl,
        args: k
      });
      n(ee);
    }
  }
  function a(h, y, C) {
    const v = {
      type: h,
      start: y,
      end: y
    };
    return t && (v.loc = { start: C, end: C }), v;
  }
  function s(h, y, C, v) {
    h.end = y, v && (h.type = v), t && h.loc && (h.loc.end = C);
  }
  function i(h, y) {
    const C = h.context(), v = a(3, C.offset, C.startLoc);
    return v.value = y, s(v, h.currentOffset(), h.currentPosition()), v;
  }
  function o(h, y) {
    const C = h.context(), { lastOffset: v, lastStartLoc: k } = C, L = a(5, v, k);
    return L.index = parseInt(y, 10), h.nextToken(), s(L, h.currentOffset(), h.currentPosition()), L;
  }
  function c(h, y) {
    const C = h.context(), { lastOffset: v, lastStartLoc: k } = C, L = a(4, v, k);
    return L.key = y, h.nextToken(), s(L, h.currentOffset(), h.currentPosition()), L;
  }
  function f(h, y) {
    const C = h.context(), { lastOffset: v, lastStartLoc: k } = C, L = a(9, v, k);
    return L.value = y.replace(bl, kl), h.nextToken(), s(L, h.currentOffset(), h.currentPosition()), L;
  }
  function w(h) {
    const y = h.nextToken(), C = h.context(), { lastOffset: v, lastStartLoc: k } = C, L = a(8, v, k);
    return y.type !== 12 ? (r(h, U.UNEXPECTED_EMPTY_LINKED_MODIFIER, C.lastStartLoc, 0), L.value = "", s(L, v, k), {
      nextConsumeToken: y,
      node: L
    }) : (y.value == null && r(h, U.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ze(y)), L.value = y.value || "", s(L, h.currentOffset(), h.currentPosition()), {
      node: L
    });
  }
  function S(h, y) {
    const C = h.context(), v = a(7, C.offset, C.startLoc);
    return v.value = y, s(v, h.currentOffset(), h.currentPosition()), v;
  }
  function p(h) {
    const y = h.context(), C = a(6, y.offset, y.startLoc);
    let v = h.nextToken();
    if (v.type === 9) {
      const k = w(h);
      C.modifier = k.node, v = k.nextConsumeToken || h.nextToken();
    }
    switch (v.type !== 10 && r(h, U.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ze(v)), v = h.nextToken(), v.type === 2 && (v = h.nextToken()), v.type) {
      case 11:
        v.value == null && r(h, U.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ze(v)), C.key = S(h, v.value || "");
        break;
      case 5:
        v.value == null && r(h, U.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ze(v)), C.key = c(h, v.value || "");
        break;
      case 6:
        v.value == null && r(h, U.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ze(v)), C.key = o(h, v.value || "");
        break;
      case 7:
        v.value == null && r(h, U.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ze(v)), C.key = f(h, v.value || "");
        break;
      default:
        r(h, U.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
        const k = h.context(), L = a(7, k.offset, k.startLoc);
        return L.value = "", s(L, k.offset, k.startLoc), C.key = L, s(C, k.offset, k.startLoc), {
          nextConsumeToken: v,
          node: C
        };
    }
    return s(C, h.currentOffset(), h.currentPosition()), {
      node: C
    };
  }
  function M(h) {
    const y = h.context(), C = y.currentType === 1 ? h.currentOffset() : y.offset, v = y.currentType === 1 ? y.endLoc : y.startLoc, k = a(2, C, v);
    k.items = [];
    let L = null;
    do {
      const Q = L || h.nextToken();
      switch (L = null, Q.type) {
        case 0:
          Q.value == null && r(h, U.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ze(Q)), k.items.push(i(h, Q.value || ""));
          break;
        case 6:
          Q.value == null && r(h, U.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ze(Q)), k.items.push(o(h, Q.value || ""));
          break;
        case 5:
          Q.value == null && r(h, U.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ze(Q)), k.items.push(c(h, Q.value || ""));
          break;
        case 7:
          Q.value == null && r(h, U.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ze(Q)), k.items.push(f(h, Q.value || ""));
          break;
        case 8:
          const oe = p(h);
          k.items.push(oe.node), L = oe.nextConsumeToken || null;
          break;
      }
    } while (y.currentType !== 14 && y.currentType !== 1);
    const P = y.currentType === 1 ? y.lastOffset : h.currentOffset(), ee = y.currentType === 1 ? y.lastEndLoc : h.currentPosition();
    return s(k, P, ee), k;
  }
  function g(h, y, C, v) {
    const k = h.context();
    let L = v.items.length === 0;
    const P = a(1, y, C);
    P.cases = [], P.cases.push(v);
    do {
      const ee = M(h);
      L || (L = ee.items.length === 0), P.cases.push(ee);
    } while (k.currentType !== 14);
    return L && r(h, U.MUST_HAVE_MESSAGES_IN_PLURAL, C, 0), s(P, h.currentOffset(), h.currentPosition()), P;
  }
  function O(h) {
    const y = h.context(), { offset: C, startLoc: v } = y, k = M(h);
    return y.currentType === 14 ? k : g(h, C, v, k);
  }
  function d(h) {
    const y = _l(h, be({}, e)), C = y.context(), v = a(0, C.offset, C.startLoc);
    return t && v.loc && (v.loc.source = h), v.body = O(y), C.currentType !== 14 && r(y, U.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, h[C.offset] || ""), s(v, y.currentOffset(), y.currentPosition()), v;
  }
  return { parse: d };
}
function Ze(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function vl(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function wa(e, t) {
  for (let n = 0; n < e.length; n++)
    zr(e[n], t);
}
function zr(e, t) {
  switch (e.type) {
    case 1:
      wa(e.cases, t), t.helper(
        "plural"
        /* PLURAL */
      );
      break;
    case 2:
      wa(e.items, t);
      break;
    case 6:
      zr(e.key, t), t.helper(
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
function wl(e, t = {}) {
  const n = vl(e);
  n.helper(
    "normalize"
    /* NORMALIZE */
  ), e.body && zr(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function xl(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: a, needIndent: s } = t, i = {
    source: e.loc.source,
    filename: r,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: a,
    needIndent: s,
    indentLevel: 0
  }, o = () => i;
  function c(O, d) {
    i.code += O;
  }
  function f(O, d = !0) {
    const h = d ? a : "";
    c(s ? h + "  ".repeat(O) : h);
  }
  function w(O = !0) {
    const d = ++i.indentLevel;
    O && f(d);
  }
  function S(O = !0) {
    const d = --i.indentLevel;
    O && f(d);
  }
  function p() {
    f(i.indentLevel);
  }
  return {
    context: o,
    push: c,
    indent: w,
    deindent: S,
    newline: p,
    helper: (O) => `_${O}`,
    needIndent: () => i.needIndent
  };
}
function Sl(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* LINKED */
  )}(`), Jt(e, t.key), t.modifier ? (e.push(", "), Jt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function El(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* NORMALIZE */
  )}([`), e.indent(r());
  const a = t.items.length;
  for (let s = 0; s < a && (Jt(e, t.items[s]), s !== a - 1); s++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Ol(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* PLURAL */
    )}([`), e.indent(r());
    const a = t.cases.length;
    for (let s = 0; s < a && (Jt(e, t.cases[s]), s !== a - 1); s++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Dl(e, t) {
  t.body ? Jt(e, t.body) : e.push("null");
}
function Jt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Dl(e, t);
      break;
    case 1:
      Ol(e, t);
      break;
    case 2:
      El(e, t);
      break;
    case 6:
      Sl(e, t);
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
        /* INTERPOLATE */
      )}(${n(
        "list"
        /* LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* INTERPOLATE */
      )}(${n(
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
const Cl = (e, t = {}) => {
  const n = A(t.mode) ? t.mode : "normal", r = A(t.filename) ? t.filename : "message.intl", a = !!t.sourceMap, s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, i = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], c = xl(e, {
    mode: n,
    filename: r,
    sourceMap: a,
    breakLineCode: s,
    needIndent: i
  });
  c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(i), o.length > 0 && (c.push(`const { ${o.map((S) => `${S}: _${S}`).join(", ")} } = ctx`), c.newline()), c.push("return "), Jt(c, e), c.deindent(i), c.push("}");
  const { code: f, map: w } = c.context();
  return {
    ast: e,
    code: f,
    map: w ? w.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Tl(e, t = {}) {
  const n = be({}, t), a = pl(n).parse(e);
  return wl(a, n), Cl(a, n);
}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const ss = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Et = [];
Et[
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
Et[
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
Et[
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
Et[
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
Et[
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
Et[
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
Et[
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
const Nl = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Il(e) {
  return Nl.test(e);
}
function Ml(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ll(e) {
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
function Pl(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Il(t) ? Ml(t) : "*" + t;
}
function Rl(e) {
  const t = [];
  let n = -1, r = 0, a = 0, s, i, o, c, f, w, S;
  const p = [];
  p[
    0
    /* APPEND */
  ] = () => {
    i === void 0 ? i = o : i += o;
  }, p[
    1
    /* PUSH */
  ] = () => {
    i !== void 0 && (t.push(i), i = void 0);
  }, p[
    2
    /* INC_SUB_PATH_DEPTH */
  ] = () => {
    p[
      0
      /* APPEND */
    ](), a++;
  }, p[
    3
    /* PUSH_SUB_PATH */
  ] = () => {
    if (a > 0)
      a--, r = 4, p[
        0
        /* APPEND */
      ]();
    else {
      if (a = 0, i === void 0 || (i = Pl(i), i === !1))
        return !1;
      p[
        1
        /* PUSH */
      ]();
    }
  };
  function M() {
    const g = e[n + 1];
    if (r === 5 && g === "'" || r === 6 && g === '"')
      return n++, o = "\\" + g, p[
        0
        /* APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, s = e[n], !(s === "\\" && M())) {
      if (c = Ll(s), S = Et[r], f = S[c] || S.l || 8, f === 8 || (r = f[0], f[1] !== void 0 && (w = p[f[1]], w && (o = s, w() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const xa = /* @__PURE__ */ new Map();
function Yl(e, t) {
  return ne(e) ? e[t] : null;
}
function Al(e, t) {
  if (!ne(e))
    return null;
  let n = xa.get(t);
  if (n || (n = Rl(t), n && xa.set(t, n)), !n)
    return null;
  const r = n.length;
  let a = e, s = 0;
  for (; s < r; ) {
    const i = a[n[s]];
    if (i === void 0)
      return null;
    a = i, s++;
  }
  return a;
}
const Fl = (e) => e, Wl = (e) => "", Vl = "text", Ul = (e) => e.length === 0 ? "" : e.join(""), Bl = sl;
function Sa(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Hl(e) {
  const t = pe(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (pe(e.named.count) || pe(e.named.n)) ? pe(e.named.count) ? e.named.count : pe(e.named.n) ? e.named.n : t : t;
}
function zl(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Gl(e = {}) {
  const t = e.locale, n = Hl(e), r = ne(e.pluralRules) && A(t) && ge(e.pluralRules[t]) ? e.pluralRules[t] : Sa, a = ne(e.pluralRules) && A(t) && ge(e.pluralRules[t]) ? Sa : void 0, s = (h) => h[r(n, h.length, a)], i = e.list || [], o = (h) => i[h], c = e.named || {};
  pe(e.pluralIndex) && zl(n, c);
  const f = (h) => c[h];
  function w(h) {
    const y = ge(e.messages) ? e.messages(h) : ne(e.messages) ? e.messages[h] : !1;
    return y || (e.parent ? e.parent.message(h) : Wl);
  }
  const S = (h) => e.modifiers ? e.modifiers[h] : Fl, p = K(e.processor) && ge(e.processor.normalize) ? e.processor.normalize : Ul, M = K(e.processor) && ge(e.processor.interpolate) ? e.processor.interpolate : Bl, g = K(e.processor) && A(e.processor.type) ? e.processor.type : Vl, d = {
    list: o,
    named: f,
    plural: s,
    linked: (h, ...y) => {
      const [C, v] = y;
      let k = "text", L = "";
      y.length === 1 ? ne(C) ? (L = C.modifier || L, k = C.type || k) : A(C) && (L = C || L) : y.length === 2 && (A(C) && (L = C || L), A(v) && (k = v || k));
      let P = w(h)(d);
      return k === "vnode" && fe(P) && L && (P = P[0]), L ? S(L)(P, k) : P;
    },
    message: w,
    type: g,
    interpolate: M,
    normalize: p
  };
  return d;
}
let vn = null;
function jl(e) {
  vn = e;
}
function Kl(e, t, n) {
  vn && vn.emit(ss.I18nInit, {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Xl = /* @__PURE__ */ Zl(ss.FunctionTranslate);
function Zl(e) {
  return (t) => vn && vn.emit(e, t);
}
const Ie = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  __EXTEND_POINT__: 7
}, ql = {
  [Ie.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Ie.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Ie.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Ie.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Ie.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Ie.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale."
};
function Qt(e, ...t) {
  return Zn(ql[e], ...t);
}
function Jl(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...fe(t) ? t : ne(t) ? Object.keys(t) : A(t) ? [t] : [n]
  ])];
}
function is(e, t, n) {
  const r = A(n) ? n : $n, a = e;
  a.__localeChainCache || (a.__localeChainCache = /* @__PURE__ */ new Map());
  let s = a.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let i = [n];
    for (; fe(i); )
      i = Ea(s, i, t);
    const o = fe(t) || !K(t) ? t : t.default ? t.default : null;
    i = A(o) ? [o] : o, fe(i) && Ea(s, i, !1), a.__localeChainCache.set(r, s);
  }
  return s;
}
function Ea(e, t, n) {
  let r = !0;
  for (let a = 0; a < t.length && re(r); a++) {
    const s = t[a];
    A(s) && (r = Ql(e, t[a], n));
  }
  return r;
}
function Ql(e, t, n) {
  let r;
  const a = t.split("-");
  do {
    const s = a.join("-");
    r = $l(e, s, n), a.splice(-1, 1);
  } while (a.length && r === !0);
  return r;
}
function $l(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (fe(n) || K(n)) && n[a] && (r = n[a]);
  }
  return r;
}
const eo = "9.2.2", Qn = -1, $n = "en-US", Vn = "", Oa = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function to() {
  return {
    upper: (e, t) => t === "text" && A(e) ? e.toUpperCase() : t === "vnode" && ne(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && A(e) ? e.toLowerCase() : t === "vnode" && ne(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && A(e) ? Oa(e) : t === "vnode" && ne(e) && "__v_isVNode" in e ? Oa(e.children) : e
  };
}
let ls;
function no(e) {
  ls = e;
}
let os;
function ro(e) {
  os = e;
}
let cs;
function ao(e) {
  cs = e;
}
let us = null;
const Da = (e) => {
  us = e;
}, so = () => us;
let ds = null;
const Ca = (e) => {
  ds = e;
}, io = () => ds;
let Ta = 0;
function lo(e = {}) {
  const t = A(e.version) ? e.version : eo, n = A(e.locale) ? e.locale : $n, r = fe(e.fallbackLocale) || K(e.fallbackLocale) || A(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n, a = K(e.messages) ? e.messages : { [n]: {} }, s = K(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} }, i = K(e.numberFormats) ? e.numberFormats : { [n]: {} }, o = be({}, e.modifiers || {}, to()), c = e.pluralRules || {}, f = ge(e.missing) ? e.missing : null, w = re(e.missingWarn) || qt(e.missingWarn) ? e.missingWarn : !0, S = re(e.fallbackWarn) || qt(e.fallbackWarn) ? e.fallbackWarn : !0, p = !!e.fallbackFormat, M = !!e.unresolving, g = ge(e.postTranslation) ? e.postTranslation : null, O = K(e.processor) ? e.processor : null, d = re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, h = !!e.escapeParameter, y = ge(e.messageCompiler) ? e.messageCompiler : ls, C = ge(e.messageResolver) ? e.messageResolver : os || Yl, v = ge(e.localeFallbacker) ? e.localeFallbacker : cs || Jl, k = ne(e.fallbackContext) ? e.fallbackContext : void 0, L = ge(e.onWarn) ? e.onWarn : On, P = e, ee = ne(P.__datetimeFormatters) ? P.__datetimeFormatters : /* @__PURE__ */ new Map(), Q = ne(P.__numberFormatters) ? P.__numberFormatters : /* @__PURE__ */ new Map(), oe = ne(P.__meta) ? P.__meta : {};
  Ta++;
  const ke = {
    version: t,
    cid: Ta,
    locale: n,
    fallbackLocale: r,
    messages: a,
    modifiers: o,
    pluralRules: c,
    missing: f,
    missingWarn: w,
    fallbackWarn: S,
    fallbackFormat: p,
    unresolving: M,
    postTranslation: g,
    processor: O,
    warnHtmlMessage: d,
    escapeParameter: h,
    messageCompiler: y,
    messageResolver: C,
    localeFallbacker: v,
    fallbackContext: k,
    onWarn: L,
    __meta: oe
  };
  return ke.datetimeFormats = s, ke.numberFormats = i, ke.__datetimeFormatters = ee, ke.__numberFormatters = Q, process.env.NODE_ENV !== "production" && (ke.__v_emitter = P.__v_emitter != null ? P.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Kl(ke, t, oe), ke;
}
function er(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function fs(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Gr(e, t, n, r, a) {
  const { missing: s, onWarn: i } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = e.__v_emitter;
    o && o.emit("missing", {
      locale: n,
      key: t,
      type: a,
      groupId: `${a}:${t}`
    });
  }
  if (s !== null) {
    const o = s(e, n, t, a);
    return A(o) ? o : t;
  } else
    return process.env.NODE_ENV !== "production" && fs(r, t) && i(Qt(Ie.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function hn(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
const oo = /<\/?[\w\s="/.':;#-\/]+>/, co = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function uo(e, t) {
  (re(t.warnHtmlMessage) ? t.warnHtmlMessage : !0) && oo.test(e) && On(Zn(co, { source: e }));
}
const fo = (e) => e;
let Na = /* @__PURE__ */ Object.create(null);
function ho(e, t = {}) {
  {
    process.env.NODE_ENV !== "production" && uo(e, t);
    const r = (t.onCacheKey || fo)(e), a = Na[r];
    if (a)
      return a;
    let s = !1;
    const i = t.onError || cl;
    t.onError = (f) => {
      s = !0, i(f);
    };
    const { code: o } = Tl(e, t), c = new Function(`return ${o}`)();
    return s ? c : Na[r] = c;
  }
}
let hs = U.__EXTEND_POINT__;
const br = () => ++hs, ot = {
  INVALID_ARGUMENT: hs,
  INVALID_DATE_ARGUMENT: br(),
  INVALID_ISO_DATE_ARGUMENT: br(),
  __EXTEND_POINT__: br()
  // 18
};
function Gt(e) {
  return Jn(e, null, process.env.NODE_ENV !== "production" ? { messages: mo } : void 0);
}
const mo = {
  [ot.INVALID_ARGUMENT]: "Invalid arguments",
  [ot.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [ot.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string"
}, Ia = () => "", qe = (e) => ge(e);
function Ma(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: a, messageCompiler: s, fallbackLocale: i, messages: o } = e, [c, f] = Sr(...t), w = re(f.missingWarn) ? f.missingWarn : e.missingWarn, S = re(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, p = re(f.escapeParameter) ? f.escapeParameter : e.escapeParameter, M = !!f.resolvedMessage, g = A(f.default) || re(f.default) ? re(f.default) ? s ? c : () => c : f.default : n ? s ? c : () => c : "", O = n || g !== "", d = A(f.locale) ? f.locale : e.locale;
  p && go(f);
  let [h, y, C] = M ? [
    c,
    d,
    o[d] || {}
  ] : ms(e, c, d, i, S, w), v = h, k = c;
  if (!M && !(A(v) || qe(v)) && O && (v = g, k = v), !M && (!(A(v) || qe(v)) || !A(y)))
    return a ? Qn : c;
  if (process.env.NODE_ENV !== "production" && A(v) && e.messageCompiler == null)
    return On(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
  let L = !1;
  const P = () => {
    L = !0;
  }, ee = qe(v) ? v : gs(e, c, y, v, k, P);
  if (L)
    return v;
  const Q = bo(e, y, C, f), oe = Gl(Q), ke = _o(e, ee, oe), Ge = r ? r(ke, c) : ke;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Re = {
      timestamp: Date.now(),
      key: A(c) ? c : qe(v) ? v.key : "",
      locale: y || (qe(v) ? v.locale : ""),
      format: A(v) ? v : qe(v) ? v.source : "",
      message: Ge
    };
    Re.meta = be({}, e.__meta, so() || {}), Xl(Re);
  }
  return Ge;
}
function go(e) {
  fe(e.list) ? e.list = e.list.map((t) => A(t) ? ka(t) : t) : ne(e.named) && Object.keys(e.named).forEach((t) => {
    A(e.named[t]) && (e.named[t] = ka(e.named[t]));
  });
}
function ms(e, t, n, r, a, s) {
  const { messages: i, onWarn: o, messageResolver: c, localeFallbacker: f } = e, w = f(e, r, n);
  let S = {}, p, M = null, g = n, O = null;
  const d = "translate";
  for (let h = 0; h < w.length; h++) {
    if (p = O = w[h], process.env.NODE_ENV !== "production" && n !== p && er(a, t) && o(Qt(Ie.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: p
    })), process.env.NODE_ENV !== "production" && n !== p) {
      const L = e.__v_emitter;
      L && L.emit("fallback", {
        type: d,
        key: t,
        from: g,
        to: O,
        groupId: `${d}:${t}`
      });
    }
    S = i[p] || {};
    let y = null, C, v;
    if (process.env.NODE_ENV !== "production" && xt && (y = window.performance.now(), C = "intlify-message-resolve-start", v = "intlify-message-resolve-end", Le && Le(C)), (M = c(S, t)) === null && (M = S[t]), process.env.NODE_ENV !== "production" && xt) {
      const L = window.performance.now(), P = e.__v_emitter;
      P && y && M && P.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: M,
        time: L - y,
        groupId: `${d}:${t}`
      }), C && v && Le && At && (Le(v), At("intlify message resolve", C, v));
    }
    if (A(M) || ge(M))
      break;
    const k = Gr(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      p,
      s,
      d
    );
    k !== t && (M = k), g = O;
  }
  return [M, p, S];
}
function gs(e, t, n, r, a, s) {
  const { messageCompiler: i, warnHtmlMessage: o } = e;
  if (qe(r)) {
    const p = r;
    return p.locale = p.locale || n, p.key = p.key || t, p;
  }
  if (i == null) {
    const p = () => r;
    return p.locale = n, p.key = t, p;
  }
  let c = null, f, w;
  process.env.NODE_ENV !== "production" && xt && (c = window.performance.now(), f = "intlify-message-compilation-start", w = "intlify-message-compilation-end", Le && Le(f));
  const S = i(r, yo(e, n, a, r, o, s));
  if (process.env.NODE_ENV !== "production" && xt) {
    const p = window.performance.now(), M = e.__v_emitter;
    M && c && M.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: p - c,
      groupId: `translate:${t}`
    }), f && w && Le && At && (Le(w), At("intlify message compilation", f, w));
  }
  return S.locale = n, S.key = t, S.source = r, S;
}
function _o(e, t, n) {
  let r = null, a, s;
  process.env.NODE_ENV !== "production" && xt && (r = window.performance.now(), a = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", Le && Le(a));
  const i = t(n);
  if (process.env.NODE_ENV !== "production" && xt) {
    const o = window.performance.now(), c = e.__v_emitter;
    c && r && c.emit("message-evaluation", {
      type: "message-evaluation",
      value: i,
      time: o - r,
      groupId: `translate:${t.key}`
    }), a && s && Le && At && (Le(s), At("intlify message evaluation", a, s));
  }
  return i;
}
function Sr(...e) {
  const [t, n, r] = e, a = {};
  if (!A(t) && !pe(t) && !qe(t))
    throw Gt(ot.INVALID_ARGUMENT);
  const s = pe(t) ? String(t) : (qe(t), t);
  return pe(n) ? a.plural = n : A(n) ? a.default = n : K(n) && !qn(n) ? a.named = n : fe(n) && (a.list = n), pe(r) ? a.plural = r : A(r) ? a.default = r : K(r) && be(a, r), [s, a];
}
function yo(e, t, n, r, a, s) {
  return {
    warnHtmlMessage: a,
    onError: (i) => {
      if (s && s(i), process.env.NODE_ENV !== "production") {
        const o = `Message compilation error: ${i.message}`, c = i.location && il(r, i.location.start.offset, i.location.end.offset), f = e.__v_emitter;
        f && f.emit("compile-error", {
          message: r,
          error: i.message,
          start: i.location && i.location.start.offset,
          end: i.location && i.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(c ? `${o}
${c}` : o);
      } else
        throw i;
    },
    onCacheKey: (i) => tl(t, n, i)
  };
}
function bo(e, t, n, r) {
  const { modifiers: a, pluralRules: s, messageResolver: i, fallbackLocale: o, fallbackWarn: c, missingWarn: f, fallbackContext: w } = e, p = {
    locale: t,
    modifiers: a,
    pluralRules: s,
    messages: (M) => {
      let g = i(n, M);
      if (g == null && w) {
        const [, , O] = ms(w, M, t, o, c, f);
        g = i(O, M);
      }
      if (A(g)) {
        let O = !1;
        const h = gs(e, M, t, g, M, () => {
          O = !0;
        });
        return O ? Ia : h;
      } else
        return qe(g) ? g : Ia;
    }
  };
  return e.processor && (p.processor = e.processor), r.list && (p.list = r.list), r.named && (p.named = r.named), pe(r.plural) && (p.pluralIndex = r.plural), p;
}
const La = typeof Intl < "u", _s = {
  dateTimeFormat: La && typeof Intl.DateTimeFormat < "u",
  numberFormat: La && typeof Intl.NumberFormat < "u"
};
function Pa(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: a, onWarn: s, localeFallbacker: i } = e, { __datetimeFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !_s.dateTimeFormat)
    return s(Qt(Ie.CANNOT_FORMAT_DATE)), Vn;
  const [c, f, w, S] = Er(...t), p = re(w.missingWarn) ? w.missingWarn : e.missingWarn, M = re(w.fallbackWarn) ? w.fallbackWarn : e.fallbackWarn, g = !!w.part, O = A(w.locale) ? w.locale : e.locale, d = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    O
  );
  if (!A(c) || c === "")
    return new Intl.DateTimeFormat(O, S).format(f);
  let h = {}, y, C = null, v = O, k = null;
  const L = "datetime format";
  for (let Q = 0; Q < d.length; Q++) {
    if (y = k = d[Q], process.env.NODE_ENV !== "production" && O !== y && er(M, c) && s(Qt(Ie.FALLBACK_TO_DATE_FORMAT, {
      key: c,
      target: y
    })), process.env.NODE_ENV !== "production" && O !== y) {
      const oe = e.__v_emitter;
      oe && oe.emit("fallback", {
        type: L,
        key: c,
        from: v,
        to: k,
        groupId: `${L}:${c}`
      });
    }
    if (h = n[y] || {}, C = h[c], K(C))
      break;
    Gr(e, c, y, p, L), v = k;
  }
  if (!K(C) || !A(y))
    return r ? Qn : c;
  let P = `${y}__${c}`;
  qn(S) || (P = `${P}__${JSON.stringify(S)}`);
  let ee = o.get(P);
  return ee || (ee = new Intl.DateTimeFormat(y, be({}, C, S)), o.set(P, ee)), g ? ee.formatToParts(f) : ee.format(f);
}
const ys = [
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
function Er(...e) {
  const [t, n, r, a] = e, s = {};
  let i = {}, o;
  if (A(t)) {
    const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!c)
      throw Gt(ot.INVALID_ISO_DATE_ARGUMENT);
    const f = c[3] ? c[3].trim().startsWith("T") ? `${c[1].trim()}${c[3].trim()}` : `${c[1].trim()}T${c[3].trim()}` : c[1].trim();
    o = new Date(f);
    try {
      o.toISOString();
    } catch {
      throw Gt(ot.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (rl(t)) {
    if (isNaN(t.getTime()))
      throw Gt(ot.INVALID_DATE_ARGUMENT);
    o = t;
  } else if (pe(t))
    o = t;
  else
    throw Gt(ot.INVALID_ARGUMENT);
  return A(n) ? s.key = n : K(n) && Object.keys(n).forEach((c) => {
    ys.includes(c) ? i[c] = n[c] : s[c] = n[c];
  }), A(r) ? s.locale = r : K(r) && (i = r), K(a) && (i = a), [s.key || "", o, s, i];
}
function Ra(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
  }
}
function Ya(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: a, onWarn: s, localeFallbacker: i } = e, { __numberFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !_s.numberFormat)
    return s(Qt(Ie.CANNOT_FORMAT_NUMBER)), Vn;
  const [c, f, w, S] = Or(...t), p = re(w.missingWarn) ? w.missingWarn : e.missingWarn, M = re(w.fallbackWarn) ? w.fallbackWarn : e.fallbackWarn, g = !!w.part, O = A(w.locale) ? w.locale : e.locale, d = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    O
  );
  if (!A(c) || c === "")
    return new Intl.NumberFormat(O, S).format(f);
  let h = {}, y, C = null, v = O, k = null;
  const L = "number format";
  for (let Q = 0; Q < d.length; Q++) {
    if (y = k = d[Q], process.env.NODE_ENV !== "production" && O !== y && er(M, c) && s(Qt(Ie.FALLBACK_TO_NUMBER_FORMAT, {
      key: c,
      target: y
    })), process.env.NODE_ENV !== "production" && O !== y) {
      const oe = e.__v_emitter;
      oe && oe.emit("fallback", {
        type: L,
        key: c,
        from: v,
        to: k,
        groupId: `${L}:${c}`
      });
    }
    if (h = n[y] || {}, C = h[c], K(C))
      break;
    Gr(e, c, y, p, L), v = k;
  }
  if (!K(C) || !A(y))
    return r ? Qn : c;
  let P = `${y}__${c}`;
  qn(S) || (P = `${P}__${JSON.stringify(S)}`);
  let ee = o.get(P);
  return ee || (ee = new Intl.NumberFormat(y, be({}, C, S)), o.set(P, ee)), g ? ee.formatToParts(f) : ee.format(f);
}
const bs = [
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
function Or(...e) {
  const [t, n, r, a] = e, s = {};
  let i = {};
  if (!pe(t))
    throw Gt(ot.INVALID_ARGUMENT);
  const o = t;
  return A(n) ? s.key = n : K(n) && Object.keys(n).forEach((c) => {
    bs.includes(c) ? i[c] = n[c] : s[c] = n[c];
  }), A(r) ? s.locale = r : K(r) && (i = r), K(a) && (i = a), [s.key || "", o, s, i];
}
function Aa(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
  }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (yn().__INTLIFY_PROD_DEVTOOLS__ = !1);
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const ko = "9.2.2";
function po() {
  let e = !1;
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (e = !0, yn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (e = !0, yn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (yn().__INTLIFY_PROD_DEVTOOLS__ = !1), process.env.NODE_ENV !== "production" && e && console.warn("You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.");
}
let ks = Ie.__EXTEND_POINT__;
const Bt = () => ++ks, it = {
  FALLBACK_TO_ROOT: ks,
  NOT_SUPPORTED_PRESERVE: Bt(),
  NOT_SUPPORTED_FORMATTER: Bt(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: Bt(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: Bt(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: Bt(),
  NOT_FOUND_PARENT_SCOPE: Bt()
  // 13
}, vo = {
  [it.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [it.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [it.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [it.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [it.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [it.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [it.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope."
};
function ps(e, ...t) {
  return Zn(vo[e], ...t);
}
let vs = U.__EXTEND_POINT__;
const De = () => ++vs, ie = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: vs,
  // legacy module errors
  INVALID_ARGUMENT: De(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: De(),
  NOT_INSLALLED: De(),
  NOT_AVAILABLE_IN_LEGACY_MODE: De(),
  // directive module errors
  REQUIRED_VALUE: De(),
  INVALID_VALUE: De(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: De(),
  NOT_INSLALLED_WITH_PROVIDE: De(),
  // unexpected error
  UNEXPECTED_ERROR: De(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: De(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: De(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: De(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: De(),
  // for enhancement
  __EXTEND_POINT__: De()
  // 29
};
function dt(e, ...t) {
  return Jn(e, null, process.env.NODE_ENV !== "production" ? { messages: wo, args: t } : void 0);
}
const wo = {
  [ie.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [ie.INVALID_ARGUMENT]: "Invalid argument",
  [ie.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [ie.NOT_INSLALLED]: "Need to install with `app.use` function",
  [ie.UNEXPECTED_ERROR]: "Unexpected error",
  [ie.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [ie.REQUIRED_VALUE]: "Required in value: {0}",
  [ie.INVALID_VALUE]: "Invalid value",
  [ie.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [ie.NOT_INSLALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [ie.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [ie.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [ie.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [ie.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Dr = /* @__PURE__ */ mt("__transrateVNode"), Cr = /* @__PURE__ */ mt("__datetimeParts"), Tr = /* @__PURE__ */ mt("__numberParts"), Nr = /* @__PURE__ */ mt("__enableEmitter"), Ir = /* @__PURE__ */ mt("__disableEmitter"), xo = mt("__setPluralRules");
mt("__intlifyMeta");
const ws = /* @__PURE__ */ mt("__injectWithOption");
function Mr(e) {
  if (!ne(e))
    return e;
  for (const t in e)
    if (Br(e, t))
      if (!t.includes("."))
        ne(e[t]) && Mr(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let a = e;
        for (let s = 0; s < r; s++)
          n[s] in a || (a[n[s]] = {}), a = a[n[s]];
        a[n[r]] = e[t], delete e[t], ne(a[n[r]]) && Mr(a[n[r]]);
      }
  return e;
}
function jr(e, t) {
  const { messages: n, __i18n: r, messageResolver: a, flatJson: s } = t, i = K(n) ? n : fe(r) ? {} : { [e]: {} };
  if (fe(r) && r.forEach((o) => {
    if ("locale" in o && "resource" in o) {
      const { locale: c, resource: f } = o;
      c ? (i[c] = i[c] || {}, bn(f, i[c])) : bn(f, i);
    } else
      A(o) && bn(JSON.parse(o), i);
  }), a == null && s)
    for (const o in i)
      Br(i, o) && Mr(i[o]);
  return i;
}
const Pn = (e) => !ne(e) || fe(e);
function bn(e, t) {
  if (Pn(e) || Pn(t))
    throw dt(ie.INVALID_VALUE);
  for (const n in e)
    Br(e, n) && (Pn(e[n]) || Pn(t[n]) ? t[n] = e[n] : bn(e[n], t[n]));
}
function xs(e) {
  return e.type;
}
function So(e, t, n) {
  let r = ne(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = jr(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const a = Object.keys(r);
  a.length && a.forEach((s) => {
    e.mergeLocaleMessage(s, r[s]);
  });
  {
    if (ne(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (ne(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function Fa(e) {
  return ce(Di, null, e, 0);
}
const Wa = "__INTLIFY_META__";
let Va = 0;
function Ua(e) {
  return (t, n, r, a) => e(n, r, Ur() || void 0, a);
}
const Eo = () => {
  const e = Ur();
  let t = null;
  return e && (t = xs(e)[Wa]) ? { [Wa]: t } : null;
};
function Oo(e = {}, t) {
  const { __root: n } = e, r = n === void 0;
  let a = re(e.inheritLocale) ? e.inheritLocale : !0;
  const s = ye(
    // prettier-ignore
    n && a ? n.locale.value : A(e.locale) ? e.locale : $n
  ), i = ye(
    // prettier-ignore
    n && a ? n.fallbackLocale.value : A(e.fallbackLocale) || fe(e.fallbackLocale) || K(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s.value
  ), o = ye(jr(s.value, e)), c = ye(K(e.datetimeFormats) ? e.datetimeFormats : { [s.value]: {} }), f = ye(K(e.numberFormats) ? e.numberFormats : { [s.value]: {} });
  let w = n ? n.missingWarn : re(e.missingWarn) || qt(e.missingWarn) ? e.missingWarn : !0, S = n ? n.fallbackWarn : re(e.fallbackWarn) || qt(e.fallbackWarn) ? e.fallbackWarn : !0, p = n ? n.fallbackRoot : re(e.fallbackRoot) ? e.fallbackRoot : !0, M = !!e.fallbackFormat, g = ge(e.missing) ? e.missing : null, O = ge(e.missing) ? Ua(e.missing) : null, d = ge(e.postTranslation) ? e.postTranslation : null, h = n ? n.warnHtmlMessage : re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter;
  const C = n ? n.modifiers : K(e.modifiers) ? e.modifiers : {};
  let v = e.pluralRules || n && n.pluralRules, k;
  k = (() => {
    r && Ca(null);
    const b = {
      version: ko,
      locale: s.value,
      fallbackLocale: i.value,
      messages: o.value,
      modifiers: C,
      pluralRules: v,
      missing: O === null ? void 0 : O,
      missingWarn: w,
      fallbackWarn: S,
      fallbackFormat: M,
      unresolving: !0,
      postTranslation: d === null ? void 0 : d,
      warnHtmlMessage: h,
      escapeParameter: y,
      messageResolver: e.messageResolver,
      __meta: { framework: "vue" }
    };
    b.datetimeFormats = c.value, b.numberFormats = f.value, b.__datetimeFormatters = K(k) ? k.__datetimeFormatters : void 0, b.__numberFormatters = K(k) ? k.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (b.__v_emitter = K(k) ? k.__v_emitter : void 0);
    const T = lo(b);
    return r && Ca(T), T;
  })(), hn(k, s.value, i.value);
  function P() {
    return [
      s.value,
      i.value,
      o.value,
      c.value,
      f.value
    ];
  }
  const ee = Je({
    get: () => s.value,
    set: (b) => {
      s.value = b, k.locale = s.value;
    }
  }), Q = Je({
    get: () => i.value,
    set: (b) => {
      i.value = b, k.fallbackLocale = i.value, hn(k, s.value, b);
    }
  }), oe = Je(() => o.value), ke = /* @__PURE__ */ Je(() => c.value), Ge = /* @__PURE__ */ Je(() => f.value);
  function Re() {
    return ge(d) ? d : null;
  }
  function Wt(b) {
    d = b, k.postTranslation = b;
  }
  function nn() {
    return g;
  }
  function je(b) {
    b !== null && (O = Ua(b)), g = b, k.missing = O;
  }
  function Vt(b, T) {
    return b !== "translate" || !T.resolvedMessage;
  }
  const Ke = (b, T, Oe, Se, yr, Ln) => {
    P();
    let Ut;
    if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__)
      try {
        Da(Eo()), r || (k.fallbackContext = n ? io() : void 0), Ut = b(k);
      } finally {
        Da(null), r || (k.fallbackContext = void 0);
      }
    else
      Ut = b(k);
    if (pe(Ut) && Ut === Qn) {
      const [It, vi] = T();
      if (process.env.NODE_ENV !== "production" && n && A(It) && Vt(Oe, vi) && (p && (er(S, It) || fs(w, It)) && On(ps(it.FALLBACK_TO_ROOT, {
        key: It,
        type: Oe
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: _a } = k;
        _a && p && _a.emit("fallback", {
          type: Oe,
          key: It,
          to: "global",
          groupId: `${Oe}:${It}`
        });
      }
      return n && p ? Se(n) : yr(It);
    } else {
      if (Ln(Ut))
        return Ut;
      throw dt(ie.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Dt(...b) {
    return Ke((T) => Reflect.apply(Ma, null, [T, ...b]), () => Sr(...b), "translate", (T) => Reflect.apply(T.t, T, [...b]), (T) => T, (T) => A(T));
  }
  function rn(...b) {
    const [T, Oe, Se] = b;
    if (Se && !ne(Se))
      throw dt(ie.INVALID_ARGUMENT);
    return Dt(T, Oe, be({ resolvedMessage: !0 }, Se || {}));
  }
  function an(...b) {
    return Ke((T) => Reflect.apply(Pa, null, [T, ...b]), () => Er(...b), "datetime format", (T) => Reflect.apply(T.d, T, [...b]), () => Vn, (T) => A(T));
  }
  function sn(...b) {
    return Ke((T) => Reflect.apply(Ya, null, [T, ...b]), () => Or(...b), "number format", (T) => Reflect.apply(T.n, T, [...b]), () => Vn, (T) => A(T));
  }
  function ln(b) {
    return b.map((T) => A(T) || pe(T) || re(T) ? Fa(String(T)) : T);
  }
  const cn = {
    normalize: ln,
    interpolate: (b) => b,
    type: "vnode"
  };
  function un(...b) {
    return Ke(
      (T) => {
        let Oe;
        const Se = T;
        try {
          Se.processor = cn, Oe = Reflect.apply(Ma, null, [Se, ...b]);
        } finally {
          Se.processor = null;
        }
        return Oe;
      },
      () => Sr(...b),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (T) => T[Dr](...b),
      (T) => [Fa(T)],
      (T) => fe(T)
    );
  }
  function dn(...b) {
    return Ke(
      (T) => Reflect.apply(Ya, null, [T, ...b]),
      () => Or(...b),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (T) => T[Tr](...b),
      () => [],
      (T) => A(T) || fe(T)
    );
  }
  function Ct(...b) {
    return Ke(
      (T) => Reflect.apply(Pa, null, [T, ...b]),
      () => Er(...b),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (T) => T[Cr](...b),
      () => [],
      (T) => A(T) || fe(T)
    );
  }
  function Tt(b) {
    v = b, k.pluralRules = v;
  }
  function yt(b, T) {
    const Oe = A(T) ? T : s.value, Se = u(Oe);
    return k.messageResolver(Se, b) !== null;
  }
  function Nt(b) {
    let T = null;
    const Oe = is(k, i.value, s.value);
    for (let Se = 0; Se < Oe.length; Se++) {
      const yr = o.value[Oe[Se]] || {}, Ln = k.messageResolver(yr, b);
      if (Ln != null) {
        T = Ln;
        break;
      }
    }
    return T;
  }
  function fn(b) {
    const T = Nt(b);
    return T ?? (n ? n.tm(b) || {} : {});
  }
  function u(b) {
    return o.value[b] || {};
  }
  function l(b, T) {
    o.value[b] = T, k.messages = o.value;
  }
  function _(b, T) {
    o.value[b] = o.value[b] || {}, bn(T, o.value[b]), k.messages = o.value;
  }
  function R(b) {
    return c.value[b] || {};
  }
  function B(b, T) {
    c.value[b] = T, k.datetimeFormats = c.value, Ra(k, b, T);
  }
  function $(b, T) {
    c.value[b] = be(c.value[b] || {}, T), k.datetimeFormats = c.value, Ra(k, b, T);
  }
  function Xe(b) {
    return f.value[b] || {};
  }
  function rt(b, T) {
    f.value[b] = T, k.numberFormats = f.value, Aa(k, b, T);
  }
  function pi(b, T) {
    f.value[b] = be(f.value[b] || {}, T), k.numberFormats = f.value, Aa(k, b, T);
  }
  Va++, n && xt && (ya(n.locale, (b) => {
    a && (s.value = b, k.locale = b, hn(k, s.value, i.value));
  }), ya(n.fallbackLocale, (b) => {
    a && (i.value = b, k.fallbackLocale = b, hn(k, s.value, i.value));
  }));
  const he = {
    id: Va,
    locale: ee,
    fallbackLocale: Q,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(b) {
      a = b, b && n && (s.value = n.locale.value, i.value = n.fallbackLocale.value, hn(k, s.value, i.value));
    },
    get availableLocales() {
      return Object.keys(o.value).sort();
    },
    messages: oe,
    get modifiers() {
      return C;
    },
    get pluralRules() {
      return v || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return w;
    },
    set missingWarn(b) {
      w = b, k.missingWarn = w;
    },
    get fallbackWarn() {
      return S;
    },
    set fallbackWarn(b) {
      S = b, k.fallbackWarn = S;
    },
    get fallbackRoot() {
      return p;
    },
    set fallbackRoot(b) {
      p = b;
    },
    get fallbackFormat() {
      return M;
    },
    set fallbackFormat(b) {
      M = b, k.fallbackFormat = M;
    },
    get warnHtmlMessage() {
      return h;
    },
    set warnHtmlMessage(b) {
      h = b, k.warnHtmlMessage = b;
    },
    get escapeParameter() {
      return y;
    },
    set escapeParameter(b) {
      y = b, k.escapeParameter = b;
    },
    t: Dt,
    getLocaleMessage: u,
    setLocaleMessage: l,
    mergeLocaleMessage: _,
    getPostTranslationHandler: Re,
    setPostTranslationHandler: Wt,
    getMissingHandler: nn,
    setMissingHandler: je,
    [xo]: Tt
  };
  return he.datetimeFormats = ke, he.numberFormats = Ge, he.rt = rn, he.te = yt, he.tm = fn, he.d = an, he.n = sn, he.getDateTimeFormat = R, he.setDateTimeFormat = B, he.mergeDateTimeFormat = $, he.getNumberFormat = Xe, he.setNumberFormat = rt, he.mergeNumberFormat = pi, he[ws] = e.__injectWithOption, he[Dr] = un, he[Cr] = Ct, he[Tr] = dn, process.env.NODE_ENV !== "production" && (he[Nr] = (b) => {
    k.__v_emitter = b;
  }, he[Ir] = () => {
    k.__v_emitter = void 0;
  }), he;
}
const Kr = {
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
function Do({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, a) => r = [
    ...r,
    ...fe(a.children) ? a.children : [a]
  ], []) : t.reduce((n, r) => {
    const a = e[r];
    return a && (n[r] = a()), n;
  }, {});
}
function Ss(e) {
  return me;
}
be({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => pe(e) || !isNaN(e)
  }
}, Kr);
function Co(e) {
  return fe(e) && !A(e[0]);
}
function Es(e, t, n, r) {
  const { slots: a, attrs: s } = t;
  return () => {
    const i = { part: !0 };
    let o = {};
    e.locale && (i.locale = e.locale), A(e.format) ? i.key = e.format : ne(e.format) && (A(e.format.key) && (i.key = e.format.key), o = Object.keys(e.format).reduce((p, M) => n.includes(M) ? be({}, p, { [M]: e.format[M] }) : p, {}));
    const c = r(e.value, i, o);
    let f = [i.key];
    fe(c) ? f = c.map((p, M) => {
      const g = a[p.type], O = g ? g({ [p.type]: p.value, index: M, parts: c }) : [p.value];
      return Co(O) && (O[0].key = `${p.type}-${M}`), O;
    }) : A(c) && (f = [c]);
    const w = be({}, s), S = A(e.tag) || ne(e.tag) ? e.tag : Ss();
    return es(S, w, f);
  };
}
be({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Kr);
be({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Kr);
function Ba(e, t) {
}
const To = /* @__PURE__ */ mt("global-vue-i18n");
function $t(e = {}) {
  const t = Ur();
  if (t == null)
    throw dt(ie.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw dt(ie.NOT_INSLALLED);
  const n = No(t), r = Mo(n), a = xs(t), s = Io(e, a);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw dt(ie.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Ro(t, s, r, e);
  }
  if (s === "global")
    return So(r, e, a), r;
  if (s === "parent") {
    let c = Lo(n, t, e.__useComponent);
    return c == null && (process.env.NODE_ENV !== "production" && On(ps(it.NOT_FOUND_PARENT_SCOPE)), c = r), c;
  }
  const i = n;
  let o = i.__getInstance(t);
  if (o == null) {
    const c = be({}, e);
    "__i18n" in a && (c.__i18n = a.__i18n), r && (c.__root = r), o = Oo(c), Po(i, t, o), i.__setInstance(t, o);
  }
  return o;
}
function No(e) {
  {
    const t = wi(e.isCE ? To : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw dt(e.isCE ? ie.NOT_INSLALLED_WITH_PROVIDE : ie.UNEXPECTED_ERROR);
    return t;
  }
}
function Io(e, t) {
  return qn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Mo(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Lo(e, t, n = !1) {
  let r = null;
  const a = t.root;
  let s = t.parent;
  for (; s != null; ) {
    const i = e;
    if (e.mode === "composition")
      r = i.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const o = i.__getInstance(s);
      o != null && (r = o.__composer, n && r && !r[ws] && (r = null));
    }
    if (r != null || a === s)
      break;
    s = s.parent;
  }
  return r;
}
function Po(e, t, n) {
  let r = null;
  xi(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = ll();
      const a = n;
      a[Nr] && a[Nr](r), r.on("*", Ba);
    }
  }, t), Si(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__) {
      r && r.off("*", Ba);
      const a = n;
      a[Ir] && a[Ir](), delete t.vnode.el.__VUE_I18N__;
    }
    e.__deleteInstance(t);
  }, t);
}
function Ro(e, t, n, r = {}) {
  const a = t === "local", s = Ei(null);
  if (a && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw dt(ie.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const i = re(r.inheritLocale) ? r.inheritLocale : !0, o = ye(
    // prettier-ignore
    a && i ? n.locale.value : A(r.locale) ? r.locale : $n
  ), c = ye(
    // prettier-ignore
    a && i ? n.fallbackLocale.value : A(r.fallbackLocale) || fe(r.fallbackLocale) || K(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : o.value
  ), f = ye(jr(o.value, r)), w = ye(K(r.datetimeFormats) ? r.datetimeFormats : { [o.value]: {} }), S = ye(K(r.numberFormats) ? r.numberFormats : { [o.value]: {} }), p = a ? n.missingWarn : re(r.missingWarn) || qt(r.missingWarn) ? r.missingWarn : !0, M = a ? n.fallbackWarn : re(r.fallbackWarn) || qt(r.fallbackWarn) ? r.fallbackWarn : !0, g = a ? n.fallbackRoot : re(r.fallbackRoot) ? r.fallbackRoot : !0, O = !!r.fallbackFormat, d = ge(r.missing) ? r.missing : null, h = ge(r.postTranslation) ? r.postTranslation : null, y = a ? n.warnHtmlMessage : re(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, C = !!r.escapeParameter, v = a ? n.modifiers : K(r.modifiers) ? r.modifiers : {}, k = r.pluralRules || a && n.pluralRules;
  function L() {
    return [
      o.value,
      c.value,
      f.value,
      w.value,
      S.value
    ];
  }
  const P = Je({
    get: () => s.value ? s.value.locale.value : o.value,
    set: (l) => {
      s.value && (s.value.locale.value = l), o.value = l;
    }
  }), ee = Je({
    get: () => s.value ? s.value.fallbackLocale.value : c.value,
    set: (l) => {
      s.value && (s.value.fallbackLocale.value = l), c.value = l;
    }
  }), Q = Je(() => s.value ? s.value.messages.value : f.value), oe = Je(() => w.value), ke = Je(() => S.value);
  function Ge() {
    return s.value ? s.value.getPostTranslationHandler() : h;
  }
  function Re(l) {
    s.value && s.value.setPostTranslationHandler(l);
  }
  function Wt() {
    return s.value ? s.value.getMissingHandler() : d;
  }
  function nn(l) {
    s.value && s.value.setMissingHandler(l);
  }
  function je(l) {
    return L(), l();
  }
  function Vt(...l) {
    return s.value ? je(() => Reflect.apply(s.value.t, null, [...l])) : je(() => "");
  }
  function Ke(...l) {
    return s.value ? Reflect.apply(s.value.rt, null, [...l]) : "";
  }
  function Dt(...l) {
    return s.value ? je(() => Reflect.apply(s.value.d, null, [...l])) : je(() => "");
  }
  function rn(...l) {
    return s.value ? je(() => Reflect.apply(s.value.n, null, [...l])) : je(() => "");
  }
  function an(l) {
    return s.value ? s.value.tm(l) : {};
  }
  function sn(l, _) {
    return s.value ? s.value.te(l, _) : !1;
  }
  function ln(l) {
    return s.value ? s.value.getLocaleMessage(l) : {};
  }
  function on(l, _) {
    s.value && (s.value.setLocaleMessage(l, _), f.value[l] = _);
  }
  function cn(l, _) {
    s.value && s.value.mergeLocaleMessage(l, _);
  }
  function un(l) {
    return s.value ? s.value.getDateTimeFormat(l) : {};
  }
  function dn(l, _) {
    s.value && (s.value.setDateTimeFormat(l, _), w.value[l] = _);
  }
  function Ct(l, _) {
    s.value && s.value.mergeDateTimeFormat(l, _);
  }
  function Tt(l) {
    return s.value ? s.value.getNumberFormat(l) : {};
  }
  function yt(l, _) {
    s.value && (s.value.setNumberFormat(l, _), S.value[l] = _);
  }
  function Nt(l, _) {
    s.value && s.value.mergeNumberFormat(l, _);
  }
  const fn = {
    get id() {
      return s.value ? s.value.id : -1;
    },
    locale: P,
    fallbackLocale: ee,
    messages: Q,
    datetimeFormats: oe,
    numberFormats: ke,
    get inheritLocale() {
      return s.value ? s.value.inheritLocale : i;
    },
    set inheritLocale(l) {
      s.value && (s.value.inheritLocale = l);
    },
    get availableLocales() {
      return s.value ? s.value.availableLocales : Object.keys(f.value);
    },
    get modifiers() {
      return s.value ? s.value.modifiers : v;
    },
    get pluralRules() {
      return s.value ? s.value.pluralRules : k;
    },
    get isGlobal() {
      return s.value ? s.value.isGlobal : !1;
    },
    get missingWarn() {
      return s.value ? s.value.missingWarn : p;
    },
    set missingWarn(l) {
      s.value && (s.value.missingWarn = l);
    },
    get fallbackWarn() {
      return s.value ? s.value.fallbackWarn : M;
    },
    set fallbackWarn(l) {
      s.value && (s.value.missingWarn = l);
    },
    get fallbackRoot() {
      return s.value ? s.value.fallbackRoot : g;
    },
    set fallbackRoot(l) {
      s.value && (s.value.fallbackRoot = l);
    },
    get fallbackFormat() {
      return s.value ? s.value.fallbackFormat : O;
    },
    set fallbackFormat(l) {
      s.value && (s.value.fallbackFormat = l);
    },
    get warnHtmlMessage() {
      return s.value ? s.value.warnHtmlMessage : y;
    },
    set warnHtmlMessage(l) {
      s.value && (s.value.warnHtmlMessage = l);
    },
    get escapeParameter() {
      return s.value ? s.value.escapeParameter : C;
    },
    set escapeParameter(l) {
      s.value && (s.value.escapeParameter = l);
    },
    t: Vt,
    getPostTranslationHandler: Ge,
    setPostTranslationHandler: Re,
    getMissingHandler: Wt,
    setMissingHandler: nn,
    rt: Ke,
    d: Dt,
    n: rn,
    tm: an,
    te: sn,
    getLocaleMessage: ln,
    setLocaleMessage: on,
    mergeLocaleMessage: cn,
    getDateTimeFormat: un,
    setDateTimeFormat: dn,
    mergeDateTimeFormat: Ct,
    getNumberFormat: Tt,
    setNumberFormat: yt,
    mergeNumberFormat: Nt
  };
  function u(l) {
    l.locale.value = o.value, l.fallbackLocale.value = c.value, Object.keys(f.value).forEach((_) => {
      l.mergeLocaleMessage(_, f.value[_]);
    }), Object.keys(w.value).forEach((_) => {
      l.mergeDateTimeFormat(_, w.value[_]);
    }), Object.keys(S.value).forEach((_) => {
      l.mergeNumberFormat(_, S.value[_]);
    }), l.escapeParameter = C, l.fallbackFormat = O, l.fallbackRoot = g, l.fallbackWarn = M, l.missingWarn = p, l.warnHtmlMessage = y;
  }
  return Oi(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw dt(ie.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const l = s.value = e.proxy.$i18n.__composer;
    t === "global" ? (o.value = l.locale.value, c.value = l.fallbackLocale.value, f.value = l.messages.value, w.value = l.datetimeFormats.value, S.value = l.numberFormats.value) : a && u(l);
  }), fn;
}
no(ho);
ro(Al);
ao(is);
po();
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = yn();
  e.__INTLIFY__ = !0, jl(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Yo = {
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
    PawIcon: et
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
}, Ao = ["title"];
function Fo(e, t, n, r, a, s) {
  const i = ue("PawIcon");
  return m(), x("button", {
    class: D(["flex items-center group max-w-full my-0", s.setClassNames()]),
    title: n.title,
    onClick: t[0] || (t[0] = (...o) => s.click && s.click(...o))
  }, [
    n.icon ? (m(), X(i, {
      key: 0,
      size: n.compact ? "sm" : n.size,
      outlined: n.outlined,
      class: D(s.setIconClassNames())
    }, {
      default: H(() => [
        z(V(n.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : N("", !0),
    a.hasSlot ? (m(), x("span", {
      key: 1,
      class: D(["truncate transition", s.setTextClassNames()])
    }, [
      He(e.$slots, "default")
    ], 2)) : N("", !0)
  ], 10, Ao);
}
const Os = /* @__PURE__ */ Te(Yo, [["render", Fo]]), Wo = {
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
}, Vo = ["title"], Uo = { class: "block w-5 h-5 m-0.5 shrink-0 self-start pointer-events-none" }, Bo = ["checked", "disabled"], Ho = /* @__PURE__ */ F("label", { class: "block w-5 h-5 border-2 peer-checked:border-6 peer-checked:bg-white dark:peer-checked:peer-disabled:bg-gray-500 border-gray-400 peer-checked:border-action-500 dark:peer-checked:border-action-400 peer-disabled:border-gray-200 dark:peer-disabled:border-gray-600 rounded-full transition" }, null, -1);
function zo(e, t, n, r, a, s) {
  return m(), x("label", {
    class: D(["inline-flex items-center max-w-full", {
      "cursor-pointer": !n.disabled,
      "pointer-events-none": n.disabled,
      "gap-1": n.size === "sm",
      "gap-2 p-1": n.size === "md",
      "gap-3 p-2": n.size === "lg"
    }]),
    title: n.title
  }, [
    F("span", Uo, [
      F("input", {
        type: "radio",
        onChange: t[0] || (t[0] = (...i) => s.change && s.change(...i)),
        checked: n.checked,
        disabled: n.disabled,
        class: "peer hidden"
      }, null, 40, Bo),
      Ho
    ]),
    e.$slots.default ? (m(), x("span", {
      key: 0,
      class: D(["text-md truncate transition", n.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"])
    }, [
      He(e.$slots, "default")
    ], 2)) : N("", !0)
  ], 10, Vo);
}
const Go = /* @__PURE__ */ Te(Wo, [["render", zo]]), jo = 5, Ko = {
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
      return this.loadingResults ? jo : (e = this.data) != null && e.length ? this.data : this.loadingCancelled ? [
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
      default: 3
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
    PawIcon: et,
    PawLink: Os,
    PawCheckbox: rs,
    PawRadio: Go,
    PawChip: Qi,
    PawButton: Xn
  },
  setup() {
    const { t: e } = $t({
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
      document.addEventListener(r, function a(s) {
        if (!(s.target instanceof Element))
          return document.removeEventListener(r, a), !1;
        e !== s.target && !e.contains(s.target) && !Array.from(n).includes(s.target) && t(s) !== !1 && document.removeEventListener(r, a);
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
}, Xo = {
  key: 0,
  class: "flex flex-row"
}, Zo = {
  key: 0,
  class: "max-w-[80px] h-3.5 mr-1 bg-gray-400 loading-bubble"
}, qo = {
  key: 1,
  class: "max-w-[48px] h-3.5 ml-auto bg-gray-400 loading-bubble"
}, Jo = /* @__PURE__ */ F("span", { class: "bg-gray-400 loading-bubble max-w-[24px] w-full h-2" }, null, -1), Qo = /* @__PURE__ */ F("span", { class: "bg-gray-400 loading-bubble w-4 h-4" }, null, -1), $o = [
  Jo,
  Qo
], ec = {
  key: 1,
  class: "ml-2 mt-1"
}, tc = {
  key: 0,
  class: "max-w-[120px] h-2 bg-gray-400 mb-2 loading-bubble"
}, nc = {
  key: 1,
  class: "max-w-[120px] h-2 bg-warning-400 mb-2 loading-bubble"
}, rc = {
  key: 2,
  class: "max-w-[120px] h-2 bg-danger-500 dark:bg-danger-400 loading-bubble"
}, ac = {
  key: 0,
  class: "flex flex-row"
}, sc = ["title"], ic = ["data-content"], lc = ["placeholder", "readonly", "tabindex"], oc = ["type", "placeholder", "readonly", "tabindex"], cc = ["onMouseover"], uc = {
  key: 0,
  class: "flex justify-center py-2 bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-b-md shadow-box dark:shadow-box-dark"
}, dc = {
  key: 3,
  class: "ml-2"
}, fc = {
  key: 0,
  class: "prose-xs element-text italic text-gray-500 transition"
}, hc = {
  key: 1,
  class: "prose-xs element-text italic text-warning-500 transition"
}, mc = {
  key: 2,
  class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition"
};
function gc(e, t, n, r, a, s) {
  var M, g, O;
  const i = ue("PawIcon"), o = ue("PawCheckbox"), c = ue("PawRadio"), f = ue("PawChip"), w = ue("PawLink"), S = ue("PawCrazyInput"), p = ue("PawButton");
  return m(), x("div", {
    class: D(["relative flex", [
      {
        "gap-1": !n.readonly,
        "mb-44": this.dropdownWrap
      },
      `flex-${this.flexDir}`
    ]]),
    ref: "crazyInput"
  }, [
    n.loading ? (m(), x(me, { key: 0 }, [
      n.label || n.info ? (m(), x("div", Xo, [
        n.label ? (m(), x("label", Zo)) : N("", !0),
        n.info ? (m(), x("span", qo)) : N("", !0)
      ])) : N("", !0),
      F("div", {
        class: D(["flex flex-row items-center justify-between", [n.readonly ? "gap-3" : "gap-1"]])
      }, [
        n.readonly && (n.contextIcon || n.contextControl) ? (m(), x("div", {
          key: 0,
          class: D(["w-4 h-4 bg-gray-400 shrink-0 loading-bubble", [
            n.contextPosition === "top" && n.multiline ? "self-start" : "",
            n.contextPosition === "center" && n.multiline ? "self-center" : "",
            n.contextPosition === "bottom" && n.multiline ? "self-end" : ""
          ]])
        }, null, 2)) : N("", !0),
        F("div", {
          class: D(["bg-gray-400 loading-bubble mr-auto", [
            n.readonly ? n.multiline ? "h-8" : s.setLoaderMaxWidth() + " h-2" : n.multiline ? "h-24" : "h-[34px]"
          ]])
        }, null, 2),
        n.readonly ? (m(), x(me, { key: 1 }, [
          n.extraLabel || n.extraIcon ? (m(), x("div", {
            key: 0,
            class: D(["flex flex-row items-center shrink-0 gap-3 w-full max-w-[52px] py-1", [
              n.extraPosition === "top" && n.multiline ? "self-start" : "",
              n.extraPosition === "center" && n.multiline ? "self-center" : "",
              n.extraPosition === "bottom" && n.multiline ? "self-end" : ""
            ]])
          }, $o, 2)) : N("", !0)
        ], 64)) : N("", !0)
      ], 2),
      n.notification || n.warning || n.error ? (m(), x("div", ec, [
        n.notification ? (m(), x("div", tc)) : N("", !0),
        n.warning ? (m(), x("div", nc)) : N("", !0),
        n.error ? (m(), x("div", rc)) : N("", !0)
      ])) : N("", !0)
    ], 64)) : (m(), x(me, { key: 1 }, [
      n.label || n.info ? (m(), x("div", ac, [
        n.label ? (m(), x("label", {
          key: 0,
          onClick: t[0] || (t[0] = (...d) => s.focusTextInput && s.focusTextInput(...d)),
          class: "prose-xs element-text text-xs uppercase text-gray-500 cursor-pointer transition"
        }, V(n.label), 1)) : N("", !0),
        n.info ? (m(), x("span", {
          key: 1,
          class: "ml-auto prose-xs element-text uppercase text-gray-500 cursor-help transition",
          title: n.title
        }, V(n.info), 9, sc)) : N("", !0)
      ])) : N("", !0),
      F("div", {
        class: D(["flex flex-row items-center", s.setContainerClassNames()]),
        onClick: t[13] || (t[13] = (...d) => s.click && s.click(...d))
      }, [
        n.contextIcon ? (m(), X(i, {
          key: 0,
          onClick: s.focusTextInput,
          size: "sm",
          outlined: n.contextIconOutlined,
          class: D(["text-gray-400 my-1 cursor-pointer", {
            "self-start": n.contextPosition === "top",
            "self-center": n.contextPosition === "center",
            "self-end": n.contextPosition === "bottom"
          }])
        }, {
          default: H(() => [
            z(V(n.contextIcon), 1)
          ]),
          _: 1
        }, 8, ["onClick", "outlined", "class"])) : n.contextControl === "checkbox" ? (m(), X(o, {
          key: 1,
          ref: "checkbox",
          onClick: s.focusTextInput,
          onChanged: s.change,
          size: "sm",
          class: D(["py-1", {
            "self-start": n.contextPosition === "top",
            "self-center": n.contextPosition === "center",
            "self-end": n.contextPosition === "bottom",
            "pointer-events-none": n.readonly
          }]),
          checked: n.contextChecked,
          disabled: n.contextDisabled
        }, null, 8, ["onClick", "onChanged", "class", "checked", "disabled"])) : n.contextControl === "radio" ? (m(), X(c, {
          key: 2,
          ref: "radio",
          onClick: s.focusTextInput,
          onChanged: s.change,
          size: "sm",
          class: D(["py-1", {
            "self-start": n.contextPosition === "top",
            "self-center": n.contextPosition === "center",
            "self-end": n.contextPosition === "bottom",
            "pointer-events-none": n.readonly
          }]),
          checked: n.contextChecked,
          disabled: n.contextDisabled
        }, null, 8, ["onClick", "onChanged", "class", "checked", "disabled"])) : N("", !0),
        F("div", {
          class: D(["w-full min-w-0 flex flex-wrap", {
            "cursor-pointer": !((M = n.item) != null && M.unselectable)
          }]),
          onClick: t[11] || (t[11] = (...d) => s.focusTextInput && s.focusTextInput(...d))
        }, [
          (m(!0), x(me, null, Ye(a.chips.slice(0, n.maxChips), (d) => (m(), X(f, {
            key: d.id,
            onClicked: (h) => s.removeChip(d),
            size: "sm",
            icon: n.chipIcon,
            title: this.t("removeItem"),
            class: "shrink align-top justify-self-start ml-1 mt-1"
          }, {
            default: H(() => [
              z(V(d.value), 1)
            ]),
            _: 2
          }, 1032, ["onClicked", "icon", "title"]))), 128)),
          a.chips.length > n.maxChips ? (m(), X(f, {
            key: 0,
            size: "sm",
            icon: n.chipIcon,
            class: "shrink align-top justify-self-start ml-1 mt-1"
          }, {
            default: H(() => [
              z("...")
            ]),
            _: 1
          }, 8, ["icon"])) : N("", !0),
          F("span", {
            class: D([
              n.multiline ? "min-h-[32px] before:content_ before:py-1.5 before:pl-2 before:pr-3 before:row-start-1 before:col-start-1 before:prose-md before:element-text before:invisible before:whitespace-pre-wrap" : "h-8",
              n.multiline ? "inline-grid" : "",
              n.multiselect ? "basis-20 grow" : "w-full"
            ]),
            "data-content": n.multiline ? a.inputValue : ""
          }, [
            n.multiline ? vt((m(), x("textarea", {
              key: 0,
              "onUpdate:modelValue": t[1] || (t[1] = (d) => a.inputValue = d),
              ref: "textInput",
              class: D(["row-start-1 col-start-1 rounded-md break-words input-reset text-gray-900 dark:text-white transition", [
                n.extraLabel || n.extraIcon || n.readonly ? "pr-3" : "pr-2.25",
                n.readonly ? "cursor-pointer" : ""
              ]]),
              onInput: t[2] || (t[2] = (d) => {
                s.resize(d), s.type();
              }),
              onFocus: t[3] || (t[3] = (d) => s.outlineContainer(!0)),
              onBlur: t[4] || (t[4] = (d) => s.outlineContainer(!1)),
              onKeydown: t[5] || (t[5] = (d) => s.keyDown(d, n.item)),
              rows: "1",
              placeholder: n.placeholder,
              readonly: n.readonly,
              tabindex: n.readonly && !n.isOpen || (g = n.item) != null && g.unselectable ? -1 : null
            }, null, 42, lc)), [
              [ts, a.inputValue]
            ]) : vt((m(), x("input", {
              key: 1,
              type: n.secret ? "password" : "text",
              "onUpdate:modelValue": t[6] || (t[6] = (d) => a.inputValue = d),
              ref: "textInput",
              onInput: t[7] || (t[7] = (...d) => s.type && s.type(...d)),
              onFocus: t[8] || (t[8] = (d) => s.outlineContainer(!0)),
              onBlur: t[9] || (t[9] = (d) => s.outlineContainer(!1)),
              onKeydown: t[10] || (t[10] = (d) => s.keyDown(d, n.item)),
              class: D(["rounded-md input-reset text-gray-900 dark:text-white transition", {
                truncate: !n.multiline,
                "pr-3": n.extraLabel || n.extraIcon || n.readonly,
                "pointer-events-none selection:bg-transparent": n.readonly
              }]),
              placeholder: n.placeholder,
              readonly: n.readonly,
              tabindex: n.readonly && !n.isOpen || (O = n.item) != null && O.unselectable ? -1 : null
            }, null, 42, oc)), [
              [Ci, a.inputValue]
            ])
          ], 10, ic)
        ], 2),
        n.extraLabel || n.extraIcon || n.data ? (m(), x("span", {
          key: 3,
          class: D(["flex flex-row shrink-0 items-center py-1", {
            "self-start": n.extraPosition === "top",
            "self-center": n.extraPosition === "center",
            "self-end": n.extraPosition === "bottom"
          }])
        }, [
          n.extraLabel ? (m(), x("span", {
            key: 0,
            class: "mr-1 text-xs text-gray-400 cursor-pointer",
            onClick: t[12] || (t[12] = (...d) => s.focusTextInput && s.focusTextInput(...d))
          }, V(n.extraLabel), 1)) : N("", !0),
          n.extraIcon ? (m(), X(i, {
            key: 1,
            onClick: s.focusTextInput,
            size: "sm",
            class: D(["text-gray-400 opacity-100 cursor-pointer transition", {
              "opacity-0": a.showingResults
            }]),
            outlined: n.extraIconOutlined
          }, {
            default: H(() => [
              z(V(n.extraIcon), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class", "outlined"])) : N("", !0),
          n.data ? vt((m(), X(w, {
            key: 2,
            onClicked: s.closeAction,
            class: D([[
              a.showingResults || a.inputValue ? "opacity-100" : "opacity-0 pointer-events-none"
            ], "transition"]),
            size: "sm",
            icon: n.select ? "close" : n.multiselect ? a.showingResults ? "unfold_less" : "unfold_more" : "",
            tabindex: a.showingResults ? null : -1
          }, null, 8, ["onClicked", "class", "icon", "tabindex"])), [
            [_n, a.showingResults || a.inputValue || !n.extraLabel && !n.extraIcon]
          ]) : N("", !0)
        ], 2)) : N("", !0)
      ], 2),
      n.data ? (m(), x("div", {
        key: 1,
        class: D([{
          "opacity-100": a.showingResults
        }, "absolute z-20 opacity-0 bottom-1 w-full translate-y-full h-1 border-x border-gray-200 dark:border-gray-600 bg-gray-200 dark:bg-gray-600 transition"])
      }, null, 2)) : N("", !0),
      n.data ? (m(), x("div", {
        key: 2,
        class: D([[
          a.showingResults ? "opacity-100" : "opacity-0 pointer-events-none"
        ], "absolute z-10 bottom-0 w-full max-h-[181px] translate-y-full rounded-md rounded-t-none transition"])
      }, [
        F("div", {
          class: D(["max-h-[inherit] overflow-y-auto border-gray-300 dark:border-gray-700 shadow-box dark:shadow-box-dark", n.addLabel ? "rounded-b-none" : "rounded-b-md"])
        }, [
          (m(!0), x(me, null, Ye(s.dropdownItems, (d) => (m(), x("div", {
            key: d,
            onMouseover: (h) => s.optionHovered(d),
            class: D(["transition", [
              !d.unselectable && !a.loadingResults ? "hover:bg-white dark:hover:bg-gray-800 cursor-pointer" : "",
              d.id === a.itemIdFocused && !d.unselectable && !a.loadingResults ? "bg-white dark:bg-gray-800" : "bg-gray-100 dark:bg-gray-700"
            ]])
          }, [
            ce(S, {
              class: D({
                "p-2 gap-1": a.loadingResults
              }),
              ref_for: !0,
              ref: `OPTION-${s.getOptionId(d)}`,
              onClick: (h) => s.confirmSelection(d),
              onChanged: (h) => d.unselectable ? null : s.itemSelected(d, h),
              onOptionFocused: (h, y) => d.unselectable ? null : s.focusChange(h, y),
              onOptionSelected: (h, y) => d.unselectable ? null : s.itemSelected(h, y),
              onOptionMoved: (h, y) => d.unselectable ? null : s.moveOption(h, y),
              onOptionTyped: t[14] || (t[14] = (h) => s.optionTyped(h)),
              onDropdownClosed: (h) => d.unselectable ? null : s.closeDropdown(),
              "context-control": d.unselectable ? null : n.select ? "radio" : n.multiselect ? "checkbox" : null,
              "context-checked": d.unselectable ? null : s.isItemChecked(d),
              "context-disabled": d.unselectable ? null : d.disabled,
              "context-position": d.unselectable ? n.contextPosition : d.contextPosition,
              "extra-label": a.loadingResults ? n.extraLabel : d.extraLabel,
              "extra-icon": a.loadingResults ? n.extraIcon : d.extraIcon,
              "extra-icon-outlined": d.extraIconOutlined,
              "extra-position": d.extraPosition,
              multiline: a.loadingResults ? n.multiline : d.multiline,
              "is-open": a.showingResults,
              item: d,
              loading: a.loadingResults,
              readonly: ""
            }, {
              default: H(() => [
                z(V(d.value), 1)
              ]),
              _: 2
            }, 1032, ["class", "onClick", "onChanged", "onOptionFocused", "onOptionSelected", "onOptionMoved", "onDropdownClosed", "context-control", "context-checked", "context-disabled", "context-position", "extra-label", "extra-icon", "extra-icon-outlined", "extra-position", "multiline", "is-open", "item", "loading"])
          ], 42, cc))), 128))
        ], 2),
        n.addLabel && !a.loadingResults ? (m(), x("div", uc, [
          ce(p, {
            size: n.addButtonSize,
            icon: n.addIcon,
            onClicked: s.add
          }, {
            default: H(() => [
              z(V(n.addLabel), 1)
            ]),
            _: 1
          }, 8, ["size", "icon", "onClicked"])
        ])) : N("", !0)
      ], 2)) : N("", !0),
      n.notification || n.warning || n.error ? (m(), x("div", dc, [
        n.notification ? (m(), x("div", fc, V(n.notification), 1)) : N("", !0),
        n.warning ? (m(), x("div", hc, V(n.warning), 1)) : N("", !0),
        n.error ? (m(), x("div", mc, V(n.error), 1)) : N("", !0)
      ])) : N("", !0)
    ], 64))
  ], 2);
}
const _c = /* @__PURE__ */ Te(Ko, [["render", gc]]);
var Ha = globalThis && globalThis.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, s; r < a; r++)
      (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}, yc = (
  /** @class */
  function() {
    function e(t, n, r) {
      this.name = t, this.version = n, this.os = r, this.type = "browser";
    }
    return e;
  }()
), bc = (
  /** @class */
  function() {
    function e(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return e;
  }()
), kc = (
  /** @class */
  function() {
    function e(t, n, r, a) {
      this.name = t, this.version = n, this.os = r, this.bot = a, this.type = "bot-device";
    }
    return e;
  }()
), pc = (
  /** @class */
  function() {
    function e() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return e;
  }()
), vc = (
  /** @class */
  function() {
    function e() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return e;
  }()
), wc = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, xc = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, za = 3, Sc = [
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
  ["searchbot", wc]
], Ga = [
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
function Ec(e) {
  return e ? ja(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new vc() : typeof navigator < "u" ? ja(navigator.userAgent) : Cc();
}
function Oc(e) {
  return e !== "" && Sc.reduce(function(t, n) {
    var r = n[0], a = n[1];
    if (t)
      return t;
    var s = a.exec(e);
    return !!s && [r, s];
  }, !1);
}
function ja(e) {
  var t = Oc(e);
  if (!t)
    return null;
  var n = t[0], r = t[1];
  if (n === "searchbot")
    return new pc();
  var a = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
  a ? a.length < za && (a = Ha(Ha([], a, !0), Tc(za - a.length), !0)) : a = [];
  var s = a.join("."), i = Dc(e), o = xc.exec(e);
  return o && o[1] ? new kc(n, s, i, o[1]) : new yc(n, s, i);
}
function Dc(e) {
  for (var t = 0, n = Ga.length; t < n; t++) {
    var r = Ga[t], a = r[0], s = r[1], i = s.exec(e);
    if (i)
      return a;
  }
  return null;
}
function Cc() {
  var e = typeof process < "u" && process.version;
  return e ? new bc(process.version.slice(1)) : null;
}
function Tc(e) {
  for (var t = [], n = 0; n < e; n++)
    t.push("0");
  return t;
}
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ds;
function I() {
  return Ds.apply(null, arguments);
}
function Nc(e) {
  Ds = e;
}
function Ue(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Yt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function q(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Xr(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (q(e, t))
      return !1;
  return !0;
}
function Ce(e) {
  return e === void 0;
}
function ht(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Dn(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Cs(e, t) {
  var n = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    n.push(t(e[r], r));
  return n;
}
function kt(e, t) {
  for (var n in t)
    q(t, n) && (e[n] = t[n]);
  return q(t, "toString") && (e.toString = t.toString), q(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function tt(e, t, n, r) {
  return Qs(e, t, n, r, !0).utc();
}
function Ic() {
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
function G(e) {
  return e._pf == null && (e._pf = Ic()), e._pf;
}
var Lr;
Array.prototype.some ? Lr = Array.prototype.some : Lr = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Zr(e) {
  if (e._isValid == null) {
    var t = G(e), n = Lr.call(t.parsedDateParts, function(a) {
      return a != null;
    }), r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
    if (e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = r;
    else
      return r;
  }
  return e._isValid;
}
function tr(e) {
  var t = tt(NaN);
  return e != null ? kt(G(t), e) : G(t).userInvalidated = !0, t;
}
var Ka = I.momentProperties = [], kr = !1;
function qr(e, t) {
  var n, r, a, s = Ka.length;
  if (Ce(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Ce(t._i) || (e._i = t._i), Ce(t._f) || (e._f = t._f), Ce(t._l) || (e._l = t._l), Ce(t._strict) || (e._strict = t._strict), Ce(t._tzm) || (e._tzm = t._tzm), Ce(t._isUTC) || (e._isUTC = t._isUTC), Ce(t._offset) || (e._offset = t._offset), Ce(t._pf) || (e._pf = G(t)), Ce(t._locale) || (e._locale = t._locale), s > 0)
    for (n = 0; n < s; n++)
      r = Ka[n], a = t[r], Ce(a) || (e[r] = a);
  return e;
}
function Cn(e) {
  qr(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), kr === !1 && (kr = !0, I.updateOffset(this), kr = !1);
}
function Be(e) {
  return e instanceof Cn || e != null && e._isAMomentObject != null;
}
function Ts(e) {
  I.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Fe(e, t) {
  var n = !0;
  return kt(function() {
    if (I.deprecationHandler != null && I.deprecationHandler(null, e), n) {
      var r = [], a, s, i, o = arguments.length;
      for (s = 0; s < o; s++) {
        if (a = "", typeof arguments[s] == "object") {
          a += `
[` + s + "] ";
          for (i in arguments[0])
            q(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[s];
        r.push(a);
      }
      Ts(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Xa = {};
function Ns(e, t) {
  I.deprecationHandler != null && I.deprecationHandler(e, t), Xa[e] || (Ts(t), Xa[e] = !0);
}
I.suppressDeprecationWarnings = !1;
I.deprecationHandler = null;
function nt(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Mc(e) {
  var t, n;
  for (n in e)
    q(e, n) && (t = e[n], nt(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Pr(e, t) {
  var n = kt({}, e), r;
  for (r in t)
    q(t, r) && (Yt(e[r]) && Yt(t[r]) ? (n[r] = {}, kt(n[r], e[r]), kt(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    q(e, r) && !q(t, r) && Yt(e[r]) && (n[r] = kt({}, n[r]));
  return n;
}
function Jr(e) {
  e != null && this.set(e);
}
var Rr;
Object.keys ? Rr = Object.keys : Rr = function(e) {
  var t, n = [];
  for (t in e)
    q(e, t) && n.push(t);
  return n;
};
var Lc = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Pc(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return nt(r) ? r.call(t, n) : r;
}
function $e(e, t, n) {
  var r = "" + Math.abs(e), a = t - r.length, s = e >= 0;
  return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var Qr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Rn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, pr = {}, Kt = {};
function W(e, t, n, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (Kt[e] = a), t && (Kt[t[0]] = function() {
    return $e(a.apply(this, arguments), t[1], t[2]);
  }), n && (Kt[n] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function Rc(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Yc(e) {
  var t = e.match(Qr), n, r;
  for (n = 0, r = t.length; n < r; n++)
    Kt[t[n]] ? t[n] = Kt[t[n]] : t[n] = Rc(t[n]);
  return function(a) {
    var s = "", i;
    for (i = 0; i < r; i++)
      s += nt(t[i]) ? t[i].call(a, e) : t[i];
    return s;
  };
}
function An(e, t) {
  return e.isValid() ? (t = Is(t, e.localeData()), pr[t] = pr[t] || Yc(t), pr[t](e)) : e.localeData().invalidDate();
}
function Is(e, t) {
  var n = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (Rn.lastIndex = 0; n >= 0 && Rn.test(e); )
    e = e.replace(
      Rn,
      r
    ), Rn.lastIndex = 0, n -= 1;
  return e;
}
var Ac = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Fc(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(Qr).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var Wc = "Invalid date";
function Vc() {
  return this._invalidDate;
}
var Uc = "%d", Bc = /\d{1,2}/;
function Hc(e) {
  return this._ordinal.replace("%d", e);
}
var zc = {
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
function Gc(e, t, n, r) {
  var a = this._relativeTime[n];
  return nt(a) ? a(e, t, n, r) : a.replace(/%d/i, e);
}
function jc(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return nt(n) ? n(t) : n.replace(/%s/i, t);
}
var kn = {};
function we(e, t) {
  var n = e.toLowerCase();
  kn[n] = kn[n + "s"] = kn[t] = e;
}
function We(e) {
  return typeof e == "string" ? kn[e] || kn[e.toLowerCase()] : void 0;
}
function $r(e) {
  var t = {}, n, r;
  for (r in e)
    q(e, r) && (n = We(r), n && (t[n] = e[r]));
  return t;
}
var Ms = {};
function xe(e, t) {
  Ms[e] = t;
}
function Kc(e) {
  var t = [], n;
  for (n in e)
    q(e, n) && t.push({ unit: n, priority: Ms[n] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
function nr(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function Ae(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function j(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = Ae(t)), n;
}
function en(e, t) {
  return function(n) {
    return n != null ? (Ls(this, e, n), I.updateOffset(this, t), this) : Un(this, e);
  };
}
function Un(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Ls(e, t, n) {
  e.isValid() && !isNaN(n) && (t === "FullYear" && nr(e.year()) && e.month() === 1 && e.date() === 29 ? (n = j(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    n,
    e.month(),
    or(n, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
}
function Xc(e) {
  return e = We(e), nt(this[e]) ? this[e]() : this;
}
function Zc(e, t) {
  if (typeof e == "object") {
    e = $r(e);
    var n = Kc(e), r, a = n.length;
    for (r = 0; r < a; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = We(e), nt(this[e]))
    return this[e](t);
  return this;
}
var Ps = /\d/, Pe = /\d\d/, Rs = /\d{3}/, ea = /\d{4}/, rr = /[+-]?\d{6}/, se = /\d\d?/, Ys = /\d\d\d\d?/, As = /\d\d\d\d\d\d?/, ar = /\d{1,3}/, ta = /\d{1,4}/, sr = /[+-]?\d{1,6}/, tn = /\d+/, ir = /[+-]?\d+/, qc = /Z|[+-]\d\d:?\d\d/gi, lr = /Z|[+-]\d\d(?::?\d\d)?/gi, Jc = /[+-]?\d+(\.\d{1,3})?/, Tn = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Bn;
Bn = {};
function Y(e, t, n) {
  Bn[e] = nt(t) ? t : function(r, a) {
    return r && n ? n : t;
  };
}
function Qc(e, t) {
  return q(Bn, e) ? Bn[e](t._strict, t._locale) : new RegExp($c(e));
}
function $c(e) {
  return Me(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, r, a, s) {
        return n || r || a || s;
      }
    )
  );
}
function Me(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Yr = {};
function te(e, t) {
  var n, r = t, a;
  for (typeof e == "string" && (e = [e]), ht(t) && (r = function(s, i) {
    i[t] = j(s);
  }), a = e.length, n = 0; n < a; n++)
    Yr[e[n]] = r;
}
function Nn(e, t) {
  te(e, function(n, r, a, s) {
    a._w = a._w || {}, t(n, a._w, a, s);
  });
}
function eu(e, t, n) {
  t != null && q(Yr, e) && Yr[e](t, n._a, n, e);
}
var ve = 0, ct = 1, Qe = 2, _e = 3, Ve = 4, ut = 5, Pt = 6, tu = 7, nu = 8;
function ru(e, t) {
  return (e % t + t) % t;
}
var de;
Array.prototype.indexOf ? de = Array.prototype.indexOf : de = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function or(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = ru(t, 12);
  return e += (t - n) / 12, n === 1 ? nr(e) ? 29 : 28 : 31 - n % 7 % 2;
}
W("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
W("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
W("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
we("month", "M");
xe("month", 8);
Y("M", se);
Y("MM", se, Pe);
Y("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
Y("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
te(["M", "MM"], function(e, t) {
  t[ct] = j(e) - 1;
});
te(["MMM", "MMMM"], function(e, t, n, r) {
  var a = n._locale.monthsParse(e, r, n._strict);
  a != null ? t[ct] = a : G(n).invalidMonth = e;
});
var au = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Fs = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Ws = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, su = Tn, iu = Tn;
function lu(e, t) {
  return e ? Ue(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ws).test(t) ? "format" : "standalone"][e.month()] : Ue(this._months) ? this._months : this._months.standalone;
}
function ou(e, t) {
  return e ? Ue(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ws.test(t) ? "format" : "standalone"][e.month()] : Ue(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function cu(e, t, n) {
  var r, a, s, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      s = tt([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        s,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (a = de.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = de.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = de.call(this._shortMonthsParse, i), a !== -1 ? a : (a = de.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = de.call(this._longMonthsParse, i), a !== -1 ? a : (a = de.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function uu(e, t, n) {
  var r, a, s;
  if (this._monthsParseExact)
    return cu.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (a = tt([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[r] && (s = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(s.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!n && this._monthsParse[r].test(e))
      return r;
  }
}
function Vs(e, t) {
  var n;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = j(t);
    else if (t = e.localeData().monthsParse(t), !ht(t))
      return e;
  }
  return n = Math.min(e.date(), or(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
}
function Us(e) {
  return e != null ? (Vs(this, e), I.updateOffset(this, !0), this) : Un(this, "Month");
}
function du() {
  return or(this.year(), this.month());
}
function fu(e) {
  return this._monthsParseExact ? (q(this, "_monthsRegex") || Bs.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (q(this, "_monthsShortRegex") || (this._monthsShortRegex = su), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function hu(e) {
  return this._monthsParseExact ? (q(this, "_monthsRegex") || Bs.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (q(this, "_monthsRegex") || (this._monthsRegex = iu), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Bs() {
  function e(i, o) {
    return o.length - i.length;
  }
  var t = [], n = [], r = [], a, s;
  for (a = 0; a < 12; a++)
    s = tt([2e3, a]), t.push(this.monthsShort(s, "")), n.push(this.months(s, "")), r.push(this.months(s, "")), r.push(this.monthsShort(s, ""));
  for (t.sort(e), n.sort(e), r.sort(e), a = 0; a < 12; a++)
    t[a] = Me(t[a]), n[a] = Me(n[a]);
  for (a = 0; a < 24; a++)
    r[a] = Me(r[a]);
  this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
W("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? $e(e, 4) : "+" + e;
});
W(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
W(0, ["YYYY", 4], 0, "year");
W(0, ["YYYYY", 5], 0, "year");
W(0, ["YYYYYY", 6, !0], 0, "year");
we("year", "y");
xe("year", 1);
Y("Y", ir);
Y("YY", se, Pe);
Y("YYYY", ta, ea);
Y("YYYYY", sr, rr);
Y("YYYYYY", sr, rr);
te(["YYYYY", "YYYYYY"], ve);
te("YYYY", function(e, t) {
  t[ve] = e.length === 2 ? I.parseTwoDigitYear(e) : j(e);
});
te("YY", function(e, t) {
  t[ve] = I.parseTwoDigitYear(e);
});
te("Y", function(e, t) {
  t[ve] = parseInt(e, 10);
});
function pn(e) {
  return nr(e) ? 366 : 365;
}
I.parseTwoDigitYear = function(e) {
  return j(e) + (j(e) > 68 ? 1900 : 2e3);
};
var Hs = en("FullYear", !0);
function mu() {
  return nr(this.year());
}
function gu(e, t, n, r, a, s, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, n, r, a, s, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, r, a, s, i), o;
}
function wn(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Hn(e, t, n) {
  var r = 7 + t - n, a = (7 + wn(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function zs(e, t, n, r, a) {
  var s = (7 + n - r) % 7, i = Hn(e, r, a), o = 1 + 7 * (t - 1) + s + i, c, f;
  return o <= 0 ? (c = e - 1, f = pn(c) + o) : o > pn(e) ? (c = e + 1, f = o - pn(e)) : (c = e, f = o), {
    year: c,
    dayOfYear: f
  };
}
function xn(e, t, n) {
  var r = Hn(e.year(), t, n), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, s, i;
  return a < 1 ? (i = e.year() - 1, s = a + ft(i, t, n)) : a > ft(e.year(), t, n) ? (s = a - ft(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a), {
    week: s,
    year: i
  };
}
function ft(e, t, n) {
  var r = Hn(e, t, n), a = Hn(e + 1, t, n);
  return (pn(e) - r + a) / 7;
}
W("w", ["ww", 2], "wo", "week");
W("W", ["WW", 2], "Wo", "isoWeek");
we("week", "w");
we("isoWeek", "W");
xe("week", 5);
xe("isoWeek", 5);
Y("w", se);
Y("ww", se, Pe);
Y("W", se);
Y("WW", se, Pe);
Nn(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = j(e);
  }
);
function _u(e) {
  return xn(e, this._week.dow, this._week.doy).week;
}
var yu = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function bu() {
  return this._week.dow;
}
function ku() {
  return this._week.doy;
}
function pu(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function vu(e) {
  var t = xn(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
W("d", 0, "do", "day");
W("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
W("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
W("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
W("e", 0, 0, "weekday");
W("E", 0, 0, "isoWeekday");
we("day", "d");
we("weekday", "e");
we("isoWeekday", "E");
xe("day", 11);
xe("weekday", 11);
xe("isoWeekday", 11);
Y("d", se);
Y("e", se);
Y("E", se);
Y("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
Y("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
Y("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Nn(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var a = n._locale.weekdaysParse(e, r, n._strict);
  a != null ? t.d = a : G(n).invalidWeekday = e;
});
Nn(["d", "e", "E"], function(e, t, n, r) {
  t[r] = j(e);
});
function wu(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function xu(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function na(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Su = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Gs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Eu = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ou = Tn, Du = Tn, Cu = Tn;
function Tu(e, t) {
  var n = Ue(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? na(n, this._week.dow) : e ? n[e.day()] : n;
}
function Nu(e) {
  return e === !0 ? na(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Iu(e) {
  return e === !0 ? na(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Mu(e, t, n) {
  var r, a, s, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      s = tt([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        s,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        s,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(s, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (a = de.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = de.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = de.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = de.call(this._weekdaysParse, i), a !== -1 || (a = de.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = de.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = de.call(this._shortWeekdaysParse, i), a !== -1 || (a = de.call(this._weekdaysParse, i), a !== -1) ? a : (a = de.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = de.call(this._minWeekdaysParse, i), a !== -1 || (a = de.call(this._weekdaysParse, i), a !== -1) ? a : (a = de.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function Lu(e, t, n) {
  var r, a, s;
  if (this._weekdaysParseExact)
    return Mu.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (a = tt([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (s = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(s.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!n && this._weekdaysParse[r].test(e))
      return r;
  }
}
function Pu(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = wu(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Ru(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Yu(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = xu(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Au(e) {
  return this._weekdaysParseExact ? (q(this, "_weekdaysRegex") || ra.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (q(this, "_weekdaysRegex") || (this._weekdaysRegex = Ou), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Fu(e) {
  return this._weekdaysParseExact ? (q(this, "_weekdaysRegex") || ra.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (q(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Du), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Wu(e) {
  return this._weekdaysParseExact ? (q(this, "_weekdaysRegex") || ra.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (q(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Cu), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function ra() {
  function e(w, S) {
    return S.length - w.length;
  }
  var t = [], n = [], r = [], a = [], s, i, o, c, f;
  for (s = 0; s < 7; s++)
    i = tt([2e3, 1]).day(s), o = Me(this.weekdaysMin(i, "")), c = Me(this.weekdaysShort(i, "")), f = Me(this.weekdays(i, "")), t.push(o), n.push(c), r.push(f), a.push(o), a.push(c), a.push(f);
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
function aa() {
  return this.hours() % 12 || 12;
}
function Vu() {
  return this.hours() || 24;
}
W("H", ["HH", 2], 0, "hour");
W("h", ["hh", 2], 0, aa);
W("k", ["kk", 2], 0, Vu);
W("hmm", 0, 0, function() {
  return "" + aa.apply(this) + $e(this.minutes(), 2);
});
W("hmmss", 0, 0, function() {
  return "" + aa.apply(this) + $e(this.minutes(), 2) + $e(this.seconds(), 2);
});
W("Hmm", 0, 0, function() {
  return "" + this.hours() + $e(this.minutes(), 2);
});
W("Hmmss", 0, 0, function() {
  return "" + this.hours() + $e(this.minutes(), 2) + $e(this.seconds(), 2);
});
function js(e, t) {
  W(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
js("a", !0);
js("A", !1);
we("hour", "h");
xe("hour", 13);
function Ks(e, t) {
  return t._meridiemParse;
}
Y("a", Ks);
Y("A", Ks);
Y("H", se);
Y("h", se);
Y("k", se);
Y("HH", se, Pe);
Y("hh", se, Pe);
Y("kk", se, Pe);
Y("hmm", Ys);
Y("hmmss", As);
Y("Hmm", Ys);
Y("Hmmss", As);
te(["H", "HH"], _e);
te(["k", "kk"], function(e, t, n) {
  var r = j(e);
  t[_e] = r === 24 ? 0 : r;
});
te(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
te(["h", "hh"], function(e, t, n) {
  t[_e] = j(e), G(n).bigHour = !0;
});
te("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[_e] = j(e.substr(0, r)), t[Ve] = j(e.substr(r)), G(n).bigHour = !0;
});
te("hmmss", function(e, t, n) {
  var r = e.length - 4, a = e.length - 2;
  t[_e] = j(e.substr(0, r)), t[Ve] = j(e.substr(r, 2)), t[ut] = j(e.substr(a)), G(n).bigHour = !0;
});
te("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[_e] = j(e.substr(0, r)), t[Ve] = j(e.substr(r));
});
te("Hmmss", function(e, t, n) {
  var r = e.length - 4, a = e.length - 2;
  t[_e] = j(e.substr(0, r)), t[Ve] = j(e.substr(r, 2)), t[ut] = j(e.substr(a));
});
function Uu(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Bu = /[ap]\.?m?\.?/i, Hu = en("Hours", !0);
function zu(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var Xs = {
  calendar: Lc,
  longDateFormat: Ac,
  invalidDate: Wc,
  ordinal: Uc,
  dayOfMonthOrdinalParse: Bc,
  relativeTime: zc,
  months: au,
  monthsShort: Fs,
  week: yu,
  weekdays: Su,
  weekdaysMin: Eu,
  weekdaysShort: Gs,
  meridiemParse: Bu
}, le = {}, mn = {}, Sn;
function Gu(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function Za(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function ju(e) {
  for (var t = 0, n, r, a, s; t < e.length; ) {
    for (s = Za(e[t]).split("-"), n = s.length, r = Za(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (a = cr(s.slice(0, n).join("-")), a)
        return a;
      if (r && r.length >= n && Gu(s, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return Sn;
}
function Ku(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function cr(e) {
  var t = null, n;
  if (le[e] === void 0 && typeof module < "u" && module && module.exports && Ku(e))
    try {
      t = Sn._abbr, n = require, n("./locale/" + e), wt(t);
    } catch {
      le[e] = null;
    }
  return le[e];
}
function wt(e, t) {
  var n;
  return e && (Ce(t) ? n = gt(e) : n = sa(e, t), n ? Sn = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Sn._abbr;
}
function sa(e, t) {
  if (t !== null) {
    var n, r = Xs;
    if (t.abbr = e, le[e] != null)
      Ns(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = le[e]._config;
    else if (t.parentLocale != null)
      if (le[t.parentLocale] != null)
        r = le[t.parentLocale]._config;
      else if (n = cr(t.parentLocale), n != null)
        r = n._config;
      else
        return mn[t.parentLocale] || (mn[t.parentLocale] = []), mn[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return le[e] = new Jr(Pr(r, t)), mn[e] && mn[e].forEach(function(a) {
      sa(a.name, a.config);
    }), wt(e), le[e];
  } else
    return delete le[e], null;
}
function Xu(e, t) {
  if (t != null) {
    var n, r, a = Xs;
    le[e] != null && le[e].parentLocale != null ? le[e].set(Pr(le[e]._config, t)) : (r = cr(e), r != null && (a = r._config), t = Pr(a, t), r == null && (t.abbr = e), n = new Jr(t), n.parentLocale = le[e], le[e] = n), wt(e);
  } else
    le[e] != null && (le[e].parentLocale != null ? (le[e] = le[e].parentLocale, e === wt() && wt(e)) : le[e] != null && delete le[e]);
  return le[e];
}
function gt(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Sn;
  if (!Ue(e)) {
    if (t = cr(e), t)
      return t;
    e = [e];
  }
  return ju(e);
}
function Zu() {
  return Rr(le);
}
function ia(e) {
  var t, n = e._a;
  return n && G(e).overflow === -2 && (t = n[ct] < 0 || n[ct] > 11 ? ct : n[Qe] < 1 || n[Qe] > or(n[ve], n[ct]) ? Qe : n[_e] < 0 || n[_e] > 24 || n[_e] === 24 && (n[Ve] !== 0 || n[ut] !== 0 || n[Pt] !== 0) ? _e : n[Ve] < 0 || n[Ve] > 59 ? Ve : n[ut] < 0 || n[ut] > 59 ? ut : n[Pt] < 0 || n[Pt] > 999 ? Pt : -1, G(e)._overflowDayOfYear && (t < ve || t > Qe) && (t = Qe), G(e)._overflowWeeks && t === -1 && (t = tu), G(e)._overflowWeekday && t === -1 && (t = nu), G(e).overflow = t), e;
}
var qu = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ju = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Qu = /Z|[+-]\d\d(?::?\d\d)?/, Yn = [
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
], vr = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], $u = /^\/?Date\((-?\d+)/i, ed = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, td = {
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
function Zs(e) {
  var t, n, r = e._i, a = qu.exec(r) || Ju.exec(r), s, i, o, c, f = Yn.length, w = vr.length;
  if (a) {
    for (G(e).iso = !0, t = 0, n = f; t < n; t++)
      if (Yn[t][1].exec(a[1])) {
        i = Yn[t][0], s = Yn[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, n = w; t < n; t++)
        if (vr[t][1].exec(a[3])) {
          o = (a[2] || " ") + vr[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!s && o != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (Qu.exec(a[4]))
        c = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (c || ""), oa(e);
  } else
    e._isValid = !1;
}
function nd(e, t, n, r, a, s) {
  var i = [
    rd(e),
    Fs.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return s && i.push(parseInt(s, 10)), i;
}
function rd(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function ad(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function sd(e, t, n) {
  if (e) {
    var r = Gs.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return G(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function id(e, t, n) {
  if (e)
    return td[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), a = r % 100, s = (r - a) / 100;
  return s * 60 + a;
}
function qs(e) {
  var t = ed.exec(ad(e._i)), n;
  if (t) {
    if (n = nd(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !sd(t[1], n, e))
      return;
    e._a = n, e._tzm = id(t[8], t[9], t[10]), e._d = wn.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), G(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function ld(e) {
  var t = $u.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Zs(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (qs(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : I.createFromInputFallback(e);
}
I.createFromInputFallback = Fe(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function zt(e, t, n) {
  return e ?? t ?? n;
}
function od(e) {
  var t = new Date(I.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function la(e) {
  var t, n, r = [], a, s, i;
  if (!e._d) {
    for (a = od(e), e._w && e._a[Qe] == null && e._a[ct] == null && cd(e), e._dayOfYear != null && (i = zt(e._a[ve], a[ve]), (e._dayOfYear > pn(i) || e._dayOfYear === 0) && (G(e)._overflowDayOfYear = !0), n = wn(i, 0, e._dayOfYear), e._a[ct] = n.getUTCMonth(), e._a[Qe] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[_e] === 24 && e._a[Ve] === 0 && e._a[ut] === 0 && e._a[Pt] === 0 && (e._nextDay = !0, e._a[_e] = 0), e._d = (e._useUTC ? wn : gu).apply(
      null,
      r
    ), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[_e] = 24), e._w && typeof e._w.d < "u" && e._w.d !== s && (G(e).weekdayMismatch = !0);
  }
}
function cd(e) {
  var t, n, r, a, s, i, o, c, f;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (s = 1, i = 4, n = zt(
    t.GG,
    e._a[ve],
    xn(ae(), 1, 4).year
  ), r = zt(t.W, 1), a = zt(t.E, 1), (a < 1 || a > 7) && (c = !0)) : (s = e._locale._week.dow, i = e._locale._week.doy, f = xn(ae(), s, i), n = zt(t.gg, e._a[ve], f.year), r = zt(t.w, f.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (c = !0)) : t.e != null ? (a = t.e + s, (t.e < 0 || t.e > 6) && (c = !0)) : a = s), r < 1 || r > ft(n, s, i) ? G(e)._overflowWeeks = !0 : c != null ? G(e)._overflowWeekday = !0 : (o = zs(n, r, a, s, i), e._a[ve] = o.year, e._dayOfYear = o.dayOfYear);
}
I.ISO_8601 = function() {
};
I.RFC_2822 = function() {
};
function oa(e) {
  if (e._f === I.ISO_8601) {
    Zs(e);
    return;
  }
  if (e._f === I.RFC_2822) {
    qs(e);
    return;
  }
  e._a = [], G(e).empty = !0;
  var t = "" + e._i, n, r, a, s, i, o = t.length, c = 0, f, w;
  for (a = Is(e._f, e._locale).match(Qr) || [], w = a.length, n = 0; n < w; n++)
    s = a[n], r = (t.match(Qc(s, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && G(e).unusedInput.push(i), t = t.slice(
      t.indexOf(r) + r.length
    ), c += r.length), Kt[s] ? (r ? G(e).empty = !1 : G(e).unusedTokens.push(s), eu(s, r, e)) : e._strict && !r && G(e).unusedTokens.push(s);
  G(e).charsLeftOver = o - c, t.length > 0 && G(e).unusedInput.push(t), e._a[_e] <= 12 && G(e).bigHour === !0 && e._a[_e] > 0 && (G(e).bigHour = void 0), G(e).parsedDateParts = e._a.slice(0), G(e).meridiem = e._meridiem, e._a[_e] = ud(
    e._locale,
    e._a[_e],
    e._meridiem
  ), f = G(e).era, f !== null && (e._a[ve] = e._locale.erasConvertYear(f, e._a[ve])), la(e), ia(e);
}
function ud(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function dd(e) {
  var t, n, r, a, s, i, o = !1, c = e._f.length;
  if (c === 0) {
    G(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < c; a++)
    s = 0, i = !1, t = qr({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], oa(t), Zr(t) && (i = !0), s += G(t).charsLeftOver, s += G(t).unusedTokens.length * 10, G(t).score = s, o ? s < r && (r = s, n = t) : (r == null || s < r || i) && (r = s, n = t, i && (o = !0));
  kt(e, n || t);
}
function fd(e) {
  if (!e._d) {
    var t = $r(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = Cs(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), la(e);
  }
}
function hd(e) {
  var t = new Cn(ia(Js(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Js(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || gt(e._l), t === null || n === void 0 && t === "" ? tr({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Be(t) ? new Cn(ia(t)) : (Dn(t) ? e._d = t : Ue(n) ? dd(e) : n ? oa(e) : md(e), Zr(e) || (e._d = null), e));
}
function md(e) {
  var t = e._i;
  Ce(t) ? e._d = new Date(I.now()) : Dn(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? ld(e) : Ue(t) ? (e._a = Cs(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), la(e)) : Yt(t) ? fd(e) : ht(t) ? e._d = new Date(t) : I.createFromInputFallback(e);
}
function Qs(e, t, n, r, a) {
  var s = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (Yt(e) && Xr(e) || Ue(e) && e.length === 0) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = a, s._l = n, s._i = e, s._f = t, s._strict = r, hd(s);
}
function ae(e, t, n, r) {
  return Qs(e, t, n, r, !1);
}
var gd = Fe(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = ae.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : tr();
  }
), _d = Fe(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = ae.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : tr();
  }
);
function $s(e, t) {
  var n, r;
  if (t.length === 1 && Ue(t[0]) && (t = t[0]), !t.length)
    return ae();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function yd() {
  var e = [].slice.call(arguments, 0);
  return $s("isBefore", e);
}
function bd() {
  var e = [].slice.call(arguments, 0);
  return $s("isAfter", e);
}
var kd = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, gn = [
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
function pd(e) {
  var t, n = !1, r, a = gn.length;
  for (t in e)
    if (q(e, t) && !(de.call(gn, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[gn[r]]) {
      if (n)
        return !1;
      parseFloat(e[gn[r]]) !== j(e[gn[r]]) && (n = !0);
    }
  return !0;
}
function vd() {
  return this._isValid;
}
function wd() {
  return ze(NaN);
}
function ur(e) {
  var t = $r(e), n = t.year || 0, r = t.quarter || 0, a = t.month || 0, s = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, c = t.minute || 0, f = t.second || 0, w = t.millisecond || 0;
  this._isValid = pd(t), this._milliseconds = +w + f * 1e3 + // 1000
  c * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +i + s * 7, this._months = +a + r * 3 + n * 12, this._data = {}, this._locale = gt(), this._bubble();
}
function Fn(e) {
  return e instanceof ur;
}
function Ar(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function xd(e, t, n) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), s = 0, i;
  for (i = 0; i < r; i++)
    (n && e[i] !== t[i] || !n && j(e[i]) !== j(t[i])) && s++;
  return s + a;
}
function ei(e, t) {
  W(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + $e(~~(n / 60), 2) + t + $e(~~n % 60, 2);
  });
}
ei("Z", ":");
ei("ZZ", "");
Y("Z", lr);
Y("ZZ", lr);
te(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = ca(lr, e);
});
var Sd = /([\+\-]|\d\d)/gi;
function ca(e, t) {
  var n = (t || "").match(e), r, a, s;
  return n === null ? null : (r = n[n.length - 1] || [], a = (r + "").match(Sd) || ["-", 0, 0], s = +(a[1] * 60) + j(a[2]), s === 0 ? 0 : a[0] === "+" ? s : -s);
}
function ua(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (Be(e) || Dn(e) ? e.valueOf() : ae(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), I.updateOffset(n, !1), n) : ae(e).local();
}
function Fr(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
I.updateOffset = function() {
};
function Ed(e, t, n) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = ca(lr, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (a = Fr(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? ri(
      this,
      ze(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, I.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : Fr(this);
}
function Od(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Dd(e) {
  return this.utcOffset(0, e);
}
function Cd(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Fr(this), "m")), this;
}
function Td() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = ca(qc, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Nd(e) {
  return this.isValid() ? (e = e ? ae(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Id() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Md() {
  if (!Ce(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return qr(e, this), e = Js(e), e._a ? (t = e._isUTC ? tt(e._a) : ae(e._a), this._isDSTShifted = this.isValid() && xd(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Ld() {
  return this.isValid() ? !this._isUTC : !1;
}
function Pd() {
  return this.isValid() ? this._isUTC : !1;
}
function ti() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Rd = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Yd = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function ze(e, t) {
  var n = e, r = null, a, s, i;
  return Fn(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : ht(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = Rd.exec(e)) ? (a = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: j(r[Qe]) * a,
    h: j(r[_e]) * a,
    m: j(r[Ve]) * a,
    s: j(r[ut]) * a,
    ms: j(Ar(r[Pt] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = Yd.exec(e)) ? (a = r[1] === "-" ? -1 : 1, n = {
    y: Mt(r[2], a),
    M: Mt(r[3], a),
    w: Mt(r[4], a),
    d: Mt(r[5], a),
    h: Mt(r[6], a),
    m: Mt(r[7], a),
    s: Mt(r[8], a)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (i = Ad(
    ae(n.from),
    ae(n.to)
  ), n = {}, n.ms = i.milliseconds, n.M = i.months), s = new ur(n), Fn(e) && q(e, "_locale") && (s._locale = e._locale), Fn(e) && q(e, "_isValid") && (s._isValid = e._isValid), s;
}
ze.fn = ur.prototype;
ze.invalid = wd;
function Mt(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function qa(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function Ad(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = ua(t, e), e.isBefore(t) ? n = qa(e, t) : (n = qa(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function ni(e, t) {
  return function(n, r) {
    var a, s;
    return r !== null && !isNaN(+r) && (Ns(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), s = n, n = r, r = s), a = ze(n, r), ri(this, a, e), this;
  };
}
function ri(e, t, n, r) {
  var a = t._milliseconds, s = Ar(t._days), i = Ar(t._months);
  e.isValid() && (r = r ?? !0, i && Vs(e, Un(e, "Month") + i * n), s && Ls(e, "Date", Un(e, "Date") + s * n), a && e._d.setTime(e._d.valueOf() + a * n), r && I.updateOffset(e, s || i));
}
var Fd = ni(1, "add"), Wd = ni(-1, "subtract");
function ai(e) {
  return typeof e == "string" || e instanceof String;
}
function Vd(e) {
  return Be(e) || Dn(e) || ai(e) || ht(e) || Bd(e) || Ud(e) || e === null || e === void 0;
}
function Ud(e) {
  var t = Yt(e) && !Xr(e), n = !1, r = [
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
  ], a, s, i = r.length;
  for (a = 0; a < i; a += 1)
    s = r[a], n = n || q(e, s);
  return t && n;
}
function Bd(e) {
  var t = Ue(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !ht(r) && ai(e);
  }).length === 0), t && n;
}
function Hd(e) {
  var t = Yt(e) && !Xr(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, s;
  for (a = 0; a < r.length; a += 1)
    s = r[a], n = n || q(e, s);
  return t && n;
}
function zd(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function Gd(e, t) {
  arguments.length === 1 && (arguments[0] ? Vd(arguments[0]) ? (e = arguments[0], t = void 0) : Hd(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || ae(), r = ua(n, this).startOf("day"), a = I.calendarFormat(this, r) || "sameElse", s = t && (nt(t[a]) ? t[a].call(this, n) : t[a]);
  return this.format(
    s || this.localeData().calendar(a, this, ae(n))
  );
}
function jd() {
  return new Cn(this);
}
function Kd(e, t) {
  var n = Be(e) ? e : ae(e);
  return this.isValid() && n.isValid() ? (t = We(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Xd(e, t) {
  var n = Be(e) ? e : ae(e);
  return this.isValid() && n.isValid() ? (t = We(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function Zd(e, t, n, r) {
  var a = Be(e) ? e : ae(e), s = Be(t) ? t : ae(t);
  return this.isValid() && a.isValid() && s.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, n) : !this.isBefore(a, n)) && (r[1] === ")" ? this.isBefore(s, n) : !this.isAfter(s, n))) : !1;
}
function qd(e, t) {
  var n = Be(e) ? e : ae(e), r;
  return this.isValid() && n.isValid() ? (t = We(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function Jd(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Qd(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function $d(e, t, n) {
  var r, a, s;
  if (!this.isValid())
    return NaN;
  if (r = ua(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = We(t), t) {
    case "year":
      s = Wn(this, r) / 12;
      break;
    case "month":
      s = Wn(this, r);
      break;
    case "quarter":
      s = Wn(this, r) / 3;
      break;
    case "second":
      s = (this - r) / 1e3;
      break;
    case "minute":
      s = (this - r) / 6e4;
      break;
    case "hour":
      s = (this - r) / 36e5;
      break;
    case "day":
      s = (this - r - a) / 864e5;
      break;
    case "week":
      s = (this - r - a) / 6048e5;
      break;
    default:
      s = this - r;
  }
  return n ? s : Ae(s);
}
function Wn(e, t) {
  if (e.date() < t.date())
    return -Wn(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), a, s;
  return t - r < 0 ? (a = e.clone().add(n - 1, "months"), s = (t - r) / (r - a)) : (a = e.clone().add(n + 1, "months"), s = (t - r) / (a - r)), -(n + s) || 0;
}
I.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
I.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function ef() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function tf(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? An(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : nt(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", An(n, "Z")) : An(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function nf() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, a, s;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", s = t + '[")]', this.format(n + r + a + s);
}
function rf(e) {
  e || (e = this.isUtc() ? I.defaultFormatUtc : I.defaultFormat);
  var t = An(this, e);
  return this.localeData().postformat(t);
}
function af(e, t) {
  return this.isValid() && (Be(e) && e.isValid() || ae(e).isValid()) ? ze({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function sf(e) {
  return this.from(ae(), e);
}
function lf(e, t) {
  return this.isValid() && (Be(e) && e.isValid() || ae(e).isValid()) ? ze({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function of(e) {
  return this.to(ae(), e);
}
function si(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = gt(e), t != null && (this._locale = t), this);
}
var ii = Fe(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function li() {
  return this._locale;
}
var zn = 1e3, Xt = 60 * zn, Gn = 60 * Xt, oi = (365 * 400 + 97) * 24 * Gn;
function Zt(e, t) {
  return (e % t + t) % t;
}
function ci(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - oi : new Date(e, t, n).valueOf();
}
function ui(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - oi : Date.UTC(e, t, n);
}
function cf(e) {
  var t, n;
  if (e = We(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? ui : ci, e) {
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
      t = this._d.valueOf(), t -= Zt(
        t + (this._isUTC ? 0 : this.utcOffset() * Xt),
        Gn
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Zt(t, Xt);
      break;
    case "second":
      t = this._d.valueOf(), t -= Zt(t, zn);
      break;
  }
  return this._d.setTime(t), I.updateOffset(this, !0), this;
}
function uf(e) {
  var t, n;
  if (e = We(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? ui : ci, e) {
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
      t = this._d.valueOf(), t += Gn - Zt(
        t + (this._isUTC ? 0 : this.utcOffset() * Xt),
        Gn
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Xt - Zt(t, Xt) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += zn - Zt(t, zn) - 1;
      break;
  }
  return this._d.setTime(t), I.updateOffset(this, !0), this;
}
function df() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function ff() {
  return Math.floor(this.valueOf() / 1e3);
}
function hf() {
  return new Date(this.valueOf());
}
function mf() {
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
function gf() {
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
function _f() {
  return this.isValid() ? this.toISOString() : null;
}
function yf() {
  return Zr(this);
}
function bf() {
  return kt({}, G(this));
}
function kf() {
  return G(this).overflow;
}
function pf() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
W("N", 0, 0, "eraAbbr");
W("NN", 0, 0, "eraAbbr");
W("NNN", 0, 0, "eraAbbr");
W("NNNN", 0, 0, "eraName");
W("NNNNN", 0, 0, "eraNarrow");
W("y", ["y", 1], "yo", "eraYear");
W("y", ["yy", 2], 0, "eraYear");
W("y", ["yyy", 3], 0, "eraYear");
W("y", ["yyyy", 4], 0, "eraYear");
Y("N", da);
Y("NN", da);
Y("NNN", da);
Y("NNNN", If);
Y("NNNNN", Mf);
te(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var a = n._locale.erasParse(e, r, n._strict);
    a ? G(n).era = a : G(n).invalidEra = e;
  }
);
Y("y", tn);
Y("yy", tn);
Y("yyy", tn);
Y("yyyy", tn);
Y("yo", Lf);
te(["y", "yy", "yyy", "yyyy"], ve);
te(["yo"], function(e, t, n, r) {
  var a;
  n._locale._eraYearOrdinalRegex && (a = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[ve] = n._locale.eraYearOrdinalParse(e, a) : t[ve] = parseInt(e, 10);
});
function vf(e, t) {
  var n, r, a, s = this._eras || gt("en")._eras;
  for (n = 0, r = s.length; n < r; ++n) {
    switch (typeof s[n].since) {
      case "string":
        a = I(s[n].since).startOf("day"), s[n].since = a.valueOf();
        break;
    }
    switch (typeof s[n].until) {
      case "undefined":
        s[n].until = 1 / 0;
        break;
      case "string":
        a = I(s[n].until).startOf("day").valueOf(), s[n].until = a.valueOf();
        break;
    }
  }
  return s;
}
function wf(e, t, n) {
  var r, a, s = this.eras(), i, o, c;
  for (e = e.toUpperCase(), r = 0, a = s.length; r < a; ++r)
    if (i = s[r].name.toUpperCase(), o = s[r].abbr.toUpperCase(), c = s[r].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return s[r];
          break;
        case "NNNN":
          if (i === e)
            return s[r];
          break;
        case "NNNNN":
          if (c === e)
            return s[r];
          break;
      }
    else if ([i, o, c].indexOf(e) >= 0)
      return s[r];
}
function xf(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? I(e.since).year() : I(e.since).year() + (t - e.offset) * n;
}
function Sf() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function Ef() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function Of() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function Df() {
  var e, t, n, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - I(a[e].since).year()) * n + a[e].offset;
  return this.year();
}
function Cf(e) {
  return q(this, "_erasNameRegex") || fa.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Tf(e) {
  return q(this, "_erasAbbrRegex") || fa.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Nf(e) {
  return q(this, "_erasNarrowRegex") || fa.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function da(e, t) {
  return t.erasAbbrRegex(e);
}
function If(e, t) {
  return t.erasNameRegex(e);
}
function Mf(e, t) {
  return t.erasNarrowRegex(e);
}
function Lf(e, t) {
  return t._eraYearOrdinalRegex || tn;
}
function fa() {
  var e = [], t = [], n = [], r = [], a, s, i = this.eras();
  for (a = 0, s = i.length; a < s; ++a)
    t.push(Me(i[a].name)), e.push(Me(i[a].abbr)), n.push(Me(i[a].narrow)), r.push(Me(i[a].name)), r.push(Me(i[a].abbr)), r.push(Me(i[a].narrow));
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
W(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
W(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function dr(e, t) {
  W(0, [e, e.length], 0, t);
}
dr("gggg", "weekYear");
dr("ggggg", "weekYear");
dr("GGGG", "isoWeekYear");
dr("GGGGG", "isoWeekYear");
we("weekYear", "gg");
we("isoWeekYear", "GG");
xe("weekYear", 1);
xe("isoWeekYear", 1);
Y("G", ir);
Y("g", ir);
Y("GG", se, Pe);
Y("gg", se, Pe);
Y("GGGG", ta, ea);
Y("gggg", ta, ea);
Y("GGGGG", sr, rr);
Y("ggggg", sr, rr);
Nn(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = j(e);
  }
);
Nn(["gg", "GG"], function(e, t, n, r) {
  t[r] = I.parseTwoDigitYear(e);
});
function Pf(e) {
  return di.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Rf(e) {
  return di.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Yf() {
  return ft(this.year(), 1, 4);
}
function Af() {
  return ft(this.isoWeekYear(), 1, 4);
}
function Ff() {
  var e = this.localeData()._week;
  return ft(this.year(), e.dow, e.doy);
}
function Wf() {
  var e = this.localeData()._week;
  return ft(this.weekYear(), e.dow, e.doy);
}
function di(e, t, n, r, a) {
  var s;
  return e == null ? xn(this, r, a).year : (s = ft(e, r, a), t > s && (t = s), Vf.call(this, e, t, n, r, a));
}
function Vf(e, t, n, r, a) {
  var s = zs(e, t, n, r, a), i = wn(s.year, 0, s.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
W("Q", 0, "Qo", "quarter");
we("quarter", "Q");
xe("quarter", 7);
Y("Q", Ps);
te("Q", function(e, t) {
  t[ct] = (j(e) - 1) * 3;
});
function Uf(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
W("D", ["DD", 2], "Do", "date");
we("date", "D");
xe("date", 9);
Y("D", se);
Y("DD", se, Pe);
Y("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
te(["D", "DD"], Qe);
te("Do", function(e, t) {
  t[Qe] = j(e.match(se)[0]);
});
var fi = en("Date", !0);
W("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
we("dayOfYear", "DDD");
xe("dayOfYear", 4);
Y("DDD", ar);
Y("DDDD", Rs);
te(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = j(e);
});
function Bf(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
W("m", ["mm", 2], 0, "minute");
we("minute", "m");
xe("minute", 14);
Y("m", se);
Y("mm", se, Pe);
te(["m", "mm"], Ve);
var Hf = en("Minutes", !1);
W("s", ["ss", 2], 0, "second");
we("second", "s");
xe("second", 15);
Y("s", se);
Y("ss", se, Pe);
te(["s", "ss"], ut);
var zf = en("Seconds", !1);
W("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
W(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
W(0, ["SSS", 3], 0, "millisecond");
W(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
W(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
W(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
W(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
W(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
W(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
we("millisecond", "ms");
xe("millisecond", 16);
Y("S", ar, Ps);
Y("SS", ar, Pe);
Y("SSS", ar, Rs);
var pt, hi;
for (pt = "SSSS"; pt.length <= 9; pt += "S")
  Y(pt, tn);
function Gf(e, t) {
  t[Pt] = j(("0." + e) * 1e3);
}
for (pt = "S"; pt.length <= 9; pt += "S")
  te(pt, Gf);
hi = en("Milliseconds", !1);
W("z", 0, 0, "zoneAbbr");
W("zz", 0, 0, "zoneName");
function jf() {
  return this._isUTC ? "UTC" : "";
}
function Kf() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var E = Cn.prototype;
E.add = Fd;
E.calendar = Gd;
E.clone = jd;
E.diff = $d;
E.endOf = uf;
E.format = rf;
E.from = af;
E.fromNow = sf;
E.to = lf;
E.toNow = of;
E.get = Xc;
E.invalidAt = kf;
E.isAfter = Kd;
E.isBefore = Xd;
E.isBetween = Zd;
E.isSame = qd;
E.isSameOrAfter = Jd;
E.isSameOrBefore = Qd;
E.isValid = yf;
E.lang = ii;
E.locale = si;
E.localeData = li;
E.max = _d;
E.min = gd;
E.parsingFlags = bf;
E.set = Zc;
E.startOf = cf;
E.subtract = Wd;
E.toArray = mf;
E.toObject = gf;
E.toDate = hf;
E.toISOString = tf;
E.inspect = nf;
typeof Symbol < "u" && Symbol.for != null && (E[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
E.toJSON = _f;
E.toString = ef;
E.unix = ff;
E.valueOf = df;
E.creationData = pf;
E.eraName = Sf;
E.eraNarrow = Ef;
E.eraAbbr = Of;
E.eraYear = Df;
E.year = Hs;
E.isLeapYear = mu;
E.weekYear = Pf;
E.isoWeekYear = Rf;
E.quarter = E.quarters = Uf;
E.month = Us;
E.daysInMonth = du;
E.week = E.weeks = pu;
E.isoWeek = E.isoWeeks = vu;
E.weeksInYear = Ff;
E.weeksInWeekYear = Wf;
E.isoWeeksInYear = Yf;
E.isoWeeksInISOWeekYear = Af;
E.date = fi;
E.day = E.days = Pu;
E.weekday = Ru;
E.isoWeekday = Yu;
E.dayOfYear = Bf;
E.hour = E.hours = Hu;
E.minute = E.minutes = Hf;
E.second = E.seconds = zf;
E.millisecond = E.milliseconds = hi;
E.utcOffset = Ed;
E.utc = Dd;
E.local = Cd;
E.parseZone = Td;
E.hasAlignedHourOffset = Nd;
E.isDST = Id;
E.isLocal = Ld;
E.isUtcOffset = Pd;
E.isUtc = ti;
E.isUTC = ti;
E.zoneAbbr = jf;
E.zoneName = Kf;
E.dates = Fe(
  "dates accessor is deprecated. Use date instead.",
  fi
);
E.months = Fe(
  "months accessor is deprecated. Use month instead",
  Us
);
E.years = Fe(
  "years accessor is deprecated. Use year instead",
  Hs
);
E.zone = Fe(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Od
);
E.isDSTShifted = Fe(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Md
);
function Xf(e) {
  return ae(e * 1e3);
}
function Zf() {
  return ae.apply(null, arguments).parseZone();
}
function mi(e) {
  return e;
}
var J = Jr.prototype;
J.calendar = Pc;
J.longDateFormat = Fc;
J.invalidDate = Vc;
J.ordinal = Hc;
J.preparse = mi;
J.postformat = mi;
J.relativeTime = Gc;
J.pastFuture = jc;
J.set = Mc;
J.eras = vf;
J.erasParse = wf;
J.erasConvertYear = xf;
J.erasAbbrRegex = Tf;
J.erasNameRegex = Cf;
J.erasNarrowRegex = Nf;
J.months = lu;
J.monthsShort = ou;
J.monthsParse = uu;
J.monthsRegex = hu;
J.monthsShortRegex = fu;
J.week = _u;
J.firstDayOfYear = ku;
J.firstDayOfWeek = bu;
J.weekdays = Tu;
J.weekdaysMin = Iu;
J.weekdaysShort = Nu;
J.weekdaysParse = Lu;
J.weekdaysRegex = Au;
J.weekdaysShortRegex = Fu;
J.weekdaysMinRegex = Wu;
J.isPM = Uu;
J.meridiem = zu;
function jn(e, t, n, r) {
  var a = gt(), s = tt().set(r, t);
  return a[n](s, e);
}
function gi(e, t, n) {
  if (ht(e) && (t = e, e = void 0), e = e || "", t != null)
    return jn(e, t, n, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = jn(e, r, n, "month");
  return a;
}
function ha(e, t, n, r) {
  typeof e == "boolean" ? (ht(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, ht(t) && (n = t, t = void 0), t = t || "");
  var a = gt(), s = e ? a._week.dow : 0, i, o = [];
  if (n != null)
    return jn(t, (n + s) % 7, r, "day");
  for (i = 0; i < 7; i++)
    o[i] = jn(t, (i + s) % 7, r, "day");
  return o;
}
function qf(e, t) {
  return gi(e, t, "months");
}
function Jf(e, t) {
  return gi(e, t, "monthsShort");
}
function Qf(e, t, n) {
  return ha(e, t, n, "weekdays");
}
function $f(e, t, n) {
  return ha(e, t, n, "weekdaysShort");
}
function eh(e, t, n) {
  return ha(e, t, n, "weekdaysMin");
}
wt("en", {
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
    var t = e % 10, n = j(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
I.lang = Fe(
  "moment.lang is deprecated. Use moment.locale instead.",
  wt
);
I.langData = Fe(
  "moment.langData is deprecated. Use moment.localeData instead.",
  gt
);
var st = Math.abs;
function th() {
  var e = this._data;
  return this._milliseconds = st(this._milliseconds), this._days = st(this._days), this._months = st(this._months), e.milliseconds = st(e.milliseconds), e.seconds = st(e.seconds), e.minutes = st(e.minutes), e.hours = st(e.hours), e.months = st(e.months), e.years = st(e.years), this;
}
function _i(e, t, n, r) {
  var a = ze(t, n);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function nh(e, t) {
  return _i(this, e, t, 1);
}
function rh(e, t) {
  return _i(this, e, t, -1);
}
function Ja(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function ah() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, a, s, i, o, c;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Ja(Wr(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, a = Ae(e / 1e3), r.seconds = a % 60, s = Ae(a / 60), r.minutes = s % 60, i = Ae(s / 60), r.hours = i % 24, t += Ae(i / 24), c = Ae(yi(t)), n += c, t -= Ja(Wr(c)), o = Ae(n / 12), n %= 12, r.days = t, r.months = n, r.years = o, this;
}
function yi(e) {
  return e * 4800 / 146097;
}
function Wr(e) {
  return e * 146097 / 4800;
}
function sh(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = We(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + yi(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(Wr(this._months)), e) {
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
function ih() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + j(this._months / 12) * 31536e6 : NaN;
}
function _t(e) {
  return function() {
    return this.as(e);
  };
}
var lh = _t("ms"), oh = _t("s"), ch = _t("m"), uh = _t("h"), dh = _t("d"), fh = _t("w"), hh = _t("M"), mh = _t("Q"), gh = _t("y");
function _h() {
  return ze(this);
}
function yh(e) {
  return e = We(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Ft(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var bh = Ft("milliseconds"), kh = Ft("seconds"), ph = Ft("minutes"), vh = Ft("hours"), wh = Ft("days"), xh = Ft("months"), Sh = Ft("years");
function Eh() {
  return Ae(this.days() / 7);
}
var lt = Math.round, jt = {
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
function Oh(e, t, n, r, a) {
  return a.relativeTime(t || 1, !!n, e, r);
}
function Dh(e, t, n, r) {
  var a = ze(e).abs(), s = lt(a.as("s")), i = lt(a.as("m")), o = lt(a.as("h")), c = lt(a.as("d")), f = lt(a.as("M")), w = lt(a.as("w")), S = lt(a.as("y")), p = s <= n.ss && ["s", s] || s < n.s && ["ss", s] || i <= 1 && ["m"] || i < n.m && ["mm", i] || o <= 1 && ["h"] || o < n.h && ["hh", o] || c <= 1 && ["d"] || c < n.d && ["dd", c];
  return n.w != null && (p = p || w <= 1 && ["w"] || w < n.w && ["ww", w]), p = p || f <= 1 && ["M"] || f < n.M && ["MM", f] || S <= 1 && ["y"] || ["yy", S], p[2] = t, p[3] = +e > 0, p[4] = r, Oh.apply(null, p);
}
function Ch(e) {
  return e === void 0 ? lt : typeof e == "function" ? (lt = e, !0) : !1;
}
function Th(e, t) {
  return jt[e] === void 0 ? !1 : t === void 0 ? jt[e] : (jt[e] = t, e === "s" && (jt.ss = t - 1), !0);
}
function Nh(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = jt, a, s;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, jt, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), s = Dh(this, !n, r, a), n && (s = a.pastFuture(+this, s)), a.postformat(s);
}
var wr = Math.abs;
function Ht(e) {
  return (e > 0) - (e < 0) || +e;
}
function fr() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = wr(this._milliseconds) / 1e3, t = wr(this._days), n = wr(this._months), r, a, s, i, o = this.asSeconds(), c, f, w, S;
  return o ? (r = Ae(e / 60), a = Ae(r / 60), e %= 60, r %= 60, s = Ae(n / 12), n %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", c = o < 0 ? "-" : "", f = Ht(this._months) !== Ht(o) ? "-" : "", w = Ht(this._days) !== Ht(o) ? "-" : "", S = Ht(this._milliseconds) !== Ht(o) ? "-" : "", c + "P" + (s ? f + s + "Y" : "") + (n ? f + n + "M" : "") + (t ? w + t + "D" : "") + (a || r || e ? "T" : "") + (a ? S + a + "H" : "") + (r ? S + r + "M" : "") + (e ? S + i + "S" : "")) : "P0D";
}
var Z = ur.prototype;
Z.isValid = vd;
Z.abs = th;
Z.add = nh;
Z.subtract = rh;
Z.as = sh;
Z.asMilliseconds = lh;
Z.asSeconds = oh;
Z.asMinutes = ch;
Z.asHours = uh;
Z.asDays = dh;
Z.asWeeks = fh;
Z.asMonths = hh;
Z.asQuarters = mh;
Z.asYears = gh;
Z.valueOf = ih;
Z._bubble = ah;
Z.clone = _h;
Z.get = yh;
Z.milliseconds = bh;
Z.seconds = kh;
Z.minutes = ph;
Z.hours = vh;
Z.days = wh;
Z.weeks = Eh;
Z.months = xh;
Z.years = Sh;
Z.humanize = Nh;
Z.toISOString = fr;
Z.toString = fr;
Z.toJSON = fr;
Z.locale = si;
Z.localeData = li;
Z.toIsoString = Fe(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  fr
);
Z.lang = ii;
W("X", 0, 0, "unix");
W("x", 0, 0, "valueOf");
Y("x", ir);
Y("X", Jc);
te("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
te("x", function(e, t, n) {
  n._d = new Date(j(e));
});
//! moment.js
I.version = "2.29.4";
Nc(ae);
I.fn = E;
I.min = yd;
I.max = bd;
I.now = kd;
I.utc = tt;
I.unix = Xf;
I.months = qf;
I.isDate = Dn;
I.locale = wt;
I.invalid = tr;
I.duration = ze;
I.isMoment = Be;
I.weekdays = Qf;
I.parseZone = Zf;
I.localeData = gt;
I.isDuration = Fn;
I.monthsShort = Jf;
I.weekdaysMin = eh;
I.defineLocale = sa;
I.updateLocale = Xu;
I.locales = Zu;
I.weekdaysShort = $f;
I.normalizeUnits = We;
I.relativeTimeRounding = Ch;
I.relativeTimeThreshold = Th;
I.calendarFormat = zd;
I.prototype = E;
I.HTML5_FMT = {
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
const Ih = (e) => (Ti("data-v-ee12da86"), e = e(), Ni(), e), Mh = {
  key: 0,
  class: "flex flex-row"
}, Lh = {
  key: 0,
  class: "max-w-[80px] h-3.5 mr-1 bg-gray-400 loading-bubble"
}, Ph = { class: "flex flex-row items-center justify-between gap-3" }, Rh = /* @__PURE__ */ Ih(() => /* @__PURE__ */ F("template", null, [
  /* @__PURE__ */ F("div", { class: "flex flex-row items-center shrink-0 gap-3 w-full max-w-[52px] py-1" }, [
    /* @__PURE__ */ F("span", { class: "bg-gray-400 loading-bubble max-w-[24px] w-full h-2" }),
    /* @__PURE__ */ F("span", { class: "bg-gray-400 loading-bubble w-4 h-4" })
  ])
], -1)), Yh = {
  key: 1,
  class: "ml-2 mt-1"
}, Ah = {
  key: 0,
  class: "max-w-[120px] h-2 bg-gray-400 mb-2 loading-bubble"
}, Fh = {
  key: 1,
  class: "max-w-[120px] h-2 bg-danger-500 dark:bg-danger-400 loading-bubble"
}, Wh = { class: "flex flex-row" }, Vh = ["readonly", "min", "max"], Uh = {
  key: 0,
  class: "ml-2"
}, Bh = {
  key: 0,
  class: "prose-xs element-text italic text-gray-500 transition"
}, Hh = {
  key: 1,
  class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition"
}, zh = {
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
    const n = e, r = Ec(), a = ye(!1), s = ye(), i = ye(I(n.inputValue).format("YYYY-MM-DD")), o = ye(I(n.minDate).format("YYYY-MM-DD")), c = ye(I(n.maxDate).format("YYYY-MM-DD"));
    function f() {
      const g = n.format ? n.format : "DD/MM/YYYY";
      t("changed", I(i.value).format(g));
    }
    function w(g) {
      n.readonly || (a.value = !0, g.srcElement.nodeName !== "INPUT" && r.name !== "safari" && s.value.showPicker());
    }
    function S(g, O = () => {
    }, d = document.createElement(null), h = "mouseup") {
      document.addEventListener(h, function y(C) {
        if (!(C.target instanceof Element))
          return document.removeEventListener(h, y), !1;
        g !== C.target && !Array.from(d).includes(C.target) && O(C) !== !1 && document.removeEventListener(h, y);
      });
    }
    function p() {
      let g = "";
      return g += n.readonly ? "" : "pr-0.75 border border-gray-200 dark:border-gray-600 rounded-md transition", g += " pl-1", g += a.value && !n.readonly ? " outline outline-4 outline-action-200 dark:outline-action-700" : "", g;
    }
    function M() {
      const g = ["max-w-[120px]", "max-w-[200px]", "max-w-xs"];
      return g[Math.floor(Math.random() * g.length)];
    }
    return (g, O) => (m(), x("div", {
      ref: (d) => {
        S(d, () => {
          a.value = !1;
        });
      },
      class: "flex flex-col relative gap-1"
    }, [
      e.loading ? (m(), x(me, { key: 0 }, [
        e.label ? (m(), x("div", Mh, [
          e.label ? (m(), x("label", Lh)) : N("", !0)
        ])) : N("", !0),
        F("div", Ph, [
          F("div", {
            class: D(["bg-gray-400 loading-bubble mr-auto h-8", [M()]])
          }, null, 2),
          Rh
        ]),
        e.notification || e.error ? (m(), x("div", Yh, [
          e.notification ? (m(), x("div", Ah)) : N("", !0),
          e.error ? (m(), x("div", Fh)) : N("", !0)
        ])) : N("", !0)
      ], 64)) : (m(), x(me, { key: 1 }, [
        F("div", Wh, [
          F("label", {
            onClick: w,
            class: "prose-xs element-text text-xs uppercase text-gray-500 cursor-pointer transition"
          }, V(e.label), 1)
        ]),
        F("div", {
          class: D([p(), "flex flex-row w-full items-center rounded-md transition px-0.75"])
        }, [
          vt(F("input", {
            readonly: e.readonly,
            "onUpdate:modelValue": O[0] || (O[0] = (d) => i.value = d),
            onChange: O[1] || (O[1] = (d) => f()),
            onInput: O[2] || (O[2] = (d) => f()),
            min: o.value,
            max: c.value,
            ref_key: "inputRef",
            ref: s,
            onClick: O[3] || (O[3] = (d) => w(d)),
            class: "bg-transparent rounded-md input-reset text-gray-900 dark:text-white transition cursor-pointer py-1.5",
            type: "date",
            placeholder: "dd-mm-yyyy"
          }, null, 40, Vh), [
            [ts, i.value]
          ]),
          e.readonly ? N("", !0) : (m(), X(et, {
            key: 0,
            onClick: O[4] || (O[4] = (d) => w(d)),
            size: "sm",
            class: "text-gray-400 opacity-100 cursor-pointer transition"
          }, {
            default: H(() => [
              z(" calendar_month ")
            ]),
            _: 1
          }))
        ], 2),
        e.notification || e.error ? (m(), x("div", Uh, [
          e.notification ? (m(), x("div", Bh, V(e.notification), 1)) : N("", !0),
          e.error ? (m(), x("div", Hh, V(e.error), 1)) : N("", !0)
        ])) : N("", !0)
      ], 64))
    ], 512));
  }
}, hg = /* @__PURE__ */ Te(zh, [["__scopeId", "data-v-ee12da86"]]), Gh = { class: "relative w-fit" }, jh = { class: "flex flex-col" }, Kh = ["onClick"], Xh = {
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
    const n = e, r = ye("right-0");
    function a(o) {
      o.x < 260 && (r.value = "left-0"), s.value = !s.value;
    }
    const s = ye(!1);
    function i(o) {
      s.value = !1, t("selected", o);
    }
    return (o, c) => (m(), x("div", Gh, [
      ce(Xn, {
        onClick: c[0] || (c[0] = (f) => a(f)),
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
        default: H(() => [
          z(V(n.textSlot), 1)
        ]),
        _: 1
      }, 8, ["size", "title", "icon", "disabled", "outlined", "buttonRoundedClasses", "buttonColorClasses", "buttonBackgroundClasses", "iconColorClasses"]),
      ce(ns, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95",
        appear: ""
      }, {
        default: H(() => [
          vt(F("div", {
            class: D([[
              e.fluidWidthDropdown ? "min-w-max" : "min-w-[240px]",
              r.value
            ], "absolute max-w-xs w-full rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 my-2 z-50"])
          }, [
            F("div", jh, [
              (m(!0), x(me, null, Ye(n.items, (f) => (m(), x("button", {
                onClick: (w) => i(f.identifier),
                key: f.identifier,
                class: D(["dark:hover:bg-gray-900 cursor-pointer first-of-type:rounded-tr-lg first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-bl-lg hover:bg-gray-100 w-full text-md dark:text-white text-gray-900 transition-all duration-300 items-center flex flex-row space-x-3 border-t dark:border-gray-700 first-of-type:border-t-0", [e.fluidWidthDropdown ? "px-4 py-2" : "p-2"]])
              }, [
                f.icon ? (m(), X(et, {
                  key: 0,
                  size: "sm",
                  class: "text-gray-400"
                }, {
                  default: H(() => [
                    z(V(f.icon), 1)
                  ]),
                  _: 2
                }, 1024)) : N("", !0),
                F("span", null, V(f.textSlot), 1)
              ], 10, Kh))), 128))
            ])
          ], 2), [
            [_n, s.value]
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
    const n = (r) => {
      t("clicked", r);
    };
    return (r, a) => (m(), x("div", {
      class: D([
        "flex items-center gap-2 fixed bottom-0 w-full justify-center left-0 right-0 py-4 z-50",
        e.scrollGradient ? "from-gray-100 dark:from-gray-900 to-transparent bg-gradient-to-t" : ""
      ])
    }, [
      (m(!0), x(me, null, Ye(e.buttons, (s, i) => (m(), X(Xn, {
        key: `button-${i}`,
        icon: s.icon,
        title: s.textSlot,
        outlined: s.outlined,
        size: s.size,
        onClicked: (o) => n(s.identifier)
      }, {
        default: H(() => [
          z(V(s.textSlot), 1)
        ]),
        _: 2
      }, 1032, ["icon", "title", "outlined", "size", "onClicked"]))), 128))
    ], 2));
  }
}, Zh = {
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
}, qh = ["title"], Jh = { class: "truncate" };
function Qh(e, t, n, r, a, s) {
  return m(), x("label", {
    class: D(["flex items-center max-w-max text-white element-text rounded-full transition", s.setClassNames()]),
    title: n.title
  }, [
    F("span", Jh, [
      He(e.$slots, "default")
    ])
  ], 10, qh);
}
const $h = /* @__PURE__ */ Te(Zh, [["render", Qh]]);
var Qa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function em(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tm = {
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
}, nm = tm, hr = {}, In = {};
Object.defineProperty(In, "__esModule", { value: !0 });
In.clone = void 0;
function rm(e) {
  return e ? JSON.parse(JSON.stringify(e)) : null;
}
In.clone = rm;
var mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.matches = void 0;
function am(e, t, n) {
  var r = String(t).length, a = e.substr(0, r), s = parseInt(a, 10);
  return t = parseInt(String(t).substr(0, a.length), 10), n = parseInt(String(n).substr(0, a.length), 10), s >= t && s <= n;
}
function sm(e, t) {
  return t = String(t), t.substring(0, e.length) === e.substring(0, t.length);
}
function im(e, t) {
  return Array.isArray(t) ? am(e, t[0], t[1]) : sm(e, t);
}
mr.matches = im;
Object.defineProperty(hr, "__esModule", { value: !0 });
hr.addMatchingCardsToResults = void 0;
var lm = In, om = mr;
function cm(e, t, n) {
  var r, a;
  for (r = 0; r < t.patterns.length; r++) {
    var s = t.patterns[r];
    if (om.matches(e, s)) {
      var i = lm.clone(t);
      Array.isArray(s) ? a = String(s[0]).length : a = String(s).length, e.length >= a && (i.matchStrength = a), n.push(i);
      break;
    }
  }
}
hr.addMatchingCardsToResults = cm;
var gr = {};
Object.defineProperty(gr, "__esModule", { value: !0 });
gr.isValidInputType = void 0;
function um(e) {
  return typeof e == "string" || e instanceof String;
}
gr.isValidInputType = um;
var _r = {};
Object.defineProperty(_r, "__esModule", { value: !0 });
_r.findBestMatch = void 0;
function dm(e) {
  var t = e.filter(function(n) {
    return n.matchStrength;
  }).length;
  return t > 0 && t === e.length;
}
function fm(e) {
  return dm(e) ? e.reduce(function(t, n) {
    return !t || Number(t.matchStrength) < Number(n.matchStrength) ? n : t;
  }) : null;
}
_r.findBestMatch = fm;
var Kn = Qa && Qa.__assign || function() {
  return Kn = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Kn.apply(this, arguments);
}, bi = nm, hm = hr, mm = gr, gm = _r, Mn = In, En = {}, Ne = {
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
}, ki = [
  Ne.VISA,
  Ne.MASTERCARD,
  Ne.AMERICAN_EXPRESS,
  Ne.DINERS_CLUB,
  Ne.DISCOVER,
  Ne.JCB,
  Ne.UNIONPAY,
  Ne.MAESTRO,
  Ne.ELO,
  Ne.MIR,
  Ne.HIPER,
  Ne.HIPERCARD
], St = Mn.clone(ki);
function ma(e) {
  return En[e] || bi[e];
}
function _m() {
  return St.map(function(e) {
    return Mn.clone(ma(e));
  });
}
function ga(e, t) {
  t === void 0 && (t = !1);
  var n = St.indexOf(e);
  if (!t && n === -1)
    throw new Error('"' + e + '" is not a supported card type.');
  return n;
}
function Ot(e) {
  var t = [];
  if (!mm.isValidInputType(e))
    return t;
  if (e.length === 0)
    return _m();
  St.forEach(function(r) {
    var a = ma(r);
    hm.addMatchingCardsToResults(e, a, t);
  });
  var n = gm.findBestMatch(t);
  return n ? [n] : t;
}
Ot.getTypeInfo = function(e) {
  return Mn.clone(ma(e));
};
Ot.removeCard = function(e) {
  var t = ga(e);
  St.splice(t, 1);
};
Ot.addCard = function(e) {
  var t = ga(e.type, !0);
  En[e.type] = e, t === -1 && St.push(e.type);
};
Ot.updateCard = function(e, t) {
  var n = En[e] || bi[e];
  if (!n)
    throw new Error('"' + e + "\" is not a recognized type. Use `addCard` instead.'");
  if (t.type && n.type !== t.type)
    throw new Error("Cannot overwrite type parameter.");
  var r = Mn.clone(n);
  r = Kn(Kn({}, r), t), En[r.type] = r;
};
Ot.changeOrder = function(e, t) {
  var n = ga(e);
  St.splice(n, 1), St.splice(t, 0, e);
};
Ot.resetModifications = function() {
  St = Mn.clone(ki), En = {};
};
Ot.types = Ne;
var ym = Ot;
const bm = /* @__PURE__ */ em(ym), km = {
  mail: "mail",
  phone: "ring_volume",
  link: "link"
}, $a = 13, Vr = ["en", "de"], Rt = window.navigator.userLanguage || window.navigator.language || Vr[0], Lt = {
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
}, pm = {
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
      actionIcons: km,
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
    this.initFormat(), I.locale(Rt);
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
        return [void 0, "mail", "phone", "number", "card", "iban", "multiline", "date", "time", "datetime"].includes(e);
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
    PawIcon: et
  },
  setup() {
    const { t: e } = $t({
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
          return isNaN(e) || isNaN(parseFloat(e)) ? (this.setMessage(this.t("format.numberError"), !1), this.formatError = !0, e) : new Intl.NumberFormat(Rt, {
            minimumFractionDigits: this.minDecimals,
            maximumFractionDigits: this.maxDecimals
          }).format(e);
        case "card":
          return n.length < $a ? (this.setMessage(this.t("format.creditCardDigitError", { minDigits: `<b>${$a}</b>` }), !1), this.formatError = !0, e) : this.formatCard(n, t);
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
      return e.locale(Rt).format(t);
    },
    parseDate(e, t) {
      if (!e || !t)
        return e;
      let n = -1, r = null, a = null;
      for (const i in Vr)
        for (const o in Lt[t].formats) {
          if (Lt[t].formats[o] === "utc")
            continue;
          const c = I(e, Lt[t].formats[o], Vr[i], !0), f = c.parsingFlags();
          if (c.isValid() && !f.weekdayMismatch)
            return this.formatDate(c, Lt[t].format, t);
          const w = f.unusedInput.length + f.unusedTokens.length;
          (w < n || n === -1) && (n = w, r = Lt[t].formats[o], a = f);
        }
      if (t === "datetime" && Lt[t].formats.includes("utc")) {
        const i = I.utc(e, !0), o = i.parsingFlags();
        if (i.isValid())
          return this.formatDate(i, Lt[t].format, t);
        const c = o.unusedInput.length + o.unusedTokens.length;
        o.overflow >= 0 && (c < n || n === -1) && (n = c, r = "UTC → YYYY-MM-DDTkk:mm:ss+ZZ", a = o);
      }
      let s = null;
      return a.overflow >= 0 && a.parsedDateParts.length > a.overflow - 1 && (s = a.parsedDateParts[a.overflow]), this.setMessage(this.t("format.datetimeError", {
        momentType: `<b>${t.charAt(0).toUpperCase() + t.slice(1)}</b>`,
        candidate: `<b>${r}</b>`,
        overflow: s ? this.t("format.overflow", {
          overflow: `<b>${s}</b>`
        }) : "",
        mismatch: a.weekdayMismatch ? this.t("format.mismatch", {
          mismatch: `<b>${this.t("format.mismatch")}</b>`
        }) : ""
      }), !1), e;
    },
    formatCard(e, t) {
      var a;
      const n = bm(e)[0];
      if (!n)
        return this.setMessage(this.t("format.creditCardInvalid"), !1), this.formatError = !0, e;
      let r = e.toString().split("");
      return n.gaps.forEach((s, i) => r.splice(s + i, 0, " ")), t ? r.join("") : `${(a = n.niceType) == null ? void 0 : a.toUpperCase()} ${this.show ? r.join("") : `•••• ${e.slice(-4)}`}`;
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
      const n = /^(\+)((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)/ig, r = /^(\+)((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(0)*(\d{2,3})(\d{3})(\d{2})(\d{2})/ig, a = t.plus ? "+" : "", s = t.brackets ? { l: "(", r: ")" } : { l: "", r: "" }, i = t.space ? " " : "", o = t.dash ? "-" : "", c = this.standard(e), f = r.exec(c), w = n.exec(c);
      if (!f && w)
        return this.setMessage(this.t("format.phoneTooShort"), !1), this.formatError = !0, e;
      if (!f && !w)
        return this.setMessage(this.t("format.phonePrefixError"), !1), this.formatError = !0, e;
      const S = t.localPrefix && f[3] ? `${s.l}${f[3]}${s.r}` : "", p = t.areaCode ? f[2] : "";
      return `${t.areaCode ? a : ""}${p}${t.areaCode ? i : ""}${S}${f[4]}${i}${f[5]}${i}${o}${t.dash ? i : ""}${f[6]}${i}${o}${t.dash ? i : ""}${f[7]}`;
    }
  }
}, vm = { class: "flex flex-col gap-1" }, wm = {
  key: 0,
  class: "flex flex-row"
}, xm = {
  key: 0,
  class: "prose-xs element-text text-xs uppercase text-gray-500 transition"
}, Sm = ["title"], Em = ["textContent"], Om = {
  key: 0,
  class: "mr-1 text-xs text-gray-400"
}, Dm = ["innerHTML"], Cm = ["innerHTML"];
function Tm(e, t, n, r, a, s) {
  const i = ue("PawIcon");
  return m(), x("div", vm, [
    n.label || n.info ? (m(), x("div", wm, [
      n.label ? (m(), x("label", xm, V(n.label), 1)) : N("", !0),
      n.info ? (m(), x("span", {
        key: 1,
        class: "ml-auto prose-xs element-text uppercase text-gray-500 cursor-help transition",
        title: n.title
      }, V(n.info), 9, Sm)) : N("", !0)
    ])) : N("", !0),
    F("div", {
      class: D(["flex flex-row items-center justify-between text-gray-800 dark:text-white transition", {
        "border-t border-gray-200 dark:border-gray-600": n.label
      }])
    }, [
      F("div", {
        class: D(["flex items-center", a.formatting == "icon" && a.fieldValueIconPosition == "right" ? "flex-row-reverse" : ""])
      }, [
        a.formatting == "icon" && a.valueIconName ? (m(), X(i, {
          key: 0,
          class: D(n.valueColorClass ?? "text-gray-400"),
          size: "sm"
        }, {
          default: H(() => [
            z(V(a.valueIconName), 1)
          ]),
          _: 1
        }, 8, ["class"])) : N("", !0),
        F("span", {
          class: D(["my-1.5", {
            "prose-md": n.size === "md",
            "prose-sm": n.size === "sm",
            "prose-xs": n.size === "xs",
            "whitespace-pre-wrap": n.format === "multiline",
            truncate: n.format !== "multiline",
            "text-action-500 dark:text-action-400 hover:text-action-300 dark:hover:text-action-600 cursor-pointer transition": n.action && !a.formatError,
            [n.valueColorClass]: n.valueColorClass
          }]),
          onClick: t[0] || (t[0] = (...o) => s.click && s.click(...o)),
          textContent: V(this.inputValue(!1))
        }, null, 10, Em)
      ], 2),
      F("div", {
        class: D(["flex flex-row shrink-0 items-center gap-1 py-1 ml-3", {
          "self-start": n.unitPosition === "top",
          "self-center": n.unitPosition === "center",
          "self-end": n.unitPosition === "bottom"
        }])
      }, [
        a.unit.label ? (m(), x("span", Om, V(a.unit.label), 1)) : N("", !0),
        a.unit.icon ? (m(), X(i, {
          key: 1,
          size: "sm",
          class: "text-gray-400",
          outlined: a.unit.outlined === !0
        }, {
          default: H(() => [
            z(V(a.unit.icon), 1)
          ]),
          _: 1
        }, 8, ["outlined"])) : N("", !0),
        n.copy && !a.formatError ? (m(), X(i, {
          key: 2,
          size: "sm",
          onClick: s.copyToClipboard,
          class: "text-gray-400 cursor-pointer"
        }, {
          default: H(() => [
            z(" copy_all ")
          ]),
          _: 1
        }, 8, ["onClick"])) : N("", !0),
        n.editAction && !a.formatError ? (m(), X(i, {
          key: 3,
          size: "sm",
          onClick: s.editTrigger,
          class: "text-gray-400 cursor-pointer"
        }, {
          default: H(() => [
            z(" edit ")
          ]),
          _: 1
        }, 8, ["onClick"])) : N("", !0),
        n.deleteAction && !a.formatError ? (m(), X(i, {
          key: 4,
          size: "sm",
          onClick: s.deleteTrigger,
          class: "text-gray-400 cursor-pointer"
        }, {
          default: H(() => [
            z(" delete ")
          ]),
          _: 1
        }, 8, ["onClick"])) : N("", !0),
        n.secret && !a.formatError ? (m(), X(i, {
          key: 5,
          size: "sm",
          class: "text-gray-400 cursor-pointer",
          onClick: s.toggleSecret
        }, {
          default: H(() => [
            z(V(a.show ? "visibility_off" : "visibility"), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : N("", !0),
        n.action && !a.formatError ? (m(), X(i, {
          key: 6,
          size: "sm",
          onClick: s.click,
          class: "text-action-500 dark:text-action-400 hover:text-action-300 dark:hover:text-action-600 cursor-pointer transition"
        }, {
          default: H(() => [
            z(V(a.actionIcons[n.action]), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : N("", !0)
      ], 2)
    ], 2),
    a.message && a.success ? (m(), x("div", {
      key: 1,
      class: "prose-xs element-text italic text-success-500 dark:text-success-400 transition",
      innerHTML: a.message
    }, null, 8, Dm)) : N("", !0),
    a.message && !a.success && !n.hideErrors ? (m(), x("div", {
      key: 2,
      class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition",
      innerHTML: a.message
    }, null, 8, Cm)) : N("", !0)
  ]);
}
const Nm = /* @__PURE__ */ Te(pm, [["render", Tm]]), Im = {
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
    PawIcon: et
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
}, Mm = ["title"];
function Lm(e, t, n, r, a, s) {
  const i = ue("PawIcon");
  return m(), x("button", {
    class: D(["flex items-center group my-0 h-8 w-full prose-md element-text rounded-md transition", s.calcButton()]),
    title: n.title,
    onClick: t[0] || (t[0] = (...o) => s.click && s.click(...o))
  }, [
    n.icon ? (m(), X(i, {
      key: 0,
      size: n.size,
      outlined: n.outlined,
      class: D(["ml-0.75 mr-2 transition", s.calcIcon()])
    }, {
      default: H(() => [
        z(V(n.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : N("", !0),
    F("span", {
      class: D(["flex-grow text-left truncate", n.icon ? "" : "ml-3"])
    }, [
      He(e.$slots, "default")
    ], 2),
    ce(i, {
      size: "sm",
      class: D([
        "opacity-0 text-gray-400",
        n.disabled ? "" : "group-hover:opacity-100 group-focus:text-action-100 dark:group-focus:text-action-100 group-focus:opacity-100 group-active:text-action-100 dark:group-active:text-action-100 group-active:opacity-100"
      ])
    }, {
      default: H(() => [
        z(" navigate_next ")
      ]),
      _: 1
    }, 8, ["class"])
  ], 10, Mm);
}
const Pm = /* @__PURE__ */ Te(Im, [["render", Lm]]), Rm = {
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
    PawListItem: Pm
  },
  methods: {
    click(e) {
      this.$emit("clicked", e);
    }
  }
};
function Ym(e, t, n, r, a, s) {
  const i = ue("PawListItem");
  return !n.items || Object.keys(n.items).length === 0 ? (m(), x("div", {
    key: 0,
    class: D(["flex items-center w-full p-4 mb-8 bg-warning-100 dark:bg-warning-800 text-warning-800 dark:text-warning-100 rounded-lg transition", a.hasSlot ? "" : "hidden"])
  }, [
    He(e.$slots, "default")
  ], 2)) : (m(!0), x(me, { key: 1 }, Ye(n.items, (o, c) => (m(), x("div", {
    key: c,
    class: D(["py-1.5", {
      "border-t border-gray-200 dark:border-gray-700 transition": n.divider && c > 0
    }])
  }, [
    ce(i, {
      icon: o.icon ?? n.icon,
      size: o.size ?? n.size,
      title: o.title ?? n.title,
      outlined: o.outlined ?? n.outlined,
      disabled: o.disabled ?? n.disabled,
      onClicked: (f) => s.click(c)
    }, {
      default: H(() => [
        z(V(o.text), 1)
      ]),
      _: 2
    }, 1032, ["icon", "size", "title", "outlined", "disabled", "onClicked"])
  ], 2))), 128));
}
const gg = /* @__PURE__ */ Te(Rm, [["render", Ym]]);
const Am = ["title"], Fm = ["checked", "disabled"], Wm = { class: "relative w-8 h-5 m-0.5 shrink-0 self-start bg-gray-400 peer-disabled:bg-gray-200 dark:peer-disabled:bg-gray-600 peer-checked:bg-action-500 dark:peer-checked:bg-action-500 rounded-full transition" }, Vm = {
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
}, Um = /* @__PURE__ */ Object.assign(Vm, {
  setup(e) {
    const t = ye();
    return (n, r) => {
      var a;
      return m(), x("label", {
        class: D(["group inline-flex items-center", {
          "cursor-pointer": !e.disabled,
          "gap-1": e.size === "sm",
          "gap-2 p-1": e.size === "md",
          "gap-3 p-2": e.size === "lg"
        }]),
        title: e.title
      }, [
        F("input", {
          ref_key: "toggle",
          ref: t,
          type: "checkbox",
          onChange: r[0] || (r[0] = (...s) => n.change && n.change(...s)),
          checked: e.checked,
          disabled: e.disabled,
          class: "peer hidden"
        }, null, 40, Fm),
        F("span", Wm, [
          F("span", {
            class: D(["block w-4 h-4 bg-white m-0.5 rounded-full shadow-box dark:shadow-box-dark transition", [
              n.value ? "translate-x-3" : "translate-x-0",
              (a = t.value) != null && a.disabled ? "dark:bg-gray-400" : ""
            ]])
          }, null, 2)
        ]),
        n.$slots.default ? (m(), x("span", {
          key: 0,
          class: D([
            "text-md transition",
            e.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"
          ])
        }, [
          He(n.$slots, "default", {}, void 0, !0)
        ], 2)) : N("", !0)
      ], 10, Am);
    };
  }
}), _g = /* @__PURE__ */ Te(Um, [["__scopeId", "data-v-5cd34538"]]), Bm = 8, Hm = 5, zm = {
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
    PawCheckbox: rs,
    PawLazyField: Nm,
    PawLink: Os,
    PawIcon: et,
    PawLabel: $h,
    PawButton: Xn,
    PawDropdown: Xh,
    PawCrazyInput: _c
  },
  setup() {
    const { t: e } = $t({
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
      const n = this.informal ? Hm : Bm;
      return this.loading && t.length < n ? t.concat(this.fillItems(n - t.length)) : t;
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
        first: new Intl.NumberFormat(Rt).format(
          this.meta.firstItem
        ),
        last: new Intl.NumberFormat(Rt).format(
          this.meta.lastItem
        ),
        total: new Intl.NumberFormat(Rt).format(
          this.meta.totalRecords
        )
      }) : this.t("table.showRecords", {
        total: new Intl.NumberFormat(Rt).format(
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
        const n = this.$refs.actionDropdown, r = e.target.getBoundingClientRect(), a = this.$refs.table.getBoundingClientRect(), s = this.$refs.tableHeader.getBoundingClientRect(), i = this.informal ? 30 : 10, o = r.top - a.top + s.height + r.height + i;
        n.style.top = `${o}px`, this.dropdownOpen = !0, this.rowIdentifierProxy = t, this.clickOutsideElement(this.$refs.actionDropdown, () => {
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
      document.addEventListener(r, function a(s) {
        if (!(s.target instanceof Element))
          return document.removeEventListener(r, a), !1;
        e !== s.target && !Array.from(n).includes(s.target) && t(s) !== !1 && document.removeEventListener(r, a);
      });
    },
    hasStickyDetails() {
      return this.ctaIcon && this.ctaIcon !== "";
    }
  }
}, Gm = {
  key: 0,
  class: "text-lg font-bold text-gray-500 dark:text-white whitespace-nowrap"
}, jm = {
  key: 0,
  class: "md:flex flex-row gap-3 hidden"
}, Km = { class: "flex flex-row transition-all" }, Xm = { class: "flex flex-row w-full" }, Zm = {
  key: 0,
  class: "flex justify-between w-full items-center sm:w-fit"
}, qm = { class: "block sm:hidden" }, Jm = {
  key: 0,
  class: "text-lg font-bold text-gray-500 dark:text-white whitespace-nowrap"
}, Qm = /* @__PURE__ */ F("col", { class: "w-8" }, null, -1), $m = ["onClick"], eg = {
  key: 1,
  class: "z-50"
}, tg = /* @__PURE__ */ F("div", { class: "w-8 h-2 bg-action-300 dark:bg-action-600 rounded-md" }, null, -1), ng = {
  key: 3,
  class: "border-r border-t border-b border-gray-200 dark:border-gray-700 rounded-r-lg absolute top-2 right-4 bottom-2 -left-12 h-12 z-10 group-hover:shadow-card dark:group-hover:shadow-card-dark transition-all"
}, rg = {
  ref: "actionDropdown",
  class: "absolute max-w-xs w-fit min-w-[120px] rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 my-2 z-50 right-0 mr-6"
}, ag = { class: "flex flex-col" }, sg = ["onClick"], ig = { class: "" }, lg = { class: "flex flex-col text-left opacity-[.999] overflow-hidden rounded-md" }, og = ["onClick"], cg = ["innerHTML"], ug = { class: "flex flex-row items-center" };
function dg(e, t, n, r, a, s) {
  const i = ue("PawButton"), o = ue("PawDropdown"), c = ue("PawCrazyInput"), f = ue("PawLink"), w = ue("PawCheckbox"), S = ue("PawLazyField"), p = ue("PawLabel"), M = ue("PawIcon");
  return m(), x("div", {
    class: D(["flex flex-col relative transition z-0", {
      "pointer-events-none": n.loading
    }])
  }, [
    F("div", {
      class: D(["overflow-y-auto max-h-full transition", {
        "overflow-hidden": n.loading,
        "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-t border-l border-r rounded-t-xl translate-z-0": !n.informal,
        "px-4": n.informal
      }])
    }, [
      n.buttons.length || n.title || n.searchDropdownItems.length ? (m(), x("div", {
        key: 0,
        ref: "tableHeader",
        class: D([{
          "px-0 mb-3 sm:mb-5": n.informal,
          "px-6": !n.informal,
          "flex-wrap sm:!h-fit": n.searchDropdownItems.length > 0
        }, "sticky inset-0 flex flex-row justify-between items-center mt-3 h-fit sm:h-8 z-50 gap-3"])
      }, [
        F("div", {
          class: D({ "hidden sm:block": n.searchDropdownItems.length })
        }, [
          n.title ? (m(), x("h1", Gm, V(n.title), 1)) : N("", !0)
        ], 2),
        Object.keys(n.buttons).length <= 4 ? (m(), x("div", jm, [
          F("div", Km, [
            vt(ce(i, {
              disabled: n.loading,
              outlined: "",
              size: "md",
              title: "Search",
              icon: "search",
              onClicked: t[0] || (t[0] = (g) => s.openSearchbar())
            }, null, 8, ["disabled"]), [
              [
                _n,
                n.searchDropdownItems.length ? !1 : !a.searchbarOpened && n.searchbar
              ]
            ]),
            n.searchDropdownItems.length ? (m(), X(o, {
              key: 0,
              outlined: "",
              size: "md",
              icon: "expand_more",
              class: "h-full",
              textSlot: n.searchDropdownText,
              items: n.searchDropdownItems,
              buttonRoundedClasses: s.computedButtonRoundedClasses,
              onSelected: t[1] || (t[1] = (g) => this.$emit("searchDropdownItemClicked", g))
            }, null, 8, ["textSlot", "items", "buttonRoundedClasses"])) : N("", !0),
            ce(c, {
              ref: "searchbar",
              value: a.searchValue,
              placeholder: "Search",
              title: "Extended information about this field",
              contextIcon: "search",
              class: D([
                "max-h-8",
                a.searchbarOpened && !n.searchDropdownItems.length ? "w-full" : n.searchDropdownItems.length ? "w-full rounded-l-none" : "w-0 overflow-hidden"
              ]),
              inputRoundedClasses: s.computedInputRoundedClasses,
              inputMinWidthClasses: "min-w-[30ch]",
              flexDir: s.computedFlexDirectionProperty,
              onTyped: t[2] || (t[2] = (g) => s.searchTyped(g)),
              onKeyDownEnter: t[3] || (t[3] = (g) => this.$emit("keyDownEnter"))
            }, {
              default: H(() => [
                z(V(a.searchValue), 1)
              ]),
              _: 1
            }, 8, ["value", "inputRoundedClasses", "flexDir", "class"])
          ]),
          (m(!0), x(me, null, Ye(n.buttons, (g) => (m(), X(i, {
            key: g.id,
            onClicked: (O) => this.$emit("buttonClicked", g.identifier),
            disabled: n.loading,
            outlined: g.outlined,
            size: "md",
            title: g.title,
            icon: g.icon
          }, {
            default: H(() => [
              z(V(g.textSlot), 1)
            ]),
            _: 2
          }, 1032, ["onClicked", "disabled", "outlined", "title", "icon"]))), 128))
        ])) : N("", !0),
        F("div", {
          class: D(["flex flex-row gap-3 md:hidden", [
            n.buttons.length >= 4 ? "!flex" : "",
            n.searchDropdownItems.length ? "flex-col-reverse items-end sm:flex-row w-full" : ""
          ]])
        }, [
          F("div", Xm, [
            vt(ce(i, {
              disabled: n.loading,
              outlined: "",
              size: "md",
              title: "Search",
              icon: "search",
              onClicked: t[4] || (t[4] = (g) => s.openSearchbar("mobile"))
            }, null, 8, ["disabled"]), [
              [
                _n,
                n.searchDropdownItems.length ? !1 : !a.searchbarOpened && n.searchbar
              ]
            ]),
            n.searchDropdownItems.length ? (m(), X(o, {
              key: 0,
              outlined: "",
              size: "md",
              icon: "expand_more",
              class: "h-full",
              textSlot: n.searchDropdownText,
              items: n.searchDropdownItems,
              buttonRoundedClasses: s.computedButtonRoundedClasses,
              onSelected: t[5] || (t[5] = (g) => this.$emit("searchDropdownItemClicked", g))
            }, null, 8, ["textSlot", "items", "buttonRoundedClasses"])) : N("", !0),
            ce(c, {
              ref: "searchbarMobile",
              value: a.searchValue,
              placeholder: "Search",
              title: "Extended information about this field",
              contextIcon: "search",
              class: D([
                "max-h-8",
                a.searchbarOpened && !n.searchDropdownItems.length ? "w-full" : n.searchDropdownItems.length ? "w-full rounded-l-none" : "w-0 overflow-hidden"
              ]),
              onTyped: t[6] || (t[6] = (g) => s.searchTyped(g)),
              inputRoundedClasses: s.computedInputRoundedClasses,
              fullwidth: !0,
              flexDir: s.computedFlexDirectionProperty,
              onKeyDownEnter: t[7] || (t[7] = (g) => this.$emit("keyDownEnter"))
            }, {
              default: H(() => [
                z(V(a.searchValue), 1)
              ]),
              _: 1
            }, 8, ["value", "class", "inputRoundedClasses", "flexDir"])
          ]),
          n.searchDropdownItems.length ? (m(), x("div", Zm, [
            F("div", qm, [
              n.title ? (m(), x("h1", Jm, V(n.title), 1)) : N("", !0)
            ]),
            n.buttons && n.buttons.length ? (m(), X(o, {
              key: 0,
              class: D(a.searchbarOpened ? "hidden" : ""),
              outlined: "",
              size: "md",
              icon: "expand_more",
              textSlot: "Options",
              items: n.buttons,
              onSelected: t[8] || (t[8] = (g) => this.$emit("buttonClicked", g))
            }, null, 8, ["class", "items"])) : N("", !0)
          ])) : n.buttons && n.buttons.length ? (m(), X(o, {
            key: 1,
            class: D(a.searchbarOpened ? "hidden" : ""),
            outlined: "",
            size: "md",
            icon: "expand_more",
            textSlot: "Options",
            items: n.buttons,
            onSelected: t[9] || (t[9] = (g) => this.$emit("buttonClicked", g))
          }, null, 8, ["class", "items"])) : N("", !0)
        ], 2)
      ], 2)) : N("", !0),
      (!n.data || Object.keys(n.data).length === 0 || Object.keys(n.data.items).length === 0) && !n.loading ? (m(), x("div", {
        key: 1,
        class: D(["flex items-center w-auto p-4 rounded-lg transition", [
          a.hasSlot ? "" : "hidden",
          n.itemsNotFoundHasBgColor ? `bg-${n.itemsNotFoundBgClass}-100 dark:bg-${n.itemsNotFoundBgClass}-800 text-${n.itemsNotFoundTextColorClass}-800 dark:text-${n.itemsNotFoundTextColorClass}-100` : "text-white",
          n.informal ? "mx-auto mb-3 sm:mb-5" : "m-6"
        ]])
      }, [
        He(e.$slots, "default")
      ], 2)) : (m(), x("table", {
        key: 2,
        ref: "table",
        class: D(["relative w-full formal-table fill-available", {
          "border-collapse": !n.informal,
          "border-separate table-informal": n.informal
        }])
      }, [
        F("colgroup", null, [
          n.informal ? N("", !0) : (m(), x("col", {
            key: 0,
            class: D({
              "w-8": s.activeHeadings.length > 0,
              "w-auto": s.activeHeadings.length === 0
            })
          }, null, 2)),
          (m(!0), x(me, null, Ye(s.activeHeadings, (g, O) => (m(), x("col", {
            key: O,
            class: D(["w-auto", {
              "min-w-[160px]": !n.informal,
              "min-w-[120px]": n.informal
            }])
          }, null, 2))), 128)),
          Qm
        ]),
        F("thead", null, [
          F("tr", {
            class: D([{
              "bg-white dark:bg-gray-800 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition": !n.informal
            }, "sticky z-20 top-0 transition-all"])
          }, [
            n.informal ? N("", !0) : (m(), x("th", {
              key: 0,
              class: D([{
                "pt-3 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full": !n.informal
              }, "sticky z-10 pl-6 pb-0 pr-3 left-0 text-left bg-white dark:bg-gray-800 transition-all"])
            }, null, 2)),
            (m(!0), x(me, null, Ye(s.activeHeadings, (g, O) => (m(), x("th", {
              key: g.id,
              class: D(["pb-0", [
                O > 0 ? "pl-7" : "",
                O === 0 && n.informal ? "pl-3" : "",
                g.align === "left" || !g.align ? "text-left" : "",
                g.align === "right" ? "text-right" : "",
                g.align === "center" ? "text-center" : "",
                n.informal ? `${n.bgLight} dark:${n.bgDark} transition` : "pt-3 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition-all"
              ]])
            }, [
              g.sort == "disabled" ? (m(), X(f, {
                key: 0,
                class: "inline-flex uppercase",
                size: "sm",
                align: "right",
                compact: ""
              }, {
                default: H(() => [
                  z(V(s.headingTitle(g.title || g.name)), 1)
                ]),
                _: 2
              }, 1024)) : (m(), X(f, {
                key: 1,
                class: "inline-flex uppercase",
                size: "sm",
                align: "right",
                compact: "",
                onClicked: (d) => s.sort(g),
                color: !g.title && !g.name ? "danger" : g.sort ? "action" : null,
                icon: g.sort === "asc" || !g.sort ? "keyboard_arrow_up" : "keyboard_arrow_down"
              }, {
                default: H(() => [
                  z(V(s.headingTitle(g.title || g.name)), 1)
                ]),
                _: 2
              }, 1032, ["onClicked", "color", "icon"]))
            ], 2))), 128)),
            F("th", {
              class: D([[
                n.informal ? `pr-1 ${n.bgLight} dark:${n.bgDark} transition` : "pr-6 bg-white dark:bg-gray-800 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition-all"
              ], "sticky z-10 pl-3 pb-0 right-0 text-right transition-all"])
            }, [
              ce(f, {
                size: "md",
                icon: "playlist_add",
                class: D({
                  "ml-auto pt-3": !n.informal
                }),
                onClicked: t[10] || (t[10] = (g) => a.settingsOpened = !a.settingsOpened)
              }, null, 8, ["class"]),
              n.informal ? (m(), x("div", {
                key: 0,
                class: D([`${n.bgLight} dark:${n.bgDark}`, "absolute top-0 bottom-0 left-0 -right-4 -z-10 transition"])
              }, null, 2)) : N("", !0)
            ], 2)
          ], 2)
        ]),
        F("tbody", null, [
          (m(!0), x(me, null, Ye(s.currentItems, (g, O) => (m(), x("tr", {
            key: g.id,
            class: D(["relative transition-all group", {
              "border-b border-gray-200 dark:border-gray-700": O < s.currentItems.length - 1 && !n.informal,
              "animate-loading": n.loading,
              "h-8 hover:bg-gray-100 dark:hover:bg-gray-800": !n.informal,
              "h-12 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg": n.informal
            }])
          }, [
            n.informal ? N("", !0) : (m(), x("td", {
              key: 0,
              class: D(["sticky z-10 pl-6 pr-3 left-0 bg-white dark:bg-gray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 overflow-hidden transition", {
                "py-0": !n.informal,
                "pt-2 pb-2": n.informal
              }])
            }, [
              n.selectionEnabled ? (m(), X(w, {
                key: 0,
                size: "md",
                onChanged: (d) => s.select(d, g.id)
              }, null, 8, ["onChanged"])) : N("", !0)
            ], 2)),
            (m(!0), x(me, null, Ye(s.activeHeadings, (d, h) => (m(), x("td", {
              key: d.name,
              class: D([[
                h > 0 ? "pl-7" : "",
                h === 0 && n.informal ? "pl-3 rounded-l-lg border-l overflow-hidden before:opacity-0 group-hover:before:opacity-100 before:content-[''] before:absolute before:mt-[-9.75px] before:left-0 before:right-0 before:h-12 before:overflow-clip group-hover:before:shadow-card dark:group-hover:before:shadow-card-dark before:rounded-lg before:transition" : "",
                h === s.activeHeadings.length - 1 ? "pr-2" : "",
                d.align === "left" || !d.align ? "text-left" : "",
                d.align === "right" ? "text-right" : "",
                d.align === "center" ? "text-center" : "",
                n.informal ? "pt-2 pb-2 border-t border-b border-gray-200 dark:border-gray-700 transition" : "py-0",
                n.isRowClickable && !d.action ? "cursor-pointer" : ""
              ], "align-middle"]),
              onClick: (y) => n.isRowClickable && !d.action ? s.click(g.id, "row") : ""
            }, [
              !n.loading && d.format !== "label" ? (m(), X(S, {
                key: 0,
                class: "inline-flex",
                size: "sm",
                "hide-errors": "",
                action: d.action,
                copy: d.copy,
                link: d.action === "link" ? g[d.name].link : null,
                insecure: d.action === "link" ? g[d.name].insecure : null,
                secret: d.secret,
                format: d.format,
                "unit-label": d.unitLabel,
                "unit-icon": d.unitIcon,
                "unit-icon-outlined": d.unitIconOutlined,
                "min-decimals": d.minDecimals,
                "max-decimals": d.maxDecimals
              }, {
                default: H(() => [
                  z(V(s.cellValue(
                    d.action === "link" ? g[d.name].text : g[d.name],
                    d.name
                  )), 1)
                ]),
                _: 2
              }, 1032, ["action", "copy", "link", "insecure", "secret", "format", "unit-label", "unit-icon", "unit-icon-outlined", "min-decimals", "max-decimals"])) : N("", !0),
              !n.loading && d.format === "label" ? (m(), X(p, {
                key: 1,
                class: "inline-flex my-0.75",
                size: "sm",
                color: g[d.name].color,
                disabled: g[d.name].disabled
              }, {
                default: H(() => [
                  z(V(s.cellValue(g[d.name].text, d.name)), 1)
                ]),
                _: 2
              }, 1032, ["color", "disabled"])) : N("", !0),
              n.loading ? (m(), x("div", {
                key: 2,
                class: D(["inline-block bg-gray-400 align-middle", {
                  "w-24 h-2 rounded-md": d.format !== "label",
                  "w-14 h-6 rounded-full": d.format === "label"
                }])
              }, null, 2)) : N("", !0)
            ], 10, $m))), 128)),
            F("td", {
              class: D(["z-10 pl-3 py-0 max-w-[120px] right-0 bg-white dark:bg-gray-800 transition-all", [
                n.loading ? "before:opacity-100" : "",
                n.informal ? "pr-3 h-12" : "pr-6 overflow-y-clip row-clip group-hover:bg-gray-100 dark:group-hover:bg-gray-800 before:content-[''] before:absolute before:-z-10 before:inset-0 before:opacity-0 group-hover:before:opacity-100 before:transition before:shadow-box dark:before:shadow-box-dark",
                n.informal && !n.bgDark && !n.bgLight ? "!bg-transparent" : "",
                s.hasStickyDetails() || !n.informal ? "sticky" : "relative border-gray-200 dark:border-gray-700 rounded-r-lg border-t border-r border-b"
              ]])
            }, [
              s.hasStickyDetails() || !n.informal ? (m(), x("div", {
                key: 0,
                class: D([
                  n.informal ? "flex items-center absolute -top-2  h-16 left-[-0.75px] -right-4 pr-4 overflow-hidden transition-all" : ""
                ])
              }, [
                (!n.informal && !n.loading || n.informal) && !n.actionDropdownItems.length ? (m(), X(f, {
                  key: 0,
                  size: "sm",
                  icon: n.informal ? n.ctaIcon : "last_page",
                  outlined: n.informal,
                  color: "action",
                  disabled: n.ctaIconDisabled,
                  align: "right",
                  compact: "",
                  onClicked: (d) => s.click(g.id, "actionButton"),
                  class: D(["z-20", {
                    "ml-auto": !n.informal,
                    "justify-center absolute h-12 w-[49px] bg-white dark:bg-gray-800 border-r border-t border-b border-gray-200 dark:border-gray-700 rounded-r-lg transition": n.informal,
                    "cursor-auto": n.informal && !n.ctaIcon
                  }])
                }, {
                  default: H(() => [
                    z(V(s.detailsText), 1)
                  ]),
                  _: 2
                }, 1032, ["icon", "outlined", "disabled", "onClicked", "class"])) : (m(), x("div", eg, [
                  ce(i, {
                    onClick: (d) => s.openDropdown(d, g[n.rowItemIdentifier]),
                    size: "sm",
                    icon: "more_horiz",
                    outlined: "",
                    buttonRoundedClasses: "border-none !bg-transparent "
                  }, null, 8, ["onClick"])
                ])),
                n.loading ? (m(), x("div", {
                  key: 2,
                  class: D(["flex flex-row items-center", { "p-3": n.informal }])
                }, [
                  n.informal ? (m(), X(M, {
                    key: 1,
                    size: "sm",
                    class: "text-action-300 dark:text-action-600",
                    outlined: ""
                  }, {
                    default: H(() => [
                      z(" assignment ")
                    ]),
                    _: 1
                  })) : (m(), x(me, { key: 0 }, [
                    tg,
                    ce(M, {
                      size: "sm",
                      class: "text-action-300 dark:text-action-600"
                    }, {
                      default: H(() => [
                        z(" last_page ")
                      ]),
                      _: 1
                    })
                  ], 64))
                ], 2)) : N("", !0),
                n.informal ? (m(), x("div", ng)) : N("", !0),
                n.informal ? (m(), x("div", {
                  key: 4,
                  class: D(`${n.bgLight} dark:${n.bgDark} absolute top-2 bottom-2 left-0 right-0 z-0 transition`)
                }, null, 2)) : N("", !0),
                n.informal ? (m(), x("div", {
                  key: 5,
                  class: D(["absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition", [
                    n.bgLight ? `${n.bgLight}` : "bg-white",
                    n.bgDark ? `dark:${n.bgDark}` : "dark:bg-gray-800"
                  ]])
                }, null, 2)) : N("", !0)
              ], 2)) : N("", !0)
            ], 2)
          ], 2))), 128))
        ])
      ], 2))
    ], 2),
    ce(ns, {
      "enter-active-class": "transition ease-out duration-200",
      "enter-from-class": "transform opacity-0 scale-95",
      "enter-to-class": "transform opacity-100 scale-100",
      "leave-active-class": "transition ease-in duration-75",
      "leave-from-class": "transform opacity-100 scale-100",
      "leave-to-class": "transform opacity-0 scale-95",
      appear: ""
    }, {
      default: H(() => [
        vt(F("div", rg, [
          F("div", ag, [
            (m(!0), x(me, null, Ye(n.actionDropdownItems, (g) => (m(), x("button", {
              onClick: (O) => s.dropdownActionSelected(g.identifier),
              key: g.identifier,
              class: "dark:hover:bg-gray-900 cursor-pointer first-of-type:rounded-tr-lg first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-bl-lg hover:bg-gray-100 w-full p-2 text-md dark:text-white text-gray-900 transition-all duration-300 items-center flex flex-row space-x-3 border-t dark:border-gray-700 first-of-type:border-t-0"
            }, [
              ce(M, {
                size: "sm",
                class: "text-gray-400"
              }, {
                default: H(() => [
                  z(V(g.icon), 1)
                ]),
                _: 2
              }, 1024),
              F("span", ig, V(g.textSlot), 1)
            ], 8, sg))), 128))
          ])
        ], 512), [
          [_n, a.dropdownOpen]
        ])
      ]),
      _: 1
    }),
    F("div", {
      class: D(["absolute max-w-[200px] z-30 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-card dark:shadow-card-dark transition-all before:absolute before:content-[''] before:w-4 before:h-4 before:-top-2 before:z-0 before:rotate-45 before:bg-gray-100 dark:before:bg-gray-700 before:border before:border-t-gray-200 before:border-l-gray-200 dark:before:border-t-gray-600 dark:before:border-l-gray-600 before:border-b-gray-100 before:border-r-gray-100 dark:before:border-b-gray-700 dark:before:border-r-gray-700 before:transition", {
        "opacity-0 invisible -translate-y-5": !a.settingsOpened || this.loading,
        "opacity-1 visible translate-y-0": a.settingsOpened && !this.loading,
        "top-32 sm:top-20 right-3 before:right-6": !n.informal,
        "top-36 sm:top-24 right-5 before:right-3": n.informal
      }])
    }, [
      F("div", lg, [
        (m(!0), x(me, null, Ye(s.headings, (g, O) => (m(), x("div", {
          key: O,
          class: "flex flex-row justify-between gap-2 p-1 items-center hover:bg-white dark:hover:bg-gray-800 transition"
        }, [
          ce(M, {
            size: "sm",
            outlined: "",
            onClick: (d) => s.toggleHeading(g),
            class: D(["cursor-pointer transition", {
              "text-gray-400": g.visible,
              "text-gray-200 dark:text-gray-600": !g.visible
            }])
          }, {
            default: H(() => [
              z(V(g.visible ? "visibility" : "visibility_off"), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "class"]),
          F("span", {
            class: D(["mr-auto prose-md element-text truncate font-normal cursor-pointer transition", {
              "text-gray-900 dark:text-white": g.visible,
              "text-gray-500 dark:text-gray-500": !g.visible
            }]),
            onClick: (d) => s.toggleHeading(g)
          }, V(g.title), 11, og),
          ce(M, {
            size: "sm",
            class: D(["cursor-grab transition", {
              "text-gray-400": g.visible,
              "text-gray-200 dark:text-gray-600": !g.visible
            }]),
            disabled: g.visible
          }, {
            default: H(() => [
              z("drag_handle")
            ]),
            _: 2
          }, 1032, ["class", "disabled"])
        ]))), 128))
      ])
    ], 2),
    F("div", {
      class: D(["flex flex-col xs:flex-row items-center justify-between prose-xs element-text text-gray-500 border-gray-200 dark:border-gray-700 transition", {
        "border-t": s.currentItems.length > 0 || n.informal,
        "bg-white dark:bg-gray-800 border-b border-l border-r rounded-b-xl translate-z-0": !n.informal,
        "px-6 py-3": !n.informal,
        "px-3 py-2 mx-4": n.informal
      }])
    }, [
      F("div", {
        class: D({
          "italic text-danger-500 dark:text-danger-400 transition": a.error
        }),
        innerHTML: s.footerText
      }, null, 10, cg),
      F("div", ug, [
        ce(f, {
          size: "sm",
          icon: "keyboard_arrow_up",
          class: "mr-2",
          onClicked: t[11] || (t[11] = (g) => s.paginate("prev")),
          disabled: s.meta.currentPage <= 1
        }, {
          default: H(() => [
            z(V(this.t("table.previous")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        ce(f, {
          size: "sm",
          icon: "keyboard_arrow_down",
          onClicked: t[12] || (t[12] = (g) => s.paginate("next")),
          disabled: s.meta.currentPage >= s.meta.totalPages
        }, {
          default: H(() => [
            z(V(this.t("table.next")), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 2)
  ], 2);
}
const yg = /* @__PURE__ */ Te(zm, [["render", dg]]);
export {
  Xn as PawButton,
  rs as PawCheckbox,
  Qi as PawChip,
  _c as PawCrazyInput,
  hg as PawDatePicker,
  Xh as PawDropDown,
  mg as PawFloatingBar,
  et as PawIcon,
  $h as PawLabel,
  Nm as PawLazyField,
  Os as PawLink,
  gg as PawList,
  Pm as PawListItem,
  Go as PawRadio,
  _g as PawSwitch,
  yg as PawTable
};
