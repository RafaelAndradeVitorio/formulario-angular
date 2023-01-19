"use strict";
(self["webpackChunkformulario_angular"] = self["webpackChunkformulario_angular"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _form_formulario_form_etapa1_form_etapa1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-formulario/form-etapa1/form-etapa1.component */ 1825);
/* harmony import */ var _form_formulario_form_etapa2_form_etapa2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-formulario/form-etapa2/form-etapa2.component */ 1146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _form_formulario_form_etapa3_form_etapa3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-formulario/form-etapa3/form-etapa3.component */ 2137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    {
        path: '',
        component: _form_formulario_form_etapa1_form_etapa1_component__WEBPACK_IMPORTED_MODULE_0__.FormEtapa1Component
    },
    {
        path: 'etp2',
        component: _form_formulario_form_etapa2_form_etapa2_component__WEBPACK_IMPORTED_MODULE_1__.FormEtapa2Component
    },
    {
        path: 'etp3',
        component: _form_formulario_form_etapa3_form_etapa3_component__WEBPACK_IMPORTED_MODULE_2__.FormEtapa3Component,
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _form_nav_form_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-nav/form-nav.component */ 7526);
/* harmony import */ var _form_home_form_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-home/form-home.component */ 1688);



class AppComponent {
    constructor() {
        this.title = 'formulario-angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-form-nav")(1, "app-form-home");
    } }, dependencies: [_form_nav_form_nav_component__WEBPACK_IMPORTED_MODULE_0__.FormNavComponent, _form_home_form_home_component__WEBPACK_IMPORTED_MODULE_1__.FormHomeComponent], styles: ["body[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL1Byb2pldG8lMjBmcm9udC9mb3JtdWxhcmlvLWFuZ3VsYXIvZm9ybXVsYXJpby1hbmd1bGFyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIHdpZHRoOiAxMDB2dztcbn1cbiIsImJvZHkge1xuICB3aWR0aDogMTAwdnc7XG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _form_nav_form_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-nav/form-nav.component */ 7526);
/* harmony import */ var _form_home_form_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-home/form-home.component */ 1688);
/* harmony import */ var _form_ilustracao_form_ilustracao_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-ilustracao/form-ilustracao.component */ 1964);
/* harmony import */ var _form_formulario_form_formulario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-formulario/form-formulario.component */ 6475);
/* harmony import */ var _form_formulario_form_etapa1_form_etapa1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-formulario/form-etapa1/form-etapa1.component */ 1825);
/* harmony import */ var _form_formulario_form_etapa2_form_etapa2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-formulario/form-etapa2/form-etapa2.component */ 1146);
/* harmony import */ var _form_formulario_form_etapa3_form_etapa3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-formulario/form-etapa3/form-etapa3.component */ 2137);
/* harmony import */ var _form_formulario_form_botao_skip_form_botao_skip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-formulario/form-botao-skip/form-botao-skip.component */ 498);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _form_nav_form_nav_component__WEBPACK_IMPORTED_MODULE_2__.FormNavComponent,
        _form_home_form_home_component__WEBPACK_IMPORTED_MODULE_3__.FormHomeComponent,
        _form_ilustracao_form_ilustracao_component__WEBPACK_IMPORTED_MODULE_4__.FormIlustracaoComponent,
        _form_formulario_form_formulario_component__WEBPACK_IMPORTED_MODULE_5__.FormFormularioComponent,
        _form_formulario_form_etapa1_form_etapa1_component__WEBPACK_IMPORTED_MODULE_6__.FormEtapa1Component,
        _form_formulario_form_etapa2_form_etapa2_component__WEBPACK_IMPORTED_MODULE_7__.FormEtapa2Component,
        _form_formulario_form_etapa3_form_etapa3_component__WEBPACK_IMPORTED_MODULE_8__.FormEtapa3Component,
        _form_formulario_form_botao_skip_form_botao_skip_component__WEBPACK_IMPORTED_MODULE_9__.FormBotaoSkipComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule] }); })();


/***/ }),

/***/ 498:
/*!******************************************************************************!*\
  !*** ./src/app/form-formulario/form-botao-skip/form-botao-skip.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormBotaoSkipComponent": () => (/* binding */ FormBotaoSkipComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);



class FormBotaoSkipComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.router.queryParams.subscribe(params => {
            this.id = params['id'];
        });
        console.log();
    }
    skip2() {
        this.route.navigate([`etp2`]);
        console.log("tururu");
    }
}
FormBotaoSkipComponent.ɵfac = function FormBotaoSkipComponent_Factory(t) { return new (t || FormBotaoSkipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
FormBotaoSkipComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormBotaoSkipComponent, selectors: [["app-form-botao-skip"]], decls: 2, vars: 0, consts: [["mat-button", "", "routerLink", "/etp1", 1, "skip"]], template: function FormBotaoSkipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pr\u00F3ximo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWJvdGFvLXNraXAuY29tcG9uZW50LnNjc3MifQ== */", "form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 80%;\n  border-radius: 20px;\n  text-align: center;\n}\n\ndiv#step1[_ngcontent-%COMP%], div#step2[_ngcontent-%COMP%], div#step3[_ngcontent-%COMP%] {\n  background-color: #e9edc9;\n}\n\n.etapa[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background: #faedcd;\n  border-radius: 15px;\n  padding: 10px 0px;\n  align-items: center;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6588235294);\n}\n\n.etapa[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: left;\n  margin: 5px 30px;\n  color: #262725;\n  margin-bottom: 15px;\n}\n\n.erro[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 100%;\n  margin-left: 50px;\n  color: red;\n  font-size: 13px;\n  display: none;\n}\n\ninput[_ngcontent-%COMP%] {\n  background: #faedcd;\n  border: 1px solid #cfcfcf;\n  margin: 5px 0px;\n  height: 40px;\n  width: 97%;\n  font-size: 15px;\n  padding: 2px 13px;\n  border-radius: 15px;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%]::after {\n  content: \"teste\";\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  align-items: center;\n  padding: 2px 4px;\n  font-size: smaller;\n}\n\ninput[_ngcontent-%COMP%]:active {\n  border: none;\n}\n\nsmall[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding-left: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n  border: 1px solid #cfcfcf;\n  height: 40px;\n  width: 97%;\n  border-radius: 15px;\n  box-sizing: border-box;\n  margin: 5px 0px;\n}\n\n.select-container[_ngcontent-%COMP%] {\n  height: 100%;\n  border: none;\n  position: relative;\n  border-radius: 3px;\n  top: 50%;\n  transform: translateY(-50%);\n  box-sizing: border-box;\n}\n\n.select-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding-left: 13px;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100%;\n  border: 0;\n  background: transparent;\n  font-size: 16px;\n  outline: none;\n  -webkit-appearance: none;\n  appearance: none;\n  font-size: 15px;\n  color: rgb(102, 102, 102);\n}\n\n.select-container[_ngcontent-%COMP%]:after {\n  content: \"keyboard_arrow_down\";\n  font-family: \"material icons\";\n  font-size: 24px;\n  color: #666;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n\n.skip[_ngcontent-%COMP%] {\n  background: #84a98c;\n  color: #e9edc9;\n  font-weight: bold;\n  border: none;\n  margin: 5px 30px;\n  height: 40px;\n  width: 40%;\n  font-size: 15px;\n  padding: 2px 13px;\n  border-radius: 15px;\n  transition: 500ms;\n  cursor: pointer;\n}\n\n.back[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  border: none;\n  margin: 5px 30px;\n  height: 40px;\n  width: 40%;\n  font-size: 15px;\n  padding: 2px 13px;\n  border-radius: 15px;\n  transition: 500ms;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: 1px 1px 5px #e9edc9;\n}\n\n.botoes-1step[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZXRhcGFzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9Qcm9qZXRvJTIwZnJvbnQvZm9ybXVsYXJpby1hbmd1bGFyL2Zvcm11bGFyaW8tYW5ndWxhci9zcmMvYXBwL2Zvcm0tZm9ybXVsYXJpby9mb3JtLWV0YXBhcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNORjs7QURVQTs7O0VBR0UseUJBakJHO0FDVUw7O0FEVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBekJHO0VBMEJILG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0FDUEY7O0FEVUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBakNLO0VBa0NMLG1CQUFBO0FDUEY7O0FEVUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ1BGOztBRFVBO0VBQ0UsbUJBbERHO0VBbURILHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ1BGOztBRFVBO0VBQ0UsZ0JBQUE7QUNQRjs7QURVQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0UsWUFBQTtBQ1BGOztBRFVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDUEY7O0FEVUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ1BGOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDTkY7O0FEUUE7RUFDRSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBNUhJO0VBNkhKLGNBOUhHO0VBK0hILGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDTEY7O0FEUUE7RUFDRSwrQkFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDTEYiLCJmaWxlIjoiZm9ybS1ldGFwYXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmk6I2Q0YTM3MztcbiRzZWM6I2ZhZWRjZDtcbiR0ZXI6I2U5ZWRjOTtcbiRidG46ICM4NGE5OGM7XG4kZm9udGM6IzI2MjcyNTtcblxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbmRpdiNzdGVwMSxcbmRpdiNzdGVwMixcbmRpdiNzdGVwMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXI7XG59XG5cbi5ldGFwYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAkc2VjO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICMwMDAwMDBhODtcbn1cblxuLmV0YXBhIGgzIHtcbiAgd2lkdGg6IDkwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiA1cHggMzBweDtcbiAgY29sb3I6ICRmb250YztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmVycm8ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAkc2VjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICBtYXJnaW46IDVweCAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDk3JTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAycHggMTNweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJ0ZXN0ZVwiO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbmlucHV0OmFjdGl2ZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuc21hbGwge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA5NyU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLnNlbGVjdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcbn1cbi5zZWxlY3QtY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJrZXlib2FyZF9hcnJvd19kb3duXCI7XG4gIGZvbnQtZmFtaWx5OiBcIm1hdGVyaWFsIGljb25zXCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM2NjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2tpcCB7XG4gIGJhY2tncm91bmQ6ICRidG47XG4gIGNvbG9yOiAkdGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDVweCAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYWNrIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDVweCAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICR0ZXI7XG59XG5cbi5ib3RvZXMtMXN0ZXAge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iLCJmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYjc3RlcDEsXG5kaXYjc3RlcDIsXG5kaXYjc3RlcDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllZGM5O1xufVxuXG4uZXRhcGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZhZWRjZDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNjU4ODIzNTI5NCk7XG59XG5cbi5ldGFwYSBoMyB7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogNXB4IDMwcHg7XG4gIGNvbG9yOiAjMjYyNzI1O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZXJybyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmYWVkY2Q7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmNmY2Y7XG4gIG1hcmdpbjogNXB4IDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogOTclO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDJweCAxM3B4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dDo6YWZ0ZXIge1xuICBjb250ZW50OiBcInRlc3RlXCI7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuaW5wdXQ6YWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5zbWFsbCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmNmY2Y7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDk3JTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4uc2VsZWN0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNlbGVjdC1jb250YWluZXIgc2VsZWN0IHtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XG59XG5cbi5zZWxlY3QtY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJrZXlib2FyZF9hcnJvd19kb3duXCI7XG4gIGZvbnQtZmFtaWx5OiBcIm1hdGVyaWFsIGljb25zXCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM2NjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2tpcCB7XG4gIGJhY2tncm91bmQ6ICM4NGE5OGM7XG4gIGNvbG9yOiAjZTllZGM5O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDVweCAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYWNrIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDVweCAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNlOWVkYzk7XG59XG5cbi5ib3RvZXMtMXN0ZXAge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */"] });


/***/ }),

/***/ 1825:
/*!**********************************************************************!*\
  !*** ./src/app/form-formulario/form-etapa1/form-etapa1.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormEtapa1Component": () => (/* binding */ FormEtapa1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);



