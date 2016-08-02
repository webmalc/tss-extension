import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import  { BookmarkComponent } from './bookmark.component'


@Component({
    selector: 'tss-app',
    templateUrl: 'templates/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [BookmarkComponent]
})

export class AppComponent {}