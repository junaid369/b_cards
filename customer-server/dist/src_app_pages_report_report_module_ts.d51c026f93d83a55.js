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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 80779);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ 15643);
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-datalabels */ 27372);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var src_app_core_services_report_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/report/report.service */ 89337);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);








function TrailBalanceReportComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TrailBalanceReportComponent_span_31_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" - ", ctx_r7.myForm.value.toDate, "");
} }
function TrailBalanceReportComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TrailBalanceReportComponent_span_31_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("as on Date ", ctx_r1.myForm.value.fromDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.myForm.value.toDate && ctx_r1.submitted);
} }
function TrailBalanceReportComponent_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 32)(2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8.strExpense);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r8.DebitAmount === 0 ? "" : item_r8.DebitAmount == null ? null : item_r8.DebitAmount.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r8.CreditAmount === 0 ? "" : item_r8.CreditAmount == null ? null : item_r8.CreditAmount.toFixed(2), " ");
} }
function TrailBalanceReportComponent_span_128_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" - ", ctx_r9.myForm.value.toDate, "");
} }
function TrailBalanceReportComponent_span_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TrailBalanceReportComponent_span_128_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("as on Date ", ctx_r3.myForm.value.fromDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.myForm.value.toDate && ctx_r3.submitted);
} }
function TrailBalanceReportComponent_option_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const yr_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", yr_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", yr_r10, " ");
} }
function TrailBalanceReportComponent_ng_template_142_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TrailBalanceReportComponent_ng_template_142_span_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" - ", ctx_r17.myForm.value.toDate, "");
} }
function TrailBalanceReportComponent_ng_template_142_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TrailBalanceReportComponent_ng_template_142_span_11_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("as on Date ", ctx_r14.myForm.value.fromDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.myForm.value.toDate && ctx_r14.submitted);
} }
function TrailBalanceReportComponent_ng_template_142_tr_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 32)(2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r18.strExpense);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r18.DebitAmount === 0 ? "" : item_r18.DebitAmount == null ? null : item_r18.DebitAmount.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r18.CreditAmount === 0 ? "" : item_r18.CreditAmount == null ? null : item_r18.CreditAmount.toFixed(2), " ");
} }
function TrailBalanceReportComponent_ng_template_142_span_108_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" - ", ctx_r19.myForm.value.toDate, "");
} }
function TrailBalanceReportComponent_ng_template_142_span_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TrailBalanceReportComponent_ng_template_142_span_108_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("as on Date ", ctx_r16.myForm.value.fromDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.myForm.value.toDate && ctx_r16.submitted);
} }
function TrailBalanceReportComponent_ng_template_142_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Trail Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TrailBalanceReportComponent_ng_template_142_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const modal_r11 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r11.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 47)(5, "div", 48, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, TrailBalanceReportComponent_ng_template_142_span_9_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Trail Balance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, TrailBalanceReportComponent_ng_template_142_span_11_Template, 3, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 50)(13, "div", 23)(14, "table", 24)(15, "thead")(16, "tr", 25)(17, "th", 26)(18, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "ACCOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Debit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Credit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "tbody")(27, "tr")(28, "td", 28)(29, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Selling Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "tr")(36, "td", 28)(37, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Cost Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "td", 30)(42, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "tr")(44, "td", 28)(45, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "td", 30)(48, "td", 30)(49, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, TrailBalanceReportComponent_ng_template_142_tr_50_Template, 9, 3, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "tr")(52, "td", 28)(53, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Assets");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "td", 30)(56, "td", 30)(57, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "tr")(59, "td", 32)(60, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Receivable Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "td", 30)(65, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "tr")(67, "td", 28)(68, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Liability");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "td", 30)(71, "td", 30)(72, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "tr")(74, "td", 32)(75, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Payable Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "tr")(82, "td", 28)(83, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Service Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "td", 30)(86, "td", 30)(87, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "tr")(89, "td", 32)(90, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Tabby");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "td", 30)(95, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "tr")(97, "td", 32)(98, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Credit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "td", 30)(103, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "tr", 34)(105, "td", 28)(106, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Trail Balance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](108, TrailBalanceReportComponent_ng_template_142_span_108_Template, 3, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "td", 35)(114, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.myForm.value.fromDate || !ctx_r6.myForm.value.toDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.myForm.value.fromDate && ctx_r6.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.trailBalance.totalSellingPrice == null ? null : ctx_r6.trailBalance.totalSellingPrice.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.trailBalance.totalCostPrice == null ? null : ctx_r6.trailBalance.totalCostPrice.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.trailBalance.totalExpense);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.trailBalance.customerBalance == null ? null : ctx_r6.trailBalance.customerBalance.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.trailBalance.supplierBalance == null ? null : ctx_r6.trailBalance.supplierBalance.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.trailBalance.totalTabbyAmount == null ? null : ctx_r6.trailBalance.totalTabbyAmount.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.trailBalance.totalCreditCardAmount == null ? null : ctx_r6.trailBalance.totalCreditCardAmount.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.myForm.value.fromDate && ctx_r6.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.trailBalance.totalDebitAmount == null ? null : ctx_r6.trailBalance.totalDebitAmount.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.trailBalance.totalCreditAmount == null ? null : ctx_r6.trailBalance.totalCreditAmount.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.trailBalance.netProfit == null ? null : ctx_r6.trailBalance.netProfit.toFixed(2));
} }
class TrailBalanceReportComponent {
    constructor(formBuilder, reportService) {
        this.formBuilder = formBuilder;
        this.reportService = reportService;
        this.submitted = false;
        this.trailBalance = {};
        this.year = '2024';
        this.modalService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal);
        this.years = ['2024', '2023', '2022', '2021', '2020'];
        this.monthNames = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        chart_js_auto__WEBPACK_IMPORTED_MODULE_0__.Chart.register(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__["default"]);
        this.myForm = this.formBuilder.group({
            fromDate: [''],
            toDate: [''],
        });
        this.getTrailBalance();
    }
    getTrailBalance(submit, year) {
        if (year)
            this.year = year;
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            strStartDate: this.myForm.value.fromDate,
            strEndDate: this.myForm.value.toDate,
            year: this.year,
        };
        this.reportService.getTrailBalanceReport(obj).subscribe((res) => {
            submit ? (this.submitted = true) : (this.submitted = false);
            if (res.success) {
                this.trailBalance = res.data[0];
                if (submit) {
                    this.chart.data.datasets = [
                        {
                            label: 'Selling Price',
                            data: this.trailBalance.graphData.map((item) => item.SellingPrice),
                            backgroundColor: '#FECACA',
                        },
                        {
                            label: 'Total Profit',
                            data: this.trailBalance.graphData.map((item) => item.TotalProfit),
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
                labels: this.trailBalance.graphData.map((item) => `${this.monthNames[item.month - 1]}`),
                datasets: [
                    {
                        label: 'Selling Price',
                        data: this.trailBalance.graphData.map((item) => item.SellingPrice),
                        backgroundColor: '#FECACA',
                    },
                    {
                        label: 'Total Profit',
                        data: this.trailBalance.graphData.map((item) => item.TotalProfit),
                        backgroundColor: '#bbf7d0',
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    datalabels: {
                        anchor: 'end',
                        align: 'top',
                        formatter: function (value) {
                            return value !== 0 ? value : '';
                        },
                        color: 'black',
                    },
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Month Wise Sales Report - Holidays Department',
                    },
                },
            },
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
TrailBalanceReportComponent.ɵfac = function TrailBalanceReportComponent_Factory(t) { return new (t || TrailBalanceReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_report_report_service__WEBPACK_IMPORTED_MODULE_2__.ReportService)); };
TrailBalanceReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TrailBalanceReportComponent, selectors: [["app-trail-balance-report"]], decls: 144, vars: 17, consts: [[1, "card", "mb-3"], [1, "card-body"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "fromDate"], [1, ""], ["type", "date", "id", "fromDate", "formControlName", "fromDate", 1, "form-control", "form-control-solid"], ["for", "toDate"], ["type", "date", "id", "toDate", "formControlName", "toDate", 1, "form-control", "form-control-solid"], [1, "text-right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-search"], [1, "text-right", "mb-3"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-printer"], [1, "row", "g-5", "g-xl-10"], [1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], [1, "flex", "flex-col", "justify-center", "items-center"], ["src", "assets/media/logos/me-logo.jpeg", "alt", "", 1, "h-28"], [1, "text-lg", "font-bold"], [4, "ngIf"], [1, "max-w-5xl", "w-full"], [1, "table-responsive"], [1, "table", "table-bordered", 2, "border", "1px solid black"], [1, "fw-bold", "bg-yellow-200"], [1, "min-w-130px", "text-center", 2, "border", "1px solid black"], [1, "px-2"], [1, "fw-bold", 2, "border", "1px solid black"], [1, "ml-2"], [1, "text-right", 2, "border", "1px solid black"], [4, "ngFor", "ngForOf"], [1, "", 2, "border", "1px solid black"], [1, "ml-5"], [1, "bg-blue-200"], [1, "text-right", 2, "background-color", "#bbf7d0"], [1, "mr-2", "fw-bold"], [1, "flex", "gap-2", "justify-end", "mt-10"], [1, "w-36"], ["name", "year", "id", "year", 1, "form-select", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "MyChart"], ["content", ""], [3, "value"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", "h-[70vh]", "overflow-scroll"], ["id", "printArea", 1, "flex", "flex-col", "justify-center", "items-center"], ["printSection", ""], [1, "p-5", "max-w-2xl", "w-full", "rounded"]], template: function TrailBalanceReportComponent_Template(rf, ctx) { if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "div")(5, "label", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " From Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div")(10, "label", 7)(11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " To Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9)(15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TrailBalanceReportComponent_Template_button_click_15_listener() { return ctx.getTrailBalance(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12)(19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TrailBalanceReportComponent_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](143); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.open(_r5)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Print ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15)(23, "div", 16)(24, "div", 17)(25, "div", 1)(26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, TrailBalanceReportComponent_span_29_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Trail Balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, TrailBalanceReportComponent_span_31_Template, 3, 2, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 22)(33, "div", 23)(34, "table", 24)(35, "thead")(36, "tr", 25)(37, "th", 26)(38, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "ACCOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Debit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " Credit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "tbody")(47, "tr")(48, "td", 28)(49, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Selling Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "tr")(56, "td", 28)(57, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Cost Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "td", 30)(62, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "tr")(64, "td", 28)(65, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "td", 30)(68, "td", 30)(69, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, TrailBalanceReportComponent_tr_70_Template, 9, 3, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "tr")(72, "td", 28)(73, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "td", 30)(76, "td", 30)(77, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "tr")(79, "td", 32)(80, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Receivable Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "td", 30)(85, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "tr")(87, "td", 28)(88, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Liability");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "td", 30)(91, "td", 30)(92, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "tr")(94, "td", 32)(95, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Payable Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "tr")(102, "td", 28)(103, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Service Charge");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](105, "td", 30)(106, "td", 30)(107, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "tr")(109, "td", 32)(110, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Tabby");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "td", 30)(115, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "tr")(117, "td", 32)(118, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Credit Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "td", 30)(123, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "tr", 34)(125, "td", 28)(126, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "Trail Balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](128, TrailBalanceReportComponent_span_128_Template, 3, 2, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "td", 35)(134, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 37)(137, "div", 38)(138, "select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TrailBalanceReportComponent_Template_select_ngModelChange_138_listener($event) { return ctx.year = $event; })("change", function TrailBalanceReportComponent_Template_select_change_138_listener() { return ctx.getTrailBalance(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](139, TrailBalanceReportComponent_option_139_Template, 2, 2, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "canvas", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](142, TrailBalanceReportComponent_ng_template_142_Template, 116, 13, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.myForm.value.fromDate || !ctx.myForm.value.toDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.myForm.value.fromDate && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.trailBalance.totalSellingPrice == null ? null : ctx.trailBalance.totalSellingPrice.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.trailBalance.totalCostPrice == null ? null : ctx.trailBalance.totalCostPrice.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.trailBalance.totalExpense);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.trailBalance.customerBalance == null ? null : ctx.trailBalance.customerBalance.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.trailBalance.supplierBalance == null ? null : ctx.trailBalance.supplierBalance.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.trailBalance.totalTabbyAmount == null ? null : ctx.trailBalance.totalTabbyAmount.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.trailBalance.totalCreditCardAmount == null ? null : ctx.trailBalance.totalCreditCardAmount.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.myForm.value.fromDate && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.trailBalance.totalDebitAmount == null ? null : ctx.trailBalance.totalDebitAmount.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.trailBalance.totalCreditAmount == null ? null : ctx.trailBalance.totalCreditAmount.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.trailBalance.netProfit == null ? null : ctx.trailBalance.netProfit.toFixed(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.chart);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n#MyChart[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWlsLWJhbGFuY2UtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1pZGRsZS1lYXN0JTIwSG9saWRheXNcXGhvbGlkYXlzLWNsaWVudFxcc3JjXFxhcHBcXHBhZ2VzXFxyZXBvcnRcXHRyYWlsLWJhbGFuY2UtcmVwb3J0XFx0cmFpbC1iYWxhbmNlLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRUYiLCJmaWxlIjoidHJhaWwtYmFsYW5jZS1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI015Q2hhcnQge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jTXlDaGFydCB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ 27372:
/*!**************************************************************************************!*\
  !*** ./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.esm.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/helpers */ 25937);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ 9775);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 75848);
/*!
 * chartjs-plugin-datalabels v2.2.0
 * https://chartjs-plugin-datalabels.netlify.app
 * (c) 2017-2022 chartjs-plugin-datalabels contributors
 * Released under the MIT license
 */



var devicePixelRatio = function () {
  if (typeof window !== 'undefined') {
    if (window.devicePixelRatio) {
      return window.devicePixelRatio;
    } // devicePixelRatio is undefined on IE10
    // https://stackoverflow.com/a/20204180/8837887
    // https://github.com/chartjs/chartjs-plugin-datalabels/issues/85


    var screen = window.screen;

    if (screen) {
      return (screen.deviceXDPI || 1) / (screen.logicalXDPI || 1);
    }
  }

  return 1;
}();

var utils = {
  // @todo move this in Chart.helpers.toTextLines
  toTextLines: function (inputs) {
    var lines = [];
    var input;
    inputs = [].concat(inputs);

    while (inputs.length) {
      input = inputs.pop();

      if (typeof input === 'string') {
        lines.unshift.apply(lines, input.split('\n'));
      } else if (Array.isArray(input)) {
        inputs.push.apply(inputs, input);
      } else if (!(0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef)(inputs)) {
        lines.unshift('' + input);
      }
    }

    return lines;
  },
  // @todo move this in Chart.helpers.canvas.textSize
  // @todo cache calls of measureText if font doesn't change?!
  textSize: function (ctx, lines, font) {
    var items = [].concat(lines);
    var ilen = items.length;
    var prev = ctx.font;
    var width = 0;
    var i;
    ctx.font = font.string;

    for (i = 0; i < ilen; ++i) {
      width = Math.max(ctx.measureText(items[i]).width, width);
    }

    ctx.font = prev;
    return {
      height: ilen * font.lineHeight,
      width: width
    };
  },

  /**
   * Returns value bounded by min and max. This is equivalent to max(min, min(value, max)).
   * @todo move this method in Chart.helpers.bound
   * https://doc.qt.io/qt-5/qtglobal.html#qBound
   */
  bound: function (min, value, max) {
    return Math.max(min, Math.min(value, max));
  },

  /**
   * Returns an array of pair [value, state] where state is:
   * * -1: value is only in a0 (removed)
   * *  1: value is only in a1 (added)
   */
  arrayDiff: function (a0, a1) {
    var prev = a0.slice();
    var updates = [];
    var i, j, ilen, v;

    for (i = 0, ilen = a1.length; i < ilen; ++i) {
      v = a1[i];
      j = prev.indexOf(v);

      if (j === -1) {
        updates.push([v, 1]);
      } else {
        prev.splice(j, 1);
      }
    }

    for (i = 0, ilen = prev.length; i < ilen; ++i) {
      updates.push([prev[i], -1]);
    }

    return updates;
  },

  /**
   * https://github.com/chartjs/chartjs-plugin-datalabels/issues/70
   */
  rasterize: function (v) {
    return Math.round(v * devicePixelRatio) / devicePixelRatio;
  }
};

function orient(point, origin) {
  var x0 = origin.x;
  var y0 = origin.y;

  if (x0 === null) {
    return {
      x: 0,
      y: -1
    };
  }

  if (y0 === null) {
    return {
      x: 1,
      y: 0
    };
  }

  var dx = point.x - x0;
  var dy = point.y - y0;
  var ln = Math.sqrt(dx * dx + dy * dy);
  return {
    x: ln ? dx / ln : 0,
    y: ln ? dy / ln : -1
  };
}

function aligned(x, y, vx, vy, align) {
  switch (align) {
    case 'center':
      vx = vy = 0;
      break;

    case 'bottom':
      vx = 0;
      vy = 1;
      break;

    case 'right':
      vx = 1;
      vy = 0;
      break;

    case 'left':
      vx = -1;
      vy = 0;
      break;

    case 'top':
      vx = 0;
      vy = -1;
      break;

    case 'start':
      vx = -vx;
      vy = -vy;
      break;

    case 'end':
      // keep natural orientation
      break;

    default:
      // clockwise rotation (in degree)
      align *= Math.PI / 180;
      vx = Math.cos(align);
      vy = Math.sin(align);
      break;
  }

  return {
    x: x,
    y: y,
    vx: vx,
    vy: vy
  };
} // Line clipping (Cohen–Sutherland algorithm)
// https://en.wikipedia.org/wiki/Cohen–Sutherland_algorithm


var R_INSIDE = 0;
var R_LEFT = 1;
var R_RIGHT = 2;
var R_BOTTOM = 4;
var R_TOP = 8;

function region(x, y, rect) {
  var res = R_INSIDE;

  if (x < rect.left) {
    res |= R_LEFT;
  } else if (x > rect.right) {
    res |= R_RIGHT;
  }

  if (y < rect.top) {
    res |= R_TOP;
  } else if (y > rect.bottom) {
    res |= R_BOTTOM;
  }

  return res;
}

function clipped(segment, area) {
  var x0 = segment.x0;
  var y0 = segment.y0;
  var x1 = segment.x1;
  var y1 = segment.y1;
  var r0 = region(x0, y0, area);
  var r1 = region(x1, y1, area);
  var r, x, y; // eslint-disable-next-line no-constant-condition

  while (true) {
    if (!(r0 | r1) || r0 & r1) {
      // both points inside or on the same side: no clipping
      break;
    } // at least one point is outside


    r = r0 || r1;

    if (r & R_TOP) {
      x = x0 + (x1 - x0) * (area.top - y0) / (y1 - y0);
      y = area.top;
    } else if (r & R_BOTTOM) {
      x = x0 + (x1 - x0) * (area.bottom - y0) / (y1 - y0);
      y = area.bottom;
    } else if (r & R_RIGHT) {
      y = y0 + (y1 - y0) * (area.right - x0) / (x1 - x0);
      x = area.right;
    } else if (r & R_LEFT) {
      y = y0 + (y1 - y0) * (area.left - x0) / (x1 - x0);
      x = area.left;
    }

    if (r === r0) {
      x0 = x;
      y0 = y;
      r0 = region(x0, y0, area);
    } else {
      x1 = x;
      y1 = y;
      r1 = region(x1, y1, area);
    }
  }

  return {
    x0: x0,
    x1: x1,
    y0: y0,
    y1: y1
  };
}

function compute$1(range, config) {
  var anchor = config.anchor;
  var segment = range;
  var x, y;

  if (config.clamp) {
    segment = clipped(segment, config.area);
  }

  if (anchor === 'start') {
    x = segment.x0;
    y = segment.y0;
  } else if (anchor === 'end') {
    x = segment.x1;
    y = segment.y1;
  } else {
    x = (segment.x0 + segment.x1) / 2;
    y = (segment.y0 + segment.y1) / 2;
  }

  return aligned(x, y, range.vx, range.vy, config.align);
}

var positioners = {
  arc: function (el, config) {
    var angle = (el.startAngle + el.endAngle) / 2;
    var vx = Math.cos(angle);
    var vy = Math.sin(angle);
    var r0 = el.innerRadius;
    var r1 = el.outerRadius;
    return compute$1({
      x0: el.x + vx * r0,
      y0: el.y + vy * r0,
      x1: el.x + vx * r1,
      y1: el.y + vy * r1,
      vx: vx,
      vy: vy
    }, config);
  },
  point: function (el, config) {
    var v = orient(el, config.origin);
    var rx = v.x * el.options.radius;
    var ry = v.y * el.options.radius;
    return compute$1({
      x0: el.x - rx,
      y0: el.y - ry,
      x1: el.x + rx,
      y1: el.y + ry,
      vx: v.x,
      vy: v.y
    }, config);
  },
  bar: function (el, config) {
    var v = orient(el, config.origin);
    var x = el.x;
    var y = el.y;
    var sx = 0;
    var sy = 0;

    if (el.horizontal) {
      x = Math.min(el.x, el.base);
      sx = Math.abs(el.base - el.x);
    } else {
      y = Math.min(el.y, el.base);
      sy = Math.abs(el.base - el.y);
    }

    return compute$1({
      x0: x,
      y0: y + sy,
      x1: x + sx,
      y1: y,
      vx: v.x,
      vy: v.y
    }, config);
  },
  fallback: function (el, config) {
    var v = orient(el, config.origin);
    return compute$1({
      x0: el.x,
      y0: el.y,
      x1: el.x + (el.width || 0),
      y1: el.y + (el.height || 0),
      vx: v.x,
      vy: v.y
    }, config);
  }
};
var rasterize = utils.rasterize;

function boundingRects(model) {
  var borderWidth = model.borderWidth || 0;
  var padding = model.padding;
  var th = model.size.height;
  var tw = model.size.width;
  var tx = -tw / 2;
  var ty = -th / 2;
  return {
    frame: {
      x: tx - padding.left - borderWidth,
      y: ty - padding.top - borderWidth,
      w: tw + padding.width + borderWidth * 2,
      h: th + padding.height + borderWidth * 2
    },
    text: {
      x: tx,
      y: ty,
      w: tw,
      h: th
    }
  };
}

function getScaleOrigin(el, context) {
  var scale = context.chart.getDatasetMeta(context.datasetIndex).vScale;

  if (!scale) {
    return null;
  }

  if (scale.xCenter !== undefined && scale.yCenter !== undefined) {
    return {
      x: scale.xCenter,
      y: scale.yCenter
    };
  }

  var pixel = scale.getBasePixel();
  return el.horizontal ? {
    x: pixel,
    y: null
  } : {
    x: null,
    y: pixel
  };
}

function getPositioner(el) {
  if (el instanceof chart_js__WEBPACK_IMPORTED_MODULE_1__.ArcElement) {
    return positioners.arc;
  }

  if (el instanceof chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement) {
    return positioners.point;
  }

  if (el instanceof chart_js__WEBPACK_IMPORTED_MODULE_1__.BarElement) {
    return positioners.bar;
  }

  return positioners.fallback;
}

function drawRoundedRect(ctx, x, y, w, h, radius) {
  var HALF_PI = Math.PI / 2;

  if (radius) {
    var r = Math.min(radius, h / 2, w / 2);
    var left = x + r;
    var top = y + r;
    var right = x + w - r;
    var bottom = y + h - r;
    ctx.moveTo(x, top);

    if (left < right && top < bottom) {
      ctx.arc(left, top, r, -Math.PI, -HALF_PI);
      ctx.arc(right, top, r, -HALF_PI, 0);
      ctx.arc(right, bottom, r, 0, HALF_PI);
      ctx.arc(left, bottom, r, HALF_PI, Math.PI);
    } else if (left < right) {
      ctx.moveTo(left, y);
      ctx.arc(right, top, r, -HALF_PI, HALF_PI);
      ctx.arc(left, top, r, HALF_PI, Math.PI + HALF_PI);
    } else if (top < bottom) {
      ctx.arc(left, top, r, -Math.PI, 0);
      ctx.arc(left, bottom, r, 0, Math.PI);
    } else {
      ctx.arc(left, top, r, -Math.PI, Math.PI);
    }

    ctx.closePath();
    ctx.moveTo(x, y);
  } else {
    ctx.rect(x, y, w, h);
  }
}

function drawFrame(ctx, rect, model) {
  var bgColor = model.backgroundColor;
  var borderColor = model.borderColor;
  var borderWidth = model.borderWidth;

  if (!bgColor && (!borderColor || !borderWidth)) {
    return;
  }

  ctx.beginPath();
  drawRoundedRect(ctx, rasterize(rect.x) + borderWidth / 2, rasterize(rect.y) + borderWidth / 2, rasterize(rect.w) - borderWidth, rasterize(rect.h) - borderWidth, model.borderRadius);
  ctx.closePath();

  if (bgColor) {
    ctx.fillStyle = bgColor;
    ctx.fill();
  }

  if (borderColor && borderWidth) {
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.lineJoin = 'miter';
    ctx.stroke();
  }
}

function textGeometry(rect, align, font) {
  var h = font.lineHeight;
  var w = rect.w;
  var x = rect.x;
  var y = rect.y + h / 2;

  if (align === 'center') {
    x += w / 2;
  } else if (align === 'end' || align === 'right') {
    x += w;
  }

  return {
    h: h,
    w: w,
    x: x,
    y: y
  };
}

function drawTextLine(ctx, text, cfg) {
  var shadow = ctx.shadowBlur;
  var stroked = cfg.stroked;
  var x = rasterize(cfg.x);
  var y = rasterize(cfg.y);
  var w = rasterize(cfg.w);

  if (stroked) {
    ctx.strokeText(text, x, y, w);
  }

  if (cfg.filled) {
    if (shadow && stroked) {
      // Prevent drawing shadow on both the text stroke and fill, so
      // if the text is stroked, remove the shadow for the text fill.
      ctx.shadowBlur = 0;
    }

    ctx.fillText(text, x, y, w);

    if (shadow && stroked) {
      ctx.shadowBlur = shadow;
    }
  }
}

function drawText(ctx, lines, rect, model) {
  var align = model.textAlign;
  var color = model.color;
  var filled = !!color;
  var font = model.font;
  var ilen = lines.length;
  var strokeColor = model.textStrokeColor;
  var strokeWidth = model.textStrokeWidth;
  var stroked = strokeColor && strokeWidth;
  var i;

  if (!ilen || !filled && !stroked) {
    return;
  } // Adjust coordinates based on text alignment and line height


  rect = textGeometry(rect, align, font);
  ctx.font = font.string;
  ctx.textAlign = align;
  ctx.textBaseline = 'middle';
  ctx.shadowBlur = model.textShadowBlur;
  ctx.shadowColor = model.textShadowColor;

  if (filled) {
    ctx.fillStyle = color;
  }

  if (stroked) {
    ctx.lineJoin = 'round';
    ctx.lineWidth = strokeWidth;
    ctx.strokeStyle = strokeColor;
  }

  for (i = 0, ilen = lines.length; i < ilen; ++i) {
    drawTextLine(ctx, lines[i], {
      stroked: stroked,
      filled: filled,
      w: rect.w,
      x: rect.x,
      y: rect.y + rect.h * i
    });
  }
}

var Label = function (config, ctx, el, index) {
  var me = this;
  me._config = config;
  me._index = index;
  me._model = null;
  me._rects = null;
  me._ctx = ctx;
  me._el = el;
};

(0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.merge)(Label.prototype, {
  /**
   * @private
   */
  _modelize: function (display, lines, config, context) {
    var me = this;
    var index = me._index;
    var font = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.toFont)((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.font, {}], context, index));
    var color = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.color, chart_js__WEBPACK_IMPORTED_MODULE_2__.d.color], context, index);
    return {
      align: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.align, 'center'], context, index),
      anchor: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.anchor, 'center'], context, index),
      area: context.chart.chartArea,
      backgroundColor: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.backgroundColor, null], context, index),
      borderColor: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.borderColor, null], context, index),
      borderRadius: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.borderRadius, 0], context, index),
      borderWidth: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.borderWidth, 0], context, index),
      clamp: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.clamp, false], context, index),
      clip: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.clip, false], context, index),
      color: color,
      display: display,
      font: font,
      lines: lines,
      offset: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.offset, 4], context, index),
      opacity: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.opacity, 1], context, index),
      origin: getScaleOrigin(me._el, context),
      padding: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.toPadding)((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.padding, 4], context, index)),
      positioner: getPositioner(me._el),
      rotation: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.rotation, 0], context, index) * (Math.PI / 180),
      size: utils.textSize(me._ctx, lines, font),
      textAlign: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.textAlign, 'start'], context, index),
      textShadowBlur: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.textShadowBlur, 0], context, index),
      textShadowColor: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.textShadowColor, color], context, index),
      textStrokeColor: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.textStrokeColor, color], context, index),
      textStrokeWidth: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.textStrokeWidth, 0], context, index)
    };
  },
  update: function (context) {
    var me = this;
    var model = null;
    var rects = null;
    var index = me._index;
    var config = me._config;
    var value, label, lines; // We first resolve the display option (separately) to avoid computing
    // other options in case the label is hidden (i.e. display: false).

    var display = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.display, true], context, index);

    if (display) {
      value = context.dataset.data[index];
      label = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.valueOrDefault)((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.callback)(config.formatter, [value, context]), value);
      lines = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef)(label) ? [] : utils.toTextLines(label);

      if (lines.length) {
        model = me._modelize(display, lines, config, context);
        rects = boundingRects(model);
      }
    }

    me._model = model;
    me._rects = rects;
  },
  geometry: function () {
    return this._rects ? this._rects.frame : {};
  },
  rotation: function () {
    return this._model ? this._model.rotation : 0;
  },
  visible: function () {
    return this._model && this._model.opacity;
  },
  model: function () {
    return this._model;
  },
  draw: function (chart, center) {
    var me = this;
    var ctx = chart.ctx;
    var model = me._model;
    var rects = me._rects;
    var area;

    if (!this.visible()) {
      return;
    }

    ctx.save();

    if (model.clip) {
      area = model.area;
      ctx.beginPath();
      ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
      ctx.clip();
    }

    ctx.globalAlpha = utils.bound(0, model.opacity, 1);
    ctx.translate(rasterize(center.x), rasterize(center.y));
    ctx.rotate(model.rotation);
    drawFrame(ctx, rects.frame, model);
    drawText(ctx, model.lines, rects.text, model);
    ctx.restore();
  }
});
var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991; // eslint-disable-line es/no-number-minsafeinteger

