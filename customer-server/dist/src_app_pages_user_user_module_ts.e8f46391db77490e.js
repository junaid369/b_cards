"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["src_app_pages_user_user_module_ts"],{

/***/ 32098:
/*!*************************************************************************!*\
  !*** ./src/app/pages/user/change-password/change-password.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11155);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/user/user.service */ 27353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);







function ChangePasswordComponent_div_14_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Old Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChangePasswordComponent_div_14_small_1_Template, 2, 0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.oldPassword.errors.required);
} }
function ChangePasswordComponent_div_21_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " New Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_21_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password length should be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChangePasswordComponent_div_21_small_1_Template, 2, 0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ChangePasswordComponent_div_21_small_2_Template, 2, 0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.newPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.newPassword.errors.minlength);
} }
function ChangePasswordComponent_div_28_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Confirm New Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChangePasswordComponent_div_28_small_1_Template, 2, 0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f.confirmNewPassword.errors.required);
} }
function ChangePasswordComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Passwords do not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class ChangePasswordComponent {
    constructor(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.submitted = false;
        this.passMisMatch = false;
        this.myForm = this.formBuilder.group({
            oldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            newPassword: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]),
            ],
            confirmNewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
    }
    ngOnInit() { }
    get f() {
        return this.myForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // console.log(this.myForm.value);
        if (this.myForm.invalid) {
            return;
        }
        if (this.myForm.value.newPassword !== this.myForm.value.confirmNewPassword) {
            this.passMisMatch = true;
            return;
        }
        else {
            this.passMisMatch = false;
        }
        const payload = {
            fkAdminId: localStorage.getItem('userId'),
            strOldPaswd: this.myForm.value.oldPassword,
            strNewPaswd: this.myForm.value.newPassword,
        };
        this.userService.updatePassword(payload).subscribe((res) => {
            if (res.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Success', res.message, 'success');
                this.router.navigate(['/user/profile']);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', res.message, 'error');
            }
        });
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
ChangePasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 33, vars: 5, consts: [[1, "w-full"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "mb-0"], [3, "formGroup"], ["for", "oldPassword"], [1, "w-2/3", "p-2"], ["id", "oldPassword", "type", "text", "formControlName", "oldPassword", "placeholder", "Old Password", 1, "form-control", "form-control-solid"], ["class", "text-red-500", 4, "ngIf"], ["for", "newPassword"], ["id", "newPassword", "type", "text", "formControlName", "newPassword", "placeholder", "New Password", 1, "form-control", "form-control-solid"], ["for", "confirmNewPassword"], ["id", "confirmNewPassword", "type", "text", "placeholder", "Confirm New Password", "formControlName", "confirmNewPassword", 1, "form-control", "form-control-solid"], [1, "text-right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "text-red-500"], [4, "ngIf"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 5)(7, "table")(8, "tr")(9, "td")(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Old Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ChangePasswordComponent_div_14_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tr")(16, "td")(17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ChangePasswordComponent_div_21_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tr")(23, "td")(24, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Confirm New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ChangePasswordComponent_div_28_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ChangePasswordComponent_div_29_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 14)(31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_31_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.oldPassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.newPassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.confirmNewPassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.passMisMatch);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });


/***/ }),

/***/ 62289:
/*!*******************************************************************!*\
  !*** ./src/app/pages/user/notification/notification.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51109);

class NotificationComponent {
    constructor() {
        this.arrNotifications = [];
    }
    // constructor(private userService: UserService) {}
    ngOnInit() {
        // this.getPushNotification();
    }
    // getPushNotification() {
    //   const obj = {
    //     fkAdminId: localStorage.getItem('userId'),
    //     intSkipCount: '0',
    //     intLimitCount: '100',
    //   };
    //   this.userService.getPushNotification(obj).subscribe((res) => {
    //     if (res.success) {
    //       this.arrNotifications = res.data;
    //     } else {
    //       this.arrNotifications = [];
    //     }
    //   });
    // }
    redirectTo(link) {
        if (link) {
            window.open(link, '_blank');
        }
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(); };
NotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 0, vars: 0, template: function NotificationComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });


/***/ }),

/***/ 32846:
/*!*********************************************************!*\
  !*** ./src/app/pages/user/profile/profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_theme_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/theme/layout */ 19552);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);




function ProfileComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 5)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Level:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Level ", ctx_r0.level, " ");
} }
function ProfileComponent_p_20_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " ACCESS TO ALL SUPPLIERS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_p_20_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sup_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", sup_r4.supp_No, " - ", sup_r4.Vendor_Name, " ");
} }
function ProfileComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 5)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Suppliers:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileComponent_p_20_span_3_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileComponent_p_20_span_4_Template, 2, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.supType === "ALL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.suppliers);
} }
const _c0 = function () { return ["change-password"]; };
class ProfileComponent {
    constructor(pageInfoService) {
        this.pageInfoService = pageInfoService;
        this.username = '';
        this.email = '';
        this.role = '';
        this.level = '';
        this.suppliers = [];
        this.supType = '';
        this.username = localStorage.getItem('userName') || '';
        this.email = localStorage.getItem('email') || '';
        this.role = localStorage.getItem('role') || '';
        this.level = localStorage.getItem('userLevel') || '';
        this.supType = localStorage.getItem('supType') || '';
        this.suppliers = JSON.parse(localStorage.getItem('supList') || '[]');
    }
    ngAfterViewChecked() {
        this.pageInfoService.updateTitle('Profile');
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_theme_layout__WEBPACK_IMPORTED_MODULE_0__.PageInfoService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 24, vars: 8, consts: [[1, "card", "w-full"], [1, "card-body"], [1, "flex", "max-md:flex-col", "gap-4"], [1, "h-24", "w-24", "rounded", "bg-primary", "font-semibold", "text-4xl", "flex", "justify-center", "items-center", "text-white", "flex-shrink-0"], [1, "flex-1"], [1, "card-text"], [1, "badge", "badge-light-info", "fw-bolder", "fs-8", "px-2", "py-1", "ms-2"], ["class", "card-text", 4, "ngIf"], [1, "text-right"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "badge", "badge-light-success", "fw-bolder", "fs-8", "px-2", "py-1", "ms-2"], ["class", "badge badge-light-primary fw-bolder fs-8 px-2 py-1 ms-2", 4, "ngIf"], ["class", "badge badge-light-primary fw-bolder fs-8 px-2 py-1 mx-2 my-1", 4, "ngFor", "ngForOf"], [1, "badge", "badge-light-primary", "fw-bolder", "fs-8", "px-2", "py-1", "ms-2"], [1, "badge", "badge-light-primary", "fw-bolder", "fs-8", "px-2", "py-1", "mx-2", "my-1"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "p", 5)(7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 5)(11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 5)(15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ProfileComponent_p_19_Template, 5, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProfileComponent_p_20_Template, 5, 2, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8)(22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.username.charAt(0), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.role, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role === "INTERNAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.role === "INTERNAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 60360:
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password/change-password.component */ 32098);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ 32846);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification/notification.component */ 62289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);








class UserModule {
}
UserModule.ɵfac = function UserModule_Factory(t) { return new (t || UserModule)(); };
UserModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full',
            },
            {
                path: 'profile',
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent,
            },
            {
                path: 'notification',
                component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__.NotificationComponent,
            },
            {
                path: 'profile/change-password',
                component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordComponent,
            },
        ])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent,
        _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordComponent,
        _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__.NotificationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 19552:
/*!***************************************!*\
  !*** ./src/app/theme/layout/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* reexport safe */ _layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule),
/* harmony export */   "LayoutService": () => (/* reexport safe */ _core_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService),
/* harmony export */   "PageInfo": () => (/* reexport safe */ _core_page_info_service__WEBPACK_IMPORTED_MODULE_2__.PageInfo),
/* harmony export */   "PageInfoService": () => (/* reexport safe */ _core_page_info_service__WEBPACK_IMPORTED_MODULE_2__.PageInfoService),
/* harmony export */   "getEmptyCssClasses": () => (/* reexport safe */ _core_layout_service__WEBPACK_IMPORTED_MODULE_1__.getEmptyCssClasses),
/* harmony export */   "getEmptyHTMLAttributes": () => (/* reexport safe */ _core_layout_service__WEBPACK_IMPORTED_MODULE_1__.getEmptyHTMLAttributes)
/* harmony export */ });
/* harmony import */ var _layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.module */ 157);
/* harmony import */ var _core_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/layout.service */ 16297);
/* harmony import */ var _core_page_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/page-info.service */ 83308);





/***/ })

}]);
//# sourceMappingURL=src_app_pages_user_user_module_ts.e8f46391db77490e.js.map