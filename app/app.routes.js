"use strict";
var router_1 = require('@angular/router');
var bookmark_component_1 = require('./bookmark.component');
var routes = [
    {
        path: '',
        redirectTo: '/bookmark',
        pathMatch: 'full'
    },
    {
        path: 'index.html',
        redirectTo: '/bookmark',
        pathMatch: 'full'
    },
    {
        path: 'bookmark',
        component: bookmark_component_1.BookmarkComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map