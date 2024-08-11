"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 74835:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ 15643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/user/user.service */ 27353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 80779);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);







function DashboardComponent_ng_container_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50)(2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function DashboardComponent_ng_container_267_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50)(2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return ["/customer"]; };
const _c1 = function () { return ["/supplier"]; };
const _c2 = function () { return ["/report/receivable-report"]; };
const _c3 = function () { return { status: "ONGOING" }; };
const _c4 = function () { return ["/report/payable-report"]; };
class DashboardComponent {
    constructor(userService) {
        this.userService = userService;
        this.loading = false;
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
        this.tabyTotalAmount = 0;
        this.CredTotalAmount = 0;
        this.recivableTotalAmount = 0;
        this.paybleTotalAmount = 0;
        this.profitTotal = 0;
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
        this.loading = true;
        this.userService.getDashboard(obj).subscribe((res) => {
            this.loading = false;
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
                this.tabyTotalAmount = res.data[0].tabyTotalAmount || 0;
                this.CredTotalAmount = res.data[0].CredTotalAmount || 0;
                this.recivableTotalAmount = res.data[0].recivableTotalAmount || 0;
                this.paybleTotalAmount = res.data[0].paybleTotalAmount || 0;
                this.profitTotal = res.data[0].profitTotal || 0;
                this.customerPendingPayment =
                    this.customerGvCreditPendingAmount + this.customerPendingAmount;
                this.supplierPendingPayment =
                    this.SupplierGvPendingDebitCount + this.supplierPendingAmount;
                this.SupplierTotalAmount = res.data[0].SupplierTotalAmount || 0;
                // this.SupplierVerifyAmount + this.supplierPendingAmount;
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
                this.customerTotalAmount = res.data[0].customerTotalAmount || 0;
                // this.customerVerifedAmount + this.customerPendingAmount;
                this.AllTotalProfitAmount =
                    this.TotalProfitAmount +
                        this.totalCreditPayment -
                        this.totalDebitPayment;
            }
            if (update) {
                this.chart2.data.datasets[0].data = [
                    this.customerVerifedAmount,
                    this.customerPendingAmount,
                ];
                this.chart2.update();
                this.chart3.data.datasets[0].data = [
                    this.SupplierVerifyAmount,
                    this.supplierPendingAmount,
                ];
                this.chart3.update();
            }
            else {
                setTimeout(() => {
                    this.createChart();
                }, 100);
            }
        });
    }
    createChart() {
        this.chart2 = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__.Chart('MyChart2', {
            type: 'doughnut',
            data: {
                labels: ['Verified Amount', 'Pending Amount'],
                datasets: [
                    {
                        data: [this.customerVerifedAmount, this.customerPendingAmount],
                        backgroundColor: ['#13487F', '#BDB5B5'],
                    },
                ],
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        display: false,
                        ticks: {
                            display: false,
                        },
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        display: false,
                        ticks: {
                            display: false,
                        },
                        grid: {
                            display: false,
                        },
                    },
                },
            },
        });
        this.chart3 = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__.Chart('MyChart3', {
            type: 'doughnut',
            data: {
                labels: ['Verified Amount', 'Pending Amount'],
                datasets: [
                    {
                        data: [this.SupplierVerifyAmount, this.supplierPendingAmount],
                        backgroundColor: ['#4C1D95', '#BDB5B5'],
                    },
                ],
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        display: false,
                        ticks: {
                            display: false,
                        },
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        display: false,
                        ticks: {
                            display: false,
                        },
                        grid: {
                            display: false,
                        },
                    },
                },
            },
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 270, vars: 110, consts: [[1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], [1, "card-body"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4", "md:grid-cols-3"], ["for", "fromDate"], [1, ""], ["type", "date", "id", "fromDate", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], ["for", "toDate"], ["type", "date", "id", "toDate", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], [1, "flex", "justify-end", "items-end"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-search"], [1, "flex", "max-md:flex-col", "mt-3", "gap-3"], [1, "flex", "flex-col", "gap-3", "w-3/12", "max-md:w-full"], [1, "flex", "gap-3"], [1, "bg-white", "py-6", "flex", "flex-col", "justify-center", "items-start", "w-full", "rounded", "hover:shadow-md", "transition-all", "cursor-pointer", 3, "routerLink"], [1, "flex", "items-center", "mx-4"], [1, "m-0", "mx-2", "text-2xl", "font-semibold"], [1, "m-0", "mx-4", "text-lg"], [1, "bg-white", "py-6", "flex", "flex-col", "justify-center", "items-start", "w-full", "rounded", "hover:shadow-md", "transition-all", "cursor-pointer"], [1, "bg-white", "py-6", "flex", "flex-col", "justify-center", "items-start", "w-full", "rounded", "hover:shadow-md", "transition-all", "cursor-pointer", "relative"], ["placement", "bottom", "ngbTooltip", "Total Balance amount from all Customers", 1, "bi", "bi-info-circle", "absolute", "right-3", "top-3", "text-black"], [1, "w-10", "rounded-full", "h-10", "bg-green-300", "flex", "justify-center", "items-center"], [1, "bi", "bi-arrow-down-circle-fill", "text-white"], ["placement", "bottom", "ngbTooltip", "Total Balance amount to pay to all Suppliers", 1, "bi", "bi-info-circle", "absolute", "right-3", "top-3", "text-black"], [1, "w-10", "rounded-full", "h-10", "bg-red-300", "flex", "justify-center", "items-center"], [1, "bi", "bi-arrow-up-circle-fill", "text-white"], [1, "flex", "flex-col", "justify-center", "items-center", "bg-green-300", "py-6", "rounded", "hover:shadow-md", "transition-all", "cursor-pointer", "relative"], ["placement", "bottom", "ngbTooltip", "Total Profit Amount from Payment Completed Customers", 1, "bi", "bi-info-circle", "absolute", "right-3", "top-3", "text-black"], [1, "m-0", "mx-2", "text-3xl", "font-bold"], [1, "m-0", "text-xl"], [1, "flex", "flex-col", "justify-center", "items-center", "bg-blue-200", "py-6", "rounded", "hover:shadow-md", "transition-all", "cursor-pointer", "relative"], ["placement", "bottom", "ngbTooltip", "Gross Profit - Expense Debit + Expense Credit - Tabby Service Charge - Credit Card Service Charge", 1, "bi", "bi-info-circle", "absolute", "right-3", "top-3", "text-black"], [1, "w-9/12", "flex", "max-md:flex-col", "gap-3", "max-md:w-full"], [1, "bg-blue-100", "rounded-lg", "p-4", "w-1/2", "max-md:w-full"], [1, "flex", "flex-col"], [1, "m-0", "text-2xl", "text-center", "font-semibold"], [1, "grid", "grid-cols-2", "gap-3", "p-4"], [1, "border", "bg-white", "rounded", "hover:shadow-md", "transition-all", "cursor-pointer", "p-3"], [1, "flex", "items-center"], [1, "m-0", "mx-2", "text-lg", "font-semibold"], [1, "m-0", "font-normal"], [1, "border", "rounded", "hover:shadow-md", "bg-blue-300", "transition-all", "cursor-pointer", "p-3", 3, "routerLink", "queryParams"], [1, "m-0", "text-lg", "font-semibold"], [1, "chart-container", "mt-2", "h-full"], [4, "ngIf"], ["id", "MyChart2", 3, "ngClass"], [1, "bg-purple-100", "rounded-lg", "p-4", "w-1/2", "max-md:w-full"], [1, "border", "rounded", "hover:shadow-md", "bg-purple-300", "transition-all", "cursor-pointer", "p-3", 3, "routerLink", "queryParams"], ["id", "MyChart3", 3, "ngClass"], [1, "flex", "justify-center", "items-center", "gap-3", "flex-col", "h-52", "animate-pulse"], [1, "bg-slate-300", "h-52", "w-52", "rounded-full", "relative"], [1, "absolute", "bg-white", "h-24", "w-24", "inset-0", "my-auto", "mx-auto", "rounded-full"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "label", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " From Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_8_listener($event) { return ctx.fromDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "label", 7)(11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " To Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_13_listener($event) { return ctx.toDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_16_listener() { return ctx.getDashboardData(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "div")(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Total Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 15)(31, "div", 16)(32, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Total Suppliers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div")(38, "div", 14)(39, "div", 19)(40, "div", 16)(41, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Completed Trips");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 19)(47, "div", 16)(48, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Ongoing Trips");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div")(54, "div", 14)(55, "div", 19)(56, "div", 16)(57, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](59, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Expense Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 19)(63, "div", 16)(64, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Expense Debit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div")(70, "div", 14)(71, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 16)(74, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](78, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Received Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, " (From Customer) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 16)(86, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](90, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, " Paid Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " (To Supplier) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 16)(98, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](100, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "h6", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Gross Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 16)(106, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](108, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "h6", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Net Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div")(112, "div", 14)(113, "div", 19)(114, "div", 16)(115, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](117, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Tabby Charge");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 19)(121, "div", 16)(122, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](124, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "Credit Card Charge");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 33)(128, "div", 34)(129, "div", 35)(130, "h3", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 37)(133, "div", 38)(134, "div", 39)(135, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](137, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Processing Payment Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 38)(141, "div", 39)(142, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](144, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Verified Payment Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 38)(148, "div", 39)(149, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](151, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "Customer Total Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 38)(155, "div", 39)(156, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](158, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "Customer Received Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 42)(162, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](164, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "Customer Balance Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 38)(168, "div", 39)(169, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](171, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Customer Refund Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 38)(175, "div", 39)(176, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](178, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "G-Voucher Credit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "div", 38)(182, "div", 39)(183, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](185, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "G-Voucher Debit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 38)(189, "div", 39)(190, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](192, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "Total Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "div", 38)(196, "div", 39)(197, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](199, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, "Total Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](203, DashboardComponent_ng_container_203_Template, 4, 0, "ng-container", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "canvas", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "div", 47)(207, "div", 35)(208, "h3", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "div", 37)(211, "div", 38)(212, "div", 39)(213, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](215, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](217, "Processing Payment Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "div", 38)(219, "div", 39)(220, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](222, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "Verified Payment Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "div", 38)(226, "div", 39)(227, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](229, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, "Supplier Total Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "div", 38)(233, "div", 39)(234, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](235);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](236, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, "Supplier Verified Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "div", 48)(240, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](241);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](242, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](244, "Supplier Pending Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "div", 38)(246, "div", 39)(247, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](248);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](249, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, "Supplier Refund Paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "div", 38)(253, "div", 39)(254, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](256, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, "G-Voucher Credit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "div", 38)(260, "div", 39)(261, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](262);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](263, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](265, "G-Voucher Debit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](267, DashboardComponent_ng_container_267_Template, 4, 0, "ng-container", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "canvas", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](269);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.fromDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.toDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](104, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 44, ctx.TotalCustomerCount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](105, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 46, ctx.TotalSupplierCount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 48, ctx.completedTripCount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 50, ctx.ongoingTripCount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](59, 52, ctx.TotalExpenseCreditAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](66, 54, ctx.TotalExpenseDebitAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](78, 56, ctx.recivableTotalAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](90, 58, ctx.paybleTotalAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](100, 60, ctx.profitTotal), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](108, 62, ctx.profitTotal + ctx.TotalExpenseCreditAmount - ctx.TotalExpenseDebitAmount - ctx.tabyTotalAmount - ctx.CredTotalAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](117, 64, ctx.tabyTotalAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](124, 66, ctx.CredTotalAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](137, 68, ctx.customerPendingCount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](144, 70, ctx.customerVerifyCount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](151, 72, ctx.customerTotalAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](158, 74, ctx.customerVerifedAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](106, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](107, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](164, 76, ctx.customerPendingAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](171, 78, ctx.customerRefundAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](178, 80, ctx.customerGvCreditAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](185, 82, ctx.customerGvDebitAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](192, 84, ctx.TotalCostAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](199, 86, ctx.TotalProfitAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.loading ? "opacity-0 h-0" : "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.chart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](215, 88, ctx.SupplierPendingCount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](222, 90, ctx.supplierVerifyCount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](229, 92, ctx.SupplierTotalAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](236, 94, ctx.SupplierVerifyAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](108, _c4))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](109, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](242, 96, ctx.supplierPendingAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](249, 98, ctx.SupplierRefundAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](256, 100, ctx.SupplierGvCreditAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](263, 102, ctx.SupplierGvDebitAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.loading ? "opacity-0 h-0" : "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.chart3);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n#MyChart[_ngcontent-%COMP%] {\n  max-height: 100px;\n}\n\n#MyChart2[_ngcontent-%COMP%] {\n  max-height: 250px;\n}\n\n#MyChart3[_ngcontent-%COMP%] {\n  max-height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI015Q2hhcnQge1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi8vICNNeUNoYXJ0MiB7XHJcbi8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbi8vIH1cclxuI015Q2hhcnQyIHtcclxuICBtYXgtaGVpZ2h0OiAyNTBweDtcclxufVxyXG4jTXlDaGFydDMge1xyXG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 59412:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 39929);
/* harmony import */ var _theme_partials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/partials */ 13919);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ 74835);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 80779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);











class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltipModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
        ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([
            {
                path: '',
                component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
            },
        ]),
        _theme_partials__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltipModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
        ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _theme_partials__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.fbc42924a664dbbe.js.map