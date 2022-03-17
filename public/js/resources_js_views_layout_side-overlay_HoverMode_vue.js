"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_layout_side-overlay_HoverMode_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/side-overlay/HoverMode.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/side-overlay/HoverMode.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    // Set example settings
    this.$store.commit('sideOverlay', {
      mode: 'close'
    });
    this.$store.commit('sideOverlayHover', {
      mode: 'on'
    });
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    // Restore original settings
    this.$store.commit('sideOverlayHover', {
      mode: 'off'
    });
    next();
  }
});

/***/ }),

/***/ "./resources/js/views/layout/side-overlay/HoverMode.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/layout/side-overlay/HoverMode.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HoverMode_vue_vue_type_template_id_290c3100___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HoverMode.vue?vue&type=template&id=290c3100& */ "./resources/js/views/layout/side-overlay/HoverMode.vue?vue&type=template&id=290c3100&");
/* harmony import */ var _HoverMode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HoverMode.vue?vue&type=script&lang=js& */ "./resources/js/views/layout/side-overlay/HoverMode.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HoverMode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HoverMode_vue_vue_type_template_id_290c3100___WEBPACK_IMPORTED_MODULE_0__.render,
  _HoverMode_vue_vue_type_template_id_290c3100___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layout/side-overlay/HoverMode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layout/side-overlay/HoverMode.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/layout/side-overlay/HoverMode.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HoverMode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HoverMode.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/side-overlay/HoverMode.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HoverMode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layout/side-overlay/HoverMode.vue?vue&type=template&id=290c3100&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/layout/side-overlay/HoverMode.vue?vue&type=template&id=290c3100& ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HoverMode_vue_vue_type_template_id_290c3100___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HoverMode_vue_vue_type_template_id_290c3100___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HoverMode_vue_vue_type_template_id_290c3100___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HoverMode.vue?vue&type=template&id=290c3100& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/side-overlay/HoverMode.vue?vue&type=template&id=290c3100&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/side-overlay/HoverMode.vue?vue&type=template&id=290c3100&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/side-overlay/HoverMode.vue?vue&type=template&id=290c3100& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("base-page-heading", {
        attrs: { title: "Side Overlay", subtitle: "Hover Mode" },
        scopedSlots: _vm._u([
          {
            key: "extra",
            fn: function () {
              return [
                _c(
                  "b-breadcrumb",
                  { staticClass: "breadcrumb-alt" },
                  [
                    _c(
                      "b-breadcrumb-item",
                      { attrs: { href: "javascript:void(0)" } },
                      [_vm._v("Layout")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-breadcrumb-item",
                      { attrs: { href: "javascript:void(0)" } },
                      [_vm._v("Side Overlay")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("Hover Mode"),
                    ]),
                  ],
                  1
                ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content" },
        [
          _c("base-block", { attrs: { rounded: "" } }, [
            _c("p", { staticClass: "text-center" }, [
              _vm._v(
                "\n        You can make a small portion of Side Overlay visible. If you hover it, the Side Overlay will open (screen width greater than 991px).\n      "
              ),
            ]),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);