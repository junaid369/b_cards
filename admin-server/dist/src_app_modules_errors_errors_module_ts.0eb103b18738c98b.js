"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["src_app_modules_errors_errors_module_ts"],{

/***/ 1145:
/*!***************************************************************!*\
  !*** ./src/app/modules/errors/error404/error404.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error404Component": () => (/* binding */ Error404Component)
/* harmony export */ });
/* harmony import */ var _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/helper/components */ 12101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _theme_partials_layout_theme_mode_switcher_theme_mode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/partials/layout/theme-mode-switcher/theme-mode.service */ 42721);




class Error404Component {
    constructor(router, modeService) {
        this.router = router;
        this.modeService = modeService;
        this.unsubscribe = [];
    }
    ngOnInit() {
        const subscr = this.modeService.mode.asObservable().subscribe((mode) => {
            document.body.style.backgroundImage =
                mode === 'dark'
                    ? 'url(./assets/media/auth/bg1-dark.jpg)'
                    : 'url(./assets/media/auth/bg1.jpg)';
        });
        this.unsubscribe.push(subscr);
    }
    routeToDashboard() {
        this.router.navigate(['dashboard']);
        setTimeout(() => {
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.ToggleComponent.reinitialization();
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.ScrollTopComponent.reinitialization();
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.DrawerComponent.reinitialization();
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.StickyComponent.bootstrap();
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.MenuComponent.reinitialization();
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.ScrollComponent.reinitialization();
        }, 200);
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
        document.body.style.backgroundImage = 'none';
    }
}
Error404Component.ɵfac = function Error404Component_Factory(t) { return new (t || Error404Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_theme_partials_layout_theme_mode_switcher_theme_mode_service__WEBPACK_IMPORTED_MODULE_1__.ThemeModeService)); };
Error404Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Error404Component, selectors: [["app-error404"]], decls: 10, vars: 0, consts: [[1, "fw-bolder", "fs-2hx", "text-gray-900", "mb-4"], [1, "fw-semibold", "fs-6", "text-gray-500", "mb-7"], [1, "mb-3"], ["src", "./assets/media/auth/404-error.png", "alt", "", 1, "mw-100", "mh-300px", "theme-light-show", "mx-auto"], ["src", "./assets/media/auth/404-error-dark.png", "alt", "", 1, "mw-100", "mh-300px", "theme-dark-show"], [1, "mb-0"], [1, "btn", "btn-sm", "btn-primary", 3, "click"]], template: function Error404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Oops!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "We can't find that page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 3)(6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Error404Component_Template_a_click_8_listener() { return ctx.routeToDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Return Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwNC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 19921:
/*!***************************************************************!*\
  !*** ./src/app/modules/errors/error500/error500.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error500Component": () => (/* binding */ Error500Component)
/* harmony export */ });
/* harmony import */ var _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/helper/components */ 12101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _theme_partials_layout_theme_mode_switcher_theme_mode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/partials/layout/theme-mode-switcher/theme-mode.service */ 42721);




