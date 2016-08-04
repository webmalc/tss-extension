import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Category, Tag, Bookmark} from "./model";

@Component({
    templateUrl: 'templates/bookmark.component.html',
})

export class BookmarkComponent implements OnInit {

    public categories: Category[]
    public tags: Tag[]
    public bookmark: Bookmark

    constructor(
        private route: ActivatedRoute
    ) {

    }

    private getParameterByName (name) {
        let url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    public ngOnInit() {

        this.categories = [
            new Category('test 1'), new Category('test 2')
        ]
        this.tags = [
            new Tag('tag 1'), new Tag('tag 2')
        ]
        this.bookmark = new Bookmark(this.getParameterByName('title'))
        this.bookmark.url = this.getParameterByName('url')
    }

    public save() {
        alert(1)
    }
}
