"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["src_app_modules_auth_auth_module_ts"],{

/***/ 27353:
/*!****************************************************!*\
  !*** ./src/app/core/services/user/user.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 15674);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 17114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.service */ 37983);






class UserService {
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
    getDashboard(obj) {
        return this.http
            .post(this.apiURL + 'dashbaord/get_dashboard', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    updatePassword(obj) {
        return this.http
            .post(this.apiURL + 'profile/update_password', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    sentOTP(obj) {
        return this.http
            .post(this.apiURL + 'otp/send_otp_for_reset', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    VerifyOTPResetPassword(obj) {
        return this.http
            .post(this.apiURL + 'otp/verify_otp_and_passwd_reset', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    getPushNotification(obj) {
        return this.http
            .post(this.apiURL + 'user/get_push_nottifications', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    pushStatusChange(obj) {
        return this.http
            .post(this.apiURL + 'user/push_status_change', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    clearAllPush(obj) {
        return this.http
            .post(this.apiURL + 'user/push_clear_all', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 95067:
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ 21047);
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ 86489);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 26118);
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/registration/registration.component */ 47104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);







const routes = [
    {
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
            },
            {
                path: 'login',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
                data: { returnUrl: window.location.pathname },
            },
            {
                path: 'registration',
                component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__.RegistrationComponent,
            },
            {
                path: 'forgot-password',
                component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordComponent,
            },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: '**', redirectTo: 'login', pathMatch: 'full' },
        ],
    },
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 21047:
/*!************************************************!*\
  !*** ./src/app/modules/auth/auth.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 65485);


const _c0 = ["root", ""];
// const BODY_CLASSES = ['bgi-size-cover', 'bgi-position-center', 'bgi-no-repeat'];
class AuthComponent {
    constructor() {
        this.today = new Date();
    }
    ngOnInit() {
        // BODY_CLASSES.forEach((c) => document.body.classList.add(c));
    }
    ngOnDestroy() {
        // BODY_CLASSES.forEach((c) => document.body.classList.remove(c));
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["body", "root", ""]], attrs: _c0, decls: 12, vars: 0, consts: [[1, "d-flex", "flex-column", "flex-lg-row", "flex-column-fluid"], [1, "d-flex", "flex-column", "flex-lg-row-fluid", "w-lg-50", "p-10", "order-2", "order-lg-1"], [1, "d-flex", "flex-center", "flex-column", "flex-lg-row-fluid"], [1, "card", "w-11/12", "p-10"], [1, "d-flex", "flex-center", "flex-wrap", "px-5", "mt-8"], [1, "d-flex", "flex-lg-row-fluid", "w-lg-50", "bgi-size-cover", "bgi-position-center", "order-1", "order-lg-2"], [1, "d-flex", "flex-column", "flex-center", "py-15", "px-5", "px-md-15", "w-100", "bg-gradient-to-br", "from-black", "via-80%", "via-theme-primary/70", "to-theme-primary/50"], [1, "text-white", "fs-2qx", "fw-bolder", "text-center", "mb-7"], ["routerLink", "/", 1, "mb-12"], ["alt", "Logo", "src", "./assets/media/logos/me-logo.jpeg", 1, "h-[100px]", "rounded"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Middle East Holidays ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNaWRkbGUtZWFzdCUyMEhvbGlkYXlzXFxob2xpZGF5cy1jbGllbnRcXHNyY1xcYXBwXFxtb2R1bGVzXFxhdXRoXFxhdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6ImF1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 82146:
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 95067);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ 21047);
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ 86489);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ 26118);
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/registration/registration.component */ 47104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);









class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        // TranslationModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__.RegistrationComponent,
        _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordComponent,
        _auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        // TranslationModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule] }); })();


/***/ }),

/***/ 86489:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/auth/components/forgot-password/forgot-password.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/user/user.service */ 27353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 31619);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);







function ForgotPasswordComponent_ng_container_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15)(2, "div", 16)(3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.errorMessage);
} }
function ForgotPasswordComponent_ng_container_0_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Please wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", "block");
} }
function ForgotPasswordComponent_ng_container_0_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a2) { return { validation: "required", message: "Email is required", control: a2 }; };
const _c1 = function (a2) { return { validation: "email", message: "Email is invalid", control: a2 }; };
const _c2 = function (a2) { return { validation: "minLength", message: "Email should have at least 3 symbols", control: a2 }; };
const _c3 = function (a2) { return { validation: "maxLength", message: "Email should have maximum 360 symbols", control: a2 }; };
function ForgotPasswordComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_ng_container_0_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4)(3, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Forgot Password ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Enter your email to reset your password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ForgotPasswordComponent_ng_container_0_ng_container_11_Template, 5, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](12, 11)(13, 11)(14, 11)(15, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12)(17, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ForgotPasswordComponent_ng_container_0_ng_container_18_Template, 4, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ForgotPasswordComponent_ng_container_0_ng_container_19_Template, 3, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.forgotPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx_r0.forgotPasswordForm.controls["email"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, ctx_r0.forgotPasswordForm.controls["email"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c2, ctx_r0.forgotPasswordForm.controls["email"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c3, ctx_r0.forgotPasswordForm.controls["email"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
} }
function ForgotPasswordComponent_ng_template_1_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15)(2, "div", 16)(3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.errorMessage);
} }
function ForgotPasswordComponent_ng_template_1_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Please wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
const _c4 = function (a2) { return { validation: "required", message: "OTP is required", control: a2 }; };
const _c5 = function (a2) { return { validation: "minLength", message: "OTP can have only 5 numbers", control: a2 }; };
const _c6 = function (a2) { return { validation: "maxLength", message: "OTP can have only 5 numbers", control: a2 }; };
const _c7 = function (a2) { return { validation: "required", message: "Password is required", control: a2 }; };
const _c8 = function (a2) { return { validation: "minLength", message: "Password should have at least 6 symbols", control: a2 }; };
const _c9 = function (a2) { return { validation: "maxLength", message: "Password should have maximum 20 symbols", control: a2 }; };
function ForgotPasswordComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_ng_template_1_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.submitReset()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4)(2, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Reset Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Enter the OTP shared to the email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7)(7, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](10, 11)(11, 11)(12, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7)(14, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](17, 11)(18, 11)(19, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7)(21, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ForgotPasswordComponent_ng_template_1_ng_container_24_Template, 5, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](25, 11)(26, 11)(27, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12)(29, "button", 13)(30, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ForgotPasswordComponent_ng_template_1_ng_container_32_Template, 4, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.resetPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c4, ctx_r2.resetPasswordForm.controls["otp"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c5, ctx_r2.resetPasswordForm.controls["otp"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c6, ctx_r2.resetPasswordForm.controls["otp"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](27, _c7, ctx_r2.resetPasswordForm.controls["newPassword"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](29, _c8, ctx_r2.resetPasswordForm.controls["newPassword"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c9, ctx_r2.resetPasswordForm.controls["newPassword"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.errorMessage !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](33, _c7, ctx_r2.resetPasswordForm.controls["confirmPassword"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](35, _c8, ctx_r2.resetPasswordForm.controls["confirmPassword"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](37, _c9, ctx_r2.resetPasswordForm.controls["confirmPassword"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.loading);
} }
function ForgotPasswordComponent_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15)(2, "div", 16)(3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().message;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r15);
} }
function ForgotPasswordComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ForgotPasswordComponent_ng_template_3_ng_container_0_Template, 5, 1, "ng-container", 10);
} if (rf & 2) {
    const control_r14 = ctx.control;
    const validation_r16 = ctx.validation;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", control_r14.hasError(validation_r16) && (control_r14.dirty || control_r14.touched));
} }
class ForgotPasswordComponent {
    constructor(fb, userService, router, toasterService) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.toasterService = toasterService;
        this.loading = false;
        this.errorMessage = '';
        this.step1 = true;
    }
    ngOnInit() {
        this.initForm();
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.forgotPasswordForm.controls;
    }
    get r() {
        return this.resetPasswordForm.controls;
    }
    initForm() {
        this.forgotPasswordForm = this.fb.group({
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(320),
                ]),
            ],
        });
        this.resetPasswordForm = this.fb.group({
            otp: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(5),
                ]),
            ],
            newPassword: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(20),
                ]),
            ],
            confirmPassword: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(20),
                ]),
            ],
        });
    }
    submit() {
        if (this.forgotPasswordForm.invalid) {
            return;
        }
        const obj = {
            strEmail: this.f.email.value,
        };
        this.loading = true;
        this.userService.sentOTP(obj).subscribe((result) => {
            this.loading = false;
            if (result.success) {
                this.step1 = false;
            }
            else {
                this.step1 = true;
                this.errorMessage = result.message;
            }
        });
    }
    submitReset() {
        if (this.resetPasswordForm.invalid) {
            return;
        }
        if (this.r.newPassword.value !== this.r.confirmPassword.value) {
            this.errorMessage = 'Password and Confirm Password must be same';
            return;
        }
        const obj = {
            strEmail: this.f.email.value,
            strOTP: this.r.otp.value + '',
            strNewPaswd: this.r.newPassword.value,
        };
        this.loading = true;
        this.userService.VerifyOTPResetPassword(obj).subscribe((result) => {
            this.loading = false;
            if (result.success) {
                this.step1 = true;
                this.errorMessage = '';
                this.toasterService.success(result.message);
                this.router.navigate(['/auth/login']);
            }
            else {
                this.step1 = false;
                this.errorMessage = result.message;
            }
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService)); };
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 5, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["formError", ""], ["novalidate", "novalidate", "id", "kt_login_password_reset_form", 1, "form", "w-100", 3, "formGroup", "ngSubmit"], [1, "text-center", "mb-10"], [1, "text-dark", "fw-bolder", "mb-3"], [1, "text-gray-500", "fw-semibold", "fs-6"], [1, "fv-row", "mb-8"], [1, "form-label", "fw-bolder", "text-gray-900", "fs-6"], ["type", "email", "formControlName", "email", "placeholder", "Email", "name", "email", "autocomplete", "on", 1, "form-control", "bg-transparent"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "d-flex", "flex-wrap", "justify-content-center", "pb-lg-0"], ["type", "submit", "id", "kt_password_reset_submit", 1, "btn", "btn-primary", "me-4"], ["routerLink", "/auth/login", "id", "kt_login_password_reset_form_cancel_button", 1, "btn", "btn-light"], [1, "fv-plugins-message-container"], [1, "fv-help-block"], ["role", "alert"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], [1, "indicator-label"], ["type", "number", "formControlName", "otp", "placeholder", "OTP", "name", "otp", 1, "form-control", "bg-transparent"], ["type", "text", "formControlName", "newPassword", "placeholder", "New Password", "name", "New Password", 1, "form-control", "bg-transparent"], ["type", "text", "formControlName", "confirmPassword", "placeholder", "Confirm Password", "name", "Confirm Password", 1, "form-control", "bg-transparent"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ForgotPasswordComponent_ng_container_0_Template, 22, 20, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ForgotPasswordComponent_ng_template_1_Template, 35, 39, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ForgotPasswordComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step1)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWlkZGxlLWVhc3QlMjBIb2xpZGF5c1xcaG9saWRheXMtY2xpZW50XFxzcmNcXGFwcFxcbW9kdWxlc1xcYXV0aFxcY29tcG9uZW50c1xcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURBRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDRUo7RURBSTtJQUNFLFdBQUE7RUNFTjtBQUNGIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5sb2dpbi1mb3JtIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcblxyXG4gICAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgOmhvc3QgLmxvZ2luLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gIH1cbiAgOmhvc3QgLmxvZ2luLWZvcm0gLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 26118:
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/components/login/login.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/authentication/authentication.service */ 42725);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);






function LoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 19);
} }
function LoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 20);
} }
function LoginComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
} }
function LoginComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Please wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", "block");
} }
function LoginComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function LoginComponent_ng_template_30_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25)(2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const message_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().message;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r8, " ");
} }
function LoginComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoginComponent_ng_template_30_ng_container_0_Template, 4, 1, "ng-container", 15);
} if (rf & 2) {
    const control_r7 = ctx.control;
    const validation_r9 = ctx.validation;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", control_r7.hasError(validation_r9) && (control_r7.dirty || control_r7.touched));
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
const _c1 = function (a2) { return { validation: "required", message: "Email is required", control: a2 }; };
const _c2 = function (a2) { return { validation: "email", message: "Email is invalid", control: a2 }; };
const _c3 = function (a2) { return { validation: "minLength", message: "Email should have at least 3 symbols", control: a2 }; };
const _c4 = function (a2) { return { validation: "maxLength", message: "Email should have maximum 360 symbols", control: a2 }; };
const _c5 = function (a2) { return { validation: "required", message: "Password is required", control: a2 }; };
const _c6 = function (a2) { return { validation: "minlength", message: "Password should have at least 3 symbols", control: a2 }; };
const _c7 = function (a2) { return { validation: "maxLength", message: "Password should have maximum 100 symbols", control: a2 }; };
class LoginComponent {
    constructor(fb, authService, route) {
        this.fb = fb;
        this.authService = authService;
        this.route = route;
        this.isShow = false;
    }
    ngOnInit() {
        this.initForm();
        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'.toString()];
        // this.route.queryParams.subscribe((params) => {
        //   this.returnUrl = params.returnUrl || '/';
        //   console.log('returnUrl', this.returnUrl);
        // });
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }
    initForm() {
        this.loginForm = this.fb.group({
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(320),
                ]),
            ],
            password: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(100),
                ]),
            ],
        });
    }
    onSubmit() {
        this.isSubmitted = true;
        this.success = false;
        this.hasError = false;
        if (this.f.invalid) {
            return;
        }
        const obj = {
            strEmail: this.loginForm.value.email,
            strPassword: this.loginForm.value.password,
        };
        this.authService.adminLogin(obj).subscribe((res) => {
            this.loading = false;
            if (res.success) {
                this.success = true;
                localStorage.setItem('userId', res.data.fkAdminId);
                localStorage.setItem('userName', res.data.strName);
                localStorage.setItem('email', this.loginForm.value.email);
                localStorage.setItem('role', res.data.strUserType === 1
                    ? 'a165fccd-2bbe-4391-9ea9-a237b1fb7c82'
                    : 'e5e069e0-1914-4fc9-bd4a-90487fce89ea');
                const modules = res.data.arryModuleDetails;
                localStorage.setItem('modules', JSON.stringify(modules));
                localStorage.setItem('token', res.data.token);
                setTimeout(() => {
                    window.location.href = modules[0].path;
                }, 500);
            }
            else {
                this.hasError = true;
                this.errorMessage = res.message;
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 32, vars: 44, consts: [["novalidate", "novalidate", "id", "kt_login_signin_form", 1, "form", "w-100", 3, "formGroup", "ngSubmit"], [1, "text-center", "mb-11"], [1, "text-dark", "fw-bolder", "mb-3"], [1, "fv-row", "mb-8"], [1, "form-label", "fs-6", "fw-bolder", "text-dark"], ["type", "email", "name", "email", "formControlName", "email", "placeholder", "Email", "autocomplete", "off", 1, "form-control", "bg-transparent", 3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "fv-row", "mb-3"], [1, "form-label", "fw-bolder", "text-dark", "fs-6", "mb-0"], [1, "input-group"], ["name", "password", "placeholder", "Password", "autocomplete", "off", "formControlName", "password", 1, "form-control", "bg-transparent", 3, "type", "ngClass"], [1, "btn", "btn-icon", "btn-clear", "btn-light", 3, "click"], ["class", "bi bi-eye", 4, "ngIf"], ["class", "bi bi-eye-slash", 4, "ngIf"], [1, "d-flex", "flex-stack", "flex-wrap", "gap-3", "fs-base", "fw-semibold", "mb-8"], [4, "ngIf"], [1, "d-grid", "mb-10"], ["type", "submit", "id", "kt_sign_in_submit", 1, "btn", "btn-primary", 3, "disabled"], ["formError", ""], [1, "bi", "bi-eye"], [1, "bi", "bi-eye-slash"], [1, "text-red-600", "text-center", "fw-semibold", "fs-6"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], [1, "indicator-label"], [1, "fv-plugins-message-container"], ["role", "alert", 1, "text-red-500"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](8, 6)(9, 6)(10, 6)(11, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7)(13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_17_listener() { return ctx.isShow = !ctx.isShow; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 1, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 1, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](20, 6)(21, 6)(22, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LoginComponent_ng_container_25_Template, 3, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16)(27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, LoginComponent_ng_container_28_Template, 4, 2, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, LoginComponent_ng_container_29_Template, 3, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, LoginComponent_ng_template_30_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](24, _c0, ctx.isSubmitted && ctx.loginForm.controls["email"].invalid, ctx.success));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](27, _c1, ctx.loginForm.controls["email"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](29, _c2, ctx.loginForm.controls["email"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c3, ctx.loginForm.controls["email"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](33, _c4, ctx.loginForm.controls["email"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.isShow ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](35, _c0, ctx.isSubmitted && ctx.loginForm.controls["password"].invalid, ctx.success));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](38, _c5, ctx.loginForm.controls["password"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](40, _c6, ctx.loginForm.controls["password"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](42, _c7, ctx.loginForm.controls["password"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.success);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNaWRkbGUtZWFzdCUyMEhvbGlkYXlzXFxob2xpZGF5cy1jbGllbnRcXHNyY1xcYXBwXFxtb2R1bGVzXFxhdXRoXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURBRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDRUo7RURBSTtJQUNFLFdBQUE7RUNFTjtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmxvZ2luLWZvcm0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiA0NTBweDtcclxuXHJcbiAgICAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICA6aG9zdCAubG9naW4tZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgfVxuICA6aG9zdCAubG9naW4tZm9ybSAubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ 47104:
/*!********************************************************************************!*\
  !*** ./src/app/modules/auth/components/registration/registration.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _confirm_password_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-password.validator */ 23730);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user.model */ 14278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 37345);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);









function RegistrationComponent_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " 'Passsword' and 'Confirm Password' didn't match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}

function RegistrationComponent_ng_container_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}

function RegistrationComponent_ng_container_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Please wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", "block");
  }
}

function RegistrationComponent_ng_template_73_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 20)(2, "div", 21)(3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const message_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().message;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", message_r6, " ");
  }
}

function RegistrationComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RegistrationComponent_ng_template_73_ng_container_0_Template, 5, 1, "ng-container", 10);
  }

  if (rf & 2) {
    const control_r5 = ctx.control;
    const validation_r7 = ctx.validation;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r5.hasError(validation_r7) && (control_r5.dirty || control_r5.touched));
  }
}

