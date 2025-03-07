(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Requests.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Requests.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Requests',
  data: function data() {
    return {
      search: '',
      loading: false,
      detailsDialog: false,
      statusDialog: false,
      headers: [{
        text: 'Request ID',
        value: 'id'
      }, {
        text: 'Employee',
        value: 'employee_name'
      }, {
        text: 'Department',
        value: 'department_name'
      }, {
        text: 'Date',
        value: 'created_at'
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
        employee_name: '',
        department_name: '',
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
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              try {
                // TODO: Replace with actual API calls
                _this.requests = [{
                  id: 1,
                  employee_name: 'John Doe',
                  department_name: 'IT',
                  created_at: '2024-01-10',
                  status: 'Pending',
                  items: [{
                    id: 1,
                    nama_barang: 'Laptop',
                    quantity: 1,
                    location: 'Office 1'
                  }],
                  notes: 'Urgent request for new employee'
                }];
              } catch (error) {
                console.error('Error fetching requests:', error);
              } finally {
                _this.loading = false;
              }
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
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
    }
  }
});

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
  })], 1), _vm._v(" "), _c("v-data-table", {
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
  })], 1), _vm._v(" "), _c("v-dialog", {
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
      color: _vm.getStatusColor(_vm.selectedRequest.status),
      dark: "",
      small: ""
    }
  }, [_vm._v("\n                " + _vm._s(_vm.selectedRequest.status) + "\n              ")])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("strong", [_vm._v("Employee:")]), _vm._v(" " + _vm._s(_vm.selectedRequest.employee_name) + "\n            ")]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("strong", [_vm._v("Department:")]), _vm._v(" " + _vm._s(_vm.selectedRequest.department_name) + "\n            ")]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("strong", [_vm._v("Requested Items:")]), _vm._v(" "), _c("v-simple-table", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn() {
        return [_c("thead", [_c("tr", [_c("th", [_vm._v("Item")]), _vm._v(" "), _c("th", [_vm._v("Quantity")]), _vm._v(" "), _c("th", [_vm._v("Location")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.selectedRequest.items, function (item) {
          return _c("tr", {
            key: item.id
          }, [_c("td", [_vm._v(_vm._s(item.nama_barang))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.quantity))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.location))])]);
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
  }, [_vm._v("\n          Save\n        ")])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


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