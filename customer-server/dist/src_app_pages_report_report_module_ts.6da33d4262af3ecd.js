"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["src_app_pages_report_report_module_ts"],{

/***/ 916:
/*!*********************************************************************!*\
  !*** ./src/app/pages/report/gross-income/gross-income.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrossIncomeComponent": () => (/* binding */ GrossIncomeComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_report_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/report/report.service */ 89337);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common/export-to-excel.service */ 22733);
/* harmony import */ var src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/pagination/pager.service */ 54225);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);







function GrossIncomeComponent_div_43_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const customer_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 10, customer_r5.date, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", customer_r5.customer_code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", customer_r5.customer_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", customer_r5.package_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](customer_r5.supplier_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](customer_r5.customerBalence);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](customer_r5.supplierBalence);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", customer_r5.profit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", customer_r5.profit_Release ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](20, 13, customer_r5.profit_Date, "mediumDate") : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", customer_r5.profit_Release ? "Yes" : "No", " ");
} }
function GrossIncomeComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32)(1, "table", 33)(2, "thead")(3, "tr", 34)(4, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Package");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Receivable");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Payable");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Profit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Profit Release Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Profit Release");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, GrossIncomeComponent_div_43_tr_25_Template, 23, 16, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.arrCustomer);
} }
function GrossIncomeComponent_ng_template_44_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 39)(2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function GrossIncomeComponent_ng_template_44_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " No Data Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function GrossIncomeComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, GrossIncomeComponent_ng_template_44_ng_container_0_Template, 7, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GrossIncomeComponent_ng_template_44_ng_template_1_Template, 5, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.fetchLoading)("ngIfElse", _r7);
} }
const _c0 = function (a0) { return { active: a0 }; };
function GrossIncomeComponent_div_46_ul_3_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 56)(1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GrossIncomeComponent_div_46_ul_3_li_4_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const page_r11 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.setPage(page_r11)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const page_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r10.pager.currentPage === page_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", page_r11, " ");
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function GrossIncomeComponent_div_46_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 49)(1, "li", 50)(2, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GrossIncomeComponent_div_46_ul_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.setPage(ctx_r14.pager.currentPage - 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, GrossIncomeComponent_div_46_ul_3_li_4_Template, 3, 4, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "li", 54)(6, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GrossIncomeComponent_div_46_ul_3_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.setPage(ctx_r16.pager.currentPage + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r9.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, ctx_r9.pager.currentPage === ctx_r9.pager.totalPages));
} }
function GrossIncomeComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 46)(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GrossIncomeComponent_div_46_ul_3_Template, 8, 7, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" Showing ", ctx_r3.getFromCount(), " to ", ctx_r3.getToCount(), " of ", ctx_r3.intTotalCount, " entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.pager.pages && ctx_r3.pager.pages.length);
} }
class GrossIncomeComponent {
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
        this.myForm = this.formBuilder.group({
            customer: [null],
            fromDate: [''],
            toDate: [''],
            paymentStatus: ['ALL'],
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
                        'Profit Release Date': e.profit_Release
                            ? moment__WEBPACK_IMPORTED_MODULE_0__(e.profit_Date).format('DD-MM-YYYY')
                            : '',
                        'Profit Release': e.profit_Release ? 'Yes' : 'No',
                    };
                    jsonData.push(obj);
                });
                this.exportToExcelService.exportAsExcelFile(jsonData, 'Gross Income Report ');
            }
        });
    }
}
GrossIncomeComponent.ɵfac = function GrossIncomeComponent_Factory(t) { return new (t || GrossIncomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_report_report_service__WEBPACK_IMPORTED_MODULE_1__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_2__.ExportToExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_3__.PagerService)); };
GrossIncomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GrossIncomeComponent, selectors: [["app-gross-income"]], decls: 47, vars: 4, consts: [[1, "card", "mb-3"], [1, "card-body"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "fromDate"], [1, ""], ["type", "date", "id", "fromDate", "formControlName", "fromDate", 1, "form-control", "form-control-solid"], ["for", "toDate"], ["type", "date", "id", "toDate", "formControlName", "toDate", 1, "form-control", "form-control-solid"], ["for", "status"], [1, "flex", "gap-3", "py-3"], [1, "form-check", "form-check-custom", "form-check-primary", "form-check-solid"], ["type", "radio", "value", "ALL", "formControlName", "paymentStatus", "id", "ALL", 1, "form-check-input"], ["for", "ALL", 1, "form-check-label"], [1, "form-check", "form-check-custom", "form-check-warning", "form-check-solid"], ["type", "radio", "value", "ONGOING", "formControlName", "paymentStatus", "id", "ONGOING", 1, "form-check-input"], ["for", "ONGOING", 1, "form-check-label"], [1, "form-check", "form-check-custom", "form-check-success", "form-check-solid"], ["type", "radio", "value", "VERIFY", "formControlName", "paymentStatus", "id", "VERIFY", 1, "form-check-input"], ["for", "VERIFY", 1, "form-check-label"], [1, "text-right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-search"], [1, "text-right", "mb-3"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-cloud-download"], [1, "row", "g-5", "g-xl-10"], [1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noDataTemplate", ""], ["class", "flex justify-center md:justify-between flex-col md:flex-row p-5", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-row-dashed", "table-row-gray-300", "align-middle", "gs-0", "gy-4", "w-full", "text-center"], [1, "fw-bold", "text-muted"], [1, "min-w-130px"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "d-flex", "flex-column", "align-items-center"], [1, "text-center", "px-4"], ["src", "./assets/media/illustrations/dozzy-1/5.png", "alt", "", 1, "mw-100", "mh-300px", "animate-pulse"], [1, "fw-bold", "text-xl", "text-gray-600", "text-center", "pt-15"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], ["src", "./assets/media/illustrations/sketchy-1/5.png", "alt", "", 1, "mw-100", "mh-300px"], [1, "fw-bold", "fs-6", "text-gray-600", "text-center", "pt-15"], [1, "flex", "justify-center", "md:justify-between", "flex-col", "md:flex-row", "p-5"], [1, "fs-6", "fw-bold", "text-gray-700", "mb-3", "md:mb-0", "text-center"], ["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "page-item", "previous", 3, "ngClass"], [1, "page-link", "cursor-pointer", 3, "click"], [1, "previous"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next", 3, "ngClass"], [1, "next"], [1, "page-item", 3, "ngClass"]], template: function GrossIncomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "div")(5, "label", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " From Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div")(10, "label", 7)(11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " To Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div")(15, "label", 9)(16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Payment Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 10)(19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Ongoing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 20)(32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GrossIncomeComponent_Template_button_click_32_listener() { return ctx.getAllIncomeReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 23)(36, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GrossIncomeComponent_Template_button_click_36_listener() { return ctx.downloadExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 26)(40, "div", 27)(41, "div", 28)(42, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, GrossIncomeComponent_div_43_Template, 26, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, GrossIncomeComponent_ng_template_44_Template, 3, 2, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, GrossIncomeComponent_div_46_Template, 4, 4, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.arrCustomer.length > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.arrCustomer.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3NzLWluY29tZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNaWRkbGUtZWFzdCUyMEhvbGlkYXlzXFxob2xpZGF5cy1jbGllbnRcXHNyY1xcYXBwXFxwYWdlc1xccmVwb3J0XFxncm9zcy1pbmNvbWVcXGdyb3NzLWluY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJncm9zcy1pbmNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 863:
/*!*****************************************************************!*\
  !*** ./src/app/pages/report/mis-report/mis-report.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisReportComponent": () => (/* binding */ MisReportComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/customer/customer.service */ 21936);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common/export-to-excel.service */ 22733);
/* harmony import */ var src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/pagination/pager.service */ 54225);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);