var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991; // eslint-disable-line es/no-number-maxsafeinteger

function rotated(point, center, angle) {
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);
  var cx = center.x;
  var cy = center.y;
  return {
    x: cx + cos * (point.x - cx) - sin * (point.y - cy),
    y: cy + sin * (point.x - cx) + cos * (point.y - cy)
  };
}

function projected(points, axis) {
  var min = MAX_INTEGER;
  var max = MIN_INTEGER;
  var origin = axis.origin;
  var i, pt, vx, vy, dp;

  for (i = 0; i < points.length; ++i) {
    pt = points[i];
    vx = pt.x - origin.x;
    vy = pt.y - origin.y;
    dp = axis.vx * vx + axis.vy * vy;
    min = Math.min(min, dp);
    max = Math.max(max, dp);
  }

  return {
    min: min,
    max: max
  };
}

function toAxis(p0, p1) {
  var vx = p1.x - p0.x;
  var vy = p1.y - p0.y;
  var ln = Math.sqrt(vx * vx + vy * vy);
  return {
    vx: (p1.x - p0.x) / ln,
    vy: (p1.y - p0.y) / ln,
    origin: p0,
    ln: ln
  };
}

var HitBox = function () {
  this._rotation = 0;
  this._rect = {
    x: 0,
    y: 0,
    w: 0,
    h: 0
  };
};

