"use strict";
(() => {
  var go = Object.create;
  var Ar = Object.defineProperty;
  var wo = Object.getOwnPropertyDescriptor;
  var So = Object.getOwnPropertyNames, et = Object.getOwnPropertySymbols, Eo = Object.getPrototypeOf, tt = Object.prototype.hasOwnProperty, Oo = Object.prototype.propertyIsEnumerable;
  var rt = (e, r, t) => r in e ? Ar(e, r, {enumerable: true, configurable: true, writable: true, value: t}) : e[r] = t, Je = (e, r) => {
    for (var t in r || (r = {})) tt.call(r, t) && rt(e, t, r[t]);
    if (et) for (var t of et(r)) Oo.call(r, t) && rt(e, t, r[t]);
    return e;
  };
  var Me = (e, r) => () => (r || e((r = {exports: {}}).exports, r), r.exports);
  var To = (e, r, t, o) => {
    if (r && typeof r == "object" || typeof r == "function") for (let n of So(r)) !tt.call(e, n) && n !== t && Ar(e, n, {get: () => r[n], enumerable: !(o = wo(r, n)) || o.enumerable});
    return e;
  };
  var ot = (e, r, t) => (t = e != null ? go(Eo(e)) : {}, To(r || !e || !e.__esModule ? Ar(t, "default", {value: e, enumerable: true}) : t, e));
  var De = Me(Z => {
    (function () {
      var e, r, t, o, n, i, f, u, c, a, s, p, d, l, m, h, b, w, E, k;
      k = 150, a = 20, E = 150, c = 0.75, Z.score = function (v, x, S) {
        var T, y, g, _;
        return y = S.preparedQuery, T = S.allowErrors, T || n(v, y.core_lw, y.core_up) ? (_ = v.toLowerCase(), g = r(v, _, y), Math.ceil(g)) : 0;
      }, Z.isMatch = n = function (v, x, S) {
        var T, y, g, _, W, U, L;
        if (g = v.length, _ = x.length, !g || _ > g) return false;
        for (T = -1, y = -1; ++y < _;) {
          for (W = x.charCodeAt(y), U = S.charCodeAt(y); ++T < g && (L = v.charCodeAt(T), !(L === W || L === U));) ;
          if (T === g) return false;
        }
        return true;
      }, Z.computeScore = r = function (v, x, S) {
        var T, y, g, _, W, U, L, j, M, N, V, re, Q, fe, de, te, ye, ce, Er, Ae, Ke, Or, Tr, _r;
        if (de = S.query, te = S.query_lw, N = v.length, Q = de.length, T = s(v, x, de, te), y = T.score, T.count === Q) return l(Q, N, y, T.pos);
        if (fe = x.indexOf(te), fe > -1) return m(v, x, de, te, fe, Q, N);
        for (Ae = new Array(Q), W = new Array(Q), _r = w(Q, N), V = Math.ceil(c * Q) + 5, re = V, L = true, M = -1; ++M < Q;) Ae[M] = 0, W[M] = 0;
        for (j = -1; ++j < N;) {
          if (Or = x[j], !Or.charCodeAt(0) in S.charCodes) {
            if (L) {
              for (M = -1; ++M < Q;) W[M] = 0;
              L = false;
            }
            continue;
          }
          for (ce = 0, Er = 0, _ = 0, ye = true, L = true, M = -1; ++M < Q;) {
            if (Ke = Ae[M], Ke > ce && (ce = Ke), U = 0, te[M] === Or) if (Tr = u(j, v, x), U = _ > 0 ? _ : d(v, x, de, te, j, M, Tr), g = Er + p(j, M, Tr, y, U), g > ce) ce = g, re = V; else {
              if (ye && --re <= 0) return Math.max(ce, Ae[Q - 1]) * _r;
              ye = false;
            }
            Er = Ke, _ = W[M], W[M] = U, Ae[M] = ce;
          }
        }
        return ce = Ae[Q - 1], ce * _r;
      }, Z.isWordStart = u = function (v, x, S) {
        var T, y;
        return v === 0 ? true : (T = x[v], y = x[v - 1], i(y) || T !== S[v] && y === S[v - 1]);
      }, Z.isWordEnd = f = function (v, x, S, T) {
        var y, g;
        return v === T - 1 ? true : (y = x[v], g = x[v + 1], i(g) || y === S[v] && g !== S[v + 1]);
      }, i = function (v) {
        return v === " " || v === "." || v === "-" || v === "_" || v === "/" || v === "\\";
      }, b = function (v) {
        var x;
        return v < a ? (x = a - v, 100 + x * x) : Math.max(100 + a - v, 0);
      }, Z.scoreSize = w = function (v, x) {
        return E / (E + Math.abs(x - v));
      }, l = function (v, x, S, T) {
        return 2 * v * (k * S + b(T)) * w(v, x);
      }, Z.scorePattern = h = function (v, x, S, T, y) {
        var g, _;
        return _ = v, g = 6, S === v && (g += 2), T && (g += 3), y && (g += 1), v === x && (T && (S === x ? _ += 2 : _ += 1), y && (g += 1)), S + _ * (_ + g);
      }, Z.scoreCharacter = p = function (v, x, S, T, y) {
        var g;
        return g = b(v), S ? g + k * ((T > y ? T : y) + 10) : g + k * y;
      }, Z.scoreConsecutives = d = function (v, x, S, T, y, g, _) {
        var W, U, L, j, M, N, V;
        for (U = v.length, j = S.length, L = U - y, M = j - g, W = L < M ? L : M, N = 0, V = 0, S[g] === v[y] && N++; ++V < W && T[++g] === x[++y];) S[g] === v[y] && N++;
        return V < W && y--, V === 1 ? 1 + 2 * N : h(V, j, N, _, f(y, v, x, U));
      }, Z.scoreExactMatch = m = function (v, x, S, T, y, g, _) {
        var W, U, L, j, M;
        for (M = u(y, v, x), M || (L = x.indexOf(T, y + 1), L > -1 && (M = u(L, v, x), M && (y = L))), U = -1, j = 0; ++U < g;) S[y + U] === v[U] && j++;
        return W = f(y + g - 1, v, x, _), l(g, _, h(g, g, j, M, W), y);
      }, e = function () {
        function v(x, S, T) {
          this.score = x, this.pos = S, this.count = T;
        }
        return v;
      }(), t = new e(0, 0.1, 0), Z.scoreAcronyms = s = function (v, x, S, T) {
        var y, g, _, W, U, L, j, M, N, V, re;
        if (U = v.length, L = S.length, !(U > 1 && L > 1)) return t;
        for (y = 0, V = 0, re = 0, M = 0, _ = -1, W = -1; ++W < L;) {
          if (j = T[W], i(j)) if (_ = x.indexOf(j, _ + 1), _ > -1) {
            V++;
            continue;
          } else break;
          for (; ++_ < U;) if (j === x[_] && u(_, v, x)) {
            S[W] === v[_] && M++, re += _, y++;
            break;
          }
          if (_ === U) break;
        }
        return y < 2 ? t : (g = y === L ? o(v, x, S, y) : false, N = h(y, L, M, true, g), new e(N, re / y, y + V));
      }, o = function (v, x, S, T) {
        var y, g, _, W;
        if (_ = v.length, W = S.length, y = 0, _ > 12 * W) return false;
        for (g = -1; ++g < _;) if (u(g, v, x) && ++y > T) return false;
        return true;
      };
    }.call(Z));
  });
  var wr = Me(Qe => {
    (function () {
      var e, r, t, o, n, i, f, u, c, a;
      a = De(), i = a.isMatch, e = a.computeScore, u = a.scoreSize, c = 20, t = 2.5, Qe.score = function (s, p, d) {
        var l, m, h, b;
        return m = d.preparedQuery, l = d.allowErrors, l || i(s, m.core_lw, m.core_up) ? (b = s.toLowerCase(), h = e(s, b, m), h = f(s, b, h, d), Math.ceil(h)) : 0;
      }, f = function (s, p, d, l) {
        var m, h, b, w, E, k, v, x, S, T;
        if (d === 0) return 0;
        for (S = l.preparedQuery, T = l.useExtensionBonus, x = l.pathSeparator, E = s.length - 1; s[E] === x;) E--;
        if (b = s.lastIndexOf(x, E), v = E - b, k = 1, T && (k += n(p, S.ext, b, E, 2), d *= k), b === -1) return d;
        for (w = S.depth; b > -1 && w-- > 0;) b = s.lastIndexOf(x, b - 1);
        return h = b === -1 ? d : k * e(s.slice(b + 1, E + 1), p.slice(b + 1, E + 1), S), m = 0.5 * c / (c + r(s, E + 1, x)), m * h + (1 - m) * d * u(0, t * v);
      }, Qe.countDir = r = function (s, p, d) {
        var l, m;
        if (p < 1) return 0;
        for (l = 0, m = -1; ++m < p && s[m] === d;) ;
        for (; ++m < p;) if (s[m] === d) for (l++; ++m < p && s[m] === d;) ;
        return l;
      }, Qe.getExtension = o = function (s) {
        var p;
        return p = s.lastIndexOf("."), p < 0 ? "" : s.substr(p + 1);
      }, n = function (s, p, d, l, m) {
        var h, b, w, E;
        if (!p.length || (E = s.lastIndexOf(".", l), !(E > d))) return 0;
        for (w = p.length, h = l - E, h < w && (w = h, h = p.length), E++, b = -1; ++b < w && s[E + b] === p[b];) ;
        return b === 0 && m > 0 ? 0.9 * n(s, p, d, E - 2, m - 1) : b / h;
      };
    }.call(Qe));
  });
  var Gr = Me((to, oo) => {
    (function () {
      var e, r, t, o, n, i, f, u;
      u = wr(), t = u.countDir, n = u.getExtension, oo.exports = e = function () {
        function c(a, s) {
          var p, d, l;
          if (l = s != null ? s : {}, p = l.optCharRegEx, d = l.pathSeparator, !(a && a.length)) return null;
          this.query = a, this.query_lw = a.toLowerCase(), this.core = r(a, p), this.core_lw = this.core.toLowerCase(), this.core_up = f(this.core), this.depth = t(a, a.length, d), this.ext = n(this.query_lw), this.charCodes = o(this.query_lw);
        }
        return c;
      }(), i = /[ _\-:\/\\]/g, r = function (c, a) {
        return a == null && (a = i), c.replace(a, "");
      }, f = function (c) {
        var a, s, p, d;
        for (s = "", p = 0, d = c.length; p < d; p++) a = c[p], s += a.toUpperCase()[0];
        return s;
      }, o = function (c) {
        var a, s, p;
        for (p = c.length, s = -1, a = []; ++s < p;) a[c.charCodeAt(s)] = true;
        return a;
      };
    }.call(to));
  });
  var ao = Me((no, io) => {
    (function () {
      var e, r, t, o, n;
      o = De(), r = wr(), e = Gr(), t = function (i) {
        return i.candidate;
      }, n = function (i, f) {
        return f.score - i.score;
      }, io.exports = function (i, f, u) {
        var c, a, s, p, d, l, m, h, b, w, E, k, v;
        for (h = [], s = u.key, d = u.maxResults, p = u.maxInners, E = u.usePathScoring, b = p != null && p > 0 ? p : i.length + 1, c = s != null, m = E ? r : o, k = 0, v = i.length; k < v && (a = i[k], w = c ? a[s] : a, !(!!w && (l = m.score(w, f, u), l > 0 && (h.push({candidate: a, score: l}), !--b)))); k++) ;
        return h.sort(n), i = h.map(t), d != null && (i = i.slice(0, d)), i;
      };
    }.call(no));
  });
  var fo = Me(Sr => {
    (function () {
      var e, r, t, o, n, i, f, u, c, a;
      a = De(), t = a.isMatch, o = a.isWordStart, c = a.scoreConsecutives, u = a.scoreCharacter, f = a.scoreAcronyms, Sr.match = n = function (s, p, d) {
        var l, m, h, b, w, E;
        return l = d.allowErrors, w = d.preparedQuery, b = d.pathSeparator, l || t(s, w.core_lw, w.core_up) ? (E = s.toLowerCase(), h = r(s, E, w), h.length === 0 || s.indexOf(b) > -1 && (m = e(s, E, w, b), h = i(h, m)), h) : [];
      }, Sr.wrap = function (s, p, d) {
        var l, m, h, b, w, E, k, v, x;
        if (d.wrap != null && (x = d.wrap, E = x.tagClass, v = x.tagOpen, k = x.tagClose), E == null && (E = "highlight"), v == null && (v = '<strong class="' + E + '">'), k == null && (k = "</strong>"), s === p) return v + s + k;
        if (h = n(s, p, d), h.length === 0) return s;
        for (b = "", l = -1, w = 0; ++l < h.length;) {
          for (m = h[l], m > w && (b += s.substring(w, m), w = m); ++l < h.length;) if (h[l] === m + 1) m++; else {
            l--;
            break;
          }
          m++, m > w && (b += v, b += s.substring(w, m), b += k, w = m);
        }
        return w <= s.length - 1 && (b += s.substring(w)), b;
      }, e = function (s, p, d, l) {
        var m, h, b;
        for (b = s.length - 1; s[b] === l;) b--;
        if (m = s.lastIndexOf(l, b), m === -1) return [];
        for (h = d.depth; h-- > 0;) if (m = s.lastIndexOf(l, m - 1), m === -1) return [];
        return m++, b++, r(s.slice(m, b), p.slice(m, b), d, m);
      }, i = function (s, p) {
        var d, l, m, h, b, w, E;
        if (b = s.length, w = p.length, w === 0) return s.slice();
        if (b === 0) return p.slice();
        for (m = -1, h = 0, l = p[h], E = []; ++m < b;) {
          for (d = s[m]; l <= d && ++h < w;) l < d && E.push(l), l = p[h];
          E.push(d);
        }
        for (; h < w;) E.push(p[h++]);
        return E;
      }, r = function (s, p, d, l) {
        var m, h, b, w, E, k, v, x, S, T, y, g, _, W, U, L, j, M, N, V, re, Q, fe, de, te, ye;
        for (l == null && (l = 0), M = d.query, N = d.query_lw, _ = s.length, L = M.length, E = f(s, p, M, N).score, Q = new Array(L), S = new Array(L), b = 0, w = 1, h = 2, m = 3, ye = new Array(_ * L), j = -1, g = -1; ++g < L;) Q[g] = 0, S[g] = 0;
        for (y = -1; ++y < _;) for (V = 0, fe = 0, x = 0, de = p[y], g = -1; ++g < L;) T = 0, k = 0, re = fe, N[g] === de && (te = o(y, s, p), T = x > 0 ? x : c(s, p, M, N, y, g, te), k = re + u(y, g, te, E, T)), fe = Q[g], x = S[g], V > fe ? U = h : (V = fe, U = w), k > V ? (V = k, U = m) : T = 0, Q[g] = V, S[g] = T, ye[++j] = V > 0 ? U : b;
        for (y = _ - 1, g = L - 1, j = y * L + g, v = true, W = []; v && y >= 0 && g >= 0;) switch (ye[j]) {
          case w:
            y--, j -= L;
            break;
          case h:
            g--, j--;
            break;
          case m:
            W.push(y + l), g--, y--, j -= L + 1;
            break;
          default:
            v = false;
        }
        return W.reverse(), W;
      };
    }.call(Sr));
  });
  var Br = Me((co, so) => {
    (function () {
      var e, r, t, o, n, i, f, u;
      t = ao(), o = fo(), u = De(), i = wr(), e = Gr(), f = null, r = (typeof process != "undefined" && process !== null ? process.platform : undefined) === "win32" ? "\\" : "/", so.exports = {filter: function (c, a, s) {
        return s == null && (s = {}), a != null && a.length && (c != null && c.length) ? (s = n(s, a), t(c, a, s)) : [];
      }, score: function (c, a, s) {
        return s == null && (s = {}), c != null && c.length && (a != null && a.length) ? (s = n(s, a), s.usePathScoring ? i.score(c, a, s) : u.score(c, a, s)) : 0;
      }, match: function (c, a, s) {
        var p, d, l;
        return s == null && (s = {}), c ? a ? c === a ? function () {
          l = [];
          for (var m = 0, h = c.length; 0 <= h ? m < h : m > h; 0 <= h ? m++ : m--) l.push(m);
          return l;
        }.apply(this) : (s = n(s, a), o.match(c, a, s)) : [] : [];
      }, wrap: function (c, a, s) {
        return s == null && (s = {}), c ? a ? (s = n(s, a), o.wrap(c, a, s)) : [] : [];
      }, prepareQuery: function (c, a) {
        return a == null && (a = {}), a = n(a, c), a.preparedQuery;
      }}, n = function (c, a) {
        return c.allowErrors == null && (c.allowErrors = false), c.usePathScoring == null && (c.usePathScoring = true), c.useExtensionBonus == null && (c.useExtensionBonus = false), c.pathSeparator == null && (c.pathSeparator = r), c.optCharRegEx == null && (c.optCharRegEx = null), c.wrap == null && (c.wrap = null), c.preparedQuery == null && (c.preparedQuery = f && f.query === a ? f : f = new e(a, c)), c;
      };
    }.call(co));
  });
  var Mr = function (e, r) {
    return Mr = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, o) {
      t.__proto__ = o;
    } || function (t, o) {
      for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
    }, Mr(e, r);
  };
  function z(e, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    Mr(e, r);
    function t() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t);
  }
  function nt(e, r, t, o) {
    function n(i) {
      return i instanceof t ? i : new t(function (f) {
        f(i);
      });
    }
    return new (t || (t = Promise))(function (i, f) {
      function u(s) {
        try {
          a(o.next(s));
        } catch (p) {
          f(p);
        }
      }
      function c(s) {
        try {
          a(o.throw(s));
        } catch (p) {
          f(p);
        }
      }
      function a(s) {
        s.done ? i(s.value) : n(s.value).then(u, c);
      }
      a((o = o.apply(e, r || [])).next());
    });
  }
  function Ye(e, r) {
    var t = {label: 0, sent: function () {
      if (i[0] & 1) throw i[1];
      return i[1];
    }, trys: [], ops: []}, o, n, i, f = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return f.next = u(0), f.throw = u(1), f.return = u(2), typeof Symbol == "function" && (f[Symbol.iterator] = function () {
      return this;
    }), f;
    function u(a) {
      return function (s) {
        return c([a, s]);
      };
    }
    function c(a) {
      if (o) throw new TypeError("Generator is already executing.");
      for (; f && (f = 0, a[0] && (t = 0)), t;) try {
        if (o = 1, n && (i = a[0] & 2 ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
        switch (n = 0, i && (a = [a[0] & 2, i.value]), a[0]) {
          case 0:
          case 1:
            i = a;
            break;
          case 4:
            return t.label++, {value: a[1], done: false};
          case 5:
            t.label++, n = a[1], a = [0];
            continue;
          case 7:
            a = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (a[0] === 6 || a[0] === 2)) {
              t = 0;
              continue;
            }
            if (a[0] === 3 && (!i || a[1] > i[0] && a[1] < i[3])) {
              t.label = a[1];
              break;
            }
            if (a[0] === 6 && t.label < i[1]) {
              t.label = i[1], i = a;
              break;
            }
            if (i && t.label < i[2]) {
              t.label = i[2], t.ops.push(a);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        a = r.call(e, t);
      } catch (s) {
        a = [6, s], n = 0;
      } finally {
        o = i = 0;
      }
      if (a[0] & 5) throw a[1];
      return {value: a[0] ? a[1] : undefined, done: true};
    }
  }
  function X(e) {
    var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], o = 0;
    if (t) return t.call(e);
    if (e && typeof e.length == "number") return {next: function () {
      return e && o >= e.length && (e = undefined), {value: e && e[o++], done: !e};
    }};
    throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function R(e, r) {
    var t = typeof Symbol == "function" && e[Symbol.iterator];
    if (!t) return e;
    var o = t.call(e), n, i = [], f;
    try {
      for (; (r === undefined || r-- > 0) && !(n = o.next()).done;) i.push(n.value);
    } catch (u) {
      f = {error: u};
    } finally {
      try {
        n && !n.done && (t = o.return) && t.call(o);
      } finally {
        if (f) throw f.error;
      }
    }
    return i;
  }
  function H(e, r, t) {
    if (t || arguments.length === 2) for (var o = 0, n = r.length, i; o < n; o++) (i || !(o in r)) && (i || (i = Array.prototype.slice.call(r, 0, o)), i[o] = r[o]);
    return e.concat(i || Array.prototype.slice.call(r));
  }
  function ge(e) {
    return this instanceof ge ? (this.v = e, this) : new ge(e);
  }
  function it(e, r, t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var o = t.apply(e, r || []), n, i = [];
    return n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", f), n[Symbol.asyncIterator] = function () {
      return this;
    }, n;
    function f(l) {
      return function (m) {
        return Promise.resolve(m).then(l, p);
      };
    }
    function u(l, m) {
      o[l] && (n[l] = function (h) {
        return new Promise(function (b, w) {
          i.push([l, h, b, w]) > 1 || c(l, h);
        });
      }, m && (n[l] = m(n[l])));
    }
    function c(l, m) {
      try {
        a(o[l](m));
      } catch (h) {
        d(i[0][3], h);
      }
    }
    function a(l) {
      l.value instanceof ge ? Promise.resolve(l.value.v).then(s, p) : d(i[0][2], l);
    }
    function s(l) {
      c("next", l);
    }
    function p(l) {
      c("throw", l);
    }
    function d(l, m) {
      l(m), i.shift(), i.length && c(i[0][0], i[0][1]);
    }
  }
  function at(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = e[Symbol.asyncIterator], t;
    return r ? r.call(e) : (e = typeof X == "function" ? X(e) : e[Symbol.iterator](), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function () {
      return this;
    }, t);
    function o(i) {
      t[i] = e[i] && function (f) {
        return new Promise(function (u, c) {
          f = e[i](f), n(u, c, f.done, f.value);
        });
      };
    }
    function n(i, f, u, c) {
      Promise.resolve(c).then(function (a) {
        i({value: a, done: u});
      }, f);
    }
  }
  function Xe(e) {
    var r = function (o) {
      Error.call(o), o.stack = (new Error).stack;
    }, t = e(r);
    return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
  }
  var Ge = Xe(function (e) {
    return function (t) {
      e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function (o, n) {
        return n + 1 + ") " + o.toString();
      }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
    };
  });
  function se(e, r) {
    if (e) {
      var t = e.indexOf(r);
      0 <= t && e.splice(t, 1);
    }
  }
  var oe = function () {
    function e(r) {
      this.initialTeardown = r, this.closed = false, this._parentage = null, this._finalizers = null;
    }
    return e.prototype.unsubscribe = function () {
      var r, t, o, n, i;
      if (!this.closed) {
        this.closed = true;
        var f = this._parentage;
        if (f) if (this._parentage = null, Array.isArray(f)) try {
          for (var u = X(f), c = u.next(); !c.done; c = u.next()) {
            var a = c.value;
            a.remove(this);
          }
        } catch (h) {
          r = {error: h};
        } finally {
          try {
            c && !c.done && (t = u.return) && t.call(u);
          } finally {
            if (r) throw r.error;
          }
        } else f.remove(this);
        var s = this.initialTeardown;
        if (typeof s == "function") try {
          s();
        } catch (h) {
          i = h instanceof Ge ? h.errors : [h];
        }
        var p = this._finalizers;
        if (p) {
          this._finalizers = null;
          try {
            for (var d = X(p), l = d.next(); !l.done; l = d.next()) {
              var m = l.value;
              try {
                ft(m);
              } catch (h) {
                i = i != null ? i : [], h instanceof Ge ? i = H(H([], R(i)), R(h.errors)) : i.push(h);
              }
            }
          } catch (h) {
            o = {error: h};
          } finally {
            try {
              l && !l.done && (n = d.return) && n.call(d);
            } finally {
              if (o) throw o.error;
            }
          }
        }
        if (i) throw new Ge(i);
      }
    }, e.prototype.add = function (r) {
      var t;
      if (r && r !== this) if (this.closed) ft(r); else {
        if (r instanceof e) {
          if (r.closed || r._hasParent(this)) return;
          r._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== undefined ? t : []).push(r);
      }
    }, e.prototype._hasParent = function (r) {
      var t = this._parentage;
      return t === r || Array.isArray(t) && t.includes(r);
    }, e.prototype._addParent = function (r) {
      var t = this._parentage;
      this._parentage = Array.isArray(t) ? (t.push(r), t) : t ? [t, r] : r;
    }, e.prototype._removeParent = function (r) {
      var t = this._parentage;
      t === r ? this._parentage = null : Array.isArray(t) && se(t, r);
    }, e.prototype.remove = function (r) {
      var t = this._finalizers;
      t && se(t, r), r instanceof e && r._removeParent(this);
    }, e.EMPTY = function () {
      var r = new e;
      return r.closed = true, r;
    }(), e;
  }();
  var Ir = oe.EMPTY;
  function ft(e) {
    typeof e == "function" ? e() : e.unsubscribe();
  }
  var ee = {onUnhandledError: null, onStoppedNotification: null, Promise: undefined, useDeprecatedSynchronousErrorHandling: false, useDeprecatedNextContext: false};
  var Ie = {setTimeout: function (e, r) {
    for (var t = [], o = 2; o < arguments.length; o++) t[o - 2] = arguments[o];
    var n = Ie.delegate;
    return n != null && n.setTimeout ? n.setTimeout.apply(n, H([e, r], R(t))) : setTimeout.apply(undefined, H([e, r], R(t)));
  }, clearTimeout: function (e) {
    var r = Ie.delegate;
    return ((r == null ? undefined : r.clearTimeout) || clearTimeout)(e);
  }, delegate: undefined};
  function Ze(e) {
    Ie.setTimeout(function () {
      var r = ee.onUnhandledError;
      if (r) r(e); else throw e;
    });
  }
  function ue() {}
  var ct = function () {
    return Cr("C", undefined, undefined);
  }();
  function Cr(e, r, t) {
    return {kind: e, value: r, error: t};
  }
  var we = null;
  function Ce(e) {
    if (ee.useDeprecatedSynchronousErrorHandling) {
      var r = !we;
      if (r && (we = {errorThrown: false, error: null}), e(), r) {
        var t = we, o = t.errorThrown, n = t.error;
        if (we = null, o) throw n;
      }
    } else e();
  }
  function pt(e) {
    ee.useDeprecatedSynchronousErrorHandling && we && (we.errorThrown = true, we.error = e);
  }
  var Ue = function (e) {
    z(r, e);
    function r(t) {
      var o = e.call(this) || this;
      return o.isStopped = false, t ? (o.destination = t, (t instanceof oe || t && "closed" in t && typeof t.remove == "function" && typeof t.add == "function" && typeof t.unsubscribe == "function") && t.add(o)) : o.destination = Io, o;
    }
    return r.create = function (t, o, n) {
      return new Se(t, o, n);
    }, r.prototype.next = function (t) {
      this.isStopped ? Pr(Cr("N", t, undefined), this) : this._next(t);
    }, r.prototype.error = function (t) {
      this.isStopped ? Pr(Cr("E", undefined, t), this) : (this.isStopped = true, this._error(t));
    }, r.prototype.complete = function () {
      this.isStopped ? Pr(ct, this) : (this.isStopped = true, this._complete());
    }, r.prototype.unsubscribe = function () {
      this.closed || (this.isStopped = true, e.prototype.unsubscribe.call(this), this.destination = null);
    }, r.prototype._next = function (t) {
      this.destination.next(t);
    }, r.prototype._error = function (t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }, r.prototype._complete = function () {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }, r;
  }(oe);
  var _o = Function.prototype.bind;
  var Ao = function () {
    function e(r) {
      this.partialObserver = r;
    }
    return e.prototype.next = function (r) {
      var t = this.partialObserver;
      if (t.next) try {
        t.next(r);
      } catch (o) {
        er(o);
      }
    }, e.prototype.error = function (r) {
      var t = this.partialObserver;
      if (t.error) try {
        t.error(r);
      } catch (o) {
        er(o);
      } else er(r);
    }, e.prototype.complete = function () {
      var r = this.partialObserver;
      if (r.complete) try {
        r.complete();
      } catch (t) {
        er(t);
      }
    }, e;
  }(), Se = function (e) {
    z(r, e);
    function r(t, o, n) {
      var i = e.call(this) || this, f;
      if (typeof t == "function" || !t) f = {next: t != null ? t : undefined, error: o != null ? o : undefined, complete: n != null ? n : undefined}; else {
        var u;
        i && ee.useDeprecatedNextContext ? (u = Object.create(t), u.unsubscribe = function () {
          return i.unsubscribe();
        }, f = {next: t.next && _o.call(t.next, u), error: t.error && _o.call(t.error, u), complete: t.complete && _o.call(t.complete, u)}) : f = t;
      }
      return i.destination = new Ao(f), i;
    }
    return r;
  }(Ue);
  function er(e) {
    ee.useDeprecatedSynchronousErrorHandling ? pt(e) : Ze(e);
  }
  function Mo(e) {
    throw e;
  }
  function Pr(e, r) {
    var t = ee.onStoppedNotification;
    t && Ie.setTimeout(function () {
      return t(e, r);
    });
  }
  var Io = {closed: true, next: ue, error: Mo, complete: ue};
  var Le = function () {
    return typeof Symbol == "function" && Symbol.observable || "@@observable";
  }();
  function lt() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    return Rr(e);
  }
  function Rr(e) {
    return e.length === 0 ? G : e.length === 1 ? e[0] : function (t) {
      return e.reduce(function (o, n) {
        return n(o);
      }, t);
    };
  }
  var I = function () {
    function e(r) {
      r && (this._subscribe = r);
    }
    return e.prototype.lift = function (r) {
      var t = new e;
      return t.source = this, t.operator = r, t;
    }, e.prototype.subscribe = function (r, t, o) {
      var n = this, i = r && r instanceof Ue || r && typeof r.next == "function" && typeof r.error == "function" && typeof r.complete == "function" && (r instanceof oe || r && "closed" in r && typeof r.remove == "function" && typeof r.add == "function" && typeof r.unsubscribe == "function") ? r : new Se(r, t, o);
      return Ce(function () {
        var f = n, u = f.operator, c = f.source;
        i.add(u ? u.call(i, c) : c ? n._subscribe(i) : n._trySubscribe(i));
      }), i;
    }, e.prototype._trySubscribe = function (r) {
      try {
        return this._subscribe(r);
      } catch (t) {
        r.error(t);
      }
    }, e.prototype.forEach = function (r, t) {
      var o = this;
      return t = mt(t), new t(function (n, i) {
        var f = new Se({next: function (u) {
          try {
            r(u);
          } catch (c) {
            i(c), f.unsubscribe();
          }
        }, error: i, complete: n});
        o.subscribe(f);
      });
    }, e.prototype._subscribe = function (r) {
      var t;
      return (t = this.source) === null || t === undefined ? undefined : t.subscribe(r);
    }, e.prototype[Le] = function () {
      return this;
    }, e.prototype.pipe = function () {
      for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
      return Rr(r)(this);
    }, e.prototype.toPromise = function (r) {
      var t = this;
      return r = mt(r), new r(function (o, n) {
        var i;
        t.subscribe(function (f) {
          return i = f;
        }, function (f) {
          return n(f);
        }, function () {
          return o(i);
        });
      });
    }, e.create = function (r) {
      return new e(r);
    }, e;
  }();
  function mt(e) {
    var r;
    return (r = e != null ? e : ee.Promise) !== null && r !== undefined ? r : Promise;
  }
  function A(e) {
    return function (r) {
      if (typeof (r == null ? undefined : r.lift) == "function") return r.lift(function (t) {
        try {
          return e(t, this);
        } catch (o) {
          this.error(o);
        }
      });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  function P(e, r, t, o, n) {
    return new Ro(e, r, t, o, n);
  }
  var Ro = function (e) {
    z(r, e);
    function r(t, o, n, i, f, u) {
      var c = e.call(this, t) || this;
      return c.onFinalize = f, c.shouldUnsubscribe = u, c._next = o ? function (a) {
        try {
          o(a);
        } catch (s) {
          t.error(s);
        }
      } : e.prototype._next, c._error = i ? function (a) {
        try {
          i(a);
        } catch (s) {
          t.error(s);
        } finally {
          this.unsubscribe();
        }
      } : e.prototype._error, c._complete = n ? function () {
        try {
          n();
        } catch (a) {
          t.error(a);
        } finally {
          this.unsubscribe();
        }
      } : e.prototype._complete, c;
    }
    return r.prototype.unsubscribe = function () {
      var t;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var o = this.closed;
        e.prototype.unsubscribe.call(this), !o && ((t = this.onFinalize) === null || t === undefined || t.call(this));
      }
    }, r;
  }(Ue);
  var Pe = {schedule: function (e) {
    var r = requestAnimationFrame, t = cancelAnimationFrame, o = Pe.delegate;
    o && (r = o.requestAnimationFrame, t = o.cancelAnimationFrame);
    var n = r(function (i) {
      t = undefined, e(i);
    });
    return new oe(function () {
      return t == null ? undefined : t(n);
    });
  }, requestAnimationFrame: function () {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    var t = Pe.delegate;
    return ((t == null ? undefined : t.requestAnimationFrame) || requestAnimationFrame).apply(undefined, H([], R(e)));
  }, cancelAnimationFrame: function () {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    var t = Pe.delegate;
    return ((t == null ? undefined : t.cancelAnimationFrame) || cancelAnimationFrame).apply(undefined, H([], R(e)));
  }, delegate: undefined};
  var ht = Xe(function (e) {
    return function () {
      e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
    };
  });
  var K = function (e) {
    z(r, e);
    function r() {
      var t = e.call(this) || this;
      return t.closed = false, t.currentObservers = null, t.observers = [], t.isStopped = false, t.hasError = false, t.thrownError = null, t;
    }
    return r.prototype.lift = function (t) {
      var o = new dt(this, this);
      return o.operator = t, o;
    }, r.prototype._throwIfClosed = function () {
      if (this.closed) throw new ht;
    }, r.prototype.next = function (t) {
      var o = this;
      Ce(function () {
        var n, i;
        if (o._throwIfClosed(), !o.isStopped) {
          o.currentObservers || (o.currentObservers = Array.from(o.observers));
          try {
            for (var f = X(o.currentObservers), u = f.next(); !u.done; u = f.next()) {
              var c = u.value;
              c.next(t);
            }
          } catch (a) {
            n = {error: a};
          } finally {
            try {
              u && !u.done && (i = f.return) && i.call(f);
            } finally {
              if (n) throw n.error;
            }
          }
        }
      });
    }, r.prototype.error = function (t) {
      var o = this;
      Ce(function () {
        if (o._throwIfClosed(), !o.isStopped) {
          o.hasError = o.isStopped = true, o.thrownError = t;
          for (var n = o.observers; n.length;) n.shift().error(t);
        }
      });
    }, r.prototype.complete = function () {
      var t = this;
      Ce(function () {
        if (t._throwIfClosed(), !t.isStopped) {
          t.isStopped = true;
          for (var o = t.observers; o.length;) o.shift().complete();
        }
      });
    }, r.prototype.unsubscribe = function () {
      this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
    }, Object.defineProperty(r.prototype, "observed", {get: function () {
      var t;
      return ((t = this.observers) === null || t === undefined ? undefined : t.length) > 0;
    }, enumerable: false, configurable: true}), r.prototype._trySubscribe = function (t) {
      return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
    }, r.prototype._subscribe = function (t) {
      return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
    }, r.prototype._innerSubscribe = function (t) {
      var o = this, n = this, i = n.hasError, f = n.isStopped, u = n.observers;
      return i || f ? Ir : (this.currentObservers = null, u.push(t), new oe(function () {
        o.currentObservers = null, se(u, t);
      }));
    }, r.prototype._checkFinalizedStatuses = function (t) {
      var o = this, n = o.hasError, i = o.thrownError, f = o.isStopped;
      n ? t.error(i) : f && t.complete();
    }, r.prototype.asObservable = function () {
      var t = new I;
      return t.source = this, t;
    }, r.create = function (t, o) {
      return new dt(t, o);
    }, r;
  }(I);
  var dt = function (e) {
    z(r, e);
    function r(t, o) {
      var n = e.call(this) || this;
      return n.destination = t, n.source = o, n;
    }
    return r.prototype.next = function (t) {
      var o, n;
      (n = (o = this.destination) === null || o === undefined ? undefined : o.next) === null || n === undefined || n.call(o, t);
    }, r.prototype.error = function (t) {
      var o, n;
      (n = (o = this.destination) === null || o === undefined ? undefined : o.error) === null || n === undefined || n.call(o, t);
    }, r.prototype.complete = function () {
      var t, o;
      (o = (t = this.destination) === null || t === undefined ? undefined : t.complete) === null || o === undefined || o.call(t);
    }, r.prototype._subscribe = function (t) {
      var o, n;
      return (n = (o = this.source) === null || o === undefined ? undefined : o.subscribe(t)) !== null && n !== undefined ? n : Ir;
    }, r;
  }(K);
  var kr = function (e) {
    z(r, e);
    function r(t) {
      var o = e.call(this) || this;
      return o._value = t, o;
    }
    return Object.defineProperty(r.prototype, "value", {get: function () {
      return this.getValue();
    }, enumerable: false, configurable: true}), r.prototype._subscribe = function (t) {
      var o = e.prototype._subscribe.call(this, t);
      return !o.closed && t.next(this._value), o;
    }, r.prototype.getValue = function () {
      var t = this, o = t.hasError, n = t.thrownError, i = t._value;
      if (o) throw n;
      return this._throwIfClosed(), i;
    }, r.prototype.next = function (t) {
      e.prototype.next.call(this, this._value = t);
    }, r;
  }(K);
  var ze = {now: function () {
    return (ze.delegate || Date).now();
  }, delegate: undefined};
  var vt = function (e) {
    z(r, e);
    function r(t, o, n) {
      t === undefined && (t = Infinity), o === undefined && (o = Infinity), n === undefined && (n = ze);
      var i = e.call(this) || this;
      return i._bufferSize = t, i._windowTime = o, i._timestampProvider = n, i._buffer = [], i._infiniteTimeWindow = true, i._infiniteTimeWindow = o === Infinity, i._bufferSize = Math.max(1, t), i._windowTime = Math.max(1, o), i;
    }
    return r.prototype.next = function (t) {
      var o = this, n = o.isStopped, i = o._buffer, f = o._infiniteTimeWindow, u = o._timestampProvider, c = o._windowTime;
      n || (i.push(t), !f && i.push(u.now() + c)), this._trimBuffer(), e.prototype.next.call(this, t);
    }, r.prototype._subscribe = function (t) {
      this._throwIfClosed(), this._trimBuffer();
      for (var o = this._innerSubscribe(t), n = this, i = n._infiniteTimeWindow, f = n._buffer, u = f.slice(), c = 0; c < u.length && !t.closed; c += i ? 1 : 2) t.next(u[c]);
      return this._checkFinalizedStatuses(t), o;
    }, r.prototype._trimBuffer = function () {
      var t = this, o = t._bufferSize, n = t._timestampProvider, i = t._buffer, f = t._infiniteTimeWindow, u = (f ? 1 : 2) * o;
      if (o < Infinity && u < i.length && i.splice(0, i.length - u), !f) {
        for (var c = n.now(), a = 0, s = 1; s < i.length && i[s] <= c; s += 2) a = s;
        a && i.splice(0, a + 1);
      }
    }, r;
  }(K);
  var bt = function (e) {
    z(r, e);
    return r.prototype.schedule = function (t, o) {
      return o === undefined && (o = 0), this;
    }, r;
  }(oe);
  var Ve = {setInterval: function (e, r) {
    for (var t = [], o = 2; o < arguments.length; o++) t[o - 2] = arguments[o];
    var n = Ve.delegate;
    return n != null && n.setInterval ? n.setInterval.apply(n, H([e, r], R(t))) : setInterval.apply(undefined, H([e, r], R(t)));
  }, clearInterval: function (e) {
    var r = Ve.delegate;
    return ((r == null ? undefined : r.clearInterval) || clearInterval)(e);
  }, delegate: undefined};
  var rr = function (e) {
    z(r, e);
    function r(t, o) {
      var n = e.call(this, t, o) || this;
      return n.scheduler = t, n.work = o, n.pending = false, n;
    }
    return r.prototype.schedule = function (t, o) {
      var n;
      if (o === undefined && (o = 0), this.closed) return this;
      this.state = t;
      var i = this.id, f = this.scheduler;
      return i != null && (this.id = this.recycleAsyncId(f, i, o)), this.pending = true, this.delay = o, this.id = (n = this.id) !== null && n !== undefined ? n : this.requestAsyncId(f, this.id, o), this;
    }, r.prototype.requestAsyncId = function (t, o, n) {
      return n === undefined && (n = 0), Ve.setInterval(t.flush.bind(t, this), n);
    }, r.prototype.recycleAsyncId = function (t, o, n) {
      if (n === undefined && (n = 0), n != null && this.delay === n && this.pending === false) return o;
      o != null && Ve.clearInterval(o);
    }, r.prototype.execute = function (t, o) {
      if (this.closed) return new Error("executing a cancelled action");
      this.pending = false;
      var n = this._execute(t, o);
      if (n) return n;
      this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }, r.prototype._execute = function (t, o) {
      var n = false, i;
      try {
        this.work(t);
      } catch (f) {
        n = true, i = f || new Error("Scheduled action threw falsy error");
      }
      if (n) return this.unsubscribe(), i;
    }, r.prototype.unsubscribe = function () {
      if (!this.closed) {
        var t = this, o = t.id, n = t.scheduler, i = n.actions;
        this.work = this.state = this.scheduler = null, this.pending = false, se(i, this), o != null && (this.id = this.recycleAsyncId(n, o, null)), this.delay = null, e.prototype.unsubscribe.call(this);
      }
    }, r;
  }(bt);
  var Hr = function () {
    function e(r, t) {
      t === undefined && (t = e.now), this.schedulerActionCtor = r, this.now = t;
    }
    return e.prototype.schedule = function (r, t, o) {
      return t === undefined && (t = 0), new this.schedulerActionCtor(this, r).schedule(o, t);
    }, e.now = ze.now, e;
  }();
  var tr = function (e) {
    z(r, e);
    function r(t, o) {
      o === undefined && (o = Hr.now);
      var n = e.call(this, t, o) || this;
      return n.actions = [], n._active = false, n;
    }
    return r.prototype.flush = function (t) {
      var o = this.actions;
      if (this._active) {
        o.push(t);
        return;
      }
      var n;
      this._active = true;
      do if (n = t.execute(t.state, t.delay)) break; while (t = o.shift());
      if (this._active = false, n) {
        for (; t = o.shift();) t.unsubscribe();
        throw n;
      }
    }, r;
  }(Hr);
  var Ee = new tr(rr), xt = Ee;
  var yt = function (e) {
    z(r, e);
    function r(t, o) {
      var n = e.call(this, t, o) || this;
      return n.scheduler = t, n.work = o, n;
    }
    return r.prototype.requestAsyncId = function (t, o, n) {
      return n === undefined && (n = 0), n !== null && n > 0 ? e.prototype.requestAsyncId.call(this, t, o, n) : (t.actions.push(this), t._scheduled || (t._scheduled = Pe.requestAnimationFrame(function () {
        return t.flush(undefined);
      })));
    }, r.prototype.recycleAsyncId = function (t, o, n) {
      var i;
      if (n === undefined && (n = 0), n != null ? n > 0 : this.delay > 0) return e.prototype.recycleAsyncId.call(this, t, o, n);
      var f = t.actions;
      o != null && ((i = f[f.length - 1]) === null || i === undefined ? undefined : i.id) !== o && (Pe.cancelAnimationFrame(o), t._scheduled = undefined);
    }, r;
  }(rr);
  var gt = function (e) {
    z(r, e);
    return r.prototype.flush = function (t) {
      this._active = true;
      var o = this._scheduled;
      this._scheduled = undefined;
      var n = this.actions, i;
      t = t || n.shift();
      do if (i = t.execute(t.state, t.delay)) break; while ((t = n[0]) && t.id === o && n.shift());
      if (this._active = false, i) {
        for (; (t = n[0]) && t.id === o && n.shift();) t.unsubscribe();
        throw i;
      }
    }, r;
  }(tr);
  var Fr = new gt(yt);
  var Re = new I(function (e) {
    return e.complete();
  });
  function ve(e) {
    return typeof e[e.length - 1] == "function" ? e.pop() : undefined;
  }
  function ne(e) {
    return e[e.length - 1] && typeof e[e.length - 1].schedule == "function" ? e.pop() : undefined;
  }
  function wt(e, r) {
    return typeof e[e.length - 1] == "number" ? e.pop() : r;
  }
  function fr(e) {
    return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }
  function ko() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
  }
  var cr = ko();
  function ur(e) {
    return it(this, arguments, function () {
      var t, o, n, i;
      return Ye(this, function (f) {
        switch (f.label) {
          case 0:
            t = e.getReader(), f.label = 1;
          case 1:
            f.trys.push([1, , 9, 10]), f.label = 2;
          case 2:
            return [4, ge(t.read())];
          case 3:
            return o = f.sent(), n = o.value, i = o.done, i ? [4, ge(undefined)] : [3, 5];
          case 4:
            return [2, f.sent()];
          case 5:
            return [4, ge(n)];
          case 6:
            return [4, f.sent()];
          case 7:
            return f.sent(), [3, 2];
          case 8:
            return [3, 10];
          case 9:
            return t.releaseLock(), [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function F(e) {
    if (e instanceof I) return e;
    if (e != null) {
      if (typeof e[Le] == "function") return Ho(e);
      if (e && typeof e.length == "number" && typeof e != "function") return Fo(e);
      if (typeof (e == null ? undefined : e.then) == "function") return Wo(e);
      if (Symbol.asyncIterator && typeof (e == null ? undefined : e[Symbol.asyncIterator]) == "function") return St(e);
      if (typeof (e == null ? undefined : e[cr]) == "function") return jo(e);
      if (typeof (e == null ? undefined : e.getReader) == "function") return St(ur(e));
    }
    throw fr(e);
  }
  function Ho(e) {
    return new I(function (r) {
      var t = e[Le]();
      if (typeof t.subscribe == "function") return t.subscribe(r);
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function Fo(e) {
    return new I(function (r) {
      for (var t = 0; t < e.length && !r.closed; t++) r.next(e[t]);
      r.complete();
    });
  }
  function Wo(e) {
    return new I(function (r) {
      e.then(function (t) {
        r.closed || (r.next(t), r.complete());
      }, function (t) {
        return r.error(t);
      }).then(null, Ze);
    });
  }
  function jo(e) {
    return new I(function (r) {
      var t, o;
      try {
        for (var n = X(e), i = n.next(); !i.done; i = n.next()) {
          var f = i.value;
          if (r.next(f), r.closed) return;
        }
      } catch (u) {
        t = {error: u};
      } finally {
        try {
          i && !i.done && (o = n.return) && o.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
      r.complete();
    });
  }
  function St(e) {
    return new I(function (r) {
      zo(e, r).catch(function (t) {
        return r.error(t);
      });
    });
  }
  function zo(e, r) {
    var t, o, n, i;
    return nt(this, undefined, undefined, function () {
      var f, u;
      return Ye(this, function (c) {
        switch (c.label) {
          case 0:
            c.trys.push([0, 5, 6, 11]), t = at(e), c.label = 1;
          case 1:
            return [4, t.next()];
          case 2:
            if (o = c.sent(), !!o.done) return [3, 4];
            if (f = o.value, r.next(f), r.closed) return [2];
            c.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            return u = c.sent(), n = {error: u}, [3, 11];
          case 6:
            return c.trys.push([6, , 9, 10]), o && !o.done && (i = t.return) ? [4, i.call(t)] : [3, 8];
          case 7:
            c.sent(), c.label = 8;
          case 8:
            return [3, 10];
          case 9:
            if (n) throw n.error;
            return [7];
          case 10:
            return [7];
          case 11:
            return r.complete(), [2];
        }
      });
    });
  }
  function J(e, r, t, o, n) {
    o === undefined && (o = 0), n === undefined && (n = false);
    var i = r.schedule(function () {
      t(), n ? e.add(this.schedule(null, o)) : this.unsubscribe();
    }, o);
    if (e.add(i), !n) return i;
  }
  function lr(e, r) {
    return r === undefined && (r = 0), A(function (t, o) {
      t.subscribe(P(o, function (n) {
        return J(o, e, function () {
          return o.next(n);
        }, r);
      }, function () {
        return J(o, e, function () {
          return o.complete();
        }, r);
      }, function (n) {
        return J(o, e, function () {
          return o.error(n);
        }, r);
      }));
    });
  }
  function mr(e, r) {
    return r === undefined && (r = 0), A(function (t, o) {
      o.add(e.schedule(function () {
        return t.subscribe(o);
      }, r));
    });
  }
  function Tt(e, r) {
    return new I(function (t) {
      var o = 0;
      return r.schedule(function () {
        o === e.length ? t.complete() : (t.next(e[o++]), t.closed || this.schedule());
      });
    });
  }
  function _t(e, r) {
    return new I(function (t) {
      var o;
      return J(t, r, function () {
        o = e[cr](), J(t, r, function () {
          var n, i, f;
          try {
            n = o.next(), i = n.value, f = n.done;
          } catch (u) {
            t.error(u);
            return;
          }
          f ? t.complete() : t.next(i);
        }, 0, true);
      }), function () {
        return typeof (o == null ? undefined : o.return) == "function" && o.return();
      };
    });
  }
  function hr(e, r) {
    if (!e) throw new Error("Iterable cannot be null");
    return new I(function (t) {
      J(t, r, function () {
        var o = e[Symbol.asyncIterator]();
        J(t, r, function () {
          o.next().then(function (n) {
            n.done ? t.complete() : t.next(n.value);
          });
        }, 0, true);
      });
    });
  }
  function Mt(e, r) {
    if (e != null) {
      if (typeof e[Le] == "function") return F(e).pipe(mr(r), lr(r));
      if (e && typeof e.length == "number" && typeof e != "function") return Tt(e, r);
      if (typeof (e == null ? undefined : e.then) == "function") return F(e).pipe(mr(r), lr(r));
      if (Symbol.asyncIterator && typeof (e == null ? undefined : e[Symbol.asyncIterator]) == "function") return hr(e, r);
      if (typeof (e == null ? undefined : e[cr]) == "function") return _t(e, r);
      if (typeof (e == null ? undefined : e.getReader) == "function") return hr(ur(e), r);
    }
    throw fr(e);
  }
  function B(e, r) {
    return r ? Mt(e, r) : F(e);
  }
  function ie() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    var t = ne(e);
    return B(e, t);
  }
  function jr(e, r) {
    var t = typeof e == "function" ? e : function () {
      return e;
    };
    return new I(r ? function (n) {
      return r.schedule(o, 0, n);
    } : o);
  }
  function C(e, r) {
    return A(function (t, o) {
      var n = 0;
      t.subscribe(P(o, function (i) {
        o.next(e.call(r, i, n++));
      }));
    });
  }
  var Vo = Array.isArray;
  function $o(e, r) {
    return Vo(r) ? e.apply(undefined, H([], R(r))) : e(r);
  }
  function He(e) {
    return C(function (r) {
      return $o(e, r);
    });
  }
  var No = Array.isArray, qo = Object.getPrototypeOf, Do = Object.prototype, Qo = Object.keys;
  function Ct(e) {
    if (e.length === 1) {
      var r = e[0];
      if (No(r)) return {args: r, keys: null};
      if (r && typeof r == "object" && qo(r) === Do) {
        var t = Qo(r);
        return {args: t.map(function (o) {
          return r[o];
        }), keys: t};
      }
    }
    return {args: e, keys: null};
  }
  function Lt(e, r) {
    return e.reduce(function (t, o, n) {
      return t[o] = r[n], t;
    }, {});
  }
  function Fe() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    var t = ne(e), o = ve(e), n = Ct(e), i = n.args, f = n.keys;
    if (i.length === 0) return B([], t);
    var u = new I(Ur(i, t, f ? function (c) {
      return Lt(f, c);
    } : G));
    return o ? u.pipe(He(o)) : u;
  }
  function Ur(e, r, t) {
    return t === undefined && (t = G), function (o) {
      Pt(r, function () {
        for (var n = e.length, i = new Array(n), f = n, u = n, c = function (s) {
          Pt(r, function () {
            var p = B(e[s], r), d = false;
            p.subscribe(P(o, function (l) {
              i[s] = l, d || (d = true, u--), u || o.next(t(i.slice()));
            }, function () {
              --f || o.complete();
            }));
          }, o);
        }, a = 0; a < n; a++) c(a);
      }, o);
    };
  }
  function Pt(e, r, t) {
    e ? J(t, e, r) : r();
  }
  function Rt(e, r, t, o, n, i, f, u) {
    var c = [], a = 0, s = 0, p = false, d = function () {
      p && !c.length && !a && r.complete();
    }, l = function (h) {
      return a < o ? m(h) : c.push(h);
    }, m = function (h) {
      i && r.next(h), a++;
      var b = false;
      F(t(h, s++)).subscribe(P(r, function (w) {
        n == null || n(w), i ? l(w) : r.next(w);
      }, function () {
        b = true;
      }, undefined, function () {
        if (b) try {
          a--;
          for (var w = function () {
            var E = c.shift();
            f ? J(r, f, function () {
              return m(E);
            }) : m(E);
          }; c.length && a < o;) w();
          d();
        } catch (E) {
          r.error(E);
        }
      }));
    };
    return e.subscribe(P(r, l, function () {
      p = true, d();
    })), function () {
      u == null || u();
    };
  }
  function Oe(e, r, t) {
    return t === undefined && (t = Infinity), typeof r == "function" ? Oe(function (o, n) {
      return C(function (i, f) {
        return r(o, i, n, f);
      })(F(e(o, n)));
    }, t) : (typeof r == "number" && (t = r), A(function (o, n) {
      return Rt(o, n, e, t);
    }));
  }
  function $e() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    return (false && (1 = Infinity), Oe(G, 1))(B(e, ne(e)));
  }
  function Te(e) {
    return new I(function (r) {
      F(e()).subscribe(r);
    });
  }
  var Jo = ["addListener", "removeListener"], Yo = ["addEventListener", "removeEventListener"], Xo = ["on", "off"];
  function $(e, r, t, o) {
    if (typeof t == "function" && (o = t, t = undefined), o) return $(e, r, t).pipe(He(o));
    var n = R(typeof e.addEventListener == "function" && typeof e.removeEventListener == "function" ? Yo.map(function (u) {
      return function (c) {
        return e[u](r, c, t);
      };
    }) : typeof e.addListener == "function" && typeof e.removeListener == "function" ? Jo.map(Ht(e, r)) : typeof e.on == "function" && typeof e.off == "function" ? Xo.map(Ht(e, r)) : [], 2), i = n[0], f = n[1];
    if (!i && (e && typeof e.length == "number" && typeof e != "function")) return Oe(function (u) {
      return $(u, r, t);
    })(F(e));
    if (!i) throw new TypeError("Invalid event target");
    return new I(function (u) {
      var c = function () {
        for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
        return u.next(1 < a.length ? a : a[0]);
      };
      return i(c), function () {
        return f(c);
      };
    });
  }
  function Ht(e, r) {
    return function (t) {
      return function (o) {
        return e[t](r, o);
      };
    };
  }
  function vr(e, r, t) {
    e === undefined && (e = 0), t === undefined && (t = xt);
    var o = -1;
    return r != null && (r && typeof r.schedule == "function" ? t = r : o = r), new I(function (n) {
      var i = e instanceof Date && !isNaN(e) ? +e - t.now() : e;
      i < 0 && (i = 0);
      var f = 0;
      return t.schedule(function () {
        n.closed || (n.next(f++), 0 <= o ? this.schedule(undefined, o) : n.complete());
      }, i);
    });
  }
  function q() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    var t = ne(e), o = wt(e, Infinity), n = e;
    return n.length ? n.length === 1 ? F(n[0]) : (o === undefined && (o = Infinity), Oe(G, o))(B(n, t)) : Re;
  }
  var Ne = new I(ue);
  var en = Array.isArray;
  function br(e) {
    return e.length === 1 && en(e[0]) ? e[0] : e;
  }
  function _e(e, r) {
    return A(function (t, o) {
      var n = 0;
      t.subscribe(P(o, function (i) {
        return e.call(r, i, n++) && o.next(i);
      }));
    });
  }
  function Ft() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    var t = ve(e), o = br(e);
    return o.length ? new I(function (n) {
      var i = o.map(function () {
        return [];
      }), f = o.map(function () {
        return false;
      });
      n.add(function () {
        i = f = null;
      });
      for (var u = function (a) {
        F(o[a]).subscribe(P(n, function (s) {
          if (i[a].push(s), i.every(function (d) {
            return d.length;
          })) {
            var p = i.map(function (d) {
              return d.shift();
            });
            n.next(t ? t.apply(undefined, H([], R(p))) : p), i.some(function (d, l) {
              return !d.length && f[l];
            }) && n.complete();
          }
        }, function () {
          f[a] = true, !i[a].length && n.complete();
        }));
      }, c = 0; !n.closed && c < o.length; c++) u(c);
      return function () {
        i = f = null;
      };
    }) : Re;
  }
  function Wt(e) {
    return A(function (r, t) {
      var o = false, n = null, i = null, f = false, u = function () {
        if (i == null || i.unsubscribe(), i = null, o) {
          o = false;
          var a = n;
          n = null, t.next(a);
        }
        f && t.complete();
      }, c = function () {
        i = null, f && t.complete();
      };
      r.subscribe(P(t, function (a) {
        o = true, n = a, i || F(e(a)).subscribe(i = P(t, u, c));
      }, function () {
        f = true, (!o || !i || i.closed) && t.complete();
      }));
    });
  }
  function zr(e, r) {
    return r === undefined && (r = Ee), Wt(function () {
      return vr(e, r);
    });
  }
  function Vr(e, r) {
    return r === undefined && (r = null), r = r != null ? r : e, A(function (t, o) {
      var n = [], i = 0;
      t.subscribe(P(o, function (f) {
        var u, c, a, s, p = null;
        i++ % r === 0 && n.push([]);
        try {
          for (var d = X(n), l = d.next(); !l.done; l = d.next()) {
            var m = l.value;
            m.push(f), e <= m.length && (p = p != null ? p : [], p.push(m));
          }
        } catch (w) {
          u = {error: w};
        } finally {
          try {
            l && !l.done && (c = d.return) && c.call(d);
          } finally {
            if (u) throw u.error;
          }
        }
        if (p) try {
          for (var h = X(p), b = h.next(); !b.done; b = h.next()) {
            var m = b.value;
            se(n, m), o.next(m);
          }
        } catch (w) {
          a = {error: w};
        } finally {
          try {
            b && !b.done && (s = h.return) && s.call(h);
          } finally {
            if (a) throw a.error;
          }
        }
      }, function () {
        var f, u;
        try {
          for (var c = X(n), a = c.next(); !a.done; a = c.next()) {
            var s = a.value;
            o.next(s);
          }
        } catch (p) {
          f = {error: p};
        } finally {
          try {
            a && !a.done && (u = c.return) && u.call(c);
          } finally {
            if (f) throw f.error;
          }
        }
        o.complete();
      }, undefined, function () {
        n = null;
      }));
    });
  }
  function $r() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    var t = ve(e);
    return t ? lt($r.apply(undefined, H([], R(e))), He(t)) : A(function (o, n) {
      Ur(H([o], R(br(e))))(n);
    });
  }
  function Nr() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    return $r.apply(undefined, H([], R(e)));
  }
  function qr(e, r) {
    return r === undefined && (r = Ee), A(function (t, o) {
      var n = null, i = null, f = null, u = function () {
        if (n) {
          n.unsubscribe(), n = null;
          var a = i;
          i = null, o.next(a);
        }
      };
      function c() {
        var a = f + e, s = r.now();
        if (s < a) {
          n = this.schedule(undefined, a - s), o.add(n);
          return;
        }
        u();
      }
      t.subscribe(P(o, function (a) {
        i = a, f = r.now(), n || (n = r.schedule(c, e), o.add(n));
      }, function () {
        u(), o.complete();
      }, undefined, function () {
        i = n = null;
      }));
    });
  }
  function We(e) {
    return e <= 0 ? function () {
      return Re;
    } : A(function (r, t) {
      var o = 0;
      r.subscribe(P(t, function (n) {
        ++o <= e && (t.next(n), e <= o && t.complete());
      }));
    });
  }
  function jt() {
    return A(function (e, r) {
      e.subscribe(P(r, ue));
    });
  }
  function Ut(e) {
    return C(function () {
      return e;
    });
  }
  function Dr(e, r) {
    return r ? function (t) {
      return $e(r.pipe(We(1), jt()), t.pipe(Dr(e)));
    } : Oe(function (t, o) {
      return F(e(t, o)).pipe(We(1), Ut(t));
    });
  }
  function Qr(e, r) {
    r === undefined && (r = Ee);
    var t = vr(e, r);
    return Dr(function () {
      return t;
    });
  }
  function pe(e, r) {
    return r === undefined && (r = G), e = e != null ? e : rn, A(function (t, o) {
      var n, i = true;
      t.subscribe(P(o, function (f) {
        var u = r(f);
        (i || !e(n, u)) && (i = false, n = u, o.next(f));
      }));
    });
  }
  function xr(e, r) {
    return pe(function (t, o) {
      return r ? r(t[e], o[e]) : t[e] === o[e];
    });
  }
  function le(e) {
    return A(function (r, t) {
      try {
        r.subscribe(t);
      } finally {
        t.add(e);
      }
    });
  }
  function zt(e) {
    e === undefined && (e = {});
    var r = e.connector, t = r === undefined ? function () {
      return new K;
    } : r, o = e.resetOnError, n = o === undefined ? true : o, i = e.resetOnComplete, f = i === undefined ? true : i, u = e.resetOnRefCountZero, c = u === undefined ? true : u;
    return function (a) {
      var s, p, d, l = 0, m = false, h = false, b = function () {
        p == null || p.unsubscribe(), p = undefined;
      }, w = function () {
        b(), s = d = undefined, m = h = false;
      }, E = function () {
        var k = s;
        w(), k == null || k.unsubscribe();
      };
      return A(function (k, v) {
        l++, !h && !m && b();
        var x = d = d != null ? d : t();
        v.add(function () {
          l--, l === 0 && !h && !m && (p = Kr(E, c));
        }), x.subscribe(v), !s && l > 0 && (s = new Se({next: function (S) {
          return x.next(S);
        }, error: function (S) {
          h = true, b(), p = Kr(w, n, S), x.error(S);
        }, complete: function () {
          m = true, b(), p = Kr(w, f), x.complete();
        }}), F(k).subscribe(s));
      })(a);
    };
  }
  function Kr(e, r) {
    for (var t = [], o = 2; o < arguments.length; o++) t[o - 2] = arguments[o];
    if (r === true) {
      e();
      return;
    }
    if (r !== false) {
      var n = new Se({next: function () {
        n.unsubscribe(), e();
      }});
      return F(r.apply(undefined, H([], R(t)))).subscribe(n);
    }
  }
  function me(e, r, t) {
    var o, n, i, f, u = false;
    return e && typeof e == "object" ? (o = e.bufferSize, f = o === undefined ? Infinity : o, n = e.windowTime, r = n === undefined ? Infinity : n, i = e.refCount, u = i === undefined ? false : i, t = e.scheduler) : f = e != null ? e : Infinity, zt({connector: function () {
      return new vt(f, r, t);
    }, resetOnError: true, resetOnComplete: false, resetOnRefCountZero: u});
  }
  function be() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    var t = ne(e);
    return A(function (o, n) {
      (t ? $e(e, o, t) : $e(e, o)).subscribe(n);
    });
  }
  function D(e, r) {
    return A(function (t, o) {
      var n = null, i = 0, f = false;
      t.subscribe(P(o, function (c) {
        n == null || n.unsubscribe();
        var a = 0, s = i++;
        F(e(c, s)).subscribe(n = P(o, function (p) {
          return o.next(r ? r(c, p, s, a++) : p);
        }, function () {
          n = null, f && !n && o.complete();
        }));
      }, function () {
        f = true, f && !n && o.complete();
      }));
    });
  }
  function he(e, r, t) {
    var o = typeof e == "function" || r || t ? {next: e, error: r, complete: t} : e;
    return o ? A(function (n, i) {
      var f;
      (f = o.subscribe) === null || f === undefined || f.call(o);
      var u = true;
      n.subscribe(P(i, function (c) {
        var a;
        (a = o.next) === null || a === undefined || a.call(o, c), i.next(c);
      }, function () {
        var c;
        u = false, (c = o.complete) === null || c === undefined || c.call(o), i.complete();
      }, function (c) {
        var a;
        u = false, (a = o.error) === null || a === undefined || a.call(o, c), i.error(c);
      }, function () {
        var c, a;
        u && ((c = o.unsubscribe) === null || c === undefined || c.call(o)), (a = o.finalize) === null || a === undefined || a.call(o);
      }));
    }) : G;
  }
  function je() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    var t = ve(e);
    return A(function (o, n) {
      for (var i = e.length, f = new Array(i), u = e.map(function () {
        return false;
      }), c = false, a = function (p) {
        F(e[p]).subscribe(P(n, function (d) {
          f[p] = d, !c && !u[p] && (u[p] = true, (c = u.every(G)) && (u = null));
        }, ue));
      }, s = 0; s < i; s++) a(s);
      o.subscribe(P(n, function (p) {
        if (c) {
          var d = H([p], R(f));
          n.next(t ? t.apply(undefined, H([], R(d))) : d);
        }
      }));
    });
  }
  function Vt() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    return A(function (t, o) {
      Ft.apply(undefined, H([t], R(e))).subscribe(o);
    });
  }
  function Jr() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    return Vt.apply(undefined, H([], R(e)));
  }
  function $t(e, r = document) {
    return Array.from(r.querySelectorAll(e));
  }
  function ae(e, r = document) {
    let t = yr(e, r);
    if (typeof t == "undefined") throw new ReferenceError(`Missing element: expected "${e}" to be present`);
    return t;
  }
  function yr(e, r = document) {
    return r.querySelector(e) || undefined;
  }
  function Yr() {
    var e, r, t, o;
    return (o = (t = (r = (e = document.activeElement) == null ? undefined : e.shadowRoot) == null ? undefined : r.activeElement) != null ? t : document.activeElement) != null ? o : undefined;
  }
  var tn = q($(document.body, "focusin"), $(document.body, "focusout")).pipe(qr(1), be(undefined), C(() => Yr() || document.body), me(1));
  function qt(e, r) {
    if (typeof r == "string" || typeof r == "number") e.innerHTML += r.toString(); else if (r instanceof Node) e.appendChild(r); else if (Array.isArray(r)) for (let t of r) qt(e, t);
  }
  function Y(e, r, ...t) {
    let o = document.createElement(e);
    if (r) for (let n of Object.keys(r)) typeof r[n] != "undefined" && (typeof r[n] != "boolean" ? o.setAttribute(n, r[n]) : o.setAttribute(n, ""));
    for (let n of t) qt(o, n);
    return o;
  }
  function Dt(e) {
    if (e > 999) {
      let r = +((e - 950) % 1e3 > 99);
      return `${((e + 0.000001) / 1e3).toFixed(r)}k`;
    } else return e.toString();
  }
  function Qt(e) {
    let r = Y("script", {src: e});
    return Te(() => (document.head.appendChild(r), q($(r, "load"), $(r, "error").pipe(D(() => jr(() => new ReferenceError(`Invalid script: ${e}`))))).pipe(C(() => {}), le(() => document.head.removeChild(r)), We(1))));
  }
  var on = new K, jp = Te(() => typeof ResizeObserver == "undefined" ? Qt("https://unpkg.com/resize-observer-polyfill") : ie(undefined)).pipe(C(() => new ResizeObserver(e => e.forEach(r => on.next(r)))), D(e => q(Ne, ie(e)).pipe(le(() => e.disconnect()))), me(1));
  function Kt(e) {
    return {width: e.offsetWidth, height: e.offsetHeight};
  }
  function Jt(e) {
    return {width: e.scrollWidth, height: e.scrollHeight};
  }
  function Yt(e) {
    return {x: e.scrollLeft, y: e.scrollTop};
  }
  var nn = new K, tl = Te(() => ie(new IntersectionObserver(e => {
    for (let r of e) nn.next(r);
  }, {threshold: 0}))).pipe(D(e => q(Ne, ie(e)).pipe(le(() => e.disconnect()))), me(1));
  function Gt(e, r = 16) {
    return q($(e, "scroll"), $(window, "scroll"), $(window, "resize")).pipe(zr(0, Fr), C(() => Yt(e)), be(Yt(e))).pipe(C(({y: t}) => {
      let o = Kt(e), n = Jt(e);
      return t >= n.height - o.height - r;
    }), pe());
  }
  var ll = {drawer: ae("[data-md-toggle=drawer]"), search: ae("[data-md-toggle=search]")};
  var an = ae("#__config"), qe = JSON.parse(an.textContent);
  qe.base = `${new URL(qe.base, eo())}`;
  function Zt(e, r) {
    return typeof r != "undefined" ? qe.translations[e].replace("#", r.toString()) : qe.translations[e];
  }
  function eo() {
    return new URL(location.href);
  }
  function fn(e, r) {
    return new I(t => {
      let o = new XMLHttpRequest;
      return o.open("GET", `${e}`), o.responseType = "blob", o.addEventListener("load", () => {
        o.status >= 200 && o.status < 300 ? (t.next(o.response), t.complete()) : t.error(new Error(o.statusText));
      }), o.addEventListener("error", () => {
        t.error(new Error("Network error"));
      }), o.addEventListener("abort", () => {
        t.complete();
      }), typeof (r == null ? undefined : r.progress$) != "undefined" && (o.addEventListener("progress", n => {
        var i;
        if (n.lengthComputable) r.progress$.next(n.loaded / n.total * 100); else {
          let f = (i = o.getResponseHeader("Content-Length")) != null ? i : 0;
          r.progress$.next(n.loaded / +f * 100);
        }
      }), r.progress$.next(5)), o.send(), () => o.abort();
    });
  }
  function Xr(e, r = document) {
    return ae(`[data-mdx-component=${e}]`, r);
  }
  function xe(e, r = document) {
    return $t(`[data-mdx-component=${e}]`, r);
  }
  function ro(e) {
    let r = tn.pipe(C(r => e.contains(r)), pe()), t = q($(e, "keyup"), $(e, "focus").pipe(Qr(1))).pipe(C(() => e.value), be(e.value), pe());
    return r.pipe(_e(o => !o), je(t)).subscribe(([, o]) => {
      let n = document.location.pathname;
      typeof ga == "function" && o.length && ga("send", "pageview", `${n}?q=[icon]+${o}`);
    }), Fe([t, r]).pipe(C(([o, n]) => ({ref: e, value: o, focus: n})));
  }
  var Zr = ot(Br());
  var po = ot(Br());
  function mo(e) {
    let r = `@${e.name}`;
    return Y("a", {href: e.url, title: r, class: "mdx-sponsorship__item"}, Y("img", {src: e.image}));
  }
  function cn(e, {index$: r, query$: t, mode$: o}) {
    switch (e.getAttribute("data-mdx-mode")) {
      case "file":
        return Fe([t.pipe(xr("value")), r.pipe(C(({icons: n}) => Object.values(n.data).map(i => i.replace(/\.svg$/, ""))))]).pipe(C(([{value: n}, i]) => (0, Zr.filter)(i, n)), D(n => r.pipe(C(({icons: i}) => ({data: n.map(f => ({shortcode: f, url: [i.base, f, ".svg"].join("")}))})))));
      default:
        return Fe([t.pipe(xr("value")), r.pipe(Nr(o), C(([{icons: n, emojis: i}, f]) => [...["all", "icons"].includes(f) ? Object.keys(n.data) : [], ...["all", "emojis"].includes(f) ? Object.keys(i.data) : []]))]).pipe(C(([{value: n}, i]) => (0, Zr.filter)(i, n)), D(n => r.pipe(C(({icons: i, emojis: f}) => ({data: n.map(u => {
          let c = u in i.data ? i : f;
          return {shortcode: u, url: [c.base, c.data[u]].join("")};
        })})))));
    }
  }
  function vo(e, {index$: r, query$: t, mode$: o}) {
    let n = new K, i = Gt(e).pipe(_e(Boolean)), f = ae(".mdx-iconsearch-result__meta", e);
    n.pipe(je(t)).subscribe(([{data: a}, {value: s}]) => {
      if (s) switch (a.length) {
        case 0:
          f.textContent = "No matches";
          break;
        case 1:
          f.textContent = "1 match";
          break;
        default:
          f.textContent = `${Dt(a.length)} matches`;
      } else f.textContent = "Type to start searching";
    });
    let u = e.getAttribute("data-mdx-mode") === "file", c = ae(":scope > :last-child", e);
    return n.pipe(he(() => c.innerHTML = ""), D(({data: a}) => q(ie(...a.slice(0, 10)), ie(...a.slice(10)).pipe(Vr(10), Jr(i), D(([s]) => s)))), je(t)).subscribe(([a, {value: s}]) => c.appendChild(Y("li", {class: "mdx-iconsearch-result__item"}, Y("span", {class: "twemoji"}, Y("img", {src: a.url})), Y("button", {class: "md-clipboard--inline", title: Zt("clipboard.copy"), "data-clipboard-text": u ? a.shortcode : `:${a.shortcode}:`}, Y("code", null, u ? (0, po.wrap)(a.shortcode, s, {wrap: {tagOpen: "<b>", tagClose: "</b>"}}) : `:${(0, po.wrap)(a.shortcode, s, {wrap: {tagOpen: "<b>", tagClose: "</b>"}})}:`))))), cn(e, {query$: t, index$: r, mode$: o}).pipe(he(a => n.next(a)), le(() => n.complete()), C(a => Je({ref: e}, a)));
  }
  function bo(e) {
    let r = qe, t = fn(new URL("assets/javascripts/iconsearch_index.json", r.base), r).pipe(D(t => t.text()), C(t => JSON.parse(t)), me(1)), o = Xr("iconsearch-query", e), n = Xr("iconsearch-result", e), i = new kr("all"), f = xe("iconsearch-select", e);
    for (let a of f) $(a, "change").pipe(C(s => s.target.value)).subscribe(i);
    let u = ro(o), c = vo(n, {index$: t, query$: u, mode$: i});
    return q(u, c);
  }
  function xo(e) {
    let r = fn("https://3if8u9o552.execute-api.us-east-1.amazonaws.com/_/", r).pipe(D(t => t.text()), C(t => JSON.parse(t)), me(1)), t = xe("sponsorship-count"), o = xe("sponsorship-total");
    r.pipe(D(i => B(t).pipe(he(f => f.innerText = `${i.sponsors.length}`)))).subscribe(() => e.removeAttribute("hidden")), r.pipe(D(i => B(o).pipe(he(f => f.innerText = `$ ${i.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} a month`)))).subscribe();
    let n = yr(":scope > .mdx-sponsorship__list", e);
    return n && t.length && r.subscribe(i => {
      for (let f of i.sponsors) f.type === "public" && n.appendChild(mo(f.user));
      n.appendChild(Y("a", {href: "https://github.com/sponsors/squidfunk?metadata_origin=docs", class: "mdx-sponsorship__item mdx-sponsorship__item--private"}, "+", i.sponsors.filter(({type: f}) => f === "private").length));
    }), r.pipe(C(i => Je({ref: e}, i)));
  }
  function yo() {
    let {origin: e} = new URL(location.href);
    $(document.body, "click").subscribe(r => {
      if (r.target instanceof HTMLElement) {
        let t = r.target.closest("a");
        t && t.origin !== e && ga("send", "event", "outbound", "click", t.href);
      }
    });
  }
  yo();
  var sn = document$.pipe(D(() => q(...xe("iconsearch").map(e => bo(e)), ...xe("sponsorship").map(e => xo(e)))));
  sn.subscribe();
})();