function MisReportComponent_div_26_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 27)(7, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td")(24, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const customer_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", customer_r5.cust_Code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](5, 15, customer_r5.createdAt, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](customer_r5.strName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](customer_r5.strEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](customer_r5.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](customer_r5.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", customer_r5.supplier_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", customer_r5.strPackage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", customer_r5.cost_Price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", customer_r5.profit_Price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](customer_r5.Total_Amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" (", customer_r5.per_Person, "*", customer_r5.no_Of_Persons, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](30, 18, customer_r5.travel_Date, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", customer_r5.strDescription, " ");
} }
function MisReportComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "table", 22)(2, "thead")(3, "tr", 23)(4, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Created On");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Package");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Cost Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Profit Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Package Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Travel Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, MisReportComponent_div_26_tr_25_Template, 33, 21, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.arrCustomer);
} }
function MisReportComponent_ng_template_27_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 33)(2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function MisReportComponent_ng_template_27_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " No Data Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function MisReportComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MisReportComponent_ng_template_27_ng_container_0_Template, 7, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MisReportComponent_ng_template_27_ng_template_1_Template, 5, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.fetchLoading)("ngIfElse", _r7);
} }
const _c0 = function (a0) { return { active: a0 }; };
function MisReportComponent_div_29_ul_3_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 50)(1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MisReportComponent_div_29_ul_3_li_4_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const page_r11 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.setPage(page_r11)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const page_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r10.pager.currentPage === page_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", page_r11, " ");
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function MisReportComponent_div_29_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 43)(1, "li", 44)(2, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MisReportComponent_div_29_ul_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.setPage(ctx_r14.pager.currentPage - 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MisReportComponent_div_29_ul_3_li_4_Template, 3, 4, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "li", 48)(6, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MisReportComponent_div_29_ul_3_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.setPage(ctx_r16.pager.currentPage + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r9.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, ctx_r9.pager.currentPage === ctx_r9.pager.totalPages));
} }
function MisReportComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MisReportComponent_div_29_ul_3_Template, 8, 7, "ul", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" Showing ", ctx_r3.getFromCount(), " to ", ctx_r3.getToCount(), " of ", ctx_r3.intTotalCount, " entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.pager.pages && ctx_r3.pager.pages.length);
} }
class MisReportComponent {
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
            fromDate: [''],
            toDate: [''],
        });
    }
    ngOnInit() {
        this.getAllCustomer();
    }
    setPage(page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pageServiceObj.getPager(this.intTotalCount, page, this.intPageLimit);
        this.getAllCustomer();
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
                    let obj = {};
                    obj = {
                        'Customer Code': e.cust_Code,
                        'Customer Name': e.strName,
                        Supplier: e.supplier_Name,
                        Email: e.strEmail,
                        Phone: e.phone,
                        Country: e.country,
                        'Amount per Person': e.per_Person,
                        'Number of Person': e.no_Of_Persons,
                        VAT: e.vat,
                        'Total Amount': e.Total_Amount,
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
                    e.Payment_Details.forEach((payment, i) => {
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
                    jsonData.push(obj);
                });
                this.exportToExcelService.exportAsExcelFile(jsonData, 'MIS Report ');
            }
        });
    }
}
MisReportComponent.ɵfac = function MisReportComponent_Factory(t) { return new (t || MisReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_2__.ExportToExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_3__.PagerService)); };
MisReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MisReportComponent, selectors: [["app-mis-report"]], decls: 30, vars: 4, consts: [[1, "card", "mb-3"], [1, "card-body"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "fromDate"], [1, ""], ["type", "date", "id", "fromDate", "formControlName", "fromDate", 1, "form-control", "form-control-solid"], ["for", "toDate"], ["type", "date", "id", "toDate", "formControlName", "toDate", 1, "form-control", "form-control-solid"], [1, "text-right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-search"], [1, "text-right", "mb-3"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-cloud-download"], [1, "row", "g-5", "g-xl-10"], [1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noDataTemplate", ""], ["class", "flex justify-center md:justify-between flex-col md:flex-row p-5", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-row-dashed", "table-row-gray-300", "align-middle", "gs-0", "gy-4", "w-full", "text-center"], [1, "fw-bold", "text-muted"], [1, "min-w-130px"], [1, "min-w-130px", "text-left"], [4, "ngFor", "ngForOf"], [1, "text-left"], [1, "m-0", "text-base", "font-bold"], [1, "m-0"], [1, "m-0", "font-bold"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "d-flex", "flex-column", "align-items-center"], [1, "text-center", "px-4"], ["src", "./assets/media/illustrations/dozzy-1/5.png", "alt", "", 1, "mw-100", "mh-300px", "animate-pulse"], [1, "fw-bold", "text-xl", "text-gray-600", "text-center", "pt-15"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], ["src", "./assets/media/illustrations/sketchy-1/5.png", "alt", "", 1, "mw-100", "mh-300px"], [1, "fw-bold", "fs-6", "text-gray-600", "text-center", "pt-15"], [1, "flex", "justify-center", "md:justify-between", "flex-col", "md:flex-row", "p-5"], [1, "fs-6", "fw-bold", "text-gray-700", "mb-3", "md:mb-0", "text-center"], ["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "page-item", "previous", 3, "ngClass"], [1, "page-link", "cursor-pointer", 3, "click"], [1, "previous"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next", 3, "ngClass"], [1, "next"], [1, "page-item", 3, "ngClass"]], template: function MisReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "div")(5, "label", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " From Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div")(10, "label", 7)(11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " To Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9)(15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MisReportComponent_Template_button_click_15_listener() { return ctx.getAllCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 12)(19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MisReportComponent_Template_button_click_19_listener() { return ctx.downloadExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 15)(23, "div", 16)(24, "div", 17)(25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, MisReportComponent_div_26_Template, 26, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, MisReportComponent_ng_template_27_Template, 3, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, MisReportComponent_div_29_Template, 4, 4, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.arrCustomer.length > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.arrCustomer.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pcy1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWlkZGxlLWVhc3QlMjBIb2xpZGF5c1xcaG9saWRheXMtY2xpZW50XFxzcmNcXGFwcFxccGFnZXNcXHJlcG9ydFxcbWlzLXJlcG9ydFxcbWlzLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJtaXMtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ 76812:
/*!*************************************************************************!*\
  !*** ./src/app/pages/report/payable-report/payable-report.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayableReportComponent": () => (/* binding */ PayableReportComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/supplier/supplier.service */ 76405);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common/export-to-excel.service */ 22733);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/pagination/pager.service */ 54225);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);