(0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.merge)(HitBox.prototype, {
  center: function () {
    var r = this._rect;
    return {
      x: r.x + r.w / 2,
      y: r.y + r.h / 2
    };
  },
  update: function (center, rect, rotation) {
    this._rotation = rotation;
    this._rect = {
      x: rect.x + center.x,
      y: rect.y + center.y,
      w: rect.w,
      h: rect.h
    };
  },
  contains: function (point) {
    var me = this;
    var margin = 1;
    var rect = me._rect;
    point = rotated(point, me.center(), -me._rotation);
    return !(point.x < rect.x - margin || point.y < rect.y - margin || point.x > rect.x + rect.w + margin * 2 || point.y > rect.y + rect.h + margin * 2);
  },
  // Separating Axis Theorem
  // https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
  intersects: function (other) {
    var r0 = this._points();

    var r1 = other._points();

    var axes = [toAxis(r0[0], r0[1]), toAxis(r0[0], r0[3])];
    var i, pr0, pr1;

    if (this._rotation !== other._rotation) {
      // Only separate with r1 axis if the rotation is different,
      // else it's enough to separate r0 and r1 with r0 axis only!
      axes.push(toAxis(r1[0], r1[1]), toAxis(r1[0], r1[3]));
    }

    for (i = 0; i < axes.length; ++i) {
      pr0 = projected(r0, axes[i]);
      pr1 = projected(r1, axes[i]);

      if (pr0.max < pr1.min || pr1.max < pr0.min) {
        return false;
      }
    }

    return true;
  },

  /**
   * @private
   */
  _points: function () {
    var me = this;
    var rect = me._rect;
    var angle = me._rotation;
    var center = me.center();
    return [rotated({
      x: rect.x,
      y: rect.y
    }, center, angle), rotated({
      x: rect.x + rect.w,
      y: rect.y
    }, center, angle), rotated({
      x: rect.x + rect.w,
      y: rect.y + rect.h
    }, center, angle), rotated({
      x: rect.x,
      y: rect.y + rect.h
    }, center, angle)];
  }
});

