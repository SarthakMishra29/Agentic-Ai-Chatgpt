(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const f of o)
      if (f.type === "childList")
        for (const d of f.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && r(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(o) {
    const f = {};
    return (
      o.integrity && (f.integrity = o.integrity),
      o.referrerPolicy && (f.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const f = u(o);
    fetch(o.href, f);
  }
})();
function lb(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
    ? l.default
    : l;
}
var ao = { exports: {} },
  ci = {};
var mp;
function ab() {
  if (mp) return ci;
  mp = 1;
  var l = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function u(r, o, f) {
    var d = null;
    if (
      (f !== void 0 && (d = "" + f),
      o.key !== void 0 && (d = "" + o.key),
      "key" in o)
    ) {
      f = {};
      for (var p in o) p !== "key" && (f[p] = o[p]);
    } else f = o;
    return (
      (o = f.ref),
      { $$typeof: l, type: r, key: d, ref: o !== void 0 ? o : null, props: f }
    );
  }
  return ((ci.Fragment = i), (ci.jsx = u), (ci.jsxs = u), ci);
}
var pp;
function ib() {
  return (pp || ((pp = 1), (ao.exports = ab())), ao.exports);
}
var L = ib(),
  io = { exports: {} },
  le = {};
var yp;
function ub() {
  if (yp) return le;
  yp = 1;
  var l = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    D = Symbol.iterator;
  function Y(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (D && E[D]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var T = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    U = Object.assign,
    w = {};
  function X(E, H, k) {
    ((this.props = E),
      (this.context = H),
      (this.refs = w),
      (this.updater = k || T));
  }
  ((X.prototype.isReactComponent = {}),
    (X.prototype.setState = function (E, H) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, E, H, "setState");
    }),
    (X.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    }));
  function G() {}
  G.prototype = X.prototype;
  function V(E, H, k) {
    ((this.props = E),
      (this.context = H),
      (this.refs = w),
      (this.updater = k || T));
  }
  var K = (V.prototype = new G());
  ((K.constructor = V), U(K, X.prototype), (K.isPureReactComponent = !0));
  var $ = Array.isArray;
  function te() {}
  var Z = { H: null, A: null, T: null, S: null },
    re = Object.prototype.hasOwnProperty;
  function Ce(E, H, k) {
    var J = k.ref;
    return {
      $$typeof: l,
      type: E,
      key: H,
      ref: J !== void 0 ? J : null,
      props: k,
    };
  }
  function Ke(E, H) {
    return Ce(E.type, H, E.props);
  }
  function lt(E) {
    return typeof E == "object" && E !== null && E.$$typeof === l;
  }
  function Ge(E) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (k) {
        return H[k];
      })
    );
  }
  var gt = /\/+/g;
  function Je(E, H) {
    return typeof E == "object" && E !== null && E.key != null
      ? Ge("" + E.key)
      : H.toString(36);
  }
  function rt(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(te, te)
            : ((E.status = "pending"),
              E.then(
                function (H) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = H));
                },
                function (H) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = H));
                },
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function M(E, H, k, J, ne) {
    var se = typeof E;
    (se === "undefined" || se === "boolean") && (E = null);
    var be = !1;
    if (E === null) be = !0;
    else
      switch (se) {
        case "bigint":
        case "string":
        case "number":
          be = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case l:
            case i:
              be = !0;
              break;
            case v:
              return ((be = E._init), M(be(E._payload), H, k, J, ne));
          }
      }
    if (be)
      return (
        (ne = ne(E)),
        (be = J === "" ? "." + Je(E, 0) : J),
        $(ne)
          ? ((k = ""),
            be != null && (k = be.replace(gt, "$&/") + "/"),
            M(ne, H, k, "", function (ya) {
              return ya;
            }))
          : ne != null &&
            (lt(ne) &&
              (ne = Ke(
                ne,
                k +
                  (ne.key == null || (E && E.key === ne.key)
                    ? ""
                    : ("" + ne.key).replace(gt, "$&/") + "/") +
                  be,
              )),
            H.push(ne)),
        1
      );
    be = 0;
    var at = J === "" ? "." : J + ":";
    if ($(E))
      for (var Be = 0; Be < E.length; Be++)
        ((J = E[Be]), (se = at + Je(J, Be)), (be += M(J, H, k, se, ne)));
    else if (((Be = Y(E)), typeof Be == "function"))
      for (E = Be.call(E), Be = 0; !(J = E.next()).done; )
        ((J = J.value), (se = at + Je(J, Be++)), (be += M(J, H, k, se, ne)));
    else if (se === "object") {
      if (typeof E.then == "function") return M(rt(E), H, k, J, ne);
      throw (
        (H = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return be;
  }
  function Q(E, H, k) {
    if (E == null) return E;
    var J = [],
      ne = 0;
    return (
      M(E, J, "", "", function (se) {
        return H.call(k, se, ne++);
      }),
      J
    );
  }
  function P(E) {
    if (E._status === -1) {
      var H = E._result;
      ((H = H()),
        H.then(
          function (k) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = k));
          },
          function (k) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = k));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = H)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ge =
      typeof reportError == "function"
        ? reportError
        : function (E) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var H = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof E == "object" &&
                  E !== null &&
                  typeof E.message == "string"
                    ? String(E.message)
                    : String(E),
                error: E,
              });
              if (!window.dispatchEvent(H)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", E);
              return;
            }
            console.error(E);
          },
    Se = {
      map: Q,
      forEach: function (E, H, k) {
        Q(
          E,
          function () {
            H.apply(this, arguments);
          },
          k,
        );
      },
      count: function (E) {
        var H = 0;
        return (
          Q(E, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (E) {
        return (
          Q(E, function (H) {
            return H;
          }) || []
        );
      },
      only: function (E) {
        if (!lt(E))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return E;
      },
    };
  return (
    (le.Activity = b),
    (le.Children = Se),
    (le.Component = X),
    (le.Fragment = u),
    (le.Profiler = o),
    (le.PureComponent = V),
    (le.StrictMode = r),
    (le.Suspense = y),
    (le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z),
    (le.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return Z.H.useMemoCache(E);
      },
    }),
    (le.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (le.cacheSignal = function () {
      return null;
    }),
    (le.cloneElement = function (E, H, k) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + ".",
        );
      var J = U({}, E.props),
        ne = E.key;
      if (H != null)
        for (se in (H.key !== void 0 && (ne = "" + H.key), H))
          !re.call(H, se) ||
            se === "key" ||
            se === "__self" ||
            se === "__source" ||
            (se === "ref" && H.ref === void 0) ||
            (J[se] = H[se]);
      var se = arguments.length - 2;
      if (se === 1) J.children = k;
      else if (1 < se) {
        for (var be = Array(se), at = 0; at < se; at++)
          be[at] = arguments[at + 2];
        J.children = be;
      }
      return Ce(E.type, ne, J);
    }),
    (le.createContext = function (E) {
      return (
        (E = {
          $$typeof: d,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: f, _context: E }),
        E
      );
    }),
    (le.createElement = function (E, H, k) {
      var J,
        ne = {},
        se = null;
      if (H != null)
        for (J in (H.key !== void 0 && (se = "" + H.key), H))
          re.call(H, J) &&
            J !== "key" &&
            J !== "__self" &&
            J !== "__source" &&
            (ne[J] = H[J]);
      var be = arguments.length - 2;
      if (be === 1) ne.children = k;
      else if (1 < be) {
        for (var at = Array(be), Be = 0; Be < be; Be++)
          at[Be] = arguments[Be + 2];
        ne.children = at;
      }
      if (E && E.defaultProps)
        for (J in ((be = E.defaultProps), be))
          ne[J] === void 0 && (ne[J] = be[J]);
      return Ce(E, se, ne);
    }),
    (le.createRef = function () {
      return { current: null };
    }),
    (le.forwardRef = function (E) {
      return { $$typeof: p, render: E };
    }),
    (le.isValidElement = lt),
    (le.lazy = function (E) {
      return { $$typeof: v, _payload: { _status: -1, _result: E }, _init: P };
    }),
    (le.memo = function (E, H) {
      return { $$typeof: g, type: E, compare: H === void 0 ? null : H };
    }),
    (le.startTransition = function (E) {
      var H = Z.T,
        k = {};
      Z.T = k;
      try {
        var J = E(),
          ne = Z.S;
        (ne !== null && ne(k, J),
          typeof J == "object" &&
            J !== null &&
            typeof J.then == "function" &&
            J.then(te, ge));
      } catch (se) {
        ge(se);
      } finally {
        (H !== null && k.types !== null && (H.types = k.types), (Z.T = H));
      }
    }),
    (le.unstable_useCacheRefresh = function () {
      return Z.H.useCacheRefresh();
    }),
    (le.use = function (E) {
      return Z.H.use(E);
    }),
    (le.useActionState = function (E, H, k) {
      return Z.H.useActionState(E, H, k);
    }),
    (le.useCallback = function (E, H) {
      return Z.H.useCallback(E, H);
    }),
    (le.useContext = function (E) {
      return Z.H.useContext(E);
    }),
    (le.useDebugValue = function () {}),
    (le.useDeferredValue = function (E, H) {
      return Z.H.useDeferredValue(E, H);
    }),
    (le.useEffect = function (E, H) {
      return Z.H.useEffect(E, H);
    }),
    (le.useEffectEvent = function (E) {
      return Z.H.useEffectEvent(E);
    }),
    (le.useId = function () {
      return Z.H.useId();
    }),
    (le.useImperativeHandle = function (E, H, k) {
      return Z.H.useImperativeHandle(E, H, k);
    }),
    (le.useInsertionEffect = function (E, H) {
      return Z.H.useInsertionEffect(E, H);
    }),
    (le.useLayoutEffect = function (E, H) {
      return Z.H.useLayoutEffect(E, H);
    }),
    (le.useMemo = function (E, H) {
      return Z.H.useMemo(E, H);
    }),
    (le.useOptimistic = function (E, H) {
      return Z.H.useOptimistic(E, H);
    }),
    (le.useReducer = function (E, H, k) {
      return Z.H.useReducer(E, H, k);
    }),
    (le.useRef = function (E) {
      return Z.H.useRef(E);
    }),
    (le.useState = function (E) {
      return Z.H.useState(E);
    }),
    (le.useSyncExternalStore = function (E, H, k) {
      return Z.H.useSyncExternalStore(E, H, k);
    }),
    (le.useTransition = function () {
      return Z.H.useTransition();
    }),
    (le.version = "19.2.3"),
    le
  );
}
var gp;
function _r() {
  return (gp || ((gp = 1), (io.exports = ub())), io.exports);
}
var N = _r();
const rb = lb(N);
var uo = { exports: {} },
  oi = {},
  ro = { exports: {} },
  so = {};
var vp;
function sb() {
  return (
    vp ||
      ((vp = 1),
      (function (l) {
        function i(M, Q) {
          var P = M.length;
          M.push(Q);
          e: for (; 0 < P; ) {
            var ge = (P - 1) >>> 1,
              Se = M[ge];
            if (0 < o(Se, Q)) ((M[ge] = Q), (M[P] = Se), (P = ge));
            else break e;
          }
        }
        function u(M) {
          return M.length === 0 ? null : M[0];
        }
        function r(M) {
          if (M.length === 0) return null;
          var Q = M[0],
            P = M.pop();
          if (P !== Q) {
            M[0] = P;
            e: for (var ge = 0, Se = M.length, E = Se >>> 1; ge < E; ) {
              var H = 2 * (ge + 1) - 1,
                k = M[H],
                J = H + 1,
                ne = M[J];
              if (0 > o(k, P))
                J < Se && 0 > o(ne, k)
                  ? ((M[ge] = ne), (M[J] = P), (ge = J))
                  : ((M[ge] = k), (M[H] = P), (ge = H));
              else if (J < Se && 0 > o(ne, P))
                ((M[ge] = ne), (M[J] = P), (ge = J));
              else break e;
            }
          }
          return Q;
        }
        function o(M, Q) {
          var P = M.sortIndex - Q.sortIndex;
          return P !== 0 ? P : M.id - Q.id;
        }
        if (
          ((l.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          l.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            p = d.now();
          l.unstable_now = function () {
            return d.now() - p;
          };
        }
        var y = [],
          g = [],
          v = 1,
          b = null,
          D = 3,
          Y = !1,
          T = !1,
          U = !1,
          w = !1,
          X = typeof setTimeout == "function" ? setTimeout : null,
          G = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;
        function K(M) {
          for (var Q = u(g); Q !== null; ) {
            if (Q.callback === null) r(g);
            else if (Q.startTime <= M)
              (r(g), (Q.sortIndex = Q.expirationTime), i(y, Q));
            else break;
            Q = u(g);
          }
        }
        function $(M) {
          if (((U = !1), K(M), !T))
            if (u(y) !== null) ((T = !0), te || ((te = !0), Ge()));
            else {
              var Q = u(g);
              Q !== null && rt($, Q.startTime - M);
            }
        }
        var te = !1,
          Z = -1,
          re = 5,
          Ce = -1;
        function Ke() {
          return w ? !0 : !(l.unstable_now() - Ce < re);
        }
        function lt() {
          if (((w = !1), te)) {
            var M = l.unstable_now();
            Ce = M;
            var Q = !0;
            try {
              e: {
                ((T = !1), U && ((U = !1), G(Z), (Z = -1)), (Y = !0));
                var P = D;
                try {
                  t: {
                    for (
                      K(M), b = u(y);
                      b !== null && !(b.expirationTime > M && Ke());
                    ) {
                      var ge = b.callback;
                      if (typeof ge == "function") {
                        ((b.callback = null), (D = b.priorityLevel));
                        var Se = ge(b.expirationTime <= M);
                        if (((M = l.unstable_now()), typeof Se == "function")) {
                          ((b.callback = Se), K(M), (Q = !0));
                          break t;
                        }
                        (b === u(y) && r(y), K(M));
                      } else r(y);
                      b = u(y);
                    }
                    if (b !== null) Q = !0;
                    else {
                      var E = u(g);
                      (E !== null && rt($, E.startTime - M), (Q = !1));
                    }
                  }
                  break e;
                } finally {
                  ((b = null), (D = P), (Y = !1));
                }
                Q = void 0;
              }
            } finally {
              Q ? Ge() : (te = !1);
            }
          }
        }
        var Ge;
        if (typeof V == "function")
          Ge = function () {
            V(lt);
          };
        else if (typeof MessageChannel < "u") {
          var gt = new MessageChannel(),
            Je = gt.port2;
          ((gt.port1.onmessage = lt),
            (Ge = function () {
              Je.postMessage(null);
            }));
        } else
          Ge = function () {
            X(lt, 0);
          };
        function rt(M, Q) {
          Z = X(function () {
            M(l.unstable_now());
          }, Q);
        }
        ((l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (l.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (re = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return D;
          }),
          (l.unstable_next = function (M) {
            switch (D) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = D;
            }
            var P = D;
            D = Q;
            try {
              return M();
            } finally {
              D = P;
            }
          }),
          (l.unstable_requestPaint = function () {
            w = !0;
          }),
          (l.unstable_runWithPriority = function (M, Q) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var P = D;
            D = M;
            try {
              return Q();
            } finally {
              D = P;
            }
          }),
          (l.unstable_scheduleCallback = function (M, Q, P) {
            var ge = l.unstable_now();
            switch (
              (typeof P == "object" && P !== null
                ? ((P = P.delay),
                  (P = typeof P == "number" && 0 < P ? ge + P : ge))
                : (P = ge),
              M)
            ) {
              case 1:
                var Se = -1;
                break;
              case 2:
                Se = 250;
                break;
              case 5:
                Se = 1073741823;
                break;
              case 4:
                Se = 1e4;
                break;
              default:
                Se = 5e3;
            }
            return (
              (Se = P + Se),
              (M = {
                id: v++,
                callback: Q,
                priorityLevel: M,
                startTime: P,
                expirationTime: Se,
                sortIndex: -1,
              }),
              P > ge
                ? ((M.sortIndex = P),
                  i(g, M),
                  u(y) === null &&
                    M === u(g) &&
                    (U ? (G(Z), (Z = -1)) : (U = !0), rt($, P - ge)))
                : ((M.sortIndex = Se),
                  i(y, M),
                  T || Y || ((T = !0), te || ((te = !0), Ge()))),
              M
            );
          }),
          (l.unstable_shouldYield = Ke),
          (l.unstable_wrapCallback = function (M) {
            var Q = D;
            return function () {
              var P = D;
              D = Q;
              try {
                return M.apply(this, arguments);
              } finally {
                D = P;
              }
            };
          }));
      })(so)),
    so
  );
}
var bp;
function cb() {
  return (bp || ((bp = 1), (ro.exports = sb())), ro.exports);
}
var co = { exports: {} },
  tt = {};
var Sp;
function ob() {
  if (Sp) return tt;
  Sp = 1;
  var l = _r();
  function i(y) {
    var g = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        g += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var r = {
      d: {
        f: u,
        r: function () {
          throw Error(i(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function f(y, g, v) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : "" + b,
      children: y,
      containerInfo: g,
      implementation: v,
    };
  }
  var d = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(y, g) {
    if (y === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (tt.createPortal = function (y, g) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(i(299));
      return f(y, g, null, v);
    }),
    (tt.flushSync = function (y) {
      var g = d.T,
        v = r.p;
      try {
        if (((d.T = null), (r.p = 2), y)) return y();
      } finally {
        ((d.T = g), (r.p = v), r.d.f());
      }
    }),
    (tt.preconnect = function (y, g) {
      typeof y == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        r.d.C(y, g));
    }),
    (tt.prefetchDNS = function (y) {
      typeof y == "string" && r.d.D(y);
    }),
    (tt.preinit = function (y, g) {
      if (typeof y == "string" && g && typeof g.as == "string") {
        var v = g.as,
          b = p(v, g.crossOrigin),
          D = typeof g.integrity == "string" ? g.integrity : void 0,
          Y = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        v === "style"
          ? r.d.S(y, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: b,
              integrity: D,
              fetchPriority: Y,
            })
          : v === "script" &&
            r.d.X(y, {
              crossOrigin: b,
              integrity: D,
              fetchPriority: Y,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (tt.preinitModule = function (y, g) {
      if (typeof y == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var v = p(g.as, g.crossOrigin);
            r.d.M(y, {
              crossOrigin: v,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && r.d.M(y);
    }),
    (tt.preload = function (y, g) {
      if (
        typeof y == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var v = g.as,
          b = p(v, g.crossOrigin);
        r.d.L(y, v, {
          crossOrigin: b,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (tt.preloadModule = function (y, g) {
      if (typeof y == "string")
        if (g) {
          var v = p(g.as, g.crossOrigin);
          r.d.m(y, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: v,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else r.d.m(y);
    }),
    (tt.requestFormReset = function (y) {
      r.d.r(y);
    }),
    (tt.unstable_batchedUpdates = function (y, g) {
      return y(g);
    }),
    (tt.useFormState = function (y, g, v) {
      return d.H.useFormState(y, g, v);
    }),
    (tt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (tt.version = "19.2.3"),
    tt
  );
}
var Ep;
function fb() {
  if (Ep) return co.exports;
  Ep = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return (l(), (co.exports = ob()), co.exports);
}
var _p;
function hb() {
  if (_p) return oi;
  _p = 1;
  var l = cb(),
    i = _r(),
    u = fb();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function f(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (f(e) !== e) throw Error(r(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = f(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var c = s.alternate;
      if (c === null) {
        if (((a = s.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (s.child === c.child) {
        for (c = s.child; c; ) {
          if (c === n) return (y(s), e);
          if (c === a) return (y(s), t);
          c = c.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== a.return) ((n = s), (a = c));
      else {
        for (var h = !1, m = s.child; m; ) {
          if (m === n) {
            ((h = !0), (n = s), (a = c));
            break;
          }
          if (m === a) {
            ((h = !0), (a = s), (n = c));
            break;
          }
          m = m.sibling;
        }
        if (!h) {
          for (m = c.child; m; ) {
            if (m === n) {
              ((h = !0), (n = c), (a = s));
              break;
            }
            if (m === a) {
              ((h = !0), (a = c), (n = s));
              break;
            }
            m = m.sibling;
          }
          if (!h) throw Error(r(189));
        }
      }
      if (n.alternate !== a) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? e : t;
  }
  function v(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = v(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign,
    D = Symbol.for("react.element"),
    Y = Symbol.for("react.transitional.element"),
    T = Symbol.for("react.portal"),
    U = Symbol.for("react.fragment"),
    w = Symbol.for("react.strict_mode"),
    X = Symbol.for("react.profiler"),
    G = Symbol.for("react.consumer"),
    V = Symbol.for("react.context"),
    K = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    te = Symbol.for("react.suspense_list"),
    Z = Symbol.for("react.memo"),
    re = Symbol.for("react.lazy"),
    Ce = Symbol.for("react.activity"),
    Ke = Symbol.for("react.memo_cache_sentinel"),
    lt = Symbol.iterator;
  function Ge(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (lt && e[lt]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var gt = Symbol.for("react.client.reference");
  function Je(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === gt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case U:
        return "Fragment";
      case X:
        return "Profiler";
      case w:
        return "StrictMode";
      case $:
        return "Suspense";
      case te:
        return "SuspenseList";
      case Ce:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case T:
          return "Portal";
        case V:
          return e.displayName || "Context";
        case G:
          return (e._context.displayName || "Context") + ".Consumer";
        case K:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Z:
          return (
            (t = e.displayName || null),
            t !== null ? t : Je(e.type) || "Memo"
          );
        case re:
          ((t = e._payload), (e = e._init));
          try {
            return Je(e(t));
          } catch {}
      }
    return null;
  }
  var rt = Array.isArray,
    M = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = { pending: !1, data: null, method: null, action: null },
    ge = [],
    Se = -1;
  function E(e) {
    return { current: e };
  }
  function H(e) {
    0 > Se || ((e.current = ge[Se]), (ge[Se] = null), Se--);
  }
  function k(e, t) {
    (Se++, (ge[Se] = e.current), (e.current = t));
  }
  var J = E(null),
    ne = E(null),
    se = E(null),
    be = E(null);
  function at(e, t) {
    switch ((k(se, t), k(ne, e), k(J, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? jm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = jm(t)), (e = Hm(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (H(J), k(J, e));
  }
  function Be() {
    (H(J), H(ne), H(se));
  }
  function ya(e) {
    e.memoizedState !== null && k(be, e);
    var t = J.current,
      n = Hm(t, e.type);
    t !== n && (k(ne, e), k(J, n));
  }
  function wi(e) {
    (ne.current === e && (H(J), H(ne)),
      be.current === e && (H(be), (ii._currentValue = P)));
  }
  var Yr, df;
  function el(e) {
    if (Yr === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((Yr = (t && t[1]) || ""),
          (df =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Yr +
      e +
      df
    );
  }
  var Vr = !1;
  function Xr(e, t) {
    if (!e || Vr) return "";
    Vr = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(q.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(q, []);
                } catch (z) {
                  var C = z;
                }
                Reflect.construct(e, [], q);
              } else {
                try {
                  q.call();
                } catch (z) {
                  C = z;
                }
                e.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                C = z;
              }
              (q = e()) &&
                typeof q.catch == "function" &&
                q.catch(function () {});
            }
          } catch (z) {
            if (z && C && typeof z.stack == "string") return [z.stack, C.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      s &&
        s.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = a.DetermineComponentFrameRoot(),
        h = c[0],
        m = c[1];
      if (h && m) {
        var S = h.split(`
`),
          O = m.split(`
`);
        for (
          s = a = 0;
          a < S.length && !S[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; s < O.length && !O[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (a === S.length || s === O.length)
          for (
            a = S.length - 1, s = O.length - 1;
            1 <= a && 0 <= s && S[a] !== O[s];
          )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (S[a] !== O[s]) {
            if (a !== 1 || s !== 1)
              do
                if ((a--, s--, 0 > s || S[a] !== O[s])) {
                  var B =
                    `
` + S[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      B.includes("<anonymous>") &&
                      (B = B.replace("<anonymous>", e.displayName)),
                    B
                  );
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      ((Vr = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : "") ? el(n) : "";
  }
  function Ug(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return el(e.type);
      case 16:
        return el("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? el("Suspense Fallback")
          : el("Suspense");
      case 19:
        return el("SuspenseList");
      case 0:
      case 15:
        return Xr(e.type, !1);
      case 11:
        return Xr(e.type.render, !1);
      case 1:
        return Xr(e.type, !0);
      case 31:
        return el("Activity");
      default:
        return "";
    }
  }
  function mf(e) {
    try {
      var t = "",
        n = null;
      do ((t += Ug(e, n)), (n = e), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Gr = Object.prototype.hasOwnProperty,
    Qr = l.unstable_scheduleCallback,
    kr = l.unstable_cancelCallback,
    Bg = l.unstable_shouldYield,
    Lg = l.unstable_requestPaint,
    vt = l.unstable_now,
    jg = l.unstable_getCurrentPriorityLevel,
    pf = l.unstable_ImmediatePriority,
    yf = l.unstable_UserBlockingPriority,
    xi = l.unstable_NormalPriority,
    Hg = l.unstable_LowPriority,
    gf = l.unstable_IdlePriority,
    qg = l.log,
    Yg = l.unstable_setDisableYieldValue,
    ga = null,
    bt = null;
  function Cn(e) {
    if (
      (typeof qg == "function" && Yg(e),
      bt && typeof bt.setStrictMode == "function")
    )
      try {
        bt.setStrictMode(ga, e);
      } catch {}
  }
  var St = Math.clz32 ? Math.clz32 : Gg,
    Vg = Math.log,
    Xg = Math.LN2;
  function Gg(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Vg(e) / Xg) | 0)) | 0);
  }
  var Ni = 256,
    zi = 262144,
    Di = 4194304;
  function tl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Mi(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var s = 0,
      c = e.suspendedLanes,
      h = e.pingedLanes;
    e = e.warmLanes;
    var m = a & 134217727;
    return (
      m !== 0
        ? ((a = m & ~c),
          a !== 0
            ? (s = tl(a))
            : ((h &= m),
              h !== 0
                ? (s = tl(h))
                : n || ((n = m & ~e), n !== 0 && (s = tl(n)))))
        : ((m = a & ~c),
          m !== 0
            ? (s = tl(m))
            : h !== 0
              ? (s = tl(h))
              : n || ((n = a & ~e), n !== 0 && (s = tl(n)))),
      s === 0
        ? 0
        : t !== 0 &&
            t !== s &&
            (t & c) === 0 &&
            ((c = s & -s),
            (n = t & -t),
            c >= n || (c === 32 && (n & 4194048) !== 0))
          ? t
          : s
    );
  }
  function va(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Qg(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function vf() {
    var e = Di;
    return ((Di <<= 1), (Di & 62914560) === 0 && (Di = 4194304), e);
  }
  function Zr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ba(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function kg(e, t, n, a, s, c) {
    var h = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var m = e.entanglements,
      S = e.expirationTimes,
      O = e.hiddenUpdates;
    for (n = h & ~n; 0 < n; ) {
      var B = 31 - St(n),
        q = 1 << B;
      ((m[B] = 0), (S[B] = -1));
      var C = O[B];
      if (C !== null)
        for (O[B] = null, B = 0; B < C.length; B++) {
          var z = C[B];
          z !== null && (z.lane &= -536870913);
        }
      n &= ~q;
    }
    (a !== 0 && bf(e, a, 0),
      c !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(h & ~t)));
  }
  function bf(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - St(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function Sf(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var a = 31 - St(n),
        s = 1 << a;
      ((s & t) | (e[a] & t) && (e[a] |= t), (n &= ~s));
    }
  }
  function Ef(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : Kr(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function Kr(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Jr(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function _f() {
    var e = Q.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : rp(e.type));
  }
  function Tf(e, t) {
    var n = Q.p;
    try {
      return ((Q.p = e), t());
    } finally {
      Q.p = n;
    }
  }
  var wn = Math.random().toString(36).slice(2),
    Fe = "__reactFiber$" + wn,
    st = "__reactProps$" + wn,
    Rl = "__reactContainer$" + wn,
    Fr = "__reactEvents$" + wn,
    Zg = "__reactListeners$" + wn,
    Kg = "__reactHandles$" + wn,
    Rf = "__reactResources$" + wn,
    Sa = "__reactMarker$" + wn;
  function $r(e) {
    (delete e[Fe], delete e[st], delete e[Fr], delete e[Zg], delete e[Kg]);
  }
  function Al(e) {
    var t = e[Fe];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Rl] || n[Fe])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = km(e); e !== null; ) {
            if ((n = e[Fe])) return n;
            e = km(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Ol(e) {
    if ((e = e[Fe] || e[Rl])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Ea(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Cl(e) {
    var t = e[Rf];
    return (
      t ||
        (t = e[Rf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function ke(e) {
    e[Sa] = !0;
  }
  var Af = new Set(),
    Of = {};
  function nl(e, t) {
    (wl(e, t), wl(e + "Capture", t));
  }
  function wl(e, t) {
    for (Of[e] = t, e = 0; e < t.length; e++) Af.add(t[e]);
  }
  var Jg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Cf = {},
    wf = {};
  function Fg(e) {
    return Gr.call(wf, e)
      ? !0
      : Gr.call(Cf, e)
        ? !1
        : Jg.test(e)
          ? (wf[e] = !0)
          : ((Cf[e] = !0), !1);
  }
  function Ui(e, t, n) {
    if (Fg(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Bi(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function nn(e, t, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + a);
    }
  }
  function xt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function xf(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function $g(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var s = a.get,
        c = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (h) {
            ((n = "" + h), c.call(this, h));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (h) {
            n = "" + h;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Wr(e) {
    if (!e._valueTracker) {
      var t = xf(e) ? "checked" : "value";
      e._valueTracker = $g(e, t, "" + e[t]);
    }
  }
  function Nf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      a = "";
    return (
      e && (a = xf(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Li(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Wg = /[\n"\\]/g;
  function Nt(e) {
    return e.replace(Wg, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Pr(e, t, n, a, s, c, h, m) {
    ((e.name = ""),
      h != null &&
      typeof h != "function" &&
      typeof h != "symbol" &&
      typeof h != "boolean"
        ? (e.type = h)
        : e.removeAttribute("type"),
      t != null
        ? h === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + xt(t))
          : e.value !== "" + xt(t) && (e.value = "" + xt(t))
        : (h !== "submit" && h !== "reset") || e.removeAttribute("value"),
      t != null
        ? Ir(e, h, xt(t))
        : n != null
          ? Ir(e, h, xt(n))
          : a != null && e.removeAttribute("value"),
      s == null && c != null && (e.defaultChecked = !!c),
      s != null &&
        (e.checked = s && typeof s != "function" && typeof s != "symbol"),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (e.name = "" + xt(m))
        : e.removeAttribute("name"));
  }
  function zf(e, t, n, a, s, c, h, m) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (e.type = c),
      t != null || n != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || t != null)) {
        Wr(e);
        return;
      }
      ((n = n != null ? "" + xt(n) : ""),
        (t = t != null ? "" + xt(t) : n),
        m || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? s),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = m ? e.checked : !!a),
      (e.defaultChecked = !!a),
      h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (e.name = h),
      Wr(e));
  }
  function Ir(e, t, n) {
    (t === "number" && Li(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function xl(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        ((s = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== s && (e[n].selected = s),
          s && a && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + xt(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          ((e[s].selected = !0), a && (e[s].defaultSelected = !0));
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Df(e, t, n) {
    if (
      t != null &&
      ((t = "" + xt(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + xt(n) : "";
  }
  function Mf(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(r(92));
        if (rt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ""), (t = n));
    }
    ((n = xt(t)),
      (e.defaultValue = n),
      (a = e.textContent),
      a === n && a !== "" && a !== null && (e.value = a),
      Wr(e));
  }
  function Nl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Pg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Uf(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || Pg.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function Bf(e, t, n) {
    if (t != null && typeof t != "object") throw Error(r(62));
    if (((e = e.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""));
      for (var s in t)
        ((a = t[s]), t.hasOwnProperty(s) && n[s] !== a && Uf(e, s, a));
    } else for (var c in t) t.hasOwnProperty(c) && Uf(e, c, t[c]);
  }
  function es(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ig = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    e0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ji(e) {
    return e0.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function ln() {}
  var ts = null;
  function ns(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var zl = null,
    Dl = null;
  function Lf(e) {
    var t = Ol(e);
    if (t && (e = t.stateNode)) {
      var n = e[st] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Pr(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Nt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var s = a[st] || null;
                if (!s) throw Error(r(90));
                Pr(
                  a,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name,
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((a = n[t]), a.form === e.form && Nf(a));
          }
          break e;
        case "textarea":
          Df(e, n.value, n.defaultValue);
          break e;
        case "select":
          ((t = n.value), t != null && xl(e, !!n.multiple, t, !1));
      }
    }
  }
  var ls = !1;
  function jf(e, t, n) {
    if (ls) return e(t, n);
    ls = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((ls = !1),
        (zl !== null || Dl !== null) &&
          (Ru(), zl && ((t = zl), (e = Dl), (Dl = zl = null), Lf(t), e)))
      )
        for (t = 0; t < e.length; t++) Lf(e[t]);
    }
  }
  function _a(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[st] || null;
    if (a === null) return null;
    n = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(r(231, t, typeof n));
    return n;
  }
  var an = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    as = !1;
  if (an)
    try {
      var Ta = {};
      (Object.defineProperty(Ta, "passive", {
        get: function () {
          as = !0;
        },
      }),
        window.addEventListener("test", Ta, Ta),
        window.removeEventListener("test", Ta, Ta));
    } catch {
      as = !1;
    }
  var xn = null,
    is = null,
    Hi = null;
  function Hf() {
    if (Hi) return Hi;
    var e,
      t = is,
      n = t.length,
      a,
      s = "value" in xn ? xn.value : xn.textContent,
      c = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++);
    var h = n - e;
    for (a = 1; a <= h && t[n - a] === s[c - a]; a++);
    return (Hi = s.slice(e, 1 < a ? 1 - a : void 0));
  }
  function qi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Yi() {
    return !0;
  }
  function qf() {
    return !1;
  }
  function ct(e) {
    function t(n, a, s, c, h) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = a),
        (this.nativeEvent = c),
        (this.target = h),
        (this.currentTarget = null));
      for (var m in e)
        e.hasOwnProperty(m) && ((n = e[m]), (this[m] = n ? n(c) : c[m]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Yi
          : qf),
        (this.isPropagationStopped = qf),
        this
      );
    }
    return (
      b(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Yi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Yi));
        },
        persist: function () {},
        isPersistent: Yi,
      }),
      t
    );
  }
  var ll = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Vi = ct(ll),
    Ra = b({}, ll, { view: 0, detail: 0 }),
    t0 = ct(Ra),
    us,
    rs,
    Aa,
    Xi = b({}, Ra, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: cs,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Aa &&
              (Aa && e.type === "mousemove"
                ? ((us = e.screenX - Aa.screenX), (rs = e.screenY - Aa.screenY))
                : (rs = us = 0),
              (Aa = e)),
            us);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : rs;
      },
    }),
    Yf = ct(Xi),
    n0 = b({}, Xi, { dataTransfer: 0 }),
    l0 = ct(n0),
    a0 = b({}, Ra, { relatedTarget: 0 }),
    ss = ct(a0),
    i0 = b({}, ll, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    u0 = ct(i0),
    r0 = b({}, ll, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    s0 = ct(r0),
    c0 = b({}, ll, { data: 0 }),
    Vf = ct(c0),
    o0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    f0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    h0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function d0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = h0[e])
        ? !!t[e]
        : !1;
  }
  function cs() {
    return d0;
  }
  var m0 = b({}, Ra, {
      key: function (e) {
        if (e.key) {
          var t = o0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = qi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? f0[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: cs,
      charCode: function (e) {
        return e.type === "keypress" ? qi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? qi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    p0 = ct(m0),
    y0 = b({}, Xi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Xf = ct(y0),
    g0 = b({}, Ra, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: cs,
    }),
    v0 = ct(g0),
    b0 = b({}, ll, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    S0 = ct(b0),
    E0 = b({}, Xi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    _0 = ct(E0),
    T0 = b({}, ll, { newState: 0, oldState: 0 }),
    R0 = ct(T0),
    A0 = [9, 13, 27, 32],
    os = an && "CompositionEvent" in window,
    Oa = null;
  an && "documentMode" in document && (Oa = document.documentMode);
  var O0 = an && "TextEvent" in window && !Oa,
    Gf = an && (!os || (Oa && 8 < Oa && 11 >= Oa)),
    Qf = " ",
    kf = !1;
  function Zf(e, t) {
    switch (e) {
      case "keyup":
        return A0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Kf(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Ml = !1;
  function C0(e, t) {
    switch (e) {
      case "compositionend":
        return Kf(t);
      case "keypress":
        return t.which !== 32 ? null : ((kf = !0), Qf);
      case "textInput":
        return ((e = t.data), e === Qf && kf ? null : e);
      default:
        return null;
    }
  }
  function w0(e, t) {
    if (Ml)
      return e === "compositionend" || (!os && Zf(e, t))
        ? ((e = Hf()), (Hi = is = xn = null), (Ml = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Gf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var x0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Jf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!x0[e.type] : t === "textarea";
  }
  function Ff(e, t, n, a) {
    (zl ? (Dl ? Dl.push(a) : (Dl = [a])) : (zl = a),
      (t = zu(t, "onChange")),
      0 < t.length &&
        ((n = new Vi("onChange", "change", null, n, a)),
        e.push({ event: n, listeners: t })));
  }
  var Ca = null,
    wa = null;
  function N0(e) {
    zm(e, 0);
  }
  function Gi(e) {
    var t = Ea(e);
    if (Nf(t)) return e;
  }
  function $f(e, t) {
    if (e === "change") return t;
  }
  var Wf = !1;
  if (an) {
    var fs;
    if (an) {
      var hs = "oninput" in document;
      if (!hs) {
        var Pf = document.createElement("div");
        (Pf.setAttribute("oninput", "return;"),
          (hs = typeof Pf.oninput == "function"));
      }
      fs = hs;
    } else fs = !1;
    Wf = fs && (!document.documentMode || 9 < document.documentMode);
  }
  function If() {
    Ca && (Ca.detachEvent("onpropertychange", eh), (wa = Ca = null));
  }
  function eh(e) {
    if (e.propertyName === "value" && Gi(wa)) {
      var t = [];
      (Ff(t, wa, e, ns(e)), jf(N0, t));
    }
  }
  function z0(e, t, n) {
    e === "focusin"
      ? (If(), (Ca = t), (wa = n), Ca.attachEvent("onpropertychange", eh))
      : e === "focusout" && If();
  }
  function D0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Gi(wa);
  }
  function M0(e, t) {
    if (e === "click") return Gi(t);
  }
  function U0(e, t) {
    if (e === "input" || e === "change") return Gi(t);
  }
  function B0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Et = typeof Object.is == "function" ? Object.is : B0;
  function xa(e, t) {
    if (Et(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
      if (!Gr.call(t, s) || !Et(e[s], t[s])) return !1;
    }
    return !0;
  }
  function th(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function nh(e, t) {
    var n = th(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = e + n.textContent.length), e <= t && a >= t))
          return { node: n, offset: t - e };
        e = a;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = th(n);
    }
  }
  function lh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? lh(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ah(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Li(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Li(e.document);
    }
    return t;
  }
  function ds(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var L0 = an && "documentMode" in document && 11 >= document.documentMode,
    Ul = null,
    ms = null,
    Na = null,
    ps = !1;
  function ih(e, t, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ps ||
      Ul == null ||
      Ul !== Li(a) ||
      ((a = Ul),
      "selectionStart" in a && ds(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Na && xa(Na, a)) ||
        ((Na = a),
        (a = zu(ms, "onSelect")),
        0 < a.length &&
          ((t = new Vi("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = Ul))));
  }
  function al(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Bl = {
      animationend: al("Animation", "AnimationEnd"),
      animationiteration: al("Animation", "AnimationIteration"),
      animationstart: al("Animation", "AnimationStart"),
      transitionrun: al("Transition", "TransitionRun"),
      transitionstart: al("Transition", "TransitionStart"),
      transitioncancel: al("Transition", "TransitionCancel"),
      transitionend: al("Transition", "TransitionEnd"),
    },
    ys = {},
    uh = {};
  an &&
    ((uh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Bl.animationend.animation,
      delete Bl.animationiteration.animation,
      delete Bl.animationstart.animation),
    "TransitionEvent" in window || delete Bl.transitionend.transition);
  function il(e) {
    if (ys[e]) return ys[e];
    if (!Bl[e]) return e;
    var t = Bl[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in uh) return (ys[e] = t[n]);
    return e;
  }
  var rh = il("animationend"),
    sh = il("animationiteration"),
    ch = il("animationstart"),
    j0 = il("transitionrun"),
    H0 = il("transitionstart"),
    q0 = il("transitioncancel"),
    oh = il("transitionend"),
    fh = new Map(),
    gs =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  gs.push("scrollEnd");
  function Vt(e, t) {
    (fh.set(e, t), nl(t, [e]));
  }
  var Qi =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    zt = [],
    Ll = 0,
    vs = 0;
  function ki() {
    for (var e = Ll, t = (vs = Ll = 0); t < e; ) {
      var n = zt[t];
      zt[t++] = null;
      var a = zt[t];
      zt[t++] = null;
      var s = zt[t];
      zt[t++] = null;
      var c = zt[t];
      if (((zt[t++] = null), a !== null && s !== null)) {
        var h = a.pending;
        (h === null ? (s.next = s) : ((s.next = h.next), (h.next = s)),
          (a.pending = s));
      }
      c !== 0 && hh(n, s, c);
    }
  }
  function Zi(e, t, n, a) {
    ((zt[Ll++] = e),
      (zt[Ll++] = t),
      (zt[Ll++] = n),
      (zt[Ll++] = a),
      (vs |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function bs(e, t, n, a) {
    return (Zi(e, t, n, a), Ki(e));
  }
  function ul(e, t) {
    return (Zi(e, null, null, t), Ki(e));
  }
  function hh(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, c = e.return; c !== null; )
      ((c.childLanes |= n),
        (a = c.alternate),
        a !== null && (a.childLanes |= n),
        c.tag === 22 &&
          ((e = c.stateNode), e === null || e._visibility & 1 || (s = !0)),
        (e = c),
        (c = c.return));
    return e.tag === 3
      ? ((c = e.stateNode),
        s &&
          t !== null &&
          ((s = 31 - St(n)),
          (e = c.hiddenUpdates),
          (a = e[s]),
          a === null ? (e[s] = [t]) : a.push(t),
          (t.lane = n | 536870912)),
        c)
      : null;
  }
  function Ki(e) {
    if (50 < Pa) throw ((Pa = 0), (wc = null), Error(r(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var jl = {};
  function Y0(e, t, n, a) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function _t(e, t, n, a) {
    return new Y0(e, t, n, a);
  }
  function Ss(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function un(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = _t(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function dh(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Ji(e, t, n, a, s, c) {
    var h = 0;
    if (((a = e), typeof e == "function")) Ss(e) && (h = 1);
    else if (typeof e == "string")
      h = kv(e, n, J.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case Ce:
          return (
            (e = _t(31, n, t, s)),
            (e.elementType = Ce),
            (e.lanes = c),
            e
          );
        case U:
          return rl(n.children, s, c, t);
        case w:
          ((h = 8), (s |= 24));
          break;
        case X:
          return (
            (e = _t(12, n, t, s | 2)),
            (e.elementType = X),
            (e.lanes = c),
            e
          );
        case $:
          return ((e = _t(13, n, t, s)), (e.elementType = $), (e.lanes = c), e);
        case te:
          return (
            (e = _t(19, n, t, s)),
            (e.elementType = te),
            (e.lanes = c),
            e
          );
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case V:
                h = 10;
                break e;
              case G:
                h = 9;
                break e;
              case K:
                h = 11;
                break e;
              case Z:
                h = 14;
                break e;
              case re:
                ((h = 16), (a = null));
                break e;
            }
          ((h = 29),
            (n = Error(r(130, e === null ? "null" : typeof e, ""))),
            (a = null));
      }
    return (
      (t = _t(h, n, t, s)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = c),
      t
    );
  }
  function rl(e, t, n, a) {
    return ((e = _t(7, e, a, t)), (e.lanes = n), e);
  }
  function Es(e, t, n) {
    return ((e = _t(6, e, null, t)), (e.lanes = n), e);
  }
  function mh(e) {
    var t = _t(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function _s(e, t, n) {
    return (
      (t = _t(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var ph = new WeakMap();
  function Dt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = ph.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: mf(t) }), ph.set(e, t), t);
    }
    return { value: e, source: t, stack: mf(t) };
  }
  var Hl = [],
    ql = 0,
    Fi = null,
    za = 0,
    Mt = [],
    Ut = 0,
    Nn = null,
    Ft = 1,
    $t = "";
  function rn(e, t) {
    ((Hl[ql++] = za), (Hl[ql++] = Fi), (Fi = e), (za = t));
  }
  function yh(e, t, n) {
    ((Mt[Ut++] = Ft), (Mt[Ut++] = $t), (Mt[Ut++] = Nn), (Nn = e));
    var a = Ft;
    e = $t;
    var s = 32 - St(a) - 1;
    ((a &= ~(1 << s)), (n += 1));
    var c = 32 - St(t) + s;
    if (30 < c) {
      var h = s - (s % 5);
      ((c = (a & ((1 << h) - 1)).toString(32)),
        (a >>= h),
        (s -= h),
        (Ft = (1 << (32 - St(t) + s)) | (n << s) | a),
        ($t = c + e));
    } else ((Ft = (1 << c) | (n << s) | a), ($t = e));
  }
  function Ts(e) {
    e.return !== null && (rn(e, 1), yh(e, 1, 0));
  }
  function Rs(e) {
    for (; e === Fi; )
      ((Fi = Hl[--ql]), (Hl[ql] = null), (za = Hl[--ql]), (Hl[ql] = null));
    for (; e === Nn; )
      ((Nn = Mt[--Ut]),
        (Mt[Ut] = null),
        ($t = Mt[--Ut]),
        (Mt[Ut] = null),
        (Ft = Mt[--Ut]),
        (Mt[Ut] = null));
  }
  function gh(e, t) {
    ((Mt[Ut++] = Ft),
      (Mt[Ut++] = $t),
      (Mt[Ut++] = Nn),
      (Ft = t.id),
      ($t = t.overflow),
      (Nn = e));
  }
  var $e = null,
    we = null,
    de = !1,
    zn = null,
    Bt = !1,
    As = Error(r(519));
  function Dn(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Da(Dt(t, e)), As);
  }
  function vh(e) {
    var t = e.stateNode,
      n = e.type,
      a = e.memoizedProps;
    switch (((t[Fe] = e), (t[st] = a), n)) {
      case "dialog":
        (oe("cancel", t), oe("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        oe("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ei.length; n++) oe(ei[n], t);
        break;
      case "source":
        oe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (oe("error", t), oe("load", t));
        break;
      case "details":
        oe("toggle", t);
        break;
      case "input":
        (oe("invalid", t),
          zf(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        oe("invalid", t);
        break;
      case "textarea":
        (oe("invalid", t), Mf(t, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      Bm(t.textContent, n)
        ? (a.popover != null && (oe("beforetoggle", t), oe("toggle", t)),
          a.onScroll != null && oe("scroll", t),
          a.onScrollEnd != null && oe("scrollend", t),
          a.onClick != null && (t.onclick = ln),
          (t = !0))
        : (t = !1),
      t || Dn(e, !0));
  }
  function bh(e) {
    for ($e = e.return; $e; )
      switch ($e.tag) {
        case 5:
        case 31:
        case 13:
          Bt = !1;
          return;
        case 27:
        case 3:
          Bt = !0;
          return;
        default:
          $e = $e.return;
      }
  }
  function Yl(e) {
    if (e !== $e) return !1;
    if (!de) return (bh(e), (de = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || Gc(e.type, e.memoizedProps))),
        (n = !n)),
      n && we && Dn(e),
      bh(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      we = Qm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      we = Qm(e);
    } else
      t === 27
        ? ((t = we), Zn(e.type) ? ((e = Jc), (Jc = null), (we = e)) : (we = t))
        : (we = $e ? jt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function sl() {
    ((we = $e = null), (de = !1));
  }
  function Os() {
    var e = zn;
    return (
      e !== null &&
        (dt === null ? (dt = e) : dt.push.apply(dt, e), (zn = null)),
      e
    );
  }
  function Da(e) {
    zn === null ? (zn = [e]) : zn.push(e);
  }
  var Cs = E(null),
    cl = null,
    sn = null;
  function Mn(e, t, n) {
    (k(Cs, t._currentValue), (t._currentValue = n));
  }
  function cn(e) {
    ((e._currentValue = Cs.current), H(Cs));
  }
  function ws(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function xs(e, t, n, a) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var c = s.dependencies;
      if (c !== null) {
        var h = s.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var m = c;
          c = s;
          for (var S = 0; S < t.length; S++)
            if (m.context === t[S]) {
              ((c.lanes |= n),
                (m = c.alternate),
                m !== null && (m.lanes |= n),
                ws(c.return, n, e),
                a || (h = null));
              break e;
            }
          c = m.next;
        }
      } else if (s.tag === 18) {
        if (((h = s.return), h === null)) throw Error(r(341));
        ((h.lanes |= n),
          (c = h.alternate),
          c !== null && (c.lanes |= n),
          ws(h, n, e),
          (h = null));
      } else h = s.child;
      if (h !== null) h.return = s;
      else
        for (h = s; h !== null; ) {
          if (h === e) {
            h = null;
            break;
          }
          if (((s = h.sibling), s !== null)) {
            ((s.return = h.return), (h = s));
            break;
          }
          h = h.return;
        }
      s = h;
    }
  }
  function Vl(e, t, n, a) {
    e = null;
    for (var s = t, c = !1; s !== null; ) {
      if (!c) {
        if ((s.flags & 524288) !== 0) c = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var h = s.alternate;
        if (h === null) throw Error(r(387));
        if (((h = h.memoizedProps), h !== null)) {
          var m = s.type;
          Et(s.pendingProps.value, h.value) ||
            (e !== null ? e.push(m) : (e = [m]));
        }
      } else if (s === be.current) {
        if (((h = s.alternate), h === null)) throw Error(r(387));
        h.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (e !== null ? e.push(ii) : (e = [ii]));
      }
      s = s.return;
    }
    (e !== null && xs(t, e, n, a), (t.flags |= 262144));
  }
  function $i(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Et(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ol(e) {
    ((cl = e),
      (sn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function We(e) {
    return Sh(cl, e);
  }
  function Wi(e, t) {
    return (cl === null && ol(e), Sh(e, t));
  }
  function Sh(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), sn === null)) {
      if (e === null) throw Error(r(308));
      ((sn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else sn = sn.next = t;
    return n;
  }
  var V0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    X0 = l.unstable_scheduleCallback,
    G0 = l.unstable_NormalPriority,
    He = {
      $$typeof: V,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ns() {
    return { controller: new V0(), data: new Map(), refCount: 0 };
  }
  function Ma(e) {
    (e.refCount--,
      e.refCount === 0 &&
        X0(G0, function () {
          e.controller.abort();
        }));
  }
  var Ua = null,
    zs = 0,
    Xl = 0,
    Gl = null;
  function Q0(e, t) {
    if (Ua === null) {
      var n = (Ua = []);
      ((zs = 0),
        (Xl = Uc()),
        (Gl = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (zs++, t.then(Eh, Eh), t);
  }
  function Eh() {
    if (--zs === 0 && Ua !== null) {
      Gl !== null && (Gl.status = "fulfilled");
      var e = Ua;
      ((Ua = null), (Xl = 0), (Gl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function k0(e, t) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var s = 0; s < n.length; s++) (0, n[s])(t);
        },
        function (s) {
          for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        },
      ),
      a
    );
  }
  var _h = M.S;
  M.S = function (e, t) {
    ((im = vt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Q0(e, t),
      _h !== null && _h(e, t));
  };
  var fl = E(null);
  function Ds() {
    var e = fl.current;
    return e !== null ? e : Oe.pooledCache;
  }
  function Pi(e, t) {
    t === null ? k(fl, fl.current) : k(fl, t.pool);
  }
  function Th() {
    var e = Ds();
    return e === null ? null : { parent: He._currentValue, pool: e };
  }
  var Ql = Error(r(460)),
    Ms = Error(r(474)),
    Ii = Error(r(542)),
    eu = { then: function () {} };
  function Rh(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Ah(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(ln, ln), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Ch(e), e);
      default:
        if (typeof t.status == "string") t.then(ln, ln);
        else {
          if (((e = Oe), e !== null && 100 < e.shellSuspendCounter))
            throw Error(r(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var s = t;
                  ((s.status = "fulfilled"), (s.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var s = t;
                  ((s.status = "rejected"), (s.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Ch(e), e);
        }
        throw ((dl = t), Ql);
    }
  }
  function hl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((dl = n), Ql)
        : n;
    }
  }
  var dl = null;
  function Oh() {
    if (dl === null) throw Error(r(459));
    var e = dl;
    return ((dl = null), e);
  }
  function Ch(e) {
    if (e === Ql || e === Ii) throw Error(r(483));
  }
  var kl = null,
    Ba = 0;
  function tu(e) {
    var t = Ba;
    return ((Ba += 1), kl === null && (kl = []), Ah(kl, e, t));
  }
  function La(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function nu(e, t) {
    throw t.$$typeof === D
      ? Error(r(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function wh(e) {
    function t(R, _) {
      if (e) {
        var A = R.deletions;
        A === null ? ((R.deletions = [_]), (R.flags |= 16)) : A.push(_);
      }
    }
    function n(R, _) {
      if (!e) return null;
      for (; _ !== null; ) (t(R, _), (_ = _.sibling));
      return null;
    }
    function a(R) {
      for (var _ = new Map(); R !== null; )
        (R.key !== null ? _.set(R.key, R) : _.set(R.index, R), (R = R.sibling));
      return _;
    }
    function s(R, _) {
      return ((R = un(R, _)), (R.index = 0), (R.sibling = null), R);
    }
    function c(R, _, A) {
      return (
        (R.index = A),
        e
          ? ((A = R.alternate),
            A !== null
              ? ((A = A.index), A < _ ? ((R.flags |= 67108866), _) : A)
              : ((R.flags |= 67108866), _))
          : ((R.flags |= 1048576), _)
      );
    }
    function h(R) {
      return (e && R.alternate === null && (R.flags |= 67108866), R);
    }
    function m(R, _, A, j) {
      return _ === null || _.tag !== 6
        ? ((_ = Es(A, R.mode, j)), (_.return = R), _)
        : ((_ = s(_, A)), (_.return = R), _);
    }
    function S(R, _, A, j) {
      var I = A.type;
      return I === U
        ? B(R, _, A.props.children, j, A.key)
        : _ !== null &&
            (_.elementType === I ||
              (typeof I == "object" &&
                I !== null &&
                I.$$typeof === re &&
                hl(I) === _.type))
          ? ((_ = s(_, A.props)), La(_, A), (_.return = R), _)
          : ((_ = Ji(A.type, A.key, A.props, null, R.mode, j)),
            La(_, A),
            (_.return = R),
            _);
    }
    function O(R, _, A, j) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== A.containerInfo ||
        _.stateNode.implementation !== A.implementation
        ? ((_ = _s(A, R.mode, j)), (_.return = R), _)
        : ((_ = s(_, A.children || [])), (_.return = R), _);
    }
    function B(R, _, A, j, I) {
      return _ === null || _.tag !== 7
        ? ((_ = rl(A, R.mode, j, I)), (_.return = R), _)
        : ((_ = s(_, A)), (_.return = R), _);
    }
    function q(R, _, A) {
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return ((_ = Es("" + _, R.mode, A)), (_.return = R), _);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Y:
            return (
              (A = Ji(_.type, _.key, _.props, null, R.mode, A)),
              La(A, _),
              (A.return = R),
              A
            );
          case T:
            return ((_ = _s(_, R.mode, A)), (_.return = R), _);
          case re:
            return ((_ = hl(_)), q(R, _, A));
        }
        if (rt(_) || Ge(_))
          return ((_ = rl(_, R.mode, A, null)), (_.return = R), _);
        if (typeof _.then == "function") return q(R, tu(_), A);
        if (_.$$typeof === V) return q(R, Wi(R, _), A);
        nu(R, _);
      }
      return null;
    }
    function C(R, _, A, j) {
      var I = _ !== null ? _.key : null;
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return I !== null ? null : m(R, _, "" + A, j);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case Y:
            return A.key === I ? S(R, _, A, j) : null;
          case T:
            return A.key === I ? O(R, _, A, j) : null;
          case re:
            return ((A = hl(A)), C(R, _, A, j));
        }
        if (rt(A) || Ge(A)) return I !== null ? null : B(R, _, A, j, null);
        if (typeof A.then == "function") return C(R, _, tu(A), j);
        if (A.$$typeof === V) return C(R, _, Wi(R, A), j);
        nu(R, A);
      }
      return null;
    }
    function z(R, _, A, j, I) {
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return ((R = R.get(A) || null), m(_, R, "" + j, I));
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case Y:
            return (
              (R = R.get(j.key === null ? A : j.key) || null),
              S(_, R, j, I)
            );
          case T:
            return (
              (R = R.get(j.key === null ? A : j.key) || null),
              O(_, R, j, I)
            );
          case re:
            return ((j = hl(j)), z(R, _, A, j, I));
        }
        if (rt(j) || Ge(j))
          return ((R = R.get(A) || null), B(_, R, j, I, null));
        if (typeof j.then == "function") return z(R, _, A, tu(j), I);
        if (j.$$typeof === V) return z(R, _, A, Wi(_, j), I);
        nu(_, j);
      }
      return null;
    }
    function F(R, _, A, j) {
      for (
        var I = null, pe = null, W = _, ue = (_ = 0), he = null;
        W !== null && ue < A.length;
        ue++
      ) {
        W.index > ue ? ((he = W), (W = null)) : (he = W.sibling);
        var ye = C(R, W, A[ue], j);
        if (ye === null) {
          W === null && (W = he);
          break;
        }
        (e && W && ye.alternate === null && t(R, W),
          (_ = c(ye, _, ue)),
          pe === null ? (I = ye) : (pe.sibling = ye),
          (pe = ye),
          (W = he));
      }
      if (ue === A.length) return (n(R, W), de && rn(R, ue), I);
      if (W === null) {
        for (; ue < A.length; ue++)
          ((W = q(R, A[ue], j)),
            W !== null &&
              ((_ = c(W, _, ue)),
              pe === null ? (I = W) : (pe.sibling = W),
              (pe = W)));
        return (de && rn(R, ue), I);
      }
      for (W = a(W); ue < A.length; ue++)
        ((he = z(W, R, ue, A[ue], j)),
          he !== null &&
            (e &&
              he.alternate !== null &&
              W.delete(he.key === null ? ue : he.key),
            (_ = c(he, _, ue)),
            pe === null ? (I = he) : (pe.sibling = he),
            (pe = he)));
      return (
        e &&
          W.forEach(function (Wn) {
            return t(R, Wn);
          }),
        de && rn(R, ue),
        I
      );
    }
    function ee(R, _, A, j) {
      if (A == null) throw Error(r(151));
      for (
        var I = null, pe = null, W = _, ue = (_ = 0), he = null, ye = A.next();
        W !== null && !ye.done;
        ue++, ye = A.next()
      ) {
        W.index > ue ? ((he = W), (W = null)) : (he = W.sibling);
        var Wn = C(R, W, ye.value, j);
        if (Wn === null) {
          W === null && (W = he);
          break;
        }
        (e && W && Wn.alternate === null && t(R, W),
          (_ = c(Wn, _, ue)),
          pe === null ? (I = Wn) : (pe.sibling = Wn),
          (pe = Wn),
          (W = he));
      }
      if (ye.done) return (n(R, W), de && rn(R, ue), I);
      if (W === null) {
        for (; !ye.done; ue++, ye = A.next())
          ((ye = q(R, ye.value, j)),
            ye !== null &&
              ((_ = c(ye, _, ue)),
              pe === null ? (I = ye) : (pe.sibling = ye),
              (pe = ye)));
        return (de && rn(R, ue), I);
      }
      for (W = a(W); !ye.done; ue++, ye = A.next())
        ((ye = z(W, R, ue, ye.value, j)),
          ye !== null &&
            (e &&
              ye.alternate !== null &&
              W.delete(ye.key === null ? ue : ye.key),
            (_ = c(ye, _, ue)),
            pe === null ? (I = ye) : (pe.sibling = ye),
            (pe = ye)));
      return (
        e &&
          W.forEach(function (nb) {
            return t(R, nb);
          }),
        de && rn(R, ue),
        I
      );
    }
    function Ae(R, _, A, j) {
      if (
        (typeof A == "object" &&
          A !== null &&
          A.type === U &&
          A.key === null &&
          (A = A.props.children),
        typeof A == "object" && A !== null)
      ) {
        switch (A.$$typeof) {
          case Y:
            e: {
              for (var I = A.key; _ !== null; ) {
                if (_.key === I) {
                  if (((I = A.type), I === U)) {
                    if (_.tag === 7) {
                      (n(R, _.sibling),
                        (j = s(_, A.props.children)),
                        (j.return = R),
                        (R = j));
                      break e;
                    }
                  } else if (
                    _.elementType === I ||
                    (typeof I == "object" &&
                      I !== null &&
                      I.$$typeof === re &&
                      hl(I) === _.type)
                  ) {
                    (n(R, _.sibling),
                      (j = s(_, A.props)),
                      La(j, A),
                      (j.return = R),
                      (R = j));
                    break e;
                  }
                  n(R, _);
                  break;
                } else t(R, _);
                _ = _.sibling;
              }
              A.type === U
                ? ((j = rl(A.props.children, R.mode, j, A.key)),
                  (j.return = R),
                  (R = j))
                : ((j = Ji(A.type, A.key, A.props, null, R.mode, j)),
                  La(j, A),
                  (j.return = R),
                  (R = j));
            }
            return h(R);
          case T:
            e: {
              for (I = A.key; _ !== null; ) {
                if (_.key === I)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === A.containerInfo &&
                    _.stateNode.implementation === A.implementation
                  ) {
                    (n(R, _.sibling),
                      (j = s(_, A.children || [])),
                      (j.return = R),
                      (R = j));
                    break e;
                  } else {
                    n(R, _);
                    break;
                  }
                else t(R, _);
                _ = _.sibling;
              }
              ((j = _s(A, R.mode, j)), (j.return = R), (R = j));
            }
            return h(R);
          case re:
            return ((A = hl(A)), Ae(R, _, A, j));
        }
        if (rt(A)) return F(R, _, A, j);
        if (Ge(A)) {
          if (((I = Ge(A)), typeof I != "function")) throw Error(r(150));
          return ((A = I.call(A)), ee(R, _, A, j));
        }
        if (typeof A.then == "function") return Ae(R, _, tu(A), j);
        if (A.$$typeof === V) return Ae(R, _, Wi(R, A), j);
        nu(R, A);
      }
      return (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
        ? ((A = "" + A),
          _ !== null && _.tag === 6
            ? (n(R, _.sibling), (j = s(_, A)), (j.return = R), (R = j))
            : (n(R, _), (j = Es(A, R.mode, j)), (j.return = R), (R = j)),
          h(R))
        : n(R, _);
    }
    return function (R, _, A, j) {
      try {
        Ba = 0;
        var I = Ae(R, _, A, j);
        return ((kl = null), I);
      } catch (W) {
        if (W === Ql || W === Ii) throw W;
        var pe = _t(29, W, null, R.mode);
        return ((pe.lanes = j), (pe.return = R), pe);
      }
    };
  }
  var ml = wh(!0),
    xh = wh(!1),
    Un = !1;
  function Us(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Bs(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Bn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ln(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (ve & 2) !== 0)) {
      var s = a.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (a.pending = t),
        (t = Ki(e)),
        hh(e, null, n),
        t
      );
    }
    return (Zi(e, a, t, n), Ki(e));
  }
  function ja(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), Sf(e, n));
    }
  }
  function Ls(e, t) {
    var n = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var s = null,
        c = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var h = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (c === null ? (s = c = h) : (c = c.next = h), (n = n.next));
        } while (n !== null);
        c === null ? (s = c = t) : (c = c.next = t);
      } else s = c = t;
      ((n = {
        baseState: a.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: c,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var js = !1;
  function Ha() {
    if (js) {
      var e = Gl;
      if (e !== null) throw e;
    }
  }
  function qa(e, t, n, a) {
    js = !1;
    var s = e.updateQueue;
    Un = !1;
    var c = s.firstBaseUpdate,
      h = s.lastBaseUpdate,
      m = s.shared.pending;
    if (m !== null) {
      s.shared.pending = null;
      var S = m,
        O = S.next;
      ((S.next = null), h === null ? (c = O) : (h.next = O), (h = S));
      var B = e.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (m = B.lastBaseUpdate),
        m !== h &&
          (m === null ? (B.firstBaseUpdate = O) : (m.next = O),
          (B.lastBaseUpdate = S)));
    }
    if (c !== null) {
      var q = s.baseState;
      ((h = 0), (B = O = S = null), (m = c));
      do {
        var C = m.lane & -536870913,
          z = C !== m.lane;
        if (z ? (fe & C) === C : (a & C) === C) {
          (C !== 0 && C === Xl && (js = !0),
            B !== null &&
              (B = B.next =
                {
                  lane: 0,
                  tag: m.tag,
                  payload: m.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var F = e,
              ee = m;
            C = t;
            var Ae = n;
            switch (ee.tag) {
              case 1:
                if (((F = ee.payload), typeof F == "function")) {
                  q = F.call(Ae, q, C);
                  break e;
                }
                q = F;
                break e;
              case 3:
                F.flags = (F.flags & -65537) | 128;
              case 0:
                if (
                  ((F = ee.payload),
                  (C = typeof F == "function" ? F.call(Ae, q, C) : F),
                  C == null)
                )
                  break e;
                q = b({}, q, C);
                break e;
              case 2:
                Un = !0;
            }
          }
          ((C = m.callback),
            C !== null &&
              ((e.flags |= 64),
              z && (e.flags |= 8192),
              (z = s.callbacks),
              z === null ? (s.callbacks = [C]) : z.push(C)));
        } else
          ((z = {
            lane: C,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            B === null ? ((O = B = z), (S = q)) : (B = B.next = z),
            (h |= C));
        if (((m = m.next), m === null)) {
          if (((m = s.shared.pending), m === null)) break;
          ((z = m),
            (m = z.next),
            (z.next = null),
            (s.lastBaseUpdate = z),
            (s.shared.pending = null));
        }
      } while (!0);
      (B === null && (S = q),
        (s.baseState = S),
        (s.firstBaseUpdate = O),
        (s.lastBaseUpdate = B),
        c === null && (s.shared.lanes = 0),
        (Vn |= h),
        (e.lanes = h),
        (e.memoizedState = q));
    }
  }
  function Nh(e, t) {
    if (typeof e != "function") throw Error(r(191, e));
    e.call(t);
  }
  function zh(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) Nh(n[e], t);
  }
  var Zl = E(null),
    lu = E(0);
  function Dh(e, t) {
    ((e = vn), k(lu, e), k(Zl, t), (vn = e | t.baseLanes));
  }
  function Hs() {
    (k(lu, vn), k(Zl, Zl.current));
  }
  function qs() {
    ((vn = lu.current), H(Zl), H(lu));
  }
  var Tt = E(null),
    Lt = null;
  function jn(e) {
    var t = e.alternate;
    (k(Le, Le.current & 1),
      k(Tt, e),
      Lt === null &&
        (t === null || Zl.current !== null || t.memoizedState !== null) &&
        (Lt = e));
  }
  function Ys(e) {
    (k(Le, Le.current), k(Tt, e), Lt === null && (Lt = e));
  }
  function Mh(e) {
    e.tag === 22
      ? (k(Le, Le.current), k(Tt, e), Lt === null && (Lt = e))
      : Hn();
  }
  function Hn() {
    (k(Le, Le.current), k(Tt, Tt.current));
  }
  function Rt(e) {
    (H(Tt), Lt === e && (Lt = null), H(Le));
  }
  var Le = E(0);
  function au(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Zc(n) || Kc(n)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var on = 0,
    ae = null,
    Te = null,
    qe = null,
    iu = !1,
    Kl = !1,
    pl = !1,
    uu = 0,
    Ya = 0,
    Jl = null,
    Z0 = 0;
  function Me() {
    throw Error(r(321));
  }
  function Vs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Et(e[n], t[n])) return !1;
    return !0;
  }
  function Xs(e, t, n, a, s, c) {
    return (
      (on = c),
      (ae = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (M.H = e === null || e.memoizedState === null ? yd : lc),
      (pl = !1),
      (c = n(a, s)),
      (pl = !1),
      Kl && (c = Bh(t, n, a, s)),
      Uh(e),
      c
    );
  }
  function Uh(e) {
    M.H = Ga;
    var t = Te !== null && Te.next !== null;
    if (((on = 0), (qe = Te = ae = null), (iu = !1), (Ya = 0), (Jl = null), t))
      throw Error(r(300));
    e === null ||
      Ye ||
      ((e = e.dependencies), e !== null && $i(e) && (Ye = !0));
  }
  function Bh(e, t, n, a) {
    ae = e;
    var s = 0;
    do {
      if ((Kl && (Jl = null), (Ya = 0), (Kl = !1), 25 <= s))
        throw Error(r(301));
      if (((s += 1), (qe = Te = null), e.updateQueue != null)) {
        var c = e.updateQueue;
        ((c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0));
      }
      ((M.H = gd), (c = t(n, a)));
    } while (Kl);
    return c;
  }
  function K0() {
    var e = M.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Va(t) : t),
      (e = e.useState()[0]),
      (Te !== null ? Te.memoizedState : null) !== e && (ae.flags |= 1024),
      t
    );
  }
  function Gs() {
    var e = uu !== 0;
    return ((uu = 0), e);
  }
  function Qs(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function ks(e) {
    if (iu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      iu = !1;
    }
    ((on = 0), (qe = Te = ae = null), (Kl = !1), (Ya = uu = 0), (Jl = null));
  }
  function it() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (qe === null ? (ae.memoizedState = qe = e) : (qe = qe.next = e), qe);
  }
  function je() {
    if (Te === null) {
      var e = ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Te.next;
    var t = qe === null ? ae.memoizedState : qe.next;
    if (t !== null) ((qe = t), (Te = e));
    else {
      if (e === null)
        throw ae.alternate === null ? Error(r(467)) : Error(r(310));
      ((Te = e),
        (e = {
          memoizedState: Te.memoizedState,
          baseState: Te.baseState,
          baseQueue: Te.baseQueue,
          queue: Te.queue,
          next: null,
        }),
        qe === null ? (ae.memoizedState = qe = e) : (qe = qe.next = e));
    }
    return qe;
  }
  function ru() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Va(e) {
    var t = Ya;
    return (
      (Ya += 1),
      Jl === null && (Jl = []),
      (e = Ah(Jl, e, t)),
      (t = ae),
      (qe === null ? t.memoizedState : qe.next) === null &&
        ((t = t.alternate),
        (M.H = t === null || t.memoizedState === null ? yd : lc)),
      e
    );
  }
  function su(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Va(e);
      if (e.$$typeof === V) return We(e);
    }
    throw Error(r(438, String(e)));
  }
  function Zs(e) {
    var t = null,
      n = ae.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var a = ae.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = ru()), (ae.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = Ke;
    return (t.index++, n);
  }
  function fn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function cu(e) {
    var t = je();
    return Ks(t, Te, e);
  }
  function Ks(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var s = e.baseQueue,
      c = a.pending;
    if (c !== null) {
      if (s !== null) {
        var h = s.next;
        ((s.next = c.next), (c.next = h));
      }
      ((t.baseQueue = s = c), (a.pending = null));
    }
    if (((c = e.baseState), s === null)) e.memoizedState = c;
    else {
      t = s.next;
      var m = (h = null),
        S = null,
        O = t,
        B = !1;
      do {
        var q = O.lane & -536870913;
        if (q !== O.lane ? (fe & q) === q : (on & q) === q) {
          var C = O.revertLane;
          if (C === 0)
            (S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: O.action,
                  hasEagerState: O.hasEagerState,
                  eagerState: O.eagerState,
                  next: null,
                }),
              q === Xl && (B = !0));
          else if ((on & C) === C) {
            ((O = O.next), C === Xl && (B = !0));
            continue;
          } else
            ((q = {
              lane: 0,
              revertLane: O.revertLane,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null,
            }),
              S === null ? ((m = S = q), (h = c)) : (S = S.next = q),
              (ae.lanes |= C),
              (Vn |= C));
          ((q = O.action),
            pl && n(c, q),
            (c = O.hasEagerState ? O.eagerState : n(c, q)));
        } else
          ((C = {
            lane: q,
            revertLane: O.revertLane,
            gesture: O.gesture,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null,
          }),
            S === null ? ((m = S = C), (h = c)) : (S = S.next = C),
            (ae.lanes |= q),
            (Vn |= q));
        O = O.next;
      } while (O !== null && O !== t);
      if (
        (S === null ? (h = c) : (S.next = m),
        !Et(c, e.memoizedState) && ((Ye = !0), B && ((n = Gl), n !== null)))
      )
        throw n;
      ((e.memoizedState = c),
        (e.baseState = h),
        (e.baseQueue = S),
        (a.lastRenderedState = c));
    }
    return (s === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function Js(e) {
    var t = je(),
      n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch,
      s = n.pending,
      c = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var h = (s = s.next);
      do ((c = e(c, h.action)), (h = h.next));
      while (h !== s);
      (Et(c, t.memoizedState) || (Ye = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (n.lastRenderedState = c));
    }
    return [c, a];
  }
  function Lh(e, t, n) {
    var a = ae,
      s = je(),
      c = de;
    if (c) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = t();
    var h = !Et((Te || s).memoizedState, n);
    if (
      (h && ((s.memoizedState = n), (Ye = !0)),
      (s = s.queue),
      Ws(qh.bind(null, a, s, e), [e]),
      s.getSnapshot !== t || h || (qe !== null && qe.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Fl(9, { destroy: void 0 }, Hh.bind(null, a, s, n, t), null),
        Oe === null)
      )
        throw Error(r(349));
      c || (on & 127) !== 0 || jh(a, t, n);
    }
    return n;
  }
  function jh(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ae.updateQueue),
      t === null
        ? ((t = ru()), (ae.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Hh(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), Yh(t) && Vh(e));
  }
  function qh(e, t, n) {
    return n(function () {
      Yh(t) && Vh(e);
    });
  }
  function Yh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Et(e, n);
    } catch {
      return !0;
    }
  }
  function Vh(e) {
    var t = ul(e, 2);
    t !== null && mt(t, e, 2);
  }
  function Fs(e) {
    var t = it();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), pl)) {
        Cn(!0);
        try {
          n();
        } finally {
          Cn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Xh(e, t, n, a) {
    return ((e.baseState = n), Ks(e, Te, typeof a == "function" ? a : fn));
  }
  function J0(e, t, n, a, s) {
    if (hu(e)) throw Error(r(485));
    if (((e = t.action), e !== null)) {
      var c = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (h) {
          c.listeners.push(h);
        },
      };
      (M.T !== null ? n(!0) : (c.isTransition = !1),
        a(c),
        (n = t.pending),
        n === null
          ? ((c.next = t.pending = c), Gh(t, c))
          : ((c.next = n.next), (t.pending = n.next = c)));
    }
  }
  function Gh(e, t) {
    var n = t.action,
      a = t.payload,
      s = e.state;
    if (t.isTransition) {
      var c = M.T,
        h = {};
      M.T = h;
      try {
        var m = n(s, a),
          S = M.S;
        (S !== null && S(h, m), Qh(e, t, m));
      } catch (O) {
        $s(e, t, O);
      } finally {
        (c !== null && h.types !== null && (c.types = h.types), (M.T = c));
      }
    } else
      try {
        ((c = n(s, a)), Qh(e, t, c));
      } catch (O) {
        $s(e, t, O);
      }
  }
  function Qh(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            kh(e, t, a);
          },
          function (a) {
            return $s(e, t, a);
          },
        )
      : kh(e, t, n);
  }
  function kh(e, t, n) {
    ((t.status = "fulfilled"),
      (t.value = n),
      Zh(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Gh(e, n))));
  }
  function $s(e, t, n) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = n), Zh(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function Zh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Kh(e, t) {
    return t;
  }
  function Jh(e, t) {
    if (de) {
      var n = Oe.formState;
      if (n !== null) {
        e: {
          var a = ae;
          if (de) {
            if (we) {
              t: {
                for (var s = we, c = Bt; s.nodeType !== 8; ) {
                  if (!c) {
                    s = null;
                    break t;
                  }
                  if (((s = jt(s.nextSibling)), s === null)) {
                    s = null;
                    break t;
                  }
                }
                ((c = s.data), (s = c === "F!" || c === "F" ? s : null));
              }
              if (s) {
                ((we = jt(s.nextSibling)), (a = s.data === "F!"));
                break e;
              }
            }
            Dn(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return (
      (n = it()),
      (n.memoizedState = n.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kh,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = dd.bind(null, ae, a)),
      (a.dispatch = n),
      (a = Fs(!1)),
      (c = nc.bind(null, ae, !1, a.queue)),
      (a = it()),
      (s = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = s),
      (n = J0.bind(null, ae, s, c, n)),
      (s.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function Fh(e) {
    var t = je();
    return $h(t, Te, e);
  }
  function $h(e, t, n) {
    if (
      ((t = Ks(e, t, Kh)[0]),
      (e = cu(fn)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = Va(t);
      } catch (h) {
        throw h === Ql ? Ii : h;
      }
    else a = t;
    t = je();
    var s = t.queue,
      c = s.dispatch;
    return (
      n !== t.memoizedState &&
        ((ae.flags |= 2048),
        Fl(9, { destroy: void 0 }, F0.bind(null, s, n), null)),
      [a, c, e]
    );
  }
  function F0(e, t) {
    e.action = t;
  }
  function Wh(e) {
    var t = je(),
      n = Te;
    if (n !== null) return $h(t, n, e);
    (je(), (t = t.memoizedState), (n = je()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = e), [t, a, !1]);
  }
  function Fl(e, t, n, a) {
    return (
      (e = { tag: e, create: n, deps: a, inst: t, next: null }),
      (t = ae.updateQueue),
      t === null && ((t = ru()), (ae.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Ph() {
    return je().memoizedState;
  }
  function ou(e, t, n, a) {
    var s = it();
    ((ae.flags |= e),
      (s.memoizedState = Fl(
        1 | t,
        { destroy: void 0 },
        n,
        a === void 0 ? null : a,
      )));
  }
  function fu(e, t, n, a) {
    var s = je();
    a = a === void 0 ? null : a;
    var c = s.memoizedState.inst;
    Te !== null && a !== null && Vs(a, Te.memoizedState.deps)
      ? (s.memoizedState = Fl(t, c, n, a))
      : ((ae.flags |= e), (s.memoizedState = Fl(1 | t, c, n, a)));
  }
  function Ih(e, t) {
    ou(8390656, 8, e, t);
  }
  function Ws(e, t) {
    fu(2048, 8, e, t);
  }
  function $0(e) {
    ae.flags |= 4;
    var t = ae.updateQueue;
    if (t === null) ((t = ru()), (ae.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function ed(e) {
    var t = je().memoizedState;
    return (
      $0({ ref: t, nextImpl: e }),
      function () {
        if ((ve & 2) !== 0) throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function td(e, t) {
    return fu(4, 2, e, t);
  }
  function nd(e, t) {
    return fu(4, 4, e, t);
  }
  function ld(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ad(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), fu(4, 4, ld.bind(null, t, e), n));
  }
  function Ps() {}
  function id(e, t) {
    var n = je();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Vs(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function ud(e, t) {
    var n = je();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Vs(t, a[1])) return a[0];
    if (((a = e()), pl)) {
      Cn(!0);
      try {
        e();
      } finally {
        Cn(!1);
      }
    }
    return ((n.memoizedState = [a, t]), a);
  }
  function Is(e, t, n) {
    return n === void 0 || ((on & 1073741824) !== 0 && (fe & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = rm()), (ae.lanes |= e), (Vn |= e), n);
  }
  function rd(e, t, n, a) {
    return Et(n, t)
      ? n
      : Zl.current !== null
        ? ((e = Is(e, n, a)), Et(e, t) || (Ye = !0), e)
        : (on & 42) === 0 || ((on & 1073741824) !== 0 && (fe & 261930) === 0)
          ? ((Ye = !0), (e.memoizedState = n))
          : ((e = rm()), (ae.lanes |= e), (Vn |= e), t);
  }
  function sd(e, t, n, a, s) {
    var c = Q.p;
    Q.p = c !== 0 && 8 > c ? c : 8;
    var h = M.T,
      m = {};
    ((M.T = m), nc(e, !1, t, n));
    try {
      var S = s(),
        O = M.S;
      if (
        (O !== null && O(m, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var B = k0(S, a);
        Xa(e, t, B, Ct(e));
      } else Xa(e, t, a, Ct(e));
    } catch (q) {
      Xa(e, t, { then: function () {}, status: "rejected", reason: q }, Ct());
    } finally {
      ((Q.p = c),
        h !== null && m.types !== null && (h.types = m.types),
        (M.T = h));
    }
  }
  function W0() {}
  function ec(e, t, n, a) {
    if (e.tag !== 5) throw Error(r(476));
    var s = cd(e).queue;
    sd(
      e,
      s,
      t,
      P,
      n === null
        ? W0
        : function () {
            return (od(e), n(a));
          },
    );
  }
  function cd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: P,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: fn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function od(e) {
    var t = cd(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Xa(e, t.next.queue, {}, Ct()));
  }
  function tc() {
    return We(ii);
  }
  function fd() {
    return je().memoizedState;
  }
  function hd() {
    return je().memoizedState;
  }
  function P0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Ct();
          e = Bn(n);
          var a = Ln(t, e, n);
          (a !== null && (mt(a, t, n), ja(a, t, n)),
            (t = { cache: Ns() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function I0(e, t, n) {
    var a = Ct();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      hu(e)
        ? md(t, n)
        : ((n = bs(e, t, n, a)), n !== null && (mt(n, e, a), pd(n, t, a))));
  }
  function dd(e, t, n) {
    var a = Ct();
    Xa(e, t, n, a);
  }
  function Xa(e, t, n, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (hu(e)) md(t, s);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var h = t.lastRenderedState,
            m = c(h, n);
          if (((s.hasEagerState = !0), (s.eagerState = m), Et(m, h)))
            return (Zi(e, t, s, 0), Oe === null && ki(), !1);
        } catch {}
      if (((n = bs(e, t, s, a)), n !== null))
        return (mt(n, e, a), pd(n, t, a), !0);
    }
    return !1;
  }
  function nc(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Uc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      hu(e))
    ) {
      if (t) throw Error(r(479));
    } else ((t = bs(e, n, a, 2)), t !== null && mt(t, e, 2));
  }
  function hu(e) {
    var t = e.alternate;
    return e === ae || (t !== null && t === ae);
  }
  function md(e, t) {
    Kl = iu = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function pd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), Sf(e, n));
    }
  }
  var Ga = {
    readContext: We,
    use: su,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useLayoutEffect: Me,
    useInsertionEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useSyncExternalStore: Me,
    useId: Me,
    useHostTransitionStatus: Me,
    useFormState: Me,
    useActionState: Me,
    useOptimistic: Me,
    useMemoCache: Me,
    useCacheRefresh: Me,
  };
  Ga.useEffectEvent = Me;
  var yd = {
      readContext: We,
      use: su,
      useCallback: function (e, t) {
        return ((it().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: We,
      useEffect: Ih,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          ou(4194308, 4, ld.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return ou(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        ou(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = it();
        t = t === void 0 ? null : t;
        var a = e();
        if (pl) {
          Cn(!0);
          try {
            e();
          } finally {
            Cn(!1);
          }
        }
        return ((n.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, n) {
        var a = it();
        if (n !== void 0) {
          var s = n(t);
          if (pl) {
            Cn(!0);
            try {
              n(t);
            } finally {
              Cn(!1);
            }
          }
        } else s = t;
        return (
          (a.memoizedState = a.baseState = s),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: s,
          }),
          (a.queue = e),
          (e = e.dispatch = I0.bind(null, ae, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = it();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Fs(e);
        var t = e.queue,
          n = dd.bind(null, ae, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: Ps,
      useDeferredValue: function (e, t) {
        var n = it();
        return Is(n, e, t);
      },
      useTransition: function () {
        var e = Fs(!1);
        return (
          (e = sd.bind(null, ae, e.queue, !0, !1)),
          (it().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var a = ae,
          s = it();
        if (de) {
          if (n === void 0) throw Error(r(407));
          n = n();
        } else {
          if (((n = t()), Oe === null)) throw Error(r(349));
          (fe & 127) !== 0 || jh(a, t, n);
        }
        s.memoizedState = n;
        var c = { value: n, getSnapshot: t };
        return (
          (s.queue = c),
          Ih(qh.bind(null, a, c, e), [e]),
          (a.flags |= 2048),
          Fl(9, { destroy: void 0 }, Hh.bind(null, a, c, n, t), null),
          n
        );
      },
      useId: function () {
        var e = it(),
          t = Oe.identifierPrefix;
        if (de) {
          var n = $t,
            a = Ft;
          ((n = (a & ~(1 << (32 - St(a) - 1))).toString(32) + n),
            (t = "_" + t + "R_" + n),
            (n = uu++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "_"));
        } else ((n = Z0++), (t = "_" + t + "r_" + n.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: tc,
      useFormState: Jh,
      useActionState: Jh,
      useOptimistic: function (e) {
        var t = it();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = nc.bind(null, ae, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Zs,
      useCacheRefresh: function () {
        return (it().memoizedState = P0.bind(null, ae));
      },
      useEffectEvent: function (e) {
        var t = it(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((ve & 2) !== 0) throw Error(r(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    lc = {
      readContext: We,
      use: su,
      useCallback: id,
      useContext: We,
      useEffect: Ws,
      useImperativeHandle: ad,
      useInsertionEffect: td,
      useLayoutEffect: nd,
      useMemo: ud,
      useReducer: cu,
      useRef: Ph,
      useState: function () {
        return cu(fn);
      },
      useDebugValue: Ps,
      useDeferredValue: function (e, t) {
        var n = je();
        return rd(n, Te.memoizedState, e, t);
      },
      useTransition: function () {
        var e = cu(fn)[0],
          t = je().memoizedState;
        return [typeof e == "boolean" ? e : Va(e), t];
      },
      useSyncExternalStore: Lh,
      useId: fd,
      useHostTransitionStatus: tc,
      useFormState: Fh,
      useActionState: Fh,
      useOptimistic: function (e, t) {
        var n = je();
        return Xh(n, Te, e, t);
      },
      useMemoCache: Zs,
      useCacheRefresh: hd,
    };
  lc.useEffectEvent = ed;
  var gd = {
    readContext: We,
    use: su,
    useCallback: id,
    useContext: We,
    useEffect: Ws,
    useImperativeHandle: ad,
    useInsertionEffect: td,
    useLayoutEffect: nd,
    useMemo: ud,
    useReducer: Js,
    useRef: Ph,
    useState: function () {
      return Js(fn);
    },
    useDebugValue: Ps,
    useDeferredValue: function (e, t) {
      var n = je();
      return Te === null ? Is(n, e, t) : rd(n, Te.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Js(fn)[0],
        t = je().memoizedState;
      return [typeof e == "boolean" ? e : Va(e), t];
    },
    useSyncExternalStore: Lh,
    useId: fd,
    useHostTransitionStatus: tc,
    useFormState: Wh,
    useActionState: Wh,
    useOptimistic: function (e, t) {
      var n = je();
      return Te !== null
        ? Xh(n, Te, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: Zs,
    useCacheRefresh: hd,
  };
  gd.useEffectEvent = ed;
  function ac(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : b({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var ic = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = Ct(),
        s = Bn(a);
      ((s.payload = t),
        n != null && (s.callback = n),
        (t = Ln(e, s, a)),
        t !== null && (mt(t, e, a), ja(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = Ct(),
        s = Bn(a);
      ((s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = Ln(e, s, a)),
        t !== null && (mt(t, e, a), ja(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ct(),
        a = Bn(n);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = Ln(e, a, n)),
        t !== null && (mt(t, e, n), ja(t, e, n)));
    },
  };
  function vd(e, t, n, a, s, c, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, c, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !xa(n, a) || !xa(s, c)
          : !0
    );
  }
  function bd(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && ic.enqueueReplaceState(t, t.state, null));
  }
  function yl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t) a !== "ref" && (n[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = b({}, n));
      for (var s in e) n[s] === void 0 && (n[s] = e[s]);
    }
    return n;
  }
  function Sd(e) {
    Qi(e);
  }
  function Ed(e) {
    console.error(e);
  }
  function _d(e) {
    Qi(e);
  }
  function du(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Td(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function uc(e, t, n) {
    return (
      (n = Bn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        du(e, t);
      }),
      n
    );
  }
  function Rd(e) {
    return ((e = Bn(e)), (e.tag = 3), e);
  }
  function Ad(e, t, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var c = a.value;
      ((e.payload = function () {
        return s(c);
      }),
        (e.callback = function () {
          Td(t, n, a);
        }));
    }
    var h = n.stateNode;
    h !== null &&
      typeof h.componentDidCatch == "function" &&
      (e.callback = function () {
        (Td(t, n, a),
          typeof s != "function" &&
            (Xn === null ? (Xn = new Set([this])) : Xn.add(this)));
        var m = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: m !== null ? m : "",
        });
      });
  }
  function ev(e, t, n, a, s) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && Vl(t, n, s, !0),
        (n = Tt.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Lt === null ? Au() : n.alternate === null && Ue === 0 && (Ue = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              a === eu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  zc(e, a, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === eu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                  zc(e, a, s)),
              !1
            );
        }
        throw Error(r(435, n.tag));
      }
      return (zc(e, a, s), Au(), !1);
    }
    if (de)
      return (
        (t = Tt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = s),
            a !== As && ((e = Error(r(422), { cause: a })), Da(Dt(e, n))))
          : (a !== As && ((t = Error(r(423), { cause: a })), Da(Dt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (s &= -s),
            (e.lanes |= s),
            (a = Dt(a, n)),
            (s = uc(e.stateNode, a, s)),
            Ls(e, s),
            Ue !== 4 && (Ue = 2)),
        !1
      );
    var c = Error(r(520), { cause: a });
    if (
      ((c = Dt(c, n)),
      Wa === null ? (Wa = [c]) : Wa.push(c),
      Ue !== 4 && (Ue = 2),
      t === null)
    )
      return !0;
    ((a = Dt(a, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = s & -s),
            (n.lanes |= e),
            (e = uc(n.stateNode, a, e)),
            Ls(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (c = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (Xn === null || !Xn.has(c)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = Rd(s)),
              Ad(s, e, n, a),
              Ls(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var rc = Error(r(461)),
    Ye = !1;
  function Pe(e, t, n, a) {
    t.child = e === null ? xh(t, null, n, a) : ml(t, e.child, n, a);
  }
  function Od(e, t, n, a, s) {
    n = n.render;
    var c = t.ref;
    if ("ref" in a) {
      var h = {};
      for (var m in a) m !== "ref" && (h[m] = a[m]);
    } else h = a;
    return (
      ol(t),
      (a = Xs(e, t, n, h, c, s)),
      (m = Gs()),
      e !== null && !Ye
        ? (Qs(e, t, s), hn(e, t, s))
        : (de && m && Ts(t), (t.flags |= 1), Pe(e, t, a, s), t.child)
    );
  }
  function Cd(e, t, n, a, s) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" &&
        !Ss(c) &&
        c.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = c), wd(e, t, c, a, s))
        : ((e = Ji(n.type, null, a, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), !pc(e, s))) {
      var h = c.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : xa), n(h, a) && e.ref === t.ref)
      )
        return hn(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = un(c, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function wd(e, t, n, a, s) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (xa(c, a) && e.ref === t.ref)
        if (((Ye = !1), (t.pendingProps = a = c), pc(e, s)))
          (e.flags & 131072) !== 0 && (Ye = !0);
        else return ((t.lanes = e.lanes), hn(e, t, s));
    }
    return sc(e, t, n, a, s);
  }
  function xd(e, t, n, a) {
    var s = a.children,
      c = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((c = c !== null ? c.baseLanes | n : n), e !== null)) {
          for (a = t.child = e.child, s = 0; a !== null; )
            ((s = s | a.lanes | a.childLanes), (a = a.sibling));
          a = s & ~c;
        } else ((a = 0), (t.child = null));
        return Nd(e, t, c, n, a);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Pi(t, c !== null ? c.cachePool : null),
          c !== null ? Dh(t, c) : Hs(),
          Mh(t));
      else
        return (
          (a = t.lanes = 536870912),
          Nd(e, t, c !== null ? c.baseLanes | n : n, n, a)
        );
    } else
      c !== null
        ? (Pi(t, c.cachePool), Dh(t, c), Hn(), (t.memoizedState = null))
        : (e !== null && Pi(t, null), Hs(), Hn());
    return (Pe(e, t, s, n), t.child);
  }
  function Qa(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Nd(e, t, n, a, s) {
    var c = Ds();
    return (
      (c = c === null ? null : { parent: He._currentValue, pool: c }),
      (t.memoizedState = { baseLanes: n, cachePool: c }),
      e !== null && Pi(t, null),
      Hs(),
      Mh(t),
      e !== null && Vl(e, t, a, !0),
      (t.childLanes = s),
      null
    );
  }
  function mu(e, t) {
    return (
      (t = yu({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function zd(e, t, n) {
    return (
      ml(t, e.child, null, n),
      (e = mu(t, t.pendingProps)),
      (e.flags |= 2),
      Rt(t),
      (t.memoizedState = null),
      e
    );
  }
  function tv(e, t, n) {
    var a = t.pendingProps,
      s = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (de) {
        if (a.mode === "hidden")
          return ((e = mu(t, a)), (t.lanes = 536870912), Qa(null, e));
        if (
          (Ys(t),
          (e = we)
            ? ((e = Gm(e, Bt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Nn !== null ? { id: Ft, overflow: $t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = mh(e)),
                (n.return = t),
                (t.child = n),
                ($e = t),
                (we = null)))
            : (e = null),
          e === null)
        )
          throw Dn(t);
        return ((t.lanes = 536870912), null);
      }
      return mu(t, a);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var h = c.dehydrated;
      if ((Ys(t), s))
        if (t.flags & 256) ((t.flags &= -257), (t = zd(e, t, n)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(r(558));
      else if (
        (Ye || Vl(e, t, n, !1), (s = (n & e.childLanes) !== 0), Ye || s)
      ) {
        if (
          ((a = Oe),
          a !== null && ((h = Ef(a, n)), h !== 0 && h !== c.retryLane))
        )
          throw ((c.retryLane = h), ul(e, h), mt(a, e, h), rc);
        (Au(), (t = zd(e, t, n)));
      } else
        ((e = c.treeContext),
          (we = jt(h.nextSibling)),
          ($e = t),
          (de = !0),
          (zn = null),
          (Bt = !1),
          e !== null && gh(t, e),
          (t = mu(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = un(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function pu(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(r(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function sc(e, t, n, a, s) {
    return (
      ol(t),
      (n = Xs(e, t, n, a, void 0, s)),
      (a = Gs()),
      e !== null && !Ye
        ? (Qs(e, t, s), hn(e, t, s))
        : (de && a && Ts(t), (t.flags |= 1), Pe(e, t, n, s), t.child)
    );
  }
  function Dd(e, t, n, a, s, c) {
    return (
      ol(t),
      (t.updateQueue = null),
      (n = Bh(t, a, n, s)),
      Uh(e),
      (a = Gs()),
      e !== null && !Ye
        ? (Qs(e, t, c), hn(e, t, c))
        : (de && a && Ts(t), (t.flags |= 1), Pe(e, t, n, c), t.child)
    );
  }
  function Md(e, t, n, a, s) {
    if ((ol(t), t.stateNode === null)) {
      var c = jl,
        h = n.contextType;
      (typeof h == "object" && h !== null && (c = We(h)),
        (c = new n(a, c)),
        (t.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = ic),
        (t.stateNode = c),
        (c._reactInternals = t),
        (c = t.stateNode),
        (c.props = a),
        (c.state = t.memoizedState),
        (c.refs = {}),
        Us(t),
        (h = n.contextType),
        (c.context = typeof h == "object" && h !== null ? We(h) : jl),
        (c.state = t.memoizedState),
        (h = n.getDerivedStateFromProps),
        typeof h == "function" && (ac(t, n, h, a), (c.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((h = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          h !== c.state && ic.enqueueReplaceState(c, c.state, null),
          qa(t, a, c, s),
          Ha(),
          (c.state = t.memoizedState)),
        typeof c.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      c = t.stateNode;
      var m = t.memoizedProps,
        S = yl(n, m);
      c.props = S;
      var O = c.context,
        B = n.contextType;
      ((h = jl), typeof B == "object" && B !== null && (h = We(B)));
      var q = n.getDerivedStateFromProps;
      ((B =
        typeof q == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (m = t.pendingProps !== m),
        B ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((m || O !== h) && bd(t, c, a, h)),
        (Un = !1));
      var C = t.memoizedState;
      ((c.state = C),
        qa(t, a, c, s),
        Ha(),
        (O = t.memoizedState),
        m || C !== O || Un
          ? (typeof q == "function" && (ac(t, n, q, a), (O = t.memoizedState)),
            (S = Un || vd(t, n, S, a, C, O, h))
              ? (B ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = O)),
            (c.props = a),
            (c.state = O),
            (c.context = h),
            (a = S))
          : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((c = t.stateNode),
        Bs(e, t),
        (h = t.memoizedProps),
        (B = yl(n, h)),
        (c.props = B),
        (q = t.pendingProps),
        (C = c.context),
        (O = n.contextType),
        (S = jl),
        typeof O == "object" && O !== null && (S = We(O)),
        (m = n.getDerivedStateFromProps),
        (O =
          typeof m == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((h !== q || C !== S) && bd(t, c, a, S)),
        (Un = !1),
        (C = t.memoizedState),
        (c.state = C),
        qa(t, a, c, s),
        Ha());
      var z = t.memoizedState;
      h !== q ||
      C !== z ||
      Un ||
      (e !== null && e.dependencies !== null && $i(e.dependencies))
        ? (typeof m == "function" && (ac(t, n, m, a), (z = t.memoizedState)),
          (B =
            Un ||
            vd(t, n, B, a, C, z, S) ||
            (e !== null && e.dependencies !== null && $i(e.dependencies)))
            ? (O ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(a, z, S),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(a, z, S)),
              typeof c.componentDidUpdate == "function" && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (h === e.memoizedProps && C === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (h === e.memoizedProps && C === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = z)),
          (c.props = a),
          (c.state = z),
          (c.context = S),
          (a = B))
        : (typeof c.componentDidUpdate != "function" ||
            (h === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (h === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (c = a),
      pu(e, t),
      (a = (t.flags & 128) !== 0),
      c || a
        ? ((c = t.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = ml(t, e.child, null, s)),
              (t.child = ml(t, null, n, s)))
            : Pe(e, t, n, s),
          (t.memoizedState = c.state),
          (e = t.child))
        : (e = hn(e, t, s)),
      e
    );
  }
  function Ud(e, t, n, a) {
    return (sl(), (t.flags |= 256), Pe(e, t, n, a), t.child);
  }
  var cc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function oc(e) {
    return { baseLanes: e, cachePool: Th() };
  }
  function fc(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Ot), e);
  }
  function Bd(e, t, n) {
    var a = t.pendingProps,
      s = !1,
      c = (t.flags & 128) !== 0,
      h;
    if (
      ((h = c) ||
        (h =
          e !== null && e.memoizedState === null ? !1 : (Le.current & 2) !== 0),
      h && ((s = !0), (t.flags &= -129)),
      (h = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (de) {
        if (
          (s ? jn(t) : Hn(),
          (e = we)
            ? ((e = Gm(e, Bt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Nn !== null ? { id: Ft, overflow: $t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = mh(e)),
                (n.return = t),
                (t.child = n),
                ($e = t),
                (we = null)))
            : (e = null),
          e === null)
        )
          throw Dn(t);
        return (Kc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var m = a.children;
      return (
        (a = a.fallback),
        s
          ? (Hn(),
            (s = t.mode),
            (m = yu({ mode: "hidden", children: m }, s)),
            (a = rl(a, s, n, null)),
            (m.return = t),
            (a.return = t),
            (m.sibling = a),
            (t.child = m),
            (a = t.child),
            (a.memoizedState = oc(n)),
            (a.childLanes = fc(e, h, n)),
            (t.memoizedState = cc),
            Qa(null, a))
          : (jn(t), hc(t, m))
      );
    }
    var S = e.memoizedState;
    if (S !== null && ((m = S.dehydrated), m !== null)) {
      if (c)
        t.flags & 256
          ? (jn(t), (t.flags &= -257), (t = dc(e, t, n)))
          : t.memoizedState !== null
            ? (Hn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Hn(),
              (m = a.fallback),
              (s = t.mode),
              (a = yu({ mode: "visible", children: a.children }, s)),
              (m = rl(m, s, n, null)),
              (m.flags |= 2),
              (a.return = t),
              (m.return = t),
              (a.sibling = m),
              (t.child = a),
              ml(t, e.child, null, n),
              (a = t.child),
              (a.memoizedState = oc(n)),
              (a.childLanes = fc(e, h, n)),
              (t.memoizedState = cc),
              (t = Qa(null, a)));
      else if ((jn(t), Kc(m))) {
        if (((h = m.nextSibling && m.nextSibling.dataset), h)) var O = h.dgst;
        ((h = O),
          (a = Error(r(419))),
          (a.stack = ""),
          (a.digest = h),
          Da({ value: a, source: null, stack: null }),
          (t = dc(e, t, n)));
      } else if (
        (Ye || Vl(e, t, n, !1), (h = (n & e.childLanes) !== 0), Ye || h)
      ) {
        if (
          ((h = Oe),
          h !== null && ((a = Ef(h, n)), a !== 0 && a !== S.retryLane))
        )
          throw ((S.retryLane = a), ul(e, a), mt(h, e, a), rc);
        (Zc(m) || Au(), (t = dc(e, t, n)));
      } else
        Zc(m)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = S.treeContext),
            (we = jt(m.nextSibling)),
            ($e = t),
            (de = !0),
            (zn = null),
            (Bt = !1),
            e !== null && gh(t, e),
            (t = hc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return s
      ? (Hn(),
        (m = a.fallback),
        (s = t.mode),
        (S = e.child),
        (O = S.sibling),
        (a = un(S, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = S.subtreeFlags & 65011712),
        O !== null ? (m = un(O, m)) : ((m = rl(m, s, n, null)), (m.flags |= 2)),
        (m.return = t),
        (a.return = t),
        (a.sibling = m),
        (t.child = a),
        Qa(null, a),
        (a = t.child),
        (m = e.child.memoizedState),
        m === null
          ? (m = oc(n))
          : ((s = m.cachePool),
            s !== null
              ? ((S = He._currentValue),
                (s = s.parent !== S ? { parent: S, pool: S } : s))
              : (s = Th()),
            (m = { baseLanes: m.baseLanes | n, cachePool: s })),
        (a.memoizedState = m),
        (a.childLanes = fc(e, h, n)),
        (t.memoizedState = cc),
        Qa(e.child, a))
      : (jn(t),
        (n = e.child),
        (e = n.sibling),
        (n = un(n, { mode: "visible", children: a.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((h = t.deletions),
          h === null ? ((t.deletions = [e]), (t.flags |= 16)) : h.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function hc(e, t) {
    return (
      (t = yu({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function yu(e, t) {
    return ((e = _t(22, e, null, t)), (e.lanes = 0), e);
  }
  function dc(e, t, n) {
    return (
      ml(t, e.child, null, n),
      (e = hc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ld(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), ws(e.return, t, n));
  }
  function mc(e, t, n, a, s, c) {
    var h = e.memoizedState;
    h === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: s,
          treeForkCount: c,
        })
      : ((h.isBackwards = t),
        (h.rendering = null),
        (h.renderingStartTime = 0),
        (h.last = a),
        (h.tail = n),
        (h.tailMode = s),
        (h.treeForkCount = c));
  }
  function jd(e, t, n) {
    var a = t.pendingProps,
      s = a.revealOrder,
      c = a.tail;
    a = a.children;
    var h = Le.current,
      m = (h & 2) !== 0;
    if (
      (m ? ((h = (h & 1) | 2), (t.flags |= 128)) : (h &= 1),
      k(Le, h),
      Pe(e, t, a, n),
      (a = de ? za : 0),
      !m && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ld(e, n, t);
        else if (e.tag === 19) Ld(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && au(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          mc(t, !1, s, n, c, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && au(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        mc(t, !0, n, null, c, a);
        break;
      case "together":
        mc(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function hn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Vn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Vl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = un(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function pc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && $i(e)));
  }
  function nv(e, t, n) {
    switch (t.tag) {
      case 3:
        (at(t, t.stateNode.containerInfo),
          Mn(t, He, e.memoizedState.cache),
          sl());
        break;
      case 27:
      case 5:
        ya(t);
        break;
      case 4:
        at(t, t.stateNode.containerInfo);
        break;
      case 10:
        Mn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Ys(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (jn(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Bd(e, t, n)
              : (jn(t), (e = hn(e, t, n)), e !== null ? e.sibling : null);
        jn(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (Vl(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          s)
        ) {
          if (a) return jd(e, t, n);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          k(Le, Le.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), xd(e, t, n, t.pendingProps));
      case 24:
        Mn(t, He, e.memoizedState.cache);
    }
    return hn(e, t, n);
  }
  function Hd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ye = !0;
      else {
        if (!pc(e, n) && (t.flags & 128) === 0) return ((Ye = !1), nv(e, t, n));
        Ye = (e.flags & 131072) !== 0;
      }
    else ((Ye = !1), de && (t.flags & 1048576) !== 0 && yh(t, za, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = hl(t.elementType)), (t.type = e), typeof e == "function"))
            Ss(e)
              ? ((a = yl(e, a)), (t.tag = 1), (t = Md(null, t, e, a, n)))
              : ((t.tag = 0), (t = sc(null, t, e, a, n)));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === K) {
                ((t.tag = 11), (t = Od(null, t, e, a, n)));
                break e;
              } else if (s === Z) {
                ((t.tag = 14), (t = Cd(null, t, e, a, n)));
                break e;
              }
            }
            throw ((t = Je(e) || e), Error(r(306, t, "")));
          }
        }
        return t;
      case 0:
        return sc(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((a = t.type), (s = yl(a, t.pendingProps)), Md(e, t, a, s, n));
      case 3:
        e: {
          if ((at(t, t.stateNode.containerInfo), e === null))
            throw Error(r(387));
          a = t.pendingProps;
          var c = t.memoizedState;
          ((s = c.element), Bs(e, t), qa(t, a, null, n));
          var h = t.memoizedState;
          if (
            ((a = h.cache),
            Mn(t, He, a),
            a !== c.cache && xs(t, [He], n, !0),
            Ha(),
            (a = h.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: a, isDehydrated: !1, cache: h.cache }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              t = Ud(e, t, a, n);
              break e;
            } else if (a !== s) {
              ((s = Dt(Error(r(424)), t)), Da(s), (t = Ud(e, t, a, n)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  we = jt(e.firstChild),
                  $e = t,
                  de = !0,
                  zn = null,
                  Bt = !0,
                  n = xh(t, null, a, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((sl(), a === s)) {
              t = hn(e, t, n);
              break e;
            }
            Pe(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          pu(e, t),
          e === null
            ? (n = Fm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : de ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = Du(se.current).createElement(n)),
                (a[Fe] = t),
                (a[st] = e),
                Ie(a, n, e),
                ke(a),
                (t.stateNode = a))
            : (t.memoizedState = Fm(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          ya(t),
          e === null &&
            de &&
            ((a = t.stateNode = Zm(t.type, t.pendingProps, se.current)),
            ($e = t),
            (Bt = !0),
            (s = we),
            Zn(t.type) ? ((Jc = s), (we = jt(a.firstChild))) : (we = s)),
          Pe(e, t, t.pendingProps.children, n),
          pu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            de &&
            ((s = a = we) &&
              ((a = Dv(a, t.type, t.pendingProps, Bt)),
              a !== null
                ? ((t.stateNode = a),
                  ($e = t),
                  (we = jt(a.firstChild)),
                  (Bt = !1),
                  (s = !0))
                : (s = !1)),
            s || Dn(t)),
          ya(t),
          (s = t.type),
          (c = t.pendingProps),
          (h = e !== null ? e.memoizedProps : null),
          (a = c.children),
          Gc(s, c) ? (a = null) : h !== null && Gc(s, h) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((s = Xs(e, t, K0, null, null, n)), (ii._currentValue = s)),
          pu(e, t),
          Pe(e, t, a, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            de &&
            ((e = n = we) &&
              ((n = Mv(n, t.pendingProps, Bt)),
              n !== null
                ? ((t.stateNode = n), ($e = t), (we = null), (e = !0))
                : (e = !1)),
            e || Dn(t)),
          null
        );
      case 13:
        return Bd(e, t, n);
      case 4:
        return (
          at(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = ml(t, null, a, n)) : Pe(e, t, a, n),
          t.child
        );
      case 11:
        return Od(e, t, t.type, t.pendingProps, n);
      case 7:
        return (Pe(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Pe(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Pe(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          Mn(t, t.type, a.value),
          Pe(e, t, a.children, n),
          t.child
        );
      case 9:
        return (
          (s = t.type._context),
          (a = t.pendingProps.children),
          ol(t),
          (s = We(s)),
          (a = a(s)),
          (t.flags |= 1),
          Pe(e, t, a, n),
          t.child
        );
      case 14:
        return Cd(e, t, t.type, t.pendingProps, n);
      case 15:
        return wd(e, t, t.type, t.pendingProps, n);
      case 19:
        return jd(e, t, n);
      case 31:
        return tv(e, t, n);
      case 22:
        return xd(e, t, n, t.pendingProps);
      case 24:
        return (
          ol(t),
          (a = We(He)),
          e === null
            ? ((s = Ds()),
              s === null &&
                ((s = Oe),
                (c = Ns()),
                (s.pooledCache = c),
                c.refCount++,
                c !== null && (s.pooledCacheLanes |= n),
                (s = c)),
              (t.memoizedState = { parent: a, cache: s }),
              Us(t),
              Mn(t, He, s))
            : ((e.lanes & n) !== 0 && (Bs(e, t), qa(t, null, null, n), Ha()),
              (s = e.memoizedState),
              (c = t.memoizedState),
              s.parent !== a
                ? ((s = { parent: a, cache: a }),
                  (t.memoizedState = s),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = s),
                  Mn(t, He, a))
                : ((a = c.cache),
                  Mn(t, He, a),
                  a !== s.cache && xs(t, [He], n, !0))),
          Pe(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function dn(e) {
    e.flags |= 4;
  }
  function yc(e, t, n, a, s) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (s & 335544128) === s))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (fm()) e.flags |= 8192;
        else throw ((dl = eu), Ms);
    } else e.flags &= -16777217;
  }
  function qd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !ep(t)))
      if (fm()) e.flags |= 8192;
      else throw ((dl = eu), Ms);
  }
  function gu(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? vf() : 536870912), (e.lanes |= t), (Il |= t)));
  }
  function ka(e, t) {
    if (!de)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var a = null; n !== null; )
            (n.alternate !== null && (a = n), (n = n.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      a = 0;
    if (t)
      for (var s = e.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags & 65011712),
          (a |= s.flags & 65011712),
          (s.return = e),
          (s = s.sibling));
    else
      for (s = e.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags),
          (a |= s.flags),
          (s.return = e),
          (s = s.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = n), t);
  }
  function lv(e, t, n) {
    var a = t.pendingProps;
    switch ((Rs(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (xe(t), null);
      case 1:
        return (xe(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          cn(He),
          Be(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Yl(t)
              ? dn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Os())),
          xe(t),
          null
        );
      case 26:
        var s = t.type,
          c = t.memoizedState;
        return (
          e === null
            ? (dn(t),
              c !== null ? (xe(t), qd(t, c)) : (xe(t), yc(t, s, null, a, n)))
            : c
              ? c !== e.memoizedState
                ? (dn(t), xe(t), qd(t, c))
                : (xe(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== a && dn(t),
                xe(t),
                yc(t, s, e, a, n)),
          null
        );
      case 27:
        if (
          (wi(t),
          (n = se.current),
          (s = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && dn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(r(166));
            return (xe(t), null);
          }
          ((e = J.current),
            Yl(t) ? vh(t) : ((e = Zm(s, a, n)), (t.stateNode = e), dn(t)));
        }
        return (xe(t), null);
      case 5:
        if ((wi(t), (s = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && dn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(r(166));
            return (xe(t), null);
          }
          if (((c = J.current), Yl(t))) vh(t);
          else {
            var h = Du(se.current);
            switch (c) {
              case 1:
                c = h.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                c = h.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    c = h.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    c = h.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s,
                    );
                    break;
                  case "script":
                    ((c = h.createElement("div")),
                      (c.innerHTML = "<script><\/script>"),
                      (c = c.removeChild(c.firstChild)));
                    break;
                  case "select":
                    ((c =
                      typeof a.is == "string"
                        ? h.createElement("select", { is: a.is })
                        : h.createElement("select")),
                      a.multiple
                        ? (c.multiple = !0)
                        : a.size && (c.size = a.size));
                    break;
                  default:
                    c =
                      typeof a.is == "string"
                        ? h.createElement(s, { is: a.is })
                        : h.createElement(s);
                }
            }
            ((c[Fe] = t), (c[st] = a));
            e: for (h = t.child; h !== null; ) {
              if (h.tag === 5 || h.tag === 6) c.appendChild(h.stateNode);
              else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                ((h.child.return = h), (h = h.child));
                continue;
              }
              if (h === t) break e;
              for (; h.sibling === null; ) {
                if (h.return === null || h.return === t) break e;
                h = h.return;
              }
              ((h.sibling.return = h.return), (h = h.sibling));
            }
            t.stateNode = c;
            e: switch ((Ie(c, s, a), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && dn(t);
          }
        }
        return (
          xe(t),
          yc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && dn(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(r(166));
          if (((e = se.current), Yl(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (a = null),
              (s = $e),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            ((e[Fe] = t),
              (e = !!(
                e.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Bm(e.nodeValue, n)
              )),
              e || Dn(t, !0));
          } else
            ((e = Du(e).createTextNode(a)), (e[Fe] = t), (t.stateNode = e));
        }
        return (xe(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = Yl(t)), n !== null)) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(r(557));
              e[Fe] = t;
            } else
              (sl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (xe(t), (e = !1));
          } else
            ((n = Os()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (Rt(t), t) : (Rt(t), null);
          if ((t.flags & 128) !== 0) throw Error(r(558));
        }
        return (xe(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((s = Yl(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(r(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(r(317));
              s[Fe] = t;
            } else
              (sl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (xe(t), (s = !1));
          } else
            ((s = Os()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return t.flags & 256 ? (Rt(t), t) : (Rt(t), null);
        }
        return (
          Rt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = a !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((a = t.child),
                (s = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (s = a.alternate.memoizedState.cachePool.pool),
                (c = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (c = a.memoizedState.cachePool.pool),
                c !== s && (a.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              gu(t, t.updateQueue),
              xe(t),
              null)
        );
      case 4:
        return (Be(), e === null && Hc(t.stateNode.containerInfo), xe(t), null);
      case 10:
        return (cn(t.type), xe(t), null);
      case 19:
        if ((H(Le), (a = t.memoizedState), a === null)) return (xe(t), null);
        if (((s = (t.flags & 128) !== 0), (c = a.rendering), c === null))
          if (s) ka(a, !1);
          else {
            if (Ue !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((c = au(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      ka(a, !1),
                      e = c.updateQueue,
                      t.updateQueue = e,
                      gu(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (dh(n, e), (n = n.sibling));
                  return (
                    k(Le, (Le.current & 1) | 2),
                    de && rn(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              vt() > _u &&
              ((t.flags |= 128), (s = !0), ka(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = au(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                gu(t, e),
                ka(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !c.alternate &&
                  !de)
              )
                return (xe(t), null);
            } else
              2 * vt() - a.renderingStartTime > _u &&
                n !== 536870912 &&
                ((t.flags |= 128), (s = !0), ka(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((e = a.last),
              e !== null ? (e.sibling = c) : (t.child = c),
              (a.last = c));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = vt()),
            (e.sibling = null),
            (n = Le.current),
            k(Le, s ? (n & 1) | 2 : n & 1),
            de && rn(t, a.treeForkCount),
            e)
          : (xe(t), null);
      case 22:
      case 23:
        return (
          Rt(t),
          qs(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : xe(t),
          (n = t.updateQueue),
          n !== null && gu(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== n && (t.flags |= 2048),
          e !== null && H(fl),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          cn(He),
          xe(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function av(e, t) {
    switch ((Rs(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          cn(He),
          Be(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (wi(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Rt(t), t.alternate === null)) throw Error(r(340));
          sl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Rt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          sl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (H(Le), null);
      case 4:
        return (Be(), null);
      case 10:
        return (cn(t.type), null);
      case 22:
      case 23:
        return (
          Rt(t),
          qs(),
          e !== null && H(fl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (cn(He), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Yd(e, t) {
    switch ((Rs(t), t.tag)) {
      case 3:
        (cn(He), Be());
        break;
      case 26:
      case 27:
      case 5:
        wi(t);
        break;
      case 4:
        Be();
        break;
      case 31:
        t.memoizedState !== null && Rt(t);
        break;
      case 13:
        Rt(t);
        break;
      case 19:
        H(Le);
        break;
      case 10:
        cn(t.type);
        break;
      case 22:
      case 23:
        (Rt(t), qs(), e !== null && H(fl));
        break;
      case 24:
        cn(He);
    }
  }
  function Za(e, t) {
    try {
      var n = t.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        n = s;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var c = n.create,
              h = n.inst;
            ((a = c()), (h.destroy = a));
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (m) {
      _e(t, t.return, m);
    }
  }
  function qn(e, t, n) {
    try {
      var a = t.updateQueue,
        s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var c = s.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            var h = a.inst,
              m = h.destroy;
            if (m !== void 0) {
              ((h.destroy = void 0), (s = t));
              var S = n,
                O = m;
              try {
                O();
              } catch (B) {
                _e(s, S, B);
              }
            }
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (B) {
      _e(t, t.return, B);
    }
  }
  function Vd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        zh(t, n);
      } catch (a) {
        _e(e, e.return, a);
      }
    }
  }
  function Xd(e, t, n) {
    ((n.props = yl(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      _e(e, t, a);
    }
  }
  function Ka(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(a)) : (n.current = a);
      }
    } catch (s) {
      _e(e, t, s);
    }
  }
  function Wt(e, t) {
    var n = e.ref,
      a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (s) {
          _e(e, t, s);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          _e(e, t, s);
        }
      else n.current = null;
  }
  function Gd(e) {
    var t = e.type,
      n = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break e;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (s) {
      _e(e, e.return, s);
    }
  }
  function gc(e, t, n) {
    try {
      var a = e.stateNode;
      (Ov(a, e.type, n, t), (a[st] = t));
    } catch (s) {
      _e(e, e.return, s);
    }
  }
  function Qd(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Zn(e.type)) ||
      e.tag === 4
    );
  }
  function vc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Qd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Zn(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function bc(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ln)));
    else if (
      a !== 4 &&
      (a === 27 && Zn(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (bc(e, t, n), e = e.sibling; e !== null; )
        (bc(e, t, n), (e = e.sibling));
  }
  function vu(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      a !== 4 &&
      (a === 27 && Zn(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (vu(e, t, n), e = e.sibling; e !== null; )
        (vu(e, t, n), (e = e.sibling));
  }
  function kd(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      (Ie(t, a, n), (t[Fe] = e), (t[st] = n));
    } catch (c) {
      _e(e, e.return, c);
    }
  }
  var mn = !1,
    Ve = !1,
    Sc = !1,
    Zd = typeof WeakSet == "function" ? WeakSet : Set,
    Ze = null;
  function iv(e, t) {
    if (((e = e.containerInfo), (Vc = qu), (e = ah(e)), ds(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var s = a.anchorOffset,
              c = a.focusNode;
            a = a.focusOffset;
            try {
              (n.nodeType, c.nodeType);
            } catch {
              n = null;
              break e;
            }
            var h = 0,
              m = -1,
              S = -1,
              O = 0,
              B = 0,
              q = e,
              C = null;
            t: for (;;) {
              for (
                var z;
                q !== n || (s !== 0 && q.nodeType !== 3) || (m = h + s),
                  q !== c || (a !== 0 && q.nodeType !== 3) || (S = h + a),
                  q.nodeType === 3 && (h += q.nodeValue.length),
                  (z = q.firstChild) !== null;
              )
                ((C = q), (q = z));
              for (;;) {
                if (q === e) break t;
                if (
                  (C === n && ++O === s && (m = h),
                  C === c && ++B === a && (S = h),
                  (z = q.nextSibling) !== null)
                )
                  break;
                ((q = C), (C = q.parentNode));
              }
              q = z;
            }
            n = m === -1 || S === -1 ? null : { start: m, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Xc = { focusedElem: e, selectionRange: n }, qu = !1, Ze = t;
      Ze !== null;
    )
      if (
        ((t = Ze), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (Ze = e));
      else
        for (; Ze !== null; ) {
          switch (((t = Ze), (c = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (n = 0; n < e.length; n++)
                  ((s = e[n]), (s.ref.impl = s.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                ((e = void 0),
                  (n = t),
                  (s = c.memoizedProps),
                  (c = c.memoizedState),
                  (a = n.stateNode));
                try {
                  var F = yl(n.type, s);
                  ((e = a.getSnapshotBeforeUpdate(F, c)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ee) {
                  _e(n, n.return, ee);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  kc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      kc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Ze = e));
            break;
          }
          Ze = t.return;
        }
  }
  function Kd(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (yn(e, n), a & 4 && Za(5, n));
        break;
      case 1:
        if ((yn(e, n), a & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (h) {
              _e(n, n.return, h);
            }
          else {
            var s = yl(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (h) {
              _e(n, n.return, h);
            }
          }
        (a & 64 && Vd(n), a & 512 && Ka(n, n.return));
        break;
      case 3:
        if ((yn(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            zh(e, t);
          } catch (h) {
            _e(n, n.return, h);
          }
        }
        break;
      case 27:
        t === null && a & 4 && kd(n);
      case 26:
      case 5:
        (yn(e, n), t === null && a & 4 && Gd(n), a & 512 && Ka(n, n.return));
        break;
      case 12:
        yn(e, n);
        break;
      case 31:
        (yn(e, n), a & 4 && $d(e, n));
        break;
      case 13:
        (yn(e, n),
          a & 4 && Wd(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = mv.bind(null, n)), Uv(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || mn), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Ve), (s = mn));
          var c = Ve;
          ((mn = a),
            (Ve = t) && !c ? gn(e, n, (n.subtreeFlags & 8772) !== 0) : yn(e, n),
            (mn = s),
            (Ve = c));
        }
        break;
      case 30:
        break;
      default:
        yn(e, n);
    }
  }
  function Jd(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Jd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && $r(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var ze = null,
    ot = !1;
  function pn(e, t, n) {
    for (n = n.child; n !== null; ) (Fd(e, t, n), (n = n.sibling));
  }
  function Fd(e, t, n) {
    if (bt && typeof bt.onCommitFiberUnmount == "function")
      try {
        bt.onCommitFiberUnmount(ga, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Ve || Wt(n, t),
          pn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Ve || Wt(n, t);
        var a = ze,
          s = ot;
        (Zn(n.type) && ((ze = n.stateNode), (ot = !1)),
          pn(e, t, n),
          ni(n.stateNode),
          (ze = a),
          (ot = s));
        break;
      case 5:
        Ve || Wt(n, t);
      case 6:
        if (
          ((a = ze),
          (s = ot),
          (ze = null),
          pn(e, t, n),
          (ze = a),
          (ot = s),
          ze !== null)
        )
          if (ot)
            try {
              (ze.nodeType === 9
                ? ze.body
                : ze.nodeName === "HTML"
                  ? ze.ownerDocument.body
                  : ze
              ).removeChild(n.stateNode);
            } catch (c) {
              _e(n, t, c);
            }
          else
            try {
              ze.removeChild(n.stateNode);
            } catch (c) {
              _e(n, t, c);
            }
        break;
      case 18:
        ze !== null &&
          (ot
            ? ((e = ze),
              Vm(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                n.stateNode,
              ),
              ra(e))
            : Vm(ze, n.stateNode));
        break;
      case 4:
        ((a = ze),
          (s = ot),
          (ze = n.stateNode.containerInfo),
          (ot = !0),
          pn(e, t, n),
          (ze = a),
          (ot = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (qn(2, n, t), Ve || qn(4, n, t), pn(e, t, n));
        break;
      case 1:
        (Ve ||
          (Wt(n, t),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && Xd(n, t, a)),
          pn(e, t, n));
        break;
      case 21:
        pn(e, t, n);
        break;
      case 22:
        ((Ve = (a = Ve) || n.memoizedState !== null), pn(e, t, n), (Ve = a));
        break;
      default:
        pn(e, t, n);
    }
  }
  function $d(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        ra(e);
      } catch (n) {
        _e(t, t.return, n);
      }
    }
  }
  function Wd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        ra(e);
      } catch (n) {
        _e(t, t.return, n);
      }
  }
  function uv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Zd()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Zd()),
          t
        );
      default:
        throw Error(r(435, e.tag));
    }
  }
  function bu(e, t) {
    var n = uv(e);
    t.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var s = pv.bind(null, e, a);
        a.then(s, s);
      }
    });
  }
  function ft(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a],
          c = e,
          h = t,
          m = h;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Zn(m.type)) {
                ((ze = m.stateNode), (ot = !1));
                break e;
              }
              break;
            case 5:
              ((ze = m.stateNode), (ot = !1));
              break e;
            case 3:
            case 4:
              ((ze = m.stateNode.containerInfo), (ot = !0));
              break e;
          }
          m = m.return;
        }
        if (ze === null) throw Error(r(160));
        (Fd(c, h, s),
          (ze = null),
          (ot = !1),
          (c = s.alternate),
          c !== null && (c.return = null),
          (s.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Pd(t, e), (t = t.sibling));
  }
  var Xt = null;
  function Pd(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ft(t, e),
          ht(e),
          a & 4 && (qn(3, e, e.return), Za(3, e), qn(5, e, e.return)));
        break;
      case 1:
        (ft(t, e),
          ht(e),
          a & 512 && (Ve || n === null || Wt(n, n.return)),
          a & 64 &&
            mn &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var s = Xt;
        if (
          (ft(t, e),
          ht(e),
          a & 512 && (Ve || n === null || Wt(n, n.return)),
          a & 4)
        ) {
          var c = n !== null ? n.memoizedState : null;
          if (((a = e.memoizedState), n === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type),
                    (n = e.memoizedProps),
                    (s = s.ownerDocument || s));
                  t: switch (a) {
                    case "title":
                      ((c = s.getElementsByTagName("title")[0]),
                        (!c ||
                          c[Sa] ||
                          c[Fe] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = s.createElement(a)),
                          s.head.insertBefore(
                            c,
                            s.querySelector("head > title"),
                          )),
                        Ie(c, a, n),
                        (c[Fe] = e),
                        ke(c),
                        (a = c));
                      break e;
                    case "link":
                      var h = Pm("link", "href", s).get(a + (n.href || ""));
                      if (h) {
                        for (var m = 0; m < h.length; m++)
                          if (
                            ((c = h[m]),
                            c.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              c.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              c.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              c.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            h.splice(m, 1);
                            break t;
                          }
                      }
                      ((c = s.createElement(a)),
                        Ie(c, a, n),
                        s.head.appendChild(c));
                      break;
                    case "meta":
                      if (
                        (h = Pm("meta", "content", s).get(
                          a + (n.content || ""),
                        ))
                      ) {
                        for (m = 0; m < h.length; m++)
                          if (
                            ((c = h[m]),
                            c.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              c.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              c.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              c.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            h.splice(m, 1);
                            break t;
                          }
                      }
                      ((c = s.createElement(a)),
                        Ie(c, a, n),
                        s.head.appendChild(c));
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  ((c[Fe] = e), ke(c), (a = c));
                }
                e.stateNode = a;
              } else Im(s, e.type, e.stateNode);
            else e.stateNode = Wm(s, a, e.memoizedProps);
          else
            c !== a
              ? (c === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : c.count--,
                a === null
                  ? Im(s, e.type, e.stateNode)
                  : Wm(s, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                gc(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (ft(t, e),
          ht(e),
          a & 512 && (Ve || n === null || Wt(n, n.return)),
          n !== null && a & 4 && gc(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (ft(t, e),
          ht(e),
          a & 512 && (Ve || n === null || Wt(n, n.return)),
          e.flags & 32)
        ) {
          s = e.stateNode;
          try {
            Nl(s, "");
          } catch (F) {
            _e(e, e.return, F);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((s = e.memoizedProps), gc(e, s, n !== null ? n.memoizedProps : s)),
          a & 1024 && (Sc = !0));
        break;
      case 6:
        if ((ft(t, e), ht(e), a & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          ((a = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = a;
          } catch (F) {
            _e(e, e.return, F);
          }
        }
        break;
      case 3:
        if (
          ((Bu = null),
          (s = Xt),
          (Xt = Mu(t.containerInfo)),
          ft(t, e),
          (Xt = s),
          ht(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ra(t.containerInfo);
          } catch (F) {
            _e(e, e.return, F);
          }
        Sc && ((Sc = !1), Id(e));
        break;
      case 4:
        ((a = Xt),
          (Xt = Mu(e.stateNode.containerInfo)),
          ft(t, e),
          ht(e),
          (Xt = a));
        break;
      case 12:
        (ft(t, e), ht(e));
        break;
      case 31:
        (ft(t, e),
          ht(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), bu(e, a))));
        break;
      case 13:
        (ft(t, e),
          ht(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Eu = vt()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), bu(e, a))));
        break;
      case 22:
        s = e.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          O = mn,
          B = Ve;
        if (
          ((mn = O || s),
          (Ve = B || S),
          ft(t, e),
          (Ve = B),
          (mn = O),
          ht(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = s ? t._visibility & -2 : t._visibility | 1,
              s && (n === null || S || mn || Ve || gl(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                S = n = t;
                try {
                  if (((c = S.stateNode), s))
                    ((h = c.style),
                      typeof h.setProperty == "function"
                        ? h.setProperty("display", "none", "important")
                        : (h.display = "none"));
                  else {
                    m = S.stateNode;
                    var q = S.memoizedProps.style,
                      C =
                        q != null && q.hasOwnProperty("display")
                          ? q.display
                          : null;
                    m.style.display =
                      C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (F) {
                  _e(S, S.return, F);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (F) {
                  _e(S, S.return, F);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                S = t;
                try {
                  var z = S.stateNode;
                  s ? Xm(z, !0) : Xm(S.stateNode, !1);
                } catch (F) {
                  _e(S, S.return, F);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), bu(e, n))));
        break;
      case 19:
        (ft(t, e),
          ht(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), bu(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ft(t, e), ht(e));
    }
  }
  function ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (Qd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              c = vc(e);
            vu(e, c, s);
            break;
          case 5:
            var h = n.stateNode;
            n.flags & 32 && (Nl(h, ""), (n.flags &= -33));
            var m = vc(e);
            vu(e, m, h);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              O = vc(e);
            bc(e, O, S);
            break;
          default:
            throw Error(r(161));
        }
      } catch (B) {
        _e(e, e.return, B);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Id(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Id(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function yn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Kd(e, t.alternate, t), (t = t.sibling));
  }
  function gl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (qn(4, t, t.return), gl(t));
          break;
        case 1:
          Wt(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == "function" && Xd(t, t.return, n),
            gl(t));
          break;
        case 27:
          ni(t.stateNode);
        case 26:
        case 5:
          (Wt(t, t.return), gl(t));
          break;
        case 22:
          t.memoizedState === null && gl(t);
          break;
        case 30:
          gl(t);
          break;
        default:
          gl(t);
      }
      e = e.sibling;
    }
  }
  function gn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        s = e,
        c = t,
        h = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (gn(s, c, n), Za(4, c));
          break;
        case 1:
          if (
            (gn(s, c, n),
            (a = c),
            (s = a.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (O) {
              _e(a, a.return, O);
            }
          if (((a = c), (s = a.updateQueue), s !== null)) {
            var m = a.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  Nh(S[s], m);
            } catch (O) {
              _e(a, a.return, O);
            }
          }
          (n && h & 64 && Vd(c), Ka(c, c.return));
          break;
        case 27:
          kd(c);
        case 26:
        case 5:
          (gn(s, c, n), n && a === null && h & 4 && Gd(c), Ka(c, c.return));
          break;
        case 12:
          gn(s, c, n);
          break;
        case 31:
          (gn(s, c, n), n && h & 4 && $d(s, c));
          break;
        case 13:
          (gn(s, c, n), n && h & 4 && Wd(s, c));
          break;
        case 22:
          (c.memoizedState === null && gn(s, c, n), Ka(c, c.return));
          break;
        case 30:
          break;
        default:
          gn(s, c, n);
      }
      t = t.sibling;
    }
  }
  function Ec(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Ma(n)));
  }
  function _c(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ma(e)));
  }
  function Gt(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (em(e, t, n, a), (t = t.sibling));
  }
  function em(e, t, n, a) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Gt(e, t, n, a), s & 2048 && Za(9, t));
        break;
      case 1:
        Gt(e, t, n, a);
        break;
      case 3:
        (Gt(e, t, n, a),
          s & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ma(e))));
        break;
      case 12:
        if (s & 2048) {
          (Gt(e, t, n, a), (e = t.stateNode));
          try {
            var c = t.memoizedProps,
              h = c.id,
              m = c.onPostCommit;
            typeof m == "function" &&
              m(
                h,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (S) {
            _e(t, t.return, S);
          }
        } else Gt(e, t, n, a);
        break;
      case 31:
        Gt(e, t, n, a);
        break;
      case 13:
        Gt(e, t, n, a);
        break;
      case 23:
        break;
      case 22:
        ((c = t.stateNode),
          (h = t.alternate),
          t.memoizedState !== null
            ? c._visibility & 2
              ? Gt(e, t, n, a)
              : Ja(e, t)
            : c._visibility & 2
              ? Gt(e, t, n, a)
              : ((c._visibility |= 2),
                $l(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && Ec(h, t));
        break;
      case 24:
        (Gt(e, t, n, a), s & 2048 && _c(t.alternate, t));
        break;
      default:
        Gt(e, t, n, a);
    }
  }
  function $l(e, t, n, a, s) {
    for (
      s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var c = e,
        h = t,
        m = n,
        S = a,
        O = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          ($l(c, h, m, S, s), Za(8, h));
          break;
        case 23:
          break;
        case 22:
          var B = h.stateNode;
          (h.memoizedState !== null
            ? B._visibility & 2
              ? $l(c, h, m, S, s)
              : Ja(c, h)
            : ((B._visibility |= 2), $l(c, h, m, S, s)),
            s && O & 2048 && Ec(h.alternate, h));
          break;
        case 24:
          ($l(c, h, m, S, s), s && O & 2048 && _c(h.alternate, h));
          break;
        default:
          $l(c, h, m, S, s);
      }
      t = t.sibling;
    }
  }
  function Ja(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          a = t,
          s = a.flags;
        switch (a.tag) {
          case 22:
            (Ja(n, a), s & 2048 && Ec(a.alternate, a));
            break;
          case 24:
            (Ja(n, a), s & 2048 && _c(a.alternate, a));
            break;
          default:
            Ja(n, a);
        }
        t = t.sibling;
      }
  }
  var Fa = 8192;
  function Wl(e, t, n) {
    if (e.subtreeFlags & Fa)
      for (e = e.child; e !== null; ) (tm(e, t, n), (e = e.sibling));
  }
  function tm(e, t, n) {
    switch (e.tag) {
      case 26:
        (Wl(e, t, n),
          e.flags & Fa &&
            e.memoizedState !== null &&
            Zv(n, Xt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Wl(e, t, n);
        break;
      case 3:
      case 4:
        var a = Xt;
        ((Xt = Mu(e.stateNode.containerInfo)), Wl(e, t, n), (Xt = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Fa), (Fa = 16777216), Wl(e, t, n), (Fa = a))
            : Wl(e, t, n));
        break;
      default:
        Wl(e, t, n);
    }
  }
  function nm(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function $a(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((Ze = a), am(a, e));
        }
      nm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (lm(e), (e = e.sibling));
  }
  function lm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ($a(e), e.flags & 2048 && qn(9, e, e.return));
        break;
      case 3:
        $a(e);
        break;
      case 12:
        $a(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Su(e))
          : $a(e);
        break;
      default:
        $a(e);
    }
  }
  function Su(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((Ze = a), am(a, e));
        }
      nm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (qn(8, t, t.return), Su(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Su(t)));
          break;
        default:
          Su(t);
      }
      e = e.sibling;
    }
  }
  function am(e, t) {
    for (; Ze !== null; ) {
      var n = Ze;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          qn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ma(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (Ze = a));
      else
        e: for (n = e; Ze !== null; ) {
          a = Ze;
          var s = a.sibling,
            c = a.return;
          if ((Jd(a), a === n)) {
            Ze = null;
            break e;
          }
          if (s !== null) {
            ((s.return = c), (Ze = s));
            break e;
          }
          Ze = c;
        }
    }
  }
  var rv = {
      getCacheForType: function (e) {
        var t = We(He),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return We(He).controller.signal;
      },
    },
    sv = typeof WeakMap == "function" ? WeakMap : Map,
    ve = 0,
    Oe = null,
    ce = null,
    fe = 0,
    Ee = 0,
    At = null,
    Yn = !1,
    Pl = !1,
    Tc = !1,
    vn = 0,
    Ue = 0,
    Vn = 0,
    vl = 0,
    Rc = 0,
    Ot = 0,
    Il = 0,
    Wa = null,
    dt = null,
    Ac = !1,
    Eu = 0,
    im = 0,
    _u = 1 / 0,
    Tu = null,
    Xn = null,
    Qe = 0,
    Gn = null,
    ea = null,
    bn = 0,
    Oc = 0,
    Cc = null,
    um = null,
    Pa = 0,
    wc = null;
  function Ct() {
    return (ve & 2) !== 0 && fe !== 0 ? fe & -fe : M.T !== null ? Uc() : _f();
  }
  function rm() {
    if (Ot === 0)
      if ((fe & 536870912) === 0 || de) {
        var e = zi;
        ((zi <<= 1), (zi & 3932160) === 0 && (zi = 262144), (Ot = e));
      } else Ot = 536870912;
    return ((e = Tt.current), e !== null && (e.flags |= 32), Ot);
  }
  function mt(e, t, n) {
    (((e === Oe && (Ee === 2 || Ee === 9)) || e.cancelPendingCommit !== null) &&
      (ta(e, 0), Qn(e, fe, Ot, !1)),
      ba(e, n),
      ((ve & 2) === 0 || e !== Oe) &&
        (e === Oe &&
          ((ve & 2) === 0 && (vl |= n), Ue === 4 && Qn(e, fe, Ot, !1)),
        Pt(e)));
  }
  function sm(e, t, n) {
    if ((ve & 6) !== 0) throw Error(r(327));
    var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || va(e, t),
      s = a ? fv(e, t) : Nc(e, t, !0),
      c = a;
    do {
      if (s === 0) {
        Pl && !a && Qn(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), c && !cv(n))) {
          ((s = Nc(e, t, !1)), (c = !1));
          continue;
        }
        if (s === 2) {
          if (((c = t), e.errorRecoveryDisabledLanes & c)) var h = 0;
          else
            ((h = e.pendingLanes & -536870913),
              (h = h !== 0 ? h : h & 536870912 ? 536870912 : 0));
          if (h !== 0) {
            t = h;
            e: {
              var m = e;
              s = Wa;
              var S = m.current.memoizedState.isDehydrated;
              if ((S && (ta(m, h).flags |= 256), (h = Nc(m, h, !1)), h !== 2)) {
                if (Tc && !S) {
                  ((m.errorRecoveryDisabledLanes |= c), (vl |= c), (s = 4));
                  break e;
                }
                ((c = dt),
                  (dt = s),
                  c !== null &&
                    (dt === null ? (dt = c) : dt.push.apply(dt, c)));
              }
              s = h;
            }
            if (((c = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (ta(e, 0), Qn(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (c = s), c)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Qn(a, t, Ot, !Yn);
              break e;
            case 2:
              dt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && ((s = Eu + 300 - vt()), 10 < s)) {
            if ((Qn(a, t, Ot, !Yn), Mi(a, 0, !0) !== 0)) break e;
            ((bn = t),
              (a.timeoutHandle = qm(
                cm.bind(
                  null,
                  a,
                  n,
                  dt,
                  Tu,
                  Ac,
                  t,
                  Ot,
                  vl,
                  Il,
                  Yn,
                  c,
                  "Throttled",
                  -0,
                  0,
                ),
                s,
              )));
            break e;
          }
          cm(a, n, dt, Tu, Ac, t, Ot, vl, Il, Yn, c, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Pt(e);
  }
  function cm(e, t, n, a, s, c, h, m, S, O, B, q, C, z) {
    if (
      ((e.timeoutHandle = -1),
      (q = t.subtreeFlags),
      q & 8192 || (q & 16785408) === 16785408)
    ) {
      ((q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ln,
      }),
        tm(t, c, q));
      var F =
        (c & 62914560) === c ? Eu - vt() : (c & 4194048) === c ? im - vt() : 0;
      if (((F = Kv(q, F)), F !== null)) {
        ((bn = c),
          (e.cancelPendingCommit = F(
            gm.bind(null, e, t, c, n, a, s, h, m, S, B, q, null, C, z),
          )),
          Qn(e, c, h, !O));
        return;
      }
    }
    gm(e, t, c, n, a, s, h, m, S);
  }
  function cv(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var s = n[a],
            c = s.getSnapshot;
          s = s.value;
          try {
            if (!Et(c(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Qn(e, t, n, a) {
    ((t &= ~Rc),
      (t &= ~vl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var s = t; 0 < s; ) {
      var c = 31 - St(s),
        h = 1 << c;
      ((a[c] = -1), (s &= ~h));
    }
    n !== 0 && bf(e, n, t);
  }
  function Ru() {
    return (ve & 6) === 0 ? (Ia(0), !1) : !0;
  }
  function xc() {
    if (ce !== null) {
      if (Ee === 0) var e = ce.return;
      else ((e = ce), (sn = cl = null), ks(e), (kl = null), (Ba = 0), (e = ce));
      for (; e !== null; ) (Yd(e.alternate, e), (e = e.return));
      ce = null;
    }
  }
  function ta(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), xv(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (bn = 0),
      xc(),
      (Oe = e),
      (ce = n = un(e.current, null)),
      (fe = t),
      (Ee = 0),
      (At = null),
      (Yn = !1),
      (Pl = va(e, t)),
      (Tc = !1),
      (Il = Ot = Rc = vl = Vn = Ue = 0),
      (dt = Wa = null),
      (Ac = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var s = 31 - St(a),
          c = 1 << s;
        ((t |= e[s]), (a &= ~c));
      }
    return ((vn = t), ki(), n);
  }
  function om(e, t) {
    ((ae = null),
      (M.H = Ga),
      t === Ql || t === Ii
        ? ((t = Oh()), (Ee = 3))
        : t === Ms
          ? ((t = Oh()), (Ee = 4))
          : (Ee =
              t === rc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (At = t),
      ce === null && ((Ue = 1), du(e, Dt(t, e.current))));
  }
  function fm() {
    var e = Tt.current;
    return e === null
      ? !0
      : (fe & 4194048) === fe
        ? Lt === null
        : (fe & 62914560) === fe || (fe & 536870912) !== 0
          ? e === Lt
          : !1;
  }
  function hm() {
    var e = M.H;
    return ((M.H = Ga), e === null ? Ga : e);
  }
  function dm() {
    var e = M.A;
    return ((M.A = rv), e);
  }
  function Au() {
    ((Ue = 4),
      Yn || ((fe & 4194048) !== fe && Tt.current !== null) || (Pl = !0),
      ((Vn & 134217727) === 0 && (vl & 134217727) === 0) ||
        Oe === null ||
        Qn(Oe, fe, Ot, !1));
  }
  function Nc(e, t, n) {
    var a = ve;
    ve |= 2;
    var s = hm(),
      c = dm();
    ((Oe !== e || fe !== t) && ((Tu = null), ta(e, t)), (t = !1));
    var h = Ue;
    e: do
      try {
        if (Ee !== 0 && ce !== null) {
          var m = ce,
            S = At;
          switch (Ee) {
            case 8:
              (xc(), (h = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Tt.current === null && (t = !0);
              var O = Ee;
              if (((Ee = 0), (At = null), na(e, m, S, O), n && Pl)) {
                h = 0;
                break e;
              }
              break;
            default:
              ((O = Ee), (Ee = 0), (At = null), na(e, m, S, O));
          }
        }
        (ov(), (h = Ue));
        break;
      } catch (B) {
        om(e, B);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (sn = cl = null),
      (ve = a),
      (M.H = s),
      (M.A = c),
      ce === null && ((Oe = null), (fe = 0), ki()),
      h
    );
  }
  function ov() {
    for (; ce !== null; ) mm(ce);
  }
  function fv(e, t) {
    var n = ve;
    ve |= 2;
    var a = hm(),
      s = dm();
    Oe !== e || fe !== t
      ? ((Tu = null), (_u = vt() + 500), ta(e, t))
      : (Pl = va(e, t));
    e: do
      try {
        if (Ee !== 0 && ce !== null) {
          t = ce;
          var c = At;
          t: switch (Ee) {
            case 1:
              ((Ee = 0), (At = null), na(e, t, c, 1));
              break;
            case 2:
            case 9:
              if (Rh(c)) {
                ((Ee = 0), (At = null), pm(t));
                break;
              }
              ((t = function () {
                ((Ee !== 2 && Ee !== 9) || Oe !== e || (Ee = 7), Pt(e));
              }),
                c.then(t, t));
              break e;
            case 3:
              Ee = 7;
              break e;
            case 4:
              Ee = 5;
              break e;
            case 7:
              Rh(c)
                ? ((Ee = 0), (At = null), pm(t))
                : ((Ee = 0), (At = null), na(e, t, c, 7));
              break;
            case 5:
              var h = null;
              switch (ce.tag) {
                case 26:
                  h = ce.memoizedState;
                case 5:
                case 27:
                  var m = ce;
                  if (h ? ep(h) : m.stateNode.complete) {
                    ((Ee = 0), (At = null));
                    var S = m.sibling;
                    if (S !== null) ce = S;
                    else {
                      var O = m.return;
                      O !== null ? ((ce = O), Ou(O)) : (ce = null);
                    }
                    break t;
                  }
              }
              ((Ee = 0), (At = null), na(e, t, c, 5));
              break;
            case 6:
              ((Ee = 0), (At = null), na(e, t, c, 6));
              break;
            case 8:
              (xc(), (Ue = 6));
              break e;
            default:
              throw Error(r(462));
          }
        }
        hv();
        break;
      } catch (B) {
        om(e, B);
      }
    while (!0);
    return (
      (sn = cl = null),
      (M.H = a),
      (M.A = s),
      (ve = n),
      ce !== null ? 0 : ((Oe = null), (fe = 0), ki(), Ue)
    );
  }
  function hv() {
    for (; ce !== null && !Bg(); ) mm(ce);
  }
  function mm(e) {
    var t = Hd(e.alternate, e, vn);
    ((e.memoizedProps = e.pendingProps), t === null ? Ou(e) : (ce = t));
  }
  function pm(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Dd(n, t, t.pendingProps, t.type, void 0, fe);
        break;
      case 11:
        t = Dd(n, t, t.pendingProps, t.type.render, t.ref, fe);
        break;
      case 5:
        ks(t);
      default:
        (Yd(n, t), (t = ce = dh(t, vn)), (t = Hd(n, t, vn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Ou(e) : (ce = t));
  }
  function na(e, t, n, a) {
    ((sn = cl = null), ks(t), (kl = null), (Ba = 0));
    var s = t.return;
    try {
      if (ev(e, s, t, n, fe)) {
        ((Ue = 1), du(e, Dt(n, e.current)), (ce = null));
        return;
      }
    } catch (c) {
      if (s !== null) throw ((ce = s), c);
      ((Ue = 1), du(e, Dt(n, e.current)), (ce = null));
      return;
    }
    t.flags & 32768
      ? (de || a === 1
          ? (e = !0)
          : Pl || (fe & 536870912) !== 0
            ? (e = !1)
            : ((Yn = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Tt.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        ym(t, e))
      : Ou(t);
  }
  function Ou(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        ym(t, Yn);
        return;
      }
      e = t.return;
      var n = lv(t.alternate, t, vn);
      if (n !== null) {
        ce = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ce = t;
        return;
      }
      ce = t = e;
    } while (t !== null);
    Ue === 0 && (Ue = 5);
  }
  function ym(e, t) {
    do {
      var n = av(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (ce = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ce = e;
        return;
      }
      ce = e = n;
    } while (e !== null);
    ((Ue = 6), (ce = null));
  }
  function gm(e, t, n, a, s, c, h, m, S) {
    e.cancelPendingCommit = null;
    do Cu();
    while (Qe !== 0);
    if ((ve & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (
        ((c = t.lanes | t.childLanes),
        (c |= vs),
        kg(e, n, c, h, m, S),
        e === Oe && ((ce = Oe = null), (fe = 0)),
        (ea = t),
        (Gn = e),
        (bn = n),
        (Oc = c),
        (Cc = s),
        (um = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            yv(xi, function () {
              return (_m(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = M.T), (M.T = null), (s = Q.p), (Q.p = 2), (h = ve), (ve |= 4));
        try {
          iv(e, t, n);
        } finally {
          ((ve = h), (Q.p = s), (M.T = a));
        }
      }
      ((Qe = 1), vm(), bm(), Sm());
    }
  }
  function vm() {
    if (Qe === 1) {
      Qe = 0;
      var e = Gn,
        t = ea,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = M.T), (M.T = null));
        var a = Q.p;
        Q.p = 2;
        var s = ve;
        ve |= 4;
        try {
          Pd(t, e);
          var c = Xc,
            h = ah(e.containerInfo),
            m = c.focusedElem,
            S = c.selectionRange;
          if (
            h !== m &&
            m &&
            m.ownerDocument &&
            lh(m.ownerDocument.documentElement, m)
          ) {
            if (S !== null && ds(m)) {
              var O = S.start,
                B = S.end;
              if ((B === void 0 && (B = O), "selectionStart" in m))
                ((m.selectionStart = O),
                  (m.selectionEnd = Math.min(B, m.value.length)));
              else {
                var q = m.ownerDocument || document,
                  C = (q && q.defaultView) || window;
                if (C.getSelection) {
                  var z = C.getSelection(),
                    F = m.textContent.length,
                    ee = Math.min(S.start, F),
                    Ae = S.end === void 0 ? ee : Math.min(S.end, F);
                  !z.extend && ee > Ae && ((h = Ae), (Ae = ee), (ee = h));
                  var R = nh(m, ee),
                    _ = nh(m, Ae);
                  if (
                    R &&
                    _ &&
                    (z.rangeCount !== 1 ||
                      z.anchorNode !== R.node ||
                      z.anchorOffset !== R.offset ||
                      z.focusNode !== _.node ||
                      z.focusOffset !== _.offset)
                  ) {
                    var A = q.createRange();
                    (A.setStart(R.node, R.offset),
                      z.removeAllRanges(),
                      ee > Ae
                        ? (z.addRange(A), z.extend(_.node, _.offset))
                        : (A.setEnd(_.node, _.offset), z.addRange(A)));
                  }
                }
              }
            }
            for (q = [], z = m; (z = z.parentNode); )
              z.nodeType === 1 &&
                q.push({ element: z, left: z.scrollLeft, top: z.scrollTop });
            for (
              typeof m.focus == "function" && m.focus(), m = 0;
              m < q.length;
              m++
            ) {
              var j = q[m];
              ((j.element.scrollLeft = j.left), (j.element.scrollTop = j.top));
            }
          }
          ((qu = !!Vc), (Xc = Vc = null));
        } finally {
          ((ve = s), (Q.p = a), (M.T = n));
        }
      }
      ((e.current = t), (Qe = 2));
    }
  }
  function bm() {
    if (Qe === 2) {
      Qe = 0;
      var e = Gn,
        t = ea,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = M.T), (M.T = null));
        var a = Q.p;
        Q.p = 2;
        var s = ve;
        ve |= 4;
        try {
          Kd(e, t.alternate, t);
        } finally {
          ((ve = s), (Q.p = a), (M.T = n));
        }
      }
      Qe = 3;
    }
  }
  function Sm() {
    if (Qe === 4 || Qe === 3) {
      ((Qe = 0), Lg());
      var e = Gn,
        t = ea,
        n = bn,
        a = um;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Qe = 5)
        : ((Qe = 0), (ea = Gn = null), Em(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (
        (s === 0 && (Xn = null),
        Jr(n),
        (t = t.stateNode),
        bt && typeof bt.onCommitFiberRoot == "function")
      )
        try {
          bt.onCommitFiberRoot(ga, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = M.T), (s = Q.p), (Q.p = 2), (M.T = null));
        try {
          for (var c = e.onRecoverableError, h = 0; h < a.length; h++) {
            var m = a[h];
            c(m.value, { componentStack: m.stack });
          }
        } finally {
          ((M.T = t), (Q.p = s));
        }
      }
      ((bn & 3) !== 0 && Cu(),
        Pt(e),
        (s = e.pendingLanes),
        (n & 261930) !== 0 && (s & 42) !== 0
          ? e === wc
            ? Pa++
            : ((Pa = 0), (wc = e))
          : (Pa = 0),
        Ia(0));
    }
  }
  function Em(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ma(t)));
  }
  function Cu() {
    return (vm(), bm(), Sm(), _m());
  }
  function _m() {
    if (Qe !== 5) return !1;
    var e = Gn,
      t = Oc;
    Oc = 0;
    var n = Jr(bn),
      a = M.T,
      s = Q.p;
    try {
      ((Q.p = 32 > n ? 32 : n), (M.T = null), (n = Cc), (Cc = null));
      var c = Gn,
        h = bn;
      if (((Qe = 0), (ea = Gn = null), (bn = 0), (ve & 6) !== 0))
        throw Error(r(331));
      var m = ve;
      if (
        ((ve |= 4),
        lm(c.current),
        em(c, c.current, h, n),
        (ve = m),
        Ia(0, !1),
        bt && typeof bt.onPostCommitFiberRoot == "function")
      )
        try {
          bt.onPostCommitFiberRoot(ga, c);
        } catch {}
      return !0;
    } finally {
      ((Q.p = s), (M.T = a), Em(e, t));
    }
  }
  function Tm(e, t, n) {
    ((t = Dt(n, t)),
      (t = uc(e.stateNode, t, 2)),
      (e = Ln(e, t, 2)),
      e !== null && (ba(e, 2), Pt(e)));
  }
  function _e(e, t, n) {
    if (e.tag === 3) Tm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Tm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Xn === null || !Xn.has(a)))
          ) {
            ((e = Dt(n, e)),
              (n = Rd(2)),
              (a = Ln(t, n, 2)),
              a !== null && (Ad(n, a, t, e), ba(a, 2), Pt(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function zc(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new sv();
      var s = new Set();
      a.set(t, s);
    } else ((s = a.get(t)), s === void 0 && ((s = new Set()), a.set(t, s)));
    s.has(n) ||
      ((Tc = !0), s.add(n), (e = dv.bind(null, e, t, n)), t.then(e, e));
  }
  function dv(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Oe === e &&
        (fe & n) === n &&
        (Ue === 4 || (Ue === 3 && (fe & 62914560) === fe && 300 > vt() - Eu)
          ? (ve & 2) === 0 && ta(e, 0)
          : (Rc |= n),
        Il === fe && (Il = 0)),
      Pt(e));
  }
  function Rm(e, t) {
    (t === 0 && (t = vf()), (e = ul(e, t)), e !== null && (ba(e, t), Pt(e)));
  }
  function mv(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Rm(e, n));
  }
  function pv(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (a !== null && a.delete(t), Rm(e, n));
  }
  function yv(e, t) {
    return Qr(e, t);
  }
  var wu = null,
    la = null,
    Dc = !1,
    xu = !1,
    Mc = !1,
    kn = 0;
  function Pt(e) {
    (e !== la &&
      e.next === null &&
      (la === null ? (wu = la = e) : (la = la.next = e)),
      (xu = !0),
      Dc || ((Dc = !0), vv()));
  }
  function Ia(e, t) {
    if (!Mc && xu) {
      Mc = !0;
      do
        for (var n = !1, a = wu; a !== null; ) {
          if (e !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var c = 0;
            else {
              var h = a.suspendedLanes,
                m = a.pingedLanes;
              ((c = (1 << (31 - St(42 | e) + 1)) - 1),
                (c &= s & ~(h & ~m)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0));
            }
            c !== 0 && ((n = !0), wm(a, c));
          } else
            ((c = fe),
              (c = Mi(
                a,
                a === Oe ? c : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (c & 3) === 0 || va(a, c) || ((n = !0), wm(a, c)));
          a = a.next;
        }
      while (n);
      Mc = !1;
    }
  }
  function gv() {
    Am();
  }
  function Am() {
    xu = Dc = !1;
    var e = 0;
    kn !== 0 && wv() && (e = kn);
    for (var t = vt(), n = null, a = wu; a !== null; ) {
      var s = a.next,
        c = Om(a, t);
      (c === 0
        ? ((a.next = null),
          n === null ? (wu = s) : (n.next = s),
          s === null && (la = n))
        : ((n = a), (e !== 0 || (c & 3) !== 0) && (xu = !0)),
        (a = s));
    }
    ((Qe !== 0 && Qe !== 5) || Ia(e), kn !== 0 && (kn = 0));
  }
  function Om(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        s = e.expirationTimes,
        c = e.pendingLanes & -62914561;
      0 < c;
    ) {
      var h = 31 - St(c),
        m = 1 << h,
        S = s[h];
      (S === -1
        ? ((m & n) === 0 || (m & a) !== 0) && (s[h] = Qg(m, t))
        : S <= t && (e.expiredLanes |= m),
        (c &= ~m));
    }
    if (
      ((t = Oe),
      (n = fe),
      (n = Mi(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (a = e.callbackNode),
      n === 0 ||
        (e === t && (Ee === 2 || Ee === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && kr(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || va(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((a !== null && kr(a), Jr(n))) {
        case 2:
        case 8:
          n = yf;
          break;
        case 32:
          n = xi;
          break;
        case 268435456:
          n = gf;
          break;
        default:
          n = xi;
      }
      return (
        (a = Cm.bind(null, e)),
        (n = Qr(n, a)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      a !== null && a !== null && kr(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Cm(e, t) {
    if (Qe !== 0 && Qe !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Cu() && e.callbackNode !== n) return null;
    var a = fe;
    return (
      (a = Mi(
        e,
        e === Oe ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (sm(e, a, t),
          Om(e, vt()),
          e.callbackNode != null && e.callbackNode === n
            ? Cm.bind(null, e)
            : null)
    );
  }
  function wm(e, t) {
    if (Cu()) return null;
    sm(e, t, !0);
  }
  function vv() {
    Nv(function () {
      (ve & 6) !== 0 ? Qr(pf, gv) : Am();
    });
  }
  function Uc() {
    if (kn === 0) {
      var e = Xl;
      (e === 0 && ((e = Ni), (Ni <<= 1), (Ni & 261888) === 0 && (Ni = 256)),
        (kn = e));
    }
    return kn;
  }
  function xm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : ji("" + e);
  }
  function Nm(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function bv(e, t, n, a, s) {
    if (t === "submit" && n && n.stateNode === s) {
      var c = xm((s[st] || null).action),
        h = a.submitter;
      h &&
        ((t = (t = h[st] || null)
          ? xm(t.formAction)
          : h.getAttribute("formAction")),
        t !== null && ((c = t), (h = null)));
      var m = new Vi("action", "action", null, a, s);
      e.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (kn !== 0) {
                  var S = h ? Nm(s, h) : new FormData(s);
                  ec(
                    n,
                    { pending: !0, data: S, method: s.method, action: c },
                    null,
                    S,
                  );
                }
              } else
                typeof c == "function" &&
                  (m.preventDefault(),
                  (S = h ? Nm(s, h) : new FormData(s)),
                  ec(
                    n,
                    { pending: !0, data: S, method: s.method, action: c },
                    c,
                    S,
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var Bc = 0; Bc < gs.length; Bc++) {
    var Lc = gs[Bc],
      Sv = Lc.toLowerCase(),
      Ev = Lc[0].toUpperCase() + Lc.slice(1);
    Vt(Sv, "on" + Ev);
  }
  (Vt(rh, "onAnimationEnd"),
    Vt(sh, "onAnimationIteration"),
    Vt(ch, "onAnimationStart"),
    Vt("dblclick", "onDoubleClick"),
    Vt("focusin", "onFocus"),
    Vt("focusout", "onBlur"),
    Vt(j0, "onTransitionRun"),
    Vt(H0, "onTransitionStart"),
    Vt(q0, "onTransitionCancel"),
    Vt(oh, "onTransitionEnd"),
    wl("onMouseEnter", ["mouseout", "mouseover"]),
    wl("onMouseLeave", ["mouseout", "mouseover"]),
    wl("onPointerEnter", ["pointerout", "pointerover"]),
    wl("onPointerLeave", ["pointerout", "pointerover"]),
    nl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    nl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    nl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    nl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    nl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    nl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var ei =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    _v = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ei),
    );
  function zm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
        s = a.event;
      a = a.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var h = a.length - 1; 0 <= h; h--) {
            var m = a[h],
              S = m.instance,
              O = m.currentTarget;
            if (((m = m.listener), S !== c && s.isPropagationStopped()))
              break e;
            ((c = m), (s.currentTarget = O));
            try {
              c(s);
            } catch (B) {
              Qi(B);
            }
            ((s.currentTarget = null), (c = S));
          }
        else
          for (h = 0; h < a.length; h++) {
            if (
              ((m = a[h]),
              (S = m.instance),
              (O = m.currentTarget),
              (m = m.listener),
              S !== c && s.isPropagationStopped())
            )
              break e;
            ((c = m), (s.currentTarget = O));
            try {
              c(s);
            } catch (B) {
              Qi(B);
            }
            ((s.currentTarget = null), (c = S));
          }
      }
    }
  }
  function oe(e, t) {
    var n = t[Fr];
    n === void 0 && (n = t[Fr] = new Set());
    var a = e + "__bubble";
    n.has(a) || (Dm(t, e, 2, !1), n.add(a));
  }
  function jc(e, t, n) {
    var a = 0;
    (t && (a |= 4), Dm(n, e, a, t));
  }
  var Nu = "_reactListening" + Math.random().toString(36).slice(2);
  function Hc(e) {
    if (!e[Nu]) {
      ((e[Nu] = !0),
        Af.forEach(function (n) {
          n !== "selectionchange" && (_v.has(n) || jc(n, !1, e), jc(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Nu] || ((t[Nu] = !0), jc("selectionchange", !1, t));
    }
  }
  function Dm(e, t, n, a) {
    switch (rp(t)) {
      case 2:
        var s = $v;
        break;
      case 8:
        s = Wv;
        break;
      default:
        s = Ic;
    }
    ((n = s.bind(null, t, n, e)),
      (s = void 0),
      !as ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (s = !0),
      a
        ? s !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: s })
          : e.addEventListener(t, n, !0)
        : s !== void 0
          ? e.addEventListener(t, n, { passive: s })
          : e.addEventListener(t, n, !1));
  }
  function qc(e, t, n, a, s) {
    var c = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var h = a.tag;
        if (h === 3 || h === 4) {
          var m = a.stateNode.containerInfo;
          if (m === s) break;
          if (h === 4)
            for (h = a.return; h !== null; ) {
              var S = h.tag;
              if ((S === 3 || S === 4) && h.stateNode.containerInfo === s)
                return;
              h = h.return;
            }
          for (; m !== null; ) {
            if (((h = Al(m)), h === null)) return;
            if (((S = h.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              a = c = h;
              continue e;
            }
            m = m.parentNode;
          }
        }
        a = a.return;
      }
    jf(function () {
      var O = c,
        B = ns(n),
        q = [];
      e: {
        var C = fh.get(e);
        if (C !== void 0) {
          var z = Vi,
            F = e;
          switch (e) {
            case "keypress":
              if (qi(n) === 0) break e;
            case "keydown":
            case "keyup":
              z = p0;
              break;
            case "focusin":
              ((F = "focus"), (z = ss));
              break;
            case "focusout":
              ((F = "blur"), (z = ss));
              break;
            case "beforeblur":
            case "afterblur":
              z = ss;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = Yf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = l0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = v0;
              break;
            case rh:
            case sh:
            case ch:
              z = u0;
              break;
            case oh:
              z = S0;
              break;
            case "scroll":
            case "scrollend":
              z = t0;
              break;
            case "wheel":
              z = _0;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = s0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Xf;
              break;
            case "toggle":
            case "beforetoggle":
              z = R0;
          }
          var ee = (t & 4) !== 0,
            Ae = !ee && (e === "scroll" || e === "scrollend"),
            R = ee ? (C !== null ? C + "Capture" : null) : C;
          ee = [];
          for (var _ = O, A; _ !== null; ) {
            var j = _;
            if (
              ((A = j.stateNode),
              (j = j.tag),
              (j !== 5 && j !== 26 && j !== 27) ||
                A === null ||
                R === null ||
                ((j = _a(_, R)), j != null && ee.push(ti(_, j, A))),
              Ae)
            )
              break;
            _ = _.return;
          }
          0 < ee.length &&
            ((C = new z(C, F, null, n, B)),
            q.push({ event: C, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((C = e === "mouseover" || e === "pointerover"),
            (z = e === "mouseout" || e === "pointerout"),
            C &&
              n !== ts &&
              (F = n.relatedTarget || n.fromElement) &&
              (Al(F) || F[Rl]))
          )
            break e;
          if (
            (z || C) &&
            ((C =
              B.window === B
                ? B
                : (C = B.ownerDocument)
                  ? C.defaultView || C.parentWindow
                  : window),
            z
              ? ((F = n.relatedTarget || n.toElement),
                (z = O),
                (F = F ? Al(F) : null),
                F !== null &&
                  ((Ae = f(F)),
                  (ee = F.tag),
                  F !== Ae || (ee !== 5 && ee !== 27 && ee !== 6)) &&
                  (F = null))
              : ((z = null), (F = O)),
            z !== F)
          ) {
            if (
              ((ee = Yf),
              (j = "onMouseLeave"),
              (R = "onMouseEnter"),
              (_ = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ee = Xf),
                (j = "onPointerLeave"),
                (R = "onPointerEnter"),
                (_ = "pointer")),
              (Ae = z == null ? C : Ea(z)),
              (A = F == null ? C : Ea(F)),
              (C = new ee(j, _ + "leave", z, n, B)),
              (C.target = Ae),
              (C.relatedTarget = A),
              (j = null),
              Al(B) === O &&
                ((ee = new ee(R, _ + "enter", F, n, B)),
                (ee.target = A),
                (ee.relatedTarget = Ae),
                (j = ee)),
              (Ae = j),
              z && F)
            )
              t: {
                for (ee = Tv, R = z, _ = F, A = 0, j = R; j; j = ee(j)) A++;
                j = 0;
                for (var I = _; I; I = ee(I)) j++;
                for (; 0 < A - j; ) ((R = ee(R)), A--);
                for (; 0 < j - A; ) ((_ = ee(_)), j--);
                for (; A--; ) {
                  if (R === _ || (_ !== null && R === _.alternate)) {
                    ee = R;
                    break t;
                  }
                  ((R = ee(R)), (_ = ee(_)));
                }
                ee = null;
              }
            else ee = null;
            (z !== null && Mm(q, C, z, ee, !1),
              F !== null && Ae !== null && Mm(q, Ae, F, ee, !0));
          }
        }
        e: {
          if (
            ((C = O ? Ea(O) : window),
            (z = C.nodeName && C.nodeName.toLowerCase()),
            z === "select" || (z === "input" && C.type === "file"))
          )
            var pe = $f;
          else if (Jf(C))
            if (Wf) pe = U0;
            else {
              pe = D0;
              var W = z0;
            }
          else
            ((z = C.nodeName),
              !z ||
              z.toLowerCase() !== "input" ||
              (C.type !== "checkbox" && C.type !== "radio")
                ? O && es(O.elementType) && (pe = $f)
                : (pe = M0));
          if (pe && (pe = pe(e, O))) {
            Ff(q, pe, n, B);
            break e;
          }
          (W && W(e, C, O),
            e === "focusout" &&
              O &&
              C.type === "number" &&
              O.memoizedProps.value != null &&
              Ir(C, "number", C.value));
        }
        switch (((W = O ? Ea(O) : window), e)) {
          case "focusin":
            (Jf(W) || W.contentEditable === "true") &&
              ((Ul = W), (ms = O), (Na = null));
            break;
          case "focusout":
            Na = ms = Ul = null;
            break;
          case "mousedown":
            ps = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ps = !1), ih(q, n, B));
            break;
          case "selectionchange":
            if (L0) break;
          case "keydown":
          case "keyup":
            ih(q, n, B);
        }
        var ue;
        if (os)
          e: {
            switch (e) {
              case "compositionstart":
                var he = "onCompositionStart";
                break e;
              case "compositionend":
                he = "onCompositionEnd";
                break e;
              case "compositionupdate":
                he = "onCompositionUpdate";
                break e;
            }
            he = void 0;
          }
        else
          Ml
            ? Zf(e, n) && (he = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (he = "onCompositionStart");
        (he &&
          (Gf &&
            n.locale !== "ko" &&
            (Ml || he !== "onCompositionStart"
              ? he === "onCompositionEnd" && Ml && (ue = Hf())
              : ((xn = B),
                (is = "value" in xn ? xn.value : xn.textContent),
                (Ml = !0))),
          (W = zu(O, he)),
          0 < W.length &&
            ((he = new Vf(he, e, null, n, B)),
            q.push({ event: he, listeners: W }),
            ue
              ? (he.data = ue)
              : ((ue = Kf(n)), ue !== null && (he.data = ue)))),
          (ue = O0 ? C0(e, n) : w0(e, n)) &&
            ((he = zu(O, "onBeforeInput")),
            0 < he.length &&
              ((W = new Vf("onBeforeInput", "beforeinput", null, n, B)),
              q.push({ event: W, listeners: he }),
              (W.data = ue))),
          bv(q, e, O, n, B));
      }
      zm(q, t);
    });
  }
  function ti(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function zu(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var s = e,
        c = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          c === null ||
          ((s = _a(e, n)),
          s != null && a.unshift(ti(e, s, c)),
          (s = _a(e, t)),
          s != null && a.push(ti(e, s, c))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function Tv(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Mm(e, t, n, a, s) {
    for (var c = t._reactName, h = []; n !== null && n !== a; ) {
      var m = n,
        S = m.alternate,
        O = m.stateNode;
      if (((m = m.tag), S !== null && S === a)) break;
      ((m !== 5 && m !== 26 && m !== 27) ||
        O === null ||
        ((S = O),
        s
          ? ((O = _a(n, c)), O != null && h.unshift(ti(n, O, S)))
          : s || ((O = _a(n, c)), O != null && h.push(ti(n, O, S)))),
        (n = n.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Rv = /\r\n?/g,
    Av = /\u0000|\uFFFD/g;
  function Um(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Rv,
        `
`,
      )
      .replace(Av, "");
  }
  function Bm(e, t) {
    return ((t = Um(t)), Um(e) === t);
  }
  function Re(e, t, n, a, s, c) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || Nl(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            Nl(e, "" + a);
        break;
      case "className":
        Bi(e, "class", a);
        break;
      case "tabIndex":
        Bi(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Bi(e, n, a);
        break;
      case "style":
        Bf(e, a, c);
        break;
      case "data":
        if (t !== "object") {
          Bi(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        ((a = ji("" + a)), e.setAttribute(n, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof c == "function" &&
            (n === "formAction"
              ? (t !== "input" && Re(e, t, "name", s.name, s, null),
                Re(e, t, "formEncType", s.formEncType, s, null),
                Re(e, t, "formMethod", s.formMethod, s, null),
                Re(e, t, "formTarget", s.formTarget, s, null))
              : (Re(e, t, "encType", s.encType, s, null),
                Re(e, t, "method", s.method, s, null),
                Re(e, t, "target", s.target, s, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        ((a = ji("" + a)), e.setAttribute(n, a));
        break;
      case "onClick":
        a != null && (e.onclick = ln);
        break;
      case "onScroll":
        a != null && oe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && oe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((n = a.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((n = ji("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(n, "" + a)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(n, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(n, a)
            : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(n, a)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(n)
          : e.setAttribute(n, a);
        break;
      case "popover":
        (oe("beforetoggle", e), oe("toggle", e), Ui(e, "popover", a));
        break;
      case "xlinkActuate":
        nn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        nn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        nn(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        nn(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        nn(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        nn(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        nn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        nn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        nn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Ui(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Ig.get(n) || n), Ui(e, n, a));
    }
  }
  function Yc(e, t, n, a, s, c) {
    switch (n) {
      case "style":
        Bf(e, a, c);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((n = a.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Nl(e, a)
          : (typeof a == "number" || typeof a == "bigint") && Nl(e, "" + a);
        break;
      case "onScroll":
        a != null && oe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && oe("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = ln);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Of.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (t = n.slice(2, s ? n.length - 7 : void 0)),
              (c = e[st] || null),
              (c = c != null ? c[n] : null),
              typeof c == "function" && e.removeEventListener(t, c, s),
              typeof a == "function")
            ) {
              (typeof c != "function" &&
                c !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, a, s));
              break e;
            }
            n in e
              ? (e[n] = a)
              : a === !0
                ? e.setAttribute(n, "")
                : Ui(e, n, a);
          }
    }
  }
  function Ie(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (oe("error", e), oe("load", e));
        var a = !1,
          s = !1,
          c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var h = n[c];
            if (h != null)
              switch (c) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Re(e, t, c, h, n, null);
              }
          }
        (s && Re(e, t, "srcSet", n.srcSet, n, null),
          a && Re(e, t, "src", n.src, n, null));
        return;
      case "input":
        oe("invalid", e);
        var m = (c = h = s = null),
          S = null,
          O = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var B = n[a];
            if (B != null)
              switch (a) {
                case "name":
                  s = B;
                  break;
                case "type":
                  h = B;
                  break;
                case "checked":
                  S = B;
                  break;
                case "defaultChecked":
                  O = B;
                  break;
                case "value":
                  c = B;
                  break;
                case "defaultValue":
                  m = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null) throw Error(r(137, t));
                  break;
                default:
                  Re(e, t, a, B, n, null);
              }
          }
        zf(e, c, m, S, O, h, s, !1);
        return;
      case "select":
        (oe("invalid", e), (a = h = c = null));
        for (s in n)
          if (n.hasOwnProperty(s) && ((m = n[s]), m != null))
            switch (s) {
              case "value":
                c = m;
                break;
              case "defaultValue":
                h = m;
                break;
              case "multiple":
                a = m;
              default:
                Re(e, t, s, m, n, null);
            }
        ((t = c),
          (n = h),
          (e.multiple = !!a),
          t != null ? xl(e, !!a, t, !1) : n != null && xl(e, !!a, n, !0));
        return;
      case "textarea":
        (oe("invalid", e), (c = s = a = null));
        for (h in n)
          if (n.hasOwnProperty(h) && ((m = n[h]), m != null))
            switch (h) {
              case "value":
                a = m;
                break;
              case "defaultValue":
                s = m;
                break;
              case "children":
                c = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(r(91));
                break;
              default:
                Re(e, t, h, m, n, null);
            }
        Mf(e, a, s, c);
        return;
      case "option":
        for (S in n)
          n.hasOwnProperty(S) &&
            ((a = n[S]), a != null) &&
            (S === "selected"
              ? (e.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : Re(e, t, S, a, n, null));
        return;
      case "dialog":
        (oe("beforetoggle", e),
          oe("toggle", e),
          oe("cancel", e),
          oe("close", e));
        break;
      case "iframe":
      case "object":
        oe("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ei.length; a++) oe(ei[a], e);
        break;
      case "image":
        (oe("error", e), oe("load", e));
        break;
      case "details":
        oe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (oe("error", e), oe("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (O in n)
          if (n.hasOwnProperty(O) && ((a = n[O]), a != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Re(e, t, O, a, n, null);
            }
        return;
      default:
        if (es(t)) {
          for (B in n)
            n.hasOwnProperty(B) &&
              ((a = n[B]), a !== void 0 && Yc(e, t, B, a, n, void 0));
          return;
        }
    }
    for (m in n)
      n.hasOwnProperty(m) && ((a = n[m]), a != null && Re(e, t, m, a, n, null));
  }
  function Ov(e, t, n, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          c = null,
          h = null,
          m = null,
          S = null,
          O = null,
          B = null;
        for (z in n) {
          var q = n[z];
          if (n.hasOwnProperty(z) && q != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = q;
              default:
                a.hasOwnProperty(z) || Re(e, t, z, null, a, q);
            }
        }
        for (var C in a) {
          var z = a[C];
          if (((q = n[C]), a.hasOwnProperty(C) && (z != null || q != null)))
            switch (C) {
              case "type":
                c = z;
                break;
              case "name":
                s = z;
                break;
              case "checked":
                O = z;
                break;
              case "defaultChecked":
                B = z;
                break;
              case "value":
                h = z;
                break;
              case "defaultValue":
                m = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(r(137, t));
                break;
              default:
                z !== q && Re(e, t, C, z, a, q);
            }
        }
        Pr(e, h, m, S, O, B, c, s);
        return;
      case "select":
        z = h = m = C = null;
        for (c in n)
          if (((S = n[c]), n.hasOwnProperty(c) && S != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                z = S;
              default:
                a.hasOwnProperty(c) || Re(e, t, c, null, a, S);
            }
        for (s in a)
          if (
            ((c = a[s]),
            (S = n[s]),
            a.hasOwnProperty(s) && (c != null || S != null))
          )
            switch (s) {
              case "value":
                C = c;
                break;
              case "defaultValue":
                m = c;
                break;
              case "multiple":
                h = c;
              default:
                c !== S && Re(e, t, s, c, a, S);
            }
        ((t = m),
          (n = h),
          (a = z),
          C != null
            ? xl(e, !!n, C, !1)
            : !!a != !!n &&
              (t != null ? xl(e, !!n, t, !0) : xl(e, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        z = C = null;
        for (m in n)
          if (
            ((s = n[m]),
            n.hasOwnProperty(m) && s != null && !a.hasOwnProperty(m))
          )
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Re(e, t, m, null, a, s);
            }
        for (h in a)
          if (
            ((s = a[h]),
            (c = n[h]),
            a.hasOwnProperty(h) && (s != null || c != null))
          )
            switch (h) {
              case "value":
                C = s;
                break;
              case "defaultValue":
                z = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== c && Re(e, t, h, s, a, c);
            }
        Df(e, C, z);
        return;
      case "option":
        for (var F in n)
          ((C = n[F]),
            n.hasOwnProperty(F) &&
              C != null &&
              !a.hasOwnProperty(F) &&
              (F === "selected" ? (e.selected = !1) : Re(e, t, F, null, a, C)));
        for (S in a)
          ((C = a[S]),
            (z = n[S]),
            a.hasOwnProperty(S) &&
              C !== z &&
              (C != null || z != null) &&
              (S === "selected"
                ? (e.selected =
                    C && typeof C != "function" && typeof C != "symbol")
                : Re(e, t, S, C, a, z)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ee in n)
          ((C = n[ee]),
            n.hasOwnProperty(ee) &&
              C != null &&
              !a.hasOwnProperty(ee) &&
              Re(e, t, ee, null, a, C));
        for (O in a)
          if (
            ((C = a[O]),
            (z = n[O]),
            a.hasOwnProperty(O) && C !== z && (C != null || z != null))
          )
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(r(137, t));
                break;
              default:
                Re(e, t, O, C, a, z);
            }
        return;
      default:
        if (es(t)) {
          for (var Ae in n)
            ((C = n[Ae]),
              n.hasOwnProperty(Ae) &&
                C !== void 0 &&
                !a.hasOwnProperty(Ae) &&
                Yc(e, t, Ae, void 0, a, C));
          for (B in a)
            ((C = a[B]),
              (z = n[B]),
              !a.hasOwnProperty(B) ||
                C === z ||
                (C === void 0 && z === void 0) ||
                Yc(e, t, B, C, a, z));
          return;
        }
    }
    for (var R in n)
      ((C = n[R]),
        n.hasOwnProperty(R) &&
          C != null &&
          !a.hasOwnProperty(R) &&
          Re(e, t, R, null, a, C));
    for (q in a)
      ((C = a[q]),
        (z = n[q]),
        !a.hasOwnProperty(q) ||
          C === z ||
          (C == null && z == null) ||
          Re(e, t, q, C, a, z));
  }
  function Lm(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Cv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0;
        a < n.length;
        a++
      ) {
        var s = n[a],
          c = s.transferSize,
          h = s.initiatorType,
          m = s.duration;
        if (c && m && Lm(h)) {
          for (h = 0, m = s.responseEnd, a += 1; a < n.length; a++) {
            var S = n[a],
              O = S.startTime;
            if (O > m) break;
            var B = S.transferSize,
              q = S.initiatorType;
            B &&
              Lm(q) &&
              ((S = S.responseEnd), (h += B * (S < m ? 1 : (m - O) / (S - O))));
          }
          if ((--a, (t += (8 * (c + h)) / (s.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Vc = null,
    Xc = null;
  function Du(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function jm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Hm(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Gc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Qc = null;
  function wv() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Qc
        ? !1
        : ((Qc = e), !0)
      : ((Qc = null), !1);
  }
  var qm = typeof setTimeout == "function" ? setTimeout : void 0,
    xv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ym = typeof Promise == "function" ? Promise : void 0,
    Nv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ym < "u"
          ? function (e) {
              return Ym.resolve(null).then(e).catch(zv);
            }
          : qm;
  function zv(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Zn(e) {
    return e === "head";
  }
  function Vm(e, t) {
    var n = t,
      a = 0;
    do {
      var s = n.nextSibling;
      if ((e.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (a === 0) {
            (e.removeChild(s), ra(t));
            return;
          }
          a--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          a++;
        else if (n === "html") ni(e.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = e.ownerDocument.head), ni(n));
          for (var c = n.firstChild; c; ) {
            var h = c.nextSibling,
              m = c.nodeName;
            (c[Sa] ||
              m === "SCRIPT" ||
              m === "STYLE" ||
              (m === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(c),
              (c = h));
          }
        } else n === "body" && ni(e.ownerDocument.body);
      n = s;
    } while (n);
    ra(t);
  }
  function Xm(e, t) {
    var n = e;
    e = 0;
    do {
      var a = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((n = a.data), n === "/$")) {
          if (e === 0) break;
          e--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || e++;
      n = a;
    } while (n);
  }
  function kc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (kc(n), $r(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Dv(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var s = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[Sa])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((c = e.getAttribute("rel")),
                c === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== s.rel ||
                e.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                e.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                e.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((c = e.getAttribute("src")),
                (c !== (s.src == null ? null : s.src) ||
                  e.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  e.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  c &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === c) return e;
      } else return e;
      if (((e = jt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Mv(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = jt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Gm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = jt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Zc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Kc(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Uv(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), n.removeEventListener("DOMContentLoaded", a));
      };
      (n.addEventListener("DOMContentLoaded", a), (e._reactRetry = a));
    }
  }
  function jt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Jc = null;
  function Qm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return jt(e.nextSibling);
          t--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function km(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else (n !== "/$" && n !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Zm(e, t, n) {
    switch (((t = Du(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(r(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(r(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function ni(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    $r(e);
  }
  var Ht = new Map(),
    Km = new Set();
  function Mu(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Sn = Q.d;
  Q.d = { f: Bv, r: Lv, D: jv, C: Hv, L: qv, m: Yv, X: Xv, S: Vv, M: Gv };
  function Bv() {
    var e = Sn.f(),
      t = Ru();
    return e || t;
  }
  function Lv(e) {
    var t = Ol(e);
    t !== null && t.tag === 5 && t.type === "form" ? od(t) : Sn.r(e);
  }
  var aa = typeof document > "u" ? null : document;
  function Jm(e, t, n) {
    var a = aa;
    if (a && typeof t == "string" && t) {
      var s = Nt(t);
      ((s = 'link[rel="' + e + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        Km.has(s) ||
          (Km.add(s),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(s) === null &&
            ((t = a.createElement("link")),
            Ie(t, "link", e),
            ke(t),
            a.head.appendChild(t))));
    }
  }
  function jv(e) {
    (Sn.D(e), Jm("dns-prefetch", e, null));
  }
  function Hv(e, t) {
    (Sn.C(e, t), Jm("preconnect", e, t));
  }
  function qv(e, t, n) {
    Sn.L(e, t, n);
    var a = aa;
    if (a && e && t) {
      var s = 'link[rel="preload"][as="' + Nt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + Nt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + Nt(n.imageSizes) + '"]'))
        : (s += '[href="' + Nt(e) + '"]');
      var c = s;
      switch (t) {
        case "style":
          c = ia(e);
          break;
        case "script":
          c = ua(e);
      }
      Ht.has(c) ||
        ((e = b(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n,
        )),
        Ht.set(c, e),
        a.querySelector(s) !== null ||
          (t === "style" && a.querySelector(li(c))) ||
          (t === "script" && a.querySelector(ai(c))) ||
          ((t = a.createElement("link")),
          Ie(t, "link", e),
          ke(t),
          a.head.appendChild(t)));
    }
  }
  function Yv(e, t) {
    Sn.m(e, t);
    var n = aa;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Nt(a) + '"][href="' + Nt(e) + '"]',
        c = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = ua(e);
      }
      if (
        !Ht.has(c) &&
        ((e = b({ rel: "modulepreload", href: e }, t)),
        Ht.set(c, e),
        n.querySelector(s) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ai(c))) return;
        }
        ((a = n.createElement("link")),
          Ie(a, "link", e),
          ke(a),
          n.head.appendChild(a));
      }
    }
  }
  function Vv(e, t, n) {
    Sn.S(e, t, n);
    var a = aa;
    if (a && e) {
      var s = Cl(a).hoistableStyles,
        c = ia(e);
      t = t || "default";
      var h = s.get(c);
      if (!h) {
        var m = { loading: 0, preload: null };
        if ((h = a.querySelector(li(c)))) m.loading = 5;
        else {
          ((e = b({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = Ht.get(c)) && Fc(e, n));
          var S = (h = a.createElement("link"));
          (ke(S),
            Ie(S, "link", e),
            (S._p = new Promise(function (O, B) {
              ((S.onload = O), (S.onerror = B));
            })),
            S.addEventListener("load", function () {
              m.loading |= 1;
            }),
            S.addEventListener("error", function () {
              m.loading |= 2;
            }),
            (m.loading |= 4),
            Uu(h, t, a));
        }
        ((h = { type: "stylesheet", instance: h, count: 1, state: m }),
          s.set(c, h));
      }
    }
  }
  function Xv(e, t) {
    Sn.X(e, t);
    var n = aa;
    if (n && e) {
      var a = Cl(n).hoistableScripts,
        s = ua(e),
        c = a.get(s);
      c ||
        ((c = n.querySelector(ai(s))),
        c ||
          ((e = b({ src: e, async: !0 }, t)),
          (t = Ht.get(s)) && $c(e, t),
          (c = n.createElement("script")),
          ke(c),
          Ie(c, "link", e),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        a.set(s, c));
    }
  }
  function Gv(e, t) {
    Sn.M(e, t);
    var n = aa;
    if (n && e) {
      var a = Cl(n).hoistableScripts,
        s = ua(e),
        c = a.get(s);
      c ||
        ((c = n.querySelector(ai(s))),
        c ||
          ((e = b({ src: e, async: !0, type: "module" }, t)),
          (t = Ht.get(s)) && $c(e, t),
          (c = n.createElement("script")),
          ke(c),
          Ie(c, "link", e),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        a.set(s, c));
    }
  }
  function Fm(e, t, n, a) {
    var s = (s = se.current) ? Mu(s) : null;
    if (!s) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = ia(n.href)),
            (n = Cl(s).hoistableStyles),
            (a = n.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = ia(n.href);
          var c = Cl(s).hoistableStyles,
            h = c.get(e);
          if (
            (h ||
              ((s = s.ownerDocument || s),
              (h = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(e, h),
              (c = s.querySelector(li(e))) &&
                !c._p &&
                ((h.instance = c), (h.state.loading = 5)),
              Ht.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Ht.set(e, n),
                c || Qv(s, e, n, h.state))),
            t && a === null)
          )
            throw Error(r(528, ""));
          return h;
        }
        if (t && a !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = ua(n)),
              (n = Cl(s).hoistableScripts),
              (a = n.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, e));
    }
  }
  function ia(e) {
    return 'href="' + Nt(e) + '"';
  }
  function li(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function $m(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Qv(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Ie(t, "link", n),
        ke(t),
        e.head.appendChild(t));
  }
  function ua(e) {
    return '[src="' + Nt(e) + '"]';
  }
  function ai(e) {
    return "script[async]" + e;
  }
  function Wm(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + Nt(n.href) + '"]');
          if (a) return ((t.instance = a), ke(a), a);
          var s = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            ke(a),
            Ie(a, "style", s),
            Uu(a, n.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          s = ia(n.href);
          var c = e.querySelector(li(s));
          if (c) return ((t.state.loading |= 4), (t.instance = c), ke(c), c);
          ((a = $m(n)),
            (s = Ht.get(s)) && Fc(a, s),
            (c = (e.ownerDocument || e).createElement("link")),
            ke(c));
          var h = c;
          return (
            (h._p = new Promise(function (m, S) {
              ((h.onload = m), (h.onerror = S));
            })),
            Ie(c, "link", a),
            (t.state.loading |= 4),
            Uu(c, n.precedence, e),
            (t.instance = c)
          );
        case "script":
          return (
            (c = ua(n.src)),
            (s = e.querySelector(ai(c)))
              ? ((t.instance = s), ke(s), s)
              : ((a = n),
                (s = Ht.get(c)) && ((a = b({}, n)), $c(a, s)),
                (e = e.ownerDocument || e),
                (s = e.createElement("script")),
                ke(s),
                Ie(s, "link", a),
                e.head.appendChild(s),
                (t.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Uu(a, n.precedence, e));
    return t.instance;
  }
  function Uu(e, t, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        s = a.length ? a[a.length - 1] : null,
        c = s,
        h = 0;
      h < a.length;
      h++
    ) {
      var m = a[h];
      if (m.dataset.precedence === t) c = m;
      else if (c !== s) break;
    }
    c
      ? c.parentNode.insertBefore(e, c.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Fc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function $c(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Bu = null;
  function Pm(e, t, n) {
    if (Bu === null) {
      var a = new Map(),
        s = (Bu = new Map());
      s.set(n, a);
    } else ((s = Bu), (a = s.get(n)), a || ((a = new Map()), s.set(n, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), n = n.getElementsByTagName(e), s = 0;
      s < n.length;
      s++
    ) {
      var c = n[s];
      if (
        !(
          c[Sa] ||
          c[Fe] ||
          (e === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var h = c.getAttribute(t) || "";
        h = e + h;
        var m = a.get(h);
        m ? m.push(c) : a.set(h, [c]);
      }
    }
    return a;
  }
  function Im(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function kv(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ep(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Zv(e, t, n, a) {
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = ia(a.href),
          c = t.querySelector(li(s));
        if (c) {
          ((t = c._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Lu.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = c),
            ke(c));
          return;
        }
        ((c = t.ownerDocument || t),
          (a = $m(a)),
          (s = Ht.get(s)) && Fc(a, s),
          (c = c.createElement("link")),
          ke(c));
        var h = c;
        ((h._p = new Promise(function (m, S) {
          ((h.onload = m), (h.onerror = S));
        })),
          Ie(c, "link", a),
          (n.instance = c));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Lu.bind(e)),
          t.addEventListener("load", n),
          t.addEventListener("error", n)));
    }
  }
  var Wc = 0;
  function Kv(e, t) {
    return (
      e.stylesheets && e.count === 0 && Hu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Hu(e, e.stylesheets), e.unsuspend)) {
                var c = e.unsuspend;
                ((e.unsuspend = null), c());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Wc === 0 && (Wc = 62500 * Cv());
            var s = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Hu(e, e.stylesheets), e.unsuspend))
                ) {
                  var c = e.unsuspend;
                  ((e.unsuspend = null), c());
                }
              },
              (e.imgBytes > Wc ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(a), clearTimeout(s));
              }
            );
          }
        : null
    );
  }
  function Lu() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Hu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var ju = null;
  function Hu(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (ju = new Map()),
        t.forEach(Jv, e),
        (ju = null),
        Lu.call(e)));
  }
  function Jv(e, t) {
    if (!(t.state.loading & 4)) {
      var n = ju.get(e);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), ju.set(e, n));
        for (
          var s = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            c = 0;
          c < s.length;
          c++
        ) {
          var h = s[c];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") &&
            (n.set(h.dataset.precedence, h), (a = h));
        }
        a && n.set(null, a);
      }
      ((s = t.instance),
        (h = s.getAttribute("data-precedence")),
        (c = n.get(h) || a),
        c === a && n.set(null, s),
        n.set(h, s),
        this.count++,
        (a = Lu.bind(this)),
        s.addEventListener("load", a),
        s.addEventListener("error", a),
        c
          ? c.parentNode.insertBefore(s, c.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(s, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var ii = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0,
  };
  function Fv(e, t, n, a, s, c, h, m, S) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Zr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Zr(0)),
      (this.hiddenUpdates = Zr(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = s),
      (this.onCaughtError = c),
      (this.onRecoverableError = h),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = S),
      (this.incompleteTransitions = new Map()));
  }
  function tp(e, t, n, a, s, c, h, m, S, O, B, q) {
    return (
      (e = new Fv(e, t, n, h, S, O, B, q, m)),
      (t = 1),
      c === !0 && (t |= 24),
      (c = _t(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (t = Ns()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (c.memoizedState = { element: a, isDehydrated: n, cache: t }),
      Us(c),
      e
    );
  }
  function np(e) {
    return e ? ((e = jl), e) : jl;
  }
  function lp(e, t, n, a, s, c) {
    ((s = np(s)),
      a.context === null ? (a.context = s) : (a.pendingContext = s),
      (a = Bn(t)),
      (a.payload = { element: n }),
      (c = c === void 0 ? null : c),
      c !== null && (a.callback = c),
      (n = Ln(e, a, t)),
      n !== null && (mt(n, e, t), ja(n, e, t)));
  }
  function ap(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Pc(e, t) {
    (ap(e, t), (e = e.alternate) && ap(e, t));
  }
  function ip(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ul(e, 67108864);
      (t !== null && mt(t, e, 67108864), Pc(e, 67108864));
    }
  }
  function up(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ct();
      t = Kr(t);
      var n = ul(e, t);
      (n !== null && mt(n, e, t), Pc(e, t));
    }
  }
  var qu = !0;
  function $v(e, t, n, a) {
    var s = M.T;
    M.T = null;
    var c = Q.p;
    try {
      ((Q.p = 2), Ic(e, t, n, a));
    } finally {
      ((Q.p = c), (M.T = s));
    }
  }
  function Wv(e, t, n, a) {
    var s = M.T;
    M.T = null;
    var c = Q.p;
    try {
      ((Q.p = 8), Ic(e, t, n, a));
    } finally {
      ((Q.p = c), (M.T = s));
    }
  }
  function Ic(e, t, n, a) {
    if (qu) {
      var s = eo(a);
      if (s === null) (qc(e, t, a, Yu, n), sp(e, a));
      else if (Iv(s, e, t, n, a)) a.stopPropagation();
      else if ((sp(e, a), t & 4 && -1 < Pv.indexOf(e))) {
        for (; s !== null; ) {
          var c = Ol(s);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var h = tl(c.pendingLanes);
                  if (h !== 0) {
                    var m = c;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; h; ) {
                      var S = 1 << (31 - St(h));
                      ((m.entanglements[1] |= S), (h &= ~S));
                    }
                    (Pt(c), (ve & 6) === 0 && ((_u = vt() + 500), Ia(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((m = ul(c, 2)), m !== null && mt(m, c, 2), Ru(), Pc(c, 2));
            }
          if (((c = eo(a)), c === null && qc(e, t, a, Yu, n), c === s)) break;
          s = c;
        }
        s !== null && a.stopPropagation();
      } else qc(e, t, a, null, n);
    }
  }
  function eo(e) {
    return ((e = ns(e)), to(e));
  }
  var Yu = null;
  function to(e) {
    if (((Yu = null), (e = Al(e)), e !== null)) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = p(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Yu = e), null);
  }
  function rp(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (jg()) {
          case pf:
            return 2;
          case yf:
            return 8;
          case xi:
          case Hg:
            return 32;
          case gf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var no = !1,
    Kn = null,
    Jn = null,
    Fn = null,
    ui = new Map(),
    ri = new Map(),
    $n = [],
    Pv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function sp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Kn = null;
        break;
      case "dragenter":
      case "dragleave":
        Jn = null;
        break;
      case "mouseover":
      case "mouseout":
        Fn = null;
        break;
      case "pointerover":
      case "pointerout":
        ui.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ri.delete(t.pointerId);
    }
  }
  function si(e, t, n, a, s, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: c,
          targetContainers: [s],
        }),
        t !== null && ((t = Ol(t)), t !== null && ip(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function Iv(e, t, n, a, s) {
    switch (t) {
      case "focusin":
        return ((Kn = si(Kn, e, t, n, a, s)), !0);
      case "dragenter":
        return ((Jn = si(Jn, e, t, n, a, s)), !0);
      case "mouseover":
        return ((Fn = si(Fn, e, t, n, a, s)), !0);
      case "pointerover":
        var c = s.pointerId;
        return (ui.set(c, si(ui.get(c) || null, e, t, n, a, s)), !0);
      case "gotpointercapture":
        return (
          (c = s.pointerId),
          ri.set(c, si(ri.get(c) || null, e, t, n, a, s)),
          !0
        );
    }
    return !1;
  }
  function cp(e) {
    var t = Al(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              Tf(e.priority, function () {
                up(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = p(n)), t !== null)) {
            ((e.blockedOn = t),
              Tf(e.priority, function () {
                up(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Vu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = eo(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((ts = a), n.target.dispatchEvent(a), (ts = null));
      } else return ((t = Ol(n)), t !== null && ip(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function op(e, t, n) {
    Vu(e) && n.delete(t);
  }
  function eb() {
    ((no = !1),
      Kn !== null && Vu(Kn) && (Kn = null),
      Jn !== null && Vu(Jn) && (Jn = null),
      Fn !== null && Vu(Fn) && (Fn = null),
      ui.forEach(op),
      ri.forEach(op));
  }
  function Xu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      no ||
        ((no = !0),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, eb)));
  }
  var Gu = null;
  function fp(e) {
    Gu !== e &&
      ((Gu = e),
      l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
        Gu === e && (Gu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            a = e[t + 1],
            s = e[t + 2];
          if (typeof a != "function") {
            if (to(a || n) === null) continue;
            break;
          }
          var c = Ol(n);
          c !== null &&
            (e.splice(t, 3),
            (t -= 3),
            ec(c, { pending: !0, data: s, method: n.method, action: a }, a, s));
        }
      }));
  }
  function ra(e) {
    function t(S) {
      return Xu(S, e);
    }
    (Kn !== null && Xu(Kn, e),
      Jn !== null && Xu(Jn, e),
      Fn !== null && Xu(Fn, e),
      ui.forEach(t),
      ri.forEach(t));
    for (var n = 0; n < $n.length; n++) {
      var a = $n[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < $n.length && ((n = $n[0]), n.blockedOn === null); )
      (cp(n), n.blockedOn === null && $n.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var s = n[a],
          c = n[a + 1],
          h = s[st] || null;
        if (typeof c == "function") h || fp(n);
        else if (h) {
          var m = null;
          if (c && c.hasAttribute("formAction")) {
            if (((s = c), (h = c[st] || null))) m = h.formAction;
            else if (to(s) !== null) continue;
          } else m = h.action;
          (typeof m == "function" ? (n[a + 1] = m) : (n.splice(a, 3), (a -= 3)),
            fp(n));
        }
      }
  }
  function hp() {
    function e(c) {
      c.canIntercept &&
        c.info === "react-transition" &&
        c.intercept({
          handler: function () {
            return new Promise(function (h) {
              return (s = h);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (s !== null && (s(), (s = null)), a || setTimeout(n, 20));
    }
    function n() {
      if (!a && !navigation.transition) {
        var c = navigation.currentEntry;
        c &&
          c.url != null &&
          navigation.navigate(c.url, {
            state: c.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(n, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            s !== null && (s(), (s = null)));
        }
      );
    }
  }
  function lo(e) {
    this._internalRoot = e;
  }
  ((Qu.prototype.render = lo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var n = t.current,
        a = Ct();
      lp(n, a, e, t, null, null);
    }),
    (Qu.prototype.unmount = lo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (lp(e.current, 2, null, e, null, null), Ru(), (t[Rl] = null));
        }
      }));
  function Qu(e) {
    this._internalRoot = e;
  }
  Qu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = _f();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < $n.length && t !== 0 && t < $n[n].priority; n++);
      ($n.splice(n, 0, e), n === 0 && cp(e));
    }
  };
  var dp = i.version;
  if (dp !== "19.2.3") throw Error(r(527, dp, "19.2.3"));
  Q.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(r(188))
        : ((e = Object.keys(e).join(",")), Error(r(268, e)));
    return (
      (e = g(t)),
      (e = e !== null ? v(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var tb = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ku = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ku.isDisabled && ku.supportsFiber)
      try {
        ((ga = ku.inject(tb)), (bt = ku));
      } catch {}
  }
  return (
    (oi.createRoot = function (e, t) {
      if (!o(e)) throw Error(r(299));
      var n = !1,
        a = "",
        s = Sd,
        c = Ed,
        h = _d;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
          t.onCaughtError !== void 0 && (c = t.onCaughtError),
          t.onRecoverableError !== void 0 && (h = t.onRecoverableError)),
        (t = tp(e, 1, !1, null, null, n, a, null, s, c, h, hp)),
        (e[Rl] = t.current),
        Hc(e),
        new lo(t)
      );
    }),
    (oi.hydrateRoot = function (e, t, n) {
      if (!o(e)) throw Error(r(299));
      var a = !1,
        s = "",
        c = Sd,
        h = Ed,
        m = _d,
        S = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (h = n.onCaughtError),
          n.onRecoverableError !== void 0 && (m = n.onRecoverableError),
          n.formState !== void 0 && (S = n.formState)),
        (t = tp(e, 1, !0, t, n ?? null, a, s, S, c, h, m, hp)),
        (t.context = np(null)),
        (n = t.current),
        (a = Ct()),
        (a = Kr(a)),
        (s = Bn(a)),
        (s.callback = null),
        Ln(n, s, a),
        (n = a),
        (t.current.lanes = n),
        ba(t, n),
        Pt(t),
        (e[Rl] = t.current),
        Hc(e),
        new Qu(t)
      );
    }),
    (oi.version = "19.2.3"),
    oi
  );
}
var Tp;
function db() {
  if (Tp) return uo.exports;
  Tp = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return (l(), (uo.exports = hb()), uo.exports);
}
var mb = db();
var Rp = "popstate";
function pb(l = {}) {
  function i(r, o) {
    let { pathname: f, search: d, hash: p } = r.location;
    return Ao(
      "",
      { pathname: f, search: d, hash: p },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function u(r, o) {
    return typeof o == "string" ? o : yi(o);
  }
  return gb(i, u, null, l);
}
function De(l, i) {
  if (l === !1 || l === null || typeof l > "u") throw new Error(i);
}
function Zt(l, i) {
  if (!l) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function yb() {
  return Math.random().toString(36).substring(2, 10);
}
function Ap(l, i) {
  return { usr: l.state, key: l.key, idx: i };
}
function Ao(l, i, u = null, r) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...(typeof i == "string" ? fa(i) : i),
    state: u,
    key: (i && i.key) || r || yb(),
  };
}
function yi({ pathname: l = "/", search: i = "", hash: u = "" }) {
  return (
    i && i !== "?" && (l += i.charAt(0) === "?" ? i : "?" + i),
    u && u !== "#" && (l += u.charAt(0) === "#" ? u : "#" + u),
    l
  );
}
function fa(l) {
  let i = {};
  if (l) {
    let u = l.indexOf("#");
    u >= 0 && ((i.hash = l.substring(u)), (l = l.substring(0, u)));
    let r = l.indexOf("?");
    (r >= 0 && ((i.search = l.substring(r)), (l = l.substring(0, r))),
      l && (i.pathname = l));
  }
  return i;
}
function gb(l, i, u, r = {}) {
  let { window: o = document.defaultView, v5Compat: f = !1 } = r,
    d = o.history,
    p = "POP",
    y = null,
    g = v();
  g == null && ((g = 0), d.replaceState({ ...d.state, idx: g }, ""));
  function v() {
    return (d.state || { idx: null }).idx;
  }
  function b() {
    p = "POP";
    let w = v(),
      X = w == null ? null : w - g;
    ((g = w), y && y({ action: p, location: U.location, delta: X }));
  }
  function D(w, X) {
    p = "PUSH";
    let G = Ao(U.location, w, X);
    g = v() + 1;
    let V = Ap(G, g),
      K = U.createHref(G);
    try {
      d.pushState(V, "", K);
    } catch ($) {
      if ($ instanceof DOMException && $.name === "DataCloneError") throw $;
      o.location.assign(K);
    }
    f && y && y({ action: p, location: U.location, delta: 1 });
  }
  function Y(w, X) {
    p = "REPLACE";
    let G = Ao(U.location, w, X);
    g = v();
    let V = Ap(G, g),
      K = U.createHref(G);
    (d.replaceState(V, "", K),
      f && y && y({ action: p, location: U.location, delta: 0 }));
  }
  function T(w) {
    return vb(w);
  }
  let U = {
    get action() {
      return p;
    },
    get location() {
      return l(o, d);
    },
    listen(w) {
      if (y) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Rp, b),
        (y = w),
        () => {
          (o.removeEventListener(Rp, b), (y = null));
        }
      );
    },
    createHref(w) {
      return i(o, w);
    },
    createURL: T,
    encodeLocation(w) {
      let X = T(w);
      return { pathname: X.pathname, search: X.search, hash: X.hash };
    },
    push: D,
    replace: Y,
    go(w) {
      return d.go(w);
    },
  };
  return U;
}
function vb(l, i = !1) {
  let u = "http://localhost";
  (typeof window < "u" &&
    (u =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    De(u, "No window.location.(origin|href) available to create URL"));
  let r = typeof l == "string" ? l : yi(l);
  return (
    (r = r.replace(/ $/, "%20")),
    !i && r.startsWith("//") && (r = u + r),
    new URL(r, u)
  );
}
function my(l, i, u = "/") {
  return bb(l, i, u, !1);
}
function bb(l, i, u, r) {
  let o = typeof i == "string" ? fa(i) : i,
    f = Rn(o.pathname || "/", u);
  if (f == null) return null;
  let d = py(l);
  Sb(d);
  let p = null;
  for (let y = 0; p == null && y < d.length; ++y) {
    let g = zb(f);
    p = xb(d[y], g, r);
  }
  return p;
}
function py(l, i = [], u = [], r = "", o = !1) {
  let f = (d, p, y = o, g) => {
    let v = {
      relativePath: g === void 0 ? d.path || "" : g,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: p,
      route: d,
    };
    if (v.relativePath.startsWith("/")) {
      if (!v.relativePath.startsWith(r) && y) return;
      (De(
        v.relativePath.startsWith(r),
        `Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (v.relativePath = v.relativePath.slice(r.length)));
    }
    let b = _n([r, v.relativePath]),
      D = u.concat(v);
    (d.children &&
      d.children.length > 0 &&
      (De(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${b}".`,
      ),
      py(d.children, i, D, b, y)),
      !(d.path == null && !d.index) &&
        i.push({ path: b, score: Cb(b, d.index), routesMeta: D }));
  };
  return (
    l.forEach((d, p) => {
      if (d.path === "" || !d.path?.includes("?")) f(d, p);
      else for (let y of yy(d.path)) f(d, p, !0, y);
    }),
    i
  );
}
function yy(l) {
  let i = l.split("/");
  if (i.length === 0) return [];
  let [u, ...r] = i,
    o = u.endsWith("?"),
    f = u.replace(/\?$/, "");
  if (r.length === 0) return o ? [f, ""] : [f];
  let d = yy(r.join("/")),
    p = [];
  return (
    p.push(...d.map((y) => (y === "" ? f : [f, y].join("/")))),
    o && p.push(...d),
    p.map((y) => (l.startsWith("/") && y === "" ? "/" : y))
  );
}
function Sb(l) {
  l.sort((i, u) =>
    i.score !== u.score
      ? u.score - i.score
      : wb(
          i.routesMeta.map((r) => r.childrenIndex),
          u.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
var Eb = /^:[\w-]+$/,
  _b = 3,
  Tb = 2,
  Rb = 1,
  Ab = 10,
  Ob = -2,
  Op = (l) => l === "*";
function Cb(l, i) {
  let u = l.split("/"),
    r = u.length;
  return (
    u.some(Op) && (r += Ob),
    i && (r += Tb),
    u
      .filter((o) => !Op(o))
      .reduce((o, f) => o + (Eb.test(f) ? _b : f === "" ? Rb : Ab), r)
  );
}
function wb(l, i) {
  return l.length === i.length && l.slice(0, -1).every((r, o) => r === i[o])
    ? l[l.length - 1] - i[i.length - 1]
    : 0;
}
function xb(l, i, u = !1) {
  let { routesMeta: r } = l,
    o = {},
    f = "/",
    d = [];
  for (let p = 0; p < r.length; ++p) {
    let y = r[p],
      g = p === r.length - 1,
      v = f === "/" ? i : i.slice(f.length) || "/",
      b = hr(
        { path: y.relativePath, caseSensitive: y.caseSensitive, end: g },
        v,
      ),
      D = y.route;
    if (
      (!b &&
        g &&
        u &&
        !r[r.length - 1].route.index &&
        (b = hr(
          { path: y.relativePath, caseSensitive: y.caseSensitive, end: !1 },
          v,
        )),
      !b)
    )
      return null;
    (Object.assign(o, b.params),
      d.push({
        params: o,
        pathname: _n([f, b.pathname]),
        pathnameBase: Bb(_n([f, b.pathnameBase])),
        route: D,
      }),
      b.pathnameBase !== "/" && (f = _n([f, b.pathnameBase])));
  }
  return d;
}
function hr(l, i) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [u, r] = Nb(l.path, l.caseSensitive, l.end),
    o = i.match(u);
  if (!o) return null;
  let f = o[0],
    d = f.replace(/(.)\/+$/, "$1"),
    p = o.slice(1);
  return {
    params: r.reduce((g, { paramName: v, isOptional: b }, D) => {
      if (v === "*") {
        let T = p[D] || "";
        d = f.slice(0, f.length - T.length).replace(/(.)\/+$/, "$1");
      }
      const Y = p[D];
      return (
        b && !Y ? (g[v] = void 0) : (g[v] = (Y || "").replace(/%2F/g, "/")),
        g
      );
    }, {}),
    pathname: f,
    pathnameBase: d,
    pattern: l,
  };
}
function Nb(l, i = !1, u = !0) {
  Zt(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`,
  );
  let r = [],
    o =
      "^" +
      l
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, p, y) => (
            r.push({ paramName: p, isOptional: y != null }),
            y ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    l.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : u
        ? (o += "\\/*$")
        : l !== "" && l !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, i ? void 0 : "i"), r]
  );
}
function zb(l) {
  try {
    return l
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      Zt(
        !1,
        `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`,
      ),
      l
    );
  }
}
function Rn(l, i) {
  if (i === "/") return l;
  if (!l.toLowerCase().startsWith(i.toLowerCase())) return null;
  let u = i.endsWith("/") ? i.length - 1 : i.length,
    r = l.charAt(u);
  return r && r !== "/" ? null : l.slice(u) || "/";
}
var gy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Db = (l) => gy.test(l);
function Mb(l, i = "/") {
  let {
      pathname: u,
      search: r = "",
      hash: o = "",
    } = typeof l == "string" ? fa(l) : l,
    f;
  if (u)
    if (Db(u)) f = u;
    else {
      if (u.includes("//")) {
        let d = u;
        ((u = u.replace(/\/\/+/g, "/")),
          Zt(
            !1,
            `Pathnames cannot have embedded double slashes - normalizing ${d} -> ${u}`,
          ));
      }
      u.startsWith("/") ? (f = Cp(u.substring(1), "/")) : (f = Cp(u, i));
    }
  else f = i;
  return { pathname: f, search: Lb(r), hash: jb(o) };
}
function Cp(l, i) {
  let u = i.replace(/\/+$/, "").split("/");
  return (
    l.split("/").forEach((o) => {
      o === ".." ? u.length > 1 && u.pop() : o !== "." && u.push(o);
    }),
    u.length > 1 ? u.join("/") : "/"
  );
}
function oo(l, i, u, r) {
  return `Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Ub(l) {
  return l.filter(
    (i, u) => u === 0 || (i.route.path && i.route.path.length > 0),
  );
}
function vy(l) {
  let i = Ub(l);
  return i.map((u, r) => (r === i.length - 1 ? u.pathname : u.pathnameBase));
}
function by(l, i, u, r = !1) {
  let o;
  typeof l == "string"
    ? (o = fa(l))
    : ((o = { ...l }),
      De(
        !o.pathname || !o.pathname.includes("?"),
        oo("?", "pathname", "search", o),
      ),
      De(
        !o.pathname || !o.pathname.includes("#"),
        oo("#", "pathname", "hash", o),
      ),
      De(!o.search || !o.search.includes("#"), oo("#", "search", "hash", o)));
  let f = l === "" || o.pathname === "",
    d = f ? "/" : o.pathname,
    p;
  if (d == null) p = u;
  else {
    let b = i.length - 1;
    if (!r && d.startsWith("..")) {
      let D = d.split("/");
      for (; D[0] === ".."; ) (D.shift(), (b -= 1));
      o.pathname = D.join("/");
    }
    p = b >= 0 ? i[b] : "/";
  }
  let y = Mb(o, p),
    g = d && d !== "/" && d.endsWith("/"),
    v = (f || d === ".") && u.endsWith("/");
  return (!y.pathname.endsWith("/") && (g || v) && (y.pathname += "/"), y);
}
var _n = (l) => l.join("/").replace(/\/\/+/g, "/"),
  Bb = (l) => l.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Lb = (l) => (!l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l),
  jb = (l) => (!l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l),
  Hb = class {
    constructor(l, i, u, r = !1) {
      ((this.status = l),
        (this.statusText = i || ""),
        (this.internal = r),
        u instanceof Error
          ? ((this.data = u.toString()), (this.error = u))
          : (this.data = u));
    }
  };
function qb(l) {
  return (
    l != null &&
    typeof l.status == "number" &&
    typeof l.statusText == "string" &&
    typeof l.internal == "boolean" &&
    "data" in l
  );
}
function Yb(l) {
  return (
    l
      .map((i) => i.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var Sy =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function Ey(l, i) {
  let u = l;
  if (typeof u != "string" || !gy.test(u))
    return { absoluteURL: void 0, isExternal: !1, to: u };
  let r = u,
    o = !1;
  if (Sy)
    try {
      let f = new URL(window.location.href),
        d = u.startsWith("//") ? new URL(f.protocol + u) : new URL(u),
        p = Rn(d.pathname, i);
      d.origin === f.origin && p != null
        ? (u = p + d.search + d.hash)
        : (o = !0);
    } catch {
      Zt(
        !1,
        `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: r, isExternal: o, to: u };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var _y = ["POST", "PUT", "PATCH", "DELETE"];
new Set(_y);
var Vb = ["GET", ..._y];
new Set(Vb);
var ha = N.createContext(null);
ha.displayName = "DataRouter";
var Tr = N.createContext(null);
Tr.displayName = "DataRouterState";
var Xb = N.createContext(!1),
  Ty = N.createContext({ isTransitioning: !1 });
Ty.displayName = "ViewTransition";
var Gb = N.createContext(new Map());
Gb.displayName = "Fetchers";
var Qb = N.createContext(null);
Qb.displayName = "Await";
var Yt = N.createContext(null);
Yt.displayName = "Navigation";
var Si = N.createContext(null);
Si.displayName = "Location";
var On = N.createContext({ outlet: null, matches: [], isDataRoute: !1 });
On.displayName = "Route";
var Zo = N.createContext(null);
Zo.displayName = "RouteError";
var Ry = "REACT_ROUTER_ERROR",
  kb = "REDIRECT",
  Zb = "ROUTE_ERROR_RESPONSE";
function Kb(l) {
  if (l.startsWith(`${Ry}:${kb}:{`))
    try {
      let i = JSON.parse(l.slice(28));
      if (
        typeof i == "object" &&
        i &&
        typeof i.status == "number" &&
        typeof i.statusText == "string" &&
        typeof i.location == "string" &&
        typeof i.reloadDocument == "boolean" &&
        typeof i.replace == "boolean"
      )
        return i;
    } catch {}
}
function Jb(l) {
  if (l.startsWith(`${Ry}:${Zb}:{`))
    try {
      let i = JSON.parse(l.slice(40));
      if (
        typeof i == "object" &&
        i &&
        typeof i.status == "number" &&
        typeof i.statusText == "string"
      )
        return new Hb(i.status, i.statusText, i.data);
    } catch {}
}
function Fb(l, { relative: i } = {}) {
  De(
    Ei(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: u, navigator: r } = N.useContext(Yt),
    { hash: o, pathname: f, search: d } = _i(l, { relative: i }),
    p = f;
  return (
    u !== "/" && (p = f === "/" ? u : _n([u, f])),
    r.createHref({ pathname: p, search: d, hash: o })
  );
}
function Ei() {
  return N.useContext(Si) != null;
}
function Tl() {
  return (
    De(
      Ei(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    N.useContext(Si).location
  );
}
var Ay =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Oy(l) {
  N.useContext(Yt).static || N.useLayoutEffect(l);
}
function Ko() {
  let { isDataRoute: l } = N.useContext(On);
  return l ? sS() : $b();
}
function $b() {
  De(
    Ei(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let l = N.useContext(ha),
    { basename: i, navigator: u } = N.useContext(Yt),
    { matches: r } = N.useContext(On),
    { pathname: o } = Tl(),
    f = JSON.stringify(vy(r)),
    d = N.useRef(!1);
  return (
    Oy(() => {
      d.current = !0;
    }),
    N.useCallback(
      (y, g = {}) => {
        if ((Zt(d.current, Ay), !d.current)) return;
        if (typeof y == "number") {
          u.go(y);
          return;
        }
        let v = by(y, JSON.parse(f), o, g.relative === "path");
        (l == null &&
          i !== "/" &&
          (v.pathname = v.pathname === "/" ? i : _n([i, v.pathname])),
          (g.replace ? u.replace : u.push)(v, g.state, g));
      },
      [i, u, f, o, l],
    )
  );
}
N.createContext(null);
function _i(l, { relative: i } = {}) {
  let { matches: u } = N.useContext(On),
    { pathname: r } = Tl(),
    o = JSON.stringify(vy(u));
  return N.useMemo(() => by(l, JSON.parse(o), r, i === "path"), [l, o, r, i]);
}
function Wb(l, i) {
  return Cy(l, i);
}
function Cy(l, i, u, r, o) {
  De(
    Ei(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: f } = N.useContext(Yt),
    { matches: d } = N.useContext(On),
    p = d[d.length - 1],
    y = p ? p.params : {},
    g = p ? p.pathname : "/",
    v = p ? p.pathnameBase : "/",
    b = p && p.route;
  {
    let G = (b && b.path) || "";
    xy(
      g,
      !b || G.endsWith("*") || G.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G === "/" ? "*" : `${G}/*`}">.`,
    );
  }
  let D = Tl(),
    Y;
  if (i) {
    let G = typeof i == "string" ? fa(i) : i;
    (De(
      v === "/" || G.pathname?.startsWith(v),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${G.pathname}" was given in the \`location\` prop.`,
    ),
      (Y = G));
  } else Y = D;
  let T = Y.pathname || "/",
    U = T;
  if (v !== "/") {
    let G = v.replace(/^\//, "").split("/");
    U = "/" + T.replace(/^\//, "").split("/").slice(G.length).join("/");
  }
  let w = my(l, { pathname: U });
  (Zt(
    b || w != null,
    `No routes matched location "${Y.pathname}${Y.search}${Y.hash}" `,
  ),
    Zt(
      w == null ||
        w[w.length - 1].route.element !== void 0 ||
        w[w.length - 1].route.Component !== void 0 ||
        w[w.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${Y.pathname}${Y.search}${Y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let X = nS(
    w &&
      w.map((G) =>
        Object.assign({}, G, {
          params: Object.assign({}, y, G.params),
          pathname: _n([
            v,
            f.encodeLocation
              ? f.encodeLocation(
                  G.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23"),
                ).pathname
              : G.pathname,
          ]),
          pathnameBase:
            G.pathnameBase === "/"
              ? v
              : _n([
                  v,
                  f.encodeLocation
                    ? f.encodeLocation(
                        G.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : G.pathnameBase,
                ]),
        }),
      ),
    d,
    u,
    r,
    o,
  );
  return i && X
    ? N.createElement(
        Si.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...Y,
            },
            navigationType: "POP",
          },
        },
        X,
      )
    : X;
}
function Pb() {
  let l = rS(),
    i = qb(l)
      ? `${l.status} ${l.statusText}`
      : l instanceof Error
        ? l.message
        : JSON.stringify(l),
    u = l instanceof Error ? l.stack : null,
    r = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: r },
    f = { padding: "2px 4px", backgroundColor: r },
    d = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", l),
    (d = N.createElement(
      N.Fragment,
      null,
      N.createElement("p", null, "💿 Hey developer 👋"),
      N.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        N.createElement("code", { style: f }, "ErrorBoundary"),
        " or",
        " ",
        N.createElement("code", { style: f }, "errorElement"),
        " prop on your route.",
      ),
    )),
    N.createElement(
      N.Fragment,
      null,
      N.createElement("h2", null, "Unexpected Application Error!"),
      N.createElement("h3", { style: { fontStyle: "italic" } }, i),
      u ? N.createElement("pre", { style: o }, u) : null,
      d,
    )
  );
}
var Ib = N.createElement(Pb, null),
  wy = class extends N.Component {
    constructor(l) {
      (super(l),
        (this.state = {
          location: l.location,
          revalidation: l.revalidation,
          error: l.error,
        }));
    }
    static getDerivedStateFromError(l) {
      return { error: l };
    }
    static getDerivedStateFromProps(l, i) {
      return i.location !== l.location ||
        (i.revalidation !== "idle" && l.revalidation === "idle")
        ? { error: l.error, location: l.location, revalidation: l.revalidation }
        : {
            error: l.error !== void 0 ? l.error : i.error,
            location: i.location,
            revalidation: l.revalidation || i.revalidation,
          };
    }
    componentDidCatch(l, i) {
      this.props.onError
        ? this.props.onError(l, i)
        : console.error(
            "React Router caught the following error during render",
            l,
          );
    }
    render() {
      let l = this.state.error;
      if (
        this.context &&
        typeof l == "object" &&
        l &&
        "digest" in l &&
        typeof l.digest == "string"
      ) {
        const u = Jb(l.digest);
        u && (l = u);
      }
      let i =
        l !== void 0
          ? N.createElement(
              On.Provider,
              { value: this.props.routeContext },
              N.createElement(Zo.Provider, {
                value: l,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? N.createElement(eS, { error: l }, i) : i;
    }
  };
wy.contextType = Xb;
var fo = new WeakMap();
function eS({ children: l, error: i }) {
  let { basename: u } = N.useContext(Yt);
  if (
    typeof i == "object" &&
    i &&
    "digest" in i &&
    typeof i.digest == "string"
  ) {
    let r = Kb(i.digest);
    if (r) {
      let o = fo.get(i);
      if (o) throw o;
      let f = Ey(r.location, u);
      if (Sy && !fo.get(i))
        if (f.isExternal || r.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const d = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(f.to, {
              replace: r.replace,
            }),
          );
          throw (fo.set(i, d), d);
        }
      return N.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${f.absoluteURL || f.to}`,
      });
    }
  }
  return l;
}
function tS({ routeContext: l, match: i, children: u }) {
  let r = N.useContext(ha);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = i.route.id),
    N.createElement(On.Provider, { value: l }, u)
  );
}
function nS(l, i = [], u = null, r = null, o = null) {
  if (l == null) {
    if (!u) return null;
    if (u.errors) l = u.matches;
    else if (i.length === 0 && !u.initialized && u.matches.length > 0)
      l = u.matches;
    else return null;
  }
  let f = l,
    d = u?.errors;
  if (d != null) {
    let v = f.findIndex((b) => b.route.id && d?.[b.route.id] !== void 0);
    (De(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`,
    ),
      (f = f.slice(0, Math.min(f.length, v + 1))));
  }
  let p = !1,
    y = -1;
  if (u)
    for (let v = 0; v < f.length; v++) {
      let b = f[v];
      if (
        ((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (y = v),
        b.route.id)
      ) {
        let { loaderData: D, errors: Y } = u,
          T =
            b.route.loader &&
            !D.hasOwnProperty(b.route.id) &&
            (!Y || Y[b.route.id] === void 0);
        if (b.route.lazy || T) {
          ((p = !0), y >= 0 ? (f = f.slice(0, y + 1)) : (f = [f[0]]));
          break;
        }
      }
    }
  let g =
    u && r
      ? (v, b) => {
          r(v, {
            location: u.location,
            params: u.matches?.[0]?.params ?? {},
            unstable_pattern: Yb(u.matches),
            errorInfo: b,
          });
        }
      : void 0;
  return f.reduceRight((v, b, D) => {
    let Y,
      T = !1,
      U = null,
      w = null;
    u &&
      ((Y = d && b.route.id ? d[b.route.id] : void 0),
      (U = b.route.errorElement || Ib),
      p &&
        (y < 0 && D === 0
          ? (xy(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (T = !0),
            (w = null))
          : y === D &&
            ((T = !0), (w = b.route.hydrateFallbackElement || null))));
    let X = i.concat(f.slice(0, D + 1)),
      G = () => {
        let V;
        return (
          Y
            ? (V = U)
            : T
              ? (V = w)
              : b.route.Component
                ? (V = N.createElement(b.route.Component, null))
                : b.route.element
                  ? (V = b.route.element)
                  : (V = v),
          N.createElement(tS, {
            match: b,
            routeContext: { outlet: v, matches: X, isDataRoute: u != null },
            children: V,
          })
        );
      };
    return u && (b.route.ErrorBoundary || b.route.errorElement || D === 0)
      ? N.createElement(wy, {
          location: u.location,
          revalidation: u.revalidation,
          component: U,
          error: Y,
          children: G(),
          routeContext: { outlet: null, matches: X, isDataRoute: !0 },
          onError: g,
        })
      : G();
  }, null);
}
function Jo(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function lS(l) {
  let i = N.useContext(ha);
  return (De(i, Jo(l)), i);
}
function aS(l) {
  let i = N.useContext(Tr);
  return (De(i, Jo(l)), i);
}
function iS(l) {
  let i = N.useContext(On);
  return (De(i, Jo(l)), i);
}
function Fo(l) {
  let i = iS(l),
    u = i.matches[i.matches.length - 1];
  return (
    De(
      u.route.id,
      `${l} can only be used on routes that contain a unique "id"`,
    ),
    u.route.id
  );
}
function uS() {
  return Fo("useRouteId");
}
function rS() {
  let l = N.useContext(Zo),
    i = aS("useRouteError"),
    u = Fo("useRouteError");
  return l !== void 0 ? l : i.errors?.[u];
}
function sS() {
  let { router: l } = lS("useNavigate"),
    i = Fo("useNavigate"),
    u = N.useRef(!1);
  return (
    Oy(() => {
      u.current = !0;
    }),
    N.useCallback(
      async (o, f = {}) => {
        (Zt(u.current, Ay),
          u.current &&
            (typeof o == "number"
              ? await l.navigate(o)
              : await l.navigate(o, { fromRouteId: i, ...f })));
      },
      [l, i],
    )
  );
}
var wp = {};
function xy(l, i, u) {
  !i && !wp[l] && ((wp[l] = !0), Zt(!1, u));
}
N.memo(cS);
function cS({ routes: l, future: i, state: u, onError: r }) {
  return Cy(l, void 0, u, r, i);
}
function er(l) {
  De(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function oS({
  basename: l = "/",
  children: i = null,
  location: u,
  navigationType: r = "POP",
  navigator: o,
  static: f = !1,
  unstable_useTransitions: d,
}) {
  De(
    !Ei(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let p = l.replace(/^\/*/, "/"),
    y = N.useMemo(
      () => ({
        basename: p,
        navigator: o,
        static: f,
        unstable_useTransitions: d,
        future: {},
      }),
      [p, o, f, d],
    );
  typeof u == "string" && (u = fa(u));
  let {
      pathname: g = "/",
      search: v = "",
      hash: b = "",
      state: D = null,
      key: Y = "default",
    } = u,
    T = N.useMemo(() => {
      let U = Rn(g, p);
      return U == null
        ? null
        : {
            location: { pathname: U, search: v, hash: b, state: D, key: Y },
            navigationType: r,
          };
    }, [p, g, v, b, D, Y, r]);
  return (
    Zt(
      T != null,
      `<Router basename="${p}"> is not able to match the URL "${g}${v}${b}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    T == null
      ? null
      : N.createElement(
          Yt.Provider,
          { value: y },
          N.createElement(Si.Provider, { children: i, value: T }),
        )
  );
}
function fS({ children: l, location: i }) {
  return Wb(Oo(l), i);
}
function Oo(l, i = []) {
  let u = [];
  return (
    N.Children.forEach(l, (r, o) => {
      if (!N.isValidElement(r)) return;
      let f = [...i, o];
      if (r.type === N.Fragment) {
        u.push.apply(u, Oo(r.props.children, f));
        return;
      }
      (De(
        r.type === er,
        `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        De(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes.",
        ));
      let d = {
        id: r.props.id || f.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        middleware: r.props.middleware,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (d.children = Oo(r.props.children, f)), u.push(d));
    }),
    u
  );
}
var tr = "get",
  nr = "application/x-www-form-urlencoded";
function Rr(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function hS(l) {
  return Rr(l) && l.tagName.toLowerCase() === "button";
}
function dS(l) {
  return Rr(l) && l.tagName.toLowerCase() === "form";
}
function mS(l) {
  return Rr(l) && l.tagName.toLowerCase() === "input";
}
function pS(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function yS(l, i) {
  return l.button === 0 && (!i || i === "_self") && !pS(l);
}
var Zu = null;
function gS() {
  if (Zu === null)
    try {
      (new FormData(document.createElement("form"), 0), (Zu = !1));
    } catch {
      Zu = !0;
    }
  return Zu;
}
var vS = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function ho(l) {
  return l != null && !vS.has(l)
    ? (Zt(
        !1,
        `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nr}"`,
      ),
      null)
    : l;
}
function bS(l, i) {
  let u, r, o, f, d;
  if (dS(l)) {
    let p = l.getAttribute("action");
    ((r = p ? Rn(p, i) : null),
      (u = l.getAttribute("method") || tr),
      (o = ho(l.getAttribute("enctype")) || nr),
      (f = new FormData(l)));
  } else if (hS(l) || (mS(l) && (l.type === "submit" || l.type === "image"))) {
    let p = l.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let y = l.getAttribute("formaction") || p.getAttribute("action");
    if (
      ((r = y ? Rn(y, i) : null),
      (u = l.getAttribute("formmethod") || p.getAttribute("method") || tr),
      (o =
        ho(l.getAttribute("formenctype")) ||
        ho(p.getAttribute("enctype")) ||
        nr),
      (f = new FormData(p, l)),
      !gS())
    ) {
      let { name: g, type: v, value: b } = l;
      if (v === "image") {
        let D = g ? `${g}.` : "";
        (f.append(`${D}x`, "0"), f.append(`${D}y`, "0"));
      } else g && f.append(g, b);
    }
  } else {
    if (Rr(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((u = tr), (r = null), (o = nr), (d = l));
  }
  return (
    f && o === "text/plain" && ((d = f), (f = void 0)),
    { action: r, method: u.toLowerCase(), encType: o, formData: f, body: d }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function $o(l, i) {
  if (l === !1 || l === null || typeof l > "u") throw new Error(i);
}
function SS(l, i, u, r) {
  let o =
    typeof l == "string"
      ? new URL(
          l,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : l;
  return (
    u
      ? o.pathname.endsWith("/")
        ? (o.pathname = `${o.pathname}_.${r}`)
        : (o.pathname = `${o.pathname}.${r}`)
      : o.pathname === "/"
        ? (o.pathname = `_root.${r}`)
        : i && Rn(o.pathname, i) === "/"
          ? (o.pathname = `${i.replace(/\/$/, "")}/_root.${r}`)
          : (o.pathname = `${o.pathname.replace(/\/$/, "")}.${r}`),
    o
  );
}
async function ES(l, i) {
  if (l.id in i) return i[l.id];
  try {
    let u = await import(l.module);
    return ((i[l.id] = u), u);
  } catch (u) {
    return (
      console.error(
        `Error loading route module \`${l.module}\`, reloading page...`,
      ),
      console.error(u),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function _S(l) {
  return l == null
    ? !1
    : l.href == null
      ? l.rel === "preload" &&
        typeof l.imageSrcSet == "string" &&
        typeof l.imageSizes == "string"
      : typeof l.rel == "string" && typeof l.href == "string";
}
async function TS(l, i, u) {
  let r = await Promise.all(
    l.map(async (o) => {
      let f = i.routes[o.route.id];
      if (f) {
        let d = await ES(f, u);
        return d.links ? d.links() : [];
      }
      return [];
    }),
  );
  return CS(
    r
      .flat(1)
      .filter(_S)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" },
      ),
  );
}
function xp(l, i, u, r, o, f) {
  let d = (y, g) => (u[g] ? y.route.id !== u[g].route.id : !0),
    p = (y, g) =>
      u[g].pathname !== y.pathname ||
      (u[g].route.path?.endsWith("*") && u[g].params["*"] !== y.params["*"]);
  return f === "assets"
    ? i.filter((y, g) => d(y, g) || p(y, g))
    : f === "data"
      ? i.filter((y, g) => {
          let v = r.routes[y.route.id];
          if (!v || !v.hasLoader) return !1;
          if (d(y, g) || p(y, g)) return !0;
          if (y.route.shouldRevalidate) {
            let b = y.route.shouldRevalidate({
              currentUrl: new URL(
                o.pathname + o.search + o.hash,
                window.origin,
              ),
              currentParams: u[0]?.params || {},
              nextUrl: new URL(l, window.origin),
              nextParams: y.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof b == "boolean") return b;
          }
          return !0;
        })
      : [];
}
function RS(l, i, { includeHydrateFallback: u } = {}) {
  return AS(
    l
      .map((r) => {
        let o = i.routes[r.route.id];
        if (!o) return [];
        let f = [o.module];
        return (
          o.clientActionModule && (f = f.concat(o.clientActionModule)),
          o.clientLoaderModule && (f = f.concat(o.clientLoaderModule)),
          u &&
            o.hydrateFallbackModule &&
            (f = f.concat(o.hydrateFallbackModule)),
          o.imports && (f = f.concat(o.imports)),
          f
        );
      })
      .flat(1),
  );
}
function AS(l) {
  return [...new Set(l)];
}
function OS(l) {
  let i = {},
    u = Object.keys(l).sort();
  for (let r of u) i[r] = l[r];
  return i;
}
function CS(l, i) {
  let u = new Set();
  return (
    new Set(i),
    l.reduce((r, o) => {
      let f = JSON.stringify(OS(o));
      return (u.has(f) || (u.add(f), r.push({ key: f, link: o })), r);
    }, [])
  );
}
function Ny() {
  let l = N.useContext(ha);
  return (
    $o(
      l,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    l
  );
}
function wS() {
  let l = N.useContext(Tr);
  return (
    $o(
      l,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    l
  );
}
var Wo = N.createContext(void 0);
Wo.displayName = "FrameworkContext";
function zy() {
  let l = N.useContext(Wo);
  return (
    $o(l, "You must render this element inside a <HydratedRouter> element"),
    l
  );
}
function xS(l, i) {
  let u = N.useContext(Wo),
    [r, o] = N.useState(!1),
    [f, d] = N.useState(!1),
    {
      onFocus: p,
      onBlur: y,
      onMouseEnter: g,
      onMouseLeave: v,
      onTouchStart: b,
    } = i,
    D = N.useRef(null);
  (N.useEffect(() => {
    if ((l === "render" && d(!0), l === "viewport")) {
      let U = (X) => {
          X.forEach((G) => {
            d(G.isIntersecting);
          });
        },
        w = new IntersectionObserver(U, { threshold: 0.5 });
      return (
        D.current && w.observe(D.current),
        () => {
          w.disconnect();
        }
      );
    }
  }, [l]),
    N.useEffect(() => {
      if (r) {
        let U = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(U);
        };
      }
    }, [r]));
  let Y = () => {
      o(!0);
    },
    T = () => {
      (o(!1), d(!1));
    };
  return u
    ? l !== "intent"
      ? [f, D, {}]
      : [
          f,
          D,
          {
            onFocus: fi(p, Y),
            onBlur: fi(y, T),
            onMouseEnter: fi(g, Y),
            onMouseLeave: fi(v, T),
            onTouchStart: fi(b, Y),
          },
        ]
    : [!1, D, {}];
}
function fi(l, i) {
  return (u) => {
    (l && l(u), u.defaultPrevented || i(u));
  };
}
function NS({ page: l, ...i }) {
  let { router: u } = Ny(),
    r = N.useMemo(() => my(u.routes, l, u.basename), [u.routes, l, u.basename]);
  return r ? N.createElement(DS, { page: l, matches: r, ...i }) : null;
}
function zS(l) {
  let { manifest: i, routeModules: u } = zy(),
    [r, o] = N.useState([]);
  return (
    N.useEffect(() => {
      let f = !1;
      return (
        TS(l, i, u).then((d) => {
          f || o(d);
        }),
        () => {
          f = !0;
        }
      );
    }, [l, i, u]),
    r
  );
}
function DS({ page: l, matches: i, ...u }) {
  let r = Tl(),
    { future: o, manifest: f, routeModules: d } = zy(),
    { basename: p } = Ny(),
    { loaderData: y, matches: g } = wS(),
    v = N.useMemo(() => xp(l, i, g, f, r, "data"), [l, i, g, f, r]),
    b = N.useMemo(() => xp(l, i, g, f, r, "assets"), [l, i, g, f, r]),
    D = N.useMemo(() => {
      if (l === r.pathname + r.search + r.hash) return [];
      let U = new Set(),
        w = !1;
      if (
        (i.forEach((G) => {
          let V = f.routes[G.route.id];
          !V ||
            !V.hasLoader ||
            ((!v.some((K) => K.route.id === G.route.id) &&
              G.route.id in y &&
              d[G.route.id]?.shouldRevalidate) ||
            V.hasClientLoader
              ? (w = !0)
              : U.add(G.route.id));
        }),
        U.size === 0)
      )
        return [];
      let X = SS(l, p, o.unstable_trailingSlashAwareDataRequests, "data");
      return (
        w &&
          U.size > 0 &&
          X.searchParams.set(
            "_routes",
            i
              .filter((G) => U.has(G.route.id))
              .map((G) => G.route.id)
              .join(","),
          ),
        [X.pathname + X.search]
      );
    }, [p, o.unstable_trailingSlashAwareDataRequests, y, r, f, v, i, l, d]),
    Y = N.useMemo(() => RS(b, f), [b, f]),
    T = zS(b);
  return N.createElement(
    N.Fragment,
    null,
    D.map((U) =>
      N.createElement("link", {
        key: U,
        rel: "prefetch",
        as: "fetch",
        href: U,
        ...u,
      }),
    ),
    Y.map((U) =>
      N.createElement("link", { key: U, rel: "modulepreload", href: U, ...u }),
    ),
    T.map(({ key: U, link: w }) =>
      N.createElement("link", { key: U, nonce: u.nonce, ...w }),
    ),
  );
}
function MS(...l) {
  return (i) => {
    l.forEach((u) => {
      typeof u == "function" ? u(i) : u != null && (u.current = i);
    });
  };
}
var US =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  US && (window.__reactRouterVersion = "7.12.0");
} catch {}
function BS({
  basename: l,
  children: i,
  unstable_useTransitions: u,
  window: r,
}) {
  let o = N.useRef();
  o.current == null && (o.current = pb({ window: r, v5Compat: !0 }));
  let f = o.current,
    [d, p] = N.useState({ action: f.action, location: f.location }),
    y = N.useCallback(
      (g) => {
        u === !1 ? p(g) : N.startTransition(() => p(g));
      },
      [u],
    );
  return (
    N.useLayoutEffect(() => f.listen(y), [f, y]),
    N.createElement(oS, {
      basename: l,
      children: i,
      location: d.location,
      navigationType: d.action,
      navigator: f,
      unstable_useTransitions: u,
    })
  );
}
var Dy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ar = N.forwardRef(function (
    {
      onClick: i,
      discover: u = "render",
      prefetch: r = "none",
      relative: o,
      reloadDocument: f,
      replace: d,
      state: p,
      target: y,
      to: g,
      preventScrollReset: v,
      viewTransition: b,
      unstable_defaultShouldRevalidate: D,
      ...Y
    },
    T,
  ) {
    let { basename: U, unstable_useTransitions: w } = N.useContext(Yt),
      X = typeof g == "string" && Dy.test(g),
      G = Ey(g, U);
    g = G.to;
    let V = Fb(g, { relative: o }),
      [K, $, te] = xS(r, Y),
      Z = qS(g, {
        replace: d,
        state: p,
        target: y,
        preventScrollReset: v,
        relative: o,
        viewTransition: b,
        unstable_defaultShouldRevalidate: D,
        unstable_useTransitions: w,
      });
    function re(Ke) {
      (i && i(Ke), Ke.defaultPrevented || Z(Ke));
    }
    let Ce = N.createElement("a", {
      ...Y,
      ...te,
      href: G.absoluteURL || V,
      onClick: G.isExternal || f ? i : re,
      ref: MS(T, $),
      target: y,
      "data-discover": !X && u === "render" ? "true" : void 0,
    });
    return K && !X
      ? N.createElement(N.Fragment, null, Ce, N.createElement(NS, { page: V }))
      : Ce;
  });
Ar.displayName = "Link";
var LS = N.forwardRef(function (
  {
    "aria-current": i = "page",
    caseSensitive: u = !1,
    className: r = "",
    end: o = !1,
    style: f,
    to: d,
    viewTransition: p,
    children: y,
    ...g
  },
  v,
) {
  let b = _i(d, { relative: g.relative }),
    D = Tl(),
    Y = N.useContext(Tr),
    { navigator: T, basename: U } = N.useContext(Yt),
    w = Y != null && QS(b) && p === !0,
    X = T.encodeLocation ? T.encodeLocation(b).pathname : b.pathname,
    G = D.pathname,
    V =
      Y && Y.navigation && Y.navigation.location
        ? Y.navigation.location.pathname
        : null;
  (u ||
    ((G = G.toLowerCase()),
    (V = V ? V.toLowerCase() : null),
    (X = X.toLowerCase())),
    V && U && (V = Rn(V, U) || V));
  const K = X !== "/" && X.endsWith("/") ? X.length - 1 : X.length;
  let $ = G === X || (!o && G.startsWith(X) && G.charAt(K) === "/"),
    te =
      V != null &&
      (V === X || (!o && V.startsWith(X) && V.charAt(X.length) === "/")),
    Z = { isActive: $, isPending: te, isTransitioning: w },
    re = $ ? i : void 0,
    Ce;
  typeof r == "function"
    ? (Ce = r(Z))
    : (Ce = [
        r,
        $ ? "active" : null,
        te ? "pending" : null,
        w ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Ke = typeof f == "function" ? f(Z) : f;
  return N.createElement(
    Ar,
    {
      ...g,
      "aria-current": re,
      className: Ce,
      ref: v,
      style: Ke,
      to: d,
      viewTransition: p,
    },
    typeof y == "function" ? y(Z) : y,
  );
});
LS.displayName = "NavLink";
var jS = N.forwardRef(
  (
    {
      discover: l = "render",
      fetcherKey: i,
      navigate: u,
      reloadDocument: r,
      replace: o,
      state: f,
      method: d = tr,
      action: p,
      onSubmit: y,
      relative: g,
      preventScrollReset: v,
      viewTransition: b,
      unstable_defaultShouldRevalidate: D,
      ...Y
    },
    T,
  ) => {
    let { unstable_useTransitions: U } = N.useContext(Yt),
      w = XS(),
      X = GS(p, { relative: g }),
      G = d.toLowerCase() === "get" ? "get" : "post",
      V = typeof p == "string" && Dy.test(p),
      K = ($) => {
        if ((y && y($), $.defaultPrevented)) return;
        $.preventDefault();
        let te = $.nativeEvent.submitter,
          Z = te?.getAttribute("formmethod") || d,
          re = () =>
            w(te || $.currentTarget, {
              fetcherKey: i,
              method: Z,
              navigate: u,
              replace: o,
              state: f,
              relative: g,
              preventScrollReset: v,
              viewTransition: b,
              unstable_defaultShouldRevalidate: D,
            });
        U && u !== !1 ? N.startTransition(() => re()) : re();
      };
    return N.createElement("form", {
      ref: T,
      method: G,
      action: X,
      onSubmit: r ? y : K,
      ...Y,
      "data-discover": !V && l === "render" ? "true" : void 0,
    });
  },
);
jS.displayName = "Form";
function HS(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function My(l) {
  let i = N.useContext(ha);
  return (De(i, HS(l)), i);
}
function qS(
  l,
  {
    target: i,
    replace: u,
    state: r,
    preventScrollReset: o,
    relative: f,
    viewTransition: d,
    unstable_defaultShouldRevalidate: p,
    unstable_useTransitions: y,
  } = {},
) {
  let g = Ko(),
    v = Tl(),
    b = _i(l, { relative: f });
  return N.useCallback(
    (D) => {
      if (yS(D, i)) {
        D.preventDefault();
        let Y = u !== void 0 ? u : yi(v) === yi(b),
          T = () =>
            g(l, {
              replace: Y,
              state: r,
              preventScrollReset: o,
              relative: f,
              viewTransition: d,
              unstable_defaultShouldRevalidate: p,
            });
        y ? N.startTransition(() => T()) : T();
      }
    },
    [v, g, b, u, r, i, l, o, f, d, p, y],
  );
}
var YS = 0,
  VS = () => `__${String(++YS)}__`;
function XS() {
  let { router: l } = My("useSubmit"),
    { basename: i } = N.useContext(Yt),
    u = uS(),
    r = l.fetch,
    o = l.navigate;
  return N.useCallback(
    async (f, d = {}) => {
      let { action: p, method: y, encType: g, formData: v, body: b } = bS(f, i);
      if (d.navigate === !1) {
        let D = d.fetcherKey || VS();
        await r(D, u, d.action || p, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: v,
          body: b,
          formMethod: d.method || y,
          formEncType: d.encType || g,
          flushSync: d.flushSync,
        });
      } else
        await o(d.action || p, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: v,
          body: b,
          formMethod: d.method || y,
          formEncType: d.encType || g,
          replace: d.replace,
          state: d.state,
          fromRouteId: u,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition,
        });
    },
    [r, o, i, u],
  );
}
function GS(l, { relative: i } = {}) {
  let { basename: u } = N.useContext(Yt),
    r = N.useContext(On);
  De(r, "useFormAction must be used inside a RouteContext");
  let [o] = r.matches.slice(-1),
    f = { ..._i(l || ".", { relative: i }) },
    d = Tl();
  if (l == null) {
    f.search = d.search;
    let p = new URLSearchParams(f.search),
      y = p.getAll("index");
    if (y.some((v) => v === "")) {
      (p.delete("index"),
        y.filter((b) => b).forEach((b) => p.append("index", b)));
      let v = p.toString();
      f.search = v ? `?${v}` : "";
    }
  }
  return (
    (!l || l === ".") &&
      o.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    u !== "/" && (f.pathname = f.pathname === "/" ? u : _n([u, f.pathname])),
    yi(f)
  );
}
function QS(l, { relative: i } = {}) {
  let u = N.useContext(Ty);
  De(
    u != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = My("useViewTransitionState"),
    o = _i(l, { relative: i });
  if (!u.isTransitioning) return !1;
  let f = Rn(u.currentLocation.pathname, r) || u.currentLocation.pathname,
    d = Rn(u.nextLocation.pathname, r) || u.nextLocation.pathname;
  return hr(o.pathname, d) != null || hr(o.pathname, f) != null;
}
const tn = Object.create(null);
tn.open = "0";
tn.close = "1";
tn.ping = "2";
tn.pong = "3";
tn.message = "4";
tn.upgrade = "5";
tn.noop = "6";
const lr = Object.create(null);
Object.keys(tn).forEach((l) => {
  lr[tn[l]] = l;
});
const Co = { type: "error", data: "parser error" },
  Uy =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  By = typeof ArrayBuffer == "function",
  Ly = (l) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(l)
      : l && l.buffer instanceof ArrayBuffer,
  Po = ({ type: l, data: i }, u, r) =>
    Uy && i instanceof Blob
      ? u
        ? r(i)
        : Np(i, r)
      : By && (i instanceof ArrayBuffer || Ly(i))
        ? u
          ? r(i)
          : Np(new Blob([i]), r)
        : r(tn[l] + (i || "")),
  Np = (l, i) => {
    const u = new FileReader();
    return (
      (u.onload = function () {
        const r = u.result.split(",")[1];
        i("b" + (r || ""));
      }),
      u.readAsDataURL(l)
    );
  };
function zp(l) {
  return l instanceof Uint8Array
    ? l
    : l instanceof ArrayBuffer
      ? new Uint8Array(l)
      : new Uint8Array(l.buffer, l.byteOffset, l.byteLength);
}
let mo;
function kS(l, i) {
  if (Uy && l.data instanceof Blob)
    return l.data.arrayBuffer().then(zp).then(i);
  if (By && (l.data instanceof ArrayBuffer || Ly(l.data))) return i(zp(l.data));
  Po(l, !1, (u) => {
    (mo || (mo = new TextEncoder()), i(mo.encode(u)));
  });
}
const Dp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  mi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let l = 0; l < Dp.length; l++) mi[Dp.charCodeAt(l)] = l;
const ZS = (l) => {
    let i = l.length * 0.75,
      u = l.length,
      r,
      o = 0,
      f,
      d,
      p,
      y;
    l[l.length - 1] === "=" && (i--, l[l.length - 2] === "=" && i--);
    const g = new ArrayBuffer(i),
      v = new Uint8Array(g);
    for (r = 0; r < u; r += 4)
      ((f = mi[l.charCodeAt(r)]),
        (d = mi[l.charCodeAt(r + 1)]),
        (p = mi[l.charCodeAt(r + 2)]),
        (y = mi[l.charCodeAt(r + 3)]),
        (v[o++] = (f << 2) | (d >> 4)),
        (v[o++] = ((d & 15) << 4) | (p >> 2)),
        (v[o++] = ((p & 3) << 6) | (y & 63)));
    return g;
  },
  KS = typeof ArrayBuffer == "function",
  Io = (l, i) => {
    if (typeof l != "string") return { type: "message", data: jy(l, i) };
    const u = l.charAt(0);
    return u === "b"
      ? { type: "message", data: JS(l.substring(1), i) }
      : lr[u]
        ? l.length > 1
          ? { type: lr[u], data: l.substring(1) }
          : { type: lr[u] }
        : Co;
  },
  JS = (l, i) => {
    if (KS) {
      const u = ZS(l);
      return jy(u, i);
    } else return { base64: !0, data: l };
  },
  jy = (l, i) =>
    i === "blob"
      ? l instanceof Blob
        ? l
        : new Blob([l])
      : l instanceof ArrayBuffer
        ? l
        : l.buffer,
  Hy = "",
  FS = (l, i) => {
    const u = l.length,
      r = new Array(u);
    let o = 0;
    l.forEach((f, d) => {
      Po(f, !1, (p) => {
        ((r[d] = p), ++o === u && i(r.join(Hy)));
      });
    });
  },
  $S = (l, i) => {
    const u = l.split(Hy),
      r = [];
    for (let o = 0; o < u.length; o++) {
      const f = Io(u[o], i);
      if ((r.push(f), f.type === "error")) break;
    }
    return r;
  };
function WS() {
  return new TransformStream({
    transform(l, i) {
      kS(l, (u) => {
        const r = u.length;
        let o;
        if (r < 126)
          ((o = new Uint8Array(1)), new DataView(o.buffer).setUint8(0, r));
        else if (r < 65536) {
          o = new Uint8Array(3);
          const f = new DataView(o.buffer);
          (f.setUint8(0, 126), f.setUint16(1, r));
        } else {
          o = new Uint8Array(9);
          const f = new DataView(o.buffer);
          (f.setUint8(0, 127), f.setBigUint64(1, BigInt(r)));
        }
        (l.data && typeof l.data != "string" && (o[0] |= 128),
          i.enqueue(o),
          i.enqueue(u));
      });
    },
  });
}
let po;
function Ku(l) {
  return l.reduce((i, u) => i + u.length, 0);
}
function Ju(l, i) {
  if (l[0].length === i) return l.shift();
  const u = new Uint8Array(i);
  let r = 0;
  for (let o = 0; o < i; o++)
    ((u[o] = l[0][r++]), r === l[0].length && (l.shift(), (r = 0)));
  return (l.length && r < l[0].length && (l[0] = l[0].slice(r)), u);
}
function PS(l, i) {
  po || (po = new TextDecoder());
  const u = [];
  let r = 0,
    o = -1,
    f = !1;
  return new TransformStream({
    transform(d, p) {
      for (u.push(d); ; ) {
        if (r === 0) {
          if (Ku(u) < 1) break;
          const y = Ju(u, 1);
          ((f = (y[0] & 128) === 128),
            (o = y[0] & 127),
            o < 126 ? (r = 3) : o === 126 ? (r = 1) : (r = 2));
        } else if (r === 1) {
          if (Ku(u) < 2) break;
          const y = Ju(u, 2);
          ((o = new DataView(y.buffer, y.byteOffset, y.length).getUint16(0)),
            (r = 3));
        } else if (r === 2) {
          if (Ku(u) < 8) break;
          const y = Ju(u, 8),
            g = new DataView(y.buffer, y.byteOffset, y.length),
            v = g.getUint32(0);
          if (v > Math.pow(2, 21) - 1) {
            p.enqueue(Co);
            break;
          }
          ((o = v * Math.pow(2, 32) + g.getUint32(4)), (r = 3));
        } else {
          if (Ku(u) < o) break;
          const y = Ju(u, o);
          (p.enqueue(Io(f ? y : po.decode(y), i)), (r = 0));
        }
        if (o === 0 || o > l) {
          p.enqueue(Co);
          break;
        }
      }
    },
  });
}
const qy = 4;
function Xe(l) {
  if (l) return IS(l);
}
function IS(l) {
  for (var i in Xe.prototype) l[i] = Xe.prototype[i];
  return l;
}
Xe.prototype.on = Xe.prototype.addEventListener = function (l, i) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + l] = this._callbacks["$" + l] || []).push(i),
    this
  );
};
Xe.prototype.once = function (l, i) {
  function u() {
    (this.off(l, u), i.apply(this, arguments));
  }
  return ((u.fn = i), this.on(l, u), this);
};
Xe.prototype.off =
  Xe.prototype.removeListener =
  Xe.prototype.removeAllListeners =
  Xe.prototype.removeEventListener =
    function (l, i) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return ((this._callbacks = {}), this);
      var u = this._callbacks["$" + l];
      if (!u) return this;
      if (arguments.length == 1) return (delete this._callbacks["$" + l], this);
      for (var r, o = 0; o < u.length; o++)
        if (((r = u[o]), r === i || r.fn === i)) {
          u.splice(o, 1);
          break;
        }
      return (u.length === 0 && delete this._callbacks["$" + l], this);
    };
Xe.prototype.emit = function (l) {
  this._callbacks = this._callbacks || {};
  for (
    var i = new Array(arguments.length - 1),
      u = this._callbacks["$" + l],
      r = 1;
    r < arguments.length;
    r++
  )
    i[r - 1] = arguments[r];
  if (u) {
    u = u.slice(0);
    for (var r = 0, o = u.length; r < o; ++r) u[r].apply(this, i);
  }
  return this;
};
Xe.prototype.emitReserved = Xe.prototype.emit;
Xe.prototype.listeners = function (l) {
  return (
    (this._callbacks = this._callbacks || {}),
    this._callbacks["$" + l] || []
  );
};
Xe.prototype.hasListeners = function (l) {
  return !!this.listeners(l).length;
};
const Or =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (i) => Promise.resolve().then(i)
      : (i, u) => u(i, 0),
  qt =
    typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : Function("return this")(),
  e1 = "arraybuffer";
function Yy(l, ...i) {
  return i.reduce((u, r) => (l.hasOwnProperty(r) && (u[r] = l[r]), u), {});
}
const t1 = qt.setTimeout,
  n1 = qt.clearTimeout;
function Cr(l, i) {
  i.useNativeTimers
    ? ((l.setTimeoutFn = t1.bind(qt)), (l.clearTimeoutFn = n1.bind(qt)))
    : ((l.setTimeoutFn = qt.setTimeout.bind(qt)),
      (l.clearTimeoutFn = qt.clearTimeout.bind(qt)));
}
const l1 = 1.33;
function a1(l) {
  return typeof l == "string"
    ? i1(l)
    : Math.ceil((l.byteLength || l.size) * l1);
}
function i1(l) {
  let i = 0,
    u = 0;
  for (let r = 0, o = l.length; r < o; r++)
    ((i = l.charCodeAt(r)),
      i < 128
        ? (u += 1)
        : i < 2048
          ? (u += 2)
          : i < 55296 || i >= 57344
            ? (u += 3)
            : (r++, (u += 4)));
  return u;
}
function Vy() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function u1(l) {
  let i = "";
  for (let u in l)
    l.hasOwnProperty(u) &&
      (i.length && (i += "&"),
      (i += encodeURIComponent(u) + "=" + encodeURIComponent(l[u])));
  return i;
}
function r1(l) {
  let i = {},
    u = l.split("&");
  for (let r = 0, o = u.length; r < o; r++) {
    let f = u[r].split("=");
    i[decodeURIComponent(f[0])] = decodeURIComponent(f[1]);
  }
  return i;
}
class s1 extends Error {
  constructor(i, u, r) {
    (super(i),
      (this.description = u),
      (this.context = r),
      (this.type = "TransportError"));
  }
}
class ef extends Xe {
  constructor(i) {
    (super(),
      (this.writable = !1),
      Cr(this, i),
      (this.opts = i),
      (this.query = i.query),
      (this.socket = i.socket),
      (this.supportsBinary = !i.forceBase64));
  }
  onError(i, u, r) {
    return (super.emitReserved("error", new s1(i, u, r)), this);
  }
  open() {
    return ((this.readyState = "opening"), this.doOpen(), this);
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(i) {
    this.readyState === "open" && this.write(i);
  }
  onOpen() {
    ((this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open"));
  }
  onData(i) {
    const u = Io(i, this.socket.binaryType);
    this.onPacket(u);
  }
  onPacket(i) {
    super.emitReserved("packet", i);
  }
  onClose(i) {
    ((this.readyState = "closed"), super.emitReserved("close", i));
  }
  pause(i) {}
  createUri(i, u = {}) {
    return (
      i +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(u)
    );
  }
  _hostname() {
    const i = this.opts.hostname;
    return i.indexOf(":") === -1 ? i : "[" + i + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && Number(this.opts.port) !== 443) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(i) {
    const u = u1(i);
    return u.length ? "?" + u : "";
  }
}
class c1 extends ef {
  constructor() {
    (super(...arguments), (this._polling = !1));
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this._poll();
  }
  pause(i) {
    this.readyState = "pausing";
    const u = () => {
      ((this.readyState = "paused"), i());
    };
    if (this._polling || !this.writable) {
      let r = 0;
      (this._polling &&
        (r++,
        this.once("pollComplete", function () {
          --r || u();
        })),
        this.writable ||
          (r++,
          this.once("drain", function () {
            --r || u();
          })));
    } else u();
  }
  _poll() {
    ((this._polling = !0), this.doPoll(), this.emitReserved("poll"));
  }
  onData(i) {
    const u = (r) => {
      if (
        (this.readyState === "opening" && r.type === "open" && this.onOpen(),
        r.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }),
          !1
        );
      this.onPacket(r);
    };
    ($S(i, this.socket.binaryType).forEach(u),
      this.readyState !== "closed" &&
        ((this._polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll()));
  }
  doClose() {
    const i = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? i() : this.once("open", i);
  }
  write(i) {
    ((this.writable = !1),
      FS(i, (u) => {
        this.doWrite(u, () => {
          ((this.writable = !0), this.emitReserved("drain"));
        });
      }));
  }
  uri() {
    const i = this.opts.secure ? "https" : "http",
      u = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (u[this.opts.timestampParam] = Vy()),
      !this.supportsBinary && !u.sid && (u.b64 = 1),
      this.createUri(i, u)
    );
  }
}
let Xy = !1;
try {
  Xy = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const o1 = Xy;
function f1() {}
class h1 extends c1 {
  constructor(i) {
    if ((super(i), typeof location < "u")) {
      const u = location.protocol === "https:";
      let r = location.port;
      (r || (r = u ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && i.hostname !== location.hostname) ||
          r !== i.port));
    }
  }
  doWrite(i, u) {
    const r = this.request({ method: "POST", data: i });
    (r.on("success", u),
      r.on("error", (o, f) => {
        this.onError("xhr post error", o, f);
      }));
  }
  doPoll() {
    const i = this.request();
    (i.on("data", this.onData.bind(this)),
      i.on("error", (u, r) => {
        this.onError("xhr poll error", u, r);
      }),
      (this.pollXhr = i));
  }
}
class en extends Xe {
  constructor(i, u, r) {
    (super(),
      (this.createRequest = i),
      Cr(this, r),
      (this._opts = r),
      (this._method = r.method || "GET"),
      (this._uri = u),
      (this._data = r.data !== void 0 ? r.data : null),
      this._create());
  }
  _create() {
    var i;
    const u = Yy(
      this._opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref",
    );
    u.xdomain = !!this._opts.xd;
    const r = (this._xhr = this.createRequest(u));
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let o in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(o) &&
              r.setRequestHeader(o, this._opts.extraHeaders[o]);
        }
      } catch {}
      if (this._method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {}
      ((i = this._opts.cookieJar) === null || i === void 0 || i.addCookies(r),
        "withCredentials" in r &&
          (r.withCredentials = this._opts.withCredentials),
        this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout),
        (r.onreadystatechange = () => {
          var o;
          (r.readyState === 3 &&
            ((o = this._opts.cookieJar) === null ||
              o === void 0 ||
              o.parseCookies(r.getResponseHeader("set-cookie"))),
            r.readyState === 4 &&
              (r.status === 200 || r.status === 1223
                ? this._onLoad()
                : this.setTimeoutFn(() => {
                    this._onError(typeof r.status == "number" ? r.status : 0);
                  }, 0)));
        }),
        r.send(this._data));
    } catch (o) {
      this.setTimeoutFn(() => {
        this._onError(o);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this._index = en.requestsCount++), (en.requests[this._index] = this));
  }
  _onError(i) {
    (this.emitReserved("error", i, this._xhr), this._cleanup(!0));
  }
  _cleanup(i) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = f1), i))
        try {
          this._xhr.abort();
        } catch {}
      (typeof document < "u" && delete en.requests[this._index],
        (this._xhr = null));
    }
  }
  _onLoad() {
    const i = this._xhr.responseText;
    i !== null &&
      (this.emitReserved("data", i),
      this.emitReserved("success"),
      this._cleanup());
  }
  abort() {
    this._cleanup();
  }
}
en.requestsCount = 0;
en.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", Mp);
  else if (typeof addEventListener == "function") {
    const l = "onpagehide" in qt ? "pagehide" : "unload";
    addEventListener(l, Mp, !1);
  }
}
function Mp() {
  for (let l in en.requests)
    en.requests.hasOwnProperty(l) && en.requests[l].abort();
}
const d1 = (function () {
  const l = Gy({ xdomain: !1 });
  return l && l.responseType !== null;
})();
class m1 extends h1 {
  constructor(i) {
    super(i);
    const u = i && i.forceBase64;
    this.supportsBinary = d1 && !u;
  }
  request(i = {}) {
    return (
      Object.assign(i, { xd: this.xd }, this.opts),
      new en(Gy, this.uri(), i)
    );
  }
}
function Gy(l) {
  const i = l.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!i || o1)) return new XMLHttpRequest();
  } catch {}
  if (!i)
    try {
      return new qt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
const Qy =
  typeof navigator < "u" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class p1 extends ef {
  get name() {
    return "websocket";
  }
  doOpen() {
    const i = this.uri(),
      u = this.opts.protocols,
      r = Qy
        ? {}
        : Yy(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity",
          );
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(i, u, r);
    } catch (o) {
      return this.emitReserved("error", o);
    }
    ((this.ws.binaryType = this.socket.binaryType), this.addEventListeners());
  }
  addEventListeners() {
    ((this.ws.onopen = () => {
      (this.opts.autoUnref && this.ws._socket.unref(), this.onOpen());
    }),
      (this.ws.onclose = (i) =>
        this.onClose({
          description: "websocket connection closed",
          context: i,
        })),
      (this.ws.onmessage = (i) => this.onData(i.data)),
      (this.ws.onerror = (i) => this.onError("websocket error", i)));
  }
  write(i) {
    this.writable = !1;
    for (let u = 0; u < i.length; u++) {
      const r = i[u],
        o = u === i.length - 1;
      Po(r, this.supportsBinary, (f) => {
        try {
          this.doWrite(r, f);
        } catch {}
        o &&
          Or(() => {
            ((this.writable = !0), this.emitReserved("drain"));
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" &&
      ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
  }
  uri() {
    const i = this.opts.secure ? "wss" : "ws",
      u = this.query || {};
    return (
      this.opts.timestampRequests && (u[this.opts.timestampParam] = Vy()),
      this.supportsBinary || (u.b64 = 1),
      this.createUri(i, u)
    );
  }
}
const yo = qt.WebSocket || qt.MozWebSocket;
class y1 extends p1 {
  createSocket(i, u, r) {
    return Qy ? new yo(i, u, r) : u ? new yo(i, u) : new yo(i);
  }
  doWrite(i, u) {
    this.ws.send(u);
  }
}
class g1 extends ef {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name],
      );
    } catch (i) {
      return this.emitReserved("error", i);
    }
    (this._transport.closed
      .then(() => {
        this.onClose();
      })
      .catch((i) => {
        this.onError("webtransport error", i);
      }),
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((i) => {
          const u = PS(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            r = i.readable.pipeThrough(u).getReader(),
            o = WS();
          (o.readable.pipeTo(i.writable),
            (this._writer = o.writable.getWriter()));
          const f = () => {
            r.read()
              .then(({ done: p, value: y }) => {
                p || (this.onPacket(y), f());
              })
              .catch((p) => {});
          };
          f();
          const d = { type: "open" };
          (this.query.sid && (d.data = `{"sid":"${this.query.sid}"}`),
            this._writer.write(d).then(() => this.onOpen()));
        });
      }));
  }
  write(i) {
    this.writable = !1;
    for (let u = 0; u < i.length; u++) {
      const r = i[u],
        o = u === i.length - 1;
      this._writer.write(r).then(() => {
        o &&
          Or(() => {
            ((this.writable = !0), this.emitReserved("drain"));
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var i;
    (i = this._transport) === null || i === void 0 || i.close();
  }
}
const v1 = { websocket: y1, webtransport: g1, polling: m1 },
  b1 =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  S1 = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function wo(l) {
  if (l.length > 8e3) throw "URI too long";
  const i = l,
    u = l.indexOf("["),
    r = l.indexOf("]");
  u != -1 &&
    r != -1 &&
    (l =
      l.substring(0, u) +
      l.substring(u, r).replace(/:/g, ";") +
      l.substring(r, l.length));
  let o = b1.exec(l || ""),
    f = {},
    d = 14;
  for (; d--; ) f[S1[d]] = o[d] || "";
  return (
    u != -1 &&
      r != -1 &&
      ((f.source = i),
      (f.host = f.host.substring(1, f.host.length - 1).replace(/;/g, ":")),
      (f.authority = f.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (f.ipv6uri = !0)),
    (f.pathNames = E1(f, f.path)),
    (f.queryKey = _1(f, f.query)),
    f
  );
}
function E1(l, i) {
  const u = /\/{2,9}/g,
    r = i.replace(u, "/").split("/");
  return (
    (i.slice(0, 1) == "/" || i.length === 0) && r.splice(0, 1),
    i.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
  );
}
function _1(l, i) {
  const u = {};
  return (
    i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, o, f) {
      o && (u[o] = f);
    }),
    u
  );
}
const xo =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  ar = [];
xo &&
  addEventListener(
    "offline",
    () => {
      ar.forEach((l) => l());
    },
    !1,
  );
class Pn extends Xe {
  constructor(i, u) {
    if (
      (super(),
      (this.binaryType = e1),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      i && typeof i == "object" && ((u = i), (i = null)),
      i)
    ) {
      const r = wo(i);
      ((u.hostname = r.host),
        (u.secure = r.protocol === "https" || r.protocol === "wss"),
        (u.port = r.port),
        r.query && (u.query = r.query));
    } else u.host && (u.hostname = wo(u.host).host);
    (Cr(this, u),
      (this.secure =
        u.secure != null
          ? u.secure
          : typeof location < "u" && location.protocol === "https:"),
      u.hostname && !u.port && (u.port = this.secure ? "443" : "80"),
      (this.hostname =
        u.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        u.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
            ? "443"
            : "80")),
      (this.transports = []),
      (this._transportsByName = {}),
      u.transports.forEach((r) => {
        const o = r.prototype.name;
        (this.transports.push(o), (this._transportsByName[o] = r));
      }),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        u,
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = r1(this.opts.query)),
      xo &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener(
            "beforeunload",
            this._beforeunloadEventListener,
            !1,
          )),
        this.hostname !== "localhost" &&
          ((this._offlineEventListener = () => {
            this._onClose("transport close", {
              description: "network connection lost",
            });
          }),
          ar.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open());
  }
  createTransport(i) {
    const u = Object.assign({}, this.opts.query);
    ((u.EIO = qy), (u.transport = i), this.id && (u.sid = this.id));
    const r = Object.assign(
      {},
      this.opts,
      {
        query: u,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[i],
    );
    return new this._transportsByName[i](r);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const i =
      this.opts.rememberUpgrade &&
      Pn.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
        ? "websocket"
        : this.transports[0];
    this.readyState = "opening";
    const u = this.createTransport(i);
    (u.open(), this.setTransport(u));
  }
  setTransport(i) {
    (this.transport && this.transport.removeAllListeners(),
      (this.transport = i),
      i
        .on("drain", this._onDrain.bind(this))
        .on("packet", this._onPacket.bind(this))
        .on("error", this._onError.bind(this))
        .on("close", (u) => this._onClose("transport close", u)));
  }
  onOpen() {
    ((this.readyState = "open"),
      (Pn.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush());
  }
  _onPacket(i) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", i), this.emitReserved("heartbeat"), i.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(i.data));
          break;
        case "ping":
          (this._sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong"),
            this._resetPingTimeout());
          break;
        case "error":
          const u = new Error("server error");
          ((u.code = i.data), this._onError(u));
          break;
        case "message":
          (this.emitReserved("data", i.data),
            this.emitReserved("message", i.data));
          break;
      }
  }
  onHandshake(i) {
    (this.emitReserved("handshake", i),
      (this.id = i.sid),
      (this.transport.query.sid = i.sid),
      (this._pingInterval = i.pingInterval),
      (this._pingTimeout = i.pingTimeout),
      (this._maxPayload = i.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this._resetPingTimeout());
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const i = this._pingInterval + this._pingTimeout;
    ((this._pingTimeoutTime = Date.now() + i),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose("ping timeout");
      }, i)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref());
  }
  _onDrain() {
    (this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0
        ? this.emitReserved("drain")
        : this.flush());
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const i = this._getWritablePackets();
      (this.transport.send(i),
        (this._prevBufferLen = i.length),
        this.emitReserved("flush"));
    }
  }
  _getWritablePackets() {
    if (
      !(
        this._maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let u = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const o = this.writeBuffer[r].data;
      if ((o && (u += a1(o)), r > 0 && u > this._maxPayload))
        return this.writeBuffer.slice(0, r);
      u += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    const i = Date.now() > this._pingTimeoutTime;
    return (
      i &&
        ((this._pingTimeoutTime = 0),
        Or(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn)),
      i
    );
  }
  write(i, u, r) {
    return (this._sendPacket("message", i, u, r), this);
  }
  send(i, u, r) {
    return (this._sendPacket("message", i, u, r), this);
  }
  _sendPacket(i, u, r, o) {
    if (
      (typeof u == "function" && ((o = u), (u = void 0)),
      typeof r == "function" && ((o = r), (r = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    ((r = r || {}), (r.compress = r.compress !== !1));
    const f = { type: i, data: u, options: r };
    (this.emitReserved("packetCreate", f),
      this.writeBuffer.push(f),
      o && this.once("flush", o),
      this.flush());
  }
  close() {
    const i = () => {
        (this._onClose("forced close"), this.transport.close());
      },
      u = () => {
        (this.off("upgrade", u), this.off("upgradeError", u), i());
      },
      r = () => {
        (this.once("upgrade", u), this.once("upgradeError", u));
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? r() : i();
            })
          : this.upgrading
            ? r()
            : i()),
      this
    );
  }
  _onError(i) {
    if (
      ((Pn.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === "opening")
    )
      return (this.transports.shift(), this._open());
    (this.emitReserved("error", i), this._onClose("transport error", i));
  }
  _onClose(i, u) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    ) {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners("close"),
        this.transport.close(),
        this.transport.removeAllListeners(),
        xo &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1,
            ),
          this._offlineEventListener))
      ) {
        const r = ar.indexOf(this._offlineEventListener);
        r !== -1 && ar.splice(r, 1);
      }
      ((this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", i, u),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0));
    }
  }
}
Pn.protocol = qy;
class T1 extends Pn {
  constructor() {
    (super(...arguments), (this._upgrades = []));
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === "open" && this.opts.upgrade))
      for (let i = 0; i < this._upgrades.length; i++)
        this._probe(this._upgrades[i]);
  }
  _probe(i) {
    let u = this.createTransport(i),
      r = !1;
    Pn.priorWebsocketSuccess = !1;
    const o = () => {
      r ||
        (u.send([{ type: "ping", data: "probe" }]),
        u.once("packet", (b) => {
          if (!r)
            if (b.type === "pong" && b.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", u), !u)
              )
                return;
              ((Pn.priorWebsocketSuccess = u.name === "websocket"),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== "closed" &&
                      (v(),
                      this.setTransport(u),
                      u.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", u),
                      (u = null),
                      (this.upgrading = !1),
                      this.flush()));
                }));
            } else {
              const D = new Error("probe error");
              ((D.transport = u.name), this.emitReserved("upgradeError", D));
            }
        }));
    };
    function f() {
      r || ((r = !0), v(), u.close(), (u = null));
    }
    const d = (b) => {
      const D = new Error("probe error: " + b);
      ((D.transport = u.name), f(), this.emitReserved("upgradeError", D));
    };
    function p() {
      d("transport closed");
    }
    function y() {
      d("socket closed");
    }
    function g(b) {
      u && b.name !== u.name && f();
    }
    const v = () => {
      (u.removeListener("open", o),
        u.removeListener("error", d),
        u.removeListener("close", p),
        this.off("close", y),
        this.off("upgrading", g));
    };
    (u.once("open", o),
      u.once("error", d),
      u.once("close", p),
      this.once("close", y),
      this.once("upgrading", g),
      this._upgrades.indexOf("webtransport") !== -1 && i !== "webtransport"
        ? this.setTimeoutFn(() => {
            r || u.open();
          }, 200)
        : u.open());
  }
  onHandshake(i) {
    ((this._upgrades = this._filterUpgrades(i.upgrades)), super.onHandshake(i));
  }
  _filterUpgrades(i) {
    const u = [];
    for (let r = 0; r < i.length; r++)
      ~this.transports.indexOf(i[r]) && u.push(i[r]);
    return u;
  }
}
let R1 = class extends T1 {
  constructor(i, u = {}) {
    const r = typeof i == "object" ? i : u;
    ((!r.transports || (r.transports && typeof r.transports[0] == "string")) &&
      (r.transports = (r.transports || ["polling", "websocket", "webtransport"])
        .map((o) => v1[o])
        .filter((o) => !!o)),
      super(i, r));
  }
};
function A1(l, i = "", u) {
  let r = l;
  ((u = u || (typeof location < "u" && location)),
    l == null && (l = u.protocol + "//" + u.host),
    typeof l == "string" &&
      (l.charAt(0) === "/" &&
        (l.charAt(1) === "/" ? (l = u.protocol + l) : (l = u.host + l)),
      /^(https?|wss?):\/\//.test(l) ||
        (typeof u < "u" ? (l = u.protocol + "//" + l) : (l = "https://" + l)),
      (r = wo(l))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = "80")
        : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    (r.path = r.path || "/"));
  const f = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return (
    (r.id = r.protocol + "://" + f + ":" + r.port + i),
    (r.href =
      r.protocol + "://" + f + (u && u.port === r.port ? "" : ":" + r.port)),
    r
  );
}
const O1 = typeof ArrayBuffer == "function",
  C1 = (l) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(l)
      : l.buffer instanceof ArrayBuffer,
  ky = Object.prototype.toString,
  w1 =
    typeof Blob == "function" ||
    (typeof Blob < "u" && ky.call(Blob) === "[object BlobConstructor]"),
  x1 =
    typeof File == "function" ||
    (typeof File < "u" && ky.call(File) === "[object FileConstructor]");
function tf(l) {
  return (
    (O1 && (l instanceof ArrayBuffer || C1(l))) ||
    (w1 && l instanceof Blob) ||
    (x1 && l instanceof File)
  );
}
function ir(l, i) {
  if (!l || typeof l != "object") return !1;
  if (Array.isArray(l)) {
    for (let u = 0, r = l.length; u < r; u++) if (ir(l[u])) return !0;
    return !1;
  }
  if (tf(l)) return !0;
  if (l.toJSON && typeof l.toJSON == "function" && arguments.length === 1)
    return ir(l.toJSON(), !0);
  for (const u in l)
    if (Object.prototype.hasOwnProperty.call(l, u) && ir(l[u])) return !0;
  return !1;
}
function N1(l) {
  const i = [],
    u = l.data,
    r = l;
  return (
    (r.data = No(u, i)),
    (r.attachments = i.length),
    { packet: r, buffers: i }
  );
}
function No(l, i) {
  if (!l) return l;
  if (tf(l)) {
    const u = { _placeholder: !0, num: i.length };
    return (i.push(l), u);
  } else if (Array.isArray(l)) {
    const u = new Array(l.length);
    for (let r = 0; r < l.length; r++) u[r] = No(l[r], i);
    return u;
  } else if (typeof l == "object" && !(l instanceof Date)) {
    const u = {};
    for (const r in l)
      Object.prototype.hasOwnProperty.call(l, r) && (u[r] = No(l[r], i));
    return u;
  }
  return l;
}
function z1(l, i) {
  return ((l.data = zo(l.data, i)), delete l.attachments, l);
}
function zo(l, i) {
  if (!l) return l;
  if (l && l._placeholder === !0) {
    if (typeof l.num == "number" && l.num >= 0 && l.num < i.length)
      return i[l.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(l))
    for (let u = 0; u < l.length; u++) l[u] = zo(l[u], i);
  else if (typeof l == "object")
    for (const u in l)
      Object.prototype.hasOwnProperty.call(l, u) && (l[u] = zo(l[u], i));
  return l;
}
const D1 = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener",
];
var me;
(function (l) {
  ((l[(l.CONNECT = 0)] = "CONNECT"),
    (l[(l.DISCONNECT = 1)] = "DISCONNECT"),
    (l[(l.EVENT = 2)] = "EVENT"),
    (l[(l.ACK = 3)] = "ACK"),
    (l[(l.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (l[(l.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (l[(l.BINARY_ACK = 6)] = "BINARY_ACK"));
})(me || (me = {}));
class M1 {
  constructor(i) {
    this.replacer = i;
  }
  encode(i) {
    return (i.type === me.EVENT || i.type === me.ACK) && ir(i)
      ? this.encodeAsBinary({
          type: i.type === me.EVENT ? me.BINARY_EVENT : me.BINARY_ACK,
          nsp: i.nsp,
          data: i.data,
          id: i.id,
        })
      : [this.encodeAsString(i)];
  }
  encodeAsString(i) {
    let u = "" + i.type;
    return (
      (i.type === me.BINARY_EVENT || i.type === me.BINARY_ACK) &&
        (u += i.attachments + "-"),
      i.nsp && i.nsp !== "/" && (u += i.nsp + ","),
      i.id != null && (u += i.id),
      i.data != null && (u += JSON.stringify(i.data, this.replacer)),
      u
    );
  }
  encodeAsBinary(i) {
    const u = N1(i),
      r = this.encodeAsString(u.packet),
      o = u.buffers;
    return (o.unshift(r), o);
  }
}
class nf extends Xe {
  constructor(i) {
    (super(), (this.reviver = i));
  }
  add(i) {
    let u;
    if (typeof i == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      u = this.decodeString(i);
      const r = u.type === me.BINARY_EVENT;
      r || u.type === me.BINARY_ACK
        ? ((u.type = r ? me.EVENT : me.ACK),
          (this.reconstructor = new U1(u)),
          u.attachments === 0 && super.emitReserved("decoded", u))
        : super.emitReserved("decoded", u);
    } else if (tf(i) || i.base64)
      if (this.reconstructor)
        ((u = this.reconstructor.takeBinaryData(i)),
          u && ((this.reconstructor = null), super.emitReserved("decoded", u)));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + i);
  }
  decodeString(i) {
    let u = 0;
    const r = { type: Number(i.charAt(0)) };
    if (me[r.type] === void 0) throw new Error("unknown packet type " + r.type);
    if (r.type === me.BINARY_EVENT || r.type === me.BINARY_ACK) {
      const f = u + 1;
      for (; i.charAt(++u) !== "-" && u != i.length; );
      const d = i.substring(f, u);
      if (d != Number(d) || i.charAt(u) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(d);
    }
    if (i.charAt(u + 1) === "/") {
      const f = u + 1;
      for (; ++u && !(i.charAt(u) === "," || u === i.length); );
      r.nsp = i.substring(f, u);
    } else r.nsp = "/";
    const o = i.charAt(u + 1);
    if (o !== "" && Number(o) == o) {
      const f = u + 1;
      for (; ++u; ) {
        const d = i.charAt(u);
        if (d == null || Number(d) != d) {
          --u;
          break;
        }
        if (u === i.length) break;
      }
      r.id = Number(i.substring(f, u + 1));
    }
    if (i.charAt(++u)) {
      const f = this.tryParse(i.substr(u));
      if (nf.isPayloadValid(r.type, f)) r.data = f;
      else throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(i) {
    try {
      return JSON.parse(i, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(i, u) {
    switch (i) {
      case me.CONNECT:
        return Up(u);
      case me.DISCONNECT:
        return u === void 0;
      case me.CONNECT_ERROR:
        return typeof u == "string" || Up(u);
      case me.EVENT:
      case me.BINARY_EVENT:
        return (
          Array.isArray(u) &&
          (typeof u[0] == "number" ||
            (typeof u[0] == "string" && D1.indexOf(u[0]) === -1))
        );
      case me.ACK:
      case me.BINARY_ACK:
        return Array.isArray(u);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class U1 {
  constructor(i) {
    ((this.packet = i), (this.buffers = []), (this.reconPack = i));
  }
  takeBinaryData(i) {
    if (
      (this.buffers.push(i), this.buffers.length === this.reconPack.attachments)
    ) {
      const u = z1(this.reconPack, this.buffers);
      return (this.finishedReconstruction(), u);
    }
    return null;
  }
  finishedReconstruction() {
    ((this.reconPack = null), (this.buffers = []));
  }
}
function Up(l) {
  return Object.prototype.toString.call(l) === "[object Object]";
}
const B1 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: nf,
      Encoder: M1,
      get PacketType() {
        return me;
      },
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function Qt(l, i, u) {
  return (
    l.on(i, u),
    function () {
      l.off(i, u);
    }
  );
}
const L1 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class Zy extends Xe {
  constructor(i, u, r) {
    (super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = i),
      (this.nsp = u),
      r && r.auth && (this.auth = r.auth),
      (this._opts = Object.assign({}, r)),
      this.io._autoConnect && this.open());
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const i = this.io;
    this.subs = [
      Qt(i, "open", this.onopen.bind(this)),
      Qt(i, "packet", this.onpacket.bind(this)),
      Qt(i, "error", this.onerror.bind(this)),
      Qt(i, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...i) {
    return (i.unshift("message"), this.emit.apply(this, i), this);
  }
  emit(i, ...u) {
    var r, o, f;
    if (L1.hasOwnProperty(i))
      throw new Error('"' + i.toString() + '" is a reserved event name');
    if (
      (u.unshift(i),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return (this._addToQueue(u), this);
    const d = { type: me.EVENT, data: u };
    if (
      ((d.options = {}),
      (d.options.compress = this.flags.compress !== !1),
      typeof u[u.length - 1] == "function")
    ) {
      const v = this.ids++,
        b = u.pop();
      (this._registerAckCallback(v, b), (d.id = v));
    }
    const p =
        (o =
          (r = this.io.engine) === null || r === void 0
            ? void 0
            : r.transport) === null || o === void 0
          ? void 0
          : o.writable,
      y =
        this.connected &&
        !(
          !((f = this.io.engine) === null || f === void 0) &&
          f._hasPingExpired()
        );
    return (
      (this.flags.volatile && !p) ||
        (y
          ? (this.notifyOutgoingListeners(d), this.packet(d))
          : this.sendBuffer.push(d)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(i, u) {
    var r;
    const o =
      (r = this.flags.timeout) !== null && r !== void 0
        ? r
        : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[i] = u;
      return;
    }
    const f = this.io.setTimeoutFn(() => {
        delete this.acks[i];
        for (let p = 0; p < this.sendBuffer.length; p++)
          this.sendBuffer[p].id === i && this.sendBuffer.splice(p, 1);
        u.call(this, new Error("operation has timed out"));
      }, o),
      d = (...p) => {
        (this.io.clearTimeoutFn(f), u.apply(this, p));
      };
    ((d.withError = !0), (this.acks[i] = d));
  }
  emitWithAck(i, ...u) {
    return new Promise((r, o) => {
      const f = (d, p) => (d ? o(d) : r(p));
      ((f.withError = !0), u.push(f), this.emit(i, ...u));
    });
  }
  _addToQueue(i) {
    let u;
    typeof i[i.length - 1] == "function" && (u = i.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: i,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    (i.push(
      (o, ...f) => (
        this._queue[0],
        o !== null
          ? r.tryCount > this._opts.retries && (this._queue.shift(), u && u(o))
          : (this._queue.shift(), u && u(null, ...f)),
        (r.pending = !1),
        this._drainQueue()
      ),
    ),
      this._queue.push(r),
      this._drainQueue());
  }
  _drainQueue(i = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const u = this._queue[0];
    (u.pending && !i) ||
      ((u.pending = !0),
      u.tryCount++,
      (this.flags = u.flags),
      this.emit.apply(this, u.args));
  }
  packet(i) {
    ((i.nsp = this.nsp), this.io._packet(i));
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((i) => {
          this._sendConnectPacket(i);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(i) {
    this.packet({
      type: me.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, i)
        : i,
    });
  }
  onerror(i) {
    this.connected || this.emitReserved("connect_error", i);
  }
  onclose(i, u) {
    ((this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", i, u),
      this._clearAcks());
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((i) => {
      if (!this.sendBuffer.some((r) => String(r.id) === i)) {
        const r = this.acks[i];
        (delete this.acks[i],
          r.withError &&
            r.call(this, new Error("socket has been disconnected")));
      }
    });
  }
  onpacket(i) {
    if (i.nsp === this.nsp)
      switch (i.type) {
        case me.CONNECT:
          i.data && i.data.sid
            ? this.onconnect(i.data.sid, i.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)",
                ),
              );
          break;
        case me.EVENT:
        case me.BINARY_EVENT:
          this.onevent(i);
          break;
        case me.ACK:
        case me.BINARY_ACK:
          this.onack(i);
          break;
        case me.DISCONNECT:
          this.ondisconnect();
          break;
        case me.CONNECT_ERROR:
          this.destroy();
          const r = new Error(i.data.message);
          ((r.data = i.data.data), this.emitReserved("connect_error", r));
          break;
      }
  }
  onevent(i) {
    const u = i.data || [];
    (i.id != null && u.push(this.ack(i.id)),
      this.connected
        ? this.emitEvent(u)
        : this.receiveBuffer.push(Object.freeze(u)));
  }
  emitEvent(i) {
    if (this._anyListeners && this._anyListeners.length) {
      const u = this._anyListeners.slice();
      for (const r of u) r.apply(this, i);
    }
    (super.emit.apply(this, i),
      this._pid &&
        i.length &&
        typeof i[i.length - 1] == "string" &&
        (this._lastOffset = i[i.length - 1]));
  }
  ack(i) {
    const u = this;
    let r = !1;
    return function (...o) {
      r || ((r = !0), u.packet({ type: me.ACK, id: i, data: o }));
    };
  }
  onack(i) {
    const u = this.acks[i.id];
    typeof u == "function" &&
      (delete this.acks[i.id],
      u.withError && i.data.unshift(null),
      u.apply(this, i.data));
  }
  onconnect(i, u) {
    ((this.id = i),
      (this.recovered = u && this._pid === u),
      (this._pid = u),
      (this.connected = !0),
      this.emitBuffered(),
      this._drainQueue(!0),
      this.emitReserved("connect"));
  }
  emitBuffered() {
    (this.receiveBuffer.forEach((i) => this.emitEvent(i)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((i) => {
        (this.notifyOutgoingListeners(i), this.packet(i));
      }),
      (this.sendBuffer = []));
  }
  ondisconnect() {
    (this.destroy(), this.onclose("io server disconnect"));
  }
  destroy() {
    (this.subs && (this.subs.forEach((i) => i()), (this.subs = void 0)),
      this.io._destroy(this));
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: me.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(i) {
    return ((this.flags.compress = i), this);
  }
  get volatile() {
    return ((this.flags.volatile = !0), this);
  }
  timeout(i) {
    return ((this.flags.timeout = i), this);
  }
  onAny(i) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(i),
      this
    );
  }
  prependAny(i) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(i),
      this
    );
  }
  offAny(i) {
    if (!this._anyListeners) return this;
    if (i) {
      const u = this._anyListeners;
      for (let r = 0; r < u.length; r++)
        if (i === u[r]) return (u.splice(r, 1), this);
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(i) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(i),
      this
    );
  }
  prependAnyOutgoing(i) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(i),
      this
    );
  }
  offAnyOutgoing(i) {
    if (!this._anyOutgoingListeners) return this;
    if (i) {
      const u = this._anyOutgoingListeners;
      for (let r = 0; r < u.length; r++)
        if (i === u[r]) return (u.splice(r, 1), this);
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(i) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const u = this._anyOutgoingListeners.slice();
      for (const r of u) r.apply(this, i.data);
    }
  }
}
function da(l) {
  ((l = l || {}),
    (this.ms = l.min || 100),
    (this.max = l.max || 1e4),
    (this.factor = l.factor || 2),
    (this.jitter = l.jitter > 0 && l.jitter <= 1 ? l.jitter : 0),
    (this.attempts = 0));
}
da.prototype.duration = function () {
  var l = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(),
      u = Math.floor(i * this.jitter * l);
    l = (Math.floor(i * 10) & 1) == 0 ? l - u : l + u;
  }
  return Math.min(l, this.max) | 0;
};
da.prototype.reset = function () {
  this.attempts = 0;
};
da.prototype.setMin = function (l) {
  this.ms = l;
};
da.prototype.setMax = function (l) {
  this.max = l;
};
da.prototype.setJitter = function (l) {
  this.jitter = l;
};
class Do extends Xe {
  constructor(i, u) {
    var r;
    (super(),
      (this.nsps = {}),
      (this.subs = []),
      i && typeof i == "object" && ((u = i), (i = void 0)),
      (u = u || {}),
      (u.path = u.path || "/socket.io"),
      (this.opts = u),
      Cr(this, u),
      this.reconnection(u.reconnection !== !1),
      this.reconnectionAttempts(u.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(u.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(u.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (r = u.randomizationFactor) !== null && r !== void 0 ? r : 0.5,
      ),
      (this.backoff = new da({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(u.timeout == null ? 2e4 : u.timeout),
      (this._readyState = "closed"),
      (this.uri = i));
    const o = u.parser || B1;
    ((this.encoder = new o.Encoder()),
      (this.decoder = new o.Decoder()),
      (this._autoConnect = u.autoConnect !== !1),
      this._autoConnect && this.open());
  }
  reconnection(i) {
    return arguments.length
      ? ((this._reconnection = !!i), i || (this.skipReconnect = !0), this)
      : this._reconnection;
  }
  reconnectionAttempts(i) {
    return i === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = i), this);
  }
  reconnectionDelay(i) {
    var u;
    return i === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = i),
        (u = this.backoff) === null || u === void 0 || u.setMin(i),
        this);
  }
  randomizationFactor(i) {
    var u;
    return i === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = i),
        (u = this.backoff) === null || u === void 0 || u.setJitter(i),
        this);
  }
  reconnectionDelayMax(i) {
    var u;
    return i === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = i),
        (u = this.backoff) === null || u === void 0 || u.setMax(i),
        this);
  }
  timeout(i) {
    return arguments.length ? ((this._timeout = i), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(i) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new R1(this.uri, this.opts);
    const u = this.engine,
      r = this;
    ((this._readyState = "opening"), (this.skipReconnect = !1));
    const o = Qt(u, "open", function () {
        (r.onopen(), i && i());
      }),
      f = (p) => {
        (this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", p),
          i ? i(p) : this.maybeReconnectOnOpen());
      },
      d = Qt(u, "error", f);
    if (this._timeout !== !1) {
      const p = this._timeout,
        y = this.setTimeoutFn(() => {
          (o(), f(new Error("timeout")), u.close());
        }, p);
      (this.opts.autoUnref && y.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(y);
        }));
    }
    return (this.subs.push(o), this.subs.push(d), this);
  }
  connect(i) {
    return this.open(i);
  }
  onopen() {
    (this.cleanup(), (this._readyState = "open"), this.emitReserved("open"));
    const i = this.engine;
    this.subs.push(
      Qt(i, "ping", this.onping.bind(this)),
      Qt(i, "data", this.ondata.bind(this)),
      Qt(i, "error", this.onerror.bind(this)),
      Qt(i, "close", this.onclose.bind(this)),
      Qt(this.decoder, "decoded", this.ondecoded.bind(this)),
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(i) {
    try {
      this.decoder.add(i);
    } catch (u) {
      this.onclose("parse error", u);
    }
  }
  ondecoded(i) {
    Or(() => {
      this.emitReserved("packet", i);
    }, this.setTimeoutFn);
  }
  onerror(i) {
    this.emitReserved("error", i);
  }
  socket(i, u) {
    let r = this.nsps[i];
    return (
      r
        ? this._autoConnect && !r.active && r.connect()
        : ((r = new Zy(this, i, u)), (this.nsps[i] = r)),
      r
    );
  }
  _destroy(i) {
    const u = Object.keys(this.nsps);
    for (const r of u) if (this.nsps[r].active) return;
    this._close();
  }
  _packet(i) {
    const u = this.encoder.encode(i);
    for (let r = 0; r < u.length; r++) this.engine.write(u[r], i.options);
  }
  cleanup() {
    (this.subs.forEach((i) => i()),
      (this.subs.length = 0),
      this.decoder.destroy());
  }
  _close() {
    ((this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close"));
  }
  disconnect() {
    return this._close();
  }
  onclose(i, u) {
    var r;
    (this.cleanup(),
      (r = this.engine) === null || r === void 0 || r.close(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", i, u),
      this._reconnection && !this.skipReconnect && this.reconnect());
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const i = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      (this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1));
    else {
      const u = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        i.skipReconnect ||
          (this.emitReserved("reconnect_attempt", i.backoff.attempts),
          !i.skipReconnect &&
            i.open((o) => {
              o
                ? ((i._reconnecting = !1),
                  i.reconnect(),
                  this.emitReserved("reconnect_error", o))
                : i.onreconnect();
            }));
      }, u);
      (this.opts.autoUnref && r.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(r);
        }));
    }
  }
  onreconnect() {
    const i = this.backoff.attempts;
    ((this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", i));
  }
}
const hi = {};
function ur(l, i) {
  (typeof l == "object" && ((i = l), (l = void 0)), (i = i || {}));
  const u = A1(l, i.path || "/socket.io"),
    r = u.source,
    o = u.id,
    f = u.path,
    d = hi[o] && f in hi[o].nsps,
    p = i.forceNew || i["force new connection"] || i.multiplex === !1 || d;
  let y;
  return (
    p ? (y = new Do(r, i)) : (hi[o] || (hi[o] = new Do(r, i)), (y = hi[o])),
    u.query && !i.query && (i.query = u.queryKey),
    y.socket(u.path, i)
  );
}
Object.assign(ur, { Manager: Do, Socket: Zy, io: ur, connect: ur });
const j1 = ({ onToggleSidebar: l, onNewChat: i }) =>
    L.jsxs("header", {
      className: "chat-mobile-bar",
      children: [
        L.jsx("button", {
          className: "chat-icon-btn",
          onClick: l,
          "aria-label": "Toggle chat history",
          children: "☰",
        }),
        L.jsx("h1", { className: "chat-app-title", children: "Chat" }),
        L.jsx("button", {
          className: "chat-icon-btn",
          onClick: i,
          "aria-label": "New chat",
          children: "＋",
        }),
      ],
    }),
  H1 = ({
    chats: l,
    activeChatId: i,
    onSelectChat: u,
    onNewChat: r,
    open: o,
  }) =>
    L.jsxs("aside", {
      className: "chat-sidebar " + (o ? "open" : ""),
      "aria-label": "Previous chats",
      children: [
        L.jsxs("div", {
          className: "sidebar-header",
          children: [
            L.jsx("h2", { children: "Chats" }),
            L.jsx("button", {
              className: "small-btn",
              onClick: r,
              children: "New",
            }),
          ],
        }),
        L.jsxs("nav", {
          className: "chat-list",
          "aria-live": "polite",
          children: [
            l.map((f) =>
              L.jsx(
                "button",
                {
                  className: "chat-list-item " + (f._id === i ? "active" : ""),
                  onClick: () => u(f._id),
                  children: L.jsx("span", {
                    className: "title-line",
                    children: f.title,
                  }),
                },
                f._id,
              ),
            ),
            l.length === 0 &&
              L.jsx("p", {
                className: "empty-hint",
                children: "No chats yet.",
              }),
          ],
        }),
      ],
    }),
  q1 = ({ messages: l, isSending: i }) => {
    const u = N.useRef(null);
    return (
      N.useEffect(() => {
        u.current?.scrollIntoView({ behavior: "smooth" });
      }, [l.length, i]),
      L.jsxs("div", {
        className: "messages",
        "aria-live": "polite",
        children: [
          l.map((r, o) =>
            L.jsxs(
              "div",
              {
                className: `msg msg-${r.type}`,
                children: [
                  L.jsx("div", {
                    className: "msg-role",
                    "aria-hidden": "true",
                    children: r.type === "user" ? "You" : "AI",
                  }),
                  L.jsx("div", {
                    className: "msg-bubble",
                    children: r.content,
                  }),
                  L.jsxs("div", {
                    className: "msg-actions",
                    role: "group",
                    "aria-label": "Message actions",
                    children: [
                      L.jsx("button", {
                        type: "button",
                        "aria-label": "Copy message",
                        onClick: () => navigator.clipboard.writeText(r.content),
                        children: L.jsxs("svg", {
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          children: [
                            L.jsx("rect", {
                              x: "9",
                              y: "9",
                              width: "13",
                              height: "13",
                              rx: "2",
                              ry: "2",
                            }),
                            L.jsx("path", {
                              d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
                            }),
                          ],
                        }),
                      }),
                      r.role === "ai" &&
                        L.jsxs(L.Fragment, {
                          children: [
                            L.jsx("button", {
                              type: "button",
                              "aria-label": "Like response",
                              children: L.jsxs("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                children: [
                                  L.jsx("path", { d: "M7 10v11" }),
                                  L.jsx("path", {
                                    d: "M15 21H9a2 2 0 0 1-2-2v-9l5-7 1 1a2 2 0 0 1 .5 1.3V9h5a2 2 0 0 1 2 2l-2 8a2 2 0 0 1-2 2Z",
                                  }),
                                ],
                              }),
                            }),
                            L.jsx("button", {
                              type: "button",
                              "aria-label": "Dislike response",
                              children: L.jsxs("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                children: [
                                  L.jsx("path", { d: "M17 14V3" }),
                                  L.jsx("path", {
                                    d: "M9 3h6a2 2 0 0 1 2 2v9l-5 7-1-1a2 2 0 0 1-.5-1.3V15H5a2 2 0 0 1-2-2l2-8a2 2 0 0 1 2-2Z",
                                  }),
                                ],
                              }),
                            }),
                            L.jsx("button", {
                              type: "button",
                              "aria-label": "Speak message",
                              onClick: () => {
                                try {
                                  const f = new SpeechSynthesisUtterance(
                                    r.content,
                                  );
                                  speechSynthesis.speak(f);
                                } catch {}
                              },
                              children: L.jsxs("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                children: [
                                  L.jsx("path", { d: "M5 8v8" }),
                                  L.jsx("path", { d: "M8 4v16" }),
                                  L.jsx("path", { d: "M12 2v20" }),
                                  L.jsx("path", {
                                    d: "M19 5c1.5 2 1.5 12 0 14",
                                  }),
                                  L.jsx("path", { d: "M16 8c.8 1 1 7 0 8" }),
                                ],
                              }),
                            }),
                            L.jsx("button", {
                              type: "button",
                              "aria-label": "Regenerate",
                              onClick: () => {},
                              children: L.jsxs("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                children: [
                                  L.jsx("path", {
                                    d: "M2 12A10 10 0 0 1 12 2c2.5 0 4.8 1 6.5 2.5L22 8",
                                  }),
                                  L.jsx("path", { d: "M22 2v6h-6" }),
                                  L.jsx("path", {
                                    d: "M22 12a10 10 0 0 1-10 10c-2.5 0-4.8-1-6.5-2.5L2 16",
                                  }),
                                  L.jsx("path", { d: "M2 22v-6h6" }),
                                ],
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              },
              o,
            ),
          ),
          i &&
            L.jsxs("div", {
              className: "msg msg-ai pending",
              children: [
                L.jsx("div", {
                  className: "msg-role",
                  "aria-hidden": "true",
                  children: "AI",
                }),
                L.jsxs("div", {
                  className: "msg-bubble typing-dots",
                  "aria-label": "AI is typing",
                  children: [
                    L.jsx("span", {}),
                    L.jsx("span", {}),
                    L.jsx("span", {}),
                  ],
                }),
              ],
            }),
          L.jsx("div", { ref: u }),
        ],
      })
    );
  },
  Y1 = ({ input: l, setInput: i, onSend: u, isSending: r }) => {
    const o = N.useRef(null);
    N.useLayoutEffect(() => {
      const d = o.current;
      d &&
        ((d.style.height = "auto"),
        (d.style.height = Math.min(d.scrollHeight, 320) + "px"));
    }, [l]);
    const f = N.useCallback(
      (d) => {
        d.key === "Enter" &&
          !d.shiftKey &&
          (d.preventDefault(), l.trim() && u());
      },
      [u, l],
    );
    return L.jsx("form", {
      className: "composer",
      onSubmit: (d) => {
        (d.preventDefault(), l.trim() && u());
      },
      children: L.jsxs("div", {
        className: "composer-surface",
        "data-state": r ? "sending" : void 0,
        children: [
          L.jsxs("div", {
            className: "composer-field",
            children: [
              L.jsx("textarea", {
                ref: o,
                className: "composer-input",
                placeholder: "Message ChatGPT…",
                "aria-label": "Message",
                value: l,
                onChange: (d) => i(d.target.value),
                onKeyDown: f,
                rows: 1,
                spellCheck: !0,
                autoComplete: "off",
              }),
              L.jsx("div", {
                className: "composer-hint",
                "aria-hidden": "true",
                children: "Enter ↵ to send • Shift+Enter = newline",
              }),
            ],
          }),
          L.jsx("button", {
            type: "submit",
            className: "send-btn icon-btn",
            disabled: !l.trim() || r,
            "aria-label": r ? "Sending…" : "Send message",
            children: L.jsx("span", {
              className: "send-icon",
              "aria-hidden": "true",
              children: L.jsxs("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  L.jsx("path", { d: "M5 12h14" }),
                  L.jsx("path", { d: "M12 5l7 7-7 7" }),
                ],
              }),
            }),
          }),
        ],
      }),
    });
  };
var go = { exports: {} },
  vo = {};
var Bp;
function V1() {
  if (Bp) return vo;
  Bp = 1;
  var l = _r();
  function i(y, g) {
    return (y === g && (y !== 0 || 1 / y === 1 / g)) || (y !== y && g !== g);
  }
  var u = typeof Object.is == "function" ? Object.is : i,
    r = l.useSyncExternalStore,
    o = l.useRef,
    f = l.useEffect,
    d = l.useMemo,
    p = l.useDebugValue;
  return (
    (vo.useSyncExternalStoreWithSelector = function (y, g, v, b, D) {
      var Y = o(null);
      if (Y.current === null) {
        var T = { hasValue: !1, value: null };
        Y.current = T;
      } else T = Y.current;
      Y = d(
        function () {
          function w($) {
            if (!X) {
              if (((X = !0), (G = $), ($ = b($)), D !== void 0 && T.hasValue)) {
                var te = T.value;
                if (D(te, $)) return (V = te);
              }
              return (V = $);
            }
            if (((te = V), u(G, $))) return te;
            var Z = b($);
            return D !== void 0 && D(te, Z)
              ? ((G = $), te)
              : ((G = $), (V = Z));
          }
          var X = !1,
            G,
            V,
            K = v === void 0 ? null : v;
          return [
            function () {
              return w(g());
            },
            K === null
              ? void 0
              : function () {
                  return w(K());
                },
          ];
        },
        [g, v, b, D],
      );
      var U = r(y, Y[0], Y[1]);
      return (
        f(
          function () {
            ((T.hasValue = !0), (T.value = U));
          },
          [U],
        ),
        p(U),
        U
      );
    }),
    vo
  );
}
var Lp;
function X1() {
  return (Lp || ((Lp = 1), (go.exports = V1())), go.exports);
}
var G1 = X1();
function Q1(l) {
  l();
}
function k1() {
  let l = null,
    i = null;
  return {
    clear() {
      ((l = null), (i = null));
    },
    notify() {
      Q1(() => {
        let u = l;
        for (; u; ) (u.callback(), (u = u.next));
      });
    },
    get() {
      const u = [];
      let r = l;
      for (; r; ) (u.push(r), (r = r.next));
      return u;
    },
    subscribe(u) {
      let r = !0;
      const o = (i = { callback: u, next: null, prev: i });
      return (
        o.prev ? (o.prev.next = o) : (l = o),
        function () {
          !r ||
            l === null ||
            ((r = !1),
            o.next ? (o.next.prev = o.prev) : (i = o.prev),
            o.prev ? (o.prev.next = o.next) : (l = o.next));
        }
      );
    },
  };
}
var jp = { notify() {}, get: () => [] };
function Z1(l, i) {
  let u,
    r = jp,
    o = 0,
    f = !1;
  function d(U) {
    v();
    const w = r.subscribe(U);
    let X = !1;
    return () => {
      X || ((X = !0), w(), b());
    };
  }
  function p() {
    r.notify();
  }
  function y() {
    T.onStateChange && T.onStateChange();
  }
  function g() {
    return f;
  }
  function v() {
    (o++, u || ((u = l.subscribe(y)), (r = k1())));
  }
  function b() {
    (o--, u && o === 0 && (u(), (u = void 0), r.clear(), (r = jp)));
  }
  function D() {
    f || ((f = !0), v());
  }
  function Y() {
    f && ((f = !1), b());
  }
  const T = {
    addNestedSub: d,
    notifyNestedSubs: p,
    handleChangeWrapper: y,
    isSubscribed: g,
    trySubscribe: D,
    tryUnsubscribe: Y,
    getListeners: () => r,
  };
  return T;
}
var K1 = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  J1 = K1(),
  F1 = () => typeof navigator < "u" && navigator.product === "ReactNative",
  $1 = F1(),
  W1 = () => (J1 || $1 ? N.useLayoutEffect : N.useEffect),
  P1 = W1(),
  I1 = Symbol.for("react-redux-context"),
  eE = typeof globalThis < "u" ? globalThis : {};
function tE() {
  if (!N.createContext) return {};
  const l = (eE[I1] ??= new Map());
  let i = l.get(N.createContext);
  return (i || ((i = N.createContext(null)), l.set(N.createContext, i)), i);
}
var In = tE();
function nE(l) {
  const { children: i, context: u, serverState: r, store: o } = l,
    f = N.useMemo(() => {
      const y = Z1(o);
      return {
        store: o,
        subscription: y,
        getServerState: r ? () => r : void 0,
      };
    }, [o, r]),
    d = N.useMemo(() => o.getState(), [o]);
  P1(() => {
    const { subscription: y } = f;
    return (
      (y.onStateChange = y.notifyNestedSubs),
      y.trySubscribe(),
      d !== o.getState() && y.notifyNestedSubs(),
      () => {
        (y.tryUnsubscribe(), (y.onStateChange = void 0));
      }
    );
  }, [f, d]);
  const p = u || In;
  return N.createElement(p.Provider, { value: f }, i);
}
var lE = nE;
function lf(l = In) {
  return function () {
    return N.useContext(l);
  };
}
var Ky = lf();
function Jy(l = In) {
  const i = l === In ? Ky : lf(l),
    u = () => {
      const { store: r } = i();
      return r;
    };
  return (Object.assign(u, { withTypes: () => u }), u);
}
var aE = Jy();
function iE(l = In) {
  const i = l === In ? aE : Jy(l),
    u = () => i().dispatch;
  return (Object.assign(u, { withTypes: () => u }), u);
}
var uE = iE(),
  rE = (l, i) => l === i;
function sE(l = In) {
  const i = l === In ? Ky : lf(l),
    u = (r, o = {}) => {
      const { equalityFn: f = rE } =
          typeof o == "function" ? { equalityFn: o } : o,
        d = i(),
        { store: p, subscription: y, getServerState: g } = d;
      N.useRef(!0);
      const v = N.useCallback(
          {
            [r.name](D) {
              return r(D);
            },
          }[r.name],
          [r],
        ),
        b = G1.useSyncExternalStoreWithSelector(
          y.addNestedSub,
          p.getState,
          g || p.getState,
          v,
          f,
        );
      return (N.useDebugValue(b), b);
    };
  return (Object.assign(u, { withTypes: () => u }), u);
}
var Fu = sE();
function Fy(l, i) {
  return function () {
    return l.apply(i, arguments);
  };
}
const { toString: cE } = Object.prototype,
  { getPrototypeOf: af } = Object,
  { iterator: wr, toStringTag: $y } = Symbol,
  xr = ((l) => (i) => {
    const u = cE.call(i);
    return l[u] || (l[u] = u.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Jt = (l) => ((l = l.toLowerCase()), (i) => xr(i) === l),
  Nr = (l) => (i) => typeof i === l,
  { isArray: ma } = Array,
  ca = Nr("undefined");
function Ti(l) {
  return (
    l !== null &&
    !ca(l) &&
    l.constructor !== null &&
    !ca(l.constructor) &&
    pt(l.constructor.isBuffer) &&
    l.constructor.isBuffer(l)
  );
}
const Wy = Jt("ArrayBuffer");
function oE(l) {
  let i;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (i = ArrayBuffer.isView(l))
      : (i = l && l.buffer && Wy(l.buffer)),
    i
  );
}
const fE = Nr("string"),
  pt = Nr("function"),
  Py = Nr("number"),
  Ri = (l) => l !== null && typeof l == "object",
  hE = (l) => l === !0 || l === !1,
  rr = (l) => {
    if (xr(l) !== "object") return !1;
    const i = af(l);
    return (
      (i === null ||
        i === Object.prototype ||
        Object.getPrototypeOf(i) === null) &&
      !($y in l) &&
      !(wr in l)
    );
  },
  dE = (l) => {
    if (!Ri(l) || Ti(l)) return !1;
    try {
      return (
        Object.keys(l).length === 0 &&
        Object.getPrototypeOf(l) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  mE = Jt("Date"),
  pE = Jt("File"),
  yE = Jt("Blob"),
  gE = Jt("FileList"),
  vE = (l) => Ri(l) && pt(l.pipe),
  bE = (l) => {
    let i;
    return (
      l &&
      ((typeof FormData == "function" && l instanceof FormData) ||
        (pt(l.append) &&
          ((i = xr(l)) === "formdata" ||
            (i === "object" &&
              pt(l.toString) &&
              l.toString() === "[object FormData]"))))
    );
  },
  SE = Jt("URLSearchParams"),
  [EE, _E, TE, RE] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Jt,
  ),
  AE = (l) =>
    l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ai(l, i, { allOwnKeys: u = !1 } = {}) {
  if (l === null || typeof l > "u") return;
  let r, o;
  if ((typeof l != "object" && (l = [l]), ma(l)))
    for (r = 0, o = l.length; r < o; r++) i.call(null, l[r], r, l);
  else {
    if (Ti(l)) return;
    const f = u ? Object.getOwnPropertyNames(l) : Object.keys(l),
      d = f.length;
    let p;
    for (r = 0; r < d; r++) ((p = f[r]), i.call(null, l[p], p, l));
  }
}
function Iy(l, i) {
  if (Ti(l)) return null;
  i = i.toLowerCase();
  const u = Object.keys(l);
  let r = u.length,
    o;
  for (; r-- > 0; ) if (((o = u[r]), i === o.toLowerCase())) return o;
  return null;
}
const bl =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  eg = (l) => !ca(l) && l !== bl;
function Mo() {
  const { caseless: l, skipUndefined: i } = (eg(this) && this) || {},
    u = {},
    r = (o, f) => {
      const d = (l && Iy(u, f)) || f;
      rr(u[d]) && rr(o)
        ? (u[d] = Mo(u[d], o))
        : rr(o)
          ? (u[d] = Mo({}, o))
          : ma(o)
            ? (u[d] = o.slice())
            : (!i || !ca(o)) && (u[d] = o);
    };
  for (let o = 0, f = arguments.length; o < f; o++)
    arguments[o] && Ai(arguments[o], r);
  return u;
}
const OE = (l, i, u, { allOwnKeys: r } = {}) => (
    Ai(
      i,
      (o, f) => {
        u && pt(o) ? (l[f] = Fy(o, u)) : (l[f] = o);
      },
      { allOwnKeys: r },
    ),
    l
  ),
  CE = (l) => (l.charCodeAt(0) === 65279 && (l = l.slice(1)), l),
  wE = (l, i, u, r) => {
    ((l.prototype = Object.create(i.prototype, r)),
      (l.prototype.constructor = l),
      Object.defineProperty(l, "super", { value: i.prototype }),
      u && Object.assign(l.prototype, u));
  },
  xE = (l, i, u, r) => {
    let o, f, d;
    const p = {};
    if (((i = i || {}), l == null)) return i;
    do {
      for (o = Object.getOwnPropertyNames(l), f = o.length; f-- > 0; )
        ((d = o[f]),
          (!r || r(d, l, i)) && !p[d] && ((i[d] = l[d]), (p[d] = !0)));
      l = u !== !1 && af(l);
    } while (l && (!u || u(l, i)) && l !== Object.prototype);
    return i;
  },
  NE = (l, i, u) => {
    ((l = String(l)),
      (u === void 0 || u > l.length) && (u = l.length),
      (u -= i.length));
    const r = l.indexOf(i, u);
    return r !== -1 && r === u;
  },
  zE = (l) => {
    if (!l) return null;
    if (ma(l)) return l;
    let i = l.length;
    if (!Py(i)) return null;
    const u = new Array(i);
    for (; i-- > 0; ) u[i] = l[i];
    return u;
  },
  DE = (
    (l) => (i) =>
      l && i instanceof l
  )(typeof Uint8Array < "u" && af(Uint8Array)),
  ME = (l, i) => {
    const r = (l && l[wr]).call(l);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const f = o.value;
      i.call(l, f[0], f[1]);
    }
  },
  UE = (l, i) => {
    let u;
    const r = [];
    for (; (u = l.exec(i)) !== null; ) r.push(u);
    return r;
  },
  BE = Jt("HTMLFormElement"),
  LE = (l) =>
    l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (u, r, o) {
      return r.toUpperCase() + o;
    }),
  Hp = (
    ({ hasOwnProperty: l }) =>
    (i, u) =>
      l.call(i, u)
  )(Object.prototype),
  jE = Jt("RegExp"),
  tg = (l, i) => {
    const u = Object.getOwnPropertyDescriptors(l),
      r = {};
    (Ai(u, (o, f) => {
      let d;
      (d = i(o, f, l)) !== !1 && (r[f] = d || o);
    }),
      Object.defineProperties(l, r));
  },
  HE = (l) => {
    tg(l, (i, u) => {
      if (pt(l) && ["arguments", "caller", "callee"].indexOf(u) !== -1)
        return !1;
      const r = l[u];
      if (pt(r)) {
        if (((i.enumerable = !1), "writable" in i)) {
          i.writable = !1;
          return;
        }
        i.set ||
          (i.set = () => {
            throw Error("Can not rewrite read-only method '" + u + "'");
          });
      }
    });
  },
  qE = (l, i) => {
    const u = {},
      r = (o) => {
        o.forEach((f) => {
          u[f] = !0;
        });
      };
    return (ma(l) ? r(l) : r(String(l).split(i)), u);
  },
  YE = () => {},
  VE = (l, i) => (l != null && Number.isFinite((l = +l)) ? l : i);
function XE(l) {
  return !!(l && pt(l.append) && l[$y] === "FormData" && l[wr]);
}
const GE = (l) => {
    const i = new Array(10),
      u = (r, o) => {
        if (Ri(r)) {
          if (i.indexOf(r) >= 0) return;
          if (Ti(r)) return r;
          if (!("toJSON" in r)) {
            i[o] = r;
            const f = ma(r) ? [] : {};
            return (
              Ai(r, (d, p) => {
                const y = u(d, o + 1);
                !ca(y) && (f[p] = y);
              }),
              (i[o] = void 0),
              f
            );
          }
        }
        return r;
      };
    return u(l, 0);
  },
  QE = Jt("AsyncFunction"),
  kE = (l) => l && (Ri(l) || pt(l)) && pt(l.then) && pt(l.catch),
  ng = ((l, i) =>
    l
      ? setImmediate
      : i
        ? ((u, r) => (
            bl.addEventListener(
              "message",
              ({ source: o, data: f }) => {
                o === bl && f === u && r.length && r.shift()();
              },
              !1,
            ),
            (o) => {
              (r.push(o), bl.postMessage(u, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (u) => setTimeout(u))(
    typeof setImmediate == "function",
    pt(bl.postMessage),
  ),
  ZE =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(bl)
      : (typeof process < "u" && process.nextTick) || ng,
  KE = (l) => l != null && pt(l[wr]),
  x = {
    isArray: ma,
    isArrayBuffer: Wy,
    isBuffer: Ti,
    isFormData: bE,
    isArrayBufferView: oE,
    isString: fE,
    isNumber: Py,
    isBoolean: hE,
    isObject: Ri,
    isPlainObject: rr,
    isEmptyObject: dE,
    isReadableStream: EE,
    isRequest: _E,
    isResponse: TE,
    isHeaders: RE,
    isUndefined: ca,
    isDate: mE,
    isFile: pE,
    isBlob: yE,
    isRegExp: jE,
    isFunction: pt,
    isStream: vE,
    isURLSearchParams: SE,
    isTypedArray: DE,
    isFileList: gE,
    forEach: Ai,
    merge: Mo,
    extend: OE,
    trim: AE,
    stripBOM: CE,
    inherits: wE,
    toFlatObject: xE,
    kindOf: xr,
    kindOfTest: Jt,
    endsWith: NE,
    toArray: zE,
    forEachEntry: ME,
    matchAll: UE,
    isHTMLForm: BE,
    hasOwnProperty: Hp,
    hasOwnProp: Hp,
    reduceDescriptors: tg,
    freezeMethods: HE,
    toObjectSet: qE,
    toCamelCase: LE,
    noop: YE,
    toFiniteNumber: VE,
    findKey: Iy,
    global: bl,
    isContextDefined: eg,
    isSpecCompliantForm: XE,
    toJSONObject: GE,
    isAsyncFn: QE,
    isThenable: kE,
    setImmediate: ng,
    asap: ZE,
    isIterable: KE,
  };
function ie(l, i, u, r, o) {
  (Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = l),
    (this.name = "AxiosError"),
    i && (this.code = i),
    u && (this.config = u),
    r && (this.request = r),
    o && ((this.response = o), (this.status = o.status ? o.status : null)));
}
x.inherits(ie, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: x.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const lg = ie.prototype,
  ag = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((l) => {
  ag[l] = { value: l };
});
Object.defineProperties(ie, ag);
Object.defineProperty(lg, "isAxiosError", { value: !0 });
ie.from = (l, i, u, r, o, f) => {
  const d = Object.create(lg);
  x.toFlatObject(
    l,
    d,
    function (v) {
      return v !== Error.prototype;
    },
    (g) => g !== "isAxiosError",
  );
  const p = l && l.message ? l.message : "Error",
    y = i == null && l ? l.code : i;
  return (
    ie.call(d, p, y, u, r, o),
    l &&
      d.cause == null &&
      Object.defineProperty(d, "cause", { value: l, configurable: !0 }),
    (d.name = (l && l.name) || "Error"),
    f && Object.assign(d, f),
    d
  );
};
const JE = null;
function Uo(l) {
  return x.isPlainObject(l) || x.isArray(l);
}
function ig(l) {
  return x.endsWith(l, "[]") ? l.slice(0, -2) : l;
}
function qp(l, i, u) {
  return l
    ? l
        .concat(i)
        .map(function (o, f) {
          return ((o = ig(o)), !u && f ? "[" + o + "]" : o);
        })
        .join(u ? "." : "")
    : i;
}
function FE(l) {
  return x.isArray(l) && !l.some(Uo);
}
const $E = x.toFlatObject(x, {}, null, function (i) {
  return /^is[A-Z]/.test(i);
});
function zr(l, i, u) {
  if (!x.isObject(l)) throw new TypeError("target must be an object");
  ((i = i || new FormData()),
    (u = x.toFlatObject(
      u,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (U, w) {
        return !x.isUndefined(w[U]);
      },
    )));
  const r = u.metaTokens,
    o = u.visitor || v,
    f = u.dots,
    d = u.indexes,
    y = (u.Blob || (typeof Blob < "u" && Blob)) && x.isSpecCompliantForm(i);
  if (!x.isFunction(o)) throw new TypeError("visitor must be a function");
  function g(T) {
    if (T === null) return "";
    if (x.isDate(T)) return T.toISOString();
    if (x.isBoolean(T)) return T.toString();
    if (!y && x.isBlob(T))
      throw new ie("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(T) || x.isTypedArray(T)
      ? y && typeof Blob == "function"
        ? new Blob([T])
        : Buffer.from(T)
      : T;
  }
  function v(T, U, w) {
    let X = T;
    if (T && !w && typeof T == "object") {
      if (x.endsWith(U, "{}"))
        ((U = r ? U : U.slice(0, -2)), (T = JSON.stringify(T)));
      else if (
        (x.isArray(T) && FE(T)) ||
        ((x.isFileList(T) || x.endsWith(U, "[]")) && (X = x.toArray(T)))
      )
        return (
          (U = ig(U)),
          X.forEach(function (V, K) {
            !(x.isUndefined(V) || V === null) &&
              i.append(
                d === !0 ? qp([U], K, f) : d === null ? U : U + "[]",
                g(V),
              );
          }),
          !1
        );
    }
    return Uo(T) ? !0 : (i.append(qp(w, U, f), g(T)), !1);
  }
  const b = [],
    D = Object.assign($E, {
      defaultVisitor: v,
      convertValue: g,
      isVisitable: Uo,
    });
  function Y(T, U) {
    if (!x.isUndefined(T)) {
      if (b.indexOf(T) !== -1)
        throw Error("Circular reference detected in " + U.join("."));
      (b.push(T),
        x.forEach(T, function (X, G) {
          (!(x.isUndefined(X) || X === null) &&
            o.call(i, X, x.isString(G) ? G.trim() : G, U, D)) === !0 &&
            Y(X, U ? U.concat(G) : [G]);
        }),
        b.pop());
    }
  }
  if (!x.isObject(l)) throw new TypeError("data must be an object");
  return (Y(l), i);
}
function Yp(l) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g, function (r) {
    return i[r];
  });
}
function uf(l, i) {
  ((this._pairs = []), l && zr(l, this, i));
}
const ug = uf.prototype;
ug.append = function (i, u) {
  this._pairs.push([i, u]);
};
ug.toString = function (i) {
  const u = i
    ? function (r) {
        return i.call(this, r, Yp);
      }
    : Yp;
  return this._pairs
    .map(function (o) {
      return u(o[0]) + "=" + u(o[1]);
    }, "")
    .join("&");
};
function WE(l) {
  return encodeURIComponent(l)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function rg(l, i, u) {
  if (!i) return l;
  const r = (u && u.encode) || WE;
  x.isFunction(u) && (u = { serialize: u });
  const o = u && u.serialize;
  let f;
  if (
    (o
      ? (f = o(i, u))
      : (f = x.isURLSearchParams(i) ? i.toString() : new uf(i, u).toString(r)),
    f)
  ) {
    const d = l.indexOf("#");
    (d !== -1 && (l = l.slice(0, d)),
      (l += (l.indexOf("?") === -1 ? "?" : "&") + f));
  }
  return l;
}
class Vp {
  constructor() {
    this.handlers = [];
  }
  use(i, u, r) {
    return (
      this.handlers.push({
        fulfilled: i,
        rejected: u,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(i) {
    this.handlers[i] && (this.handlers[i] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(i) {
    x.forEach(this.handlers, function (r) {
      r !== null && i(r);
    });
  }
}
const sg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  PE = typeof URLSearchParams < "u" ? URLSearchParams : uf,
  IE = typeof FormData < "u" ? FormData : null,
  e_ = typeof Blob < "u" ? Blob : null,
  t_ = {
    isBrowser: !0,
    classes: { URLSearchParams: PE, FormData: IE, Blob: e_ },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  rf = typeof window < "u" && typeof document < "u",
  Bo = (typeof navigator == "object" && navigator) || void 0,
  n_ =
    rf &&
    (!Bo || ["ReactNative", "NativeScript", "NS"].indexOf(Bo.product) < 0),
  l_ =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  a_ = (rf && window.location.href) || "http://localhost",
  i_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: rf,
        hasStandardBrowserEnv: n_,
        hasStandardBrowserWebWorkerEnv: l_,
        navigator: Bo,
        origin: a_,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  nt = { ...i_, ...t_ };
function u_(l, i) {
  return zr(l, new nt.classes.URLSearchParams(), {
    visitor: function (u, r, o, f) {
      return nt.isNode && x.isBuffer(u)
        ? (this.append(r, u.toString("base64")), !1)
        : f.defaultVisitor.apply(this, arguments);
    },
    ...i,
  });
}
function r_(l) {
  return x
    .matchAll(/\w+|\[(\w*)]/g, l)
    .map((i) => (i[0] === "[]" ? "" : i[1] || i[0]));
}
function s_(l) {
  const i = {},
    u = Object.keys(l);
  let r;
  const o = u.length;
  let f;
  for (r = 0; r < o; r++) ((f = u[r]), (i[f] = l[f]));
  return i;
}
function cg(l) {
  function i(u, r, o, f) {
    let d = u[f++];
    if (d === "__proto__") return !0;
    const p = Number.isFinite(+d),
      y = f >= u.length;
    return (
      (d = !d && x.isArray(o) ? o.length : d),
      y
        ? (x.hasOwnProp(o, d) ? (o[d] = [o[d], r]) : (o[d] = r), !p)
        : ((!o[d] || !x.isObject(o[d])) && (o[d] = []),
          i(u, r, o[d], f) && x.isArray(o[d]) && (o[d] = s_(o[d])),
          !p)
    );
  }
  if (x.isFormData(l) && x.isFunction(l.entries)) {
    const u = {};
    return (
      x.forEachEntry(l, (r, o) => {
        i(r_(r), o, u, 0);
      }),
      u
    );
  }
  return null;
}
function c_(l, i, u) {
  if (x.isString(l))
    try {
      return ((i || JSON.parse)(l), x.trim(l));
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (u || JSON.stringify)(l);
}
const Oi = {
  transitional: sg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (i, u) {
      const r = u.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        f = x.isObject(i);
      if ((f && x.isHTMLForm(i) && (i = new FormData(i)), x.isFormData(i)))
        return o ? JSON.stringify(cg(i)) : i;
      if (
        x.isArrayBuffer(i) ||
        x.isBuffer(i) ||
        x.isStream(i) ||
        x.isFile(i) ||
        x.isBlob(i) ||
        x.isReadableStream(i)
      )
        return i;
      if (x.isArrayBufferView(i)) return i.buffer;
      if (x.isURLSearchParams(i))
        return (
          u.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          i.toString()
        );
      let p;
      if (f) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return u_(i, this.formSerializer).toString();
        if ((p = x.isFileList(i)) || r.indexOf("multipart/form-data") > -1) {
          const y = this.env && this.env.FormData;
          return zr(
            p ? { "files[]": i } : i,
            y && new y(),
            this.formSerializer,
          );
        }
      }
      return f || o ? (u.setContentType("application/json", !1), c_(i)) : i;
    },
  ],
  transformResponse: [
    function (i) {
      const u = this.transitional || Oi.transitional,
        r = u && u.forcedJSONParsing,
        o = this.responseType === "json";
      if (x.isResponse(i) || x.isReadableStream(i)) return i;
      if (i && x.isString(i) && ((r && !this.responseType) || o)) {
        const d = !(u && u.silentJSONParsing) && o;
        try {
          return JSON.parse(i, this.parseReviver);
        } catch (p) {
          if (d)
            throw p.name === "SyntaxError"
              ? ie.from(p, ie.ERR_BAD_RESPONSE, this, null, this.response)
              : p;
        }
      }
      return i;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: nt.classes.FormData, Blob: nt.classes.Blob },
  validateStatus: function (i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
x.forEach(["delete", "get", "head", "post", "put", "patch"], (l) => {
  Oi.headers[l] = {};
});
const o_ = x.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  f_ = (l) => {
    const i = {};
    let u, r, o;
    return (
      l &&
        l
          .split(
            `
`,
          )
          .forEach(function (d) {
            ((o = d.indexOf(":")),
              (u = d.substring(0, o).trim().toLowerCase()),
              (r = d.substring(o + 1).trim()),
              !(!u || (i[u] && o_[u])) &&
                (u === "set-cookie"
                  ? i[u]
                    ? i[u].push(r)
                    : (i[u] = [r])
                  : (i[u] = i[u] ? i[u] + ", " + r : r)));
          }),
      i
    );
  },
  Xp = Symbol("internals");
function di(l) {
  return l && String(l).trim().toLowerCase();
}
function sr(l) {
  return l === !1 || l == null ? l : x.isArray(l) ? l.map(sr) : String(l);
}
function h_(l) {
  const i = Object.create(null),
    u = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = u.exec(l)); ) i[r[1]] = r[2];
  return i;
}
const d_ = (l) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());
function bo(l, i, u, r, o) {
  if (x.isFunction(r)) return r.call(this, i, u);
  if ((o && (i = u), !!x.isString(i))) {
    if (x.isString(r)) return i.indexOf(r) !== -1;
    if (x.isRegExp(r)) return r.test(i);
  }
}
function m_(l) {
  return l
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (i, u, r) => u.toUpperCase() + r);
}
function p_(l, i) {
  const u = x.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(l, r + u, {
      value: function (o, f, d) {
        return this[r].call(this, i, o, f, d);
      },
      configurable: !0,
    });
  });
}
let yt = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, u, r) {
    const o = this;
    function f(p, y, g) {
      const v = di(y);
      if (!v) throw new Error("header name must be a non-empty string");
      const b = x.findKey(o, v);
      (!b || o[b] === void 0 || g === !0 || (g === void 0 && o[b] !== !1)) &&
        (o[b || y] = sr(p));
    }
    const d = (p, y) => x.forEach(p, (g, v) => f(g, v, y));
    if (x.isPlainObject(i) || i instanceof this.constructor) d(i, u);
    else if (x.isString(i) && (i = i.trim()) && !d_(i)) d(f_(i), u);
    else if (x.isObject(i) && x.isIterable(i)) {
      let p = {},
        y,
        g;
      for (const v of i) {
        if (!x.isArray(v))
          throw TypeError("Object iterator must return a key-value pair");
        p[(g = v[0])] = (y = p[g])
          ? x.isArray(y)
            ? [...y, v[1]]
            : [y, v[1]]
          : v[1];
      }
      d(p, u);
    } else i != null && f(u, i, r);
    return this;
  }
  get(i, u) {
    if (((i = di(i)), i)) {
      const r = x.findKey(this, i);
      if (r) {
        const o = this[r];
        if (!u) return o;
        if (u === !0) return h_(o);
        if (x.isFunction(u)) return u.call(this, o, r);
        if (x.isRegExp(u)) return u.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, u) {
    if (((i = di(i)), i)) {
      const r = x.findKey(this, i);
      return !!(r && this[r] !== void 0 && (!u || bo(this, this[r], r, u)));
    }
    return !1;
  }
  delete(i, u) {
    const r = this;
    let o = !1;
    function f(d) {
      if (((d = di(d)), d)) {
        const p = x.findKey(r, d);
        p && (!u || bo(r, r[p], p, u)) && (delete r[p], (o = !0));
      }
    }
    return (x.isArray(i) ? i.forEach(f) : f(i), o);
  }
  clear(i) {
    const u = Object.keys(this);
    let r = u.length,
      o = !1;
    for (; r--; ) {
      const f = u[r];
      (!i || bo(this, this[f], f, i, !0)) && (delete this[f], (o = !0));
    }
    return o;
  }
  normalize(i) {
    const u = this,
      r = {};
    return (
      x.forEach(this, (o, f) => {
        const d = x.findKey(r, f);
        if (d) {
          ((u[d] = sr(o)), delete u[f]);
          return;
        }
        const p = i ? m_(f) : String(f).trim();
        (p !== f && delete u[f], (u[p] = sr(o)), (r[p] = !0));
      }),
      this
    );
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const u = Object.create(null);
    return (
      x.forEach(this, (r, o) => {
        r != null && r !== !1 && (u[o] = i && x.isArray(r) ? r.join(", ") : r);
      }),
      u
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, u]) => i + ": " + u).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...u) {
    const r = new this(i);
    return (u.forEach((o) => r.set(o)), r);
  }
  static accessor(i) {
    const r = (this[Xp] = this[Xp] = { accessors: {} }).accessors,
      o = this.prototype;
    function f(d) {
      const p = di(d);
      r[p] || (p_(o, d), (r[p] = !0));
    }
    return (x.isArray(i) ? i.forEach(f) : f(i), this);
  }
};
yt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
x.reduceDescriptors(yt.prototype, ({ value: l }, i) => {
  let u = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => l,
    set(r) {
      this[u] = r;
    },
  };
});
x.freezeMethods(yt);
function So(l, i) {
  const u = this || Oi,
    r = i || u,
    o = yt.from(r.headers);
  let f = r.data;
  return (
    x.forEach(l, function (p) {
      f = p.call(u, f, o.normalize(), i ? i.status : void 0);
    }),
    o.normalize(),
    f
  );
}
function og(l) {
  return !!(l && l.__CANCEL__);
}
function pa(l, i, u) {
  (ie.call(this, l ?? "canceled", ie.ERR_CANCELED, i, u),
    (this.name = "CanceledError"));
}
x.inherits(pa, ie, { __CANCEL__: !0 });
function fg(l, i, u) {
  const r = u.config.validateStatus;
  !u.status || !r || r(u.status)
    ? l(u)
    : i(
        new ie(
          "Request failed with status code " + u.status,
          [ie.ERR_BAD_REQUEST, ie.ERR_BAD_RESPONSE][
            Math.floor(u.status / 100) - 4
          ],
          u.config,
          u.request,
          u,
        ),
      );
}
function y_(l) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l);
  return (i && i[1]) || "";
}
function g_(l, i) {
  l = l || 10;
  const u = new Array(l),
    r = new Array(l);
  let o = 0,
    f = 0,
    d;
  return (
    (i = i !== void 0 ? i : 1e3),
    function (y) {
      const g = Date.now(),
        v = r[f];
      (d || (d = g), (u[o] = y), (r[o] = g));
      let b = f,
        D = 0;
      for (; b !== o; ) ((D += u[b++]), (b = b % l));
      if (((o = (o + 1) % l), o === f && (f = (f + 1) % l), g - d < i)) return;
      const Y = v && g - v;
      return Y ? Math.round((D * 1e3) / Y) : void 0;
    }
  );
}
function v_(l, i) {
  let u = 0,
    r = 1e3 / i,
    o,
    f;
  const d = (g, v = Date.now()) => {
    ((u = v), (o = null), f && (clearTimeout(f), (f = null)), l(...g));
  };
  return [
    (...g) => {
      const v = Date.now(),
        b = v - u;
      b >= r
        ? d(g, v)
        : ((o = g),
          f ||
            (f = setTimeout(() => {
              ((f = null), d(o));
            }, r - b)));
    },
    () => o && d(o),
  ];
}
const dr = (l, i, u = 3) => {
    let r = 0;
    const o = g_(50, 250);
    return v_((f) => {
      const d = f.loaded,
        p = f.lengthComputable ? f.total : void 0,
        y = d - r,
        g = o(y),
        v = d <= p;
      r = d;
      const b = {
        loaded: d,
        total: p,
        progress: p ? d / p : void 0,
        bytes: y,
        rate: g || void 0,
        estimated: g && p && v ? (p - d) / g : void 0,
        event: f,
        lengthComputable: p != null,
        [i ? "download" : "upload"]: !0,
      };
      l(b);
    }, u);
  },
  Gp = (l, i) => {
    const u = l != null;
    return [(r) => i[0]({ lengthComputable: u, total: l, loaded: r }), i[1]];
  },
  Qp =
    (l) =>
    (...i) =>
      x.asap(() => l(...i)),
  b_ = nt.hasStandardBrowserEnv
    ? ((l, i) => (u) => (
        (u = new URL(u, nt.origin)),
        l.protocol === u.protocol &&
          l.host === u.host &&
          (i || l.port === u.port)
      ))(
        new URL(nt.origin),
        nt.navigator && /(msie|trident)/i.test(nt.navigator.userAgent),
      )
    : () => !0,
  S_ = nt.hasStandardBrowserEnv
    ? {
        write(l, i, u, r, o, f, d) {
          if (typeof document > "u") return;
          const p = [`${l}=${encodeURIComponent(i)}`];
          (x.isNumber(u) && p.push(`expires=${new Date(u).toUTCString()}`),
            x.isString(r) && p.push(`path=${r}`),
            x.isString(o) && p.push(`domain=${o}`),
            f === !0 && p.push("secure"),
            x.isString(d) && p.push(`SameSite=${d}`),
            (document.cookie = p.join("; ")));
        },
        read(l) {
          if (typeof document > "u") return null;
          const i = document.cookie.match(
            new RegExp("(?:^|; )" + l + "=([^;]*)"),
          );
          return i ? decodeURIComponent(i[1]) : null;
        },
        remove(l) {
          this.write(l, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function E_(l) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l);
}
function __(l, i) {
  return i ? l.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : l;
}
function hg(l, i, u) {
  let r = !E_(i);
  return l && (r || u == !1) ? __(l, i) : i;
}
const kp = (l) => (l instanceof yt ? { ...l } : l);
function El(l, i) {
  i = i || {};
  const u = {};
  function r(g, v, b, D) {
    return x.isPlainObject(g) && x.isPlainObject(v)
      ? x.merge.call({ caseless: D }, g, v)
      : x.isPlainObject(v)
        ? x.merge({}, v)
        : x.isArray(v)
          ? v.slice()
          : v;
  }
  function o(g, v, b, D) {
    if (x.isUndefined(v)) {
      if (!x.isUndefined(g)) return r(void 0, g, b, D);
    } else return r(g, v, b, D);
  }
  function f(g, v) {
    if (!x.isUndefined(v)) return r(void 0, v);
  }
  function d(g, v) {
    if (x.isUndefined(v)) {
      if (!x.isUndefined(g)) return r(void 0, g);
    } else return r(void 0, v);
  }
  function p(g, v, b) {
    if (b in i) return r(g, v);
    if (b in l) return r(void 0, g);
  }
  const y = {
    url: f,
    method: f,
    data: f,
    baseURL: d,
    transformRequest: d,
    transformResponse: d,
    paramsSerializer: d,
    timeout: d,
    timeoutMessage: d,
    withCredentials: d,
    withXSRFToken: d,
    adapter: d,
    responseType: d,
    xsrfCookieName: d,
    xsrfHeaderName: d,
    onUploadProgress: d,
    onDownloadProgress: d,
    decompress: d,
    maxContentLength: d,
    maxBodyLength: d,
    beforeRedirect: d,
    transport: d,
    httpAgent: d,
    httpsAgent: d,
    cancelToken: d,
    socketPath: d,
    responseEncoding: d,
    validateStatus: p,
    headers: (g, v, b) => o(kp(g), kp(v), b, !0),
  };
  return (
    x.forEach(Object.keys({ ...l, ...i }), function (v) {
      const b = y[v] || o,
        D = b(l[v], i[v], v);
      (x.isUndefined(D) && b !== p) || (u[v] = D);
    }),
    u
  );
}
const dg = (l) => {
    const i = El({}, l);
    let {
      data: u,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: f,
      headers: d,
      auth: p,
    } = i;
    if (
      ((i.headers = d = yt.from(d)),
      (i.url = rg(
        hg(i.baseURL, i.url, i.allowAbsoluteUrls),
        l.params,
        l.paramsSerializer,
      )),
      p &&
        d.set(
          "Authorization",
          "Basic " +
            btoa(
              (p.username || "") +
                ":" +
                (p.password ? unescape(encodeURIComponent(p.password)) : ""),
            ),
        ),
      x.isFormData(u))
    ) {
      if (nt.hasStandardBrowserEnv || nt.hasStandardBrowserWebWorkerEnv)
        d.setContentType(void 0);
      else if (x.isFunction(u.getHeaders)) {
        const y = u.getHeaders(),
          g = ["content-type", "content-length"];
        Object.entries(y).forEach(([v, b]) => {
          g.includes(v.toLowerCase()) && d.set(v, b);
        });
      }
    }
    if (
      nt.hasStandardBrowserEnv &&
      (r && x.isFunction(r) && (r = r(i)), r || (r !== !1 && b_(i.url)))
    ) {
      const y = o && f && S_.read(f);
      y && d.set(o, y);
    }
    return i;
  },
  T_ = typeof XMLHttpRequest < "u",
  R_ =
    T_ &&
    function (l) {
      return new Promise(function (u, r) {
        const o = dg(l);
        let f = o.data;
        const d = yt.from(o.headers).normalize();
        let { responseType: p, onUploadProgress: y, onDownloadProgress: g } = o,
          v,
          b,
          D,
          Y,
          T;
        function U() {
          (Y && Y(),
            T && T(),
            o.cancelToken && o.cancelToken.unsubscribe(v),
            o.signal && o.signal.removeEventListener("abort", v));
        }
        let w = new XMLHttpRequest();
        (w.open(o.method.toUpperCase(), o.url, !0), (w.timeout = o.timeout));
        function X() {
          if (!w) return;
          const V = yt.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders(),
            ),
            $ = {
              data:
                !p || p === "text" || p === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: V,
              config: l,
              request: w,
            };
          (fg(
            function (Z) {
              (u(Z), U());
            },
            function (Z) {
              (r(Z), U());
            },
            $,
          ),
            (w = null));
        }
        ("onloadend" in w
          ? (w.onloadend = X)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(X);
            }),
          (w.onabort = function () {
            w &&
              (r(new ie("Request aborted", ie.ECONNABORTED, l, w)), (w = null));
          }),
          (w.onerror = function (K) {
            const $ = K && K.message ? K.message : "Network Error",
              te = new ie($, ie.ERR_NETWORK, l, w);
            ((te.event = K || null), r(te), (w = null));
          }),
          (w.ontimeout = function () {
            let K = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const $ = o.transitional || sg;
            (o.timeoutErrorMessage && (K = o.timeoutErrorMessage),
              r(
                new ie(
                  K,
                  $.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
                  l,
                  w,
                ),
              ),
              (w = null));
          }),
          f === void 0 && d.setContentType(null),
          "setRequestHeader" in w &&
            x.forEach(d.toJSON(), function (K, $) {
              w.setRequestHeader($, K);
            }),
          x.isUndefined(o.withCredentials) ||
            (w.withCredentials = !!o.withCredentials),
          p && p !== "json" && (w.responseType = o.responseType),
          g && (([D, T] = dr(g, !0)), w.addEventListener("progress", D)),
          y &&
            w.upload &&
            (([b, Y] = dr(y)),
            w.upload.addEventListener("progress", b),
            w.upload.addEventListener("loadend", Y)),
          (o.cancelToken || o.signal) &&
            ((v = (V) => {
              w &&
                (r(!V || V.type ? new pa(null, l, w) : V),
                w.abort(),
                (w = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(v),
            o.signal &&
              (o.signal.aborted
                ? v()
                : o.signal.addEventListener("abort", v))));
        const G = y_(o.url);
        if (G && nt.protocols.indexOf(G) === -1) {
          r(new ie("Unsupported protocol " + G + ":", ie.ERR_BAD_REQUEST, l));
          return;
        }
        w.send(f || null);
      });
    },
  A_ = (l, i) => {
    const { length: u } = (l = l ? l.filter(Boolean) : []);
    if (i || u) {
      let r = new AbortController(),
        o;
      const f = function (g) {
        if (!o) {
          ((o = !0), p());
          const v = g instanceof Error ? g : this.reason;
          r.abort(
            v instanceof ie ? v : new pa(v instanceof Error ? v.message : v),
          );
        }
      };
      let d =
        i &&
        setTimeout(() => {
          ((d = null), f(new ie(`timeout ${i} of ms exceeded`, ie.ETIMEDOUT)));
        }, i);
      const p = () => {
        l &&
          (d && clearTimeout(d),
          (d = null),
          l.forEach((g) => {
            g.unsubscribe
              ? g.unsubscribe(f)
              : g.removeEventListener("abort", f);
          }),
          (l = null));
      };
      l.forEach((g) => g.addEventListener("abort", f));
      const { signal: y } = r;
      return ((y.unsubscribe = () => x.asap(p)), y);
    }
  },
  O_ = function* (l, i) {
    let u = l.byteLength;
    if (u < i) {
      yield l;
      return;
    }
    let r = 0,
      o;
    for (; r < u; ) ((o = r + i), yield l.slice(r, o), (r = o));
  },
  C_ = async function* (l, i) {
    for await (const u of w_(l)) yield* O_(u, i);
  },
  w_ = async function* (l) {
    if (l[Symbol.asyncIterator]) {
      yield* l;
      return;
    }
    const i = l.getReader();
    try {
      for (;;) {
        const { done: u, value: r } = await i.read();
        if (u) break;
        yield r;
      }
    } finally {
      await i.cancel();
    }
  },
  Zp = (l, i, u, r) => {
    const o = C_(l, i);
    let f = 0,
      d,
      p = (y) => {
        d || ((d = !0), r && r(y));
      };
    return new ReadableStream(
      {
        async pull(y) {
          try {
            const { done: g, value: v } = await o.next();
            if (g) {
              (p(), y.close());
              return;
            }
            let b = v.byteLength;
            if (u) {
              let D = (f += b);
              u(D);
            }
            y.enqueue(new Uint8Array(v));
          } catch (g) {
            throw (p(g), g);
          }
        },
        cancel(y) {
          return (p(y), o.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  Kp = 64 * 1024,
  { isFunction: $u } = x,
  x_ = (({ Request: l, Response: i }) => ({ Request: l, Response: i }))(
    x.global,
  ),
  { ReadableStream: Jp, TextEncoder: Fp } = x.global,
  $p = (l, ...i) => {
    try {
      return !!l(...i);
    } catch {
      return !1;
    }
  },
  N_ = (l) => {
    l = x.merge.call({ skipUndefined: !0 }, x_, l);
    const { fetch: i, Request: u, Response: r } = l,
      o = i ? $u(i) : typeof fetch == "function",
      f = $u(u),
      d = $u(r);
    if (!o) return !1;
    const p = o && $u(Jp),
      y =
        o &&
        (typeof Fp == "function"
          ? (
              (T) => (U) =>
                T.encode(U)
            )(new Fp())
          : async (T) => new Uint8Array(await new u(T).arrayBuffer())),
      g =
        f &&
        p &&
        $p(() => {
          let T = !1;
          const U = new u(nt.origin, {
            body: new Jp(),
            method: "POST",
            get duplex() {
              return ((T = !0), "half");
            },
          }).headers.has("Content-Type");
          return T && !U;
        }),
      v = d && p && $p(() => x.isReadableStream(new r("").body)),
      b = { stream: v && ((T) => T.body) };
    o &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((T) => {
        !b[T] &&
          (b[T] = (U, w) => {
            let X = U && U[T];
            if (X) return X.call(U);
            throw new ie(
              `Response type '${T}' is not supported`,
              ie.ERR_NOT_SUPPORT,
              w,
            );
          });
      });
    const D = async (T) => {
        if (T == null) return 0;
        if (x.isBlob(T)) return T.size;
        if (x.isSpecCompliantForm(T))
          return (
            await new u(nt.origin, { method: "POST", body: T }).arrayBuffer()
          ).byteLength;
        if (x.isArrayBufferView(T) || x.isArrayBuffer(T)) return T.byteLength;
        if ((x.isURLSearchParams(T) && (T = T + ""), x.isString(T)))
          return (await y(T)).byteLength;
      },
      Y = async (T, U) => {
        const w = x.toFiniteNumber(T.getContentLength());
        return w ?? D(U);
      };
    return async (T) => {
      let {
          url: U,
          method: w,
          data: X,
          signal: G,
          cancelToken: V,
          timeout: K,
          onDownloadProgress: $,
          onUploadProgress: te,
          responseType: Z,
          headers: re,
          withCredentials: Ce = "same-origin",
          fetchOptions: Ke,
        } = dg(T),
        lt = i || fetch;
      Z = Z ? (Z + "").toLowerCase() : "text";
      let Ge = A_([G, V && V.toAbortSignal()], K),
        gt = null;
      const Je =
        Ge &&
        Ge.unsubscribe &&
        (() => {
          Ge.unsubscribe();
        });
      let rt;
      try {
        if (
          te &&
          g &&
          w !== "get" &&
          w !== "head" &&
          (rt = await Y(re, X)) !== 0
        ) {
          let E = new u(U, { method: "POST", body: X, duplex: "half" }),
            H;
          if (
            (x.isFormData(X) &&
              (H = E.headers.get("content-type")) &&
              re.setContentType(H),
            E.body)
          ) {
            const [k, J] = Gp(rt, dr(Qp(te)));
            X = Zp(E.body, Kp, k, J);
          }
        }
        x.isString(Ce) || (Ce = Ce ? "include" : "omit");
        const M = f && "credentials" in u.prototype,
          Q = {
            ...Ke,
            signal: Ge,
            method: w.toUpperCase(),
            headers: re.normalize().toJSON(),
            body: X,
            duplex: "half",
            credentials: M ? Ce : void 0,
          };
        gt = f && new u(U, Q);
        let P = await (f ? lt(gt, Ke) : lt(U, Q));
        const ge = v && (Z === "stream" || Z === "response");
        if (v && ($ || (ge && Je))) {
          const E = {};
          ["status", "statusText", "headers"].forEach((ne) => {
            E[ne] = P[ne];
          });
          const H = x.toFiniteNumber(P.headers.get("content-length")),
            [k, J] = ($ && Gp(H, dr(Qp($), !0))) || [];
          P = new r(
            Zp(P.body, Kp, k, () => {
              (J && J(), Je && Je());
            }),
            E,
          );
        }
        Z = Z || "text";
        let Se = await b[x.findKey(b, Z) || "text"](P, T);
        return (
          !ge && Je && Je(),
          await new Promise((E, H) => {
            fg(E, H, {
              data: Se,
              headers: yt.from(P.headers),
              status: P.status,
              statusText: P.statusText,
              config: T,
              request: gt,
            });
          })
        );
      } catch (M) {
        throw (
          Je && Je(),
          M && M.name === "TypeError" && /Load failed|fetch/i.test(M.message)
            ? Object.assign(new ie("Network Error", ie.ERR_NETWORK, T, gt), {
                cause: M.cause || M,
              })
            : ie.from(M, M && M.code, T, gt)
        );
      }
    };
  },
  z_ = new Map(),
  mg = (l) => {
    let i = (l && l.env) || {};
    const { fetch: u, Request: r, Response: o } = i,
      f = [r, o, u];
    let d = f.length,
      p = d,
      y,
      g,
      v = z_;
    for (; p--; )
      ((y = f[p]),
        (g = v.get(y)),
        g === void 0 && v.set(y, (g = p ? new Map() : N_(i))),
        (v = g));
    return g;
  };
mg();
const sf = { http: JE, xhr: R_, fetch: { get: mg } };
x.forEach(sf, (l, i) => {
  if (l) {
    try {
      Object.defineProperty(l, "name", { value: i });
    } catch {}
    Object.defineProperty(l, "adapterName", { value: i });
  }
});
const Wp = (l) => `- ${l}`,
  D_ = (l) => x.isFunction(l) || l === null || l === !1;
function M_(l, i) {
  l = x.isArray(l) ? l : [l];
  const { length: u } = l;
  let r, o;
  const f = {};
  for (let d = 0; d < u; d++) {
    r = l[d];
    let p;
    if (
      ((o = r),
      !D_(r) && ((o = sf[(p = String(r)).toLowerCase()]), o === void 0))
    )
      throw new ie(`Unknown adapter '${p}'`);
    if (o && (x.isFunction(o) || (o = o.get(i)))) break;
    f[p || "#" + d] = o;
  }
  if (!o) {
    const d = Object.entries(f).map(
      ([y, g]) =>
        `adapter ${y} ` +
        (g === !1
          ? "is not supported by the environment"
          : "is not available in the build"),
    );
    let p = u
      ? d.length > 1
        ? `since :
` +
          d.map(Wp).join(`
`)
        : " " + Wp(d[0])
      : "as no adapter specified";
    throw new ie(
      "There is no suitable adapter to dispatch the request " + p,
      "ERR_NOT_SUPPORT",
    );
  }
  return o;
}
const pg = { getAdapter: M_, adapters: sf };
function Eo(l) {
  if (
    (l.cancelToken && l.cancelToken.throwIfRequested(),
    l.signal && l.signal.aborted)
  )
    throw new pa(null, l);
}
function Pp(l) {
  return (
    Eo(l),
    (l.headers = yt.from(l.headers)),
    (l.data = So.call(l, l.transformRequest)),
    ["post", "put", "patch"].indexOf(l.method) !== -1 &&
      l.headers.setContentType("application/x-www-form-urlencoded", !1),
    pg
      .getAdapter(
        l.adapter || Oi.adapter,
        l,
      )(l)
      .then(
        function (r) {
          return (
            Eo(l),
            (r.data = So.call(l, l.transformResponse, r)),
            (r.headers = yt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            og(r) ||
              (Eo(l),
              r &&
                r.response &&
                ((r.response.data = So.call(
                  l,
                  l.transformResponse,
                  r.response,
                )),
                (r.response.headers = yt.from(r.response.headers)))),
            Promise.reject(r)
          );
        },
      )
  );
}
const yg = "1.13.2",
  Dr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (l, i) => {
    Dr[l] = function (r) {
      return typeof r === l || "a" + (i < 1 ? "n " : " ") + l;
    };
  },
);
const Ip = {};
Dr.transitional = function (i, u, r) {
  function o(f, d) {
    return (
      "[Axios v" +
      yg +
      "] Transitional option '" +
      f +
      "'" +
      d +
      (r ? ". " + r : "")
    );
  }
  return (f, d, p) => {
    if (i === !1)
      throw new ie(
        o(d, " has been removed" + (u ? " in " + u : "")),
        ie.ERR_DEPRECATED,
      );
    return (
      u &&
        !Ip[d] &&
        ((Ip[d] = !0),
        console.warn(
          o(
            d,
            " has been deprecated since v" +
              u +
              " and will be removed in the near future",
          ),
        )),
      i ? i(f, d, p) : !0
    );
  };
};
Dr.spelling = function (i) {
  return (u, r) => (console.warn(`${r} is likely a misspelling of ${i}`), !0);
};
function U_(l, i, u) {
  if (typeof l != "object")
    throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(l);
  let o = r.length;
  for (; o-- > 0; ) {
    const f = r[o],
      d = i[f];
    if (d) {
      const p = l[f],
        y = p === void 0 || d(p, f, l);
      if (y !== !0)
        throw new ie("option " + f + " must be " + y, ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (u !== !0) throw new ie("Unknown option " + f, ie.ERR_BAD_OPTION);
  }
}
const cr = { assertOptions: U_, validators: Dr },
  It = cr.validators;
let Sl = class {
  constructor(i) {
    ((this.defaults = i || {}),
      (this.interceptors = { request: new Vp(), response: new Vp() }));
  }
  async request(i, u) {
    try {
      return await this._request(i, u);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const f = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? f &&
              !String(r.stack).endsWith(f.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + f)
            : (r.stack = f);
        } catch {}
      }
      throw r;
    }
  }
  _request(i, u) {
    (typeof i == "string" ? ((u = u || {}), (u.url = i)) : (u = i || {}),
      (u = El(this.defaults, u)));
    const { transitional: r, paramsSerializer: o, headers: f } = u;
    (r !== void 0 &&
      cr.assertOptions(
        r,
        {
          silentJSONParsing: It.transitional(It.boolean),
          forcedJSONParsing: It.transitional(It.boolean),
          clarifyTimeoutError: It.transitional(It.boolean),
        },
        !1,
      ),
      o != null &&
        (x.isFunction(o)
          ? (u.paramsSerializer = { serialize: o })
          : cr.assertOptions(
              o,
              { encode: It.function, serialize: It.function },
              !0,
            )),
      u.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (u.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (u.allowAbsoluteUrls = !0)),
      cr.assertOptions(
        u,
        {
          baseUrl: It.spelling("baseURL"),
          withXsrfToken: It.spelling("withXSRFToken"),
        },
        !0,
      ),
      (u.method = (u.method || this.defaults.method || "get").toLowerCase()));
    let d = f && x.merge(f.common, f[u.method]);
    (f &&
      x.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (T) => {
          delete f[T];
        },
      ),
      (u.headers = yt.concat(d, f)));
    const p = [];
    let y = !0;
    this.interceptors.request.forEach(function (U) {
      (typeof U.runWhen == "function" && U.runWhen(u) === !1) ||
        ((y = y && U.synchronous), p.unshift(U.fulfilled, U.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function (U) {
      g.push(U.fulfilled, U.rejected);
    });
    let v,
      b = 0,
      D;
    if (!y) {
      const T = [Pp.bind(this), void 0];
      for (
        T.unshift(...p), T.push(...g), D = T.length, v = Promise.resolve(u);
        b < D;
      )
        v = v.then(T[b++], T[b++]);
      return v;
    }
    D = p.length;
    let Y = u;
    for (; b < D; ) {
      const T = p[b++],
        U = p[b++];
      try {
        Y = T(Y);
      } catch (w) {
        U.call(this, w);
        break;
      }
    }
    try {
      v = Pp.call(this, Y);
    } catch (T) {
      return Promise.reject(T);
    }
    for (b = 0, D = g.length; b < D; ) v = v.then(g[b++], g[b++]);
    return v;
  }
  getUri(i) {
    i = El(this.defaults, i);
    const u = hg(i.baseURL, i.url, i.allowAbsoluteUrls);
    return rg(u, i.params, i.paramsSerializer);
  }
};
x.forEach(["delete", "get", "head", "options"], function (i) {
  Sl.prototype[i] = function (u, r) {
    return this.request(
      El(r || {}, { method: i, url: u, data: (r || {}).data }),
    );
  };
});
x.forEach(["post", "put", "patch"], function (i) {
  function u(r) {
    return function (f, d, p) {
      return this.request(
        El(p || {}, {
          method: i,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: f,
          data: d,
        }),
      );
    };
  }
  ((Sl.prototype[i] = u()), (Sl.prototype[i + "Form"] = u(!0)));
});
let B_ = class gg {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let u;
    this.promise = new Promise(function (f) {
      u = f;
    });
    const r = this;
    (this.promise.then((o) => {
      if (!r._listeners) return;
      let f = r._listeners.length;
      for (; f-- > 0; ) r._listeners[f](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let f;
        const d = new Promise((p) => {
          (r.subscribe(p), (f = p));
        }).then(o);
        return (
          (d.cancel = function () {
            r.unsubscribe(f);
          }),
          d
        );
      }),
      i(function (f, d, p) {
        r.reason || ((r.reason = new pa(f, d, p)), u(r.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : (this._listeners = [i]);
  }
  unsubscribe(i) {
    if (!this._listeners) return;
    const u = this._listeners.indexOf(i);
    u !== -1 && this._listeners.splice(u, 1);
  }
  toAbortSignal() {
    const i = new AbortController(),
      u = (r) => {
        i.abort(r);
      };
    return (
      this.subscribe(u),
      (i.signal.unsubscribe = () => this.unsubscribe(u)),
      i.signal
    );
  }
  static source() {
    let i;
    return {
      token: new gg(function (o) {
        i = o;
      }),
      cancel: i,
    };
  }
};
function L_(l) {
  return function (u) {
    return l.apply(null, u);
  };
}
function j_(l) {
  return x.isObject(l) && l.isAxiosError === !0;
}
const Lo = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(Lo).forEach(([l, i]) => {
  Lo[i] = l;
});
function vg(l) {
  const i = new Sl(l),
    u = Fy(Sl.prototype.request, i);
  return (
    x.extend(u, Sl.prototype, i, { allOwnKeys: !0 }),
    x.extend(u, i, null, { allOwnKeys: !0 }),
    (u.create = function (o) {
      return vg(El(l, o));
    }),
    u
  );
}
const Ne = vg(Oi);
Ne.Axios = Sl;
Ne.CanceledError = pa;
Ne.CancelToken = B_;
Ne.isCancel = og;
Ne.VERSION = yg;
Ne.toFormData = zr;
Ne.AxiosError = ie;
Ne.Cancel = Ne.CanceledError;
Ne.all = function (i) {
  return Promise.all(i);
};
Ne.spread = L_;
Ne.isAxiosError = j_;
Ne.mergeConfig = El;
Ne.AxiosHeaders = yt;
Ne.formToJSON = (l) => cg(x.isHTMLForm(l) ? new FormData(l) : l);
Ne.getAdapter = pg.getAdapter;
Ne.HttpStatusCode = Lo;
Ne.default = Ne;
const {
  Axios: G2,
  AxiosError: Q2,
  CanceledError: k2,
  isCancel: Z2,
  CancelToken: K2,
  VERSION: J2,
  all: F2,
  Cancel: $2,
  isAxiosError: W2,
  spread: P2,
  toFormData: I2,
  AxiosHeaders: eT,
  HttpStatusCode: tT,
  formToJSON: nT,
  getAdapter: lT,
  mergeConfig: aT,
} = Ne;
function et(l) {
  return `Minified Redux error #${l}; visit https://redux.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `;
}
var H_ = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  ey = H_,
  _o = () => Math.random().toString(36).substring(7).split("").join("."),
  q_ = {
    INIT: `@@redux/INIT${_o()}`,
    REPLACE: `@@redux/REPLACE${_o()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${_o()}`,
  },
  mr = q_;
function cf(l) {
  if (typeof l != "object" || l === null) return !1;
  let i = l;
  for (; Object.getPrototypeOf(i) !== null; ) i = Object.getPrototypeOf(i);
  return Object.getPrototypeOf(l) === i || Object.getPrototypeOf(l) === null;
}
function bg(l, i, u) {
  if (typeof l != "function") throw new Error(et(2));
  if (
    (typeof i == "function" && typeof u == "function") ||
    (typeof u == "function" && typeof arguments[3] == "function")
  )
    throw new Error(et(0));
  if (
    (typeof i == "function" && typeof u > "u" && ((u = i), (i = void 0)),
    typeof u < "u")
  ) {
    if (typeof u != "function") throw new Error(et(1));
    return u(bg)(l, i);
  }
  let r = l,
    o = i,
    f = new Map(),
    d = f,
    p = 0,
    y = !1;
  function g() {
    d === f &&
      ((d = new Map()),
      f.forEach((w, X) => {
        d.set(X, w);
      }));
  }
  function v() {
    if (y) throw new Error(et(3));
    return o;
  }
  function b(w) {
    if (typeof w != "function") throw new Error(et(4));
    if (y) throw new Error(et(5));
    let X = !0;
    g();
    const G = p++;
    return (
      d.set(G, w),
      function () {
        if (X) {
          if (y) throw new Error(et(6));
          ((X = !1), g(), d.delete(G), (f = null));
        }
      }
    );
  }
  function D(w) {
    if (!cf(w)) throw new Error(et(7));
    if (typeof w.type > "u") throw new Error(et(8));
    if (typeof w.type != "string") throw new Error(et(17));
    if (y) throw new Error(et(9));
    try {
      ((y = !0), (o = r(o, w)));
    } finally {
      y = !1;
    }
    return (
      (f = d).forEach((G) => {
        G();
      }),
      w
    );
  }
  function Y(w) {
    if (typeof w != "function") throw new Error(et(10));
    ((r = w), D({ type: mr.REPLACE }));
  }
  function T() {
    const w = b;
    return {
      subscribe(X) {
        if (typeof X != "object" || X === null) throw new Error(et(11));
        function G() {
          const K = X;
          K.next && K.next(v());
        }
        return (G(), { unsubscribe: w(G) });
      },
      [ey]() {
        return this;
      },
    };
  }
  return (
    D({ type: mr.INIT }),
    { dispatch: D, subscribe: b, getState: v, replaceReducer: Y, [ey]: T }
  );
}
function Y_(l) {
  Object.keys(l).forEach((i) => {
    const u = l[i];
    if (typeof u(void 0, { type: mr.INIT }) > "u") throw new Error(et(12));
    if (typeof u(void 0, { type: mr.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(et(13));
  });
}
function V_(l) {
  const i = Object.keys(l),
    u = {};
  for (let f = 0; f < i.length; f++) {
    const d = i[f];
    typeof l[d] == "function" && (u[d] = l[d]);
  }
  const r = Object.keys(u);
  let o;
  try {
    Y_(u);
  } catch (f) {
    o = f;
  }
  return function (d = {}, p) {
    if (o) throw o;
    let y = !1;
    const g = {};
    for (let v = 0; v < r.length; v++) {
      const b = r[v],
        D = u[b],
        Y = d[b],
        T = D(Y, p);
      if (typeof T > "u") throw (p && p.type, new Error(et(14)));
      ((g[b] = T), (y = y || T !== Y));
    }
    return ((y = y || r.length !== Object.keys(d).length), y ? g : d);
  };
}
function pr(...l) {
  return l.length === 0
    ? (i) => i
    : l.length === 1
      ? l[0]
      : l.reduce(
          (i, u) =>
            (...r) =>
              i(u(...r)),
        );
}
function X_(...l) {
  return (i) => (u, r) => {
    const o = i(u, r);
    let f = () => {
      throw new Error(et(15));
    };
    const d = { getState: o.getState, dispatch: (y, ...g) => f(y, ...g) },
      p = l.map((y) => y(d));
    return ((f = pr(...p)(o.dispatch)), { ...o, dispatch: f });
  };
}
function G_(l) {
  return cf(l) && "type" in l && typeof l.type == "string";
}
var Sg = Symbol.for("immer-nothing"),
  ty = Symbol.for("immer-draftable"),
  ut = Symbol.for("immer-state");
function kt(l, ...i) {
  throw new Error(
    `[Immer] minified error nr: ${l}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var wt = Object,
  oa = wt.getPrototypeOf,
  yr = "constructor",
  Mr = "prototype",
  jo = "configurable",
  gr = "enumerable",
  or = "writable",
  gi = "value",
  An = (l) => !!l && !!l[ut];
function Kt(l) {
  return l ? Eg(l) || Br(l) || !!l[ty] || !!l[yr]?.[ty] || Lr(l) || jr(l) : !1;
}
var Q_ = wt[Mr][yr].toString(),
  ny = new WeakMap();
function Eg(l) {
  if (!l || !of(l)) return !1;
  const i = oa(l);
  if (i === null || i === wt[Mr]) return !0;
  const u = wt.hasOwnProperty.call(i, yr) && i[yr];
  if (u === Object) return !0;
  if (!sa(u)) return !1;
  let r = ny.get(u);
  return (
    r === void 0 && ((r = Function.toString.call(u)), ny.set(u, r)),
    r === Q_
  );
}
function Ur(l, i, u = !0) {
  Ci(l) === 0
    ? (u ? Reflect.ownKeys(l) : wt.keys(l)).forEach((o) => {
        i(o, l[o], l);
      })
    : l.forEach((r, o) => i(o, r, l));
}
function Ci(l) {
  const i = l[ut];
  return i ? i.type_ : Br(l) ? 1 : Lr(l) ? 2 : jr(l) ? 3 : 0;
}
var ly = (l, i, u = Ci(l)) =>
    u === 2 ? l.has(i) : wt[Mr].hasOwnProperty.call(l, i),
  Ho = (l, i, u = Ci(l)) => (u === 2 ? l.get(i) : l[i]),
  vr = (l, i, u, r = Ci(l)) => {
    r === 2 ? l.set(i, u) : r === 3 ? l.add(u) : (l[i] = u);
  };
function k_(l, i) {
  return l === i ? l !== 0 || 1 / l === 1 / i : l !== l && i !== i;
}
var Br = Array.isArray,
  Lr = (l) => l instanceof Map,
  jr = (l) => l instanceof Set,
  of = (l) => typeof l == "object",
  sa = (l) => typeof l == "function",
  To = (l) => typeof l == "boolean";
function Z_(l) {
  const i = +l;
  return Number.isInteger(i) && String(i) === l;
}
var En = (l) => l.copy_ || l.base_,
  ff = (l) => (l.modified_ ? l.copy_ : l.base_);
function qo(l, i) {
  if (Lr(l)) return new Map(l);
  if (jr(l)) return new Set(l);
  if (Br(l)) return Array[Mr].slice.call(l);
  const u = Eg(l);
  if (i === !0 || (i === "class_only" && !u)) {
    const r = wt.getOwnPropertyDescriptors(l);
    delete r[ut];
    let o = Reflect.ownKeys(r);
    for (let f = 0; f < o.length; f++) {
      const d = o[f],
        p = r[d];
      (p[or] === !1 && ((p[or] = !0), (p[jo] = !0)),
        (p.get || p.set) &&
          (r[d] = { [jo]: !0, [or]: !0, [gr]: p[gr], [gi]: l[d] }));
    }
    return wt.create(oa(l), r);
  } else {
    const r = oa(l);
    if (r !== null && u) return { ...l };
    const o = wt.create(r);
    return wt.assign(o, l);
  }
}
function hf(l, i = !1) {
  return (
    Hr(l) ||
      An(l) ||
      !Kt(l) ||
      (Ci(l) > 1 &&
        wt.defineProperties(l, { set: Wu, add: Wu, clear: Wu, delete: Wu }),
      wt.freeze(l),
      i &&
        Ur(
          l,
          (u, r) => {
            hf(r, !0);
          },
          !1,
        )),
    l
  );
}
function K_() {
  kt(2);
}
var Wu = { [gi]: K_ };
function Hr(l) {
  return l === null || !of(l) ? !0 : wt.isFrozen(l);
}
var br = "MapSet",
  Yo = "Patches",
  ay = "ArrayMethods",
  _g = {};
function _l(l) {
  const i = _g[l];
  return (i || kt(0, l), i);
}
var iy = (l) => !!_g[l],
  vi,
  Tg = () => vi,
  J_ = (l, i) => ({
    drafts_: [],
    parent_: l,
    immer_: i,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
    handledSet_: new Set(),
    processedForPatches_: new Set(),
    mapSetPlugin_: iy(br) ? _l(br) : void 0,
    arrayMethodsPlugin_: iy(ay) ? _l(ay) : void 0,
  });
function uy(l, i) {
  i &&
    ((l.patchPlugin_ = _l(Yo)),
    (l.patches_ = []),
    (l.inversePatches_ = []),
    (l.patchListener_ = i));
}
function Vo(l) {
  (Xo(l), l.drafts_.forEach(F_), (l.drafts_ = null));
}
function Xo(l) {
  l === vi && (vi = l.parent_);
}
var ry = (l) => (vi = J_(vi, l));
function F_(l) {
  const i = l[ut];
  i.type_ === 0 || i.type_ === 1 ? i.revoke_() : (i.revoked_ = !0);
}
function sy(l, i) {
  i.unfinalizedDrafts_ = i.drafts_.length;
  const u = i.drafts_[0];
  if (l !== void 0 && l !== u) {
    (u[ut].modified_ && (Vo(i), kt(4)), Kt(l) && (l = cy(i, l)));
    const { patchPlugin_: o } = i;
    o && o.generateReplacementPatches_(u[ut].base_, l, i);
  } else l = cy(i, u);
  return (
    $_(i, l, !0),
    Vo(i),
    i.patches_ && i.patchListener_(i.patches_, i.inversePatches_),
    l !== Sg ? l : void 0
  );
}
function cy(l, i) {
  if (Hr(i)) return i;
  const u = i[ut];
  if (!u) return Sr(i, l.handledSet_, l);
  if (!qr(u, l)) return i;
  if (!u.modified_) return u.base_;
  if (!u.finalized_) {
    const { callbacks_: r } = u;
    if (r) for (; r.length > 0; ) r.pop()(l);
    Og(u, l);
  }
  return u.copy_;
}
function $_(l, i, u = !1) {
  !l.parent_ && l.immer_.autoFreeze_ && l.canAutoFreeze_ && hf(i, u);
}
function Rg(l) {
  ((l.finalized_ = !0), l.scope_.unfinalizedDrafts_--);
}
var qr = (l, i) => l.scope_ === i,
  W_ = [];
function Ag(l, i, u, r) {
  const o = En(l),
    f = l.type_;
  if (r !== void 0 && Ho(o, r, f) === i) {
    vr(o, r, u, f);
    return;
  }
  if (!l.draftLocations_) {
    const p = (l.draftLocations_ = new Map());
    Ur(o, (y, g) => {
      if (An(g)) {
        const v = p.get(g) || [];
        (v.push(y), p.set(g, v));
      }
    });
  }
  const d = l.draftLocations_.get(i) ?? W_;
  for (const p of d) vr(o, p, u, f);
}
function P_(l, i, u) {
  l.callbacks_.push(function (o) {
    const f = i;
    if (!f || !qr(f, o)) return;
    o.mapSetPlugin_?.fixSetContents(f);
    const d = ff(f);
    (Ag(l, f.draft_ ?? f, d, u), Og(f, o));
  });
}
function Og(l, i) {
  if (
    l.modified_ &&
    !l.finalized_ &&
    (l.type_ === 3 ||
      (l.type_ === 1 && l.allIndicesReassigned_) ||
      (l.assigned_?.size ?? 0) > 0)
  ) {
    const { patchPlugin_: r } = i;
    if (r) {
      const o = r.getPath(l);
      o && r.generatePatches_(l, o, i);
    }
    Rg(l);
  }
}
function I_(l, i, u) {
  const { scope_: r } = l;
  if (An(u)) {
    const o = u[ut];
    qr(o, r) &&
      o.callbacks_.push(function () {
        fr(l);
        const d = ff(o);
        Ag(l, u, d, i);
      });
  } else
    Kt(u) &&
      l.callbacks_.push(function () {
        const f = En(l);
        l.type_ === 3
          ? f.has(u) && Sr(u, r.handledSet_, r)
          : Ho(f, i, l.type_) === u &&
            r.drafts_.length > 1 &&
            (l.assigned_.get(i) ?? !1) === !0 &&
            l.copy_ &&
            Sr(Ho(l.copy_, i, l.type_), r.handledSet_, r);
      });
}
function Sr(l, i, u) {
  return (
    (!u.immer_.autoFreeze_ && u.unfinalizedDrafts_ < 1) ||
      An(l) ||
      i.has(l) ||
      !Kt(l) ||
      Hr(l) ||
      (i.add(l),
      Ur(l, (r, o) => {
        if (An(o)) {
          const f = o[ut];
          if (qr(f, u)) {
            const d = ff(f);
            (vr(l, r, d, l.type_), Rg(f));
          }
        } else Kt(o) && Sr(o, i, u);
      })),
    l
  );
}
function e2(l, i) {
  const u = Br(l),
    r = {
      type_: u ? 1 : 0,
      scope_: i ? i.scope_ : Tg(),
      modified_: !1,
      finalized_: !1,
      assigned_: void 0,
      parent_: i,
      base_: l,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
      callbacks_: void 0,
    };
  let o = r,
    f = Er;
  u && ((o = [r]), (f = bi));
  const { revoke: d, proxy: p } = Proxy.revocable(o, f);
  return ((r.draft_ = p), (r.revoke_ = d), [p, r]);
}
var Er = {
    get(l, i) {
      if (i === ut) return l;
      let u = l.scope_.arrayMethodsPlugin_;
      const r = l.type_ === 1 && typeof i == "string";
      if (r && u?.isArrayOperationMethod(i))
        return u.createMethodInterceptor(l, i);
      const o = En(l);
      if (!ly(o, i, l.type_)) return t2(l, o, i);
      const f = o[i];
      if (
        l.finalized_ ||
        !Kt(f) ||
        (r &&
          l.operationMethod &&
          u?.isMutatingArrayMethod(l.operationMethod) &&
          Z_(i))
      )
        return f;
      if (f === Ro(l.base_, i)) {
        fr(l);
        const d = l.type_ === 1 ? +i : i,
          p = Qo(l.scope_, f, l, d);
        return (l.copy_[d] = p);
      }
      return f;
    },
    has(l, i) {
      return i in En(l);
    },
    ownKeys(l) {
      return Reflect.ownKeys(En(l));
    },
    set(l, i, u) {
      const r = Cg(En(l), i);
      if (r?.set) return (r.set.call(l.draft_, u), !0);
      if (!l.modified_) {
        const o = Ro(En(l), i),
          f = o?.[ut];
        if (f && f.base_ === u)
          return ((l.copy_[i] = u), l.assigned_.set(i, !1), !0);
        if (k_(u, o) && (u !== void 0 || ly(l.base_, i, l.type_))) return !0;
        (fr(l), Go(l));
      }
      return (
        (l.copy_[i] === u && (u !== void 0 || i in l.copy_)) ||
          (Number.isNaN(u) && Number.isNaN(l.copy_[i])) ||
          ((l.copy_[i] = u), l.assigned_.set(i, !0), I_(l, i, u)),
        !0
      );
    },
    deleteProperty(l, i) {
      return (
        fr(l),
        Ro(l.base_, i) !== void 0 || i in l.base_
          ? (l.assigned_.set(i, !1), Go(l))
          : l.assigned_.delete(i),
        l.copy_ && delete l.copy_[i],
        !0
      );
    },
    getOwnPropertyDescriptor(l, i) {
      const u = En(l),
        r = Reflect.getOwnPropertyDescriptor(u, i);
      return (
        r && {
          [or]: !0,
          [jo]: l.type_ !== 1 || i !== "length",
          [gr]: r[gr],
          [gi]: u[i],
        }
      );
    },
    defineProperty() {
      kt(11);
    },
    getPrototypeOf(l) {
      return oa(l.base_);
    },
    setPrototypeOf() {
      kt(12);
    },
  },
  bi = {};
for (let l in Er) {
  let i = Er[l];
  bi[l] = function () {
    const u = arguments;
    return ((u[0] = u[0][0]), i.apply(this, u));
  };
}
bi.deleteProperty = function (l, i) {
  return bi.set.call(this, l, i, void 0);
};
bi.set = function (l, i, u) {
  return Er.set.call(this, l[0], i, u, l[0]);
};
function Ro(l, i) {
  const u = l[ut];
  return (u ? En(u) : l)[i];
}
function t2(l, i, u) {
  const r = Cg(i, u);
  return r ? (gi in r ? r[gi] : r.get?.call(l.draft_)) : void 0;
}
function Cg(l, i) {
  if (!(i in l)) return;
  let u = oa(l);
  for (; u; ) {
    const r = Object.getOwnPropertyDescriptor(u, i);
    if (r) return r;
    u = oa(u);
  }
}
function Go(l) {
  l.modified_ || ((l.modified_ = !0), l.parent_ && Go(l.parent_));
}
function fr(l) {
  l.copy_ ||
    ((l.assigned_ = new Map()),
    (l.copy_ = qo(l.base_, l.scope_.immer_.useStrictShallowCopy_)));
}
var n2 = class {
  constructor(l) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.useStrictIteration_ = !1),
      (this.produce = (i, u, r) => {
        if (sa(i) && !sa(u)) {
          const f = u;
          u = i;
          const d = this;
          return function (y = f, ...g) {
            return d.produce(y, (v) => u.call(this, v, ...g));
          };
        }
        (sa(u) || kt(6), r !== void 0 && !sa(r) && kt(7));
        let o;
        if (Kt(i)) {
          const f = ry(this),
            d = Qo(f, i, void 0);
          let p = !0;
          try {
            ((o = u(d)), (p = !1));
          } finally {
            p ? Vo(f) : Xo(f);
          }
          return (uy(f, r), sy(o, f));
        } else if (!i || !of(i)) {
          if (
            ((o = u(i)),
            o === void 0 && (o = i),
            o === Sg && (o = void 0),
            this.autoFreeze_ && hf(o, !0),
            r)
          ) {
            const f = [],
              d = [];
            (_l(Yo).generateReplacementPatches_(i, o, {
              patches_: f,
              inversePatches_: d,
            }),
              r(f, d));
          }
          return o;
        } else kt(1, i);
      }),
      (this.produceWithPatches = (i, u) => {
        if (sa(i))
          return (d, ...p) => this.produceWithPatches(d, (y) => i(y, ...p));
        let r, o;
        return [
          this.produce(i, u, (d, p) => {
            ((r = d), (o = p));
          }),
          r,
          o,
        ];
      }),
      To(l?.autoFreeze) && this.setAutoFreeze(l.autoFreeze),
      To(l?.useStrictShallowCopy) &&
        this.setUseStrictShallowCopy(l.useStrictShallowCopy),
      To(l?.useStrictIteration) &&
        this.setUseStrictIteration(l.useStrictIteration));
  }
  createDraft(l) {
    (Kt(l) || kt(8), An(l) && (l = l2(l)));
    const i = ry(this),
      u = Qo(i, l, void 0);
    return ((u[ut].isManual_ = !0), Xo(i), u);
  }
  finishDraft(l, i) {
    const u = l && l[ut];
    (!u || !u.isManual_) && kt(9);
    const { scope_: r } = u;
    return (uy(r, i), sy(void 0, r));
  }
  setAutoFreeze(l) {
    this.autoFreeze_ = l;
  }
  setUseStrictShallowCopy(l) {
    this.useStrictShallowCopy_ = l;
  }
  setUseStrictIteration(l) {
    this.useStrictIteration_ = l;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(l, i) {
    let u;
    for (u = i.length - 1; u >= 0; u--) {
      const o = i[u];
      if (o.path.length === 0 && o.op === "replace") {
        l = o.value;
        break;
      }
    }
    u > -1 && (i = i.slice(u + 1));
    const r = _l(Yo).applyPatches_;
    return An(l) ? r(l, i) : this.produce(l, (o) => r(o, i));
  }
};
function Qo(l, i, u, r) {
  const [o, f] = Lr(i)
    ? _l(br).proxyMap_(i, u)
    : jr(i)
      ? _l(br).proxySet_(i, u)
      : e2(i, u);
  return (
    (u?.scope_ ?? Tg()).drafts_.push(o),
    (f.callbacks_ = u?.callbacks_ ?? []),
    (f.key_ = r),
    u && r !== void 0
      ? P_(u, f, r)
      : f.callbacks_.push(function (y) {
          y.mapSetPlugin_?.fixSetContents(f);
          const { patchPlugin_: g } = y;
          f.modified_ && g && g.generatePatches_(f, [], y);
        }),
    o
  );
}
function l2(l) {
  return (An(l) || kt(10, l), wg(l));
}
function wg(l) {
  if (!Kt(l) || Hr(l)) return l;
  const i = l[ut];
  let u,
    r = !0;
  if (i) {
    if (!i.modified_) return i.base_;
    ((i.finalized_ = !0),
      (u = qo(l, i.scope_.immer_.useStrictShallowCopy_)),
      (r = i.scope_.immer_.shouldUseStrictIteration()));
  } else u = qo(l, !0);
  return (
    Ur(
      u,
      (o, f) => {
        vr(u, o, wg(f));
      },
      r,
    ),
    i && (i.finalized_ = !1),
    u
  );
}
var a2 = new n2(),
  xg = a2.produce;
function Ng(l) {
  return ({ dispatch: u, getState: r }) =>
    (o) =>
    (f) =>
      typeof f == "function" ? f(u, r, l) : o(f);
}
var i2 = Ng(),
  u2 = Ng,
  r2 =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? pr
              : pr.apply(null, arguments);
        };
function oy(l, i) {
  function u(...r) {
    if (i) {
      let o = i(...r);
      if (!o) throw new Error(Tn(0));
      return {
        type: l,
        payload: o.payload,
        ...("meta" in o && { meta: o.meta }),
        ...("error" in o && { error: o.error }),
      };
    }
    return { type: l, payload: r[0] };
  }
  return (
    (u.toString = () => `${l}`),
    (u.type = l),
    (u.match = (r) => G_(r) && r.type === l),
    u
  );
}
var zg = class pi extends Array {
  constructor(...i) {
    (super(...i), Object.setPrototypeOf(this, pi.prototype));
  }
  static get [Symbol.species]() {
    return pi;
  }
  concat(...i) {
    return super.concat.apply(this, i);
  }
  prepend(...i) {
    return i.length === 1 && Array.isArray(i[0])
      ? new pi(...i[0].concat(this))
      : new pi(...i.concat(this));
  }
};
function fy(l) {
  return Kt(l) ? xg(l, () => {}) : l;
}
function Pu(l, i, u) {
  return l.has(i) ? l.get(i) : l.set(i, u(i)).get(i);
}
function s2(l) {
  return typeof l == "boolean";
}
var c2 = () =>
    function (i) {
      const {
        thunk: u = !0,
        immutableCheck: r = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: f = !0,
      } = i ?? {};
      let d = new zg();
      return (u && (s2(u) ? d.push(i2) : d.push(u2(u.extraArgument))), d);
    },
  o2 = "RTK_autoBatch",
  hy = (l) => (i) => {
    setTimeout(i, l);
  },
  f2 =
    (l = { type: "raf" }) =>
    (i) =>
    (...u) => {
      const r = i(...u);
      let o = !0,
        f = !1,
        d = !1;
      const p = new Set(),
        y =
          l.type === "tick"
            ? queueMicrotask
            : l.type === "raf"
              ? typeof window < "u" && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : hy(10)
              : l.type === "callback"
                ? l.queueNotification
                : hy(l.timeout),
        g = () => {
          ((d = !1), f && ((f = !1), p.forEach((v) => v())));
        };
      return Object.assign({}, r, {
        subscribe(v) {
          const b = () => o && v(),
            D = r.subscribe(b);
          return (
            p.add(v),
            () => {
              (D(), p.delete(v));
            }
          );
        },
        dispatch(v) {
          try {
            return (
              (o = !v?.meta?.[o2]),
              (f = !o),
              f && (d || ((d = !0), y(g))),
              r.dispatch(v)
            );
          } finally {
            o = !0;
          }
        },
      });
    },
  h2 = (l) =>
    function (u) {
      const { autoBatch: r = !0 } = u ?? {};
      let o = new zg(l);
      return (r && o.push(f2(typeof r == "object" ? r : void 0)), o);
    };
function d2(l) {
  const i = c2(),
    {
      reducer: u = void 0,
      middleware: r,
      devTools: o = !0,
      preloadedState: f = void 0,
      enhancers: d = void 0,
    } = l || {};
  let p;
  if (typeof u == "function") p = u;
  else if (cf(u)) p = V_(u);
  else throw new Error(Tn(1));
  let y;
  typeof r == "function" ? (y = r(i)) : (y = i());
  let g = pr;
  o && (g = r2({ trace: !1, ...(typeof o == "object" && o) }));
  const v = X_(...y),
    b = h2(v);
  let D = typeof d == "function" ? d(b) : b();
  const Y = g(...D);
  return bg(p, f, Y);
}
function Dg(l) {
  const i = {},
    u = [];
  let r;
  const o = {
    addCase(f, d) {
      const p = typeof f == "string" ? f : f.type;
      if (!p) throw new Error(Tn(28));
      if (p in i) throw new Error(Tn(29));
      return ((i[p] = d), o);
    },
    addAsyncThunk(f, d) {
      return (
        d.pending && (i[f.pending.type] = d.pending),
        d.rejected && (i[f.rejected.type] = d.rejected),
        d.fulfilled && (i[f.fulfilled.type] = d.fulfilled),
        d.settled && u.push({ matcher: f.settled, reducer: d.settled }),
        o
      );
    },
    addMatcher(f, d) {
      return (u.push({ matcher: f, reducer: d }), o);
    },
    addDefaultCase(f) {
      return ((r = f), o);
    },
  };
  return (l(o), [i, u, r]);
}
function m2(l) {
  return typeof l == "function";
}
function p2(l, i) {
  let [u, r, o] = Dg(i),
    f;
  if (m2(l)) f = () => fy(l());
  else {
    const p = fy(l);
    f = () => p;
  }
  function d(p = f(), y) {
    let g = [
      u[y.type],
      ...r.filter(({ matcher: v }) => v(y)).map(({ reducer: v }) => v),
    ];
    return (
      g.filter((v) => !!v).length === 0 && (g = [o]),
      g.reduce((v, b) => {
        if (b)
          if (An(v)) {
            const Y = b(v, y);
            return Y === void 0 ? v : Y;
          } else {
            if (Kt(v)) return xg(v, (D) => b(D, y));
            {
              const D = b(v, y);
              if (D === void 0) {
                if (v === null) return v;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined",
                );
              }
              return D;
            }
          }
        return v;
      }, p)
    );
  }
  return ((d.getInitialState = f), d);
}
var y2 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  ko = (l = 21) => {
    let i = "",
      u = l;
    for (; u--; ) i += y2[(Math.random() * 64) | 0];
    return i;
  },
  g2 = Symbol.for("rtk-slice-createasyncthunk");
function v2(l, i) {
  return `${l}/${i}`;
}
function b2({ creators: l } = {}) {
  const i = l?.asyncThunk?.[g2];
  return function (r) {
    const { name: o, reducerPath: f = o } = r;
    if (!o) throw new Error(Tn(11));
    const d =
        (typeof r.reducers == "function" ? r.reducers(_2()) : r.reducers) || {},
      p = Object.keys(d),
      y = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      g = {
        addCase(V, K) {
          const $ = typeof V == "string" ? V : V.type;
          if (!$) throw new Error(Tn(12));
          if ($ in y.sliceCaseReducersByType) throw new Error(Tn(13));
          return ((y.sliceCaseReducersByType[$] = K), g);
        },
        addMatcher(V, K) {
          return (y.sliceMatchers.push({ matcher: V, reducer: K }), g);
        },
        exposeAction(V, K) {
          return ((y.actionCreators[V] = K), g);
        },
        exposeCaseReducer(V, K) {
          return ((y.sliceCaseReducersByName[V] = K), g);
        },
      };
    p.forEach((V) => {
      const K = d[V],
        $ = {
          reducerName: V,
          type: v2(o, V),
          createNotation: typeof r.reducers == "function",
        };
      R2(K) ? O2($, K, g, i) : T2($, K, g);
    });
    function v() {
      const [V = {}, K = [], $ = void 0] =
          typeof r.extraReducers == "function"
            ? Dg(r.extraReducers)
            : [r.extraReducers],
        te = { ...V, ...y.sliceCaseReducersByType };
      return p2(r.initialState, (Z) => {
        for (let re in te) Z.addCase(re, te[re]);
        for (let re of y.sliceMatchers) Z.addMatcher(re.matcher, re.reducer);
        for (let re of K) Z.addMatcher(re.matcher, re.reducer);
        $ && Z.addDefaultCase($);
      });
    }
    const b = (V) => V,
      D = new Map(),
      Y = new WeakMap();
    let T;
    function U(V, K) {
      return (T || (T = v()), T(V, K));
    }
    function w() {
      return (T || (T = v()), T.getInitialState());
    }
    function X(V, K = !1) {
      function $(Z) {
        let re = Z[V];
        return (typeof re > "u" && K && (re = Pu(Y, $, w)), re);
      }
      function te(Z = b) {
        const re = Pu(D, K, () => new WeakMap());
        return Pu(re, Z, () => {
          const Ce = {};
          for (const [Ke, lt] of Object.entries(r.selectors ?? {}))
            Ce[Ke] = S2(lt, Z, () => Pu(Y, Z, w), K);
          return Ce;
        });
      }
      return {
        reducerPath: V,
        getSelectors: te,
        get selectors() {
          return te($);
        },
        selectSlice: $,
      };
    }
    const G = {
      name: o,
      reducer: U,
      actions: y.actionCreators,
      caseReducers: y.sliceCaseReducersByName,
      getInitialState: w,
      ...X(f),
      injectInto(V, { reducerPath: K, ...$ } = {}) {
        const te = K ?? f;
        return (
          V.inject({ reducerPath: te, reducer: U }, $),
          { ...G, ...X(te, !0) }
        );
      },
    };
    return G;
  };
}
function S2(l, i, u, r) {
  function o(f, ...d) {
    let p = i(f);
    return (typeof p > "u" && r && (p = u()), l(p, ...d));
  }
  return ((o.unwrapped = l), o);
}
var E2 = b2();
function _2() {
  function l(i, u) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: i, ...u };
  }
  return (
    (l.withTypes = () => l),
    {
      reducer(i) {
        return Object.assign(
          {
            [i.name](...u) {
              return i(...u);
            },
          }[i.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(i, u) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: i,
          reducer: u,
        };
      },
      asyncThunk: l,
    }
  );
}
function T2({ type: l, reducerName: i, createNotation: u }, r, o) {
  let f, d;
  if ("reducer" in r) {
    if (u && !A2(r)) throw new Error(Tn(17));
    ((f = r.reducer), (d = r.prepare));
  } else f = r;
  o.addCase(l, f)
    .exposeCaseReducer(i, f)
    .exposeAction(i, d ? oy(l, d) : oy(l));
}
function R2(l) {
  return l._reducerDefinitionType === "asyncThunk";
}
function A2(l) {
  return l._reducerDefinitionType === "reducerWithPrepare";
}
function O2({ type: l, reducerName: i }, u, r, o) {
  if (!o) throw new Error(Tn(18));
  const {
      payloadCreator: f,
      fulfilled: d,
      pending: p,
      rejected: y,
      settled: g,
      options: v,
    } = u,
    b = o(l, f, v);
  (r.exposeAction(i, b),
    d && r.addCase(b.fulfilled, d),
    p && r.addCase(b.pending, p),
    y && r.addCase(b.rejected, y),
    g && r.addMatcher(b.settled, g),
    r.exposeCaseReducer(i, {
      fulfilled: d || Iu,
      pending: p || Iu,
      rejected: y || Iu,
      settled: g || Iu,
    }));
}
function Iu() {}
function Tn(l) {
  return `Minified Redux Toolkit error #${l}; visit https://redux-toolkit.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `;
}
const C2 = (l) => ({ id: ko(), title: "New Chat", messages: [] }),
  Mg = E2({
    name: "chat",
    initialState: { chats: [], activeChatId: null, isSending: !1, input: "" },
    reducers: {
      ensureInitialChat(l) {
        if (l.chats.length === 0) {
          const i = C2();
          (l.chats.unshift(i), (l.activeChatId = i.id));
        }
      },
      startNewChat: {
        reducer(l, i) {
          const { _id: u, title: r } = i.payload;
          (l.chats.unshift({ _id: u, title: r || "New Chat", messages: [] }),
            (l.activeChatId = u));
        },
      },
      selectChat(l, i) {
        l.activeChatId = i.payload;
      },
      setInput(l, i) {
        l.input = i.payload;
      },
      sendingStarted(l) {
        l.isSending = !0;
      },
      sendingFinished(l) {
        l.isSending = !1;
      },
      setChats(l, i) {
        l.chats = i.payload;
      },
      addUserMessage: {
        reducer(l, i) {
          const { chatId: u, message: r } = i.payload,
            o = l.chats.find((f) => f.id === u);
          o &&
            (o.messages.length === 0 &&
              (o.title =
                r.content.slice(0, 40) + (r.content.length > 40 ? "…" : "")),
            o.messages.push(r));
        },
        prepare(l, i) {
          return {
            payload: {
              chatId: l,
              message: { id: ko(), role: "user", content: i, ts: Date.now() },
            },
          };
        },
      },
      addAIMessage: {
        reducer(l, i) {
          const { chatId: u, message: r } = i.payload,
            o = l.chats.find((f) => f.id === u);
          o && o.messages.push(r);
        },
        prepare(l, i, u = !1) {
          return {
            payload: {
              chatId: l,
              message: {
                id: ko(),
                role: "ai",
                content: i,
                ts: Date.now(),
                ...(u ? { error: !0 } : {}),
              },
            },
          };
        },
      },
    },
  }),
  {
    ensureInitialChat: iT,
    startNewChat: w2,
    selectChat: x2,
    setInput: dy,
    sendingStarted: N2,
    sendingFinished: z2,
    addUserMessage: uT,
    addAIMessage: rT,
    setChats: D2,
  } = Mg.actions,
  M2 = Mg.reducer,
  U2 = () => {
    const l = uE(),
      i = Fu((T) => T.chat.chats),
      u = Fu((T) => T.chat.activeChatId),
      r = Fu((T) => T.chat.input),
      o = Fu((T) => T.chat.isSending),
      [f, d] = rb.useState(!1),
      [p, y] = N.useState(null);
    i.find((T) => T.id === u);
    const [g, v] = N.useState([]),
      b = async () => {
        let T = window.prompt("Enter a title for the new chat:", "");
        if ((T && (T = T.trim()), !T)) return;
        const U = await Ne.post(
          "https://agentic-ai-chatgpt.onrender.com/api/chat",
          { title: T },
          { withCredentials: !0 },
        );
        (Y(U.data.chat._id), l(w2(U.data.chat)), d(!1));
      };
    N.useEffect(() => {
      Ne.get("https://agentic-ai-chatgpt.onrender.com/api/chat", {
        withCredentials: !0,
      }).then((U) => {
        l(D2(U.data.chats.reverse()));
      });
      const T = ur("https://agentic-ai-chatgpt.onrender.com", {
        withCredentials: !0,
      });
      (T.on("ai-response", (U) => {
        (console.log("Received AI response:", U),
          v((w) => [...w, { type: "ai", content: U.content }]),
          l(z2()));
      }),
        y(T));
    }, []);
    const D = async () => {
        const T = r.trim();
        if ((console.log("Sending message:", T), !T || !u || o)) return;
        l(N2());
        const U = [...g, { type: "user", content: T }];
        (console.log("New messages:", U),
          v(U),
          l(dy("")),
          p.emit("ai-message", { chat: u, content: T }));
      },
      Y = async (T) => {
        const U = await Ne.get(
          `https://agentic-ai-chatgpt.onrender.com/api/chat/messages/${T}`,
          { withCredentials: !0 },
        );
        (console.log("Fetched messages:", U.data.messages),
          v(
            U.data.messages.map((w) => ({
              type: w.role === "user" ? "user" : "ai",
              content: w.content,
            })),
          ));
      };
    return L.jsxs("div", {
      className: "chat-layout minimal",
      children: [
        L.jsx(j1, { onToggleSidebar: () => d((T) => !T), onNewChat: b }),
        L.jsx(H1, {
          chats: i,
          activeChatId: u,
          onSelectChat: (T) => {
            (l(x2(T)), d(!1), Y(T));
          },
          onNewChat: b,
          open: f,
        }),
        L.jsxs("main", {
          className: "chat-main",
          role: "main",
          children: [
            g.length === 0 &&
              L.jsxs("div", {
                className: "chat-welcome",
                "aria-hidden": "true",
                children: [
                  L.jsx("div", {
                    className: "chip",
                    children: "Early Preview",
                  }),
                  L.jsx("h1", { children: "ChatGPT Clone" }),
                  L.jsx("p", {
                    children:
                      "Ask anything. Paste text, brainstorm ideas, or get quick explanations. Your chats stay in the sidebar so you can pick up where you left off.",
                  }),
                ],
              }),
            L.jsx(q1, { messages: g, isSending: o }),
            u &&
              L.jsx(Y1, {
                input: r,
                setInput: (T) => l(dy(T)),
                onSend: D,
                isSending: o,
              }),
          ],
        }),
        f &&
          L.jsx("button", {
            className: "sidebar-backdrop",
            "aria-label": "Close sidebar",
            onClick: () => d(!1),
          }),
      ],
    });
  },
  B2 = () => {
    const [l, i] = N.useState({
        email: "",
        firstname: "",
        lastname: "",
        password: "",
      }),
      [u, r] = N.useState(!1),
      o = Ko();
    function f(p) {
      const { name: y, value: g } = p.target;
      i((v) => ({ ...v, [y]: g }));
    }
    async function d(p) {
      (p.preventDefault(),
        r(!0),
        console.log(l),
        Ne.post(
          "https://agentic-ai-chatgpt.onrender.com/api/auth/register",
          {
            email: l.email,
            fullName: { firstName: l.firstname, lastName: l.lastname },
            password: l.password,
          },
          { withCredentials: !0 },
        )
          .then((y) => {
            (console.log(y), o("/"));
          })
          .catch((y) => {
            (console.error(y), alert("Registration failed (placeholder)"));
          }),
        r(!1));
    }
    return L.jsx("div", {
      className: "center-min-h-screen",
      children: L.jsxs("div", {
        className: "auth-card",
        role: "main",
        "aria-labelledby": "register-heading",
        children: [
          L.jsxs("header", {
            className: "auth-header",
            children: [
              L.jsx("h1", {
                id: "register-heading",
                children: "Create account",
              }),
              L.jsx("p", {
                className: "auth-sub",
                children: "Join us and start exploring.",
              }),
            ],
          }),
          L.jsxs("form", {
            className: "auth-form",
            onSubmit: d,
            noValidate: !0,
            children: [
              L.jsxs("div", {
                className: "field-group",
                children: [
                  L.jsx("label", { htmlFor: "email", children: "Email" }),
                  L.jsx("input", {
                    id: "email",
                    name: "email",
                    type: "email",
                    autoComplete: "email",
                    placeholder: "you@example.com",
                    value: l.email,
                    onChange: f,
                    required: !0,
                  }),
                ],
              }),
              L.jsxs("div", {
                className: "grid-2",
                children: [
                  L.jsxs("div", {
                    className: "field-group",
                    children: [
                      L.jsx("label", {
                        htmlFor: "firstname",
                        children: "First name",
                      }),
                      L.jsx("input", {
                        id: "firstname",
                        name: "firstname",
                        placeholder: "Jane",
                        value: l.firstname,
                        onChange: f,
                        required: !0,
                      }),
                    ],
                  }),
                  L.jsxs("div", {
                    className: "field-group",
                    children: [
                      L.jsx("label", {
                        htmlFor: "lastname",
                        children: "Last name",
                      }),
                      L.jsx("input", {
                        id: "lastname",
                        name: "lastname",
                        placeholder: "Doe",
                        value: l.lastname,
                        onChange: f,
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              L.jsxs("div", {
                className: "field-group",
                children: [
                  L.jsx("label", { htmlFor: "password", children: "Password" }),
                  L.jsx("input", {
                    id: "password",
                    name: "password",
                    type: "password",
                    autoComplete: "new-password",
                    placeholder: "Create a password",
                    value: l.password,
                    onChange: f,
                    required: !0,
                    minLength: 6,
                  }),
                ],
              }),
              L.jsx("button", {
                type: "submit",
                className: "primary-btn",
                disabled: u,
                children: u ? "Creating..." : "Create Account",
              }),
            ],
          }),
          L.jsxs("p", {
            className: "auth-alt",
            children: [
              "Already have an account? ",
              L.jsx(Ar, { to: "/login", children: "Sign in" }),
            ],
          }),
        ],
      }),
    });
  },
  L2 = () => {
    const [l, i] = N.useState({ email: "", password: "" }),
      [u, r] = N.useState(!1),
      o = Ko();
    function f(p) {
      const { name: y, value: g } = p.target;
      i({ ...l, [y]: g });
    }
    async function d(p) {
      (p.preventDefault(),
        r(!0),
        console.log(l),
        Ne.post(
          "https://agentic-ai-chatgpt.onrender.com/api/auth/login",
          { email: l.email, password: l.password },
          { withCredentials: !0 },
        )
          .then((y) => {
            (console.log(y), o("/"));
          })
          .catch((y) => {
            console.error(y);
          })
          .finally(() => {
            r(!1);
          }));
    }
    return L.jsx("div", {
      className: "center-min-h-screen",
      children: L.jsxs("div", {
        className: "auth-card",
        role: "main",
        "aria-labelledby": "login-heading",
        children: [
          L.jsxs("header", {
            className: "auth-header",
            children: [
              L.jsx("h1", { id: "login-heading", children: "Sign in" }),
              L.jsx("p", {
                className: "auth-sub",
                children: "Welcome back. We've missed you.",
              }),
            ],
          }),
          L.jsxs("form", {
            className: "auth-form",
            onSubmit: d,
            noValidate: !0,
            children: [
              L.jsxs("div", {
                className: "field-group",
                children: [
                  L.jsx("label", { htmlFor: "login-email", children: "Email" }),
                  L.jsx("input", {
                    id: "login-email",
                    name: "email",
                    type: "email",
                    autoComplete: "email",
                    placeholder: "you@example.com",
                    onChange: f,
                    required: !0,
                  }),
                ],
              }),
              L.jsxs("div", {
                className: "field-group",
                children: [
                  L.jsx("label", {
                    htmlFor: "login-password",
                    children: "Password",
                  }),
                  L.jsx("input", {
                    id: "login-password",
                    name: "password",
                    type: "password",
                    autoComplete: "current-password",
                    placeholder: "Your password",
                    onChange: f,
                    required: !0,
                  }),
                ],
              }),
              L.jsx("button", {
                type: "submit",
                className: "primary-btn",
                disabled: u,
                children: u ? "Signing in..." : "Sign in",
              }),
            ],
          }),
          L.jsxs("p", {
            className: "auth-alt",
            children: [
              "Need an account? ",
              L.jsx(Ar, { to: "/register", children: "Create one" }),
            ],
          }),
        ],
      }),
    });
  },
  j2 = () =>
    L.jsx(BS, {
      children: L.jsxs(fS, {
        children: [
          L.jsx(er, { path: "/", element: L.jsx(U2, {}) }),
          L.jsx(er, { path: "/register", element: L.jsx(B2, {}) }),
          L.jsx(er, { path: "/login", element: L.jsx(L2, {}) }),
        ],
      }),
    });
function H2() {
  return L.jsx(L.Fragment, { children: L.jsx(j2, {}) });
}
const q2 = d2({ reducer: { chat: M2 } });
mb.createRoot(document.getElementById("root")).render(
  L.jsx(N.StrictMode, {
    children: L.jsx(lE, { store: q2, children: L.jsx(H2, {}) }),
  }),
);
