"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const renderApp_1 = __importDefault(require("./renderApp"));
const indexFilePath = path_1.default.resolve(__dirname, '../../../public/index.html');
// read it at start up, should always have it in memory
const indexFile = fs_1.readFileSync(indexFilePath, 'utf-8');
let RenderController = class RenderController {
    /**
     * Accepts all requests for rendering a route.
     */
    async render(request) {
        const app = renderApp_1.default(request.url);
        request
            .status(common_1.HttpStatus.OK)
            .send(indexFile.replace('<div id="app"></div>', `<div id="app">${app}</div>`));
    }
};
__decorate([
    common_1.Get('/*'),
    __param(0, common_1.Res())
], RenderController.prototype, "render", null);
RenderController = __decorate([
    common_1.Controller()
], RenderController);
exports.default = RenderController;
