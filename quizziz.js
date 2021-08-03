let q_username = "";

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyZ') {
      if (q_username!="") {
          getAnswer();
      } else {
          get_username();
      }
    }
    if (event.code == 'KeyC') {
        menu = !menu;
        if (menu) {
            $('#menu').css('display','block');
        } else {
            $('#menu').css('display','none');
        }
    }
  });


  function get_username() {
      console.log("===> Get Username");
      q_username = prompt("Enter other player Name", '');
  }

  function getAnswer() {
      console.log("===> Get Answer");
      sovle(q_username);
  }

  function sovle(q_username) {
        var e = function(e, t, r, n) {
            return new(r || (r = Promise))((function(o, i) {
                function a(e) {
                    try {
                        s(n.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    try {
                        s(n.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                        e(t)
                    }))).then(a, c)
                }
                s((n = n.apply(e, t || [])).next())
            }))
        },
        t = function(e, t) {
            var r, n, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function c(i) {
                return function(c) {
                    return function(i) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                            switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, n = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e], n = 0
                        } finally {
                            r = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, c])
                }
            }
        },
        r = function() {
            var e = document.querySelector("body > div > div.root-component > div > div > div > div.page-container.in-quiz > div.screen.screen-game > div.transitioner.transitioner-component > div > div > div > div > div > div.options-container > div");
            if (!e) throw new Error("Unable to retreive questions list element");
            return e
        },
        n = function(e) {
            e.style.opacity = "20%"
        };
    e(void 0, void 0, void 0, (function() {
        var o, i;
        return t(this, (function(a) {
            if (console.log("%c \n  Script created by Nguyễn Văn Cao Kỳ! \n  ", "color: green;"), !(o = q_username)) throw new Error("PlayerID not defined");
            return i = function() {
                    var e = document.querySelector("body > div");
                    if (!e) throw new Error("Could not retreive root object");
                    var t = e.__vue__,
                        r = t.$store._vm.currentQuestion.id,
                        n = t.$store._vm._data.$$state.game.data.roomHash;
                    if (!r || !n) throw new Error("Couldn't retreive questionID or roomHash");
                    var o = localStorage.getItem("previousContext");
                    if (!o) throw new Error("Couldn't retreive previousContext");
                    return {
                        id: r,
                        roomHash: n,
                        playerId: JSON.parse(o).currentPlayer.playerId
                    }
                }(), console.log({
                    questionID: i.id,
                    roomHash: i.roomHash
                }),
                function(o) {
                    e(void 0, void 0, void 0, (function() {
                        var e, i;
                        return t(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, fetch("https://game.quizizz.com/play-api/v4/proceedGame", {
                                        headers: {
                                            accept: "application/json",
                                            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,no;q=0.7,pl;q=0.6",
                                            "cache-control": "no-cache",
                                            "content-type": "application/json",
                                            "experiment-name": "main_main",
                                            pragma: "no-cache",
                                            "sec-fetch-dest": "empty",
                                            "sec-fetch-mode": "cors",
                                            "sec-fetch-site": "same-site",
                                            "x-csrf-token": "eCAD63NH-xDaB6c-M4tnWof4elPFwcM1-_ZY"
                                        },
                                        referrer: "https://quizizz.com/",
                                        referrerPolicy: "strict-origin-when-cross-origin",
                                        body: JSON.stringify(o),
                                        method: "POST",
                                        mode: "cors",
                                        credentials: "include"
                                    })];
                                case 1:
                                    return [4, t.sent().json()];
                                case 2:
                                    return e = t.sent(), console.log("Response:", e), (i = e.question.structure.answer) instanceof Array && i.length > 0 ? function(e) {
                                        var t = r(),
                                            o = Array.prototype.slice.call(t.children),
                                            i = o.filter((function(t) {
                                                return e.some((function(e) {
                                                    return e === t.__vue__.optionData.actualIndex
                                                }))
                                            })).map((function(e) {
                                                return e.innerText
                                            }));
                                        console.log({
                                            matching: i
                                        });
                                        var a = o.filter((function(e) {
                                            return !i.some((function(t) {
                                                return e.innerText === t
                                            }))
                                        }));
                                        console.log({
                                            notMatchingElements: a
                                        }), a.forEach(n)
                                    }(i) : "number" == typeof i ? (c = i, s = r(), u = Array.prototype.slice.call(s.children), l = u.filter((function(e) {
                                        return e.__vue__.optionData.actualIndex === c
                                    })).map((function(e) {
                                        return e.innerText
                                    })), console.log({
                                        matching: l
                                    }), u.filter((function(e) {
                                        return l.some((function(t) {
                                            return e.innerText != t
                                        }))
                                    })).forEach(n)) : e.question.structure.options ? (a = e.question.structure.options.map((function(e) {
                                        return e.text
                                    })), alert(a.join(" or ")), console.log(a)) : console.log("Unable to detect automaticcly anwser type", e.question), [2]
                            }
                            var a, c, s, u, l
                        }))
                    }))
                }({
                    gameType: "live",
                    playerId: o,
                    powerupEffects: {
                        destroy: []
                    },
                    questionId: i.id,
                    response: {
                        attempt: 0,
                        isEvaluated: !1,
                        questionId: i.id,
                        questionType: "MSQ",
                        provisional: {
                            scoreBreakups: {
                                correct: {
                                    base: 600,
                                    powerups: [],
                                    streak: 20,
                                    timer: 0,
                                    total: 500
                                },
                                incorrect: {
                                    base: 0,
                                    powerups: [],
                                    streak: 0,
                                    timer: 0,
                                    total: 0
                                }
                            },
                            scores: {
                                correct: 600,
                                incorrect: 0
                            },
                            teamAdjustments: []
                        },
                        response: [],
                        responseType: "original",
                        timeTaken: Math.floor(1e4 * Math.random())
                    },
                    roomHash: i.roomHash
                }), [2]
        }))
    }))
  }