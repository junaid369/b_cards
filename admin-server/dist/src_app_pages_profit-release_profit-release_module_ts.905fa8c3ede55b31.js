"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["src_app_pages_profit-release_profit-release_module_ts"],{

/***/ 53635:
/*!******************************************************************!*\
  !*** ./src/app/pages/profit-release/profit-release.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfitReleaseComponent": () => (/* binding */ ProfitReleaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_report_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/report/report.service */ 89337);
/* harmony import */ var src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common/export-to-excel.service */ 22733);
/* harmony import */ var src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/pagination/pager.service */ 54225);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38143);









function ProfitReleaseComponent_div_39_tr_26_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const customer_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, customer_r5.profit_Date, "mediumDate"), " ");
} }
function ProfitReleaseComponent_div_39_tr_26_ng_template_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Verify Date Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function ProfitReleaseComponent_div_39_tr_26_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfitReleaseComponent_div_39_tr_26_ng_template_20_div_1_Template, 3, 0, "div", 40);
} if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_0_0 = ctx_r9.paymentDetails.get(i_r6 + ".verifyDate")) == null ? null : tmp_0_0.errors) && ctx_r9.errorIndex === i_r6);
} }
function ProfitReleaseComponent_div_39_tr_26_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfitReleaseComponent_div_39_tr_26_ng_container_23_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const customer_r5 = ctx_r17.$implicit; const i_r6 = ctx_r17.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.profitRelease(customer_r5, false, i_r6)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Revert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function ProfitReleaseComponent_div_39_tr_26_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfitReleaseComponent_div_39_tr_26_ng_template_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const customer_r5 = ctx_r20.$implicit; const i_r6 = ctx_r20.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.profitRelease(customer_r5, true, i_r6)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Profit Release ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", customer_r5.customerBalence !== 0 && customer_r5.supplierBalence !== 0);
} }
function ProfitReleaseComponent_div_39_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 35)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ProfitReleaseComponent_div_39_tr_26_ng_container_19_Template, 3, 4, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ProfitReleaseComponent_div_39_tr_26_ng_template_20_Template, 2, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, ProfitReleaseComponent_div_39_tr_26_ng_container_23_Template, 3, 0, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ProfitReleaseComponent_div_39_tr_26_ng_template_24_Template, 2, 1, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const customer_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 13, customer_r5.date, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.customer_code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.customer_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.package_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](customer_r5.supplier_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](customer_r5.customerBalence);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](customer_r5.supplierBalence);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.profit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", customer_r5.profit_Release)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", customer_r5.profit_Release)("ngIfElse", _r11);
} }
function ProfitReleaseComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29)(1, "form", 2)(2, "table", 30)(3, "thead")(4, "tr", 31)(5, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Package");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Receivable");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Payable");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Profit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Profit Release Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Profit Release");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "tbody", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ProfitReleaseComponent_div_39_tr_26_Template, 26, 16, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.myForm2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.arrCustomer);
} }
function ProfitReleaseComponent_ng_template_40_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 45)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function ProfitReleaseComponent_ng_template_40_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " No Data Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function ProfitReleaseComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ProfitReleaseComponent_ng_template_40_ng_container_0_Template, 7, 0, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfitReleaseComponent_ng_template_40_ng_template_1_Template, 5, 0, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.fetchLoading)("ngIfElse", _r24);
} }
const _c0 = function (a0) { return { active: a0 }; };
function ProfitReleaseComponent_div_42_ul_3_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 62)(1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfitReleaseComponent_div_42_ul_3_li_4_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const page_r28 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.setPage(page_r28)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const page_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, ctx_r27.pager.currentPage === page_r28));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", page_r28, " ");
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function ProfitReleaseComponent_div_42_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 55)(1, "li", 56)(2, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfitReleaseComponent_div_42_ul_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.setPage(ctx_r31.pager.currentPage - 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProfitReleaseComponent_div_42_ul_3_li_4_Template, 3, 4, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li", 60)(6, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfitReleaseComponent_div_42_ul_3_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r33.setPage(ctx_r33.pager.currentPage + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c1, ctx_r26.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r26.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c1, ctx_r26.pager.currentPage === ctx_r26.pager.totalPages));
} }
function ProfitReleaseComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 52)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProfitReleaseComponent_div_42_ul_3_Template, 8, 7, "ul", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" Showing ", ctx_r3.getFromCount(), " to ", ctx_r3.getToCount(), " of ", ctx_r3.intTotalCount, " entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.pager.pages && ctx_r3.pager.pages.length);
} }
class ProfitReleaseComponent {
    constructor(reportService, formBuilder, exportToExcelService, pageServiceObj) {
        this.reportService = reportService;
        this.formBuilder = formBuilder;
        this.exportToExcelService = exportToExcelService;
        this.pageServiceObj = pageServiceObj;
        this.arrCustomer = [];
        // pagination
        this.pager = {};
        this.intTotalCount = 0;
        this.intPageLimit = 50;
        this.intSkipCount = 0;
        this.fetchLoading = false;
        this.errorIndex = '';
        this.myForm = this.formBuilder.group({
            customer: [null],
            fromDate: [''],
            toDate: [''],
            paymentStatus: ['ALL'],
        });
        this.myForm2 = this.formBuilder.group({
            paymentDetails: this.formBuilder.array([]),
        });
    }
    get paymentDetails() {
        return this.myForm2.get('paymentDetails');
    }
    newPaymentDetails() {
        return this.formBuilder.group({
            verifyDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
    }
    ngOnInit() {
        this.getAllIncomeReport();
    }
    setPage(page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pageServiceObj.getPager(this.intTotalCount, page, this.intPageLimit);
        this.getAllIncomeReport();
    }
    getFromCount() {
        return this.intPageLimit * (this.pager.currentPage - 1) + 1;
    }
    profitRelease(customer, bool, i) {
        console.log('customer', customer);
        console.log('bool', bool);
        console.log('myForm2', this.myForm2.value);
        if (bool) {
            if (this.paymentDetails.at(i).value.verifyDate === '') {
                this.errorIndex = i;
                return;
            }
            // perform profit release
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'Are you sure?',
                text: `You are going to Release Profit`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#228B22',
                reverseButtons: true,
                confirmButtonText: `Yes, Release it!`,
            }).then((result) => {
                if (result.isConfirmed) {
                    const obj = {
                        strLoginUserId: localStorage.getItem('userId'),
                        fkCustomerId: customer.fkCustomerId,
                        profit_Release: bool,
                        profit_Date: this.paymentDetails.at(i).value.verifyDate,
                    };
                    this.reportService.updateGrossIncomeReport(obj).subscribe((res) => {
                        if (res.success) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                                title: 'Success',
                                text: 'Successfully Released profit',
                                icon: 'success',
                            }).then((value) => {
                                if (value) {
                                    this.errorIndex = '';
                                    this.getAllIncomeReport();
                                }
                            });
                        }
                    });
                }
            });
        }
        else {
            // revert profit release
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'Are you sure?',
                text: `You are going to revert Release Profit`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#228B22',
                reverseButtons: true,
                confirmButtonText: `Yes, Revert it!`,
            }).then((result) => {
                if (result.isConfirmed) {
                    const obj = {
                        strLoginUserId: localStorage.getItem('userId'),
                        fkCustomerId: customer.fkCustomerId,
                        profit_Release: bool,
                        profit_Date: '',
                    };
                    this.reportService.updateGrossIncomeReport(obj).subscribe((res) => {
                        if (res.success) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                                title: 'Success',
                                text: 'Successfully Reverted',
                                icon: 'success',
                            }).then((value) => {
                                if (value) {
                                    this.errorIndex = '';
                                    this.getAllIncomeReport();
                                }
                            });
                        }
                    });
                }
            });
        }
    }
    getToCount() {
        return (this.intPageLimit * (this.pager.currentPage - 1) + this.arrCustomer.length);
    }
    getAllIncomeReport() {
        let skipCount = this.intSkipCount;
        if (this.pager.intSkipCount) {
            skipCount = this.pager.intSkipCount;
        }
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            intSkipCount: skipCount,
            intPageLimit: this.intPageLimit,
            strStartDate: this.myForm.value.fromDate,
            strEndDate: this.myForm.value.toDate,
            paymentType: this.myForm.value.paymentStatus,
            // fkCustomerId: '',
            // cust_Code: this.myForm.value.customer,
            // fromDate: this.myForm.value.fromDate,
            // endDate: this.myForm.value.toDate,
        };
        this.fetchLoading = true;
        this.reportService.getGrossIncomeReport(obj).subscribe((res) => {
            this.fetchLoading = false;
            if (res.success) {
                for (let i = 0; i < res.data.length; i++) {
                    this.paymentDetails.push(this.newPaymentDetails());
                }
                console.log('paymentDetails', this.paymentDetails);
                this.arrCustomer = res.data;
                this.intTotalCount = res.count;
                this.pager = this.pageServiceObj.getPager(this.intTotalCount, this.pager.currentPage, this.intPageLimit);
            }
            else {
                this.arrCustomer = [];
                // alert(res.message);
            }
        });
    }
    downloadExcel() {
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            intSkipCount: 0,
            intPageLimit: 1000000,
            strStartDate: this.myForm.value.fromDate,
            strEndDate: this.myForm.value.toDate,
            paymentType: this.myForm.value.paymentStatus,
        };
        this.fetchLoading = true;
        this.reportService.getGrossIncomeReport(obj).subscribe((res) => {
            this.fetchLoading = false;
            if (res.success) {
                let jsonData = [];
                res.data.forEach((e) => {
                    let obj = {
                        Date: moment__WEBPACK_IMPORTED_MODULE_0__(e.date, 'YYYY-MM-DD').format('DD-MM-YYYY'),
                        'Customer Code': e.customer_code,
                        'Customer Name': e.customer_name,
                        Package: e.package_name,
                        Supplier: e.supplier_name,
                        Receivable: e.customerBalence,
                        Payable: e.supplierBalence,
                        Profit: e.profit,
                    };
                    jsonData.push(obj);
                });
                this.exportToExcelService.exportAsExcelFile(jsonData, 'Gross Income Report ');
            }
        });
    }
}
ProfitReleaseComponent.ɵfac = function ProfitReleaseComponent_Factory(t) { return new (t || ProfitReleaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_report_report_service__WEBPACK_IMPORTED_MODULE_2__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_3__.ExportToExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_4__.PagerService)); };
ProfitReleaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProfitReleaseComponent, selectors: [["app-profit-release"]], decls: 43, vars: 4, consts: [[1, "card", "mb-3"], [1, "card-body"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "fromDate"], [1, ""], ["type", "date", "id", "fromDate", "formControlName", "fromDate", 1, "form-control", "form-control-solid"], ["for", "toDate"], ["type", "date", "id", "toDate", "formControlName", "toDate", 1, "form-control", "form-control-solid"], ["for", "status"], [1, "flex", "gap-3", "py-3"], [1, "form-check", "form-check-custom", "form-check-primary", "form-check-solid"], ["type", "radio", "value", "ALL", "formControlName", "paymentStatus", "id", "ALL", 1, "form-check-input"], ["for", "ALL", 1, "form-check-label"], [1, "form-check", "form-check-custom", "form-check-warning", "form-check-solid"], ["type", "radio", "value", "ONGOING", "formControlName", "paymentStatus", "id", "ONGOING", 1, "form-check-input"], ["for", "ONGOING", 1, "form-check-label"], [1, "form-check", "form-check-custom", "form-check-success", "form-check-solid"], ["type", "radio", "value", "VERIFY", "formControlName", "paymentStatus", "id", "VERIFY", 1, "form-check-input"], ["for", "VERIFY", 1, "form-check-label"], [1, "text-right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-search"], [1, "row", "g-5", "g-xl-10"], [1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noDataTemplate", ""], ["class", "flex justify-center md:justify-between flex-col md:flex-row p-5", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-row-dashed", "table-row-gray-300", "align-middle", "gs-0", "gy-4", "w-full", "text-center"], [1, "fw-bold", "text-muted"], [1, "min-w-130px"], ["formArrayName", "paymentDetails"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "formGroupName"], [4, "ngIf", "ngIfElse"], ["elsePRel", ""], ["elseReleases", ""], ["type", "date", "formControlName", "verifyDate", 1, "form-control", "form-control-solid"], ["class", "text-red-500", 4, "ngIf"], [1, "text-red-500"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "btn", "btn-success", "btn-sm", 3, "disabled", "click"], ["elseTemplate", ""], [1, "d-flex", "flex-column", "align-items-center"], [1, "text-center", "px-4"], ["src", "./assets/media/illustrations/dozzy-1/5.png", "alt", "", 1, "mw-100", "mh-300px", "animate-pulse"], [1, "fw-bold", "text-xl", "text-gray-600", "text-center", "pt-15"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], ["src", "./assets/media/illustrations/sketchy-1/5.png", "alt", "", 1, "mw-100", "mh-300px"], [1, "fw-bold", "fs-6", "text-gray-600", "text-center", "pt-15"], [1, "flex", "justify-center", "md:justify-between", "flex-col", "md:flex-row", "p-5"], [1, "fs-6", "fw-bold", "text-gray-700", "mb-3", "md:mb-0", "text-center"], ["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "page-item", "previous", 3, "ngClass"], [1, "page-link", "cursor-pointer", 3, "click"], [1, "previous"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next", 3, "ngClass"], [1, "next"], [1, "page-item", 3, "ngClass"]], template: function ProfitReleaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "div")(5, "label", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " From Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div")(10, "label", 7)(11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " To Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div")(15, "label", 9)(16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Payment Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 10)(19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Ongoing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 20)(32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfitReleaseComponent_Template_button_click_32_listener() { return ctx.getAllIncomeReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 23)(36, "div", 24)(37, "div", 25)(38, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, ProfitReleaseComponent_div_39_Template, 27, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, ProfitReleaseComponent_ng_template_40_Template, 3, 2, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, ProfitReleaseComponent_div_42_Template, 4, 4, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.arrCustomer.length > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.arrCustomer.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpdC1yZWxlYXNlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWlkZGxlLWVhc3QlMjBIb2xpZGF5c1xcaG9saWRheXMtY2xpZW50XFxzcmNcXGFwcFxccGFnZXNcXHByb2ZpdC1yZWxlYXNlXFxwcm9maXQtcmVsZWFzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJwcm9maXQtcmVsZWFzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 19778:
/*!***************************************************************!*\
  !*** ./src/app/pages/profit-release/profit-release.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfitReleaseModule": () => (/* binding */ ProfitReleaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 80779);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 39929);
/* harmony import */ var src_app_theme_partials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/theme/partials */ 13919);
/* harmony import */ var _profit_release_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profit-release.component */ 53635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);











class ProfitReleaseModule {
}
ProfitReleaseModule.ɵfac = function ProfitReleaseModule_Factory(t) { return new (t || ProfitReleaseModule)(); };
ProfitReleaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProfitReleaseModule });
ProfitReleaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
        ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([
            {
                path: '',
                component: _profit_release_component__WEBPACK_IMPORTED_MODULE_2__.ProfitReleaseComponent,
            },
        ]),
        src_app_theme_partials__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProfitReleaseModule, { declarations: [_profit_release_component__WEBPACK_IMPORTED_MODULE_2__.ProfitReleaseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
        ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, src_app_theme_partials__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_profit-release_profit-release_module_ts.905fa8c3ede55b31.js.map