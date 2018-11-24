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
/**
 * Stores information about a giving day, park hours, weather, etc
 */
class DayStore {
    constructor() {
        this.isLoading = false;
        this.all = [];
        this.loaded = false;
        this.nextLink = null;
        this.prevLink = null;
        this.activeDay = null;
    }
    async fetch() {
        if (this.loaded) {
            return;
        }
        this.isLoading = true;
        const response = await fetch(`${process.env.API_URL}/dates/today`);
        const json = await response.json();
        const { data, links } = json;
        mobx_1.runInAction(() => {
            this.all = data.days;
            // The current/active date will come from the service
            this.activeDay = data.active;
            this.nextLink = links.next;
            this.prevLink = links.prev;
            this.loaded = true;
            this.isLoading = false;
        });
    }
    findById(date) {
        return this.all.find(day => day.date === date);
    }
    async next() {
        // given the current, go to the next
        if (!this.activeDay) {
            return;
        }
        const index = this.all.findIndex(day => day.date === this.activeDay);
        if (index === -1) {
            return;
        }
        // if this does not exist we need to fetch
        const next = this.all[index + 1];
        if (!next) {
            // if it doesn't exist we need to check we have a next link
            if (this.nextLink) {
                this.isLoading = true;
                const response = await fetch(this.nextLink);
                const dates = await response.json();
                this.activeDay = null;
            }
            else {
                this.activeDay = null;
            }
        }
        else {
            this.activeDay = next.date;
        }
    }
    async previous() {
        // given the current, go to the next
        if (!this.activeDay) {
            return;
        }
        const index = this.all.findIndex(day => day.date === this.activeDay);
        if (index === -1) {
            return;
        }
        // if this does not exist we need to fetch
        const next = this.all[index - 1];
        if (!next) {
            // TODO: fetch
            this.activeDay = null;
        }
        else {
            this.activeDay = next.date;
        }
    }
    get today() {
        if (!this.activeDay) {
            return;
        }
        return this.findById(this.activeDay);
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
], DayStore.prototype, "nextLink", void 0);
__decorate([
    mobx_1.observable
], DayStore.prototype, "prevLink", void 0);
__decorate([
    mobx_1.observable
], DayStore.prototype, "activeDay", void 0);
__decorate([
    mobx_1.action
], DayStore.prototype, "fetch", null);
__decorate([
    mobx_1.action
], DayStore.prototype, "next", null);
__decorate([
    mobx_1.action
], DayStore.prototype, "previous", null);
__decorate([
    mobx_1.computed
], DayStore.prototype, "today", null);
__decorate([
    mobx_1.computed
], DayStore.prototype, "toJson", null);
exports.default = DayStore;