const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};

const _c1 = function (a2) {
  return {
    validation: "required",
    message: "Fullname is required",
    control: a2
  };
};

const _c2 = function (a2) {
  return {
    validation: "minlength",
    message: "Fullname should have at least 3 symbols",
    control: a2
  };
};

const _c3 = function (a2) {
  return {
    validation: "maxLength",
    message: "Fullname should have maximum 100 symbols",
    control: a2
  };
};

const _c4 = function (a2) {
  return {
    validation: "required",
    message: "Email is required",
    control: a2
  };
};

const _c5 = function (a2) {
  return {
    validation: "email",
    message: "Email is invalid",
    control: a2
  };
};

const _c6 = function (a2) {
  return {
    validation: "minlength",
    message: "Email should have at least 3 symbols",
    control: a2
  };
};

const _c7 = function (a2) {
  return {
    validation: "maxLength",
    message: "Email should have maximum 360 symbols",
    control: a2
  };
};

const _c8 = function (a2) {
  return {
    validation: "required",
    message: "Password is required",
    control: a2
  };
};

const _c9 = function (a2) {
  return {
    validation: "minlength",
    message: "Password should have at least 3 symbols",
    control: a2
  };
};

const _c10 = function (a2) {
  return {
    validation: "maxLength",
    message: "Password should have maximum 100 symbols",
    control: a2
  };
};

