"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["src_app_pages_processing-payment_processing-payment_module_ts"],{

/***/ 516:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/processing-payment/manage-processing-payment/manage-processing-payment.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageProcessingPaymentComponent": () => (/* binding */ ManageProcessingPaymentComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/customer/customer.service */ 21936);
/* harmony import */ var src_app_core_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/supplier/supplier.service */ 76405);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common/export-to-excel.service */ 22733);
/* harmony import */ var src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/pagination/pager.service */ 54225);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-inline-svg-2 */ 39929);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 65485);











function ManageProcessingPaymentComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", item_r5.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r5.user, " ");
} }
function ManageProcessingPaymentComponent_div_46_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManageProcessingPaymentComponent_div_46_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ManageProcessingPaymentComponent_div_46_tr_27_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", customer_r9.customerPhone, " ");
} }
function ManageProcessingPaymentComponent_div_46_tr_27_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", customer_r9.customerCountry, " ");
} }
const _c0 = function (a1, a2, a3) { return ["/processing-payment/update", a1, a2, a3]; };
function ManageProcessingPaymentComponent_div_46_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 40)(4, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td", 40)(7, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ManageProcessingPaymentComponent_div_46_tr_27_td_9_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ManageProcessingPaymentComponent_div_46_tr_27_td_10_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td")(24, "div", 43)(25, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const customer_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r8.userType === "Supplier" ? customer_r9.sup_Code : customer_r9.cust_Code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r8.userType === "Supplier" ? customer_r9.supplierName : customer_r9.customerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r8.userType === "Supplier" ? customer_r9.customerName : customer_r9.supplierName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.userType === "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.userType === "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", customer_r9.Refund_Amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", customer_r9.Service_Credit_Amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", customer_r9.Service_Debit_Amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", customer_r9.Total_Paid_Amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", customer_r9.Total_Amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", customer_r9.Total_Amount - customer_r9.Total_Paid_Amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](13, _c0, ctx_r8.userType === "Customer" ? customer_r9.fkCustomerId : customer_r9.fkSupplierId, ctx_r8.myForm.value.paymentStatus, ctx_r8.userType));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("inlineSVG", "./assets/media/icons/duotune/general/gen008.svg");
} }
function ManageProcessingPaymentComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33)(1, "table", 34)(2, "thead")(3, "tr", 35)(4, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ManageProcessingPaymentComponent_div_46_th_10_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ManageProcessingPaymentComponent_div_46_th_11_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Refund");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "G-Voucher Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "G-Voucher Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Paid Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ManageProcessingPaymentComponent_div_46_tr_27_Template, 27, 17, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.userType === "Supplier" ? "Supplier" : "Customer", " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.userType === "Supplier" ? "Supplier" : "Customer", " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.userType === "Supplier" ? "Customer" : "Supplier", " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.userType === "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.userType === "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.arrCustomer);
} }
function ManageProcessingPaymentComponent_ng_template_47_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 48)(2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function ManageProcessingPaymentComponent_ng_template_47_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " No Data Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function ManageProcessingPaymentComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ManageProcessingPaymentComponent_ng_template_47_ng_container_0_Template, 7, 0, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManageProcessingPaymentComponent_ng_template_47_ng_template_1_Template, 5, 0, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.fetchLoading)("ngIfElse", _r15);
} }
const _c1 = function (a0) { return { active: a0 }; };
function ManageProcessingPaymentComponent_div_49_ul_3_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 65)(1, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageProcessingPaymentComponent_div_49_ul_3_li_4_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const page_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.setPage(page_r19)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const page_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, ctx_r18.pager.currentPage === page_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", page_r19, " ");
} }
const _c2 = function (a0) { return { disabled: a0 }; };
function ManageProcessingPaymentComponent_div_49_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 58)(1, "li", 59)(2, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageProcessingPaymentComponent_div_49_ul_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.setPage(ctx_r22.pager.currentPage - 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ManageProcessingPaymentComponent_div_49_ul_3_li_4_Template, 3, 4, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "li", 63)(6, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageProcessingPaymentComponent_div_49_ul_3_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.setPage(ctx_r24.pager.currentPage + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c2, ctx_r17.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r17.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c2, ctx_r17.pager.currentPage === ctx_r17.pager.totalPages));
} }
function ManageProcessingPaymentComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 55)(1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ManageProcessingPaymentComponent_div_49_ul_3_Template, 8, 7, "ul", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" Showing ", ctx_r4.getFromCount(), " to ", ctx_r4.getToCount(), " of ", ctx_r4.intTotalCount, " entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.pager.pages && ctx_r4.pager.pages.length);
} }
class ManageProcessingPaymentComponent {
    constructor(customerService, supplierService, formBuilder, exportToExcelService, pageServiceObj) {
        this.customerService = customerService;
        this.supplierService = supplierService;
        this.formBuilder = formBuilder;
        this.exportToExcelService = exportToExcelService;
        this.pageServiceObj = pageServiceObj;
        this.arrCustomer = [];
        this.arrAllCustomers = [];
        this.arrAllSuppliers = [];
        this.userType = 'Customer';
        // pagination
        this.pager = {};
        this.intTotalCount = 0;
        this.intPageLimit = 50;
        this.intSkipCount = 0;
        this.fetchLoading = false;
        this.arrUserType = [
            {
                user: 'Customer',
            },
            {
                user: 'Supplier',
            },
        ];
        const pType = localStorage.getItem('processingPaymentType') || 'Customer';
        this.myForm = this.formBuilder.group({
            userType: [pType],
            customer: [null],
            supplier: [''],
            supplierCode: [''],
            phone: [''],
            paymentStatus: ['PENDING'],
        });
    }
    get f() {
        return this.myForm.controls;
    }
    ngOnInit() {
        this.searchPayments();
        // this.getAllSupplierAll();
        this.getAllCustomerAll();
    }
    setPage(page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pageServiceObj.getPager(this.intTotalCount, page, this.intPageLimit);
        this.searchPayments();
    }
    onCustomerChange() {
        const supplier = this.arrAllCustomers.find((e) => {
            return e.cust_Code === this.myForm.value.customer;
        });
        this.myForm.patchValue({
            supplier: supplier.supplier_Name,
            supplierCode: supplier.sup_Code,
        });
    }
    getAllCustomerAll() {
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            fkCustomerId: '',
            strName: '',
            cust_Code: '',
            fromDate: '',
            endDate: '',
            intSkipCount: '0',
            intPageLimit: '1000000',
        };
        this.customerService.getAllCustomer(obj).subscribe((res) => {
            this.fetchLoading = false;
            if (res.success) {
                this.arrAllCustomers = res.data.map((d) => {
                    return Object.assign(Object.assign({}, d), { displayName: d.cust_Code + ' - ' + d.strName });
                });
            }
            else {
                this.arrAllCustomers = [];
            }
        });
    }
    searchPayments() {
        localStorage.setItem('processingPaymentType', this.myForm.value.userType);
        if (this.myForm.value.userType === 'Customer') {
            this.userType = 'Customer';
            this.getCustomerPayments();
        }
        else {
            this.userType = 'Supplier';
            this.getSupplierPayments();
        }
    }
    // getAllSupplierAll() {
    //   const obj = {
    //     strLoginUserId: localStorage.getItem('userId'),
    //     fkSupplierId: '',
    //     strName: '',
    //     cust_Code: '',
    //     fromDate: '',
    //     endDate: '',
    //     intSkipCount: '0',
    //     intPageLimit: '1000000',
    //   };
    //   this.supplierService.getAllSupplier(obj).subscribe((res) => {
    //     if (res.success) {
    //       this.arrAllSuppliers = res.data.map((d) => {
    //         return {
    //           ...d,
    //           displayName: d.sup_Code + ' - ' + d.strName,
    //         };
    //       });
    //     } else {
    //       this.arrAllSuppliers = [];
    //     }
    //   });
    // }
    getFromCount() {
        return this.intPageLimit * (this.pager.currentPage - 1) + 1;
    }
    getToCount() {
        return (this.intPageLimit * (this.pager.currentPage - 1) + this.arrCustomer.length);
    }
    getCustomerPayments() {
        let skipCount = this.intSkipCount;
        if (this.pager.intSkipCount) {
            skipCount = this.pager.intSkipCount;
        }
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            intSkipCount: skipCount,
            intPageLimit: this.intPageLimit,
            fkCustomerId: '',
            cust_Code: this.myForm.value.customer,
            sup_Code: this.myForm.value.supplierCode,
            strPhone: this.myForm.value.phone,
            strName: '',
            payment_Status: this.myForm.value.paymentStatus,
            strCountry: '',
        };
        this.fetchLoading = true;
        this.customerService.getAllCustomerPayment(obj).subscribe((res) => {
            this.fetchLoading = false;
            if (res.success) {
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
    getSupplierPayments() {
        let skipCount = this.intSkipCount;
        if (this.pager.intSkipCount) {
            skipCount = this.pager.intSkipCount;
        }
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            intSkipCount: skipCount,
            intPageLimit: this.intPageLimit,
            fkSupplierId: '',
            sup_Code: this.myForm.value.supplierCode,
            cust_Code: this.myForm.value.customer,
            strPhone: this.myForm.value.phone,
            strName: '',
            payment_Status: this.myForm.value.paymentStatus,
            strCountry: '',
        };
        this.fetchLoading = true;
        this.supplierService.getPaymentSupplier(obj).subscribe((res) => {
            this.fetchLoading = false;
            if (res.success) {
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
        if (this.myForm.value.userType === 'Customer') {
            const obj = {
                strLoginUserId: localStorage.getItem('userId'),
                intSkipCount: 0,
                intPageLimit: 1000000,
                fkCustomerId: '',
                cust_Code: this.myForm.value.customer,
                strPhone: this.myForm.value.phone,
                strName: '',
                payment_Status: this.myForm.value.paymentStatus,
                strCountry: '',
            };
            this.fetchLoading = true;
            this.customerService.getAllCustomerPayment(obj).subscribe((res) => {
                this.fetchLoading = false;
                if (res.success) {
                    let jsonData = [];
                    res.data.forEach((e) => {
                        e.paymentDetails.forEach((payment, i) => {
                            let obj = {};
                            if (i === 0)
                                obj = {
                                    'Customer Code': e.cust_Code,
                                    'Customer Name': e.customerName,
                                    Phone: e.customerPhone,
                                    Country: e.customerCountry,
                                    Refund: e.Refund_Amount,
                                    'Paid Amount': e.Total_Paid_Amount,
                                    'G-Voucher Credit': e.Service_Credit_Amount,
                                    'G-Voucher Debit': e.Service_Debit_Amount,
                                    'Total Amount': e.Total_Amount,
                                    Balance: e.Total_Amount - e.Total_Paid_Amount,
                                    'Created Admin': e.createdAdminName,
                                    'Created At': moment__WEBPACK_IMPORTED_MODULE_0__(e.createdAt).format('DD-MM-YYYY'),
                                    'Updated Admin': e.updatedAdminName,
                                    'Updated At': moment__WEBPACK_IMPORTED_MODULE_0__(e.updatedAt).format('DD-MM-YYYY'),
                                };
                            else
                                obj = {
                                    'Customer Code': '',
                                    'Customer Name': '',
                                    Phone: '',
                                    Country: '',
                                    Refund: '',
                                    'Paid Amount': '',
                                    'G-Voucher Credit': '',
                                    'G-Voucher Debit': '',
                                    'Total Amount': '',
                                    Balance: '',
                                    'Created Admin': '',
                                    'Created At': '',
                                    'Updated Admin': '',
                                    'Updated At': '',
                                };
                            obj['Payment Type'] = payment.type;
                            obj['Transfer Mode'] = payment.transferMode;
                            obj['Bank'] = payment.bank;
                            obj['Amount'] = payment.amount;
                            obj['Status'] = this.myForm.value.paymentStatus;
                            obj['Date'] = moment__WEBPACK_IMPORTED_MODULE_0__(payment.date).format('DD-MM-YYYY');
                            obj['Description'] = payment.description;
                            jsonData.push(obj);
                        });
                    });
                    // console.log('jsonData', jsonData);
                    this.exportToExcelService.exportAsExcelFile(jsonData, 'Processing Payments Customer ');
                }
            });
        }
        else {
            let skipCount = this.intSkipCount;
            if (this.pager.intSkipCount) {
                skipCount = this.pager.intSkipCount;
            }
            const obj = {
                strLoginUserId: localStorage.getItem('userId'),
                intSkipCount: 0,
                intPageLimit: 1000000,
                fkSupplierId: '',
                sup_Code: this.myForm.value.supplierCode,
                cust_Code: this.myForm.value.customer,
                strPhone: this.myForm.value.phone,
                strName: '',
                payment_Status: this.myForm.value.paymentStatus,
                strCountry: '',
            };
            this.fetchLoading = true;
            this.supplierService.getPaymentSupplier(obj).subscribe((res) => {
                this.fetchLoading = false;
                if (res.success) {
                    let jsonData = [];
                    res.data.forEach((e) => {
                        e.paymentDetails.forEach((payment, i) => {
                            let obj = {};
                            if (i === 0)
                                obj = {
                                    'Supplier Code': e.sup_Code,
                                    'Supplier Name': e.supplierName,
                                    'Customer Name': e.customerName,
                                    Phone: e.customerPhone,
                                    Country: e.customerCountry,
                                    Refund: e.Refund_Amount,
                                    'Paid Amount': e.Total_Paid_Amount,
                                    'G-Voucher Credit': e.Service_Credit_Amount,
                                    'G-Voucher Debit': e.Service_Debit_Amount,
                                    'Total Amount': e.Total_Amount,
                                    Balance: e.Total_Amount - e.Total_Paid_Amount,
                                    'Created Admin': e.createdAdminName,
                                    'Created At': moment__WEBPACK_IMPORTED_MODULE_0__(e.createdAt).format('DD-MM-YYYY'),
                                    'Updated Admin': e.updatedAdminName,
                                    'Updated At': moment__WEBPACK_IMPORTED_MODULE_0__(e.updatedAt).format('DD-MM-YYYY'),
                                };
                            else
                                obj = {
                                    'Supplier Code': '',
                                    'Supplier Name': '',
                                    'Customer Name': '',
                                    Phone: '',
                                    Country: '',
                                    Refund: '',
                                    'Paid Amount': '',
                                    'G-Voucher Credit': '',
                                    'G-Voucher Debit': '',
                                    'Total Amount': '',
                                    Balance: '',
                                    'Created Admin': '',
                                    'Created At': '',
                                    'Updated Admin': '',
                                    'Updated At': '',
                                };
                            obj['Payment Type'] = payment.type;
                            obj['Transfer Mode'] = payment.transferMode;
                            obj['Bank'] = payment.bank;
                            obj['Amount'] = payment.amount;
                            obj['Status'] = this.myForm.value.paymentStatus;
                            obj['Date'] = moment__WEBPACK_IMPORTED_MODULE_0__(payment.date).format('DD-MM-YYYY');
                            obj['Description'] = payment.description;
                            jsonData.push(obj);
                        });
                    });
                    // console.log('jsonData', jsonData);
                    this.exportToExcelService.exportAsExcelFile(jsonData, 'Processing Payments Supplier ');
                }
            });
        }
    }
}
ManageProcessingPaymentComponent.ɵfac = function ManageProcessingPaymentComponent_Factory(t) { return new (t || ManageProcessingPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_2__.SupplierService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_3__.ExportToExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_4__.PagerService)); };
ManageProcessingPaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ManageProcessingPaymentComponent, selectors: [["app-manage-processing-payment"]], decls: 50, vars: 7, consts: [[1, "card", "mb-3"], [1, "card-body"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "type"], [1, ""], ["name", "type", "formControlName", "userType", "id", "type", 1, "form-select", "form-select-solid"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "Customer"], ["bindLabel", "displayName", "bindValue", "cust_Code", "formControlName", "customer", "placeholder", "Start Typing...", 3, "items", "change"], ["for", "customer"], [1, "form-control", "form-control-solid", "min-h-[43.5px]"], ["for", "status"], [1, "flex", "gap-3", "py-3"], [1, "form-check", "form-check-custom", "form-check-warning", "form-check-solid"], ["type", "radio", "value", "PENDING", "formControlName", "paymentStatus", "id", "pending", "checked", "checked", 1, "form-check-input"], ["for", "pending", 1, "form-check-label"], [1, "form-check", "form-check-custom", "form-check-success", "form-check-solid"], ["type", "radio", "value", "VERIFY", "formControlName", "paymentStatus", "id", "verified", 1, "form-check-input"], ["for", "verified", 1, "form-check-label"], [1, "text-right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-search"], [1, "text-right", "mb-3"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-cloud-download"], [1, "row", "g-5", "g-xl-10"], [1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noDataTemplate", ""], ["class", "flex justify-center md:justify-between flex-col md:flex-row p-5", 4, "ngIf"], [3, "value"], [1, "table-responsive"], [1, "table", "table-row-dashed", "table-row-gray-300", "align-middle", "gs-0", "gy-4", "w-full"], [1, "fw-bold", "text-muted"], [1, "min-w-130px"], [1, "min-w-130px", "text-left"], ["class", "min-w-130px", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-left"], [1, "m-0", "text-base", "font-bold"], [4, "ngIf"], [1, "d-flex", "justify-content-start", "flex-shrink-0"], [1, "btn", "btn-icon", "bg-light-primary", "btn-active-color-primary", "btn-sm", "me-1", 3, "routerLink"], [1, "svg-icon", "svg-icon-3", "svg-icon-primary", 3, "inlineSVG"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "d-flex", "flex-column", "align-items-center"], [1, "text-center", "px-4"], ["src", "./assets/media/illustrations/dozzy-1/5.png", "alt", "", 1, "mw-100", "mh-300px", "animate-pulse"], [1, "fw-bold", "text-xl", "text-gray-600", "text-center", "pt-15"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], ["src", "./assets/media/illustrations/sketchy-1/5.png", "alt", "", 1, "mw-100", "mh-300px"], [1, "fw-bold", "fs-6", "text-gray-600", "text-center", "pt-15"], [1, "flex", "justify-center", "md:justify-between", "flex-col", "md:flex-row", "p-5"], [1, "fs-6", "fw-bold", "text-gray-700", "mb-3", "md:mb-0", "text-center"], ["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "page-item", "previous", 3, "ngClass"], [1, "page-link", "cursor-pointer", 3, "click"], [1, "previous"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next", 3, "ngClass"], [1, "next"], [1, "page-item", 3, "ngClass"]], template: function ManageProcessingPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "div")(5, "label", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " User Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ManageProcessingPaymentComponent_option_9_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div")(11, "label", 8)(12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ng-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ManageProcessingPaymentComponent_Template_ng_select_change_14_listener() { return ctx.onCustomerChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div")(16, "label", 10)(17, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Supplier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div")(22, "label", 12)(23, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " Payment Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 13)(26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " Pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " Verified ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 20)(35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageProcessingPaymentComponent_Template_button_click_35_listener() { return ctx.searchPayments(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 23)(39, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageProcessingPaymentComponent_Template_button_click_39_listener() { return ctx.downloadExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 26)(43, "div", 27)(44, "div", 28)(45, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, ManageProcessingPaymentComponent_div_46_Template, 28, 6, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, ManageProcessingPaymentComponent_ng_template_47_Template, 3, 2, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, ManageProcessingPaymentComponent_div_49_Template, 4, 4, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.arrUserType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.arrAllCustomers);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.myForm.value.supplier, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.arrCustomer.length > 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.arrCustomer.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_5__.InlineSVGDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1wcm9jZXNzaW5nLXBheW1lbnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWlkZGxlLWVhc3QlMjBIb2xpZGF5c1xcaG9saWRheXMtY2xpZW50XFxzcmNcXGFwcFxccGFnZXNcXHByb2Nlc3NpbmctcGF5bWVudFxcbWFuYWdlLXByb2Nlc3NpbmctcGF5bWVudFxcbWFuYWdlLXByb2Nlc3NpbmctcGF5bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJtYW5hZ2UtcHJvY2Vzc2luZy1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ 23110:
/*!***********************************************************************!*\
  !*** ./src/app/pages/processing-payment/processing-payment.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessingPaymentModule": () => (/* binding */ ProcessingPaymentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 80779);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 39929);
/* harmony import */ var src_app_theme_partials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/theme/partials */ 13919);
/* harmony import */ var _manage_processing_payment_manage_processing_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-processing-payment/manage-processing-payment.component */ 516);
/* harmony import */ var _update_processing_payment_update_processing_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-processing-payment/update-processing-payment.component */ 4504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);












class ProcessingPaymentModule {
}
ProcessingPaymentModule.ɵfac = function ProcessingPaymentModule_Factory(t) { return new (t || ProcessingPaymentModule)(); };
ProcessingPaymentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ProcessingPaymentModule });
ProcessingPaymentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
        ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
            {
                path: '',
                component: _manage_processing_payment_manage_processing_payment_component__WEBPACK_IMPORTED_MODULE_2__.ManageProcessingPaymentComponent,
            },
            // {
            //   path: 'create',
            //   component: CreateSupplierComponent,
            // },
            {
                path: 'update/:id/:type/:user',
                component: _update_processing_payment_update_processing_payment_component__WEBPACK_IMPORTED_MODULE_3__.UpdateProcessingPaymentComponent,
            },
        ]),
        src_app_theme_partials__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProcessingPaymentModule, { declarations: [_manage_processing_payment_manage_processing_payment_component__WEBPACK_IMPORTED_MODULE_2__.ManageProcessingPaymentComponent,
        _update_processing_payment_update_processing_payment_component__WEBPACK_IMPORTED_MODULE_3__.UpdateProcessingPaymentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
        ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, src_app_theme_partials__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule] }); })();