class FormEtapa1Component {
    constructor(route) {
        this.route = route;
        this.nome = "";
        this.email = "";
        this.nomeIgreja = "";
    }
    send() {
    }
    ngOnInit() {
    }
}
FormEtapa1Component.ɵfac = function FormEtapa1Component_Factory(t) { return new (t || FormEtapa1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
FormEtapa1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormEtapa1Component, selectors: [["app-form-etapa1"]], decls: 18, vars: 0, consts: [["id", "step1", 1, "etapa"], [1, "erro"], ["type", "text", "id", "Name", "name", "nome", "placeholder", "Nome completo", "required", "", "ngModel", "", 1, "etp1"], ["type", "email", "id", "Email", "name", "email", "placeholder", "Email do Contato", "required", "", "ngModel", "", "email", "", 1, "etp1"], ["type", "text", "id", "CompanyName", "name", "nomeIgreja", "placeholder", "Nome da Igreja", "required", "", "ngModel", "", 1, "etp1"], [1, "botoes-1step"], ["routerLink", "/etp2", 1, "skip"]], template: function FormEtapa1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dados Pessoais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Preencha todos os campos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ex: Nome Sobrenome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ex: exemplo@dominio.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ex: Igreja Batista InChurch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5)(15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Proximo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #d4a373;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZXRhcGExLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvamV0byUyMGZyb250L2Zvcm11bGFyaW8tYW5ndWxhci9mb3JtdWxhcmlvLWFuZ3VsYXIvc3JjL2FwcC9mb3JtLWZvcm11bGFyaW8vZm9ybS1ldGFwYTEvZm9ybS1ldGFwYTEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6ImZvcm0tZXRhcGExLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0YTM3Mztcbn1cbiIsImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRhMzczO1xufSJdfQ== */", "form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 80%;\n  border-radius: 20px;\n  text-align: center;\n}\n\ndiv#step1[_ngcontent-%COMP%], div#step2[_ngcontent-%COMP%], div#step3[_ngcontent-%COMP%] {\n  background-color: #e9edc9;\n}\n\n.etapa[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background: #faedcd;\n  border-radius: 15px;\n  padding: 10px 0px;\n  align-items: center;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6588235294);\n}\n\n.etapa[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: left;\n  margin: 5px 30px;\n  color: #262725;\n  margin-bottom: 15px;\n}\n\n.erro[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 100%;\n  margin-left: 50px;\n  color: red;\n  font-size: 13px;\n  display: none;\n}\n\ninput[_ngcontent-%COMP%] {\n  background: #faedcd;\n  border: 1px solid #cfcfcf;\n  margin: 5px 0px;\n  height: 40px;\n  width: 97%;\n  font-size: 15px;\n  padding: 2px 13px;\n  border-radius: 15px;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%]::after {\n  content: \"teste\";\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  align-items: center;\n  padding: 2px 4px;\n  font-size: smaller;\n}\n\ninput[_ngcontent-%COMP%]:active {\n  border: none;\n}\n\nsmall[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding-left: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n  border: 1px solid #cfcfcf;\n  height: 40px;\n  width: 97%;\n  border-radius: 15px;\n  box-sizing: border-box;\n  margin: 5px 0px;\n}\n\n.select-container[_ngcontent-%COMP%] {\n  height: 100%;\n  border: none;\n  position: relative;\n  border-radius: 3px;\n  top: 50%;\n  transform: translateY(-50%);\n  box-sizing: border-box;\n}\n\n.select-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding-left: 13px;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100%;\n  border: 0;\n  background: transparent;\n  font-size: 16px;\n  outline: none;\n  -webkit-appearance: none;\n  appearance: none;\n  font-size: 15px;\n  color: rgb(102, 102, 102);\n}\n\n.select-container[_ngcontent-%COMP%]:after {\n  content: \"keyboard_arrow_down\";\n  font-family: \"material icons\";\n  font-size: 24px;\n  color: #666;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n\n.skip[_ngcontent-%COMP%] {\n  background: #84a98c;\n  color: #e9edc9;\n  font-weight: bold;\n  border: none;\n  margin: 5px 30px;\n  height: 40px;\n  width: 40%;\n  font-size: 15px;\n  padding: 2px 13px;\n  border-radius: 15px;\n  transition: 500ms;\n  cursor: pointer;\n}\n\n.back[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  border: none;\n  margin: 5px 30px;\n  height: 40px;\n  width: 40%;\n  font-size: 15px;\n  padding: 2px 13px;\n  border-radius: 15px;\n  transition: 500ms;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: 1px 1px 5px #e9edc9;\n}\n\n.botoes-1step[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZXRhcGFzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9Qcm9qZXRvJTIwZnJvbnQvZm9ybXVsYXJpby1hbmd1bGFyL2Zvcm11bGFyaW8tYW5ndWxhci9zcmMvYXBwL2Zvcm0tZm9ybXVsYXJpby9mb3JtLWV0YXBhcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNORjs7QURVQTs7O0VBR0UseUJBakJHO0FDVUw7O0FEVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBekJHO0VBMEJILG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0FDUEY7O0FEVUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBakNLO0VBa0NMLG1CQUFBO0FDUEY7O0FEVUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ1BGOztBRFVBO0VBQ0UsbUJBbERHO0VBbURILHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ1BGOztBRFVBO0VBQ0UsZ0JBQUE7QUNQRjs7QURVQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0UsWUFBQTtBQ1BGOztBRFVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDUEY7O0FEVUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ1BGOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDTkY7O0FEUUE7RUFDRSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBNUhJO0VBNkhKLGNBOUhHO0VBK0hILGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDTEY7O0FEUUE7RUFDRSwrQkFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDTEYiLCJmaWxlIjoiZm9ybS1ldGFwYXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmk6I2Q0YTM3MztcbiRzZWM6I2ZhZWRjZDtcbiR0ZXI6I2U5ZWRjOTtcbiRidG46ICM4NGE5OGM7XG4kZm9udGM6IzI2MjcyNTtcblxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbmRpdiNzdGVwMSxcbmRpdiNzdGVwMixcbmRpdiNzdGVwMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXI7XG59XG5cbi5ldGFwYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAkc2VjO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICMwMDAwMDBhODtcbn1cblxuLmV0YXBhIGgzIHtcbiAgd2lkdGg6IDkwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiA1cHggMzBweDtcbiAgY29sb3I6ICRmb250YztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmVycm8ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAkc2VjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICBtYXJnaW46IDVweCAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDk3JTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAycHggMTNweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJ0ZXN0ZVwiO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbmlucHV0OmFjdGl2ZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuc21hbGwge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA5NyU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLnNlbGVjdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcbn1cbi5zZWxlY3QtY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJrZXlib2FyZF9hcnJvd19kb3duXCI7XG4gIGZvbnQtZmFtaWx5OiBcIm1hdGVyaWFsIGljb25zXCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM2NjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2tpcCB7XG4gIGJhY2tncm91bmQ6ICRidG47XG4gIGNvbG9yOiAkdGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDVweCAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYWNrIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDVweCAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICR0ZXI7XG59XG5cbi5ib3RvZXMtMXN0ZXAge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iLCJmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYjc3RlcDEsXG5kaXYjc3RlcDIsXG5kaXYjc3RlcDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllZGM5O1xufVxuXG4uZXRhcGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZhZWRjZDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNjU4ODIzNTI5NCk7XG59XG5cbi5ldGFwYSBoMyB7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogNXB4IDMwcHg7XG4gIGNvbG9yOiAjMjYyNzI1O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZXJybyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmYWVkY2Q7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmNmY2Y7XG4gIG1hcmdpbjogNXB4IDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogOTclO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDJweCAxM3B4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dDo6YWZ0ZXIge1xuICBjb250ZW50OiBcInRlc3RlXCI7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuaW5wdXQ6YWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5zbWFsbCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmNmY2Y7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDk3JTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4uc2VsZWN0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNlbGVjdC1jb250YWluZXIgc2VsZWN0IHtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XG59XG5cbi5zZWxlY3QtY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJrZXlib2FyZF9hcnJvd19kb3duXCI7XG4gIGZvbnQtZmFtaWx5OiBcIm1hdGVyaWFsIGljb25zXCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM2NjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2tpcCB7XG4gIGJhY2tncm91bmQ6ICM4NGE5OGM7XG4gIGNvbG9yOiAjZTllZGM5O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDVweCAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYWNrIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDVweCAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNlOWVkYzk7XG59XG5cbi5ib3RvZXMtMXN0ZXAge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Jlcy5zY3NzIn0= */"] });


/***/ }),