function PayableReportComponent_div_43_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const supplier_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](supplier_r5.cust_Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", supplier_r5.customer_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](supplier_r5.strName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 7, supplier_r5.createdAt, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", supplier_r5.Amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", supplier_r5.Total_Paid_Amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", supplier_r5.Amount - supplier_r5.Total_Paid_Amount, " ");
} }
function PayableReportComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32)(1, "table", 33)(2, "thead")(3, "tr", 34)(4, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Created On");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Paid Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Balance Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, PayableReportComponent_div_43_tr_19_Template, 16, 10, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.arrSuppliers);
} }
function PayableReportComponent_ng_template_44_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 39)(2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function PayableReportComponent_ng_template_44_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " No Data Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function PayableReportComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, PayableReportComponent_ng_template_44_ng_container_0_Template, 7, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PayableReportComponent_ng_template_44_ng_template_1_Template, 5, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.fetchLoading)("ngIfElse", _r7);
} }
const _c0 = function (a0) { return { active: a0 }; };
function PayableReportComponent_div_46_ul_3_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 56)(1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PayableReportComponent_div_46_ul_3_li_4_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const page_r11 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.setPage(page_r11)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const page_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r10.pager.currentPage === page_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", page_r11, " ");
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function PayableReportComponent_div_46_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 49)(1, "li", 50)(2, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PayableReportComponent_div_46_ul_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.setPage(ctx_r14.pager.currentPage - 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PayableReportComponent_div_46_ul_3_li_4_Template, 3, 4, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "li", 54)(6, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PayableReportComponent_div_46_ul_3_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.setPage(ctx_r16.pager.currentPage + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r9.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, ctx_r9.pager.currentPage === ctx_r9.pager.totalPages));
} }
function PayableReportComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 46)(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PayableReportComponent_div_46_ul_3_Template, 8, 7, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" Showing ", ctx_r3.getFromCount(), " to ", ctx_r3.getToCount(), " of ", ctx_r3.intTotalCount, " entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.pager.pages && ctx_r3.pager.pages.length);
} }
class PayableReportComponent {
    constructor(supplierService, formBuilder, http, exportToExcelService, activatedRoute, pageServiceObj) {
        this.supplierService = supplierService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.exportToExcelService = exportToExcelService;
        this.activatedRoute = activatedRoute;
        this.pageServiceObj = pageServiceObj;
        this.arrSuppliers = [];
        // pagination
        this.pager = {};
        this.intTotalCount = 0;
        this.intPageLimit = 50;
        this.intSkipCount = 0;
        this.fetchLoading = false;
        this.status = '';
        activatedRoute.queryParams.subscribe((params) => {
            this.status = params['status'];
        });
        this.myForm = this.formBuilder.group({
            supplier: [null],
            fromDate: [''],
            toDate: [''],
            paymentStatus: [this.status ? this.status : 'ALL'],
        });
    }
    ngOnInit() {
        this.getAllSuppliers();
    }
    setPage(page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pageServiceObj.getPager(this.intTotalCount, page, this.intPageLimit);
        this.getAllSuppliers();
    }
    getFromCount() {
        return this.intPageLimit * (this.pager.currentPage - 1) + 1;
    }
    getToCount() {
        return (this.intPageLimit * (this.pager.currentPage - 1) +
            this.arrSuppliers.length);
    }
    getAllSuppliers() {
        let skipCount = this.intSkipCount;
        if (this.pager.intSkipCount) {
            skipCount = this.pager.intSkipCount;
        }
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            intSkipCount: skipCount,
            intPageLimit: this.intPageLimit,
            fkSupplierId: '',
            cust_Code: this.myForm.value.customerCode,
            sup_Code: this.myForm.value.supplier,
            fromDate: this.myForm.value.fromDate,
            endDate: this.myForm.value.toDate,
            paymentType: this.myForm.value.paymentStatus,
        };
        this.fetchLoading = true;
        this.supplierService.getAllSupplier(obj).subscribe((res) => {
            this.fetchLoading = false;
            if (res.success) {
                this.arrSuppliers = res.data;
                this.intTotalCount = res.count;
                this.pager = this.pageServiceObj.getPager(this.intTotalCount, this.pager.currentPage, this.intPageLimit);
            }
            else {
                this.arrSuppliers = [];
                // alert(res.message);
            }
        });
    }
    downloadExcel() {
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            intSkipCount: 0,
            intPageLimit: 1000000,
            fkSupplierId: '',
            cust_Code: this.myForm.value.customerCode,
            sup_Code: this.myForm.value.supplier,
            fromDate: this.myForm.value.fromDate,
            endDate: this.myForm.value.toDate,
            paymentType: this.myForm.value.paymentStatus,
        };
        this.fetchLoading = true;
        this.supplierService.getAllSupplier(obj).subscribe((res) => {
            this.fetchLoading = false;
            if (res.success) {
                let jsonData = [];
                res.data.forEach((e) => {
                    let obj = {
                        'Customer Code': e.cust_Code,
                        'Customer Name': e.customer_Name,
                        'Supplier ': e.strName,
                        'Created On': moment__WEBPACK_IMPORTED_MODULE_0__(e.createdAt).format('DD-MM-YYYY'),
                        'Total Amount': e.Amount,
                        'Paid Amount': e.Total_Paid_Amount,
                        'Balance Amount': e.Amount - e.Total_Paid_Amount,
                    };
                    jsonData.push(obj);
                });
                this.exportToExcelService.exportAsExcelFile(jsonData, 'Payable Report ');
            }
        });
    }
}
PayableReportComponent.ɵfac = function PayableReportComponent_Factory(t) { return new (t || PayableReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_1__.SupplierService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_2__.ExportToExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_3__.PagerService)); };
PayableReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PayableReportComponent, selectors: [["app-payable-report"]], decls: 47, vars: 4, consts: [[1, "card", "mb-3"], [1, "card-body"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "fromDate"], [1, ""], ["type", "date", "id", "fromDate", "formControlName", "fromDate", 1, "form-control", "form-control-solid"], ["for", "toDate"], ["type", "date", "id", "toDate", "formControlName", "toDate", 1, "form-control", "form-control-solid"], ["for", "status"], [1, "flex", "gap-3", "py-3"], [1, "form-check", "form-check-custom", "form-check-primary", "form-check-solid"], ["type", "radio", "value", "ALL", "formControlName", "paymentStatus", "id", "ALL", 1, "form-check-input"], ["for", "ALL", 1, "form-check-label"], [1, "form-check", "form-check-custom", "form-check-warning", "form-check-solid"], ["type", "radio", "value", "ONGOING", "formControlName", "paymentStatus", "id", "ONGOING", 1, "form-check-input"], ["for", "ONGOING", 1, "form-check-label"], [1, "form-check", "form-check-custom", "form-check-success", "form-check-solid"], ["type", "radio", "value", "VERIFY", "formControlName", "paymentStatus", "id", "VERIFY", 1, "form-check-input"], ["for", "VERIFY", 1, "form-check-label"], [1, "text-right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-search"], [1, "text-right", "mb-3"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-cloud-download"], [1, "row", "g-5", "g-xl-10"], [1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noDataTemplate", ""], ["class", "flex justify-center md:justify-between flex-col md:flex-row p-5", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-row-dashed", "table-row-gray-300", "align-middle", "gs-0", "gy-4", "w-full", "text-center"], [1, "fw-bold", "text-muted"], [1, "min-w-130px"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "d-flex", "flex-column", "align-items-center"], [1, "text-center", "px-4"], ["src", "./assets/media/illustrations/dozzy-1/5.png", "alt", "", 1, "mw-100", "mh-300px", "animate-pulse"], [1, "fw-bold", "text-xl", "text-gray-600", "text-center", "pt-15"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], ["src", "./assets/media/illustrations/sketchy-1/5.png", "alt", "", 1, "mw-100", "mh-300px"], [1, "fw-bold", "fs-6", "text-gray-600", "text-center", "pt-15"], [1, "flex", "justify-center", "md:justify-between", "flex-col", "md:flex-row", "p-5"], [1, "fs-6", "fw-bold", "text-gray-700", "mb-3", "md:mb-0", "text-center"], ["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "page-item", "previous", 3, "ngClass"], [1, "page-link", "cursor-pointer", 3, "click"], [1, "previous"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next", 3, "ngClass"], [1, "next"], [1, "page-item", 3, "ngClass"]], template: function PayableReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "div")(5, "label", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " From Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div")(10, "label", 7)(11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " To Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div")(15, "label", 9)(16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Payment Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 10)(19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Ongoing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 20)(32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PayableReportComponent_Template_button_click_32_listener() { return ctx.getAllSuppliers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 23)(36, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PayableReportComponent_Template_button_click_36_listener() { return ctx.downloadExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 26)(40, "div", 27)(41, "div", 28)(42, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, PayableReportComponent_div_43_Template, 20, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, PayableReportComponent_ng_template_44_Template, 3, 2, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, PayableReportComponent_div_46_Template, 4, 4, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.arrSuppliers.length > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.arrSuppliers.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheWFibGUtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1pZGRsZS1lYXN0JTIwSG9saWRheXNcXGhvbGlkYXlzLWNsaWVudFxcc3JjXFxhcHBcXHBhZ2VzXFxyZXBvcnRcXHBheWFibGUtcmVwb3J0XFxwYXlhYmxlLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJwYXlhYmxlLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 92495:
/*!*****************************************************************!*\
  !*** ./src/app/pages/report/pnl-report/pnl-report.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PnlReportComponent": () => (/* binding */ PnlReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/user/user.service */ 27353);
/* harmony import */ var src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common/export-to-excel.service */ 22733);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);





