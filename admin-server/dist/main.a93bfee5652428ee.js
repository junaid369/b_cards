"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["main"],{

/***/ 70809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth/services/auth.guard */ 6585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);




const routes = [
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 82146)).then((m) => m.AuthModule),
    },
    {
        path: 'error',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_theme_helper_components_index_ts"), __webpack_require__.e("src_app_modules_errors_errors_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/errors/errors.module */ 86034)).then((m) => m.ErrorsModule),
    },
    {
        path: '',
        canActivate: [_modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_theme_helper_components_index_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_theme_layout_layout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./theme/layout/layout.module */ 157)).then((m) => m.LayoutModule),
    },
    { path: '**', redirectTo: 'error/404' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 20721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 65485);


const _c0 = ["root", ""];
class AppComponent {
    constructor() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["body", "root", ""]], attrs: _c0, decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 50023:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 78394);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7497);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 80779);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 46828);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30610);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg-2 */ 39929);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-clipboard */ 99110);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 31619);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 70809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 20721);
/* harmony import */ var _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/helpers/error.interceptor */ 44557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
















// import { MessagingService } from './core/services/firebase-message/firebase-message.service';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS, useClass: _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_3__.ErrorInterceptor, multi: true },
        // MessagingService,
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forRoot(),
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_9__.ClipboardModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrModule.forRoot(),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule.forRoot(),
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_9__.ClipboardModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule] }); })();
// required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__.TranslateHttpLoader(http);
}


/***/ }),

/***/ 44557:
/*!***************************************************!*\
  !*** ./src/app/core/helpers/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 71909);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 17114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/authentication/authentication.service */ 42725);




class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                // location.reload();
            }
            const error = err.error.message || err.statusText;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 42725:
/*!************************************************************************!*\
  !*** ./src/app/core/services/authentication/authentication.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 15674);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 17114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.service */ 37983);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);







class AuthenticationService {
    constructor(http, commonService, router) {
        this.http = http;
        this.commonService = commonService;
        this.router = router;
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_ENDPOINT;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                Authorization: 'bearer ' + localStorage.getItem('token'),
            }),
        };
    }
    adminLogin(obj) {
        return this.http
            .post(this.apiURL + 'admin/admin_login', obj)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.retry)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonService.handleError));
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/auth/login']);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 37983:
/*!********************************************************!*\
  !*** ./src/app/core/services/common/common.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 71909);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);



class CommonService {
    constructor() {
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_ENDPOINT;
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else if (error.status === 401) {
            errorMessage = error.status;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        // window.alert(errorMessage);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(errorMessage);
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(); };
CommonService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 57286:
/*!**********************************************************************!*\
  !*** ./src/app/modules/auth/services/auth-http/auth-http.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthHTTPService": () => (/* binding */ AuthHTTPService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 78336);