function coordinates(el, model, geometry) {
  var point = model.positioner(el, model);
  var vx = point.vx;
  var vy = point.vy;

  if (!vx && !vy) {
    // if aligned center, we don't want to offset the center point
    return {
      x: point.x,
      y: point.y
    };
  }

  var w = geometry.w;
  var h = geometry.h; // take in account the label rotation

  var rotation = model.rotation;
  var dx = Math.abs(w / 2 * Math.cos(rotation)) + Math.abs(h / 2 * Math.sin(rotation));
  var dy = Math.abs(w / 2 * Math.sin(rotation)) + Math.abs(h / 2 * Math.cos(rotation)); // scale the unit vector (vx, vy) to get at least dx or dy equal to
  // w or h respectively (else we would calculate the distance to the
  // ellipse inscribed in the bounding rect)

  var vs = 1 / Math.max(Math.abs(vx), Math.abs(vy));
  dx *= vx * vs;
  dy *= vy * vs; // finally, include the explicit offset

  dx += model.offset * vx;
  dy += model.offset * vy;
  return {
    x: point.x + dx,
    y: point.y + dy
  };
}

function collide(labels, collider) {
  var i, j, s0, s1; // IMPORTANT Iterate in the reverse order since items at the end of the
  // list have an higher weight/priority and thus should be less impacted
  // by the overlapping strategy.

  for (i = labels.length - 1; i >= 0; --i) {
    s0 = labels[i].$layout;

    for (j = i - 1; j >= 0 && s0._visible; --j) {
      s1 = labels[j].$layout;

      if (s1._visible && s0._box.intersects(s1._box)) {
        collider(s0, s1);
      }
    }
  }

  return labels;
}

