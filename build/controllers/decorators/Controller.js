"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppRoute_1 = require("./../../AppRoute");
require("reflect-metadata");
function controller(routePrefix) {
    return function (target) {
        var router = AppRoute_1.AppRoute.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
            var method = Reflect.getMetadata('method', target.prototype, key);
            if (path) {
                router[method]("" + routePrefix + path, routeHandler);
            }
        }
    };
}
exports.controller = controller;