/***/ }),

/***/ 4504:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/processing-payment/update-processing-payment/update-processing-payment.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProcessingPaymentComponent": () => (/* binding */ UpdateProcessingPaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/customer/customer.service */ 21936);
/* harmony import */ var src_app_core_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/supplier/supplier.service */ 76405);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 31619);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);










function UpdateProcessingPaymentComponent_div_49_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Refund to ", (tmp_0_0 = ctx_r4.paymentDetails.get(i_r3 + ".customerName")) == null ? null : tmp_0_0.value, " ");
} }
function UpdateProcessingPaymentComponent_div_49_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("mt-1 text-", ((tmp_0_0 = ctx_r5.paymentDetails.get(i_r3 + ".mode")) == null ? null : tmp_0_0.value) === "Credit" ? "green" : "red", "-600");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ((tmp_1_0 = ctx_r5.paymentDetails.get(i_r3 + ".mode")) == null ? null : tmp_1_0.value) === "Credit" ? "Pay from Supplier" : ((tmp_1_0 = ctx_r5.paymentDetails.get(i_r3 + ".mode")) == null ? null : tmp_1_0.value) === "Debit" ? "Pay to Supplier" : "", " ");
} }
function UpdateProcessingPaymentComponent_div_49_div_2_div_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Payment Type Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UpdateProcessingPaymentComponent_div_49_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UpdateProcessingPaymentComponent_div_49_div_2_div_15_small_1_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r6.paymentDetails.get(i_r3 + ".type")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function UpdateProcessingPaymentComponent_div_49_div_2_div_22_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Transfer Mode Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UpdateProcessingPaymentComponent_div_49_div_2_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UpdateProcessingPaymentComponent_div_49_div_2_div_22_small_1_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r7.paymentDetails.get(i_r3 + ".transferMode")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function UpdateProcessingPaymentComponent_div_49_div_2_div_29_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Bank Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UpdateProcessingPaymentComponent_div_49_div_2_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UpdateProcessingPaymentComponent_div_49_div_2_div_29_small_1_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r8.paymentDetails.get(i_r3 + ".bank")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function UpdateProcessingPaymentComponent_div_49_div_2_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 26);
} }
function UpdateProcessingPaymentComponent_div_49_div_2_div_37_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Amount Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UpdateProcessingPaymentComponent_div_49_div_2_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UpdateProcessingPaymentComponent_div_49_div_2_div_37_small_1_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r10.paymentDetails.get(i_r3 + ".amount")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function UpdateProcessingPaymentComponent_div_49_div_2_div_45_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Date Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UpdateProcessingPaymentComponent_div_49_div_2_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UpdateProcessingPaymentComponent_div_49_div_2_div_45_small_1_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r11.paymentDetails.get(i_r3 + ".date")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function UpdateProcessingPaymentComponent_div_49_div_2_div_52_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Description Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UpdateProcessingPaymentComponent_div_49_div_2_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UpdateProcessingPaymentComponent_div_49_div_2_div_52_small_1_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r12.paymentDetails.get(i_r3 + ".description")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function UpdateProcessingPaymentComponent_div_49_div_2_input_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "input", 29);
} }
function UpdateProcessingPaymentComponent_div_49_div_2_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r14.paymentDetails.get(i_r3 + ".verifyDate")) == null ? null : tmp_0_0.value, " ");
} }
function UpdateProcessingPaymentComponent_div_49_div_2_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Verify Date Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function UpdateProcessingPaymentComponent_div_49_div_2_label_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 9)(1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " ACTION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function UpdateProcessingPaymentComponent_div_49_div_2_a_63_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UpdateProcessingPaymentComponent_div_49_div_2_a_63_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const skill_r2 = ctx_r35.$implicit; const i_r3 = ctx_r35.index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.moveTo(skill_r2.value, i_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Back to Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UpdateProcessingPaymentComponent_div_49_div_2_a_64_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UpdateProcessingPaymentComponent_div_49_div_2_a_64_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const skill_r2 = ctx_r38.$implicit; const i_r3 = ctx_r38.index; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r37.moveTo(skill_r2.value, i_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Approve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UpdateProcessingPaymentComponent_div_49_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "label", 9)(3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Payment Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 16)(8, "label", 9)(9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Payment Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, UpdateProcessingPaymentComponent_div_49_div_2_div_13_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, UpdateProcessingPaymentComponent_div_49_div_2_div_14_Template, 2, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, UpdateProcessingPaymentComponent_div_49_div_2_div_15_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 16)(17, "label", 9)(18, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Transfer Mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, UpdateProcessingPaymentComponent_div_49_div_2_div_22_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 16)(24, "label", 9)(25, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, UpdateProcessingPaymentComponent_div_49_div_2_div_29_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 16)(31, "label", 9)(32, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, UpdateProcessingPaymentComponent_div_49_div_2_div_36_Template, 1, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, UpdateProcessingPaymentComponent_div_49_div_2_div_37_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 16)(39, "label", 9)(40, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](44, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, UpdateProcessingPaymentComponent_div_49_div_2_div_45_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 16)(47, "label", 9)(48, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, UpdateProcessingPaymentComponent_div_49_div_2_div_52_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 16)(54, "label", 9)(55, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, " Verify Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, UpdateProcessingPaymentComponent_div_49_div_2_input_57_Template, 1, 0, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, UpdateProcessingPaymentComponent_div_49_div_2_div_58_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, UpdateProcessingPaymentComponent_div_49_div_2_div_59_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, UpdateProcessingPaymentComponent_div_49_div_2_label_61_Template, 3, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, UpdateProcessingPaymentComponent_div_49_div_2_a_63_Template, 2, 0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, UpdateProcessingPaymentComponent_div_49_div_2_a_64_Template, 2, 0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_19_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_1_0 = ctx_r1.paymentDetails.get(i_r3 + ".payment_Code")) == null ? null : tmp_1_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_2_0 = ctx_r1.paymentDetails.get(i_r3 + ".typeView")) == null ? null : tmp_2_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.paymentDetails.get(i_r3 + ".typeView")) == null ? null : tmp_3_0.value) === "REFUND");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r1.paymentDetails.get(i_r3 + ".mode")) == null ? null : tmp_4_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ((tmp_5_0 = ctx_r1.paymentDetails.get(i_r3 + ".type")) == null ? null : tmp_5_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_6_0 = ctx_r1.paymentDetails.get(i_r3 + ".transferMode")) == null ? null : tmp_6_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ((tmp_7_0 = ctx_r1.paymentDetails.get(i_r3 + ".transferMode")) == null ? null : tmp_7_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_8_0 = ctx_r1.paymentDetails.get(i_r3 + ".bank")) == null ? null : tmp_8_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ((tmp_9_0 = ctx_r1.paymentDetails.get(i_r3 + ".bank")) == null ? null : tmp_9_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_10_0 = ctx_r1.paymentDetails.get(i_r3 + ".amount")) == null ? null : tmp_10_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx_r1.paymentDetails.get(i_r3 + ".transferPercent")) == null ? null : tmp_11_0.value) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ((tmp_12_0 = ctx_r1.paymentDetails.get(i_r3 + ".amount")) == null ? null : tmp_12_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](44, 23, (tmp_13_0 = ctx_r1.paymentDetails.get(i_r3 + ".date")) == null ? null : tmp_13_0.value, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ((tmp_14_0 = ctx_r1.paymentDetails.get(i_r3 + ".date")) == null ? null : tmp_14_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_15_0 = ctx_r1.paymentDetails.get(i_r3 + ".description")) == null ? null : tmp_15_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ((tmp_16_0 = ctx_r1.paymentDetails.get(i_r3 + ".description")) == null ? null : tmp_16_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.type !== "VERIFY");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.type === "VERIFY");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.errorIndex === i_r3 && ((tmp_19_0 = ctx_r1.paymentDetails.get(i_r3 + ".verifyDate")) == null ? null : tmp_19_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.check2(i_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.check(i_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.type === "PENDING");
} }
function UpdateProcessingPaymentComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, UpdateProcessingPaymentComponent_div_49_div_2_Template, 65, 26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.paymentDetails.controls);
} }
class UpdateProcessingPaymentComponent {
    constructor(activatedRoute, customerService, supplierService, toastr, formBuilder, router) {
        this.activatedRoute = activatedRoute;
        this.customerService = customerService;
        this.supplierService = supplierService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.router = router;
        this.customerId = '';
        this.paymentId = '';
        this.type = '';
        this.userType = '';
        this.fetchLoading = false;
        this.arrAllCustomers = [];
        this.arrTransferMode = [];
        this.errorIndex = '';
        this.arrPaymentType = [
            {
                type: 'G-Voucher (Credit)',
                sentType: 'SERVICE',
                mode: 'Credit',
            },
            {
                type: 'G-Voucher (Debit)',
                sentType: 'SERVICE',
                mode: 'Debit',
            },
            {
                type: 'PAID',
                sentType: 'PAID',
                mode: '',
            },
            {
                type: 'REFUND',
                sentType: 'REFUND',
                mode: 'REFUND',
            },
        ];
        this.submitted = false;
        activatedRoute.params.subscribe((params) => {
            this.customerId = params.id;
            this.type = params.type;
            this.userType = params.user;
        });
        this.myForm = this.formBuilder.group({
            customerCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            customerName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            supplierName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            Total_Amount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            Refund_Amount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            Total_Paid_Amount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            Service_Credit_Amount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            Service_Debit_Amount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            paymentDetails: this.formBuilder.array([]),
        });
        // this.getAllCustomerAll();
        this.getMetaData();
    }
    check(i) {
        var _a;
        if (this.type === 'PENDING')
            return false;
        else if (((_a = this.paymentDetails.get(i + '.typeView')) === null || _a === void 0 ? void 0 : _a.value) === 'REFUND' &&
            this.userType === 'Customer')
            return false;
        else
            return true;
    }
    check2(i) {
        var _a;
        if (this.type === 'PENDING')
            return false;
        else if (((_a = this.paymentDetails.get(i + '.typeView')) === null || _a === void 0 ? void 0 : _a.value) === 'REFUND' &&
            this.userType === 'Customer')
            return false;
        else
            return true;
    }
    get f() {
        return this.myForm.controls;
    }
    get paymentDetails() {
        return this.myForm.get('paymentDetails');
    }
    newPaymentDetails() {
        return this.formBuilder.group({
            id: [''],
            type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            typeView: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            payment_Code: [''],
            transferMode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            transferPercent: ['0'],
            transferPercentage: [''],
            customerName: [''],
            actualAmount: [''],
            mode: [''],
            bank: [null],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            verifyDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            description: [''],
        });
    }
    removeItem(i, item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Do you want to remove?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            reverseButtons: true,
            confirmButtonColor: '#dc3741',
        }).then((result) => {
            if (result.isConfirmed) {
                const obj = {
                    strLoginUserId: localStorage.getItem('userId'),
                    fkPaymentId: item.id,
                };
                this.customerService.deleteCustomerPayment(obj).subscribe((res) => {
                    if (res.success)
                        this.paymentDetails.removeAt(i);
                });
            }
        });
    }
    onTransferChange(val, i) {
        this.paymentDetails.at(i).patchValue({ transferPercent: val.percentage });
    }
    addItem() {
        if (this.f.customerCode.value === '' ||
            this.f.customerCode.value === null) {
            this.toastr.warning('', 'Choose a Customer');
            return;
        }
        this.paymentDetails.push(this.newPaymentDetails());
    }
    getCustomer() {
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            intSkipCount: 0,
            intPageLimit: 1,
            fkCustomerId: this.customerId,
            payment_Status: this.type, //or verify
        };
        this.fetchLoading = true;
        this.customerService.getAllCustomerPayment(obj).subscribe((res) => {
            this.fetchLoading = false;
            if (res.success) {
                this.paymentId = res.data[0]._id;
                this.patchValue(res.data[0]);
            }
            else {
                this.toastr.error('Error While fetching data');
            }
        });
    }
    patchValue(customer) {
        this.myForm.patchValue({
            customerCode: this.userType === 'Customer' ? customer.cust_Code : customer.sup_Code,
            customerName: this.userType === 'Customer'
                ? customer.customerName
                : customer.supplierName,
            supplierName: this.userType === 'Customer'
                ? customer.payment_Details[0].supplierName
                : customer.payment_Details[0].customerName,
            Total_Amount: customer.Total_Amount,
            Refund_Amount: customer.Refund_Amount,
            Service_Credit_Amount: customer.Service_Credit_Amount,
            Service_Debit_Amount: customer.Service_Debit_Amount,
            Total_Paid_Amount: customer.Total_Paid_Amount,
        });
        customer.payment_Details.forEach((item, i) => {
            this.addItem();
            this.paymentDetails.at(i).patchValue({
                id: item.payment_id,
                type: item.mode === 'Credit'
                    ? 'SERVICE'
                    : item.mode === 'Debit'
                        ? 'SERVICE'
                        : item.type === 'PAID'
                            ? 'PAID'
                            : item.type === 'REFUND'
                                ? 'REFUND'
                                : '',
                typeView: item.mode === 'Credit'
                    ? 'G-Voucher (Credit)'
                    : item.mode === 'Debit'
                        ? 'G-Voucher (Debit)'
                        : item.type === 'PAID'
                            ? 'PAID'
                            : item.type === 'REFUND'
                                ? 'REFUND'
                                : '',
                payment_Code: item.payment_Code,
                transferMode: item.transferMode,
                customerName: item.customerName,
                transferPercent: item.transferPercent,
                transferPercentage: item.transferPercentage,
                mode: item.mode,
                actualAmount: item.actualAmount,
                verifyDate: item.verifyDate
                    ? this.type === 'PENDING'
                        ? ''
                        : moment__WEBPACK_IMPORTED_MODULE_0__(item.verifyDate).format('DD-MM-YYYY')
                    : '',
                bank: item.bank,
                amount: item.amount,
                date: moment__WEBPACK_IMPORTED_MODULE_0__(item.date).format('YYYY-MM-DD'),
                description: item.description,
            });
        });
    }
    // getAllCustomerAll() {
    //   const obj = {
    //     strLoginUserId: localStorage.getItem('userId'),
    //     fkCustomerId: this.customerId,
    //     strName: '',
    //     cust_Code: '',
    //     fromDate: '',
    //     endDate: '',
    //     intSkipCount: '0',
    //     intPageLimit: '1',
    //   };
    //   this.customerService.getAllCustomer(obj).subscribe((res) => {
    //     if (res.success) {
    //       this.myForm.patchValue({ customer: res.data[0] });
    //       this.getCustomer();
    //     } else {
    //       this.toastr.error('Error While fetching data');
    //     }
    //   });
    // }
    resetForm() {
        this.myForm.reset();
        this.submitted = false;
    }
    getMetaData() {
        const obj = {
            metaType: 'transfermod', // Amentities transfermod
        };
        this.supplierService.metaData(obj).subscribe((data) => {
            if (data.success) {
                this.arrTransferMode = data.data;
                this.userType === 'Customer' ? this.getCustomer() : this.getSupplier();
            }
            else {
                this.arrTransferMode = [];
            }
        });
    }
    getSupplier() {
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            intSkipCount: 0,
            intPageLimit: 1,
            fkSupplierId: this.customerId,
            payment_Status: this.type, //or verify
        };
        this.fetchLoading = true;
        this.supplierService.getPaymentSupplier(obj).subscribe((res) => {
            this.fetchLoading = false;
            if (res.success) {
                this.paymentId = res.data[0]._id;
                this.patchValue(res.data[0]);
            }
            else {
                this.toastr.error('Error While fetching data');
            }
        });
    }
    moveTo(value, i) {
        const type = this.type === 'PENDING' ? 'Verify' : 'Pending';
        if (this.paymentDetails.at(i).value.verifyDate === '') {
            this.errorIndex = i;
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Are you sure?',
            text: `You are going to ${type} this payment!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#228B22',
            reverseButtons: true,
            confirmButtonText: `Yes, ${type} it!`,
        }).then((result) => {
            if (result.isConfirmed) {
                const obj = {
                    strLoginUserId: localStorage.getItem('userId'),
                    fkPaymentId: value.id,
                    paymentInteract: this.userType === 'Customer' ? 'CUSTOMER' : 'SUPPLIER',
                    paymentStatus: this.type === 'PENDING' ? 'VERIFY' : 'PENDING',
                    verifyDate: this.paymentDetails.at(i).value.verifyDate,
                };
                this.customerService.accountsVerification(obj).subscribe((data) => {
                    this.submitted = false;
                    if (data.success) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            title: 'Success',
                            text: 'Successfully Updated Payment Status',
                            icon: 'success',
                        }).then((value) => {
                            if (value) {
                                this.myForm.reset();
                                this.submitted = false;
                                this.router.navigate(['/processing-payment']);
                            }
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            title: 'Error',
                            text: data.message,
                            icon: 'error',
                        });
                    }
                });
            }
        });
    }
}
UpdateProcessingPaymentComponent.ɵfac = function UpdateProcessingPaymentComponent_Factory(t) { return new (t || UpdateProcessingPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_3__.SupplierService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
UpdateProcessingPaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UpdateProcessingPaymentComponent, selectors: [["app-update-processing-payment"]], decls: 50, vars: 16, consts: [[1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], [1, "card-body"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "name"], [1, "required"], [1, "form-control", "form-control-solid"], [1, "form-control", "form-control-solid", "min-h-[43.5px]"], ["for", "amount"], [1, ""], ["class", "mt-5", 4, "ngIf"], [1, "mt-5"], ["formArrayName", "paymentDetails", 1, "divide-y"], ["class", "grid grid-cols-6 max-xl:grid-cols-4 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3 py-3", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-6", "max-xl:grid-cols-4", "max-lg:grid-cols-4", "max-md:grid-cols-2", "max-sm:grid-cols-1", "gap-3", "py-3", 3, "formGroupName"], [1, "min-w-[160px]"], ["class", "text-sm text-gray-700 mt-1", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "text-red-500", 4, "ngIf"], ["type", "date", "class", "form-control form-control-solid", "placeholder", "Date", "formControlName", "verifyDate", 4, "ngIf"], ["class", "form-control form-control-solid min-h-[43.5px]", 4, "ngIf"], [1, "min-w-[160px]", "flex", "flex-col", "justify-end"], ["for", "amount", 4, "ngIf"], ["class", "btn btn-warning btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-success btn-sm", 3, "click", 4, "ngIf"], [1, "text-sm", "text-gray-700", "mt-1"], [1, "text-red-500"], [4, "ngIf"], ["type", "date", "placeholder", "Date", "formControlName", "verifyDate", 1, "form-control", "form-control-solid"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "btn", "btn-success", "btn-sm", 3, "click"]], template: function UpdateProcessingPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 3)(6, "div", 4)(7, "div")(8, "label", 5)(9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div")(14, "label", 5)(15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div")(20, "label", 9)(21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Total Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div")(26, "label", 9)(27, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Total Paid Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div")(32, "label", 9)(33, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Refund Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div")(38, "label", 9)(39, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, " G-Voucher Credit Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div")(44, "label", 9)(45, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " G-Voucher Debit Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, UpdateProcessingPaymentComponent_div_49_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("fw-bold mb-3 ", ctx.type === "VERIFY" ? "text-green-500" : "text-orange-500", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.type === "VERIFY" ? "Verified" : "Pending", " Payments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.userType, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.f.customerCode.value, " - ", ctx.f.customerName.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.userType === "Customer" ? "Supplier" : "Customer", " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.f.supplierName.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.f.Total_Amount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.f.Total_Paid_Amount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.f.Refund_Amount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.f.Service_Credit_Amount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.f.Service_Debit_Amount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.paymentDetails.controls.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1wcm9jZXNzaW5nLXBheW1lbnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWlkZGxlLWVhc3QlMjBIb2xpZGF5c1xcaG9saWRheXMtY2xpZW50XFxzcmNcXGFwcFxccGFnZXNcXHByb2Nlc3NpbmctcGF5bWVudFxcdXBkYXRlLXByb2Nlc3NpbmctcGF5bWVudFxcdXBkYXRlLXByb2Nlc3NpbmctcGF5bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJ1cGRhdGUtcHJvY2Vzc2luZy1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_processing-payment_processing-payment_module_ts.29fb833fdb0658e0.js.map