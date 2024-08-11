"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["src_app_pages_customer_customer_module_ts"],{

/***/ 33613:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/customer/create-customer/create-customer.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCustomerComponent": () => (/* binding */ CreateCustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/supplier/supplier.service */ 76405);
/* harmony import */ var src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/customer/customer.service */ 21936);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-inline-svg-2 */ 39929);











function CreateCustomerComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Customer Name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerComponent_div_13_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.f.strUserName.errors.required);
} }
function CreateCustomerComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Phone Number required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerComponent_div_24_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.f.phone.errors.required);
} }
function CreateCustomerComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Country required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerComponent_div_30_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.f.country.errors.required);
} }
function CreateCustomerComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Package Name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerComponent_div_36_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.f.strPackage.errors.required);
} }
function CreateCustomerComponent_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Supplier required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerComponent_div_42_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.f.supplier_Name.errors.required);
} }
function CreateCustomerComponent_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Amount / Person required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerComponent_div_48_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.f.per_Person.errors.required);
} }
function CreateCustomerComponent_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No of Person required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerComponent_div_54_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.f.no_Of_Persons.errors.required);
} }
function CreateCustomerComponent_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "VAT required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerComponent_div_60_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.f.vat.errors.required);
} }
function CreateCustomerComponent_div_76_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Travel Date required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerComponent_div_76_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.f.travel_Date.errors.required);
} }
function CreateCustomerComponent_div_88_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Cost Price required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerComponent_div_88_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.f.cost_Price.errors.required);
} }
function CreateCustomerComponent_div_93_tr_11_div_3_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Amenity Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerComponent_div_93_tr_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerComponent_div_93_tr_11_div_3_small_1_Template, 2, 0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r25.cost_Details.get(i_r24 + ".name")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function CreateCustomerComponent_div_93_tr_11_div_6_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Amount Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateCustomerComponent_div_93_tr_11_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateCustomerComponent_div_93_tr_11_div_6_small_1_Template, 2, 0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r26.cost_Details.get(i_r24 + ".amount")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function CreateCustomerComponent_div_93_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 49)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ng-select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CreateCustomerComponent_div_93_tr_11_div_3_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td")(5, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function CreateCustomerComponent_div_93_tr_11_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.sumValue()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CreateCustomerComponent_div_93_tr_11_div_6_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateCustomerComponent_div_93_tr_11_Template_a_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const i_r24 = restoredCtx.index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.removeItem(i_r24)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const i_r24 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r22.arrAmenities);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r22.submitted && ((tmp_2_0 = ctx_r22.cost_Details.get(i_r24 + ".name")) == null ? null : tmp_2_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r22.submitted && ((tmp_3_0 = ctx_r22.cost_Details.get(i_r24 + ".amount")) == null ? null : tmp_3_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inlineSVG", "./assets/media/icons/duotune/general/gen027.svg");
} }
const _c0 = function (a0) { return { "overflow-scroll": a0 }; };
function CreateCustomerComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42)(1, "table", 43)(2, "thead")(3, "tr", 44)(4, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Amenity");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "ACTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "tbody", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CreateCustomerComponent_div_93_tr_11_Template, 10, 5, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r10.cost_Details.controls.length >= 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.cost_Details.controls);
} }
function CreateCustomerComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div")(2, "div")(3, "div")(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateCustomerComponent_div_94_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.resetForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateCustomerComponent_div_94_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r11.isLoading);
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class CreateCustomerComponent {
    constructor(formBuilder, supplierService, customerService, http, router) {
        this.formBuilder = formBuilder;
        this.supplierService = supplierService;
        this.customerService = customerService;
        this.http = http;
        this.router = router;
        this.dataUrl = 'assets/data/country.json';
        this.arrCountries = [];
        this.arrAmenities = [];
        this.submitted = false;
        this.isLoading = false;
        this.myForm = this.formBuilder.group({
            strUserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            strEmail: [''],
            supplier_Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            country: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            strPackage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            cost_Price: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            vat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            per_Person: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            no_Of_Persons: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            travel_Date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            strDescription: [''],
            cost_Details: this.formBuilder.array([]),
        });
        this.getCountryData();
        this.getMetaData();
    }
    get f() {
        return this.myForm.controls;
    }
    sumValue() {
        let sum = 0;
        this.myForm.value.cost_Details.forEach((e) => {
            sum += e.amount;
        });
        this.myForm.patchValue({
            cost_Price: sum,
        });
    }
    get cost_Details() {
        return this.myForm.get('cost_Details');
    }
    newCost_Details() {
        return this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
    }
    addItem() {
        this.cost_Details.push(this.newCost_Details());
    }
    getMetaData() {
        const obj = {
            metaType: 'Amentities', //Amentities transfermod
        };
        this.supplierService.metaData(obj).subscribe((data) => {
            if (data.success) {
                this.arrAmenities = data.data;
            }
            else {
                this.arrAmenities = [];
            }
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
                this.cost_Details.removeAt(i);
                this.sumValue();
            }
        });
    }
    getCountryData() {
        this.http.get(this.dataUrl).subscribe((data) => {
            this.arrCountries = data;
        });
    }
    resetForm() {
        this.myForm.reset();
        this.submitted = false;
    }
    onSubmit() {
        this.submitted = true;
        if (this.myForm.invalid) {
            return;
        }
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            strName: this.myForm.value.strUserName,
            strEmail: this.myForm.value.strEmail,
            phoneNo: this.myForm.value.phone,
            strPackage: this.myForm.value.strPackage,
            supplier_Name: this.myForm.value.supplier_Name,
            cost_Price: this.myForm.value.cost_Price,
            selling_Price: this.myForm.value.per_Person * this.myForm.value.no_Of_Persons,
            profit_Price: this.myForm.value.per_Person * this.myForm.value.no_Of_Persons -
                this.myForm.value.cost_Price,
            vat: this.myForm.value.vat,
            per_Person: this.myForm.value.per_Person,
            no_Of_Persons: this.myForm.value.no_Of_Persons,
            country: this.myForm.value.country,
            Total_Amount: this.myForm.value.per_Person * this.myForm.value.no_Of_Persons,
            travel_Date: this.myForm.value.travel_Date,
            strDescription: this.myForm.value.strDescription,
            cost_Details: this.myForm.value.cost_Details,
        };
        this.isLoading = true;
        this.customerService.addCustomer(obj).subscribe((res) => {
            this.isLoading = false;
            if (res.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Success',
                    text: 'Successfully Created Customer',
                    icon: 'success',
                }).then((value) => {
                    if (value) {
                        this.myForm.reset();
                        this.submitted = false;
                        this.router.navigate(['/customer']);
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
CreateCustomerComponent.ɵfac = function CreateCustomerComponent_Factory(t) { return new (t || CreateCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_1__.SupplierService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
CreateCustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreateCustomerComponent, selectors: [["app-create-customer"]], decls: 95, vars: 47, consts: [[1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], [1, "card-header", "border-0"], [1, "card-title", "fw-bold", "text-dark"], [1, "card-body", "pt-2"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "name"], [1, "required"], ["type", "text", "placeholder", "Customer Name", "id", "name", "formControlName", "strUserName", 1, "form-control", "form-control-solid", 3, "ngClass"], ["class", "text-red-500", 4, "ngIf"], ["for", "email"], [1, ""], ["type", "email", "placeholder", "Email", "id", "email", "formControlName", "strEmail", 1, "form-control", "form-control-solid"], ["for", "phone"], ["type", "tel", "placeholder", "Phone Number", "id", "phone", "formControlName", "phone", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "country"], ["bindLabel", "name", "bindValue", "name", "formControlName", "country", "placeholder", "Choose a country", 3, "items", "ngClass"], ["for", "package"], ["type", "text", "placeholder", "Package Name", "id", "package", "formControlName", "strPackage", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "supplier"], ["type", "text", "placeholder", "Supplier Name", "id", "supplier", "formControlName", "supplier_Name", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "per_Person"], ["type", "number", "placeholder", "Amount / Person", "id", "per_Person", "formControlName", "per_Person", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "noOfPerson"], ["type", "number", "placeholder", "No of Person", "id", "noOfPerson", "formControlName", "no_Of_Persons", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "vat"], ["type", "number", "placeholder", "VAT", "id", "vat", "formControlName", "vat", 1, "form-control", "form-control-solid", 3, "ngClass"], [1, "form-control", "form-control-solid"], ["for", "travelDate"], ["type", "date", "id", "travelDate", "formControlName", "travel_Date", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "desc"], ["type", "text", "placeholder", "Description", "id", "desc", "formControlName", "strDescription", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "costPrice"], [1, "form-control", "form-control-solid", 3, "click"], [1, "col-12", "text-right", "my-3"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus"], ["class", "table-responsive mb-3 overflow-visible max-h-[50vh]", 3, "ngClass", 4, "ngIf"], ["class", "grid grid-cols-2 md:grid-cols-6 gap-2 mt-4", 4, "ngIf"], [1, "text-red-500"], [4, "ngIf"], [1, "table-responsive", "mb-3", "overflow-visible", "max-h-[50vh]", 3, "ngClass"], [1, "table", "table-row-dashed", "table-row-gray-300", "align-middle", "gs-0", "gy-4", "w-full"], [1, "fw-bold", "text-muted"], [1, "min-w-[200px]"], [1, "min-w-[120px]"], ["formArrayName", "cost_Details"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "formGroupName"], ["bindLabel", "type", "bindValue", "type", "dropdownPosition", "bottom", "placeholder", "Choose an Amenity", "formControlName", "name", 3, "items"], ["type", "number", "placeholder", "Amount", "formControlName", "amount", 1, "form-control", "form-control-solid", 3, "keyup"], [1, "btn", "btn-icon", "bg-light-danger", "btn-active-color-danger", "btn-sm", 3, "click"], [1, "svg-icon", "svg-icon-3", "svg-icon-danger", 3, "inlineSVG"], [1, "grid", "grid-cols-2", "md:grid-cols-6", "gap-2", "mt-4"], [1, "btn", "btn-light-primary", 3, "click"], [1, "btn", "btn-primary", 3, "disabled", "click"]], template: function CreateCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Create Customer Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "form", 5)(7, "div", 6)(8, "div")(9, "label", 7)(10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Customer Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, CreateCustomerComponent_div_13_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div")(15, "label", 11)(16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div")(20, "label", 14)(21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, CreateCustomerComponent_div_24_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div")(26, "label", 16)(27, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "ng-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, CreateCustomerComponent_div_30_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div")(32, "label", 18)(33, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Package Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, CreateCustomerComponent_div_36_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div")(38, "label", 20)(39, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, " Supplier Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, CreateCustomerComponent_div_42_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div")(44, "label", 22)(45, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " Amount / Person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, CreateCustomerComponent_div_48_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div")(50, "label", 24)(51, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, " No of Person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, CreateCustomerComponent_div_54_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div")(56, "label", 26)(57, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, " VAT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, CreateCustomerComponent_div_60_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div")(62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, " Selling Price (Total Amount) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div")(67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, " Profit Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div")(72, "label", 29)(73, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, " Travel Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](76, CreateCustomerComponent_div_76_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div")(78, "label", 31)(79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div")(83, "label", 33)(84, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, " Cost Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateCustomerComponent_Template_div_click_86_listener() { return ctx.addItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](88, CreateCustomerComponent_div_88_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 35)(90, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateCustomerComponent_Template_button_click_90_listener() { return ctx.addItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](91, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, " Add Expenses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](93, CreateCustomerComponent_div_93_Template, 12, 4, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](94, CreateCustomerComponent_div_94_Template, 9, 1, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c1, ctx.submitted && ctx.f.strUserName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.strUserName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](29, _c1, ctx.submitted && ctx.f.phone.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.phone.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.arrCountries)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](31, _c1, ctx.submitted && ctx.f.country.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.country.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](33, _c1, ctx.submitted && ctx.f.strPackage.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.strPackage.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](35, _c1, ctx.submitted && ctx.f.supplier_Name.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.supplier_Name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](37, _c1, ctx.submitted && ctx.f.per_Person.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.per_Person.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](39, _c1, ctx.submitted && ctx.f.no_Of_Persons.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.no_Of_Persons.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](41, _c1, ctx.submitted && ctx.f.vat.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.vat.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.f.per_Person.value * ctx.f.no_Of_Persons.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.f.per_Person.value * ctx.f.no_Of_Persons.value - ctx.f.cost_Price.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](43, _c1, ctx.submitted && ctx.f.travel_Date.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.travel_Date.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](45, _c1, ctx.submitted && ctx.f.strDescription.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.f.cost_Price.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.cost_Price.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cost_Details.controls.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cost_Details.controls.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_3__.InlineSVGDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNaWRkbGUtZWFzdCUyMEhvbGlkYXlzXFxob2xpZGF5cy1jbGllbnRcXHNyY1xcYXBwXFxwYWdlc1xcY3VzdG9tZXJcXGNyZWF0ZS1jdXN0b21lclxcY3JlYXRlLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6ImNyZWF0ZS1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 67477:
/*!***************************************************!*\
  !*** ./src/app/pages/customer/customer.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerModule": () => (/* binding */ CustomerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 80779);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 39929);
/* harmony import */ var src_app_theme_partials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/theme/partials */ 13919);
/* harmony import */ var _create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-customer/create-customer.component */ 33613);
/* harmony import */ var _manage_customer_manage_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-customer/manage-customer.component */ 44749);
/* harmony import */ var _update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-customer/update-customer.component */ 68558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);













class CustomerModule {
}
CustomerModule.ɵfac = function CustomerModule_Factory(t) { return new (t || CustomerModule)(); };
CustomerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CustomerModule });
CustomerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule,
        ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([
            {
                path: '',
                component: _manage_customer_manage_customer_component__WEBPACK_IMPORTED_MODULE_3__.ManageCustomerComponent,
            },
            {
                path: 'create',
                component: _create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_2__.CreateCustomerComponent,
            },
            {
                path: 'update/:id',
                component: _update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_4__.UpdateCustomerComponent,
            },
        ]),
        src_app_theme_partials__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CustomerModule, { declarations: [_manage_customer_manage_customer_component__WEBPACK_IMPORTED_MODULE_3__.ManageCustomerComponent,
        _create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_2__.CreateCustomerComponent,
        _update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_4__.UpdateCustomerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule,
        ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, src_app_theme_partials__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule] }); })();


