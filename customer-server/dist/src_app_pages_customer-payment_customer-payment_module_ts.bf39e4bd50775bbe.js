"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["src_app_pages_customer-payment_customer-payment_module_ts"],{

/***/ 46128:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/customer-payment/create-customer-payment/create-customer-payment.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCustomerPaymentComponent": () => (/* binding */ CreateCustomerPaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/customer/customer.service */ 21936);
/* harmony import */ var src_app_core_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/supplier/supplier.service */ 76405);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 31619);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-inline-svg-2 */ 39929);











function CreateCustomerPaymentComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Customer Name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerPaymentComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerPaymentComponent_div_13_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.f.customer.errors.required);
} }
function CreateCustomerPaymentComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Fully Paid. No Balance Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerPaymentComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Payment Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerPaymentComponent_div_56_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("mt-1 text-", ((tmp_0_0 = ctx_r9.paymentDetails.get(i_r8 + ".mode")) == null ? null : tmp_0_0.value) === "Credit" ? "green" : "red", "-600");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ((tmp_1_0 = ctx_r9.paymentDetails.get(i_r8 + ".mode")) == null ? null : tmp_1_0.value) === "Credit" ? "Pay from Supplier" : ((tmp_1_0 = ctx_r9.paymentDetails.get(i_r8 + ".mode")) == null ? null : tmp_1_0.value) === "Debit" ? "Pay to Supplier" : "", " ");
} }
function CreateCustomerPaymentComponent_div_56_div_2_div_7_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Payment Type Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerPaymentComponent_div_56_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerPaymentComponent_div_56_div_2_div_7_small_1_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r10.paymentDetails.get(i_r8 + ".type")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function CreateCustomerPaymentComponent_div_56_div_2_div_13_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Transfer Mode Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerPaymentComponent_div_56_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerPaymentComponent_div_56_div_2_div_13_small_1_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r11.paymentDetails.get(i_r8 + ".transferMode")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function CreateCustomerPaymentComponent_div_56_div_2_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function CreateCustomerPaymentComponent_div_56_div_2_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerPaymentComponent_div_56_div_2_div_26_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Bank Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerPaymentComponent_div_56_div_2_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerPaymentComponent_div_56_div_2_div_26_small_1_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r15.paymentDetails.get(i_r8 + ".bank")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function CreateCustomerPaymentComponent_div_56_div_2_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Amount is greater than Balance Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerPaymentComponent_div_56_div_2_div_33_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Amount Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerPaymentComponent_div_56_div_2_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerPaymentComponent_div_56_div_2_div_33_small_1_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r17.paymentDetails.get(i_r8 + ".amount")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function CreateCustomerPaymentComponent_div_56_div_2_div_38_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Date Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerPaymentComponent_div_56_div_2_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerPaymentComponent_div_56_div_2_div_38_small_1_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r18.paymentDetails.get(i_r8 + ".date")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function CreateCustomerPaymentComponent_div_56_div_2_div_43_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Description Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerPaymentComponent_div_56_div_2_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerPaymentComponent_div_56_div_2_div_43_small_1_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r19.paymentDetails.get(i_r8 + ".description")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function CreateCustomerPaymentComponent_div_56_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "label", 11)(3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Payment Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ng-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateCustomerPaymentComponent_div_56_div_2_Template_ng_select_change_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34); const i_r8 = restoredCtx.index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.onPaymentChange($event, i_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CreateCustomerPaymentComponent_div_56_div_2_div_6_Template, 2, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CreateCustomerPaymentComponent_div_56_div_2_div_7_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 25)(9, "label", 11)(10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Transfer Mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ng-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateCustomerPaymentComponent_div_56_div_2_Template_ng_select_change_12_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34); const i_r8 = restoredCtx.index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.onTransferChange($event, i_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, CreateCustomerPaymentComponent_div_56_div_2_div_13_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 25)(15, "label", 11)(16, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Transfer % ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, CreateCustomerPaymentComponent_div_56_div_2_ng_container_18_Template, 2, 0, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, CreateCustomerPaymentComponent_div_56_div_2_ng_template_19_Template, 2, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 25)(22, "label", 11)(23, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "ng-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, CreateCustomerPaymentComponent_div_56_div_2_div_26_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 25)(28, "label", 11)(29, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, CreateCustomerPaymentComponent_div_56_div_2_div_32_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, CreateCustomerPaymentComponent_div_56_div_2_div_33_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 25)(35, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, CreateCustomerPaymentComponent_div_56_div_2_div_38_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 25)(40, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, CreateCustomerPaymentComponent_div_56_div_2_div_43_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 25)(45, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " ACTION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div")(48, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateCustomerPaymentComponent_div_56_div_2_Template_a_click_48_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34); const i_r8 = restoredCtx.index; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.removeItem(i_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const i_r8 = ctx.index;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_2_0;
    let tmp_3_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r6.arrPaymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r6.paymentDetails.get(i_r8 + ".mode")) == null ? null : tmp_2_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.submitted && ((tmp_3_0 = ctx_r6.paymentDetails.get(i_r8 + ".type")) == null ? null : tmp_3_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r6.arrTransferMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.submitted && ((tmp_5_0 = ctx_r6.paymentDetails.get(i_r8 + ".transferMode")) == null ? null : tmp_5_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r6.paymentDetails.get(i_r8 + ".transferPercent")) == null ? null : tmp_6_0.value) > 0)("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r6.arrBanks);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.submitted && ((tmp_9_0 = ctx_r6.paymentDetails.get(i_r8 + ".bank")) == null ? null : tmp_9_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx_r6.paymentDetails.get(i_r8 + ".amount")) == null ? null : tmp_10_0.value) > ctx_r6.f.totalAmount.value - ctx_r6.f.paidAmount.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.submitted && ((tmp_11_0 = ctx_r6.paymentDetails.get(i_r8 + ".amount")) == null ? null : tmp_11_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.submitted && ((tmp_12_0 = ctx_r6.paymentDetails.get(i_r8 + ".date")) == null ? null : tmp_12_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.submitted && ((tmp_13_0 = ctx_r6.paymentDetails.get(i_r8 + ".description")) == null ? null : tmp_13_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inlineSVG", "./assets/media/icons/duotune/general/gen027.svg");
} }
function CreateCustomerPaymentComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CreateCustomerPaymentComponent_div_56_div_2_Template, 50, 15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.paymentDetails.controls);
} }
function CreateCustomerPaymentComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div")(2, "div")(3, "div")(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateCustomerPaymentComponent_div_57_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r37.resetForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateCustomerPaymentComponent_div_57_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r39.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r4.isLoading);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class CreateCustomerPaymentComponent {
    constructor(customerService, supplierService, toastr, formBuilder, router) {
        this.customerService = customerService;
        this.supplierService = supplierService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.router = router;
        this.arrAllCustomers = [];
        this.arrTransferMode = [];
        this.arrBanks = [];
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
            // {
            //   type: 'REFUND',
            // },
        ];
        this.submitted = false;
        this.isLoading = false;
        this.myForm = this.formBuilder.group({
            customer: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            totalAmount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            paidAmount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            Service_Credit_Amount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            Service_Debit_Amount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            Refund_Amount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            paymentDetails: this.formBuilder.array([]),
        });
        this.getAllCustomerAll();
        this.getMetaData();
        this.getMetaDataBank();
    }
    get f() {
        return this.myForm.controls;
    }
    get paymentDetails() {
        return this.myForm.get('paymentDetails');
    }
    newPaymentDetails() {
        return this.formBuilder.group({
            type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            mode: [''],
            transferMode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            transferPercent: [''],
            transferPercentage: [''],
            bank: [null],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            description: [''],
        });
    }
    removeItem(i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Do you want to remove?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            reverseButtons: true,
            confirmButtonColor: '#dc3741',
        }).then((result) => {
            if (result.isConfirmed) {
                this.paymentDetails.removeAt(i);
            }
        });
    }
    addItem() {
        if (this.f.customer.value === '' || this.f.customer.value === null) {
            this.toastr.warning('', 'Choose a Customer');
            return;
        }
        this.paymentDetails.push(this.newPaymentDetails());
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
    onTransferChange(val, i) {
        this.paymentDetails.at(i).patchValue({ transferPercent: val.percentage });
    }
    onChangeCustomer() {
        var _a, _b, _c, _d;
        this.myForm.patchValue({
            totalAmount: this.myForm.value.customer.Total_Amount,
            paidAmount: ((_a = this.myForm.value.customer) === null || _a === void 0 ? void 0 : _a.Total_Paid_Amount) || 0,
            Refund_Amount: ((_b = this.myForm.value.customer) === null || _b === void 0 ? void 0 : _b.Refund_Amount) || 0,
            Service_Credit_Amount: ((_c = this.myForm.value.customer) === null || _c === void 0 ? void 0 : _c.Service_Credit_Amount) || 0,
            Service_Debit_Amount: ((_d = this.myForm.value.customer) === null || _d === void 0 ? void 0 : _d.Service_Debit_Amount) || 0,
        });
    }
    onPaymentChange(event, i) {
        this.paymentDetails.at(i).patchValue({ mode: event.mode });
    }
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
            }
            else {
                this.arrTransferMode = [];
            }
        });
    }
    getMetaDataBank() {
        const obj = {
            metaType: 'BANK', // Amentities transfermod
        };
        this.supplierService.metaData(obj).subscribe((data) => {
            if (data.success) {
                this.arrBanks = data.data;
            }
            else {
                this.arrBanks = [];
            }
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.myForm.invalid) {
            console.log('invalid');
            return;
        }
        const paymentDetails = this.myForm.value.paymentDetails.map((paymentDetails) => {
            const obj = {
                actualAmount: paymentDetails.amount,
                mode: paymentDetails.mode,
                bank: paymentDetails.bank,
                date: paymentDetails.date,
                description: paymentDetails.description,
                transferMode: paymentDetails.transferMode,
                transferPercent: paymentDetails.transferPercent,
                transferPercentage: paymentDetails.transferPercentage,
                type: paymentDetails.type,
            };
            // if (paymentDetails.transferPercent > 0) {
            //   obj.amount =
            //     paymentDetails.amount -
            //     paymentDetails.amount * (paymentDetails.transferPercentage / 100);
            // } else {
            obj.amount = paymentDetails.amount;
            // }
            return obj;
        });
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            fkCustomerId: this.myForm.value.customer.fkCustomerId,
            Total_Amount: this.myForm.value.customer.Total_Amount,
            fkSupplierId: this.myForm.value.customer.fkSupplierId,
            cust_Code: this.myForm.value.customer.cust_Code,
            payment_Details: paymentDetails,
        };
        // console.log('obj', obj);
        this.isLoading = true;
        this.customerService.addCustomerPayment(obj).subscribe((res) => {
            this.isLoading = false;
            if (res.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Success',
                    text: 'Successfully Created Customer Payment',
                    icon: 'success',
                }).then((value) => {
                    if (value) {
                        this.myForm.reset();
                        this.submitted = false;
                        this.router.navigate(['/customer-payment']);
                    }
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Error',
                    text: res.message,
                    icon: 'error',
                });
            }
        });
    }
}
CreateCustomerPaymentComponent.ɵfac = function CreateCustomerPaymentComponent_Factory(t) { return new (t || CreateCustomerPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_2__.SupplierService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
CreateCustomerPaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreateCustomerPaymentComponent, selectors: [["app-create-customer-payment"]], decls: 58, vars: 16, consts: [[1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], [1, "card-header", "border-0"], [1, "card-title", "fw-bold", "text-dark"], [1, "card-body", "pt-2"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "name"], [1, "required"], ["bindLabel", "displayName", "id", "name", "formControlName", "customer", "placeholder", "Start Typing...", 3, "items", "ngClass", "change"], ["class", "text-red-500", 4, "ngIf"], ["for", "amount"], [1, ""], [1, "form-control", "form-control-solid"], ["class", "text-green-600 text-sm mt-1.5", 4, "ngIf"], [1, "col-12", "text-right", "my-3"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus"], [4, "ngIf"], ["class", "grid grid-cols-2 md:grid-cols-6 gap-2 mt-4", 4, "ngIf"], [1, "text-red-500"], [1, "text-green-600", "text-sm", "mt-1.5"], ["formArrayName", "paymentDetails", 1, "divide-y"], ["class", "grid grid-cols-6 max-xl:grid-cols-4 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3 py-3 mb-5", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-6", "max-xl:grid-cols-4", "max-lg:grid-cols-4", "max-md:grid-cols-2", "max-sm:grid-cols-1", "gap-3", "py-3", "mb-5", 3, "formGroupName"], [1, "min-w-[160px]"], ["bindLabel", "type", "bindValue", "sentType", "dropdownPosition", "bottom", "placeholder", "Choose a Payment Type", "formControlName", "type", 3, "items", "change"], [3, "class", 4, "ngIf"], ["bindLabel", "payment_mode", "bindValue", "payment_mode", "dropdownPosition", "bottom", "placeholder", "Choose a Transfer Mode", "formControlName", "transferMode", 3, "items", "change"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["bindLabel", "bankName", "bindValue", "bankName", "dropdownPosition", "bottom", "placeholder", "Choose a Bank", "formControlName", "bank", 3, "items"], ["type", "number", "placeholder", "Amount", "formControlName", "amount", 1, "form-control", "form-control-solid"], ["class", "text-sm text-orange-600", 4, "ngIf"], ["for", "date"], ["type", "date", "placeholder", "Date", "formControlName", "date", 1, "form-control", "form-control-solid"], ["for", "desc"], ["type", "text", "placeholder", "Description", "formControlName", "description", 1, "form-control", "form-control-solid"], [1, "btn", "btn-icon", "bg-light-danger", "btn-active-color-danger", "btn-sm", 3, "click"], [1, "svg-icon", "svg-icon-3", "svg-icon-danger", 3, "inlineSVG"], ["type", "number", "formControlName", "transferPercentage", "placeholder", "Percentage %", 1, "form-control", "form-control-solid"], [1, "text-sm", "text-orange-600"], [1, "grid", "grid-cols-2", "md:grid-cols-6", "gap-2", "mt-4"], [1, "btn", "btn-light-primary", 3, "click"], [1, "btn", "btn-primary", 3, "disabled", "click"]], template: function CreateCustomerPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Create Customer Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "form", 5)(7, "div", 6)(8, "div")(9, "label", 7)(10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Customer Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ng-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateCustomerPaymentComponent_Template_ng_select_change_12_listener() { return ctx.onChangeCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, CreateCustomerPaymentComponent_div_13_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div")(15, "label", 11)(16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Total Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div")(21, "label", 11)(22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Paid Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, CreateCustomerPaymentComponent_div_26_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div")(28, "label", 11)(29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Balance Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, CreateCustomerPaymentComponent_div_33_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div")(35, "label", 11)(36, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " G-Voucher Credit Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div")(41, "label", 11)(42, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, " G-Voucher Debit Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div")(47, "label", 11)(48, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " Refund Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 15)(53, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateCustomerPaymentComponent_Template_button_click_53_listener() { return ctx.addItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, " Add Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, CreateCustomerPaymentComponent_div_56_Template, 3, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, CreateCustomerPaymentComponent_div_57_Template, 9, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.arrAllCustomers)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c0, ctx.submitted && ctx.f.customer.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.customer.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.f.totalAmount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.f.paidAmount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f.totalAmount.value === ctx.f.paidAmount.value && ctx.f.totalAmount.value !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.f.totalAmount.value - ctx.f.paidAmount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f.totalAmount.value - ctx.f.paidAmount.value === 0 && ctx.f.totalAmount.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.f.Service_Credit_Amount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.f.Service_Debit_Amount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.f.Refund_Amount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.paymentDetails.controls.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.paymentDetails.controls.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_3__.InlineSVGDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jdXN0b21lci1wYXltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6ImNyZWF0ZS1jdXN0b21lci1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 64652:
/*!*******************************************************************!*\
  !*** ./src/app/pages/customer-payment/customer-payment.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentModule": () => (/* binding */ PaymentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 80779);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 39929);
/* harmony import */ var src_app_theme_partials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/theme/partials */ 13919);
/* harmony import */ var _create_customer_payment_create_customer_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-customer-payment/create-customer-payment.component */ 46128);
/* harmony import */ var _manage_customer_payment_manage_customer_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-customer-payment/manage-customer-payment.component */ 32117);
/* harmony import */ var _update_customer_payment_update_customer_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-customer-payment/update-customer-payment.component */ 28576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);













