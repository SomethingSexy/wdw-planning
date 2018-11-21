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
const tempDays = [{
        date: '2018-10-20',
        id: '1',
        label: 'Thursday, March 2nd 2019',
        parkHours: [{
                close: '12:00 AM',
                id: 'a',
                name: 'Magic Kingdom',
                open: '10:00 AM',
            }]
    }];
/**
 * Stores information about a giving day, park hours, weather, etc
 */
class DayStore {
    constructor() {
        this.isLoading = false;
        this.all = [];
        this.loaded = false;
        this.activeDayIndex = 0;
    }
    async fetch() {
        if (this.loaded) {
            return;
        }
        this.isLoading = true;
        // const response = await fetch(`${process.env.API_URL}/days/`);
        // const parks: IPark[] = await response.json();
        mobx_1.runInAction(() => {
            this.all = tempDays;
            // The current/active date will come from the service
            this.activeDayIndex = 0;
            this.loaded = true;
            this.isLoading = false;
        });
    }
    findById(id) {
        return this.all.find(day => day.id === id);
    }
    get today() {
        return this.all[this.activeDayIndex];
    }
    get toJson() {
        return this.all;
    }
}
__decorate([
    mobx_1.observable
], DayStore.prototype, "isLoading", void 0);
__decorate([
    mobx_1.observable
], DayStore.prototype, "all", void 0);
__decorate([
    mobx_1.observable
], DayStore.prototype, "loaded", void 0);
__decorate([
    mobx_1.observable
], DayStore.prototype, "activeDayIndex", void 0);
__decorate([
    mobx_1.action
], DayStore.prototype, "fetch", null);
__decorate([
    mobx_1.computed
], DayStore.prototype, "today", null);
__decorate([
    mobx_1.computed
], DayStore.prototype, "toJson", null);
exports.default = DayStore;
