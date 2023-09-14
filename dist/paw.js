import { openBlock as y, createElementBlock as w, normalizeClass as M, renderSlot as Le, resolveComponent as ae, createBlock as re, withCtx as j, createTextVNode as B, toDisplayString as U, createCommentVNode as I, createElementVNode as P, createVNode as se, h as It, Fragment as ce, getCurrentInstance as Pr, inject as ei, onMounted as ti, onUnmounted as ni, ref as Me, computed as zt, watch as cs, Text as us, renderList as Ve, withDirectives as pt, vModelText as zs, vModelDynamic as ri, vShow as wn, pushScopeId as si, popScopeId as ai, Transition as ii } from "vue";
const ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, li = {
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
function oi(e, t, n, r, s, a) {
  return y(), w("span", {
    class: M(a.setClassNames())
  }, [
    Le(e.$slots, "default")
  ], 2);
}
const ze = /* @__PURE__ */ ve(li, [["render", oi]]), ci = {
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
    }
  },
  components: {
    PawIcon: ze
  },
  methods: {
    click() {
      this.$emit("clicked");
    },
    setClassNames() {
      let e = "";
      switch (this.size) {
        case "sm":
          e += "h-6 prose-xs element-text rounded-sm";
          break;
        case "md":
          e += "h-8 prose-md element-text rounded-md";
          break;
        case "lg":
          e += "h-10 prose-md element-text rounded-lg";
          break;
      }
      if (this.icon && !this.hasSlot && !this.loading)
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
      if (this.disabled ? e += "text-gray-100 dark:text-gray-700" : this.outlined ? (e += "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 group-active:text-gray-400 dark:group-active:text-gray-400 group-focus:text-action-400 dark:group-focus:text-action-400", this.icon && !this.hasSlot && (e += "  -ml-px")) : e += "text-action-100 dark:text-action-100 group-hover:text-white group-active:text-action-100 dark:group-active:text-action-100 group-focus:text-white dark:group-focus:text-white", !this.hasSlot)
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
      return this.loading ? "bg-gray-400 loading-bubble" : this.disabled ? "italic text-white dark:text-gray-800 bg-gray-200 dark:bg-gray-600 cursor-default pointer-events-none" : this.outlined ? "bg-white dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-600 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 active:text-gray-500 dark:active:text-gray-500 active:bg-white dark:active:bg-gray-800 active:border-gray-400 dark:active:border-gray-400 focus:text-action-500 dark:focus:text-action-400 focus:border-action-500 dark:focus:border-action-400" : "bg-action-500 dark:bg-action-400 text-white hover:bg-action-300 dark:hover:bg-action-600 active:bg-action-500 dark:active:bg-action-400";
    }
  }
}, ui = ["title"], di = /* @__PURE__ */ P("div", { class: "h-1/3 w-10 bg-gray-500 rounded-full" }, null, -1), fi = [
  di
], hi = ["title"], mi = { class: "truncate" };
function gi(e, t, n, r, s, a) {
  const i = ae("PawIcon");
  return n.loading ? (y(), w("div", {
    key: 0,
    class: M(["flex items-center group max-w-fit my-0 transition", a.setClassNames()]),
    disabled: "",
    title: n.title
  }, fi, 10, ui)) : (y(), w("button", {
    key: 1,
    class: M(["flex items-center group max-w-full my-0 transition", a.setClassNames()]),
    title: n.title,
    onClick: t[0] || (t[0] = (...l) => a.click && a.click(...l))
  }, [
    n.icon ? (y(), re(i, {
      key: 0,
      size: n.size,
      outlined: n.outlined,
      class: M(["transition", a.setIconClassNames()])
    }, {
      default: j(() => [
        B(U(n.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : I("", !0),
    P("span", mi, [
      Le(e.$slots, "default")
    ])
  ], 10, hi));
}
const Er = /* @__PURE__ */ ve(ci, [["render", gi]]), yi = {
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
    PawIcon: ze
  },
  methods: {
    change() {
      this.$emit("changed", this.value = !this.value);
    }
  }
}, bi = ["title"], _i = { class: "relative w-[18px] h-[18px] m-0.75 shrink-0 self-start pointer-events-none" }, pi = ["checked", "disabled"], ki = { class: "absolute inset-0 block peer-checked:opacity-100 opacity-0 w-4 h-4 m-px bg-white dark:peer-disabled:bg-gray-500 text-action-500 dark:text-action-400 peer-disabled:text-gray-200 dark:peer-disabled:text-gray-600 overflow-hidden rounded-sm transition z-10" }, wi = /* @__PURE__ */ B(" check_box "), vi = { class: "absolute inset-0 block group-hover:peer-checked:opacity-100 group-hover:peer-checked:peer-disabled:opacity-0 opacity-0 w-4 h-4 m-px bg-white overflow-hidden rounded-sm transition z-20" }, xi = /* @__PURE__ */ B(" indeterminate_check_box "), Si = /* @__PURE__ */ P("span", { class: "absolute inset-0 block w-[18px] h-[18px] border-2 border-gray-400 peer-checked:border-action-500 dark:peer-checked:border-action-400 peer-disabled:border-gray-200 dark:peer-disabled:border-gray-600 rounded-sm peer-disabled:cursor-default transition z-30" }, null, -1);
function Mi(e, t, n, r, s, a) {
  const i = ae("PawIcon");
  return y(), w("label", {
    class: M(["group inline-flex items-center", {
      "cursor-pointer": !n.disabled,
      "pointer-events-none": n.disabled,
      "gap-1": n.size === "sm",
      "gap-2 p-1": n.size === "md",
      "gap-3 p-2": n.size === "lg"
    }]),
    title: n.title
  }, [
    P("span", _i, [
      P("input", {
        type: "checkbox",
        onChange: t[0] || (t[0] = (...l) => a.change && a.change(...l)),
        checked: n.checked,
        disabled: n.disabled,
        class: "peer hidden"
      }, null, 40, pi),
      P("span", ki, [
        se(i, {
          size: "md",
          class: "ml-[50%] mt-[50%] -translate-x-1/2 -translate-y-1/2"
        }, {
          default: j(() => [
            wi
          ]),
          _: 1
        })
      ]),
      P("span", vi, [
        se(i, {
          size: "md",
          class: "text-action-500 dark:text-action-400 ml-[50%] mt-[50%] -translate-x-1/2 -translate-y-1/2"
        }, {
          default: j(() => [
            xi
          ]),
          _: 1
        })
      ]),
      Si
    ]),
    e.$slots.default ? (y(), w("span", {
      key: 0,
      class: M(["text-md transition", n.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"])
    }, [
      Le(e.$slots, "default")
    ], 2)) : I("", !0)
  ], 10, bi);
}
const js = /* @__PURE__ */ ve(yi, [["render", Mi]]), Oi = {
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
    PawIcon: ze
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
}, Di = ["title"], Ti = { class: "truncate" }, Ci = /* @__PURE__ */ B("close");
function Yi(e, t, n, r, s, a) {
  const i = ae("PawIcon");
  return y(), w("button", {
    class: M(["inline-flex items-center group my-0 max-w-full rounded-full overflow-hidden transition", a.setClassNames()]),
    title: n.title,
    onClick: t[0] || (t[0] = (...l) => a.click && a.click(...l))
  }, [
    n.icon ? (y(), re(i, {
      key: 0,
      size: n.size,
      outlined: n.outlined,
      class: M(["transition", a.setIconClassNames()])
    }, {
      default: j(() => [
        B(U(n.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : I("", !0),
    P("span", Ti, [
      Le(e.$slots, "default")
    ]),
    n.disabled ? I("", !0) : (y(), re(i, {
      key: 1,
      size: "sm",
      class: M(["transition", a.setCloseClassNames()])
    }, {
      default: j(() => [
        Ci
      ]),
      _: 1
    }, 8, ["class"]))
  ], 10, Di);
}
const Ii = /* @__PURE__ */ ve(Oi, [["render", Yi]]), Ni = {
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
    PawIcon: ze
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
}, Pi = ["title"];
function Ei(e, t, n, r, s, a) {
  const i = ae("PawIcon");
  return y(), w("button", {
    class: M(["flex items-center group max-w-full my-0", a.setClassNames()]),
    title: n.title,
    onClick: t[0] || (t[0] = (...l) => a.click && a.click(...l))
  }, [
    n.icon ? (y(), re(i, {
      key: 0,
      size: n.compact ? "sm" : n.size,
      outlined: n.outlined,
      class: M(a.setIconClassNames())
    }, {
      default: j(() => [
        B(U(n.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : I("", !0),
    s.hasSlot ? (y(), w("span", {
      key: 1,
      class: M(["truncate transition", a.setTextClassNames()])
    }, [
      Le(e.$slots, "default")
    ], 2)) : I("", !0)
  ], 10, Pi);
}
const Bs = /* @__PURE__ */ ve(Ni, [["render", Ei]]), Li = {
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
}, Ri = ["title"], Fi = { class: "block w-5 h-5 m-0.5 shrink-0 self-start pointer-events-none" }, Wi = ["checked", "disabled"], Vi = /* @__PURE__ */ P("label", { class: "block w-5 h-5 border-2 peer-checked:border-6 peer-checked:bg-white dark:peer-checked:peer-disabled:bg-gray-500 border-gray-400 peer-checked:border-action-500 dark:peer-checked:border-action-400 peer-disabled:border-gray-200 dark:peer-disabled:border-gray-600 rounded-full transition" }, null, -1);
function Ai(e, t, n, r, s, a) {
  return y(), w("label", {
    class: M(["inline-flex items-center max-w-full", {
      "cursor-pointer": !n.disabled,
      "pointer-events-none": n.disabled,
      "gap-1": n.size === "sm",
      "gap-2 p-1": n.size === "md",
      "gap-3 p-2": n.size === "lg"
    }]),
    title: n.title
  }, [
    P("span", Fi, [
      P("input", {
        type: "radio",
        onChange: t[0] || (t[0] = (...i) => a.change && a.change(...i)),
        checked: n.checked,
        disabled: n.disabled,
        class: "peer hidden"
      }, null, 40, Wi),
      Vi
    ]),
    e.$slots.default ? (y(), w("span", {
      key: 0,
      class: M(["text-md truncate transition", n.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"])
    }, [
      Le(e.$slots, "default")
    ], 2)) : I("", !0)
  ], 10, Ri);
}
const Ui = /* @__PURE__ */ ve(Li, [["render", Ai]]);
/*!
  * @intlify/shared v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const wt = typeof window < "u";
let Oe, vt;
if (process.env.NODE_ENV !== "production") {
  const e = wt && window.performance;
  e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (Oe = (t) => e.mark(t), vt = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const Hi = /\{([0-9a-zA-Z]+)\}/g;
function Pn(e, ...t) {
  return t.length === 1 && fe(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Hi, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const zi = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", ct = (e) => zi ? Symbol(e) : e, ji = (e, t, n) => Bi({ l: e, k: t, s: n }), Bi = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), _e = (e) => typeof e == "number" && isFinite(e), Gi = (e) => Lr(e) === "[object Date]", vn = (e) => Lr(e) === "[object RegExp]", En = (e) => Z(e) && Object.keys(e).length === 0;
function en(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ue = Object.assign;
let ds;
const Tt = () => ds || (ds = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fs(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Zi = Object.prototype.hasOwnProperty;
function Gs(e, t) {
  return Zi.call(e, t);
}
const de = Array.isArray, pe = (e) => typeof e == "function", E = (e) => typeof e == "string", le = (e) => typeof e == "boolean", fe = (e) => (
  // eslint-disable-line
  e !== null && typeof e == "object"
), Zs = Object.prototype.toString, Lr = (e) => Zs.call(e), Z = (e) => Lr(e) === "[object Object]", qi = (e) => e == null ? "" : de(e) || Z(e) && e.toString === Zs ? JSON.stringify(e, null, 2) : String(e), hs = 2;
function Ji(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let s = 0;
  const a = [];
  for (let i = 0; i < r.length; i++)
    if (s += r[i].length + 1, s >= t) {
      for (let l = i - hs; l <= i + hs || n > s; l++) {
        if (l < 0 || l >= r.length)
          continue;
        const u = l + 1;
        a.push(`${u}${" ".repeat(3 - String(u).length)}|  ${r[l]}`);
        const h = r[l].length;
        if (l === i) {
          const p = t - (s - h) + 1, S = Math.max(1, n > s ? h - p : n - t);
          a.push("   |  " + " ".repeat(p) + "^".repeat(S));
        } else if (l > i) {
          if (n > s) {
            const p = Math.max(Math.min(n - s, h), 1);
            a.push("   |  " + "^".repeat(p));
          }
          s += h + 1;
        }
      }
      break;
    }
  return a.join(`
`);
}
function Ki() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, r) {
      const s = e.get(n);
      s && s.push(r) || e.set(n, [r]);
    },
    off(n, r) {
      const s = e.get(n);
      s && s.splice(s.indexOf(r) >>> 0, 1);
    },
    emit(n, r) {
      (e.get(n) || []).slice().map((s) => s(r)), (e.get("*") || []).slice().map((s) => s(n, r));
    }
  };
}
/*!
  * @intlify/message-resolver v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
process.env.NODE_ENV;
const Xi = Object.prototype.hasOwnProperty;
function Qi(e, t) {
  return Xi.call(e, t);
}
const bn = (e) => (
  // eslint-disable-line
  e !== null && typeof e == "object"
), ut = [];
ut[
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
ut[
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
ut[
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
ut[
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
ut[
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
ut[
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
ut[
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
const $i = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function el(e) {
  return $i.test(e);
}
function tl(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function nl(e) {
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
function rl(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : el(t) ? tl(t) : "*" + t;
}
function sl(e) {
  const t = [];
  let n = -1, r = 0, s = 0, a, i, l, u, h, p, S;
  const x = [];
  x[
    0
    /* APPEND */
  ] = () => {
    i === void 0 ? i = l : i += l;
  }, x[
    1
    /* PUSH */
  ] = () => {
    i !== void 0 && (t.push(i), i = void 0);
  }, x[
    2
    /* INC_SUB_PATH_DEPTH */
  ] = () => {
    x[
      0
      /* APPEND */
    ](), s++;
  }, x[
    3
    /* PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, r = 4, x[
        0
        /* APPEND */
      ]();
    else {
      if (s = 0, i === void 0 || (i = rl(i), i === !1))
        return !1;
      x[
        1
        /* PUSH */
      ]();
    }
  };
  function V() {
    const g = e[n + 1];
    if (r === 5 && g === "'" || r === 6 && g === '"')
      return n++, l = "\\" + g, x[
        0
        /* APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && V())) {
      if (u = nl(a), S = ut[r], h = S[u] || S.l || 8, h === 8 || (r = h[0], h[1] !== void 0 && (p = x[h[1]], p && (l = a, p() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const ms = /* @__PURE__ */ new Map();
function xn(e, t) {
  if (!bn(e))
    return null;
  let n = ms.get(t);
  if (n || (n = sl(t), n && ms.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, a = 0;
  for (; a < r; ) {
    const i = s[n[a]];
    if (i === void 0)
      return null;
    s = i, a++;
  }
  return s;
}
function gr(e) {
  if (!bn(e))
    return e;
  for (const t in e)
    if (Qi(e, t))
      if (!t.includes(
        "."
        /* DOT */
      ))
        bn(e[t]) && gr(e[t]);
      else {
        const n = t.split(
          "."
          /* DOT */
        ), r = n.length - 1;
        let s = e;
        for (let a = 0; a < r; a++)
          n[a] in s || (s[n[a]] = {}), s = s[n[a]];
        s[n[r]] = e[t], delete e[t], bn(s[n[r]]) && gr(s[n[r]]);
      }
  return e;
}
/*!
  * @intlify/runtime v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const al = (e) => e, il = (e) => "", ll = "text", ol = (e) => e.length === 0 ? "" : e.join(""), cl = qi;
function gs(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function ul(e) {
  const t = _e(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (_e(e.named.count) || _e(e.named.n)) ? _e(e.named.count) ? e.named.count : _e(e.named.n) ? e.named.n : t : t;
}
function dl(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function fl(e = {}) {
  const t = e.locale, n = ul(e), r = fe(e.pluralRules) && E(t) && pe(e.pluralRules[t]) ? e.pluralRules[t] : gs, s = fe(e.pluralRules) && E(t) && pe(e.pluralRules[t]) ? gs : void 0, a = (c) => c[r(n, c.length, s)], i = e.list || [], l = (c) => i[c], u = e.named || {};
  _e(e.pluralIndex) && dl(n, u);
  const h = (c) => u[c];
  function p(c) {
    const f = pe(e.messages) ? e.messages(c) : fe(e.messages) ? e.messages[c] : !1;
    return f || (e.parent ? e.parent.message(c) : il);
  }
  const S = (c) => e.modifiers ? e.modifiers[c] : al, x = Z(e.processor) && pe(e.processor.normalize) ? e.processor.normalize : ol, V = Z(e.processor) && pe(e.processor.interpolate) ? e.processor.interpolate : cl, g = Z(e.processor) && E(e.processor.type) ? e.processor.type : ll, T = {
    list: l,
    named: h,
    plural: a,
    linked: (c, f) => {
      const k = p(c)(T);
      return E(f) ? S(f)(k) : k;
    },
    message: p,
    type: g,
    interpolate: V,
    normalize: x
  };
  return T;
}
/*!
  * @intlify/message-compiler v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const hl = {
  // tokenizer error messages
  [
    0
    /* EXPECTED_TOKEN */
  ]: "Expected token: '{0}'",
  [
    1
    /* INVALID_TOKEN_IN_PLACEHOLDER */
  ]: "Invalid token in placeholder: '{0}'",
  [
    2
    /* UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER */
  ]: "Unterminated single quote in placeholder",
  [
    3
    /* UNKNOWN_ESCAPE_SEQUENCE */
  ]: "Unknown escape sequence: \\{0}",
  [
    4
    /* INVALID_UNICODE_ESCAPE_SEQUENCE */
  ]: "Invalid unicode escape sequence: {0}",
  [
    5
    /* UNBALANCED_CLOSING_BRACE */
  ]: "Unbalanced closing brace",
  [
    6
    /* UNTERMINATED_CLOSING_BRACE */
  ]: "Unterminated closing brace",
  [
    7
    /* EMPTY_PLACEHOLDER */
  ]: "Empty placeholder",
  [
    8
    /* NOT_ALLOW_NEST_PLACEHOLDER */
  ]: "Not allowed nest placeholder",
  [
    9
    /* INVALID_LINKED_FORMAT */
  ]: "Invalid linked format",
  // parser error messages
  [
    10
    /* MUST_HAVE_MESSAGES_IN_PLURAL */
  ]: "Plural must have messages",
  [
    11
    /* UNEXPECTED_EMPTY_LINKED_MODIFIER */
  ]: "Unexpected empty linked modifier",
  [
    12
    /* UNEXPECTED_EMPTY_LINKED_KEY */
  ]: "Unexpected empty linked key",
  [
    13
    /* UNEXPECTED_LEXICAL_ANALYSIS */
  ]: "Unexpected lexical analysis in token: '{0}'"
};
function Ln(e, t, n = {}) {
  const { domain: r, messages: s, args: a } = n, i = process.env.NODE_ENV !== "production" ? Pn((s || hl)[e] || "", ...a || []) : e, l = new SyntaxError(String(i));
  return l.code = e, t && (l.location = t), l.domain = r, l;
}
function ml(e) {
  throw e;
}
function gl(e, t, n) {
  return { line: e, column: t, offset: n };
}
function yr(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const Ze = " ", yl = "\r", be = `
`, bl = String.fromCharCode(8232), _l = String.fromCharCode(8233);
function pl(e) {
  const t = e;
  let n = 0, r = 1, s = 1, a = 0;
  const i = (W) => t[W] === yl && t[W + 1] === be, l = (W) => t[W] === be, u = (W) => t[W] === _l, h = (W) => t[W] === bl, p = (W) => i(W) || l(W) || u(W) || h(W), S = () => n, x = () => r, V = () => s, g = () => a, T = (W) => i(W) || u(W) || h(W) ? be : t[W], c = () => T(n), f = () => T(n + a);
  function k() {
    return a = 0, p(n) && (r++, s = 0), i(n) && n++, n++, s++, t[n];
  }
  function C() {
    return i(n + a) && a++, a++, t[n + a];
  }
  function m() {
    n = 0, r = 1, s = 1, a = 0;
  }
  function L(W = 0) {
    a = W;
  }
  function F() {
    const W = n + a;
    for (; W !== n; )
      k();
    a = 0;
  }
  return {
    index: S,
    line: x,
    column: V,
    peekOffset: g,
    charAt: T,
    currentChar: c,
    currentPeek: f,
    next: k,
    peek: C,
    reset: m,
    resetPeek: L,
    skipToPeek: F
  };
}
const st = void 0, ys = "'", kl = "tokenizer";
function wl(e, t = {}) {
  const n = t.location !== !1, r = pl(e), s = () => r.index(), a = () => gl(r.line(), r.column(), r.index()), i = a(), l = s(), u = {
    currentType: 14,
    offset: l,
    startLoc: i,
    endLoc: i,
    lastType: 14,
    lastOffset: l,
    lastStartLoc: i,
    lastEndLoc: i,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, h = () => u, { onError: p } = t;
  function S(o, d, _, ...Y) {
    const A = h();
    if (d.column += _, d.offset += _, p) {
      const K = yr(A.startLoc, d), Fe = Ln(o, K, {
        domain: kl,
        args: Y
      });
      p(Fe);
    }
  }
  function x(o, d, _) {
    o.endLoc = a(), o.currentType = d;
    const Y = { type: d };
    return n && (Y.loc = yr(o.startLoc, o.endLoc)), _ != null && (Y.value = _), Y;
  }
  const V = (o) => x(
    o,
    14
    /* EOF */
  );
  function g(o, d) {
    return o.currentChar() === d ? (o.next(), d) : (S(0, a(), 0, d), "");
  }
  function T(o) {
    let d = "";
    for (; o.currentPeek() === Ze || o.currentPeek() === be; )
      d += o.currentPeek(), o.peek();
    return d;
  }
  function c(o) {
    const d = T(o);
    return o.skipToPeek(), d;
  }
  function f(o) {
    if (o === st)
      return !1;
    const d = o.charCodeAt(0);
    return d >= 97 && d <= 122 || // a-z
    d >= 65 && d <= 90 || // A-Z
    d === 95;
  }
  function k(o) {
    if (o === st)
      return !1;
    const d = o.charCodeAt(0);
    return d >= 48 && d <= 57;
  }
  function C(o, d) {
    const { currentType: _ } = d;
    if (_ !== 2)
      return !1;
    T(o);
    const Y = f(o.currentPeek());
    return o.resetPeek(), Y;
  }
  function m(o, d) {
    const { currentType: _ } = d;
    if (_ !== 2)
      return !1;
    T(o);
    const Y = o.currentPeek() === "-" ? o.peek() : o.currentPeek(), A = k(Y);
    return o.resetPeek(), A;
  }
  function L(o, d) {
    const { currentType: _ } = d;
    if (_ !== 2)
      return !1;
    T(o);
    const Y = o.currentPeek() === ys;
    return o.resetPeek(), Y;
  }
  function F(o, d) {
    const { currentType: _ } = d;
    if (_ !== 8)
      return !1;
    T(o);
    const Y = o.currentPeek() === ".";
    return o.resetPeek(), Y;
  }
  function W(o, d) {
    const { currentType: _ } = d;
    if (_ !== 9)
      return !1;
    T(o);
    const Y = f(o.currentPeek());
    return o.resetPeek(), Y;
  }
  function te(o, d) {
    const { currentType: _ } = d;
    if (!(_ === 8 || _ === 12))
      return !1;
    T(o);
    const Y = o.currentPeek() === ":";
    return o.resetPeek(), Y;
  }
  function Q(o, d) {
    const { currentType: _ } = d;
    if (_ !== 10)
      return !1;
    const Y = () => {
      const K = o.currentPeek();
      return K === "{" ? f(o.peek()) : K === "@" || K === "%" || K === "|" || K === ":" || K === "." || K === Ze || !K ? !1 : K === be ? (o.peek(), Y()) : f(K);
    }, A = Y();
    return o.resetPeek(), A;
  }
  function Te(o) {
    T(o);
    const d = o.currentPeek() === "|";
    return o.resetPeek(), d;
  }
  function nt(o, d = !0) {
    const _ = (A = !1, K = "", Fe = !1) => {
      const Ge = o.currentPeek();
      return Ge === "{" ? K === "%" ? !1 : A : Ge === "@" || !Ge ? K === "%" ? !0 : A : Ge === "%" ? (o.peek(), _(A, "%", !0)) : Ge === "|" ? K === "%" || Fe ? !0 : !(K === Ze || K === be) : Ge === Ze ? (o.peek(), _(!0, Ze, Fe)) : Ge === be ? (o.peek(), _(!0, be, Fe)) : !0;
    }, Y = _();
    return d && o.resetPeek(), Y;
  }
  function ft(o, d) {
    const _ = o.currentChar();
    return _ === st ? st : d(_) ? (o.next(), _) : null;
  }
  function cn(o) {
    return ft(o, (_) => {
      const Y = _.charCodeAt(0);
      return Y >= 97 && Y <= 122 || // a-z
      Y >= 65 && Y <= 90 || // A-Z
      Y >= 48 && Y <= 57 || // 0-9
      Y === 95 || // _
      Y === 36;
    });
  }
  function er(o) {
    return ft(o, (_) => {
      const Y = _.charCodeAt(0);
      return Y >= 48 && Y <= 57;
    });
  }
  function tr(o) {
    return ft(o, (_) => {
      const Y = _.charCodeAt(0);
      return Y >= 48 && Y <= 57 || // 0-9
      Y >= 65 && Y <= 70 || // A-F
      Y >= 97 && Y <= 102;
    });
  }
  function un(o) {
    let d = "", _ = "";
    for (; d = er(o); )
      _ += d;
    return _;
  }
  function rt(o) {
    let d = "";
    for (; ; ) {
      const _ = o.currentChar();
      if (_ === "{" || _ === "}" || _ === "@" || _ === "|" || !_)
        break;
      if (_ === "%")
        if (nt(o))
          d += _, o.next();
        else
          break;
      else if (_ === Ze || _ === be)
        if (nt(o))
          d += _, o.next();
        else {
          if (Te(o))
            break;
          d += _, o.next();
        }
      else
        d += _, o.next();
    }
    return d;
  }
  function dn(o) {
    c(o);
    let d = "", _ = "";
    for (; d = cn(o); )
      _ += d;
    return o.currentChar() === st && S(6, a(), 0), _;
  }
  function nr(o) {
    c(o);
    let d = "";
    return o.currentChar() === "-" ? (o.next(), d += `-${un(o)}`) : d += un(o), o.currentChar() === st && S(6, a(), 0), d;
  }
  function rr(o) {
    c(o), g(o, "'");
    let d = "", _ = "";
    const Y = (K) => K !== ys && K !== be;
    for (; d = ft(o, Y); )
      d === "\\" ? _ += sr(o) : _ += d;
    const A = o.currentChar();
    return A === be || A === st ? (S(2, a(), 0), A === be && (o.next(), g(o, "'")), _) : (g(o, "'"), _);
  }
  function sr(o) {
    const d = o.currentChar();
    switch (d) {
      case "\\":
      case "'":
        return o.next(), `\\${d}`;
      case "u":
        return fn(o, d, 4);
      case "U":
        return fn(o, d, 6);
      default:
        return S(3, a(), 0, d), "";
    }
  }
  function fn(o, d, _) {
    g(o, d);
    let Y = "";
    for (let A = 0; A < _; A++) {
      const K = tr(o);
      if (!K) {
        S(4, a(), 0, `\\${d}${Y}${o.currentChar()}`);
        break;
      }
      Y += K;
    }
    return `\\${d}${Y}`;
  }
  function ls(o) {
    c(o);
    let d = "", _ = "";
    const Y = (A) => A !== "{" && A !== "}" && A !== Ze && A !== be;
    for (; d = ft(o, Y); )
      _ += d;
    return _;
  }
  function ar(o) {
    let d = "", _ = "";
    for (; d = cn(o); )
      _ += d;
    return _;
  }
  function ir(o) {
    const d = (_ = !1, Y) => {
      const A = o.currentChar();
      return A === "{" || A === "%" || A === "@" || A === "|" || !A || A === Ze ? Y : A === be ? (Y += A, o.next(), d(_, Y)) : (Y += A, o.next(), d(!0, Y));
    };
    return d(!1, "");
  }
  function At(o) {
    c(o);
    const d = g(
      o,
      "|"
      /* Pipe */
    );
    return c(o), d;
  }
  function Ut(o, d) {
    let _ = null;
    switch (o.currentChar()) {
      case "{":
        return d.braceNest >= 1 && S(8, a(), 0), o.next(), _ = x(
          d,
          2,
          "{"
          /* BraceLeft */
        ), c(o), d.braceNest++, _;
      case "}":
        return d.braceNest > 0 && d.currentType === 2 && S(7, a(), 0), o.next(), _ = x(
          d,
          3,
          "}"
          /* BraceRight */
        ), d.braceNest--, d.braceNest > 0 && c(o), d.inLinked && d.braceNest === 0 && (d.inLinked = !1), _;
      case "@":
        return d.braceNest > 0 && S(6, a(), 0), _ = St(o, d) || V(d), d.braceNest = 0, _;
      default:
        let A = !0, K = !0, Fe = !0;
        if (Te(o))
          return d.braceNest > 0 && S(6, a(), 0), _ = x(d, 1, At(o)), d.braceNest = 0, d.inLinked = !1, _;
        if (d.braceNest > 0 && (d.currentType === 5 || d.currentType === 6 || d.currentType === 7))
          return S(6, a(), 0), d.braceNest = 0, Ht(o, d);
        if (A = C(o, d))
          return _ = x(d, 5, dn(o)), c(o), _;
        if (K = m(o, d))
          return _ = x(d, 6, nr(o)), c(o), _;
        if (Fe = L(o, d))
          return _ = x(d, 7, rr(o)), c(o), _;
        if (!A && !K && !Fe)
          return _ = x(d, 13, ls(o)), S(1, a(), 0, _.value), c(o), _;
        break;
    }
    return _;
  }
  function St(o, d) {
    const { currentType: _ } = d;
    let Y = null;
    const A = o.currentChar();
    switch ((_ === 8 || _ === 9 || _ === 12 || _ === 10) && (A === be || A === Ze) && S(9, a(), 0), A) {
      case "@":
        return o.next(), Y = x(
          d,
          8,
          "@"
          /* LinkedAlias */
        ), d.inLinked = !0, Y;
      case ".":
        return c(o), o.next(), x(
          d,
          9,
          "."
          /* LinkedDot */
        );
      case ":":
        return c(o), o.next(), x(
          d,
          10,
          ":"
          /* LinkedDelimiter */
        );
      default:
        return Te(o) ? (Y = x(d, 1, At(o)), d.braceNest = 0, d.inLinked = !1, Y) : F(o, d) || te(o, d) ? (c(o), St(o, d)) : W(o, d) ? (c(o), x(d, 12, ar(o))) : Q(o, d) ? (c(o), A === "{" ? Ut(o, d) || Y : x(d, 11, ir(o))) : (_ === 8 && S(9, a(), 0), d.braceNest = 0, d.inLinked = !1, Ht(o, d));
    }
  }
  function Ht(o, d) {
    let _ = {
      type: 14
      /* EOF */
    };
    if (d.braceNest > 0)
      return Ut(o, d) || V(d);
    if (d.inLinked)
      return St(o, d) || V(d);
    const Y = o.currentChar();
    switch (Y) {
      case "{":
        return Ut(o, d) || V(d);
      case "}":
        return S(5, a(), 0), o.next(), x(
          d,
          3,
          "}"
          /* BraceRight */
        );
      case "@":
        return St(o, d) || V(d);
      default:
        if (Te(o))
          return _ = x(d, 1, At(o)), d.braceNest = 0, d.inLinked = !1, _;
        if (nt(o))
          return x(d, 0, rt(o));
        if (Y === "%")
          return o.next(), x(
            d,
            4,
            "%"
            /* Modulo */
          );
        break;
    }
    return _;
  }
  function lr() {
    const { currentType: o, offset: d, startLoc: _, endLoc: Y } = u;
    return u.lastType = o, u.lastOffset = d, u.lastStartLoc = _, u.lastEndLoc = Y, u.offset = s(), u.startLoc = a(), r.currentChar() === st ? x(
      u,
      14
      /* EOF */
    ) : Ht(r, u);
  }
  return {
    nextToken: lr,
    currentOffset: s,
    currentPosition: a,
    context: h
  };
}
const vl = "parser", xl = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Sl(e, t, n) {
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
function Ml(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, k, C, m, ...L) {
    const F = f.currentPosition();
    if (F.offset += m, F.column += m, n) {
      const W = yr(C, F), te = Ln(k, W, {
        domain: vl,
        args: L
      });
      n(te);
    }
  }
  function s(f, k, C) {
    const m = {
      type: f,
      start: k,
      end: k
    };
    return t && (m.loc = { start: C, end: C }), m;
  }
  function a(f, k, C, m) {
    f.end = k, m && (f.type = m), t && f.loc && (f.loc.end = C);
  }
  function i(f, k) {
    const C = f.context(), m = s(3, C.offset, C.startLoc);
    return m.value = k, a(m, f.currentOffset(), f.currentPosition()), m;
  }
  function l(f, k) {
    const C = f.context(), { lastOffset: m, lastStartLoc: L } = C, F = s(5, m, L);
    return F.index = parseInt(k, 10), f.nextToken(), a(F, f.currentOffset(), f.currentPosition()), F;
  }
  function u(f, k) {
    const C = f.context(), { lastOffset: m, lastStartLoc: L } = C, F = s(4, m, L);
    return F.key = k, f.nextToken(), a(F, f.currentOffset(), f.currentPosition()), F;
  }
  function h(f, k) {
    const C = f.context(), { lastOffset: m, lastStartLoc: L } = C, F = s(9, m, L);
    return F.value = k.replace(xl, Sl), f.nextToken(), a(F, f.currentOffset(), f.currentPosition()), F;
  }
  function p(f) {
    const k = f.nextToken(), C = f.context(), { lastOffset: m, lastStartLoc: L } = C, F = s(8, m, L);
    return k.type !== 12 ? (r(f, 11, C.lastStartLoc, 0), F.value = "", a(F, m, L), {
      nextConsumeToken: k,
      node: F
    }) : (k.value == null && r(f, 13, C.lastStartLoc, 0, We(k)), F.value = k.value || "", a(F, f.currentOffset(), f.currentPosition()), {
      node: F
    });
  }
  function S(f, k) {
    const C = f.context(), m = s(7, C.offset, C.startLoc);
    return m.value = k, a(m, f.currentOffset(), f.currentPosition()), m;
  }
  function x(f) {
    const k = f.context(), C = s(6, k.offset, k.startLoc);
    let m = f.nextToken();
    if (m.type === 9) {
      const L = p(f);
      C.modifier = L.node, m = L.nextConsumeToken || f.nextToken();
    }
    switch (m.type !== 10 && r(f, 13, k.lastStartLoc, 0, We(m)), m = f.nextToken(), m.type === 2 && (m = f.nextToken()), m.type) {
      case 11:
        m.value == null && r(f, 13, k.lastStartLoc, 0, We(m)), C.key = S(f, m.value || "");
        break;
      case 5:
        m.value == null && r(f, 13, k.lastStartLoc, 0, We(m)), C.key = u(f, m.value || "");
        break;
      case 6:
        m.value == null && r(f, 13, k.lastStartLoc, 0, We(m)), C.key = l(f, m.value || "");
        break;
      case 7:
        m.value == null && r(f, 13, k.lastStartLoc, 0, We(m)), C.key = h(f, m.value || "");
        break;
      default:
        r(f, 12, k.lastStartLoc, 0);
        const L = f.context(), F = s(7, L.offset, L.startLoc);
        return F.value = "", a(F, L.offset, L.startLoc), C.key = F, a(C, L.offset, L.startLoc), {
          nextConsumeToken: m,
          node: C
        };
    }
    return a(C, f.currentOffset(), f.currentPosition()), {
      node: C
    };
  }
  function V(f) {
    const k = f.context(), C = k.currentType === 1 ? f.currentOffset() : k.offset, m = k.currentType === 1 ? k.endLoc : k.startLoc, L = s(2, C, m);
    L.items = [];
    let F = null;
    do {
      const Q = F || f.nextToken();
      switch (F = null, Q.type) {
        case 0:
          Q.value == null && r(f, 13, k.lastStartLoc, 0, We(Q)), L.items.push(i(f, Q.value || ""));
          break;
        case 6:
          Q.value == null && r(f, 13, k.lastStartLoc, 0, We(Q)), L.items.push(l(f, Q.value || ""));
          break;
        case 5:
          Q.value == null && r(f, 13, k.lastStartLoc, 0, We(Q)), L.items.push(u(f, Q.value || ""));
          break;
        case 7:
          Q.value == null && r(f, 13, k.lastStartLoc, 0, We(Q)), L.items.push(h(f, Q.value || ""));
          break;
        case 8:
          const Te = x(f);
          L.items.push(Te.node), F = Te.nextConsumeToken || null;
          break;
      }
    } while (k.currentType !== 14 && k.currentType !== 1);
    const W = k.currentType === 1 ? k.lastOffset : f.currentOffset(), te = k.currentType === 1 ? k.lastEndLoc : f.currentPosition();
    return a(L, W, te), L;
  }
  function g(f, k, C, m) {
    const L = f.context();
    let F = m.items.length === 0;
    const W = s(1, k, C);
    W.cases = [], W.cases.push(m);
    do {
      const te = V(f);
      F || (F = te.items.length === 0), W.cases.push(te);
    } while (L.currentType !== 14);
    return F && r(f, 10, C, 0), a(W, f.currentOffset(), f.currentPosition()), W;
  }
  function T(f) {
    const k = f.context(), { offset: C, startLoc: m } = k, L = V(f);
    return k.currentType === 14 ? L : g(f, C, m, L);
  }
  function c(f) {
    const k = wl(f, ue({}, e)), C = k.context(), m = s(0, C.offset, C.startLoc);
    return t && m.loc && (m.loc.source = f), m.body = T(k), C.currentType !== 14 && r(k, 13, C.lastStartLoc, 0, f[C.offset] || ""), a(m, k.currentOffset(), k.currentPosition()), m;
  }
  return { parse: c };
}
function We(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Ol(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function bs(e, t) {
  for (let n = 0; n < e.length; n++)
    Rr(e[n], t);
}
function Rr(e, t) {
  switch (e.type) {
    case 1:
      bs(e.cases, t), t.helper(
        "plural"
        /* PLURAL */
      );
      break;
    case 2:
      bs(e.items, t);
      break;
    case 6:
      Rr(e.key, t), t.helper(
        "linked"
        /* LINKED */
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
function Dl(e, t = {}) {
  const n = Ol(e);
  n.helper(
    "normalize"
    /* NORMALIZE */
  ), e.body && Rr(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Tl(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: s, needIndent: a } = t, i = {
    source: e.loc.source,
    filename: r,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: s,
    needIndent: a,
    indentLevel: 0
  }, l = () => i;
  function u(T, c) {
    i.code += T;
  }
  function h(T, c = !0) {
    const f = c ? s : "";
    u(a ? f + "  ".repeat(T) : f);
  }
  function p(T = !0) {
    const c = ++i.indentLevel;
    T && h(c);
  }
  function S(T = !0) {
    const c = --i.indentLevel;
    T && h(c);
  }
  function x() {
    h(i.indentLevel);
  }
  return {
    context: l,
    push: u,
    indent: p,
    deindent: S,
    newline: x,
    helper: (T) => `_${T}`,
    needIndent: () => i.needIndent
  };
}
function Cl(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* LINKED */
  )}(`), Lt(e, t.key), t.modifier && (e.push(", "), Lt(e, t.modifier)), e.push(")");
}
function Yl(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* NORMALIZE */
  )}([`), e.indent(r());
  const s = t.items.length;
  for (let a = 0; a < s && (Lt(e, t.items[a]), a !== s - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Il(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* PLURAL */
    )}([`), e.indent(r());
    const s = t.cases.length;
    for (let a = 0; a < s && (Lt(e, t.cases[a]), a !== s - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Nl(e, t) {
  t.body ? Lt(e, t.body) : e.push("null");
}
function Lt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Nl(e, t);
      break;
    case 1:
      Il(e, t);
      break;
    case 2:
      Yl(e, t);
      break;
    case 6:
      Cl(e, t);
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
const Pl = (e, t = {}) => {
  const n = E(t.mode) ? t.mode : "normal", r = E(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, i = t.needIndent ? t.needIndent : n !== "arrow", l = e.helpers || [], u = Tl(e, {
    mode: n,
    filename: r,
    sourceMap: s,
    breakLineCode: a,
    needIndent: i
  });
  u.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), u.indent(i), l.length > 0 && (u.push(`const { ${l.map((S) => `${S}: _${S}`).join(", ")} } = ctx`), u.newline()), u.push("return "), Lt(u, e), u.deindent(i), u.push("}");
  const { code: h, map: p } = u.context();
  return {
    ast: e,
    code: h,
    map: p ? p.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function El(e, t = {}) {
  const n = ue({}, t), s = Ml(n).parse(e);
  return Dl(s, n), Pl(s, n);
}
/*!
  * @intlify/devtools-if v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const qs = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * @intlify/core-base v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
let Jt = null;
function Ll(e) {
  Jt = e;
}
function Rl(e, t, n) {
  Jt && Jt.emit(qs.I18nInit, {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Fl = /* @__PURE__ */ Wl(qs.FunctionTranslate);
function Wl(e) {
  return (t) => Jt && Jt.emit(e, t);
}
const Vl = {
  [
    0
    /* NOT_FOUND_KEY */
  ]: "Not found '{key}' key in '{locale}' locale messages.",
  [
    1
    /* FALLBACK_TO_TRANSLATE */
  ]: "Fall back to translate '{key}' key with '{target}' locale.",
  [
    2
    /* CANNOT_FORMAT_NUMBER */
  ]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [
    3
    /* FALLBACK_TO_NUMBER_FORMAT */
  ]: "Fall back to number format '{key}' key with '{target}' locale.",
  [
    4
    /* CANNOT_FORMAT_DATE */
  ]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [
    5
    /* FALLBACK_TO_DATE_FORMAT */
  ]: "Fall back to datetime format '{key}' key with '{target}' locale."
};
function Rt(e, ...t) {
  return Pn(Vl[e], ...t);
}
const Al = "9.1.9", Rn = -1, Sn = "";
function Ul() {
  return {
    upper: (e) => E(e) ? e.toUpperCase() : e,
    lower: (e) => E(e) ? e.toLowerCase() : e,
    // prettier-ignore
    capitalize: (e) => E(e) ? `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}` : e
  };
}
let Js;
function Hl(e) {
  Js = e;
}
let Ks = null;
const _s = (e) => {
  Ks = e;
}, zl = () => Ks;
let ps = 0;
function jl(e = {}) {
  const t = E(e.version) ? e.version : Al, n = E(e.locale) ? e.locale : "en-US", r = de(e.fallbackLocale) || Z(e.fallbackLocale) || E(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n, s = Z(e.messages) ? e.messages : { [n]: {} }, a = Z(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} }, i = Z(e.numberFormats) ? e.numberFormats : { [n]: {} }, l = ue({}, e.modifiers || {}, Ul()), u = e.pluralRules || {}, h = pe(e.missing) ? e.missing : null, p = le(e.missingWarn) || vn(e.missingWarn) ? e.missingWarn : !0, S = le(e.fallbackWarn) || vn(e.fallbackWarn) ? e.fallbackWarn : !0, x = !!e.fallbackFormat, V = !!e.unresolving, g = pe(e.postTranslation) ? e.postTranslation : null, T = Z(e.processor) ? e.processor : null, c = le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, f = !!e.escapeParameter, k = pe(e.messageCompiler) ? e.messageCompiler : Js, C = pe(e.onWarn) ? e.onWarn : en, m = e, L = fe(m.__datetimeFormatters) ? m.__datetimeFormatters : /* @__PURE__ */ new Map(), F = fe(m.__numberFormatters) ? m.__numberFormatters : /* @__PURE__ */ new Map(), W = fe(m.__meta) ? m.__meta : {};
  ps++;
  const te = {
    version: t,
    cid: ps,
    locale: n,
    fallbackLocale: r,
    messages: s,
    datetimeFormats: a,
    numberFormats: i,
    modifiers: l,
    pluralRules: u,
    missing: h,
    missingWarn: p,
    fallbackWarn: S,
    fallbackFormat: x,
    unresolving: V,
    postTranslation: g,
    processor: T,
    warnHtmlMessage: c,
    escapeParameter: f,
    messageCompiler: k,
    onWarn: C,
    __datetimeFormatters: L,
    __numberFormatters: F,
    __meta: W
  };
  return process.env.NODE_ENV !== "production" && (te.__v_emitter = m.__v_emitter != null ? m.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Rl(te, t, W), te;
}
function Fn(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Xs(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Fr(e, t, n, r, s) {
  const { missing: a, onWarn: i } = e;
  if (process.env.NODE_ENV !== "production") {
    const l = e.__v_emitter;
    l && l.emit("missing", {
      locale: n,
      key: t,
      type: s,
      groupId: `${s}:${t}`
    });
  }
  if (a !== null) {
    const l = a(e, n, t, s);
    return E(l) ? l : t;
  } else
    return process.env.NODE_ENV !== "production" && Xs(r, t) && i(Rt(0, { key: t, locale: n })), t;
}
function tn(e, t, n) {
  const r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let s = r.__localeChainCache.get(n);
  if (!s) {
    s = [];
    let a = [n];
    for (; de(a); )
      a = ks(s, a, t);
    const i = de(t) ? t : Z(t) ? t.default ? t.default : null : t;
    a = E(i) ? [i] : i, de(a) && ks(s, a, !1), r.__localeChainCache.set(n, s);
  }
  return s;
}
function ks(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && le(r); s++) {
    const a = t[s];
    E(a) && (r = Bl(e, t[s], n));
  }
  return r;
}
function Bl(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const a = s.join("-");
    r = Gl(e, a, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function Gl(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (de(n) || Z(n)) && n[s] && (r = n[s]);
  }
  return r;
}
function jt(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), tn(e, n, t);
}
const Zl = /<\/?[\w\s="/.':;#-\/]+>/, ql = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Jl(e, t) {
  (le(t.warnHtmlMessage) ? t.warnHtmlMessage : !0) && Zl.test(e) && en(Pn(ql, { source: e }));
}
const Kl = (e) => e;
let ws = /* @__PURE__ */ Object.create(null);
function Xl(e, t = {}) {
  {
    process.env.NODE_ENV !== "production" && Jl(e, t);
    const r = (t.onCacheKey || Kl)(e), s = ws[r];
    if (s)
      return s;
    let a = !1;
    const i = t.onError || ml;
    t.onError = (h) => {
      a = !0, i(h);
    };
    const { code: l } = El(e, t), u = new Function(`return ${l}`)();
    return a ? u : ws[r] = u;
  }
}
function Ct(e) {
  return Ln(e, null, process.env.NODE_ENV !== "production" ? { messages: Ql } : void 0);
}
const Ql = {
  [
    14
    /* INVALID_ARGUMENT */
  ]: "Invalid arguments",
  [
    15
    /* INVALID_DATE_ARGUMENT */
  ]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [
    16
    /* INVALID_ISO_DATE_ARGUMENT */
  ]: "The argument provided is not a valid ISO date string"
}, vs = () => "", Ae = (e) => pe(e);
function xs(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, fallbackLocale: a, messages: i } = e, [l, u] = br(...t), h = le(u.missingWarn) ? u.missingWarn : e.missingWarn, p = le(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, S = le(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, x = !!u.resolvedMessage, V = E(u.default) || le(u.default) ? le(u.default) ? l : u.default : n ? l : "", g = n || V !== "", T = E(u.locale) ? u.locale : e.locale;
  S && $l(u);
  let [c, f, k] = x ? [
    l,
    T,
    i[T] || {}
  ] : eo(e, l, T, a, p, h), C = l;
  if (!x && !(E(c) || Ae(c)) && g && (c = V, C = c), !x && (!(E(c) || Ae(c)) || !E(f)))
    return s ? Rn : l;
  if (process.env.NODE_ENV !== "production" && E(c) && e.messageCompiler == null)
    return en(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let m = !1;
  const L = () => {
    m = !0;
  }, F = Ae(c) ? c : Qs(e, l, f, c, C, L);
  if (m)
    return c;
  const W = ro(e, f, k, u), te = fl(W), Q = to(e, F, te), Te = r ? r(Q) : Q;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const nt = {
      timestamp: Date.now(),
      key: E(l) ? l : Ae(c) ? c.key : "",
      locale: f || (Ae(c) ? c.locale : ""),
      format: E(c) ? c : Ae(c) ? c.source : "",
      message: Te
    };
    nt.meta = ue({}, e.__meta, zl() || {}), Fl(nt);
  }
  return Te;
}
function $l(e) {
  de(e.list) ? e.list = e.list.map((t) => E(t) ? fs(t) : t) : fe(e.named) && Object.keys(e.named).forEach((t) => {
    E(e.named[t]) && (e.named[t] = fs(e.named[t]));
  });
}
function eo(e, t, n, r, s, a) {
  const { messages: i, onWarn: l } = e, u = tn(e, r, n);
  let h = {}, p, S = null, x = n, V = null;
  const g = "translate";
  for (let T = 0; T < u.length; T++) {
    if (p = V = u[T], process.env.NODE_ENV !== "production" && n !== p && Fn(s, t) && l(Rt(1, {
      key: t,
      target: p
    })), process.env.NODE_ENV !== "production" && n !== p) {
      const m = e.__v_emitter;
      m && m.emit("fallback", {
        type: g,
        key: t,
        from: x,
        to: V,
        groupId: `${g}:${t}`
      });
    }
    h = i[p] || {};
    let c = null, f, k;
    if (process.env.NODE_ENV !== "production" && wt && (c = window.performance.now(), f = "intlify-message-resolve-start", k = "intlify-message-resolve-end", Oe && Oe(f)), (S = xn(h, t)) === null && (S = h[t]), process.env.NODE_ENV !== "production" && wt) {
      const m = window.performance.now(), L = e.__v_emitter;
      L && c && S && L.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: S,
        time: m - c,
        groupId: `${g}:${t}`
      }), f && k && Oe && vt && (Oe(k), vt("intlify message resolve", f, k));
    }
    if (E(S) || pe(S))
      break;
    const C = Fr(e, t, p, a, g);
    C !== t && (S = C), x = V;
  }
  return [S, p, h];
}
function Qs(e, t, n, r, s, a) {
  const { messageCompiler: i, warnHtmlMessage: l } = e;
  if (Ae(r)) {
    const x = r;
    return x.locale = x.locale || n, x.key = x.key || t, x;
  }
  let u = null, h, p;
  process.env.NODE_ENV !== "production" && wt && (u = window.performance.now(), h = "intlify-message-compilation-start", p = "intlify-message-compilation-end", Oe && Oe(h));
  const S = i(r, no(e, n, s, r, l, a));
  if (process.env.NODE_ENV !== "production" && wt) {
    const x = window.performance.now(), V = e.__v_emitter;
    V && u && V.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: x - u,
      groupId: `translate:${t}`
    }), h && p && Oe && vt && (Oe(p), vt("intlify message compilation", h, p));
  }
  return S.locale = n, S.key = t, S.source = r, S;
}
function to(e, t, n) {
  let r = null, s, a;
  process.env.NODE_ENV !== "production" && wt && (r = window.performance.now(), s = "intlify-message-evaluation-start", a = "intlify-message-evaluation-end", Oe && Oe(s));
  const i = t(n);
  if (process.env.NODE_ENV !== "production" && wt) {
    const l = window.performance.now(), u = e.__v_emitter;
    u && r && u.emit("message-evaluation", {
      type: "message-evaluation",
      value: i,
      time: l - r,
      groupId: `translate:${t.key}`
    }), s && a && Oe && vt && (Oe(a), vt("intlify message evaluation", s, a));
  }
  return i;
}
function br(...e) {
  const [t, n, r] = e, s = {};
  if (!E(t) && !_e(t) && !Ae(t))
    throw Ct(
      14
      /* INVALID_ARGUMENT */
    );
  const a = _e(t) ? String(t) : (Ae(t), t);
  return _e(n) ? s.plural = n : E(n) ? s.default = n : Z(n) && !En(n) ? s.named = n : de(n) && (s.list = n), _e(r) ? s.plural = r : E(r) ? s.default = r : Z(r) && ue(s, r), [a, s];
}
function no(e, t, n, r, s, a) {
  return {
    warnHtmlMessage: s,
    onError: (i) => {
      if (a && a(i), process.env.NODE_ENV !== "production") {
        const l = `Message compilation error: ${i.message}`, u = i.location && Ji(r, i.location.start.offset, i.location.end.offset), h = e.__v_emitter;
        h && h.emit("compile-error", {
          message: r,
          error: i.message,
          start: i.location && i.location.start.offset,
          end: i.location && i.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(u ? `${l}
${u}` : l);
      } else
        throw i;
    },
    onCacheKey: (i) => ji(t, n, i)
  };
}
function ro(e, t, n, r) {
  const { modifiers: s, pluralRules: a } = e, l = {
    locale: t,
    modifiers: s,
    pluralRules: a,
    messages: (u) => {
      const h = xn(n, u);
      if (E(h)) {
        let p = !1;
        const x = Qs(e, u, t, h, u, () => {
          p = !0;
        });
        return p ? vs : x;
      } else
        return Ae(h) ? h : vs;
    }
  };
  return e.processor && (l.processor = e.processor), r.list && (l.list = r.list), r.named && (l.named = r.named), _e(r.plural) && (l.pluralIndex = r.plural), l;
}
const Ss = typeof Intl < "u", $s = {
  dateTimeFormat: Ss && typeof Intl.DateTimeFormat < "u",
  numberFormat: Ss && typeof Intl.NumberFormat < "u"
};
function Ms(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: a } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !$s.dateTimeFormat)
    return a(Rt(
      4
      /* CANNOT_FORMAT_DATE */
    )), Sn;
  const [l, u, h, p] = _r(...t), S = le(h.missingWarn) ? h.missingWarn : e.missingWarn, x = le(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, V = !!h.part, g = E(h.locale) ? h.locale : e.locale, T = tn(e, s, g);
  if (!E(l) || l === "")
    return new Intl.DateTimeFormat(g).format(u);
  let c = {}, f, k = null, C = g, m = null;
  const L = "datetime format";
  for (let te = 0; te < T.length; te++) {
    if (f = m = T[te], process.env.NODE_ENV !== "production" && g !== f && Fn(x, l) && a(Rt(5, {
      key: l,
      target: f
    })), process.env.NODE_ENV !== "production" && g !== f) {
      const Q = e.__v_emitter;
      Q && Q.emit("fallback", {
        type: L,
        key: l,
        from: C,
        to: m,
        groupId: `${L}:${l}`
      });
    }
    if (c = n[f] || {}, k = c[l], Z(k))
      break;
    Fr(e, l, f, S, L), C = m;
  }
  if (!Z(k) || !E(f))
    return r ? Rn : l;
  let F = `${f}__${l}`;
  En(p) || (F = `${F}__${JSON.stringify(p)}`);
  let W = i.get(F);
  return W || (W = new Intl.DateTimeFormat(f, ue({}, k, p)), i.set(F, W)), V ? W.formatToParts(u) : W.format(u);
}
function _r(...e) {
  const [t, n, r, s] = e;
  let a = {}, i = {}, l;
  if (E(t)) {
    if (!/\d{4}-\d{2}-\d{2}(T.*)?/.test(t))
      throw Ct(
        16
        /* INVALID_ISO_DATE_ARGUMENT */
      );
    l = new Date(t);
    try {
      l.toISOString();
    } catch {
      throw Ct(
        16
        /* INVALID_ISO_DATE_ARGUMENT */
      );
    }
  } else if (Gi(t)) {
    if (isNaN(t.getTime()))
      throw Ct(
        15
        /* INVALID_DATE_ARGUMENT */
      );
    l = t;
  } else if (_e(t))
    l = t;
  else
    throw Ct(
      14
      /* INVALID_ARGUMENT */
    );
  return E(n) ? a.key = n : Z(n) && (a = n), E(r) ? a.locale = r : Z(r) && (i = r), Z(s) && (i = s), [a.key || "", l, a, i];
}
function Os(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Ds(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: a } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !$s.numberFormat)
    return a(Rt(
      2
      /* CANNOT_FORMAT_NUMBER */
    )), Sn;
  const [l, u, h, p] = pr(...t), S = le(h.missingWarn) ? h.missingWarn : e.missingWarn, x = le(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, V = !!h.part, g = E(h.locale) ? h.locale : e.locale, T = tn(e, s, g);
  if (!E(l) || l === "")
    return new Intl.NumberFormat(g).format(u);
  let c = {}, f, k = null, C = g, m = null;
  const L = "number format";
  for (let te = 0; te < T.length; te++) {
    if (f = m = T[te], process.env.NODE_ENV !== "production" && g !== f && Fn(x, l) && a(Rt(3, {
      key: l,
      target: f
    })), process.env.NODE_ENV !== "production" && g !== f) {
      const Q = e.__v_emitter;
      Q && Q.emit("fallback", {
        type: L,
        key: l,
        from: C,
        to: m,
        groupId: `${L}:${l}`
      });
    }
    if (c = n[f] || {}, k = c[l], Z(k))
      break;
    Fr(e, l, f, S, L), C = m;
  }
  if (!Z(k) || !E(f))
    return r ? Rn : l;
  let F = `${f}__${l}`;
  En(p) || (F = `${F}__${JSON.stringify(p)}`);
  let W = i.get(F);
  return W || (W = new Intl.NumberFormat(f, ue({}, k, p)), i.set(F, W)), V ? W.formatToParts(u) : W.format(u);
}
function pr(...e) {
  const [t, n, r, s] = e;
  let a = {}, i = {};
  if (!_e(t))
    throw Ct(
      14
      /* INVALID_ARGUMENT */
    );
  const l = t;
  return E(n) ? a.key = n : Z(n) && (a = n), E(r) ? a.locale = r : Z(r) && (i = r), Z(s) && (i = s), [a.key || "", l, a, i];
}
function Ts(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Tt().__INTLIFY_PROD_DEVTOOLS__ = !1);
/*!
  * vue-i18n v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const so = "9.1.9";
function ao() {
  let e = !1;
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (e = !0, Tt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (e = !0, Tt().__VUE_I18N_LEGACY_API__ = !0), typeof __VUE_I18N_PROD_DEVTOOLS__ != "boolean" && (e = !0, Tt().__VUE_I18N_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Tt().__INTLIFY_PROD_DEVTOOLS__ = !1), process.env.NODE_ENV !== "production" && (e = !0), process.env.NODE_ENV !== "production" && e && console.warn("You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.");
}
const io = {
  [
    6
    /* FALLBACK_TO_ROOT */
  ]: "Fall back to {type} '{key}' with root locale.",
  [
    7
    /* NOT_SUPPORTED_PRESERVE */
  ]: "Not supported 'preserve'.",
  [
    8
    /* NOT_SUPPORTED_FORMATTER */
  ]: "Not supported 'formatter'.",
  [
    9
    /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
  ]: "Not supported 'preserveDirectiveContent'.",
  [
    10
    /* NOT_SUPPORTED_GET_CHOICE_INDEX */
  ]: "Not supported 'getChoiceIndex'.",
  [
    11
    /* COMPONENT_NAME_LEGACY_COMPATIBLE */
  ]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [
    12
    /* NOT_FOUND_PARENT_SCOPE */
  ]: "Not found parent scope. use the global scope."
};
function ea(e, ...t) {
  return Pn(io[e], ...t);
}
function yt(e, ...t) {
  return Ln(e, null, process.env.NODE_ENV !== "production" ? { messages: lo, args: t } : void 0);
}
const lo = {
  [
    14
    /* UNEXPECTED_RETURN_TYPE */
  ]: "Unexpected return type in composer",
  [
    15
    /* INVALID_ARGUMENT */
  ]: "Invalid argument",
  [
    16
    /* MUST_BE_CALL_SETUP_TOP */
  ]: "Must be called at the top of a `setup` function",
  [
    17
    /* NOT_INSLALLED */
  ]: "Need to install with `app.use` function",
  [
    22
    /* UNEXPECTED_ERROR */
  ]: "Unexpected error",
  [
    18
    /* NOT_AVAILABLE_IN_LEGACY_MODE */
  ]: "Not available in legacy mode",
  [
    19
    /* REQUIRED_VALUE */
  ]: "Required in value: {0}",
  [
    20
    /* INVALID_VALUE */
  ]: "Invalid value",
  [
    21
    /* CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN */
  ]: "Cannot setup vue-devtools plugin"
}, ur = "__INTLIFY_META__", kr = ct("__transrateVNode"), wr = ct("__datetimeParts"), vr = ct("__numberParts"), xr = ct("__enableEmitter"), Sr = ct("__disableEmitter"), oo = ct("__setPluralRules");
ct("__intlifyMeta");
const ta = ct("__injectWithOption");
let Cs = 0;
function Ys(e) {
  return (t, n, r, s) => e(n, r, Pr() || void 0, s);
}
function na(e, t) {
  const { messages: n, __i18n: r } = t, s = Z(n) ? n : de(r) ? {} : { [e]: {} };
  if (de(r) && r.forEach(({ locale: a, resource: i }) => {
    a ? (s[a] = s[a] || {}, Mn(i, s[a])) : Mn(i, s);
  }), t.flatJson)
    for (const a in s)
      Gs(s, a) && gr(s[a]);
  return s;
}
const mn = (e) => !fe(e) || de(e);
function Mn(e, t) {
  if (mn(e) || mn(t))
    throw yt(
      20
      /* INVALID_VALUE */
    );
  for (const n in e)
    Gs(e, n) && (mn(e[n]) || mn(t[n]) ? t[n] = e[n] : Mn(e[n], t[n]));
}
const co = () => {
  const e = Pr();
  return e && e.type[ur] ? { [ur]: e.type[ur] } : null;
};
function uo(e = {}) {
  const { __root: t } = e, n = t === void 0;
  let r = le(e.inheritLocale) ? e.inheritLocale : !0;
  const s = Me(
    // prettier-ignore
    t && r ? t.locale.value : E(e.locale) ? e.locale : "en-US"
  ), a = Me(
    // prettier-ignore
    t && r ? t.fallbackLocale.value : E(e.fallbackLocale) || de(e.fallbackLocale) || Z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s.value
  ), i = Me(na(s.value, e)), l = Me(Z(e.datetimeFormats) ? e.datetimeFormats : { [s.value]: {} }), u = Me(Z(e.numberFormats) ? e.numberFormats : { [s.value]: {} });
  let h = t ? t.missingWarn : le(e.missingWarn) || vn(e.missingWarn) ? e.missingWarn : !0, p = t ? t.fallbackWarn : le(e.fallbackWarn) || vn(e.fallbackWarn) ? e.fallbackWarn : !0, S = t ? t.fallbackRoot : le(e.fallbackRoot) ? e.fallbackRoot : !0, x = !!e.fallbackFormat, V = pe(e.missing) ? e.missing : null, g = pe(e.missing) ? Ys(e.missing) : null, T = pe(e.postTranslation) ? e.postTranslation : null, c = le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, f = !!e.escapeParameter;
  const k = t ? t.modifiers : Z(e.modifiers) ? e.modifiers : {};
  let C = e.pluralRules || t && t.pluralRules, m;
  function L() {
    return jl({
      version: so,
      locale: s.value,
      fallbackLocale: a.value,
      messages: i.value,
      datetimeFormats: l.value,
      numberFormats: u.value,
      modifiers: k,
      pluralRules: C,
      missing: g === null ? void 0 : g,
      missingWarn: h,
      fallbackWarn: p,
      fallbackFormat: x,
      unresolving: !0,
      postTranslation: T === null ? void 0 : T,
      warnHtmlMessage: c,
      escapeParameter: f,
      __datetimeFormatters: Z(m) ? m.__datetimeFormatters : void 0,
      __numberFormatters: Z(m) ? m.__numberFormatters : void 0,
      __v_emitter: Z(m) ? m.__v_emitter : void 0,
      __meta: { framework: "vue" }
    });
  }
  m = L(), jt(m, s.value, a.value);
  function F() {
    return [
      s.value,
      a.value,
      i.value,
      l.value,
      u.value
    ];
  }
  const W = zt({
    get: () => s.value,
    set: (b) => {
      s.value = b, m.locale = s.value;
    }
  }), te = zt({
    get: () => a.value,
    set: (b) => {
      a.value = b, m.fallbackLocale = a.value, jt(m, s.value, b);
    }
  }), Q = zt(() => i.value), Te = zt(() => l.value), nt = zt(() => u.value);
  function ft() {
    return pe(T) ? T : null;
  }
  function cn(b) {
    T = b, m.postTranslation = b;
  }
  function er() {
    return V;
  }
  function tr(b) {
    b !== null && (g = Ys(b)), V = b, m.missing = g;
  }
  function un(b, D) {
    return b !== "translate" || !D.resolvedMessage;
  }
  function rt(b, D, ke, ye, cr, hn) {
    F();
    let Mt;
    if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__)
      try {
        _s(co()), Mt = b(m);
      } finally {
        _s(null);
      }
    else
      Mt = b(m);
    if (_e(Mt) && Mt === Rn) {
      const [ht, $a] = D();
      if (process.env.NODE_ENV !== "production" && t && E(ht) && un(ke, $a) && (S && (Fn(p, ht) || Xs(h, ht)) && en(ea(6, {
        key: ht,
        type: ke
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: os } = m;
        os && S && os.emit("fallback", {
          type: ke,
          key: ht,
          to: "global",
          groupId: `${ke}:${ht}`
        });
      }
      return t && S ? ye(t) : cr(ht);
    } else {
      if (hn(Mt))
        return Mt;
      throw yt(
        14
        /* UNEXPECTED_RETURN_TYPE */
      );
    }
  }
  function dn(...b) {
    return rt((D) => xs(D, ...b), () => br(...b), "translate", (D) => D.t(...b), (D) => D, (D) => E(D));
  }
  function nr(...b) {
    const [D, ke, ye] = b;
    if (ye && !fe(ye))
      throw yt(
        15
        /* INVALID_ARGUMENT */
      );
    return dn(D, ke, ue({ resolvedMessage: !0 }, ye || {}));
  }
  function rr(...b) {
    return rt((D) => Ms(D, ...b), () => _r(...b), "datetime format", (D) => D.d(...b), () => Sn, (D) => E(D));
  }
  function sr(...b) {
    return rt((D) => Ds(D, ...b), () => pr(...b), "number format", (D) => D.n(...b), () => Sn, (D) => E(D));
  }
  function fn(b) {
    return b.map((D) => E(D) ? se(us, null, D, 0) : D);
  }
  const ar = {
    normalize: fn,
    interpolate: (b) => b,
    type: "vnode"
  };
  function ir(...b) {
    return rt(
      (D) => {
        let ke;
        const ye = D;
        try {
          ye.processor = ar, ke = xs(ye, ...b);
        } finally {
          ye.processor = null;
        }
        return ke;
      },
      () => br(...b),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (D) => D[kr](...b),
      (D) => [se(us, null, D, 0)],
      (D) => de(D)
    );
  }
  function At(...b) {
    return rt(
      (D) => Ds(D, ...b),
      () => pr(...b),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (D) => D[vr](...b),
      () => [],
      (D) => E(D) || de(D)
    );
  }
  function Ut(...b) {
    return rt(
      (D) => Ms(D, ...b),
      () => _r(...b),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (D) => D[wr](...b),
      () => [],
      (D) => E(D) || de(D)
    );
  }
  function St(b) {
    C = b, m.pluralRules = C;
  }
  function Ht(b, D) {
    const ke = E(D) ? D : s.value, ye = d(ke);
    return xn(ye, b) !== null;
  }
  function lr(b) {
    let D = null;
    const ke = tn(m, a.value, s.value);
    for (let ye = 0; ye < ke.length; ye++) {
      const cr = i.value[ke[ye]] || {}, hn = xn(cr, b);
      if (hn != null) {
        D = hn;
        break;
      }
    }
    return D;
  }
  function o(b) {
    const D = lr(b);
    return D ?? (t ? t.tm(b) || {} : {});
  }
  function d(b) {
    return i.value[b] || {};
  }
  function _(b, D) {
    i.value[b] = D, m.messages = i.value;
  }
  function Y(b, D) {
    i.value[b] = i.value[b] || {}, Mn(D, i.value[b]), m.messages = i.value;
  }
  function A(b) {
    return l.value[b] || {};
  }
  function K(b, D) {
    l.value[b] = D, m.datetimeFormats = l.value, Os(m, b, D);
  }
  function Fe(b, D) {
    l.value[b] = ue(l.value[b] || {}, D), m.datetimeFormats = l.value, Os(m, b, D);
  }
  function Ge(b) {
    return u.value[b] || {};
  }
  function Xa(b, D) {
    u.value[b] = D, m.numberFormats = u.value, Ts(m, b, D);
  }
  function Qa(b, D) {
    u.value[b] = ue(u.value[b] || {}, D), m.numberFormats = u.value, Ts(m, b, D);
  }
  Cs++, t && (cs(t.locale, (b) => {
    r && (s.value = b, m.locale = b, jt(m, s.value, a.value));
  }), cs(t.fallbackLocale, (b) => {
    r && (a.value = b, m.fallbackLocale = b, jt(m, s.value, a.value));
  }));
  const or = {
    id: Cs,
    locale: W,
    fallbackLocale: te,
    get inheritLocale() {
      return r;
    },
    set inheritLocale(b) {
      r = b, b && t && (s.value = t.locale.value, a.value = t.fallbackLocale.value, jt(m, s.value, a.value));
    },
    get availableLocales() {
      return Object.keys(i.value).sort();
    },
    messages: Q,
    datetimeFormats: Te,
    numberFormats: nt,
    get modifiers() {
      return k;
    },
    get pluralRules() {
      return C || {};
    },
    get isGlobal() {
      return n;
    },
    get missingWarn() {
      return h;
    },
    set missingWarn(b) {
      h = b, m.missingWarn = h;
    },
    get fallbackWarn() {
      return p;
    },
    set fallbackWarn(b) {
      p = b, m.fallbackWarn = p;
    },
    get fallbackRoot() {
      return S;
    },
    set fallbackRoot(b) {
      S = b;
    },
    get fallbackFormat() {
      return x;
    },
    set fallbackFormat(b) {
      x = b, m.fallbackFormat = x;
    },
    get warnHtmlMessage() {
      return c;
    },
    set warnHtmlMessage(b) {
      c = b, m.warnHtmlMessage = b;
    },
    get escapeParameter() {
      return f;
    },
    set escapeParameter(b) {
      f = b, m.escapeParameter = b;
    },
    t: dn,
    rt: nr,
    d: rr,
    n: sr,
    te: Ht,
    tm: o,
    getLocaleMessage: d,
    setLocaleMessage: _,
    mergeLocaleMessage: Y,
    getDateTimeFormat: A,
    setDateTimeFormat: K,
    mergeDateTimeFormat: Fe,
    getNumberFormat: Ge,
    setNumberFormat: Xa,
    mergeNumberFormat: Qa,
    getPostTranslationHandler: ft,
    setPostTranslationHandler: cn,
    getMissingHandler: er,
    setMissingHandler: tr,
    [kr]: ir,
    [vr]: At,
    [wr]: Ut,
    [oo]: St,
    [ta]: e.__injectWithOption
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
  return process.env.NODE_ENV !== "production" && (or[xr] = (b) => {
    m.__v_emitter = b;
  }, or[Sr] = () => {
    m.__v_emitter = void 0;
  }), or;
}
const Wr = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
ue({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => _e(e) || !isNaN(e)
  }
}, Wr);
function fo({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? e.default ? e.default() : [] : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, {});
}
function ra(e, t, n, r) {
  const { slots: s, attrs: a } = t;
  return () => {
    const i = { part: !0 };
    let l = {};
    e.locale && (i.locale = e.locale), E(e.format) ? i.key = e.format : fe(e.format) && (E(e.format.key) && (i.key = e.format.key), l = Object.keys(e.format).reduce((S, x) => n.includes(x) ? ue({}, S, { [x]: e.format[x] }) : S, {}));
    const u = r(e.value, i, l);
    let h = [i.key];
    de(u) ? h = u.map((S, x) => {
      const V = s[S.type];
      return V ? V({ [S.type]: S.value, index: x, parts: u }) : [S.value];
    }) : E(u) && (h = [u]);
    const p = ue({}, a);
    return E(e.tag) ? It(e.tag, p, h) : fe(e.tag) ? It(e.tag, p, h) : It(ce, p, h);
  };
}
const ho = [
  "localeMatcher",
  "style",
  "unit",
  "unitDisplay",
  "currency",
  "currencyDisplay",
  "useGrouping",
  "numberingSystem",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "notation",
  "formatMatcher"
];
ue({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Wr);
const mo = [
  "dateStyle",
  "timeStyle",
  "fractionalSecondDigits",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "localeMatcher",
  "timeZone",
  "hour12",
  "hourCycle",
  "formatMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName"
];
ue({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Wr);
function Is(e, t) {
}
function Ft(e = {}) {
  const t = Pr();
  if (t == null)
    throw yt(
      16
      /* MUST_BE_CALL_SETUP_TOP */
    );
  if (!t.appContext.app.__VUE_I18N_SYMBOL__)
    throw yt(
      17
      /* NOT_INSLALLED */
    );
  const n = ei(t.appContext.app.__VUE_I18N_SYMBOL__);
  if (!n)
    throw yt(
      22
      /* UNEXPECTED_ERROR */
    );
  const r = n.mode === "composition" ? n.global : n.global.__composer, s = En(e) ? "__i18n" in t.type ? "local" : "global" : e.useScope ? e.useScope : "local";
  if (s === "global") {
    let l = fe(e.messages) ? e.messages : {};
    "__i18nGlobal" in t.type && (l = na(r.locale.value, {
      messages: l,
      __i18n: t.type.__i18nGlobal
    }));
    const u = Object.keys(l);
    if (u.length && u.forEach((h) => {
      r.mergeLocaleMessage(h, l[h]);
    }), fe(e.datetimeFormats)) {
      const h = Object.keys(e.datetimeFormats);
      h.length && h.forEach((p) => {
        r.mergeDateTimeFormat(p, e.datetimeFormats[p]);
      });
    }
    if (fe(e.numberFormats)) {
      const h = Object.keys(e.numberFormats);
      h.length && h.forEach((p) => {
        r.mergeNumberFormat(p, e.numberFormats[p]);
      });
    }
    return r;
  }
  if (s === "parent") {
    let l = go(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && en(ea(
      12
      /* NOT_FOUND_PARENT_SCOPE */
    )), l = r), l;
  }
  if (n.mode === "legacy")
    throw yt(
      18
      /* NOT_AVAILABLE_IN_LEGACY_MODE */
    );
  const a = n;
  let i = a.__getInstance(t);
  if (i == null) {
    const l = t.type, u = ue({}, e);
    l.__i18n && (u.__i18n = l.__i18n), r && (u.__root = r), i = uo(u), yo(a, t, i), a.__setInstance(t, i);
  }
  return i;
}
function go(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let a = t.parent;
  for (; a != null; ) {
    const i = e;
    if (e.mode === "composition")
      r = i.__getInstance(a);
    else {
      const l = i.__getInstance(a);
      l != null && (r = l.__composer), n && r && !r[ta] && (r = null);
    }
    if (r != null || s === a)
      break;
    a = a.parent;
  }
  return r;
}
function yo(e, t, n) {
  let r = null;
  ti(() => {
    if ((process.env.NODE_ENV !== "production" || __VUE_I18N_PROD_DEVTOOLS__) && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = Ki();
      const s = n;
      s[xr] && s[xr](r), r.on("*", Is);
    }
  }, t), ni(() => {
    if ((process.env.NODE_ENV !== "production" || __VUE_I18N_PROD_DEVTOOLS__) && t.vnode.el && t.vnode.el.__VUE_I18N__) {
      r && r.off("*", Is);
      const s = n;
      s[Sr] && s[Sr](), delete t.vnode.el.__VUE_I18N__;
    }
    e.__deleteInstance(t);
  }, t);
}
Hl(Xl);
ao();
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Tt();
  e.__INTLIFY__ = !0, Ll(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const bo = 5, _o = {
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
      return this.loadingResults ? bo : (e = this.data) != null && e.length ? this.data : this.loadingCancelled ? [
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
    error: {
      type: String
    }
  },
  components: {
    PawIcon: ze,
    PawLink: Bs,
    PawCheckbox: js,
    PawRadio: Ui,
    PawChip: Ii,
    PawButton: Er
  },
  setup() {
    const { t: e } = Ft({
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
      this.$refs.textInput.blur(), console.log("blur");
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
      document.addEventListener(r, function s(a) {
        if (!(a.target instanceof Element))
          return document.removeEventListener(r, s), !1;
        e !== a.target && !e.contains(a.target) && !Array.from(n).includes(a.target) && t(a) !== !1 && document.removeEventListener(r, s);
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
      let e = "";
      return e += this.readonly ? "" : "pr-0.75 border border-gray-200 dark:border-gray-600 rounded-md transition", this.contextIcon || this.contextControl === "checkbox" || this.contextControl === "radio" ? e += " pl-0.75" : e += " pl-1", e += this.inputOutline && !this.readonly && !this.showingResults ? " outline outline-4 outline-action-200 dark:outline-action-700" : "", e += this.showingResults ? " rounded-b-none border-b-transparent bg-gray-200 dark:bg-gray-600 shadow-box dark:shadow-box-dark" : this.readonly ? "" : " bg-gray-100 dark:bg-gray-700", e;
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
}, po = {
  key: 0,
  class: "flex flex-row"
}, ko = {
  key: 0,
  class: "max-w-[80px] h-3.5 mr-1 bg-gray-400 loading-bubble"
}, wo = {
  key: 1,
  class: "max-w-[48px] h-3.5 ml-auto bg-gray-400 loading-bubble"
}, vo = /* @__PURE__ */ P("span", { class: "bg-gray-400 loading-bubble max-w-[24px] w-full h-2" }, null, -1), xo = /* @__PURE__ */ P("span", { class: "bg-gray-400 loading-bubble w-4 h-4" }, null, -1), So = [
  vo,
  xo
], Mo = {
  key: 1,
  class: "ml-2 mt-1"
}, Oo = {
  key: 0,
  class: "max-w-[120px] h-2 bg-gray-400 mb-2 loading-bubble"
}, Do = {
  key: 1,
  class: "max-w-[120px] h-2 bg-danger-500 dark:bg-danger-400 loading-bubble"
}, To = {
  key: 0,
  class: "flex flex-row"
}, Co = ["title"], Yo = ["data-content"], Io = ["placeholder", "readonly", "tabindex"], No = ["type", "placeholder", "readonly", "tabindex"], Po = ["onMouseover"], Eo = {
  key: 0,
  class: "flex justify-center py-2 bg-gray-100 dark:bg-gray-700"
}, Lo = {
  key: 3,
  class: "ml-2"
}, Ro = {
  key: 0,
  class: "prose-xs element-text italic text-gray-500 transition"
}, Fo = {
  key: 1,
  class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition"
};
function Wo(e, t, n, r, s, a) {
  var V, g, T;
  const i = ae("PawIcon"), l = ae("PawCheckbox"), u = ae("PawRadio"), h = ae("PawChip"), p = ae("PawLink"), S = ae("PawCrazyInput"), x = ae("PawButton");
  return y(), w("div", {
    class: M(["relative flex flex-col", {
      "gap-1": !n.readonly,
      "mb-44": this.dropdownWrap
    }]),
    ref: "crazyInput"
  }, [
    n.loading ? (y(), w(ce, { key: 0 }, [
      n.label || n.info ? (y(), w("div", po, [
        n.label ? (y(), w("label", ko)) : I("", !0),
        n.info ? (y(), w("span", wo)) : I("", !0)
      ])) : I("", !0),
      P("div", {
        class: M(["flex flex-row items-center justify-between", [n.readonly ? "gap-3" : "gap-1"]])
      }, [
        n.readonly && (n.contextIcon || n.contextControl) ? (y(), w("div", {
          key: 0,
          class: M(["w-4 h-4 bg-gray-400 shrink-0 loading-bubble", [
            n.contextPosition === "top" && n.multiline ? "self-start" : "",
            n.contextPosition === "center" && n.multiline ? "self-center" : "",
            n.contextPosition === "bottom" && n.multiline ? "self-end" : ""
          ]])
        }, null, 2)) : I("", !0),
        P("div", {
          class: M(["bg-gray-400 loading-bubble mr-auto", [
            n.readonly ? n.multiline ? "h-8" : a.setLoaderMaxWidth() + " h-2" : n.multiline ? "h-24" : "h-[34px]"
          ]])
        }, null, 2),
        n.readonly ? (y(), w(ce, { key: 1 }, [
          n.extraLabel || n.extraIcon ? (y(), w("div", {
            key: 0,
            class: M(["flex flex-row items-center shrink-0 gap-3 w-full max-w-[52px] py-1", [
              n.extraPosition === "top" && n.multiline ? "self-start" : "",
              n.extraPosition === "center" && n.multiline ? "self-center" : "",
              n.extraPosition === "bottom" && n.multiline ? "self-end" : ""
            ]])
          }, So, 2)) : I("", !0)
        ], 64)) : I("", !0)
      ], 2),
      n.notification || n.error ? (y(), w("div", Mo, [
        n.notification ? (y(), w("div", Oo)) : I("", !0),
        n.error ? (y(), w("div", Do)) : I("", !0)
      ])) : I("", !0)
    ], 64)) : (y(), w(ce, { key: 1 }, [
      n.label || n.info ? (y(), w("div", To, [
        n.label ? (y(), w("label", {
          key: 0,
          onClick: t[0] || (t[0] = (...c) => a.focusTextInput && a.focusTextInput(...c)),
          class: "prose-xs element-text text-xs uppercase text-gray-500 cursor-pointer transition"
        }, U(n.label), 1)) : I("", !0),
        n.info ? (y(), w("span", {
          key: 1,
          class: "ml-auto prose-xs element-text uppercase text-gray-500 cursor-help transition",
          title: n.title
        }, U(n.info), 9, Co)) : I("", !0)
      ])) : I("", !0),
      P("div", {
        class: M(["flex flex-row items-center", a.setContainerClassNames()]),
        onClick: t[13] || (t[13] = (...c) => a.click && a.click(...c))
      }, [
        n.contextIcon ? (y(), re(i, {
          key: 0,
          onClick: a.focusTextInput,
          size: "sm",
          outlined: n.contextIconOutlined,
          class: M(["text-gray-400 my-1 cursor-pointer", {
            "self-start": n.contextPosition === "top",
            "self-center": n.contextPosition === "center",
            "self-end": n.contextPosition === "bottom"
          }])
        }, {
          default: j(() => [
            B(U(n.contextIcon), 1)
          ]),
          _: 1
        }, 8, ["onClick", "outlined", "class"])) : n.contextControl === "checkbox" ? (y(), re(l, {
          key: 1,
          ref: "checkbox",
          onClick: a.focusTextInput,
          onChanged: a.change,
          size: "sm",
          class: M(["py-1", {
            "self-start": n.contextPosition === "top",
            "self-center": n.contextPosition === "center",
            "self-end": n.contextPosition === "bottom",
            "pointer-events-none": n.readonly
          }]),
          checked: n.contextChecked,
          disabled: n.contextDisabled
        }, null, 8, ["onClick", "onChanged", "class", "checked", "disabled"])) : n.contextControl === "radio" ? (y(), re(u, {
          key: 2,
          ref: "radio",
          onClick: a.focusTextInput,
          onChanged: a.change,
          size: "sm",
          class: M(["py-1", {
            "self-start": n.contextPosition === "top",
            "self-center": n.contextPosition === "center",
            "self-end": n.contextPosition === "bottom",
            "pointer-events-none": n.readonly
          }]),
          checked: n.contextChecked,
          disabled: n.contextDisabled
        }, null, 8, ["onClick", "onChanged", "class", "checked", "disabled"])) : I("", !0),
        P("div", {
          class: M(["w-full min-w-0 flex flex-wrap", {
            "cursor-pointer": !((V = n.item) != null && V.unselectable)
          }]),
          onClick: t[11] || (t[11] = (...c) => a.focusTextInput && a.focusTextInput(...c))
        }, [
          (y(!0), w(ce, null, Ve(s.chips, (c) => (y(), re(h, {
            key: c.id,
            onClicked: (f) => a.removeChip(c),
            size: "sm",
            icon: n.chipIcon,
            title: this.t("removeItem"),
            class: "shrink align-top justify-self-start ml-1 mt-1"
          }, {
            default: j(() => [
              B(U(c.value), 1)
            ]),
            _: 2
          }, 1032, ["onClicked", "icon", "title"]))), 128)),
          P("span", {
            class: M([
              n.multiline ? "min-h-[32px] before:content_ before:py-1.5 before:pl-2 before:pr-3 before:row-start-1 before:col-start-1 before:prose-md before:element-text before:invisible before:whitespace-pre-wrap" : "h-8",
              n.multiline ? "inline-grid" : "",
              n.multiselect ? "basis-20 grow" : "w-full"
            ]),
            "data-content": n.multiline ? s.inputValue : ""
          }, [
            n.multiline ? pt((y(), w("textarea", {
              key: 0,
              "onUpdate:modelValue": t[1] || (t[1] = (c) => s.inputValue = c),
              ref: "textInput",
              class: M(["row-start-1 col-start-1 rounded-md break-words input-reset text-gray-900 dark:text-white transition", [
                n.extraLabel || n.extraIcon || n.readonly ? "pr-3" : "pr-2.25",
                n.readonly ? "cursor-pointer" : ""
              ]]),
              onInput: t[2] || (t[2] = (c) => {
                a.resize(c), a.type();
              }),
              onFocus: t[3] || (t[3] = (c) => a.outlineContainer(!0)),
              onBlur: t[4] || (t[4] = (c) => a.outlineContainer(!1)),
              onKeydown: t[5] || (t[5] = (c) => a.keyDown(c, n.item)),
              rows: "1",
              placeholder: n.placeholder,
              readonly: n.readonly,
              tabindex: n.readonly && !n.isOpen || (g = n.item) != null && g.unselectable ? -1 : null
            }, null, 42, Io)), [
              [zs, s.inputValue]
            ]) : pt((y(), w("input", {
              key: 1,
              type: n.secret ? "password" : "text",
              "onUpdate:modelValue": t[6] || (t[6] = (c) => s.inputValue = c),
              ref: "textInput",
              onInput: t[7] || (t[7] = (...c) => a.type && a.type(...c)),
              onFocus: t[8] || (t[8] = (c) => a.outlineContainer(!0)),
              onBlur: t[9] || (t[9] = (c) => a.outlineContainer(!1)),
              onKeydown: t[10] || (t[10] = (c) => a.keyDown(c, n.item)),
              class: M(["rounded-md input-reset text-gray-900 dark:text-white transition", {
                truncate: !n.multiline,
                "pr-3": n.extraLabel || n.extraIcon || n.readonly,
                "pointer-events-none selection:bg-transparent": n.readonly
              }]),
              placeholder: n.placeholder,
              readonly: n.readonly,
              tabindex: n.readonly && !n.isOpen || (T = n.item) != null && T.unselectable ? -1 : null
            }, null, 42, No)), [
              [ri, s.inputValue]
            ])
          ], 10, Yo)
        ], 2),
        n.extraLabel || n.extraIcon || n.data ? (y(), w("span", {
          key: 3,
          class: M(["flex flex-row shrink-0 items-center py-1", {
            "self-start": n.extraPosition === "top",
            "self-center": n.extraPosition === "center",
            "self-end": n.extraPosition === "bottom"
          }])
        }, [
          n.extraLabel ? (y(), w("span", {
            key: 0,
            class: "mr-1 text-xs text-gray-400 cursor-pointer",
            onClick: t[12] || (t[12] = (...c) => a.focusTextInput && a.focusTextInput(...c))
          }, U(n.extraLabel), 1)) : I("", !0),
          n.extraIcon ? (y(), re(i, {
            key: 1,
            onClick: a.focusTextInput,
            size: "sm",
            class: M(["text-gray-400 opacity-100 cursor-pointer transition", {
              "opacity-0": s.showingResults
            }]),
            outlined: n.extraIconOutlined
          }, {
            default: j(() => [
              B(U(n.extraIcon), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class", "outlined"])) : I("", !0),
          n.data ? pt((y(), re(p, {
            key: 2,
            onClicked: a.closeAction,
            class: M([[
              s.showingResults || s.inputValue ? "opacity-100" : "opacity-0 pointer-events-none"
            ], "transition"]),
            size: "sm",
            icon: n.select ? "close" : n.multiselect ? s.showingResults ? "unfold_less" : "unfold_more" : "",
            tabindex: s.showingResults ? null : -1
          }, null, 8, ["onClicked", "class", "icon", "tabindex"])), [
            [wn, s.showingResults || s.inputValue || !n.extraLabel && !n.extraIcon]
          ]) : I("", !0)
        ], 2)) : I("", !0)
      ], 2),
      n.data ? (y(), w("div", {
        key: 1,
        class: M([{
          "opacity-100": s.showingResults
        }, "absolute z-20 opacity-0 bottom-1 w-full translate-y-full h-1 border-x border-gray-200 dark:border-gray-600 bg-gray-200 dark:bg-gray-600 transition"])
      }, null, 2)) : I("", !0),
      n.data ? (y(), w("div", {
        key: 2,
        class: M([[
          s.showingResults ? "opacity-100" : "opacity-0 pointer-events-none"
        ], "absolute z-10 bottom-0 w-full max-h-[161px] overflow-auto translate-y-full border border-t-0 border-gray-200 dark:border-gray-600 rounded-md rounded-t-none shadow-box dark:shadow-box-dark transition"])
      }, [
        (y(!0), w(ce, null, Ve(a.dropdownItems, (c) => (y(), w("div", {
          key: c,
          onMouseover: (f) => a.optionHovered(c),
          class: M(["transition", [
            !c.unselectable && !s.loadingResults ? "hover:bg-white dark:hover:bg-gray-800 cursor-pointer" : "",
            c.id === s.itemIdFocused && !c.unselectable && !s.loadingResults ? "bg-white dark:bg-gray-800" : "bg-gray-100 dark:bg-gray-700"
          ]])
        }, [
          se(S, {
            class: M({
              "p-2 gap-1": s.loadingResults
            }),
            ref_for: !0,
            ref: `OPTION-${a.getOptionId(c)}`,
            onClick: (f) => a.confirmSelection(c),
            onChanged: (f) => c.unselectable ? null : a.itemSelected(c, f),
            onOptionFocused: (f, k) => c.unselectable ? null : a.focusChange(f, k),
            onOptionSelected: (f, k) => c.unselectable ? null : a.itemSelected(f, k),
            onOptionMoved: (f, k) => c.unselectable ? null : a.moveOption(f, k),
            onOptionTyped: t[14] || (t[14] = (f) => a.optionTyped(f)),
            onDropdownClosed: (f) => c.unselectable ? null : a.closeDropdown(),
            "context-control": c.unselectable ? null : n.select ? "radio" : n.multiselect ? "checkbox" : null,
            "context-checked": c.unselectable ? null : a.isItemChecked(c),
            "context-disabled": c.unselectable ? null : c.disabled,
            "context-position": c.unselectable ? n.contextPosition : c.contextPosition,
            "extra-label": s.loadingResults ? n.extraLabel : c.extraLabel,
            "extra-icon": s.loadingResults ? n.extraIcon : c.extraIcon,
            "extra-icon-outlined": c.extraIconOutlined,
            "extra-position": c.extraPosition,
            multiline: s.loadingResults ? n.multiline : c.multiline,
            "is-open": s.showingResults,
            item: c,
            loading: s.loadingResults,
            readonly: ""
          }, {
            default: j(() => [
              B(U(c.value), 1)
            ]),
            _: 2
          }, 1032, ["class", "onClick", "onChanged", "onOptionFocused", "onOptionSelected", "onOptionMoved", "onDropdownClosed", "context-control", "context-checked", "context-disabled", "context-position", "extra-label", "extra-icon", "extra-icon-outlined", "extra-position", "multiline", "is-open", "item", "loading"])
        ], 42, Po))), 128)),
        n.addLabel && !s.loadingResults ? (y(), w("div", Eo, [
          se(x, {
            size: "sm",
            icon: n.addIcon,
            onClicked: a.add
          }, {
            default: j(() => [
              B(U(n.addLabel), 1)
            ]),
            _: 1
          }, 8, ["icon", "onClicked"])
        ])) : I("", !0)
      ], 2)) : I("", !0),
      n.notification || n.error ? (y(), w("div", Lo, [
        n.notification ? (y(), w("div", Ro, U(n.notification), 1)) : I("", !0),
        n.error ? (y(), w("div", Fo, U(n.error), 1)) : I("", !0)
      ])) : I("", !0)
    ], 64))
  ], 2);
}
const Vo = /* @__PURE__ */ ve(_o, [["render", Wo]]);
var Ns = globalThis && globalThis.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, s = t.length, a; r < s; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}, Ao = (
  /** @class */
  function() {
    function e(t, n, r) {
      this.name = t, this.version = n, this.os = r, this.type = "browser";
    }
    return e;
  }()
), Uo = (
  /** @class */
  function() {
    function e(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return e;
  }()
), Ho = (
  /** @class */
  function() {
    function e(t, n, r, s) {
      this.name = t, this.version = n, this.os = r, this.bot = s, this.type = "bot-device";
    }
    return e;
  }()
), zo = (
  /** @class */
  function() {
    function e() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return e;
  }()
), jo = (
  /** @class */
  function() {
    function e() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return e;
  }()
), Bo = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Go = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Ps = 3, Zo = [
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
  ["searchbot", Bo]
], Es = [
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
function qo(e) {
  return e ? Ls(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new jo() : typeof navigator < "u" ? Ls(navigator.userAgent) : Xo();
}
function Jo(e) {
  return e !== "" && Zo.reduce(function(t, n) {
    var r = n[0], s = n[1];
    if (t)
      return t;
    var a = s.exec(e);
    return !!a && [r, a];
  }, !1);
}
function Ls(e) {
  var t = Jo(e);
  if (!t)
    return null;
  var n = t[0], r = t[1];
  if (n === "searchbot")
    return new zo();
  var s = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < Ps && (s = Ns(Ns([], s, !0), Qo(Ps - s.length), !0)) : s = [];
  var a = s.join("."), i = Ko(e), l = Go.exec(e);
  return l && l[1] ? new Ho(n, a, i, l[1]) : new Ao(n, a, i);
}
function Ko(e) {
  for (var t = 0, n = Es.length; t < n; t++) {
    var r = Es[t], s = r[0], a = r[1], i = a.exec(e);
    if (i)
      return s;
  }
  return null;
}
function Xo() {
  var e = typeof process < "u" && process.version;
  return e ? new Uo(process.version.slice(1)) : null;
}
function Qo(e) {
  for (var t = [], n = 0; n < e; n++)
    t.push("0");
  return t;
}
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var sa;
function O() {
  return sa.apply(null, arguments);
}
function $o(e) {
  sa = e;
}
function Pe(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function kt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function q(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Vr(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (q(e, t))
      return !1;
  return !0;
}
function we(e) {
  return e === void 0;
}
function $e(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function nn(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function aa(e, t) {
  var n = [], r, s = e.length;
  for (r = 0; r < s; ++r)
    n.push(t(e[r], r));
  return n;
}
function at(e, t) {
  for (var n in t)
    q(t, n) && (e[n] = t[n]);
  return q(t, "toString") && (e.toString = t.toString), q(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function je(e, t, n, r) {
  return Ca(e, t, n, r, !0).utc();
}
function ec() {
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
function H(e) {
  return e._pf == null && (e._pf = ec()), e._pf;
}
var Mr;
Array.prototype.some ? Mr = Array.prototype.some : Mr = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Ar(e) {
  if (e._isValid == null) {
    var t = H(e), n = Mr.call(t.parsedDateParts, function(s) {
      return s != null;
    }), r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
    if (e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = r;
    else
      return r;
  }
  return e._isValid;
}
function Wn(e) {
  var t = je(NaN);
  return e != null ? at(H(t), e) : H(t).userInvalidated = !0, t;
}
var Rs = O.momentProperties = [], dr = !1;
function Ur(e, t) {
  var n, r, s, a = Rs.length;
  if (we(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), we(t._i) || (e._i = t._i), we(t._f) || (e._f = t._f), we(t._l) || (e._l = t._l), we(t._strict) || (e._strict = t._strict), we(t._tzm) || (e._tzm = t._tzm), we(t._isUTC) || (e._isUTC = t._isUTC), we(t._offset) || (e._offset = t._offset), we(t._pf) || (e._pf = H(t)), we(t._locale) || (e._locale = t._locale), a > 0)
    for (n = 0; n < a; n++)
      r = Rs[n], s = t[r], we(s) || (e[r] = s);
  return e;
}
function rn(e) {
  Ur(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), dr === !1 && (dr = !0, O.updateOffset(this), dr = !1);
}
function Ee(e) {
  return e instanceof rn || e != null && e._isAMomentObject != null;
}
function ia(e) {
  O.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Ye(e, t) {
  var n = !0;
  return at(function() {
    if (O.deprecationHandler != null && O.deprecationHandler(null, e), n) {
      var r = [], s, a, i, l = arguments.length;
      for (a = 0; a < l; a++) {
        if (s = "", typeof arguments[a] == "object") {
          s += `
[` + a + "] ";
          for (i in arguments[0])
            q(arguments[0], i) && (s += i + ": " + arguments[0][i] + ", ");
          s = s.slice(0, -2);
        } else
          s = arguments[a];
        r.push(s);
      }
      ia(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Fs = {};
function la(e, t) {
  O.deprecationHandler != null && O.deprecationHandler(e, t), Fs[e] || (ia(t), Fs[e] = !0);
}
O.suppressDeprecationWarnings = !1;
O.deprecationHandler = null;
function Be(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function tc(e) {
  var t, n;
  for (n in e)
    q(e, n) && (t = e[n], Be(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Or(e, t) {
  var n = at({}, e), r;
  for (r in t)
    q(t, r) && (kt(e[r]) && kt(t[r]) ? (n[r] = {}, at(n[r], e[r]), at(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    q(e, r) && !q(t, r) && kt(e[r]) && (n[r] = at({}, n[r]));
  return n;
}
function Hr(e) {
  e != null && this.set(e);
}
var Dr;
Object.keys ? Dr = Object.keys : Dr = function(e) {
  var t, n = [];
  for (t in e)
    q(e, t) && n.push(t);
  return n;
};
var nc = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function rc(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return Be(r) ? r.call(t, n) : r;
}
function He(e, t, n) {
  var r = "" + Math.abs(e), s = t - r.length, a = e >= 0;
  return (a ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + r;
}
var zr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, gn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, fr = {}, Nt = {};
function R(e, t, n, r) {
  var s = r;
  typeof r == "string" && (s = function() {
    return this[r]();
  }), e && (Nt[e] = s), t && (Nt[t[0]] = function() {
    return He(s.apply(this, arguments), t[1], t[2]);
  }), n && (Nt[n] = function() {
    return this.localeData().ordinal(
      s.apply(this, arguments),
      e
    );
  });
}
function sc(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function ac(e) {
  var t = e.match(zr), n, r;
  for (n = 0, r = t.length; n < r; n++)
    Nt[t[n]] ? t[n] = Nt[t[n]] : t[n] = sc(t[n]);
  return function(s) {
    var a = "", i;
    for (i = 0; i < r; i++)
      a += Be(t[i]) ? t[i].call(s, e) : t[i];
    return a;
  };
}
function _n(e, t) {
  return e.isValid() ? (t = oa(t, e.localeData()), fr[t] = fr[t] || ac(t), fr[t](e)) : e.localeData().invalidDate();
}
function oa(e, t) {
  var n = 5;
  function r(s) {
    return t.longDateFormat(s) || s;
  }
  for (gn.lastIndex = 0; n >= 0 && gn.test(e); )
    e = e.replace(
      gn,
      r
    ), gn.lastIndex = 0, n -= 1;
  return e;
}
var ic = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function lc(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(zr).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var oc = "Invalid date";
function cc() {
  return this._invalidDate;
}
var uc = "%d", dc = /\d{1,2}/;
function fc(e) {
  return this._ordinal.replace("%d", e);
}
var hc = {
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
function mc(e, t, n, r) {
  var s = this._relativeTime[n];
  return Be(s) ? s(e, t, n, r) : s.replace(/%d/i, e);
}
function gc(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return Be(n) ? n(t) : n.replace(/%s/i, t);
}
var Zt = {};
function me(e, t) {
  var n = e.toLowerCase();
  Zt[n] = Zt[n + "s"] = Zt[t] = e;
}
function Ie(e) {
  return typeof e == "string" ? Zt[e] || Zt[e.toLowerCase()] : void 0;
}
function jr(e) {
  var t = {}, n, r;
  for (r in e)
    q(e, r) && (n = Ie(r), n && (t[n] = e[r]));
  return t;
}
var ca = {};
function ge(e, t) {
  ca[e] = t;
}
function yc(e) {
  var t = [], n;
  for (n in e)
    q(e, n) && t.push({ unit: n, priority: ca[n] });
  return t.sort(function(r, s) {
    return r.priority - s.priority;
  }), t;
}
function Vn(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function Ce(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function z(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = Ce(t)), n;
}
function Wt(e, t) {
  return function(n) {
    return n != null ? (ua(this, e, n), O.updateOffset(this, t), this) : On(this, e);
  };
}
function On(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function ua(e, t, n) {
  e.isValid() && !isNaN(n) && (t === "FullYear" && Vn(e.year()) && e.month() === 1 && e.date() === 29 ? (n = z(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    n,
    e.month(),
    Bn(n, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
}
function bc(e) {
  return e = Ie(e), Be(this[e]) ? this[e]() : this;
}
function _c(e, t) {
  if (typeof e == "object") {
    e = jr(e);
    var n = yc(e), r, s = n.length;
    for (r = 0; r < s; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = Ie(e), Be(this[e]))
    return this[e](t);
  return this;
}
var da = /\d/, De = /\d\d/, fa = /\d{3}/, Br = /\d{4}/, An = /[+-]?\d{6}/, ee = /\d\d?/, ha = /\d\d\d\d?/, ma = /\d\d\d\d\d\d?/, Un = /\d{1,3}/, Gr = /\d{1,4}/, Hn = /[+-]?\d{1,6}/, Vt = /\d+/, zn = /[+-]?\d+/, pc = /Z|[+-]\d\d:?\d\d/gi, jn = /Z|[+-]\d\d(?::?\d\d)?/gi, kc = /[+-]?\d+(\.\d{1,3})?/, sn = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Dn;
Dn = {};
function N(e, t, n) {
  Dn[e] = Be(t) ? t : function(r, s) {
    return r && n ? n : t;
  };
}
function wc(e, t) {
  return q(Dn, e) ? Dn[e](t._strict, t._locale) : new RegExp(vc(e));
}
function vc(e) {
  return Se(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, r, s, a) {
        return n || r || s || a;
      }
    )
  );
}
function Se(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Tr = {};
function X(e, t) {
  var n, r = t, s;
  for (typeof e == "string" && (e = [e]), $e(t) && (r = function(a, i) {
    i[t] = z(a);
  }), s = e.length, n = 0; n < s; n++)
    Tr[e[n]] = r;
}
function an(e, t) {
  X(e, function(n, r, s, a) {
    s._w = s._w || {}, t(n, s._w, s, a);
  });
}
function xc(e, t, n) {
  t != null && q(Tr, e) && Tr[e](t, n._a, n, e);
}
var he = 0, Ke = 1, Ue = 2, oe = 3, Ne = 4, Xe = 5, bt = 6, Sc = 7, Mc = 8;
function Oc(e, t) {
  return (e % t + t) % t;
}
var ie;
Array.prototype.indexOf ? ie = Array.prototype.indexOf : ie = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Bn(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = Oc(t, 12);
  return e += (t - n) / 12, n === 1 ? Vn(e) ? 29 : 28 : 31 - n % 7 % 2;
}
R("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
R("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
R("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
me("month", "M");
ge("month", 8);
N("M", ee);
N("MM", ee, De);
N("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
N("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
X(["M", "MM"], function(e, t) {
  t[Ke] = z(e) - 1;
});
X(["MMM", "MMMM"], function(e, t, n, r) {
  var s = n._locale.monthsParse(e, r, n._strict);
  s != null ? t[Ke] = s : H(n).invalidMonth = e;
});
var Dc = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), ga = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ya = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Tc = sn, Cc = sn;
function Yc(e, t) {
  return e ? Pe(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ya).test(t) ? "format" : "standalone"][e.month()] : Pe(this._months) ? this._months : this._months.standalone;
}
function Ic(e, t) {
  return e ? Pe(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ya.test(t) ? "format" : "standalone"][e.month()] : Pe(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Nc(e, t, n) {
  var r, s, a, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      a = je([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (s = ie.call(this._shortMonthsParse, i), s !== -1 ? s : null) : (s = ie.call(this._longMonthsParse, i), s !== -1 ? s : null) : t === "MMM" ? (s = ie.call(this._shortMonthsParse, i), s !== -1 ? s : (s = ie.call(this._longMonthsParse, i), s !== -1 ? s : null)) : (s = ie.call(this._longMonthsParse, i), s !== -1 ? s : (s = ie.call(this._shortMonthsParse, i), s !== -1 ? s : null));
}
function Pc(e, t, n) {
  var r, s, a;
  if (this._monthsParseExact)
    return Nc.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (s = je([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(s, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(s, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[r] && (a = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[r] = new RegExp(a.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!n && this._monthsParse[r].test(e))
      return r;
  }
}
function ba(e, t) {
  var n;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = z(t);
    else if (t = e.localeData().monthsParse(t), !$e(t))
      return e;
  }
  return n = Math.min(e.date(), Bn(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
}
function _a(e) {
  return e != null ? (ba(this, e), O.updateOffset(this, !0), this) : On(this, "Month");
}
function Ec() {
  return Bn(this.year(), this.month());
}
function Lc(e) {
  return this._monthsParseExact ? (q(this, "_monthsRegex") || pa.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (q(this, "_monthsShortRegex") || (this._monthsShortRegex = Tc), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Rc(e) {
  return this._monthsParseExact ? (q(this, "_monthsRegex") || pa.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (q(this, "_monthsRegex") || (this._monthsRegex = Cc), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function pa() {
  function e(i, l) {
    return l.length - i.length;
  }
  var t = [], n = [], r = [], s, a;
  for (s = 0; s < 12; s++)
    a = je([2e3, s]), t.push(this.monthsShort(a, "")), n.push(this.months(a, "")), r.push(this.months(a, "")), r.push(this.monthsShort(a, ""));
  for (t.sort(e), n.sort(e), r.sort(e), s = 0; s < 12; s++)
    t[s] = Se(t[s]), n[s] = Se(n[s]);
  for (s = 0; s < 24; s++)
    r[s] = Se(r[s]);
  this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
R("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? He(e, 4) : "+" + e;
});
R(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
R(0, ["YYYY", 4], 0, "year");
R(0, ["YYYYY", 5], 0, "year");
R(0, ["YYYYYY", 6, !0], 0, "year");
me("year", "y");
ge("year", 1);
N("Y", zn);
N("YY", ee, De);
N("YYYY", Gr, Br);
N("YYYYY", Hn, An);
N("YYYYYY", Hn, An);
X(["YYYYY", "YYYYYY"], he);
X("YYYY", function(e, t) {
  t[he] = e.length === 2 ? O.parseTwoDigitYear(e) : z(e);
});
X("YY", function(e, t) {
  t[he] = O.parseTwoDigitYear(e);
});
X("Y", function(e, t) {
  t[he] = parseInt(e, 10);
});
function qt(e) {
  return Vn(e) ? 366 : 365;
}
O.parseTwoDigitYear = function(e) {
  return z(e) + (z(e) > 68 ? 1900 : 2e3);
};
var ka = Wt("FullYear", !0);
function Fc() {
  return Vn(this.year());
}
function Wc(e, t, n, r, s, a, i) {
  var l;
  return e < 100 && e >= 0 ? (l = new Date(e + 400, t, n, r, s, a, i), isFinite(l.getFullYear()) && l.setFullYear(e)) : l = new Date(e, t, n, r, s, a, i), l;
}
function Kt(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Tn(e, t, n) {
  var r = 7 + t - n, s = (7 + Kt(e, 0, r).getUTCDay() - t) % 7;
  return -s + r - 1;
}
function wa(e, t, n, r, s) {
  var a = (7 + n - r) % 7, i = Tn(e, r, s), l = 1 + 7 * (t - 1) + a + i, u, h;
  return l <= 0 ? (u = e - 1, h = qt(u) + l) : l > qt(e) ? (u = e + 1, h = l - qt(e)) : (u = e, h = l), {
    year: u,
    dayOfYear: h
  };
}
function Xt(e, t, n) {
  var r = Tn(e.year(), t, n), s = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, a, i;
  return s < 1 ? (i = e.year() - 1, a = s + Qe(i, t, n)) : s > Qe(e.year(), t, n) ? (a = s - Qe(e.year(), t, n), i = e.year() + 1) : (i = e.year(), a = s), {
    week: a,
    year: i
  };
}
function Qe(e, t, n) {
  var r = Tn(e, t, n), s = Tn(e + 1, t, n);
  return (qt(e) - r + s) / 7;
}
R("w", ["ww", 2], "wo", "week");
R("W", ["WW", 2], "Wo", "isoWeek");
me("week", "w");
me("isoWeek", "W");
ge("week", 5);
ge("isoWeek", 5);
N("w", ee);
N("ww", ee, De);
N("W", ee);
N("WW", ee, De);
an(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = z(e);
  }
);
function Vc(e) {
  return Xt(e, this._week.dow, this._week.doy).week;
}
var Ac = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Uc() {
  return this._week.dow;
}
function Hc() {
  return this._week.doy;
}
function zc(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function jc(e) {
  var t = Xt(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
R("d", 0, "do", "day");
R("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
R("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
R("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
R("e", 0, 0, "weekday");
R("E", 0, 0, "isoWeekday");
me("day", "d");
me("weekday", "e");
me("isoWeekday", "E");
ge("day", 11);
ge("weekday", 11);
ge("isoWeekday", 11);
N("d", ee);
N("e", ee);
N("E", ee);
N("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
N("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
N("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
an(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var s = n._locale.weekdaysParse(e, r, n._strict);
  s != null ? t.d = s : H(n).invalidWeekday = e;
});
an(["d", "e", "E"], function(e, t, n, r) {
  t[r] = z(e);
});
function Bc(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Gc(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Zr(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Zc = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), va = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), qc = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Jc = sn, Kc = sn, Xc = sn;
function Qc(e, t) {
  var n = Pe(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Zr(n, this._week.dow) : e ? n[e.day()] : n;
}
function $c(e) {
  return e === !0 ? Zr(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function eu(e) {
  return e === !0 ? Zr(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function tu(e, t, n) {
  var r, s, a, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      a = je([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (s = ie.call(this._weekdaysParse, i), s !== -1 ? s : null) : t === "ddd" ? (s = ie.call(this._shortWeekdaysParse, i), s !== -1 ? s : null) : (s = ie.call(this._minWeekdaysParse, i), s !== -1 ? s : null) : t === "dddd" ? (s = ie.call(this._weekdaysParse, i), s !== -1 || (s = ie.call(this._shortWeekdaysParse, i), s !== -1) ? s : (s = ie.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : t === "ddd" ? (s = ie.call(this._shortWeekdaysParse, i), s !== -1 || (s = ie.call(this._weekdaysParse, i), s !== -1) ? s : (s = ie.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : (s = ie.call(this._minWeekdaysParse, i), s !== -1 || (s = ie.call(this._weekdaysParse, i), s !== -1) ? s : (s = ie.call(this._shortWeekdaysParse, i), s !== -1 ? s : null));
}
function nu(e, t, n) {
  var r, s, a;
  if (this._weekdaysParseExact)
    return tu.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (s = je([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (a = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[r] = new RegExp(a.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!n && this._weekdaysParse[r].test(e))
      return r;
  }
}
function ru(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Bc(e, this.localeData()), this.add(e - t, "d")) : t;
}
function su(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function au(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Gc(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function iu(e) {
  return this._weekdaysParseExact ? (q(this, "_weekdaysRegex") || qr.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (q(this, "_weekdaysRegex") || (this._weekdaysRegex = Jc), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function lu(e) {
  return this._weekdaysParseExact ? (q(this, "_weekdaysRegex") || qr.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (q(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Kc), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function ou(e) {
  return this._weekdaysParseExact ? (q(this, "_weekdaysRegex") || qr.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (q(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Xc), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function qr() {
  function e(p, S) {
    return S.length - p.length;
  }
  var t = [], n = [], r = [], s = [], a, i, l, u, h;
  for (a = 0; a < 7; a++)
    i = je([2e3, 1]).day(a), l = Se(this.weekdaysMin(i, "")), u = Se(this.weekdaysShort(i, "")), h = Se(this.weekdays(i, "")), t.push(l), n.push(u), r.push(h), s.push(l), s.push(u), s.push(h);
  t.sort(e), n.sort(e), r.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
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
function Jr() {
  return this.hours() % 12 || 12;
}
function cu() {
  return this.hours() || 24;
}
R("H", ["HH", 2], 0, "hour");
R("h", ["hh", 2], 0, Jr);
R("k", ["kk", 2], 0, cu);
R("hmm", 0, 0, function() {
  return "" + Jr.apply(this) + He(this.minutes(), 2);
});
R("hmmss", 0, 0, function() {
  return "" + Jr.apply(this) + He(this.minutes(), 2) + He(this.seconds(), 2);
});
R("Hmm", 0, 0, function() {
  return "" + this.hours() + He(this.minutes(), 2);
});
R("Hmmss", 0, 0, function() {
  return "" + this.hours() + He(this.minutes(), 2) + He(this.seconds(), 2);
});
function xa(e, t) {
  R(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
xa("a", !0);
xa("A", !1);
me("hour", "h");
ge("hour", 13);
function Sa(e, t) {
  return t._meridiemParse;
}
N("a", Sa);
N("A", Sa);
N("H", ee);
N("h", ee);
N("k", ee);
N("HH", ee, De);
N("hh", ee, De);
N("kk", ee, De);
N("hmm", ha);
N("hmmss", ma);
N("Hmm", ha);
N("Hmmss", ma);
X(["H", "HH"], oe);
X(["k", "kk"], function(e, t, n) {
  var r = z(e);
  t[oe] = r === 24 ? 0 : r;
});
X(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
X(["h", "hh"], function(e, t, n) {
  t[oe] = z(e), H(n).bigHour = !0;
});
X("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[oe] = z(e.substr(0, r)), t[Ne] = z(e.substr(r)), H(n).bigHour = !0;
});
X("hmmss", function(e, t, n) {
  var r = e.length - 4, s = e.length - 2;
  t[oe] = z(e.substr(0, r)), t[Ne] = z(e.substr(r, 2)), t[Xe] = z(e.substr(s)), H(n).bigHour = !0;
});
X("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[oe] = z(e.substr(0, r)), t[Ne] = z(e.substr(r));
});
X("Hmmss", function(e, t, n) {
  var r = e.length - 4, s = e.length - 2;
  t[oe] = z(e.substr(0, r)), t[Ne] = z(e.substr(r, 2)), t[Xe] = z(e.substr(s));
});
function uu(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var du = /[ap]\.?m?\.?/i, fu = Wt("Hours", !0);
function hu(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var Ma = {
  calendar: nc,
  longDateFormat: ic,
  invalidDate: oc,
  ordinal: uc,
  dayOfMonthOrdinalParse: dc,
  relativeTime: hc,
  months: Dc,
  monthsShort: ga,
  week: Ac,
  weekdays: Zc,
  weekdaysMin: qc,
  weekdaysShort: va,
  meridiemParse: du
}, ne = {}, Bt = {}, Qt;
function mu(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function Ws(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function gu(e) {
  for (var t = 0, n, r, s, a; t < e.length; ) {
    for (a = Ws(e[t]).split("-"), n = a.length, r = Ws(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (s = Gn(a.slice(0, n).join("-")), s)
        return s;
      if (r && r.length >= n && mu(a, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return Qt;
}
function yu(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Gn(e) {
  var t = null, n;
  if (ne[e] === void 0 && typeof module < "u" && module && module.exports && yu(e))
    try {
      t = Qt._abbr, n = require, n("./locale/" + e), lt(t);
    } catch {
      ne[e] = null;
    }
  return ne[e];
}
function lt(e, t) {
  var n;
  return e && (we(t) ? n = et(e) : n = Kr(e, t), n ? Qt = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Qt._abbr;
}
function Kr(e, t) {
  if (t !== null) {
    var n, r = Ma;
    if (t.abbr = e, ne[e] != null)
      la(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = ne[e]._config;
    else if (t.parentLocale != null)
      if (ne[t.parentLocale] != null)
        r = ne[t.parentLocale]._config;
      else if (n = Gn(t.parentLocale), n != null)
        r = n._config;
      else
        return Bt[t.parentLocale] || (Bt[t.parentLocale] = []), Bt[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return ne[e] = new Hr(Or(r, t)), Bt[e] && Bt[e].forEach(function(s) {
      Kr(s.name, s.config);
    }), lt(e), ne[e];
  } else
    return delete ne[e], null;
}
function bu(e, t) {
  if (t != null) {
    var n, r, s = Ma;
    ne[e] != null && ne[e].parentLocale != null ? ne[e].set(Or(ne[e]._config, t)) : (r = Gn(e), r != null && (s = r._config), t = Or(s, t), r == null && (t.abbr = e), n = new Hr(t), n.parentLocale = ne[e], ne[e] = n), lt(e);
  } else
    ne[e] != null && (ne[e].parentLocale != null ? (ne[e] = ne[e].parentLocale, e === lt() && lt(e)) : ne[e] != null && delete ne[e]);
  return ne[e];
}
function et(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Qt;
  if (!Pe(e)) {
    if (t = Gn(e), t)
      return t;
    e = [e];
  }
  return gu(e);
}
function _u() {
  return Dr(ne);
}
function Xr(e) {
  var t, n = e._a;
  return n && H(e).overflow === -2 && (t = n[Ke] < 0 || n[Ke] > 11 ? Ke : n[Ue] < 1 || n[Ue] > Bn(n[he], n[Ke]) ? Ue : n[oe] < 0 || n[oe] > 24 || n[oe] === 24 && (n[Ne] !== 0 || n[Xe] !== 0 || n[bt] !== 0) ? oe : n[Ne] < 0 || n[Ne] > 59 ? Ne : n[Xe] < 0 || n[Xe] > 59 ? Xe : n[bt] < 0 || n[bt] > 999 ? bt : -1, H(e)._overflowDayOfYear && (t < he || t > Ue) && (t = Ue), H(e)._overflowWeeks && t === -1 && (t = Sc), H(e)._overflowWeekday && t === -1 && (t = Mc), H(e).overflow = t), e;
}
var pu = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ku = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, wu = /Z|[+-]\d\d(?::?\d\d)?/, yn = [
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
], hr = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], vu = /^\/?Date\((-?\d+)/i, xu = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Su = {
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
function Oa(e) {
  var t, n, r = e._i, s = pu.exec(r) || ku.exec(r), a, i, l, u, h = yn.length, p = hr.length;
  if (s) {
    for (H(e).iso = !0, t = 0, n = h; t < n; t++)
      if (yn[t][1].exec(s[1])) {
        i = yn[t][0], a = yn[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (s[3]) {
      for (t = 0, n = p; t < n; t++)
        if (hr[t][1].exec(s[3])) {
          l = (s[2] || " ") + hr[t][0];
          break;
        }
      if (l == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!a && l != null) {
      e._isValid = !1;
      return;
    }
    if (s[4])
      if (wu.exec(s[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (l || "") + (u || ""), $r(e);
  } else
    e._isValid = !1;
}
function Mu(e, t, n, r, s, a) {
  var i = [
    Ou(e),
    ga.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(s, 10)
  ];
  return a && i.push(parseInt(a, 10)), i;
}
function Ou(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Du(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Tu(e, t, n) {
  if (e) {
    var r = va.indexOf(e), s = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== s)
      return H(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function Cu(e, t, n) {
  if (e)
    return Su[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), s = r % 100, a = (r - s) / 100;
  return a * 60 + s;
}
function Da(e) {
  var t = xu.exec(Du(e._i)), n;
  if (t) {
    if (n = Mu(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Tu(t[1], n, e))
      return;
    e._a = n, e._tzm = Cu(t[8], t[9], t[10]), e._d = Kt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), H(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Yu(e) {
  var t = vu.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Oa(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Da(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : O.createFromInputFallback(e);
}
O.createFromInputFallback = Ye(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Dt(e, t, n) {
  return e ?? t ?? n;
}
function Iu(e) {
  var t = new Date(O.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Qr(e) {
  var t, n, r = [], s, a, i;
  if (!e._d) {
    for (s = Iu(e), e._w && e._a[Ue] == null && e._a[Ke] == null && Nu(e), e._dayOfYear != null && (i = Dt(e._a[he], s[he]), (e._dayOfYear > qt(i) || e._dayOfYear === 0) && (H(e)._overflowDayOfYear = !0), n = Kt(i, 0, e._dayOfYear), e._a[Ke] = n.getUTCMonth(), e._a[Ue] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = s[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[oe] === 24 && e._a[Ne] === 0 && e._a[Xe] === 0 && e._a[bt] === 0 && (e._nextDay = !0, e._a[oe] = 0), e._d = (e._useUTC ? Kt : Wc).apply(
      null,
      r
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[oe] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (H(e).weekdayMismatch = !0);
  }
}
function Nu(e) {
  var t, n, r, s, a, i, l, u, h;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, i = 4, n = Dt(
    t.GG,
    e._a[he],
    Xt($(), 1, 4).year
  ), r = Dt(t.W, 1), s = Dt(t.E, 1), (s < 1 || s > 7) && (u = !0)) : (a = e._locale._week.dow, i = e._locale._week.doy, h = Xt($(), a, i), n = Dt(t.gg, e._a[he], h.year), r = Dt(t.w, h.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (u = !0)) : t.e != null ? (s = t.e + a, (t.e < 0 || t.e > 6) && (u = !0)) : s = a), r < 1 || r > Qe(n, a, i) ? H(e)._overflowWeeks = !0 : u != null ? H(e)._overflowWeekday = !0 : (l = wa(n, r, s, a, i), e._a[he] = l.year, e._dayOfYear = l.dayOfYear);
}
O.ISO_8601 = function() {
};
O.RFC_2822 = function() {
};
function $r(e) {
  if (e._f === O.ISO_8601) {
    Oa(e);
    return;
  }
  if (e._f === O.RFC_2822) {
    Da(e);
    return;
  }
  e._a = [], H(e).empty = !0;
  var t = "" + e._i, n, r, s, a, i, l = t.length, u = 0, h, p;
  for (s = oa(e._f, e._locale).match(zr) || [], p = s.length, n = 0; n < p; n++)
    a = s[n], r = (t.match(wc(a, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && H(e).unusedInput.push(i), t = t.slice(
      t.indexOf(r) + r.length
    ), u += r.length), Nt[a] ? (r ? H(e).empty = !1 : H(e).unusedTokens.push(a), xc(a, r, e)) : e._strict && !r && H(e).unusedTokens.push(a);
  H(e).charsLeftOver = l - u, t.length > 0 && H(e).unusedInput.push(t), e._a[oe] <= 12 && H(e).bigHour === !0 && e._a[oe] > 0 && (H(e).bigHour = void 0), H(e).parsedDateParts = e._a.slice(0), H(e).meridiem = e._meridiem, e._a[oe] = Pu(
    e._locale,
    e._a[oe],
    e._meridiem
  ), h = H(e).era, h !== null && (e._a[he] = e._locale.erasConvertYear(h, e._a[he])), Qr(e), Xr(e);
}
function Pu(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function Eu(e) {
  var t, n, r, s, a, i, l = !1, u = e._f.length;
  if (u === 0) {
    H(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (s = 0; s < u; s++)
    a = 0, i = !1, t = Ur({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], $r(t), Ar(t) && (i = !0), a += H(t).charsLeftOver, a += H(t).unusedTokens.length * 10, H(t).score = a, l ? a < r && (r = a, n = t) : (r == null || a < r || i) && (r = a, n = t, i && (l = !0));
  at(e, n || t);
}
function Lu(e) {
  if (!e._d) {
    var t = jr(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = aa(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Qr(e);
  }
}
function Ru(e) {
  var t = new rn(Xr(Ta(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Ta(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || et(e._l), t === null || n === void 0 && t === "" ? Wn({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Ee(t) ? new rn(Xr(t)) : (nn(t) ? e._d = t : Pe(n) ? Eu(e) : n ? $r(e) : Fu(e), Ar(e) || (e._d = null), e));
}
function Fu(e) {
  var t = e._i;
  we(t) ? e._d = new Date(O.now()) : nn(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Yu(e) : Pe(t) ? (e._a = aa(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Qr(e)) : kt(t) ? Lu(e) : $e(t) ? e._d = new Date(t) : O.createFromInputFallback(e);
}
function Ca(e, t, n, r, s) {
  var a = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (kt(e) && Vr(e) || Pe(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = s, a._l = n, a._i = e, a._f = t, a._strict = r, Ru(a);
}
function $(e, t, n, r) {
  return Ca(e, t, n, r, !1);
}
var Wu = Ye(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = $.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Wn();
  }
), Vu = Ye(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = $.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Wn();
  }
);
function Ya(e, t) {
  var n, r;
  if (t.length === 1 && Pe(t[0]) && (t = t[0]), !t.length)
    return $();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function Au() {
  var e = [].slice.call(arguments, 0);
  return Ya("isBefore", e);
}
function Uu() {
  var e = [].slice.call(arguments, 0);
  return Ya("isAfter", e);
}
var Hu = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Gt = [
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
function zu(e) {
  var t, n = !1, r, s = Gt.length;
  for (t in e)
    if (q(e, t) && !(ie.call(Gt, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < s; ++r)
    if (e[Gt[r]]) {
      if (n)
        return !1;
      parseFloat(e[Gt[r]]) !== z(e[Gt[r]]) && (n = !0);
    }
  return !0;
}
function ju() {
  return this._isValid;
}
function Bu() {
  return Re(NaN);
}
function Zn(e) {
  var t = jr(e), n = t.year || 0, r = t.quarter || 0, s = t.month || 0, a = t.week || t.isoWeek || 0, i = t.day || 0, l = t.hour || 0, u = t.minute || 0, h = t.second || 0, p = t.millisecond || 0;
  this._isValid = zu(t), this._milliseconds = +p + h * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  l * 1e3 * 60 * 60, this._days = +i + a * 7, this._months = +s + r * 3 + n * 12, this._data = {}, this._locale = et(), this._bubble();
}
function pn(e) {
  return e instanceof Zn;
}
function Cr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Gu(e, t, n) {
  var r = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), a = 0, i;
  for (i = 0; i < r; i++)
    (n && e[i] !== t[i] || !n && z(e[i]) !== z(t[i])) && a++;
  return a + s;
}
function Ia(e, t) {
  R(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + He(~~(n / 60), 2) + t + He(~~n % 60, 2);
  });
}
Ia("Z", ":");
Ia("ZZ", "");
N("Z", jn);
N("ZZ", jn);
X(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = es(jn, e);
});
var Zu = /([\+\-]|\d\d)/gi;
function es(e, t) {
  var n = (t || "").match(e), r, s, a;
  return n === null ? null : (r = n[n.length - 1] || [], s = (r + "").match(Zu) || ["-", 0, 0], a = +(s[1] * 60) + z(s[2]), a === 0 ? 0 : s[0] === "+" ? a : -a);
}
function ts(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (Ee(e) || nn(e) ? e.valueOf() : $(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), O.updateOffset(n, !1), n) : $(e).local();
}
function Yr(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
O.updateOffset = function() {
};
function qu(e, t, n) {
  var r = this._offset || 0, s;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = es(jn, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (s = Yr(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), r !== e && (!t || this._changeInProgress ? Ea(
      this,
      Re(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, O.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : Yr(this);
}
function Ju(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Ku(e) {
  return this.utcOffset(0, e);
}
function Xu(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Yr(this), "m")), this;
}
function Qu() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = es(pc, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function $u(e) {
  return this.isValid() ? (e = e ? $(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function ed() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function td() {
  if (!we(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Ur(e, this), e = Ta(e), e._a ? (t = e._isUTC ? je(e._a) : $(e._a), this._isDSTShifted = this.isValid() && Gu(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function nd() {
  return this.isValid() ? !this._isUTC : !1;
}
function rd() {
  return this.isValid() ? this._isUTC : !1;
}
function Na() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var sd = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, ad = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Re(e, t) {
  var n = e, r = null, s, a, i;
  return pn(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : $e(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = sd.exec(e)) ? (s = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: z(r[Ue]) * s,
    h: z(r[oe]) * s,
    m: z(r[Ne]) * s,
    s: z(r[Xe]) * s,
    ms: z(Cr(r[bt] * 1e3)) * s
    // the millisecond decimal point is included in the match
  }) : (r = ad.exec(e)) ? (s = r[1] === "-" ? -1 : 1, n = {
    y: mt(r[2], s),
    M: mt(r[3], s),
    w: mt(r[4], s),
    d: mt(r[5], s),
    h: mt(r[6], s),
    m: mt(r[7], s),
    s: mt(r[8], s)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (i = id(
    $(n.from),
    $(n.to)
  ), n = {}, n.ms = i.milliseconds, n.M = i.months), a = new Zn(n), pn(e) && q(e, "_locale") && (a._locale = e._locale), pn(e) && q(e, "_isValid") && (a._isValid = e._isValid), a;
}
Re.fn = Zn.prototype;
Re.invalid = Bu;
function mt(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function Vs(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function id(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = ts(t, e), e.isBefore(t) ? n = Vs(e, t) : (n = Vs(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function Pa(e, t) {
  return function(n, r) {
    var s, a;
    return r !== null && !isNaN(+r) && (la(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = n, n = r, r = a), s = Re(n, r), Ea(this, s, e), this;
  };
}
function Ea(e, t, n, r) {
  var s = t._milliseconds, a = Cr(t._days), i = Cr(t._months);
  e.isValid() && (r = r ?? !0, i && ba(e, On(e, "Month") + i * n), a && ua(e, "Date", On(e, "Date") + a * n), s && e._d.setTime(e._d.valueOf() + s * n), r && O.updateOffset(e, a || i));
}
var ld = Pa(1, "add"), od = Pa(-1, "subtract");
function La(e) {
  return typeof e == "string" || e instanceof String;
}
function cd(e) {
  return Ee(e) || nn(e) || La(e) || $e(e) || dd(e) || ud(e) || e === null || e === void 0;
}
function ud(e) {
  var t = kt(e) && !Vr(e), n = !1, r = [
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
  ], s, a, i = r.length;
  for (s = 0; s < i; s += 1)
    a = r[s], n = n || q(e, a);
  return t && n;
}
function dd(e) {
  var t = Pe(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !$e(r) && La(e);
  }).length === 0), t && n;
}
function fd(e) {
  var t = kt(e) && !Vr(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], s, a;
  for (s = 0; s < r.length; s += 1)
    a = r[s], n = n || q(e, a);
  return t && n;
}
function hd(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function md(e, t) {
  arguments.length === 1 && (arguments[0] ? cd(arguments[0]) ? (e = arguments[0], t = void 0) : fd(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || $(), r = ts(n, this).startOf("day"), s = O.calendarFormat(this, r) || "sameElse", a = t && (Be(t[s]) ? t[s].call(this, n) : t[s]);
  return this.format(
    a || this.localeData().calendar(s, this, $(n))
  );
}
function gd() {
  return new rn(this);
}
function yd(e, t) {
  var n = Ee(e) ? e : $(e);
  return this.isValid() && n.isValid() ? (t = Ie(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function bd(e, t) {
  var n = Ee(e) ? e : $(e);
  return this.isValid() && n.isValid() ? (t = Ie(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function _d(e, t, n, r) {
  var s = Ee(e) ? e : $(e), a = Ee(t) ? t : $(t);
  return this.isValid() && s.isValid() && a.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(s, n) : !this.isBefore(s, n)) && (r[1] === ")" ? this.isBefore(a, n) : !this.isAfter(a, n))) : !1;
}
function pd(e, t) {
  var n = Ee(e) ? e : $(e), r;
  return this.isValid() && n.isValid() ? (t = Ie(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function kd(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function wd(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function vd(e, t, n) {
  var r, s, a;
  if (!this.isValid())
    return NaN;
  if (r = ts(e, this), !r.isValid())
    return NaN;
  switch (s = (r.utcOffset() - this.utcOffset()) * 6e4, t = Ie(t), t) {
    case "year":
      a = kn(this, r) / 12;
      break;
    case "month":
      a = kn(this, r);
      break;
    case "quarter":
      a = kn(this, r) / 3;
      break;
    case "second":
      a = (this - r) / 1e3;
      break;
    case "minute":
      a = (this - r) / 6e4;
      break;
    case "hour":
      a = (this - r) / 36e5;
      break;
    case "day":
      a = (this - r - s) / 864e5;
      break;
    case "week":
      a = (this - r - s) / 6048e5;
      break;
    default:
      a = this - r;
  }
  return n ? a : Ce(a);
}
function kn(e, t) {
  if (e.date() < t.date())
    return -kn(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), s, a;
  return t - r < 0 ? (s = e.clone().add(n - 1, "months"), a = (t - r) / (r - s)) : (s = e.clone().add(n + 1, "months"), a = (t - r) / (s - r)), -(n + a) || 0;
}
O.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
O.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function xd() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Sd(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? _n(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Be(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", _n(n, "Z")) : _n(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Md() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, s, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(n + r + s + a);
}
function Od(e) {
  e || (e = this.isUtc() ? O.defaultFormatUtc : O.defaultFormat);
  var t = _n(this, e);
  return this.localeData().postformat(t);
}
function Dd(e, t) {
  return this.isValid() && (Ee(e) && e.isValid() || $(e).isValid()) ? Re({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Td(e) {
  return this.from($(), e);
}
function Cd(e, t) {
  return this.isValid() && (Ee(e) && e.isValid() || $(e).isValid()) ? Re({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Yd(e) {
  return this.to($(), e);
}
function Ra(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = et(e), t != null && (this._locale = t), this);
}
var Fa = Ye(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Wa() {
  return this._locale;
}
var Cn = 1e3, Pt = 60 * Cn, Yn = 60 * Pt, Va = (365 * 400 + 97) * 24 * Yn;
function Et(e, t) {
  return (e % t + t) % t;
}
function Aa(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - Va : new Date(e, t, n).valueOf();
}
function Ua(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Va : Date.UTC(e, t, n);
}
function Id(e) {
  var t, n;
  if (e = Ie(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? Ua : Aa, e) {
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
      t = this._d.valueOf(), t -= Et(
        t + (this._isUTC ? 0 : this.utcOffset() * Pt),
        Yn
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Et(t, Pt);
      break;
    case "second":
      t = this._d.valueOf(), t -= Et(t, Cn);
      break;
  }
  return this._d.setTime(t), O.updateOffset(this, !0), this;
}
function Nd(e) {
  var t, n;
  if (e = Ie(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? Ua : Aa, e) {
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
      t = this._d.valueOf(), t += Yn - Et(
        t + (this._isUTC ? 0 : this.utcOffset() * Pt),
        Yn
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Pt - Et(t, Pt) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Cn - Et(t, Cn) - 1;
      break;
  }
  return this._d.setTime(t), O.updateOffset(this, !0), this;
}
function Pd() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Ed() {
  return Math.floor(this.valueOf() / 1e3);
}
function Ld() {
  return new Date(this.valueOf());
}
function Rd() {
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
function Fd() {
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
function Wd() {
  return this.isValid() ? this.toISOString() : null;
}
function Vd() {
  return Ar(this);
}
function Ad() {
  return at({}, H(this));
}
function Ud() {
  return H(this).overflow;
}
function Hd() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
R("N", 0, 0, "eraAbbr");
R("NN", 0, 0, "eraAbbr");
R("NNN", 0, 0, "eraAbbr");
R("NNNN", 0, 0, "eraName");
R("NNNNN", 0, 0, "eraNarrow");
R("y", ["y", 1], "yo", "eraYear");
R("y", ["yy", 2], 0, "eraYear");
R("y", ["yyy", 3], 0, "eraYear");
R("y", ["yyyy", 4], 0, "eraYear");
N("N", ns);
N("NN", ns);
N("NNN", ns);
N("NNNN", $d);
N("NNNNN", ef);
X(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var s = n._locale.erasParse(e, r, n._strict);
    s ? H(n).era = s : H(n).invalidEra = e;
  }
);
N("y", Vt);
N("yy", Vt);
N("yyy", Vt);
N("yyyy", Vt);
N("yo", tf);
X(["y", "yy", "yyy", "yyyy"], he);
X(["yo"], function(e, t, n, r) {
  var s;
  n._locale._eraYearOrdinalRegex && (s = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[he] = n._locale.eraYearOrdinalParse(e, s) : t[he] = parseInt(e, 10);
});
function zd(e, t) {
  var n, r, s, a = this._eras || et("en")._eras;
  for (n = 0, r = a.length; n < r; ++n) {
    switch (typeof a[n].since) {
      case "string":
        s = O(a[n].since).startOf("day"), a[n].since = s.valueOf();
        break;
    }
    switch (typeof a[n].until) {
      case "undefined":
        a[n].until = 1 / 0;
        break;
      case "string":
        s = O(a[n].until).startOf("day").valueOf(), a[n].until = s.valueOf();
        break;
    }
  }
  return a;
}
function jd(e, t, n) {
  var r, s, a = this.eras(), i, l, u;
  for (e = e.toUpperCase(), r = 0, s = a.length; r < s; ++r)
    if (i = a[r].name.toUpperCase(), l = a[r].abbr.toUpperCase(), u = a[r].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (l === e)
            return a[r];
          break;
        case "NNNN":
          if (i === e)
            return a[r];
          break;
        case "NNNNN":
          if (u === e)
            return a[r];
          break;
      }
    else if ([i, l, u].indexOf(e) >= 0)
      return a[r];
}
function Bd(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? O(e.since).year() : O(e.since).year() + (t - e.offset) * n;
}
function Gd() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function Zd() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function qd() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function Jd() {
  var e, t, n, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (n = s[e].since <= s[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return (this.year() - O(s[e].since).year()) * n + s[e].offset;
  return this.year();
}
function Kd(e) {
  return q(this, "_erasNameRegex") || rs.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Xd(e) {
  return q(this, "_erasAbbrRegex") || rs.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Qd(e) {
  return q(this, "_erasNarrowRegex") || rs.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function ns(e, t) {
  return t.erasAbbrRegex(e);
}
function $d(e, t) {
  return t.erasNameRegex(e);
}
function ef(e, t) {
  return t.erasNarrowRegex(e);
}
function tf(e, t) {
  return t._eraYearOrdinalRegex || Vt;
}
function rs() {
  var e = [], t = [], n = [], r = [], s, a, i = this.eras();
  for (s = 0, a = i.length; s < a; ++s)
    t.push(Se(i[s].name)), e.push(Se(i[s].abbr)), n.push(Se(i[s].narrow)), r.push(Se(i[s].name)), r.push(Se(i[s].abbr)), r.push(Se(i[s].narrow));
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
R(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
R(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function qn(e, t) {
  R(0, [e, e.length], 0, t);
}
qn("gggg", "weekYear");
qn("ggggg", "weekYear");
qn("GGGG", "isoWeekYear");
qn("GGGGG", "isoWeekYear");
me("weekYear", "gg");
me("isoWeekYear", "GG");
ge("weekYear", 1);
ge("isoWeekYear", 1);
N("G", zn);
N("g", zn);
N("GG", ee, De);
N("gg", ee, De);
N("GGGG", Gr, Br);
N("gggg", Gr, Br);
N("GGGGG", Hn, An);
N("ggggg", Hn, An);
an(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = z(e);
  }
);
an(["gg", "GG"], function(e, t, n, r) {
  t[r] = O.parseTwoDigitYear(e);
});
function nf(e) {
  return Ha.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function rf(e) {
  return Ha.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function sf() {
  return Qe(this.year(), 1, 4);
}
function af() {
  return Qe(this.isoWeekYear(), 1, 4);
}
function lf() {
  var e = this.localeData()._week;
  return Qe(this.year(), e.dow, e.doy);
}
function of() {
  var e = this.localeData()._week;
  return Qe(this.weekYear(), e.dow, e.doy);
}
function Ha(e, t, n, r, s) {
  var a;
  return e == null ? Xt(this, r, s).year : (a = Qe(e, r, s), t > a && (t = a), cf.call(this, e, t, n, r, s));
}
function cf(e, t, n, r, s) {
  var a = wa(e, t, n, r, s), i = Kt(a.year, 0, a.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
R("Q", 0, "Qo", "quarter");
me("quarter", "Q");
ge("quarter", 7);
N("Q", da);
X("Q", function(e, t) {
  t[Ke] = (z(e) - 1) * 3;
});
function uf(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
R("D", ["DD", 2], "Do", "date");
me("date", "D");
ge("date", 9);
N("D", ee);
N("DD", ee, De);
N("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
X(["D", "DD"], Ue);
X("Do", function(e, t) {
  t[Ue] = z(e.match(ee)[0]);
});
var za = Wt("Date", !0);
R("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
me("dayOfYear", "DDD");
ge("dayOfYear", 4);
N("DDD", Un);
N("DDDD", fa);
X(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = z(e);
});
function df(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
R("m", ["mm", 2], 0, "minute");
me("minute", "m");
ge("minute", 14);
N("m", ee);
N("mm", ee, De);
X(["m", "mm"], Ne);
var ff = Wt("Minutes", !1);
R("s", ["ss", 2], 0, "second");
me("second", "s");
ge("second", 15);
N("s", ee);
N("ss", ee, De);
X(["s", "ss"], Xe);
var hf = Wt("Seconds", !1);
R("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
R(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
R(0, ["SSS", 3], 0, "millisecond");
R(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
R(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
R(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
R(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
R(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
R(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
me("millisecond", "ms");
ge("millisecond", 16);
N("S", Un, da);
N("SS", Un, De);
N("SSS", Un, fa);
var it, ja;
for (it = "SSSS"; it.length <= 9; it += "S")
  N(it, Vt);
function mf(e, t) {
  t[bt] = z(("0." + e) * 1e3);
}
for (it = "S"; it.length <= 9; it += "S")
  X(it, mf);
ja = Wt("Milliseconds", !1);
R("z", 0, 0, "zoneAbbr");
R("zz", 0, 0, "zoneName");
function gf() {
  return this._isUTC ? "UTC" : "";
}
function yf() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var v = rn.prototype;
v.add = ld;
v.calendar = md;
v.clone = gd;
v.diff = vd;
v.endOf = Nd;
v.format = Od;
v.from = Dd;
v.fromNow = Td;
v.to = Cd;
v.toNow = Yd;
v.get = bc;
v.invalidAt = Ud;
v.isAfter = yd;
v.isBefore = bd;
v.isBetween = _d;
v.isSame = pd;
v.isSameOrAfter = kd;
v.isSameOrBefore = wd;
v.isValid = Vd;
v.lang = Fa;
v.locale = Ra;
v.localeData = Wa;
v.max = Vu;
v.min = Wu;
v.parsingFlags = Ad;
v.set = _c;
v.startOf = Id;
v.subtract = od;
v.toArray = Rd;
v.toObject = Fd;
v.toDate = Ld;
v.toISOString = Sd;
v.inspect = Md;
typeof Symbol < "u" && Symbol.for != null && (v[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
v.toJSON = Wd;
v.toString = xd;
v.unix = Ed;
v.valueOf = Pd;
v.creationData = Hd;
v.eraName = Gd;
v.eraNarrow = Zd;
v.eraAbbr = qd;
v.eraYear = Jd;
v.year = ka;
v.isLeapYear = Fc;
v.weekYear = nf;
v.isoWeekYear = rf;
v.quarter = v.quarters = uf;
v.month = _a;
v.daysInMonth = Ec;
v.week = v.weeks = zc;
v.isoWeek = v.isoWeeks = jc;
v.weeksInYear = lf;
v.weeksInWeekYear = of;
v.isoWeeksInYear = sf;
v.isoWeeksInISOWeekYear = af;
v.date = za;
v.day = v.days = ru;
v.weekday = su;
v.isoWeekday = au;
v.dayOfYear = df;
v.hour = v.hours = fu;
v.minute = v.minutes = ff;
v.second = v.seconds = hf;
v.millisecond = v.milliseconds = ja;
v.utcOffset = qu;
v.utc = Ku;
v.local = Xu;
v.parseZone = Qu;
v.hasAlignedHourOffset = $u;
v.isDST = ed;
v.isLocal = nd;
v.isUtcOffset = rd;
v.isUtc = Na;
v.isUTC = Na;
v.zoneAbbr = gf;
v.zoneName = yf;
v.dates = Ye(
  "dates accessor is deprecated. Use date instead.",
  za
);
v.months = Ye(
  "months accessor is deprecated. Use month instead",
  _a
);
v.years = Ye(
  "years accessor is deprecated. Use year instead",
  ka
);
v.zone = Ye(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Ju
);
v.isDSTShifted = Ye(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  td
);
function bf(e) {
  return $(e * 1e3);
}
function _f() {
  return $.apply(null, arguments).parseZone();
}
function Ba(e) {
  return e;
}
var J = Hr.prototype;
J.calendar = rc;
J.longDateFormat = lc;
J.invalidDate = cc;
J.ordinal = fc;
J.preparse = Ba;
J.postformat = Ba;
J.relativeTime = mc;
J.pastFuture = gc;
J.set = tc;
J.eras = zd;
J.erasParse = jd;
J.erasConvertYear = Bd;
J.erasAbbrRegex = Xd;
J.erasNameRegex = Kd;
J.erasNarrowRegex = Qd;
J.months = Yc;
J.monthsShort = Ic;
J.monthsParse = Pc;
J.monthsRegex = Rc;
J.monthsShortRegex = Lc;
J.week = Vc;
J.firstDayOfYear = Hc;
J.firstDayOfWeek = Uc;
J.weekdays = Qc;
J.weekdaysMin = eu;
J.weekdaysShort = $c;
J.weekdaysParse = nu;
J.weekdaysRegex = iu;
J.weekdaysShortRegex = lu;
J.weekdaysMinRegex = ou;
J.isPM = uu;
J.meridiem = hu;
function In(e, t, n, r) {
  var s = et(), a = je().set(r, t);
  return s[n](a, e);
}
function Ga(e, t, n) {
  if ($e(e) && (t = e, e = void 0), e = e || "", t != null)
    return In(e, t, n, "month");
  var r, s = [];
  for (r = 0; r < 12; r++)
    s[r] = In(e, r, n, "month");
  return s;
}
function ss(e, t, n, r) {
  typeof e == "boolean" ? ($e(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, $e(t) && (n = t, t = void 0), t = t || "");
  var s = et(), a = e ? s._week.dow : 0, i, l = [];
  if (n != null)
    return In(t, (n + a) % 7, r, "day");
  for (i = 0; i < 7; i++)
    l[i] = In(t, (i + a) % 7, r, "day");
  return l;
}
function pf(e, t) {
  return Ga(e, t, "months");
}
function kf(e, t) {
  return Ga(e, t, "monthsShort");
}
function wf(e, t, n) {
  return ss(e, t, n, "weekdays");
}
function vf(e, t, n) {
  return ss(e, t, n, "weekdaysShort");
}
function xf(e, t, n) {
  return ss(e, t, n, "weekdaysMin");
}
lt("en", {
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
    var t = e % 10, n = z(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
O.lang = Ye(
  "moment.lang is deprecated. Use moment.locale instead.",
  lt
);
O.langData = Ye(
  "moment.langData is deprecated. Use moment.localeData instead.",
  et
);
var qe = Math.abs;
function Sf() {
  var e = this._data;
  return this._milliseconds = qe(this._milliseconds), this._days = qe(this._days), this._months = qe(this._months), e.milliseconds = qe(e.milliseconds), e.seconds = qe(e.seconds), e.minutes = qe(e.minutes), e.hours = qe(e.hours), e.months = qe(e.months), e.years = qe(e.years), this;
}
function Za(e, t, n, r) {
  var s = Re(t, n);
  return e._milliseconds += r * s._milliseconds, e._days += r * s._days, e._months += r * s._months, e._bubble();
}
function Mf(e, t) {
  return Za(this, e, t, 1);
}
function Of(e, t) {
  return Za(this, e, t, -1);
}
function As(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Df() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, s, a, i, l, u;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += As(Ir(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, s = Ce(e / 1e3), r.seconds = s % 60, a = Ce(s / 60), r.minutes = a % 60, i = Ce(a / 60), r.hours = i % 24, t += Ce(i / 24), u = Ce(qa(t)), n += u, t -= As(Ir(u)), l = Ce(n / 12), n %= 12, r.days = t, r.months = n, r.years = l, this;
}
function qa(e) {
  return e * 4800 / 146097;
}
function Ir(e) {
  return e * 146097 / 4800;
}
function Tf(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = Ie(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + qa(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(Ir(this._months)), e) {
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
function Cf() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + z(this._months / 12) * 31536e6 : NaN;
}
function tt(e) {
  return function() {
    return this.as(e);
  };
}
var Yf = tt("ms"), If = tt("s"), Nf = tt("m"), Pf = tt("h"), Ef = tt("d"), Lf = tt("w"), Rf = tt("M"), Ff = tt("Q"), Wf = tt("y");
function Vf() {
  return Re(this);
}
function Af(e) {
  return e = Ie(e), this.isValid() ? this[e + "s"]() : NaN;
}
function xt(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Uf = xt("milliseconds"), Hf = xt("seconds"), zf = xt("minutes"), jf = xt("hours"), Bf = xt("days"), Gf = xt("months"), Zf = xt("years");
function qf() {
  return Ce(this.days() / 7);
}
var Je = Math.round, Yt = {
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
function Jf(e, t, n, r, s) {
  return s.relativeTime(t || 1, !!n, e, r);
}
function Kf(e, t, n, r) {
  var s = Re(e).abs(), a = Je(s.as("s")), i = Je(s.as("m")), l = Je(s.as("h")), u = Je(s.as("d")), h = Je(s.as("M")), p = Je(s.as("w")), S = Je(s.as("y")), x = a <= n.ss && ["s", a] || a < n.s && ["ss", a] || i <= 1 && ["m"] || i < n.m && ["mm", i] || l <= 1 && ["h"] || l < n.h && ["hh", l] || u <= 1 && ["d"] || u < n.d && ["dd", u];
  return n.w != null && (x = x || p <= 1 && ["w"] || p < n.w && ["ww", p]), x = x || h <= 1 && ["M"] || h < n.M && ["MM", h] || S <= 1 && ["y"] || ["yy", S], x[2] = t, x[3] = +e > 0, x[4] = r, Jf.apply(null, x);
}
function Xf(e) {
  return e === void 0 ? Je : typeof e == "function" ? (Je = e, !0) : !1;
}
function Qf(e, t) {
  return Yt[e] === void 0 ? !1 : t === void 0 ? Yt[e] : (Yt[e] = t, e === "s" && (Yt.ss = t - 1), !0);
}
function $f(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = Yt, s, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, Yt, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), s = this.localeData(), a = Kf(this, !n, r, s), n && (a = s.pastFuture(+this, a)), s.postformat(a);
}
var mr = Math.abs;
function Ot(e) {
  return (e > 0) - (e < 0) || +e;
}
function Jn() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = mr(this._milliseconds) / 1e3, t = mr(this._days), n = mr(this._months), r, s, a, i, l = this.asSeconds(), u, h, p, S;
  return l ? (r = Ce(e / 60), s = Ce(r / 60), e %= 60, r %= 60, a = Ce(n / 12), n %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = l < 0 ? "-" : "", h = Ot(this._months) !== Ot(l) ? "-" : "", p = Ot(this._days) !== Ot(l) ? "-" : "", S = Ot(this._milliseconds) !== Ot(l) ? "-" : "", u + "P" + (a ? h + a + "Y" : "") + (n ? h + n + "M" : "") + (t ? p + t + "D" : "") + (s || r || e ? "T" : "") + (s ? S + s + "H" : "") + (r ? S + r + "M" : "") + (e ? S + i + "S" : "")) : "P0D";
}
var G = Zn.prototype;
G.isValid = ju;
G.abs = Sf;
G.add = Mf;
G.subtract = Of;
G.as = Tf;
G.asMilliseconds = Yf;
G.asSeconds = If;
G.asMinutes = Nf;
G.asHours = Pf;
G.asDays = Ef;
G.asWeeks = Lf;
G.asMonths = Rf;
G.asQuarters = Ff;
G.asYears = Wf;
G.valueOf = Cf;
G._bubble = Df;
G.clone = Vf;
G.get = Af;
G.milliseconds = Uf;
G.seconds = Hf;
G.minutes = zf;
G.hours = jf;
G.days = Bf;
G.weeks = qf;
G.months = Gf;
G.years = Zf;
G.humanize = $f;
G.toISOString = Jn;
G.toString = Jn;
G.toJSON = Jn;
G.locale = Ra;
G.localeData = Wa;
G.toIsoString = Ye(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Jn
);
G.lang = Fa;
R("X", 0, 0, "unix");
R("x", 0, 0, "valueOf");
N("x", zn);
N("X", kc);
X("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
X("x", function(e, t, n) {
  n._d = new Date(z(e));
});
//! moment.js
O.version = "2.29.4";
$o($);
O.fn = v;
O.min = Au;
O.max = Uu;
O.now = Hu;
O.utc = je;
O.unix = bf;
O.months = pf;
O.isDate = nn;
O.locale = lt;
O.invalid = Wn;
O.duration = Re;
O.isMoment = Ee;
O.weekdays = wf;
O.parseZone = _f;
O.localeData = et;
O.isDuration = pn;
O.monthsShort = kf;
O.weekdaysMin = xf;
O.defineLocale = Kr;
O.updateLocale = bu;
O.locales = _u;
O.weekdaysShort = vf;
O.normalizeUnits = Ie;
O.relativeTimeRounding = Xf;
O.relativeTimeThreshold = Qf;
O.calendarFormat = hd;
O.prototype = v;
O.HTML5_FMT = {
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
const eh = (e) => (si("data-v-ee12da86"), e = e(), ai(), e), th = {
  key: 0,
  class: "flex flex-row"
}, nh = {
  key: 0,
  class: "max-w-[80px] h-3.5 mr-1 bg-gray-400 loading-bubble"
}, rh = { class: "flex flex-row items-center justify-between gap-3" }, sh = /* @__PURE__ */ eh(() => /* @__PURE__ */ P("template", null, [
  /* @__PURE__ */ P("div", { class: "flex flex-row items-center shrink-0 gap-3 w-full max-w-[52px] py-1" }, [
    /* @__PURE__ */ P("span", { class: "bg-gray-400 loading-bubble max-w-[24px] w-full h-2" }),
    /* @__PURE__ */ P("span", { class: "bg-gray-400 loading-bubble w-4 h-4" })
  ])
], -1)), ah = {
  key: 1,
  class: "ml-2 mt-1"
}, ih = {
  key: 0,
  class: "max-w-[120px] h-2 bg-gray-400 mb-2 loading-bubble"
}, lh = {
  key: 1,
  class: "max-w-[120px] h-2 bg-danger-500 dark:bg-danger-400 loading-bubble"
}, oh = { class: "flex flex-row" }, ch = ["readonly", "min", "max"], uh = /* @__PURE__ */ B(" calendar_month "), dh = {
  key: 0,
  class: "ml-2"
}, fh = {
  key: 0,
  class: "prose-xs element-text italic text-gray-500 transition"
}, hh = {
  key: 1,
  class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition"
}, mh = {
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
    const n = e, r = qo(), s = Me(!1), a = Me(), i = Me(O(n.inputValue).format("YYYY-MM-DD")), l = Me(O(n.minDate).format("YYYY-MM-DD")), u = Me(O(n.maxDate).format("YYYY-MM-DD"));
    function h() {
      const g = n.format ? n.format : "DD/MM/YYYY";
      t("changed", O(i.value).format(g));
    }
    function p(g) {
      n.readonly || (s.value = !0, g.srcElement.nodeName !== "INPUT" && r.name !== "safari" && a.value.showPicker());
    }
    function S(g, T = () => {
    }, c = document.createElement(null), f = "mouseup") {
      document.addEventListener(f, function k(C) {
        if (!(C.target instanceof Element))
          return document.removeEventListener(f, k), !1;
        g !== C.target && !Array.from(c).includes(C.target) && T(C) !== !1 && document.removeEventListener(f, k);
      });
    }
    function x() {
      let g = "";
      return g += n.readonly ? "" : "pr-0.75 border border-gray-200 dark:border-gray-600 rounded-md transition", g += " pl-1", g += s.value && !n.readonly ? " outline outline-4 outline-action-200 dark:outline-action-700" : "", g;
    }
    function V() {
      const g = ["max-w-[120px]", "max-w-[200px]", "max-w-xs"];
      return g[Math.floor(Math.random() * g.length)];
    }
    return (g, T) => (y(), w("div", {
      ref: (c) => {
        S(c, () => {
          s.value = !1;
        });
      },
      class: "flex flex-col relative gap-1"
    }, [
      e.loading ? (y(), w(ce, { key: 0 }, [
        e.label ? (y(), w("div", th, [
          e.label ? (y(), w("label", nh)) : I("", !0)
        ])) : I("", !0),
        P("div", rh, [
          P("div", {
            class: M(["bg-gray-400 loading-bubble mr-auto h-8", [V()]])
          }, null, 2),
          sh
        ]),
        e.notification || e.error ? (y(), w("div", ah, [
          e.notification ? (y(), w("div", ih)) : I("", !0),
          e.error ? (y(), w("div", lh)) : I("", !0)
        ])) : I("", !0)
      ], 64)) : (y(), w(ce, { key: 1 }, [
        P("div", oh, [
          P("label", {
            onClick: p,
            class: "prose-xs element-text text-xs uppercase text-gray-500 cursor-pointer transition"
          }, U(e.label), 1)
        ]),
        P("div", {
          class: M([x(), "flex flex-row w-full items-center rounded-md transition px-0.75"])
        }, [
          pt(P("input", {
            readonly: e.readonly,
            "onUpdate:modelValue": T[0] || (T[0] = (c) => i.value = c),
            onChange: T[1] || (T[1] = (c) => h()),
            onInput: T[2] || (T[2] = (c) => h()),
            min: l.value,
            max: u.value,
            ref_key: "inputRef",
            ref: a,
            onClick: T[3] || (T[3] = (c) => p(c)),
            class: "bg-transparent rounded-md input-reset text-gray-900 dark:text-white transition cursor-pointer py-1.5",
            type: "date",
            placeholder: "dd-mm-yyyy"
          }, null, 40, ch), [
            [zs, i.value]
          ]),
          e.readonly ? I("", !0) : (y(), re(ze, {
            key: 0,
            onClick: T[4] || (T[4] = (c) => p(c)),
            size: "sm",
            class: "text-gray-400 opacity-100 cursor-pointer transition"
          }, {
            default: j(() => [
              uh
            ]),
            _: 1
          }))
        ], 2),
        e.notification || e.error ? (y(), w("div", dh, [
          e.notification ? (y(), w("div", fh, U(e.notification), 1)) : I("", !0),
          e.error ? (y(), w("div", hh, U(e.error), 1)) : I("", !0)
        ])) : I("", !0)
      ], 64))
    ], 512));
  }
}, Em = /* @__PURE__ */ ve(mh, [["__scopeId", "data-v-ee12da86"]]), gh = { class: "relative w-fit" }, yh = { class: "flex flex-col" }, bh = ["onClick"], _h = { class: "" }, ph = {
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
    }
  },
  emits: ["selected"],
  setup(e, { emit: t }) {
    const n = e, r = Me("right-0");
    function s(l) {
      l.x < 260 && (r.value = "left-0"), a.value = !a.value;
    }
    const a = Me(!1);
    function i(l) {
      a.value = !1, t("selected", l);
    }
    return (l, u) => (y(), w("div", gh, [
      se(Er, {
        onClick: u[0] || (u[0] = (h) => s(h)),
        size: n.size,
        title: n.title,
        icon: n.icon,
        disabled: n.disabled,
        outlined: n.outlined
      }, {
        default: j(() => [
          B(U(n.textSlot), 1)
        ]),
        _: 1
      }, 8, ["size", "title", "icon", "disabled", "outlined"]),
      se(ii, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95",
        appear: ""
      }, {
        default: j(() => [
          pt(P("div", {
            class: M([r.value, "absolute max-w-xs w-full min-w-[240px] rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 my-2 z-50"])
          }, [
            P("div", yh, [
              (y(!0), w(ce, null, Ve(n.items, (h) => (y(), w("button", {
                onClick: (p) => i(h.identifier),
                key: h.identifier,
                class: "dark:hover:bg-gray-900 cursor-pointer first-of-type:rounded-tr-lg first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-bl-lg hover:bg-gray-100 w-full p-2 text-md dark:text-white text-gray-900 transition-all duration-300 items-center flex flex-row space-x-3 border-t dark:border-gray-700 first-of-type:border-t-0"
              }, [
                se(ze, {
                  size: "sm",
                  class: "text-gray-400"
                }, {
                  default: j(() => [
                    B(U(h.icon), 1)
                  ]),
                  _: 2
                }, 1024),
                P("span", _h, U(h.textSlot), 1)
              ], 8, bh))), 128))
            ])
          ], 2), [
            [wn, a.value]
          ])
        ]),
        _: 1
      })
    ]));
  }
}, kh = {
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
}, wh = ["title"], vh = { class: "truncate" };
function xh(e, t, n, r, s, a) {
  return y(), w("label", {
    class: M(["flex items-center max-w-max text-white element-text rounded-full transition", a.setClassNames()]),
    title: n.title
  }, [
    P("span", vh, [
      Le(e.$slots, "default")
    ])
  ], 10, wh);
}
const Sh = /* @__PURE__ */ ve(kh, [["render", xh]]);
var Us = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oh = {
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
}, Dh = Oh, Kn = {}, ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.clone = void 0;
function Th(e) {
  return e ? JSON.parse(JSON.stringify(e)) : null;
}
ln.clone = Th;
var Xn = {};
Object.defineProperty(Xn, "__esModule", { value: !0 });
Xn.matches = void 0;
function Ch(e, t, n) {
  var r = String(t).length, s = e.substr(0, r), a = parseInt(s, 10);
  return t = parseInt(String(t).substr(0, s.length), 10), n = parseInt(String(n).substr(0, s.length), 10), a >= t && a <= n;
}
function Yh(e, t) {
  return t = String(t), t.substring(0, e.length) === e.substring(0, t.length);
}
function Ih(e, t) {
  return Array.isArray(t) ? Ch(e, t[0], t[1]) : Yh(e, t);
}
Xn.matches = Ih;
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.addMatchingCardsToResults = void 0;
var Nh = ln, Ph = Xn;
function Eh(e, t, n) {
  var r, s;
  for (r = 0; r < t.patterns.length; r++) {
    var a = t.patterns[r];
    if (Ph.matches(e, a)) {
      var i = Nh.clone(t);
      Array.isArray(a) ? s = String(a[0]).length : s = String(a).length, e.length >= s && (i.matchStrength = s), n.push(i);
      break;
    }
  }
}
Kn.addMatchingCardsToResults = Eh;
var Qn = {};
Object.defineProperty(Qn, "__esModule", { value: !0 });
Qn.isValidInputType = void 0;
function Lh(e) {
  return typeof e == "string" || e instanceof String;
}
Qn.isValidInputType = Lh;
var $n = {};
Object.defineProperty($n, "__esModule", { value: !0 });
$n.findBestMatch = void 0;
function Rh(e) {
  var t = e.filter(function(n) {
    return n.matchStrength;
  }).length;
  return t > 0 && t === e.length;
}
function Fh(e) {
  return Rh(e) ? e.reduce(function(t, n) {
    return !t || Number(t.matchStrength) < Number(n.matchStrength) ? n : t;
  }) : null;
}
$n.findBestMatch = Fh;
var Nn = Us && Us.__assign || function() {
  return Nn = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, Nn.apply(this, arguments);
}, Ja = Dh, Wh = Kn, Vh = Qn, Ah = $n, on = ln, $t = {}, xe = {
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
}, Ka = [
  xe.VISA,
  xe.MASTERCARD,
  xe.AMERICAN_EXPRESS,
  xe.DINERS_CLUB,
  xe.DISCOVER,
  xe.JCB,
  xe.UNIONPAY,
  xe.MAESTRO,
  xe.ELO,
  xe.MIR,
  xe.HIPER,
  xe.HIPERCARD
], ot = on.clone(Ka);
function as(e) {
  return $t[e] || Ja[e];
}
function Uh() {
  return ot.map(function(e) {
    return on.clone(as(e));
  });
}
function is(e, t) {
  t === void 0 && (t = !1);
  var n = ot.indexOf(e);
  if (!t && n === -1)
    throw new Error('"' + e + '" is not a supported card type.');
  return n;
}
function dt(e) {
  var t = [];
  if (!Vh.isValidInputType(e))
    return t;
  if (e.length === 0)
    return Uh();
  ot.forEach(function(r) {
    var s = as(r);
    Wh.addMatchingCardsToResults(e, s, t);
  });
  var n = Ah.findBestMatch(t);
  return n ? [n] : t;
}
dt.getTypeInfo = function(e) {
  return on.clone(as(e));
};
dt.removeCard = function(e) {
  var t = is(e);
  ot.splice(t, 1);
};
dt.addCard = function(e) {
  var t = is(e.type, !0);
  $t[e.type] = e, t === -1 && ot.push(e.type);
};
dt.updateCard = function(e, t) {
  var n = $t[e] || Ja[e];
  if (!n)
    throw new Error('"' + e + "\" is not a recognized type. Use `addCard` instead.'");
  if (t.type && n.type !== t.type)
    throw new Error("Cannot overwrite type parameter.");
  var r = on.clone(n);
  r = Nn(Nn({}, r), t), $t[r.type] = r;
};
dt.changeOrder = function(e, t) {
  var n = is(e);
  ot.splice(n, 1), ot.splice(t, 0, e);
};
dt.resetModifications = function() {
  ot = on.clone(Ka), $t = {};
};
dt.types = xe;
var Hh = dt;
const zh = /* @__PURE__ */ Mh(Hh), jh = {
  mail: "mail",
  phone: "ring_volume",
  link: "link"
}, Hs = 13, Nr = ["en", "de"], _t = window.navigator.userLanguage || window.navigator.language || Nr[0], gt = {
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
}, Bh = {
  name: "PawLazyField",
  emits: ["clicked"],
  data() {
    return {
      hasSlot: null,
      formatting: null,
      inputOutline: !1,
      show: !1,
      copying: !1,
      message: null,
      success: null,
      formatError: null,
      actionIcons: jh,
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
    this.initFormat(), O.locale(_t);
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
    PawIcon: ze
  },
  setup() {
    const { t: e } = Ft({
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
          return isNaN(e) || isNaN(parseFloat(e)) ? (this.setMessage(this.t("format.numberError"), !1), this.formatError = !0, e) : new Intl.NumberFormat(_t, {
            minimumFractionDigits: this.minDecimals,
            maximumFractionDigits: this.maxDecimals
          }).format(e);
        case "card":
          return n.length < Hs ? (this.setMessage(this.t("format.creditCardDigitError", { minDigits: `<b>${Hs}</b>` }), !1), this.formatError = !0, e) : this.formatCard(n, t);
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
          this.unit.label = "24h", this.unit.icon = "calendar_today";
          break;
      }
      return e.locale(_t).format(t);
    },
    parseDate(e, t) {
      if (!e || !t)
        return e;
      let n = -1, r = null, s = null;
      for (const i in Nr)
        for (const l in gt[t].formats) {
          if (gt[t].formats[l] === "utc")
            continue;
          const u = O(e, gt[t].formats[l], Nr[i], !0), h = u.parsingFlags();
          if (u.isValid() && !h.weekdayMismatch)
            return this.formatDate(u, gt[t].format, t);
          const p = h.unusedInput.length + h.unusedTokens.length;
          (p < n || n === -1) && (n = p, r = gt[t].formats[l], s = h);
        }
      if (t === "datetime" && gt[t].formats.includes("utc")) {
        const i = O.utc(e, !0), l = i.parsingFlags();
        if (i.isValid())
          return this.formatDate(i, gt[t].format, t);
        const u = l.unusedInput.length + l.unusedTokens.length;
        l.overflow >= 0 && (u < n || n === -1) && (n = u, r = "UTC → YYYY-MM-DDTkk:mm:ss+ZZ", s = l);
      }
      let a = null;
      return s.overflow >= 0 && s.parsedDateParts.length > s.overflow - 1 && (a = s.parsedDateParts[s.overflow]), this.setMessage(this.t("format.datetimeError", {
        momentType: `<b>${t.charAt(0).toUpperCase() + t.slice(1)}</b>`,
        candidate: `<b>${r}</b>`,
        overflow: a ? this.t("format.overflow", {
          overflow: `<b>${a}</b>`
        }) : "",
        mismatch: s.weekdayMismatch ? this.t("format.mismatch", {
          mismatch: `<b>${this.t("format.mismatch")}</b>`
        }) : ""
      }), !1), e;
    },
    formatCard(e, t) {
      var s;
      const n = zh(e)[0];
      if (!n)
        return this.setMessage(this.t("format.creditCardInvalid"), !1), this.formatError = !0, e;
      let r = e.toString().split("");
      return n.gaps.forEach((a, i) => r.splice(a + i, 0, " ")), t ? r.join("") : `${(s = n.niceType) == null ? void 0 : s.toUpperCase()} ${this.show ? r.join("") : `•••• ${e.slice(-4)}`}`;
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
      const n = /^(\+)((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)/ig, r = /^(\+)((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(0)*(\d{2,3})(\d{3})(\d{2})(\d{2})/ig, s = t.plus ? "+" : "", a = t.brackets ? { l: "(", r: ")" } : { l: "", r: "" }, i = t.space ? " " : "", l = t.dash ? "-" : "", u = this.standard(e), h = r.exec(u), p = n.exec(u);
      if (!h && p)
        return this.setMessage(this.t("format.phoneTooShort"), !1), this.formatError = !0, e;
      if (!h && !p)
        return this.setMessage(this.t("format.phonePrefixError"), !1), this.formatError = !0, e;
      const S = t.localPrefix && h[3] ? `${a.l}${h[3]}${a.r}` : "", x = t.areaCode ? h[2] : "";
      return `${t.areaCode ? s : ""}${x}${t.areaCode ? i : ""}${S}${h[4]}${i}${h[5]}${i}${l}${t.dash ? i : ""}${h[6]}${i}${l}${t.dash ? i : ""}${h[7]}`;
    }
  }
}, Gh = { class: "flex flex-col gap-1" }, Zh = {
  key: 0,
  class: "flex flex-row"
}, qh = {
  key: 0,
  class: "prose-xs element-text text-xs uppercase text-gray-500 transition"
}, Jh = ["title"], Kh = ["textContent"], Xh = {
  key: 0,
  class: "mr-1 text-xs text-gray-400"
}, Qh = /* @__PURE__ */ B(" copy_all "), $h = ["innerHTML"], em = ["innerHTML"];
function tm(e, t, n, r, s, a) {
  const i = ae("PawIcon");
  return y(), w("div", Gh, [
    n.label || n.info ? (y(), w("div", Zh, [
      n.label ? (y(), w("label", qh, U(n.label), 1)) : I("", !0),
      n.info ? (y(), w("span", {
        key: 1,
        class: "ml-auto prose-xs element-text uppercase text-gray-500 cursor-help transition",
        title: n.title
      }, U(n.info), 9, Jh)) : I("", !0)
    ])) : I("", !0),
    P("div", {
      class: M(["flex flex-row items-center justify-between text-gray-800 dark:text-white transition", {
        "border-t border-gray-200 dark:border-gray-600": n.label
      }])
    }, [
      P("span", {
        class: M(["my-1.5", {
          "prose-md": n.size === "md",
          "prose-sm": n.size === "sm",
          "whitespace-pre-wrap": n.format === "multiline",
          truncate: n.format !== "multiline",
          "text-action-500 dark:text-action-400 hover:text-action-300 dark:hover:text-action-600 cursor-pointer transition": n.action && !s.formatError
        }]),
        onClick: t[0] || (t[0] = (...l) => a.click && a.click(...l)),
        textContent: U(this.inputValue(!1))
      }, null, 10, Kh),
      P("div", {
        class: M(["flex flex-row shrink-0 items-center gap-1 py-1 ml-3", {
          "self-start": n.unitPosition === "top",
          "self-center": n.unitPosition === "center",
          "self-end": n.unitPosition === "bottom"
        }])
      }, [
        s.unit.label ? (y(), w("span", Xh, U(s.unit.label), 1)) : I("", !0),
        s.unit.icon ? (y(), re(i, {
          key: 1,
          size: "sm",
          class: "text-gray-400",
          outlined: s.unit.outlined === !0
        }, {
          default: j(() => [
            B(U(s.unit.icon), 1)
          ]),
          _: 1
        }, 8, ["outlined"])) : I("", !0),
        n.copy && !s.formatError ? (y(), re(i, {
          key: 2,
          size: "sm",
          onClick: a.copyToClipboard,
          class: "text-gray-400 cursor-pointer"
        }, {
          default: j(() => [
            Qh
          ]),
          _: 1
        }, 8, ["onClick"])) : I("", !0),
        n.secret && !s.formatError ? (y(), re(i, {
          key: 3,
          size: "sm",
          class: "text-gray-400 cursor-pointer",
          onClick: a.toggleSecret
        }, {
          default: j(() => [
            B(U(s.show ? "visibility_off" : "visibility"), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : I("", !0),
        n.action && !s.formatError ? (y(), re(i, {
          key: 4,
          size: "sm",
          onClick: a.click,
          class: "text-action-500 dark:text-action-400 hover:text-action-300 dark:hover:text-action-600 cursor-pointer transition"
        }, {
          default: j(() => [
            B(U(s.actionIcons[n.action]), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : I("", !0)
      ], 2)
    ], 2),
    s.message && s.success ? (y(), w("div", {
      key: 1,
      class: "prose-xs element-text italic text-success-500 dark:text-success-400 transition",
      innerHTML: s.message
    }, null, 8, $h)) : I("", !0),
    s.message && !s.success && !n.hideErrors ? (y(), w("div", {
      key: 2,
      class: "prose-xs element-text italic text-danger-500 dark:text-danger-400 transition",
      innerHTML: s.message
    }, null, 8, em)) : I("", !0)
  ]);
}
const nm = /* @__PURE__ */ ve(Bh, [["render", tm]]), rm = {
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
    PawIcon: ze
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
}, sm = ["title"], am = /* @__PURE__ */ B(" navigate_next ");
function im(e, t, n, r, s, a) {
  const i = ae("PawIcon");
  return y(), w("button", {
    class: M(["flex items-center group my-0 h-8 w-full prose-md element-text rounded-md transition", a.calcButton()]),
    title: n.title,
    onClick: t[0] || (t[0] = (...l) => a.click && a.click(...l))
  }, [
    n.icon ? (y(), re(i, {
      key: 0,
      size: n.size,
      outlined: n.outlined,
      class: M(["ml-0.75 mr-2 transition", a.calcIcon()])
    }, {
      default: j(() => [
        B(U(n.icon), 1)
      ]),
      _: 1
    }, 8, ["size", "outlined", "class"])) : I("", !0),
    P("span", {
      class: M(["flex-grow text-left truncate", n.icon ? "" : "ml-3"])
    }, [
      Le(e.$slots, "default")
    ], 2),
    se(i, {
      size: "sm",
      class: M([
        "opacity-0 text-gray-400",
        n.disabled ? "" : "group-hover:opacity-100 group-focus:text-action-100 dark:group-focus:text-action-100 group-focus:opacity-100 group-active:text-action-100 dark:group-active:text-action-100 group-active:opacity-100"
      ])
    }, {
      default: j(() => [
        am
      ]),
      _: 1
    }, 8, ["class"])
  ], 10, sm);
}
const lm = /* @__PURE__ */ ve(rm, [["render", im]]), om = {
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
    PawListItem: lm
  },
  methods: {
    click(e) {
      this.$emit("clicked", e);
    }
  }
};
function cm(e, t, n, r, s, a) {
  const i = ae("PawListItem");
  return !n.items || Object.keys(n.items).length === 0 ? (y(), w("div", {
    key: 0,
    class: M(["flex items-center w-full p-4 mb-8 bg-warning-100 dark:bg-warning-800 text-warning-800 dark:text-warning-100 rounded-lg transition", s.hasSlot ? "" : "hidden"])
  }, [
    Le(e.$slots, "default")
  ], 2)) : (y(!0), w(ce, { key: 1 }, Ve(n.items, (l, u) => (y(), w("div", {
    key: u,
    class: M(["py-1.5", {
      "border-t border-gray-200 dark:border-gray-700 transition": n.divider && u > 0
    }])
  }, [
    se(i, {
      icon: l.icon ?? n.icon,
      size: l.size ?? n.size,
      title: l.title ?? n.title,
      outlined: l.outlined ?? n.outlined,
      disabled: l.disabled ?? n.disabled,
      onClicked: (h) => a.click(u)
    }, {
      default: j(() => [
        B(U(l.text), 1)
      ]),
      _: 2
    }, 1032, ["icon", "size", "title", "outlined", "disabled", "onClicked"])
  ], 2))), 128));
}
const Lm = /* @__PURE__ */ ve(om, [["render", cm]]);
const um = ["title"], dm = ["checked", "disabled"], fm = { class: "relative w-8 h-5 m-0.5 shrink-0 self-start bg-gray-400 peer-disabled:bg-gray-200 dark:peer-disabled:bg-gray-600 peer-checked:bg-action-500 dark:peer-checked:bg-action-500 rounded-full transition" }, hm = {
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
}, mm = /* @__PURE__ */ Object.assign(hm, {
  setup(e) {
    const t = Me();
    return (n, r) => {
      var s, a;
      return y(), w("label", {
        class: M(["group inline-flex items-center", {
          "cursor-pointer": !e.disabled,
          "gap-1": e.size === "sm",
          "gap-2 p-1": e.size === "md",
          "gap-3 p-2": e.size === "lg"
        }]),
        title: e.title
      }, [
        P("input", {
          ref_key: "toggle",
          ref: t,
          type: "checkbox",
          onChange: r[0] || (r[0] = (...i) => n.change && n.change(...i)),
          checked: e.checked,
          disabled: e.disabled,
          class: "peer hidden"
        }, null, 40, dm),
        P("span", fm, [
          P("span", {
            class: M(["block w-4 h-4 bg-white m-0.5 rounded-full shadow-box dark:shadow-box-dark transition", [(s = t.value) != null && s.checked ? "translate-x-3" : "translate-x-0", (a = t.value) != null && a.disabled ? "dark:bg-gray-400" : ""]])
          }, null, 2)
        ]),
        n.$slots.default ? (y(), w("span", {
          key: 0,
          class: M([
            "text-md transition",
            e.disabled ? "text-gray-300 dark:text-gray-600 italic" : "text-gray-900 dark:text-white"
          ])
        }, [
          Le(n.$slots, "default", {}, void 0, !0)
        ], 2)) : I("", !0)
      ], 10, um);
    };
  }
}), Rm = /* @__PURE__ */ ve(mm, [["__scopeId", "data-v-c043c632"]]), gm = 8, ym = 5, bm = {
  name: "PawTable",
  emits: [
    "filtered",
    "selected",
    "sorted",
    "clicked",
    "reordered",
    "paginated",
    "buttonClicked",
    "searched"
  ],
  data() {
    return {
      hasSlot: this.$slots.default && this.$slots.default().filter(
        (e) => e.type !== Comment && (typeof e.children == "string" || e.children instanceof String ? e.children.trim() : e.children) !== ""
      ).length,
      settingsOpened: !1,
      searchbarOpened: !1,
      searchValue: null,
      error: !1
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
    selectionEnabled: {
      type: Boolean,
      default: !1
    }
  },
  components: {
    PawCheckbox: js,
    PawLazyField: nm,
    PawLink: Bs,
    PawIcon: ze,
    PawLabel: Sh,
    PawButton: Er,
    PawDropdown: ph,
    PawCrazyInput: Vo
  },
  setup() {
    const { t: e } = Ft({
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
      const n = this.informal ? ym : gm;
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
        first: new Intl.NumberFormat(_t).format(
          this.meta.firstItem
        ),
        last: new Intl.NumberFormat(_t).format(
          this.meta.lastItem
        ),
        total: new Intl.NumberFormat(_t).format(
          this.meta.totalRecords
        )
      }) : this.t("table.showRecords", {
        total: new Intl.NumberFormat(_t).format(
          this.data.items.length
        )
      });
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
     */
    click(e) {
      this.$emit("clicked", e);
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
      document.addEventListener(r, function s(a) {
        if (!(a.target instanceof Element))
          return document.removeEventListener(r, s), !1;
        e !== a.target && !Array.from(n).includes(a.target) && t(a) !== !1 && document.removeEventListener(r, s);
      });
    }
  }
}, _m = {
  key: 0,
  class: "text-lg font-bold text-gray-500 dark:text-white whitespace-nowrap"
}, pm = {
  key: 0,
  class: "md:flex flex-row gap-3 hidden"
}, km = { class: "flex flex-row" }, wm = { class: "flex flex-row" }, vm = /* @__PURE__ */ P("col", { class: "w-8" }, null, -1), xm = /* @__PURE__ */ P("div", { class: "w-8 h-2 bg-action-300 dark:bg-action-600 rounded-md" }, null, -1), Sm = /* @__PURE__ */ B(" last_page "), Mm = /* @__PURE__ */ B(" assignment "), Om = {
  key: 2,
  class: "border-r border-t border-b border-gray-200 dark:border-gray-700 rounded-r-lg absolute top-2 right-4 bottom-2 -left-12 h-12 z-10 group-hover:shadow-card dark:group-hover:shadow-card-dark transition-all"
}, Dm = { class: "flex flex-col text-left opacity-[.999] overflow-hidden rounded-md" }, Tm = ["onClick"], Cm = /* @__PURE__ */ B("drag_handle"), Ym = ["innerHTML"], Im = { class: "flex flex-row items-center" };
function Nm(e, t, n, r, s, a) {
  const i = ae("PawButton"), l = ae("PawCrazyInput"), u = ae("PawDropdown"), h = ae("PawLink"), p = ae("PawCheckbox"), S = ae("PawLazyField"), x = ae("PawLabel"), V = ae("PawIcon");
  return !n.data || Object.keys(n.data).length === 0 ? (y(), w("div", {
    key: 0,
    class: M(["flex items-center w-full p-4 mb-8 bg-warning-100 dark:bg-warning-800 text-warning-800 dark:text-warning-100 rounded-lg transition", s.hasSlot ? "" : "hidden"])
  }, [
    Le(e.$slots, "default")
  ], 2)) : (y(), w("div", {
    key: 1,
    class: M(["flex flex-col relative transition z-0", {
      "pointer-events-none": n.loading
    }])
  }, [
    P("div", {
      class: M(["overflow-y-auto max-h-full transition", {
        "overflow-hidden": n.loading,
        "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-t border-l border-r rounded-t-xl translate-z-0": !n.informal,
        "px-4": n.informal
      }])
    }, [
      n.buttons.length || n.title ? (y(), w("div", {
        key: 0,
        class: M([{ "px-0": n.informal, "px-6": !n.informal }, "sticky inset-0 flex flex-row justify-between items-center mt-3 h-8 z-50 gap-3"])
      }, [
        P("div", null, [
          n.title ? (y(), w("h1", _m, U(n.title), 1)) : I("", !0)
        ]),
        Object.keys(n.buttons).length <= 4 ? (y(), w("div", pm, [
          P("div", km, [
            pt(se(i, {
              disabled: n.loading,
              outlined: "",
              size: "md",
              title: "Search",
              icon: "search",
              onClicked: t[0] || (t[0] = (g) => a.openSearchbar())
            }, null, 8, ["disabled"]), [
              [wn, !s.searchbarOpened && n.searchbar]
            ]),
            se(l, {
              ref: "searchbar",
              value: s.searchValue,
              placeholder: "Search",
              title: "Extended information about this field",
              contextIcon: "search",
              class: M(["max-h-8", s.searchbarOpened ? "w-full" : "w-0 overflow-hidden"]),
              onTyped: t[1] || (t[1] = (g) => a.searchTyped(g))
            }, {
              default: j(() => [
                B(U(s.searchValue), 1)
              ]),
              _: 1
            }, 8, ["value", "class"])
          ]),
          (y(!0), w(ce, null, Ve(n.buttons, (g) => (y(), re(i, {
            key: g.id,
            onClicked: (T) => this.$emit("buttonClicked", g.identifier),
            disabled: n.loading,
            outlined: g.outlined,
            size: "md",
            title: g.title,
            icon: g.icon
          }, {
            default: j(() => [
              B(U(g.textSlot), 1)
            ]),
            _: 2
          }, 1032, ["onClicked", "disabled", "outlined", "title", "icon"]))), 128))
        ])) : I("", !0),
        P("div", {
          class: M(["flex flex-row gap-3 md:hidden", [n.buttons.length >= 4 ? "!flex" : ""]])
        }, [
          P("div", wm, [
            pt(se(i, {
              disabled: n.loading,
              outlined: "",
              size: "md",
              title: "Search",
              icon: "search",
              onClicked: t[2] || (t[2] = (g) => a.openSearchbar("mobile"))
            }, null, 8, ["disabled"]), [
              [wn, !s.searchbarOpened && n.searchbar]
            ]),
            se(l, {
              ref: "searchbarMobile",
              value: s.searchValue,
              placeholder: "Search",
              title: "Extended information about this field",
              contextIcon: "search",
              class: M(["max-h-8", s.searchbarOpened ? "w-full" : "w-0 overflow-hidden"]),
              onTyped: t[3] || (t[3] = (g) => a.searchTyped(g))
            }, {
              default: j(() => [
                B(U(s.searchValue), 1)
              ]),
              _: 1
            }, 8, ["value", "class"])
          ]),
          se(u, {
            class: M(s.searchbarOpened ? "hidden" : ""),
            outlined: "",
            size: "md",
            icon: "expand_more",
            textSlot: "Options",
            items: n.buttons,
            onSelected: t[4] || (t[4] = (g) => this.$emit("buttonClicked", g))
          }, null, 8, ["class", "items"])
        ], 2)
      ], 2)) : I("", !0),
      P("table", {
        class: M(["relative w-full formal-table fill-available", {
          "border-collapse": !n.informal,
          "border-separate table-informal": n.informal
        }])
      }, [
        P("colgroup", null, [
          n.informal ? I("", !0) : (y(), w("col", {
            key: 0,
            class: M({
              "w-8": a.activeHeadings.length > 0,
              "w-auto": a.activeHeadings.length === 0
            })
          }, null, 2)),
          (y(!0), w(ce, null, Ve(a.activeHeadings, (g, T) => (y(), w("col", {
            key: T,
            class: M(["w-auto", {
              "min-w-[160px]": !n.informal,
              "min-w-[120px]": n.informal
            }])
          }, null, 2))), 128)),
          vm
        ]),
        P("thead", null, [
          P("tr", {
            class: M([{
              "bg-white dark:bg-gray-800 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition": !n.informal
            }, "sticky z-20 top-0 transition-all"])
          }, [
            n.informal ? I("", !0) : (y(), w("th", {
              key: 0,
              class: M([{
                "pt-3 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full": !n.informal
              }, "sticky z-10 pl-6 pb-0 pr-3 left-0 text-left bg-white dark:bg-gray-800 transition-all"])
            }, null, 2)),
            (y(!0), w(ce, null, Ve(a.activeHeadings, (g, T) => (y(), w("th", {
              key: g.id,
              class: M(["pb-0", [
                T > 0 ? "pl-7" : "",
                T === 0 && n.informal ? "pl-3" : "",
                g.align === "left" || !g.align ? "text-left" : "",
                g.align === "right" ? "text-right" : "",
                g.align === "center" ? "text-center" : "",
                n.informal ? `${n.bgLight} dark:${n.bgDark} transition` : "pt-3 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition-all"
              ]])
            }, [
              g.sort == "disabled" ? (y(), re(h, {
                key: 0,
                class: "inline-flex uppercase",
                size: "sm",
                align: "right",
                compact: ""
              }, {
                default: j(() => [
                  B(U(a.headingTitle(g.title || g.name)), 1)
                ]),
                _: 2
              }, 1024)) : (y(), re(h, {
                key: 1,
                class: "inline-flex uppercase",
                size: "sm",
                align: "right",
                compact: "",
                onClicked: (c) => a.sort(g),
                color: !g.title && !g.name ? "danger" : g.sort ? "action" : null,
                icon: g.sort === "asc" || !g.sort ? "keyboard_arrow_up" : "keyboard_arrow_down"
              }, {
                default: j(() => [
                  B(U(a.headingTitle(g.title || g.name)), 1)
                ]),
                _: 2
              }, 1032, ["onClicked", "color", "icon"]))
            ], 2))), 128)),
            P("th", {
              class: M([[
                n.informal ? `pr-1 ${n.bgLight} dark:${n.bgDark} transition` : "pr-6 bg-white dark:bg-gray-800 shadow-gray-200-border-b-full dark:shadow-gray-700-border-b-full transition-all"
              ], "sticky z-10 pl-3 pb-0 right-0 text-right transition-all"])
            }, [
              se(h, {
                size: "md",
                icon: "playlist_add",
                class: M({
                  "ml-auto pt-3": !n.informal
                }),
                onClicked: t[5] || (t[5] = (g) => s.settingsOpened = !s.settingsOpened)
              }, null, 8, ["class"]),
              n.informal ? (y(), w("div", {
                key: 0,
                class: M([`${n.bgLight} dark:${n.bgDark}`, "absolute top-0 bottom-0 left-0 -right-4 -z-10 transition"])
              }, null, 2)) : I("", !0)
            ], 2)
          ], 2)
        ]),
        P("tbody", null, [
          (y(!0), w(ce, null, Ve(a.currentItems, (g, T) => (y(), w("tr", {
            key: g.id,
            class: M(["relative transition-all group", {
              "border-b border-gray-200 dark:border-gray-700": T < a.currentItems.length - 1 && !n.informal,
              "animate-loading": n.loading,
              "h-8 hover:bg-gray-100 dark:hover:bg-gray-800": !n.informal,
              "h-12 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg": n.informal
            }])
          }, [
            n.informal ? I("", !0) : (y(), w("td", {
              key: 0,
              class: M(["sticky z-10 pl-6 pr-3 left-0 bg-white dark:bg-gray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 overflow-hidden transition", {
                "py-0": !n.informal,
                "pt-2 pb-2": n.informal
              }])
            }, [
              n.selectionEnabled ? (y(), re(p, {
                key: 0,
                size: "md",
                onChanged: (c) => a.select(c, g.id)
              }, null, 8, ["onChanged"])) : I("", !0)
            ], 2)),
            (y(!0), w(ce, null, Ve(a.activeHeadings, (c, f) => (y(), w("td", {
              key: c.name,
              class: M([[
                f > 0 ? "pl-7" : "",
                f === 0 && n.informal ? "pl-3 rounded-l-lg border-l overflow-hidden before:opacity-0 group-hover:before:opacity-100 before:content-[''] before:absolute before:mt-[-9.75px] before:left-0 before:right-0 before:h-12 before:overflow-clip group-hover:before:shadow-card dark:group-hover:before:shadow-card-dark before:rounded-lg before:transition" : "",
                f === a.activeHeadings.length - 1 ? "pr-2" : "",
                c.align === "left" || !c.align ? "text-left" : "",
                c.align === "right" ? "text-right" : "",
                c.align === "center" ? "text-center" : "",
                n.informal ? "pt-2 pb-2 border-t border-b border-gray-200 dark:border-gray-700 transition" : "py-0"
              ], "align-middle"])
            }, [
              !n.loading && c.format !== "label" ? (y(), re(S, {
                key: 0,
                class: "inline-flex",
                size: "sm",
                "hide-errors": "",
                action: c.action,
                copy: c.copy,
                link: c.action === "link" ? g[c.name].link : null,
                insecure: c.action === "link" ? g[c.name].insecure : null,
                secret: c.secret,
                format: c.format,
                "unit-label": c.unitLabel,
                "unit-icon": c.unitIcon,
                "unit-icon-outlined": c.unitIconOutlined,
                "min-decimals": c.minDecimals,
                "max-decimals": c.maxDecimals
              }, {
                default: j(() => [
                  B(U(a.cellValue(
                    c.action === "link" ? g[c.name].text : g[c.name],
                    c.name
                  )), 1)
                ]),
                _: 2
              }, 1032, ["action", "copy", "link", "insecure", "secret", "format", "unit-label", "unit-icon", "unit-icon-outlined", "min-decimals", "max-decimals"])) : I("", !0),
              !n.loading && c.format === "label" ? (y(), re(x, {
                key: 1,
                class: "inline-flex my-0.75",
                size: "sm",
                color: g[c.name].color,
                disabled: g[c.name].disabled
              }, {
                default: j(() => [
                  B(U(a.cellValue(g[c.name].text, c.name)), 1)
                ]),
                _: 2
              }, 1032, ["color", "disabled"])) : I("", !0),
              n.loading ? (y(), w("div", {
                key: 2,
                class: M(["inline-block bg-gray-400 align-middle", {
                  "w-24 h-2 rounded-md": c.format !== "label",
                  "w-14 h-6 rounded-full": c.format === "label"
                }])
              }, null, 2)) : I("", !0)
            ], 2))), 128)),
            P("td", {
              class: M(["sticky z-10 pl-3 py-0 max-w-[120px] right-0 bg-white dark:bg-gray-800 transition-all", [
                n.loading ? "before:opacity-100" : "",
                n.informal ? "pr-3 h-12" : "pr-6 overflow-y-clip row-clip group-hover:bg-gray-100 dark:group-hover:bg-gray-800 before:content-[''] before:absolute before:-z-10 before:inset-0 before:opacity-0 group-hover:before:opacity-100 before:transition before:shadow-box dark:before:shadow-box-dark"
              ]])
            }, [
              P("div", {
                class: M([
                  n.informal ? "flex items-center absolute -top-2 h-16 left-[-0.75px] -right-4 pr-4 overflow-hidden transition-all" : ""
                ])
              }, [
                !n.informal && !n.loading || n.informal ? (y(), re(h, {
                  key: 0,
                  size: "sm",
                  icon: n.informal ? n.ctaIcon : "last_page",
                  outlined: n.informal,
                  color: "action",
                  align: "right",
                  compact: "",
                  onClicked: (c) => a.click(g.id),
                  class: M(["z-20", {
                    "ml-auto": !n.informal,
                    "justify-center absolute h-12 w-[49px] bg-white dark:bg-gray-800 border-r border-t border-b border-gray-200 dark:border-gray-700 rounded-r-lg transition": n.informal
                  }])
                }, {
                  default: j(() => [
                    B(U(a.detailsText), 1)
                  ]),
                  _: 2
                }, 1032, ["icon", "outlined", "onClicked", "class"])) : I("", !0),
                n.loading ? (y(), w("div", {
                  key: 1,
                  class: M(["flex flex-row items-center", { "p-3": n.informal }])
                }, [
                  n.informal ? (y(), re(V, {
                    key: 1,
                    size: "sm",
                    class: "text-action-300 dark:text-action-600",
                    outlined: ""
                  }, {
                    default: j(() => [
                      Mm
                    ]),
                    _: 1
                  })) : (y(), w(ce, { key: 0 }, [
                    xm,
                    se(V, {
                      size: "sm",
                      class: "text-action-300 dark:text-action-600"
                    }, {
                      default: j(() => [
                        Sm
                      ]),
                      _: 1
                    })
                  ], 64))
                ], 2)) : I("", !0),
                n.informal ? (y(), w("div", Om)) : I("", !0),
                n.informal ? (y(), w("div", {
                  key: 3,
                  class: M(`${n.bgLight} dark:${n.bgDark} absolute top-2 bottom-2 left-0 right-0 z-0 transition`)
                }, null, 2)) : I("", !0),
                n.informal ? (y(), w("div", {
                  key: 4,
                  class: M(`${n.bgLight} dark:${n.bgDark} absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition`)
                }, null, 2)) : I("", !0)
              ], 2)
            ], 2)
          ], 2))), 128))
        ])
      ], 2)
    ], 2),
    P("div", {
      class: M(["absolute max-w-[200px] z-30 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-card dark:shadow-card-dark transition-all before:absolute before:content-[''] before:w-4 before:h-4 before:-top-2 before:z-0 before:rotate-45 before:bg-gray-100 dark:before:bg-gray-700 before:border before:border-t-gray-200 before:border-l-gray-200 dark:before:border-t-gray-600 dark:before:border-l-gray-600 before:border-b-gray-100 before:border-r-gray-100 dark:before:border-b-gray-700 dark:before:border-r-gray-700 before:transition", {
        "opacity-0 invisible -translate-y-5": !s.settingsOpened || this.loading,
        "opacity-1 visible translate-y-0": s.settingsOpened && !this.loading,
        "top-24 right-3 before:right-6": !n.informal,
        "top-20 right-5 before:right-3": n.informal
      }])
    }, [
      P("div", Dm, [
        (y(!0), w(ce, null, Ve(a.headings, (g, T) => (y(), w("div", {
          key: T,
          class: "flex flex-row justify-between gap-2 p-1 items-center hover:bg-white dark:hover:bg-gray-800 transition"
        }, [
          se(V, {
            size: "sm",
            outlined: "",
            onClick: (c) => a.toggleHeading(g),
            class: M(["cursor-pointer transition", {
              "text-gray-400": g.visible,
              "text-gray-200 dark:text-gray-600": !g.visible
            }])
          }, {
            default: j(() => [
              B(U(g.visible ? "visibility" : "visibility_off"), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "class"]),
          P("span", {
            class: M(["mr-auto prose-md element-text truncate font-normal cursor-pointer transition", {
              "text-gray-900 dark:text-white": g.visible,
              "text-gray-500 dark:text-gray-500": !g.visible
            }]),
            onClick: (c) => a.toggleHeading(g)
          }, U(g.title), 11, Tm),
          se(V, {
            size: "sm",
            class: M(["cursor-grab transition", {
              "text-gray-400": g.visible,
              "text-gray-200 dark:text-gray-600": !g.visible
            }]),
            disabled: g.visible
          }, {
            default: j(() => [
              Cm
            ]),
            _: 2
          }, 1032, ["class", "disabled"])
        ]))), 128))
      ])
    ], 2),
    P("div", {
      class: M(["flex flex-col xs:flex-row items-center justify-between prose-xs element-text text-gray-500 border-gray-200 dark:border-gray-700 transition", {
        "border-t": a.currentItems.length > 0 || n.informal,
        "bg-white dark:bg-gray-800 border-b border-l border-r rounded-b-xl translate-z-0": !n.informal,
        "px-6 py-3": !n.informal,
        "px-3 py-2 mx-4": n.informal
      }])
    }, [
      P("div", {
        class: M({
          "italic text-danger-500 dark:text-danger-400 transition": s.error
        }),
        innerHTML: a.footerText
      }, null, 10, Ym),
      P("div", Im, [
        se(h, {
          size: "sm",
          icon: "keyboard_arrow_up",
          class: "mr-2",
          onClicked: t[6] || (t[6] = (g) => a.paginate("prev")),
          disabled: a.meta.currentPage <= 1
        }, {
          default: j(() => [
            B(U(this.t("table.previous")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        se(h, {
          size: "sm",
          icon: "keyboard_arrow_down",
          onClicked: t[7] || (t[7] = (g) => a.paginate("next")),
          disabled: a.meta.currentPage >= a.meta.totalPages
        }, {
          default: j(() => [
            B(U(this.t("table.next")), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 2)
  ], 2));
}
const Fm = /* @__PURE__ */ ve(bm, [["render", Nm]]);
export {
  Er as PawButton,
  js as PawCheckbox,
  Ii as PawChip,
  Vo as PawCrazyInput,
  Em as PawDatePicker,
  ph as PawDropDown,
  ze as PawIcon,
  Sh as PawLabel,
  nm as PawLazyField,
  Bs as PawLink,
  Lm as PawList,
  lm as PawListItem,
  Ui as PawRadio,
  Rm as PawSwitch,
  Fm as PawTable
};
