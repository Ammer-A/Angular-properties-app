"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var housing_location_component_1 = require("../housing-location/housing-location.component");
var common_1 = require("@angular/common");
var housing_service_1 = require("../housing.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.baseUrl = 'https://angular.io/assets/images/tutorials/faa';
        this.housingLocationList = [];
        this.filteredLocationList = [];
        this.housingService = core_1.inject(housing_service_1.HousingService);
        this.housingLocationList = this.housingService.getAllHousingLocations();
        this.filteredLocationList = this.housingLocationList;
        console.log(this.housingLocationList);
    }
    HomeComponent.prototype.filterResults = function (text) {
        if (!text) {
            this.filteredLocationList = this.housingLocationList;
            return;
        }
        this.filteredLocationList = this.housingLocationList.
            filter(function (hl) { return hl === null || hl === void 0 ? void 0 : hl.city.toLowerCase().includes(text.toLowerCase()); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            standalone: true,
            imports: [housing_location_component_1.HousingLocationComponent, common_1.CommonModule],
            template: "\n  <section>\n   <form>\n  <div class=\"form-group\">\n    <input type=\"text\" class= \"form-control\" placeholder=\"Filter by city\" #filter>\n    </div>\n    <div class=\"form-group\">\n    <button class=\"primary\" type=\"button\" (click) = \"filterResults(filter.value)\">Search</button>\n    </div>\n  </form>\n</section>\n  <section class=\"results\">\n  <app-housing-location *ngFor=\"let housingLocation of filteredLocationList\"  [housingLocation]=\"housingLocation\"> </app-housing-location>\n  </section>\n\n  ",
            styleUrl: './home.component.css'
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