class PnlReportComponent {
    constructor(userService, exportToExcelService) {
        this.userService = userService;
        this.exportToExcelService = exportToExcelService;
        this.supplierPendingAmount = 0;
        this.SupplierPendingCount = 0;
        this.supplierVerifyCount = 0;
        this.SupplierVerifyAmount = 0;
        this.SupplierRefundAmount = 0;
        this.SupplierGvCreditAmount = 0;
        this.SupplierGvDebitAmount = 0;
        this.customerPendingCount = 0;
        this.customerVerifyCount = 0;
        this.customerPendingAmount = 0;
        this.customerVerifedAmount = 0;
        this.customerRefundAmount = 0;
        this.customerGvCreditAmount = 0;
        this.customerGvDebitAmount = 0;
        this.customerTotalAmount = 0;
        this.completedTripCount = 0;
        this.ongoingTripCount = 0;
        this.TotalCustomerCount = 0;
        this.TotalSupplierCount = 0;
        this.TotalExpenseCreditAmount = 0;
        this.TotalExpenseDebitAmount = 0;
        this.totalCreditPayment = 0;
        this.totalDebitPayment = 0;
        this.pendingPayment = 0;
        this.SupplierGvPendingCreditAmount = 0;
        this.SupplierGvPendingDebitCount = 0;
        this.customerGvCreditPendingAmount = 0;
        this.customerGvDebitPendingAmount = 0;
        this.TotalProfitAmount = 0;
        this.AllTotalProfitAmount = 0;
        this.TotalCostAmount = 0;
        this.customerPendingPayment = 0;
        this.supplierPendingPayment = 0;
        this.SupplierTotalAmount = 0;
        this.fromDate = '';
        this.toDate = '';
        this.getDashboardData();
    }
    getDashboardData(update) {
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            strFromDate: this.fromDate,
            strEndDate: this.toDate,
        };
        this.userService.getDashboard(obj).subscribe((res) => {
            if (res.success) {
                this.supplierPendingAmount = res.data[0].supplierPendingAmount;
                this.SupplierPendingCount = res.data[0].SupplierPendingCount;
                this.supplierVerifyCount = res.data[0].supplierVerifyCount;
                this.SupplierVerifyAmount = res.data[0].SupplierVerifyAmount;
                this.SupplierRefundAmount = res.data[0].SupplierRefundAmount;
                this.SupplierGvCreditAmount = res.data[0].SupplierGvCreditAmount;
                this.SupplierGvDebitAmount = res.data[0].SupplierGvDebitAmount;
                this.customerPendingCount = res.data[0].customerPendingCount;
                this.customerVerifyCount = res.data[0].customerVerifyCount;
                this.customerPendingAmount = res.data[0].customerPendingAmount;
                this.customerVerifedAmount = res.data[0].customerVerifedAmount;
                this.customerRefundAmount = res.data[0].customerRefundAmount;
                this.customerGvCreditAmount = res.data[0].customerGvCreditAmount;
                this.customerGvDebitAmount = res.data[0].customerGvDebitAmount;
                this.completedTripCount = res.data[0].completedTripCount;
                this.ongoingTripCount = res.data[0].ongoingTripCount;
                this.TotalCustomerCount = res.data[0].TotalCustomerCount;
                this.TotalSupplierCount = res.data[0].TotalSupplierCount;
                this.TotalExpenseCreditAmount = res.data[0].TotalExpenseCreditAmount;
                this.TotalExpenseDebitAmount = res.data[0].TotalExpenseDebitAmount;
                this.TotalProfitAmount = res.data[0].TotalProfitAmount;
                this.TotalCostAmount = res.data[0].TotalCostAmount;
                this.SupplierGvPendingCreditAmount =
                    res.data[0].SupplierGvPendingCreditAmount;
                this.SupplierGvPendingDebitCount =
                    res.data[0].SupplierGvPendingDebitCount;
                this.customerGvCreditPendingAmount =
                    res.data[0].customerGvCreditPendingAmount;
                this.customerGvDebitPendingAmount =
                    res.data[0].customerGvDebitPendingAmount;
                this.customerPendingPayment =
                    this.customerGvCreditPendingAmount + this.customerPendingAmount;
                this.supplierPendingPayment =
                    this.SupplierGvPendingDebitCount + this.supplierPendingAmount;
                this.SupplierTotalAmount =
                    this.SupplierVerifyAmount + this.supplierPendingAmount;
                this.totalCreditPayment =
                    this.SupplierGvCreditAmount +
                        this.customerGvCreditAmount +
                        this.customerVerifedAmount +
                        this.TotalExpenseCreditAmount;
                this.totalDebitPayment =
                    this.SupplierGvDebitAmount +
                        this.customerGvDebitAmount +
                        this.SupplierVerifyAmount +
                        this.TotalExpenseDebitAmount;
                this.pendingPayment =
                    this.supplierPendingAmount + this.customerPendingAmount;
            }
        });
    }
    downloadExcel() {
        let jsonData = [];
        let obj = {
            'supplier Pending Amount': this.supplierPendingAmount,
            'Supplier Pending Count': this.SupplierPendingCount,
            'supplier Verify Count': this.supplierVerifyCount,
            'Supplier Verify Amount': this.SupplierVerifyAmount,
            'Supplier Refund Amount': this.SupplierRefundAmount,
            'Supplier GvCredit Amount': this.SupplierGvCreditAmount,
            'Supplier GvDebit Amount': this.SupplierGvDebitAmount,
            'customer Pending Count': this.customerPendingCount,
            'customer Verify Count': this.customerVerifyCount,
            'customer Pending Amount': this.customerPendingAmount,
            'customer Verified Amount': this.customerVerifedAmount,
            'customer Refund Amount': this.customerRefundAmount,
            'customer GvCredit Amount': this.customerGvCreditAmount,
            'customer GvDebit Amount': this.customerGvDebitAmount,
            'completed Trip Count': this.completedTripCount,
            'ongoing Trip Count': this.ongoingTripCount,
            'Total Customer Count': this.TotalCustomerCount,
            'Total Supplier Count': this.TotalSupplierCount,
            'Total Expense Credit Amount': this.TotalExpenseCreditAmount,
            'Total Expense Debit Amount': this.TotalExpenseDebitAmount,
            'Total Profit Amount': this.TotalProfitAmount,
            'Total Cost Amount': this.TotalCostAmount,
            'Supplier GvPending Credit Amount': this.SupplierGvPendingCreditAmount,
            'Supplier GvPending Debit Count': this.SupplierGvPendingDebitCount,
            'customer GvCredit Pending Amount': this.customerGvCreditPendingAmount,
            'customer GvDebit Pending Amount': this.customerGvDebitPendingAmount,
            'customer Pending Payment': this.customerPendingPayment,
            'supplier Pending Payment': this.supplierPendingPayment,
            'Supplier Total Amount': this.SupplierTotalAmount,
        };
        jsonData.push(obj);
        this.exportToExcelService.exportAsExcelFile(jsonData, 'PnL Report ');
    }
}
PnlReportComponent.ɵfac = function PnlReportComponent_Factory(t) { return new (t || PnlReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_1__.ExportToExcelService)); };
PnlReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PnlReportComponent, selectors: [["app-pnl-report"]], decls: 200, vars: 53, consts: [[1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], [1, "card-body"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "fromDate"], [1, ""], ["type", "date", "id", "fromDate", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], ["for", "toDate"], ["type", "date", "id", "toDate", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], [1, "flex", "justify-end", "items-end"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-search"], [1, "text-right", "my-3"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-cloud-download"], [1, "flex", "max-md:flex-col", "mt-3", "gap-3"], [1, "flex", "flex-col", "gap-3", "w-3/12", "max-md:w-full"], [1, "flex", "gap-3"], [1, "bg-white", "py-6", "flex", "flex-col", "justify-center", "items-center", "w-full", "rounded", "hover:shadow-md", "transition-all", "cursor-pointer"], [1, "m-0", "mx-4", "text-2xl", "font-semibold"], [1, "m-0", "mx-4", "text-lg"], [1, "flex", "flex-col", "justify-center", "items-center", "bg-white", "py-6", "rounded", "hover:shadow-md", "transition-all", "cursor-pointer"], [1, "m-0", "text-3xl", "font-bold"], [1, "m-0", "text-xl"], [1, "m-0", "mx-4", "text-lg", "text-center"], [1, "w-9/12", "flex", "gap-3"], [1, "bg-white", "rounded-lg", "p-4", "w-1/2", "max-md:w-full"], [1, "flex", "flex-col"], [1, "m-0", "text-2xl", "text-center", "font-semibold"], [1, "grid", "grid-cols-2", "gap-3", "p-4"], [1, "border", "rounded", "hover:shadow-md", "transition-all", "cursor-pointer", "p-3"], [1, "m-0", "text-lg", "font-semibold"], [1, "m-0", "font-normal"]], template: function PnlReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "label", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " From Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PnlReportComponent_Template_input_ngModelChange_8_listener($event) { return ctx.fromDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "label", 7)(11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " To Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PnlReportComponent_Template_input_ngModelChange_13_listener($event) { return ctx.toDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PnlReportComponent_Template_button_click_16_listener() { return ctx.getDashboardData(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PnlReportComponent_Template_button_click_20_listener() { return ctx.downloadExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 15)(24, "div", 16)(25, "div")(26, "div", 17)(27, "div", 18)(28, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Completed Trips");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 18)(34, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Ongoing Trips");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div")(40, "div", 17)(41, "div", 18)(42, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Total Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 18)(48, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Total Suppliers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div")(54, "div", 17)(55, "div", 18)(56, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](58, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Expense Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 18)(62, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](64, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Expense Debit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 21)(68, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](70, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Total Credit Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 21)(74, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](76, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Total Debit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 21)(80, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](82, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Total Profit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div")(86, "div", 17)(87, "div", 18)(88, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](90, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "h6", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, " Customer Pending Payment (To Get) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 18)(94, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](96, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "h6", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, " Supplier Pending Payment (To Pay) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 25)(100, "div", 26)(101, "div", 27)(102, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 29)(105, "div", 30)(106, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Processing Payment Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 30)(111, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Verified Payment Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 30)(116, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Customer Verified Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 30)(121, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "Customer Pending Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 30)(126, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Customer Total Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 30)(131, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Customer Refund Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 30)(136, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "G-Voucher Credit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 30)(141, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "G-Voucher Debit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 30)(146, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Total Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 30)(151, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, "Total Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 26)(156, "div", 27)(157, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 29)(160, "div", 30)(161, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Processing Payment Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 30)(166, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Verified Payment Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 30)(171, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "Supplier Verified Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "div", 30)(176, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "Supplier Pending Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 30)(181, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184, "Supplier Total Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "div", 30)(186, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "Supplier Refund Paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "div", 30)(191, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "G-Voucher Credit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "div", 30)(196, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "G-Voucher Debit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.fromDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.toDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 31, ctx.completedTripCount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 33, ctx.ongoingTripCount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 35, ctx.TotalCustomerCount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 37, ctx.TotalSupplierCount.toFixed(0)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](58, 39, ctx.TotalExpenseCreditAmount.toFixed(0)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](64, 41, ctx.TotalExpenseDebitAmount.toFixed(0)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](70, 43, ctx.totalCreditPayment), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](76, 45, ctx.totalDebitPayment), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](82, 47, ctx.AllTotalProfitAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](90, 49, ctx.customerPendingPayment), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](96, 51, ctx.supplierPendingPayment), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.customerPendingCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.customerVerifyCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.customerVerifedAmount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.customerPendingAmount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.customerTotalAmount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.customerRefundAmount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.customerGvCreditAmount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.customerGvDebitAmount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.TotalCostAmount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.TotalProfitAmount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.SupplierPendingCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.supplierVerifyCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.SupplierVerifyAmount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.supplierPendingAmount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.SupplierTotalAmount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.SupplierRefundAmount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.SupplierGvCreditAmount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.SupplierGvDebitAmount, " ");
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBubC1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWlkZGxlLWVhc3QlMjBIb2xpZGF5c1xcaG9saWRheXMtY2xpZW50XFxzcmNcXGFwcFxccGFnZXNcXHJlcG9ydFxccG5sLXJlcG9ydFxccG5sLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJwbmwtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ 77667:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/report/processing-charge/processing-charge.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessingChargeComponent": () => (/* binding */ ProcessingChargeComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_report_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/report/report.service */ 89337);
/* harmony import */ var src_app_core_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/supplier/supplier.service */ 76405);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common/export-to-excel.service */ 22733);
/* harmony import */ var src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/pagination/pager.service */ 54225);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);









