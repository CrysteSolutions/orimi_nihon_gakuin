/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-05
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  var t, e, i, s, r, n, a, o, l, h, _, u, c, f, p, d;
  _gsScope._gsDefine(
    "TweenMax",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (t, e, i) {
      var s = function (t) {
          var e,
            i = [],
            s = t.length;
          for (e = 0; e !== s; i.push(t[e++]));
          return i;
        },
        r = function (t, e, i) {
          var s,
            r,
            n = t.cycle;
          for (s in n)
            (r = n[s]),
              (t[s] =
                "function" == typeof r ? r.call(e[i], i) : r[i % r.length]);
          delete t.cycle;
        },
        n = function (t, e, s) {
          i.call(this, t, e, s),
            (this._cycle = 0),
            (this._yoyo = !0 === this.vars.yoyo),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._dirty = !0),
            (this.render = n.prototype.render);
        },
        a = 1e-10,
        o = i._internals,
        l = o.isSelector,
        h = o.isArray,
        _ = (n.prototype = i.to({}, 0.1, {})),
        u = [];
      (n.version = "1.18.0"),
        (_.constructor = n),
        (_.kill()._gc = !1),
        (n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf),
        (n.getTweensOf = i.getTweensOf),
        (n.lagSmoothing = i.lagSmoothing),
        (n.ticker = i.ticker),
        (n.render = i.render),
        (_.invalidate = function () {
          return (
            (this._yoyo = !0 === this.vars.yoyo),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            this._uncache(!0),
            i.prototype.invalidate.call(this)
          );
        }),
        (_.updateTo = function (t, e) {
          var s,
            r = this.ratio,
            n = this.vars.immediateRender || t.immediateRender;
          for (s in (e &&
            this._startTime < this._timeline._time &&
            ((this._startTime = this._timeline._time),
            this._uncache(!1),
            this._gc
              ? this._enabled(!0, !1)
              : this._timeline.insert(this, this._startTime - this._delay)),
          t))
            this.vars[s] = t[s];
          if (this._initted || n)
            if (e) (this._initted = !1), n && this.render(0, !0, !0);
            else if (
              (this._gc && this._enabled(!0, !1),
              this._notifyPluginsOfEnabled &&
                this._firstPT &&
                i._onPluginEvent("_onDisable", this),
              this._time / this._duration > 0.998)
            ) {
              var a = this._time;
              this.render(0, !0, !1),
                (this._initted = !1),
                this.render(a, !0, !1);
            } else if (this._time > 0 || n) {
              (this._initted = !1), this._init();
              for (var o, l = 1 / (1 - r), h = this._firstPT; h; )
                (o = h.s + h.c), (h.c *= l), (h.s = o - h.c), (h = h._next);
            }
          return this;
        }),
        (_.render = function (t, e, i) {
          this._initted ||
            (0 === this._duration && this.vars.repeat && this.invalidate());
          var s,
            r,
            n,
            l,
            h,
            _,
            u,
            c,
            f = this._dirty ? this.totalDuration() : this._totalDuration,
            p = this._time,
            d = this._totalTime,
            m = this._cycle,
            g = this._duration,
            v = this._rawPrevTime;
          if (
            (t >= f
              ? ((this._totalTime = f),
                (this._cycle = this._repeat),
                this._yoyo && 0 != (1 & this._cycle)
                  ? ((this._time = 0),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(0)
                      : 0))
                  : ((this._time = g),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(1)
                      : 1)),
                this._reversed ||
                  ((s = !0),
                  (r = "onComplete"),
                  (i = i || this._timeline.autoRemoveChildren)),
                0 === g &&
                  (this._initted || !this.vars.lazy || i) &&
                  (this._startTime === this._timeline._duration && (t = 0),
                  (0 === t || 0 > v || v === a) &&
                    v !== t &&
                    ((i = !0), v > a && (r = "onReverseComplete")),
                  (this._rawPrevTime = c = !e || t || v === t ? t : a)))
              : 1e-7 > t
              ? ((this._totalTime = this._time = this._cycle = 0),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                (0 !== d || (0 === g && v > 0)) &&
                  ((r = "onReverseComplete"), (s = this._reversed)),
                0 > t &&
                  ((this._active = !1),
                  0 === g &&
                    (this._initted || !this.vars.lazy || i) &&
                    (v >= 0 && (i = !0),
                    (this._rawPrevTime = c = !e || t || v === t ? t : a))),
                this._initted || (i = !0))
              : ((this._totalTime = this._time = t),
                0 !== this._repeat &&
                  ((l = g + this._repeatDelay),
                  (this._cycle = (this._totalTime / l) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / l &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * l),
                  this._yoyo &&
                    0 != (1 & this._cycle) &&
                    (this._time = g - this._time),
                  this._time > g
                    ? (this._time = g)
                    : 0 > this._time && (this._time = 0)),
                this._easeType
                  ? ((h = this._time / g),
                    (1 === (_ = this._easeType) || (3 === _ && h >= 0.5)) &&
                      (h = 1 - h),
                    3 === _ && (h *= 2),
                    1 === (u = this._easePower)
                      ? (h *= h)
                      : 2 === u
                      ? (h *= h * h)
                      : 3 === u
                      ? (h *= h * h * h)
                      : 4 === u && (h *= h * h * h * h),
                    (this.ratio =
                      1 === _
                        ? 1 - h
                        : 2 === _
                        ? h
                        : 0.5 > this._time / g
                        ? h / 2
                        : 1 - h / 2))
                  : (this.ratio = this._ease.getRatio(this._time / g))),
            p !== this._time || i || m !== this._cycle)
          ) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (
                !i &&
                this._firstPT &&
                ((!1 !== this.vars.lazy && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = p),
                  (this._totalTime = d),
                  (this._rawPrevTime = v),
                  (this._cycle = m),
                  o.lazyTweens.push(this),
                  void (this._lazy = [t, e])
                );
              this._time && !s
                ? (this.ratio = this._ease.getRatio(this._time / g))
                : s &&
                  this._ease._calcEnd &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              !1 !== this._lazy && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== p &&
                    t >= 0 &&
                    (this._active = !0)),
                0 === d &&
                  (2 === this._initted && t > 0 && this._init(),
                  this._startAt &&
                    (t >= 0
                      ? this._startAt.render(t, e, i)
                      : r || (r = "_dummyGS")),
                  this.vars.onStart &&
                    (0 !== this._totalTime || 0 === g) &&
                    (e || this._callback("onStart"))),
                n = this._firstPT;
              n;

            )
              n.f
                ? n.t[n.p](n.c * this.ratio + n.s)
                : (n.t[n.p] = n.c * this.ratio + n.s),
                (n = n._next);
            this._onUpdate &&
              (0 > t &&
                this._startAt &&
                this._startTime &&
                this._startAt.render(t, e, i),
              e ||
                ((this._totalTime !== d || s) && this._callback("onUpdate"))),
              this._cycle !== m &&
                (e ||
                  this._gc ||
                  (this.vars.onRepeat && this._callback("onRepeat"))),
              r &&
                (!this._gc || i) &&
                (0 > t &&
                  this._startAt &&
                  !this._onUpdate &&
                  this._startTime &&
                  this._startAt.render(t, e, i),
                s &&
                  (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                  (this._active = !1)),
                !e && this.vars[r] && this._callback(r),
                0 === g &&
                  this._rawPrevTime === a &&
                  c !== a &&
                  (this._rawPrevTime = 0));
          } else
            d !== this._totalTime &&
              this._onUpdate &&
              (e || this._callback("onUpdate"));
        }),
        (n.to = function (t, e, i) {
          return new n(t, e, i);
        }),
        (n.from = function (t, e, i) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            new n(t, e, i)
          );
        }),
        (n.fromTo = function (t, e, i, s) {
          return (
            (s.startAt = i),
            (s.immediateRender =
              0 != s.immediateRender && 0 != i.immediateRender),
            new n(t, e, s)
          );
        }),
        (n.staggerTo = n.allTo =
          function (t, e, a, o, _, c, f) {
            o = o || 0;
            var p,
              d,
              m,
              g,
              v = a.delay || 0,
              y = [],
              T = function () {
                a.onComplete &&
                  a.onComplete.apply(a.onCompleteScope || this, arguments),
                  _.apply(f || a.callbackScope || this, c || u);
              },
              x = a.cycle,
              b = a.startAt && a.startAt.cycle;
            for (
              h(t) ||
                ("string" == typeof t && (t = i.selector(t) || t),
                l(t) && (t = s(t))),
                t = t || [],
                0 > o && ((t = s(t)).reverse(), (o *= -1)),
                p = t.length - 1,
                m = 0;
              p >= m;
              m++
            ) {
              for (g in ((d = {}), a)) d[g] = a[g];
              if ((x && r(d, t, m), b)) {
                for (g in ((b = d.startAt = {}), a.startAt))
                  b[g] = a.startAt[g];
                r(d.startAt, t, m);
              }
              (d.delay = v),
                m === p && _ && (d.onComplete = T),
                (y[m] = new n(t[m], e, d)),
                (v += o);
            }
            return y;
          }),
        (n.staggerFrom = n.allFrom =
          function (t, e, i, s, r, a, o) {
            return (
              (i.runBackwards = !0),
              (i.immediateRender = 0 != i.immediateRender),
              n.staggerTo(t, e, i, s, r, a, o)
            );
          }),
        (n.staggerFromTo = n.allFromTo =
          function (t, e, i, s, r, a, o, l) {
            return (
              (s.startAt = i),
              (s.immediateRender =
                0 != s.immediateRender && 0 != i.immediateRender),
              n.staggerTo(t, e, s, r, a, o, l)
            );
          }),
        (n.delayedCall = function (t, e, i, s, r) {
          return new n(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            callbackScope: s,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            immediateRender: !1,
            useFrames: r,
            overwrite: 0,
          });
        }),
        (n.set = function (t, e) {
          return new n(t, 0, e);
        }),
        (n.isTweening = function (t) {
          return i.getTweensOf(t, !0).length > 0;
        });
      var c = function (t, e) {
          for (var s = [], r = 0, n = t._first; n; )
            n instanceof i
              ? (s[r++] = n)
              : (e && (s[r++] = n), (r = (s = s.concat(c(n, e))).length)),
              (n = n._next);
          return s;
        },
        f = (n.getAllTweens = function (e) {
          return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e));
        });
      (n.killAll = function (t, i, s, r) {
        null == i && (i = !0), null == s && (s = !0);
        var n,
          a,
          o,
          l = f(0 != r),
          h = l.length,
          _ = i && s && r;
        for (o = 0; h > o; o++)
          (a = l[o]),
            (_ ||
              a instanceof e ||
              ((n = a.target === a.vars.onComplete) && s) ||
              (i && !n)) &&
              (t
                ? a.totalTime(a._reversed ? 0 : a.totalDuration())
                : a._enabled(!1, !1));
      }),
        (n.killChildTweensOf = function (t, e) {
          if (null != t) {
            var r,
              a,
              _,
              u,
              c,
              f = o.tweenLookup;
            if (
              ("string" == typeof t && (t = i.selector(t) || t),
              l(t) && (t = s(t)),
              h(t))
            )
              for (u = t.length; --u > -1; ) n.killChildTweensOf(t[u], e);
            else {
              for (_ in ((r = []), f))
                for (a = f[_].target.parentNode; a; )
                  a === t && (r = r.concat(f[_].tweens)), (a = a.parentNode);
              for (c = r.length, u = 0; c > u; u++)
                e && r[u].totalTime(r[u].totalDuration()),
                  r[u]._enabled(!1, !1);
            }
          }
        });
      var p = function (t, i, s, r) {
        (i = !1 !== i), (s = !1 !== s);
        for (
          var n, a, o = f((r = !1 !== r)), l = i && s && r, h = o.length;
          --h > -1;

        )
          (a = o[h]),
            (l ||
              a instanceof e ||
              ((n = a.target === a.vars.onComplete) && s) ||
              (i && !n)) &&
              a.paused(t);
      };
      return (
        (n.pauseAll = function (t, e, i) {
          p(!0, t, e, i);
        }),
        (n.resumeAll = function (t, e, i) {
          p(!1, t, e, i);
        }),
        (n.globalTimeScale = function (e) {
          var s = t._rootTimeline,
            r = i.ticker.time;
          return arguments.length
            ? ((e = e || a),
              (s._startTime = r - ((r - s._startTime) * s._timeScale) / e),
              (s = t._rootFramesTimeline),
              (r = i.ticker.frame),
              (s._startTime = r - ((r - s._startTime) * s._timeScale) / e),
              (s._timeScale = t._rootTimeline._timeScale = e),
              e)
            : s._timeScale;
        }),
        (_.progress = function (t) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                  this._cycle * (this._duration + this._repeatDelay),
                !1
              )
            : this._time / this.duration();
        }),
        (_.totalProgress = function (t) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, !1)
            : this._totalTime / this.totalDuration();
        }),
        (_.time = function (t, e) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              t > this._duration && (t = this._duration),
              this._yoyo && 0 != (1 & this._cycle)
                ? (t =
                    this._duration -
                    t +
                    this._cycle * (this._duration + this._repeatDelay))
                : 0 !== this._repeat &&
                  (t += this._cycle * (this._duration + this._repeatDelay)),
              this.totalTime(t, e))
            : this._time;
        }),
        (_.duration = function (e) {
          return arguments.length
            ? t.prototype.duration.call(this, e)
            : this._duration;
        }),
        (_.totalDuration = function (t) {
          return arguments.length
            ? -1 === this._repeat
              ? this
              : this.duration(
                  (t - this._repeat * this._repeatDelay) / (this._repeat + 1)
                )
            : (this._dirty &&
                ((this._totalDuration =
                  -1 === this._repeat
                    ? 999999999999
                    : this._duration * (this._repeat + 1) +
                      this._repeatDelay * this._repeat),
                (this._dirty = !1)),
              this._totalDuration);
        }),
        (_.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t), this._uncache(!0))
            : this._repeat;
        }),
        (_.repeatDelay = function (t) {
          return arguments.length
            ? ((this._repeatDelay = t), this._uncache(!0))
            : this._repeatDelay;
        }),
        (_.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        n
      );
    },
    !0
  ),
    _gsScope._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (t, e, i) {
        var s = function (t) {
            e.call(this, t),
              (this._labels = {}),
              (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
              (this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
              (this._sortChildren = !0),
              (this._onUpdate = this.vars.onUpdate);
            var i,
              s,
              r = this.vars;
            for (s in r)
              (i = r[s]),
                l(i) &&
                  -1 !== i.join("").indexOf("{self}") &&
                  (r[s] = this._swapSelfInParams(i));
            l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
          },
          r = 1e-10,
          n = i._internals,
          a = (s._internals = {}),
          o = n.isSelector,
          l = n.isArray,
          h = n.lazyTweens,
          _ = n.lazyRender,
          u = _gsScope._gsDefine.globals,
          c = function (t) {
            var e,
              i = {};
            for (e in t) i[e] = t[e];
            return i;
          },
          f = function (t, e, i) {
            var s,
              r,
              n = t.cycle;
            for (s in n)
              (r = n[s]),
                (t[s] =
                  "function" == typeof r ? r.call(e[i], i) : r[i % r.length]);
            delete t.cycle;
          },
          p = (a.pauseCallback = function () {}),
          d = function (t) {
            var e,
              i = [],
              s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i;
          },
          m = (s.prototype = new e());
        return (
          (s.version = "1.18.0"),
          (m.constructor = s),
          (m.kill()._gc = m._forcingPlayhead = m._hasPause = !1),
          (m.to = function (t, e, s, r) {
            var n = (s.repeat && u.TweenMax) || i;
            return e ? this.add(new n(t, e, s), r) : this.set(t, s, r);
          }),
          (m.from = function (t, e, s, r) {
            return this.add(((s.repeat && u.TweenMax) || i).from(t, e, s), r);
          }),
          (m.fromTo = function (t, e, s, r, n) {
            var a = (r.repeat && u.TweenMax) || i;
            return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n);
          }),
          (m.staggerTo = function (t, e, r, n, a, l, h, _) {
            var u,
              p,
              m = new s({
                onComplete: l,
                onCompleteParams: h,
                callbackScope: _,
                smoothChildTiming: this.smoothChildTiming,
              }),
              g = r.cycle;
            for (
              "string" == typeof t && (t = i.selector(t) || t),
                o((t = t || [])) && (t = d(t)),
                0 > (n = n || 0) && ((t = d(t)).reverse(), (n *= -1)),
                p = 0;
              t.length > p;
              p++
            )
              (u = c(r)).startAt &&
                ((u.startAt = c(u.startAt)),
                u.startAt.cycle && f(u.startAt, t, p)),
                g && f(u, t, p),
                m.to(t[p], e, u, p * n);
            return this.add(m, a);
          }),
          (m.staggerFrom = function (t, e, i, s, r, n, a, o) {
            return (
              (i.immediateRender = 0 != i.immediateRender),
              (i.runBackwards = !0),
              this.staggerTo(t, e, i, s, r, n, a, o)
            );
          }),
          (m.staggerFromTo = function (t, e, i, s, r, n, a, o, l) {
            return (
              (s.startAt = i),
              (s.immediateRender =
                0 != s.immediateRender && 0 != i.immediateRender),
              this.staggerTo(t, e, s, r, n, a, o, l)
            );
          }),
          (m.call = function (t, e, s, r) {
            return this.add(i.delayedCall(0, t, e, s), r);
          }),
          (m.set = function (t, e, s) {
            return (
              (s = this._parseTimeOrLabel(s, 0, !0)),
              null == e.immediateRender &&
                (e.immediateRender = s === this._time && !this._paused),
              this.add(new i(t, 0, e), s)
            );
          }),
          (s.exportRoot = function (t, e) {
            null == (t = t || {}).smoothChildTiming &&
              (t.smoothChildTiming = !0);
            var r,
              n,
              a = new s(t),
              o = a._timeline;
            for (
              null == e && (e = !0),
                o._remove(a, !0),
                a._startTime = 0,
                a._rawPrevTime = a._time = a._totalTime = o._time,
                r = o._first;
              r;

            )
              (n = r._next),
                (e && r instanceof i && r.target === r.vars.onComplete) ||
                  a.add(r, r._startTime - r._delay),
                (r = n);
            return o.add(a, 0), a;
          }),
          (m.add = function (r, n, a, o) {
            var h, _, u, c, f, p;
            if (
              ("number" != typeof n &&
                (n = this._parseTimeOrLabel(n, 0, !0, r)),
              !(r instanceof t))
            ) {
              if (r instanceof Array || (r && r.push && l(r))) {
                for (
                  a = a || "normal", o = o || 0, h = n, _ = r.length, u = 0;
                  _ > u;
                  u++
                )
                  l((c = r[u])) && (c = new s({ tweens: c })),
                    this.add(c, h),
                    "string" != typeof c &&
                      "function" != typeof c &&
                      ("sequence" === a
                        ? (h = c._startTime + c.totalDuration() / c._timeScale)
                        : "start" === a && (c._startTime -= c.delay())),
                    (h += o);
                return this._uncache(!0);
              }
              if ("string" == typeof r) return this.addLabel(r, n);
              if ("function" != typeof r)
                throw (
                  "Cannot add " +
                  r +
                  " into the timeline; it is not a tween, timeline, function, or string."
                );
              r = i.delayedCall(0, r);
            }
            if (
              (e.prototype.add.call(this, r, n),
              (this._gc || this._time === this._duration) &&
                !this._paused &&
                this._duration < this.duration())
            )
              for (p = (f = this).rawTime() > r._startTime; f._timeline; )
                p && f._timeline.smoothChildTiming
                  ? f.totalTime(f._totalTime, !0)
                  : f._gc && f._enabled(!0, !1),
                  (f = f._timeline);
            return this;
          }),
          (m.remove = function (e) {
            if (e instanceof t) {
              this._remove(e, !1);
              var i = (e._timeline = e.vars.useFrames
                ? t._rootFramesTimeline
                : t._rootTimeline);
              return (
                (e._startTime =
                  (e._paused ? e._pauseTime : i._time) -
                  (e._reversed
                    ? e.totalDuration() - e._totalTime
                    : e._totalTime) /
                    e._timeScale),
                this
              );
            }
            if (e instanceof Array || (e && e.push && l(e))) {
              for (var s = e.length; --s > -1; ) this.remove(e[s]);
              return this;
            }
            return "string" == typeof e
              ? this.removeLabel(e)
              : this.kill(null, e);
          }),
          (m._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);
            var s = this._last;
            return (
              s
                ? this._time > s._startTime + s._totalDuration / s._timeScale &&
                  ((this._time = this.duration()),
                  (this._totalTime = this._totalDuration))
                : (this._time =
                    this._totalTime =
                    this._duration =
                    this._totalDuration =
                      0),
              this
            );
          }),
          (m.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
          }),
          (m.insert = m.insertMultiple =
            function (t, e, i, s) {
              return this.add(t, e || 0, i, s);
            }),
          (m.appendMultiple = function (t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s);
          }),
          (m.addLabel = function (t, e) {
            return (this._labels[t] = this._parseTimeOrLabel(e)), this;
          }),
          (m.addPause = function (t, e, s, r) {
            var n = i.delayedCall(0, p, s, r || this);
            return (
              (n.vars.onComplete = n.vars.onReverseComplete = e),
              (n.data = "isPause"),
              (this._hasPause = !0),
              this.add(n, t)
            );
          }),
          (m.removeLabel = function (t) {
            return delete this._labels[t], this;
          }),
          (m.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1;
          }),
          (m._parseTimeOrLabel = function (e, i, s, r) {
            var n;
            if (r instanceof t && r.timeline === this) this.remove(r);
            else if (r && (r instanceof Array || (r.push && l(r))))
              for (n = r.length; --n > -1; )
                r[n] instanceof t &&
                  r[n].timeline === this &&
                  this.remove(r[n]);
            if ("string" == typeof i)
              return this._parseTimeOrLabel(
                i,
                s && "number" == typeof e && null == this._labels[i]
                  ? e - this.duration()
                  : 0,
                s
              );
            if (
              ((i = i || 0),
              "string" != typeof e || (!isNaN(e) && null == this._labels[e]))
            )
              null == e && (e = this.duration());
            else {
              if (-1 === (n = e.indexOf("=")))
                return null == this._labels[e]
                  ? s
                    ? (this._labels[e] = this.duration() + i)
                    : i
                  : this._labels[e] + i;
              (i =
                parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1))),
                (e =
                  n > 1
                    ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s)
                    : this.duration());
            }
            return Number(e) + i;
          }),
          (m.seek = function (t, e) {
            return this.totalTime(
              "number" == typeof t ? t : this._parseTimeOrLabel(t),
              !1 !== e
            );
          }),
          (m.stop = function () {
            return this.paused(!0);
          }),
          (m.gotoAndPlay = function (t, e) {
            return this.play(t, e);
          }),
          (m.gotoAndStop = function (t, e) {
            return this.pause(t, e);
          }),
          (m.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s,
              n,
              a,
              o,
              l,
              u,
              c = this._dirty ? this.totalDuration() : this._totalDuration,
              f = this._time,
              p = this._startTime,
              d = this._timeScale,
              m = this._paused;
            if (t >= c)
              (this._totalTime = this._time = c),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((n = !0),
                  (o = "onComplete"),
                  (l = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    (0 === t ||
                      0 > this._rawPrevTime ||
                      this._rawPrevTime === r) &&
                    this._rawPrevTime !== t &&
                    this._first &&
                    ((l = !0),
                    this._rawPrevTime > r && (o = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t ? t : r),
                (t = c + 1e-4);
            else if (1e-7 > t)
              if (
                ((this._totalTime = this._time = 0),
                (0 !== f ||
                  (0 === this._duration &&
                    this._rawPrevTime !== r &&
                    (this._rawPrevTime > 0 ||
                      (0 > t && this._rawPrevTime >= 0)))) &&
                  ((o = "onReverseComplete"), (n = this._reversed)),
                0 > t)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((l = n = !0), (o = "onReverseComplete"))
                    : this._rawPrevTime >= 0 && this._first && (l = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    this._duration || !e || t || this._rawPrevTime === t
                      ? t
                      : r),
                  0 === t && n)
                )
                  for (s = this._first; s && 0 === s._startTime; )
                    s._duration || (n = !1), (s = s._next);
                (t = 0), this._initted || (l = !0);
              }
            else {
              if (this._hasPause && !this._forcingPlayhead && !e) {
                if (t >= f)
                  for (s = this._first; s && t >= s._startTime && !u; )
                    s._duration ||
                      "isPause" !== s.data ||
                      s.ratio ||
                      (0 === s._startTime && 0 === this._rawPrevTime) ||
                      (u = s),
                      (s = s._next);
                else
                  for (s = this._last; s && s._startTime >= t && !u; )
                    s._duration ||
                      ("isPause" === s.data && s._rawPrevTime > 0 && (u = s)),
                      (s = s._prev);
                u &&
                  ((this._time = t = u._startTime),
                  (this._totalTime =
                    t +
                    this._cycle * (this._totalDuration + this._repeatDelay)));
              }
              this._totalTime = this._time = this._rawPrevTime = t;
            }
            if ((this._time !== f && this._first) || i || l || u) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._time !== f &&
                    t > 0 &&
                    (this._active = !0)),
                0 === f &&
                  this.vars.onStart &&
                  0 !== this._time &&
                  (e || this._callback("onStart")),
                this._time >= f)
              )
                for (
                  s = this._first;
                  s && ((a = s._next), !this._paused || m);

                )
                  (s._active ||
                    (s._startTime <= this._time && !s._paused && !s._gc)) &&
                    (u === s && this.pause(),
                    s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          i
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, i)),
                    (s = a);
              else
                for (
                  s = this._last;
                  s && ((a = s._prev), !this._paused || m);

                ) {
                  if (
                    s._active ||
                    (f >= s._startTime && !s._paused && !s._gc)
                  ) {
                    if (u === s) {
                      for (u = s._prev; u && u.endTime() > this._time; )
                        u.render(
                          u._reversed
                            ? u.totalDuration() -
                                (t - u._startTime) * u._timeScale
                            : (t - u._startTime) * u._timeScale,
                          e,
                          i
                        ),
                          (u = u._prev);
                      (u = null), this.pause();
                    }
                    s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          i
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, i);
                  }
                  s = a;
                }
              this._onUpdate &&
                (e || (h.length && _(), this._callback("onUpdate"))),
                o &&
                  (this._gc ||
                    ((p === this._startTime || d !== this._timeScale) &&
                      (0 === this._time || c >= this.totalDuration()) &&
                      (n &&
                        (h.length && _(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[o] && this._callback(o))));
            }
          }),
          (m._hasPausedChild = function () {
            for (var t = this._first; t; ) {
              if (t._paused || (t instanceof s && t._hasPausedChild()))
                return !0;
              t = t._next;
            }
            return !1;
          }),
          (m.getChildren = function (t, e, s, r) {
            r = r || -9999999999;
            for (var n = [], a = this._first, o = 0; a; )
              r > a._startTime ||
                (a instanceof i
                  ? !1 !== e && (n[o++] = a)
                  : (!1 !== s && (n[o++] = a),
                    !1 !== t &&
                      (o = (n = n.concat(a.getChildren(!0, e, s))).length))),
                (a = a._next);
            return n;
          }),
          (m.getTweensOf = function (t, e) {
            var s,
              r,
              n = this._gc,
              a = [],
              o = 0;
            for (
              n && this._enabled(!0, !0), r = (s = i.getTweensOf(t)).length;
              --r > -1;

            )
              (s[r].timeline === this || (e && this._contains(s[r]))) &&
                (a[o++] = s[r]);
            return n && this._enabled(!1, !0), a;
          }),
          (m.recent = function () {
            return this._recent;
          }),
          (m._contains = function (t) {
            for (var e = t.timeline; e; ) {
              if (e === this) return !0;
              e = e.timeline;
            }
            return !1;
          }),
          (m.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var s, r = this._first, n = this._labels; r; )
              r._startTime >= i && (r._startTime += t), (r = r._next);
            if (e) for (s in n) n[s] >= i && (n[s] += t);
            return this._uncache(!0);
          }),
          (m._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (
              var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
                s = i.length,
                r = !1;
              --s > -1;

            )
              i[s]._kill(t, e) && (r = !0);
            return r;
          }),
          (m.clear = function (t) {
            var e = this.getChildren(!1, !0, !0),
              i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
              e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}), this._uncache(!0);
          }),
          (m.invalidate = function () {
            for (var e = this._first; e; ) e.invalidate(), (e = e._next);
            return t.prototype.invalidate.call(this);
          }),
          (m._enabled = function (t, i) {
            if (t === this._gc)
              for (var s = this._first; s; ) s._enabled(t, !0), (s = s._next);
            return e.prototype._enabled.call(this, t, i);
          }),
          (m.totalTime = function () {
            this._forcingPlayhead = !0;
            var e = t.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), e;
          }),
          (m.duration = function (t) {
            return arguments.length
              ? (0 !== this.duration() &&
                  0 !== t &&
                  this.timeScale(this._duration / t),
                this)
              : (this._dirty && this.totalDuration(), this._duration);
          }),
          (m.totalDuration = function (t) {
            if (!arguments.length) {
              if (this._dirty) {
                for (var e, i, s = 0, r = this._last, n = 999999999999; r; )
                  (e = r._prev),
                    r._dirty && r.totalDuration(),
                    r._startTime > n && this._sortChildren && !r._paused
                      ? this.add(r, r._startTime - r._delay)
                      : (n = r._startTime),
                    0 > r._startTime &&
                      !r._paused &&
                      ((s -= r._startTime),
                      this._timeline.smoothChildTiming &&
                        (this._startTime += r._startTime / this._timeScale),
                      this.shiftChildren(-r._startTime, !1, -9999999999),
                      (n = 0)),
                    (i = r._startTime + r._totalDuration / r._timeScale) > s &&
                      (s = i),
                    (r = e);
                (this._duration = this._totalDuration = s), (this._dirty = !1);
              }
              return this._totalDuration;
            }
            return (
              0 !== this.totalDuration() &&
                0 !== t &&
                this.timeScale(this._totalDuration / t),
              this
            );
          }),
          (m.paused = function (e) {
            if (!e)
              for (var i = this._first, s = this._time; i; )
                i._startTime === s &&
                  "isPause" === i.data &&
                  (i._rawPrevTime = 0),
                  (i = i._next);
            return t.prototype.paused.apply(this, arguments);
          }),
          (m.usesFrames = function () {
            for (var e = this._timeline; e._timeline; ) e = e._timeline;
            return e === t._rootFramesTimeline;
          }),
          (m.rawTime = function () {
            return this._paused
              ? this._totalTime
              : (this._timeline.rawTime() - this._startTime) * this._timeScale;
          }),
          s
        );
      },
      !0
    ),
    _gsScope._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function (t, e, i) {
        var s = function (e) {
            t.call(this, e),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = !0 === this.vars.yoyo),
              (this._dirty = !0);
          },
          r = 1e-10,
          n = e._internals,
          a = n.lazyTweens,
          o = n.lazyRender,
          l = new i(null, null, 1, 0),
          h = (s.prototype = new t());
        return (
          (h.constructor = s),
          (h.kill()._gc = !1),
          (s.version = "1.18.0"),
          (h.invalidate = function () {
            return (
              (this._yoyo = !0 === this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              t.prototype.invalidate.call(this)
            );
          }),
          (h.addCallback = function (t, i, s, r) {
            return this.add(e.delayedCall(0, t, s, r), i);
          }),
          (h.removeCallback = function (t, e) {
            if (t)
              if (null == e) this._kill(null, t);
              else
                for (
                  var i = this.getTweensOf(t, !1),
                    s = i.length,
                    r = this._parseTimeOrLabel(e);
                  --s > -1;

                )
                  i[s]._startTime === r && i[s]._enabled(!1, !1);
            return this;
          }),
          (h.removePause = function (e) {
            return this.removeCallback(t._internals.pauseCallback, e);
          }),
          (h.tweenTo = function (t, i) {
            i = i || {};
            var s,
              r,
              n,
              a = {
                ease: l,
                useFrames: this.usesFrames(),
                immediateRender: !1,
              };
            for (r in i) a[r] = i[r];
            return (
              (a.time = this._parseTimeOrLabel(t)),
              (s =
                Math.abs(Number(a.time) - this._time) / this._timeScale ||
                0.001),
              (n = new e(this, s, a)),
              (a.onStart = function () {
                n.target.paused(!0),
                  n.vars.time !== n.target.time() &&
                    s === n.duration() &&
                    n.duration(
                      Math.abs(n.vars.time - n.target.time()) /
                        n.target._timeScale
                    ),
                  i.onStart && n._callback("onStart");
              }),
              n
            );
          }),
          (h.tweenFromTo = function (t, e, i) {
            (i = i || {}),
              (t = this._parseTimeOrLabel(t)),
              (i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this,
              }),
              (i.immediateRender = !1 !== i.immediateRender);
            var s = this.tweenTo(e, i);
            return s.duration(
              Math.abs(s.vars.time - t) / this._timeScale || 0.001
            );
          }),
          (h.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s,
              n,
              l,
              h,
              _,
              u,
              c,
              f = this._dirty ? this.totalDuration() : this._totalDuration,
              p = this._duration,
              d = this._time,
              m = this._totalTime,
              g = this._startTime,
              v = this._timeScale,
              y = this._rawPrevTime,
              T = this._paused,
              x = this._cycle;
            if (t >= f)
              this._locked ||
                ((this._totalTime = f), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((n = !0),
                  (h = "onComplete"),
                  (_ = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    (0 === t || 0 > y || y === r) &&
                    y !== t &&
                    this._first &&
                    ((_ = !0), y > r && (h = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t ? t : r),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (this._time = t = 0)
                  : ((this._time = p), (t = p + 1e-4));
            else if (1e-7 > t)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                (this._time = 0),
                (0 !== d ||
                  (0 === p &&
                    y !== r &&
                    (y > 0 || (0 > t && y >= 0)) &&
                    !this._locked)) &&
                  ((h = "onReverseComplete"), (n = this._reversed)),
                0 > t)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((_ = n = !0), (h = "onReverseComplete"))
                    : y >= 0 && this._first && (_ = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    p || !e || t || this._rawPrevTime === t ? t : r),
                  0 === t && n)
                )
                  for (s = this._first; s && 0 === s._startTime; )
                    s._duration || (n = !1), (s = s._next);
                (t = 0), this._initted || (_ = !0);
              }
            else if (
              (0 === p && 0 > y && (_ = !0),
              (this._time = this._rawPrevTime = t),
              this._locked ||
                ((this._totalTime = t),
                0 !== this._repeat &&
                  ((u = p + this._repeatDelay),
                  (this._cycle = (this._totalTime / u) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / u &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * u),
                  this._yoyo &&
                    0 != (1 & this._cycle) &&
                    (this._time = p - this._time),
                  this._time > p
                    ? ((this._time = p), (t = p + 1e-4))
                    : 0 > this._time
                    ? (this._time = t = 0)
                    : (t = this._time))),
              this._hasPause && !this._forcingPlayhead && !e)
            ) {
              if ((t = this._time) >= d)
                for (s = this._first; s && t >= s._startTime && !c; )
                  s._duration ||
                    "isPause" !== s.data ||
                    s.ratio ||
                    (0 === s._startTime && 0 === this._rawPrevTime) ||
                    (c = s),
                    (s = s._next);
              else
                for (s = this._last; s && s._startTime >= t && !c; )
                  s._duration ||
                    ("isPause" === s.data && s._rawPrevTime > 0 && (c = s)),
                    (s = s._prev);
              c &&
                ((this._time = t = c._startTime),
                (this._totalTime =
                  t + this._cycle * (this._totalDuration + this._repeatDelay)));
            }
            if (this._cycle !== x && !this._locked) {
              var b = this._yoyo && 0 != (1 & x),
                w = b === (this._yoyo && 0 != (1 & this._cycle)),
                P = this._totalTime,
                O = this._cycle,
                S = this._rawPrevTime,
                k = this._time;
              if (
                ((this._totalTime = x * p),
                x > this._cycle ? (b = !b) : (this._totalTime += p),
                (this._time = d),
                (this._rawPrevTime = 0 === p ? y - 1e-4 : y),
                (this._cycle = x),
                (this._locked = !0),
                (d = b ? 0 : p),
                this.render(d, e, 0 === p),
                e ||
                  this._gc ||
                  (this.vars.onRepeat && this._callback("onRepeat")),
                w && ((d = b ? p + 1e-4 : -1e-4), this.render(d, !0, !1)),
                (this._locked = !1),
                this._paused && !T)
              )
                return;
              (this._time = k),
                (this._totalTime = P),
                (this._cycle = O),
                (this._rawPrevTime = S);
            }
            if ((this._time !== d && this._first) || i || _ || c) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._totalTime !== m &&
                    t > 0 &&
                    (this._active = !0)),
                0 === m &&
                  this.vars.onStart &&
                  0 !== this._totalTime &&
                  (e || this._callback("onStart")),
                this._time >= d)
              )
                for (
                  s = this._first;
                  s && ((l = s._next), !this._paused || T);

                )
                  (s._active ||
                    (s._startTime <= this._time && !s._paused && !s._gc)) &&
                    (c === s && this.pause(),
                    s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          i
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, i)),
                    (s = l);
              else
                for (
                  s = this._last;
                  s && ((l = s._prev), !this._paused || T);

                ) {
                  if (
                    s._active ||
                    (d >= s._startTime && !s._paused && !s._gc)
                  ) {
                    if (c === s) {
                      for (c = s._prev; c && c.endTime() > this._time; )
                        c.render(
                          c._reversed
                            ? c.totalDuration() -
                                (t - c._startTime) * c._timeScale
                            : (t - c._startTime) * c._timeScale,
                          e,
                          i
                        ),
                          (c = c._prev);
                      (c = null), this.pause();
                    }
                    s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          i
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, i);
                  }
                  s = l;
                }
              this._onUpdate &&
                (e || (a.length && o(), this._callback("onUpdate"))),
                h &&
                  (this._locked ||
                    this._gc ||
                    ((g === this._startTime || v !== this._timeScale) &&
                      (0 === this._time || f >= this.totalDuration()) &&
                      (n &&
                        (a.length && o(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[h] && this._callback(h))));
            } else
              m !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback("onUpdate"));
          }),
          (h.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var s,
              r,
              n = [],
              a = this.getChildren(t, e, i),
              o = 0,
              l = a.length;
            for (s = 0; l > s; s++) (r = a[s]).isActive() && (n[o++] = r);
            return n;
          }),
          (h.getLabelAfter = function (t) {
            t || (0 !== t && (t = this._time));
            var e,
              i = this.getLabelsArray(),
              s = i.length;
            for (e = 0; s > e; e++) if (i[e].time > t) return i[e].name;
            return null;
          }),
          (h.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
              if (t > e[i].time) return e[i].name;
            return null;
          }),
          (h.getLabelsArray = function () {
            var t,
              e = [],
              i = 0;
            for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
            return (
              e.sort(function (t, e) {
                return t.time - e.time;
              }),
              e
            );
          }),
          (h.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration();
          }),
          (h.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration();
          }),
          (h.totalDuration = function (e) {
            return arguments.length
              ? -1 === this._repeat
                ? this
                : this.duration(
                    (e - this._repeat * this._repeatDelay) / (this._repeat + 1)
                  )
              : (this._dirty &&
                  (t.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (h.time = function (t, e) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (t =
                      this._duration -
                      t +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e))
              : this._time;
          }),
          (h.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (h.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (h.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (h.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          s
        );
      },
      !0
    ),
    (t = 180 / Math.PI),
    (e = []),
    (i = []),
    (s = []),
    (r = {}),
    (n = _gsScope._gsDefine.globals),
    (a = function (t, e, i, s) {
      (this.a = t),
        (this.b = e),
        (this.c = i),
        (this.d = s),
        (this.da = s - t),
        (this.ca = i - t),
        (this.ba = e - t);
    }),
    (o = function (t, e, i, s) {
      var r = { a: t },
        n = {},
        a = {},
        o = { c: s },
        l = (t + e) / 2,
        h = (e + i) / 2,
        _ = (i + s) / 2,
        u = (l + h) / 2,
        c = (h + _) / 2,
        f = (c - u) / 8;
      return (
        (r.b = l + (t - l) / 4),
        (n.b = u + f),
        (r.c = n.a = (r.b + n.b) / 2),
        (n.c = a.a = (u + c) / 2),
        (a.b = c - f),
        (o.b = _ + (s - _) / 4),
        (a.c = o.a = (a.b + o.b) / 2),
        [r, n, a, o]
      );
    }),
    (l = function (t, r, n, a, l) {
      var h,
        _,
        u,
        c,
        f,
        p,
        d,
        m,
        g,
        v,
        y,
        T,
        x,
        b = t.length - 1,
        w = 0,
        P = t[0].a;
      for (h = 0; b > h; h++)
        (_ = (f = t[w]).a),
          (u = f.d),
          (c = t[w + 1].d),
          l
            ? ((y = e[h]),
              (x = (0.25 * ((T = i[h]) + y) * r) / (a ? 0.5 : s[h] || 0.5)),
              (m =
                u -
                ((p = u - (u - _) * (a ? 0.5 * r : 0 !== y ? x / y : 0)) +
                  ((((d = u + (c - u) * (a ? 0.5 * r : 0 !== T ? x / T : 0)) -
                    p) *
                    ((3 * y) / (y + T) + 0.5)) /
                    4 || 0))))
            : (m =
                u -
                ((p = u - 0.5 * (u - _) * r) + (d = u + 0.5 * (c - u) * r)) /
                  2),
          (p += m),
          (d += m),
          (f.c = g = p),
          (f.b = 0 !== h ? P : (P = f.a + 0.6 * (f.c - f.a))),
          (f.da = u - _),
          (f.ca = g - _),
          (f.ba = P - _),
          n
            ? ((v = o(_, P, g, u)),
              t.splice(w, 1, v[0], v[1], v[2], v[3]),
              (w += 4))
            : w++,
          (P = d);
      ((f = t[w]).b = P),
        (f.c = P + 0.4 * (f.d - P)),
        (f.da = f.d - f.a),
        (f.ca = f.c - f.a),
        (f.ba = P - f.a),
        n &&
          ((v = o(f.a, P, f.c, f.d)), t.splice(w, 1, v[0], v[1], v[2], v[3]));
    }),
    (h = function (t, s, r, n) {
      var o,
        l,
        h,
        _,
        u,
        c,
        f = [];
      if (n)
        for (l = (t = [n].concat(t)).length; --l > -1; )
          "string" == typeof (c = t[l][s]) &&
            "=" === c.charAt(1) &&
            (t[l][s] = n[s] + Number(c.charAt(0) + c.substr(2)));
      if (0 > (o = t.length - 2))
        return (f[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s])), f;
      for (l = 0; o > l; l++)
        (h = t[l][s]),
          (_ = t[l + 1][s]),
          (f[l] = new a(h, 0, 0, _)),
          r &&
            ((u = t[l + 2][s]),
            (e[l] = (e[l] || 0) + (_ - h) * (_ - h)),
            (i[l] = (i[l] || 0) + (u - _) * (u - _)));
      return (f[l] = new a(t[l][s], 0, 0, t[l + 1][s])), f;
    }),
    (_ = function (t, n, a, o, _, u) {
      var c,
        f,
        p,
        d,
        m,
        g,
        v,
        y,
        T = {},
        x = [],
        b = u || t[0];
      for (f in ((_ =
        "string" == typeof _
          ? "," + _ + ","
          : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
      null == n && (n = 1),
      t[0]))
        x.push(f);
      if (t.length > 1) {
        for (y = t[t.length - 1], v = !0, c = x.length; --c > -1; )
          if (((f = x[c]), Math.abs(b[f] - y[f]) > 0.05)) {
            v = !1;
            break;
          }
        v &&
          ((t = t.concat()),
          u && t.unshift(u),
          t.push(t[1]),
          (u = t[t.length - 3]));
      }
      for (e.length = i.length = s.length = 0, c = x.length; --c > -1; )
        (f = x[c]),
          (r[f] = -1 !== _.indexOf("," + f + ",")),
          (T[f] = h(t, f, r[f], u));
      for (c = e.length; --c > -1; )
        (e[c] = Math.sqrt(e[c])), (i[c] = Math.sqrt(i[c]));
      if (!o) {
        for (c = x.length; --c > -1; )
          if (r[f])
            for (g = (p = T[x[c]]).length - 1, d = 0; g > d; d++)
              (m = p[d + 1].da / i[d] + p[d].da / e[d]),
                (s[d] = (s[d] || 0) + m * m);
        for (c = s.length; --c > -1; ) s[c] = Math.sqrt(s[c]);
      }
      for (c = x.length, d = a ? 4 : 1; --c > -1; )
        (p = T[(f = x[c])]),
          l(p, n, a, o, r[f]),
          v && (p.splice(0, d), p.splice(p.length - d, d));
      return T;
    }),
    (u = function (t, e, i) {
      var s,
        r,
        n,
        o,
        l,
        h,
        _,
        u,
        c,
        f,
        p,
        d = {},
        m = "cubic" === (e = e || "soft") ? 3 : 2,
        g = "soft" === e,
        v = [];
      if ((g && i && (t = [i].concat(t)), null == t || m + 1 > t.length))
        throw "invalid Bezier data";
      for (c in t[0]) v.push(c);
      for (h = v.length; --h > -1; ) {
        for (d[(c = v[h])] = l = [], f = 0, u = t.length, _ = 0; u > _; _++)
          (s =
            null == i
              ? t[_][c]
              : "string" == typeof (p = t[_][c]) && "=" === p.charAt(1)
              ? i[c] + Number(p.charAt(0) + p.substr(2))
              : Number(p)),
            g && _ > 1 && u - 1 > _ && (l[f++] = (s + l[f - 2]) / 2),
            (l[f++] = s);
        for (u = f - m + 1, f = 0, _ = 0; u > _; _ += m)
          (s = l[_]),
            (r = l[_ + 1]),
            (n = l[_ + 2]),
            (o = 2 === m ? 0 : l[_ + 3]),
            (l[f++] = p =
              3 === m
                ? new a(s, r, n, o)
                : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n));
        l.length = f;
      }
      return d;
    }),
    (c = function (t, e, i) {
      for (
        var s, r, n, a, o, l, h, _, u, c, f, p = 1 / i, d = t.length;
        --d > -1;

      )
        for (
          n = (c = t[d]).a,
            a = c.d - n,
            o = c.c - n,
            l = c.b - n,
            s = r = 0,
            _ = 1;
          i >= _;
          _++
        )
          (s =
            r -
            (r =
              ((h = p * _) * h * a + 3 * (u = 1 - h) * (h * o + u * l)) * h)),
            (e[(f = d * i + _ - 1)] = (e[f] || 0) + s * s);
    }),
    (f = function (t, e) {
      var i,
        s,
        r,
        n,
        a = [],
        o = [],
        l = 0,
        h = 0,
        _ = (e = e >> 0 || 6) - 1,
        u = [],
        f = [];
      for (i in t) c(t[i], a, e);
      for (r = a.length, s = 0; r > s; s++)
        (l += Math.sqrt(a[s])),
          (f[(n = s % e)] = l),
          n === _ &&
            ((h += l),
            (u[(n = (s / e) >> 0)] = f),
            (o[n] = h),
            (l = 0),
            (f = []));
      return { length: h, lengths: o, segments: u };
    }),
    (p = _gsScope._gsDefine.plugin({
      propName: "bezier",
      priority: -1,
      version: "1.3.4",
      API: 2,
      global: !0,
      init: function (t, e, i) {
        (this._target = t),
          e instanceof Array && (e = { values: e }),
          (this._func = {}),
          (this._round = {}),
          (this._props = []),
          (this._timeRes =
            null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
        var s,
          r,
          n,
          a,
          o,
          l = e.values || [],
          h = {},
          c = l[0],
          p = e.autoRotate || i.vars.orientToBezier;
        for (s in ((this._autoRotate = p
          ? p instanceof Array
            ? p
            : [["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]]
          : null),
        c))
          this._props.push(s);
        for (n = this._props.length; --n > -1; )
          (s = this._props[n]),
            this._overwriteProps.push(s),
            (r = this._func[s] = "function" == typeof t[s]),
            (h[s] = r
              ? t[
                  s.indexOf("set") ||
                  "function" != typeof t["get" + s.substr(3)]
                    ? s
                    : "get" + s.substr(3)
                ]()
              : parseFloat(t[s])),
            o || (h[s] !== l[0][s] && (o = h));
        if (
          ((this._beziers =
            "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type
              ? _(
                  l,
                  isNaN(e.curviness) ? 1 : e.curviness,
                  !1,
                  "thruBasic" === e.type,
                  e.correlate,
                  o
                )
              : u(l, e.type, h)),
          (this._segCount = this._beziers[s].length),
          this._timeRes)
        ) {
          var d = f(this._beziers, this._timeRes);
          (this._length = d.length),
            (this._lengths = d.lengths),
            (this._segments = d.segments),
            (this._l1 = this._li = this._s1 = this._si = 0),
            (this._l2 = this._lengths[0]),
            (this._curSeg = this._segments[0]),
            (this._s2 = this._curSeg[0]),
            (this._prec = 1 / this._curSeg.length);
        }
        if ((p = this._autoRotate))
          for (
            this._initialRotations = [],
              p[0] instanceof Array || (this._autoRotate = p = [p]),
              n = p.length;
            --n > -1;

          ) {
            for (a = 0; 3 > a; a++)
              (s = p[n][a]),
                (this._func[s] =
                  "function" == typeof t[s] &&
                  t[
                    s.indexOf("set") ||
                    "function" != typeof t["get" + s.substr(3)]
                      ? s
                      : "get" + s.substr(3)
                  ]);
            (s = p[n][2]),
              (this._initialRotations[n] = this._func[s]
                ? this._func[s].call(this._target)
                : this._target[s]);
          }
        return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
      },
      set: function (e) {
        var i,
          s,
          r,
          n,
          a,
          o,
          l,
          h,
          _,
          u,
          c = this._segCount,
          f = this._func,
          p = this._target,
          d = e !== this._startRatio;
        if (this._timeRes) {
          if (
            ((_ = this._lengths),
            (u = this._curSeg),
            (e *= this._length),
            (r = this._li),
            e > this._l2 && c - 1 > r)
          ) {
            for (h = c - 1; h > r && e >= (this._l2 = _[++r]); );
            (this._l1 = _[r - 1]),
              (this._li = r),
              (this._curSeg = u = this._segments[r]),
              (this._s2 = u[(this._s1 = this._si = 0)]);
          } else if (this._l1 > e && r > 0) {
            for (; r > 0 && (this._l1 = _[--r]) >= e; );
            0 === r && this._l1 > e ? (this._l1 = 0) : r++,
              (this._l2 = _[r]),
              (this._li = r),
              (this._curSeg = u = this._segments[r]),
              (this._s1 = u[(this._si = u.length - 1) - 1] || 0),
              (this._s2 = u[this._si]);
          }
          if (
            ((i = r),
            (e -= this._l1),
            (r = this._si),
            e > this._s2 && u.length - 1 > r)
          ) {
            for (h = u.length - 1; h > r && e >= (this._s2 = u[++r]); );
            (this._s1 = u[r - 1]), (this._si = r);
          } else if (this._s1 > e && r > 0) {
            for (; r > 0 && (this._s1 = u[--r]) >= e; );
            0 === r && this._s1 > e ? (this._s1 = 0) : r++,
              (this._s2 = u[r]),
              (this._si = r);
          }
          o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec;
        } else
          o =
            (e - (i = 0 > e ? 0 : e >= 1 ? c - 1 : (c * e) >> 0) * (1 / c)) * c;
        for (s = 1 - o, r = this._props.length; --r > -1; )
          (n = this._props[r]),
            (l =
              (o * o * (a = this._beziers[n][i]).da +
                3 * s * (o * a.ca + s * a.ba)) *
                o +
              a.a),
            this._round[n] && (l = Math.round(l)),
            f[n] ? p[n](l) : (p[n] = l);
        if (this._autoRotate) {
          var m,
            g,
            v,
            y,
            T,
            x,
            b,
            w = this._autoRotate;
          for (r = w.length; --r > -1; )
            (n = w[r][2]),
              (x = w[r][3] || 0),
              (b = !0 === w[r][4] ? 1 : t),
              (a = this._beziers[w[r][0]]),
              (m = this._beziers[w[r][1]]),
              a &&
                m &&
                ((a = a[i]),
                (m = m[i]),
                (g = a.a + (a.b - a.a) * o),
                (g += ((y = a.b + (a.c - a.b) * o) - g) * o),
                (y += (a.c + (a.d - a.c) * o - y) * o),
                (v = m.a + (m.b - m.a) * o),
                (v += ((T = m.b + (m.c - m.b) * o) - v) * o),
                (T += (m.c + (m.d - m.c) * o - T) * o),
                (l = d
                  ? Math.atan2(T - v, y - g) * b + x
                  : this._initialRotations[r]),
                f[n] ? p[n](l) : (p[n] = l));
        }
      },
    })),
    (d = p.prototype),
    (p.bezierThrough = _),
    (p.cubicToQuadratic = o),
    (p._autoCSS = !0),
    (p.quadraticToCubic = function (t, e, i) {
      return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
    }),
    (p._cssRegister = function () {
      var t = n.CSSPlugin;
      if (t) {
        var e = t._internals,
          i = e._parseToProxy,
          s = e._setPluginRatio,
          r = e.CSSPropTween;
        e._registerComplexSpecialProp("bezier", {
          parser: function (t, e, n, a, o, l) {
            e instanceof Array && (e = { values: e }), (l = new p());
            var h,
              _,
              u,
              c = e.values,
              f = c.length - 1,
              d = [],
              m = {};
            if (0 > f) return o;
            for (h = 0; f >= h; h++)
              (u = i(t, c[h], a, o, l, f !== h)), (d[h] = u.end);
            for (_ in e) m[_] = e[_];
            return (
              (m.values = d),
              ((o = new r(t, "bezier", 0, 0, u.pt, 2)).data = u),
              (o.plugin = l),
              (o.setRatio = s),
              0 === m.autoRotate && (m.autoRotate = !0),
              !m.autoRotate ||
                m.autoRotate instanceof Array ||
                ((h = !0 === m.autoRotate ? 0 : Number(m.autoRotate)),
                (m.autoRotate =
                  null != u.end.left
                    ? [["left", "top", "rotation", h, !1]]
                    : null != u.end.x && [["x", "y", "rotation", h, !1]])),
              m.autoRotate &&
                (a._transform || a._enableTransforms(!1),
                (u.autoRotate = a._target._gsTransform)),
              l._onInitTween(u.proxy, m, a._tween),
              o
            );
          },
        });
      }
    }),
    (d._roundProps = function (t, e) {
      for (var i = this._overwriteProps, s = i.length; --s > -1; )
        (t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e);
    }),
    (d._kill = function (t) {
      var e,
        i,
        s = this._props;
      for (e in this._beziers)
        if (e in t)
          for (
            delete this._beziers[e], delete this._func[e], i = s.length;
            --i > -1;

          )
            s[i] === e && s.splice(i, 1);
      return this._super._kill.call(this, t);
    }),
    _gsScope._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function (t, e) {
        var i,
          s,
          r,
          n,
          a = function () {
            t.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = a.prototype.setRatio);
          },
          o = _gsScope._gsDefine.globals,
          l = {},
          h = (a.prototype = new t("css"));
        (h.constructor = a),
          (a.version = "1.18.0"),
          (a.API = 2),
          (a.defaultTransformPerspective = 0),
          (a.defaultSkewType = "compensated"),
          (a.defaultSmoothOrigin = !0),
          (h = "px"),
          (a.suffixMap = {
            top: h,
            right: h,
            bottom: h,
            left: h,
            width: h,
            height: h,
            fontSize: h,
            padding: h,
            margin: h,
            perspective: h,
            lineHeight: "",
          });
        var _,
          u,
          c,
          f,
          p,
          d,
          m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
          g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          T = /(?:\d|\-|\+|=|#|\.)*/g,
          x = /opacity *= *([^)]*)/i,
          b = /opacity:([^;]*)/i,
          w = /alpha\(opacity *=.+?\)/i,
          P = /^(rgb|hsl)/,
          O = /([A-Z])/g,
          S = /-([a-z])/gi,
          k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          R = function (t, e) {
            return e.toUpperCase();
          },
          A = /(?:Left|Right|Width)/i,
          C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          M = /,(?=[^\)]*(?:\(|$))/gi,
          z = Math.PI / 180,
          F = 180 / Math.PI,
          I = {},
          X = document,
          N = function (t) {
            return X.createElementNS
              ? X.createElementNS("http://www.w3.org/1999/xhtml", t)
              : X.createElement(t);
          },
          L = N("div"),
          E = N("img"),
          Y = (a._internals = { _specialProps: l }),
          B = navigator.userAgent,
          j = (function () {
            var t = B.indexOf("Android"),
              e = N("a");
            return (
              (c =
                -1 !== B.indexOf("Safari") &&
                -1 === B.indexOf("Chrome") &&
                (-1 === t || Number(B.substr(t + 8, 1)) > 3)),
              (p = c && 6 > Number(B.substr(B.indexOf("Version/") + 8, 1))),
              (f = -1 !== B.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(B) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(B)) &&
                (d = parseFloat(RegExp.$1)),
              !!e &&
                ((e.style.cssText = "top:1px;opacity:.55;"),
                /^0.55/.test(e.style.opacity))
            );
          })(),
          U = function (t) {
            return x.test(
              "string" == typeof t
                ? t
                : (t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                    ""
            )
              ? parseFloat(RegExp.$1) / 100
              : 1;
          },
          V = function (t) {
            window.console && console.log(t);
          },
          q = "",
          W = "",
          Z = function (t, e) {
            var i,
              s,
              r = (e = e || L).style;
            if (void 0 !== r[t]) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1),
                i = ["O", "Moz", "ms", "Ms", "Webkit"],
                s = 5;
              --s > -1 && void 0 === r[i[s] + t];

            );
            return s >= 0
              ? ((q = "-" + (W = 3 === s ? "ms" : i[s]).toLowerCase() + "-"),
                W + t)
              : null;
          },
          G = X.defaultView ? X.defaultView.getComputedStyle : function () {},
          $ = (a.getStyle = function (t, e, i, s, r) {
            var n;
            return j || "opacity" !== e
              ? (!s && t.style[e]
                  ? (n = t.style[e])
                  : (i = i || G(t))
                  ? (n =
                      i[e] ||
                      i.getPropertyValue(e) ||
                      i.getPropertyValue(e.replace(O, "-$1").toLowerCase()))
                  : t.currentStyle && (n = t.currentStyle[e]),
                null == r ||
                (n && "none" !== n && "auto" !== n && "auto auto" !== n)
                  ? n
                  : r)
              : U(t);
          }),
          Q = (Y.convertToPixels = function (t, i, s, r, n) {
            if ("px" === r || !r) return s;
            if ("auto" === r || !s) return 0;
            var o,
              l,
              h,
              _ = A.test(i),
              u = t,
              c = L.style,
              f = 0 > s;
            if ((f && (s = -s), "%" === r && -1 !== i.indexOf("border")))
              o = (s / 100) * (_ ? t.clientWidth : t.clientHeight);
            else {
              if (
                ((c.cssText =
                  "border:0 solid red;position:" +
                  $(t, "position") +
                  ";line-height:0;"),
                "%" !== r &&
                  u.appendChild &&
                  "v" !== r.charAt(0) &&
                  "rem" !== r)
              )
                c[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
              else {
                if (
                  ((l = (u = t.parentNode || X.body)._gsCache),
                  (h = e.ticker.frame),
                  l && _ && l.time === h)
                )
                  return (l.width * s) / 100;
                c[_ ? "width" : "height"] = s + r;
              }
              u.appendChild(L),
                (o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"])),
                u.removeChild(L),
                _ &&
                  "%" === r &&
                  !1 !== a.cacheWidths &&
                  (((l = u._gsCache = u._gsCache || {}).time = h),
                  (l.width = (o / s) * 100)),
                0 !== o || n || (o = Q(t, i, s, r, !0));
            }
            return f ? -o : o;
          }),
          H = (Y.calculateOffset = function (t, e, i) {
            if ("absolute" !== $(t, "position", i)) return 0;
            var s = "left" === e ? "Left" : "Top",
              r = $(t, "margin" + s, i);
            return (
              t["offset" + s] - (Q(t, e, parseFloat(r), r.replace(T, "")) || 0)
            );
          }),
          K = function (t, e) {
            var i,
              s,
              r,
              n = {};
            if ((e = e || G(t, null)))
              if ((i = e.length))
                for (; --i > -1; )
                  (-1 === (r = e[i]).indexOf("-transform") || Ot === r) &&
                    (n[r.replace(S, R)] = e.getPropertyValue(r));
              else
                for (i in e)
                  (-1 === i.indexOf("Transform") || Pt === i) && (n[i] = e[i]);
            else if ((e = t.currentStyle || t.style))
              for (i in e)
                "string" == typeof i &&
                  void 0 === n[i] &&
                  (n[i.replace(S, R)] = e[i]);
            return (
              j || (n.opacity = U(t)),
              (s = Nt(t, e, !1)),
              (n.rotation = s.rotation),
              (n.skewX = s.skewX),
              (n.scaleX = s.scaleX),
              (n.scaleY = s.scaleY),
              (n.x = s.x),
              (n.y = s.y),
              kt &&
                ((n.z = s.z),
                (n.rotationX = s.rotationX),
                (n.rotationY = s.rotationY),
                (n.scaleZ = s.scaleZ)),
              n.filters && delete n.filters,
              n
            );
          },
          J = function (t, e, i, s, r) {
            var n,
              a,
              o,
              l = {},
              h = t.style;
            for (a in i)
              "cssText" !== a &&
                "length" !== a &&
                isNaN(a) &&
                (e[a] !== (n = i[a]) || (r && r[a])) &&
                -1 === a.indexOf("Origin") &&
                ("number" == typeof n || "string" == typeof n) &&
                ((l[a] =
                  "auto" !== n || ("left" !== a && "top" !== a)
                    ? ("" !== n && "auto" !== n && "none" !== n) ||
                      "string" != typeof e[a] ||
                      "" === e[a].replace(y, "")
                      ? n
                      : 0
                    : H(t, a)),
                void 0 !== h[a] && (o = new pt(h, a, h[a], o)));
            if (s) for (a in s) "className" !== a && (l[a] = s[a]);
            return { difs: l, firstMPT: o };
          },
          tt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          it = function (t, e, i) {
            var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
              r = tt[e],
              n = r.length;
            for (i = i || G(t, null); --n > -1; )
              (s -= parseFloat($(t, "padding" + r[n], i, !0)) || 0),
                (s -= parseFloat($(t, "border" + r[n] + "Width", i, !0)) || 0);
            return s;
          },
          st = function (t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
              return t + " ";
            (null == t || "" === t) && (t = "0 0");
            var i = t.split(" "),
              s =
                -1 !== t.indexOf("left")
                  ? "0%"
                  : -1 !== t.indexOf("right")
                  ? "100%"
                  : i[0],
              r =
                -1 !== t.indexOf("top")
                  ? "0%"
                  : -1 !== t.indexOf("bottom")
                  ? "100%"
                  : i[1];
            return (
              null == r
                ? (r = "center" === s ? "50%" : "0")
                : "center" === r && (r = "50%"),
              ("center" === s ||
                (isNaN(parseFloat(s)) && -1 === (s + "").indexOf("="))) &&
                (s = "50%"),
              (t = s + " " + r + (i.length > 2 ? " " + i[2] : "")),
              e &&
                ((e.oxp = -1 !== s.indexOf("%")),
                (e.oyp = -1 !== r.indexOf("%")),
                (e.oxr = "=" === s.charAt(1)),
                (e.oyr = "=" === r.charAt(1)),
                (e.ox = parseFloat(s.replace(y, ""))),
                (e.oy = parseFloat(r.replace(y, ""))),
                (e.v = t)),
              e || t
            );
          },
          rt = function (t, e) {
            return "string" == typeof t && "=" === t.charAt(1)
              ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
              : parseFloat(t) - parseFloat(e);
          },
          nt = function (t, e) {
            return null == t
              ? e
              : "string" == typeof t && "=" === t.charAt(1)
              ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e
              : parseFloat(t);
          },
          at = function (t, e, i, s) {
            var r,
              n,
              a,
              o,
              l,
              h = 1e-6;
            return (
              null == t
                ? (o = e)
                : "number" == typeof t
                ? (o = t)
                : ((r = 360),
                  (n = t.split("_")),
                  (a =
                    ((l = "=" === t.charAt(1))
                      ? parseInt(t.charAt(0) + "1", 10) *
                        parseFloat(n[0].substr(2))
                      : parseFloat(n[0])) *
                      (-1 === t.indexOf("rad") ? 1 : F) -
                    (l ? 0 : e)),
                  n.length &&
                    (s && (s[i] = e + a),
                    -1 !== t.indexOf("short") &&
                      (a %= r) !== a % 180 &&
                      (a = 0 > a ? a + r : a - r),
                    -1 !== t.indexOf("_cw") && 0 > a
                      ? (a = ((a + 3599999999640) % r) - (0 | (a / r)) * r)
                      : -1 !== t.indexOf("ccw") &&
                        a > 0 &&
                        (a = ((a - 3599999999640) % r) - (0 | (a / r)) * r)),
                  (o = e + a)),
              h > o && o > -h && (o = 0),
              o
            );
          },
          ot = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          lt = function (t, e, i) {
            return (
              0 |
              (255 *
                (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t)
                  ? e + 6 * (i - e) * t
                  : 0.5 > t
                  ? i
                  : 2 > 3 * t
                  ? e + 6 * (i - e) * (2 / 3 - t)
                  : e) +
                0.5)
            );
          },
          ht = (a.parseColor = function (t, e) {
            var i, s, r, n, a, o, l, h, _, u, c;
            if (t)
              if ("number" == typeof t) i = [t >> 16, 255 & (t >> 8), 255 & t];
              else {
                if (
                  ("," === t.charAt(t.length - 1) &&
                    (t = t.substr(0, t.length - 1)),
                  ot[t])
                )
                  i = ot[t];
                else if ("#" === t.charAt(0))
                  4 === t.length &&
                    ((s = t.charAt(1)),
                    (r = t.charAt(2)),
                    (n = t.charAt(3)),
                    (t = "#" + s + s + r + r + n + n)),
                    (i = [
                      (t = parseInt(t.substr(1), 16)) >> 16,
                      255 & (t >> 8),
                      255 & t,
                    ]);
                else if ("hsl" === t.substr(0, 3))
                  if (((i = c = t.match(m)), e)) {
                    if (-1 !== t.indexOf("=")) return t.match(g);
                  } else
                    (a = (Number(i[0]) % 360) / 360),
                      (o = Number(i[1]) / 100),
                      (s =
                        2 * (l = Number(i[2]) / 100) -
                        (r = 0.5 >= l ? l * (o + 1) : l + o - l * o)),
                      i.length > 3 && (i[3] = Number(t[3])),
                      (i[0] = lt(a + 1 / 3, s, r)),
                      (i[1] = lt(a, s, r)),
                      (i[2] = lt(a - 1 / 3, s, r));
                else i = t.match(m) || ot.transparent;
                (i[0] = Number(i[0])),
                  (i[1] = Number(i[1])),
                  (i[2] = Number(i[2])),
                  i.length > 3 && (i[3] = Number(i[3]));
              }
            else i = ot.black;
            return (
              e &&
                !c &&
                ((s = i[0] / 255),
                (r = i[1] / 255),
                (n = i[2] / 255),
                (l = ((h = Math.max(s, r, n)) + (_ = Math.min(s, r, n))) / 2),
                h === _
                  ? (a = o = 0)
                  : ((u = h - _),
                    (o = l > 0.5 ? u / (2 - h - _) : u / (h + _)),
                    (a =
                      h === s
                        ? (r - n) / u + (n > r ? 6 : 0)
                        : h === r
                        ? (n - s) / u + 2
                        : (s - r) / u + 4),
                    (a *= 60)),
                (i[0] = 0 | (a + 0.5)),
                (i[1] = 0 | (100 * o + 0.5)),
                (i[2] = 0 | (100 * l + 0.5))),
              i
            );
          }),
          _t = function (t, e) {
            var i,
              s,
              r,
              n = t.match(ut) || [],
              a = 0,
              o = n.length ? "" : t;
            for (i = 0; n.length > i; i++)
              (s = n[i]),
                (a += (r = t.substr(a, t.indexOf(s, a) - a)).length + s.length),
                3 === (s = ht(s, e)).length && s.push(1),
                (o +=
                  r +
                  (e
                    ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3]
                    : "rgba(" + s.join(",")) +
                  ")");
            return o;
          },
          ut = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (h in ot) ut += "|" + h + "\\b";
        (ut = RegExp(ut + ")", "gi")),
          (a.colorStringFilter = function (t) {
            var e,
              i = t[0] + t[1];
            (ut.lastIndex = 0),
              ut.test(i) &&
                ((e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla(")),
                (t[0] = _t(t[0], e)),
                (t[1] = _t(t[1], e)));
          }),
          e.defaultStringFilter ||
            (e.defaultStringFilter = a.colorStringFilter);
        var ct = function (t, e, i, s) {
            if (null == t)
              return function (t) {
                return t;
              };
            var r,
              n = e ? (t.match(ut) || [""])[0] : "",
              a = t.split(n).join("").match(v) || [],
              o = t.substr(0, t.indexOf(a[0])),
              l = ")" === t.charAt(t.length - 1) ? ")" : "",
              h = -1 !== t.indexOf(" ") ? " " : ",",
              _ = a.length,
              u = _ > 0 ? a[0].replace(m, "") : "";
            return _
              ? (r = e
                  ? function (t) {
                      var e, c, f, p;
                      if ("number" == typeof t) t += u;
                      else if (s && M.test(t)) {
                        for (
                          p = t.replace(M, "|").split("|"), f = 0;
                          p.length > f;
                          f++
                        )
                          p[f] = r(p[f]);
                        return p.join(",");
                      }
                      if (
                        ((e = (t.match(ut) || [n])[0]),
                        (f = (c = t.split(e).join("").match(v) || []).length),
                        _ > f--)
                      )
                        for (; _ > ++f; )
                          c[f] = i ? c[0 | ((f - 1) / 2)] : a[f];
                      return (
                        o +
                        c.join(h) +
                        h +
                        e +
                        l +
                        (-1 !== t.indexOf("inset") ? " inset" : "")
                      );
                    }
                  : function (t) {
                      var e, n, c;
                      if ("number" == typeof t) t += u;
                      else if (s && M.test(t)) {
                        for (
                          n = t.replace(M, "|").split("|"), c = 0;
                          n.length > c;
                          c++
                        )
                          n[c] = r(n[c]);
                        return n.join(",");
                      }
                      if (((c = (e = t.match(v) || []).length), _ > c--))
                        for (; _ > ++c; )
                          e[c] = i ? e[0 | ((c - 1) / 2)] : a[c];
                      return o + e.join(h) + l;
                    })
              : function (t) {
                  return t;
                };
          },
          ft = function (t) {
            return (
              (t = t.split(",")),
              function (e, i, s, r, n, a, o) {
                var l,
                  h = (i + "").split(" ");
                for (o = {}, l = 0; 4 > l; l++)
                  o[t[l]] = h[l] = h[l] || h[((l - 1) / 2) >> 0];
                return r.parse(e, o, n, a);
              }
            );
          },
          pt =
            ((Y._setPluginRatio = function (t) {
              this.plugin.setRatio(t);
              for (
                var e,
                  i,
                  s,
                  r,
                  n = this.data,
                  a = n.proxy,
                  o = n.firstMPT,
                  l = 1e-6;
                o;

              )
                (e = a[o.v]),
                  o.r ? (e = Math.round(e)) : l > e && e > -l && (e = 0),
                  (o.t[o.p] = e),
                  (o = o._next);
              if (
                (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
              )
                for (o = n.firstMPT; o; ) {
                  if ((i = o.t).type) {
                    if (1 === i.type) {
                      for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++)
                        r += i["xn" + s] + i["xs" + (s + 1)];
                      i.e = r;
                    }
                  } else i.e = i.s + i.xs0;
                  o = o._next;
                }
            }),
            function (t, e, i, s, r) {
              (this.t = t),
                (this.p = e),
                (this.v = i),
                (this.r = r),
                s && ((s._prev = this), (this._next = s));
            }),
          dt =
            ((Y._parseToProxy = function (t, e, i, s, r, n) {
              var a,
                o,
                l,
                h,
                _,
                u = s,
                c = {},
                f = {},
                p = i._transform,
                d = I;
              for (
                i._transform = null,
                  I = e,
                  s = _ = i.parse(t, e, s, r),
                  I = d,
                  n &&
                    ((i._transform = p),
                    u && ((u._prev = null), u._prev && (u._prev._next = null)));
                s && s !== u;

              ) {
                if (
                  1 >= s.type &&
                  ((f[(o = s.p)] = s.s + s.c),
                  (c[o] = s.s),
                  n || ((h = new pt(s, "s", o, h, s.r)), (s.c = 0)),
                  1 === s.type)
                )
                  for (a = s.l; --a > 0; )
                    (l = "xn" + a),
                      (f[(o = s.p + "_" + l)] = s.data[l]),
                      (c[o] = s[l]),
                      n || (h = new pt(s, l, o, h, s.rxp[l]));
                s = s._next;
              }
              return { proxy: c, end: f, firstMPT: h, pt: _ };
            }),
            (Y.CSSPropTween = function (t, e, s, r, a, o, l, h, _, u, c) {
              (this.t = t),
                (this.p = e),
                (this.s = s),
                (this.c = r),
                (this.n = l || e),
                t instanceof dt || n.push(this.n),
                (this.r = h),
                (this.type = o || 0),
                _ && ((this.pr = _), (i = !0)),
                (this.b = void 0 === u ? s : u),
                (this.e = void 0 === c ? s + r : c),
                a && ((this._next = a), (a._prev = this));
            })),
          mt = function (t, e, i, s, r, n) {
            var a = new dt(t, e, i, s - i, r, -1, n);
            return (a.b = i), (a.e = a.xs0 = s), a;
          },
          gt = (a.parseComplex = function (t, e, i, s, r, n, a, o, l, h) {
            (a = new dt(
              t,
              e,
              0,
              0,
              a,
              h ? 2 : 1,
              null,
              !1,
              o,
              (i = i || n || ""),
              s
            )),
              (s += "");
            var u,
              c,
              f,
              p,
              d,
              v,
              y,
              T,
              x,
              b,
              w,
              P,
              O,
              S = i.split(", ").join(",").split(" "),
              k = s.split(", ").join(",").split(" "),
              R = S.length,
              A = !1 !== _;
            for (
              (-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) &&
                ((S = S.join(" ").replace(M, ", ").split(" ")),
                (k = k.join(" ").replace(M, ", ").split(" ")),
                (R = S.length)),
                R !== k.length && (R = (S = (n || "").split(" ")).length),
                a.plugin = l,
                a.setRatio = h,
                ut.lastIndex = 0,
                u = 0;
              R > u;
              u++
            )
              if (((p = S[u]), (d = k[u]), (T = parseFloat(p)) || 0 === T))
                a.appendXtra(
                  "",
                  T,
                  rt(d, T),
                  d.replace(g, ""),
                  A && -1 !== d.indexOf("px"),
                  !0
                );
              else if (r && ut.test(p))
                (P = "," === d.charAt(d.length - 1) ? ")," : ")"),
                  (O = -1 !== d.indexOf("hsl") && j),
                  (p = ht(p, O)),
                  (d = ht(d, O)),
                  (x = p.length + d.length > 6) && !j && 0 === d[3]
                    ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"),
                      (a.e = a.e.split(k[u]).join("transparent")))
                    : (j || (x = !1),
                      O
                        ? a
                            .appendXtra(
                              x ? "hsla(" : "hsl(",
                              p[0],
                              rt(d[0], p[0]),
                              ",",
                              !1,
                              !0
                            )
                            .appendXtra("", p[1], rt(d[1], p[1]), "%,", !1)
                            .appendXtra(
                              "",
                              p[2],
                              rt(d[2], p[2]),
                              x ? "%," : "%" + P,
                              !1
                            )
                        : a
                            .appendXtra(
                              x ? "rgba(" : "rgb(",
                              p[0],
                              d[0] - p[0],
                              ",",
                              !0,
                              !0
                            )
                            .appendXtra("", p[1], d[1] - p[1], ",", !0)
                            .appendXtra("", p[2], d[2] - p[2], x ? "," : P, !0),
                      x &&
                        ((p = 4 > p.length ? 1 : p[3]),
                        a.appendXtra(
                          "",
                          p,
                          (4 > d.length ? 1 : d[3]) - p,
                          P,
                          !1
                        ))),
                  (ut.lastIndex = 0);
              else if ((v = p.match(m))) {
                if (!(y = d.match(g)) || y.length !== v.length) return a;
                for (f = 0, c = 0; v.length > c; c++)
                  (w = v[c]),
                    (b = p.indexOf(w, f)),
                    a.appendXtra(
                      p.substr(f, b - f),
                      Number(w),
                      rt(y[c], w),
                      "",
                      A && "px" === p.substr(b + w.length, 2),
                      0 === c
                    ),
                    (f = b + w.length);
                a["xs" + a.l] += p.substr(f);
              } else a["xs" + a.l] += a.l ? " " + p : p;
            if (-1 !== s.indexOf("=") && a.data) {
              for (P = a.xs0 + a.data.s, u = 1; a.l > u; u++)
                P += a["xs" + u] + a.data["xn" + u];
              a.e = P + a["xs" + u];
            }
            return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
          }),
          vt = 9;
        for ((h = dt.prototype).l = h.pr = 0; --vt > 0; )
          (h["xn" + vt] = 0), (h["xs" + vt] = "");
        (h.xs0 = ""),
          (h._next =
            h._prev =
            h.xfirst =
            h.data =
            h.plugin =
            h.setRatio =
            h.rxp =
              null),
          (h.appendXtra = function (t, e, i, s, r, n) {
            var a = this,
              o = a.l;
            return (
              (a["xs" + o] += n && o ? " " + t : t || ""),
              i || 0 === o || a.plugin
                ? (a.l++,
                  (a.type = a.setRatio ? 2 : 1),
                  (a["xs" + a.l] = s || ""),
                  o > 0
                    ? ((a.data["xn" + o] = e + i),
                      (a.rxp["xn" + o] = r),
                      (a["xn" + o] = e),
                      a.plugin ||
                        ((a.xfirst = new dt(
                          a,
                          "xn" + o,
                          e,
                          i,
                          a.xfirst || a,
                          0,
                          a.n,
                          r,
                          a.pr
                        )),
                        (a.xfirst.xs0 = 0)),
                      a)
                    : ((a.data = { s: e + i }),
                      (a.rxp = {}),
                      (a.s = e),
                      (a.c = i),
                      (a.r = r),
                      a))
                : ((a["xs" + o] += e + (s || "")), a)
            );
          });
        var yt = function (t, e) {
            (e = e || {}),
              (this.p = (e.prefix && Z(t)) || t),
              (l[t] = l[this.p] = this),
              (this.format =
                e.formatter ||
                ct(e.defaultValue, e.color, e.collapsible, e.multi)),
              e.parser && (this.parse = e.parser),
              (this.clrs = e.color),
              (this.multi = e.multi),
              (this.keyword = e.keyword),
              (this.dflt = e.defaultValue),
              (this.pr = e.priority || 0);
          },
          Tt = (Y._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = { parser: i });
            var s,
              r = t.split(","),
              n = e.defaultValue;
            for (i = i || [n], s = 0; r.length > s; s++)
              (e.prefix = 0 === s && e.prefix),
                (e.defaultValue = i[s] || n),
                new yt(r[s], e);
          }),
          xt = function (t) {
            if (!l[t]) {
              var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
              Tt(t, {
                parser: function (t, i, s, r, n, a, h) {
                  var _ = o.com.greensock.plugins[e];
                  return _
                    ? (_._cssRegister(), l[s].parse(t, i, s, r, n, a, h))
                    : (V("Error: " + e + " js file not loaded."), n);
                },
              });
            }
          };
        ((h = yt.prototype).parseComplex = function (t, e, i, s, r, n) {
          var a,
            o,
            l,
            h,
            _,
            u,
            c = this.keyword;
          if (
            (this.multi &&
              (M.test(i) || M.test(e)
                ? ((o = e.replace(M, "|").split("|")),
                  (l = i.replace(M, "|").split("|")))
                : c && ((o = [e]), (l = [i]))),
            l)
          ) {
            for (
              h = l.length > o.length ? l.length : o.length, a = 0;
              h > a;
              a++
            )
              (e = o[a] = o[a] || this.dflt),
                (i = l[a] = l[a] || this.dflt),
                c &&
                  (_ = e.indexOf(c)) !== (u = i.indexOf(c)) &&
                  (-1 === u
                    ? (o[a] = o[a].split(c).join(""))
                    : -1 === _ && (o[a] += " " + c));
            (e = o.join(", ")), (i = l.join(", "));
          }
          return gt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n);
        }),
          (h.parse = function (t, e, i, s, n, a) {
            return this.parseComplex(
              t.style,
              this.format($(t, this.p, r, !1, this.dflt)),
              this.format(e),
              n,
              a
            );
          }),
          (a.registerSpecialProp = function (t, e, i) {
            Tt(t, {
              parser: function (t, s, r, n, a, o) {
                var l = new dt(t, r, 0, 0, a, 2, r, !1, i);
                return (l.plugin = o), (l.setRatio = e(t, s, n._tween, r)), l;
              },
              priority: i,
            });
          }),
          (a.useSVGTransformAttr = c || f);
        var bt,
          wt =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
              ","
            ),
          Pt = Z("transform"),
          Ot = q + "transform",
          St = Z("transformOrigin"),
          kt = null !== Z("perspective"),
          Rt = (Y.Transform = function () {
            (this.perspective = parseFloat(a.defaultTransformPerspective) || 0),
              (this.force3D =
                !(!1 === a.defaultForce3D || !kt) &&
                (a.defaultForce3D || "auto"));
          }),
          At = window.SVGElement,
          Ct = function (t, e, i) {
            var s,
              r = X.createElementNS("http://www.w3.org/2000/svg", t),
              n = /([a-z])([A-Z])/g;
            for (s in i)
              r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
            return e.appendChild(r), r;
          },
          Dt = X.documentElement,
          Mt = (function () {
            var t,
              e,
              i,
              s = d || (/Android/i.test(B) && !window.chrome);
            return (
              X.createElementNS &&
                !s &&
                ((t = Ct("svg", Dt)),
                (i = (e = Ct("rect", t, {
                  width: 100,
                  height: 50,
                  x: 100,
                })).getBoundingClientRect().width),
                (e.style[St] = "50% 50%"),
                (e.style[Pt] = "scaleX(0.5)"),
                (s = i === e.getBoundingClientRect().width && !(f && kt)),
                Dt.removeChild(t)),
              s
            );
          })(),
          zt = function (t, e, i, s, r) {
            var n,
              o,
              l,
              h,
              _,
              u,
              c,
              f,
              p,
              d,
              m,
              g,
              v,
              y,
              T = t._gsTransform,
              x = Xt(t, !0);
            T && ((v = T.xOrigin), (y = T.yOrigin)),
              (!s || 2 > (n = s.split(" ")).length) &&
                ((c = t.getBBox()),
                (n = [
                  (-1 !== (e = st(e).split(" "))[0].indexOf("%")
                    ? (parseFloat(e[0]) / 100) * c.width
                    : parseFloat(e[0])) + c.x,
                  (-1 !== e[1].indexOf("%")
                    ? (parseFloat(e[1]) / 100) * c.height
                    : parseFloat(e[1])) + c.y,
                ])),
              (i.xOrigin = h = parseFloat(n[0])),
              (i.yOrigin = _ = parseFloat(n[1])),
              s &&
                x !== It &&
                ((u = x[0]),
                (c = x[1]),
                (f = x[2]),
                (p = x[3]),
                (d = x[4]),
                (o =
                  h * (p / (g = u * p - c * f)) +
                  _ * (-f / g) +
                  (f * (m = x[5]) - p * d) / g),
                (l = h * (-c / g) + _ * (u / g) - (u * m - c * d) / g),
                (h = i.xOrigin = n[0] = o),
                (_ = i.yOrigin = n[1] = l)),
              T &&
                (r || (!1 !== r && !1 !== a.defaultSmoothOrigin)
                  ? ((o = h - v),
                    (l = _ - y),
                    (T.xOffset += o * x[0] + l * x[2] - o),
                    (T.yOffset += o * x[1] + l * x[3] - l))
                  : (T.xOffset = T.yOffset = 0)),
              t.setAttribute("data-svg-origin", n.join(" "));
          },
          Ft = function (t) {
            return !!(
              At &&
              "function" == typeof t.getBBox &&
              t.getCTM &&
              (!t.parentNode || (t.parentNode.getBBox && t.parentNode.getCTM))
            );
          },
          It = [1, 0, 0, 1, 0, 0],
          Xt = function (t, e) {
            var i,
              s,
              r,
              n,
              a,
              o = t._gsTransform || new Rt(),
              l = 1e5;
            if (
              (Pt
                ? (s = $(t, Ot, null, !0))
                : t.currentStyle &&
                  (s =
                    (s = t.currentStyle.filter.match(C)) && 4 === s.length
                      ? [
                          s[0].substr(4),
                          Number(s[2].substr(4)),
                          Number(s[1].substr(4)),
                          s[3].substr(4),
                          o.x || 0,
                          o.y || 0,
                        ].join(",")
                      : ""),
              (i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s),
              (o.svg || (t.getBBox && Ft(t))) &&
                (i &&
                  -1 !== (t.style[Pt] + "").indexOf("matrix") &&
                  ((s = t.style[Pt]), (i = 0)),
                (r = t.getAttribute("transform")),
                i &&
                  r &&
                  (-1 !== r.indexOf("matrix")
                    ? ((s = r), (i = 0))
                    : -1 !== r.indexOf("translate") &&
                      ((s =
                        "matrix(1,0,0,1," +
                        r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") +
                        ")"),
                      (i = 0)))),
              i)
            )
              return It;
            for (
              r = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
                vt = r.length;
              --vt > -1;

            )
              (n = Number(r[vt])),
                (r[vt] = (a = n - (n |= 0))
                  ? (0 | (a * l + (0 > a ? -0.5 : 0.5))) / l + n
                  : n);
            return e && r.length > 6
              ? [r[0], r[1], r[4], r[5], r[12], r[13]]
              : r;
          },
          Nt = (Y.getTransform = function (t, i, s, n) {
            if (t._gsTransform && s && !n) return t._gsTransform;
            var o,
              l,
              h,
              _,
              u,
              c,
              f = (s && t._gsTransform) || new Rt(),
              p = 0 > f.scaleX,
              d = 2e-5,
              m = 1e5,
              g =
                (kt &&
                  (parseFloat($(t, St, i, !1, "0 0 0").split(" ")[2]) ||
                    f.zOrigin)) ||
                0,
              v = parseFloat(a.defaultTransformPerspective) || 0;
            if (
              ((f.svg = !(!t.getBBox || !Ft(t))),
              f.svg &&
                (zt(
                  t,
                  $(t, St, r, !1, "50% 50%") + "",
                  f,
                  t.getAttribute("data-svg-origin")
                ),
                (bt = a.useSVGTransformAttr || Mt)),
              (o = Xt(t)) !== It)
            ) {
              if (16 === o.length) {
                var y,
                  T,
                  x,
                  b,
                  w,
                  P = o[0],
                  O = o[1],
                  S = o[2],
                  k = o[3],
                  R = o[4],
                  A = o[5],
                  C = o[6],
                  D = o[7],
                  M = o[8],
                  z = o[9],
                  I = o[10],
                  X = o[12],
                  N = o[13],
                  L = o[14],
                  E = o[11],
                  Y = Math.atan2(C, I);
                f.zOrigin &&
                  ((X = M * (L = -f.zOrigin) - o[12]),
                  (N = z * L - o[13]),
                  (L = I * L + f.zOrigin - o[14])),
                  (f.rotationX = Y * F),
                  Y &&
                    ((y = R * (b = Math.cos(-Y)) + M * (w = Math.sin(-Y))),
                    (T = A * b + z * w),
                    (x = C * b + I * w),
                    (M = R * -w + M * b),
                    (z = A * -w + z * b),
                    (I = C * -w + I * b),
                    (E = D * -w + E * b),
                    (R = y),
                    (A = T),
                    (C = x)),
                  (Y = Math.atan2(M, I)),
                  (f.rotationY = Y * F),
                  Y &&
                    ((T = O * (b = Math.cos(-Y)) - z * (w = Math.sin(-Y))),
                    (x = S * b - I * w),
                    (z = O * w + z * b),
                    (I = S * w + I * b),
                    (E = k * w + E * b),
                    (P = y = P * b - M * w),
                    (O = T),
                    (S = x)),
                  (Y = Math.atan2(O, P)),
                  (f.rotation = Y * F),
                  Y &&
                    ((P = P * (b = Math.cos(-Y)) + R * (w = Math.sin(-Y))),
                    (T = O * b + A * w),
                    (A = O * -w + A * b),
                    (C = S * -w + C * b),
                    (O = T)),
                  f.rotationX &&
                    Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 &&
                    ((f.rotationX = f.rotation = 0), (f.rotationY += 180)),
                  (f.scaleX = (0 | (Math.sqrt(P * P + O * O) * m + 0.5)) / m),
                  (f.scaleY = (0 | (Math.sqrt(A * A + z * z) * m + 0.5)) / m),
                  (f.scaleZ = (0 | (Math.sqrt(C * C + I * I) * m + 0.5)) / m),
                  (f.skewX = 0),
                  (f.perspective = E ? 1 / (0 > E ? -E : E) : 0),
                  (f.x = X),
                  (f.y = N),
                  (f.z = L),
                  f.svg &&
                    ((f.x -= f.xOrigin - (f.xOrigin * P - f.yOrigin * R)),
                    (f.y -= f.yOrigin - (f.yOrigin * O - f.xOrigin * A)));
              } else if (
                !(
                  (kt &&
                    !n &&
                    o.length &&
                    f.x === o[4] &&
                    f.y === o[5] &&
                    (f.rotationX || f.rotationY)) ||
                  (void 0 !== f.x && "none" === $(t, "display", i))
                )
              ) {
                var B = o.length >= 6,
                  j = B ? o[0] : 1,
                  U = o[1] || 0,
                  V = o[2] || 0,
                  q = B ? o[3] : 1;
                (f.x = o[4] || 0),
                  (f.y = o[5] || 0),
                  (h = Math.sqrt(j * j + U * U)),
                  (_ = Math.sqrt(q * q + V * V)),
                  (u = j || U ? Math.atan2(U, j) * F : f.rotation || 0),
                  (c = V || q ? Math.atan2(V, q) * F + u : f.skewX || 0),
                  Math.abs(c) > 90 &&
                    270 > Math.abs(c) &&
                    (p
                      ? ((h *= -1),
                        (c += 0 >= u ? 180 : -180),
                        (u += 0 >= u ? 180 : -180))
                      : ((_ *= -1), (c += 0 >= c ? 180 : -180))),
                  (f.scaleX = h),
                  (f.scaleY = _),
                  (f.rotation = u),
                  (f.skewX = c),
                  kt &&
                    ((f.rotationX = f.rotationY = f.z = 0),
                    (f.perspective = v),
                    (f.scaleZ = 1)),
                  f.svg &&
                    ((f.x -= f.xOrigin - (f.xOrigin * j + f.yOrigin * V)),
                    (f.y -= f.yOrigin - (f.xOrigin * U + f.yOrigin * q)));
              }
              for (l in ((f.zOrigin = g), f))
                d > f[l] && f[l] > -d && (f[l] = 0);
            }
            return (
              s &&
                ((t._gsTransform = f),
                f.svg &&
                  (bt && t.style[Pt]
                    ? e.delayedCall(0.001, function () {
                        Bt(t.style, Pt);
                      })
                    : !bt &&
                      t.getAttribute("transform") &&
                      e.delayedCall(0.001, function () {
                        t.removeAttribute("transform");
                      }))),
              f
            );
          }),
          Lt = function (t) {
            var e,
              i,
              s = this.data,
              r = -s.rotation * z,
              n = r + s.skewX * z,
              a = 1e5,
              o = (0 | (Math.cos(r) * s.scaleX * a)) / a,
              l = (0 | (Math.sin(r) * s.scaleX * a)) / a,
              h = (0 | (Math.sin(n) * -s.scaleY * a)) / a,
              _ = (0 | (Math.cos(n) * s.scaleY * a)) / a,
              u = this.t.style,
              c = this.t.currentStyle;
            if (c) {
              (i = l), (l = -h), (h = -i), (e = c.filter), (u.filter = "");
              var f,
                p,
                m = this.t.offsetWidth,
                g = this.t.offsetHeight,
                v = "absolute" !== c.position,
                y =
                  "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                  o +
                  ", M12=" +
                  l +
                  ", M21=" +
                  h +
                  ", M22=" +
                  _,
                b = s.x + (m * s.xPercent) / 100,
                w = s.y + (g * s.yPercent) / 100;
              if (
                (null != s.ox &&
                  ((b +=
                    (f = (s.oxp ? 0.01 * m * s.ox : s.ox) - m / 2) -
                    (f * o +
                      (p = (s.oyp ? 0.01 * g * s.oy : s.oy) - g / 2) * l)),
                  (w += p - (f * h + p * _))),
                v
                  ? (y +=
                      ", Dx=" +
                      ((f = m / 2) - (f * o + (p = g / 2) * l) + b) +
                      ", Dy=" +
                      (p - (f * h + p * _) + w) +
                      ")")
                  : (y += ", sizingMethod='auto expand')"),
                (u.filter =
                  -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                    ? e.replace(D, y)
                    : y + " " + e),
                (0 === t || 1 === t) &&
                  1 === o &&
                  0 === l &&
                  0 === h &&
                  1 === _ &&
                  ((v && -1 === y.indexOf("Dx=0, Dy=0")) ||
                    (x.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                    (-1 === e.indexOf(e.indexOf("Alpha")) &&
                      u.removeAttribute("filter"))),
                !v)
              ) {
                var P,
                  O,
                  S,
                  k = 8 > d ? 1 : -1;
                for (
                  f = s.ieOffsetX || 0,
                    p = s.ieOffsetY || 0,
                    s.ieOffsetX = Math.round(
                      (m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 +
                        b
                    ),
                    s.ieOffsetY = Math.round(
                      (g - ((0 > _ ? -_ : _) * g + (0 > h ? -h : h) * m)) / 2 +
                        w
                    ),
                    vt = 0;
                  4 > vt;
                  vt++
                )
                  (S =
                    (i =
                      -1 !== (P = c[(O = et[vt])]).indexOf("px")
                        ? parseFloat(P)
                        : Q(this.t, O, parseFloat(P), P.replace(T, "")) ||
                          0) !== s[O]
                      ? 2 > vt
                        ? -s.ieOffsetX
                        : -s.ieOffsetY
                      : 2 > vt
                      ? f - s.ieOffsetX
                      : p - s.ieOffsetY),
                    (u[O] =
                      (s[O] = Math.round(
                        i - S * (0 === vt || 2 === vt ? 1 : k)
                      )) + "px");
              }
            }
          },
          Et =
            (Y.set3DTransformRatio =
            Y.setTransformRatio =
              function (t) {
                var e,
                  i,
                  s,
                  r,
                  n,
                  a,
                  o,
                  l,
                  h,
                  _,
                  u,
                  c,
                  p,
                  d,
                  m,
                  g,
                  v,
                  y,
                  T,
                  x,
                  b,
                  w,
                  P,
                  O = this.data,
                  S = this.t.style,
                  k = O.rotation,
                  R = O.rotationX,
                  A = O.rotationY,
                  C = O.scaleX,
                  D = O.scaleY,
                  M = O.scaleZ,
                  F = O.x,
                  I = O.y,
                  X = O.z,
                  N = O.svg,
                  L = O.perspective,
                  E = O.force3D;
                if (
                  !(
                    (((1 !== t && 0 !== t) ||
                      "auto" !== E ||
                      (this.tween._totalTime !== this.tween._totalDuration &&
                        this.tween._totalTime)) &&
                      E) ||
                    X ||
                    L ||
                    A ||
                    R
                  ) ||
                  (bt && N) ||
                  !kt
                )
                  k || O.skewX || N
                    ? ((k *= z),
                      (w = O.skewX * z),
                      (P = 1e5),
                      (e = Math.cos(k) * C),
                      (r = Math.sin(k) * C),
                      (i = Math.sin(k - w) * -D),
                      (n = Math.cos(k - w) * D),
                      w &&
                        "simple" === O.skewType &&
                        ((v = Math.tan(w)),
                        (i *= v = Math.sqrt(1 + v * v)),
                        (n *= v),
                        O.skewY && ((e *= v), (r *= v))),
                      N &&
                        ((F +=
                          O.xOrigin -
                          (O.xOrigin * e + O.yOrigin * i) +
                          O.xOffset),
                        (I +=
                          O.yOrigin -
                          (O.xOrigin * r + O.yOrigin * n) +
                          O.yOffset),
                        bt &&
                          (O.xPercent || O.yPercent) &&
                          ((d = this.t.getBBox()),
                          (F += 0.01 * O.xPercent * d.width),
                          (I += 0.01 * O.yPercent * d.height)),
                        (d = 1e-6) > F && F > -d && (F = 0),
                        d > I && I > -d && (I = 0)),
                      (T =
                        (0 | (e * P)) / P +
                        "," +
                        (0 | (r * P)) / P +
                        "," +
                        (0 | (i * P)) / P +
                        "," +
                        (0 | (n * P)) / P +
                        "," +
                        F +
                        "," +
                        I +
                        ")"),
                      N && bt
                        ? this.t.setAttribute("transform", "matrix(" + T)
                        : (S[Pt] =
                            (O.xPercent || O.yPercent
                              ? "translate(" +
                                O.xPercent +
                                "%," +
                                O.yPercent +
                                "%) matrix("
                              : "matrix(") + T))
                    : (S[Pt] =
                        (O.xPercent || O.yPercent
                          ? "translate(" +
                            O.xPercent +
                            "%," +
                            O.yPercent +
                            "%) matrix("
                          : "matrix(") +
                        C +
                        ",0,0," +
                        D +
                        "," +
                        F +
                        "," +
                        I +
                        ")");
                else {
                  if (
                    (f &&
                      ((d = 1e-4) > C && C > -d && (C = M = 2e-5),
                      d > D && D > -d && (D = M = 2e-5),
                      !L || O.z || O.rotationX || O.rotationY || (L = 0)),
                    k || O.skewX)
                  )
                    (k *= z),
                      (m = e = Math.cos(k)),
                      (g = r = Math.sin(k)),
                      O.skewX &&
                        ((k -= O.skewX * z),
                        (m = Math.cos(k)),
                        (g = Math.sin(k)),
                        "simple" === O.skewType &&
                          ((v = Math.tan(O.skewX * z)),
                          (m *= v = Math.sqrt(1 + v * v)),
                          (g *= v),
                          O.skewY && ((e *= v), (r *= v)))),
                      (i = -g),
                      (n = m);
                  else {
                    if (!(A || R || 1 !== M || L || N))
                      return void (S[Pt] =
                        (O.xPercent || O.yPercent
                          ? "translate(" +
                            O.xPercent +
                            "%," +
                            O.yPercent +
                            "%) translate3d("
                          : "translate3d(") +
                        F +
                        "px," +
                        I +
                        "px," +
                        X +
                        "px)" +
                        (1 !== C || 1 !== D
                          ? " scale(" + C + "," + D + ")"
                          : ""));
                    (e = n = 1), (i = r = 0);
                  }
                  (h = 1),
                    (s = a = o = l = _ = u = 0),
                    (c = L ? -1 / L : 0),
                    (p = O.zOrigin),
                    (d = 1e-6),
                    (x = ","),
                    (b = "0"),
                    (k = A * z) &&
                      ((m = Math.cos(k)),
                      (o = -(g = Math.sin(k))),
                      (_ = c * -g),
                      (s = e * g),
                      (a = r * g),
                      (h = m),
                      (c *= m),
                      (e *= m),
                      (r *= m)),
                    (k = R * z) &&
                      ((v = i * (m = Math.cos(k)) + s * (g = Math.sin(k))),
                      (y = n * m + a * g),
                      (l = h * g),
                      (u = c * g),
                      (s = i * -g + s * m),
                      (a = n * -g + a * m),
                      (h *= m),
                      (c *= m),
                      (i = v),
                      (n = y)),
                    1 !== M && ((s *= M), (a *= M), (h *= M), (c *= M)),
                    1 !== D && ((i *= D), (n *= D), (l *= D), (u *= D)),
                    1 !== C && ((e *= C), (r *= C), (o *= C), (_ *= C)),
                    (p || N) &&
                      (p && ((F += s * -p), (I += a * -p), (X += h * -p + p)),
                      N &&
                        ((F +=
                          O.xOrigin -
                          (O.xOrigin * e + O.yOrigin * i) +
                          O.xOffset),
                        (I +=
                          O.yOrigin -
                          (O.xOrigin * r + O.yOrigin * n) +
                          O.yOffset)),
                      d > F && F > -d && (F = b),
                      d > I && I > -d && (I = b),
                      d > X && X > -d && (X = 0)),
                    (T =
                      O.xPercent || O.yPercent
                        ? "translate(" +
                          O.xPercent +
                          "%," +
                          O.yPercent +
                          "%) matrix3d("
                        : "matrix3d("),
                    (T +=
                      (d > e && e > -d ? b : e) +
                      x +
                      (d > r && r > -d ? b : r) +
                      x +
                      (d > o && o > -d ? b : o)),
                    (T +=
                      x +
                      (d > _ && _ > -d ? b : _) +
                      x +
                      (d > i && i > -d ? b : i) +
                      x +
                      (d > n && n > -d ? b : n)),
                    R || A
                      ? ((T +=
                          x +
                          (d > l && l > -d ? b : l) +
                          x +
                          (d > u && u > -d ? b : u) +
                          x +
                          (d > s && s > -d ? b : s)),
                        (T +=
                          x +
                          (d > a && a > -d ? b : a) +
                          x +
                          (d > h && h > -d ? b : h) +
                          x +
                          (d > c && c > -d ? b : c) +
                          x))
                      : (T += ",0,0,0,0,1,0,"),
                    (T += F + x + I + x + X + x + (L ? 1 + -X / L : 1) + ")"),
                    (S[Pt] = T);
                }
              });
        ((h = Rt.prototype).x =
          h.y =
          h.z =
          h.skewX =
          h.skewY =
          h.rotation =
          h.rotationX =
          h.rotationY =
          h.zOrigin =
          h.xPercent =
          h.yPercent =
          h.xOffset =
          h.yOffset =
            0),
          (h.scaleX = h.scaleY = h.scaleZ = 1),
          Tt(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser: function (t, e, i, s, n, o, l) {
                if (s._lastParsedTransform === l) return n;
                s._lastParsedTransform = l;
                var h,
                  _,
                  u,
                  c,
                  f,
                  p,
                  d,
                  m,
                  g,
                  v,
                  y = t._gsTransform,
                  T = t.style,
                  x = 1e-6,
                  b = wt.length,
                  w = l,
                  P = {},
                  O = "transformOrigin";
                if (
                  (l.display
                    ? ((c = $(t, "display")),
                      (T.display = "block"),
                      (h = Nt(t, r, !0, l.parseTransform)),
                      (T.display = c))
                    : (h = Nt(t, r, !0, l.parseTransform)),
                  (s._transform = h),
                  "string" == typeof w.transform && Pt)
                )
                  ((c = L.style)[Pt] = w.transform),
                    (c.display = "block"),
                    (c.position = "absolute"),
                    X.body.appendChild(L),
                    (_ = Nt(L, null, !1)),
                    X.body.removeChild(L),
                    _.perspective || (_.perspective = h.perspective),
                    null != w.xPercent &&
                      (_.xPercent = nt(w.xPercent, h.xPercent)),
                    null != w.yPercent &&
                      (_.yPercent = nt(w.yPercent, h.yPercent));
                else if ("object" == typeof w) {
                  if (
                    ((_ = {
                      scaleX: nt(
                        null != w.scaleX ? w.scaleX : w.scale,
                        h.scaleX
                      ),
                      scaleY: nt(
                        null != w.scaleY ? w.scaleY : w.scale,
                        h.scaleY
                      ),
                      scaleZ: nt(w.scaleZ, h.scaleZ),
                      x: nt(w.x, h.x),
                      y: nt(w.y, h.y),
                      z: nt(w.z, h.z),
                      xPercent: nt(w.xPercent, h.xPercent),
                      yPercent: nt(w.yPercent, h.yPercent),
                      perspective: nt(w.transformPerspective, h.perspective),
                    }),
                    null != (m = w.directionalRotation))
                  )
                    if ("object" == typeof m) for (c in m) w[c] = m[c];
                    else w.rotation = m;
                  "string" == typeof w.x &&
                    -1 !== w.x.indexOf("%") &&
                    ((_.x = 0), (_.xPercent = nt(w.x, h.xPercent))),
                    "string" == typeof w.y &&
                      -1 !== w.y.indexOf("%") &&
                      ((_.y = 0), (_.yPercent = nt(w.y, h.yPercent))),
                    (_.rotation = at(
                      "rotation" in w
                        ? w.rotation
                        : "shortRotation" in w
                        ? w.shortRotation + "_short"
                        : "rotationZ" in w
                        ? w.rotationZ
                        : h.rotation,
                      h.rotation,
                      "rotation",
                      P
                    )),
                    kt &&
                      ((_.rotationX = at(
                        "rotationX" in w
                          ? w.rotationX
                          : "shortRotationX" in w
                          ? w.shortRotationX + "_short"
                          : h.rotationX || 0,
                        h.rotationX,
                        "rotationX",
                        P
                      )),
                      (_.rotationY = at(
                        "rotationY" in w
                          ? w.rotationY
                          : "shortRotationY" in w
                          ? w.shortRotationY + "_short"
                          : h.rotationY || 0,
                        h.rotationY,
                        "rotationY",
                        P
                      ))),
                    (_.skewX =
                      null == w.skewX ? h.skewX : at(w.skewX, h.skewX)),
                    (_.skewY =
                      null == w.skewY ? h.skewY : at(w.skewY, h.skewY)),
                    (u = _.skewY - h.skewY) &&
                      ((_.skewX += u), (_.rotation += u));
                }
                for (
                  kt &&
                    null != w.force3D &&
                    ((h.force3D = w.force3D), (d = !0)),
                    h.skewType = w.skewType || h.skewType || a.defaultSkewType,
                    (p =
                      h.force3D ||
                      h.z ||
                      h.rotationX ||
                      h.rotationY ||
                      _.z ||
                      _.rotationX ||
                      _.rotationY ||
                      _.perspective) ||
                      null == w.scale ||
                      (_.scaleZ = 1);
                  --b > -1;

                )
                  ((f = _[(i = wt[b])] - h[i]) > x ||
                    -x > f ||
                    null != w[i] ||
                    null != I[i]) &&
                    ((d = !0),
                    (n = new dt(h, i, h[i], f, n)),
                    i in P && (n.e = P[i]),
                    (n.xs0 = 0),
                    (n.plugin = o),
                    s._overwriteProps.push(n.n));
                return (
                  (f = w.transformOrigin),
                  h.svg &&
                    (f || w.svgOrigin) &&
                    ((g = h.xOffset),
                    (v = h.yOffset),
                    zt(t, st(f), _, w.svgOrigin, w.smoothOrigin),
                    (n = mt(
                      h,
                      "xOrigin",
                      (y ? h : _).xOrigin,
                      _.xOrigin,
                      n,
                      O
                    )),
                    (n = mt(
                      h,
                      "yOrigin",
                      (y ? h : _).yOrigin,
                      _.yOrigin,
                      n,
                      O
                    )),
                    (g !== h.xOffset || v !== h.yOffset) &&
                      ((n = mt(
                        h,
                        "xOffset",
                        y ? g : h.xOffset,
                        h.xOffset,
                        n,
                        O
                      )),
                      (n = mt(
                        h,
                        "yOffset",
                        y ? v : h.yOffset,
                        h.yOffset,
                        n,
                        O
                      ))),
                    (f = bt ? null : "0px 0px")),
                  (f || (kt && p && h.zOrigin)) &&
                    (Pt
                      ? ((d = !0),
                        (i = St),
                        (f = (f || $(t, i, r, !1, "50% 50%")) + ""),
                        ((n = new dt(T, i, 0, 0, n, -1, O)).b = T[i]),
                        (n.plugin = o),
                        kt
                          ? ((c = h.zOrigin),
                            (f = f.split(" ")),
                            (h.zOrigin =
                              (f.length > 2 && (0 === c || "0px" !== f[2])
                                ? parseFloat(f[2])
                                : c) || 0),
                            (n.xs0 = n.e =
                              f[0] + " " + (f[1] || "50%") + " 0px"),
                            ((n = new dt(h, "zOrigin", 0, 0, n, -1, n.n)).b =
                              c),
                            (n.xs0 = n.e = h.zOrigin))
                          : (n.xs0 = n.e = f))
                      : st(f + "", h)),
                  d &&
                    (s._transformType =
                      (h.svg && bt) || (!p && 3 !== this._transformType)
                        ? 2
                        : 3),
                  n
                );
              },
              prefix: !0,
            }
          ),
          Tt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          Tt("borderRadius", {
            defaultValue: "0px",
            parser: function (t, e, i, n, a) {
              e = this.format(e);
              var o,
                l,
                h,
                _,
                u,
                c,
                f,
                p,
                d,
                m,
                g,
                v,
                y,
                T,
                x,
                b,
                w = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius",
                ],
                P = t.style;
              for (
                d = parseFloat(t.offsetWidth),
                  m = parseFloat(t.offsetHeight),
                  o = e.split(" "),
                  l = 0;
                w.length > l;
                l++
              )
                this.p.indexOf("border") && (w[l] = Z(w[l])),
                  -1 !== (u = _ = $(t, w[l], r, !1, "0px")).indexOf(" ") &&
                    ((_ = u.split(" ")), (u = _[0]), (_ = _[1])),
                  (c = h = o[l]),
                  (f = parseFloat(u)),
                  (v = u.substr((f + "").length)),
                  (y = "=" === c.charAt(1))
                    ? ((p = parseInt(c.charAt(0) + "1", 10)),
                      (c = c.substr(2)),
                      (p *= parseFloat(c)),
                      (g = c.substr((p + "").length - (0 > p ? 1 : 0)) || ""))
                    : ((p = parseFloat(c)), (g = c.substr((p + "").length))),
                  "" === g && (g = s[i] || v),
                  g !== v &&
                    ((T = Q(t, "borderLeft", f, v)),
                    (x = Q(t, "borderTop", f, v)),
                    "%" === g
                      ? ((u = (T / d) * 100 + "%"), (_ = (x / m) * 100 + "%"))
                      : "em" === g
                      ? ((u = T / (b = Q(t, "borderLeft", 1, "em")) + "em"),
                        (_ = x / b + "em"))
                      : ((u = T + "px"), (_ = x + "px")),
                    y &&
                      ((c = parseFloat(u) + p + g),
                      (h = parseFloat(_) + p + g))),
                  (a = gt(P, w[l], u + " " + _, c + " " + h, !1, "0px", a));
              return a;
            },
            prefix: !0,
            formatter: ct("0px 0px 0px 0px", !1, !0),
          }),
          Tt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (t, e, i, s, n, a) {
              var o,
                l,
                h,
                _,
                u,
                c,
                f = "background-position",
                p = r || G(t, null),
                m = this.format(
                  (p
                    ? d
                      ? p.getPropertyValue(f + "-x") +
                        " " +
                        p.getPropertyValue(f + "-y")
                      : p.getPropertyValue(f)
                    : t.currentStyle.backgroundPositionX +
                      " " +
                      t.currentStyle.backgroundPositionY) || "0 0"
                ),
                g = this.format(e);
              if (
                (-1 !== m.indexOf("%")) != (-1 !== g.indexOf("%")) &&
                (c = $(t, "backgroundImage").replace(k, "")) &&
                "none" !== c
              ) {
                for (
                  o = m.split(" "),
                    l = g.split(" "),
                    E.setAttribute("src", c),
                    h = 2;
                  --h > -1;

                )
                  (_ = -1 !== (m = o[h]).indexOf("%")) !==
                    (-1 !== l[h].indexOf("%")) &&
                    ((u =
                      0 === h
                        ? t.offsetWidth - E.width
                        : t.offsetHeight - E.height),
                    (o[h] = _
                      ? (parseFloat(m) / 100) * u + "px"
                      : (parseFloat(m) / u) * 100 + "%"));
                m = o.join(" ");
              }
              return this.parseComplex(t.style, m, g, n, a);
            },
            formatter: st,
          }),
          Tt("backgroundSize", { defaultValue: "0 0", formatter: st }),
          Tt("perspective", { defaultValue: "0px", prefix: !0 }),
          Tt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          Tt("transformStyle", { prefix: !0 }),
          Tt("backfaceVisibility", { prefix: !0 }),
          Tt("userSelect", { prefix: !0 }),
          Tt("margin", {
            parser: ft("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          Tt("padding", {
            parser: ft("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          Tt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, s, n, a) {
              var o, l, h;
              return (
                9 > d
                  ? ((l = t.currentStyle),
                    (h = 8 > d ? " " : ","),
                    (o =
                      "rect(" +
                      l.clipTop +
                      h +
                      l.clipRight +
                      h +
                      l.clipBottom +
                      h +
                      l.clipLeft +
                      ")"),
                    (e = this.format(e).split(",").join(h)))
                  : ((o = this.format($(t, this.p, r, !1, this.dflt))),
                    (e = this.format(e))),
                this.parseComplex(t.style, o, e, n, a)
              );
            },
          }),
          Tt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          Tt("autoRound,strictUnits", {
            parser: function (t, e, i, s, r) {
              return r;
            },
          }),
          Tt("border", {
            defaultValue: "0px solid #000",
            parser: function (t, e, i, s, n, a) {
              return this.parseComplex(
                t.style,
                this.format(
                  $(t, "borderTopWidth", r, !1, "0px") +
                    " " +
                    $(t, "borderTopStyle", r, !1, "solid") +
                    " " +
                    $(t, "borderTopColor", r, !1, "#000")
                ),
                this.format(e),
                n,
                a
              );
            },
            color: !0,
            formatter: function (t) {
              var e = t.split(" ");
              return (
                e[0] +
                " " +
                (e[1] || "solid") +
                " " +
                (t.match(ut) || ["#000"])[0]
              );
            },
          }),
          Tt("borderWidth", {
            parser: ft(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          Tt("float,cssFloat,styleFloat", {
            parser: function (t, e, i, s, r) {
              var n = t.style,
                a = "cssFloat" in n ? "cssFloat" : "styleFloat";
              return new dt(n, a, 0, 0, r, -1, i, !1, 0, n[a], e);
            },
          });
        var Yt = function (t) {
          var e,
            i = this.t,
            s = i.filter || $(this.data, "filter") || "",
            r = 0 | (this.s + this.c * t);
          100 === r &&
            (-1 === s.indexOf("atrix(") &&
            -1 === s.indexOf("radient(") &&
            -1 === s.indexOf("oader(")
              ? (i.removeAttribute("filter"), (e = !$(this.data, "filter")))
              : ((i.filter = s.replace(w, "")), (e = !0))),
            e ||
              (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"),
              -1 === s.indexOf("pacity")
                ? (0 === r && this.xn1) ||
                  (i.filter = s + " alpha(opacity=" + r + ")")
                : (i.filter = s.replace(x, "opacity=" + r)));
        };
        Tt("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (t, e, i, s, n, a) {
            var o = parseFloat($(t, "opacity", r, !1, "1")),
              l = t.style,
              h = "autoAlpha" === i;
            return (
              "string" == typeof e &&
                "=" === e.charAt(1) &&
                (e =
                  ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
              h &&
                1 === o &&
                "hidden" === $(t, "visibility", r) &&
                0 !== e &&
                (o = 0),
              j
                ? (n = new dt(l, "opacity", o, e - o, n))
                : (((n = new dt(l, "opacity", 100 * o, 100 * (e - o), n)).xn1 =
                    h ? 1 : 0),
                  (l.zoom = 1),
                  (n.type = 2),
                  (n.b = "alpha(opacity=" + n.s + ")"),
                  (n.e = "alpha(opacity=" + (n.s + n.c) + ")"),
                  (n.data = t),
                  (n.plugin = a),
                  (n.setRatio = Yt)),
              h &&
                (((n = new dt(
                  l,
                  "visibility",
                  0,
                  0,
                  n,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== o ? "inherit" : "hidden",
                  0 === e ? "hidden" : "inherit"
                )).xs0 = "inherit"),
                s._overwriteProps.push(n.n),
                s._overwriteProps.push(i)),
              n
            );
          },
        });
        var Bt = function (t, e) {
            e &&
              (t.removeProperty
                ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) &&
                    (e = "-" + e),
                  t.removeProperty(e.replace(O, "-$1").toLowerCase()))
                : t.removeAttribute(e));
          },
          jt = function (t) {
            if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
              this.t.setAttribute("class", 0 === t ? this.b : this.e);
              for (var e = this.data, i = this.t.style; e; )
                e.v ? (i[e.p] = e.v) : Bt(i, e.p), (e = e._next);
              1 === t &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null);
            } else
              this.t.getAttribute("class") !== this.e &&
                this.t.setAttribute("class", this.e);
          };
        Tt("className", {
          parser: function (t, e, s, n, a, o, l) {
            var h,
              _,
              u,
              c,
              f,
              p = t.getAttribute("class") || "",
              d = t.style.cssText;
            if (
              (((a = n._classNamePT = new dt(t, s, 0, 0, a, 2)).setRatio = jt),
              (a.pr = -11),
              (i = !0),
              (a.b = p),
              (_ = K(t, r)),
              (u = t._gsClassPT))
            ) {
              for (c = {}, f = u.data; f; ) (c[f.p] = 1), (f = f._next);
              u.setRatio(1);
            }
            return (
              (t._gsClassPT = a),
              (a.e =
                "=" !== e.charAt(1)
                  ? e
                  : p.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") +
                    ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
              t.setAttribute("class", a.e),
              (h = J(t, _, K(t), l, c)),
              t.setAttribute("class", p),
              (a.data = h.firstMPT),
              (t.style.cssText = d),
              (a.xfirst = n.parse(t, h.difs, a, o))
            );
          },
        });
        var Ut = function (t) {
          if (
            (1 === t || 0 === t) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var e,
              i,
              s,
              r,
              n,
              a = this.t.style,
              o = l.transform.parse;
            if ("all" === this.e) (a.cssText = ""), (r = !0);
            else
              for (
                s = (e = this.e.split(" ").join("").split(",")).length;
                --s > -1;

              )
                (i = e[s]),
                  l[i] &&
                    (l[i].parse === o
                      ? (r = !0)
                      : (i = "transformOrigin" === i ? St : l[i].p)),
                  Bt(a, i);
            r &&
              (Bt(a, Pt),
              (n = this.t._gsTransform) &&
                (n.svg && this.t.removeAttribute("data-svg-origin"),
                delete this.t._gsTransform));
          }
        };
        for (
          Tt("clearProps", {
            parser: function (t, e, s, r, n) {
              return (
                ((n = new dt(t, s, 0, 0, n, 2)).setRatio = Ut),
                (n.e = e),
                (n.pr = -10),
                (n.data = r._tween),
                (i = !0),
                n
              );
            },
          }),
            h = "bezier,throwProps,physicsProps,physics2D".split(","),
            vt = h.length;
          vt--;

        )
          xt(h[vt]);
        ((h = a.prototype)._firstPT =
          h._lastParsedTransform =
          h._transform =
            null),
          (h._onInitTween = function (t, e, o) {
            if (!t.nodeType) return !1;
            (this._target = t),
              (this._tween = o),
              (this._vars = e),
              (_ = e.autoRound),
              (i = !1),
              (s = e.suffixMap || a.suffixMap),
              (r = G(t, "")),
              (n = this._overwriteProps);
            var h,
              f,
              d,
              m,
              g,
              v,
              y,
              T,
              x,
              w = t.style;
            if (
              (u &&
                "" === w.zIndex &&
                ("auto" === (h = $(t, "zIndex", r)) || "" === h) &&
                this._addLazySet(w, "zIndex", 0),
              "string" == typeof e &&
                ((m = w.cssText),
                (h = K(t, r)),
                (w.cssText = m + ";" + e),
                (h = J(t, h, K(t)).difs),
                !j && b.test(e) && (h.opacity = parseFloat(RegExp.$1)),
                (e = h),
                (w.cssText = m)),
              (this._firstPT = f =
                e.className
                  ? l.className.parse(
                      t,
                      e.className,
                      "className",
                      this,
                      null,
                      null,
                      e
                    )
                  : this.parse(t, e, null)),
              this._transformType)
            ) {
              for (
                x = 3 === this._transformType,
                  Pt
                    ? c &&
                      ((u = !0),
                      "" === w.zIndex &&
                        ("auto" === (y = $(t, "zIndex", r)) || "" === y) &&
                        this._addLazySet(w, "zIndex", 0),
                      p &&
                        this._addLazySet(
                          w,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (x ? "visible" : "hidden")
                        ))
                    : (w.zoom = 1),
                  d = f;
                d && d._next;

              )
                d = d._next;
              (T = new dt(t, "transform", 0, 0, null, 2)),
                this._linkCSSP(T, null, d),
                (T.setRatio = Pt ? Et : Lt),
                (T.data = this._transform || Nt(t, r, !0)),
                (T.tween = o),
                (T.pr = -1),
                n.pop();
            }
            if (i) {
              for (; f; ) {
                for (v = f._next, d = m; d && d.pr > f.pr; ) d = d._next;
                (f._prev = d ? d._prev : g) ? (f._prev._next = f) : (m = f),
                  (f._next = d) ? (d._prev = f) : (g = f),
                  (f = v);
              }
              this._firstPT = m;
            }
            return !0;
          }),
          (h.parse = function (t, e, i, n) {
            var a,
              o,
              h,
              u,
              c,
              f,
              p,
              d,
              m,
              g,
              v = t.style;
            for (a in e)
              (f = e[a]),
                (o = l[a])
                  ? (i = o.parse(t, f, a, this, i, n, e))
                  : ((c = $(t, a, r) + ""),
                    (m = "string" == typeof f),
                    "color" === a ||
                    "fill" === a ||
                    "stroke" === a ||
                    -1 !== a.indexOf("Color") ||
                    (m && P.test(f))
                      ? (m ||
                          (f =
                            ((f = ht(f)).length > 3 ? "rgba(" : "rgb(") +
                            f.join(",") +
                            ")"),
                        (i = gt(v, a, c, f, !0, "transparent", i, 0, n)))
                      : !m || (-1 === f.indexOf(" ") && -1 === f.indexOf(","))
                      ? ((p =
                          (h = parseFloat(c)) || 0 === h
                            ? c.substr((h + "").length)
                            : ""),
                        ("" === c || "auto" === c) &&
                          ("width" === a || "height" === a
                            ? ((h = it(t, a, r)), (p = "px"))
                            : "left" === a || "top" === a
                            ? ((h = H(t, a, r)), (p = "px"))
                            : ((h = "opacity" !== a ? 0 : 1), (p = ""))),
                        (g = m && "=" === f.charAt(1))
                          ? ((u = parseInt(f.charAt(0) + "1", 10)),
                            (f = f.substr(2)),
                            (u *= parseFloat(f)),
                            (d = f.replace(T, "")))
                          : ((u = parseFloat(f)),
                            (d = m ? f.replace(T, "") : "")),
                        "" === d && (d = a in s ? s[a] : p),
                        (f = u || 0 === u ? (g ? u + h : u) + d : e[a]),
                        p !== d &&
                          "" !== d &&
                          (u || 0 === u) &&
                          h &&
                          ((h = Q(t, a, h, p)),
                          "%" === d
                            ? ((h /= Q(t, a, 100, "%") / 100),
                              !0 !== e.strictUnits && (c = h + "%"))
                            : "em" === d || "rem" === d
                            ? (h /= Q(t, a, 1, d))
                            : "px" !== d && ((u = Q(t, a, u, d)), (d = "px")),
                          g && (u || 0 === u) && (f = u + h + d)),
                        g && (u += h),
                        (!h && 0 !== h) || (!u && 0 !== u)
                          ? void 0 !== v[a] &&
                            (f || ("NaN" != f + "" && null != f))
                            ? ((i = new dt(
                                v,
                                a,
                                u || h || 0,
                                0,
                                i,
                                -1,
                                a,
                                !1,
                                0,
                                c,
                                f
                              )).xs0 =
                                "none" !== f ||
                                ("display" !== a && -1 === a.indexOf("Style"))
                                  ? f
                                  : c)
                            : V("invalid " + a + " tween value: " + e[a])
                          : ((i = new dt(
                              v,
                              a,
                              h,
                              u - h,
                              i,
                              0,
                              a,
                              !1 !== _ && ("px" === d || "zIndex" === a),
                              0,
                              c,
                              f
                            )).xs0 = d))
                      : (i = gt(v, a, c, f, !0, null, i, 0, n))),
                n && i && !i.plugin && (i.plugin = n);
            return i;
          }),
          (h.setRatio = function (t) {
            var e,
              i,
              s,
              r = this._firstPT,
              n = 1e-6;
            if (
              1 !== t ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                t ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                -1e-6 === this._tween._rawPrevTime
              )
                for (; r; ) {
                  if (
                    ((e = r.c * t + r.s),
                    r.r ? (e = Math.round(e)) : n > e && e > -n && (e = 0),
                    r.type)
                  )
                    if (1 === r.type)
                      if (2 === (s = r.l))
                        r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                      else if (3 === s)
                        r.t[r.p] =
                          r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                      else if (4 === s)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4;
                      else if (5 === s)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4 +
                          r.xn4 +
                          r.xs5;
                      else {
                        for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++)
                          i += r["xn" + s] + r["xs" + (s + 1)];
                        r.t[r.p] = i;
                      }
                    else
                      -1 === r.type
                        ? (r.t[r.p] = r.xs0)
                        : r.setRatio && r.setRatio(t);
                  else r.t[r.p] = e + r.xs0;
                  r = r._next;
                }
              else
                for (; r; )
                  2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t),
                    (r = r._next);
            else
              for (; r; ) {
                if (2 !== r.type)
                  if (r.r && -1 !== r.type)
                    if (((e = Math.round(r.s + r.c)), r.type)) {
                      if (1 === r.type) {
                        for (
                          s = r.l, i = r.xs0 + e + r.xs1, s = 1;
                          r.l > s;
                          s++
                        )
                          i += r["xn" + s] + r["xs" + (s + 1)];
                        r.t[r.p] = i;
                      }
                    } else r.t[r.p] = e + r.xs0;
                  else r.t[r.p] = r.e;
                else r.setRatio(t);
                r = r._next;
              }
          }),
          (h._enableTransforms = function (t) {
            (this._transform = this._transform || Nt(this._target, r, !0)),
              (this._transformType =
                (this._transform.svg && bt) || (!t && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        var Vt = function () {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        };
        (h._addLazySet = function (t, e, i) {
          var s = (this._firstPT = new dt(t, e, 0, 0, this._firstPT, 2));
          (s.e = i), (s.setRatio = Vt), (s.data = this);
        }),
          (h._linkCSSP = function (t, e, i, s) {
            return (
              t &&
                (e && (e._prev = t),
                t._next && (t._next._prev = t._prev),
                t._prev
                  ? (t._prev._next = t._next)
                  : this._firstPT === t &&
                    ((this._firstPT = t._next), (s = !0)),
                i
                  ? (i._next = t)
                  : s || null !== this._firstPT || (this._firstPT = t),
                (t._next = e),
                (t._prev = i)),
              t
            );
          }),
          (h._kill = function (e) {
            var i,
              s,
              r,
              n = e;
            if (e.autoAlpha || e.alpha) {
              for (s in ((n = {}), e)) n[s] = e[s];
              (n.opacity = 1), n.autoAlpha && (n.visibility = 1);
            }
            return (
              e.className &&
                (i = this._classNamePT) &&
                ((r = i.xfirst) && r._prev
                  ? this._linkCSSP(r._prev, i._next, r._prev._prev)
                  : r === this._firstPT && (this._firstPT = i._next),
                i._next && this._linkCSSP(i._next, i._next._next, r._prev),
                (this._classNamePT = null)),
              t.prototype._kill.call(this, n)
            );
          });
        var qt = function (t, e, i) {
          var s, r, n, a;
          if (t.slice) for (r = t.length; --r > -1; ) qt(t[r], e, i);
          else
            for (r = (s = t.childNodes).length; --r > -1; )
              (a = (n = s[r]).type),
                n.style && (e.push(K(n)), i && i.push(n)),
                (1 !== a && 9 !== a && 11 !== a) ||
                  !n.childNodes.length ||
                  qt(n, e, i);
        };
        return (
          (a.cascadeTo = function (t, i, s) {
            var r,
              n,
              a,
              o,
              l = e.to(t, i, s),
              h = [l],
              _ = [],
              u = [],
              c = [],
              f = e._internals.reservedProps;
            for (
              t = l._targets || l.target,
                qt(t, _, c),
                l.render(i, !0, !0),
                qt(t, u),
                l.render(0, !0, !0),
                l._enabled(!0),
                r = c.length;
              --r > -1;

            )
              if ((n = J(c[r], _[r], u[r])).firstMPT) {
                for (a in ((n = n.difs), s)) f[a] && (n[a] = s[a]);
                for (a in ((o = {}), n)) o[a] = _[r][a];
                h.push(e.fromTo(c[r], i, o, n));
              }
            return h;
          }),
          t.activate([a]),
          a
        );
      },
      !0
    ),
    (function () {
      var t = _gsScope._gsDefine.plugin({
          propName: "roundProps",
          version: "1.5",
          priority: -1,
          API: 2,
          init: function (t, e, i) {
            return (this._tween = i), !0;
          },
        }),
        e = function (t) {
          for (; t; ) t.f || t.blob || (t.r = 1), (t = t._next);
        },
        i = t.prototype;
      (i._onInitAllProps = function () {
        for (
          var t,
            i,
            s,
            r = this._tween,
            n = r.vars.roundProps.join
              ? r.vars.roundProps
              : r.vars.roundProps.split(","),
            a = n.length,
            o = {},
            l = r._propLookup.roundProps;
          --a > -1;

        )
          o[n[a]] = 1;
        for (a = n.length; --a > -1; )
          for (t = n[a], i = r._firstPT; i; )
            (s = i._next),
              i.pg
                ? i.t._roundProps(o, !0)
                : i.n === t &&
                  (2 === i.f && i.t
                    ? e(i.t._firstPT)
                    : (this._add(i.t, t, i.s, i.c),
                      s && (s._prev = i._prev),
                      i._prev
                        ? (i._prev._next = s)
                        : r._firstPT === i && (r._firstPT = s),
                      (i._next = i._prev = null),
                      (r._propLookup[t] = l))),
              (i = s);
        return !1;
      }),
        (i._add = function (t, e, i, s) {
          this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e);
        });
    })(),
    _gsScope._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.5.0",
      init: function (t, e) {
        var i;
        if ("function" != typeof t.setAttribute) return !1;
        for (i in e)
          this._addTween(
            t,
            "setAttribute",
            t.getAttribute(i) + "",
            e[i] + "",
            i,
            !1,
            i
          ),
            this._overwriteProps.push(i);
        return !0;
      },
    }),
    (_gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.2.1",
      API: 2,
      init: function (t, e) {
        "object" != typeof e && (e = { rotation: e }), (this.finals = {});
        var i,
          s,
          r,
          n,
          a,
          o = !0 === e.useRadians ? 2 * Math.PI : 360,
          l = 1e-6;
        for (i in e)
          "useRadians" !== i &&
            ((s = (a = (e[i] + "").split("_"))[0]),
            (r = parseFloat(
              "function" != typeof t[i]
                ? t[i]
                : t[
                    i.indexOf("set") ||
                    "function" != typeof t["get" + i.substr(3)]
                      ? i
                      : "get" + i.substr(3)
                  ]()
            )),
            (n =
              (this.finals[i] =
                "string" == typeof s && "=" === s.charAt(1)
                  ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))
                  : Number(s) || 0) - r),
            a.length &&
              (-1 !== (s = a.join("_")).indexOf("short") &&
                (n %= o) !== n % (o / 2) &&
                (n = 0 > n ? n + o : n - o),
              -1 !== s.indexOf("_cw") && 0 > n
                ? (n = ((n + 9999999999 * o) % o) - (0 | (n / o)) * o)
                : -1 !== s.indexOf("ccw") &&
                  n > 0 &&
                  (n = ((n - 9999999999 * o) % o) - (0 | (n / o)) * o)),
            (n > l || -l > n) &&
              (this._addTween(t, i, r, r + n, i),
              this._overwriteProps.push(i)));
        return !0;
      },
      set: function (t) {
        var e;
        if (1 !== t) this._super.setRatio.call(this, t);
        else
          for (e = this._firstPT; e; )
            e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]),
              (e = e._next);
      },
    })._autoCSS = !0),
    _gsScope._gsDefine(
      "easing.Back",
      ["easing.Ease"],
      function (t) {
        var e,
          i,
          s,
          r = _gsScope.GreenSockGlobals || _gsScope,
          n = r.com.greensock,
          a = 2 * Math.PI,
          o = Math.PI / 2,
          l = n._class,
          h = function (e, i) {
            var s = l("easing." + e, function () {}, !0),
              r = (s.prototype = new t());
            return (r.constructor = s), (r.getRatio = i), s;
          },
          _ = t.register || function () {},
          u = function (t, e, i, s) {
            var r = l(
              "easing." + t,
              { easeOut: new e(), easeIn: new i(), easeInOut: new s() },
              !0
            );
            return _(r, t), r;
          },
          c = function (t, e, i) {
            (this.t = t),
              (this.v = e),
              i &&
                ((this.next = i),
                (i.prev = this),
                (this.c = i.v - e),
                (this.gap = i.t - t));
          },
          f = function (e, i) {
            var s = l(
                "easing." + e,
                function (t) {
                  (this._p1 = t || 0 === t ? t : 1.70158),
                    (this._p2 = 1.525 * this._p1);
                },
                !0
              ),
              r = (s.prototype = new t());
            return (
              (r.constructor = s),
              (r.getRatio = i),
              (r.config = function (t) {
                return new s(t);
              }),
              s
            );
          },
          p = u(
            "Back",
            f("BackOut", function (t) {
              return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
            }),
            f("BackIn", function (t) {
              return t * t * ((this._p1 + 1) * t - this._p1);
            }),
            f("BackInOut", function (t) {
              return 1 > (t *= 2)
                ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
            })
          ),
          d = l(
            "easing.SlowMo",
            function (t, e, i) {
              (e = e || 0 === e ? e : 0.7),
                null == t ? (t = 0.7) : t > 1 && (t = 1),
                (this._p = 1 !== t ? e : 0),
                (this._p1 = (1 - t) / 2),
                (this._p2 = t),
                (this._p3 = this._p1 + this._p2),
                (this._calcEnd = !0 === i);
            },
            !0
          ),
          m = (d.prototype = new t());
        return (
          (m.constructor = d),
          (m.getRatio = function (t) {
            var e = t + (0.5 - t) * this._p;
            return this._p1 > t
              ? this._calcEnd
                ? 1 - (t = 1 - t / this._p1) * t
                : e - (t = 1 - t / this._p1) * t * t * t * e
              : t > this._p3
              ? this._calcEnd
                ? 1 - (t = (t - this._p3) / this._p1) * t
                : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
              : this._calcEnd
              ? 1
              : e;
          }),
          (d.ease = new d(0.7, 0.7)),
          (m.config = d.config =
            function (t, e, i) {
              return new d(t, e, i);
            }),
          ((m = (e = l(
            "easing.SteppedEase",
            function (t) {
              (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + 1);
            },
            !0
          )).prototype =
            new t()).constructor = e),
          (m.getRatio = function (t) {
            return (
              0 > t ? (t = 0) : t >= 1 && (t = 0.999999999),
              ((this._p2 * t) >> 0) * this._p1
            );
          }),
          (m.config = e.config =
            function (t) {
              return new e(t);
            }),
          (i = l(
            "easing.RoughEase",
            function (e) {
              for (
                var i,
                  s,
                  r,
                  n,
                  a,
                  o,
                  l = (e = e || {}).taper || "none",
                  h = [],
                  _ = 0,
                  u = 0 | (e.points || 20),
                  f = u,
                  p = !1 !== e.randomize,
                  d = !0 === e.clamp,
                  m = e.template instanceof t ? e.template : null,
                  g = "number" == typeof e.strength ? 0.4 * e.strength : 0.4;
                --f > -1;

              )
                (i = p ? Math.random() : (1 / u) * f),
                  (s = m ? m.getRatio(i) : i),
                  "none" === l
                    ? (r = g)
                    : "out" === l
                    ? (r = (n = 1 - i) * n * g)
                    : "in" === l
                    ? (r = i * i * g)
                    : 0.5 > i
                    ? (r = 0.5 * (n = 2 * i) * n * g)
                    : (r = 0.5 * (n = 2 * (1 - i)) * n * g),
                  p
                    ? (s += Math.random() * r - 0.5 * r)
                    : f % 2
                    ? (s += 0.5 * r)
                    : (s -= 0.5 * r),
                  d && (s > 1 ? (s = 1) : 0 > s && (s = 0)),
                  (h[_++] = { x: i, y: s });
              for (
                h.sort(function (t, e) {
                  return t.x - e.x;
                }),
                  o = new c(1, 1, null),
                  f = u;
                --f > -1;

              )
                (a = h[f]), (o = new c(a.x, a.y, o));
              this._prev = new c(0, 0, 0 !== o.t ? o : o.next);
            },
            !0
          )),
          ((m = i.prototype = new t()).constructor = i),
          (m.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
              for (; e.next && t >= e.t; ) e = e.next;
              e = e.prev;
            } else for (; e.prev && e.t >= t; ) e = e.prev;
            return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
          }),
          (m.config = function (t) {
            return new i(t);
          }),
          (i.ease = new i()),
          u(
            "Bounce",
            h("BounceOut", function (t) {
              return 1 / 2.75 > t
                ? 7.5625 * t * t
                : 2 / 2.75 > t
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : 2.5 / 2.75 > t
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            h("BounceIn", function (t) {
              return 1 / 2.75 > (t = 1 - t)
                ? 1 - 7.5625 * t * t
                : 2 / 2.75 > t
                ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                : 2.5 / 2.75 > t
                ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            }),
            h("BounceInOut", function (t) {
              var e = 0.5 > t;
              return (
                (t =
                  1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1)
                    ? 7.5625 * t * t
                    : 2 / 2.75 > t
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : 2.5 / 2.75 > t
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                e ? 0.5 * (1 - t) : 0.5 * t + 0.5
              );
            })
          ),
          u(
            "Circ",
            h("CircOut", function (t) {
              return Math.sqrt(1 - (t -= 1) * t);
            }),
            h("CircIn", function (t) {
              return -(Math.sqrt(1 - t * t) - 1);
            }),
            h("CircInOut", function (t) {
              return 1 > (t *= 2)
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            })
          ),
          u(
            "Elastic",
            (s = function (e, i, s) {
              var r = l(
                  "easing." + e,
                  function (t, e) {
                    (this._p1 = t >= 1 ? t : 1),
                      (this._p2 = (e || s) / (1 > t ? t : 1)),
                      (this._p3 =
                        (this._p2 / a) * (Math.asin(1 / this._p1) || 0)),
                      (this._p2 = a / this._p2);
                  },
                  !0
                ),
                n = (r.prototype = new t());
              return (
                (n.constructor = r),
                (n.getRatio = i),
                (n.config = function (t, e) {
                  return new r(t, e);
                }),
                r
              );
            })(
              "ElasticOut",
              function (t) {
                return (
                  this._p1 *
                    Math.pow(2, -10 * t) *
                    Math.sin((t - this._p3) * this._p2) +
                  1
                );
              },
              0.3
            ),
            s(
              "ElasticIn",
              function (t) {
                return (
                  -this._p1 *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin((t - this._p3) * this._p2)
                );
              },
              0.3
            ),
            s(
              "ElasticInOut",
              function (t) {
                return 1 > (t *= 2)
                  ? -0.5 *
                      this._p1 *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin((t - this._p3) * this._p2)
                  : 0.5 *
                      this._p1 *
                      Math.pow(2, -10 * (t -= 1)) *
                      Math.sin((t - this._p3) * this._p2) +
                      1;
              },
              0.45
            )
          ),
          u(
            "Expo",
            h("ExpoOut", function (t) {
              return 1 - Math.pow(2, -10 * t);
            }),
            h("ExpoIn", function (t) {
              return Math.pow(2, 10 * (t - 1)) - 0.001;
            }),
            h("ExpoInOut", function (t) {
              return 1 > (t *= 2)
                ? 0.5 * Math.pow(2, 10 * (t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
            })
          ),
          u(
            "Sine",
            h("SineOut", function (t) {
              return Math.sin(t * o);
            }),
            h("SineIn", function (t) {
              return 1 - Math.cos(t * o);
            }),
            h("SineInOut", function (t) {
              return -0.5 * (Math.cos(Math.PI * t) - 1);
            })
          ),
          l(
            "easing.EaseLookup",
            {
              find: function (e) {
                return t.map[e];
              },
            },
            !0
          ),
          _(r.SlowMo, "SlowMo", "ease,"),
          _(i, "RoughEase", "ease,"),
          _(e, "SteppedEase", "ease,"),
          p
        );
      },
      !0
    );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (t, e) {
    "use strict";
    var i = (t.GreenSockGlobals = t.GreenSockGlobals || t);
    if (!i.TweenLite) {
      var s,
        r,
        n,
        a,
        o,
        l = function (t) {
          var e,
            s = t.split("."),
            r = i;
          for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {};
          return r;
        },
        h = l("com.greensock"),
        _ = 1e-10,
        u = function (t) {
          var e,
            i = [],
            s = t.length;
          for (e = 0; e !== s; i.push(t[e++]));
          return i;
        },
        c = function () {},
        f = (function () {
          var t = Object.prototype.toString,
            e = t.call([]);
          return function (i) {
            return (
              null != i &&
              (i instanceof Array ||
                ("object" == typeof i && !!i.push && t.call(i) === e))
            );
          };
        })(),
        p = {},
        d = function (e, s, r, n) {
          (this.sc = p[e] ? p[e].sc : []),
            (p[e] = this),
            (this.gsClass = null),
            (this.func = r);
          var a = [];
          (this.check = function (o) {
            for (var h, _, u, c, f, m = s.length, g = m; --m > -1; )
              (h = p[s[m]] || new d(s[m], [])).gsClass
                ? ((a[m] = h.gsClass), g--)
                : o && h.sc.push(this);
            if (0 === g && r)
              for (
                u = (_ = ("com.greensock." + e).split(".")).pop(),
                  c = l(_.join("."))[u] = this.gsClass = r.apply(r, a),
                  n &&
                    ((i[u] = c),
                    !(f = "undefined" != typeof module && module.exports) &&
                    "function" == typeof define &&
                    define.amd
                      ? define(
                          (t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") +
                            e.split(".").pop(),
                          [],
                          function () {
                            return c;
                          }
                        )
                      : "TweenMax" === e && f && (module.exports = c)),
                  m = 0;
                this.sc.length > m;
                m++
              )
                this.sc[m].check();
          }),
            this.check(!0);
        },
        m = (t._gsDefine = function (t, e, i, s) {
          return new d(t, e, i, s);
        }),
        g = (h._class = function (t, e, i) {
          return (
            (e = e || function () {}),
            m(
              t,
              [],
              function () {
                return e;
              },
              i
            ),
            e
          );
        });
      m.globals = i;
      var v = [0, 0, 1, 1],
        y = [],
        T = g(
          "easing.Ease",
          function (t, e, i, s) {
            (this._func = t),
              (this._type = i || 0),
              (this._power = s || 0),
              (this._params = e ? v.concat(e) : v);
          },
          !0
        ),
        x = (T.map = {}),
        b = (T.register = function (t, e, i, s) {
          for (
            var r,
              n,
              a,
              o,
              l = e.split(","),
              _ = l.length,
              u = (i || "easeIn,easeOut,easeInOut").split(",");
            --_ > -1;

          )
            for (
              n = l[_],
                r = s ? g("easing." + n, null, !0) : h.easing[n] || {},
                a = u.length;
              --a > -1;

            )
              (o = u[a]),
                (x[n + "." + o] =
                  x[o + n] =
                  r[o] =
                    t.getRatio ? t : t[o] || new t());
        });
      for (
        (n = T.prototype)._calcEnd = !1,
          n.getRatio = function (t) {
            if (this._func)
              return (
                (this._params[0] = t), this._func.apply(null, this._params)
              );
            var e = this._type,
              i = this._power,
              s = 1 === e ? 1 - t : 2 === e ? t : 0.5 > t ? 2 * t : 2 * (1 - t);
            return (
              1 === i
                ? (s *= s)
                : 2 === i
                ? (s *= s * s)
                : 3 === i
                ? (s *= s * s * s)
                : 4 === i && (s *= s * s * s * s),
              1 === e ? 1 - s : 2 === e ? s : 0.5 > t ? s / 2 : 1 - s / 2
            );
          },
          r = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
        --r > -1;

      )
        (n = s[r] + ",Power" + r),
          b(new T(null, null, 1, r), n, "easeOut", !0),
          b(
            new T(null, null, 2, r),
            n,
            "easeIn" + (0 === r ? ",easeNone" : "")
          ),
          b(new T(null, null, 3, r), n, "easeInOut");
      (x.linear = h.easing.Linear.easeIn), (x.swing = h.easing.Quad.easeInOut);
      var w = g("events.EventDispatcher", function (t) {
        (this._listeners = {}), (this._eventTarget = t || this);
      });
      ((n = w.prototype).addEventListener = function (t, e, i, s, r) {
        r = r || 0;
        var n,
          l,
          h = this._listeners[t],
          _ = 0;
        for (
          null == h && (this._listeners[t] = h = []), l = h.length;
          --l > -1;

        )
          (n = h[l]).c === e && n.s === i
            ? h.splice(l, 1)
            : 0 === _ && r > n.pr && (_ = l + 1);
        h.splice(_, 0, { c: e, s: i, up: s, pr: r }),
          this !== a || o || a.wake();
      }),
        (n.removeEventListener = function (t, e) {
          var i,
            s = this._listeners[t];
          if (s)
            for (i = s.length; --i > -1; )
              if (s[i].c === e) return void s.splice(i, 1);
        }),
        (n.dispatchEvent = function (t) {
          var e,
            i,
            s,
            r = this._listeners[t];
          if (r)
            for (e = r.length, i = this._eventTarget; --e > -1; )
              (s = r[e]) &&
                (s.up
                  ? s.c.call(s.s || i, { type: t, target: i })
                  : s.c.call(s.s || i));
        });
      var P = t.requestAnimationFrame,
        O = t.cancelAnimationFrame,
        S =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        k = S();
      for (r = (s = ["ms", "moz", "webkit", "o"]).length; --r > -1 && !P; )
        (P = t[s[r] + "RequestAnimationFrame"]),
          (O =
            t[s[r] + "CancelAnimationFrame"] ||
            t[s[r] + "CancelRequestAnimationFrame"]);
      g("Ticker", function (t, e) {
        var i,
          s,
          r,
          n,
          l,
          h = this,
          u = S(),
          f = !1 !== e && P,
          p = 500,
          d = 33,
          m = function (t) {
            var e,
              a,
              o = S() - k;
            o > p && (u += o - d),
              (k += o),
              (h.time = (k - u) / 1e3),
              (e = h.time - l),
              (!i || e > 0 || !0 === t) &&
                (h.frame++, (l += e + (e >= n ? 0.004 : n - e)), (a = !0)),
              !0 !== t && (r = s(m)),
              a && h.dispatchEvent("tick");
          };
        w.call(h),
          (h.time = h.frame = 0),
          (h.tick = function () {
            m(!0);
          }),
          (h.lagSmoothing = function (t, e) {
            (p = t || 1 / _), (d = Math.min(e, p, 0));
          }),
          (h.sleep = function () {
            null != r &&
              (f && O ? O(r) : clearTimeout(r),
              (s = c),
              (r = null),
              h === a && (o = !1));
          }),
          (h.wake = function () {
            null !== r ? h.sleep() : h.frame > 10 && (k = S() - p + 5),
              (s =
                0 === i
                  ? c
                  : f && P
                  ? P
                  : function (t) {
                      return setTimeout(t, 0 | (1e3 * (l - h.time) + 1));
                    }),
              h === a && (o = !0),
              m(2);
          }),
          (h.fps = function (t) {
            return arguments.length
              ? ((n = 1 / ((i = t) || 60)), (l = this.time + n), void h.wake())
              : i;
          }),
          (h.useRAF = function (t) {
            return arguments.length ? (h.sleep(), (f = t), void h.fps(i)) : f;
          }),
          h.fps(t),
          setTimeout(function () {
            f && 5 > h.frame && h.useRAF(!1);
          }, 1500);
      }),
        ((n = h.Ticker.prototype = new h.events.EventDispatcher()).constructor =
          h.Ticker);
      var R = g("core.Animation", function (t, e) {
        if (
          ((this.vars = e = e || {}),
          (this._duration = this._totalDuration = t || 0),
          (this._delay = Number(e.delay) || 0),
          (this._timeScale = 1),
          (this._active = !0 === e.immediateRender),
          (this.data = e.data),
          (this._reversed = !0 === e.reversed),
          W)
        ) {
          o || a.wake();
          var i = this.vars.useFrames ? q : W;
          i.add(this, i._time), this.vars.paused && this.paused(!0);
        }
      });
      (a = R.ticker = new h.Ticker()),
        ((n = R.prototype)._dirty = n._gc = n._initted = n._paused = !1),
        (n._totalTime = n._time = 0),
        (n._rawPrevTime = -1),
        (n._next = n._last = n._onUpdate = n._timeline = n.timeline = null),
        (n._paused = !1);
      var A = function () {
        o && S() - k > 2e3 && a.wake(), setTimeout(A, 2e3);
      };
      A(),
        (n.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (n.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (n.resume = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!1);
        }),
        (n.seek = function (t, e) {
          return this.totalTime(Number(t), !1 !== e);
        }),
        (n.restart = function (t, e) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(t ? -this._delay : 0, !1 !== e, !0);
        }),
        (n.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (n.render = function () {}),
        (n.invalidate = function () {
          return (
            (this._time = this._totalTime = 0),
            (this._initted = this._gc = !1),
            (this._rawPrevTime = -1),
            (this._gc || !this.timeline) && this._enabled(!0),
            this
          );
        }),
        (n.isActive = function () {
          var t,
            e = this._timeline,
            i = this._startTime;
          return (
            !e ||
            (!this._gc &&
              !this._paused &&
              e.isActive() &&
              (t = e.rawTime()) >= i &&
              i + this.totalDuration() / this._timeScale > t)
          );
        }),
        (n._enabled = function (t, e) {
          return (
            o || a.wake(),
            (this._gc = !t),
            (this._active = this.isActive()),
            !0 !== e &&
              (t && !this.timeline
                ? this._timeline.add(this, this._startTime - this._delay)
                : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
          );
        }),
        (n._kill = function () {
          return this._enabled(!1, !1);
        }),
        (n.kill = function (t, e) {
          return this._kill(t, e), this;
        }),
        (n._uncache = function (t) {
          for (var e = t ? this : this.timeline; e; )
            (e._dirty = !0), (e = e.timeline);
          return this;
        }),
        (n._swapSelfInParams = function (t) {
          for (var e = t.length, i = t.concat(); --e > -1; )
            "{self}" === t[e] && (i[e] = this);
          return i;
        }),
        (n._callback = function (t) {
          var e = this.vars;
          e[t].apply(
            e[t + "Scope"] || e.callbackScope || this,
            e[t + "Params"] || y
          );
        }),
        (n.eventCallback = function (t, e, i, s) {
          if ("on" === (t || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length) return r[t];
            null == e
              ? delete r[t]
              : ((r[t] = e),
                (r[t + "Params"] =
                  f(i) && -1 !== i.join("").indexOf("{self}")
                    ? this._swapSelfInParams(i)
                    : i),
                (r[t + "Scope"] = s)),
              "onUpdate" === t && (this._onUpdate = e);
          }
          return this;
        }),
        (n.delay = function (t) {
          return arguments.length
            ? (this._timeline.smoothChildTiming &&
                this.startTime(this._startTime + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (n.duration = function (t) {
          return arguments.length
            ? ((this._duration = this._totalDuration = t),
              this._uncache(!0),
              this._timeline.smoothChildTiming &&
                this._time > 0 &&
                this._time < this._duration &&
                0 !== t &&
                this.totalTime(this._totalTime * (t / this._duration), !0),
              this)
            : ((this._dirty = !1), this._duration);
        }),
        (n.totalDuration = function (t) {
          return (
            (this._dirty = !1),
            arguments.length ? this.duration(t) : this._totalDuration
          );
        }),
        (n.time = function (t, e) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              this.totalTime(t > this._duration ? this._duration : t, e))
            : this._time;
        }),
        (n.totalTime = function (t, e, i) {
          if ((o || a.wake(), !arguments.length)) return this._totalTime;
          if (this._timeline) {
            if (
              (0 > t && !i && (t += this.totalDuration()),
              this._timeline.smoothChildTiming)
            ) {
              this._dirty && this.totalDuration();
              var s = this._totalDuration,
                r = this._timeline;
              if (
                (t > s && !i && (t = s),
                (this._startTime =
                  (this._paused ? this._pauseTime : r._time) -
                  (this._reversed ? s - t : t) / this._timeScale),
                r._dirty || this._uncache(!1),
                r._timeline)
              )
                for (; r._timeline; )
                  r._timeline._time !==
                    (r._startTime + r._totalTime) / r._timeScale &&
                    r.totalTime(r._totalTime, !0),
                    (r = r._timeline);
            }
            this._gc && this._enabled(!0, !1),
              (this._totalTime !== t || 0 === this._duration) &&
                (z.length && G(), this.render(t, e, !1), z.length && G());
          }
          return this;
        }),
        (n.progress = n.totalProgress =
          function (t, e) {
            var i = this.duration();
            return arguments.length
              ? this.totalTime(i * t, e)
              : i
              ? this._time / i
              : this.ratio;
          }),
        (n.startTime = function (t) {
          return arguments.length
            ? (t !== this._startTime &&
                ((this._startTime = t),
                this.timeline &&
                  this.timeline._sortChildren &&
                  this.timeline.add(this, t - this._delay)),
              this)
            : this._startTime;
        }),
        (n.endTime = function (t) {
          return (
            this._startTime +
            (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
          );
        }),
        (n.timeScale = function (t) {
          if (!arguments.length) return this._timeScale;
          if (
            ((t = t || _), this._timeline && this._timeline.smoothChildTiming)
          ) {
            var e = this._pauseTime,
              i = e || 0 === e ? e : this._timeline.totalTime();
            this._startTime = i - ((i - this._startTime) * this._timeScale) / t;
          }
          return (this._timeScale = t), this._uncache(!1);
        }),
        (n.reversed = function (t) {
          return arguments.length
            ? (t != this._reversed &&
                ((this._reversed = t),
                this.totalTime(
                  this._timeline && !this._timeline.smoothChildTiming
                    ? this.totalDuration() - this._totalTime
                    : this._totalTime,
                  !0
                )),
              this)
            : this._reversed;
        }),
        (n.paused = function (t) {
          if (!arguments.length) return this._paused;
          var e,
            i,
            s = this._timeline;
          return (
            t != this._paused &&
              s &&
              (o || t || a.wake(),
              (i = (e = s.rawTime()) - this._pauseTime),
              !t &&
                s.smoothChildTiming &&
                ((this._startTime += i), this._uncache(!1)),
              (this._pauseTime = t ? e : null),
              (this._paused = t),
              (this._active = this.isActive()),
              !t &&
                0 !== i &&
                this._initted &&
                this.duration() &&
                ((e = s.smoothChildTiming
                  ? this._totalTime
                  : (e - this._startTime) / this._timeScale),
                this.render(e, e === this._totalTime, !0))),
            this._gc && !t && this._enabled(!0, !1),
            this
          );
        });
      var C = g("core.SimpleTimeline", function (t) {
        R.call(this, 0, t),
          (this.autoRemoveChildren = this.smoothChildTiming = !0);
      });
      ((n = C.prototype = new R()).constructor = C),
        (n.kill()._gc = !1),
        (n._first = n._last = n._recent = null),
        (n._sortChildren = !1),
        (n.add = n.insert =
          function (t, e) {
            var i, s;
            if (
              ((t._startTime = Number(e || 0) + t._delay),
              t._paused &&
                this !== t._timeline &&
                (t._pauseTime =
                  t._startTime +
                  (this.rawTime() - t._startTime) / t._timeScale),
              t.timeline && t.timeline._remove(t, !0),
              (t.timeline = t._timeline = this),
              t._gc && t._enabled(!0, !0),
              (i = this._last),
              this._sortChildren)
            )
              for (s = t._startTime; i && i._startTime > s; ) i = i._prev;
            return (
              i
                ? ((t._next = i._next), (i._next = t))
                : ((t._next = this._first), (this._first = t)),
              t._next ? (t._next._prev = t) : (this._last = t),
              (t._prev = i),
              (this._recent = t),
              this._timeline && this._uncache(!0),
              this
            );
          }),
        (n._remove = function (t, e) {
          return (
            t.timeline === this &&
              (e || t._enabled(!1, !0),
              t._prev
                ? (t._prev._next = t._next)
                : this._first === t && (this._first = t._next),
              t._next
                ? (t._next._prev = t._prev)
                : this._last === t && (this._last = t._prev),
              (t._next = t._prev = t.timeline = null),
              t === this._recent && (this._recent = this._last),
              this._timeline && this._uncache(!0)),
            this
          );
        }),
        (n.render = function (t, e, i) {
          var s,
            r = this._first;
          for (this._totalTime = this._time = this._rawPrevTime = t; r; )
            (s = r._next),
              (r._active || (t >= r._startTime && !r._paused)) &&
                (r._reversed
                  ? r.render(
                      (r._dirty ? r.totalDuration() : r._totalDuration) -
                        (t - r._startTime) * r._timeScale,
                      e,
                      i
                    )
                  : r.render((t - r._startTime) * r._timeScale, e, i)),
              (r = s);
        }),
        (n.rawTime = function () {
          return o || a.wake(), this._totalTime;
        });
      var D = g(
          "TweenLite",
          function (e, i, s) {
            if (
              (R.call(this, i, s),
              (this.render = D.prototype.render),
              null == e)
            )
              throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : D.selector(e) || e;
            var r,
              n,
              a,
              o =
                e.jquery ||
                (e.length &&
                  e !== t &&
                  e[0] &&
                  (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))),
              l = this.vars.overwrite;
            if (
              ((this._overwrite = l =
                null == l
                  ? V[D.defaultOverwrite]
                  : "number" == typeof l
                  ? l >> 0
                  : V[l]),
              (o || e instanceof Array || (e.push && f(e))) &&
                "number" != typeof e[0])
            )
              for (
                this._targets = a = u(e),
                  this._propLookup = [],
                  this._siblings = [],
                  r = 0;
                a.length > r;
                r++
              )
                (n = a[r])
                  ? "string" != typeof n
                    ? n.length &&
                      n !== t &&
                      n[0] &&
                      (n[0] === t ||
                        (n[0].nodeType && n[0].style && !n.nodeType))
                      ? (a.splice(r--, 1), (this._targets = a = a.concat(u(n))))
                      : ((this._siblings[r] = $(n, this, !1)),
                        1 === l &&
                          this._siblings[r].length > 1 &&
                          H(n, this, null, 1, this._siblings[r]))
                    : "string" == typeof (n = a[r--] = D.selector(n)) &&
                      a.splice(r + 1, 1)
                  : a.splice(r--, 1);
            else
              (this._propLookup = {}),
                (this._siblings = $(e, this, !1)),
                1 === l &&
                  this._siblings.length > 1 &&
                  H(e, this, null, 1, this._siblings);
            (this.vars.immediateRender ||
              (0 === i &&
                0 === this._delay &&
                !1 !== this.vars.immediateRender)) &&
              ((this._time = -_), this.render(-this._delay));
          },
          !0
        ),
        M = function (e) {
          return (
            e &&
            e.length &&
            e !== t &&
            e[0] &&
            (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))
          );
        };
      ((n = D.prototype = new R()).constructor = D),
        (n.kill()._gc = !1),
        (n.ratio = 0),
        (n._firstPT = n._targets = n._overwrittenProps = n._startAt = null),
        (n._notifyPluginsOfEnabled = n._lazy = !1),
        (D.version = "1.18.0"),
        (D.defaultEase = n._ease = new T(null, null, 1, 1)),
        (D.defaultOverwrite = "auto"),
        (D.ticker = a),
        (D.autoSleep = 120),
        (D.lagSmoothing = function (t, e) {
          a.lagSmoothing(t, e);
        }),
        (D.selector =
          t.$ ||
          t.jQuery ||
          function (e) {
            var i = t.$ || t.jQuery;
            return i
              ? ((D.selector = i), i(e))
              : "undefined" == typeof document
              ? e
              : document.querySelectorAll
              ? document.querySelectorAll(e)
              : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
          });
      var z = [],
        F = {},
        I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        X = function (t) {
          for (var e, i = this._firstPT, s = 1e-6; i; )
            (e = i.blob ? (t ? this.join("") : this.start) : i.c * t + i.s),
              i.r ? (e = Math.round(e)) : s > e && e > -s && (e = 0),
              i.f ? (i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e)) : (i.t[i.p] = e),
              (i = i._next);
        },
        N = function (t, e, i, s) {
          var r,
            n,
            a,
            o,
            l,
            h,
            _,
            u = [t, e],
            c = 0,
            f = "",
            p = 0;
          for (
            u.start = t,
              i && (i(u), (t = u[0]), (e = u[1])),
              u.length = 0,
              r = t.match(I) || [],
              n = e.match(I) || [],
              s && ((s._next = null), (s.blob = 1), (u._firstPT = s)),
              l = n.length,
              o = 0;
            l > o;
            o++
          )
            (_ = n[o]),
              (f += (h = e.substr(c, e.indexOf(_, c) - c)) || !o ? h : ","),
              (c += h.length),
              p ? (p = (p + 1) % 5) : "rgba(" === h.substr(-5) && (p = 1),
              _ === r[o] || o >= r.length
                ? (f += _)
                : (f && (u.push(f), (f = "")),
                  (a = parseFloat(r[o])),
                  u.push(a),
                  (u._firstPT = {
                    _next: u._firstPT,
                    t: u,
                    p: u.length - 1,
                    s: a,
                    c:
                      ("=" === _.charAt(1)
                        ? parseInt(_.charAt(0) + "1", 10) *
                          parseFloat(_.substr(2))
                        : parseFloat(_) - a) || 0,
                    f: 0,
                    r: p && 4 > p,
                  })),
              (c += _.length);
          return (f += e.substr(c)) && u.push(f), (u.setRatio = X), u;
        },
        L = function (t, e, i, s, r, n, a, o) {
          var l,
            h = "get" === i ? t[e] : i,
            _ = typeof t[e],
            u = "string" == typeof s && "=" === s.charAt(1),
            c = {
              t: t,
              p: e,
              s: h,
              f: "function" === _,
              pg: 0,
              n: r || e,
              r: n,
              pr: 0,
              c: u
                ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2))
                : parseFloat(s) - h || 0,
            };
          return (
            "number" !== _ &&
              ("function" === _ &&
                "get" === i &&
                ((l =
                  e.indexOf("set") ||
                  "function" != typeof t["get" + e.substr(3)]
                    ? e
                    : "get" + e.substr(3)),
                (c.s = h = a ? t[l](a) : t[l]())),
              "string" == typeof h && (a || isNaN(h))
                ? ((c.fp = a),
                  (c = {
                    t: N(h, s, o || D.defaultStringFilter, c),
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: r || e,
                    pr: 0,
                  }))
                : u || (c.c = parseFloat(s) - parseFloat(h) || 0)),
            c.c
              ? ((c._next = this._firstPT) && (c._next._prev = c),
                (this._firstPT = c),
                c)
              : void 0
          );
        },
        E = (D._internals = {
          isArray: f,
          isSelector: M,
          lazyTweens: z,
          blobDif: N,
        }),
        Y = (D._plugins = {}),
        B = (E.tweenLookup = {}),
        j = 0,
        U = (E.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
          callbackScope: 1,
          stringFilter: 1,
        }),
        V = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          true: 1,
          false: 0,
        },
        q = (R._rootFramesTimeline = new C()),
        W = (R._rootTimeline = new C()),
        Z = 30,
        G = (E.lazyRender = function () {
          var t,
            e = z.length;
          for (F = {}; --e > -1; )
            (t = z[e]) &&
              !1 !== t._lazy &&
              (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
          z.length = 0;
        });
      (W._startTime = a.time),
        (q._startTime = a.frame),
        (W._active = q._active = !0),
        setTimeout(G, 1),
        (R._updateRoot = D.render =
          function () {
            var t, e, i;
            if (
              (z.length && G(),
              W.render((a.time - W._startTime) * W._timeScale, !1, !1),
              q.render((a.frame - q._startTime) * q._timeScale, !1, !1),
              z.length && G(),
              a.frame >= Z)
            ) {
              for (i in ((Z = a.frame + (parseInt(D.autoSleep, 10) || 120)),
              B)) {
                for (t = (e = B[i].tweens).length; --t > -1; )
                  e[t]._gc && e.splice(t, 1);
                0 === e.length && delete B[i];
              }
              if (
                (!(i = W._first) || i._paused) &&
                D.autoSleep &&
                !q._first &&
                1 === a._listeners.tick.length
              ) {
                for (; i && i._paused; ) i = i._next;
                i || a.sleep();
              }
            }
          }),
        a.addEventListener("tick", R._updateRoot);
      var $ = function (t, e, i) {
          var s,
            r,
            n = t._gsTweenID;
          if (
            (B[n || (t._gsTweenID = n = "t" + j++)] ||
              (B[n] = { target: t, tweens: [] }),
            e && (((s = B[n].tweens)[(r = s.length)] = e), i))
          )
            for (; --r > -1; ) s[r] === e && s.splice(r, 1);
          return B[n].tweens;
        },
        Q = function (t, e, i, s) {
          var r,
            n,
            a = t.vars.onOverwrite;
          return (
            a && (r = a(t, e, i, s)),
            (a = D.onOverwrite) && (n = a(t, e, i, s)),
            !1 !== r && !1 !== n
          );
        },
        H = function (t, e, i, s, r) {
          var n, a, o, l;
          if (1 === s || s >= 4) {
            for (l = r.length, n = 0; l > n; n++)
              if ((o = r[n]) !== e) o._gc || (o._kill(null, t, e) && (a = !0));
              else if (5 === s) break;
            return a;
          }
          var h,
            u = e._startTime + _,
            c = [],
            f = 0,
            p = 0 === e._duration;
          for (n = r.length; --n > -1; )
            (o = r[n]) === e ||
              o._gc ||
              o._paused ||
              (o._timeline !== e._timeline
                ? ((h = h || K(e, 0, p)), 0 === K(o, h, p) && (c[f++] = o))
                : u >= o._startTime &&
                  o._startTime + o.totalDuration() / o._timeScale > u &&
                  (((p || !o._initted) && 2e-10 >= u - o._startTime) ||
                    (c[f++] = o)));
          for (n = f; --n > -1; )
            if (
              ((o = c[n]),
              2 === s && o._kill(i, t, e) && (a = !0),
              2 !== s || (!o._firstPT && o._initted))
            ) {
              if (2 !== s && !Q(o, e)) continue;
              o._enabled(!1, !1) && (a = !0);
            }
          return a;
        },
        K = function (t, e, i) {
          for (
            var s = t._timeline, r = s._timeScale, n = t._startTime;
            s._timeline;

          ) {
            if (((n += s._startTime), (r *= s._timeScale), s._paused))
              return -100;
            s = s._timeline;
          }
          return (n /= r) > e
            ? n - e
            : (i && n === e) || (!t._initted && 2 * _ > n - e)
            ? _
            : (n += t.totalDuration() / t._timeScale / r) > e + _
            ? 0
            : n - e - _;
        };
      (n._init = function () {
        var t,
          e,
          i,
          s,
          r,
          n = this.vars,
          a = this._overwrittenProps,
          o = this._duration,
          l = !!n.immediateRender,
          h = n.ease;
        if (n.startAt) {
          for (s in (this._startAt &&
            (this._startAt.render(-1, !0), this._startAt.kill()),
          (r = {}),
          n.startAt))
            r[s] = n.startAt[s];
          if (
            ((r.overwrite = !1),
            (r.immediateRender = !0),
            (r.lazy = l && !1 !== n.lazy),
            (r.startAt = r.delay = null),
            (this._startAt = D.to(this.target, 0, r)),
            l)
          )
            if (this._time > 0) this._startAt = null;
            else if (0 !== o) return;
        } else if (n.runBackwards && 0 !== o)
          if (this._startAt)
            this._startAt.render(-1, !0),
              this._startAt.kill(),
              (this._startAt = null);
          else {
            for (s in (0 !== this._time && (l = !1), (i = {}), n))
              (U[s] && "autoCSS" !== s) || (i[s] = n[s]);
            if (
              ((i.overwrite = 0),
              (i.data = "isFromStart"),
              (i.lazy = l && !1 !== n.lazy),
              (i.immediateRender = l),
              (this._startAt = D.to(this.target, 0, i)),
              l)
            ) {
              if (0 === this._time) return;
            } else
              this._startAt._init(),
                this._startAt._enabled(!1),
                this.vars.immediateRender && (this._startAt = null);
          }
        if (
          ((this._ease = h =
            h
              ? h instanceof T
                ? h
                : "function" == typeof h
                ? new T(h, n.easeParams)
                : x[h] || D.defaultEase
              : D.defaultEase),
          n.easeParams instanceof Array &&
            h.config &&
            (this._ease = h.config.apply(h, n.easeParams)),
          (this._easeType = this._ease._type),
          (this._easePower = this._ease._power),
          (this._firstPT = null),
          this._targets)
        )
          for (t = this._targets.length; --t > -1; )
            this._initProps(
              this._targets[t],
              (this._propLookup[t] = {}),
              this._siblings[t],
              a ? a[t] : null
            ) && (e = !0);
        else
          e = this._initProps(this.target, this._propLookup, this._siblings, a);
        if (
          (e && D._onPluginEvent("_onInitAllProps", this),
          a &&
            (this._firstPT ||
              ("function" != typeof this.target && this._enabled(!1, !1))),
          n.runBackwards)
        )
          for (i = this._firstPT; i; )
            (i.s += i.c), (i.c = -i.c), (i = i._next);
        (this._onUpdate = n.onUpdate), (this._initted = !0);
      }),
        (n._initProps = function (e, i, s, r) {
          var n, a, o, l, h, _;
          if (null == e) return !1;
          for (n in (F[e._gsTweenID] && G(),
          this.vars.css ||
            (e.style &&
              e !== t &&
              e.nodeType &&
              Y.css &&
              !1 !== this.vars.autoCSS &&
              (function (t, e) {
                var i,
                  s = {};
                for (i in t)
                  U[i] ||
                    (i in e &&
                      "transform" !== i &&
                      "x" !== i &&
                      "y" !== i &&
                      "width" !== i &&
                      "height" !== i &&
                      "className" !== i &&
                      "border" !== i) ||
                    !(!Y[i] || (Y[i] && Y[i]._autoCSS)) ||
                    ((s[i] = t[i]), delete t[i]);
                t.css = s;
              })(this.vars, e)),
          this.vars))
            if (((_ = this.vars[n]), U[n]))
              _ &&
                (_ instanceof Array || (_.push && f(_))) &&
                -1 !== _.join("").indexOf("{self}") &&
                (this.vars[n] = _ = this._swapSelfInParams(_, this));
            else if (
              Y[n] &&
              (l = new Y[n]())._onInitTween(e, this.vars[n], this)
            ) {
              for (
                this._firstPT = h =
                  {
                    _next: this._firstPT,
                    t: l,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: n,
                    pg: 1,
                    pr: l._priority,
                  },
                  a = l._overwriteProps.length;
                --a > -1;

              )
                i[l._overwriteProps[a]] = this._firstPT;
              (l._priority || l._onInitAllProps) && (o = !0),
                (l._onDisable || l._onEnable) &&
                  (this._notifyPluginsOfEnabled = !0),
                h._next && (h._next._prev = h);
            } else
              i[n] = L.call(
                this,
                e,
                n,
                "get",
                _,
                n,
                0,
                null,
                this.vars.stringFilter
              );
          return r && this._kill(r, e)
            ? this._initProps(e, i, s, r)
            : this._overwrite > 1 &&
              this._firstPT &&
              s.length > 1 &&
              H(e, this, i, this._overwrite, s)
            ? (this._kill(i, e), this._initProps(e, i, s, r))
            : (this._firstPT &&
                ((!1 !== this.vars.lazy && this._duration) ||
                  (this.vars.lazy && !this._duration)) &&
                (F[e._gsTweenID] = !0),
              o);
        }),
        (n.render = function (t, e, i) {
          var s,
            r,
            n,
            a,
            o = this._time,
            l = this._duration,
            h = this._rawPrevTime;
          if (t >= l)
            (this._totalTime = this._time = l),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
              this._reversed ||
                ((s = !0),
                (r = "onComplete"),
                (i = i || this._timeline.autoRemoveChildren)),
              0 === l &&
                (this._initted || !this.vars.lazy || i) &&
                (this._startTime === this._timeline._duration && (t = 0),
                (0 === t || 0 > h || (h === _ && "isPause" !== this.data)) &&
                  h !== t &&
                  ((i = !0), h > _ && (r = "onReverseComplete")),
                (this._rawPrevTime = a = !e || t || h === t ? t : _));
          else if (1e-7 > t)
            (this._totalTime = this._time = 0),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
              (0 !== o || (0 === l && h > 0)) &&
                ((r = "onReverseComplete"), (s = this._reversed)),
              0 > t &&
                ((this._active = !1),
                0 === l &&
                  (this._initted || !this.vars.lazy || i) &&
                  (h >= 0 && (h !== _ || "isPause" !== this.data) && (i = !0),
                  (this._rawPrevTime = a = !e || t || h === t ? t : _))),
              this._initted || (i = !0);
          else if (((this._totalTime = this._time = t), this._easeType)) {
            var u = t / l,
              c = this._easeType,
              f = this._easePower;
            (1 === c || (3 === c && u >= 0.5)) && (u = 1 - u),
              3 === c && (u *= 2),
              1 === f
                ? (u *= u)
                : 2 === f
                ? (u *= u * u)
                : 3 === f
                ? (u *= u * u * u)
                : 4 === f && (u *= u * u * u * u),
              (this.ratio =
                1 === c
                  ? 1 - u
                  : 2 === c
                  ? u
                  : 0.5 > t / l
                  ? u / 2
                  : 1 - u / 2);
          } else this.ratio = this._ease.getRatio(t / l);
          if (this._time !== o || i) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (
                !i &&
                this._firstPT &&
                ((!1 !== this.vars.lazy && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = this._totalTime = o),
                  (this._rawPrevTime = h),
                  z.push(this),
                  void (this._lazy = [t, e])
                );
              this._time && !s
                ? (this.ratio = this._ease.getRatio(this._time / l))
                : s &&
                  this._ease._calcEnd &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              !1 !== this._lazy && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== o &&
                    t >= 0 &&
                    (this._active = !0)),
                0 === o &&
                  (this._startAt &&
                    (t >= 0
                      ? this._startAt.render(t, e, i)
                      : r || (r = "_dummyGS")),
                  this.vars.onStart &&
                    (0 !== this._time || 0 === l) &&
                    (e || this._callback("onStart"))),
                n = this._firstPT;
              n;

            )
              n.f
                ? n.t[n.p](n.c * this.ratio + n.s)
                : (n.t[n.p] = n.c * this.ratio + n.s),
                (n = n._next);
            this._onUpdate &&
              (0 > t &&
                this._startAt &&
                -1e-4 !== t &&
                this._startAt.render(t, e, i),
              e || ((this._time !== o || s) && this._callback("onUpdate"))),
              r &&
                (!this._gc || i) &&
                (0 > t &&
                  this._startAt &&
                  !this._onUpdate &&
                  -1e-4 !== t &&
                  this._startAt.render(t, e, i),
                s &&
                  (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                  (this._active = !1)),
                !e && this.vars[r] && this._callback(r),
                0 === l &&
                  this._rawPrevTime === _ &&
                  a !== _ &&
                  (this._rawPrevTime = 0));
          }
        }),
        (n._kill = function (t, e, i) {
          if (
            ("all" === t && (t = null),
            null == t && (null == e || e === this.target))
          )
            return (this._lazy = !1), this._enabled(!1, !1);
          e =
            "string" != typeof e
              ? e || this._targets || this.target
              : D.selector(e) || e;
          var s,
            r,
            n,
            a,
            o,
            l,
            h,
            _,
            u,
            c =
              i &&
              this._time &&
              i._startTime === this._startTime &&
              this._timeline === i._timeline;
          if ((f(e) || M(e)) && "number" != typeof e[0])
            for (s = e.length; --s > -1; ) this._kill(t, e[s], i) && (l = !0);
          else {
            if (this._targets) {
              for (s = this._targets.length; --s > -1; )
                if (e === this._targets[s]) {
                  (o = this._propLookup[s] || {}),
                    (this._overwrittenProps = this._overwrittenProps || []),
                    (r = this._overwrittenProps[s] =
                      t ? this._overwrittenProps[s] || {} : "all");
                  break;
                }
            } else {
              if (e !== this.target) return !1;
              (o = this._propLookup),
                (r = this._overwrittenProps =
                  t ? this._overwrittenProps || {} : "all");
            }
            if (o) {
              if (
                ((h = t || o),
                (_ =
                  t !== r &&
                  "all" !== r &&
                  t !== o &&
                  ("object" != typeof t || !t._tempKill)),
                i && (D.onOverwrite || this.vars.onOverwrite))
              ) {
                for (n in h) o[n] && (u || (u = []), u.push(n));
                if ((u || !t) && !Q(this, i, e, u)) return !1;
              }
              for (n in h)
                (a = o[n]) &&
                  (c && (a.f ? a.t[a.p](a.s) : (a.t[a.p] = a.s), (l = !0)),
                  a.pg && a.t._kill(h) && (l = !0),
                  (a.pg && 0 !== a.t._overwriteProps.length) ||
                    (a._prev
                      ? (a._prev._next = a._next)
                      : a === this._firstPT && (this._firstPT = a._next),
                    a._next && (a._next._prev = a._prev),
                    (a._next = a._prev = null)),
                  delete o[n]),
                  _ && (r[n] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1);
            }
          }
          return l;
        }),
        (n.invalidate = function () {
          return (
            this._notifyPluginsOfEnabled &&
              D._onPluginEvent("_onDisable", this),
            (this._firstPT =
              this._overwrittenProps =
              this._startAt =
              this._onUpdate =
                null),
            (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
            (this._propLookup = this._targets ? {} : []),
            R.prototype.invalidate.call(this),
            this.vars.immediateRender &&
              ((this._time = -_), this.render(-this._delay)),
            this
          );
        }),
        (n._enabled = function (t, e) {
          if ((o || a.wake(), t && this._gc)) {
            var i,
              s = this._targets;
            if (s)
              for (i = s.length; --i > -1; )
                this._siblings[i] = $(s[i], this, !0);
            else this._siblings = $(this.target, this, !0);
          }
          return (
            R.prototype._enabled.call(this, t, e),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
              D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
          );
        }),
        (D.to = function (t, e, i) {
          return new D(t, e, i);
        }),
        (D.from = function (t, e, i) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            new D(t, e, i)
          );
        }),
        (D.fromTo = function (t, e, i, s) {
          return (
            (s.startAt = i),
            (s.immediateRender =
              0 != s.immediateRender && 0 != i.immediateRender),
            new D(t, e, s)
          );
        }),
        (D.delayedCall = function (t, e, i, s, r) {
          return new D(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            callbackScope: s,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            immediateRender: !1,
            lazy: !1,
            useFrames: r,
            overwrite: 0,
          });
        }),
        (D.set = function (t, e) {
          return new D(t, 0, e);
        }),
        (D.getTweensOf = function (t, e) {
          if (null == t) return [];
          var i, s, r, n;
          if (
            ((t = "string" != typeof t ? t : D.selector(t) || t),
            (f(t) || M(t)) && "number" != typeof t[0])
          ) {
            for (i = t.length, s = []; --i > -1; )
              s = s.concat(D.getTweensOf(t[i], e));
            for (i = s.length; --i > -1; )
              for (n = s[i], r = i; --r > -1; ) n === s[r] && s.splice(i, 1);
          } else
            for (i = (s = $(t).concat()).length; --i > -1; )
              (s[i]._gc || (e && !s[i].isActive())) && s.splice(i, 1);
          return s;
        }),
        (D.killTweensOf = D.killDelayedCallsTo =
          function (t, e, i) {
            "object" == typeof e && ((i = e), (e = !1));
            for (var s = D.getTweensOf(t, e), r = s.length; --r > -1; )
              s[r]._kill(i, t);
          });
      var J = g(
        "plugins.TweenPlugin",
        function (t, e) {
          (this._overwriteProps = (t || "").split(",")),
            (this._propName = this._overwriteProps[0]),
            (this._priority = e || 0),
            (this._super = J.prototype);
        },
        !0
      );
      if (
        ((n = J.prototype),
        (J.version = "1.18.0"),
        (J.API = 2),
        (n._firstPT = null),
        (n._addTween = L),
        (n.setRatio = X),
        (n._kill = function (t) {
          var e,
            i = this._overwriteProps,
            s = this._firstPT;
          if (null != t[this._propName]) this._overwriteProps = [];
          else for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1);
          for (; s; )
            null != t[s.n] &&
              (s._next && (s._next._prev = s._prev),
              s._prev
                ? ((s._prev._next = s._next), (s._prev = null))
                : this._firstPT === s && (this._firstPT = s._next)),
              (s = s._next);
          return !1;
        }),
        (n._roundProps = function (t, e) {
          for (var i = this._firstPT; i; )
            (t[this._propName] ||
              (null != i.n && t[i.n.split(this._propName + "_").join("")])) &&
              (i.r = e),
              (i = i._next);
        }),
        (D._onPluginEvent = function (t, e) {
          var i,
            s,
            r,
            n,
            a,
            o = e._firstPT;
          if ("_onInitAllProps" === t) {
            for (; o; ) {
              for (a = o._next, s = r; s && s.pr > o.pr; ) s = s._next;
              (o._prev = s ? s._prev : n) ? (o._prev._next = o) : (r = o),
                (o._next = s) ? (s._prev = o) : (n = o),
                (o = a);
            }
            o = e._firstPT = r;
          }
          for (; o; )
            o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
              (o = o._next);
          return i;
        }),
        (J.activate = function (t) {
          for (var e = t.length; --e > -1; )
            t[e].API === J.API && (Y[new t[e]()._propName] = t[e]);
          return !0;
        }),
        (m.plugin = function (t) {
          if (!(t && t.propName && t.init && t.API))
            throw "illegal plugin definition.";
          var e,
            i = t.propName,
            s = t.priority || 0,
            r = t.overwriteProps,
            n = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_roundProps",
              initAll: "_onInitAllProps",
            },
            a = g(
              "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
              function () {
                J.call(this, i, s), (this._overwriteProps = r || []);
              },
              !0 === t.global
            ),
            o = (a.prototype = new J(i));
          for (e in ((o.constructor = a), (a.API = t.API), n))
            "function" == typeof t[e] && (o[n[e]] = t[e]);
          return (a.version = t.version), J.activate([a]), a;
        }),
        (s = t._gsQueue))
      ) {
        for (r = 0; s.length > r; r++) s[r]();
        for (n in p)
          p[n].func ||
            t.console.log(
              "GSAP encountered missing dependency: com.greensock." + n
            );
      }
      o = !1;
    }
  })(
    "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
      ? global
      : this || window
  );
