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
class ParkStore {
    constructor() {
        this.isLoading = false;
        this.all = [];
        this.loaded = false;
    }
    async fetch() {
        const response = await fetch(`${process.env.API_URL}/parks`);
        this.all = await response.json();
    }
    findById(id) {
        return this.all.find(place => place.id === id);
    }
}
__decorate([
    mobx_1.observable
], ParkStore.prototype, "isLoading", void 0);
__decorate([
    mobx_1.observable
], ParkStore.prototype, "all", void 0);
__decorate([
    mobx_1.observable
], ParkStore.prototype, "loaded", void 0);
__decorate([
    mobx_1.action
], ParkStore.prototype, "fetch", null);
exports.default = ParkStore;
