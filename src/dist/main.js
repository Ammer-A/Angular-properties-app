"use strict";
exports.__esModule = true;
/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app/app.component");
var router_1 = require("@angular/router");
var routes_1 = require("./app/routes");
platform_browser_1.bootstrapApplication(app_component_1.AppComponent, {
    providers: [
        platform_browser_1.provideProtractorTestingSupport(),
        router_1.provideRouter(routes_1["default"])
    ]
})["catch"](function (err) { return console.error(err); });