class Error500Component {
    constructor(router, modeService) {
        this.router = router;
        this.modeService = modeService;
        this.unsubscribe = [];
    }
    ngOnInit() {
        const subscr = this.modeService.mode.asObservable().subscribe((mode) => {
            document.body.style.backgroundImage =
                mode === 'dark'
                    ? 'url(./assets/media/auth/bg7-dark.jpg)'
                    : 'url(./assets/media/auth/bg7.jpg)';
        });
        this.unsubscribe.push(subscr);
    }
    routeToDashboard() {
        this.router.navigate(['dashboard']);
        setTimeout(() => {
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.ToggleComponent.reinitialization();
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.ScrollTopComponent.reinitialization();
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.DrawerComponent.reinitialization();
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.StickyComponent.bootstrap();
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.MenuComponent.reinitialization();
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.ScrollComponent.reinitialization();
        }, 200);
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
        document.body.style.backgroundImage = 'none';
    }
}
Error500Component.ɵfac = function Error500Component_Factory(t) { return new (t || Error500Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_theme_partials_layout_theme_mode_switcher_theme_mode_service__WEBPACK_IMPORTED_MODULE_1__.ThemeModeService)); };
Error500Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Error500Component, selectors: [["app-error500"]], decls: 10, vars: 0, consts: [[1, "fw-bolder", "fs-2qx", "text-gray-900", "mb-4"], [1, "fw-semibold", "fs-6", "text-gray-500", "mb-7"], [1, "mb-11"], ["src", "./assets/media/auth/500-error.png", "alt", "", 1, "mw-100", "mh-300px", "theme-light-show"], ["src", "./assets/media/auth/500-error-dark.png", "alt", "", 1, "mw-100", "mh-300px", "theme-dark-show"], [1, "mb-0"], [1, "btn", "btn-sm", "btn-primary", 3, "click"]], template: function Error500Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " System Error\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Something went wrong! Please try again later.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 3)(6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Error500Component_Template_a_click_8_listener() { return ctx.routeToDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Return Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjUwMC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 81003:
/*!*********************************************************!*\
  !*** ./src/app/modules/errors/errors-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorsRoutingModule": () => (/* binding */ ErrorsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error404/error404.component */ 1145);
/* harmony import */ var _error500_error500_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error500/error500.component */ 19921);
/* harmony import */ var _errors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors.component */ 30106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);






const routes = [
    {
        path: '',
        component: _errors_component__WEBPACK_IMPORTED_MODULE_2__.ErrorsComponent,
        children: [
            {
                path: '404',
                component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_0__.Error404Component,
            },
            {
                path: '500',
                component: _error500_error500_component__WEBPACK_IMPORTED_MODULE_1__.Error500Component,
            },
            { path: '', redirectTo: '404', pathMatch: 'full' },
            { path: '**', redirectTo: '404', pathMatch: 'full' },
        ],
    },
];
class ErrorsRoutingModule {
}
ErrorsRoutingModule.ɵfac = function ErrorsRoutingModule_Factory(t) { return new (t || ErrorsRoutingModule)(); };
ErrorsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ErrorsRoutingModule });
ErrorsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ErrorsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 30106:
/*!****************************************************!*\
  !*** ./src/app/modules/errors/errors.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorsComponent": () => (/* binding */ ErrorsComponent)
/* harmony export */ });
/* harmony import */ var _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/helper/components */ 12101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 65485);



const BODY_CLASSES = ['bgi-size-cover', 'bgi-position-center', 'bgi-no-repeat'];
class ErrorsComponent {
    constructor(router) {
        this.router = router;
        this.class = 'd-flex flex-column flex-root';
    }
    ngOnInit() {
        BODY_CLASSES.forEach((c) => document.body.classList.add(c));
    }
    ngOnDestroy() {
        BODY_CLASSES.forEach((c) => document.body.classList.remove(c));
    }
    routeToDashboard() {
        this.router.navigate(['dashboard']);
        setTimeout(() => {
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.ToggleComponent.bootstrap();
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.ScrollTopComponent.bootstrap();
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.DrawerComponent.bootstrap();
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.StickyComponent.bootstrap();
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.MenuComponent.bootstrap();
            _theme_helper_components__WEBPACK_IMPORTED_MODULE_0__.ScrollComponent.bootstrap();
        }, 200);
    }
}
ErrorsComponent.ɵfac = function ErrorsComponent_Factory(t) { return new (t || ErrorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
ErrorsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ErrorsComponent, selectors: [["app-errors"]], hostVars: 2, hostBindings: function ErrorsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.class);
    } }, decls: 5, vars: 0, consts: [[1, "d-flex", "flex-column", "flex-center", "flex-column-fluid"], [1, "d-flex", "flex-column", "flex-center", "text-center", "p-10"], [1, "card", "card-flush", "w-lg-650px", "py-5"], [1, "card-body", "py-15", "py-lg-20"]], template: function ErrorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1pZGRsZS1lYXN0JTIwSG9saWRheXNcXGhvbGlkYXlzLWNsaWVudFxcc3JjXFxhcHBcXG1vZHVsZXNcXGVycm9yc1xcZXJyb3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUNDRiIsImZpbGUiOiJlcnJvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"] });


