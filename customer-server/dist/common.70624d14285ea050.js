"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["common"],{

/***/ 21936:
/*!************************************************************!*\
  !*** ./src/app/core/services/customer/customer.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerService": () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 15674);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 17114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.service */ 37983);






class CustomerService {
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
    addCustomer(obj) {
        return this.http
            .post(this.apiURL + 'customer/add_customer', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    getAllCustomer(obj) {
        return this.http
            .post(this.apiURL + 'customer/get_all_customer', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    updateCustomer(obj) {
        return this.http
            .post(this.apiURL + 'customer/update_customer', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    deleteCustomer(obj) {
        return this.http
            .post(this.apiURL + 'customer/delete_customer', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    addCustomerPayment(obj) {
        return this.http
            .post(this.apiURL + 'customer/payment_add_from_customer', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    updateCustomerPayment(obj) {
        return this.http
            .post(this.apiURL + 'customer/update_customer_payment', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    deleteCustomerPayment(obj) {
        return this.http
            .post(this.apiURL + 'customer/delete_customer_payment', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    getAllCustomerPayment(obj) {
        return this.http
            .post(this.apiURL + 'customer/get_all_customer_payment', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    accountsVerification(obj) {
        return this.http
            .post(this.apiURL + 'payment/verified_by_accounts', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
CustomerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 76405:
/*!************************************************************!*\
  !*** ./src/app/core/services/supplier/supplier.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierService": () => (/* binding */ SupplierService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 15674);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 17114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.service */ 37983);






class SupplierService {
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
    addSupplier(obj) {
        return this.http
            .post(this.apiURL + 'supplier/add_supplier', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    getAllSupplier(obj) {
        return this.http
            .post(this.apiURL + 'supplier/get_all_supplier', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    updateSupplier(obj) {
        return this.http
            .post(this.apiURL + 'supplier/update_supplier', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    deleteSupplier(obj) {
        return this.http
            .post(this.apiURL + 'supplier/delete_supplier', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    addPaymentToSupplier(obj) {
        return this.http
            .post(this.apiURL + 'supplier/payment_to_supplier', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    updatePaymentSupplier(obj) {
        return this.http
            .post(this.apiURL + 'supplier/update_supplier_payment', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    deletePaymentSupplier(obj) {
        return this.http
            .post(this.apiURL + 'supplier/delete_supplier_payment', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    getPaymentSupplier(obj) {
        return this.http
            .post(this.apiURL + 'supplier/get_all_supplier_payment', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    createVoucher(obj) {
        return this.http
            .post(this.apiURL + 'voucher/create_voucher', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    metaData(obj) {
        return this.http
            .post(this.apiURL + 'metadata/get_metadatas', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    getAllRefundListing(obj) {
        return this.http
            .post(this.apiURL + 'refund/get_refund_list', obj, this.httpOptions)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
}
SupplierService.ɵfac = function SupplierService_Factory(t) { return new (t || SupplierService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
SupplierService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SupplierService, factory: SupplierService.ɵfac, providedIn: 'root' });


/***/ }),

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

/***/ 23730:
/*!************************************************************************************!*\
  !*** ./src/app/modules/auth/components/registration/confirm-password.validator.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPasswordValidator": () => (/* binding */ ConfirmPasswordValidator)
/* harmony export */ });
class ConfirmPasswordValidator {
    /**
     * Check matching password with confirm password
     * @param control AbstractControl
     */
    static MatchPassword(control) {
        var _a, _b, _c;
        const password = (_a = control.get('password')) === null || _a === void 0 ? void 0 : _a.value;
        const confirmPassword = (_b = control.get('cPassword')) === null || _b === void 0 ? void 0 : _b.value;
        if (password !== confirmPassword) {
            (_c = control.get('cPassword')) === null || _c === void 0 ? void 0 : _c.setErrors({ ConfirmPassword: true });
        }
    }
}


/***/ }),

/***/ 14278:
/*!***************************************************!*\
  !*** ./src/app/modules/auth/models/user.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModel": () => (/* binding */ UserModel)
/* harmony export */ });
// import { AuthModel } from './auth.model';
// import { AddressModel } from './address.model';
// import { SocialNetworksModel } from './social-networks.model';
class UserModel {
    constructor() {
        this.roles = [];
    }
    setUser(_user) {
        const user = _user;
        this.id = user.id;
        this.username = user.username || '';
        this.password = user.password || '';
        this.fullname = user.fullname || '';
        this.email = user.email || '';
        this.pic = user.pic || './assets/media/avatars/blank.png';
        this.roles = user.roles || [];
        this.occupation = user.occupation || '';
        this.companyName = user.companyName || '';
        this.phone = user.phone || '';
        // this.address = user.address;
        // this.socialNetworks = user.socialNetworks;
    }
}


/***/ })

}]);
//# sourceMappingURL=common.70624d14285ea050.js.map