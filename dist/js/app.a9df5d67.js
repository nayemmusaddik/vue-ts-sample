(function (e) {
  function t(t) {
    for (
      var r, i, u = t[0], s = t[1], o = t[2], l = 0, p = [];
      l < u.length;
      l++
    )
      (i = u[l]),
        Object.prototype.hasOwnProperty.call(a, i) && a[i] && p.push(a[i][0]),
        (a[i] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    b && b(t);
    while (p.length) p.shift()();
    return c.push.apply(c, o || []), n();
  }
  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], r = !0, i = 1; i < n.length; i++) {
        var s = n[i];
        0 !== a[s] && (r = !1);
      }
      r && (c.splice(t--, 1), (e = u((u.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { app: 0 },
    c = [];
  function i(e) {
    return (
      u.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-2d0b3289": "8d9cdcf7",
        "chunk-2d0d6d35": "d9a4f9fc",
        "chunk-2d2086b7": "1b3b1595",
        "chunk-2d217357": "131ed379",
      }[e] +
      ".js"
    );
  }
  function u(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, u), (n.l = !0), n.exports;
  }
  (u.e = function (e) {
    var t = [],
      n = a[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function (t, r) {
          n = a[e] = [t, r];
        });
        t.push((n[2] = r));
        var c,
          s = document.createElement("script");
        (s.charset = "utf-8"),
          (s.timeout = 120),
          u.nc && s.setAttribute("nonce", u.nc),
          (s.src = i(e));
        var o = new Error();
        c = function (t) {
          (s.onerror = s.onload = null), clearTimeout(l);
          var n = a[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                c = t && t.target && t.target.src;
              (o.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + c + ")"),
                (o.name = "ChunkLoadError"),
                (o.type = r),
                (o.request = c),
                n[1](o);
            }
            a[e] = void 0;
          }
        };
        var l = setTimeout(function () {
          c({ type: "timeout", target: s });
        }, 12e4);
        (s.onerror = s.onload = c), document.head.appendChild(s);
      }
    return Promise.all(t);
  }),
    (u.m = e),
    (u.c = r),
    (u.d = function (e, t, n) {
      u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (u.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (u.t = function (e, t) {
      if ((1 & t && (e = u(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (u.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          u.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (u.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return u.d(t, "a", t), t;
    }),
    (u.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (u.p = "https://musaddik.com/vue/"),
    (u.oe = function (e) {
      throw (console.error(e), e);
    });
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    o = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var l = 0; l < s.length; l++) t(s[l]);
  var b = o;
  c.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("cd49");
  },
  "0613": function (e, t, n) {
    "use strict";
    var r = n("5502");
    t["a"] = Object(r["a"])({
      state: {},
      mutations: {},
      actions: {},
      modules: {},
    });
  },
  "842b": function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return u;
    }),
      n.d(t, "b", function () {
        return o;
      }),
      n.d(t, "a", function () {
        return b;
      });
    var r = n("1da1"),
      a = (n("96cf"), n("bc3a")),
      c = n.n(a),
      i = c.a.create({
        baseURL: "https://conduit.productionready.io/api",
        timeout: 2e4,
      });
    function u(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = Object(r["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), i.post("/users/login", { user: t });
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.data);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        s.apply(this, arguments)
      );
    }
    function o(e) {
      return l.apply(this, arguments);
    }
    function l() {
      return (
        (l = Object(r["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), i.get("/profiles/" + t);
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.data);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        l.apply(this, arguments)
      );
    }
    function b() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = Object(r["a"])(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), i.get("/articles");
                  case 2:
                    return (t = e.sent), e.abrupt("return", t.data);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        p.apply(this, arguments)
      );
    }
  },
  "845f": function (e, t, n) {},
  "9d5c": function (e, t, n) {
    "use strict";
    var r = n("1da1"),
      a = n("d4ec"),
      c = n("bee2"),
      i = n("262e"),
      u = n("2caf"),
      s = (n("96cf"), n("9ab4")),
      o = n("6fc5"),
      l = n("0613"),
      b = n("842b"),
      p = (function (e) {
        Object(i["a"])(n, e);
        var t = Object(u["a"])(n);
        function n() {
          var e;
          return (
            Object(a["a"])(this, n),
            (e = t.apply(this, arguments)),
            (e.user = null),
            (e.profile = null),
            e
          );
        }
        return (
          Object(c["a"])(n, [
            {
              key: "setUser",
              value: function (e) {
                this.user = e.user;
              },
            },
            {
              key: "setProfile",
              value: function (e) {
                this.profile = e.profile;
              },
            },
            {
              key: "username",
              get: function () {
                return (this.user && this.user.username) || null;
              },
            },
            {
              key: "login",
              value: (function () {
                var e = Object(r["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), Object(b["c"])(t)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 6:
                              throw (
                                ((e.prev = 6),
                                (e.t0 = e["catch"](0)),
                                console.error(e.t0),
                                new Error("Invaid Username or Password!"))
                              );
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]]
                    );
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "loadProfile",
              value: (function () {
                var e = Object(r["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), Object(b["b"])(t)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 6:
                              (e.prev = 6),
                                (e.t0 = e["catch"](0)),
                                console.error(e.t0);
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]]
                    );
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
          ]),
          n
        );
      })(o["d"]);
    Object(s["a"])([o["c"]], p.prototype, "setUser", null),
      Object(s["a"])([o["c"]], p.prototype, "setProfile", null),
      Object(s["a"])(
        [Object(o["a"])({ commit: "setUser" })],
        p.prototype,
        "login",
        null
      ),
      Object(s["a"])(
        [Object(o["a"])({ commit: "setProfile" })],
        p.prototype,
        "loadProfile",
        null
      ),
      (p = Object(s["a"])(
        [
          Object(o["b"])({
            namespaced: !0,
            name: "users",
            store: l["a"],
            dynamic: !0,
          }),
        ],
        p
      )),
      (t["a"] = Object(o["e"])(p));
  },
  cd49: function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("7a23");
    function a(e, t, n, a, c, i) {
      var u = Object(r["w"])("app-navbar"),
        s = Object(r["w"])("router-view"),
        o = Object(r["w"])("app-footer");
      return (
        Object(r["q"])(),
        Object(r["d"])(
          r["a"],
          null,
          [Object(r["h"])(u), Object(r["h"])(s), Object(r["h"])(o)],
          64
        )
      );
    }
    var c = n("d4ec"),
      i = n("262e"),
      u = n("2caf"),
      s = n("9ab4"),
      o = Object(r["h"])(
        "div",
        { class: "container" },
        [
          Object(r["h"])("a", { href: "/", class: "logo-font" }, "conduit"),
          Object(r["h"])("span", { class: "attribution" }, [
            Object(r["g"])(" An interactive learning project from "),
            Object(r["h"])("a", { href: "https://thinkster.io" }, "Thinkster"),
            Object(r["g"])(". Code & design licensed under MIT. "),
          ]),
        ],
        -1
      );
    function l(e, t) {
      return Object(r["q"])(), Object(r["d"])("footer", null, [o]);
    }
    const b = {};
    b.render = l;
    var p = b,
      d = { class: "navbar navbar-light" },
      f = { class: "container" },
      j = Object(r["h"])(
        "a",
        { class: "navbar-brand", href: "index.html" },
        "conduit",
        -1
      ),
      h = { class: "nav navbar-nav pull-xs-right" },
      O = Object(r["h"])(
        "li",
        { class: "nav-item" },
        [Object(r["h"])("a", { class: "nav-link active", href: "" }, "Home")],
        -1
      ),
      v = { key: 0, class: "nav-item" },
      m = Object(r["h"])(
        "a",
        { class: "nav-link", href: "" },
        [
          Object(r["h"])("i", { class: "ion-compose" }),
          Object(r["g"])(" New Post "),
        ],
        -1
      ),
      g = { key: 1, class: "nav-item" },
      y = Object(r["h"])(
        "a",
        { class: "nav-link", href: "" },
        [
          Object(r["h"])("i", { class: "ion-gear-a" }),
          Object(r["g"])(" Settings "),
        ],
        -1
      ),
      k = { key: 2, class: "nav-item" },
      w = { key: 3, class: "nav-item" },
      x = Object(r["g"])("Sign up"),
      P = { key: 4, class: "nav-item" },
      q = Object(r["g"])("Sign in");
    function R(e, t, n, a, c, i) {
      var u = Object(r["w"])("router-link");
      return (
        Object(r["q"])(),
        Object(r["d"])("nav", d, [
          Object(r["h"])("div", f, [
            j,
            Object(r["h"])("ul", h, [
              O,
              e.username
                ? (Object(r["q"])(), Object(r["d"])("li", v, [m]))
                : Object(r["e"])("", !0),
              e.username
                ? (Object(r["q"])(), Object(r["d"])("li", g, [y]))
                : Object(r["e"])("", !0),
              e.username
                ? (Object(r["q"])(),
                  Object(r["d"])("li", k, [
                    Object(r["h"])(
                      u,
                      { class: "nav-link", to: "/@" + e.username },
                      {
                        default: Object(r["C"])(function () {
                          return [
                            Object(r["g"])(Object(r["y"])(e.username), 1),
                          ];
                        }),
                        _: 1,
                      },
                      8,
                      ["to"]
                    ),
                  ]))
                : Object(r["e"])("", !0),
              e.username
                ? Object(r["e"])("", !0)
                : (Object(r["q"])(),
                  Object(r["d"])("li", w, [
                    Object(r["h"])(
                      u,
                      { class: "nav-link", to: "/register" },
                      {
                        default: Object(r["C"])(function () {
                          return [x];
                        }),
                        _: 1,
                      }
                    ),
                  ])),
              e.username
                ? Object(r["e"])("", !0)
                : (Object(r["q"])(),
                  Object(r["d"])("li", P, [
                    Object(r["h"])(
                      u,
                      { class: "nav-link", to: "/login" },
                      {
                        default: Object(r["C"])(function () {
                          return [q];
                        }),
                        _: 1,
                      }
                    ),
                  ])),
            ]),
          ]),
        ])
      );
    }
    var F = n("bee2"),
      _ = n("ce1f"),
      S = n("9d5c"),
      C = (function (e) {
        Object(i["a"])(n, e);
        var t = Object(u["a"])(n);
        function n() {
          return Object(c["a"])(this, n), t.apply(this, arguments);
        }
        return (
          Object(F["a"])(n, [
            {
              key: "username",
              get: function () {
                return S["a"].username;
              },
            },
          ]),
          n
        );
      })(_["b"]);
    C.render = R;
    var T = C,
      A = (function (e) {
        Object(i["a"])(n, e);
        var t = Object(u["a"])(n);
        function n() {
          return Object(c["a"])(this, n), t.apply(this, arguments);
        }
        return n;
      })(_["b"]);
    A = Object(s["a"])(
      [Object(_["a"])({ components: { AppFooter: p, AppNavbar: T } })],
      A
    );
    var M = A;
    M.render = a;
    var U = M,
      E = (n("d3b7"), n("3ca3"), n("ddb0"), n("6c02")),
      J = { class: "home-page" },
      L = Object(r["h"])(
        "div",
        { class: "banner" },
        [
          Object(r["h"])("div", { class: "container" }, [
            Object(r["h"])("h1", { class: "logo-font" }, "conduit"),
            Object(r["h"])("p", null, "A place to share your knowledge."),
          ]),
        ],
        -1
      ),
      H = { class: "container page" },
      I = { class: "row" },
      N = { class: "col-md-9" },
      G = { class: "feed-toggle" },
      Y = { class: "nav nav-pills outline-active" },
      z = { class: "nav-item" },
      B = { key: 0, class: "nav-link disabled", href: "" },
      D = Object(r["h"])(
        "li",
        { class: "nav-item" },
        [
          Object(r["h"])(
            "a",
            { class: "nav-link active", href: "" },
            "Global Feed"
          ),
        ],
        -1
      ),
      K = Object(r["f"])(
        '<div class="col-md-3"><div class="sidebar"><p>Popular Tags</p><div class="tag-list"><a href="" class="tag-pill tag-default">programming</a><a href="" class="tag-pill tag-default">javascript</a><a href="" class="tag-pill tag-default">emberjs</a><a href="" class="tag-pill tag-default">angularjs</a><a href="" class="tag-pill tag-default">react</a><a href="" class="tag-pill tag-default">mean</a><a href="" class="tag-pill tag-default">node</a><a href="" class="tag-pill tag-default">rails</a></div></div></div>',
        1
      );
    function Q(e, t, n, a, c, i) {
      var u = Object(r["w"])("arcticle-preview");
      return (
        Object(r["q"])(),
        Object(r["d"])("div", J, [
          L,
          Object(r["h"])("div", H, [
            Object(r["h"])("div", I, [
              Object(r["h"])("div", N, [
                Object(r["h"])("div", G, [
                  Object(r["h"])("ul", Y, [
                    Object(r["h"])("li", z, [
                      e.username
                        ? (Object(r["q"])(),
                          Object(r["d"])("a", B, "Your Feed"))
                        : Object(r["e"])("", !0),
                    ]),
                    D,
                  ]),
                ]),
                (Object(r["q"])(!0),
                Object(r["d"])(
                  r["a"],
                  null,
                  Object(r["v"])(e.feed, function (e) {
                    return (
                      Object(r["q"])(),
                      Object(r["d"])(u, { article: e, key: e.slug }, null, 8, [
                        "article",
                      ])
                    );
                  }),
                  128
                )),
              ]),
              K,
            ]),
          ]),
        ])
      );
    }
    n("a4d3"), n("e01a");
    var V = { class: "article-preview" },
      W = { class: "article-meta" },
      X = { href: "profile.html" },
      Z = { class: "info" },
      $ = { href: "", class: "author" },
      ee = Object(r["h"])("span", { class: "date" }, "January 20th", -1),
      te = { class: "btn btn-outline-primary btn-sm pull-xs-right" },
      ne = Object(r["h"])("i", { class: "ion-heart" }, null, -1),
      re = { href: "", class: "preview-link" },
      ae = Object(r["h"])("span", null, "Read more...", -1);
    function ce(e, t, n, a, c, i) {
      return (
        Object(r["q"])(),
        Object(r["d"])("div", V, [
          Object(r["h"])("div", W, [
            Object(r["h"])("a", X, [
              Object(r["h"])("img", { src: e.article.author.image }, null, 8, [
                "src",
              ]),
            ]),
            Object(r["h"])("div", Z, [
              Object(r["h"])(
                "a",
                $,
                Object(r["y"])(e.article.author.username),
                1
              ),
              ee,
            ]),
            Object(r["h"])("button", te, [
              ne,
              Object(r["g"])(" " + Object(r["y"])(e.article.favoritesCount), 1),
            ]),
          ]),
          Object(r["h"])("a", re, [
            Object(r["h"])("h1", null, Object(r["y"])(e.article.title), 1),
            Object(r["h"])("p", null, Object(r["y"])(e.article.description), 1),
            ae,
          ]),
        ])
      );
    }
    var ie = n("1b40"),
      ue = (function (e) {
        Object(i["a"])(n, e);
        var t = Object(u["a"])(n);
        function n() {
          return Object(c["a"])(this, n), t.apply(this, arguments);
        }
        return n;
      })(_["b"]);
    Object(s["a"])([Object(ie["a"])()], ue.prototype, "article", void 0),
      (ue.render = ce);
    var se = ue,
      oe = n("1da1"),
      le = (n("96cf"), n("6fc5")),
      be = n("0613"),
      pe = n("842b"),
      de = (function (e) {
        Object(i["a"])(n, e);
        var t = Object(u["a"])(n);
        function n() {
          var e;
          return (
            Object(c["a"])(this, n),
            (e = t.apply(this, arguments)),
            (e.feed = []),
            e
          );
        }
        return (
          Object(F["a"])(n, [
            {
              key: "setFeed",
              value: function (e) {
                this.feed = e;
              },
            },
            {
              key: "loadFeed",
              value: (function () {
                var e = Object(oe["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    var n;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), Object(pe["a"])()
                              );
                            case 3:
                              return (
                                (n = e.sent), e.abrupt("return", n.articles)
                              );
                            case 7:
                              (e.prev = 7),
                                (e.t0 = e["catch"](0)),
                                console.log(e.t0);
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]]
                    );
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
          ]),
          n
        );
      })(le["d"]);
    Object(s["a"])([le["c"]], de.prototype, "setFeed", null),
      Object(s["a"])(
        [Object(le["a"])({ commit: "setFeed" })],
        de.prototype,
        "loadFeed",
        null
      ),
      (de = Object(s["a"])(
        [
          Object(le["b"])({
            namespaced: !0,
            name: "articles",
            store: be["a"],
            dynamic: !0,
          }),
        ],
        de
      ));
    var fe = Object(le["e"])(de),
      je = (function (e) {
        Object(i["a"])(n, e);
        var t = Object(u["a"])(n);
        function n() {
          var e;
          return (
            Object(c["a"])(this, n),
            (e = t.apply(this, arguments)),
            (e.feed = []),
            e
          );
        }
        return (
          Object(F["a"])(n, [
            {
              key: "username",
              get: function () {
                return S["a"].username;
              },
            },
            {
              key: "created",
              value: function () {
                var e = this;
                fe.loadFeed("global").then(function () {
                  e.feed = fe.feed;
                });
              },
            },
          ]),
          n
        );
      })(_["b"]);
    je = Object(s["a"])(
      [Object(_["a"])({ components: { ArcticlePreview: se } })],
      je
    );
    var he = je;
    he.render = Q;
    var Oe = he,
      ve = [
        { path: "/", name: "Home", component: Oe },
        {
          path: "/login",
          name: "login",
          component: function () {
            return n.e("chunk-2d2086b7").then(n.bind(null, "a55b"));
          },
        },
        {
          path: "/register",
          name: "register",
          component: function () {
            return n.e("chunk-2d0d6d35").then(n.bind(null, "73cf"));
          },
        },
        {
          path: "/settings",
          name: "settings",
          component: function () {
            return n.e("chunk-2d0b3289").then(n.bind(null, "26d3"));
          },
        },
        {
          path: "/@:username",
          name: "profile",
          component: function () {
            return n.e("chunk-2d217357").then(n.bind(null, "c66d"));
          },
        },
      ],
      me = Object(E["a"])({ history: Object(E["b"])(), routes: ve }),
      ge = me;
    n("845f");
    Object(r["c"])(U).use(be["a"]).use(ge).mount("#app");
  },
});
//# sourceMappingURL=app.a9df5d67.js.map
