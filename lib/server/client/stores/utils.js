"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphabetical = (key, a, b) => {
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
