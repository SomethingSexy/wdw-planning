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
const utils_1 = require("./utils");
class Park {
    constructor(json) {
        this.isLoading = false;
        this.loaded = false;
        this.activities = undefined;
        this.dining = undefined;
        this.id = json.id;
        this.description = json.description;
        this.image = json.image;
        this.areas = json.areas.slice().sort(utils_1.alphabetical.bind(undefined, null));
        this.activitiesCount = json.activitiesCount;
        this.diningCount = json.diningCount;
        this.name = json.name;
        this.type = json.type;
        this.location = json.location;
        this.loaded = true;
    }
    /**
     * Retrieves the activities for a given park
     * @param id
     */
    async fetchParkActivities() {
        if (!this.loaded) {
            throw new Error('Cannot fetch activities of a park that has not been loaded.');
        }
        if (!this.activities) {
            this.isLoading = true;
            const response = await fetch(`${process.env.API_URL}/parks/${this.id}/activities`);
            const activities = await response.json();
            mobx_1.runInAction(() => {
                activities.sort(utils_1.alphabetical.bind(undefined, 'name'));
                this.activities = activities;
                this.isLoading = false;
            });
        }
    }
    get toJson() {
        return {
            activities: this.activities,
            activitiesCount: this.activitiesCount,
            areas: this.areas,
            description: this.description,
            dining: this.dining,
            diningCount: this.diningCount,
            id: this.id,
            image: this.image,
            location: this.location,
            name: this.name,
            type: this.type
        };
    }
}
__decorate([
    mobx_1.observable
], Park.prototype, "isLoading", void 0);
__decorate([
    mobx_1.observable
], Park.prototype, "loaded", void 0);
__decorate([
    mobx_1.observable
], Park.prototype, "activities", void 0);
__decorate([
    mobx_1.action
], Park.prototype, "fetchParkActivities", null);
__decorate([
    mobx_1.computed
], Park.prototype, "toJson", null);
exports.default = Park;
