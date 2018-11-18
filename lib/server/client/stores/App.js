"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("fetch-everywhere");
const mobx_1 = require("mobx");
class App {
    constructor() {
        this.showDay = false;
    }
    /**
     * Retrieves the activities for a given park
     * @param id
     */
    setShowDay(showDay) {
        this.showDay = showDay;
    }
}
__decorate([
    mobx_1.observable
], App.prototype, "showDay", void 0);
__decorate([
    mobx_1.action
], App.prototype, "setShowDay", null);
exports.default = App;