function compute(labels) {
  var i, ilen, label, state, geometry, center, proxy; // Initialize labels for overlap detection

  for (i = 0, ilen = labels.length; i < ilen; ++i) {
    label = labels[i];
    state = label.$layout;

    if (state._visible) {
      // Chart.js 3 removed el._model in favor of getProps(), making harder to
      // abstract reading values in positioners. Also, using string arrays to
      // read values (i.e. var {a,b,c} = el.getProps(["a","b","c"])) would make
      // positioners inefficient in the normal case (i.e. not the final values)
      // and the code a bit ugly, so let's use a Proxy instead.
      proxy = new Proxy(label._el, {
        get: (el, p) => el.getProps([p], true)[p]
      });
      geometry = label.geometry();
      center = coordinates(proxy, label.model(), geometry);

      state._box.update(center, geometry, label.rotation());
    }
  } // Auto hide overlapping labels


  return collide(labels, function (s0, s1) {
    var h0 = s0._hidable;
    var h1 = s1._hidable;

    if (h0 && h1 || h1) {
      s1._visible = false;
    } else if (h0) {
      s0._visible = false;
    }
  });
}

var layout = {
  prepare: function (datasets) {
    var labels = [];
    var i, j, ilen, jlen, label;

    for (i = 0, ilen = datasets.length; i < ilen; ++i) {
      for (j = 0, jlen = datasets[i].length; j < jlen; ++j) {
        label = datasets[i][j];
        labels.push(label);
        label.$layout = {
          _box: new HitBox(),
          _hidable: false,
          _visible: true,
          _set: i,
          _idx: label._index
        };
      }
    } // TODO New `z` option: labels with a higher z-index are drawn
    // of top of the ones with a lower index. Lowest z-index labels
    // are also discarded first when hiding overlapping labels.


    labels.sort(function (a, b) {
      var sa = a.$layout;
      var sb = b.$layout;
      return sa._idx === sb._idx ? sb._set - sa._set : sb._idx - sa._idx;
    });
    this.update(labels);
    return labels;
  },
  update: function (labels) {
    var dirty = false;
    var i, ilen, label, model, state;

    for (i = 0, ilen = labels.length; i < ilen; ++i) {
      label = labels[i];
      model = label.model();
      state = label.$layout;
      state._hidable = model && model.display === 'auto';
      state._visible = label.visible();
      dirty |= state._hidable;
    }

    if (dirty) {
      compute(labels);
    }
  },
  lookup: function (labels, point) {
    var i, state; // IMPORTANT Iterate in the reverse order since items at the end of
    // the list have an higher z-index, thus should be picked first.

    for (i = labels.length - 1; i >= 0; --i) {
      state = labels[i].$layout;

      if (state && state._visible && state._box.contains(point)) {
        return labels[i];
      }
    }

    return null;
  },
  draw: function (chart, labels) {
    var i, ilen, label, state, geometry, center;

    for (i = 0, ilen = labels.length; i < ilen; ++i) {
      label = labels[i];
      state = label.$layout;

      if (state._visible) {
        geometry = label.geometry();
        center = coordinates(label._el, label.model(), geometry);

        state._box.update(center, geometry, label.rotation());

        label.draw(chart, center);
      }
    }
  }
};

