(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/AddRequest.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/AddRequest.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AddRequest',
  data: function data() {
    return {
      valid: false,
      dateMenu: false,
      selectedHour: new Date().getHours().toString().padStart(2, '0'),
      selectedMinute: new Date().getMinutes().toString().padStart(2, '0'),
      hours: Array.from({
        length: 24
      }, function (_, i) {
        return i.toString().padStart(2, '0');
      }),
      minutes: Array.from({
        length: 60
      }, function (_, i) {
        return i.toString().padStart(2, '0');
      }),
      loading: false,
      search: null,
      employees: [],
      request: {
        nik: '',
        nama: '',
        departemen: '',
        tanggal: new Date().toISOString().substr(0, 10),
        items: []
      },
      availableItems: []
    };
  },
  computed: {
    formattedDateTime: {
      get: function get() {
        return "".concat(this.request.tanggal, " ").concat(this.selectedHour, ":").concat(this.selectedMinute);
      },
      set: function set(value) {
        // Handle any updates to the formatted datetime if needed
        console.log('DateTime value updated:', value);
      }
    }
  },
  created: function created() {
    this.fetchEmployees();
    this.fetchAvailableItems();
  },
  methods: {
    updateDateTime: function updateDateTime() {
      // Method to handle time updates
      console.log('DateTime updated:', this.formattedDateTime);
    },
    fetchEmployees: function fetchEmployees() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/employees');
            case 4:
              response = _context.sent;
              _this.employees = response.data;
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error('Error fetching employees:', _context.t0);
            case 11:
              _context.prev = 11;
              _this.loading = false;
              return _context.finish(11);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8, 11, 14]]);
      }))();
    },
    handleNikSelection: function handleNikSelection(employee) {
      if (employee) {
        this.request.nama = employee.nama_karyawan;
        this.request.departemen = employee.departemen.nama_departemen;
        this.request.nik = employee.NIK;
      } else {
        this.request.nama = '';
        this.request.departemen = '';
        this.request.nik = '';
      }
    },
    fetchAvailableItems: function fetchAvailableItems() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/items');
            case 3:
              response = _context2.sent;
              _this2.availableItems = response.data;
              _context2.next = 10;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error('Error fetching items:', _context2.t0);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    updateItemDetails: function updateItemDetails(index) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var item, selectedItem;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              item = _this3.request.items[index];
              selectedItem = _this3.availableItems.find(function (i) {
                return i.id === item.barang;
              });
              if (selectedItem) {
                item.lokasi = selectedItem.lokasi.nama_lokasi;
                item.tersedia = selectedItem.jumlah_stok;
                item.satuan = selectedItem.satuan;
                item.status = selectedItem.jumlah_stok > 0 ? 'Tersedia' : 'Tidak Tersedia';
              }
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    addItem: function addItem() {
      this.request.items.push({
        barang: null,
        lokasi: '',
        tersedia: 0,
        kuantiti: 1,
        satuan: '',
        keterangan: '',
        status: ''
      });
    },
    removeItem: function removeItem(index) {
      this.request.items.splice(index, 1);
    },
    cancel: function cancel() {
      this.$refs.form.reset();
      this.request = {
        nik: '',
        nama: '',
        departemen: '',
        tanggal: new Date().toISOString().substr(0, 10),
        items: []
      };
      this.$emit('cancel');
    },
    submit: function submit() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var formattedRequest, _error$response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!_this4.$refs.form.validate()) {
                _context4.next = 15;
                break;
              }
              _context4.prev = 1;
              formattedRequest = {
                nik: _this4.request.nik,
                tanggal: "".concat(_this4.request.tanggal, " ").concat(_this4.selectedHour, ":").concat(_this4.selectedMinute, ":00"),
                items: _this4.request.items.map(function (item) {
                  return {
                    barang: item.barang,
                    kuantiti: item.kuantiti,
                    keterangan: item.keterangan || null
                  };
                })
              };
              _context4.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/requests', formattedRequest);
            case 5:
              _this4.$emit('submit', formattedRequest);
              _context4.next = 8;
              return _this4.$router.push('/admin/requests')["catch"](function () {});
            case 8:
              _this4.$store.dispatch('showSnackbar', {
                text: 'Request created successfully',
                color: 'success'
              });
              _context4.next = 15;
              break;
            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](1);
              console.error('Error submitting request:', _context4.t0);
              _this4.$store.dispatch('showSnackbar', {
                text: ((_error$response = _context4.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || 'Error creating request',
                color: 'error'
              });
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 11]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Requests.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Requests.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddRequest_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddRequest.vue */ "./resources/js/admin/views/AddRequest.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Requests',
  components: {
    AddRequest: _AddRequest_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      search: '',
      loading: false,
      detailsDialog: false,
      statusDialog: false,
      addDialog: false,
      headers: [{
        text: 'Request ID',
        value: 'id'
      }, {
        text: 'NIK',
        value: 'nik'
      }, {
        text: 'Employee',
        value: 'nama'
      }, {
        text: 'Department',
        value: 'departemen'
      }, {
        text: 'Date',
        value: 'tanggal',
        format: function format(value) {
          return new Date(value).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          }) + ' - ' + new Date(value).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          });
        }
      }, {
        text: 'Status',
        value: 'status'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      requests: [],
      selectedRequest: {
        id: null,
        nik: '',
        nama: '',
        departemen: '',
        status: '',
        items: [],
        notes: ''
      },
      editedStatus: '',
      statusNotes: '',
      statusOptions: ['Pending', 'Approved', 'In Progress', 'Completed', 'Rejected']
    };
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/requests');
            case 4:
              response = _context.sent;
              _this.requests = response.data.map(function (request) {
                return {
                  id: request.id,
                  nik: request.nik,
                  nama: request.nama,
                  departemen: request.departemen,
                  tanggal: request.tanggal,
                  status: request.status || 'Pending',
                  items: request.items.map(function (item) {
                    return {
                      id: item.id || Math.random(),
                      nama_barang: item.barang,
                      quantity: item.kuantiti,
                      location: item.lokasi,
                      satuan: item.satuan,
                      keterangan: item.keterangan,
                      status: item.status
                    };
                  }),
                  notes: ''
                };
              });
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error('Error fetching requests:', _context.t0);
            case 11:
              _context.prev = 11;
              _this.loading = false;
              return _context.finish(11);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8, 11, 14]]);
      }))();
    },
    getStatusColor: function getStatusColor(status) {
      var colors = {
        'Pending': 'warning',
        'Approved': 'info',
        'In Progress': 'blue',
        'Completed': 'success',
        'Rejected': 'error'
      };
      return colors[status] || 'grey';
    },
    viewDetails: function viewDetails(item) {
      this.selectedRequest = Object.assign({}, item);
      this.detailsDialog = true;
    },
    updateStatus: function updateStatus(item) {
      this.selectedRequest = Object.assign({}, item);
      this.editedStatus = item.status;
      this.statusNotes = '';
      this.statusDialog = true;
    },
    closeStatusDialog: function closeStatusDialog() {
      var _this2 = this;
      this.statusDialog = false;
      this.$nextTick(function () {
        _this2.editedStatus = '';
        _this2.statusNotes = '';
        _this2.selectedRequest = {
          id: null,
          employee_name: '',
          department_name: '',
          status: '',
          items: [],
          notes: ''
        };
      });
    },
    saveStatus: function saveStatus() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var index;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              if (_this3.editedStatus) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");
            case 3:
              // TODO: Implement API call to update status
              index = _this3.requests.findIndex(function (r) {
                return r.id === _this3.selectedRequest.id;
              });
              if (index !== -1) {
                _this3.requests[index].status = _this3.editedStatus;
              }
              _this3.closeStatusDialog();
              _context2.next = 11;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.error('Error updating status:', _context2.t0);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    handleAddRequest: function handleAddRequest(requestData) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _error$response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _this4.initialize();
            case 3:
              _this4.addDialog = false;
              _this4.$store.dispatch('showSnackbar', {
                text: 'Request created successfully',
                color: 'success'
              });
              _context3.next = 10;
              break;
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              _this4.$store.dispatch('showSnackbar', {
                text: ((_error$response = _context3.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || 'Error creating request',
                color: 'error'
              });
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 7]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/AddRequest.vue?vue&type=template&id=ffb5f766":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/AddRequest.vue?vue&type=template&id=ffb5f766 ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-card", [_c("v-card-text", [_c("v-form", {
    ref: "form",
    model: {
      value: _vm.valid,
      callback: function callback($$v) {
        _vm.valid = $$v;
      },
      expression: "valid"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      md: "4"
    }
  }, [_c("v-autocomplete", {
    attrs: {
      items: _vm.employees,
      "item-text": "NIK",
      "item-value": "NIK",
      label: "NIK Peminta",
      required: "",
      rules: [function (v) {
        return !!v || "NIK is required";
      }],
      loading: _vm.loading,
      "search-input": _vm.search,
      "hide-no-data": "",
      "hide-selected": "",
      "return-object": "",
      clearable: ""
    },
    on: {
      change: _vm.handleNikSelection,
      "update:searchInput": function updateSearchInput($event) {
        _vm.search = $event;
      },
      "update:search-input": function updateSearchInput($event) {
        _vm.search = $event;
      }
    },
    model: {
      value: _vm.request.nik,
      callback: function callback($$v) {
        _vm.$set(_vm.request, "nik", $$v);
      },
      expression: "request.nik"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "4"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Nama",
      readonly: ""
    },
    model: {
      value: _vm.request.nama,
      callback: function callback($$v) {
        _vm.$set(_vm.request, "nama", $$v);
      },
      expression: "request.nama"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "4"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Departemen",
      readonly: ""
    },
    model: {
      value: _vm.request.departemen,
      callback: function callback($$v) {
        _vm.$set(_vm.request, "departemen", $$v);
      },
      expression: "request.departemen"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "4"
    }
  }, [_c("v-menu", {
    attrs: {
      "close-on-content-click": false,
      "nudge-right": 40,
      transition: "scale-transition",
      "offset-y": "",
      "min-width": "290px"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref) {
        var on = _ref.on,
          attrs = _ref.attrs;
        return [_c("v-text-field", _vm._g(_vm._b({
          attrs: {
            label: "Tanggal & Waktu Permintaan",
            readonly: "",
            dense: ""
          },
          model: {
            value: _vm.formattedDateTime,
            callback: function callback($$v) {
              _vm.formattedDateTime = $$v;
            },
            expression: "formattedDateTime"
          }
        }, "v-text-field", attrs, false), on))];
      }
    }]),
    model: {
      value: _vm.dateMenu,
      callback: function callback($$v) {
        _vm.dateMenu = $$v;
      },
      expression: "dateMenu"
    }
  }, [_vm._v(" "), _c("v-card", [_c("div", {
    staticClass: "d-flex"
  }, [_c("v-date-picker", {
    staticClass: "v-date-picker--compact",
    attrs: {
      scrollable: ""
    },
    on: {
      input: function input($event) {
        _vm.dateMenu = false;
      }
    },
    model: {
      value: _vm.request.tanggal,
      callback: function callback($$v) {
        _vm.$set(_vm.request, "tanggal", $$v);
      },
      expression: "request.tanggal"
    }
  }), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-4 d-flex flex-column"
  }, [_c("v-select", {
    staticClass: "mb-4",
    attrs: {
      items: _vm.hours,
      label: "Hour",
      dense: "",
      "hide-details": ""
    },
    on: {
      change: _vm.updateDateTime
    },
    model: {
      value: _vm.selectedHour,
      callback: function callback($$v) {
        _vm.selectedHour = $$v;
      },
      expression: "selectedHour"
    }
  }), _vm._v(" "), _c("v-select", {
    attrs: {
      items: _vm.minutes,
      label: "Minute",
      dense: "",
      "hide-details": ""
    },
    on: {
      change: _vm.updateDateTime
    },
    model: {
      value: _vm.selectedMinute,
      callback: function callback($$v) {
        _vm.selectedMinute = $$v;
      },
      expression: "selectedMinute"
    }
  })], 1)], 1)])], 1)], 1)], 1), _vm._v(" "), _c("v-card", {
    staticClass: "mt-4"
  }, [_c("v-card-title", [_vm._v("\n          Daftar Barang\n          "), _c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: _vm.addItem
    }
  }, [_vm._v("+ Tambah")])], 1), _vm._v(" "), _c("v-card-text", [_c("v-simple-table", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn() {
        return [_c("thead", [_c("tr", [_c("th", [_vm._v("#")]), _vm._v(" "), _c("th", [_vm._v("Barang")]), _vm._v(" "), _c("th", [_vm._v("Lokasi")]), _vm._v(" "), _c("th", [_vm._v("Tersedia")]), _vm._v(" "), _c("th", [_vm._v("Kuantiti")]), _vm._v(" "), _c("th", [_vm._v("Satuan")]), _vm._v(" "), _c("th", [_vm._v("Keterangan")]), _vm._v(" "), _c("th", [_vm._v("Status")]), _vm._v(" "), _c("th", [_vm._v("Actions")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.request.items, function (item, index) {
          return _c("tr", {
            key: index
          }, [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_c("v-autocomplete", {
            attrs: {
              items: _vm.availableItems,
              "item-text": "nama_barang",
              "item-value": "id",
              "hide-no-data": "",
              "hide-selected": "",
              clearable: ""
            },
            on: {
              change: function change($event) {
                return _vm.updateItemDetails(index);
              }
            },
            model: {
              value: item.barang,
              callback: function callback($$v) {
                _vm.$set(item, "barang", $$v);
              },
              expression: "item.barang"
            }
          })], 1), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.lokasi))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.tersedia))]), _vm._v(" "), _c("td", [_c("v-text-field", {
            attrs: {
              type: "number",
              min: "1",
              rules: [function (v) {
                return v <= item.tersedia || "Exceeds available quantity";
              }]
            },
            model: {
              value: item.kuantiti,
              callback: function callback($$v) {
                _vm.$set(item, "kuantiti", _vm._n($$v));
              },
              expression: "item.kuantiti"
            }
          })], 1), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.satuan))]), _vm._v(" "), _c("td", [_c("v-text-field", {
            attrs: {
              placeholder: "Optional"
            },
            model: {
              value: item.keterangan,
              callback: function callback($$v) {
                _vm.$set(item, "keterangan", $$v);
              },
              expression: "item.keterangan"
            }
          })], 1), _vm._v(" "), _c("td", [_c("v-chip", {
            attrs: {
              small: "",
              color: item.status === "Tersedia" ? "success" : "error",
              dark: ""
            }
          }, [_vm._v("\n                      " + _vm._s(item.status) + "\n                    ")])], 1), _vm._v(" "), _c("td", [_c("v-btn", {
            attrs: {
              icon: "",
              small: "",
              color: "error"
            },
            on: {
              click: function click($event) {
                return _vm.removeItem(index);
              }
            }
          }, [_c("v-icon", {
            attrs: {
              small: ""
            }
          }, [_vm._v("mdi-delete")])], 1)], 1)]);
        }), 0)];
      },
      proxy: true
    }])
  })], 1)], 1), _vm._v(" "), _c("v-card-actions", {
    staticClass: "mt-4"
  }, [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "error",
      text: ""
    },
    on: {
      click: _vm.cancel
    }
  }, [_vm._v("Batal")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary",
      disabled: !_vm.valid || _vm.request.items.length === 0
    },
    on: {
      click: _vm.submit
    }
  }, [_vm._v("\n          Proses\n        ")])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Requests.vue?vue&type=template&id=761517ba":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Requests.vue?vue&type=template&id=761517ba ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm$selectedRequest;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("v-card", [_c("v-card-title", [_vm._v("\n      Requests\n      "), _c("v-spacer"), _vm._v(" "), _c("v-text-field", {
    attrs: {
      "append-icon": "mdi-magnify",
      label: "Search",
      "single-line": "",
      "hide-details": ""
    },
    model: {
      value: _vm.search,
      callback: function callback($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-4",
    attrs: {
      color: "primary",
      dark: ""
    },
    on: {
      click: function click($event) {
        _vm.addDialog = true;
      }
    }
  }, [_vm._v("\n        Add Request\n      ")])], 1), _vm._v(" "), _c("v-data-table", {
    staticClass: "elevation-1",
    attrs: {
      headers: _vm.headers,
      items: _vm.requests,
      search: _vm.search,
      loading: _vm.loading
    },
    scopedSlots: _vm._u([{
      key: "item.status",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("v-chip", {
          attrs: {
            color: _vm.getStatusColor(item.status),
            dark: ""
          }
        }, [_vm._v("\n          " + _vm._s(item.status) + "\n        ")])];
      }
    }, {
      key: "item.actions",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_c("v-icon", {
          staticClass: "mr-2",
          attrs: {
            small: ""
          },
          on: {
            click: function click($event) {
              return _vm.viewDetails(item);
            }
          }
        }, [_vm._v("\n          mdi-eye\n        ")]), _vm._v(" "), _c("v-icon", {
          staticClass: "mr-2",
          attrs: {
            small: ""
          },
          on: {
            click: function click($event) {
              return _vm.updateStatus(item);
            }
          }
        }, [_vm._v("\n          mdi-pencil\n        ")])];
      }
    }])
  })], 1), _vm._v(" "), _c("v-snackbar", {
    attrs: {
      color: _vm.$store.state.snackbar.color,
      top: "",
      right: ""
    },
    scopedSlots: _vm._u([{
      key: "action",
      fn: function fn(_ref3) {
        var attrs = _ref3.attrs;
        return [_c("v-btn", _vm._b({
          attrs: {
            text: ""
          },
          on: {
            click: function click($event) {
              return _vm.$store.commit("SET_SNACKBAR", {
                show: false,
                text: "",
                color: ""
              });
            }
          }
        }, "v-btn", attrs, false), [_vm._v("\n        Close\n      ")])];
      }
    }]),
    model: {
      value: _vm.$store.state.snackbar.show,
      callback: function callback($$v) {
        _vm.$set(_vm.$store.state.snackbar, "show", $$v);
      },
      expression: "$store.state.snackbar.show"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.$store.state.snackbar.text) + "\n    ")]), _vm._v(" "), _c("v-dialog", {
    attrs: {
      "max-width": "700px"
    },
    model: {
      value: _vm.detailsDialog,
      callback: function callback($$v) {
        _vm.detailsDialog = $$v;
      },
      expression: "detailsDialog"
    }
  }, [_c("v-card", [_c("v-card-title", [_c("span", {
    staticClass: "text-h5"
  }, [_vm._v("Request Details")])]), _vm._v(" "), _c("v-card-text", [_c("v-container", [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("strong", [_vm._v("Request ID:")]), _vm._v(" " + _vm._s(_vm.selectedRequest.id) + "\n            ")]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("strong", [_vm._v("Status:")]), _vm._v(" "), _c("v-chip", {
    attrs: {
      color: _vm.getStatusColor((_vm$selectedRequest = _vm.selectedRequest) === null || _vm$selectedRequest === void 0 ? void 0 : _vm$selectedRequest.status),
      dark: true,
      small: true
    }
  }, [_vm._v("\n                " + _vm._s(_vm.selectedRequest.status) + "\n              ")])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("strong", [_vm._v("Employee:")]), _vm._v(" " + _vm._s(_vm.selectedRequest.nama) + "\n            ")]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("strong", [_vm._v("Department:")]), _vm._v(" " + _vm._s(_vm.selectedRequest.departemen) + "\n            ")]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("strong", [_vm._v("Requested Items:")]), _vm._v(" "), _c("v-simple-table", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn() {
        return [_c("thead", [_c("tr", [_c("th", [_vm._v("Item")]), _vm._v(" "), _c("th", [_vm._v("Location")]), _vm._v(" "), _c("th", [_vm._v("Quantity")]), _vm._v(" "), _c("th", [_vm._v("Unit")]), _vm._v(" "), _c("th", [_vm._v("Notes")]), _vm._v(" "), _c("th", [_vm._v("Status")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.selectedRequest.items, function (item) {
          return _c("tr", {
            key: item.id
          }, [_c("td", [_vm._v(_vm._s(item.nama_barang))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.location))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.quantity))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.satuan))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.keterangan || "-"))]), _vm._v(" "), _c("td", [_c("v-chip", {
            attrs: {
              color: item.status === "Terpenuhi" ? "success" : "error",
              dark: "",
              small: ""
            }
          }, [_vm._v("\n                          " + _vm._s(item.status) + "\n                        ")])], 1)]);
        }), 0)];
      },
      proxy: true
    }])
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("strong", [_vm._v("Notes:")]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.selectedRequest.notes || "No notes provided"))])])], 1)], 1)], 1), _vm._v(" "), _c("v-card-actions", [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "blue darken-1",
      text: ""
    },
    on: {
      click: function click($event) {
        _vm.detailsDialog = false;
      }
    }
  }, [_vm._v("\n          Close\n        ")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      "max-width": "500px"
    },
    model: {
      value: _vm.statusDialog,
      callback: function callback($$v) {
        _vm.statusDialog = $$v;
      },
      expression: "statusDialog"
    }
  }, [_c("v-card", [_c("v-card-title", [_c("span", {
    staticClass: "text-h5"
  }, [_vm._v("Update Request Status")])]), _vm._v(" "), _c("v-card-text", [_c("v-container", [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("v-select", {
    attrs: {
      items: _vm.statusOptions,
      label: "Status",
      required: ""
    },
    model: {
      value: _vm.editedStatus,
      callback: function callback($$v) {
        _vm.editedStatus = $$v;
      },
      expression: "editedStatus"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("v-textarea", {
    attrs: {
      label: "Notes",
      rows: "3"
    },
    model: {
      value: _vm.statusNotes,
      callback: function callback($$v) {
        _vm.statusNotes = $$v;
      },
      expression: "statusNotes"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-card-actions", [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "blue darken-1",
      text: ""
    },
    on: {
      click: _vm.closeStatusDialog
    }
  }, [_vm._v("\n          Cancel\n        ")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "blue darken-1",
      text: ""
    },
    on: {
      click: _vm.saveStatus
    }
  }, [_vm._v("\n          Save\n        ")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      "max-width": "1000px"
    },
    model: {
      value: _vm.addDialog,
      callback: function callback($$v) {
        _vm.addDialog = $$v;
      },
      expression: "addDialog"
    }
  }, [_c("v-card", [_c("v-card-title", [_c("span", {
    staticClass: "text-h5"
  }, [_vm._v("Add New Request")])]), _vm._v(" "), _c("v-card-text", [_c("add-request", {
    on: {
      submit: _vm.handleAddRequest,
      cancel: function cancel($event) {
        _vm.addDialog = false;
      }
    }
  })], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/admin/views/AddRequest.vue":
/*!*************************************************!*\
  !*** ./resources/js/admin/views/AddRequest.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddRequest_vue_vue_type_template_id_ffb5f766__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddRequest.vue?vue&type=template&id=ffb5f766 */ "./resources/js/admin/views/AddRequest.vue?vue&type=template&id=ffb5f766");
/* harmony import */ var _AddRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddRequest.vue?vue&type=script&lang=js */ "./resources/js/admin/views/AddRequest.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddRequest_vue_vue_type_template_id_ffb5f766__WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddRequest_vue_vue_type_template_id_ffb5f766__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/AddRequest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/AddRequest.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/admin/views/AddRequest.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddRequest.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/AddRequest.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/AddRequest.vue?vue&type=template&id=ffb5f766":
/*!*******************************************************************************!*\
  !*** ./resources/js/admin/views/AddRequest.vue?vue&type=template&id=ffb5f766 ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRequest_vue_vue_type_template_id_ffb5f766__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddRequest.vue?vue&type=template&id=ffb5f766 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/AddRequest.vue?vue&type=template&id=ffb5f766");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRequest_vue_vue_type_template_id_ffb5f766__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRequest_vue_vue_type_template_id_ffb5f766__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/views/Requests.vue":
/*!***********************************************!*\
  !*** ./resources/js/admin/views/Requests.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Requests_vue_vue_type_template_id_761517ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Requests.vue?vue&type=template&id=761517ba */ "./resources/js/admin/views/Requests.vue?vue&type=template&id=761517ba");
/* harmony import */ var _Requests_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Requests.vue?vue&type=script&lang=js */ "./resources/js/admin/views/Requests.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Requests_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Requests_vue_vue_type_template_id_761517ba__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Requests_vue_vue_type_template_id_761517ba__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/Requests.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/Requests.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/admin/views/Requests.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Requests_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Requests.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Requests.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Requests_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/Requests.vue?vue&type=template&id=761517ba":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/views/Requests.vue?vue&type=template&id=761517ba ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Requests_vue_vue_type_template_id_761517ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Requests.vue?vue&type=template&id=761517ba */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Requests.vue?vue&type=template&id=761517ba");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Requests_vue_vue_type_template_id_761517ba__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Requests_vue_vue_type_template_id_761517ba__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);