"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var home_component_1 = require("./home/home.component");
var router_1 = require("@angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'homes-app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            standalone: true,
            imports: [
                home_component_1.HomeComponent,
                router_1.RouterModule,
            ],
            templateUrl: './app.component.html',
            styleUrl: './app.component.css',
            template: "\n  <main>\n    <a [routerLink]=\"['/']\">\n      <header class=\"brand-name\">\n        <img class=\"brand-logo\" src=\"/assets/logo.svg\" alt=\"logo\" aria-hidden=\"true\">\n      </header>\n    </a>\n    <section class=\"content\">\n      <router-outlet></router-outlet>\n    </section>\n  </main>\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