/***/ }),

/***/ 86034:
/*!*************************************************!*\
  !*** ./src/app/modules/errors/errors.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorsModule": () => (/* binding */ ErrorsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _errors_errors_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors/errors.component */ 30106);
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error404/error404.component */ 1145);
/* harmony import */ var _error500_error500_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error500/error500.component */ 19921);
/* harmony import */ var _errors_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors-routing.module */ 81003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);






class ErrorsModule {
}
ErrorsModule.ɵfac = function ErrorsModule_Factory(t) { return new (t || ErrorsModule)(); };
ErrorsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ErrorsModule });
ErrorsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _errors_routing_module__WEBPACK_IMPORTED_MODULE_3__.ErrorsRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ErrorsModule, { declarations: [_errors_errors_component__WEBPACK_IMPORTED_MODULE_0__.ErrorsComponent, _error404_error404_component__WEBPACK_IMPORTED_MODULE_1__.Error404Component, _error500_error500_component__WEBPACK_IMPORTED_MODULE_2__.Error500Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _errors_routing_module__WEBPACK_IMPORTED_MODULE_3__.ErrorsRoutingModule] }); })();


/***/ }),

/***/ 3592:
/*!**************************************************!*\
  !*** ./src/app/theme/helper/layout/ThemeMode.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeModeComponent": () => (/* binding */ ThemeModeComponent)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils */ 47590);