function ProcessingChargeComponent_div_31_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const customer_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 9, customer_r5.verifyDate, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.cust_Code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.customerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r5.packageName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](customer_r5.modePayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](customer_r5.tranferPercent);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](customer_r5.bankName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](18, 12, customer_r5.totalDiffrenceAmount, "0.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 15, customer_r5.actualAmount));
} }
function ProcessingChargeComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "table", 24)(2, "thead")(3, "tr", 25)(4, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Package");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Payment Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Transfer %");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Service Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Paid Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, ProcessingChargeComponent_div_31_tr_23_Template, 22, 17, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.arrCustomer);
} }
function ProcessingChargeComponent_ng_template_32_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 30)(2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function ProcessingChargeComponent_ng_template_32_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " No Data Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function ProcessingChargeComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ProcessingChargeComponent_ng_template_32_ng_container_0_Template, 7, 0, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProcessingChargeComponent_ng_template_32_ng_template_1_Template, 5, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.fetchLoading)("ngIfElse", _r7);
} }
const _c0 = function (a0) { return { active: a0 }; };
function ProcessingChargeComponent_div_34_ul_3_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 47)(1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProcessingChargeComponent_div_34_ul_3_li_4_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const page_r11 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.setPage(page_r11)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const page_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, ctx_r10.pager.currentPage === page_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", page_r11, " ");
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function ProcessingChargeComponent_div_34_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 40)(1, "li", 41)(2, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProcessingChargeComponent_div_34_ul_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.setPage(ctx_r14.pager.currentPage - 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProcessingChargeComponent_div_34_ul_3_li_4_Template, 3, 4, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li", 45)(6, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProcessingChargeComponent_div_34_ul_3_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.setPage(ctx_r16.pager.currentPage + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c1, ctx_r9.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r9.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c1, ctx_r9.pager.currentPage === ctx_r9.pager.totalPages));
} }
function ProcessingChargeComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37)(1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProcessingChargeComponent_div_34_ul_3_Template, 8, 7, "ul", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" Showing ", ctx_r3.getFromCount(), " to ", ctx_r3.getToCount(), " of ", ctx_r3.intTotalCount, " entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.pager.pages && ctx_r3.pager.pages.length);
} }
class ProcessingChargeComponent {
    constructor(reportService, supplierService, formBuilder, exportToExcelService, pageServiceObj) {
        this.reportService = reportService;
        this.supplierService = supplierService;
        this.formBuilder = formBuilder;
        this.exportToExcelService = exportToExcelService;
        this.pageServiceObj = pageServiceObj;
        this.arrCustomer = [];
        this.arrTransferMode = [];
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
            mode: [null],
            paymentStatus: ['ALL'],
        });
    }
    ngOnInit() {
        this.getAllIncomeReport();
        this.getMetaData();
    }
    getMetaData() {
        const obj = {
            metaType: 'transfermod', // Amentities transfermod
        };
        this.supplierService.metaData(obj).subscribe((data) => {
            if (data.success) {
                this.arrTransferMode = data.data.filter((e) => {
                    return e.percentage > 0;
                });
            }
            else {
                this.arrTransferMode = [];
            }
        });
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
            modeName: this.myForm.value.mode ? this.myForm.value.mode : 'ALL',
            paymentType: this.myForm.value.paymentStatus,
        };
        this.fetchLoading = true;
        this.reportService.getProcessingChargesReport(obj).subscribe((res) => {
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
            strStartDate: this.myForm.value.fromDate,
            strEndDate: this.myForm.value.toDate,
            modeName: this.myForm.value.mode ? this.myForm.value.mode : 'ALL',
            paymentType: this.myForm.value.paymentStatus,
        };
        this.fetchLoading = true;
        this.reportService.getProcessingChargesReport(obj).subscribe((res) => {
            this.fetchLoading = false;
            if (res.success) {
                let jsonData = [];
                res.data.forEach((e) => {
                    let obj = {
                        Date: moment__WEBPACK_IMPORTED_MODULE_0__(e.verifyDate).format('DD-MM-YYYY'),
                        'Customer Code': e.cust_Code,
                        'Customer Name': e.customer_name,
                        Package: e.packageName,
                        'Payment Mode': e.modePayment,
                        'Transfer %': e.tranferPercent,
                        Bank: e.bankName,
                        'Service Charge': e.totalDiffrenceAmount,
                        'Paid Amount': e.actualAmount,
                    };
                    jsonData.push(obj);
                });
                this.exportToExcelService.exportAsExcelFile(jsonData, 'Processing Charge Report ');
            }
        });
    }
}
ProcessingChargeComponent.ɵfac = function ProcessingChargeComponent_Factory(t) { return new (t || ProcessingChargeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_report_report_service__WEBPACK_IMPORTED_MODULE_1__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_2__.SupplierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_3__.ExportToExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_4__.PagerService)); };
ProcessingChargeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProcessingChargeComponent, selectors: [["app-processing-charge"]], decls: 35, vars: 5, consts: [[1, "card", "mb-3"], [1, "card-body"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "fromDate"], [1, ""], ["type", "date", "id", "fromDate", "formControlName", "fromDate", 1, "form-control", "form-control-solid"], ["for", "toDate"], ["type", "date", "id", "toDate", "formControlName", "toDate", 1, "form-control", "form-control-solid"], ["for", "status"], ["bindLabel", "payment_mode", "bindValue", "payment_mode", "formControlName", "mode", "placeholder", "Choose Mode", 3, "items"], [1, "text-right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-search"], [1, "text-right", "mb-3"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-cloud-download"], [1, "row", "g-5", "g-xl-10"], [1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noDataTemplate", ""], ["class", "flex justify-center md:justify-between flex-col md:flex-row p-5", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-row-dashed", "table-row-gray-300", "align-middle", "gs-0", "gy-4", "w-full", "text-center"], [1, "fw-bold", "text-muted"], [1, "min-w-130px"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "d-flex", "flex-column", "align-items-center"], [1, "text-center", "px-4"], ["src", "./assets/media/illustrations/dozzy-1/5.png", "alt", "", 1, "mw-100", "mh-300px", "animate-pulse"], [1, "fw-bold", "text-xl", "text-gray-600", "text-center", "pt-15"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], ["src", "./assets/media/illustrations/sketchy-1/5.png", "alt", "", 1, "mw-100", "mh-300px"], [1, "fw-bold", "fs-6", "text-gray-600", "text-center", "pt-15"], [1, "flex", "justify-center", "md:justify-between", "flex-col", "md:flex-row", "p-5"], [1, "fs-6", "fw-bold", "text-gray-700", "mb-3", "md:mb-0", "text-center"], ["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "page-item", "previous", 3, "ngClass"], [1, "page-link", "cursor-pointer", 3, "click"], [1, "previous"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next", 3, "ngClass"], [1, "next"], [1, "page-item", 3, "ngClass"]], template: function ProcessingChargeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Payment Mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "ng-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 11)(20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProcessingChargeComponent_Template_button_click_20_listener() { return ctx.getAllIncomeReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 14)(24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProcessingChargeComponent_Template_button_click_24_listener() { return ctx.downloadExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 17)(28, "div", 18)(29, "div", 19)(30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ProcessingChargeComponent_div_31_Template, 24, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, ProcessingChargeComponent_ng_template_32_Template, 3, 2, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, ProcessingChargeComponent_div_34_Template, 4, 4, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.arrTransferMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.arrCustomer.length > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.arrCustomer.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3NpbmctY2hhcmdlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1pZGRsZS1lYXN0JTIwSG9saWRheXNcXGhvbGlkYXlzLWNsaWVudFxcc3JjXFxhcHBcXHBhZ2VzXFxyZXBvcnRcXHByb2Nlc3NpbmctY2hhcmdlXFxwcm9jZXNzaW5nLWNoYXJnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJwcm9jZXNzaW5nLWNoYXJnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 16184:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/report/receivable-report/receivable-report.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceivableReportComponent": () => (/* binding */ ReceivableReportComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/customer/customer.service */ 21936);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common/export-to-excel.service */ 22733);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/pagination/pager.service */ 54225);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38143);








function ReceivableReportComponent_div_43_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const customer_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", customer_r5.cust_Code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", customer_r5.strName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 7, customer_r5.createdAt, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", customer_r5.strPackage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](customer_r5.Total_Amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](customer_r5.Total_Paid_Amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", customer_r5.Total_Amount - customer_r5.Total_Paid_Amount, " ");
} }
function ReceivableReportComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32)(1, "table", 33)(2, "thead")(3, "tr", 34)(4, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Created On");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Package");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Received Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Balance Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ReceivableReportComponent_div_43_tr_19_Template, 16, 10, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.arrCustomer);
} }
function ReceivableReportComponent_ng_template_44_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 39)(2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function ReceivableReportComponent_ng_template_44_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " No Data Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function ReceivableReportComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ReceivableReportComponent_ng_template_44_ng_container_0_Template, 7, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ReceivableReportComponent_ng_template_44_ng_template_1_Template, 5, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.fetchLoading)("ngIfElse", _r7);
} }
const _c0 = function (a0) { return { active: a0 }; };
function ReceivableReportComponent_div_46_ul_3_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 56)(1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReceivableReportComponent_div_46_ul_3_li_4_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const page_r11 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.setPage(page_r11)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const page_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r10.pager.currentPage === page_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", page_r11, " ");
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function ReceivableReportComponent_div_46_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 49)(1, "li", 50)(2, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReceivableReportComponent_div_46_ul_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.setPage(ctx_r14.pager.currentPage - 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ReceivableReportComponent_div_46_ul_3_li_4_Template, 3, 4, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "li", 54)(6, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReceivableReportComponent_div_46_ul_3_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.setPage(ctx_r16.pager.currentPage + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r9.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, ctx_r9.pager.currentPage === ctx_r9.pager.totalPages));
} }
function ReceivableReportComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 46)(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ReceivableReportComponent_div_46_ul_3_Template, 8, 7, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" Showing ", ctx_r3.getFromCount(), " to ", ctx_r3.getToCount(), " of ", ctx_r3.intTotalCount, " entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.pager.pages && ctx_r3.pager.pages.length);
} }
class ReceivableReportComponent {
    constructor(customerService, formBuilder, exportToExcelService, activatedRoute, pageServiceObj) {
        this.customerService = customerService;
        this.formBuilder = formBuilder;
        this.exportToExcelService = exportToExcelService;
        this.activatedRoute = activatedRoute;
        this.pageServiceObj = pageServiceObj;
        this.arrCustomer = [];
        // pagination
        this.pager = {};
        this.intTotalCount = 0;
        this.intPageLimit = 50;
        this.intSkipCount = 0;
        this.fetchLoading = false;
        this.status = '';
        activatedRoute.queryParams.subscribe((params) => {
            this.status = params['status'];
        });
        this.myForm = this.formBuilder.group({
            customer: [null],
            fromDate: [''],
            toDate: [''],
            paymentStatus: [this.status ? this.status : 'ALL'],
        });
    }
    ngOnInit() {
        this.getAllCustomer();
    }
    setPage(page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pageServiceObj.getPager(this.intTotalCount, page, this.intPageLimit);
        this.getAllCustomer();
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
            paymentType: this.myForm.value.paymentStatus,
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
            paymentType: this.myForm.value.paymentStatus,
        };
        this.fetchLoading = true;
        this.customerService.getAllCustomer(obj).subscribe((res) => {
            this.fetchLoading = false;
            if (res.success) {
                let jsonData = [];
                res.data.forEach((e) => {
                    let obj = {
                        'Customer Code': e.cust_Code,
                        'Customer Name': e.strName,
                        'Created On': moment__WEBPACK_IMPORTED_MODULE_0__(e.createdAt).format('DD-MM-YYYY'),
                        Package: e.strPackage,
                        'Total Amount': e.Total_Amount,
                        'Received Amount': e.Total_Paid_Amount,
                        'Balance Amount': e.Total_Amount - e.Total_Paid_Amount,
                    };
                    jsonData.push(obj);
                });
                this.exportToExcelService.exportAsExcelFile(jsonData, 'Receivable Report ');
            }
        });
    }
}
ReceivableReportComponent.ɵfac = function ReceivableReportComponent_Factory(t) { return new (t || ReceivableReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_export_to_excel_service__WEBPACK_IMPORTED_MODULE_2__.ExportToExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_3__.PagerService)); };
ReceivableReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ReceivableReportComponent, selectors: [["app-receivable-report"]], decls: 47, vars: 4, consts: [[1, "card", "mb-3"], [1, "card-body"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "fromDate"], [1, ""], ["type", "date", "id", "fromDate", "formControlName", "fromDate", 1, "form-control", "form-control-solid"], ["for", "toDate"], ["type", "date", "id", "toDate", "formControlName", "toDate", 1, "form-control", "form-control-solid"], ["for", "status"], [1, "flex", "gap-3", "py-3"], [1, "form-check", "form-check-custom", "form-check-primary", "form-check-solid"], ["type", "radio", "value", "ALL", "formControlName", "paymentStatus", "id", "ALL", 1, "form-check-input"], ["for", "ALL", 1, "form-check-label"], [1, "form-check", "form-check-custom", "form-check-warning", "form-check-solid"], ["type", "radio", "value", "ONGOING", "formControlName", "paymentStatus", "id", "ONGOING", 1, "form-check-input"], ["for", "ONGOING", 1, "form-check-label"], [1, "form-check", "form-check-custom", "form-check-success", "form-check-solid"], ["type", "radio", "value", "VERIFY", "formControlName", "paymentStatus", "id", "VERIFY", 1, "form-check-input"], ["for", "VERIFY", 1, "form-check-label"], [1, "text-right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-search"], [1, "text-right", "mb-3"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-cloud-download"], [1, "row", "g-5", "g-xl-10"], [1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noDataTemplate", ""], ["class", "flex justify-center md:justify-between flex-col md:flex-row p-5", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-row-dashed", "table-row-gray-300", "align-middle", "gs-0", "gy-4", "w-full", "text-center"], [1, "fw-bold", "text-muted"], [1, "min-w-130px"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "d-flex", "flex-column", "align-items-center"], [1, "text-center", "px-4"], ["src", "./assets/media/illustrations/dozzy-1/5.png", "alt", "", 1, "mw-100", "mh-300px", "animate-pulse"], [1, "fw-bold", "text-xl", "text-gray-600", "text-center", "pt-15"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], ["src", "./assets/media/illustrations/sketchy-1/5.png", "alt", "", 1, "mw-100", "mh-300px"], [1, "fw-bold", "fs-6", "text-gray-600", "text-center", "pt-15"], [1, "flex", "justify-center", "md:justify-between", "flex-col", "md:flex-row", "p-5"], [1, "fs-6", "fw-bold", "text-gray-700", "mb-3", "md:mb-0", "text-center"], ["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "page-item", "previous", 3, "ngClass"], [1, "page-link", "cursor-pointer", 3, "click"], [1, "previous"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next", 3, "ngClass"], [1, "next"], [1, "page-item", 3, "ngClass"]], template: function ReceivableReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "div")(5, "label", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " From Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div")(10, "label", 7)(11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " To Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div")(15, "label", 9)(16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Payment Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 10)(19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Ongoing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 20)(32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReceivableReportComponent_Template_button_click_32_listener() { return ctx.getAllCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 23)(36, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReceivableReportComponent_Template_button_click_36_listener() { return ctx.downloadExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 26)(40, "div", 27)(41, "div", 28)(42, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, ReceivableReportComponent_div_43_Template, 20, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, ReceivableReportComponent_ng_template_44_Template, 3, 2, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, ReceivableReportComponent_div_46_Template, 4, 4, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.arrCustomer.length > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.arrCustomer.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VpdmFibGUtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1pZGRsZS1lYXN0JTIwSG9saWRheXNcXGhvbGlkYXlzLWNsaWVudFxcc3JjXFxhcHBcXHBhZ2VzXFxyZXBvcnRcXHJlY2VpdmFibGUtcmVwb3J0XFxyZWNlaXZhYmxlLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJyZWNlaXZhYmxlLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 42104:
/*!**************************************************!*\
  !*** ./src/app/pages/report/report.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportComponent": () => (/* binding */ ReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51109);

class ReportComponent {
}
ReportComponent.ɵfac = function ReportComponent_Factory(t) { return new (t || ReportComponent)(); };
ReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportComponent, selectors: [["app-report"]], decls: 2, vars: 0, template: function ReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "manage-report works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1pZGRsZS1lYXN0JTIwSG9saWRheXNcXGhvbGlkYXlzLWNsaWVudFxcc3JjXFxhcHBcXHBhZ2VzXFxyZXBvcnRcXHJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJyZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 96690:
/*!***********************************************!*\
  !*** ./src/app/pages/report/report.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportModule": () => (/* binding */ ReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 39929);
