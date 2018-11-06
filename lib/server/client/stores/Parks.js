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
const alphabetical = (key, a, b) => {
    const aLookup = key ? a[key] : a;
    const bLookup = key ? b[key] : b;
    if (aLookup < bLookup) {
        return -1;
    }
    if (aLookup > bLookup) {
        return 1;
    }
    return 0;
};
class ParkStore {
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
        const response = await fetch(`${process.env.API_URL}/parks`);
        const parks = await response.json();
        mobx_1.runInAction(() => {
            // sort parks by name
            parks.sort(alphabetical.bind(undefined, 'name'));
            // do any internal manipulation
            parks.forEach(park => park.areas.sort(alphabetical.bind(undefined, null)));
            this.all = parks;
            this.loaded = true;
            this.isLoading = false;
        });
    }
    async fetchParkActivities(id) {
        if (!this.loaded) {
            await this.fetch();
        }
        const park = this.findById(id);
        if (!park) {
            throw new Error(`Could not find park ${id}.`);
        }
        if (!park.activities) {
            this.isLoading = true;
            const response = await fetch(`${process.env.API_URL}/parks/${id}/activities`);
            const activities = await response.json();
            mobx_1.runInAction(() => {
                activities.sort(alphabetical.bind(undefined, 'name'));
                this.all = this.all.map(p => {
                    if (p.id !== park.id) {
                        return p;
                    }
                    return Object.assign({}, p, { activities });
                });
                this.isLoading = false;
            });
        }
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
__decorate([
    mobx_1.action
], ParkStore.prototype, "fetchParkActivities", null);
exports.default = ParkStore;