/***/ 1146:
/*!**********************************************************************!*\
  !*** ./src/app/form-formulario/form-etapa2/form-etapa2.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormEtapa2Component": () => (/* binding */ FormEtapa2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class FormEtapa2Component {
    constructor() { }
    ngOnInit() {
    }
}
FormEtapa2Component.ɵfac = function FormEtapa2Component_Factory(t) { return new (t || FormEtapa2Component)(); };
FormEtapa2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormEtapa2Component, selectors: [["app-form-etapa2"]], decls: 31, vars: 0, consts: [["id", "step2", 1, "etapa"], [1, "erro"], ["type", "text", "id", "cep", "name", "zipcode", "placeholder", "CEP", "required", "", 1, "etp2"], ["type", "text", "id", "localidade", "name", "city", "placeholder", "Cidade", "required", "", 1, "etp2"], ["type", "text", "id", "uf", "name", "state", "placeholder", "Estado", "required", "", 1, "etp2"], ["type", "text", "id", "bairro", "placeholder", "Bairro", "required", "", 1, "etp2"], ["type", "text", "id", "logradouro", "placeholder", "Logradouro", "required", "", 1, "etp2"], ["type", "text", "id", "CompanyAddress2", "placeholder", "N\u00FAmero", "required", "", 1, "etp2"], ["type", "text", "id", "complemento", "placeholder", "Complemento", 1, "etp2"], [1, "botoes"], ["routerLink", "", 1, "back"], ["routerLink", "/etp3", 1, "skip"]], template: function FormEtapa2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Endere\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Preencha todos os campos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ex: 00000-000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ex: Rio de Janeiro, Minas Gerais...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ex: Resende, Belo Horizonte...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ex: Jardim Alegria, Santa L\u00FAcia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ex: Rua inChurch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ex: 456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Ex: bloco, apartamento...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9)(27, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Voltar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Proximo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWV0YXBhMi5jb21wb25lbnQuc2NzcyJ9 */", "form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 80%;\n  border-radius: 20px;\n  text-align: center;\n}\n\ndiv#step1[_ngcontent-%COMP%], div#step2[_ngcontent-%COMP%], div#step3[_ngcontent-%COMP%] {\n  background-color: #e9edc9;\n}\n\n.etapa[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background: #faedcd;\n  border-radius: 15px;\n  padding: 10px 0px;\n  align-items: center;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6588235294);\n}\n\n.etapa[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: left;\n  margin: 5px 30px;\n  color: #262725;\n  margin-bottom: 15px;\n}\n\n.erro[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 100%;\n  margin-left: 50px;\n  color: red;\n  font-size: 13px;\n  display: none;\n}\n\ninput[_ngcontent-%COMP%] {\n  background: #faedcd;\n  border: 1px solid #cfcfcf;\n  margin: 5px 0px;\n  height: 40px;\n  width: 97%;\n  font-size: 15px;\n  padding: 2px 13px;\n  border-radius: 15px;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%]::after {\n  content: \"teste\";\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  align-items: center;\n  padding: 2px 4px;\n  font-size: smaller;\n}\n\ninput[_ngcontent-%COMP%]:active {\n  border: none;\n}\n\nsmall[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding-left: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n  border: 1px solid #cfcfcf;\n  height: 40px;\n  width: 97%;\n  border-radius: 15px;\n  box-sizing: border-box;\n  margin: 5px 0px;\n}\n\n.select-container[_ngcontent-%COMP%] {\n  height: 100%;\n  border: none;\n  position: relative;\n  border-radius: 3px;\n  top: 50%;\n  transform: translateY(-50%);\n  box-sizing: border-box;\n}\n\n.select-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding-left: 13px;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100%;\n  border: 0;\n  background: transparent;\n  font-size: 16px;\n  outline: none;\n  -webkit-appearance: none;\n  appearance: none;\n  font-size: 15px;\n  color: rgb(102, 102, 102);\n}\n\n.select-container[_ngcontent-%COMP%]:after {\n  content: \"keyboard_arrow_down\";\n  font-family: \"material icons\";\n  font-size: 24px;\n  color: #666;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n\n.skip[_ngcontent-%COMP%] {\n  background: #84a98c;\n  color: #e9edc9;\n  font-weight: bold;\n  border: none;\n  margin: 5px 30px;\n  height: 40px;\n  width: 40%;\n  font-size: 15px;\n  padding: 2px 13px;\n  border-radius: 15px;\n  transition: 500ms;\n  cursor: pointer;\n}\n\n.back[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  border: none;\n  margin: 5px 30px;\n  height: 40px;\n  width: 40%;\n  font-size: 15px;\n  padding: 2px 13px;\n  border-radius: 15px;\n  transition: 500ms;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: 1px 1px 5px #e9edc9;\n}\n\n.botoes-1step[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZXRhcGFzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9Qcm9qZXRvJTIwZnJvbnQvZm9ybXVsYXJpby1hbmd1bGFyL2Zvcm11bGFyaW8tYW5ndWxhci9zcmMvYXBwL2Zvcm0tZm9ybXVsYXJpby9mb3JtLWV0YXBhcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNORjs7QURVQTs7O0VBR0UseUJBakJHO0FDVUw7O0FEVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBekJHO0VBMEJILG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0FDUEY7O0FEVUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBakNLO0VBa0NMLG1CQUFBO0FDUEY7O0FEVUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ1BGOztBRFVBO0VBQ0UsbUJBbERHO0VBbURILHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ1BGOztBRFVBO0VBQ0UsZ0JBQUE7QUNQRjs7QURVQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0UsWUFBQTtBQ1BGOztBRFVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDUEY7O0FEVUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ1BGOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDTkY7O0FEUUE7RUFDRSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBNUhJO0VBNkhKLGNBOUhHO0VBK0hILGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDTEY7O0FEUUE7RUFDRSwrQkFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDTEYiLCJmaWxlIjoiZm9ybS1ldGFwYXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmk6I2Q0YTM3MztcbiRzZWM6I2ZhZWRjZDtcbiR0ZXI6I2U5ZWRjOTtcbiRidG46ICM4NGE5OGM7XG4kZm9udGM6IzI2MjcyNTtcblxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbmRpdiNzdGVwMSxcbmRpdiNzdGVwMixcbmRpdiNzdGVwMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXI7XG59XG5cbi5ldGFwYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAkc2VjO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICMwMDAwMDBhODtcbn1cblxuLmV0YXBhIGgzIHtcbiAgd2lkdGg6IDkwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiA1cHggMzBweDtcbiAgY29sb3I6ICRmb250YztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmVycm8ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAkc2VjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICBtYXJnaW46IDVweCAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDk3JTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAycHggMTNweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJ0ZXN0ZVwiO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbmlucHV0OmFjdGl2ZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuc21hbGwge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA5NyU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLnNlbGVjdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcbn1cbi5zZWxlY3QtY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJrZXlib2FyZF9hcnJvd19kb3duXCI7XG4gIGZvbnQtZmFtaWx5OiBcIm1hdGVyaWFsIGljb25zXCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM2NjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2tpcCB7XG4gIGJhY2tncm91bmQ6ICRidG47XG4gIGNvbG9yOiAkdGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDVweCAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYWNrIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDVweCAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICR0ZXI7XG59XG5cbi5ib3RvZXMtMXN0ZXAge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iLCJmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYjc3RlcDEsXG5kaXYjc3RlcDIsXG5kaXYjc3RlcDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllZGM5O1xufVxuXG4uZXRhcGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZhZWRjZDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNjU4ODIzNTI5NCk7XG59XG5cbi5ldGFwYSBoMyB7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogNXB4IDMwcHg7XG4gIGNvbG9yOiAjMjYyNzI1O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZXJybyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmYWVkY2Q7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmNmY2Y7XG4gIG1hcmdpbjogNXB4IDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogOTclO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDJweCAxM3B4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dDo6YWZ0ZXIge1xuICBjb250ZW50OiBcInRlc3RlXCI7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuaW5wdXQ6YWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5zbWFsbCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmNmY2Y7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDk3JTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4uc2VsZWN0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNlbGVjdC1jb250YWluZXIgc2VsZWN0IHtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XG59XG5cbi5zZWxlY3QtY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJrZXlib2FyZF9hcnJvd19kb3duXCI7XG4gIGZvbnQtZmFtaWx5OiBcIm1hdGVyaWFsIGljb25zXCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM2NjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2tpcCB7XG4gIGJhY2tncm91bmQ6ICM4NGE5OGM7XG4gIGNvbG9yOiAjZTllZGM5O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDVweCAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYWNrIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDVweCAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNlOWVkYzk7XG59XG5cbi5ib3RvZXMtMXN0ZXAge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Jlcy5zY3NzIn0= */"] });