var formatter = function (value) {
  if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef)(value)) {
    return null;
  }

  var label = value;
  var keys, klen, k;

  if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isObject)(value)) {
    if (!(0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef)(value.label)) {
      label = value.label;
    } else if (!(0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef)(value.r)) {
      label = value.r;
    } else {
      label = '';
      keys = Object.keys(value);

      for (k = 0, klen = keys.length; k < klen; ++k) {
        label += (k !== 0 ? ', ' : '') + keys[k] + ': ' + value[keys[k]];
      }
    }
  }

  return '' + label;
};
/**
 * IMPORTANT: make sure to also update tests and TypeScript definition
 * files (`/test/specs/defaults.spec.js` and `/types/options.d.ts`)
 */


var defaults = {
  align: 'center',
  anchor: 'center',
  backgroundColor: null,
  borderColor: null,
  borderRadius: 0,
  borderWidth: 0,
  clamp: false,
  clip: false,
  color: undefined,
  display: true,
  font: {
    family: undefined,
    lineHeight: 1.2,
    size: undefined,
    style: undefined,
    weight: null
  },
  formatter: formatter,
  labels: undefined,
  listeners: {},
  offset: 4,
  opacity: 1,
  padding: {
    top: 4,
    right: 4,
    bottom: 4,
    left: 4
  },
  rotation: 0,
  textAlign: 'start',
  textStrokeColor: undefined,
  textStrokeWidth: 0,
  textShadowBlur: 0,
  textShadowColor: undefined
};
/**
 * @see https://github.com/chartjs/Chart.js/issues/4176
 */

var EXPANDO_KEY = '$datalabels';
var DEFAULT_KEY = '$default';

function configure(dataset, options) {
  var override = dataset.datalabels;
  var listeners = {};
  var configs = [];
  var labels, keys;

  if (override === false) {
    return null;
  }

  if (override === true) {
    override = {};
  }

  options = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.merge)({}, [options, override]);
  labels = options.labels || {};
  keys = Object.keys(labels);
  delete options.labels;

  if (keys.length) {
    keys.forEach(function (key) {
      if (labels[key]) {
        configs.push((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.merge)({}, [options, labels[key], {
          _key: key
        }]));
      }
    });
  } else {
    // Default label if no "named" label defined.
    configs.push(options);
  } // listeners: {<event-type>: {<label-key>: <fn>}}


  listeners = configs.reduce(function (target, config) {
    (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.each)(config.listeners || {}, function (fn, event) {
      target[event] = target[event] || {};
      target[event][config._key || DEFAULT_KEY] = fn;
    });
    delete config.listeners;
    return target;
  }, {});
  return {
    labels: configs,
    listeners: listeners
  };
}

function dispatchEvent(chart, listeners, label, event) {
  if (!listeners) {
    return;
  }

  var context = label.$context;
  var groups = label.$groups;
  var callback$1;

  if (!listeners[groups._set]) {
    return;
  }

  callback$1 = listeners[groups._set][groups._key];

  if (!callback$1) {
    return;
  }

  if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.callback)(callback$1, [context, event]) === true) {
    // Users are allowed to tweak the given context by injecting values that can be
    // used in scriptable options to display labels differently based on the current
    // event (e.g. highlight an hovered label). That's why we update the label with
    // the output context and schedule a new chart render by setting it dirty.
    chart[EXPANDO_KEY]._dirty = true;
    label.update(context);
  }
}

function dispatchMoveEvents(chart, listeners, previous, label, event) {
  var enter, leave;

  if (!previous && !label) {
    return;
  }

  if (!previous) {
    enter = true;
  } else if (!label) {
    leave = true;
  } else if (previous !== label) {
    leave = enter = true;
  }

  if (leave) {
    dispatchEvent(chart, listeners.leave, previous, event);
  }

  if (enter) {
    dispatchEvent(chart, listeners.enter, label, event);
  }
}

function handleMoveEvents(chart, event) {
  var expando = chart[EXPANDO_KEY];
  var listeners = expando._listeners;
  var previous, label;

  if (!listeners.enter && !listeners.leave) {
    return;
  }

  if (event.type === 'mousemove') {
    label = layout.lookup(expando._labels, event);
  } else if (event.type !== 'mouseout') {
    return;
  }

  previous = expando._hovered;
  expando._hovered = label;
  dispatchMoveEvents(chart, listeners, previous, label, event);
}

function handleClickEvents(chart, event) {
  var expando = chart[EXPANDO_KEY];
  var handlers = expando._listeners.click;
  var label = handlers && layout.lookup(expando._labels, event);

  if (label) {
    dispatchEvent(chart, handlers, label, event);
  }
}