/* harmony import */ var _gross_income_gross_income_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gross-income/gross-income.component */ 916);
/* harmony import */ var _mis_report_mis_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mis-report/mis-report.component */ 863);
/* harmony import */ var _payable_report_payable_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payable-report/payable-report.component */ 76812);
/* harmony import */ var _pnl_report_pnl_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pnl-report/pnl-report.component */ 92495);
/* harmony import */ var _processing_charge_processing_charge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./processing-charge/processing-charge.component */ 77667);
/* harmony import */ var _receivable_report_receivable_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receivable-report/receivable-report.component */ 16184);
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./report.component */ 42104);
/* harmony import */ var _trail_balance_report_trail_balance_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trail-balance-report/trail-balance-report.component */ 12890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
















class ReportModule {
}
ReportModule.ɵfac = function ReportModule_Factory(t) { return new (t || ReportModule)(); };
ReportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ReportModule });
ReportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([
            {
                path: 'mis-report',
                component: _mis_report_mis_report_component__WEBPACK_IMPORTED_MODULE_2__.MisReportComponent,
            },
            // {
            //   path: 'customer-bill',
            //   component: CustomerBillComponent,
            // },
            {
                path: 'pnl-report',
                component: _pnl_report_pnl_report_component__WEBPACK_IMPORTED_MODULE_4__.PnlReportComponent,
            },
            {
                path: 'receivable-report',
                component: _receivable_report_receivable_report_component__WEBPACK_IMPORTED_MODULE_6__.ReceivableReportComponent,
            },
            {
                path: 'payable-report',
                component: _payable_report_payable_report_component__WEBPACK_IMPORTED_MODULE_3__.PayableReportComponent,
            },
            {
                path: 'gross-income',
                component: _gross_income_gross_income_component__WEBPACK_IMPORTED_MODULE_1__.GrossIncomeComponent,
            },
            {
                path: 'processing-charges',
                component: _processing_charge_processing_charge_component__WEBPACK_IMPORTED_MODULE_5__.ProcessingChargeComponent,
            },
            {
                path: 'trail-balance-report',
                component: _trail_balance_report_trail_balance_report_component__WEBPACK_IMPORTED_MODULE_8__.TrailBalanceReportComponent,
            },
        ])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ReportModule, { declarations: [_report_component__WEBPACK_IMPORTED_MODULE_7__.ReportComponent,
        _mis_report_mis_report_component__WEBPACK_IMPORTED_MODULE_2__.MisReportComponent,
        _pnl_report_pnl_report_component__WEBPACK_IMPORTED_MODULE_4__.PnlReportComponent,
        _receivable_report_receivable_report_component__WEBPACK_IMPORTED_MODULE_6__.ReceivableReportComponent,
        _payable_report_payable_report_component__WEBPACK_IMPORTED_MODULE_3__.PayableReportComponent,
        _processing_charge_processing_charge_component__WEBPACK_IMPORTED_MODULE_5__.ProcessingChargeComponent,
        _gross_income_gross_income_component__WEBPACK_IMPORTED_MODULE_1__.GrossIncomeComponent,
        _trail_balance_report_trail_balance_report_component__WEBPACK_IMPORTED_MODULE_8__.TrailBalanceReportComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 12890:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/report/trail-balance-report/trail-balance-report.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrailBalanceReportComponent": () => (/* binding */ TrailBalanceReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 80779);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ 15643);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var src_app_core_services_report_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/report/report.service */ 89337);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);







function TrailBalanceReportComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TrailBalanceReportComponent_span_31_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" - ", ctx_r6.myForm.value.toDate, "");
} }
function TrailBalanceReportComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TrailBalanceReportComponent_span_31_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("as on Date ", ctx_r1.myForm.value.fromDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.myForm.value.toDate && ctx_r1.submitted);
} }
function TrailBalanceReportComponent_tr_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 33)(2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.strExpense);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r7.DebitAmount === 0 ? "" : item_r7.DebitAmount == null ? null : item_r7.DebitAmount.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r7.CreditAmount === 0 ? "" : item_r7.CreditAmount == null ? null : item_r7.CreditAmount.toFixed(2), " ");
} }
function TrailBalanceReportComponent_span_129_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" - ", ctx_r8.myForm.value.toDate, "");
} }
function TrailBalanceReportComponent_span_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TrailBalanceReportComponent_span_129_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("as on Date ", ctx_r3.myForm.value.fromDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.myForm.value.toDate && ctx_r3.submitted);
} }
function TrailBalanceReportComponent_ng_template_139_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 33)(2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r13.strExpense);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r13.DebitAmount === 0 ? "" : item_r13.DebitAmount == null ? null : item_r13.DebitAmount.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r13.CreditAmount === 0 ? "" : item_r13.CreditAmount == null ? null : item_r13.CreditAmount.toFixed(2), " ");
} }
function TrailBalanceReportComponent_ng_template_139_span_107_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" - ", ctx_r14.myForm.value.toDate, "");
} }
function TrailBalanceReportComponent_ng_template_139_span_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TrailBalanceReportComponent_ng_template_139_span_107_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("as on Date ", ctx_r12.myForm.value.fromDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.myForm.value.toDate && ctx_r12.submitted);
} }
function TrailBalanceReportComponent_ng_template_139_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40)(1, "h4", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Trail Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TrailBalanceReportComponent_ng_template_139_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const modal_r9 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](modal_r9.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 43)(5, "div", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Trail Balance as on Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 46)(11, "div", 23)(12, "table", 24)(13, "thead")(14, "tr", 25)(15, "th", 47)(16, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "ACCOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Dr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Cr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th", 48)(23, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Net Profit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "tbody")(26, "tr")(27, "td", 29)(28, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Selling Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "tr")(35, "td", 29)(36, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Cost Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "td", 31)(41, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "tr")(43, "td", 29)(44, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "td", 31)(47, "td", 31)(48, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, TrailBalanceReportComponent_ng_template_139_tr_49_Template, 9, 3, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "tr")(51, "td", 29)(52, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Assets");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "td", 31)(55, "td", 31)(56, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "tr")(58, "td", 33)(59, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Receivable Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "td", 31)(64, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "tr")(66, "td", 29)(67, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Liability");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "td", 31)(70, "td", 31)(71, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "tr")(73, "td", 33)(74, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Payable Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "tr")(81, "td", 29)(82, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Service Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "td", 31)(85, "td", 31)(86, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "tr")(88, "td", 33)(89, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Tabby");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "td", 31)(94, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "tr")(96, "td", 33)(97, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Credit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "td", 31)(102, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "tr", 35)(104, "td", 29)(105, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Trail Balance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](107, TrailBalanceReportComponent_ng_template_139_span_107_Template, 3, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "td", 36)(113, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.trailBalance.totalSellingPrice, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.trailBalance.totalCostPrice, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.trailBalance.totalExpense);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.trailBalance.customerBalance, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.trailBalance.supplierBalance, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.trailBalance.totalTabbyAmount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.trailBalance.totalCreditCardAmount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.myForm.value.fromDate && ctx_r5.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.trailBalance.totalDebitAmount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.trailBalance.totalCreditAmount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.trailBalance.netProfit);
} }
class TrailBalanceReportComponent {
    constructor(formBuilder, reportService) {
        this.formBuilder = formBuilder;
        this.reportService = reportService;
        this.submitted = false;
        this.trailBalance = {};
        this.modalService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal);
        this.myForm = this.formBuilder.group({
            fromDate: [''],
            toDate: [''],
        });
        this.getTrailBalance();
    }
    getTrailBalance(submit) {
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            strStartDate: this.myForm.value.fromDate,
            strEndDate: this.myForm.value.toDate,
        };
        this.reportService.getTrailBalanceReport(obj).subscribe((res) => {
            submit ? (this.submitted = true) : (this.submitted = false);
            if (res.success) {
                this.trailBalance = res.data[0];
                if (submit) {
                    this.chart.data.datasets = [
                        {
                            label: 'Debit',
                            data: [
                                0,
                                this.trailBalance.totalCostPrice,
                                this.trailBalance.totalExpenseDebitAmount,
                                this.trailBalance.customerBalance,
                                0,
                                this.trailBalance.totalTabbyAmount + // debit
                                    this.trailBalance.totalCreditCardAmount, // debit
                            ],
                            backgroundColor: '#FECACA',
                        },
                        {
                            label: 'Credit',
                            data: [
                                this.trailBalance.totalSellingPrice,
                                0,
                                0,
                                0,
                                this.trailBalance.supplierBalance,
                                0, // debit
                                // 0, // debit
                            ],
                            backgroundColor: '#bbf7d0',
                        },
                    ];
                    this.chart.update();
                }
                else {
                    setTimeout(() => {
                        this.createChart();
                    }, 100);
                }
            }
            else {
                this.trailBalance = [];
            }
        });
    }
    createChart() {
        this.chart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__.Chart('MyChart', {
            type: 'bar',
            data: {
                labels: [
                    'Selling Amount',
                    'Cost Amount',
                    'Total Expenses',
                    'Assets',
                    'Liability',
                    'Service Charge',
                    // 'Credit Card',
                ],
                datasets: [
                    {
                        label: 'Debit',
                        data: [
                            0,
                            this.trailBalance.totalCostPrice,
                            this.trailBalance.totalExpenseDebitAmount,
                            this.trailBalance.customerBalance,
                            0,
                            this.trailBalance.totalTabbyAmount + // debit
                                this.trailBalance.totalCreditCardAmount, // debit
                        ],
                        backgroundColor: '#FECACA',
                    },
                    {
                        label: 'Credit',
                        data: [
                            this.trailBalance.totalSellingPrice,
                            0,
                            0,
                            0,
                            this.trailBalance.supplierBalance,
                            0, // debit
                            // 0, // debit
                        ],
                        backgroundColor: '#bbf7d0',
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Trail Balance',
                    },
                },
            },
            // type: 'bar',
            // data: {
            //   labels: [
            //     'January',
            //     'February',
            //     'March',
            //     'April',
            //     'May',
            //     'June',
            //     'July',
            //   ],
            //   datasets: [
            //     {
            //       label: 'Monthly Sales',
            //       data: [65, 59, 80, 81, 56, 55, 40],
            //       backgroundColor: [
            //         'rgba(255, 99, 132, 0.2)',
            //         'rgba(54, 162, 235, 0.2)',
            //         'rgba(255, 206, 86, 0.2)',
            //         'rgba(75, 192, 192, 0.2)',
            //         'rgba(153, 102, 255, 0.2)',
            //         'rgba(255, 159, 64, 0.2)',
            //         'rgba(99, 132, 255, 0.2)',
            //       ],
            //       borderColor: [
            //         'rgba(255, 99, 132, 1)',
            //         'rgba(54, 162, 235, 1)',
            //         'rgba(255, 206, 86, 1)',
            //         'rgba(75, 192, 192, 1)',
            //         'rgba(153, 102, 255, 1)',
            //         'rgba(255, 159, 64, 1)',
            //         'rgba(99, 132, 255, 1)',
            //       ],
            //       borderWidth: 1,
            //     },
            //   ],
            // },
            // options: {
            //   scales: {
            //     y: {
            //       beginAtZero: true,
            //     },
            //   },
            // },
            // type: 'doughnut',
            // data: {
            //   labels: ['Verified Amount', 'Pending Amount'],
            //   datasets: [
            //     {
            //       data: [this.customerVerifedAmount, this.customerPendingAmount],
            //       backgroundColor: ['#13487F', '#BDB5B5'],
            //     },
            //   ],
            // },
            // options: {
            //   indexAxis: 'y',
            //   responsive: true,
            //   plugins: {
            //     legend: {
            //       display: false,
            //     },
            //   },
            //   scales: {
            //     x: {
            //       display: false,
            //       ticks: {
            //         display: false,
            //       },
            //       grid: {
            //         display: false,
            //       },
            //     },
            //     y: {
            //       display: false,
            //       ticks: {
            //         display: false,
            //       },
            //       grid: {
            //         display: false,
            //       },
            //     },
            //   },
            // },
        });
    }
    open(content) {
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg',
        });
        this.convertToPDF();
    }
    convertToPDF() {
        setTimeout(() => {
            let printArea = document.getElementById('printArea');
            if (printArea) {
                let originalBody = document.body;
                let bodyElement = document.createElement('body');
                bodyElement.appendChild(printArea);
                document.body = bodyElement;
                window.print();
                document.body = originalBody;
            }
            this.modalService.dismissAll();
        }, 100);
    }
}
TrailBalanceReportComponent.ɵfac = function TrailBalanceReportComponent_Factory(t) { return new (t || TrailBalanceReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_report_report_service__WEBPACK_IMPORTED_MODULE_1__.ReportService)); };
TrailBalanceReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TrailBalanceReportComponent, selectors: [["app-trail-balance-report"]], decls: 141, vars: 15, consts: [[1, "card", "mb-3"], [1, "card-body"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "fromDate"], [1, ""], ["type", "date", "id", "fromDate", "formControlName", "fromDate", 1, "form-control", "form-control-solid"], ["for", "toDate"], ["type", "date", "id", "toDate", "formControlName", "toDate", 1, "form-control", "form-control-solid"], [1, "text-right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-search"], [1, "text-right", "mb-3"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-printer"], [1, "row", "g-5", "g-xl-10"], [1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], [1, "flex", "flex-col", "justify-center", "items-center"], ["src", "assets/media/logos/me-logo.jpeg", "alt", "", 1, "h-28"], [1, "text-lg", "font-bold"], [4, "ngIf"], [1, "max-w-3xl", "w-full"], [1, "table-responsive"], [1, "table", "table-bordered", 2, "border", "1px solid black"], [1, "fw-bold", "bg-yellow-200"], [1, "min-w-130px", "text-left", "text-center", 2, "border", "1px solid black"], [1, "px-2"], [1, "min-w-130px", "text-center", 2, "border", "1px solid black"], [1, "fw-bold", 2, "border", "1px solid black"], [1, "ml-2"], [1, "text-right", 2, "border", "1px solid black"], [4, "ngFor", "ngForOf"], [1, "", 2, "border", "1px solid black"], [1, "ml-5"], [1, "bg-blue-200"], [1, "text-right", 2, "background-color", "#bbf7d0"], [1, "mr-2", "fw-bold"], ["id", "MyChart"], ["content", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", "h-[70vh]", "overflow-scroll"], ["id", "printArea", 1, "flex", "flex-col", "justify-center", "items-center"], ["printSection", ""], [1, "p-5", "max-w-2xl", "w-full", "rounded"], [1, "min-w-130px", "text-left", 2, "border", "1px solid black"], [1, "min-w-130px", 2, "border", "1px solid black"]], template: function TrailBalanceReportComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "div")(5, "label", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " From Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "label", 7)(11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " To Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9)(15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TrailBalanceReportComponent_Template_button_click_15_listener() { return ctx.getTrailBalance(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12)(19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TrailBalanceReportComponent_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](140); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.open(_r4)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Print ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15)(23, "div", 16)(24, "div", 17)(25, "div", 1)(26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, TrailBalanceReportComponent_span_29_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Trail Balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, TrailBalanceReportComponent_span_31_Template, 3, 2, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 22)(33, "div", 23)(34, "table", 24)(35, "thead")(36, "tr", 25)(37, "th", 26)(38, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "ACCOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Debit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Credit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "th", 28)(45, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Net Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "tbody")(48, "tr")(49, "td", 29)(50, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Selling Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tr")(57, "td", 29)(58, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Cost Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "td", 31)(63, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "tr")(65, "td", 29)(66, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "td", 31)(69, "td", 31)(70, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, TrailBalanceReportComponent_tr_71_Template, 9, 3, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "tr")(73, "td", 29)(74, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "td", 31)(77, "td", 31)(78, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "tr")(80, "td", 33)(81, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Receivable Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "td", 31)(86, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "tr")(88, "td", 29)(89, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Liability");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "td", 31)(92, "td", 31)(93, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "tr")(95, "td", 33)(96, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Payable Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "tr")(103, "td", 29)(104, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Service Charge");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "td", 31)(107, "td", 31)(108, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "tr")(110, "td", 33)(111, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Tabby");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "td", 31)(116, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "tr")(118, "td", 33)(119, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Credit Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "td", 31)(124, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "tr", 35)(126, "td", 29)(127, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Trail Balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](129, TrailBalanceReportComponent_span_129_Template, 3, 2, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "td", 36)(135, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "canvas", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](139, TrailBalanceReportComponent_ng_template_139_Template, 115, 11, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.myForm.value.fromDate || !ctx.myForm.value.toDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.myForm.value.fromDate && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.trailBalance.totalSellingPrice == null ? null : ctx.trailBalance.totalSellingPrice.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.trailBalance.totalCostPrice == null ? null : ctx.trailBalance.totalCostPrice.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.trailBalance.totalExpense);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.trailBalance.customerBalance == null ? null : ctx.trailBalance.customerBalance.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.trailBalance.supplierBalance == null ? null : ctx.trailBalance.supplierBalance.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.trailBalance.totalTabbyAmount == null ? null : ctx.trailBalance.totalTabbyAmount.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.trailBalance.totalCreditCardAmount == null ? null : ctx.trailBalance.totalCreditCardAmount.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.myForm.value.fromDate && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.trailBalance.totalDebitAmount == null ? null : ctx.trailBalance.totalDebitAmount.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.trailBalance.totalCreditAmount == null ? null : ctx.trailBalance.totalCreditAmount.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.trailBalance.netProfit == null ? null : ctx.trailBalance.netProfit.toFixed(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.chart);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n#MyChart[_ngcontent-%COMP%] {\n  max-height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWlsLWJhbGFuY2UtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1pZGRsZS1lYXN0JTIwSG9saWRheXNcXGhvbGlkYXlzLWNsaWVudFxcc3JjXFxhcHBcXHBhZ2VzXFxyZXBvcnRcXHRyYWlsLWJhbGFuY2UtcmVwb3J0XFx0cmFpbC1iYWxhbmNlLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0FDRUYiLCJmaWxlIjoidHJhaWwtYmFsYW5jZS1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI015Q2hhcnQge1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNNeUNoYXJ0IHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_report_report_module_ts.6da33d4262af3ecd.js.map