/***/ }),

/***/ 2137:
/*!**********************************************************************!*\
  !*** ./src/app/form-formulario/form-etapa3/form-etapa3.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormEtapa3Component": () => (/* binding */ FormEtapa3Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);



class FormEtapa3Component {
    constructor() { }
    ngOnInit() {
    }
}
FormEtapa3Component.ɵfac = function FormEtapa3Component_Factory(t) { return new (t || FormEtapa3Component)(); };
FormEtapa3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormEtapa3Component, selectors: [["app-form-etapa3"]], decls: 195, vars: 0, consts: [["id", "step3", 1, "etapa"], [1, "erro"], ["type", "number", "maxlength", "18", "minlength", "14", "id", "CustomFieldsCompanyCNPJ", "placeholder", "CNPJ da Igreja", "required", "", 1, "etp3"], ["type", "text", "id", "CustomFieldsCompanyRazaoSocial", "placeholder", "Raz\u00E3o Social da Igreja", "required", "", 1, "etp3"], ["type", "text", "id", "CustomFieldsCompanyUsu\u00E1rioGranito", "placeholder", "Nome Respons\u00E1vel Financeiro", "required", "", 1, "etp3"], ["type", "email", "id", "CustomFieldsCompanyEmailRespons\u00E1velGranito", "placeholder", "Email Respons\u00E1vel Financeiro", "required", "", 1, "etp3"], ["type", "tel", "id", "CustomFieldsCompanyTelefoneRespons\u00E1velGranito", "data-mask", "(00) 00000-0000", "placeholder", "Telefone Respons\u00E1vel Financeiro", "required", "", 1, "etp3"], [1, "container"], [1, "select-container"], ["name", "", "id", "CustomFieldsCompanyPrimeiraSolucao"], ["value", "", "disabled", "", "selected", "", 1, "placeSelect"], ["value", "TOTEM"], ["value", "POS (Maquininha)"], ["value", "Painel de Controle inChurch"], ["value", "Guia de Curr\u00EDculos e Empresas"], ["value", "Notifica\u00E7\u00F5es de Push"], ["value", "Pedidos de Ora\u00E7\u00E3o"], ["value", "Gest\u00E3o de C\u00E9lulas e Pequenos Grupos"], ["value", "Gest\u00E3o de Membresia"], ["value", "Gest\u00E3o Financeira"], ["value", "Doa\u00E7\u00F5es"], ["value", "Eventos/Inscri\u00E7\u00F5es"], ["value", "Agenda da Igreja"], ["value", "Multiplicador de Audi\u00EAncia (Parceria Multiplier App)"], ["value", "Transmiss\u00E3o Ao Vivo"], ["value", "Downloads"], ["value", "Palavras"], ["value", "B\u00EDblia"], ["value", "P\u00E1ginas Multiuso"], ["value", "Not\u00EDcias"], ["value", "N\u00EDveis de Permiss\u00E3o"], ["value", "Grupos"], ["value", "Multigestor"], ["value", "Qualidade de usabilidade inChurch"], ["value", "Qualidade de Design inChurch"], ["value", "Sistema Integrado"], ["name", "", "id", "CustomFieldsCompanySegundaSolucao"], ["name", "", "id", "CustomFieldsCompanyTerceiraSolucao"], [1, "botoes"], ["routerLink", "/etp2", 1, "back"], ["type", "submit", "id", "btn-enviar"]], template: function FormEtapa3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dados financeiros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Preencha todos os campos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ex: xx.xxx.xxx\\xxxx-xx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ex: Igreja Batista InChurch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ex: Nome Sobrenome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ex: exemplo@dominio.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ex: (00)00000-0000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7)(21, "div", 8)(22, "select", 9)(23, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Primeira solu\u00E7\u00E3o que interessou o cliente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "TOTEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "POS (Maquininha) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Painel de Controle inChurch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Guia de Curr\u00EDculos e Empresas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Notifica\u00E7\u00F5es de Push ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Pedidos de Ora\u00E7\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Gest\u00E3o de C\u00E9lulas e Pequenos Grupos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Gest\u00E3o de Membresia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Gest\u00E3o Financeira ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Doa\u00E7\u00F5es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Eventos/Inscri\u00E7\u00F5es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Agenda da Igreja ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Multiplicador de Audi\u00EAncia (Parceria Multiplier App) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Transmiss\u00E3o Ao Vivo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Downloads ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Palavras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "B\u00EDblia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "P\u00E1ginas Multiuso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Not\u00EDcias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "N\u00EDveis de Permiss\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Grupos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Multigestor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Qualidade de usabilidade inChurch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Qualidade de Design inChurch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sistema Integrado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Ex: Eventos, Palavras, Membresia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 7)(78, "div", 8)(79, "select", 36)(80, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Segunda solu\u00E7\u00E3o que interessou o cliente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "TOTEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "POS (Maquininha) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Painel de Controle inChurch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Guia de Curr\u00EDculos e Empresas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Notifica\u00E7\u00F5es de Push ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Pedidos de Ora\u00E7\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Gest\u00E3o de C\u00E9lulas e Pequenos Grupos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Gest\u00E3o de Membresia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Gest\u00E3o Financeira ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Doa\u00E7\u00F5es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Eventos/Inscri\u00E7\u00F5es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Agenda da Igreja ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Multiplicador de Audi\u00EAncia (Parceria Multiplier App) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Transmiss\u00E3o Ao Vivo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Downloads ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Palavras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "B\u00EDblia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "P\u00E1ginas Multiuso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Not\u00EDcias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "N\u00EDveis de Permiss\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Grupos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Multigestor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Qualidade de usabilidade inChurch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Qualidade de Design inChurch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Sistema Integrado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Ex: Eventos, Palavras, Membresia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 7)(135, "div", 8)(136, "select", 37)(137, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Terceira solu\u00E7\u00E3o que interessou o cliente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "TOTEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "POS (Maquininha) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Painel de Controle inChurch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Guia de Curr\u00EDculos e Empresas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Notifica\u00E7\u00F5es de Push ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Pedidos de Ora\u00E7\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Gest\u00E3o de C\u00E9lulas e Pequenos Grupos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Gest\u00E3o de Membresia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Gest\u00E3o Financeira ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Doa\u00E7\u00F5es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Eventos/Inscri\u00E7\u00F5es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Agenda da Igreja ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Multiplicador de Audi\u00EAncia (Parceria Multiplier App) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Transmiss\u00E3o Ao Vivo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Downloads ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Palavras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "B\u00EDblia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "P\u00E1ginas Multiuso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Not\u00EDcias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "N\u00EDveis de Permiss\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Grupos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Multigestor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Qualidade de usabilidade inChurch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Qualidade de Design inChurch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Sistema Integrado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Ex: Eventos, Palavras, Membresia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 38)(192, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Voltar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWV0YXBhMy5jb21wb25lbnQuc2NzcyJ9 */", "form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 80%;\n  border-radius: 20px;\n  text-align: center;\n}\n\ndiv#step1[_ngcontent-%COMP%], div#step2[_ngcontent-%COMP%], div#step3[_ngcontent-%COMP%] {\n  background-color: #e9edc9;\n}\n\n.etapa[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background: #faedcd;\n  border-radius: 15px;\n  padding: 10px 0px;\n  align-items: center;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6588235294);\n}\n\n.etapa[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: left;\n  margin: 5px 30px;\n  color: #262725;\n  margin-bottom: 15px;\n}\n\n.erro[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 100%;\n  margin-left: 50px;\n  color: red;\n  font-size: 13px;\n  display: none;\n}\n\ninput[_ngcontent-%COMP%] {\n  background: #faedcd;\n  border: 1px solid #cfcfcf;\n  margin: 5px 0px;\n  height: 40px;\n  width: 97%;\n  font-size: 15px;\n  padding: 2px 13px;\n  border-radius: 15px;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%]::after {\n  content: \"teste\";\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  align-items: center;\n  padding: 2px 4px;\n  font-size: smaller;\n}\n\ninput[_ngcontent-%COMP%]:active {\n  border: none;\n}\n\nsmall[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding-left: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n  border: 1px solid #cfcfcf;\n  height: 40px;\n  width: 97%;\n  border-radius: 15px;\n  box-sizing: border-box;\n  margin: 5px 0px;\n}\n\n.select-container[_ngcontent-%COMP%] {\n  height: 100%;\n  border: none;\n  position: relative;\n  border-radius: 3px;\n  top: 50%;\n  transform: translateY(-50%);\n  box-sizing: border-box;\n}\n\n.select-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding-left: 13px;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100%;\n  border: 0;\n  background: transparent;\n  font-size: 16px;\n  outline: none;\n  -webkit-appearance: none;\n  appearance: none;\n  font-size: 15px;\n  color: rgb(102, 102, 102);\n}\n\n.select-container[_ngcontent-%COMP%]:after {\n  content: \"keyboard_arrow_down\";\n  font-family: \"material icons\";\n  font-size: 24px;\n  color: #666;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n\n.skip[_ngcontent-%COMP%] {\n  background: #84a98c;\n  color: #e9edc9;\n  font-weight: bold;\n  border: none;\n  margin: 5px 30px;\n  height: 40px;\n  width: 40%;\n  font-size: 15px;\n  padding: 2px 13px;\n  border-radius: 15px;\n  transition: 500ms;\n  cursor: pointer;\n}\n\n.back[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  border: none;\n  margin: 5px 30px;\n  height: 40px;\n  width: 40%;\n  font-size: 15px;\n  padding: 2px 13px;\n  border-radius: 15px;\n  transition: 500ms;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: 1px 1px 5px #e9edc9;\n}\n\n.botoes-1step[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZXRhcGFzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9Qcm9qZXRvJTIwZnJvbnQvZm9ybXVsYXJpby1hbmd1bGFyL2Zvcm11bGFyaW8tYW5ndWxhci9zcmMvYXBwL2Zvcm0tZm9ybXVsYXJpby9mb3JtLWV0YXBhcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNORjs7QURVQTs7O0VBR0UseUJBakJHO0FDVUw7O0FEVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBekJHO0VBMEJILG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0FDUEY7O0FEVUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBakNLO0VBa0NMLG1CQUFBO0FDUEY7O0FEVUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ1BGOztBRFVBO0VBQ0UsbUJBbERHO0VBbURILHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ1BGOztBRFVBO0VBQ0UsZ0JBQUE7QUNQRjs7QURVQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0UsWUFBQTtBQ1BGOztBRFVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDUEY7O0FEVUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ1BGOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDTkY7O0FEUUE7RUFDRSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBNUhJO0VBNkhKLGNBOUhHO0VBK0hILGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDTEY7O0FEUUE7RUFDRSwrQkFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDTEYiLCJmaWxlIjoiZm9ybS1ldGFwYXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmk6I2Q0YTM3MztcbiRzZWM6I2ZhZWRjZDtcbiR0ZXI6I2U5ZWRjOTtcbiRidG46ICM4NGE5OGM7XG4kZm9udGM6IzI2MjcyNTtcblxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbmRpdiNzdGVwMSxcbmRpdiNzdGVwMixcbmRpdiNzdGVwMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXI7XG59XG5cbi5ldGFwYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAkc2VjO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICMwMDAwMDBhODtcbn1cblxuLmV0YXBhIGgzIHtcbiAgd2lkdGg6IDkwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiA1cHggMzBweDtcbiAgY29sb3I6ICRmb250YztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmVycm8ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAkc2VjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICBtYXJnaW46IDVweCAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDk3JTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAycHggMTNweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJ0ZXN0ZVwiO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbmlucHV0OmFjdGl2ZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuc21hbGwge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZjZmNmO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA5NyU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLnNlbGVjdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcbn1cbi5zZWxlY3QtY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJrZXlib2FyZF9hcnJvd19kb3duXCI7XG4gIGZvbnQtZmFtaWx5OiBcIm1hdGVyaWFsIGljb25zXCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM2NjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2tpcCB7XG4gIGJhY2tncm91bmQ6ICRidG47XG4gIGNvbG9yOiAkdGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDVweCAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYWNrIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDVweCAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICR0ZXI7XG59XG5cbi5ib3RvZXMtMXN0ZXAge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iLCJmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYjc3RlcDEsXG5kaXYjc3RlcDIsXG5kaXYjc3RlcDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllZGM5O1xufVxuXG4uZXRhcGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZhZWRjZDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNjU4ODIzNTI5NCk7XG59XG5cbi5ldGFwYSBoMyB7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogNXB4IDMwcHg7XG4gIGNvbG9yOiAjMjYyNzI1O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZXJybyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmYWVkY2Q7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmNmY2Y7XG4gIG1hcmdpbjogNXB4IDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogOTclO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDJweCAxM3B4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dDo6YWZ0ZXIge1xuICBjb250ZW50OiBcInRlc3RlXCI7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuaW5wdXQ6YWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5zbWFsbCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmNmY2Y7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDk3JTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4uc2VsZWN0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNlbGVjdC1jb250YWluZXIgc2VsZWN0IHtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XG59XG5cbi5zZWxlY3QtY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJrZXlib2FyZF9hcnJvd19kb3duXCI7XG4gIGZvbnQtZmFtaWx5OiBcIm1hdGVyaWFsIGljb25zXCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM2NjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2tpcCB7XG4gIGJhY2tncm91bmQ6ICM4NGE5OGM7XG4gIGNvbG9yOiAjZTllZGM5O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDVweCAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYWNrIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDVweCAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNlOWVkYzk7XG59XG5cbi5ib3RvZXMtMXN0ZXAge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Jlcy5zY3NzIn0= */"] });


