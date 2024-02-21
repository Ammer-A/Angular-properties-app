"use strict";
exports.__esModule = true;
var home_component_1 = require("./home/home.component");
var details_component_1 = require("./details/details.component");
var routeConfig = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        title: 'Home page'
    },
    {
        path: 'details/:id',
        component: details_component_1.DetailsComponent,
        title: 'Home details'
    }
];
exports["default"] = routeConfig;