class PaymentModule {
}
PaymentModule.ɵfac = function PaymentModule_Factory(t) { return new (t || PaymentModule)(); };
PaymentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PaymentModule });
PaymentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule,
        ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([
            {
                path: '',
                component: _manage_customer_payment_manage_customer_payment_component__WEBPACK_IMPORTED_MODULE_3__.ManageCustomerPaymentComponent,
            },
            {
                path: 'create',
                component: _create_customer_payment_create_customer_payment_component__WEBPACK_IMPORTED_MODULE_2__.CreateCustomerPaymentComponent,
            },
            {
                path: 'update/:id/:type',
                component: _update_customer_payment_update_customer_payment_component__WEBPACK_IMPORTED_MODULE_4__.UpdateCustomerPaymentComponent,
            },
        ]),
        src_app_theme_partials__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PaymentModule, { declarations: [_manage_customer_payment_manage_customer_payment_component__WEBPACK_IMPORTED_MODULE_3__.ManageCustomerPaymentComponent,
        _create_customer_payment_create_customer_payment_component__WEBPACK_IMPORTED_MODULE_2__.CreateCustomerPaymentComponent,
        _update_customer_payment_update_customer_payment_component__WEBPACK_IMPORTED_MODULE_4__.UpdateCustomerPaymentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule,
        ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, src_app_theme_partials__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule] }); })();