/***/ }),

/***/ 6475:
/*!**************************************************************!*\
  !*** ./src/app/form-formulario/form-formulario.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormFormularioComponent": () => (/* binding */ FormFormularioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);



class FormFormularioComponent {
    constructor() {
        this.nome = "";
    }
    onSubmit(form) {
        console.log(form);
        console.log('subMETEU');
    }
    classifica() {
        for (var i = 0; i < 120; i++) {
            let errosLiqui = ((120 - i) * 2);
            console.log(`Acertou ${i}, fez ${errosLiqui - 120} pontos liquidos`);
        }
    }
    ngOnInit() {
        this.classifica();
    }
}
FormFormularioComponent.ɵfac = function FormFormularioComponent_Factory(t) { return new (t || FormFormularioComponent)(); };
FormFormularioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormFormularioComponent, selectors: [["app-form-formulario"]], decls: 4, vars: 0, consts: [[1, "card-forms"], [3, "ngSubmit"], ["f", "ngForm"]], template: function FormFormularioComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormFormularioComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onSubmit(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm], styles: ["form[_ngcontent-%COMP%] {\n  width: 85%;\n  align-self: center;\n  margin-bottom: 40%;\n}\n\n.card-forms[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 15px;\n  width: 100%;\n}\n\napp-form-etapa1[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL1Byb2pldG8lMjBmcm9udC9mb3JtdWxhcmlvLWFuZ3VsYXIvZm9ybXVsYXJpby1hbmd1bGFyL3NyYy9hcHAvZm9ybS1mb3JtdWxhcmlvL2Zvcm0tZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSkY7O0FEUUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7QUNMRiIsImZpbGUiOiJmb3JtLWZvcm11bGFyaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpOiNkNGEzNzM7XG4kc2VjOiNlOWVkYzk7XG4kdGVyOiNjY2Q1YWU7XG4kZm9udGM6IzI2MjcyNTtcblxuZm9ybSB7XG4gIHdpZHRoOiA4NSU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNDAlO1xufVxuXG5cbi5jYXJkLWZvcm1ze1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hcHAtZm9ybS1ldGFwYTF7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiZm9ybSB7XG4gIHdpZHRoOiA4NSU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNDAlO1xufVxuXG4uY2FyZC1mb3JtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmFwcC1mb3JtLWV0YXBhMSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Jlcy5zY3NzIn0= */"] });


