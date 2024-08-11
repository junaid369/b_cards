"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["src_app_pages_admin_admin_module_ts"],{

/***/ 49829:
/*!**********************************************************************!*\
  !*** ./src/app/core/services/internal-team/internal-team.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InternalTeamService": () => (/* binding */ InternalTeamService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 15674);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 17114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.service */ 37983);






class InternalTeamService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_ENDPOINT;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                Authorization: 'bearer ' + localStorage.getItem('token'),
            }),
        };
    }
    getAllAdminModules() {
        return this.http
            .post(this.apiURL + 'admin/get_admin_modules', {}, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    addInternalTeamAdmin(obj) {
        return this.http
            .post(this.apiURL + 'admin/add_admins', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    getAllAdmin(obj) {
        return this.http
            .post(this.apiURL + 'admin/get_all_admins', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    updateInternalTeamAdmin(obj) {
        return this.http
            .post(this.apiURL + 'admin/update_admins', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    deleteInternalTeamAdmin(obj) {
        return this.http
            .post(this.apiURL + 'admin/update_admins', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    updateAdminPassword(obj) {
        return this.http
            .post(this.apiURL + 'admin/update_admin_passwd', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
}
InternalTeamService.ɵfac = function InternalTeamService_Factory(t) { return new (t || InternalTeamService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
InternalTeamService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: InternalTeamService, factory: InternalTeamService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 54225:
/*!***********************************************************!*\
  !*** ./src/app/core/services/pagination/pager.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagerService": () => (/* binding */ PagerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51109);

class PagerService {
    constructor() {
        this.showPagelist = [
            { count: 50 },
            { count: 100 },
            { count: 150 },
            { count: 200 },
        ];
    }
    getPager(totalItems, currentPage = 1, pageSize = 10) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);
        let intSkipCount = 0;
        let startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        /*let pages = _.range(startPage, endPage + 1);*/
        let pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        /* let pages = 5;*/
        // Skip Query value
        if (currentPage !== 1)
            intSkipCount = (currentPage - 1) * pageSize;
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages,
            intSkipCount: intSkipCount,
        };
    }
}
PagerService.ɵfac = function PagerService_Factory(t) { return new (t || PagerService)(); };
PagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PagerService, factory: PagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 37476:
/*!*********************************************!*\
  !*** ./src/app/pages/admin/admin.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InternalTeamModule": () => (/* binding */ InternalTeamModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 80779);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 39929);
/* harmony import */ var src_app_theme_partials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/theme/partials */ 13919);
/* harmony import */ var _create_admin_create_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-admin/create-admin.component */ 83612);
/* harmony import */ var _manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-admin/manage-admin.component */ 6934);
/* harmony import */ var _update_admin_update_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-admin/update-admin.component */ 8295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);













class InternalTeamModule {
}
InternalTeamModule.ɵfac = function InternalTeamModule_Factory(t) { return new (t || InternalTeamModule)(); };
InternalTeamModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: InternalTeamModule });
InternalTeamModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule,
        ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([
            {
                path: '',
                component: _manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_3__.ManageAdminComponent,
            },
            {
                path: 'create',
                component: _create_admin_create_admin_component__WEBPACK_IMPORTED_MODULE_2__.CreateAdminComponent,
            },
            {
                path: 'update/:id',
                component: _update_admin_update_admin_component__WEBPACK_IMPORTED_MODULE_4__.UpdateAdminComponent,
            },
        ]),
        src_app_theme_partials__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](InternalTeamModule, { declarations: [_create_admin_create_admin_component__WEBPACK_IMPORTED_MODULE_2__.CreateAdminComponent,
        _manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_3__.ManageAdminComponent,
        _update_admin_update_admin_component__WEBPACK_IMPORTED_MODULE_4__.UpdateAdminComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule,
        ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, src_app_theme_partials__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule] }); })();


/***/ }),

/***/ 83612:
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/create-admin/create-admin.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAdminComponent": () => (/* binding */ CreateAdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var src_app_core_services_internal_team_internal_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/internal-team/internal-team.service */ 49829);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);









function CreateAdminComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "User required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateAdminComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateAdminComponent_div_13_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.strUserName.errors.required);
} }
function CreateAdminComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone requires");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateAdminComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateAdminComponent_div_19_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.strPhone.errors.required);
} }
function CreateAdminComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateAdminComponent_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email format is wrong. Please type in proper format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateAdminComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateAdminComponent_div_25_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateAdminComponent_div_25_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f.strEmail.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f.strEmail.errors.email);
} }
function CreateAdminComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password requires");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateAdminComponent_div_31_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must be more than 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateAdminComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateAdminComponent_div_31_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateAdminComponent_div_31_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.f.strPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.f.strPassword.errors.minlength);
} }
function CreateAdminComponent_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " User Type is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateAdminComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateAdminComponent_div_43_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.f.strUserType.errors.required);
} }
function CreateAdminComponent_div_49_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Country required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateAdminComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateAdminComponent_div_49_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.f.strCountry.errors.required);
} }
function CreateAdminComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Choose Internal team access module");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function CreateAdminComponent_tr_74_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 44)(2, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CreateAdminComponent_tr_74_div_8_Template_input_change_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const submodule_r18 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.onChangeCheckboxSubModule(submodule_r18._id, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const submodule_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", submodule_r18._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r17.isCheckedSubMod(submodule_r18._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("for", submodule_r18._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](submodule_r18.title);
} }
function CreateAdminComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 31)(3, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CreateAdminComponent_tr_74_Template_input_change_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const module_r16 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.onChangeCheckboxModule(module_r16.fkModuleId, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td")(5, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CreateAdminComponent_tr_74_div_8_Template, 5, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const module_r16 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", module_r16.fkModuleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r7.isCheckedMod(module_r16.fkModuleId));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("for", module_r16.fkModuleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", module_r16.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", module_r16.arrSubModule);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class CreateAdminComponent {
    constructor(formBuilder, http, internalTeamService, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.internalTeamService = internalTeamService;
        this.router = router;
        this.dataUrl = 'assets/data/country.json';
        this.arrCountries = [];
        this.arrAdminModules = [];
        this.arrModules = [];
        this.submitted = false;
        this.myForm = this.formBuilder.group({
            strUserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            strPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            strEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            strPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
            strCountry: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            strUserType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
    }
    ngOnInit() {
        this.getAllAdminModules();
        this.getCountryData();
    }
    get f() {
        return this.myForm.controls;
    }
    getAllAdminModules() {
        this.internalTeamService.getAllAdminModules().subscribe((res) => {
            if (res.success) {
                this.arrAdminModules = res.data;
            }
            else {
                this.arrAdminModules = [];
            }
        });
    }
    getCountryData() {
        this.http.get(this.dataUrl).subscribe((data) => {
            this.arrCountries = data;
        });
    }
    onChangeCheckboxAll(event) {
        if (event.target.checked) {
            this.arrModules = this.arrAdminModules.map((m) => {
                return Object.assign(Object.assign({}, m), { checked: true });
            });
        }
        else {
            this.arrModules = [];
        }
    }
    changeUserType() {
        if (this.myForm.value.strUserType == 1) {
            this.arrModules = this.arrAdminModules.map((m) => {
                return Object.assign(Object.assign({}, m), { checked: true });
            });
        }
    }
    isCheckedAll() {
        return this.arrModules.length === this.arrAdminModules.length;
    }
    isCheckedMod(moduleId) {
        if (this.arrModules.filter((m) => m.fkModuleId === moduleId).length)
            return this.arrModules.filter((m) => m.fkModuleId === moduleId)[0]
                .checked;
    }
    onChangeCheckboxModule(moduleId, event) {
        const mod = this.arrAdminModules.find((m) => m.fkModuleId === moduleId);
        mod.checked = event.target.checked;
        if (event.target.checked) {
            this.arrModules.push(mod);
        }
        else {
            this.arrModules = this.arrModules.filter((m) => m.fkModuleId !== moduleId);
        }
    }
    isCheckedSubMod(subModuleId) {
        var _a;
        for (const module of this.arrModules) {
            const subModule = (_a = module.arrSubModule) === null || _a === void 0 ? void 0 : _a.find((sm) => sm._id === subModuleId);
            if (subModule) {
                return subModule.checked;
            }
        }
        return false;
    }
    onChangeCheckboxSubModule(subModuleId, event) {
        var _a;
        for (const module of this.arrAdminModules) {
            const subModule = (_a = module.arrSubModule) === null || _a === void 0 ? void 0 : _a.find((sm) => sm._id === subModuleId);
            if (subModule) {
                subModule.checked = event.target.checked;
                if (event.target.checked) {
                    if (!this.arrModules.find((m) => m.fkModuleId === module.fkModuleId)) {
                        this.arrModules.push(Object.assign(Object.assign({}, module), { arrSubModule: [subModule] }));
                    }
                    else {
                        const mod = this.arrModules.find((m) => m.fkModuleId === module.fkModuleId);
                        mod.arrSubModule = [...(mod.arrSubModule || []), subModule];
                    }
                }
                else {
                    const mod = this.arrModules.find((m) => m.fkModuleId === module.fkModuleId);
                    if (mod) {
                        mod.arrSubModule = mod.arrSubModule.filter((sm) => sm._id !== subModuleId);
                        if (mod.arrSubModule.length === 0) {
                            this.arrModules = this.arrModules.filter((m) => m.fkModuleId !== module.fkModuleId);
                        }
                    }
                }
            }
        }
    }
    resetForm() {
        this.myForm.reset();
        this.arrModules = [];
        this.submitted = false;
    }
    onSubmit() {
        this.submitted = true;
        if (this.myForm.invalid) {
            return;
        }
        this.arrModules.map((module) => {
            if (module.arrSubModule) {
                module.subModules = module.arrSubModule;
                delete module.arrSubModule;
            }
            return module;
        });
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            strEmail: this.myForm.value.strEmail,
            strName: this.myForm.value.strUserName,
            strPassword: this.myForm.value.strPassword,
            phoneNo: this.myForm.value.strPhone,
            strcountry: this.myForm.value.strCountry,
            strUserType: this.myForm.value.strUserType,
            strStatus: 'N',
            arryModuleDetails: this.arrModules,
        };
        this.internalTeamService.addInternalTeamAdmin(obj).subscribe((res) => {
            if (res.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Success',
                    text: 'You created Admin',
                    icon: 'success',
                }).then((value) => {
                    if (value) {
                        this.myForm.reset();
                        this.arrModules = [];
                        this.submitted = false;
                        this.router.navigate(['/admin']);
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
CreateAdminComponent.ɵfac = function CreateAdminComponent_Factory(t) { return new (t || CreateAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_internal_team_internal_team_service__WEBPACK_IMPORTED_MODULE_1__.InternalTeamService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
CreateAdminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateAdminComponent, selectors: [["app-create-admin"]], decls: 84, vars: 31, consts: [[1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], [1, "card-header", "border-0"], [1, "card-title", "fw-bold", "text-dark"], [1, "card-body", "pt-2"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-3"], ["for", "name"], [1, "required"], ["type", "name", "placeholder", "Username", "id", "name", "formControlName", "strUserName", 1, "form-control", "form-control-solid", 3, "ngClass"], ["class", "text-red-500", 4, "ngIf"], ["for", "Phone"], ["type", "tel", "placeholder", "Phone", "id", "Phone", "formControlName", "strPhone", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "email"], ["type", "email", "placeholder", "Email", "id", "email", "formControlName", "strEmail", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "password"], ["type", "text", "placeholder", "Password", "id", "password", "formControlName", "strPassword", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "user Type"], ["formControlName", "strUserType", "id", "user Type", 1, "form-control", "form-control-solid", 3, "ngClass", "change"], ["value", ""], [3, "value"], ["for", "country"], ["bindLabel", "name", "bindValue", "name", "formControlName", "strCountry", "placeholder", "Choose a country", 3, "items", "ngClass"], [1, "form-group", "col-md-12", "mt-5"], [1, "row"], [1, "col-md-8"], [1, "text-base", "m-0"], [1, "text-sm", "text-gray-500", "mb-1"], ["class", "text-red-500 mb-2", 4, "ngIf"], [1, "table-responsive", "border", "px-3", "rounded"], [1, "table", "table-row-dashed", "table-row-gray-300", "align-middle", "gs-0", "gy-4", "w-full"], [1, "form-check", "form-check-sm", "form-check-custom", "form-check-solid"], ["id", "selectAll", "type", "checkbox", 1, "form-check-input", 3, "checked", "change"], ["for", "selectAll", 1, "ml-2"], [1, "ml-2"], [4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-2", "md:grid-cols-6", "gap-2", "mt-4"], [1, "btn", "btn-light-primary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "text-red-500"], [4, "ngIf"], [1, "text-red-500", "mb-2"], ["type", "checkbox", 1, "form-check-input", 3, "id", "checked", "change"], [1, "ml-2", 3, "for"], [1, "form-check", "form-check-sm", "form-check-custom", "form-check-solid", "mb-2"]], template: function CreateAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Create Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "form", 5)(7, "div", 6)(8, "div")(9, "label", 7)(10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CreateAdminComponent_div_13_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div")(15, "label", 11)(16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CreateAdminComponent_div_19_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div")(21, "label", 13)(22, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CreateAdminComponent_div_25_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div")(27, "label", 15)(28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, CreateAdminComponent_div_31_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div")(33, "label", 17)(34, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " User Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CreateAdminComponent_Template_select_change_36_listener() { return ctx.changeUserType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Choose User Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Sub Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, CreateAdminComponent_div_43_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div")(45, "label", 21)(46, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "ng-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, CreateAdminComponent_div_49_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 23)(51, "div", 24)(52, "div", 25)(53, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Internal team access Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Modules which can");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, CreateAdminComponent_div_57_Template, 3, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 29)(59, "table", 30)(60, "thead")(61, "tr")(62, "th")(63, "div", 31)(64, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CreateAdminComponent_Template_input_change_64_listener($event) { return ctx.onChangeCheckboxAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "th")(66, "label", 33)(67, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "th")(70, "label", 34)(71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Sub Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, CreateAdminComponent_tr_74_Template, 9, 5, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "div")(77, "div")(78, "div")(79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateAdminComponent_Template_button_click_80_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateAdminComponent_Template_button_click_82_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c0, ctx.submitted && ctx.f.strUserName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.strUserName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.f.strPhone.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.strPhone.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c0, ctx.submitted && ctx.f.strEmail.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.strEmail.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c0, ctx.submitted && ctx.f.strPassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.strPassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](27, _c0, ctx.submitted && ctx.f.strUserType.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.strUserType.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.arrCountries)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](29, _c0, ctx.submitted && ctx.f.strCountry.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.strCountry.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.arrModules.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.isCheckedAll());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.arrAdminModules);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1hZG1pbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNaWRkbGUtZWFzdCUyMEhvbGlkYXlzXFxob2xpZGF5cy1jbGllbnRcXHNyY1xcYXBwXFxwYWdlc1xcYWRtaW5cXGNyZWF0ZS1hZG1pblxcY3JlYXRlLWFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6ImNyZWF0ZS1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 6934:
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/manage-admin/manage-admin.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageAdminComponent": () => (/* binding */ ManageAdminComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_internal_team_internal_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/internal-team/internal-team.service */ 49829);
/* harmony import */ var src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/pagination/pager.service */ 54225);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-inline-svg-2 */ 39929);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);







const _c0 = function (a0, a1) { return { "bg-light-success text-success ": a0, "bg-light-info text-info": a1 }; };
const _c1 = function (a1) { return ["/admin/update", a1]; };
function ManageAdminComponent_div_7_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td")(11, "div", 15)(12, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageAdminComponent_div_7_tr_15_Template_a_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const admin_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.deleteAdmin(admin_r5.fkAdminId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const admin_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](admin_r5.strName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](admin_r5.strEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](admin_r5.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](8, _c0, admin_r5.strUserType === 1, admin_r5.strUserType === 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", admin_r5.strUserType === 1 ? "ADMIN" : "SUB ADMIN", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c1, admin_r5.fkAdminId));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inlineSVG", "./assets/media/icons/duotune/art/art005.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inlineSVG", "./assets/media/icons/duotune/general/gen027.svg");
} }
function ManageAdminComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "table", 10)(2, "thead")(3, "tr", 11)(4, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "User Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ManageAdminComponent_div_7_tr_15_Template, 16, 13, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.arrInternal);
} }
function ManageAdminComponent_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 22)(2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function ManageAdminComponent_ng_template_8_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " No Data Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function ManageAdminComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ManageAdminComponent_ng_template_8_ng_container_0_Template, 7, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ManageAdminComponent_ng_template_8_ng_template_1_Template, 5, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.fetchLoading)("ngIfElse", _r9);
} }
const _c2 = function (a0) { return { active: a0 }; };
function ManageAdminComponent_div_10_ul_3_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 39)(1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageAdminComponent_div_10_ul_3_li_4_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const page_r13 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.setPage(page_r13)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const page_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c2, ctx_r12.pager.currentPage === page_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", page_r13, " ");
} }
const _c3 = function (a0) { return { disabled: a0 }; };
function ManageAdminComponent_div_10_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 32)(1, "li", 33)(2, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageAdminComponent_div_10_ul_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.setPage(ctx_r16.pager.currentPage - 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ManageAdminComponent_div_10_ul_3_li_4_Template, 3, 4, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "li", 37)(6, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageAdminComponent_div_10_ul_3_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.setPage(ctx_r18.pager.currentPage + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c3, ctx_r11.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r11.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c3, ctx_r11.pager.currentPage === ctx_r11.pager.totalPages));
} }
function ManageAdminComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ManageAdminComponent_div_10_ul_3_Template, 8, 7, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" Showing ", ctx_r3.getFromCount(), " to ", ctx_r3.getToCount(), " of ", ctx_r3.intTotalCount, " entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.pager.pages && ctx_r3.pager.pages.length);
} }
class ManageAdminComponent {
    constructor(internalTeamService, pageServiceObj) {
        this.internalTeamService = internalTeamService;
        this.pageServiceObj = pageServiceObj;
        this.arrInternal = [];
        // pagination
        this.pager = {};
        this.intTotalCount = 0;
        this.intPageLimit = 50;
        this.intSkipCount = 0;
        this.fetchLoading = false;
    }
    ngOnInit() {
        this.getAllAdmin();
    }
    setPage(page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pageServiceObj.getPager(this.intTotalCount, page, this.intPageLimit);
        this.getAllAdmin();
    }
    getFromCount() {
        return this.intPageLimit * (this.pager.currentPage - 1) + 1;
    }
    getToCount() {
        return (this.intPageLimit * (this.pager.currentPage - 1) + this.arrInternal.length);
    }
    getAllAdmin() {
        let skipCount = this.intSkipCount;
        if (this.pager.intSkipCount) {
            skipCount = this.pager.intSkipCount;
        }
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            intSkipCount: skipCount,
            intPageLimit: this.intPageLimit,
            fkAdminId: '',
            strStatus: '',
            strUserType: '', //1 or 2
        };
        this.fetchLoading = true;
        this.internalTeamService.getAllAdmin(obj).subscribe((res) => {
            this.fetchLoading = false;
            if (res.success) {
                this.arrInternal = res.data;
                this.intTotalCount = res.count;
                this.pager = this.pageServiceObj.getPager(this.intTotalCount, this.pager.currentPage, this.intPageLimit);
            }
            else {
                this.arrInternal = [];
                // alert(res.message);
            }
        });
    }
    deleteAdmin(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
                    fkAdminId: id,
                    strStatus: 'D', //n for approve and p for pending . default its p
                };
                this.internalTeamService
                    .deleteInternalTeamAdmin(obj)
                    .subscribe((res) => {
                    if (res.success) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                            title: 'Deleted!',
                            text: 'Your file has been deleted.',
                            icon: 'success',
                        });
                        this.getAllAdmin();
                    }
                    else {
                        // alert(res.message);
                    }
                });
            }
        });
    }
}
ManageAdminComponent.ɵfac = function ManageAdminComponent_Factory(t) { return new (t || ManageAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_internal_team_internal_team_service__WEBPACK_IMPORTED_MODULE_1__.InternalTeamService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_pagination_pager_service__WEBPACK_IMPORTED_MODULE_2__.PagerService)); };
ManageAdminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ManageAdminComponent, selectors: [["app-manage-admin"]], decls: 11, vars: 3, consts: [[1, "text-right", "mb-3"], ["routerLink", "/admin/create", 1, "btn", "btn-primary", "btn-sm"], [1, "row", "g-5", "g-xl-10"], [1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], [1, "card-body"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noDataTemplate", ""], ["class", "flex justify-center md:justify-between flex-col md:flex-row p-5", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-row-dashed", "table-row-gray-300", "align-middle", "gs-0", "gy-4", "w-full"], [1, "fw-bold", "text-muted"], [1, "min-w-130px"], [4, "ngFor", "ngForOf"], [1, "text-sm", "px-3", "py-2", "rounded", 3, "ngClass"], [1, "d-flex", "justify-content-start", "flex-shrink-0"], [1, "btn", "btn-icon", "bg-light-warning", "btn-active-color-warning", "btn-sm", "me-1", 3, "routerLink"], [1, "svg-icon", "svg-icon-3", "svg-icon-warning", 3, "inlineSVG"], [1, "btn", "btn-icon", "bg-light-danger", "btn-active-color-danger", "btn-sm", 3, "click"], [1, "svg-icon", "svg-icon-3", "svg-icon-danger", 3, "inlineSVG"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "d-flex", "flex-column", "align-items-center"], [1, "text-center", "px-4"], ["src", "./assets/media/illustrations/dozzy-1/5.png", "alt", "", 1, "mw-100", "mh-300px", "animate-pulse"], [1, "fw-bold", "text-xl", "text-gray-600", "text-center", "pt-15"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], ["src", "./assets/media/illustrations/sketchy-1/5.png", "alt", "", 1, "mw-100", "mh-300px"], [1, "fw-bold", "fs-6", "text-gray-600", "text-center", "pt-15"], [1, "flex", "justify-center", "md:justify-between", "flex-col", "md:flex-row", "p-5"], [1, "fs-6", "fw-bold", "text-gray-700", "mb-3", "md:mb-0", "text-center"], ["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "page-item", "previous", 3, "ngClass"], [1, "page-link", "cursor-pointer", 3, "click"], [1, "previous"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next", 3, "ngClass"], [1, "next"], [1, "page-item", 3, "ngClass"]], template: function ManageAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Create Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ManageAdminComponent_div_7_Template, 16, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ManageAdminComponent_ng_template_8_Template, 3, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ManageAdminComponent_div_10_Template, 4, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.arrInternal.length > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.arrInternal.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_3__.InlineSVGDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1hZG1pbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNaWRkbGUtZWFzdCUyMEhvbGlkYXlzXFxob2xpZGF5cy1jbGllbnRcXHNyY1xcYXBwXFxwYWdlc1xcYWRtaW5cXG1hbmFnZS1hZG1pblxcbWFuYWdlLWFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6Im1hbmFnZS1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufSIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ 8295:
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/update-admin/update-admin.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateAdminComponent": () => (/* binding */ UpdateAdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 80779);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var src_app_core_services_internal_team_internal_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/internal-team/internal-team.service */ 49829);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 43923);











function UpdateAdminComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "User required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateAdminComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UpdateAdminComponent_div_13_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.strUserName.errors.required);
} }
function UpdateAdminComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone requires");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateAdminComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UpdateAdminComponent_div_19_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.strPhone.errors.required);
} }
function UpdateAdminComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateAdminComponent_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email format is wrong. Please type in proper format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateAdminComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UpdateAdminComponent_div_25_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UpdateAdminComponent_div_25_div_2_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f.strEmail.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f.strEmail.errors.email);
} }
function UpdateAdminComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " User Type is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateAdminComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UpdateAdminComponent_div_37_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.f.strUserType.errors.required);
} }
function UpdateAdminComponent_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Country required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateAdminComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UpdateAdminComponent_div_43_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.f.strCountry.errors.required);
} }
function UpdateAdminComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Choose Internal team access module");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function UpdateAdminComponent_tr_74_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 45)(2, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UpdateAdminComponent_tr_74_div_8_Template_input_change_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const submodule_r17 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.onChangeCheckboxSubModule(submodule_r17._id, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const submodule_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", submodule_r17._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r16.isCheckedSubMod(submodule_r17._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("for", submodule_r17._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](submodule_r17.title);
} }
function UpdateAdminComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 31)(3, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UpdateAdminComponent_tr_74_Template_input_change_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const module_r15 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.onChangeCheckboxModule(module_r15.fkModuleId, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td")(5, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, UpdateAdminComponent_tr_74_div_8_Template, 5, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const module_r15 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", module_r15.fkModuleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r6.isCheckedMod(module_r15.fkModuleId));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("for", module_r15.fkModuleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", module_r15.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", module_r15.arrSubModule);
} }
function UpdateAdminComponent_ng_template_84_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please Enter a strong Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateAdminComponent_ng_template_84_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " At least 6 character is must in the password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateAdminComponent_ng_template_84_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UpdateAdminComponent_ng_template_84_div_11_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UpdateAdminComponent_ng_template_84_div_11_div_2_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r23.f2.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r23.f2.password.errors.minlength);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function UpdateAdminComponent_ng_template_84_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46)(1, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateAdminComponent_ng_template_84_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const modal_r22 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](modal_r22.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 49)(5, "form", 5)(6, "div")(7, "label", 50)(8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " New Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, UpdateAdminComponent_ng_template_84_div_11_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 52)(13, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateAdminComponent_ng_template_84_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.updatePassword()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r8.myForm2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r8.submitted2 && ctx_r8.f2.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.submitted2 && ctx_r8.f2.password.errors);
} }
class UpdateAdminComponent {
    constructor(formBuilder, http, internalTeamService, activatedRoute, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.internalTeamService = internalTeamService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dataUrl = 'assets/data/country.json';
        this.arrCountries = [];
        this.arrAdminModules = [];
        this.arrModules = [];
        this.internalUser = {};
        this.submitted = false;
        this.submitted2 = false;
        this.adminId = '';
        this.modalService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal);
        this.myForm2 = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
        });
        this.myForm = this.formBuilder.group({
            strUserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            strPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            strEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            strCountry: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            strUserType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
        activatedRoute.params.subscribe((params) => {
            this.adminId = params.id;
        });
    }
    ngOnInit() {
        this.getCountryData();
    }
    get f() {
        return this.myForm.controls;
    }
    get f2() {
        return this.myForm2.controls;
    }
    getAdminById() {
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            fkAdminId: this.adminId,
        };
        this.internalTeamService.getAllAdmin(obj).subscribe((res) => {
            if (res.success) {
                this.internalUser = res.data[0];
                this.getAllAdminModules();
            }
            else {
                this.internalUser = [];
            }
        });
    }
    patchValue(internalUser) {
        this.myForm.patchValue({
            strUserName: internalUser.strName,
            strPhone: internalUser.phone,
            strEmail: internalUser.strEmail,
            strCountry: internalUser.country,
            strUserType: internalUser.strUserType,
        });
        this.changeUserType();
        if (internalUser.arryModuleDetails.length) {
            this.arrModules = this.arrAdminModules.filter((module) => {
                return internalUser.arryModuleDetails.some((detail) => detail.fkModuleId === module.fkModuleId);
            });
            this.arrModules = this.arrModules.map((module) => {
                const moduleDetail = internalUser.arryModuleDetails.find((detail) => detail.fkModuleId === module.fkModuleId);
                // Set the module checked property
                module.checked = true;
                // If the module has subModules, set their checked property based on moduleDetail.subModules
                if (module.arrSubModule && module.arrSubModule.length > 0) {
                    module.arrSubModule = module.arrSubModule.map((subModule) => {
                        subModule.checked = moduleDetail.subModules.includes(subModule._id);
                        return subModule;
                    });
                }
                return module;
            });
        }
    }
    getAllAdminModules() {
        this.internalTeamService.getAllAdminModules().subscribe((res) => {
            if (res.success) {
                this.arrAdminModules = res.data;
                this.patchValue(this.internalUser);
            }
            else {
                this.arrAdminModules = [];
            }
        });
    }
    getCountryData() {
        this.http.get(this.dataUrl).subscribe((data) => {
            this.arrCountries = data;
            this.getAdminById();
        });
    }
    onChangeCheckboxAll(event) {
        if (event.target.checked) {
            this.arrModules = this.arrAdminModules.map((m) => {
                return Object.assign(Object.assign({}, m), { checked: true });
            });
        }
        else {
            this.arrModules = [];
        }
    }
    changeUserType() {
        if (this.myForm.value.strUserType == 1) {
            this.arrModules = this.arrAdminModules.map((m) => {
                return Object.assign(Object.assign({}, m), { checked: true });
            });
        }
    }
    isCheckedAll() {
        return this.arrModules.length === this.arrAdminModules.length;
    }
    isCheckedMod(moduleId) {
        if (this.arrModules.filter((m) => m.fkModuleId === moduleId).length)
            return this.arrModules.filter((m) => m.fkModuleId === moduleId)[0]
                .checked;
    }
    onChangeCheckboxModule(moduleId, event) {
        const mod = this.arrAdminModules.find((m) => m.fkModuleId === moduleId);
        mod.checked = event.target.checked;
        if (event.target.checked) {
            this.arrModules.push(mod);
        }
        else {
            this.arrModules = this.arrModules.filter((m) => m.fkModuleId !== moduleId);
        }
    }
    isCheckedSubMod(subModuleId) {
        var _a;
        for (const module of this.arrModules) {
            const subModule = (_a = module.arrSubModule) === null || _a === void 0 ? void 0 : _a.find((sm) => sm._id === subModuleId);
            if (subModule) {
                return subModule.checked;
            }
        }
        return false;
    }
    onChangeCheckboxSubModule(subModuleId, event) {
        var _a;
        for (const module of this.arrAdminModules) {
            const subModule = (_a = module.arrSubModule) === null || _a === void 0 ? void 0 : _a.find((sm) => sm._id === subModuleId);
            if (subModule) {
                subModule.checked = event.target.checked;
                if (event.target.checked) {
                    if (!this.arrModules.find((m) => m.fkModuleId === module.fkModuleId)) {
                        this.arrModules.push(Object.assign(Object.assign({}, module), { arrSubModule: [subModule] }));
                    }
                    else {
                        const mod = this.arrModules.find((m) => m.fkModuleId === module.fkModuleId);
                        mod.arrSubModule = [...(mod.arrSubModule || []), subModule];
                    }
                }
                else {
                    const mod = this.arrModules.find((m) => m.fkModuleId === module.fkModuleId);
                    if (mod) {
                        mod.arrSubModule = mod.arrSubModule.filter((sm) => sm._id !== subModuleId);
                        if (mod.arrSubModule.length === 0) {
                            this.arrModules = this.arrModules.filter((m) => m.fkModuleId !== module.fkModuleId);
                        }
                    }
                }
            }
        }
    }
    open(content) {
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'md',
        });
    }
    updatePassword() {
        this.submitted2 = true;
        if (this.myForm2.invalid) {
            return;
        }
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            fkAdminId: this.adminId,
            strPassword: this.myForm2.value.password,
        };
        console.log('obj', obj);
        this.internalTeamService.updateAdminPassword(obj).subscribe((res) => {
            if (res.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Success',
                    text: 'Password updated successfully',
                    icon: 'success',
                }).then((value) => {
                    this.modalService.dismissAll();
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
    resetForm() {
        this.myForm.reset();
        this.arrModules = [];
        this.submitted = false;
    }
    onSubmit() {
        this.submitted = true;
        if (this.myForm.invalid) {
            return;
        }
        this.arrModules.map((module) => {
            if (module.arrSubModule) {
                module.subModules = module.arrSubModule;
                delete module.arrSubModule;
            }
            return module;
        });
        const obj = {
            strLoginUserId: localStorage.getItem('userId'),
            fkAdminId: this.adminId,
            strEmail: this.myForm.value.strEmail,
            strName: this.myForm.value.strUserName,
            phoneNo: this.myForm.value.strPhone,
            strcountry: this.myForm.value.strCountry,
            strUserType: this.myForm.value.strUserType,
            strStatus: 'N',
            arryModuleDetails: this.arrModules,
        };
        this.internalTeamService.updateInternalTeamAdmin(obj).subscribe((res) => {
            if (res.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Success',
                    text: 'You updated Admin',
                    icon: 'success',
                }).then((value) => {
                    if (value) {
                        this.myForm.reset();
                        this.arrModules = [];
                        this.submitted = false;
                        this.router.navigate(['/admin']);
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
UpdateAdminComponent.ɵfac = function UpdateAdminComponent_Factory(t) { return new (t || UpdateAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_internal_team_internal_team_service__WEBPACK_IMPORTED_MODULE_1__.InternalTeamService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
UpdateAdminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UpdateAdminComponent, selectors: [["app-update-admin"]], decls: 86, vars: 27, consts: [[1, "col-md-12", "col-lg-12", "md-m-5"], [1, "card"], [1, "card-header", "border-0"], [1, "card-title", "fw-bold", "text-dark"], [1, "card-body", "pt-2"], [3, "formGroup"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-3"], ["for", "name"], [1, "required"], ["type", "name", "placeholder", "Username", "id", "name", "formControlName", "strUserName", 1, "form-control", "form-control-solid", 3, "ngClass"], ["class", "text-red-500", 4, "ngIf"], ["for", "Phone"], ["type", "tel", "placeholder", "Phone", "id", "Phone", "formControlName", "strPhone", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "email"], ["type", "email", "placeholder", "Email", "id", "email", "formControlName", "strEmail", 1, "form-control", "form-control-solid", 3, "ngClass"], ["for", "user Type"], ["formControlName", "strUserType", "id", "user Type", 1, "form-control", "form-control-solid", 3, "ngClass", "change"], ["value", ""], [3, "value"], ["for", "country"], ["bindLabel", "name", "bindValue", "name", "formControlName", "strCountry", "placeholder", "Choose a country", 3, "items", "ngClass"], ["for", ""], [1, "form-control", "form-control-solid", "cursor-pointer", 3, "click"], [1, "form-group", "col-md-12", "mt-5"], [1, "row"], [1, "col-md-8"], [1, "text-base", "m-0"], [1, "text-sm", "text-gray-500", "mb-1"], ["class", "text-red-500 mb-2", 4, "ngIf"], [1, "table-responsive", "border", "px-3", "rounded"], [1, "table", "table-row-dashed", "table-row-gray-300", "align-middle", "gs-0", "gy-4", "w-full"], [1, "form-check", "form-check-sm", "form-check-custom", "form-check-solid"], ["id", "selectAll", "type", "checkbox", 1, "form-check-input", 3, "checked", "change"], ["for", "selectAll", 1, "ml-2"], [1, "ml-2"], [4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-2", "md:grid-cols-6", "gap-2", "mt-4"], [1, "btn", "btn-light-primary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], ["content", ""], [1, "text-red-500"], [4, "ngIf"], [1, "text-red-500", "mb-2"], ["type", "checkbox", 1, "form-check-input", 3, "id", "checked", "change"], [1, "ml-2", 3, "for"], [1, "form-check", "form-check-sm", "form-check-custom", "form-check-solid", "mb-2"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", "overflow-scroll"], ["for", "pass"], ["type", "text", "placeholder", "New Password", "id", "pass", "formControlName", "password", 1, "form-control", "form-control-solid", 3, "ngClass"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function UpdateAdminComponent_Template(rf, ctx) { if (rf & 1) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Update Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "form", 5)(7, "div", 6)(8, "div")(9, "label", 7)(10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, UpdateAdminComponent_div_13_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div")(15, "label", 11)(16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, UpdateAdminComponent_div_19_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div")(21, "label", 13)(22, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, UpdateAdminComponent_div_25_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div")(27, "label", 15)(28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " User Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UpdateAdminComponent_Template_select_change_30_listener() { return ctx.changeUserType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Choose User Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Sub Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, UpdateAdminComponent_div_37_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div")(39, "label", 19)(40, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "ng-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, UpdateAdminComponent_div_43_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div")(45, "label", 21)(46, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateAdminComponent_Template_div_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](85); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.open(_r7)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 23)(51, "div", 24)(52, "div", 25)(53, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Internal team access Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Modules which can");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, UpdateAdminComponent_div_57_Template, 3, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 29)(59, "table", 30)(60, "thead")(61, "tr")(62, "th")(63, "div", 31)(64, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UpdateAdminComponent_Template_input_change_64_listener($event) { return ctx.onChangeCheckboxAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "th")(66, "label", 33)(67, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "th")(70, "label", 34)(71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Sub Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, UpdateAdminComponent_tr_74_Template, 9, 5, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "div")(77, "div")(78, "div")(79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateAdminComponent_Template_button_click_80_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateAdminComponent_Template_button_click_82_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](84, UpdateAdminComponent_ng_template_84_Template, 15, 5, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.strUserName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.strUserName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c0, ctx.submitted && ctx.f.strPhone.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.strPhone.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.f.strEmail.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.strEmail.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c0, ctx.submitted && ctx.f.strUserType.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.strUserType.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.arrCountries)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c0, ctx.submitted && ctx.f.strCountry.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.strCountry.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.arrModules.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.isCheckedAll());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.arrAdminModules);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1hZG1pbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNaWRkbGUtZWFzdCUyMEhvbGlkYXlzXFxob2xpZGF5cy1jbGllbnRcXHNyY1xcYXBwXFxwYWdlc1xcYWRtaW5cXHVwZGF0ZS1hZG1pblxcdXBkYXRlLWFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InVwZGF0ZS1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_admin_module_ts.198293926f719b96.js.map