class ThemeMode {
    constructor() {
        this.menu = null;
        this.element = null;
        this.getParamName = (postfix) => {
            const ktName = document.body.hasAttribute('data-kt-name');
            const name = ktName ? ktName + '_' : '';
            return 'kt_' + name + 'theme_mode_' + postfix;
        };
        this.getMode = () => {
            var _a;
            const modeParam = this.getParamName('value');
            const menuMode = this.getMenuMode();
            const defaultMode = 'light';
            if (!localStorage) {
                return defaultMode;
            }
            const ls = localStorage.getItem(modeParam);
            if (ls) {
                return ls;
            }
            const dataTheme = (_a = this.element) === null || _a === void 0 ? void 0 : _a.getAttribute('data-theme');
            if (dataTheme) {
                return dataTheme;
            }
            if (!menuMode) {
                return defaultMode;
            }
            if (menuMode === 'system') {
                return this.getSystemMode();
            }
            return menuMode;
        };
        this.setMode = (mode, menuMode) => {
            var _a, _b, _c;
            // Check input values
            if (mode !== 'light' && mode !== 'dark') {
                return;
            }
            // Get param names
            const modeParam = this.getParamName('value');
            const menuModeParam = this.getParamName('menu');
            // Reset mode if system mode was changed
            if (menuMode === 'system') {
                if (this.getSystemMode() !== mode) {
                    mode = this.getSystemMode();
                }
            }
            // Check menu mode
            if (!menuMode) {
                menuMode = mode;
            }
            // Read active menu mode value
            const activeMenuItem = ((_a = this.menu) === null || _a === void 0 ? void 0 : _a.querySelector('[data-kt-element="mode"][data-kt-value="' + menuMode + '"]')) || null;
            // Enable switching state
            (_b = this.element) === null || _b === void 0 ? void 0 : _b.setAttribute("data-kt-theme-mode-switching", "true");
            // Set mode to the target element
            (_c = this.element) === null || _c === void 0 ? void 0 : _c.setAttribute('data-theme', mode);
            // Disable switching state
            const self = this;
            setTimeout(function () {
                var _a;
                (_a = self.element) === null || _a === void 0 ? void 0 : _a.removeAttribute("data-kt-theme-mode-switching");
            }, 300);
            // Store mode value in storage
            if (localStorage) {
                localStorage.setItem(modeParam, mode);
            }
            // Set active menu item
            if (activeMenuItem && localStorage) {
                localStorage.setItem(menuModeParam, menuMode);
                this.setActiveMenuItem(activeMenuItem);
            }
            // Flip images
            this.flipImages();
        };
        this.getMenuMode = () => {
            var _a;
            const menuModeParam = this.getParamName('menu');
            const menuItem = (_a = this.menu) === null || _a === void 0 ? void 0 : _a.querySelector('.active[data-kt-element="mode"]');
            const dataKTValue = menuItem === null || menuItem === void 0 ? void 0 : menuItem.getAttribute('data-kt-value');
            if (dataKTValue) {
                return dataKTValue;
            }
            if (!menuModeParam) {
                return '';
            }
            const ls = localStorage ? localStorage.getItem(menuModeParam) : null;
            return ls || '';
        };
        this.getSystemMode = () => {
            return window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light';
        };
        this.initMode = () => {
            this.setMode(this.getMode(), this.getMenuMode());
            if (this.element) {
                _utils__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.trigger(this.element, 'kt.thememode.init');
            }
        };
        this.getActiveMenuItem = () => {
            var _a;
            return (((_a = this.menu) === null || _a === void 0 ? void 0 : _a.querySelector('[data-kt-element="mode"][data-kt-value="' + this.getMenuMode() + '"]')) || null);
        };
        this.setActiveMenuItem = (item) => {
            var _a;
            const menuModeParam = this.getParamName('menu');
            const menuMode = item.getAttribute('data-kt-value');
            const activeItem = (_a = this.menu) === null || _a === void 0 ? void 0 : _a.querySelector('.active[data-kt-element="mode"]');
            if (activeItem) {
                activeItem.classList.remove('active');
            }
            item.classList.add('active');
            if (localStorage && menuMode && menuModeParam) {
                localStorage.setItem(menuModeParam, menuMode);
            }
        };
        this.handleMenu = () => {
            var _a, _b;
            (_b = (_a = this.menu) === null || _a === void 0 ? void 0 : _a.querySelectorAll('[data-kt-element="mode"]')) === null || _b === void 0 ? void 0 : _b.forEach((item) => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    const menuMode = item.getAttribute('data-kt-value');
                    const mode = menuMode === 'system' ? this.getSystemMode() : menuMode;
                    if (mode) {
                        this.setMode(mode, menuMode);
                    }
                });
            });
        };
        this.flipImages = () => {
            var _a;
            (_a = document.querySelectorAll('[data-kt-img-dark]')) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
                if (item.tagName === 'IMG') {
                    if (this.getMode() === 'dark' && item.hasAttribute('data-kt-img-dark')) {
                        item.setAttribute('data-kt-img-light', item.getAttribute('src') || '');
                        item.setAttribute('src', item.getAttribute('data-kt-img-dark') || '');
                    }
                    else if (this.getMode() === 'light' && item.hasAttribute('data-kt-img-light')) {
                        item.setAttribute('data-kt-img-dark', item.getAttribute('src') || '');
                        item.setAttribute('src', item.getAttribute('data-kt-img-light') || '');
                    }
                }
                else {
                    if (this.getMode() === 'dark' && item.hasAttribute('data-kt-img-dark')) {
                        item.setAttribute('data-kt-img-light', item.getAttribute('src') || '');
                        item.style.backgroundImage = "url('" + item.getAttribute('data-kt-img-dark') + "')";
                    }
                    else if (this.getMode() === 'light' && item.hasAttribute('data-kt-img-light')) {
                        item.setAttribute('data-kt-img-dark', item.getAttribute('src') || '');
                        item.style.backgroundImage = "url('" + item.getAttribute('data-kt-img-light') + "')";
                    }
                }
            });
        };
        this.on = (name, hander) => {
            if (this.element) {
                return _utils__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.on(this.element, name, hander);
            }
        };
        this.off = (name, handlerId) => {
            if (this.element) {
                return _utils__WEBPACK_IMPORTED_MODULE_0__.EventHandlerUtil.off(this.element, name, handlerId);
            }
        };
        this.init = () => {
            this.menu = document.querySelector('[data-kt-element="theme-mode-menu"]');
            this.element = document.documentElement;
            this.initMode();
            if (this.menu) {
                this.handleMenu();
            }
        };
    }
}
const ThemeModeComponent = new ThemeMode();
// Initialize app on document ready => ThemeModeComponent.init()