/***/ }),

/***/ 44749:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/customer/manage-customer/manage-customer.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCustomerComponent": () => (/* binding */ ManageCustomerComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/customer/customer.service */ 21936);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common/export-to-excel.service */ 22733);
/* harmony import */ var src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/pagination/pager.service */ 54225);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-inline-svg-2 */ 39929);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 65485);











function ManageCustomerComponent_div_34_tr_31_a_41_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageCustomerComponent_div_34_tr_31_a_41_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const customer_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.deleteCustomer(customer_r5.fkCustomerId, customer_r5.fkSupplierId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("inlineSVG", "./assets/media/icons/duotune/general/gen027.svg");
} }
const _c0 = function (a1) { return ["/customer/update", a1]; };
function ManageCustomerComponent_div_34_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td", 30)(7, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td")(24, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "td")(38, "div", 34)(39, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, ManageCustomerComponent_div_34_tr_31_a_41_Template, 2, 1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const customer_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", customer_r5.cust_Code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 20, customer_r5.createdAt, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](customer_r5.strName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](customer_r5.strEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](customer_r5.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](customer_r5.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", customer_r5.supplier_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", customer_r5.strPackage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", customer_r5.cost_Price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", customer_r5.profit_Price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](customer_r5.Total_Amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" (", customer_r5.per_Person, "*", customer_r5.no_Of_Persons, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", customer_r5.Total_Paid_Amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", customer_r5.Total_Amount - customer_r5.Total_Paid_Amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](34, 23, customer_r5.travel_Date, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", customer_r5.strDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](26, _c0, customer_r5.fkCustomerId));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("inlineSVG", "./assets/media/icons/duotune/art/art005.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", customer_r5.Total_Paid_Amount === 0);
} }
function ManageCustomerComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24)(1, "table", 25)(2, "thead")(3, "tr", 26)(4, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Created On");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Package");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Cost Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Profit Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Package Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Paid Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Balance Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Travel Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, ManageCustomerComponent_div_34_tr_31_Template, 42, 28, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.arrCustomer);
} }
function ManageCustomerComponent_ng_template_35_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 42)(2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function ManageCustomerComponent_ng_template_35_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " No Data Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function ManageCustomerComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ManageCustomerComponent_ng_template_35_ng_container_0_Template, 7, 0, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManageCustomerComponent_ng_template_35_ng_template_1_Template, 5, 0, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.fetchLoading)("ngIfElse", _r11);
} }
const _c1 = function (a0) { return { active: a0 }; };
function ManageCustomerComponent_div_37_ul_3_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 59)(1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageCustomerComponent_div_37_ul_3_li_4_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); const page_r15 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.setPage(page_r15)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const page_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, ctx_r14.pager.currentPage === page_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", page_r15, " ");
} }
const _c2 = function (a0) { return { disabled: a0 }; };
function ManageCustomerComponent_div_37_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 52)(1, "li", 53)(2, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageCustomerComponent_div_37_ul_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.setPage(ctx_r18.pager.currentPage - 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ManageCustomerComponent_div_37_ul_3_li_4_Template, 3, 4, "li", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "li", 57)(6, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageCustomerComponent_div_37_ul_3_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.setPage(ctx_r20.pager.currentPage + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c2, ctx_r13.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r13.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c2, ctx_r13.pager.currentPage === ctx_r13.pager.totalPages));
} }
function ManageCustomerComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 49)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ManageCustomerComponent_div_37_ul_3_Template, 8, 7, "ul", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" Showing ", ctx_r3.getFromCount(), " to ", ctx_r3.getToCount(), " of ", ctx_r3.intTotalCount, " entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.pager.pages && ctx_r3.pager.pages.length);
} }
class ManageCustomerComponent {
    constructor(customerService, formBuilder, exportToExcelService, pageServiceObj) {
        this.customerService = customerService;
        this.formBuilder = formBuilder;
        this.exportToExcelService = exportToExcelService;
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
            fromDate: [''],
            toDate: [''],
        });
    }
    ngOnInit() {
        this.getAllCustomer();
        this.getAllCustomerAll();
    }
    setPage(page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pageServiceObj.getPager(this.intTotalCount, page, this.intPageLimit);
        this.getAllCustomer();
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
    getAllCustomer() {
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
            fromDate: this.myForm.value.fromDate,
            endDate: this.myForm.value.toDate,
        };
        this.fetchLoading = true;
        this.customerService.getAllCustomer(obj).subscribe((res) => {
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
            fromDate: this.myForm.value.fromDate,
            endDate: this.myForm.value.toDate,
        };
        this.fetchLoading = true;
        this.customerService.getAllCustomer(obj).subscribe((res) => {
            this.fetchLoading = false;
            if (res.success) {
                let jsonData = [];
                res.data.forEach((e) => {
                    const cost_Details = e.cost_Details
                        .map((expense) => `${expense.name}: ${expense.amount}`)
                        .join(', ');
                    let obj = {
                        'Customer Code': e.cust_Code,
                        'Customer Name': e.strName,
                        'Supplier Name': e.supplier_Name,
                        Email: e.strEmail,
                        Phone: e.phone,
                        Country: e.country,
                        'Amount per Person': e.per_Person,
                        'Number of Person': e.no_Of_Persons,
                        VAT: e.vat,
                        'Total Amount': e.Total_Amount,
                        'Paid Amount': e.Total_Paid_Amount,
                        'Balance Amount': e.Total_Amount - e.Total_Paid_Amount,
                        'Cost Price': e.cost_Price,
                        'Refund Amount': e.Refund_Amount,
                        'G-Voucher Credit Amount': e.Service_Credit_Amount,
                        'G-Voucher Debit Amount': e.Service_Debit_Amount,
                        'Profit Price': e.profit_Price,
                        Package: e.strPackage,
                        'Travel Date': moment__WEBPACK_IMPORTED_MODULE_0__(e.travel_Date).format('DD-MM-YYYY'),
                        Description: e.strDescription,
                        'Cost Details': cost_Details,
                        'Created On': moment__WEBPACK_IMPORTED_MODULE_0__(e.createdAt).format('DD-MM-YYYY'),
                    };
                    jsonData.push(obj);
                });
                this.exportToExcelService.exportAsExcelFile(jsonData, 'Customers ');
            }
        });
    }
    deleteCustomer(id, fkSupplierId) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            reverseButtons: true,
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                const obj = {
                    strLoginUserId: localStorage.getItem('userId'),
                    fkCustomerId: id,
                    fkSupplierId: fkSupplierId,
                };
                // console.log('obj', obj);
                this.customerService.deleteCustomer(obj).subscribe((res) => {
                    if (res.success) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            title: 'Deleted!',
                            text: 'Your file has been deleted.',
                            icon: 'success',
                        });
                        this.getAllCustomer();
                    }
                    else {
                        // alert(res.message);
                    }
                });
            }
        });
    }
}
ManageCustomerComponent.ɵfac = function ManageCustomerComponent_Factory(t) { return new (t || ManageCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_3__.ExportToExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_4__.PagerService)); };
ManageCustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ManageCustomerComponent, selectors: [["app-manage-customer"]], decls: 38, vars: 5, consts: [[1, "text-right", "mb-3"], ["routerLink", "/customer/create", 1, "btn", "btn-primary", "btn-sm"], [1, "card", "mb-3"], [1, "card-body"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "Customer"], [1, ""], ["bindLabel", "displayName", "bindValue", "cust_Code", "formControlName", "customer", "placeholder", "Start Typing...", 3, "items"], ["for", "fromDate"], ["type", "date", "id", "fromDate", "formControlName", "fromDate", 1, "form-control", "form-control-solid"], ["for", "toDate"], ["type", "date", "id", "toDate", "formControlName", "toDate", 1, "form-control", "form-control-solid"], [1, "text-right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-search"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-cloud-download"], [1, "row", "g-5", "g-xl-10"], [1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noDataTemplate", ""], ["class", "flex justify-center md:justify-between flex-col md:flex-row p-5", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-row-dashed", "table-row-gray-300", "align-middle", "gs-0", "gy-4", "w-full", "text-center"], [1, "fw-bold", "text-muted"], [1, "min-w-130px"], [1, "min-w-130px", "text-left"], [4, "ngFor", "ngForOf"], [1, "text-left"], [1, "m-0", "text-base", "font-bold"], [1, "m-0"], [1, "m-0", "font-bold"], [1, "d-flex", "justify-content-center", "flex-shrink-0"], [1, "btn", "btn-icon", "bg-light-warning", "btn-active-color-warning", "btn-sm", "me-1", 3, "routerLink"], [1, "svg-icon", "svg-icon-3", "svg-icon-warning", 3, "inlineSVG"], ["class", "btn btn-icon bg-light-danger btn-active-color-danger btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-icon", "bg-light-danger", "btn-active-color-danger", "btn-sm", 3, "click"], [1, "svg-icon", "svg-icon-3", "svg-icon-danger", 3, "inlineSVG"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "d-flex", "flex-column", "align-items-center"], [1, "text-center", "px-4"], ["src", "./assets/media/illustrations/dozzy-1/5.png", "alt", "", 1, "mw-100", "mh-300px", "animate-pulse"], [1, "fw-bold", "text-xl", "text-gray-600", "text-center", "pt-15"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], ["src", "./assets/media/illustrations/sketchy-1/5.png", "alt", "", 1, "mw-100", "mh-300px"], [1, "fw-bold", "fs-6", "text-gray-600", "text-center", "pt-15"], [1, "flex", "justify-center", "md:justify-between", "flex-col", "md:flex-row", "p-5"], [1, "fs-6", "fw-bold", "text-gray-700", "mb-3", "md:mb-0", "text-center"], ["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "page-item", "previous", 3, "ngClass"], [1, "page-link", "cursor-pointer", 3, "click"], [1, "previous"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next", 3, "ngClass"], [1, "next"], [1, "page-item", 3, "ngClass"]], template: function ManageCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Create Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div")(8, "label", 6)(9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "ng-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div")(13, "label", 9)(14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " From Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div")(18, "label", 11)(19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " To Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 13)(23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageCustomerComponent_Template_button_click_23_listener() { return ctx.getAllCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 0)(27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManageCustomerComponent_Template_button_click_27_listener() { return ctx.downloadExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "div", 20)(33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, ManageCustomerComponent_div_34_Template, 32, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ManageCustomerComponent_ng_template_35_Template, 3, 2, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, ManageCustomerComponent_div_37_Template, 4, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.arrAllCustomers);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.arrCustomer.length > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.arrCustomer.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_5__.InlineSVGDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNaWRkbGUtZWFzdCUyMEhvbGlkYXlzXFxob2xpZGF5cy1jbGllbnRcXHNyY1xcYXBwXFxwYWdlc1xcY3VzdG9tZXJcXG1hbmFnZS1jdXN0b21lclxcbWFuYWdlLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6Im1hbmFnZS1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 68558:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/customer/update-customer/update-customer.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateCustomerComponent": () => (/* binding */ UpdateCustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var src_app_core_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/supplier/supplier.service */ 76405);
/* harmony import */ var src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/customer/customer.service */ 21936);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-inline-svg-2 */ 39929);












function UpdateCustomerComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Customer Name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerComponent_div_13_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.f.strUserName.errors.required);
} }
function UpdateCustomerComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Phone Number required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerComponent_div_24_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.f.phone.errors.required);
} }
function UpdateCustomerComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Country required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerComponent_div_30_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.f.country.errors.required);
} }
function UpdateCustomerComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Package Name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerComponent_div_36_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.f.strPackage.errors.required);
} }
function UpdateCustomerComponent_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Supplier required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerComponent_div_42_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.f.supplier_Name.errors.required);
} }
function UpdateCustomerComponent_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Amount / Person required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerComponent_div_48_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.f.per_Person.errors.required);
} }
function UpdateCustomerComponent_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No of Person required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerComponent_div_54_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.f.no_Of_Persons.errors.required);
} }
function UpdateCustomerComponent_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "VAT required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerComponent_div_60_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.f.vat.errors.required);
} }
function UpdateCustomerComponent_div_76_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Travel Date required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerComponent_div_76_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.f.travel_Date.errors.required);
} }
function UpdateCustomerComponent_div_88_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Cost Price required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerComponent_div_88_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.f.cost_Price.errors.required);
} }
function UpdateCustomerComponent_div_111_tr_11_div_3_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Amenity Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerComponent_div_111_tr_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerComponent_div_111_tr_11_div_3_small_1_Template, 2, 0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r25.cost_Details.get(i_r24 + ".name")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function UpdateCustomerComponent_div_111_tr_11_div_6_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Amount Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UpdateCustomerComponent_div_111_tr_11_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpdateCustomerComponent_div_111_tr_11_div_6_small_1_Template, 2, 0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r26.cost_Details.get(i_r24 + ".amount")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function UpdateCustomerComponent_div_111_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 50)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ng-select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, UpdateCustomerComponent_div_111_tr_11_div_3_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td")(5, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function UpdateCustomerComponent_div_111_tr_11_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.sumValue()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UpdateCustomerComponent_div_111_tr_11_div_6_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td")(8, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UpdateCustomerComponent_div_111_tr_11_Template_a_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const i_r24 = restoredCtx.index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r33.removeItem(i_r24)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const i_r24 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r22.arrAmenities);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r22.submitted && ((tmp_2_0 = ctx_r22.cost_Details.get(i_r24 + ".name")) == null ? null : tmp_2_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r22.submitted && ((tmp_3_0 = ctx_r22.cost_Details.get(i_r24 + ".amount")) == null ? null : tmp_3_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inlineSVG", "./assets/media/icons/duotune/general/gen027.svg");
} }
const _c0 = function (a0) { return { "overflow-scroll": a0 }; };
function UpdateCustomerComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43)(1, "table", 44)(2, "thead")(3, "tr", 45)(4, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Amenity");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "ACTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "tbody", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, UpdateCustomerComponent_div_111_tr_11_Template, 10, 5, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, ctx_r10.cost_Details.controls.length >= 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r10.cost_Details.controls);
} }
function UpdateCustomerComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div")(2, "div")(3, "div")(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UpdateCustomerComponent_div_112_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.resetForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UpdateCustomerComponent_div_112_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r36.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class UpdateCustomerComponent {
    constructor(activatedRoute, supplierService, customerService, router, http, formBuilder) {
        this.activatedRoute = activatedRoute;
        this.supplierService = supplierService;
        this.customerService = customerService;
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.dataUrl = 'assets/data/country.json';
        this.arrCountries = [];
        this.arrAmenities = [];
        this.submitted = false;
        this.customerId = '';
        this.fetchLoading = false;
        this.arrCustomer = [];
        this.isLoading = false;
        activatedRoute.params.subscribe((params) => {
            this.customerId = params.id;
        });
        this.myForm = this.formBuilder.group({
            strUserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            strEmail: [''],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            fkSupplierId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            supplier_Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            country: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            strPackage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            cost_Price: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            Total_Amount: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            vat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            per_Person: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            no_Of_Persons: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            travel_Date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            Service_Credit_Amount: [''],
            Service_Debit_Amount: [''],
            Refund_Amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            strDescription: [''],
            cost_Details: this.formBuilder.array([]),
        });
        this.getCountryData();
        this.getMetaData();
    }
    sumValue() {
        let sum = 0;
        this.myForm.value.cost_Details.forEach((e) => {
            sum += e.amount;
        });
        this.myForm.patchValue({
            cost_Price: sum,
        });
    }
    get cost_Details() {
        return this.myForm.get('cost_Details');
    }
    newCost_Details() {
        return this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
    }
    addItem() {
        this.cost_Details.push(this.newCost_Details());
    }
    getMetaData() {
        const obj = {
            metaType: 'Amentities', //Amentities transfermod
        };
        this.supplierService.metaData(obj).subscribe((data) => {
            if (data.success) {
                this.arrAmenities = data.data;
            }
            else {
                this.arrAmenities = [];
            }
        });
    }
    removeItem(i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Do you want to remove?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            reverseButtons: true,
            confirmButtonColor: '#dc3741',
        }).then((result) => {
            if (result.isConfirmed) {
                this.cost_Details.removeAt(i);
                this.sumValue();
            }
        });
    }
    getCountryData() {
        this.http.get(this.dataUrl).subscribe((data) => {
            this.arrCountries = data;
            this.getAllCustomer();
        });
    }
    get f() {
        return this.myForm.controls;
    }
    getAllCustomer() {
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            intSkipCount: 0,
            intPageLimit: 1,
            fkCustomerId: this.customerId,
        };
        this.fetchLoading = true;
        this.customerService.getAllCustomer(obj).subscribe((res) => {
            this.fetchLoading = false;
            if (res.success) {
                this.arrCustomer = res.data[0];
                this.patchValue(this.arrCustomer);
            }
            else {
                this.arrCustomer = [];
            }
        });
    }
    patchValue(customer) {
        this.myForm.patchValue({
            strUserName: customer.strName,
            strEmail: customer.strEmail,
            phone: customer.phone,
            country: customer.country,
            strPackage: customer.strPackage,
            Total_Amount: customer.Total_Amount,
            fkSupplierId: customer.fkSupplierId,
            supplier_Name: customer.supplier_Name,
            cost_Price: customer.cost_Price,
            selling_Price: customer.selling_Price,
            Service_Credit_Amount: customer.Service_Credit_Amount,
            Service_Debit_Amount: customer.Service_Debit_Amount,
            Refund_Amount: customer.Refund_Amount,
            vat: customer.vat,
            per_Person: customer.per_Person,
            no_Of_Persons: customer.no_Of_Persons,
            travel_Date: moment__WEBPACK_IMPORTED_MODULE_0__(customer.travel_Date).format('YYYY-MM-DD'),
            strDescription: customer.strDescription,
        });
        customer.cost_Details.forEach((item, i) => {
            this.addItem();
            this.cost_Details.at(i).patchValue({
                name: item.name,
                amount: item.amount,
            });
        });
    }
    resetForm() {
        this.myForm.reset();
        this.submitted = false;
    }
    onSubmit() {
        this.submitted = true;
        if (this.myForm.invalid) {
            return;
        }
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            fkCustomerId: this.customerId,
            strName: this.myForm.value.strUserName,
            strEmail: this.myForm.value.strEmail,
            phoneNo: this.myForm.value.phone,
            strPackage: this.myForm.value.strPackage,
            fkSupplierId: this.myForm.value.fkSupplierId,
            supplier_Name: this.myForm.value.supplier_Name,
            cost_Price: this.myForm.value.cost_Price - this.myForm.value.Refund_Amount,
            country: this.myForm.value.country,
            selling_Price: this.myForm.value.per_Person * this.myForm.value.no_Of_Persons +
                (this.myForm.value.Service_Credit_Amount || 0) -
                this.myForm.value.Refund_Amount -
                (this.myForm.value.Service_Debit_Amount || 0),
            profit_Price: this.myForm.value.per_Person * this.myForm.value.no_Of_Persons -
                this.myForm.value.cost_Price,
            vat: this.myForm.value.vat,
            per_Person: this.myForm.value.per_Person,
            no_Of_Persons: this.myForm.value.no_Of_Persons,
            Total_Amount: this.myForm.value.per_Person * this.myForm.value.no_Of_Persons +
                (this.myForm.value.Service_Credit_Amount || 0) -
                this.myForm.value.Refund_Amount -
                (this.myForm.value.Service_Debit_Amount || 0),
            travel_Date: this.myForm.value.travel_Date,
            strDescription: this.myForm.value.strDescription,
            cost_Details: this.myForm.value.cost_Details,
        };
        this.isLoading = true;
        this.customerService.updateCustomer(obj).subscribe((res) => {
            this.isLoading = false;
            if (res.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: 'Success',
                    text: 'Successfully updated customer',
                    icon: 'success',
                }).then((value) => {
                    if (value) {
                        this.myForm.reset();
                        this.submitted = false;
                        this.router.navigate(['/customer']);
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
UpdateCustomerComponent.ɵfac = function UpdateCustomerComponent_Factory(t) { return new (t || UpdateCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_2__.SupplierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_3__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder)); };
UpdateCustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UpdateCustomerComponent, selectors: [["app-update-customer"]], decls: 113, vars: 50, consts: [[1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], [1, "card-header", "border-0"], [1, "card-title", "fw-bold", "text-dark"], [1, "card-body", "pt-2"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "name"], [1, "required"], ["type", "text", "placeholder", "Customer Name", "id", "name", "formControlName", "strUserName", 1, "form-control", "form-control-solid", 3, "ngClass"], ["class", "text-red-500", 4, "ngIf"], ["for", "email"], [1, ""], ["type", "email", "placeholder", "Email", "id", "email", "formControlName", "strEmail", 1, "form-control", "form-control-solid"], ["for", "phone"], ["type", "tel", "placeholder", "Phone Number", "id", "phone", "formControlName", "phone", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "country"], ["bindLabel", "name", "bindValue", "name", "formControlName", "country", "placeholder", "Choose a country", 3, "items", "ngClass"], ["for", "package"], ["type", "text", "placeholder", "Package Name", "id", "package", "formControlName", "strPackage", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "supplier"], ["type", "text", "placeholder", "Supplier Name", "id", "supplier", "formControlName", "supplier_Name", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "per_Person"], ["type", "number", "placeholder", "Amount / Person", "id", "per_Person", "formControlName", "per_Person", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "noOfPerson"], ["type", "number", "placeholder", "No of Person", "id", "noOfPerson", "formControlName", "no_Of_Persons", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "vat"], ["type", "number", "placeholder", "VAT", "id", "vat", "formControlName", "vat", 1, "form-control", "form-control-solid", 3, "ngClass"], [1, "form-control", "form-control-solid"], ["for", "travelDate"], ["type", "date", "id", "travelDate", "formControlName", "travel_Date", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "desc"], ["type", "text", "placeholder", "Description", "id", "desc", "formControlName", "strDescription", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "costPrice"], [1, "form-control", "form-control-solid", 3, "click"], [1, "form-control", "form-control-solid", "min-h-[43.5px]"], [1, "col-12", "text-right", "my-3"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus"], ["class", "table-responsive mb-3 overflow-visible max-h-[50vh]", 3, "ngClass", 4, "ngIf"], ["class", "grid grid-cols-2 md:grid-cols-6 gap-2 mt-4", 4, "ngIf"], [1, "text-red-500"], [4, "ngIf"], [1, "table-responsive", "mb-3", "overflow-visible", "max-h-[50vh]", 3, "ngClass"], [1, "table", "table-row-dashed", "table-row-gray-300", "align-middle", "gs-0", "gy-4", "w-full"], [1, "fw-bold", "text-muted"], [1, "min-w-[200px]"], [1, "min-w-[120px]"], ["formArrayName", "cost_Details"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "formGroupName"], ["bindLabel", "type", "bindValue", "type", "dropdownPosition", "bottom", "placeholder", "Choose an Amenity", "formControlName", "name", 3, "items"], ["type", "number", "placeholder", "Amount", "formControlName", "amount", 1, "form-control", "form-control-solid", 3, "keyup"], [1, "btn", "btn-icon", "bg-light-danger", "btn-active-color-danger", "btn-sm", 3, "click"], [1, "svg-icon", "svg-icon-3", "svg-icon-danger", 3, "inlineSVG"], [1, "grid", "grid-cols-2", "md:grid-cols-6", "gap-2", "mt-4"], [1, "btn", "btn-light-primary", 3, "click"], [1, "btn", "btn-primary", 3, "click"]], template: function UpdateCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Update Customer Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4)(6, "form", 5)(7, "div", 6)(8, "div")(9, "label", 7)(10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Customer Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, UpdateCustomerComponent_div_13_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div")(15, "label", 11)(16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div")(20, "label", 14)(21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, UpdateCustomerComponent_div_24_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div")(26, "label", 16)(27, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "ng-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, UpdateCustomerComponent_div_30_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div")(32, "label", 18)(33, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Package Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, UpdateCustomerComponent_div_36_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div")(38, "label", 20)(39, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " Supplier Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, UpdateCustomerComponent_div_42_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div")(44, "label", 22)(45, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, " Amount / Person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, UpdateCustomerComponent_div_48_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div")(50, "label", 24)(51, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, " No of Person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, UpdateCustomerComponent_div_54_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div")(56, "label", 26)(57, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, " VAT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, UpdateCustomerComponent_div_60_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div")(62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, " Selling Price (Total Amount) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div")(67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, " Profit Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div")(72, "label", 29)(73, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, " Travel Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, UpdateCustomerComponent_div_76_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div")(78, "label", 31)(79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div")(83, "label", 33)(84, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, " Cost Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UpdateCustomerComponent_Template_div_click_86_listener() { return ctx.addItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](88, UpdateCustomerComponent_div_88_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div")(90, "label", 33)(91, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, " G-Voucher Credit Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div")(96, "label", 33)(97, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, " G-Voucher Debit Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div")(102, "label", 33)(103, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Refund Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "div", 36)(108, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UpdateCustomerComponent_Template_button_click_108_listener() { return ctx.addItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](109, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, " Add Expenses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](111, UpdateCustomerComponent_div_111_Template, 12, 4, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](112, UpdateCustomerComponent_div_112_Template, 9, 0, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](30, _c1, ctx.submitted && ctx.f.strUserName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.strUserName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](32, _c1, ctx.submitted && ctx.f.phone.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.phone.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.arrCountries)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](34, _c1, ctx.submitted && ctx.f.country.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.country.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](36, _c1, ctx.submitted && ctx.f.strPackage.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.strPackage.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](38, _c1, ctx.submitted && ctx.f.supplier_Name.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.supplier_Name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](40, _c1, ctx.submitted && ctx.f.per_Person.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.per_Person.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](42, _c1, ctx.submitted && ctx.f.no_Of_Persons.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.no_Of_Persons.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](44, _c1, ctx.submitted && ctx.f.vat.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.vat.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.f.Total_Amount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.f.Total_Amount.value - ctx.f.cost_Price.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](46, _c1, ctx.submitted && ctx.f.travel_Date.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.travel_Date.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](48, _c1, ctx.submitted && ctx.f.strDescription.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.f.cost_Price.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.cost_Price.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.f.Service_Credit_Amount.value || 0, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.f.Service_Debit_Amount.value || 0, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.f.Refund_Amount.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.cost_Details.controls.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.cost_Details.controls.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__.InlineSVGDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNaWRkbGUtZWFzdCUyMEhvbGlkYXlzXFxob2xpZGF5cy1jbGllbnRcXHNyY1xcYXBwXFxwYWdlc1xcY3VzdG9tZXJcXHVwZGF0ZS1jdXN0b21lclxcdXBkYXRlLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InVwZGF0ZS1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_customer_customer_module_ts.e56917d28fa4ceb3.js.map