var plugin = {
  id: 'datalabels',
  defaults: defaults,
  beforeInit: function (chart) {
    chart[EXPANDO_KEY] = {
      _actives: []
    };
  },
  beforeUpdate: function (chart) {
    var expando = chart[EXPANDO_KEY];
    expando._listened = false;
    expando._listeners = {}; // {<event-type>: {<dataset-index>: {<label-key>: <fn>}}}

    expando._datasets = []; // per dataset labels: [Label[]]

    expando._labels = []; // layouted labels: Label[]
  },
  afterDatasetUpdate: function (chart, args, options) {
    var datasetIndex = args.index;
    var expando = chart[EXPANDO_KEY];
    var labels = expando._datasets[datasetIndex] = [];
    var visible = chart.isDatasetVisible(datasetIndex);
    var dataset = chart.data.datasets[datasetIndex];
    var config = configure(dataset, options);
    var elements = args.meta.data || [];
    var ctx = chart.ctx;
    var i, j, ilen, jlen, cfg, key, el, label;
    ctx.save();

    for (i = 0, ilen = elements.length; i < ilen; ++i) {
      el = elements[i];
      el[EXPANDO_KEY] = [];

      if (visible && el && chart.getDataVisibility(i) && !el.skip) {
        for (j = 0, jlen = config.labels.length; j < jlen; ++j) {
          cfg = config.labels[j];
          key = cfg._key;
          label = new Label(cfg, ctx, el, i);
          label.$groups = {
            _set: datasetIndex,
            _key: key || DEFAULT_KEY
          };
          label.$context = {
            active: false,
            chart: chart,
            dataIndex: i,
            dataset: dataset,
            datasetIndex: datasetIndex
          };
          label.update(label.$context);
          el[EXPANDO_KEY].push(label);
          labels.push(label);
        }
      }
    }

    ctx.restore(); // Store listeners at the chart level and per event type to optimize
    // cases where no listeners are registered for a specific event.

    (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.merge)(expando._listeners, config.listeners, {
      merger: function (event, target, source) {
        target[event] = target[event] || {};
        target[event][args.index] = source[event];
        expando._listened = true;
      }
    });
  },
  afterUpdate: function (chart) {
    chart[EXPANDO_KEY]._labels = layout.prepare(chart[EXPANDO_KEY]._datasets);
  },
  // Draw labels on top of all dataset elements
  // https://github.com/chartjs/chartjs-plugin-datalabels/issues/29
  // https://github.com/chartjs/chartjs-plugin-datalabels/issues/32
  afterDatasetsDraw: function (chart) {
    layout.draw(chart, chart[EXPANDO_KEY]._labels);
  },
  beforeEvent: function (chart, args) {
    // If there is no listener registered for this chart, `listened` will be false,
    // meaning we can immediately ignore the incoming event and avoid useless extra
    // computation for users who don't implement label interactions.
    if (chart[EXPANDO_KEY]._listened) {
      var event = args.event;

      switch (event.type) {
        case 'mousemove':
        case 'mouseout':
          handleMoveEvents(chart, event);
          break;

        case 'click':
          handleClickEvents(chart, event);
          break;
      }
    }
  },
  afterEvent: function (chart) {
    var expando = chart[EXPANDO_KEY];
    var previous = expando._actives;
    var actives = expando._actives = chart.getActiveElements();
    var updates = utils.arrayDiff(previous, actives);
    var i, ilen, j, jlen, update, label, labels;

    for (i = 0, ilen = updates.length; i < ilen; ++i) {
      update = updates[i];

      if (update[1]) {
        labels = update[0].element[EXPANDO_KEY] || [];

        for (j = 0, jlen = labels.length; j < jlen; ++j) {
          label = labels[j];
          label.$context.active = update[1] === 1;
          label.update(label.$context);
        }
      }
    }

    if (expando._dirty || updates.length) {
      layout.update(expando._labels);
      chart.render();
    }

    delete expando._dirty;
  }
};


/***/ }),

/***/ 18062:
/*!***********************************************!*\
  !*** ./node_modules/chart.js/dist/helpers.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HALF_PI": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   "INFINITY": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b2),
/* harmony export */   "PI": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   "PITAU": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b1),
/* harmony export */   "QUARTER_PI": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b4),
/* harmony export */   "RAD_PER_DEG": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b3),
/* harmony export */   "TAU": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   "TWO_THIRDS_PI": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b5),
/* harmony export */   "_addGrace": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   "_alignPixel": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   "_alignStartEnd": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2),
/* harmony export */   "_angleBetween": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.p),
/* harmony export */   "_angleDiff": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b6),
/* harmony export */   "_arrayUnique": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__._),
/* harmony export */   "_attachContext": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a8),
/* harmony export */   "_bezierCurveTo": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.as),
/* harmony export */   "_bezierInterpolation": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ap),
/* harmony export */   "_boundSegment": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ax),
/* harmony export */   "_boundSegments": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.an),
/* harmony export */   "_capitalize": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a5),
/* harmony export */   "_computeSegments": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.am),
/* harmony export */   "_createResolver": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a9),
/* harmony export */   "_decimalPlaces": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aK),
/* harmony export */   "_deprecated": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aV),
/* harmony export */   "_descriptors": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aa),
/* harmony export */   "_elementsEqual": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ah),
/* harmony export */   "_factorize": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   "_filterBetween": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aO),
/* harmony export */   "_getParentNode": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   "_getStartAndCountOfVisiblePoints": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "_int16Range": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   "_isBetween": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aj),
/* harmony export */   "_isClickEvent": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ai),
/* harmony export */   "_isDomSupported": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   "_isPointInArea": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   "_limitValue": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "_longestText": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aN),
/* harmony export */   "_lookup": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aP),
/* harmony export */   "_lookupByKey": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   "_measureText": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   "_merger": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aT),
/* harmony export */   "_mergerIf": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aU),
/* harmony export */   "_normalizeAngle": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ay),
/* harmony export */   "_parseObjectDataRadialScale": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.y),
/* harmony export */   "_pointInLine": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aq),
/* harmony export */   "_readValueToProps": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ak),
/* harmony export */   "_rlookupByKey": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "_scaleRangesChanged": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   "_setMinAndMaxByKey": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aG),
/* harmony export */   "_splitKey": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aW),
/* harmony export */   "_steppedInterpolation": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ao),
/* harmony export */   "_steppedLineTo": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ar),
/* harmony export */   "_textX": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aB),
/* harmony export */   "_toLeftRightCenter": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a1),
/* harmony export */   "_updateBezierControlPoints": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.al),
/* harmony export */   "addRoundedRectPath": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.au),
/* harmony export */   "almostEquals": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aJ),
/* harmony export */   "almostWhole": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aI),
/* harmony export */   "callback": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q),
/* harmony export */   "clearCanvas": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.af),
/* harmony export */   "clipArea": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   "clone": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aS),
/* harmony export */   "color": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   "createContext": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   "debounce": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ad),
/* harmony export */   "defined": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "distanceBetweenPoints": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aE),
/* harmony export */   "drawPoint": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.at),
/* harmony export */   "drawPointLegend": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aD),
/* harmony export */   "each": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   "easingEffects": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   "finiteOrDefault": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   "fontString": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a$),
/* harmony export */   "formatNumber": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.o),
/* harmony export */   "getAngleFromPoint": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "getHoverColor": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aR),
/* harmony export */   "getMaximumSize": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   "getRelativePosition": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.z),
/* harmony export */   "getRtlAdapter": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.az),
/* harmony export */   "getStyle": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a_),
/* harmony export */   "isArray": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   "isFinite": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   "isFunction": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a7),
/* harmony export */   "isNullOrUndef": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   "isNumber": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x),
/* harmony export */   "isObject": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   "isPatternOrGradient": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aQ),
/* harmony export */   "listenArrayEvents": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   "log10": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aM),
/* harmony export */   "merge": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a4),
/* harmony export */   "mergeIf": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ab),
/* harmony export */   "niceNum": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aH),
/* harmony export */   "noop": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aF),
/* harmony export */   "overrideTextDirection": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aA),
/* harmony export */   "readUsedSize": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   "renderText": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "requestAnimFrame": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   "resolve": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   "resolveObjectKey": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   "restoreTextDirection": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aC),
/* harmony export */   "retinaScale": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ae),
/* harmony export */   "setsEqual": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ag),
/* harmony export */   "sign": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "splineCurve": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aY),
/* harmony export */   "splineCurveMonotone": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aZ),
/* harmony export */   "supportsEventListenerOptions": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   "throttled": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   "toDegrees": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   "toDimension": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.n),
/* harmony export */   "toFont": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0),
/* harmony export */   "toFontString": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aX),
/* harmony export */   "toLineHeight": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b0),
/* harmony export */   "toPadding": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "toPercentage": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "toRadians": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   "toTRBL": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.av),
/* harmony export */   "toTRBLCorners": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aw),
/* harmony export */   "uid": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ac),
/* harmony export */   "unclipArea": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.$),
/* harmony export */   "unlistenArrayEvents": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "valueOrDefault": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)
/* harmony export */ });
/* harmony import */ var _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/helpers.segment.js */ 75848);
/*!
 * Chart.js v4.4.2
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */



/***/ }),

