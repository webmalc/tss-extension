"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Base = (function () {
    function Base(title) {
        this.title = title;
    }
    Base.prototype.toString = function () {
        return this.title;
    };
    return Base;
}());
var Bookmark = (function (_super) {
    __extends(Bookmark, _super);
    function Bookmark() {
        _super.apply(this, arguments);
        this.era = 1;
    }
    return Bookmark;
}(Base));
exports.Bookmark = Bookmark;
var Category = (function (_super) {
    __extends(Category, _super);
    function Category() {
        _super.apply(this, arguments);
    }
    return Category;
}(Base));
exports.Category = Category;
var Tag = (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        _super.apply(this, arguments);
    }
    return Tag;
}(Base));
exports.Tag = Tag;
//# sourceMappingURL=model.js.map