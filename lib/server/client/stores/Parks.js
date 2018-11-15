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
const Park_1 = __importDefault(require("./Park"));
const utils_1 = require("./utils");
class ParkStore {
    constructor() {
        this.isLoading = false;
        // tslint:disable-next-line:prefer-array-literal
        this.all = [];
        this.loaded = false;
    }
    async fetch() {
        if (this.loaded) {
            return;
        }
        this.isLoading = true;
        const response = await fetch(`${process.env.API_URL}/parks`);
        const parks = await response.json();
        mobx_1.runInAction(() => {
            // sort parks by name
            parks.sort(utils_1.alphabetical.bind(undefined, 'name'));
            this.all = parks.map(park => new Park_1.default(park));
            this.loaded = true;
            this.isLoading = false;
        });
    }
    findById(id) {
        return this.all.find(park => park.id === id);
    }
    get toJson() {
        return this.all.map(park => park.toJson);
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
__decorate([
    mobx_1.computed
], ParkStore.prototype, "toJson", null);
exports.default = ParkStore;