/***/ }),

/***/ 1688:
/*!**************************************************!*\
  !*** ./src/app/form-home/form-home.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormHomeComponent": () => (/* binding */ FormHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _form_ilustracao_form_ilustracao_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-ilustracao/form-ilustracao.component */ 1964);
/* harmony import */ var _form_formulario_form_formulario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-formulario/form-formulario.component */ 6475);



class FormHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormHomeComponent.ɵfac = function FormHomeComponent_Factory(t) { return new (t || FormHomeComponent)(); };
FormHomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FormHomeComponent, selectors: [["app-form-home"]], decls: 3, vars: 0, template: function FormHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-form-ilustracao")(2, "app-form-formulario");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_form_ilustracao_form_ilustracao_component__WEBPACK_IMPORTED_MODULE_0__.FormIlustracaoComponent, _form_formulario_form_formulario_component__WEBPACK_IMPORTED_MODULE_1__.FormFormularioComponent], styles: ["div[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\napp-form-formulario[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: center;\n}\n\napp-form-ilustracao[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0taG9tZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL1Byb2pldG8lMjBmcm9udC9mb3JtdWxhcmlvLWFuZ3VsYXIvZm9ybXVsYXJpby1hbmd1bGFyL3NyYy9hcHAvZm9ybS1ob21lL2Zvcm0taG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6ImZvcm0taG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuYXBwLWZvcm0tZm9ybXVsYXJpb3tcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmFwcC1mb3JtLWlsdXN0cmFjYW97XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsImRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmFwcC1mb3JtLWZvcm11bGFyaW8ge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuYXBwLWZvcm0taWx1c3RyYWNhbyB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 1964:
/*!**************************************************************!*\
  !*** ./src/app/form-ilustracao/form-ilustracao.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormIlustracaoComponent": () => (/* binding */ FormIlustracaoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FormIlustracaoComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormIlustracaoComponent.ɵfac = function FormIlustracaoComponent_Factory(t) { return new (t || FormIlustracaoComponent)(); };
FormIlustracaoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormIlustracaoComponent, selectors: [["app-form-ilustracao"]], decls: 1, vars: 0, consts: [["src", "../../assets/GeladoIlustracao.png", "width", "400", "alt", "ilustra\u00E7\u00E3o"]], template: function FormIlustracaoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["h1[_ngcontent-%COMP%] {\n  color: #262725;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0taWx1c3RyYWNhby5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL1Byb2pldG8lMjBmcm9udC9mb3JtdWxhcmlvLWFuZ3VsYXIvZm9ybXVsYXJpby1hbmd1bGFyL3NyYy9hcHAvZm9ybS1pbHVzdHJhY2FvL2Zvcm0taWx1c3RyYWNhby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGNBSEs7QUNEUCIsImZpbGUiOiJmb3JtLWlsdXN0cmFjYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpOiNkNGEzNzM7XG4kc2VjOiNlOWVkYzk7XG4kdGVyOiNjY2Q1YWU7XG4kZm9udGM6IzI2MjcyNTtcblxuaDF7XG4gIGNvbG9yOiAkZm9udGM7XG59XG4iLCJoMSB7XG4gIGNvbG9yOiAjMjYyNzI1O1xufSJdfQ== */"] });


/***/ }),

/***/ 7526:
/*!************************************************!*\
  !*** ./src/app/form-nav/form-nav.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormNavComponent": () => (/* binding */ FormNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);


class FormNavComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormNavComponent.ɵfac = function FormNavComponent_Factory(t) { return new (t || FormNavComponent)(); };
FormNavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormNavComponent, selectors: [["app-form-nav"]], decls: 3, vars: 0, consts: [["src", "../../assets/gelaflix.png", "alt", "Logo", "width", "130"]], template: function FormNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar")(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar], styles: ["mat-toolbar.mat-toolbar.mat-toolbar-single-row[_ngcontent-%COMP%] {\n  align-items: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tbmF2LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vUHJvamV0byUyMGZyb250L2Zvcm11bGFyaW8tYW5ndWxhci9mb3JtdWxhcmlvLWFuZ3VsYXIvc3JjL2FwcC9mb3JtLW5hdi9mb3JtLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoiZm9ybS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhci5tYXQtdG9vbGJhci5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbn1cbiIsIm1hdC10b29sYmFyLm1hdC10b29sYmFyLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICBhbGlnbi1pdGVtczogZW5kO1xufSJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map