// import { AuthModel } from '../../models/auth.model';
const API_USERS_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_ENDPOINT}/auth`;
class AuthHTTPService {
    constructor(http) {
        this.http = http;
    }
}
AuthHTTPService.ɵfac = function AuthHTTPService_Factory(t) { return new (t || AuthHTTPService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AuthHTTPService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthHTTPService, factory: AuthHTTPService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 15329:
/*!**********************************************************!*\
  !*** ./src/app/modules/auth/services/auth-http/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthHTTPService": () => (/* reexport safe */ _auth_http_service__WEBPACK_IMPORTED_MODULE_0__.AuthHTTPService)
/* harmony export */ });
/* harmony import */ var _auth_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-http.service */ 57286);
// #fake-start#
// export { AuthHTTPService } from './fake/auth-fake-http.service'; // You have to comment this, when your real back-end is done
// #fake-end#
// #real-start#
 // You have to uncomment this, when your real back-end is done
// #real-end#


/***/ }),

/***/ 6585:
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/services/auth.guard.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 37345);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 65485);



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        // const currentUser = this.authService.currentUserValue;
        const currentUser = localStorage.getItem('userId');
        // const currentUserType = localStorage.getItem('role');
        if (currentUser) {
            return true;
            //   if (currentUserType === 'ADMIN' || currentUserType === 'INTERNAL') {
            //     return true;
            //   } else {
            //     this.router.navigate(['/s']);
            //     // logged in so return true
            //     return false;
            //   }
        }
        // not logged in so redirect to login page with the return url
        this.authService.logout();
        // localStorage.clear();
        // this.router.navigate(['/auth/login'], {
        //   queryParams: { returnUrl: state.url },
        // });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 37345:
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/services/auth.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _auth_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-http */ 15329);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);




class AuthService {
    constructor(authHttpService, router) {
        this.authHttpService = authHttpService;
        this.router = router;
        // private fields
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
        this.currentUser$ = this.currentUserSubject.asObservable();
        this.isLoading$ = this.isLoadingSubject.asObservable();
        // const subscr = this.getUserByToken().subscribe();
        // this.unsubscribe.push(subscr);
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    set currentUserValue(user) {
        this.currentUserSubject.next(user);
    }
    // public methods
    // login(email: string, password: string): Observable<UserType> {
    //   this.isLoadingSubject.next(true);
    //   return this.authHttpService.login(email, password).pipe(
    //     map((auth: AuthModel) => {
    //       const result = this.setAuthFromLocalStorage(auth);
    //       return result;
    //     }),
    //     switchMap(() => this.getUserByToken()),
    //     catchError((err) => {
    //       console.error('err', err);
    //       return of(undefined);
    //     }),
    //     finalize(() => this.isLoadingSubject.next(false))
    //   );
    // }
    logout() {
        // localStorage.removeItem(this.authLocalStorageToken);
        this.router.navigate(['/auth/login'], {
            queryParams: {},
        });
    }
    // getUserByToken(): Observable<UserType> {
    //   const auth = this.getAuthFromLocalStorage();
    //   if (!auth || !auth.authToken) {
    //     return of(undefined);
    //   }
    //   this.isLoadingSubject.next(true);
    //   return this.authHttpService.getUserByToken(auth.authToken).pipe(
    //     map((user: UserType) => {
    //       if (user) {
    //         this.currentUserSubject.next(user);
    //       } else {
    //         this.logout();
    //       }
    //       return user;
    //     }),
    //     finalize(() => this.isLoadingSubject.next(false))
    //   );
    // }
    // need create new user then login
    // registration(user: UserModel): Observable<any> {
    //   this.isLoadingSubject.next(true);
    //   return this.authHttpService.createUser(user).pipe(
    //     map(() => {
    //       this.isLoadingSubject.next(false);
    //     }),
    //     switchMap(() => this.login(user.email, user.password)),
    //     catchError((err) => {
    //       console.error('err', err);
    //       return of(undefined);
    //     }),
    //     finalize(() => this.isLoadingSubject.next(false))
    //   );
    // }
    // forgotPassword(email: string): Observable<boolean> {
    //   this.isLoadingSubject.next(true);
    //   return this.authHttpService
    //     .forgotPassword(email)
    //     .pipe(finalize(() => this.isLoadingSubject.next(false)));
    // }
    // private methods
    // private setAuthFromLocalStorage(auth: AuthModel): boolean {
    // store auth authToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
    // if (auth && auth.authToken) {
    // localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
    // return true;
    // }
    // return false;
    // }
    // private getAuthFromLocalStorage(): AuthModel | undefined {
    //   try {
    //     const lsValue = localStorage.getItem(this.authLocalStorageToken);
    //     if (!lsValue) {
    //       return undefined;
    //     }
    //     const authData = JSON.parse(lsValue);
    //     const authData = JSON.parse("{ lsValue: 'test' }");
    //     return authData;
    //   } catch (error) {
    //     console.error(error);
    //     return undefined;
    //   }
    // }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_http__WEBPACK_IMPORTED_MODULE_0__.AuthHTTPService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 24766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    // API_ENDPOINT: 'https://vrm.al-sadhan.com/v2/api/',
    API_ENDPOINT: 'http://3.29.100.110:3001/v2/api/',
    // API_ENDPOINT: 'http://3.29.100.110:3000/v2/api/', // TEST IP
    ADMIN_ID: 'a165fccd-2bbe-4391-9ea9-a237b1fb7c82',
    SUB_ADMIN_ID: 'e5e069e0-1914-4fc9-bd4a-90487fce89ea',
    // firebaseConfig: {
    //   apiKey: 'AIzaSyCR-3WZBUiZuSSgdoH63x5WSUsGSSFBtjU',
    //   authDomain: 'vendor-5c444.firebaseapp.com',
    //   projectId: 'vendor-5c444',
    //   storageBucket: 'vendor-5c444.appspot.com',
    //   messagingSenderId: '1063137373466',
    //   appId: '1:1063137373466:web:30d81cb6394987422450a3',
    //   measurementId: 'G-03NWFZSKSS',
    // },
};


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 78394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50023);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 24766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.a93bfee5652428ee.js.map