const _c11 = function (a2) {
  return {
    validation: "required",
    message: "Confirm Password is required",
    control: a2
  };
};

const _c12 = function (a2) {
  return {
    validation: "minlength",
    message: "Confirm Password should have at least 3 symbols",
    control: a2
  };
};

const _c13 = function (a2) {
  return {
    validation: "maxLength",
    message: "Confirm Password should have maximum 100 symbols",
    control: a2
  };
};

class RegistrationComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router; // private fields

    this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

    this.isLoading$ = this.authService.isLoading$; // redirect to home if already logged in

    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.initForm();
  } // convenience getter for easy access to form fields


  get f() {
    return this.registrationForm.controls;
  }

  initForm() {
    this.registrationForm = this.fb.group({
      fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(100)])],
      email: ['qwe@qwe.qwe', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(320) // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
      ])],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(100)])],
      cPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(100)])],
      agree: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])]
    }, {
      validator: _confirm_password_validator__WEBPACK_IMPORTED_MODULE_0__.ConfirmPasswordValidator.MatchPassword
    });
  }

  submit() {
    this.hasError = false;
    const result = {};
    Object.keys(this.f).forEach(key => {
      result[key] = this.f[key].value;
    });
    const newUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__.UserModel();
    newUser.setUser(result); // const registrationSubscr = this.authService
    //   .registration(newUser)
    //   .pipe(first())
    //   .subscribe((user: UserModel) => {
    //     if (user) {
    //       this.router.navigate(['/']);
    //     } else {
    //       this.hasError = true;
    //     }
    //   });
    // this.unsubscribe.push(registrationSubscr);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }

}

RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
  return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};

RegistrationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RegistrationComponent,
  selectors: [["app-registration"]],
  decls: 75,
  vars: 125,
  consts: [["novalidate", "novalidate", "id", "kt_login_signup_form", 1, "form", "w-100", "overflow-x-scroll", 3, "formGroup", "ngSubmit"], [1, "text-center", "mb-11"], [1, "text-dark", "fw-bolder", "mb-3"], [1, "fv-row", "mb-8"], [1, "form-label", "fw-bolder", "text-dark", "fs-6"], ["type", "text", "name", "fullname", "formControlName", "fullname", "placeholder", "Fullname", "autocomplete", "off", 1, "form-control", "bg-transparent", 3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "email", "placeholder", "Email", "name", "email", "formControlName", "email", "autocomplete", "off", 1, "form-control", "bg-transparent", 3, "ngClass"], ["type", "password", "placeholder", "Password", "name", "password", "formControlName", "password", "autocomplete", "off", 1, "form-control", "bg-transparent", 3, "ngClass"], ["type", "password", "placeholder", "Confirm password", "name", "cPassword", "autocomplete", "off", "formControlName", "cPassword", 1, "form-control", "bg-transparent", 3, "ngClass"], [4, "ngIf"], [1, "form-check", "form-check-inline"], ["id", "kt_login_toc_agree", "type", "checkbox", "formControlName", "agree", "name", "agree", 1, "form-check-input"], ["for", "kt_login_toc_agree", 1, "form-check-label", "fw-semibold", "text-gray-700", "fs-base", "ms-1"], ["href", "https://keenthemes.com/metronic/?page=faq", "target", "_blank", 1, "ms-1", "link-primary"], [1, "d-grid", "mb-10"], ["type", "submit", "id", "kt_sign_up_submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "text-gray-500", "text-center", "fw-semibold", "fs-6"], ["routerLink", "/auth/login", 1, "link-primary", "fw-semibold"], ["formError", ""], [1, "fv-plugins-message-container"], [1, "fv-help-block"], [1, "indicator-label"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], ["role", "alert"]],
  template: function RegistrationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_0_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Fullname");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](8, 6)(9, 6)(10, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3)(12, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Fullname");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](15, 6)(16, 6)(17, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 3)(19, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Fullname");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](22, 6)(23, 6)(24, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 3)(26, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Fullname");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](29, 6)(30, 6)(31, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 3)(33, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](36, 6)(37, 6)(38, 6)(39, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 3)(41, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](44, 6)(45, 6)(46, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 3)(48, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Confirm Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](51, 6)(52, 6)(53, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, RegistrationComponent_ng_container_54_Template, 4, 0, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 3)(56, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " I Accept the\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Terms");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 15)(64, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, RegistrationComponent_ng_container_65_Template, 3, 0, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](66, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, RegistrationComponent_ng_container_67_Template, 4, 2, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](68, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " Already have an Account? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, " Sign in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, RegistrationComponent_ng_template_73_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](74);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registrationForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](60, _c0, ctx.registrationForm.controls["fullname"].invalid, ctx.registrationForm.controls["fullname"].valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](63, _c1, ctx.registrationForm.controls["fullname"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](65, _c2, ctx.registrationForm.controls["fullname"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](67, _c3, ctx.registrationForm.controls["fullname"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](69, _c0, ctx.registrationForm.controls["fullname"].invalid, ctx.registrationForm.controls["fullname"].valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](72, _c1, ctx.registrationForm.controls["fullname"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](74, _c2, ctx.registrationForm.controls["fullname"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](76, _c3, ctx.registrationForm.controls["fullname"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](78, _c0, ctx.registrationForm.controls["fullname"].invalid, ctx.registrationForm.controls["fullname"].valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](81, _c1, ctx.registrationForm.controls["fullname"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](83, _c2, ctx.registrationForm.controls["fullname"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](85, _c3, ctx.registrationForm.controls["fullname"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](87, _c0, ctx.registrationForm.controls["fullname"].invalid, ctx.registrationForm.controls["fullname"].valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](90, _c1, ctx.registrationForm.controls["fullname"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](92, _c2, ctx.registrationForm.controls["fullname"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](94, _c3, ctx.registrationForm.controls["fullname"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](96, _c0, ctx.registrationForm.controls["email"].invalid, ctx.registrationForm.controls["email"].valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](99, _c4, ctx.registrationForm.controls["email"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](101, _c5, ctx.registrationForm.controls["email"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](103, _c6, ctx.registrationForm.controls["email"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](105, _c7, ctx.registrationForm.controls["email"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](107, _c0, ctx.registrationForm.controls["password"].invalid, ctx.registrationForm.controls["password"].valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](110, _c8, ctx.registrationForm.controls["password"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](112, _c9, ctx.registrationForm.controls["password"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](114, _c10, ctx.registrationForm.controls["password"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](116, _c0, ctx.registrationForm.controls["cPassword"].invalid, ctx.registrationForm.controls["cPassword"].valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](119, _c11, ctx.registrationForm.controls["cPassword"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](121, _c12, ctx.registrationForm.controls["cPassword"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](123, _c13, ctx.registrationForm.controls["cPassword"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.registrationForm.controls["cPassword"].errors && ctx.registrationForm.controls["cPassword"].errors.ConfirmPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.registrationForm.invalid || !ctx.registrationForm.controls["agree"].value);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](66, 56, ctx.isLoading$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](68, 58, ctx.isLoading$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n  }\n  [_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWlkZGxlLWVhc3QlMjBIb2xpZGF5c1xcaG9saWRheXMtY2xpZW50XFxzcmNcXGFwcFxcbW9kdWxlc1xcYXV0aFxcY29tcG9uZW50c1xccmVnaXN0cmF0aW9uXFxyZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURBRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDRUo7RURBSTtJQUNFLFdBQUE7RUNFTjtBQUNGIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5sb2dpbi1mb3JtIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcblxyXG4gICAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgOmhvc3QgLmxvZ2luLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gIH1cbiAgOmhvc3QgLmxvZ2luLWZvcm0gLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_auth_module_ts.d96564a78291b776.js.map