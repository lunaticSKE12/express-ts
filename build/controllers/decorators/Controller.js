"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("../../routes/loginRoutes");
exports.route = express_1.default.Router();
function controller(routePrefix) {
    return function (target) {
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
            if (path) {
                loginRoutes_1.router.get("" + routePrefix + path, routeHandler);
            }
        }
    };
}
exports.controller = controller;