/***/ }),

/***/ 32117:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/customer-payment/manage-customer-payment/manage-customer-payment.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCustomerPaymentComponent": () => (/* binding */ ManageCustomerPaymentComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/customer/customer.service */ 21936);
/* harmony import */ var src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common/export-to-excel.service */ 22733);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/pagination/pager.service */ 54225);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-inline-svg-2 */ 39929);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 65485);










const _c0 = function (a1, a2) { return ["/customer-payment/update", a1, a2]; };
function ManageCustomerPaymentComponent_div_48_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 38)(4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "td")(25, "div", 41)(26, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const customer_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.cust_Code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.customerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](customer_r5.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.customerPhone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.customerCountry, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.Total_Amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.Total_Paid_Amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.Refund_Amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.Service_Credit_Amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.Service_Debit_Amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.Total_Amount - customer_r5.Total_Paid_Amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](13, _c0, customer_r5.fkCustomerId, ctx_r4.myForm.value.paymentStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inlineSVG", "./assets/media/icons/duotune/general/gen008.svg");
} }
function ManageCustomerPaymentComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32)(1, "table", 33)(2, "thead")(3, "tr", 34)(4, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Customer Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Paid Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Refund");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "G-Voucher Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "G-Voucher Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ManageCustomerPaymentComponent_div_48_tr_27_Template, 28, 16, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.arrCustomer);
} }
function ManageCustomerPaymentComponent_ng_template_49_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 46)(2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function ManageCustomerPaymentComponent_ng_template_49_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " No Data Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function ManageCustomerPaymentComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ManageCustomerPaymentComponent_ng_template_49_ng_container_0_Template, 7, 0, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ManageCustomerPaymentComponent_ng_template_49_ng_template_1_Template, 5, 0, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.fetchLoading)("ngIfElse", _r7);
} }
const _c1 = function (a0) { return { active: a0 }; };
function ManageCustomerPaymentComponent_div_51_ul_3_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 63)(1, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageCustomerPaymentComponent_div_51_ul_3_li_4_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const page_r11 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.setPage(page_r11)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const page_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c1, ctx_r10.pager.currentPage === page_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", page_r11, " ");
} }
const _c2 = function (a0) { return { disabled: a0 }; };
function ManageCustomerPaymentComponent_div_51_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 56)(1, "li", 57)(2, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageCustomerPaymentComponent_div_51_ul_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.setPage(ctx_r14.pager.currentPage - 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ManageCustomerPaymentComponent_div_51_ul_3_li_4_Template, 3, 4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li", 61)(6, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageCustomerPaymentComponent_div_51_ul_3_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.setPage(ctx_r16.pager.currentPage + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c2, ctx_r9.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r9.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c2, ctx_r9.pager.currentPage === ctx_r9.pager.totalPages));
} }
function ManageCustomerPaymentComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53)(1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ManageCustomerPaymentComponent_div_51_ul_3_Template, 8, 7, "ul", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" Showing ", ctx_r3.getFromCount(), " to ", ctx_r3.getToCount(), " of ", ctx_r3.intTotalCount, " entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.pager.pages && ctx_r3.pager.pages.length);
} }
class ManageCustomerPaymentComponent {
    constructor(customerService, exportToExcelService, formBuilder, pageServiceObj) {
        this.customerService = customerService;
        this.exportToExcelService = exportToExcelService;
        this.formBuilder = formBuilder;
        this.pageServiceObj = pageServiceObj;
        this.arrCustomer = [];
        this.arrAllCustomers = [];
        // pagination
        this.pager = {};
        this.intTotalCount = 0;
        this.intPageLimit = 50;
        this.intSkipCount = 0;
        this.fetchLoading = false;
        this.myForm = this.formBuilder.group({
            customer: [null],
            supplier: [''],
            supplierCode: [''],
            phone: [''],
            paymentStatus: ['PENDING'],
        });
    }
    ngOnInit() {
        this.getCustomerPayments();
        this.getAllCustomerAll();
    }
    setPage(page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pageServiceObj.getPager(this.intTotalCount, page, this.intPageLimit);
        this.getCustomerPayments();
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
    getFromCount() {
        return this.intPageLimit * (this.pager.currentPage - 1) + 1;
    }
    getToCount() {
        return (this.intPageLimit * (this.pager.currentPage - 1) + this.arrCustomer.length);
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
    downloadExcel() {
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            intSkipCount: 0,
            intPageLimit: 1000000,
            fkCustomerId: '',
            cust_Code: this.myForm.value.customer,
            strPhone: this.myForm.value.phone,
            strName: '',
            sup_Code: this.myForm.value.supplierCode,
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
                            };
                        obj['Payment Code'] = payment.payment_Code;
                        obj['Payment Type'] = payment.type;
                        obj['Transfer Mode'] = payment.transferMode;
                        obj['Bank'] = payment.bank;
                        obj['Payment Status'] = payment.paymentStatus;
                        obj['Amount'] = payment.amount;
                        obj['Date'] = moment__WEBPACK_IMPORTED_MODULE_0__(payment.date).format('DD-MM-YYYY');
                        obj['Description'] = payment.description;
                        jsonData.push(obj);
                    });
                });
                // console.log('jsonData', jsonData);
                this.exportToExcelService.exportAsExcelFile(jsonData, 'Customer Payments ');
            }
        });
    }
}
ManageCustomerPaymentComponent.ɵfac = function ManageCustomerPaymentComponent_Factory(t) { return new (t || ManageCustomerPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_2__.ExportToExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_3__.PagerService)); };
ManageCustomerPaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ManageCustomerPaymentComponent, selectors: [["app-manage-customer-payment"]], decls: 52, vars: 6, consts: [[1, "text-right", "mb-3"], ["routerLink", "/customer-payment/create", 1, "btn", "btn-primary", "btn-sm"], [1, "card", "mb-3"], [1, "card-body"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "Customer"], [1, ""], ["bindLabel", "displayName", "bindValue", "cust_Code", "formControlName", "customer", "placeholder", "Start Typing...", 3, "items", "change"], ["for", "customer"], [1, "form-control", "form-control-solid", "min-h-[43.5px]"], ["for", "phone"], ["type", "text", "id", "phone", "placeholder", "Phone Number", "formControlName", "phone", 1, "form-control", "form-control-solid"], ["for", "status"], [1, "flex", "gap-3", "py-3"], [1, "form-check", "form-check-custom", "form-check-warning", "form-check-solid"], ["type", "radio", "value", "PENDING", "formControlName", "paymentStatus", "id", "pending", "checked", "checked", 1, "form-check-input"], ["for", "pending", 1, "form-check-label"], [1, "form-check", "form-check-custom", "form-check-success", "form-check-solid"], ["type", "radio", "value", "VERIFY", "formControlName", "paymentStatus", "id", "verified", 1, "form-check-input"], ["for", "verified", 1, "form-check-label"], [1, "text-right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-search"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-cloud-download"], [1, "row", "g-5", "g-xl-10"], [1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noDataTemplate", ""], ["class", "flex justify-center md:justify-between flex-col md:flex-row p-5", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-row-dashed", "table-row-gray-300", "align-middle", "gs-0", "gy-4", "w-full"], [1, "fw-bold", "text-muted"], [1, "min-w-130px"], [1, "min-w-130px", "text-left"], [4, "ngFor", "ngForOf"], [1, "text-left"], [1, "m-0", "text-base", "font-bold"], [1, "m-0"], [1, "d-flex", "justify-content-start", "flex-shrink-0"], [1, "btn", "btn-icon", "bg-light-primary", "btn-active-color-primary", "btn-sm", "me-1", 3, "routerLink"], [1, "svg-icon", "svg-icon-3", "svg-icon-primary", 3, "inlineSVG"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "d-flex", "flex-column", "align-items-center"], [1, "text-center", "px-4"], ["src", "./assets/media/illustrations/dozzy-1/5.png", "alt", "", 1, "mw-100", "mh-300px", "animate-pulse"], [1, "fw-bold", "text-xl", "text-gray-600", "text-center", "pt-15"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], ["src", "./assets/media/illustrations/sketchy-1/5.png", "alt", "", 1, "mw-100", "mh-300px"], [1, "fw-bold", "fs-6", "text-gray-600", "text-center", "pt-15"], [1, "flex", "justify-center", "md:justify-between", "flex-col", "md:flex-row", "p-5"], [1, "fs-6", "fw-bold", "text-gray-700", "mb-3", "md:mb-0", "text-center"], ["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "page-item", "previous", 3, "ngClass"], [1, "page-link", "cursor-pointer", 3, "click"], [1, "previous"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next", 3, "ngClass"], [1, "next"], [1, "page-item", 3, "ngClass"]], template: function ManageCustomerPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Create Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div")(8, "label", 6)(9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ng-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ManageCustomerPaymentComponent_Template_ng_select_change_11_listener() { return ctx.onCustomerChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div")(13, "label", 9)(14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Supplier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div")(19, "label", 11)(20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div")(24, "label", 13)(25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Payment Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 14)(28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " Verified ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 21)(37, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageCustomerPaymentComponent_Template_button_click_37_listener() { return ctx.getCustomerPayments(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 0)(41, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageCustomerPaymentComponent_Template_button_click_41_listener() { return ctx.downloadExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 26)(45, "div", 27)(46, "div", 28)(47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, ManageCustomerPaymentComponent_div_48_Template, 28, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, ManageCustomerPaymentComponent_ng_template_49_Template, 3, 2, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, ManageCustomerPaymentComponent_div_51_Template, 4, 4, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.arrAllCustomers);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.myForm.value.supplier, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.arrCustomer.length > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.arrCustomer.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__.InlineSVGDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1jdXN0b21lci1wYXltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6Im1hbmFnZS1jdXN0b21lci1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 28576:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/customer-payment/update-customer-payment/update-customer-payment.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateCustomerPaymentComponent": () => (/* binding */ UpdateCustomerPaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/customer/customer.service */ 21936);
/* harmony import */ var src_app_core_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/supplier/supplier.service */ 76405);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 31619);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-inline-svg-2 */ 39929);












function UpdateCustomerPaymentComponent_div_49_div_2_ng_select_11_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UpdateCustomerPaymentComponent_div_49_div_2_ng_select_11_Template_ng_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.onPaymentChange($event, i_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r4.arrPaymentType);
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r5.paymentDetails.get(i_r3 + ".typeView")) == null ? null : tmp_0_0.value, " ");
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Refund from ", (tmp_0_0 = ctx_r6.paymentDetails.get(i_r3 + ".supplierName")) == null ? null : tmp_0_0.value, " ");
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("mt-1 text-", ((tmp_0_0 = ctx_r7.paymentDetails.get(i_r3 + ".mode")) == null ? null : tmp_0_0.value) === "Credit" ? "green" : "red", "-600");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ((tmp_1_0 = ctx_r7.paymentDetails.get(i_r3 + ".mode")) == null ? null : tmp_1_0.value) === "Credit" ? "Pay from Supplier" : ((tmp_1_0 = ctx_r7.paymentDetails.get(i_r3 + ".mode")) == null ? null : tmp_1_0.value) === "Debit" ? "Pay to Supplier" : "", " ");
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Payment Type Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerPaymentComponent_div_49_div_2_div_15_small_1_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r8.paymentDetails.get(i_r3 + ".type")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function UpdateCustomerPaymentComponent_div_49_div_2_ng_select_20_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UpdateCustomerPaymentComponent_div_49_div_2_ng_select_20_Template_ng_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r38.onTransferChange($event, i_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r9.arrTransferMode);
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r10.paymentDetails.get(i_r3 + ".transferMode")) == null ? null : tmp_0_0.value, " ");
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_22_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Transfer Mode Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerPaymentComponent_div_49_div_2_div_22_small_1_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r11.paymentDetails.get(i_r3 + ".transferMode")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function UpdateCustomerPaymentComponent_div_49_div_2_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function UpdateCustomerPaymentComponent_div_49_div_2_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerPaymentComponent_div_49_div_2_ng_select_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ng-select", 36);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r15.arrBanks);
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r16.paymentDetails.get(i_r3 + ".bank")) == null ? null : tmp_0_0.value, " ");
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_36_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Bank Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerPaymentComponent_div_49_div_2_div_36_small_1_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r17.paymentDetails.get(i_r3 + ".bank")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function UpdateCustomerPaymentComponent_div_49_div_2_input_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 37);
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r19.paymentDetails.get(i_r3 + ".amount")) == null ? null : tmp_0_0.value, " ");
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 31);
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_44_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Amount Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerPaymentComponent_div_49_div_2_div_44_small_1_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r21.paymentDetails.get(i_r3 + ".amount")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function UpdateCustomerPaymentComponent_div_49_div_2_input_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 38);
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, (tmp_0_0 = ctx_r23.paymentDetails.get(i_r3 + ".date")) == null ? null : tmp_0_0.value, "dd/MM/yyyy"), " ");
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_51_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Date Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerPaymentComponent_div_49_div_2_div_51_small_1_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r24.paymentDetails.get(i_r3 + ".date")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_52_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, (tmp_0_0 = ctx_r53.paymentDetails.get(i_r3 + ".verifyDate")) == null ? null : tmp_0_0.value, "dd/MM/yyyy"), " ");
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "label", 8)(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Verify Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, UpdateCustomerPaymentComponent_div_49_div_2_div_52_div_4_Template, 3, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r25.editIndex !== i_r3);
} }
function UpdateCustomerPaymentComponent_div_49_div_2_input_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 39);
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r27.paymentDetails.get(i_r3 + ".description")) == null ? null : tmp_0_0.value, " ");
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_59_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Description Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerPaymentComponent_div_49_div_2_div_59_small_1_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r28.paymentDetails.get(i_r3 + ".description")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_60_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UpdateCustomerPaymentComponent_div_49_div_2_div_60_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65); const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r63.updatePayment(i_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inlineSVG", "./assets/media/icons/duotune/files/fil025.svg");
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_60_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UpdateCustomerPaymentComponent_div_49_div_2_div_60_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r66.editIndex = ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inlineSVG", "./assets/media/icons/duotune/files/fil007.svg");
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_60_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UpdateCustomerPaymentComponent_div_49_div_2_div_60_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r70); const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r68.editPayment(i_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inlineSVG", "./assets/media/icons/duotune/art/art005.svg");
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_60_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UpdateCustomerPaymentComponent_div_49_div_2_div_60_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); const i_r3 = ctx_r72.index; const skill_r2 = ctx_r72.$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r71.removeItem(i_r3, skill_r2.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inlineSVG", "./assets/media/icons/duotune/general/gen027.svg");
} }
function UpdateCustomerPaymentComponent_div_49_div_2_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "label", 8)(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " ACTION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UpdateCustomerPaymentComponent_div_49_div_2_div_60_a_5_Template, 2, 1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UpdateCustomerPaymentComponent_div_49_div_2_div_60_a_6_Template, 2, 1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, UpdateCustomerPaymentComponent_div_49_div_2_div_60_a_7_Template, 2, 1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, UpdateCustomerPaymentComponent_div_49_div_2_div_60_a_8_Template, 2, 1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r29.editIndex === i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r29.editIndex === i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r29.editIndex !== i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r29.editIndex !== i_r3);
} }
function UpdateCustomerPaymentComponent_div_49_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "label", 8)(3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Payment Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 15)(8, "label", 8)(9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Payment Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, UpdateCustomerPaymentComponent_div_49_div_2_ng_select_11_Template, 1, 1, "ng-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, UpdateCustomerPaymentComponent_div_49_div_2_div_12_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, UpdateCustomerPaymentComponent_div_49_div_2_div_13_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, UpdateCustomerPaymentComponent_div_49_div_2_div_14_Template, 2, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, UpdateCustomerPaymentComponent_div_49_div_2_div_15_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 15)(17, "label", 8)(18, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Transfer Mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, UpdateCustomerPaymentComponent_div_49_div_2_ng_select_20_Template, 1, 1, "ng-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, UpdateCustomerPaymentComponent_div_49_div_2_div_21_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, UpdateCustomerPaymentComponent_div_49_div_2_div_22_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 15)(24, "label", 8)(25, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Transfer % ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, UpdateCustomerPaymentComponent_div_49_div_2_ng_container_27_Template, 2, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, UpdateCustomerPaymentComponent_div_49_div_2_ng_template_28_Template, 2, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 15)(31, "label", 8)(32, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, UpdateCustomerPaymentComponent_div_49_div_2_ng_select_34_Template, 1, 1, "ng-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, UpdateCustomerPaymentComponent_div_49_div_2_div_35_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, UpdateCustomerPaymentComponent_div_49_div_2_div_36_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 15)(38, "label", 8)(39, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, UpdateCustomerPaymentComponent_div_49_div_2_input_41_Template, 1, 0, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, UpdateCustomerPaymentComponent_div_49_div_2_div_42_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, UpdateCustomerPaymentComponent_div_49_div_2_div_43_Template, 1, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, UpdateCustomerPaymentComponent_div_49_div_2_div_44_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 15)(46, "label", 8)(47, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, UpdateCustomerPaymentComponent_div_49_div_2_input_49_Template, 1, 0, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, UpdateCustomerPaymentComponent_div_49_div_2_div_50_Template, 3, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, UpdateCustomerPaymentComponent_div_49_div_2_div_51_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, UpdateCustomerPaymentComponent_div_49_div_2_div_52_Template, 5, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 15)(54, "label", 8)(55, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, UpdateCustomerPaymentComponent_div_49_div_2_input_57_Template, 1, 0, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, UpdateCustomerPaymentComponent_div_49_div_2_div_58_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, UpdateCustomerPaymentComponent_div_49_div_2_div_59_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, UpdateCustomerPaymentComponent_div_49_div_2_div_60_Template, 9, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](29);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_1_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_14_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_21_0;
    let tmp_25_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (tmp_1_0 = ctx_r1.paymentDetails.get(i_r3 + ".payment_Code")) == null ? null : tmp_1_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.editIndex === i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.editIndex !== i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.paymentDetails.get(i_r3 + ".typeView")) == null ? null : tmp_4_0.value) === "REFUND");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r1.paymentDetails.get(i_r3 + ".mode")) == null ? null : tmp_5_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ((tmp_6_0 = ctx_r1.paymentDetails.get(i_r3 + ".type")) == null ? null : tmp_6_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.editIndex === i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.editIndex !== i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ((tmp_9_0 = ctx_r1.paymentDetails.get(i_r3 + ".transferMode")) == null ? null : tmp_9_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx_r1.paymentDetails.get(i_r3 + ".transferPercent")) == null ? null : tmp_10_0.value) > 0)("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.editIndex === i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.editIndex !== i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ((tmp_14_0 = ctx_r1.paymentDetails.get(i_r3 + ".bank")) == null ? null : tmp_14_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.editIndex === i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.editIndex !== i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_17_0 = ctx_r1.paymentDetails.get(i_r3 + ".transferPercent")) == null ? null : tmp_17_0.value) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ((tmp_18_0 = ctx_r1.paymentDetails.get(i_r3 + ".amount")) == null ? null : tmp_18_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.editIndex === i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.editIndex !== i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ((tmp_21_0 = ctx_r1.paymentDetails.get(i_r3 + ".date")) == null ? null : tmp_21_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.type === "VERIFY");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.editIndex === i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.editIndex !== i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ((tmp_25_0 = ctx_r1.paymentDetails.get(i_r3 + ".description")) == null ? null : tmp_25_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.type === "PENDING");
} }
function UpdateCustomerPaymentComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, UpdateCustomerPaymentComponent_div_49_div_2_Template, 61, 27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.paymentDetails.controls);
} }
class UpdateCustomerPaymentComponent {
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
        this.fetchLoading = false;
        this.arrAllCustomers = [];
        this.arrTransferMode = [];
        this.arrBanks = [];
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
        });
        this.myForm = this.formBuilder.group({
            customerCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            customerName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            Total_Amount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            Refund_Amount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            Total_Paid_Amount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            Service_Credit_Amount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            Service_Debit_Amount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            paymentDetails: this.formBuilder.array([]),
        });
        this.getMetaData();
        this.getMetaDataBank();
    }
    getMetaDataBank() {
        const obj = {
            metaType: 'BANK', // Amentities transfermod
        };
        this.supplierService.metaData(obj).subscribe((data) => {
            if (data.success) {
                this.arrBanks = data.data;
                this.getCustomer();
                // this.getAllCustomerAll();
            }
            else {
                this.arrBanks = [];
            }
        });
    }
    get f() {
        return this.myForm.controls;
    }
    get paymentDetails() {
        return this.myForm.get('paymentDetails');
    }
    onPaymentChange(event, i) {
        this.paymentDetails.at(i).patchValue({ mode: event.mode });
    }
    newPaymentDetails() {
        return this.formBuilder.group({
            id: [''],
            type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            typeView: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            payment_Code: [''],
            mode: [''],
            transferMode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            transferPercent: [''],
            transferPercentage: [''],
            supplierName: [''],
            actualAmount: [''],
            bank: [null],
            verifyDate: [''],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
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
            customerCode: customer.cust_Code,
            customerName: customer.customerName,
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
                mode: item.mode !== '' ? item.mode : item.type === 'REFUND' ? 'REFUND' : '',
                transferMode: item.transferMode,
                transferPercent: item.transferPercent,
                transferPercentage: item.transferPercentage || 0,
                actualAmount: item.actualAmount,
                supplierName: item.supplierName,
                bank: item.bank,
                verifyDate: item.verifyDate,
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
            }
            else {
                this.arrTransferMode = [];
            }
        });
    }
    editPayment(i) {
        this.editIndex = i;
    }
    updatePayment(i) {
        this.submitted = true;
        if (this.myForm.invalid) {
            return;
        }
        this.myForm.value.paymentDetails.map((paymentDetails) => {
            // if (paymentDetails.transferPercent > 0) {
            //   paymentDetails.amount =
            //     paymentDetails.amount -
            //     paymentDetails.amount * (paymentDetails.transferPercent / 100);
            // }
            return {
                amount: paymentDetails.amount,
                actualAmount: paymentDetails.amount,
                bank: paymentDetails.bank,
                mode: paymentDetails.mode,
                date: paymentDetails.date,
                description: paymentDetails.description,
                transferMode: paymentDetails.transferMode,
                transferPercentage: paymentDetails.transferPercentage,
                type: paymentDetails.type,
            };
        });
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            fkPaymentId: this.myForm.value.paymentDetails[i].id,
            payment_Details: [this.myForm.value.paymentDetails[i]],
        };
        // console.log('obj', obj);
        this.customerService.updateCustomerPayment(obj).subscribe((res) => {
            if (res.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: 'Success',
                    text: 'Successfully Updated Customer Payment',
                    icon: 'success',
                }).then((value) => {
                    if (value) {
                        window.location.reload();
                        // this.myForm.reset();
                        // this.paymentDetails.removeAt(i);
                        // this.submitted = false;
                        // this.editIndex = '';
                        // this.getCustomer();
                        // this.router.navigate(['/customer-payment']);
                    }
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: 'Error',
                    text: res.message,
                    icon: 'error',
                });
            }
        });
    }
}
UpdateCustomerPaymentComponent.ɵfac = function UpdateCustomerPaymentComponent_Factory(t) { return new (t || UpdateCustomerPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_3__.SupplierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
UpdateCustomerPaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UpdateCustomerPaymentComponent, selectors: [["app-update-customer-payment"]], decls: 50, vars: 14, consts: [[1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], [1, "card-body"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "name"], [1, "required"], [1, "form-control", "form-control-solid"], ["for", "amount"], [1, ""], ["class", "mt-5", 4, "ngIf"], [1, "mt-5"], ["formArrayName", "paymentDetails", 1, "divide-y"], ["class", "grid grid-cols-6 max-xl:grid-cols-4 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3 py-3 mb-5", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-6", "max-xl:grid-cols-4", "max-lg:grid-cols-4", "max-md:grid-cols-2", "max-sm:grid-cols-1", "gap-3", "py-3", "mb-5", 3, "formGroupName"], [1, "min-w-[160px]"], [1, "form-control", "form-control-solid", "min-h-[43.5px]"], ["bindLabel", "type", "bindValue", "sentType", "dropdownPosition", "bottom", "placeholder", "Choose a Payment Type", "formControlName", "type", 3, "items", "change", 4, "ngIf"], ["class", "form-control form-control-solid min-h-[43.5px]", 4, "ngIf"], ["class", "text-sm text-gray-700 mt-1", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "text-red-500", 4, "ngIf"], ["bindLabel", "payment_mode", "bindValue", "payment_mode", "dropdownPosition", "bottom", "placeholder", "Choose a Transfer Mode", "formControlName", "transferMode", 3, "items", "change", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["bindLabel", "bankName", "bindValue", "bankName", "dropdownPosition", "bottom", "placeholder", "Choose a Bank", "formControlName", "bank", 3, "items", 4, "ngIf"], ["type", "number", "class", "form-control form-control-solid", "placeholder", "Amount", "formControlName", "amount", 4, "ngIf"], ["type", "date", "class", "form-control form-control-solid", "placeholder", "Date", "formControlName", "date", 4, "ngIf"], ["class", "min-w-[160px]", 4, "ngIf"], ["type", "text", "class", "form-control form-control-solid", "placeholder", "Description", "formControlName", "description", 4, "ngIf"], ["bindLabel", "type", "bindValue", "sentType", "dropdownPosition", "bottom", "placeholder", "Choose a Payment Type", "formControlName", "type", 3, "items", "change"], [1, "text-sm", "text-gray-700", "mt-1"], [1, "text-red-500"], [4, "ngIf"], ["bindLabel", "payment_mode", "bindValue", "payment_mode", "dropdownPosition", "bottom", "placeholder", "Choose a Transfer Mode", "formControlName", "transferMode", 3, "items", "change"], ["type", "number", "formControlName", "transferPercentage", "placeholder", "Percentage %", 1, "form-control", "form-control-solid"], ["bindLabel", "bankName", "bindValue", "bankName", "dropdownPosition", "bottom", "placeholder", "Choose a Bank", "formControlName", "bank", 3, "items"], ["type", "number", "placeholder", "Amount", "formControlName", "amount", 1, "form-control", "form-control-solid"], ["type", "date", "placeholder", "Date", "formControlName", "date", 1, "form-control", "form-control-solid"], ["type", "text", "placeholder", "Description", "formControlName", "description", 1, "form-control", "form-control-solid"], ["class", "btn btn-icon bg-light-success btn-active-color-success btn-sm me-1", 3, "click", 4, "ngIf"], ["class", "btn btn-icon bg-light-danger btn-active-color-danger btn-sm me-1", 3, "click", 4, "ngIf"], ["class", "btn btn-icon bg-light-warning btn-active-color-warning btn-sm me-1", 3, "click", 4, "ngIf"], ["class", "btn btn-icon bg-light-danger btn-active-color-danger btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-icon", "bg-light-success", "btn-active-color-success", "btn-sm", "me-1", 3, "click"], [1, "svg-icon", "svg-icon-3", "svg-icon-success", 3, "inlineSVG"], [1, "btn", "btn-icon", "bg-light-danger", "btn-active-color-danger", "btn-sm", "me-1", 3, "click"], [1, "svg-icon", "svg-icon-3", "svg-icon-danger", 3, "inlineSVG"], [1, "btn", "btn-icon", "bg-light-warning", "btn-active-color-warning", "btn-sm", "me-1", 3, "click"], [1, "svg-icon", "svg-icon-3", "svg-icon-warning", 3, "inlineSVG"], [1, "btn", "btn-icon", "bg-light-danger", "btn-active-color-danger", "btn-sm", 3, "click"]], template: function UpdateCustomerPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 3)(6, "div", 4)(7, "div")(8, "label", 5)(9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Customer Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div")(14, "label", 8)(15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Total Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div")(20, "label", 8)(21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Total Paid Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div")(26, "label", 8)(27, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Balance Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div")(32, "label", 8)(33, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Refund Amount Received ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div")(38, "label", 8)(39, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " G-Voucher Credit Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div")(44, "label", 8)(45, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, " G-Voucher Debit Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, UpdateCustomerPaymentComponent_div_49_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("fw-bold mb-3 ", ctx.type === "VERIFY" ? "text-green-500" : "text-orange-500", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.type === "VERIFY" ? "Verified" : "Pending", " Payments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx.f.customerCode.value, " - ", ctx.f.customerName.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.f.Total_Amount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.f.Total_Paid_Amount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.f.Total_Amount.value - ctx.f.Total_Paid_Amount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.f.Refund_Amount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.f.Service_Credit_Amount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.f.Service_Debit_Amount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.paymentDetails.controls.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__.InlineSVGDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1jdXN0b21lci1wYXltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6InVwZGF0ZS1jdXN0b21lci1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_customer-payment_customer-payment_module_ts.bf39e4bd50775bbe.js.map