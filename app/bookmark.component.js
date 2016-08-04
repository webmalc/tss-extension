"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var model_1 = require("./model");
var BookmarkComponent = (function () {
    function BookmarkComponent(route) {
        this.route = route;
    }
    BookmarkComponent.prototype.getParameterByName = function (name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    BookmarkComponent.prototype.ngOnInit = function () {
        this.categories = [
            new model_1.Category('test 1'), new model_1.Category('test 2')
        ];
        this.tags = [
            new model_1.Tag('tag 1'), new model_1.Tag('tag 2')
        ];
        this.bookmark = new model_1.Bookmark(this.getParameterByName('title'));
        this.bookmark.url = this.getParameterByName('url');
    };
    BookmarkComponent.prototype.save = function () {
        alert(1);
    };
    BookmarkComponent = __decorate([
        core_1.Component({
            templateUrl: 'templates/bookmark.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], BookmarkComponent);
    return BookmarkComponent;
}());
exports.BookmarkComponent = BookmarkComponent;
//# sourceMappingURL=bookmark.component.js.map