/***/ 25937:
/*!**************************************************!*\
  !*** ./node_modules/chart.js/helpers/helpers.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HALF_PI": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.HALF_PI),
/* harmony export */   "INFINITY": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.INFINITY),
/* harmony export */   "PI": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.PI),
/* harmony export */   "PITAU": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.PITAU),
/* harmony export */   "QUARTER_PI": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.QUARTER_PI),
/* harmony export */   "RAD_PER_DEG": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.RAD_PER_DEG),
/* harmony export */   "TAU": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.TAU),
/* harmony export */   "TWO_THIRDS_PI": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.TWO_THIRDS_PI),
/* harmony export */   "_addGrace": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._addGrace),
/* harmony export */   "_alignPixel": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._alignPixel),
/* harmony export */   "_alignStartEnd": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._alignStartEnd),
/* harmony export */   "_angleBetween": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._angleBetween),
/* harmony export */   "_angleDiff": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._angleDiff),
/* harmony export */   "_arrayUnique": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._arrayUnique),
/* harmony export */   "_attachContext": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._attachContext),
/* harmony export */   "_bezierCurveTo": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._bezierCurveTo),
/* harmony export */   "_bezierInterpolation": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._bezierInterpolation),
/* harmony export */   "_boundSegment": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._boundSegment),
/* harmony export */   "_boundSegments": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._boundSegments),
/* harmony export */   "_capitalize": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._capitalize),
/* harmony export */   "_computeSegments": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._computeSegments),
/* harmony export */   "_createResolver": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._createResolver),
/* harmony export */   "_decimalPlaces": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._decimalPlaces),
/* harmony export */   "_deprecated": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._deprecated),
/* harmony export */   "_descriptors": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._descriptors),
/* harmony export */   "_elementsEqual": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._elementsEqual),
/* harmony export */   "_factorize": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._factorize),
/* harmony export */   "_filterBetween": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._filterBetween),
/* harmony export */   "_getParentNode": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._getParentNode),
/* harmony export */   "_getStartAndCountOfVisiblePoints": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._getStartAndCountOfVisiblePoints),
/* harmony export */   "_int16Range": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._int16Range),
/* harmony export */   "_isBetween": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._isBetween),
/* harmony export */   "_isClickEvent": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._isClickEvent),
/* harmony export */   "_isDomSupported": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._isDomSupported),
/* harmony export */   "_isPointInArea": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._isPointInArea),
/* harmony export */   "_limitValue": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._limitValue),
/* harmony export */   "_longestText": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._longestText),
/* harmony export */   "_lookup": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._lookup),
/* harmony export */   "_lookupByKey": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._lookupByKey),
/* harmony export */   "_measureText": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._measureText),
/* harmony export */   "_merger": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._merger),
/* harmony export */   "_mergerIf": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._mergerIf),
/* harmony export */   "_normalizeAngle": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._normalizeAngle),
/* harmony export */   "_parseObjectDataRadialScale": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._parseObjectDataRadialScale),
/* harmony export */   "_pointInLine": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._pointInLine),
/* harmony export */   "_readValueToProps": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._readValueToProps),
/* harmony export */   "_rlookupByKey": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._rlookupByKey),
/* harmony export */   "_scaleRangesChanged": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._scaleRangesChanged),
/* harmony export */   "_setMinAndMaxByKey": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._setMinAndMaxByKey),
/* harmony export */   "_splitKey": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._splitKey),
/* harmony export */   "_steppedInterpolation": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._steppedInterpolation),
/* harmony export */   "_steppedLineTo": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._steppedLineTo),
/* harmony export */   "_textX": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._textX),
/* harmony export */   "_toLeftRightCenter": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._toLeftRightCenter),
/* harmony export */   "_updateBezierControlPoints": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._updateBezierControlPoints),
/* harmony export */   "addRoundedRectPath": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.addRoundedRectPath),
/* harmony export */   "almostEquals": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.almostEquals),
/* harmony export */   "almostWhole": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.almostWhole),
/* harmony export */   "callback": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.callback),
/* harmony export */   "clearCanvas": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.clearCanvas),
/* harmony export */   "clipArea": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.clipArea),
/* harmony export */   "clone": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.clone),
/* harmony export */   "color": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.color),
/* harmony export */   "createContext": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createContext),
/* harmony export */   "debounce": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.debounce),
/* harmony export */   "defined": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.defined),
/* harmony export */   "distanceBetweenPoints": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.distanceBetweenPoints),
/* harmony export */   "drawPoint": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.drawPoint),
/* harmony export */   "drawPointLegend": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.drawPointLegend),
/* harmony export */   "each": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.each),
/* harmony export */   "easingEffects": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.easingEffects),
/* harmony export */   "finiteOrDefault": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.finiteOrDefault),
/* harmony export */   "fontString": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.fontString),
/* harmony export */   "formatNumber": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.formatNumber),
/* harmony export */   "getAngleFromPoint": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.getAngleFromPoint),
/* harmony export */   "getHoverColor": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.getHoverColor),
/* harmony export */   "getMaximumSize": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.getMaximumSize),
/* harmony export */   "getRelativePosition": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.getRelativePosition),
/* harmony export */   "getRtlAdapter": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.getRtlAdapter),
/* harmony export */   "getStyle": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.getStyle),
/* harmony export */   "isArray": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isArray),
/* harmony export */   "isFinite": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isFinite),
/* harmony export */   "isFunction": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isFunction),
/* harmony export */   "isNullOrUndef": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef),
/* harmony export */   "isNumber": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isNumber),
/* harmony export */   "isObject": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isObject),
/* harmony export */   "isPatternOrGradient": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isPatternOrGradient),
/* harmony export */   "listenArrayEvents": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.listenArrayEvents),
/* harmony export */   "log10": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.log10),
/* harmony export */   "merge": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.merge),
/* harmony export */   "mergeIf": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.mergeIf),
/* harmony export */   "niceNum": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.niceNum),
/* harmony export */   "noop": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.noop),
/* harmony export */   "overrideTextDirection": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.overrideTextDirection),
/* harmony export */   "readUsedSize": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.readUsedSize),
/* harmony export */   "renderText": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.renderText),
/* harmony export */   "requestAnimFrame": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.requestAnimFrame),
/* harmony export */   "resolve": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.resolve),
/* harmony export */   "resolveObjectKey": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.resolveObjectKey),
/* harmony export */   "restoreTextDirection": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.restoreTextDirection),
/* harmony export */   "retinaScale": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.retinaScale),
/* harmony export */   "setsEqual": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setsEqual),
/* harmony export */   "sign": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.sign),
/* harmony export */   "splineCurve": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.splineCurve),
/* harmony export */   "splineCurveMonotone": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.splineCurveMonotone),
/* harmony export */   "supportsEventListenerOptions": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.supportsEventListenerOptions),
/* harmony export */   "throttled": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.throttled),
/* harmony export */   "toDegrees": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toDegrees),
/* harmony export */   "toDimension": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toDimension),
/* harmony export */   "toFont": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toFont),
/* harmony export */   "toFontString": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toFontString),
/* harmony export */   "toLineHeight": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toLineHeight),
/* harmony export */   "toPadding": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toPadding),
/* harmony export */   "toPercentage": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toPercentage),
/* harmony export */   "toRadians": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toRadians),
/* harmony export */   "toTRBL": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toTRBL),
/* harmony export */   "toTRBLCorners": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toTRBLCorners),
/* harmony export */   "uid": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.uid),
/* harmony export */   "unclipArea": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.unclipArea),
/* harmony export */   "unlistenArrayEvents": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.unlistenArrayEvents),
/* harmony export */   "valueOrDefault": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.valueOrDefault)
/* harmony export */ });
/* harmony import */ var _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/helpers.js */ 18062);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_report_report_module_ts.d51c026f93d83a55.js.map