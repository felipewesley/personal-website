(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "lP1K");
/* harmony import */ var _components_apresentacao_grid_apresentacao_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/apresentacao-grid/apresentacao-grid.component */ "XIRo");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "container__welcome"], [1, "container__apresentacao"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-apresentacao-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"], _components_apresentacao_grid_apresentacao_grid_component__WEBPACK_IMPORTED_MODULE_2__["ApresentacaoGridComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQURKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXIge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "86Tl":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/home/components/apresentacao-grid/apresentacao-grid-item/apresentacao-grid-item.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ApresentacaoGridItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApresentacaoGridItemComponent", function() { return ApresentacaoGridItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");




class ApresentacaoGridItemComponent {
    constructor() {
        this.title = '';
        this.description = '';
        this.bgColor = '';
        this.bgImage = '';
    }
    ngOnInit() { }
}
ApresentacaoGridItemComponent.ɵfac = function ApresentacaoGridItemComponent_Factory(t) { return new (t || ApresentacaoGridItemComponent)(); };
ApresentacaoGridItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApresentacaoGridItemComponent, selectors: [["app-apresentacao-grid-item"]], inputs: { title: "title", description: "description", bgColor: "bgColor", bgImage: "bgImage" }, decls: 10, vars: 7, consts: [[1, "container"], ["matRipple", "", 3, "matRippleCentered", "matRippleDisabled", "matRippleUnbounded", "matRippleRadius"], [1, "card-header"], [1, "card-content"], [1, "background-absolute"], [3, "src"]], template: function ApresentacaoGridItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleCentered", false)("matRippleDisabled", false)("matRippleUnbounded", false)("matRippleRadius", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bgImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  box-sizing: border-box !important;\n}\n.container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 5px;\n  transition: ease-in-out 0.1s;\n  background: transparent;\n  z-index: 1;\n}\n.container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  letter-spacing: 1.1px;\n}\n.container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .background-absolute[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  box-sizing: content-box;\n  transition: ease-in-out 0.25s;\n  filter: brightness(0.25);\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.25);\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover   .background-absolute[_ngcontent-%COMP%] {\n  filter: brightness(0.35);\n  transform: scale(1.02);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcmVzZW50YWNhby1ncmlkLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFBO0VBQ0EsaUNBQUE7QUFBSjtBQUVJO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBRFI7QUFHUTtFQUNJLGVBQUE7QUFEWjtBQUlRO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FBRlo7QUFLUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQUhaO0FBTVE7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QUFKWjtBQU1ZO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtBQUpoQiIsImZpbGUiOiJhcHJlc2VudGFjYW8tZ3JpZC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG5cbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xuXG4gICAgbWF0LWNhcmQge1xuICAgICAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcm93LWdhcDogNXB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjFzO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgXG4gICAgICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWNrZ3JvdW5kLWFic29sdXRlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuMjVzO1xuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuMjUpO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yNSk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5iYWNrZ3JvdW5kLWFic29sdXRlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC4zNSk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ== */"] });


/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_design_design_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/design/design.module */ "VjqO");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "lP1K");
/* harmony import */ var _components_apresentacao_grid_apresentacao_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/apresentacao-grid/apresentacao-grid.component */ "XIRo");
/* harmony import */ var _components_apresentacao_grid_apresentacao_grid_item_apresentacao_grid_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/apresentacao-grid/apresentacao-grid-item/apresentacao-grid-item.component */ "86Tl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_design_design_module__WEBPACK_IMPORTED_MODULE_1__["DesignModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"],
        _components_apresentacao_grid_apresentacao_grid_component__WEBPACK_IMPORTED_MODULE_5__["ApresentacaoGridComponent"],
        _components_apresentacao_grid_apresentacao_grid_item_apresentacao_grid_item_component__WEBPACK_IMPORTED_MODULE_6__["ApresentacaoGridItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_design_design_module__WEBPACK_IMPORTED_MODULE_1__["DesignModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]] }); })();


/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "XIRo":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/components/apresentacao-grid/apresentacao-grid.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ApresentacaoGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApresentacaoGridComponent", function() { return ApresentacaoGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _apresentacao_grid_item_apresentacao_grid_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apresentacao-grid-item/apresentacao-grid-item.component */ "86Tl");


class ApresentacaoGridComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApresentacaoGridComponent.ɵfac = function ApresentacaoGridComponent_Factory(t) { return new (t || ApresentacaoGridComponent)(); };
ApresentacaoGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApresentacaoGridComponent, selectors: [["app-apresentacao-grid"]], decls: 11, vars: 0, consts: [[1, "container"], [1, "container__header"], [1, "container__content"], [1, "columns", "first-column"], ["title", "Forma\u00E7\u00E3o", "description", "T\u00E9cnico em inform\u00E1tica com \u00EAnfase no desenvolvimento de websites, formado no curso integrado juntamente com ensino m\u00E9dio, ano de 2018", "bgImage", "assets/apresentacao/backgrounds/formacao.jpg"], ["title", "Trabalho", "description", "Atualmente trabalhando na \u00E1rea de tecnologia da informa\u00E7\u00E3o como desenvolvedor web full-stack de uma aplica\u00E7\u00E3o CRM, em Curitiba", "bgImage", "assets/apresentacao/backgrounds/trabalho.jpg"], ["title", "Experi\u00EAncia", "description", "Desenvolvedor de sistemas web desde 2016, durante curso t\u00E9cnico. Cerca de 1 ano de est\u00E1gio na \u00E1rea e desenvolvedor no regime de PJ desde mar\u00E7o/2021", "bgImage", "assets/apresentacao/backgrounds/experiencia.jpg"], [1, "columns", "second-column"], ["title", "Estudo", "description", "Graduando em an\u00E1lise e desenvolvimento de sistemas, com previs\u00E3o para conclus\u00E3o do curso em dezembro de 2021", "bgImage", "assets/apresentacao/backgrounds/estudo.jpg"], ["title", "Hobby", "description", "Jogar futebol (campo e jogos eletr\u00F4nicos) e edi\u00E7\u00E3o e montagem de fotos atrav\u00E9s da ferramenta Photoshop", "bgImage", "assets/apresentacao/backgrounds/esporte.jpg"]], template: function ApresentacaoGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Me chamo Felipe, atualmente sou estudante e trabalho com desenvolvimento de software. Segue abaixo uma breve apresenta\u00E7\u00E3o sobre mim em pequenos cards. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-apresentacao-grid-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-apresentacao-grid-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-apresentacao-grid-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-apresentacao-grid-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-apresentacao-grid-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_apresentacao_grid_item_apresentacao_grid_item_component__WEBPACK_IMPORTED_MODULE_1__["ApresentacaoGridItemComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.container__content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 50%);\n  grid-template-rows: auto;\n  gap: 7.5px;\n}\n.container__content[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 7.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcmVzZW50YWNhby1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUhKO0FBS0k7RUFFSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLFVBYkc7QUFTWDtBQU1RO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FsQkQ7QUFjWCIsImZpbGUiOiJhcHJlc2VudGFjYW8tZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJGdyaWQtZ2FwOiA3LjVweDtcblxuLmNvbnRhaW5lciB7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgJl9fY29udGVudCB7XG5cbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgICAgICBnYXA6ICRncmlkLWdhcDtcblxuICAgICAgICAuY29sdW1ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHJvdy1nYXA6ICRncmlkLWdhcDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "lP1K":
/*!********************************************************************!*\
  !*** ./src/app/pages/home/components/welcome/welcome.component.ts ***!
  \********************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 10, vars: 0, consts: [[1, "container"], [1, "title"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Ol\u00E1, bem-vindo ao meu website! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "cite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Nunca \u00E9 tarde para ter um novo objetivo ou sonhar um novo sonho ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " - C. S. Lewis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .website[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQUo7QUFJUTtFQUFLLGVBQUE7RUFBaUIsU0FBQTtBQUE5QjtBQUNRO0VBQVcsa0JBQUE7QUFFbkIiLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHJvdy1nYXA6IDEwcHg7XG5cbiAgICAudGl0bGUge1xuXG4gICAgICAgIGgzIHsgZm9udC1zaXplOiAyMHB4OyBtYXJnaW46IDA7IH1cbiAgICAgICAgLndlYnNpdGUgeyBmb250LXN0eWxlOiBpdGFsaWM7IH1cbiAgICB9XG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map