"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("fetch-everywhere");
const mobx_1 = require("mobx");
const Resort_1 = __importDefault(require("./Resort"));
const utils_1 = require("./utils");
class ResortStore {
    constructor() {
        this.isLoading = false;
        this.all = [];
        this.loaded = false;
    }
    async fetch() {
        if (this.loaded) {
            return;
        }
        this.isLoading = true;
        const response = await fetch(`${process.env.API_URL}/resorts`);
        const resorts = await response.json();
        mobx_1.runInAction(() => {
            // sort parks by name
            resorts.sort(utils_1.alphabetical.bind(undefined, 'name'));
            this.all = resorts.map(resort => new Resort_1.default(resort));
            this.loaded = true;
            this.isLoading = false;
        });
    }
    findById(id) {
        return this.all.find(resort => resort.id === id);
    }
    get toJson() {
        return this.all.map(resort => resort.toJson);
    }
}
__decorate([
    mobx_1.observable
], ResortStore.prototype, "isLoading", void 0);
__decorate([
    mobx_1.observable
], ResortStore.prototype, "all", void 0);
__decorate([
    mobx_1.observable
], ResortStore.prototype, "loaded", void 0);
__decorate([
    mobx_1.action
], ResortStore.prototype, "fetch", null);
__decorate([
    mobx_1.computed
], ResortStore.prototype, "toJson", null);
exports.default = ResortStore;