/***/ }),

/***/ 99068:
/*!**********************************************!*\
  !*** ./src/app/theme/helper/layout/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeModeComponent": () => (/* reexport safe */ _ThemeMode__WEBPACK_IMPORTED_MODULE_0__.ThemeModeComponent)
/* harmony export */ });
/* harmony import */ var _ThemeMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeMode */ 3592);



/***/ }),

/***/ 42721:
/*!*********************************************************************************!*\
  !*** ./src/app/theme/partials/layout/theme-mode-switcher/theme-mode.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeModeService": () => (/* binding */ ThemeModeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76027);
/* harmony import */ var _helper_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helper/layout */ 99068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);



const systemMode = _helper_layout__WEBPACK_IMPORTED_MODULE_0__.ThemeModeComponent.getSystemMode();
const themeModeSwitchHelper = (_mode) => {
    // change background image url
    const mode = _mode !== 'system' ? _mode : systemMode;
    const imageUrl = './assets/media/patterns/header-bg' +
        (mode === 'light' ? '.jpg' : '-dark.png');
    document.body.style.backgroundImage = `url("${imageUrl}")`;
};
const themeModeLSKey = 'kt_theme_mode_value';
const themeMenuModeLSKey = 'kt_theme_mode_menu';
const getThemeModeFromLocalStorage = (lsKey) => {
    if (!localStorage) {
        return 'light';
    }
    const data = localStorage.getItem(lsKey);
    if (!data) {
        return 'light';
    }
    if (data === 'light') {
        return 'light';
    }
    if (data === 'dark') {
        return 'dark';
    }
    return 'system';
};
class ThemeModeService {
    constructor() {
        this.mode = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(getThemeModeFromLocalStorage(themeModeLSKey));
        this.menuMode = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(getThemeModeFromLocalStorage(themeMenuModeLSKey));
    }
    updateMode(_mode) {
        const updatedMode = _mode === 'system' ? systemMode : _mode;
        this.mode.next(updatedMode);
        // themeModeSwitchHelper(updatedMode)
        if (localStorage) {
            localStorage.setItem(themeModeLSKey, updatedMode);
        }
        document.documentElement.setAttribute('data-theme', updatedMode);
        _helper_layout__WEBPACK_IMPORTED_MODULE_0__.ThemeModeComponent.init();
    }
    updateMenuMode(_menuMode) {
        this.menuMode.next(_menuMode);
        if (localStorage) {
            localStorage.setItem(themeMenuModeLSKey, _menuMode);
        }
    }
    init() {
        this.updateMode(this.mode.value);
        this.updateMenuMode(this.menuMode.value);
    }
    switchMode(_mode) {
        if (localStorage) {
            const updatedMode = _mode === 'system' ? systemMode : _mode;
            localStorage.setItem(themeModeLSKey, updatedMode);
            localStorage.setItem(themeMenuModeLSKey, _mode);
        }
        document.location.reload();
    }
}
ThemeModeService.ɵfac = function ThemeModeService_Factory(t) { return new (t || ThemeModeService)(); };
ThemeModeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ThemeModeService, factory: ThemeModeService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_errors_errors_module_ts.0eb103b18738c98b.js.map