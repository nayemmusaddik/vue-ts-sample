(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d217357"],
  {
    c66d: function (a, e, t) {
      "use strict";
      t.r(e);
      var i = t("7a23"),
        s = { class: "profile-page" },
        l = { class: "user-info" },
        c = { class: "container" },
        r = { class: "row" },
        n = { class: "col-xs-12 col-md-10 offset-md-1" },
        o = { key: 1 },
        d = { class: "btn btn-sm btn-outline-secondary action-btn" },
        u = Object(i["h"])("i", { class: "ion-plus-round" }, null, -1),
        p = Object(i["f"])(
          '<div class="container"><div class="row"><div class="col-xs-12 col-md-10 offset-md-1"><div class="articles-toggle"><ul class="nav nav-pills outline-active"><li class="nav-item"><a class="nav-link active" href="">My Articles</a></li><li class="nav-item"><a class="nav-link" href="">Favorited Articles</a></li></ul></div><div class="article-preview"><div class="article-meta"><a href=""><img src="http://i.imgur.com/Qr71crq.jpg"></a><div class="info"><a href="" class="author">Eric Simons</a><span class="date">January 20th</span></div><button class="btn btn-outline-primary btn-sm pull-xs-right"><i class="ion-heart"></i> 29 </button></div><a href="" class="preview-link"><h1>How to build webapps that scale</h1><p>This is the description for the post.</p><span>Read more...</span></a></div><div class="article-preview"><div class="article-meta"><a href=""><img src="http://i.imgur.com/N4VcUeJ.jpg"></a><div class="info"><a href="" class="author">Albert Pai</a><span class="date">January 20th</span></div><button class="btn btn-outline-primary btn-sm pull-xs-right"><i class="ion-heart"></i> 32 </button></div><a href="" class="preview-link"><h1> The song you won&#39;t ever stop singing. No matter how hard you try. </h1><p>This is the description for the post.</p><span>Read more...</span><ul class="tag-list"><li class="tag-default tag-pill tag-outline">Music</li><li class="tag-default tag-pill tag-outline">Song</li></ul></a></div></div></div></div>',
          1
        );
      function b(a, e, t, b, h, v) {
        return (
          Object(i["q"])(),
          Object(i["d"])("div", s, [
            Object(i["h"])("div", l, [
              Object(i["h"])("div", c, [
                Object(i["h"])("div", r, [
                  Object(i["h"])("div", n, [
                    a.profileData.image
                      ? (Object(i["q"])(),
                        Object(i["d"])(
                          "img",
                          {
                            key: 0,
                            src: a.profileData.image,
                            class: "user-img",
                          },
                          null,
                          8,
                          ["src"]
                        ))
                      : Object(i["e"])("", !0),
                    Object(i["h"])(
                      "h4",
                      null,
                      Object(i["y"])(a.profileData.username),
                      1
                    ),
                    a.profileData.bio
                      ? (Object(i["q"])(),
                        Object(i["d"])(
                          "p",
                          o,
                          Object(i["y"])(a.profileData.bio),
                          1
                        ))
                      : Object(i["e"])("", !0),
                    Object(i["h"])("button", d, [
                      u,
                      Object(i["g"])(
                        "   Follow " + Object(i["y"])(a.profileData.username),
                        1
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            p,
          ])
        );
      }
      var h = t("d4ec"),
        v = t("bee2"),
        f = t("262e"),
        m = t("2caf"),
        g = t("ce1f"),
        j = t("9d5c"),
        O = (function (a) {
          Object(f["a"])(t, a);
          var e = Object(m["a"])(t);
          function t() {
            return Object(h["a"])(this, t), e.apply(this, arguments);
          }
          return (
            Object(v["a"])(t, [
              {
                key: "created",
                value: function () {
                  j["a"].loadProfile(this.$route.params.username);
                },
              },
              {
                key: "profileData",
                get: function () {
                  return j["a"].profile;
                },
              },
            ]),
            t
          );
        })(g["b"]);
      O.render = b;
      e["default"] = O;
    },
  },
]);
//# sourceMappingURL=chunk-2d217357.131ed379.js.map
